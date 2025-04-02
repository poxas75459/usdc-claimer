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
    "5ZWNNtgw9auyAHdpvA5Y3viKtCBEn1hVEkUNsE59UK5yZFEVj2D66u9vmxTz2WAfwoLngMJoxJt9d4umxhCVvqP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Dy519q6FSVSRMgLQpeFx4HMUEU5ZQpB4VZYDHnkUo7ynFP6P9iVtDvRmop6k8QwBk4dvpJGnRA4XUg88FzUprX",
  "key1": "4ux4Ed9po9MZanboRRocyCH5EXHpzPeBaFGNvEnMKarVVE36y9coYz3JfXtpWc3kJAWY3t3BAVMiwy4WQ2mQoXYt",
  "key2": "2ctgLaKGaxEiacChyX6cbQ58cxDH3MbjPS57HCmbkXqdP17bGGBLHGXpBBjiHYyvmeMF97SbgxefQLQr2VnsSPX5",
  "key3": "Drxfun671SKaV1Nuh7Jjt44p92Q6seKcxxqZ2vQ6QL59coTQD6Ax7yNi3eQVu8yMfTBSHJGqkd9nxWYZubx2yvU",
  "key4": "t72rRtukcTiimXGqFDCBJPJWeGxsEnobk7djkNMinz2pfDHsygezp1rSpai7rDErj88Fkj9r2xnq3XeGgpQcDf8",
  "key5": "3Tp3sYMa87XJabZaBvxHXHHYTdkSHZk39zTgzvRpYM9sorzV8V7jS97TnTqGJbS7VXAoo9yxJTDfuYdPGDcpmvRT",
  "key6": "64h4uz4JHiLNGX7P4iALhuBUVTV1BsShuZEAnSGcn8pY9RuBpyAQorhpfsoweHaf6fgSjjtjCTA8KXua7tFU4zXJ",
  "key7": "59f97VLvmEDg1NgaDX7YP7SzaobwCzdnxnwAL9VfXGb9xN3byT1ta7m4qx5cGAbKR2iZDj2JNhtRdKhxsh94jiD2",
  "key8": "3WPrMSZCUZifQbBXg6EU5e8jGMiozRAWjkgjwKBhkcQEii5e6VfXt4BeyfjqE4YFwHjzyet2LZxHbZTGc8jkrrBQ",
  "key9": "2ceSvDLf2K6g7p7KzWW3KGRVKvhEVEyuNHwmGU4S88yocbUUfeYZYpaYKmNrNuj1iogvyFPWYWfAXSzvRkWjusnv",
  "key10": "5ebMvKkm8xge49Fk3z9XEBbtyZqkteAHD4WNc8TfzCm4H65uxTaJD9JmoZC7rXv8XfpapyK4RXV28XVKPvbBJqWo",
  "key11": "4VvfLnpBvzJam3HRdUcY74r2yDQiVahtV7MXG8EQKszekUcyFLUzNWiH66NcpermpY7YV6FBuvwm8WKHNUbmJthS",
  "key12": "5ckS6NwaPVZoktmiiNyBXzyJkyufq78Bts3cjDZbBdhJkDAX8Qzvwm5pyL6DohffA5CTKGi6ZGdSxC1LymKurELE",
  "key13": "594WJ7PKhB3KV4TcX4MyepaaC9ZfHF7HngTUQnhWKHQ7o9r5npBGuCRCA38nn4v8NogLFQgHRHuWwmc8ZtFZqRqK",
  "key14": "DKG5qquzABx45sNvg45rNow8WM5XiGN18avFMHD2h19nftNKwSBvWDYN55JQYBGp9XTcfNQU8VnoQqGaeNex4r5",
  "key15": "51pybKQFPobfCDpyWJhTpAAp8Lfkc9G5r9gbJgmzCVNncRcw8CNzxexDscFHoV4bf3yn7p9iHQ9zLZK1C4Q29D8y",
  "key16": "33m21BXGBtNFQ4W6BLzUtAwVpsFbtvzQeFadhhLHvmKrb86vNkdqBSQYBw4edXpdqFuxz6BwkXF1BiYi7cUB3jDh",
  "key17": "46Mt8KiSGgNFHeU8hj9BnBNzdr8httVw453DTaU7BNTKushtvzRnigqfQewbcKuYK2tcXkfb4JvjTxBMKWZsLyDY",
  "key18": "L9x9zBGie7iKCyoxpEkMXK9y8PRMzwuj6qad6RUqkxC1zcaYKbGwVRVuarwkPQxNprPZbV4YCwLsTmwL42L9KGm",
  "key19": "5kZvnXTn4s1FFS6mvTnZC1EhxQ2BfydYWRCDYTYmf234xYLk2LBu1aq4Y2RwXWGjuE1t21Z5pA6fLV3x7gNy68Kv",
  "key20": "2vfQzYQGuUjbEUe91gaaLGxzu4ip1AYWQXmuGo7EXxN6B1B1bbz3v9RrdzrRCuGRJ8AgjyN1tbRWR1Foy5CYFkty",
  "key21": "3a5Jx7wi23PQKXotffx9pws4F6RFeZ7amebyJ6dD4i4oMBypWXPhJvSaUh5wCFYJbDTAYDkNXY7dPFQfZQmHLczZ",
  "key22": "3pN8Wk7eYZqHZiyDqHbcBk8WczYQ9fP9MWJmAHGVZ9AZm7hMtmVqrRvnHfjCC7ZJMc8enG9E9K91gKFW3bA8AsST",
  "key23": "5Pvdk1FhCF89XCL8XqTHptxFEcF3yyJe6c98oLCWAZkokWSCFMNFqRnBYJCdF3Bwp3hSgcvnbPMBcKRk2bP37JMr",
  "key24": "4FyZGvbzRoq3ryB6ohUJTfEHgVWDEDKmYEripZza2NpGmn29WDmyQW9UthqQBrTmXYMvyWVRMv9eZcXUpxFFFu2D",
  "key25": "2fP6bD8Zoo1JtxcorqjdnUeA4NTLp5Gh8pSxiYumxzamj4mp2wtCti1ffqFoxUcWfbGjj3RPHWtZXeDxLeCvEazx",
  "key26": "5KFJ3yEvKNgsdPkaUQN34Y9DkRjjcyejc9Gc5UV9pPdjwbgqSZW6nxTsikiT1x98G85uua7WMAL9oBqsAW4H5AZW",
  "key27": "5sMxr53hFGmyr1jLcrQquBLv2XiyDngT1TmiW4dZZpJFHeRPh4RDcobQxXHPuahRfYCXCAUXcdRmbnsmPfKPDBhS",
  "key28": "4qvizPa6kk2XVZ81n1W5ggtszGbbqMszLeod1rnCqr3rFZSPrqXBuTydagQeuEKYRntttz1jUghUSFgosxmRPka7",
  "key29": "4ECjkyMwHJYfnvZFhgC9zodpqMcD94JTkokEVv73nknnJ6KJu83DM94cfW1TtxrGbhrc321dwReEW1dL9tQvZgKi",
  "key30": "2HeMN4zGSLjqepW2vsNZMN89hV93RA6uGyMUm2NiBm4woWK8RqgNvLyyjY9RagR9BCKBepRBuRnhhZc9GbjEWyTq",
  "key31": "4kKdq6D3oYqyACj5fS3hXcG3ETRuAYsxixhteNMRPEx3V2tUaA19G2JzJsF9gz6CqUYqFpvc1r6b5zaz7KQELhF2",
  "key32": "5XbB4J1KJkZj21bjaTZGeYkcXgM4MH18e14htsBjXvLo9Cd6hesri7KssVvnxnSNWnHiQPGmwf88rn8s3o6g26G8",
  "key33": "5yZf999BDCuHYGMM53xK6wkeZt8XqGqPLarNFbzNy4VZUhShYf3zrRkpUriej39ufa9VQA4co3M76EmaQvC8cXmL",
  "key34": "JFWFTxmR3BfSapDesK87AYBRMiVsB5Z8PPextfFAAALT28idyGhbQGapHZnkso2mRPWMi3orrGS2iXPdvFmFXN3",
  "key35": "4thcBJrYtPpMGKD6eQviC62dHzUSffpXuLHKEPj6n6ckYZ7wYwdEDkYb2KpmuFjQiQ5ApMcugZsdRL7G4LkKwewg",
  "key36": "3MAjw2RS1Pbhm8ZiQadw5zYCPb6LRd2AayHM6tWBdxJGwpiVXn4ksU9gLKvSAGDds5uocpwAiGYvXdfb5TLUe5QH",
  "key37": "3w5XsyAdtpvA5JzPMuqVVs9ZeAFMpbwyfnnNThDcLuaZN3Kuoa9r3PiXKp2hF73rQrcMNmTnWQd6jkAaksohEb1b",
  "key38": "1tWbFGSb94vG96H9rp2e3qgAV2gHW6U13oLVJva5awdXVMvQC1PGhpFjKafWHus4PkwVXdyQ6rgr9HqHTvVZVjB",
  "key39": "2pjcqAYk1z8NLtMhTuvpMJtgy5ygeEdtDipUyraiwgsM6UKamQXRRhyS8XEhU6WuzAkVu7Kze3GoWuWRGrHV8BhF",
  "key40": "3Vt8TiUWkPCAqR88oSP1oGzVvptE2KdgDMxhKLvPCLBpGTGN13TM2e9frXHTnwSBHvfZvYF6mj5JTyvX8V6zyPwH",
  "key41": "25Nz1v3EhGfPHf2NF9jByeoH8mLfbTskWhGqSA8qZsvKbJShTb6dxzswEaBwcCUe5ka1FtB4bFLFELXZRSDAUuZc",
  "key42": "4vAJTf151eAF1xtUpHkGgvMjcFeJnvVFHr2Uc98w8pVHFwKs6mT3CwdQjdRtU6A73Rp6unBfV6Nc4matscDuQa2R",
  "key43": "3dxeeJH3XHnyUVeM7diCGKh6VBQigth5ZY9nJ8yA2j8XS2ek3Ya3noQLDu9n3DZ58xedAR3XjECbquAqaW8jc2LR",
  "key44": "3AvX22y246EZ3ZAJNhaxsjSPpEXFNfBnq3tRQSPM2qLwVFMsVyeuYpSTX5yp7WiPW2Da3WSFLC5HwbU7kmDWwauq",
  "key45": "4g2oPthBFoB1dWhfVSg2JaNvi6UBtjuY3KZjQEeUCRkzXR9WcoyhEysdTUpByrUTqJzLqbMuPtY9uQFEsnbmCkFu",
  "key46": "5hjvUsUcirg9ErGUJvwJgs2MK52Vt5GqEq2Kx2DmeCbifWLvATQcyzDUAK9Vkp9Pmf6stJRQHs1vUmM1bXA2FNs8",
  "key47": "5ZE7YWAqmMtMsfUBvDx2R1chs6ubQvyeSXGaEARRwuAbANq8eUF3wGcWz65A27eoQCmL4HDskxcPkgJD4gZ8LQXN",
  "key48": "3iknuVnwb5o4FkWKoa4RtR1FzYybkiSF1jB9juM6kGNe7F6TukMF5vQBmUwfekAbkvaSaNUQceAbQse7YQa7jcLY",
  "key49": "39omQtLEAUeEVBYJ8skZB6Tad42tufJG32RTer1QHpVTKwQdxRpBi2UkHjcEEw3UA9fy4XYS8TczmW4VUGBUxHa5"
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
