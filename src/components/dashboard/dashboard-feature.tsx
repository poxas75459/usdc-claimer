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
    "3YwBChkSwYSoqMyJRbUvCDUPZG4p6RrJVHYFj7CwS6Gt2UiY8bn3sAvwFyWGG7NBtR5uVknaBHuwTwnYghKA681d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWqkPM4U4DLnkDsfYCZS9c9imt9DwnqqM1M3G5fWrARceGXAakPpMrZHmjJ8nfq2G7K3EC3Gan3qdpwQ2V9afto",
  "key1": "2WQv6kBPV2HMgQuv3PN7iVnk4Frit69NM9hXV1SMSM2DNzkTmnJ3zJQnCUzkMaMLn9Z6BUMCzZSToC8S3LzzXgFx",
  "key2": "5itHNNVdRqXVnsPVxsjo2VjJHH1AhRUfvMr92N7gya2jJTHNx57ezzCRhzvp1M8HZQrdbtW9cD8XFBtkVGYu5gzq",
  "key3": "4HJQK7bVKMA6qd9avso3oBibZwTcCxoMrkXNg7f25cJDw4m3DHHqw2gDv2yX1fetcZQXMeF56JS2c2n5AGBJQNN2",
  "key4": "3sYgzbqgwdM4WWqNzJWzyDbY8DxYH9VF8mkungQ92zi8R3AzdBKakqm2jec8gZwGmxg4iuznRD7hzFxzPsGzsZkx",
  "key5": "4SdoMrzbLaARPe9z2jxXzJZKwU547ToNpcFsmcm6vu4X3UuADdK1Rw7o9kMr8LsdsbzToJQkqixtfBWdMw1naCcj",
  "key6": "3uDKkbMMHYoSw2T7p4WuBMzJuWU6szq3VEq4HiUB4dKurd3rQsYCMVbJ7vgQLDCisQRtJwyT4E18KLD5BXGwKrrN",
  "key7": "64JM1LTsgNMCmPkqy4GhB3ijv5UssLcrMsxC19yxBYpaiGrQrbWhA6H7kJCExhVVotbVKUfC1oRTKTMdFLAuiPaD",
  "key8": "4D2zDPVpYxaaEUMfP3uPWpPKR8ff43SyjKW4HeQMmFReNPcJPvy1hGN6ZLs7tyUHcHvvVPAd6AjkyEWjqUYC3X2f",
  "key9": "2Z2299Y7RGAkTbzyjHmBGuELcAp79eELy1m5zaVPsE6kKKCHgATd3C7dfsdWsutYD6Q2Vku5RqLv5J8uAhrRvSmM",
  "key10": "2Sy6hPrGrnVpomLWyeRZ5FGQUfeZ2aZisFHt91bWvxsMaeCbA9MHq7LH4FdPsaqwMHv3TC1Buuagcw7uTN7uZYHJ",
  "key11": "2Rc5oVjdtkuGim9HCyHeTMSjYY2WmmBgE8tYEcjMaHcSHDpy64kBt5x3STgj9X1bUc5a59rf4GJMvFvugYwjTrZH",
  "key12": "kaLULqBn78X7JymTXeYHhtgLhAjw3GFF8tj6qVD8tcQ1ijDfU7fZ7JrFPJAj39eKxvkiBDdDuz3YncUKc5x6uig",
  "key13": "4hKcuUUxWPvxTkfHbJtkQSmWhzrttNQJRuEXFTs72ENxZeF8aMq1E1DQGkrehNHGgnXYXinLVh5rExTrfW9Pvq5H",
  "key14": "3MyBVg1cdkLHovZWRddv2hVkpjq823CnXHx8xV4G2LYYZVZkwZM3cePCCV2RyEYuzrD2f9RWa9tc5jQSgKE2DRy2",
  "key15": "5mdUq5CMR5DiS7eUzkimxqEVP1g8N98cwmQHT9ZcAMQScirZhjYrdx52rFDeHTVunwvhgGSC4TeBs9HkFC4uePPo",
  "key16": "v1Y1Xp9xdeJ3FUzNzoQ7WQvKNmBSqpX6uUJ8jaBZpUFushaueE4Xz9Q7Pm2XJNZstkriT5LBTcsp5wZbPyLyGQ8",
  "key17": "4rRdfJywBnGkehm5RrH8R5FQjgnwgKVmSYsKaSDNHtz1iGJfNcn3gG7d21fp4yM6wCHc2RSQez17xe6ujytbcooL",
  "key18": "5hCJ7rS2CetcxMAxhn2m2LpNjJ2JHLZTnpFeeZGXkFGqJFUvePEubVoqQHfhhwEMsNnfGdKVZ4NSgKmGhLswQx3a",
  "key19": "2ZdrkSvg3iBoDJrd7refSPBeKAafDUCEP3NPDWAMDoevQq2WdFd1cd78VeG4TZESzMFmoamTJPTPCToChDzZRWs7",
  "key20": "4aLDgh1dqhwRsp4BuU1aDz7grP35UWgfYMT2iziq6X3TkJdxj7B4TZZMu6cqVirnNY5AfCnekjBe8Hbrz6MJVXri",
  "key21": "2yBi25zs3XHHLMxqtkSRzyrtxKx6oN6YNsgRsUP4cyeAXpy9tpTzNCjQ6neaRQhSrBgq446mNE6j8hD98XbWJeE9",
  "key22": "3RXbUJqAxqeXZoF48BpJAJrHSeWUotHo56u1Nix1eQKw44bSwqCNEaz8YiB9grcgGipd8xqzGRPomx2PaJZAsFF5",
  "key23": "5W3orqejjqy4ZEF752MAbvydRp9aP2gtbNLUH3vsnQFnemLH33WmVQK5CiEJK4AEmzrTnEHj387ujKSU4LYf2bk4",
  "key24": "213DZDVRDVQfY9wU3VCGQgCoKpaqAUdUBV6fRWDjn7GVbKA8jeziJNaifdcDNQpeXRfGuHmoJDx6EjaZPPSgY6Fx",
  "key25": "moC9kiKN7jWEMPh1wkua7DzVBuGRbErP79xUTk6CsGJEmytJZ8yP4CPHXqXdMVcXyh5EhMr286154agRAi1RwaD",
  "key26": "PZGSuUhNCH6uENHa2QBB8hPxoFGtZdCiUU43X6ypzMmXc15Q5TAhwt57uxY5BQHf69PQLxmuJFRtQYxj1dZmM4Z",
  "key27": "bz2TGtsEvrTUzcNY2tPA5fYzXWB34NUxfUdHbs71QF3bhCXqcguWzyjKeQXDPvJcr6yhvivKGYNdQC7QF1C7KEL",
  "key28": "4d7zEmsGDGwkzDeFG9HN9766gdKnZUGwPrvn8BmxrrrwsEgVCoymbJE8xPfFY3m8G1oAWShgMpY2FQtqhiaMQxt",
  "key29": "4oZFHExNcZ2MzkBYqMzCxHhPny1XtHUgiaKUDvxsak5rVEqhBsdDXhXg7x5ZqBaEQybMNLV7nYDzeqYXRgU1PFpm",
  "key30": "29wwBGHN4hsRqebYohxBJbfWGGfWh4jrj7Yz1BxnNvLLXFQWGqP5B2PCaEkUvwhvFEzhr2QwCNGJhEJgrhP7QuxL",
  "key31": "5VD9TJa3NHJCNb2aiWday1kk5wrVG2PZAJcqzEnHf9nRmSv5DMwSxFhXcF8XtbuqzZzB3GQoCcGf2ufThZwBStyb",
  "key32": "5u2g5LzW2gEyxTp69WC1qGgEavXEABF2mghSsjhy7aLNMLLqw35dBSVWonysC8LdpA7S82i5iZFZhJYAhZ9df6Nx",
  "key33": "2JT4KoHfmT9zZieBrWQCZBKJXeaZKvDza7f1fxMpeKbZJjCPe6gPPnaab8mHG2GKwaWBDK3WYHFLbqBKMqcu1Jn9",
  "key34": "2esV2dmH8DhVevmvo5hTcSY8q2mwfrV2uVmn1sVUYY4HBGbj96PvNCAgFQ8Hbh5UqFa3jvPTm2wpwdq2f4hUNiYx",
  "key35": "4SJDq2hjRMEB1gfAFnNnnoXyyvhPMcQw1kpVb2u96G9Ny8Ksk3Ca7wxniMo61WcjoUx9ATEeWFW1DJsYe3rNce8w",
  "key36": "DdWJgyvGRgFFqX4wivMmUyYtrTE1MvNYb2E63jPxPk2eBMzXjP7Buj9cLw7iK65qRPqschkePRQEcu9iCvLh9cX",
  "key37": "Lbv1oawbQR9jLwuR7f9oct22YzDKr8pj6vYQXMQ29NVfhuBqN5LidAxqiScsn7hSLErqEp3hcHyYF6vjhSpYkSU",
  "key38": "96ZLjDfVEu7LYoYL9gPCdxypiNQ5RbWwg1bVEmVic7E3JSa6eyvMkzbTFm7bRBWzJFTMwhPsqXGtjZvgk45yduF",
  "key39": "4nWp2uiLjVCrmdXGCPfs4fuzzt9ir7ib1nbuNUN6wmwfKGYqrqCwVXMfQRQmVnqKvkV6RWuRvcEhSKbcHDNuT3MQ",
  "key40": "iJmgHbsMZ13R29XRLfqb7r9yUB9nWbHobquNopjfTUv2uEpPCKWu68ckpRVu9RWJ8i1amstiQn5HEC4Dwvep9S9",
  "key41": "4VwXjg2xPytKo54TZLwXALwjPtBL5Dv7v7MUGaDiTw8x7B1SDpC79C8W9sNwpYvNt5gvAuqEPSvEB22EdeBCXyLv",
  "key42": "5NhyyT2ipnN8hkyY7PMo7n6BzTLhGn5Zf2iTRvukNg9QcfjKDaFgjndoHnAAfLfB2ZfyBi1jbRjnCEuNQZ2fmfj3",
  "key43": "4KX2X1suLqY1u7STe69Gffxokt3bPeqaVM1wuCXFmUqKg8m4YgC9PBUQDEo9z5aGgKL6NYkrs1Thd6y5ioUea6HE"
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
