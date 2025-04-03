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
    "5jXZUNtKBvXXFNvo6eg1oY39Zub5qjLHk1snYfWqt6NqcziJyRGCQdfw4vgSL1CqsnoXd9xo7jjdjUvaKcKDxrwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NtKhn8SsRqosYwDhfnZrgXThpHqE3uFgk2TX7JwXDYyKu4gXD6itjrqTEw6nzczQTN65aAShcHHLJB2zuneyDxg",
  "key1": "2sXvcCNbLjbipX33wwZzGVCfSzESveQ1GxFQ61jArb5PtXj5GvgNZ7ai4X1qU1RypComNkVBbudLpBPCS8t3FNzf",
  "key2": "4ofwbWpsUK4FaK4EkpAHN9CnxzoqCEqzk8RpiiZHgx3qfYKmRXEwQyKYDLMyhHPQSgLarD8nn865Q5Mk1LBfGiZ8",
  "key3": "4GRnUthrbJRsMqg7zdbV413x2bX5jPBhyNkodijxQJgMmsvoU6z2eNcuhZ28BzyXj21JfPvs1U9q7h5emgaLs2YF",
  "key4": "43V8Hvb7p268iUkusfSGvHazwjQCSdDaoPrWHtJqDgQdLuFCRP3Ak9Abj1MNyphaJxYpHCD1AkDxxPXQRPnuveBY",
  "key5": "4ow9wdKThomga2KoXHe8Xtrn31pTZBLtTB73hsUDvSag12qPHWWyFXh6zmARdhpSYkyWHzrxjuzGBQy2at5JTyoA",
  "key6": "57m681mnTAyhi5by6UJYgLuEXB8GZNDNz6cLzTe6pqmynBnqPbXhnaiE69He8zQPf13aqS9Pv3ZRSef3WUkfLarb",
  "key7": "4egA7DJZnG2UuEA2dXx64Hj5ZKMLEuVv1bm5jQafhVmcHbtCspp6KmdQoGGpZ5tF9Z59d81xhi3RzFLZNDar8x1B",
  "key8": "ZXTYSzdC1EyiCnBVDfrP1JKMr5y8S7xoD2kuCG9TxqxcjuwRoD75686DRX95Vg4rXjam8NBNtqq6pKdRVkVRwTp",
  "key9": "bn5q88SQw2MY8EZ3Z3nJbWR1TwE54FZUEiGEQjwLzShqFyd8xKyQKVgr56XPyaHf2uvg7iP7AV1eSKyPMa7bqSM",
  "key10": "3G8fYGBQS2aNagRprHrhN1ubC3QZHyrgTMk22UPQLciEXfkGnEjD3JibdDrgLxEuKnykUHPpGBWAMFjP6hhobKJ6",
  "key11": "doHR6GoUz15JYDA1s7VJN4bpk1KgxkQ1VBeHMnPPre76CFqxjuNtKwk6kZrgkDru1jkqsmcmDJ2UdGwaeGoAkoK",
  "key12": "2dUaG8Abbdk85YKqovbGhZpW3gH4QQ7QysSKayEYijSuDg8vMQDdufEUyAamNy6wGtR3hnPm26ws19NmnDsrawkf",
  "key13": "28z2JBMXWFKDre4hwuYKQDe7XgsJap67A5bvmHLptYUyNCwj6r44rWkADmpo4G1XKK9aaDsPe7xNgSHhKhR4sEji",
  "key14": "bcXz39jCpGN2zHik4goc2XnmL2oHPTCxoha2XnJh11o7SCEKhw9v1ZmriACegu5G3LJqfcg5GbMHkg3HDULmGi3",
  "key15": "4rSBnYsij5RRtR8oW7P3ZH6Tk2geSWLQjGPjT7Zd4Ld82domgqQ8f3EmehzgLmBkLPDph8DuVJfe1kppuZkqGKAr",
  "key16": "5jd5zQ8cRo6ak6PtxHA9PdfjQNZ8Gb1SagkjViDweMcRdYx3wk3Jk8KBJ7MsGSKbmYL8QBLHRbTK9xRTJCanPU4y",
  "key17": "4VHUHaw12CaW9Qe4geLfuF66PWCHfVrvTnfyEpiYSwaBscV8Ky5Tmcr8N8xvpR5k2TsTVWCA34HedCf7CbVk35V4",
  "key18": "2EEUBWmYLddc2qVizRyjFYx5b9hdFWarj13fXQ5efJLxA7xXKkyMtEsR4v12iMtBz1Xd84QLXs8t1EBSPSzN9kMg",
  "key19": "3No3AMahdjm5dhHJU4XEsYq2SjfmunUm6ZFSmtYBThswX8ArQDkG5qfTjyg83oLDmQWRWe1euJw9cAQKRe35drcL",
  "key20": "4pJnVRJfkTNE6Tu4VWtc4Sn6GzmskXgQQ61UZ1o1FYTZ8ijCNhZ1tVmy81QJfGiWFDofyoLdg1xaWbzQTb4ZBtR2",
  "key21": "QkkDVyc34PngLkdJaHgDvMJSayfMknMDgrwVkQjr8YCrBJc5Jy8kv81gRyJSKfB7u7btdu1sJ5z6wzXymP4GGcg",
  "key22": "347wqZiAinXkqH9g2yoBrQdH6zbsstNjvXoyUsMKs9xC5i6vTFJevWbMeWJEmj4Hqay3SAaK17sFVi6NQysiisDC",
  "key23": "4C84UTbr3Mgaa5VqTcdFrufv7TpghFVx5Xrjpiiga3SiqN4wnaubT2GaLRiBnFwdocht5WpZWkD9QddQUYRcJUVz",
  "key24": "5yuK7uxBL9vYctRpJWFiqrpWbb65jja1MXhBjMA4nNgoZP1ELUoZp8B2LSqEwyotM3z1oBQ9mgXPeXf4KnebJS2R",
  "key25": "28t99foCHQ5QSERhNJfEprP8GfqKNq2ntQrJ1z6h7HEiH1DfXD2uCCwSUkHcjZFF4AQ3VyE9WiZ8VzpWSuaThRF7",
  "key26": "4pTRoLFgDonFn9BwkLCAv93GwPmh7Jn7HkEw1etjsx4iBQnMBXG7JwnmuhTbReVGE3Af3sLDxdKtJZgVneYaEjAB",
  "key27": "5XLN4i6dD1wqDe4vRJn4SdjtSheqscqmxT3tvtiYKgR3jrHykBwCrCLGgeoKbhrbqvjCqSCKXPeC1Ru5zRGoqPwz",
  "key28": "5H1mTxPw1489vE5KiBGLus8KXfBQ5efYbEwNPM58nshEL8a7SxU3H8wjraNU438SzR5ip5N9q41w5FtGadZKamgV",
  "key29": "56ogvECZ5ocMd9XVmzsXsBC9vacazWfGrRA5NfE2Yi6e8cphALqkW8ndwwc5DyDctBTwJbcG91N434y4NesrrtKk",
  "key30": "3kPmEC3vELQP5o3KqNj1KcM9wJ1u5RDcapZCkbVDyxA9JWvkLtQMj9J5oHB9V6vhN65AEuhQY46t4bHUMuX7uivY"
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
