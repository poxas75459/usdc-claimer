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
    "3gRThW8nqTijydCMPb2VycvuuZz18bcHor3HwDTf9SRWVLAzM38sp6vaAyztm8QbgNwUz6tgNJVMGWpP5q24WCN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPrmZejFKBmuCCTihYn4B6iN8fGbNFkrdE2EHuFkZwvc2DsW2ahptHqnspB1WhskpnqQV4oWbHERhCDsc2rUEPu",
  "key1": "4r7W6CLpojBarQ2NGbteDJAx5oCnt13PAB4qDcyusA3ZxzQsAiqNL6RzkP9UjBLbfmR3siCC2eExkLf1Hhq74gP3",
  "key2": "PbiRfbejt5HNt2hfRZtNW2YSDaVkutze4LCT4CmeBMZTphYykwBXSVQ7EQdFTcs1gH6q15eNbHKZDvvomnveyzE",
  "key3": "4so5T5parC5GLzYyxpdZDKKdkwNmgyTHjdyrF1QKNHMxHF5uHrciJbQXoyNUJjkoL2pSWiauksvaZhQjZYBMKPU8",
  "key4": "5egujwn8ZBgYfwRMjBvRwRayGtFRGAUzeHBQFcnGaR9Qj3oo5j2wxaPfvHjmzE1VXqBVYc3XGQNg3GpkA5z6sKX4",
  "key5": "3zconTCnmG57chZdSgUs2QddiCgFx6Uo2snaw2enfHdXugc7aHMBgXtRGwR1QdmhDBPAZ3sLuuKUZ6Vk47Z4Ci1B",
  "key6": "cGMUfkcoaLqa9uwArv17dctesNXUyryjioZhqot4a15ivBBdeSitywkdTPysjocgBgqSLbcDPCDFLeBtjtdzn7r",
  "key7": "D6HK8dPWRYp9ncp787AQ3uzrYZBVPp3KQtJS282Wgr1jdWiWKovntW31xUk2i71wyVGmSa3A8ZmJb4AQgerBvqy",
  "key8": "2Ztngb2EHK3p95j3BZrip6Xu1tSLKrdrXVyUEdLJ6Cnxmxpm3fSPVrxgzLmtYbPB7RQ7TevX9dbqs1VwkDLLrqSp",
  "key9": "59dsMNYW5udrSzrEJkPAQUTKbHhrrcwMdGm9WT6nkF8ewgnGoRye2catJmRjYh3MsmSd78wb5BjJuzLJLyQmnrAk",
  "key10": "2HVt9hWtTfcQm392beLQbEU2ZJGa9wczvF93sKsQrEb3BXwZyWCiesuR98WJH3oVaLt57ktRryksX3pdEE3JA2A",
  "key11": "3XmEb2RdmNZACGkvmAQV78V7FKhS3P8TDjUH2vZLYMLvBbwNV3NqdNLRUgwpgyZ37vqzqdtqgHDxR3RPnsiVKU1d",
  "key12": "5FZ21FPQkeDaexpHEtJVT17zR6NDsXVt9zWGmxTQkwHpo6DgWfe6Rjdgf1qBeFiCJ6nzPVhGkriCKu5ntxY2KoiX",
  "key13": "4VBXLN7FMfsCVJZLivcuYEV9HuNw8MpunK7BtqhYXz6vwVY1aG9f4yNzHgPTEGLnpStcrU21EtMA6MdQiVLjyaPk",
  "key14": "4YPyq6NYeGGegTJY1Sb2rdcAnmUNfMYV8WjynfPimThhCWXyBQ4azgBBK5grnsz3wTcd2eoS7HVBgs3YKEAoQjuP",
  "key15": "4qARR54aX4EMoNu3DVrVqYhiTX8nQQD1qdjQ379b5L4EbYsZVcuvC91W79dfrKkD74dsiQQWUR3DZztxu7MTsyLs",
  "key16": "3v9r8s2XRkr2LiKBheiD14EkKRMgmvyhGhAvgsZUGohw2YZwXvqaLQ9bVx4tBvdyJQPBQWAo7wHNbhbCWyPMGHz2",
  "key17": "3CtR4sxJJKzf9J1peWksK2V6F7zjq43NnACi1NFiv1gFZN4FniYek9sey1yby3hYtXdB83RqdJ6XF7kdkuxv6XiU",
  "key18": "23SNp64Np2Wj6mLSdU1d3yuSk1fQGbAvyo1A3g7EnRBfKMqAY5Su1EVZWZFyYtqFFsXfgtUrCnubSDRqohY7Euz4",
  "key19": "5yEu8gbCoBtUBAraj8vz2v9fNv2fXAptyA3XXRYABNeuAX3DJLEz5Vjt7duq4wCb44NHT4WEDQnHysJ94iDBkT2F",
  "key20": "xnLb85bWBw9NAtxtp5ZGJwqMVD8k1Z5zr83YF7co6F7Lx4pDtJdQUSPmVZjT1rjb8MAUonLRQAJsU1AvKBRXYdh",
  "key21": "64vuKwVobjq9nCj3j2pmNf3osotwageun2ZWaykq5UM1zME6tSsY1CLb83e3PCjR8uWHHi9tgcXekUnB96C2tCqR",
  "key22": "4JmP7ALr5UWYafMRChiHzxoTSHx25TVd32KDxfaFRCPoZmDPz9t36PFeKGa5RA6hUaC4rkM7T4ow1RTWM3Cfsai8",
  "key23": "4NZCYqobsRn3enJqMxBDNYBtCiKjaZL33BauJX7ehhW49rXGMCDyyZRMs9WU21YPyMYFPA4fVndEZTyBTMXwcr3t",
  "key24": "5jA2Hp6mkpJ1G57QaG9sW5qSzwkpJDXLTTk6WkjHBby4HhhDRkKns91Xgdcx8VxHsZJNxGodkkAqKV7GK1c1RwbP",
  "key25": "3KCeNKU5kd1afw8ZdNGc6KchnZUVTAF3cfLfJDVXNtUGiU87bLBvkJs9C3e2ayeTFQbXYAcr58uLvv3XnpYEiDuh",
  "key26": "2c1tUNL6U5b99rxcpkB2ZAxevkTKMWGFysgPMiyWyj6eQPFAQaneM7MpXeUHAcRZTeShBeGTLPmQCjjMTuqBttCT",
  "key27": "4JdeSiLXKAjk1nEx8zuNchphkk1fvm7YzSTyYfzteTL6EqNbLfBMn6341xEx2MV4NZWG8eG8TyuTGNcCdjuk7uS5",
  "key28": "3PTcuCnw8mq69zr796Pju2cYgHEZjzsTJNYPpRUgHEC2jJkQ51nUwoGeiPnrX8DhSiksGFHri19hSnD7J3AEygei",
  "key29": "3kDVACGva1gEfeVcvc13RhCTMeEWD4pMAsbTqCSwADbwA8BMhpb2dEp5pzMTQB5CbKBLnrELCw6u7MY1zUGrWvpK",
  "key30": "43Jy8nogjghqv7CCdF5eSP7PxGzQ8KtwaovYUHCGB8F42Vx3214xtYqQjtdzfAMvLehRennyNDomd8eDs7DGSU2S"
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
