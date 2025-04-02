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
    "51zs2KHLEx16WXXad6wZH3cPrvGdNMxvxrQCyBW5qoa4o6xPkWdD26KLrDG9kGAS2KftsYghUj2ALjGnmLGZEcQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DpYFT7NNzBxoqTcbkf5H947n2oFZLVd8dUShZYCNFRS8eYRMq89PJWgKhDsDjtHSmSWD7Z2JcXBtPM1bqYU8Kfp",
  "key1": "zXRrT7xD2vw3XmFPpeTbGE1G69jwnqNLo298QJ7SU7dsUjFN1NP7Ut9uJeBBswdexQQrtHjzUUNWA45WvePmtyE",
  "key2": "36aZGP7NF2qUUxpo3p59YnPmFhb8cjVQ9JYaAzC4jxqmv26dfC7Nip4ULtXF3TQD4n4oL3qmBYmbCh2skERKmTmV",
  "key3": "2SPpNKdE9wCdVXFkm1V3cdXViFXfuLQC2FABoR4x6RXYwr1pwXTK9NcRHV3MTVtopyJukx6jttxTzQaxoenZAEfn",
  "key4": "3XwfGTekerKHvQBNEd3Y1CSQkAY8b8zQM8ehySSKCiUBdfoUcGwxKF3dMjpZZrqv873zxXGUaw7PjWx6Uq1Q8gET",
  "key5": "kgcHmAzBgRpyXMSTaS43UnZ58NzNU6zH6SRTHp55591tuoKTQkoDDq7nqWWTLvzFhw6LLDniCbaZt2cjBTJyQ3T",
  "key6": "3cQy3arbYda1DTjbLVAVyQGjjqDtoRKjb4Tucyg3gHdwWihAbtkWd45iSLjvVusDXbZgHp2bR95hEfapkEJF1HCp",
  "key7": "4AJfAa2Vw1WhRD7guYd8YbMYmx8LM4hW9ee5onhsVksRE1syNiDcTUKqr3Fz6FuPTRRbWp7zgFho7Je7TCrX3sac",
  "key8": "3BBeFoRgXRH7PyotgRMN9jZURpd8m6NjrKsfAzjTcU2zDe8RybEYDrgb2zk7wuuv2aGt1Q6PZgoJUDi5JLGjAjm8",
  "key9": "3v5Uk16CXhxYXwJe6oK9T4D52ses1RjASp1uS9GwqdLmW3Lj8kFWJCupnkU2QvUGPMCkVfhWGPeCMx9ZbfECQz19",
  "key10": "3dpF58ShbvpYWRnGiHacBfr6mwh8T9b3WHYftqL4nG2uDdh7fsrtXSpJnHAMJiECu7Wiu9U3w1HVnhForTLa2h92",
  "key11": "2yUmieGw7sGPKrY7J7TXMkUBzgnKPPaBChv4o6qMdwsjyyz1FLSxJJqx9pyeyfLQFR3hYNW8raWypKbV9zMh32Np",
  "key12": "4f2azokse7wkpUvfTSYW87XfRu2tRnvDRC3vif2cVN23PpnJ4LErY7rxWD8sG159jebvia42TMjggLFUwWRMqXHc",
  "key13": "28RC7dGdEksSatsx8CZjJsvr2DycdaStVw36njUTPfje9XvsqSg5okrZoPTr8r74XVCkGUgKdhuKNwoArGqbEGHn",
  "key14": "489DpyhNGkym9ZuS2nFioV4yq84VbzHix6Em8XgzXte3KZYvoiqX2Jb8SiAAoz58pWQBjQnwBMnjMMsVbgYepqBX",
  "key15": "chyrWS9whqb9rgD5wwufYv6ASzAMRHBsEUWihK7ATncqxGGoY8Tsi8zLUUHN9C3KffiT7x1gceekNELGSgdkT3R",
  "key16": "4M65RbSM3kqoRXFsSq7Xooz4XfpN8QXNw5yeog4EbXJ7YP3hnEXfy3Fi4oTkFxkVGrnE29Wx7KmwdM8LExBaifPf",
  "key17": "5iiubcBXH3mawubzDepxEcCFRQkeQs9DUuu2iW5h8KjhbaDQZ5ow6ZEYwkTyaGHfECRvDTQVeHX4cqNkJZrbK3Nq",
  "key18": "BvQswqANHjxzKtmqaHU3iqXYCf9Ra2HW3zFPGsaQD17p3gjP2JZPv7m87dpwWuVPepmz6UpBDYp3z9RjE9ZvoR5",
  "key19": "5zZkYqLLBVRwp8oy69XDVaKfJ514JDq4F3ouKXGKgs5qqVZDHTEjhf3xdtw2yKEy7zigrYqGgcCa7rkRrfdmRygR",
  "key20": "5KYbGxMDDFrJy9DLe6wHzQgwPgexfmaA14CeGJn46xntQKQEvvrQYmmsHzbZ4MyjmnqL6otVFbWEZ6hgpTLVCgVj",
  "key21": "3dpxXyVSnUxxqqmcZwhrTnb9B1EjKYeaKCkDXHNZxvaQY2BDaQvWNSxJoN9YmEn7zxQeTSzsyEvY7HTm1fDX6UoY",
  "key22": "4G1bHaLGpb2PZ3DSuys1tcBCtn1ioefw1imhFkCJazq68hJcBB2R5UP5PyFEmVQpWBFSB7aDGcn1aNxvNSrc88yr",
  "key23": "5Xd61PduX1ZjDQk34Qw9Nbh19oSHtqomHezJ5PcYFcS5KQRfg2X6potzB5Gd8zmXJBDqVdoVbtB3xFvvpfwn2gQ8",
  "key24": "3Qn3SJArpmeaBn1gRbQCune3rnaBiENFeb5qANczeoVqNwD2zAhxMRgt8BMi7maKQR7mVkh9cehuh71Tw88pLKED",
  "key25": "389PM7C94y4jWTZSywtYUjRhv7AB4XemsNJ6rJKAXEsnPA6Dm2eg3xaFfAGcGgeNAirFcvLzUZGAGkfXCRPZkD5A",
  "key26": "46DRd6MCeK5CnE8ToRK4YLFVTgZeENCxXeWghLN1EmZDomj2YeqbsHMtySNR8VECHoiaJqR7TxFSiKLf3NvV8oPA",
  "key27": "2YkdGAX9i2qZSKbZdFZS3d926xFdvGBxP8UbtKyAQSMC82gFh3GM8F8LEYfezuW8qEejDXhqNNnSs4M9UJwJsozt",
  "key28": "Nj2eDhSHvknKJ6Y8gd2CgkWAhUY5bvRLszaTaGN9ByKCNTKFbeLAUxENVtJbWoHcTcxXtCGWpyQcbBty6ETufMM",
  "key29": "4N3hCv9nx1pyaNJxqPcR8LPXzq4XSUsoiAgtCD2ykjxth1KptYrysUkDiQ9dDfZ8C7gCGBmXsod8imK8NvotrH3y",
  "key30": "3cu82syXEDrb9UY5yHvy2MftmoCGupM7RJi8k6Xvyi7FutgDzR2iUuS3zfo56LjjWTDV7iMYyYyprbBqMhweE5L3",
  "key31": "5qeQzxYnPxZADhF5jM7qZtMdZ7XsY6ieTkG5Ha1rwK2rJeETpLJra9TqeVr8Ehy1w1bwJt11JfL5mGfhMubCDApj",
  "key32": "uXE7hSZzsKrLe967V9rxx7Pv7vUPoQkRxNGvcFQXwEFVDpVMgqRsWX9pUQf8qzph5FGn6zQR3o8Fc58ycuihNVK",
  "key33": "GwEWsA539Y5bz7xLDqnQYTrpDTQ7EdQJ8235rC3Z8AXqMjGCfZbSD7TK8CytFtyGhcjFqA3YbVJrDbeyEnxTtCy",
  "key34": "5eky83qNHtdy5X61zPTuaqmm5fwLzeiSATmg7EzMGw2RBZ7FYhCuEbPfX2ozz5enWrVybtXxWZbifhqtohjEvZu3",
  "key35": "4E2T694F2rkRAzyk26cJ5nFoABGr2p6FYawpLmbTYg7shdg4mPQJVVoCAhJcErQquaCNDea8utNr94dKttwLDFZy",
  "key36": "5penV9fVgpeps9Jx7CrQAKDWBq5VuanGG814NPwYhhPgy7QBc7LaLc6HM5usWnVbmTnMPobfQFjQZsuTV9NYnFWi",
  "key37": "4ms3u45S6uPEA7j1T3Xx9Ridy57DyT4ASM6ugpyeLSiGYdGjAUUMGDCGQWHqHg6V4JYA2xShBUzxZaVgvr6K9ZZd",
  "key38": "2pR6fcBCj8FMUwBX2nqWpnicwqATcsQVhogRryeDDQGeC6FCgJ6yMQPrCZccNVsPKdqvVyH2T1HH5i2LQqQ6pMQz",
  "key39": "4g8GaZub5EQBD8MyJc2saBiujwiQcfTG4mHepJFMCQA2DY4gdXWYUXfVkGYKAqtzPScpceWL4SWzGiRp8Usj5dTQ",
  "key40": "5WrS7zUzsi8tTBbvS1qpiWCPBfXQQ41f96y754E75zkzC5sE355wSHqbXDMr6mnTVmvtjmf9x63JD6NZXKpNBqhe",
  "key41": "3hquBQPXUULxiFm8qb1oRM3tnSSjSJZ7ZhXURa5gjr4PV6rj28sSSb7YAdrYypcHUDMz2JRDrtMR8fNDXJVVB8Ro",
  "key42": "5P3Yih5R6Kdzp9qRsUHgdvVaGHTpLxzpw4T5uv5B8cMjsD7TRjMSDnsqAczEMC9x9m4yURS1W5puHP9yo29ArRCY",
  "key43": "126PoZaNcmQoKHN2cgBjyTHJdMeKo1wxRJ7JVK4g3YFHGZrXoekBNU8diLiooYN8Y7cvL7s8sT7y1NLjZ9E14QVH",
  "key44": "RqEaXDNTzgqJkKAQgm1LeHQZKKBqs4VtDEvZKDbks24KHMEtZDy2UjhPkeME7pcRV4jxAMucFWgyPuAAyANh8QK"
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
