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
    "4es5ba6ATZ74smVLh2oSABMHhSyWfvqcuAt17CBzDtnKCGBFh4TxxvrC7GibQWQ44RR4G9Lz22xeyjG13uVAKruv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cpizJgGNao8AYeMEiZC68ENHKEyLkKkm5MV2akVYZdrjWFnKBDaaRuft8iCgXNN44T59Pw4cB4rDpYmFdoFv6X6",
  "key1": "TRaNqcx6t9L1mi1PiQZMx49qJTb2SGzELNmRfaTJkMX8wzfEwhKHySbrVcYDPfZiFvJQGbL6vD5DWJzCzjd7nX4",
  "key2": "UNfieRxYDGfSg8aC8uNR27mMqXyCJbb8YTrKwoBZcxYuBNNnHHPRUQ2N3fyJwiXoT8oS86Tmq9HG5h1bVy7jjzZ",
  "key3": "2rY1XM5754GygoiMdiCBR7rmSPdPehMCQYEAJUDHJm4A46JWTp71pYUZKG35jfL2HYD8NSe2ZJdQW7eTq6cZm6yN",
  "key4": "1L6uBs1z9euMK76fRi2XUJAYPUMuD8KZnAWrtx4fXztcBDSV1RaTfCvLsRwbfAi1YpgWGZXN5C6i4qXF5VkYgHG",
  "key5": "5Zw2pjn4oMzvMzkA7b5URG1ETKfpGK63uXzjH2opMuu1bmFHAkanpJBdF2RmbZ9mdq8tiMSfG8rf2JnRPLiWrV5u",
  "key6": "EuhEsAQnhFGdPqZ3FrPWYtzbwrt9T5QdjNdeRayXFzAxUby3zpBLpm2C1c8DUXfTC2cqbuh18J8ThoNEAdJyfsa",
  "key7": "5dPr4A7qDJrNbeJYmFkg9j16woZeXNdAc8NmBcwf3bYZ8dkvi13vhSwhp3xcP43cxpHspcgyzFdN6yiG7mSSFHDi",
  "key8": "VHPw3vbQBfA3YaYAeCCoJVEbJuBWthiNsBs5QhUNGGYh24pCXFb4pW2N3UJXKHDjYiUuWqsFgbx28zPbXRV3rAm",
  "key9": "5vzJD6XXCNdoxw1g9HHH8eZP5vjEAE6AgEnRoTjdSEznoHKxR1ZGCyh14JnY9j1hCadLik7xyQZAdsNZZg6oV9TP",
  "key10": "5Su3RvtGCkzWEDzmpTspgSDc1nWXNMzzUnWKfVXGFxVPHUDDyUiv8YJZMEj72aZt7BLFKnG5gRHPeuJVAt92e9pA",
  "key11": "2pC2jJ5dPtVrdSEFweaYQauBRNAVLLxHQMfLJeF5Nan8W8sZW5jKf1RpiQUTRBcGxHGfvaU5WCkK1TKnW5BKyVc1",
  "key12": "4utZ1HhgqUm84yXdFn2ZGRk7YQuUE9EcS8LaGEJFw7MSJXHAkm2DUyuGL4wCRnXcJsZdmSnTuqkA2DFNB4oCmgiF",
  "key13": "4NC3bBd3Ehc9FqfZoDmgfCrAGYizt98JRN5EjpCz3gYPbpmHzo3scrcXYajejfokwMeN7Am2hvQkN7xvhe1gbVtu",
  "key14": "2jeueKiAur6Q6CaSNrUYXKYmBHTa1bn5owMxw6SaNbfLvvqvY6RUcKWJbGEUvZ2Rtw7N96dWt8PtGchAFPxWJvY3",
  "key15": "3x7MsukaBaHbEDvsdpfG77Mh1YVw3bapHoq6EKhVx7Y3DVrBwM7L3grkRRRi8dvAVZsfGFc84LbgvBc7Uzxb3bP4",
  "key16": "5X4an2ivJrgRpX56ZoBe5dg6obeJqfiKAgozzrr3F7RVABJWQ2bmMgTFFwK5Nk8F6aUXW6NavXCUpAp74zieRyqs",
  "key17": "54fe1YBbA7cQMcateCPBqwDvJcTsLX7FjHioKX9Tgj315bMHNiYSJT56nxUhtNk4cKKVvLfcmBzoG56XkPLUKMPR",
  "key18": "2mfMHzrsKwHTWCrzH3etTia1EU9htYbfBkzBYXb5WEnh5kNZhgfNAcyqMu5CKs5wiNrHKDUdMNYMzkSGoZpZ7mjX",
  "key19": "42M77BpRbjAD8KyVDHsm9tT3hCgHdak7uiT4YHFjsuF6syg1ZnrKJTe4Bqeukh5sNFBuM5MU6hqeQfd9Zdy6cjRD",
  "key20": "iDBHk9hSGhGBSpV851HmyAFcw9UEDttHuvk4Uw8sWwFgb6THCUWxhjUYkaGmCtUdMApWC1JB6vPznvzg1g8DXHD",
  "key21": "3epoxdEtuUvivBheTmc6znKnQ9xrVjDfsAgY4dcKN1Biz876PVueGbSPDrG6QHVoBDYDgLWeBo8hp89VhJv8apgi",
  "key22": "3UgKgJrGSaXB2J74TtCCXPrKJaKLESGiQcAXjRqAAMaTmCoLCRz6TQiiCTpbRySuqhPYEmeeGqRzHMiN3vMVmsK6",
  "key23": "5myA2HFMPxPBZERnshhQCfUbWEbvZkSXNxJw5sECXXAouR9EvtXmN965RtytzmzfPBM7FNMYHDAwujmAdu9xRx7U",
  "key24": "3GLH3KumRQqjjPr9FMxjZQ8hMjbDkGvvjQrt7v8hrUFKgGoWStiMABPkNPTgP8fx5DBDcnCnEfxbEmqYxNp2Wpgm",
  "key25": "3Nj4tKVEsdfZB4YBtRTjwQ69BMdGXMXCW8VgKCCVesrjSDd3YrChaS8BVTtFkuxLobxPU9gsKbihcMecMoDBCxSZ",
  "key26": "WXy654wNVM3QwTFkzZTYYMYJAin19pJx86tejrwhyfPx7CaUFkL6na4BetdAPM8uT5gfudsXDJLb41P37qZexxw",
  "key27": "2jkiJN8WrRXpKWGsVMc9EpQCagb3tdVEw13NaHJ4FwTZYkVGFZesJ7atC4ntbKJBo86x4GQ3SU517JjdFwinRQta",
  "key28": "4U5fLMComK5wfs4bmzuFh8ZgUzsu6bH2dipNcM2P9XF5rJqJbZWanmDkhk9WXtZTwfCheftYAtVQrCX6pji5r1Pd",
  "key29": "2dxbUGNhd3z2PNvkJQixbZgFXTwtRsBGx3VAKNMeinbiqPaVu856DVTLVvZmZ53BQcK4f29MmLjP6SdGuWnZmYkB",
  "key30": "2zUVYKHBXLpnRbuHok8ACgq6g8Dq714wukM2UzCtVJ2qrWg4pcDDRenQAMg2ni853tCKVWrRDgYEjc6JXgYbsFnK",
  "key31": "2M7uMyd3hAFfPbS1Ymb8UWydGWbBCwiwyhoP6vmi5xU2WYL2xP1VKoEfJ5sf2RPp4L9o7KYy4cQj1aPZwMioqxkj",
  "key32": "4EJ7YFPzxSnG4Hq6KrKdtKTbGeifXQEJFFjSWEnS4z63RDuTSoPvd7Hmda9kc88WKv9qoYsaeaUWKbPaQnGTL9vZ",
  "key33": "3LanNaxkPujf6ZT3dMByua2RcQWFJGfCUnhQRnWSqMLpFEVpBxKsRpzvvbB78wNyJckhWz12u7RS49zZ7gg7pDPy",
  "key34": "67crptCsz3RZK11sAugkc7dq3jU6PAmpUfM3LEhGGUk7XRfaeDcjd7svjikm2tNRA7EuRawEvYXT5Rz1dZGywXQy",
  "key35": "jasT4LmzbabZN1gSJBWdCLSvEzeb1vwt3t6PVt8BREfMcms3TrXiyVKnzVPb48DpZsifemFZLkovktqd7gB3Mp6",
  "key36": "45QKAKskfmTaG4LKgDFSr6QyQZA1vBGg7ygXZ8pWAATFVDcqVxWgwvTXrQau3gtidY4M1yxK78WLb1w7dBr39dGJ",
  "key37": "v2RvSitEczvUVW8VqSiVEuARKALzoG3uRchDEDmjEZ9qCXjUNKHPUXQwBpdUoEvNNj8CUib8QiVC7KLVGmMkvAo",
  "key38": "47so4Vf5aKucrY3DrqSBHQzy5UNKSsP5qKJ2woateBYuTyKfzecwyzvDJ7kcHSDFi6AxZiKxABZqc62ns6k4si2z",
  "key39": "52Ze6r1YWERiwmrwFQ3Cjsc9xogEvqtSjfZj4mxUTsvfMDbiuSwW61EQ4rNcb9YwLoxAFWC77cF7Yg7ZkFynmwF8",
  "key40": "4ZY9gEshFm3i8YcUHa4Z2kzD2ahzTAX3ktJT2cYeAE4esNkZkSWfZhWSxogCntZ3k4LFAaXNmh2mwa2UjDKLfKvp"
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
