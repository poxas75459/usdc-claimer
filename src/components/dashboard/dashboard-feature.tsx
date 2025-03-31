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
    "257uwm34YZAje696eANuyZQCJAz1LaXvYhXzYwqFYo72KzFcui2xbpDmi6Wc1qWgyE63dJFPntxzyU4k4AFF71kY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sp5yCxhYwaueo4zFFgrsq8odUvYjpL3vbWPX7Mzd9Hw1aPyB71X7WdD5858LLagZKsCFiUa56DkLsHkV18LYfwp",
  "key1": "28yfUur5jHCcSPczip9TuWQrBAkaZnfoBRHQZuF6ADCstmkL9JbQMDPXCPMaEPZq8mG8FBrdKevXTTGwoDfj4EyC",
  "key2": "GM8kaohT7prij5tujcx7hDwCn4Z6tmth1dksEZr3gLyYmaDmY2hKu1ffq1eawjESgWVtAb9UDvX8GNoKiraXi7n",
  "key3": "2mP3WimceH6P6Pm8fkDQzr499nTKqDiahbbi36XemYRF9K9bP3Bsqo9sEwzxgxgeg5U3pLxHqapkKhwXMzApXRrE",
  "key4": "3DdfKi6cxXCCG3Dn29ShdbcZZcBVyN7c7Y7z6g8nhRCiXFi4sGytACuFcETLqiDZre6mVCuQ9QBmX7LBzCeEeM93",
  "key5": "3bMvFZ3aB4mEdDhgP5wYEp8UgnhHjHCRJQ7vXq2FuYA8VcVHtUwirXu8sCUCi7Zfnu2JYrPM9MVFyFVqErfxnsrS",
  "key6": "4nSW5bc7E5U6VxUcLj3Cz8obyUBJsdEk2jGtCZPr6XTMyYEy8St8uz1SqwQUxuwKUBySyhNw3pwEKHkkT9rcEFy7",
  "key7": "4zpPdcyjLnjDBakK7tULSoQ5GDzdyL1AqSX1SNzBaB3qhJj52jQBYB62AV2TVg7rk7wDe2Nz3P5iSEgPrZq9Fxyk",
  "key8": "4S7yZ8yUfzCKHAnpwdj3eNjX4v2fHZekwUEnPqNvkjAuFGU6e8MazSE2TrHih2jsG1hnMc5tKj9dZt8CpLRv3zAM",
  "key9": "2nvDTDtWwujbMzgokUNDqwpt41vsF4aJHJ599BCwSSFNPjzq3AFdwPDLCpJ819EVtJ8a8k3JyBSecoqnCPkgKGFx",
  "key10": "2WXBZhM2EQ2nDEU4Mnve9VZLJ7oB4yB6SYS6XSpgXhht5FE9M5a8ycTcidwE5XZPLP52yH6y1RGbbBXhynFhTV8C",
  "key11": "3pA2B6Wjuga2W1eEo1kWPwqgDNZexJ9RNLZfAK1jj1MJkQgepZ6yhjEzmZihGWp4n1gxYT6HtDwukP3qPmLt7F14",
  "key12": "VP7G8YomXyJrM5bPp4QgRYkYWN4suLtWNCACcGNRoE8YWTazkriQ8eSReTG4jdHHJtXUnd2bQionGZYWwvSxgDC",
  "key13": "5UyUMiqDd3pr8pQUkHEYcYTV6HMJUnkjy238Ej5EMkLmyeR8hSzuRxnDERcwTamLmUdquXqQ9LeR2CNQRa3Y74QZ",
  "key14": "4LXryq7EyFAiGeDm9EjKc3T9MyvMtVgKXe6k1tkfBMzD8K6xN6genENMQ4tK4mARSLRTznj8cySqTS9wJfyLDLg3",
  "key15": "4Q8N47sFgtjDx45dUK51z4gW58N7giygraDxXpASBQdmjLENGG5Kyv7TLFsmy72rMxjZs6k3vgnr6o4bLipS7yH",
  "key16": "4GcguZKbFymNLd18ZVhW2uAh9tt1yRZ9YZ1UhwQvbSp2C6ceexpyVAeTXokpRWGZVtEqA2TWmCW1ZL14QFveNjLT",
  "key17": "2pjKpkviSRNo7AxNYp4st3f74LsQhQuJKZLsaGzScUyJMHL9SY9p4gFwpmLkFzQXp77vqpjfq5fC2Y1Pb1UDrkUh",
  "key18": "3MjF2deqamorMpYReC3FeFGbceRLGeiQZBh2C9g9DHQtDY9TpX68bsVzhFya3hNZaEumkhVmJUybh5zxYUnoFpyH",
  "key19": "3X7rWjKjxsn4hxv3jnSi7h7tSMYCsoiCdxr2hxjPV2w1YQuQpShhdCycLHNX8HAEAmjCLzztkhMkHFsBLGfhBsRt",
  "key20": "4X4BawnN6TxMtNuVF7fUe4xXEeGX8HGbeSDmxRK8JE1kvZ875sSri67eisM6v6NRj9rkvfq8g41k8QgqsoXY6M8X",
  "key21": "fiCpV93mCce1EPGQFU1W3CYh7CmuMqJfzZ1QMJUsnBHXSNNu4HpUauotpZppHbBn4CCEUxqcNhxU4EJyF2nS9Qs",
  "key22": "wF6zW2LokB3fgotXoU9VphAKpuPMTAy9zByZUQCLXHbX2g3pDXEtxsMoC67xU26ipwQcEC9Kfans4GuiQi4P3Nu",
  "key23": "E4yQEWusFvnLHiYodipJroapr33cmyx8UobqyG6AWPYMf1wwaMkeFAwTMVC8W2MUtRLK63CyDpsYBFkSJMhN67M",
  "key24": "5fRHX4J67urJp9K4TN2nsCMbvKKDV5rZBNy9s4J1nnLrQv84WYAimD33ND8mq52PTc2yb2bQELZg3BYWFUtfZDzR",
  "key25": "5GVqECiK5dRCfsWTA8g6B8SommCZWYrasMkBe4m57hG3mvHeT9SSxSoueQf2QmcKx6ohs4R2ssm3FxwCFCTV7y5y",
  "key26": "3y8vzmokzJRrF1yDcLZqHj4ptNgdt4DLsvCHE9SA2C6WiMKbbcy6zcCe1ApT1deoSBBxjbSHe9znf9wDpXnBjtBg",
  "key27": "5X8SNWtA8g61cTMxV4nyfp1ejiVasQAGnPnqPGDVeQHttYwErBGgzQrwwGtMtKE1yJHz6GFkPDFc7QA5tBxC58Yu",
  "key28": "4btPYDC2oTFxz48PGtnM96qUo2QF9WHqEaYcdyCxbWsHEKowKrwbDRx6JgTkxa5gjRqQ7FvkizC3KKnf5uhMrGKV",
  "key29": "3VTxXGSBkYJsUW53kWu9aKAneu7B13xL2JtdretQXeaTJ5WvYRNnoZW4nci5kXx8wGTYXB9NCdd1G3uQUeZ3x5t1",
  "key30": "4RVvTKg4wmjBsLnhfN3WkgVcFiGgWNcTKg2cP3i3xYNxRib7k2oe39o5LacCpFmKtXwajmqtxjvNEVMMVJS3FADc",
  "key31": "5XHSycz45fMfqaxujVguw7xAyDXZ91FEYEofzktoPMdzkzPbp92TkZj26vB9R9GZu9BKxWyf3UwRqNNkStT6y8ou",
  "key32": "3HX2C9D6QU2LEq11b6KTDV2h5VDp8VFg42CSCYjAYbQRsZtfj694woAnnbN8pgjjwyJ1pMFySWnU3jkFebm8SEMj"
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
