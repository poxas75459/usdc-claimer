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
    "UHKSD8jzPJ2hmjShoTPvqzYyRCp1Q3wcd1FCthxtDXzfJF1tJUdJcFTNXWeHB2J1UmNcoojeufaneDSBbV9xsu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aVPxKGQwCW6YFNDBJnaMXk2EgowPNbG9mciiDd5ENrVUcCtMQdWUsSkxU5zvhsohpkA75qddbtgBGK33sDP2eEf",
  "key1": "5axGENZKbmkAy8NLymfokUGfpvuv8rQa9FPHUpnEsjZx7YHjMj4xz2HjidfSYbHc42U7hkNo3rNcZHSsDtRPUXZx",
  "key2": "2sA8Pk2YMgEvYYiWYJGb2MMr1fEZURu9bBJxAVL1HebZkd851rhRbwoc19NGxRNUEJQLEBvHdtKApDXitJibFZkJ",
  "key3": "51PuEcHjTKUnehwfaTTESvXZNFr2ir7iVEupzT7LrwtnJK5m91RXG1ZH7Ezy1NMR2rLAfqbnhRw76g49KiJndEF4",
  "key4": "2ehVo49un62wFH8UmU151evF1279GCs1yqCoyjuvhThWigVZ2is7BdogV29ZZAVNvns4tNCLTjKs9ZBBQBzMu7WG",
  "key5": "4tJj5VT2zN1NWWokN7zFtKSgkdRCkoyfhSteGPEZrUtPknjb6ebe45ZnXiGkAniuDRiyjiQi7cyJATKLaTmbSP3m",
  "key6": "2xzFPwivma9YpfgGAMYBKx85woKPVVdMXdarKm6BiXMAEAbSBYvMAV5dRdYwUDJJ78ChWWV3EAWHRrjFnnPKkyAm",
  "key7": "58BjBHtJKweoMnNcQKSGX5n4HAZocf29UiMJoCXWSfqShDqx7CngReGubQHgqKkfxq5pxMtWiZhfrEfn39Xo2fgc",
  "key8": "272zWYDk8ZdaGSLxhX9HkNmDeS5ZsLfX5bqbLMDZFBhyDvFAVTLcUWQkbPNgVC3nwjPW4JaTttMox5D4AkYt9g3z",
  "key9": "vzeApTzGhNzpX38NjLXK4hMLpQ4JLJKin15r8s5swLgXsvUhZbjqJP1Szbo6SUUtvvED16BkajJ3smwLzqVosnV",
  "key10": "5y5aG5YEVFFhwc8Dk8QZRiAKscgm6zXiWqdYw58iCxwjfKgcvX7WLX42eu2fs2gojkmMa1h62yXDLijQJ39z3Wcc",
  "key11": "3GMwxhjeMtqCE51jA5hsCJAkc5MtT6vvTqeojnmBMxnf6C7tjLb7PkDgf818VtK7gLTSZQMoaWgMSdDnFrQraQpQ",
  "key12": "3vHDL3dXXwwY84jEYXqCeXNWLfFxiCVHrSobAFwDjozTXpc42osHXrcNVnzKxUuYMKV57jUEZukAQdzqZmVta2Ff",
  "key13": "3JDZZajcvvJwyvhvdBUG5cV7LEVk9YESMoTY9BpTB263jRPThmsAvRFxnP3axDTz1RnJwbvbaTffxuLMudwBdfUt",
  "key14": "4MDfDntYi9UD1ZmERRr5WQD3YsrFxiF5CWXnFWAWpAqKzabiDTvDsUfTVRanxrzLAReTkM1dqoiDY19GRAKB21eP",
  "key15": "35LQUnrT77oUZyeF8E8ZtC8FFeLej12XhfSzZA4ZgvUtbeSQNQvtizYmD6D7o8hEZ1CsxoWzz87UezaGCwYymydB",
  "key16": "LAQNKAAx4snUrNafwWhCYDc3qXTtSkUbAPX3QpB32jJZdRZTYrpMMHiUjmaXecGSU2ujwjdvjE8YDFDiToR3sLW",
  "key17": "p893qB47eGvZVNBagAW9hJd7TagzrcwUZ5pR61LMMJVk69uQ81N4WCbp6eEnTeVb55HuEUDz84ugfoTfw13NvLd",
  "key18": "V1CbPuQetoT6rmv1qAGoa3YGNsWSit4CnDdkWZJV2mMuqH4cTic5zSadxzkYb49jdfCaNj7VXDUsDvKP4GgfEvh",
  "key19": "BXnto1wGjZtWRqECXBmSGBntiopU7kyMdivALtXDDErjkNyaesuntQXXSx8i4PeheoJecr8ATAHGVjFTKQ4q4eQ",
  "key20": "MShdNoLe8TmwscRBfyU6dFmHk2YqCiaXr3nGY9WL9zQJ6FqnpvYbjNUjqtbFUHLLsXauXyFs9mWLzV9RBz4cAni",
  "key21": "jDoaBwssxkUwhauC6FhW6Av8vM7VwxyZiwRULud22FC2HM1ZBKp145BggAyvgkN8dqSqoCZTrCm8F1JmtTihhvU",
  "key22": "45by7zuyjD5Ej3DiRVRPX3WEGmeQowjYKBUsDZSQJcmURjZ5VweXi9QcD5JKs38oYbumZ5MiK3JTnwrP5RPK15Li",
  "key23": "LQBaEMan55ptp3KQ4YFQjQi5Uw1QUjmxNRQAnjsDXoTGVThN2fjhHiKSnsh78J57z49ffkmxsRKq6exbkh23Sij",
  "key24": "2YdxzU7FPokHt1wUmAMyDnTeNBXh6sm6LnkoSnrbLTMATyLb3bCeD4M3T2pvS77DrfXqtw8dC5icTmQqavoyEyMg",
  "key25": "2PLSwv22KnHeQJzhW7sGFkz1KKtSUdb7X1oguFzZZUi2T9CBYWnuG2Rnadi3gmdFvn8zRWbiCMjmB6PpxSKwMVqC",
  "key26": "32HE1pEsWhaJiHvjwBsY3t9XAhxqgstV8JsPP44xwGynqbyNf745bsvqFXR8NtX9pti5mNb4Yt7oALGboWDMSUGH",
  "key27": "48M6eBSxsFTuMTKfcVz9wapRJec7qP2LJwKcVGCo5LDs7qB9QgtmFiTgCrstb6BiEDbc1qS1nBiJM7ZJkpVa7Acz",
  "key28": "3oVqTPtuTefP74PSChipeMqtY67etXPSv8n7cg75NVVptVSkdezEba5d2XNxwPK9ZDmN8fErFWTd5iRcXU553Xw3",
  "key29": "yHJvdY5y7f84afd7JsgyqPdfvbY3eUbz9PCRc4Yh6hqqGaRPUJ4ht2cQEP4bb9y8cVyiJTxSMx8E32sGQyChiBU",
  "key30": "CW8LnQimRVGJQv4AEcqrTGdnxKeiiLiATn9RDAHrTEQ3CNN8XfmAgYsciuGGZ9BjmuHQZoEQXNuUEkd7VTJrot8",
  "key31": "4Vzn6DHhA4dHKSfkGdB67WPVNE98UQPihrgSXaPKPqPAA9zgRwVM178JmeYLnD1Cio2Z1eZqEnZECRRfpEFMnPJ6",
  "key32": "2ZdyBUaFhVHNeGJv1EqcUH6fz26E9RombwUZZpUjeSPZDHbXyL7BQvnPk1oebo2WDezSSavNeEARVccBGpJj7WKb",
  "key33": "64NdY8mn21ASEx4rcbVwRT9wJcJVoeG851fALpsYSvEvgfi1Tt52v86RrbPYc4fLyewaNCYQk2664kU9A7KDSVFp",
  "key34": "2XJgfGV9WpdzFwwWijuyViv64oQb8qSMgRQfenduh2Rb8EP8oQSqJuWxVmK5HL24VHb1eZhBPeLXVX97vpC6ebqg",
  "key35": "bY4kmm9RMkv6sTcfzpp2gnFJiLh5XzUWHhuYmapkxK8z2wX4kdZnenU1q9ZFBHG6iBzmptfJteC7TFXsVNFr7QZ",
  "key36": "5L3b6g6LoYe9pkDLpdXHCwQ8UU2UCLQYkpBRfpu1N2P1Fo7RY49ad1pupKXGH4BWXM8cQ9BvTkTATogY5ic7kFce",
  "key37": "3DALY5qBBFGRQcVcyeuqq3hM9abtpYvACFmmuEUuqg8dP93naGGhXwqESVzJHAQ8hXZ1dCeDxg4temKpCHwNQcDW",
  "key38": "5vgydUuR6H4cpuJNvWqsUJ3DU8dph3XxSWfjK6QFqcf6MtNXYdZJiefHCWZ61z6hr7twBLdP7t5QzPp3rNE46u4f",
  "key39": "2AaRSUwDojWWnD5AsTind1Y68pnRQWJvjWhKvnqcdF1n79R9BkEjWoeGqaXKrWwSG46kcConaVTEW9EcHven83CJ",
  "key40": "4RXfqaU1SdHEa2jpr9refwNq47HKdknY3zbBd4GohUQe2ADnXUQAHT9oxvgnYqN6MEqN54WXbw44qvPyGc9WnJ7z"
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
