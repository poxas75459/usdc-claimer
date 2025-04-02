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
    "2PzgyPrdw2jBPbggGNK1VftVHboRJAnh4a4GCQWP2KEYxpiE7ybWbWHML8DYfxz4Ahuq3eBPSYNEB8CGGrkwxKNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SUp9b1X7HPG38vd139MRznV7XR1pC6rt7DEzkcMinq3RDpCgi9ZY8suGwrEnR2Km2xw7YLWfyU2qMatBFTBv5uv",
  "key1": "3B6BQceVZovVNEBFjPH2s8GVixGrRWSbt1tF9d15TQzkJ23EvJYwf4ABkCAmGRonXWKG8nXWgmDRc4RaN73J7vFt",
  "key2": "2skQe1M498Q2uJe2AaJrnP6JGwkXw3PjyjD9DEk87XF4ptsXdQTbosWtLddDeYy7F6zFiL9d7fdwHhCcE2Z9B1eE",
  "key3": "5sXmkWFadTuzwbhNsPENPwtAYMuEQsUgrQaQctvcpdvyLXWE3K6BRxkH1QTD6jUDJ7czDCVcBke2NxMue8Aj4M3B",
  "key4": "2L1pmMqQ7asSpVC4HMHP54ETd5QAJ8cwPdGS5du5vHyNyUkJidxG5PGk4NxfB7nctBqsu9fMrwNpAwNagtyTEfh6",
  "key5": "5PZUy3uAvbqrNJc2T5nkFfJjqQ1d1rSwazcYAjsYpmXk44ZqL8FZKp4PtfLvY5jHUjNpDrbx2hWTsoe4Q9yDBmbi",
  "key6": "3nhGgi7s97axYPYCz8MqwXhaNKa1BfXsu1DTTHNp3U2TU6yxGWhJ7F4N7dGCnSSzRSYyHVnkNacRzMfXbVQSi4ET",
  "key7": "ysUsjnoNGwpnjJZde2nAqxQcWvGhzTeUSVG1jJZmKKU2deT71YZwiBYf5PbBFBtU81xWhtJMNPGqRNKT1MhGFyg",
  "key8": "3zjzvN3tQk3LEWhUzL1MQ4PSYNp5TpXEnz5Vvnw2pmVkV3WqCBwp1ThSupk7D8QsCFm2w6KKP8UyUsykqb8hcaxp",
  "key9": "29F36GrZtFs8woM2azECZjpUwQdXksq7QqXjVTTQ8zfnq9zNa4eqwDgjeGLHB9qbAJMd2HBRjodFvWo5jVUpWiXD",
  "key10": "3pTqQ6MtFNz4DK9nEGnzBwfxajHo1NLbheCLSdV6ZtaWAxEJF533RX8YzKttXpc56xwcF9KGB98SDS2eFVddX54C",
  "key11": "4jpCdqidWWnjs36VuuQeTSNntzxAPWNLGttn1ytQX7xBXHXNn4VxYqjnkrt7DPPAHBmAvAWdBUtUjN5w76xXGwxX",
  "key12": "2xZkFPR8xxNW2ASE32bk3t1ux5WsEj6CQyrciUwoNsuo7wpFZEi8u9AZQxRXq8JUUq9a59nWmNxGKC7Qa6bBSGVS",
  "key13": "recEc2kU12KPWkdXYVimeSkK1CYcbGAJ9fXgz67ws5qRLMRQup2pSviUV6xDJdRh2azQwZCZeRYpFMEHXRCzxUU",
  "key14": "2GwXyrDmeUNMxK82YSEjvVbgV3NbVHXUybhByKJwjPQeNoVXZAe5ze4qAREVTNb8sxsRdPuPVWzYAwhg7BTbzTGH",
  "key15": "3otChBrZBMjWYfGaAKsQ318DdBqZycor2aTrbfcQwX9hJaJ5tQkQ9AdemZ6ibjeJ7Ee8qySq91R9R4XzTZekmNhZ",
  "key16": "324tpJBM9iZiTYPtazkrY86DXce7k3eMn9ZVZxFdRWxcqcGbT25AaTgMQaBUtYR7weXLXTiTg5Sgcorpw8F2bA7Z",
  "key17": "LGUNSf1TQ555J3akuo9p388tWBD7YVb6ZZigU5p4Zz1og2DXtn4AsEnkgaoU8pEm51vRfPLBgFvWyb8ZEaernvP",
  "key18": "3bUEJbweE2WvFC3b525RGM6fGTMa1mY5HuA1cwQBJPjRMdaQbQdefSUjAKkKfbJwxsNPwS8EbUY1cYYrJ5UfWkc5",
  "key19": "kM1NTqSZdYU1bVK8QMvDywgy9FbXaFXLjuaTDduP7whffQehrfmn5QGTBs9zoaYexGrKjHRci3BKPT3Bf1vbVQd",
  "key20": "5eqjcgAc7AVwjk48eSC9tmxYtCUiGv6xcw7BVXccPvMJXM71RuRWf16NfvjpE6LW4rE7tvd9NqGk59wbvk9t8L8i",
  "key21": "3fNE9L1QayLLWkKbtw1WEGE5nWaZv1VjiLWwzjtby2D1YcVdC2hs91HYoGBx1wU7Ki2qJ7TBhar3FJZ5wwnddu5C",
  "key22": "3pYBaxbH5mXnN6KBzrUEWQ12seCgjY1FK4wYp6xHkJZ4ahpvLGWHAJFXxyRHpkLzPucaY156TYKPf8aRZamK27PK",
  "key23": "g3xprfUtbsHeLZDk1MfiPkqejvGStFq2zQa5n1L1VWP5oNskaNWpLbwsLZh6uFZAsHNas2eHfAxheBB5xLG6h91",
  "key24": "4yoPqAmJRxMbPfoNt1YggoBs18mc1UBDrzuTiruJYWSiBvL3yQx36c5i6T3cTkDDYCqKVmtJE4DqvfhopUGMjNvH",
  "key25": "ZSsM5VGKrFEDbNh2vnxbpUfr6aVoF13t4b8fRiZqsgnaTiwNmLP4RXwerSxAfxMAMEG3ofJAU5cGUvgT93W37Kb",
  "key26": "4vkvXxuDEWJeE7zSAGGJx44hG2jD98UnQotmG3bCpvAkHm5b6QN2sZjs7ZUo2NxFkWEkWpN9NiJGTRHYDnvo684E",
  "key27": "4jDLZzs9tPDRGtDzkHPeZCi8KGF1KkgvLe5CNj6BKMRXvpYUbi6pf5BVNu57ZkUKNNvSMMbbFT1pCVQvptNWPRhL",
  "key28": "2eU6Pq6LAMRNYSEtEkvBZddvsHLhEy7GvEBZtw4GEAVFLJdidR8Vs1Xwy6V3MF2vR6n6moWVH1jNnsUsE6SZcFBj",
  "key29": "4A3EUfkX2hE5WgVofNVqipFCW9PsnfE3P93RJWHYDugxtg4hU8eke1ctt2sinnoV1scRpJTJsuQdEMwym2JUiAj5",
  "key30": "4AMZY7U2N9wzGaE8HDfsmdfatp1Vkp93vK8YeWWrCa7EARYGsuCGQkhGxyFHr79aAaSiBQhgZEVpX3DAdjMBkT67",
  "key31": "4B5NaGTdFNXJHsS1FApgmAoFofGnK89a5gqBc3AV796JuC4b27W44uVUudvtZYdd4ZX5CCpyoBQ8R7B61cE7rA13",
  "key32": "5QnAh2LbpMciXM7oPaU6mkH2objBuaXpBF4aWsiNQq2aZudDqpzCXxooZ51ZSSbiH36JB82g6pYaFwVDpz3KUG2N"
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
