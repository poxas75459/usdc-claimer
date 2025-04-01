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
    "terNw3aDb2fvft3Si5KowkkckgjcMfGdaibspcxc3o8AQc3ifqa2HAdvs11piKT92V5RaCWDtnCAoJDfwRRcTF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMQzZipkBsN9pVnMRD7t1NnkD7zM79ZDhEfeVG2GmbwobNAecgQ86HvSAfVE5sN4fpvzyhKwzyovLyx14afhAcn",
  "key1": "2pnSmDC9ZhgvYvM8pwTJvcc5HgFSFGa16BvcgMe4woYXXffEjSDpmeMC5Cyg7xtPM8Na8p6nG83Q9eHgeF5cQQRM",
  "key2": "3fP9xsXvN4k74gz97t6djvAEo2CURH3fLQ1rqMN5a98GRZzQwqRr3n7G7pQY58rcaw7Fu34ZazSjEHe8hA1QzkmY",
  "key3": "239b82GxWt7Jb3TZkU9DFL2fyKk9vMEt85pWZUJ24LsT2G8aPDbQmvNxPhADHpc8P2p1VXTxZ3sRfQZTQbxxion1",
  "key4": "4h8a3Z9EoV57jPiuk9Wznvxv4pgt7Xsku577mG2Sx7YbhH4RJLWhKcJPQxdajthGxKsPvRMRmDctRcDpBuL26EJd",
  "key5": "uGGEQcqMXbJmY5zUxptCszYYHJJZbZk6KmSq2zzroyeUJrFcDE5PQscKTwVWtSWxpGwqgJAcp3gbxEEvgUsCKtD",
  "key6": "bpsjCKPQKrf6Htx3Vykye5oTxJc5QawqtYujDz93LiaKRPpKitDGDZuNufkRa7jDCGshDwJSha6ZVmkgZJGUjjy",
  "key7": "uoXMx5LZ5Y3JrRnqEbGa5P2FHfvYVJFmfzmTUxSSwvxbprDCarNnqpNcxmwSdiLm5GEiK4vxsvjcS4bYTGy6Xjq",
  "key8": "2UaQPxbRqctorgfat5rbL3rmdQp3gEQmikXoJ6Wymx3jgjawcKin8zN8qEvX7xTETkSkkkvP6wGPjR16qmvPns3s",
  "key9": "2VQoZevrG2GsngtDbmhg2e5C9upWK4o8ufg6bBUkDB2BPrHZQBPoqYTWUbXZyJZNtvuS7ttSpaG7hgZdRa5cy4Gt",
  "key10": "4PYnoMaLRWaFJLK44s1xjn6ERvHQ6CirW4dNH4qU6GeEu6EnHYYuvVDsyxuvjcqLCf917D8euz6B8AKLY5zobRDi",
  "key11": "4ELJLxW2EhTKV9E81eAxcn1kYQB6fndnDa9Sd2hvYp2wHpxtot6qoMd88y4FNfo9nMpDNczwmsaLHdnNKLE7EwTB",
  "key12": "5twq9tcepJUiN7YNfc5MkKYWHP7JWoKo6ezxEHP5UDR7JnZjHYQziSr5jtpsJdQihLsFzHkqJFoYKDzhr2WaCfhM",
  "key13": "4fd6zYv3PAwGToBG4iYU6dBRbVSvyMRTyTsYx2kaLU9wmwgHuvQLixKVXcrcgG6oeprHyiZUxDy1Hfx8GTTg2pEy",
  "key14": "4SetfzDsHrCnf4bogPuGmN4nWUFyYK4y1ThyKUEjPYrLULz9WYGdfvn885HR1u8zmrxPQwZDTsPRnAz5LQhJ2qpT",
  "key15": "4FG4mJU6M71szzPeNU2EnwwSsDqNum3657oHNjeYgUFghu38bwRFLya8ceYJQSQ6KFejzHJC4qg5TPuMB3pQVjQw",
  "key16": "dTHMCGxH14hhjBMhdRyghQHgj9BypgvzYupBBKV57t9bNEpe1NdLtucKVRPtN89b1eBydWvKKCoGyB1vJX1wEXV",
  "key17": "2F9ZM1YsQzxG4uWtrvzptzd7NgQUqqthc8osFxHepeFYwoMrh8rKmVa8pjtZfzCKjE58Qzs4U4fZ1RCqW4RJ6Ua7",
  "key18": "uvHichNUXfuNaoxSWaJC7V9hqUtFymLhqdr1HRK3hfrhUeP7aqp3SRTggnFVkRgWkKMwmF42aeSBncPYjziink7",
  "key19": "44Px2EQyZDqnUBT3xW6pj26SjpZsCiBpv9eiMhWgg58GRvnSXM5s9p1XWXfJ6LBbHzkdtGJKfMdkDprtXd2iNxhx",
  "key20": "63AFQuE9gqSpMuQAmM9NaMjF5uJGW4Fm2iYDxLpqJzMAH2ziLAfbEiRuhziv63AYvpMBtXCYPm2D1pQxchJrM8yN",
  "key21": "5sTuYLYZ6TL9af5TVjW2X2x4aRvMtyBnyEq4JRfVTiyssDRB17JVNaGJ2Hb5DHCoWePZtNVFGVGDunLiwzpPvXKP",
  "key22": "4tnNUqRSKcC63ekWrp8H73r7WGvxqZz912KwxL7jjcPS23VTYzeycApW85JPaMmzK1tqg614Hx7eUWyL9hLMyEL",
  "key23": "4Jh2E6cPQTvdXmBaQeVRHDSFnwcdqMVHBZPpQ17ayUEe1D2BCHkseMuN16KagTNwZ8uY2EG4gEUyh3RWAbYQN6e1",
  "key24": "2btaQUzi88ZJ7w618eU6KUvVjDUBh7csrZPGGWH4JNwSbYRupboDuiCDxBzw9RvbbUVe7H5qZGJDhyShxtrfm5VT",
  "key25": "nmDoqQPhbE2QKcX1MnC4La8bNx8yLvARpsNK2SNksSBGZn2f2JS4wnE3NsbZqcp2N3bTXNaZ2nSLPDD2kuD8aWH",
  "key26": "22ouvy9J8iVmgPPj4ijv6cRtycLyDDXzW76C8ANNK4rRyiEeHicZi5aDj4TFfas23wMqMwr24894PaWiBvAbT8mj",
  "key27": "2ksfUxrBsjSYQeR9cyFdP2CGqaZaHYNSpj3frepBwYgGb7G8Jy6k4SAKMgpYjv5WSM1bC8EWejcssibN595chNYc",
  "key28": "5267aWvL6GdSsiLr2ZqELQWenrShNYTSK7sgExbmJeU6GvG1gzUej5i7H1mior5jkyNH6HFsQcapEdKkoDDEXEqq",
  "key29": "2r6Zvuxj1SL6q1VsAy35sG3jtwufTND31r6S5KQv6JWhSLEMx3njuVxC5Seb1cAiRbV8KBpFnUD6iEWXsoJS35yf"
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
