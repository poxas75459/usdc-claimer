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
    "tAf7Zdyx5uRtj8iZeaUgzFav3uoBSCMnaLiqKx6UGzpya35tWCLAFVoxNRfPmu1nuHDLW3eyZ6pcQfNY732qgyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQ2YhdL28wBHjSSQVqAq9bEE32SgUAEg6z4sW8Yp5D4Vz149rVDVXmKHY5iNDghprpveC9idh3PnmvnU4q6whAn",
  "key1": "44Lg6HW8esEd741H9CAgg6QSJicgtevaRhqQXY5VqR35rLWnkzycuYR2hBzT1rM54AKiubqv1k9mb81rtezWDnCh",
  "key2": "49j2wqigkPQbEoR7RUqVft1ev3NpnU8UpHs51xNWVjj2b6gAzB57DWqx8McLnfXwiVU3SEemnJEQCf6RVqWuCs2S",
  "key3": "4Bzm5ZEa5AcYbuAYMwvC7UYtZjy7pSgzg8Veba2C1pDFBWKMRsT2TwdCmHgmsAexzCTCe2wjKEnUa7HKRxgEEXqG",
  "key4": "5rGo3esKx9kY2e6uBZAN4wFsNQZCmyfTFDXeLRmsV4pTCSLUSx3qbfS2dmvLKsz1tZDWCBCV7Jvdi4j4UFVypKSp",
  "key5": "2BQ8Rt4LPPVBJm9ajqh65tez5thHS6DpeqtKbdmYX6A114D6cLiM9zNKeTLCUf4iJBeeQyGrnmUrtxNLTTaHb2sN",
  "key6": "4CL2ZcKyzTYW2BKJ1ukw5foargo7ziMKktQEfyf7gW7Lg2R8FjAgwGNDH5ktJzaMfvy9GvLCFWdqJkbLfVHGc7qT",
  "key7": "3NYYX77RWheDVfSgUptnYLrY1ycJP35USomwFip7VmM1auxRTrzkDAFAz52WuyhzcqdNSwShUZypX95QP3rr69c7",
  "key8": "48aogXmdsKGTyuGyX6hu9bfQNASaf5P1xWp8kyyVYkkLXG6Z1qsBzwdkQEPDMZTANX1yESUSZgB7Lv2awJKqc4k2",
  "key9": "3KLiLJSaiNfEeG5en259LArJFoPfjEGv3jdwwsJojPUD8fxBsV3UBMryNgBigW2ZWxMEDa5SzG4GmoYeBeAaQ8mJ",
  "key10": "3eqdZgw1LBsrJVVS6UbEFhAdk5fZTkHgN4hywSji1R1yq6D1HJoaEeobaLunkmojAvHiApJ2ZKt9LoJvoUVZ7B3j",
  "key11": "32mpBnGimaFHy4DCRnK7xwRhe9GjrkhArjR8HQmyCyx3s5p2uGXPXZpCCJeKSrNXXWESYWXCNiXELcBPcS3QaSW3",
  "key12": "5Pt67YjxjyMvrZRHkhLVpX3sDpexhXc15XFx35hn9jEaVCrm5psb3qVqGNh6yC85KGoBiApjkgtQ6TDZ2UgrBfep",
  "key13": "rrfQuVr5edd1fGcpMR2qFJgWk28HmepeF98KocKCtgtpADrcG9ymg1rhtfVa6GvCaaQK1iVuLun7AGPwiC6eL59",
  "key14": "55GhBC97ZvXwamZbVzmZ41sciEaQtCfdd9txA8s31rUzFFbdEq7Q9zNn7XuPET868hgerBrAFBmZgBhppjddZWck",
  "key15": "43oxi3ir9PTfwxnpNLDvBm7ZhXHgrtHUQESxBGMS2cXxpp3DZ2xq1XgH6f61UmHFrE4vcT2RYGjTXwbnwDKFsrEE",
  "key16": "3qzq2AcfnRyUndGunGe9nyErdn5SVv8M9nLAytzWBwEDU6LW49oEbki8x9iMxR55mFkoE2jjb5XoHEwYrxPoQ2qr",
  "key17": "4x8CHDGQs3nxdhzAtCgwY29MJDSqrMNTpnHQf8QQtfEsGbPW6XgdP27DfcHrNAzah92DWypMjLCBHFSindtUCJm6",
  "key18": "y5vFj9VCqnas9V4hXhTdCHYBzjju8QMvdbcNermv853tVAdehvrf1Z4CVcx8GkeKeq3QwSpEsqmjeoX9HDc7zcx",
  "key19": "6XNQ6P6dek38nZg65mBZYiToJ9fY2HAEbsM86jNvBid5BmusAPqfpFJwUnvFehykDute2yCG3zrxEzVqKKYnkGm",
  "key20": "3R5ofTtQRgBoaWBAdnYPHLR2rfgCEcbeHVZtfnGM3G9qJEBeGbMNmB59yZv6u2m6tHWKE4tvAZnyHjsKNzzQEVM1",
  "key21": "25HN8C6sfwWUJgfNz6MjkMVtEHxrkZAU3oVUVoAJ3JWssdmWJi613dNjsMCMWDtViRsLKVZJaWgVbPfmGsrvbHhD",
  "key22": "7uMwDkarJxu7zSRDkSVbMBSAn4UYGNkA4hYiDRRVQH91f38u9yY9961eRT4kKhSAHak6qnf1GPmirhoRTCbU6tm",
  "key23": "4eWM1LKzqQLMDcAj7EvWmXMmuqRYA11sPnZ7UqBbBQAW1ry5iFYD7sYVXXqXaQe5QiYBJoo749Yh3sZm8dGJyDdK",
  "key24": "gMykwkhCxRbMi5epkoQ3D66DZcRUbnPGWWSTZ8SadbegKUZCfysjHBYbLHjq7uGTB9HsCGaoedfGwAkvDLVoQnE",
  "key25": "5TQdNX7oTfV2CeBPzy8BX1R328wW991n6yfSyeXv5Y4tDcUa6fB21SedQFP9gsYdiayKSQhTGrsdHPQHmr1PjxKN",
  "key26": "5dnKXLukVusM9U9gV9ETSAv1EKVS7MMwfeTp2SqLDL9cUpN4SvW1zFjb47tWdXYWQLtiZXwcsaG485TR1uhTZQmp",
  "key27": "4v8NsbTkL4ANmg4MUuFn31t65JkM8CvJUXJqpNiUnwgWUjwF48vZ7rJZAp5D4QduLvFU2RL9BCLU26fEKeamHw3P",
  "key28": "2AMvDiqPHQTYy5oTnCQrqXZoQEqPQqfVVNSMsPA3hWP5LrxP5JRYZBwbrjRXyTbezKntMyPcbunM23VjiqEvUzUb",
  "key29": "5mU7DfsFjjDfskqbBmAdHP2GMa2dS4Vj8PWdrPzX8xSBQE6Ekb2NCewxMkZRpC4AfjbzpuiBmaJqQrvZeFU9JN6Y",
  "key30": "4JZjqt8ZpLCfafF9LAZWf95eRkKouS8iY2tCsp3vKVBYRAxPf5utCcikHM8QDvTFUef63y1oe1AaYucdN9RyZx8R"
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
