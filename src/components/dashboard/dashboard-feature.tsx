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
    "2Cdz7e3Sy5BBhSoXHZLTe71bL1L2ceJ4GVFZG5RRcJFahNP2KUj3qm5BvtdoG1rcZLwATzeNQ96x9MLwHuU4BfFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UHgKggZ8rarhQ3rwxLhiye5aZsNb2KSUyVAhqgCDBBvLLQpg5Sqx3XBhzTHETTFBLMZtbuJAdJrR27XYUYXyKYi",
  "key1": "2JMZo3RvMreWdzD9UsWss1tDSnhyvzUn9xikJWnDnX5UGkXV1cim4AW8jiCgoAnAoFCcL1pfzMd28eo3pqPF2B6d",
  "key2": "51FYiVYSDGbvDiWcwh8whiNHtYCAUX3U5ohkCuEuLBWBc3j43YuVJ4r8RL6nNK2YUH7FfrninoARWPrMbVwJc6n6",
  "key3": "5rnWbccAWvhMGF81fD73ENRjo8sUfGFVWSYNt7Q2MBHh6xyFbUz1cr7UuutqrGygqFfCBfaRhJofSuNt7c2gho1a",
  "key4": "PR1rk5N6RH5V8z9eRtN7JQ6J7fDJPEyzxcps6BYd64kDkHKsMSKoP3q2jMhqyfWBBZWBDUxHgghJZ1dGQEiC4B1",
  "key5": "4RBEbLP1HHzyMqW7TfpHY4B4gT9WCxd9Uf5Fed5JMT8r8R1hfmBiCUfayW8WQ9VBz5LPmiDQ9msuHnXAwE12Uq82",
  "key6": "2BXNRQ1MLHSFRjpa91pcBiYS65WgoGiUoFehXsXbKKfj97K8THrGqjGBuoh7ffXkZYs3GfpVqWHqHe12qPw955Bw",
  "key7": "4WXR7teNcMDqsWX9tkA2uENorGLe4eB4nfZ3Qwy7id9uCqJbXb2NFEQTnBypaEB6VheVqNqbGc2NobsRcF2icZPZ",
  "key8": "2akBeMRetyfkRAj9NZzHfgiEdHDevqSWMUKFmeAQyjE12Yq4JWwVuQ7Tw7EhC555aWxPZLXyZLfZ845eykjXqXoE",
  "key9": "21U73ccPAhBMDBeVbzMsN4wtLcTgiBeMGgu9GDXstpDYvQZumYpzVNsnHCa99NQaEhjTV3gorM8fCH4WE3F6Luxo",
  "key10": "2St5KT3zj9pjrRkpimxmAMsVAsBWh3vP2xQXu7omtZH3ADU56ZBQntQ34ZomzER3pGJh8vAETNAyq4QvFKJxHWFV",
  "key11": "3e1Rek7A4Zdr6Wr7qGM5RGCtVCYPto3NnYjhDNSv8vmsQMfLuKRHxTPcYQ31XKYofGYnRVikihwSAt8krxNSBHan",
  "key12": "3qhxtuyx5J471n8uucp74iWBNP7kEb685xzSmsyRzjpasTYwCtagDmn5ESQjypdqKKiGbUJYosK4dwfYtDWKeTpc",
  "key13": "39Bauu2DCXXa8cYcPrnzLKpe1EyK2sMSspcQ9tg54tgVRAFgGg2NAEGRCg4a1Vp3NSAXSZossVHpa4KgCUAZSL7e",
  "key14": "2dD68NvvSc8G8GzGx4b7zbZMdtUvUy3N46T94wDbp2VovtN6j5zonMXCWqyyUS2sWj4NAk9e2xmr5SWKty31e1MQ",
  "key15": "8PViKhjqPhqCBPZSAKLamYc9s1WitvvcXm4vwxu6fimrKkqyJNYr6f5xd7AsYAFA8b3Yryh3YrRfM4mwwLVvJpN",
  "key16": "5UtE4nmDbkxdJ52rj478mtee26TZXx4VyAas8eEtNZKr66WGKb2A1akmdZ4aSmViJ3DEZu9MLFKNeJSLbKbvz2y2",
  "key17": "4XUPKLgWMdstpuRyehDmDiwXrMXRJ3ocjkCb78CFid7VrmzcQ7HtmXBWBizw18mngVr8dtHVy5Cim1s9BFj4gJPf",
  "key18": "64JwZs6maMmdShYuwpRwkVWWYwap77VHbt9C8TrortiBgu3GSu3PwoccrgzjxnXD3soHEZ6rNDjLTw1uDd2sBMSn",
  "key19": "66m5JuV2JBU4syqQYPLZiivSzp7FCdezMxHyXQimFGYMab2wHUGor1VjiPdadbz7XrXx2JhxaNTTTBztVqzyuW15",
  "key20": "4VP7sEaR4FWn3KsMWKrL1NpWabteMhzW3k4g5ESffiTGc4jjX7mBjWgiVNjUDU9Z5pHmq2QbUmrfTZnEeeiftPFM",
  "key21": "4PfXXAu6ddEg3cdLmKLURjXrNWkgN3ggwEHoqvCeivrb4bXcnkWrGjc6ke8pGJknUQHKChbCZ4mLHhbzRZQ5daNs",
  "key22": "YRHf7Pd8LhjyeT7ZYWSPZktQ9taxxPN8r5wLgm3iUxMdsUC2rXfepsuJqojEf3x5e9rbimPehvyqVXHRMV22fgN",
  "key23": "2CFFnYuJbXMWyEELg4JqHpFBHYVMn72bofc56XMnFnTUibrFikRXf1BPvggGzeePNM2oSLVLBaDL71yappf2CE3y",
  "key24": "3q7Kp8Kps7ncGEwHZv43QtzuxoVY7VYoGMF1xvaA3S73qzFjCUM8j5HvqGszTp3M1PuV3EWp8Abo7XGfDr6Y97yt",
  "key25": "4ZwcgSojueyt1S2H3MNbYQ7UJupDXrYHU67kXJC8gpQqsBEuusPN9D6XE34sF4YqcyyvJRFsAbrUgP6bMSqK1tzQ",
  "key26": "gdkTN9h61W1VB65eNmQ9deNkBMVa9mWL8cy2HgRwg4LZkUAPjhhBZh1oD9HaGAZQyFznXEJ7rhdfgvUR9qUDUfK",
  "key27": "3fHEXa7o4JRjfHzLgkPVSSUsj3ScvcRSoinQvUZdGPczCfqJtKJzZj6wygVnhydPj2W2PZLe1uoGqbtTo9o1JZWP",
  "key28": "3mtDKk84KSWj8jWb9geyVaF6VcjedwTxE9D9ADfMJL31VvV2xpNgCvobiMzSHwhC64zXE3JG5KmZMBohBZPxT8q",
  "key29": "46XYZ2U93eXSAASpoGQ41XVAmM5hBPnzXy22nbFEiXLGr97RcTZrmMifxu9yNw3HqcHaMHZ5ZrFP64RjQN7BkidV",
  "key30": "3QMD6L7CWF4pavrsGzVsyuHtZfzQwe9viZsqkPyYkacRvhSrhTf5kzZmGDGfqJyoEhqgFz3muLoDhPtpRqurod7f",
  "key31": "1QZF9syurbQt4SCjtFzSj6JjcWaavywfk1LaUHP3n5xggAbZnFb7qDDCiLuCbkN93a6sEAnLb8TNgZnQx3oNSpQ",
  "key32": "3yyoYBvecLNS7CWmhs2Sw8pLw6y9B7sHxQngRbm2AVFPCf7nFTs9sdchuVZNsP6hvyffjc9vYp2q4otKEspW6CCd",
  "key33": "Kx5UNTT9yx17sSuZoxwNK6HH88Ked9jwbWtGwjgTWUQvDjpGrn3m9T5pmUjNebbfKChyT1Yn9DrssbecX7EPKpi",
  "key34": "D2NSubTjWG4RW79F5dEdL4S2z6V73NrxT83JerCknGFF5wBTw7Lc6LhuX1BQg9KywXGTxi3Gq7SMoPT7cWd6sBW",
  "key35": "aukdrofea8bbYnZTasR8hoh7MPETGSgxJ5nfB5sqAST1WU2t5AEG3LFZudGTTuXprMHi5cCKoN8kGuukQwzZNR7",
  "key36": "4urMndZ6KhztUjhrHVhxwC2sWtCiEYesn3pf4i5V5ivXtBA67HKQbPYK6LqmjYucaRWq7U436iruQ4zryE8wBUhT",
  "key37": "2jXm6tbKMdvTRtnSTiquKHHts5LYiKtvFt64c94SB2b7CqbvYUmLerAu9xuHqzGrTgSRKkbTDNMvRviumvsQ42oS",
  "key38": "4qWEz5AEP5h1ibYizQ1Xpq3Y7YGsQGRNzbgRubci8womguBoTBmVe4sD7MEdWFex3cQj2RDYhurMT6NAgei5UpbF",
  "key39": "EYkCHen72J1yae8bZCYYy3zF4DZ8GXSqYb4JHLWBZuZtWjXNZQSeXn7mzqSpaWUNHdNGcVioNeZReUeGXNaxR8w"
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
