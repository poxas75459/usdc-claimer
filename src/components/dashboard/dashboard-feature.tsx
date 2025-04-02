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
    "2dTm6Kq4hrvYgQhbFmUasLzMiHDndsRfj1ca5HujpvDxXWUHpwHGpfvgyB66rKSF4vmhZePbpvcKrzreLuXPvRLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XagDWUBsNSBsJ5jykLaPWdQmQLrh86qNY1PA6TjcaWD26CzNM6Dm7BGiCy8Zt5Z7qQFsPnNBNRuH5kufKPMKtG",
  "key1": "Put84CexpbVDUDSAfMkCpoFWTJGyrgKNuMr5dQCan9pjkjEcpbAjbRuMBCexLMhZrfYhkjA5TXHheeJsETUm9Y3",
  "key2": "2VaUBc6hXEREstV4XJbHCHgfwBbg1FUqjp3QDxeGzSEoz31Ad61yeCoKEypqkzDFVCDAVx3DUUQM2bDAN8CW8ece",
  "key3": "ejNLoFuLGPoVZzSo6Cyy4UXzHvcfGFSoZiF61eVZpT4mBmXJw23PTkNkY54dTGUZ4HGrTny1NNiFZD1NvsYDmHX",
  "key4": "3scRFLiY3QubKYobt8smWcPYXTbJVkYGZXkvszNgbWx7A6TBQRw7Md22YzdciuoLSbF4ESVriYhtF4vNGp1eSszH",
  "key5": "5ubb8G1NQohV6UfauhNWMbk9EhoVTsLecVNTDveH6Bh2wutk24kJnwr3Ey7ystwrKMSixbRQBSWQ1ZWqfsVxfm3U",
  "key6": "49q8kjq1JwvHKH6qhfuc4em4jn3D1yg9NNDcRjeEBrYhD65oCwHhBexn1SZgimcB26UvVVrBhDx1ZfpJBq9QytFA",
  "key7": "4cUhMBewhJWJgMLJQfdzrJufRxaPUN7UkTv7ALxUCHs4Kcc4XGwqzKrwGJh3oNy9QetGcbUFw7sWFMAAiSZWAK6v",
  "key8": "Nyi5eyvtY5UB31VAhX8zTvfb7BZ1zDkViC8WMUg3ujemvaJwBeF6qYiE1KfVTEigrMrEi9i86Smd84tRKUDPjZD",
  "key9": "33YydKRYKKcnguK3BomFHWJ1CQwKuoCCxx4DJLjZgVhtem3qHShWq1JTJK5sHcRYJm358HRWui5zGkzeP9oVG1xH",
  "key10": "4oWiqdjoBm5AJ96pmoXFvThvhWjHnG3tbKH9aHaeUhpVuFEw4JKBUKBxhj2Le2VfAjwUDmdQVJ8PxEykynEFK54x",
  "key11": "3JYr9eR3MEnweQA57YvpvzRTR9nQgUngYy7bDH1M1N1khhdWcc7TfU8WWmGjhro6Kb989iTXMRxx6mHb4z33UsxH",
  "key12": "NrpjN16ELUBYbtfpQx7Psz9ukUZAoqCrZ2s1nG1C9JQge5VpZxApfwBZind23ARM6fMpLBnrEBEJHiyGmbAfi3v",
  "key13": "2yFSZcZiHgaVC3ZhBc5jb28nVDB7WvEVbG7gUG4NE2LYeH7f74aWdi5Y5s9EP5aNRhm7HTbFMCmEBdXNANjuydg8",
  "key14": "4UudBJ38WSR3KGHS9z6DDd1hu85nqEfdHwRB3NxPrg1jBks52VLBurnr766BRxZaEd5KPYHQQ5GDU3k3JAqEbLmA",
  "key15": "2ToRnMhtai3BKadxrEpa5okE3sXvPAAN5xQnc3uqNRapWiwKHPYHzpUYoJKfx4QDtgPzrhwcjh9Nh5JkaXP5Za5c",
  "key16": "3yNdhnqwj1dgmNRDgSWFYMjczPZ9jcDr69pCsaaoYXrZNvsXYJVqCvmEVW3Yv9V9KSfud1AictkmWFpBATToyezf",
  "key17": "z4uPzSpxWUjQBF1UnNrDhHZytdDU5SpC91efBoc5G9c8hzdkF2F4jWMjdu5fZiGHQtwph59TxSsARKF2AryY8nV",
  "key18": "64iW5vcwy1pz2cYQEBoPhKDpeTnW5w7f9vbAcSuR1P2U2vMJzttTD97JsWrjEp63kFKSskEe7cra7dLbwZCKkBAa",
  "key19": "sfS9gz6gB8YVzixsiNFPqpZJENcZSjZkR1t5adsHvT7dMJ3Nve2kDrMJ89uBxN11FMthRo3LgeDmz13r1fpaJHu",
  "key20": "fmkwHKoaKLJZnCuiuyW374UY5wgd2zniuJmBJCZ6FnJ3UrjiZ73tAhgxQskSYYJjr6DEpk3ZzeLGaMxy2Pnwxkc",
  "key21": "3zakAE6kUG6y3cW8i8rDvyB7Yk13v35TH8SMwU6pAH52f4T2JekUPG3CRfTjnCim17j1T3oQhRoU39Bzgr6ZDPof",
  "key22": "5NvLUMxE9RdbQhYtHQvNu5ukFyjVaVtw5AtYrrjw1CJJ3cba9VQSxsaWkNWwEmyHgiMMfsiGD6EejHndxz3Go4jp",
  "key23": "2trGv2sxkyxjmTYVUmv7NQv6TeQM8M5LL4hUV6JZofiaDPYk5ukQDvYQtZ5Dh92xR3nKrXFnXzXHN1dnkZppDjT4",
  "key24": "2YtQ9AmDJXc5Sokjt28BnA4mMnGq82HBKtviksfuQftDUxB124GZ2tAV27DopkrNsGLowgb5wy6XWuGQX1barPxp",
  "key25": "4zLHN8D1PzNLbz3PhboBwuvzQoWHtCuejF5ZkqUHn6VL6Adxvh64uNmyZvTA7tLAG49RTbes2gZBWNQ437yWfQFD",
  "key26": "3S8sBktzPfAju6sPHUXcnTS8GigQ5fEDVn5sC6rZkhGtEf5f5BTZyzcSYG6JpyLbL1PxtWMchQruMib8ZJzFm1TL",
  "key27": "34BsRTQogsjThjxBEszYHMAdFqxGqnjRpzNaCiUA6z4t34dyKh2iFJWfArEa3dmyb6pHSp8nfMJ7DF3KwfUKWAqt",
  "key28": "2rtKywVMWBjMT55LUE8uSqAN82KUFGhQz6E5rd9vfTMWnSENES2iv2kxvMeyZsefGEpj3HwLzBVYDZjQuijz1JFZ",
  "key29": "5hyV6EPu2mKc3CYyF8qw9UeM6uPwgWebdoR3V5tXD6FR4mE9pL7iYvRe4Cj4DgMPFsTSj5CARg8MxCqLFkRWQxju",
  "key30": "5pPTcESsxg9rnRjmmwbYQAPFe4FbNtCpRbgtLnF8uy4Uo9KLAFghEYXp45io476wmvRVYDUtGhuMg4xAwx2wP7YN",
  "key31": "3Wq8dhBFTvh2eqKAP7TmKGwa8o1LJv8XaTgC7qJZ4R56HH1NKGtgFzzDCyS3juNk2uqMsR2nGUAsJgHjNiTDVVAP",
  "key32": "exQfo6ZFQguJQqxKEuyneXaCew6Ty41kvZLijUEokP52fpK5xfv9MFyH3p8f4Jdd5pLXxAs3DJs8QMoGkYSzq8Q",
  "key33": "27UZPLYXKBrRjg7YW1wt9bidv22HdPpduieJpgyydjzHRwKri1S4uPeMZdeuSw5oZcyYn7akP7ttENo62UYKeu4o",
  "key34": "4rLjpHcc5Tj45sYrWsL4GYqRRrCpTkDB2hyh3gj3d25uG6WmneQMWiQtVBXmyqCjtHVrLeAJXPbSSX91PvX9Mv91",
  "key35": "SbVqdzytTHbvYq3cooF5MGv5kyzzvnQVphhcq8ZJCU8ctz8rUojwUbZGi8rYh2FEDzNu7oxbChv3bQJjqFhqypS",
  "key36": "39Hu8imKmVJbvMLi1S1U1KpkARWB6toyhaM1f9zDjbWaxU2QXj6rzCcaTLpFZtDD8iQpk5Mw9LDyUBqCmHkHX4cL",
  "key37": "5C6roGRinwjkdYZowrWkzrbvFpWNKQucg3eGMfLRDPb8e4Rg7F2NSri8si5TNx2ZBhnQkBSkgvCfhKTQPjDdcsWg",
  "key38": "hZfi5Ga6um9u44WxWjx7md3N9AehNgu6P9fsKJ1j2ESmZPV9upNSFsFxM9mJTPPGD42yWb1eiTbHEYbAsTjpE2N",
  "key39": "552mubqHzwuXp1HttGTKe5Ub1ktysZGy4L69oJgZCk1eVCPuy2zLgcqTbNg8hbWuadW66R1zMznBXPqraK6MFpUV",
  "key40": "394sGh9xd75a1k9EJbDUAvYVZeCkenhwN8pCbj7sLemoWcwFahe4ro8gfzh6DD1GSB5XtDh8EFTk4DnptuLqkiiL",
  "key41": "ay3yo2bYvEtxz7ZWEsSXk2cvGoKvk2RcWU8WXohBQDpPju94HDvZisdMYod1zCfbdrma2fAMknGeRUASSfYiFWZ",
  "key42": "4oLzRHHGkDp9eTZsA8K2aymdUVsRNfKVYQg5ErLGcuzNFXV1FrwgJtHDzPsjD4tt5quCfwByNoVTzaVwVxiEHnP4",
  "key43": "3WJFvmD5rk1Qc3V4GybhBo5usRog7sBKrFeNntKVG2zjZkvVJKPr1ef1JZVQ4UUDZkYwWqcrvnSUTkuxmQicwZ4D",
  "key44": "u7qhwgXfGjVLVzuEyw4ZNrhAGv1ASLQbSSfCrzS7FuQ2RAzoQJpgfdhG4bjdzxyRMm1Fh6S4jTcBL5GA9m8hczA",
  "key45": "3DfUf7CtHjAwuXs759hXQ7gEc8qcEQ61Xu9g4k9KMKkbLxtGFxw2NQYVUfgzbL281qWmxGwxJMADhcypJB421yjK",
  "key46": "NTfTNuzY3PpvDk3yWznUr4PQnZBD4wyimeKT46sFf2tW17oK44kUQW8qxcuXhdYsJHHRiFyAk6f8vErwBbvyPnP"
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
