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
    "4dFwwvLS5XLav53z38LmDmaD8f3mNKF1nxc3iBMrTn1fsHeuDL31sRArXdqoiYr9AZau9xGJheC5rr5vqHfmQAQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAbt8BQxuybPXk3ZLD91aDYCVL58632UupH8z36MvLrrMN1E5vAQsbeJJVS6hDZ5nC3HpJC5oDfP8hX8H1572HJ",
  "key1": "5KCqqAw6fVcMTmDfrYaoYzTHWvYJRkwP2vk6YEKPKFY7R91Kru7dgP42hvxThkQh1PnFbz13ndvb9XeN7GpfVnNV",
  "key2": "6znB4yAPRpvA3Qg2GTa4TCdEzMeUBCDk9d37FotGkEAsJD8TT2aYPjF7kj8yozXagngMZ7cyYvhXH2yGWJWw5bQ",
  "key3": "2YGzxoiWPFx7cPVkjD4kdyfjyS7qtVy4rfAUveRhKCirAidZc6AwXaMeQdPQx9JGf4vd7j4Upoqtb9zSq3d4bf3b",
  "key4": "SWTCjYvNgg13EP59Tv5NjNJxq1gr6ugkVtrdvVZNUb7UFpFuGnDcj3oAaQM43KvBX9HA7tHJkvMC6wMapWrWtPq",
  "key5": "4psGp4pkiFgTjERwSk6ow2DF9QNZGVv7fAiHqZahngBPqSFkzAA6q4WAPmv4VnL2ubKcKMEcKaYNxNpbQ6iAvMSv",
  "key6": "5cZmCGR2fDDkzkgrYTFo4X4qSF6T6kJgkv7fwxueejR7GejvatjTbPZkDbEzx2gvnpaEgcgiNjewtmSN7pcBKzUN",
  "key7": "4Dyizdw9uuhSogxPMRd9XgN85sVfzfkBkoY5r4j6HEaggheqHjv3TRyxaWa1HE9UJByaJmFVYREdPkdAvd9KBGpS",
  "key8": "3PS1R2YRLiQzQUU8miq7r9Vvi5ea6wRrKxFvTJ5KbtdkFhqgr2BA8A33xbDaYuukbomm9JpW77Lo7dEnhMd86Po6",
  "key9": "3L1KiuXCEK1qdag1QqjrDKDKMUhcCYoLqsKxgMhNZ3uThhUuvnh4pcvT7Ytzu8ZLxd1VpXbwJ8GSnnf8Dp82evZE",
  "key10": "5evD7k3bMQE8ivsJupUyJrkujtxmqsxsE81fngVuuWV3V52CHzZyujHBH52aZdS6yHuPtqY66WSErXMTPFKsjJ5u",
  "key11": "4rVU7fDcjDbEPmLz9YycPXVXyjnsuUnPJYhCgtR6A3GRn3sApkmDU4kTDoTGFQNQ8tiogyvbzZWA7AsXaCk932vM",
  "key12": "3TWpwu2MjPsFeB1BiDsvVjsNkNtJGeaSjWGTXoSM3c2zoZMFXQahG7EkA3Ei29846DdQgRdPphwcnY7x1tmr8Cps",
  "key13": "32trXbdQvtq2capNBFECcFMq4VHxz2TBWNJDb4sGu6eHaZae1wuDA1yrgDaokocdtyLAmmPUCWEHM2xxxKtKtyHk",
  "key14": "2RX19xioEzJis4AAH7pPXUUcvXCZHhm8DFoJLDq7NpbGsbiJELP4V5N5FapuL9ouiBx7AewkDPvYtevL62uw55mG",
  "key15": "4UBxWBFgVeXLbTqieyrwXa8W3oBGimQ1hbqBq8srZkeWCxrTPZjVvZnLU85zaedPUeBtSE7x8bF7DLmac8pjCW3J",
  "key16": "3XACQQKhZD1cjm6E7aG3GGfQcun2SJbMrQMDL9HuWT7RUXHDXZGtFBhFQz8A2XKbQYVx3Av26n3tarhkWid6CSGu",
  "key17": "4K7PgqE1WeSnW4e3Lewxh4LK9FM5F865969hrAFu4op5HvrqaxntGppxNc3zufkPH9iZKJHPHZSEygcuTu8y83WK",
  "key18": "3sHJZxNr3xtaW2Pg6eaToYACZuFWhG1jwHG76qJyvSzhi33tmWtP9nE5aNCgRpsiMrXpyKdTXvLpeJWfybsvEmM9",
  "key19": "5XVoFFYaXhryWSkLrP3SdtkmY3KJaPLAtWPTPg7wk5kWLgCYwZwxRh3Un2cDX4Nb8jXggsLjWs5R2CAxsZ25iLLK",
  "key20": "5fvQiy4PusXDySq4aPZHP1BQ7QzKHRQTBuvwQSn1H6M187vEFJP8mMxi88gthc1tayZtXw8A7M15EJA6SbcE1A2e",
  "key21": "5VCNy3e3nmU4ZwGNzS2Pm9kAUM7NiRAXKSivmiNMBNDPTbnZ6aqGG6M2tSq1VkPdTZd4qMekwQKJSsSzxJxxP4LT",
  "key22": "3ntc8MP1vKpzqJVUNacogxzWZa46YShz4DyUBbKp5dR9eTpFepC4nNTLGZ3UAREpWWa7xdz5mgDHW3LdgvcWiPFS",
  "key23": "5KrYpGbsMfmRDRuejAqP5pW9kHyHHVRNqMzP9GAR3ij6YhPR3oWSehz8cT3TNyzveVw7AP7HxCxwoFhUoV9xBXrZ",
  "key24": "CBbfuxgQ8JnNvvYpMgiLoqjE2ywDoVPZEPVVihGM5DFTy4JDTzTvJMMjYGJ69um1nj24wLeM7S3tNTEXB3Mx6NJ",
  "key25": "E493C2TTY5Sec2qj72vTwWQK69nmAJ12PfyWq9gjz7ZxZHZdA5bFk8QFLyqJKjEb8qkUy18r38VbLnKxirvzQV1",
  "key26": "3neCagpMohz7uwcwb3sWZNnfEPRbSbeTB8uFY2Jzu9w4GjpRdMMdyZkGGYSJYAt37gsLwzj27Tk9azBDJoVso4z3",
  "key27": "2yHgTLRvrjq8E7weETfAmndJpfpBzVA3598LU9Dsn99MUsun3jszuqDdsZcVQ1fzkbGVEjjbH8Aq62sGo6LZzayn",
  "key28": "21CzvaXLtLAmTaTTAbeM6mXxmvjxcUJ6A3FF6eJxC6F5tLurmStmt2oUDZPHHNrPx9mzQmpz81wfEQQ9vVxa6QRi",
  "key29": "4ZuGaUSQKC63JeLWgyykh51SMdjHGuMZvQvWGx6cBS46FiVhWx6MhD9cqKfy1kkbQaHK3fSb7P2yyzWTB1GmWtqC",
  "key30": "3RsELAK7ZecJLedq78NUX8yJxqT4SfMW5E8wYNb3pvGnNswQih3tzsU6nrgsN49TfhikcmFgFZcyr5UiW8yG8JMc",
  "key31": "54wBZvpUQKutynWuGugDuDimDGFHV9bB8JCzpTCt2bposiqVq5JfH7wckvyfGmEsTP2jwgxfkCt1DFP1NFRydDTV",
  "key32": "3EFB8zTb3W9ffNwmnSHaShJoL7rAP5ddg8TmNqNuqprNYrsAnu7wsCpfUwpUnUYTptU2VRNYYxbdGXyMiLih63vx"
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
