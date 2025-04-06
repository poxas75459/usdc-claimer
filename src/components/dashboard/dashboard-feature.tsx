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
    "4K1ZmSwDDoyp89scwTVFMndEKrNVZyeuYYS8zwaHgHUF2Qdbaxza4hkTHFhWdyVhaxc3mqraFDCqVSvTnX9Wqc3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zc9fpsGwN2YArp2hupaifhFURq9J9XPynbFs4g8cHhJfhevpA1yDJoqE4mwhtp4GvnVjY8hT2vkf22dNYaQ7zsG",
  "key1": "21g5ahQbeP7pkekXse8kR2iocifVELgLpz86sYvVa2wr784dqUiHRntGkFApSRYHxs3iEQKM14YVpCniZEHvZdxt",
  "key2": "4NxomrXqudbAWEgYXSc3XJjyBYdy9ixpMpn2JT2rF4XGNtxvA1zpApwcRTTsLnjCLhoBTC3TNKM1RSYDPzXHS8ck",
  "key3": "61YYKxTLe9DyNG3GfkxvpQKqpjTYTm9rxPXwpK5gH6osyKP6SStWDWpSDAfxguzeAXSbnhnBLKEisybin5ucB4g7",
  "key4": "3JgpfoJdL6hGKT44a9yowU4CuVMDKBUu6bY1zgEBSr8dkNc7KL1C81R6MpQFEYnTsUD22H4dDPJKB5rpTV9HbZE9",
  "key5": "5Xd42iJJ9emboXCjEudEKtE9oMLsWaWQsfJgt3Uj54ULoEWWjpg42htEdS1i1NLXkaz31SCDCximBWuja7kfHcoU",
  "key6": "4NZQQVYYsXV8C3tGizSBAvB4C31aTX5zerv12uLRqzsc9ZSVaQf2Ly8cLDVDDRnAbDNhhcncG8sZMWmnF2KziKjE",
  "key7": "5knh5dpJg6EMBc5wLvYSqcdKsRcjbmeEuiP4KwAZwZjsA8ZVK6zx1juS5ypD9vv5dKNjM1G5WX6yuxstnpuK4CTF",
  "key8": "2z8QssvmMEXfXnmNXmav8diamoxvTN51WHnS984sRe79EkV9fRy9GwY8VrmJ2gdP3p75jGU9LB3aRE1uByY3vLcx",
  "key9": "59ja3PXjAhbrS7GLpF45ti1W4ioBCkBco3YYixSATUaFK9WdbVvCjR7rTqvAuV3o4ufV3KevYaw8JwdfFHwKAyrp",
  "key10": "52Q9mZNiCgAwqVPx7rZe9MwZ4uk4gRpFUJYXoFkAjwwRjSWUnSjstwroPRXrjxewQ1tqogGasH6BUHACvLxyeq9M",
  "key11": "36RLXg48A6tMq3z6dnwvSSNTQBFAr95N9NeQ3gV7xgptAzzbDyLTj5ZrRezSJHSutpvcioaTeVEnzsDQeZK4tSAk",
  "key12": "5mpXfZm7hrEzucjpkmmkfWLKw7qE1EGJVXp3A4nf37dr1hjHedpL2H1GNQ3ZdDFW42hVWYPGCtQ63A6vmKezsGG8",
  "key13": "gZ7FZP5BwmpPj4jLPYJM7FqgXijVU2a4CaKzD1SoSqM2Lw7ri8fg4TCuVFv2EjXw7Mc6qDzyvno6bG8s1qSrGPe",
  "key14": "5bjD1pKvvCqY2zHxuSf9eQ1wrHk4ngr4rW7rStMjarpHYaNnHPKc3mk46rjeUg3hDBc8tAba8y2oq2FDJsUozGA4",
  "key15": "66ArSSiGJDihbN3c3VbKt18UH85VyRDTZ3AB6U1BwAX6R9YRucWvcth42WP1nSZQPG7BsGucufbnCLCw6Hu99bw8",
  "key16": "2sFbfrZ74MFLy3hcNocG5mfeGgpQzZADDXRJxJRCjZ62NeMUnge4q9cVnBBpMxxEGmQwFfr53KtA6TVk1oGijnyF",
  "key17": "4xGET2XBb6yYXTE339RjuGpEYYiZC4K68SXJwemkHN9FtaBsyii5Pt7aax7AHoXGjKDzxAgx3ZqkY8PCNDqvAmQh",
  "key18": "VQSpU628LPxiaBwhQ3bWSfdP7DF6i6TXCEjnfz6a98NRnjrgzRxkoy7ro2dHhx75T4pDR3Mowpam2dut2MkxduT",
  "key19": "3pvFvJXS2ERbuk4kHjfbBNaAnTxsbjazd9fUtvvEJY4H2gu1gYLm9uxnPjbxF4Gi8VowpKHqDum6EGuDeUmTbHYB",
  "key20": "4vUsME44TpHz8C5vV96G1nfstY1kWieZvbs94zo4B3xw27HABpfyXDZABx5qQzqDSE8B1ZzHo4xdojE8cTANBBxm",
  "key21": "61ZckrkyTSNPfDtnS7NtS7hg9u1Y9vdRTUXoQ5qhWgZqem8NayY3B4HS612VLgvrDWyTAxf1GevpzX3kr7BjyKRc",
  "key22": "4tX7QSpKZwuheEkaRRQta6zhbGWLn26KctYpCYvSuiZbRXysGdRA4GzUvsMNK9hXKLjy7KQJ4VBx5sbb65HMXvDt",
  "key23": "5q21XR9BqwawhCHeDmZJ4UVdDiuSefG6zgziqa8cZoi1aCCgR6Cjg78rwn4CkYmmQN5gSahmCHqsDBzTvNKhk7oz",
  "key24": "wDBnEeYhwBj9TjhDbwf2bo2Rg9gPQ1rKzqgkMcYhXqMWLVFitREyEeRLC4En8sMZPT9p8CdgADHkyR8CbFhXN2B",
  "key25": "3VMKFi5D6qbMxSoajeSqkBa9sLgCaEqcDAxopYgV9DVfvTnwbnCi4ubkR5skAkWMptFtq9AiTU1qPdHzVV7zfWKu"
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
