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
    "31JXH31RVXcc7uKtjnRFBS8UzNseCmsUPHpTLFAZCQn4ssoAtuhWYM3YAGWkj6h5gYRuJ7ERU9inY3rPVuD2y6ZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UzMDFpUC6iGvMWmE4wao55qVqQFP8HeHQ3Pfs6YQzdFoYCHZ1jMoxXGmJ9Rth5EEexCnV1aJHMt4229WyHekavy",
  "key1": "xxsgjpB2kbVGRqQ2ddrekyha4Lr9b2aM2Ad844YYmR2EtqcdK1mRAa4SiRHFZhYHKH19nL2nf3USzpUQKrfeasZ",
  "key2": "5L6TzWeWKyRt1D2VwXf1mj6zDmS65CajTWdAb2C1dgghGvv2vUiM3B7Jfib31us7B59M7Z5hx4GYoLD8cEzphxaT",
  "key3": "4s1N6JnPrrWMaQK6dEDfAR8y9kryd3sfqUwMV6H3x1X91cthMYMDjxyVixzEi9HGZvcM7ngY7AP37ghRoWviRWWW",
  "key4": "WMJfRFrDLmKBjhcD5hRWHy7MzQNZBUHiQzA1ftje3sSFZHSSDUBZFUxwxEouuFhgzwieU859y4hNyGNTEs4c8Hr",
  "key5": "61DF1xgCV3VJw9L5uWzNEhgKwcHwETJxJ8qcpMXSuJireqkAteNAB4yatAwyuNtrneEszDSAEpPejoczCfkctbxZ",
  "key6": "rEiFNbvLiUDEcodYzB2qv4neWEpNyjT82DPxyS3ysg19rfBuEf5HbE5W7ym7YXZx214GE7fgmBfrJqofF1qV4fh",
  "key7": "8RfLRzHtMLqMfamW5ZMx8GQQXZmYBxy3Tfnbx9UnN5AmznAy6j3oBgyAZaQuYQ4Nw8tM5JcQbebZUNx2F8Ym242",
  "key8": "d276btnHqEKheSdYqQ5jSnXeoCWJHxrTs1az7iSHDvi1yCcbQXLd4Kbah8K39WNkmrTcN68eNbwnLdoty8HLeZe",
  "key9": "LRqtixiRAHTfgbpi4v3v7BRL9ULvUTWZTdPrNKAtZgWK2p9vAmVs5CQHFAu7gEUhULqZ2DLPBUr2hwmSVgFdg7k",
  "key10": "3F2oPsbBTi4yhjwXipDwJsiz8K3o4G3n9GRYjh229EHnypopE3VPGNqLd8RXPXgXfuTB9ZKM2A2VVUr8TpmAaLWR",
  "key11": "g7jmuLd9i3qG8J1VZac2sFsTn8mUtZzq7dghqbsaTUbjaiQoUUkJWqF3AycivHGJyzSQEMSvCT9Y4qxNUJBpmkb",
  "key12": "4qvr1DmB47XFh6aoKnRebrQSqaDwWKeZt7aEKBPyu6n6rvYrVUzAgquRu7PhzKpPWngLfd7yfivBsiEYfx9QcW2R",
  "key13": "3r2rBhgEDNBJWR6pCPH7woi6eb16cg7qZ8UsdXk7sxADSgPWDdsm5LPvvzY9uNhcXN1vgZMTVJEcfLSkMSgVwaNu",
  "key14": "4CxMEDiwEdPE6n5tn5AsMegrX4PnjxBPWguXQThQU2KUgebjJprryt8W91obuLj9Tus1eDPmhrNr2TaLV9K3AZSZ",
  "key15": "2d2cgwrrKfHJfJWpNpUBRRKyG6iQpRb83oiCH6TtW8SunpDFVee3HdFFkPrQQBPDDJn3BpbvtG4T2GiC6rnyRiNs",
  "key16": "jRErDmPdfWsWDiUPyHytzz1AKp2RuXSQvF9ZyqWyCMPUMmd2ueNSS6QWnYBbKTSuVrPgW2gZ3QKxQkZzatXw19e",
  "key17": "4NmcWBrGNUgGKUBQqvvstQAFP7mWYSyrsTNe3pNxXa4yCVeWYtkscxJRX55Eg1XbENKP5jKNk8ie1kpRPFmgn29b",
  "key18": "545EKVeaDJvU2vVDcjntVq484YbiUuSUF3odNtjrspwGPct3C1kz7yqwQ3dgsoQLTkhX2UPKcoqBUFSPUasaksEA",
  "key19": "5kjRHmT8ZRcPWXatRqd272upkShN7kA6LwV4KYvqZyD1pCB1bQkrtGhHzjsg9Kof1BNN23vG3i6KxAvngCqZRq5u",
  "key20": "5nzdzXn7aBvuv1mL29jaSTLgjqeVhcyqEGReDPSp2F2WX7r7JqVR31C24nCXzq9hks2N9hB6dpg59Xee4yPTUMQc",
  "key21": "2UTTLQinM52gsAnoc3ZsbkSLCcaBGuU6JCDAVvJKnB2Neuvkk1KXGwW5VUaAwQzEKXAZM8W7FdH79A7a1EgPZ183",
  "key22": "5p2jRGqmjjeW9xQ6i3FyhbiYqong9MMkRiKqXyc33xbsd83Z48GrH5A6Kf28BEaSHux2Gc9fvxQmT6EY6aSiUXvi",
  "key23": "2KvDs2YAFdP9JGPn5LcqcJH779DN4bPqr75nADKSyhS5zXdTGCcxhuN3wwPrvYuc8r8k3uZe7bfYLTUjFb6v8eL4",
  "key24": "61qNfovMLWkP5EuRaTiCk4GWPb2Ha49qxMo6jmWZBpu4Gjmk9SzwLZcPsiHaArXknGN92R6aDF5hgh2tAyDLuKM5",
  "key25": "51FPmPadZaPZGvtoHKuETBFCCriYJR1YodYpf5k3E8pL5T74ekJ5m89UrAabSKPrkd5UipWcMPG2ZcjHTehewGNE",
  "key26": "2kznWtxDstcDGi8KT9KLwxDhh8J1YPwqkUtjExTDDeWFbhbHW9EvcGwJNxYdDr5mUEWRf3MEsUbHbiuSoqJUzirg",
  "key27": "4UqPXJ1NyLhT2AgRnutgBnJRQLFA5VtRrZCrt4ktyAP7vwpbc57FeUGYrw2J6ywQWyRh9fBR88rnQXe3wXz2xu54",
  "key28": "5F5CtUHnDBpK3nRrLCghJFTERTCKnW3abbedPT6ti9LRnf2zT2hoBLJgTdFC8qLH8MiW81f2RWVcHpgDY1q4vSSB",
  "key29": "3MDtTvfbqYprtgcHYj5PBPnBHLLpAE9DhoxCZiM62RRTnKZDWivHbXg7iUYivHpyY4xvJvbZnzUBdnhjHekzv1ho",
  "key30": "45V1AE2RDBCRSXsDsjNBQn2jtXftQFCywDfHxcrhzcr7W6ra4kWXbSgXNHe9nc43rctAAv4bt7wtTdSXmdtNCSuj",
  "key31": "4DczLSoHsiid2y44YWAyRKFLGA6gfDHdhHfSTEy2aRNZxLy3qKjK9sjzov2Fqkt1gvHFKmx4jYk3JxhHwvKNDDVk",
  "key32": "4GLJhaEPeeAMJ8UxiWFmtAATjfDBxfTr8Ea5mqEx96A7KQ24vDNEyCJzwhDRRjKKLikeZ6u5WwjsFnLFVeCVEsuD",
  "key33": "YXsYUmi2D9Cvmiw4YoSXJjrdPNiovZyNM1eubeMMsYZk7rMbTgYbQXwT6rHM3BBhQdGjh7hD564RqJBmtNQ6pnQ",
  "key34": "2YgMNFtzSnJxzeuzdsZuAMgeMoS6Gtjp8egZGKQTaxQU1vpk8BUiCMjtALfPub1EZmdfGKv2z8Gn5EQJbq6bJYja",
  "key35": "5UfNcG4BAc3ggXfhLAHCQjgKgiATvxUHNm4kXQAKCvADau4QeFqC8mJy1B55svS4hLaqDySFrxZUyBmqk8PqyvL",
  "key36": "61ficvpQvpxYAsutJjn2uaJCaYzP45Sbch2H3SrcKbKv69gXRLtWXXakxde5g6y31AmM4VGEe5pSFxaDfoXZKfTW"
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
