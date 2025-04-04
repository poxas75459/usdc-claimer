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
    "3PiCDCDrmHKv21CaCQZCKoQazKE4DZ9Fx1irBjrKaV8r7nt7qKozWFnCERynCLg7PMoqmSPWzRcTqCUUMMGzQHoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iPPHw2i4stXsddPPYrycLwY9X1BNZxpeKkgoKzouzsbh7RL6BLiexrAMVSm7uTEp2wWUagJ8sMmfiJeLfYg3Mp5",
  "key1": "5LUn4fvZiGaKGmz5vFgjU5NTtsp54Mp26CrDxHWUXtPjFtVCh25GsjFGFAmUTDPyWJLSG3jggxUj3U7BwTNU3686",
  "key2": "4J4HQukEo3ViUbikn7rjz2PCfp4cHHU6KXEiKB2vMqVDwdpEB3MM8T6NJPxtPVCsB8qFefhEtuZCa8J9ZkxF2zuS",
  "key3": "4d7kVyZQ2S84tAXK11mtp1aBRBVAmEV6nuNR6T3ukUvFLyJ9q8waJ8zWoJiDxVq2APhjRmxkgY9fmBSzz3RsT9p1",
  "key4": "4boXXUasKeRydjBrzGvWVYLCj5B8nDhYEXcvtsc3uq5Pe2Ya1FheBxo1xvp3J5kDf9kRGfDPTiMDVQqhqHoNj8MB",
  "key5": "2t4g8jKGk2LFbrz8FcwbVgVEHFxq6sXTJPxv4nuCA9wputE6GqUHUqJ52Nx1ntbY1fn2GRVdwjvbq7kH5ZWKn1nm",
  "key6": "2GJNQBk18zS5i3G9mq1quvNxJvAgPxiCfr8nQQktAwpjCFPE9hJQgSxS4Hg9cpBCx9FYFyYSDWtXSECPoUjQL4Se",
  "key7": "4XLKuRm62mLRn7Jxo7nN8QRv8PyYjDFSj6xak9tLuFXGJ8jwT4aoUxc3ThuEv3QXvD5R8WmA1RshTqaB4hyZgR9h",
  "key8": "66ixQDJiZk9aEGBV92EraR21nHuqmEvhMhyKbNnuzbHMyqxrkotCLQ4zVYXCf6Dpc3Akss7Xwbha5jQZqGbHgETH",
  "key9": "21VgVxBhMi5WoSiJt99FjC19J5FUJzHCttCpcJGZ2UF5CcUyQSbQLXckGrT3coHiBpMGFWDypxtfhYpPDftYsHWA",
  "key10": "4DCy97KpTJ2rDYXeVNqpGU6Jf6qjvAjmurWvHJTzGRcGtVFdR7wBCtNsuFF2MRmxN4zSWsTo9UV1pQTVjkdXgKo",
  "key11": "57M3cF1SPXUGt7JQ2yYggyNqw9r44w6MDnRJRjgVifKK1uYoxCiEpiRjftKcXZeH8voNqRQr8sRfJTo7PiJRvwfV",
  "key12": "3gNnNFGwZzaYg9aK4hn4WstWchFsJusrCNQpog91ndHguDGJnvd15fHcD7LG4Md4X9KyzQPi8bwvAbRvU8dtR49R",
  "key13": "44xwnwxSgEnjAK1MMB5eG6TVPEtjLSrnckRTrqDV4XiJHr8P3yxUEHquKsWbaVwvUdX8KrbBsFnm6SEkKUqRwYzJ",
  "key14": "41hGwyU5iw7zLgJYWej5eJqtvUS97sJHkx714SKNE1bjZ3CMwBausDrnjnUL5Y6iwrAToMZQpS8Db8cgBeLK1hep",
  "key15": "4VHU9PR5ECwJ3FSw5T8zr1uumLGDSXu1avqoKSkEzUtEJMwnyj249Xz7q75eSt73gVbPPUvVJTaq2tPpxNZj7ZAR",
  "key16": "5hAgzvecHphYcFrdVnvSqPEyAeemKQebff7DYfhfXdqx4FP1C1kbY72xmUZzVGc47SRzcjkRnpRvXk3UGkZmDbtu",
  "key17": "hjDLktTUkN1WGTJHDJ6ZEJzL4r1QGVSosnk3SphT2XepeVMewBXsXZvrwdxQ2JRRNWQKYdM1kwvjWj7YfnUMrnS",
  "key18": "5N98wfjy2811xZQP9hSJdSan8Yy38dT6CfMeXDnEBjVvi4rjW1Fp89u7AaQaGyzzxVahXxdCTaAmB6eJUYRS4zmg",
  "key19": "2fUAFouAHhcF21PuvJShD6GnxgLmRNXHecSqABFsFfz432QAHiDmo64atWCULwgxmcNgrcJ7JT1jfXnBzccMVYSm",
  "key20": "57ZW7v27Q2RnLsTfCU7wEwpw9E97B9hxFvrfvdTo5JRarMX5RxLjWpdzfWkKit4cELNnLG6JX5SJQ14aGcQNL59e",
  "key21": "3GNcbfSGvDRRXLJ1B57EyoNgWyMG3tiUXmiNYFSLyzzYj5fN5vSQv7hWpDuiHxG3AtibgKbQbyjZRgYDRZdiYWM8",
  "key22": "kHtSDhmr7C2pbxZ7pNq6H4b6pCY7hQttEvocCDEctX7qWB4SAJwz3T9ME3htj6TdqyhMHgSyAX6Q33eBNRQBxFC",
  "key23": "25cyHfzv3gGAu2RW1Q6J3gQnG5iNoBGbte8yKuNji8TYF7Jnp7kcBzrXJzxknraNh1SxUjQ4sscnraLLKUGe6twa",
  "key24": "3jRx1cSFkfhYEfWgQNcC31GZC6YsfNXQbvRSUeJMm2XRirwbJMtgdhX71GqpWx5e9DcMxVh2VenUuqpb9U3yagWD",
  "key25": "VZNa3uueuoWGWKu9zqGbRNKYGLkRRcqm5gLe8Gm75th8xoaFRCkn3pJg5RySkkp3dHxBz6TxTaF5quugmxHtYxA",
  "key26": "5f72cqpGU5cETHJYGaNpDi6SSK3y2PMGfVno7U43ZBtcKUieBYSNhLAczATAGfvTd6VfdNEp2wMzQtuYBppRdghy",
  "key27": "3rW3ddDzbW3PdsaFNdoT4s3hJoKpGTEomCa3DjWgP7E8AkUqmbAi4MzAxrKaJThBPEHtNDuiNfbNeEEMDGJYdsEK",
  "key28": "4bTB3n8zQU7yBNtV5rrVAB1AXffmCmT121yHSW16NtuC1bpPoodrHGSRLhzUKgQBVuu2SXzsECm7yA2ANUaRLVPT",
  "key29": "QiAvpcdogCC5YwFDGTJxp48ewE9F7n9mbLuiJDDCfXnPswwKNJX4f6xv7HwKqDcs3Syq55K8knv23J18gxhb3eo",
  "key30": "3WGmuN3tdnauSHEZ2KSg13eoeBcdjmpBLA9K7BSrXpCamPmFiAgxfsvPHifb1qZfAKYaFgqXLL5nfY1cMv99euvo",
  "key31": "64K9Ck21xNMbST1QrYax1abxRWd2NDEvTDi7LwyNpbrVS6Yx3b7TYweoN87SDTGAAmMuXrB9nJhgmXBjWkHGoxfV",
  "key32": "2C9LgCKmKGibivfo2SGzU8ypc4mk2dSV9C6F6rcy5nJq9hJdFFz3rsJgi7kmwXovKRkF95M6bAWHvwgUoSS5AxB",
  "key33": "z61pJ2MMy9dejCBm4z2eSzoPY4EdAq7Fi61pRiB35FiVADyNWt5js1CdSgQRckjaPjrmSMCcMPXU9Vh2j8pfFd2"
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
