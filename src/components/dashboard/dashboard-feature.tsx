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
    "57Yu7szUQ7D1oeC4Xgwkx6BU8nMFfdo231vnfm3dPniz6vgk7iZAgcxwaE7245dQV2W3dT4pSLSp9aZ4pNRB8pZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DBRd5uPzbeZAKqFLCNj66NxPtzocPXDP4rqt4GHLwBU4ohgxvxieBuHbFwXbeHrwDwEtcDUKXQkDBoWXVCqKMvA",
  "key1": "4hiMmVi9XsSgZbnpogs9oYBLx3HDaU9jiAd7EGFdvepbFSQdknDwYvyPVy5P1Trzqn9takyA9UiYLCySb7TkTWtE",
  "key2": "3EpRwZZ7xLZnDH1vfKJiNaDHrBTFwbSXNyNtsjyWB8ssKzgym5ETueTzNdcnt4o7sfqnv6Gew86KubxufHF8B1t",
  "key3": "gdRpCwCjLNu4gY2W8Qupd5bFC1Mpj21iEK1a9vgXuC9FRhSVD2Zgn4Tyha3NxEgMkeoiUGMPh9rFtnQVapBHbPu",
  "key4": "xyihF6U1jnnzZQcEVSBurLFiSAh1nGHamH8SHJ1aEEHyoSh3ptqdWW3wrHujNeM2w8dPYYBgaavvNwysGRTxTS3",
  "key5": "VLMHPD9MPFCHn23SDpMhQwdtmg1yXF2AZ1ux9hQfKjHXPwM8EfudapBb3GtLNdEwztcz5wbsyrNfFvHk8Nb2hnS",
  "key6": "3yWwYr62dJ14aBYmHFAHaEm77fTLgUnEhGN9BryL4ow9kyiYiZV78WKCJ3W6T4NbBQnDvDLRGeUQLudrZ7JgRzX1",
  "key7": "Eo61iu9m6pn57spaZ5Zu3Z6YbtyAsLE9jRs53FDBDHx9e2R4cVJbbxofLK4D1fmF6GrWReLLpV4a31huQWkDAc5",
  "key8": "5ZMGdXouVQxGuEKNVwbeSTujXCXV7qYHKoScBPWbZxKWqYfQkXF6ok3ucZr5hjEanhp4zs2vXdggCo3uTLEL4HLW",
  "key9": "og2R3gSPJwN7GtQb8GixBnUAFYSs2CiBzaQqUFBoZw6CbiHcYoJRNThHQzGpSZgKdzZ84pBj5vkSL1iGMViENeb",
  "key10": "5GPE9rzGtvCyShESxbogRedQXzC6ymB3QuwdFYdDBqrtb46MKWakr4LJuP7f41GPi7beSwmx9apV2nh4tSwraj1j",
  "key11": "23q48pjyxhktVGTi92RTVLjCuRriU6iwTTeq6rAkYMWsgNSmisEVYLHkby7vshF1nkhoEAQhCQG4k6UjpbU4dEFa",
  "key12": "4PbKB7Bvp13dxe3Ck6JcaVb2EN8ZwLvx29Gi7WTzdb5Ucjd6oYXaSx5YAoFHD1U5b21FLN3SsqhQK9XMoja16mbF",
  "key13": "BdA4zNRKv6npKzHLgQeoXZCrupgQJ8QcRKLXbUV5ZArqMMMaKd6WwTNsN12p5DkCRK5ZPBCn5u4uasypH45Y63N",
  "key14": "4Hvo99CqeTRmgchWFikJuUqH3ebx3eqm66W42wXyJ7A7ePtz6SboSPD4gQQzBGJYPKX4xrW88anQb66t9WszUo6D",
  "key15": "5BKG7EgGCuA47t9CoZ9UrPXrcnDqsV81qEBvdXUytPAHwSA4JHrh5bEJTBM6kyKws6fdBc6Qgp9qtfsL9RrTxMSP",
  "key16": "4mnTbojCgZCE2ha5hRTQUVKA62EfGgMuSckp7kqvPicP1yDW7LwGRcAiQNU621PUv4a4QJSDoTn3KCWD1LXjPtwH",
  "key17": "4jAnqw7Lk7QkP2vkhLSsGCiTYEZrpy7i4QzaZSLwzeqtg5k7KNmz2732PPHPShUAi1RTbezTkjRWFbk4dP4kcMmf",
  "key18": "2hwrMFcLBEbydDxkbcSZJvEe5UxP5Xw8YXQXbLM3YFVPJDrZgLFTbzoeALCP58a1ci2X98f9qGyFBYt7BZLGbd91",
  "key19": "5zAYuuybzjDZhPaimo3BcS2e9qzXkZa2gbGJfg9pfmPEPmq2heD2j5hpc5BkwKPdj2CXVeuZvKntvpfg2QtBo4mD",
  "key20": "2oANNAvo1AKMXhxHdDREba3DdPxLVYM8UPjYPKxqLBf6wEpEnUPCAWdqVXtwzkcZKGEH8DvKqmks6cVpmtmY1Htr",
  "key21": "2uPhUjYo92fkvaekJB9JeoxggcH2Q15T3UGVA6A31txL2XBaPjvm2FqijfrsigCca4nnfcAGoxMktJ4W8mukabXx",
  "key22": "3geucrwXFuQHQaKZRbcRDhnpmXJPauvC3Rz4KwkYhxLgr3bi9qRxKvRYCkFxjKT2WuJW7oLSfwzp61Va8ipBfRNJ",
  "key23": "EBiw4Kfki9VPVdCMoiaiaquUQc6AzCTtSh1cgoSW3SRxK8D9iyDvfx3PCsw6qprZcmjHZn43wdSXkraJiiEZRou",
  "key24": "24mwanKMyjpzEePxUzGQHX5oTZ8Sqx8XXPtSCGPabSTmY5zNkvnGTh4jDuVvC48XPTjdpTPSg6MDGFFkygraetLp",
  "key25": "4Miyq3uk4QFnXUPLA3c8Buaf73JAHE6TXcyTNYAJahj13b1pGk27UdamSujiY232fhJdsTrQZpf3hTo8n1WncZq2",
  "key26": "2H8ux4eMHR1q3T3iqeY3QCvdfA6zvGFXwgV4CpvYErb4P7vp55Hts8P5wKhts1CXQYWicB1yzQYB9zWVg1ejSvpt",
  "key27": "3GVsjYymnDyjPeWKZPdiXicpqrduEGsHP1XEMTac7ww3qmeukzaGJhYKiuDBXTaKqCUNSDzsDWMzfrWcjbeK5g4p",
  "key28": "3iqw3u5Wf1V14HBWbcDnVHJVqBeG2c5LGvu9oxaZcwK9SRGWisySACz3TKftQ8u6891VmrNJybJ861BEGjLupxQL",
  "key29": "5RUkb9KKnUz7b9FnnuRaft3QDjr6xt7GxR9oZdPyxr1YcsuDzWuz8GnL4vntbvqZhe3G3keCwB9MmspSs4wwtdbR",
  "key30": "5ZdS2ifHGm414pKekbtqnmYmQP9UA56bp19TJNPgfxg9qu1tZE63Sr7B23THKCgitysmWdKjwrXEtoYHMkqgEDKB",
  "key31": "5n9zqu4yDKXKkzMVqffZtmp5V5FkX3rDmUgdNnxGhZ1DpwJpWkonewJ48XtwWwHyYQXRQzncAFcPyuurGE78HYw5",
  "key32": "2ztDTZFvhudo9fsDsFXRo2BZixi9xoNcmdnQ2EEK1hq1fnWhgHqdmbaiPfqCmRL1Bv8N7epdmJrsRcwp3t6JEmMZ",
  "key33": "fMck6vyQH1pyP9jjnazjHyuZfp71CudveQBYgtfdUY7DwDEXv4KvDyMLNvJp57w1SpPmP1xhLGtxJB3ti6Q63Vm",
  "key34": "KYQqyRYhypWGSWLiXPR1yEu5SQ1sCcuu8NfpMviSk6ccmgXpHTHPt75dfbzvfBDoegxVJzGK5UTvyeSMzd6HUWu",
  "key35": "54YKdbAdJodgNh2nF292Sjkx4A2mxjXoMZJeg8tmieUnduxKaaoz3r6DbG3dL2MPuK5AxgxwCW97UgFy94mRPEWm",
  "key36": "3BCWcXyAzFNbibXBHAPDBgeoZP7GodLfMsE7N1qwRiA32Ary5bCWM6GdJFM923WDzTe1CLzegkotNT2FZu9VNNKg",
  "key37": "274EMQb7auo1WtEXsjsXf28T7W76Y8ELSxgwrx8EJhQ5qM21H4cLSRs2Bx4upmpDsQYgW3R4SeWjPiZZb6Px1ePp",
  "key38": "2JxC3APquBBYEeZbyv2XDAYr1JyCFjf8LtDp59cpqzXRcq8xTj7nxZBAjGzwohRTm4U1fFKutjpTZS42yZjLZXuf",
  "key39": "5BEmdyY3ujyswQ792zV3eC4sgybDKaPcSYkFnsHRbgDgTLqj1HdjzJiaKKFzYijo79tCLHxYbWsrdc2GYFcm7Ezd",
  "key40": "61k72widR12FNZKZH4GSRsnNvi1YSTHwHnVDTx5HRiruo8urat178XWeWJsy8UD2rRSiQ3QQEKmJPWaVZNAbb2UY",
  "key41": "237mehSna2ZgQVzCocStDzgbQjFeHvyo6xuhy6bzTzC9xDbBpHoDwWwQPDBevvUf2cSkFXvV1epUbLorFRbB2mrv",
  "key42": "33pNE36JLs4PteoKcppcT1T5WsSxxsHS6Jb3ZX5zrFoHDJHaz9ouhqJNtmhsgvG1DVv2Q7aKEEDxWP8hoQr5QJ2k",
  "key43": "KZyromBPwS2j552rGAeyPaoZTgCf6P7pzycK5DTbyGDmXG9hVkusr7bdtLuhshcee688SQJjxtx8Yhy4w4HQfB8",
  "key44": "3CaZYUr38eiLo6vRSnrRWAtphSSxxTgu1ifrLTRYUoc4U157j33ZceonFZnKDT99Vsv489N4Coqr8Pko6kw5xsLq",
  "key45": "21VTLjZnJSBFJyg7UE8xXP8hnmi1ebEJ6A8pP8wU4JJkVfGmpvZJJyMXJSNaHsj3BbhqY6JYdqeS3YoLD3oaWxHt"
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
