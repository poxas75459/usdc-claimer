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
    "2Csetu3i14JcfqvUELaafdMQHYVYDXh8ELy4dXFm5uGAcfRkXT52KfcmgoG1cxHbNXLFo1gVWvqivcLgraKjvvVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3swqh9ZP6zUp88TTJpyYjF2SQQ6eep9kTGZi7sk9i4wTQBLcCUhFcYhUGHDjdQFgbsxa9z8hrYx77TkefEGHFoyS",
  "key1": "3ANCPJ3zpnDJVpof2gfErTn4KJTKi1vD6SSLc83jMqxJSBkmb38SRyBsRbYAEz5dtcjLghzyZMWJxys1tGxqR9kS",
  "key2": "238kL2JDa919ShjrqYYKHzeUUFotU3ubT7mi2UZHTnZXd1ngQuxaJdca4ELZFfmgvjaEiAdEezY9PJNfDvsZR4G7",
  "key3": "4UoESNjdbr2QZFoBSBsY1EGwoDWiLtpMVCPs1rR7soSJoZ6WdJ82NUKNBJoqctSTHChQPnRYmgPAcKtEA6qZyQMJ",
  "key4": "2FAsJZ95Hb1H75X2gwrhcUt4bYjfhxdk2df4nEU19dfm6NsmPDGmtbaDR7kWs677HbTDrzQCSRffRUL68we2HQiK",
  "key5": "5HsyYcSjDSNvbCH7G1hsa1atmgXVsB3qWsM7M3jByva7iZBVJQa4JNijhDc8YGJ3ejn3GBgUghzogtUF4zre4qMB",
  "key6": "3Ts9i3VXDXe34KFG6Grx1vccu4d34YQ5Nxqj58ge331iYsYbzBDCGPFQqsMNRFsmk9UBipeY1Zj4auhqdMsWCGR9",
  "key7": "1fJWpxZ7hJMdqxt3LHPtNRAiRxt1CsTeCdaPUz8PCuzYD4jBq91j6soyQnEivdhft7ui4gTNqTetFKPbqND4pfF",
  "key8": "2TJAGVBWKszjxVxYZBBmjiQixcyJPcW1zQdDrCSAK2uDM1EmTp3vwwGAzCK2exhm8UjU72w1W6RX5jf3RgyX5mK5",
  "key9": "4ZRRAoMYKBDN6fuxkchnTp8yDAZBDLXWxkHKHYNiQgwEgArDE4V8rsxMQENfAHAVKRFbKtG9Ku6kyffXfjtCTFsw",
  "key10": "5NWAKXC3b3tcFzwkhiY8KoqD8273NLpW8oGrF93dS3MujUu9MzLrhADAvaAdCknRoXKgHSupg4i77s8KqBNKqvty",
  "key11": "gNiKMqguv6wLnkEJWjdg7dYgcdLKSuiwYoiyfcuD9aXhnp6z7ym833a4pPKFmDxY1cFf7UCTgzgmCSv2o9Nrr1j",
  "key12": "2rrbgWGT51P11a1JQmCXg2CSQVDKmW1daAjScKj87hNCebV37h2sMZNvkiHw8pZt5EpGkym2YpQe9aLiMRJHcKsH",
  "key13": "4diABqohtaTra7NfYsjbHMinJgYnVMhywT8sstnt8mJw6CVps1DSek6av87NjwSiVaMuDgrjTHbQGHHba13uCXW5",
  "key14": "naSRgZYZZnNzYkSVrdYyrAjYjUETTwviuaG4X82rLPwiPjufU9m6drYnXyw8Z269FmaGYEQmQDudsTjGMhhM733",
  "key15": "41qYKhehmwMUPacspaNEB1oi7cAXrrTibPK3Mk7CC4kyQ9Z2f6jtz1KhXM7E3HG3a5RSU6Esnm5b8CfdDmktdVeQ",
  "key16": "2jSiJuJ57r4FFbjcok2cctovQx41JD3KT4NtD8jG8hRwXj5jBhVWdhBWvb8nTY5BKjoxKjm7fhHBXaLxH6MHDVwo",
  "key17": "3dHKZHNGshbprVFUhip9LLhTbVy24tWYmUb28wHogYLM8GigWRobojSXg1Ac5jr7eXpWohB9wRiLFtPcievqYNxk",
  "key18": "3KPfcT9mgS8jvQQGBEYF1E5j1aojycCcLyh2hUWraJpSzAXMHRmLZJnUwQwqgA8RaEY4yCnZQpkRAponQUtw85v2",
  "key19": "29pPUop7rrMAtvTAcieQKKZkbQj5ZHbz5EaNSaCciBBfrmjte9FJPhTg83TTN8XUX6Yg56Jiw8QQfcgLJrcJfQi5",
  "key20": "ZJezwZYMNvXeNXo9hhTD4mbcPoX2VSD2m3iHQcmF9LETdKMUcXZ96J7LW6mcQVNoAqw6F5DMdyVnHRkFxa1CrMB",
  "key21": "4zC86QLRHVQALcN4CKQwcwGQXZzHxxp5AT9eymrCCFNoDKuHzkGoCH8uX2W4aNw1XxTkSrTocvTrMshBArBvoGAM",
  "key22": "3cD4Uchc8R2DJyZTwR8tWNhbSkYgMNgv2VYMymq52WHF4JWaoB9VHQkYqURpMMK5PHpXbktFfTpfLCWgwFg54HtY",
  "key23": "3EYHWx5zvwxiD1VonsyC2oSMHTfnvETr28RFoSwfFDbW8hyP2yraghyzSmcXkUNPtW7ijfkDycuzgNtEXSgTwH9X",
  "key24": "mjBRpSNN8hnDE66s4SZdkHiyhVa82D2SwduMzcnCDXsGMU35h4FxBgRwLpXzvtz9GPX49tSqrJvxdsSuNAYHK1r",
  "key25": "2v6b3aBh1nBDNFnkHbmt7GGcBng6Kq3jAzurmyASV8rGjhN1NekgCNPNc9bwh5411Yze1zpmj4qeMPWCdsHkziyQ"
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
