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
    "2aq5ca6y5cseXuKUj9Yo3NSncnaohMwy8Qxnzzaid85qYMaydF5aP3geND36FWz7TR3Dj6rkq8U9KZxJgihjPUGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVAUXqrSwBewSMb5xttwSvQfwfT38eBTSqVfJ55N6Y6fjxVXkHGJcdJYVwALMczKdUbXc4NDEetRGEoL7Xp88D5",
  "key1": "3ibvEvug3u1kS42DFMyYn7Eu9FtxZe3CEpZa5iMLu1isuoPoutMqaWodMmkXzwVbaZnJ7DdCqGwUuqss95sUuU4d",
  "key2": "Dhe2bAyGrLnhUXdY5pmJApMed8SMk7UGZJk3XefFiDmUH9xFwetdxQ51cdsTvvgKpgTh98kUnf4vq2u7Szky4Ax",
  "key3": "3Mn3vuagBU7yMyyRaAff9L8Q2s6NNdANDgieStnjPP9boZhyuNFgpXa7eoYZJo4DA7YbsSq8MaHTLsvM1snBepr",
  "key4": "67nafsLpRDXkzo1tugGPGKVb1UKPitr2Qk19SB4EhGzHqncQNAfykxquMkRyGeqt2TBwF9j3qgTKqsjZTfYpEY7S",
  "key5": "AEd4qKZpfhzthetKtjctVdjd9n7ykq3uTgVxcuQvFxLKBkvnEa2h4HCXUeqPR9ahZzBYxZW1twK5mK7fhQH7Fex",
  "key6": "5h6Y7rUjLNpakjuyNspC8T6gmVBuC3fjLAcmH2XbqwhwbmyyVKsaU9o54EmE52J2vHCygjK8JMufJkPbg1uGBbXK",
  "key7": "3fakHHcFosEhphxApCDPUk89fSHJBXtaN14NkBR3gzDJ9CgZUVwbVQz59cE4WQb6rUtRWfq6E3U3a7hCQPvtBnu2",
  "key8": "46g4XFvR71XztKAD3gfqqWGnkVi1t9u3rmDEnjM5bytrETGL6gSR8N8gK76udaSdHCAKAYrxgfXFXPSrtRu6cKKA",
  "key9": "57921fTk61nopvaPPpMm3JyaG8R9KjvUT7fx9TNSEBHvMPu2m5XbLU4xtn7c1QUCDPMUn6gDinJkvfD9uami1M3P",
  "key10": "2HnAGU6pBjhqVDiG8Qh5ks1dbUhRHicpwAZfEjAzuRe6PAUdPyvrcYCVtTiBrpa2NBzMjf58go9EWRdFLK17iPNi",
  "key11": "2DweLvqA5eBaVFNWJU3XN11arFoJ55XKHUt1Uunh14Voozb74CLn2Lxotek7yA58LsXwZfToiRRDEXx6x2kYTMEu",
  "key12": "2vyUgfe5G5e4AoN6MmAe8xfQqwGvwEQtEJY7u78nnGZEiWqrFygk6jnZPTrTXLk2eAkaDuHMpt5U3LWzshoCZmb3",
  "key13": "3VxbDPji5yNKgPYJPD4VSytoKcgBv9JofEuZFe2zoXTcFKmk4fo4BMuBjDMcb5dZcfvQFpJP3ae8jtegsbGYBojs",
  "key14": "4FVtsN3TP5HeNCTfoZyoeCn17zDzKUu5CewE3CUtEdUXGfi4DTF6EqKXjMMQsoohd9JoBTcqp4KueedFFoBsaEhS",
  "key15": "2E7p7YvNAyrE6gHZRZMvT8S1fcueFZAH9uLqQR1v1pgjEPPhJMsnTJMkWz11BCDF4GcJtsDUaroiiiqsFMZHBGNd",
  "key16": "kdi29rAhvKyomSiH14hwwt5qXTs8mhVobqnybEQ1aGoeNbyQuZRU294ayTSmF4bieh8a1MyTnEHh3iQxK7ruNh9",
  "key17": "2qJTYNWAYnKBroTSYnJQcByERJkm7Jmw1ca3rw5PeJqm9pCWdPkZ7VKv2WwBgPCSWfyaJNhXaWX2hhhGmCoGQhWF",
  "key18": "vdH8KSQrs6VR1vwy5rtFKyoFCmjgGiqX7ccnDhGxUGwGNDKQW662tm8PHCuPZ2P6KjoSJLx3bQwazgEir3iJMtq",
  "key19": "51xMp1wRTKRHJq8kuMBNEM2EVbnLeJEsXBrkQEHp3JVf2hTbH5UaXtft5oNy7YLfW3dw5QUGnv1vKBG9FuMJAW1V",
  "key20": "4eCwwzM53e2A6yEXhTFExCrB8pGkNynLLTgr53jPgpWBKMH4oCdcx8JtDLSYQ2tucjA67jbYm6xdKnuU2F7HNNVf",
  "key21": "5pmLaTyMPGMp8EEh9NzdDNhm4ooL97FRqAprh5okS79U8zSbr98tm5JU4BH1VcDojVL46xj2UWy8fi7KjEwXxUU1",
  "key22": "5J4dJa9oYrn89sD2QG1QtrPf29fzyjJ1ADGoAB1TjWoGssPeMjKwzE8UadREqKyMgx2y2894ZbqA971hLv9hQC7P",
  "key23": "29KQDrvkCjuhavg49HQCtGPwXWUzcZNZN4dqA7Q7VFpbXZ46AAR46TxYsbcA5LWUe6tS62jQs6k2EesPkmKZxjGD",
  "key24": "54iDmKs3agNqXaS26ghUik1zoh5YUn4S4RTa7M8vXUTf7VkjGDYgAEjKHtCpYDJsYd2hNjyd4wPR3mfTguJ3wq6q",
  "key25": "hWekKgQJ9CkXGD3e1cjQhvSnEw3oVxWRbDU34mXYqZwTpmCMWcfGnXV4ZMfqLa3BAqCHiQWkjsyVksKPRL3mWCn",
  "key26": "2abTXxraDb38ZyqCRmBKpwt431jM2LSSJSyNbJLQANvDNRpxaNY7XnpG87qxW1sY27CmWs16agqqdR7Fkj7u64oA",
  "key27": "64ibrW59eE7yKQBG5QVAGiDRq4HZNaj7mjrJPW8iTZkZjdndyNR5Ze4WeXTfguvcbA9rMyY2WH5WrdcscTFik1zp"
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
