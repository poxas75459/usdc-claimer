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
    "3eUgwv79NER2RjqEaEh7hVLKBNqSaUJqjfgAhY7z1Z4e8ft9kCk8nwCz66Cp9AoLwT1UUvqq6GKHwqLSCdogTfbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586YKHHspdnErJ6EHEHXVCN7cwms4tN9xozbjPxQBYFos8GhgppoRq1Ezsrdkp8JHVRGbmaV8oSbGBRhdYy54sx7",
  "key1": "4vGDGsCXi8w6ZtDv55UupNFGWvqT1AFfdhumE59J28ceqqGyTpdf4cAuYUtHjY1xQDdAvULt98yXf25DBGMksurN",
  "key2": "4zBB9ZTpHv4j8vHCp9m6GdybQhm7eGMcsUgrnUMcpK3dWVrDgRmcbx11Aw2aPTBgtbnGoBzzTFEPpPcnwbDkHxaG",
  "key3": "3c8w1qz3iBasWtqARSKCqmCE71M4emDnMjnuNvYEn54gQbiJrGAeFUSovb2QnJEcu9Cvvc5L999XhDYYSZ9eduw6",
  "key4": "4hNw7SdkpeFsx1XyTs8F9KEcu2i629jnMgp1nz2LUoNSadfF5eSGApJEbDowtQqgwAQZ4A4ojTb6VKR5LSmqA8m",
  "key5": "31KuqpS8wrksiHPyjb6xzqw1QVu3Ssq548xPBKsbnM3vVxJkU1UV58qRzrgkpQyw6ZAR1Bqg7ss3oh3yuvq1HoQ6",
  "key6": "rCjEgJ7QDkgU8UywQh1s71EHxAR27JTXsqpZ65f31W7bXmsrh3DNnSodvrMT59AzH96ZZ6C8h93Pg6k3sA5QiiG",
  "key7": "3Kjy2NknbC1YsdgSZUWj5y6V5LCryavC5LNgsoFwUC5h8orAkVM8ZFkAA5SyLu6hyGyC4qZr2kaYXXLbKSmCudJy",
  "key8": "41x168SWE4r8NrPHcxUw931Qv1SbHPkXFnPnrKCRooKfFinp5JpkLiwAHuNJUTntBcozM4c76Bo82KMhJ4Bi6psm",
  "key9": "4JQRg59p72GVaDj8NXKpCZsoqMLmhehV2tWstb8EFXyWGk4jJNPTMXwrkEBBBwthkyrh9zNGJ4Tn6aPMswmuiEvX",
  "key10": "2iz5U913mdL8XoqoCZb59myLWMLxt3XB99fHmkpXiMB2refjhA9vksu7wJJFn4FvoxaEeMVpRGuBhHt7FdvuRthv",
  "key11": "5E2UG8387cg3c7rPBkH2FBge4S2S8G5EFK4Ex1u642JdsV2857KpcAHntmRBvyzmyuYB3kZgy3a7aVjaZZ6dpmQ7",
  "key12": "4AANX6qEgiinaTYZTq3JgVCE2oBQ79tN1Q9eh8GugLqrmQ7J6pph8njPpvUed8bbWcwfW7XHb5ntEay94moUpfBM",
  "key13": "5ezVwdR3rhXpkS37Fpb2J56dMR619zZtWRhaTBe8r4USzJ3jyMeS6PZ3Aw4MRmb3yRjMgh2QUEGXFrutSspzaqh",
  "key14": "3CfzuHmMXBKmbT1kxWipiM24us1feHcVSPMdLBLDDLyUDHx4VsLvrDKpqNsg6dKUdJsnSw8z3MzakiKprzUZRswT",
  "key15": "3Zd4TtfoYe9Rc4gmicwWGFPCcsg4wrSRo4S2QheeuTJjctuDY8kmQboo8kqWiXxPKMbXUxhabJmo7Yf3dioEUapp",
  "key16": "2vMtWhi3jmHjLAZ7dKrnVcRf8KDaKqR9R3ZGGswCrKcEg4x8fUcjGj6L7ST9ZScNZHWt1LcHxcgL8SXtig4xMRKa",
  "key17": "3dLUxxxFaBMPas4H7WK9QBvX7hGhPLDQGzvKR5Djmeix3hLp7ttW8Ek5WtMZr2j6Kd6VF4vsz7DtZWdyFZWgMu9A",
  "key18": "27k3uc6UTX2EY9DCyoLqNy21B4hQCVC8dQKZjhQPo8uye9x6DnwUykRzoXg1tmtc472Qpu74nCsZBnzVye5PvBSD",
  "key19": "455x171C2VdqN3FjWLQ3bG61GbEnt7GKQg5cT2ABWPL52bsjhWEnWfPXi4fPNEyT7jbLp1fCGDCpseWeY28FPyiC",
  "key20": "5kXcU7LVJwVSV1aDD8e7fA7xLX4zjSmbGRYPpniqhrbNJBCXf2QEsJP2V7kqBFf1dUUv4GJgsfe7jrhqKkYxmiWC",
  "key21": "bm1hzE4f6CNMLtnDuje34G41Wz3sqJ8B9ANgh3LeAGxTWBtwTZbK4m9GQNPBVv8WgsBG9dmegC1TEuePjNzZJCw",
  "key22": "4KafnWGiCkn66gBAwHhfyYgGj2zB1QqZCpCM57v2kN6W4wzGfkcfsC8zv42rGZibfxUZJ8qd2KBgEvPSFgcKpNpY",
  "key23": "4VfpNPZr7R8q94nhU3TYBx1aXUiBwdRDdS4fyGysYSo2uJwYqpELBV8yAoYZcyfRx5jeAbYZdAyGadRaRktpiZ9M",
  "key24": "5TfN8AfycibKGrboMyruDrXySVEYfAQVZGqRxZSMuZB7cDEx9w3bSsSB4e1Cjki2YWLb9mzBb42uVV5ZQ3oYajDy",
  "key25": "2N7WRaxqvagn3VA9tgAuUPYuHgAC7RG9JcETWhtMMim5gm2699rgBxKp865bTPTmxNs8PsTAeZbPB7J1ibne8StX",
  "key26": "59WM7KzKFRSejJN8UJ2QnyMAgmhBgaWjHHHSLEdr1zcxCqxbmvjjWwv5LjBhJxmkkXjGp5PfxbXfVKfQTMtwMy5T",
  "key27": "3nYjTnu11rVTqe8fN3C6kRLptGneBTB1NYACm9BfuWBksH6Z18eGSPP7QGVwTNf5ZoG9wSzZCmYa4PTsqC2HFYbJ",
  "key28": "Z5HRzut7xDV9dmhPo7HRiYdfQVLGvj2TN1D73pBRMcyH1HYxGcQRy8qRo3JwZ7Nyftshmit2fnmSyKABaE2KUwy",
  "key29": "2HK8MY5TxGcHLDTkqRzWuftGHBxhPrcBXGoB5d1rX3nVn8B1oYcGwdRGUwerEjmfkN7kkwCE96jkdze3ew7sMc5h",
  "key30": "2CCvznAMP8M3RuQY3vLR3eFBGEdY4a4iywPcbCYmQbuE3sWTTxvVNUaeHfgL4YheqUaXuq2XG6vJdXkSSnX2RezE",
  "key31": "5Ua83bafiPZ4ioBksKHy35zw6Gk2LU1sCC99HW2hU4tohh2NJKm5KxmgYgLZfeXn6U1fbG5NwS5rYfGybQ3jPdcu",
  "key32": "28EYYNyh86VK3bj5H49uuvr1MzPySyK2vwojfae96wskYnY6HR131NfVEWyqxWpTpquxf5qcegsFUWShEyw7NLym"
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
