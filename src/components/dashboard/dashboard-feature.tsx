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
    "3AzeqUyvRqB7XHq8gdX5VjBUAJVW9h8MYsiFnvSwsiY5nUpuTtX5eRW93AXB499ETQTQXeS6AhFJFugT3NuWFUBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qKWWkfqKEspGVpgajV8Y2RhfvuTRG54TmmpvAryyr5Zf4jSvPYt8EDLxfGvqXFSbKN6HGXxL5aEpvnmbaDrVpK7",
  "key1": "YrA9pqsNQQJwR4gDYr9qEoEqhFv6yMjPRmgZzekpCdLirUsbwyVBTTSf4ddchPoLRigufkCnZwv7yftf53U6Hn3",
  "key2": "hTDKhC4tdQs3UKJFEDCF3r8nyKErzyKSW1A8Bt636qwuzGrJTACEn83XoQ3YRK7znpmLJnH1koAzg6xik358qsz",
  "key3": "5mSdVisn6TyLb3cVPnF4NcSpX9H3S8zcDrdcsLrhiM7cDq9UHP3i38cMLnwFJBbgCmmmjiFeVnfoCvDtkqcpvVx6",
  "key4": "462AxrFhiT5FrnRbAnq4G8gAeoxCFJK8ihKcL4guunxBxKz51FuxqojPsDEerVpgQKx3cDvWU9agjd7sZrGXc8kv",
  "key5": "kny9nbtgCYa85X5mS6GdJbFSzVjYdFfPiNvpVAya1EawerrVg7X9txKhixeHn7djHbBdyjhc9YyTYsaDcsa4Cge",
  "key6": "KCZDGhAXMKtQz58EZ2m12Riz9XzBzbC42zERcB5ULhm84rTffArgKNk4EkDpuaU5d6y9E2D5jENPnT2J7rNcuf3",
  "key7": "5MNMjqugUMJsYfL35JSctGNAQSpij6YDiL6xgKs3F7zUdi6DjSA6kePJ5bH55JjDUXpG7QP9tSBvX2RVfDs2XUBv",
  "key8": "3Ey9CxvGvn4cZFSCRSaPHQJBxgQqEhLLKogYCmH8hwYapQHDm7FgMkRGzYdL4SL7hPQJS9jiJsp2rzd8HuJLBuh3",
  "key9": "3w43HBUy5q7t85rbrSEj4EuqxK8MBBy61mEmqfEUVa5bWmhyQzWbfQfwyvvL4oCsbqmHz6XMitwBMrKFJti5wnYx",
  "key10": "5JqUWnLKMKuusMVVqSwAGDQNPuZgAgZwKVDWXEv8vJi7kokkVB1zBCPnUVXVydbcck5V9ub2eN9ttzy7Kqb3AQqo",
  "key11": "Fbs3MgDavc6jUVn7ii2EvCbkFW2hRihsmhokUfozvPr3usayRY9LWuWMEyvu7knb8Zpz29QinyA59WdWsg5mTL4",
  "key12": "e8FuTokiStQPAsgfduAUAStu748TYnpYd5cTUCmgAKye7yf6Yz3QDYdx9zEbiJRuGXGhVnxJDJPexcLUH91LnWu",
  "key13": "5sy94VnEaxDiQPSqkaXBtxegCiiT4bUQwJ41GeGYS5m8bJLhbFXivZJGkyxzskc9sbFAas57Kd8e4mBLaRvbVLBi",
  "key14": "2zdgDJGGbPKYYLc6EQaCxvfvxBbZdL5Np3AobVbkegVm4qXr6oXYn7zCLUpn8gqa2hat7q8xXx6PakvJ6gJ99oXu",
  "key15": "2suEhcHxqgyEUDVWCAM8f1eAaYeWbadhgjdsuKkT3cRri4g2RRWGUAj5415JGHwRbse7AV7mD4FSY9GsLcvDNbnP",
  "key16": "UxJBo3wDw9eKw4wVvE6nw8uKjUnXFPkDGPDehGgScEo7gRxwuiEsJx58tTUGWjHHX63f3VHG3C3vWAY6XD4c87H",
  "key17": "4286k8oYaS7GYHAuoFWTzzqZhERqLmagBEK6onqEFCoVRnwQf9tXPFnZ6JsRgJzaJyHjtjaxy2fRzL2yVS5mmA2M",
  "key18": "QjejPfdTKZMaKTeUTjiAD745SZuTNo6DZE7YvSoJgVgocmaBJuxGNfkcDrpEnJowh4BAHAByxVPAi7tHGdsvSY1",
  "key19": "328EVCpN3zvwT9hN81euRxv8SVX9hyE7yf7CLCZAprKWoRRwJC2odRuoXowMUuQWdmz15FFooJ4vMjCMRr8LN2Sc",
  "key20": "4JYp6ebjRtctqzvBUK9iNwc8PFV5vf6E9fqXVHgb2aSWKdeAy5V9iGNoZoNce9FMpmAWt6qqDh4MAZNyJZ23ok7C",
  "key21": "kkeTZzkdeg1SXJqiPBh1u1UpW3URW3UFc71XygUE91fgZmYASBMBz1i2jP3nXkkrmoDyvU24AANEuU32dGaNiug",
  "key22": "644oCmsYFwMcyKQyz9j3B7JWC9aPmVYZqHdWMeEtf4cpzyswqrw3J53FF2s5vNvxK5havyDdN2ARYA1Yv3FtXLv7",
  "key23": "3tr1RuVHh49pCB4EyMyWuxcUC9CiJATnFCtcnjgBTH7rKgkFYGpXJrgwPHFEE1b9Uvpf6r7iARWGZLmxve7J9Hj8",
  "key24": "5xzuMfUgoCnjxcMc1tQrvMJ53wpSTFga3eQQjkNWxeyBEAi3y1WFPemVeFQD63kwPj2CmewiWyzJc1tNxgbShe2J",
  "key25": "5rfbm5oCUohMo5Z6CRx5N6WnGbdNZeoKPBhnqb1kqW4ZdEmyQnJtXp6MQ232QZupssBPifNvW6uC8uTXr1kFzhrM",
  "key26": "c1jG5uyEbp9ky2AmTJ2MoYmDAWSmbp18bVWHfkiwWNi8hb2bye7K9pQSPEMRoQFgU6TdkwRR88FNgAGbT82j1WW",
  "key27": "5VgCbzePzs7MnQVrmDGZGnymQCHiznD7QefXBCPv3mrGb6cD72zTs6YmBEih3BPCPtF78iBuW5mVbmKQUYRMzw8u",
  "key28": "4iQJpspBhFc7gezVNknsFmS3vCJe2eTPFFMCgskwHshNAq1RH29WeV5Up3uFEpgR8PrLWmdnB3mpEjupPU2Wok8d",
  "key29": "5MNYd46YXtaJahuf8ZTa6jVZXbpaTZeTKZaM7zCWcWaMVGkY5rrWBRsKvPLyJNT1wT9rbSG7oA4Y7FefJjykjLhn",
  "key30": "uhAEGwqUFaPYwRARuZZmirgZdxhGFRRpUSpCEiBeayv4gspPFpJmkHVP8XawTZ2SZvDYia27vuM7E66E3tzDS8r",
  "key31": "3mYLaUPio6h2WHv4WX3V51FZQqmuAAQQKKupnjuY4234WUGMcjsLmhjXGQkPWJ4idaLwPrWQyJ24QR1y9H62cfAg",
  "key32": "Pix5r4fN3oZDMShxTNj14jrnXhJE99P5V6PtrmwvvCTDGcheiFg76aUjTN7JuJNdWfCyJQCCjmGxaHv58jvqQW7",
  "key33": "3ck8g5sJ2a64rL4udZ55GbnHEAbfDiLcbRFFynu1tiRq6nttcphLbDZaXP8w96mECvskVkrcqiAVdmvhMj8rm8Gp",
  "key34": "2mH5g9oysPQLgi2ndqgEE5YWuoW1KqukzKNAHnjBkvK1LFj6qwwonmBaVYVwVf9dLNKvyWD5N8CqnjrKktBAgKUA",
  "key35": "4eRVKmZivaMQiGqJvCK2KkPMLn7e8woQ1dytxkNJFBaqiNxNZiSVi7xyV2VZViGVuzF8D8Fo8NJXRRkDVAR8JUmz",
  "key36": "smN1Cc6D7uYtd7KWMr1f2V7CJyf6ndKPksechRyErxXqyqxNveC4A4YxhLYp16BpvqYu877LtvztJxDZD7QPbyp",
  "key37": "3Kab6co3wzfVwBHtjgWgfqkB4KrTAJY1xfC7oa1vYbWE3Rn3V8dtjB783LGrM4XR4brghRKdvESB3FAbUduX7Arp",
  "key38": "4BDwbhj2Agg7nW1wrSi2UDyJEC4F7aWg3x5uP7bt8kof5ovJoMFuoofpZqUHc1Gue5LTeoJvDn9zVmPudgawG6Fo",
  "key39": "4E39TSkhxHqPqDPMrnAhhuSC4bDnjGGdCEJD1wrxMxu6Fmmkh4JhRaLESMr3uiwkLC5AyE3yUZoh9BL7L9dsb3JC",
  "key40": "62ufpnXUwtWZEsp5A9ibd55hNszQ1wqWRk58Rcg8xSQQ2yoqVANfu1fCc8v5iNm9uhNVbmMqyp2iEGpWrCEAtcXS",
  "key41": "3qrVLfUeqJNshauF3VxfgVwEaPpbNRSi4XzdPA2FpBZ9SVahLakbbSA7g2L4EYd2zDMy9CcaT8pPAvsrBVF26qWf",
  "key42": "rRxed7hHuuLLku8z7gGBepvkxUg9c6MSuxu3L2SWFSXtFcbgbRoUqPtsoUij3sFH1eBLxQyicsdSPTBujkk3zJF",
  "key43": "cG1228PMfEw2tw1yFsFiVo4PnVmFqh2TXx5b77YUjcP9Yb5htVRmZA7a4Pcdi3rfTuf7Br8WbgKJnKEPGZXNbez",
  "key44": "5NhrfWsF6B7R4AqD3qF71uxfp5gWrPoXgbAb111Ucd97ARq5rGGEbi2F3KzmNdEqmxDCsJweGxgCAsdm1zb5EiLV",
  "key45": "2oA6BYixQiPxjqoebaRruSyDrDNyx3Pkgg9t7JPCVGaP8Zqkar8hMinYzxNBDgo7uDxReXvcKRW3HYMLztYrVbcz",
  "key46": "vEAFjLs3DKbrDeXsZNCUAarbbaJZVckx6yDxzgPPc7EdCi23brHAnWpEC2fLi4ERiZHRAurx59PF9MZML8SdMCV",
  "key47": "4o3kYH1RcLPqZ1uonqEhPtMEbWo6pxnE39piLq7i7PsgEbdrBYvjdmZbPauRGzYML6pL6pTc7tUgeAfrsvT6DdUM",
  "key48": "4Qjp4tZpXJRWbG98fQjkXrX572wSknAvegMn6NUMKWYHTqrR7oLRUnfEUY71Yy7DMEutsM3YAZRedgwgYXfn4Jj9"
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
