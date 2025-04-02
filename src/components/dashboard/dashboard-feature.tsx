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
    "4Teq4XHKd2cHUBjZiH5gk5kYutXJWcf3Xa1P2AAso39H7KeCwMyBkqXX3gEPyqfhy7nvQM8CjvzMHdiK4wSBLFAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uvJdYsWKyx8n7akxPCeJpiLAYELaR5S6dBuHdb8Sq6qDAu5XQY4iYB3ZCkyUACHBPEiWVBQAdso4BnEpTFoWkZj",
  "key1": "KXfGuqfrrL3Vgmgaz2Aas2g2NNaHhb8r4K2zj6CMSt9F8KEMceVeVg1RzwhC4FYMByJwMZmUpm11PXJbRRF4rCB",
  "key2": "2ezg891pf87p4nWFaeHVXsQichpUTPypT7brFrMtVinuxguJUjR4BZeBoJbXykuYRZe2xqmZcHeyL9bDNwJuhUFs",
  "key3": "5hfXUHj4bMmtSyVEC8sFP7SBm1caew3gaHziVQqpqB83Dy6pASc82kd6Q4tHs1VFBNx1drpNtvizfperUVhLptR6",
  "key4": "44sMf8t5mv7Y1huWpVsv8xxhLdoHnjEGHCj3XGv7uuwENiigqRAXVzGeFur7tff1own6ro7VcCt7uF6Nn1dQCwgi",
  "key5": "57daKoZPAXLN7nFB5htNLpuiPaWHznxt6x4iiwang4vyck3KqG45LdeuLJ5nmX8Ksmxjr2quqh3LtPqSnLSuUMac",
  "key6": "pg7hNn4mPAdDSg5CfAUBtjYYER29ViJNdooLu8Hz1jripxUzjErr3w5PLbV4ThMBFxyG3U92yoGB5ppEYtJPgjr",
  "key7": "4YjKcUWKbD4wT5yrFQng98K1XVxLPFuju395L6WwuVRCFTTodTHGdh3YmgeJqrbCYoXHPb5QBeJdzbisyVxYVG29",
  "key8": "4rbgWrbfHpNEXEQze7AXXF6RceSu5gdaCaV2AJ4fdecowXDUdZ1dkZEZLvqaRDGkcVhxKZ2vyihYJhM3HLev5CeQ",
  "key9": "YnfJjjsCaFxqH2wJpecjeJcUgd3VVkKzU1YEhbmFcjyqhNACPXtqpvz1YYandZX32t4sPZW6Nbbuo39c4L2j2SX",
  "key10": "4iJ95X6nngc9dvypptGwbZifWyeF6xEkUX9JwhVYs7AjBaoAYPhrfQK4bN1LwaUqLkssi7britJAta6ftxXLGeRy",
  "key11": "L4aJKyTPA4rZryWhiC4pLzfooR56kUMfUmyPwxtQ6k8AdNTKt4zVKSq2yL9dvCY5nyG711AgYTsYA5G456fpsN8",
  "key12": "4UCWgzBMGC8eVNmq9sSanJGk5nWcRVcY6nL4Vsca6CjEid62aPU1ewPaywe8BaP6sGcGLGZvBrxrwXS81XxuVUSN",
  "key13": "4Nn1wTZ1bJWyWjmypZgw1P7RKKkYESCVPYC5VnuPnUURb23dFpzhEesTpUNRN8irGrozUEuNcw8P2qvWAMpJ76C1",
  "key14": "64kdn5z2JvK3GytLnRwiv3JkEBZJYxmGbCz9GqQjjxfypkwyZw4Ck6NacGCGAbuC7TmpAspZoUv34ZtXM1WJ3szi",
  "key15": "4d1LiEfs5DeWRKmgNC6tkG8QzUKrLHmKBJVFUceMZPM9XB2TKLnjomYmKdkdXWoEeLeq6cQFV5x6B9ejzsQzwjVS",
  "key16": "2kAzPqBpbUqsXikUBFpPCwVUjL979rdRkg9MNihkt82FLBMnXEbqYFKtSR4bCexsvhYUNqj3ESLUZK2n6zd333Af",
  "key17": "3esQyBCd86aam5fw2TeSqjvrYV4Gmwbq96ob91dvwVzb87ftxFrBsSZg3EZPZykJg5q6Ttp3gu4PytNyEGHvpnSQ",
  "key18": "41XqRbBuExcKQSLSciqgPLRCwrsfHUiuXi7Bz4Zcws7UFiYySm7BBSJdCLYtNm413WXCihWqjD28VNTRpAXWkwiT",
  "key19": "2sfvhzsjUBhtcEkPqJ4DhJwXM6boToPxc67KnxbgZ67LtherYpkWiPFRCDfDu7zae1nLdCSADSPzwA8sngZjoeqP",
  "key20": "2VRH1m4hQneBqPj3PQ1DybgwihZthDZ9Gi963H39ZPT68GTVCiKeKHxHoLQZfdHEY1XGNjYYXom1E5uWezaFkhHj",
  "key21": "44P4SPxCtuBm4cruUB2tZLXscFLq8Rgx8ZNoYaH7NS7ndL5JecxAjnxszp47uNHHwcP7uReqc2RDrpQ7i2Bc6FgB",
  "key22": "5AnD6xwAP8c2dAAKDXg6zE5c99gpvU5L6FD6p2AUYDUM43AEr2stCvX484L3B2wyUCpJzeFTCWnuuyNZFfwCXcsJ",
  "key23": "WkEf7HQ1faugaW8KjsDna1ZK8zAuYDRoTzEWKPiEYiR3r5HrfQ5VSZHyNiKKSZMxMHefHMzp2Tbrzvj4uz3diQH",
  "key24": "657QUtDKhY9YMCRj6f1N1a3PZt6dcWL32i2Ej5R2zQBjWePxcLcTg6CcAb559qFmzSMUHL2QXmxb14iUVLVw9Fm5",
  "key25": "5JwUhf5z93uqeAifwdBqMNR2oRiPmoT5E8cu5azVXKhcRKTuLMbu226Ns7jJYDZoueNmpAnNQFK2VeE3pMSsMAFk",
  "key26": "3hpiV38L4xEXmnvTuRfhHKUMj5weFaPcfSpRPZnNtxGGNt2Y2d1pxr92x185UcqtGZ4RGCjmCQmyG4kUSo1hv73r",
  "key27": "5V42o52Zsvax2TEhzGfYrGF19F1TPYd8aXPvmY7tmECtzShLf9Z9Vp5FdQttSCCg9diCpY15qpAjKrdCD7YqM7t9"
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
