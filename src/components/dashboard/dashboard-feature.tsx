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
    "5QxR3GXoFFcvnBvXFBKTLU981j2uyCWfzEHnMvtfMv55X8wycMjnzSupYS2XyKCHXUZqnoww23ybJ7wtDiEX1T8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nug5qdgEHz3JPxDbR88DNkxKP9q35p2rRmVUJm4efXgkXDA6mRC5fQXK2vsixtjHV1K4bn6hUfs5JmeFhSJ4Jv6",
  "key1": "5rqRfWuZ8UGFa7C9fRC6bWXsrYpaM8V6mvzVbdFqBwhdMxWfFvULndWu1APb8WVZ1G3VAKCPX87iAXsc8F4BPKgT",
  "key2": "8pYhvJkvQPkShXPm9yV4sk4vy1wHL74txzM7whV6XFR9BPhdAKTdCcT7dkQMW4wzc3WPqEYR9zuVEradKdDq7Hn",
  "key3": "2VF1UtNHYw116DUq4amNyxDcUNtqwPeK6vtp1JgNr2BMQdWSBsEfLPQkFVj11rxMLVQEuJ2hUSE2fn1ztWLajPKU",
  "key4": "38e2sTGbxkmZ1nxbUHyQjGFLR7JkD3sFrNPDXbvcxJKBk3inyaqk4t1Vxfux5KoDD4223BsM3QTsM4AABVjGSCjo",
  "key5": "mwUbmf7RymqDC8ZrPbm9dd5vB4SVDQWuUcyHA35ZuBLrucBmCU73sz5sxuWtitekUkTGuMSriTLFnF4XPVjdw9Z",
  "key6": "4kvUEa3bzb9RB8hUPPTYHjHHNoLQe49pymuMLrmrdtaZqSwXgBCC5XeHdTzTDAzVJvpWd12JuuWLT5514DWHahsj",
  "key7": "4xGe4km61AajK5t2SqmA5fK87F8spxDd9YK12HurZrCFuxXZ6PG57L3YnPgibt9iLAddQQSAgkSBDwmWUrWW3nc4",
  "key8": "Qz8cMPG3FbHH9nYmFAvbc4c6g5AjsaB6VYPQeAPtEqgom9R8kFjuKjmmzE3L83N7df9NURhKN6QnQPmiKEBgP1P",
  "key9": "2JVH9RQzKCGLu22NZz1J8cBB9sogddV9eWNW6793PH7DqqZ28Tjw2nABNpbmEAL7J6Wt6uvNmcHjR5XNnUtyivaF",
  "key10": "5XW7JdRjrTaK7c8noYjvr7WUGGMtdhy8KupvkBQuv3zr3oTyxgU9Q3xQ2MyXqYiQCub9YKBpNJBGQbbw6PXpRdSg",
  "key11": "3327Hr5M9nY9JcNipYAuC1JDP1JcU6aJv6nXgnhLuDjwmp7xcpFMJneUG93WZZuyRzo9HSVxo5tnUkK4VD9QzoMT",
  "key12": "4dxubW4rUd9wmGZsCf8nx12VazfBv82G8wvNXumUWzUVEZgRsn8Q7pUaSujuBKiD7YAWuaL4HLKhrS1E3D9NF27W",
  "key13": "4mERttLNpxubV3nGrtWWpAEBbniXU4ms9Y1K5MtkWik5Ufq3RexWSXCN6TujAMr5irfSrZeWgwZA6vGKMJZUgRH1",
  "key14": "mn4rUwzZKfhTXFt9cSBAEfy3ZbpkWhK678Z8eHWc5m5CzG6kDFWavmHrB9todnqo7SwMqgiYdG2XYfTnUo8PpgK",
  "key15": "3v3rSwtGnEpRpudkNdFuEBdPVqxgEPQ6ac6BrbWgg5ifWTErGn5Q2H7Krf3DPFVKSYVQ5hd847Gxrqq6uvQcudys",
  "key16": "5E4owyntrNbrtRcpojdQoaj3YSnADByH2F8yWJwqmLwAEdx29UduTm1tDsqiRT5Q4znEx96D5UXpyzqhAj2JbRPF",
  "key17": "Fdb7h1FkRNE9uDL2E19p2BkjZdZK1vhR9g58m3Yx6p4ETvabdxboQhuAC7UWM2r9BtPPxmmevHMFVRapCe5u3cy",
  "key18": "3NfpJ2sBuL8mk6gMLjiBJehn2xGhGPBUmceQ1MyzBRPVzeR25totcJm1Bw9o2Qqwow5QVYskJCfVRsRmSPyahRYV",
  "key19": "5gXjyxUxWtuPRSf8874N2fAzyoTyM5u2pv5qGKyvyTgqS2Dt5vMQb8SkmuUQBesjm8c2hAooMB1wgXS2AWxJyUwP",
  "key20": "5YMtdhSXxuu351Tu8fjkZfSd4JaU3yZJjVJG29MAzwNJuXqWDdWyx5VppHWKFA8HmroxAB68uoEsSbk21NEwHfWw",
  "key21": "3hUx9T7z2gt1oLF7c8X3ZzP8BMLEoaMVWFCANu2eD6jrjaHtCj9yanq2pB4RyLAoBJADijkzqB5JmBjScY7Qp32X",
  "key22": "3LnfVcRFZ8HJm2cwgEc7kSQWExcyejcgVfK4TKouqB7uHCky64PKJFrRQjfCdKJKSxu9E2NyJtQZJivLS7qKq7oV",
  "key23": "3xZz4yant6dLSsm98PtrcWLF3o5jiCetWPVM2TrQBdKMPc1w82HnhY9PsMWswjV3HA4pCFM83f8uENnZ3wVeYEmf",
  "key24": "37VGWMnkbMyuF46T14ScP6yhEnkELLiXRgzMQoQSRtSDrjHV94XHiG8wRcVh4SMcDgZfZ5DmEiqXbjej9Vb6XU9Z",
  "key25": "5x5GjDhFQWhzaXRu5H5HkiW9MX1efGkfiJB1cJ5TzR9ejQUH78Rv7Yppnp75zmpkBWF91q9MecmCTMFCDVVibv3y",
  "key26": "rDixA8AyxNV5sRoUfhfoqaqhvTpY3iqd8CAM4PjLRPt6X5XL5ExjvEFAUMFRgiF2FtvDkbXgrnN5ytHZLMqadQS",
  "key27": "fLdUD1Z9MhwzE15WTKskS4mSafHGfESaUjucdX4rQMnfJbvtXu9CKGSqpmx6GbQuJxEtBDHkcX5W3VS32XBvUN1",
  "key28": "58h3j7xVhVCmDWFLKLEpEAuJC5ZJfNjN1m891p5zmGDRmThirjsv3D2fwtuog6ySPPmFsYtAJert4qgu6f4kXru",
  "key29": "3ixBj9MED8MMfQLW82MP7gmccGDku78UVnsEFtweiDBsBCJyRuLbtZW1eiZaVhCT6NKoSJZFKeLbWa1rGJ3wAjgg",
  "key30": "2jhR8MXwFg2DjfWfbm4bDkDnN9ZVto7xsTq6FBeWF9qwm6VmYe6G49zvuPAKEaiN6DrykfT2avWt8V1WVhAyospX",
  "key31": "5XW482R3KNqipA8bficttKAfzEAPsVoyuNzaMBM3RJMTFpRQVjPzHbFwUt5zREcdk9vq95q8sPCgLUKMybYkVhpM",
  "key32": "4C3MRLNxmrCSaaiFcn9j4KNf3dy7gkubE5odWCV8gnyD7qCrNAUsyGWuJyQ4LLFwjvDUktL194PHZuBpVs22ahsx",
  "key33": "4biDY9R5gv4bCyZia8SiCvB9K7RE6qEXPhQ7gGhFJ9gP7J6xM2ocrwwUDuuZpF2mDUrM4fwezcGZ23JXrzhC1wX4",
  "key34": "3rgD3sQu2YoBvquLxT41T7Xf9RVgax2ac6hKnyPoBhBDcXcEwoarYZWga6a7fDCw2xPwVdbHEaX7eDv9Jo7eDdCN",
  "key35": "HUFp8xCRQd7Wx8dn4radj7zm9UKtzys8U9U4WpJq8XkNZmftKe25dAfYpi9TWAx8UARMSxSaMf18YpbGb3Df6Qu",
  "key36": "2nvDibYZvyox1oC8Yx67epuwwzNNZ96mLLykMHGKEVZQPoHp7vpXHSwG6Pm7MyZRQfVAfsxiAsNWwqc7PHrZ6qwL",
  "key37": "4d7fmzMLZfHYPUrvn9pek5Nato1H3LHXaUkqPLdsxYqda174JSk9E7G3gtULLkWuk3RLvonGdmySZcJWeKpJ3pVB",
  "key38": "45m9Gjfe86FSsmDjdSJzHVHdLqcPE8GMkMtqo55RyD5xSydcRDJQn1wGXj8sKgjduF3FqyBgUEqgBuQkXBt1TLZz",
  "key39": "38wsjHEqjkSC62unpAEJoxLSDfLe9eGp1okBFsHbCXykQ23xNonoLU8cx1prK35qLHwWUCjokMB7KqZZT6BTV4c9",
  "key40": "28KDNG98ECrcVDsE4ZyFsmtnqSqEojZ49NWEmyDnBhWEabTQT3rvFRXbTwAcZiQErGXLe11Qms4V8uwqSP2GQjj6",
  "key41": "48ZcrsJDG3PnvyX5jr5RQzVvBuik55QExGR74wdy58u9bnaFFkjhr2FpQpZhJmvkKimz2fYXRzPdV1N8vB5K5Q3f",
  "key42": "4v2TAEjMd53eqhQ1eR1tchiZvpTpMaV3Y2kAvnXPKSUVdKao3hL3J1H2MgPBCUXvaXYfb5FHkqAMQCkiuypqtNMM"
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
