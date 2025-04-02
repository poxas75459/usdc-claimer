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
    "VhQijXxcfzrx7EDGkWJP4T33tWU2uXKuY7q1Xv2nkqnVNp4BV2KdoQsXhJnVe6pg8cjfhk529YcGyd71A3UWsX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jzYoGz1ENu3a9Pd339UnuKSpGav3MEhiCu8q2FNhYzGtz2NppY4j6FHZSgumGfq1Lsf77734n2Rea85zzAxEut3",
  "key1": "5nhcs4atjnNqei4P9QktYMXimiyMaNEuFpHYroQziex5DaPAsVx76rQnuW8SkD2WyPtE5W9Tg1S7LExoYbTXrsSQ",
  "key2": "51geVN3Tc2Ro1yo6JhPuXzAVVPfwXJEpor9N7furbkZWxiKQkGcm4YjPCQ8webgXsvEGM5fihsnutqu5NUPoBv5L",
  "key3": "2ZkeEF1AUjvpoJEM9EGL7ccDPwBYChZoSiw5RRDmz46pDB4YkPnMRmGk7jMWucAxi4p3v9XnbNCF2Ue7HZ78G1V4",
  "key4": "3NM7sb43ocSzHQg66q2eV1jjVhwrahYiKQgAe7aarApAueiGRszzrD8LjPWSSkCD1DRQMXMibuFunvQMwyaTgrUW",
  "key5": "3EMNAv4EC6q4mPmNvYjeFYFHhcce5xX7vddRTaBcEDqdp3wiXwXzFZYS6bHmfxsXqhRu4sMcPKT6NnYQyWsSWdSs",
  "key6": "7YJ5HSnHC9vhgutxWHYFtvmtnLPBU1fTRw4jH5ukrTvBQMhjaKvmCNbmg9ciYF1RNrQ6XJ8R136zCwX3UgutFdn",
  "key7": "495mN96kzgi38iyiTHXFDZ1jgLEHdTQmgsyfDyQz72aAGHhcDB716W1UTJdESMBShvuBp5VDYX9SceJaw2UfmegK",
  "key8": "4bQnFurXwtgqeBG8ZfLDJVdaZBJ8djLyAiaxTHC22cq4nCjRSr5yaarguKkxkk6joyPTobfRQ8TcfHpkPeNVR3sF",
  "key9": "4ResjYUz1UPY68ZEyNMnYtthYwBuuFB6idhMXKBfLKcPa5uzG5T2sfhdHFgSxJz3tvhinJ4D3geH7C9sBQFBAWHG",
  "key10": "3J94METmdBr6AVNy98N1Mvtv6UbkujPzzzKxxmPafbd7ipuAFhMqBo3G1PUKgZZaZa7mxrAqHbszUbzeT8XcfWKn",
  "key11": "U8cUUHPpmsBQDaz6DPkg6NnMpkWrX6CgCPZw5nTzhdphPahQYX1qFa4H5838qewAu5oY4DjCUSmt81VvmF8hQqT",
  "key12": "3G356jq828RsFBvg2WMwdAamT4ePHdvLkg1uBNQAfmfZ88zYd1jDdhmq2pp9CGqqdm2kJ6uGJkTDXTuZwq6gdt66",
  "key13": "3naxn87BystjLFmYcKQu7GsAihSNSQK8piNomPajCDbWSzwRCHA8tyN3caHmwh3gtfrxhRf2RaK5faJsw2mnmRLA",
  "key14": "4XweDpEPgYTFWGQDtz5i9tmiLEzRj1oJJyxkHzwhT5VAHi7NUNnT3iArMiBvERkpkvoMNpjxKX7CMi1oEsP61qGk",
  "key15": "3L6PRGMnH5TsSXSKcw6zFQ1rhNKQoz7kr2YxmbKHnYwTZcMNAHgAY8vNoJysRFyTuv59b5Lwt9f9eFJfMPnme7eb",
  "key16": "JiUjvDsLwvjNC7n8MfsCJnDEL6ndZTxfzbBRMuhQM88Qdr7mbQV54h8g3WpXEXuNx3nAMbPbVJHvbX4VR3ScH2Q",
  "key17": "5N4zhZsZvdpS3s6BCvEBorRiYxWQVQjEK76SjXVvD11BPfAxBMEbMY2zWmfYM1gESwnPTGufWjj9xJbntVNk6nGU",
  "key18": "5LcemGSn36cUXUusDyFn6fW7qfCAp4MAMR5pGcTtGZVtYJvdVvt3gxd1Fc49UWA5yZMpX7R6gcLCbtfvSL2HDB3T",
  "key19": "4DyD2R3WQoM262WsR1iXYGHj3RcY3XCGvm6qLJBh4oY5MikZSP4yRcrNEhqQbYqAxiW1Q9XNe75eHEcKK83PDGVr",
  "key20": "5ndSRuaYWAj6cLRhDXDcTWc98qP1SjMbTuDiryzUUVwdhs7izMHhhxUVJ2R4DneZhoVQf5ckdkjzdhQmP9zdEHte",
  "key21": "kJAYUvJUBvnWfCCtAwiR4Ch5h8fsqz3QquJUTs73FR194prZcQW6d4c195JjZ3eeGCywBkzkJDEkytf3bk97vBo",
  "key22": "MTEUXQpQzNcuYqqeqthQULfi43ogrvED5EBgJ1wyfAHwv5AKa5Ek3p5RJkbyxjr5w1Pb7VfTaH7HnFJbhhcNhTX",
  "key23": "5xw61pJGe7ECqyZWBnEeyejMUkiFzzEwdqj7sFQNYPFNZfoLFC4FyMc9TVfTQc2YS7dbRJgpxZWtN7rudMViEsfn",
  "key24": "K8aoTDSFbkS5DHSjFsgbZ5zCD2X3Kn2imooyQ43eGRsWj2giJPbvNuWH3o4L8whAXCvNcM43Qr2iruyvRbhMBva",
  "key25": "c1KY7B7YwhfBMLN5UimvtkNjwiksvfp3ZeW8iuXkvNvYoakpSmx8nyBAPJLejgQ6sLvyuxyYAjiWFcuV28Qp7gv",
  "key26": "mFZ8RrfAvaM9gd3JVtu7Zp5RSy3Dx8TjfzXMHrf39WJMWdVr7jKNHaRVuzq14PFrsFJB8CQS7b6pdfKtia8LZbW",
  "key27": "3SRpcd4BhLSuxy6atKMrqpAgkUQKThHVN46FdBdvHJ2Ezn6NRjsMR43vax2vyobT6VHGZgk19qccCXu6NrtL2G3m",
  "key28": "yjk6bM8XFweCMeEurGh5GPBg9d8UHpMKK1vHNa3nQewfE7hPZt8aWmrns7QVP1euE2jDQ51KpWx9v5ht4HTrE5u",
  "key29": "3Rtn5KiPKq5bUxFv7op2TZ4pYGQvtvQaDwmGPHCMVcYmXQyHnoTPbPxwfWYZhkPxw43waiSRatzeAerUU6hxqjwD",
  "key30": "s5aQe35jkWNtPAarzcDb9xnyTBKVkA2MYaqvar2dCMHxwUm3cHpn6iuETxUcxg8yCiaAks3kjqHDuKwHhQVE3rQ",
  "key31": "3kW2Zz9gtGgtWtBjiRGfcyx4CEePdQAYXnwokQ5YiXEEJch9JazHz1C7Mo8LJuxNBjJoGjm3Ztrygz3t3PPDN9su",
  "key32": "63cb3vpLM5dBZY6EURqbVwqudnZjrg4ogaRWhqxtWQBqwUoJHLtCMCeojGX8z1kQmCiAxLvqzErQWvrMgcrnQzgw",
  "key33": "33iyeNsyW3pf21hgTL6B4nNFyb6Td7GMWMcfQRidUiXmsYax2F63TJ7L5QGtCsAQae4LuEF5y1gd8b1Bq1TgRDB",
  "key34": "5dFKbQmVk25T2wogj4Wk5C4c3aj5SoNJtYLGFzSJE7V6TLJCwHAGLYP7qdeB8bsxQ7dWrWhqRAXdLzQ8nfVyTobL",
  "key35": "2kwnZx3JRWrQpFXYVMd1pXks7HMwgb5a3tzA4RTJHBNSeXr8NeKwEz1TCsyKFymTZ4EydqqUrmo78VfygMkgikxq",
  "key36": "5cUoATtGrDxs6iah7HMr9wFRKAqD5JiiWiiwuhx41x8f4jXDspETpgBHmoHWS41sLnDLWGiHsfHkUZg8mTLX1MEV",
  "key37": "XiKLWVombw71QNJ1gmjiCaLTC1yhnzNcj8YAaTDwoQSimYauNffUHKskyKPK5qkABTj2tvUwutZc43TgNEyFytA",
  "key38": "5JyMEc2z4mzeKF4b3sc4Yae4g9rjdyVDpuuzu44cCEobS3gTh5uMR3HCFeoAsCsTtYpcjTYSJEyPFRChUsxnN2fN",
  "key39": "5CaKaA91Wdo2D6EnWGpHchWLuvNbLi3R54YpcBZrBxWEG1edVvrSzSiGkjF5E4cWiv6dxddAdBw3FqnvpBMKXFqb",
  "key40": "3AUpJqyCeL5snLwD2N769CtjxRoVJkXwkRmea9htYQ5qVCgs2GBoiA4tcKp7tjHF7WqEHXxwECPKnbY4zN8YFPe2",
  "key41": "2hbdGbPL966quFqAEJy6ARZzxpjjsxhLkuZ4P3pZpdKDwHDbj6wbQkThWCYX2oCEi4jxfdyitYSMSQwxJYnpvfGV",
  "key42": "QyR3uz9xHMFiyGmkoByWJ9hUfLiV1C3Pxh4g71maRBXSvjUSrm7qDk1aWpzTiA5dA3LbK6svxzACeBGDraHEWgh",
  "key43": "555Bi19954faGyzKUdTja4w7MKkVbf7BpACpf3X1zGcjDhUYLtwfUPdPXahz17qBQz67HAcf9tXC957TfadRqNkG",
  "key44": "cEKoRH9hbuv83ykqchJQbf8Nz3hhJMsFbL4hmo1gCKwRCrLCUBgwFbUSWLcHuTvwAYnnUUsHNvfT7gA7EhwNCFs",
  "key45": "2ovzVq4wdwjkrArLxtDKcM3U9zJsbzbUvf2KBFUjP4s74ZEMEvcZ1c6oS7TT5AzTXdiBgPWX16xFYsLtUSS1PoFS",
  "key46": "3yWg8R11sbbRkKgzSBX9tFtDpT87hc1KCc7tTbbMGBLPkrUFK5hofRqcqwJ69Yzdxrw7QwcJQQTQN4BhLfKDWi47",
  "key47": "2DisPy6vSgnEqiPzWHvvKH81nqgZPVXU132oY9fSDbto58sm261gJgy1y9xMaocGApZVysWefGs78E8TYK6Lcpd9",
  "key48": "5HLUe3f88mKDMGBr164UDPPfoB5uroThfxSXjfR6GAU62rwtZjUVVhxDdSwbGU3XebWHWkxs8U7dDH5CScnW1Ddm",
  "key49": "2aFzCgphdtUtyMwF3pP625WMMZcc7LABFAsRkmRWeCgtG4skf1bAH2iJayoadSWVEPkohUhf4Uyn67MemyHcbniz"
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
