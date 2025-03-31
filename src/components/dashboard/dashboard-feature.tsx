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
    "4WBniM1VadKxxikRTepDhuBE1MVUBiqtEYYqwM6qM1b8zNc7G2e9C6nYHxCJxq7RdY53XQD5m9iFqtCZTep3GT1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCXvjLrkcgTJBiUqDzLh8zS7yeEuRudJR7EGV7vhJdWGqEZtF7JWbRbT6EKuMkZ4dCu1Y3Jfxv3ht4w84FmMErQ",
  "key1": "2KBnN4RNo1BsS7Nz1TxcusSkU65eABiwZxAhN93RAphgTwoUAhsXqBzD68TWkXV5AoUFTrpgf8u5X8AHxx8Sh4Q7",
  "key2": "5nMgWi33HqZ4UQFA3hfnKmQ1pAUkE9mUX34VMvzML3XXDMkS4LdkBnwBz8rCXeRFj98dZoXJkGL4eee3HKphL9zX",
  "key3": "63EdB29W8yrTPh5K98Qjqzp2AhyxvAnAyQDzH6tRnr2Z2LwkJYAYjrKUKZxdAdQMbjRtoyZ59HXiS82uzHEvpY49",
  "key4": "4hYfQhPthTAKQeao1XpGmfxQ6rPNFWtTQv756FF1y2rj8tmhWcedbsQNLVwqnkW2qZNAyfwmAGXMzPdn9L31EiRS",
  "key5": "4S7qeueSgX6bKkfSboqK2YkAcBnASXFjeqAi1bXTDhzFRpvH5EV4zxQYVMDmSeZuFF6xHeXaP13QsqnJFa3MP6Hb",
  "key6": "5fQ8S5zBooR6WZoi8HaFDhp6AUCAxiigQ2nuoxG2h6wbRt7wHRh8RtNNLFiyQ3AcTqFJxPo4vWwS9AXnnSyAToWj",
  "key7": "4ErJLLwqhYfyKJRhW8MusbvrC4zJZVhQTsKQz5nmb3VyfYLWhbXMRdjg99vtQvNaixz8drAGrfDAJkTQKQWdpXEP",
  "key8": "2b9bTm7gcnPvUbFZeZqx4y2nQHgCiBwi3hFNVe3xnDFe3e9DmtVLRbxneHAbUkr4ybxqidU7KmUxEUFZmtcaC3vS",
  "key9": "4SjD3yKtJegDVJ5PJx13sGDYxA8rEqrTKaKoPu3KnLXVdfWow2BiXZ7fvGJLQtdSHAdk98VLnkcTMo74f64WW41g",
  "key10": "2JKoyeNLsyfi9BLSiNkwbwTTHdXk8AQeEaiC4AxUczwvRAfCyFHnz3CsDApGXRMv7A4WNyGRuW47kBGR2pxUGiqa",
  "key11": "3AKJTfyjKUMjAY2MbvWW4jPiV7B6MdXVaR5MGi5EBwg5fUrp28TSNhQeZbAdkmBA4xBny4NRJgKqKnTC2rjHT5Qc",
  "key12": "3s4cSxCgq5fzkh2KnKr69xGhYJEZuNxQ7EZ6PovL6FTBcTRBSLiPhMwBLh4y57QZpHc9BpuwBSbMgSC3vzK1b6AA",
  "key13": "2ZoxYpAQvexM8EHLyAmVxm6CRjNsPBeFqTgDdCe6kX7viPj4spsWyLBfvEA33UH8J2M18ug2yYF62ZrJ5iELRnaa",
  "key14": "5ceHxK5AshaPnWcyuGFjqrzYBX5q7gWhJSgggwXRJGSU7RnKLYwtfY6DWk24q2r8cEbe6pfDHY8ri3BhUc1BCMJD",
  "key15": "3cW7aYAq1NfpcdZ1SU4Sbks2DFfPkZPgMM4xkKHbqdTNXwKK7ZweShWRibRk7Efo64tXVfvY8ZVpU68vDZ4CTYxd",
  "key16": "4jSyQxUPHeWjq2ZuMaFzjqqMfSv9avwFEe8BJ4Pd1ZDv9xuS9xe9vWaG6MPo82jFGyT58cEym9tniHGyqb3uvD6N",
  "key17": "rKw2p8cVHEUkCKwf7vFTENmCQ6orok7MqiJthzhGieFDDBtLCBkWdYCsn7jCRXsbiQnfzKDkQV9XZYvEvVHVjEy",
  "key18": "3vQRXgwGiqSybxFN7V75DU8pxUtDffaTn5GGYSgaeCunVDUaEAwYem7a2kdiQYLN7uQ16BZefhDMsdnws7LeKrJC",
  "key19": "23Mg9kj3UuuSLYM8rZSJqyRum3L6Gh6s7mqNgCS6DqTcGWbsiNLArUR63oBsHcwi9FwsJE3UiwAiA71ST2NMbqYq",
  "key20": "65iuSdWusWGwwGfvPLezaUdmS9i92HSJLicE8EMtpFGKCeJyw9QULuGPKyWsZWUoASUCUfN169WCocdwDfyy9SmY",
  "key21": "3DVyKyK8EHf6gmNb2aPPmWUD8bRYMKqMq5wYxf5gzorUDGsRvvQLRMWrzsFP4ArgejS7mqn5w4ex2PBrpTBfu4nS",
  "key22": "5DfTU1N3fmzYy6Zit7WZW73ncAAjUUEjNZKLFYCgfeoLFt8oKoSTFLi21d2JW34SMchaP7Jz5e2F9PfCudbf9t5t",
  "key23": "4XTZfxLddMSrKT39h1uz6Gn92bhx3NaTyHzpuosmfkfUnTynhWgKEVimFbhp3RzZvvnyrCJz8S4XNt8WtDUGRhS9",
  "key24": "59YknFEzaGUtJFyyAdT2rFbpukTWPLqYrmincEd3KWpCvUYmMazkg2hGA4gdkkMyBKzmPmLog8nrVX1k3LRFUE61",
  "key25": "4un3a1SqbAzSubdcSsFc5BofVSCMmc3ASz9NTGzQRsga9LGzh1Nmx2K4kcdRmU9kpQDQ8qRWcumUHx8NZQG1vdTj",
  "key26": "3kXjTy6fiubYw4U41zPK5cZR9RV3kJLzKXeopWLeocTpnAA9Yo6ERHqdw4GMCL18HCnXoVGG8xuJR2XSJc1LGsG2",
  "key27": "4JtdPVFDnkBRs2Z3gFsr5WvQ8XYGwsmHZNzkvuBtYRyrLEdAJLNLb3ZGpuhft5b7PAmzsw9qGBVVsXKbMW8K8sN8",
  "key28": "63rSxJWviKhhLx8GaJq7fdnhnpDnBYpmjTZNtVgcEShJBWrC8pczxxzeRFMHsd9L5bQsV1gpBExxoU7dqbEtwURe",
  "key29": "2qBjnhdjRgacuJUM8bwoE1bL2ENmiH5ECi3gmwfXQbTi3mPZYXk8FfUuqjkY1oKxbXSK99pFMj3swuwKX8uTsxoa",
  "key30": "3q9zXfrEn2VZqBBMYdvrzESGbbwcrvyDxYRFDXnaWqdJH5N14CeJJ8hUGNpLAUVwxB1uXfVWmZucKnFdfXFJnJaT",
  "key31": "5ckyW1gU9D4AjxUGTTc7hABTwD3UBeYFixdjHWPypz1bpD6Dp4esSK124jobh3AkRuKNRcwt11ekNfFTH3rvRBPg",
  "key32": "5nAYownHsfkQhepFacu29k36PSLjR424p4gNi8fyA4qZzxeM3qifUcx7Wr7ViBzhbtscoLGNsWoPMJzS5DhFzHo3",
  "key33": "4ujbwUo9KMKKyFYZ2k4wY1yzbKphDoLTZzY1YTVd6bTQtEa1BzEMFRaYcrWH75vaZ7wjCBkCw9tCXap4JChRZc3C",
  "key34": "3FKq3vQdY9acJYXxwJRhSmXUzKzZE3r7h2hNxUxJnwFfCrhPzP6toFvB9jx7anvd2h4yfwxax4aV8uSrg4G1iEd4",
  "key35": "39idG6hPdXLTYUZFSzWRDnDWH7yAuLUuBXHVXJ2822TCfCjzRyBxHg9e5uciz3r7i3Gj5fcCh9WqTqQNX2Zgm8Ku",
  "key36": "4dWBW7Tat4dbazDES2EAkcbtsyiuFwPxDFcEFUVbTtFhoFRdgBNwXgJXy9G4xLUqh1M1AE3QrzEacQfJYwAbEDmw",
  "key37": "3LJbws3Qd5XwAqx9q4gcVtyx7ZeHbYptY8rk6sHm3yv5fKw1BUAt4ms1JaiUabhBnezpQwBdF8tb9otG6GkwsEFK"
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
