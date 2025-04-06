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
    "4K5bWFfMsmqb2p5PDVgn9Nwq9DgKyhPRzyDBBX3NmyKwjgmbwKsY8NJL2xEuUcqYBgbU4gzKTACh1d83fYazn5Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEuH8JnoMJYHp1TPmRVLTaVGFmo8Fh15MXhUkEwRBgZ1i1TwX2iExBY98gwiYjonJqiFH6CVhars9ZhexReKvXU",
  "key1": "43ExeaKM6RZHqPveAp5R8md4CfAymnqqUWR3Se2aHiNJ4ZYG68y7gWepZvcYSELRQFTVUabvZ68EjuC1VfotqzcC",
  "key2": "3PgedL2cyEQTjHNRD9xxHpAzhbK8WX2kPn97oVNpqiCjPqsCjaJ2oLF4RkZYtBYxxvAgr7mwLWPmSfosMCriAdD5",
  "key3": "3WtnXThZpxmWoa9xeYZGLJxePzp73ApS2R4NTxXS99hqLppNF2ipMhZejJahStDgJ11HdTNNbq1sQjzyKFPLxMkk",
  "key4": "5fiQpXuHjxAxVSsAQBqdEs3hJckK5KozBQ74pyM9kMmtGrdh4VhXTyeo2WWACeZ1cL67q5JWRrBrYEVC9eXmYw8h",
  "key5": "4bvYuuwTkebrLpqNAsVHFzcewYVngJ24mqKmcVJ5PqngdZ8QrP73nLFF7FawzpwqS2SAN8wvhXePKBVpWZpaR2MG",
  "key6": "5Cg1nvYTZYxyEiJu5Se7KpzAyGrhwfrYsbXPxmQMb1CkV9JdWMqZV2LBRhh5kRvxwcTUexbZ9Evs36TDecAk5TKq",
  "key7": "5V5bHr4x3iKAUcTHMfqYdfcJijkfrvjCkMQo5M7ovrgJ7CtZx475aNDaXWARgm8vyE32MKXMMttw7nvJayisdEgB",
  "key8": "3MgtNWUmufSsEYdYBCByfnni2suAuj7ZdVUDAGD9F8H2DiLCM7XH4o2DVL9ieEHmfPKuE3vRRUKfQ6qMeyYLvsUA",
  "key9": "4d66tVBiCyijW7axotR23Q2d4PTgpxNmdkiV3HCjjEXPTJoiMtoHJjQhj2vHwCo1M6KtRDKRBu3LZTUFgSUVYP1F",
  "key10": "5ff7sXfXisK3CNZncJoRiDKg9y4c9rdtHgmptZmc3zZVeQrbb8WNtKpo4KnPdwoV11mqi22ToeFfs46erAAe5XcZ",
  "key11": "3nTNWPMx9qjWaF7GYJQZpuCCatRc2v8wJec8dFuucHMPGxQhkKVSPyLmY5bumnc7aEWfLNsHNtsKXj4abfmha14v",
  "key12": "2gAyqrJ6pTkKEy6dm9ggGPZk7rQkiqEtV3Q9NduQj3qTGRAv2qYvQF3TbbQm3VRyhgDjADevNoFAETXZBpG2kM1z",
  "key13": "4e77ayyCFd9zwMr7CFny1WjjUzWJ52V3pwLg11VNGwiGZwrobTc8cqTeRYbU86VnvsdKtZ35FVAe2vPxGfHrks6e",
  "key14": "8jE3hN3mFhvtCpvc48ViZUJYDh6hStGG86YzJys1zBd7ETjLH1APEHgd67p4fANczTEMEcH6d4nNQMTeCUN6Rky",
  "key15": "5RwVguYNvERi6b6GYuiqxkd8mRLpDaESi7uzVaRZnzvwMpYiu8ga3ENwDL66GFxkwdZCU6tYou2jYgSuPwAhUkC8",
  "key16": "3HFpemiFQ4KE6dP1m4z2oKU9mFVCoCHk43mjFNCLt2EBYA1yKjMfwjNEdxxvSr4TtxrPXtg7P5kLFQCDHStxKP3D",
  "key17": "4fTWiVVx5BoYocnbMrnGQ478Pmv7imuJkr5co1WUbdddKRZGQt5gRcX3LGswJWHX1vq2NuGgS1gJB52zmW7xx8sv",
  "key18": "C3p5TQGHzNdJRtpTLf8NBS4CpKtFQFmtyzCWghCftxGJA28ZLP1q6DWFAaC5PzcuPEhNhZnu7Pu9bTNh1TwKstj",
  "key19": "3iLskvBLCicfYb981uCCfbR47iHHXRyakwZncbdzZDYij6KaYY41zWQayEkri3iN9mHhLFZ7Lwc3GcpzvV2GyzSA",
  "key20": "3GbkSLrA9ec7nj1J22PF6qnzoGxDGgEyDyM8YdLkeKVc6HdsAdUH9w4HeNQSLaucXeVLw1ZdCLiybNoPycadgY1i",
  "key21": "5j2yA1RM59dEgNG2p35ynZZgLnEHaGUv4ASW92adE5io9FocPFgU1wKNtRoTaqctMiZHwugsEuWpQNqsodFeV5aK",
  "key22": "4vXgjhPVar3Da7PVgkQfCTvEHfudXchWEvYVtBTPUMFhNU4fM6zkqaENWRbSDbXJu2kDatd9ywSvNgX2nu94N7S2",
  "key23": "5HiY8V3LaY6Zhds2fh8QB59uUgPUmdbDPns3Dkh63dbWMTCBusNwY2zfUogFbbKjcuh6Kq4MzhTMsfujku5359Uj",
  "key24": "2iC7bbAQyyuree2NcDQPjq1Y4op1hT1wbFpRxTkaAFjZL5SuQH8gNp1ZPvCK8iLkxg5AMFuvF5mcMTQUbFt7bvtE",
  "key25": "iwwb7m16GwaTViwawQh3DqFnTH7gERqED8hFD2kXSA5zZTL1FiTiYwxQndxUTdHqL8skFRXXTp7my9qBaJ5Y4xa",
  "key26": "3YEDczejPxZJYa2aPaXZBgTPhnE8HPmbs4d3JAokZYknGScu7gPJMwj8z4RYBfWnFzHNehkGuQUvsyN5tZDoaZkm",
  "key27": "2Vushvy7e5A9AcQQF8P9CBRSoeSoQ4kReHJqPw3gS6Nodx1hB9nMRYrac47UWh4o1N3C2LVy5yJJM5bp3fCHWDXi",
  "key28": "5KovoFuSsH1AHMAFV9QQeiH3vPvjURY6iAAqoSSACEYicuo9Z7DkPuoN1fno6RdjKenD7qjFzrsDXmqtMpAksMks",
  "key29": "GuMNnGtXFhwtVPbPaE2Yef5kNiYxPAKXhecnAnNYpBh8AkKcikyyDtNxi9YwAyfFNXp9rtgSweekdDPLDUMBBcY",
  "key30": "4CgCuxrMjPMVhUWPSNzEw98HzuqJdwRN2LZj999yGZRCz9kLzSbPXaisifP28MTDs7sdzD2sD1ZNx2sgcG1tjrRa",
  "key31": "5M7UDnKGFczSuFBUDzSQS95Gmt12iwLhWS5KPqfNLnUAJ8iHrxp1LDUMe5q3oBs6f6ECcYnzeEQvESUd8WYkTr9p",
  "key32": "5RQ2BsrNEnGZejfsGgMtYAxiPqBchSdC8wHfFf6FZ66mz2MUR3ZPK6N25CfVuvw1FFca9H3dAWhVY3xj9Rm1AzXr",
  "key33": "2rt3ztXxynoJTmPAdukGod7VzEUzPDFHVU8LKkGj6TMprQdNWwcwENRXxYDEcisAWG2NgisMxbBm99q9mdayTMJh",
  "key34": "3Y5D3DUpdwXys9zvNq5DxdPM46g8FDLUePwxiUh3DQPuzEvHr5X1Gnm5unyaMgZtHZCQ15sRmWmzTBCaJvjgeLAX"
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
