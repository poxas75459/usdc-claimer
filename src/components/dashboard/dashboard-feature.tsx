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
    "2XAzPAURFbyEHyLG1mLCur5nNMTV1tLqpkDhcEL2t5ynZySFLgVs2T89Ns7WuvsdMy6BcH75VZR2pPtKCVKLL59S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVDkRzBefgjXXfGaqoogiodq8d1dL1Y2rDkk6kKaGS3Aa8dNNbByMbo29oXTtDh32CDwCSf6c7MEA6sZTPa1mcp",
  "key1": "4QZVxHF1WLTimx38jNdHBpUxkBUH6SXhYgaWtuijHz9Uwr6ChuxjWREw67DM6henyUc85f82Laz9m1s7LkZuvdQm",
  "key2": "566tJLYNrJxuGSG3eg373aGsX8Eq7KPrPbXcnKF92sCk3GWSuVCHMFEit9pmgkssFw6RnpenVHAMgqypUkjTXxip",
  "key3": "4rwLscJme782rJcaPuhXT4c4Vn4xnVMxguJLDprQH2AbwJv8RbirfQWa4D1LuiTEyLcTTh9ktF4eMnKVRfKWsXFx",
  "key4": "5hMr5zTGWmCcMaVUPUPRRA1AEvzYMjTrcrZRjBHyqtL4NiYGZaDftVzhRXStkpr8uSeWmdnGZCnDo9c7xgooz36z",
  "key5": "3ZV5e5SLQ6F1dNTFDG6wARREDPtKHxdTbVtsXZRUPL3ynXA3sU7TyxbeSr2wWSgzpmvPWGKN3kXQ8BdYXDpMoYbk",
  "key6": "5q2JCy5prRsEgAv5FgvcM8v6LixJyjXym1rLQ6McwFZvEjsibzXo1BfchyAbgeNh6aHy3VTCyrRYDvya5gGmPNyo",
  "key7": "5fDsW7ZVMhjUs515wN3wE3gnLPuz58HSHaA57qbxo1ExL2FKgr4gKvnTMw3cy9xbi1c4Knfdc5tTAJtnbHf8Bi9U",
  "key8": "2FDTAzHSDjnXuPkzPrHanYQEMFuyar3nqMnSdXgc8e3rMW9s2ruVMxq7Agq5rRyQe3HDjxULHGPBtydLkXWes4dk",
  "key9": "24Bg55C7q1WK5SRnRw6EAJiv2efXh77jtPrjDnC5UWHigLLofhnT83qD6SGLAFkdrfJGXhMTCgwiSN4v5vjvcURY",
  "key10": "5gTAytUqwoJwNnbSMBSDSjhrwhicq4VpDqYxfTWzSLg4sQ6pFbjxNGCNpo1Hrpt5B2LJy7cQkoGtg81S4oCqJ5p5",
  "key11": "22EfDj49YCCrf3H9EFL2kLes1Sy3thLeRdxuhUJEkntF4n69khFdNr4KFi2DJyuUNDxrBpwG53VnnJpWD2qz9ckp",
  "key12": "2JRQZ1F2buUvAr59HowHQribCTxkk7ZT5NauHcR9pFk3srvmiNJmq8eZA7fen7WHAqZhoPY11n3AXJvtS6Q1eieM",
  "key13": "3RRJLKoLEdywhLCpbSM1wrvzQpPNK1YFAKgmxUfZ4fsNPg4MTzEv5BoHuGYk84kitpURqrxRg3R1KZa5foN4XpBB",
  "key14": "3Uypzs6Pi6uvqizNBTg1eqajkCBv37UUxrPdgKZHQPW1q14HtDrf3VK5tugsPJoEBAqBREpiBUex5fkaWTFxAZj1",
  "key15": "3Ts4rRZLeqqF8P7nME2XbAeHpN41HVDoK89eKPZhrxwKtRNFwwu5xhjvy5Q1xBGXqiVkYuBVdVWLNruU8iuKQirX",
  "key16": "2hHp9HnKgqbU78e5Thc7TmVA5XLUz2RoVfebZdphXcTe875EdV2k6utaZvVsp7Bvj8eWjNm9gty6Z4DzzbJv23CQ",
  "key17": "3NLAcHeU9P5wA1iGyUBmkEi2EP9fKBAkuYBQPkBzUKLs3WxioQWWEyJABx2o7EgorMYP6CLfey9qLDfxaSVmGuEy",
  "key18": "589MsNWpEETg3dMfKAsNkgRU7tA5MfRsDoL3QCnnyoJRj2JuP3KCNeF1oTHshuo2SiWixRuovLmkMkvHXs5pNx5N",
  "key19": "1ZhFXbEogum8x7Yh4uJU6xdjhaBZCaqMjC6VVr8Ecdu3VFPX2DubDt5aReg4hPGAwDa5XfwfdYETCVGkae5juSD",
  "key20": "5ntxuaYsHmyfms3goGd3ZZHEDS4f4i2fKFZQaPcUYTkjofzAU6oZMfy9vocSgXzQjwNky2KMCLjgb1Hp7bFaekSV",
  "key21": "2sgXRrTLpCEtN69AK1SCZ43rQMBDYTUbpBCS14QYxYbUBfCzC5TRqPMFfcyC5UNPrDfZRcg3dHWhmzGRSx5BrCxi",
  "key22": "3dwWTJMjmDZsymSbM2ARUZPe6hdtam35FHPaRtmoXbYC3AWM7GVcoM3QUn8z7Jx13pzNvWqDg65kt9bToCfeNbnJ",
  "key23": "3RLY3bDQXPJvEx2fGAiWKjMsPUNEarw3u1Gyrt3ZAAa23JZCgf1XKosQD9y9vpufumYjR8s5WaNz4VBFCwrxdNX4",
  "key24": "5TYbixDrePshZE1WA1Nt97AMwNbLgqeWUVFKr6bFvqjKWHTzYbYmQaUHZK2sL7M1uUGaqxNZe7wQMX9hCMsGfm7q",
  "key25": "2QWEigY5uf3HTLiAoNat1joq5UVHNXwErNnLtJhYzY2KQyppz9sgEX8QhW4yy8UDSdDAfr5WZFTwTqLpHzqEFruY",
  "key26": "3RccNxrFpvGvsbmJXuPUj5aSkvi1wCxTUR1C5ZRmQajcdcozWVTSa6SCwHUYWXKdfdyuWXmS2tW5YPGA6k5VmUL6",
  "key27": "XAmh8NMhrAaCn3QskNzhftnEa19jCxEx7nhyhh41qCDQFjtADqVhdN1H8JenTyrrTJ358UPM8YtUgLrXJBmKy1c",
  "key28": "Sz5kKFu6PSbMUsdPevsvxmWbedQMMMTjisr63u9cNkoTGR2VZpGECSJKP7W3g3VXqJbQ12sDoLJDZvZqDXBFXPe",
  "key29": "4ycJydXxiBEtLjzx9xvyESS2MbsU7bj5iMeAHxaKB5ckW6fUD3MxXmqE7eH9uEkR7WLtdTcFC5K1PU2Z8GD9mWXb",
  "key30": "3zcuFfHvcwvKjoZgDHD5zR1R3GUbnDuAeKdgYYYrXJEt3MsM7X8TiwbpFMZFb3B2fQRAqCbbCpvs61mW8knPgVqE",
  "key31": "3gPCnRdNF2Ft5pm1esr6ivQhpB7ADK1LChU9TniwtQyPbrNpvrtTuWdQUNPibTxunUDYAsZL9k1BnwMsPnxbKR9B",
  "key32": "4cWymbWQcH57m6EcENa9YvvHE9PstiPpsC2qE3J6mkNNjQLmd6r93vk6rHgDpzpwjNAoFtDPbooCsRb3aUDQHe5u",
  "key33": "3RTwx9ZJxUNDiM4k1ndbzMfUSyJJLgsXGpvMNwnUtxjvjmHa47PdKBbgZciugotRMJ2c8Qzm1vvYZK3DvRHH18vF",
  "key34": "2sfg2sznW2mzUmzYNXiKveaupYEKaWQv1DMCpaqmTXTw75SUe4epcFx7kKvhLCPAtzKSWDozbv8scwo1Sxkjt8Tg",
  "key35": "4Q21Vwvr3RuRJqnL1uirAAoTxy5PAcghj4QUiL4efm27UDbVAciG5aP2My3xYaShcpcoPnj2Ai1FzxFbstfsLqUD",
  "key36": "5KS8NZmahXB8yb3NiG5cW2J999R9yi7vNXUmyqirnCEPaJyQwo8pSNNQUztRDCSk919jxgoyk3Q2AA9NNR8FE2HQ"
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
