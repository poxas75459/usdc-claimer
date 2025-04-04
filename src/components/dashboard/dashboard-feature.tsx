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
    "4z4KXWdwyZBJefN5Qa3pCByQyPdmLyMdjDqAWjiK6H6KVkpbsfcwKoxT1MiW9Qc1d2krQ8cJB84bv6ML9uYkp5BS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yHNvDYX5HYzHtvybnbD3oj4DymA1zv2H9X7rVA9PYJBpYw67XphQ4PmWg2MXsueGixzMP3g71Uv94qXwvrKnmfg",
  "key1": "2GhUKdzsnhPZTxVA5vYM29xzqPEnjezAX7TSn3KWbV7955DzoTvsXdu6bGyB9AWRmrkd2RYagsXnrkP9nCT6kmPD",
  "key2": "3rMdeVJBkmF7iNsuPG5569p62vhFbyYDhWXp7UVUUN4RQJAB1mPZC9gQQ8e23iha2LATZcxmZd5mCu1MzwkJ61cn",
  "key3": "xmzWZGsTNkKtKu9j9ec8grPELttqrEm87RPvTsSdqbdK7u3g56h8PWM5BPdUHHrWRgAW8HgxUHXcWZmFafbwPDb",
  "key4": "4dFwkzWbZUdWPYcTrEHwU9Ra1TSTm6xfs5emuAvyjAqEZCkskuw6MiMTjem8pf6iMANQHtjGo2PnpyuCMRigEuKi",
  "key5": "4Ft4pyigssgyG7uX7GCi9pi58rFf4acSuThi2cfMHAYQPGcHEzdeNutGLxxXoPfBucveTAiPimXEUy5rndBc9cZZ",
  "key6": "5AuuHP5TnANP9KFWuuWqkyha3wM6F6U4UmeqhiNGx8hzbF5knv5QGgTnvGBLLYPoZH21hHdDvHDWy5RbrFF9jzPV",
  "key7": "seVuFBVJrJvdhrQqvRJwNRnc63fhzBiw5RHEiPuBDYpLmvVho3ERNtXCgnHbgVhUocVbvAFgpq8aM4b2BSuTvFJ",
  "key8": "M15jyvkAb2fMJZMTZrz3bSjZfK5cwQSDMvesTTmteZAC4HscPNNVmJPZoEVC1bAq2KoGUcPc21foWmehXEzXDpx",
  "key9": "KfcjDvvkmm5e4Jmrq6mCHBpXZ2vFXfDhd2G8CtDrcCJxPSa3EFdXDF9Gtsm2dw42thxjB6YHU3TvieEDXtT83sg",
  "key10": "2VJzQiACMncfwzJWTxw3MVBLxN5GJWPkzswBhWhW4FXpzeZ1z5endEmJLKKVb5F7p4jpaKMr1qc8yXZGLqxCHiSR",
  "key11": "4VJc9SvKDHtgWMonBNeBYzrod55gHX5TYt5tpZEfKBQVrWN3AWMAQCJEaVVHAZQvvXP43tLvH6UrCot63QWP3mPd",
  "key12": "2d4PjbYH73WgRahTop2WV1gJVp5d5MNfxRjMaR2pmtAGdobuRnn6hVVeki3zxYo3vNHA3pAWJAFVjB53gxAUxcdA",
  "key13": "4zYAHPMmB1pu8DcpTCkNw2hbMf6WPTVE74X44vaKjGm6T1D6Se563pE4yRxuv6dfjdXbzqjMj55tD1MCRkymABXC",
  "key14": "2QRPaojkTXHkZ9PhZ1W1TiYChnEWNBRM5rBJcwA7KoEpNFFjuax8eqgcusLFdrrcso5gSHnReUvzboTn2eWs1oNV",
  "key15": "3h5SPvYCKfvbSFadyqiFcBej4FcuKZbzUZwqoNsKWKNUjBwMZHyZJGqyb8GyiTMFSgyhz1SasoMmkV8cAv23y91q",
  "key16": "5vAdRHbD4NBdRmwzqTSWF6ZL91vK5QBsxFamUiyAvaAqXE3Y4fRqVVU656j2Qe3pBT5x18VHbxrLddJ2QKgKLZHk",
  "key17": "4uZXaVMkenVg9RQevbMxhmpFmEcFFN4hJyan1Kucw7CkQQUgCxaMbvUoJEEJAESv18arxM76gBkfPtXy1ACLg5jr",
  "key18": "4k2FvHuaqm1UTzLf2VtEYpAMGv5YchMqUSVrrW2QF7sVfY4x6LvfMhQbsgmo9vVSXXgKLoLSmHSgVtpXLaGBMqNe",
  "key19": "2JFAvMmJX7fnfaoptXy5UVMF44RKcfJh1WayH2M4j6J7RGjMiwkijQUTVyxq9rjyWedtuhfgzndgpsNZFsN1HSP4",
  "key20": "57g4yNToMwPg2LzaYChjZkjDA8kPmaKm8VikoZqvqRjbSxrL7bhTRt3Q89s9beRcLjupM2A67K3J3SjUoawu3ueC",
  "key21": "4GrsCnS1FpM7UQxWNzw16qrKuu3VUYG1ZCY9Bmz4r63UVHVdQiDzXiPPytmMBur2qSU6obLBbQ8VXpyZAmPf3mLG",
  "key22": "DyJqbYPaWkScjsiUMCHuxF4SkfWCF7kHGjArXE2F9aopVcCHEUaWGQUvNbVnkd9LNVvY4kGCAdXh3rsApfRMu5A",
  "key23": "5b61XwmVuFaV1ot1rCNAwfauooushiyLF5eCLnZfDSuTR5aYiMdPsX9BceAfSRB71EejJD5CiKN3YHnLeV3kdRLN",
  "key24": "3THQWgkEySgLwtKXutb1wyQDy6WNrfP2rC7PSN8JukCFRX2pPA7p9HRbniPzMPLLjfZc8nHAedDtN6rJioWvDpkF",
  "key25": "BZaPCeYvaKdopdWdpUAry65DUXaUtaKajRoRj6ADVH3d7e8fH3qTEPh5qZRzhHRNqAJhgVAPMBrvrK7TUPCmkFY",
  "key26": "2KMZTz5iDkwz72cHBGejAhb4hJNiZxeDhYNBbKrPzTRXLYFMbM2HRmorAfKAmCwRX5PxeSJNhxqntjDcNMFGyb53",
  "key27": "3SGubGPQXnKY4fDjgZco2Fd6wZq2zZwZHtYmGHtgosXTuDeRBFB9A33sw3cvbVAodZZpSe2bNaVus4XVf9J7br56",
  "key28": "51gd9XDLdUXAmvzFEd47DrTepyqSTFEiSQp25L7wXoe3Z16RwPRYVSmHFcGpvVoPCxrTPqTEjvwegpL7r4baXG2s",
  "key29": "2KESdhnuRQUZi4kPEyUdVR5wdh4KWXdixzrZazhNyk5tR11F1CqRJwr9PXXYBoVr64VGSw9vg3vwtqMKYgiYJd4v",
  "key30": "6PsrKxkZPXai1piGBbYVyboFWCw9Ya9r39UY5VbQatDzdy4cfbyL9kDRWQ1CLTjvsAGiBnvfdeVhTGJJcrwhooY",
  "key31": "3EhNwC9JihH3f1XDfRsJCEFVanCyeWTQY7n9LFvKsfmRD4i8yhHP4h6QkkYaP7kJmwv1GjbnT8PU5LiAHj24jzPV",
  "key32": "2nURVzKDpX2VVN3GtDHjobFxPpPSkhTPyMvFGehZhji33ARhkuEU6DsFomfA9B7mqUSs8GtuJ8XUkTvb7oRBPw1g",
  "key33": "xQyp7a6mmhJK4XyE6g5ovicSW8dwDaqeTdaqnn2M4d7UgMfTEsMv4Fi52T8YZP5xzDQ495oqLRFYW6ZfoKNyGBy",
  "key34": "2LQiukcM4WMvc56Gr4nEu5VNMgJ9Noto1gbCpgj1rV7B8EzGez2ZF3zu2BtwqhUP4pQHh8Q8x2xJ79LzWHnzQTpv",
  "key35": "34xt5Lze6dPjWEpgn2fSqYp2FJv84v931P2uQw9zRf6xiLqJ3CsoANqvQxhiMhuFgRvE55e5ncUhHWn54CdtyoRE",
  "key36": "1KtRhHE4DDjeAdraX74CjW13dYdzREAjdNsrGLMJGLftPBN3Yb7KrCiWXAZoecURMyvtVeivjx9aDE1iue4E4Gf",
  "key37": "2EnuFbxVDGZwobN84iCj8AdkCERcavhzmKghPPkpeMuAB4gYgfMeDZ2AQhD8nqXW1bkZ9Pcq9LGRnMD7gGkr2EXQ",
  "key38": "4UZXfAsb8c5d6PSeNWjRp9exV2Md6URt14ojasZ6MhRTAoW5EN3Mim2g2uoV55ANpqVV2tZ7DPjXmm5u3B9hNnvt"
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
