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
    "5vBkjXsvVLvzue5hYQGsMYhJSB38nc4HeMStN9j7LwaPpNKU9oMsph8Ykg3xmQoZJcEdNZcxjwdk2GRxT1eCJrjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQFJtydMJqoN2k5r2D5ZwkuuZTZRZQ7etNUVXmkwVi7CVBL13EgJuts1vw2taLXVMveshoLdgZu8iqWTMt5Rhr6",
  "key1": "41AttbaNt7YNdE8uCi4uStbbD3AaMuL63jQ7kdDgTHUwE5QgofWnnSUQ1ztMpUPwz7QPBgqYeogRMpzePDn2L7fe",
  "key2": "3VUjP8uGMxBkXCwuEUUhL3hc3JV8cnkUdWMX532dNcyQAeDns3inB8t7YS3uwnfZ7A8Pvv29yZsbCb4ebAfnHkmX",
  "key3": "4FnmVggnW6j4PoXu6KsFA3zK3avJoKjhn2dNZkNRoiKXJaHYdWRv4JpFd7esA7sRLcP92SY3zJeqwYEaC1MHFFPL",
  "key4": "n9u7GYzSDmPGAjRgzcdBSJDQSTnUu8YkTT3ks61RveFF8jj1ayKqwcuGHMvhxrhCGLAwbNYKNAih8mXf3wBQA9f",
  "key5": "7nEDgy82Z74eyuKRwieCit6AhbLR71AHAqch2SsvvHAATBeTo4866uvx4ZxJh4j3QNk6sNR5ANHyzAJcCYtWxnJ",
  "key6": "2KBbqBJvMEyvW5GiNhHtYCXJGNgWfWuUS9kh2MhDJ1ih165TLTbEvv1gxG52inm5Sgevc8ts8hULLPG9BHmrDv1L",
  "key7": "4pX7tcAqXpT3P51qxq2FxaVzVLQvqa32je8rJSJ8pweFrprR7TuwrCwZ8pmHnpyJJvwN9kVxBxsFRkdBEohLAJbu",
  "key8": "4Eqn8gd8i2VShmJirPqAFQPhbaKANbef2fKyGCSDN26gcrPnc4q9g2B71REZS8mMBjDGZBaApMT7QdKE2HAm9dRb",
  "key9": "4uzKyjvptPViGs5JXbUSRg6mamPkbYRFAyuZ7GZd97JHWxC7U1Cj7Me6CGWrXrse4xdShDs6UiHz6UqYMVnRKQGb",
  "key10": "4SANFV4XkcvyBCMXTXmAQPZZ63KkKjhB7rJyzowaXfs2eFfg9WPa3cEndfM9aJWxW3HsU3g1BFacV9YYFFvfARUM",
  "key11": "2sxfeTKP28qgdf3mnNouosf9CDLq9Wwb7PkALcBdy9UJ5RYTowD7QaKJcCc7HxrPh5Cn3n5qNYNwuVgts8jVWHxf",
  "key12": "3f5j9bjt1kjPq6kiT8oC6DZsobk2UFKKNWG2WQJhi9mUznhPsKUeAk5mcwVb85ZKAKr7K3Tm4tgbaqduNQCfeaGP",
  "key13": "3dZB1RtLJGDTf3RahDAGUrLmEtDNya3A1dyvFuYojkFQQgrNUWwjLeSFrXvUzn2hRPrk9ApDUAnCMQzdc83rDQ4m",
  "key14": "5SrLNWSZDDiQTLSVYHZrbXrQSBkatZ4dh89SM1XbPxDeXddzBWWxhEyoKCfwf4aH9YmY3nFTMehbqmDuMaf5vpME",
  "key15": "5fRGCsLiynqWcuvCNCrmDYWFz716T5cvyNkgLJ7nabpchMsDAc7jcAipbwspQyBYRhrhp2Z4UWMooAKbYtf1PGjh",
  "key16": "3q6A7pPPW3Y13szkHjW24zenJHJXLVcLs6PsxSec2JgyMD2JMz35UEKxBock8gB2ooWqJyd4vR1B54GhiWhP4dv8",
  "key17": "5PpbMjV9C2zeESrdJk6ovH1w3vFWZvDmTHpsPCkj5sTUxYqLSNHuoYrVHK5W2Xg8epPMuSeqirHRennHZF3nkBon",
  "key18": "HmFE2UeBAVPeLjfMTvhqbbNKCZ2JMBBKCW84twfmueWynZk3B934JQPSuHNmMyNCf8nFhCUDXhW4KmkLNv8JTju",
  "key19": "sfj4VHoSWtUgYEj6DcYvUfa6mEFHtoKwgdsDmHaysVzrDCUbYaB2QiZLqNoabEauj74NDhnkis2JYdGtaa3YJNC",
  "key20": "gmrycNQFGeTHqJdebWfUgAXmr6K4HuqRLfWcNkh8uFxDqaD6bbbqqEi44CV7NftFoxx4zureu8JvjbaorqRSiiL",
  "key21": "438C1iVoDwGcn2YJ2g39cCMo68uBND9Yj5APEPxtVMEZTHmTWY5vAU8bFBsW3z1V8FR5oBEjuR5Y1DgkiFaKPaHA",
  "key22": "23d9rejiNuGfwMRC8D3b1Jkt2BTgtetBsWxagyoiBeFhYAnkhiPyp6fnH1oYsWsPnPd9aNqd3VMaSUffQvphdcHK",
  "key23": "LZDvhH3mLRU5FCvaKGXAvpx2F8KCLGcLXTGhDgYqUzuviaThmKef6UJF2dC65FtwgHzkzEgd5UBjBtsmCaiSDMz",
  "key24": "41hHDBy7Y97nmiTmc9YCNxuFjyHxiG3m45Kndn7z41jTzWtiQ374VNE6vhSvpiX6S2vLjgU32SSnPYLBUMNP1FYa",
  "key25": "bzXZFR97Ugg3BLtJwQPp3WmDFxKad99gMwR7Egie9YoPXWaNZsP5g9vUNFauVd5arunB4sCYh8jPa8way9FZXQ8",
  "key26": "4KVYxHYjinAYFJyfc4KEWaTAxFRHvMN9fMYgoW3BkW72gp2eUrXC8ghYby2nKqnPh4FvNDLq7dYAih8XgassB9yZ",
  "key27": "38wyvPU3L8BFXsh41PTkG2xj6WcgtErJ2b8WvARN2kzHgA9PVxKAuGVh9Xn4RMXNe1NAsAU2PXSSoTokF8emQCGd",
  "key28": "3X13d8gGoh78WwN2mKSfKqdxXbAdARzZCYbMW442YTvQxm8wFy8SUvWKpgkEL42L97k2Wr6v32yzV2zPebUNvu4o",
  "key29": "5tZY8LHUbg7QurfzEfjbgGfPobFwz6W75Jjp6vrXoV7dNs8u38Evvgadqw8J8uniMZbGfsdvZAqXoboSedJfR4WK",
  "key30": "3tp2BQbXAJ3w3bQn91hkvbKPn2kiP3CHMSC7M2dGpzgqQXiz6cSQU34mmwANs2Y85j734BGp3g4BveUUjks29RAz",
  "key31": "5hoxbU6g3v5B58XdS5twzpMax15BheWwvDBonWEsGN2NhAEUJt8SfHEbHiasgPHvW2iXtbxhKAPh6q4oRhK9HkLN",
  "key32": "2KxH9dxgDHEeKA1pUAn8W8NUNDDkvzVffNQprPDzN5F68h13iSmw89y4Ek4WXUKgXoRg9uTyyBuGvp5Rx5cg8LxF",
  "key33": "JRqR9BQWc8i87GddTipcx5r4hDbF9xoCDvjEfyXz4haxMNW76s3iYDXtS84K2A5aKeNaxNcojGD54YD8focyEkn",
  "key34": "4jhEAcWbmBUuTWNeTuvNrsXhTdQJj6QgYgpzEcLdbD4Ja8f8beuqSNYRXVTXptd6h3yUJuo5aEaqY8dMKQfcbqre",
  "key35": "2oY9tugsRJTcqypiJ9pMH42PEBRvTV9QtVRf4BWUqkgKUqyxdjgYixF6nH6tUxjtSXHkKZYFneUjw1r3ZAYWkb7j",
  "key36": "58hB6V2QxeifS4JPfpZuAWKazmGKG9SXfzniRJ4feMRwbFp42sfXVk7uhbhPB8T3jEMjGJRphAWryw73gr8enPG4",
  "key37": "5u2iXv9T1hbhmTLXVYRZE8SaMT7doqGc1wijj3wAZLwrVcnvkWRv1SVnHrQretwTbRCeuX3aXDwN93wc53ysZxkx",
  "key38": "k4X1JeRREvRSR5c8SbT23bMGQ81z43YEgDoVTeBhMvr2kC2PMCLMNeVB7infwXfsZGhpBcQfixMMZ6RCR9P4CEw",
  "key39": "2xaP9vbJf5k1iYJ5fgpoiFa7aWKMkYffPdCMduQdxLYCD7XWq45tc1Tzamet28HVkEy4SJG4pCjv742j8XGGmk9k",
  "key40": "2JmHR3DTdxDssKR2VMQ9HGgCoMpxDcYeuNv2tqwbVAXQ9CUtpK7PL22G2rwDuMP2buVYUexc5QcEFz6JaZMZewhS",
  "key41": "UC2agkcZcj3EAimnwA2ST2bBgvDzgsigYAeiBPZZxKNpZ46Pv5mYKhdNS4JHqJJCuK1kejptPjhR2Q3rYEv1s52",
  "key42": "4foqyYNBq9JqeZk1q7ubuMwxsCYrEUxLifG9uzCA11ugoEcPMwRYSjrXADCMY5TYFvwm28AJGG6qRQe7Rt4exTLR",
  "key43": "66nDdS6dZFynrX7BfbaJYq9xP3WG1Cx881yjAvFjnCmBXgEnbU7xRN79wdMoGz5uDwDVjVsV3vHg8HrP6AbYRmdw",
  "key44": "yAPLUGiNC3N5jVmgjyr3YB3ZSHzDbJKGQ36NBapHsvJZYbwoouwMGzzDTNyYZLtxNwdgRrYt7Lvjs9czLhW1wD4",
  "key45": "3PybayP9L8Qhe8DcwDjGo5aVaC6SQtpNfdj3G9LL9DUS9MFnT8YELZ7pazp4GgBffSG7H4494zvMheNvcGVaefUw"
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
