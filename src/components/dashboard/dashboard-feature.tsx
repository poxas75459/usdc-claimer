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
    "rcqHtF3iM2LJrSUHiELc2V7buFbz9hPtToMEckrqrkEdVcQ2Xjdk8AwGhmrMsV5yXq2i3mJMbPcvCkBBMFmWw4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TSZcPV6Sy2u1jRgZZninjyJmCtD77jHj6b7esTtpdZD55GYwyDrX9iwYJxqjoiAqLiYk7STZWVgUsnQKXeBvqbk",
  "key1": "4SFfqJn1Zqf63kEzKqnDn7Dx3eTRcyDG8Sb1Yuw31tszJFZjMFffWyupzumqFhzBoM9fTnrPt8TdFVPKSQtEb3hr",
  "key2": "e13ukZfy3fUEHBsZ6fPc4SFiU5Kt7dYYBso8wQ8JyuPyfSytXeytnsSS1G7ezezcBieGTjoZdYjFzCAP4jpd93f",
  "key3": "5h5XCim4NiGFvK2txQTpM3CaSkkB3L9Wq8kr4cHT9t4g71j5JG6EvrFDN8BkUdep5S5dooynPg6nLLMgK4aQ4ue8",
  "key4": "2bHP2LpLbY9k5wbLSr7fEaZsn5YoC7JH4xpFNDGQhNSRAy5BSu3QwTXwV8ub3MxTN3NR1wgSGNtA8VKNf1cwLpzC",
  "key5": "58RvHsjQ8GD6z46ZM2eNGDoMewyVFWdp4WLajUM3DPMKef6njEtod7NEb94VzY8ndct266jaLEnBLP7gvC5evZ2K",
  "key6": "5HMDAS3Wr21V4qqU1dpqtFTxgCGpcu6tGthjVRY5vPXeWq1yfyeLHovFnuVSRXQQ8mGMdwPdkLyU8iZtgVRGXvuJ",
  "key7": "5PQRGZowMupwEadGE7EnCYoa8kHRpJ7sauRbpp2jdwyjEeLpD2L46xJ8sJzPLwH2qpHfKaTLr2BtBWiPoaCLa16",
  "key8": "5BSHSVAzk7PW6WXYEi8ExEjmZhVhsNTzAh4nhAJ4WbfbSEUiiJND6oUhDn6phCmEs96njVPC1q1L3JmzpHHxKzNZ",
  "key9": "41YdbTH3un7YYfwp1uKjNhFxPvrVWrWB5ggaJLCPqnibUBkaf78J5z4kyP74Qwd44DuksaSJJmjzoX7VujABt67g",
  "key10": "4C2RWheex5h3ja6UnyVMWEmSQLdQ7HXqv4LkoVmpSt4Rxy6Db5uRWC29MERvZFkR4wTuzF8foJ9LK8dZf47Mj7Aq",
  "key11": "9Z73SEH2cEuBGA6TasjRfzFLZrHEBPGf65sxzC8edWpBZLSQWwCekgknq7cHaaENRzuyJvr2D3t5x5CcqTYAVYm",
  "key12": "2gG5znTWB1Eea8EjFCSG1A95wXwyEvcrnmKtkBxTsA1t9AqXEQjeSZoKNQTjH9H2XAfMwLbHygP4B5E2xC2j5Nqu",
  "key13": "3yQFSbyQmr6sMzEBZouSZJpbDFz6fNfJcCRBQGc4BSjCmiUkYexqJqw3p7MXpsdmXLM5adXuV1Wfg28ZPZ11Hfep",
  "key14": "4v91kDBv5gVnueX1pSPY1pug9zpguTNi6RUTLMSnz28NBZ4Q1vWBKnW9gt9YSjBt9Gyxac5vQbnfNT6fVxY5zpzp",
  "key15": "226fZN59gfoogMD3rkR5VKNJppudGh3j51iaJvwxtSu1LpUMdvsAD4zWyzQvGpJwZRqjdPdQzgxFENdq75X4Z2MK",
  "key16": "3yr6B4TxbasazkByrgRBkL3Z1SwHKZyKSkBZYC6YBr2HvK9gE9sDMNtX8vE7egz5sKrhWLuyVEUBj7KovmRWGZKc",
  "key17": "3bpKKtvtLJwXC9oYE1wYC57MSdMcLo1NJLxBzCZAwwGyJhEa3tFVhwkNCmucVbpVUs9NEuEojvorgFvz3SKsXH8B",
  "key18": "31JVpZB5rikEzygWdh3rwKJcWTHqKxAG37FWUsDXepdTpbh6jetkfg81cmN517LH8htLfayfevjaV8PcbhcmsZCu",
  "key19": "Y7gd1PXGspyTgmyM31BeJfhSBQ1MzxhXtrG6rdVK37fZeTBX6FKBpHSihXKmgvgo9g3UhD4vehRvu8JxX1jszoM",
  "key20": "2dZyJKtF56E1xCPoL9f4UsPfyVAecQ9HqbvE4jEUQ5dqkoKraGPinvffgzra9grPNCRgv3iQW2Ltdq9D1J2NC2Ze",
  "key21": "3DNgxR2RcRkMDUN6Xow3xyi3z5gLHc7CZP7nyzam1nvgQMu2XzHccndQQ5F6oX9vp2iKsxVQ3BmL9S6WL2YEzzBL",
  "key22": "3QR1VRCjvg5QgePfx16vyhS6zznmSkAizGcHuNqY5SGbHUoUoPGSxvZ1nVDA3upBjFwi1gR1CfjVLPwawzQGVv1n",
  "key23": "5cxKMqMLzGBqowfnj8GYkj41vCtT9SWBiAZKsmeTArgNspxn1VjiYm2wdsQAszecRGjHrPdhq8B5Qi17hVXD5Emg",
  "key24": "3kwW1Pe5NeJegpAoroNdvahtPCxYmKTg4G1kKH4CzGadB8nyq3W5vqNFfPqAv5rSoZ2kTQJvvSFYhhc8n11wSyJH",
  "key25": "41qchaGPdXjG4nVv8Gov1YWiVN7xFNwT1eCZdR2FWv6QbuCB1s9uKTCHuwytFzVJPYWKxtEhusdLneDL1ThosDpU",
  "key26": "qSRPfi2xaUnAA49E6WgsgjXmXmUFETtS93Y59CLknAN3t71Lv5uhMFMv3dXYjUfHyN2VrgQCQuXdbh5ML1Trz5Q",
  "key27": "RmeDRqc2e12pHy8UDbF55vhMoARHuBxSnywy3DTQXCsJYpRCWac9tM1HhhjoBcG3RhmAkpYhp8NmtGRSdBAHrit",
  "key28": "cg53VkEXWHarF2DWReSCEU3tSNY83cHYB6BL7NLvMP7Kpoabmrq2BS2EPF9t1RLrYQdYXVcGY233nFaFBSGiLD1",
  "key29": "29683akqbSRSn3jzbwCqZSLQQRGgtFU1yryUJB78xH6h7WU5rruDL7Rzsd269z55DpvPfqc2xJ5cCGeN6R8osXhV",
  "key30": "4bCjpWNmGaN4uDNNaY2Bm8vgEoCe6RU1w1yLwKDT4cfLnfMWrCJbbWCW8MgpPcxWnzoQS3E3iZQK7HviqfPKEenU",
  "key31": "2nT1QMtYYZrqY7gYvzib3j77K2ZgBLQpBqq1wHDD1zN9cMP9iDuaivak6msGLCWrjXWQWEKupUdGsfP4Vjehk9YK",
  "key32": "44ti57UJM56RRuZpyDWDcgbVnDGUcTPSsdE6hZt2sZHdMAZ2oSBnNBFEDUnc6B9Q8nPLrQwu8qBVN994tHXcjmFM",
  "key33": "3KLacqE34u6P7DGKCMDKJQt7DKEUrhwQSyaEjYe67LytNTZEDNryUeVTSz111bFwQMgkfZJ6f4cQBaMyoiuuwghj",
  "key34": "5qNh22RdR3YubqJSTe99zfihCs8wnsbVYkenk7QheTM1dnibCSbsc4P9xgiWGnwWSzHuGX2ancVdvBJUZgr1mnGU",
  "key35": "5YRThHN4CDoHpzJRSAYVP28Wcy3AMqQVHXaks7FYpTRbwDZSHskrLpL5JtZuJ87ns8aGyGwBrxFVcNw5BCJW2XrT",
  "key36": "5eN4eb3B1MLhQnd6yF8fRLPfXdEhwcBA9PxQAJTfs3aXth8cb5rQmhFP92nEKQDUzxXG35jFCL6fQycVPUbMxcRD",
  "key37": "mw9ActKmYZiytk8m1PCzyT5DuF5PveY7U66UVER5ZgEkAGsdAcfVDwedxGSD2AENGDUDmB6GFYDM4KoucZMA1yj",
  "key38": "3W1qsLxVKw6h15uaXXGyU5wodu9ZAhS1LvvB5zLu9gWbHFvT3Rz2T99TceiPsit7TsjboZVuJ4aqh6T87DKbaoHs",
  "key39": "5qmW66od3rUn8f1sHkbLEDMK3onjbRccKumPtQWDqrBqum5tQ5qmXdpsb89tESBtDfwQaUCsoXQyFHGsrKLFsLGV",
  "key40": "YNgdHvWvmUsM1RwqfctMt9kx1KZ2TtxmnvWNftg7u6vCHjUwYbD68wdfUYyiiFet5Z4XVScaJrBxwZci7DL71pN",
  "key41": "5vKDiYQY6t2Y5f7fNqSHLSrXpisKNadzdGmt1eTqhYFDs14AZrp66fvQ6kJsHU1P6NRZFnYi22XZcKpjQdCsXdjD",
  "key42": "5EuaTq3Y61dANBpTNuxByrBXghJjqkDQDTsYJjNswBMhRXNXb1SURY6G141LPPGKpyhs3dvTGqczW9Sszj1oHGoZ",
  "key43": "5QqVg25ZeyoxZJENJH5ghHDH9rXTQQL1zFU9gSRv6RwaymGLf8zU8NQSjMfRw9nssQx9uDhgdqSTvE6zpkEzsftd",
  "key44": "4RrT1UeNAMEPatLa2HKdAvoz4EEFP7Cy8ptZCsnwNeLJVeDq8j2ncm1unCZXFjELJ7dGJ7W9SjgQn9BtcbCaJ3Ar",
  "key45": "4KFE3jrQUe4W4Mujt2A3XUuQJikd4qvcmmoVp5Wjjvup9yhi9pQcihkbdewcJi1r76Yh8WsszBEofdEa52b1Cyms",
  "key46": "61xzETmSUJ3gX71bRzHhcu3ad7wXdpMtDgvuznRmhqkyLxdFggU2t15Qychw34WnyBzPFjEuvs3uNAgrnMYCJAVF",
  "key47": "4Ny5DhtR8ENt5RjB9vTSDMvm5ERaFMLMoVMoG5dzjdNYyJNVn5qM54fAsySTwKaCKj5Ne4DtrrDXCrJHT4xD4CTf",
  "key48": "3yqR2sxnPriiDxEB7ZZypbFJmS9SCnfPgfVrtMyC3weWwa5h41dKQmDm6rNGB71WiihZMaVDdMsWKm7QoFf83GLg"
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
