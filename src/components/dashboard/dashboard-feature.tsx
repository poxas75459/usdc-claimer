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
    "27a8iP12Lx18hMPoHwYS3YaDuZxz5GyFwhZ2RuY6KGmumJDWVU2URBNhFZU4iw81qErsBonUiXB5ZE6NSt3oXFUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474oNQwn6zycA6p5E9nRHVFwd33EMvRwQzbfmmwyHYt7qvwFLZWkmAWdWS8jd2vFUXDhsFydvJ6JcGS8L6zHDZDx",
  "key1": "65RfEZLGJs6b1UfChbGBvXrtHXAMEZ6cMXFxPKN6oBYKi4SremfTcN1BSo3fNoKLZRNkGezokfjsrNQFKsTk8dok",
  "key2": "3QA7t5xHcrNomXGmFT7G9CFbZtbmRgPCkE5Bd6aoWtrP8aRWq1cGuZLkpKuiGGwFFKZb7u9JfhHBE714CX2CNK2w",
  "key3": "5Xc7SEjMUAUTn9QH3Y78Nr4kC8QNiQ9wHQ2tfx2S7oy1Y2ptZFa7npXfeHmNuEH9MhfVTRrFkphBSDGMc4Dxs7dT",
  "key4": "VfN5JJebwkdgtccZjpjj2LtxEcP7tecim6q82X4y3pucKBhEfb5ECgyr7SmztnCzC1mYXg3zXdny3saZxM1xWGs",
  "key5": "GR2d8esC4SZURRTJAr8XUTtUS7VNEzhmo6JE2Eh3tknxoDxr4yGw2v6VCrztAncN63M1d7usVNjTv7GtzvYryGi",
  "key6": "3rGdUbF4LacipBrNLAjeBwW2nnv4EWzGqBJHgAHqn4wDiSnEEQTx976s9Wer3JaYpq8sKtZ5ZM4PNsbKJ4jadrcX",
  "key7": "3SoNkVouetpfdk521VCeU3QEFq1cme3KE1DNTjnccqmts2WUwk3hwxCdLWFdSmBxQ8B8kMYGmSE28BNxTVGAGNZy",
  "key8": "4mZ3QirvPyzQQpnzQy8GNKwCkp3iK6UK3j2L3tSnJ46HTttzgtVzbmxwMeMvJe1S16zxeJbb6KF7oFiTAuSXiW5H",
  "key9": "2oiUPVkY1s5zGYSU2FsB4uu6omGvVpfdJnXrwVb4QBgDPzYzVyiNZMNT8Y53n4rG2rXFkTg8jW1S8KBX5kAd6e7f",
  "key10": "3s84tULGXbSjGhTbxekxwLTNyEKNqVLd3LA7uL7yt5VSV7hgLHRJc6VESumHxsYgKnu2Wmfp2ERUbBGucche2DPw",
  "key11": "4n2WivsNEGpvLKj5Njdx6i7JgDwTv2JNq6NrBKTjmogLGRVT28oX7cYtk5pkPCHmBpf5SVq2wQj97Jn3LHv1dX3T",
  "key12": "tVeGgeVn6F9K5QhVPoyJWFvfTKgpy4tj5BvrfcraZ21qYa9xVaTKR9LrKwp5Esz86XwikERbkpELPUTbuXVUVSv",
  "key13": "2NyuWnqzcEL84KNiWBhgvC8bPoypmsqw4uwYJe2N6X3BYmPRMKZ4pWRuZjfjWyhb3Ao23tTBrJT9ANGquRh3mMjN",
  "key14": "5zehhSxbRak8wq8xQo1sFUxXRa88QH3rvWbgEbvHrwsgs4aYYnCM9xg4x2TYvNjwYPcEoQPHizVw9HfEWFmJ84yh",
  "key15": "5CeXvazyy6sPRCSLWDVMeFMYTVyBZve8jHfJbjotqsNS7rkZDT2Ud7JBLXRPKoQwjM7hEhzbrfGfR2b2e4JTfr8R",
  "key16": "4Sv8xiSk48hfeSRLpdEVKKH1UgGjaj4xnN1p1gzaMqRHP84s1zwrQSnevjQyhwMgzfoHJFFqCY2gxYX99arovguh",
  "key17": "2W716rtdnDMVbwk5XgJKJcgzVZXDvQkvMfeym4jRaJMKBjw1bNHA9AK9yLHk6h4YU83AJrNVHiXDd1zJzpt7jQBj",
  "key18": "2hTuRpjL2rtdKgrXwY2qMkbgggXTA9nNKrxpNQ68yidyaWZ36zTgSfgUBntfvUokgQQuTu1Z31iei8uxH1aY6oQf",
  "key19": "3puFovWsdFQ5w5pcJHdhYymURoZ2SCwJm65aEqgz5Lvx4xpoMxhnJ8eirXAw1zfL4D4iD9m2NuKx56LPtaRHVe2p",
  "key20": "2LvGTRXLA4Yv4ocmi4qHrbNxg88DqrNQDm8W8SAadk8ikVJ2xBCg4SY8JhRqh2TZ33pxmwmPqaRPxvNqxMSt8iBN",
  "key21": "CwmNfDAqvZAdJods7eykyAZoBKmYfyr7rrfbWh5n85yDFUmF2WA6i5xxSyHhQCJHHZi1DDyE2CSJ1qYadeHhXZZ",
  "key22": "52VABbSwdjhvNWdtEsQhrAKRd6cdeSLwXwkR3qgtzhdKt7ywL5WLJxNPRdiJCzFKGuurHoDN2jwA4Hdztv2dAxzM",
  "key23": "jtZp2wA45xYjsaMBVSTmxJ1TE4xrikAbV5g4y5f3ZmQbsAdcKnNFe25mx9jUdD9sHtftJxXGnmdMzJtVQ54yG33",
  "key24": "2G7iLtZTcaxaGYnVLwGt2DmzGjmx1bYD1Qwy99RbDyEpqVVmakhqmkhkg6PrbqyvR8EHYdu4SSNnhQmrUUVxRKZV",
  "key25": "37AaJoQTvEbaPYNfHJ6yn6cKvK15yFxRQEo7XFYxnQpLHv1jZ7boNs4cfx1zddV1XBjPWTZxXWeBtcZUDGv6n3XD",
  "key26": "QL6fZJKjxxyEkSfSF8DxjzPmFGj9Wdg4Sk7kYZK4JMgjhnzmWV6LYsvV5dZbsaPXhb6bPdaF3cHHd1T9iM853qF",
  "key27": "3Nh3ELEfkw6uB4C5qMDZJzJRL423wHxpGPuJUveg5v7jdU2c55A9XUJLsAAHZDdW3GEo6Qn9yCAcaPHa9Qoems1e",
  "key28": "3Rq3ZTNkFxe7Lzheyao147nDkZtprUMGcMCRa7f47JhaqJq9zmRqrAgXuLpdmwU9mKjV8JMHF6rpM4zsZkGavaXm",
  "key29": "8EZksCPN2rLvsadq3nLPwqjk5ZCJ1XgNR8qo2dwjSxMXpjEnmqpqYp1ExvzvHtNH9XoSEXz4F1EvhhHFKYkqYDR",
  "key30": "5t5DKD8zHACXNKFLUfyRtb2Kt2nCtnRx9J3ryJRdpy756Ykto32tumk5M3AtU5fD6woAmgWmFmZdSt2S2vceXYXu",
  "key31": "2VEeEdRGW9dvgzYbE5Jsp5UFStTFcXBAaurEbDNj5esxHj2S8teHRy1RSiEHqkD6maThdEWbsCLP8aCzj1bMdXxn",
  "key32": "4pmF6hRFKF2WxMnj7PChQiavbuGLSULvayGB5ASFhXk1bDBnSbVE8B9VLMvC5oLfegtkDN7eZZhoM7oDH4FV5RW3",
  "key33": "dqGuJJ6rgaWDrGP2KWAeJ7AC2eaXdrEwgZ9goLYvwQ5qF4eBY7KNC2pquVyEUZndeCDQWnoJYgBc43ZYrP3MrWK",
  "key34": "35PhSTAjW8hrugazqcoYnPrW2L6dTveCYJ9Rn4pN3ekb5M9KYDGVauYfrBncjfbNVGzQD5BHAJ9J9mNw8jqX7fLA",
  "key35": "59GewNJfmAiLjJtvX5K1qseN7xnNBdUaTR1JHisqLD4j6xfrH5yLtxVmV5UEc3jvZQvTbWxDmXighTiBRyd5A3VH",
  "key36": "5qAR6x9p2pBbbGbfjYYDbaDMdxZgwEW5CnHjnDrmqnEtTwJs6QocFoYCcr4ocDBB7tYJyXAc7BrqaxeiWzGqyKXE",
  "key37": "5C433YXwYWLSGyZq6rQqvJboEJ8UAYvEZA7U7xoEPbkeuEPCpACDATLNHxiXfexpXLseaDctcSysDDmTk8JaSkRg",
  "key38": "59qhoimuRR5m7YwwGQv5fqKgp8dEgU4TdVeiCf5UR9y61jtB6asyUcKUhuk8jeK3oB1bTLQh8vbyEXYqSbo1sMqZ",
  "key39": "wPsAVRBwm8XDXjuEQWYqESsHEy81g7LrRXXwCgsEhV3REHrNKhF8MinN4K8RA7yEVgzZtUu3z9SrE3VAYLfA25f",
  "key40": "3jS9Kbi1XUmKtLEb2WCUYsC92NyvUxte8zumrtzgx7GVWJFKH4aWPXScSCo8UW3nSpzBaJ9TktgY3GitsgH7kmU7",
  "key41": "3dJfFPSJeGxyz3k9gkZSdibVgaFK18NiD8a9iLWPPkCPv9qSVSe7C3DrReyvqYo1s1i5ve64VqWpXRw4JbMXXEXV",
  "key42": "2cjP1jEE8Qb8WjmF4369Q9CCmanK5c6BYbFGHLBVJSWNpKSUamXhAZdkT9ywugn3Fmcp2LXcJfz6RFsktVvhcsTX",
  "key43": "3joRfE1KBYmjzf9mom7n5ChNcU5F9udu4Mwgewopjj8gRe4nLeiuXuAGAjjKhyKWUU2CgACqHXaFvczh5T9BemAe"
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
