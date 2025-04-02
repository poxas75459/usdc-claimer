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
    "43paxB4pUNmMAUMbMykdPVUVDb5H2Q6VYk2EJ6PihDrqnSDeAvY7dCJ2J8sdjU3GAggYmFKVVHyQ4PxUyMeWW9pU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nndy52KUMDj3R6zvcEaU2EdQiWrbLkwrN6qaRwL5hFAAJMqm5wBuJdhsJDmeXZryVQsCmBQ2ZG3zXWPoFnvB7Go",
  "key1": "3ukCdF3s2zVPcw4hzkMnJ7A5GAdBTUi3HAfQCHjX9sDYGZXkZDSgWKc1GurDAhzeTACqpr35dV3LMzmMP5hxS7oR",
  "key2": "4NRQe3XfYgB8dpMyGjZ6vLjiqXmbeRwVqvZn5W1ewduQxEJWHba5fLVwY8NeUGUxEowpqoWbbf61mN2NseUsJxuf",
  "key3": "4GmXPn4RpiKYgXuwnmooNumn6DaLSZrPfLVXLUaZvikdmVPq6qRXWsoa6TAJfDkxk5RFmazTg6wYgdgLhiga3zog",
  "key4": "2pJWUZW67ENQAAAHvUpVcjh8hYwjMGiMabUeE1csRCiaSAqDnxc3Ynnz389evTk2PYVCdaRC8jTWcY8nwGtzq8hj",
  "key5": "4436etbwDFGCe5BnyXhCgETXZEsXbP96JzYJ51cqGJyh5HgGcZ8ppJYWLESFgSA1SYfGNLiSyX4LMnhuzd5a7GGK",
  "key6": "2THJDWGmpbZSEU9roWavjePpeEsV3fY4VDuPsBC3DHFzxipALCCPNzpFEPkg7Zzr3xVBuFKCXJckTfuhxr7cpJGw",
  "key7": "42v8va4f7uBcNRLpd5tdmBeGYQ3sAJxKyVg1EdJfwT96XTLY6UpS8ZzwFveaDBxYEwh6nDHt6M7MAoh8Ucdg62gV",
  "key8": "9Cu9ztr37u7ev5VwFGNZLibRbS1uSVWsxZ9GLQYq3u7C3zcmNsxGihnhDFGwBWyuSeSUGwPdzdnCujuEWVMzUmq",
  "key9": "5vzCPcACDAMgmR7KRK6NARn3DYgvinmpsdj9135o76UJSQoMzZQPWmWuexg9AZaJWy2zFV5wbCkn1s5cW7mYjRAV",
  "key10": "53t61fNDsrnBuxg7QppiSZZwamWdYndZg9ksr5E8LgUZXvbnt8K5ys42PRs5uKwSvwiqjcZFrndAqhtYz8qLuttb",
  "key11": "4WTmUUJUYg5RuUgM7zTx8fmUSxYVZ4hqdj9BYcPxfLgLgm3gE38nh3Sa1JE5KCzNGcjocCjJGwcLm42Na2sPg15T",
  "key12": "3jFX8mpwqHDjy17JspLC5RnyvrXfopH4JVzfq9vmwCV3x7RSnmemEafyqjPcKj5viaLedUWrsSJpYtmTMc6q9M4q",
  "key13": "2D19Xd3DNyxrMujSK925CSd49Bo5oZyWMGZEDYyMuNukBQivDHf3FZRkm38TD8p6g5jfwsp4KfpZjvYD7XfTm6di",
  "key14": "2WpvWxr63ycHHa9e5AgRbE5VEXDS2vvCs5ZXc5oTBuqcxZk9apapYwiiKaYU4pap1EdmsKZehs3BdhGhTRQTym7M",
  "key15": "3HXeSH8Z5jfhTEzsyk8ATfS1CMoXDqgZr7DvDsxE6A4Wihp2eDus6tuaqswgwC7DZT3oWauobcoh67CuN75g3pyf",
  "key16": "tDGY5G5sCGsnmJ93KqchzWnxuZ13YQkAvVjWDipkaeNgVTyG76cL6xwb6vog1YK8vCxCLhrCPXe9dHMdSBs14e2",
  "key17": "3eMiYrgiXU1tUKVe9BMLLZfQr5LoSjDui4kPWcuZ16N8CznGCYEv35LBGpeHfp7C53zroeTBYhERmhQi1EjWnyN",
  "key18": "3UMcnAQAwxujsPBq4qg26bAVAW8DPFhG1b9W6biq8zuotzdNYBFbygpwEQGRKWUTRo8LkuvELicHnEoRhpoqrK89",
  "key19": "4gA1ep4rjJXBLNz6yKcqfybaxdYNzSMGFammoMyFdpSU5M3FJ5N51xQTk9eSvFiSx9KhJJZ15jkgeiGosSXPeE33",
  "key20": "4797ykdFNvK3Mp8TKCrywxecfwyscHcXbqega6Qv9bxQkv4gThGyi9ay1WiNMhVko7eAHFB5FEHGKZYcGWBBDavg",
  "key21": "5mFm12jRETo3T4wok3Yes2A1tEtkN18u3SCcXTXPaAcp62Pyk6vp4NgZskjanws4SXC5HkuFctC76FiikYXvbTAM",
  "key22": "2CjQLJhEfehrF9reFjCqgagBDZA9Cd4FtGyhu7Rq5tYs1h75FpfUhuyVB5MF53T4rZwPKBdaMpUCm3rkLw4jPP1Q",
  "key23": "YppE2oSseazU1QomTRoChMSJbb8u1AfoYUde2UWamAEu5tqb8TBCAvMwAjnzQLsvDexQLjx5rftW2rGEJG13nxw",
  "key24": "4DMEQi7ciiByeuVA7Y2rcffdmrxuTESJUAscLUyKYRW6J24gc6JhpZVHDXgeJweaKUSEkzaQE7kBTRgX6qH9k3Fp",
  "key25": "3RRH5RHWx1RtPop8eaZxMRvVXL41mm5cyTdvzqMEQXks7zJ6NtuLFghSjQWvjPSvyW8ykbfnPFiXfet8y9mwjSid",
  "key26": "5yivecRpuWMWvmpNwqWhNzRGNS7Wma4E4fCzAzQCYffRf931J6pmosbpLXGGHcp5jAnKhjZHVtGo6oZy2GDdUWTQ",
  "key27": "2C9b9ZRNWm3TzRyPtEhJfN3tLZLQKv89A5KXtyt3Hu6eV3F2o366xRaCVJzWvpS9njxFGWBWnk16Xk6LfhnWWAyn",
  "key28": "4X1DSZmPJfhWp43BcXN2fuEBtQiFtpjLGZ8U7kTvrqMJGiMrbUKj5YG7Rz7EEs9nTCnCcCZLnEDUy5qo5vEgDMjR",
  "key29": "3TURSYcbApp4e26uQ8Zghiuc6xmBXAZKJPMZEpgk2rFRxH3rfSEVb5xCsAbtne4ouh6GGnT7gGjYWKio9dABVAHp",
  "key30": "288y4LGYdk7XSdKE1ogNQvMzWRbv1s9pwTHzwkNgPSM55xJRzmUcw7BEGypzUmYHnN5UuLf2MNKWWQy4a44T2QTJ",
  "key31": "2EFpDa8jZPDVFsj6v5y1ye8RAKfPponwFgGoP7g5btXFULed1tcbivzo9mCDLNNhEqkhBzJwococinZBntQFDzib",
  "key32": "3ugY1RHcY9yjjyWgPMc6HyTq4RnVfLFLSX5eKAHcctwxqsb8GA8VPNqKcfFPgm3NLNnYYdC3qZHaBVzEn5aaQfEF",
  "key33": "2rauR5Tvk5aij5xLB2gVSpwXDHoMQdUnmrhBcx6TJkBEzzyYbcsX5T7uSa5z7YQaspbVN2Rf8hD7wk8mww8EgJ6N",
  "key34": "3h1CZPTi3hd3QZUXfFhSrDdtGnkwMiNoSgo7hv5NaFKCDXEXYCVVe3567DMpNmCLGP4WPqFQ3JHLkGkwLi4UJNrW",
  "key35": "5yC4D2x3Wf8ysZDtoJtVVUCWxGtpYkgjbqYxhmmsS3tVU6ZhpWrSsuiMCECACnC9VAMqnz4626MDgqs47ojwEoQf",
  "key36": "3p8dckU4td654ruXAaBxr4pw1QHYX8WK8c4QNeVHD5ACkk6pH54dVxbJY6ZgSwD8dyXq4Bsp6FAxDa7vHbe28Afz",
  "key37": "3YP8YLAfY8DBANXTVY15gsmvSsQ3xKnG1gprPwAwyeCyqJ83VoxbcjwB3TnzSMNwE8ZstBSrfTigZNzpkNFvxEYN",
  "key38": "35YoyZroszTDEGJq6VH2VK2ptzGDdV2g8VwukwbrV7vAQv54kaibFTB9V83gHiHS4BiaYijkeDb6mSy9k7cdeQuu",
  "key39": "2BcPQBzBusyQrrkq7wRjnTTXMrodYcjY9gw72joEiTqN9oyvggYdbAGCg4XzfgBgGrQvE7MDRWcc962cmT29cJAQ"
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
