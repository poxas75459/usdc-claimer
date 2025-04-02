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
    "Uf9LVJLVAd5TYEsi5AoGTkASWEUFZzTBH36f93jPxKjCrbBaTWQnqW78d1xgnYtg36AYwj4xRW4WzRDcoihPzHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gk3mWhJmogeMTBKqiLgbTQdMNLft4v9m6MRDVqPjrGMo7963KR8oNChzjCeYTvgr427E6kYNYiYWtZq9AAFECBy",
  "key1": "3nUe6mJmZEDStrpfVKGMLfCFqCwi6XHVycFi2HbZhRkEhayFzd119PhuMUQuCAYRaWYCYckbaJHcEg3rqKczBAyd",
  "key2": "3TLziNPvRyzcDfwxme51Vvn9DjQk5VgD3qkwq78kpaUtR4KNo6VwhQd3C8mStg4HjMUvc3SKZBG849pBeFM3D2FK",
  "key3": "3EtsoRuwAqJZKqCG3rmnzjuR6vMfsvzwpdmS351EDt4VVvWwus6MYVB1UzbVARUhwwr1BpAFEtXecJuDPJAE8Tpe",
  "key4": "NYXdSgNPHCKcU34oUHS6pmRapTT87pxJY5pp6KcsJofZtBWUtDCUHh3gGkD4rQ8t4YajHLSzGiuHbpTxzk6YPCr",
  "key5": "4mqXvCwXPT3LDfEvjT2sH7G3EozdEGGBMoG3Qf6qu8SGKQbQbPDnpvF6T3YRomJKs7HQJsmp3ozDZ3DVTfxvAgDz",
  "key6": "4CMJh2qB7sMkQiX55X1Zd13zrtwJ2awY7LhBFV7LX1dfjxgRST4Hxx8gywark2YSoRpXT58JsKNadnSknJppjmKe",
  "key7": "3RMR841s9sJcWub7MAe41GvfNYPgWXYPLkWFv4eTuMRHFhQxwBVALZfYKBYH3BPuY6ptgY3MNaPEiGe9sCAyfRPq",
  "key8": "2JN1LDB4hDsmG8Ma4qdPYoQFW1fix9QiLHHJm689Mk2c3FmdcpcXNf7R45xd8PtKce7q8EypUkmoSN8hRwbTsfTz",
  "key9": "zLTGbpAQk1LimZFTb7FsLFazuimKvQPTfbp2PAkkEsnavdk1UiBvKJ1ATZgt6Whs8BsSyf7UxezyZJ5QSZYjtfM",
  "key10": "54KUAcZg6nBTz9WfgD7E16J4cnrMA4a5M1mj2qfByPpt2jWUytdHVhnLJB4xot9TxSh7dkL5geocALCVg1kr9YM9",
  "key11": "2kUGh1khr7Zgj3bJbz2opTuroRioBEt94NwC1K3B6BZftWzyuieh4S4kYNJS7GwsVCbpucCwv6PQqRn58MsRW5Ts",
  "key12": "3LBwQVrZhdXBAJcbnMhidMXeZ8swnkB7ytsU6hEabvioK4r9m8m937aWbZbVm6YT555oraFzG2atRVKBGyEhGoB9",
  "key13": "2akq5DRdvw7PwPndekwsBbaCfiyncuNjpi3vK1oqqvoAytq5cFdn1wyDvweKF15RFasHun938AffrP6NVwLBhQu2",
  "key14": "3G1x2yk77b5LWQP6TrfvAbzvC9e9NuuCeSxmPW1qtch1TQMTQ8P4bi2mW1Cgzi6kqehFoDfXGuFhs8TPS2N6q7U2",
  "key15": "5jhVPrxAVKuQiYRKsHm1oYexD8c3jytd9W38svdhvwhR4uA2TUgP9fMyatdN8AjjZL8dnz53sQhr7MeiGuDVPu7q",
  "key16": "67RUai8xosiy3G6GLnuzp8L9z3cRcYaTuoQ1vQFFKxFuQLovq6aW9Hm8DvJweAL7nPad9cxnRQrZU9XL3S1kBpki",
  "key17": "5wbtoTGyJ7nCEZYMWnt59GE4DCTTaKeTPUbczNUzXCdmuH3vUV41rhDYCf5TCdu7NqLygaYxnDJ9RLEMjDSLMupm",
  "key18": "2vvHD74iGsxUFu39vDWLauMLEspxrszYgapmG1gLUAks4nLkcYJLpJyjr8KroGnJjeTmZo5YtvDHJysQNau34Byc",
  "key19": "q7nrzfAMrymXL68U6Btx6dv2P4LDVJMm6mwSwGKPEjdmYQoNid4jVwwVjmm8Z5WPgNaQD9f8LvaauPNr1pCeQYN",
  "key20": "5ozemhK1DAALTNsSLXnHBcoUW4jYyDNVub2LyDmog7DPhKTpeoCiToXQTu4x8UoBXmjGAUsi11dxBZXRSVaVhcZY",
  "key21": "4furnVU5hT9MKgpPae6bSzUbiYN1r3PF3WruFdVzKGJWapmbanvbGm5HJ1KmV3xx8gy5ne8HYtH9zMfGdFwAahBA",
  "key22": "389bmcK1dXrN8ENKYskKZfJCHQgYMdJbjj7bkVVTEJwDuuQinRX2UBVnrZzYbSbbrymp2SkSeWZqrhdHupLZT3Ds",
  "key23": "27s9TYcyyrTiQkgmn2VzVMzmkUBKyWZiX9WPKiFGf7C8Ujs6iGGTMvoZKr9K8ZxhnVFwLzCjwWsRzCfzm4zuJPBe",
  "key24": "6dLpztWnNCZqWipJGZ1RrTejKRkmHKwehx3pRuDtyEznWgPx4YnEMsaJBxYmzhDafD7gJCadbRE4URdWLK9u8nK",
  "key25": "5RRJW11ZALKsFRxxixjEZyzhie6ipzsQcrbqm86PMXvHDqdxo6FTS6sTijz3JdZgQniHw34GiLJNLLodwQvfP4AC",
  "key26": "4tLvW8DKFBFxkYhL6BRnFaeriFTcofba61GXjNG4gG1sJtU6LfdJEmXpdZLp46vvuimnBoDbzHXat8a8rSnrsAw7",
  "key27": "gziLESs1cVvkHkmGxBkVrAByvFXUcddsMKY7U98Ctp4ue76LnnMnKUFCNtfF93AKRVRQFFjFzEEL7mkJ8xpnBtZ",
  "key28": "2BBkghfwkoB9EDVKoN9KCJoR3abBKewbkG5D8rXp96FfWVbsu8dTYMwrcR6ELg1gDJq9fMyWkT7yrRs2RnCgUHD",
  "key29": "21vAzg6jAbEshuwpJovXWuustxUymiiyD3C69YiDZNSJ7RwVqnD1RMZtoNBrmUPTRMm9UBkogwZkSXvdT2RZZUbk",
  "key30": "5KnjL2G6QCKG9cHVJ2hL1vFER969spDzqgffS7yeraZDb9bJBishjMWJoFGWLFvGAciVzMDjSPEjjKS3xTgSAgna",
  "key31": "3pJf71kzeqoRrMpbpTTJvVLZk9ofXfWCNLYGiceLY1S5M8eKbDKVm3aStG18bY3MxmFVS7iHdPVbQfQ4vnGehEWc",
  "key32": "4FFhA7RmFbKbjWT8wNJqHmN26Cyk4XMqfFT8c61sxfTqPp8Y8AdiStfWZqLgWYYfQvzyHgFtULABjeeKd9R4t6gH",
  "key33": "2dNMZu8x8ZTvzPgtBGsVL3FWGgSye5rghbq4ijTbi2wwHAdHSVnrE76KnGzyxe7rF2Bce3dkrV8W9Lfk9iX7dT4A",
  "key34": "4Ba32LNeV5Dx2U94wnhjmuswEAU2bXpMQiNfzhuVrZWUGutoMxygD8eu9cJWoUCpfiKLizowQNS4zcgwk85vWzPQ",
  "key35": "2hcFKi6aokyENV2Nj66MAPXZ9WR8Nfm5iReea2GBVXNGxQP4cvYqgrYoTZwF5gGqu2wP5ujamwHcgWLdkdi5wEcE",
  "key36": "5URijsWPQfqBbj6jD9u3neyk2wKk7ULUdurGyK3GwZYqS9zbp9qaBPWpdMuSwtsgwRku2PEb9RaY4gfnJLZqbqnT",
  "key37": "FhHRcL1aDvWWEt7H46Y2bFoYbPxiZ2B7zp2AXRiwqWjbcP8pvtibGaiBXnGrp6NiRdLNcYXPMYdH6m3B6228UB5",
  "key38": "3nTEKy5oNZJPUVVjMwg34HEHW2f8sLrfDb2svi9cpNoRTeCaSxGbrqDyfwafP54mGTQRLiFGy4gusu9cRCUavHyQ",
  "key39": "2Kqwj8TU1292fehCpA51bTd1nPGexnTKYca2Gk46sgK1kWLoEwVQhFBPL48SVerokPmjJ8TcmWWkzEmMMPKQsxNQ",
  "key40": "5UPDioBqV6YYoMDxjuhhqTWaZ7ZLhaqGVQ66Ws6oSNmGAswxKFRgP6ypGCHLfWfF2Ae3GDUhgqMeffP9h9MM7Br5",
  "key41": "34fFVtYtHQ7dVcgXhRHuDdbFhVJ8kryaaLs5EJUuc4h3ZBnE5L1ToKdspjmsBmc4Kqk7FyDAZyzHAAxGBeoUMYHi",
  "key42": "J5rpjvGmAMtf8ZA6tUERTXNVoBM2FQdc9fveqBVfjKmibFhZpv9qAqCCEtkpP19GJhQjE8PzkD7jHuqUJUqaEu2",
  "key43": "4yPiP3khK5cUbo2CHMDMP61uqZMqjYeeLT4SRq5N7fo9HGWnV7N9JQBUCVaqVgZf87E4pq87r9Gz62jbL3nBkGJN",
  "key44": "32861bjj6GVjuzZJYKQnVB6GywNu9VAnZJEzq9X2bMwnrdDY5MycmpsuXzmMYeYU9Ft54dtnNd2WmzQDYLqixKNm",
  "key45": "2YkR9Qwm1A1StDXxenpYFNeRAWPJvbW3qZjZyTY4QcG87iKqcL7fikTBrMB3c59xkYq5mrquarE3QoDGKeiU2hCf",
  "key46": "4TrAUnFQDjnD4zPHaX2oGrsirMThoYqJ9RwrzWbJb1fCEVjbszQv3fJBEQNvbpzBz4LuccYCnHSs6jzFnGCksZv5",
  "key47": "3sjMkUhu7R2a2oBhW2PbrJddZUrWBJbFXjo7AKipAFLLHa6jrTXGMUdU1tX92rjBL5W2Z6vt5bB4m6kk7NfdSG9s"
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
