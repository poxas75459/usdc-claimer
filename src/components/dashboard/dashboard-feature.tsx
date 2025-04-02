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
    "4XvWwUpkeZyjJcx6mmxrkUkgm7pWZCppyqfGbkja6HW2YkniBEudiAeqGpRvET174kC5U8f9j4nAD77a3eTjHX1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBWZV2aQP5sYqT87GJuBSZagXZRPbWTKWue7yLmyBpoQwScfFPbrrTwxEsP5H9GKMsnFP6YjxUQ8dGvrLpggGhB",
  "key1": "25ZdaNqatxcpD7VJuwFoKN5f75D9X1No3oAjwNVKubjATvcFTWQBhCckzrHbuof3yemK2uXgro6QJrHaufKfKebB",
  "key2": "4JQ7siHpD39tgZ6mBVjQDcsQEiE2RCTTXgpMyqjfPiMkkJWnuUoRj9ybkQBuwA1bVdhFiR6xNMKxUPuD5qbkr2Xe",
  "key3": "8ykzvwWHAPDJemfvjbE8pJ5jGvwGE8KYPCPuP3pjPqton6Tj7qJg9BVMFuzqHdQg8un5tUwnxjZJpY4dd7PWEYw",
  "key4": "At2KZeHCC7ZNbmBxGsezWJdiXVP4vExuTCFCkUvGMkbfTYKowBDnPAXYSjjDZzYtnR7GBEL2XZY2Y3ArKoPJb7h",
  "key5": "EhCAkLC2XhhikfE589FjrUXY5g9W6bngzmYMgAjAbbhNGSXCb81t9vstbRDUapnBPGPsE6qaN9mfSN6eECxf2S4",
  "key6": "3cZQ124qUHqfoM8vXL2e9MF4DLS5hpMg9pEbcS3FfSaFS4dNhuqLifwGfLr2WJEky9CNCxXfZbM3f1QaWbm8xQhM",
  "key7": "4Tn5z36t1osAwdJFJVHuxou42JLfSt5jAx8SbFMQy2Vfet6ZY9FRNSW7qiUeB8YF6btcQCQjDHTBvQv7hv1Ai6dz",
  "key8": "5ZPzcYnQE8V7gJkYhQ63UFQtAwEc8VpW3caxvYESpMwot98t6w1nfdqVYS3K37evzQMTWo9jdoYPqdqSdGQZ33hi",
  "key9": "56vvMAWKKPr9c4sS3wWK7eugGSheH9KuUBa7HGqGepv9u3XPeTZT9Kv73CfmmcTTNJyeGS857aFWFP4Ei8jzcmPd",
  "key10": "mKbiKLiMgTsjEveBxcY3B2LVHHAyWjZ35pH9qLte9V8J4NT3Uv7uHDaQoJpd5WRwqQvd281aduxxXjuPufHsxyo",
  "key11": "3ugo6wNy2ez3ZS9ikmJCrXTC9sVo3rR8tqCaow9dVtPzp2odawQPomy1dgChAngA2z6cYybrkiQ48qE31MEVLixc",
  "key12": "2va3uzNihY5ED82PWLWvzPAGLCsdcyPujqecpp8YWc2empEmczV7s4aJd9s415v8dU7tkeAfQk9b6YcqtYug5MTP",
  "key13": "SPjX7vWnyoK7T5Y3rAjYYCeNn5kFsoqtaLnKf6H15VZxcePAPFxL8kaBAS1sWD9Rc4vXJtWDQS2kvQGKt7AJcGz",
  "key14": "8b4j8QXhHt24ZadwMAxHwtYD52CibBHDU1wW5iaRXX9pu9zihEFY7dnuYfZfVYDeR98mqZCCNMZr4JTPwW3mKhd",
  "key15": "4wKfDeo7J1mJo8Vti1NMcLsZHA1Rxq6RXSpB5C7mBPygCfexFKg53Mw4RpW78E6rhx2gRPP7PxG69xobgVPSUkAz",
  "key16": "5cWrPKaAZLTGf9p6ewUE1xX22y3AHp2cYMCE39GXqEmNTaGwKYGsWUwwuJEdCvNAVLy11YY5AhtG7PiEKk317tsD",
  "key17": "3Yf3iVTCfGod2vW9UpbUoD1gVeB194tWhmvqbsuqoHUJTJS7437jsGNA2GV72oGRrkBwaFMZ7NxYrbgcb76VHxYK",
  "key18": "3kPrNs8k5rKds82itvAbgLpuXVs9ynAo3eoSFxMWJFDLcNwRN5QhkdDaLh2bL1cx9157KFvVHSoW2Na4pBBxd3W5",
  "key19": "3oCekeMYkwrN4WbhfeEuV9yxKR3NVM63Fm4DrkD7J2dAaiwPxhMKZ2VyqodupSCsGRpaLM3MwYnPyHLXizUmgDuG",
  "key20": "3FY9muKWaFRMPpLa3i1c6B579uMVtr5U4RLGpwPvsaKpg6Ydd8JdnwFb5sJGVewuegQf118vzQSJr2CeUihpi1Mz",
  "key21": "2Jm8JPkAuXhE6jEHsJz26Qc1DRLe1xZfE7GYhyD7RcK5Lt1hV9XiiYxfANFuLvav94zaLV9g7YZm1ux12CCUjTP4",
  "key22": "iEqPXXHSmWnC7mSNLiLZy5dMBCqtvBszYCnDpJ5MvQiVs8k7jctxB5Zs89EjmUCPHXCc3HTiH9kbN6fRxZiGmZ1",
  "key23": "4gRpE9D9wyeD3s89Six18ZKrdrUq1DdmYupy8SWXcwK3adBqfAT7WVjYj8GGJgU8Bysy9QKLEn3JjxLoaZWr33WY",
  "key24": "3hViLHZfSUnic7d3Gbfj6GC8UirFkoqrpQAKtZyBghofgYfLjag4bVxPk1eDmhskKWkreEM5e9yjAVF4CWAcwTcj",
  "key25": "3xU2migRqkjkCDkS6ZswDZvaLqpCbJ6zbLiCogi2UtpsEz5vkeaa1YprpLaNdFkc7J8iNFqMAojMSjBBFJ7iwy1B",
  "key26": "59TYXtm42FmHYtWogEyrm9v1yrzkqbB3KNYeundeqtfncbVWuBNJca9P4cwZ6egHiKUoDXjWAWaCrGDRpLxJ8fnR"
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
