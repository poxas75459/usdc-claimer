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
    "5h7KWk5XYQf34MWCnD64CKNAqSEDJz4bPCm4nYh4LxvwFJxpWSTz52Xi5AcLkipcu1jZUpar7mkkJGY6GoTvDUGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CybvFZmcZfzm3AxssX9qgFZEhnvjx4KfcUFaVRa9uxkVVZhBx7dWBn2bdLTWNTvxr7wF6kuoBYmT5DSqRKJ4ei6",
  "key1": "3pWxLbCtMh5brDi2BU5BusR3q2GwyDAcD2wG39DN7uMM5uDqARpKCrhqvHgRtHHjMtspSFcatVLn5c29EdDpKqbW",
  "key2": "3zJijV9zALJDz6SjXGheNJnLa1qyGTgHa3GkCYqznN5UxUJ2EvRYzXzPmtbsCMZWekGbVEUiqFAaDWPKewZwxDoW",
  "key3": "9L14CouyZNYxaXAcuAg3PRdiXr1A5JVfY5i3RazrdAeSD1ogXvN4FDMWRZ4ByNTYkpJfVquyBrhe6fucG3Cy4rV",
  "key4": "iaL5bidUjc37Q3u3nwxBTJqypZtAp7PmXDhXSqsQpteysCzztAqpH7ZkenyuwLqk28UPEXGXZgbeSrLixbxw8vH",
  "key5": "21qhvCncB2N9Wcqt8edthVkpGgxy2ZCNUfDtAzy38E1eFLsrXLW2cSmdJYc9HtG7rWEppcX5o37voiqyyNsQFZtx",
  "key6": "2d5WhBnrGrdJBEnDcpsQCigWdpnR27Cf2BrL6XaBwuFsGsbKvxdPAfAKEoxFzhy2cfy9CVcHCDc4Uzyhuacg63FL",
  "key7": "4SRP7VvhL8bhqZTPTNmctsLEu1vfzjshMdBEySitSdZ9XG7k8qujc6RiDNxBcqULyeDxxfYAjYDWjaMKdy6wSZRx",
  "key8": "HDY38GREYQx5GRcbtiYpRF9wbX5XPQ665KWZGRTs6vPp5VxXHEYSDz7tEz8xxaRnazkV1G31usoSjpUSuH98JyH",
  "key9": "5km1msdizqW7eyNhi1zetj2TnDz2KRcipw5rkiNC5sRqn9PgZC6ag2sKYP6eBpUUvzDZx8aLhZMLAypcjwZ1c4JW",
  "key10": "37K5rtG4sbnQ1zwHFUzcx1Zhd7kK1Gpry3ZDRq4RymbybBH5PuZN8iFo1bb7xLDYxnBbnDHiD8DnGfuag9QLBfPm",
  "key11": "2bkTN4aeeE2qzCvPFbWLeFoMsEsXRPREhV49iQ9E4Q9bmwWmTJueunFErqAkvAvdvMvgJ7Xh2qACRbWDf8qEpV6u",
  "key12": "3n9EgkQ2ndQAZc6gPXhSokAdLroFZJ992wdL4TvmvUdYZiFUZY9xHytUvY5MCKVrUJpUBGhXL9v565XpbPNgJBxJ",
  "key13": "KBUgPAWaNC6X7aF4LzUv66ifKe1XacEC7AYMDr2NLrjTNk2ctRcGgXwVPxjZemLHCwckaxcHkK4m7bswUuJCKQP",
  "key14": "2D7wAP24cSJ1ND8uZCWxD2iondTyyjgBnLiq1TQsf3UEbF2r8PDz1R8KrB9eMdxU1QbpsCqpTvTajkHujSMfzEs8",
  "key15": "3nSkxMo6AHfzbSBp69ZMJQRxg88VvyzbXtqVny1u92h9vG2FnTNANB2RJskus639MKW2uVXcufkSXd5D3wfheGuY",
  "key16": "2ayEd1xxFkWZfraEpr4pF8YBGSD3D8DH6DDzaYqSJxLJ7vuuLyUKLaoQLJB7YyZtuuB7B7tvwAYZHz6CKmarKrQy",
  "key17": "4fmEZrWRhnaVADhVFkExPj8C3wmkJ6vabKFegotwpwAN38GmswSEkhAfSKLRV3czrpTnsfsKjgXAGwHeHdR1Sp7v",
  "key18": "55EH8wSitkQzC3tWf4R1ckYcVrJgCvevquqifwE7cksXrEXeMtnXkzFRavpZuCzik63sTm77QvU6639zLCjZxBnQ",
  "key19": "2Po4rpxYRHXHwwu5qB7TfLxXdS9z2DGFHMpZNakc7fhBwXa4TFXGzFo7B1uzePnpKV1ikeJhgZh8hjAkkvhFrUUB",
  "key20": "4stTBze7T2ANHXjdBfE4C5BXaLmY1JSF44xHD2neWdW3dQTrfa9aeBxE1c28idorrU2RfQvHXy6vw3f2LZkLx1EJ",
  "key21": "5Ek4mAJEuvfMuYMyty7B5pmYEVhYz9kdTXpDQ5rxNgHQUKTJcA2o5TJ6dFxKZD61Qx42vqkPmbK2AkoGCDAB9m8p",
  "key22": "2yb6hbvjNXeg9sXGHruxgTnNFXVicWptULHLJ3p6W9K4WEVLeAyXyBSmckpb8SxzSZi9BXQCcTuyJXvNnxTFDDF9",
  "key23": "5KcdFwzW3YrfooATWtiaTVZZYpR9a5yUrqgsRrF4mBP1WAY69YiPJnyFjtUrtjstwazydGHz8FKWowxMfRgpfz8F",
  "key24": "3m7ZDLnM8LBpQEiJmGTydNL7HdSN8a5zeiPbrZnpunwfxqHg8WuLHixDCQeXW3qtmTeBVPzKieb6D4or6Xe2dLeL",
  "key25": "21E2GmXBRqLnKDNF14GqQMjJiGGi9dhAyhK4kWYEKgEJjaSq8r6usn78HeBeYUzh51oeKgdHecsjwZPCNWJBwZCu",
  "key26": "2zCGhuQ4kwbazf4ZPND9YcAJMmmh7dWWtchj6kTujDnW4Xj7sh7Sw4GFRoPNrkhVPARK62RiNvHY7z4kKA5WjH3A",
  "key27": "5gdAPhW8WLCSRG2zpskJLqpoUjZERtW3xD4DewafU2xi5yXGMbqAjQeuzJfWCcay5SNPnfKFgo1k31ZsRWEJeQQ5",
  "key28": "5vCVzCJtxfBS39daGp82DVLgZevT8nGibqdv1TGtEoX5uSbuncm17CatDa6pPhnaHk67oYfUMwUzoCpZkeGVaKPL",
  "key29": "3G3qRo9N2iKFRbHXychiuvFYJjRngfyWuDWA9qXcVWcsNTXP8kbZUg8Ud46BwWv8UpBVGSpbaQPgS74wDam8rVHj",
  "key30": "5SK1M9H7egKp1F5pdSH9r8e9HcLYfM5gVhbF6HMfWrpGzQr5SgrDxhwzBJVQhGbzhGuFHndzzHKyMm8yqkDupfEX",
  "key31": "5SqhyK817UuM68yySvUgqpVNbCwEeMmMMHHiJtTnMXbUqnemUPpTPm91cUvu9VNCCk6oPJeQH9oYXm6hfWKjhMYr",
  "key32": "2BbvFVnvpyQ6qcBJipv4tvKjTJPMahDsoc5taTDQdjMswevQeKHQVZMyQYyShAB1LWi1grKtnAkfuRLpzmHqAQaC",
  "key33": "22rLyHNxhBsETzbg8AnPih75F1p1EPN1uFE7PecJacpFcBjEm5xndRHhNe4CDa7HUKUNP3ao16xMAQe9KuAypUyw",
  "key34": "4weFBDBtcGBe6mGra7hjBfz1J64xkwHzrXv2sJqTNCxAoDMstCrzsJNUdNUvshmuiXcQt8d9bJ6akWKhWPuJbahk",
  "key35": "2NcgxLCpWw6Z6Sf7Fi3vmTshenhkEA5DGQcvZjZ1g7RFAwavwTWLtjMCa4x5UEpxYnR62D2nrx37bESnDki4k6mN",
  "key36": "31gGnwXyVR2sEFS1BxQzpkTu341uk8kUpdbLop5PZeXezmHzPepMts4EbJtsPSnVSYTiLAHTwCbZc68afPpLGvXd",
  "key37": "4kZ8BgdR1kJmedEiDRVSGLCq5Tj4WxShRaLpPd5Z94nz9qmRfboRKTz2LzeCxeAxQBqpunpfPZCgHm8gUvjXDo37",
  "key38": "5vpfY3ZxRJiLMvnuvGXC5Zsg4T8PiBz2MYuyAcJ4LDv3SmA49QfuXJznh9scQ6uUqu6CKmtcfEnEMgDTDXtyCWy7",
  "key39": "65figuyVNZaHMSKJxmV3ij5sAVZX1FrCTz5QqWkWmvkWzD318oTZNsAjdKfgeafPjEsWKdMRXKoxEsSpp1Ro9TZ5",
  "key40": "2JPGo6ndUozM6YD1Kfv7AZWJfDv7EB7WeTtJS75AiDEAqdHZDZRk96vgXofF9tKjGk9m6c9QEqquQbMCxXLrseZU",
  "key41": "2NqdgnzLK4gGb1i2YucRVbrUbCKBtGUzvdeThruoTcF6k9JpNfMZYzQzxGS6XxPgyu4EPcmypiQqAj2qEvJLJtVu"
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
