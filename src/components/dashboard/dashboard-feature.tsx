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
    "3NCHzeQjmFLEy5hGQ7EYd26Jj3DAsFtfvZ9qtSDRe2wbDfQ7zheYzwg6tMNED1vdUDFBqnCDTnn2XtMTLRNhPTbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhKJeQVgRrtYwTJ2caeE3uUkT8PffcUG3TyUun9FM6yBLA9tcF7C9KpFvtPqyPRr6gMaLTxKhDhBfJpsDg8SG4E",
  "key1": "gTvexFjWFCCuG8zDDUjN7je9JPFxP7o5W27Zdc8t8rNcbc3zvN7UfTfYBXgd3XEVzCfSPzwaP1M3EnfU5asrsy3",
  "key2": "2wQjdRn2ufmxFL7ixfYBXxuVc3pQFeYAroveVjhaDwzEWGpnS4Ftq6UE669HFqgqxKh2SkFs49MejucjeYw1RZrX",
  "key3": "3iTfzwPFEJVhsrrfuEfdRbq3VABXYuuqxbCgxqiRsNdiJx6zyVXpXSmkLY76kR1KZG3waLKkPjKKXhWkXsRgYtAt",
  "key4": "E1fZYKKfEKb1DWNAPsmK8raMBSFaiSDeN7bpz3A6HdPEbug6pDatZC1vjfvVQ8kPusu6sRUzeuajedZCiugZVe9",
  "key5": "4ehFnG4e5RRNkxn4rwd74WdK3M9eR4Ww68ofwQXRt2XmeFWzcxPT2GzVvk2gN3MPnUUhHa8yHdXTCHmQGi9HaQzf",
  "key6": "PYtjEdX8UrFHeCLF3YvsKJSjP9y7xAf66Pm2G4rSUz3kj12k169rZxPa9Uh9rz8gGUowimV3h3vY5frryjM2bAS",
  "key7": "34pSXteXPsbHpjmsU7F4s33sHqoTbDCKNith2rXfo3vqBydqspHEugJJLYmJs9GV3GFS4EsbPjP1SafGmnmyHSEx",
  "key8": "5z3EnSL9EbKVQ1susWf3DBwEoJzgLeh3CJcBRiuC5rmFBHqJzJ2RvgvPEMSuB9341m8AduvQjXCjKvFfUqCwsoLg",
  "key9": "3UwR2YpfgYVnVwAvfZ22Ghy7MS8NNSuPw91gJ9KX5EgnYzcB9uqMJLWqbfNM3VP7e6zGbnQLpj747LHaciySiaQA",
  "key10": "57aFxvrLw3kFiNDUFLV3T92ExBZFedsvh4BFh6YxrZ1gHWXs4untF6FAHSKeYTvHjvpbf2RUV9kGD1egQvLSoWxM",
  "key11": "4QqfJVVFoRYAmSfR6jyRriWHsvvmriNoeMz2fc5XGWB8GWuQxb8gjMHMPuxKxpmPok2T3a2ypfT3C3YGgZ74oy1i",
  "key12": "3UMMMU8SXiv4HZUpFK1zCuA7xPgS7BT8VV82Rw6rudxoo1ffx2cq5JDeTawkGdPYt8CrT3KUZEc8i4UKtio335LL",
  "key13": "4bQLX8R2dSRGYYQtbAzb4ngZMGxXGF43GPmwjGUBEhMySoR6u5evbnGDLxqgryNfXcvxX1jLa5UML5ACzyj1Bhsz",
  "key14": "2deno9Eh3vLXPQQ3XsKNJDjbHWqVFmSVPhqMCETBnHsuTgnbQcsaWs6ChevdmnAKwkNc1TBLAzXiykqL3DoTuzE7",
  "key15": "3hYNhxf4UWnu9eskk7qGZKLEEGFTeWU1wX1DQw74v75iq27sPQDt9SGwgrmgwd5Sf3UNaGpYiYbzmeKwkeY8yw7f",
  "key16": "44Ps1gnAhRC3derrnWZaBWo3CVVq8h5QPXtfx7xzpKerHHeNvicm25hEnm1s1jTifr6j6bYvQzgemCSw2dEmpFwb",
  "key17": "5FRRac1YGogwHgQcDrgLuhVu9iGHm123fjV7q2eTRzf3k1KWfAU7sEiRZJEaRppYjU2oxaVLYrDmLtBXamKXw3SQ",
  "key18": "Cy3ACiYgi75p5sZuqv4sJnY8jWQC8TppkxbZmWSmFXLVR6PwGvPPL7Y4vg4hRon7TjaxyWL9wF39fEq4upRyv4T",
  "key19": "292ZTZRQRxdiktmPZHAjbCiaEtY3kWPQWN7aLemq4UgAYHRRuydK7UdjKGe5WKVuw9mvY9w2hUgeLgcci9y33Z1E",
  "key20": "5d2rN4FTTy2bJoKgyK7jYLbaAn9vqNirZdhR9YZYxTRHKPiatvubNX152hTfsN1tGdz18H4Sf7LiqAgWEZeFYFnL",
  "key21": "5FGAZCUbDPcAUWyqPj29Pyh3mvaLzCbXYcginT3GrMeMsgcnE1jS3kbegreoKEs3ZnLu6pmiicJgNmnT381heToN",
  "key22": "3aojbUfNANT41W5hT9wCu7E4c9xsKPzXPwLWrChVKJv9SyH4Fuppeibqatrjm1qxfrQL5WxLJEUaWCmqLntwg5EZ",
  "key23": "4ST8B2HTi4qhLdhhpTbZ2R6kNzfB4aAebgpQN8zF9fAsMi1rotQ38kQcU6VoRxBu2jkot3g5NqmKmGUfkc8vSDeo",
  "key24": "2dG4fgKb2brpVzfjTDvmym2N78P565KmeyVUAn6oWgSs4c3tv4HQuDBP5xf2EqQmJ1iqjAmL1LZJv8PXboppQ4qq",
  "key25": "4ngkwTJrfokNXTEGeCRmnLXbCw5vRTHC7j9WRviWeQ6uC8xTewr62NQU6q19NsVw15nxf1dKZSbBNKxgiUdi2TJY",
  "key26": "3v2c9hEecJ8gSYACU8nUMV8wizgzPQVLeF5zuAFWnLTb91tvtUBS8CVPxTuoAEjdk85ujLueZVP12813ziiyYsD7",
  "key27": "4hE7mxgms86A2qn5DWc8RHU5BSyvyGwdVRKxmwEr6KaAwhSsF3CjFUCgcZXgs6MHg82VDPFDY9cGZ8mHuWbB5rrt",
  "key28": "4eaReitRo835wHoZNEoJqh8TDtfDDh1E1BHtMJLyuy6ugvFugFKPUjNyppe78aKaupF4hcPbKNaMbVyd91yzQfRt",
  "key29": "34HnnPhCXsFVJBGnu1BucdLceSuLD69Udn5QTFa3QQdbPC5SaZwAtw1zv9r2Ubonpkg8gFeuJuZVDw4tRh2A8nLc",
  "key30": "5AhiQV15nAXdQGUQqu6J6gayWawccJ6LaWsxg3bCKf23vaEAju6XFH5oZHXhELaaVtAGDVJ2UsK8Y6UZZyDYd2t9",
  "key31": "3gQS6eDa1WhZPJrEa1nnmfSuibLT2BriNjKfmbGbUX8v5CdVy49CtWJeqTuM5z4TTaKStHugCDFom1o4KSCqF2Vm",
  "key32": "3j5rstP2aCnLPF5WizS7bDgcChggn5SQ5Uy9rEZyaXgyMayE2PH429nQhjSdDaAU5henmDDeGaM69HBjvyFa3cge",
  "key33": "3n7RoBJKPFsJPTekyKvU1WApbo1EsSwrTbRB6HrURz8Mgcneds3sems1rhMYfVVe3CUDAoMAkdsU9XgqybRRC672",
  "key34": "3raTAnYPFAfooSJNC4LNXvdd8gu11Dfe8wRo8xsaN9a5e9FqEDZWLyuAYiDbxs2QBjuxZy3kzfQRuJrni2vaJ2Jz",
  "key35": "5p8LfC1d6oCNZnir2YPJpLqoWXDfAMEACvjhxaWFo3a8faqHThEiySNjc4A7Mz8Ssp4TxiAHN88zRU9XntSvngkA",
  "key36": "HErzatYZVVhHkhGNM82hN3jjqJKLtLkFJBj3fmmkX3jsV9sBFZp93nyJrJkYvmddpWWFCqLcX7Z95Jp9mbd8dd6"
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
