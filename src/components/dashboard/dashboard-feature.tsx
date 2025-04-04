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
    "489v5dAm2noNjLG1aHEbx7saD1wdse1xF9iattUC7VZpRG9z2YPxrRWKNp1yu2ypiJ5u6Sgj1ysSTJDJ77m1Urxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61WyMJJdKxR76gqTy4Xx8vSFewpWwtkSdwJFAPsf5ABTYD1ca3DQ8vdWnmzovQYy1hRFAydjdzSfQhXsPhchCM95",
  "key1": "4BwjbJ5z3d7pg77WFPPuvkfGEgVsXjD5MJWfDTgYeryXnmBjUMW7jcqxxghqhEr1NFkvinfnyTWBLEo7c57woKNV",
  "key2": "3ZmecSo9P4r31tvajq7r2LxfLjvHCoKmmkACSYQtfU4Bpjxrjzk6G7jj3SU1UPF7ChaxedJue7RnT4WcYRb63w35",
  "key3": "5QzWH1E4SE2g3uC37DQeYJsbzFcxRjD4dEgUaphvpa7y87ksP5gq1nUm2E3kcEBdE17ir78Z9NrpTevmPfi2yPjP",
  "key4": "52FE56zSL5FznyVe87PEGnqmaia7BT1HX53sMw2fSS1vBJgfGBhoLYG5GwZLHKMqkTVTybokeYkpNXvrYpMXPbid",
  "key5": "2JRZSfS2z79RRpNT1UuPfDN5ib4rvZbwEauX6Yjh7XpdzYVuCvA2r9zfx45syyA3f2Qy3DvyXTfvSkmuwUPQ2uXC",
  "key6": "5BRhGWMUBm51LBYw4tf5tYi3qh424VvjRuUVejvdCRGKk6Mse4xKTWC6oFNbUMeHpPJwt73pPH2hJdyn24dR6BoN",
  "key7": "R5DqPGecFdpuo2RmfMXBcG5sS9N8wXuoi21S9Szy7W24C2J7M438LjjgcpMW4DsNWPs3A9PdPAVkGyp1LUkpQGj",
  "key8": "3fLohkrRdpS45yAWjfe85ffoSH36zMDEAstGy6SZABRhuKTirhwSLtL8zUvJFqyeSyyYFq6f25txeYq7SDhae3eP",
  "key9": "45Xh1fhwfnWTsZCmmGmksFAc1e4haT9K1NafZQ7uUEVUDk4VX21n5o4J9tKDwfK2ijGhaaMXH5ChjCu6AHXL841Q",
  "key10": "561vPo2V8MwqSnsQMuHe48zdNeTHzZAmobSbZU2A6t2fSxoaFYrphjMaL71u3Cqa9CahCT17hXC7pnweHyMUbcDS",
  "key11": "42kcur43yFbMA9fPaZERFBnJYUA1bM9DwARfoTm8iXkLgCZa1NdC1T5pLgn2tN8yzru4pgExEKa57eNac8DWimdM",
  "key12": "5gRRQYaiLVRckRJUir9rcVV6RUYvqa7YQye2YEyS5oPg2v2dEPDHShHo5Ary4zYTJc9LuXySoKRbLbK2AaAPPXSk",
  "key13": "3goHroRn1RuqtvBb8wUHct3kdXtRKXYUTEzM7uLJu6xiDQc8Zk8zga9qCUCrQfJsKejTNs14ZnDEkWM3GqKJRtwe",
  "key14": "4aA55meW4bEo6fkTNMemoRQ8qkXeL63LBhQJgv8iyXRZj7mRbHbTEEByoCMVCT8s2iifXeqSQwWuutvPBR19tQM",
  "key15": "uT5BogQ1zuiHhd96qUpats6v6PzVyK6LEBiQc78t3cxhfpzBjKKCTnvsu8cabN6jn26hfeHwUcnod3TNVpTx2US",
  "key16": "2KeySdtNBMe4hNhJgCSz1jMvNBmJFuKGrmjFdLJWFeD98EmNH8rs5J5zMWsWZbJUZFpjTmY5o5E6JapM99MVYMES",
  "key17": "3M8jMKGULigqw5fpEqrd967kr7hmMbS4ga7QSLTdfKGVKigShBJNTQmoZVziVcHzNwC1R5uNfGbk6zw3WrL752HS",
  "key18": "5xkVP2kkhhZeX8GPnUb67N41MTuzyHUArJ758eucnGeZjtLg1LhJxD4ke1ye2emGZ4hydDCTfntiZU9VACWuZ1RF",
  "key19": "2NcN2KLfgvCJHjhbnAhmmqJWz54TVMFcRCbW53X4pGNRJNfq1mhMjjF5DoRDJaLX2LBUsLmcVCrNVYvD5BRLNfZp",
  "key20": "3fzyXhYPbBxNcwKHh3Z9M5myMpMWaToSisHB4gH7snxqNTVFrned2v5ztxdi9SDQ2jMFuDs6RVyTmCSFXTJzCGdz",
  "key21": "3hJaEW9JUHkZjdEhg3sHrH7Zdf46mjM5E6pUvU9muSwr6oX12y6BbqFts1a7QiaCHoPJQkMYQAs6wTGw4XyG1Bqj",
  "key22": "4QJAmSr2wdc6UyePswvEDDr5Rkww171AvLDXZmgG7kJXzXBDLW7B3SErdhj8Xr6U7XRELyAGhZaiX8Uv6i831K3M",
  "key23": "411pq88adZp5XaWQd3xxxqbxiF3KzHkLLkaYAYe9KZQEpxePeBhdSK4txdNMNyx8XaAszdgVvEQV6455kdmXe1d1",
  "key24": "SVMZLwPMKe1XoHJQ2VfMaDSbb8BDxdBcRUH8pmiujhaGg8nKdnhFM5TbePp68Jnvs3hzBc4WsvJFgbLxj1C3Qa1",
  "key25": "iuMuRk7gwggKgGpnjp7hXXvuRbEKbjJ4a7mYWwPccdePAmAWKABwthioEJysPwo8TtCEBgkW85WCZYmcDBAJTQG",
  "key26": "5t43NdDSSVR382HfVT9xLMSiJo4UGoiMws6fWFVgrpjLEBUBMynXubo9ULddc1V8c3z35EtELGLxJBUAYfPWhe57",
  "key27": "4qNz6NAwXCkjvsSs56NaiPTaLYKtQDFEKUi8FtxFLf6h93Hvx7jaRJsjLd7MzuXkzwHgoxh2fhAnnWPpB9U7NWpj",
  "key28": "nBH7xvia3ZNCtr9g37mxjFcKhZN8f2bBhXgQ72sZrkMfdFeG2CRuxpuuTiUp4v826wCRLz4yeCcHkHY3fC5755X",
  "key29": "267w9sZvAwD6Et15hn9gF3Rw1XqGUmbDmvMvu71NcE8zzSB6SdAQkHUzJDFMcSX5EKSnanPnaGzhtXutNPnbrszn",
  "key30": "4S29N2yBgfq4kYQ44yKDMahMHqCAi1q59V1MygP7VVieuqqB75k8tQ6pAfYHEWiBgT2qEjHnbkv7oeoeME383G3g"
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
