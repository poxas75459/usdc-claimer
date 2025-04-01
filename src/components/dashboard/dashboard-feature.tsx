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
    "2NoBY9HW145KMzu8N7QoJEJ8aDwMfrspnuEhL4pFY893krgGfoFau96QkJ9tv7Jw2ELWyN53T5Ced4nqNTVafA4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSbsgcSjN3fMrSw5j5QTqZN8ph2fFyKSq6ooC4jjirtGzZ4i9MBeqXXXo2XPiA8GnwkaDbaQ27LH3t9sitTNfiB",
  "key1": "1QbQhfCAGG4GpHzsmRkvsc3Fhhh7SNn7XicxLbMjBhXoNtVEyhnZ9CA79hra5wYVq4Q4etkGNL7tdhQAU6z1Yrq",
  "key2": "2c2J5gjNNfb715woc6iBraQJdXWKAcvFh4gzw7PaM5Fifqp2F6qJHAkPP6smazVS5XPdSpC4nj7PHEW2jyqZ8vTF",
  "key3": "2T5TJzBdpm9TN8UTT6iUL6GY3nThFkqyKPTZkucwSUXjcHiwhMtdpRA3d69NUgh8wndQ27vTP8NiHpWzbHunc2wg",
  "key4": "4KceLbaZ3C2Rtosf1LNt8eQWvx8qSVfpTQ8efMLMtQtaUo11qbTQXfuWQyjHJ8v5kfxhoPssvxFBy8bzxRYmYMHt",
  "key5": "3F7eLUkZvgTob3W36y88zgsRRtUMwqPCtP27Efwasdo84ygn8iTbzvgkRQg656KePYo2wc37PBWUJqjkAZdygFtb",
  "key6": "3jwo18QQPin6TTeyKMdJP5uMqwuf9sQAbYNFb47J1VzVkKAzmoLFhGmiN7rdz9VeGGjkStv6MuyhMxBnu23GDBEW",
  "key7": "449rk62DwSfHz5HxHcnWUGH7TcSDtNags437HCevGyHxvZh9yqB3NiZehTGm7AuCE44o9uxPZLeR6dibP6ubmunh",
  "key8": "4kyCgFQz4gAAT731F3YkAkNGPvSeRdjSM1aSW8yVZXu2oSp1QWY7sMtHXr8EoMwZc1Vgpv6RSzDjuyNSGeVbqBeB",
  "key9": "4L6AAMp4ZiqsLE6TLVvyy562mS7RtwWn8weHSXxkn1fciPZWBN6BmgzixBRW6PkhWiY85EDxaXYakyaj9kBf1vvt",
  "key10": "3VnCpjSYpEULrdX5PM2JZSzSB2pzSjV5YWieheokw7xt3BemmkBN2E9tphBim2XHnbjVwFjjW5Wc1ATQbH3mpMCF",
  "key11": "2BXHs4y2RCC4z4uu4dJKQsEjfUsC8sUr68C1YL4pCGTFARqsqJdkPQk2J1Ec96uSzFLsNSLCNmikUA4KjQWrjFua",
  "key12": "2qkkt6UFa1f3636LrsdB6XDs5SGc8aHy2s2ZiwdA6bDBQMzRb6dFGXCNHiBc7S5am2tV5MhPgZSteCydUM2Buk8Q",
  "key13": "4Xezuh6X2uo8CoqFdAqiyEFEdXQyfJQ2cS3rtt5cNrbRdxiX3DJ6VZEgmJ5GGq5bPFakPSLFXjDuoV3wbwhrNCwZ",
  "key14": "5tngJDFUdzAYfNas47n7A1UJWLKmCxKS2ESVLPPgzpCjyKVhns15izM7ycPmnYrNxFpCv4S8E3mTwhH15VLMnLGc",
  "key15": "skk35Jbuap9khFko3pNE2zJpzjRVU34axmL4LaMZyUqD62AmJSyLuFw5j58TSmgjiqopRBJvD1Vy4mvwXqEQajx",
  "key16": "2FHKHGwaHzPshBZ92hwftzqkEE17JDW6NCpvc973Hw9ncfpAHp7S5jeGaG6cSmXQq63DZuctEQ26gutzsQjsjELG",
  "key17": "5mRtgccshEbVvJQL2THPCvp9jgeeHFb72ZNDtaMp3U5E9jt2ML5ffxuNfkJwGLr7trxkn6Amz9WoZ76ab3e2Uujr",
  "key18": "5r5cD5hSkiFHifXwURjrpRwBM2tT46WL26AAqZLMgJgqko7zkVXeSbUsPzhNPLezRi8MbxG32LEX1DR99rTWpyAp",
  "key19": "3zU9p8dCb24uLchT3XnunDoupAdAuydfQo3AWaAjRQfoMhkJ3sAMmGmG7q6miRfsPZCN3mdkEygHkDKs2SKUaUBd",
  "key20": "4XZGcybhLWBPKLq8pKDqr9pnNpC7CtyEpmsL9fbs9HmL31M123Z4AA8VNHt2fm8n2KhEwShAaxfW5bTcaSrCLa9q",
  "key21": "2PPGW8ToC8KDvJzKeEWNnCcJqZnpGTFGqWqUMYP6SEguGim8aqy8iffSL4X9aMUmPvu9x7GkiwAbeGFfgKNKbiUi",
  "key22": "61HTuYRrpMxNmpAwVKSukGXFr3cTRcQCBu17fvh9hwQfoBxUikXwNQQEFsX7RqgDUPgDjbjobUQM6eqoUf6peE6v",
  "key23": "2bQzNZESQtVAVvUtzJwzDkwgukWv9TVJn6yz4Uff8Z4pzeoH9E39kax9LhHZGhcg7RyJ8beCZTfmLtuS2xo6Rz8c",
  "key24": "2YJ73CT2nqKc3VibaxT2FWe6SdigXrFWUJ5fZweg2KPZoTSfGzqZ3d4AHdcDqxADN3JRB4s2tTnuzSRSyekaQAxi",
  "key25": "2pALmNcQdXL5T5xz3qoVgmsyxTjXZ1boG7s7ts5EeELNVihP5N5wKQCtf6z2FaC6Z4a5m9X6T28ymnKHbb4eHphT",
  "key26": "4J59VoaphkxtKSmvKPAjkQ16dE4gncac4VqVkaQx19wtiMEpCF3ZkUfMzXAZVHhMkQEBfxV15Xh6wTTJYeqK8mkC",
  "key27": "3YSN35zeDv8J1nTq439yjMsnmSza1UpuEbP7mobveQC2AKgGC9G4Dw3TqqytuWXjVfSvNuxaRFvKRBMy61MkwV1Q",
  "key28": "2e49kFqs9DASLpnrEznAC35ys3Xh4dwvhkVA1r2oc2McQe4v4q5DiZgJYEKYksHdfgczCJutviwH9putfwoD1Fu1"
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
