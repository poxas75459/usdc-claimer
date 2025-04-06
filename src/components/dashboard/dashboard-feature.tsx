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
    "5iW9V4Aqcpa87Dk25LsMZidkNbJ4MwHqcPXtRh3McX9W1E8Zfrf1X4PUpvqfoC8YQtnJDNAmVyWAtm33ydBshwDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48bUg8FbcUCnZgZ52QCbunrPEfsz7R2xQfig7t8wEsbG53Ht5YSaMb6Lm3fdhhc2PTYmbodPPdiEeZVkaRc88o6a",
  "key1": "4D2tryMebsqR31jA1GcZG7arKZxySwhSdiVvNtPjVMN9rVadkTeSxvJDbnEmbpEKK5a4ZMv4AMeA45gtbnV1oDyv",
  "key2": "2wvSFvJxxEBZz2pbjqgrz3g2fb1BBHkKrYQDhHNeqAxNRhfBpDPbbCotxhwuCbScuSK68P19tnobEiv6sBSqSM8K",
  "key3": "5tgKiChdjciyCfRLdoeD4hxvqwP1HpLJ5deUMMHvuMfYK3fNCTQUiERz6bfHE5Y9PHyNboMiMvZNxXykixmuSKks",
  "key4": "tbj6fXeu9KRvTgso8AFezWG3QXeywgEkTfrEBR7qA3ekSvpcgCqtG3mkm7USLkNGMV92i7bQcUbmmGrgoeyvegM",
  "key5": "5cLybDqE9tgejdeRCspZYu2axyVCrzt9P32xsLfWsHyBebF15jDzwsyzRNWqm8Rrc9t5AUSLxka6rRtzPSiWWhLr",
  "key6": "2mBADjHAdPs4vUV7fF692HmGowpTwEfMJVF9mVQw8fZXPMGEMmoRerwsJscSY8X13PGd9YrcdmuboVMiJM47vGxT",
  "key7": "QhfXStQyTJSsZZbtHq6tYob41jxExaxorrSZMujvZ7nVFcU7a5ifdh59mmyEpvFjXLJ8FrRTiTHLtNafRJXugnv",
  "key8": "3yqktyKn8ndqiv5QMYEiAzMjsyW2AR4Dqi9B5EnzLW84jqSp8f7jEqiNpMXkA2bcrk9kfeNG17PQcLao7ogCTo3b",
  "key9": "CTv9sk2XMi6baHmgLLafAXz7jWUGHRRDFeB1xciyUyABC1PeE4FcSTEHkpdQVHTmgVRv2iJtGFqvpncuxXnz6tw",
  "key10": "5pFCAgJLTWm1EP7kcNq1y9t1ppweHscX7JHtJ71d1JDnpYBUvLDANDmsAcH2HahB3CVLBUKgdKUiQDfDvJbXomyc",
  "key11": "2YDaMFL1KSsoMz9hdv17a43MZeDXVkVryUj65NFn7zHgbGakdho25bR6mFzV9KhSuz4e8YgkhgBoCJLgf37gmLJ3",
  "key12": "5tF6S653qJ8HSGuo2SPotiNT27Nbni3o6uqY91jhnLdWdUUmkGeEaZsvGe7N9KHo6R9TMektszaEVfcTibpEzTw2",
  "key13": "38m1kZMw6DpMTGHxdHNWPQw2dVft6x94gsADqFvEJEbFP3M18p1uDHaNtMKSo1s9Ub788J5DNKwyuEbk8amxs2Sz",
  "key14": "5cAHfHNgkzb8EZKjnd5LC6wFbNwF2kFWQRuh1uthTU4j8My4G2WDRoodd34mk5wtBr2P8ojGrkPJRURq6mP32N4T",
  "key15": "4u6jnSeWs2W28mkUFNa1J2uzJWLgQH9ZftyPN3wJHoKZmgRmrcZpf5FPHso8kuWwFadBm5dBct7ccdNfKBcVJ2TU",
  "key16": "9Jj2maRRQ4NFNTFhzPKMu5FnctqJ6285ydScDKuXN3P2LoMHs9uTC3vLgG6g1ucVVMba3xPWycQnUyQHU3p5C9C",
  "key17": "2gFuD86qkk7AnLKfkrzCEUFCuPJ3uTqB4BAFcYpwQzabELy2a5qP3QTqkDwhF8RM3dDhaek4CSk4HY2o2B1RybfS",
  "key18": "3S8K9gfRFbnWWuCZk5ENySLa9Q8RnHncSBrtXcTwrynmTxehryLQdNJCyH4fKYFNbwKABR1vizTf2V9v8A21xjLc",
  "key19": "2ZVXxwFQffcLXAN7Sfd45qB6Kku6ZkPcdnu1uMHxueE3zpmeTKNbBbqXbg9wEoUkR1YcGWH8uLtht4LZXWpGPCTf",
  "key20": "5aesE3hgqNrf9oKMXJefpdAxBwit1kQmvSXFZe7LB8Juh4bXcWTmmFRkmNq7QdXQUHH7LJooznicCAVLv1T6V9hB",
  "key21": "3PZCBnF7WxBACudE11AFXnDqK2N6EbCiCYod9BwRGKg5V7iv8uvnqKKUXp63RePgP3V31uaaNodKXCDWk1rjouXn",
  "key22": "4FVUXGBy8GWxN1rgwXaUB7GiBJw66MZGHEg6HHiXxzhZXT6qxPd1aVEyP7TEQwFb6E1F5KvqnBgtExUofR1KiYqi",
  "key23": "37Kd1iSWnxMoA5uFDS7rjboF7e6bNKnCQ3fMRzahYFFJtGnafeH5wK6vRCsgK7cG9FL5Amtge6RWpjdQCJwuPFJz",
  "key24": "2gi1UaBGRCnFZ2kFdk3mcKzV53Mj9f9dExtDstdzzVuVAu21FYzj3UYEUW7aD37n21sUTS57q4jYBdFeRbxCjNx8",
  "key25": "4VNq5fvp7ev2wJUMChD89tnfWhK5h3nqiGZdd2fpC3rJmbMLKyh23JqEk9DwhH5o8qW22pXqUYWxU2xRgeW3mf78",
  "key26": "5yGufyzDAhzKn5mDPmssXUMvNfeRpZh62Dck62c6dKSW2njrMdh5QMjprqkDGnBEeBpXD2UadXG9Cc1e7wCHrJh8",
  "key27": "2gA5QyvWudfpj3FsNL4xieiGJ2C4vdKYjbtjXk1udUK2WvZfYZMoMVMvSrnzthkexUz1498WaEtNq67796ThnVuC",
  "key28": "2PG7UFw7WP9XmVnrgz8vqaqyJV21vSVoWKK1cLRWKWKkFedf9sY6ogovigatfVR37pM5cSHr7w9gDxdWgEdbH17R",
  "key29": "5hUzHAjSpXgH7ZqLmRrvCssc16vMJvcDZ8YZu6faXcUF6jpYRxF6sYHD4sGocJAVo1zf7x4FnF5n9BFHfun4oJwr",
  "key30": "MeMgVCt1czKrZqYhuahHpq3VWw3GX7tvcf4tqhNHdT5bqY4gZT8Q1jF7Figda4TKCbQhntaRjiHUd5kdajFwb6L"
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
