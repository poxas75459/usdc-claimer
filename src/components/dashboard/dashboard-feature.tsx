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
    "2SWKcpCE65XPM6z842MnJGwX1idPpmwTsaiVQ6AhqazdZXPLie1aRdoYTLVdD1EKoR5haZNj6hXDFR21uyLJiR5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uL8GCgK2hB7TQEJSk3ft71wgqaQVcm12poHb7o8KfdyYFLPxT8gAXiVQNtzeK5uoec7RtoHBfwCCV8ZEY3rJTpm",
  "key1": "CFZHQz3EqQo1WbsQjQFohUGTzYN268GL27oFskEkkzQZRwz6NyeofThL77Me6rhttgm7Ca77zcJDgG5dUP6GJEw",
  "key2": "3yCMQCU7qsiVdLmFYcRuTt3UnxSgutNeqbPbUkgQfTe8j4VYvL3YPH8h3javHeKScXpxwdoYDun5enww1BzTYYRS",
  "key3": "gAug3sQPAX6dPEzVHuGeVCZUCx8XgX5kev8sksNHK4oS3YHxfuypJ4PMUrRysFpB1bMgRzrhcJEGtcXwPc7mea2",
  "key4": "2BhcikwnCYcupmPgjYubkqEyxewgCvA8U5DtMfGCFQarKP4cGyc1zg8Z3TLghB2YqwaaMYaKv3az6pPxVJv6KRAf",
  "key5": "2HgTY8Ub9dEMR8Kuz7fKXSoEHKAc86oV4byokG2XQY1zz5FCNDrdwgspc5xfAAPzpSWyzmVmKgbXRFbx4jUHoTYz",
  "key6": "4gqHTMCYNZFzF5nLw7foRW8GGA5W6ru12ezUzs4ZeDM7kuGFAZLaqRmwYTzxekcSEbfF5Wb2SH7cvBJK7GGKbdt7",
  "key7": "4XZCGij9UYZYpubftNQUA8mmzGAjGqFh3fVYgKn4bTdn7BvYfnXf7uL8AcYS9kWf7hZMDG8BMrjayZrFsu3yuHiA",
  "key8": "3JqJJqMFDWkNaCUyixSMWazQXFvcS24UPzHMGJ3rj3G4QmEwVR4tCt2vVz38VeQVyWEQ1kNKaNv93ExbpfcbkERu",
  "key9": "QPYVhtd4GMVc1dYedzL4Kqvm8BWfgnbUyKJPAuCZMCHXnTAw7hqQWrn9iFyUKLDJn9cCfheSeTt6RUG4BGd4WnY",
  "key10": "23cJuMaxLUfvb8QSgBsrK55Erk5YBr6o4FyXDjPtCQZxqHTuHLSNdasactUd9wNC9JL7WCzVJS4B1rM5aaizKM7S",
  "key11": "2LUdKyC8fLN4rVx6KF2XASFS8b9afwbowtcQquo19uULx1aqiwrYJZUwyEgNxtcHZA9DCoTBrWEKHgJjh4r6Zijx",
  "key12": "51rApTfq3esRqD7bk4VpJVSwJ8hnM7eZwJ5ymSppzTCP7reNXgxKkCugSDguUW6sZg7zKadif92XE6TPfv79Smcf",
  "key13": "3ossFwE4hP4Ga7h3NmJzMtoUgUxaszJ6jyou4KNbLvpEVgc2aYkQ4UMq7HUsKkzs2tZL6WSBVD77UbsQfxFsVuL",
  "key14": "3wgo11wpyJJ1iq7c8oJvYac6LDKnZz2jz42T4qHrXofNXG9dG7SKMeetB4BPPU2w41AzKZMig4MZf6PiQtHbBLGw",
  "key15": "3dduuetf2jGPsfKKBavk4HamweXZjKoNbWM1HE1u7dyxZmx4Cv7uTv97Zo9ZHPWCxJit95tUPrgsJmNGhFGR5Fbf",
  "key16": "3hv6kxd8Us6SirYKeqLQ6aWgJ7GCGBCoQmcFfnL36TVVtEviN4vmziAMWkQQX96erw46pkq9twAwHFsrj36Hz3MY",
  "key17": "2bkrv6VzkyEjVTi62yS3iPTY4ceNTzxjHp84fPFSTNgGqZwTkqs2Q5LY31uN3Ci6UiyukF2LcBBwufZkvxfbDpGF",
  "key18": "4xwjBX9QU8Pikj7s8e4hBpcGatYXWBqePMqokWvVMJQTv3evmMVCMitofJc5fsK5uqWZnTgC6C6wRH17rstnnVL6",
  "key19": "5Ke3z5XYyxBsREfSYik98B7RcmM91ExYmh3NjSpN8vyYaWyWK5rxHxybbzCRETW6WUdviGHqvEx5Y1TC2G2mMn9d",
  "key20": "4rVLPsQ6jyBWc2QCYxRrfhbJGRWceruG7VVkZnkranKMRFPxycQeaR42USvkFYzd4YW7xDkaHMqLBqFufnfBU4b1",
  "key21": "3teryWkJ6F5pCQhQxJamsfY3C93v3eB1mQAL9NWMg5xiHTusvcEJto7tmHVsBCz1Wk8BUkYrt6tnccJNTt6GnbKW",
  "key22": "3bXdKrTJkHXSd4798KzBh5wSneHkHHAzn1TN7Gy7x51Wb1JNNj1rGXQ4teTguhYshaU7TEg3ob8Jt6HmcQy1h6Zw",
  "key23": "rwWZX3wGcFUo7FyB2XGHF9798ZdnPrFbfe1Yj9E1H2H1FWcBLTDTrF2tb6WKfofmJjm9hfaPYRDQhC7pK5w4a7b",
  "key24": "2jGB8HTQqf23XeMePWyMfuExkaVSvJ2rsRXhpS59sLSuHMAZkNCvAuRncrLtnUpeNb8PokzD3vkxSaSsXymWm72m",
  "key25": "5Y2tNvieo7nhrDcRBSyDQjmSFgSx1v2f6eSbsg8Aaf52Mchew4vXhFbwBHbUmN62WXMLxZV9GYiKRr4De6HwX2sJ",
  "key26": "5GmRNokAivAm5F84mYGRudTg3RT4PyZ6iTiBDexXdaPKgiRHoNagwWAGTPsD558oXZXPPbjvZ7ePsabErUiEe84L",
  "key27": "412eLijq7reAf6sHVWGH6TGUPqYq6pajYipznzfr6VQgU7t5CYqqtudJtZMAdCH4zFDHXuyr4JSFPTV8aB9xpaNs",
  "key28": "41ke9xRBn4jFHHwnjCcePuCwoMfvUy6hJphdwAncPix7L8hDnohqTAZDzMVSqzfpa1xFycfV9tYUsvGkGdpPiF7p",
  "key29": "2ktWExsjeHKTCpRfzAemdrDKzfQ5G8e9UzR1zDdhTgPL139bPULph6SfKdxhHFyiYafQDfD4umer3WNARowG4Pha",
  "key30": "29hSa9N26ejp9thMLBXKXjDpZ8JMVdqhRm5hEHHeAaLtrwrW4MaJeXUHffHM4iZ6WxZE4zWEtgAuhHdS6u2Aes4J",
  "key31": "4zRhjtrJKvEKD7cS4EMiLDtagr2mt9AnqXebk6gmYR2LsVkqv641rGnTCmA6hhENHd3cqRz4hFSsYCq4DhWPY9iV",
  "key32": "2EDsdyvXRfyZHYxPzRtE5TmkHrXuxw5gsSkToD2z5kogFZfLL6LW2hrHWrq5EuowgwsckobtYijcf1fkc3eTBD1K",
  "key33": "4wqEDqEimApH9WEBSfbvU69MEfAa3oYEXNrZEsDcEY8mgVjBXCmdKoaRR1VHp95aNCQqQ6vs3B166o7BNe6EF1b1",
  "key34": "8tFzS3Ao6KWcR9Co7pabT5ESPnx6SSGHHtsTfV8AnTmPCvWhm1Y6tWCcQa9CWQPCrLSebz9FSsyeDQdAbmkRPid",
  "key35": "4HXbNmeGRUrnT29Ya3UgK6jmkyzdcfQop4gA3GQrwCSDpCLwTiwR24mnTSxdmoMpZRDsMdiFJypMKBrSgSFQRSee",
  "key36": "37rEuseUd3VciZHWjSsq72HJgRp5PgQ7hDZVbNNm8SLJvL4hMLjcqKbfHvdgHXcMouMMmeURW3FWpe7GGYA9PSKf",
  "key37": "29ht1khd8wcZtQSUfWgADGwsiL1m3VaaneiThELEMqS5BbHThANMrR1nNdEXS3QwiY9f2Tx5ETVaDAUssDGe5U64",
  "key38": "4Ph2yRjiz2TYHCVeSMhkotuAfquUfbKSJRYtmFHyFMBWbLz5fZer8untE3ydK6nG1GoFRfM5iCLeWTLo6sCEmJT1",
  "key39": "2KZbVmRnfLp7f24zF7A87TxFA7Mn4mRkoivKhZjrWsLuUMpCwpA3iVLmjY6duuCiP2puCP3CWoDFzZHNTAw3kJ1Z",
  "key40": "qcjqaZwtVMV1fdXuSumuWC2P3g1LeT5DMgZUJ5XxiV8v2RSWvvK4iZ5GbZgVjTyJzT5vMNBNaycCbvUELYSUaY1",
  "key41": "4gGpBJ9NqTEMqEndvqPsimi6dPQSfxqWEYU9it9g1KQuRhhxiZZpw7AffUV1nJpq5X3FuArocLAgbpeHth8wYCie",
  "key42": "4udJ1zzGw8VsmgNBnJkjdiBUHBeq2rzWUtZ2etkziN9f2y5aynZVEa17SpSumSN2TVmzMze336iaN1Nzj9Zm1Twq"
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
