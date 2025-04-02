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
    "3FyJk6Z21svepbDigQ2LhEKH4GmpjKMqJAVLtuBmLj7bjKRBkzeFkTYCRp9eCq7YJ5Fm8Bfe7tKo7w1t4Rvdi6xC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aW9GUeG6YSUnJmvFjk8iFAt1G1qzooc59czc7mxuznfiBbHGs5BawHpiECpE7m1Lcc7JuyuwCDiTDNVvS8hAAkS",
  "key1": "4Z4xmG5jYFBnudoNHdd3e3h6g8D2bebBxYPoma4PZyPBnEwZKN12GG2LeBD7nZWmEZaBgVyFpZymgdcyTYkUoRDX",
  "key2": "2gkgsbdN7mePDnASBMkFPGY2HB6hKDpR8yVPbaoKtuScF2omwNfkGfax5uQFiLz1LNHiaQ9Wua6H7pTAmPDy1sXr",
  "key3": "4hbGQGtXSqLcr19zrAt4JjvQFP7gEH66zSmz4BM495ZNxkDrynyUpbUNLAovUy7rhNhQzJiLf4Z1DyySUDqREToq",
  "key4": "2AFvmBnSc2QR3PEyi39N4xCe34cTkfuiMUVtVCMJCZe9D6seqXxN4bysfi67BdpRWYnHnMejas8d8PM4scUGudRb",
  "key5": "58N55vpUw6C3cKQHFzQXp6BJbJvdPowJhoucVzduWsio5x1YshfsmPPuAWNz3CQh3X82bKCy2FwFLqwzZTZdGhx2",
  "key6": "Ankmm8pSbCnqf3CXj3RXf1LS3mzCG5FTqd3j4u4gfnNN8GXrfbudjaRjdGhT5c3FAPn5g5cmwExYi3hxdtZvUod",
  "key7": "2kzAniDZYshzQMZBn8aieBgor9SnWi9VCxxihTRCZUBbQX8pEGxvjFztjokrayhnUvVbSe4fL6aVTK7fWuNL8pLo",
  "key8": "4RrPeEz36ESCLw6HgjsqZuqBHFbFkkJ8tzNeHS22PYKRFXRSGicMuWdLjF1yvGJgC7ogZBaJZydrNZTTZbfbjqS7",
  "key9": "59ri11pseJDLbDGMNHfZx9QLmhHT6kZ44xMY4wXocVLP48637Cb6DzYxMUa7xPB4gvrPAQx6zYW8osVuKHzAgu7",
  "key10": "3EcNr3uAkH7sQhvozxHEM9S45hJ115AnLsH6WmazXthMPbCP2E5jNavra6fsScBRa6Cpfsvqg1cC6zQzYXSqp3pN",
  "key11": "4jD4aaT3SRMRskMF9b2j9ZatKH8nP4pVqrGkSgBXkr35YDKbXMZxpu6NAVw2xCHM3zF5BWyeBfmdSGCzyZ1BTeat",
  "key12": "2PkmqnoUCczv757JSficve3M5HFNJAHYkzX3zXr6LMDAA4zhgrnNSevUetcTg4S862ZvaQhbxJoafX92wNGjmhhr",
  "key13": "Fyqb4maPqCmTgsPMjSmmPQCkv5X4QLCCX8tcXzBDLzxvv9kPUThUGXB6QTBG3p8m624pnbRptqBHFKWUJxC3124",
  "key14": "5VfStPw9qWfaCzQpNtkW3ogPKNHU7SemKrDcke92CfWSfwaS5U9xMmHMhEESuZT7Mp9W2tNNWZSXeZKiVv7qNk2X",
  "key15": "2jVpZYjSXW9gr7o7ivPQhrREx96FmpYSL9wWWdhCXWN1picdVWMYMWfnWMD9cxhadhJj2h8xqN99AfpqicmKzSnJ",
  "key16": "RTciwu6fPKTfrGmgxTeiWixnVzBZNKaqE33TjfxYvwDMXx8hjT1Mdnwd4Pi53YHF3RCEKfaqY6thSz8DdFD2GN1",
  "key17": "5orWA3DmhHZ8MHCGuyeET5UiBUFTYVcfjDXFeRrVMH9S6i21T8tRe5aP8XUVGR2CCfg2e4uVYaSiCV4x8d9UxL67",
  "key18": "25pnafVt8fLHo6GBtoUZ124iCnPRUJkACHEDHJ4chysmmXJFf2RePPZc1FohR5R1Fi2pBei4Nz1Gj1pY6TByFnja",
  "key19": "H75jnoV7Pdz9XLg9P8LsdNSg9fEKWwKthTctcGRfFFU3KnUc5nivQ7x6FxHUXFDEgJyrpKefuKVAWRKcyX9nLVy",
  "key20": "4KUuLZaN9tB1fwhwhfHjjHdBkFun677zC73KNWq6dhfsYpuPiFW2fuJMzqaiQby3tcx76qeC4sTLs5MKGAheT2ZG",
  "key21": "4YKrNgBo9W4db9rM4AsGB8vejcftRHPoKDESshbrWCMsKM2UHK2wRTEA7zj7y3VKaMiknpH8RnDKsM9H11xyFMsW",
  "key22": "EGvNLbdzsotycCfvrGsHTWNQamM4BtQ1uDNmh3JdDAo9DYhtk2LwY3xKKoZtR8xksxo5rL9bEu4x1vLvpHr5Czj",
  "key23": "4xvTeDR138ygJGG5XZWMmV3wHs4rRv3AB5VH5R1XcjTAnkbG5wmVCfgybVzLHq29gv6HAPWWkqc1T3mW76iwF1c4",
  "key24": "4P4r2CNHoNkfMDnb37yjqc65sgJac3rpY6b5nsvzbGPNJAk99oQ5dEtDdVeQu6knJaMmJbxema3M8N1w2NLBVcfM",
  "key25": "49GGNfx7fgrUhAk8gk5HzAGsYRvQ4snPzo3oyBBk97Qkkv8vSHVxvFPs82Y8BnK2d1PGGVaxiRAT83eS2kXdBwMu",
  "key26": "4KpyXDG1MiEzKsuRDbPw1vmPT86eBFVdpEKvQb78RmJGCA7B8DgvjAj6mfFqu9NvCaBhp3SZLwa4xvXc5NfAgGmK",
  "key27": "muXsjbgGvrCKWztknXn36wswngnWGbb1W9Ggr5ETD8RTgogY5aFe7VZg2R8s2iEvRs7r5ZFo366ze7jaqateisZ",
  "key28": "2Ae3c3ZaucZC9WfXGQd5A3bkV7vjQAJgbMngFbrbeJqkRjrvQ2DXTLV3PqaENwMvrxuHJqUqouJrXsU74ypW8ssq",
  "key29": "3UVXQyvAWuq8eFK3KgNmush6DtM7pkmJXJ9GHadzk12MMttdVoD56i8GsuT5abntQHUFNDzPq44Wj2AAonMwYjK4",
  "key30": "3JFqf4KycYt5KYpnPuxE5ZW7EuHUbANHdAryRc29Km4t6giHTWVQrnAq2RrKyVsgs2QurXv53VcmkiGDLYG2Ydvv",
  "key31": "2f8PzAup4kfwgMKynchgBy7jbtwQhaSS8NVj9Gi4BTsvyZhXUbHpeK6GL8tM4rcr42z8YCSEfakJ1hAD35xBBCUk",
  "key32": "2DJnU5Ci5c5LPppDjeiCCays45ExRPRmt6j4QcnjhM6nhpmDA45eLzkecncrKPeDGGjQg3EisYjh8E9AuTen4h3h",
  "key33": "3r2UXVE7KzVXVy2XUM5XHRQm9U8ua29nyx85hNNg5WLLpDXCYx2jdhrxghC1e3gLX83Uw3Kh1VrCbMowGYGrhgU5",
  "key34": "ge8Jsvmr6V4wThcvrFp1k5tUxnoZcYtELMurwSMb7j1meWLzW77HRFb6zicerd4EyqNsbA6GvM4FnGXiYcm3cw3",
  "key35": "3XDPX6SyG7JsmoYZnsZmHBCr9MNdF8y7iZN8WjhSL2TAgbrhgQwZTk8zyKWBSyUc1rEZx5b2KpbnMEx3mJ5JcMah",
  "key36": "46QD9tGgnQ75tm8GwufW9X7a5EHaT3poriiVWJ4QRUqcmi2ofbmPK2ydrryeSbh219myADhQyrRqMpBFTGmrbdg7",
  "key37": "5UzJWUxJqprcBgyA5idoEGQxmCoYD14ZdHpcJskAyHTtJvszPVDzq2p13iEKwWXE8DcfaiDvWJia16545eXCBj3u",
  "key38": "2h1WjEFRPMYishA9rH4VBfmZiYTDKBYNbpC9vUTBLVMbVKMbFdo3LR8WkLJ5qEvd5PfssV6fdh4r4bcYQRQExbKw",
  "key39": "579RB7WubhdanwjYeDTVuNtUNm35LZ8eFpbxYVhyCTFWAMLLHRA1UXesWsqG8PndCk3zPAnojcc9eTL46MUfNe2c",
  "key40": "4LKdpBkyVMugNNg2gAi78vgsJKeo74quT3SRnrQ1iK4gUppKzHxtiFE7ygHEMoGGJe9w5dD5BV77H8jTuYceyxhL",
  "key41": "3mrYUq4Gzt1iRajQFqBPgVmqwZwNhXoBXM8X2nRj2aH5sgEpSbUKzJ2w89tKUcT9RrJu2KuGJJsHo8KXihwK6RVs",
  "key42": "2Q2BHMuhMQuY1AoKTk7th47E6G6AGC54snTFoaiYH13GQtapusdUaSGEgJ4gaEfDDtWt4yufc48pfgvMPu7npm8q",
  "key43": "3fhFYBs1CjiMsoNHzUZzRRRVgxTNm3DwSnmiy5X9SPSPuY2LfSzndTHVvXNVXB5tfSHayFHQCaqVzZSkXLuDHth6"
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
