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
    "3XH25otPzhrLVTTro2uofjRnVF9AHPtjZC4N19fkMR2WxavetnPGKQNJqWKQF569UzEvs54ukVaUuefKGrWtrQLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UE1m3zQ9epG3eCUgedfRyDjEmbeja8hij65bVRsRk5WzyvoAyBKuBGZo8FKzzJN7ptC3DjK6VPdJYxS9FLarY9C",
  "key1": "5pTntEyn2njjZEbfAf5k8f3PuwsB4t5nKLRu26NEpHZHgQ3bNQRJSAfzztRLvoXbHBUnKNEsa4MqUF3c5NFEjvkc",
  "key2": "5SnSpBmL1uERWs2M4TxcpRBtyehu94Wg9AYDUsz8sLoLuBWbCGjCUfLzaW2ihvJYnDEivy4qhr92CuBxqrfDmMKc",
  "key3": "2zFSKG1kYcBaabNYDFHyuC9tarS75VTvthvDyF2MhZ2za9GRo5PNBHKN3LoqsSuSaFcZoAqCfx2DCkrp8FXhKtJL",
  "key4": "5bxCjnkwxwgLGZsfe8m7YxDfRmLxQSLJuEddcagd7KS3DD8AQSCUwq87drFgfi5ZNvw97BBUvxcAmDTCwvQkjjxH",
  "key5": "EKGSt3B6UCHLXuh4i3JBJ7u9DnLosayeHt5cpv4DxzMygoUsG3GZTtVKQSDq7DSpbjzTfmNqEVAHCsrUrdpX3Di",
  "key6": "2Fv8f5vyw2Vfvkwfi5P5amBFYNm3YooMrFSEvj1cmekxnTV9ot7u2cGpbUfpx8NDX2K5K7yg6RbetBAT9BSHxLet",
  "key7": "2iiE7q6Pwdn1L2jEF8rGBEF6nysWRyJ7bV6mmfNruSTBZ3K8tQq3jKYHwkEd2uP3ivMnGweKTPPmcD4rYHLyPgQE",
  "key8": "4JB5QCSqGosPXUunPzDcLG9cUJXXwk4WDr2oAw8WCCKaPH9WoX4mfmSAEJyjpFvBNKut6YutbizDDSJSBxSNXb47",
  "key9": "5KHzpPbQegqRwmhETkN516vFNSy7iwUfgsifmg2y77J66rrCavGpySTPaPVL4jKuiYb39yYgFenY7axFmXnPJ1F4",
  "key10": "2SNWXU8rKWe1At5CUW2xNdcNWZYh3GZU1EjsU65yB955NVtCyKgJoQS8MomtjnT8GXAxqpNAimCcQoDbhNVNvQzb",
  "key11": "3FwZMnR8DmZCi6dr2kVtLkCDSoHnSjJGTKBT923oC99er3fer8psR7cj6uZBHsg7qzGw3aWpAg69bXLkbJGk8Pkv",
  "key12": "2rNzKCyXPSrsjAoZNmQx9Z1pzadU8A95Cpe3LWsvQmDkZ31xbQjb68MzwKPsuRCZ6PoQhmtyy384yqDoyqTgFw6D",
  "key13": "5gDxahEMqgcrtYZVyy1bhq6vPYoeBk1fE6AnEXrNgjmzRHgaCe3Sk159xSBDFfLotZiKLGHMWp9CbgwpA6ZfX8xC",
  "key14": "2PdQt3GGwQe9V5md3WcnEzEU2h241s7vVxXwTaGfWos8UAujkJWZPBBfM7a1fJAqnVjovkRJKaFgkrzeWcc83THa",
  "key15": "63es86DTFpDtEnj51aPkt3SCBy3Cug4jPQ4rq1yhuNYwGDsaRYQEUKgdrhu7SCygsLpxEyaryhvwfqeVJDjoyLQB",
  "key16": "wsadizmZjxjDs6oaKQew6yP2w9vYgfupEk3Yc6rLZPW6R8MSNaU31r1yEB8oERMVjy3yQd3SW22HAwUn1AMu7pR",
  "key17": "5FT8dpmP2KQib6o6h4yCdZRRzLbqNhrCX3EgtpHytPEiQcDNo9NEN7RixVB1vhLhZgCCiknQ23dMMTh2krRPRHo2",
  "key18": "4ciLYZf1QeTLDoo16RubTukKtrMAt9Jvj8j6fyffXuodp3y9CYSn6pmFZgsjBBSktrEKintfM9yyWisxMT4PFRCD",
  "key19": "fSYveHhBzw3PMqadQM5qJxwo6PGiEjjK4HFhCfvpZZSNgnjBQmy4ee7PJRouygwpT29dZjsMHdYrQfpT1A3QTiK",
  "key20": "56xdzoUuQyP6CKdtxQS7oLi6LENL9ukfg1LEfgp4MQV61oYf7y5RYy1WGgZ57Kx2oCCkeZG6DgwjwtGUkurV2e4m",
  "key21": "4jaaoiipkrME6ghEWe2ymBR8i7s1nCNwpzCgtBAE7AaeHMrszDeb9JePGZf3u5fkDG1GkYhMsRKndfT38JZEDQ3a",
  "key22": "55PWLhqa67nwZH8afecfuHztCBxmsnqQku2v3jQ1q244P8xiETFLeHGU9kQegy8YhVWxcsJCEgi77v7PeQndkifN",
  "key23": "2HUPHqT9ccFQikbemKgKvY7SSa28vBbHbQLkEoTncU9qgWRfrHrsRiXHk5DUHTtztUCLVhCCrvJgN5n2L583Toj9",
  "key24": "398XEjooKfguzbv2FnezcqKeJgc9SdAumDWf26JyPVhc8BztNZ46hZiKVxVZsGJRB285KK7jtt3mKLHnngoJrwZA",
  "key25": "5qzRYT8fKGznaMY7TLVgT5obr3FxNq7sf95iufG7ucdFUUcjHWq5NYz6g7bDaYi1QrW8Dj7weNkMa8HDLrnBsNwX",
  "key26": "5RJmW4TMRrC6fSMzqW91R3Wt28Z9sK6GsUL6cZnr7J7WAuE5TCQC3BbVcTcuoGGTTpWrrnzjVSJfwg8zXPH3rAGY",
  "key27": "4CQQDXhQx1S8Q4ij9roPKaVcpPPpY9uohGFZ7W3ymK7pKBhjdayEPGneWH9jrjSexQx7o2RJWVNBAyMPkRQKbEu7",
  "key28": "4zDwb6bi1pwy5UrtuPPDAY1DvRiQ5knyik3nM6pwLZz8TUN4mmTrN5c5t8BL1dWniATQHEKVhNVMV1Zm6KchZbqx",
  "key29": "4ebWr72QLtXDdjpkxc4QiDu9HEYR4wN1oQonLSzgDbNG8yEyjFmqGyGcwfaGhbSPnn3rRHK4akqzaqwfFzQDLp3X",
  "key30": "3YcuAUn5VA7NdJSP3Q8Hct5akFjr2NgWdwdCz9Y1xoVmxXAkW7sUb3C31FAx6rtDLYub5jbwMRFNmj9QqVUuhnZw",
  "key31": "39fseuUYjMXpcjt9KN7s9dTpvocLrWSsNiLjSTzVhcP1vRGgjzMgrEC6LBm2bHUgffvAzfUgmu5XGy74VzuC2wfR",
  "key32": "2nEYW6McjE4gu6jhFPsFxpvJkh1gZZNYxLhtEZkcVsRA93Nfv8YWu2e3dbkzPhPdse36WNGU9UJ8ooKFPtCr5TCD",
  "key33": "5wqMpXLzvdPBK3ou5XRYE9Tb8Q53MBQuvtMc3r6a9kNFDJ3DeWacNtsstqPbvSodJKMyFsHYdqyzYrXcPWby8hXL",
  "key34": "2htRaLq1RSdZ25NmP3efa35gAZfYyDMbMZ7LPztAUwvGhFfEh39TTcC6KUK8WR74MSJwpUJmWS4HsqS8tZGWFLFy",
  "key35": "4XbS2HVmM78KqP5EnbqCVgBeAWotkBU21ZvRPqaQCq5PUMq9Mikk2ov3pBT5EnMTLV8dQuNovReX1JKpJQB1C2g1",
  "key36": "ggedY5P4ux5RkyYFaMtRKAc6GGVjzkaLeBaPsS9LK8t19ScsYPRHoFZySfqZx6EuKrSkfiM1xVnNAfJqe7Gb5Ne",
  "key37": "5MiQSWQPwsgDfPQBwxEzu6YegDcMDhKGCLWuGZzvfWTYQMrUJyUAA1r1nDhtS4z1APN4tCpaXaEko5zAcyyxNLSh",
  "key38": "461sU5eHKN4imDc9MCQ2ZCctUxTm1abeYTU9CduQuJ5bo7gx8HushtepTbALcTzReBrhcTu2X1iimZuHopRhdLXp",
  "key39": "29t2yk7FKdWoAe18PGgY3eu9TR4TZpJETBVAVdjSH8SVdvsU3hz6HTALqdCGhkcZNY8vSHN7GjbcwK9qHWdvfMAW",
  "key40": "63QxuTm2kKbhPohwrwT97qcAjmcG7FRfagpgvKaLLYNuEhhCuvdYbRPr7PxdQNwD47mp6euy1ppxMPR7DueFdz5q",
  "key41": "H4m2mNH8mJpkvcHh6DFc2piBeRnA6e5TX3T1r8BB45NwaW5fMx3LA4m1W2D39hC6rqovGHa19UKfa6MBrG8bi85",
  "key42": "tLmduhoojtarjQLjb6h7gU99pMzWQoqG7u3M6HdW9zZNHUS4byKBhrav3BMi3viAYRUdtYt4nuyQwxkEkgw4LcT",
  "key43": "5Yd7u6LYu3uxNh1YPBgukvzFAXbJGigCiBpEjyXyGz82Ww1ZLQVUA9yGVFVSJbZaBPpxW8mjF6RstZ8Cz1fuUXeB",
  "key44": "4T8EWVaCHqjVyH1TZDDCiHALHC9mCP5A7ayfGcnHNg69MjTRxnpcVTzFncHoPTmiBDoinymcEwBj4hTbSytKzQf9",
  "key45": "3DKwknLnCZv1YRJuKhk2fedW2bpxBo8eFH1U8Dzxv2oowordRHVnyHKiBGrrnSiRtwrcP2pnxk1Czq2EKoaPFVry"
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
