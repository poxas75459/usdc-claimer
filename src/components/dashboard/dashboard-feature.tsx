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
    "3QatghPQXZia31RtqdAv5jpHThWq6JBm5nbwHk6sg51zrMX5NcP72JgqU1Rob2KDTY24acQZtVLwiLox8GcUGutD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ya8cDq9YVsmvnE5X4PDyQqMzDKPdXyMUgCGDys1Gv8xeZ6sswXCKnd9H229jWJHDGkoRC1deMZSvK2hJqyxh981",
  "key1": "2Q5L759s2EQqh7PVNBzGsjNidEX5zJGq4CinmsXMqtmGRBuP8dAqzAQPd3jkWyqDCnnmPKZwgXv9vBbnpXjE8QrE",
  "key2": "4aPjBqPeTy9SdfcpzT468txyERcGSTgiSPNkXy4jzTb6CaCEGqErc4EyERz75SPG3Dyetdf5EvqTNAXSGx2KtDmt",
  "key3": "5F4VGY8MPNTAsj7w1xGtbaJVEvEiTpzwKUnK1zC4AWVyX2YNjHjFuyCTWmKw2WG5X4PxZxtbTMD1WxKEZ95WrPa9",
  "key4": "PYUUjphbwzsHW4YL2tdGvfTfFRJzTBj9izj5D6aRd8RLdUvkxpE7jq6QNNXeyztZ29BRq4kf2hd5mXyeXoh2b3h",
  "key5": "5SL574vmPP7jCQdAb8FCsFoCGuuBgDnp14RWafkoUhXkTaRDu3QuBBtsFztXYWGwaEnWZs2zxKEheFKnF9ngpZeh",
  "key6": "5QzpfDkgxEPmjtqT8pNaRfGPSRoFuS8u3G7WtwhoH5MBpk1NqLsrersuM6F3B19WXYHNhAs6U3YTjGo9Wdg9qNC7",
  "key7": "5ytVbfJa6A5kPAtn8HrXXPpTcdHe5epUpWvfre77K9oEpZR3shojTNndtp4EtVqrcv4WDzASdhE6CyiCWckxDh3k",
  "key8": "VdjU2YPw6bjCyU887z3NTWzHi3hmfChXDPxAnUqQZPUEvuB1FdYa9dJ4bBRTqrEFvuRgqJrscZByYgj3rwBbDsj",
  "key9": "3ySwUxMqYwjFumz5NfcbaUjtVizv9JZmRdbAyeDbf5uJ8V6xGyEEBRa1ovUAEVkeheCDoGeZb2qQ1WUoV8o7UTsJ",
  "key10": "2N5b94dKzEcwwjc65KzmTCuUormaFpgYTMcFr1ftGZNcEN3Ujr9JLaDZcN941wWUCfWunckjbVbdbkd3YPMTbnFx",
  "key11": "2dFemv5rZ9FfWHgTwQEVB6UcX5V4nKo5iYJQpaTF76z9hVTwj8oL5vJ2GTsP6HiGCm4hsjVzXHBbz546Ty6yA2iE",
  "key12": "57a8b28QehTDaKdDeymjGwhrkkspQ5Bvxs3TvMWt53DhCBqaBT7U5LYUgDQscVB5VMC8V7q5XVDjkb6GWCF3XQre",
  "key13": "3uc37rXECgWQDL7TBxKhFoE3y1ibsY74wckfGKz4C9uXSnkM9QzqSDbMhAH8wSN2CnKpUAhKyBys5EroT7Xgiyhy",
  "key14": "5vdKvEiTUoSepDzGmShWHn1UqfuLTGgTCnPJ3okjV9AXRsg9qvgcVPg37NLjwYbwyYS5B3crpwmCY7P5uaP7outP",
  "key15": "iri9XdCxto4JLjxe6m9ePrvxKjb2zkJthexkEfUxxQjE6ngDHcrcTmtb8hwoNdvmzbTdNRZvKEMoqvt8BcaRdmz",
  "key16": "WYCjcxvzCsuESFLQ2SUAAvjdKFyaRkkAez1ViPk9RnthLakegnun37Vcofqp9LJqus4qszqaNSTgx45svtkHRF1",
  "key17": "3Z2jSiqqtqHR8Ui9nEx7uTu24V29Sjvedo8krwA2iQNcj49L1jPkDzaaxsDppbgahd5fkLJnNsvpUuuQpdHDmXDe",
  "key18": "3vgYNeMNdRXvjjeryUFJE4jwGbLN79MR8b44xmGnRoCSFVaNNY251Bjx51pvJKUXZG4a5U6roFbPiHkeMb4hA8SA",
  "key19": "2qFtsUTgT4Vs3iA7QiH7KDPsUd5Qt6yHXfNfBxKD3LKarLhP65x58jA5FBLz7CqUe3dmGyh2LCRdQBqPvgnALnTj",
  "key20": "48mC3JBa1uueSbKigjw21nhiBVeEkAUtwHGXvDokxMXLyTLbrjyJvD9fGEv522NsBKi53xQg6yX6wNnYY476qJmF",
  "key21": "5yjqJq13r3jEpMqkm4kDRb2zpSyKoM4nZxsQcSUPw1LXYMuPVRy5FuUu9wmASY55U7Jne6rMcSo8kRMrbSdTcKeg",
  "key22": "5HPkFsk7yvpagdHDSaRnxQq3MfRmuUoaMwVPDZxkfpKr3KCxNrt5QJBMp6SaBnVoFs6FxHWXVvfn8W43PhZNE4YQ",
  "key23": "47YSVWXQ5LayvAd9mx4RECpgcQhmV3Qk49sKnQ2Fqp145PceMczAqFtcyu3EagxHTetujmH1oaxkCoRFJdwhQAVZ",
  "key24": "2jFFh6x1zpXbTUip2uMWDAdRHscAooargjuP9443QNEMnDZ7esAQZd9SfT5LGxqBMuLy2vC6fbAvuSuBQ9XqcPD9",
  "key25": "2wGu7iYv3j5buqkMkVARodGb2D2mFbMsawoaYrhUocLZ34ai9efBvaPsfisteatKJ6HhZtMs6S9ZErkV9QSEdHG9",
  "key26": "4fiQapsZKBDBj56N1WjEZicVz2sqPmCMbK5HwWoshMyk5xAY4vuY8qTGPSE3VEiVxL3yRyEejCBb2CeXRfUeBbLm",
  "key27": "3PTnxzekjBfEoD468sqwuCs3qacvofQ6SpbpLvRdNmgEn4jsNTZshyCccSagnp4gVr9mCjTQg3GQWQ7zTBXZ6LZt",
  "key28": "4oQtwCYdAUsKPAAwXgWUzPKSbFStHAsJRWfuMcegBxWRDEWYJWQPmBaYDzpTLAW82qukDZ4J733PEGjWwSV1dydY",
  "key29": "5T6LRC8MQw9LPaMgyeVQMigVT3N3sST3NbfMCTWFwrU3UBymMaFDLSY682Lvvr1Lr4RyJj1HWupkjmHTzZEkUxxC",
  "key30": "2KXfvs6YZ6sq5YB5Get6S6MHm5B8RKnDGNwVEnP7uiuHjyMKjjhk9Gs8jktmj5idMRJJ9A928H1Se5p7Y1esgMYV",
  "key31": "4HjNvhYQSdidU9jbWCt5hfjoZ3UGCnZJoj3RF17ZpAsQPReVLjp8GCazhwEXDYvsu9a3Rr3wF3A1TvhPJCYePaqG",
  "key32": "4psFLNZoaErD6bqfqCMgeyMEesrioPqotpMxnRNiPPyxwMEX4j5ikkMvQnNde4rHWFABaUhnL7JuqedzW5eDtjuB",
  "key33": "4CaA8PYU4s7f8tKBuD7UTuKj7Drcyzw1QDcEXi8CeBDRKo6j7wmtdgPdqMzZfT7cqWPFj9wAcHCzpa8nwPFt7wtn",
  "key34": "4NGkPN5E3KBa19PU1SoR8FipHsAuqxjdeUuN4iuUrV7gvSK5bYvba2ZxWzWLqmUiRKxWVWLRXTS9PFCP4CUdW6Uo",
  "key35": "aFhk4uxGo6YBuiGzHsL6EmmZ89esj2qAPAMk24becqC7kWNEKui7hy7joKDEFgSWrMnRRNMUy5QEZeBwncv9WnT",
  "key36": "To4XTDjitRWmUptvTSXMukUipAgZvRSYMZZpBfhx26c9ptxkJUs9vP2R47mPw52wqyH9tPECx26Jki245yjprPB",
  "key37": "26xWR2X3nUXGWHJwyADyuvSET5kHidbFJ4KmcsBUHoxJt9BmtTR2Fae48tL8tg7bx8Y4FcNo1YG2UdGPaue84sEC",
  "key38": "2MVan9wHtEvpHLyMcChAQt9kNBAtvBMpZG4NR8HXhCG3Z9go99g5JYL1TGGozwQ54jHuTp2JqaomtSfy6PzwWysF",
  "key39": "2NsTBucAHTQ2NV6MDnoMSoEidfU743xP3bGzx1TswK7YxjHP9TAzNCSbtv4wYGYtWpVxsXJF1BDpZRqfJMyu9MFw",
  "key40": "3YCexjuxvKkLmpvyTAuwk8aYSabvtbZ3vG8PCLHCCQjsHMFoRGFeJjbigCiG7H7AgWpWBst6cqsxUfh4pqJ6xQtH",
  "key41": "4fkNH4jTxbndRhSigyUkfRHwwbxUYnx5skhByAQk8qXWJuNPtEKCM2hjfFTR8rsPRR8nMcCLWx7SRZzyphKivpxq",
  "key42": "2gk6cu9GQnn4zWsK4Mo3cu9TeDXtmrWWTPvWfFEBEX7zVs1HyF6b6ynao7Lrxe3573AMmBygwYFXAABzjntb4HgR",
  "key43": "4QVQYL7BS7fhfvTyMcvbg7YztUNSHsBcfb8qJjJ8Sq1K71PUTVrR4EuLsHFJFsgZFJJq7L11C3QfMtLzoVRhLEH5",
  "key44": "44kTphXLM3Q6fgEJZu5QfdcpK2avxPfXKYkfBi6L35yJYc4vNreR38aJSxE9TuEp1665cCsqY3FMyqjrKoamoSFG"
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
