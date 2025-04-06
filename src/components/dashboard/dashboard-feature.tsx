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
    "2MSVvfSqhxTPypn9FS8yfTzRVa3y6GsVWxAnbKMqT5osYDdTUHAVdseWmbGkTXWAwYMDhKAxn7ZfH6AwvUgnTTDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U3frkTKg2pWinRDS3pVvkuNG3foqgBNcBLm7kxUAFvcdhDwwxt8GQB68rH1TT1KT4ZZyF1JBrhhGff674dyvuxN",
  "key1": "2aJEjEP63MBCaBst8xcQm5a2PH3tfUUVN3c81TUHz1xcs7gLeg6SXoRWZCTrkpWMtYkcAcicvyf8CC4KR2vwjnHh",
  "key2": "9qFT6T7Fbjn8FGvYW4c9a1pqXSigA4zjo4HRci1w4cFMKjDJp11aGAdRBWUrTVGnVVZjrrJACA6Q5qoqTWDEdvg",
  "key3": "2P6Sxi8hsNmgD8Sa8na7hsrXRzxxPZz2ujZ3Cs8z9YCc2o4HZizp1PFE2WKKyNhkY83HLXq4AZBCooL1Eb5wC8Cv",
  "key4": "4rWd34oB1tMGtxjNZBcCuVz7vU9o5bzP7xTVtwtcRqik2DgJEDo3a25vtnzP5yxziDCTXazcCyFSNgLtWQ5gkdy7",
  "key5": "5TdKCxkduuNixqca81rCnJFrBGG3Kh9CYxmNzouLvDYSL8P8hk6L2GXyBhysEyifupCvsFnRNcsCXV9BtqtJiauG",
  "key6": "5g7QeWEpQBX2gndznLL9KrvqWDYBVxRK88JVSP2JDS78sGP48pWwhakWhZ6wHvHopoVRQkYpZWbWbi64T9njv1oe",
  "key7": "36uR6Wi5rFjzMg2kYV8Nu8SyjQCzU6cbgsLaygXVWhB3eMQ5zUBC95HBFa5uVp1Uc62kzXJnjAAqAtQWCixJoF6c",
  "key8": "4TGARLTZz7H2N7pzhrgq6xHkZhcqSDKE1wGcvGWG654BhT27tPQURza993hrvoJmVihUNyM4uRtXzkWNR66Wh4kq",
  "key9": "2gtJEWKSrFt7WoCZgTFuzyBPtKwMiuZeQhj63e6L8zFkXjpAp8QAZ1dAG9pCvrscgNCjwinHjK4hKHBY4Xe4Ly55",
  "key10": "vVCdbdbRKQtaWH3dw8o6ECUJK3PkxfQEKthGCcE75ymfTqKigbVKWbwPk527Vh8kDqHEcprJ7B1VqC7w3952WzD",
  "key11": "3L1NxicTXjoWdudkC8U8Kg2wUp3YJNRhcqRkiTWnGw9iEThmkybX5MZ12QaVxPiRPR6KA5Jfwd4jnKdhwfbof2Q",
  "key12": "2Gg358KG9BivPJoJ3LCCGiDChj5hpJXfem1FiQueDyz2Dxena3gMu26ovHPUnPe5SEX2U6gyJXjgBGVX1b3n8iKj",
  "key13": "5ikKEkk1uvF1eFHMTA3zjtfoBU5V6tRj63jadrz7v1waNPD6Mro7pjP1VSLgaNd4KMyTiRJJA9Wyuf6LzYDJ1KSh",
  "key14": "5WuPe6VMgJknFGoZn8y9v9hH26fJGPS8oSiztF24cZQ5BHJXgEje1t7S7fS5d6Wgqhitcw99xAJeuR3KJ8Pg7vqv",
  "key15": "5FBhDTW5G6z5n43FKArQESrYMAY6YUfXqJeQf9mfHmoDQKjA2gvXdmWwLXoh4MxuEv1je69Xm5u5YudjZxNzym6t",
  "key16": "542ZHtRo3Lf2SsoP37iYb3oAdkBBbZHGz2gxZf8bKMxaGD159ikwnMV2ZLqkYzzSxciwmJgBydqKF89xgkGAZMek",
  "key17": "56nDS7t3ekEaV5bgsMWhkYGWfMQGZPHhvqpT64NHwawuerSF93TKSvW2nUBet5DNVuMqCRL3mHghnBcnjBHqm4Gu",
  "key18": "gJzVQdpqrvSbLzrcHg3c5n7JxCDoN21LfpjuTegkh3mbkcrkHVoFU9S2x6mYDMTRapkt79MVGdMVewnCqnJ9FDh",
  "key19": "53KSbxvwovkrdwmDzboXEHje8ruf7YeqK3eFUWJv12Tp3xooVeXQWLausgt8zgEQtjwkZRcPqD3pXNjWwHn4CrHd",
  "key20": "2HxivYGBFSpFf6vc27VCecVbjG1s8T4EW91gLvs11ds8XQLjsHJKcxjFMN7bRPED4heGBT5GeYjfGJ4yoFKQvwh5",
  "key21": "2tTpvZuQkBMD3UQGkEr6qcoJAwPcVpV8UKyFhmQLsfNCsuzfRzugBMef4F5ZL77D24F6T24NK3YnWY27kfova9u7",
  "key22": "tBLVqbMvJUXETC6v7FukY6s9AwLJbmQ32wuxwXoYse88jbzaWaeD5QamZgBeTpxvF3CfRpbjBf7VqQaDXgW9vwa",
  "key23": "5MEHGccFhNdEd8BKVWLFyMbUsQnFDpPNVFjBgHUcmdwCeJztzt331Ztstp5UAbErKKq5sRxJwCfEaqQopm5JJSCq",
  "key24": "59opCHCpKWccmxnLMamiQEMuVmUUhNaPY8MicQuPo8CbgDKdpKvsBcCtwFQkWzNAiELjPuKEYmsni4f4EP4d3oce",
  "key25": "H5gMptLLMGfKUomD4vNK8fssH6NF83jQRCQRFr7ANDqmm5PyFjwhwqochuUyHEybsUFibfxwNwkthhvaMBLLUtE",
  "key26": "3XkmGZQdHah6cMVfWZGLbwwXN6pCWUqzRPZHpLSNjRwz4zSVZZB429hdo7NJNqJT8uoPhePDPBaS98KMmFXDeHjE",
  "key27": "3L4ruSV5eQ98w1VvU2dhR5AsEqfwHcQhZvX5WGgyWgxPMoD65E29RGiX3kvFboSkXzMoQWRTRbimbYCUgoUyN7pt",
  "key28": "3jYxXndf2i9qEYMyqSDQ71nanWPpdNfL77xsxCnsq2beR2kjtvzYbMjiRyA99N9mAhZ3ierT4EJ1bYBY1DcLXhxQ",
  "key29": "rJLdbRYg2HWyLURqjY23TY7F5s6Wi1vbzi5EkSH2pcF19hutjXBobpYhmMd65Lfr4JoQvNb156MtYK4AZ5SpC8s",
  "key30": "2HP9ZLuFecegLfLqaRaKGvoUDDQemo47kNdDsmGHMKEzw2pq3usvJCDPEYyJvcEpKtajLmRqCXBtPpLCpCActJET",
  "key31": "K8zawB37jXj3zATco6P6RSpWWqoY6fmeyucYFBE9yYe2oZfFbrsGfALAA5xQGmvn8gCQ6X3hgGqLwvoYhb9YV5f",
  "key32": "2WcaRpbTV1Bp6ujXdQQTfHFMG97XzcfUqGFGJtrRJEnbPJ1XGkLUBAbPH2cMgw5mTtFCqHDXGGtyxSYHh6Kk64yG",
  "key33": "Atzirexe2bSAxwLHSjZgY9C5Lp7irKCSzE6PMyJ4iN3xcb7dsTjgsMS2pmgg6ZFebYDJA4EsoQx91DBJMKthuVe",
  "key34": "vecPufusfj6CVsRATRoaZywAa7g2QosAL9hUNhDJ1nF6xWyQsrpqHEgCuyy5FVxuah7AsAjxg6o44t5YnrvPkn2",
  "key35": "3fEYDrQuzSQCUibbLFkKZWYxVeoBiAapx9ZWRTiRPub7rTQyoUHt4svNSntiWUiVSB7HLgK1YHTnJU6mfTK743Sq",
  "key36": "4pS653L5wyP5gJWUTBYz6tf74E266Z56uV3pfHBtwjvj12MVnqR3YeAK5aV3FNX4fJRvbfqRxcB5B3ruFepk5BUX",
  "key37": "49RMztY5zTdRJ9mhYcByjWi4NV4e7zTmARkJNHwEPAhUyFPDu3QRsMcP1Ab4p1ko5WS8ZekP2QXw3m21EQkgBAeq",
  "key38": "5LP5VBzZcai44pxas59GiingxaxzvEW5ZFo4KpgJe2VC5iK24ZEm9s5dWb9CyE6J7hNr6Bm1EYTNcKyBoYVRMR9Q",
  "key39": "3cYbMAtYfN2BLEMkMN7yNz4Tt3FfwLwHGz1HS3naESgbLhv1FZTAynVed3SNqFXEvdVSriy9DpgRcnreVWz6c9Zn",
  "key40": "2cmFCpfpJoqNaiqc2wwtG6VwfR2m4sjnteTuFpHrBoTD3yNjmMXLWVmD4gft8aAGZA6NHKLBU9ZrnEhNT1SZZXGi",
  "key41": "5BxGs5vP7HNcq1BHuKbZQg4jg8chVEPUvN7o4cFw48eKLJcaNED5yR4oYu2Ctwi9UVxXKJSc4CfVxjeNfTz7cgN7",
  "key42": "4Jd8unnuYxD6uTWWwyr32BY7F5nrXZHDE8gz8TymZ9UHzx6emvy7WcMtQTBcVgs4GEEzno26x7sYSirrEBvMkXF3",
  "key43": "2GtBqFckRMqLfSPjinwasaTwQxCAFE67CKA49tfp94hVuB439Wp9M851fqPeWAMpxnf14Q8MEtkRSnczEyzYAFGu",
  "key44": "2v4zb3YmUFBJjSQU96ZbLSrQieDDfVzQfd6BwFSSiE4bUQMSZcpy9S2vdVfPbhA5arJVTLRnUuhPkbvfteyziiZt",
  "key45": "3zt3fAupupVpjWXqsMCxFojJfgb2bC17ptNmNP7ZYXSVsyZXZJM1kQfmVbouH2EqHreAW3UwbV54T6Mk117YwVb7",
  "key46": "v9U8KmukEDm78hSvG8gZox38HYoV8vnEWfpPy7qkUBtySC5CKhLjespoL5jgwrwZmxCSEbiPqDWDHAhxbKaYpAH",
  "key47": "hM3GrJp8BTc23xshRsDAL83j71MwgT35dj6WatAPHyUo2KHrbVaHEf5hD49THgYmG23XWstEWJwijMVgUtRJVfs",
  "key48": "TEgzaRnMLUca7accPXCSfnpWfcLSd17mdzrLHfjsxzrzKhix5nrgLht5iBMn8bjZYvPhLGZpevoJfzAJe9D2RJv"
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
