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
    "KtyDvaZy78R2u5sMbjK6BeaHVqj9WoPGpEdPGD5HNhpghXVMRu5ya6eEXLe145qnspu6eiaCpXSJDwXx5QwJnnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UnKqyZVDwY3Xn3BboujChaZD8wMgEQD7LiK3WUCSKWzQ8B79xJgpCcJtRgSUH2BbJvHvbznpSqQ1o9X6TcPbd4",
  "key1": "67d4bZr6To3bjNh2LDMcDhdWwCqhzKCnYXPPNgZuW5KEuZ6Ww3M9hJ8jXNgbvnmdXy1SGcY9DGsfgKXGqXdomNdP",
  "key2": "5C4p4AE2rU59BcnVKwRsTbVUTmL2GuagqJJP8yxnZbfobDFSgCvooknpX4p7GfcB86zV6PKqXx86pHH9Jth9KVum",
  "key3": "5T3Kopv8NtQEJ8W66w5RaGxGqXCRW3KJ4wy7MuaAx92fA5fH6mGumTvXc7Nyb6ktoikJNbdtc7CPci8J4iJHRD1q",
  "key4": "4CezocZcv4m1aSPXebpvxHPFG9AsBmYYYuqTiRcPvaNHGVH9qZHWfUyaeaAFBUmfSNj6AYiETkKQL9nNpzW1PXQB",
  "key5": "5E9AX6sjVnaf586t741F8Po3SC6YPNMjFybTSSj8tv8N4nWJbdKWdZbbgTvHwWuQ1W6Dc1eboGbHt42pXnRwSzKp",
  "key6": "4bhsSpf63Jy8GnU1Hy6hDdgobvNPfjaQMnAMKGMPqjiYbJutewQXYHfQDLEpzyYmzQc59uWBqxLuBT9876b8xN5r",
  "key7": "51iHxU18HMT5N4WHRa8A3YV2KXhGbDQNTXz58aCD91DCShWoD33VMxFigohGaf4DBs5y83KyTA6E3iGcHWdJ88Ko",
  "key8": "Be7gsRAWNMaQt1hDzqWGwX9Bg32FL1RwPA6HgAKaT7cawxjERAq9T3tTZDqNhETDvQFPNohZngYf5zv8cBRzTi2",
  "key9": "51JVBFEofxeQezWPn6hJN4TEh8T3PJs3ENx5eGJyCTGvidzFtyJ3iRxLdmgP49bnkJm5bZJwVTckFeJAFTUSFa6n",
  "key10": "4P3oX4ReBUtN6MCcmRvux1W3srK3725DDL26fMFpJukJP5LNByCoNQMRk5cK66XY8SMq6iKNBFJYn9ty619JP3ak",
  "key11": "61wb7eFjjNknRB7KnKByvep2SATULKdwXBcRvP78mByoF2fFWowizYytXoz28ehvoz1GEiADX2vzUdNBHfvpkLjf",
  "key12": "3nCACgfkTzUqHJEhp4BkDQveVX89ChnLHSykEDrt3zu5cEudrAA1QY3D6gBUZazhKuT3qUq1777zukFF8r1UqQ4m",
  "key13": "5djpVdbHQcejM1Wjy2CdUBZYSh2brabWKkGNyRrHnjE8gRNaiJjR7REMCmAnsH7LxqfNPmAjZktjNA7tzuKLKkap",
  "key14": "QaV9r9a1B43uHh4JQE28E6cfp98FJ6J45WsrvKpkcrJw3kvfDr9xdHDZEeS7GxyvrXM4zY1uGtqv9cw577KHUKp",
  "key15": "2FuQohhYMADY4rob7kCuQY11U8D4BcKvHiP6sR1m8QKA9KJj2Rf1RjX4PJB8FuPgKdxE8bd5PpCrM5TQwtjhkKEH",
  "key16": "4T9V8kHJ5xkG28yMyzaHHBpojZTjqVCEhaaqFA4SVSHeHT9CJFXx65iVym4gcd8UcF9NHzmy9yixpyqBY59fqZfy",
  "key17": "5fz5C52J8tPqvZBtzVNRjs8LonPWtC8CPgmE6TtKgAYVhoUTZ3nV2LYcf9BwACYrqdZKqFYKafgMeq28DoY7QpJa",
  "key18": "4ERppTGLGsxyJB9GtE8a7LoxnRkaQZREgVGqBrTR1HiN8DKspLhQwp2ujaRoufiMsTpeWFTESquzmrv8gJM7xDBT",
  "key19": "4DLMfehCKZVWJkkRJAutuRKQqXCUrK81MH4dYRcpkqLwq5sz6gSxUgfVdYTF1921UrrDiNBstyrKHwPvgu3VzkQT",
  "key20": "jmEr57D8ySzT6qQWz6SPysLmqofn1T3w167aQoTEUoQvcpBzB7P2zNMB7BCcCYzT83hvKk1kjecPFnzqFsDYcz6",
  "key21": "64gY2ogHVAXg2zmP2jEf4TcMsjj98NqZc91dGcy9PnxKYSh29BToJtzvLEtWzw1nnuLV9TFtRbruzw4esgA14m57",
  "key22": "5zmh5he8FjjsdDn5pEJH92jovoFHmphRBfnn1JhAF3bAjuXqeQhi23xwPA4tuGRjEDvDWMpruG4QuTFmsJ9aYLEY",
  "key23": "5E5g6BU2quxXgjGXyVWeQaCSU5X1SDM9mtZjf9a9NWZC4mPXvRDWrom79waHzwcFiDKdbneEt5y8EMgmAKJwbjqE",
  "key24": "4coJXBUCsbozVajWYVJuL1ZBwXUoXMYReRHX5fcc7bxxkzxXS7g9ABkstjr9dZoyk5RmzMCBTX8b8oHGwXgvguG7",
  "key25": "3E4yJKmHx1w4zJAZ8JBHDPuj1zJ8ki9mYFxnyXmzAdJ13HEfiXkiHVJPpxQ1UenfuTZfFVnRLKxGMY9CQAxfnraf",
  "key26": "4g2rJkH65eX1i1qFf3LAkZPzLLG7my2ZDxTbpcpLmcniyR2F93DVxPbhpaWSdTL3hvCf4hemuGp1yhaj9kd6bTwP",
  "key27": "66RWRRmK9HvvXJTXrdPR57Z1eLbqagWA5zLs1MxDrDVkRAjLAPLCBdofJJ4igAF6BHKUemBNjctDVjMVa6NbXW5w",
  "key28": "3MstmDoyxmwUHmy1q9qU9S8RXwPUacaZUGpZyho9bfjkCFsvjk7SjT5wCizEjTHPaMzYpVGxzCF1fCF3k4BUj49a",
  "key29": "4hAAL6gWPBPhnApGdUSa5B7fp1fHiaDkZKHEzuNv4gMpma47UFMUMtZfgwP1dQLRMUnCHkURfd28mhWHPdmhwCuW",
  "key30": "dWkRkzy4gq1cMsk1rXsLUZSTftgkzuboZNV2wWnAhHgnTbQuU4wVKnwU1pG3kUxtWJ3voFobY1tnyVC2LeTGub6",
  "key31": "5orTfMbDQVmZCDHFWBfdZg42igcdNkmzpaFye455FJLHkJ2Yaou5d7b2XAbdP1GvPc4rK6g6hpJCnMXLYxkLYS8K",
  "key32": "2a2KCHgx4pKBtB87SRKJPrDcWb1Tq3MDjrMsbobB9EgGmm7wcQKo5dYcuyCidWUtssiBfgw3XCJqq6bzaFX9bCGq"
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
