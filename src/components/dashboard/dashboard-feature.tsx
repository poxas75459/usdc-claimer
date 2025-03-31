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
    "51F1raz8iCLYS6AHFzA5HB8X5QEyFzxH9n98LEUbHLEPUjxcpzdndUWiXyYt5EVdjf3tHCiwk4xT59HmNvARzpQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqEahJmWVoSp861mJGp4PKZc9dGYaaw6jqS8MaY7WQ8e1pgoVJg3QDKdqNxoAb6Q5eLhC3H5EcQaRzs45vam37E",
  "key1": "2yuSp7v2sSrLhCEvUmSDD3pphLTWpeZA4pbzhHns4m5LstZcbT1PoyGNtt5bbQvvd8qW6D65YVMaQeHruE6ozwtX",
  "key2": "2cdQkLqBAGPKHJrXPw3fcBvZ4WYxoVsizXUJnAnqHyVR4cXk5LBHbJ3cWmFcS9jahRqY7iHFCuUmrbHGype6br9r",
  "key3": "4UF9cBbiCu3hpvCg4JBTAhWWv9Q5QrN2zFCYCXqEBVK1EtxrTujRoq41viWgVrYDCSue6ByDg94GozLGJdinctHY",
  "key4": "4kQ6GztRYzMugBPomm3w9PfnnQRVhhvHy5cz4ogUidCTHST1Tv8d56MPvTEtMYvgM2PBNMW3my5FrhEhvL2446mT",
  "key5": "m6gAKw9qzkmLX8WX1ZdhC4XKWGcnMvahbGPnyK4G5ePKxMJPSVcrw7cA2RkBL8tWe7c3ggsBuQCxsP7vdAnT1vd",
  "key6": "3S6aUJd2RhteYpV5Fs4TzzbC1NNrQq4n9uoLDBf6tdNXvF2BcfJRmxDvGZW3XTkQ3VCCrE9qdHjDiTGHWCh9qinX",
  "key7": "39y97Wzve719i581xC96ZqbEeTXy3troh2QL7gEQQSF5mNHpk2aMBNXYMaw6NYZm9FeYw4BVKy3Jyfubgi7RRFdn",
  "key8": "4o6aDqxHadobK8KsrLiD3YrApNoqUrPFiVGYGYfKKq4hzSA7DbiiL5vh8EKBdTG49Y9AMYi4uy6M3fgjGoDHN9PQ",
  "key9": "3EvKTyrkTas6MbmLEk8vQDc4fsru7UyWaK2xD8icFhVTE3WnGS8GozSqd6hHEMmeqANtkPGkGwLaiQs18cc3eiUi",
  "key10": "jQDE4kGAsbuihCYDzUB3oA2jnmwYy24ojsgrdZEzuC9JMD3ZbVSRKDhZjih3gw6YqKoEKU1kRdNywovLRMrtwU7",
  "key11": "PYrr6PnRPbifFbVqMGt384C2Go9D3CyE2kTetvmrzpE6ipthK4iw5Ht6v2dUoWT8rp7kvbpWQWkRptYaRMjxbp4",
  "key12": "586famNPaxWQibKGzBUCd8Z6LYkb1QBoRryGYuPo1sgePqKVZmMaC88RyLWVW2Q4YFniRMHoCmJeZQhmgJH9rrSS",
  "key13": "2GxaDv4MqF3kvFgwv7Pn26TNgENfryDirpAEpqm1TrWukh3rt9xPNUdpyvsyEoU3rHZY9E4qH9agMVJLkGZZUb15",
  "key14": "4RqAYePoPY8Td7PZrHFxhLTQZCE49r4kjt61hrgKBgFhhd35XuymH5u34WKk8hWVEFiGPDQEM8PBp4kPY2LQ39ZT",
  "key15": "4fWNqeP8M7wrCK62DVA1wBU6Dj3tGF9D3sEfFkMSS91z4cTczUan9TuJU9YW5AqbzfyXizTZEEhj2uebrsGFvtoy",
  "key16": "4Z6mm2tUR6d99zueRUQpFhrKsLCRwxsXJktDhwTBhySVa6a86w82ZKaMorwPKdmKfSvYitjDwKwEVsskX4WoMEDv",
  "key17": "5axvDLuse9EjHJhVTFwhzhQsT1Pv8bc6HuawcpEU4tkXhvfi6BKz8Jeg8M2zhGrKE4FBvvs8AuVX7vCBFV3C8Tk5",
  "key18": "4Gw1bXNZmGV2VZLp1PBGb3GTixmvWrdcf9h2vKhfs1UpybC1TGjeneXJvqHG6XMJiMZPmHwoyk6RghECjsAS7oqv",
  "key19": "3GdS2PWTw3Zd21UC9KCBngHjeNRur9enpiLWdE1P5ioXmnRc7YdxypsZf8XxPiLhvMXgi6BhpJSceu5P2ASYNfTU",
  "key20": "3qkWcNXNW5EhoC4eN5NnDBGYYuDQdo2B8zzTqPjz7Mbc951P52LVAi8tcDi6e1zCSYpypArjm9Ta1TWtWN3CaZRK",
  "key21": "2DZHNbPmd1BdmDL3C51pvDqtx6iVERi7CGw81ityFsf5HAV6JmKmvrMxW8xH3DjSMfsEGnmLcz6d6tRzmkxnC2cA",
  "key22": "4QancGySFsVM5MDHxQHLzzasd2VcLQLwk17tEMeZiJ52wwQqVMonyuNGBe3BMdaUJtt5z3apEgFFKjG7RSLRHAfa",
  "key23": "4Uh3MkvWSuABFsEa9zwoVSd82dbxJmB161PDAjfLcXrKyuBsTTVTqtE1akUFjJJ66k3rMq97cDLeeHtcenam4C5n",
  "key24": "3arRzeGmZ6qCGTDokXVPbxbtjhqJNAyTdvksaHWAY98Y3RHJjvAHfCaHt6PeHN9yMXCeYFtWCAHa85RxuQnLHGh",
  "key25": "4oVwws1jfN4CvVV9pXXyWXcpdp3JN9k37JLwM2Fx4cTYtNWoLphwxyhC7Y3xnqynAhmi5R6p2oUgiHCJk97rn4dW",
  "key26": "4yMCkhswGZ6XevmTQL6zmtqSuG6voS37b55nf9FogAG8PvncEizHFpHhmggpchuUfi6eHcWanpteHyEva1zo1YHa",
  "key27": "4anTgoegAJ5rTMtT83dyijoW7z4AhZAiGWXpvSBxMEyV7muZ4iNWzVTzXMvzgCQuMRDEdtxnSXJgZQqpUH5hPmu1",
  "key28": "3XVV1MX244dkCGTBL5venCxHUmEWWufT9YuvKuSKYfQXmXRL8egQFNh95rN357xdLrsVsCeVyNQW2evDE6sUwfhF",
  "key29": "8QX2Ncumyw1icKrPZxP21AK1dCMUMHWU2E9tua7uri5xKPew2syKoTmQaCckRH8uNZZX2JWRnfxSS71aenMYrx6",
  "key30": "3dfNvzjBM8CeKtLYMmryMV6SJdUrajRKtwHQfEHQAKLrBKVVZBjJkjtiZLrZud5YnVcMXX2k5rEYccR5B1xf3QJd",
  "key31": "2tkc8amQoBcQzqe7dpWGpcV2UecDRSqx8fxwrn1wezbb3xXnAE99t1d2wgCxPrQLChuZt8HXT1vKCSMxaFBkLSZz",
  "key32": "5SH7VzgK3yuNNjpVzDEB5r8yabFovqo7hvGy1gjDq4UWbTJD4WtRt3o68vqdKKkg51jY9p6Bqb81oEykisDJQ3Qo",
  "key33": "395LvxBT9GJqexyMDsY867pbAZeGe6icZRvPa41Gq4VCojdP8CEEQQzcH3ThFTjaaWtxTihtNL7Jv1PHRcQii7cJ",
  "key34": "5ifUMphj97E3hF7QdKQY7RnadkxGYnCnEncLUF5NZhJwzVCvnikvcpxC44BdezjkD5UPQ3fgHTWGc7NgXiHZTVYb",
  "key35": "5KwivZFtxrprZbw6kvsu5dh2NJazELPLyaisDw7BHgEsB6qSosvryaw29ww73bKbHVUGuxc4MKcMPJHx12k9VTjh",
  "key36": "4bKZdRSq1wTHoDVeh2VBa9czGFggksvhvdq164XLtAz4jgUyYhHXFoQKgpaPJhN8X3Z3FDmr5Nz6gNajpEoWRsD9",
  "key37": "4q9zDnU8JFuLL75jTpseUdzrSxby6wDQecbYfb37reBbmqdbBx5vLdqqFQnsXzkaycBJjwug3fhS48evtwNU2n8w",
  "key38": "64GKS9ydEY6fCq5pdsZJpQMD7FZi4WjwyswpbKfNZUHE5CAX58VMkA83MN2Q8SAPt8ESgveyt75HPXLopc7AqRXY",
  "key39": "xtobJj98y6pf44SaxBj4uadaC58onNzoUCFcr8nqorF9Xd65p6q9qWgWRzhDJuZL5YTcLAbvoynBhsMCE4EhEmn",
  "key40": "4Y2SSDRDhbunJQ5CUkmiM3fPs2JMRCwUH8CT8vng4iptCTBcwpmVNe6ioKYJdS8vfn57T9miBosBz2EU5ZcVhoMB",
  "key41": "37c868TKzC2isTEPUvGcW9gdaweuX9Kz2KKre426SKTFnPsDAQvuCDnZYRgT1EioYFxxkmr5fyDJd5VQKHAu4iWW",
  "key42": "28sKPncCyc7PBVSfBGSeDai3qkx5n2EriNZssrDdJnsQFSxq9bAEPhnHhqV4NjiBtTdGEPgxvtze2Biq9vsU7ksP",
  "key43": "3ZJqWHoxz2vaExTx8tM4Rp9hzn4VaMr17xCvsxvs66RvdiUcobEW8xd2vnk6rWa9Tp6BpUWVEqLrKTeaGa6wrcG9",
  "key44": "4mcmYAcGoHcJUiscFSpn9YX6KuTQ954uevXMwEjsg3S1MCNW7NWYLuZ4sCx26n6SS26A2asyqmdnFc9CgEhiE3D1",
  "key45": "5QvuNjhH35TzeJh9ZyCkD7abuU1ZsDYf14Z7N1EPEVcNeVNKjHfbaAu4t8F6sgfHye7s5Mn8TkKDcpzptAqhVDzc",
  "key46": "2sENkQUnSVfYGD6QcMoJtrFx1fdyrJ9RFDekYFkcQEqpn8bqLuybxeFodJiKgiVLa7s1SixnCnd3pA1kjR2PXkgY",
  "key47": "2UKnQ3uFbtYo3Da1cJKB919sbBxa6xoefGi14VKfo9DhYFwtQSoQUdzJVdEwfDAQYQPDgYuEE3a8Tc5at71fp8Pz"
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
