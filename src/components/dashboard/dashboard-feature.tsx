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
    "4pYWNsof1EUufFAc6EkqfyZhziHLcd4HFbdjjdemySAbh49W6LHSyJkEytc95c6TnGCwxtTFnNBAsLuwz3tD6pba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHrUYovV6Qkt5QUqHX6j6QEDMiJ9AmBXhNt6j4hNV6WWzXMZK1hyHBu1c6mg7L2HMft1JYQiw1YBu1onJWFpMYk",
  "key1": "2VaPfCwhf9Hb4mh2JW1ucu52UpRvVxcGTjLDYkiGv1LfwQBvHVx57QoSW3jrntDrgNzHiQuUpuWromCVTvAvNWH8",
  "key2": "C5EgSdVQ4pMD4tshMdUJ4bxEnUPSW8ZLQ79mZ7dttPfiMUQitsVfSaA2FgUtE9kezY7snnJdCF62EypC7AtHUZb",
  "key3": "4MacpaHBSJpxQbKiCVqJU7uZ6GpW3pighE9nBEXjAJt3rgXjbnUJoEaJ3sS8QQ1mYTXc9ie38GvNXFR18mZoNJMT",
  "key4": "2939XEUT9pSurSbLWWR5aazKnxG3DzMnD4WHfkTDQpdBkWdbnwEsiJfdAnuhSX33uFZ34iwxvQzEWZ16Thpc1Yh7",
  "key5": "437stgtnXEn9ZRM4a6zRQDkkvmY1pRxrRxUdJgWsQ5CUG9tj9n8YEiDBYekPfBCTjyvtUJM6K3EAVLBHmyvcPtLL",
  "key6": "4mTUsMJLz6kisQb1JCBxMrNM1uHTXNYBX6uWjC58FPuFCNwDyFoVtDHcTwf4vcVbS4cnkKEFonm9rqdn1biVW1tQ",
  "key7": "2BRNraqE5pMEmmEXzzuEDu2PTLTFQAMGz9z9acKsnNuVpq3WSr26VDs8x3zxwiarWa7B4jHMpz5b8k9gfc6YW9Wu",
  "key8": "4zaeLq7LAD13h17Zv1jEbefWstG47Sx7NtJNxD6ZkjowoKND6oMVjE2BaURQJXQAam7zh1pAR7MJQUHWHm4AHMCS",
  "key9": "5HyFjTVSZkTcRvCEYuyqh45oD9SN4yzGv75Q2jrTar71rGtUZNSXEEiDubgy5RYGJeeKxfp4eaqc1QEKiAfbwNFW",
  "key10": "33KGLgbbEQpv6BBbqNMvEpY3KT44w6whzh3AxYJvGGCPkgcULZS3eR6vNweE7n3RwUQEgpZcXAbq6qNWGxjpuC9b",
  "key11": "419PgdnqvGCBYJS5f33gCAH5iJCJgCQaezAbzguhK6Vb4c8vqhJUBDkeyyiyT8Mazz2DajhmhCmAkm2YVWuMg3iH",
  "key12": "4SUp6KpM5iRpG3r3MkCUD4fnNpKbwapvGvVksqbhpwMQ9SQU7Rh8dy1sJkU87MGEmFU1wo2WxnCrt5SC8SZi76Tn",
  "key13": "3Lgr5HWK7XcHoPgbchVqhqJKmH9RuxxF8oS7v8irR243d7NojWJSd3vFYtzoH29oFHFjmAJmti6CnaHDWnHUjqUa",
  "key14": "3QgU5jUncY4QFNDpkAcW2hE6sbiW1xn8mCxTgoYNqAjZ4f2WnfBpDwZcnm73mJwc43HtujkCnNjH5J1pajnEPjnq",
  "key15": "4op372z2zKzM3wLzJ8LtBBRUHET4dWwoHnTrNpqaopVXZXzo8R8gNc4baiaFZwPmK57jnLRRmKTpPbdnNFXr2g67",
  "key16": "4SEvb3DCwD6yJn3GstUHSw5gGoetkHns5K2mimquuSiv5rSjprXFrDyvaqmmc2bHU9dsLJc3HeRKDgmY6fYv1rVj",
  "key17": "4yZArkbJhRrN4EdyeGhfWQL8i28A1ujqg6TZRHd7qbk6PWsPhQ7NeXTEzaQTwcfu2Qvt3hm9C8dup6xvazjgoGXx",
  "key18": "SrJxoeCTMmXJmPJRCXKz569eok4wocghn4Lv2RDf9JsiPVMsSTnzmnopSUAduEuD4q3KLXWxgYeogpH4WXZC6qg",
  "key19": "3hjK6fA26DfQQStWCfEoTWHBQtTALGEtUyJ6op96VE2vtkm9ooF5Sbbc7VhuhbU4AW2PPX1hN4JgktknfnB9cJVP",
  "key20": "3tEqjCacwgmaUtUuLwmWXAjYoSCrTS49XXYvLb8wf6FFyAuQjLQBW7m2H6ruZYHQr6QutqfV4MNgWLyvDQqhHLxJ",
  "key21": "238PRM9e8n3UcTJK4aGuiVqq5DKqxPWaZ6Po65d3Pz8ha5xzjeFvWu4CYQk3sEtznHBVtpu2abL2L7G9ewYK9bLG",
  "key22": "M7bxcRvmkdSZc1tz8xdYgPUGFMSJaFSAL7qmunnFRma2sgJEkf57KxFSuLrHyHpQH2bPQq1Z7SVgerFjH9wVCv2",
  "key23": "63zjWv92JveL8nDMLipGdeVCpzLXnJ9Zw2k1BCaYvTBHzPjmdWcD4ZaPh7EapHYUKFgdUZyt6LqztJkkvw6NoLvi",
  "key24": "8R4Gg74FVxFwvsxA965KrJ8QZ6vmWAZg8affBZu67jX1hdfJxnSoofqkCBiGRewabhxA491q4bqPsmRipheEUdF",
  "key25": "2KwC6xVQB1t4aFuznE9wbYeUjcoRcS65NdpbUKJUJcSMaiNp284q8bfgWeyxoiNSepvNg4DN8Y8hQxzte5THaX7f",
  "key26": "jUhjmRFHkHrQRZk9EjsdLKuqWJbeP2LrMi21SVQmX8MVYP16nGU6ZPtpANPsEgupMPkm96Q9JUPpPd46pkqGJ8u",
  "key27": "PWJ6ufTBCvQZAZZhJQC2EjJKejzFmM12saVrwndtx1ZXACrvDo3J7Cn2D9v68Q9XoqyRexQDHWnVVxeCbHTM2kN",
  "key28": "5SdLdr2N6sHFzt7EAdTcYxo4bUpgk4BEMVywEgHogKuB1jTJefvtukvT7Ewueh5NnZ3PHSnjJ1JeTcyADdU54Kmn",
  "key29": "2RdK8cNa5gz3qChcaCo2tuccK29KQWrvZYEGUJVDtC71oy2ML4t75EaBssA8QmbE1455pe4mgv74kUadEZWrs2BK",
  "key30": "2XrCMGdd4QtJJx9kjx78zo7n4Vg67xLuFZTeYmj2L4Rkqsg57dYJPunti3AJ3vPTFWDAagCGxjc63uDcXDgVqiay",
  "key31": "5VEwWBBGp2wrickLXacbRffZiXAkJGDxHJyyKEjBMpbXGVq1TcJ7AcUy5EHG3wUs4XiTAPy6Hpd3y65XZgK7ymh9",
  "key32": "4G2tDnpy7jaEfp3Q2oQHLPP7ALJPAwsfGgn4zrrsWV2ikKW1W2hJteYxXLJybPRqUdFkw4tbZFBHkYut8v42kfni",
  "key33": "2K6grxwQmRafGgw1jQB2kVrsZoXPz3y4X4pkvxpDJbGtZXupf8v6msf7rJ9VDb9Qi2VkdMWuxMSG5EeXvoQjEYSA",
  "key34": "4XKHbY69bGGf9Y9bEEgdcXvxLNdysfZTT42rqpVJRNQmep92tZXETGyXeLAo5H3FgNdVqYW4hkeN6G3qmdx3U9i8",
  "key35": "4TVmPxpBAji9tGDhdbWUHfjQvHgffyCS9tRy2VQb4g9UEMfVsDGpCKWPJdwGfB5u39Vyo57YEnBhiiB93Liman1V",
  "key36": "zwMpuRcpDiv3gJKAfJcHJYWvunoArr1zHQmJFKhy4HfYfCyGcgHsVdzCxM52k4Lan4XWqrxFDGu1nVNNm4zaZ82",
  "key37": "P9qMQoHG6Mn9nvNhMR2SKmMkxyuoAXuaNLs6nqL7q2kQknmH1SvZX5cyZiJRRk4TH5wmt2TyiH1XymgJPgYrLNo",
  "key38": "5wADqjnhBkFx3SRV3zddm1sRQpnwGHH96LedcNDsYxxpjUEjxYcM8PipQW6CWVpNqKcyKna8hGEVbtmKms4rx7ja",
  "key39": "XWGhQeE4ZyCbR2JVfxL58qNnt7nV6qkFGPFNcVEFsPxhwWFjSUomjhzAUmFawHpNDRr3rWfzj9K7iVhY2JDXV7M",
  "key40": "2jD99i97QkNGdu9eJ3dRjcDP8tcHGfJGr2R4uqVzTwVMBbvcPniDsdcyKEadxMQQDD1aPz6jkfWcGoW2eTTvxDgh",
  "key41": "5c5akENAL6jWLZyU6HyzJDWZ79xtqHXnc3mAuicizUtLafTTN2cWAShimvREKbfXQenCrs84RqRMPkhPsfLNcXe6"
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
