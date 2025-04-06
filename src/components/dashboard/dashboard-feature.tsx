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
    "2FUSqXgzhzJque358GSGJP6Pozh5hQKyTgQ4kk929BUMceMQTvQRzUZ7ZqYSCdcc3kJDnEaoMCbcVUY7Q57oXNgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xuDoJTTRmVHwskiDrH2Az2AhguZgfaDZeDVRudVHg5k8CfouRxBbYdbsA2jCtMd3vWm5jmpRqDhAdmq1fMNGGJF",
  "key1": "2NPn253AQeL7SzzLqs1B3qMaXcgesZ5py8unhJZtgDFkvFKBWEm9GKtqYzCZaUvGS7o7kp2xBnQ24ocMsm5BsfbN",
  "key2": "54tuRPXARjgVrduvDnnzQbAqCqvZALvetJAkowsYRFddx5r2kcCUmEsFEKDeC8dTUrakZGcf7hZ2aWRfJN3goDsa",
  "key3": "4k8hHuAdgmhF86QMNctbmrwgytwEottsFA7xVaKgoiV61Y35hRK2Gfk6abpQKRTYSKZyqRdYnZFPM7JbbmS2QjwH",
  "key4": "2jtoFHY7txiRdLRwimif7ir1wvRzV4Az3125BVqkE63zRak12S3Ed2VgStpYbVXX3VWbT1zi5A1J51jhxmmwBet",
  "key5": "5EDwow8v4FUfryPn4SWAshCicBzrmAx5NwbUXYwJwCJYw5R1EttkEq98pC6LvaYgQ4KF3qS7wWwrck9EzMayVdia",
  "key6": "cafNN2uZQRph5BwAPA6AAL9NxfNoJBD3ATcDTrDsj2hKxb8tSf7UuEJzV6QAn5M37xpeqqHSfEAgNBo83ab2pvs",
  "key7": "61WgExigKKQB1WxvmwiE1NGtoimZ5rxw6venxHTGViQRiTkerx46qS4Yg6yZDikw6ggwKqBkJkviD5YNPDvLx68M",
  "key8": "43Vh775hzwgbSGDiXmahC7axP9ESetPsiHCgxtjfwydpqcKcrTYV2TJ87rkxPpxefD2zSYG4p7G7gR9WTX3U4B5",
  "key9": "22zhVdEeBaHoeFR1K5TtZk2dcc2E8kcDVdGvpRyAQSxTjMqCQ6ZCRbLP8ekqKHAfmV3nV5HAvhM6n1bZMf2WYm2N",
  "key10": "2rAjZSovgC2sqLQDBzCL7chAxEon3pKerAReZrJrzW2J73PdyeTPgUtyPyGPZs7G2yxPvAuR9JVmk6zu2UACnYzb",
  "key11": "u9roJwhYDYC497XCAysdUEbSkeuYep8zKE8naGGr3AY3fv3nMif1eBr4HNeLT5e7ymSKE3jNTGHer2SvBogvqsm",
  "key12": "2kXDuGgThDtAbBmzaaHgGMaekoZusxWmK5LqBT3gW1vbgJGN2vrTWQAW2BHjbR3sCDcfUsFLdj5ePU3aBzV8nrHa",
  "key13": "3shUrjN9oGmiziDiX2H3ma3fnKesdBvyyz5fRQRjyUcGCufPa9nUmHNp8jboUxu5K6HFFGNBP5aZDV7L8yJWSJtZ",
  "key14": "3NVQzFL5WgmgW2cSTpfeiuKJrYSzfgnHYimBnE3aZt8XFZZaUUwaxWjuyTHGzx8PKeLQ6K5tBACA96DcBpgF3j4m",
  "key15": "33N191WQ9SW2mPciQVmZrz1SRFyYgKUebXpCiqS2Hxpfx8XQfnmSgipG9fBAAueKzoyTkinL5H3KHpeEooUEc71X",
  "key16": "3uHozVYsCKjDb3jJr5iXaFbBVC6qJjYEiqbCFeGXTzLYCGQ11JCrpZogcP5qdzPLm3Qt43J58uHKkaLf29BNTcJ9",
  "key17": "63pT194q1vcxEQgdQWjnsKYpbWPih93PhkvC6uFRABMURgvZtxZomTicC5veTGXLtfydnGAKv5dbRJK4ajNrbUt9",
  "key18": "26TsaLmewH39GH2JChSrZ6i87QxKCsQTFJDzhoJLEYuyoet8RRtpHmxkapUebvdmwrEk72Ksa4p6NGSJedfFMd7w",
  "key19": "648aCKwf8V9baC4BJ4GvZBbwGaMtYGUYF4BMUhDVpqqh9rTRgWDf4sUmgth8LcRkbkMCPsSQN7zDNvoxLtHMKpst",
  "key20": "C8WXze2PtLwb1DbgxkUJt1WJM19CFKGJyJqAfLKAEfMeywg7mrhHx2gQcetMJp5qy7z8qx8pLLJoprpFxLwHdys",
  "key21": "5LsjV5fbJsxvnRmRtgUeMvFM5Y52d8orxabiWVGHhDWjPiFGiY4nJxuW5X4CPW44sqipwv4mD9tEJJuLC94J2P7x",
  "key22": "3KDbtsoji9auGJCH5qM6ecbYMy49zxRYPS9k8WcDum7KcXQYah6JEFuWeQkEsFo36R8jRTck7yhwJ3a1mExLxEZq",
  "key23": "5WE16pE2aTjwgonbDKH427AUiYGe3iUCSSeYAuyxaCFgCzwjpRmaSAzXKLJj1fQHrWZeQiXgeqmacN2BpsoPJiAP",
  "key24": "6C42MeucTq31qekybvBQGXVMEqLS1FEBK4yH9RR6rEvEpQZrpJ2z4hcHd7fUvqsjUUoVpWitUpeGkMZXatFwnKy",
  "key25": "KML9FSSqpYeuha7gXssbXgDba8Ptq1E3icgKTf1eFehaLoVNvaDP8Jj4iV5vfbgBCbnDDXe8Ez2CPKcQUnPCLYz",
  "key26": "2qoQ3Xfh7pbtdguBuNTkyMY8V8ogxBbGyUkLfX1vZvXz2xFFVTbi4hs4EghsLLTbwxigfH8Hs2PjA8QzbLYJTqAU",
  "key27": "3NQGvkS1g3fNKArmXC7yBfuySUaDvEan7eRDAN3Nh9H5Q5TvoXgcQXcELkmFTKYUbPdnTrM7g3reL9adQcpcMBQ9",
  "key28": "4ZEQqEuQM4bLU5UXiG3ifCpfgSEFtTSAwAAUXuUqtM8YnySkx1PfUMuuGmWTFWkgQ7Ey7dU1wDY66Dfe3m2Fjw4v",
  "key29": "49VrkMCMLZ9UivEHknXhxxNC8kuCEuspbpmbPbPgRktsFzY1bL9j8HWPz4CouVi4yGJzvLCEEsXpGpHXdLSKnh7j",
  "key30": "5b1KdJH2Pzf5zBPUTc5U3VUwxCQeEPo98Wf4C26CgdTkwPmP4aASNTsejFxPXduuGEdNDYcbz6fNxTaaZHtBsoqq",
  "key31": "5HF1xpPgE8BVU1By984QcYAQKpFrjqN1dZFnHAevberSqXGBgPqEzygSCXcnbSqn9EiCdsh9Hiz2nP3h31RFTitk",
  "key32": "2GBzpav9NE8i7rJro4P174617ioQYB51Pjy3F3a4FBoKUFLJzv8BnW8ryDCUEG15f7PvETEPVoTve6y2DE9tfkCr",
  "key33": "WMv1EGkE8Hc3jjTVx8JXdGed8FCb9K2uxmyC3RAsAxwZPTCncr6NSkHryR7962SXiCBFxkz9gpQtxQ27t16u9Yw",
  "key34": "5PuhGpjqDGuwWq4ttfWEd9TkEcvcK2Kt2QcbCNSYYaH6JjtW6zk9FqhtRqWP89QPTsz12LujLwxkzPCG87cFn1YF",
  "key35": "3DQMCk7UkrR1EAFDVmuoe8VFzESEE834LEWpfyXsH3BkxhbRbb7D6nTh2mBzL7un3SRTtz8LYYF7YaDJyj1qvQPW",
  "key36": "5Q3dz9cZtThazYsQUkHo4rySVXCJRbRtbEAKo1TpHTRuNQK8AFEfKKgBfwjabPSXhopPbmgMHdCdZHpL3TNm6UEB",
  "key37": "5h5xQrAi6qq4MAuBT1uxK4NyQUr7wfLpGKfcp4AuiEGnzqEqiw9PmEJuSB9yD5ccWCDpdE4t9oT9NGiyYMANFw3v",
  "key38": "5BBduNE7LzdCcfJRDWVw5Z2DqgxsaKhAkcSro9NKtMRDqUV1Ncz1FCjAwBfMievvKdwu8Xr8NSXgkBRLjKMUGe1R",
  "key39": "3R9isiUhkrDGLLUyANZ2JYdq2iB3KmRZCUmJiq4hK7tuBPMpUwPSbF1ENrQh6u9rxBV94PdxAxnc3GhTSAw5ut8F",
  "key40": "2hZsXcADmobDToST2dLrg79Ru8GrVmCkG9wjtmknQvViZokLkSXbhe3jsDYdb8iFuURr43c4fn4HWF3dFNKL8GYz",
  "key41": "2sZv49ukPXdyk1xxK3HZ5KTmT2K3oejRUZd5WYbASvuSp2aRe938zGF15FvGQ4s3M85f1UV9gGjJYbjiC7RWL8bh",
  "key42": "3BnV9PmxDhMpPfzvwpdV7QhbRN8ReREZuWmgiH68Db74S3fhzkW4MkAd1gPLK9nCAW4v1e1fNAdLfo1TJMzn6iWZ"
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
