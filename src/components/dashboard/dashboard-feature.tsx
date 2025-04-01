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
    "2LpyaqCVqNv356tawp1r9fRR2FmEpYvHCyxfskqQKCrNJENKQ7NjCZsEZ4ePhMKWUyePxqj47NdzhxFmAEbPwoMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AiDWRx6AoMFwpS6pQiSpyt75k2DNcahwbTELDf9H142QsyAc5179qjovRRAr6NwMbkHWWai1XwdMq3uHqbVGB6A",
  "key1": "2LmBNW5iRxNhKEV5vBdqSuQANJ25FwPxKPi67jvarTUmg8WSoiZjgFDL5jvh82c329x3fNVvt5nHTGhcGybucED1",
  "key2": "JqgGwF4CVG16cbXqChwgizzx8q33peVnWrVNvvb8621Kye1UxDbdnhfZeDySYwgvcMGbzQJBaRTx6v7aCnFqmME",
  "key3": "3vAeFqYjcXpirwqnTgUNEpFz1v3WRWYNh49i8AzpDDxHvqmWk9pqKip1AbTByeBZRXbZD9GMbRUFBNzLQS4P6Wty",
  "key4": "3j6Wx67AyeupC3ttyTTXibJzgTLC3hnxWN6sXLeYpH9Uk8LPKe42qkRbteGabfJLJ5zRWme14B3ukcZ4AYQcM5z4",
  "key5": "2vcAhiy1VmCXFhzVoRneq1QXYiLVe3DgRBVJjJ8Ejn3aedNccAGAtsFZYQDuWUF2AZS4tNnMLksuQVyFGdh3ELDi",
  "key6": "4EKri7h9h79t1dGhWN9yPkhSjTpp3mngJdhwbVC2MWV7F96mv82fGSFTccGjuaDStrkXJq372LrU4MpPwLtAHntY",
  "key7": "56kuvXeREPUvSqjMfVw1dQ9greRCAJBJu1JQDCZMmdRbB7VngjhxuX5Dr673dsPfthvH8PH75wbmBE8rZ8rPaUkg",
  "key8": "3ZVd2fGcxYyAuZxoo7MeJ8a2biwyB6P5wCfDzGEjSS4ytwz63SHfua4VmN9R97sYpKr5afKUCQRxKndpQiXNiT4E",
  "key9": "2qPK1kDWv3HfYB8MPF9F4eiAdxvSA6AJjWxcYUhSMEnEhWi1bUK5e7PyQtKDmTKh1yJwvVMhTYUzbeZnqJVFrwGE",
  "key10": "3Y2vHYucBcayJGJc7GgikmtHABfqa8ekkwpM7xCgBydtyR8QNzn17qtkM1kD84VricJ5j65J1sEosa1Y6HWVtHUP",
  "key11": "7rcpGCGCTJaYcQECRwGMN4pVgtixW8F3zWjd3KeoP88Ad5WgZR8g85akJykN9f9iHZzzXTiEgSokf5wE4t8vSzV",
  "key12": "uxWWEEHvRWSZ78YssnYSGhzRuPRSMsJqGpUnAPkwrTWjXumqWZXYBh7nrmscXtqSVRfTUTyPMXM7NPU9W9E5Bi3",
  "key13": "4N81uzNNtLJfZTwtbfELup4gJudaWLRbRiRijqXJy3yVKUQnEfoLTwx1rS9pC4nr7hiUeoRBqXN5Y4GcCNxseND3",
  "key14": "2kmWBki78u9b15xXRLpZFCUGkvXdSdNzBrSoV5pcMcuLqHuUaBxHB2BBBVzT4Ejr2VMTg44PpQGNHvBobNMCcYiZ",
  "key15": "5xv5rCMXfVHAfvF5ekyT4p63ZdB82CnwhL6aUFLDMjx1MByYVXQ6EyXw6mprfMzKYoUh3YtZ9z2epArKd1Li67UB",
  "key16": "5ELGVSEDSzt1vCwBnxReVqVCSUA8KBLBwXBWLGsQNuNwdseo4vxrbkxzAAUpmBAMaKznBefmeY9iqXCN4uekpevs",
  "key17": "2BcrMPwAaGgWdduyGd2DhVgTJDEAvAxj1mhSGzHiz1oTQzvCz7qbSdpwLQxAEDLKFCYgVcMrWNXV6dHkAc6jXJK9",
  "key18": "5cjtwo8Sdv8UAZG7nK3wMraXiBn7eSHRxskW4WVdZp527DpWjuXAtCiGNPko2FeypPKjCHAhSLPapSa4dQtmmgYz",
  "key19": "qbwwNgzyuFdEh8yyZApKe8nL8vx29AfWqqQmNFZzqfGF65gzpBPooGarkKuPV929mpRroC9oR88o1JUfyMgSUDK",
  "key20": "3xcQWP99JpU2kdkLpMeY3bqrxEytpeH9N9pGzWW8R64p4oAk1XRgTy2YCEgV4QaZQo3m2Be9D3hiRm3NwS6krqLr",
  "key21": "2sxPexVjN32HCvBGtqjmrqMh1Df3AWXZRAQUrWw1sYUsKxph4PRNFpbyS1cPCgEwkrhHSxJevQ1sHEq5mhfZjU2y",
  "key22": "3ifsahzdw9o9mL48wqCEuYejj4VucUg2JRsNCvg9omJDU9UvVvTLyraT9eT2eoQmHexUMN6AQ4akXEcSq2iGtNCw",
  "key23": "5NvQeKh3X4UHg5ymabUyrgQK1r17wdvPZTJ4SPTva4GmKjBMgWiGeQStk112hX35fagu4jvJYnaKVGYg36dFKSr",
  "key24": "47qpSpexqd5NczFGAGbv6BZDtK81s9PH4fjzyPomC1a4s1LJe3Pd6ZWWLHY85JuAH5RQSGt3gZofMZoydriAuVuQ",
  "key25": "tQzeDygtumqGq3V9iHfQ3Qx8CWZuFuWRaud3voLZE7Q97413KXmenJfq1mGaHQHRWdomMSsdTUcmuLd7s17QP7y",
  "key26": "3bC99t5wPY8XEunJqSe2wcnycp8ZeLfT5TkU5Z37etcUzKtmFyxCvx8ggtyrpAzXtoWto4buRAx9qAiJt5wk8btj",
  "key27": "496n4r2pqVdPvoDW2KT3Gu755nZBbPzWjiue8MypyY7KpvsRW2vtZQgc4soWzNiUyfDRLqqUc2BY3L1fuQKVhcP6",
  "key28": "3HkQrd9rEBMYXJP9DfWqQW2BHoNJbQv2wHSnJNm7rKigYLyCPBtzKY55kXvRX7UHvFWYoAAAhHnX9B32V5vno7Tt",
  "key29": "Bdegs3gg6dy7MFtzQRLpqaQc6R3udnSSuSNYKBLpnNibynRFX4KT6kjyX8L5KeE5sNLEW8P3DzL2YcwJtHuFes9"
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
