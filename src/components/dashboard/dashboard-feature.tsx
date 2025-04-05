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
    "3aN5bRwFmp57vUHAXqUVZa6PJiACPPZ21pUBCjVbjf6hUL9mx9FQB6jUvp3P5WecvuD6zLko4QJPHNs6VrwuWits"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qDweArHJV5SMvZCM8o2GHAyUSSb5wX1oxYKUx74jextxYWaZowiXXLSGdmrgM3wN8CXB8BvfCVBkPkyV5xUEHpR",
  "key1": "3hRWFk52sbnMaTeso2vDqgX9q7iHrxfCAgZwXoSXpxujfEmxMv7vsr8p69o3Qh8eD5eGxDiJU1st4hCQ1wX5iDzS",
  "key2": "PUxQS5KsskZHxWzWAFnEPHYjpHebaFp1vffDUChggB31gzkWiWLRrrM1RhXdJeQzSvZFJvqJcSMsMmchBjDhF6v",
  "key3": "3Z4tzg18DqfLih8UE35qx11SBJGyMBS9oGH57f8u8XY62qquPa1hpLrs6zgsdju1fTDjrfLAMwJdhsZgKBQSoRka",
  "key4": "3QEtkoo9WEeN2Jh86EnwbJQsL6LzwhwXTa36AP5fwi3vSxg2E3cSr4ffJ82DFhGHVMUZZL4Y1hDMdAq7aq6Ez3ey",
  "key5": "5wThoML2NdctbncLEcNpRFbrHnyra3H1axgQjXC2W1LHCgfjStPoLBiV4Qg8FGodzgXBqQwfqwAYUJsGHvgBSMsz",
  "key6": "4d5iA5uMeMsig5zrfMNFfrsyss7tRoKyUGThNDdY67iAE9kiX6EK4P5StpZwwVkFoWf8Kt7eXt9U9wgMpF38zV5m",
  "key7": "QFbfPNRGUrFhPZrjQzmu9cS462rYfHS6vhaUUW1k8SJXgcL53dUcvzpohmirFePHXocLcmL5U9ARMvtmh5E3iXE",
  "key8": "3Fxe3cMGcUH4XbLfrCp1zXqDmbECV2wRuzvbnBY6BfvmxbsjPzzpfgsmd4pqPvFtqCd7uoZcjGxPZdfnEAwZ9dpK",
  "key9": "2jSL73SN8nW6jRZhXBq8r6qkeKtszyAUNHMgENn1r1FPmfTVf1XogmEKqfostPiasmRVqzLNqdYesyZMUxLZAmJa",
  "key10": "ZMXmbUVEB2PqVwqjw1ntJcSdHYtf9CiPuf2tikJyMwzffkQEQWdSRCW8s2jf8JGVT9c1n4idvu8ejr6EhRAZX6p",
  "key11": "3qphdVTUvngSgoCPusu1toiJPM8tA7bnBv7oyeRBFY1LqWjVxYvituHzZzsNZwRfQnKbRFc4ETfCkMPZvnSJDHXQ",
  "key12": "4QqdR3MoA7QhcfYMcgauhn8Zm7wXMHb9oZtQuiWDsKH1woyyyvGViSy1ekzoAXdwyMoTDT9jtYmxDEBD87ZB75kY",
  "key13": "LF39apHv9hg4K5QA5WEm3Qi7V9SPVsMun4xwcnArbume6QESudrthZiXnbzLqAmiTfj2eYDSDri74gfXpR7MinK",
  "key14": "kEwqkaSSjQn9AN6sZaXgFRnZC1F2oV3YhAZytfVdq2Y1SE6vfuR1qSqf31NmYTohdZXd2iY6uKXQDuTFmwDADo2",
  "key15": "5qsbPbFCi46E6RVJu21S3kyTxBJTLcZR5bKrtXPv1cuMgqrqtpQi5osbCp26ChbsVZ2pJAfHucuBwbJ2gRt3KgXh",
  "key16": "wNPnmQvGjrYGym8dzBGGboeVNKniVDeA1gQ6KnHBLhdpZgaYi5zm3Bjb9QBPrXwPoaiKvREX5zmi4j1VAkWLCaY",
  "key17": "4iwZgvmKp2HoyXDPG8AgyW7tUCEbj7ejLCBWhtsUrCqxxRxMK7aUxWmX1CF4p9sBdgXq598dTFsoMFPx3yr2jpbw",
  "key18": "5GQ8fyLHij7Tf8MwRXCcQhW8Fm3A3HBHqGXf62j7ttxHmFMaJwaqxzeLKLbSLGFTh8Ro9HAt3hqZpgxQJH2x8Xnk",
  "key19": "5tYc9tAiZhe5kAB3MwfT7RvaaDtMmvcqkSmonPosPL6dEbuhhwTY2onqJexrkQXgauCrQX3AYYVe8WhMNWZ57TQF",
  "key20": "25phYuqvEBuXopoMWbvXsy2sLijgqxLBC5GNR8jtzcDLqaHZoQ7myNG7UahQ9ZsLJiRqdKwawxPNPpZLxEMT4Ptx",
  "key21": "4bkWhb6brxcgQtz3zqsBGe8SFkyyMcQfbuAVrYP9mmiZnrBoHXtrG6j5ocPkyNT6v2fN1fY36PC3LdTahHjhf2WJ",
  "key22": "iR5ARhFqTcrKLdAPLb5VRxWesU9Wo2ECg1iEs5fe71Rxf1sWwy6ayJmFEA6mDjz1cDzLcdnnUDYnQk6sq2JTrfr",
  "key23": "3g881pUT93EFBMUKkBg2B9iUE3znhPWfexLWL5URcihxoNwtxdRkf6bJa2zgMfeFv9qZ9qSbdrxtjtbyzakhJzPk",
  "key24": "4RHRGMLFCU8H8NaAiCp2mT6dX9ZLg5baZkgV4c1cVFRkb6efEgQRfHjfkQjEvzs7C7eLwveZTkiHbZpmmN5FBvZs",
  "key25": "2wNu87DhQY4esfvAogtnaLQE9x1sM1hcF7FPteHt1gkWxbcbDm4R3z5dNSwDS1dofyFShaCJENZ9Y2G1RPpyTpe1",
  "key26": "4oWkC2JHZptJyG8KyaXCGps3p9oYy8BE64z3j5UZ33NvAiDVqJoi2Zb89s4iC792R6UBPuJrPRL8SZA9EhaWYanM",
  "key27": "9dwtmedh3gJaotbWjjh2KHpyqPRHZh2cWJVqoHPQky9fGE55QqfAn1Zi85bbdQT5R6GYBMicNCMqTLVqHfkHFsz",
  "key28": "4GFs4HvaZoBZrHvPXubdBDmqC5Jx3Xst29TeaZXngQvxoexDNkzX5s882HQXbQpboJLbTWRPWA2MMoeQuEqUbKwP",
  "key29": "61wVKTFgwGdYYAwLuBTmEChLUN3xKwYWsy5jkSL5M7grtCAvkH6FPKFwAkjayuqtVepvUets1gW8u13aP4N9kvgg",
  "key30": "8pxBLLFUPchDHLNKkKSq5Mb4h5uD8m2C4tr5X2paGWqfX49AkNzFiTHLaSZWEgWkKDHDqNcjQB34WY8iH1x2EFH",
  "key31": "4PK1BJdULhKnUYMVCYZ7bszE1LnV7sJQv1oT4oLJ5Vr34VSV8dSfmQYGLSGfoatPuNh9R5hVCRzCw63Mutm4HBeN",
  "key32": "57rhTFLmYANWknxDviWt5S6sWTeGEt1fUUnkGTkPsYxyFqQ9fSz7HpKqAuSGrVFtFNF8utnS1VUY4sYJLBm5qiPZ",
  "key33": "5NSw9nQxhSS28LZHVNVbUjRuX4Q5V6NXuYwYbvBjBrizoiabJemkEpv8sPbKXCnBgEczsbQTLp9BZNsseG7aF37F",
  "key34": "3g11JDBnSbBhbW2zMtxkyXxX8DWcteFWqMKQC2fUNL61JVkM2kEXs2xvGStzqTV9ucHEdVSxuqXQkhornw6EkM6C",
  "key35": "P3Dazc8RPwzvTupRpVRPYyxnXFAkr8P6hZCfsCvjihRTJ9Jssj6koUWJWP1otrGuztBgBFyWiopVBUf9ufQ2UWm",
  "key36": "3JLMTcxsghvKJs7qM6GqE8KVsRko4Pm5GcbR7MKfj1s1LYQUUJ9KAKMqXhiJPHHV3YEi8ABgw4LKGrvsgWKxqyqc",
  "key37": "2cnHLnvukcFvRywLYrcYbKjuk7AB2FKSJFgJ4rztdC8osiQk39kfBZPozK5c11uVMBMh679DkxuRyhwRN8zFef1p",
  "key38": "4ePvhxnbUretvJL5FiviXWtzigvGTrsxaTXgSNycA9PnoQ4wYYEGLssGgk9vK1XWr2G8E5TsibEc7HXRktg2R7Gp",
  "key39": "4jgbSRxUtoxT5jU3DMZHwYDSFZ5jYubDZ4D5xqvoEAc8huYAFZYKmjMYJMwZGtKgGtc9QdJsDkY8kG8iT5iMKVbN",
  "key40": "4cCyFmqS1gXksnYPtjzSpM4kuymfPVDFEuFLCYYRXRvPHE8KikAM2UW96evSby7wtKssxTXbjARfgMnifjSW7MxW",
  "key41": "siXm9YvLzU1tnV4wgj7NK65bJ2dLSkTedZP5HC7ExmjGqKZ52VXALMCAcLE1WsPYrD4GwFQHB9nSr9UbCmuSG5G",
  "key42": "4buTA3a2B4JZKVhQFwnW3ANgL8RKS2ZvJtTxeoKxNZhxMSC8JHwnNfBVGWwSWYEuwffbrNwUqtgnbn4fWPHfdgms",
  "key43": "3z9zmZ1zZ5doc63KMGTZdy1yjyyzckv5xNBTGjd8R5hM4UKse3x2yJM4Y5mCU7D1ufVvfxV9JC2WEBCwXjE11EX3",
  "key44": "WUQkLnsSUv5ttf9haLcA2HbQ16NgygcUeLek9389tUc5uFfvSDNuDoyqQn4Wb71e1Pr6cTHyuyrGuvqufeqgL2P",
  "key45": "Mz1chNkm2RoJxC56n9Hi3gksSQz31FS4TqrRfcmfVRPcHFqNsENB8qoSD1ckZEFd8WgiUSdEB5PwUcswuG5dEfB"
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
