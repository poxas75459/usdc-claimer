/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5LJNGCPKcfq2YDLNYQPSyFMvmnkGzMRJMyukrWCd3J6BFrZiUjRB1rGXtWbuGoNZeQ51x915wWNZX3gbJ9Cyv7CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FEN8iw9VWrpy5FJd3ZjkbLymJLQTrzgw7gFBtvufECY22y1fsKQXh6N7SJ5aXEyFVP1axjUxwruvku6tuFYZaHq",
  "key1": "5m3dh7X87p6AUK1W2NxrTduN2QLB8YTWH1Jy9dm9nSZyX839nXVYLCLJKe57hiEvJCDifgGPaVLgJ1JbkJwpdLwJ",
  "key2": "4yz18JHqSMzcWR9HWPbcJZqmMZinfawj67SknkKqF24VNUHrumHHJqwx46drTCBnHd4FtZGDbcrcU3iHzqpnByo4",
  "key3": "67WmH1dPhTF6UaNjhdkcUJkXYxfmhi4P9TbvtmKQajL9cKNMS4rREBtpKSGyTQE8pjdJUaxUJJEcMsKEPZpD527t",
  "key4": "27zcoDVzTwQhxuJ9axAUm4FC29nibCMM8LmT5deDgiSDgybgFsSXY3ZQchN71RcGg7kgpSArydhn4n1XecxCUjD4",
  "key5": "5G5gPECWrB1B3ayG7fW6CubXktdGxerzed3RUjT8tohDLzkvpcKkEKBj1pyJgQFQgsrKFQxNAMSXf2ox6jFjjMps",
  "key6": "5pYiXRCYakiTrqMnT2KjqMFJBnfzq325z7DPnCzXXqj7sv2rxyYN2NU1T1WibN1gXALMqovf8cWbe21FzbiEsaS1",
  "key7": "23obrniUC7TMuNyaadaTz5VZccbkZrgBcyzM86VaGpLMv2484mCQaPhwS4UhMbWdvV2KfiHaBe34BUy8MbMGfatH",
  "key8": "5HA9aBGLvZyT2YMu1pjS7fkVpNpTk2hsnF551W194MEJrfYEptEQiphBjdp2L9t7MgMukXc8T7a2hCt36hJuYPFC",
  "key9": "JjgxF1o934hiEmpWGd6GzJ4SoyCYFVZ34W5L9DV6Ecf7oyADJz3X4Q1zwAJtWW2jbV14tAmT8SjbpWFpRYWEsfn",
  "key10": "39zimoZvePPuYA376oM8NUxHoL4ip4YBdqpqLCEhpLsjJQni8FnkXkHBDWPpqd5C56Nb1AR7o9ANXVMkpFNxGUkb",
  "key11": "41EkBzHUiHbG56jHTmJfu2kcaGHV1w7VRcDMicWNYHGB9rNc5qTDapZdpzcgX6BSyXH9SfY2cJ9VsbqB97JveKcu",
  "key12": "3PTZwW21oZmo4uPcnLB4GUSokXN6V1HopfkTMpEBKVGbG3UGSJvkqnCf8PwpBMTcVYGjE41KnJjDjyqwrienFcSH",
  "key13": "3w6y5VRETUfTPgu4aoeXJZtoVpQh31RZ5PSdt5Z8UpM3u7YBXKD7u5mfnV5eAbPLjAtin9mSLdgsJT9pPCDpzCNK",
  "key14": "47nCeNCw7z6Ai6mih9Q7Qd3LULJNWkw8PgPxKaB1ZirbqcMrKKLKh32txJqrVgKnTC1SgBTFwPJ6LqBcz2vZAseM",
  "key15": "2eFJM2cz9YyupRREJaCvtm2YupQZueuqbbWVUiRPwrKxM6cbn2HttGgM5AVNhQ9iA2pE1C8niqwZzm7gSHcatBhq",
  "key16": "52eBqTjR646F9m1HyGHSdcopMuh7dh2412n45dh7NS4FgN4FMsBizaYHoNdmvfUzzGHqWTxL1iFEFtFdwm1dwNGT",
  "key17": "5fUHtje4DdKJdQweFMDizcwwG4JZDd2v6NSU9rXhHXmpM2SoP4t5rwFzoUjzgBH5C8afTV9jhnudMKhqL6PsgsHA",
  "key18": "32YWFu8DCRhAe4e1Gqsx7eFjZ1ifF9KMCCoaiwSiva2qasKo7s5BeDoZ8d4J2dBZSRKcvoRD6dxEZbmFeLQ45TXS",
  "key19": "5qHsL2MgszRea1tzHsVKsWe2aCGsbiUeLk2Es7zP1h5WR33DZpFc1CHspR5JAa4XQzcBF2yB4yTWd3G6ba7bzw9y",
  "key20": "4twWdWTPsQVibh66Jc7YKrbP4fv7Q2vABTDZmXFVAi1EPH7eazamTb5RTH55gSFCTvPcZJ1xf5M6iJ6A5Ygf51Lp",
  "key21": "4pvTVd9K39UxgGu8phRuVE1MDbugM9m1YoxfmuJ4zgidF3CewxanTjouYZ7Cqh6hv2KbAi7iNBiR2rBrSdpBarRm",
  "key22": "5E57kkewtqiktMYX7NkuD2ZVtp43yyqR1NBH29Jrsq4jjW3sWjTXSrHzMHK7PFjkzfnnfcQr2DmenQXZ5T7dATq4",
  "key23": "xYn8gTD5r7Up5yxNUa8QBT7x9z1A5pNzLAHYMsGT3eUkEKJDrZdeGdr6ErsydZw6JCDovCsfuokMyvo6cRxkoro",
  "key24": "37rATLUXmLVodJkp2mj8kGGubHWTn4HRxjvXAUovWd1gzzPZvE5kjhq7YrQcs3QhMNkFmuMWo1ExjcccMtzxCHv",
  "key25": "429wXWJsnDze6RLsitAgo3h7XwnmizNDPPwgk5mSHfdBTEKy5Umw4VEAKqXmDeBzTWdeKZrazyJDd3EMAJAZYM7e",
  "key26": "3TpWUdWBcNmJFZ4mAVMjTzJQcnJ2xbAsvRahuZCrq4Z1MXUvd6CVArzqazHHmX7d4hX5J6irCeRaKV8iGmsX8EnJ",
  "key27": "2Dv5R7VSuujWoLB2LZiGtrjqUCB9iNLDE36uEofV9Es3vto78MAwX5M4Y8GtrcosTdDBE1jEcMFY9bz9X8nNURJX",
  "key28": "5PtyqqszKT7t9sA9twVLxA1jeoL9PFDATwC7xeejTqymPHb3nmZbdfffbrz1itPbjaVc6mejCrSvhtGtySGDPz6c",
  "key29": "oUVjJYGbueLmPuBjh3JrRuJhag6ZcyVs5rHDmbMKHVhH9DnivbRCicKdfJt8EpBrbwsoXHcDB28uZ86mH67Wmvs",
  "key30": "3hBtm9LPncbgnxv86f4VG8zX4pqNg11nKA4ej1VeQNtprbyUepjCji6tVLHCyu32SVmTJC9xrkiZzX6NsyVJEtDJ",
  "key31": "22JnpwcEs19rGgFbQibv9WVUkLJG1o9tJ3nTC9Pk51W4iTUwL3VYGzrWvWPzxFgoEzHEdPuuC5qpDe5TMV5H5Nra",
  "key32": "4jddoQZkPtgyk8RZhkkLArJQyChMm1SaB1qQe2hSFxi3pMX62nRPkjenoeYM17kp6rVRLcCx67PwDTgN9PDhn4X1",
  "key33": "2Mf3x7syNFqfxffZmFSod1bSjNRAnaDWPdtECLFNQSmGu77vZHCgqMj18MSJPr2mgue5MkFmMFXuRnxhz9D2k4eN",
  "key34": "3WrFvQNni9f7Qucssqc68rTGAfNwFvrCGKnwb86NUwxfWyiYZFzUprmECxSm7FscXLscEpxwqzAd51Fmat1fx4jS",
  "key35": "jZdKz5CKVryXt6sSjySgd4qu33NKvAWs4nL4vBkEMtvuUxKBdNK8rKwnYe1j6a85eUYKec45cpeS62zKKasRGFc",
  "key36": "3ui6duqmrt7hjxjGuRRYit8ib7qdZgPtCaAgnHz1gX4huKaDJW9hkiBaX6PZhPDiV4pEeFQU9s2bZzBS6XCVLq1B",
  "key37": "dGYhpPzVhEvCRhX5Ny7YxSn9WZ3QdyBqCSMSCmr9wZuG3M6XUXVq77o6bLJDyhnBLfJHVSFUGwvWxhfPREptWjT",
  "key38": "2atNj24nNUuXFeFB6k99UnqtpEc5BsJAbKzCcP4uW32fokEpbbxXkRsm2QmX213zX6TvsFsBnXxKX3jA4zLfeveN",
  "key39": "WHXagei7dCgYh7mpqt4pQgcw79vipv3mt8jScP8KmoVPjeDhDQHe7M5RRZ6mro2yFeeBRvCi4cDWCVsBmPUtDre"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
