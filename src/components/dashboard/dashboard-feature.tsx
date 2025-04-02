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
    "2QkHsbiaQKzLuFMRNWG5VBVDqD5UeUXQf8janM8sHhrr6Boxop89eumMNK82RwgRFGeQCSXrwrCRF4J481PVGVnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWQN3icPX1mhypHgW88YmBfzpWdAWQq28QXjzCsD96FXXvNWVmt3rRHxDmrvfaPyCAuj62QWpAPo9jLzQf4JDD5",
  "key1": "hDBqJp62cHQ8Dmnkm4zCq2ULUSho4NsGmJg3g9STV2rxLu2A9hYmUwUzk4kVQzWtPwWPyk8rM2NVvvhTPJ3etNu",
  "key2": "5kjPr48x3dMKK1GK5AVXRKep7XHTgrqTjd2nzTaPDLs9HYdxtkEgdMvDZVZxAaCipTpig19XpdqFUs1jkr7fsMxY",
  "key3": "4YwAHMx2Mbu6r3zZxqPkajVm1VvYpg97egZW2wDiYuzQVYEqmfSLEVA67TWKV5VyfBmYPnr922W7Rz4pgBkYbvx8",
  "key4": "4Hpuwaibd2jvXtUD2TyhZCqeQWnM5hskWZK18Qeqj6ZQsVhRoGQeyYofTuG17zxhbCdrherE6w2evC9w8CtbCUYD",
  "key5": "5bTk14dvjraPZAyemFv4WrZ4XWcPdhXpCwbLY9zU2o2tQTpiGa5R7EobWFy37yjn39R2fjUxxbfWbyZbMuXPEdL4",
  "key6": "3bBEzGPGS7TMim9HaQ3TwUkyjijEupRLV2x7xzAcLMENt6uEbXghiDknQLux5Vo42GLader8rohHdQHFtv6r8UbH",
  "key7": "3Zg9Kepuv45nyotLj89g5g1GejdE5cqcgWwVMg9pSea2BV8ZicAUpqrLrati2npiXEdzjWE6tKYc5jqZus8nYbEf",
  "key8": "oX1rkXgARQqstscyFujemPs8NzCKJdT36dK6XMWzUw8XVKgb5UCnSpYBLsBABJaZA6VDWGS5byYZ5UXGYCePZVJ",
  "key9": "35dAvzGGtuKb1NuYQSQ2aacDsCE39dDBux8N63rX1C1UHD8r7VxtZEF1ivST3i11PnQuY78Wj8XMmedS3Vma84gS",
  "key10": "4erB2LBqqyPiXHwrD4QrN5Z5tDqmgeF1S4WiHboV4KTHJwYCvipRGR3ustCeqRWMZRuWjMvbYo3EbyHQeKBaLD6b",
  "key11": "4f5xGFqSu5W8tycK3sjQUhHkeuGUHF62T7idnxLawTohUL7Y9CF4kNk23szgNRZYAeq43sztwUxBP5vtdccNyGUc",
  "key12": "4ubjNo8hDKEFQbtHZ5QKg2JsWZWRBA4TcLkjpYNNM37EbZ9NTWVE8KuftF6BHaoSLiTs2nEqymnL96ELffZGo9vc",
  "key13": "3q1j2ALKMcnTGdR9Txn1xFNGXb9JuoZmWACApckbmrxRdPjpfbQQ4PfLLcWFykqL5yC8iGJjqSjeBqC91iwHFDYm",
  "key14": "5szxUBZ9KQVnpNQwMWS7wxNFu564YvFbWnqkWJfM5e73p7G273ryDgTb2zwKgfwJ1AGh1P3hae5SGJx7dTGYbXxq",
  "key15": "3giq8McDWcci1PD4MsP8Yui8BZ34cxaegC6GKfdJFN6VV4QEN9u7qz2nf8G1Zy3TLPDK9GmCeCAycEkbUJd9NKRi",
  "key16": "4JKfBNxJzhB6pF3MgKxm9k5Vo2w11W3YeRmJQoWVghKeLTXeakXyCTdNhzXbGGMoEYHa4BSR8YxugfdRPtLLiSK",
  "key17": "4fpJjLYo6tAnRoRqFYedVj8f4upT1P2dHthRj6RUaMiXPkquthbNX5JFqKHUuoBJ8nMyhppqTPPnik784zwDKT33",
  "key18": "2o9ov8zJWFxVfFsjVYTd41XGJ41MKGcZE7pdGvNTQPjfzownYRgQ6zUnRy3W6FdguDfJ2MJPi2CMGqtgpeGj2jtE",
  "key19": "2Tak4ueX7rz5JfMuHm33U71VuT7pPY8twyHmFSm3FMP9ht4pfjmUix2AN38DJ7BXp5LJvhcVckbrC56oZMzD1kX",
  "key20": "66hK6MxLD8Jbpcg9MfGwUZAqXTSB2GDKsuAQqA2AdsvAUhNnujtSVEig4YoWREShhvXbSjN2zqf4s7rJfCYPH2Te",
  "key21": "32wRD8uj66Q8tx1p2jWHU8toydd2uGhGr2TRr5omgP9B55gLw2qxfgFL6H7jg4ii44edarmsoMnHYKsvBU2QBphD",
  "key22": "29err6pjhPbqRXV2unwb1AyDAw57LwXmCDRy3DJ1DkveeGyKMYXKLfjqJmThjMJfpvKRC9QPGWMcor9rwCRs975j",
  "key23": "5oLNkdo4zzJs1j4py8anrqAwAtC1nVN4N2tkY79TBpXSz3euR1Xgr5NihCQUuQk4MSy22rtGBf8eiT3eHcEdh6QJ",
  "key24": "ntbnSCPiuKjjeXDdk9KCsY5VYf3StuS58b19jTQYf3m88twGFqNaKUF1pGVq7jUa3AEhw6sMbWMqKuckgVHw2tx",
  "key25": "4fUtjakyKDEwDTwxGNje5XSqLasxkSmzuK19HdkcMb9DkqFSHmGg1gDEr6eNNkrGDhpJa4wXDhZCS5FDsHeZVbvK",
  "key26": "4Wm8Bkf8m9RxRue7TaCiy2WyDsHrK2t2ZHWXZG9dRssXmtxTye9Xp6FipEcqHDxaiTryZ6mDBvYiMkjvDvwv2r7n",
  "key27": "5vC8zj1DT8LpGZhrs9pVpu6KD9b4XvrCtTgAxiByePkgBerSC6XRA8c9oaGDmvBzQ5gSApASUoMHjCxWoxAxK9hh",
  "key28": "5h6japTS4yzty9jMY57H5wfpMQ2HtCgkibpfK2E7nGscZzir5sCVVrUsYxdZT5kQcpiAaahHWL69kLfenpMzV2ZC",
  "key29": "5EwuEZWHd2viPcfQ7KhAhuZww5bSWMeuUGEHjLKqSuU6UTNGJcthNgVPrqJrqpyDREdGN1QvXxcqBMEz8Yp1E8ws",
  "key30": "KqmTP2DT1bhqRbT3PFRUaqsLTsbABxK7hvz2vdk7MQoVLwBSq2Ptm4S9fNSFtPrQEKEvPJ5d3CyEwQ5EML4viYM",
  "key31": "2ShyoNx7NT4kNvUVYEoMcsm8vsGafHs9hRN4LEzGy9mgfJhpAzkxdJ46N2wcKqunpnP3XkiDZ6LtyLCi1XPG8Po",
  "key32": "4ZTTn5z3z62GaJgjSthqtAkn2rESC9cpuPDg7uejeK8RhrGaMBa9Esbox9PaqjFpDKEVRxPE4g7soJrAsnsFssCk",
  "key33": "24dSnauGXijc8FQNmfCa3BdSadUB28pkky9j61A6voSKm3B5Byueu96wjksAUuDAN1gVqrt3eLzf3gzeS3sALcBe",
  "key34": "2RCh1NLYxwci1UsoDKiZ3NaP6uuFYfev51qs6Qmr99ZLFtMcBbZoLRgZwNJskZrsTR2KXST33MjJ6tnS9uUiL4QA",
  "key35": "5Xecoar6rCz2tGtuCjBvLqYhQ5aPQ74bpQ1zweNbqybfsCCi7fkRvLw2swRs1mXeTBkEAYW5a7SotbCyabMP6Hzv",
  "key36": "2vUx52AL8kG5WVJzXykYiGNsAwYu3kJHmAYHHC32Dd9djjb5qhcMbx5aAzQMVM1y8iwpeUseHoEYJtiicNyYBca1",
  "key37": "3GvFX88LjwQ6JSDD9DXgrrFuHVuHxQRLLPzPJtLu1Sktmh8mh2hU5Q6VhEojCAaC39syPEif4SrrxP9GunXkCFUm",
  "key38": "64528daHfUZ5eYMzbTcDK8eEyhJjoNbuvRQgD6KzCexnPXtPYa2vP93Wx1jmLVXTCBAgq3vWexk4Taz8y28vDrTn",
  "key39": "4TnRFHnyRganpeEPftRh9HuuPLLtvcqNsdEf9BtopMvHgejWpTgyPPkzb2PKuNtzngH5kLWdDdHitAvnejAZdbJ3"
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
