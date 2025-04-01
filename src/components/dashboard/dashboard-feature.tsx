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
    "3wYc8x2F3CE8iemNPEhqDkycebMLENxv8gwVWrJ2WjuGcK59ALJbgEEb6vvTV8mq6SebXcvtYC19GEPh2NZh3i5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RDUNwH3rzFgyAyYJy9Li3EHiVCzmZu91wTf5GJbcYZisH8ojceTdTzTa6wowARkJGBxD78YFhogfDSmX5cRE9m",
  "key1": "3znpvYTymxjJ45cfarSzUpERKxCHFnqPNTst7aessixZLFgtZ5YdsWrNt72VSaEuivj3FZSuMu3P2FSrbRMj9Uad",
  "key2": "4TytCGnPiCTeFcd7aDVmHt98xYw6X4izLFC2BRKrH3toAgKh16vc5VDGcD8MkEFZnc6GRvcnwWFxHSdjntRX3new",
  "key3": "VqS8KUoQsKYZRqZ1YmHNZA6VrbopLUQNLpqXtCLkppqE6JH2xr9WXaxtQYugpNzVFHZSfZoA5TLL7hTNWx5y75X",
  "key4": "2pxgFucZP3btA79dPWC6pDtdgnj7G5AFhCWeHuWbLJpNfPDo5VNbdkCRRgqdqtSe8XB3qziDubGMGGt7za3vwozv",
  "key5": "FxSuiAToaijrWEGe74V6HB7ogG4GFWxCff6fh64F1tQcxgDxJ3tcyx6VgejhV2Szx6tFA3kNWbCa5s24J545XAq",
  "key6": "2ffnJWcqrnmhGTUNaNP2ea8nqRb6PBqdENPb6hLR4ZeYWoutfFLCvR15yK2aWDCwd3KkZwfMY36Uz9AUkq2zRWG9",
  "key7": "39xkzdEzWHKnKryyTC5irHcQ3xMFxdZ5M1jEsV2RxEoPzWwV5JRiZxVjD3YgMToymMnuGHrN268gipJkm4VAkqYg",
  "key8": "jgeA2nKV2JdKAKJXEfHTc1N4LEZVEPSq58D5pimkEy8eMhmU7v3RgbUrR5aQZGpZtTNW5xGDGVp5inKCVvNz6aS",
  "key9": "5rXhiyC7YKJ2mbs6f1B4QNXL6nZ1KbsEfPQRRCWcrGZdf2EMsu2TENmLNQqGxC9exLA5YrJujD6NV7SYRM3nX9tx",
  "key10": "28kmBTW3SrZwB2ZVEvadSpUB7V4CMcgtjqhmYGRHW3FMeA1N3Cm16DY3jKrfU2U4qf78gDy9r6scoi4vYDVvVUQM",
  "key11": "2z6DatzZgMbEkBZg1Mevvp82DciQfrUajAtkt2CRQZA9yvjspRQWrsw2DiUyyMRcwhCWg7DvSpq33cqKxh24svdy",
  "key12": "2DuWDtiNJ8BK9YEx3zjFAwMQ5v4zmtXfLZtFybSUePdZRz2y887M8SqWqzExyD8gLwpA5WyDbBxCu3ULcUt77BJj",
  "key13": "5U8nH5zQFaj6zhtYSCKywvaoVZ4eX196ro2RWMyP3EFPozDxQPDgwYJewV9ULzZuxRVE2Yq5Dqmt6HDGsHLeW7ob",
  "key14": "24Sr66MurvuWpYJnBKdH4RLPMyu4VEqtXBmDiqws9t5MgrJfzgXse61A6FwLViVQEh9yJfrjuoCdyHCfJbSp4y9L",
  "key15": "2vijKVEZcgcL1J9mEoUduC3BiLcfMZrzu1zgJWbXRw1cKytuHxurhMh4vhSn16EeR4QszYLeqNKcyUDcfA7qc6Dt",
  "key16": "24obzRSUUWZ1tWBhwdAg1yJk6Wckwp3yuSAjqSESVoUHqJJ1aKx1UuQfEd4n3EQR6P5tG1GnAqoT4uLV72ijFJhT",
  "key17": "4Yfv4zWokTs4Hp3HuQmfrPMBhB4nBn4n5mxn9cia4z8jt2AVTNHUuLzdhZwS5QbWWAWaTCP3D8ECUW1tSW36oKu8",
  "key18": "2psXgiNgX3qotggyKYuYpKwahT9XjsXUsrDd3NzWzWmLFh6Q1BJ9vjybvzP5m6FXyFfxqrm8Be6qbaMz74JYcuqx",
  "key19": "3ehounhaYUxKMhpcWpv6JiLYxDPCneLQfbPJuskoHNMDJ4bSa7bN9KLouUu7Y3bLZRrhUMjtJU2oQNMxoTjPZNPB",
  "key20": "k3zZahtT9rNoRWVATQBi93MBY9zt8ow9kJqiXMLHFscDE3YepouxxdQW6DHBzX8KjJfnJJLyb74KkmpHFLnXz7B",
  "key21": "4TKu2unSynbp2nxBcHk1pGXk67hQLbhtNft6Yu19b9TPQ7TTucbP5WbAR13xkxo1xtcuXFbCyJywodHrkj5KhFkX",
  "key22": "5sLDDVMqWkHmbgbx1pKnq1ooYvftgcFFkA9M7RTcWAvYjMggsiiMyBoq7ik7BSjRGAP5F3qJbZT52vmWfwTYHohM",
  "key23": "2uviLygW9GoapypDwuhnsyWryxZ4Wv1eF1X9VDQJtMu3TAWDsbxExMq6bDJURqUN8p2EsAjNXE9mVXrDqFjWMNv3",
  "key24": "289ayokLeG8GjFJzAbdiDscEq8xfUT7Esmvo3Cjm6ee6m5RwHJDk8k2H1VGYUtCaNixyraThBYJDaSKkC2qAit3Q",
  "key25": "3RCJm5f6wfcPFKuZpvKNTJKMUMLQgPn57QHZ5b4YLoApreqRgL5kFZXzXjF6sYg6kLAQVabnxxHNxX31XztkvFpE",
  "key26": "xr3dyvNruwBsVsHy7VaMEnjtEXU3WTjZVZ2aKUs9uFhEvojzFagCTLkAwtUM7VphJf1K8TNGTsRRrX7wWXYjMTy",
  "key27": "2Z2niWXCgeTiBtvm9gMxdBis3aH3Miru3tjPZhagX79jafVUviwGiXMhwkeng1qUEL8XAueMrEcT2FURzUULBq8r",
  "key28": "2QZuRjvZs7R4aPCCpSCKjRnzCKzC81UzfErRhQMBBajo7dbLVgxJn5dL8o2AGyztV4ueJthCYVkTnCDYEfFoPyz3",
  "key29": "3ncbDzTWmAQmRG985aFD8WBW2AZBSve9HRNNJ3pxCeMDzUnvJRmegEB9K8233hFATnG155tqPSFMbT9j6sfmRy1R",
  "key30": "63cf6ZeRqg3XBGGCPohn1YMWDXbqjxBk2UAsP12F5ZU94v4DDGViFvZaCRpdAmZMVC9HgtnuTQc13n9vVmNAKMue",
  "key31": "21NxybxDLTfBeXdCJgxhkroYgxCeRJSWVDiVLmvc18u5PyrJJgeJj9KSWN9unUbfmdug346kVPhGgGkVhmrbiwiP",
  "key32": "5oHF6pEgsPRNRaVaHtaKEFtSH4NDhEm2uMPA4JpfgKRxmPfvAQPza3QEfJxgqoXyioZWBisBHMDY49kyYmEjf228",
  "key33": "8zdi5dthDBWqFGNWxueuH4Wsb77XZcfgV19k2gaPYFdoR94deXLub3bFh6GGXagh6NUYB3e9diZkESRyMFopGQ9"
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
