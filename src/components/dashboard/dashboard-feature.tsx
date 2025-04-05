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
    "64RqUjmWDvJrQ56dmLHgiDDAUwSCzfgZpUQZPmP7iHHw8NXudhFg8Uot5DpqZfZwz88Cg4CRvmHEmLw6WcKAtrzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohfrGkHQLKxoGSejixaKsMv3xDUPYVZEEsYHy9SgKJDr6yT4UgQetkXWsC1bWFH21YA8a5YajgSFdcpvpczyMee",
  "key1": "4kpqec1psgMsRDMVWJoJxQdTpC7sja1S6V6sX7PbxM3PYTheUobVpFcNJwQfZomMaFq4CBFi9hvpDrZrCpbFPN4y",
  "key2": "5nmqg4J5jpCdUETW2p9gwR8mzueFBxsd6jYEGuvDA2aRC2eP9wU1tpnetRxq332uX377KhZSZcxrjgnvJ9NhRei5",
  "key3": "3uTNToZ9GjqjumfVmUbSpvcTU5FypLR3m9MLw5z96uqBvJVeT1Wp2rQRBXXZNA2LvKJJbmxn286FfvoWBj9uX7Wz",
  "key4": "2wHij3iwh3jx6EqjR7aWqME3MvBdCyWBKftLFDvxrmXEcCXb5mYHLPycgrQcb6mQmRzsMM7rDgoJ8HzhLrkxMP8E",
  "key5": "51L7rLhaGzyk2VU8M7grmUSS2ZoUdeypR6yWPb1xsttKA4qyKVTipDPFQS4PGevvEMoBmWgX7ypNuGUY4Lcxa7YW",
  "key6": "3yVozE6beu5euT1uRWQn4TECgdh2sVaxMz6beS2Y4pKxUwZZNtefW1c11gu4wbGKvrd75DfBMas9TXGgjj71DQ4b",
  "key7": "4bg65hCQugMCR8YjGCoEAY2tSKzKM3hUaLkAoWKtceE2is5tdWWuwAiCm5TuHMv9JrHJfgGJTfpxSbmhweSsDyt2",
  "key8": "2NaPqsRWnDfPR2a5rxV8MFURJwZkLRZCysvnyoqU1vMbDcrCrC8QG8Jjb3E5zyujcKKNVrrctndn91mzZfJpigVL",
  "key9": "5EF11nBJSZXeu8dq4ffAboJEVNnEKU2hnWJWgErmFyYFj4RyBqQcx68W2VPhU3Wf6rH8SCaTRwCts7HFZr93eogp",
  "key10": "4AGr1d54CY9tWDrCgJcYHwGPhUNQeyPSUwrQBuG9LgL1M8wYDYUqa6U1f6WqQ7Hin711unnGC6TAmZRvojkSiG5m",
  "key11": "5Mo5qLMyDf6su7ppNFhWaLsPdpnhm3UPoRKT138FYWGPVxNRtcapcxijRM1XMXczo7hJzMjVB6TisKQGe9w5DXd2",
  "key12": "sT8LshW4dWh4kDpcabpYeGeENJypbJY57gkAcqzLcanYi6TpFBNsLwreAJXtvjfTXxQypaWdUEpByYMuDioavg6",
  "key13": "4NeaVtfPaQjLMUW8nNPh4c7FsjtvJTtHrkU3DQyabuHj2Vkq29Vc1UoGpQyoCyGFo5sACEqyG2poMnVXfW56N6w5",
  "key14": "33Hb69vzULqKu9uCqqisPv9XcJEVUbuoChDeDQkMxf4u8y846YiA5vJNoGiukJoj2bQnPfmUKPzVojRkbYaJ2NAc",
  "key15": "WK8aTTZqJjik2EaV385qduh3jSZopPFn4v3AbCwfK9cznKftvVRiqfs9UaDKvVGvvB8rwDkPicBoF6Ed7H1WjGA",
  "key16": "4FGVKHXi1QBCDtXhPcxmnJwsKeVZqvP453q36D7VYVJxfbwxeAvXko9WdMZa4Bcu6NPaFK3z4oxCwow135Mzzhmp",
  "key17": "2rbDKrxiTaDa4H3xN8Wic8efF5YyQ6EJBLjq7ABB7d5B5u9y4oy65yGgaeSMDTtjZth5aicrt8SoA9CES99wGXw7",
  "key18": "2Mcnd5rgQCSdeMEt9ob7UaM6NSf1tM8QxV1AueK5zXidZ6xRBkZk7e5WNoTowX5nZVgdfcmpRGWi5jyTZ46z7CBx",
  "key19": "AjV1DvpTR8UvV6trHq5sdvxoQHV7mSQfeR9DUyjt4TJ2YdjfUkUNASEGEVneiM7At914sRWxL1ZvdVmhhDzZLgx",
  "key20": "rHg7P9yagvgTYJdneDM6F3E1sraYMsj4MHjiHk363WNxCBDXodYhwaUwGZNyrvJ71o8SfRavECvXfDgz2SKghJN",
  "key21": "MaHAVN38a99MmSgzAxgUbnFMQZ4GjzUw9WXk8CjZ9ps6zxjLAoTTuQVUVADD8Z2zQtPaGVJMhpqHig8EXCLDxLp",
  "key22": "4ihR77qysfdBqF9CVhwjfJtXoR46docWkJ5UY9YwyLgM3sdWgTLMjcoiQt3edZZ4wRHUd3sU5j4FcU1yNsGtbco4",
  "key23": "3uomMA1Mn81JuTVQN8cYTMnZCaaUG1oxcXfRiKYHsVLrAE8FuwLRMyrkbAhnxvThz9FY8WqdbP8VxHrys2UNyitv",
  "key24": "p2EJAkxE6cYLsNoB3QjP7vi1cmZemSBCStsLhwr49Bf8y1De3Er1monaUCZEVo5zeLBVscwL3H6AGHCVGvJWNyA",
  "key25": "2nQorx45AYvCMp3fut5DFWuENTrP2EAF9DG9NSfusUANy92N7roCp7ngV32eBYqEZWHMz6mcKrXoyJMJe46iTtpi",
  "key26": "4exHczbY9erEehqKqqheNs7zyBVfVJDVsaRCRowtwE3jLte7JERxsnW7zYH7rvb5MQaUneYSWgPAJ2sFwRE4UFC2",
  "key27": "4XbJREPEEsmDxNNzn42DwJ1rFXDZKYd3v9qNFXujasQLzVA4Mtqsvm7zPfrJ13wBXzGi3ZCbzKHCSxAPJPH8WNof",
  "key28": "3TSCBVfMYQBRsPaGgDyGa6e72E4HLJHBnofv1FqBCiePfHDSdzNYNxMoHmpSJ9vb9T3sCYLr8qsrfR92n1YHjBEW",
  "key29": "4W5BeowSHYxZ3oyF3522FLYJBFrE8195uGRhiM5fqwdb2PqbjYdh6K3aSii4faAyJGtaNrohH6NZuP9ffnpkiCbM",
  "key30": "4VEdbt3dAWWG6MTBDmYDVvLHVdozLVZbeuCyGgsT7NpYECARW7V3MWEcySqBFA81RFVKHn9rqaTHRhVPFaKLphnj",
  "key31": "4PwkiNsuhsRTdKiHh6CWhdNotfVqRg9qi7ovxZXbbsVXdqdwZHtAo35LPjFz54zQfMmvomyKm4Fb8xUeRXQemkj9"
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
