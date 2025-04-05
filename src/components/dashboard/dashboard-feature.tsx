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
    "3e9hX7FGzqFwKg3U6ukoPrmTugmkvncHyVgSnP8CeQeywhcDpPSCwtw7D7TEJkqNCEaEFAufRQahXT5iXkcQ5DkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgRd4gR8FsL6aMbJpEA7WsGiv7owYAjmYvxgVDAU6fN2PoM3ZbDyLsKaK84QsQ9SmTgEaJThwwABJunsGuampnK",
  "key1": "4i6rtG7DXyvfTz1eysQZJQYucEKctPCgJNQpaVkiiLJkmdqrazcuLSusmXGeh6Q5wQB4ZbUsNdTHzzQWX1CMFFD8",
  "key2": "3FJ8CHjSGXSKHYZnCEfCGSRCeP6cBhKCx7Mijs9nsqu55GAKvFtBp599su3wZ8aZGKF7hoCw1UmMP4uKSNzkQAoF",
  "key3": "2g1BCA4joLTzSGrbBsbY6nJAsrZuVJGU8QYFmMPin4LqkYxXfrLNTzCsUiMuiBNARwsSFZEJ72FNbf7qHWp8Edau",
  "key4": "3pwp2WcZ49Abf1X7BNR1gGRsuBQT1HdwoVcyR3YxwiPM3Vxx2toK9moCM3SFja2uFEPVWk1X2BSsPnM6PyyTfoCQ",
  "key5": "23Cn8JWv4MkoCXptFjvokxN3LPLERfzkKh2FuFAMG6rAr5KVuvSjMmDRvb5AiUhbawP22JbjxhYmw4Q5DTSdjJ9p",
  "key6": "4999W5A9xsr8pLPqSgB4nythWVBZQv4fsMeFc9FNe2mpLTmNF1sjtZWM3rEkG1KGoeh9BrCaaoHfwCe4NzPY4uEt",
  "key7": "3npk7YMsZYPFdAbpHMua6XviuzBEMK2UXrwVTSHZJUbpCf5PC8rUmgQ9S7NjuxrsT51kEQmLQ23Kpan2kU7sWmvj",
  "key8": "625AqPkeENPQiDSwEUX2freoaH4qxU7dfFo6TM7DYvZyfCFK1x6ihXhzLEx3hXZ9LTh8K5LS1SmUJDXZXcqEnAG8",
  "key9": "4THcfWu3Kf2JPUDbzdMJiBXLio3YDXpxLzjoPJNZaoPNymbB2GRcgKH31YvL9DQRvm2uAfAyPNPHqS32iY4umzP8",
  "key10": "3m718MiM44HcEovruMU3zRoDUVczUi5YsUkufSgeUy3J3VomzQJYmteVHYoroSb1V915p548iRv9JVa6UKtaoTU5",
  "key11": "3dfS426rEZVnGpqQGqWjpDTSRjhqvwZ4zx1Yg9hXQcUTYPqiTBcNeDZUcx4V1XxQ8pGrLPirEcLRZaRx3zwY6PXp",
  "key12": "3GA1bj3VUw1kPLYzqxSuhcxmwGepQW77e5BwWdvgF4af21sARc2ZTYQdVLvubgY7KXBMCLWo7aZ6edaNwG4Y9U52",
  "key13": "2a4gQiwQ9rNULZBpUZwx6CN1QBnBRDnycq1JPFw6Pw4sHvzQmBsHWDQdEJ3NSKX6y8o8f4pvGo9if73g1Ywro14w",
  "key14": "4SjYiVhgFwvgBgrBSgATMtwtDxzqyL6pZZ7FXMqLoHAb2uFktAPMPrjBq57PzvGduPUQGDWbi2tsb6CkLCPet5yD",
  "key15": "5gHH94L3LeTvjXMBfhbxT6qgsNYWRp1fwhGvCzvrFghZdQ6fFpnSWa7VKHD1ABugRPSwA8sKrqurnHy6EKGr1uuM",
  "key16": "3GWzXtgsfxnCMJrJ5dvZ3c9Jb2WEwKfkS5vSmPVfdciVjfyK8CBmNXn9MkupcKyqW8GpWFnaYiVEbSp6TTiz1M7b",
  "key17": "3sM7hwFMX2KqHT3ZkpZCvi9WCLUC4aNC7bvY42UNTBya1GEtvH8SQA8FjsBDuWCKWz6GSExePogbfiZka9gkYfsR",
  "key18": "2JSD1pYXuz9AttnU7wdGRN4eFvFxauLoS49nqtY4K31Yv6i37Dw85Cs7wiRKYJ1njRL2toJsaYTZVTzvf1EkVqGP",
  "key19": "38dxAHz6zyP6FCdSCbAKWaaP7q6ZpomKGGckoBCzqAviz7Zw2Hi2wDwgrpqX5DRUXa9T4nnKqU9e154Defpqs6vs",
  "key20": "3HV2bVgLrFxBcGzuzqzJyxRrvkgU7ovFw1Jc8N3fme8pE77cqUyZSW1beKt2nVpcg9m5ookwSsPKmjh6iRpgU7Am",
  "key21": "2e8Fbta244fP31q97pvatDPKBQc9HYUU2Sz9Sr3wiNYa8emcyNgVDZtMJJLziKoNoxfGPosfS1N3NjXZPXZKkChA",
  "key22": "22bLT2U5HQfN771BbrTK5tZNNNmF6kaBRvXY6soau4oS1bi8X2zSGSs2etLEzAWUtkrzpPomhKgmcUkZ66sXs7ii",
  "key23": "3v2b1Yn3wAnZPtjmJ3En8vDNxUYdAsbHHY9E3PsoRFX3cineVBt1NQJtgtdDuQ7ZiyMvhjTNG7V4pqFA6AcdX6Ti",
  "key24": "285kiQjxpJ84MaeztswZYZwzVG2QEmmZCQg6BpLruRfczUP6USUPaHRna1HVAFoXLaDBiFnF13iGYkPNmpXxRw3Q"
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
