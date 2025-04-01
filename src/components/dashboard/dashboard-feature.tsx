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
    "5UJHeEgBXezpXJ53Uqg7mDagodsZ3taUpLXQcYf7nqGUivELRS4aMSUcPi1evBdDKDUuBUXADw8DbBLWUSuEG9Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NY1Q5Jk4vm6y5JHPUNe4Acq8yyZ5S4k838BCW6KHD1gB16zg6yAXzq65qcXhc3UEKBT7QGroaZ7HNmePhfeKwUW",
  "key1": "5xoH7ZZ7TaVfrm44vMxTTirmhY6S2pBQz4ALFmoRsGqqm4vN5v2yf7HhHBjfrYk5XxSJYB8dEnDd3E9ovaGQ2N1Y",
  "key2": "5BTBRKYns64JwvT2phBPECniUA89YBn6Vk4G8gQxKUTSmyJWeGR7wYbU5xJk5b4y57Mif28HNLajiEN55ZvMj9X7",
  "key3": "2as6PF8t99xUdDyzdehsJYoGZYEq8tuz7sKyqgPFhnfLMdsYLcsA9Fc8H8jQVQ3xp2mCuPKhigv1bTzQYB2pZghz",
  "key4": "3pCMbenYL5HPnUqMhdEKZQjF3ptUpkfpQENWPraQWT5hbEJKSuTntqLfZeFqxaq1GqsEuN8oTam9NuWBmf4uJKvk",
  "key5": "3ju4KZWBn8wZ9vhDEaWQRZgMKxA6arJKFYDYsf4ak8Hmw3vTrsCBE26PbpP3Q1Mrmxt81QLVQtXzXfnyabnvhprd",
  "key6": "54Y53JHmbykfSVD9KvktojBBpDR8vTyWcH3Mdvo1mRrGP1oLj3SHLH1CJ6U4sqgtHC4VtaApPmR4pKErgGwDChS6",
  "key7": "ov1Np2VGDm6iywDBJNvmjMDTXxEjUDqzm3Hygju95nT8HcquRjkqAyt35RfMPs8Cb8f9dqEaGzAvs9A8cuPzJd1",
  "key8": "4U3aaHK8Eog9CSF5kDxYhM58bwhwj24fNZEbHA9bZjKbJkcZd1ibLvdFBAM1vhrvRVqwA53fRhucMfacben39xSd",
  "key9": "5g3SN7RLp3eF3GBc2Di77QrK6bAUHdfnvvxNsX5ksqNfmrH32F65wta6E9QNCitvbnYiStoXrEQ8ZqLQuoUwCHgG",
  "key10": "34Lbe9CuJr48p8CukbgkkRd99j5kQ6LhM7PqT31qJEWk8z3TZD1qMYj7oP3fw4fAvnLbB2VaSXrs8PhbvRx8hMYL",
  "key11": "4UoNMhR7WyczmmCA6hkX5rV3sNkdWHnUDgPvQASM3mzEhWPwvQT2MrPFsvKCGRPAqK8qkZkrP1K9u39n1KVFvrVm",
  "key12": "5sux41YLs3d8kN18VupErEQuhu7r84S5ZQfimqvVfAEaRSF885jBDcac7zCGRvEUkJRV37Mh88Cbefe9E1DVfbvR",
  "key13": "5UFbYfvAirzRQL9mPN1DbKPc1GtJfReZa8YthpqSrdrRvyseH2TmhedUL9DDzCzggRKXndcBYqQmgC52UdU8ZaM6",
  "key14": "dh79djVaspNCZDNtBajkA4xKJio85Ny9CBRLJj8teXEZbPik1GKdm4aabGKQR4u8h6ZC5ExQe4zwB2gvUGSFbKb",
  "key15": "4nDGosMGvRaAC9tT519UqgNYwWEcULRr2XBbqC8A6uWvd8Pp6E7Fxo3GXKiqwecfe7bBBFHyQfUJL7KzH5mVQaZ1",
  "key16": "47ZHNd9vP2E7tCJqyKUexXGMQrunptLQCVKhMgvbgUU8J2ErS566UL5gh1uLxVqP4BXbGVqc7r2WC1stP1En2Lwk",
  "key17": "5kZE4YTbGMPmiiSSnqpwCzSexz5rngzTCcFrDNVSxyYCthKSSq2rcQznXTFPY11GcESRetDB3mCiMR7Hx4axEnZ5",
  "key18": "3JKw1zoLARRfKb84xEJzJaPEh6vUukSe2GCCN72GEeVft1JhfzpXioQTAczmy8yx7kiXrWzokLuUVZZMdSqpjLMD",
  "key19": "4jTnwbGXDyGqEkbckgcqUMRR3rE1at2AzskftnXwkA3YkdZfbaFCGP4kQCmajp3HffuARDwjdB8CFwXDjEGxm16Q",
  "key20": "2v3wH5ZKziMWG2GPkrRvxS6MLrKHCw9VrzZ2X8VgRz3gsVdfWhBaVriB9rgphXG7jJLRir24bZhuC4kSt1kuRTTu",
  "key21": "4J5UA1Mwc6XvyE5XsmEBCBtjdd3NBX7NfaTbX4NurMWaigSwXgUZ6ddZaCgZhppJQ1RZawAbir3ZQ9j5tUqyqBAu",
  "key22": "4qfxS92PsUciCqsEo7CsmSL8WSYGC6ryJWnwjc4CELRVk4HmskAHy6DaokPudcsVv98W5bhcJRKQsQZB2LhM7ocQ",
  "key23": "PabZudheGGMHnztSFM15QNUi2Zpc35HmjyZuLjJX8bxSNcpS14ha5Au9odvgcSYpy4rmdFxgc2UBFqWM5LVzjwh",
  "key24": "caPBRhxzMbQFVB8MDRTvGG8jWJQWk4PUm3sVjWzmggqQHsQmeA7iLZinnzQEqHoLQWVruBnMhdcKK6C7R1p7svT",
  "key25": "4bThSgUv8hK8JU4mx5saMhyrkUXBtznLTpELAa23gZKxqXqFGMhKy8BBC1hpaYm6L5fvcLk1D85BN6Lpo1ySD1y2",
  "key26": "yHDpE2C3fpWEKgCf7RHmcTHg9VvvH1DtrEbte1XWDS4hwvSTdWhHTXYDPFGKMpiyUW8HxkFJM5pvG9EnL8pn8w1",
  "key27": "2C2udeY6dKh2VLw3b3QnYrNycXzb8ndLmbqbdHtWwahZ18njdJmjjgoB48E9L5aYbRLQkxHRez72Z6yBNmGZDs2k",
  "key28": "GzTriPyXC1wYCZqaGqDSzvCSwrGMz1HXGFNnTcb98andityq3zpSKZsUtJSET3ynoSi64TJJLutAsw6HZNPqWjT",
  "key29": "3nB2En9ietvuRCDdwef7Ub4YQ5e3LgP9gQ7zyMivWRUrR6k6CDVrn7FkTqttzG3GhQgKWUgd1kYHYVYgS5WXHXVg",
  "key30": "3Na2mJKeDTYKRb8cyrq197whSFtHUUkYxjrgrSjZ9u4YkQJyEC6Ns14Ndf9q2iHSebqxELWBgs9PSaUwc7xk23Rb",
  "key31": "3MbDzrXt5qk7CN6BTcfMSc87J7CTL7eiUNj2vypxasMyrEhWksTuCoBFmvq3i5NAh7wUizJwDv3MTkQD9eXdg42y",
  "key32": "5BLaNr2hZFtn9e8pZv3xXZTWr5hT5GuoyR1mtc7ENGhrWDrhBEsUux6d9m7jYW4rWK6U66Ba9futZK37EgYnSPFt",
  "key33": "5qmssWxh7djqxt9yjX8jpknDKMMX2aoxaG4jwoD41mbukXDWhmbMeMguWQ6F1Eeh49hVSKGw3yoHWnC3WvsSKD1W",
  "key34": "4xpJrZuNpZXWTzEk3Pb4eVwa3cNAz47Yyowspw4pzSLcF6g2kZ4MFS67e3VWUcRCZPw4r82wBoXCMV3ewYzq3ikZ",
  "key35": "3Epma5hLExGaHTcKJQpUWtPPF3LndYpohQR9f25wCpcgrSBXCpkPFCqhheZTWtQ6iYuDhk5nV7mYvoZ6dBUL3ZD",
  "key36": "3QZMskF4vENaw6wkRtpJizYSbC5VZtzYEw66R9unFKVMPWSHJYvp3h9oLzgYfCKSgvHMnDAZfd1xqhmpoMUr4TTt",
  "key37": "2XUtMWsuwTMVuB6irPLtffvEf53QVik4E2gCR4JhXcygr9Bf8A23dm7Lc23oboEfZxoraGSsrn6UihHAnPaoTih3"
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
