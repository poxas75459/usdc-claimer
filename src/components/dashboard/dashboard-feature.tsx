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
    "3VZksPJb5ZbzPx37aBfcVzZ3Uw6MTsYCNBu7EXTVDoFFUTwLvYSAj1gxbVxqEigdhNYY1TabXWYuVtW4frYsnNxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xAuQCgTQDKvYNMuuM9kLsugQXYAKnDkqnRg5WqbkJ9BTTCRDEF4ib1AXakY3GDzcn6snZ3SSJQaJFyoh5Cb2A19",
  "key1": "3rRPiWYSVucGCw3s5ACA9ahpvSbrQpANH8NAY6WJrGMJWB999MP9x6ao4oD8LYpfTQQ5G5om5t7kAxVpdGLRe5cJ",
  "key2": "58eYViXt4f7Ja6GfWp56Li4W7GZJnz91wCMdEMw68sWuyPvj59diuYVM3UFQBNAobNbaEeZtTAiVbwMCLdqsy3d2",
  "key3": "4WcezH6qsB5gEAW7jre3RP7dQnh5oqgtvGenB9vZAMjUeYbkPhAkGvpHr52fQtZ7BDpmUnsdLn4iXkEZh7cMp5XQ",
  "key4": "2jx8tp47gXEkiz5UitcDMS1WAeX6odmVuu6VdPqf8geCdoZHQBPTwpbHurWGR758daEgiGWVuvhUC2uraa39kYzN",
  "key5": "5o2og58w11nxYSXyBDNSYTQ5Pdj4sARiiuSTXN5Vw4787eNo5qeCMSRn4paBbgeZXDJHa78ACynVd8u5o4kHBptq",
  "key6": "3R9HzgJTAJWsTkm3qzG7mtxwKDwAHQEVMyXE2STqx2L1cdycRwvJ6Bn7q3wa1b862JgdTqY5ejnQ6YhLCVusFbKQ",
  "key7": "3mLmhM2rxhLwna9Cr1o415Y5BpfcJGsGjBbcLf13bPf2P4Evzx61N8bZ7cAFvpbkktSuASDbNQEaW5UEWMNA2VWE",
  "key8": "2CFv35Waiubp4ibUNaNwYvaAEWG2MZE8UhzyBteQL9bz3PropMRu9o2gEMYdgD4QHRZkMcnUXCexsnkcDtWyJpcs",
  "key9": "58m9KfUjeuxYrexNW4NehTzR5orwNoAWd5f4AEXCSsQPvY42PbtrhEG1dxGGUQzdvM8m17Sdb3cKgn5adte4NoX9",
  "key10": "3AL3eEV3poM3aVAnUhS9eYBZ79zQkY3RsEJDh2BJkiF61KevhBthH7B6ar8FxH5wuA9Z7vgdxxKJJ6RhEgdKV1Ef",
  "key11": "58vFM83x6t46ughppEtYQ4yTEF9625JU8jdAGvwH9YTBNFPEW99aCfP9v1G3njGH7ErBVKwcwvsKsJscrgykHhPq",
  "key12": "7MtrFewbCMAkp8HYywffWUq9H2TzAkmE151sMd3f7nsNwfKbAUx7gzqPnufaCaVURztckKAgZPxFxBbqpNgdjVw",
  "key13": "5hHtnQprLKJq5Zb9rmrEbZUrHDCmGjJ712ygCcRZTkkKXiYCwCe3LUAoRtnuZzV7WG66NwR1RL1tN6jRbJiCaDsf",
  "key14": "3kJU5hEpeoYUgkHgfmYACXnekTzpLPfxKhSTSA43bDsvjL4V8DzUBhqKXTr7XduhLfU4PTJJBf6PM5J5rSgSjYf8",
  "key15": "3JfYhpZwKVSMmneMeDRAtzMoW735XKC2EEv2gRm1J8vTU4KcxCB4WhRtiKbgMSUT5VyYBF2Saqws3MoFpbzc7g2N",
  "key16": "5dqizj6kqD8zoxZULLQZ3yUhcmRteDzFhCLhk9quJ1AuGGz1kK2S4tUNDWjUEJqSHf2muXX4fFTwAn5qSM8BmhpS",
  "key17": "2x7sRPLLSFNhoVu6RKrJjstTq9xtrnC6XQdMSpyLj4Tn1XdECBKsr1njH7nzJU5JR6DC6Y1wCwnbzMiAAxeSoP46",
  "key18": "4qqKKkYFC17fHX4rYibEbSmSNCS9kYSjuEjWjtH83F4Z66ZYpuxK4cwLqF7fDd7NjwRR4tC4xRHJWnoX4FvBjoYd",
  "key19": "292X6qYt6ezHmZudDbd4hCNNA5dntgY9q1SGAPoG8xii57hCffFjz8ViMqrWtLec4xGLdUNvHZWaetXnnQvSBwkL",
  "key20": "3rz1w54FpDXQC2MLFzHRqRviVbr1pvfjxGoByu64Hbg3VVNK8phkwicKniuiDHKnb5EKM2oDxhsHwpXLbgHwbYKD",
  "key21": "5LU373AotRPvaJ2AYVUXFx3MtyfAgHsfBTzjubeRJbkTP2dmpiUDuX4YuUAzdv5MofEujq12kFsae9qfWzBFZ3TF",
  "key22": "38SccVVfLnq9eUTgUVgMi7AntSjkEG8rxvK3EFQGanZFHAJZ2RQGq5ChmHfj4XUNNW1wYxZ7MwL8P1FfHGm4GUtC",
  "key23": "3FhBDAL7P3sJFwh4kWq6h7TcKHG1v3GZQsaS3fWMfsYxzM6a5K5HVSZ57XvcJHM9667D2v7v2fEhyevUsSNTtD1t",
  "key24": "4HK4EWfq6KBuNF5KQQgANadigU28tS4FwRosm3sZzobwiTypS12zd562ueNm3DWPdpMFDsG3CM9FS6VLhoUPzqTV",
  "key25": "4tYPfUAmZ1EE65ixySeZsnmDJtEBbNYXcUNheVj6ZVLwTjDv4DtTKh8uJeEQxr4XRYuG1HhJ4WQcPpzhPn6y12QA"
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
