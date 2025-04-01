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
    "2M9sKeRAafGhgNubLcenzQi2qhqfUovsUP8MnVDxr5XyZhfBAop87Mo1pBNXsSTeFdm3jxKKnJYp2W4q5Jqxf87K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTa68CGJFVXB8G7Rq7UURYbZQ7PzzxN8YUZ7RxLXw4CcnKQ4nzDdhDFP8CjNXWbztitdrcVEu9gubQZzw5rn1GS",
  "key1": "61z143SJ9TXSu1c4dogYGUssbccTYSgfmxxD6cCYWYzC1jfZzLGAeDTBBMjAAo577uaRuozHJn2DjirotSx4fuNs",
  "key2": "Je2CSk1wMxH79cnm21RU91JgT9KPnVEUJSzo2vkBYVA7frVjAiej7vwL2tdoC4FZ3fHxAPb6cMucNFRsNZ2J3hf",
  "key3": "63W4z7x8u1hm2XRjpG8WfyJPQF1jp7hbtq265cHQQAALyvMqp4MYn2FdvTuyjVaJwtFYAhsXaoEDMxycNCJeCQ2U",
  "key4": "2kKnRZHuWtrPUHR6xXhRFGMftjJnQoYfSMwUcKTYqzpaaN9PNaHFzNMoE6tQ3ciJ7kTQseWtb65DioEkWMtHSxKV",
  "key5": "5BrHca224bAow9Frnp2eQ1pTdTFM2CowaJUns6agbmGtdaiAe2GKb7SDXCdxf4nnt8dmzHPQK7YTBa9gAbbYUbeX",
  "key6": "2FmjvmJ23ThtUw6aijj8vJQ2R313LCfR3aMDT45vANZ3boQRt49AbedFH2qMiKsX9qHWJR2B6PWPDoXAB7be326P",
  "key7": "2heUbQ8XQzp3yiqnecYD2sh1kcn4DnBzufGaCd2ZeTTGkYizbuKRbHwLahQHaQC6NhYgwbLvRaMQ9Lh3Ktimp9au",
  "key8": "5TBiJ6XeVSuymv72cGTDTMU8Bs9kcrbRYUVgtKgAwhcwn864jYK2C4yjkkLvNEj9ZRCZphBhNL2VdRycgqLSPMfm",
  "key9": "41mcontMs1S3FS4pjD5scqxrGr3wdE7FoevvurX5F5ihJMZkQvBTfxofmqozBo1bKaF3NM4HHxskbfQyR2eyMwTi",
  "key10": "gik73Fe1rpiyK1sG6EshiT3KKGRcGTAP4P8E6fURBUtUwn5TdY26Hb64rEEkGT4dW3ccZ87Hm3oXnVAG6s5yu58",
  "key11": "49ANaKLzc9Skt5HPDFVaqemuAFC93TKUBezZYkUjRQJ4t4dEvcTnt64zYapLHqKoJnSvskDNJC7RG4xK25KKUKHh",
  "key12": "3k3erW55dwdWbXSud3a5FLVYx2GV2AFx2qiGrZPAMgUF7BuVyH2cGTECVMK4szFpndbz2drkPYrNimVLKe42q9gA",
  "key13": "4snFwayeKKRgE6tcwvCMPP49UHjFi48U3cHEKZb2gUk7pebs5YYHF6F3HiGRDArMVTgrvMU7MP7xaRXQoV13NE3V",
  "key14": "5uKPWiTAXsJGVWb2yfuZtQgJuVcWkNYnng1X9KyqtRCkHmD7b3x7egC2FxSnco1Cx2ZgpvK3bzDhgqdX5kpBXyYc",
  "key15": "2mvzFWr6Z7o8yzmSRwPuycxmpSSBrJmKicNpFtijXUa2cQHvJKoQ9iWPqLXQpNY2FCaj6YP4BqqCPQdBwAWYcPRG",
  "key16": "3hx2rC5xsiF4KZo4ox3jA4dtmTzWZMY3AByAtDhjtfnhixR36SMnu33VA9a29KnxMwk13NixQieuo3JYhxWG1hDB",
  "key17": "jpRX4nAVM1AvQtGiGNP5MztXQyQHXrKH8zsqULukiBVUv3z7ftYdAR6sjHJRxUGU2S5jRckTufWbLvCaR6UF1QL",
  "key18": "56dqwZsqkQMs4oQyt1p5zcD9NXbiuEbgpL3SYByxD46kpGVWXcmVA3emtoA4jX4PaEckGQCLvkazrfc5FCkTcjSL",
  "key19": "4jqHBCQTJPmHw2LTMe5vH32GEBBsFRZC6EF6WyKcS1mxD67V99yhrqHy1nFVW3nE31TANWtj4iiiWQdZNxxyoC3f",
  "key20": "24Z1tXXN2VwLaHXieescgiFdWhCVnxj72Us6R7kAkbu2t7NNXhzRzYvkmi4R3bGuYw92HfEj8yGG3bFkArCh1dVF",
  "key21": "2BfobvkqVLsWBtYJUCvpv4GVbJSdMpJvdJYiPzuQapxwmTAiryiAfwKHrAhh6TY5TBavv3P6bGvg4Nf28gkFmsm9",
  "key22": "4Y4PMMSrkDhrLh79BWfiZeAT9CjaGY6zHueXzPfNJ9Miknizt67k99Fd2FPehPyH8qBrfHsk3zdQbUGXkC7JYu55",
  "key23": "2joCbaibc5Ad5VTib2mKEwkHBbw83AZm2bztzAccLRLEo9aCuQQGQH6CP2te7MLK7homUcDRtU528EN7eFrvjJuZ",
  "key24": "2wqJH9qj6ne4ebW9acjsZbeTwd7ddLWCNGRYusFG4gYTLSbZ2VbcoSYnFdNCy3oyRcbZDZmwkoJAFhiJJD9f2aEX",
  "key25": "4mHnLtEL3ogjrG21V9kVSsYLrS6vSWiuZSQzi2METjMrtnUkJFBSeZLpABPDar7ZjfTpk7Dvk4wqxX2s9W7emo8u",
  "key26": "4hhTMnEoqUoM6QaqhE6r7NffKRbENHspidAtTWV1i3mtb2bCAtFqDtbWZZYMBSqnQzWwWzosZPZzEBc1SEnpwXra",
  "key27": "8keRuihv1iVLLVtPZdn6upcbKHYwRgRQ3HY2mDmmf2px3jiyfcJ7GJgjxDFMaCysSdSyvFcp93shxmfs2bNkwLo",
  "key28": "33sZ7pVHAbYG3UCTnn8VtwPYxQx6A4ecNudHCubhWnyj1Uhs2kbquc5MNZDGH5HoNRApfSzkwU6YEVQkwQutjuSQ"
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
