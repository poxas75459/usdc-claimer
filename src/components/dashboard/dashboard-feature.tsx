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
    "5nskdkFBrN42DmyeEkWtHqyFefPGXZtRNL3N62EdwYm2fNTBFrSmgGiMQxQGUYkYMayL9BVwGS8CkyfD8mjSjfot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vLfYe1JK48xF5CUVWpLXQSE3aWNvfEXwoMP24TvcucfUaikx6eAHbhqmsYVCzkZqGc4Z2E27H7WCFg32PbL1Xrw",
  "key1": "5mBPJoSzoNgqmTkLKSfk3DUi3YLnvxfCkMx7RabtHg5f5rAE3VAhWVmpmx1NTmXF628iN9cm3wud38HQHLkEgSZS",
  "key2": "5GP4TtKMP3xXDsPyQ6CWzc6D6jJVhSAX6jM5JyH3FsBEugWkr7agHnAoMKEMQesEKruAbtP12ywZYHWrHZcVbvdS",
  "key3": "2oo3X23qc9x2kULSPFh5mzUs6wTt9eiP8pxTtPW5U6MuJpNxvsy7xAEztMnJeRbKJafVKKg6Hx472hXsBgfrDpf4",
  "key4": "3apEEQojN31cuU21HHFf97XZ7jxq6aX937VD5Hif2APEV3zk9ejkBCrmP4erNUuSK39aC514tstAobMtt7Rt44be",
  "key5": "4y7uWcxsxWLFbjVS3paoghK8wg2LuBXfy4shAyF6aYz8yPeVX5Hb3mDcvPnupndBR9kG3MAk7rFMkbyx8W55p263",
  "key6": "49Vapj6gZp6HdVC5XGz7hxfYVPp8WwiL4dwjU9LBZrvNUtmi6mHCXcxopJKaGapgGkEx3Bpp6Ngp2pYPVXPotq8t",
  "key7": "CvGTjeYoiG3KWng5exHgPQHWWTazpGKqvG7Uu5ngzzoxFyDBGjHrKokeNsQMNJRrSAYEKe4jYVcVRxgnDsNZRU5",
  "key8": "2Sp28Z96uBMueW7XNVa3uyEi9sKLvpQcyvvrJdwNybY8DTGwyGW5P1gRm8K9Wz4npteYA6PBDk13PdxSjAqZfvFZ",
  "key9": "3bzTyp7jXzBN33UhRiGPXaApSNyA4EBPdYr3EpurY2kXoKVGdM2UxisBSHyJLuvj2EZArZ5cCVyjNDReuSWeMPUY",
  "key10": "5V1NPKJPu71Z66aZJkR7c1VLki3ayBZSoG8UgmQKkwnC9HoR78H9JzfHaLf2DnLtTtkxMuEY9yKtQrBWi7FEehuC",
  "key11": "3V9xDfUizwPpdXCEa7Yrzg5o8HdcRXZXAmU2HwYWm9Z7nVQwekA4wedp9Kkt9RMi77We9Wfzg34yGvshRGi7ZwaE",
  "key12": "3EU3UCYDvcV5gGT7AVuhj4MVR4Qf6P953NEQGh7ZrNuDzUpkvTT6qnKSoG6VpjTYVA748Vr3BCdWxiDQ514ndpeG",
  "key13": "3F14pQZzUi6mEFbZh4MeqfwpgQo2RWWN6zYTTKNRvdMXFYLtn5XeKEGUieNy2fVMSHAhVgaCecknRmbnqv7yxoLR",
  "key14": "4dnVDv6mDphpHXvhBtiDdYkrR8nnox91wpz84k3o4KzWARpsdj9b3ggiAC4jWcEVuG8d4jXDWFLzAfLGaZoNdfyY",
  "key15": "a97CPyxf7eUKaDpK17vqYtVdJMsryt3r2K86KECa4wB1RCq8a2HEkc94ob7iAQn2kT8BiKV25wKWZjx1yMKSED5",
  "key16": "3cEEfMRUWY8u69H9L4toRWXkysUoMYM1gqZd5vBbZoK32W8o32PUgrdRtofeTbSXWgKamkEPvB9WUXETiCsevkoY",
  "key17": "2RFow89zQD9FtrhEdbkwpnoYNvp3dq5e2jNZX5bQBwCSK7yBPcG7r5Haxv1qoy5UWshwjiEmJYY9GSW3Fsa73LJx",
  "key18": "hT7WpZVeZi3WRAVYCksPULZ3upnssZeAmbP1UGzCkmPDac3xxhV39XPmPCQypKkTpWihM6ujX6XMdCbwqpfAyHQ",
  "key19": "5UBhSArHJEb5qAGaG46KthMCDA1J1kdZA5R9KV6xg33oUn64Gi2bP6D8qxPwGHS1DpicLBMCRWW8BaHkps23V9LN",
  "key20": "xE5UhC6CPe4Z2w7n5hDY2gScXSLJ91gKDbCMQ5NtGEHYqW2i1o8o1P86JZFw4UfbzRomUiRZACbKVKR5UU7GF62",
  "key21": "5yPMMmEj5SBc7dUGNkLVZp9eRv5ex5bWjVpGCvwcCKAbhYSnUzKJNPo7SegkJPnb8BmFyU2Xeja33Dkq7rriD4vz",
  "key22": "458EEcNq3bWa1r3NXgveibkNavDYnWP1gAD6FnLtS95aBbzEvnYtGttGNuRvWj9VSQor4MqmzeM9a9R7VfHxFV3L",
  "key23": "38irvjk7XP4ckr75gGBNNoMzw2SmYQf5oJrg2aRrnuaEJ2Tmn47Top2UFDnrA5SDaBewPe4KcBFKvpH7BamHH3X4",
  "key24": "2jcpxVjPB1N3KzHc7kdAPAdDjrg9sR3S7qejPpeGsatcLg6ch9kCekZHuU6j3FfcChh6pkYTUnujrxLpk4KaJLXD",
  "key25": "4cpXvHiVm34kwxBgBfU4Fx2ZgvuLa8YQLkBvAYoKD3i2Ux9Hz57o7KZdgwZjpTihpKqNSVEsHYbn2g7LkizoCmn7",
  "key26": "4DPWAGpYXiA4g7NDoRCqoRLUSwqucJHvit1d9XG7watGkCYNKcXfP48vdDJV6moFUj967C5aFJ9eQk1RZsHQCZ8R",
  "key27": "4jELQQ1aijUGbrqJmcgGnFBWz615eeT2vS8Nqz2m4nLEcLotGQ9o6nCTAm8teBwkpSDcDAsFoRigmpshPpeS4bs9",
  "key28": "3pNa4P8s9ttYxeSmP31mv65BCZkmhzocVNLMbs1cPGkKMQj7GfTX9XuCU7piSfVCHnY58bD48Cv5VPiuijN4xgJX",
  "key29": "5eNTkZKeg2TCk94sCdRZJ98iGQfVBB9Tp6Ls3LdWhz1zvWA6BnDuDDxWmFnA2pPeeQ7vX2wDqXWkFdaowyEL7PRP",
  "key30": "5JNAdHSY7rN1erQW94oHYwFLdd1xVqLL22YEWadKVgxbJ84zJ8gWNzWhZGNuaSY2ECqRE1z1Gf3rSSg32PcXqcsg",
  "key31": "29NFAewkETHDiKZkQVhDYdBv5NK558GHKPHUQjpRczqAW7epW1fzzxnyHk2pV89pAo7YNiBqJLNz7AQ6AoPXrtfT",
  "key32": "5H8kAf3cpZ1GGJxWMrnD1tmWBKAc5sVpJqqiat8FHTc1SANSsN5oAuZSpaY4FDZCtXUMVbV1Q36REpV62o3Ck2Yf",
  "key33": "4cTKWrptCxjypcuuoCcXhEhMTVUehmmEwUwKU8XaQUbccev44sJBrpo92M4Vjv1TgX3BgbY67nmFJsGfWPzk1ALB",
  "key34": "5gp2Rf9dAdVZRrpyLJsJcUJzVDrBkpsjn93nU73zX7HMAk1ZjCFsGqRybu1JfNLXaPkmGEuoRuHWKQNHNT3ohsAy",
  "key35": "44ZRB3qF8KBAiRyBF8aXbvfosmzjED5hMrsqRVLsHLUHVBVGJTutN5piMfqW51A96Z1ZNUGTFuXTNpWntQWKps7S",
  "key36": "5KPqBQqDFzP54epLcXHb2gjocVJQGUQNz5Df8hPUqKz4e9CYHHkgqTUY7PWE1mdvPSXgihRN19yALFzzVxybBMhg",
  "key37": "64QhRacQH3PoNF4TbYEiFRPX7Nd1ujWcY2MnpfNNhVTNjbkctp8J2yntk1HbEtzLQ8y8NwTfEWdu22FKMcHPU91n",
  "key38": "42zkZTH47Krz1DwxZhtn32uVwaBtTX9s3NUqZJXziv2wbLboJ5PQQg73mc3S5YdFgUhDBRs5W4hcpSk6ViXfkFyT",
  "key39": "518w1JQjtzsT2PcisgiCk9SsgNcvNCWQxCie85Wk1vYmsm4c3TaXhNumbQMb7Nu98aDAAMzUmEvTFCw1i2Mxz4Mi",
  "key40": "2egpY6tYy1RGfB4hpYi2KJeTSarSbi8WkH52LfW3LjdAZeQz7LN4w4kdAE9ZLcdwN7yV5EGYuLLujGWuCfv2tDHy",
  "key41": "3w18VSxrH4fahMd3QxQiHYGpjMhQp4NuAjh8Bq6oTrKmpd5Bif5u3z8D7ekePMqe1j4a71WqYiKxzoEpvgM5ssAZ",
  "key42": "4LuokPgpTV8u7vHoTa8pJoaQQ6DrYzS4JcguzWGjdf2XG5xWSQCCTjMMWYhzGSdfH6jnWVYC98ouY1od7WxWpM37",
  "key43": "393tqprKUT2PrVic1HibgmxYB73Jt8XiG9SkJTtUhZhJ6D7nhFPD7HQ9LDjAkQ35zM7JBN4keTfo1GYKQ1cyoKZ6",
  "key44": "4eivBBNU7cgjupgCx593EJSDG9ZzXS32n4X9wojG1iw1vpkrq1QjAzyXJa4Qo1czRWNaZGusbGB8tyhAHLvKnqko",
  "key45": "czhQtEJmoFDVWNaHJGsSq9UXeHSTUqtBUtBRgSy3xidfpjDEuoQfhTvkWJwMyjL1pvtwVTy28pVTAFfW3VgURxx",
  "key46": "3qSG8eSAagJ6gDq1XTgSKQ3z1DFBXMJ3wnUVBdjGuCv6dsGJswotdqdF1jeHTHpTGr7CCs5nqEt7aJmnLNfpNPGm"
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
