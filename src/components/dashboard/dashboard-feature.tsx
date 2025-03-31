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
    "22NdXk4TLU7LRFDJfdCVLFp9nj1BbHPkJ7cMzVevizhWhgHN3jndhs3JdPAeMnG84jnoY8sVRa8w5mFqyY3Aayaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P4JzC8kDQKzvsbX3FR6PfVcR9J8FkkJyfT3ZJ2MHXt7mFcLHB1WV5t7qw3jbdF87cX1gDCeWHnfUe9absRQLKtL",
  "key1": "3FEbrXs7f3AQVQPdXKLZDDhCgbZaQ6TTgAmUBMX6U6EhCnmgX7Q7Jgocrm7RPc62gnxnNTaswXbfFAM2XNMg3szk",
  "key2": "5CxNLEcd8qJuXi1EAW83oWEvxBLF27N8aenmFfAZLsWB4y4k8AjDopeCgkF2ceyCPd9m1BdcHduWZTj2WJ8pFtAv",
  "key3": "3rZ2JQPb2PHf183mUoi946C6YL8eWvRMEKhWiakXDgh3MdEkKibC7ZtDy5WyhGhnSN7QmZa9FnLEB41wYKGGfNRB",
  "key4": "383jH64uqH1TWq1JNUbfHuD3JB4cRa1m9cYoiQzTNDvGbDPqRJgscbWay37MFkfSVWBqgtGx6SfVuDd7gaTesk5g",
  "key5": "5f1wZWumqWx3q8ASwAerV8kfJsmUNrm97RZEUCtErtXwUDKUYGsMZAr9Cwxm76kFfxArj6hh2p5j9FeCm1SLaESk",
  "key6": "4Gc7QT37gGTySbv3wwyeCyfbWaoZvtubWQF4CDbaiLdLBqR8zo8XMZpbXiTA3b2BhVu6gKA5pk168gXBmzkeq6ZM",
  "key7": "2ue51aDGb1aN1qigkVjDrmD3PhYqWB6FbaKDo8RYayCW51AqnVsM4w9xELKopV3K3D6LBbhkSLQV4hm3UtjRbg1H",
  "key8": "3c6QpSm2f1qmA4DKnPyKuhMWdY1GMqb9PJu2EpQQgL6nXJPVBD7RYMbCzUzgJgK86XRpUMtrCz1zKMXvZUgpLYpz",
  "key9": "vy1QqpSp1WyVBwAnyheA1vsrxSYCx4Evg7wwoQrZD5YFpb8upgkuQoZANiV8r6LfbHrERNNGU3G6R2781DLaU7W",
  "key10": "yTKB8Bm4NA1eF3T8uY1DEddGVDyNJ1YKVAAthpXXt2s1CsQDmCsGdf77x2qXQorM3xWZCEQLG6AUkHQhZJu6NnC",
  "key11": "3bSK7ChyFiCftmLgRiiPngZcb6RAANpdHvX6qeisH4JMFSbjTfNXwsQFCn9Xp2PzioS4L8i3KSqNeJAoosY8kdBB",
  "key12": "5yKZ8G4ZAkDGRwXipRrEhBpghYZZckQ45e13THcmCvTLzuGWts2X7cvmwNSMm9P5a8goyczCcXJv9Ai7q7de49YL",
  "key13": "2auToBK4TSnz2jGuyBH3pXB5HdQUVsfixcEAV6M9o7VGvEVvQrWKRqhvJnguhc5jsmsuHt73JgZmWYX9RSJTtoAC",
  "key14": "451iSaLqfi1pcgeANfgKvnCmwWdZKPVvH99AWLoZWUohvyehDUjFAVCLF3KBifm5Ewgt3o8ppJ5Wi2n4ZPjxx4BN",
  "key15": "3VM1cu7Uu3bugEKBhjBdDN4bg3Zro1ASErQYK7d6NPWvPxQnBUrqj7NWLRuy8fVmNxbsuoC9sSZooGTgCZ1YSNgb",
  "key16": "2kSr7uxmaeuxRR8DuEYqVgrSmJFWp6965Mdt4P9mMrQjjeCsqXbmU3rqymQqPJGaGhGq5uSUrbkvKXcyg9jHqD1J",
  "key17": "2ErHftWQabsrMM824Km9b12vGENoEzkPMSZNC16moRC4CCuXBmHtBazvBjAS8wCcFt9kXBRmTh3kL4S9Snwr4AKp",
  "key18": "2WvkFPvWL3cjRMDDr61JcyKiQ6FXnLrjF2bcyutmwWUiSVwCVMN2YQ3sWRmsz47xTxgqmhrwgooY4CdPBaELwn2L",
  "key19": "5EaGwyHLGYWtUvEQahsPVpJ1mbSYHGP6e3YfvbbiC4H4gcwSG8MxW7m7JoECSr5rfmJK2uRNidrcedztKSrS8r7T",
  "key20": "52ULYJA6pSoqM8SL49Zb1NC8KfbGqAYHmQ6StyUJPZho7dgiGNs1ieVqJSsfHcybz8tVxZCHEv5A1ULaHwgvkKG8",
  "key21": "g2nmMK3SiVMkqWSZiSKwiCmecdhDdBmJfvbfbhgU4TGpgSnWjQbv3LyPugSxSaxHX1eHB5HubT7jXu35M6RosyJ",
  "key22": "3W67fHcei9aUudfrfEvRbjKh8ATSoCJfaixysJJFLd8oeYz6tDXZMTCGyeJkwncvGp2Z7Xw8BsBQQ7vx9ntG6yCu",
  "key23": "5JdmTzhrAyMuaUGiB7nx7Er36BJ1yUb98GKqm4fYjECN7njaNmq7Bg54jvoQK7xw3SaLzLmsEsPxf7dtV1Vhd5y",
  "key24": "3qmrizrrodVpoxk7LtbmiVi2rvciJqHjwDYh6hscPGfN4AGxtqfnLQbpbCiEXApKGFm8uSDa2HUomhn9EHqKRa1A",
  "key25": "3Thvdmj4Af5JsXtXhmsrMJqmnzeAx9dZ6F2pYVxgMpHe9Lvf2btYPwFtnWgXSSfXWTNm8ZgmDKTSLttB1APhbYjc",
  "key26": "nU53ryqNzXXKyEzYn7TK296HsZtwvGLukKcWPuEzMwabBpsVWm6PQu3KCa7Dvg3LZbGnDJMJ4cmsKotpVFVszLy",
  "key27": "2xtSghdZvBd81jUvCXtLJkHqNxBhJciQuhtHVZELkTh1vM8zi1pPJNy9akDPVK2QqQZa3ng8YUw2Ffrtjp1Ediwm",
  "key28": "58YeFs7biKBMN3MJaEQxH26THpwCpVRP1ofqYZdBHdmaHfMiryz3tcWhKfgoF5bDLBhZdyv8bqdn1H4tXczLkbGe",
  "key29": "31mrQVejA6zJdsyn4QsFpVbmgSpqxdN1C5yTUrZBRXnRMRKPjKWrbkcFsfme8iZ8wRw8WojKuBNHk3kButGRbepj",
  "key30": "2ueHi72tpH3Ynzp13E1ZgS4yQcP3mZTMiXzzXj4TRU5aWgQsBWP6cTKYzyACTPLXZUQus6SaUakbtViCW8RxiRgi",
  "key31": "5eCicu82GyW4tPLfha2KSKksNjFRDQdi69daDH1qC6SJgBfUWZi268FSABBQ1gCeuFGccz9rgd5B94bN668FjWFu",
  "key32": "2M4B3emtbbvyNrEq7zf7TN5Vefg9DNV9oUexxZYioSpoQHSsZ6ZbeiFi99dzaD5pyhuMJx8YESfhkrz4FNH21X6k",
  "key33": "3jNeu1i4EKoUKeuKDSwxgWQiCucBRBdr9TDdT4YRg45Jqt9pVQ1hhD9LcbGuN8ExSjnaNYexXTGT3TXYuq3nkxbP",
  "key34": "3Wi8Fq59C2cYi1RsxUjdfZ122aX2csVvKYgMH7P6ZMxrijDbQKgw1WocYqx8gHxJ1aPar9HisV4afifG9ezLvH4E",
  "key35": "2r7qm47iGC8Ac4QUxEBfec4mTcTjgUh8nc3DF4qYQaaJz21qDvKPrFouR9QE7TvqMHSpcdU9GKoKF5Xa9gLSSmiK",
  "key36": "2ATjPyNJUS8FAChb6oR4hWCzR5y5G8PhhqN1oeQp5CYdjN3WrrFduJoLbsgE1kWUHRisLgXXKy8qQcZ863FzjKZu",
  "key37": "GQaEDrrAGkecEpJujkZp4DYu2Q6MXGHXmBZTRrjxixNPC7zjfcCH27AsoStPzqBwQotyb5EatshLxgvVBznq4a2",
  "key38": "2jwSxE2qQqqNKk497XRNH6ZDAXLs9RccssBHkGrEjppbm7abVh2Pq44qBDe81aVtV38BK5cLSQuZaX6i2yJpgHTZ",
  "key39": "4BmkkAwkQ2rgQsDxHyW6vZ3rnGsHYQJEBTz1aiKsqJDTD4brJBP2idSbj52JmzzUvkSxn9zPZD1BKgwoWKVrybmk",
  "key40": "TT9ikrAxmR7G8rxX8wkWySnKP6ny86kTccQ67P8X6TW1KjUXmKtXpFmZbhC4KcaNfaFG9Yex15mMwoGGozePAHN",
  "key41": "fcs4rtHJJtMKDoykW7Hake82GrcXWsDXZQst13YpPYUcdtuG3QTBFUAkr1Y3xARnmt7fLL32d4b2MSeSoiQy7YW",
  "key42": "MXe4EdM9fUhN33wvvh6KwZf2FnxDfwSBuaE2vgXaKYat8fupuzoivuhYhxFWLLcYgdaQLwPNqRvpke2t9SroYRC",
  "key43": "75XzJGPympTydG4vW6GFfEDfViX9fNLYJ4DJXPdyM4E5Qq2HWS9hESsyTr3nzXKr3gfJd52auSg4SiQ5w8kQk6Y",
  "key44": "PvJrq8KMo8Tz9KAQt3ZKttPqsCHxVDEyLTy5UkQL4xkJCXe3s4efnifS4viPZh9cwPQZHEPJk7rFKVX5PzBirmi",
  "key45": "2GMLJyf4n9FpaD63ctt5VJwu6Gj54au2e43aWHpoxrHyjygE4qg7U5CaUmPZUTiauJw8K7ZVmme65kYgmFNVzKZv",
  "key46": "3ge3oxM3Lu4qh9vmjrwWdnKYrePr79zbKX2fTmjzSmmPKUCV7kY8zRpnss5VaT2Lf5RtwGow57FFs29n4u5DdYA7",
  "key47": "mCqbg7z2Mt1GYACjjFVDX9n2qQKeN2Tz2p4f8eXaMqWGXiehXenJcwXWZaMW6kFbUFu4347RnUXieTtSdjrtt7K",
  "key48": "29N5nSJ9EZF5vTRCnhAaKMDdmRoUERGrXBaX5z6wq7jsRSGrAmy7AUQGnRSxe6mgir72twcmHnsAyvU7zjHCEPQU"
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
