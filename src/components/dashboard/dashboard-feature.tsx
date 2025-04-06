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
    "5W5yg9FbiKe71PreqitD5jqFCQ4xXQwLC3gkQf1zWvjKS7LSUzJuPhV1LLmumXZ1nHFpwJ8YB2xfFwhTH6mQhegF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nhP7kLJs7PHrkeyL9o2FvVww1YCX3Aa7zfWkobcGZTRnXNa2FxGqDwT4Y8ZbktmNmrg5GfoB4QKRaFZw5duTZqR",
  "key1": "3BMBWnYDNnumrXD9jF84iDRTdJSrLZkS6McjmmJQJNssRhE5ZmVq4Q1PAMCAWJukSDnRzMqPMJqoV9CDs1eNeMTv",
  "key2": "5Ri5obc3hmHMt5sgVErxpDT81q17ooysg94F4fSfT9ka49AEQzSU3ge3oKMuiHecufSmpGCkrtpSNu8Fj8iuRrJw",
  "key3": "3vkm9kq7km7QSTfbEHRMTGdw5brtVGDn1vkZZFdwCgUw5tu7izX2fArRkYKn2tdNxZ8HfptkENwVTGC1Miad1ob7",
  "key4": "ZNFUFv5ccrJu3FqU7QZFM1BgJLwXr7kYzcPgAFKb77EKho8jFJYKj9iDoZX7iMnjCyT8dCykk9hDmJXCxN7sptf",
  "key5": "25ZZwUQrgEA7Y9CeaoCjbs8VmBR46Xbb4883wLAGskoRadzYJFnyUxcYqxdMFZ2Fn66wjxjkF6GScJyRNA4cvJJz",
  "key6": "2RNbcZ5boU7Ssu8bZ3pUXHEwpaiTH52G9dSnDQLzufoiPWPN4f8LcFfGNDgxbk7RMGQqCcqT9a5npGtD4dT5r6hZ",
  "key7": "4xz86VPcqdmk96hg6eD86GKMaMCbiXUz6Li7cJ2RKQBBUFjpmeLyeDEt7dUPVaYnJNVf6zrU3KGopJAFv8E8odgX",
  "key8": "4gNoyjwAAYSLJimaxNEfgTAVppwnQhBhhp5YY1kdUcWgYzKQm7mb5LRUfqL4MCsRBudkHstGJjRX7CevDyNTFfaN",
  "key9": "3odGSXnwgGPWKr8Q2uNfQiaRNPSiG5tTaTTYDUMmCaGsnen4j8fUHUFqZV5154JnMpdVjfNDFfk7nNoGb5Rcgh6c",
  "key10": "2fhjBtgd2zdBUPkcU4pL5cXHyiSSGSMzZ6jEStTXdabF5nvHMZs4c8KF5JkdQGFLJJremnxRHatTvaWCDvpumBHi",
  "key11": "3S2TgMLaxtzYT6gKMiq4CYSX8yiZeJEuqefoCJddYSjsU8LqUvDnxhNYHuyboExqBvjPgf9FmDwDC7Pe3UyxnBQ6",
  "key12": "5ND4EVT2eXBHmPRpC5RdgX3vdASjjvBWFojP4QXoKcZNdYk6L8bhnhmPUbxjjSQDvvNFWxJwMG2zqbL9DPAkyfD3",
  "key13": "35kSwt985M4brakYBpT1RHHoz6oK9ukixM29MaLE68hiyMsY1XKctGX7guGYV3aEUcYhUaDshHyEXszAXhkdLTre",
  "key14": "4VFsKX1T3oZ2WXzNxUUCsEiSXunobiBUoLUFa8tuoNTEyFERypXCnmMig8sMQT4qHgccB1q183Tnx1hi3AGSY1gP",
  "key15": "5PqMCHJ4Q2S4a5JEmcQ14Ku3BA5d5i2mfTFvAUonySivjBtUMxF6HnyRoo2BE55FJHiczsNyn482enCG8yM61EXB",
  "key16": "Myrw8DLFjE8CjMZDFHezCkP4M9y7tYw3aanACf7jxRLh7eF9msjKuUkuT54AfTwQhSkohV3Ff6D3kWhJ1XxSup4",
  "key17": "3bfrXWy3Y2JrQQhtVa5MWyULENRApFnztTPZ8TTvdTN1Z83YZtx3tTq3kQqncS6TemZXXcCCN4knvdcuhVkqDRDx",
  "key18": "5uusH5EfZNzxzg48otdRwugjCQ4RGAPMAVLmgXQSZtyc9v73hAiLEbpgZBoxgwod3VMiziVD7vPS369aAf7iLNhf",
  "key19": "2vu1PAba4mCEhiQTEDigaSajjAayZ3H9zBD5M4JrEETLVfj3xVEC87AU69pHoJvqHvQw9Gmna5WXhX9X8RynLL6A",
  "key20": "4ch3cg54mppJwvGBsjypzvtP557YMbUBomPpbWUJR7LuZGzJSqSrnjBEokEEJ3B1yJ5HE7rNPZkpSyvjtL9jKQ4f",
  "key21": "4XFPvTW6WLvRdYmQ4A5sKUwWPTZR1FcMHhRRwz45eJYmqKh29NseaUTxcuyonSXLCHxvANVZMdqNMTcvtzZsDgtp",
  "key22": "3663eL96nWFVdHZFc6kiCLpCSUAJL5Jp6nSQNJ1hNHJR3RFx6EGNCfkPPwktKcMXDbJ3qirrjg2W11W2XxmejKLS",
  "key23": "4cdk1aSuBZwvJXcyMGzdVNv7ccknrmDDacjoSjDV9EbjLE7EcNK1LLiKv25niUtg1LfyJH1LxqSPhUbFCm7URjAf",
  "key24": "4b2VPiyfxojqm8K2YpoiW5kK7DqRbafMCuTDxAEu4ngic6u297gV4SwX6w5LoZnkrc7MnsuseD7YcoL86wbJCSdY",
  "key25": "4H8vVFBzTM3dNBR7wTSCuKGwNaMqi325CpWExbtjdx4urHkc7SBhpGJE7uyco1YWuiD2SfpAp3RRB8D52CEtMEUY",
  "key26": "3QShD1nqdgtgy76HPiVHE1QVjQVoSv9kkxtwxLhbpiDu4xtkpZYBkfgBJdeeS9wXkjbarkLeURMF3DgjXQvE2tXg",
  "key27": "2iWW1a5YXm8TxSskY72C5iuaxC58V8d6pRYdufhomiy4sEQwBit5FWpFCeBRTQYe9dNiwwR9rc9ZGbHoXyw4qVN6",
  "key28": "5qqwMwHkAvTTEiSt7tHpcZ8LEQMEUVmVKd2Wv6qyQ5WizTRgynbbsj6PkQPdSqsuKDhLZ68fm97xPfJ1vu3a8T8j",
  "key29": "4Ct3b5modPbAaFMTiEtLspnNNFoudLCAV5yEj3RRrz4NNQesYLrt4Cu2HvpZPT8qL26zoarxfVbDmnMicFnrpx2V",
  "key30": "4u5xkiqmTWV9KfZ9HfXcUsqZgwmqpj1e9EtdphGykWs7nMi35UcsKJnD7SNqwjjhNNPyPgSkP7x2FVCz9PdR5htw",
  "key31": "4KspxYSHepdRv4HjNE5QcmPZCp2bXyX4XK5PiUtc5mg6fK7wp88HDVXHBhynps5Ls2HQwsK4WfHUJEKCEn53ySuH",
  "key32": "55nKzbWBxaBxPTbzgeBBVr2eYYCBHujHfg2UsfAZMWpHgn4udZkmmn8dbTojxcizA7pBoP2oH6FrRaDf9UrwpwwU",
  "key33": "5fJ5zcRRhPCrQp5sAwjqZWFDaDUdMHs7o1FXTu199bky9cvDNfZ4xx6sf5Ue7bDEpFir4MN5osAe4Ua7ygUYEcpk",
  "key34": "EpcYUvyrLKgiud6MHDs5vCxtTvYT7prAKyqit1Tzxbw5Qgv3TsAsvXWgYsggNcbkctMCU4L4kfP2jaBwd8Lj1Qy",
  "key35": "3K89feEmgeAc7K7LMitDCvLtk9ZzTQ5D6JNWHF6mgCvwtAua3cS6VCoENJ4ygnkn9xxahss6fksHt99djCuqvY9a",
  "key36": "3EMBsaGjxyWEEU8kR4NVgN9EXJAq4r6nPW6vjAtzNkWhm6orsCJu9HfV7ak4CB5pnubpVnaRViPiYQkScE45egoH",
  "key37": "33XfQTvBvKiAHQDDE3nQs8rGCxNjxvaDFXbNtp3gqox4EWTervgkhiu5ELJp8Vd8p9MtHG8aEE5qtPLjZE4UmG9U",
  "key38": "4LS49S5usYJjZg7yd8XVvqyKKSEhbCDLjHPboViSJc5WKoE9zmwmUKopZRG9td4K6XBVM3HFZDjeoAd6xxR8pkDp",
  "key39": "5yfF9QvDWv6fxBh8nG9cRmsoPmg23UDfQAT5F24xFTZtcZus5XEC41urswhhfPp4PHysgFL6Zj82UFQAok72viqc",
  "key40": "4GjyeFehfxwyfPE7C56TqfvyuVowJt8xWHiZGGypbx9PX1HKaJELRxrk2Hd53NJHSfv69NEGdTXAthdBX3W2Yo7A",
  "key41": "yTjbc5VbadQ2v6nKLboBmKcbGwHVzq1ypXaPjbkZxduTUNnrG1pt3MZL1aqWwrvZNNCQGqaF4BVmGQK22qHxXiX",
  "key42": "3Ef25PxVZZYGBFdrfpFVg3omNcydJ7XevoPXdqkN5MvannVtogRKZkEKVCHM3dovZQw9Y2BGYto3GpLB3QMLFyr9",
  "key43": "28g959cqqRfauHeV4yKudQyQe7rptGsqKqbTXY8c28qTncrUE1L1ttYQGtFNoGjWV2jKwuu6ghPJ3hhesuVWxiSV",
  "key44": "5vE1SLBFS7n1WLHrLNUMkEgMPBb8GYDCkj6V8CWCQivnFhzL5csxx9mhrhzDo36XZBuZJ7vwRpRkmUdi6itou8oK",
  "key45": "4DztjMuUQTa1dnGd2NpNU4rxtZY3679ChFYSPh2djsvaxsbueJiJd7A27dDRkUyJR4HGWBTXaoKXm5eZyquQwTb8",
  "key46": "5YPiHbqyR1nUV9zqAZBhqsdKQKwctSuAxXRcNFJvMzM7K2ssCJRMY82F3zEP35AB1atnYY6RysUVXqkcwY9GDc2z"
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
