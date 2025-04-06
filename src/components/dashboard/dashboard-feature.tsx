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
    "4DpRez4fHv55mfu2rd93m4AMGuVAATqT7caXudvzMpbZLAujddbX1EqKqhmLMXscsMd6CyipUaRhMzTpDeUhtTyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oU6KYnyFWqLbpMUgywtywvCwjaZz1bhoSfdvfkeZ9HZ1njeCxTNJ1yiPY3k4qg6g63E9PrsCFXjfgPatvW2pbrU",
  "key1": "jMgBnrimNEDhRWrwnbYPkARdw8QpAMDB4SXQ8y6M5WnWvCM5RhKraU9bis8BbYcN8idGTqWh3U565BdcHuXyJcv",
  "key2": "5x5QUQXHc9UxNudg88HKabiYRAw4HDCV3V68xDaig9D6djUBzSXTwSdv734gr43XvNTsuYEZU2kfxD2Na21vA3GH",
  "key3": "2J7cL7CS9JKmWnBt51nGNwAfJomE33oEGuNxKzJywn9BUByY8BnfUbA2zKBjnKmDfjq3cAcR7uYkXotNTnCxCAQu",
  "key4": "C6DJNJNPjDFcu8ArS1RtWusP221qoTfkQRgYeghvp2f38c2ppVBrNuT74jErn45t7LfMF89sLbGia8SYsjQLxqz",
  "key5": "4Ba8BeU6YM3w673dca8fd7LAtmZktakhUTytV5WjudLFgfdjD3nXXnqgPP1v7aufVwc9bibeM2uvLLuswc8yKCdR",
  "key6": "5Deh8pcCnY1q27xENqvky2QepYbBJSFsBiMKrpjvp6xPS9cvFSL26aShxgr3RvuGWQ52KEXySQ8CZSGgBdh1ULfj",
  "key7": "2RRiqRDfWBqgJVRR3ibppzVGA4JEAbxgtT5NUunswZZfqCZCJPwx6SDZYuZrFeS8WqECi2XNH7sDLaTdFTNPbunL",
  "key8": "z2tb9V37iZs8uzLC7LrLmrnYo2PTKk9qYsmNNRQ7oDujqkW5s1ZW7oJ2NnzmWjgKBdahMw67tEXEBouwctTBrCD",
  "key9": "3Ju8GQiN9WSuqnbfHdqRvfHrQqrT92SKGaW9KQPAzYF9BqaSxzVvXdqpRfrv93cywJ5k4Ajw5k7PPQbaocUQdbPu",
  "key10": "3Y1NPy1UFBosa48JqFg8gUSHtha4UWEKDgaUrhPaHR9osyF1VE4HfL5cQnqQWWPSvDTs2RDrHuAGDZmg5qSFgo3U",
  "key11": "4FpcVnktMCbxEnSYosE5mRvV7gwBj5R6FTr2CdmGSoFa1czWGhLkcj7xsSm3QEKCmGJ5gdMYpULV6F3aksbeETQq",
  "key12": "5qgsZ4oRm1YYnMwYRzX2iwC98pBEL3WvcMT8pvXuZ1THuZWk3gYewzU9G66RzNSCzujNGZaqY2AJPxj67YDVQBs9",
  "key13": "2WTDph7Zjmdd8UTEEAtpthB3W63UmvkJckVDMmnwv7H1fdhvcmQD2yLQFLPrNmFxmcx993EzcPh3QzGhf7w2KpZa",
  "key14": "4g81zxRtjvq3d8ojYmv559QQr4DDwbtJuxt2WuetMcd8SrgWo7uEqGZivicLjnuKthxSTLWHH6J3DySxVnxcGEQ5",
  "key15": "5JCkhSBQBBGEAXALp3191C4zbL4Czc7H4rg14rXv5xmZ9cFk8hS5ZWuM4omJ34dRYrQXfSW6GDKzG3EzqKYTvohQ",
  "key16": "q8LsPXDHckPuCWJcQ2eagLGffgGcq6aQj75Mg1UqHCzsTUT4MkFjRky1WETvapn5iVmK6oxb2P3xtwZZRNcfMuf",
  "key17": "2Nxzg81iDhP1SW4dasxPBthShsy4K3YxcPACq1wprtUHjzswiNqyysYVhcvM3ni9rWzwt3HWNHGLyHaj4rDMj73a",
  "key18": "3RUNX4LriwA6BuLrcC9bUYsiV4Tebwh8nAuCTVw4SVZeBUFaNzQ6ykgoh2SKPkg1W4maCHPK2upzS88PzuD3dE88",
  "key19": "4vewooifb55ao6r2pQ8uaSvyqD1oWeJrQGhop37WGfcMkKho722VNHpXZWh7AY4Bb3ip7uEm2kcgdwABMTUFBWQo",
  "key20": "3m29hUa3apyKhrF1kk2Fs8R7DknjCWajYvagwz1MQs92UYaA6pGfhBZLpNyVWUK7GvF5yQJEfb8KRHt9doe4TNV8",
  "key21": "5N4Ec65NnwQcNv2Y7K9NGygvwYU86zo8BQzWtTvN5zTonmuH1NBW7zXzA865vKqSSPJnyEKsFpoxHfT6N8QpexZc",
  "key22": "27A1H8QaQjGs5PJjSmtwEeAMrAWV9qHZiDc5xWawz9rUAujv3oxuhTjZHdYWAszmSoUoPsHwThWgForqzuj3dzCe",
  "key23": "2QsH4XthyiC3vvNRi6W4UsEVPUZboCpMyqgF5bS6y2VpUAwQgKpFEQjkiSf4i4ETwSrQvpJDTcbSZ4W3o7K3mUWF",
  "key24": "47wUD7VynTFM2oGr5FZy4bZid3vuJPeNaLjZNggKnQiCgeTxFWUATKnMpTFShecketkUfE819PddM9iujsiEytHT",
  "key25": "2Xc9UKLcsGGNch52TXwSP26MFiZgTc41Nw7MVmEt9f1YBXTGEDUxTc8qJtR6MFBoGXiyDWSkVbeC96yPrwNVpnbm",
  "key26": "3WzdkmjC4tjUFqF3iEnwVyNutqMd3kQjKQ1P5fbYdSx3Qeib46BCDL3UGspA6RQCws626aLziQECGogSpFeSTEk5",
  "key27": "3uppuXyoPojjprdcxyNB2FyErTM7FTJLSWKzGt8ehR8BjBaSvuKFMgmdmnzKiiR5HpJviqMoYnoiUrX1Eq4nMX3c",
  "key28": "4uhdsCZhV3cVQ8JM8rexHGKyAr7QzqMknHPZdPvmnSyKjEqiWd7gLLuBhS6UR7deVXkGLnN72UASBejwbouLYBDo",
  "key29": "4E25moH3jLbdY1MEQK3pSrcdpvB4chHVEik1KtGGd2upfeZ9wvqVMgR5zLgzpQWAXTrQU78mg6oHaZVrn1uRSGZm",
  "key30": "42t7W8eC8aWUkXpz2BRR5pM9SjnggsswB1Dyw8TZpNPavMuF4E2vYUPwHE3tp8fJ2Q9oRzYN4PaADUZXq7iedm5F",
  "key31": "2EwUaYRRR3nL84QcWCqV3omi25NzFP9iqKXDPKAHRRy7u6qmUqi6YJuhSuctudTJBYoLshkMfWYC4hSXPAQmVENG",
  "key32": "4RC1xHBdhHcdfTtz9NipPorSEJ2ggLFUeDqqPvDWc81oeUG78emeNNWiZxVtUSPQ6cgzVDAnW8dzdPXjMaeSY5kD",
  "key33": "DvYMGHnSpJj3u6QA6cyRHCm2NkqqXKzRqS9uZjrrjbJV7gaf1JouumvgvuGgH2uzveLBT8XMxQYF1SkmYEvhzSk",
  "key34": "4AieQNBjffcAQMCESryh3vAMe5BXHNHaKj9vbiKGizv3iGNmzJQjPx6eKC6fHVFJuhBfMtrJBpuR4sNWfuw2Xygh",
  "key35": "2miTSLAjqUfnYywtv7rZoydSXUac2Ee2fXCWPWUT1vCVApzQ8K7QmzKD515N3q28QywLSUmMFN7Hm7r888B5d6iF"
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
