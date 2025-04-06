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
    "25EbF1NrX57ZCBVA5eC4EgaqgqNp19PdKkDoT8FkwfmofrfB531kryryp4BJkcfn3xrzLKNE13MHXMW2i852K8Nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UmjcWXvYozSDKVUYQNWPing9mWYRpf33L9pofspiwG1C8HaVLRRs9zYr8eGrE4hCDeS2n7j15EanPPhCs8iu9Bd",
  "key1": "43MKKyJtXrGV8BGZNSTeduqb1y7ZStWTnYNxrVfQXCdNoyqUpQpPnVYDsRoZj59t29Ka2PpFopdcqR7SRB9rzE7W",
  "key2": "358y4ZQ3ruYwjq8mawmjw32gzwh7EUBjDvMJsT5X3y4nymgMx85wws8WG93pEQvgDMJacucesqh3BeYAGCCzbsUR",
  "key3": "4duPQ2bU6ZQ5jg4aUtKBty9Y5euqrtchnGE52Hk3bjz6hrG37hfeH8hajsXo21UBpTWrJ2c9dXzXramYGyWVQCr3",
  "key4": "5LLso3k126jz4x5hPVTPhuZTs8jeYXJNbEY94yzvSGJABJXLN9M99bPwEy4s16tAZXzN822JdK8nsPDg8BnXNx53",
  "key5": "2pKBRjiUbNsaCc98TDMFnr9S8vESpkNTscAMHQ1udDQJXE3EEZqPTJLp19YU8Fs2zZN77NvuzNML1e8bMYyQyKwu",
  "key6": "4SdARDA3Q1puH6sNaB2B7pSJaqsGv6dYXvywrPtbujuqh3j9vCJcWaAepjgqVnS1ThoNL533q8i1UTfBCFYVfgtX",
  "key7": "nqBesv9TdwP16yA7Y17idY7jNBHEckgug7gGSPPBW7Vqo9HvF8BvD81JqN51Bv5jbS4krM7KzzzaVeVoSt4PkCD",
  "key8": "5LZbzcP7SqZq5JzfgJTmCM3UHeSfLNWy3TpWRV2hJQ1aZXK3sq3JWUd9m81geUrkvZ8R1n13pUKNFm1DmA8VybzK",
  "key9": "4LZ16F6BmBnPKVskXPXG9G4cspjXmYRHWaw8n8hpcz6KDQ91nbdzuxQ9ZpiqbczFcszM7QnkU7WHGQhF1uGRjNGZ",
  "key10": "3CzAbGbGshNaz7Un6ap45CzQDB2VLWWfQkpfoNwWXAJYJHFQ9wsfmzXKTpJUiL1bcnpioT2Fg6ufMwNSGVvNkCJX",
  "key11": "48xaxiJaNWEiwYxgEiqKtFdc6cqHDtt8w4NHCwTsEG43cSkhuFd3RAMjmdY7aYJTjxNYUijhKzoWN5da3icq6wTW",
  "key12": "5w3jd79NGvWsNFyZxEzZ8d6C5uBjBr6QdEa8PYKEYWntvHqSazASgiEoe4dkC5zHtVPw2L7zSnVSnyeaHtshQhz8",
  "key13": "5NzumJE28eDrZg6dfcffcE7q4YbbRbFuUGo1Ac1zVqmCceqrkz5xXFK91ZT3Ewt86yovzBMHDKhNF4EgbGVZ9quK",
  "key14": "3u1vgawdRTPDoKzSTqfWJ2WWmrwWjRyAGYa2LMD1Tm9i5qXbXf2BisNppEGEa7eMQdzFGJL7uPbj65N1E744P891",
  "key15": "4daku2q3Q8EHCfEsTLQrNBvXWWEC2jp33ekBWQguMySu8Vw7vDo6X8BgXxGjeXC27x8T4TqW4wxuQjHnsDUPnThy",
  "key16": "61dYzyUuV1WTWMUedk1SZ1VLpD2iTmga9635WFdTLLSMMBNr5Nq1iNMovvMs4frwmq8CXhjnsG52rDZEb8aSWHrz",
  "key17": "JmoSAgBR1XxAWP7bpYsjrMsu5R8as6Zc4c9T7afJsyyPJ7jFL4kvg9pAPtMxQTnttPMCcbHiSqb9LXe2or5uNaK",
  "key18": "5EH922bJqS4GvyPLANQ5GGbhQ7tH5Jty38FQpwJuWtHTm5JwQanJagx5CqQKbT4Bs2jxEPGwmXprrQoLR9hBz2pC",
  "key19": "4HurkfoaAZmYQwTGLR15rnzB74F7WeSNmbyARAvCoMBvZsv6vLmRX2xXuC4EYqtipv45fM82ZrVw585jR4fVvM1L",
  "key20": "3y9EuhYSj6gJH6dvZzsjpPt5cGHNMoCCt1Nto5aPEPFL9r72usgNhCbtbCkuhhA8ZQ5SspfjgNZ4H7PmTgTzfxia",
  "key21": "5rPPTn3d9Ah1kR4LaTQqvPLbeFDpR2EojeECrRXw6JDgHByT7SPwwTn2xzaJepPMVvCNwvZDVxyaLiK9CBh8ijb7",
  "key22": "47NXHYc4t8XYW88DUitRTF48z7ousuJtCetSLXfxUn9o3sGL63P2Zq2dkycxSNptZ7LNyoJNqJZXWj2mPij8MGxm",
  "key23": "Wqi1XvNphdWiyAK3ZEHF5gnX7YQz9vF8xcTqXrMHm4Mn3W9kAHtK6wHCA3HzqXxZG5EqFSMge8HirFxP2Dtabfi",
  "key24": "2sMzUnKuTJyEhwGMoyUzTJGfaVWRawX5AFtr6HmAc4w4165rS5YukqcSnQf6bcTSRNuzGnPSUos4CTBtRMFoTAk8",
  "key25": "3eDnazJ76ovWMHggsVas282gNMrPDiMTtLdSLxtjRcNSXTkUugPvd5HoLSgtVzn4XsnR6d9bL8L2UXxNePLLsS2k",
  "key26": "2cwyVtiYHCGc9XcRRGa1vxcX3pi14TKGAP4FXVwPxcykY235i6RpADPvpRPxVr6ahU9XDXNJcfih962HeMNKB5Nh",
  "key27": "2ebD67BwyY55W4m2tzDCrVuAQgxbDmztBtfGz6MUtj3yLvN859gJ9rgC2AcbCABEJ6QmSyaNSwBNEpj3Hs3m19Qo",
  "key28": "jWRkes2UDpsyK82R3WKRypE7FSs1aVN7SrkzVBonzUDjsL3GFDEKtUUzsjapeBVBas7TSDmKjefnJE9iUHrjAkF",
  "key29": "3ef2mpfC2f2ZJgR6UABC7BDGFiq1AfeDzeUe1wpmdMiK1DTKGtFRPmuRWbEHsqYMfUq21SiWYq4rMfMX9C2qowvx",
  "key30": "4kxmfAfyXcytNH73XJuoMr8HKsywJvdPyhzEu6EyNYnNC65pii1vpLpxJijPCLJHHbEC4GgCohvTGZK1KimJyxVb",
  "key31": "3q4TUHgkfPWUm9ZC6DcsnDMV33f2UAfawoPtWpHeTVXXfJ3QY5puh6JFXEduUbPH2wFknFG7YKKtK4yaBUnRG7pw",
  "key32": "DnMztmGPDi4jkvfRo3d8TwitxGGQg8vS6tEuaNLRjQHpez3pFAvLjga5CLMaXtSSJCbMKy8AY9SWc48pRMDwshL",
  "key33": "3ewGq25aC4wS5MAaFtPEcPT5iQtb9NQ4TJwaYFQf4o1evhftrJdg8SZ1mZAafXrBL56viPxHYZuQQFQFDFY3pNcN",
  "key34": "518Sa1BmkRbFVBwipWohzsxsARYDer3nJtVsuSnJJjhWrpetuS4QTQYAtPwCPxeMy6i4AJw6Vgmfc34PTvduhKH9",
  "key35": "3qtJmnU6ak5CbFRLAaDZUp2HSLg2yESZ1VAZMcyHoB1s1t7pnNd4tWC4MFAMosjvQmDiqHRxVD2NmZHx8SYGj7Jy",
  "key36": "2bQtK1BnS49v5DZUVGcFoLVENGn2i5qRftd6W9vJxSEoBR97Z1CAN1EQwLATxQs8V3ccygFnXrzNLkggVSxTTTeY",
  "key37": "28othfHmHkjkvRmc6DY7TrqYsXHhSeeKYkPm9vCdhk55YYNm8whA56rt4Bo4Li2Wy3NxKG1owDdY2zDAipFe2jrc",
  "key38": "3mMHf6r7NGbuzDps5j2hDdMsEp9d33SGbsVtbyaVuLSQzWSpkhw3RGfZ45FEszGrj9RuY19viRxPtS4ikg3a1gr9",
  "key39": "4wTrhVF6aeZ6qtxXJq5ziRU6md1mP6psWn5PzmXX9nYCwHHUUFLLjuWmPKUKbKT83qdkDjqP5QcAc5MWGApRTVrb",
  "key40": "5Xo1DAin1D8GE6JFhxYirKrAR2BEatjuwkeQiTYG2xaZUQSPrFMEc71LL2q5wrN4Yyn851rNVXcDw2cNRbnhraxZ",
  "key41": "3XwbdACNvWyWJCS45EHsRtApHqSRkbeXQyvwEEuFkJ2UvMimFoekqCZYk6ZEneNSvaxKeKCs69uT2M7c7KKFeobN",
  "key42": "3rVLBgdZhbahfXqcYzTnQq6mA8CiNr5uRwjuH4EUywJHQ3ZJGckHnHBDuey5cRbyn4BofdsPaKELT4ksHYtPcu7p",
  "key43": "3Y5R9mfnkqLqNneYdPBguzgq42ESUa6jEPTTzoxkYz66A5PaRgybKXVeRyjBQmtKVNJfCYuB9ooUToBrdNwXHkKe"
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
