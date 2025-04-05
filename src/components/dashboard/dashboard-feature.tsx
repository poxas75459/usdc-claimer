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
    "4iD6nfn6P5vk8QhHM6oabEWH1f5ra7mqnhWvVnwMaYc8Ho1pF31tv95CBDjfSX9X2cMWeXPa5ybHcjc2sVfdrGWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f5SAmoHJ6f5wCiQ1jMX17H4oFGdyReAZfPg1aHvbp2kvg3nNUXpUc4nyHBByoGTGcvQigqK5Bg7oHanm2KiXWwW",
  "key1": "WzK2d2bcS1NhsEExf3JiHArHda4NbswCSTEv9SHTTJBKt5FL9feZgT2EzkfZjKaynBUr5sv28EfL9TN6k1hkYju",
  "key2": "Y6BPAasYrfh9gPGK52pyF7nKUgqyUNUsnq3Gxf6LuGr4gxsmLoxcqwMuNZXj4nCJKCkG5F4FSYQa4NEzQWeRJZN",
  "key3": "5NBLkbsYQVWXeAgVUQWiLG7wXvfvKap6ZwZPAFAXVAyhc1cuS8GndPAVDwWZ2EZAyGERTPvCheqgynMjUqoX2TVB",
  "key4": "48fxK1ttGR9Kv6N9VRx4uwPuJfmMX2aY8rCX34XGSsFRgdgvZMBRVULRnxeY2sHqxx7KZ5r4LYkKjPUpvgitFxoP",
  "key5": "ukfimn5BiFBZFXgLQVkZ6YB6V7vmJQ6z5vGuF8SyUJH5sbQDzsPyY61wKzArgJ3CsXZ4Mh1d48xSXMaCwHNcf9a",
  "key6": "4XfeBhFB6cxqCURyP1nsmoq6Pxsif3fwfPuWEcr18nvBANV6ApSqxSoXVyBJvLFNb2VhoWCz5HBBACRGNzZMkVDC",
  "key7": "33CWnWd9c8xnPPsQwQZZtAYGVuP5f4irQMML21BLxx1gE6r4E7aN79fCQL6pKn2JVwPPiVD9WgfeWTHw9R8juNmB",
  "key8": "3v1CxPx6JERujBCbP8CEAQePcnkf8KLJ9K3sXMXhEFq6LKDA7wLN5zes9Egs1cJo691Nr5ygVUTjfcY6pGRz8aSa",
  "key9": "4dXMqBL86LPorQLaxdiuQNAmMJppy2zVg6n6b2yCLTCaSeVk4NAv3iU4bVEB6N72gYkuFU4ukRotFnrCmHgoXNUR",
  "key10": "JFbRTm8kMaECtkxqJcK1vtgequVTbmGY1cpjAumKUdYJicZfat2iUeZx7cfD8gCfV14vzJnBm926pwox7qVVvxq",
  "key11": "2rwEEHAwYmue13jxLfo4UQRNYrJnbqtcCwnhJwJrjzXHpPsNjbAL8dPxjebgD64ikLMHXzvZgnqvvsUrnTQbJeLz",
  "key12": "h4hesJjBDTdDLzPKLUAJgnCyWQ17wr5jpGjQfbD34kqkfb5mPGjEEPdnKC3NYSvVAVLdKxKhTqF1dAQGmVkrFip",
  "key13": "5yPwUXEx1nHtciHAuV1zSP85U6LGRkVd5iJana97vDc6QeVa2dpQmU1QhJTPq2WvQGipisu4z43SmKQhVvAPG2Eu",
  "key14": "5QTkautTDm8KT3jwSiMgLjU9e3dQtYfGrkC1pCBuFedaAaa6HXp2UBs2WduHL32VPS1xRajAD8rx6bjj9vHfH2rY",
  "key15": "484QmLQyH2kxVR2jhiQ4hp9VCj3Kf2521SJKZYocxAUfXE2v8w68RVp4Gtpmc91cMUzBLoQDxSnR1jQdr2zusjPV",
  "key16": "4aPq6CpnLC9p1fn2QjWJPHD857n9QvDTYoYAzE2eVxe2NHegHJbYcuwqZkuyK1EeskojGC74md5f7PL1e2vjiuxf",
  "key17": "2H95FLaiz5ePNN24MHy79pixwTfwRzLTHzqoeoGPwNshvs2RHBQnwqtoNd6Z9xSSMzvEHfCUXaN9JgAck4D8zsJx",
  "key18": "3Vy5oYELz69AREkx21HTLvYQKvP51U1nEcfjskVc2oagd2S6cv55fLArKc9aeSPJBuno15fcMpm1p1b4XVqXAenq",
  "key19": "4yfCUN4NbGZeo9bWKAFq1NzPRjPLmEXeeH3MRGTz8B1r79kokYuZ8WWEEdrW1tpoLq4fqWekiXJLgDsENqnh2Pdm",
  "key20": "9kKXyNZC4Mm5msdiNK2n4Y3atqTBoFzzfwCKuGgKP9K8vmjc3bH7FcgUbeDeJHKF7LEFZPNgzCyXWhZT6o2AuCm",
  "key21": "3ZV8FBUtVehbCp1opVYTnFeLBugHrfBsJDWjtd3tYfENz4UUFFCFqjzAv9iqd9SDKVBWmvtUwQURE8bASg3EE2h7",
  "key22": "2RryR3V1huSvANL7K8i951cJRvrPGQ5inVBnu99YBAWwb3PbuwSUrsEi9JqWobtZdTf1W8Qw7pN6R83RNhU5kKt",
  "key23": "37XzCgVej6v4v23XBrTn2NGqPmRWhb5i4LD37f7xAUDWVZDPViDLaiVXWmTLmbD4zDu6VqSDgFt2xGns2H6nv8ae",
  "key24": "3FqshZN4bR6DHS9nKYj6n3sCrSr6DznFGuqynETf1jthgrZfBKX5y7r416rU8VWQcT48vMRehFxHaWGWVXeE2qM1",
  "key25": "3CZWXWJdj86Lf7w7ekFS9puTU95R4vafEU3kWrwaqZztovGuzqRVBmv9U5djjLmc6qeoeQrhDTELG8rE34Hrn8Yb",
  "key26": "MbBrawFVYkshcnj3E7JWkLndZ8CZMZ8Xb3P5hJR3tyrftwXD4zTY78KEMYR2TPPG55ze7qwe6PSunHPdmPik8Rk",
  "key27": "4RpXnRpuUHam6QuiUV4w4EhCkL7Ef5fLenSQnV1L4BuxCpvo1aiHLc33J9DUuLKK8FB6iwJ4pQiep9B9ALu56PCs",
  "key28": "2PgqzqBkysg8mMvmgXw7kYbaYLJKP2erHm5Wg6TjFf6jT1g22ndwrsbgjvVLmo3Qth3pZNLSoFmFk1c7571f4voW",
  "key29": "5yzo4NF7Ft5hNvZx2PNMUsAHQcMU6WT29ZNGqc4dCvFQGBpZAEN1boAZsW7YgEqGrytN5dickF1oNamSgpPDbikw",
  "key30": "2Lo2oo1BkpNojARmTTCUAbJZBm1g4iFrNgxR5SfbwczQaMGnPiqR4KBuFFLMdtcX9ZZ3Jk5yD6qgLXHcxHBfPx9f",
  "key31": "4T4bVHFx1fiH4bNKSNL31rGoEWPRiaBaf82MGPekNqYRoHpSaAYR4w6EjpVsF9ssf2eKnkkx3JwZSphiJK4UsEEa",
  "key32": "2cpw9rzsEBmPjAWJKPfnuK23dNUMGq3AnojTFLgrPTLqFnWyfc92a9fZDUuMVH9f3CV97mCDcUXqgJg3cYDQjDL3",
  "key33": "35oXcidtK9UCtaV9emMrPnKx1adFbp7Dwr9vrVedCQFd3NmMWX2AtTNHE5w7QnvdX7RXebUfKaXhgdZCGdVwRUQg",
  "key34": "5esxipCntEi9tnd8mrHisVoQkeYF3RDrf8matDh6d6TSGqhRP5chstgKE1GnU7yMcnSQDvjoeh3ozJVUChP8MbNH",
  "key35": "5gwXghQVoPb2UT8iKXN9oNyu7bfQKPYQVktnf1QvHkBTtsfwuzq4PDm9dPUWgmRt3UmVCiUWG4rCNivVdytxC3xV"
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
