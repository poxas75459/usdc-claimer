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
    "C5VZ1qw9UnuiBNm6yDopun8LWtRCzgvByvgPMgdwqt5eunSXpYUknzGTAvD9s6ijW51L56WAiQMd8Fbw5X38WDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MQUf7BXPkvZA4qWrGGT6m5SHJPL59S3Cmv2rsVBwj7hkiRR9k2UzeTwTRyrFY3U2KuFAxzzAXFg3qsKsZgZJ4oS",
  "key1": "VUH54zFY7P9RSAJwNNA1y9VQk5pvfR25DZEUWb6XcvHrXVsMjBDkoduH2Uxe8eFK6LiqrWaycfHPF2bKvk4dxVq",
  "key2": "2U9HM9R2KojFAk99Kru7JYCB6zBuV8VJF1HfhLFwjm4NFaLkTgmGi3pbWvHNkNr81sF6cStZaKqBW5ZnQh73iUGM",
  "key3": "5JHxzX5MHNkpWAsdShkCKCQe89iriZbFyhKzZniA1b4VYW7NLEVnbKiBBFWyGjBAjfsmk7q2NG6cJ5DPBzuFFS8q",
  "key4": "nuKJnPCVJDcydaxFkgNUm9P79n4W5HdHSRLqYJ9frUMNDj8JKobpGhGH9BiU3b7thRm1aj1U1RENVRE6ZJp7bLV",
  "key5": "4uFjqTRov4RFUkFdjq2pDf7aHL5RN4dGj9A7eiF3y3VoRMTTSq9Q3nnd9Rn9GKE53K7R3HbPgFsHiNiShHRerepe",
  "key6": "2Uiy52TRrQ92xZi2jM4L5SydsXEC98wpjgWsgiEBzqXt54PVxDDnf6KcXSPyLgSQ5sZFpcnCrxs7m3ykUTZ4rNLK",
  "key7": "63PeigMXMREq82r7oushr5pyZYPvrjuiid3s3P2nYvCsoks2ddcEnjTXMNEeTwWbuR5GKARpPXbopHFRzf8itx15",
  "key8": "2GRQUZ8Z3zFoyQpwWi5rK1uGjPgy6Kq3HU1jXSgnP5ZNQ8Pe6rHRur3iNP4HeYkvssfs9yzxb8Z8NcnWhW5VSjYC",
  "key9": "2kQEc4Fy9h66VKou8U11JSDgKANf958v2BUcW8BKSmxkjU3sgMQGkhibyzobthQmMoTKWc2SCguqmXHRth9FGycK",
  "key10": "2KbWhYPAnwJe1d94N49uyFao1MyjstcQCgHN7y7Qe7rNXss49vUD4PtfVfMM8UYL1NXYRserNmKowonFF84mw1F9",
  "key11": "65Ygg1RifFQYPnEduzwVQaRRXrCfeMcL2CKyz6tsTGYDdxa2iHBWJSU6GEm1c16197wyKHgoJ4LM3Ez2xWh4zrF9",
  "key12": "2kj4TDodRWw4J2F76feCzwFAeYnABp6RogTtZU4BMfx2kUa52NGJpuhteXVVSpLpFgy5SVPwfU1yKJc1UcLThBzx",
  "key13": "55mQCcR6TSAGUki8dftehvH6KFqWQYBjEUWpskcZfAJEnok4hAzkrbj8oYZTyFK3W4XpVUAf9i9giwe63nZ1V9KY",
  "key14": "3cQgALJBi8km1MztgRD2D272HzzXyd8eFCPwYbE9QhiDfvs82H8tViwbja2CipbwGUW4otPDAJphArGSDF1TCxMp",
  "key15": "5iLUfQrSBTZAPafiLqHwSqFsp9KH22uivF8JfkeUJi6pf6C8zY3iJzaTxsCbNVZKfK7Pu7udnnXJbci1xxA8V3SY",
  "key16": "R9jUMjRugCUAZ3wPd4oRgFwDVVAYNPayQv7J8JBemXag1fAPTbZyZy4wyZFcpLDAgrcSEF5pvG9egeQshPBwi75",
  "key17": "WFpcsGsnsvN1YfckavYQsPCS2qiAEH2e3ZEv6LAsd9c5Vo55MgGaJD8BbksjRiW3uzDHcnm6MCJHrt9cKcfYU2z",
  "key18": "4uULFMjTyviDFwY33X2UoosmK3uySuwrstpekeuFLctDg8jLcFCBdDPnkwKdAMpjpE3h9Pqajf2wYMJvkrfNLFQm",
  "key19": "twfHYNzvevBZLeaWgri8im9SBCenfGMCy3x7Erf59SehHdJZjkiGutJmB6Y5VS8sAK1b8A2N6c9GpHpmscys8o4",
  "key20": "vzvy4RF2jQd3BRCo2tGz6q8vHbSHAfeeRDVcacEHjMnnzMuPVg8g5H4qPMpJJhfgz7vvD69o8ArWLpyy9YKjKiM",
  "key21": "4ghuCzy7mscrCrJttQshuXSvoBBAPNDQcpfdpauPP28cYy2RZxrJGgQ4jUPLG4RNo2UNwf8BVmLA9HzT1uYrYZid",
  "key22": "3rVLeERZVSQdG4mpAEHMcVCSBkQLAzy96vqcuiCHEu2qGvTiRTGAHVCdUyYL6ZyPSUZccMFwD5F1thGcMrBGtyn6",
  "key23": "5P6HGWWdBmwnNBJJUdvg4z3ReBbHeFKGU2Rpki3SSGiv9PS6beNChw1kH4j7TyNEgvEGmSh4oPzmzeydnnvJYvkR",
  "key24": "5Ttpz27TdTduNuefz8PTkpM2F7KcqLummrGa1yG4NCyFJck95JMxNEKY4dSZcQ6DMvcspaBGm69xVv7Q2vzSLByc",
  "key25": "3Ji3fRSq56trxLzkpKRWhGRVfLQ6Z1n618objbfbpe3tXYc9x1xjUdeV9AqsztKAaSVaUTzn6G4PfxTjy9dUmonT",
  "key26": "39wKjiHJyNkup8SdmZfGPFGYYwAHdFEn3om6Zz6wz6oTG3VwMZk7ksRGT8cWQHAkrP3FnzUuhHYYAcGAtrP4pUff",
  "key27": "K5f8bqh83wUuTADyWfbxSCxJooFVcZxs1kw61SouVaQ4C1ZPHUPF9dGsK6AiCQJ656MtYFutStNpUYqMvLJADn8",
  "key28": "3KwxKscaqG7n91cqSKiJZDQqaLviWzHL3XMv7AhAmPHDXp21hjGxQm1p6iHpDkwZAqz25u1Co6x4eXDYStfxyox8",
  "key29": "61wCPCZn6e3ZXDSdHHXbQCT2DEy5L3DE4xFhLbmcZ7uo45kCZHD4fxZoE8SnNqDXDEdjkDJCDTkx7iJnE6wxgUWS",
  "key30": "45Myqy5Ss7cN7wKYdnbwaHGUqQGPoaHrKv99FWmEG6m4u7cztovcAcyuv7xssTu5tM7mgf11Wyn9RCF4hTmouM1V",
  "key31": "49s2j99BCmWRuU9RMRbfFoPCoVTc7nGWWv44Av9ypU6uESEbyLqfGAeJ34A2CY8Vh9x4FjKNnR1wnWtuVBH2wHZy",
  "key32": "4rAqYWiSwHrfguWGQ4FwgR5cpLGBjr1iUmKQVuKC89t9X9pa21rxU6mEsJAiRat8twUB9yX6dg2PioiCnv2E9gFA",
  "key33": "54MXxh78yZh2mRMMVk8XDN7wy74wtkYNA7FtfL69qPFbDpqaexHDdtuwzsR4g5bZrgqL46sgUUun9v22y4n389cY",
  "key34": "4SB5fQnJXJsMzq5MzMCdabWDp1ctJG6gtu1eX6ctyqN8vU2nkkWAD6yGBAL2CNKMm3oLWbbakwjcwq87Vmm9U2yk",
  "key35": "2cGc9M7v6VWA7Pk7WcvYBb3uZUZSDBJJghKRaBJM8Wz5pgKzhd2npb3QAzsRGz4eCriZm8c3iTPDzRzXC8DCPuE3",
  "key36": "2r2tLfbWWZLFQfrYzcYaLB8eq9Tcioyw9BDs4usjMvosoRq55ZHkrxv38nrKhHm3XfPFGvScJE9TWyG5UyUAbjL2",
  "key37": "52iMPmLb9N2VHzJbXeXyipAaa7yCacGmTSoWCEUiBfC1MMw7FKv4rX1f4hts6jyoy9Wqg8BQwUzxCaCMYDwqJUnU",
  "key38": "5W7TTCV7DQzY3cRw4b9n1YC4oWQCbsxU5fY1EcrEQBd1BJX74U4BDoBEMD9R85BV4v6A3QWhVd9uAzpkXDzFZ3n2",
  "key39": "2j14aXEUsZtRMVJHbGJYpKCKkC3NwcQUeb8wZiYVR9GwNWKi79sc6VL7JrzToyhbuRjACoFLk5EcKwPdACp7LPwg",
  "key40": "4AmuQSyeBivX3zWi4Z2eChevKSXRDN6ztRYHLHmsqVKmfxdeW1vEhcMEHLVUd1LpE1oGgbzRUWh2qtnPJfgNjkMi",
  "key41": "EPibksKwYufrdbbpFjNovLvknXp5cpdcng8eaaKefASjYaasYQ8UyzU7V4sAWKy2CuPsnpHDzWtnZERDutbV1BH",
  "key42": "4rHeR13uzC8taDTiL5tXLanTc9M98tEZma2jGJYHMoyop2ZoMifxp3kG8SZ5fxRCAJuHqour7FshjwKX2yv32MdS",
  "key43": "5SeGiS2FMVkDYmk2k3rM5imKqDZdbTyNN4ezPGZ9m9oLMTWA7zJdHz1EjfQBbCTusAe6gnzTZn1nqcEtDY52TvJf",
  "key44": "9i6JDDXuBVPnoxPyNsdJvYh8dYBdGKuwFHDd5NbzEGmJpygw8hGmMuFcKGTzU2jEHab7ginQHCunBugPJP8a3CS"
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
