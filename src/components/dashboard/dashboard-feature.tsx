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
    "4st3iWT1v4vsYEuU6L6oRiRitpBFBSh76XcL9g3nSgqh9jBNeEAEXJ9XWaJDaZvNTPv5jFF1U8tDiqDa4ooK9pWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQRyJ3amBo76VWGkA8XWVnaWmcdZbnBX2jDtyStFfZh4RrfJsb4x2HBhueEApVfi68LvKALiCJMCcA9r2LvmYmR",
  "key1": "4pqULmMC8ef8GQEgBmnJPrr2mSbB1qkFLFEpTpM7LTex7BepU33DprtBNGM43cLg4oJn3m6dC7A3bKaYkCjtfJf3",
  "key2": "3Uk5HP9iNMKa68BDn73DRDWyxYeHxmQhZDAVTu6LJv6FDHTMaGJCJHejp7TVoQwLaKq1f1ucX8uGXCJ1yfBp51tg",
  "key3": "5LRfm954A5bAQajLWCFxdvyFQBsciExi7AkB4U637Cn5x2va2Vei6TfJ94LcZ1UoHQ1CdsFQyBYGkaJztHMVuMHW",
  "key4": "4KgTBF1nqKi5D6SCqRtTqi4Qr6fXT3W28n6NFxfSyaNMqfBxfuiFqPegBdD1eSv6C6R9wfRsJSuXZW442HxMvrd3",
  "key5": "4obQBvf5QTRDq2qCtK4yTPGBtS3sEmfFeUHtsgr27owJvV6cqCtK1s7D5cabzdG8PPkFnWoNRBbJKVAntdE2u6Mh",
  "key6": "2jf36RnG6rAofsBh3NQ83mzUwdn13AKJPaKM45vrvHfCDZZ3dL6UJQKQJxHP2f18fezVxcnf2ABCn1r1Ch2YgvSH",
  "key7": "4DCYSTWcsrrD1bqAVPhBiDCyoyZuG3SJg18nkxeg9vyDn1YGd8GSwgZ914aYjyTPbKembLHevLqfiAoSeuvULpWL",
  "key8": "5whJXXhVTCVkLGW9Mh23Jbz3Jr4xpV45oZLiVevpKNF8n1wAp125YUfTPaPwDkptkFrvADUcv1ysez28u942BTA4",
  "key9": "Vn9aFD2VKqvXJJn3LnA6MiB2YReKsVCHLfxyuHchaTjFtah3fPgnrXxbh8d8nCzgUVHs5XCsMxLVgJkq91jkgao",
  "key10": "hQQzSA2TpRt2YJyqtYF1LjbLR3GtxDLPDQZQCTyxh4KHrdSf6cfSNboQZFFMSXbeqJksRnYebBtqLrCqysZJp1M",
  "key11": "43LHgJY41Zp4Y7eUDrxVDeNXPPaahXUHbcQB6JMpiDW73wCXvbsRAzrsTMTaWy1jNiqSwB17jyB2kMH2S5tBK5nP",
  "key12": "LZ4HsZMizxKY9tmUbSAh4ipaCmHrbpN2665Hvs3fSN5jYYXpgBPcRGgmUxMEyxHDhWmWyM8fuaGiczh8hgPZFah",
  "key13": "4peFywoi1QykzhcM3kyag4nTQduNGu5HTzKZm87TA52p6uZ9nec9aNfWhe1YF2UQx7j7UEfu5SMqU72azLmf1fXk",
  "key14": "4aAHbxhTJshWcrXNsBgCosKKQJyeZzfEnrwRYCqdC1XSa5pAMHcAF7S8W2F7BnLHZ1D6Ubk1PecEgA5X5pyYyxpj",
  "key15": "2n6THX2cZa7HXFyznM9sadY1tdYDrqkWgzk7MmrNVSwHcATTkQebaqg3gkYUMmRzqKniPNSCzVws1GSCDdQJ5Y1m",
  "key16": "CeZ4oKSmGiYUD4Fzzb24vCEhuCLkTjWQD9XpppLjSp4JpsyeXqbRZvsMRh4poahAbkHAdNRJDBgifXWbKa8miQj",
  "key17": "4Qjz1JCibKARfQ3XoquLPavnxbxpFERRkVKZnWqnbJ3yhMNzNQoxAEjFqhENwAG168D9Latt44mBnEFaR2koBvmk",
  "key18": "5Lsany9LhFA4XHZzqaJh8hitnFsgcReEyzioMZTmFWCFmMi6PrSXLbB4pmPyC61ySxDdsrgkvLrtU2VGHAefiK4d",
  "key19": "4kKUfdPwBtDSSezQ59jiMguxho3A7ZAf9cHLpnDCvoRwSLEG8ZZ8iQ7bMqJmvEXtT7Z9EGgxcLjmNYF262DFdtPG",
  "key20": "3MNc9u6Mw4wz5AAXHQ9CCXSZb5z2FaXRdqANCAvnzSvSimUL7xMQDiFMfE2wbJ9x5GqHGs5YKP19imc6yKazUnVg",
  "key21": "2yd2px9hTbEFXGfmc5nut64BbscPiLibechHZqsx5HxGAUDu1X1kCqeK8ShGHDdBTwJ8KkNRHrdEXiDLZUjz8XG4",
  "key22": "4YwhK5vqvqHyC6raR4pg86gjjSmLDQAn7Ai1gdTV9LDspxkRBwpgGMFR5pSAvyY8F7nrBspkJ8oJpqbZwvU3JXsU",
  "key23": "4H3g3JjdCPHyFLmcvz4Mshky4K7ChEjZUz72rPC8yhiQL5hpdBfT8Qb57RFDvLRgg8y4wswEE1U7iwXScvD3HQ7j",
  "key24": "3g69QZb8qRkqBfi2ynVQE2FTn5BceVWMsZ8wcCnZmdg7qZvhkqnN89cJAjHvFRiE1mqgVVH7Bdivy5W4o923nHGG",
  "key25": "5oTnxsK2ihxSPDP1z2mDxiNM9rD4ndqo1ijwH3MebMabiXMZDzc796RaQnQ27gD1QmanqCz9AcM48evXm6jbkCCW",
  "key26": "3jZB9xcLqnJwUpyt4tMMQ397CDiXuiGKwjvvQuwbbbXXLHWi1ya15azmebRNKVHoSYgsciFu2ZVUycop2QAwwL5X",
  "key27": "3noxjBBddrPZxqabRfoAG6ohiggWkxumBZShJNiWWUAKESbGiV6aCtQHxm2btoSwSUpXyy7AJGaCbHDDkGXbkCGB",
  "key28": "4zUXmYb5VrhJhNNKhGKfYpnRu36RTbHNJ9BPc75cT2UvQKBTp42AVaQ82Z1eo4k3jdZJsbxKjEQpX3UCLa48CSsj",
  "key29": "4PdwZwE28FEqdNN7M2Ny8DxpV9WvtvGgqc7UgF1b5YdQKJTfqFT6UkVCBJNYTknehJvVQd6FNjChPkGpq9WqAaVe",
  "key30": "4A229Udeao7axnxG4NjepWYHErWbBjoKGsTQKuZtGsR34gjMtV26bqYQEfWr7nQHnEPuvZUJtRuSTSf8hUiPe8PB",
  "key31": "2ZknCdQDMwUjvQMX31knHBpEhtw4LPsbD8BhQ1nh4G7GSgHXfdCBxoJ5NirBWqnLxeU3aaE98EtzBG9rrduNNiZ5",
  "key32": "3ktvp3bKcCsZQmTEDKGBk6zciNouvee47qwaJv9jG8zcSieexSgMq3HXe7X1HL97c3QxW6zNb4md8i3Xj2LH13VR",
  "key33": "2nNWYpnVV1mgoKBwbvdUDHQBWpLAqkEMZeooydtwp4J4k1k6MbNKyWi3J62xBNXEaZ2TqGWoVF79AY67Y1K2k5Na",
  "key34": "2AJGXc47KVwKRzrLMwbNPk5iCsDQthNZBAxiZWS4utLw8r7zp9DhXZnCnecyWhdBBvdewAH5XSAFgAHJ7AwhHiLh",
  "key35": "21891VjUahdQRWzH7XXNHpLgNjmj4YYq7jnGt38aWspYSeJsme3DscEgTugETggufX4Z5Vw4Tw72co9SacPajYgf",
  "key36": "4rb2MLnXL7L7edLbRNcvyjTiCQAnyPyt9vSYPGkvtieerjYf7UAQyNYh8bjA3rD8Mcpq2wbwDrtbsoq1kxzZRXYh",
  "key37": "4TeyVq6DsyfAZ2yLjNHjFnZTDhwacmZebZcgX6uNmV2rhddnrHajxWZoCaF56xUyQqz4987Cy5dZh8B444dmwt3h",
  "key38": "2kETnAENB6De38fuAeG3ZvkVvScBQJgeqdZxNLvvQHmNvmAC2CX1jdJiDvAhAmqzqvZqBpsyipwFtC86YxntUCNh",
  "key39": "2mdK6Jdgn8aGnTFCBQWfiSPSvZ3EcMXXTxREiWvbsHB3EnuwBzSgorW4Ce5psokqp4L98st7AGzSBbNV3E8cDVGm"
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
