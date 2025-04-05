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
    "296GPmMcoDR9Pd5fzp41QTS2h2ogDQzsewDNmzU6F7z8RHU42yYqJkD41R1EiqmvBfSyoBSA3G84U4EDPDBSGiKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UgnCYGRY8bLjJH11r13EanbbPEDdZwLHsEWRNRrpVdUKW9sxJqwpbDCDKV27DB8kHbUdJCxydGa75gXNzSBVU89",
  "key1": "485neQNzpGsDTHKy8MspMZCR4yZC9M9wC2BW9MadykievneH1LAVx1kJtxwKjkCTqgq56EzKMiF3SBET4SdMa32R",
  "key2": "56HyLuvcB3e6HxLqoQM9x2u8sQXbVNkYTQ4z6HJuLJZ9y6s3GT4cyoTJymcZFsHsbdkznCfKinFiXRpQh42naNn1",
  "key3": "2LNiuCvTG2w18Dh2jRsvFgLCBVfM8jvq6BVmxhaxYF1xZf7ZRCoqMkvMaxnFMk18eCy75oPVUGKLRJvYdSMtqXem",
  "key4": "4jhjJfeLVgsNs6RykmaH1V1QZn1qTdk2wDbPqEjrt5mVqwQVobWUStVjroN7bRn8BRkYwuH5zT9Qanwvi6oQuyJW",
  "key5": "qCpzFvK3SaWZkzyzMgNJnZ5LjvqwrUEa8iozuPd2zXLfUYGURHFtSSaM1dGkjxeavNRGwQyvnVAriLqyy1EN3pF",
  "key6": "5zxeNoaNWWhSiNxXvFcPfmXyhPS2TjHEYxBTT18WjrWbjoBNn3PZdMsmF4KJL4apzg1LieVc7vLq6V7J5UATes1o",
  "key7": "3J6Nk1crFyQcL5nRqfyuhFH7U8eGH5wxWg611SR4DkMYeFP4apDrbxSvRDJ4qzuZJFVAzgggjmXm56QuwPDbhBXE",
  "key8": "43tYT6n1Jy2axMe9pq6hhgsDrpww5vDt64CbLsDfrfRz9ouHhvwD7JPdKBGH44wj8ZbkQUNpj3DvwzWR4hx2f7bQ",
  "key9": "eCJ4sSuw3AeB2FWgJtNMZk2MMbnp4bspQhQC9SxN1LxTNRa8BvANeR3pUn4KvsGgDCVDY1VXNxvAj7EueTpd65T",
  "key10": "3Hv2cxk5cymLHdg735CTDeAkjattRhShza7kj2RftSm9SJs2fdnhWJFFrvMGCbsatsyW7BFcLbhTkyMoUTsxQ7cz",
  "key11": "2dzizu7jCFMdRTjsyWMCuJifePaYGeve89W7UvMo1B51eNLe7qL5LYn5fobFyPnDTEb313Q7hPFmnmSM1x1KCn5t",
  "key12": "5QEH5xmMsTYDRrtrLM5bF2reNW9rCpcBM4hAL8toV5omqHzW7EEZ71EPPmaHKvnqbhVh8Ct7A3ef5e67SZjaifCn",
  "key13": "5XMhZi7oR5DvPUVrZEvmuYn3RCwLXHsroozsawV1vHyQw9Hbxya638qH7wxYRjKc455gxvZrhmcm1WCXrgdNfPPs",
  "key14": "67KNh4FTJV9WBh8ujqvzeFZoJttWysAQHBRPdcNtBBGTuhYfn8FncnnQWgkx9EgTs9deGxbcgmKZNccUkN5zjMzq",
  "key15": "5Y3nZmMm1NPmwHMwCM72hFetrfT3vmwF3ZxrUmvNsQXCAEcTwuhncCe6Kbqw9FJKBgRBsz4GeoKQ1arGdCcR7xWy",
  "key16": "44q1t5gEsyJMUzvWBViu6orAdkBgMvFJVpZWYUU6i1pMrbnbaD6VatSiz61Gb7w4RJd4K7YKmXRLTEJfUHYWoR9C",
  "key17": "5y7mzrGBb8niyG243GqVUSTh6vtJVpuN8No7WfkS7hVFgCNWCdqaF3ZQibeRzWvm6opCLH8zBc8AbTTUHS7fNBMH",
  "key18": "37YgE8tULEDTw5bPgU9h5FFkkqHwTQtN1xxH93NTkHAKboJqoqfZfoPKUTEacSu3qGPyGEtozqfV6H5r1gkduzVZ",
  "key19": "21AmzHEnSg7HkAsRwaCPHBwvvj5oQyRu2SJpMRhaR9r9pbU6AmjxXfWoYMa5h6z98C2PRnbfZpqfMSQgu12VTkGd",
  "key20": "2bBu3758bCwyMn4iggcD2SYe7PteW9FtKZ7RbuB1KpevvipryGFAxnZGFNkedKUtFoYaaziTTfCEVfLFsMQpqgCL",
  "key21": "BxnyH32E73no9RtwEA5cD3DLayZ76jsNpzJtJBMa2hj1W7obxnnhQttpywUbvccJ7hCLWJQtGLm6mZQXgEKL1oQ",
  "key22": "2tYjzuM28bTzRvfrv28d5Jt71znGBfZPcF2gDGmgcnoMPJ4VqMDiup5eh9iH9wYRoTRScQmzwJSTpSDmY9yzBw5N",
  "key23": "WrbRhrSG3aTvbaejLK9PH2CdYqQf54nvP6SyjecT3pesxC9ZavQLvrGkxNm3h9DPMmMVkfw8MLn676aUqetfdVM",
  "key24": "zdLLqnze7mhtzfuoC1bnqgb2TFrGX9wwB5nix3jDUGEbxDoasyr25xHEfmGRtcv53tkZapWf2j7jxxhfqtXqeJn",
  "key25": "4n5V2WskZNAnAVEYUou59r2kHf4h9SYXfX7ZuWy8w2tWxTHjuLyBw3Ar7qwmgrpunR219uvrCLQDzbcwxqij1adE",
  "key26": "4H6RN7e8ghMBcZXVPVwdhWZ9nbA9LWJRmqrTVQBqQT4HQzhJEQkG8e59o8hpaa7JgLHRvKMUFnPb29Jb9zVU2KCC",
  "key27": "3SxXxg6x4v33GRKHgAk7pkmRcVPGzFGwn478PQN4k86k2V2thhveHXjVU1n4DBVsaEyHcGMgnHjUdZByaZpbEKNg",
  "key28": "3rjRr8xX5g12Ny2vbZu6wD9NZuJ8iQtAcFi5wPmEsaTYDdxYMU5fumFSSGwZaUszN1kTGckAcD5idK8UtFLMnj1W",
  "key29": "39QLih9rmvCQkBnq1NBWhJLev8f2fR9zSkS8v45FYypJVCcx2DjyU4xPCtQAFRP8N2DPbzcDddeJ8n1xVH9pwPeY",
  "key30": "2FmsS71HUsvUYYCgTVQyrm2dksQGE7pGBjGHXNgthPxejts2Dhs4sviR8k4aefsZiSPeCLBNtu1ApvVBtDc6kVkf",
  "key31": "377HaGG5JisuRcbD7yKsgaYiTgJWpog1NWN71M91Jdv6zFjHSYz67JFQzSS2n7qn18tRciWKpZ47jzkXjXqpZfNx",
  "key32": "gToTLoDzqgiGKya1429dsiwmVoaABzFxK96E6CnE9CvarhHvYqncLxJrCgb5mzkYc5bnJRjS6pyWBFmBnHArcEq",
  "key33": "5cYNYLYziXfaEdNA1VLfetvzDJLTeRm1FnS1HNxTYDRBUQ4ztJBTmHL7VGNyYP6wg7nnEa2kbZ8aA94AUgJvrwi9",
  "key34": "4jU23YUQVYi5W5puXduWct9jR12WEzmEVjwG9QHXE64wzd8UR2DSPsVSGJCZ6YaHCPLQh4WB2zg7FVYUqTVx1SjF",
  "key35": "2ui1tXw1VkJU4v8SA7cNo1qN4cc4u8J3pfaRduktekt1yb1UJMdrjFV6RHtjJ78Q8V8WF6hjeSfU1R2UM5d8cfXh",
  "key36": "2tQdJZawLCjm4sHj53NwkLY83RX6BJkDqHezxTi269Mtvu6rXTyQi2NXe6f9Xh6QXrynTRsQKUL3rNRAN7RJekXp",
  "key37": "5emC8BkMYvhCdtUPnB5EKzcg1GBnddG4KdpeTMqiQgLx7R1TSP2bvu6XVsT8VznnMG6RV69S2GMLsYM94Xd8cHEF",
  "key38": "4u1ke9ADT1i1mgykEdoCNaAcqGWqEHf9hpbaHemtN2wAaaPrCPKy2pVr8sXSaP85omfPWWEUabq7JFgs5a8eaA3f",
  "key39": "2twcwzMaLTj7H4k4huLrMPywtN5wvbRKcD4eXoSi29nhzTXTVy6M7gL6RB4A3Phjx1Pf64hxKC5p9YFEzpLnqZQq",
  "key40": "AYnmbXLn1KUpXShpKfbD3BBeSfMRTWe3Fv8PUSRmTyE8ApoE227xRpX1A71PrP5HUrBSm7vg3jkE7X5MxDvohi2",
  "key41": "563kmnPZbQys7vHrdHBcLKK5sNLmRa2PtTo1FiRo3VNaYMEfQW71r1iMQ9824csC5Jd7FvZ9i8q5rxKhL93y1jga",
  "key42": "4HgD2ErgmLNrTF1Z4Fa1xHzAJUCFVApFb5x2qJuSjhn5yn3pio7m3CANQx7ZS9ugeMuh1VSQ6m7Xf98RZ4S9CcCT",
  "key43": "4BGAZZe4Pr88gz9iHdeQFKUabBEcLfe84GjPfJS6rjJz4WYqxEyZFutyWMMSheivj2j4DSAsLmV7sRy1MAC5igQW",
  "key44": "3NRZbrM2q2XjhG4Ab5GwevqLjUgvkhTEqVswMDo5dR3LeDGneA3KwQURsT2rcF9t7cjSYthQBZSji1EeMdd5XKxF",
  "key45": "cK74bMw1LEB7T4wjHTZg8Wsrmh9N4RjWhKV1PfP6xyHog3KsZ3kPock7xnQtz6TaUKShzVMxhJCCgyZDqBzPGvf",
  "key46": "74WQqnhmmdAEeD5rmVT19K4o9ivJNzpWxzfbq9yi7rjWkQ3P7Sz3UYgeJ5n1ohCoiZ4yi9VzuteH3PDk9PUWSWM",
  "key47": "4Ev97o2DKMLGFFGz9NAzKGaBstv42qrHS5FvhMaNaVDAXwcsz4BkP9KghyDAPuXsir7n4kczjAvychj9cD5XJe4R"
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
