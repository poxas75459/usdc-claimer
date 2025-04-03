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
    "5YFnSutxwmR5Q5XUYrDCLJLvHYvvz15chqrpWmfkHKZzALDBsqb9vib8rJAdGs4dGUBu3LvjaBtpfa2bkXUSCV9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AUKbUABecTxAhsqSRV4x4YWo2p6t3ctSZ9oh8qbpW2BBJDxV3rFYa44noZMXKfVX7kgkWXEXfi4EduFXqVExCAB",
  "key1": "5TepKxU5ZSK2H7gFsQPB7a9jJgnKpezLNzPXhf85gwPpUyS8DJnvkuB3Tab8R8RRMJM1CoaQgTEwpRswScqkMtwW",
  "key2": "4kLzA8JFF3vQ1pJE6wBkL6WmM5RfAWTrfguyTD7DBot3p5p81mzfRwudSm65sizcYwzWVgiKuQatZbYGmTGPqV1J",
  "key3": "26kRJ76mnkhiNDkkW58CcQpKvwxPp2mBoMuDygcvXw3U9yhrN6VoXAtwqnBUi7bMwqCpiNufn7zA225as2wuMFSC",
  "key4": "BCmqxDTxGR385h1YnSc5ZvLBAKAxNgueQKRErzHNRXevyoernSdraJCzdk7yZ54XEvd3DoCsHF4JB8W6zLvLezz",
  "key5": "3nLPYcE5WW5obUocK4yDa6NW9Lq8R6psXzEiFYPMUYm5ucEZNTDShYgiStrUxYU3XJLtUhJdgdWbpmGRBkwWjwTk",
  "key6": "5JEF75DXQS6RoJxBvnQiM2AnpPzW2qSHWtb1zsZDFvZk4pJJQGJPMGTwofppzFKigN3rfKtt7darmYJvz7nx3Q1u",
  "key7": "qqdG5Vwx9FDEo6Jz1uSsEP8FAHx9CCgLPHH6MLHjnJtPYoou13smrojoXtm3kYfeoJZStrSW3mjFij8wBXZ9Zf4",
  "key8": "aa1FEV8whnG8VYCkLDcTz5mimY6coGotUUTs4yMAwAwkeEAW3vexQGD3dCq4CKSo6FxpgvTKDeVpdmbg8Lx4bD4",
  "key9": "5GbZzAFyp5T4d8nwWFX31B5ib6F4yfa5qDQ6pTccuwMrGEZqvS2Ao8t7HEzrrFye4qj62D1tH86a6VgqNcVW1Wx3",
  "key10": "4vMkrGXjyswURtRYVoyMTsEnTf9gE3kSJQAjunJ3sdQKdx5NjTF5iTN1gf5dwtLSPThhtpwSZRCe3hJFnHsFmq9f",
  "key11": "DL9g9m7nL63QdMF26cjDbszWV2nqaVtisK7RZTsvvbCYbR48KZkPUq86MCWq8shKgXkSfkkHCz1u1CDDLqMRHFy",
  "key12": "2H1cnUCGfWctqJRv1y9XMtQfj11DPAvSvxqrfowQLWjk5tZA4tXdh9SzrCS9kXyDcchRgVnu62iqrVdTb6bCDh3c",
  "key13": "4mefmM8ACyWNv1pMfcWurqN889CsdAPHFzrswciJP6YT8vfGVVxfAaySYThUkDMXehYiMRaQLwYgRJN3Q37PP317",
  "key14": "2nj9cBnKPBU9DjQEqQQnkzFF6pCWBRYcaUoEe8mwtVWRnoxAg2tVmU2treheBVdQxzoTTxuMoGvLoH8V8Xg776fv",
  "key15": "3z85Xp5kvTVrgQCACZokaPouaWyVephpn1jPtp23yncPN1VUdeAwkoY6Y87hZ58UGJYSkkRhHzgcejWmiDNLFcpb",
  "key16": "2PoPKx3eqPNQbTwYeYT1ATs1yHqLR75b5L9nAaUeseeDHUVB8PRxF7ayrp7Qob8sz89nsfhaaqouc3tYQ5rejQka",
  "key17": "25zFXfTBAUgb2XRJL2otTrusrzSk5FHLd3XLkSdXe5yMm5K4gDLGSAMrCNmJPTeMmnaCzSddytsNqBbCtzjpX4Gd",
  "key18": "EXjAUTYAymAL5NiHjEGRiRM3AqKTkLJ7gwYCUCdGM7Tg5xGjztXzERd7Ys37XhHLfqyNrQh3Xj7abSBriCujLa9",
  "key19": "3r45QJ2aPypameXkUxiRTUDMiDxh5ZeDFuhdS9B8RzykgeEs3hmjoNBNziMDQKGXRtWw7zU93NZt7fo151odMhac",
  "key20": "5qEk7XojhEFmGbaH6E9V3DpcrgWGoiGRKjr6w4TthVsVDfEfiDV9ApxAFtL9DLw3gokUkBoeabjCWxTGd9yeevfx",
  "key21": "3fhiMMej4JSufBwwVLgMoHAEkE9PEW7hYYJrALB8jhN6SLm8PHywJVyPnyDqcWL2X8MnHnVUYC7HxLAQ1QYrQ113",
  "key22": "5EsPdd7PET6gQgWJbmeqUTD5TZsFoHSwWm5PCfAvyiXJshSPPwQizMKqzCF7fVMeZQVpjFEsDt3ukXw6WZHvyozz",
  "key23": "3uMrFrYQVBpP9meq1KRh4pE8QKf9Q6fK7W1uC9gEqFQdtJ2ycrzFGqBEEeuYhVS98PbspcLyvXDtdZ7Yop7QmQ77",
  "key24": "58cKbzDvBFqVoTJxqTyHcGdrpGgBFzZr5eExDXv3aYZ16UM3m4DXyqy5KuGw2GrxtCFN7b4th7wfQd38cZTF5rwr",
  "key25": "5ipMAM7UihkYmAB89GqDv755cUGscAZUr96gnXmWwuy1sMMjRTnKt4AgB1UzYXFMVmsWXSHjAKEGVCcs8E85qbGm",
  "key26": "2nG15b6FDkDFKh41uBgwXDrE1Swk3a7QksaYDGUtQJQTxGF5ky4bvyRBJBjsGnTa8HcAPhRJT9PyuAqPYrRQwkbd",
  "key27": "5TSvZV7EZKQnH36kR1VdKGV9it78AStrUWzEeBM5asGca47qojGbZyhvzsim5vRyC3S67G14dJ8hk8rDw8vzdEJC",
  "key28": "5EfDrX88c8E5ucA7LYwiFKUqKfaMoqXokVXCy3juShXdMxtwejvsK1j3uq11QCYMs3V8oaDNhWuU3kM3UyMfCyx2",
  "key29": "2vTzokrmL1MWdLDvnTtvV4ccsCq6xTj54qo9HcZVA48snKieh8p1P4NheCRbcX85PPrT7QZtHJUZxWiPFNn3KFXN",
  "key30": "5uX2a8BNd4oxRRAUyudpcRA9otaNjqnhaSJnf95hFCQJwa4WPbjbzTKf3yzWHjedmEWsygr2WWejHH6MVWxN1om9",
  "key31": "3hb355aAEFiscmPm5gS6hqXroRpNUKNaBT3Umj9par8NkJZoJVy44H3yuWHh18CimEvRgFyahafp8sZiVGE79eVT",
  "key32": "2HMi87WEJANoKA3JtuvJvqdcJpXwj23846u2HzLyUGmbECydTEGwHHKoEa4X785B5krKMWFT5HyMSaCzesi7nitX",
  "key33": "FUU6jaJEAB1w4wQ3hz8GXyhPN5gg26rf5wvkcEGY6mfdwxTBWgd9j2CawCpQ11kXmang2xTq399aZZJU8etC6CQ",
  "key34": "5us6bT7G6H5yBu8q3qYMyPz8jpvdVUr5fgvrUt9Pv9Eq2ThLxH4z44y3UvWkEZd6VVjZHyUguLSyUP9Pd3REaxDy",
  "key35": "fYcntnMPbcwm5R2A43MkBWZwVA3mGJ5rhTgLuNVQ15TSviKUgvRS4imp7TKPEsbwvZ1cGxLMmBQzgDCWV7zFXaH",
  "key36": "5okBjssQCkZ2octXMtE9dbGQRwU41rfBUrNa2ZD3rNXxVfK7ZJ4nYcpksZzcuYdEoETbKynUY8hi9TxbLourtCFC",
  "key37": "4qGUp4Lkf5SYQU3z3G9pm9XHv2ErqoQW6uEPbqZRbbMtYUScUhW5TDgfdMMAXAYEjQSMmfjn2vdg5KUVbbWzQtrm",
  "key38": "2PTRLjBF4BBke5anxPKE1Mty1xM2rct51PRuswK3QJgisJogy5FDB5dsRuv2jFjVeertRtzt8uJjRWLWXCZptgKB",
  "key39": "a9pFi6DUjxHuXienbK4MVsU6DrfWakCnUFb77Va5Zq1YA9RyHHLSE27mh7MMcXmu4sxjf63LBcLNU3BaFj9sn9u",
  "key40": "xUNAab3qVPzmKXdFzpbC9XhMCkMFaCKydCa4typJ2kVzx8dxvQmfuMUA4PQsUP49br5qwzNzGryFADVCoUCvkgn",
  "key41": "67pC31tcqB8UibpP1DGokvKW8tUCNPMZLUCU21PEzXfaEtPwSvn9rWLUjS8C47U6FxAdqD1MTEQ8hcdzHX2bdXP5",
  "key42": "2U5nFcoxWEMt4m1vPFj4W9J3WyZvbjkBcvJ5prvzHcdGRSooUfUcbeE7n9b3sBSjDJagG2EZYobgXZEZdccgQdLC",
  "key43": "38FpB5Ab6hF9FeVp7osaskzPrFaW8LpQRcwznhgxpZoujDKZ7botjwJDQrYDRddCKoE6YBQXXHfhExxjmHGBe79",
  "key44": "24XaoRyGurbrqWWfeSebPWvXKpLx5wgW7ndyQEiL6utjfd9tNoCmJqH2hBdFYDb761LxnfvSuPQX2xpzW94hynK2",
  "key45": "4UwPzqrjTmZ3hy29UTjpkRncxoHBh7us8XjbvWjfscNHyt8VtFxfJy21oWtMC2PHKH2TKtYShYC5Hdw4Q4Jkryk8"
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
