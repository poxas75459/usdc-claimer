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
    "34xYjFfT7ticaXsVsPHWWsuemeciuziqRLLJA9wKW37HqEpH8tjrQ5LmxB8scV1wAemBnusdnZWCpkoto45fui9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q89Vz1ocJfYvj1rS7hLWnopUPd37gUXU8LEvhU6GCE34C5v6soQSGzD6VbcotAXEDYPw5x9XLsJj1MTeUNStc3",
  "key1": "nT6ayd1AJCHnUx26GgebUKVzRh1VPxnB5SEtGoQMfmEH7UkgL57gFbmwAvAUCzpuMWbR3KkVfT4z314C6z4wrEV",
  "key2": "5CM5thc6Ax8piew9RZifH1VjpsiKyH2DN6j2Dfb5k8jTCEKcoTbripUfG2PMKX4WRx7VkCjRigFuMQoREsqUjB58",
  "key3": "3s2hTfceEr7DfgrZwu3uWauuYguitdMNMDhZff1QUPY3x7E1KEuYBb1dhtHtxByuG81qZM8pCX6S4sYqfLerJ8rq",
  "key4": "gBiW8wXDJjzniEJrAxmk3d71N1iMGMUkPddMeVmvcLfJji2eP5GyRVokmb7xj8P9tLmqZvYMt57xHqURTeLi6es",
  "key5": "3nF41hM6noFXRxTnkm8iwwpHgrzrpL28Ybb3UgwjHxobN7tjiF6LiRMPGhMfVuXZqFgiPXPM6m94QNCB1qs5eXhd",
  "key6": "4nxJoRgyFfV2eWxgtezvbjJntbpmCBDZ5EG7eKNjtfuzZUKuzZhs12rXDyYvs2pVwsUXF7yiRpoUNzMpzANzCuUb",
  "key7": "4q4aY46AaGi8JChEHeX6z7drcdFXNzX175Kx6Qvgqgyg8vh5URV9uSUjQt2PC3NSEBn3YpfcVxWdu6rxX5qF8Whf",
  "key8": "3tYKPEySoJKuSbYovrBp7nK7FQW7Mc4Wot14h24bAUT4Fvyg34dJRGHzDdm8dyyG4X1KoYhw9sqKqTs8gkepSRju",
  "key9": "C9dqoyj9PVXk59rk3gaShbiWbHzeZzcB9aPps7kHCTQGub5Xozs9r12Zb4Vjgiok8F6cQjc1T6iU2rj6hxmocxa",
  "key10": "5oxvVRfePYTSKEjhBt3HxZLE3vc49vyLf1KS1nRRkHTaB7G4XvxeYVprcpEksJZ87a4TgTNXVgcfd1goQ5ormYEE",
  "key11": "tgigP9CHC7b2APc6WNnb65Qyn3hsEyvs3seJk5UNkynjC4HGrHYj7Sv9ZFFixZcAKsHPG1ixLTx7HQTLnbXrqkc",
  "key12": "2EqLjBhkJTPmMkPjt94pmJj42YxButQSzaAzrg5FhfAcEGJQmT6gHcpZZ63gyyyXRsuHEgoAmMnwkPooWv4tsnbS",
  "key13": "3DnXiavyDNq99caS4rQacMX4E7zACbFpxRbTZ3yyE2dceimBuf73yJK22yvDSa8pAMh7yyK2t5aboP3XMsGYu8M3",
  "key14": "3Ysv5h6BbEraCJgTw4DjXz2UcJi1MaPC8QqkGChj31mMCguSyAL6TFPJBvrHKsjkb8uuuQCJzcmcktuE6WQkSFsb",
  "key15": "5DYpAnn6ejsYpJtAaXwqt72pTNkco1ME9wcN6KycYh8QBZ9Jk3aFhtjLELCdKc3HGHHsNSZEW8WSzjNyygdWzbRt",
  "key16": "2NNePjHLgyPoCynWyFySHhBbnf5R4ayk2tVWBKc7iGX8F8zBeB1Qs1F4i4j867DrhcpHxdeunEbHZtNoj3iMyGN7",
  "key17": "4awkEh3fCYMnWFiuymF7sF9FBTd1XpGbkwFSeHVAq48Q7Qrjf52DwGdcxPsQTEXvCD8bPuunF4hnHb3HJd9xSpJu",
  "key18": "BPKs3WyTieUXAG26Hufi5r59W8abYeyVPqg1sx7L8eSPXfXwYxDJ64uDSe3DDGS5vTtor9CfrLPd8uhASkZ9fjY",
  "key19": "5xv9ciRKfvo2sd3mXtuiJj5yjb5sr5FMjk2k6cyxmYWoVa1snpyJqnPyr19RwvDLCxcdwwBnJRoiNyqpkq9dCiVX",
  "key20": "29p1QSyovEfcewT4fJvmNWUQcbiTgTM8W26BGjEba79bLtKZnbkqyyKjtvN8Z7BkdevXXt1ZpXqHDfArehcmjbF6",
  "key21": "VP6g1xu1M3Pqxj2aswbfi9HutqpC4U7F8ZRLsD4zmcdE8YNLN9qE7SLkUjpU7LZ1U9L4kkr7fCftkeNP8Uk6Lzw",
  "key22": "5z9rcCdWhhnjqPbcifdJpUTRiwQagisBwBQTSsXPi1zY5rHhmZPTKqTjyBEsK6TEpYuWb1cgJDSRJKXqH7yyfdop",
  "key23": "4rqhoaTH9FsHQk9QhB4DD7owZXeo8AEYQF8maoNdMJuHPXAe8JP4aAYGVSYeV7MsA9R8aD8fAErbgiWcRYDvZcXf",
  "key24": "5Bah1wDHmXPofgA2Wc88DT1qg7CpWS2HAbZpo9wAcQBH9vYtqdQw2VJxReideLPq9UeeytE6chqMFSgCZSiy631A",
  "key25": "5F66kdcQ5zcSBj1xn1FdshDMKjsNR54G7Ln1Aq47fw9NpLh4JnsWUYGivnraJaa9kW1oE5akp9nv8kLhYRSWfC1k",
  "key26": "3KNthM2ccYQBCPoDu4rNfeG9JaLEBAAzoXi6F7E4qg8SnFXH797Gx7PteoEA5WzgQzfhfjnDAsVqgSt1mJweem9R",
  "key27": "2kiLk3NAbJeurhdZ3BesXGb8DMQt8ZUw6DKo3mTXoPokBaGcDy4VKEPkEbUa4hNfEy1oBne3g5TajD6Kkfgx8vcX",
  "key28": "2NuzbTCebFHthZEa8PeSNYUJNphsBy1DSGYSBHgi9LAF4qDnQH73S4Pjs6s1Q5GzETUCnaTe9g2JrCg3hw967CzG",
  "key29": "3YyPg12HgYYNBJwC1vRHftrsHSsiCyvAecGkUPBouBwVer2PGj6V6PLQvgarNj6Sot4SPjDrLDZDg5EfLd3hgSi4",
  "key30": "5MkQBgJYEuLBNtW6NL1gRVzEG7ARSxqoN7BhLGmbSveY8Gk88LrePjKPU9Yr4o9eHjTbJpQKWpXjATvmAYJHg2u",
  "key31": "NRG9v7uR68FegSKQjgzY4TWoxcVEQwWTnFwuqMrgB3uWb7qU3A5aGitfjbFfXaSt8niyaHmmW5rEjrj5BuUKzwu",
  "key32": "25ynVHwDaS8qzpCn6fpaZGWnJzxuJRZiDfAnEQ1BoN21CQwyo1Jp8nWAHTSL64sdZeh4HS6XMDKuV8DXAdtvZW3R",
  "key33": "4PgoHVYGdQdGKSjeW2xe8kSfi1k6YFAn4qX9BmpzDWSycsc2DhxfmsDzPkomQQdDyBDogVF1mzkq2htHWVkvB4Tf",
  "key34": "3wuGN39ZLNTzrhh8gc2gYg43X8Lpj4tXQVSNKYW3Z2Pr9SoSf5rNzBNih8hnuAevqdJrJtWK2H4MtAjeN5wWDjzs",
  "key35": "4yCzRsqXa8zug7AF2dwGjP56kg7SKYFjUYGmcJBFrHt7wKgy2HBetX8wnjP2Ybpu6onS6gReRPc2s12yQXqu8AE3",
  "key36": "2naDmxq3Ty2b59ALKbX4obX6rPbzqQAz7Y9TiSXmETRf2NAbf8NsDqaMKyeGxVUDnPr3UAK8g8psDdL52uuJ1VNF",
  "key37": "5zFvrRfZaf2Ek93uYyNxC1L8D11aU8T7aA649XM3QASXFmevfcYYp9apqv5XUw4eYGgQC7P97x4dWWcmdjtFYsyB",
  "key38": "ZCUPfjE22ATfu1bqYibKpChyyzqshvXkDW9PBAU11LVJXWd4meSZhVzwBc3LjuijJshgRfLnjKkVuQJqKmdM6W8",
  "key39": "5J4sb8TvLesj3Q1Bcb7ejz9s9d1vkG2o1fGJbp3cDe9cJ2drZ4aYK4Vpwvyddgeo6yETbQWFjK9jpSAHCVVybD3F",
  "key40": "4U5htSt4WNwrNgoZh4hkGLdXagr9jn7CrqhFNCATWRym6QmwGixDw4paij9rvsaYZLqqVzoi4WKbWEqA6i5fpM7i",
  "key41": "4j5FjMzTjGzyr7huGbxnmm93Ki9RGdyVKYWr4pMqYKeZiEJMGPjyFDZuncxUwXjz3TKCXigXNVBCExCfGB8Nnvje",
  "key42": "28rUD4vfG8aap6H6vxRYwo8rNxoiNZG6hpLw9or1Sqabp9DSGthrhG9xvHzbnS57xZwa3f9buYu5Eu6H32SiGR2k"
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
