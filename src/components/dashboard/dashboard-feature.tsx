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
    "487qmnC5vVGxxXaw27ctX4omqcNfZsGXQeV2GCJmZqHLZmhZrJAGMibPb2yokKWfwj7DG5rsXTML41v4PxEsHcLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hJZD2Ggy2bKRdEsUrAaRQRTDLGRTPJVsAHyxttU6A3yzMdoMvEirgxebkB7oYwAsEWZd3FE9gnWeD3ckrjZE7C",
  "key1": "3Zh6NQS323vch3wasDhULbTDju8uuWY64tuMFJoZGuk6EY2842CKjKTv7vzFfpy3AsJFpMChcaTHAPmCou5N1DNU",
  "key2": "3HjZpHJfSNXBVt7ndk2oWT6ac6qKev8SnhwE95Sz8V6ed4TfxcaEe8ULYYcYFHJzSQ8gy8CX6E9UH5TFcHFSDKea",
  "key3": "3mgFy5QZU8njWBQpmCprpvgxxDiMGKqWnNJEXyGeFnpmVgcxXFEizGT8r16SQSqRB8v6Kn1Wr2XVG3kqbdMTncMN",
  "key4": "2LadHGS1tQu4AhYgRk6amVrhMCCFoZvqbCuLGXgEcrLUrFEQzVMsbtt3P8W2a7sTgWSsrdTfcXXvHFGofAbwSLFJ",
  "key5": "Tz185gULYENQz6Rxz6rVYryipGTJK6snQfyamNdop8bs5ZcLJdMHdGiG6dpzRmUkdAtKkhjh1LCogbupknEL9Ck",
  "key6": "5X3hzPpxWKX1w6KCzQXNtD7rVrupC5hhLFfarAVXB4sJy9f7BrCo8E2CakfRAPtwmgegPyhrpc1q2b1NmtTT5xWH",
  "key7": "c3nW6iJh6Shku5i9ZzL69i7PB5qF9MjbFNQnVfGMtXtRmtQKneJrFXnNHi8CpD1MeNueh1Fqydykgq8ejVKB15L",
  "key8": "4wme91oABkAgaHy8DVVcnPXxPGcgC3RDJtqEcqNKySbjEhgYkbuJwEqqPv9HoZaxvcK6iwTviVobggvc5PiySMxL",
  "key9": "4zXT2tPzXjye2grfVkDYHBbmNzjZdRNzMJdc1pyfiF3Gk1WzwMyYAZFGS5zU44DDPM2TenPjMKCjeAedMGnZZhUo",
  "key10": "dcpani5Yi8kBHU5nek9R47N15XQAMrtDnMTR2GvNpwsVUBnYc6dAhJpwrkzGgmVWQmcZQizMQr1HRWvmpXtemXV",
  "key11": "49ciAHydCyuUPfN3Md9qyQyDQQ9xjeyZhVD76jo6tzADMwNc9zcgpoCZENMX134QysQsgDLdAM8dKhifHxyMDN9f",
  "key12": "3ErJqwFY2FPbwj9jBsF1jS2Ui2PtiU8fDe2RUH81RvW2jdLBVYz3Pyyjbk1fnoPwubgNdoN3TUgqcrFDfXbQa1gV",
  "key13": "5UrPSN6yHAx3jDGNCJkx5Misdkb3iSJtPuH6Wn73GCYY5BCmRK63jxn41hSWud7Xut7ceJf6gWFztJsXRASvCAim",
  "key14": "2zBh7VBiaGbntbuWnXwdvJpRb4ttaBr4NHnypbwY3f55rXw5D1L6AEfyDkFkGjomwuN26Hzd5isXtM6PB1gK2q1b",
  "key15": "2PDcEi62y1q3HP788TYuL84VWEPXeLRPVjLoeht1xAzr5RoJHFVqahhvi14WeLuuvsyxo6FaFNW2KbVxUuiKAZkK",
  "key16": "3PfFMJCmr49AFHSX1mAi8mmr2fxCFCUXb4vtujv6AbeRUzhXJHX37ibB9aWsVTVmBDgLEQ7Eq7fSrnnvquGVqMsK",
  "key17": "3cND4ttYBFPckryu9E9dKuYChTU2Uq1Eicf96gj3LdW2332kso9oKV5mVEKWGdsBCHBxvwMNVKYe7qNucy19o8TZ",
  "key18": "4wCqHUJxHPyyKVHPKZKDnJegdwZ1m4gAohA243jggdpUKysnUVK28iQu56k8v1q52axXuAxqSeK4bUr4CC3uQhGX",
  "key19": "54KVEuLm2BDr1SC19PzqAijYwTfXnDzC6Egg7oYwKPmdj4EmjDxUQfRgUkDoTfsraBc2uwx2dYfaubd53vG73Ju1",
  "key20": "3cnhrhgp2CiUd9aBK2XNLJUXJieajJvZus4Ndf37XEnCK29JaXygaUCWtEJFs3yDCU8ZQqavbyYctm1D1J3EjYoS",
  "key21": "4nQoBkr2czRsL416i1xRSiAUxyJ87EfNT5LE8VqWPS1s5uk28Zy3yvaSGNmPxMYRZfFHHyH9tEh2hnb9p2wNGUSX",
  "key22": "3UPxR4NLsFzGF14XPi72cZan1rChGUG1vRFHXaN9e6WGAgwyTmLLumSuaFUu4AHxneqKqCZwCs4CnsfPnnJiK9nJ",
  "key23": "5jeN9TSrpUmQK2URnR6rgwhHicdz85vfSDPi1CUELQxUYZqLXUKadD4j31uUn6EGwjZXh3nPPpnZxNNHAhCMMh9V",
  "key24": "28VnKeAtQXRjAbL93Gm77Mm9Kgv1eovMhULXWvysxzwZeaPB1prEgQkBQSBcgeqafJKKTVZPi8p1uifckwgFTCCR",
  "key25": "51DCuRoNHNXVHzH9q9TpSM72CJiNDdTqfH78aPrvhXbikFU15BoCCyeprXzqEZpsJ34nUQHtbjRHgXe73B5yv9KW",
  "key26": "cmH3dfkwRHHCrrrpCqUD6StUZtUgWc9j2WxV1GM7RfT6EZpLaG7HrdZrPU7XshQSmm4rU9hxzgGyNGPwKoEoyqc",
  "key27": "21fHGRNjupdEWXtEbzd6VE7FDpg4piYKtaGDHBuhwTK2VEgvChTkS2LX8aoKqEPkGF1D4uq6JmJ9khYVPEJarNiT"
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
