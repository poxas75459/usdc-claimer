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
    "61Q8Z4DHq7yDfqyau8GogZBp3C4o2Sh2mfC6mGVn6TeqQwzLvXx3pWyLTJofDvvGeAVQX7PVxtByMF8go8GW6Brd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nBcZo9QxrZiaZq1zcAdo7icyvaDHvH2bi79MGyiMAmYqTsgWf59WKMeibP9GbTvHxAYXNqcCxEqJnMvTZVsyjz",
  "key1": "3qgugshpA9R1pM6GZbQ63Bw1EJLxBk94w188Xqh3BttgpWM7enPTTzvpeye7vgou4uzawRhYdMJjY9qCu5VDroXo",
  "key2": "3qxP9HN6hbq7XWZvnhpqC1kFKZXTPrs2tftiy9EfH4jBCDpeXaKUFbbH6FBzEHGdMqEkYHECLFpXgzS9xQjvEchU",
  "key3": "5bnQWj3xrBGQzgZ4CNj2BGd5HECY9rdWwMJaqC2U3QfmNnYEsyVLc3PsHYbZXA7S1f7vbxsdzvJs1pJwEj7MB7uY",
  "key4": "2oPV1u3YqGa6nMCJMorcejrQCnNBMhmp4wFcmPzZVGtcimLJguQahRCbHj3Y3JYUseoNGj8LxPRjoUTUWFjF8NtB",
  "key5": "25n5haDg84Pim1GiQ3frRJxDtsd5X9uoa65tUYf6xGyemhQCe6TeD22ATMeji4tqiAmT3z1zt68henesmVfRypqU",
  "key6": "46roe8Y3CTRHH1py4QfAy51wA4howtcZJ3p3kqZJW6hRxpKQiHW37HSwv8CKXtzzSgaxnD529TV7S4CSk57bUqnf",
  "key7": "2x7CFN1SevYzkKhQfd7DKogui7an18FMJGNqw37LXrbMjLPdwg1p1aK4QCWEjBiQN1JarwdrzFrJN6YkWKinBa6L",
  "key8": "5BFLNLXSbFqAvTwWpbXwr5HQCfYcm1nfmdT9ujthvjqswCEb7EQkYgarD4Rt7JEqsFWNCQFmuAD1ie2TQNWT5ykz",
  "key9": "2s5q41tdT2ScF3ES5LBQ7p38vk4ecqEGoBP1ehoiPn9M6Ph3BA1xZ7tfGFaKVC6AMPUo3d1x6KQ5Ehnmj9wwSqBq",
  "key10": "XJmjow7DXfhzVHwaLGdvA82RzTTy91uwaYrnmFpJs2H5RhGGjJh1DjLqk4t7fkXo4pNfgvu8eHCcQjTYbu3CLLy",
  "key11": "2AA7kmt4mjh2LtR8DMbrtLhRfxULhRkV3DyiTAG2nKt6NTvMp4AoRXrYmPav9GM281jSyU7pF7v7ApKkJucgHdnc",
  "key12": "2j4WDVrj1dtuQbPN5tfea56wV2pgQ5AjVjJrEdNmTcY4G3QP292KxCtEaLDnLAnZ2tkkF7m6WX9r5iiV5Mmp91hG",
  "key13": "4TZBhYuXHM7dJkdSGu8aqYzUApCf8EZJQubEaTK6Xpo5iY2RAkRhMh7ZnnFSQy8oYYpEnP8iibKHvcHMPB7YBjW8",
  "key14": "4X7EJLy8iXYL2MTfv4U9eGUUkQJssLGpLAn1Ysrp92w79G3DexY9c7c8CHvsPPBUG9JJZBXaH1r8d1DE16WLymCR",
  "key15": "5477EZMfzFg9xr2Utmzp9ELPnXiwmDJpZ8sqtVndk3DXwi2t3B6ozJT71Uvrgh35JUNh1hMVD9vhitLn7h7w1yvK",
  "key16": "BVsBS63JT4ydYaGAQYLvQaUVKhiyaBYe7V1CwYLGYFZ83Rh2co5FWRPSPLw3etTnF4sZskCcnnxwpstbkzkeiTB",
  "key17": "5wh6uzcgxWXnmzipsTzwCFg1W5WZZqyJptQWFXjZCGZqFhBCkJN8Xg6pVoGAgdAAKrNm8gkm7L4E2BFCLwvbex7t",
  "key18": "4iaDG2cfwWk6aViw5gp3AdfhHTDGfuCYfeJHDpBtqsgPQrSRUZAeSv5ezV2LKcPSZFdoDfyrxjs3EhV4R9R3qKfX",
  "key19": "EZ5u1XgT7EBNJ4W5fo5cF2LeVGupU9fpmpMWVxCZ1icJMbGukWcV7mafdBAsQJZiDK8C2LnAWveErHorBfv7RDL",
  "key20": "5ptcTsyu17vLwDai1YL3885F8oVGwWdNZYA9MT861uQGcRrY4WLMXSmkFe3uhDjZyPmATa919rivyyPUoCfagV2G",
  "key21": "38cd8F6GjYFTPsZcAGvsnusCAXaHhaQdy1LS5LthDASjtb7BAMetEhJfw75sSFYUKRaVLw61tByomKCowQofPPJ9",
  "key22": "3oJbaS8fNoCGFsG3TKUZbZ2sTUvamSqM9H49dEsUT3qYhzSaxqwgia377vMus1mqq2X963CXaUuEWm4sM7JX1XnS",
  "key23": "39LdX6LjHgZBt7L4dBcBUh7ZfSk4ajdx6Sp2baSfGkodWT4wP5VjYwJiVGNQjTP65jHKQTvj845tW9joanHM8Ryd",
  "key24": "2DHAGzifADj2HCkE3nmKewbcPxUE58VsHPn4rxo24f6LhSQyyN8cno4v8YAGYacJ3SKt8ueYWJTxJYRaEeMi2U3W",
  "key25": "4ccR3NdrX3uRYDDoRgynvEEZxYz1uJYAqRzQY1LJhvUGVudrTxSSJuk2XyY8AhfSxFdiah6giyVRG8TUENsbe3ww",
  "key26": "WRLw1nhRzqjg8RVUWua6SCjRLSXNCwbu6RLFSrmJ3xLy7vq1RcHf51bKNuUrUr9GXP1oxvPFm9PjJ8TA24S31gJ",
  "key27": "3PajphXmDDEEMi72npxPzF23pBHK7vVyiN9yXGHjwqxc5B7fMQpQjU5oRy5ECTChhTZwrSQZtXb4T3oz5EBkxQmC",
  "key28": "3pdwFjuNr7ZhsRWzhcFWc9hMeD8YM7kgPSDhoz7uvUyC1mHgxtAACq1pa7ivrrpR7yYsidm7Z5utws8haMtBShJw",
  "key29": "msZLkggRswqX458LFz7ueKhG1pemNE5zaKvQTYUxDrPdEwnUtzMZt1xrB1fSDKxJGZNhP9ezvUfRAnKP2gbfBCh",
  "key30": "4sKhobNqRoDNajoPQJQkqk6LGBf9pHe47qLpm4NUqhFrSPpmorrXV6DFV1T6X8MewqzcgUAxKayJaZjg9sf3VTmE"
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
