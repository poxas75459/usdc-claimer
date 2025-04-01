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
    "3ayaviYA4nidwELE6VXTyp5ubNqwg7AcppjZ9WVAfAgbfGUB2zTxsLXQQ1sAR15vZ2PEgTPhjGE1qNGCfx5yGkoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38r7fRxb72f9FcJswP8ShkTR8hfLiDF195aTneBGKgWQWM77Jdh4QjbLmBN3qxygMcj1EdiSJgU1NnbGeDzyeDYX",
  "key1": "YCgo72V9Y1jqXydw4nH7QuTSFeEprJTQx9qEGkDW8hLYKYbHUjfrN7meP3Zk6vvXWrYVt3fCTQ4BNiwAi81jVVn",
  "key2": "3e6c2LkKjgtqjF6hvVdScJNspFGfK74XoS1vRpxDMmMzheHFhEcbM2KhBnkesJLYvuHDjGKtGpJmg2DFkYjRWaPN",
  "key3": "2X1WarMtCkQMTrm3pxBxzK2yv1NBzydivNKQtDskZ8vdhA44WQXxZEAdLtn3zNdWGDUa5CiackWCQzPh7vK27vDB",
  "key4": "3RSrBJFvEUhZimDe9CjhgM8T8qWB5ZFNrmfi5SMDubeWagVdcS7n8WTVK8SWWmGX3Q1VrgJTay6JJ7tzBd99cLLJ",
  "key5": "5LhTLKibzbokx6B9ESHxXkaVXSfbQ7WzpzttGxW2vQGdENvKU2eRpKp5GgsBmDAaHwVX5rT3HQrs8E3EFpGhXKQ",
  "key6": "2tvnLZ6f5PzqqBgY3CzwtJEH2zqHvS1YjJPGk2AU3x3B6ova4vQmKr3ULj6Vjjt2vJbB9UcPazZyTb74ehJ8wEfE",
  "key7": "468hB7AptPxgNwguUCKbmuFPai6deiNRPoGdN1qxbyfCJ9u2aiHPWxkSksxYDxR1t4UvLDAoCwgR6PY93AxZdQKw",
  "key8": "2rAAyuTYjBTFJQP8xnniwiawsAEueGoCbQTqDXPPy2RANgn58t1KSyUpTYWBEDCTmHsLbD42LGpwfbpTBpGC8KzQ",
  "key9": "3g1MS4TGE97fTb6jdHXgUX8D9Kxx3CaNWHVyNC1Zif4SEbVKL17wazC8m51zNuiufykcv19SWneFxAyBnTJZfNbc",
  "key10": "4itGFgkUe8va3kH88UUgFcrnTpRbmpH18qY8Pah4A7JujASGMgMaXP9e7ScBvxDqFJ5UHmWvnsXsTFKwHhCtkSMC",
  "key11": "2xjB8vNqTWfyRfCW5qf7cCALSZSN3hgHSCrZVogBycoFtmuKw7UZ6fjSwATvdG6KoCVHvQiDsYX9iaoQ3Jq2ssEv",
  "key12": "AwNeiKNyB8qfLj9UciKvf7CPzwMo9EmRosc5Nmd1veU7ggVAzZdU3qE9Gppfb5U9YvH2iEyJnomi3HjBzK3dvxX",
  "key13": "4Spo1z6ALAEEkGLTE7PNXxUvaQeSSGkffMwASZnC9rYLAG8vdWFuVQdYzydDt9mpXxrPygFSMALtra6jyZJ25FRU",
  "key14": "5MwDpWVef1W45WgU2fHcxrHz21rB6keGruENo3k5d56gzh2xbEZuwU4E4fS2HvZieXdeY1pEAiHvixkk9m84iRvr",
  "key15": "4Y52GTJiUXxrDQp8zVkY8jAKjfyChnjc4kbRYvWNR9jmxqXWMkhVep6BEz462p8b748CQfEHPVT8TjxdQ55bQUYF",
  "key16": "2Ui5Yjy4vAFGGJviwAwFjrk4SMUjrnZVZgX9x1qY8KnkZSif4vHG6jVVC6qMMsiA89RTD5qqd37CJs8tza4EXkJW",
  "key17": "2Gy5yxyuETYAhdyk23HN2AUjLxAH19gNuSyCHDQgABVTSauPei18q2ddBF6F5kVPwRobYTGkTsecfw1H5QjwMqPz",
  "key18": "ayKHiV8X58qEhtwAGNG36kX3NbqSbYVM9SzTWJF1Du6jGDLowLB4nQAzmETZGXmYvAP1M1JJURqaZExcYLWAQQa",
  "key19": "2XBRtrgHrjuT8vMxRS91tj4SBsdNJ5tQeF2N6Dm1U4scGRSvbzXGSTqbH4EipVoGv3smmyC1aT1xFUkjqdnMuF95",
  "key20": "2cb6C1iyzxWqW2b4hmJWVkTRLsZAuG6XroPDwsrvw4WQrm93kzfGxdYUMw43F2r1JaH1fPn12qquyNM8HhwWAui6",
  "key21": "2cWNyNPujgn2ZS2FjVNM7ct9R1ounfKfKTQRj9uqQ5bvnW7tE8kLwqtJzNNND9aLoqAUK3RDHaXGtKwbYWrauRqt",
  "key22": "3BC4XR9RL8nVzUv9keAd9nxC3BQrgKWUvHVHrf4DejKTejmhrtAY3J1y6ZLk3GnctxkE83LKgnoVHZsLDHWi3Zsd",
  "key23": "rZPuQZnS9XSfwdHia2qAAWxCtdMyGJoiifgGDQRJyFaE89WAQtV67Zz4aXjsCqzf6KAtUrFRGkLE5SptoNf2HNT",
  "key24": "3jYDwXugqD5kLcRC5Af95GpR9t9ZCjhRQsukXEWSErqGuVAZYZaYo5zBRGhB3sNELVEi5XgFiTDWLTWysdyspvxy",
  "key25": "4gMcQZ2vpDsqXes82uZGBkZYZwyryuUVYzV6T2yPqKAM98YLttFx9RiMqC91qBJgghu8KWf4RPyzbG9dhjeooo8r",
  "key26": "5rDbwGvqKA2vMvJDqJxpP4xhZrWCsHkymkK3WD1vGgTXmsMz2ZsG9yLfmVzjvWCVXu2bpY5ejAtVsbg8E6Pw67Ec"
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
