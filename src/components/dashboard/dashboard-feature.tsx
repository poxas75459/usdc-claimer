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
    "5DpcBoCRbPapz6x9L5xzdZXwHtrjVZGjAQhJ6yXwWQFLkPsRLStDVjNei2kLrvosDaX1Cc7RyuoKRa7Sx8bGwr5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LcNeyazmxk5MLuqH5hfLYJd51qBGH19PLZNCT9R6QoXVUgMUWXbAzGQF7xX4bePRudzWYgtM2Ph6pHHng3zn3p",
  "key1": "C8h4Nqmrg8NUmxREZ1iBwRJCAtqKnQtNwL7LoPagN9aDNXjYSeuvbeqUEzK5A3iv79WABucuH4WP4qVnxK8ccWJ",
  "key2": "2zqq9Hdb5kELs3xFUeST2uYCbB1Lk59ksAQwZpBiJixjdpAUsjp93BmaTfQwrWBtGuZSkEZepHjT446ScZasMe1F",
  "key3": "2FJA2hUdA3hBHuXeVoB7LBu1dcWejbofLpyengv4Bm9QpJsMvyJLPFfiAM2FBSY7XKzKg1rfYFRLXzUmhEkCftEE",
  "key4": "5hwi7T7cm4FqAhenVHeq5PRbnUZQDBnKSF1Cg3depTGJEjRFs8e2QRpeDuCaTtoengxe8gGau4vyEpKDLNEvGj1v",
  "key5": "648Kc3Pux4wotJndHq6TFVQgMqTPgBT9uM8U12fMyagGnrmDccoCUJkEqEgymT9y9QT2cdVUyK6S4YaU3TURpCTm",
  "key6": "3MaiujL2d9zu6EgzHQ86w2zYY9T5wF9nTmW8MN1r9gEr59EsNpf5bMGhxAT85fA2xGV6srEKkMWN4awMRrbsPSHm",
  "key7": "3vVeBtLjSwLr1knwGjPHVbvpziqbr4UvqBV9Wk5cM2jq3tgBUTU9MTYDzFWiZGPx6Nk2auJJEPugXvNZxcYwi9Aq",
  "key8": "2QQmobinMWPdkpTeQtFLRSi548SLRjH6UxVQH19LxFL8taQgRJKuBMtaSTyBqiSsLBuWRGj8aqMxNhYo9SmQ2mKU",
  "key9": "3UjPwWwXHePMqmUhYQxfRg8wuinYn4WcyMg44pUBek1xK9pGzSUorgrovThKh42DFuUYaHN6Z56P2z7uZMjKwbVb",
  "key10": "inDCLVFHgmWs2VmxtENKoWhPZhXwVrdxixvf4Q4ZPotU7T8C3FEDta2fZb8wqNAgwaUFjZDetrYBRQZTbpmcCt2",
  "key11": "4YCb3sUQPgErDXf9WX6F5V4uaYeUqq6MzQZBxoyiUBd2nyN6avbmdSS9K68nRe2FpxmWmFpNVzWNvPyW19rdeUu",
  "key12": "5e9k9cQGEo8MLrW6nhJEbLCNFDFP7CUZBhtaqKVM7BxCoLey91HSgZ71uVNgz7wyo2KydwR9FG8QRatUJHavfP5W",
  "key13": "4w3tWDqG1z6PN9F5Bpqfb8KUMYGbWvkeCFw9REreAnETpoPBJdLzPYsnP7aAYeCP3nWrkFWbsTffqujDZEZG3RLs",
  "key14": "2ydf3Yc7roVh4hgoX1XKe3vUE3BbnjiNCntgW3y6bhM4ubfWECh4BQj3dVXTNGYGQCqxKCjuxVMJxpg7tE7Z24Kk",
  "key15": "4iHYXhy2dioxujpgS3J67NKXqcNBF1TSnFmhmPFT97o9CETcVV6sxh9K4DU3R6cuGkXnn1F4FXYLh2U92Qx34tQc",
  "key16": "PtMTTCcprwKfS4tbjUZX561BorLqp7t1qRvWCbmF9eNcmihT8P6Rx9BVk2uEB5WMemi5g3EfntC7yfvbzAi8jYP",
  "key17": "5MQwxMKWjyhBr7UtgsmX5D8bXgZMbbYLEt8FNcMGaM44cWWwuav8KeQLFSrsswV9PmQWFdjiQikzc2az4r7qkt4A",
  "key18": "4EoCskQ7YcBZXB5DGSxSz1g9ahY4Xpr9MPBrXvQNWfUqnCFU44FbPgVuLYyJnrUZWjRHuZbrJ7wCaPr9ReG7FuHG",
  "key19": "3SsWnbH4jnAvRhSHmY99sFGxc2hQ4WLyjrPdNKFYWBRnyKHbJXZ4uGNybgHqXvDGDs2ebcXtuEWDwdXFxKhLVkB",
  "key20": "2zcPVsepURPNcgkDFnCtFg5XnZCHewLMZdF69A9Xd6HTX6hMfuj7ndyc5iTwuB3qstKFYxV4CKKvGFhMMFAnUDqD",
  "key21": "4Rnj3gPuHmKnTzjZ77rYMqKhuKLTmtVsasBUFzXPCncQmodqVbEXTswSz2iJHEvr9HaMAAeMHhqdhhqhKLpfXpwh",
  "key22": "4d8PSBh7gjdApLsJv3sXVX6s73AR8SKKNWoNDobDdMafon3JqygxYbhD5i3bpQ8F7jWCnm2iUiAJDNcYZdeb5L9D",
  "key23": "3NyzxWWwGbpkZErA9krhD8JuHH1BXiGoUEG5ptwK7y2dLeAPZqFwJ6TvvBTSsyPynFaPK4DrxHg98NHaR7xsDdoc",
  "key24": "o1CWaAp5Ejeqxswkooe1RUUryDuA2BBvc9t5hmzCHtuZVBX6rgfokqe3WYCEhCRVH5c1Rc6qrmx3ZZ95d6hWzzR",
  "key25": "YLV2oNifgaYtxVGq7pTebnaZaVxTafiCdC4Z6Rmxrza2hrE1vgNHSuozmXtb24rbuPzQxCShYpTvtXzMJBwgr8F",
  "key26": "56DG3WfmPNpYRH1gSi2eZpJJvuDho4weUjpvevSdQ1BDd3BSoc9gUP4kKVbzzzbdQhWXGuEBZVRAixeDgh9SVx6S",
  "key27": "5JSjhnW7MbWXqw5UKBFigm8YvYqi9D4g1PVUMguzMPRarZM9ZBnbisEmtmbd6uqVcRgXnHYYGZ1UcUmcbcNPfyQ5",
  "key28": "44yBSvkBhEHe2DJ5g6picpAnUhQTAvTGAtQ8zA9SGGou8QgapkEd5LabSy4xCFqMx9B1ELZLJBxsYjiTnceudahr",
  "key29": "35TAxWhVHoMESvfhgpGmsfowsdxiNVaHYYQr6oE8iFhqwgUU12JsCi7dCZZpK1r5nVBspEKf5kxAfGwPGe1X3i31",
  "key30": "5WG2mtiA6vf5h6A3ft8MNGwFDZ9gZ64Jq3pnkybJ9pTg2eCFKR36z3P9FRKYsQxnfJDmELGEwsK1aNByD1STacFD",
  "key31": "4NNtdu3zvjLaxEwdQ871KCH5p9QtvXjYnhovaFx319yy2hQXFNZ5eZk1c7ao8SSr96YUvH5tJPUW8re1YCC2chCo",
  "key32": "5dQHQ47DGzumLbZsDhMExHPi1sXrHwxKnPH3vabfZqq6mvm8Dss78niwRwBnTjBx1a6R8ct8HSNHR3JDDHcYWHTm",
  "key33": "3yPSVeoTevyWzY814qgVsC79Pfud8ahueA3BzQmZ2yax9XQmSLua9pD3dph8itH1kDK4kMraiMh1Zr8d3jHYHeU6",
  "key34": "2D9YaSxrpZu1PxgMLEuy4YjSEg84XhnRY2ew9NUcp6uxTZvptdhM6k1ovHwovopBxgP2D8vPZ39wNL1NxBnyM4Zb",
  "key35": "5Pz7AR5SqB9YuJJbAZWZY8sq9ER8EnPiSHhyf8M8DkE9DQBiAzwyBD2hgbAHzuQaoV73Yyop9w5j7vCVfpcYQQi5",
  "key36": "2S2DXK6Rryeu96tJ51iacLzAfiL1VnFC4peCJfbFREhjQ4LcZwng6hdwB4EkszWKzTo78UwwT1LKhVGCEZbKjm1S",
  "key37": "43UcuaEYPiJBv3W9x8PeqqsERRqbcgbbhTvepPC74b1SGFyQPG4T9gQnsSiBJyucsgEEvHsiAadntELrUifL3yc8",
  "key38": "HVGNxCrYAHDvbL9sFNfFkjtEJzHswAB2MGQRscJqxcAX4UMeiTbPH2APT6dmVAWDZAdjBkps1U1yFyssNiig2iz",
  "key39": "2Gi7BmPrM498MEGTjJHvXTeZvjSbfpToDvM2dauNs2TGvaFShFMsDDYLsN4aqzZbGi8vmaJmYzvG3X7rwN1earZA",
  "key40": "4NM57RJUKqWBbgcfpHvkXd3jkTCb3Ki63PUikskAdpeGNFYvtKs1ssWvrRPzHb4GayCrbwWPTTMdvJjXToG9V7UV",
  "key41": "4NuSWiMntr2xUtCr4c1dBgLUwzsVY2j7E4z2ngwsirQf2PquYv47F7VZgmSnNodyHupYVx9mvXWn9fczaTWwcxik",
  "key42": "SwwxjtNquku9huJp4b9cG6x4EQ8puLe9MqXEeWvVXZamydnbAN1WP9YvVJkD9nWWpRzV8gvujMoPChYG7JWDWTu"
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
