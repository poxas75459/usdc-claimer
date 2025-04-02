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
    "5E1JpE3RNgyqGTobLX5BVRVwCZC74dtTqBaWXiVVR5K7Bvrx7BPJfTYZGm8nmmLpaAXazHEqsW631K7ShDR5bKZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RRScyBxV9eMEmaRTSArNYmPWCqhqg3AUSFbXgcwSomvvwo5UJSf4MiGRVLeeCau2NbK5mnmPpmVdbiiVfVk1zcS",
  "key1": "4VZAbsfUvga9qXae9RSkmo4kNBHGAE9TchFJJ8DHRZq3HRXdz3zqaUAaWWBppUU6bezJP3kZZMExtkFPFhspvemr",
  "key2": "5kWEBeMY8xKp7LY7xTGuksfN3VZu9uUWyV7eszbSASi8UQ65Z8qy5vZq8SdZE7LqYm8amcoT4jTxedinBqTVHX61",
  "key3": "24tR91uNcdt6cAnFctHUTr1AZ5F5mWLYNvMeo3sYFAi43L2VDBuLkQtAmxmWe7B5MRHGiCweWhnevVZanQh735LT",
  "key4": "2vDpX6KCVqUbcyzhqyJCY3mrCKv9QhfH4vNxDxNxWcytY86sExaCdMrDoNADy3yVp4N4rgF63DVDZnGwsmmqBpgv",
  "key5": "2USC3PSRRB8jXXXiT3WWLLUJpTjes2eqW3Zg9K5mPGd4kU6va9sZnacRXHJgbapb2ZA75a92pu7GNvWMaBUWq7Rj",
  "key6": "2tR9JLVegVnwo5w2xhvix4ajrpentXSxFj3v5qzrWgv5y6vmCcUAda981P49hJAPocqR76NKepTFYaa8u5hbZWoG",
  "key7": "5fb6NeGXKmDB153CoKgP1wRsab7jYVsJvA67ZTmLPD2LR9Z2dsEFH1ZAKmC6XFFAfLJbSoTB3LCez41HxqDpnQCq",
  "key8": "4ooQn3PjJp43tAMESKzDuw9P4ERjVPYUUL9CAAkriT7pbKrjbykRTP5NbYVZnFZSA9Lhwe31PTYpnhpgQSbyM5Za",
  "key9": "4WUv9dr7btFvL9ge2zbjR1ziPruUCLizkyiHRbgHpe2X4aG96SVQ5wPvHpss2GaAcP6h17jr9omFrrQuXvAnjBqG",
  "key10": "w2sAT6wnyXqf4YgrTb1xxi2a5br74soSUB3V2k4e6pSzf7bSk55UjbVxJqHJqEvgeP8YZazodHScXHYA1BFXzTK",
  "key11": "5LZQYLosbjRj1DsxRK3YmxvY9fDjCCcGQ7KSDdJJKQWUuKUZbse9WHikEHNWMjhG5Na9vBEXtrHnbubCcMyWvPht",
  "key12": "5rqcjeiXfse1gYLJKMVQ1soeXKyVV6udQYRBwnaUrmgcqS7hNhVkiFnUQ2RP4XbM3RenEqAP62173RMwiwpYXn7h",
  "key13": "5DTaCaEBy9aGgJkoTFrJH31rmsTZb6SSw73nc2zc6m4qX1LhajP6EB8FwfHjAMc19BJtRzdpSLvH2tvEDAzStaAE",
  "key14": "auqQg8cqyxbfkcxUyEVuF97RsntF8XAUKcCKxEfzWWLt6hCyuGESKRxSRf5UhcnELPVWPJH6SvmitJ5gaHfKeLx",
  "key15": "3dSnNKyk8HNrGc13fAJwLZgBLGw8sQTYM43hSvvFhphmW4U4nFpRyySnpdiA4nr7Q5aVY8ydV7tafhw8kSFMwW8m",
  "key16": "HL9ubwoHGi9HJsK9D1hic1uBtpeDRH5J2h4gYSSPfRkjpsM5NpcgpY7SAKQ7qNgxSEW4sGaSuvx6tvJ2rzYTTBp",
  "key17": "YqF5yqh96pKK72pv11ucpY5LdiaymETFZsRZh3EArujHo1Ac4iStyLmhKjVJncewvx6qDdKVM3MfdzgXp6o9fqs",
  "key18": "3daS2SA6e2ctG8Kekvy1gWpKw1V6KrsrdxNSuSigSpiDot7EvRCU3qoB8bvsdgpbw7k9idJ8V99u4oc551KxNLgS",
  "key19": "2MY8nkVT9YAmYmKMuHYrzN5uK8RU4eJLXAZeksZ3KSuntD1FqGFeJtudio2PShou5uBaM5ZkHCxPXGH1t2qQF6S3",
  "key20": "2uPKSmSXqCV28vrgDe6jniJPL6xtbZqJUN4PGCxtVtQaqMKYuYHuYGuUaMZ2tQytxarAmKGcXTCryBatuifArZ5H",
  "key21": "3WdNXwqowt8w16FcVMwAGtW9yoPVW2MBYrTEpL6cPU31HAm78fypcFjFYK2ywh2mfz3fCZCZutw89x7ESVSfzrVV",
  "key22": "5QZAqeGnDXzyHbKKTJr1BRRCZnER9v5LJA9JxWSk9Y1cXvk42RfjwMU8J8Nf6NK2UieH539KGT2Ho4Z4kshS9Vv",
  "key23": "32TrE3VZQAsnkksoCVFzFjPQTfjS1zX8aRM1Ns699amVmFuCfTL8rQ3EpY3RaaxBajACeaNjQswjYbJ1TX6YUKff",
  "key24": "3BvuofLmguSLNfaAMLoi7joNRrs2YZ263Vt1prdSJkVRu785x76FrQJgXNajtK8esAVdKzgJsKvvshcg858fCJaM",
  "key25": "2r39UzgLkPinVYihYmxmksL5cFvUv1HhbSdtDsvyNzY3xrPat88amFe1gRGhJYt4b7vqbmuGKNya55D4NqmDKPzq",
  "key26": "4XHRicaeWqxfhLYss9d7wnxFAtrd9osc6mHgg2dbtHhowJU1Fj2dAwuQ27VrFUt2oa1u556iFZSUiohMrt55eJ6V",
  "key27": "2nEhYZ1VTcgrF8BJnphaBb7WmfR2WvwKesn2KU7cBywHmMDsQ4ThfP3PhZRmvsQEc8E7aytewTsJ3yyV5vFEsW9r",
  "key28": "CrAb5v5dfEjx1pKSx5PCg4wveiMm3upA8PS534zw3iHxTcpGWLK2Ge7NTk6bF1rGHcGGajM4FVRxKWJpbfPgtHb",
  "key29": "5tK3XiJoQ9GCQrgLsfqDoqpCEHiRbpxLziwnEMDj5rdq3uJ8xR4UGN3w47Ci6iNeTnZkKDBPLjkTjTS8eTUDLkhL",
  "key30": "gkYjmWRFCdigEgJkYdq6uoDTkSq3DFu7CTUvYDtmHZxUJT5Fm8HZGeN7UPg4GR8ymFFxrkV5VBsdKzUTrqgM6uE",
  "key31": "Jg3uZG39HeAynwfJHYrYoYv2TinkUDMdXjCn3VNLQ4oPYomUtguWRMuhtyVHaENXbjxcrxF5y72MJTFrqX3Y3k6",
  "key32": "5Ejhftma7R6URankGknVkwGcEpTzSBxpUEpqXjrzrhfnq5XfwJmsFSaaPB1jNrii82yEcrbmb643422Sji6Uv9s9",
  "key33": "GMXycZHf3n3uVYk4r5XqdJ8ZwZU7fewvMr1dtJUV73DSDREGfnf8v5vb2hmD2jrqcWBkx9AnWVmzuw7E8jBsdhj",
  "key34": "66Bu1HfDQNmpzC9HjWjpp1i9VF91seHaa3N8HUSRwypLVjHvb5tkkKZSR8UVemL61Lq8NC9v7cbnrwj1fV67HynZ",
  "key35": "4meiDGAfZLk42BG4vv27irej8trCKUsSpfYzesmzbTkDxrqsGxVYrZW3DMBPxwjfvwLXrurZca82cVkoBhd1hfEF",
  "key36": "4vBUWeyH33q1ZpihyGNTfDG7tExK1pDXty4cEFBeoaMtdk1RK58AD7PtcdCVwoCa1JRR3QqD5aL9F8wbbVFP8jkw",
  "key37": "5j4g2HDEwp9sLb3PbhGBzxFJXny3FQ1oprWiF7r8kAjuVCHknB9dDsz2iZJ8kMpZQrMMR2cpSgXV7WtMedW1VwrK",
  "key38": "XnsgCxEx5fgsYJDnRZyK8qYRuHQA5Nh8EDBGGPEBN4pQ5kqaw2piFHJjQv9iwmuDt3jzBJLkkj49q9iL2QXB11c"
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
