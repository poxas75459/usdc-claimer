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
    "5KoiSzPA4TQz4Y9hHyAK4GfpHRt5QDehAspDafeGgsq7cy38DbdJQmSx759UhwH7d3X8ZDYPuQHJJfmmMRHUFgSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KuwhYRm9Ewtihj66v2Xq6iVQ7qZA9VALs196k7W1795m6Q48H8SjKgqzhWbMfXSqEASXTjK9jNdferjXviyC8z7",
  "key1": "48SRfVxHaSwntX6P8t2X3hpWCVKwuT9fnfpuZ6TPeKw2LDXcKwbJA5GUeRQGZZ9bH5hb4vM68w8i9DUQ2K5KJBtx",
  "key2": "51sCr28tdZp9AnFuKC3YPsAssrhy9PEVnZH76LQu7ZrFHEdXDrDfPt9MKXCfFiA1PpdqjM6xmRgqrBshgoVb6zi2",
  "key3": "4AbpU1ssh6M2QiUyyy3Uw2EqPY5ZyMEvTYMJ3yF7wQQ6HM6nWHHKpV7zsmMe54x3m9nSiNG2vFnB2tzeXq54yoLr",
  "key4": "37oiKzPFvqbB34hrLtrLbtTgGwv5Fnz86VGG8kDo1TR3svEkCpTYf49ywTfucLjU7HmWTsrxe7C4xtVvynrR74qt",
  "key5": "2LrCJZMPDwf4JdikTUP5tw9vnRAToLAixwiDANfbTEdrfr8G8k9k3PhxAhBiNJYyTgFba7vMQdAmtu76T1RJ5PHh",
  "key6": "5RrHRHxDYgRCHMhx1HYiZY6NZ9D1jDkpPp9fyNoTMts7ecj5xTvFvvB7HdDngNTERYLaB9hr1exvhz18eZhcaYmb",
  "key7": "3GfA44rHwfLHEgpjZAh137Lieg3CEHEg2J9PWCskrbdDwTYEJE6a6RJzNVLDEZtXQSPZk6EQuNks5bdLrBAugM6P",
  "key8": "2651Yx57L966uLhLDzaq2BPeSee8DqosUMLDGJkqK1Z6QVDb7GwCFGXEkZZBC63HQFtNgBTKbrSHsFYJwRC23omg",
  "key9": "27NykHjEYKJDUMghyQEjmSFQgESbaAjPY8Mi8zCLLhBaJ2S24BEqAjqw2j1mUvBw4EJU4jggwjpJqN3pz4LXb4Ap",
  "key10": "66qkBtcvdxTTTkTEs4dHo8HqPzyc6Wc2DtHZQdZh5mKwZPsLyih5mbT7Y6y88qL53dLrWLV1PeX84LQNR18yLNhm",
  "key11": "64GJSfvrVBfwoqGCAonZT7Dik9hwceih6AKJ4CWR5sxA9vpFtZ5nt7KUAUjuDwSxMc7Pc4rVuBDwNDKqMMo9srGe",
  "key12": "3PXaqHpXuAkEbuWf7MubTLBLptUJEZSWeHsbTPaeSqU6uw9DqhWjrMpm8dcqTdZ46ifQYZszzk5QtRF1DVHN2U8D",
  "key13": "4GqCGTMkY1sP9JLLeVLg5QE49rYnPvQKYUWaThHZDxi9xTbpU5mJvGfsjn22JBFuP2acRjFzCyZJnAQVv4cNWjeY",
  "key14": "5NFqrgTjCNyucwXB1YYTYJV8ApX96WrMxwz1NVVqvQbuecV7RWdjnBw4uHehCmpRKdWjA6cr7GGEUFgtRZvhjPhn",
  "key15": "2sguAXpKx26cXAVyw62jsmU6CPBzq3AkG4Pr54vQKJDzB1HzMN4omQZPUKkpVN4kgUus8vLHLFAwovT6Jq2hw9pk",
  "key16": "3pUaKGqoeUAH6U3vMuGx2C8XznqcgYWhuRxeJHXsA91pWxchPojCKhZeemkx3VAGj9vKg5aNbw25Q8TSe6Vkmm5u",
  "key17": "5UEutA9DcjyBTJQ1GLxz2HXs9gXyNdpjDftmPbLVk6RwQ8izCpKkFzj9W6wUqrC2Yv7sx2MHjBb489Xdg2GRJwjv",
  "key18": "kHnry1wJ96SFTzGv4GH5yeD1NvadR5bYotzwDEyBwEa53WJM2nyRkQ6AHALYRhPav634DGw9inx8RKoeup6YwTw",
  "key19": "2aQSQK1JwtJ7F2NHgaqCfRi4ye2ZTUVsSGsGbSinn14DuoCzvJC2bSwzmhqPqNmMv21mTjre9aU565DFcsqdo14B",
  "key20": "V1LUujnbF3Zk3KCEN4DHwz8JUFY36EmieF8RyNoASVi3dN3DbZjxyNN2BrD9EsKJgAPfUn9cRNPEJARWxSp83Pm",
  "key21": "595FhBjGXm4svG2XNq4GYhVtaWxVFcSCQ8NxuSnnk3rm4H9eeGU4XLW7XLrRNYhtiovWdGszeBxRHpQN5yxq9xtp",
  "key22": "BgvYePnPBPwUZw5WWEcE4ia4JrxPj5k2REdVmmY6XnW2EYfWsNftwzVq79nz3Cz46SRaKnW1mmYZtSyEkYyiQw9",
  "key23": "63th9qu6uAYGe2iKB81sWgLX7KnHHT1T2xc8eUFFq6dMrPtsFaeXhQWonPBxz8PGZoFmhCTMeifQN52qzaZjbFEe",
  "key24": "2SAA59Zux52BAMUZzar75RFXvAc1NaWGSxw6qNWLhtFDEAU9A4T4HCSUEYGdBU4AGBhoiv3E7d7YBmCKS8xVqZ8W",
  "key25": "pF54JvCfzVdHeA8oa9UJaSoWFwSEjYyDSKXyGwWgdnPmh3Fzo4FcjD47pGKpJbNy5UBNa1MLLoZaC5QA3PTkEQ9",
  "key26": "f3BFTUp6BRTxA7xLbTVnfVXAQ9mVFLwnzcg2Np8ncV3ZjFojA4TQE8kBHHUz1JGn1NGx8vLF2n68iQmpauZKp5M",
  "key27": "27CDBjg6siJsDxJuXitcMWm7KcxX2P69FnWunHJ2BZvVXRy9tqab4msggcA2LA3T8XM5s8k2zMVRssy3VhV3S2kk",
  "key28": "5i3NVvQNaFwvEoUNvy2CvAniSYHRwLnNubhUMHdaLNJYCadkDzJwP6hf8BrsmCjrkGWzDScMNmJ4xozouC41eL1A",
  "key29": "3GByihS18QtchBxceVp7TKcsphcj7DsWG7u8rMLRgEYiPkgnsXVC6jNUcxnsTeX3LMpmNTHobPzzN8hbk2TzPba9",
  "key30": "4kx9FcVqHAh1EXsxZTf3cwEaysjwXtLLBzuJK7pTysf1CzLP3o7f5Hgs6xVLnFMWX8yLs9mesepXvvdCJXt7xihC",
  "key31": "4c2aC1mD49ZLcZkq1pNnPwTkCGP4H13wrK38tzz9UNVwbwuKZ6eaTLF6NF11DmqqY4bsyjRLYMiH1aijQAHiXN97",
  "key32": "fWRXEwtHHrBo48dq65ERgHG2WeH9QVrTgjWWqrusfrJ6dz9FR6Hbs2DTMfPzFybmX2U83Bi734VZU23bN2rfbqi",
  "key33": "JbCQtfXUjqVMhoQsmVzg5g2hPuziwAvgmJAGkqqNtHKaeJGqbpKXfZypbtg2xgZApDLA5kJVYVcyJT1Qgv43tus",
  "key34": "3jczsiamUcdAnbBdBsos1zfpWKComrcWdbCbvDqbfMwqxybgVYuKjztDYWT4nh9w5f72kUWHReyhqGqs6adTjNtQ",
  "key35": "2R4nGSZTRELYeYn2NamvoMWri5ES9XhyTaZdsvKTaBy3HVbaXShpRGeCi2rENDatgj78ygN2xswYGvgwbvdnsuhE",
  "key36": "97h1YkjiLBagDURLcvXdF5nymmoqUbAW9V768vzewyupMbN2zAtrUY5PjyFFx7V4zydiXZ2YxgoXSRtJ1PoHrLg",
  "key37": "3st2RWgQp12dX3ZpMkqcymDnGd2abgdsz3AoZinJMDXTTfNa2RGonYrAEN1C54ThyHhS1WX2GiKgasBC8nTQ5KNC",
  "key38": "3LvmD5mi2CcKLNyfWiQmD3cTUwZS44Ug1Mq3C7HmzEqg7GwcxeGrh6uHj9esEcxh7r213bb5ovP1mxR3aSNfbg3V",
  "key39": "27iPvPHu7ASn5c1EA7MsWD8DWQpveRax4pEHv2uRUoCHNx65uhTi5bg5WJHmxUcmuGYwBFBuakPPLeQNpHGLYebP",
  "key40": "3gBx8u3f7wGgMJsC8k6MioTg15YYPmi4EKDEouEGgxU5h3vEkVY118kiwCRpB3rW1gz7a7W3bnygKME8JMydEHsv",
  "key41": "5dYni77dk6yaAZoHspXu1TnLGFvZBCzMLr4M3iy54qPWdYWtCQsSoSRy1d2UvUzYFze4LrtHJUniMLE2Q6V23Wc1",
  "key42": "3WVud2KBCkKvh9QEuvQTmCB3S9uLy4Pw9cmeNqCvfJJn96qphAZphcfx3xop13RD6dcqmrVKm8uAENLX3Y1WqkwR"
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
