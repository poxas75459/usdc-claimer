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
    "3JhXSxNuFLVos7CQzLEJzsuvtnnfRqhQoATuqbhXKik6zqhjRBc1miB5L2x4R48MJKjiXDZwVuFnDFy44JEDooxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnwjmgtDQQ1ajGmPjLc9bCGb6E5oHjYBS79QSwCCDsETGu8Nrn1vbnp1yr9zHyy7QrAmhL24h5TH3T1mXbhe4iR",
  "key1": "22Mah3JAegsci6GMp8XDHndcLPtsD3HB8D8u481XHKtouUkmSSXzcBEvM1dUszxLbJsTjgSaAdUSmdEahbz3iFAL",
  "key2": "28dWphCG5oG2vV95fLNo1V15tj9TywmWBViUbvzHeguxYJk9YwpKt4NX5qXqKKLSJRWgiXdP7GGj6nyvfEvxJmP9",
  "key3": "3c7BoC32X9BitK8MGXwmSA44KqNuRtfB2mAD2YYg3eubLzGRJcCNMAfJxqeN5Bjz5Q3a9f8enhjAvSXFDX3rKCw6",
  "key4": "5x1HgawTCC7hQFz65B1EskTbm6mSWcMeH8WB2KqW6GWcDg3zyrK3CFFRfS4KgyBG5AeDYh5zvxcQwDK8ouFcsMdk",
  "key5": "2KE5HRf5G3ZHfAPoVPqY4XS2ZcXaRbYVEpHUNB3uKHWkitZJpYm2W25g1ttuVvhtZ1o6da97R7f2HDQmpKfPxvjg",
  "key6": "2VjdwmZFaczaXJ8B7vVWUpZdDchwNuoaxdv6xmt89modQwqKAZ2LjRATzpYuVXhQnZ1fS1TceUgBpvEEdBmpzxR2",
  "key7": "3PM51eYPoheQ12C8oocfTKsXkBnwATV4Pu626NNNGWkyhkNM5RHyGix6hpUyhXscYETS3j8hoXVSo58t9FWVvuDg",
  "key8": "4u81UzdErgLcGULStPMGNjgi4kP31HNK4XWBUXqxS9RP9FaxfSRj9xddAs2PRhYcMtpny2bvSYh8SYbwwhkdc4P3",
  "key9": "Ziq22VA5HNMpMGgwdu1kPCpnKMBLaeqGb4tngrowHftL9hfkcGv7MrYreQBkE4pjrb5ght54RarnWGyke6yJjNK",
  "key10": "99KKQbSG4LqhMLrya8Q4AAXuRf9d6biDqmRX8E19ovWWkMgW5uEFYPVnPQtSo23zFoQu8ueRdzy69U7zTbjpg2k",
  "key11": "2tyACVvaYmTX7GNjWRejFaqfJGNM33c1gGhSuMyR3rhJcL4F8QQZkN97cgfEAn99T2pfNwt5fxa4pVjmNJ6yqd65",
  "key12": "mJayW69UDxN9bD5ZppDvGvfjgeEAVzCgw4xdr6CexeMc1pwqr3zRs9yMNyeQwHLXtfXyEyDUR1r2eFj4LbMiJvo",
  "key13": "2rhVM5XLgJNFCFWj47fDh2Hba3sKyERpX9ywWWq9HefJ1JepSUAMWNbvK9BEbdb5wL8PoS7RPaosR1iMPHMa9YJG",
  "key14": "2bChPM8PPbqbyoCmsX9wabbaePeT3YuS3LMuKa9WS6zrgBQG3dsHZUw9gWEHkC5HW95t8Dc6fPVwGah5FN2Cp4HG",
  "key15": "4s9k4nEwUufgE8AhkHt42aSbCc1jE3XsK2Gmka73tcWgg7EtvhPyWbZV2BQVi25KzyHxHwT5M1DdMiUgH4rUD356",
  "key16": "31hah38yx6TpzVT43tt1AxwHTWWdqRjtJz8fvxbqzXAuNYKBdAsC687Z85MbYGe5HedY5qQcr3pSD9WaARX775dH",
  "key17": "5dBLTL9FSsZnchPP5sCycaNZtP18Hrja7aUQoJWvqhfkxcpM2QUvZWYtGG5ygDn5mhk7Bb9SZroH8eBHKrmnwgXd",
  "key18": "5y9uwNCvDN2SkyLN2xEzjhRDDe6sGMRnfUt6NveigQWcjzFFEZEncDEdJrzhL6JBoAY6isAUH6JLmgvjt87PtC1A",
  "key19": "oXMAJNQVmJadNgvYCZLYYqrKyWbue5JqieNBG8qchrAg32zgZvsLcAECc91sA6cXbwHwciGWuBr7JwjjLuiZaJn",
  "key20": "3PX4geKwdgHySYVVXuAwvnDeESVUNmwN3gvU55zJ97m8Xg84WqkoCaHxQfndeLXi1QcvbXF5UMxLMkR2kPQHp6PW",
  "key21": "Ky1Dcm9Fc2U9KZbpXuXScWy3TRvXNywR75ri1LLEQjGF5GzTqERHeGvgjHDbi7qJkUjcyFyN5DRagh6FfhzxKDj",
  "key22": "5ZxBdEbBqUz1bEoCceXYo6vFbgETvdk9YznwXFCyPnCGqFtdVjjg8vsgd1TSJKU7t6QaM3fKndQy74hLBCHh2oVw",
  "key23": "4odCSSKZdru9o6R57K87MHpPumm21giWRxBFRFAXMasWhtYByfp3LdnkTWZEzz8eTjexaH3BDbUHr4r26Qh9L5gF",
  "key24": "J5JyrMkJE9NfKcjun9SQ7JcxFfSuioL7v9b8pHjWzYRVgyq6jinHmkUSg3KMJEwKCPZcfUAJ8Wh4kunkCHzocAD",
  "key25": "5En9idbTMZFuuUt9Zfe5iKMUjgY77Ev5V1WCbZktpJBB6D2MSoTJ1YDwamkU2EPyTueSeVUNTiVbPztioZAkvrTd",
  "key26": "KHtUG1GTAxfXXVjTWMf9q5fd1nTLZFPfzjPbVzJB1PhUNDAKSNT62g115rNB4TbCVLzprDLAHUxR5usn3sViRih",
  "key27": "48QfRTDmjcVZQmsyHcMZRdLRDKDgtLoeHzPxWWFffJS7sfGDQB2PjTmDK4ndEaGpFoGob6sgCsWzNS2qAzDavL9g",
  "key28": "5MqdZr7Sbn7dkudvw5nGDH3nwrRwPwarGRY2845PJHVmWoeLzv7kzE96fsMbjVGSo7DSnTS1s8pQFuq6JwDULQDU",
  "key29": "3yj9Ma8fSQD7zGXC4mV4prwFGguV5YdZHHzyq5tjgCP8oPUzWmcvdNT7FdYoDcuyhunbmo8XJND3d1sH6fWTU3BR"
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
