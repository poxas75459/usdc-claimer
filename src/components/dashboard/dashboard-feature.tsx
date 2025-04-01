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
    "52xnqFh6aAaCu1jQYkmqfHKcchQX8k1HXwT9Fu3PpjMKryFYsHS5iDhWiMRRwSykazHpvxjvajN6smF6R4aVsW8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAc5Eca2UzPxuYSEEGV4F4zSdWm8UXNouEJZusJUBxNCd4a3E6UpHAcjwayh9LveoTFo36UdLwgagjRLAxtxCj9",
  "key1": "3571dgAns8iSt3vtuQjRmYk4qARVGDJ5eFPAEQfhuGZXcJPTVFXmk1UhXe5MJNfuxhv1UXQX9dZQeJsAq2sh9U2Q",
  "key2": "4GLWB8EoTNzLGXr9f51ThT6t1AqdKNBDLGhM8wPdKy5rew9ykn9MFhMwniBX61cKeVYAZy9RwPWGKeYT7fK7SAU9",
  "key3": "5828VPX6gobPp6479gmurKsZycpgWSyc9JEBNm7PvTTW1yx7fcSEogNSphLBnc45MusT4mBt2zAaD8DpDNcBEtYH",
  "key4": "DUZu3hBKkSjUEbKNCJyvTXvrMbfUwiixbv1n2Quaxx49usLiaU5xxfouLknHyyboMhDTjC2YcUNAkN6CxBw7sXo",
  "key5": "4hGaMZvtJpT28e1DTCrk6GPqeBrggBcAFFN1SiAug9PPyeSMjxDnSigvsmQJnyrGFZz5bAdiXCKJdyjke7uJbGxb",
  "key6": "3FAYUNXq3aA6BMDjxBmS9c9yb5fQVdeU9c4KpeThH7r53sER7idLNDQTA71pbs7LWaPEm4Mfnumrujg7cRVcMBC9",
  "key7": "odub4zfFNXjiWU5j9gDukxHQ77v5Y1wTrzci4ypFoqJYHfGioVq3nnURwo1dvhtqiBQrq9bEy2Vtt5ou1dTUByc",
  "key8": "2VAUT3aKkhA8KCvjfSJLewTBtUwy3JHnWvonAzPGGwWF76ryEjCgnTqVwvM2dUC4EiAiDmRjtTMVrqGCvz6mRwn",
  "key9": "2ZSRfXoyx5Y63gSL2KVXXusN1hbdRnymKUAwQfHUq6WubEgWJpVeuLwoqGasnwKGoajX1tPwb4g59ZAUg3UaEMum",
  "key10": "SLwZN6jXFjazEGe749P13219euxJKLWK6G6ypEFr14EGiswnacHfGNoXJmqainc9ozWBkw4kj3bcSSt5KtsCFef",
  "key11": "4J3bYmrQGmFdqV5zU21TKT3q8xBCJuTiDwE1nf41eqYNU9khvvo7TfwkECfEGyeB624txG3wQBR8rMpB63bsxE6u",
  "key12": "LghvcqbtZuZ1vstt6jauE8yzn7No2uGVwKpMvKX5BrDWW5QpT1JAm1tic1FA12P6n7KU1HTLiaW8jQGYfNGBKmF",
  "key13": "4KikjNC3dHkjwqXrups5jdWTDer8KKwEHwDr1oJkEFRY3syX3bPPzog2zPenPQKEwvBMsW2xUD7FitDig8Rg2Zdj",
  "key14": "3Jsng3rbDdQugaqvYi6MC3nYT6JTX9GRkMJe6e6E3taugTDjepUxjpGVgcqry4dZvj7DG1NmbsEmot1Hh66Tfnow",
  "key15": "5UTEAWnsVXQSRpNEZP1Tce1nF76gwamJYUosub3UA44Chnr1ZvDAPvXkgrFPEW5vzzrFxpCxRYjCQoNpiEFg42nz",
  "key16": "4oVvxRwr9eRBuSfAwAgKhKihLDkDsxT4GXq18LDZ9SEzwtaNQ5PusvYSLR1kNSJpRZYV3rJQnrBovw7MD12gwhKz",
  "key17": "5EQXnXijbWSt1gtuETGMzqXdpEZ43cLdFPeuuXWKT52HFmkqkJPhCLQaeYDo5hSnACjFL1Uw9CQ5PtTUdsrtCnEk",
  "key18": "27KacfzuzfqUWRZz64AgCRQ1RcymwBuxo9piRvGmMGz3xTxZY6HVwZ6kytE729rMhvH6wE5sUMp76i9Di8XHfz8x",
  "key19": "3sxkVyArTef4BHpoWCu33uMhu8zbkZLWCjtBhgJnNpS4hQ44PPxMyW2p7eRpsBWyPurkTwBjmxS7TpzxKP2RxXuP",
  "key20": "3GqRFHcpLDphh1NcFJuHBAVwaakKhWx9XG93g6MJCDLgh3Fp1pSV6u4DBKtE2XfQchscK8fcb1rurPu7oaRiBKxg",
  "key21": "5vJgeMjPs2BMw7WfS1VvHNqaXyo22Socrg8BsK8tvaNdyoGXEoySP38fcP6v242Bws1yucihH7FPH4zCmQkVNqDo",
  "key22": "2uhry44BGyHCWuyKyZb99R2xYG1WZEWThW413yM6oqKU63aiXF4bGc64H5i4xHwfaumhcpso66MwMFCQiH1bYnvN",
  "key23": "zcn2EmvreYbngjh5WYcfgRQx4tV8NwwwXSBi18XwGrWQzgpMF6EzLWPkVtCvMEgjwA6bqUCuEngHw3L5zuUPBey",
  "key24": "47Cf99iYhB1HCMrZkhUAdsQLFxZLZMzMjv3KcXpYay6qdKCnxDfMTo4jGFhxQVsgEtXwighU2YmPPPvs5a1hyDY8",
  "key25": "4enQgXKnDQVJyPhF5GuF8pNhV1U6WRknLzQNr8GyKdAW7vaC7swmejFHSBVfNH5BwTczHdYg557SSPnKEBGFavi9",
  "key26": "41czXfP9pJSanrCf3e4hNMMzNVvw8Xkzx2HtjgVxoTdwyXpmcDiz5nnATgRaCprb3CM7qy8yvzoNfeftxDSee2rM",
  "key27": "4KiyjvQeZ8t2YD1Mi5z9kcSYUUk3pDhEfuY13TUCqiELqWeQ3vkVQxa2MUcbHJhQM4xfDx1JMrjCsVCCmhXbJYNK",
  "key28": "2YKSAEMVTWkqWmcnK1Axwa1bqEzcdn1978MGMj7Fnn6zC2Gb2im7Srq8HEnk4jxLCWRHMJAnyXFAy34cxm2HBUz",
  "key29": "4HnGmngcqu6zx8KXgEHhKdFGRThZTmNH65fwa2yMfKKsfVXwZyZJBBZDe8mPjNRbjoiyR8GVBkGL9uTTT1WKnDw4",
  "key30": "UNuYGFbDuFzgcTUEY8s9fZYHV8Wc6jotkARWiRKJpN4RPfUdeShr5yhdJL5HqHxHsvq1EWWwmyTK7ix3j8iudri",
  "key31": "5oRswg3oJnCUEAvhBwKgRnxEPxyPNDHWCbHqqEzBbER2YnjD9Th1f9v1R4qwhGmqqjkT5zkHnKbBwq1tnU6G16KQ",
  "key32": "2bDDivCz2AgJudi7jNkAMCcjd2r6FSk9jAAQSsZULoXK7dUcVRc5aYsRkhQ5dDCiyWYMYBCNGhrQeDSBawZ5LbcD",
  "key33": "2xThZPHYkdZgWzyfYN7tJKZv3Qi9tCb13SFPqs88mUDwZvWuYgqenDWz9zatAWMJBXawJPsgNwUSwyuuNVodpQTL",
  "key34": "QbPbqAtYJkujKGBuWGiiKmW6gu1AZ1qpE43gmzTmwtNBLwrvdTJ3WvsCreoZnSttgKh91sLBUmQ7TJnfWZBTBkT",
  "key35": "55EhJRp1QAzuvjukAbTtZQr9vdHhbD4NWXFKEUduhTfgQGLAbPwqCCxbGiymbyQ1v6Sy26LtQVVwB3QrpKRrbWSC",
  "key36": "4bPsUe5ZNKpnCBaqee9zHGrr3ZVgnyCw5w45meruja8es9xjiFVrz87LciyJ91DmfCfyDuLadoqH5yNuv1kqj3g4",
  "key37": "3TJbMVeYvVJ4W2hKJPfouu48StgnTbkGW5kDms3vY91vwTaqUKPjF2sBWTVefFdJwBbfdFmSmiZFLrM97FZ1LKZG",
  "key38": "5rreSuLRcZ7kwsUGSkmdRFZajcBVwXhgtv8hD98ZtHrnqL26HSvv7TqhaHYQ3yi9JEjkpCBg9DQYXRP1GkKzrG95",
  "key39": "52kyYmTf7W3u7EL4U3YFXj6JJ8nSKuGvTQkxSGP9TdVhdLZttzdV3rdNhxYrDh1EFK7z4ZPYcvpuwLKbECHfStr7"
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
