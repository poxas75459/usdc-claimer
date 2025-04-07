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
    "GQCfzSZLPzd6fxUdbbKn5PnA8baKS48oWdWPoEhtYZXtcQ4ht3bdqhixfinbitGSYBdHg67fnBZN9S6oEeoGBvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGdZfec7pPYGg28yAehQsM85qA1fhUMnVu1PyBCbn6MD1jebr7uFvdaAxmiM8pWHurkaosWv3QoHemVJXnTr4hN",
  "key1": "26wnVAJTzrjSFXrTYWLJB5yvtSSeXCFoBdHFVoyaahGCbu2DewrhuyEBkaVDzaUWdZQGBgY5dCbmABWj3faFECSa",
  "key2": "wc8Q8sEgodZFgAiP5itNy3aSTdJBhWLDJsFc6o39XubiRdnZyXW2uZY64Uq1V5fdNkEF7JNU3tFUkmha13rzTWs",
  "key3": "3sjeZk4rjRMdXTcfK3H26j6nJ1LXZ4JovVbguwWgVB7CJtbqrpYMjZEHTYmkozfVmezeRmXrpEPmFUqpdJTm4cNh",
  "key4": "xUMHWov4G4LVQN1s4RL29uT8dvyPjCE7fMLAeTtViLP5Noa1gdEXuY7QJqz4LDf9EYbzNWeYUa4WLXRCB7G5pi2",
  "key5": "2DvqZ23pLaP7JiPsZjv6VZtaS6YwMXhpnzNbSs9Mvm8Casjtgkz16C6nvfyiNeoHvDeMCj2M9M9rbieUt5Ej8JSe",
  "key6": "5pyBPNBuG8NpbQFpaAi55WRzAKFxfePPnjspk2ySiE4uv4qWYYRwCSmDrCNrikKSRS3rTZ1Cx25B9qEPKjckqwsa",
  "key7": "4nGpYGZ9wiPYpcoodGEZZ4ttriG1EF8u2FzQkeGDAaFAEVbQNBk5DL9DnKmV5c9SMKLHVRx95PJiRo6WkcCidLWA",
  "key8": "v4HMZXKQamKxsvQs7yv4kVcJ7XxKAU24PnJxtD1Nt4RrQsb3vLnnp6qxTwfitBLXiZy8VKmvJPfivQXEBqapScw",
  "key9": "5n7npKUx4WEVCoq4isoKn2w2ujHbiZAkUjmdkyh9PbB8JQtUs1WhvXzrVJ8vpVAHSVcZQyQTwnJeMAzDhHXvpaVo",
  "key10": "2Uo4y349rsj5pPW87VTQbS8J6AHVKgZoGaA4EJVNQ8vqb2vRy1QtJ52bTyp9VEWZfwFQMDLNTh5bWtnxxDpqXi8s",
  "key11": "3qyAE5GrV41dATJ4Krxw2xVnHSTaPQdUTsRAgfhiPbrZxNXvNxKGtt3cAfQkfKUn9hpH4ywaGJRLwNC64ZfugmC1",
  "key12": "2R8QrVFh2gk4MuyGpNLuTzj2rXbGbYMvZePBL7bge6pdm9ZP2BN1fdHfSs8FTQ5N7ByFXYbNJZ89kqdMJxqSqX8D",
  "key13": "KeV5qqGrQP5RUtxxBKgSmnNa61MHP7ixVpDbMMt4t5UiwmChYvYL2hSECosxJHzgZTfVVdqtpaHKQqcVRv3bH5w",
  "key14": "4X34pvqW4jib9JWrPZQ3GWZYrCZku39VF3wCRRupPKeCeM4a9kk8p114jFhm6peTR4PFKcjgZeoU5ZjoEq92epGs",
  "key15": "467ZzbZzPpw5FPJp62FSBWP2YN4snQvoQpmBZ9K1BXL1kag77ws1TVgPaeEkFdCVVXCsroxVTp2h7NYQsZuZ7qzY",
  "key16": "2DQ4RhmrDWTbq5dYh24VLvwSjDWkvDVE1JMQNQYHcdUhqZaBodxEKJcEiJgkeVKXGcmAtUy9NsR8HPtKxWD9y4SD",
  "key17": "sGfrQt2QJktnbUFacB7bvkx18EWfaGieMJFVhuHT4UyeRYNQb2bxthCJ2W7ug5jVgj1z7BGNVHdSA6cG25KBFf9",
  "key18": "3x1ymuPgzRh1iQXxxbmfGEn2tkugwDSe51P7DjhsUDfpNzLKSL8g6oBKvnPbGcF5ujymYHRmZYhbpgUKy9XEkMQP",
  "key19": "5GGNUFR7V96ov29d2nRiQTRFoVVkNysD616dM6zeBqHYGkNJaWDto9NXTKsqXJgjbuhRQ7sgzgbZycpATdbmVSPT",
  "key20": "2SfcF6aNGRb3D4vBzEQRdjHeZenuy896D84PV5dZoprDSQnX4HJiFc1a9t8bTRDGhp4rEH9DtoTVYETTeuWVuEa6",
  "key21": "2oMY9hF4XRPG9EiQG71aVs2xbdVM4dYBmxa4KNZ8uhveTLBLpdo6onAeHwCqLNu3tWMfncM3kNkxGjQrtLdXA5yb",
  "key22": "3kkwRNgGPY7LBKYYPWhkjaNck5Upz4AFQRgvTqU5YGFnni3a9bY9TBHWEDSFXwGdFfJQGhUFJMRW82LdmpJd9qPD",
  "key23": "5aYpMQK1V4LLk4GespwJ4edQdLQ5y8D9NLszcw1GdBrkeWYpTp3ovRiNBgF8vCs8nzzhs1idbR5zCX8gSoXEheJP",
  "key24": "3xzS9aDSpAPiVEFPdrwRMUa6RsKmeY3x72Y4ATL8UZCGgyQ5n7fB6vUtDENv2Gdqe6hYJMD1pagnWu3AfyXci333",
  "key25": "2vJ7TBbgyFiRqbCRmyvm7vtdGJidymq6AYxuhW55DBqPSeemCZQ52XctNXFRqWJpJ2ioKPu69EGbkrKEgRSCSN6j",
  "key26": "Vb9suSjtHKhvM4SiBsjxVzq3TGM6FKPFu1mLQVVtHcoxCHnY47G3cffnG53WGNxkJRaXec1NGp73Pqha7DdSfyV",
  "key27": "YBfX4cyNjLjwfHZChMvZHaiYMbH8Urqia43oDSZE6XcQ6R3n4eEkYi8qtFD73uNNq4GQTE8xWHPNc3wkAKuJhzq",
  "key28": "2kKNPXBVQuSk4EYqaz4tPct4w6AXH2g3mNYw8zjZm193k7qdBR77Q2zUH8T2ta3JNuGhxZJqgedPePFGsLGMT2W7",
  "key29": "2HV1zUL9vKEmrg79srHmSuCmLpmDyhmJ6YjVHKs6G79PMdnN4eN3Dqc1egDRAptV3k25a7QV3NRnrCCUgCnRFSrn",
  "key30": "4PTLCdM9KrKKbHThGQunLAkQiSVPo4WkQZpAZhnbAYJ1gDYHciD2uWQpRcq7pPwoQAE2EkYS8PbboSM5gtWc4bht",
  "key31": "HjMxqZTJZmxk5NXWHQkMxYJPh8pQJnEy3xmK56N8uXVZ2UXDmGsLyyyX3LLpuMrJuQ8r9r6y8nqPwUnsqCeargF",
  "key32": "2YLwder5faif1WNQtkVVPTcqcLVhvSMEVvYe9TNzEQmnxrwi4vBbsxfsRjfPqWbHQL3Hbzp5dn24GVEPEjEKhKur",
  "key33": "5RTbUf24VWULyiD7TzoZuNjv27bo2GzTuNTf8pZec9CTND1Nnizu9RM9z7gGaZUhAsSsTVtMgCriUqj8tW5RGpaM",
  "key34": "3k6PfuNLgYtyxRFQhkkAk8UfkTk5KYyEcNbuC7M54RZgxBU6wQaLGVm2zcQJVookAv6QFpqb1xRcykE3zt5poCKo",
  "key35": "4PEBjkRpiV8ERQfv2LnKDM129z1ziMQG8tu8AWqQQZxnUATi4Y2jphZhtoBsmMx4sQbcLFP7XX9WyUcwNhi32qtu",
  "key36": "4d9B3Y3VLhGgG6GHNgYAxdisfzKy83iuk5fnAvQ26V3ijF4CUaYnW5oiwWqpWDjsfWZSyz3S8C6KEVbRAzbDKDJa",
  "key37": "w5CptDZJstZes596UqyuhpJW2SpGFWd5d97QYjBe1oiBh4aUKuuDSpukUB4rKPPwFUZhxmE4fetyd8yvKPyA1wG"
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
