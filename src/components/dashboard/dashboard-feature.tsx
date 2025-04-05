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
    "qMQDnPb2J7PwddYWtrMMU8zYKLQb8J5qGMM3kGynTjyLxH3xy7WPubQ5yymiwoQgcE59KhDhPihRLKhQQmCRVVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5phrqJZFUVTU7jYxHkkpJR8zgNk5jp6emvomwvYx16DcdNWm1D9jT1AiwTTynyCNduKJYKtra7W6aRiwqCM1KAZG",
  "key1": "43ZSoNR3fzgX3Kjr6m9KJwdXYZMVhQf97QFqwMTQJU3N7GKz887vp5cQbtHaougCGvpXr1cZRWaTNY9yY7GuU1W4",
  "key2": "359Ui9AhckcqF2rq5yLo5UNZETCHqfTBM43DqLaVxTrmwhu1rEwP7GSs31qLhU1hKP3vS6g93477qDCLnKftS7T2",
  "key3": "4jfRa6qNVBWDAfurtcgnMX1GHsoSuLNGDSwxhtkJsvrFiVsd9JVksp8J3a2eLvAfH8L3N3ZUZsxHdcRtv9DmT2vH",
  "key4": "4ww6Stmd2Ae3krLkHctBz3fdRDQLQrrnJ4omdXJqYMNhLMKLAp5ftuFCfajHfCpGs2GPxYnMwTToEbjSzKSSCKoJ",
  "key5": "5YqcjgTfSDZpQBk8ApprZqN7bEJYDLjHBfX1BM9kKrF9BY1MYZuyBCyVgGUonQgdoEvTfF2bUaoJ1qgw2d6Gc3k8",
  "key6": "5f2PFwCtYuy5Ad7AKZ2CCKrZ7R7Bej9KdyPwQ9UwJYMoxqMzWDw3Dzt5eYBkmMS2FVKWXGA3FgwwxRq3pu3eZVm5",
  "key7": "5sU89ReFDoKMhrgSkJjKBq8L5FAVX7hEwSgA7RHJypaWRCcNBCGHuN4gECFEWeNUAGGuU9ribeMHR1tqiw75d5v2",
  "key8": "632twzK7dS36FU1r81aKzAfGVyCqWxZHYwgEfpuep7mvQAUTNEBdgKUEgqXFPdxbjhdEPV3pzAbi9C9neAA6mfAS",
  "key9": "5vXq4gtDNT9Gjd63yJoK5u6iQNG28ipkTEb2NUJEb72zVij5GV4AGT2LS1jiAzD9e4VHxeQXWAg5grGq3W512NTj",
  "key10": "3zYt1dm7XnzK3jfZQeJETD29mbc2UNRdmtFxa8hQmcns9uWFXmquNvYsCbmWjpcZohxkwoYfa9feduF9kUSr4kMz",
  "key11": "HAsD6svdF9F6mk4PXV7gULXizfGcPNZa9YtkaYCSPBwheG98thryuHH4aVthiRht4LLA1qGphz5Jw9iztmexzox",
  "key12": "43URnJtqTbFAGnsDkCnLiVAidGhXZ55L6CmdjzuE66V5FppgnoQzB6SFHu4njBpfQSvhJQDZtNcQfCKYR4LsoaUL",
  "key13": "5sQM8G2BVK8DTTRW6iz2P5A2Adh8eFx4sENR6nddFrkdkNNDMMe9jtPdn1bu6GpTwiD6eqgKVsmhHdPc4qZezzgf",
  "key14": "5owbgcpJvghaM9esCLFj8NYG2wwZCEMeuBhAcL5fGme9NdTspQ9iAJq1U38ThHuopNdJezv7oJ7oEC2tX5gYh6V9",
  "key15": "4kK5Tb5XdVYRY6Yi8Yzr7uBofu81oVSkkZXWU4ya6xjvqeEMtgB7zGoZNAkzhiTaPrWgzJHrL9gFwEYBDqZBoekg",
  "key16": "5k9tqPUQrW388sHiGxJom6YpqJ1aypAtUow1MhojrAHJADvf2hxcetsEeFKoC7qZcLEjCLPWDegFeqQC5LCKp7zN",
  "key17": "vbQTSzdfQr5enfapmg7hR26wwEG5gxiDarPybAQahxink14xu6XSbfRTmYqNRARcz1wNQSJqrDGzqGpqUWWZ1Kk",
  "key18": "5ihUPALCkh6Txd1TtWFLQfRA8FoRGnm48n2meGHjY4eo36oSA3LvtwcVg95qdfWidzVPUBtEnBPvt3hMWVyuLhsV",
  "key19": "5rioUNWnrayyTjiwWvCJ2Xu8chFSi7Vo2HTodfjkwrDfdTGbwvDZo63Djh8DKGwnpEJiPdBzd7awZCxbQnw1kjXK",
  "key20": "5g66mCS1ar8SWaWDNUJNR56rvdT173k7u8gMTspr1EGa2NTVAbs4pre8dzmqHriJ6wxYvB1HM2yGQSr2gKDrMQDs",
  "key21": "3JGQdz97zj15vjzjuiyUuJwhwJFzNUgNn2qaRHL5Hgz2cHbbuB1Pz4LTHNdPDFLHB4YZqHppr1s9WUKc7YUaBJZq",
  "key22": "5M4asHyVygoqB4c9H9oeGwGYPnDEPdpLtaCTvx3rkn5SsTNiVy1ycaixP4qtScav8kHgNqxVq1QZngMfKhuhngA9",
  "key23": "4WDoxh7E4bXQWNZDdRi1mw1b4r5Kp1XtZKgZzyav4wrXDMMh87aVP371T3XMWxuEpTQf8WHHuty3fD4p5tjaYDUi",
  "key24": "2pjbeBS8oWFyy6cNHsX2uJUR7RcYbDW7GtbHyjWaDL5ZgxgqzzeBv6CmcN7rKCTodDcAePCWBF3DwaDiqF3hyzKy",
  "key25": "46WoHX9thieSds3ZP4YTrWLeeEEV1PFuzwKuuEcKNrLo1cJPoGbKhdiop2de2b76BvG2matHqXfkFokoyDp2yeja",
  "key26": "4xNhgwNT9KEU97VVzEDXsCzMAzoa4JUUVpSNS33qMpqk1ZJQpCGF97JAt8uxrJzsAudFRRmWUkKrA7ZEUD1Gymbo",
  "key27": "PoiHQGdnvLfMdHUMCpGjAUboYPW5T6RSdmcYvTk8DVFz9my9i88S2t34vQ7QfyagKbZdfBMV9pV2Gd6KyNVJbus",
  "key28": "ba2WWKa9fUzoMVNFqTqatck3rfG9bucNFQhiBPr1ZYSPD5thmtStELiut2q9vhYt3iaCieYrSZhay7XbH8np5v4",
  "key29": "65nbFeN4hnGe75T1U11XPcoRtk1Bx3y9o6s8G9YC4DbYz54F125YRkkSmHjSbGKuEjwraCyXJgG3cjTkgngsVAxx",
  "key30": "4UE23KFFAqdRxDCfHBsoEnRBnndqzUR914G5Vf5SkqmEDCdHr6wNKn3ERLN6yENy7cW8LEP1LH6wzervUyQUquYY",
  "key31": "21TLN5QP57A2MuQbs5j15ErU2h3EA7mtHtGGXr95dzrQ28quRbDsyT3FwHBUUAmDcY1pqMwmvti3BJShHBhgn9B7",
  "key32": "5SKtiVkwAreEwe8WRPUnWtpKBr4WePUfPYvcJGRbyELPcM41n5nwtoRfLP865S4YL23mqjUVWMd8jpuBcXhfUbQS",
  "key33": "4rjmwmsjygN289G9Cjnigx1vn7zSzPLTHGKKmad2sSi1SY2qbcSyh1zcFsqVETwvz4jAF68x5A7FdtWouGe3wUsw",
  "key34": "5DfUYbgwbERxRTspoCYcADt1ZtWZ54srGbcvPVi6mg4Jbt55wb7KGDVXRABzTkXyUieeGJZnSM9iAG7gDJL3ryN8",
  "key35": "2aWURHkB4PWf4weqwu6Qjzw7vboz55EL6TAft19phsv8bPam3nNqrVnJNFTWon7ATgTmbwMPSo5dhWfiqp3LvUYk",
  "key36": "49m6sBVdXZYYnzLbB8YKqZvyKZ63jpA81KagW1QVPoBBjs4taHCRDPuZfcEnWqKfKRrHCc66SpcsJTfD1dwdL2Pr",
  "key37": "5i9QKe1BAQmByyKAM8UFJPVbhc4uUW682XwnUN5a111fm4mpkggQpLcSM5VdNBMjN2Xr2nvTtrGYQNS4eUpAZAi5",
  "key38": "3HQpftfDhPjyVxQdPYeNu8mfk7xH4XMmuRXMdvg7nTyjF5YNf7rGcEFH3wJM53MhiWvF3TiX3CAPmzSVZ9ZoULTj",
  "key39": "4xULUgHEz6evDTJSj1qMXhm7uRjqQH7PTdModm2gwhmSAXf7UxmfWMUxd2bPTmJ3v8D5WpVyT1CFEUwedHMEpi7K",
  "key40": "3VyS9MVEQ46S97JvZayc9VCxiWjgxuv1GYYWYZ4Pgx63CsmBwSun1mMphJRocM2PZiDAxFgYAoKRquSAEpk7dHMs",
  "key41": "3r7Hc6TEeMjYkrhptB6yJQECLn8vU9TdraRPZW4iZV7fSkdFjPdpA9Pf6EfeWLLN3azhTncPdaJUfzgq3qAqYUc5",
  "key42": "2f5Fv6pWxHdzdFYDgM2yeCu9RS7tDMKabNPDkWBXs4kUGxMbSEX3mwFToJbVKANZX9vYqetj9VX6A1ATZ73Ph5Xe",
  "key43": "4mT1f6gwREYciZgEjG8V6vuDq9VKDFqKx9chzfWh3CWNh3LsTpccMK2nwg3YaAeKY3RZ4bktejkRaeWfGSPFMvHC",
  "key44": "43gpUs7QP6iy5azwEjKnG2twgeLDoGvvRAsoZ4JVcna2C1txuc3Pt28BZLsttLHx9TP95KbxW6T1Ad1WuCRNHz4z",
  "key45": "jkcijWQFkxGaupEKotAahnbaVd97Twg9NtmqBz1EKiZEGXs6WAqtDjBqT7LzTNkYw6aZ9VjZXJeoYdymmC2YFY3",
  "key46": "fq459Jy7sCg771qxv9fa1X2jXaeLeeEFUkYrWtEuuyWDrZoZqF24jMNfSdx1QuEReEhbSvhRnnSjnoSX2v4kHU1",
  "key47": "5Rk5AUQbnWXeaBdUxZoWzRthRMK2MoNHvKBxU4XSKw4PCADsWbPdYS8Nk5rfGABTb3eDhdD6M3zaSpDPiAtAWxh6",
  "key48": "4WeYjAADVGaERNAtLqGRwZV2oCYXRuHE7FaWyeczFYvAv5RMNfyz4URmb4JHcfPRaZ4RsyNyk4hS19dFi7Kiv8e9",
  "key49": "5kAKdoQ5xZL3ke2hGCZy6RytveBJktDxjrjiMeCx7E8ttZR4Hcv6BkXFhFdoHPbwowZKczuC3FBNoN4DuBYJe6q"
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
