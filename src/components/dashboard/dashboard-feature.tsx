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
    "WHPWir4RWVARWzi5CqvbDar6in45dUWXAVZnXvdzFfwywUHRTxuFKwoYPTxUdikPrxJfM3MLNw2Rh2GEToYUH4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJR5VDFjs4GnQ55SZjhrF3pyXPEi9kmPZGREs3sDhVRBWHo3jy8S1U2sis3sfDp5XGz36TYjGTzEo681tAgLET7",
  "key1": "3sdZRNxX5vPwHv2m4Mx6My38hXF8NceJ2Lz8sCTdMt4dxYVBFuUq9nAQT7rcm6PZgReCnqxSdHS1UBQLjREpGMUa",
  "key2": "2PcucXWMGAAcgLf1pjZte5Sqr74Pyiyns5MARkfVmyecj6NAapRXgFKZLNHE7adSQiLiJrG7puHYQg7vePpo3hjc",
  "key3": "4HPM6JXqHvkhqGt5UiZ4ajeKmgbg4Rvx4k5emwhyg6jxUA58ZnXCkPWqyNoNKDfcJB3EDroFGPBJrANRSUQHVMBp",
  "key4": "4zEhWzyDz6SrsPVciaEzViqzSEBTaQYxB62GSnh7mkk3gZbrXpWoV2aSkjJYP4RRzTiH4KriHrsVxd97wDG7UTnK",
  "key5": "3eYdiYKtFVUNEY4PXGX958AB9A6oEoNfiFLzHgRv7BFG2mcRL9xgeTgvxTvNxU9KLHsxrzR68aQCxPSSyR2j8E5s",
  "key6": "v3DKsrqSzQzEfXnCzHVt8tmz3w1w2aQbf62mXPAoPuETGFSkMevECQ67drsZxKn4CF98dHQhDG2ixrYxgLbe7kH",
  "key7": "2JycBDzMoMDLDmetpuALwexdDwa489H46RqPwgGqwUBUrT9dphwNrJg1NViQEMPT17yJ61SGmkcJCbLMkjf5nH72",
  "key8": "2RALJp3HAhZ4cod43ddcZ52Ub5Eha6h5em6uWC75FemKGWe6WaEr6VF7Mz2ot7qKrXwmiXASTUavYi4Sym3f2aQy",
  "key9": "RgdDh7mzZt41ykN64ZDebspV8YdaVGVKyUu1HSuPVWPuus9zWPm6AfMuQRSSzKdyqY4NTWdMWrTeMQJcLoVuU5H",
  "key10": "k9yZk8SGbhYCooWYg6WLDfWPDxJfCMuq8wqMSiBNo1xYDekKNSHrd4Cu27jBnacKeqkjQU8taXfBi1FRybHH8f3",
  "key11": "28eBL1ivu5LKdtrxEWYYqBdWz4WKxeW6mBbtj3SDFZCiHbHuxZSihbdC7X3W96K1s1cCGFajTNVtGyFgKyxqU3t2",
  "key12": "4ib9nLcRZwKADVZEX5tAC2oB3D4MPPQjFnh5JXrogPcUwQAgwVJTDB2Bgmag9ihLMz7nUoJYbMRw7utFGfGt626T",
  "key13": "pQxsTavZ1s3zq5JKcdhSvQUd4QznqaiCabDKNxnkWTm45XFzdFXWXt4DBxbragAy5oDDMUXxQLAoGVaNTQTHG9p",
  "key14": "2AUUyuVPe7ScoHNmADtRL1QDhTJbJpMWbupEMfWESrHWYnp56Tovh5LGeo7EKB6yxHuQ3ypwKYyBxEaLPXdE8zpy",
  "key15": "55bRGp9SGAyD6Y8U8FwcXaN8voasxUxDRhh9YhfT3EwD6Uz6qJozvaxBRDKquV1wcLeiPXcAETfPPikF6k9Saved",
  "key16": "5HxrP58JGaB9DR2u9D1nQAXfUYg3mTjHAyaNhdqF1acAgM9xKgTwdkpZGBGCqwB1dvWegHsJ33oCZZhjaQBRWHcE",
  "key17": "46uBJZ52cyyNBfdSfWVrTkyLtQ37iGoovuM3zdJBrasdpgboT4aGMshzRVG9BLBStgPmYkXmkDjegrLPqcgc8U71",
  "key18": "4V8kG3h5AUXfbmnnwWhD29QjHbS2zhbEhpoeY39Sgx1imnHWc6usyhj8n2spwHYK8JnrPXaGShvL9pQGrYUVoTVk",
  "key19": "28j5wiV3dgJuruqxboaq89dhEBk6FSTMrhVJ5kSjRd6ydNaRRkDGpZudoQkCoKahg5ehEXjcMMf3Ag1rAA94bjBs",
  "key20": "5Ut92eLimLLZnZXGQbupnQSZnupcyobyJgVHJsqazJp45pJGxKm41rPPFbUsacD8t43sXBkx61tcmim4QJREwpxn",
  "key21": "jWHhjiDG9sSaATzeFnmnwMCLLDK97KCYj6zQrRLzGCLuemZzzUNfJyHcbAiVEoEqFSy9Uk1bQErr1LesW3AQwtP",
  "key22": "3SG587SUWHpn3NBXQvv2rM2csoFXxurKUxUhPAMpCYAGaBSLDm2zUbSo2xD53T45R1uMXhNCBLx3q42BHoEwaGNA",
  "key23": "2HSGjhjTx4TV9fHPnKZMbd2RzXaF75to86qiSw6KGtA8fxngi7xR9CMCfek4wucNYech7u7weAtdc9ohrKTeGQEG",
  "key24": "5GBbga9FoKJeYXwvavLUmMeEshwJchWvqApbiZ5T42XSiV6sovKB6bpop1WBtaALMfgV5ABMA6AAA8eyy88USM1f",
  "key25": "268F7uzD7wirZ963on2RVYVwryKAPmWReusDTQMzQLDDX45cusvQn74m3Q5LeesVrA6F19Qp9ti8c6LyD43SKf8d",
  "key26": "4GigL4gzvWRhD5ih7oe63azZJ46Fp3a8LnexzY2mKtCBGmhw6tvBcGS22xkYUTrRtp9NEBbQaoGRyd7pFj8hMGoR",
  "key27": "2rJU1hxTTDfZEHfzLra53U58HyREJAJr6VDXqPVaZqDwdR2uNARzMvJSbXwGdeSxL27DKB77o5UYt8rXxTK952NU",
  "key28": "56TjyQTYRyQ3SRziWpGAjFEyHRBh4YG4VTWF18LqBJVfhh21EZRn4jjfRi2mr4KUZiGsAYqjxmMfPKGVafaPUTrQ",
  "key29": "Qcf9ZZYcVgw1gfVxWgCKF57LHEgPU411hWSapAYBE1Vqxh3KQ6dupXtGFudPucu5gpx86vAvHXxWYDH88pdede9",
  "key30": "2SCLhEus42YUuSxcpQ8j4rqfgxGuarT4aAANMVH4eNaSjYxiW8Y5ru2wfrKcHqpdd4TTaFkweMqJ6y9Grt58qBVb",
  "key31": "5qPp7xkKsGYYkggGheKFKgoJaUJcsoAvet2jgDfYpBRjpXi2bMEZWJZd2kyEucjVd8UrR28Fk2cgo2uU96C62dQu",
  "key32": "4uUq1vfkoMzejdns8hwK461gvY2YTRXj2pHGWheUNJrxZ5gqMviKifhxJt68Ug6TBCLRDkNnU6uWxRUQnXBxCu22",
  "key33": "4xxL8ezwQCeTpHTMnm5w5LPu1yeqKESpL4GMgLDqDwYoUX95w1sGEa2558harxJHcw8cXmWZopd5UrHmuQoPf2Bq",
  "key34": "5CTeowmZbn2PcFEfXnNttFfqbxpQxSPfFWF5vkwmUqWLvEdrHEEvp1Fao8eQBaSDACWzKfxgkvVs5E1KdwNynmCv",
  "key35": "56ap74YmU9Mjg9aAUD8LZzHQrGUoHS2XsyWaxyBxGuDmeVS3Fr71NodkJEAVNF9hk2AWMqxgfbE5AXzcHmBcHonW",
  "key36": "tzbdw2fJCiJGUK3oYcJxFHJAGnBwxpNsWpLm6cCuJjfubR7LJw6Rno57syLpgeczDAUpw5uALRtkbuo11VFdDia",
  "key37": "5JCwgk2tbqZuKrDhcefmy4c9pg56cv56jyzkQoCXM1AKa3hq1c5WQ7UPBANfMtofr9yWECCnhbiDFgWTdKDN1Y8q",
  "key38": "5AHL6rP1qTxdDVFYskzDgbJuREPHbJFeubXZSxu6uVPZDfzC7HgVASKguuvFRHFrj1rkoLmHm7JAMaZbj9VaJZ53",
  "key39": "5BP5TyvLsX7M5gqnRLjL32eekNkvoquu9HXvnqc6rW9mDTcokL5AfEdq4cC2UXXDFcbcBBGwBKrL14fPQxWfT9WG",
  "key40": "4kab35Kn5jzmHikAqW8F7jZYxZJhcKWW6bJ3UWM1yQgPyQwC9rLCNBwiy5wEDyTJwodnjnJ47wB2DqLBmVvHcvYA",
  "key41": "54k4XKFBWXgsKXH6BVMwBRzKhE96BbSGPbF1kWMBzaYXCTXZn6tyGGcTQWEyn9Bcebo5D8TPGswrUMj9doDpyhpw",
  "key42": "2Y5VDBmJjU85oFqVQS2vvTYsaVKtoUYKbtcjgvZyDTXu6BQgEroYarkFX6563qqM9XiGYsWcVWbbiLcfYQkvdqgX",
  "key43": "Z35QrzFasmnMusyJEijSFbEoH8NEFnokzQdNFQUsKTLZ6gmeN4ha3hSK2CeeiF76sTyGJSL9MNxooafHy5QHV3G",
  "key44": "5RSgRi8vF92ydCc3ENMVqHYNBePKrUsheDG4nNrtTXSYXwzced9XMszhe5R39jivsXgT74tG6V43HwiJ1QMfRy96",
  "key45": "ygUHhZUgpSPyGcEddgxjaJqgDxYBgkz7UXdjSnkZXPQK85vWag1tQ5pCFgusZsTnM1G9TBmbfmVbSY7srojWT6J",
  "key46": "4TherGWYiRmXzz4ahjaKnrZX1RqZsCvRodKnkGktAVxQkewVRZQcLXSaw5rm5qUodvm9fecGoYXuQtvoubAerPwD"
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
