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
    "5rwzyW6r2x4k9sPUCW6nY3pZ7ivNmzWSrS7D19EHZZXJEVEuMMip99acXs4J1DczPjfjPVsSC6BRJjWXqTKEZsff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdMZgJupuead2DZFneGRiW6cyxKtpQ5hdGunQXBMDsWffBpR7MUtL5KzBJsxk9LBCZDPDLg1t6CmEbbQN9R4Gqu",
  "key1": "8jdZ3eDUppbt6TDefqPqZq1dcozgipwULosQnGZJ6gri8F9c2aqC9xNZ9xFXF1zCN9JrEMaemF5NW2ug1tZWQde",
  "key2": "36RNeWFxQ21jXJqQgCFJEgURWVQGzyyy8FbH48n1i6CNRJUVA4aiJRViYQpudKcuM4WbH363rNxoF6DjZQnm6r3m",
  "key3": "8ehGWspUcKjsHsN5cwWoHc5bPXhiwDgWZ3yn2cSoeGGsNHjCcuzizhMGxSgBe8NVUHfp1XZ495QSmivB6WpMvnm",
  "key4": "42JWWnWmfX7UsFcp9fUguR2pnTcY5m7Lxbo5X2wwaMzDaJakabsqdjzWp2HFUNDwQ7zDtGnWcS7y3dt6tXmR4t3V",
  "key5": "5CrSErKNGJF5x9JK1YPpmsisKgKXBd7JCMUnHuABMCE171dRgJm5CQRKe3Q9JqS7BF1tPLbe2gyoBv3UyDkgsQZW",
  "key6": "5fUQsybvxvSsTeToZExj1eUT8bamim81DPzai92ma9UHSEFU25T7gC9KJPokWx5xpoVc9bYt7tWjMk4ZJtz1eiAW",
  "key7": "3Af14DH1MNKnNWSwZP2ECsKKnKYAnje1mMFR683WPikugbm1DUbNFw9HxDbEyWmS2EusKu7osXWx26Hd2BUMHnQj",
  "key8": "5UdjgRnsYAdsiiyfR23XGSSaQKLSy9t2EM9P69qJFHgGkuYj7poM57v8Mp6Gii6oWeeFbLJ72HVTRyhcUv9RMNeR",
  "key9": "2vg4RHwwe8fAFyf4XGqRxvVSRdDe1nRggSKxEJ3vvYPyTeYwkiiPyPNGmk8KAhxkWCFLJ5PcLfGGh3xXbDJanHyz",
  "key10": "552YMWkWgFkrga3YQ9gJpSP6jybaxTjzUYziqgGTdb7xrQeru39oJg6xahYAUiVHHvLLfafz1v5UfNQCcFuDcFJv",
  "key11": "4fWXKNdr46DBbkzzr1VA17gdzHwArQ2azzn48MVxNbDpxVbXyzLD3cdtxrKhc7UpMsBq6dPRpv35oSDSXrUrjKF9",
  "key12": "3w6gsf3pEyzZrQ8NQHQVRM8AQvdGiSGxVFbKh65i8hSh4JgMnEX1McjrSYkQF8S9QXkShzvnMmSF1RzpRM9i5dTL",
  "key13": "vSpQkN41cnkriBdwEKXXvt1kbPv1hF1B7j5tiioJugfAjy2cDQpRXkqsXatsetgMqg8gRpBJCRQkeavDjx98keA",
  "key14": "1vjxjPKJp8PHXBXhZvZXs5rQL4qvEDLXRfWMgDN1fkrLoXy6RskyUmzMsisb8FCRpQpa2nrBjHLbSWT5r4KR1be",
  "key15": "3RsL2gA8Qk8Q5hKwqgmoVKYFH9SZrVktBj6BfUEFTwvVW2rfPXcUeu9qtKdCyJ45cwdEK3i34A2uuEXKqyKXy2mR",
  "key16": "5s7GRhdJJ4mfXbfr3u4NWA2CvGVy3ejJj2LKzvc8DWevCmJcuKsG3yyYvFV5UbLMsQZyw9BqbzmAYLi8e4c59pzH",
  "key17": "2retdtPc9asn31fpwBnKAkBr5ozmADz8eUNzECjtpYqYLaxpBP65XnoRs1NKK5ndbkgAXVVnpKBXutvtroUcGaeE",
  "key18": "mwSTUXd9wCBUZ5jXRCUh95Zpu44Zoiz6c2g7ps9oHMgfZedkm6N3T72Qx2147Xe19kvtz6LmHfsbsvJ6YBwe9dv",
  "key19": "376YoRLfsGeLYc7f2riBZRDz3RzbQFeLvrGvEm4otTBMGteAUnH6KsNSujKh7mC4AmA9HFTVaHSAjnZ2FNLGxoCv",
  "key20": "5qdxvjVYWU5nUmTZsdV2TJ6BfPEVNKsT5dBiGJS3FXqTQk4jwBuZMeVhzbzFSzwXrTwg9adrat7VtWPJ29CbxRSB",
  "key21": "4DGUrPe1sm1gHQRc1suVECb4Qx6jtetDoPwxvHgVdhWTw7mSBruuFKq1921hm4sNqzvrbeJZYRJD6crL2umTxLeR",
  "key22": "5EZMncXqFemj1QaFRRsQjPe9CT73Gzh6kpHDqs6NmDxf53Nxq9sCUodZzStouSmcfN1ywwpqGbdXmRvGVEb4Ztra",
  "key23": "4tnjSXtYJwXip8Jhx7RaLDegMbvtGLJDQe3wAK4ZtXhc5rmisjW4TwvfMuCFUKTh8hnjzV8CSvCYX5LuS1V9xsRU",
  "key24": "4YQKpzDtTCkccg8omeGTaefF8XYEUpYSFCP6F9bvBYUjLCP1Dpo9hb5hsRna5wySxGNSJeWQXxip9tn8Z3gy7krg",
  "key25": "2XGR5RFtJgajXfzF6qVeexWnnggJ5xR4zdc8Gdh2ex3BvrspN5XaBEX94YExei66yu6EJRFpZjvc1nHomHic74Xk",
  "key26": "3QF5NTX2wkRT3hS7Jc5rkyLJqqXK2wJ55fxeVTfgrMPmwEjxmRmvQQG2tfgEzNCEbxP9KurPB4XVuJWviYqHBXt3",
  "key27": "5TbewcoCACUjQZA6b5gdfM6uyu5HJugavfhigVvYZSBD9ZfYi9STa83JLVfgFGGwBKd5o1UqbzxrWKBwcaL9Hr4S",
  "key28": "4Dh1Fe6B5fNoqMyqF71wAXxnaWVU1pLDetDJuZWx22UyNyeuaLZCMYbmoyCa2gE6nrEPK4oJ1zpvzw7rfhG4FXpy",
  "key29": "2zEK77PZjCrv9pzzjbQUQYYf3W9PCtH4wi9YVYwMEkT5U3Fjuj6jKHD16reVxur2XFU9AAhgYZfy73pTV1A7Nb1o",
  "key30": "2dV1sMHZSkY9THByJmjag1wpP2uszTudBo6NcGDnoHAVSQsa5cMjCN4hQt91wAV1c6GBbQwwQsEFEeccF1D7TWbv",
  "key31": "2hVTxULcb8jVW26GZNKHWUt7wLjPRNUwCUiCd5MpD8vxFAauz9iWqBaUJbs1HUm4gQb3hpGZrf3sZJyuHGqvnXBk",
  "key32": "4sTQZs8tdxSVVHy6bWvoLjAcRTGsMHxF2njqWYGTyASp8E2wXDaXbTxSUyhTx5twg6ijdr4BmABwBmsHqnUHdqHL",
  "key33": "4PSbU8bzfYN4XpudgoXVbKKJpChNmZyD7VmoQ98C6g5vnFz2M92yxgd6rzdkESneS9PgwU3ERgikR2RabMxiA8KS",
  "key34": "3HUyiFx8tS4RL3N7Vh85EZAYUHNE1zigcoTiDt8AFjtrQ1JExXPSX3Hv2GBQDyngzND32E3kwZHkwshUYuHnK5Y9",
  "key35": "2nceUNsQLyHtSHuaho8kttX7TSVsC1B3WoFsuicz4t9rY9vB1JnrVqm4GYVeNHkGmdCYPbDs1M9Ecr5y1y2NPNbU",
  "key36": "2rUYReMusFoNUmMQgatV1p2Crn59qPXMYMeLoLzy6fWhbpMsSbY6VucX6LqD4hzX3eWECXdYfFtog9gTG6Jg7Vze",
  "key37": "3kxgf6ynopysVkZEzKZAe1j5deUnrtaXwY1UA1uFqJUfJPWA996fPT3WwN6zVFwUauWhudtvokaRh9HyrDBgxSQ",
  "key38": "3X2J3ZLZy5cS3LwDpv4A2uEjeZ9DajZZWvZgJBijpw9LsVCaaF9YX52o1RKcZz81Z9SVkmkrX4rTQaHvFJp53aH3",
  "key39": "27rknDyd79GSCMy9EMv3aQxoyLFmgPrW6FiXJd8PiSG4kmti1kiGpS58HjZ47G2dDBzvSntoMaVhXs6cmrzWSgBP",
  "key40": "rrhNFYdziojDskcSYvX8KQN88SM7TeDyLGkNhr4j3YS6ceHX3bQuQg1u9kwqtWk1QWaP8nzrE8rQNzCAkjiitoM",
  "key41": "3EXmMNzPw5KSGbnP2ys74WkxrjWnCyxpm7T7AAMXGUj7h47C4VUzrVHKnswwyVU4uDeqXvtNEytDgyiWL783qjST",
  "key42": "3dhjHc7DaahDUJtGUyiu8CV7XpFfQLKmJTuyPFVUmcG4GWiYMWRbysLzUSq6gSFPs4Lo33gRagkc87S9EHmg1sDK",
  "key43": "63zM56XthePU13R5VxC2bkEYjo85Y8DWm7KNMF4ZK373gQcK6AVTSZH5DJvPsnfU6hsMZzt6gXBgY5UGh9X6GEhS",
  "key44": "cNbDa6hotpWHpSV4tKeDmeXada9EuaEYz9is5Zzj3UDHs317SP7R599W6EPK3Pkq8x1FcMdTBBsxxh4tX5YbrdT",
  "key45": "tjRWVXHMsuAuLYWPfUXjdxzxn8bThxyzUho1UVTyFoCsrYFc5DHg4HxNJ7aqxqc942Cbiwxdijvadgw39aoyGgL"
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
