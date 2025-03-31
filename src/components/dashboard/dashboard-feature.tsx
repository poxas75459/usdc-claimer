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
    "XrSbaDrR3ZLsCyWzvyyQxAbUkWwLDeLShtaFz1iSMJdhQcL35L9S1CxrXbWefeUdsCD9cjNEtnFW6jmzSKxwfAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1bJf8x1wnfwMAAfZMa8Qna7LJRe4uFydAqQ6ZacGpf6Y3z5vkNqF6TiomMU5EHzYxU5DMqLj3b1Rf1gmzzCyuL",
  "key1": "sqGwRGVdF2NuMWRL6tyqCGaQvhMjLJGgtBc2kedpd1rQKRuFNBQ4w9nvtVBHh4BbQnfdqHaznFdn5nJL6yPmMnK",
  "key2": "5RpHX3unnoyMEd4y21r4TpfUXGRrFjiQohoziJb8hok5LbBm4v7oToKGgHSYVSL1NJo9H5E4ZDFkiA2bcizXrP3X",
  "key3": "3e87Sg1MYJC6NNovCvXdFSJEoscyXEEEDCQKhpwVvKnkcZZ6N3dYJpcFReBmeowpHBGcg1E6QDrE6K78EXHeUb8V",
  "key4": "585grkGGSdqqQUQJbmsCXR1erK8FgvnWjjMYEsxgrD9HnB3LxskUNvU7TrqwpPjBMKLYoJeMeNgR2hGGjnvZWXiJ",
  "key5": "2R8Sw4YZ5CELDyDfE7R6p1r8qsZBnjCEeS7N1XCNmFndxivahAUkPyFtQ7PQA5UnPtCsocfwLrbruknAvqqfrbmz",
  "key6": "36kNAxG97krrfCYCRHN4SYsokcfq8VkC2PCNfRTLEusmFMJPXLWmta2gprQQieBauKQmi182Vw8BFxU7vDRPYqSb",
  "key7": "2F7pFPMyg94aavi1J4EzsvvftdeY3WPLxeAfwUhUaWE5o8dYuCvXRfKShqMuoXiGa4mgC7WtyyF3ygsNq4v2qV9M",
  "key8": "3DNE4fxVWgbjSRKRDE2zvVxHvGMZJrA2WQi2QqaH5U2Fv6BvMcDe5DWysNVD8sTMgkqWKZjuD2RxyrX5UcUauPu",
  "key9": "3qPQwVmocmUe5jVJziJcUYudA28TbgeAf8Cn2pTFygLUSViKG1PGEFJoUYb1AUwS73vWRaUFuaL4KX1Abkw7BU9q",
  "key10": "kp15HX8uva1AFcgrTn2J9DhZyuWUzrrkoJQa9ftQ4fvLtsmvZQXKT4dEpDp2WtPJKhkZVKiDLF4o7dd15vXPMA2",
  "key11": "4PgV8VbkyFWrJodWBeq7ctByxMaMd91VyaRz3dDWQmEWUMU9VG5QRYocaUva4mJHc2RJHFT9d9QEgd3vGNWTjPoq",
  "key12": "hDMuhCncf49Xz1yWrCHxdBZiCssBeTucHGthLwZTEWA8e9irB3JuWk1zP3EyU6c65rb4D6Kh7JrWXd7HueBram2",
  "key13": "2FNuTqwkhzm2B3ymXp6vr58MkjvoHroZkYVNKMa3CZ67nv7EW3STiLkQWrWQLCUzUiqLzBXcL52xX7sv4F1Qr49S",
  "key14": "JZ41c5jDJuDqbwXbsJ38bskAE9MJ2vAtcru1zxG8LBwJwKghVsLRv7bFuqsnKsCz7bpGcgy1vC7P9Du2Q17quTR",
  "key15": "5csP9rFTYBM4vyXoSG6ui4JrygpxujYRHW9H62GpuXtm2koPo7Q2dMuXqC3vQd7ybkxp7uwCsm48KgMQuYjCh68y",
  "key16": "2pX6wURPGhjXGsSw73cENtRnfTBLwfa86bEq4swi4DfAXcXsMgkEfgKWYjJaLmoHfwkNxaitCQcuB4nonHPhPJRq",
  "key17": "4Y2oGGX1vkSC7SRQdA26mS3irmDydphWspaENE6KGWJycV3NRnckxt5T5ci6iia45RU6Zp9gkgimwmxYLCYQeV3y",
  "key18": "38KLU2T6uGvKPsvSGSCUW9ykiHH2UoDZHK7S3M3LPSRZ7wrR2yW5S5e4MkjozfVSaMwexJazsjzqKs7GZFzAyKnn",
  "key19": "4Fkn6JfxW7uSDw3y9Rgvp4iud6eseqqiB2tYCTHzWS1wqnfQwvk22kh7XAgTSGcxqZWGc3K61fmqkLBkzhpoFKWD",
  "key20": "2KKe4yucHinPKNuC67iCGEdoqqKVHr5iQ8sy6HspPGLmBbH8Ybf3zKjb3jxGzJKVRFMdKEK9Qemmns4vRJN9CfGp",
  "key21": "2Wt9wL5ravKuyGdhh7qXMfLPjkLSTSz2hTqkmm2MAsywR6xJGqw1PMRedWhfTTzktmSbYRzCiM5AXnWzn5k68cEB",
  "key22": "gBE1PZ2Ksivsn93du4j4r1mJ47RvkPEtvP3pSVyoY3Pqo9oxW63CCWuHQhfCqENbQFJc41X6LRE3TMAtGwNzFmb",
  "key23": "z1qTNcAA3v1NPysBinSjSMvYqHdKmAtivqFnfVSo6aApKu1UagfnWpi3abxqs7nCJoSJx3a8ZVj8J5Hn2LkNEXX",
  "key24": "38bMKC3nKmtBTEXiPPHsLEHknfkvZDYp5unva7S8KmRPcodww4sG5tum5ye2j3jDzEF4DmzDpULZdAg4PcyEkVn9",
  "key25": "dmyKFKSanV3y6kQ6aQGicJim2d4RDUeXC2NPa7XqT5iTf2EVfVSx3gSMx519w1dNaXp6jLL3GS26VR1zgtkjMcL",
  "key26": "5uNJHBoewhKVj55BLwJkM9ABvEwmza158irqEHVCsZNWqWJwwu8aiRvyUsk8iYFLMUBKhsyawzhMJ9DE2GyxdpEJ",
  "key27": "2wiXD9XPkZ5Bme85HNY6jbAZ4fSCtPC2AouZuiE1NrKBK7VvQc5GSNEA3qCEjCDsyq7TtcJGC9hb4v4cnBaxEW1G",
  "key28": "3AnsXkmcHGtuWpPy4T1VeQ7RwwUGPJVYbA83g6jJ4ivVoW89wyz78eVYAHbUEfLBXcffdnSkU31voX5xQ5cZ5TFY",
  "key29": "2yc3odSzs7PHYkEFrE6ZZRkjQL8ghaEsjGBvoPNXgL3S7MGXK6PxrTySwsi4pmeFPqsTNXn7mhCwJGZ7xH6npJHc",
  "key30": "2VBcSEmNKKPWMofcfQgku2HhuazoAK5Qi6ekMzAbWSrzmPmm9fXoFe9z6H8moTd7imsN951Kprx6JQqzp2ZNvxPB",
  "key31": "99gkWMTKTG5C9JfjJ1ka4U2JW6tmpioVxDo7TuB545yMZYbKZ8xxf3erFQBT5TikbQm6etFwhYgVD5qS4iSbkqp",
  "key32": "2fa3NJrfgQFWBcgMNHen9WEHLYC1SM2db9WAtcn7kvC4UbNhEfZp5CoCvgaipmex1pf2Gv9thwZ3EZ3SyjbHxosn",
  "key33": "z6EMUu17nGToWm8hpqtSiTW2bxAsSqm5oCZz7sTLedUupmvG9E4FNu4SUnhVPdB9tXLLZMsa5L8LyNxBNifSRPF",
  "key34": "5jEMLvwtB84xtiV1hhwKkRkVHSXt3hzCXjAm7rbWBEwDNbSXSV5NPWQSowmK8k5HHTy8bTfQUVHNsAqbVSkukjDD",
  "key35": "H98BZxGDuN4vSV836bTMGsgrNuifeFmeFmBTaeSiNLgEFuyUZAQM9HTAUAfkpZYv8ASxpMpcaCe9UVpK9RTV6FN",
  "key36": "3cFvwkh5U88XqtJXesAPcYEtS4Sm5MUV4AEuVUy99C267GNxRoJeDQR5zyXf6njPQqibwWGRbVPu98SvQT5dQMzj",
  "key37": "5r5Yt5t2uMu5mhiLdUqi9zLm2PeZzikHo64mtxmtKyAohYSokPbc6wc1siZCTLkR4Tvwhe2zx1Tnf7Sd2hTmWkby",
  "key38": "4874GgfygtZxFNnkeyH8ZZPnqvPeQ5ZhtDau9NLrAzisPPpGtG3mmTM6odnkYVaxXhE3WV8tCeypDe3Q1WaJmkfQ",
  "key39": "4xtH9sVjo2MMdk9m44Y3LNTw47gwcdgksnJsoPZH9TcDkYUVFgZPTHkiqRRcLAGxKmk9SQtTujFVbphjzjG92N9X",
  "key40": "4PjTchH9SjFcWaKHovuXrKV6Nbyd6rm4yKM1HbdKDBLqY2NnrJJEmGxPRr7i6hfu22mFh24PJNZh5bCJteJWsUvi",
  "key41": "3QUVBiziPQRziJrWnCdvxd3eTgDfgvuEAMBGzHUVcXXsK8tdpJCd6Lmz94788ekx1hpVS4xwp5JJfdoXXFhrsK69",
  "key42": "4zUc31VQFvs9GmRjCNRrmmEbWY51hMzkr9g8m3898Ld4Avy5zgXEk7rWFKNggYugPcui3YsBW8oUiMreMF4FvFHq",
  "key43": "43hgbUVA7kZvRBJjYT4yGS5DafJJdvQHD44huWzTJChYp5TcvZ96Fvw3aXQUe8wLQXgeBzHVWsdmGBVjc7AmVBaP"
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
