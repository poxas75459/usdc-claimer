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
    "3H2imf2j62h9ey9MiVBDpq7Z1NMPhPb3yV69kEs99njKGgWh7eTx2UygxhgCndKewBnPVcvWFtuNm8kXGmngYhbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53SmRDURSPVoY8NoQxPSyeAvyxqPnxn9nn5YFRf7nLZTBgpKhyiJ1RcrLGrf3JvANDfztfBvmUv4btDpCuG7QcVY",
  "key1": "5E5waknEyeLKCShEDjLe8ZeXfkR1GXtWw3dyYu56fJrpPx5KiWMiC76Jmr66jYrLroiQZfmUQA26A9qB8j2Ch4ct",
  "key2": "2Jc6pCvAfpzsv4F98e2K99s65rZGy4SzyAWDhvCHjb9KtdqXW3Vt1y7qA2uFqnU8pgS7eDHN97rG1oi56Tn4Q9mX",
  "key3": "2BwfFJztuMNbKnJAibzZzDP51iVQCfbCRGa5TnMjXZ5QJAKnvWhxxdFYjDMHVqtJbDEavMPkkLVMURgvXUNaGxFR",
  "key4": "4dSNqae2mkqMJ2qP6suHFPxWxw7ffHaaokRhvhMstd8FLGPXJVa64xJTyBEZzo3vTdPVv7AE4eVJ6LWjTEmpbTJU",
  "key5": "2JBLiyZspPZ35YvxsdgPrSwhfGEgxnidDeS68fQsFDiVpnAN364ACwDAfV86FtmMP3hy9eHkjr2V8cmqcZT4C1Zk",
  "key6": "2YW7i1rZjXL88EouUJXZzFPamqf5czDJ3D8YkwKu5jNMm4UYAX6WgKYWJFrPKfH8y5w3Hurbw6JN3x8xScW7vb7c",
  "key7": "4sM14DCZM37sZN11AgkengzDXhVHi5Zj6ECPYUwLLV185siRCvLy9vNWsrDnv5d1H3QimZkpgdUpVEmmMnPC2Ukt",
  "key8": "jJqeKtNd5LY74sGSGVXbS5BwfTWtV5PPJCLaNWYK3UpVygCKoLN9gkgCRFirBSFC2aiGMU4UujhuEkuEjaKioCS",
  "key9": "2X6H5Cb8a6XPXo9zhPE6dM1UuT6Hbca2C6TDpabNakgd85KykbfcXHys8VnVryuRxV8r64bw3ovuMrVH73mPvciZ",
  "key10": "5cPQgG6FkcN8ZF59fz8sU4jcHfp29bGtEdrPCa7eNK8Y5tEpERAWEcYEsGDN1UVreGzphG1nhcy8xYJkMzE3XFY8",
  "key11": "4ahjfcz3zsaJSPXmtbHfTPafFJnkXwxVtW7QgZ1342LmZjXBN84BysCTbmL9pZBrzrVVmkojxmwLciy9DeCBtuJQ",
  "key12": "2UKVJZLmRCeh3jW5fvnZx6MJNrHJ1Gd98ZMNSCd98umLd48LFVd18HGSWzpW2Bwm6xusqkoEeg3G56ppWq2ez5S6",
  "key13": "xMMtpTLWtbXnoQAETjCLK2rZ8ukSx2Edc7LzeKTTEf3ipF5wLPYfwACWqNg88vvzctpSSk3TdXaj5up9sE9CTBS",
  "key14": "LbKohLwQh8JGHRAwdhtLkrufrBPpCGvvfNJz8yNLAkzRvBi9UiqHukXXwE8SE4QBJ2735kCxT78X6EZBDNKEaxH",
  "key15": "2dt7MQf4BSbEPCHP6WYY5cCPLLTMkKxRmL5hA1KEwyiTvEC4MrvMWHFnGFk7FfECh4xx5xg2KXzEgAZMhE92SBs3",
  "key16": "2yApXeREnVLMUnK76E6pAjfSyHb61JCbrGCBu66mKxRZekdLAuHcjqJ72SjoMPHSKcEiMunx2BZzzBGg3Jhs54Ab",
  "key17": "5S5mSzCuUYjoe44NG3xTL6wtkuMSyLvSdGovMipj7p9DZnD56B7ovjmEjG8BPft1oo6ESAZZ3pAChM5mNhhBpb4x",
  "key18": "2zFcqehLAbLgGriiKHyvhfRTzVVRbfUmPKzsCBEok8xwEuF27exdrJXMdmmTQbzpsz2PuvYh7RxpET4s5g6fhVSa",
  "key19": "3qoYA4RcS1A7p2BkUydyS11BJaAHWVXNKDrTSDSwNtsBjNfcZ6CtWHxAQA3ymVP9VXFqxwq4rHbGSKuMj9deuMcm",
  "key20": "5PNmQCmNUFdx5iUfGtyPwfbzUyz9LJjtaj4XSYzEbpUGB1CGsE4ycCoP4wsgy8H4uM32iccxDu71iZBNtcyGVXEA",
  "key21": "4eWoXFRLjN2oyN8cp9BHkEqVFogc72fUkqZPqwDQwUhmewDEfA4omXYcUoEk6Np1GRkSQMLoV9STf1gixsy1jj4v",
  "key22": "5epQpoDB4VMuYMJqibauS9JxQBB1aPLR8DuuhBrxC4qwGLakELLquZJLqL3NJ2NdA1WMVpnK2ppfjHoSL1F7wLbT",
  "key23": "3sgqKswS7ZQE5M2BYY9JVdFuUxswrqcMS88wnii7Sz4XX1pH47uDvaWyhxaZ46g1ua4HHNrF4viZeuUqceyNunRo",
  "key24": "4KqAs9oyqBaQaXrAkabmpxohH1SRSxQ8u6A6qY1RBUptQbhLRNRhf1DQwAw8WsMt9kSU6x8NqxBa7NSD4TFytqg8",
  "key25": "5GzYet725GZoLsxrHUMFyiyKUBNC1kiorpg1LpK96CVEEKT8REzcruwLHno5MLMXfcay249NmyzJHnPEVSbyH15a",
  "key26": "5r1dvMpdNKRFXNnBqe2CLi1w4vRq2YYki5hTpuW6zYNghLjWzmEY4egi48Y5wX4uLKY4oajxLgEEiohGALiyKTKB",
  "key27": "49roAnNtMLyuDRhfYZM7kzEx9nZUjmELmETkn68wTjH1G8sNUBTW77WaYxpvhdjEaRVAEwqdYKvH44pzX34gwn86",
  "key28": "3ZHg31XVvpKY3LgoEJMz2hyHXpE16Kfd6ScYfMNDNNfsMmUhAwSnVptMDkGJwomNqBevkzQ2nBUnTNBytH27svM",
  "key29": "5MobmkuDJSAZSzc6siu142JwWxFXDfNBE9dRjWvv81TFU4XTsKdxxNVGgz373Bcp9k9au95fDWh7HcMCpSnFNmTa",
  "key30": "udtCzFxn6fi1Q2hQL7v9oCziW4bSCUaMkQ56k7epBzNnKk7VSqQadb1mABp1Bsqty6vpEzGXQWEoGSxj4yuGEC5",
  "key31": "4SwHmddrgJQpCtQTxSGuEDuUuVDwgnnRLdcwPfpwhExchEP3GGg4781KkPRYwhRDrJ3akCNkrKGqjyXf787jswoL",
  "key32": "3r62iJKqunQwy6PACe7zzM3LF5VLdUKVqdB4AcMbG5uDgDqocGV7q7ooht8b5uCSWHxfC4qdgfg68pVujwNFssGY",
  "key33": "32uRZ1RYu7ctyViDtFnqpoxrVaJESFNau7KrkHFeZAYA6bPxN32pmzf1NaL5XZpKbSYeU9wQoNFC854CYYaVHCAR"
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
