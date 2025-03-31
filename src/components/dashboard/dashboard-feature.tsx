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
    "36mDtZFzuDzajCLuE8BrWkc4RR8qhxizUvQD2euxkCJdzYzxbz2zmGf36boSKozdZF1FYVv3oMcxtZ5zrXmpSL9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "io9jnYtBSYK8VQZg6xBWHw6UKZ9bUCZ3mvcoXNAb5hteGHkQ5ARmk6Zjz5MhFtzg5YMJBr6mXXdXJZVficKar94",
  "key1": "5DxaavK2M8fBPdjzmZov8u5ZE9eC66qUEMZM8Zc1BHGd5Dyo3sqUyhYNDVFnunNs2uXxcFm28GQE8n7n1vm5DEUH",
  "key2": "48PRtDpRMs8ZXMi6DcPfHhCpy65tSc6Eek4WBynBDTZozWctB7wzR5gTdBU5tAwbswd84WgybHebRp2ZhKHZLah9",
  "key3": "jccQmUiJGEigDeUXA3adcfH8VthNexRisvc834aHFEAEUviuJvvDwZgdCCbjoW64nPTGgB8ozN3y4G3ng66Deyr",
  "key4": "MuEBW8XAsMcHm7xrBVAvu1N6uziSozFzZtd8x4CUyG2ZFy859Qb6cQos18UX7gCzFWDEJbxRGxKU5y99eYmSXQq",
  "key5": "3YRnvkKy7EoQHzF5zWhDgnqcHzzcdtpfUrfAtgXS5Nr5FFEFDd4fh5EttfQwpqta69jFAEMCxa3bGGtPUbLgwBNZ",
  "key6": "3qQtAEn6SN48Yt6wA92JkennYEWVJAGorTB4uDmxGZiHxpuDXevACL3JkwZkfYueNtYptFWFE7aGAWVYw1KBuWg8",
  "key7": "5155YcWWPLfqa4HKb8GBHjNo9kUxLaRNqKZ2rtq9qK9LNL8za5M58H58s4irwDJLiNLHdZngsAqKDBaunJiwS6pL",
  "key8": "g7d5tN2GTyxNoeJTT7RVM7K5r9ydNRxeHJiqA6Bh8uMaY24XWuCArgjq37dosu6qTKqikdEtNjm26unmDuhfmYX",
  "key9": "4ArAVeCCjCNSmPXDrKUije8tRcWiPA3Ptw4FvTeQzsUJatuXdd2UR2Vjbhc7UrLgETu58LUcp9TUjNtS4WVeXkPh",
  "key10": "67V4VVx4AYrAZ5epKLd2nPrBNeumSBDMyo8ZbMJbGsYFyDhnuq1TJ5kEbG4ewnYcvy3XW8XrGfbBCQ7Jn1DRSK5C",
  "key11": "3bQuemqK4PirvvsUdBpEpKNFivTW2PdW3pzRFhDW7nBTvopwwe7hhRqJEiusGaFcBsUFeCsfvCq65rNDx3YZFa7B",
  "key12": "2TpMnCq8WutudqB3jye8uQ9EnGQh2fKCfAARR5FdLST3vVDQh3rHgWd7uq7MRdmj62Su3yMXnKLey2BMCDFxGKz9",
  "key13": "482rokfgGhNtzCP1J5xcBuksUyc56PNVhvCz7QY8zia68M1WKyDGBFh4jVgoKEbKAyeu3CvJtLmUxkSKTTxAuQEe",
  "key14": "2Cc2hLKBYPXorhyP8edwsw72aVDia2AYRAtYNm5b7JrikiZcYpzquDJsTDwfMA4ouGeNWL5p2M91Rv7uNvNbD74h",
  "key15": "2932PAvqyJoWZGnUCs6CAiEaBF5xbYVLPtekbfw1WRYWTs3JcWAaXjLRze8VwEbuLbTS2AV3CNPJYmibZtwBJ7DW",
  "key16": "4F4UkddeL9AnnkzRQnLGimJW6dxfJmywAFoSqb8L4zcjS4Y8gMGvNhQbzf39MAwjUNngayNiWDtiuXJFyZ295Zmh",
  "key17": "3hKvmFMBNWGz3WHMc5h3FK24hyosv9QjAUTSC2Yd2DzY7kmPQVdxXGjSh2fvE5MtBfW136YTtfZR8ZirCPpXJySq",
  "key18": "2RVNXnG9ZFpR29tXr8Pedog8PcG5qAPdz3twPc1NodWJZPv3xjepnycCVkZrcWoSb8V7SyEyKAW1VsUQ2HqduhZz",
  "key19": "3v9eZtFbFGxmc578XD1EGf2MinwvMs54B9Dgexam5cnqRkizqRgQg5d8coPUCWj5wv4wjboCLX3QQJenNG4esgem",
  "key20": "3MV9xjgi36ayDCfuNwtHeMzGgitDQRnJj1HFDs6VUvnuE4QbLcxi9NdAehMooWz4GvDNpVJuWGMzTMgPHjwCczXu",
  "key21": "oJn57m89LJZ75EgQnEEFqaZ72iHiff8gZHSswSpFg3nv7yKMpVKtZoujcRZaqrCFTJYW2hidJfGaRAqqQNfbgvd",
  "key22": "5d8eLF3vMC8SeFXm2E8wK3gWcmvtPxut5o1H3q16FNdh4RwkhtfVT975kTz4dh7CnCg3pcA34jj2kzv3i6RszqEm",
  "key23": "3XYrR4gqerp19CNoEZzUPrjtJC751StD75eJCnmSZhCCvsEnmUG2X9vD3cihw4bcfAucNSLARnchohVYBNZZ1gLH",
  "key24": "2KNQMWcAduhkh5KH4KrA6oi2siZUH7fjDcUvPKMsTzgjMFQ2gFSM4ZZh8UPDBm1SnqJctiMiXTExojiPotsa9SBr",
  "key25": "16pnT4FgNH1mvSDo9XYB38D9unDneiUCJj5E7Z5L3bCiWj2GUN4qs59Pp15iz6dPgKpr5FW5JnsjggB3CNAX19R",
  "key26": "46cg2HAgo3iggK5jHGSdDhYp6mSSHfXRZUnNMCk76Hb9YvybpMKRdVEGmZt66XghM9koprZMA4rNK1HGNa5tRzWL",
  "key27": "3miUZ8TV4NG6khWqTU6fGXgREH1bGGhWvc3xAiozbQFVVaNS22TeQVhrhtaNF5XsbZwXcZRuetq57DkwViJU2V9p",
  "key28": "23pDTxmiMQEpKuC1p9YpVstKsHaPfz1o2Kggqyc5nzkRE8Hhmyk8et4FGQHDoR7zj5WctnyyGRoKTuLQb3jF6urQ",
  "key29": "4irh5iLNQBBWtZysNDeEoez1i4ss7yeUoVqCHMGdZibPgT86HcQhm7oP6itisQZR9bVuiNJdqpR6kymnMa2Uyjqn",
  "key30": "3KcMeim6RWnTvSUs15ZeHW2H6hP8Vya7i4EPpvouNUHuSE4kuipdtF1Fg5NH2Getwpr9jtP6rRb1cNLQH7s5CZdF",
  "key31": "U4Z7BBSmNxsnRNbtPWmHTmrCwDNDW1P6fSD96wmgXZUH5vEvWZmgWyYngdxnU7YwxswtFVLzPkob8MdkKGkaX8h",
  "key32": "3vMdZRjJ1VoqKRpDrxUSddff84jyYMwJApo47rCPpUbKkXk5pYazvCyTRR5WKRtTZgXB2jqGfj3nBs7qQeoP1YME",
  "key33": "49H5gFdBUyUAyE3pdbLinBmctFThUkj795PDUrwmeSvpJD4MjThUhyt1jXW9RGsi86bNqk2kCDPTBsWja6ifVSDn",
  "key34": "4quwpuDPuL41tJZGCjZgjV6go5sYbMx9KtfheeRpmz2xmGHVHPjVWPLTEoZCAWam7epYMruKwhbRn4XM6bTAMxvd",
  "key35": "2Zaz8Dske8SFGgnia2Cqky1v2YztMjhhipvSCeupA3zMYA4bQpPn5FFyoCK5wxGrdwFjxRpwePMTW1Xfte9Lctzb",
  "key36": "2sAqUevP5gEvvMV6U49uqwBTcrxQNYT3z8vAvWCqRRQM14pvJCaasoBaPkA8WnqZZbh6hpMzxDFREsLoEGSuE151",
  "key37": "2hB3Ct4cZENYmG2J9CCS7KB8UkhgATTu1pBVDnhK4s8GXrFagmx1GSeku1YKwJTJCjoTsePDLKkpeGhgDXGjq3QL",
  "key38": "4ni7UxRoc12mptasqYBuwgR5dMaRXrLbh4yCRTzTgzfbkSbuKjLRGrdux8MUxsLUutiDEvpK1ytuZtcJwFKeUV1J",
  "key39": "4owenzAVkQANdKg31iX6c6jLrKUTiouBfW5Q2rvKDGXaynYFfGPWUoqPoMwwgfRuHmTTJZCHsVCsb6CquTGARqEr",
  "key40": "4L3JKDwLmR5yAcNRm2oaJrQaWQg9thP8N1SWBqKvTQTbFeDGkE1Ww7ximHeTPZdhT4pZ69QiJ4zoneFwhKgzTz2M",
  "key41": "3kk5K9UCmgc1eZbjhqBTUBkgNmWZfKoptUMxbc6JVvbYLSXAAvyaqgqkSRn578TLaz4m5ENuh8AncPCWiMWRGDEG",
  "key42": "3uQ6jmGyxhEK7mQFFnVoWMyzjeAnFdtEMsh8dnemU48duRupesfdip9TXkGA17hHTDtLEKBEuGaaaxnWG3zgCqi3",
  "key43": "2WsjhwNiE9y1YzUKfemFTtvNsYmqSZJtdVU5KekztVNZNnvsfJB7R83BsVg9ZupZMYgAgWSHHaWssesBgNyEwnw7",
  "key44": "57vUzBVpjCnFDPLLbpJxeqjAtb8ibZYzfReNQWc7izsmNNm3Zo44CwF12TkygekRhYAYMoN7LyFo4UwTK6KBTvoZ",
  "key45": "4QvjfMRY4KqpfnNWv8iw2MjgbJz94spN1Vt8DkJioTcLthfS9yWjCspKpbcBqqbkfay7pgeajTeMieq6tVqHeoGu"
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
