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
    "5p5skS6sxS4GNaXuYnJqZeDWAqQi36s6sxNaYFG2ug6ySqHhWzJ25Tx2nPb9MUE3CUtDWZ8Rr1j4MGWUcwvS4HPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXrGC5ZxRftfmw4MSc7zFfXCtif331YUWzkDHCDS4BHtxBwWD8rg4bz8SPrM7YFsmLcpPKwRrSAfN2HnBffScj4",
  "key1": "sY2veN2e9yaCUNgbDDgP1VvxP75bXapVVc9FvDXg9kWjoGwJ8YAENSffPWDC5ELuH6bYNVt42LiHWxCaAtavBNf",
  "key2": "EpdWpruuWTqbbdQt8ztZa4vy9vqJpvAn2XBNu5WbT2Uavm1MNSrGNgcwAzyFRa2RJXq3d32ob7RvnNrDzbwSmYy",
  "key3": "66JNYBKeLYWh3tcycod9GKRuqfX8ajvc33KVzo2vGCcfSAdwTmJdPsuxh7aVtDzfLNqDXpGiFuHYRPnpsbsLy31d",
  "key4": "3oexCpkwgB1FPwVLjz5sK99HgDenaF6jGzHLSxyK5MHhmL33oYRkobZRNMNsueeuQAxDvh8AAVyfmBU8Fhve5PAF",
  "key5": "5xYriuBc7VEtz1N1onTg2DHxpptwsDuTKUY54VWyfKabaghx1dQyPm96ak6YqBX4Y1NUs9B8kD9vW6xizwwKbni2",
  "key6": "3wJBeVDn4p8Tcsa61DrpuLepEqWsAnvzBvXffUrU6f3GnwCJ8wHx3DMBWTCWwvTJdTBkNtCKH8UZjZ74pgZbkWSN",
  "key7": "2Tswd3wEsasicTiQkGbggyJ4TR4TYEg14C6gQYD1C97wcLamedtwMCSUpTmNrjbj2FBNF4cgPgcJpzHbtEi338Xj",
  "key8": "3bgJQsExaoDEMQyAp76wxohGasEvphTutX5Mitw9pqb4se6bt9kKQEWYz11Q3aMek55ZzJaGNVb6SdHH4sTQEkS1",
  "key9": "51JTLQZzWciYGcF26HyMXPS45wr47ChVaHSjQzmuo2zuEDzbBEWM9rzKEebpoKKzpkN6NJjjfDSEqLj1xhWatMXL",
  "key10": "4CLJ5EBFReL1YQL1tUCo5MWKWkwPcP9ECD44Ske5s9X6okzZ3AzktwXbW1VEPatu6xNo3PKa11jJRRdpDsBhABju",
  "key11": "2qMfDvUAV7wunGu6ap7B2C1Gk6Q96xGkz9kxRb4MBGE7L72uUk7WqfHoabrwgSt8ovkSMJAUd6iamF6fAMGBMuDf",
  "key12": "2WgRCTXKuZXKgwrs9cwMLnxdrXMojveQhbb7b3ct6fs6gMTJK4gDAecBgPKwU4vXjEfRmj9EdpZJB9fYQgpkC3iH",
  "key13": "4fv5bmEGfXPf5aaEgm8j85g4wvLbYq2WiCMDncukkuLGEaxkNzPtWLzecXJdyXRGDbmMZR9k2XFqq5RmcZrEa9ds",
  "key14": "5gK13U5zPX8TcjaBF3i3XR5dX7b9UitELvhNaLeKs1dEygwanaYNHQTdNsjwZWCjSXDRJfWmAbNuso63ST6JZm3k",
  "key15": "3p8igdyLkGGNXUoUpJEtsnKdDtN6mWDcRN1ha7wzNNXyrfKdxUxNohfEmMnia7a1E5VVM3pfvqKofVPDVNLfXrSN",
  "key16": "3iVdP6bHvNsnXbymBA3iduuYprG17gs1ptcEtnbRsSjBq3JSCmP2b2gfPu2sKcjmgapPsBTTKYQyRHxgj8T3Ewyn",
  "key17": "2BSnukeSqYUn3soSrqGWW4uLzTEXgNjdLmnhxwDqWJ9RLdUdD3b7qvE8xxHGw64A3kYteJbrqHeAFfdRYaq4oFoP",
  "key18": "3ez9465Bbu5Wgk8ZpW3Sgndj1VCRU3FF3R8L7TYT15Dxe3DLYFCg6F4EEPMr8Q6BmenffDEuhdVNMLax1bcVBf3x",
  "key19": "gAGpGJuoApP7aAVWAM2tY1wvGEz5iypoxTsDxxXCtyTVerC46yQ2AKV6Ydgdc68RKEFAaHtBECRTvMR7z9fGhEw",
  "key20": "bDHWpqJjfTogd1sZAD58t7QA22zVoDxN22qy6P3dr824JhHruVRS5ahppsHNmd9mAwmJKGt9t9fYTDaEykno2VP",
  "key21": "3qaGv7YLh6fn6VEFFDZkL7TnyYqcxMWYAqyvtKztZUBKYnY7qpp2jRhM91CD91An64kQQaTpQSFz6TFWvutHUQiT",
  "key22": "2ZX5h4BE9giPF4efdyKWgNhuAPoHxkjJLnFBhFJLs2mecsrCZ4Mk5XD2DVri6wkXbnFQnQ9SqXjnAz45sMb6TGTp",
  "key23": "63C2cYiWvzqfnpHA33HvdMY6QC9EnXLnE7DxbQHUtEiCPvxqWRGTxbWbTaxNsfXULDVzWDNcYPjAoGguMWMJa9KL",
  "key24": "2Y49axqwSNuDaNaZRga6JQ9eMabMKfHx6VLmkvstKv1wSy3U9bRBDNYQn1g4wFTSZj3vDJ27Lp2PZjR76AiTQULL",
  "key25": "4WevEBi2Zt8HioC2us8XAcU1d4pM5JRDvxx5kH27cQ81nNkgTaqLdJpgXKcr1bqxMfncXB2k6FP9ZyfiRmzThX7v",
  "key26": "4kXipoQdajWWBX7oUiki8KcdNGjKEQ3HwTwiVAHGmQBoj9JCux8CkbXZbTiuWSp19gX166o4kjPtN6GSLWXLk1pL",
  "key27": "5kPwWuaRzaCWCxJGBr7NVFKGyvqrG2R5eVR7BZMJnqDUHwzhLLagxr5zsN7ttSobsTSpH2aGiDDswMzWvsP49C3D",
  "key28": "5txq1NfMQu2LGqmJ2SUa39ShKa5kchL9cGUFd9r51hQFG3aEdM9WeQDkCRaRhNTv85N5zk34WSn7vx88UAJZk4gy",
  "key29": "3S6ZNdiiuS8rQ1J8jHKCXLXh7E8rcbWxY172yZdVcDTuKizUUUDnzH9DEdJrwZ3AVHw2U5LwpseE2V266B6vhVpP",
  "key30": "4wt9WXghX6j3yDsDnzSQBJRxnZnKKKiAE6VLYWAZkbXCYWfCHv1zYqqzCPeYGkw6qcmFHaXGUbBzUWTDJ4x5NpcU",
  "key31": "5RUeZZUdEL9xqLrRu58UZd6P4pEWJhhRMJtSHeNEfssdefCWde4tFWoWvavWRJEckHUfpk24Hz3wyWQY2S5cmxKH",
  "key32": "9KwbAD28LxQNyG1z6RpjHzT6KezH8UpjSinw25byiHfDfPcw63xCpLBjeGRKT7eQBeRHkQbTQFjH6n7JsbQK6JE",
  "key33": "5kegcAnpNiJSCmL4NUgUQRRyH87JG4Yh8JyAjqGg5JPYsv8u9Ch6or5sSXgvQC7eChgByf6noYkhbuVWX4f1GNuv",
  "key34": "D3n94zWSDT6zBGTLw2gr8byfffU3SxycLvZrqATKMMCoQeT8GWRoC9n7FmmjaBpLydN7dMayjftouq9i2fiU7VC",
  "key35": "4RQsP6KoWzBKmUgLnrNACA5nSFzQAudSEbdWkm3ZCQg1H8f2PwvHE3rURd8fKy1CQbyb7yfqYq88CDfvK2dqvg3e",
  "key36": "3WeY7eZVd1BLHUvW7CGGLAhbdhBNb3pn8YUCmBYtec63FuttoJ1krA5FB2UczBVwSiTNbkt9YdWkYbaHAhhqexwo",
  "key37": "5kaWv8ksyDs4fD9CGvDHwsDeVi3n9VV1PqWf5vaE8GJzCDMxrXqBemmkMcDD8zqUVDeK5Kw6XCtSLuDFoHM6NtA2",
  "key38": "3aZyMxu4Da4tongbcKnBDLov73jJ2pziB8xCisYo4ZaMyAcxJjVfVMbvqsy8ZgJx6fiHjJFBHttQuKM1oqqxKfvW",
  "key39": "4FhJBqkeFXB3M3EJhytP7WfBbpnkMMP3GSKwwSkvkYhAUgdWQ1Gmp5f17BbmkTaT3Uxu3Ty2Dub8fhhUuDN91Kkv",
  "key40": "5EMLzDV1d6QsdBGuWmFFb3pp4kZ9XE35RMqUe7uCTWwhf4vw3VytDH3eQLsqpTxPkX5qE1BTyb8SpaNcnQyGn6Rt",
  "key41": "3x7Zp6gMRqRkKSP9bXaybKaPziz673V7YF5XueydrVmSgC4RjAw6mafowNQXuc26jPHP1yiebRGq9N5o5AGa1x5D",
  "key42": "C6zrTzAS4hppiczqHjFiEam32aqRDi63cHNXMEJio9T7WE79Ao8oicTguGw8Dj5a14et7jJszqZVBu4bxHb6irj",
  "key43": "fnRPUH2BCeNSRujLBmxnF6MpXnTskmyD16oyTabGA8tv4XxccBKJAQEXEnToPbSxux4VBmZ2Tiv6L39YAsyXAEA",
  "key44": "4bms4DqsT126uLmJcSmnfKiCSPVXKNQWTJUJDLAK9ZZwsnSES45ty5j8S4fPFLjwBBK8ZQ5aC8uQjSxDMURtEvsJ",
  "key45": "3d7aRe4cZBpqkvcjy52dnG7PRUfwHwrEUt3qDYfqStnRNwMwnogXLYRCe4W2AxnH5ZRsChV7t7rUyVtdRUs5mg8H",
  "key46": "3XjjFNbBz4AYjiSx88ti8mZeAmcdpEakGATm4ZLRtHzb6a3ReE1FZnowg8mtf4w5JqqtLpGiBK27CvdM2JC8A3GL",
  "key47": "4zZLfcpvD36SPViwCfH67XTyCqJmdREJG9BBcNgKquNWu3jTWVLG5hdLTq1bfaXYJXmoGFsQtfXymSkHmbGRGpeW",
  "key48": "z2uQnYwBrr5Jn6BCjVEqW2spU7PvPVCG3CnvLfbNWbX44E6bwmaojPGKU2QXtBSrZc7VqavBofxUPg2WMP4DSm8"
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
