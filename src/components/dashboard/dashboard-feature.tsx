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
    "5tCLLS1z5dcc17iZX8C6ZKw3nRZXEDZFAfvQUkvthVXP4N4K77W8Zok9M2agVpkyRg5a8mBTW2rTTBu7bwBQHnCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4582vHbGXwnyLUFaa6nPvdrKeoi2GY57LriRB947GYPqYay39NXejRigam6f7XcCWr141iqFF5n6LSXMVQtqXy9c",
  "key1": "gKpCRxXr5vAGzpXa9qBuAmT2p1FPUYpBG3qgLvH4SwFMGKYMYw1d1LPAoe9eoyrDHuPM9H1REimwY6jjmvnMLNN",
  "key2": "22o9jkKddNrzb9TfjeQBpjQFy8B5aquHUYab71MhK7fGTaYX24fAUoKn9HXExx3v9c8znVtDpWSDALcH4hz9EU76",
  "key3": "3HGwQoDTr99nKuBNsBs2tp2myNZzTrtgL6jrTzYPkj1xLo2cn6ZBzNaqDmT31PimiaGessdWy9e9jZSn6sGWVdg5",
  "key4": "3UBJNMs2hTHzhQ3HCp5f1TmuhwMfTmzqLVzy2fSKA6miESMHgqFhdWCchqfncT8wAb4rsdSgMduhHXV5Qt9PxhuU",
  "key5": "4y427DmobV4VNaTSvj18YXwaUnn6tvEttaWCZxKELUVD5xHdap6a824Tm9YtgZTeHUutT8o4ieV7goW1FDcBzijg",
  "key6": "4r2r4d4aUm3uCESP44r29rz8Vj5npYuiJCx2nHYMto6HbiXANWLdz2aiCQGRfFc31ojhH1n6xthjJLn8dwC5P23y",
  "key7": "2cbRLmBzqtxDbFN5uzLL7KPgGTEm2hWwpZdozYaB7qqQww8S8XgX1B98DQnU1iWDt2dRjWcPmLsbAi1PKLKbQh4N",
  "key8": "3JYHUwBiaGUr3hfWteHrQrcdnoRswCaZ4PFdPyR4M2rTjcXUbmykb1GTwkiMNMNePNkW8uXBYbk3hLpPGD8Q2Q2o",
  "key9": "63otwRE3VCredvFZyCGXpfJ391TQxPY831RDRiF6vkf7nV85s74EdMMScXb7LggjaQJLaZPbov7CjS6Liv6C2Gon",
  "key10": "3R3PJtg664TR71gjkY6vCu8Xv38PKfR7iPnDuquAqUur2FAq8w8nFQzHdh1EWMUKuDYhcb39tEnmZWFj8pdExkEW",
  "key11": "4NWEEzoeZ2DxmL3ywCBMXLFHJzEUFrycXb3f6iX67DTqs5e5X1ApQDyfG5yuCFZfos1KNaUUcXHZksbdK19ZX5DD",
  "key12": "2QLX3HkFRU8oTSyvMmqSMPFvN9jzv5eCc9WMXNdqnfL3544SvGvh4XhBBjeX9HGcUTBjuhFQbmeWohPco9Mj9GKX",
  "key13": "4S1LhWirrbzZVaE5DAnXJ3yXm2tzFxQRdqEnUfTEZSc7n4jRyc9m9voPuyqQR1Vyf7y7netBeAgcK8MeNDS3DABX",
  "key14": "XA238F7msnxfcyDgfX6AbPzmNupB8h2t9ecu7yFRd77eKT5dedqxZxvQwNhuFbJhh96T4fEXqdT8oXsQ3rW61E3",
  "key15": "34rTPbGmtmJizfyYMRnguHbx3aUZLk4qJboW1nx7U4gBQbAsjxW1XtTcaYQcQHAPCPQkEp1iwZFhUyKUzH1mQmH4",
  "key16": "2Fb6dh939BStGYVoCsdXHKejEJqyYDHyiJoJVwWSuunpJPN3NpCoJMqATBZJEEnFCYSzdFmBR1nZaT5SAN8D447s",
  "key17": "4feSUKuUNuFenK4hMsAe5fhEdQjBsgYPeSegBv7KZ8B2TFHfs5AJButETg9uuQb5im3DQY3MByKwWA6GzXdVq9U5",
  "key18": "DcEC3emZtWu5Y2BTe5WTx3mqVbc5A2V6PdbzcJLvUi2DgUgp2BLzhNUDQRasq7JDMuoGMWYimYkQB2KqpYrgmzQ",
  "key19": "4oapyW46EjjVsQsqLDbH2b9wMB1HkpdZqXv5HiNFr5JFR8hYNALmPFi31kHiajkV2WjTSF7kuVnY5bAyHeeEUMw6",
  "key20": "4tr1Py8hgRogYhCdccesu5MknCNHqAi2cWHvi38g2EMUsiSnsSyyUx6EqnmifGKXcBq7E2yJpN3m43NqWr4DaDtW",
  "key21": "3KNSsptniAJp7f9roqWYvmPwVkJFPY8YAcPYGhhyDLRv5R3t5bgUgDG8Yt59s2JQRZacQipufmNyKP5fdiDJ7fvp",
  "key22": "3Hy7wKipFwexc1JsGCFhvL5mSyfTTi1H8bZWjGBj6NYFqNL2Wu3YBcrsJCh46d4ZrpG5jGekQAaApt2V6phSXbbb",
  "key23": "5JcKjCG5nRJ6jocGUk7Y74E6Ls4kiUMirwzSFHQQ8pSBPwvMmZgB8fWjmUtsKcUC8ncHda6APxDhqU4UrUXBe79c",
  "key24": "2cCQERVG7tQBiU74ddjXXyUhUaFpiou1v9K7ACAcfSndctZncuEVTcD22DbQrBimqyLXV9wjuBnTYiyEKPaCNa54",
  "key25": "tABLDRiHw4U9KfvhAPTrgZiqS4nph8mGg6KBSuQkuszQXK6X91iKzAJCsRY77nHE44oc6fvPe8AJ8vBuasNtLDM",
  "key26": "5UuMyWMdz8RSVTR7u1L2diRss297yk8phgSgbGbQ8iU6yKqZ9x8Aq5VQZi8fTeCCWWj8RMTE3gVWncu9Ch8GRacZ",
  "key27": "5WfnFyG4Hv1AF5cbrPkmFQqJQNQMoaLdcD184FARwc8FkhZLjUpaistKmKWYWCUnuEXPgmw6C857YF9b2Zmq8pPC",
  "key28": "nkyRkrfggYCoYhmwWoTkxfDsBGMzh6PVhJdk5ahJQPSbpvddsSwZhHRF8Jw4k9qBLZHdMWsrF3NC7VMXsSj8nJg",
  "key29": "51nMSWeee44SB78iGkoRUGTFBMiDPXCzrq5hUER6uydRjeGvByJHMxdon2kEm8sddp1mJro1tEN4iN55UUMakoWo",
  "key30": "49uDVQ1deh6if1bgntsiB4mNaVs5CsAtxY9gi7XLbiQTW28wQqXtwasDsqWWkm7sR5J7MyBdbj1L3P2gdZoKp5Lk",
  "key31": "65XKphSuQFw7UBLh9h63T4khS39gQR95c8PErcavAu3Lxn4xBfgKzLoERM9LzCwNGatuFVP61meaN9FUAYHdsjwG",
  "key32": "5AVdcSDcoXGvVR6iFa7M3pARoiaAF74kbi4VjUsDj6A6NyEk9CZzZP5rsosUokxrDgVTUhhdRViPdGUNHmLtJCZe",
  "key33": "5jPSNQZXzTqo2hCJ3RjYB7WjSJd1iaqGzD3UeFxdMXdrXg83Yzc2qSnu6b9NvP7yQLdz1xXbzfe3QuW4sA7UXYHX",
  "key34": "5seqr6RTLVLYmEoytNNjNbcE8GmRqd7iiynWD8indMrmbb2Rv7r4fmzbLEDrVfLAhfPEfUyE5gUeZcmSS21d8tiz",
  "key35": "3Xtt54VT6ZXimbSJSSLJUqt6XcCPPJCtfD7yDqdqDnBkKCi5Rco3iRPiz9A1UUz7KNxGfpPUiMi2evGvT7yLSaWu",
  "key36": "2mxVK2UUEoFnQfLx55FSdqiFEP5L9U1Vn2Q4sMyzULpSwfqgqsNjTCsvEJeMMnyizC7Xk1uQJReqgz1GGhZt72od",
  "key37": "4dZUuKTk1BoyKKJPrLbTLRP2uzNp78j9TuVRCEB9gukTDNZdv21DbJFb2sfyMjqLgh5iP9mwaLyonBquzsd9eQia",
  "key38": "4EMHGrSJDsuVWVUkogBNQ3CRUuTvHnNoue6B8hykZ1JMLqUcAgyu8zLEUKVnrnJtFm3uiZViydF81HLmYfyrZrhi",
  "key39": "3KaKZLVCJkVocafYjAsYuq8G6kybew7HhWTx3o891EowrPERcARgcpytmGADKJVvW1aJ2RzEBqFW3vkGvuPhVmed",
  "key40": "4yGuRegNmRKpHdWo6nJ9aa9sgR9JtwhBmnws7ASXP6TsP168aGg3NfrVRudqJCZNa123RLENP3p571EsnwckMP1d",
  "key41": "3wV7YuiDX4augAvRan7tYB4Cib3U9oTdfHxWexgndB1v3J9YeD3EZ6xUwUTpnh4dKowPdo4rvKufo8rMHZK2sToQ",
  "key42": "2BCSxn46j7jBoqLgk6ctFZN4a43YcEedRy9U56XTDdC1MZEjYwEHztpuERpB9LUi8zb2MGwoxL2kL9CCMrpDyujx",
  "key43": "3CWZw2AoQRBwXoYfXybyH2WXg7whiBoPAZPEuVweyuhQxDw2ym7LVVs8mc9578XBLXuWLcLyear3Z3RbGqRq8voB",
  "key44": "4U5wW8yQodVZasVemsVtD5aq8sCYFcXXPs6Mgn5Fd2rsheANQ3M5vNfKbMgG8UR2xDJsAsHJR5xEySYf646Jo5ti",
  "key45": "5jx3St4VjPqGbgw5M1wWtWGrFWuTfvREspWiePGqmLSy4qZXh6ERLpCn79oZvHRgP6DeiEQvqK6TW3XStZPWsicq",
  "key46": "4BCEQvX6jZuuHNkCxbmPEx7NaQ48B5zZXhotWMstdDqpVZS6FZA8W2uNctjt2ogDxvBE6TiiiVqDnDCJQxhPzX4D",
  "key47": "4UvmgQu4qejgEKkbWznbF6rQt61iUjXLcFDURhawKoe9p1VPeU77bDv2UokGwLF5N494ZNvTc9dvsfnFSTHsBtbW"
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
