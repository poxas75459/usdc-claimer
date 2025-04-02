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
    "zRDg93hjnqR8QTD8Wcwphbhz8R8GHWuNqhEwzrXj7o4wWRAST26opDxAux6SDER8q9HA4Y7kUKGeMyYB5qFaGti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M9Ctn9VNzegyY9Q5XvBZa1zu6zYvodEHvGcKzqyALprVayjgiWeNvgfk9RCUxd6Y5fU6mQXinUTdjgWQTZ7DUKm",
  "key1": "2Lv7th3t1JNaQx9fG2fyGTqkfGgap58mh8YcXaWCaWugVnvpTvqpUcePGMDk93cFqPD4hXVEJNAVFAYRNFKQDMyz",
  "key2": "4ZTHAMpdFEcDusrX7gsbMQYYifduD9wuPgByMYP3GvZ1nKygwXfSAKzszKhWAbRgzsARqquaPiTCNXWgwnBxFLdU",
  "key3": "57kGwTAg1QJqqgi9aUhS43kQokY1QQrWjhKSrQZwGeayAPd7KJpQmyn5mKBCkhkYWfhjeoYEVAA1Nk1qqZBYu7BD",
  "key4": "3WRNUS6qvWiipLtBv4BA9mhtMvNpnMdyWqkVEda5P6dYT2caQV4fR8opUm9PE7u5eKYvEu7qZMNL3y1ftkaWWw6b",
  "key5": "FXU6JwXrvFx148ZoqSyYHxYazp5ActmtsohPde5EJTnHvkKPcF6YZ9XiZ1ZVLUFZ4g7fUDb8JFt8DgkXwGfvf3T",
  "key6": "3d9foEbSpWye9he4e6a5mJxkK42q1WBUzje6wSUSLKasuS1TvF6FkHmuH4bKUkJyBww2FauBpXxMn1TLbTRy5oLx",
  "key7": "4HtmRPsALjmgAcPV4ZW1Z3ac8PkHHoqUH2czQ4sGcid5S3aBZqCcnpjEx664xvBJpRTQorHNcEf7Xxi85uFZfxbG",
  "key8": "33LTHMfnzxnkV6BBGJS96qxBXVDN6D2BZ9ZCW9vzgkawqnXnC39XDxBiYhdCoK7NVDLBWG21thikXxQAu6G1Wzn9",
  "key9": "5AMC3PvXJuSzhUVfJsj3p7MzcXaEopPYiRzjSXXbQTwCYZwauRrKEKhoPVc4FQvVL9u9JXLiz6TRvscdQWVD3HAf",
  "key10": "4GbPy6kgYv91LZn1MKK9q1emiqoeE9meDUvuhN7s6V46jJo1prbidkSHy7RaEZADDatAGDfketiJMU6Bp5ukLjXK",
  "key11": "4VKFicYfaMB9VeboffNbJLG7dw24rSUYiuvzUCyBLcRr1UbbWeJVsRdT3TYkdBtM5BxkuwCAcP97MJtZvtzgPSYE",
  "key12": "3q1aUgpqmqJ5dHzwWBU5JJtnNo5x8daBUmBXtPt77BJfXqDeqHicPP9Ewdi5YiVPexMCLc1NweUtvVskPPAkkrgg",
  "key13": "2beFRRWuNpWpMDTpjH891fRL1x1FvGRwnzcrkU7cqYXoJY9aU4aCJ7YZdHVuqW2HQVSizwcAs2LowC8K8SpMdb7s",
  "key14": "4HJ2wEpfma92GY4nSFziPXUuEc44KgJLqVRmW7fVo44H47uMCs2ZcnF7NcLkREnag7yTwQGpKptWQr8yQQWtuHX4",
  "key15": "4u8kiHYGte4HEU1yxSq8tviaMWMfkRZe8jM8b4w5KgKtEEHkz7HfHCxdctCmZBe62Qzi7ysKpdgQALDKe2cnKaFF",
  "key16": "24ZFz6M79qdocLgpwDtirG3vwi4g4313weGWAhzgPTD2gBWPBPujaiUJFVHXjUvQEBxjXNXTDoDBCxAgxozJzXHd",
  "key17": "ndMW13RA1BgkmuD84Ar7C6rRSCbEoeNfKKvsjyKqq14WWh4tAwGGqpqrfhMQ4GjWQY9wyUXasdaZwrMrCLUHyY8",
  "key18": "62nmTC7FiTNQrhBey7FSiMdCLbhVM45mDqhhDBZAaBq1bwXBkVZYWp6dCtLBmtqgppZfFEiQWkJdNES4mt6rLqcQ",
  "key19": "5EdbpmCCppmoMqTBbCp3aZxjSuhCB9p5k5DXB9U67u5ERRKDXBeDQko4NR3KhtA2G6WfVEzrLb5sgu6xrbEVXQb9",
  "key20": "4Wmtea2CkwiKaPHwy6EWa6NysZEoZ3TZPgFNhmJBEC6uaaPTJk5qct3JcR2QVHHe1qeUhYEHc12B84WrrXYjy7TD",
  "key21": "d4yGecNRbgQSfszaDkkiDMgCLqgRFAM3EJCXjs3C7PK4ptCKoFhLM6JHTX2eyp3tYggGAqrmoGfUhDAMJWEjMEA",
  "key22": "3QCqs1zKwyCvbNokZjcVjbCYAgUGmzVACPP3iHkGzmF2EeAE2KJatoXmMKYmzQHUA1TXfoq1bRaFDDq1m67jV1Cx",
  "key23": "3ZoPBYnuFmgGnZ956esXvL978TM1pKNP2E7TsFcL8enxPU5H7STwwZvt6z3YmCfRwkLPPppEWMvnzdZmB8RvfV5H",
  "key24": "5rAVFk823JvG3Cjop1PnGiWNYU16k13BocR6jWu42Gn8ofwLw9J2rW7cgMHfPyBiGdbZsruWru89R36Uyj7zTdWS",
  "key25": "5g4NUVKD2AmK5VaGMSRx1z6JYQJx6vgsdxbvPq5wXhQ8hVuWSDQEnX22d3TAb4zJ987PWPHehzWHfUuWN4MUxGMy",
  "key26": "4jn27CpDENaAEBEQc4TpBZyJRrcB3d7jrqjLv9M6YUKuV1BGwmR5mBK5XhFrM1yoJZZgYxibZZ1PjEJmYp4mkqH6",
  "key27": "5oUBZqFYyz42wgohKhVZ6bpooLguAAs7PjJbgtMgDpAcda7R4yhLM7amj8nU7vv4Q1iMPnng2x6dxqLFgqMAth2t",
  "key28": "3U51zaDWnWyXi6rcmcypGo23rPdy6LbkRdMnD9DBaTx2nfLQd9eHArzbLYQPEQT8wEozH7q1EY3RrYmTYLfmzAHT",
  "key29": "4gkqBARmDtaceVERvRJbPqe3YNeGMsWyzqbK4jtNGtZYkRfi8Z7p1apEiRKF7gXNfSKoM6AGDbje7ukRXKaxjFwP",
  "key30": "5f3xdogFdT8uWqetodc5mck5AqY3pa4W4WMrSSWnsSjUXWLQsBDTkmnwxavg8STLQ7zs12wWGQhKwj77Fj1tPJsm",
  "key31": "2zXaM6ku1Vp4WLb6La8iY5CSQPwKBLYfzbdhWJdxumsQEC8VMnZWZ3ksggfJCfwp7RvZpnKTdeB1eXYZLk1WLPGs",
  "key32": "2c1SJSuuJxcPns8WHrkDsjZeR5hVDezpSK9mKh7RXc1T6u9a9Jxb1AhEfx3pfmVfHDYFjLUECufmgvwtYt7KoWLD",
  "key33": "khm6MVfycbAn2sgxgvdn1wbrkAWQcoJF6GQW624ur8L74XUdoiLAuUF8Vix8tWxbUN6RznqT7zJPVn2Torzvo7m",
  "key34": "5xxZw95uqC5tAYQmc5YcE2DUmQnnmZDg8xUjH3MWQp15bJrDrs6Y3odSLjh7Tez8CSTarkeoJAeUd7CBt9UAGxDV",
  "key35": "2Gw4WeiM3Bm63hg56siv9y2v466yo23K1Yp6MW9uGYyzJFgk1BFxpgbKhoAwpFduUUH2irNV18q8Ezh5dnL1MhSb",
  "key36": "5sqab4t3Ygs3Bv2srtTMbNxwmPANpeVjDBFKU5bmnohp5stDzECuxxyprik1jqtzhCobWmmZDxaFEB8qnWD7J9EM",
  "key37": "3W5sDx8KR7dz14R34guacKUGMZdFPhvez3XwaJC8x6HY4C21xgQ9FEwb5cYvMHpGorqNxApHrD45DRhJDkXMfN1s",
  "key38": "3gLEvtcf9gsrKAzF5VNeox47AxBkS6FEsvhyXWENybWGHVyKwkw5S2syEqHtbk4BGeaM2j1mFrzhGd7x95cXzRku",
  "key39": "3hkrmY71vvLS8X7GTCdSuADLtB5nVz4dg1f7zBbE1SbUX7pZZ8HaD3i1FkyPb112ior96yk6p1vWPF7G1swSGgbF",
  "key40": "4j1Vn4KaBZzzwtbL1pQgvWNtbmaveyAHU8y8auJWN2B8uiVRpMKu6a5TqepDtZ2ooAEWKwMtGCAMwaKAGmDB66Me",
  "key41": "127iynws9CZd4jAL5Qzet6X4aw7pQU23GpSQq9jq9D6vu9j8H1gVSGTsJhUndhcofZ9chvhgE7aGiQtSbc25az8t",
  "key42": "5GnhwP8Rw2pBAiGbwdnekWchsP7ye1sCjifhkbgr7STutfdrurwkMwucKAQwztZVKCr8Thv5MWZdPPd1pbMyae9H",
  "key43": "3vQSiEnn76SYxrCTmF35UFKUuUdyVa9gxywqBbbYtDexgFWuP6sn7geQ5rX4dSbqe3CyDPhTisyZQne8mynvuzpb",
  "key44": "3LvBzaDUePEqatWVcbSWcvSKAR2u98P6kfZFcv9Lyq2ynnxuzj2auPsczcBHAWjsj3oeigAykHU1wdsfFRHvgSu2",
  "key45": "4v6cF8TaL9EQYhm6namvF4vXTKm7cpBut9BSPSCiNzGxyMMmYUts1LAvyTgNio3kBetZmU7wnd53Ca5YD2f3yKf3",
  "key46": "FKaRgtaun9fYUYc6KDyLQU27yRsUyQfxLyXJGhUtuTYEnBRPF7Ms53C3B6GbHvWye4em5HAk9uP2P8fWYmkK1vi",
  "key47": "fsA2ot79Jniunj7zUr4ftdZvspsTvh3xWqQUoAormX9kM71MRsQHHQBowDbbu7DFkVWZzhbnVBN7ZZhfH4snw2w",
  "key48": "5fb6itEqrNTowBam9MPFD5LwKX6M4mCqXXqv978uD86yoUoHhPJ35poJqrPBUxvCKr6B5Uwzh4joFjzzCod3vV5K"
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
