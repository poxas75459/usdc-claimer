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
    "4aexc28GwNuaoGSNbYMig9F4o7txTmbKMaUrw5n2XzDPzwpTE8VGbPqgAMckyLLpGM4T68Wz3PTZxPcAvhWgaoaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkx3dd64qwApnEVjvhPcQCxFSewdEKSmjTEW5AmZs4SzNmrUTbtBgKBfm9ytyhBQsTXhewKfcbfwPHR5VSZSo8i",
  "key1": "4XFUDy4gdc3CikHkNiYXqjS8rpeXPvB4b1eB7fEm7GrwHjJTKK9hU4Pm8aqdDbixoGCXy9kVskpuLms2mQgTSk5e",
  "key2": "3NLyzGmLpud5ZjAxrak4QjHdiTTFQEAdPDg9QzkFt5zkmo9KcSp4AmpFbr7MXVuDtXnBcGZ5bnioLA9LEdeXx6LV",
  "key3": "3m4feELBSv15qLrKcodVWPSZxdGr5NNj9YYp5BfmLUGkHhRRbmaRgSzzRuNGbNYnWUffJ2mZfUx3wTNZuPGMJEe3",
  "key4": "VtfuGY7VeMzLmu7Z3DmHMaDa69MbXvYewbwdcii14S51TTwnqTdhzxdBoonNkAMdrRSTbp8GkT2cEnZG9x92P99",
  "key5": "3fsYTastMujpyyXn9SFiwfgR1HDfsGBUCGVK7j2QoRU4ENDqgHE4BWPEDXC7gt3gJu3vKsMi1su1eGWSbVvfDF3V",
  "key6": "2MTLgZpnF7wDVHB6TQEN74AiFDbw6errq5dcFCqPeEVq9YwFB3nbuwVhymVvw1DZGYH9CEKA6LZLydUkmiQ4UJCG",
  "key7": "21CeLFLXxqaYtDcJAAf2Nrh9fQjXaKTvh2XLwj7pGwtKvJbPHpyvJ5GjU4AFPZLeFNneY16MCemMmuXfJgNM3sNr",
  "key8": "3Y4xVowhJXrGWQqcdfqh918UXMFii8HMTALJPNmXtHSrXhSiUEDsabrUkvp5d8kMTAGiwUBxmYVCMsNJmKGewvmX",
  "key9": "21CyV1KWamvPXCe8NRCM4Wkwi8pRtwzGdFM6vT97MueF45dkvhhyGDDJNKuAeVsfa1xtsmg8QPjfEoQZfd1oKVK5",
  "key10": "AaK5xuVvinZvRGFyRuwcaXWyQN58EffU4nX1v8ogucoduHZx6ABxoUsJNwT15bYZM8n5fox1q2QyUyMb7eYP2jy",
  "key11": "4aZpr6nJg8dk7inBVU7CLnf8VuZn9eGBQdzCmnH2HCvFR1WZUb88UYdJNUCCEUPr56VaJKEE2te77AjBSmGgoaYE",
  "key12": "3tear6biPXVCYxgCscAm7mo37Vw6uiAm7RJaBFqC2LStdwo62XzSorpqvtB1UBkugkeeRxuAoSwVSR88kHrjHAt4",
  "key13": "4nbsdU7jAztecBnEie44qt7ZuGE8G6wRQWWpjEueDT5W1qXBq4N2ESd23KxhyrM1vLpyJk9R6AKyeFfpBiovqwps",
  "key14": "5wvsfxYa8byVqzXTDUYttuVyEmd6dfcujZbbXMj4vpVrVBbSWtJqY6d24G8UcWebdeFtSr198fHXKv9hShotH4eB",
  "key15": "5c2xqDPATs98Wxowzkz6jdc7W3pf5QviKPvkoJjrGgb13Ynvx7PudoLNhBz6MAmoByGAxzmKhxtg3XvWpPdzmz9U",
  "key16": "5T1AV85y1DqkQ1SSFYX2dDrRDbJGMdg9sXusqup7TfLi13oMNN42iyPpDPskpTHPyg3iSw9Sy6exjbFmuXb4JKk7",
  "key17": "6MdokhdzgTP4vjf2u4BdNK5dNbPQZsd71y4ca1gJbfBtutj8bfKgmtZvj7qgYypEhUFgd2FYdyBbZ2zvPgSVuCL",
  "key18": "3yjtTqFfbsaFqjfsPPDu1TPdkYhZJAuF3y9yDkCGXdVueV77R35LjN9L5wZV2wXWrs5Y8GtekMjzCZdrQNjkbQCT",
  "key19": "5fVvrKCdvDqwDnQvKZ5jDaqt1N2qZXUxdsy8Y8YmUR9CaABKJzDckceAEivEGVHU4T4G8fFiVEfFsVbVNXuXgaey",
  "key20": "FpsA4fB811wVRWzbvBXKApJKwNGSZj7Ys1LqHUB1Ri9gvvX3wKSFCWyZWwBKzAUUvK2UryrToiBbgE9HshkXKP9",
  "key21": "5KBMUK5Dz1RsH7JBmEgk2hrjqVN3DVCnB8t6zsgG1Q7d69VkxPJxnoq4fqKCyjAwDR13qn1jrnap8JAfeP8FU8c8",
  "key22": "awtTL8R9j4HWkqyPvHFHTG48utP5W7k9pJTRySffxjY94M71vY6AMisK4dADxY3V6cmC2EdC6W28ShjxmQ8yKKT",
  "key23": "2eN9qysbmK1fDXjU3qPP2VaY8AfHvHyjrpZaetqPtoTHRNrUeqpX8XsjUij3MTUe6BiEG9sYPy8jZnMvpn7uaNQE",
  "key24": "FkDebMM4w8hUoRQqQ7EX9JWmxvrv6GHm2yPPQie5Nk7H1adHyuDuohq1Ccd6QsWqNHpQW6PvYHu4CBm2DXFTGoX",
  "key25": "48zLw8v6J3UCoMGkmVfUHtWauZKDHK6Pog1mju7go84PuH4utpXBWVXbz8pPBshfQp9SFdJwcHxS4wyaf8C1Jchj",
  "key26": "243JiuvSqBZtRt3xCTHRDDB44jANM4SNSH4KRfaH6mLRJSgQRDMFuK8UHwyivFe84LVBym6TMrpTwJssWSGUrUXt",
  "key27": "BgNsAsdPFHkNn3D2pXWqYDwhJGUatReFgsxZPQVFE3xigBV2PuWzWKRyumtTZET3FDDATopR84kB9cFACqFL2vd",
  "key28": "5QmEpJzXnmUR6fAc4Ecmkanh9Zi9skDvAuCJrD78wus3RxFXbTG9UH5UwmfEcE3JqNcdJP1LAWDoPS8HQWFptkVH",
  "key29": "EdGPPkqyG8mR9f1Ew1r7YNGCJbNQDVicpoM5tf5K1yDfGHDY8LeVMUTeaYpGEtdHsx6YYDJxbjCXPz4SFoNPhYH",
  "key30": "3fLAF5qDNFDBRL3j4EHTpfstrPgB5JPXgkGSQU1nyZsRtQDp819Ji2GyECLXEZcbkdYD8i4fNp2JU3hW54zX1PVU",
  "key31": "3NLjcRccP6C3LD3TrPSF8aXfXvf4Emv15vGmyiMGoLnk3VYwKL6xkq5X37wCQpwF58bvwudmWssKwghe6xAR6UMQ",
  "key32": "4c878bVeaqTqSZrxyZw8SsNwBnHCkPKszYn5u3ZhfFYTuTpqvqnJPJaXhLhZLCy5N53Fuo4Ff36C5P3qaZZ1dwb1",
  "key33": "4b497bHBuHojbepRSe8pC5UAUosDvgdQxJsoR1BtRpGeh46j6Hdihv3FEd13DCBDEeu8NhKUiS1tAcngomyAkxro",
  "key34": "3GftgRScfnMZYVwyjBEyU3nqf8Wrgotk3Vddv65JpYZLdMJMKzGP8zecuARTS7P3hCzr4srriDUvQLSoLafGfVtQ",
  "key35": "4LXXzyeyaB3D1JFaQ8uZHsfnkjmshJFqa5C9a4a2FAui3Hf5qP5Dw8LDTKkxUv7NkDwUMGjUY2t2BGZ8HkoEw3ZP",
  "key36": "3rA29sDA2cdArghN63guKnYsLzcBZLqLjqmWH658R6cRaBep9zFeUoW8FZsgxS62B2CnYYZubviuSTgbKRu7X6D5",
  "key37": "itnHdC3GFeg8yXCr5PEWLH7U7RVihiDXRydCwzsGGToj1tGhExkW3HPtdfUMnTo1vTJCDDr8eHfojPuT1PnofhK",
  "key38": "5jNECS7S9QT1MhvP5CKLN8y9t4n5CS9LiTtdcpXzXG6V1TznuN53bxnRxAy1KAp96KDaGPTQfdaFr5CSu6yhbgRv"
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
