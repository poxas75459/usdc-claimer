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
    "4pdGfWYXdhsWsx8DnAkn6U1V9TKvnVgVtErkgCvoQg4xP6AMMJn7CYheRA7GcRbxLT1vakpX4DsDG6tnL38A5KTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cf89SnD8yMPwTgKJ1yPEK8PcsAfFrKt3g6QZNpodwHvAMArLqAr3AtF8eoRvM8TTka5LYKWjpVcjkBtiKfuShzx",
  "key1": "iKhsH1bXM5up49MDR6SHfhmcsvLsKHfwJp6uu1fJJQSTATdfgFa4hyHHcBpjeXExwC7ATZYDkdFXPmDhnoLgDVs",
  "key2": "32f1mtsdGLgZQezQbSAY4wydU3hmoFQW9QPkoZPCJvUU7YP7najBmcSRTPcWokBjHoJBXvCk2KFVp7Yzdqdf5zSP",
  "key3": "4moTHAkdqogdWXBVLtrvSVRbj35fcX41YDyv8cBsewwf58uHWpM8D5RgwF9KickYDnmNX8oNwwH1rHJUX5vN91ra",
  "key4": "35ZqgFwnLXqMm2KqiJPGYiB8EthxrRPUdLB3r55Uf79ba5FW3zYq2dQZfbH5r5bEEiRyyNz8g9NvF75qX3sznTfb",
  "key5": "5jnsRmjTScvpRt162sCsvPMHfeDsCVPrD2YDX8GMiVSHwEi8dk6tobzQYhKmc3Px62JVNDVWJR9yFZ9V8VPBak8x",
  "key6": "2J5zck1abMR7vpzjsA6b6W21bPXRj4g7hnWNHrC5oqvEFsPrkWTcAcS7AsAmCjBbSpAi6zCmsqbUVYvLYe2ZsZ9G",
  "key7": "3XvfteqfjZN3ti6MEKSKbjm7xQ7nUv7rPtoV5Az2SUEUTpbPc5aLjafeEAaTyenYfoNdQgYksnp4no4gjYA2hdn1",
  "key8": "3N2NJuiVRRW5GkJuBCw2wd6XgGvVjZ7aV9ZAos9oDwyRGZjSp3hdpbZG3th4uaGyYVBw1bouxzKUweo4y5GAWyXX",
  "key9": "3EREQKtLjPrp8PmDoNyTdayNyimN21f8rRjfRV4myVpjHPbH2dwuNx7kKsc8fpPHYP6ZymLrdrHKqhV2bamB19m7",
  "key10": "5SEBLAaDn2SMdHGE9rcSHGndKbT85Ph7NzHoYnfWSemrBdedJjs1b9NWaFeGBC9gQ2ajPYWxqgeS96HMELdEUzcZ",
  "key11": "3x4UhgVpZeae1KeKr24mYJa8eunwSdE1jR4dobPTJXnWzwXUDxVZWJ9PaSv48trzypT5VeoF6BdVLyaj6M6KZ4gP",
  "key12": "4dTrRP1rAij6u7PgECvgiZg9JP3GJ62dYZgCbc9ekukQ2spUkhTeXdU57Dt3frARQTzPUHTSZ9TcTdfEi9MVKcug",
  "key13": "3ixdEjeYFo4K9uY8psjc5abtKNA5NJwMBNLC2pcBtCUqA4qm94Yun7hnsdcQwk9yFv8KCQ3xXT67aXQ7djaC5bTq",
  "key14": "3cn2yv2ToDNeni1Matxc6risCDkQUZgi9eHB9criukFaaFWtxh5k1Vx93kDdBXHtHSj6fxdiwLyMEEHHFUh8Exz5",
  "key15": "2VsNjQdUpS62U4NJJ4j9ebFJCA9FNfv44reRCgQaxx98EJfuuN6oBc7GA4vogziKCdu7ioJC8XUoiyaZ5ukGr8uM",
  "key16": "61iGKQpSpSEirmdGHXk3zN8BKnnpLyiw7sGGZpcbekziyMfyxmNR13iDELhg3gfp1Lhd5kPnkn6AHesv4v3uMsUG",
  "key17": "LnvZH27J1prrQi63vWMhKxmmE436NMwMd5dQtTnzKvz7N4MRb2ksVXTPtqrdzw39pHqc48PYAnPiiURto4ajRwc",
  "key18": "4NsGV9d1qQE5meUr5FpPzAejXvvaRZ9pkEXszgVhhxQy2rhdJRGZtDBAgBEAQvm5W8KFVE8vJ8Sc871A9U7oPfsE",
  "key19": "35pBSPtLvXphugt3UfQ2hvdzTAKjmNKnBHnShiedC2DQKWahAbdSFQFREVBEvTNnnJfgDdeNrtkKjAPB4qXMPHgT",
  "key20": "2sUb7tJCcLEZP2S2XrHkJDrHSHx5oQFMABgW5LBwficWDQxj6GSe9pgkBBrJ8nuhp4Rg5hg8wfv66GrKG44E8q3d",
  "key21": "2ies1fN8SZppLkktTFwmcw86eaWXhE1TsQnFmEbve5woq92xD6Swbr8FnnUdcvQih2bdiurCcYu1E6GDtfmWuUAK",
  "key22": "45svffxGfQ2KhLdk1LgafRj3iaLQuquro6TqHQZEnciiJJ7g7RbpZyCBgNSNsASrCzWMtAC6s92DmhdPc3voEo8C",
  "key23": "22jzkokD2KGcE18GMfJc8H8fEoeuM55nYSpP1pfXySWGUQTpqE2iKmtzoC2EDs5YuT6o7MSYgh1oZFZ9ZjV5HcWG",
  "key24": "4tVuMpmYzaeBrNHuLYNYYhcqPxg93gfowPPMoXWAUFiBMQpAbRgcMZibZf5uusNYqpqrW5eFbBmG57GZQ99C2s17",
  "key25": "9ZNdiDLKLkGww4yZC2JWUgcm9uZMzbBnatdLX71CAZsuv29UkSiio6ZPdiStYKfA7VPJhx35QWjgaSwWvzAwMBs",
  "key26": "yig1dvicrMQuRTSMvm7rubroGyoUmkR1enzUQ3DxqbccU5ZLYJ8NhRybGhWxvSBDPqh3QpvDimRSyjhECLHsxiR",
  "key27": "5fNuSR5sWnsSkMLGAkBk8s3CuKVe9b4XAqU8hf8Xst7p84c7nzo1P1i2F6ihFzajrNfHV1adGSr6VtAjFkqAXHmG",
  "key28": "2HdiHH1NjnfsLbL5HgWM6dxiuUJw7unJhNMZvh3tzEqoq5qH7f42ZUcAcFbHAaHduRywZpJSKnjhmLerwTpaEDJk",
  "key29": "VKE28tybVcbqPBj8MLbQCcEzGbA9YvitnZrn3U7mzErryDWjbiSuiUf2fAdCvwZq36bLyynNuykoaESahSgECiS",
  "key30": "2upFJp6bcivErkEzromdtKtATiWNqSGzhnpYfbKwu65SxZSK2dW3xg1g78DLiRpKn763EuXzV3A9GGVE5wiUqroH",
  "key31": "57mGXPWpHHNUayVxCUGQqk2JgirsBw27bHy3uUF9wYJq7B7yfA8NKiFbaWmBk4rvvCrA9nXmmtG8prmztG3qAfmW",
  "key32": "4YdtTpFZjzbAhLGRNHhiQk2xv5kBG3rquztm7SNExhFeMTT266F2kJgEYztyRRV8vBh3uYBvjYxA67cUM2PLfakd",
  "key33": "4PUV5PCHRTDSiw7iGuziBXhpH53i1im7EbGGJMfC3sRTpiZUinaE8GgJ3VevNuXAhtXnrr3pJEZ14ooFTn87NPrf",
  "key34": "46nta4m51egSLKDwj24tKDcwZmmLrmywWtqqtdsdtKCQahM4j45uBCCwBMMESoE54T494nT59FmH3JxfiKSL1hE5",
  "key35": "41sddhYfPRiUjXbKQuDEc1d78ZHEp4ndbBYrpQS8vHgYV3gGgTaYr7s2SqiiZzvy3C36fbzX2Um6BT2MQgvmwSA8",
  "key36": "2yy5wFE1z4ZTnGphVsPWh23GsUiQ2PvEBgZspogtEmACsDYqjfz19uzhEc98Bsmrw7Uru6GjyGvduuYmPK5XWRvt",
  "key37": "2q1fRXsgNWhZc7av2KHj3vaVSXMdG2cw2YquxUMyk4X125pdp1UVn7VaoANNrf6pNEExfuyXYVyxcvLpkv1o9LQ5",
  "key38": "xkGsSNehRDvF2wYg3snQJjzHogX6REvk3KLjwSzL6E8ZiazF75RuNKXg2xyFFnzixAW7aN4CDNGqZNbPYhU28j1",
  "key39": "zjjKHHG87RAAUwwDBz6qS6UWxASYG8xZdqub73v134Ezw8BU5NVYLDs9Wk1tjmgio11HWSwiD5wyVYhekiKJUoA",
  "key40": "4W79djTvdDQF7EnjNArbpsWdH7jUKEwn6UBUERfiCF6ZKC2ULeHarMVmSkhtP2eLTVPaDjDUcE7u9rimqrrU7PsL",
  "key41": "3i8tP613VD7r4GLwBNLRJHmE5fuVby7VMJaYPZwe9SK2UsDsZzp5avfLjigirwwa46gzmhG71kK8SDMh6WD6U9rR"
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
