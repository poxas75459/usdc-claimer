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
    "5BVypTPjn7TBNyiJUehW11K4iHCjdXPPVvkSnmv3u2bgeyLcgtrqewDw5kgw4KGwzCNh1XM86Z99srbj7zU7UoUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WgM9h4wzPuxhB3dM3jnwoxUnVW8d92aJLYFycve9n4E6tFdgSyigT4SAmSvyrRhLc4Rihi8YvPhcUG1CHSoHL9T",
  "key1": "5ydiSa2uaqAu7r34BBrupLLxqgiR6vjC6EwR89HTy9hVQz1X1ynbRR9mV5j9XHBRkeCQGFToVEgVzbZ4GMynooBy",
  "key2": "3GMz5HhdrZktJVKGraZxAWs4d8weeVYRrkTMg7tZ76ZCxjq56iPAVH7Mcmi1LR6oYL4C8xu4exosxD8A5BXC4QSi",
  "key3": "52HiH5x71YGaAs2UwhFPbS4N5krZGspo7tLb1yboCVLZu23GzHMHCDVyCTHMzRaXYrkjU8G34PRP6u7FJUmhaoGL",
  "key4": "3xWs5jVJ8X3BkXTFEhJ1WvkJBJPrivHhvVnYa62TMqK9sMzUDXfQycLHYTx2GRus7p5wQ8VwxURJmD3hNn6FLHDs",
  "key5": "5F4HoZVnDQ47f9sENAZT9ZXfz9nFCzKMDPjLJBobw7FB5m2TjVnmE4aeZE1B18YRdBMJ8jWT36Yy9H1X5wehbNFz",
  "key6": "JCdJ25psCajXSrqmS8bg5oFAo4FJpignPUkymQkVX7sh6T4SFfBwMQYwhqqf63PtA4yPmcJWwDycGNFW5r6aFgk",
  "key7": "3Q27LTbLzFN2ruUNrWQ3aRizwrAo6rAqCq5MkSNfTpkMNMaPDeAuFELtMoAs8Nz7MMaivzSHswQh8BmuJQHuG5Jt",
  "key8": "dP2Z6kZJUmEWRHFBhBiPFdpFnGUcFdqKJjBNBZBLcP2HJjnJVdLkNz5vHrLNGHW9qdBZk9BQKLrtFv19P4JHFDJ",
  "key9": "4rwqow18tyZBUb4pZskhdZfbpSmh9bf74yCyJiXDznHRW4q2eUJbdfdbEWMurfAZneoZ7uXECePGJSyYNxcCvW7d",
  "key10": "2TvuQqbPkWtgfWq78ak9jUar3oDBw3fLQQaiyBVwDZz3Gj7goJFk4f71TKtNUGQ6qKXrJjbzKUGLWDJqcDJqq3Qy",
  "key11": "5mqxp9VMrXWCPmKmPBwV4PsNBJahVxo2h7FDuer4mfbaE2taJBgGj5wvKpi9BBuH3hpTfJrPheN6Vqj7U1eQ8dPS",
  "key12": "5dbH2VgLdTGJsrEDzZW7E5bBdSfFAh1wdBjwAkpmzuN8cnPVR8TxjZFifwCxcjr1hQ7b2ByxWnuX467wXXrKvCcx",
  "key13": "3PUZPkQ3RrR7jA143FpNbgDSDLdrDdrNSuACAWf7aGDa7FvHmb2yLeYsAu8XqD3aV5xsKEgbRJ59zGqwFGiVXY7H",
  "key14": "258k4guQtffvrpJpVP1pnNRqchEupGjVsgjf33DAW1B9nxzeEmCAbbyCVR8vWnJDcK7WEJ9kkeGnDZ1gMqosJ1xD",
  "key15": "5GagnBzrfzbawEocjV1EtUnjp7mZRvKqRUazPUkvHoxjKq6fGnFrMgqHkuue3AwYMxt6c8YZ9gWWgzFprrLJrVdD",
  "key16": "2eKfdcgRPSojrKXkbhbce7qy6BEnXPAGYdNG9ZuBhykhPJaRhKbQo8a8usKF4mtkrtT9ZUF7tbqaLRgS3LiUqHUP",
  "key17": "5GRYbVETmfAtacqndawohLXJjJKpv9aQvR8zG4Avds2yHXpKaz7mwogXd7Sa3SoiVAfj2zxQCM9ERkVfy1QRGmzL",
  "key18": "4GCG987bdsHCFFQAXKZ3aV2c88oj9PPox53DgZB9nbJAQ2EbPxsuKE1EAQNTW9fCyZpG12NMrG1E96BcpnCxmyL",
  "key19": "2U9AX9Rvz3uk7b4NNS2iE6ggpCLhsKfQ68PScdxYi28xjuQJU4SUNqR9onWMZ2qFQWe3uWkTbawZQp15QLLb5VWo",
  "key20": "5PY7Ra9m7sk1PRNAJ7D8SGjMdXDJyCV3WWCxdPQmATkwftnJFLjtNgcEy5L4jWDTcGipxqUr33iKA31HRS32Fjk3",
  "key21": "2y8msSBoFHCDHKLrFkTTmw7hKMizUA92sqUyeMz658ynyKiu52KKeBCPNmM8r2z3bAwXT4sWPVYoTNu9ywNLijai",
  "key22": "21RHoMRDo5s9EABj8Hq6V2PJ8QKBzxtJdfQdUboDfCGnQimsWavtAMnxUUxDFR71Bao6qshFj4kL86A3umefVbYi",
  "key23": "4n5iKEfj6MUPgzoWza7gsoJFyXbo8xuu9n1aGTN48gLTA7ApUkZ84kDFTnuWUDFSbJ8ecSYHWUbG2nJbVDio4aCL",
  "key24": "2quBP4eAmnbBGQYAL77PdE425MPkFo1zC1bdGAagLettuL6nTc5B23xSdGntt4eY5hyKWf2xdVWPddPMwhynL2Vb",
  "key25": "3j25EPfvjjbSBgXhobecxj9WnXTVUgczTD7h8YDcCmsdEdAECUMTQU7rpxDgdXk3zcZTcDgJG9KgRreRcSYLLevb",
  "key26": "3ozjvjrs7ozrN5dP6TmKU7jEtX7Ubfw35eq3XLxaQar4S2o7HLF67afUBApeS8h8ceXEVHGZAo3WLj1TXyMeC769",
  "key27": "4c3Kh6CVF95gMJJxcG5zkBUaujpQtwKxeV5uTKF2ACAvuPiNJdmTExYoSEL5shFnmCfHf1Umoi7bUapGdyK3XASV",
  "key28": "423DViHZXujmkuAEb5VQN2TqRLuLC8kaWGk3tZsCbLYTdzo9TR2m7SyYfGS6bi3zJ7h9bPHL39sTgfwtBhxaEX8h",
  "key29": "312TbJBRa1EGoQSzrPeADbWHRtbPqnLK4NihFwmVM1hN9RJdFWvdKcQXxiugvMxrcebrL5QiHR5BQZv49J3SRjTJ",
  "key30": "3nAKxrGd1oFXcP92xi1tn8ByXhVjM1qKrtzdeUpgKc1pSnaeWYxdBixsiegRpyGe8TUFqMkrjbjc5VT6n9S3Um48",
  "key31": "vh8ymU86KDGi5YG6BzV1Egv9cE82eTMwue28JFKakeLHWx5DbUawz8jcQqdRyj481Zkz981i2bxtUpZ1ybPhT1A",
  "key32": "4PtnTYLCg5xDvS62qhzcji18PB65zApRWWh245a3PjJUKVK1Huda3it56zrtuUWXaMLtMXPNF45421yX8xAZcxWW",
  "key33": "3s5vAT7Cothc5S6t5Hzbc314TdQmyFKNBQCEPJMJBgzD2QVh8CSCAoay16pFfBP74HHQeCdd1o1HvNWzZ7mzBZ2V",
  "key34": "47ruEZSyKvr11ENyD1Y7VLKJ5K5C5324PXKGjHbepfeD4gaGkt9WWjVdn56umh3YxPMKaxYEvb5xRobWojPCHuwi",
  "key35": "x5zp4FnFTTUTX7EHNFAcR7pn6s1o5LiFHqn5jvt1bvwNKMeLfknWuF73LVeCtncCZXh5iewJjAun2wowV1vmxQ9",
  "key36": "3xupdzWvwHsF9euPeiAizbDufdmYta2JRresYRmDiniWYHhKRKT4ktGo7UEjnw1tgqAv9SD7heoeVcuAwzPHDjsN",
  "key37": "54jTr3ZvsfgXc1P6s2dwfd6n4hV87eXNSXDcycQxhzcYDgXeHQP3iv735tqBMS6GgXmmGbHZLeW8kupaszfn2dmM",
  "key38": "4kkjCpQuRvUMj3vLV1UC6eobx3W6g9HSqHmWQd7Q85vFpTBtu94Ps7jfdM7WfHEuCF1Lsy2EXwp1WFx3zPYaQfFD",
  "key39": "RPHXsTumeZeUW39VE3HwaWViEj9yevJz93rZk6bWedV27oB9pAtDiwxDzDFHRwQLzjy9Efn5AoKMzZM7YBZVaQD",
  "key40": "4t3bxspZZr1Q8SJXWJs8BFDMUzPC3zc9tuyzLfYvS2bt9DwT6P3qwgvTW5N4HgkLvq4qAM7EgHaiRPKW34iSXxxx",
  "key41": "29VJQj9TKShYRdNzcgNRgf1aSwcTw2faRngh8KnDZvNCddW3CRVrWkBScdGFXgZZLqGvGYduFUP1QtHFkL6vg6fL",
  "key42": "49gQ7jX78PKjg3ubQbyeFxygYgbhZooLko7dtRH9qA1MERxqxU6XVa4mmeca6HAjBcuRbMpSFfLSb8GvEPdzQ1Ji"
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
