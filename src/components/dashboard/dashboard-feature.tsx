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
    "631iF8kugJGVebhuK1kw3jujggVP76KNDaUG56oXkVwFBi8KccMdGNfUzRVBnBQxGLgF7Ezjv6B485aFwXFwZTtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ELPt8WG7ES5KES7qjxauqzQqpqTvd3f7Gh1USYQkJp9hfdhWZyQtKQdsYjt4pCcZWeomX6KrU8KQrhjsEbfzHHZ",
  "key1": "nRbP4Y133VqdCZqnv9FSBkAY7Mow8yLY3wNp16gAQb5qemuaJ8Vd5RPzj6N86sD9pVWAMqLU7Ew75xRBFBs9KU6",
  "key2": "29ugRn7DvWqMvJSjwW6ndV3V9yGxudkz5KKRYEoQ87JARrhQFqrTX9XXCogAuzF4wuMEeBvySKhZw1ArfvU7kyqe",
  "key3": "ZEbX5KEe1Ecummzb5frmeRDFf66wUxupQUqDEGSDHZPZJRPK561dBv7UtRzfx33TkZMn9FRCjvYRYdwLmYSAYT5",
  "key4": "hyf7hxze3irNJEt5jsVwSakPqws61PCYTwz39UUHjEKtdW1VAH1ER6dGnVTHX5yndGr2boNsEKW6gNSbzW75qnt",
  "key5": "u943XkxNWH583vjySGrHaVA4s9ensW78NTYND7tcFHxL8R1Tj1gufnnV6gUs5F1fETSreWj4uFEPs99dopGizBG",
  "key6": "2xrdRPqtRMFfVphTUzGrFU5FVbXPCsgmB7p4xZAzzjUWgbRKiof4WaeDvEd3PSqRjDFByp4TxvQBBm3Efp1hnbVR",
  "key7": "EiM7Z3xy8xui81nKxrq6nnGp5JVbqqAHoGDMZgLQq2DQD16n9QKRd2Ps9V32wk34mJ31LZ4ffWqBgQ1kEi9eL1B",
  "key8": "5Ng4wQxturvWJBX3SkbYD2BQmWsVjRLQvkxT1N6DsLxcX72sFdqLxYFrsm3VgoRLummY3mMDGQ8Z7grpVtmzfi1v",
  "key9": "KcCYuvuSFmPvKXwMF46vNwBtoERJ8en4Mto56kc9A45fPU7mBt93BuCK8eMwwQygJwDjNbU5nJDY1WUmYdHrRHw",
  "key10": "27gctYtBmtH46m3pUgmETw1r3Niw5x63FC5Sr3KJzGnCiBeNijS1cVMKs188y4az15LBPpHNNATqB4msk6XGT4nm",
  "key11": "4RGdaARC7kSRi2Htu3ZRpfoMvSVnxgTMWSxvxLah9UMHoXXiHg4FaWzUGSZgDzzfbpe3UYcrJArhEsV7xVeUkMxX",
  "key12": "4icFj923igxBhnaDctCZGDL7qptQ99wKHJiaq8jeZjKeYvp6JZBy9BDSUVUGDAMv2x2ZZ6MqmZ2wtGHiTRwWkNnh",
  "key13": "3x2D6Vu6jLGkCrZGeP659N6vpoJiFHBBF86LpuD5GyHVhJYFa1BgkJkg18pihMikMNCgrLEAu11SY4DM2rtP6j2z",
  "key14": "2kvUU5ot8rc52xjxgpZin15ijH9i5jDHtBST4VtoRbohsfKBzzki8Vunazg1YHdiuKokD3QzB2Tx5B7GMJEYno2m",
  "key15": "2UHimBZw4JHPHnnmajNDHqhvqW7oKsJUdqD7p6W6Cq6ToJHe2udHLv445Bp9QnyfdyKEEgCymLTp5cHQUxtwEUa5",
  "key16": "4tJiGfJ6spEcHKfBJL34aLcMc6owSuPRjAkgpnDiN7sRREtqBypyrkCuGpuU7fyLTy98RKxkZURBj2YiC5zmpTXs",
  "key17": "2s5AGzYStv8AaZVsfueHSVaNyMDaHfednDcM5FrPY49q6x6iEWNietifo7AxTrR4UgSxFSfBkqLi3XyZdfhgPPM6",
  "key18": "3aW2pGHGRHCwMUeuuJjk6XaoVyMFfYYd1Hdu8n7JJRVzj6dsGBmuSqYXorvJBsyFqhkwjkP5w3856zcy3CD5kA8j",
  "key19": "2GiEpet2aPSy28ybmQ9EqnftMeM8zE5evG96nJeiNSBmchKjrajtSpEMBdBLWZr45KKr4c5UZCyxfcWZCnMHUN54",
  "key20": "4GygcbNuNAbajHrm6pfbmiZQLxqF4XUrvVAPLUdkgFvvJ3qRLMjLuD6we4CgPDg5dcD9bChQdeLYGuZh25QFk7Qg",
  "key21": "31hKDqUjJbCRLpPg8wHowibb4Wh1M24eERdGWqXf1fAfJ1xafZjvfzFTji6xX1ovUa4rGRYfghcZbXD1J9XxDbXr",
  "key22": "2XS1eSHLJg8G5B7rtwLW6ineE9X9paniyYWCwK82rbUE1YuPYYmQFj3PQJQCAQ7jA1Y3oDazB6Yr6VvByMTxSq77",
  "key23": "4kaqCzzVPQTeHgvJ1kWF55ZTpNCdVNNuFkJEfd9Rj9wFzcT1b83Typ47KxsYopXcY9WJemKKtAB3DUmqutoT5qPF",
  "key24": "52feNRi4cPRFiNPMhu73vZacGQVzwV9WrXDRUDsR7UyrEFYLkZnUWejHEwUPK3x8skz5xdZTTM2ruKRSpGgRP82J",
  "key25": "GGHHcLkQtj5tondmTkWFJxzf2uxXg9Mou9mGvD4auEx2xaZZPCM5HbQZBnJqaS5UWjc5uBuFafRNpHDn5Wdo4xv",
  "key26": "5HoSbWCBZvFAwVtxTRDRLqhWfYz1wAosU96U3tphqnPs7vgDa4cjqqCbtePPGXGBUkYCCqqk35WbJ1wAuqBioRzR",
  "key27": "44ssJox48n6NRZHRHst1aJWvBjq6LUesR8kGB4v75HuNkhphjgzkei4udj7zpCDzGtVAYRxJU13RUWXd6nkpHdiK",
  "key28": "2PiWvSQzpe9BhGuNyPLUP1RBC5qXNXmSK7x1dXQAyLH5VHeAFsxSR5BL2HtesqDn7bSdELXFauSR8p5P5brVhXha"
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
