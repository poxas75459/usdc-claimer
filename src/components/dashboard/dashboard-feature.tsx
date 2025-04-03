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
    "4cfa1kPUZvW8jtpg6QCVzBk5qAXqKF1Eh8ZWygjeL5RCakDspRpM2b5eNpx41q5CLDV1fxCJ8XQuNYduJH4sWChY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56mAwU6CHbppSZsdyqg7HCaVkDdqY5SMbCaSd481GEcKk8MhdHDcpLN11pW6PQj2sCQzkaLKcvWMoH2H5ciF5ras",
  "key1": "5qrtQRq9Rx2eToZRFTrotKezaQGB3jPK6Unci8ksA21dnBizxT97sBfnG819d6vr9H5XFu7wyHe3zebPViuwgfmL",
  "key2": "4hkgqmo74dqRkoCSUs6dALzg4dHnHGhxSaRqzHVgEUrrDtnYoVf5EYqvvqibLYRZ8HxSzqgXortBAxRshPKsiZio",
  "key3": "4rtYQaAZGyG3rCM7ApsUb4eWWFNPijBo18Q5txWRGCbc7JpRczGPMNSYH7V1P7aWDVefK8xUWYJfiDXVqsUqRV7j",
  "key4": "9ytvYsSVQ4bHUXqDaMtS78H75BcTQ8Uu1qfECEd655yrw5kAT3F9nfWEumB7kF3bY4RRiJqKWnjaWwZkUoo4mc7",
  "key5": "5xfCaWJMxZ3CZqsUvg3hJwVMa8ZyPxRCMTWvAXJDK5uQ8zdqJLhfTJFz4DjPcutTSbWkRPUkumH8oBXHfWdwt94n",
  "key6": "4Wp3yxoMTUpGUJe7ikY7YoHeSNQv2xFskcoGnYno3L5TSG7KaYmGyY8RmDv7xvPy79pMUTkUghJgH6cgrq12wgQ2",
  "key7": "nEeNkMBrFPbqikavXhaNW6q42Z43tk4DbsLgd3ywJDDvHxiVm8xuz35W31yjuiYAtB9u1Q4mpNPM7nhJxH2dEsE",
  "key8": "3ixBWYaioqa4KCCFLSnzQzohGeDKuAVz1YZ2WepnSzQJnBnaf9ZqDwhCJG2gAoy5kAyQToEbT9Stw56Dwxk5qHcD",
  "key9": "euhy7i4ZATZVNnNCggp5a9joVaL7cK4h1SoCscrncJDC1JeAT2XgT9Zp2mCB6tUuPNTPxFKj8t2FMnSDRZZ3bnS",
  "key10": "4FuWCNSuk2DMSojL4heEsPqorE7SmpyTb6MDDaaBQuQ2ommC26toSx3BQFxYbiHpfg96G6bHdxrKMASmnqfSRTcS",
  "key11": "bb3X5WtjVnEgjc9331VpwQQ6CkHdiGSNo4yg569DyBfjurWcBrkYAVgHrDrkT28EGX6SW1dCoVpWDhVxbrdh83T",
  "key12": "jm3g88odc6nADXisF9M5kkJYezCTQLVnQuqWofHkwhGYnz5MadDFwJvfPJ6aTPP2GztDmjpAP4gQDJ88svqN8qx",
  "key13": "t5W1zxr1xqkFPaF8PmRdypCNyDiCKvRdat8eYB3dSCnGqzQnPL7u1egtubNar1S1V6S5TexzCPmnp8vJKxWedQX",
  "key14": "4xq1FZx8CapkEjpfX3w48fXVDiUtbfRpzThp4rUZATs7kCcwc814Gqh2MSf5amAGHKtymZKhH3jdeNjkYknVJPVX",
  "key15": "2HFaieDV4B9oBvLqp84R535d7kVraihUMewoLEWoVb37cUXMiaibqgewp7wDuc9fS1nEg6DEUGPHhpxic2Gw6q8z",
  "key16": "kEv1UnDiP8eKn8bhhuQNw1jKgc35GwD1TaLqafBWEC2epDUivtiwr7TeSEDnc4AKDLbhhDfcAJ6vsm1iAxnLhP3",
  "key17": "jngTzKSfo1Uz7xW9z9cL2ShxZ2XrzK2XpqEp67EqE3KdHFzqPiMtH2t8K8rpsbtD48VJ1Ms9pUWkJ1YkkRty4Pd",
  "key18": "2KhndGEFecpAaCZLr4mNfrnZtPnELEDmLmjRxdmmkMV4CswVM5rjsj4cvm91F8Wo5bcT24HzszKTgCt1PNguggAX",
  "key19": "4U3y9x78qeRvbkaEAUvfFppRpu1Px7N5HcYLZocayAx5vVzqh75VrEs5KwmhwfSpb1P6DhYpXGsUioQmrisgnpkq",
  "key20": "4z1z3VKToYtguo8yEZk6SXGWPpoGKqUPNYonUoD9ybQrrsvxc6YGtfJgsDRQqzjKLGa8Bfhi9WNbuFhe4KzUipVk",
  "key21": "2ncWsNNQB1b9sBYCUipexYwzX21TaHeEom98w4GT6pzbRKEjxA2i6nCrHpRuvsNfBcNsU62PG8KeZVBVvCKrsHxP",
  "key22": "4XXsoSJxMUkm9pwCLkpXqKqcVvEkPqF9Vcy1qh7X4LbvNunq7biBKPxMjQAvZ3bbXeqiW8HH51FMx5VaeiKV2z7o",
  "key23": "2YjPeCF3HihB8r28htu9sTEEPJ4RGmTVEJeRxPrhsMGJuwKRBDtEPY4BKMi1H8niKEKXDCXtjT5taZbzvZk9bvob",
  "key24": "3WwGFC4EQN55HyKc4JVbd1eo8qwvpcTWsZGW46m65hbvgTJ2rFtGwXaudVTxFmz8ADPpaBDU3r4DuFkLXrcejEYv",
  "key25": "2fZVQNik4XHQkbmSUaNraK1Lutg1JJVNfaaUFRnAPjskF34R1qt33UavRSwCHWBVtTXkpogJqhU1ENBL9fSi2eLb",
  "key26": "2qGyzp4nEoySuXQD9fwtEJV9S88MLTiph3YZiG1bRLm1oHYEjeNwqbw1vYWgWJeMTKPMmpwajaqK7yibyLehUzUy",
  "key27": "4GLPfBnApF3WPoKGfiQKEAQMsnZshWHrdmQHgV7EbjSEdyeMpZGTiK2btCTrSiDJTo7tf78b3VPEUbEDw5GVnrpR",
  "key28": "3jydCGGndqEFFCB2KMceZKJUg3KLgNE8XP2Gz6WXpm75VbSQ7J9DAF4SkpHQ9hCHp4h1ssZ8LvLrfcAjGjtfnFHQ",
  "key29": "4ZhD8XqGYucUaLzUjLBaNjEQnUJhm2ynfsYEBVDL4mNENzpYA7mzQPuRkVNYsyq8eDnkxziBaTceyF3T7nxYaueT",
  "key30": "5wBJ3qzffvPNQwrLM4RuZeWJ9Sum14XFmLe4bGv6NLJ7d7HVLhCFkizdZidYiPjNArseGuG9xHiGFEURUYn5zjrF",
  "key31": "75Vd6JoTCCniXNY9mo9nYxsDDFVb47wPSwYPVRAqQympeeuh22jWin6h4YLRx6ZsH9UHJrYKGJmAvLqsFXmga39",
  "key32": "4zDfpFem8DM5eNBCC3rACs3BynaratPKen6byDMPvEVYu1zMvyJeQVExaL66qpRogXoLpuDNYuFR5v17r1554YYn",
  "key33": "3JnSaAM9QaG1gSEi1DHmdjFsW8tcVUoAYz6cSYMCdmaNdthkLF5aS7FrzzRWs37JKBbniBygro6cvhZ87pd9e3kT"
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
