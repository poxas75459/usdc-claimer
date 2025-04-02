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
    "53QHTpg6yWUSxrpy4R7rAjGYcwqWYKjbidxwpAkZY1X2Ahvxh3V7bqXFbFZodiiJ1AWuLqF6zz7fWE3mT8SKeg3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fVaqAmLLD5zoBkLDgA3iC71YLoufRgLNdm3Pd54NQCEXkPEGoiXeXwc8WiTqEvououRHtMdY8zkLtCzWc4BWFC5",
  "key1": "2JCRJNBbTc9FJwkzxkBR1x4hanUFgcN5Z9CCUP6huWLTgZKzYqvVzStSPF1js4EBMEbbsVpWpcHkfuh9PT3DzPPr",
  "key2": "2uuePbiGUSeThYnEQdgdg4gJvw7f1bdB1vY6gqYmdzbzjaZzC655g4MYd2U7pPjJZVmw3mmxGgcRXXN825upjjbR",
  "key3": "2PDd7zZRVYaxJd56Zv6iVYUfrBvZ3YnFgEXBMEcV13RiJXckn1gub2HVcrFUtNkritFFrjQpRTf64RQ3kCsMSS2S",
  "key4": "3zvAAtxEvYYTaF471npda3Yxzw7S5cYDeg7DcXcE9TyczBDsbkEYu6gQUWJVN5R1aqQfArkMKFHBHsYPe79ujshF",
  "key5": "2fpVE4ekWpwEdpnBS2MzQ3PmLinv2zFSPF5F56uN5fghpXrKDUx3xfsoZasUcPdU6hNbjepuzFP4s8LT57hYmmdF",
  "key6": "27LuWTkQZ4gVjzuJimpcrPQy7mFe4W7xMst1kjTSLWiYGCr7Z8vQmDqjyG73MS8xXFpLno7H3e8A8BWh7xzGDpeE",
  "key7": "2TmNHEtoxAeg7gAzutGnJoQSnpA3LpG9g3Raih9PuSyFfXXa6G2Uk2dPJZon2pGLDLJPF131XEzmrGCUfCc8v4nM",
  "key8": "4ZPPLLYKBw19dYbaX8TLcyRYxjgPreHm65XjcBjid82ZJDNMVdGXqtJM3oijPnJjDag7DxNpc4gt6x1AwKHbXVZc",
  "key9": "3Luj8ecEbHXp3CK4ADfkRqvdQ1cGQLqQSKfVeNo2BkkP2FnbA71DLp8tCXqEj6jyNYJssngBiWi5tXZ3eEbLTyua",
  "key10": "2azFxeUFXxMGp3JYkVb1sht71aTgAKCpnMXjZXm8XnPNBDDFn8B6JWzQ6dVDoFkjCmS5wnorBwsfSE6y37UQo1Q8",
  "key11": "4XXuJyf79drdvZEKy2aYBBvkBAhm1uU4qQ9JZqc61HT6cKMKGTKK1hEqJxdh6F63NgWQdbsVY6PsPySzGG1BaG47",
  "key12": "5e5ZDpt15niK35SyRRQWYJd5yapQVS22CRCJzFYts78yPP1ToiGfVF8UCnrp9gyFmsaYN1CD1tYRy2T5UaDAh7oY",
  "key13": "4xMfTVemZc3CGWsv79L9KaDYbr8H5f6DmpXuWoaMh1XBaoXawtK66X916VDTCph4LNAuFNTgcsSsyJ3oKzqEkRda",
  "key14": "5EevtwAmmABMR5T42zS6GZNG9JWxLs2oaXpNhtandKLsmPqynaiiJeLB3B45HryqN99mrD2jgZKh955YEVWcwK4",
  "key15": "41jhDFkgJn4GYRid7VWvJf1qJda6GMgdR989YaHMxWNidHX5ixYosdYiQnSKSTzsJV1QiVZ7Ur2uKiBR2GXeY2VJ",
  "key16": "4JUAgqNSYg88DSob6J8vrBhu5rFMsLE8aK2N7gaRndGSYBCQhqkZ7kwHMzHuUtLujRo7ygCEPCVccFQWM8DaBV8u",
  "key17": "3bhx4A9tWoPUQVXzCeamypZENr6ZQzBwE22G3V1DDSA6zZzFNURcWwifxYKnNdbABetTLGBvVnv2dkj2KNN5GxKy",
  "key18": "2pWn3piir5nYR34SEaQckvZZXMu2YLXohjiv9RDnmhfmHL9DTqXhKpVHLmRhiSUeDUb2yiJwh12vaBtBuxstjNe5",
  "key19": "3KqicDU4e27toNJsUxLPC115c2pGbLufD6hQHguSUhjYPYvFLQqWhoWwJ3ruFdYb8bDESmWM6d1CYstvmqqsbdCq",
  "key20": "2dFJuTuVYQ2TDYbi4ZWV7iuLfBomyXoHjAhbajkfHEg74zPERBMHan3DzL1XxYoKknLdtuvYHdiRWPkfmU7BBfA9",
  "key21": "4qQRrmeNdsS5J51TVRRFHrGhfTGzZmW4Wbk5a8QwBDpJT7fqGpScVv7wcfdM2VbLULm5UCLb8vdWQPrcN4wNtErx",
  "key22": "2nH5unkAFyptX2p8gsKPjSeYupvpHAccSHcopRAp8JBMExjBHwr5oTj1U7wMhmabCNmkUuTcYnNjbXAbGEf25dMY",
  "key23": "4wSvEqANqeVXKDMhBmMqe6fRMf7t3YzLhxHuNi8zds6pdN2o5Je5thKNqqE8iNoBrnKe8ciQmQZ8CkS2rJJRfTxQ",
  "key24": "okNEisrKq6viQaiiE1HUnoAZAqUtydFNAWwXLdkeKMyHYUAJt6vNsre7qULcMEJqArY2GEY8SpbTuC8yoR6Z319",
  "key25": "3cPrQv27qddjMCtAUDtzJJF4rx4GXoXWyQJPc17yLbmb5YqMYPy26KRfM2DNtFHF3FeYY1FFbaftSaVPgsw7q846",
  "key26": "3PvdoUtYQAeeEneQYN4pGxrwgmR6VX8gCedL5f4R1N3T3pqVgp5nBuGJfMfjGKsdfKvRvsQmTD8XAw4SxB4mHSYs",
  "key27": "2wYdcUZ6siNBMfZseRptcWsNNDSwLwGJFLGSJf2uNRZ9kzgcVSGt8uZaW76PQfRs5HfuaNQfgPGGyZ1R4jakoTYG",
  "key28": "ieVfwFoVmqFg1uhnhYU7Z5az4p5QwoQjoJwdmHReWkJZMDFdJvmmdnGvgbkyCy1LfxMwwHmGnWeWpPwozwEUKb1",
  "key29": "3pidbSAUvGD6qjJSQn7kn8ToBAKvdKuPJyPgQksj67dVCYPuD9MsHpYsidzkepZKeXuXwihfsFbYneNojCrXc5u5",
  "key30": "5Upqrf5NtPuoMhQZFtrGppAsLaE1CoGKRdQkMqWHcvTwzwHkEXa4ddanVbKbi9zJGsmBPmjPheAbadSLjdcb3Hyj",
  "key31": "37oxLjwPYbusAKEXR3CWjuD8EkN3ZMvnXEfWN4DHmavChVuksLRuvSdjPdjyZ8zEuD8Y4VDLifP2Tsy16twAkiCC",
  "key32": "2a9opuozbzAgPmcxpEgx7zD6XMMX6EXuGaBT1YfhqFjJWrWoGTnB5Pd1aQPDB9JD4howrBz3EEgeRJfQ5b4SyFFw",
  "key33": "5grmXA5jU3L4M13rvH6cyECzgj38iBA9cE1fURE6EXKosge5vpaVjfJ9MSnScksBCaChrcBb7XDHd8oq28HZj1M6",
  "key34": "5oX76EYA3aws4k8M5sK5KtCMkif7ocmF5FCgZzZzrqRrjHv7YSxPBfmYFgM5sgLpqxha1cz9kMZwGtCLJk66HWpZ",
  "key35": "4veynFqEyA9qhy7K5bgp1nSgyJa2Xisn97gH7Uy7DxvmZsYNNFEdcTv5RwJKSQK3p1qTPrZfURZFn2Mq5ptw23CP",
  "key36": "3ZLsv5abn11PsmUFm5dv55qkpLBSGgsFV58PAwhQ6gafGDsLkxoE92RhiAc8ByZoaSFWiyXkorYwPBhX3mszPZTe",
  "key37": "MMANHJT4m8sGULtLEyk6bkDk74MHxcL5MbEdcc5SWHYfM1AJa5oKCoFYhzhH5SdyUTriqwCJgZbAZe1RxhZVbNc",
  "key38": "9Kjs17vKQvQmGE3nZLZHtBM5J59R56u9GJSCyHF7weXM5DjZfCzFw3yMvFVyPAMz7cHiXpDCyhHdSv9yGowGrXV",
  "key39": "puwt9iLqpoiR1iHL69SV5wAinAaVfQA37RLM1Rnf4YYtzzneWSRXc8hJQB99r31KymawbCEx3fFcpuYeukWBvca",
  "key40": "4Wgm9TwzWc58c1rT4hMqynhwqdLofoAzprBvutwBcfWgRQK1EuCCgoJkES3JBiKqvzNSvqrVj9aX57m6FboMQeCK",
  "key41": "4PEikBkdsgEG6K63ZFjrHMsVshov8AKRFYadyW5GsjiuBsKp2ESbYNffEjUcPvTjGoHkcCNieu6XR8BThJmepzYp",
  "key42": "2KAZsLBS8pnF3yewoyHTig6u8bUHg9Vq2BhyftHot9Du1prxt24XjT6KMTpgw2aeBgZqKZYDMgzziVrxHG3XChw8"
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
