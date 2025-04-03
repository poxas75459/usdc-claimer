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
    "PHRfnNUsWKiDcwdz39Jf1h5uGZ7GXhp1DacqfZTzyZZ6DgeGH7RLman9CJbLCBnBrFdW5QFwR2eQf6jxeSANE99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21iTFrepr3ARHCMY44wtcDp6jynsEYsbsdWWPRBtNp4dztYuMShGYx3bbZsaW199b84xem6yEQHGpQj33s6vRmeF",
  "key1": "3GpwYnN8f4yZWr3wTatgFqrohZUXt8W6L3KLrbr6av9D5WpcvE5Rdv2PQwZvQgN3gj4VQd22LG2tk5eUh9rcuRtq",
  "key2": "4yFMqbgSUA6Du3HPn1Vx8NZYLNNKe2RAHGJzeNWyjXZVohSh6TV7ohRDg5LLGdvEV8CiG7nNbcqRD6FdUiP4KTTP",
  "key3": "4AJHUP9tshBbcE2yTWa9FYofo3isTwvSon8fDtHYhtN6MiqzoMRxcTm7j4sBAt5VwFuRgYeZJcKt6j4TjvHMaoVf",
  "key4": "5HHEDoFQqemBYsLjcuUrviwqXUz2qiqPjDvCbThXZTWFwCRZE2Vjx6f6MLzD3G2NCMKVX3jG9rz1D2jAYHb5N9xs",
  "key5": "4UCm1jGeVSHFWN7WeAGKDGkdA5p7bTEUfiC3Zao6U8R326ZxKj9wp9gg8eVBLK3Hmv7fTrkqAWeRLAZ5Hkdrcbqm",
  "key6": "4vbRJNDEJZrXAiNRo6Eh4KbwYNDbJSxDvgHufE7LyzX2NTz8e9JRtjSWgvrdghqTv6DUfHEAretxX1JMHqQcKgtw",
  "key7": "3Bzp8n9f2NfhAadG2EimcAyUvWd5qHt3Mh4dbscFt6fL1RMK47qxXPpYm8UfWQ8Axt8BSeyrHBtUwrtijCWMDnoi",
  "key8": "53WnKm2AhMDYob6GFFAmLLTenM9m9HwXPb1zqYL1FEQGVQ6VDLVSazyN81T8fsHkngUuxpvNf6a2PpeHZKuDDgjZ",
  "key9": "3P9M21kEcYpxu2KdXdzKntHFFbNwwZA3AW396G99uf5g4d9CEPwZuixofiwBtmHkH3DdbVvUreCXHuq6TbohVev8",
  "key10": "4ccmBDQgJ7E3kDsWEBaDGVBkqaN2smsk2uxgMpGJ3DizzUfjKX5o7oZqKhiuH9Ksx6BpHhNFz1BprGHAvAUGs3oR",
  "key11": "4Rm88YCeEBpFbmMPeB5a3waT9e97oJSmhwmAbNsFiKCu2uJRypmQojXA8FSmqyd43iHGfnyAhYFxApugYSyMyj3M",
  "key12": "5wbqJFmQ8mCXgkdcQBQgFNTGwkMzFM34U6PajyUyY4Q8VnHqDbspkc3ubdXA4ndkFWLsvyz6FiK92Sz7e1K35kbX",
  "key13": "65Gcmk6fKsigjgAMBYDFrxHeHvGNqsnjZ1D2BM566DJa8DKpdqXoQR2T1X23bAnj1TYAp5kkkEKLBDxW6aSuryse",
  "key14": "fPMz2zBucnCpz2cNzMwd96XBRfSv3WDyopDicFqsvmTRGf8ZyTGSN4jqHFA1sr73RNyYXQAFtUqRuZwe5h2TWnn",
  "key15": "QPs5TSc2qEDnL4U7MoBYA4q7Zo6vEUJJM8hHR5ZKbfRRMX7cbYKi6Sb5C5fPbaJmnKDwFHAMeiD9npe9xyvT6E1",
  "key16": "2FEsPgUvhuN4ksxj6UsEabgfrtiDHxUySUoGMFJLrNfX7Y8eKWCVBMPJKJsXq88hCgUjAJ2UvgzPYpcuUXkectJ2",
  "key17": "XxQouD1Yh8c361EAXZktQXsU7LXPLwCNiYzbhhE9WgG1aph2pNwPkCE66TstghikpEVcCxsE9f1fzyQa8QbezyX",
  "key18": "wurgU9pRAUcYnWjB9rQCEyms7eyekHnWMFxpt371LiDaMXhdRZcacHbpGZQwCdQQTyNFvy9Vt1xeRwBJ6zME3EY",
  "key19": "3qNVHv3nq6oScUYn4uNaaUN9bPTheNazjThte1gov2sEvvu44MARYRjRX2hZAoq94ALYnu2vtCm2bpGzP46BfBig",
  "key20": "QipEzgw4zrJF6X3Ktm63NiYUheUGRLuCtZSy8EJwMga1nPi6D4q8ZdjMeJY6kGv2D3J6qP9EZmXsPYHSRE2rfAF",
  "key21": "5t6ayT4XFAeoTpx96i7UYSBDmf579uj7vGYPC9CCLsTdqqEzF9bDn9hi7F4NAB1ZCurB8Kxx8UvgbeypJWxeczgi",
  "key22": "5JCn9Bte68x5qBpztsvvw2pcZy24WcKPRka6XTcyj8u11gW7KJuSnG1iGh9tBnr4g3ouca6uZTYpdPcjTc4yPuQU",
  "key23": "5LPzftEuVaLLBDv7XFK7v23qgpF67c13CatpfYWn2esPDoghUeLYBcZiKsfsQDchop9ATBXRy24HWaXzbdnCVRdt",
  "key24": "3pbLSFv7i2WEqtBMQKSWtssHWC9pGF4mPSZF4WV5Wb1daFNaPLyR2AjVafe1R7Fm5f6q7zTXWLDqwHmkwpyRrPrM",
  "key25": "5F9YXxZa1Z5vP5Xn8fNkGG5WzMxypJbe4aBPieLo2hb9a1PDReMLroRdgXhsLcAsgRrtxtLPEMb3ke5GUr2wf37L",
  "key26": "Vzjz6CGSL9K5wqV2tsy8SL5FNmcPTVTJuNfSZLGmrZaeKaXArU6NZfPU2rnMYqRjVm1Cp5JFaL2BCYozhz84DsS",
  "key27": "5wf9UkBbatANnSWFMTo4srefpE3MnrQ5nCrbMBy8UCYDekeZvgRGtmKCDEuxHnyk1JKEHknFjnv3y1MvAw1Bsfac",
  "key28": "5MfPwtk8iz6i8aTXd6DsUQWm9dMK1HBs5DwUcrx3miNV4SUaYNReKsTLXcRhnkQ4ZZWbtGWU2g8P6an6CLf6E6TB",
  "key29": "2deyPgtGZLQQQdtndT6fRJZYjbernBvSJFFoFgEd6fmDenJdy5xnzpdjrBLENrL8yxbUb3kg1toLu48QPmFaYA1K",
  "key30": "5wWx1cJN1MnwAR52yJCwwWgijk4JMMzpkHzdimixWRM4MkWvGaKLVjSaeTTkxY16EDaQsajwBpagDitpJUDXg3rq",
  "key31": "tMCeUoQpR4Hs1WxKUqWqPp5i36YYBfyGYVTxrs5qdwQQWWPMwZg33xiLwEamxcTEkqgNeupwtQ5QuazmjtkTC8J",
  "key32": "23VKTzPASERwi9xmJSvMcbAS6KRxbqikCJAxqtfpemBMJXmo18MrhzjbQjafakfKcTER8iP6NwxYcKnf22g8Vf2E",
  "key33": "Qn2r2dknWaTJdCfXkuxpVyLnx3rFMS2nUAS15pFn3fQkyzQckuVRzhMYotmyRGz4mdHuueBvjL4eZzGa9KgrvPP",
  "key34": "5VzaGDujmTATyenBQiqfzkE9Z4Bw6StABZKuUenwJBMCAF7u8Ad9w9GRfRs81Y7kr6JPrpd5sPMEUvjy4RBumwCw",
  "key35": "634NHftZoqHjnENUm47X1wTdYHwCFmW5PeqGjSZ4mNAvqWiQ3FKb7q1QS6RheoS4YngVXdmfVPE1Ju3GWvZsfK5B"
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
