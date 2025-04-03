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
    "2T4h6itHud1GA5cxgaiTjH8Af9FkecPaEVqBC1MBPp5JRQnjopQgXYYf2v75kRQ9AQE1Bxss2BhUabiqRmUZDVkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rno3zD8SgZxp1S6rqKTD98FLZCgB1ZpzG52JbjqAeDQVN2z4BZ1NFb8kBvLZQwYhYZPp7genBokaiVnNHUxawJF",
  "key1": "5KqdkoydskrC5b9vvjhUomMAiVE2b4VczDLw4cnJ5DTq9B6zmUCb3vMbYXxDEP9CUtBBscVgspafMFt3TrLgBLzF",
  "key2": "2Kx41u5gPQsZ5y7x7ZX6NMboiszHJxUrVsiuHPDazahnx6gwdwh8M3YNTge1ZQ87AgbVPjwSLm5Sw4tiE6iGSitX",
  "key3": "2hFFsgL1k9ZZcY65isQxNM7sf8qm5ar2ijjxcs8NWLReirMsDdx2N841jp6RJJc6teKdq4h9RHpqpzZiqtv9b8NH",
  "key4": "2PWWfzkEcRx2Yx5PAHK2UQHLVKxqxP6JTY9SgtsKmbZjvtAvVkxoGdYBCWbEnEkyvPzHNqT6xD3k3gpT3qP8a9FM",
  "key5": "2PwYUzZAXFvw6Whq4qHiradHD5N4As5NLx4baxps7jsM3JvHotE4rD3BwPRgpjnf7y347qQi9vHSJ9bjF67N2p4k",
  "key6": "4qyrZgZNohRCGVvnCph6fUPyHMGScxtByVS77EqZhudXSAzHFdcy6AtLzVDoPqQvZxwrL6HnNneeo5wDVN7nYzfY",
  "key7": "5rLuC1E6bJFDTZueEwNxg37RZSsvkPgxXEBgGr2kAMdFH76uCnUVxJovHS18x2Gskf3dJZtNJNcqpHSYpPWJP2L6",
  "key8": "5mvX77XaR86Kh54yKnx8Z3MnaUwSj84E8DLnEHxKjZPixwy2k1Fe15jVe8TBxVhK2QL5VLjrYwHQgpofGYfg1v8h",
  "key9": "Y87mXLWKxiSChd2PmAXQqMA6VV2i2M2KR3wT43y5Ayy8DaY96ShnAhZjPV5twt1qbkVwxzcxGscYn2BpBSxPnfA",
  "key10": "kZMcCZqjvcr1eqGZTAev2tv3mHmNeK8mZfd4jjzSjrB2WKUQbNUbqWFMUJCpy7rS5pjtLk3g5ZoUe18GXGwdThR",
  "key11": "2xk7zBkCzNT6WNFGiW4sWAxWioUrMFuxiCNc2iQxik89TAn2xMuTeuhGTAGe4hmYD62bpyr3fwe7TBSCAU9gGiGa",
  "key12": "zydus1di3SVFRFRzPXWanGv3gAhjUawb6Gh7Q7Ujpa588ShsimWfDAWETzkfciieHgnHFeobaBrs6up8KUahuUm",
  "key13": "3PPvrmUHyu7v14zQ3K7oqo55qEHjGzPpZ4sdfoUQpafL1ZRJqUmPGm5BLNAMAk8n17wm8mVCfPZcQpvcrVd68LnT",
  "key14": "afMbiKoa7rKNpc4aL3h7RSoCPSqXMWXDPLFHELPVFTA2QeKJU1oVMXQZAwTdn9EkoCFukbgERdm55ZSPCGMqr1v",
  "key15": "447AfGVwJ7Cgur5kiG9AQtgz13EX5JsKNfnvZnkQrmJ9XmhFWM926A3Y5rJcTy8GrpecX8QdyfgAGDUdGYDu15gB",
  "key16": "3JM17vBtX8ercs1UjR7mZgjrgdvu2Dmn3wNNh5E6fSeumW5PY8oAEBHNeeFaZfvkAsivDsNTs46ne1PgsbqGjb4Q",
  "key17": "3eJRtNjGscjcLKjWVC6eRxbfxZthLF8pK7BdbQtTznQGF8TJhEvkhBKhqzxnY9qNqR5dDxBGS4EcKYwKnZ4UYffy",
  "key18": "4J5U2nm7GfdiUpzrTmtP979DVdE6ENNgMToAHSTPdY1LASj6f3rQuY2bFUy3nSyeUdZdfgiD4VqyLmWihz8JRR3z",
  "key19": "2cYRteXTtqjor4PVaMMcv6pqEqKtnFh9oEAjEBdgSwzjNtaSZ4KUqo7Up5FHAPn4ngmoFJ78FaGVp2fGb7LXCcQm",
  "key20": "5T9LhCN7QoDFxnGB1QQWhssZpXnQb4t9zwTRZKdiNGmjEysZiWuVxs3yzZxUikU17G43Muiid2PZLG2XNSP1na5t",
  "key21": "4XPPLL8yTRzHsUpvt9k6ykyqMTaAdwh71mEBWf9pQxYZBca33628C1dgCctw42pnJnyGR5T3QVMSCdSPWVnciSaX",
  "key22": "3GLqU7EpTcKc1Ew92MPghBtm5S3AuhhuG9AFwn5AYcchZ4DZipBNzwTWMqp2QWSFR9NyZMEuyA9AitChaayq41qM",
  "key23": "3JzUANL5P2mNmN8afaPygeTEtqC15us8X7Y5BAK76Gktk9ywLoPYsznRjqcx6JbgqiePYvAB9UBWZqVXKhEPvx8L",
  "key24": "3Wvzp68Nuy9TKtG5c124exPVkjCj3HXvkzNfb7vZCyrw5z8i7Bn942wnyWiRfrbpJync2Lwy9n4sn6R5Y6uiDK8y",
  "key25": "3cNYB8qix4WjXfw22WKju8mhieENQijPLtpXa8iqm1rnPL7gKkBmbdBPsQSWMuX8NibxWAqTax24y7SPhTZ7Gn9H",
  "key26": "5mkShW6MJPjd6pJPs1wrYkE1oT28HjsgSnSj1cxtc1jsXRLPQLzpvaW7TRzjytkUBQSMM5rBc7v8Q7AjMGyo4qyX",
  "key27": "3fYbqh5MLKUqYJcgNubc1egv9qAGxK5XstT578zbvUNWviyQrAEKzfkssNUx2RNksocSMnS4BpFTMzFpm5MYJt8G",
  "key28": "ZmQcpgYaq6YqgE7xMdEoTBjSyV3x1FBZAcR6gb2FsNYqHeZkxiyUdGh5Z4BHB3xuizi9yXmD4YN2N5yivgBh5kM",
  "key29": "3Y6GDQtFfJ8d2eqMLd9dyvW28NNoqhT8T9EN7Z3ryyfdaF2Lg72xPwou4SzR7RaQSeWghdXCKcvjJ5URmL77cJp5",
  "key30": "5DpE4ATHSoq5c5j4aENUdqfxfoLZXBoE6fd8KBJWsebmaB5GQERrmeQGbJPY9nLaFnxC3JtycRBqxHG5RZoxQk1V",
  "key31": "2Bk6r4S6y4f9DXpp5Nqd7VEUYpSf4xTGvFgdTssi39MRjevVZLNyZJNmpvMAgpr6pWoUQrBfFmo1z8QuiBiJaCuC",
  "key32": "462WStyA4eJXCHiBHsAgX76y5wn6JmXL64GqQjKt2hcehNQQKZR33tTQMTpmH52B23gUsLnUUtLvZrjtjs2J41QB",
  "key33": "3QRfdfkLgHsRPkdhNcaasdt7qPQ2ayZDwYnafrpkDvWQk7nsFrZAJPYciArRAkB9Dz4L1BZ83RAsGbUrX5XrDoqC",
  "key34": "36w8VKiBJrrriDXDS4C6SpTpmho34AvqBY1xCBEh3MHq4SkUw9rrVB5GQnQVFuXyyyA2gH3hh3YMZhfv4jrU4X4g"
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
