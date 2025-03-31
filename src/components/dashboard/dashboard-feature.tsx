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
    "2BDvbvrW91TcD2Pkfbt7ix9wZ4gKyWS4bXu9UvGbgbyecUiwK6HVoCBpeuSJn4NgjRKYAnYxo2uPrDEp2K92Fchc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tm5tqV1c73pp32BNSWeak12F72tN75tUnAcipj2ouREHVGBrse4zPcZZgpwaK6hEuwtN5Hpcb5sK1NDzbxJG1Kf",
  "key1": "313qBLXGea1cqDGpo92nk3UxBDVEkwqURU4Ff5bYjivTo9grqap2v9uqXwNyK26AdGX2iUv4HA4KVZUP91vMwq1d",
  "key2": "346ETnK3vPRtygkPp9nZ5yBDeKn7TbGLszNRYWeD9bTzEoyJLduKJV197BwN1scp1ReK4FQNy95NMBSGhpbX2j88",
  "key3": "3HCFASRc6hMU142Tkqa8kXTasb5sR41TaRAgWZZmGzWiuFoBntVmMzntg85J66rzhzacAXx5G56qHeqyRvfWqYrn",
  "key4": "3DAvwXXGdM4BnDDnHGT5Vbhnx4L1WnPdy1e5eccE1yyDr3XsYL7wq3noe7FZcAyS6VMZZQ3ZCy7uziKsvhfM3mXQ",
  "key5": "5mF667pjGXYgWCbi1nY73dqQWWBczY4NQAmA1WdbAccWYRhRJZ8KN4e5WjJppyZo6mPh8qPLpvqdWjThXnRY9yzG",
  "key6": "MSgZvqzxAPWqrjxTsw7oWSkjhaDLbPErz3TFxbn6G5Vg8FGPWCLFTPURj7WQm7cbYXvWWbjKhQapTbtiGAsBEL6",
  "key7": "4AsqFAs3oTHUReYXGqWsr2n6CTi9onaeJyhG3JsMU7NfBV2c8UCiKtzQjJBG8ep1rsBmzbXFmHMCfggg1nRLZdZF",
  "key8": "5xr7gHqxyEViNhpQ6KdhrFDP7c9am2UvJS9Jiwgdq7DSGYzASZtY5Y9vsHG2wHCJUH2VFu7MHYdM58wjcXRp9c7X",
  "key9": "3T3BKjqjdgHZW9AErv1iEtLpzwcHu6u9TsiatC1YjB4W81fzWMdMKup2ifGEsgHKsbSkT7EGeBpK249Jep3EWvbK",
  "key10": "2kVBJCFACFHvLppdp1LyLqoVZ1UzmfABC5EomJZ496ctp3vgWv9Hc4oHCmxtxNnKU5cgWPmNPzhjpvY9sEm5H4qD",
  "key11": "3sjmhidCZCrpEoc1LksWa5g8f2iHhUksvLTREShRGbHygo7RMqAW3f52HQWbrCjoAoDaqZhPSDgtmHWM6YjvC9s9",
  "key12": "LHwfE8Dso9AN7X1WAF1zbW7VSkQXWiBR7kecqZSYkDxggKksq7EutVAfWLtatK4ePVPHmaPMJmwL5MJLacbJwjC",
  "key13": "3xn7AMGL6q4pk3pASQeMuZCzQfHHmyZMreB1EiXxzvaynds83WPsZcAPqNRdqJZPjYCcbTADgxJoUu1C7ZUDmZY7",
  "key14": "2YmLTw584dvrnUM6EkfECXmmFJgCE94KA6j7Pdphs1EwgHn9dDmwqWA21Kin8MtRUcMpj3sjLKbboAvdpWLhNEX5",
  "key15": "2YK4LSqKkEhrbL9zkpSoxmpEqUz7jsepMNHLhmYpwKtuRZmWF4ikGaZbXzenb2Ubggkn7V6MAZpUpS9EUFXVEZyW",
  "key16": "Ws8sNZbGPUyhtgS77c4xd73ZYWTNT99VVhBomMfFcnfQG2FVd5FnbBsJJsFAp8H2bt5QbChsUACJyYseHHYgXfT",
  "key17": "2CaqPz7praynuiUT2FhEc5BhrKpxmgycnzHDNnxzWCkJuJagkoqUFvrrE2fKMKrA43QZL3SG8YovY9aEz15tY78r",
  "key18": "23mwRetcmcQAqjHxw6hwF4eMNhvdzhinabQ4UXzDNa2Z8banBWhb63v38A4j7s1Kct1F8Y2FYynThpRkoE419USV",
  "key19": "5GSmiDYb1CJpzHNfkeQ1gf5RXsXJA5fBjYNAnDyiSpVd4ewFuQfNZcQ1DdyLLFVW8aqThmBFyMgAxBXRBA2pkYkW",
  "key20": "2aU9LgjHkETrTjh5sQDeV4WtvPjDsM5gRk1Xau6FDTrj2xnJrvFGbTuBGgbLvKPYw5AUnbKdZd2XE8kzv3JeM2TR",
  "key21": "rE1gaD5Ui3v65mZKb77hQqQzgUnqf1H9iw9VbLgTLpdAVg1duDupi8oS1uLnNXa3RFL7La8KkkWNNfCCdqK8vi9",
  "key22": "5hDukH2gVnSe4hcLZsbYWt4qxR8wK2HsfSys8LKt57na2ep89FC791URtAffYwkye1pF2RSDXSyVuLTnGxdYAP6n",
  "key23": "5fjK5MYMZzwR5j1EdtEext66kyBv717snv8mK9LZHFvaCFDuU7ZwHkwxt6ucm4iF33P9X6rHxrhXgenbuEmuZTZd",
  "key24": "5R1w7Gjn2uFQNXNKdkXwFbRWpH4oUjUcmwJz4vf67YHTvU3xLtDLZsPPmapTuaurYQfFD3WcqjZesGpppeuLLn8w",
  "key25": "37zYMiE5VSE6XBhm14jE8aVvZpytC6CqjQGe36LPpaVEvP2JyfkjDSbbP9JLFvsV4jSYRJdD96kFNWBQFK9BiX3m",
  "key26": "4T8E1AkmjCr9XhpKrVbBchE9sutJMNowKhVcedaewRug5RnCTfoiYfwMn56vc395ex6CCdWMmWnyQQKbhiMod1PE",
  "key27": "2GbqdMt4uEP4ehEhRESJwGFmZuZ4ApwarKFyabamBKq7dtn7wBL2SeW9rkgseLcCkymwcFJD7ygX3NSk6u52HuVi",
  "key28": "2zJ99oYkfgx9HZg7YZGheceFYJBbCthfdAG2kmJ1AZ7CMVJvr3TLeqercXXX7aGHwgsiy4BqzFL5phaxMdPNPCQt",
  "key29": "4weDNNHvTD4fSdJLrYK7dYDtWt7H8uNqzkvhdPCkSGSBqaeJFmf9YoB9dCDwdkgW6pthVBwPUox52o2fLtdERVU",
  "key30": "5aj7JBsVYVFe4XxKAdrYQHrkByMHajWUGvDyK8PeARqdwvcVMf39Pq5izKph98u3Ps6ZFAaQeNvM894rMFyhqmht",
  "key31": "4tHtBKnB9YpJSery9QqSEGFpy3wTfaBTEC6LHJC85TTigWnhFUiscvSctE5RRNF2h5cccCtFud8BXgwkxC5EB5pm",
  "key32": "2VfyJb8qKsbksnnn5LedK1G8akjMMPjAoCRt4QaTJTjQgbatNCdmd8Qnof7hykTWs5GpCMjeVHs6PEzKSMeRM3fW",
  "key33": "5Tu21PLgW3A26omKaZbZaYix98Z56p8hEEXG2F9YF5mdSFEai1926vrVmRhh2ckfXbJzDa3WfYjqcRNBjYbVZgRx",
  "key34": "3Bp2vmizKeaC3ucK5Gb3QJ2XJzjvoNcsEhJgwjES9V8yEGogekKWHndYhJyrAg7piNV394e88hszATyCJymch5ix",
  "key35": "4e8C8RB9kx7zvwDjP2CYToPwztEr3r4y1D4qDjaFJcBpRtcFrDcKDpSMSirAKM6sdmrHtkn5EBjWSJKqXSZhnz5f",
  "key36": "5dWvYdgMS9MH59oM7U1SAztsZjfKUyqcD6oqUMQo7DJDyR5aUv5Pjag4vWokbt22BVcC3wjGJ5eJtguZ2bKs3qAL",
  "key37": "5hX9uBjMw7R4x847p5HQyyfwX5CXtBrDDKX3MKPbb91oUiJF9p7Hm2ZchrUgQHAJkmwMbiTHCMQxJCCTj5nHe8EU",
  "key38": "4HA1TquAGFzYkhXNESHTYqGCXc7WeWFFxcDttFvDJtreaRJjQA8Fu9vCFUkdF9FAydJDSgdBc3UfDeB8pAFsK7QE",
  "key39": "5AerSswhwCoN7ENdLJ36mzD5NoHE3Qjj6VwzGGVn4LopJ4QgTRFLhRxNmFmWjdzzHd4hp48reMJ9nQ6pp9bjfH1m",
  "key40": "23bpzy7pX58Mq7jKFrSY5mVwDuGocwQ3ATxgLPtyUJmiEMfUDtquGNKYm5GSDtUjSZmAeBYV34qHHSPgCijBeq8M",
  "key41": "39nobxmq9hdJQtK7LAM4U8KEKXAnuo5ckCdxKvkm8SAL3kSKdjHCm1td278kSU9i9EXtfUPn7qHqqQuG2VxBbpB2",
  "key42": "7e8duwtmb4XmFMyYQTmTPDFtKcaKMenNNW1maSCQaUGd3CUCu28tyF5pi8ETGt2r7g69nwPM8jw9iWPzaMjtG6m",
  "key43": "3gmStSwbWGhYvthPk6WtyEx8steyCoxVK61aokB8ENhEo8CxkNSn5xBjHQF5yRyjrL1MRxrxxzN4j5YVEvfnDFft",
  "key44": "5Gqgs1Jd22SP69fMzjSDBkvuE1LkMRt1nGWfEE4AmVj3NZ5iVt1714PzFciHEjsQBTVv7hFirWxn7BVA87KTFFYN",
  "key45": "3D8Jy7pjvR77X5ebjCK2RoqhtVbdbErUgndTyjsbhBCRTGZnMTfZRkyc4EYommGGd4xXWQySfBvYwjdGXT1QbRBx"
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
