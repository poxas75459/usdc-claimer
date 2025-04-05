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
    "63WPnVmt9a1NRcXGRgnYVTGNdxaCui89FhaqtTjqkVP2uL9QGi4GwA26KGd2JXG6b6mMxvxATfGKreSBrm3Tfkr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2guMsXbQKNGbTBg2jBw8QHponbvWFPm6V6EH3scYbcUuvVPK8jFDPAVmqZRseZbR6NmZnNBtYYFFPRGPHCQfEGR9",
  "key1": "61JGHznhvBwYWYFBbKZHfsV2RUQuwyY3TuAYRY8TUkXoYzsE2Arc8Qweg612BXGw4sPscyvNiEGbGet9e7XNLXD7",
  "key2": "4iMFY9PKHnCsbM7DHpmyRPFW3rLDmZXxNZt4uVASnHCH4XWcJ8zF89mq19Pmm5pLjL5iUmj4m8VoZe4nL7mAxpTh",
  "key3": "4XKpWNNVByV6tYFoCHrfdZzdta2GWbHit9nEzxuZEjoVFftmvs2fYctSdTcHhKQG5CRRXc8eRSNoEzjdXAHyifVU",
  "key4": "VQwLofmRMgixmsKZt7AKB5zdbpmuihKcgNr6c2XGgXwcpY2MtrrWEjYrSq4Xcj542xop7pKAGakZRuU8WR7a6dj",
  "key5": "4F4t1csgEjps1UbhRGq2bmwfZNx7MkVPmtJuL8EA91ao2z3Up9cPynMp7ed4LsghkWBQipKhdduLecxELb3oB7Td",
  "key6": "4u5Zxy67ScRfHuYhKaquRPyY7Rw8NbTdfJmgCxRgwUvbbmPH1yGzY6r93Lm2vuu4Rxvh4gD6FAQXsvXhDFoxG9LC",
  "key7": "52WRMgnndY8KzDMEdkNXg4Ugjj4VzULJua85LxvoLDj9xKRjaCBHbDxTtkxR1MLVJPMsySost6fvMpDHjeaSnUnH",
  "key8": "37fLZ6HwiGo28nqiCSPSiMS2HDjffVSXYZuFtZiwzohsg5tXSqjLcs1RiuHzjgLzPDmvrFFWBnbEr8MZxYDgDg4B",
  "key9": "4BC2qH7ZgePuRXVqk4HxUnFgHqQg2BsA6KarGyTFigTXopLZNKYf7bZzHaP1G6tiiLwcVWmX4XMGgZE4PNyoxR9L",
  "key10": "2duoTsXbo3kCTKdiCvzFUj6Y3Ltb4cjVmUqbZL6GcSVoq2o7icnqK3XtFZu6CyweKHTrZ1fhLKybHSmuTdDspCZ9",
  "key11": "4A7HN7SD8jrpr68fW4jDqEPr31ReH5La2HJ6XHL8PmBchtjUJeXbGiA2uth5acNBYD8ZAigoh1hAvfWPuegPdSJ9",
  "key12": "3qdZUnMeFnYg1b5CaNaX5hoiaL8KUT96dxd9EVibpfJsWmmCYfVVtkv8Fe32UUC98aZBEyCzS1vYMqFx74YHasgm",
  "key13": "4AZF3dQJy3mphWFQGJJDQNfyu1rDpx6i4ebSU4t7FEJV5FNvjFRYGZxgZiwNX2MEvRB1EWpYsjWDQWHw5SjrikP5",
  "key14": "DSwPijVS3H3VBuESqw7efwiAGiSabbZbnGYFvuvJzLrcbAvFAp6vmWic972ZVGXUBHrB688GmDGD9bFHV4k2v4d",
  "key15": "3Mx7zH83bmoXutw33SPb1aUuFbC2McP7Xt5DR7zBSfqrYNErcC6nYpTywwxUk2WLRm9A2BNct2di6FVtE78mhRAR",
  "key16": "64W6k3MZJxCiJe58to7sow1BpuFd2FVWUgE8M22BgeSHLa4QmHmMX1ivzGvnSc8ZyQQpbtDz81GseERYHVjYuY2Y",
  "key17": "3nCzvBek3M63DAMxGTUgSr1gSafFXcn4d1AQb2BcE6dMy5jWaKhFQojbRC6AfoMtd2dXAHLY964bbAqtGmeYvK3R",
  "key18": "61VvHVosMWUPryFP8e7GTKbJiwWLN94MMxzZXYCAB8hQSQRxYLE8VFkattwC6m2uV5WozTe6LYJvUqycBG2JCkWF",
  "key19": "oJmydRPrjyRS2QJve7qUhLqFC1cosKmZyVkdhdqS6co6MjNRJfB9DF15khtYuPLc9AWvo47n1Fh7MdhazLKzKXa",
  "key20": "47CsprX4eaSEyJFAFNiqWFpKytnkUoG3buUFazJJzNDpvZjk1XzfsoEg6WZW1Hus8XLV1YjDMEwoi1hAB4zxGBNV",
  "key21": "3hFzqJg3y1qhg2NBZ1Nja4wQcdiDWCcr8jDjbHF5y5nCUrEWNRALzSiF4Agbm1BZTtAn2axm6iiUtLQX3qUHX8We",
  "key22": "TK9C95ZXkvWg4pfmTLSzKqR4wK9ASbMe8STPwJhdfdnAtSh2zbwPXCA9uKEcFZoPtzzCoiB36WXwECXUzVKyqFd",
  "key23": "41gkfPmrA4BaBwEfEm5sDvQYkiVfGQSLcZBrAj8kg5dE9SpZCf3R8vY4zEJqELYB8nyi8p8o7Mp31D88rKDZRV4e",
  "key24": "5GuBgmUToqw9UPKWWak5HL1KR4CskXYR3pEgnpPtcwuvmHYx1cvq5HthpDYjarNNbAp21a4LAWYizbBxkHxjFkAf",
  "key25": "4EePjPAMdAQQKoqoczkDYTCdiDHnF1E1qD3cNjwsqXvYNgLWMJHLzSNGB7CZ9kFr5td3Ke1cqS9XhkrkzrKbpPxq",
  "key26": "5tXrFjKEwa9dC6ebcZaGf6n2LoExiCZqcRo61y4th8fdQPDwWtW9p6Bwag4sxpm2ZUTVVmGTgTskDjYz6RbfpVD2",
  "key27": "4M3EFpc7T2hmp5kMfEMo8mnh8k7bKzc73Vm1yN1DXekCdxwwVGKYdJkkoa28B9cS3XngegKewUTRpbd9Lta8pghB"
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
