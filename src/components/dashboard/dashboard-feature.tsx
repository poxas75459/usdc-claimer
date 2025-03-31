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
    "5bTK3mLRaEoJ7x5DJ1DWKnm1JrCPSKgCE845NJzsoy3JGG7Mx8YiKbUMKcLaoVK2thXUkRtKAmvUGxX9QgcBguEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m58mig9dka6cPdTW2qeFvytEYKJeYBsmKZUZFaf7sSdDJKMDyhKvWtQYZfydVXp3ASiJq81MQCQoNWnsGBNe9VH",
  "key1": "5vUijAp99rb5b8J3UjFpxAebemB4aJoC1poPX2yCbTbTBqdXTf6N9Z5rQoCGvhPjer3UBB2f6nYsxZ6bWjXNguyy",
  "key2": "5Na3SQjJsZ55mvfXWpUgpxpKoSLiENzCZ15i1D1ugrGtcdt6b4znxoDBky3weP1CwAPX7v2rYYCf8gRsCLMGDULd",
  "key3": "2fDYsQT42ikiXpz2YV8z9JbfcydNmKN3W3DW36uYbHHk9JkedUmLKy6FPQr3U2pHzpvnmQCH3wxjkF85BsSs3HA9",
  "key4": "3CJoRWaNa5GnUpupV6qGpGQGLVdDdDdz4MmVjDv8DCLRPJknFoDm6DETNuZCaKe5Zn83WvMmELmP5AoC17k8WsNA",
  "key5": "2wdQy2Fh9GYGVDNzereWo5ufkU4qwztVDke2yXwwFY3iuGH9cgKBQdQRQ3MuveoeCyUNyMbwbRkejWJN8NZ4sS4j",
  "key6": "5DtFYdGJSHQhp5Hms8ZrBjVyfGXZdgEoxwCDwYUnBMTYFkbaByg2aUZ2nLwgmgRdx53yyE66Pe4ctNFrcAjYKzex",
  "key7": "5YM4VdCgsNdRYKfRE2iun2hqvs9sNhSEeW6GLf9pj8tBqeCxEcp1AQ6sx2UA2Ro83jXs6K9QmbJzWE4ZMgmiKVa9",
  "key8": "3AcTvZzCSqCH1v5cwzAcXpEiN6FvxFY5vuyGFk3jjQgRBWzEamNhuSE4GyAN11JkQf446syVj7X7PXr6kVAscM2S",
  "key9": "4z4c9pUwZ4tjbvBufVncaa8p8AobkcjMJF8WatpLFUs9zgLpzPKPPm6Tp7j8wj9ifjqvZcE74cNZxc1WnD65nxjj",
  "key10": "ZUnWbcRz1RcAr1GCGPT41C4NuJ8BSfNgX1sHviL7KwDxTLXv8PEjBLdJtGsdRxdMkcbVvjdy2v5tFq3MxoFKuWu",
  "key11": "5VqqrPLcCgbq9azNDUGiF5h4mL936c8MfeSR3j5LUwqkdKQWqiGe5KHFz2tMJDNPVwtg32XYECGKvzGZJ74wShvd",
  "key12": "33uRYD7A4QfFjBde6iPP9uZympRjSRjShCCnfxJTSBPUUgyLpw5ENpG29Jwuvm1LVvC9CszNpzdYUjB4cAEFyuV",
  "key13": "5cK6e7TLhmWgCLz161WMi2y3XecxeEXpodd3WJ6zs5Yo9r7Fcwrg93ys6FFLdUoA9znQopGj2BQRU5DUZzuNHkHX",
  "key14": "3533rUk5cTrkWbfmvxd9oDrpvaMMKV26gbtoGR2Mdji8LmsjMqW74xAdqpWytKRvRimfhPPuW8NvqMtoeVM9WxMF",
  "key15": "4ohL6qAhcTyxKfbn14aEqAWB3oqCbveSiVteQkUp3XyKa7YCZjUbBYerVXfuGFoLFJArXiETr6cUtbjhgHnLLC5H",
  "key16": "4mGG45CEs1cqZmjKkWP287YcdBAPaFNsdcECTjsesZzSuF1HTbtbfk9dR3jBbz2bpemsBVEbYWuAsktG3v4G7jGv",
  "key17": "52bjBppnEH2qCxQpTtFHxcw2ucBcABK9E2dcdpav2gqmhge3cJKNpHtfvRHm6ktmPWTtEy296AVZLpgXTf8H9m6p",
  "key18": "2jKtruKjarV5tybnaFT4guujLUSpviiBxgf5pCT2fNjggWLkyAPgM9fGf3u3spbe7pZJXwERQqMvJSz1wqywRJhT",
  "key19": "65dtxJFo97VEQKiwpTuLUFPQiSPJnrTFBaLADdLPZCr39VifRf1iEbTcDwCC618vTjjizyov33ZWbFoCwx6bQFPM",
  "key20": "3x6BuzPYjTUe2Emy8JMWPNqJKBfYtHkAM6awByjATQJrBmwiYM2cMgYwh1QmJ6T4e1w3bqLSzL6G3XGUdLowwh2T",
  "key21": "4EBSWN94BXXpYiCN7qF7TMmi5Y3RypjGVcP37rGpxtyHigoe31jYPe3e9CAhFNNxxiSPR44C2YpfBp4UefbMqkXz",
  "key22": "418LF21USrqEZAvK5VYquLKNnoWTkJYrF6PEdkoNKoP4L2ptXwassPrpUwxFHAxikeJp8B8qX69a19K8tsRHwayC",
  "key23": "2BusSKujxZcd4JqLAszw9zxHTPdsdegQBvxRqhngKHpa83kYQrmd6GFj1rV7grrU6hzKxPBxqPZ6VbtCA9aF1r1h",
  "key24": "4G5kKeh7Fp3tgtbCsUvcj3xSxiqrJZ8Auyk4vwt1M7EN5AN2P7FH2q46HH8WYMZffhCeeosZbJRdm7DGJesgk9hQ",
  "key25": "3d7N3hQAtAkEJu23tH5WAhGwYe3JWdCGe8Bcc2kLKrPECkARRqtP9S7Ynbi1cvkzahFwJKW8tSMQpCHJYLBLHwZ7",
  "key26": "2jtVB4CBaStQBkxFNptfWA3KQu3WfNmsVC8gp2qzyv4yDh6GswyLX4hKLegpjboi6QXVYibwy4ArtF5q4qxuYYYL",
  "key27": "4CPiXdV5H46jRTG7QwbYyqQkw8QNDvmuB2s4SWb6VRcjb3TAC2Ero4ZvxAVh5zLvMYtaysy8PiFyvNYbmvPpgndX",
  "key28": "5SC7BfGn3q4BBboQtVb9q9vfwB2Qnh1hKtTRw9XnWcaLnaTqFZH4QzR5NYBmR2JQgepAWqcMDVAxvNB1s7MZjreB",
  "key29": "3ZDFLb9NQpLH1U7JmvmRVdJr6kqwaqxiqSrvWsfN5Vs1JhyRRP2u8NKDfzCwPw8nMHEppsXEWxsELgAWkE379JYK",
  "key30": "5S8u3yvtoRDWcokqJd2uQpp55Eyi2mLbwBnPjZCLjwFSZMyAjW5Nk9o8mv2LTingtcju8Raggyt9oowLNUNyXP1K",
  "key31": "5wvQg6bSmHZ4mqoLagodcYYF9Mo7xanwZNLgGZvMXKg7MDboPosY8T8hP2yxpZrqBkqrYqC9Cmg8yaQnSUj3EWcP",
  "key32": "3cKb896e8Y7WF42maFDW8u11ccVkZHdFzK5thLJXfwJRBZTnYsvaR2BfbGiEdq5C5gT88Yq44B7KbPqP3az2kNjM",
  "key33": "5pHnSoJycZ1FLox7ooAbPkiePBtAN4UUivox2ub9RQjfTwfJ8Hka2c4oLpSViDPd1pwxJbwWtQXqSZJNJuTkzHpA",
  "key34": "FRncBSqsNVhCLn4VtHP9LsGpRfucTfS6tJL4EofGEz6RMx78pBPwVSpraCCkFgvfEsYeAyUYcuyAXFnMp6PwKC8",
  "key35": "3MuhdYgDSYYyUJXEXpex3Ee4NgaX1Ru7jKoS3L2zVz3rbs4J9p1Aj92RncLbkx3zcjx6HxpPcZY2jr5Bn7EgkzMB",
  "key36": "2DLimUu8imJGgBst52fYHWTeK3wJCDfQB6VKGjt4MVZsnDAXJwB9BB9Pz8tyTjfan4bBShJ767uvFTgYWYDfPkQD",
  "key37": "4GH8Hi9xpmeGj8xfnHwW34RYbexHjEX7ZxFUkm2fMnTWZ3txg5T2jZPxbnZS8apcrS9RBi9X99ch9t36P6tcJWjK",
  "key38": "3UJSx2wYD1wPYmBwS4uMupJCY5LB22kVMdPro2AJxvfkGbsMfTZ6LhaDnM5cx4cAoARYYvVqBSyhNaSkyYz37bgH",
  "key39": "ztyFEXVx4tvnNEPWiHYcM7azhJYxJvBhQcD8iDRTV8nHjqXNCAhC2AiW8Z9ZP1j2rKx62oepLfCaFVcDeSEVFSP",
  "key40": "3XckHoRDisZ3QdgtgvGTp18Xd5kAy6YuDKb75Jwiv1HXFMj7v5tKLJYNk35fwFejDe2rKKUVAdWh7yitLKTg4hm8"
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
