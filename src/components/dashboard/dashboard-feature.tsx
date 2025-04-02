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
    "2SXgLJaqZpfdGXgiFvFhjfY6KhmeQR3LV7gBuLX3WTVrYCi8s1HpCjs7nqxhJHWZFBgBeRL6MrVUabiz77qcJKqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WDYPkRcRy8jkLmG5uizgzNmv9EihYp3h4AkHAh4p5LX7DK6CnbvGJPEis63kZdmakXzR9LtQGueC5kwQat9HP5y",
  "key1": "3p8ySYxYtQm2Y7yVPrFyg18B6i2XAM2CTEDaeM6Bpg7JVgEUyepAYDNLv3MwcJ26LEsxwE3APuyQfYHBT4Xv9NkS",
  "key2": "5aCXw3ipiicA9nqJQUxJGdRUMznCu5dsiSr2B6QDntJcPsB9qNX46nM6Ao2tMqSwtB6UrMR2JTF8FA2PVAHHuDRJ",
  "key3": "3CdzKcoX8R2SUScFFgfv3xNEwaQeqgNeUipRAnyXoC4vs5RqgH2D5bBRSHRHVAt1iUREXYqD6JZvyHB4uUQzTtRb",
  "key4": "5xHzQkuQiLMk2KytbU24LfAyqs7W18ooTHEZDaC5wgeh1pdpJLAQUpEXWTTXGz79NLVTEfntqhcwttSgAQ72zeeP",
  "key5": "416VjM6jWyRMw2GskATp4ccT2Rdkmj5Vnd3eBZ797tP5DiAKSDHoUZdSnb6QQNQ1e4CXG9YFcLbLENkueye3ULtz",
  "key6": "afkWHrBEZAoggcQYue6MNmD3gkyYefSUbhUbyVGnVbqqwj94tUBeVQoRfgSQyWEh68YsEG2HKKekc2dq7fPdSdA",
  "key7": "4U24k4Ko9eHQeGNsgEn79JqBFSee3WZ6QwD3vqpDqsgATEvVipGJKk7aFDHj4gjERnMPeJyPA4ToqgJSqd6H4XHg",
  "key8": "4RqdkoMSYL6pERkVae7dft3E3gKUdf6V9JdkUi8gz7aD7P8DaahKhWrSP6nWhTKe9bq4pszJnyUsmg5QDy8NGxfj",
  "key9": "54RdQQE5Wh9VCaWPFvDYD7xVrgyH9t5nvabVAtjX9CqTFTSjSamhN77DVGjvUJXkUMAdTEPUBb16JXR919gHH958",
  "key10": "5jbU6NkBRmaoYinPNhfTTmBCULEVEJqNU3dxe3Zf2ws3KgsmriJvPPVUNvr2GcgJVHeRCohDfJNtnYwu7Et79QvQ",
  "key11": "3nemVrB1WjZrAGViRQpWMnXjJkd2dUZHrVoRDzFeeqhck72c8mW8YZREMqSEFMhgm6F8f2W5cR5gvNF99QMNqZqF",
  "key12": "5pcntQe1U8n5tQbWhaZ1MULKiMYYUQvn9hZLTJuSQhCPT6ZcqhknqYMVoaC6x4UKPPnJqatA7yppNzRQ65eaNaZJ",
  "key13": "4LymAGfBtKU42zss2wpPHkVaR88NzGcmH6TH5s2ovWyE91gnwjUMWPpWcBoRRiQDUQPjcvfsptjngRJ1WXXQiW6h",
  "key14": "29D7ZCu9sTVC6KAvVuuqdaZvtxZ4ztZebudFu5Zouu7nawHW5g2jijS68oRkrAavEm1VdZ9oJ7binqhj9uvAao6C",
  "key15": "3fPdED412C4DZZho4YRK6PLpyLbKBWnPXRWv44VauFywUo5BqytYVwLtBQyksDz6EGkRr5zJbKVq4aJmeBsPBYmh",
  "key16": "2GDBLGcR3HaPc3hwXWTqiCu1T6rQf9e37QmUhnKrSvoom47CymhpNFsaY3fSFfzdjDG4NjB6s7cxV1vo6yCPsNLD",
  "key17": "2TM2NxXdokJpqmQzsvjWWBjiT2rFHtbYR5qkJ9E8qUxxH4xg3JgLitQXC9uzdJqQZn2H3VaaM3mSEpRBYMPaedu1",
  "key18": "aLafHyymDG5tuQAhXaV4e5z32bDSuCBbZA1XuVdyFgmVu4gTJTRXashXS4rrfJ2YAq5wY2GGJuPNQEaSqyWSXNL",
  "key19": "mFFsapZrDrWZTkaQ6fnekfb5LqFVyJFvJnwxuMiYTBaEHY5SnzRgN9Pj888hfTZ3mKbivBh5u1uStDQTkR2CpoE",
  "key20": "2P4BrYA5811NN1hmp88erA9hY6mEijxTtNkCv9t2ND1yZYWSv7TykUeNtLYzcYtfB4QVnbcLqZLvr6mpPK435Ct2",
  "key21": "49sumXahSmdUGq9FANBs19V8Ly8QDewprGhSfZc2fy9pHSsFhR8rybFN612jGM5Fj7raqc8UQ2aFW7RveQnJ2Qzb",
  "key22": "iDzCL3XyvWpAVmDuKnFfAXHSMa27Zv8Jodvm4YBm7r7KSy6twpqDQYvWPLeJYxaJUiTLFXoT3aSeZz2Cx1bLsBE",
  "key23": "MYch9M9d4k7u8ip5KgxZYyjaqb75raBA6Sc4MX9K1iwTNn74keX3iddE1FLqkDekKqwuNcXUKBfAgBHk7smX1PC",
  "key24": "4KPYdSVuyCodXAbXBAC1pgcpskeEi9orE2ZEryhrUNNVPzLdQ2SyfyXR6U7XehgNACHVzB84oPfnG8tA4LNJ9N2d",
  "key25": "5FpJXvFxCxT8TAaeETsK4m2MGk922aU5GFz6J3sK5M8Qd4vpiTcqnMsAHdTjcyBSqcDc6qq3jTtRSvFoepr8uUqG",
  "key26": "h7vfixsVEPvWpDvhzQJUJ66PKjJpGDtDns5UTrrhhWGEk5wmgPZ1CvDCv67DoLaZdBxnr7np8p75dKyGfdshWh5",
  "key27": "x4JahWzhhA3K7WeS9F9KMkgG8g2gyGtzKLDmSkPMh36VHBZ878o8x718dVgCdtVQg1q7waz6PcthU9ar2nq1wXN",
  "key28": "SUE1e5beBYXv7JjqGN35aooE2s6WkYkWsGm56QPLnNYG1s4Wy4H7iJVdgrFVWBonTcFdv16RXQyHMDmGdwd5oCp",
  "key29": "2eFWFHfTqRrJq4tJ7x388eT3jniUrjX6PjumkRrEghz6XhJGoMHsnHEhEqdYJHrdCw5HnVwTGtjHddx9vm63AYqW",
  "key30": "4VtSoi2V4ehFLXhjDteZnjp9BuJpkstQj559Rf6iT3TzW89D1GbTF2NsnDn7niTiLmTPpGhZjhCbVopN8bNEtdjw",
  "key31": "gceBzn6gEvptvsSwtrxZZRS3TDHuj6nRNGwm2SWwUszq2xuEhmwukzorHxX9pQ9M1Ttb4orYYWpeiW7GsoKgrmC",
  "key32": "3qbDzQ47Z5CQpGbrGipAhKRmVb2HKv62AUVvQ5y7UMbzcmFTbz5SKYDShBCN4FELwr5SUfkokiLYCYsYyV2h9VXq",
  "key33": "44UUaL5q7pGEK41h4tyiGpC1gt2FGtXsMzfyDtG8YvbdK8GwxnwAMqmTAwAs29LPg76fCF1v2Zf5LNJ61ZwhBJza",
  "key34": "aPsHWsxG1i4X3Wury7WvxVNSWRBnUs5r8WaDz55T3bosqbbxYW8t6zjHamkSikpr2yyimYeUcjWVjZ2DbTRpD8W"
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
