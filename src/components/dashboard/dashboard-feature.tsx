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
    "faFVShNcbvAzvkMiRgNW2hvXTwfVTR6fzDJKodoS4XCjhoB4dknTdirQhwcGjyZLphW16MEweGPkvrdyC99Z2Bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPQf7isZQmN6c9i7tNECD76qjfQYvhcMPjXAjBhK2H7sNVJvzd7BBpSCQoW418E9Bu1MzUVezX2GsgaLvdxsWvF",
  "key1": "4W8wetcY4TB83F1qwHHXLUN3fA25TsJLDX8V3WfJYVnKdGuPToAZzZSUhYDQ6XqvhV8hiz99MVMZ7BmU8i7otk1C",
  "key2": "5d4KQe2EkJL6npCiBr6gmkzbd7qxudjpsU5yD4mE6nh5Aqy25W9Li9YDzcSTt8Fyv8bQsPVyTDqtGwQkjM9S9WAr",
  "key3": "2zMetWpj9yTM9zFnrsw8eSFyWreHA95WmcFqZb8T9qQ71pNdemYJrrLfZo9ggGE5V6JCW67MDwnoS7rcgi1quYCT",
  "key4": "U5RC9X6B3uxcrM8c8viMUxSzZyp7bftDxR2wPqMgUNxEx723vPE7PtNSJUtdL3M1MG35yE3ambhp5SQnnRbFEfw",
  "key5": "FC2TYkm5haMMMfsni2Xj9gfG3WJJ3TqWMoND63CV7CnQ3QwRrxixbyG5amp4baWt8mCSkNftwTrhNzk6FA5QSie",
  "key6": "u2C3crVbi3emdHdQHpqZQdRHZ6i33gpBjjJbhzjxCoxrFDHFJR3m4FSCGMYppWRZj9D14cG2PKNJwBp1BajdkL6",
  "key7": "65vbZ6qKCpZSnKqHq8dNk5CvB6i5nN27VENZ5tBjF2u8XNosfiPmq72wJFQQhz3TVVcWJo68Xn1LmYtpsVnqUKT7",
  "key8": "22McWYU6Uus2n1qmdAdbPZGV463hcB9iT7xWcPq4qYWyfDcLjj54HKKLDpFhoTAj9yExUYu3bSqzNPFYESNFxufk",
  "key9": "2JYwT9AdLJerdZk6jrXzW4jNCWcJeDAKuSN5ta9qXKHYo2BxgS72SWJLbrkyUrR93EFLyKtQ3z7YsJyyQRDZeVWm",
  "key10": "4tB37RT3wQxZcN9D9CPYinVbMCijwLbtJacgEnrinkGE1ymnUA3EUBWAdk1G4UTuLJcnwneBwaYWKLARFFLsz7ok",
  "key11": "5NpgWCvS8WcccywWpgf9xGZMJGktH8pkyS7o76sQz5ZchLctrTfCMJGd1WQUxvJxhwNxMJWZyRr7uS37X3ahhhso",
  "key12": "4ML1CoXkxfFiEqKk3vxbGCyQeAxjqyzXWsdt8Nw3xfwKyA9QEMk8cnmb1vSe98HVvx3kC7UVsbgxA2Q9W9Hsq6F2",
  "key13": "2NAqQ4gBL3vSZPnATmhhSuZziuMDVD8osbEh6smZTHdvEvnc5E3T7N7nEDhVCF8tFcHyPCZsyVYZm1Gzuvdhuk4e",
  "key14": "3HDvVETxZ34sY5H1BaJX3QdSdgnD4NPWPtgFTftx22VBxx2fsBnUmSFpqFUy9qQtNpPvgE7o4A5TFnuDJBAKjjG1",
  "key15": "n664ahNp4chiHWniFdpo9Rvw8rcD9vQxCGPCbTBLb7buahmu8hYyiyDm28BjagGJhwAHyszD8H4diPgMdyrwyWd",
  "key16": "4RVmaaFsgKupvgC2sJzWkkKfsRvwHmc22aQeEbhWNWz56Z8uiipYReGTMvgb3XqqZPWt3vNVuL8gRw4f3d96EjVR",
  "key17": "2g4fBerD2YDFJenkWYcY6ubYZBwzCS3dcQYs7dxEi1TEKFqLkyB96n3Z66ejoGSy5Awr4mZqdGP4pAyRXPTUXHNZ",
  "key18": "5uRP97rBGivhFhF9HEGHZuq2nGHnbqN93CG1NZZS6rZiXkXsxqebJp8rRR3Pv9vrBX4bEnMnMHKTbLqYNQ6dV8r5",
  "key19": "4Eo8QiXzsnCtL4WZrHaNQiG6TBL8zYMKmgKnW2ewPXPTEmdMKrZKe4qpChjMMEe1z8KihxbBdJshZLC28D7TyTTP",
  "key20": "5PbSa41btGk1LwPDQobBjBZ12V1VjBNQkJXgC9o9pmko773W7vNW8PYzQTFw5zERXLHX31oa2hJpCzbHPLdxXrXY",
  "key21": "5DETFKD6Q8Rw7Y2dfVV694NrCPpEYENUuGUc2MQzTeMiR3kNKpNm6pAzwJZtkzP2KfUErojtw4kTM8B4c6deSqhe",
  "key22": "5GvTnZhMrgxNQWvhcckKnyc47YPh6mEdbwm2RbDmprBi3ezsZb9XnjCwibrCvVkQU8ewTS1mscKzV9N7hdNCFVia",
  "key23": "fDr9QxmEWC7YiqT3ERB77UVC4CVNUjoLjg6qZskLiEpkfRZETnKZErT1UAkmDmdqo8913ABEdzVSh9aMrZiGFpC",
  "key24": "zUsZkZTZgwUjJ2Ficoy9k6LUWJjCnb7yUvrEzcNgHj6rSDjCZQrTaSvDnwSz47MxwatHATszVpbTwAinChveKEZ",
  "key25": "3ZQkuKNgKwnP6WKtNyxM85y5VzjD8dj9sSWkMACCFkfWFfkWaQZ6QcsLv1VCr4gmyzH9kceQ6o7gXmGtJKEiwb7y",
  "key26": "2ZUHyiw71AFk8vuPjsipgyQdfkfk4KsMCBHdACCSoY7Z1LuFezocJyfnLPnE6Wsn2PeTnLZobmsxVW5fgG5BVuEb",
  "key27": "3HSS3D445943gDFgKrqKgpP6bppbqGCNHz3GxMXn9Z5qSZLyDx6CLmiE5RJ5Sp93pyW2d4rxzeBTgR7KU5wXXjnt",
  "key28": "FmrXuEB4EH5yehDhSo9C6Aa95LFzHPjmhDV4ZcyUtbngdVAWtTdoAH33D39QEMn7vrxx9QdUkgEF6dHF3jFGHQJ",
  "key29": "ZbX1acecxnJJQv6UwahP9nfzq7VeuLA2cntkZFejNdZb5JTg4RouzVd5XLsozSqZmXUEpHmGzhtrsYr5Ugg6QhN",
  "key30": "KAakHirZ3k2wp5z4QEmDe2R4kC35Zc7kCdvj6YPHbnTosL8qp6RBr1GoN3J9tefpaLawBrZAknucVJD4ZZKbCX3",
  "key31": "5dkojmJLP6yQk9y57n1C2dJCweaLhjUBnuw7LNK6aneBRd8cAh86jPUYX1rgiXFQAq38EJ4KvuTtRWbyVBq1Hopk",
  "key32": "5v1igg7a48XLXEpLvzUCafanP4C62xfiKCiopYYQh4wiCDvr97DurUudnRrvKyEx137mqi1UXy6XK1H1EqQ5zjwJ",
  "key33": "YEDLCVPsjoqsDz2Gn2wV5Fr1yXEG4s5QyQcYorqpe4mK43cNRHBWxPtVH3NSVw2NVVQbCwnQYnBksN9jvzwTwHx",
  "key34": "5yKB11NLNNak1Hm5EBhTX8No6UCmo8KtL7g7ToqDVH2JSAipS2hFaa84LtR4SoLPuYByVo5xejm4k3C4M5pxDGwq",
  "key35": "62qjJmg5ARJ5Dt89tH1J9FzNCzNRa6PBpVBw6rLXyNm9dRWrHEuobyW6F315cfZKau1QH9NKJMq4NGCdT1HPRMAe",
  "key36": "3g9XypBpstkCmLcDxwQtaDmFNPir5zGP55PWBLkoafZvj2qEcNC3DTjFy4zCmAcLmN6bW8BtyD4A8v3hHHFaeQrF",
  "key37": "2FUVwcYMW2oBT6EikLksSDpP1BnvtiEKzvg91LS4YqMCrfiCwjUd4cuV9gP6XCjo3V3n2fkjG4ZoQhgVqHm2v4yL",
  "key38": "5dGpKHjAjkfzi95jwRCvjPvtz3JtMu1siERJ5bKRwQHsrvjzZmSi2K5W5LNRykKYbseNgLUhy91fb2GCAkCbsR1o",
  "key39": "56LDN58FDK9GoNrKHwdWq3UhxN9UsfQqWRZGzv4ckx8o8TrnHt3eph16H22G3bNjqwte2SMcRMzWhCB4pEPLbAL6",
  "key40": "2Csf3FEFK4gbrHTsKpQogopvwCCJzCrYKhL45ECrmwdHQUNY4v42WDWjyjqQo2beUkr9qUibTDcyNo1ALW1aDoRf",
  "key41": "2xvFcyb7eWP9i9pcqzaaXQG1h7upLAK91aB1jXfy3SfWaPZtJuQY9NzjB97tvCA6Z1vNTgYDPEMXkcUM6Ra9FMpo",
  "key42": "5iYt59bsGtPXv84y4zjoAJ8zGxcB6PDFKFKKbAkxvwaoBVg2BfBDwzxLquJNETMo6Q5bVUvvxUkH1ht6awFBwbmh",
  "key43": "4adA58CMCM3AKLWtJxKCisE4FanBpy6HWcFUDDuTXbnLkMeNd7vw6u4VSKq6FBNZN7dGeGb6bQheib8U3Uqw9Fd7",
  "key44": "5SaCc3sFbZbKp3FAkhsR8wxvgsZ8CiQfBd17W1aSim4LdhD7y8WMtuEoQf9HAj1o6NP8gwfyTJey3X9rBxMmTEzw",
  "key45": "erJHKVTCc1Mny2pQaQxpoYJsYro56SBgin21DtZKMwxgpmfi79s4Z2M9Z3hfkwveAsQ2iwNgpXktN8gSVdBSHX9",
  "key46": "4jHLDAfrG617F93zYgHRZp5Pd46qeb2oWH6ftHj5RTBUnMKhmyUbHr2aLJN1nagPZxaGdJVkVpudhxHfFc3AmAxX",
  "key47": "2dYD2HZLmVHNXHRMLdTZC6M2gzY9rHiemyrfM7qY9syrXiVD9ZfekZnty8wsbvTaSTV5yt15ayqzgb71j8xqinpa",
  "key48": "3TBMnNFn1pxhuaiGg38T3GqE4ZT1ovVXe5fB44Ei7CiSKp63ENgWEMca5g1SMZUpRNHH1wYNyoxk33KzFiGW8M4V",
  "key49": "4a1taeWahAFW7Svy4MiS94CnYmBuhtunToebY86HALP5RpnvnZEkWqcpuN6uLAFgNWsYWiACVREEBimokF3ctcLe"
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
