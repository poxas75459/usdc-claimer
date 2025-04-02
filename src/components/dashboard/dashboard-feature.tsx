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
    "4qx9zieQsU9numrUBCN4BVaNfPFkrJ4yXhs8E4tZDWSK8vMfoEezX1rUuFC6r1BjtRFFgRNZJc1eZ22GRZT2nCjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4gyrCiMu4NLLnty8XKWjHvbfHxKGEKs6ETWWS5xPzpG54eD2Enn3hr7KVHirw8UoNLbT6qYRUTaFej6JqZG8Fh",
  "key1": "3NQ1TmVCfCsXGounFXSgN5HVb8YQaGfSZgpQEMkhAoFVaoeAPgQASeeJHPi2X336CyeTgDCjh8rRXLXWZn4KWoE7",
  "key2": "27tza2aGvaP5RcVKjGAWHGB9uVNbzU4FNAb7BY33ZzuMCbWtMRXQpwmvL1y65k5vYcZqRVkXWQd2Q3utsJmK4SG9",
  "key3": "55hNpkxaThATKutPdHAUKGZuWhkfqV7EieF8D6pKqbYTyXZXqPzuhWQm1x5rRMqVZxg3dgBT6vk7724qfdonifiX",
  "key4": "2JdhiaqULSiHFaKvVdm5KPc9jAuEiZZnhWdFjqrk443d3zNPmmNHgmwtXGrqsXmnRdbwNqneGRDGRyFCFFw4SBgU",
  "key5": "5LwLd9x9Hzyxy1JkQGDmSz7mV4LiH8XKzFdVtEhG13hPaHSsjXae2sBocvERUZ1UPLoM6p2oZEyhXGtMPogvXVjv",
  "key6": "5LjAP9zZivgY15W3tXXGPwinXgrKkAeyMcHcxHdHtS5yBFqHpkHNQgjDEQrJq8UkktxpDReMKNawJYnD9onGgqrZ",
  "key7": "5Cgpf5qU4HnWPsJQ72kDX8nn1VZ1kbJvZJDpruhLs8izeCz441d6zV5KfG8RGpCt1MTBSdwoY6SPs1s9saDgT1nH",
  "key8": "2psHQ4ENmRqB6PVurswdrt5N16jbBMkPLtKxxEyAVoUPocJ7T7sQZVk4MtQthfJxz1mpyXv3YXggRM1pWE8bSSSV",
  "key9": "RgUiZgs5RcSBAGshmBJwAwpay3riQzJtNzfMz6Ebn6RP31cPqsjohZVGDYa3SRe8nG14qiDR283jS7xFJWwYTgW",
  "key10": "MsZprbV6bhyrdqRNMJN31fkCnajJoqmxE3K4C9eQAUUAShZ7D3kXgYXFkrvXow4MsmcrcR9DQisRfHoYTADwo7D",
  "key11": "24gd3JEqj9otZ7yXZW7KQSFNm5JRrUSwKhZVbVzErhK9WENqbN4ag9oxmfhdP2FfZquFtAwrsuDN74Frgg7qRt6Z",
  "key12": "2CPJdirEfvkp5NxXLHrkM4kL9awEcEPQvUAUBEDWiYGZarst9d4LJNArHgcTXEVJpmZKZU5BYWsHmtWMw4vPf3Ki",
  "key13": "2n93GcQ14bguMxGLa7CJZCjtkEi6w4rgXtNQHUc1HsNjXW5BEspHEKbRSrVjeGzLZDYirctfmoNtNyne2f2R2pwF",
  "key14": "5bPS5mhGYU6rnZ8QQCEdLtBoodJ5nThEhWLkZx7RD6unRizvLxE1dxaQ82T68ubgaXQ5YciiXEVL8SGjhtdLtdcL",
  "key15": "61HLfLfxn1EJYF79LSTNqpBJUxuXgfKTBmTTjV8XQXhXgvBifnRS8cNUszHsBshetEd18sQrrfSrsWzK6RuaccHB",
  "key16": "52qAtDxpvoVP6APnzLB9FMZMBkooP9KxjAnAP5kKGuKcHbF6QtPniSonRmkJFznWF8RgjqnyybwydeBJv4xqHdu4",
  "key17": "26K15cPnG328YD3hoJDecDeBMgAUDJk7bhw8pZpra9gZjXiKEq4Era2jd6hcGYy5vK9MvbUCXtoRWe8gpRTHv6wK",
  "key18": "3xTmoEgQq3tsDL2u1Jv4vAVUqymayx9CXUddRCjER9jYzK9CHGz27JhRjRygmbSdgDWWPz4oYQVzb86bgxarqoLi",
  "key19": "2QrbqM89gjBGZisBHRVuSPtioipS5mPBKYffymjon11PDLuAzpYTLpXhxXnfX31bBSVc9GFxzE791k5aQXi1SuBM",
  "key20": "4dZJxpKyTTh5RpS4n2GxvjU8gDL1ajUg3xz792qkjjeoeTQYZfuH5nth3RWos7cGw5Bqh2yQeBdyd6B8FBDd6S9Z",
  "key21": "2Nx6Ne5kE6CupvkmPkS72FDQxhQvSG6zxDQoU7JrC5dDaD1siCfN41nHgnY4XeTusXEfnk1oN6SfWqnDATjuFUrZ",
  "key22": "4pa8ZtvswxYxgTBdeDcDENdL3soXQYHGw9bPnr1qR2JbjSfFRaBbnCKtdKb69bQj37yDoPr4BYCGS6hGd7d3JFJx",
  "key23": "ewRogWpTynKsvwWfBas6Ds4FjumBZho8WkbgVJ3gAXMvvjfLwqpJBKeMLrKzZYkAq9yLBuxs22ugNM235WDTQhV",
  "key24": "sjSUY6BprPDGBrG47gRjj1PNFsfTizsGNb6PnmmzQjDhzXPGQwhB2REN62PwXA8NsBfcGqsAwxAov1tHhsRgcFk",
  "key25": "4E7gEYcCpEmKYAYsP9LcvVBPztwCwvkfHteXZFpJoFwcDHgXHUyuVqghCdbnAXPGp1WuRasW9eCLor3K4tsehMch",
  "key26": "2QrLyCbNoSKCa88YjuJxphvB84gA7odD9q4a85UBjjwE1W1LGZdDXZPBMKwSn9kQrN7fiPhaRfTNUc88u3ke25gn",
  "key27": "5bCHKPtmSmWRDHkhNrSeQhtVcsVi614PxAEjFtBnhEfwuVk6uXXs4XmH1DbQSoS6tiH4RH5pMrjFkt91evPpoF6u",
  "key28": "4HQ2eNGhTLqXtTwK2qsAQmWXTdJgaSH1ayZyCWfFJ6suhag31yLEuVmDRMTQAEm6w498iFtgzv9BDLmSViRKhDCU",
  "key29": "3xx57GztC9yxxo18TUBrG9wkGhFDBZ45vPHhtFA3cpqbPBFewLyKY7tBNQxBcTsZoZfNfCEJV5Wwt4BNatY36xxB",
  "key30": "6RFcCSDipDMpWEmUexxem7RtEZ9oW8o8BdpWEHtZ6DKHpj8twV1FhBtgLovHP8mP4ac6kG6SqSx3gS1DVRa8kZY",
  "key31": "41TsG225h4eoiiypZFjBw7Pa9YZ9gh93j9ai92J96ZVHfE4hXc1mzjcGG2eqmgu7RVEvoNGWdjWbLHNDD4KkAzou",
  "key32": "37s4FkrYsneRc6ei52Lf952j9y1mdX8gwMuACSo15PDfb5ArUMp9o5qSr6pLM6vjnGpHqTpDkWoGqdDsMRWBnx73",
  "key33": "YZcYP4AQn5V7RHPAjMpUoYsbSkWudGUVN9Br7SgLnsGis35NevFCvNdQrqgxnvmQSQxQs3VkFV6wkNfxWBHomsF",
  "key34": "oAJCZ7U5Z99TP4Qk3dTYuZQy5WvZTdKtP7wJ2FvAuvdKDQWgvBVcX3mZ33XAvrcobkxt6W7xhVHDxLLKW1HGo1G",
  "key35": "61SPEtD14wz7ZNBWr4NjDMjBpZJsNppxj4NTH8yREdyvjHzvzbY6JN13c21u7US9CzVYmbxg2vmZeq1syVwcbq9D"
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
