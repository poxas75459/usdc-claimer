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
    "5JAJTYtH59hjt8jNAfWBxSHMxsctGaz9DimEyRx2NdiiYRg5yFK2BTNBgmaAQFakKus614LSjUtA7ran7wKoZQsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LmkPqYg1rrD6mBZMvvEzKsTA8KBHVHwh37LeMwG9x3JM8bWj1yDHky9S2HrUHu6RFvzxLirAUtUWj17k9t7onyp",
  "key1": "2PHt2cVgq3xDXr3ScfcTQVYQdjsTnND79nNcT6kAFGuGmXy6YmdgzEoPRr2fdxDxvBRB4P3n8rq4a5ma6u17v5yQ",
  "key2": "2REptLPHJQdaNMQ8S9m8pG9Q8r85NAifoWjUeAe9Mvsx5PTHuW63Atvhi1QS964HESZe3HBw98QrbirWpkeNq1fF",
  "key3": "4v7TZfXHNvjuv8rCsgYYCkgQKdXa6phShrizwSULNGzTuPTMhenRD3shQceYbb65gV8RUrCLJMAGawdZkWxY3R4P",
  "key4": "4dCJvjS3nCRLjmxHmZtjwhiyBhZjpFwQbSyWhNxMyfFnukP9XYLGFiMZA74XpB1ayUGv67mWxEZcXHn1rrYxQ7eC",
  "key5": "2xEupQoTvtczEzLnqiuCWNLFMLdn9GE7c86R1RrbhZTyx2iEvjwWWdN5kDpgGrC3V5fHbAqcRyAVuUtwZZ6S55kB",
  "key6": "4qP25HkxjquEzHcCrKyUNz2t1VfE7n5eLLDDV7tx6Cf82PdSEmKQMowNkNJHtTxnusjjawLMj4AE7MMFR14hr42m",
  "key7": "5pmfVDAo5QpQdacCx2cEN8QSFkpkMGTi6UtNBM3g2UdEQdzH233TFcLFYvCefA6iwHBnZuRgDyVawJpK7XUeomkM",
  "key8": "2XmVByXMYZXhhQr7wy8W7xhrXzxNJjo5jKNTKFW3YpySfEvvPXwEUE7ZfWE19iPZfcSdJt3NR7bqRFsBGi18DLYk",
  "key9": "2NiT3h53NTri8dMNxfQtDUVzfVXBwdBpyRTfGDmX8QqWjLcek1x5NZTL2mS7Lne6ZYHAQUisQLFKez6EYHWR2fhW",
  "key10": "H1qooxhBWGnQCJDcMbZfjS1hG2NWkU22Xf2JYvzfNVFfTE5o9H5CVWURotmZH8gBJKxNMNY5WT15bZ32yYU6PGB",
  "key11": "2hjhwqPcHKmZ1ESUTxY6FroK5RojFcuFhxuNpRXwEo3xoJZ7aJnzX1KntMx25TjMwZfkZLhn8G7soG5J92n4CELN",
  "key12": "5TP1VM98uoKrxeAnq8XLLW4i4wrUNYn2pC2WkjLKy86yZtV39chv42dNjbrVE8Y11TjGqSbdpKKc1i528ZXa9M5f",
  "key13": "5edpyUrTUdyH3cbAePJ4igqVpUMa1oxWCgxMFjaGvJJxQRzJddBc4qestF1TemS7FikGw1gnmp49A5jJFzdWoVHg",
  "key14": "31PGQ1jGriP6EucDa3JLeAdKkCjNdaeMpJJisT82zDJgtmLsNLwssWo8ZS6AL2KhPp4ZugTfMYcczEncN6ATrLeW",
  "key15": "3WUoP9vC8HTabuh4sMX7hVnvG2n9fHwnfDLszUeg964jp2gXLC4DpDBt8CaSavvvigpQLSi2V52BdNLCAHLtWXJz",
  "key16": "2yTpUmckiYCbVWcqTRkkvt1RQSbQubC2QpYbB7c1qhXwWSq32yQLJ3ay48DxtfJeazDp1qqC9bG38gVEYQ7ymnrj",
  "key17": "34T2V4eerumzeEhZvBzixXpFQbTX5cF83ab7sB5UBvZ6sCRpgSPvL8M9o3rF8DWKuWLadzkFx9RiqVhcJB8Pcrg1",
  "key18": "5oKKprEUZHbqrCfPjCr7Fp4tBmKwmewFkinSQWewcBHcSNpxphEhaBk8a46fNfYbnT5hkMDv2JWkXKtKZdoJ9SVg",
  "key19": "3qWGZChFwm9d6JWbAHGuC6u6v1CEPN5d3BhTqgP1vNVSJRK9iaJoH52oqcEifPSCLvun9nm2LjAY6Lx6yDKz2F9x",
  "key20": "4Xace2JSo7mt6WVqerwJnvdY1orbAf3qrR3wVxdRkbhDBDnophFYW2trFknvFr32RWJ77n6cBKwxDpLbpkvkUZPr",
  "key21": "4hkkj7BbW1tbCiSexv99d8bKB65FhMY27aFoksZPtMXLeHkQT44HzuDL8fhD8WuZXEJ3YAfVNqbdWRLr8pTLVeKa",
  "key22": "3s4J3vusJaxKC6bjAvkE8FvfzY15TbfbmBAxi7BKUzuhiUvrBCiFozLG9RyULFhEWDA9g6MM5mo77pqwcb79VpM",
  "key23": "5aKGrQpiKEVjeD1AkcJmYyesTJH4FrNqM57eu9sKXJSzPde7oJEqp4fuj8ZJ5cnrwBxn9ruNzFW6rdhHHrsNP7Ga",
  "key24": "4yNf9kd2PCtVNu4tEq9MRBUj5G48ZF6TjGeMKycJR72sTy2UAVKYZbXnVyndAfnoAtjETSCudbv5MpLvnqweW7um",
  "key25": "N3mrkeozfRHkTsjisPTv62PhKw9aSZg7VdmXh4vnK9YYaXEXWnMa8FVPxNiGWDauMyjZetWYsVmEbAZZmjb2Mhv",
  "key26": "3bDjfH4mYdVw2LM7TAahFxAMfDebxepLnG2zhARoiVMXARsCxGc3bepLPeVVRDBDSdA6mJXqzxto7msMsgJFfFH2",
  "key27": "5exya3iqY7Pms54zaB4mTKH3yJVFNaKQKWiT4wrgTLR3eBMxtnFPrgZT7aRjpmg83LrEVnWCYybB1ryR1CokNQp2",
  "key28": "5mYgbaWU7L9gi2DvJ2mH5S2A1pesZe8vqGx2uHbSx2LPTdxBwaDvSfqWWJwSbezAiA5sCb1ddnJ9hD1fun8sbE5E",
  "key29": "2atRRgRcDNWo5Q6zvJ7pejCHjbGLoPY8rtc8w2q2WVdEi1MQ57zKBJPoMmDZ6VZZLAAATCyjQPiuDjhoCzEqSuHs",
  "key30": "5h8shuLn4XgMsjr4M6CCAyxWPSfkaqZieyVvPmDTh4LgMNzGyVHh8KZGTCnFEFHRgCDWk4g1P3VY4Kw3TwiTjxK2",
  "key31": "3PYGh9YoVgC4skCz5YAihpNhgNrmmG7WupVNJevwTDDBU7niyfPMoujSVp3ZQihgcx4cWx7qWMhy5GoUD7gUfRtq",
  "key32": "3ZUbMrvvGZKtkRqzberaJpy27c4V7gZpa4zUPWPbsWYbebs5AyBVDsYPESs9Csayeo4ALnfReVr4az7wobfwD3Hv",
  "key33": "oRjzSoyg7HbzJYFJ3SjdhK9RbUM9P5yqvAtpgbziuy9kqDtcnLyU8JuCidUwViWj2h7z9ukrYFTJEXHUhgGEx7n",
  "key34": "43E535R5V2UbRC97Qss8SMoS9bLtccCvPBR85xn79ZDoJAHyobfMispgVRBFzZsuU2fsBggPZEnCJZUM7JLD2aTJ",
  "key35": "5QWReKg5xW9NnnHdip8W1K8cQUB6uNpQMLRLCe9W4vvNnNmruwL9b9jkppUcr5hD1npJV8sMM6FNK3JhvTyv2EkZ",
  "key36": "55wGankpuayvEA59Ee4ua4ewcXGX77DFvp7ZYtpgBPJdBn2wSSgTeKJ8ZjG2KVkSFwo9SXJiZq5SRRgefdBqz4YS",
  "key37": "3zkA25cCPbMMU692fVag1kFyEnppWaoEQoWz3KQR3wA1NG4rpgFJKY91PBKqhHLpWAGmfydvNVbfTWyA2H5qtfYm",
  "key38": "49QW8PC65a8gJFumCNQxB2W4jyZY5emBjoCqHJRuHdJ1FXJQEZunhNm4Q9hHPatFEqhMR4JfqS1qrLtvcivyeCV9",
  "key39": "64XvgRrZrJdvtSi9iHPcRhuv7NiQw2BKHsDDejgBC3Qssp32HPnCkNvr8y18uGT74AciJL4oRa9dahpCpHkJi2dE",
  "key40": "4cBrQTViuJfUAh3tQEPTuKyWkkr6b6bBiJXssi522JgshTXDaHz3c96WAeFzwYGZcu4gwvrsFXxrLHqyEsd854cA",
  "key41": "4YHvznnhszDPxonnwsrs73FPrMmhVpLA3LYCdGgctXVhybvYiALgWUaJK2Pe3iw5k6TjTj66A2HiwjidafMzNd75",
  "key42": "2m8qgK8yJf2HscvtAvPvSpLaFgt2sEmC1wyRdj1JbrVFFUxP3Gq23qkhzibwy7Q4x3qoiPzaRoSqpXTm1gdTsvZ6",
  "key43": "38qVVAAve6ahoYTt4bMmRVHVrBBZUNtCHV7RWB9aLeiaHUTvadK27rp1r7eYTfutWwaxNyRyZbE7VFvJqfsNKsjQ",
  "key44": "5gbAQmYNwtPJa41tZWe5K7EKYGwceAaPpeVZpiv1kQXcN5xNF95mZreVUVimYbSFJ2wXPoMX59r6vDnGQxGCX3rH",
  "key45": "3MEesPajPcPpFCSQFEmy4EWVHRfBoGRbfvYoThCYDJMhfYu4mshXndQLas1wzeSJDY14PSwVxTHGUPFiTnnWseei",
  "key46": "63min7DwHJ8EDpfHmMVBH378H4XExpZ6q7oaScHKVyi6H3gcYrAyF51fBpXb9JAkeKUUvQ7AT2vKtdaiVi4hyutF",
  "key47": "2uGkHoXi8bH7zgCERSYqRbh1rUcPzbuCmp6twWzWh9HsDuXPMe2J8Bhztx52q3rXBSz7DGLtYnhzSguFUbC6WG6K"
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
