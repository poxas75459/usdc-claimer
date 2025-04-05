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
    "34MkJcuQunwyZWNCwYztoXEgyq6wLfVDydgTitm4SBCA1YubkF8ebMvZU9fPJNv6M3WoJeufwGdz3TXMBzDzJRZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XCfHxbZkwaJB4dv8SnnJWSz6f9baQ3jMHe1ijXTFqbr7kENELvgTKgNLzETPqw6nTRUppXpVbouBUfQa39fsfYK",
  "key1": "62carZ2dVcyd3m456oLCci8b6pCLPAoWz9iTJccCYrGZUZZozakNoksnmJDB6cskuDGquD6NnfXGoH6JJ7grdyJc",
  "key2": "2gp3TPXNopyeHFunp5CWTJhQ3ZzWXpCdiyzyzpPWnabPPXGXbFBQSXoYmSD8Z19BQUFGEc3gCxsaP5HhUj9YggCN",
  "key3": "3BRS8YrVDFCX7VmjNEN8utZesAVb3NoYNPVNF5fErMxRK5oEKwUJ4AfGgctpU9QRy9FEQU9oj5XVpcLrVx4mseu4",
  "key4": "2J2AoW7AH6hGjZVXwAaCB6muYWtLqChCuZsQH2jpcRt31fmTnzQKRLCgVfjNH7YQabCJrNSvxE7JkV9Aa36uXfsq",
  "key5": "28ZQohAQeq2PrqhHe7Naw4Ej3bdTq4Py3n7KKpG8f3hV2CArKmpob5BChasjatfoQc8nXkd6u9enQbkjiLxW5xoH",
  "key6": "3NS96fR3ZAxBup1gwypfaouYtqTF3V5uWxfSAh8VqTWq3poeJ9vVUCL6u6yYpLfDegp8fiHf3H9RvPhsC1nciPzQ",
  "key7": "CmB6rrWYUx4DYiu4v6X9tfFicszYLnWoteQQdwNisXBJNtn1A7A5pFt3pio4Rq4Z6q4GCoe3i9GyVMzfF83Qx4S",
  "key8": "3wLukGw9j2eTWAZCLhy8tRAx2VdXWA6bmriHWFL9VBEb8XMyyRcQJTbcrqDsEN4LN2ANKf5ckQADsb6e1Fc4B28D",
  "key9": "2bQ1TencbEC4tXwf5h4iaDh2KQjL6eXpz2MhA9H1nk48bcifZsPV5xPEVkKUzNjq8KbkJAUXPHGk2NSB28CvPPEw",
  "key10": "5GG934SW1191HicMD7ZTdRSGyds4bWp7w2rzYa1H3Nof1UKad3ZHJoMCWsZN3c3DfHnB5iozu2EXBXEneinQ9r7j",
  "key11": "2DC6dm3rdswApudDNRYW7NZPSW8JZKwtPCWmok6xtPqHmKAjpFZB357pExmCVLnMMxr7MnQe9QuHSYBy3A2LL6yM",
  "key12": "49upUyC7jwTk1D7fd277b8bxeb3Hs4cD6Dd6sxg6TSzBRCGPBA5ELd5LXMTHYMvNGDkrSurPEzrABJbpLerctYU2",
  "key13": "3Fj5WvTAGp16LZKPvcRQrNdSrhJBizo2uU8RbMJVxEJbcQrowy3PqgP1rynEJStpNwLyV1VgfxhDCCLMT4HzWnH9",
  "key14": "ixvRbqyUpPJ18N1FhbHActLznHrGY7dcUYAbsjV5DrZz1xRW8jhs6BX3xqApPj17m8mi6QhSrhedyB4iXEBfUL1",
  "key15": "2jfjb1NufsNkSx8hyjhj3xivXiYkRVwekt6NDWp9yxsJG5aHN7PT1FZZDjM2W68WRoQvpVvLaHjpG5Dhp5ST99oV",
  "key16": "56LNSXRCfBWrGf6o1dkWeQASgVNVSzkA5MLXpdRj7V75jsV32nDSXEf5GrrPjc779ShHNsUFCyGCTXtnc6zj7Q7A",
  "key17": "5VQDa4TXF1c48LufjyLnvHR4Tdoze9zUyc7WW4MxsUrQ56z29xc1c5MvGh9AsVSxg9U3gyhw7eKy4DKnZeyUveT7",
  "key18": "5c5hh1eeCMMUqBdaSE9jGNpCZc6UgjfWKLRkJLQtuZmXJ9BLfqf9jH79MgWNfhVHaDjKmxCRuCZRxQvRFw34pQcQ",
  "key19": "5wfxEVk4GYC3R1s3QZmsxie2a3mx5Us9QN5V9quWFe7qdGnKKLrFDJsZV32PTttsryiR1CamGxfp9KR22uB1sz2M",
  "key20": "4md53NWuyTgzjFgmuw8aC6H3ew4qYFJKkTuBSqXa3u4mGtFoMM8Zj89xCmiu3pR2cLrZeF4zYJk3FnaCXc9v5Bg7",
  "key21": "2D3fhtUvUSu17LC5sDhak3Cv5xcEJv7ezDJ2qipkQHJ3KnQrJwRbTdURyGhZoVTATUViha1mfENua48y1SkXBoju",
  "key22": "2d45o7otaUkD8rTKt9ttMUi2vSuVNd3eWUDZMiStsnZd4ZyqHXm6hxAMriMVXBrhuAWqUfHLNDq7Qihz7CKwTgUX",
  "key23": "4cnZu1DkzBDdwP3MJQ1dHmzKb8BTf4chb5U2cKhJj83gkJyDWzhgLfaBht9DMKQhewmBwd9PEjq3Np4kCuAVrYcn",
  "key24": "2z8XwtnibAznowSCjFFKAdVxM6DfRFu1N4MX9DXeuqmwrPcJkyb1LpLbwXaaJN2HnPYpkv6TZzZp3FDL5j96KKyF",
  "key25": "5fhQbTWmYaJLbqB2FGrcFV13XgNH9QiDnm2Rq8Wm2qCcTCQAy7DUmt83PZYD8JoxSBuPgsCPnHEwiCbTA5tCeRAs",
  "key26": "6mZomgHZnp9F6F1e882ppj4smRFiqdAyqjqD4JQBr6yfzSaJd8mAKqa1CLsuwYyXSfcyhv2hSXy7t6vFrzfmKrx",
  "key27": "3wgMMKuptAZdzkRfMigUo9kF86WZTVrsZRDG61m1fuvJeR4ExhiHyQ127QULi62jA3acaQWnKWWkGwKNeDnpb8o6",
  "key28": "4WYTzjzgUNb3LnbbzXoSQRAJrnRWVMkmKPoWCF5YtNv8Kc1AVCdV5XMs6j64vAvhNNkXoQGzHQmmwvqFxfgpcjHz",
  "key29": "2BUSszeQQYgjSjvRy6oq1BqX3nMEyudXq4Go3JPAKfQEFKNK7EjutQzo85duDdq7VKRQZdyg2gw1Joggz1xbW77u",
  "key30": "HeJv8iMN3nxYmXRro1Mj4iFf3mbjbN3hdNFQNvtVAeDf973cN81wQvMQo2wwZ4QPyHgQt1VRJFoiqvdFV8ffDt3",
  "key31": "Ee2g2UuDv4neKJPSPk6M3hfA3X8LE1K1etQtzEYhQEBdjFEqkEm46omo6HeUkMJpKK8xuAzHwxyqmuuVzQfWpbb",
  "key32": "3CAYyTtXrK9DhBXG7RwpabKVw3vA2PwfuPM9WHgaxMCnCjF9oxPhSc4noShQDDPXdbCwigKizMgvZssz2NZ9Fr8",
  "key33": "5HqKhiwHNCxwVCm55Zud5TemuP26Rhix2GZwDr385HjwaJxF5rhK4fScRNurXCW6iBSUyXHwQii3rvXvkXniFe7H",
  "key34": "4Sye77vWx2vMbRHUtqCEFRA64zcTdXHDZzQJ9kPMPbVnLarUtdrex1wGNnk5CzCDuty1GsDWdjbHHF1qjsaMpuoK",
  "key35": "JaNSabbjuJPrnWH2N4zD1kUT1UrufY3RDqQBmy1Luau8JgHkGdN581Sa6x1kr4XGPjKcntnCbWDLdseEiNNyYeN",
  "key36": "3yphvH8Kd2Zux4Lksq4fGBXVhkaR1Gjamkox7tUp5RiKvtc4GQe6S3MXWaAZAU3NLPgpAsagzfG557eP4mEdGUL4",
  "key37": "2KiAjMy6C3Ccw2kC6b7JWEvjdPz21yPW3Bv7c773uYjdEoAiRtSso48fUAH7YiLX3wEwj8BdBbH6tkjDm6kwgCgH",
  "key38": "8DS68EXWW5Mpn37cV11DY9MSJZJb11k6HEZLb7CKYX5sJs7kjnuydT77zdevfw8gf2JJqKwdE9XZvJQBN6zTFhe",
  "key39": "5uZgHyxjM5MeyH1aQn6VP5kFvzgKQynUZK8NCVUvHMNVLhU44fewqZeC6Pw3aajmGcMB9N4pUgFnH4MA9a1ziRmD",
  "key40": "cqqezaFQdeptygRWr1cWPqEW3VkpZQJHQTVNvRQpKgrE6ssTe6ESFWWqqDrZh7Yai91JgnXqzhvvDC85AdNKyov",
  "key41": "215C8wLyEqVgndeoZkG5z3vnTcqsjyZRs6nf48fS6V4tEABrPV17EooZRbvNUspEdZ7juBGcLpsgy5WxQMaE9kgi",
  "key42": "5wNuuZwbskF5VcGs8kysLWReJbSVUR5j8nw1rhBqc8xyTvxzGGaKnpRu1HbCdab4BLnz8RZAU5zCeVvrWjxsgiBA"
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
