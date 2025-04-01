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
    "3mf3QsPdALAB84hbFRX5QdsL7g2Ecb9e4ovt7Yo8kJwtqfxAXAoS9wP5Rh7v1HcSWEHsAs9tw16F1UemLdP8oWn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fktoQBRpNAsnnQMRkKMkUpcV3D34HCfbHY8Ri9f5H9MFeAyv3oxTKt7HNgYsy9YuWugC25FDWK67LeDAfBvm42m",
  "key1": "5SDhUbwzzuvRi2fhZJJASDrXqgvkmke33ZetdmH828YaPd3AmUhuQ14FnKfWaAHK8ULG2BXaxd3k435QfLsuDuUd",
  "key2": "4JVfGpRq8nFFXCosNAYpCQcJYbBLzEGt7wCtFvJvxd1btuDzKG8AmTmr2Ka95Aq3i1iieeCUBR3QwXdR9svKNSpm",
  "key3": "a8owCAZSJGi7SwxSc8FVcahE6s99AMQ5YqpEbLEtyX6eMBG6Mmf4VULhE65qLw6AeitPcemrLQBVjF5px5EbKcv",
  "key4": "2JFW1vnr9dTwbqbKGQojUVeyVkZu4Wk8kCqPfZ8YDXQcdKGQJsoXLCjsSeXteKCkM3wvSxXeuJybUPMgVEt4bdsq",
  "key5": "55fB1MvN4eCBQHgbJ19erx6mC28VNzLMsJSrc38stzqcwf9G4nbJ9Dijkfw3idyFD3tcfc735BmueSmVVh1EJeJe",
  "key6": "3oVRh38LLQRftZWXR1rxatiu9Yby8DbV917vgcPfmKGb9jfXYb9q9tHrAK925dfTe8qnZczS3y4DV8mGZeHYWM5D",
  "key7": "48uWqo9vZTpvD9W47H5nWjHuJ266kTrDFs5PWB7EECUEg6U4zuoHiHQkRAuF98xR89KCiqigrQLosMPSZJ36Vum6",
  "key8": "3qapG8vDfPN1yk7AY8qPybGVSa5nm3iFpwTv2RGNLJXVAFJ1hvw5Y8jnQ2P47hp1Y7y8cx3kFiNLFp1qXs95Gu2q",
  "key9": "TP5FEW2qqLjPeXTBfybXjZc1ddcHRdxW2hojuNokfAajLeMMcf92TbK2pNkeBZj3ohjMD5fhirqdFiWXVy9w6m4",
  "key10": "3EFWhXTqcvzywiZUzpXVZ4EsHXWifPxGTFpzqDpYMSQbywibQ7fMypZrqYKaMJJXuT7pLmqXrCMU9SrazHXtq9DZ",
  "key11": "5CdbVb6h8qaBJHXCAyoNziksjcCAWjdeUS8iBe4TpcULRgeDGp2XL2mnAsndq3EULb22yaFoD8jszN1rcYxoSS2v",
  "key12": "4whSCK1KGEpYJd4q9mstBDQd6tZiedx2PYJksySSwWUe4kGsPMnqZJBpJyjELYiPRWArjvMW2Kyo9CxRSJ7SkFzV",
  "key13": "5oecA6Ae3X8vWhqmE1eESt8SewLNc56nAe8tV5vtAeuVs3zRdA7nYAnnWAfbAZhqd8iP9MJF8pQaYqynz7QZAk5M",
  "key14": "2azTPLM6whzPWuFgRv2rrNGrTZM4axgFQmyup96mRpDNhWSgA3qGrrYQdQ1wSnjrT17dRwUy32JwDULvA6X98VhR",
  "key15": "2QAXjnsyrKTnNdwftw7aax53EekmXQJ1hQqZC4qz3bZxb21cSxJhx7Rj35ekiGDMhZ4JMG3jh7Mu6dxe6VHJ1fwj",
  "key16": "SVDYJgM6d18J8cAfjcJ962LxrQBtssn3wMxfpWFmzMu6YidvosUvfb5aXB7YWNHiYuPdo1f5xfCAeT5gi8DNKPT",
  "key17": "37uBNT9UCguPSCX6TwX6HwsEFSukvmSspDgrL1chz4JEtGQhnFrYVyj4TTKW1A2UWGJ9xKmyiEiGxGKhTdSwQcA2",
  "key18": "v4an4MiHzf1J156iP6DWXeL739DvwtqmMMQFbn5tSM8R1REGRBUHK2scxj9hBwsy4YwRjCCwuTDg7n1ubu8vq5K",
  "key19": "2B3JziQNJtrb1zsXCsn1PevSsJJuPoitUJ8WYYLT8Rcg7g4FYhBBhezximiegm92JMKBZyoACMSgPQNvtq9GxfSg",
  "key20": "3TK47CMTuUQbRcj3tq59ssFULZfdT6dLjfhQ4RMTgKDuY2hUYDAiKaZjNw9etnJ4oXzwWyPPT847ApJgKFoevMTB",
  "key21": "5NWagvj9vZcfRakodkYBtoi25gReqSqUemCW3hRMHu57Bsf17fVFHKaJxuYxtAUxcBwbfVevLy8TJLZA4j82ZVA7",
  "key22": "R5MLGe35nTybBeZcp8tNJkxrxxQrZ6S6pVMW6vqiR7tfvD8ADuNMMgxBJUCQRgjrb55fgsS9c7dctnDJCQNFYGr",
  "key23": "5zy1WjVKAJvuerttrUVCiJJTqP9uUPjE7aEMGKj6AavxHvUoQZvgDd4QxCDoXLX8mxXgdc5UKCtbwh7UcBFPLsWv",
  "key24": "4Zh4YdBKixDRvpFeucWm7a5eJ4hhVJLQrzuPscchAYn8r2Tzbg7SznqiiKB2a5GYkfvqkKqcLsnXVGXqf7t5pTQB"
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
