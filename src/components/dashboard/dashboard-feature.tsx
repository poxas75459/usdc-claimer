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
    "2Y7X1TMNmjsbh3GYsCk1H8Aj4HSnooKFdAJKzYLcBuisbrthab1BuJsft2Hz2Mk7oJaVy4EXYn1JptYBX9F6cLkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3grs4EHKe3Fsc9ZhJPKgqWfTicaktzLEJTPKUJzFHDGNo1SZrAB6xGQLwEDEipQax7BjjgwJa8vWimB3tgCofLGq",
  "key1": "4qyzMfpsT9ksBWpWsd3zWi8VbUS1tWhQ4LDqphNTMSkJaEH6hgd6EgFcXWEMkEHSVt3zxh9HNpz5LKaUWPFchkeJ",
  "key2": "2k8sBXbNe1wWqoZXm7iq28JTCEaihkP76E1S6bLCzwCsrRTGgBdSHAhbx2nkP7aTKBACktNGKfWYsmZ1f7HfuYkF",
  "key3": "2MDUB1YVNqYEA3W6AtXtbkmdtxp7eKtuMbxCWdxHokjtP7mVsoYvtHbzvPa6nNDxieJdX65sLum2qBXDHLgcfsPX",
  "key4": "29AwwrzZqGkeaAWF4pPn8cEPvo1WZTV8U93LbEzu3X9iwxAFJYATacXXEDMa8Gm3UZXyn2YrX8oWEMtbrrCL1Bym",
  "key5": "2dyPwKFaxjvHjcQBb5YHuusPDjGRxfjjXLqkwgAvrb5KkZ7nJXxhCqSxHnhJ9LfutbuNq3SVLhuAe6EzEsBL2fUT",
  "key6": "3Ap35TD7XL52LYUc2sUJHyFYnfy79FjLmMiFhLUvBNmhaLntHkhbjrwpRync8gUmx4GiS3Pz7npZRukx1GLFZhF7",
  "key7": "2TpfzkZuo483jCqmMhfgy8gVHQJBtWLaskXNyBNqngVdTne7kZgxszbJ4aJjBv9GucE3uc1UCrn3pirbDSKU5r9P",
  "key8": "4A8t8s2urCQYUnuPB3k3NQUCCVe5Sk8fpfFsBSBfzpQq38ouaTXyKf47Db9yFvXwzrNHVqcuM3N7jBdp4m2otCZc",
  "key9": "57HCWn23nrJBo2BUPSk4Z7YFEJY6MXVdmed4ESJ6XsmFiefccRVGJSVk5MTEZQy2KPFKjKdZqznWxhZeVu6Wz73g",
  "key10": "4MtTaQNgG5EBTWNSXxhwhd1oiYb3Gwoy1dB48anEEHdu7faWCL5jznjX7CspmufvuMFpqRWhFRVRN7MHjt5tNs5o",
  "key11": "5HLyKUqC3xzRToNZeUwyWew88DfNccEgDP7gVNdPkQZUqG4VUrawn1agmkAhb83ymn7omxMJWNBMV74YzZ8wEuw6",
  "key12": "PnFSsBUGRBdX3VcaiUwQu7ZnH4kk72q2mZq3JZnWSFXobZZKT9KahZV6VmpLsEaGvFCATyqZYE42PAE4EvXtnnK",
  "key13": "4uyKCWFRxrBvFZdzKyz5wifbzLDe1HdAMw69haBHAuftfYM7uBvAGD7T6cEV7pskPGvdfRDhYHnPyQq895fHLJe4",
  "key14": "3LyCVi1KkYdSdhKTfSGcqzk4udMtk5XVNez1dPCaWFdAhL4V4xZiCcCRLWDkEfYx5KK1ZFbMw5paubgEDXi2xzBd",
  "key15": "5RymQcYAsLpHWthrgZKhKXrUszfvDyy1jHJMYmk4qejTeYvr7sLPMr1xurTNP9hMxVNkEVDadWCAiZdUkPVjhRa6",
  "key16": "2HyhRCixtiq4SDnzypmRkpHsnosTB3EYvN4QfkAsxMrQafopA1vCouUqBAwBovdUyYbfgCJbp5CwH367GqN2fin9",
  "key17": "7y35xfkMJvEaHHGvy8n9roxQA7N7SYgufFBhZU2H3jtWMC2DGyEA7mNijNfyQhABTgpacnjc64MUJaEE8L8U8cs",
  "key18": "4WH7MDxnmpx1yCiU6h6BxTAc2fweLE5v62z4Zp7RopN4zqMBRoF1uhx9MTzWYYcWteDRty1wkWV9mHHhAWKQAish",
  "key19": "2DT2H3Kgk6CuwTNCBkZ31wJV1nry1HKvRVvkRRPYgJk2BXBydDe1goPx1YwS3Nj2K3ZFdttMqbYdQps61iztmaBb",
  "key20": "YK9G74tP43saux7Ar7Y1ehS1rTDdhFtTL9bnCPWs7UQY1nUQiPvPPfxgkxK6sgRCQt56CxmB3QHqTChn11EuKGQ",
  "key21": "2EhwPok226GwoDjY6Eram2XmykAF2fWZNSmN7AnAebeaKU8KG5YnW14UrDvGistdHr7dHg1R3w4MVJWQnAK28oTq",
  "key22": "4c2G3axqeXNtDk87xEMyAePNgo6qHNEwnnfXbd6sAgYemdLMUYXz5bxYh6PsaSjhTYWWiVtEokZBuUY5r4u7Z6Ga",
  "key23": "2NSCYW22YXmBoy5SRqKUrDi75YcxA5uNdzRJsabckq5ANdETN5pwd5kWA8rLj4HEcUun7ByHZQ116BAddEFuFfm8",
  "key24": "4L929XHCXv5jYfm3DNcptPSLoizMPnhPsnz7B5UWV8f2HhiSm7iz5LpLm3kE7FuTTeKaZFpHDWfGB1xYcA3iNh2G",
  "key25": "4m7ddxrdCpv7T2kUMXfnaWvZPYvRBpZvmqKwgpFGB5FRAbhHGLCXJwG3YoYwrgF1mrURatvDNRdEvUYUQfMXFwzY"
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
