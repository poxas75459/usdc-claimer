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
    "3A1KVmKHs147Hsb71SFnTSZN85oXBz2LDKwRdvSLAU66vkPKh4ZmquA2bZNHAuuY71NtW9fBUiuc1nmXST9PgzPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31VFt3acqzh3jTskUFGEZguXLEGWqEVrUDKaQX12sUNQjBCZQP853FnXquu5nSyMtQqtQ5a9gPGP466dXaVP1BvD",
  "key1": "33vGYtfGdWr5XN4qJgrrrFUtvM2UFXmk1rU6fnc2aymBTvHQaYfeFkQ9QGijV1J6t2KpNxqPQay3E22KyMZVWxBr",
  "key2": "8C6cq135Vxud8vqYjReyddCZdGBqDcq7zXqPRniAawh7QUGTNUa3mNxTei8xkNnizFTLrAkmYPT4eLtXZJaafxM",
  "key3": "3Uw3VeQorvCtZpqJVY8b5aU71MAHzNDVUen6CHPSFCfktcbQ4NJADBvEXUJYSU7pZ4sGApquPTBC5EEBXBBjUb1x",
  "key4": "2orNmh5zdGoKTYMDFAGymmEVGJfZzxS5X1Hnt24opnJU2NyNEigExtDuRVCUXwWfspf1uPjc7rmGUFEUGbWVy7EN",
  "key5": "24DTRMucRKE1XMPWfAdxFQ2kyKAFmMDksNR41mZ44P6o6RkHkkF5S5zhwptF3egYVr277Rx5ZmryUu6SFeKMmhoS",
  "key6": "4r3pemPdyxkRB2fvZzpGHWq2VYjFzkJk3hi1ewrK3V2Q3APacDd49gU2kmBtBu5RLFMvd11fBFAVBjfjAaoCsVeJ",
  "key7": "CdK5hWrExJafMMrckDXchDvgi6sn7zTFmhuDDmUfC1FZHKf6AKF1qAtcfRBStJWezgj4e89ZiYtALtNjSnAsZTV",
  "key8": "54nPANyw8YMBLu1urKkziTqiqToVZpepxGHnG9qNRDneaMXyK3M9WTtQN7NRbswxQZtkbHLZvjFNPNE3sEKAoBai",
  "key9": "4YMFreeCmaR7x3fGDtN8HcfK6ZHhvUsLA5u3gcdLrjEYga12DybcLtsJCtouwktiFW3GvdoNcmoAHawwz6bNsXZa",
  "key10": "4JCZqWs2TMJtKhHEgnByGib28fZjV7JSPSCnajukurWUQt3uc5Zt2KhgBqExz16K9eJmEbr5ArEUJpJwTxNUxcZ6",
  "key11": "1r4JwtVqVzTZxBXgwgwfD1da8SjXDZfK2qgw6devJiBERgPBUghVe9WHr8f361bTtCqKYX3fkWz9hPaLvCigWXm",
  "key12": "5YKfhPfyKiYxhw55mzBNuQfMsZCiH4B4qUXZkzhszPcJLRnaNa3KFZbbYQBboiCPYr6WVD4LLhvo5LaW7eSL1BwK",
  "key13": "3p4XL1SR2amCxmZQphMZ3GEGwHaYAUz4KiddpXymZ7yq4uF6hbyPJqETLvfV1GqNSok9XQQhsDDPXXWNZsKe4ewh",
  "key14": "3jow4GUeXskKFNewxnyonG3ZK8me7BZ23qKLfSwM7jc78TnoXrSz7cKHmdar5kRsrsA5zsWowPaeheQPuYn5dN47",
  "key15": "677ci8ZwhDWw3G1xMGnnpZFysjtvtiYtGjHDbY2pX5Xj3Fi4nGDijLBJzF3J6rpGbXMcEJa3jGSwiLwHXKn6tabf",
  "key16": "FWXKvsXHxAJiJC8Z3g6ZcDF5Na7b5nA7fZ4tAGN2NSQNw8xJD6izy6VxGmgVTRoLpu87ZbtxjFHS4TFHxBi3uQ5",
  "key17": "4PBfGfMSB7HCSJ3wqsokMFmfyqyJdnVhmb3Vwv3KStpB919wXjv89R24hJSRuBhyqDNY6LhjFphQdZPd6Wp7vgMV",
  "key18": "59RgrtVqrEyeJVCAEJVvsfbXFPXkmD5TgmY3JHQuftfDeEbu1g5fenLsz727GSrawK5hQ5JH9jZbeVv8WDKAEpz8",
  "key19": "65KpEhvC3FBZW7vMYL4k57imEVMCzvvmE1DA3RNuGCPvKPpXKzfE2PoPGfTNugnr22TK9JYEAbc5hViE5sbkhnx8",
  "key20": "2RwrS8NtQvwzn5fxfngGDpDKviK14a6R6wCMuxLgonPmjJcM5td57ccGb8GYbcgji4vuRV6jN2NGJ6VfccBdj1dw",
  "key21": "4nJqyRRJ3w9UbsYKmMVMkXboiDsjqKANC8p8EFiGky1kzuDooy7EmcwP8VNAZP3nrn96GXfV5u8E6QEXN6cR8guW",
  "key22": "5UzhdeBAaGTtsjBfNXgDdKKLZYgL4eKwC3Bj8TGtBe5ofjb8QWYWugLyzWDydCVydg1NpDqeEh6nvr9XURVZyarj",
  "key23": "2vmb6k9GB44QhvGoCsKYtHyJT75vxPu7ruKR6qzD2PKfGazYzDYY5d9EwcGtutKkrSkkaYV29fHqndvjkmnqAzCq",
  "key24": "gxxLEoEspb3x2ssq7n9648PYUnX8nbrUKXBtZPhSKHK9pyTaEqdazRGnifdkMKGLPgYfgC7Y6mzyak54k9T4z1Q",
  "key25": "5Xkeh3z3oDS8FAGd3Lbihcyt1qrsNHofSS3SwwFY7ztKUfPGWzYJfuHAouT8o3Ebn3VFTxZpYo8cvEctxzRmYCjM",
  "key26": "2KBjAmom34WnMmiRmDXUWmMeZ9ujLzKR21tr5h9jDUQNM6SHcCw1Ejadz3x88vgckX4dfEYzyH118K7XvKYqsukL",
  "key27": "3paQp4wH6nWZEkGnRyp4Jw2H67jXNPTyuxTYa4yfX7c9Up8ZQvoDMHZMecyvcEpTQwFehhgL8XWnaqUULNZFPrUQ",
  "key28": "4BToxdLDA2XpjcbnYQwCHjBk7nUYyaoB1TCpXDeV7MAqEUjiree6oTMgab9x8j1LTj624nnmSrAUJLAeFBrhrZe2",
  "key29": "3Z4XiqcsxQjH5rbSjnFZZ5gpNcm5HER8JvG31HSUQcYM1FuhQ6vBb28prWiNUSzymaSqh4opfWzDNwPiR1ZUtw26",
  "key30": "2bk6ZLZHgm8YMMfdoAB3Q2nZjzj4zGnicazd37tb9twGVfGEM2FjQ9hcrvSrb2gY4ybxfifB48jF1iLjUyKAhUHA",
  "key31": "nTeKWjDFdSmQTMzvpZchnVfg5AtDxNewK75NBmgpUzD2aHWTd9zwFLDbW8Afhqk9dbCHZomgfuzVmTqhT9ETfyz",
  "key32": "5YEoA6QfRTxe3BUvuBMcjHw7A8rnMhtzToaW2XTm56oWPbeFwpKUkA7368p6vieSquyfbLZx3T1SVaioNha6dFvN",
  "key33": "4tVGnyyinbcBRW3TC1PeMrEap6q4pQQB4cg6ihpVhSTqAHLA8Kxsg9R823ifKqzSTgabTA1TnH24549K6PhUPcqu",
  "key34": "2r2HChHiGwbsuQGKTuy4xK4m9vqCuxHiuknM6kXcKSctV87d8WTUfvsEFfzEcAxqYs1y9hRmbEFFPDaTTM9qKD84",
  "key35": "2xFegTM2CQnskNo2hBKpRCpyr517x3pKefEvuBvBmevJRvTiCpc68YPQ43jZdcHW2t9ZndmZuwGxGR6f56R5DjD4",
  "key36": "2mC5GvwGMDXnUuExyzuXp82jMfK3y2cqdGLP4QrCaLYDfnfTzep7oRNrruGxHFABFcWKMroLfRBmB2oXTneXFvfK",
  "key37": "4krKcQmdDTkLXw6MUFwztk8mnkKjpdf2QP3oPt2quekNQfz9c8A2tWdA583ggseUn8g6cW3ERkSTDMCmKLSxJWZt"
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
