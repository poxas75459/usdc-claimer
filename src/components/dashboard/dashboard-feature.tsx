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
    "3EPeKu46zbgvvE1KnUuZBa7BkxJFKFp59obVyXKNCry4RYCVvE7v8H5gt3cReX4jNEwY8ikBGMGmtC8hrcrGPLgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y1KRhmkuAzcYSC7Pm2yEAVGAtz6WJ2U9BubrR7VraXx8pEK1bDDhoncy41YDiz1WY9eURVb4rXd5AQaS6zCQWC2",
  "key1": "z7AT5Yu3Z9ordYzsxXrScoLNhg2he5q6p3oFbmg6969EwgLHk4eivpktCrnk59KMK7EFk4snb3JTjEfGByXGRUc",
  "key2": "4KNq14eMBTKmt4C4iMWnMkxbcjFyEaTXWVLjT1yLCzhkotw8P1Y3aBVppwTqen2MXWrpu1ofLE3qGbo3TgpBUGG",
  "key3": "5y4fB2KLAzn9kx1LEEnRwTMtyjpKrwtndcSzMkmyHvDgTeeciFVMZTtLLx7zFfrVSJM2G44bP5Jrfgff3a68v5uT",
  "key4": "wnoCzzzRjgGMRQoi7Tu71UjVyVczwCZkrXMNqf3DpYP2FzX72kwzk7YXSDP5hR4wQEhJ8jFPBwH8gJdn48EikxP",
  "key5": "5HPGDopCtDfJMWbm8gqxsJKd7BBRN8PrxSVAQj28qS8RcubgzpXPNnCEy42sZ8n7i5xpjF4Gns6iCrPEXRjHpNaf",
  "key6": "587E7BJrMkg7xkAJmA3C1g6caX18Lf5XGahD92bSWajEuf9RZUzcX3mXzkoRGs6Z1BPKAqNUpugwZRrDG5S5nrUG",
  "key7": "5mVxgbedkWNdL55rP3EkNee4MZJwizH3ebY9Rx6wKkdpD4brZHBw8xhizkRPVkVYctn2ePZB6mZAynwh6x5dXQCP",
  "key8": "38mx7BNfckNqn6YhRBbZBkW6vcbfeW539yPhqpty5YXeu6TAV2DJj5kFXiDMjQAKWzcsdERMnft9pwcWvGavx1Zk",
  "key9": "jdz4yBguVB185oijtP89ogCJjQzHdqu6BhatzWE8cLXRHay3FQASTVjG8biu6S9y2Gnhnene9NSHSqVFcusryKb",
  "key10": "3tUy8zVsWVrCaDkgks2FyZ5zpRRkib1Tqqvukx4JhpPkCbErVmfPqQK5TRAHTZEFiimbn9dVYQgGB4MK862V9DBg",
  "key11": "menbmjCymvB5s9UKg5A1PoWYqfeRUJUQ14znun86JdrmFWpvLVS5TBGEKMsMqXhMtbKaNU8k5r3Nm77EafoDWy6",
  "key12": "4DNpNbomyijAAjLpWGKWJcJM73xxsVrZxvrdzZ7eH9r5YUDBGcEe9npoMet2te8QHzLf365xH6p6ttmfzvCXeZMK",
  "key13": "4yn7XJRK5tgWuxg1HJc6myriRLE6J5i5qJxNnQBKbprCYjeAJVgFkChsGnBkahsi6ejvUhHRSBW8kTfULN8Ky18p",
  "key14": "DfUPU6Px8SiqdUn2n8QbLV3ViDpJKwXrFF9P8kNgZNzvCZj5TVTtDfpUQrsEhbeQKJNat6eH6cpi8ri6nxW9CQ7",
  "key15": "fNorDqqg4NGLgJHc1GFRbPT1XGtxA5KND74Ry2RXqz2oLh7p53DoR8Q24ktaiaZ4ot9hWSyDAiTVDy2mPBMV3pj",
  "key16": "31c4eyYAqUiExCSPxTkWiGg2zMGMiT3qvYKNTgio44HzrgdWbwTn9b2pGSJC48fcnEZNMTSFGauE3DAZNgGjJse4",
  "key17": "5R9BMP1rUtd1yMEb9gMc98FWj9Y6616pzBZqpcZSKW9uzxup8BgQXb6ck9jEBd8T9vuQixFsX4SwafqAApjXT7rc",
  "key18": "2zDsEm5QRvqbgci2gjnsNPuD1HDym754Tjr7do8JDtR3xRAJKwgwFw78B13ygu8qqGmYMSw7PCDZqy9EM3zR4hwS",
  "key19": "4cmnadzJawki3v9pzPMB9Zyu5hdCcFjuD6RaArbHGVyV3N9u9SdGAZ9fZqcYxGy6sUkghdXfEj5TdMU4SJru55bv",
  "key20": "Yqe7hzarnbjondPuJX7aBbEwND3M7wnAcXLxhAjMA6tNvXpt2K2zJH1RrWjLemoTsTKmhYqZs33gR2gK7F1c938",
  "key21": "5HU8wXpCsbbAxzxZSYTtQb2Wuu2EgnubHFoqB2AHsSWngyX7odRZvqoSDmWg5fj5pKQiY3HE3AzJ8ygXEdwafNbN",
  "key22": "4fv6guBoLcQJohRGrEa2bUvTmbKWryBzNsTaddxCpF91pg2ez4Jj3Xz55s3fzaMfpzGYtqxpa7H2z8r6gahVQ8HA",
  "key23": "4RvmMYZJhEgs4AceLevRUZKcZ9sADM5B3AHgS85oqjJTdQ8EB5cCNkmAwnc6DHcidaKq492E5NKCwWxHDPzbLNSi",
  "key24": "3AKC2yba6FpgHW5pdsDUjQomKuh2DXdKWPwWBoTyJqYULSjvwZdW6xzCPqksTJpFEZvEf88eMbemeU7DRTCnvS3p",
  "key25": "3fMRvkcAx222R5ZfDK5AVfjVaaqqaHDjSgYiesrhNrY3cvciB7u1431zZnsAUZypMbTWJecoPjfwM89rrkFh6ZVb",
  "key26": "4MkQhXkmPUqkkFbUGSKRNmTsRDLdtZKDvkMbChjZnGnZXqJa67cGMKPekMN6hvXaiSg2jngCquRLNXuWYwiq9tiF",
  "key27": "63uXVZx4iqrhrF7zV4YdFvUgwhvb82sYpqz8KqRLeN6WrQ6Z3uEZ2QF24yxNEfv6ui9y9599nCVHWxb3PHtaXFtq",
  "key28": "2kmS4U7daTFGDugry4V4kCxWWHM32bZ6dPW9gWcGhPG6TLT7ojZtYGPVrWSTgR6qnTVWe5hR3nVXha6ZLkxMShPz",
  "key29": "3u9NbC2RVxkvooYN6vRpVx64MGEPBhyJU9VpTyMuXj4goaeeUGpj9GhEGCELEommyvDQWzM1ZASDAZ1LoY5axPWu",
  "key30": "4ZM5MaNkdCyJWT1MVpRT8uuoLwiKEr7towsYW4s6EhoBXyXGUCbPBxAi7C2SwpT82bmg6dwCMoDGmuaoPrn16ew2",
  "key31": "8wLjUqW7PKLNkGTkNw9SJhJwUfS7GGDfJPdFXEUNjDFvULYTgZBTxbq9MGNZNThDgZwqf1tCesecetksndabpQi",
  "key32": "4DNPgjPZB6yTPrbAgXH7uiDJ3VNPLXP9Ac8RcnxVoMVyVRRnJhwHxxmJFkGA8fC1VQkbxRGQUXSWhV4f7jsbVQiW",
  "key33": "EaEe3vTURhsZ6jV8NCPTdETEHXkSwr4uF5Ez8LWLagr9uqGMYS9aHFW1vqEpWzM4VmQujpVd2sjP4cJLJdArkYJ",
  "key34": "5VMA1wJiSM2H4uHUH3b1HvYe2yukwTFKfw77j6PM43Z9bi23UFVGGFDLK9Wg8zptzAxcHF8Mdz4A86fsFw5gQLSC",
  "key35": "484Z8gdjQ3VshYhvj4JAsMRAxyZbzuMt7zxqm6cgZPYrdhDR92hSqUHY32W82RppDG29JEBYbyLT4m9oEiMi6zcG",
  "key36": "2TGgbDLVc71NJYGZHqMafjNhTYGA7DWfq9pzCouVV4XnBYaaddBgoLB682SVBqe3BH1dasxgFxkqdE2eEFbnAaeE",
  "key37": "3tNaUapcrujsk63N4S9DJfqkRKhtzyHFxyQqMgVFKEPsWuPFuTbEQuZESh1UpY2LoKykJEdauVbhKsvkSYRnQ9Mv",
  "key38": "365b6gV6Svp8qoeCXgnU49LtGvhKZbKn3STyfbNAqKKMaQ6MJuCnyThkoVyjpJcoCZqExzWoB4tEDbEAhUsGwDjL"
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
