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
    "2JbFSpsMVQBqFam2ZTTL4JgqHdW6dYrVMa5qmQ6EL9TRFy4Cp8svZjKXB6eaKDxwwZWHFjRDZWWfLiFD4bwwAGwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y7idpcKz8MPm49i6uorxQmkaVhfMm6gbcvSqtjvyErWp4xsdujBkZYo1fg35wRDh7e8QQiiLEECAWz9euMWtFdw",
  "key1": "RvgWDBoXWQZTYeXZZ48hvnoTwN7DrV4Ykuphuhx3vdmYeBRnatN1y5CDzosbP3frszvf1ikxyFk1mMXMfMsGcZL",
  "key2": "5iSqUTzTuBwL4nJ8W64nrR3GBqDy1dQM5VAq7xjkMc5xcyZrHGRf8hWy2NJmenuLxvMUmN2miK5H3Ku6P2VZeeGQ",
  "key3": "51WydQAZyk8u5grp7jrUHkjKB68RbBgtUFAeUfatUpBB3Sj7wCLryR5WM8ksHFKUPDCX3WuoWr122BSbn1j6tPnE",
  "key4": "24XF6idQbdX7zxXqis7cbut6mMg7RGrdLiZeMh6x73jBnCnCzApJTWts4UNxyPz7PUFxYkxN2bPYffdw2iJtu2Ln",
  "key5": "b7WWp2ZGUMrut5VAMMEw91aUeZNuH56YAvCVpjzp6UuTXFsyB7TKZVvz2PEqy3tZVRbpMJsrBDoBBRq1hQb33ZK",
  "key6": "2J7HoKodw6fySdkdAS2YkhWqGzfoiy8hSzEWE2HqbgJACqwj66K2XG2V6w8iUzVVkA1syGsPHxbNbTNhuky8qvny",
  "key7": "3BEUhVo4z8qe1JGz1fj8m8hwMz4qsSMLEdyaX6syMfc5vy62wKxkkRb9Kr8AW9iWs28dZFdW2vHzz48YRzuXP4bd",
  "key8": "3fv1fvWaiByRS1dVMqqHgKDeyxhDAoag3ADow257rvGHJR5GReAKvm54qzQFGpJDANGHZKvsVTGboQR6A2FVARdc",
  "key9": "4FrDuYbuh1kNsfVHfKVhndUiiWzgQ68329xjWJxoWpb2pWwtwuSFSHsXvPVVbnhsyAHr9q6pN14A79sSAFoVurZk",
  "key10": "2y45YJvc71xfQ8aCxrwV3XZJNHTJBGFxrs5yerTo7QxPbRBPqaAxtbif3tRFZaeQ3ZNvcAa654trsKGabtvddRM7",
  "key11": "58CNhunFsQGtBGbNjqX5wMcDfw4TwxtC9fHNQZ8P8vg9q7sh58sj89RzfsHGSrgQdD8ZKymNVGDqYpsKJYFubcAJ",
  "key12": "2A1g4DhjpvgDp7QPCJCSdKfPZmv84FFSSG2SDjuaSWZVPz6FGMF1xT8cppNX7nGoCZXHAUuGPj6ckoXN8NbYoijT",
  "key13": "2tHyDZGptGd8ESscdK7rmtShFjCL24v5gyrnPWSWzadasRdvw9EYM1eLmqtN65gXqng8oKo1C63P3o3DR2bCHpTP",
  "key14": "3ofuXnAxBx254uTQQtdhfpzJT6WWF7dj1o1KH2r7MvRetMjiiprAsRYnCYsRoHAVDL7Xxe6k2RvKoDKh1C28q1ZB",
  "key15": "4Zkv6uBS5yZBQko2j7LtqvKGRoh6k3t1jW3QQ3vSbFVHJCxQbTvmnRHR4ZNNcgdN2hQcUhwbogDYKRTnFDSo92va",
  "key16": "akreY6Ue2QWU8Fr8z1Pg5gJ7tKKso64JBFFP1NCBiSmE5pmbDJDp7sW82SWw7foa82RDFAHxF6bBh7oWsvrhpkp",
  "key17": "5xQbBC3vHpk51t43VzigimyjLptmRSRn5Br2dxpz9TxZ1UPUHbE3XHL5tYfpPumuQKUY2AQ5kAfVwrvDfxDkGSSW",
  "key18": "57n1ytUD7RyrJbmrBGbhmVCNSC2bhgrG6pCiqDDddaRkQAxy3ceTLBq8JpPyFxfZ2d2JDgKy3j6DJZdV7mQeEHff",
  "key19": "kvXL4hUHXAntS44axBVVngaZQF7tbPizzzSFYGvtJN5qSJqGPkSKpHfgz93RAoZuCye7zxEe1vbzj1y3DMY3jg6",
  "key20": "658cAE1eUZR8Hw9rEFB9E5aiso889eHi7CgrHXNrJkFEz2V7NvB7iDp2E3XeUeMQpjEAte1dvsDwv1hyLss7u5xx",
  "key21": "55N9jEJfpSPtcXnYG5Pbyh59NCMxsDu4sJFtogfaS1uwyeaBZtHUB1eFXHHkzg1WnDa2jcz9fzzrnGEiMFSQL9y7",
  "key22": "4hdxCLBJGPfpQMFJzPg8sD4btgtEGoACZ829YWgSEPCv9vAjQ2P5oe2ApV9wCPxM78A98G1hrbpbUwm7oX9RdPZM",
  "key23": "2YS4ewN6YUcSzXxPpNYLmEJ6Zo4PJfzvfp4cSPp2KE7hrj1cZtBkJMccLveEEEoArY7hNPhpbiid1qCaHNCfoFsb",
  "key24": "2KUwoLxMjHdbAbQVqcDCUTuZcKDBYLgtMscuhgp5SjNo98jEHZV6MEGzq5xd6uwCugoNAx4niJxTqsp3ucDEJuVU",
  "key25": "49Ygj5D32BzUX5pqSEQmCuuSaQYW69MsKDU9znodQRyMCBuMBVEz3EP3WmAKbjMS3it9pqRPuBPyoHjvCnHLr5rF",
  "key26": "4bHnPYhRxSEVDzq4qaseHnY7XRpWBrDs44HJYozYi41jgJyaLQyYW8BG7amy6STEz8iYFGGnjg38gUvuURnb9QEz",
  "key27": "5pEidxaJujXG2UiVAD8jEyxCk76xWfvtvzWK15F1YUjk4BeSJVAaAKyT52tFHuxAho43GzedUbDTN64s89XQN5mf",
  "key28": "3LcKTrjh6yiKWU2z6qWFdazG6aCUXCFx3NUHkPYziXrzzKdBvDufBkBguchaiX3GiJ45YxBfRtS16ghGNy3A6oTE",
  "key29": "KjGW5uFps3HEnx7x4cobd4mHMUHN3Yyw4YXwYNhFqsPnUwjEnYiJ1ofoUQtTMdPTz7F7334b8qYuAtH2sDaDqNM",
  "key30": "46cecLLnFcWyD2JcDAcSCovgxzEcsYTawrWgyHahdWnofLGyubYZVozwwvvT9MemRnmZHQvngAhcnq9tzGPUzXcP",
  "key31": "57m449H7kAMr5MK4sy4MSvotkCKeAEvu3UY8XKXqZedu7kGZGVX5ha9tsawJY8Pu4qVdG6s95JxerkaMhTDEawgQ",
  "key32": "2M4hrR5VJxCrmEmQZxvyNghtNikRbXMWpmAvezg7nEC7SeKsvhbgz7wQFRXFf7g41LdwVFu7xtdzSSbJtmyRJRtk",
  "key33": "5tBVjNLfWNmwFQjvzvLUSNTDJazfyZt5JRUMQEXcRfqdFvVm1zHydXTTYu3prgrAHwS7HWfAh1SMCZyYCzVJu8eU"
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
