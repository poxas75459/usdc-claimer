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
    "3W4Pc96DL9qwjqUpcgaTfNW4j6Ysrai8ggaDjbQnnamcZiVVBvC5AyCkHBNU2cnZUt6FP7chhV8456pJbq8XJAQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ezHNVh4n9njNHkGpM2wadE15mpAz7JPEJvpLweyunpGqhCfdmiRh1wpv7s71CFGdFKR8d4BLckYzknqvsZtRzfe",
  "key1": "NpN4tU2TFSgXYdxmKH9XaUWXJFa9Ayi5X4ctDvUDUpx19YhhvzZYWLTiCse2ARUkRnGR5h3wdpJCnpDhB9GRqWD",
  "key2": "44kdYTiemqnAfKXwpAseeAfEWSgz5xNaFu4NrHzpxc5Jzr1SB5vvqG2LcyLByg7R8mvFbQ116cANZnx5ZGiTVbG5",
  "key3": "29tR6dMeM67UUo4zTxykxBo3ak6yDC8LVtDdTh4p3joKz3D1frqJXpuxYVupX2UjzptpGxVaL5JED5CQVsMp2wp5",
  "key4": "7TNaFZtuCDmTHTfj4bQ1hjmW4FubHgJ3Jd8db1d8gVxfuu85JzwWRzC4HtdbCmQa87dFquU2iBEngJ5CV1ph1KE",
  "key5": "U3TuL2qprmCKyhJzs7KeEcg9XzHtBk2Ujt9M5tm2WeTG2Xm2V6YVMSPpsgQyJrF7jniX6YHrHqdRGpPazfpg8Mz",
  "key6": "4hmkyWumzr3p2N8H7EdJAFdhE1aYRXeMdiJ8VhfpZhtZUi1NHLmN6HVdPcPCg2SUGzKaBfqtQ36e5Fq4mzo2tBWa",
  "key7": "5KeVMsCgeK4uNNzV3ekxeEU1zvAHPwgMtzZ7aRPi4Dumkh6AEyNt64d5dzC49WFQMpaP5tuoxfRFqUTFNMkpttja",
  "key8": "59PhVAbUqbHmMe3jrw9zQHLg88yaMCQweLNZYFVfhxP7qebfK6JaJ8bccpVTZFxBARZC7c7TybwnS1MKvakV1pjw",
  "key9": "2frmyqBXM6WMzGruWhsrbHhhSBmGv9Z9WxAj3upChZjLB7nGUteWZJC78cyTvu3WqcYG1kdMd9Y7q5UfRpQ9MemJ",
  "key10": "3hi8ZwAzNxgFiA1kNCiMYTC9U4yVTecDJLQf25KAQKGk15BMutrFXHhGRcfPRv33xArg9pTEUafoUB1WezSsoWHf",
  "key11": "2Gm2viX8CKYQkgUuysb2FMMqQ4tipd1xinFosEoJZJDmzs8vWTWDKV9SyUJthe33W8QDLnSPwMhb3Mh2MseiVUiC",
  "key12": "457ghXjyYFqD6soJ2jteNc6CEfn8dHjZrJfdnhuBMsq7F2syeWpfK9a79ew47rAQVTq9NCpM8S3T8s5DoyBa1dp4",
  "key13": "2BPPp3isyEbo8pCGkDAqQ3s8crFrR5RUD1hW8mKdAz6687uhs12iCbEp7pJfaVkkASw1diPiaqJqhDbX4xdKyjtg",
  "key14": "3kw8NQSVtw17immbYftMVSJSfXNp1HjF4a4Don9WdJfXFFa6FPM7EUrp5VGVw9Q9LbLpDBfwuh9RmrqLZMBswHFB",
  "key15": "26NiSwyHpxhguh7thfBh7HYLK4aUaJ8biBitQun6QHHpkNwyn7QLRVU2T3JLtFWYJzxmNH8qHG4BGKVtiPTVT6ZT",
  "key16": "4w37mKf2WAgV9M1oymh1s8RBG7yhPWow2mAy7kPguMvPHyTLybSjicx1rfmj4j1EErCnk97GnrPMRFY1JH8fug9a",
  "key17": "5mLN8qVyMd9BQ1Wr1JbVyEEw1r8mm8wq3fAF4CXsDTmPzust7cimtS9NSH6pVASzntZp3R9XKhfMazSRT27Uhyq7",
  "key18": "3w6Dq7WwnTkb7PJWCrL68eeoJsvZMhG3GfjSqyjP6HZAFKrvew3xDNYTjHo6LqjrTzsVn27BG2NTYkfv6r29EPL5",
  "key19": "4rHbPRmse9JtAsNq8nroNugupZoi27NgaQz7P85wkQn7ZbjG3HPs7HYEyrFfpjxz1gemjY6qzonG7R1wsjdXD2EH",
  "key20": "3WnBfZNNiH6gQUn8ieiNp6DnHxDUncK7JzUysyxHAHQZfaHsbFrJHjj4Mtfk2poSbdwUfCN1N4sQwtypBogvosFh",
  "key21": "5Rj21HdDPSpJvwo91LvmjETzuuxDJA8QRK7ccjey7ruEShKiA1BYYfYNtAJxZLFx1vzFtkCEcsVUuXbSao8ef8i6",
  "key22": "2neugnBGEv6ewUM7cWJfsb7o2yMkTFGVWBMcSg2B8YjjCCHrTZp5xBMjukrCEzckCXsarGhYwyHA2S1XpaEEuRd8",
  "key23": "3N6DogD3bEDr4KAmDQ44oWL3rRnJX1guCXVUpkMLD8Np38UakZwafPcxNka59VGtqEssQexbYqFogpUEXHBMAEBJ",
  "key24": "2HvyBuAZJguz15LvLKNkQgLaRZZajGEUXb12mF4KVoCqqaXCJ6FSmp4aVR2Mhjbmh7aTLF2BUcyPYWQPzjy6Lcs3",
  "key25": "3LaS8knaJxGRrjxHbsFGgp6aeob2Vx6SBFtdh87VdD7MEQiMqXQd1xwh82uRz1LkTSCLi8rQftmgSXSabU1H6PU2",
  "key26": "5QwkPkrxU6nxsiZgjnKEB3Bf25rtRxFBjBJm6AJVtNGshWHTgnjyUpphf9HM5iD8HHXvbqyRTUwqZaZLyYnVAmyF",
  "key27": "2ApQvXx9ckZywrq3h4GGYDw2YL8c77UL9KBeAwSeQusVLrzzbgK1o8beAKDW6k72A5aji6KJUaqRdBwFRYWZQWVz",
  "key28": "4rah7KKjWdjiH9fB8keKGb52BT9gczLFFQUinavxAmFqrpeFAVer4gaT93uKuC4QfZg1iQfQnbpCv1bqkNA3ujEm",
  "key29": "5nSH2DAkfBue7zoLs9yyineDUdyZdGGcdbWzBRur1BZX3cEd1vqkK27gFTW2VaWXQokN22ADJ52EMqSRCKXbHtye",
  "key30": "6iJVvB98EiafjBAbBoXFx751qAe8qBCoadDVhzTX9f1FngFhQqLQSfJFxX95bunAyNFLubYg5ocDKC7szHZsb66",
  "key31": "2H9QSAQbKHiEm3GgrkPUx7vageTLBAfzDukkPKu6EKoaLFRcSHHWW2qsL1H9XwsgeSws7DuUCSrq2hmxKT82Vhbj",
  "key32": "2DcbNfWtwWkXkpmhVZEjUYzoT6FafafGc9ewG7FBgZdzwYXA2zJJvDdsukDq39Ht1NMbyQPQ6dWVYTAUM7Ys8YHr",
  "key33": "3Z4rLPg79zgBScqKAKRB9j7VGAAwCgmFVnheEvE5728UAn988JunHJSoguiDyLKowiQ1hcPxEkXgBEuxC1fDnfxc",
  "key34": "3nDeqXXXxZMSdCksfGMo3LVidPMY21ZdgXXboNHTQK14cRqtU8UWygksgB9BFjHBwBAy43X97g1tHQuWE2Pa3cAL"
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
