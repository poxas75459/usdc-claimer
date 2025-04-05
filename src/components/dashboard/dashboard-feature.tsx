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
    "4ose6QT6PE2Yf1rwi1G91jcgFdc4hE89oTu9PN4U4mHHfcAXeZUNBcDpcY6r5grGdRJ6iesxEPoYNETvhdrKwu5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mCujyAquWXcrVoZBswNiTK8g3yGZDnzwVPoekuf4tsYC4YG3YdGCFrwp4LbNZNMW8kDp9GLr9QigjASvV5tx3ZB",
  "key1": "4gpEqxcAZHGE2Qui9rLstc5MCohz5K5EdQJbnv9aQddo9N3wo7Tg7vskv7RuepWvvaiBQKF8M8W6mCjqWAphFnM2",
  "key2": "spfPkp7JcjUW7WnpHV6vedD9mivFB6TEvWarqAbVSukAkrf68TY1yDZQU6vPisypBBCJDkmpsdw2u44gWC83MAD",
  "key3": "4ywKhmacv2vJTeYp2gDQCybLosQn8EKj8iaVwdsqsFL8N9DEw5qYCbD8PjTeE2n3oixn2Lad29v5y1yyxLdTggT8",
  "key4": "7j4LxCSvvrit4Goizzsi99nM3cU6Q17ZidiL8Yk6gG2hfmWPKALt233kmWE77CLDBWdtx3nJE1eLi5fdZNVjCCB",
  "key5": "3rqQATX7CTXdJ59ZQzDfsWQFQ1Tj3XSuqd54bHTy4t3L99X4ozfWFN6UGjGERYSr1shPkiCkAuR3YVBZ4HTCY5br",
  "key6": "4etzqrWhAVwFDGu68uwkb7KttaVUV5obko7AHuhF8CJdHvjR2zGAES8wUEs5UzFjyUU6QagWk4WoLN3zrPkgfdCT",
  "key7": "gjougyfQQqwNcHgJhrsoN5dCigtj2ABUo7ofJqVyw7qhCUvXKjEsmNdLy1tPYesHRjueZPwBYTwJZtpMxCwn9kd",
  "key8": "3k2U1MiVjuQZRFZDYJxAk5aQZ5uRGCXcty8o2yVybbPe3QxDxib2Amb1vbXpSUzUgsbujv8gvejb3NdWPqCjQr9r",
  "key9": "vhJNhPdGDU8FLpiGXGLewPj1h8BrozAiTuhae6XdXiNYT3w6xwxDwXKnfvA1Ha8dudLMFKDRckGN4ruJrtUZKoY",
  "key10": "5G1BbWcTbZxm2hEZqjYAeB8XxgqaQw6mMWPrUP9ieftHyuspD2Z7fKN9tqT538Tbr2JcLB4Xc3SbGPu6vRL3ghDR",
  "key11": "2fmKc5BLcqwVQgyPSRnXVctsyxCLarsVQ13dpW3h1L2uzpVphn7GQk5xJgvZM1JFksEZ6X7tcgoxwTgZLL2iAuk1",
  "key12": "2GAyxdDgeVuX5wMH9DLT6Lw2Va5vEjt9psBk2rSU2wJiqrbrcJTLUGbKdogJau499zXuoKviAQbjHdhCuf3NNNR8",
  "key13": "3pXGHMkNneN436YsAdnz1jbnrTvZhzKjB64okUGnYTdhdonLmGNsn3UmuW3PQucrs2swsxc5Wtc4BEXTTtVjHS74",
  "key14": "kqENaWHJsqNwggGo27t6PkoMLJJYu9bKhoERtb4gXCTVz6isuFMxfVv43Tp7ygccvMQ5j3A1KZLg6PBv8sQ28eC",
  "key15": "29Xvh9cgN61eUC5M6D5WuaP7aWx5CRKNmQMiTCEqP7LRG8b5seiuLudvDYFecfyLrMh8XfU7g9eHK4gwoBedp7my",
  "key16": "3457BnYfkmdmhFRSZy3NQnb6r6oZ8sWW2qKZFxzahhPkTXY3KgGhrhshAdp9yR9TnaM1aejGKsuxHAEgWDjTbfmP",
  "key17": "eiQLJjag4CSMMXCwN9JR1matSprGdAQ8RYQ3CsmTyr3haBhEHpZf2xrQCctokKqwaG7fSe58vMVWkMYVwRWnfSZ",
  "key18": "MiSJxNSu6X9ywiaxbF44QtC3LrqyTbmGPPZvVfctXNunxkRd4pEqHQUqMj5Jp5q5L4aS3BGnKhCL4VMe12UKjsQ",
  "key19": "2iAajXuXijnVd1jXzRJNVsCo1a5p3GRaUz5H8vvdteCgxy9coxz4LPij1p3CGbUuFcFiXhdmSPGqgeRtxPU6Y4ha",
  "key20": "5ygdev8sWpv6EZEfzGM7sibDkxNJSFUFqhvbtrSY3gux9zdD8c3CLz4qm1yeUN8iGCfbZjsPP9M84caSnXW2Rmy9",
  "key21": "qdgs2TttJJxG6pkRXppMHHrU78H5CDQz4JWn89b62Xh4zPGsVTBVy3xt4PBb4EMmEYqbuT7c9taE6CysV5bUB9x",
  "key22": "538RMHhnU1ah77n9ZRjPw6KJXuwUkxAFF8m41GYBbynWd3eVeffW8hgKr3CrmKkyxEhwquFWkPq1sYKw6s76qYKn",
  "key23": "3WvusZccmkkg1NoeDX4wjYAAPhwn33KQsfT7e2jL3aQAfpXJPwnmUVEUwncp9653rd4DGQ7SjR14akQ1FkTtZbXf",
  "key24": "5WpBUYP2GyraoypYE3WoFB69StMiuRfphqQzXzKpAU9Zo1uEpz5fMmtAX8haiqrAKfaVTYmpM89fPo7jKvrU2TTc"
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
