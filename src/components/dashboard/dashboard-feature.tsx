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
    "fxJLpnUtjLaJP2pBSYxYn4FWCTyN3HzvNVwatJtfN4S8qYbaku4ruytxwKWvWQ8NbNVFLUkJcp7NU8J49RjK5ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ri4GvNCy1mEyczC9me2f5Qmb1fsmCiVJfJKniTQA328m3zvsftNtv5SQhA2ignWbT1eYj6se4NtZurXfpfbyTLa",
  "key1": "t7SWS92GMNb1e2rqipNuMszPvFRUzyTPXH7Nxd7HudiKu22LpYNdBJH8y2VtEUz92F6hWJmbA6HQ377b2Q1xfeg",
  "key2": "5wxJ5FVGV2rFrc398YXCJNTHT2bEEgyzArwX8xH2bLguzRX5F58qkUX5aGC8drWqApV4xA9AyvzeZeRYnUDmuwnX",
  "key3": "2XYKhtZde6B7PyCk4DBAriEmAz3sGquRSgydSSLk9C78U1pq619anBTrJ2zSbQzsdkDUiBFGHinmNNnSowdSWvHM",
  "key4": "3P2Sh5rmudRQdbqH16oh9XwUKostX9W81AqBsaCQ3jUZNMnej4FzhniVsm6Lj74RUhqLE6XjG84xs2DW4ZHhejFZ",
  "key5": "23ptiY7B2msCmH8RyZW62WXQLgBKVZyWGLZxjeftTSi7cbvWZu2yrNJgA8Udmp2pth64kfheVWmaMghay1iJ6Ldh",
  "key6": "GBmWCGqzbTeoyMRBjW1SBtGAm1Tc3XGNwgpzdVwcx8PBhKxm2w4SrVYxcmamCddujob53g4Fc7nVssZMYZ9DUVR",
  "key7": "4e3ZQJDYi6bXW2X3sQNQsQdG3VNWLNdrG7jNUfxR5RqfSZqbeK4WuhW2Gp7CKHphEPPmkAhrNpWCA6zLdyEBsjw5",
  "key8": "yTmjtMav4qNGFuqnufHzSVKW3fbkee8ozjCGLMnDkhEjikN4jmjLQyeMKLJmfkfo1e8NoGGNLwbT5fcjqg1Asec",
  "key9": "2eqVfc9BAxA4pdZjwNdEABFFAu5M8eE4HVJtueRzo4qyyqijeQvkyxKcPEh93C1KBzy5AsaWppyzeGcakirnNe8m",
  "key10": "2u5td9xkPX9ijW4wzXFhMCDE8ooN1F3xGffcvhb85epmFUdLwmVrmTJJZoRh54A7MkXZnBrNozeA6aWjNmreuaZa",
  "key11": "5yAFbyZX8W7kys9bZPGoSct1gWLGMeiU2grkp76oM2JTzxa5QDDbyREYUmPWH8UowFRqohUqEGw6tLBnHqx22Fh2",
  "key12": "4MSZUCjXCdyAQy5EYe8V5Jg13MR6MXuqPfW8wseUEkyTK9ZneVCyePPnWoxZ1TQVPXhEc56kQ1ebz9RjAaNnZvoa",
  "key13": "NC1XhaVBFQpZrJqey4g4c5GLmCCWi1fgihMagRYdRxrNitR4LNRfsohHJ61Uos57wKdShks1tc6afp68m9tCy2C",
  "key14": "2thMXqjYmvWTyc8isnJWtD8uodknQNimRERDyzvK6XePAhtKgVDd7kWWTQeycwLU6yPfSxUev5aHFqXbZz6zF2xZ",
  "key15": "661oFCxNqqBr7NLxedYXUySUhpK4Zeo5JaiHrzKQFhZnNsjmq4F13KuNKqwXT5eGfqFa1RchJkMVCkKXjEpMWEkr",
  "key16": "3yjpF58pS5gp2KzC3fNGBGRWpwsoUPSY9gUUvQtJBPbrvtXW5oxTMVEDe9A7iijudDvxCg4htPcdMsqb69y6GwsE",
  "key17": "4RTBQo9QB7Fg8guR7wNZ7HNGij4hUya2NbtZzFrkBVNv2LYrCFJmKuqi1zjb2qKHLJGWuXViqbENYNGBirLDG1u5",
  "key18": "ZezG2HziCiMCb7edFjyJcUZx1LXyJ9afkX6wSgVAJrF2vAU72DXPX6GeLfQDrMDSPDdALidFXhep7hsDm6u9Rip",
  "key19": "5svhbBnYqMZ2nTY8hHDDdGM68tgz23royhXvugB7EcvU5VKbdaAPZrELg8cpGheQue68j6KRKBmNx9pR1Y9c16zc",
  "key20": "54JVMEk55Uj7ziHvJvCGVpGSZK9py9gwPhvVuKi3NpQRBCSXPmbPgqAfVKjLnthNmGgt6GZVz7jDURxQo9ZaKgb6",
  "key21": "BnfkXRpG81s8oqqMsDThe1JYoj9CMmQnLDzzWTHTJUufQihfGxkB8dKg3aSYrFnq8StAHrXk2UdTyRP1ERZDXHX",
  "key22": "29WHNbGXxEUticLuDLfyj6ZsRRvCMb3CHaiLrJcJTNKkdBbEWSGTcBsAE444iaHHWtB2JT4K2HdQ4mJvZEd7T8KU",
  "key23": "3FocdNq4Wgo2CCzivKptHLg9MEPWCSoSSuoJ6KH3EKcbWWehktNpyWVMMG4A4jh7spgKK5grpBM4rtv2FuCDvdXA",
  "key24": "XfQfMwNf7k6hemZUWRG1CdYAmUTLSKFAwkvb3xiwpLXBB5NtxuVAQ9mamkJFh1XPnYBGwZ1s4TbgsBeqzVAmSqK"
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
