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
    "4LbDAo6WbkMponQ9AXYWf8VCWJ5f1jr3DQ2mBsptLpBe1jFrB3dkTkkDsNEh8kqjtgeWmJ61PEGwVCm3wokcEFht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqqmDfpcDxdMNqUazgMQwTbPSc47AJQHuD4taTVumSWemiCfNCFik8TCYHz4TACP4MM7Sw31A39XnqGxb4qNkfd",
  "key1": "5h12RSbcVrfZciNBATtZoBXDpeuJstpsttQGbpXf3WcXfz5VkeGV5MhXtp9S9swAprCfkNvHwBFDEUjV9XRYvR4n",
  "key2": "256Ma9bmpT7VUfcDf3EsTFGQzSEenXKNk6X9NFZWNUSsa8GSGpqH7jvrRbdiScLiVXVyS6itzCSsb1fqZxmmgJ3S",
  "key3": "4YQYF3VqAbEmYE5HuMDuzPHg3DjWXLx2R4xMkXTBzVpjnkpeztikcyYzt9KXt3PLhKHvyQcqRuo9QDyzqxah7Kv5",
  "key4": "4YtfG7frewZA3hRegzS2hFF3vukfmPW8VADVMch3k96GuzwnvS5MufzKR3Pkbqv5ctfe6HeBMgGyfkpmtBCp2of7",
  "key5": "4fYpZ2kwdRnuFRfsAdEyQdw2phhy6svQVfozK1mwzzR89rv6cJmvLSm74sWh7RGNNh2j33rst7etuBof8tn32box",
  "key6": "2qTce28WRfx647fEcupBqvgNx7tNaff1vq5sdpdvoBUXbq8B1KaNR7Q5soNvSjPYdwZQSUqjVysxK6qyTjuvUtxZ",
  "key7": "5LaN23SvST599P8zHqDe1RRLg8sSNgHADnDTnYhytTtQ7SiSQ34bTrWqL438hJd91JCN6wxuQA5w6wQ4fSCa16FH",
  "key8": "4zTmzubFCg5pXtauTCZoN424RxArPhH7FG4aNs5Ra1MRptQkt8XdvgtdLig4Y2M5rCf9WSLRRp8jekphrp7nwXkf",
  "key9": "414mtZrGcQkomLZEGw34dg6d3oY2HENCMa1YAqGCiozjzVAdSy9WmD3gzPrCvMEyiMEZijfxqmByigfdkKoZzkqK",
  "key10": "4fgF6rPS83ySezaM2xAg3Bo5HxaoEJMCjHuRYRaTSBter34m8D6jU655q7JSByC8HDkqhMLcJWRMhQJJL5ctHpLR",
  "key11": "3qe2TtHJFwxGnwNrSsE8HwXCz5QBEB1ykQXc1Hi2rvtiWK2WeTUioq9w9xZvbbwCVniivLs7fYmLuhS4pjxpEuX",
  "key12": "3WXWsgapquZh1UcdKiTgCLEXid7k5Nu3YHnQtMiaJHcyG12EF4o9ikX13pDKPmq2XXk7YrhCJVC6zd9LthuB9bnZ",
  "key13": "5ozzZD7YPgUXs8wXBYMb2yevJKTcSZkGdMktFbmGnbVxnFusUtPL8F22eXYF8xQzzcYcCFanKJSpXPmHJ67Gprwk",
  "key14": "3hh67d4BvJGkJefofD6HgfSjxPxaAwJ2cJKu2G2ooZ17dDQsfaMN9QALezSjLJyNgMDhUMU1rwjtSMCevUbmSvw8",
  "key15": "5CXk8HUpxn64YoyJMGSxVHscmnCVjkyAEJSRd6gHrmFe8uFV83p6QCUqbbuBGgaDvmsmpqMyZEH1wFV1JCLKhDF",
  "key16": "2VgkDVvfwjLdZJRwg141MZJhdFfX2nbTXLrLATWB4a54sNwENBETrNThTuotV1AXjDy3TL6PbHCH2ew2UDWhjqQe",
  "key17": "e1KLSytVGASWntqiF1qeHewt5qFuCHqvhHGLRAyV3xidkVfmgwuFe2B3X5G34qDmVXosayuvdCerEAqnbkdP9E7",
  "key18": "5djQ9cwfFRcdFDGZmE6t79Gp47dAmicxYxJBM25c4QrZeccX3ypVErXk3dScrtUp2WKUWVj8XoEDbp6yL9y3QDD2",
  "key19": "2vp2ddhuofdvGsXcTiRgLHFnQptw9yhEXGVgF1tbUR7eZHkCBTpfHwfFHawD9RPSmtMwhSMKBL8SJV9AGeepzC8U",
  "key20": "4hSzRLcWoc262CQQ4VQkm2QUVqrENjZ5C5yNwoa6CYD2GWu9RGHjijWMzxBHCEwscDuyyd6iyxcNFZKkq2vQ5nNL",
  "key21": "3xM3wmGsDry37CmL2Ft4V9Ge2HsF8JVUPiYVZfsM89T43HyMyzfQbVMr6qBVsqifGmcc9RHwpLpuGRa74tfEdYfg",
  "key22": "5QKQywNJREzB3kmyvQhazUKjtLs4tU9JGBjKjh2JPFJqBcYzM1RpJVgFjV3dgG6CxpGWvjog7ksWLnjNBLtjn8vc",
  "key23": "MFUQdpaAAFNtkMxQ8TvR7u1vWANJe2msDctWoRWSPHUt6XC1uvKpT78MvHGWw8YEZu7Bav7UuGkk9PgB1mGSVHk",
  "key24": "36MKU9a2swf3pKXc23ZLFynqh82fqWuT4JJV6p5AaYokHJqnSy3DGucgAr4EVGWmPcFj6ffkV5Fj3xVxJ3drtsRj",
  "key25": "5xw3oJnh6TpBGptWqW5wtQHU9ZgXNfvpVagV8gXxZuU8HWzdKFfEqzjR1ddbn3qoDmRivpXc5HSRPe1n1GZL3vUu",
  "key26": "5LNzVyomMvvPhmjaTuFAEoGvferZE2G7ezekWsSiF2Uezn75FdZmbdzZuFmx1BqoXv2nvKyEDgcsf4XkyikQd19f",
  "key27": "A8F7yPEmase853SCjSt855UC9TujD5hej6cQmWPuHTC1fzcwXcrf3bkDkhBgkixREGnRbKpvCQreL1ByGjDfhnV",
  "key28": "5oXfkb7GSFSngMydLN1R9cpnHMfpAaXwMsjaVnYQLiS9pz8PsqsYBcZn9EGNqrHL1tZkDYFoqrbfeRtGyMiKZjiU",
  "key29": "3JzmY6d4r8oD2upuoHk3En7yWgcdBdhMtjap2u6q44DFxDDzTRQw6GFcHFNsH6tJKLhA1iMXj6NcoMBgGC7Um6Xp",
  "key30": "5uiNKH3uFPAimqdT4BMCt5Essjr8175XiVi43RwsCWBMYarpv95uMmJB2KW9mhVCAPWvh4NaSmV63X7ZMEgTkvmb",
  "key31": "4ALxYtVnmcEf5BBPzraPbziUAJT59raEwR69AzLitdrbfQaiCYwfXfupAZcTxbm8AmakBmwXq5r5CjGyJuncAZA4",
  "key32": "u4nY2ofeKeKTQ9Nrzb5DdqgtfBATuzApWSbKhTHhrNdiw5cvsu7ygm7QJGugejMa2hSs8x1YnB7LWt4QmhmE1ww"
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
