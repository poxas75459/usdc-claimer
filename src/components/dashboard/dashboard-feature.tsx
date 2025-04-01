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
    "3Vw7PU2Umzo6yEkHftNxTtNu6XmHvg7gyD1KnPt2ZAKMjfvrtvSDQRyM9seJQYUmWvEMMWurk5DAKiX1hwUWwFDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMP4eG1uZb5PbsLA7yqUiEAQpUduvkyivdLbyTnXMjCysgGU4xUWy5nBqeKp22L7FiiswML5ywSze5euZuuZicJ",
  "key1": "27YDEUtXrPR5pdpZM9CPKgqYK2hkEwrzqNBsbmruaaSQK5qHaqCY4W2EK95gX4ezUCrPmTmjsLNyLtgk56JZqzPx",
  "key2": "Da9tcdVhWtjwAvpjDoz2nWMtu4TAVWVQb5TjS3ihDAAjU2ekvFiiiP3UbGakEnSpf4JmjRmiaAtMxMsYdu8DZPQ",
  "key3": "2kpBQDjpCxBHgoWt6abtn6UwaqGrhQ6scHfZ2Hax5sdbFu14Kr14QruidieoRuN18EVVbghqvwk7DnZuGugKFGrh",
  "key4": "3yqbWYkb666MyTj9KByPcDdG5aPM4Hvr57hSdFu5Gpx2HjjppHh6RYmg9qr9qXvZKQQknnQ68KPUy1Rqhcjk5yxm",
  "key5": "5JP4RnHjqVJoUvoMvTyQ2dnxsQ2yvKPhRCoXG3xvFWSedFpP2JgN2j1ew6jqfWZwG4WcLyokbSgAeygDExAYSncy",
  "key6": "3kj7D4qGHBC3gCRD5ntukmSwYN1hLChYKWeHvr2rYmDu86ZMC7NTQGpTXS7j7WMBdsAd3vjv6QMiCH3QwkUjFxYT",
  "key7": "3KkmgC14Jp1d95da4F1KuDH2YyxNa5DgZLqANhMFVejoUWNRiUXXqe24HrzFyMv6ze4UCRKaPjAjTwxD6DinhB4z",
  "key8": "4GHfPZYBJeLQX1bA2LFK4hUUeJ4RTMmG3pYuo6JZiv9WwL2TXA8kvZ26ue5tCovMQwwBiDe8urG5KFhgts3LgepP",
  "key9": "4jP2CUGKFk6w7hi3Yq4FGMrmc56u6NB9C3BCQ13Ktrvxfdj9M9zVZHH8XrKxdHhjQ3p7GyMMfew8u4PuzzFHgeZN",
  "key10": "4yEKHP9qQutcZMFhKWth1usrKzT2MpbuspPu5LgpXvj9URqnKQZScjCQ6gCEx1kZHyt3FoTsZKVCof2DAbj267B8",
  "key11": "4QnaSDKULfQmEJHnbuj8kVm1eyWkY45wivJmZWJZG1YmWh3dnQX8v7EnHNp6uv23fgRnk4T3W3SSnP2CH5FGQvFd",
  "key12": "xU1bQC4gup4wjyKJ4gptRp3uQ2SmVfhDcHtAs15Eiucg9n7xHLGaNoEqpxWZ1t6C3yukzJxMQX4QPDWCKNSUZ5m",
  "key13": "CEkUoV5WPjYvbWbCjgdiNL4yaabEadRZuy2YkFowLCHQRVv5Vs6uH7tLVwbuF3tS2sYgwTQTS3HhnuEFmXv9LrV",
  "key14": "65RXjw8Cfj1bpmuFckCcqQTXquZuuspzfxBFewL3oV2As1sGhBztq4sPDmhb8wy4AEPgsXYnkQDB239LuG1cXtM9",
  "key15": "2eETnM6C8PBcS1Snb9QMV8bET557yXS6dNCVxSzteekk8Bjvzth4eBMUGqCZvABMpyoFztQazXiL4DmW7zu9KUcC",
  "key16": "2pQQpRYJK6Z2bRcVEspb64i9GUU68sNLi4BwUKxURZGCfmDCwcDsjRZbxBJ696dMy12wPk8Lu4ez43NKGutdyQzy",
  "key17": "22tQHCTf8xpuoM7MpfRiKa1hp1mz7CzK8MbAXyfW8Fq9rpPgF26Mcawx53aLfAPTmbmPnQH2JBgY3sBx8t5yDhsR",
  "key18": "t27AmBnVDT3Kpqa7zyfUzRTra644y2Cr4K7WkvJfkx82YQD9XzzybPdAVPH8ZrGaM44VmwyDKrQq86E2Ha5ajYF",
  "key19": "2tUHU279PVc55s3zP7PM9dbf6Csh5KWdeQkk21nokt5t4mUjw5QgS9S69jJDHJJCFuTtv5kdWsM2En1MvARWxCvJ",
  "key20": "TzoAXRvsttH8CB9GeRyYdBEj1avDLcaVTuQ3XjWE6DqdyW5msLXZP9azfb8NHKFab4A6JMkYpvqABV3QEHHeyV7",
  "key21": "TippWe6s4kfwopQGjNXPNhdsfLcishDPZmnSXaohDGqDwfeNt9DtD97X15rDZC1D64Pr5h8MefypSY3QdxJYKju",
  "key22": "66qrfFY1GZd8orNXtDrK8mnvKuZg4e1iasf1KMQ3Lh4vKeU4BwQCDpexVJmDvxmWEzD5jcAHynthqN8RDWx6u6Gr",
  "key23": "2LSETYL1kiGLMSJf4NfRdNo7wMnxFvk924GJGTXHArVocVgHBgN9nFDx9LfwpvWgMHBQ8UkkNxjFxnZdwzeg8etd",
  "key24": "2da49GXwucTfMg8FQeuSgQkFWcNumCdhkq8mRUJ8ot1TAnSkygxch6tkqCaH9T8AERZaZ4heJSVNWzBfXRz8cYNf",
  "key25": "39vGbn4ejEi3xGrVpfcaSLRw9N73doLnY4n9zSJTwTEVZGXZq2EehsHAnJ95MKVZZZGNsrM1iJozfQrT7bELHunF",
  "key26": "2672UwvrFP6ysXBabYAaxLF1K2dBRbcavXemKWFNkQHSWMdndL36vMGtjCobCXPjttKby7m18BGeDm2onui7aRxb",
  "key27": "3vQ63icahB4SmPZkLwVoWku9P2uaEhGhz3yuASFstWmsyQMKZrp86J52ub8SXTUs97DdfXKnWkqczc5wM3XBoVSH",
  "key28": "iTCt6Syv7xTKcztmfAgD7s7a9bL44Y5wKo5KMAwZ47xKvx1MRHPvKMmckypiRBpVy2fW2VGRv9ejuNZwUUgwrfB",
  "key29": "TVB4t2wWrDJDyV6ube9MBb8QyuqbqasDh42gNfYfq2kLG2D65mBN538K72X2ey9c2uUq5NBG3ysN5VfW856CQpb",
  "key30": "3pjwjPmEaAMNcdQJb5CUCRMYTP6MihDYLSnKVwRpqJxk5PMvSSXGdBq6ViqnT8iiPnMZoQuphfZcrPP1fAzYCAG6",
  "key31": "vg8X8PpVkzFPKnYoj8oQHg6bwVFZNXJZL7vgPaYgP9Z4jBM2Y8RwcrLB7Tta7E3GEc1QEWNaYorgUyYhBLdzZ7o",
  "key32": "5JeRZMDJXqCfzzmey5rxptysvRsaMkrKWHVgV4Q1pgVyU4oSigwonS9JzK8SWubfNrPLdiaMEtjHHExLhQ379MTM",
  "key33": "34bG22NSKsXETWtjmfzgB6oH3fx6T31xoJ6wCiwsDWSZZPu88xiw1ff69Jnq6A5GRDSMCK5wu3WL47nawiG1RRjj",
  "key34": "42CsnYDfgYDBG5pxVVGT6CWcA6FxhLCT75iqpBGj8otLnT8suU8ebrvPWpKS4pBnRM13oacKvRNNdLTytnBHuVaJ",
  "key35": "5pRp8Mu8yHG7bpUXY9VuZgtpLwdMz8Kknu7bHjnRHLnJkrA5eDE77PXCPGZrei8Jpp92srFmfiPBUNqhkn8TJuiZ",
  "key36": "4ygK3xL763WvxBqxqMCL6UB1d4iKZCYfe5QQQ52taJ3ZKVtPjXxZpzuWjKCgeNGnsGhdVR1cjfdqviGFwaiNfY71",
  "key37": "3kstKimXuB9uk8LhBQx2cQehNExj8h27ECWmrSNvfUbr9XLrJCnyygQW9K9xaV5NnvRc8tmefPXDKuhza1rW8Yrp",
  "key38": "3ksbHxBoooXg8TFKgCEouSLNPoTcK2vT5QARoWdutE7fQZT9L17tR8SteskHrNmJMtMUNksdVJMYkMUE8KmUdJk6",
  "key39": "4NuYBypitvLw2LAWGvavF5UxqtY32YkziiPBRH8EenM7Wm5aLgp5jxwZ1g9zjdRnGFysgv53tejmxknMtVNnWyEw",
  "key40": "4AtFrZkE6RiW2W4BLbTybR1nohuTVqs5NnuuWXy1ATqRuK7iaKMdNmbaNS3jpSnwEUvEGtvzstQvR3ipsePxDjpQ",
  "key41": "59QMaEN9oZ25q8Kufkmn5qMaRcaPGWHPtEJdJgfZhExoc8cTFqyTpmFN2PXCmUxjgGrrDUnbY3J5BosKmtzCQkP1",
  "key42": "2At7irb8BTXy9REoAdFb6jTuZHUHRXXE3iuc7i3VoUhiFcSdVxpAVGxJRYavu2KBhMUMsmHK9f36YmMf4hSPmXC8",
  "key43": "2Fgffqois8GjCAe7iE2JB9nwUzQ8bFfLAohmPVxch9f1c5DLkxsLyGvDbqn3ciTDJ8AaJHqcRvvTiV8X64UX8Feq",
  "key44": "4KedFSowELDek7i6Uk9DNPxCrLudEmveppdTYRW4k55FaYbJy7Rohkg4yXMfrDpFoAeWiztYqTcySz44tcRoWidG",
  "key45": "23qM4VVViyoRGiXiJXRoPcZYtsBMTK6QfHUtJojuqxeWxTreDRWWJnFte7dQzWYVGwzoHeu2HWbhPjPJYRhSgp8o",
  "key46": "3PyGCriZFLdtTGc4eMn43N7WpsRs8PPZDx3X2tMABhDzjp8WdRZLKSD3mLg4GtbCyJyMRYh1MGsCkNMcMgaoEjaS",
  "key47": "4cGXcNv36sw5WceouvcYg9LodYU1DerXtnnAoWcuPsjpYKKFdDCey6L4icCav6AMH5kqF3G74PGhsPmdrW8LWjAh"
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
