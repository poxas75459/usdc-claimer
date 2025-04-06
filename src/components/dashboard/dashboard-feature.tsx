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
    "4oehYJE2E9Shomn3fJv9YM14xQ2pWTZx6etXQinMGR9a6p8R9bdYVi6jLvRaN5er9AaZAV7cWS8e9v3owgYJQZSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPMNHRD2mjbGZSq5dcHWNhjxuRBpkVbppXuzvR32XbEJDpcDsXu2JjKuFipGiBD3togATj2xexCJiKjnggZnqfD",
  "key1": "3Uc3o8jjZ8Nt6KS571PX2q5sd5Vv1oagxmebhFMdnaQZQ99BUSC2dKHTh2JTN7irCYQw2z6HJD3NpJ3ubJycDt7j",
  "key2": "2f1Ekv9rKhUxTWTihTZeFuvg5taMXB5UvCj16DzpdT4Xcd7K61JD9rwCn49JwHuMJ4DG1MNmNo9frLhvWJnK5tN4",
  "key3": "4dNHtaUVYupYZhQYxequZK3RJCU1uRJYzhmQzaSkUxs6joxgdaYPawQGebo8iyUFPSRkwHqgr9QC2B6dhBRfLbzZ",
  "key4": "3HwX1EC8AiwwDXwDjGZN9bNeiKuHsFQcvz4Y65wGUySY6LCQmhBqsvX7HZiNma5TbnkCBeqtpPVSKmPJoQKCyMuZ",
  "key5": "39jNhpP18GFY96cp7NKyqkpf3FA12Ga4xi33ft4DxiuDFEB1wuV34Jii6houQ9cx73To1PcPrcZeAnTz49K6d4f",
  "key6": "MqMcuf4EvttBc9SQ2BkapRPq5o1r6kkBq5dM1fvTBbZgrVQL2igRVdP931Qpp7b2ncHFkZxwfkwKrWuVey2Csn1",
  "key7": "3fVfC2CsULZsEQFR2fjW8e8krK4HnybXjUbWzD361civHP6Uf9wvXvF1RzCJvkPdCVMUHS2ztdAEeiddDr6jehq1",
  "key8": "4Cc9Q4Jy52eNTtm6F5N1zFwsGrMAXYTYgR8M1QvhrcGSVebb5yNWmwNQj6Xn53VBkTBAsQXUHgoKLkzXZPTfmahp",
  "key9": "5Sq54m7CFH5hgFqqwXTGMZpbEw716okC5pfmCwwvLsot6pqfBqamPLBjqLtg4KusLGHz37suQCwxKipwqAJiwT5m",
  "key10": "4gMykPTBqmmzkiqFh6wrNzfBqPX2ySohPHY5fX7F9vYsNv2hqDQGuWSUaakGEQAo6xrdPWZFSppyK88ZbxJjMWm4",
  "key11": "VQF99UHFgXEbbMdcoyGf2vxDLz9YG1pX99WjJ9WGzk2ivE2QhNNi9QFLQHZhKgQNNzX1MD52PAHKizkL7HBwwkd",
  "key12": "2pc5Ay2uuHkhexz2upXmvS9XxihohDGKcYMWezHdZu1QZChZGUtH86vvLxb41rGwvZXg5kGQpDWK1tQWDXah3R7j",
  "key13": "3doiEmdYgHoiLwjzv3gZXLLRw8iPgQzLWn8HcrQ9UxNzHwtTJaT8k18Prg3ZE8yZVth7aCBoreMqMm4Vw4BKDd8k",
  "key14": "39bpKiJZXvWSKkae14ktmxu69p7imgv1kuLfBpmL9SRuog124WUbJtuwKZ3BThdkjHomVroeNy41VaZzYFkwdKr",
  "key15": "62V3LwNzLaJRLWbade1KzEQNACmtuQhcCzQB7KrJhvUPi6DQXay6pGBv4iszQW6MCkWmL533nYVYETH33Ni2nnyy",
  "key16": "57agiFFBtEvCs8cJPkt8PHQY5KrTMpFB9G9pouctKbc3i3WaemuUGzdLv5D3JA7yg4sQxsTffiywFs4jBp5VmvnK",
  "key17": "2zf7NTRbt4Q61crGQ9N4xUB3naeMYXnYxFP1G9PFYRgRjtB2zZupJfuizSkLKwoiyirHc4Ef83VVufYVSJU1tkmD",
  "key18": "2KxvtjiwWAhahiktBTTHvhRXXUC8rYzia3GHfCfaF4KfTUDE9Dxa2atM9onm95faVrvQvMXfKKfjaRG3GzbCHUAU",
  "key19": "57xc1NkSczvnjS91WjvRzaFCyqZa6Wsnm9QiAFLteKUzdE7Mmy43Zqu2YMkoyWm6d5WGw5M6VE88YYyxaggQwzXf",
  "key20": "57JsCFLPoFQSTP21Wa9iuX9deKdoqdX9NBChUSShezc6xU8P9yJ8Xpq8SxhH6LCe3BWRFrBDHHJH4j2tmopQ2qKc",
  "key21": "5EjTQyviy9LRRDmahv7kycS7o9TzifrCgmg7iM6n25t3s7Y649QYwK3Y1negdgPrDHZDrKt1dPMCwKZY1n9jwvqT",
  "key22": "4vm8F854LYus2789v4B3xii4U8qYRopnBxs2pwLPhRe1msWniAFhZx8b1v7iBcvaPHFrgTm8AUPn6FeHUbFFgpfK",
  "key23": "X1roiZAa3mYaGsR4cncwZz8Nq1HTZP4QpXz5Y7xkgdgsAoDGwEXkz4PxTr6YJwixfwXbz7LoUV1CiyFSTxEBGdP",
  "key24": "Ltsrmm8yY6DHoFAV8KVHpcDHyjVpdEoLLmeyfAByXXNBfqznL8mRLrPStfRDLj1c6vGrfTQkuLC37bbVuu4Nt8s",
  "key25": "5UYDYD2jh9REzRABoeRWeUyoooHY9YURUPFPMqkFjGQzQCnwRZAqKShEWR1PJqswokkNr1vtcm11GEvueGtYz8fJ",
  "key26": "2iHEmyMFpHyHbuPyDLxEkhFa6RHpikswNr2ighspuKcxq52eM9ruqmyiRnT8NyzLU88ucvjgnCH7tFznot6hgSqs",
  "key27": "3j6rCF7GYp9xU2B8zXx4UTjm3V1wjLXnWu13w7YSTQCywSU4YbbanczcKRmEMdPARfQ4qcNY4DFeSXiMZowmWVsR",
  "key28": "5APC2FpQQfxgFxXYmEkdZq9T6wb9Sk1eMLhFihsC7fk3EHNpqysK4LmE5tz1ub6n5drDZ7qkwUKkqbUxvjahFsG",
  "key29": "4kT8My9w8GjxtErRb6Yfm9dgLUJSR8Cph2ytMzVQoSDSp1o2MdotAeQ88vvLZDkHN1uwv7PWynD9kCXMSsDcZz95",
  "key30": "2pshUizRMzp8wNEV3UcQyuuUcSqE7GpNbmJNm5qYrMto8sC19RF7vNKwS5P1gH3fdffou3q11RajQPkJPYf7e1HH",
  "key31": "4y6GLbroWdqjPxyqo5F1z9nGJiesj435hnfzbt35MGLuuzH3vsE6gnUJvSYnJFkYuGCygDbB6yh8s4rkxDuFMZZn",
  "key32": "Xjwn9uGCMoR2YYFMdgJsx44AHiUbGHNfeHhGxHS7vbboo3XuKHr5DRZjUaQ64LvgeYcWTE3uWbCE7qQR4Fipzkr",
  "key33": "5Rdq1Ys2tgcb9tqGWqFSco9E79RuSAghUuA4SzrT2JzBSYvzTNFa3mNZJLQrWbzQYDvyGNbS1MosuU7RWunbUgB9",
  "key34": "5hEb1QjiCxswUCut77nbo6VfZqSkaxrhRmsczbA37zphDRtrTSEeWKN7on8YxtwNyyaktkRu7smox7Nk2TW67fq3",
  "key35": "52pcCbANLsWzzSZ8KDFRWDqnzC1taryhEaCKxt8qrts7t3rUcHAiGqD4pzjx8LjyrdJegHJhR1S2LK1Bfy4sFkQv",
  "key36": "zUkvuWesEUXzMTsYq13um8XM4WBj5yijo6ViYUC1YDCbDd8ASCxjD3BDftqkCnnSgRsvnVj9HCf8kfLzhNoz7SG",
  "key37": "4Uswy2xq8qPo5DA8LBAL6mquyDqdhXG1NZaTnQMVxhf6pTMKrvANSt1iMc2mRHzzBuf1NE9mw9x1N7tygiqyEGyV",
  "key38": "5RUSwv5S4HeQhtBuWtoCjLUqcQpizmGhTcnCjo2UFWWhPtTLg9EwRd6K6CuCnMW5GmbJCoroNtenriJ2f8yraB4m",
  "key39": "2hFa6L9h8CDg2NBM1PgtEE8Dgyr4wRxaSdhMFYkHiKuE674KZdvzW2YNV5AsXbCJ6gJxrjxmTK9h6rSyofmQDFUM",
  "key40": "F5uTmXbqdgLcbYr3vrV2pbYJeVuv8RdGA71kvzsR62zV8dxSmMjmRbPwgSweFsCPbLPEmz2J3t32kvQZJzH1GFa",
  "key41": "TjJtth9PL3in2VRGFaeVAko3uMaLs2a5aB79XUSYftiqUMR82BvxWRE9Epa431PUkHVHfVEN8uuS8veJpwee6Tm",
  "key42": "StBF2627RJ71Vbm51UqnNzhg8hekVA5bx7wAjuUnaZ4tozJqxC4cfnHZfWgMKiQ59R7VcWzdSsuLFL2YezngPym",
  "key43": "Lb3u7mJnpFMhh7Q9ZuCfZrVB5EPVHbjgQCx92pKfEmvs2oqm7jzJVFNpaS4ohxeBRGeSELdYpd3SVVGgLHw8bC1",
  "key44": "Ugnd12aBHpiVd9JDjzp9hwC2nXSUAqunNNAz8r5bkK9fZbX67wtZBe7Nxg6E3BkWqmimk12a5c8fNSDfLrD9cKG"
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
