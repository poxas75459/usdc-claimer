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
    "FkzWYVeqTsbf6GSSPio6QXr1NG5EQ94NQXsEimrijzdWauRvNqVmjNeovxB8YivX18zs4pumDhDW95bCCDjCC6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EKbQrhGMZZVK9NCr85Bj5Whi8zUD8bupiSBcdhK56Cwo9AgxAd8aaJTNtqGgUYjnPzfQk1djJUCSeSrUQqoNycJ",
  "key1": "3cTjDkGreZWh7NPW8qmZCHnzj7YUmfC8iBurxdTjdgvhQ934v5ung6XwDrcfK5XYKgnbxq8Eondz2osibN7PKss2",
  "key2": "4WXxtbc2qZN7CLyMfBEuXtjAvhFNyXcqfJPPhxTfJwfyJWQyHycS1AQ8Mgbe26FP2Cx5mgtXGYPshx2C9mLuqhxR",
  "key3": "33ZiBB7LQ1aijSUvdQULsgDSiJ1nTpohZKaiZZdr6pinLMX6gBkLf2uhf852UjR1bskLW6QdJi9vJri7tGCH6c5t",
  "key4": "2qMYrSAr9yPTkoru3sRvPkyZq2JUfxojQWkqL8psSKfTdZFcYUFm2Wkr6rB1oMURS6GjJ8kUdZCk5BC9yxe3LFVz",
  "key5": "29xLgdHVr1GWA2EH7F4LDYmCnKJ7kJmheqwdDBLaoityj1HzfUwzuyxzRxuffFcjCr4ApWLRUAruxNLSKi1WLqkc",
  "key6": "etTDJdSHR1Ft3WNfirc3YAtoHCSE818VpnxJRoh4mn58tjyDmDhauZZ4zD9j9aNqs32cpsooghG4TKG1ubHG8TN",
  "key7": "29gRJpNX1ovVbQuQwHDzXb5hUr5JQBi58DnoBFY3eTKF9sAVoDvwf1gvdj3Fw5EUyM1g16qRamoz4qjWUcnJp13L",
  "key8": "2i1AoDHBNN1rfkAhgmwDaXZkgzCBnNRujHKJ7CNsaqikRha9JWR2Krpn11KydAR52zKfMFZiizCwgxcoKJp83Y5c",
  "key9": "2v3u4ugUkr42XQXLnXu8crvzNmMg4wTUV2cuGuXvEMD9ewFyHphFgprhEybsXPZ4VQSBHDrKsbcDmQo4z2HQjDFf",
  "key10": "35P7afYq7rhjNFF8wLuaJw77VczSzTKbUBLqezXCtiJ2qbr229LMzH6nWTx5i6fbhTgPJT7dVScUjcFt5HPGdqdU",
  "key11": "4kjj5LoCr7X3927eRpt21mCUkPDjtTSvN9oWDdxEecLeFefWz5iEw5gd8vBZ7N8QCuDU4srQopjLrVQqmxwauKMm",
  "key12": "5AU8MmAgkEDgc3JUxoTCEtTuEWFnNNNajsdZCLi8MCzNZfiY46wWjGShKTZY6eb64FA6Nods9hNP4CMb2vh1JxfV",
  "key13": "2xDnqYeDtYyATG1q38dnP9LybjxNmam7Xx8dJrk6dJy7EKiGm1nGRnbueMrPJyB2KjR1LpNAYnBM8y4txD7NvAP1",
  "key14": "2BZXkpfi8tT32AJH8gapUwwQyTXnPi4qhNr9gbkApgvZUg65RKi1CiUeySHYDH6tRZvoA8urmRDZwxv5YpfuWwrb",
  "key15": "228jhHgxUistnJwCJorfWSELXXXXV2GzoYNDNexYTkR9azs1en24SkhpqLdBvHK5ZwGv6vMMkp9ZhvsFiQRCG9fN",
  "key16": "2cBuB1DwKMzbmemtJ3u9SS5ma9Fx9RK4Bs7zq9FH86itpsEf6Hb7LdwbEf6oqxuapbJ3rfotiMkL9HUkkFh4WXdt",
  "key17": "mdw2e86BwT2KH2D14VwEm6pzWwaV1KigEpRn8QKjpoGjbvNhsnKz2YM2U4BZadCDuCqVhgJGNk9mWd1vNzdFkHT",
  "key18": "3JYMmJoaLc2yM5qSEVA2xc6Xc5jh6Gb9Z5UxLdsg5Wq9oJr77eCvpyZxtVWo7PVZXboKMAnKiZRb3cZ3P4HrXwXS",
  "key19": "5ML51Wh4FV3dVj3o6gjq3ERGH4o2b9sMh6afhN4Z1RQgBdapqStQAEDrQ8Zmk2VrQczXLu78E3L9aWB4JAGJ7CTc",
  "key20": "2URkgvnwmAoDffTDSgVcQNSFu88Fh4vVAeruHiJo6wSdvQZsW6nkhLcboZ27hpKKdvXm5gawopoQn2DeRfxhUb2g",
  "key21": "2Akd6xpuv52iYt4MhDSuwQ8sXeZjAeJABmWDzGhYc1bkyYtqbK2pALnWvoVg1Qmm3q61xDQLaFqXCty58EeMV1sG",
  "key22": "8ehmzMbFzpPtZ7z832Jjyr11J36x7omFh2aDEVKG645kNK3MQECbBKAb7yd1BdV3FVPScVnb28bUeFkKbVTVfua",
  "key23": "285vXPPNr3S7fUR5S3n3ZEwGyy58ENJqHfWNsP8iajYDEMrukhGyTMeYy2Epm6kMWTnJ9xaa7ecCykrFqxJCxhgs",
  "key24": "5ZfsHhXj9RvgrRieEetXTZcxmndWD6vjjmtS48WNULcAru1UnsD3GKujQ5oC2awXyroNfM6iBcSqRkgB6pXudi6L",
  "key25": "244TTC2SMn44xPJ5NDFVXd3R5xSwFZmWnB2tMHnDVrmSC228v1mtx4hY1wL9uQuvu6HkbtPceAiizjPkiaCKA3pT",
  "key26": "4xdzq32HcmXirGzfdYa2Xtfb52271Pt7DVE9CJ57HhYdm1JcXEx9RkhNDiukXVdkVmhMedNxLep91rNmE6kjzzsh",
  "key27": "28hSXVHHMuaSpJa2E5pbgB3qydDUKWK21brtBFTQ7qrBvpwbzdbvwUg3PKWCnzJKeMJEFYpn1HFDBUJym8Upq6KS",
  "key28": "4AHGJmYkZ6tCCNERVZnf35zJ2Nepp6V7LNgTEcN9AvKwcWoSP1A3u7QGL5poD8g34XqfdNFPja36ag1ZhPLEsPa4",
  "key29": "3kh2mbS9GzZ368QuXP22fJnq31aDgRQsNBMqyM2CBdVqtnpNNQZ4C6LZVDZ13WAFin27u7HNR1RFdNM8thA4wfLm",
  "key30": "st14ymzTNzQCeGBCVXQTup3NVFuJdFpX3gCymayWetb9azq6TC4bAqEHRvxwgaCua8gEotXrMNq5M5CKeDbtywr",
  "key31": "32853B5APz69h37u9p3kyqSrg5fS7bwhVNcj3tVj6Qryb2VFddJohM4ryuiEQmBJSRAZ2EAMjezSxdEJk5bNE8bT",
  "key32": "5fMZ1mjZFhQn8iHPiGRhhDGDMmTU3LRn4vsigZAdp7DWE89FXS5WY8B8CJZnzbJfGCrk2ekYahB7XyftEDm3qceU",
  "key33": "3bDeuSgnkx6mg5DFvrrUeg4pph4fniSffCfADjHzC8fkBziRQLscwc1JDU72vbnPxrrnGGjqrHQiDoqnuTp8Xyc6",
  "key34": "5DQngHTrfzvATbbuRNaoKX4uanpENzBYYQeoimkFfFc3j2eRdTJ67q8P8wD4smKm4J16zEaCGcGonTFzRfvZZ1Wq",
  "key35": "2vjtX7EnGVRDauNAunP1M78VpwZUj3FZhQmpXp1V4TteegiPrtcvKvRfHFEp6t6LpUZthtLxd2YY6gi1XTEJwsGB",
  "key36": "3KPwCne6NQNt38TytepMMtzKa6dvHDfWEnuGva6jKjNH99vgdzf5k72KGen4Jj6UD9Sgk1aNLDJrGnS2u9qmqLVV",
  "key37": "62nTTEJVkpQBotcAw1xgDDykMKwHxtXLYwXqUW3V2XTtMDcv9fwX9mSyLwC3TukCGUfRrtiqikH1Zo8gvhmznwdW",
  "key38": "23vBs5yF69z3qwbAM83Fcoj3jw6J9fmemGk72cPbY9Y4mvH6CTuwHgK2R1XfWZgnysdGEQ5paZNR2p1jaxSzXWNT",
  "key39": "2cDvsYF2upQGAtwxrZ1qHpf3GXFMGnoRERVcDbt7E6RJHbg3GZzFfRLAMDXBs8W55nzurxgYzajk6fbimDXATDxd",
  "key40": "4tZYffPAbHUTpv9ngtJdontLbDfHycbUJmmWDPFenHuycJgzQgd3pGtp35xJHMSytxb7p1CAjQjjqbfxqjSD1J3d",
  "key41": "XTDGKMsKoxjo8HPFxA6bgHTX4WVpvVuDpgpSV66KCqDqMkVuBT5qaANwbZqnNpAftawLWHRQxbLnjwjzCGJWUcX",
  "key42": "3Vd2njJmwECcqWFXZhJJXmhVXh9mvpVWZokpksufezUuHypkDs1Curd1sB4SStz1ouD4UkHCxQgFZDGyNJV8NP5B",
  "key43": "4xC7bWgnMd1oVwtucVKibYLEPjDaQVHRZqeN9met1p4V2p1WRGiP2E6K4z7mQvd4mJnKZTr2j7DDXbBCDNdvdqkZ",
  "key44": "2mLshz76ewqF34NwCEk9ojbqTCpxZq1CWAsmQgMNhBSNqZtV3BH4rX4ooiwktLcfJHSrfxHhfChhBTW3RMqFeYrK",
  "key45": "4xT2eDWRjiRiRXL48YkMg3qYk6bbvdjMSWS5Z2wdE7LEmtBaV2eZGVzudLA6ZWiD4bRq2TrH9YfBeveJfAsi11tM",
  "key46": "2RBbqHMESfzVQY5ApmmCcoDwgVhthXXHo747jdCXhXyGMcq1xz3By6LTm3LAgapzJEoBdwLqsw1kcAcW5NSFxAGv",
  "key47": "4KYJpt3P996D725DwwCaEiif5FjF5NAm4NbiwffButxLYCiDg55mPDvqoQSYYnbYdYh2i1q92yC7utmYCUbjTXKS",
  "key48": "5w4g4jyxE2g3qeBedXb436M2XkT8JsynqaHo4or2sjmeQ8URMbT6BTZoXw4Uy21WVnwTKWRfZmMnuPyMSKW9YAY8"
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
