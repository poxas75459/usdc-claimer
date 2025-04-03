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
    "5BtSHZHNZpUNnYuyNLfiy31NPkdWLGRgv5qDTJSNL5rrtCAh3xtvi8LNhJKuKASzr6yppsKW2ndcQan9Kb1QFjmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kg9Qc1PFQMm2uCLJcwL8R3QHjSWYC9UWe4mxS6p6Cu1VLytCaSf8vrHZLP1nErak9nwmgfU8EEPXkuxxWGNinCm",
  "key1": "39xFUoGBq1mmcocwUpTGEovoy8v4N2sSbMxKz1gA3gSCjHC5ztdLYr7fPWx4pBrRf4J1M1dAhMMFYysiLnXbmLwN",
  "key2": "29qtJ1AqZPtHrGsPNRXHJdYCvwWv5ceNL9jmZrhuDHTapJkoPUsAnXRj8GVdhnD7msxDjYByetBZNEPNocUvPjby",
  "key3": "29xux6sMGqQFDUSqaFeVuJix1Rw1RnWtHrEbYX3MWEarN37vySVSsbwmr1foYPSG5f9J2q3T6GcFNNyeXcmAVyP4",
  "key4": "fbro4ZoELXBPtb9wmYgVttZMkrE477m4TzJzFmhArwWjYS45em4vg8BuizVjyUmDrCP6spW27mhqXdQzb47jT71",
  "key5": "3QHuFg745mzMCkQDXfytKZyrVFGDPCkMmgBH6R2ysViFVHLMAHBLNZox7x1Rc4apCkgAFCvcdY8C2jxHKbtPo6iC",
  "key6": "5ThMNJtk9f3a9mNM6n56ajuWebe9yaLk1Ma2PmXZyLLtedrEFHxKNadRr3mXT1aVQQVo9ZG5BiRokMeRH5aM5DGp",
  "key7": "2DmCYLSwB8ffea8112zExBRmUbaC5ky2keAVUtcsztLfTJPG2MXmGqVqAxhYdyCKtv5KWVXjYEFLME7mGVLbRNu3",
  "key8": "3PtsQLLQuEnJvBnNuZfCpvyLKxpEUWoMeHWTbaSWZNe1jatYnNsvS5j6yrdTdb7zC2JtSF8uQnXmQ14YuB1GKrBB",
  "key9": "2jCTpgt5iHDu8DH33rs4CUpLj4wwHVgR8QwDVNXEvJ7xq22FUoVGm7o6KraXoxG2VcLeE9HDHiNnSpyjs7vHczhY",
  "key10": "3SMWLqZhrn1FRt5npHeAauhN5c1VGAvTex2DtCPJvywRb5DCdjFF9oH8ESP2GnqgJBq88KN8vG3xQk6XrtLcCkte",
  "key11": "diFx45sAgNrvbcs2FohjSioTC3JMfe4scfwJatV284MQQVZdeXLsotT1ruEdWLWSW18vvGDX3SeRJdFNMa9BemJ",
  "key12": "6PoiAh4XW8sC2eD62tzMG6JbN7fPKDe1nc8dfrvw3rPzSXiq2MiwN84C2Atn6ztKmxEA9H8BdSdfu8wNv78WfeS",
  "key13": "N7UhUstsFMhKsE5gf5vJ9yd9eMyf43xLcmeZypzU92FwEW4vzTg9AyYxcNcxStauYuGsBxkvQ51uBFzhCsTk8By",
  "key14": "3dEaaWPmqdcbLwgQgZHBnTa32SE1DcG7v381zwLJNnVbJDpqxQDU9bFpnFqDuxr5bSTX9xWsH9ZtZm5uWquBuUHa",
  "key15": "5qrv22SA5DRJPRjZsynV2sWYy1xj4ncPyJ7yYSv1RctziP92TbXyvXxRccRPDfqFQQ6LQ89bbSDT8whWpzRom4AM",
  "key16": "3ZZDhf99v6adXvmqxGzz5EWLBjXNE4H3128SWTRLtZ7Xhsk29Aah2K8S2JP77Fh2K8DiD6V8s88sZtHGtgRRmkYi",
  "key17": "22wfKF6PdE6hqPjcW7YpSMEq1Q4xRwv4uGHWZEyx6Wazh3VRi5kDLk4fKGC9ZwKuHhgNHYrQdFzZzX6ir2o6KKDy",
  "key18": "632VtSm46izKXWverNsYNNF9kLTTcfmxsYYybZM9sFKbh5vHYHGEiuht9Nt7WTdP5UTDtYiS1yCHVK8i6JU6JVK4",
  "key19": "369UXKpAQnLtF6S35sQHn3ZM8EnWK4sdGgZxwmUumocBdPLLtduo9yFYn5KuLCrDvSJA3dhSYKXR5aK73BwYaPhc",
  "key20": "2gNJDxqHLV8wdpRDxtWL5mesQPTRLWx5apz4pVAZmggJhBaf3aqY1F5VZWos42UpK3vqxzTQnsp5uR1PUPkK3Jvf",
  "key21": "5faFHTurH4r8jRV1s8ijgrk7RskZi58Bp4NkugU3CMVrVix8Hwq4xarwJJP4o14zkL1WL8AK6NqoeD4Cn55zv5qD",
  "key22": "56j8Fh7BnyM7ErLRNSmjWeWXetsZvUgg3ihXgvGvUeogsK6AA67DxMZyvAHHuzep5iCnTAznfEm6ae3qHC3TUTfV",
  "key23": "4ZV849pPiQrymXuVyJwNURUcEjfNx9XZQr5jUXL7WwsesPS1H2QJapE1HpTbJ21CGFJ81H6qDHJftGEcWVPojijN",
  "key24": "gpzH2JcWhJQfNU249bXwrcooEBituK3xEfi3hXCB5qRCEyPkhCR3k4ebrecT8CbzWy4E5vofLq6bJB739S2YD8C"
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
