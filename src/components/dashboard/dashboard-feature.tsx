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
    "4ZsUAii79osMng7knyufS7ZExtMPicbWonEWSGChtEphUahSdj5Rum4i3CwRitgxmVHAnK7ETTuXtWUjKK4yUFa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fjg92b5AWF2CdurbF6JnufH8sHPSzCgLAAxgVAsw9T8xcEnhjonjbZXNpKYH2Yi3ZdYsotaWgdmK85RigDbkNmP",
  "key1": "2CT3QDzQf4Jx4Zvp3X5rstefUYFSPhqDE7eWti7EBVkfVDieUEoPPdXNpuF6QSoYqXWXLj2SA8V9Tq9Ysjo8rg7r",
  "key2": "2916VvXU55ttUCPhavtJp9nwwrf6DXEvD493CewtNJqiP5HET29EAxkNsKq5J53C7EgJFcDZB41BtbPBojUUPN72",
  "key3": "5MZuKk3G5qA9MQfXEVkPTTNabMFeKotBnQUpEPXsN1ag9x4KjQb7bN4Gu2N4XBoBwwpDKNMJabwgkFNweLgLMDJA",
  "key4": "meAQbcz3RDVJ1K4Auraberet57hPDu5JRLx9sa4pykecfHjNYNdGnskHnvqPGrR23Csg6YrVvGhrZPg1kaAoQtQ",
  "key5": "5Thd26MEmkUWsKVSEZhRP9GheArHnpCFtEYa5ebgXHNCr9tXYWwziFSy43M7EG7DQNZVE1fRp1PQ2cWWXFx2CKKt",
  "key6": "3RTpNQYi6CtTepnDGnfNdn6QJCg1MTm4UVTn3dYBnxScb5msMaPJaGGrdrVJ9QqiubxZe3BCKjLwNRu17NN5gbK1",
  "key7": "59mfboSj91b4Vac7xGz5t5js1DL2qhXJf32e9PPzDRuiCDczKh1UHXMh36gYtdV9jwabfBcV2bH3QuVjrbaWRDcE",
  "key8": "4dXRKnkrPAKdyBwH1tgFzRANziF8JJvCA3hNMGscmuHPuQR1dyZHmhF7LJwPPmdWaUoBhPFyvjMXFJPZvWNAd5kZ",
  "key9": "3irSoM7e4RXyPXJUq5MJnsUnpVRJnSdwxPrwVsMWP8pst1oRjz6QPdxyo1DKL6zHdJeCkjGHYQAk4v26dyBUWaA",
  "key10": "58UQ6YczZFpTDjxks7DS8DJyErJwmpKWWhxzNjZBeRn6F7D24HHpegQ2fWwAq1gkSRhAYa8j2ePP1UHBkZ1Pqwt8",
  "key11": "4GQVNi5Mas8AnLL3ipphSMinKomMJrZX3JP6jJoRJN2NxZw2yunnm43RgbMm6Kgg5aYWgbW6fsSHqkWSzcW1iBXX",
  "key12": "3hvzAC4e8hw1y6ffkDvzGcwyLtM83ff8oXkstsZPgePFaDEc9M9YTd76ZHmGFmbtAvXYRx6ngFLqP9zJJkFxxxU9",
  "key13": "5Gkykvqw8VVy1gix6VSjUnactHx1Xr175k5fsFhXTrnGDgtvFZPxrbyxwCjKTPTqwQmsa6NQEQMVWSrAHTntEFyf",
  "key14": "5HR3YpBYrGbCKau1Ri7CkuRjZSv8raq91EcEVTQuat4nSsVELh8LtHkiqt9AnHfNfd3HiGmqRKSVnkWSRzUFrCeR",
  "key15": "4dsHVWeoc6yzxZVSyrRpYAezJ1AmiK3CXDYp8Lui96BDQAtM4q6CSvwvUpTbaGJn2kUp7ngzVmd1fkyK5phZWnnS",
  "key16": "3evLXcDdwabqtqazWTe7SpCtae7MtbRxNDNgN1xvTR3yHXADydfvS3nSHWbe61a9U1vnVnPJ5q1zwzTEonfTQ1jB",
  "key17": "3SUPAyiadbhbLhKPrr6Uwbqu7jD8QvjiAEHGq49PjyRqPV7vWaZF8iAiSBKnM2cWZYbSuJP3aWb8mTTwB7Rj1NNT",
  "key18": "Qotaj3oajTG6mQ3huxadzMgPmD2ryQ7Nh8fz1VFUn5hKF3q49mNRk77RyMBkwKjTVtjf5A3NJ4uDHAGdVmzcRv7",
  "key19": "4NYbPVxYse5DCk38x8ao4qeUqimBCWLHTYA6K9dmhWKvvvUzJWFxm4YjqJPS6mGv5bW8o4BC5QgFTDivdtdiX7uZ",
  "key20": "4hcbSbJs5ub6zT4KueCzLzeRiwSHViAmCQRar1eTGbbY5JBXuP5FfSd1DSwgqn3CsHy6ThWNkGaJXk6r8nxtsYU7",
  "key21": "4hbJwAhyMNSxMBHQ7DNNJjiFnzraLF6BCM1dsY4P1qKafncBGBkaGCESQjKb1ofXccgFiJQgcpaaDL4JVa7UuyrT",
  "key22": "2t1FBPRdXbycxhoaynojCMaigbvwq7q5VmMgLkHFdfzZQoZcisdNvFU5YF1ZQQWdrX3J2869gBUMrWWNCTLdQDwC",
  "key23": "4ttvMoEh89LQhF9JKASDNhEnfwPURMZ7mXTavrZpDHk6pCKEb83yhARCQt9sgxWtP66xBuF7b9jYyLesJUQdu2NQ",
  "key24": "3X2v3s676uCUwPAzRC7bJ4S797ojEoLyTgCz9EQhhDRpnevTthhnXjKsjcYiaaYJz2GyTgGKyNKjhGfXZ5yQmUNr",
  "key25": "3PNqwdb4tRmZJCLqoZvbtdHb63a2E4rP4BVPzd5MqJ78QR3Txd524tQQT2q5SWMdVz6vGNKMrpmCB7SouZ2QobE",
  "key26": "21xNXKooYNGyBijcRUyVnwmQqVds9k1z2jbKaem4D4QCGQxam3pzNagKJWvf3ubt4365VE3SMkDkZdkFJJomKKFb",
  "key27": "5JW7acLgT126Z8APLdWS2QsmJCzwosMREhhnbLn2EnoFRLonTXKfJXSufFoZFc6AwRx8bXQZnkc2hciKFTvcQHGw",
  "key28": "5ng1bmvDKwVQzhFZ9MhKiz66viRMjNMAj6wg9g1t2bsgCWpeHLCrRQEEEvTktCQEy2CZEAGpViinq1CFb6r1jBx2",
  "key29": "3c29QHGFLZHT5UiNDo7Vfg4YJTwrKuFgkYfR2ghP9Dq6CfMv3vzeYG9MJja9MiKvYYDiYYdk3HrB8ytUEQgQoMh2",
  "key30": "5GUQchmG6wwVhDsTQkkBC88fcVPTmg2WrPr3nec3TbWZrzsaKs8iL7STSLBkhUjnb8kMSFytaCbhJSj9NYizbKNc",
  "key31": "2Vn2BdCJRH9YCNyd1NnAwgGYUdGG3dWhWn95AchVxSbeyMvsHQegZNyLLE8s91BAVHRNwo1Cpone4Sw4cJCBgGGU",
  "key32": "3DdYE5MXSZg8qq1xogveF7EAKQrsyjNtDX4sQk3tmiNWFxDsZacLZwAi3BeBT6RkxcAAEDrU82MmCRbwHrJB1n5V",
  "key33": "5HGZraUzvRTg7dKpgZdtQe4mzEZ2QYUUeGWhfDHXRzkLYBU6WzmjQDwkJ2yGZzu4bGRMVrtyKPin5B9QLmbFWpxh",
  "key34": "3RYwmv1V3DXpyfsoGzaBpYzzuMcThumgQPhXBWhgdcijXkgW1HvWEWUu4Avtx7551PKcuBagyta8hrxNcu79YT1z",
  "key35": "3Xin4nix4TTPPpJpqLDBPA16Z3VMxNgvNifLccbx4d6o7aRYTnCUqMdDYRg5xym7vnJ4yX8cGrn7g4XeHVKJWowf",
  "key36": "4TLMswsWXkvwqCcJ2zh7gPkwoVhxTwzbnoJez67Y7nTC4twyLZtWxb7ucqmBknAbd1J5oSSSduUqKdn23xKFeC4k",
  "key37": "3CkTFuhidc7SqfZ1uE7F3HhoK729Yirni9cW24pTDKXBCq9t3ASYGaLHraMUZCWRoeCKgKTAXDN7xsmoQEFKNVRR",
  "key38": "4Xfic9tF2QjqhwbNDH9oa5U2Ymsh22AACB5mGPvNHhh5wgEMXBxqcENcHJ2AYeRHmtdYMxnYgaj54u71AFrp36Cp",
  "key39": "4jPpL5DXu1fc6FetzsYj4aFMPbTJ5UAT5eKGqFpce3XJ3amzcB7PihKRg7a4bRf2S1CjRTwjVmbgbEi93dum55i2",
  "key40": "3J4hutnAKEqSR7AD43LZ6k56v13JRv1qtg5dog85GAQPK51kwxoSzkGhiqCoHMnwJ8T9vkaY9C3iXAME8SMezcRJ",
  "key41": "ZJLzsknKSGXQsVrCU3NqnEBsnRWqwRS57upoxsKn97nUtSkVVxhggdm5HEhGqrHYM81xEtEThJWmXmK68Pb6sJY"
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
