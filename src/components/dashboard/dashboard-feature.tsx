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
    "3QLAgXpfdrXaJNjG4RJq6xYA4p6xSrMg9q6DvKVHAkeJBKyhUGGWusEA4Jzp2nfdcL1vsRPsenVxX6NNz65JFQvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKscbFwzwXTJsK5kKsuWZVqQDz5vkNjEscW6oJ69P5tdr4HNwmmC86vujXGBnwAhCMv6r4XNx58fj2pT1fh5pgF",
  "key1": "q9AKN5y5KKkeU65LZhAPfLFZ4wcvAnwAAcZJQtmDqUweB1kLLkHhhqfVTpCNi7nkS2kq3ZuejwCQZYNh7XLs3vc",
  "key2": "5TfzVNzuHhAiWXEMTALfGTShwXkTZN5TYrFWnd7HjKbGZbGxjbYDJkHC2yY6XmP35yeX6MRKtVLDYGphxYWsoHJJ",
  "key3": "4L8Z5pqr3WDweFhZ12cgsM7nNqUKZ75oiRfBR4qViVN7iJFu2RCCqVjoq6cQcsFf8s8P2jD6WTNxSykkGMwYAu1n",
  "key4": "64rcjVZiTKF3YwgJZuDegZqa7xjGpNr2hGsMTpzeMxNf6e8rs3QJk6NDew1cmzAKC7CZChjnycWsDcwUWUb9SvdL",
  "key5": "33Z6qtQb8raxwU33MY2L6AfbpsuZba1AKZ8BFkD1jHEbXmZSgi7VfS4QXfq1Xzr9nFY3FHu366C9DkAhMC5Mexhx",
  "key6": "2ayHWwE1Jqbi873igk7jJHv8FEAQnvDHtWgsX8NS7WnAsU3ekDHB6doMiSe5TmC83G7LMpkjX447iSYXGd7JdWxQ",
  "key7": "3uZxaWNTY3rZSeNCHFjoz7iHtiR97wkfSqeuRP8schiDXNEckAvFFM3uUTmNi2unZppZgVryUvjsdyoDjggQo8zz",
  "key8": "2s3dGob16mU89rR8fv17Noubr4nag1pEVxUVPSDdzELrK2iSb5H1C9hg5eSt85Uc1dVf5DdcvgTHvtiXyaa1wNw8",
  "key9": "65abUVApoZZsfmThqnFiM5hKqbu5uwE8PD8e5b49mpE3HuyUVtocYGLkCwgRmeDmLm2VwJfvxsDtRyMbiGKxe346",
  "key10": "3uPYdJjnkU1CoaAjP3jvCznMEKoXyoYAD4KDxxfppkFWvyjh7iMCvrRygAsu6QPfKwM6yjC4QhjZUK3JwuVX79aN",
  "key11": "Gu8QW61gdfnPQwkke9N9HxGx6863xi99u29kgtQ9BHJnWxJu3b6A6FTVb9jncmSgZYAyyivNTe5bnWgH8yfXZ7E",
  "key12": "5okLDabawhUEqAND9KAR7nqe9LdfUYfvE4nSeJYfiVvogFUBToifYeNBEC8onYL9aC78bvNeZ5JahQ9PcVceodT8",
  "key13": "5HjP1CGpsbV41Fef3ov5vw3XawAoF3fzt1Kj1GazuX9s2TiAptsseuVYApcpmXFWnarxqSg5TofseqEpRFwa7A3N",
  "key14": "31Y7THxE6c239CtDDiDfBBNupc1KKFpC1e67JHrJHiFxYeF4qBnFCKmm6nyxRtMXhv3qDegSgJ6vpUu6KA28jxQk",
  "key15": "3gvGEDeSH8KCBYmdr7K9LV8ZHbsm2NxV2q6CJX9Hr8sFN11tykCn9seySWmBJ7t4nVWh2XQNtpAVpzXdW7VQLYoe",
  "key16": "fdzFChqCtBJkhaJhHQEjtgoNgN58AnASxsnyyqeuJhHi8TmX8D8v24nzcJBu4u3k3vjs2oMGrNE3cXo7PGEroi6",
  "key17": "k4n1iHmoxx5dW7pqodse8epWvayWsV1mDAyKyvbDn2hdZZDjoaWfhpTBqp7ZA8TPR2b382KeRRwbw2VYJWUmR7P",
  "key18": "bwkciBga8qiP5X2FLxAidrC85PACKMar9fvrLP5ciGhan1UWUpM111PN4h7kzqk5mWiwSTMjej4qMQpHX8YWq6m",
  "key19": "5LcUmwiTbgYgezhusHmDVwRPNU8MyguaAZs6FXqD5SmgBeubLMQCvDuQFSx9FY3YB9HrggiTomzVCewCcHwXWSj1",
  "key20": "4ymQSvqsGdsczw9VB6USFFjWsmSHnaHJxJPodgDuHx3pKuznr2eP9M6xbRv6LVgu477nmXUG6NomLh1XtgS8jJvf",
  "key21": "3eiyWscp25qmKLArwoBCpQoBnRDJX43oDYJvDafRHbT7aSQzrgKZPJXwEB2BUt2X6aiifpUsQPAUmmu5K9jLzYL8",
  "key22": "3NbbtTuz6DaD2nDWrxPgRZZujuVfEvMXQGg44WcEKf1Wv1iptf2F5uKgmqqWjhYLajLro2Atqn4Moj7e4H8WgLSy",
  "key23": "5uYaBS9bd6X2EFNHCBJuwaB4YPV1ApWz57nqvZnugEVm1mixwAFrEAezFqcwEbAUnuj98XCZLPZLCTLbNYBuxKDm",
  "key24": "3LAdy36TRH7qZ9MQt85xGEWPASgADYzK5QBNfNUK72jRhrjKgrnuH3cC2PnDspvGchzXkfijBg6kdtkyWr3QTxFf",
  "key25": "Pr64wfnZLKWVxw3z7N5Go8q8PZb3vrt1adNXXqeUhutm2TGLw1416bWjcjHLk5TiCKBTioLfUnB4erz8wcVA4NR",
  "key26": "5tFXzhq9iaXJ5UnmSVBKijvFk9qWcpfCxpGLR5tWKwYcdA1wrPMvQvPyQZkNqRqbvWNxN3qyunsBHuoi2SPoqM72",
  "key27": "33WK4vZE7okxuVRYjeV2Pu3takXNgKc55oxxVwgxQKbsfkUJwZHuVGG6bDqFp5UDjq5bT37tzAJzmahDeAYVSL5x",
  "key28": "ZpCMuxAaPsZ6f1upDDdw8MiUN8cy1S78U1qgjfKh5dT2J1KsQyaeDb9jjMcdP7EFXtsJPNtWbdGJy8b58sUZqy3",
  "key29": "2CjK6QR1XBHmeQPDQPMEPnaRfQGo93ZTUM7XQsjfWvcinqQS9t4sGMn2Z5o4nfhYF2F26k1ftUpybusba3PYyPhb",
  "key30": "2x6bxXZE6NUtL3TzdMa3f7zP1X9JWAT2duEt7axyee1sfRHt97jC89bEHvokUPbDYBjXfxiJ2PWQcrmDr7kswLRF",
  "key31": "3tSUe5bbUL8ftCTkD1PuYEGskM9GFWXKEXdL11qAnZ4mdoeryV85VB7gXztwPbMQAVBzUTqfrDLh3cLsNHcq7cXx",
  "key32": "4nfnz4NUqfRHvT43rRcnQ1fV5SuzTJLH2zot6dbNkQz1B29gcTSMEqzGLxA5SCuVxZ4hqCosiEQPbUrFYr6vARf8",
  "key33": "2c1V6b8XMfMw6Yjnqo2263J89j7iXXQrh7cHhw65kCcMhVAW7vJw6F8hANgSzcSzC6P2mLZMNfKdMV7Czb2Nyjst",
  "key34": "iyLiEBta9eNZrbzhRCsHbzmRhUAcRp7Yha9WRz7LfGQZw7DHZQoYPtZewe2DckQJcEDMtfprL4kbYWgQpAoZQMB",
  "key35": "42TkBBmL17QBuEuu1Yv1fHfWdwJoU8WGyGRA4yZfzaZwf1DmTWUSHuDgxj2CD8thKzkzbU2KhhA9EbyC1yG3WgoX",
  "key36": "5QgydwQWePyB6YVQdTCc5pw3c12NjVVAEtibCo5JB5gpD5yMkFeCVBDqA2rAGkcRVg5x8QDDERmtcuhmFNobyKjx",
  "key37": "3JSSgRPhsFD6Zy8BESBs1j3AE7oE4KxHqV3WFvvcBX7qCu91nG3wVQWh6SY6WqcJ2DrrY1hXYjpLKoBLYEVnEBSK",
  "key38": "53Fg3ia8HiW1UpdqbGn3EmhM2iwJuSBH5U6x8xP6SscTH5QRoeYg5LPj8kB8KpiSTNpJpKdMLNhBn3DxcKR7iTqD",
  "key39": "4P8vwaWTJgabK7qKT8MH4tuQiserfkiTzuWdf94AsnnSPAdKgHxyTe2PJsR9p8yTTSt9uWSBzh4ZMx2Z23tQEMga"
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
