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
    "5cLhx5hkVmRiedFVR6HkYai8voMpdoBmeViqxtrZmpkEpSGDCbqxZmnY266mnUSfyLM2vpMkZZ5V79Zw6W5q1caA"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5jsdxLoz9cJGh7raqJES3d7XZk518bMoP3ins7L8CiRyrDp22mruc9XJXkX3pkmuqKLgbvk6GLigaXiaaMPYUExL",
  "decoyKey1": "36NFYMpgaeZYx17YcStzApYzBtQxTgeS3n9kwqbPAdqbzEb6ybco4dJNdX8qnfGLnZWirnQXpEn1A1MLDk5X3yg8",
  "decoyKey2": "4VzE1S7apAeuZziixXAC4ATibNmhWjjCAfDKhAh6Zry6fB29jipg3Tvdoq71R1yQ6WtGCCp4UUwM9XtF9cdg7syZ",
  "decoyKey3": "4mpzfjFUqNcFRynNFhhG4KWJLF2xrx7vuqNXvBR54YxU9jAnTTGfF9fs5oCvB41n85hGxeHEKquSfW68firxb6f7",
  "decoyKey4": "5tNJzo7A8AcXxVkhg7KEqScvCsEg8J3A1w6WtR9F4smC47EtLH4PqngAsbHJPwfEuaHS52bZk36dntQECZ9tQnCh",
  "decoyKey5": "4RAjqF4xoadRAYxwhofzH9zJFHqeRsrJMLVhprzTFSPjQLUjmAtPp5JoUPcQjeSwCCyoykj1nj3Y9W4s9S4557AP",
  "decoyKey6": "4nv1agdEM8Xu9UHmPpbvrXGfJhUxU6F8Y5q2RWW4xyRAwdZQhJXs61DF4rSbvf6qPH5t7vjtafUQXKeozHeANnNi",
  "decoyKey7": "3vj3NaRsFghh3oHbhtE5TAH53XUjbtAm3zBAHVHUZBaqgvacpUff9TzDnpwSYWpfF8CNPtYXdvZiE6B8HCXosHJm",
  "decoyKey8": "2CAL5YLTrCYSRx8nbNS8etpCGJ66Nd1J7gCgxZvTBay6byrCGDB6EZuAE4zxF5kAKgRWMoMf4VKGrHjF7EQWbAwu",
  "decoyKey9": "67Vn9bpBVxC9W4AUAduj15pXWfBCxoR9VXzBwZRLFUcKWdQxntdfe9eWuKjjQgTYrRN6Fuehrfw9AsU2y4owkARQ",
  "decoyKey10": "5jvYNarRmjB4YmLgR9hXtnZx9fSHSno7xXh6d14HTq8GhZkTc1tJmwVFHYmF4NsZHaqucR4Cdr3eoCTFTCEHjiBv",
  "decoyKey11": "5Q1HzsEjAmzBJEkTiShqQGnjqYxYLMVAx1PhYchZwU28mi5guSDfFSy9QrgFZaCPeiAoPyKA7XSkywwnh6puaSEu",
  "decoyKey12": "549ad6TC7dsaKGKrfsQDgnaPuRSiyftVFoeCsA4FEh8d4KCLyVsPCMp1gCucBronEgmfTzQwK36evcepZz9r33ok",
  "decoyKey13": "5TwQdJAjDQmSMzYmdN9LrALrFz5q18PAQ4eVCF6mdswCMbH6fokqwAQntBs9pKMfxF2XReEsP2t1vrKFW1fKoXVw",
  "decoyKey14": "4jp9ZQUhKWm3xsME5Zyimmx2iFSQ6tsJSVWvAiRCoXQoU9oK3bFTn5otjxKVNqpLv3yes41ccyJv1wV8bHd1LfmM",
  "decoyKey15": "5qfps3qQV8zuT53oASDL9etkqBzsBqdrbS6mzp7YyTh1cLEJq1JwzcgYfpqvw6BZxALHxgbhpu7XwC7hHHJmgfvG",
  "decoyKey16": "fCn8vz2HcVbwwzvdQ8XZcDkWX2JhpGPnFcxE5NS3vF5xa2hyXh828ZBeF8CUhg1zx8XV9i1x6b1sg5LZEq8YbwX",
  "decoyKey17": "5ZaUY6szW4Zj866AnHvu8icNSxaLk5gGNXhaeqT444kZFVZqw9Fuh11Gb7Urd164PDVPWQsChafZajDwm8ptJKbS",
  "decoyKey18": "cFt5VWwqECMUzefHGjzFW2kLQVMeQPRNBC8yJvsQLf3uaJbiA9YzcAT3piz4hcU2ytAYKUEe8zEPxPFU8V9SZx8",
  "decoyKey19": "3TmtZCfj8aCc6gpZwv2YEkedELkXrjCYZ7cRSkhES1tiuimTPXdKYhWXyCrdog8FvgbKXwTv7QchKRkxKQBdz2c3",
  "decoyKey20": "iLrf8paSexGNzPK3JrbA5GEgPLH8b4ad1u8dZUG4hDQWkWh1sybnR7oqhjREuU8DbnM2NeDEe95YVcFhaDpLwca",
  "decoyKey21": "Vax4Ajd9bUhTWMKMmuGYpEZMFu3va1i6rZBcfkhB1rVrXm4c9eHJUeL6ko6WYcVEKjdF3MVNwGjWYbHroNJsVAT",
  "decoyKey22": "4sBLYGagbSQg3AHGhCcc5ErFSCqMNizxXZQ5tdGV34fFb7wGXKDPmK2nrx8vRYjr5LwfZ7uwTJTAzk9G1JKNJWSV",
  "decoyKey23": "5eBp3eXsY6rRVbKYPbVffYeNJ9rdb9d8H1xxXgH9GUBeU4r3npL2FpqVL3QFo7oGh6A6TubcM9gZKEmLd71LzPNA",
  "decoyKey24": "62d9kfUj8fJkaRJ4hZPsGF18SeHMjZ3azAubmjhDnV15bkFq54rydMA2agtqmw4Yqj9YEvuTqpAD1nVXTrBTXGve",
  "decoyKey25": "3187a3WTnhguXK4t1h9HxJMD4RyA6ww1jrijp2YW8uajdjhmPUBx6799bs7sni1gA4FZzSZRdhbsHYWEbEPQpo79",
  "decoyKey26": "52HnDEKY6kSjscXSm38SR6nRSou138yBioYUTp2PvK6eUU8fMwrWeFF99HteBNUb1X9zBoWTuNZNmLxTKv5jUV5y",
  "decoyKey27": "5QBaCjvs4TsMgMqV3J9VppKAUhXQ5P1fi6uch5YqCj5jyjfFigevr9XGG2SbgFS4sEzjS39reZnpuLiF8h1eQyot",
  "decoyKey28": "TT5ZvVQWH15YPmQNhWp3posy5N6HC32ixCMHKWVMGKZCb32DP9Wnfw67F9eTvWdzfiaETC59ufEgSQeY4bqyfS3",
  "decoyKey29": "3UhZUthUL4ikMgpZ8BxpkHGfTg4E8v8Qx6HxkfTmvDZ7uTvAJm2cHRpKZcHr25c2iXbDhHdodU8MVnvkNQUGB7Kq",
  "decoyKey30": "49Ht3phoYJ6PQ2taj3DzEoj6DxNe1SFSLdsYHBqKsGD1vWzqDHzLezvVSWufXo1WnK977yKQHutxib7KDMyijrgu",
  "decoyKey31": "65azSfcrrGYKr7LjaqyXwEhjo4m8bTDQKDpHmbcwLHuD6jH9D7Q1hhtBMs3fv742Yt1NfuuFamYgyV2Lwfp9cpmV",
  "decoyKey32": "5jUDcktM8bvykvRjVQ8pN17Ssx1VHt514x5RCwLpm3s7WSiZxB3SuH2gDNWauUrzCLs9iyn6rPAxTYkDX2pSpD6n",
  "decoyKey33": "4dzHt1vSFWnHV67cQxCXSiATzAnjjocaDNP8WbfrJ1dtxnVsTwFtP7yn1zZCfuSkmF9KXZNKt4krNf6uzMCkU8cp",
  "decoyKey34": "4rRuQJ8WMPosxFKtvVrs8zE23k8feiu86gRd7nqoTLjU4ajFnzWyUbqRfTc5UrGwaJu1GoZ4ym6KBRRyToBPgGW4",
  "decoyKey35": "3hZ2oHc4FBwtCyunRmreYkgvvtuqXewbMxtEHdoN8pAwnkWiZ5mvmm1AozbfhXP9cDmF4vupuFx1HJJRNa7SsS6p",
  "decoyKey36": "4Pgb168ESrj2t9Qrs8GzP7tb2HYof7RMzpbwzSyETDS21PnA454JjMfppT1p3CbuDj98UFRTzck2WQunuqM9M6pJ",
  "decoyKey37": "4GmHM8rWURmSBLBbFGK46VUDm1E7jwBPpJghADiwvbQGiuKnDcEsiQzLmwTUkpB7fy5of8Yi5LWNExAZPzqUzUeq",
  "decoyKey38": "5JNLN7HZ2bHgWQY7Xrx7rYmTgNRYkmd2XXKqfCgEMzazd6pzb1mZTdCocoy58Vp7whxAiRwxwnaqipX6ATEUD2Gq",
  "decoyKey39": "41Xpe3V1ZERiVSsLNG7XmFqCvJ88cR5vHe994SP26Kk4CJpW1GTbMKSzk7UbHSwx9hCWo4QNe8WH9gfPMU8QDjMx",
  "decoyKey40": "Xztd3eFPNyp9z3ffvSSVwgk2Ez12nZNDf19XkguKJNnyZNWwXAhU5Pk3cvHbqQmMgfsWiBc6JMNzADNFiT61zPx",
  "decoyKey41": "2hNad9Nd6zVokH8ZR588tEzi1C64hDLECvp6uhL6sLwzJnicCtuoLA9W3h9jBKvENKTHiSnWS4TCSkDQ8awSkwSz",
  "decoyKey42": "4Cnu8jsMaRRCcefAjq9WkxE3fBK9ar2p3jssHkqPKwTwGZWdmzpUUmHPhycHDkZC9tE9scYjRCg9Qxtr9fnkAKSa",
  "decoyKey43": "2Hjs7fpBLN6vyfmhZbmzSac6FzHnYaoYfcz5Hn4jXRxz16MYVgXzA3KJDrrJnHa31Uyv16YW3THfqDAB6YR8wzwS",
  "decoyKey44": "3eEE1pDZYS6qj5g6Ao475oBryLsXhoHgTxEoisqSeAYuGbhv3vXPcRxkAakmTQA2bxEPfWhXWCqxtSHo7LdoF5DX",
  "decoyKey45": "53af8iKNZWVWRRgJeqhpDqYdDAxptVJ4MimiabW4e3JPeRV1nkYiVXNE499r9dbnFUnZQJQ2qMk1XHTZmhCA23FF",
  "decoyKey46": "59W3jzKU3Tmf18yBA1ULrZiZCTdfwdFhkPFhPn4JmM2FxFcpFuM63kFGnNpCfQjQqQj58LwqaUj8eDhKVat8KgjJ",
  "decoyKey47": "2LkjDxmytquxFuo8znjq7NEPddH2hbBfmymnREc2ywfW6z6VaJzFyz36K1LqcKZ2bTJXu5xZ2DLWfpEVXAW3eVQu",
  "decoyKey48": "23HXgW7spr3KnaJ3jaJqzS8h9vgvfsXbc1kpbr8Qd1rYZmXG3mPqzpJz9dqTGzHTVHf85Tqd7fZkG8okLkMz59B3",
  "decoyKey49": "2a3w2r76EwLaApxNgANhW3iNoWAKFKHkGjXU9TjfATMM7L2Vd9KaELFQdPCA45JbK3xattamKJJXUFt3MhSRxK6F"
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