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
    "4dvKTsNnZTaUTTBVrVVr8oeZvuoyQnbYVdmbf9XH7RmqYrhJNVQ91RrTwjjxbESkAG1G7CN5vhvFGVPoLEkvUBhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rZ1phVKtaxmr9FUx77a7B3wxwCcVWGeL7jjERtbxuaccjynGkUzWapiM3CWQF48r42vGJevHKBT4Z6rTqqDZVsV",
  "key1": "2fQfqZ3fGdY5iL4KD9i5rkdr3wvMo2XFUy1G33BxniN5SexsnNAoTg36N57GWCcan7wsYhTMwKbgGNbxXm4BqdT8",
  "key2": "xnWyA78Szw8U63qChAm6jv7Dm5DdVVvGmxZUv45SqQAyEmpjvPedfjFmXKtfJtWPqkFbxWefXXTTiFFurXB8jF5",
  "key3": "5iYj2Sr5AF4EKjWxbVscKtZYKvt2vdZs44HQrc93hEBWULn2U8S9muAmECvsxD8u7BAKqauDSKE7zrh9XaqXXkcr",
  "key4": "5CnSSR9F4J1psmCUW8NnunWsCSroRCjZP6eyj6NfFJsN7QECxLHPpfjHiaEPCXPfBjwzvGZM3xbi6fs275ig8JgU",
  "key5": "jtFFwHsprDJaafcvRJNbET8bFf7zjA17kCg44EPQ7uEsheYSGttntHSBni9kJbsVQsQW7PaTtAR1GzG7nJHRg9w",
  "key6": "L6tcLqhdg2PhncxYwkdrPd6ing5GzSn6AdHd4LqnmQjsfCoydfvvBtwGd2T5CLKqJcQaGhYrZHeDfUnm5LxZiMz",
  "key7": "3XmkA7qgMTNKRLUjFK6V8CRdS2oEHvrVhZs4qCpiwwRkQud2rjAPhWh4DqCDvsWvJN1ChTuDpb7skqWVsnCqfoFW",
  "key8": "q42Gbz6vyuThRRV1UPwotPMP8e1hH6QMxZ9owBPyXQLYMfQe9qqgZo1HSGwp21GmUfzgRhW1XxFoWL9vAgtcBxn",
  "key9": "3sHReptrG5yPXizBGoGS2fVkyiQ5JhziL6zR81qZJGuvh9fu7EpESUMt54ZtMEn1VG2rMNTGKK6RN1yYsLW29E2G",
  "key10": "JSi1Sf8rrAguyj8XXXVHk9wjqNhaNwYC8WWfkWVhJ4UTChT8asYAeYzSTsp14UZV447fzSyNREhqdfnLGM5pt17",
  "key11": "3b6EAsZhBeBNgGkznqnVt92Utjwum5u9DgXqVkYrK9WZ3vCNRMPwLiTH4e6rWeLQK7C7TPWBNacU8rBzWmfgcyGS",
  "key12": "2fjzNNuA3GX8tr2oVqbEo8gXWrK3gfXLje9BNUvSVwqHprQe1A3Nmqo11zJSvNAstZjDRd7Sy5H89MvXrhwKH8mj",
  "key13": "2ZQSMphKWjogzzj4JKaGahQaYnSe8PUyUU4ueviSEzYnUAoEfV6ihMo46PZobqUvqXVFXhME1bAs471t12nLTdQT",
  "key14": "371uEeCAsTN6MFh53nhRaym1HeQJDdihABY8Q4oYqj6BdhLxaDYY9mKH2CXrk9XuMSvqwx6xynka6R7tFbsCzfdH",
  "key15": "4aBswfmUSvZemZKwSzvN5VRntcBNC8yZyouGfkBnoArRVKpr3XZDy71FaDzDeXusGDJgyyESx7mgFA5znWJw4dfn",
  "key16": "32XTU1gPT6F2ZV33BS88ecNeK2da7UiztPHqDtTC5RaNNeus9z2Wh6NvZ5szt6SxWf8usBVwUkTKpPDhgMjzVfaz",
  "key17": "2BE8t4X5Lg1WdRUxGrGRpUVSMMw3DMbWgejqdxLJwuejzDJCiBekzgrYNnPK3PqYRgcb3ah752VTvbymnd1WjeJ3",
  "key18": "3abazoyFxGGYmya5959bwbCXgCVwqRUENTDJYQ92PA8oJCQuPiXSEkRD2HesCGGuHgEWdGLHkNPzb7bB1FRdQUFK",
  "key19": "4uJnuXsXH4GZuqroWPn38tWcXpHhhMi2fSN6nxDUnggJtARmuS9RHPrAn7q735xNgKSYUH8rNJTD5zQsFXCzs6fr",
  "key20": "3Xd9qJV9C3KGRHMkMgxnTTCiGrMA7HRNpmcRpAyp66dQ694Aik1gUFfVMsrvcF2PPE2B9neZWo3b1gsTJMByo1c2",
  "key21": "XwUhrRttZMCydzRyz36xzVkWA5Sb9z4pFhcPTPbSpkn6fcLsAwFLCUwyE4whroMjQosSAVHNVYMCTFxupTiotz6",
  "key22": "59oHMHHHoN2nBYqYAc4XjrRrgv7x7g57cooCY3SwQiG9gkjVYnao2ziYy1DepsRn7dj97GRNdoBVMc5KNacMY24w",
  "key23": "R6AEHvUS14qSRtMwffjDGVBHDUHcckEpPZue79Mt7YAuG47PMpwbNVLS1PnFks6k3RHnd1BnJqt2wz32Ut2Pk1B",
  "key24": "24VcgegAuYrxaL9PfzyWXp59snyECunzTySvXMTrGxNDQ64CzCrjofNkogzomgFeFHUd6Cs53eSvjSifNd2b6BoW",
  "key25": "25TB3D1jNBDpmgYeuP95iDwKHz82XmV4F7hzxV46AQBJm4MKrSjfrHvLbER2RUMYHPSDgkrA1puqwDiAvbH7sYtA",
  "key26": "3bXnz1WpTrcS3UBDvDea9AS7u1JbLtiZrsqM44kveqSjWR2AoPn51a48maqDXJaCV2HCC5cRmuXNr29VazH4RUem",
  "key27": "2v2VL2Pb8G4Xecom1uEBT9qPRQSgDZNnr1zJB8sZL5zogpnQsz56HKoNHxpuZVqn5rQrPK9b1yGAKYGYWfYyY79r",
  "key28": "5Z2ZNwZxgkxZT89YGbEnsKAANyUSYYXftKKxThbg68Z4hur9PGBpbR8ZcjbTQf63ewGf1BqBGxBtFFX6qd7Tqo2A",
  "key29": "3YuxoPHguUF8Vpx8MScT2KyzAVtPe7AztRUz9F66KpgyGrqjG75j2oPMRARVTUTrN3mcUectiHtGEcrcapW6XHua",
  "key30": "jkHuN8Wo692vcadtx5U5jpeKvgCpQC5H2SpKWdaLZoEUxt1AEAuYV8aXjUygjYhAgnNkNvxezd56TF6uJqf3Xth",
  "key31": "QntPyVJ7Jo3TPqb1k1LWqiPnCwkN9Nvee6XwwidNAEU8rGHS9iA3GKL6ddrku7XvRqkwuE8BTVf8bdqoq3kZWfn",
  "key32": "5Kgup9iCMQqxHZ45atUSqcF3dx7TAzK1rWQitBeamdtRgKfZyc1KpUk61ZGA7f1XN3abu6cvqC76aajLfVBUnHMh",
  "key33": "Af95abuzswW8nDtDP7H2ZYpoi7YJddy9rzTtWGy77romQr5Ysw4pscp4vs5c34iGgjiUKpF1PoKp4zqCtRbZLiy",
  "key34": "3XrjvKixwkVUoexK2xoddrfw34sKuHzpfNE399LbYScevax5cvFuqhpD1PnKTHfheu5jBarLE1iameQ1hYE75o8F",
  "key35": "2KtiZGeThccRkG6DS9Xo1txwn2uLJrwMUSfhN1TDwHY1B3vgbf2CDkV49vAaiQB5vpXxbkL81FLfDBFDexDXKvEv",
  "key36": "27Fgsx6DAktnujVjquD2NfvrGwj3X2Y6aRBm81oqNAZhxJ7MiGYqYTNjfQWe2m3SmjgcSTxQrcT1ik9q8cwQqcZm",
  "key37": "u2UPL7AgLn5r5MMR9aW4D8zL9GivAZZxYEjQ9wKNjzTCVxLfyg3Qzu3fLb4Edz9QLurPpBJqLg9AeSwSbh7T247",
  "key38": "ZHef1Kd4swSyPf7UWVHcCP5wzxDqcdx81bQD7HTDjAfJAaSYTBaV4j9cx7FEynXcwRMcgPUHp4Gf8wsepof7VKG"
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
