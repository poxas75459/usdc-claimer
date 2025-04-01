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
    "yQskLmc41xPoxNZ494Jwd44c5KFTmdkR4SKkZkKY7zcTuMEYL42UrUJqZhUt7NjSVAiEmQgZgxSVkKMuiFmS4wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTPxV3v395kzaKVPLZSXeVcnMWYnKr7Pw2jqvmHUcXrbBmu5tvoYW3KSYa5oDasdTZ7AktsDukcMWNujo7MCZFv",
  "key1": "5V1k8D2qgMxwFP519BRn3yzj7kRa8F3Xjfqt2gPkCdVqAgChphvGx3DGGtBPf7NfMKNJUoFuHSPkUKWx8pKWa4wb",
  "key2": "3qcPtoSEw6XbqNTZJyWFvkh9nyJJ31mtrmj9fvvtK8RFRHawpMvC8gGNhCEFXve4UyPG1x2xYNn2qvswn7isQ3gc",
  "key3": "5V8JTC9DjySQuHL2eBHkwi3tLUwzAGw1nbX7UfDFQUB7qknQh7TQtYP6kks2S1jDXd8kxP6yoStyPD1RGKP7gsfz",
  "key4": "56ZCEkFLhk77zCRUNvvDc24zT9o2VNk1n4tLZkmpCKh9jEyhYFAjjWzLaL8AeMdzuhn16JdgQqchkGWaqBSQ2Kk2",
  "key5": "2eVKUYhR1p986A8Ptg84fo6Re8pmWnCQzRDaayNLAdESWqTMvKYRGjvZqRcnj4Ap2vwj9P9ypZgCD4aYWnmnC9US",
  "key6": "yeaLWcRmMcjdZ9cky2j9SNaifk9HaLEXph2QVLFHJiSqc4oqHw7qiAo4xZJsioMHrjFweGs4PaMVVBDNGb9opoC",
  "key7": "XFMGuYsm4dSL1SPcVDdmKZYzoJ7k4swy12RmMQfapaNUTWVL32zqYKuMoCVZkpZZ3qoYHaiWeNgBVpkfec4q2nw",
  "key8": "5Fw9V5LmvMMKU9Dh5yp6haMWJowwbWUk1u7xbtPLJeTizkHYTySgREkVLERmtThT7eW7iycc1TYKwQ8koEgsoBao",
  "key9": "2Vhpi58Z18EENpmzZq9HWmUA5mGiSF52wNpMxQfE3bwoVJm7joQF39H8HvaQ5GrVNpPmTR5ZVWDxe4fNcwxQwSip",
  "key10": "5z2AuC2sMWyDg19wrbiYYDwQT3Vv1qyyqbu5ERPqpdnFtUsbxmP2R84G1LZLGPsBGUDMJuvTXPusBEnk2hjeWLu8",
  "key11": "4QpFnEtEEkQBvKet1PGh5jSjFA1zHe1avXBEFGqXJekVnwcqsaiB9w43wq61JHEmTr7EoNXcDojwUATQcUniBw2R",
  "key12": "MrNFXZabMn3ZV1Yq41snCiErGwABbwLWAAK55CMBrUkQoVVGUczqQCzwz68MEKDpYT7KJy1vb9mm6SMM6urG8f8",
  "key13": "64xqMh1zPWckMKGBXhpJ9UXz4x6eNFbtUVNJsX8szJ3p2S1YBSSXsm2kpVsmG5Ru7mb9ZZeDvMb5K3zmFKxHo2pf",
  "key14": "2MKrbSBf32pcNpf9LEk2khJSnzNC4BTirv72u7aNc48XMWXthoBRwAQfCza7kuyTJU6EBTWStMy1cdshLqqpdmRd",
  "key15": "2DUFUrGypq8eTVFcz578uiMQimzLotY9UeDrKSbbUWtBxaDsM7E7gcaj6g9FUEkau8uk1KzoAYKP971tMLZs21v3",
  "key16": "4TXFEu9a5zDZjvtbCEcDB1RYJStoS4SNKBiL7jncenAPNg33BZjgmLQsJqg2sKXAqZ7rTUo82qabpVnQhzoowgkF",
  "key17": "AWgp4D9xXqLZkpg178VxYzevftCLT6hU2HhpNzWXdV8vrBHLPYE29mmXQtsBug9BoDGe9A3tU9vXXoA5nK1FFNy",
  "key18": "4zYP1DAqQJS6b3Mxh2SUuWKD4W54SyTN5KuDmxMjZAH5HUMs1LGuVAn3Z9cDWR5SwLAJvXfyxqShTY7zxxu4QSUD",
  "key19": "4zoG1AfdUhL9nMXGykdRFGGnYtt27duCNnucboirc44VQUiN6PZAy747JhqPfMnat8qBYkCwcg5ztyJnAxpPjoHw",
  "key20": "3JAFvXbGWkn7CJ844AUgFNPsn62TmiqU2TgmRXS5WamFxDbqBvSAVjN1D6FrnGAPUYhnAssmAni22wsN9HWrYqsp",
  "key21": "5GKZ4tuJthnu8ySRzxfsxG31iDvKjCV1xwEDL8XYWZXmtVdLpgGrFPKjBvaeQtKgyv1ZSvgY1YXTMLW1WqEiRiCU",
  "key22": "5eDGDhc6q59wAPU21f7XgrZ3TrTYBpovJBTwGBgopZiaUXUL3j9boLpFda3Wh3ZDe2WGtHYPhNfzktPXkHxUH13T",
  "key23": "3PXipL5kYxaWQgLNveogiZxrrF5Jdsebys2swGcSg4hfd15DcGHkQKTowq3deM628LxcGSWc4S2HMZfPdirN18GU",
  "key24": "5BTb6hCj4DpVtx73sD2MXYy3mHdFNt8t5oSJ5wuZp8rPJmdpFKhbFGuNSnc77C4gNbKutH7sMv8ATjgkTpE73fPU",
  "key25": "3SegytqucD5WJXcugCCq2M42wydRBu8t9XmvUG5dUSo5sSkBQjDrccJ9sAiNnW3A1aaz94UbW9haB5GR538P2TDg",
  "key26": "4yuEaRMLSGEsPSZXRLiUdW58E89cuL3xyRhtm4ziSN5ERNpQKvRycEZi3Bq5RCf9y9AECFAYiu2RXJxA1VKqJjFU",
  "key27": "2y6j9TLJG3rTyeetV6GQ7rkEEoAf6dWFvWCxtsMWZLDtu9NGRtmsXiSjYwVHMS7MSFPdW9M1KrCeFk1PdJzj85yu",
  "key28": "5PazjbtUucyDsszp8pvkKX9UCAw9AsnJHhiVXgUNT4ZuQXBE5QUZ6gNd7bguWDQQ2FomUxDQof8eiGQ2Y36jZgJu",
  "key29": "3H5o4uWfBgHoNqdZXpDLydk1Uwc2MNXn1zh2FRgVniC1qG2jvJoGW3p9TcfUwzrnynuaaVAEc4EELR2MqAjCxbNm",
  "key30": "M7EPQYE54wkGMUJzMMoKJXKNpGiCVCZqRt6XobEPJaRNKgNgwTW2AUyyfD1zSWnyyddqJT8myQ3TUm7RUsEQZNF",
  "key31": "4hTUfLBvW4aG8QNSPcTRXJ1fNnMsqGDXVjGURYZVjP5wyHK9KctfJQUotHBbcbSYmVD1p3chXypm1VALeaGLMVec",
  "key32": "aPEV2kDfGvDYSMvexP3HGrbsUJkJnveKayXssm1APzGFSzFuG1AzsqVDiwhFzFZWYxGjqVhy2xRX3nSSjm1cEDb",
  "key33": "2sEdjEvPjCY7rs2FnGZRbFEzFZMkEnpWu9zHW7RfeZYBxfkanreoRwMXQ2odWFbVL3uaf5QonLwosAMWtZWmLmYC",
  "key34": "3DpEExHrvTxaqiJmXUBEJbkbWkwmQp5DpKZhx425urPGv1L4PmrShuSwrjy5EKWske4CcBq9iUEMsoZ79gkxsash",
  "key35": "2tMWjk4upuUh82X4edJTdcgGsgzKBUjYXpaJx7R73ycFekhvK9B9xZRyzMipFYBrc5QF4QuoZG8qb6G4XNHEVLWg",
  "key36": "2LaFybQ4VMVrtHU1Ken3tXrizShDBHdhd1eD2Zt3UZTTWpHujdiyk7pUYUUDMTpzQGHmjJmBiXKJHP2Yc8NiSzfs",
  "key37": "49o8rNGKtaJ1LwhfbwsNBrNZmBGs3brzPuEmULAw5syRTsy7vrWEjKonBJf4xMDvUc6xuDWjtQG1rBiWhst9HYYj",
  "key38": "4Za8G8E4JYtxnec8sb9Yk2ExdBKuCn8eoieHjSFaiP62DiKGqisExrgNU7YYt6o6rC2ZQACSsmbq8sH6vzK9GtH7",
  "key39": "56pNtkYwXTTGjXQT38FSnDGU3VMytX19Mu3gpUwZWqSgtPEHKzbKE9GFkPGirE26YQLM9NHLEBFsW29DN97kaJHQ",
  "key40": "5uoKk9DhYH5wStB17wmmzN2LRkT6WWdHN9rYEdrrDvT9v851LyLHj1QuLszmuWXZPyMUvEQWhee2DYUqzeUYNAZw",
  "key41": "5EuCKMS4kmZ4utP94c2ipxtQQFu3AWy2p51ofQ3FapWENRs556SaiaWhuG58k4p5L1cbExWjByK95kSzmVfkNpFw",
  "key42": "5NsfCXoxvfoEVz8daucbzR9rv7k9FQG1JDKXm9tA9eCV1pcwZwXuAYkhMpSDotWSXYWKCcXawjhFiKyqj7UQmdeH",
  "key43": "64kQqp1rZTTd3xX8vDhwocjk4TZM1mcLifJvCejZGDS3ESR3hq8E3JUVhVVasGnJ1VbcczuW8xMUA9Agm7g4SGEV"
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
