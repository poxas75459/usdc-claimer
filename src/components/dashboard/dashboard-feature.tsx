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
    "2QQGGPmxFgjgmroDoWzdjCjXjEG7aZGhZgGq3hC6EM6yk1orLTfmeLyxn7qCa9j5VdCVccQ8tprKz4tuqBELfoZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJsaPokihSLB8PpunLAiGoDaCLaoF3mjEuPPAzpa88Hb54mfLr5pL7XQGJk4EQncDCGrLrwMwCrdyncReGSNmZg",
  "key1": "2iEebASz3GzMyq7rQw7pwfAKuuX14Vuvw3QtHKXSmCrzDibtm8o2LPsbyx7J4UW5AHyFB4xaCo9yFoCRPcEHGg8R",
  "key2": "2QVPbcUWXKfQWaXNycHNmhNRDt1ieEc3adTtCaczxZKUb2XBHbh7Luh6Pni1orD8976buKNiFg1t8rES3XbvkjJr",
  "key3": "58MNdzb3gfGxv8pjur7YXKsVBpefHgJhKyqJAJLsya9hSQmfiQgSAESYku2M4iAzShgqERxnFxX55pgnbqq6SND5",
  "key4": "4rZgJtkHjXoTtUGWyDWzrzYBfuNwFUuGggR8X9djuGgnaUcraLX3SY8tHcF7Q3U9FwgWjZV6MDFn6EZXS1gGNXMG",
  "key5": "4Z4mtMZ7RDB1hHiZjRynxp7HaLa2KCNwy1yUTn62sPh9nE7H2F3mr3ETmvzY7JrxDKRTdd62WRX3eiskf2QvaHR",
  "key6": "3hUgGbAPyBfuDg5ThZhVQyZA39xCeXP1VjMhFw3xZzoGq6k2j87dLHRJcRpDoumSrVbVq3XUabvYswg2gGCYxMVk",
  "key7": "ZzHWqhBrXAPmocNa7tfvKXrmqPtBTZBzkqjG7ih1YfL471DxXUGxAcNMHtpr6Bxinozpj2jpCQmWLMQNA7PJ5Nm",
  "key8": "2mjiyy9awqCJ86nrHtdPNNZKzanxq1TzuM71z2FfgFfPZxqpSNQki97kVNZhF215Z495WDjvSy3AqyoniFnQ6ueE",
  "key9": "5szzRYEyeUo4NuMJ1JKqPXuh6GMMsENzPeh2DBtybdXY6ASxCbwegDD6igtvQrbRMAGFZT85Zt5pHmAMj5zLzfBQ",
  "key10": "21w8fU8QFyTmE3wtYqsoz5yLApkipnyAs7Jgn8fzv2bNpZCEyYm6S5eg3AacvaSetjL7zHKC5hKVChQWMggkYquS",
  "key11": "4MSg8bU9NutUuRggunQu9jmWe8wKco4ZeejBnRjFgEiDGAr6ftREznfoxSHBR2JNbbAQJnWp8GL1i2fm3b2i9nDf",
  "key12": "2YcqNooJV3PTCYcZLGgZFkbe92bxyCTeHagsmBv8J2rAjt1bZZDf83a5dUbqaLeZ3kk2cr5hUajU3MvD1fLwQA7B",
  "key13": "3ppLTmUARbRSySxYECJPs9hR9UwNciePRuomW9C6oyKk3LcWoQVHzMuV53BdVD9cm8aYdnxbPc8zMqBz3WGqDq9m",
  "key14": "WAh857xrScbhHtnGRhaqjxAA3xMEQMD2WURVLTX6BgbzPfmMcDh8xhuM33zCqFU16HxsAxdpEJQE1VCp8EDQzDD",
  "key15": "5xYca9RCbRBnzUJGjRyqZ5nQVYRUbZbPqTnJiSD4BhynGSpHRH3MyE71pNBEkn5AANUtiknc6AKpPhuLLiissnqf",
  "key16": "Z9tx2fbrHJNSRn75TcryZmaxVm2K1z2qUSRTYQgSPVEtccKh33FJZdUJRdQCGaMTfgf3VsqdBT2ZcaUP1y5Nsyy",
  "key17": "52uWP6PRAGYHXMxAAW814upwm8Y67oW4Vup6py66mh3tX84kxjG1zAsTzb1TaeFX4kdaShixMcfvtdyAu3wPEpbp",
  "key18": "66nEhupB1Gu5NKF69j15vSwWTni2XFfcHBRvisGgM55HcTf11Z7RpxtV33irLd23VMMMpzYPBiejxvmzsbVuVCj1",
  "key19": "2YPeruUaYkpvTHphMfrjEELU2NnACX3fSVE5VNixQCTRExTmBwBRaVhsgD6TEkoUg9eDyzgfZWBqMvKqGVzKujzS",
  "key20": "5ZeyZqthCnDViJWQAetpssrsN4SK3Udsp2jcKbEzYqMGBdtRXHqgrA6Lw7NeMJQ4nFSCjX7ey3UmWb9eGLwzB6o5",
  "key21": "5jZDtznXFroabbprDGbUCsNkpZfUbr5QZkfgDChnHsFdoxTvSeA2p5HBQgqERA1PEzYSaZnR5y8iZUt6B5HL2xVf",
  "key22": "4WUwRkCw4caWAr7N1XC3joA2QzvvzN6wZkJ2gR9TjVZkRfZTNuKPMp2gK9tMk1FtoN7TNvCdPxr63GBoXfyh8st1",
  "key23": "64D38kfc9FwGZNfBQkRWrhDUj71v9TNieSCwkZnZhF4AZ6TEfKjNBac8RC5MFTzoN7YGwpaGRueczB6u9QocRshZ",
  "key24": "3aVpvKbvLfwumM99qYgaR5NYpinets8RzNdXiJaUGBXK5u8hsXDoPp8to1U9zGSHQz2kDjp4ezTrDwKEzom9Z7dP",
  "key25": "wguWpoBjygb5PZStS7DZo8Fe1xg2vz7hxmGHVAgiDemLKfbdMLMdqsBfjxqerXTzQm2u5HunwT599Msq2ZtqPSw",
  "key26": "2M6dFZxpMrfzgPXykEqjpv4TxAEMAet1yiKFTDgYVtJ6B2pTGxMq5gmUGGyQLHz8hDwaPheVJrbM7TLFhvDnqpPp"
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
