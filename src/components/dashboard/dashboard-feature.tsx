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
    "3DuXQJ4QemTQnLxquCAum2xuvmeQiGX7cYxUPKP4EAUuA7ymgLx2sLJqXiLtUGRQFRWsQDrwDcyv99JPJLpZtQcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jv3C9pZfek6SwqRoQV4Cz5nWKyoEXJP8gF5PWTXH2Ry6Z7i557qh3p5Hi8Ntknk6nDNgPgT6XpqdefjHmkfbf1",
  "key1": "2xuQQszNNbN9MnwqgMe9EG5wukzwWGpjmtzF4CNaYvzrXA2QEj3audjibetNSpwwp9csLSGJmroVtzb8Q6xPBGsg",
  "key2": "5whBJ46bHa6GCfeWBJ1WwuabQ6jSAkoovxMNQPfBaMosHFg5eq4i9e9u14w9vvC6ww7FMGvcUw6bW4NTHgMrF6TW",
  "key3": "356sXH29ywTnR7BZAq4pXuqs41fd8R6FDgDBLuKhPHp9sG1pUzAUt7sZpnpwgHH7JKVdwxscW65JyddJ1pjDsbvS",
  "key4": "4oNvCYv5j7GohN9ZxjAg4qg2hNHGNMu7EqpPrBihMWVzEyNvuvKdQpnfBWcPXwSRJoTBTfYPCw5PpdNPR8yFFQCs",
  "key5": "x1p9F913JGJUf6ZNeLBn5F6yjZR7PJ2KpTYNaEj3t7gmfs4CAVQGppA176HLxNWCqfEfmz2cvPdoM5cw5BTUDKb",
  "key6": "FrsK22czSfRAoAeTqWvyRPXvHtL9q8r65oVSWVYphBNhwU2MYpm6N7zDrnmm1mkeF6jRoXyaPY64qAtbyj3PCbe",
  "key7": "oVurjw3fN5Dk367zNmx2qpWQj3Pir9UrYw2JEeC9Fowxm45nKxcMwv43FuQ5Eu44irySp6UU2FuiUmqNvCrssq9",
  "key8": "5o2jy272MziSgzjcKTRb4UEg2nrF2QMqjktCjUAhmZvpVZv5CrgZW9NTLFg4C51aTsCHe5YTZeXXvCXh6vpYKGJW",
  "key9": "5ExtHYy2oPh4zig9qG7uJ1fYy4EVigW1uFQiw7zrjD8Rs2wToUzDdmgsZ72dCFoYKskA8iAi4CCE7RmPYnLZx5gb",
  "key10": "2JkVpWJTgWGaNP4gwQDMbvqJCRCugQz9om4AGLMF24G7VNW7Cm8iKzp68ojGyRUEaM9psXJsPvwCvjVSc2FrptU7",
  "key11": "55Hbc3wrRCtQd5EhUEvPRjYerHyPCzWSsBt2McAZK7R1kf92gHqBdUmZByVxtFBFibxtKzR4qC9Xg5uxjLBqvgCX",
  "key12": "5iuhUR2RSVmLrMtTXDkBGxNkrDXM79pA85nhGKrrb5MAgL9iraXT9TjqccrNych7cGweQu5aqC8AFW6zDk2rYuqh",
  "key13": "3RVPsR3WkCBdDVnL2SSaCQuAcd23DAuirBJq61ighvT1WrH4i7HjGJag6PGHZ6A8PLjtgaizqw5efMDoPNvCejpJ",
  "key14": "7U7XvNxbWZrvb8z6mK7L4TigwLC4Xxc7RkkHshE8GGaE81cfjNuaYina5vvvmM5Guhoqo7kAJxJfqgKGrpNRGMR",
  "key15": "5E15NwMYTi9Fbo4TiifsdowyMkSbx85wSRFP621QP2XCikfjmQH6ouA2PJS7UtQUzP3CLzEzqrKzMpy4F2j9Vv3q",
  "key16": "XChcwPAz6tj24WgExLbcuMpoQdgYwWJkfNLtrYoHnhMDQjzNvVq9biV6eNnJ8D8CfZSXWZXJoZvY4VPhfgrAvNL",
  "key17": "53AiaEKXa8q3kRf8t8KegMjWieeq7j93D4cAwXCz4FaU1KC7FF4sVp5b7ZmPsxBC8K55SXPWd4CZc2XjwqfjyYS6",
  "key18": "2TJiubgG41g1kiWRK4rcGGSegha9CTxZHunT8GDVF7mj1frCRhBRu7wiUuR7BSfg8pjAmtaPwWJA4DyTPcKwzcb7",
  "key19": "3gJfhhH4fFHddjT1rNsyzG9SAnSANL2GDVZRMtGwjBAHQD3KmGx8XT9TpjPHcCnG6wzVGzyXQVAw2rFAoX5P1UXd",
  "key20": "24GdMBpJ8yHwuxz13nK8arU64h6JCeM4uQLTMDh8j5xxoZtFDgx9pc8r429o6mxgv8c8suiZieEb1Wf2XBeqp9gg",
  "key21": "VGGTtz534TXcufZthugRr5LLG6PkhFHBjmFxWbT6GLreqy2ufhtmpNbgP1CZd1eY9YsLgM8ExFig3gGf8ByFwxo",
  "key22": "4TwDxHRjhoR9teYuefKobFkeED2jiqhCYB1C1ngCfTbXDNSByQouJWqC1EL1q9HB5azKBueZWJtrZLbZkjDKRUfu",
  "key23": "m6KPSMgzqgArtj8P3yajG1j78oXa4TqAVw5ChcrHno7Ky7ss2GYyKKgjuw29HjftYgoXPofhA5yPMNyRPmYTqwK",
  "key24": "5F7qWgtQqR66bWAZRNMxVXFpSQSaA2dAu5Cv5ncLMrqWxipaCBM5JsNQjh4ARbXH89DJ7B2yKLKzeWx5qTExGbTS",
  "key25": "5HxLjy4dea58o4RBX2Sdvt8wJc299NQ1kkWvCRrfjJqofFdALjuAbgyF8GfS6sqVc6p2rWDZ129EkFaBvawaT1of",
  "key26": "22nG25WYBJAobL7EeVzBxFaAp8QLjEnR6sAAfXdh7qnqT4NBYN1oKwM6jpi9aoJL8pCyzbpF9tFwWgbg6PW9dGZt",
  "key27": "4YLYSAAhDdhNm68Siuv7wonaHoEpFm9gT2A538LDBZHvZfrv6zrpLEZr17BWF6PWUdcc4cfEgmyQY47rHU7EkULB",
  "key28": "2CbuQicEZm1zXaQSZNdYbwrDeF41zqH11fVQcTrZoZcehTqRVjCykBV5DQHhHbHfvusSC41pyi9gZAkr9HR7VPYx",
  "key29": "5pVFHNi6kd4UAgZE4YpTJm3sio83YYRJoorrH7yhkQnHouTGRMe8E3JPANWCc3BYi6Zm8V1dxLYjxoqZ98ab4vmQ",
  "key30": "28D51qZjHW3m1fj4VTMRmHHxHmgEQ3cm6nr3qLdd3xrjQBrX29BaCXLHEe1vycTCf8Bn8m9Cy7hATUnuwCQKeFyo",
  "key31": "3Hh57D9XHnVrm3pyJmR3YpDk8uxNzvatoPy5PQ8Kbz3Gadr2uc4r74PNaLFbwes2petWD1aBoex1fWNvmnBexvT",
  "key32": "uuTYocSk4KRovAjVB17jdKNtZB3TxmEfJpt1LQyngzCAre1EWGi6DhEU9dWkL9rBbzt2MxWZECnhpWN7cVHFRpE",
  "key33": "479Xc3dcbt83VQgQjiCGtrtwpjpttKvPqNWcztrXt1V1GuECuHxKrofSRmJG4WAQoeRUzDd9Xz66m6BtoHhstBNs",
  "key34": "4xDydmG9P4ahF48CphSw1noc8STGkxmCuouRmbY6E2FapSeWhBpbQC1DCWN23pQhZLEzNfgw8iVB2KvQeLi7Jvk2",
  "key35": "29SNYiM4WaXa2dDCbDc1ypFw9b2RMw1SYEeMXYmFfA3UViAU6w6cLcuBVBziQePnTdDHXNWY7RGYtALD8n4xQDbv",
  "key36": "5bPcwrBsDFn18rYyjtaSnaa96Nyy9BNoge3q2R93T41gPkJiq8hJGR5ZNcU787NKQ48jcCy9Dx9neGHRiK2hr7PN",
  "key37": "4Gq63DYSpSj7SwRQ7bZV2V44D9xKfNE7z58R1ry1wWUYba7b5RVEAK4EuK1ZAzoZPtpFMhZEt725yVLARWt3XGhV",
  "key38": "35enPFtnfCyWSpaRt5HGDmC7EdZSdEdx5MZ7Y9uQQurN99tQiXCc9L54v1cVgJkUKpCyBac6YJxi5HxYuARS3W4p",
  "key39": "5Y4kbedeQERi73KDH79MmNwoE14jpDo3EcVTDSFJyag5uiyKEEayfXjoyufDW7dZjwQQfGXmA8ZcQhS3gWTwRLKL",
  "key40": "2EhzhGz2199GV8i4fARCyJDBosge2KsFSq3RE64jdxrk7Zz8pbdJWWFKJ9YhXAfHSekmSDQa65v79tupxYNvByDr"
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
