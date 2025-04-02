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
    "45h3DXPC8wU18xqhnmF4ngdBVYqi1uSBje9sxByp32ANuVDRymcHaGQqh389kpbeyQowM67xB4NpXMFUM6QJNJXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iVXjJPFA8o1GMYGsGSYxQxgizD9QCErHjmvfvR2kQzFWuR6BLNY5XpaFG11eU3RE8A1Aezzsfa4KHvkrJoAz5HM",
  "key1": "2M2NLtzxaiids5qBoLyHwP1RbHpHQgfh8hTKiCBiq5qcTS6kaDwrSvDGNt3uWF4GFcSqdeTen9oEhEZPCgmEeNDd",
  "key2": "2S1a4ew1vx6yAHfp5JQDhFCo46Lx4AqmVBxPL9qAj9TWAj69JCsyGR3SNrU3noMtsgRXwAmmJn5rQAn7mabWZX8x",
  "key3": "3p6EGwZVju2AU5TSLYocByyEDU1xNzMBQXeZDL1g5ZduoYTcBeJzCtHrHQdUQfVxAJsMecwywSL6rsNhmx2ZQeeW",
  "key4": "5KS1jcdsvtEssTovSXAKNVvGSTZRrMz3wGTxjizB7ryxMJNF7hv3AkGHZUpzC2iXEqwipAyCvoYMXrMJLcKb3nJt",
  "key5": "3u3WosXqU1EtPjjQKaxj77LQUEeSZ9HmY1KDLr4AWfys1STZnedLCFBYrHYY5vMwy7iei6wZsKzbtcni9PyFoKGL",
  "key6": "5Qtwbov4GMbbNQ5gcffvLyC6KYtusHHLe2cyn1m7uWPMVepEud3Reja34CQQbwVD1dgEHgR69EzF9rEu4AMaPs1s",
  "key7": "2a3TpYYMYNBN8Rkyw3nKtZVpCTmvMr7tnsifdfpZWtkUYzuTR1EdhU533f7VpoGSetc6GnPhSTxBKEV4CSdRZsQr",
  "key8": "2JvqTwdCSzYSeoivWMRbXqZBvgbwzWQyc3wVRJ1qece74XJ5ZRNVEFUMotktLTbEM1HuZRBDhegc2YmrvyHePXsP",
  "key9": "P1Bv1crm7DuRoConhRTADMyJCMjtAkqqco3tX58d3VxeeTCV6GgWAduQhzAYgTxaKfBNUhyWvgQbxkD7pTSj3p6",
  "key10": "3WpbQHiU5AUmwx4Ja7Gp5WKdUkJ4Vcniw2AagF4oiJbxtk5eGELim46r2QrNTpVoXnrK2nLWe7Z6MtnUu9HuERfR",
  "key11": "3L6rWVxKVMRrXXMCZW5GshGXau2nzYSwaARhkHBdph23u875V5qiUs4zViEqyEcEWwV8Hnsk8SFzkNkgHvGPE18k",
  "key12": "2aTwTWpyakbxSdDtJ6Wzx9mAuirDng12eyqdR2pyAQtaiQZWqwxdunUvTREfToyh9BHfN8eumG3VguDdkEorxjUY",
  "key13": "3M99RT1FbBREPwHi7c7MMJVRMEdAf83jyTpZ9MpryvNLDRzirDZEvbrbaUAg24rqNpjv57mk4MYTdHa6Vv7DynDc",
  "key14": "3qXXehTvbZyCkstzV5x2F2b72JJTLmcK8e4H58233wmXrXx4sxDRqKuRZGBdxGwZYdoA5WZHcTSmgrDKL8KX1jHB",
  "key15": "cgoAHiLx8a6KkUFja3oJAgzm4wD21yCodSGGU7ZviYmciMkbAMjr5PXoHm3KjQL14ULgMZkpcWkNy8QZvdYgHpq",
  "key16": "3WydyVspn32WK1TbsPqa2FiQgPEKK54C1uBZkVcCJazFAWipYPWaTzfyfv4EYiNYufo897YeC3Xr113Haa8HVH3G",
  "key17": "5D9EKLsSHRye2kz84My9vxxuFJ6dqQorfuh5oyoyGunKLxtyDXZxToAY5info92uhpYrEWwsvEAd3Wz6RkDsP3kN",
  "key18": "2XTFCRJRLMzUMo2nWwTDm4eCtV1P6DmTy7oy73FKBv7U1m3qEii5grxrSc3KnJf6LA7ReBjAoe2mhWYR8FYezwoi",
  "key19": "43ePwFvwLTq4x1qpYbLcUu5mgQxZfcUsqCvJdfBRutP9MzLtaCUzzB3yD8a9rCCuX6zX15b5LzJz1hj9gweNJMF6",
  "key20": "2CaT2ah8gbwDLAVFTVf31RWpAtUMStQzXhHgTTqQnc7L6nm7rgC32obXK8JZumvwbdQAouoD9qmzEsFsaTGPN2uK",
  "key21": "4PrWLRN3jqSiK8XtpNbW2ST62JzswfwvWNHo6qqDPbSP6WH4s1uCie4z3BNNZwNF4qumBm946tf2KCMjkcA3ZKEG",
  "key22": "or926QwJEoRWg6xrrBvooDmm4kgE6tBTcU4tPD2phD4ceEgCynXyRaULR7C2o3hSFkPtZR3cX4ph9c4fAwPvhEj",
  "key23": "3T5tVmNRPfwthKxpUK7oNoHm2Sz1sbmob2ndasuhaV8vNKFZNRqCJZuzrcsVgbLMZdBJq8Z3KrWvRWsNNK42y5NW",
  "key24": "2hymZ2qktFE6grKc2BDSob1Wy1j3YSq8XdvsnPnXkTC3RFVnxt4UmJHbL1LwBzuP9JLvv7XodLcFx1hCYAyTkaQf",
  "key25": "3iq2pBBVkwVAxjcpWfdnDcSnAzgEL7oZJDKBxtvbuTTyHriAHpg6ojPAx14xbrHHRfwFL6NWezrQa29exJBMrp2e",
  "key26": "2okk28bvP8X3E1GnffNqbwTB5iLbECwjkk2jwy63URAZsBWn7eHQPXGy8fqjm3FUDGcgw8XYm3UriT696BRvhm5P",
  "key27": "2m1ssWZhgjWhoLacq4etgEEyUqy4mRHfGjFckWf6BvtFGE3wgfSznhjgVCCUj38Zad1nUfCcj9H1Kmt2xwC22Anz",
  "key28": "VajUtmuz7TJtZDcTCztBNJHzkfu6jE97GEz2CKKxojqma4eNwDGQioJr9rDXRseePeF9JZs69mZemEg2jxDFvZV",
  "key29": "2BfLTygN5oQ1XeZAzqyJJDppPnHHENBGW1EzjeybuakQDi6917ioeKWoFxfXzvLPyC2mFvvPcYeLJe35GCJ68Mfd",
  "key30": "3XqNTjrSRaW6jmDhiGcfbXNzjzLZKQm8ADUGo2gb8WW5i5ZmAMyYyEh28rargZSHZRDQ1wU3Q4ZWumnuxviKvbMT",
  "key31": "3dbxRXepUTgka45fnenpKuk4j9UfiTNMK7cdMFGgzcCii5wAfdaoZyM4M548HbXzkoNMszPY7hwjHWBe1Cdmrve3",
  "key32": "Uuvtpa79G3rbRoq661urQUE5X6Wy7NPqxqNMexw1F4oYoRH38WRmfzF9t8hsrL5jUFFUj7eybuB5tZaVyiStyTV",
  "key33": "3JeGB5qnMvXsRXemey6S4ae8weGbLvubggv3APBRzuVgVTyDfXJ2tfFcswBoJVchfGTrFHLcjZwN9cyJR6i5bnAs",
  "key34": "iFCLXCmUY8rtascyUz4szfBCapQ2peZmLBdCrfybBLvrxuE7dUreGgeiz4drwGJRKotzxXzUkUpUPC8st44Q8C7",
  "key35": "4o6Jg6CMGPjumsaZTqEzecvYMhFhbkDuqRKLDYu1La4HVXkZ2C4fAzVQ7UGx1Rj4Lymc1g3CGyuNaih7HihWwgsX",
  "key36": "3ebMqTNg3mNdXGQzC6wgWZSxaHATMgBE6wxG5HrWZpkS5s8qcXYNgujFPYDuPtm1GxLmgCVpQR6q4gejHRV9nkDT",
  "key37": "2YNediW6phW5WiZTpSBuf98BW6ZWktUeVvZ9DFDTra9GsTnMNr54jRDrmeGfGokS1qRGZuMJRosyFNGDe3A7KP85",
  "key38": "Sbj2p4NqcEUPJBinhpnd3Fm9dLyummKRJDUY9gQwTA1mTunxUVWPUCAynGm7SeJbLYJx1xvp7fHwPjSDU8SutQg",
  "key39": "4kkRkyKtfqgFtJ1KoCPnxByUKCNa6hgCKutdEaAcbUZN7yWrHif9gfaCuWjYfgr4TikWkGD5o7rBZhLakDYvVLRt",
  "key40": "5FFuRuAhP3M9gws4E7MRdRDwFoTRRpN8Htg9HA9dQEJNzVgcqNz4LNeyaffKoSeCKQ1fQ1GX6J6q93AvqyDAqL5V",
  "key41": "2QDYP2NUzoseiVcYrPks8ShqgANhg4MqgrBuVN28qLxM1UoRewsY4WUVdgy92iQ5MzNUXxtoQRETRxhbGhc3Z3tF",
  "key42": "3U1omTQb4qfLLcXBMApKAu8CVnmFrjFD7CmqMA2HdwuRvCFs5nv4YDhij6QLUxiME7BPQsCJp97o2YYyneX7CUXM",
  "key43": "41NqquanySJWN7XaUDdLLLhikSHaMM2G6VsVp5Fvb7i6RF5LPiE7eepEQh3iNkDkyRJV7tkpd6AcTug7GdKXZXL6",
  "key44": "5ibZYqdSU4iJJEpTEDagAqPBgfw4jDvC7VWunjt3anJztyFTrVqEKEJMxCZvbNkmmQLUakMU2wqG4Q9yv2FGM5rT",
  "key45": "5Nvkk9k2DApGWbmeRriEAxUtEzdr8HMGUy5vVN2SLmVvk8MGTkDvMxNeGn2qFfKxzTk6b3cAAu2TKHY9wxeFa6T5"
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
