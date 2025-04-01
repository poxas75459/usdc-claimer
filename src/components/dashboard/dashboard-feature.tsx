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
    "2zijuEGoog7d1qBPT5T6s32FaZq6Ht4qYZ764dJipwHusaWnxWAzvYT6LndF4UhAHg8wemoVpv5Rtheehsu7rfFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35DyeduGzRpezJE7a6wiZq55L2fkHi4z6dQNEiQ4bQZoJwtkWfMQBsEptpaFwrHf9aRdQyGP3q4Utdg9ngitAkpw",
  "key1": "SnxvoSnrrQnTrq73iWEaTaw156h488hWvm13gkfxvuKZxqhXKGeA6WtzWMf3ABpGDh8ENG3iFY91YT834LxLWYN",
  "key2": "4bPPqcP7PdxoQn533rbzQq84XEEek7NJt9iXPyrKxHE4Yyorz9KQCGjezdsPC184uMSdHWtdrC6K9b8orzGzPdfk",
  "key3": "37tRL9sBaxxdhyrRjiNxJRi8oaPZkWZZA2iwEENz3755SD5sBkpAwUUp6UmKk3GgsNNpvPPbqExWM2uBvavRoicD",
  "key4": "2bPsAwQCX6RnksP6u9tCLyW7DSWkZZyvZN1611E7c2265yDn3ZH2YKHUUeGs9osss2AdoXfMomhx5z9mkdTXmniq",
  "key5": "5crU3wkVh1kJMrLx6fj1omb5kYYAi5CEeXbfhVACAcQ1FMUu1zeUsugE1aQg3BQqhxVRsxEEJvHRip1MuUEFi9gM",
  "key6": "4qw7ztEfzN7jwyFNS2W7LfyNuxALBhaeHsgZh5j3cPPDQwDR9i52PYfuLXz2UeWyB1ZLQG4XjnA4fTDqc3BMGko6",
  "key7": "2ou87yvr19QuVFV9GKfLsnDzeQwwSdLeih25HyWVzSs7o3wmqa6LbH8rDAyRri9dzLSD1odJaxcCMrcQwNQf6Uy9",
  "key8": "2mzTzu59PMVedMddVm5Pte3QNHKTT8Y4qPkbmnAWk7XA9NSm4CvqKiy3AKR66bA9YtUuJvGDXEdSPmSUB9DQWrcS",
  "key9": "4XyjpwBnRAGLuPqSbCfu1keToesfEWFbCdnitYDPxNiHiFqtdCLUpwCs5SoTEvKwssMyDTSUFSTpTfXxmzXW8MWN",
  "key10": "3Gxye85k5Gfm5dLTpARDE5AvATxZa8GcUh3Ym67pJPFjQkmMHf18SDPeFGoVz64WecCoSRt2kGEWnG8Yk9G6M8py",
  "key11": "kapj4EMLkLpheni1tMSvnZzUsACwSFwZUqn3zwv57K4U5rsdEGkURqR4dSvZShGuPB1obfZY5s1rUEbRiWeRnpi",
  "key12": "4TQDz8BNyqUujJJJoxzEC5zpWWzqAMMqS8g9vwuH76tU9kKRGq5hhTi1UhqwvPhZQKHftRok7BHsyhMDgztGN9V3",
  "key13": "631DHUfJSgv7gtfFbyTAA3hKSCSBn7zKdb8rGzbtEjwiMXMjJx65LtVyKohQ2LHNWME5ih1R9cHESghtbtGGdBFM",
  "key14": "4SK3rWXeVFqEabHkHxtCZU4LUkp3w84xAgnjm25y6Ygev8k8yULBNxMX1SNKzgvy6qqPDwf6eCc4kucoDS64wgZa",
  "key15": "33iiWYFu1ahVYSMwP7y1mFh1Rgaia3EWpcG1gg8dxPAoLazQSx6xoDjn2jdTRJU2QWRikdYGKWZv2f7kbeiZZSEP",
  "key16": "djbQ64gVeT96NprxLzEhV5kjgrJ6GCzQSU5DGUuApJo5NevCcK6oNLBeZPDDXbikay6dX1EqfULjjzxhuqYjWVR",
  "key17": "3nJnncUZ7bG11HQirCUDTtgny4yGDHRjdouJWJ7kettaTSQDQbwRigib7jDxRWJo4dMuF793kfMWBfdY6S3qTUfg",
  "key18": "65R2nEzfp4T4kxYtFP8TuaVCCxY7BknHBFvccHoDXNLGB3Dyq4eZ1QkLE8LCDuLKtVmmAKJax55UZ5bKgSbAFhZg",
  "key19": "pQSN6xkkgnXhDAWMDMi6dDQV4nfpvNywuvgUihcyn2cq2TtjDaQNGJ4WhqdLnAYnCs6JR3hzrCgF1hCi59sZaUL",
  "key20": "43SVfpzkG9AxigdFukdAMDeec6keay5UJpRhVzV42t7HWww7q4Pzew1zkDSV9sigEtTrBM1TvEThJp2LP8exVzeR",
  "key21": "fovb26ZzVcmLrRPyEd7NguFhc22oZ77zSfBhGbD6MRwb47t5taz3mHkCUvxunGm4U12mphtMgfGXDiQhqzFvFNw",
  "key22": "g9yUdqwuSMGN5dGwRNrJ5ZjSoY1Dj3cuep9kXgKyUJ5y2kdmiQkCNyJRXg85FBwvzdaHubbDtYwEb1KFkMpPrRN",
  "key23": "uZJkiQHsBtP8hxmzqdQG4JaNr8GJFpknf78kNek7cm9gyH1jWYsVTp4mvdkhAjK7AFkxWrkFuYFvA4E7HUo7pqR",
  "key24": "UGaJAGVgqy3i4UojLwgj2gyhpP25VUPLvaF7Eq1KyNeUwLJNMyS5SgmmWjdeNJHH9xanbRwCcRZEMRTX6aUYD88",
  "key25": "EuBFH5ssFChw9bhHS6Fjzu5ve4VwjMmTLKEfJetJKe9H6mtQ7dYd4esxe5wVnTzXoXfBuyq2wVb75uMEMWGW3MK",
  "key26": "Az9JtGK6pzBfmkDdjFANVqVUamcbSCe4VfzDkbBFYcsKm9h7k5yN9Fj8R7PC8vzvVjHS4Rc1SowGVnJhm1qpmgv",
  "key27": "43NtE1abx2vY8hxV9AftR3JHPGZmBsP7VyBvivnmgoJFXa68hgzcfMTsvVy4TLAU5d96GApXMzu7afpxMv9pR6EL",
  "key28": "53znAUuaovCaeiaVb3GFuTEeBL56YyvF5PaHy7iazQZJtySEXYgY6BZ9M6X35Envk85QRgicVWXbS5VnLfoVpuqo",
  "key29": "34rNMWcCoerL64BQvmieXm7A8giXTQtHgBWsk95P9k5EQyS9mDV3ADi3cyhxhk61Mwv9PVFtuZJNdp2L18jxv3dy",
  "key30": "3XmDbm2qgqdiDRwkuTTH6GEXDVoTSvZuaCH7LSNAfzTsQHCyigguohbVPaTiJDS7xvWEayyra6M17rfeuHhLtXNS",
  "key31": "24r73E2RbBJyHefH7F16UJ4wJKuqcrJ3mYTV3gYE8ts9ZEpRMYoHC97FCmDhZijLZoATt1MmZ2yJcuaK5ETtYnS4",
  "key32": "38z9BCHpobbhj7jdoDxCmPrCF5QdqrfBhVzUQi7PSEGXtMpmjjyh2hRa4RAn2CQ6RyJBycxy7wh8MTGJrrnrsiPz",
  "key33": "4Dm6vRaYvwEV3mt1G9iZ3Fj2LspUE9eHGbo5H1WYAqgNEKHpaJy77fkjGEYX88RKspjNVLtqaFeurqzyQkARWJbf",
  "key34": "4PUHXe9YYuVb1NJFz1DLGdQo9gZqR5n8eDKF55b6fC15A8u9xrEhNszNdgXQp4kGPY9z2fnLWUEojm1k131SkuuY",
  "key35": "4mTvRKH4fSDPeDywMMqG4qSiUgM8yzdbUL2Dm4GQx6GX3kFJX1BJCZLnkDGyAuX9jUbRJHtDzQR9Fe6Y3UEYY2no",
  "key36": "3Frp1p9oP3HiPR33GEt2gPNpZnMFpGoMEXnUF6zzxWDGxsuV9TXCvbRADCTnvw4441NtiKtW8WWkQsX5h3btVvNS",
  "key37": "Me3FeVtuqzBAU6PB1gck5jpSYd6MhqbfsXPQUFS9HTQ69xZ4PxVTeabuFmtTtfcVQegmTtnxpWJnoSFrEb7JaDk",
  "key38": "4cWrKCUStM8fYKuYThs59Co3LfmHcRbbzL5dnFgfKrpM4i5MYcVMibQLfVNCMYBjdRHH3w6nbwCw8AGwFETwYC6x",
  "key39": "2qAobriQQvSeiTZzAPKkRzB3EDcdddWxs8Rm6ZgwtwAsoA8wr2xu26N1tHKiN6wR4wvPviDjLGi6dojUCa85fUa4",
  "key40": "4z3dFmUS5emXLFLXkPi2Wya4ii7RBUXCsePkou9azLd25A49R9KQuLTLg2oACyKbxhm7DCnQnKga1R9C7yhuWe2x",
  "key41": "5fp3Q8RKYkW9GhHr3fcB54FP5LvAgg5BpL2aw5kwGQyiQZmyz3g42auikK4KNoc1t8KDJphrkT8Ks4367wWjFfcx",
  "key42": "4TTz9aKRTq3FSGR5hKtvij7QidktDehJr7yNcvbooxTqhfDSBiCTPEq3Vae8BESJcG5JFeRhuJXZj3nhwwoq4MT1",
  "key43": "3X67nzqLo2LX6NfLnvZmk4WtUqQnEVCrmzRPP7kGdUPaiKT6DW2BMRzTEPpGx8vSZrRKPaK5YfwMqKy8aDUt5eoE",
  "key44": "2FF1mVoS4N5oAdJQbtrtGhN8V547D8E8MNtv8CvLrMeQpRPz9eMtshZ32n4GE3mFvFyCvvShqKyX6QRvg5AAyUy4",
  "key45": "4Cefeo9fHDRDxEwt7NdThPCkTV85tcWyPJ8bWXQ3eQDBDyQKmmEGeyD2ve3uePRVtmjvuaQavAWgsopbLnEgb1Uf",
  "key46": "3JLTK18v4rCp4f1VTES2jeU4nMuJEZHCwuUNESh8kWKLu22VNUUUkWNxrdezuNBQhCTzXkhCGM9WG7w6yHnnKgHX"
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
