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
    "2nKZPi2oUVVctufN4xv7sT6PhCDSckf5aMNkPyVLd6pnpRF8FyseH5sZumtN7MkCLJ3mnbUhLsaBWQBztsQ138mH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321K4M2UaAYyqjm4k22u6aMMqamK6rPVDGc4cNVkzabKb8gQGkSFU6RuKCfQvuPvCoQ9Pboakkku77ULGyHMJaV7",
  "key1": "5iUosueTYTmXPV7c8iN4MF41v6rg5LeHXBePDN4jZQ81XrkA3Tb36Dosjm6Sr6EDaUYP1pzFRdb12Vao5K7TCApD",
  "key2": "52JMy5PNJvzmRrJbfXhNCXrVXR4iZxxnUQkmjqn6hv2ZXTND6gFQ15rpLCGHdfxcg2eZiTt3Q3io46p53xdaBuVk",
  "key3": "5jCbCuKBjxwKAtmJXTw65cHnDVHVH23kK6Lpvvy3eksHqT8AyfVMjgbbCXuVNb3N7ccjEe4xX8mMzqse5716YkTw",
  "key4": "45tJxBYhsQ6K3omd2h86Asif9QMjCMA9EGBmLQp5SLv3KZQu9REmARx7bV1Nh4YNmCVBtFdQyCM7fL3DK4RUMi73",
  "key5": "gfX9KT8p9NA4nQyUMRe62fz7LJs6n3uvoGwQuuRP58s5GfVq48SAPMtj7116TW5HhEnnYH371YXn7xRacxKikLE",
  "key6": "maHigAPc7TRTVTUJaRaQZbdgosoyyVkNdkjfT9HhKBZCpd6dKpRaRLmLeEaYJpw55omrKtLjD7JpFQvdMeZBDZU",
  "key7": "2q9iqA1KC6wAdvHqbKMr7yd9K8iMgLGYdprc5WhPnqCQ2x3tJGm7eMtzqATMXwUML4bA2FtAF4sLqUe2Hgk7y6oa",
  "key8": "2MBBP6KbMC3E11vN1RyWee8Fogebk35gMrjwN56ALKGCj1JdooJT1XsQFTmjgeYH9PyEKPA2rHZqTS6BKEQd57SJ",
  "key9": "sLHqXqxGj6jdTnxsJGttkCvJwZittsUGgMCM7KnDVRDqAjBkBwkTEAVPc5PW6cvLizvGg2CGAoDUskoL3AB28r2",
  "key10": "63ud5cd9v2Y8SBSPYQbssq7EEjKXR7V81Hf1oat19H31QshAt2xRSjNedDDsmfTnsBcMCxygENdD8Aa8im1dKryz",
  "key11": "5MMJ6C9b2jasA16Sdt9cP2muha9wnRvHyzbRS74vMySGpzyLdv4kFPgw6BEevUquHeJsQoUB4zgSRn7GEhUjyXit",
  "key12": "4vmtEyAAgpDdeD6NCrAfXv2AM36facj2ChoGbHxUxaitDPKYWn4DL1s69ZuZsYuFc7vWVV9Nkrcyg9mN9c9d28zG",
  "key13": "2eXsmi12Rzvk42GATvWB1368VGULKeTWS6HFtMrGFE6jfw53962ZAoinnXiSswCABZFFFbQCVxKAQA2Pv3kGtq1x",
  "key14": "dotA6Sx18HxAH7pPyNN1xVRUkskLbN4dvnHqoqNJ8EKRUeAz9Yt7fxbTEjyiRq1dkcmqDLFTc2CHq748XSa1ibg",
  "key15": "5847xZFgvsyTG5djMsjXupSyjALJLyq3anQnm68Av3CVKN51oPZmi8NMoAvok1qQzREcXh2F6Su7db54xXajvhs1",
  "key16": "3xqWDATtmfiHBxTVc6qZh5xuGgowCvZouDoZ8DtrahPZPhbkEVaKQMAmKgBXcUo11riDAnHJB1S1Q9kfjaYLicHo",
  "key17": "5DNCtW3M6tCxHn6ZXL1Z7FjLDrR3kCyHf9HFqD7nrDGB5QKoN5VpchiJEvHnmXkG1iqVxnh8J8tqbcDv9CXS9VUP",
  "key18": "46WHiphWyUfYYBoS5xELRjFMv3fuVwvh5NLpLSC2iJkV182TnEyaUShB33Rcu95YgAqbj1kcubfrbtBaeSUgy1rg",
  "key19": "3vXzZKjMh1Q3Tj5MmFrWrWgi5swDwnrvKLhBdWNaF5k1iyUFDoeSPkdLELzQsjXCjCgHhhjy1NvVRmBGXyaKiHGu",
  "key20": "2VGgukHesihNKFc2MDDW7oHdQZu56sMcr8ksLD9UoAnxYjfAEjs3jvH8L6vsVwJgFtLxnnr1sR5XNNcE5cXyUDdK",
  "key21": "3KjBbA75SagGYsaWHcq2gkpL24gCQMFcWMBC413wUn4NSzcVgCxqzBzkbvwC4L38xQtnBsfRT15XcSDJAn5Ta7Uw",
  "key22": "5xnx78ZaU1BxSLfRELLk5e76X6VhMnoWu9dE3a9FCEjHMy4df6zPdwuDAn7pMy66PgR4ojDcC2FQmew88K4vQ3p1",
  "key23": "2XyWai1sGKnibqJA2m67LzrV8ug9yQ1Sg8aoDFsG1EF4xjejDMkX1pxfQqBXZMdm3kFgdPKAciuRmYK6AqdL3GoW",
  "key24": "2qNTsxDgtF5eQtWc24S911hL4nxSPGFRYh13GN3MD1GqrVSQvPdXqRVEuwqhFVHnoTK3YFiCa1ByE1K9guU5THBk",
  "key25": "8Ce5L5x8i6NZ9D9HUwnUVNVhfz8RR8ZYxwE4zrtn9qmEHwd45s6MV6SNHfCUNw6auXbtf3gG1ri1z17w1rqNCZ5",
  "key26": "2m9eNZqgjPFQLBAp9rGvgmy4vYby7DkJfoj9FQDQSX5s6e1n848fnCMi3q4v4eBTBf2EEeSk84RzEbLMoSFYduQK",
  "key27": "5L5XXC8cBDH753Rbmk8Bp8QbtpxKDdkYNp8ZrVuE15fMHT7iQEmsxJNmf9AHk9LZwsnt283dqAa9bbkc2tEah2AB",
  "key28": "5ysJmzsqTwiURc7iUkaGD7yq3FYXNPGkzCbWe1QzLkhEyogYbH4ugJeBJS6Evg6AvaYmBzfZvMogrMiiYXH3PceZ",
  "key29": "4fRLT5P3eKiKhuCEEToMbtTPGPS7aA8RgMbpTjFTLmTkFNeHVkwVSySAnUY4JimkuJSgzGSFKRKcNbwnQPiFUWsN",
  "key30": "5LjPmPMnuT935fD5ngpjg7HB1HWFbANXDFvWnNsZ67goeNqJRswePBmqUZn5cik8DizSspvTK1phhKQFR8Y97EgT",
  "key31": "21nmg6w8ZuEbxdfFjNt9ejo1Vns33LrBuX7YmNUiTFgh812Gkd6ay9xMLzTG8LNqRGxim6nzPxt4rxKFVgCEtXSu",
  "key32": "2tW5RtJd2fPgZycH19i2LTXzYWM4fiGp3QsCJS5eYJsEyHiKaZky9zj7sLRJYY22dmVCmFeZzj4vjBCBKEUj1tgU",
  "key33": "2CxAagMTLh7mDyqSDY3U7qJirPui89Dpku4i7LgkDiorjaLQsma4MYMsgLutA845wYx9reZLav6YFdiutXPq39NN",
  "key34": "8rcnfYqVbLsDR3dH8ry419tXrRhFNUrAaRVfGSHnemcpbjNgJEMEei44sK7pnba4LELiEmfuQNHDtey8mtGv9qj",
  "key35": "5WC1Wcu4nmRpbNbkZvDzmUBbMHHPKfCAiBcFxmS8iVBCQNgDjsQN1BdJnQqQPMVbGoLJwcsT9EdpksJkPdxuq3cg",
  "key36": "3XkLy8rN9GFehnLJuybpAQoaWXniTD9HcomEptB1CwDNwUDwBaCy6WUkNwb2EXUV38wQLMQUdCcyvquzGmzWRxXk",
  "key37": "2rLEicsu36UFmEaSME4rUyvHU4sn9PFqAMEhFife87pUcWx6Tfvm3TVeRKB3MN1FxvgsbxY38WkYhBhtdfKAc9KD",
  "key38": "v3F8WowNVJpa16MGbjut8VzSHr6hNZN8JbvBamrzBy7s83JmooTr193MGtq6GT4H3Q8Sj7jmyhfhj3iMEuKFfcv",
  "key39": "oQEcwaj2KZYgRcCTGcPUA5qjoATNVmDm7ZkneXpjzfQnZbC9qrwRjpzcCyRLcqy2aXYP99UwkqJvNBpvGNLEQZf",
  "key40": "4pF4XynF7NutPZqmwDrqM5yH4EjRKwEQEf4H8m1KQYgev5SoFNX8iEvMzTshquN7ihyEFeUMo86KEs5Cc9zsScY3",
  "key41": "w9Syc45i2g5z5y9PB3RssDaXJfqhbkuzXgXx9o4Q46TaktqtE9heY4WZiMkjoEGCUJDv5hidBXm7a5LxobnZP5W",
  "key42": "5RFCj6SDwboSuHtuvf5xD1FEXXLa6oQFguUh81SXx7BwxwicJ9cjsdfT44tWq2gULPUfrEHRRqFzYhTdDZuUBno4",
  "key43": "4uRK7u5M4g7KCsmS22qyTE3Sx2jZCDuB21YZ4Fm1AtPzVVCEENuuaf6enFDXPDfkorR5estMxoHiGenAoER15MiE",
  "key44": "4f4nFvZMyei7GyK8MVsU52wJnwP3fwzBpvtnCntiBNmsynxQ7wfQSnGVT9TqQzfwFEgizfnrP2cey817Ppy8nHX5"
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
