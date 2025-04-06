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
    "4yW3YC5qB3nqtCn92NDp47sTAJ7tgf4sy4vZYoyL2WUU27R8CPNFfM6TX1CUDqdiW7Jf6Vam5QN33E9HEYhAwrZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Gfp5C1nbSyrS19yjAUkdfLCAaySBrLJMAGCW1Nga56VPYfWf9CFp4ZBvSxbTp1cHPHaRxwD5XSVCi5SXDZ92ki",
  "key1": "ANhYBQ1FzM2yvPgR5sS2HniJuEuAaVZ4mS5cXkMhZQN8uhgCbn1QXKA79C7PvQauZatVXKgN5NCVx9p97ZGf8F5",
  "key2": "3MPVXJT5P7ZMiwViBv8fVNTkga1MpeMzLxyLHVPHDS8uKHBYFogvVvL1bSzXAgTXFEEkHvT5pjRyjcCvyfGuxGxZ",
  "key3": "4egQM6Ro5FQBTXcf1hdp3VDtP5j6xQHmxa2wrjbrK2T5RTdwgK1i2Fu9JJ15cia8kDEuJit1K85qDtMKvYu1EyFq",
  "key4": "5k9x6AMU8TjqHH6W9k4Htjc4LcbEXQX6v3xh8xh1jDzMomJAg5MFzaD7p7zCnKeifau38ibwWc66MNP29B2B65eG",
  "key5": "38jWMN6FhJLT1eJBgdmoCdLfqq9uMdWEscu4VoSFPjt7Gspw7bB7xMZykyk6VbUAdWPCp4J6cVSzRBuj15mEzbNr",
  "key6": "5Hb8gFtSvuNJK1hitWPdBCFFjKyVpJgvEvbN137tRypdv6krebfXr84UsgentDzVbihT8RdFCeBLdNqmtiTzEnma",
  "key7": "3bw9jpQw2ugHhriwNjkASa3qFwAZ6mLgU4f3Pg1dFw6CkqkhRG1e4KdvXRdhRTPUud7C7SYc9CdvNShXP4CUUTBF",
  "key8": "67UBDwyoUFou1v6dT1EZRBXdJTeuPDQ51j2sU5HGj9uqKaspww2aATmDkL68CUAR9YyFkAptSHto49aAeksu4k41",
  "key9": "pBvvByNDGh3kcUrpbm5Damtde9rY6h7Z7GBpMi9e24vhqFZjfbVpWgJVJSvABBEBixQRqWNWmMYdYWmTjg1QAkd",
  "key10": "537xusg83Yj1sonFKyGG559VH5Ptc6SHCJfeo8DKRVzrEcBG41fk4kREKsiwvqS5mJFbi2yeHtjQ7ejfmEN7M81K",
  "key11": "4fbg1AYmYKD4ihpVGUhHs87sfTa5jxcKhUm8BgJm3QyqoBpDAwhSuypDVmFWQTnQ6cktWPpwTzje3VQX9QdcdDsv",
  "key12": "2dP8Vh6ZsK6qJwPi95yFqUAdtgiB16qYNg9zXteYBsauqYvAkE8GnPXzkrCdgpp5pQyq21nxuQZ4DN4uCS3BMoc6",
  "key13": "aoAFPMHESwM9J4SKB1q3hag8pK1Kv9gxdrMDQ2Qy94xqdsovDop7KXmwFdPfyFshMKVbZv7YZN7wyukrtvMbn5F",
  "key14": "2AmeB23SuwnMfKyhMNjW9o6LqZyfXAmh64j8559TvUb1RegeP6pS1Rv5CKjwTC1SngMAo1WVQKHWkFDC26Z98Xf2",
  "key15": "PF6nwhSg7SH5KhCyNwAEUNBNUy5MquAFmoyfxmLdeLiqiSMbuBmEZKq8b45AvxcshDxkpTztCV3MZ7X3nbXLqKN",
  "key16": "3J1jhx1TefrZeYz7kBTHRbqRLQPo2xuq4b84AUB2sxytwRFA79JnSYbfJUTH5hYszfrpQcWxav4dThE8QGQZysiQ",
  "key17": "61r2RxotJ5DQVGLjXuHVkfhJ57dkBdPEMdnF1DX7df6Qe7ZnDfvpRzgBaAg7qKVBU8XeGR7uJM2NvCxmKkDJUCH6",
  "key18": "4iADqcDCfvksUbw8BkV7CEKK88K44zpy6i381xPkiPBJNZF2KdK1TA6EEQPRkvuavj2DTJBAN2v5bvwAhYJYDqWw",
  "key19": "2KMnv19GUN4DP1KuXKxTh4XgFeHhVQNSDKoaE18n4YsYaVyR89S2ELVjN75nWt9NLGWwxVjLeNU7JU33qimkvgpA",
  "key20": "4X3aVERu4wnKcJUCgv4gvtULbp96Zd6reoKBTj2dJo61MiopBUEMoQtRXr7LgdVhnt8a7euZA8rTGA7Ukqiu26ZH",
  "key21": "4tUNfq8DP2X6r57tRYiyuvYKSGNsz27KrSL3DYBkLUH2fKoUFoNTZ5hVFPoCyvz1Aigqh7o53KTbJqY6pZwNqgCN",
  "key22": "rCQXeWNqyJFAFXUHyoTsA89oCFzyEm1P3gJVQDBm5AVdq3pDvPN2fHcKodpm8RXBwVuiSTLbQ2JNeYgEcZadiEz",
  "key23": "4gExUNESSaAqV2u7kKo6CnLgdeH8Kdxje9W9mJX2jxZzA8djSr9nVrnV14Hv5eNzB7DWqomWFwJuLjibaPsh6yDs",
  "key24": "3gJET8QYs19R57Qh95yoEoWpWxfWAZn7uzs4pZnZCXuZapNdzepnyukq5ugBXKUtZWyoWXsX74eRjzz2tVJRgTuN",
  "key25": "3duvKM65ZPcskcBc9mU6N5M75N78MHvKE3cra5nm2TRWoYeYjt4wzVaFR2Dcvme6Xgq424emmt93mL5X5YQAh5xi",
  "key26": "5xXXN8PDSNcNw7YNTqDRn9JZ5HguZ7BHLyNwhvqKDXM8uQSYhpyMiogLm5EEHCJsd6Y5r93HR3o4WtKxthZjeji2",
  "key27": "3Dnhbenh3GnXzXhEBmYDDe4cw1U7uMn89mr3s9Ynr7wAiGPDUMpLGVf34wjDZdsJa78cRN9X7eWLDtaCZnZK815A",
  "key28": "bWHkWS8Wb4TfDPs6NTb1KcCg1T1hNPsbhMAH6gCW1Xk6nt6hQ1Va6Bn6qsaob7tLaToS2AuB5ZvuVcyWd8vr5yt",
  "key29": "5YDgvgXNfuWgnJPuFgdg3LgAg5nzJZKiw3kS2Nb4YsGXqEbH85C1Js7uJ1UUqiiVCKKMhxodNQMythTQhfAxA3So",
  "key30": "2f7FJ2vJZu6wA12k3jgQmXaUiVVgkduarUTpEphouyhamTsCpp3TrPFkkAeC7zj5nteJqc51czCKTZLs2u6538d5",
  "key31": "KMw1RBv4NEwBHvsGuLyUGHUGPFQnaQhTjJy9MKcvnk7HCT52nXxtyyU5asHApExLbmMoKL1QmiWFChoqKpXyjBv",
  "key32": "5BCUz7zxnPJFhWzcZXu3E8xToQzeXuFiUUvKUtKZfenmzfrFMGY9pHL2WBQ9P9kgFSmJj7YkcjzQWycB3vxCi3uA",
  "key33": "YKf1Hqj1GYBY5bEoUS9wsjz4gyjeN2pkVFHq7bRCYKKktMEHU4QzjZXQD6h9RptZRDDt43uHMgqVGxvyrDxKCj1",
  "key34": "2VnB3pj35UDjXDRbBGSsenikGFDDmaggxXTKGkUebxq4tC8MEisyXymmpVpkr5iBFsrGcVvhyZM4oedEnDUUxw73"
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
