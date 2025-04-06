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
    "267RqWpkeHHyj3rg2seQu1Vvo2qfFK6picerEzi3mNYJdRqzoA711RAFj16SVeFn2K6jhZPKkpRRNB2VxCuLTn95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A93CFYkcNtHHdaSWemMkMJRPeV4mtpFrEk8qiJfvzJ4hbgi24YuKPrWZcXZXTamKvQj7L68EN56D3BfN8oP14p5",
  "key1": "3jRcSLuos84v2sSYPsHP9gDtABcqr7xdNddkaa7vyXiLmSXWiRndkVrfS9fVKhPVDV42vJcRPXWxZfcdBSLWT9LP",
  "key2": "4Nupory6rB499D8MnYEfddhsmRTGhQ6WHTWnktx25Ktoni8342JtVrUb8mrqJUoEQ4Rnx7AkqVkkRpmpKPTaR5QC",
  "key3": "3jNxJqJBB7wb8mqYmLVdpKKUkMExiDas1SQ91Ev3QmTLzYBEfkWfK42NZAyPVGQZM2KmHBYaiYBaa6SyCu7s6sDH",
  "key4": "3qK6LUA1KRpkbC3z9FGQ9pMypSiYXqyUP7PdpBw3F1mcvGwbQGrm8zLG2KnwznZy6rcGXjVqpgpBuoDHx3ifTNkb",
  "key5": "2x71Kkjhq6PGxfGKjCt2v5xshzUEo4MNeAZXJynG8avP7x241Ca6Zd8nmsKvtSDaiXZz6CU1C5jfH4RSA5NpR3H1",
  "key6": "SpEBpb7ukiqDFtTk5d97zqHPfmNqU7511NsRSHqUuBQL8qsXj1JZhyudya9D49N5T5xy5oZ8M6DjwXsQ7SZB1k7",
  "key7": "WzmJV5edAnZr9a22pts1nSK1vCWkQv7mSprJgGir7Jq3Yxez2JAWwEUUxPPwKd7vou8ze9Uv2myTMFjh54nQYfh",
  "key8": "42duQwMazVUz2DkrJQwPU7dcUaJt3L9kaMjwLzFK1pwm5Vy8XqvwZ936UQRZsgfQPjhjswLdaz2pqM8hLx88qdra",
  "key9": "57Rp7TXtsRNGNmVXz7itBGRjVVftap8tDdypvJgfjiYeXTa2hwsaCoBwcbTBT6eMfJYMZiZu4UGk6LzjGjR4k2ju",
  "key10": "3RSRS95N48okcV9Eh3qntXT9gkVJuKVtGzTmibUtX6unhzw4J8pfCtp5JDERH6fi8VnokMHxSLH2RV9tbdr15drZ",
  "key11": "5V4Fk5GsgYkpEsoN2nfHkapcNp1SYBV9tTQZ4izRob6NZxPXpawAZnADYqzg2WNzRkzALfqg6YFZ9suQ4k5qicGM",
  "key12": "4fzDBhaE5mUbWHyya8LyevyEPK8xHTc5e415R6KumbsR68jKiMzqCTgCLSjG7bQ6vSHDV54yn8CixtW5838Gxhop",
  "key13": "3qCMzKXVqF2SjDSQwhdyoG7M1X1MERabgADApGoG2SE71Ts8CyywEBQ7EwQv1vs6ogRWFyYhtyoo2pD8SrBDS49a",
  "key14": "QB9uuWpop8Rh8v3cn7k6N1xmnfApvkqDFe6h6HfWTcHKQ9QAFtBFC69fo9M9sXC831dypJzHKz5hN9B7Mtx6MbS",
  "key15": "4L4Cu3cn6PF4NAgowZooYeZs6VXd5GRks7SWgh79DLhWjk7E5DKP6n61SNFm6KiLMEcMXNaaSCjyiGNqHNP9TPPo",
  "key16": "62ENL5qsGYCYSDncBPEtHM6FUG934fb6UNVw2iXuWcQT8qxAkuLkjPbPp2jXdnWdbHwsRztevsnTrj35EcF2vdWk",
  "key17": "5wDazU3Gcsds3LVrSUAtP2fyC3Ujpt8srqfmNHSTCxLYWXBP7KmxRSEbckjTHtWeD1vQYaLfKQ5YEL8KkiTqf539",
  "key18": "3SfusZ8FKDtnLzCprRE7KoR2hGNvabousEmsD31uxCL7tRzY5y3Qu3nVF6SbWrrP6iYcoHXbgPwFEpDauhgB2pJq",
  "key19": "4VqDerVDdkwM84CwY3ByLFiN7UP5TC6XbQRCQYfJRYZuag1naT3KkvbyvyMLUyEBHr44tkUppLH8Za5vehX8Eg8V",
  "key20": "5aC619YuAQx2BBWSTmA5an74zjydfKCazJAnkiovQUXDdSkvFsvHBiN4ujW3seTmJqegQrMfWEv7BL82T3fPr8p",
  "key21": "53e7nz5DLz2jS2jTuu1YnWKU6i4LwmShThh34i1GiqmpGrarrCTkAbeefU4aaDr9CXeAZTrMHN3Vy8i8oS642k1e",
  "key22": "4ySPbZqNqn3CnqozngGJY5krUFh8MtKscFG1Hp2cNa61rJPQrsVWQL8fX2HhqrnZTAQFaBnXv7ihaRV2q4iMunZw",
  "key23": "4F7QTTv6z8KVGziHotkRnMgEAE9LyKTEVzBsA8sbSyt47wof4mF5uxWAEowAeYW8kHTQfsMK2JcjmXQxL4qXj5pZ",
  "key24": "3F95UVKiD95CbfRDA3w6HYvzwKyUPhJidbaGF9fGH1sa5Zb9iMmhwWzN9ebbV2o9ei74wt78RT9ZcY7MA3duDjs8",
  "key25": "5qDrqLjc8gJwSd8sjcFDXUs9XKqW5KKe83UtP6Bo6YpRb4i7vZD6D3JBEu3LjS7mpfJHKhKgToaLdG2WLaVDCNeT",
  "key26": "3GHLG7d72XUYe6Ur7VSQ2j91sShe6hhiC9GBzvKS6ACRi4qcNVc4RXKiyBxhczzUbuYCqjw6JmYyorqFEUUwGJZB",
  "key27": "4rGCDe8Jybb2ERkhgfF3vwZVDVjCpKqS3n7C3hfddVocEusFpKHEeDmiNpdo9xmfgciPTJQyP5XXhsCf7ue74Sag",
  "key28": "3U5HbAA2HDeVYVZgkv1UMrqpSs5dgiZa2657MZ5p7NdvBxQXfeZ6hdvashLHCjtCh6PfYen2dVaF8vKXwoT3Fu3d",
  "key29": "5sbYBmQ4N189W68EV61C4AC4uEgAnWvJzk5FBuENtVVF5ntxxYmaMBnM8dKvZ1W8oPabGoGf3bAshaUXwtk6Vc6r"
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
