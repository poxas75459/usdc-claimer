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
    "3ViNbeNTT3v8HX3qBktmQyQNYPBiDtNBjvGH9Jp17q1nviiuCM1MEbvLwbNj4jT24XD4zaGQBYmtFZenZ8dPynrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wc5EdQ3MLU5sV7tVbS2sLFntcsoe9cq5wLWhJotwxUkY2T5Bk1jfruRATMND2fqvQiz9SVb4N4s7PRBN1DDPW5D",
  "key1": "fjpAT5MbTbuiDTmEFXKjTfR5z8EauBAaGg74YhEyqznduVc1NgsTH5BBQeUeX22QQUJKthiEVXVKM8A8idHXhfs",
  "key2": "65nCFaEoLbW91h85UAxvrLka67WPhTmGzieP88osBJ764qYrHB5aqE72bQ3gsW4VrfSdYKCiuSb6LjrcbU4Q2azg",
  "key3": "42qYhyEnNRXcLZ4shr1oudhRLabiM5tRvRxxgWPPHZRDS8uT7TLjnhiukUSbnqKm8rKFbnqb4t1wv1DkGmvgfbk9",
  "key4": "4wwz9NouFYhNT4WKh1bHsKYD89JRv5EisHuFUtgbyPo4eivaLSuo43ZNeZmn66mFsbHTUdWhGDxwEceV7nqoCmoh",
  "key5": "2g6pX9J3FXjchEgzpSSoYuQTaxhAANR7jMPtnc1Xf4MxmUgYrGPnrhLHutV7LHxwNLw31vmdrHJJkKrg4RkXvsaY",
  "key6": "4ipksFbezbFJKjHBkPcJzWkBHCAiQmMwjyVzPPquUhaKYj3AK3EsKrNVVvqtuZrunWWRy91YRoJgCMW4Qw287aMc",
  "key7": "29TXPhjLPhV3SMVMWFAnvZhHnD5wghbUcLd9RYkNYqsxm3GQ9u4Xg1PabbRfwZu8wAyEEVkFaVB5dmZH8H5g5VZQ",
  "key8": "2feb6r4zULRdkatZZZ2e5xeVzcK4rYuiZwPhKGrbuZ2xnCdrYbtdFTKGnirWW3GihnY43AvQpMr2KqDhCNfgWZPR",
  "key9": "53yqveAFjaT5CKDfRdsLkRFzYeWy1bCAG4nv53FuJ1fRoHUSr4VWogzcrTVR6StVFWbDiGNdDt6yhTUWxKizRpcy",
  "key10": "TrQ2JJkMNtquNteEyKamvfjSP8ujgkWwcuMJzqwBpib9MAchQKTvfGWCoxx2oHpGooSzX6N8WYaymKCYSgLmnpo",
  "key11": "4bLsAmu3oV9wFYmB66TNGZwViDLAyspVmiyP5VBWHBFGt4ci3SJ2shCzjJFSaYyudo22eryrsNe1q2Ns7qx3cKEc",
  "key12": "CiPphFKyc4GwVUHzoZk8xfZmB12UPzTwtQd9RYPY9dvUYFqoLzgB5Cm2NV64TNPKBNNFCV5L6s9LzDpknXQJ2BB",
  "key13": "4GVPx5s4psxxRnu5QKm4AurxjsaR5fj2dYXhP2zCXFPwDANa3r2Zdix4pjZ9vUkePv7xpza2ijVPxYtLv7jBLzqi",
  "key14": "4igd9oUJNZjtv5vk8hG5TmYiuStoPRp5EG9jYv66RPEQqGyNVaqXZBNHraCUzn5dfndKG8wDagknnEgCbqUDS5rZ",
  "key15": "5EapXeGaSTCitVsHJuFVbhsZSV8C6mSCgo2jpnzYu6s3YxvqiDsXt8eiTvzumfVDw7NK4PwaBqkEVtY5Xke7A7GP",
  "key16": "xAgSYPno6ew1ibZmmhuhcqyxftCZ1WXzuwojaqd63CKYaamAsy7y1ui5P7rmoraDyk1JoDP7zuRwBiqUoJpJ4VT",
  "key17": "4L3ppKuUCQffV5LxWabKKoTyhFE1kDe3EXjkjg4YWq6kwo27s4cL3vSGZrjhcX5jVrB34ZHB6CyJ2nwEbe8bdpgJ",
  "key18": "67KcsBHbT1A6nauNRpGGshgi1jmUCq72KV6HwF95vP339X8aAFFPbacNH99pKTZnMBjZ6PhydYwRj4dE5tU1pz4k",
  "key19": "5kPqsQvB7hjv1bUiDv2ArGrWKtKkrGGE4dbponPUTNNhDXhLphs2iUnGLnkjz9fBHdyHqTArnCfZNaJ2JK7DcqE8",
  "key20": "2cTMY9TERp716TceZmhjp99HDDPCVEANXUxuwyVvDfFdNinCpznGmxc35mSxCsn8YpsN33o4jLyyPMHNzxt7G1DS",
  "key21": "4ENfFyzviAFG5R4dn5kFvbJF31HpuHhXy2L9DbpMsw6ctWWfSKp4ka8xb9U4BqWd3E5ZCQ5vUaeX7kXwvXBHV3hr",
  "key22": "4CT6dGFzgvT3kcnkUqQCuBL9aqSdtx8U3KngXvofQYPNByXHepAdcWRjcva2B6SjsmMXUJCENzGGeGviVRNQrRfL",
  "key23": "2kA9kgrDpp35YkLJyFEAd5dBdT28nj3xtKwBJjnCxt3uU8p45uS3EM2FSfUVrkSL3AdDkDuiRdXBg9ztsamA6cFR",
  "key24": "xGGujTYBmrkHfR5gVQvsqT5ehvUyNxrvgZmBwkk4sMv5k5QBPSDLdTpPqaJyT26cSxZghZmD6Z1QQ7f7Nb4wNiM"
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
