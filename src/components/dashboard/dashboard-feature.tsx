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
    "2WmifoUv7jJDmPJCNfQbyNc7B32Sb5DSYgcTQ4UtcN7VaVcPBTjpyYD5etm7DwtxLrocWymXfNibJGFvqycB8esU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HvknNQaRHKU7ZpgFVpzKmGphAkGCKzHD2HMdTnKAGo4rnNKCsBEHMvrosEhfPhSoG74mNKZEAd71quq7RCJqkSj",
  "key1": "5EWvbUKebehTsmzM3LEukKSKovWZDnH22nroFDS7UAiyRb1DVWu9jiRwR599FXTeUwCa2ksLYL7E5XS3EM5DZrZR",
  "key2": "NXTd3BokbxxKa3p7TjbdMTxjPF4H8wuymF4U5jG1sP3FC9QWbDH3tK6uMYZZFtk6tAYWiZyrTYVJGzDaCB5XA7a",
  "key3": "2L8LHgTHkwPdfKD5t9YYUctU64TQtANxDpr8A2LSWMoRBBDQuVhsfsS9zu8oaB5ZCibbvccR8MQfYy4hiA4ePpvy",
  "key4": "aWrrwnqMUUdsrzS8YcyeKMwfQubbedyCmcdobegpi9Xjrfcm3x4SLAB34hfXxTXDXswtzy2a9arrqGrvPiWNFB2",
  "key5": "5K1QvE9CJU3tQkWixGL9FtChNokDfyBvKSTE3vUe6Nb4cvc4yYcdzqLHVtwEUK5RLc3hBm8CfqquWmhK4q2EVWd3",
  "key6": "3WM5YU3JiyqkcvYHibgr5RXeMpvK3W66bordXFK6sDo9adSV8ygTeFAwEbozmbz9QHEtGvbhD8QGtnqjpXdBH1Pp",
  "key7": "5ffGVJyia7PDYtptfgTWmWGXQXEMHUxFLKSLB2PNmDQJAkuXud1P4CYtgSLr8Q2nzuVvFjQdPDXpCBLpgAYUfWJG",
  "key8": "5qfu5psKjNYGL2hubU9SenyyumxbeGpjTA57PxhQmuA9B8DHhPbb5jpb9UjU3zZkCzNWPWRjd6uqTEBfC3J5svVu",
  "key9": "5TS1CSJeciGyz4UpLgvnJWVEMSvUkUWjRPSZtScC8CLvrwNH1n84VmhVRuRaBZSANxhUZLZu8hMJWPAVkFCT6Ykr",
  "key10": "43ZFGuYsuHgzgFAcaJEKfvf3nGxYboQS39LeAJh928aidwPfJxfyM7HiFZz6a8qZk8HcVbRiGrqPLm6Lf3bQapPN",
  "key11": "r6KjCEZbfWVFhYcSrrwh7S3ECBZmAE8zLfNLAGo4g7r27MkT1enFkBc4ijGJL4J6a8L7JyraEj6kfRWXifdy4at",
  "key12": "3J4rBCdsfyGha9TP9YNcnY6uiVD7bbx9VdGFUfixzjKmayDN34ozF7EBdDZJz4iPwpeCukC5qZQtvFt24aqThFq9",
  "key13": "5KwoJpwLVBX28bSFUa61vjYpbmkrYkRYJz1kppuHF3ggmxfaD7hyqzgQzPNYZvaUQKB1HBAqrfMzy5kY9C6LPwMk",
  "key14": "WxvC9fTfZ5xd2T9GmKuh92f1ejbikfW8jZcQyBwV18wSbnnt4MXbm3jxbcDMb5ekGA997vPFd6sRzZdvFqEwAvD",
  "key15": "4yVi6Tf1nrUDK6hZrN7XJ7B1vHWoUFzLomu9kMnJMkavaVg3ta65AQPHd2YSXUooqp1M4cPZj5XVEP5enbkVf9QW",
  "key16": "2Z7tgtiaL3rw1oxMKhVxMrHQBBo1d9AuSi6Euc1SB19J1uPpPdm5feTSh1BvWDmPT1hoMcfRCTPcija9q8DuWqke",
  "key17": "3YDHDKE8WVoVKpoQxGpsLJwFNM1knMh7qsn1aNyB3VmdjhukdCSJ5DsUsMUXnGpEfsiUpsFKf6W92eVpaw7qEfZT",
  "key18": "5fhGCWBVrcfC7xDQJ5QKpbMcfum7dsDnSVhPgkhFPdnwUe2XB9PfsEWpxHrzz7tGs3CJkapQRCwypiLCK2GY75Vp",
  "key19": "2DSvgSwv4wbcBZ5Zyd5t3RXRm55Z6ZJHxeA46dT53Sq4J9MTUb1cN1eaih3VCwk4MwxEcwMyYdb5U4XHns2SdZxf",
  "key20": "3eNWtUgFTHo2BhDrrc1sDzpG1aGWn1FmmyaXFt1bVcnUgz9DFxy1BghuuSW93vw5LwLj2HQptrCRJqWi4ag2dgvx",
  "key21": "8u883nhYeuGoaLsdxhmUZGpaxW1vZsvWQeApKmxZdX1UzDSLmQuu3j9ngw3sMGbgpoM5vs5asUQuBKSwRXWg8Kn",
  "key22": "5ouLV9TKAo21YY4PuMMNwV3qkFS5TdqcJMZAgxMSARiauReCJX8s934VSSpdFF8YDBgpi3dYvKsB2bdceA8gnNF3",
  "key23": "5ggptpksp9VT3bbKRGmWkyopd6uYoxCfSKHPy9ZNFYS6VQnXfxKC8uWzz3CX8UP3Ls9dJqdukc3BEgfhKDtM9RHF",
  "key24": "5R5wEXtLV4Dw5EJyQhsPaC2feKe9gsyULu16QbQF5iBFxfLXzLjejJJmWqW2VqDQR2V3PH2YgfgaDCrSakKqXPBr",
  "key25": "22maws3NiHbWNzBPgVMuTg2crG3SykXP6RMpTNJ38Cqd2HSvvmNrrRmZ3bbykCnJAq6Sk6NDnJiFWfqBpEaXACku",
  "key26": "5bYpFbbKkZMmXKtQhfX8WMbz1CNtefXqnrNAK6oMCdg8wJVbzkCe429vxz2XpJEm4FGY1UJcEn5eSWEzVUFWktPZ",
  "key27": "3WHT1eGne424ezcTc39k5DqgaWWkKpH31zqV6FNP38JYo75AcEiMW3euQu5UNpnkfkcQceKFAvDiqor5AM9mLkBd",
  "key28": "4bejzTaFJBxWoo9o3tg24DeSkVsd5PLWCDCUnfiC3Qu6GCy8n9esjxsTrfhHMQqJAZrYMnAC9knTz4A8r1WZwJ1",
  "key29": "YrPtcK3EGDG312DjjXx561dzRL2CkNyvYJE1GEc6tLUj3KxVbWQ8XQFhv548cBXHjzcDAcFJuhbKNDn53FdWJH4",
  "key30": "65CB4jFWGQ5syTmzYejPojJurftR6XwFN3XuFX3F1YmuQBk8uHX5EvzAdffztmrwZRi5pLYUHaccDxxMEz3Qsh2U"
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
