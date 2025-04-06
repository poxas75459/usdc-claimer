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
    "47xzdfJotnMMciHGuLSfwMjHiQq6GzimfLFAMHbD2FsiDva17LhmTumMmLozRu8TJbSdudoPxUmJrxFgXDbkW26i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YKKZ9RiWhWseMhdaeC5ANcmPYKEcYrqa1CqNyjdsUS5THabeZH8588dfUHqhN7WwBPSMpdE6uTRDcFzohQ5HGWx",
  "key1": "3FYnPhD2RSc2EX2MNFLUm9MwfKcRjGxuAoM4wKvYHt49Eu3qXfEzqcQK2fmCaRQqRPVBywRmSRumpEd1sacDCtWi",
  "key2": "yzQmfw8YHePbxfGcikefYNJPRok6YgVRNDRqd32Kdjjb2iBVttnmcmCTPPPnaXoBPfh1YzZxhLZeVu9s4V3Kpbp",
  "key3": "5g6VJA8jCqp9fDcwZ9zVkTj8sPVWm5X3iCy32EVvxbxyT16DRBz1ThiwkgB4mXZCaUZYdq2j6Laoma3JyW2o23mY",
  "key4": "4NKrnpGB29LB7yenbfc7V7UDZrrUJmVxj7dEe2JcDzDSgDnpfTDizAH6P91oS12JmwrfELdxACQP7aQDtgopeeJM",
  "key5": "4eX5qxGqhYY6Hui1AX1N2KVncyrowc7UUi9BdiuaE3NH2BKBVFuNSLjcGJDxddKKgMSiqF1nFcXDnQcEdx2CjNu6",
  "key6": "VEVKGtUrySUL7ptWpqMvL3iQnTVfeg2prj4Q2F2D216bywYmogYUEUzuNUy5FYdKYNrTWQuEo8E2Lk46DLVfkNd",
  "key7": "2419VfUwLjw2tTwcHZ92xuURFbVoR4NZv81n5t71zPvkkFEHjj72GZ2osUpZfqEsLJuQDyVvryECcXNQs48oW2sm",
  "key8": "5ygZMuowuLhvgEcvVVDWGUeTgpUJnqGrVTFxbEZNSAysbtehdf9V1ZVm2e73Xz8Rmij2NZRPFd5P55MbsVoVUYnr",
  "key9": "65jG6vAhjUZNVmgzH72TeZPstCG5Ec24nLWxcSQHa2tCtoqMtGaajfvyJsFVHVjmzGRf9jurMxk1nqXmMuPhNLC6",
  "key10": "59Fm9cMAfuGS98GxtbzCKJxL9wZCkTn7s4hfPYBHdKAFcVcDaaPHctvqkgPHNJHijxicXTzetrpfXFFK6L7g6huQ",
  "key11": "2Yv83V5gQvVqPnXS3YhFHNzUZkEvi9brSSWcHhZs9VAbMNtz8wEmSFJdBU5gB6koDp7SjVNxwQZq3FYpartfivGX",
  "key12": "h4rZfCimTCjDFDTLk3GdDa86gGv8NcXn5EWNSJiDacrZzmViBmM3Mo3sqzW5QAbH9E2XmxbfaFG5GBWKmMuRisq",
  "key13": "2MDm2oLFwooS8jCTbb6KyQyGuExgpdpsgJe9DVEVNr4MyXWw4N7oUiVP6wQxFzTzjJGRWHKpFLRxdggZ6F6KkJK",
  "key14": "sHCJZdTqLKpkoHKduUyoogZRRo3ntyEXBjKNcuw57ohVZiViaCddpMYydLo8PXeUA73T7BDkrsfh9Dfppc8Hbbu",
  "key15": "31BtgmoN8YtVJ4BmgAYqAQsfec5oj4Aau2mTTyPF7tuo62K3zXSPshVGYy3XWrqNQea2SgftrtuqUsARUF1wasby",
  "key16": "4gvWenKbKE1eLNpTTMo8GcwWdwBuDGcSH6TBMRNL96fifzR9daMK8ymR2MvQWBnNtMsBknufKw6kthL9u3g5B4hi",
  "key17": "3E9YxXR21Y1485sveb4HN3FytNGBNi9go6W2ogri3XUdpYpJHV69Jud1JNPRWbHNKt7pWSiAhzUaAUuB9hdV16uU",
  "key18": "ah6JEB4v9xuhftNxbXeYXBQYULahJhv1tAysiFL46aVJK9AJmK37S6uGQjNzCHvPdbjdYYdSLjFAzAbGfy9DSix",
  "key19": "5TJLgga2Jd1W5QzWsqUJMtDrqw9zweiMYG2uW35quiDQJyLSSJg53xf5GGdDXSZhen45rEcBxQiLsXaZxTyopJXP",
  "key20": "3ceRhNYYYNEyvXPUCN6P6wKEuePBMXrnihj6tUgcQdmKhTbdYxDy5Xg27tt3N3R3Pkxz6LuzvRBMZm2GyRYSrAWj",
  "key21": "yTFHH2RqG6QwsPqL82949d2L2d95aKWgg6VA6RXnmCT2EPhjQkY878mujYThBdm3RwcZ9Fr795y4V8n9gs6TUVN",
  "key22": "adybxMqh8ZDMgVNhNDcSHyjPfKmRwR4jq7Zj8gSyzHmRNypBVKDKxGYW8b1CQk94kBnHnHVAqXvt5YTFJWQ4VXz",
  "key23": "27fAcZBFMbdsGXZhfuVqew5hj2rFpHaB9xp33k2s8b98CH1njW5naJ3SY3L8u9dJqRhn7NGjrxAFqW9iuhX82xv9",
  "key24": "5E1wWgyZuUZyWgtaV7WRSWj3maDLpfoCqJrA2P6rLmHM2R8FSidSAN3FjkhmNqdKEs7emWfLdb38cTojJXonsuxa",
  "key25": "5VTQaXj2rMoLNzePREWf5ueKpei7iZof4QvJq3ZHvezwb8hsR7a2NsbtZaXDx1qZxwQoLSbu5QMfYvwzxEZ7y4Nd",
  "key26": "4gBoU4Mu1HVzFaXYu4Mdc1DxKx3M9Hw6vL7cgFsT431oDnNSfkSJSP6VxvybMtMSPea7CvTgsP3hrHt5YNxeuebV",
  "key27": "427gFJjJBxJ8xeo3VFPjWNzQJkvXDqbS8rDccKEyFi4FSo7vdb1GPHi9vXPNXftN6o7TDnuf2rg1MjsPGfYUAEpU",
  "key28": "4424h5mbWyx2uZBSQxrjoSwuLDG8ZRGz5v9f7UjmCUo9FNUpVbQCEnpxKRSn2bkBtXg46tER2qnYWAQduYDuDyts",
  "key29": "3L8ZdmP5psXJKNYAkyWmyMpefPQFvr511UWxP4n16ZNve21kM8CRRQB9ydtAJYedRJDXTEcb7qahf2tHCFVX5ZdW",
  "key30": "qKsMMVcBAZRNvCbVk9NvnZVdNge8gtr9fj1MPdBtskMDByRKvudnnh6LicaNmfRT2A5CHVD1mJLdr4VNGJ3j6dw",
  "key31": "2vi4ppQGRGtJXZsVCg8hn6EqUf7c2nMq9jweVioy9pBdV16rHwpDQB7ED3DtaR6XPYASj2YsAqoRFn6fax5yutJv",
  "key32": "4ddkFHo5dYhLXPMfzq8T1Nv5VDeQgoZcRdT6VxvZWPUMxtPeaHF8NUye5E7KgE3GxNw6iFPY5ongfpdr7XixYRkP",
  "key33": "324UhE7Nh7zh7BUUeC9qp5CZCnKajfW4wsX6QxxBrB3NCR5TBwR8FVCksDcf7T1ysNfmVArZLpLUcehHtM17rfLY",
  "key34": "MrvbYBcoFjdpZ2i2rQRPCyzez93yKuRdSB35jXgeLUkrs42zfaixTs524yCC7ALicAscaznvwCo6touHiyLQGTd",
  "key35": "4M9ABuskoSuskGZQDRiKWtFqD6uqoK7pnSEAnht6kbnzNrriPtwDQyZrokTeFtnSRGNTrob2yTVcrASu7kkJSsmz",
  "key36": "2FVZhgacHHuCMxHy3MKmEx9FX4cGpoj9dn3DpR5hkbghZn8Hd49wq1TDWto8KphipcrhKWigVEEU1MjSRDdzaVMC",
  "key37": "4krhD5wxJ4V3eo2seTkjgQcJu2cULzWA2RKvNSWQQdGdFn9RGxWJCKkmvZSukGX26buSzsR8apbDuo3zXQuPS9vK",
  "key38": "36VZJS6JnYh14zRR7H7jHaQgJdLM4me326SmB9NusaPgWbNwrfX6kdBUSSZKcDHC9DampVHLK3Z4QTaqyR5WJkuX"
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
