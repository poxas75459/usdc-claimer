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
    "2CkSbHBYZKNzD4xD3KfXds8fMfhPaHAECMCf9UkSBrnhvRc1iCH2LZH1FRBNQ8M5zCiVuPUKP6o6ygrsnmfw4Lrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TVRv1Qo7mVEJoEsgPU97XLYvULKcr2TmDHe7ofudXdh5FRuuFbp4hFpdwMXfM9aGQYrYjkSfshXFv5QG61utn4V",
  "key1": "iHSWG13qpnM4ujMYyP7e6pUkrM8B1w9vZb5bkFLxtFiR5HYttJXGXWecv6puqT6vhzNCwcigPtvKeqG4fKnCwTy",
  "key2": "vaE7J8pMt4XBwA2zQBCnCVHgV5pFCqzQT2d5s3B1BVBxHozFibBo42MDH5wSsQGQVzUUYV2MCj7wZ62VsBcXfFi",
  "key3": "5uctM4AJpzB7eV7nbvSwCvaRawuQZgeT7sRmb4ffQ7qHWke4b1PMvJxtYqB5DhCrqqdPoTgLq2UxJoR5NjFLw5wJ",
  "key4": "XQsCrDDRR6WCDZShAVHJZiL9GbtVDs9JVGUhnYPfDiMPKiFaKdF71gb6RPo2n3UoamiZM4jY1FkqZQ2qY95pFN3",
  "key5": "2HRR5pSrWK3EEZtJ3oe41XpZEZf1LfpJjxEXTwTvcCzFTiUUnyQaURX7h6s863onuwpZX69zLkJQ4mavZ7nE3M2k",
  "key6": "4PXaiDpYJWRsNfYcJVvcSbWqbVQyY9nMGpmUmXHovtYgWqEjP4YkgZ296HVxkEi5v7LNvCvEcpZ4mkDry9DF19hA",
  "key7": "5NUaU9oFnZAqdJhuk6C9rwo5bFizjdJn9ybVjQSAEo31JT6sya6iYEJcQgf1aCZt84U6F5k3bnnHrdB15Y6pa5MK",
  "key8": "5UP53AjBV83wnqFnAXU6viaXGsDGkuMh8EbMWGDx4CkYLd6qqWBhD4ZA5oKeWQgbyKARD23RFA8b1GgBco3uHdhT",
  "key9": "fk8VBpxWSHPB7vu1LwjGTAcXwv87dKaZebyGtghE1AbTtkxGpRFe2X7PwJCp5gvddgXcVPU5AJadeq7s8nUcXhW",
  "key10": "2GfSQgJQWmk7tm6YAHy1roswBctwUCKKJ68uDwhR1uFXR7tMgRSxkrZvJczxLU1ofEWUTSkww2Ucm37zTCdFgP2n",
  "key11": "5RdvC2Xr4VQexGYeVXyTsBsdUpq5gUYEcVg1JnN6HcJCP4FYEUyhpR1NYa6nL8DnT2WxzBv5Cm3DuygpZTFuK291",
  "key12": "CyXDY6oiLeTmYTprVD6BuwEvTb7g7tbZsbbbqaQv6SQAWzdbjvBFZUiDBStS1oELsyat5k9BoacgKUHhSzTt2ze",
  "key13": "51vCLK9GoDzKrYmbqsvanHNTdtPUJ5RJnKhN8X7QKM2McZxvj5GoNRTZyJrHHhoAkZ4aAY4KB4YQUPqBjWcTxC3w",
  "key14": "2Hg4Q1Mg99b9aPoaChRW2PmARBWPvY2RMou73M6biuuAJ9wEjdcnv58yYsxJgsHNAxu2eNR8EJR9CfoXY28xwjLQ",
  "key15": "W3Fb5FPGVBdu2NPUsw7fpYgMrzvtefwY9G5cnnM8Sv2oQ6dy23wDzne9ZtKgiWN7aWnaNVjJSGREjyr4dr2RvDY",
  "key16": "3u7qa67oQk2bYANUcXKuLu35q7kLHT3MapYyA7dAy7gGufbn6g5VPeWibSWhus2jJsiAk23AGotJrpxbwZtQeEC7",
  "key17": "5oXitejkd4EJHSC4MCijCaEG9PPozWQ7Tjekx1enG3HQAsJyCH8PMoT4xwH5jrba8tGMpky12w3ieC1Bqj8n3Ere",
  "key18": "5hvFfYoSCbgnerMEz3dFe1HPDaXL16tB7KFmBtkw4pJkCAUDteaPPfSgccWMVvng9pPEkfBDSWyWihtk9mzXcM6e",
  "key19": "4V278idKBkJVMvDtY5tiNWkhrehPvX3655rRZyBM8huJCgnftUN6xe5AqpowtgeE7sgSs1hKiSPULkxQVZmAnphY",
  "key20": "42vPZLMjx3CW536Joxjjc8W6KKwHsUaSdP7vwenBf8UydG7xZ1io49GHc8xAvSTapRBnWHbEpCSGuA7nnpMBgwk8",
  "key21": "5DNMH8swu3CYpnhyiBR5rh5M84sJCTmeukvjVSFYv53cB9U2rb9R4vanq4ayjX7QNbtnorULn9JM3BjEUukXK48E",
  "key22": "5WwoKEoZLaz83ft7nwy6x6bPr3vE8fmUnzca9xs8LG2LvsGtZ5vVYf44E3Ga35311DqkcPUUxyghpa4YXbE43Xeo",
  "key23": "5cf5C6MsJyHr2UemYMN5XK6h3CW5U6hXSvETH2g9F3NAGkYp458UQczigXcXzuANSc8zYQ9JG7XLDRSG4uYsdr3d",
  "key24": "3piZcudpBUnLRiXx3Jz1mJLa2odybwTRfWrbcsx3TFpP9ucQtLYHem5arek8xYoTx2PYs9A93NMiwNULCJAPWxFf",
  "key25": "2fdhCvB5Ub2ro2dkKmVHwA1Tdrnk3p1pSJFPHZsKCCtHSh7H7HfRqKZN9cow4VpMkQ5iHk2mHaRyXZJF2gFZWT35",
  "key26": "2E9hTA98YFvVqi8qGuWUFd549nzEbNihvW4eVxUXZBVT5cUJTvQA4VypndEw1iEcf4fwU2mUsJZ8Jgd73oKHk9Hn",
  "key27": "3o7HDzCCXcpio9asWPSnEGpBHjUA6Xn4b8vKAYvdh8ZfREFCkXNAwxPFy6csGLETYBg9kyhv8f7brbGSHUbJzPNe",
  "key28": "3zp5fSs2y2na8w5oH4VHZ4MTkAo1psLJ7hkL51PzJgFfig653f6xtxXxTVUT76ewjzi5yvHi3yJig2CbUvSMoTFf"
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
