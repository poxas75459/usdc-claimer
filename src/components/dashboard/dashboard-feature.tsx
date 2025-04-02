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
    "2oNUuNYX4B3HrGC6qAq8GtRnajzpn3v3kYfGvoztZ8Ab8Bx6FrMrvTVPQTSpBqePs5ErHoxBPp5JhFwMmxqB2yAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fXPi1yqGynv2JQJCcxDpPHujzruWBiMnnRV9a1tsqLma7tFchBEczPK9ZnsTsbHJz5uBPPeXTYCc98TcP52gnrp",
  "key1": "3vBFmhoiWmbBxLDSqXL4dkEqYtvHdZPk546WVJwXSUhkzsroiFPwn7byeZvsPFrDfsbzJs9kLY5KkXB38xhqwX77",
  "key2": "4vfeFePZ5wd77ksvxJFQajPj8pJMLuxPYkzVv5kfqmKh5mHEN137AFs2VvnEq8mmM7BP1gUkqy8kzpQ88YpBJVeq",
  "key3": "NfXitNq5qtHswaahNma4GMZeNaaW5L7edcF39cQygKuU7tTpei6KLxkE448WXwvA7paKx3J3P8VqY419D31NgM9",
  "key4": "33j5syXufw7f818Lb9RCr5yLmLX5tNrUdqBBKzJ5uZFS11dqb5eLLMdJGrVFGA2mkXKbPykLBY2PHzZhX4dZZSom",
  "key5": "2cytoqt9oNndeGmARLCaGTYSAgsHFKW5oPofD5knmFvUuVaeaoxmhABV2kTucuzXm4WZ5Cqno2LVMN4yECCDfQxa",
  "key6": "2WMNnPpF5B4bT5qsGPxGHkzcpX1DeviHfqzcQZQd9Ls2ddjB3CkNY4iR5ptyRJpGqVToL7aqwDYQCyG2BMTnHzcq",
  "key7": "2D3iF5njyEBqxtNwz9SVwGsFgWUwV1Xsxad5ZBVtgeWkhcvkjVK367TUtsbHU2YcVWHkNJC9i7YfYDt1FHoauoaL",
  "key8": "29ugvqCyGZdA3Un8GC8s7szgtNkjT6PGc4tLHrGatCz9Uwbwo5g8sqFSqHRrr9awjVjHE3YzSoEHbZFS3SxBpuva",
  "key9": "4pdA1tTXgdgUJCU1dD3pkeSf6mgRmDJLgBexBgoCqdZbErvsvDKyKpEp1ob5ZH5MawxMoPCvMkmSZqMTgwHAjGEb",
  "key10": "2DDP1f3575CBNcE4FLSG4fMERQqiHz3oTsWQtswJud4denEAxKxCx94MbUQaz6ZVZS8Vbi5GGg7KWg8nYFGPXjWR",
  "key11": "Qtth7sRmybxg5oVs2N1A9ESc5k8Sh3dtH6T1YpwQbze4Z6oDP9WW9APSxtQXdhykprmzPxtXt4knaxURYpHBKjv",
  "key12": "2PYsF6ELVkg247Wcd5nYsgJEhNTPWxkk9WXm7YgzCm7Qdk2Xi7KK2VzLGfDPhFvQtaEX9PWH6J3qkozc1k1Y4Vtd",
  "key13": "2N36eVKsskEBogQ9KrGBmmS4G2DN2dQ24uQP1zLW9RDVvpVR6UNqaxQtdZmeUSXhqp7LaNmT1mFDRhSyQbHnThan",
  "key14": "3fUpt7bqmLNaChpF1SVPeeqPn7aZG8jVweChUsaDwZGE6YjYfdRotVg3g8qYGphvZm9zuTJ6WBUZgVEhdrKLXJyZ",
  "key15": "2RQuEFS173bcVyNfdJx9jZFuwAFMWmGujegixS1dj6dEdRFK4h8TvbL7M5rqQ58zcjz1sNDFqguozQ6PTsLJ8JXF",
  "key16": "H7i8DMYKQd2xe6Nys59aQfKAWvZ5aB6og4LxTztapDoBD1GSpW3qbaEV64CGCLpZFj3Ug15SVvWfkaV4LZ1Bgks",
  "key17": "jrzFRV53awJNrNKgTPxf496ySBcVERCAGDNnXFkfDtYA7t47W2oXvtb9Vmmb9roTvG73n4Jijaygjhn1yk7qLEf",
  "key18": "64FvzYhSJpzSweo6vhLNuFb8NL2nJzMbd4PWGJKGUFGhjBn1SFTMwobdNuJeo6EhTYYTfFJxW2RcDqNcboXZcKjQ",
  "key19": "4CW9D86togcvx558gqbAaRfFSiBEknjJtTxg3toJfkoxPW1etapX6HUqfBbXhgzVMxciDoJF4XtBZ5acvEdQpQiD",
  "key20": "391euEHCRkm9HhnhPyuYhsCESgYaVtvLT7npqwxqD2dGxTwNF7bCNM2krWTAUZM9Eogu5XK36qu1iUB8TKa9PtXz",
  "key21": "4BUzndEYSSDX9WbvUJ5m9wUnpnewanm7He8yxtfStobZm3wQMxM4N6DRQNLnWrNmUSdSigaERfHkw43UXwCMQw4h",
  "key22": "2BtD1FUdcARAG8sMQ5ucytTFG2ttET7ZZ53u4bFKQ7NeFCuof2ALhiTL7fHPPPe5ARdzi9tUrM83fD7mWQqvnRhw",
  "key23": "3fc8PJAuk96sCiRTfko9tyFAUbJNGGb5mcAcZHDuNwmHVcB5sDBFZGM2ZL8F7zNSkhcmR4zNLLftc4igZiF7aK2p",
  "key24": "3uxYzcxgFoR4nvXJd2Jzc3vfjj2prRXz63g5MJ8jyyUvxHdpY17WdYcEN26UTt6xhpmc46ASrxtg751W9tgc67Cr",
  "key25": "3vZ7VomB9H3DFVuYhxLRAo3MfdEUNgzxpDTWhLED95R7hweBcTE7ZDMvx94pqvUYQbdYQhEkPCn2a6ooQtr8UPDv",
  "key26": "5nuZpRQFBqQGKYt5iu7PNEnsidMHibjER8b5H4toQQxTiCDWwFyDQAjXfELAy6aVEfqvAJ8BVpgvMRgM5cYwRWMz",
  "key27": "3rANyLpAJBrxTzWsuQGqsHz6ur1cMJ6dd294XdbsaSCYkddFQ1BBEaPATWwU2spjQ9pYcBaFT7NiqW2DsJadyjsQ",
  "key28": "3YnmLYHqFVxuD1Y945o3pSG61XCx9yVS95RCRHGQ4Q4twasXhyNoHrMfC4yWajDVBiX29NAcmtL9RmqWiUNVbn8e",
  "key29": "4Ykg2uMFdyE46VVrYd2fw4ax6iqcahMAPC4w9Wtjovo91YxpNdcf5MFLfwqS8ofB3Pm3ErhqjrkkKiZkDn2Hi7kE",
  "key30": "4caJaM34oMpbL58kTtCrvU94u8gRBzzcTJXzDLp7gcyrcAhbShQVjHyzLWBJrQyS6hTzKSHHQJ84YoYhNAVcLk9j",
  "key31": "nzSgy7XnFDurUKx7WLYN4QPVw7z88LGwyKRJrEyzwUUXwfDfqbDn2biL5KqL7zxJ67eFHxUsXwFnUziuDChF48g",
  "key32": "D3zu2GrWaCTnRJEhXSbTqkHdGdEzJFnqKbg6GaCpQjhwrQReerxpvbTvQqBwADEVCtKkcMVSk3D1BnKtZBer5Cn",
  "key33": "5a73VSCtBYJJ7UzhVvJwtV4a95Pmj58drEfJAXevb61WXovsfrasRyN89LJZ47aqnMT2eGrdn2vnWgYjHSRp6GF3",
  "key34": "c2uAfJrPh3KUiGCUtx3nabyG2C62wdx5Mb1sUutbTyyg2KbewN2AJPLV3TzBiCjRH6oYJvk4esJ9h6Yc9b7Baod",
  "key35": "3tuURwab9Vxwd13BPNFj61k97DLeBgPvqrYCP9f7ZPgK2my8BLSJpctufQjpnDTbbdzdUxRGo9UY65hoiom1zRoJ",
  "key36": "wa2W23UK28UgdGWYN9qXVG5wY7adFqbbew4ZFbDaPbRqW24RE3KazP2CUBdCED2XJGWrN4KUpF1tv7hB2fDCi5y",
  "key37": "3nUMvCwaF15yh6pXKGniDpwB5RU3UGiPY5GctYRg594gUo9Gkftost6QAGGnxEPXDypSDB5x2tUVnQEFsjFg5yXD",
  "key38": "3onckZM6hbFkYSGLDCoVa1jRURdQUr21kCe5cUyAyVcbj3PpXm85ASUinc3VrR4BuVyeAQvtepTxJoKdHn81hTtW",
  "key39": "5G9RHZo3H8uN86CGrsuc3JPdqkHyQis5pAqCAPeAgQ5Kmq4gJcQ7XkU15RNYmsKk3kC3nzVreM8TVmRcHHc3mVcC",
  "key40": "27iaNaYkyvgb7wVJ3qvXDXpiegvffjxMDx7EWSdQCMjCQoumqY1ti7VJLiumH5VStyRfL9njWJkhQxbroL3s2eQY",
  "key41": "5432zSwJNKZFqA6oPptyVqQsivtdFefsNbB5ex73buHrjx51a9Ga1HfKDeisLXNTDBY71Dt5vuvoYQ6hUqb8i5pu",
  "key42": "2rxUzdUKSR83dFz5Tqw1ega7C5HDb9gQnXS12ntSsoz9SDjiWmDHiLuA9xVPKi1KE5rRQqynFcBuzwmXjeZ2Bayj",
  "key43": "4fHYsm9WDB3Czq1Dh82qCzRWyH2XGU3WFiBeRd1J4JmhrfS6fkiFGi48MZzFkhMF6N1TaCr8DvgP52G9YmY6USz8",
  "key44": "5KTNnndM6Lr6TDYRgfdXS8oHMeiiM57wNKPxtjQtriHD63jwarGDBUzqbP48yTtEG4Kpfsf3zQatYXsYRefyJKiL",
  "key45": "r1MZ2uy6UY3WNJh6MNFncA3UpD5BxpmJ1dZNcsCmRTKZCT8brDL3p7aHkVnKCiJ2LzJXXWE8atYUCiPLu1S9J5Y",
  "key46": "38ZMahDvCUxJXGMEBiG7DtNMsdRrySqQKiLCD6ob162zSzdBE7uVP5CMXGkcV5bA4xE12iAxZcQ5TyyxXhJa9miW",
  "key47": "NYjyrKzSH1V7U8NpwfNBPust338gkmjafT5mr2PBTRVwzcX8riYj6dYvrQBDKCf7kNiUY1PLjgu5CWmej3tqGtX"
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
