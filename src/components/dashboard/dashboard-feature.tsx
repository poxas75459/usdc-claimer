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
    "B4EzUtGpRJyQZBAd8RL2wen5x7DMH7hkNXTX3oReTea3fNPVotMDXWe3LDra8V6gnQVPgj82dxzxhkCBkMhwoxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ykSrtD39VX5fQboPvTJEx4YzK17Z4emkxVnQXCcCrnJU9s9UatcXwnzcctKmFT8Hg6LJyVBLDgaFi9WvMEJNrzk",
  "key1": "ocmquFcWMFPrVWjEaeNykZCo3PooLpzwqts82LNKDboWKnFrpXrtRjZH3kqJUjUXDf47eQjmCiFi1mR9yMxvyp8",
  "key2": "2MyDQRat4LybMWox4ARgPPK7Czz5mVML9Zumfkcgapt5ykHuU7QvLzpvUfxKkdemzYLF1birWBYKNp8Rkmh5aEgX",
  "key3": "3iYrL7Qfx8VHniRGKS2BKtKgJpm9rTkH6CJc2n3ojQdYmZwiuCpUECu4AfYQn1CVGjMEx7coE9jUjzL8daAGLiw8",
  "key4": "psqBPtZDaaLVSHzVax1BkwcXLqc4gCQb8fbVru2DmWDj45aJpqZeij3mnDXzQRUL4GKHaU8MSs1mM1EiRKq9RU9",
  "key5": "2PxwZT41HeuVKJkBBuGShHD85jBcQg5C5r6XsRmz2MFX1g5wKFrFTri2ySu2avfJG6VZawMgusgPjFRqW4DoLvxT",
  "key6": "3jY7MiZRPMGxJR5TNDdgXtPzF5T1B19pcphiwqvPPpZ2eum6nNFkzohnodhAN6ErJCY1o9nJ2nQJeqken8hRgcXM",
  "key7": "21CpWTzACXSQqk5Nw3ELyWhvaFJ161n1cVWe2NuAUR7BvNJiSVjLtDMQT596NRPP7HJVNXxWy3hJAEfFin28GSpM",
  "key8": "3oNpuDMFSgTHpGZfQJLx4QsCUB4Dxs1TPDHatKehYgqaBs6kzNd6roJqetFE5Pk4RL3SCck89WWsSjz1eBzVptwj",
  "key9": "4BRx8dwVZ4VvnCL3eh3zCD3sEobU1ySgqJRVFoKjmK6eUJPYP9KKoMuawoa8GdUrKvPvEnsYNuhmTpwT2N43nkcg",
  "key10": "357uJZBV14RPmACLhYfUy3mcRovrft1u3fTMEYPXMDTqjK9WsdjTkYjJu9gNFFMwnwYE1SzCd1edU1o5xfMPTb7a",
  "key11": "5hDLF387YDoGh6JxunPSxy2TKJ9xQvzMrMCFLGp4vsT6u7csKC6R3SE1QRhb49JERdLTCGMeFdctCGeZtWuJ5arQ",
  "key12": "3id2d9Y61jcnw13VCJqMVGxiwm4WXEGGAYoa2gF42YaZxq4kt6BtB8p6N17sGLzr1WQwCg4xJTZ9ztZhcYREXx8g",
  "key13": "3YWwjXdBxW5mUpgTYymDFuoC6FFferXcbuJc4hpu4nH65JvNUvFazPDM5Us3kAs3J6oFoTj84xXbe8ZY5dNX2q9r",
  "key14": "297Z5cUNzo8fEXDVepycfGshvxJgGS5UYEML2NriG4VfNtEMXGruDjLKJenS8D2Pc8mYAqKQNXXoawN2LP6r9sYJ",
  "key15": "5Uh8y56s4Q7FJK4vW9hzyCHJCM3Ahhfm8QiPHJ4iiSpTfkSE1QHK2a3effgLpt9MEWkbMiQ2iTNa8ArpTuZo5PA3",
  "key16": "4UwipqCyssiuNAtszLM32LvLyLZfmZ76Ydb98d4b3HyP9oLjycSBp7p5w9MvXiTXXk6pssCzNrw4HKe5KCG268qJ",
  "key17": "3EHffBiMLRyU19LG79wiMTaX672t3mHy3AwC4b7Rh7yYdAQRhYN7G6NCRu8mnYnNiccoH6GBuPb1kfWZqUsffr4H",
  "key18": "5h8GdtK6TpxjYWjrhSaMKa91Bv4SqKiXAfqsc2Pjwo3EEPLERMwDRioGZZsu5KyBT7TjTgk9bsdgoSWg6wU7NYmu",
  "key19": "4PyQpr2aWa8frvRderZJQoXVE9DRA3cKcWyZxeLCe5xjfpdNDDjKvK7yRj6GNvk4jNkZ4qj9piDezxSVy9eD6oKy",
  "key20": "5xAgcCfVccyxx6Uo6ACVC3pXz6Tz3se46bSgzVcgC8bXxyWRaM9qwn3Vja2Dt62atdFtggUPKhDginj6S1neAgar",
  "key21": "51HnrtyDryy9UDo1dKFLYvYRmQBUqpieyo3mMnDtia3TCXD7smmVhKun43T4h2jJxj4W1rKVHLueppdevBQ6v1xj",
  "key22": "8MBCRRfFC8YaEWGMaZUcGoNUX1YDtuYWULrVg1Wo4uL4hpK9sThnyLF7piecMzy58B5G4L3V9nr7g1bSmrpPpDt",
  "key23": "gu2VWcAezjUyomzX1bEu9HDsaKWzHnGytrakdhjKYPwMBjjWytn1TUuoQvSBiWiN3kjHrgi899ac73uaCZdN8kG",
  "key24": "63KAUQUVH7rhEX1nF8UChGVRXQEpgtjak6AVcrGVpK8BN6jYaiRyLuBNtFVYuutLXx3x13MVDHUHdxuSXr1W8CNN",
  "key25": "62tC3b5Ua3Q96c8j7GGkTvhGA1rY6DoWJsGxDsnEGpKnjWVA52DT642TY2qQc4maMRJnN1Grw7PBBDsrp4eYKXgf",
  "key26": "5Bt8qgJ3BboABhT7Y3miqNxMzGngVNisf5Qac778Bwn7MeD9UB4A9Go9SEdw6DeciiZCwdTUBC8WDPtdPHWQ7nZe",
  "key27": "cn9BA8zuvUwwLRUJKhjCbokfbcsH5mjr7T2nm1Q1m9id3n3Rt5Tm8ioUSHv3VRLjGrmN24oxAfPEcxXf7rJFfQn",
  "key28": "55Jd4dwK3sJ9aZDoz6BZQzHqXN1ifaqLCTx2Nkdj9vDWTzLLWzzpbRiogg4HFpXpSqucCz5XUtYDXwax3Kx3naqn",
  "key29": "3gny1HbsHQANsKLpAh5cVs92ypfQYAMh1cLHVAJ7BuJNcxfKTN1wPe38U2mxvHs3om2d4XiV8PS3hEsLzB4sXFAe",
  "key30": "3FE9omPTnfNfN6SsthThDH3eSShv26XmNNHc1gfqn8gCuV84ECszAspjv8BKUkrJDw722zXabaogr976PMWQSxcj",
  "key31": "5cHrh3mdudC9SuuEMxw3JFiu66kSDYA6aUANAVhLAcvqfb1UAg7YthJF8QNZXSRSjjh1z8aLRMFCPm9pZjDK55Tb",
  "key32": "2frasvo3arys4yChtyz4fLjzt3jGkfi4CginGMfods2fEbpua2S6GPy71NBQqzi18LhULAsrG8g33c4oNKB7b5X8",
  "key33": "5kfGMZYFTaxXUrCLotTkMdhCro9qwnQvkf5pAfRWpoJgTm7aJQ1VYdpHauBESTjscchvU5fSBdz5PECZb7YkAy9",
  "key34": "3h8WSo8hBGW3vFv8sS7VwKfH53dH4VpUgedycztvHa7Axta1SbzvjbMuVxaCvBjhJBLpvQMztwhdtK6pcfJo5SkH",
  "key35": "2uBaETQfJxwPaBuUV1pMXhU2RP5aPUFcWEMYgadqeuAEBzH9kVyv7NMTr3warw8TxErg4i5NFBhVVgsk8RRHyZP8",
  "key36": "qoJMNfY91ri7bLve79p5urAHJoKU6mouLkfLpDVNnf5xPmS5SY9upaBUcLdSmURUdeUYfDFxX2NxSebBeWz1ZpH",
  "key37": "3J363ThXxn1aNJFu6KzKBqFYbjqc5eGJ7HaujEHZfTKzb6wLRBQFyMJFm5kxQcuNwnyUvUZ8f9SGvhRQKdFF6dLo",
  "key38": "25eagN9cxypUvEC9ZwmpRGa5BBYKM9zSNLwRoETzYMttcMY9r9T2CU7FPEguc4EYnpg3RjkpXoFeiBdXLJ6PRvem",
  "key39": "nyjjBh2vyEidRaUqzEy4k3L2eAUSu17aSUKxMDeQBiGa1MPCgLdYis1qJ6CGUhAa8fAXVGK6M7NXXYhopEgzYLe",
  "key40": "hbb3hmytPLQFbbXc6HmBR9qkF4rwa9gEUEFCgaAq9D7sAULKquwZqhHogGWBfxxQaqNeEU8R2j43dzjy8GJydzY",
  "key41": "2bfUbZYftTS6h4yqQp4vaQGkfnDiNCRZ6pPZNPqvVaKAxSueYuk2swdwoZuMm8SYRf7qcYEazYfYsKtDgYG5Hv24",
  "key42": "3p4uQciDDHnwcQJ9yvkEZfVPcbgueZLfn4UTxVCkJfkNy9drniSUBThjHgk59aaZXVf4trzXHpwmuzXZKBwtzo57",
  "key43": "26SN57d7JHyL2Tk1btWZ8t7uMjB6tggxdfEDRG6XEzUA556koBTbS49zBQCt3n1Pcv5hFhNP8BcB1kM7U5gBdJJU",
  "key44": "5nycTWBSVQLn7rAeXUpSvUkHS2ey1gtsKBCWQGAvTD1v8grGqgmqAPK9rKy8W1kMxpxhuwwrgroa6fKq3x9SWeDs",
  "key45": "2yXb1HwEJfUzuWtgj48VKfMTNkguqqWtRSw8qs4e9DaM1QqTLX8MZ21ut9zZPVJ8fbgAtQMa6ahmajkdruuk1bXp",
  "key46": "4AQ2RLhdMQcH19JZ34cAmBYsVARMjGh7tfSiT3QamjHM3QeDbwwTQxpraBZERzynkezLTaUCLqSpKBdwQLoq4tCP",
  "key47": "488oQCgabim3kbkoR2n9RzoNC8Ag1Ua7FZH15nr9ovRdCepUJH9L9PKZNpY4U9WMVK83g6Z339mquZQDwoVBUhEm",
  "key48": "3fUkGM5jVDbfJSu8DN1xd5TYHS7x7P4t3UBQWjEJ8tPnQHoUhJBGvphVpV1VYxWZMgHkaGVRsdkL7Vap2nLm2hqf",
  "key49": "mReY5CH1yXTdUGhesedsJkKHHhWE2qADaLGHQPVKxJQ4T7Y8n2EM1EtqBC3oCUEdLQg334m8QEwmC9tgH1Uwrm4"
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
