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
    "4pwfufJP9V5f7NhuSYrW66xfbPLo1rc3mm7wdptFKPC6hfxmKqaSpCYp4BXjMS3pPfZRm9LDL2mRgTtTE3ad1BkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cM5NYbq977WmhLPK7XtLF2sSFoDFva4UZLmhLMnPsbauTxfFTjgPnMqDQjU8umNEmR79em7C36p6DpFAAaWRX4C",
  "key1": "dsxrsd2XZBv6krbfu2eXQMNLU24izJKNRhDr8uHf2oP5NwiEDdJjrtHQFBm7Cv4ZaaeakYwetDxrDgGNMTyhaQw",
  "key2": "2isH13LwpHcdXJY259F39NKP3dvL1mxw4eKmvZMZzf2ripRqvvgdM3KFVtMadK1LhnmqqUqQdxCZdefMFQbe4rQc",
  "key3": "2r3a38BrLpDLwpVcLne5JuamQx4BTZePon9SGDRSvdLdu2TNARzu2BeCz5jzP8GGkZT1WKHHKsG9vrqo5D4tVMY6",
  "key4": "5wHeT6Ycg8AbKZBbyxcVutSNmmHvWksS75CEEU7ZgbctH67Pejn8VW7nZDZhAexGrUubU4V11EDvCMt1SGxGK1Ww",
  "key5": "2PvfRLo55VQERRqD1H1gGnLnHgX66rjBmnDt9a9yZ1aoNsgfy9hJ9i6jRT1xU4o5XxxFxDPFvsgwN14v8fZVc4od",
  "key6": "nBFG37XaUrRKXE6SsoWUsE7LvXuk2FAaTgwhYMZ5BUPKGCqQ4iohogFbfCSjA7XF4ct2hqhrCgHmd6gGz4pvKDC",
  "key7": "WcjAsEZoZNGbKKkEof2PjQ1g5qqdzpvjB6wPdqNBhxh8X8ZquqB3DuoTThDd12x8CrjdfYuP1eq6DJ7muzbwsPK",
  "key8": "j1YYeRK5PtWTmhRPEpw1yqWWJatUCDaC87y5ZbXvn5T7revfdxjBPBDyQqXAH4WBHAF1xumCscNfpXYzEVkgnYA",
  "key9": "5qTZe2ZHxrogTZycJgiteF1vwBYcsRcp19ZZfLyAWjYw8y2mReZJmML9DtfGcb4ucVeHtaHT2zLVtmjM4JbtC9co",
  "key10": "4dqx4X36xXfvuKU1roJVGY78sTqQbMNF5QpnMBWGMcftoGka9QPmdqLnqYDXK4VtgcJ1Hit7MPE1vjdmdms86VHu",
  "key11": "4bXLscNLRzqQvJiqoMV5zVE5i8xdyw9tCVMnRHUKGTS9xSUyg1dJJHSb1pFe4CnDqzqCK6wHkSwAeyGDD16bzQ1D",
  "key12": "4VNpHiDHZSGW42T9S7Lgnf3brs975LT4iFLjqmKHRRjebAk6KX9yn56Dnep3o6tRdZ9uaUstXeWmpdYAwSdFfYw1",
  "key13": "3miAW8z32f6nxNDKhutPtonjJZic59JHAcH3xeger8urj8jKxcdam8dbER4C4wueea7BinDwuVTqrT6CDtAd8CWJ",
  "key14": "4ZcTi7epkTxKjsbxctkuLorGnXN1Az65KUiMQKU2Ez3z68xjeqNkh6DDASE6LydDmu9DQWB9pDee9YSZt82fAAZZ",
  "key15": "48Sm1JHJUEtiRU86N49drLDcMojdcY4uM25zf88Z6sqqVNc4UpPAuTN72c5jhWGT8G31KoX5hsLRXHmshBCHu8C7",
  "key16": "vbFhDtWMT86kY8jLBZhSLh4uJ1cNM3n9zs7NXR81fbTw24SfUAMvySjSAPYuwgyWjTyW4Hj3FU4JNK5T8uKgDqQ",
  "key17": "54N9rFnEfQFjjKNSguLVyuPeEJA8fsnzwPkLU86yueeaoAkkPrkSVYEt6yS9cYJ6M6iPU3yAPiXutmzMyUjtTME4",
  "key18": "3f6EnyH1V4y746T16J2VGx42G55pxpcEpVQBkUJB8pUk2GSffv7g6fnxzSoYRYrr2awqGrGGhV89XNpxR661LWs3",
  "key19": "2uGkfoguCNujdvmWSyukrwt3UceWjmaN1QGPr43TKQ3WD7ACCBkVdnjXoEeiDhxbJAa2Hdep1QeoAPiMMmVSPtSc",
  "key20": "5GnTahgFcbdt6Vi1C7MaXArHERYEsjV3iMijbDdhDxLhzw2wN1GALEQrrZ3EZgxabBFTzZrVZSKTMwVtBebitafm",
  "key21": "4PfLnhQbLewpYkvRHnmdXjMmAx9tgfZvfLaYhZYc9GD1iS63mfUPfh1SgocamTtJ4jqpEn47hx6B7BivwxEcDPMt",
  "key22": "4UD3KR4BFvnySPiS736B5sszpVR2xhGTA39hetJDR9dWiUWEQRJGd7wwG3sbHuuYLjkaJzhnfcEFiUrY9unFzx2B",
  "key23": "3qbrkUk7iaFd6tzwYzNBQqYkdJ9FHnw3xpDUd37NSQKmLP7VsnsFPd248P3WbTaJPo4WLGTQa3RwpjnvoYrvuTWN",
  "key24": "5jVBCpeVZDXPTNDh9ynXQktgZ93MaoFAfgTdhVAY4UqQT9wC3wUbHxoa9Ay55CEgDh7c8DBt7qedNpraPnDRouJE",
  "key25": "3pDJn5UyTLXFTekYxKwo8ZNcozLLQHwpWk6PLMCNfkPXnRtFVE9Nzraxc6reFpEDKbxh3ekaAEMhaGCbwdeJBLTR",
  "key26": "21jYcLLgMfzRasKdPDKcEUBGLaBRu9Py7sm83fsC3j7HaXmTKvdFkJhqfZap7ntmzfrpHsgvqSnwMe24ZqvZvDse",
  "key27": "2bhY2KsDhCjAvshEYZWccrMR1g6ZT36EGHBiqEWiXhnpfrxTs2xcqmKKNh61XGiJ9or2pRo6UBdeBrjWfFPm11av",
  "key28": "3pHA2bsRvsynh74JHSPprfrkLN3ggPkybZDNZSgE2aCD5pBKZJbmHv3547WNZPUjrs88mfyrV8ZJaf88DmJKetj6",
  "key29": "5WVLmD4YYUdT4QCG6vNbynqpVwExhx7VAjFCZTARj2dQsicndMByxxrCMta1D42KkspdxuwmTRYUXVmewrXQ8Gti"
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
