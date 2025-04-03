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
    "5FVg4Bp5qaKNTYYP9tjrTsusaCy8Mve5im6tRH6PNLZA6ajeWbchARMhwt2ZKoCyPh4SDETvAG2QhAtBWGUwTxZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9rpkAcHCxTWhMZJRdNVKFfxieWuP26nmf4RSHSCGHG4i64EHuQHnUjg3D7jV6vgUyHmLofiFptfgrLjQNfDCBY7",
  "key1": "48cTBAXenXmMAjqvzqXq51s469sR3RCctT9wtE5ovYnwYn73Dw1UDNqsqqUddj1ngjCHmwFhY8m29UytpcFNkHWK",
  "key2": "4wzt4dLeetYDbREBajEBE4zb1eUd1arMPntSfCpz3qs9WRYtGvAsH5WiDH5E5zNZHsbA91XzF1TtiR8BmT9S6Ptk",
  "key3": "36pTYd17bx7aRuMejuku7Dx2AuhLa9S5EDp2DvCQ4CxXj1cPErsxtsrSYgZKofHRPftstQaeGe8REhq5LAWjtB5T",
  "key4": "44DKYexAJM4EDKZxca8DnVPAsdBaQpmi8bxwsr3TUJqcaAq8Gekk71W44wpZnS9Lq5wAgcpPGfKtY5wM4YjWnKpD",
  "key5": "27EzWbBhZEFceanvHQQcYNSUWGQomXcbdPnAifLmS3K45gvTG8jy2UH2fDWpVVUTYQB3jx6budq97ooGVfZdTSG2",
  "key6": "2sk9zKPDQMy7svYsT56yxzQEqGsm4X52hTdPWAgdz2HdX68hERxuq5s2qcrkmkbr6radmraUWuXLCLTMYtH7YSsq",
  "key7": "45Z8SuV4jL7QNwiAfU7dH1fVN7P2DBSJVdH86WuqguAEyXHhPnhcG45dEspJqRYCRvsJbepbLBHwoJ54WXGiS3Z",
  "key8": "JVouTbrvqnVZBEgU7iASDJHSdPA7nQCGxh29KKoAenVXZGrQw6so1Wtz19xXmxqceL23nSG7BdmJaxWdiS548FW",
  "key9": "28STqFsWoqqM7d9w23y5ADzxrPudeYmM7HTua3e9uvUjc4ZBtZdtmy8v4qn4CQvuuC4JjqXEPDHg4cWppDuVP77o",
  "key10": "2LgMfqPs15Frp5LorzFZy6Ui5xruXixQYL12EgqByyfX7NChbe37p5qAQmsjQYBCsAt8SrWChvaavjszd9vJvS6f",
  "key11": "3gFYU2hgFz3zoSzWXokr1vSaagsq2Zz7HQdx81RTVSjquv9zzTQsEns5HJWpRRbHbWQ5CQkyhSKUyyzLWqHibncX",
  "key12": "2aAGGGb6u38h39KEJ5tpVTbiifpMVqiLTcats7hRiaZNUsjntD3ntNGM1zSpxUTUciAVUJ31DLkox7pJPv8YjmXF",
  "key13": "2jZPrfyXZmm1Yv8Ktu7ZjeThsaq3iuj6XKmVncFoJKTKQjH1iDuTfQjPs6A4qJ9JridceaW99UCRC5Ye6SPtVU4n",
  "key14": "3ofAZM8TtwvMiRHyyZLjiFy8EeaoHBxcQJe9tX6kHX3GvA6u5oWsqzz9R8bob8tdsfkk3BoVFP25mmL6VGsWqKZy",
  "key15": "ax7jQxEGSYG27AzGXg7rnBFygaL8M8DTNgrNZUM9jiUthaXFdu6gPpP5yuBfy6TtTM4GudHLT7UNSks4XikLyDU",
  "key16": "2kHCjeQUQQGz1Xsh2YtSpUbTTcxms28jt3s1XGPAUkJaLgYTX9eYzqZQsHVE9qTr8JUm3KSdCcZBCYz4FyiLwrTN",
  "key17": "4NYBBALwMVQzUqvmBjAiAsyKYL1MF7e14cHBDDUYA7XprdQTRTD64QfF44hL5681BSdmjvA63sxg3XT878L1u4qh",
  "key18": "5YPhaT3WecrCsJkM8g39zBTSnU8oiJahK18eWESjY2Y1DduFC3CpEEQF2umC7Edv7evkaF9QaZg7pymZdKRSvuVQ",
  "key19": "3FBWGgDt7Pt8obGyr2x1LhkKwXFC4stRi6w1gvvqgsPmJLECpWg7A3ozBeeL2cnRtZu2AZziP9E3iiAB5cqN2Ejc",
  "key20": "23qym8zNYr3KNNxr5Zoeru427KZPGZNx1U2iXR6eJTdodzSTCKCR94R3y4i8hEDD1sUzbayMZpQ2niFKa4U8WsAb",
  "key21": "5tf9i3HfkiRKxECYHsDMsvgJVMET1VUENhZ8oVr6EPBKQh34QUBxbCSsgKnXWC5yecfKdbUwzY8gZ3CVS11DLmrG",
  "key22": "3uTzf3Ue83j8QsgNF4AXC1JDBwHyBFu6ukNZpJATTYWk2zEaVD6ft3v7XdT3Uz8rSaQU92AbiddfhbGpnaJYh2Az",
  "key23": "4KUiyjSPPGNfSmr5gVxqhuJDTKnAW3AhFGFBCW6vLBZQeEV8zk94V8LCuqW47qfPvscE2uDYYxjsU97fiZmkqCwp",
  "key24": "51qsMQ7mkgdzjLW4LLf3WQXEQFM1cwGpSC1M2Mwb756tRYpYDbZkCX3hiEGydrvkuyzLwKQLJqqLmy4L76EBokhZ",
  "key25": "5W6VkTq9xXpMbJcMkewvwm3vb1gkjjJxyY6GjGPaMXaUxpCn2ka9SCP4Las5PG5QgyfbCV3dKWcvN66Xy91WmyVU",
  "key26": "4TLkpUyzqbrHsqdm6Yiqk42ZS1VBEAoxP5TCnSTMdY3CGRt4kHvdWpdutYVdnpyTm3VDTaFPaXKDFdohePYDxw8M"
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
