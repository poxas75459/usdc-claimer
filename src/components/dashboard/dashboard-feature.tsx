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
    "63bAzHcNZNmY6MQTCR1tQZZoqCSeuytBkL6F81MK6kr675GX1YUdMLi6qkpS46sfvou71pe4yEuMPw8j3m54Rq6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Be2JpVLgFBxqxRaJp6u3XLAZD4buJY99gXernb92EvZRZb9LEo3RZFy5Ws6XSSAPbevyjgKSAYiksY3qR2B3ZJ",
  "key1": "4AomE3suKvBEhZZJSvMT9erJtzSj78go6etEX4b3BRjMjRByTudCqdiVQBdw9ew33P8upLUzz8nZBD8GEEDQoJV8",
  "key2": "m9daaJZQ1PJqZGmjAuxegdHGxwfCDYDkeSnBNc5WgYtcaMcNSWHg9TD2qSD4GaLtbV2tGySLcPa8H9vu1eEUZ7N",
  "key3": "5dC7wAD9PagYCEayzJTrHLD5QTPET9Hz9sGNVKYJDnXuYniy2GE6w6ZQXGbn6wvwC797XggXWj8r8gNKp16nnCPR",
  "key4": "2TkeBs5KZbH9GxhumU5pLPhiyGhzWCvR6f3yFvYuJE4JTLhFXfnM63CXomwYNQzLmMPnZQL5puiGjN1nmvBQn9Nd",
  "key5": "3Tei9qtBGJ7jCoNnAUYeLq7aXvkBxz9gfpoxs77PcKTp6x2j9EQvgtnMUmKf2G58wS1shUk5PJpN2M3SNUFHEqWv",
  "key6": "3U1swF8NZxJL1Y8ESdTD7t5xyTswvf5aHZr3J7PDJPBVXbJX1MaKganUSxfEtr1pqutmaZzFkJWnuRpERnbE4d87",
  "key7": "5i4JBD6kMqtxbvq2Eu8MWNcA5oJb57ELXRzDhdH8ZtoyFuPUADDeRLFh13ZczH3XgLUj4KqQz8WB5FEKs6fMUY34",
  "key8": "3ocmFogK3cL7LtbUYR5BwvJeARuAvLb9CL8aUBFQTHtJCu3d9fD65YuFvDaULnBBMPSUkFrJTDnc1tkeugPQZ6Ci",
  "key9": "47WbMaNLMr3HPsVcyNK6o36iqaSZSQ7UBuF8wBrSrsnvucqcvD23DzFVs5tjRBdf7NwrbzqnB9WngDfJtMf1bUk8",
  "key10": "3LACjpgWvkuKv2Pu7ggB1WbW1eyh2byPsjtENfWCG1DrPqpCJt2QXZ6bXMsT9E6Xs8vQYFqZK6faPYUhTad23FHB",
  "key11": "4v3XiUjpm4iPNrhTmQtGDGgYUdgqEc964ivQaBbjb5xgwiaU8HKr9eSGcwdSe4orXS5FnVmC7kMWpCYVfx99EZKW",
  "key12": "2obHnHSLkEVc3XszQDC7vh8NJg2bnEWKsxPx4FHnHJZVmsYw6FGWoQNeAwKLwseMarcJzdqQEsXXAiryUeVLqrsf",
  "key13": "3HUcPP5sN59EDthBbPny33ESxdpgCEZq6CWGrvTBAgEaAU1Q5DWWxzZaqa1CAK8jhcrRwhcqqm7YmCuULRnB77By",
  "key14": "ZapBrjbMTj3hiLGZFf1QPn8LV659aBNAf1ChUqvbYRTkQsNAv2KdfinofgoNMLrMb13VBFaMVDdTzWb9pj9jLCT",
  "key15": "3Gzi3m6UdFCV59yvthqFTaU8qFyVvuGTFt58kuuQZfeYC98PqcgGu541CXdDwhD1D75sTTWs3of6B3qPJcxwTZX",
  "key16": "2N42XqZhfrDqhSWr2Q1rY23bA2hSVnuhH1hvs12fgL5D6je67qaeutuLsyaY3cCPufTXCFf28ovjh54KtH1azFi7",
  "key17": "2edBmh1HZHoFpxYb8cDjqbnvu3D5uPcQCX5WDMQNq7QgUL7v245HBb6SHggjwnAik3iZ8Vsp3JZowKfYJrTohmJV",
  "key18": "5EPKczEcJYwEbhh9rT7Hd1hfW7vt5UNGEWLmb1vbjjZBAc1HMmEGfmW6LqX7LW7c343tUvDfrXi9fvSWjreSG7mn",
  "key19": "5Ex8rbkcfZvkyotfghupe9QEHNnE33U9FV5uRzC2wdccb1TLtopU5w1TCsXQUgci7nMDXh5tCMWVjRwQMm62GXpN",
  "key20": "xwEYWWGLewEDEkr3woy4eXV4VHapNhveoMHfFAY69XtofJ1hu9c5T69dBUnVSMgawC6sGg5Gddgt1YhqMHKow5v",
  "key21": "5pDXgYcnJmC51Mo5dhaJv5isdycnSSunh2fXMrKQrscQkJeTo4Ja6wehAmpjt1Jst4nVEZjvAHhyVKXXUiMSm7x7",
  "key22": "641uvbuMLvspJ43S9qizrXq4Gpzt8YCBMrekjL98ZWa9WXx975aTwBrUGnxGmK1CSwcv9zDVBtb2t3gEzMhkcXC5",
  "key23": "4oaF35vjdSiWs9StmGJxmht8iQXpKC7oysDAZ5aKapx6rFrBtpqFDtb13waYF3Z7FMZecjk6qiesiwpKqTHRoMY4",
  "key24": "6731cHhLeYhazgbWHqoiMjLnKKSnSfBpnVLRdP4ixT7C9koRgZz56q3b9uAoMTZ8eQSS8XdRRA7rMk1F3Yau1a76",
  "key25": "8oSuHM4HJUphZUabCgibwsS3wDftZjbf2k3o41UL2TWZPJ3hpjpnnhcCmAbjRKeArZaXgHTP9R3zGkx35FmSNLQ",
  "key26": "5ZQEiMbe3mfRz4CDH3zcpMi55wCoCL4bQrod9W7z7TKf95cwPrmEKxsxycGe4pnFDHR62TGu1NLVVbpHBGwrB8tB",
  "key27": "4nxfv1HbHXnQN6aN7sUsUDtx4A9x5Zn2KuJxZsboNbki5Fipo5WGR2mPBxtaKicmr9vzyzrJg2xLcgYsFjath3W6",
  "key28": "jsq4JtBraspzanEthqrggeFkkvHQjc5dLh6ToD65FkPA1gH9XADgNsYoi7zVQxJJD66Csmi7uB33vbf1DpUrtNU",
  "key29": "5ddwNbVhjNTGQHbRRucWTQbqFFu2jdKfEyKJrpF4gxFWwjBgaygumRmMwWeeXk1dNqr1sGLqsmN8QAYkpbtvjKsx",
  "key30": "2ekvuYEAbapsFkfFP8JSTXjbPEYebYWX9foY4KpCdfJamUveKLFk5B6z2Q68mH9rhSeLSYir8Z2eUHL2eWUCoqEj",
  "key31": "3iZHzDvfxB5jMtHsyr4ohtQbM4w11q2hpQNSaGHnHWE7R5ig38kr4S26e9UP2nEy5W9wPkswyXEuxgaXrcF81ffd",
  "key32": "5umHhvcGU7ciNz8wz72nTa8U9xGq1H7nSZufWfRRQqVJ6ZLkt9BmayYKK4BNMNUxLpyesUGcfnuPXPXzrm16cpAu",
  "key33": "5JNqrmsoJzqWcNnDMdKFWP51AtzaRx1M6QtU8dAHCmS325pd8T9QnEpMDuhHibyXaSa6yCZzhCZ7fMB1YSLGxMqL",
  "key34": "x13Qxh6yZChfSD79Qk3nMdcbru9A8voQc9EzrsKDYRFcEhV5FyRejwg4anEfnD9RC8pTgWiY5VW5BmEDMbXxUzP",
  "key35": "2CF5dZQ2U4fRn3zuytoAUa8MLmHytRqxMsHaZik1sxoaXDqzYozSC6i5xZMBGRKy1b2xoYktFNEbGo2VCGb1yK2h",
  "key36": "52TfsSdHp3hgpzcQETvPcoevDKZwQQ4SUxvHP6wQmXVt82W4RdMwNv1cKynCkpTrGRU8cHRtFJodRqhnj9D1avAU",
  "key37": "64ySKihdngkeCo83kA2AwyVrmBiss1TLkJpcvLKSfKwht1CexWCzLAvtcBZNa4z4qvnvq7EdYkaZVuBso9aJf4xF",
  "key38": "3ViQ6c1vFYCGjxLYgWAUg5G9smv1FhoCTS3DyUSARHtCpJ8REzDKDote87sF9iVMdtj2Ei3Yu9ZRQWcwSdKVfNxC",
  "key39": "61DgnREe97fS2KDQ7EQpr7p8gnqsKiUktzfrvLarXV2orKSXsFfq6Pro1TaP9AGkRzAnRvuSkQQ86uLkTDZdQ2Vh",
  "key40": "subMGhwCVCggVRxVu9EdbVsbPzPiUJcN9ZB3ox9WEGf8nGwmJr1Fbtn6eKEyPZEHNE7hjhXo4p69eVxHZnNGNBg",
  "key41": "3tgUpVTk5hoPpUELt9vCFr5xKb5fm7MWZxATaU4184Y5yEmDYA4SfFfBfDHj4RrzrYSVgA934ANgw4y19Lu2XLF8",
  "key42": "65TxR25qhybJicUVcf2Upotm4V5GjsYN5Ba2GhKTEfA7M8mZ1S7eYS4RexNnn76Fu96d6zvhDAyyUHLSn4bywXcF",
  "key43": "4iyquS9HPnL9EZ6AACqSgSsrn2n3oYLnFKXwJQw5ADGTd6nwKbtcnGo4DECdykGwUzgZVrn1bybeo3veMHch41QZ"
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
