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
    "2gb1v44oGWzugejnF2H9ikUTPmQ8B3t32Wbmp9hGjgPgV2bcMsb5dfm2ZXzJiMw7s1o7dTxWUKBkWh16cWhfEjmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjkFqo7LmxBLozrbc3iGD6aofgPj6nvEbyC8YMXpTSTvdhAS9nq9sKA2GyHUJzoCMjt16mPtyrpoj86a68wwvNc",
  "key1": "Ee32Pvbrg7HsVKK5BfzH1b7f2AxKuGfpjcRZRPD6545BtmepLzSRLXG55wfKvSDAFDB3hCGne41s24R7iN3djQ1",
  "key2": "21h4LfpWscf3jHAaG5tNJpRBxJsH24XVQnBaZN7dTmJUK25gssw9Gv2SHZUnx5npCp5yGDrYh4Cz2gpUFRmGnLmM",
  "key3": "5VSBA2n4SqLs8swYPU2hC1EwA7kn6zMpWR4YSK9EbVkHPjT6k2UyNFXiYg7qVZq6PP1jGUpDeGAVzR5Fkxd85PFH",
  "key4": "3v8TzXesXYS3MbzrUNvNeF2tLjTgXEURi8qpguR1Rxego9neVfKNvNYZvDktYePHas6We9FAUYfmsknTwYvpPE1o",
  "key5": "3NBHPV1MU2ab8WXnHbck6JtPxX6fBsE3WddFH4zj3ppmCQQCmX7NnjpkPqDTjynqBfc1gPHZnuYGMeUcQYoZh7vf",
  "key6": "nMLM5rHQBkNuCoahicH2HsMc9JAP1V7pqomc31F5Rfy3ZMjK5is1guB7Nru43jxq6zKxoueiTTJM5zb2AK7bNGt",
  "key7": "61hzmcfMeymx3rFMs45RunbdpM3AgguN6zeBTDet6E4GqV2gbpwAucwzCngdwfHyc5NSgLAPbBNzHFgmZ7SSy6S3",
  "key8": "2tqXnKD8HNGnK8qtMFgntHwAZm2zdmNFV7eh6UJDqpn2rfqkVbUCdCUyQ7gfdMyR13GTjTGNfHnbSzjhVBY6GrWC",
  "key9": "4JzBxWLQAjuutgeK8C67SvKopm8CxSiJbtLwgTafzGSDPUBYiaYxMjtPiEiamDgYRoDeAnsZz1rbVczzHFYsjEmA",
  "key10": "563qzmEcnBpD4iBwtYrhubH4JWAswBc5vCaXcYfptvjNdhub6CDpVQEV3bod8eMqArDwxDA2HfjypgKLoVHxsExV",
  "key11": "31L1RVDUtjzMGtkJt6Ed3pYLQbZ2gCktXV13UVAZMhd6bCVMuxVE27WVribH3Z8hw3PMfoz7Y23Y1gfNsZ5bMWvo",
  "key12": "4pzKXpp5eyrkm9CgC8UuPTzgvxpngy2kJQFRS8vRdhL29JEawPxZQf8rSTU4JM79ws1W1HgshawduoWFDYxxbsYZ",
  "key13": "58gWwRCJdWqH7din7dpF5DWsErXEKsaQjnN3D8qXU5ECBNjxJey73xDFgukxbZvpnNZc2LtZWQ8V44c7dXBcgaDR",
  "key14": "3BD4CPpR5HkHqYz6LjMjefGfpb5zV45iguyYv7WEq8TdwS2AmstoSvrQXnGKVjbnjQFKuJ1xntqfE38Te7jze6pa",
  "key15": "3dTYjs5PSFzr6opkged3ZSmdwJsAvhxquPbzQumvB4CsJBYm4VpDXGPxPuneN9ua4cALRkYXfCU4ZA8y4dcrzZhh",
  "key16": "JzUUi8AgNweu4WdcF62s8tD2iowZ8qEv5Lg4up2Ffx9SdEccybUbKkVD32coDtKBsDftwncUXcJ58zPDZnseAUD",
  "key17": "pqiMvLFDJhR9qHNiiYNbxiZ6B9XWMMh4cPZonh4g5yi53cL1goMuwueoewEbF4s8fKhjygXatecrHY9i2nkBBdD",
  "key18": "3hPPvzu4efjztUwxnFE6r6qjcRFnMadroitzPzv5gUU5uHTR7r9tPUU3bho2vnsymGGL6v7dgJouU9BJpUDRSGf4",
  "key19": "vUifo3MpJWJK6EWFBqxTTz5G3seF8PJBbvpxLfMpA8DoMSayBuash3X9ocWqpVNMB2CJcriGqsHdHcKstDjkEta",
  "key20": "4cCKsg3JcyiC74h1Hw4E92isSXwq4sjrQZV25g4RA4yCX8CLqN8PXaaNJpVMqryPbmTGwWgUGtiYYetNLJ7kHVt7",
  "key21": "xWxKh3HXKX55fEEr9aXoTwcuLi5EhJXXEa8sUgWzR8dkxKxzdtfpQT65C9rPp8b8B98g6LCpqfnoicGezLZJexj",
  "key22": "29WG9oN8JRN39DDJBrySz4cKnLcePX5bRgs1Y8Qa8PccAHsKfeNQtw1FkbKhoet2sxLZEvfHBiokS3ASPE4exvMw",
  "key23": "4spMoauHSwQzTeovehJHGHQT4xd6Kou3hLjy1bjaDta79zD6kp2YeCkGcPmbmVp8Rsa7iTXdtWnKeHvPybRHM3cn",
  "key24": "3C2kv4uZfdDyagaBrqmwjsNqKG1nsCePJpYG6ML7GbnrwL8WrCB7Dq7QmJsXHfPQUdW1Mp2xPU6vD2NHCGFwaZAy",
  "key25": "2vhT813FGDfh8Q9fojXmgu2w9qW4bZKUMCmgoLFff1xVXM6T8rp9VuUhRhtZmT4QbF3EL2B5YH3aiJaXW43qC6RK",
  "key26": "4an5VP9dykfpT1EJCXyVLwjWfmnqx7XQf3wnG6qYKfPuo58NiTKTdBKxs7eTUPjqxWHftdQDPWxhBgb3GVyPtENd",
  "key27": "5R6uYTJ1GACNWtSYJA5t9uP8QZGzSccYLGGK1XwNGWhEKiafzmnwdjafNNgshjtc4tHaVh7QEpBpoTPJPF594TLu",
  "key28": "4HajcCRTXz6oh5wFyW5DW7WZvEpRFZ4JEfxfNTG46qYYQuNPzkNJtCXyaAuDK8J5YJGPFr42wkrYUfKNNfgg7jgx",
  "key29": "42PYqGPmbvEJ1JxKaoASz7ULMMRHrANuAsEv5RkUwizXaymEpKAcJDrE6TrFKvBQu2qZJ3L1BTbgUdeYLnqynZCA",
  "key30": "4Mjy23CvUZ8iubHHAiuWKu4Dj7bKikAKBqo3YFexdjP4XmPZAtxFJPfUiN2pVfCLZexggkRFB7AUjxXpk9pUbt5W",
  "key31": "anhMHsWgxKt5qAHrN2NK3az4w91DP5D3Pub8r9enpyEiWsz4UGMBchVtdzgmSEdSXBhbLxCvsy1tdpF1mMf9ZuX",
  "key32": "hgJYVwYn7FShCAqsQf3XCZuBt6iEYkmYz7Bx4fitUZAKcrKUaCTZSksURBRgyqxA2bF16yZ7yyW1GaGwaDjy7XG",
  "key33": "61eFLHhCrKVBLBReyPFoGN2RjCLwAuuTaPZiF8AYDusTd6MmLhQmU6Fuzg4T18FAGeGxkgq6vsCJzL6q66YtPNdj",
  "key34": "2aZpzexRDNFqJAc1SxriNBVpx9oJZ8UVQg9U9rM4a7pueNqR4y2BaFEG1i4nJojwHMfnkJtSKJ5cbeqtaXpSh3bz",
  "key35": "27g8TJ184hkUa6xf5aHW9C7xPwrHNS3eoHwDLu2Z4xEn42EyGsmUwhNKckdZce5NbbcsRZ6VW8rkgPPZJWJ48KLA",
  "key36": "5psCdt33WC41s5yzth1ZHQWga9htdyBVibbB9X8VpYAzkk1ALwnoapko21kghe7nyZAH3aoBYo3KxwzHR5uME3Hd",
  "key37": "Zi5BBsuPbdG6Fk6qngaoHgHTArTvW4nbGDtkDQqnwSjmVYkqMxzFouDXD1Lh6vTCWSAH1fjmqAnkyb4KYv319vv",
  "key38": "39UaTEyGDJEv3WHzeGBdK7n1U4G2pKMT5oNFudEoCxETYY7mavVNZfX96r1hXPnDJazvHopDSSXQvUrMZdbTC815",
  "key39": "7Fz6nPUmGoZa7Q3EYYgfzWqQrVqkjMJPtwY2bxvn9bTgizkn7CRidBJYywr2mM6vYP7gRnMkte9mjGLPbzySzH5",
  "key40": "4UjF9EFUkHqHjZC9K4NqR2egt7ew9Ubyt2GwwGp2cfzrzfA135Jx4THRhbA6iQLeeyTe2TJVk6nSbj9TEd2rpxfE",
  "key41": "64JN2caf9V8Qu3HvKQKSqthS97y1S1CMjHor8f1abZHVdmF1ZQvJwUf6KW1Hu3cYZfocT8RqhsmSQ7fcMUMLE1Cn",
  "key42": "4WwBUSdunZ6S5eTxaSoQaGWhUJmQqU3rWrTyfUA4pey7SMKTdYrj7ForapVeq5L4ZoqycHpghNFAPu9qM5omo5DF"
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
