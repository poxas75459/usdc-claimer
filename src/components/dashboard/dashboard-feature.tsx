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
    "2L7etWicBS9gJoxKBRzL8RAWZv6gXe7qjQCSzywVd9orRwmzL2qUPKrVZ1Emz8Y77jQcpMejMJkkzV3her4UWrmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mwz7KHTAZ31Cq24cBmirKceYQFLRLKYjw6F931a9VBbE4WvNBKbmLg8WNaGGRZM5fQrQqtr5WBABnqc7f4eJhJ3",
  "key1": "43jVjo5zNyvgMn2Vc3ox5CrA9vEvG8UsFzY3qdZDacDhEyu8s3mCqmzYJw3ac9rP5yuNDeLLaJkDC7CY3tpf5zrt",
  "key2": "RS5wxQz7X6mnGF8RdTfwtYw32BqhoL9BXWzGQiV5j4jfZSrxiiyDCNznEtpEkb9QnE9eUQ14mwe5dCGVx2wkUjF",
  "key3": "5bKdPFrU22fFWVcCQi7y9xbGoUN1SHSo7jZWBAkyYwFdsd69UJLqDxtkEAC76MKfdBECi6jSd7ACy4KxWtMroosc",
  "key4": "XfDyByPnJoH7rDyU1x1Nk1VTRk2Hg5sKzmLPbmU3qgjs1EzhPpKvBFvXqBHBJ6MvP9MGC8PmLLfoVctSptFRVoc",
  "key5": "2Rg82fh3Eui8FAfQpni4YTCHdpETbcZWgiKuGESSxmXy5as1918iwpxkLoKW6pY17dbKB5ZVRDsZokt26UGddsEc",
  "key6": "APDQYBz9dFrmDwgsnbvhkGSTmXKVC5tyxap2tPC8bCVW1eNeHrDwHASkp5qDdJyLBU9op5fLqG86ba6fVAuKZpu",
  "key7": "5nEULR3Y4SNsoVbQfbx6CqNWgU6oJ69xZyhDxZTUJFFhmHcShmHy9A7vorqkqNzQbSagqMpiCKFaQumxUdrazLo9",
  "key8": "2ftcjE3PxYmU4ZPQg3pFahR3FhFHc24V2nnXBpf4zE12wsEK6ajUEUH24fzW7MWmmHbYVkzr9JerGH2bDCz4Sexo",
  "key9": "43earQg3KHUYKu1GmmSzXJJP6DyHBXLeGt3STqDTe7vPP7GifGpJviWXHzjavgxMbtfhj81nUTSezd2ZszJzGcHs",
  "key10": "47MGhvTcB13EiUb4bCz6sNP1ARUVRc513Mqri6drze5JNVA2c9Rno9FE4irafLKXukymU8u8VrjdfsjWfRvK1GNs",
  "key11": "44ASapK4XHi91LRokZghFMNpub5WyLLxEDA9un6hFuMARcrfppyyVmoVeDhkpyBEJFDc2tmqUWaxDXgGmBNTeVAA",
  "key12": "4Esvx73tBT23DDVrRmLD5k2w3YMFFXRLTPvqjgMwjfXN1H8j3eFeR59waLp2BLv8wqnefZUfCFV2inmkx7H5bpw8",
  "key13": "2MsAYdci7RP9xss8h87jBXTsU7Qo48TqKm6WiSjZG1Q8G1tjGQ62PM5aMyYEvG69XrvS987aXr58ZiBw9UuaThCe",
  "key14": "3DG3uU4BrwefD8LPkVjTMDXd3LZLVfBPTzdqaMNbYzXQfkLoQkQSCL3QsGShAhhSmKbVECs3mKzXk5cVKht8mvHY",
  "key15": "5zij7UgA3SbTEdoUFCcY3cKi6YtzpSrGYAkmaMCuibsHeabBbov2KLFbTBek4pZ7iYAZNei3MRF68wbi4nqiaWcP",
  "key16": "3BVG5GoetwGNsBgbexJQjptTijcMq28SR3riHAwnQmNTB3Aog6N6MuwKi2Ty4Q2mzkuv57bKmN1NsjQUShFyTiri",
  "key17": "5H3aZY78TghCAXkpuj9N4yisA4jocW45jzkJ1Px4hrjiU48oSjfPwUuaKyefAQZRzFuPhwb9PVoENCcC9E8ZmKWC",
  "key18": "4qYQM1USDqc16BfwRUoFz13KrGB3pnNY3C7Wn6CBscwMx1gGicEXVcETvh1XHBPdxgZK33DPeHeMuWHYGjALhwq",
  "key19": "3WWuXSzenBQfgYBh426JFfS7yCMzyd8tg3ga7ufExKbZUEDftwgDFZNLB8GnJdwE5LNSH6JFA1aU4xMiDiKLLEWA",
  "key20": "3Ugi39mg7xgAfemYBcG5ehKcSa7nuk1hJbCcufGJFZcKXrQawQTrUHmNHUAC8Lqnp17sVPX21izMiifMbGMdzMFK",
  "key21": "2XEA176U772mKNabaHPR1nLHpZAoHmLLvVCcsyo44aTgJGsyy4Sti7VLNm8JTvvSH83N7oey12XH3WjSmJcQVgLP",
  "key22": "5JXZuBAYVBytrYN4HFp6mvqr5R3mvQ39o1aVfaGbqi2DGzYheMPYYtLa5Ak7UvhAZPVFRK8x8DUaqRyEpXRV1dXL",
  "key23": "Qk8g6kYVWHL1LdnobBUm2YC218z8EZvyNra7m2Y2cwzFa5qohF4rK5wUTivdvRyJUJZwpjQ4nfu84NUmf7pybwW",
  "key24": "5K8VsXjcp7e6YuioS7bGJPMvFrYqKLbAF8JGsCxJVJg3vHrntCuGyxLW2qKpJGjSKvZLcLYNPkp67tBHFSxFT8qe",
  "key25": "5hV87ndvAejC8diBbZrE7QiAxA3FsvNL9j2CP1twFePez8xEa5dDkqGEudj8PkZ72oNdxwUVWpwgkT3AD2sPWbPF",
  "key26": "64XmtqX1sH64C2KWUrbEZK9rZk4FhRmrwGCfsVr5a96xLPeQjwayscHrHVM4hik852Fbdbf2aXcSKdDEnk5mqWAq",
  "key27": "3vbGGNVRFhqf8mH138KheuNaZkxwuj1N8rJRzpcceNTLYqWyKM2wbno1utAqcwpZcZkZ6gWZfMQH68V3HT8ttLvP",
  "key28": "3qa2fXeewJ6whFtyTMiun3yfXWL2xgVajDvzCKwmLZ6E67Mt5QADULGC9QQcx8nH915SUHX2SJGugUK9cRfdsgNp",
  "key29": "254NW6FfEPTYXKBpSNGnCr53aCgMECv4YJ7Jow7YnSggK18GbGcivdZVKUC3RJLM1ucetxc7oahUUmexYkaNWoxq",
  "key30": "4yGGWL3ZTdjZ7TCMAyaJxMHp771JWPYyyerfCUsxoQJTQQATYpAFzUaQjkcef6UeTHK6pzqiabVKCeWfGxv3qD1z",
  "key31": "3udJwaBrGMk6JZE8fJqUZQLreG2ZwZLDknZS8WrRVFgYU1NXsuMsRCU3ECy1CMxoBY2dVZdUmyQQQCM5ftSqHgi9",
  "key32": "64rCcAv1Zxj98xKwTigvBrKW99bJJQ4c3e7ELWkMVXw5iir6m4uMbqnXpnaQ7U2TCry7j2cd54PQGixTYeW6Sr4z",
  "key33": "5ugpeAKerYPmvNAkPcTC9mi4Yki8zdfhrkVWFAwJRHc3AG8noKK8ip77YsACYXqH3PGzSz4z5nr9x1aCKmuEnHXX",
  "key34": "4eMvUnSrAgn6K4UM6i3thhVFtDfzxnMLojvXtDpPwWxDU4UEDkYQXzZEKFrZEU5ieenpDsgTYoQjUX5fpz7aUx4v",
  "key35": "a2KYpbHCPP5MtmJLZkBRSTjwWvmPqoB63EeKrt8Szkhph4Hxxz5sSF2oMNnyg6tLqJJUEK6YLAtvpxBvjwtmHeh",
  "key36": "AyU5F2Y9ZbMneY9yFXSRq86tXb5kyVpojbbZCRhjwv5uoYVhuhVKDQQcP2gkHjUcWKnR4FHEBVwegodUMQ3pSGv",
  "key37": "4xUrGq6p2oK4Z559HDNBw6RU9m55fK2Puu2FFiHL5w7U9Z4JvEPhF6yA8i89pZi7Vx9KsCjDhFXnTFq8NYZuazYP",
  "key38": "5yecvNvb5FEkQjRFjskH6UnjjNSsu7Po9d4J5ha36RD1RhhSinj7EPNQom2PzEM91PTsXXVhkFCsbLyNurf2rXiC",
  "key39": "ru4qBuE99yj9GtRFwD1HgmUHG1mbosbfkhEzzmVKyVDfoLThibuGBPdattq2TQUyN6jRurafr87KN8URLch24nD",
  "key40": "4yxzUjmKRYEEMzYpdYKUcT8tjHuK7dpHh8jrjGrDJPzZyvW48rBGwQDhE4GCksvyV1YatJ1otA2zmnekqFKkuVpc"
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
