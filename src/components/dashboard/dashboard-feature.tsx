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
    "49GkD4D7hkCumTK1aJj6zdLWJ2uXXFzV3hB7afPSYrya5XAMiY1wNCmyG9s4XsuPTCLb2Py1SmhPTpTy841PhnaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "387qCE474qJFbBw73hAESZuMx8Ffuoiv362dQuuuCdmXRwDegYHRxL3j1u4MCSrnAxSatPWChz4mDex5DmKyMa4f",
  "key1": "4nZpkGD7pfbsRgent7LGrCC9kbjEnuSvFPms9xEqYW8eRELdTmFeBAgkkRNumMV3so8eRzdWX6FqMa2wD73fTZJF",
  "key2": "331MRhBiZC3FyrjrCDyiGsU4GQKuANYYH7bZuq8hjyTikmc9JeRVpYmWwmFejpCxocFoMoDM7QqdcAqkoqwYndVn",
  "key3": "PhMNTXXRQ5XJpFsqAEwHKUkQrnxxNGgE49Cje8xzi57UwYJvA1RhPkzsHHAasjbp6Q9QY7mPnB3eebjmDLM1ExU",
  "key4": "4vUevMdp6LbDoumSn6BUxim2vHwXX2N4f1YGR5oFH6fvvQMmehd8hZRw74qmcGBRZDFb259FBLXxKSMHYTuojS4v",
  "key5": "qcg2fLQkGFAKc3iGWr65Q1Gy9NixfQs2BDYPKRqXbiPgpg5MyNACnkWTNekPBbg4XbrMJdZeEREanDYvpPjzrm6",
  "key6": "4QUzQWnky7GMhegoo6nDqi8SBRX2rtiQfxR2cQDV1vqjjpr1XZhVsnN67fzsr4ZQdrUaPuB2CU9fbumMQzwN3eNj",
  "key7": "4MojZ8iYfjKZPVhpCvHDAN6XoVvcaLobueQk774RD1xSxzjSXGGoG5zrDA9P2qcS1ug41A5BpJLXBCaagy7jXm9p",
  "key8": "3WD13ye89pkZYxukdhVNid2n3gEBNw7RDJzUQ1r58gsHnpjBrgZwzpuwPPtLBTTezD5KNB7vWyeiC4ASyGFAcuWd",
  "key9": "4nFacceWiXLyxUFycBAMH4bNQBmppyc56qRhaRWz1JM5KRucNuyATtK1LXp5jR353mTNv9VNei9CoUdpDJxamFup",
  "key10": "2epjtmbHMLxfnHJxSJLkPnzeLNJvWFyHGVGVWKVPkQ34nphMLUeCL3J2yn7Z59jvTQH3hdzWSudRJsLPSG6NbSUa",
  "key11": "2SnDWuFbwr7pAxcNKoQNsFXi435Vsvih5E9jexa3ZgRPYozrF9NZNKdqTs3xwk5hLhs2u3aohXDMiH2nRrF69QBR",
  "key12": "3FCVWivdSiJknq8G5PSswnaR4Ksfj8rzu4Fe6Q7L9ZJXVCbWRnf6rVBgtT2PAgqsEKmCPiiYn1N4ctEHEBzZEyq7",
  "key13": "5qmwY84RqbAcng9y1BPhMd8AoaMbvAkGvjdxnrQ2ZdkSMqKGgsEJy7qRiFqVmWygad9aG2VdywPyBALkxLoNdoPt",
  "key14": "3KZGQ8HUbv5QAdVpeEgknDW8d7coAG7EaSabKyJunjc2dhbzQi55KAe8ww2T9V4E4Xak8nKCDEtHC6NChkDP2jhZ",
  "key15": "t4NhyKnGVh1TEwpjgWyEMZiokXXyk8SqpHFHZgRwcSRcLNmARgqxXaFmomtvvKD72P2sHRSnNCm7uoqPKBpGxLp",
  "key16": "4Wp9KiFzPCzU45mUXNSFDzskAbyyi95wnQcV1tdPB13UhnCkmV1EkPGH4khpLRbBCzDH2mUU1d3LCs1AnjoPaEoD",
  "key17": "4i1bxP3GuGvP9Di5jv8Vf3UDX25DZLsAGnCSgGNv9K8DS3GpqDHMkH8UkZgdcWyWHKqFYds4QbHjkZU1wDKkuz1d",
  "key18": "5P2Agh5U4Vqw6oi8weiha27P6q82R1s42eysVVWcVCxbRXA6t6UA5hjHVZV62SLdm8m1hK42p1GK7kyKX5sHTbxB",
  "key19": "2z5mV4FnE7hdasFafPq8WnrgtCwWuQxNLKYJmB2mPR1VJSrsUYUvn3pr9HhCwpfYFs2VfzgrH65CTZKsMbjWDp4P",
  "key20": "4CUpppuh4xraqMxMJGXyvX8vhiX9r6T5ZCNmiLYBhEoXEcJ1r9v3cgxrXCBkeCrbi6EAYy3EQcXGuqkQh1zBW35A",
  "key21": "2rrT1gC6CjsnZURSgcN2uE4GwLLsu3tdaLEcihj1NXRrEV7trD4FXLru3aTT9HKrD9PVmH99WAhXuosE2BAv7aTe",
  "key22": "4SeFUstNbB7hd7oH5VWFKwsTfssVW5z4zQUNmu5xJLgqyJeLefFqp1UhShfyz7SxwvyTxaqgbs4bXSHaoorUffCi",
  "key23": "2X4yuhEubHv7oY9rpRUqK9ohEVUMBfin4ruGnsRz1T8kA66upAFLZ7U1pShorecAtA5jV5TkM8v6N6Fft2uFEuog",
  "key24": "4pDSXLuuhahGdbJmraA8aVidttDESZiHZiL4ZsU2Nh6BDedp5tG95M2UVERQepXXtpNCWbv4G9Za9TkUxZZru7fV",
  "key25": "4r1GvYEiePF8wSQAQbeZEHR9QtUcSXocS5fzijzWp2Vrp3TdHmgb1JuJbKeTTPXqaUsM2cE3db3CeLjTqguDmP9s",
  "key26": "2pcuXopSyLrx5Rjz9JUebSh17jDnmwQPkCLgKCkckbfKUh9DEMjJxd9TFVxd9E63ThHRg2JzQbpGRJBgkCK4dfGY",
  "key27": "2t1pcrUQFBAWHZFNPv1ii6kau1ABeHDk4cRMNG7yh7QhsX14Ee2zi7Zdiv8AjHggx3aSDPcxktZPtbtkRkEfMhV6",
  "key28": "4eJ1raC3BSQJz4WWxcnMGUMvN6YENddKcmcdrFRAwjk5ujc62FgBjcGxud25zqqFyJEGAwAoU4RCdFz3SMRxCMxa",
  "key29": "QCJUMvn532ro9Gi8X4aHkHaK3kkmsz6TNRLxii9VTuHMCDgNxJh95ZcizGgPg9GiUepkxWs2stYxuYCGUdqkrC1",
  "key30": "5L9BrS2JqU41bwareJRpTxTRsqsnwHHRsNrtKoDXVU3ou9K9sQLnN19h4DaGXa8ED1JP7FT8XC3aufWcACHMF6Cx",
  "key31": "3386ZhS5JzFZFTGxC2Hrx6wpnsHAEhnPg29xCotaEx1Bp6XCFYsk2YcgDJeqwFvJCtA9UMdfqhVVrU7m1wVf8JeL",
  "key32": "4Gf6p7PhTKQyL4Nh4CwoFfUHybyD5hSjhtLZGU4F55RzD243HooXbCYrJgGYYmgSTJqg4LEBNdA5hTwuSBPtsgSF",
  "key33": "4akpEP4efZEQx7NA34KN6NxaMiaChQs2mxZE7264MHyj3TozJL9dz3STgYWoazUuQmUamnAjy9gjxU7NSambTS5i",
  "key34": "3ohD6U1urnfCXe6RnBmWxpVnTmo8uUbZLGDk2Z1vxUSj7V1YsbkyaVEyULq86qStFFxqmk9WhQpnvEA2Jtku44tk",
  "key35": "2FqktE7N12m9Tfa2oqcMRd7MGpXWkFyGULHr4DMBrwxT3STx4tW84e9PtQod5uCK9f7D3M21pkjmUTQTRfqyfJ9o",
  "key36": "2XUttSKHJbUpn2WMFyXF1e2DWALyxheNcdUJS5kdfFhJ15mgWfPPXx9UYRQodzENC2eB8y2eYVAx91xL6dK8Wurn",
  "key37": "51tvqej2qnXa2XErSqCPgVHkth5a1HoQ576Cgwx6EdTnSq4ZdphrqmYDLLjm18YGqsQjjk2iMNww3VxGvEHJY3XA",
  "key38": "2tbacin8VG7fgqZHKhJWuCHJ6GLijYqi158BLLyZwCc8pdc1CmpbdigmNTdLZEtK8Ezj8jsuRB6NXj9DuyHS7ic6",
  "key39": "2ybKXmEMb7Wep6tZ9D1RnURAyeYxpguBBVcUQUfWbFKZZrWmeSUXUhpT2dsN4Pr8R7roatwMGQttFDBUknE7Bsmz",
  "key40": "3gwrYwKiX4W1vfVqrXDpfwBLhkb3W5Pr87pqDRV9LYucnZWE576TuJaXpugFtyFQxC2weMmpWE3FbfQn3KpaxiSf",
  "key41": "e7gyEhPtPcqrJf14aKLAbMcHyaEPVPfXAehDLqYCpcckHXNqLtrQ26feX5BkN5CMpJAmDhFNZqM8u8SZad39giC",
  "key42": "5VYWywtKaLjbZafJ3WzAgjC17KxoNRWGfD72176kSXSKi9TVm7ogKmaZWGJYhhJQoanQ79irAE9CBfDA815NPmXN",
  "key43": "67GeK68pcg8stia7t4v2octv5dHZQncbTH8BZ8XGAmEBUW1wQtR4wNATUjdJdzrfuzdJc5TApeG6uVNyHfor8A3",
  "key44": "5D4EcweXJ1rceqvvtZJzPzqodkWbm8apeWch1wdr1tUUjJqWkYMBEqzvwjhiKzLnjdmC58Zs7bpPDK7ZsoK9pFzh",
  "key45": "4h1tSWxsP8c8VBhUk38XyaHEQRySH4ftJG3rKCTGLUqMwzjKXeuNwoq8CaYNk553SMwr55NLQzz1NbKjMpqqHgBw"
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
