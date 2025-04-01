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
    "2pF3aXX98A7mKwXKn5eKRE3XwJvojGVQmoawa2e87DeG11fSQaP2stTYdJFKDbNpt6WnexrsfcPMWK5zNtd2oLcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dmqZU3KmwD1N4uJpKYTKgFu3J1xBvfzTDh2YFbkUBmPde5A7h3MqPeiGmzvwWcYjCL5BugLAAHgNPcruxRXsRQT",
  "key1": "5u2fbLFHeG2nraaVG45weQwxB8vDxYQhTHDTz3LrvijG2mauPdKKxcvbdJMHtaGSvEqQ1UccY168NMUQD6w3Ffhz",
  "key2": "3DRXdHyZ6n64sMiEX1CQhaAwegWfub9TzqBqSPiS5Hwnt8MdPHL7ErxaFgNq2SxXvH45NxXWgjPGtzSKzGQN3twB",
  "key3": "4v3jtqpGQK7UtVmLjMDGRh8ZYtEhT8YFteZtFy1mxxqoRoDT6V66Zg9p2ty98XoZXZNSGk7njgD1dWoCXQQcrCZM",
  "key4": "M52EQ3rQoRzhiyCTStbafKYRbfooK7EZb6aHo9NxabHv9qcBYRfff3W9PUAzfTXZAF5L6eUmXJgnCEk4jNnZK8d",
  "key5": "Jw8paKyv6UUpFGockm6wbEajuE371DTv4ywrh2KTiFsuHhynstDPefgYdadWH8412djz97X7BwCQVPaeSLj4c67",
  "key6": "42LZ5YipKuXWsYjXUr7akh1DkYDJMX8Vg8eemYDJtUBVUNza6J2b4tQWaqw6bN6AZ9CPrxZn6h8YeqiQCS6kF5mG",
  "key7": "52YFdL72gYaQ9gjfhDPt6VtNZaFVoG7tAk3CTAEUwnare2zqVqPHGeXcKs9cTLpvkok4qta74eEmvWYnKndxcYay",
  "key8": "27EhkdrKY2DfNzzPMrZowgPRmKodb8zgMD9kjxgHdnhC9a6awznKrpL3o4SyfMT1hebyp7bS97nCP85h5oJWxHwt",
  "key9": "67PHzcZTapsq59JFnXNQonZEzupAPjBbtJ97b1RX3VbCkEd62vs23dvcGrZCkcpkP1ZWLeTCFiqgvSz17ENmjyfA",
  "key10": "3uTaSfXbkuQGeLKZQL6ZGPM6dY9nVwGXU3NRqsCuWNyewvoEG6JRUykGCGyGToSNs3p8wttvvhvS7cEiopg8chjW",
  "key11": "2ysqsPcAkUUSCsVJnTsc8rzKbxdVfoRpySF998hvUdgpN8WrnZHcvc69bT7DwAkaHNqkMDzTLWeDTsZrrX8QRDUc",
  "key12": "3bLfWsupq43UHbHvnD6UzXMLTXBdjj1tyyGGGcvDASQAdFbpdbvAHCPrrcUbceLnSJc5bvjVo1pW7bvjCb3EWLVC",
  "key13": "ZwRv7m1xjHPkwUeMT5EfxEDjB8T5Vb8NjnmGsedshA1FYG4EQd6MiT4m2MQW4zYhntA4nWHEbPzdoqNaMZFKHf4",
  "key14": "3J5iMcB95NKJGcFKXkGbbxFe81vXGLHkFRXcTeVEh5z9xiV6v6YJx8oghMxFkURaLvcbawgabthBT6z4bp8hhHQ",
  "key15": "4sHRVoQK73HV5spjBMmq3VAqYc8AtMWVwkXa6KcttSytg8CLYwa98vPu87xpgrWRQ2u2ghkaYrBW7qGszjtfysyr",
  "key16": "33QAtxiQQ1kQrae9fpiWtr7EHTWLc4Eocx2e7xe5VrW3f3YEN9APmwT4kpRqEF84rMCcngJJLKLjSmhF8iFCdbYm",
  "key17": "2uCkZX5UeyF4rayjraZNg4WXoHZsiG4yaaJXeB8NL2UfScTjWgH6B3JMB31KioW5kVVjj6JU5shvHkmZjj1EPD8y",
  "key18": "3qFwwBE2vHeAVRLUXodkYxnVC8mcsz1Y4K8knHW34Ef8b8AmaStWfQ2XtJjYVvRmj2jqoTqnYijZ4TjXyjrzTLTy",
  "key19": "5L31HfgLSAmRmgSJsZr9WimpW9Y2yrDFMb6jUMKQXR6SWYuYLg2gJQ3PJZazSV3Ya9iBR8cKMhNnH5zEDZ4Dxf9e",
  "key20": "4Lzbh2iRtD6d2T85d5xhhWyQ6Dr8EUBmyPSHVufwNdc7zmQstUWeKsNDhkpR2Upq4NEx1gLE8TFw4WTeS3cu4nVp",
  "key21": "Ud7TDdCt83sFmcZMyDKVdgEc5GRe1Xnj3N2dJJbyX6r9NChBPVmieoPSHwTCU7d5ZhaDxDs7JxnfapM33WmqqFr",
  "key22": "d2U9kp31r77AueeyLHZuNbU7BvYGnftTBaRUoNETrDTuQEkKWU5bsSTqs5D4L5wFE3tgtE7fMTt3Gw8XAsqimGh",
  "key23": "2URKMiUSTL4K8w2cWuFQsYzj4hGatYX17hexkoUVPZWhM1w5erTgbJ5Dypr8UcCFrd5fUFH7T8PsLu7DZETrTLCQ",
  "key24": "dNAnStS8ELmLgwiYbxUSexXTWba9nPZJWd9VMqBBBbc5xjD2rmkSgxuyk1T8Vk7BH9BYFxFzcTV3opdVCBtugSf",
  "key25": "4DtQLMCM8a2HrfMvrbZgCpNix5BmYf4di6w3sxtzVJuZ9YYWExETFddAnVvVXsxnpD544pyQAaVHHaxiN4nVhH6t",
  "key26": "44wvh86eXFevoYH3NQQxMsC8rAFqpFnHTfMcuExQdd7Y1PxAbeeLx1HUHgjAfLHDEFZAmLKBjSXsTJHUpjqfa5yG",
  "key27": "hLVMw7inLzmokMqoF7eAq5x8qoUBthJbtksVh3Nkjwv8Ush4HYPT5Yf5FcPFfpj9vLvYErzWywp1ANdp4NjCXWf",
  "key28": "4aVFidZ3NEcy2xT44Z4mm7Amp7B5xfUJBfxhsiGG3tG4Agh8SMztphpnCbS3Hkz2drJopjHaqJnZUMMavjaFbT2k",
  "key29": "2Qa6SK7g2P1gnYQWekKVGxuqd8nfYxQAXBQu1dcD98mH72teWAvpcCffQMajMeNejkBiGrKdDXMDdSaodZL531ZR",
  "key30": "2j4ih1ACkDi8UTvhfWuvhbyZ1dcheKYo9ewibjrM78bzfFp2VrE8HkffCN9ej14EzX2YuUAAKiY55r48w1fLdfGD",
  "key31": "2BXkt6LWCMsDeSnx5ij63MBzi2HmxFiNjSNgWByQTodtbRYGcxMgjWP4bhQcgu1qy1gKiYx66NXAYjopPm6Z8eF6",
  "key32": "5SGt7dKJ43nPosKiF8WqbKg3k8o4uxaR6cPq2Q5rkNe8TbdLT6pKYrTqQ2XC9USPhoRoEDVDfEmod7hCGRvg2ZTv",
  "key33": "5QfQuDVH2MjtZjQKZJjkw5FbeXRS6GBeC26ApZURXqFNtN2RhAJCG7X2RBqyy3ksSpZ7VEUp5U1Zxo5i5MR4KNhC",
  "key34": "8SGRfphwbwxw1wexKn4iyboDPXAXP47HMJnMXdD4A5jsPA1mZs2fSCb58fTAyXFrDsohBB4vt8C6pv52weFLQBc",
  "key35": "9R8wrB2Y9GEuMPL3wWccMvkgK586NcvZfGBetKwq4Ff3ftLReR6dNEkc2zm6De1TuqyTaHJp5VL6JFcys3jkCQv",
  "key36": "5x7tAQDoKfymv2sLQHzvxMaqsmgPtaAYeG6cFPbc97ue8akNr1DvBX67BC8UiB2uNmHe9gyfNoF4zFWdHTQadX89",
  "key37": "3dBxMxQNmF5xk9fdbXDBzyB7qLKvnysENpuMaukKeyaTFH2Lb18g6GKGsGF7G82jcqURo1DLTjvodWjVBD1Hvr9e",
  "key38": "5umWduYbW2S8imMC6vcWbDqFcCGgXceFNFiHAS2vBqGfRaU7zbMgBgf8d9FbCbgqyi2tqCptXG7tUgvD1UYNvZom",
  "key39": "2H2LwKdsjo6n1hQfzCswVa4g7hqFg6T2nRDjLbkq9RmpVgLGa9ZzKTK6zj1DJx4SwdEcWqKZHK43H3k3DTWdNYMU",
  "key40": "prZh58irBRpqhuFm8cT6o1h8hofMFjmBshWdAquQemUw7KjWyBAioDZg8phCHqZGES8RUogPT6Qj8ZqXQebKUjZ",
  "key41": "3dDCqwbiv1yW64XmhkoCPsFgzqJk4KnftQuRQzJmParkde1F9mjqre3hM6MbsyTbm1CYgqknR5zfgo4tw5aVGZk2",
  "key42": "3EvWMTK1eUQnQ5TpsBkzHV9mEr3BPkqWZhBz76nGaaxFZmUkRenwgGZqh9og9EopZPrzmCqpQj6ugTTJAAi6yE6z",
  "key43": "3sQg3K6KAm7RS36vT9h8GEcqHf1gRBn9jKGgVw51iikRW8A1XMo4N7u3iUrM6SXPa9F9yeNpSWzpkKJ9Vr9PsCGi"
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
