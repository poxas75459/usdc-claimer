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
    "4Dcvaei6cN1Y6iDxSh9Sd6PS3WgXLJAttq7U3ueNn6ZTEaUdya7AvvfVu1eyws5ztfiW4kAsjEpay3oeuQ2bs7SB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERqkLvYezs4TcqZnAfp4aMJMfk8j43PXJEbsZrQ6TA1DjuCDtS6qchcdxnEBcLT7U8CavzmdGV3UUuBwcH7FBHu",
  "key1": "55Sbg9PLrp4rs8B6Qw6SV6yybrmC2WRQRbquegEkS644cTzCMBV7Ke2Vc2mLcfknVcP7eFJwU2orEhVFce38GkBG",
  "key2": "pMnrYusXXu5rLuq1X35hipd64RGGupXpKA65ZooRtGFj5qNFXZ2BWa84q1WCVYGhiXPqch3xodvMRvWTJovSaze",
  "key3": "5xPxP9UjRTDTnPuqRwT4WcomstKEEKNhQSg1hmeoL1LAY6H6MCrWA2fCfk3Bce3FKSE2NbkewqqBPHDyGicLrLkG",
  "key4": "4LXFBq2oQZ5AcdKvRT1xCxtFJADrD786NgnMQsjjkNAdhxM4aqDtL6x5oDMXr6Fz8BJuhYATAYyyyRzty9g4isP",
  "key5": "4JWBwFMV6ddphVR7vheL7Rhg4Yz86tiu4uqqFodbYpEfjJg1jQNuR38WDViByZemUGNYRwe3iWj5yxWzUX8HYyWq",
  "key6": "64vsCnkqJc93Q5aWBDABx4PDoW2M4hoQXvtTcG6ruyQudhC738sPzHY51QwJ52wqo3SSCR9bnEdQAGjfL3DwB1Wb",
  "key7": "5dyKTSCLZZRzacjkSHA32pALSWgYgW8w35PPwvTLgmkWepWBEozzcYmfqdPVCjnBxMBzzCCfYdCUbwX6sMHeE88P",
  "key8": "CcVQVvF7hWaWzxe1A9HLtqrX63MtNknFcP3vgiQrn3PQ5iY9U8P84kKqrLDQuRWoW4d4EsENiQaAXDWPmchK6DB",
  "key9": "2hreNaHTYTVS3ja1gkdncaZgbkwuXS8x3aYs547eQREfq98peXXqjcawei4PPKFYVVDq73pT3BpWBNmMsN2wGoxa",
  "key10": "4QETpufdNfMsDS2rYxwnRoDaBeCZPWJwWEFh68C4uu7S5CCBKVUKhZ4su2KRaAV4Axp2VkTKTRAcNrX2jiAWPRC8",
  "key11": "yFUEgqRor5Q1zY8pxwWeRZs2R3dqdNcUTHnXZfSXrcdat5qXcwd9rRHDsqDwo1QwmJvUxM52LDjCwb53WFXiGh6",
  "key12": "v4t2GMuYACt1mdigYwBQsPtCDcMA3kBcgDgvXPMdB1Gj5dLKz9zsoMb2cM8VDmGBbo5rCK3UVgtQmwGMyEDoeE6",
  "key13": "5WJ3eUcuDJtoND7C4Ltgqv9iQpoPBpGyZP9jRB53sHUT6LRFyw8fsGfPYhZw9GTPY3bETQfoY1AZS2K6Kt3HAUpa",
  "key14": "46SSecF755ULEYSg8b1eRQgqnoedoRLydjnF1PM19Asds65RDmhoBaU9HCJ51u9udhRKWgbMVfiR9dBvw7vKUn8B",
  "key15": "4jCk6ctAqT8KMP9SXqPF5aHf7SUnBcZYSEGrZMtzt9pVvpThaxzrJAj325hoBFiTXrXZYVCLSPeSzw6katcuPBF6",
  "key16": "31nL93ygXU24d2jhKij1fNbdKLDsHbShLwQ4sZzYbJsqgPAZYRAewMqq1gCtxo3C1gZLCh1g9EPimQCWEfe7LcN6",
  "key17": "4P9yoenEkfR3vVgw5nJwinQe1BUZhsw8spXy8iKwH5tVTRLTEj7pVpGRcCBgmWg1PzXPtqtarzzC3Whv5inWF3Lv",
  "key18": "3g2NAg2p9rjxaKGAwfaGXZH89DJhJV8otzqa3nAd5PcCq8pUKpWFcpECzwnM3Z1NdpkcUo9CTCeQCMd8d74TLbDf",
  "key19": "5zB5RcdjkXVEUL91KitbQtRrqjZtfJxpm6GxRNypQ5fVZfuQg7tKXt1Mg29vTfJjRsncDUj7qk7Z8JXJUR6Vy83m",
  "key20": "3UrPsTRC8wbZrBQHwVDMx7aFf7un4bNueTon4j8zEWnd3sw5fDTSDfg4a2E6yd6pnazFFfmBioMC9Q8vX4mXAeNJ",
  "key21": "2ikFxTNMTdseoUnNAFx7xuUVm3afRAcsU8ojJw319oPYsbPpKdN7MgPUrRvAy2vY4FEqJvrnc6KWyB9nr7brv7Vf",
  "key22": "38vJCr8bBpvMn6qbtBUMZDJgw9dKe2QWHqhnWF26bEr5wZ9CjFLSYcmXhFXZsAigtDigECMA5jFMBH1xF3c8a9pF",
  "key23": "LFn2i2Kc9gF424YUnZGMaaVAi2biprT5wy18TAcCHE1UapzsAe9agTsK3A3sJQZ7BCV2i9xrh1s5PSeBqEJc4Ly",
  "key24": "35RLDgetDb6966n1VZTVKLigY6xwXQorDrFkK168FHGnPN8tcGEXB8f8h9HKVXh8pdndWCB2FzKfuocyLigJ54mB",
  "key25": "5MrWoGSTMRaAxei5QjpVCb55h9QCm5Wa3SriUkHkgqKdV83hKcWwFADVMMUQTpBTPQ8XGqhUBzN4QZ6cZVZF7XuP",
  "key26": "2T37Q1o6qDEs5NJM95433wx5nVku6TkkMCM1oXVWFEyt5L9vvG4RgiYwYtbE21rQwLyoRvWrtiPhZbfGWEbU6wXg",
  "key27": "3aXR76y1aDwNggydGgTPyeqPXGYtJ6JWzYBXzHGBSnW3Dw8wCBpUmGro3MwjjU7FVDkfb3Ahe5b7ZytUxqPbxaJZ",
  "key28": "PsXSKvKJKy8MN4DU6nXsAqB2Y9RAKVUV2bpyvKhu8ZHCMAiPGZCKtVuZp4kAGzGZp7u1Ndurs8WCrg1cBkzH3w5",
  "key29": "5yJxbVGeuearVWWSBLtGCED1Zu8ahcSDCWgw5Fvap7XPyEWk4AN3yy7fRQLSySWjGbsTfWFGyJB2S1BLWjq8wgsh",
  "key30": "r6sMaDh1U8xpdmHW5N8WfrDfmP7mou5yVaFTsND923wSquZhLX3m6AV1zg5pxjmeadR4UBRVpp3gd3m99iiaAkw",
  "key31": "311hJEUmKmJ2ZAQiEskDsTgpNUfJUyvf2tZrvkdq6f7xKhveQRKWdskG2d8N54i3eyN7hsg5CTMmePF8uKd4qkQd",
  "key32": "3o1t5gqxS8myrZUWMLvKbMfhV3J8A3sASoagNZnnxA9MnYdAcoNggeUaVvBqNUfGsZxSsS1UYQ3878fpTBx2Gzx1",
  "key33": "2GoxQW2mCVJYoqPnoSm34cPNQwtzUbLr9fKb261BdkWjtUxAfRXRfwTQnBRMkJcEyVkvM2FJQCscP3VUBAT81DPW",
  "key34": "uA4srrF6jS1XLujWdJg7AVxTCkfgGDfLRnGc9Egw7P7jXvUC1bcMhf3oiqB6pqjaJESAdSnB4mLQTay3RfiqRhr",
  "key35": "5kecdkMgh29ivnmoMybCVshnyRmmBdUJtcxRvTLizaPJft5ciR36kthR4Q8eH7cNCSaFfaMmusBNhd4zK6d4ZHto",
  "key36": "5AwWKC4Dk6oCw7LbuLLA7UFnnTqZ5zNbkzn29nT32Ev5ZFwC9ao2rSiLiPZatBFt11YVKiduD3Zi5SbbR42VAu5h"
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
