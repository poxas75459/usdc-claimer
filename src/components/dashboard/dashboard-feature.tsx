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
    "3mTqgt7WdpVXj41D3Kn88eVweqEmyJVKLwMuKteEAmgrhvPdJNS67iHMxnvSgN48YTzYyZCHaXpF9Apqt9yTK2px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xoLK8YDGW1NEBfSbAGtMRtMhc61Y7mAZHXF3tmp3zj1yKj4wkzYf6Ua48UXJnjkixs2aaq8HrdbMJDr47WUeig",
  "key1": "2fDn9akb4pgEUsXfRnufVUckXDBYFfUhuE5sCHPg2SFpTTHbMqM4xYWAhaY9j2RYLgd4npb5jsKsZiXDpPGqULrR",
  "key2": "5Pd2wtjVL6pwr3bnjWkkot3Gyx5wrsRRGjsXVnBvaSAmiua5Rui5nYRgxitFvFRVSpk1QP4zrtHqUXu5pKFVgomF",
  "key3": "319y59YH3xgHN2WLtG4HhcurgnHi637y4Hxsbqdw7M5FTyqRWSc7AfrUx9eM6asiqE2dNWcDBEaqATYiF7G54wse",
  "key4": "5Mvw1pY36wKGRgBnh7CanhhqC9so818uLVDmqXbFgudqqDan3vCZNoScavhYpkqfQsqoyNqZjiBDUB9Aktdeb4au",
  "key5": "2m1MefAsU4C3xJc3xxmougoRxHftzbLj1KqgcLPuXeVWoAd4ukT4byD1tMdvYMGyDc8C3C7pUVu4BtF1EKFqYWSY",
  "key6": "4oUr5sQowG5HSV3Y7nJWFgb7tgYVHHU9VgiKRCcJhj2CHZPDqvUdbJ2wnkzr6KsW89UBzjpMiHbiWT2FXnWB7puY",
  "key7": "ZWcdmi3TiwCAmDK42mF2CsmutCPBpvvCkW4HxmWSDTvFSjoRPvqN54tz7qq65T2gUk3QD9XvtsrASdL9qADGbdw",
  "key8": "3tTkZKUwtSuXtfAAPTTK2nUsewWNFFBnqQmm1CVZ5iik74L1YgPQTEgXXnXYKuWRGmKdQMd71RmVurB5bNpepbAx",
  "key9": "o8MWZtdE1aNqDUtCKu2ZAHBn8TvWrvkaASe4mSXWHC4ohTEesNaCpSwzgg5iEjRdk3PPFHQr7PqtPfzyjpt2BVp",
  "key10": "2NpHQ2JxhoGTi1r3zVojEXZVowYomBB7sAcCUygrehCjz6Yx8J3a8vKeuEevrYcJhBtPacgfZqDqx433XYamQ5ma",
  "key11": "fNPHDVSgg6f46pb4siCigtbCE5oM5scn35YDQTdqL3fuRYhS4PXoTjwJHAmR5THu1qZUJFEFeah1qjzYZBNP4bk",
  "key12": "2ioSKsQkWd6EPpEZWVaJC76dHbRZ8SCpDSn4Pxp1FJ7gau3RcFXyTRxrKwsbvSG83toEacjViQHSarVKQUUa1NLs",
  "key13": "xWncpXbbAS6nEBu4cUkaSdVs9joFvwaAJ3bNWnwasDxdjZsgZBh4TXLdfcDYa8WE8vVEGb9frzcfUByxxBzcxRY",
  "key14": "2Dxm5ssMLpx8KLxVvV9fSX4GncgKsFtVnRTnYvdm3GtwxfubrHVRY99H3wwwP5xs4heA9KGZAWWxCNEeqAZ2e1Hv",
  "key15": "47TJVgNG65MojDuULbXX11FzTy5otNU3vHJHB24Xdh1puGqFksJfoUrQpSGB4CCYjyLZ5mNAuJTqmcZHPvEA7Kfo",
  "key16": "2UwZAGewiRGynhLyYmzpGFLsHLzw4wyvbKqY7krjWgXQDVWnXRAtdATKUhqafBDv7ap4RcwvPkL5jkuZziokwTQE",
  "key17": "4Cu9xJqJxBtR7Yt9qh5bdYSprN7hmVJYbLt3bZx52e4dMy8hcVRzi3mnvCrBuLVj5TkdXSwUGcSX1MzaJXASm3cm",
  "key18": "2VL9tSYLnJqLA8eDPvigWCXVKvLLazY4prAqJbMjHPCd8qEipLcLMrCb8z8j7UB2YyWo8ig2W5T9YNv8UwQvANHS",
  "key19": "4HanHYhxYp5nThm78N4CDQsUZRzgU9TWzeRBoeVoug7b9G1mDSHXcpXSfWEkQs9cX9vL2oVsjPv3vJY48RZkL1r1",
  "key20": "YQssHdYAoq6yhHZF7sGayjMYWrTSvAUGfKgnByxTRRfyy5MUy5q7jWJHSR9GS4zLjBFq1ANitswwH8jhTcDy8ca",
  "key21": "KLusP52J1QKV92rHQKjr28GiaD77Y8LJ9ZQNSfVdTu8mur38QNraXm3jZETdnHNeo52ApD9AqePy64bu9LZoaqo",
  "key22": "3hEqAeWxjmhCSEByUfvhuYpsThit2Xzb8ByWpcsWyaQztieF27g8SL8hfb6eiCDCF38nTduLa9WHb6y5jUZYhQry",
  "key23": "mDKihKeoU6jv7YufCnhHUosL8HUgFwNK8i6QZYqDSCkMJyUWUjrerKjhSqJe9VTb3PTz3LUNya54QnkbB8JPuz1",
  "key24": "EwkzKCLY8X1SwdAiWJpi4cmxb6zHixgNLo9uB9HPmgYd2ALpxoy193squX6nA7ytWPaMZbzPE5BC5DatpQiGCsD",
  "key25": "4G37ENDPA42G5EQgmTTYZ8DRGgzCUVXP99gpiVwdBLMUmn5j3F4Lmu8rrm71aPGcjtnXJnzp38r42QYL6irmnP2M",
  "key26": "5oT9qUZ1woPofNhJmo9kssNarYabyvGAPphjHHSpCbabHc2LYvfhdwjZtA7ynu71BtGDHpX1rws1Ggu3vh8YxsmS",
  "key27": "44D7WRrunQAHhR8cu7TSqHyt93EV5y5LULHCcrr4BLR6mjuK4L47USkP3wcAtAjbbNkBgwPVWbvfo5KHcALKgsuA",
  "key28": "3BGMcMXCfqSd8n39u6H6efNzs2MVaUUQjRvH16ybvkTd9CyB631BDjFdRmCzkZFqy7dHatYtYF3rArGFiAnrtC7p",
  "key29": "3kSV446MEsa9QtgnMgwRfRD5mGL9fwHhkXAHzpi1xremb4sm4LfuBu6XJLEC6jiXgW2jgkVxNnzxyd6NPCwsp1YG",
  "key30": "CXDPfpSiXVMDBX3m497JJXbjwzWQXkFdwMXTCB8PsQTjz7d3pUS1hu8SvG95s3MgZaZTWQnEvdjD8ofUvhxpDcc",
  "key31": "4YePxeVLV6pwrkydAtjdBKQ6HQgp7hJHeFcudHx3Yu661uoAWinG9NCVqHipsPbQsX1kVbUjSoSvv4jbD3Zgz6JX",
  "key32": "tszZZv6MPXv5xbdvA3qnkAwqL9kvFPVtRG3GDkm89gNWhgiLU2Bpx3aMJBzdckz2LBLzPaxQtK1qKPjGsNon7HA",
  "key33": "5S9tnVaaQ8cKrRgXnja5RNnUHKX2Jwh4UrxX3GT3rbTMpTcSQvz6tjLEAoc2DpAHVqdKbUnUKHsRVcpdiaY1rRin",
  "key34": "Xhjufd2zZ4x4XBjoDLdvzQpBR57jbvahucpdrqDALijrdZz1u9iXcEqkpotVzLtzhobgYaQ6srFXY8QoyWbdkXg",
  "key35": "2acYSGAYEZecyvofuqJ2UoRVCXGjj3EYTSEfUv89TBtFTmEMFczSLQ5FEjrWZ1jPgbQ9Xo5X63pQDQ7iyF9KZyu3",
  "key36": "5myHuVtJGVGoCWJBoKpNqeavf8cZRgVutafVXnEZYgcYVwKGLfv7kWuKep2J3Ek9tTJf1hAdzP5PHrzAyssMixX7",
  "key37": "36527Htzm69RGs48gDhwFBySkc3VSD4QkyFnujdgjQoR7eQYVChfsanr7Po72aFGbQceaNuTMSCqQCgn7vXVn4eP",
  "key38": "XSkLdFM5iuS2ktiPG2QVq4yYzsN1NCx7hnWGmUAqC958QLvcSu7M32CatSLfMf2xufuNgpecjmo8DtGECJctZpp",
  "key39": "3TZs9iF381bXQ3qgEWHc8zXp59uzZH6j27Q3C7a1NiFGrkTvvsovGi1hjDx7Ed99FJnQcpXNF48kVcoL6MM31h5j",
  "key40": "3dyaCmnXvZrfMbZkkya2bai1rkUW4TBisUFucUafXN1yQ6H4EqRSA1QPc2dLzAt25ALFSDot9cmFSatjjcJBraMH",
  "key41": "3hHhGeBVfTxd9oYyVwqDFurKpg3Yzia9kShBfkxjJEuoH14pdsVz4tsiZtQPHmr4acvm1fYy5Q5KdM5LxaAT4tQW",
  "key42": "65ZTAmAqLGAhvznAcXyqHFWVxPkYkG8ew6WVH64LsQmAE9LRTsS48KEMiLS8gksNETZc2mhwnMU3UC4sgQuGHg6f",
  "key43": "27yAimHpFv6bgihWREyN2nwKk51YedhubgCyKm4ACobFJuXWmTMJcC49p7qAtWAFEfxDhRD98qa7rWSJa7tnPboN"
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
