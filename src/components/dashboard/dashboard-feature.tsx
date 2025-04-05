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
    "3uCMQJz7MiCuM8rXJervvgfW15geZEsQHkXRyUhvNC6hcCyn7XMhPkrB7SPHM6JJg3S1Zm28j9QyCkn3FffSCfos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GKx6tSkWpQ3RWGGrHoaKwtkA9GziEjL1sNBDRh1ZNvSqoHGNuADEu2TKdt69bmLiaVDrckVtWpPPRtanuiKqCuH",
  "key1": "3if8qPAKfKNvZnYGhdp2xKHg7SCmFiwpnDZhJyvCfTmTaKeXiM1AZVpcobDnbmKvYDMeYpgjRnJ1b2uz59BikX4a",
  "key2": "nStQPisHHWGxxnbtjtBhJtTFnbtLB8GSHAsyMWaa5t6iz4ZJF24S5GauqD6WvapW8ww6yZ6zbbuPNTWbG5eTVCj",
  "key3": "3aLQAJCmgD5uk731cpJmjJoyridsZBf2P9qKmmDUpCUy3xAAxHDh8yEfCKtVPYmpQ6GNUjm6txsBhtcg3GcdoisC",
  "key4": "2dDZEzozK13nspR5duAwF9mJbQ1thFtHwzY3jdjom3WzsYqfz9iTdmU1KkKoU1yAjDasFhhWSLbdMboph225mvhh",
  "key5": "2qSX9GMzsr61hEvzZNkUV1zQZiCzhQ7RsSkfaULg2CqECRo9FthfbRPiLeedYZpQ2qP8ozMdrtxNRu43wxZQdu7F",
  "key6": "3oTFtCMWRw7SX5cv5xj8CUgdkxUcXd1wtiu4QDZZNey6hc3RNAmZmWT5wXnxjMJW7uud5W6izeSQdJJSdT8Zgnz9",
  "key7": "57zVtanazDJodK1s4Fv5gy3NR6zuzZpDg8Aq3zToUJTG6h2J5eQMu8GCPToCFozMnbuLhaNHe57SN83oArtLAfwD",
  "key8": "UvY6YVtn5TPYemV21p7Wnbbi48BPiP6d21J8B9x7GdJV4mcSfg6J2xSsoZVmVLk8GRC5jx2THQWGM3rJrup47Lp",
  "key9": "3He3FTnvhr6xouFvrvNkkwBLrTn8yyBwHCuXeyCja3ikrUKrnLEKjjPMMy1zvNogPdw6C7gbqCWQMxqFVUWkzCJY",
  "key10": "3CPpFdghSe4NPuR4u8yzbcUxMfC4VPKdX5EaSzpDLWxqFKbRjQZxR67zj74BHDASqp95tV5gbgfJYpaKxaohJXDw",
  "key11": "5dzMnNZvqRgQyGLNHxoQEHvnSrq7HGCW9mKKm1a5c8VbwoXn7wq45bjb8dL1LxfsSHUSAeUcK1417y4bY4CbJG4F",
  "key12": "2PDrPn9kM47q6AVKMKG4EdwQ2CK5f1YC7Fwd5NHjm4kzfpswMtnv7iymqWJt4YqEEeMJFD9BBb5ejiCzdjZArQ6W",
  "key13": "2xJgyJqu3j8d8ipoNf79fypNi1MnDLVDwnXAHdRVnMaBjx4KvhXReES4WbzerdriZELkgVd1zUqc1gYzrLnDVpLU",
  "key14": "3RmpECbu69ssdAc6LQQwRarjikgdCj5iTEXKAiEaA84tbWEQRq599T4p3cJT4dt8ifbjDXEPnqh8abp2g6TYZ2Ac",
  "key15": "2QahC4NozzKnMMu8guBDv262Nrrbzuc7wJ5xge8AfQtiRFA9GqjzkgXPbLSCTznYnufJwDRZRtD8ujf9E5CKJg2A",
  "key16": "4WJy77aEBhcaygfgwJYTdLzzktXrHJsNBp9FyyeoCxaEQ1wYu2JKDreU3MWBmMg79jYQ878sQyanBToFbcQfQHcv",
  "key17": "2gSXVRyCefZsaQd7BoP3CEWbLauVJL1C568DV1a3BLakx88VQxo9JQNsoRBvpPqv9wbNJTG468VqqYsECX4B72nD",
  "key18": "5PV5HtJ1t4oGkCafBpffY4X7MxCzD1pAt4yCG52e7BVDaucNVruir116FXK2RQpQDKzHn1rBoKcdu62otYs1jtoR",
  "key19": "3vzuSYgy7pyXXEiraqVPbqjZUFr5TxPA1jFer5VzXP3v6W6173Qwtwz8Xmp7hzxYMvtH9aaHdRQqTq1mXv1LKPg5",
  "key20": "3Ys5z4U88fxswLbtgb9KDUN7Qt6JgxLiUMnNX92VKZjuzT2k4Gzk1wfLtfufTTn3AoxPgAHyRqRjqbEhtYaNwjKg",
  "key21": "5XcbRH3K2cLNbZHRXgS7mavYfn7aNAQHeJchZsuMZmUZBZXK9UwMjRJtwSgq3Xhoqotu5u2sUgBLTVP2bhg1C66p",
  "key22": "5e2VTDML6GPmZQ6GnrFj8E8bpbT6oBp6SDgp4zjFQLCquTUVCQEvVGZC7uVxaDZrBMviqaAEFxTWK2HhkUxiUgai",
  "key23": "5vAmB52RbPgDQoWymJ477DJbkyPac8o6m7LmZgbAiL32t131sjeaBoTryTojCqHGkuo471trA7GE3rZxs5sJQWpG",
  "key24": "6Lrd9BWqVkZKMKVcjB1ik2G9JsLMaMHcxwedqxoj4rQsgAKcnuwLwDzmcvQKAmkRPbhDemFr71LqfqZUqseVQQY",
  "key25": "2sguNEfYZQoCGrRCLtZ45u5cqmvtLXJjmgcxJdnjpZUoFzQm3viesWMFz8hVHrrmdAC6dXbX2YuUC7Vd4GcVtMui",
  "key26": "2B7VzuVwVyd4tm4WQy6dHhiZ4zEqQLAYE3bYYCngR6os86XVvhXL88ayRA52dwwrEr3tdvPwghYdS8Hum1Fx1dS2",
  "key27": "2jDhddQ9864Zr1bwszHsvgDiL2ufbzV7QQU7hBqqBLrX6bBE5esDjZYb95JXQcfepEsA24s5XneWsRnRixjbuktH",
  "key28": "4CinjP2nmK9rfwgvvM3Mm7NvkxxTVvdFxdByDCfUjY9S39DMJtuZtfbaEk6XfJQV51C6xmGCw22pqGwRfN4c7YGt",
  "key29": "5pk9wam3e3CTAvvrvJgqvD43wYTcv9QrjHjquP27gZzQV3SGjYFWSBiJvu17anLbaRCqTtZfbt5VX83eu2GRVJe7",
  "key30": "FMN4dPBMPXC9WA84GLefC9ee63wjKK6AcT5ZVS3FJ8RBAh1VD2UUmjEwXVwfn2eozJCaWBCqtujAPoMwosALzR3",
  "key31": "5AnS1MXRvevy1Mdqk5zhrwmMmnZd565mgDTE9wqBkpRmPv7VXzPNowLoXdQra2TsC432NxAfXMa8Nubvenxf1Bf7",
  "key32": "3toPJiTeYULAgP84FPC2ytutktk9QEcN4qrf94VrANVJs5jWbKyngobamhowxkWXnDG8JgWziisKKpJaV3BQf7vd",
  "key33": "3Tz5rHM8iAUiex5ZRxKXRixbr8XZZQwPBBf3YqvN9h6KTdJpNQq64Y6KjgibVMLcETTC73Cthb9siaor2sVpxVzR",
  "key34": "2LA9FiJrUHcp3y8UYLfsPgKuAU1u33YMyLViTHRfEtkVFCZnpSS16f9SoazqbS7W9vWFP3vLteHoi5uwinfzn7Ri",
  "key35": "21LbFr9AJKj1PVreRWv7t6iKWFfRMeYvr9L1HeLQLdxhiQf7hQTqiPXwvpLeopi2SUqLptcH2zKBu6ioMiHsfTZv",
  "key36": "5gWXiHvqSRbhYn8Rf2fou9xJtAxjuWPvHqbB3ZsKW2ZpZ3SPjsdLdEzQgiDKhpXtvD1UwKcGmwhrP6zwyYNjm5px",
  "key37": "43WhP1wdNSSS3jCTGmBWmbtJQiwCz2M8cVYBpXVyuf4dt4dDUn75DtepxTNYCjc2QaePN3acQHytp9gMnMaxmjcA",
  "key38": "2qF4gPetaYpsZoAPVF2EL2rwSQTnS9zsUzVhNGPupybDxA9SftGRQGLVdJengYRuTG6A3jsC2XyXVm3rL1TsfioV",
  "key39": "4NSDb1iovuddgv6y3ykCsCN5K92rSvhbFZCdHzSeLaPpRav3d7Ff7uy7onpG28PnpEZsgVnunRJ1n8G9bhxx4QN",
  "key40": "5pctTmV5HoarcQzACPuArZK3pL1shvoutReg9uqoubrKaj6jESQHoRN2Y5XcECPL3ELesouaJPcsuPT76J4iQP2Z",
  "key41": "22WqAdAsJ2NFfr1zd4xrhtNURxgZ7KhZtKDfNKKEUPjPrdZCq73YPVkMwrskniq1JSoX15krRP7YW3qvoh794rMj",
  "key42": "3PmafRABvUrHSVigFUgsNf4v1EkcXe8UXixkCkG1KxaWPa7YDQNDBVi4nmaN9Jxc54cwXHPEePAaZwwosR6QBsbk",
  "key43": "4HptfPAoZZx2doTXeRw9nfiyvCDkRZKdXnyj3fvN5rn8UQKKNPKwnBkk8ww2rtCKAUC2VUX4Hd7BzxxvzsgBxwVP"
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
