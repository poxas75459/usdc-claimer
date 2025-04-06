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
    "4mUWkr5GFxyVr92f6EbUq8rnnmV6jtBEmiKEcNjTNwPhhokpKp3Wn46nc2RN2gkFjB6m5CcbmDgBkyFTbBbwoF8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7yMw1KZQT1GmJZb2zfWTsPowzwLCnwVyrRcUpk5t9gBLRmLnDABc41Lzt4aeVDDumvHS3GQEXjGkfNJEuQGfeM",
  "key1": "3kreDjdNd2KNXfeXXa1csqcuD49rAQfJoMUvkaCibCyNyUBTBEw3TBRqMm1L6231TA4QWhqwVni9HmLuVgrrTR3o",
  "key2": "2W3jd7B1t8JgjxAgFLWetAqavhDwJUvqQ2HjXtovr4mnPzPbqCg7WjsaTpzVMjXU6GHeaPhnF3U5zfhdYdK7Mgh7",
  "key3": "3TTTqHpXMPmSYtb6C5wcXGeMwahXkLVgnDxb6EzsyTxj2f4iA7AZN41PduUoZhJzQRHfZjDS5PdNXT6QYmCzKgu",
  "key4": "6DpGRmFmQ3dM5nF42cRfRxKZC417NzGhGhuN5fSbKJTG3wEnwigkdx4ZjrpT3MCzy4kaSi3wipZZcbiqpACrKxB",
  "key5": "4o6USgyHNNHycQrDQH7Ju8NLir361g8GUCU1FkJjkfR3vCg4KtRRVEzkK9vkU7vL8jJ7vkNj5HJ6TgmyfLuCEzBs",
  "key6": "3jBkmzxCkb37qCQLY6PH2du42ZRSfEhNzAmEbcGk3EUkMcTfdtsNu275CAeXFPHrZZBC1AATNBYfX8xGfBX6FJPQ",
  "key7": "17Fv4zL4sA4v1RwkNUEtGgSCDKpbKduiHww2fuFxJuJidHj6EVnWuScBQkYJtjq81dsCgfynUH3ZSny7WFNo2MX",
  "key8": "2nE3cCJnZgDUiS5i1G4m9hqNvRbEszFFKYHC8TFRurLpMCrhKUGRNJLJoDdkQaURRkTsZVqTkgVM3NtVPfdLWUSf",
  "key9": "3MLmgNpsXpFGntAFmYmj7WC7mhv1o1Hgc9bMqqY6SW3R93zWbkcmZ4qCJWKaxEKZG5bWCKcSgoqbQFWurY63qkik",
  "key10": "2WDYPLGEKNPgyqzUiFPuyohoviimBa26qJAVbectaYYUS2GdNxcS93ceMjh1ZSUqmDziuZHTjS4sSUn4x95ucPp4",
  "key11": "5BLrpApPVVsRXkqYSQDRZqPgaF6yv7hdLWB53MgE2YnU572zJku5iW7CPNsjrMYFkGQVhau71mjXesJUHYwwB69d",
  "key12": "4eXHfWK9MkG4dx1a2KbrN4wKgy3etDY9pq673vuVrF8oBbhLD4EufXTJ5obqkLzJoX9ZuhayS8G5gs4wyMBwK2Ab",
  "key13": "4pZqsWLuzV9pTfa7Vb2Lr3zurFMb6zbkRAaivnRDw5sDWNNCDGtpm3Vdr2bET5NgBfwP9xe2b1oidZMFWLfoYqTZ",
  "key14": "3FgT1fKySi9M2He8h4dpmUumaLeoF3P1zHD4r7rKqeNkM1P9fFwNjfRPx1h3ron2YTtGknyGeww9NLbs6duenXVs",
  "key15": "2b4KKzWX1BmASBzQgjnMSzC6sbM5y2YfnJCjAB7iePHqsgiC9E7j76BPVqzLstoZo8nPxe5i94mrcZKem3oatoyx",
  "key16": "5KtxHond7gQW9XSxytQyQbPMPFKTx55TcMTztGU65GAtsJLeLVshG4dbaEJEzaqRaGP86kze4PoxJEmrEWzvpdsb",
  "key17": "5k2iQTkYCX95isTLDKCy4RMK25REgVUFL4zWikfU52FUx7HMB5roboYHt3SCbCaRUdSXy9ByddZkGw3qdTfJ5LsG",
  "key18": "3CAdNDkZJiy6KwVGeSnGUrpPGhguLSw7GqKqMKq9XvxM3qbPDSXUKVQsnem4LYfCazF9ccN8GtDFkZs1MYaMgeSh",
  "key19": "N4EjYHCQQSfhHGG6pMz6Aof2uz8jmPcfTaeySRC7idkbQ7H3EaJSvyinc4uTwQGGiCYGBNajS2VtgGrAK6VLqe9",
  "key20": "5eLtGfR1iGystJHzkMsAgXcjDapo4KG365wWrb5qaWJKrosyuM98QcxVRg7zdhr9aKsQ17CutsTvbb37Ci2uj9oe",
  "key21": "3aSMYcCJJwxnjkWMytdD5EkVr6rvR3LZhqduyxekA7S8LnMYjb844tJ4acWQqXPsswb7mkKsoFU217CgoW5VZnRt",
  "key22": "hjXSfMSQzyfRL5xBXF8aaGeCyMZRWWBiPF7fxC2TgDRJJWf3YoA8TQBYBFggBDkuLEy8LqKNHFL1Ted4EeZah7X",
  "key23": "BFs9E31SnePXJbYG8kuCLrSF1LStPaLXfUSrge86Gue1dvmpCKUCAi2ypeRoPrpDAoGpm6oAMU8a8cNLrLkaDt8",
  "key24": "5oxQyCobWhrGfzBP89j9vnybVGo77MZbk52nv1cRNbnh7uinxtzzLNoLg6S1n3JJaSWGfyn8Tbnhz1WREUmm2hPK",
  "key25": "2B2bcS19uhJahL9qiyuAEYe42acbkastRiY6oMB5RjYcXyuFxomuYKq5SQw9KWXbgqNKntY3gzmRuZxo94RKSPuJ",
  "key26": "KbncL58BJy1xJc8PZfc3SfCMsciBA45C4kLz6XuvKNDR93mX1cxc7aHi4VXKxvpaohCxPfuGfCmPvau7LYwompq",
  "key27": "5N15RZi4TL14XC13GPBncTQe5ZRyuui6aJX6mq4qHxHoTT2t8Wt7HMoXRK1p7ofzQ4pvXjzrJb7nf6BjbRsR8qGM",
  "key28": "y9wPamyNxqCTxYkqjAQhGvRZiCgYYV5UremUbUVAbjwz99EaR3VsnnJb8qAyzanbUfCoTMAYdJHMEB7yfh3U5cQ",
  "key29": "4JkMGxupPzB59yLJBbyfh9rkAKGXNB1STGFDA6UAh5WY6pR4fPkjv1T9jaoQbLEhMQ2b9BAqdJeAtVV1dHT7PdFs",
  "key30": "H3sRH7UtNWHnzSkaTzJ2AnVwRzJRdkKUMDKu4tTdkz7dzetZUmsAej7XaMLxnbVWhGCJkCoJZj2zCz34LTsxzVW",
  "key31": "5pZnDXtkbDzTUTDsmJ4CCGh2FT5dx3xWx8L1QvjRbJQq14e74LXRunZ3CpZnmaGCZ5WYSieG4dfhr4h71faUaReL",
  "key32": "jMFniZ4rfMFzpwbvZUFkPqvvvYodrFtiBJPJrVGsgh2xktU6dENqZYbNKFCQjSQcZ3FpeKMe3PQggTNJGmWzj9D",
  "key33": "3c5DdRL24TXygpiMq3Ybja4imzVksdwHzznWN2NYyoYQYSXSMos5UDCdwd7xKFaRXHcjw6TEuJy3dcPjjj5UL9C1",
  "key34": "2FKELGo6dnfF3US3YP4tADmF51ii3h8Euq3gzF2NM3dMBnmBeBEAuYqrjPdfBixhtAKWU3Na7Z6vnxoH38PNmFfm",
  "key35": "4jbLu6LoKHz6tbgYsdnx3UEjG1uqN7x7jXmGZecHoU1T4Mc1CKypwVbRja888yN5Rpe4nz4EEExVakJKpW3P6WaH",
  "key36": "25cXHU1W7pY73nFHPbHEvjEsypucFPhWErkW71NAHkLregz1p14zUfHWV2SNUFa5asqA4QV9LTiDnnm5X2DAMcYw",
  "key37": "5s6gmYGQFsWN2yhcg6mozwSL68JgLPHXaNKeaQmUWhtcFU6ZtGPAJZtuJmmzZGuXxcHPZLMQwSmvAF67Xsh3i6xr",
  "key38": "58cLi2aRfwVa8sefpbPdkHhbNvVwEuaqWKQfLZ6bXq8hdnLjEY31LsHDRpttvMF93n6HzREh74LRuwyYVrEHED2k",
  "key39": "5jtkh5aPvNqn3azf3WhdPt9zMn5bwSj95RVr3FuhMzHYJn8MSoFDvozyb2MDUpD8fLW4anjFRftQgRuuY7DCjbH2",
  "key40": "5yU1aDADsvtoddFp2iWJbxvC9Gqnzn5wZBEMS9czU1fa8cpAfHYyavNdJsf3iyjdmuxoT2Wjs6iV9nFcaJq4TDM4",
  "key41": "259KQuQ2LyUcGMejczxPUBUmeNoRfW9RNUWB3vMBUMbW9mtxwk92eVYzrqZAv8xoq7Sjatv2Mva1EnBwhkUd6rL5"
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
