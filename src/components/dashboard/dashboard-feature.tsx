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
    "2dSVvPuvi7HGAC4aNZhKHQLVxT8XtXhCezy7wZg4x7MNMXGZqLSDTADsDQquzNgycJ5vh8BffcVJpxEccUnVgKxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T9HtzA5AMvviRZwGu38niQuMZgeaESeDZkabofgM67wo1P23BETddfdUC5qHPxxri7uDcREkCcYuqpa5KRUQVo4",
  "key1": "3e5uRE665jmg8eYxe4DY3fneJxjDAoUec5QGuoiLveSj1aAMhSuizKmvm3ExDCd2T3jDJzRBgA44D66xj3vDuPeA",
  "key2": "BfnGBD9VvccEDQRzqkk4aD7je9SwdjVaRqRjR5wjKX9y3GkYTVVXtVVv7kuJusQukGbrEyZ3YvMNYJcabpVA5Mi",
  "key3": "3KTB9qrM5eqsvrsY792txiD1t5YWzX2LhSDmKB4DQ3se6TZhG1cCtNmHhv7tJK9x8FMti1XuLSHr45wncb26NvPT",
  "key4": "BMMAWvN4h9MnTHVHNj2TiWZbhtWPS5wvFHwtDPJAhRWBjpi2ACtT5ST7Fc6qS1NvpeJd5n39vL7nsQfWJBYoKr9",
  "key5": "3Wnq3YgF89PRUXWPQE5pGg7r7hxdfP5pSp7zPmdu12doEGdUqngVFspPANoGhHeaMUXJGgMfHCev6d7jQWRA1QAP",
  "key6": "2tUv4HzamkuUmrQoAJZ51QmoaSKqGnZQSB81Ca2PEf9hEELUJbU9RX8TfW2TJG6a14C3WseoR73zGUKGcdmffofz",
  "key7": "4ERfUttJPji9XzrvrC3yRoaT6Fo75ogDzss3rnfBKNAtubmkz8MKjxFyfu6yrK83tCR7T2SbVv3NYKqdKUDZrBje",
  "key8": "29hmdc93gTU8v55pBEHgNZ2gvuaBBinW7bTwx3nDhDFLJPDWbFV68edYLbcAXsLtofgQmSFtasvVob3LexQHt63s",
  "key9": "V6qGoBKfusw2BtQGeYXxJeoh9abdcuLV85xKJWLjzk51UqdMgyzD97HD4RSHtFs4cP3VAxSiMXdVs9zf66QyQxb",
  "key10": "3dXUkE8towm5om2YbUgipATnv9pnVLpWSHkjs2pqVXR3C714s6pzrbHtngCYS1GeECcZRbe1ag5M7pQAsWKB5SY8",
  "key11": "3211vontKDev4J3Ch28S98yxar82dPB5JkFnpa3cFX3bbXoz1kLVSaTbg2CAUK8uikeJs3iDP3yDvNwmL9qJxE7n",
  "key12": "5CUDx7Nm4oooC6MJGwFF3os6MgU3ZDgFjhpLm1Gi73yFVUmMLSFWoTib1r6Kry47uHYHBcGE8PfU6HVUGadd33xo",
  "key13": "5tdD4AKUkLAkmA5NvQ4KG6MADR63bBTKjSXDHPvVd2VRDR8RiHnfPfALYYZLCwLxLDnAuAybEGp2MfwPCQuEdo3W",
  "key14": "28wRXTWn1aZY1wK4AJthrntH6PwzPr9Jg5bDkXRKpsT7tdQiyZjodaa1ALnBxhr9Mm5QWY4adbfGwKFd34kU41NH",
  "key15": "64Bb1DTp957fQv2UMzgZjbHy1U2p9aPFiVHayAq8bsgfeDZ5SBCR5TchRjg9YpuvQqL4ZMxadZFf5sxpc5LrXmQD",
  "key16": "3LZrGyqE4MZN2ENSXeyuY5C9onMFbau71FtXTJpJhWWcyWPqqHivAxhmXUzVCDPQXMJ48FeqmxX4Dk41dwC458Ex",
  "key17": "4TpYQobtofGwPBRz3hfFdSKyNUkXmTmbercB8VJQ73CCY9HwzhxwjMAJ9C7m7PieikuzgiP8PHWJ2y1EKieDoPL1",
  "key18": "3K1wd3GZV1FBxvPLKpneiAteRKwP8R3xSuXGBxzRwEofxKjmWaYM4nHaK8hq77hpBS1j9tbWWwtHYzeVtriQFJ8",
  "key19": "3LbGwifVkwck9fUCinopRPLodKHnEE6jZXvWfpA3UYBHoMEhiqsT8hU19EacrtEkTtA9skSwkubJpSUVS3ipMvKs",
  "key20": "4tRXZVAVjPihwMbSHH8cKQbwa3tdS1VcYXPkdt1CyHP26vfp5UPY6iSiq3QMoUuYweDJZEr2fNnERzqpJ119eR8C",
  "key21": "3jpR919AAPfMNtxMbyNcbyUSkPAfeUMftqjyEFCBb9BCg7VRqt8Hfjajvr3ZgsuYxcLWMMbVeQ8wvdF51gmTFgqC",
  "key22": "29DdTxz92dkDJdBpH4YG5v7Yzc48aYJ8ajSgsNEYeiE5eWDE725v1HQwYuUUw6zka8eX5HUKv8tjAGo2UvAq3qMC",
  "key23": "22GGa2Jm6XSMPVhog4UhbkzyCp1joFMJGRK3rCFM85DymZzmvYrXAwLUQpev1iVo2mixo1SeuwRursuvgxXCPx7K",
  "key24": "2Y1kwLtkMzLLj4d6f5MDxfK5BuM9vXnGPnRbTc5tbAC4tAuv5VE9myu7kjHDmS7XHcdq5fR3b7Y8kbXkhHBotXLh",
  "key25": "Z7d8rS443M4f2iFK9uddCyTs3CEkUWuApgYFnM23uY27xbacc18t6B2YXRmvtV3jP1nsvsUjt5PfdRS597RdGQM",
  "key26": "nzaBWsVAAkyXG6hXvhjsB9zRe8QkpJG4fWKVZJqtaPZeBod6pSDrt3Xdx3gN4C4Q8C55A5SpjYpHCixmpuEu2Mf",
  "key27": "22qCKNWqTYhPKrE1ACLG9ALzhyhi5HqyR7gSdRxFw65TQ5qCByuB5a9Jyv9goFbK4LKiQDtW38GtJEi35rvTj8g3",
  "key28": "ALm47mMrsHdxjpJWftX2boHhmxjsdUimiM5GJ4TZZtv1gVenkd1FvaqTev7vfjypJ2v4bkLdEgV24Pm2akjmqZW",
  "key29": "v2zhnefNyp5BXDdt3bdHvrB9eb4sRPNUoF2Kqhw8BnChfWxZgeoA82AATCJBPCeaUMJ7YeDCV47MVyZHjqNxTT1",
  "key30": "28RkJKM3FnKKLtdEXatFVbTBk6wpdsACcZFZThBeynp6rZ5qnewCJiZMRGx6HZ5NGMAZs4NPkwKstfiFdN12abz2",
  "key31": "3RKCzErPUyi8sVG484WKWaeFHWvmuEBcUvcRizseKJwv63uP62wshZUynf85Vvw51weQL46j64zbvwLuDx1qAgHo",
  "key32": "2J4wRUWD7tgtbnT5fwq6bJ7H2Nrf6gz61qrFRaSZ9hRF3BKwpBcsuoQRyNtZ1QgnL3jLnjQdnQAyFQRaMg2uFUbK"
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
