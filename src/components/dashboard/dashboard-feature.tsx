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
    "2X9wmCAS1wtCs6NuV8Q7a4FnMsMbisvUKtMdfVfmM18Qb6JNK7wRo6WPWGRTGrdhUY6cFMQ4HEEKWX9euHz2jBPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d5xHmA6RgN4eQdSbeFg67gktvybEbQgryB8A9tErf5Ro97C1j2tQTzGcbdAGGXo1RVg5ZXJwCGxb6xMSa4wGEGU",
  "key1": "8Xp6xJn7EMfsjoNiYatcx7EAAg65ED4Xg38LSpM2yhBh3pCL4vsTcrvzgw32bhM5kbvZni5gS95eZDASL2tbzSL",
  "key2": "5nN8dsVvMzfkmwr6DHwu6yd31dBiKUdt45dTXJhvM1UAvJngpBPU8ACW2nXki2HENMxvL5K6UnuDBqhyvYTMwu2x",
  "key3": "3BbdcrNNpiD14apYm39CKLXu1nbaFWhhx6YSaXRCNqnGe4SqT26SNHFwTUcH5uKVGj7UVQ4bdkRcxUwirgfmvRk9",
  "key4": "4jX3n9Htkcg7Vf4VJJRFhbvPwTNrgHzJW5zuvn6uNcPP9SR13WEVqTnGRHMBvntHxf5L6nsfVC5886bMfooYE2SW",
  "key5": "2jFGjM9VxSWiYRfrEuachJ35SMby9RESHnBcUuAnc63Xuf7AEWUTUKXtS9nKDnojKbVGKb7rVydui4Y2nmotJJ8L",
  "key6": "ndxRjn6jytXWMGS61WimfCUMdMuat6HPy5o1xMByB4SU9QyTfvDLRjiBwTPQ6LgtBwcPZo2c6Fqm8WQXTcmriLU",
  "key7": "3GicnW2YmzsX7ruwL7kKdZ9cxJdkKJJTKGNZAhoMR1nVPhJvZZNKd22h7SMxamh4jTDxPSdzk1xX3w9NzMBprqqt",
  "key8": "5tgnWQmkgKRVKrkSXQHy67u6CfUmgn8UD1pSttYU5dA2hjTcHtzLqhbyyrJpSKqNLhAtf4s5byTiECtiZj37mjff",
  "key9": "3vhLpkcsQGn2dVYzews3HcvVmG9z9wwLPKVviYA9YadnHrv9vsGHuu9eB5sqWqY4m6rWbt3BxT7TrDstjcpMvzKf",
  "key10": "3UCvdcT7TAPCS9X9jQqoSPjtk2mwQeupzsBWMfBwnH1pEWEX2EfV3QT9yojYSVGSmVbfNcRPMhryf23Lk4SEzarz",
  "key11": "3SWF51WX3wUkPnTZXaDamuP2VviF2Y2hudc3jEFNxvAtDA8ifMVMQTUnXnE1GP45EAHhrm2TidkXFj1DD7TS3fC",
  "key12": "5yxgbrvr2SHLDACcqYkixXiFoTfg3WrQvDc2BJweA4BP7RPFusjnKms8KSHAov8w3iE2MfcbcPyhV111yW5DD7oa",
  "key13": "3BTFZZUP1TL7UcN9hz7AFmYaQzEZNmmg9H6KKGTD5sYmtzEgJdkGUUmr98yCJFp14tHaQU8wtqpUYwQr9yRkma6e",
  "key14": "2E3FEUww7ZMZFC5PwpTdebc3LzSxyy7MoHuGmyRCj1KaTnT5jUTrHhUeLjaYjKmuUsKN8jBcEfKDB89Yj5MZqSeE",
  "key15": "2kYL1zo1x5kJbTY6bqvUM8kV9B7R5BLGayCoLirmQiHcbgvxP4hhtacWLHduzehauGYBrPdzT4EpwtrEEMiVTPLp",
  "key16": "4JzF9hvxwSorqpKQ5QTkRQMmFa5Y5B1sXJCPUb677DCWvzdUksmE2M3ZPcxnHoJpucMRmuFdQBCzHZM2TAgyYdHX",
  "key17": "3d6U6dMy6bib59ULyVeWy6wbUAmXsF24238rwdSFdgrigQDsvchdKJZtH1mJuUfKWFofFG3LTKkcqpSL6R8SUWt1",
  "key18": "3VXBTCcyf9fvDcFvGsnCZYYKmDPUg9qgnHkeom7ExTYAcsbhCcaTBSu5JmPMQkhhiCHuKUZTjPnCPs33MD7apTDK",
  "key19": "2Ua782mb3jQnRg5TYyuBJyZ5KvwtkdjYd2rLimL2CDXD5QkcNK26RkBnZ5Rp2HNnPpUGfFfvfyu9dTmBieMLYEqY",
  "key20": "4rHnpaH24SmM8KfPzVKxkyiowASebkTYVwaycuxQ1u6JQFb51Dv4UX5u1NXA52opSYxDJYP1XC85rm3EPGzFgsdo",
  "key21": "42bgEFZ8oAPtnNKTuvsw62et9kFyJZB7qGT7RTjeWbdKijq9E4kXnCpsVUFyN5RdLNyeB41NMTFvA2NHHSsWu46j",
  "key22": "h4KajPLxQuTFy79d5phDKMTsGjE3H1CtZ2okzDUiFVwJUQsXY6cxXmZAeSUhK9VVyXBX7SjQ81crt4aLC59GpwC",
  "key23": "56Mc1D86zCY2rmj7uroTLtN5XaY4Y577U8CByvV2fGRFGbKom9NwzdQWjQHAnMRYeMctseo6qSXBjG89NKD1Rpgt",
  "key24": "48Gmvowy6KiARZC5AhtSqH9AKGUebFvqSjPZNd3sHFc8Su33ZBivshsgYkU6ukcBhGNAqQ2b55xv7esqa8dwNCGE",
  "key25": "5dt6MxnbMPC6USjiSjqHzeb1jocu8b9nKueu4VqN7XEbaC5K9qwPKqWjPh5axNxvK5qAeQTiBLQMoJ8VXxqvpSng",
  "key26": "2RzuKPS9dcGGiqjMgVgpAuiurqp27SuFWU82t244vw9ZqcW1aSyH9XUfGKCwuyLv382reWhBD1A76aHLr7rL2nYn",
  "key27": "2R3P9X9PhjtF9nPqjQ8rrTB28K5yDRR1LjnyyrAEYiuS4L9PpJFa28kQPSSPXJFB36PGoE1F7TtYdmx9UCjtUf6d",
  "key28": "4cGQQzapW1jkdiJp4WdTn74aoisU8YkECTsJ4NLzwn1Qz9NFeB6bNdK419JCTmpTTMqBurYarzfgaTS8Q38ojfen",
  "key29": "3eDLX2Xw7hQaCG7STcyDH3egeby2QxJzQ2qW4k8rna5cYy6DUZvVdkdrubyuZLUvSADt3JN9SsHCLyFfSGt8zTXh",
  "key30": "BKFZXLGh9Bb4bnqyUW1fTsEFHS5b1ZzCJJWQ39Q96sxPeJnFb4rxBQpUJd888muGiQSCyPBjjtyK569ZsNtFaYW",
  "key31": "4pmCWm1gzR7cJPFEKutMn7tTcTJKBD2KpAjV8MFRtBEMojSvUX2sDKwGcapNK8DPdNwR6s8NoxBpc6UhxXntnfsN",
  "key32": "hNe4VLKyMBAZ29uDq2aBFJhA7brftAkqndq2gwTE6ckZBUEoDH3Lx5g3KCzPNkPG2QnQ9d2pzPpy8BNY8b1VwbZ",
  "key33": "4spbb2Ltt7fqdLcrPfgvwiBd99qXwzBWUsiLB3KqvKMwbFZH73WdNNk8MA7BZ1daGuhX7prEgKr9mmCYV8CACpBo"
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
