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
    "3mw6t4NVbwzxXerKSLzshdiQaAcg2719tTXdxr7cSz4VQ3YXMr44xeThcS3EDF9EGiUueH6wTTC5cbZP22NadEXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dcWbiT2S4zV1vx99EmoXZmP2JNAfZRTeC9ecyB5HNVY8cyYYHqJSq7KMGyJVLW9gmb6NaCjBxHF3ccVjCQVMk1f",
  "key1": "3AcfeDyYZ42RcoSt2wkUQWJt1hyaS3k5MXsGZCM88znfHWvjEW2WoXi61bDRrqu7CF1Y4Vu8AV2dz2dj8qiqMDwq",
  "key2": "5t1g1y1Xms7xcuddixyJKoFaV6BZD1D2eNGnuPe9yABsBrYvesHXpgX2TaVdS6YWHhr6Bsx9Dewn2hp6SRU7mcp9",
  "key3": "5DUZmfTiaCM3ooBPsV4GFNyfiNVJjCdwgkY8hkvpDas4p5mAawgkMSpcTyLi8myANaeu7hPiyye4qhW6YjkpuCb9",
  "key4": "TKHQmiMfq1MDKwgfDyQaBxtUjceJmRzGR1PYvm9rR3WvHjKiLCgmG9k8fu4QZgPWBXs6Yd7q9UbbkbxTxExUN2m",
  "key5": "4Q9YAs89wPPva9yoz1CRd9MCm1EFk9z9nhXBgStGXC6c2Z6b4hgfqioiPBascJw6XAYfkhUmui273Y6NCaRoZ5bp",
  "key6": "2wuyHFSZ4noJdufLPM4dRv94zEa7VLmNFy7qdfwEWFBJaBULM5Tym4j1kYTAjv3vq5CQMcVJDS3sHcwSCpZnnYNS",
  "key7": "5dy7GCCPyXR4wENJtMwdixUXs8kXywQkMRFwVXKNW7VnxKKChHVbFEBEvT3iBRfD6gsqW3hXZp4ViuFgNtf55hzV",
  "key8": "51UT8fqVk7ajTGyjrdD6x8Me6JXRXV2s2G3DJnrovCpAQzNrv3dndAWDRYoBJdjVGq4U1u56GixjMDnCYV7zyZku",
  "key9": "4kNsaZ3uQWY2spFcFP5JAXZxfb1sE35DzBi6wss4xgY13yHmJoJaZ5F9jYzpZ54cEwbAV8pxggfHxxbDXe6vLaE9",
  "key10": "5TLgNFSZ16WoUVDhuK6MjNEMJe5YFM52yAfXoYKhwTicTiGqxkdnSkjyYj4ukcLJzPHJQhpZumm1Z7c6xGwZEYR4",
  "key11": "56Ud6Q6xpSqttpVQgS1FNxMmir4LkDtVfJQdD2Yi1fCxvN4WPAssA2RcSJd9tTvjSGVrjh37Sy7BUW8dtnrBcA4V",
  "key12": "2v7dEdzWbzym3eAQKcsnQAie4C1qBbWSWRWjCksMHFQzgaYP4zyZDNhu8skmQSeo3cxU9a6qF3RnWt2m8iMpuRBr",
  "key13": "61cYMsEduTcNg9WUT81r1eq1ibEjzWqPF2LmdG7A6iCmu7Pd57AdfUWaQsTkoRh71i5Pr6GA3tWbVnHi6WBZgkAS",
  "key14": "5KKgg8GFmqe3BwGk2rtXwtSUz25RFs6G9KMHEnii3So4gtT3JMYVXy5mzshMHEBjnd8vara3S3rZ4hpT9Mt52WCu",
  "key15": "6BbWhAkPbBeCfLf15Jaz8B81abRs1vz2jVJJEB7rqwSCMkgRqtxNfPajCEkGsX2G8wPFP7B7G8t2qKUaWTErprN",
  "key16": "5aACGUQNdHvGTLbtV9dX7gC5XYkLG9zfcszxwde4AnXDAei1UvanNb7CrZgC18D86KcXU61Vs2agTHmj9ybUtC8M",
  "key17": "2qNCd91B5XjB5b3WukHgz1biWJqeaKBccth4mxAjfedFQdh8BBc8KWgZfT2qCcUEfjD7ztjGwqRKxAiBqMKF9v35",
  "key18": "3T2zurgCQ24xrZK1MLCYvBkmHpq8X2cJsZxpZJ5E9XYGj9pRqQvqFL2pbq5jSDanMG3uYS7a6fMyhqf5fbsi5xwJ",
  "key19": "3TRGQ7W3VkFVwtNnDCptqssuBkKjCY2vj9voS9FWgEDFCsv9YkEtTGMmrbBhE7V75Z1BW3BXSdurFuQMMnQDU7DH",
  "key20": "2M9zZDkjdQpvUzcpWnoZg1HeeJvbzisJE5gZmDkHvzXJNELDb7KheekbVupH7gaqXEaTQzUxF8ZtvfdRJjKpWMVt",
  "key21": "59g6LAjaStw6jae6a9B8nazUZde6zomE4iJE6mgQiC9Se1ZXjA5wWbq6AF4PMyj3XESrEBQcbJgfVsfKdGwNPWfk",
  "key22": "4Mr6szNMVmzibQ9oRCmW9CcC3zVygBETfRZZz94nq1Np38c6Rwp2Br9UnsWVWL19BXRUiABvrDwdDPtqCUNuBb6S",
  "key23": "2SZBTJaif8cLpZ6SXsct4BoHHdYg2ZB9CaZzcHZKerBBdt7v3zEgt5onkyHZdfCtXB4vh2JAKcXapYjL473X5kqP",
  "key24": "3YRHv4fwqjvUo4knKtWxhcCCoEexf24DfTEy7R9aYbEu7SzQWfFQAkSpCDKL7UUufiNabpSn9fL6KzMUnqZ51xJe",
  "key25": "5N1ZMHVRnKaqdiwKp284YVJq6vW7P1o4s6R5g2XDkNoW8565TvfoEXiYvgxVZ88ecg7HjUWKmi9saYWU5Qvi89CZ",
  "key26": "2qoeKC8r5172RpqcMrQHhkY8Pxook1eGDhrJbN9LHP35GPVsJvgNAU9E7m2uibJ6AsEyEofhuuHgVpimXF9akmyi",
  "key27": "5gzznNCcXV7U5ERJbEfnfjCS4626bTk1tETryjkBwpKR2UmcvPntB8oEVwDArL7UoVsNaTaBWtDn6D5VkVtjQAeh",
  "key28": "37Lq4iYq6odhJK817UKN22PtemCBp8EaqMQUu3MYfFW6gJYE3qdLyRjJbTjQp8eYogK4We8FErnbMgRm6JSyU2Tf",
  "key29": "5Poskgs7HdUmgxwa8voDXTdDuSE1KCVzX8ozuzPvXmVryzzWFZLdskTkAHfcGfAg2UYfA1VZn5n2MKxa4Gi4FM3o",
  "key30": "4ZrokYwXucS4e47G55RmGLMTosKW7rm4S5biYyqMjCBCFgPTykfJA2nVwmxka5WxGpYaHijqwinJ7Cviqyz1KZh8",
  "key31": "2gbiMFyP6jVGZtoPNuDr1jqz74fzzPtKK42b9FGmbfqpgTvQnAuzhGSuewkfmioyjqyn9M5n92TDv1uX9FCPmRzf",
  "key32": "2fkXgdWJPssgZ6GwjcT22hDZiqSfCqmNgpEwYgYaHFJkqKsCCzwKU7owvHJudN5x8FhNAweCYAqqTo9tjRxGoPzj",
  "key33": "5t5Rgz9kzSf75Ca7r2jXABD9AyMMqM5Je6ScmF4VL6JnKQtj5wEbD6kNFS3uHqtZWDJByjQFRubzDMN5nSvneoEf",
  "key34": "2xwSAM55KbR47VWjKbdSYiV4FERR2sZWvg38VZRA4pK5YpRBStjq2wJp3o9hS2f82gnTq7dxfJ7WUhoDFTbUGH4K",
  "key35": "2uANyeykHHUGwtbhLhTfAj8JA46St8oCYbwbNNg6tB4ekneBDJQTAKRbqF3vvW1rDrDGGZrkcH6vzy8Lo1hSGeZy",
  "key36": "W4DzCSjA3wedrT8zKgvVgryYMnJqJqqqFsrZeFvf2nfJktce2xNvQ7AVja24D9NqzJvJDajE5sskpEXSvjDpawu",
  "key37": "7csRLaB51W68rTSLZjphNZLSKA3EhFCVqy4HY1jjk8HeXW4VQMPEdvn5c4ENXgJzVRd7VksoAEz16E3vwSSEwpi",
  "key38": "4RhxjhFozE23cDAtgbyUMh2eZMpQEFtE6xAmhGrje1oEHo7wLGe4sUtfHbxuhW3928FPwBrFzxpdZMn5kgqYidAB",
  "key39": "3XdLBcL6f3XrESMJ7GZmFqip6GoAoPY4Lsnpy1iQws36LHXxetZ5LCCBJxmkrntkGrBiJCNaKwgWv7Eu5isUETE8",
  "key40": "5tXLUvpramyyX9bdCmLpCq87t1JrbLNYmfdkQUNjp3ScxXzDnBLTR76A8BcMMH3N3dCpMUUNaeKMG4EjDS1edWVy",
  "key41": "5vYHvik4ymhpRhtAoEhG4hFGpnhY9CxPtpDDDEhWVFufG8QBPx2vaidPAhQ1iiGMHq1aYfHFJ7BkW6tmq2aaTwLb",
  "key42": "3qiBGeB1dcPTSJStKsj8RCPAtnnKHNzT8ddLR8NSV9f3APVSQfwenB17XW9mPVdeQ6zQCWh3ViEDT3VaxLQVD4Ec",
  "key43": "2W8nvd7UhUB74Zzp3t8yKHA738z1GSddRgaowPCSaJhv1GYGptLm5SofhuwwVXXTjfuMdSx82yNWdTdjD3dNdTcd",
  "key44": "5b6y56HvYKMfd5zRZkxdxbqBUJsgZvAiY6CHSoCxmWwGTFedTSJeTpXGHD3pBhv8U9iwSyMyq64pW9ntxgukjMua"
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
