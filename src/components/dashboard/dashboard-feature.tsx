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
    "4hpnpS6PBrZn1ztC6u5Z7dthGLkfSXN88qhLVGawj78a1suL3fX3h2YoVNcrcDwNn15avq9hNxhEpk1bdebTNcNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35rtiUF6kLoaarqovP29EnrLtqGgBLU1tCyWj2T5nwGzYgvRxdMR3cqsRvGCARsgLMAeNDjwGNQT7CYe6LrWYp9E",
  "key1": "2gfRvKqzCn5C3SGkm8pTLHVRxcvFfHAUfg7vsvP2YGwU68cZzmXgqjbierBCVWp4U1Wf9piHfCT2iQFSAquXnizJ",
  "key2": "462bzbLV9TEHVhEMoLmPgkNyF6y55Vrx9pHyUkYrxnkSHUiEpQFkyHZWCmGujsdbwo2uAdAPN1aGbQFcFunCfsny",
  "key3": "4ajrBokZQVsScixGUuKvgGfcpXGS3WYypxvi9C8CPyEjD8tGPWdaruxobmXvyjekeQXHeyA87CJ98uHrZW5Wbp5d",
  "key4": "3VpAQwDDwEsJ99zjGrcLQVsRcfFfFjgZByKCEHBmjvvsXUgVnuSRBfJaJ5K9Y18Pbpdcx1wFQDuB9RYYxDfWCMnz",
  "key5": "3GxpMcFD97CX2xNAof6j84BCj4MsrrrLvYLEysChXKvXJ1ZWijpeFnW9CugsDjNcCcgv7VtwJqhTX9dmo25XRmWc",
  "key6": "4nRumEek8soeVJ4Bsh5eF4Up52TvtW8GtbN2P84kuuJc9dwe1UFSLKbY2mzaeezNRxJfaGvpTXT4qm7Ny4AKyVph",
  "key7": "2fF2WuaRQmJiiaciHbTE1dAuuEa1tHdtkjbVeLEnyrXfbreFTYDRtD7CKf5VEtcqHVU1frfQYvuqqxH4AvNExTAG",
  "key8": "2nCmVfrtRUzY3oxxdowCAbxEWVKDcLotni9mRkbASodGWUNCB4fVkrrGUqNzQ524ZUgs3dm9JprqKG7HpABqfHKS",
  "key9": "3qYT4oP1C45EgLQBF2tns9TMgPWdbSqbTfu3fGXvdqTETpTLWMr5bxR1W2cC7A8v5YguVsJiMfLfoYesn1m6wbhH",
  "key10": "21Li3rMqZwPJUkueqgCUXVjT3KWhrEXpHyvpD98QwwVV52iMPVK5m5eoAHKmhiMQeu4TUyGJ4a2qb7HYZ9YYqdfJ",
  "key11": "4yCaMMrzoWQaBbMVT6Cqheq9f74GR2rGo9HSEwsnu37Eqan8n7FjLVZwUGtPSPS3bfYJnYvbgefeBwVkbsxR5KYg",
  "key12": "5Eo1C1wQYGJo44KAUQc1CKjna16PY1Wy2XsSnibT2XADMv5DSPSiB5seaGt7NhHgGPDThyxxrM4HnxjfciDShXZg",
  "key13": "41g9jAVtHypR8tmxfrH4iWCDLvjFt9p2bpHq3QNLt32MGTGXx3zsmnERqdSUeMcK932QE48KxgKu7YYvkRHCmLJT",
  "key14": "4kT5HRp2tyPGdiNJ61xeDVHEjJK8PKZfnZyFHudTLjFNL2tTPQmXStH4W2VeEEkJdiawu1L5ZUcqo7zAeRqwhCry",
  "key15": "5bABxAeMkCQjQmTyZbmDVPMCM18aKyoVpjM2SVDLV1yDcjbCSJccD4XnLiwTjS1v4GqvLn6o8qTqf2jfyKqATRBa",
  "key16": "4CGjhx3wemt5owtTxbqScGmk8J1B8QnxmGGyNT2wRRqikwzYzwihBHnTQ1zeY2hirhj9jvARQpXexmBsNNFTpQcn",
  "key17": "2xAZMcP6VfENi6kR5GxjXd9b9j96LuRJXnmZSBNDrskpGMEZYnZQPdoRN2yt1RrMy1Nrq2igkphqZ34VT1FnGfHZ",
  "key18": "1kYzvnzYUsu2qr4ycrmoNmZdreXW7XQU4ibapftu5uxJ5ujpTtsdzViW9fmV1dhGW2LdD6pGNtf1yuh7u2vGR1X",
  "key19": "635X5vBnzT2Po7GHKCCDgMPuHwEJXNAfEcdEFVT1unBDa64avRwEftkadAvCz8mzopGeewgyJF7sCJ9ZwmkSuQPa",
  "key20": "2eAdRotMRXCf3ZkvPaXK3ZePYRYwD8WzNdWd7B6mfGSSXtDHtZPiQBS9CK75TrBfa7bGMZMmgmejV4yTewZfFLht",
  "key21": "8cBhuohydL9hQQb2BgxDuipua4HsD1gcqheH6sKhMu2BGET5VzqJaSFusRMDQgWsvkGyFRzvDQEino8errYqBdU",
  "key22": "2vo3u9kTsbxgvs1pJdThsAM8ijNAjTFki7NeXFhLvSrtv3dMaeE4HkdRBbV5q4ArEyREhvTxeWScX6zzsU7dKBoB",
  "key23": "4ivWeY5RzSiurEGCwM7R6gpraxJWh5mHo6avcYqAyhaoAZn6Lqgp3iNq7JQvj5j1SzZpjijFjpiB4u1iCoyUu1pT",
  "key24": "Jdg2C5F6GBtXxyrpq8sQs5t3PsBLTJr8PwEE3dSiNpRoVRFVCJ3rEMgS6P59M1j4uKuPjAxNXtz3j2TXgFoXgSb",
  "key25": "5YwacBztWGJkGavY7pJv6Q6zsp6g1WD1qjefNUKuFFDNcHYSTzUFSYZWCx6ZVBYdoq9D6LubvD9kFLydeo9REZGF",
  "key26": "ukHSy7QdVwBhp3HcisEE1jqiZvbwqMa2TojuXAnpDeatuUpi538hEUi4dn8eDuwBQgogVckKHrE7BB6AVvYymV8",
  "key27": "4epWnzCkDXprQ6gy1uKM2nZaMYwjX6RgugT8apaAxLUTJ2TosHakUsccG23ca7SuACwB6gxbzqQ6k7KJDwnWm5Tu",
  "key28": "4EaqqkZbBwTmgbcXyL4CdhQWPjo6iJ77CoejaUL5MBZhSjhPL7uXahtumgCsQvWExSJ1qucXtaj5GQCU8gQVZXqo",
  "key29": "4rwW4LHkjU1k68e1pmrUpB9gy6ZtCSGX6b8jsrMC7nvJJDZxrFu4TdNqS4VCLoF3e9fcbTvqBcHSpUsp2pvpcs4g",
  "key30": "5QzRA25rNaVH5zbDq6TQNLZHCq4MRvHM4zUJvbSmn8LBwhLG8PuJ46B99UJrg9GcnAa5ddJhYoao1pFFvRCxUnxn",
  "key31": "4bWZFZHSwiemUbU7aMAbmbva9hrrgEHK4FAPo4ikhQV27zDwYh1w3iByk3tnwwnDC2fHVbKoiPLdqYMTNitWkyqN",
  "key32": "4N7v2bnDnAFoqrJDXeiSHJ3GQ3dmUVWy1mriU7aLEaDfEjspJi9Go3soiy5QM1R5famURjAcoDVPc5DkmsNRxZYG"
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
