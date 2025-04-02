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
    "5JQ8DgaWggFMkY932WjQV7hdVNrvhoYFMse7xETgxbkWNm7jMV2YEzQDmhmxZFjGJNK4fNzzvpLUeTvyPax8ByWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BqMsRXUBQs1vQsfFwZepPYH32JE7btQX6MJS4xVEJL7cACeB5aNwxHfTob3uRuSfeECqnJsqzxFJa53GyhnHEKf",
  "key1": "2Vatkc9AKUewjYqWeMNnKCgCTQTwzGcqsGquwgh8CiVWNjnE1ngmM4phT4SFRfDkFppCQRCScxv74eu6Pdzno6nM",
  "key2": "xxcVUVgn5nDpZfcn5GTS1mJjixZaX7Jbr81QXtjd7eyYAmwsa5HiU9XtNTtPS5zF2TaBdgdmK7uQeaYHp5vBJnt",
  "key3": "QDk9AMMwdmGj3xr9uA1bu1Gyh1ciM28quT6ohgsFR7f5QRhqTnSKiC47ATLsuQwNA8uQRbxfynMAwPqoR6e13Kb",
  "key4": "7uQDTjAzJeXfCnMR2vPBfubnQrmSzB8KU9SsKkwGWhuArLbBPA1uweNXA3JL6SeSyq8YMfiJJ3tb4kJCkqGioQn",
  "key5": "66ZdxEY6cnKRBUVtnfQZSDazqpNY4LjbEMNMmcnNCUvYrsLZynud8MT5Zd8aLkfr6equFWRkRFmQmW6Lfk2RZc23",
  "key6": "36JQR8MGfqyPfpaJajjqwk8v6xJwCrpQ6eavcRtjb2r3C2urGhQy2svvnySygT4w2YpJAxsq69h7EzTie5vscyTw",
  "key7": "3CjVPZGLSWLZGXZBBD4g6Tv6qWD4nAy8cUhG72J9R5MfmTdo3LVhcur99Vy9wERbnjPHF3W4MZQjeobzuaJfVyt5",
  "key8": "5pEV9LWpiRw1Wvb1HNyu87hq7b8LUiVhYrRPLpFwuHCi6VtgTf9Ejg7sXyViR87bFwbH3YMqB5fyZNDVCDL1jgxG",
  "key9": "4qVGLA4HdAodpqtjKmC7wHBYXthQHyVJD8YPasWZwFjsWfsgANNd87qrtUYYidkQVSoU5rsWSE3onqsToazEMUcY",
  "key10": "3xW5jm8ck6BTd8JdquUNRLW1DBEJvia1SRgsibnsEDF6iETVM4XcznfhKW76C4eHN69mgxSyA66fwtvoJfLv1DNq",
  "key11": "2yL9FPf58vzotitUjyL5zh3oCecZY4azVgGW9Dm4qXYjD2AqVSrGJroJLqNFo6dhEJ9PoAatgCJZs1kSARscQcBL",
  "key12": "3NtVRYfdgNa6ZyfmQCTt78VasgYXgSMu7aEp4VEg7cfUvjn3s79fJaPo1kXnhmtbX87EG9dSkziAD7TsnVbTA3y1",
  "key13": "2T37SGPaE5W1QEnAcLvWS9yaBQL1nGfpSKhKUqtiYg3T2JGWZdemQSoP39rhzSUmQFut19M46bhRhtfiZHP3AACp",
  "key14": "JjYunWQXTReCRDdizEQHBGhEgaG1SH4K7S8UgGyoZJVTKzSWYM3RqQP7Fsp2pkZHoFH8e3cELpt8twG1LmJfra9",
  "key15": "3ne8cKyzA5Xc9jtYr5LbLata6fPh4zmvMfvaNoHGd5LtM7iw7FEF1R1fN2HXFP5UYdTufxx8TrqhYk2d3q5Wf8o1",
  "key16": "9FyMhQghYnKwH9611QYA2yw135C2PWmEbvSc8ZBYXiNpKVvNLigG7rZBoVrZ3W8JJjbE89hcU9UUTMqYhjCaz8B",
  "key17": "2FeugQhBorcEJRQbqBPoFWnmxFTDqWsMw4ErDhDkQjZGPkbxgCTipsYzY8QjrtaXKMZjPaLeiJpv3EU4b6Ycxgap",
  "key18": "44Ac47FnnWtSn5psXkAqwJPXiT5drtqnZBB7QHxwG5nEAkTn1Wq5U3NoGTogt9FtYsizFng8HtHnJwzVyh2KpdJs",
  "key19": "3iAimr2w5yMPZGdEHmV6r7ifQqev9vgXcjiDXArjZatL89TxUdPJ9WneGK3EaGYtLPeXq31bV14Q58xhasEXnqmR",
  "key20": "4w1MaKAwzfxsiAtMEtrGSeNhtjaDXmbja9DGTxibgw4re76cFAv6NdTa73TwSbSAVRkCFfPh7A8v97Mt6J9HTdn3",
  "key21": "5tC3YdYrpY6iYiAD8GRT9YGgsY7ahCAu9uv4WxXdMkFtCJ1MDAriCtpMR2h3RG5UXSk2KXThBqt8rJKDTpDvBUZY",
  "key22": "2CDKREPdFB5ydcfcQucbZyrhxvRbfXSjxrMQYhnu3xRfX81yMdYWAV8zW3LgufiTywF41x1KvVV1bvSmFPC2zUBF",
  "key23": "3U3tmBj1BswD9pMugqggy22NPfZgNie9r39cvqNLJaffBUocbbkP25YU5Fp59mie8GBTKfPcnNPkwcSY7rGMyKWX",
  "key24": "4fky5xqyYsM5RdogACyhJJeMGjVZWAyryiAQ3Lo9eNnRS5WSXexj42ZtA9CDbj7oNm79KuzxsejTCmJevnLUqpD3",
  "key25": "AoHuBUq9LoUKQqqDSRX42kULuA1KWUd7XswZrCBDSPPLu5YdFB6BnVN5GbawzSVm1dUL7hS9TPgLcfaE3xSY7U9",
  "key26": "1w6PH5rsZxTBtDuqpyRiX8SfveweGt9upG7CprMT2im6dyNrRZBExpBXckXDxb8PZsycsKm6Z8TnyrdghdB6ByD",
  "key27": "38MBXg6JzbGH75CpPaCefaXkhNo3ahFgtxD8BMpABVUSA4swGU62ARCueb5R1mPbFexkwbiUN9GbDwmtpvK9VfvK"
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
