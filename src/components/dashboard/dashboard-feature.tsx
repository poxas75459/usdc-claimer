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
    "4fcvYCXS24FoQmSVRRhdikoykbjQfC4qz6oDQA9N8UQiWJukMC643ANXx4uVcE9HZsPJEK2pCpoxA756oMLJYWpo"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5JHU7fi36r8jU7UHWH5YAGidYvRuRtC1EPSw3HMxD8W1qHXgS1jZkmTaysRVWcnER4h8Hoc1LF4aQZH7hAX36YUj",
  "decoyKey1": "KeToRGKGb3i9vjoVDhKzThSu1UgXfBvWRc9YC1fKYre5besLys28umugxxCp4VLkEgmscNvnGFpA2Ty97Qzvsna",
  "decoyKey2": "2ifKsm4uveTWrNTZt9PyZVVWrscK8T4tyXZi1XtBzT14uarhrjGMLQbjcFJbYTE8yBseAVj7osjQq1RM54JJ5VVQ",
  "decoyKey3": "fxKN95fybBGrzvQXGyexSGmbKkpoNTNCfaZ2R4aETomp23Ki4PKbZqijo7qbAT9cLj4bd2U3rX6VkVmje6srzmN",
  "decoyKey4": "5n1Kope6FYQSPm1VLQ5zsDV1HiinjtV18w6SAVjua7b45bmfc5MM7QdNRFi284epTEf4u8LyhgHMAugcmAgLXiPF",
  "decoyKey5": "3nMjgS7t9zF27GBQWAvRQg9AwuSZiEb8WxEUAow1w2Mp1KYgdXVn9Bvw6RbF6jWoVqu2XJ3dYQ2KDgyrqPKQNUxA",
  "decoyKey6": "1EsRvqS7KkQPKzc9tHaQGgd1ACGVEHqeGz4vi4V3EfxAAYhnbSsAsGTd2WU8LXYvcjTG6La5TQczcmR9RVLQBWg",
  "decoyKey7": "4o4kt8CPBsbRGiAQZmZZWm7pP8oU4gtESAstQ9joabWT25pEMi5CJceeTPph1LdDrQqHv4bhFHF7Brv4Mw42WuWR",
  "decoyKey8": "2gFUou2fvZSnQ4kChi3qvfysHzYUahzJ3SVvAUrfZQBGUiRLcsByu26EH22pcU1gRMs2G99qPZNcR31oP87o6pf4",
  "decoyKey9": "3bcxdMnqEEMgweW4pQuuuTa3DqUvmj3QjLCVZ4rq5g6rjmixLyNc2VB744E2jKoF2pe9Arybp5bz1XPAzy24qDaT",
  "decoyKey10": "2VWXFxiwPamNgyG7WTt7Kr1nTjMtHfkPeMVSfp1ECtyHRCJcza8esDoVHmCri1PJamMEhoTXby9NwQsGh9WhQNF8",
  "decoyKey11": "2FCe66xbFo392AqDkVdwovVpnDWRBoz2mGDJdFo4JbqBQ9YrDngDNo7RAjdt1xDt4FHzSmjgjecxDLSivA5wQULx",
  "decoyKey12": "Bs51YrgfB6z1BwMYT3V7wc1dUaXriSySnVDaS1ApTyA8SbAUHytbZA4EGLr3H3xWADZjtisaVcZ7vFTwMmpFxJm",
  "decoyKey13": "3ZqRCrsX5uUSzVbMFcrtwpzighuKsZyXNLGYiEzjLDarHi8vCN9gTsHXcBvYUfunzP5KjXVzjHYEHZeJQ7tKBfZt",
  "decoyKey14": "TUSaU5V1rJJxUJT2oqoyEQF2ccL2ivimofcVKhiwq4ZobR9QXvYLxnpCxuiv3jeYdgxxW78hY2HWr3xoJbww513",
  "decoyKey15": "4RMQmGcouPVaXvKcKPxc19wmgMYiFp2DxJoJeNsyqtmG68b3sWuHLSsRHRASxhPhcbhoEyqj3R1QMCSPnXRjwhhG",
  "decoyKey16": "5FFA22w9G3YgT7WTtZx4LHqJMsfSAUXicDejnzaoWpajPt6CVhh7ZvgsQzSy1T1UMAnamWSMh6k5UyShqbco6hXT",
  "decoyKey17": "3MrkaWEUXYhe9j5wBJnMgsLigXXJsSXDhLR4q3Uy7ytndKh1MCsJLveh1ZuQLEz8iNCgAfycCpxGbbASqd29EwSR",
  "decoyKey18": "3FjXNBYE4pNBGVauiAC19eA4zjbdA2iWSjZrFXnh3DfSkcLLxBJ2K52MWQTWSS13M6hHwqzKsoXd2CibLaxwk8QA",
  "decoyKey19": "61AcvcZQMYHrBvSF5qRYAwXoDh17f8zMrwVdLf2F3zUrgdEJM7DExL3Y1k4Q5Cypi9n2SwcCJWueoJL8GrinEgD3",
  "decoyKey20": "3ptBp6ATCKTXaftdtxfxrkCHzLbM5GnKJXvtD3aDUJwNdhXmimrDzDiheANisMG4t75ADPwG4xEqJQoe12ikb1UZ",
  "decoyKey21": "2xjxoq29DjhbSffC2i2LZj9te6hsg9ukRFJdsxqddjPg4FxviukAoXMnjNn1uEHkFQLhCCfKY6KtvZNTpmY26RHH",
  "decoyKey22": "ZnaV85xrvfGBZQhFL5Swzw2yVhHeqkz4DYRfnW4V9DYWU1qzF4xHY553t1AgRMLinKQze4f7njZ4GPkEwY1xoNh",
  "decoyKey23": "5UnkZgeyfkxFJyLY93jD4fg2UkNAKBzeC9f9vX746XNNXM2xWwSd8xgxZ1Mj67UMbMj91GGmWLWNZTT4DoLbwW1k",
  "decoyKey24": "3fstLSQhpMWX9wvMJqLRDDojgqqkmXVi5bodAsDvEumHpzUN3Jm7LuvQxEKzY7RSezs7JYkdkXEFYds46JqntPqY",
  "decoyKey25": "QAu7BZaM6z6LdCdxpoYp9GCCBSnqWfJmZviYg3SQwMKPwXYoMxrYuY1h2QVEC2SAt9roF5jXfj1kJ7BtwNF7G9c",
  "decoyKey26": "64WLPa9SG1XDdMkA3akJWZnSQm7R96zSxvR1FbhQG3KiVoCip5ZP6K79HmXPSZ2WAi1W5rxGGndRyLvgBchnySZR",
  "decoyKey27": "5Ay8YUTxs9ywob4ArmFqpjvPQbz9zZAyLxvoQjFx57wGxHuFzarWNye9S2DJ8WY4krbp6GxG8g95JnFz7cGq3Rim",
  "decoyKey28": "4jb4Xp4hx8D2MJ4nvpaPVD8XwgqB6fTYLwK7yUtYzgP6pckSXb2rEudFqZbDJPesntC63JkZPu9XpJ7r7uAbeRhB",
  "decoyKey29": "37gxGbnn9HP6QU5NYb6mGbULKhUnv2ogpzdJaTpT2BYFUmjyYh8seM8m5YWfJNvE29d1wFrGNZ9CdvPNVikbwAVv",
  "decoyKey30": "5qoBQcuxcjZ768hLWkAgu6QVanqCVCyYjEafWkLKArSEoqfjKYw81GBdLjwwARz3FajDYJSTmEG5CC8aqr4NESUp",
  "decoyKey31": "36wm2o3UHSZAH1D5zyyvTi2VJhFVCLPcaQLcNktam7rdGEG9G6qrZ8CSPXTwLN42YEYo2FG5E9F7dpxanKpJx6nB",
  "decoyKey32": "5ayp5f952jcEDezJbrzceHLEkGTKQyxwaCTrQCHiZph9TxkaziX8qiDyta8q4GUt4VNMMPVfebLYM7VdYrZLcqSE",
  "decoyKey33": "3UE6NrD3nEhQHx8NdF1x4sTXHcLx7RZN9L9ckPAf6UJtomEJVQwNG9pPMmVTX99z78ZfZhVAnViC1bYWZGrAoeRs",
  "decoyKey34": "4y3F1DriX4iJgZzUZ1Xj6MLBGM1UewxcbtinEWjV7vx77BgRURhvzoAk11yKv3pU6iEsSVjSqqTyTk9U3zPSYWG4",
  "decoyKey35": "2QEjGvCRSTmTu3jZ3Abjsqtk79pEXx5qkkjPXTCfG6htCsWA4URhN1M2FCJFX1EiMnreXr6qHvjfmAzCAU7UHqhd",
  "decoyKey36": "5hVwG7XtKQfrNCCA4ewqrQzN3vBiHjK8fghBTQas5TKxp7twDVYRo1zMKCokmmxxoWRTbhX5BMaYp32fj6yHdxVX",
  "decoyKey37": "GTicR1wgdPAqsrz9dsauZtQsiCkc67bK6qTmWDCA3b4fQh9jshjKSE6JeihhH7P6tNQ8tEgAiptgqrHCc7iYEi1",
  "decoyKey38": "2Yc3BDKk9tCzVYqzUjiWfAYMjfPt5ZwTp6ZodibLWKwUtuhzrnKaSe7Jx5Hp6F9xWhjpV5L9bSREPetYbFHN9o6R",
  "decoyKey39": "335eFZuBecFQVtDRUR2iNFCMVgGSEtFHG95qtbF3YxX76X4MvHoLbXQb6xgEEg8HoxmJbfsVbEndE3g5jdqBYXSy",
  "decoyKey40": "2SoQcKfbg1tkGWpePQRqeutSvLq5FdDoYbYx2jxKMVdz8yvoKWAuHyKkoZA76b3sjtZ4r8jaC56qy3sgSAhx7yNs",
  "decoyKey41": "3Wd9UKpigpeCZgX7q5LiSvXD745gnQ8avk4nnquAqfDeTHUnM7e8Nc5HZWEKKHFrQvC9if7qS7C5QxDvGC16T5Tk",
  "decoyKey42": "4qtHvK3oFzz5EtYTMPrDoV9M1hJ3BTDhJtC4wJrFfB5s7fYwckBr9LcwBZgypn7H5qkH77iPgkvhohRMuwAfc8XE",
  "decoyKey43": "61wkzDEQFhMN9KAp7LigtkMLuTgDR6R5uvU6jhrcGNxqiLuHoD3MaGGxV3Wc9Zs3na2NhYVYgMPEoKygGnEQ3RQH",
  "decoyKey44": "WaA5RhB6w7vocw4MjbSD2tg9SW2TVFKaDc8LtoyuoXBEDm2Xacn3UGSPKj3PQBAaBmE1h3iAVDu4g3CwkSaK2Es",
  "decoyKey45": "9hYNXfT5ekAcR9NBURMC3TndhZnUB1vtYuyzJ87UGNz4QD2fSqX3tfQqz3b9dqwtd6BcLvJf5BxY5N7SZP3sEGs",
  "decoyKey46": "2xN2WHcU7NbeKg9z45W3dGV4UBT1jXTLcqs8zMtHXmUfLKMZr8tJzF9hGoXJCGEnQ8XAyQK1g1GQVXST2zoUdRam",
  "decoyKey47": "47PrBEmY68zzhAv8ZfkXGghNLYYfKdGxDMHVsyBv3qg9Zw4jsiDucrrejzbxqGMvFbHd4SiqqteyuofHVcZVHwbE",
  "decoyKey48": "5rqaYYnT4wGp6SV47R8xMZxej2oAN2LRJqmDiBdH8cPaPSZJbhQapxFSke4XnQ2XfstmFZUSdwUknL2VTvw5dhHa",
  "decoyKey49": "5C3uyHQPEVMF8u1h7nDMQRRPQ5hTktri9FixxFN5WYsXyTiSzjVpwbux1NB1MFDwoaoV3HEydidS4esJVdjvD21L"
};
// DECOY_KEYS_END
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