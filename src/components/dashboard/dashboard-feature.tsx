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
    "5mF5T67vdF7WnM5emDrcLRS8Wp6puRt9DhCmCnWcxe6HfSewjKYjqo5X5SE16ph6NhtVT1r5Yet7cARfkGdK3nQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAU1CjRkbpWpwLomjrBo35QP3o5v5et3b5zch7bAtxr8cYArf7Q8cQD4ihPu3rnwTpm2CZLZsyEQStE1ghDW1qk",
  "key1": "5ae5V1DK9LHijVjUzZEAhR4Ec4HxdatPtgWCevZda294wzGwhBF6C6B9SWKkvTM9Na9gxTiG5EQPaWgqp2aa3ijC",
  "key2": "vBzDdqubQUHztuwnPDt5Z76QMAXM1ShTnZevf4honyH9brWT7VvFtiT83gU5Xz9XTLQNBkSrfjj9Lhwst7fBZGn",
  "key3": "3sZBQFrFRBwyaYqRvBFiPMeKUiRitGXzk5y6nYm4c1zjDJwqbfnrjvtLgJfsDEZZeRf9UH4VHDoQ4enGAQEKiSAK",
  "key4": "3tupj69q7GmsBVtdCJpWi2DXnZjFEhdV3YQGog8E8H9YMvbJUbVQU4xfTAyerGh6ohnbzRhFUWjKFPnH4dzMuDsL",
  "key5": "MM3WcpJNvCuYYhiEd5FxXosYdHoXrx9NUNuPSupdSV3vSvjmvkWoWsQzHYydNbfazrGc5gUnndBZuyDrA8b6HVp",
  "key6": "5murhXbbNgFNanmfUJvdJEf3sQzGZEubyZoJr9GiaNDHgMLQX7wzRgDcQ46R7AMvMpfidcuqiS21xFY3dctdQfcw",
  "key7": "3GRKrcFMs6V789R6PATFoVzYytauWerAUpvrKHJLj89gPJJ3DZ6NXgAgnf7WBo627FABy17NWSTGxQeDnFoSxZmu",
  "key8": "3QK8hSPVR4zf45jogG2HSFQnxAqZ5jrTVJHzYaWHUK3GSR3YEeqaycTb7XQuEBr4TzskPW7HtfBwF2xz39FWiu6b",
  "key9": "5xhQ651q4zsDxpckYyC3fBKj4qyUPfzxMKePTfb3CyLGp9YziX7XKMJmhXQM9wTGn94XjSmYwLKTbKJtz4wu41X7",
  "key10": "4nJ2te3uKg3DEHEgktMXw7NPZHQWU7QpU2zoaD2DTVfJuk5pcJ6WqCSdsSJnmzv6wJNu2h3LaaCy9sL1RbCpVVJP",
  "key11": "3tzDSpds6srETxMhCMLj6aBfw5Kkpa57r9tsov2YFKrZdGtGQ1fJJtvfnWuGEJgwW6quEvaE3rGyVcvL7ZKsQBkF",
  "key12": "2UCccgvxjMa7pTTxH83zAjexHRWYSer52mGUFwWhAfn43feSohR9Fmma5GCBM2t77xFBKzYqDDi8JK23k9R6Bbpc",
  "key13": "3WCLXPAp2XxkHtz4ghLLG3NQhySp2UJFzoKN333Fdt9QH7UGxAoqZmaTZ61mVKsnPSUMwjTEZ5RnPs4NnWGT4tWm",
  "key14": "2CMvEYh9AZ33i3fSu48gZCN5oYwo8AFakKAvtWSCE54PunTbgJnUqEFQQLAR4Lr7QZtcHaeDbTDDtcjryBu12whG",
  "key15": "5Vg6WCgEeHjTCDERcJNaaph79nJcqqMCSk1ijnKpLKPFmYXYuykSEm64sK41yefdRssKQeAqdaQ5RZJF4SUQkBxA",
  "key16": "3hziY4x5bZyWcvWqQgj4812KTqFbqHDngNQwVtdW1qapWmn8o2Ztrreicn1LSiZEMbkfJvQQ21Z4S57tkMtxosgd",
  "key17": "5K2H5nqHNfYzmYbYC3XTUCn7ciGs67ne6QLFXiXakw4UWDpdiiyZHdKk1NhTHFs3cu5YQNTX2HTYBvxxkHU7SWfc",
  "key18": "4SvyUB8csMDB6w2WqZgCycMWXuAVhJd6kwgAW43bJM2NYqbkhmXzU3rSh3g9V2tRNwoz3H29B6dTDEUTTeXKE7hm",
  "key19": "2ykuLDvdEXW4onWjdTBGp6fA2j3x7HQu1wcANYi2oA3TnehtyLA1uxxWwKVxNZLPCSwMS9uMM4ozabtZf5c9A1D4",
  "key20": "42nVNeWJfvxk39KowZMu47qXrk6uLSjXscQ6qoTz7TtnByhdfKN6BFTzYT9cG41MpWzc1ZqZ97NuwGoTD4CfeJkV",
  "key21": "41k9fMhF4GNyQ9ueNEiJoCxdjKVPCnag4RAxVGG313mvpVP54x3bak1stiKwnrFj2ZJSR7qUPwv7amArSfPNFcY7",
  "key22": "4QGnqoh9tkpYcv4sowKsLEiBEziXynfYiQ3vkofS1eJGc2gafS3N1G5Y21hTw4zzZbKJBQCfwF84164EALSmAp8P",
  "key23": "2Pzg32bxaNiYL7SK8FGkg9SACrSwbECk3KKd4Cvv4tKjzArMyFi4khK7mdAwD4kvzUL4hQ4LC7SPTD34CuWG11mw",
  "key24": "fDnyVHWFGyneiqnq9EDTC69sELw5hCAcBEoCkahQC5jZ1MewFLa1wPqtgvtZgh197jxB7Y2gPPUmPviVx8YV9G9",
  "key25": "3g9M6xyatBpCsGubesWLiT97xVz6mAo2wqrFvoBEMePKXi4xH3FURZh8MkUaRZrajmPqnUecYWjwiSNc3UiRXxcJ",
  "key26": "fu24Fq1aVYPtUHKEyUkmaWEcuVWEcZLUfeTXX6ZYgDZ4tbohcbEjB69Xy6rtWUSNYvBSw2dX3NjXFX8kCQRjE9V",
  "key27": "kqGe2pcrgVr9a6kY664ESFtLzpT5z7XLXPRheRkDUt8ACFJc7zGvpQvk2w7u14kSHoBs4z87Lgtr72C1de554LD",
  "key28": "5PpRNuNiY513jxBFwgpSbp7DuZHXTha8dEmUj2rovBX8QJUuepc3KM68CytLvhhWgC5AptfzgMvzeWiMmphAWAZE",
  "key29": "4Nbrh2r6MkigQrqADoFshEtRn8jbsmFSEzaUKXaQGnZBYzdia6QfZoiJCR4J2WDd2Qs3487TEwNqc7k1RwsRVsys",
  "key30": "3M8L7FMkLqhRnRr4PurWr3avb3J8xPN1hdp1df3XcqY5DpbxTtKEBaZ9z73paN8W8QK5N7bih3KUqtPqpJoRcZUk"
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
