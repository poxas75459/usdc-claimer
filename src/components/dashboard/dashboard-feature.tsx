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
    "21Q8LvBbmNaaM3xaegb2gXBgGaKG728Jscy78XS1GWFoZKe8WuUm47Jes7gVAiVNK53Kw3kMGTUbNt1NU9T124by"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Q1TgK1gx2kFHEYn3nzXY4eQKJNGoqeWQG8ynBbYpWKCVFcheLGmxSgT7wu3macxobzWXxMHS53NQgSrwt6zeL5",
  "key1": "5YETUp7yvCHu3zAwuJx7FnTHfwihGgxKW7wYRhKEWFZGv1NKrNfdt2ssycBBcg6Tu1eQCLN7izxAD9B2LKxDnvSU",
  "key2": "3SuM5KESq1TyCEoAGMkLpsqvz3d5pctNKhrZF7CNNLK2HbmNpxqk4iZxaLp37gnqtD9ngZMeVKMCWUAKecrzrdF8",
  "key3": "mFCy9mzKC8DP9or9oMbttk9C8FKZ7pz8dW5TrcnbqdZAouQpANbNS6Gqpaz9RSfjRVPimY1YDvTiu42g3Tpbt2A",
  "key4": "5KYtNuTkBHfjLMUUiwBKLUcW4xRfzEXqokpaEuW9Hi3V35KyoPUzZgdNg6hn9Gnu1oGFriu8cq4q4fyz7Enmam5A",
  "key5": "2VgThyDZqHh7Pek6car6FrP1L9E1r4KUR1fZNpHdZdriwSzgSayoaHN2x66nYbEkSMboab2xya9nGyzBHd43t5ng",
  "key6": "3sPrtygvMtfmpLDwdA8CBS58QRpcy41uvqqhjF93vs3MkUrHh8MBm2W6x4hfv2hdgLtYq9zFprHuYYKWdZSsxMjY",
  "key7": "sHFQ6eS6AgPDMN2XQPsDn4BFEUUKUc8xzGbbVRPteVpdT6FxFqh1ZaJTj6y3rMhDR1Yar2CKaK9rSCf5VwykCu5",
  "key8": "27KLTi85WHEyEur7yzReNvRfvEU7NhpsSQpnoFccrDE7M1zkaNaLTYb4WasrcDd65UpfvgkQmZ5SnsKmnoUj9BUW",
  "key9": "3RuAE84SGZRy5FSApvStHhhhLfrs6r7YrhR7BnsybJc6F5rLAs2qRgGkvxD8EkqhqdG2pq5Es8VocBsG8pjtJNQi",
  "key10": "TY9eee9DS2YmCJCzEVBdLrNs1XETtSt28q6NvY57tjftZNEgeJJTG4wbNcDp8we8tXBdNasM27gzb64WJgYkcf6",
  "key11": "kEg6YVNJQKDRt6YPagkVKkwRX1tVFCjVvYBF54xjccMEq7Y16mP8TU8DiY3GeiK2tpzwo1qv69jrSA39MUzpj8a",
  "key12": "66tpg5fws4WfBNZz7dGMSmG9Ke9fkbQm2rDq76hqW1JhodccyenK8RYKEHMBg8dLmmWsaLy5Ji4brNTqNF5kKcsX",
  "key13": "4K9BrK7bC7khZXWcnsoNix2Hq29RT5LSJewmwBykepi8ZsQH5dYsz5EKTQHLi6DvpaZLcLr1WwQeu2bx2Y4doy9B",
  "key14": "4UuYHhidNiQhETAT87t5FAhj7UvF4kQZDQP5Dcvy5qmT4TLMAH9iwYGE93Gemv7FhyZDSv8DWC4YDgeRdTHRCpL1",
  "key15": "467RGH75VV1zqnprtUoYHNss5djxWsmpi4X7TbBer6z52cM4DfsCy5dqpVZ9CNVafpkyMiuZg4r96Vh7RW3rc37Z",
  "key16": "2z1dJpNoXn9pWeCf89gCuhv3kMEEgrWd4aB6YbUb4xg78saNDdzwSje2N1T3eMSxGM3tPjTi6hUQxUVEDXC225KV",
  "key17": "2zdbLBEEiG2a4AXFGK7YRRrEvt3WHLrR5QgrLvtGufG65TQfZUGUqLDZZf5jdXcw3t8ANmr43cUvUDx1sb4kd2Ji",
  "key18": "2hWy3gECYfbeLD3eHxDrQFE6kRQDgfx5PV3AQvrAtysj2ELD26WpGFRCSiPXcFXeRV64NgiZPESCJf3npVDoQt73",
  "key19": "BNF7v7AYp23oHV7ti4bytPCCnX2FZcoqmDkM7QcE6tzxeh1M7kHpiKz6y2qMDr7CEkyPJyvqN85K3uRZ44Xcana",
  "key20": "4b1pcfcgF7ZZdLPrVtgkTFQT5jzAUAV6NNThtE9Mpzw6q95YYx2wkgc9J4GpSBx2UKAtog9u4WDVS3F6nNCQHMva",
  "key21": "2xJAo8j7nV5GmBSAAy7yYbXELPWuwWDxzDCzgsgdb5g5xUah4wVqeLQcvcuSUimJFDU8gFh9kqY5bi9cHFXyLo7T",
  "key22": "2Zym9yZJo4PvcUgywgiaUzByBdsAoxq8b4rpxFizmDp7dUBvAdpKBTokQCZ8si6hREbVpFfVWgjLCDxE3TYjiiAG",
  "key23": "5yAdb23kMpnun5i4jiVdFXqd8UG3fdQGiwnMek11PpGwrkYhR8n4eXX9J4C1XDKJhEmgGmfE5cCKBqy7DC1QcuRa",
  "key24": "56kQYfBfesYbR48RE8YQywPazrt1dXjnCaA8hgXXwwyV6kNZa7E9y4DnjgRR3FgdBKTySN7RefjCYProqhvZTmkc",
  "key25": "48pP9pKd9ZMRzwZfmY3KGyq5Djvo2f4hibiUBq6wP8SoiVegRSLbNqDtqcRz9j6bUYreu55Bqv2MFv7Yq2kyjRj4",
  "key26": "5qrKZJQyk4UKnQMEZjzQzJ17mL1xwVguNRh7wLUy3ZJPniVpvzyHS1DLjbNbB5t8AxqPHwFH2X5PXdYJ64uvmR5a",
  "key27": "2t7ufRD19j6eR9Pi2EwpPwBBtDwawYzAAqsJ3vfSeYTysUhLfUtvYQK1EpdGaksE9CWJHXYzZyCk63JxvMGoLctP",
  "key28": "3tFUp5v4wcQGeShcVBc7wnXDhuGjrbnuYNKTbqvi6RW6pvuucYgssUSbLuwctm7vpNDvSiGzKRKy6ekwxLYmtsX1",
  "key29": "5JzF8E3d4TmcXNXaSf1je3J8FCX3Edm4uhSF2AZj72og13rKXGbL33zueMADBQwbgeK8o4T3Yg5tGp2tiD5kfgoU",
  "key30": "2EHEewJDtwEAA9zSrjowaFm9ci7moVXLSeESoyWf9nmWjwWQMRkb9M6QNzcgA8hThPZ7KSGmCAaqcMr84pK6tsx2",
  "key31": "4x971nyAFpa674eapqAB3uUmJWZQRi7UyC9SHXVfWn14BJyd7Gq4miswtc7xoodrgMR7PZnAijs7S871Tjt7ye7m",
  "key32": "5Aqhzq89N4NLCdvP11utDEzK1ZUo1ZRxr22HCCRmdUMFA4fdJ6ZPekmad76S6bZqtYi5UDnrxjwi1CbuHxnHawby",
  "key33": "3qqywKQsx2CjNXK9JQFivdzCmcKGw8EfzoRjQoMUGzjiMnj7t5YDC8PhQCuoKXwuathpNJsrYk3szX9LpUbFRWLk"
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
