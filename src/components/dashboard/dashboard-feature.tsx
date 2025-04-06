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
    "GDuNARuXjjVRS1Aonh2q1wRGhJUGLbMJz2WVw3x17zq8PwmGKyPDuC9xPL6SLE7LZf2P8yjuxCgHT2ijpZT6u78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ra5bM2cPtvkVuTkHjXYTFb1sfSCbWJ9Rzu5xkofb3qujtS2rko8fN5AjNhPxgmECn4nwkEKcEbEtqdq1Hi5Ytee",
  "key1": "54RequmzxqziiJksjtGad6RhoCuHYBxeoBCsYG3jrbCK8tg9ZhEwx3Cks4vvsnvP1GQWik5pdM2Jwd63T4zb9Wxu",
  "key2": "hk92avSsdBpBEi6K4jvCmfyLjCdpTA2Z5DAbq6WKPckZ2MwWK4xkjYPUMLPq3eEJyiQE93GAJBo9f2wD2JgP5uU",
  "key3": "2Ki4RXGvi1JdS2SAuxr3QKsaSaJABpgxEfMp5PrMwoanXSb4WEi3eNmXepBW8hbGcG4enkdQVrmmhx854Zb5x9Ey",
  "key4": "4BKgacikSzmvjXw4BvT2fi2c77EpgVc4oryTKegBvge6ofCu9RoCFPXYdmLuYjekJEJKRJZxfFgVhj1PtfMf5Gng",
  "key5": "2HJyf12KyEkJmFkf2nhDQzACryaUE7UsbHH9FioN6mwAZdfM9eSmUx4ufdNPHod5pwrdtu4PcCUKmLkNzSWqKDZP",
  "key6": "2EGAGsPYJzzJ35ppuZ5GHp63MyoVz6qUSmMQS3EaRGwcFLdpLURjAc5coiFSRZXjV5P4Sg7u9szNKK9dnhgnyG1b",
  "key7": "5D3KqYDBoDvnzTEvZVeGCba2W424KN83k5fW8FjoEXRx5ZtWHUy9cANpPYsKXDhxNvoA4dyFd2Bo2LgTC3ZfTtn5",
  "key8": "3DV66N5Jcme9SEzeVKTRQkN9MkbCnnzk3tjh9RcHsSu8irK7bm2MD8eHMomM81ZxZGM3Aj1n8A2VJCJqmMkYK3pG",
  "key9": "2yETUqoiCzpYFQ6B7Gd79pmcoQpbMUpD3ZYGzoBMBYL3jGviC4csMQVs1fYQXiMqwsT4QWwYW1AmRP7ka4dNs9sS",
  "key10": "28ZjgAntrMSayExvAT6DBDjnfueG2YkoG8wYwDQk1q7rc4RAYmuuuXRUtVqUWo3gjF2rUngMx4E3uheCMmxgGWZR",
  "key11": "3gxJ7USn5KurXzMWsVrMXZyBoqpLWJApYUkewJPqKq5UjKmV5FKYg5dcYDqLokH1nqWtr3z1xHYzni3LCBtBwdJZ",
  "key12": "3bsz7GU11vPWJeGTeH7RsgJnJ5QQFKNBvpUU7DBfWaAYdadReiKWjGAvzNFbuFHX5aTtQaPVnJtGsJmA7v3jx8Ne",
  "key13": "2LAeYDxcBxrTNu2zPRoVVnhb1W844ddXyXGipMrnqZPhdAmk8PJXPfMGJYtQS5AidytohswrchrMBJXn4C6HfW5m",
  "key14": "51m73AmTF63ZqtdUE7ZMXD3pdbDXT8z1pxwjepfHdtSAcJhDUwhXDh1EgdPNBZSm8oUj8hg3M8PhyfwQmAP5W9fM",
  "key15": "4AqCE7HdBLt8vdVGqdgAhmNZzR9AX7eGLhMor59iHhjAWZDrtA2mHiYAx8gTD9wfPZDqdeeJDrQtGpAE8H6TfP1a",
  "key16": "4iKHpgKZr4EDTGMwUJUb2kGXEuVFACScXkTeExukUKqadGWokgLh65XgWi2dP4Ng5aB9AiizzwDohfenCMmAjwce",
  "key17": "391QBBghHpev7Ws3M7E6tpZmvuH5xQdJhp8mP1ffSmv87Bz1G2eHJ2qgjVHtwy8hJUSWvRrZZ6kbSMJYZRMfuSGV",
  "key18": "29ZhEVuUnRS2QSi65PRiQ2ispGVNqwtLrrF11V6o1YWS82XYiYEmvWVmMKZUua7kk1mud43cwgPUsVbsFfaW73yv",
  "key19": "3ktr2bvxRmSaSSguqovU5fb347WtTqkB21PuijXimNx6Ro8JEqDQdWz69kjxnK6BMwXFNAi5jyQkhwpjQ98wFA2S",
  "key20": "2bcCUDoAqsStBnPQTmgbHzggKPVFcApHqPSbYodGxpdwsJ6acdohcWAymG8PFiyDTZYfGXkWAxBaTYNJatJXJN22",
  "key21": "KJ4RdgJKNm5ccLZ82wTnKN4N7Li8gxJZ3mgyk8QPcDQzJ1Q3Y8x7mEUjgtkbpdeXci9gGK68m1VbNr25srTFH6J",
  "key22": "2XmajPFpqnL5QhonDmKfvrdtfspRvVwWZsxwywHyTSRiZprSJWT5XRrtirQkQtUKjuL2ATgQRofyKihjAAiQYHFN",
  "key23": "3QaCrzzFdLZMphd8XaiNEW4vg8f7iehHG6nK49eZEhtYnCAJZnHVSbeMaCsLqWQH3TPeeUzoNiCGXX4MZRgtDtjr",
  "key24": "4184qjo8T6y8pTwCvnVvVGRqWWnnmfnw2WoADnYQ9fvTy5eJz1tJc4uT8GSEmASa9muBt5mt4SMaR7xMoVhiJP6s",
  "key25": "2sNrByDWMqBaCnZfGVQPReuJKNTqZAYF1cmfJ6f5reT2oRnW3EjeuDVg5BJYLY6yH55L7Rxo13xd59At6hCcJFDH",
  "key26": "4iJTx6JbAT5fccJrmoZfschWCXgyJZx8JSPYyEHwrQmGfDXXFfkABUrjujqoJVFeeC4frs9oVMKAJ6dSbo4FPS8K",
  "key27": "xBoPLXEqjvsMRCpP2pBBjMzWyjTorobr8mkZcSrHEjNLCedbgQZPBPWPBfNwkTUfdzjYDdqpujMB7RUq3wMmgoM",
  "key28": "378F7UZvoGeaSBm68mPkQkyMpoKZFCnAk5s5E6NJg1c47kd3ERzVjdCXrUQUHb7nYrsJsNGNvEcDGTdAEB52hVwx",
  "key29": "2PyAfvm722fxxapGSHGwQdNxhbarwVQu4pFCPZ7zKHv2WH2jj7eGmy2KMiA3BQ2uJQvEyLhYhxZS4B18PWQ9kucK",
  "key30": "4wo9HdJy25URmWKftTpmddznfyi3BaseiJM225kXW3DMDdNzrkjdFaTR79eJNwb8biooiF6xfSXYq4Lqz2TzY3Lt",
  "key31": "5KNZNJruWnnQSxcfq4VCzibZZTUYnNfX3JRCRpmEV4JrDbXMiDEeMSP8wvbsMEQ7thNLiR2rsjRUVmnCP9DrhQrD",
  "key32": "fVX41H2gRsAJ2NuaDfVJBwWgHzjisMH7cLaLccUiyVJCvirzv9jhUs3eGSffdXPD2TnrQ8eVSab7Xivpwn3gqwf",
  "key33": "5SHbFgwv4WudGUu11dboNUTGAskWLVJK2zLX4MJMkucEyygehrFTWHsSNuT8bMFZiNF7B6GK2iQHYCcesZSuDCXe",
  "key34": "3tkc6iBsNPMiQ12934Hci9Ldj9Eb7UbdAjWF4uZcNAMAseYrnJT2Y2KMrj8PW7v7uREEzeeRKWscvtN24WzNqJFt",
  "key35": "2K8py3owGBpESn2jTSXmFzCZQPMMFzjCA6BGjnVjetusc84weUzxYjvB7qLYL1rr5DPfnxGyPVZzA2x7uqAhd6h3",
  "key36": "5QjtmbKfcaXayj5djgEixji6GypyWZVdexQccWX1VAJczjMQdABMq2NtVktDVLrfSYNBdaK7PqaxMWCehDKtkVCd",
  "key37": "QMvJ8onth19Gmn8M91ZeqjUJi6NE72vCZG4xXqE3ySbw3EyYGQ6Qkhs69WapUn1V8SsUXssAaCccYFgkCjutwZz",
  "key38": "5Z5vrh3nvZiFJVjnhLJ4wVGucFLvg1KEc1mvpnbEasM4nfpXiQxNPSFt5PWcFSJcs1EhTNtjFNHm2M2hJq4EEqHH",
  "key39": "63RKm2z7gHGyTvkRyFUZJwHqGyNmNHP9egL7x4cNSqYXapwah9LBmxYjtwn1pqQUzFJUG7AV8DFV2UQYv8A6A8p",
  "key40": "4ck77osgmpnDRDUUduoHdxTnWy1uD7ZNFBjksX5eUgBSAm1BPbvikPr55CdESWBW9qbaYJZwxZU7NcPLC6EM6jZ1",
  "key41": "455Eq5ducNnbp5HpTXwL5fmrFnDGiFXQB5WztgM3tGSBUMui954gNqUbZZa4zu4yp3uQoKftLP4hmskUcFXqwcSk",
  "key42": "4JkB5SCZBTAwhwFkvr8H5WvM8iYztnsDX6k4EyVp1nzU7SY9BmfseymEWvEMsaSNViuMSHy89Qp3R2TeBCT2hy4W",
  "key43": "XMSFd2bCAAxKbk6HovvsuXrq5LMyYW5i4qWs9RtZDW1rNcCUcgL4gmY2Jd8svVUrkje1ACbX18eJWgdt7xQ1qaW",
  "key44": "5bc17Esjb3bXoPu8GJoyTfSsCCm5nead94MxeFfpGjEH6vjBhsB1DqA53zhpsVe9T5z7K5o9KVptdaVRS1agye4K",
  "key45": "3Eg5Fyfn1HE64BSsuPffZmKTKnvyiGqWi4rRX1BkJgUugSNc3WPvwiRvHEm1YbNm6c4CQUNRYDLk4R7Cq22xp8uV",
  "key46": "2zBMDuDEjcF7FEbK8TYtWeLxMqSvfU8dpw6gyUKMLrAxSHKrePhcDMsiDGdN7Z2uGxetbASNFvt19VNGwNErhXGP",
  "key47": "4MCmWvcGhbhPJ2Xc5KXFTFrYTRTJhUPLfgNMWoxMjYf59mXUraPNbXDetstVQatQRoU6advzjjQnie248rMkT4JF",
  "key48": "22Bmd149mURTPQyoM3yw8jejsQ3C2x3EFiD5XjtvLDEDeDjP6mKZmWyuDZudXvKZoa8JFbAtQdtG1egADW7w84xC",
  "key49": "3EPUcrFebBPiMKx6FXmU8Wwy7JfycQQS9F6A54JEd6t5CQtZEGc4EAhCSZt5MVJ33NTvoDr1J3b6r5iNNbG9FLbz"
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
