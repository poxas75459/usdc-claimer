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
    "4AExZ149qCRsgqC6iBZHffMyU41Y4EVTZaUuFrG89yXEQEzBkVVHmwXjt6Z9hd7zzmVeUB4JR4kB1FvwnP1mWq6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AaAgeM2NfYLJe83Hu6r1KtUJctMazjhHhcB9NeydGakxac7wBKdEoyUQuzf2k6m16BYpLs28QUeZpXuwYKRwRLd",
  "key1": "5SGkrXTLf4uvTwevxxCXu9bCDTF3Poemp8TAqPzxM1VZsAmKdFCfLG4T46phcn9TD1hkz5hMidvbSAXDFW3nz6Su",
  "key2": "4hgA4kCq58bqiMQTTkJDmFYwmR4XQqWqnHYzwqSKxCSH2BKDzXcpPNuWVwXc59ty99egnH2i1Gkg4xFytzX7jM8a",
  "key3": "2pLrEXbazJrxjqJ5E6y2BCERg7eeZk2V7NKpMbCfGUQX3PWwMhTJCpLHEMUtrxwcNNGHkT5RkupB1JQZ8EPdJSDx",
  "key4": "2CydJZ1vDuSAALmkDBmDtt4AmWPtf5BxPhYmY7gt4Gvc1o26u3QaiwgJaE3sEoeYaDA4yxPtypWXoWJqyE6Kg2xu",
  "key5": "2esfrgRJr1KKRT79P2q3wTGLqVRPmw11qXfEKMC4fcEvPvC1ivsu3eS3yydXVFCrmyEG8uztA3X5Wh94pYDt28B1",
  "key6": "3gpxeaN9vSNxzNvaiFqpGoH3ttNsWwUiY72FqUGrWoyFRRRE7fyBZeQnjRUgsgjou2xQbxgrpktcfVfW3DDwG1E2",
  "key7": "5BEv7nReCunAo4WJmqG1QCbe4qj3E9MN9LoW41315PV5CegwCmZanigtqnVsqS194JeCxwqJHscsxpLruqtLqXta",
  "key8": "3GXkSuCPbYw2jTMNbfsz6CugWS6ygfHoPsBBFMSSZnS6KWQMhKWLbLNkhBRZpUYuusmvLv5sFsqZiPYiVZXyXRhU",
  "key9": "3cyFgE9CGvemf52zXEnGiivDwncZoVA1iG4i2G9isFvgLSxtiKpNRgqXEg1Jfse7u1S9uoRKK3E7EyJg4AYKsCxE",
  "key10": "5r5vuHZS632QwmwQXuKiXY37WtoSGHewf8RQEuK4TyqLpmNZWzQWsmLWXJBBxMTggX5VDu4X5XYxoEhRRY18UMmW",
  "key11": "2hwvnxXoXrGaDQFmWQ91bdnMUv5BnKoeuoox4XHvsQwf9ZnwUFU7tA2TNjYYCCMdkWd9PZdqsb5sWrVqRPywDprP",
  "key12": "5poXmbVbLfRLZbEAECha5ewj724ivDhosd78PXV8K1nJv7C1h5zwCCzXaiXh7Feq42kVdocgKtNnNq5EvgMg8cqP",
  "key13": "2rkyjqv86nEcG6J81ntnDJ5QNfeXLuWidufbkiPpeNFiqncaovupQhvsMzGk9ex7o2wSmHvUaLnmbrihBmN23ULw",
  "key14": "AhUE3418PoRC8F92zcjdYkPeAUAEdMP4ouSSVeoidEtb2ea5LZPvxk1A53DY4bvcXV5WGWPv3CGTbfp4LyEa6ha",
  "key15": "5Saf9GnLh2ULfyMkNZh4ggDDmwCrwQY1x8mhSR8QA1ZC2yRt1tsbfMEx5GSt6RT64v1573VLmfUzorXQiJZ3fDeg",
  "key16": "5mHuRePkKn8mz9pk67r5p62VMRaeQtaqkC9x3b6LUpYSuekEAoaMwA1mkwXiF6tWUogijVT8C1h29Esyy135AZs7",
  "key17": "26RjNWEUhbZWFXFkFjpNgMfoZsNfWTUswSWkD4yqvY9Hb2trYyW9aEdjuGL78E1BQpsqdpE25g2wa71XhPUqt4Jr",
  "key18": "wCguLr5JziHj1CCda7HHN6ccqoqrzHUneoavaqQgFXGhWTipsqNgEZuaTuAhDwQSCwm1CCAEYqN6LJEGwKivZK8",
  "key19": "3FaBJgYqhxBaCJf2UHajhuD33qRdhFg3Sosb64bgnPK93k3ET5C8zKcnTqL4bpp6Av4x8sgvpXo5NFRv2wNvJzEr",
  "key20": "amwa21DwMpPnFmaqQDUDnUJ6RqGAeaHTkqPdbw6RkiHKY5scnYjV8iJVezhpCgK7YSBS1LWCx2XYtV2TSwE2Msi",
  "key21": "5xQrvMoN3yNeEwcU931mwWymfDBzXrRCuuYR11cYU1ruE8f4d4sB25m155APnTSBtqGCnsZUCm4KZqcQeSk2yLt2",
  "key22": "2GmJVMZmUtZLmHcNdTAuqZes8C4mVUmEabxFCn6msiYaUAM5QwhDH7xgLiNAjgKWJngiv8fqu2uSBy6enhKVji8a",
  "key23": "2Hxhtb7zGLV5dvqhtcV79cmAXhsZTAcaDTXqBBwQFMZESvRqg5nrKmBBje7dzs5h4jbfmWqM5mdPeDGjFeWQFBW6",
  "key24": "5Dh6LUSYLDcDDqJKAa1XZPJ3M3gCwBVC5qkyTYSHd797gfDGhUEcTSvgwWWdsKyHtzky9CgsGEKyMzX4hRQkpVDs",
  "key25": "mmzuRCL8nBdN2jgyUUY2vNx6hG9o6Aj9bdUEjqWxixcZaBbPprq9DozYYn5qX6CsoCXHdypLk6NHJJbjrqhSxRA",
  "key26": "3h4e7Qq5iLbLFgQToEdCHG5Rt3fMwpD5cGapVCMYQ6MRu3iCuJfLqD7vjSj6cHbUGLA5S2NT3U1PEsZwpfPZmq1K",
  "key27": "4VbSqf8xzsWXCH9EUCMEpm8Z1p75JtB2ifAeGfusUgCkW8dkR9qL3qqrER6GvXg3SYf2Bwc7JbZWDaDwb8bENb6H",
  "key28": "4pFJTC38YATkNitN9kpCcrY9UQjfdX1FRyUf3nuubEkikzZKX1RkfUPHAyfQvW9DEuWsSGis7KUtkKi5ckGPUMLZ",
  "key29": "3yhMF1Z5f9yzh6MHEiz7DgMFEQm4SqcDswjkbJaMVfidtp8LNW5MmD6Cd2mr7E7uDExH3yQZXtZis46SjSvU2Ykr",
  "key30": "bbBiqQh6ytLHFoJ21G3TkvtQQyrEWdFByZdB7We8PrTLuWzkhfMwQcRHnorgtQBsRLFcxN1CBVQRuE7h9nsGAHn",
  "key31": "4q41AGjLjZqFSs6E6WASYRktRpoGYJTk8iQnSEr6iBf4CgBkWs5EHqW1AjvrP2joREimY3a5rs27FsXvRmVLc9Ac"
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
