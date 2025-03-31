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
    "4PcXjFbgS2xdGitXHXm4RybmKWkHJWXirHC2sP98Fe2m5Ke6yVQe2eSsTbMAH67RgskTjE51FNw96Zn9YJreCDsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZ7mqk2Lzdu876JofVrWKzgDSjnC4fsojmZQVFwKHH5hNAAmYS92hRxpuTWkMvY5W6BTWRJt98hdpLJYcLVBo33",
  "key1": "4gxCdGZq7U4UEjUCZwwR14Ez9Cg6x7k2qnYxpyrrY6R6MJgEc3dCJ1V7QbnckSU7WUwzTCahH9oLs12gGNFXu47",
  "key2": "47HfyD1kVynW6n5nBzJX39hzSaVNnXGCuHsr7vL5j4FGyou9MpsySd8zwc4XnLriGByaVMzxhCfFDgyY84SKqcUz",
  "key3": "5PuktT1QEXQ5AGiFhzbWyAoAkpc9FHNMK8EWQLTfcVyF4erQ1FzLetAXJDwxkFxb8kCzE97bHemN4KC1t3gudxVV",
  "key4": "3ME1sskwuZofPgE8FTtQFeJrfUNpZayNaobekZBd7jF5utixU3vAZg6AUC5cN9p5gmFnBAF2vpiVbbHCWSAPRfY4",
  "key5": "5S6JynGFWPwPkEbvLqqLm4PWQEFX3EnRiSZqpCTqpA78Rwut3NAXS9aX39Eaurvd2Kr8vdhVWDf6K9ASexg7DeoP",
  "key6": "3LX1mgJRneVBxmKDft7wGXUnzCP1RfqFSL6xyhGc8zFqecSavFvCMwg53b3oNsEJpbcS7NXVt53EZoEdpHSHiySk",
  "key7": "3UJQK9oRvUGH43Q3PM9tcBpbayYNJXZEMyxWmsKUQG1b17FerwAcBi2gnbHuqNXB5LL98iQ5N7H1cprLkXyvJht3",
  "key8": "4SmuQidw9A9TAwJVUu5KELbixog9LqZYAmdG2wAwGCsCGFWiFseHPABWjLNu6ijowfwou8XjVvNWwsrfhUetbpb9",
  "key9": "2fhypQ5HBkUzbSkLL5bZMuaydg3chudTGzasoXN54oXA4cWrytV5dKLQNSJGL6cUucov1DX1hQVmR7cNXYS8FKuU",
  "key10": "5iGCtrwYh6eoAcq51Lo7G6HfGMaDh8hpe4jLb8axKJCa2hkZ9iF5VFiLJPEY4UVEghwS1UZt2A4EzxrJqAYsG4Kx",
  "key11": "3Ym6a4mifp32cu8mWg4CAtTTf3KZDdg3f6KH1eMfox3Ms8LJEGT7knc8uJNiC3rpjDFsHMwKyjt3fEVB6PUDFN7g",
  "key12": "4YYB4LKCFzMp8yKwrgLBfU1CkNMdF4PNLT9gQVUDUYWbhnG9SwSzSzpGDvpJCBDmiU8DmJWvktN8CCRZBikCbgpn",
  "key13": "sHsac2UVMwbrahNUzVawskaXaVqGaL7b9XtLLtP2ZYQC25pS8Ht2jh4mkcX5bfJHxLg25nNbMLozXYoAPQ3vAit",
  "key14": "51yHAx5UJfzMkY3dzFKC6b5Dw5KFjwkGiafiQC9RiHeNWN5iPM2yqz7EHGgxQF714NEGPYYuTEnNsBHAca4rr1Js",
  "key15": "2Bk4MyuC1sQFCLus2R8nUYxxPuSt1FATy7g2tCuSQaYxtAfi6ejpe7SX2fYA4XHQpU6NHdjoYjRahwcXmuXLMY25",
  "key16": "roQ5nxjYHogjRdAJWQDCs3WEHteZVuDXZRjAkteQJDuP7SCxJDcKXsMWb6eUonUKBBMm1a4XzPFX6SospxF1TGw",
  "key17": "4XF9U2jgn4TKDiNadGRCZu6yWLm2Ktb3rHsfySgMAtbBVoFEW7hMq8MptAzhwzn83zDs9VRyFKTkFpFnhCkWQrS1",
  "key18": "62oUr6wxhxCHAAweuNyd2SQ6VdU1LbkJxGtQat4ZexwpDoqeT9muj7hJEdgPDjHs1ZmkMZrs5ZLZqyC3nwGxDENU",
  "key19": "2JwD43bRpFjpu52UT8n5L5iA5jmSVUx8NsBzgzeS9dKNtpBGZhpbc8EDH6kfFnM2XKirj3LEmaeRwWHE42wLGsQg",
  "key20": "4dtnURBkZUUdq5eu8Scoj25NoVo2NKQASiNfuT9TkTBEABJbF4QCYWGCAPp5wLsPqVkgHmZw2HwTnkt2jek24Cu4",
  "key21": "4xkqzyK8GXXWcqfv9MvBCXp1cq5UJFtGagnrunk6QsUqntgFUBPBRYt3dGsoheUeE1dZs77KHK3HPUR6X5YYHdjv",
  "key22": "65oFxjDrsUeL2AaTi7NG8scdhiVfa9qh3NQQA82HHDH8hL5UZW23dGXtaPnNYxuqHdk6kg9X8AcFmtNWvuCNbMmH",
  "key23": "2Czg4zV8xN33nGSrhm1fSooG9kkZbhfErY5kHRvssDtsD5dYtB1c6zbNW2AL9pBWXK9cpqxDujnWqg25UXFYzZLZ",
  "key24": "2E96cagG1MkKS9qKwEtWo54gHAJ3t1yCsqMP5APgkQNYo4ErGNYkR9z5JUci9wfnWiXfTcxnW8qNq7mUBxBrzbWU"
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
