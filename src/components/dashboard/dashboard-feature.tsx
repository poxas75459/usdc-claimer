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
    "4TEH3VtzMjKJKDmqd3JkwAC4RyfbNGFgSKUPkZavPajfgo5jxwHKeEAy7hncsfu9hA6VR8WSi8U9mBmCgxpP6Vsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLK5pg37158zi4pui1vMLPahyTPPXDfU2HHpCwYFKBm8HkLCFmdZeKyCLCsfeAnpJ6GRo6skEWee3bJKshJ2eEK",
  "key1": "WnAvLoXFEytynkpw6BMCQV4DYhkrt9BKJEYopqrKxCy6JsEVXANfUUj8WKqF5wbsHeVrRXgNQ72ssLncENEEm6F",
  "key2": "6GzRhn13yXd8jNMg64yf5tvCpeq6jvJJ8p6bdnisEbiPXrzJDhjyoAmvGRMw9L3w163gm9wakkYx6tHZLf5x9bB",
  "key3": "2j6LAWPyLcQgfcFsHeCRBBaRA8Wbq5uXNTJrA2GyYrYD4fwj8vfAsLv6asYV29zorFAqWwMYK8wAW6ZeaR2gw8qH",
  "key4": "5FwmXa3pRmjniSYTy2t1UtrYQ9XevHCznTEvdWZAreyRgABZLfvU64yfLAvZ4Xeegn5yuHpAQr3y5tBnxXiAwDN5",
  "key5": "sM8dv3fHsz8pcNdxpfJNiXMNwGawvtdGfRXRsbrt2itQTvqpBM4M4V8xsMkPRQSJRad6criq5kJudnQsajiU7Ej",
  "key6": "RMuSSvC3yfiQiwJit39sY6Rxn7Y7GPRB4dnpQkvsAsHyoGBYcwE2HoCsVaYYNZSHFZ1YR4Pry2dQn15Rzevtiik",
  "key7": "2oA5enRLLPjEF6mudEjRp3Ck5EzopdRH7vsoTnec8j1bNKJAEED9p2m2CUP7NvJNPF4av5xTztApd7VpoH7ukmhn",
  "key8": "n8gSxZTTQLcfKKGraxRcuUiWzyYBmNHe8sMzbaqfgoYBheKJ7r859XT3e71iBvFNWHRxNxg78xRuR6fGeCDdvbp",
  "key9": "5PCkuzqJAa768DUHQZP8ApJkaeKDqpg3UJdy3E3UWkb3k5HtkvJ8QAjqXprccfLc2tWHJKAn7xzVJDymVJJSsf6d",
  "key10": "39mEWNePiGAFmS8hLveZPMUDtdxBvcW8SWGG8TPXdd4MWUf8uEocVvKhhaZf49YvCd22Ha4cnrEMKfJd8QWWnj6e",
  "key11": "5d9yGmsiJ6xcK68UhV5Mg41JrM88k7sCweHeubby8192t6MeEff99ECKusnERQgeHQW1kA3KXorQfKSyTWAapgSA",
  "key12": "24H88MTrCcFD5MtFUtJ9Erc86zUGhkVz6njnceaaSCFwTpft9U6W6pbJdASuJo7Fqkp2gKMZaeYAsZUfksoqiYZf",
  "key13": "wuJxGhSsuEnbM6j7FJZgP8sfoKQkhzmrr4Jx9jgeeTyjEsvBKQGQMmZKNFvRNxstGuN2AzPf2DY9HXHhUBcXyGW",
  "key14": "jhRMufQppKXx9meeJzYtC6qzqJQL6B89VpvHC1pCnLVbKTCQGJdwNz9bB5yrjCKXFuYgEwgP4L6AkiiSMKtBXhJ",
  "key15": "3EVhXMFcvidvh4L4MquMrrMaLuS8CeidPFSfbFoLddoFG17B5LWQuAi6R7UBVzdGNHH2Go6LxGDWdosKZMi9x5N3",
  "key16": "2pY8B3s75trzXuy9cRdwCLJeWKmwUwUPC8SPNgkK9eTDhhbEjU2qvNsugEizvx4huomsfpVGY5udWfPFj8r3VKzn",
  "key17": "2bC9DzNcsj65j7N26EDJqHswvPNhjtCtZVKoLqhh3Z2X1bqPC4CmwggQAMarF1K819tLU8jJvSfZ2BuCKJwmuyJo",
  "key18": "2UZP9oi35sTVR4Vq9k1GBAYzqYpmLQzBviT1m5G1U1X948PcEbc3VJpfR8sGnvFf1wKCgsVqoNgKs4BSwYaHoTtE",
  "key19": "2jfMP9xcd83bjCcAXynGXjdNtDaVryWbBxfHiEkK1313C8Gbrt8cbBxC5gqfCVtro39kowCGYx33wLdQMNqKHdJj",
  "key20": "5wCUABKRDsybBPPss8Cz5pEwdoT5hQHNfk1qErYqNs2LoumhkzUAdLLhp3VcECCtKW85ktLZBZc4RRvbKkHAJr85",
  "key21": "4d61Yrqv2itRSKwMuWBrmjdcqAH5qFvFHuaqzbkaTGYt4X7vkpkHCSxWjcFTNgT9PgkxvWpcmtCCvnnxox1Zik6k",
  "key22": "61L9sV61SSn4Wdbm7BADCSY337ER766VnzpDeR8vHw4avv78NrPr5Vyi9othh5TRm2zEWpBaV9BeRUKnQtsq2aie",
  "key23": "2tvpFkHYRpktq3KQi4RaY31UNBzWwaCzmpVcF7jkGEmofLLwhCofr2NStJnQSDvve6Q52dSsraZw4FixzJmDfDxB",
  "key24": "64FEsXSAtVwXLdggHAMBVsfbAfngTzT7B5Y41ECnz7fRJdkg5pYgg8ySmEWnKJdnoygk2qz47MsrDWAztjt1DJV1",
  "key25": "4yNxAmbVgahfxcUVoN5sr1TUd3NUgGxG4gV2X6UJ6VfTcRtZUTQuJPk41139Pc5ZHCyiyYh37zfhBjt9abUw7KAV",
  "key26": "GEoZD1x1MsbWHgLgBGZrDNi15YY467rGnKDwCn1YYZoHZMtTfZXC3FHcYfPpmuNrcrY9udCYciH2XFZL6vPYU64",
  "key27": "4B1mR2o69rf5Fe2o7tbiQFpve3Ypubw5KnRRz25R1cbNZF6Fuv7qAEQr4E9f327ERJ6bHBfPscaRUY7wk5A6L1Wv",
  "key28": "61SAXudE3dKL8wYveZs6QpwMG1JWhk3dcq9VBet81HSJBQL15ctAvHJhPPnkEUbj9YVJcHWnuzWJ7yNU1BJcGLhx",
  "key29": "67m4E5TmS42L6R11moiwAwbBJBSxD6Px1MJqyKuustn1NtQ1F5426ueqLJ4jK4DWBgz2GQH2XwhSBCpS7C8Ldpuw",
  "key30": "3xjiRqCVDoJ13r8zkipeHZFo9CNc57LhwQmxJgEkVEavyWef7an26mkdsU8cwevMrwzrnEfd2RXZTFwXMNAVvc8V",
  "key31": "3VeC91Nj2Dmbv1xC2Tkn89nzaaL51Mkv8wnv2TdcbXAzLhBfcw5uZiz3vtLSMzYD1LTqQEZCwve1D5Gt53W6HDoE",
  "key32": "gX2BT9rdywdb86qcJafXNqe9bXcsHErQ8yQWCaMzg6Gvm9UrtJ9Y4AaWdALPqeovHgqeaYj66K9tEFVE9LmWjXC",
  "key33": "2Ha31BUuSZu9ZYntgfndge6HsmuwevpoDfKmoZWjaWYVQSmwuAqHbxz2rb7P5xqZa3i3NjnNpmCKCXTcLBx1QDmP",
  "key34": "4Ajhp2oeuq2audLqGgbgp6sHvTZsJJTC4cDKwZth23WrW6uJZe2WN1BJkdVoGY9Wd1m2V3yKGv8yBbxWDAZThzWf",
  "key35": "5e1MUWVPukcZdnjRjBz8hgoBm6ho24PLedTq3utqx2owmYDArM7LQmsj9fb8MLoZjvpE83XmwWCDS6tsWuwgND69",
  "key36": "4w1pzFPjY2yCa9j9PE8SNktiSce9RPpebmoJWwRM9bnqQH5T52cPsmDgNkhQBPzsPCbHPDk39tv629JRhEr2rCR1",
  "key37": "BdbApd9Cnniro5LiZH2qB4QdLjkP5iCB3fkeXfq9VSUTZ3bmjfVTM9JW7P8FdeaVNXowGbdQEvbdsKa82HnN3uB",
  "key38": "2KYx5mQML6dY72CGsFHg3gkKQ2TvQYFc8RkYZVi8ed8MvbevrMR9LBySMWxxVmSYzkwzgcuVcmcD7as1kt9bDgBN",
  "key39": "32UYAZjupyMBDdjBEvF3SovEKdWWf8yuZYnm3qsEwtgR936QCUaJPY2N2bFqva8wCvBtAmqJ99ds4cTvD5KpF7ao",
  "key40": "4kAcHHeejmGgNyHwj8bLHeUGV2TKGCv1GKuCEda6v3j1nE1ma3QBjQSAjHy4zM17aqAgGvUkap1hQnBPjNMZU9mm",
  "key41": "2cCQ9K2y8qRG3EhsRQNzZK1ejC3tnf2YZDXYPPoWWBvGMdW2tNWZiiC4MqVv8US5smehFCQoomJLFH86Rszpc87e",
  "key42": "2oxxUNJQJJLST8pXG2n3TQUyn6BhLwgCbkNasedEBJHqvTK6YyEdkWyPKC8dxJYZP3JJgQCDpiwtjcukKngeBrfs",
  "key43": "4xmfPeMvw6AcdRDcWJnqx2oruoLnxgZmcJyFXS3Qu2Z1KAHPPCUt8rgm7QDojkemdiFFzd7ZHwDYqd2VqPYewbRS"
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
