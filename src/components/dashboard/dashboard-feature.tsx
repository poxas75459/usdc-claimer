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
    "3Xrc6EvLz5ZfFPCF2wyXCbiaQSSX7y9VHVV1a9rn5uKfBUmHTcB66HTy9K9332zPXQ4xVc4BbP72DJVt4ujxf56w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtPYnFPDZYJi8BJor3xCLMVPMCeLKAvY4hri5VjcpsHzxMKxn8SA3GgnkRFi2cJQkrxvtPuP9W98mzuFX3YUEFw",
  "key1": "4s4V9Yyh3SGBcpuUtRmkhWpjnRCGriKEJKytrTSwLhKvwVvYGLo6wMwa6QgfSWKnSoV8hL5pfV7HqisraBCz1kfr",
  "key2": "36qXaiyqzT9LvMXhYRwxbnTSzf3q74A6MpBrJLZjWGfWr4Cy56tjULMZ6mkNEZU3pHR3LWnDjMrNfoschRToVkgp",
  "key3": "3xbh8XLayZs5jKxLAMe9n5kwodmJjMv6feqmHJ3sQb911riiH9Qq5N5afWEKthq8Bf1RHH9vk2GoDJW6D5Ta5roY",
  "key4": "5dBy7MsGk7PFZYosskYZxyGwwmdAiazHXQKAoafHec4cFKR6S8p5v3wSGvcB88ieWQRTSsdpRW9NikqRiK65ZG75",
  "key5": "2hCxCKzbyqvxHuzCKqmCrJ2JhRfxixC9LmFPucZECD6iCu4HaFdVLsTMzph4QCN9vEyXQMKTkiWBJgHaw6uPusC2",
  "key6": "3CoKr4b5XMK6rnYXXkj1Hcs9ZxqersuaMqQ63kzJWGPapYQXQnKCuvSAxswkAyHT8RWfCqScWtVkbapeF4v2RoKN",
  "key7": "61RyAN8XL3mFzUFTRJKv3zzZJcFRW7jyzNRf96RUBwYQvEFygBepkcHFVcAZFnzqc2VU4jcpJKtcc3gCh5WqAnAn",
  "key8": "3ZWXEVHgjSp5JbnoNPuXWzHXQ1eiMbjbLas2XWHrvMxzwE5zs7CysHzBJKvTh14EdKb62qu69MTc3cYYRzppp1iz",
  "key9": "93HbXtdXCQgm4MPG5ct7NJtb1zA5nUApnsPGwsZ8ti5CBY3tdboCzvQ8sdURBXPUE64ZeZGuCr3QFasNqSzKCXj",
  "key10": "F7EhyDvStaowTRZykZHCxdeV9MbUf37XM8fh4TAx56TKXHDCXvp17k6XtkxeZJYveVz2LURzzhkHURFXGkY3yRK",
  "key11": "BG9mx6dcpqUwu26xs79veRUvnzmpmdiEdk9FEBnJMBESuR13CT1zuJ43KPPy5cBLwU9g6EH19tKhvWDF9hFsHUX",
  "key12": "GiZrDouk4WY4bq13v8o8tWW5tKnV7THCoHJSt3y1i5bxee6FYSbtysksLD3GVyqpnwa3QP5s9KoQ2nEb8buSLgp",
  "key13": "3dx1kyNeXP1gwHoD8xukddvDYjcbz6M72fj61B8QjL3W9P4xPEgbZTMsRFaPiSinmGh6Lt6NTeoH9WXg4koipBeg",
  "key14": "64aG11eBRsiyfYXivVtsKkKLYK43ggK1WbzT8TBrzQJ3PXK6cAHCYjfgxQzj1sXhJFNLCBHdhtZySSmdaKPecLjn",
  "key15": "vByqBfv3JRdXgF5Qkjn985CS3VocXpnEcBd9mHNixwPA4qB6cKRJAMK65qqCs1b64KpYejpmuhbH951SoRwyA4M",
  "key16": "4gLueE1JAwVdAgQ6iDAwjz3WPV3fBHYJJLPJoYq5VRDsNRo47RPkitHyC4L7FBgenYmyDcgcLBSc8MZDrMXNquZG",
  "key17": "5sdUDhJg2tm5DtV14gDQX5EgxkmBR9fJvc1yHNbWwuUGQze3nhqNaAJXeR4PsZzbFUrkmLVuHcDSc8J1LPkGbtgd",
  "key18": "nyMc7aCryj1iDxxKsFW26SCo4ir8RGDoJHw7LyeboDCvsRXdwZtJ96uAVoqnkhGmGWAiX9yB9YrugL53GGKx7tk",
  "key19": "3yF1HiCyTYPQFZwsjCknBjk4xCkBQyjU3TmAX9vc1zRX3vXKux57qsAHarm2au72dsGZ9g5mjbaGdZ7Af7pJqupk",
  "key20": "L5Cv5Ri3VUg6ySfjh2Cac4aRkLcu5ymeKEp2qdxdoQY4D3eY79tASFMz2FLXePfBxNzddmF3G9dkQo6oVQVe2ie",
  "key21": "2GCd6yY95dfafbqoDwfcwTkhZ2N6R3g3J3KzuBPHrxYzVZZ5FFu5nxc6kcAGLGhcn5rmA4S2aqNZ4Ya8kC2rypE5",
  "key22": "2VejDmn1o3LmBtUfRp9wPqENeaMNsETkqv5zik7XxoaYJYybWL6YWxzRyGe9WjGeidPcR1cbSB67c1CaB4jhApve",
  "key23": "pSWCK3gZ9wwTixX7NDXYDganrddqSE7oFrsYuGxqTt8VQpoBrDtWJKfHRaWhqRABRCPBn482vo4kTZco1vgpkKp",
  "key24": "2iFygVBeLem3fosehs1CRyQ5J8hNNv8tzjSbgf6QoNYi3DiYjDQwW5T5s2kTHb6kZJMpFRDfdqiLcAEzftJpSasA",
  "key25": "4wuwU94VzHuuyFizFvLrkC6s1tBNkjw4ANwV5yBHyuoFP1ojkkCYKLLDaTDeG3SFskC3J6u2rBR4zoifR3EhCvv2",
  "key26": "nN5GTeoAdDk1gmHbv5CvNMD5KQJ6TtAdNsuC9ZNkbtoecwfbQVUHt9GPQHy8YnQ4XX4UvZKpkk212VHEcqQcoJJ",
  "key27": "2KAhwh6i74Giv7yMxJdWQH3banBtf1f6mZ6zSjf2AVn5o86JrNpXDxv3YTZ5tvoxv1Nim77aFnwztKS9PxsSLhGP",
  "key28": "BGdqpLLCqwfUU6fALioLhRkBcuBeFBnTDRKdUgqbA8fB8H4RhiDsXS25Cfq9Q2Jn1kz3fhmUaGQv2eyCUNmiUBU",
  "key29": "44jzwaa7ZcF65NPcDqDJUsbcttbcQuALNUC97s4yKfbGqBeX8z2pKveiMTsW4dinVmKp9LJaH1TPFeaCHWZXti8",
  "key30": "3MTCAbBP2btRM2dNEUYyGUVrDZqY3ZS2ow6jsQ5qDn5EAzBo4qTZfGtGs1TZgGLxmFZHCUPRZLgQXJB2S9XzXR7Q",
  "key31": "3UzWuvYCKzASwPinxX2CyRVW64dXoKybS1wr4JoWVCtu1b3NHSZC6HsTYf918YpWHofqeGAFMuWCtdZgpbicGTAY",
  "key32": "3MHEmPDjGAgyAHczkkRDYZdGvWCjBSQSVx64nzrXLGJJycvvx6DY9VzLhvkE2nudsszFzhZw39NSWa21vm382oA9",
  "key33": "52T4ZeQ8sdmqJ8471ASdmoCLMG3H2E5gUF1CoASbE7oZfx5xxoZ7bMSZyN5FDd8pFnXXWr2ob2WY7qcEQxs7j7Pc"
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
