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
    "5atN7RLN3rfbVpNTDwmkrvXov92yiqQZXeGPytJLiFr5tLso6yCHGtXYnnWqL7Yy2MKBvR2oPLgPYnsyjLn8wKFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C79Kw9ixFhGXoMCDAQX2ZkvRJ5KDHJAY7756aQCpGNToTbyiF2bEhS6sfP82YB5wki54bwJuH7Gr12tKHZqZYnw",
  "key1": "2yweWrXp4eTrCbnyRK1XmDwVPZ2z5R6887WwaQrnPC81PkwYQfgetpw6v2rgr9kkS7hNQyGQWS2cXNxiMRCGNGg2",
  "key2": "4JHr5fGDRN64PkJb6UEGtFjGcYPmoiYuBdy1nfVfnkEJnhpWY4jUdM6yBbMK2NJrfJe8LCiPMEgxN7qfJqVipmU",
  "key3": "39c1PiSb3hBL3GS8HRYKszhvNEH2ZoHmwm3zWHui4NANoCpjxTcKMiLL3Tm7J2eq6Pg9NJ7YRYcjvKs6BWfowqHM",
  "key4": "26tzjsAWQmnYSdV4Q8DGMCh8hJSXni4Q73h1mLgbZdxTpuffugGcg2kWyfoF19BELdQ1eFohGtt5CaQKPkHoMxz6",
  "key5": "3cqSzA3xvQz8cULzr6J8hJmADSgEva3r78DTFaycPxawVCFNHecPbWEBxsGbtAiiNVR4Bx6P9rkV5guV8PyujmjM",
  "key6": "2sAxW5BY3FKjFv5aw9a3fRJKN5wfa5weqwx1q7sXEtqXD3cPnM9g36XK8U8MyrQPJDm8iecLXe128rp2mExpt322",
  "key7": "3yVxVbdypevXViJfEFWaMWywSsAycndDip4Nc1mRZDtpjoMqn3AHNYHDnKPgYwNiqsaiyUGX8EFUD8jbAtAWoAA3",
  "key8": "5q7ahMGTGv2XH4yxWVZrbxetqB7DUxrKf4SryR9fgLw8PECzydNsmC1qv9yasfDC3JDvotYZvYdeTnvVhYD4WqTo",
  "key9": "5iPy8Y11BwrjUhE19qAvc6acFrxjh5dQ5HBxYMEvuxp8YRxWAPd9oaQLV1oWbYmzWLQvYU2pfHbWZAfUSBVSnrZQ",
  "key10": "3m6ALpC8TD6aNYzNYFR3fUVAu7deZtYCoBrkhm15E8YE8db6Uyphh12uF8HzaRjPnWrQPcL5Xa7QaGfxuwrTK9r7",
  "key11": "5t8aXE6u8Hhg5ZAmc1ThvMXp1EcWcbaRo5VUYv3Aff8UfEb8Sg5HEHZd5Su7b9hnN8xcZJAySriXzxjccQCB1T3s",
  "key12": "4Nc1ujXDDDq7dSAWWVrhdWUuptkChmkjJrCJqr8jCQtGdcaMjvHe1M7kXft7ZJ4Mz4BHT56Zo4tKp1WGgxpfe7z",
  "key13": "2wsYPtpngegWSgDLEXBtLVzYQsyxm8phrmjrpJP8zMLzSHq42Hsccgeynx73HFG9snHhCAeaggmTeF9Hooe8X1t2",
  "key14": "3XdgXRorVNRzPLvR7AM4Dbm7RCjPt7QXyTGnwRGt7bAayMk2PrpEear8bSUyVgPPJ3h2vxrUkCGMzpHsmSf8gFjQ",
  "key15": "AYxPHFjLDksCBD1AawuvJ3FFaLV6WrttyK9A63knRmLRWBEGyDThcLYxXUDpQT1gqUuAdCcZVRR3LYQDr8JS5hd",
  "key16": "3gvAdze93HUCnUo22ame1rY1nPShB3juH3HKuJKTZuFZGoxkWqdWZGeLjTD7QZf2bjsaB3VEhWf2S8azie9BqoSW",
  "key17": "2bMDBgU1Hswj6PnDGvX2vUPR7hQky7vuhPpQKg15VvgvP4JhkSRRjFbyNLaA8xAp5DfDpESagoNjLYnyHjDwss8Q",
  "key18": "2siUS4S9Mw99XmJKNqxWAt2mHicK3vTWv3mA3uwHwq7C7NPRthnHV6jdUzSB7EshJH6CReWz7o21cZUydwgsdWNZ",
  "key19": "5BV4v79K4C8rfnfZgHHK3TfUdURjRhfEKzfK2BL7KtwKMzq6WJRjtVWLGuvSPDeoTAXaAbZsTDpkWLVx1hPgR8Xk",
  "key20": "3FYbFEeQcuXsdzxiGm2vZ9enkkjqUzepsjYAtkgDko1ACrt1q6GS6cTBsPoLmdDSS8bPWdTKWeAYbTWt4vyJ2jbJ",
  "key21": "3XPvuXWRLPPkQ1ULHGspHifcwksNseMG5bFvtGMqMsWrSmBLDWNmikMnwVQHSRMBnyygpn2K4Lb14oCRtihZevUn",
  "key22": "2X3d8ZrrzdhBYS9zhK1x15124QQNib3MfJSb1tGAvpwF2W7kvNL1ozydfTdpNwSUAioZVbsomvvm4wG61NhXz5MZ",
  "key23": "4Wb47izFVB7QQC739jjK9UMry5du3BfLX7eMswdJdux6jojSbWEJCRWXSUWnxY5LezowgcH5oRkk4Q2nGiXQ4oTe",
  "key24": "a1n5AZPo5a87q7ufG6bj9esJqpZSVZLi85HzgZK7KibG2vHtNDPLT1rCVmttQt391YRFVpPQ74jaVHj4Af2oYEp",
  "key25": "2R3jLh7WQw29dcZN4S8zHZVbUhzSLsLcHuLebu6LFLWAXiH3sH3BpKETSXk5q1f8k1GXXMfwB5Jako9kANMtrUeh",
  "key26": "2rYJNJWkkvNuEiquXA34KN8wDK4baUMxPfTn6jzwm94uCYfUVcosp6mn8dbbS9s6nmuj91VQo4LYTNBDV5112JLL",
  "key27": "2556shDeoLwqJCtGbFsk8HjMVkjJJdTUCRkQaN8MkXCT7TUyoVmwgsQroY3dciNTZBTTqqCouceQNJQmfA8gi9fe",
  "key28": "5Sjo7QiF9AXjHiXiHgSXiFMiX3UuXcKQXxdn449azYPt13vdcGq8ozmf7Sehm54nGG9d1ZFQrwg1EHAqSopqw4QE",
  "key29": "2QydLve1BkdEcwz61dVdpzPzLjLvE6a8vGvcnS8ot964iEYvUZA976WY25peeQNqXa7C626xTjfF6m5tXEejqDwi",
  "key30": "2wr3tnypq4idPFfYSuu3KApEMBMyDayF2PTXWx4YbJ9MQCzdTSf5AZuFvDnHtAqTTdbBdcu28XrcdhVc7sCGcoLf",
  "key31": "3yvpSrWEfDXCXezTbFoFdoBVdQNp9cmLoFxoHDj1hMkYVPFfxz2FStZo3nuR2XAXnTwYfPfBD5nNKYBYsJtBurvi",
  "key32": "5aHmVKDXnSZEnwaAASmX9kPPzEXmLdqTVDP4DYzQGybLhv8iHav2TaKqNdvgbSA83pJh8b5QD9jnuq6mnATvN8vm",
  "key33": "4dAj5ppKYWTiFFgaTdK4EqRnpr1fNRj5CyTCzqD4nCdU2aRBAySi9CCbozdixAENsBHp7tJx5ZEcZCjmFpJbgFGc",
  "key34": "gFGLb1W7hZUYX5aqa7EtvqG8GToayyuqj1tUJvVZjFPFxKTquuoju8hoSuTXdQ13Y2bWxk72y9fheQ7qVy6Qgp8",
  "key35": "4YPJ1DATTgdpXYWST67RLesRirg7ncY7QQ6KV4mBUN4xfgGyBhG3iVTwHDtUhwJZWHTp2g6vEYqst9EccLobkfHS",
  "key36": "5fPEZEFfMHuo8JaAijSDwrfApT7qZHVQdi6Me2FwSunu9SgRU11veGtUnHLnBgnBsTByLvMZoPgVL5WanM6oxCmA",
  "key37": "5HZoG6qXciRuaRmFWb8vF83G4DhFBD4dZTcubqepdQJanzeLTX6yJDEY89emArshzN6k285whBzKBzEkyvFXRdLk",
  "key38": "42cCv9WSDU3FkRteerpyzAUK98ZFhNu9iQ955Aw4tDngudpJoxeFUo6TiiZSbBMw7Er1fqaQtWRSbPok3yCK6kV",
  "key39": "2hLEphcmbcuusoBjWsAkRj1rbo5vZNqJNamSntkK5dabmAX3JZAyNdpyvrcawVviVp7jHuw4mckhW3w3dvnQM2e8",
  "key40": "4rvkLEZrWsCZkCKg72xShvyGFEzD5c17h86hDTpqDPtE65hc8RYra2sYAK9iPrj2Lb8RDrpX6LBq6so6umMgNwPA",
  "key41": "2rdq1jXHyjvmTyYsxKFompuduetT1nsF7iL45sNMLH9SxtTZPWsFYxKhsGPaSWmkmSpsToq7EE5MPRAr95qHawgX",
  "key42": "Juob6LQSC7irynYsk8x9qoeSLmXe1u3Yd3XWELw2XHZTFy1NCChYQtJEhoZPYzy8AQpKkkJ8r5X5Fkxv77ht557"
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
