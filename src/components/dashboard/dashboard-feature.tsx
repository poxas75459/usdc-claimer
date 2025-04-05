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
    "5j4eeEfexPyx5pxt4qhCc4xRTCbMfNJof2jUeFqHH7LTzLcrYT2g9rkeUua1NCXyJwY2jvhQjdrZr2Ze9tZ2dNyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52h5moUoWtQpUD8Navjfue325RfPNS1qZoq5hmyJEJvHLVKzj5qX8vWMyX5TD75SfQET4i5gP6bE8R5esRPQ31sQ",
  "key1": "cLbrbqakLRCuSE2PpmWXEUbua6Tp2CQAZ3d9aoubhXH6RQhuozCrw5JM35GFNnMQutJHMUrGARkuWCsQvuTGron",
  "key2": "5MDc6JNF5c2TGMf6yxvn37TwgCEC2mgt9RCyfPmPteR6fPXitTg2zuYF4LcUaFhbW8uKjfTQ5AxUHw7TUPJoyKz4",
  "key3": "4foSTTKEHiNZHvJ3oEiPYSHEmyV69Pjvd5dd7svSoLxyaHPwfMK9SQoRA7VUTxY8g6DFjKV9A2P2XJNxAPvuyogg",
  "key4": "2KBWf9dN7TkDekLHUH4T1erdVBNYUUb28WP9EVoBqsvoM4eiZPWjt8ud7jjJNnkc8BGKLPjeoibRQxFnWq5PELtj",
  "key5": "4HZDkhS1r2YjW6R53Gfa9KZN5xg4PHqdPV9E3zn5zEkAQzJmgD3mis2M58M3tHHF97UPG4ZFxNT94CcGBt91SVhH",
  "key6": "3KaCia8BKVsBiKDZQnhsmcWGcEyjzNt3qAnvpaFnyXNYmkdJgviz6tnuhfDLPjNwuK5WGzdmQLUzLCJAV7za59HX",
  "key7": "4mfSLEjcnFTdoWaxsNo2162A7ENM4FzctVfKaxv5epAZsugdCQksdfzSQgDJ5oL23t5xp2REMTGCajCkvkrhZCXu",
  "key8": "5tZCbQn46grFJ4hZYbysnLhZpiRiaxKyeZyFa5vWjVZ86zssHstjVPP8iG66i7KqgWQqGL6CwZ1McNYQoRuuy7cL",
  "key9": "3nFNkoY2Ch2YF2zXQnEkY4cRFCthW3i54ondr5WWd2fGDPXpXDLXFXUz3JrHTWPTcqySNh39S7Ee96FyHBH77LeS",
  "key10": "4LxARUg8Xp232iDtsqHNF4rrzVdGt4kah4GHb9hisGUd5wceb5MFMVeMDtqy18gAGAMU5WnHFR6A91jicX2ssYam",
  "key11": "hJxtBBuKxW7pS6wUQKabLAeF64nFdrYEFWqB9GLyVADNZHVazyhCrNzmF1SisEczDBXiPAWJ9mUSmaBvbSrtuZf",
  "key12": "3Yo3BAphwnezdaPpA76w8nujz19Xeh5HfhC3WNRiA1GCTELX6PTZmDTScuxbF3houEGzUhqGzxe9QkVcwzPASV67",
  "key13": "2RuAzLbbHhizQnPYh67Jkt8AJffbwuzwbaPnkKo3FJjeB8ByLUtEM67kTAD8ftTM8vUgjR4F4rETH551Lr5zPwpq",
  "key14": "65duS5hBivPB2LrcqqyNHaHfrehH4rZSG4sQxF9R2bm4oMNqPSKi93tqvDUGi5TwZZ3YyJrDBCE7sXdG34LfuMty",
  "key15": "b3azDHsYtdT4a838K4YrFRoWmoVRTYmifDLysiCnTgfLhpAw3qoNt7cS5XAhwNeTEdjzhBqhA9cRTFzYF44eQtj",
  "key16": "65xigk4zABn8noWDy88SfVSsBX32szHNvXjkmygs7REwKmbhM7rDXSmrS4UvXvi8gBFdWW45srXGm8EbKFWCoFsS",
  "key17": "o6NrYLjtpJtWuMqMHeN4ZVoxo49h77KTrie5iuHr9yLbeZ5pXHVB8hXB8n7JSKJudmLWoC6QxeX9nuNvHbmbNiC",
  "key18": "5DsFW4jdDDkqQ2SDf7M6xYPxiU294owLiRMV6p2AzZcbwCdWC5Tzzym42MjsP3nApj33oqYmpRYzQJhaN9iXuhLF",
  "key19": "5swRYzSXHHXT6D16yeEDpuVGQv7wk5iaxDQpqviBSELbVHzwDUJrEaeecQVQFzFS4tpALzbsUGp1Eq7SXGa2XuKj",
  "key20": "5Mb9rUkt367RdEhCsFhiWR7fk8kb6BT3qhY8Zqc7g7TUosyDFb52dBtxxamYCvJRK9n25nRymZVrxBgqXRfsufHM",
  "key21": "2BDfY8XC9V3s2ieVoaTzufntfH2JSPoF1GLFMfsXqppaWwWwkDm7nKwhgTmLmUC8gRv5PcUmQL9f7q25S5PDyAet",
  "key22": "fkCuNaYXnWekgjzcpvALR5SihL2RBapmaoPAh1p6FquWeHxpSUDKXFCUmVQhKQqvPQwbiJpuFqsx7A77bkSrgfi",
  "key23": "3kKVpmG6Fo1AHXM8U4gixEuA7kqGaQGrMykHEEapqpGxu8Vy8b31zULihQe1izJdjpjPuL3bk2eScmZzkyUeByEq",
  "key24": "SwVV9myCXRT1kv7qphZdNVRtbVqxibPKaxLBvqHfRJaF1Er7egZ1uGomBqXR5W7e1BBp7niWdfz1Bu4yE9jWDyq",
  "key25": "5VziSb9yN7CSwCRHcLoSyyaRUMX8GitaoTqMv9Jf4XKwTnCtgPB8LmwygpNNrunMmF2jZMfpwjebtZ1dj4HYS6q4",
  "key26": "5kG4wh8QFzDxNrz6mhqL7nefJjn59axWKC1rn4yoAPeCkwEGeTj3zmpoFkzekfZoJxeZkDyUEfHYZyXks3Q9SFmF",
  "key27": "3S3L65vkgADugfNtSeDhza8pUFiyHGtUmGuHF4PkZKnFK8xHTszYfdtusTJaCqoYsCgAweX8CQVHM9mjecoxrx7v",
  "key28": "3zYfRUhdqE1X3rjTHW2pVmfbobPDvTeXQw61XXJXwwRAWnXi7UJy8KkT4RGEVub1rCsrUY15KRKrcPKh5K4XKtkj",
  "key29": "Xf4pjrahdck8r5JVTKW2z9UibDY7QZ1fwbwQhr3m14hgw3pPxgCfeBcQLGVURZbcjAFBAinUZERwv1MEiCfxAcV",
  "key30": "5SbqdHyPzCf123dxzHKoCrsh4WtZhdCjejoDydiu1DNfKTtsZUj4HBGg9NKymQGTvPcoBYRFry5tuSPJS5hzHquZ",
  "key31": "iDK9PxTwEAzYUdSC439cGUz62Kp3m5VVihAMn6hQRdaTRiit5LgYwAjM56tvsGNwRXdpj6z5WSD4kWQPgBwEqf2",
  "key32": "i9rowwtice15AxscDfxXcMnosQwpTH83hdMMgRR6UH3Kw7cCpCVTykregrU9EhSC1XJzXUThTvw1u4VN2mwWGTM",
  "key33": "5HDAuX9E2Ho9r3jUH3dnExELPCtWnxdYxXoHnV9Us7QRoUCxVptSrwBhhwyCFbRnh8ETxobzVxqSmVgnMxW9k3Yn",
  "key34": "3R8zbvXWSGFhHMYK1jChA3pMfXxxYRxiCvrGm6ccCyyeAKC7SxMtj7z4AbP9JNjuiWmApJ1Jw5dAPjcDq7jmzZLs",
  "key35": "kj9fkEPx96bzueFyn7PG7AS4cursRRxh85FxR6LC3Pbravuf4jFwwVhp3W5khjr34VhenPT2LGH5UAS4XsZJRTW",
  "key36": "3zJ1tRFmTAdTsVfkVDFyCAbmAdF5mYB8dyd4ADYwv3Yh2SbeM3VYsQUGg3aYyydAvFwCq8d4H6ThPuVFitM5FZK1",
  "key37": "55LFwPSvSy4NPLbqTg2LRye6e5fnyzR81PdKAYdtGzzEMwNvAQMwW7kFWxdYag25njTEhuxJChW5ehrP8Ffrbt3x",
  "key38": "2QDQCxdPGvhcXyDuMgKnz5ECYmuPREeurPHeW9N8KP1zmBBUpGqUU5Ker45xyfcfqU1wMagSwvqsgmT4ghanmLqp",
  "key39": "yi9JgzgXYYKRPLDXEx4mNU2TT85Ze2hSNm1jh96MGSBAwagt4QeMo5h1tB5GEShTe9dJ6Z51bgJ9pVuxJ7nYVpH",
  "key40": "3j8zb6tXPbR2pT7nvU1NJyfZpa8HPq3hg3w1SnjY5b2USGR7CqMzTBuderuF6ZY1ewGQs65N4XQEJhvjMC5vhfca"
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
