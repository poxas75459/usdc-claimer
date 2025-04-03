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
    "46ar3EUc85bHh1FxzzzVjHY9ksRLr4q65gse82e3Uyy6wFBp8YU8859WUHyijr9ARykr6ienDoLRvDa4hwyWUR5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nvx8ZfiDsuiqyDpsG2653vWCpuuPpPSXA3PXBUVb47WeuyKmuE2Si3cvuViVgnuSaojXrDpqeHFPH3kZqZxeEFz",
  "key1": "2H2mERW8SdvWdQJpi4NGzFGmDYLgcya5xNM6ZE9MFEKuzJ3ThvTYeiQsAJmCH1GThJsYK5t18FECRqzhxtFUVmfK",
  "key2": "29m5F31oq34ohH33YhHdzvREDvRLE8EAfxm1pAgb4uDoggDj6myfWy6psPKcKjASP9v4e7SpCU8c15Z9M16xDRGc",
  "key3": "2SBc6tUwBtguakvYUHRPJgrooeGxz7tJVxrWwv6kPTnzANKvUQwFE9SnQ6PCJrRtFYeUtMZKMYxjT4C7UCo9z2xs",
  "key4": "2DD7mkuAnM9vdHMHv6wLdv9KNPvxWCqMiGVvbCZ4Pz8KduKrUjtdYnfj54UtFu4qDgsDFJADBuFSPqv84CLwjF61",
  "key5": "2sVKPUjjTG4nSEDzrULWka9owzWeGHnEknct4mJTgghahjzrttpoQEwBYRLtmLYfDgBg28XYHynazXB2acbjMjw4",
  "key6": "2FgNfPusxDi61bFjM4akbSoeMaZW6QvjyoSyXVNTL1PWXnyrHUpsyFB3YS124uL7tTyjiRpB9tJgNjWVVL2bbCDZ",
  "key7": "3RcsjSLS99P6evGsUt5vN4XietEMTnPX8RnytYMiHMtjCxQgzzviWZCoXFBJdN5JKgmDWuaibNRVeSgwZjoCmcjw",
  "key8": "2u6K7vYGKi5nncgLVKBeQJAaZ7RRDknYMeZ9eXSUVcLfYSgvoYQNAQt3MJ3ejo8WEupD5nb5vKcK6CH7HBJpScCH",
  "key9": "4EtLP7AA7PBevDJyXJihCA5i9C6mRZ85oGuJEQSYCSRXr4aJQF81PdswRxC2FBBrxFMK3eneQUzTrcjik1GAxmhv",
  "key10": "4XKkYZP14xB6PP4FQUxoBM3GpRmoSqWShKbWG7mrXdpoQ24Gtg2rXpeXSjocgrCK2WVeoAQs5qrdxGANaYBRhJGt",
  "key11": "3Dtu2fUuMnhBf3QTPbSAWCtqk3tqnii1iQWjztM171Pqgtf7CwXKb6Hey62S1PdGsLn7cnZ9WfPpnyFeghQx2k6x",
  "key12": "59Gr8NB6qwbJzeJHKJ8ydctGKPz5Az3EDzJtdTucyYGqGxFtPdnyQJU2igNNgX2SLziVBmRN7o8esFmzjvU91Y8Q",
  "key13": "2EYEHj5MDyoh4APpU8y36MEMxfMsMssBoH5YtjNE3i9E4m3wUoJ8nn2ciynFk3NxxRYdT6fq89uj5jfNV8jcsTnA",
  "key14": "3SCUEaATFeRBrzVDysc5rdjwhd9xZqcQFvSpYSEs2C259EQsxsaNtNLV2ZjMxyhcR5zofpNWcq6iQe7T9vfbXv9c",
  "key15": "59ikZXKXjnUZfztzN4HamHwyup8ZMzZ5yzRaWkusN1WVtBmqDuvdeqqDh5Rrr1xiyL4uriPSQCuFyRUHVy4VPBT8",
  "key16": "2Gzg818gwxmdN9nXpaakthmf9VkkoJu4KaX1ukrARyxMaznmtuJAEUH7k4HaJVNhxNbA71C7y7HLBkf15ppLaNbc",
  "key17": "4vixoRqpiB667ioZYvJVxjmBCjNSyrQ1d4CYNQi8PB4ZDjzWWumzN2Hz1MbJFk8KmQaLTTWmfEHayADKpQuLWqYe",
  "key18": "3mZSfnwX9y611xJiUawg2xgqTZ2UZL38MdujKefQU4QyjapskRVsNNtetUMydTKyQ7RHDvq9PD8PyyWq9u8L8ctT",
  "key19": "4LGQxtfK9JkZJPat8oKdPxHd8g7kTVi8bvjbFZYdiVLUZbCWUpKqap12jEsX6A2Dv7YeovQq1UhLMjHuRYRWdEkU",
  "key20": "2x7jCGJqLNfnvnhxh83Q5WHVyriBhATLL4W7cEF7LeRuXs9EYU7y4jgy5M2tHNdPS9CPrMAZVUXKjXPc4c3dKMWK",
  "key21": "5yVe6QJKgmGrvxCyBr8Dej7vG7RNyPJzR4aPeDuUg9CoeqFMYDAT52Xj96q3iSkFCZgxTCcgfkPvATQr2pn8EvQW",
  "key22": "38HFbKMUUoCQ25CPV7bW2qweCz1TZchu4Yx7qiGF55UPfznLbLFAZhUpV7Xiz7h7x8iH7dWp638vcki8j2T4ewan",
  "key23": "2t2Bv5VPonjioSaGV3PkTBwdhVZa4djM5AxRuWp726iJoPfV1BQxciMNbW5mTJKVGX2WJMXnWM4nDpikY9BkdiH5",
  "key24": "5Yxyhdw6GLg2hDGFaijL58vtAYsDJkWcyUzanL5UubjqCCG3nhJBoRHD4d6q3P1aen8yXocAqQ5j22tfAHuoM4Gp",
  "key25": "ApsytTqzcHWBzoPUtTciHbmmdxtM56NXuNXjVS6iXkuN92YPf7KXU7DRRS8s7uvvA9VwvkpAoqBRieKULNUT1U4",
  "key26": "4HQ6Cu1Gn7FA6fMYs3UGHrFJFyRCybb2cRsXjHSefVHsQ3MainydjKN6v9V9fMr8Jxs9pXfYy1WNjzqrDr53sZSN",
  "key27": "3i78JdtTQgqLaKf6fifUx184THNcGh9udvYZwLEBm8HyiNgiTBbsvaFSjMcEkoDadi9WqkXyQuVTXhku9AqTc9eY",
  "key28": "ifUxe51g6bw1YExBJQVwUfyf7YBEzkau7Jb7Dbvmt68dPppbWwiFEA5Y7t8PaXnuxhXFN9Rsd5kLUJtPmr9Fb37",
  "key29": "5wNUQDFC3eJyvxL74YefxfHHwsBtUozyYf2M4ncpzLLQsniyYpafLSGDY7BeRybwvhkfjFX9k569R1Gw2rmL1jRi",
  "key30": "KYyHvwqbdJAC3Vy3jcXLbHkbMUcgexxRLAQS4guLdhA7JdpZRAnXgLJARDnEznwqUoNj39GRQ3BWvwMPNmkAYS9",
  "key31": "3nVGrZDSvqgkMjaNRNACE3Vsd9tpqekRXZkFNyecfQsX9oj6nwnntutjFqDpEfJvAJEeAixYZSyTqgPQEB8Ptu41",
  "key32": "66TPgKJi8ba1xS9AMKUh9wJ4iQkjc6axAq4dUuZVTneviDSc4aiWyE2e84P6N7nMeGKhMNR4mfvf8dn6bbmXxDDE"
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
