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
    "3Kr3tchn9Z5rZbTgyr41GKVdk4gUaD7rsKV2ME5M4DyDTJtMi1frp6egg7hLqiVUTpU1rfkvp5KtKhmHyEoPPWsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YUxuacxqeWF4XFd2JfRvH1jS6hen2JgC4AZnQFLgi8MDFGFhxDRsdr4D52bwxQBMSYGhLVKmTyv3p5hzukVKBkJ",
  "key1": "4zwiP6c6LW4bcjpUGo2rMY2LK2Ww1p7u3EPTsVstyRw34eTjAch7EEuzY4T8bZ9BPmutuHZHFZQtijJiFsQVcDf3",
  "key2": "3DDVvEPZTJW7WyQpBSPCC9J8EEbu2EtjzXW4tuuUeqRaRHoVrwv7aqPUANNR15UViYZKp8GKy6jVYNCrkdX6XgFz",
  "key3": "2UtSLvaDVz1SgiCL3YTUZaPoJ78zbF7iV8a1CQnUYw5eZYbpio7JBZ54LMqyzXs3KQPA7x1nxGd3ReBRw6uz2xDH",
  "key4": "jE7oeuiShVa7HrNq7tyE7HBLxv3KHBMnQMEY6FFj9wU3zsauZbkjaYkFsRALN6GFksSJSHeRHYyJ9fPK4EpR63B",
  "key5": "54HsGpkuKqhVvHqM4zFMpGr8YceMCY1xoWDrTsbJkpP6oLV7t3NNuRDu8pCq5kXV6f5eenuYh2crLYi4bmLJkteF",
  "key6": "VE76TTpjhyW4SNxYr4w7YTuaAzZzSKspPCMEKiJUtTXUSE3VcjS2ZdBc4ugA7a8izegmkyDc72rSe7XsReCeTgL",
  "key7": "4eJWK5zLDxShXbRSVHJPs4eaGj45wte3dV5aRSELWimycWdMUPuHFaqf3bdVnEcvjk1sdrp1L9Yhhyz6VCiAKyq",
  "key8": "5aD31xkEFdyR2gddYyvEsN8iwRw1419hgdeBQZt1jnFDceNKWAdBkuhFViQAHc2LQL7MhLV9WU9NYG2K8b8zsn9t",
  "key9": "2q5i2RzayzTNbQLauSDHzpHiaHtBsitHiamsgCV1ztQDnKibroqXMNVbjC1P5ejv7iCLfvGMNydKpajvW7vQg2hQ",
  "key10": "4L7Pj3rsP12vjK5mhkrhYKywvhxonJhrzhB3hGUS9b7SLBPsfdWYof1mCQVkj5grLSjatjmqnzAVHK6HPQ1SyjWA",
  "key11": "51N2jMkTQwcrZAN7hEn7t36ruxFjQo4nz2vLrwD1tBdP2rNbFkrjen9Vk6wXhgSq52BJTbSuRSfkxyBfnKoAiQbh",
  "key12": "3dsg4HzmupHRniDZxfVFDP9z23odi9rD6V7X1LgFD5bBBq4bKr7aZkLQ9TWh77QBN3HBMGujTroCiL9TJhcccfhj",
  "key13": "3SAoVTrXSLwF3uQRbv4TQjTpTHiWeVXhgsqRv6cGiSPPp2N9n8xPomKJs1L3cxj34GkwQPtqKRQcXjZJMi7LaFqx",
  "key14": "4AsQFsJs1CnQfSMECi82ob2bdBRmf2yLwEypzvgJKEXFtgZPN8wWpHYzAz7tGsEFZWLP2JbmRjqWEuSUv6fbYGcA",
  "key15": "2fs8ukA8Hwfr1eNRTJzHXNtdNop1Ln87ZAj8okuz2es6Gairhqm5fVttdomvVFp3rCM7f8KZW3NruZDcatRC7V9Q",
  "key16": "35Jh5NBhWVcXShgtmezJ3BovQfeixQ5HQpcSQpV58Ve2gSo5q8bxz7bhsZQVyZTXrWFw7R9Q3h7NZ2ythPPgeyyk",
  "key17": "4zWUnWnqYodsGjBDqA95M8cvGNvD9xdeQSzHH5tWsesXqaXv5x18QYmupQGp3kkUoS3pFXmyWtxgXQrxLsKksFZ2",
  "key18": "28DzZRDKmWDbCi2AhCYWpH8duPPFUxuvomUozz3usbzV13JCbnxGBB8gwqGo2BzQz8uRucQjafvrs9UtFqhkhw6w",
  "key19": "4QsaPfVA3sU11wDdjo54yLyvAg9ibt9CH25m9bRSzhkm8dgXF9XQVYsdtaM8xLo1KVkCKwJDyivD8xgc6i7DQvRs",
  "key20": "37N2tfHkwA2d14wpJEG6ZtjJ97PssspbPg6UKP3wRshzjE448Ay9wp3iUQcRYk3BPKW157MQwm6SHNeYF38SMob9",
  "key21": "4ySyrJw4G38Yq5vRbSaVSnfwZ1xcSRmkgwqMLeEgtmftwKdrReWQmX3PnpAPTaaz8r4AeVsXAtyhRFrg8qVGX77H",
  "key22": "3JkYr8fJwuhyrmGTHWDKqeXoLmifotaDVxY8soXrhHBejxARKhmH2mrJH7N9HjGCnm7DThJ5wYW8AtCGw4p1uoNn",
  "key23": "mERNJXbTb73rGgrjK76g8ScVv46Y2ALNuo5QGPe2bdL4JypGD7B3aPvSvZxw7NYfUmmvPmd14FJn9m73VVzMvys",
  "key24": "5fFo7dNh5C4KNZETMe9hXaFjR8ALeu5PCCKLJe1Lf3WvicmkPJbVpd6TuGLRNkgZKGZkCEFMRwRAcWgyz2dP7JUy",
  "key25": "5PJYwb9gYgqcriHF8AHw2uhFWPxZs1WH8TEPYozvmsyARdWLQaDuSfKt6vLsFdYuULhrr9XUygfSBSxfPVTotQRk",
  "key26": "gdvDpwuBAs7A7j87jemNmfDM7HkxCAivyPtKnHzgeWqZQ6K4A31CjYKYWFBsE8GM4tjTR6wfSJTBN8c7ePp58Lr"
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
