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
    "5928fRnTKW9nj2N4cKTpjQqSr31TMQ65Ls46DzeAj3hWyAZX5yTTAdqYiGHCs3YxHvBfpMtSkXyKXpqvT9YgwNrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZtaWxLWKu8WbgYs1QkgujuKTi7YZHANGGwbHMpwS7FoJk5HQjJVqv6wop8GCEPms3peNCf8oHwQ8UEJCFDJ3Xs",
  "key1": "DJNQ2Ywhr8GiE3Ezf5uzD8LrnQq2iNFn222yxi4ZGuSNs2DSdZSm9RFrCHKJfxsrutRecPtcnq3WzkBEKjQHmuR",
  "key2": "52U5o694EvFdXfQuNZCFd5NnN4zEuiftHjcntZ6jPmD8tshAMd2b8zvb2U4bHnqHL8C4CWi4atkNcW7C71wb1Aey",
  "key3": "38y4qc2AoGf51cQLfzScqSA5o2Vu9bV7NPcQVMaAjpFZVZX6sf2zr99jrsFkTHaCBFihxjBuXTf3gVTzVvaa59dq",
  "key4": "UQwWssDFHozAhBzcVMi8D87ZAi4mH84zytzVP6reVSvFQHLaofJqR53GYV3XeQyZ9YgMDgggS8uX94n298RACYv",
  "key5": "29Aiv3t2KQiLmBB5ivUSsJuiB7Uo2J8ipYw2T8koXW8zmPSCh22dKQU8kYCwb6XLhGkdYhhixiWFZ6VTx6SF4L7z",
  "key6": "23KKhGzepJiskPrR9ARGATj6qghRLCgvJ9JJ27hqB4CqtRGGCPf3RdtSShrayS7J1FciRakfTjZw83YMjciisuMx",
  "key7": "2t7fzptSuG86CohtAy3sKrzC8np2LErBGSoLTuc6QSgWdZHQevZ5URYS7s2eKRyaJK33SJKVhLQZGTCNhQDCyMys",
  "key8": "583KkFRNsidFDxd7vPVTNqCmK9wUhZHmks9s9VHCZcnZuEhqqGwFzkDqqpWSNsyCZ8XYTBeYXLD9QqVv3cJPuUrH",
  "key9": "65cgfXZ1dqPkUtFfuznExBxzmx6jgu18tcvaDPz3ZaHeVm38PaJC9hhvKF7vMWXwtrmtQ8tTkp11oP1tRv2Jhs8G",
  "key10": "2uFW8StJisbMsJNkgBFmBGrZjQj5hFmsnxC5Q8aZL1DnQ9dbCm8ThkMD9jUtWrEYtzWU3TaSuVvaooX4rxgYzXUM",
  "key11": "4ngoaG4g6oJH32ovsBA5Bu2NQ4QErEBirdkyThYzvqCE4UkXLT2JpyXCgznZFFg47gzLGmPPjMHJe1ry4eF3ubnp",
  "key12": "qwNuviQ4GFz8FtKfdQPn39qBecjmwqTr5wtnBihnoAat9r6a46MG8DXPSFQRFw3UZ14fvnygMC4g1Jq7WS41Z2e",
  "key13": "7d9oQvsVG9dTB7V1heQwXvpzyf2KGGA5rkyupRBEuEHcXBtL5Cp2WhWcZYbvoT5gJc5t7Q1PqKNpdvPJKwoTswN",
  "key14": "4SjAKNgfYzfnba2DF6cKpaXYLFs8uPjqNodXYpkmqX9LdFWQ6u5qznec5gQwqRmtbzYYy8WBEdvAGkNTgcGjB6UY",
  "key15": "2VJmPpdToWohbqpghM8S97qAKxHzxsFrBoJhq7kiMbVtaAJhKD96m164qRqxRMVStfVC61LjCdrjHSKx2PYdztn7",
  "key16": "uosjXoVH8rE4T3P7QUASWtcvWutRWdtpxSPVwjwEKdhpWgevQx7rC3gD96nVXGRUzDJazuFsgbRtKwGxC4uQvf5",
  "key17": "2XToGuzKFBicuDbL2QSAFhKPFWAd2aTvbMACWeXEg7ZKy68JotF1VGLo47jWKu86kJd9wpwz34oo915dY8AQea8u",
  "key18": "4NhM4x7RAz1iiHAMQc3k5zLcMpug6jA6noAhrUDi6x7jNiRiVTkHqb6RxAsSRf41xs8pb3SVgGRcz4C6ozFUNbDm",
  "key19": "u8LuGNkjcseRVycsRHuBogd6Qj8S4R7nuvwJi4SmS8qbQbet6zGr6iAk6kuFcCgP8ECBpLbLrTe4gHVrVNzvAPm",
  "key20": "29JuHZieJqZ9rZqe8MPLFiMXPLXdJcDadDSpwUNyGiKU1WFACqU8TU9ogioiZCXSUPWNX2te7x3v4sUt12jiwKza",
  "key21": "3FQY5LsfCJZEw49r89AayezS4LPJYot2cpz1MTxWwCJBw4w3R7NdpWa7JF88PkKkJyKrS2mGFtAE3SuGxe2daPBz",
  "key22": "2gB3KSxC7aNz2t87WcVPqNAYqGmghmmE9SfdzwMxj3VeBo2jyHyu4AJDvjEUvy3ZtVMwtFVju3ZWHejGk7kjME1X",
  "key23": "4kXbvorXJVb7jJV9vg9V3DL8hCYhvfUNW4RhhDXaau9kam48S2JbouFez7dNxVuJVZZ9HbXMsz6iaBCv9qgPVfK8",
  "key24": "5YFoaygamTnvPdS3wa11hgRxGkx3qiDEtarToM8DbzyP4DfsV73UtfbN7D39xr5anbAytdRhkYFKXW1BvaNrgoaU",
  "key25": "24Z8q74tQJXXBk1XP2jdvRoZomtb2xgo9eie56cF8DsySn4VZjGCkejSbK76vuDdiZWYFAgHNE5oHzV1QzEGGhtR",
  "key26": "vbAB5nGzWBQrJsMMbj9ZzpdT7BDRPqYVchYKniSgyQypmjjosc2q3ZRpnpUfyWMjEbx5QRzRvah3HqEkyUCBvQn",
  "key27": "kUAGf3hhGHZ8v2oqRK6NZoRHWUHjX1qPnoNNy366xunrwHqEhBB6j6t2Kj6pXCjv76aA596Zh78En5mHuJvumgd",
  "key28": "2Vkrh4QFmzD3CXjcKaMQvUKG8tqR8poSa8juBoieCYi9zu6rhDuRGrKjTM8BXBWD6MVEUtr93XKsSu6kHTYAmoxV",
  "key29": "ERAeg9pSXJEPS2S6w8hwxGP1WCQmx1Y2KbFY3BZ6ds1ny4xmHwF88gXx1v6J1SvBgSzMQnpd4dcsX9bZ55W9mKB",
  "key30": "4op4QKqLWhjafd6uMjnhehtemtf4MbQ9zHnUeX1TFiSruK2b3SejyfunBU6aYo19qbiRbn1seTxLuHPsFxvgfHAQ",
  "key31": "5XHDRJbDnJWDJy28LLaVMgMpmPJQbpe1u2wNwnbyZVCDYLP1Fnq1QHEpi7NH3Z8QiTfoKcKxbjDkp6pLU2KZoBVA",
  "key32": "3tPVnspN97gY5LkjGrcDiXSE7jUT5EVQHBXTMPAPPL4N8m9gj7H25wkSTi7QmZgmc2vhtZDMGu5s2VayZ3Kvra11",
  "key33": "2CQdo5iQG5VPFFTBhLFYBoUFBPzjiq14PLUibHc68EyEjExztkpkUCqJyTpkWAButnJL4it9iiUJtykD42i7JJjG",
  "key34": "3HzgzfPmfnYG4xBQyVYgesS7kD984EPR3YnuMMhvotDGYyUkSRXoA85dsP3egPNxWosxdVEXDU1bb1eipAx55M2J",
  "key35": "1MBv72p7ZMi1a9RaD2Hia3pCkvngkoW5R1gUJBttnKbwJtFYuLQtDvWfyhYMdmPZXP8NjVaDLpFwfDKrqDft3d3",
  "key36": "5GzZoHp1eZJswfmGQKgCLd9ugiqHntRSCeeG1BY2fLnJfZTZbH2cMj8kt66rNrgmNd7sp1eTRkMfZBNMgbLmPptD",
  "key37": "2JhnjNbZyK2RGyNG2HD5msSjocts39YtdzsvAPMJdhAkiFLxCPEVj5Qi8PgQwDie9j7DiuEmPvL6ebDTr8TAPWJJ",
  "key38": "Sju6LpxDCpRX1pKNztVvEuPox3d6qwv197Gv2awm8YuJTkw7v6TCS1MzGUPpUTX2VvUgQJeDhyy4uZs4M14VMRY"
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
