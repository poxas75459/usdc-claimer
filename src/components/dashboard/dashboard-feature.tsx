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
    "4axLVDU4e2ez3VgqsVe7Vi4DwgqLRu9jvN6Rx93mnZnTvTdXrry5jMsjKW7Fnn54vW2WjrxNFwp3RY6Q8HfsmbLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vPaYCGWUb1A7pHp5zbCAvFCSEUNSYozQrAm2nDmMWSwi51FoZNfz9DgkK1aUzKD6FVLytRt9tum6sugnirfp5F2",
  "key1": "5C7UJ91DG6vGLarMuDjnufeUixbz7TbNpyQffGfxNKs8QpYUwhhNsj7LNADWKCGNDAmSbcEfos26nAJ1kkq5M9Ay",
  "key2": "2iYRpYp4c86nobgyeVhudhzRfGRDnqKsGrvv52jVaxVaeU2As1i9twnfJNviwdPnLWsa8355VKnwZAt7CP2XCafu",
  "key3": "5iqFM1jKFxtQiPxN91oEQCds9FCoRiMkjtiU1Xyp1U7Zurpia5XmbWHvmHhLtZx7aZqH7nUaXakrcLZExMt42NxA",
  "key4": "2j1psYSuyJfyXhscJdNe8QyMW7ZjuTG7wviXh57w2XLtTjPBJ9mfb5vUsGs8FdPVvvhcEna7B33DSA9CsMmD4cev",
  "key5": "4jMxuQLKfvZzu8wqqHWDuqvf1akomBofDZszcWDB3sXsut3eEoQz9va3dMH3VWJQTEGAjFWcA9eRWjjMmCVLBm9",
  "key6": "5uzqbBQ7MveycA24LxVrtdTBBYqm118fmRQvpdPmqj4VxrJebJKhLoh9hfCmsVS9u3SxJ6ukJeAAn4cDBG4ph3Aq",
  "key7": "3jU69zXPWrBrYvmST9S8Xd6r4gzPpRUoGwXx67v9phpMgZSeQdmDrLwYEds36ymXDVKvnNtsQsha1eWoU6wv116K",
  "key8": "4tHFHfWyZiVEv873MvGPeGtK59gri2dpxDS1LJ56KhAziuTLzzt4vsqDk3PKmJb2evqGodeBDLsGipoAabTPEgr6",
  "key9": "ghWCTb9PX1tKxQc2rDWvXAzddmQEjYhRigM6x2AnzPJTuo9SJYzfrYg32qsZSHoBu6E2mPsRmZ1eFXN7xLxfKtK",
  "key10": "5QKpHKrhVa3voTutV8T9EFMNLREWFMVZbGuyvkuQjidvzZQUUXDWk7YJw3xrAAoFeHD8S9MqmUDeYwDRwEtsaL2Y",
  "key11": "64LfFAZtH2TwpVvF135AczdzJQPg1iewz8BUWJbgJ1Jb4txsp3G9XcsqYYGBiqEBK66sTUP6agRPVnPCKX6gmjFc",
  "key12": "4MoULRoZ1Uoka7u6XWe2k2pJtadj5PnR5mu4odcD2WhDMd93edVNoMqkGe6EMjdovo334SWfn1n3L34aGu3cvcG7",
  "key13": "2mjzq2n1LMs3j5Ja1przwEEX56Pa3T4EeZKsUiH2yksD9D7AFbBSGJmZ2PVQp8NRusx6pmmAejzVoFscNzxkknps",
  "key14": "4PZSY9E9gtThNE2NsZCvbBbeE7ZE77mhZi31N2KpzL88XUDRXATAyMgxSEngAhrcAHJmMvyxy7papHiBve5kaNiG",
  "key15": "3axa2biD467nSCispFRhNSqCSW9X6E17dQrRRDsMz9NZZKxdTjNRLyF2LkHMnHvFC8kMDnRimUhjQNHyC6KrEZua",
  "key16": "4mfzpnpDqrdjYMfekER9uYVjTV6YGLfHExyW5dNXDRXyKMwzq1Q1joHjKvHi3zpkyt8ReYpjWx144csTfRvmoGUk",
  "key17": "3vJKXKbqn4cWGwdSkyjoLfuMBBjRJMrWhNf27DCMcGr9YwT9eASHUyGBFujmb46tK3rEBgNPPhbqyUWmQZ2jCivb",
  "key18": "4M2HbNbQv9JCMZS6uNEP2oHwNvyF3XMesG1D9xuZFgtpynBaA3ooiHnvQWRFAwSBgrh1HihKJzLKrsv9LHHyxmrm",
  "key19": "4Kw1z3RkM8aH8GDKBjtbKxpjFxcGhS98K6Mv4YcrMKWJsVvZPHtCNWTx3gFh2ehr8o8vRpzt4N6RAYymoRHBexbC",
  "key20": "mZun6iavwos4mp2DmVwVXLTWDTxQWsjfsNXqnX1JngHhYBZaQngNSSyh1h87roDroyhPqgAbopavD9whsLyYZSC",
  "key21": "2sJdDHoBd2f5oT7N4Td2yoPgNwdLf5yuvoJdxBaA2EaSeR8YHPMgCGCkZ8ZfNBnP1vFZMmbNzNSUfgvtM27CfEw7",
  "key22": "2pJ5pP66ULgtzKqr49UkAA54kHqCM4tU3DdHFKH9pAsunqvbPat2q8XBkbPnUJD7rinPXXgJnBpKQkRr9JJoB4Xz",
  "key23": "SBGZoqLn9D9LJVJbuFtyCwsvEvGtWb6qkMFT16CV3vAkGbQ5vmUt1nhAB4StJcX16Q8GiLzgZS2J8Ho3btz7pvr",
  "key24": "4PBJ4AhDGtBcgS7F33iymneD6jbagLvjKc3qtz9acE471SZAfRcjvL9vUbVXKV3145geRrmpRaHuzq618n3A1ceX",
  "key25": "5qAjC6eZoQnNtZ2V35uCLoun9CMbhAh88KSvRKnJv9L5UpZC3q83JAxk7KpvDd7GzAwEmx2Dxeo4vjxphGqdPJT7",
  "key26": "3C7LZ4Bbi2kiBgnHp8YchSQNPzAXomNYQJdPX4SqnmqM1JV77RsjhREjHJtaWC262WagiuhCo9tWRpGisxsJvAB",
  "key27": "4oKTDMV1SwC3s45D6M6L76tv7JGsvTLJXaLquVtjW6jMbt6S9AbZ1X4wZTBzgmpwmXK98Bpyst7EccXLM9Vi2kvu",
  "key28": "ihF881qu1PXy5kMr541QK4G85XuXvyWTET8VBwWd31wYZniAPSrmTKnxEVY9CPzYyQ48pEdxcK5CKVVMS2LkAgw",
  "key29": "2N4ciZjPBHq5WDk2qE6jU4rqgQU6rt8XPvreERutueuauKoT4ZpyPUmzPvDdnNjLRougAzaGWW3UdxRJjX1GcgG5",
  "key30": "3jpvY6GEv4TBLTG6Tq86pa9r3Pamf6QJQuGeHPdLfBxrAbsFE4vRvEvSyXAbEZKgjKf7QL5GG6aunFpHXuZG8HwW",
  "key31": "GVvWBBQvyecxnxNGMMRj1jTbW7DdHGFGF7UoviLeV5pPaSzfhDbu1a1zG7YzjdJ1UncDuiNDnm8rJDwPHSEVsoC",
  "key32": "2XUYtyRBzjYjXKajbef3PHapPiKwU7dKhYtXFtAHuJk6wApgGqZkLPmDGHyn6FcQ8kx6moDGZerZ8TYwPWNtAhhT",
  "key33": "4x6YTSC14rQNsuPho3x6ZACn9fspzJirGesz6v1mZ1sZ3ehCcYmsMKm1VCQME6L91QR5XsEnDbdrQycKQk75M3Sp",
  "key34": "44DESp7fAekJduKgTPMAnBqtQdv2NNEVQ429MoPFnNXCwgQb3yBCMwg1GMUC3mrD6D3p4HVXLXviTqjnRy75kDpq",
  "key35": "5XC9bLLaNF8dkcjYp5s2o8XZ1p3URTCKVEWtJor2atPXQDAtQRsDD4w615Z6xGMwgFuYNe46QuQyfwpVYUVbYrAF",
  "key36": "58FxDPG9Vbne27oMdALwQNw9Mbt6AQ3Tf9NCguaQs1iVbZpxmxraq3dBtZPfPA3Dej4wW5Kzs8BYex4vaYvmaSf4",
  "key37": "4BXmFDGgsGezp9j6ZYr9tbFxvMVudx9qn7gwcP3znZge5zLRY71YSe9H3f45Hwt5JScw7ck7XCLXRu69sPqCGYb8",
  "key38": "2jSjzegTcpojFy2EptP9J7U7ujbwkHZVVyMdU6imvW6TKk4Crtz4sTpGVHrwXx9YokmBFG6acq6b5PZChMSNm1fT",
  "key39": "2wz3VCHjQRMsBWjnB3jx513Niyupeb2VsxchXo9MoGPDfBh7h1qBTU1wby1VZkHvLmLPWEGHQo3MYy3UpxursTY5",
  "key40": "5ebEao67uL7KQMAWdaNDe1fHsgTiPin8cvU2owmnxRRDT3ihvt2yc9Csvp4bSLxQE1iYELedJJ58cCbAFupKgrNN",
  "key41": "4oNQQgvUhVsAv3yx6NSi6a6KCyTCGArkdPZmejMagnYaZtfgcxBFNcAw2tnAi9NKEWh2EX1ca96rYiDFAkEYNjX6",
  "key42": "3rmQKnnUtk4bBcndWAs9HxbbjMiH3rSmifibNhZ9aDgEjCyeDEVdEcCgKJtpDkXkJ9egaTHmPZSBcR462jxS863k",
  "key43": "2KuozB1tNxFe1z51ivacgVaYYUE7AeVJLLH3N8Ram8sY2kGeJbJiWc84gyCy5WK5kV9zaL3JM3CTXe9e6EW5pmWr",
  "key44": "4bQnSNLx2HFy75cXNMiLbsUcLdrcYWQT8FJZx2MnCthkDABUDf7YeKXt1Yweau7K1Gi6rVomquXuveacdduRDmaw",
  "key45": "4nQzibLX5CerLjths7SK1SqVkU9BNwTzPiWyipB6XtYmYtj7i4n6VxvjAwm8K1iuNT5wjfo9CQTRrNaMmLJdfMHU",
  "key46": "2BUGtx25fVDGtJAq7jZSNNyXxbG5oLhStHb4m667SmPmXzisLNRbhhyBaMy3EuCcseUo8Q6srEd4EKkwc7FkrGkj",
  "key47": "RwyVBTmbyAXgZSsdWcoucjhEbFg4UMt2TgkkxhZ4Z3jeBA4jmcEWRmMQQ7LexxiVxnUYiAaKrP9o5fyBeCHxX6g"
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
