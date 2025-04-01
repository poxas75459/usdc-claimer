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
    "yk1BHnHbcynDm5gg6KSiTXA7NPKGNgY6FZxu6sPB6s8gVVCJT97Cb3Jt3oG2FE9bdEkFBQAsTrfLNnETb2tT82X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GrCjVTq6QgBm6xvCfVydc5BbVkftLhbQxeAuPX1UKgc6TbruYy1df1fwaVe4K2H1tqQigZUrJaASvHCYA7odskg",
  "key1": "KYnhhXjMwVuhPoVviUjKaaJHJik1HbXh5MKGsXnGXoJ6Jsucd1zuDbAH5iYSsp1v3si7HrAAkG6oZBAoevdtEiJ",
  "key2": "4i1SNQescXYwzkSPC6KAEHrF1TATZAgUNUc5wTh8oAAnTMiuqSvDALkXNtkLeirR5E9gVCJ2Avy9fcA9TGL6T3ra",
  "key3": "4RdVpu4q1f98Pnk2Awi6bAMq26UttMVv4XFUd7doDWHBb8K9grEMQ8sfwmXD6xHUMKmuLx5A7XistZ3kyAW1QCJz",
  "key4": "36XQGEGnjNyjsuVYNtxKoSPG7UjoPSRzkuKARQp4nxgE2edjqvHstw1CKNCkmfYwKrhHrL74W37Ffn32ZzQ1k6nM",
  "key5": "d3C9Cbz25qe2gthWRSaE8B2RjL568jhbxqpSgTXesvTvVhPW1eKeCfVYSkt2e82uyEYaVLVs59Qn9eDdDZ9K16M",
  "key6": "39zJLJxHEgcNQXdoJLVjXD2d68Y8WvYoKk8DTSLBadfvVGdeCNrv563yLKVLzzYdxcu69tmQZGBDrySz7rV1oq1S",
  "key7": "2ncbsHcDJUWn2rFCCDiSrqQs8nZPuC5W8mgRzLbbwnLLWyhsWubB8GiymwV3AebK5KfFEAmZJCn9QPvHizvy3Tab",
  "key8": "4hqTAqX5CWwvj9cYxYodRJLErKGS2tA9SYTkzobTHgAGzBEtRToMVCcU89YMVXqZ3NXjooybm1RLm97Luy8gb9f6",
  "key9": "5Jd4skRbQEiDkCGXVucsuzTLaJJ1TpsiZAJTRWzoCKZ8KTxwMmEJPbXti9AebFTsbmNabT6ZNCAXyeiHZy4gon4G",
  "key10": "43Fu8chTkZ9LWNsZjT5oQcmh6nhFdxDQS7TEkE3YVXWZLw8XMTKvKP9y5WF7pQ5W7FRoNCDzJqVGpBWLb7zc4hMF",
  "key11": "3WQQzV7TDG7L7pKHcUpmF5GCZeEuJzkGf49bGDLQiQJYgGRbEivNgmruBU7yzV7WHKLKbyyC9n2aYHsN8GN7cxfm",
  "key12": "23vzy8RonfHk4dRfxV7ypn8iJmcdkbRnp7Ya9vJQ7f46QskB2ehBrYMLYdtQWgKS1vxW3MFNva5MwVXS6DfsknuZ",
  "key13": "55XFpp933RSDCyPvvvmjwvHrc1zvasEm34yh7hwikjsuXCnYknMh4EFLdTaxibHFTTSJon9cbazNxD3xBmnKadoS",
  "key14": "5QRyzT6oRqHbQSerUCS68aVgPAd6egp4WGj1LTNkaUFFK4sHUUUxeyAusidgjaeRMARVy2gNYMjeGXouVwoSNRyd",
  "key15": "4mVp4fwC2r25iA7r66sf8TqmEGUK5pmktttebZuP3CPrh3L3jaJBxnRs5YndiPBGUaibc4w4J1yNmTkRQsyzZJtS",
  "key16": "4uTLHLtXoC5X6jJ2p9NYzk3oifeexaBNWbaRA4umGr6TRwnGJ881xMTjsJbMhNfTTHwsvka24UbLex7C8ZjTvWhA",
  "key17": "2dYMqhPk4PCYVnvsXxuGzhX4q6NqZdYbtCqHkoBCpbHLDUkpfHKwRtKP5GSAtFwSdZxuxx3YGAwmZhK1LRczcykb",
  "key18": "Px1aMcKGHy3PJpdUFJU1Qtg11UiBTgbHUDG2AUotEmLsfWWNQAJg5vp3aszdVquB4eGG3o8grhhRyz691xXBywZ",
  "key19": "5qL2D5GRF6BZg5mUZH2GPE9Yf7CADEhudgt6cSeGLbQu35ycJyTw9tW1jjZbRhNcp98tvtzKWacQK9UfRHM4SqUr",
  "key20": "2YJBimJgEDxMjK9vczvae1FnXh5ZcBECLjyeiAML7iSBzE56zqF11VMnuHxS3qt4LDCthdnqxQrCs77J5iq3AWmH",
  "key21": "b6femebZWWoXmbwFHRGvepWFCv4up4uR96M3e4KX8L7527BDASYxJJawry2iTY1xR6vgy6KiHeQZyBbYnuacYx9",
  "key22": "3ckUSiZdonkULZapQCHEN7nZgPqwtJ55QkECdW2Ki7PnvZEUpKK5CmcY51cwcFGgHfE3ceFbFtCzCNmMwvym29fn",
  "key23": "qFCJqw9wi32jWq1pvPGK6FEGYFauzjXFDWyPSThsEQMKrgcFiTxvqqQP6MT4mcmVBiy8PiDN3b5heqHPBx8sr3E",
  "key24": "5m5rVoH5y1fyn13JTjHXssFd5JbaWu2rN8hANHE8YrU2jaAXd5wKTqdcorG9p1imbY6WF2APvPWLjz4XvRq1HNRr",
  "key25": "2uFc8GKYmHYRk1vQZaRZXkJ324RBEQQ6ZqHNrt4sQHbErG5bFhtvG3Pp7s1hiWqdKxQY6Qz7ddwRHRQcunTDcMEW"
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
