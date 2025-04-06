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
    "3Q5CiEVqAAHsPGHvovDKYfu7YAMdi6T5LLJ13FP3ebydnhQUijRrNcPEwFwshPKCpicXRAPgfvqzqCatNVJkf45q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rJFR93PbVxyjdk2TnbipFSoVwrg5qdRL8JkPHDyDbzeKxqf4ZzFY9eZHHuAuhuqpmWMsynmZWPojemqWfQvSkKK",
  "key1": "3oDq25Smrt5re9ZwTu6ySSvMpp8m3dWR3UtJqZcXyWBwpNYcCh3izbxCjXngLtoVJRCSY4sA9efzPn5SDeHhCEKR",
  "key2": "J9PiNznaQTQFkb9rsTqsT64Q8xgRgHpZadonqjHoE1jmfqBTSHGCy4t5YFtcqf7saEoZfJP3mnNKbQ8hELF6MFT",
  "key3": "2QzHy6w1nHekax7uGe2Q5CtQ7cxmY8kQKtMNw2qniP53ag5hRWKY2HbB4dGuQuKxnBVEa3D4QfJ74am43C7JxCU3",
  "key4": "stazPnM6DhGhWjXFhXxRVRKcSZC9MwD9aoPPt8F21Bzh7g31hPNTubkgbr6CB9rZQqMcqnRsgcN9vZcrg43sgzN",
  "key5": "3TFKind5nBQe6jUYNKMRiFGghWypduDjnQcYceSaT6MbAe9SfvfP6deYMZNsPjTdkQrPvZWz3WFD6CjYLpJrtKkJ",
  "key6": "4Wu9Sk9b63cQGvB14qAiQJgSqJ3DbmaEz4FFVWJFu47Nn9RgC2HWA2FMi4XiGdjGiVWxSdbDatkvxNPegVEbRV9c",
  "key7": "3NuQwsxk5YH1JBr3JyHThHRgxg7KhF8E3XYHW9LsNxGeCNcoXdC3S5n27CkJY8VyLYHXK1kqYxBFgw3m9wkP1sWq",
  "key8": "qJt67f2Em5CFPSXMExf5gYRqq5E1cp2KM4CXGM8JSwgQ9czu9bjCLZaVsPeYjEKephUirncCib6u7big6N8szZq",
  "key9": "3xU4e2JSp8UEcoir7Nn6b14nijyb8MTuwnC7V4metFtcZwfJSiAgsQxfP9Mt9hvR1C7TpRskdSCWsAPG78MozMVr",
  "key10": "5okN4v3sn6JPv1nw3CtLBqHJSYLDHE1twzeMyfZbAP3sgWSTqdMBMwh53WRs6YMcWCpjN5tXAwPAu1BqvZc8d1f5",
  "key11": "3XWtfKR6yBirApwW49V5WkBmNhDeBTLHhnWQq2TKSgRyxDQzKRLrztHvYdX65GRzDKbtNYSdPdH1zGwpqjgSE6QT",
  "key12": "3dWoertks2GD3yP6GcMR8hhCQqect5UWLx6Jswhr79YkftHtKRLU7gsKaXitifuiBGPfWowFjmXAHJFnN5PJ21Et",
  "key13": "5zsBPJcstyTG61VSa3kzQx6buQWrxpq4KLxenLBqmSFvQePnNVaPqNsQkw3mSWARrHrvzuk6A6a2uHVL3u6Shtdj",
  "key14": "4N6X8mazRzBHBjzjbTARpcGNC65Nmt5uxrchUJ4eCMTbBQLNMwKAQoDDYxrpsE3GmpJCkkoZ5eJfENU1xnq57pqZ",
  "key15": "57qBWKvMXN8QJwAXetgC86CQsULSPm5C3iJ1WLVZnkSrd1ADsa8BQcA68PeJL66wAVbbxoWDawkAzyFZ4MScCXkM",
  "key16": "MSmoQzoUYF9vMUQoYnBwRMagfsreAWnErHzJ21fu36WkfvjaYa73dkPPEWmCgqoMaDiCt9cmwcAZq3MHREhKZ54",
  "key17": "4GgatEQMLf7j9sPELWfUuBHjYrngmUV4k3C2JawRpGdtg3bJkDeSuKYyBMxovpiyWdKagWnLzt4HmdkgMDoWLzBy",
  "key18": "563NbmEi8ZV2wNZQefpk76iq8fjPzkkQ91k2nSGmnjAa7LftCkJ89niTYV98WWoakU7KHUGh7mPBwREnvBJMwHyi",
  "key19": "2zwTqsxHxjPfLgnnXtNbSoVjh3AQ1EYZGxFLvPECgMVWZcdKPtWsRiUQzvjSq8vZtp1T94y8jx2Hm94DmzAnrU83",
  "key20": "4DuENHtowDB75TDVLhQoucNMuj22wUL1VCFmDnKZyK8yQ91AgRBizZbxXpnWKK32KhYg3N96Dg9Zj6Xz96566y2f",
  "key21": "4hDMLrVRXneMDVEXVHhBN5GjZ1Ae7y4Gey2yMD5U8aj25WtGYQupigVgaLeTVLLiHsFLh2sfK52mZXH1cSnTMCCi",
  "key22": "3Sm1XFXsX7eaWeCG4vrDpPqaePXXWozDYXQP5KvE4YiwQ8zcNRPhTNYekxBAHK39LCsewMSS7UZKKnnVc1zgxmrd",
  "key23": "2u4YtxutRbLouZ9FxQL3viTaGBa9TnyctPFnm1ZaKkEp2UWWGsRKSssWU6X71SNcu5tDQMjG4YwX7NR7SyviVM1V",
  "key24": "4t61CY6FjbPxofm9uf9qCGXpF8pGGG3zeabfnDztV1weTeFUmnPUwvFDnCTK6t8JF4D7pP8zvVisMHFtCYgwSiBd",
  "key25": "5VoiD8ipnAFWJs9NPFEsjcTax3QzzoWxD6HEVdA8LUaSMMrifaUoywrQRKvB9y1MYdpPzRv9aHab2g5sDECuPbXr",
  "key26": "2o5GvheNWDM7MX5eVZmvtRc5hpbAEDYMmf6v4bQpEuSetDnGQHbDJLzZaZ2ZENmZwjfU7Mynjhjn5rFcRZSHPvyj",
  "key27": "5WEU33yaWxhZcQh571EDYh4DtsT9vbyfjd5Gr8Rz9DjFGu4k3TsSdwCXVGnCpDzkivjsmnPW1vSXmLkzw67h7V7r",
  "key28": "4GA2Mp7FDzp8zmneVLs7QmCR62DpjYrsyczNUXaksahzea6ZaQpoafv6wHduSfBZzgWDYUKhNP9XR7mSBbJEqhTJ",
  "key29": "4RoxjaiymCFGmrfF8JzXJaoeUq9GfbMRH24PsL4KvBqhSNUvETwudEkK7KfWaxVpU6fGzYQ2CsNouMo5NamAyH98",
  "key30": "65sFznT51u6Cp2D7A6sU5PTpBnBxprxTU2F99t6uDSDgnePRBGYUeoNKMGSvAQxbi7cb4Nu2VLJr31BLaAtW83i5",
  "key31": "2dH7W2HuLWnW5Cz1cMvqPEFkrZcZdHHW6RjCh4zZbTBrwzeZSYVL5maG8Ku81BZxxY294E79Myf5dXGRopVBCpnz",
  "key32": "dVonr7Mb64WzgXc7PVkusgsgoUAGGWyhDKquLZydBS9FXE5Uo8uA6EQ6NWodB7NASrjiP7K9fMwwNVQpPAsXfbe",
  "key33": "29mrjSPaKaLjoftpovk3XBhVLGnLkiUJeMgpcF5N79kQSspSffQs6R3mvSMUwF91rq5z3ReohfBdM6CDTQBGfEvX",
  "key34": "9QynR6uDP1o788FZENGCXyvHXdrhcsM8Cq15MKYyfmzpzCwwcH3tYVxzJjoaZd7WBE9vbNx3BsSCfKrhVUNDwKr",
  "key35": "mVgEo1wwCJ3ou8bLyCs96sZzukUsp5UYP6m7fG6GfR1xXEgFvrmFdacbSM1Bqo63BQEYG7q6TjrW3kopQpB9JQ4",
  "key36": "2W4ud5Lux3XMQS61t5eqgWnV4opb5yt5QW3vcAFJP8jeZZs5dUvWtMp4TUSdUPF6v2TjjqckwgYKbDFVQGFp2BMS",
  "key37": "61GhnaBRWds7wE1U4syZqtuQWWDm58KwffNpLRXaA5RwS791bxFXSRbNYGSMt4ZMTh6fdku85bAYfpVvXK94XB62"
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
