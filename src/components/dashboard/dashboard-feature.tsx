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
    "5p2NN8o8cQk9ASycNUivaamvK5R5YasUJmw2EprBt7tdSd3m5n7PjDqZ8NLeJJd4R3xUvttBNBM1BNRx8YngqXA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XPfX7mF8CLJp9ouFZZupRBQMRPTpRcqGnMEoAoc5tDms4cEdkBrJKa5haeynGJCqVi2W1mpzAEi5EnVX2TXxoY6",
  "key1": "SrEQTsjKhLVRBQmTy4URFCsmSfrZx4N7TYWFhBNWmHVY5dmsqXj2Hu2jeZ7jXdgbK2dMJ3uouaabzqmQvsCXVD4",
  "key2": "3dbM5aiyoF1P2FzEDqigahX9sziaprW4FEmxcu8sMPW4UmHV7ydReNyqjdkuV6aMCy7qmHb7WRa8bSYeouADTBAA",
  "key3": "2UJDYVdSnFuvSK7BMSQh3Mm3e83Di3KmyUpzAEJ53VaSgTbzKu6Bnx3WiKVwvZoTDAoZwDJVEntG5rLCCoypd3Z3",
  "key4": "2b7zLMXkVJtgctAUP4teYdLwo21ixjrQu3uWZZw8tFS6xsXMYqYtafFGuYvRfCwneMZJYJNFtrL2jyktFnXrcFaM",
  "key5": "5YUJP5aMA1GNYnLA52mJrxikjceDqawyRoxvfVb6Dt72rRFFW6zKngaZqVSxTEaABCrFunitgE3tuW131fP1JXDm",
  "key6": "RD2V6yG3Qf4vG2cEGrsaG5wDk7Kw2UTnV8Et68wJFpbEJWBvCyLPtDxsnXQNioZhRedonYhMFjdaogSgeFiqGyB",
  "key7": "3MxwNaPy4sytJRrRG9WPjsSrgPsxzJz1juu8MxX5WkfzPuwiYifeSKimZxF1ayQQJy1giw5pwEQkLmpPQF4MkFoe",
  "key8": "3ADdfzW9isqPBDetixm1gNQxPSL4T6zkg4RdcPqjFHbc6TriD1zrd5uNwkTpFQKiTcFWRVZvig5GaUkKa3dk6q8i",
  "key9": "4RTvyNr3HBmmb3Yh8EpqdqrsCeeTzQh2AATDnN3iee9WB6deDX9KvqXfd68tperkWNN5JDkNeMFKhtRHwRpZqKCj",
  "key10": "wAgsGGuGKydoZetgcxEgeTFTiVjUZEF93Ht942zrYbs66zCLRPGrmKyt1ydyrUh2L5G7yqrtgHDer6WX6anE5fp",
  "key11": "4TeKsDxkbbSLpvCehUc29T95UQj1BuRUXHie9u7vt3aDkabZCMyHT7vAdFHRyTZzVnUH5s9jYmCbJ3o8xFLpgVEM",
  "key12": "5v2KGBCaXeSgqhqXchJtUA4oe2jeUe3HqhGKDLbV4E9VuxKs84ajT1BcfpXGFYpGTdJQemmJm1JhRRBekaiKQFz4",
  "key13": "J664mDfcoDYRNYgncuGCcAP6WukCXgu7Zcg2ExLPAXxwLwcweLXfryT99MmeresR5pJUfhQpTCXnbuHsoSgTqD8",
  "key14": "5n4WPGSaWQzzP5ufFmR8sFjwzumsgsRJM5oiietDFdxM9mKHjR5sXnqjAGWpqBqSyEZ5LAfUiHvdwiuJB5B6GpLj",
  "key15": "2WX2bX9B8wN3xmLRYhCHzXbBMtPNSqR9Cq15hSH9a2G4J5HWGzsABeZDvTSFifv9vQ1dSn3Xvo8JoiPbFcudwXhQ",
  "key16": "qpVqKZw1D6aKe6TpADFUrNT9gWjmdHxpERxK6yrZGqdGEkZRuJ7B99GCZcFvC6T3Q3n6Ku3tCpmaNQPP7AuYmUp",
  "key17": "5QtsTYFJ4FWt1zGezmvqpCLvqdAFZm4L4Wjee51BuQyAV8hNmnCBVmV3V5VbvaoxzjTey8PPuQhc4gUFeMy8xPQ1",
  "key18": "5Qk6hTF8Hf2Bzvp81uEY8FAtHoWunD3k5cSZrL91EikS7czwRXHHVKshyph3iJEZQfWaDsSJ8fQeEUm72WkmspQa",
  "key19": "zs25QZjbUWZmDB9uwpHDEYdLexSbyiq7ydqS16hTeVP8m6DP5SnzVYAS43vX9J6KMPVTkdofu3PBZSL7zBcujyB",
  "key20": "WrxP9JYP3dAdmjVfNkq5CyMD5K5jaY8PGbUVSMXXQkrSxasTR99gPMcZkeQx5asPpETQpNBfQRt72eY7cWF5HRD",
  "key21": "52xqeySzyMR6tw9tpPz1cg5VY646c9DD4tCiSWcvU91QbGRwp2KNpzpZUiKiVwg57DhbENEDcrN2G8fiUjj85BYB",
  "key22": "MAQrhHezTiwpD6YwLv4BUmgFcRemD6gjY7ufoUkaS65K2WWxo8NhvZpxUMqfH3gWtv5oo4CTCuesoz7C6cZLfuR",
  "key23": "2LwLCwqDTSv8QrWo9ULWP289Bo6HGN3suZ27JZ43j3HFUqagUCjixDbJSWb22BRA883Wre3qHdFYrvn7B5Zgd6k",
  "key24": "5e9PtUc6QriJVvJFjGDnnUr4ST1fSbX35pfn1G3Rp8QH2CB5tpAh1BMy4jV21rxmLNwgtLkF1f7ztdKWwsKM7P6k",
  "key25": "4wJdiFHiYDRRVCcmvcdaHTEmPUMumFFyM7WbZPxFx7cDEVKJxqt3jh2hJmU54Vwvyh9kTbuMBmnJrZb9GWpPBFSn",
  "key26": "3HoQZLxRhN5r11JvhgtMnNbzq1wRj7thj3suWp6QurAzrnLpujPJKBxhiRdo9iMgFUZD6BjKgtjfTeUUPZSXAnNi",
  "key27": "E8yB7VaHRAC5FRfCbp2Zo3VQ6B3m7DBeLxzffdd31sCQz64TAzVJv5QaH7UALbcAooLWS9bJhafeBtRgPe2yMa8",
  "key28": "ZT8FbbDwvj9UJJYdjqWGpEt5UTzxbLJMJhtcQh5rpNvAikMYsDMw8bCFEtJKs736tnmWF1jBYp7kS49Twu5Dcaw",
  "key29": "3JFTzzQnLPeA9GKxGr1vzWjUBMkGBrK6Ctnh9GfsUt7evUExwJvCi9MKpzagWw5UrEUTjRXeSWUdu5SZ8iCioEzK",
  "key30": "5fBemaUVJ4MpbtYziFTDaniCsVDwTWxhN9pGHD76MhYAzTGijiHQKHzRFez242pDuoTbv9J418JGkxe4oayLz3fK",
  "key31": "4ydWNoEcKuFQ1NAqQ4BYmhFzQsxVCfzERT91AXnycm9aUYaWxb5BwFc8KvjRWk6EmtENg4yNsq8uDZX2cDjrPgQf",
  "key32": "DdCa3yGPj9djmzeE8cpBvzZUXkzwWgSJuZ66tNoPjbQTMKtYbUsfAAAerTBMdo49gd4KNWfnPqn7zsumK6Grf6p",
  "key33": "3p3UbjJY8xr7BQ8fSCpkY32Lo4tY7GWkgKFiPyGFnP6ys1WXtt8RG4DQRUMCnDNv5VQLK32ZYoEd14Tt75rJ4vFA",
  "key34": "4dExP8TYPjqW1Dsp5arcjPMs7P9jAzm7evDYC6UnaDotCAn1SnjboXow8xs8WeP5dCSEmZqhGcUkmMMkaMkTd183",
  "key35": "64csszTGcnhGBPY5DeG5QcYuG6dXjoZAS8KHKzzVJ115Bkh2VeBAfcbk3bNSvztP7HxrNpXU6BZcHEy7Tows1dGi",
  "key36": "54en86bBXrHHK3RWqgRHSDAWVjamgEci6qqchxL7eiR3Pz3qQw4mFxyDQ9awtxAL8nzrFaLytYmy4dvFLaVXRvc3",
  "key37": "z3GWztfGfPM9NS1Pz3HPDHcZje3TejKRy1bfLnHX6czEtrCxAVya2w1pekrm9oMcrA6TdyjUvJm43nbYQdhaUbZ",
  "key38": "4RW4g7uhJj6vE9DjAJWfWmv2i6mm35WmyqeCMrZkPPDAn5KTovfot5hTzzwGyDCZjgTDtocLPzYidgU8B68DntRb",
  "key39": "2qgru9bmQ2QvqbaUZuBESrTA3rFLFMvPPjEu4aCScS9JeRxCfH94LTNcP4aU4scExPUiK213hPiK6QXZ5A4NJ1ng",
  "key40": "2VJ8Gc6wziDVnM6TPdE97gGf3ZtpqtNfxyJTvrshm1o8i1RbeTJvTQmMu4YVvkNBzBmNDySfL9Tzoypk7HChyHme",
  "key41": "5y2JSJ5evRT4fC61BGa4dfzePFPUk6ENVpC2AThgvEEftaZHuKiqqvMWbJr6L2o7ioEkS5qXUAL3jmrxc4Dw2pf6",
  "key42": "3QAdBjGhqDS7QRckJJiu5Q7B4FwdtRWcK3igxgU2RenJk7G3diEbXV37ntB61jQTbY8W2QfFUgdJRGR6b8r168Jy",
  "key43": "2oYCMpKRWcHAWuqc7m6McETv933DbDWRKGvMhQYhRtmGCXfnaG8xw2JrcFF5g1oVVqBrN7b7h8GSEtLSjcbL6mPi"
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
