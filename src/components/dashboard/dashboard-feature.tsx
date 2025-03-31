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
    "5gvy5uWZYy96cMnmroAvvJT88sBD5zf57t6qhkmGjhiaA6h3xfo2qijxR91P2e32LcJirRdDa1jUBLgqRKguqGbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CwhgF7wdZHR138CJbUSZPpHvisyouVnE6m2uS7DwL89JDnmYzBYZY9rQkzPkGm1tYcX6pnDWbiQQvoBHJ2SLVTw",
  "key1": "5RPn4o75xLRHbDVamo7QCgdrdUQu2L8TnBKzMkAuiZspAiHhtA8qUPCbNDpVYqR4T7TsZNEEjGiHnPCjC2TVe8ZR",
  "key2": "3YoFDPprCyNDtuh1JrbxwPKyS3dZ4pFWiR1GdDSvQ1Qho4uP7FwRK4Fi6mMbZh2CLTnBE5QBrs6PjbDzagXqPVxH",
  "key3": "4GxkiM6iDmP2QSyk8oT2HhiJ9wyKrDrMEhYU6976FWZBDFn1CW1Bj4Rjg6YqUL9XxnJbQV96Yy3hCh1FVVLNpRjj",
  "key4": "2S3yEZa3WGBHJaV7feg1fHc8GRTVPrQBX3fECKsZ4LBpuKFxLKHS8LCfyTdT1PqVcBdJuEXxKnmQ2BqAu3472Tvj",
  "key5": "2hXsJJPi69JmLmSArSFJtn8JKeSeoHP8U4QWfJYRPbymQtSmbGXY3BjzpRABXKhJiTDbjnKyFYJg1H2fmhsZEVmY",
  "key6": "4TbBzi8RbCpG3Zx8cgGMoqh96epGAoLwM3enk9NCEqHAc5sNE8F74Guoh9sx6xGwwvVd7gqAkpx2B4r3w4BWswjL",
  "key7": "uuTin8fCisLDGV63jwyLfpbNUAiyXZPRjLiZMR6cC17ZnmXVVFE3GBPYop2Crq1SGQPPHmGTrSy23ViPfu7RrTJ",
  "key8": "5UTCwL33CadYEavMYPMeEfQqXkTr6rDsUfagZeppYhnJSQXFNknmCaBSPhR2XQQsiYLqor8UwF1ZeZ2mR7iviiyQ",
  "key9": "3dQmprXtqcGwRLMmDxqt4NmG7dvjrFei22kAa8aotPYVkPNVdCwhmi5vBApWfihuSo5DA4DmRgWGzCHYTa9Gp7Fi",
  "key10": "2RmNyHs4F9Aotu2MoZtCzdFzUvC3gDSHGAhZpzG5Zhk2Yen4ij5wQqvQqvF2kACtDLCGowih9Wr17YCkNZ3E4C7D",
  "key11": "23riPjuhhSsD2TVatwgbEE87vLXGqaHJ55dz1HSNh149izeKAFqxJduuEbV2bWXWgPU2YaNB1mqKzk9Mv8UgnwAZ",
  "key12": "2E2UTtP5qcnGtnVUZRpE8m5LKBMxvgGUeBgMQBxfsc3X3wA6CrLUZssN9rDghtuVV5Y4tVZetUcfPJRsq1UosdPd",
  "key13": "2pgfEMRSm3JNGVErnYQ7TuZmESvahkBcmmNj6ZFZKVLYEhaHwbYX8SJE5ygcTzkrkpqmaKpHToMGiWcSRMtnp7SZ",
  "key14": "7aCpP7aVNZaKBrfkfC17ay27RgYnNN8Cymi8e65u3rhjtXN2nGZrUWmbjCFXkptYeYtfa3i3DFVcpHwGd4ACz4r",
  "key15": "kxRUJXafip71hR1acubj6HZSUKtad4NNGxvgBHjzwCd6beTu9Rg14LWCFGnbSVk13onCytTn2M17YFMDssEfkhM",
  "key16": "5PchL2ugzfwCXXJNg2XyZZMcG9mtZr6BPyTEWBicJoUpacEZkirgoumrpcsqcsK8kXv2eh75XT7Gnv3vr1gTtX4z",
  "key17": "F4keN3KwtTdRkQUikDusZGwXGq7az66T4Eo4BCGBox6c9U7X5uYKQKpbpnufJ2r3tj6uDzCiBdWQ1M8u1A687oS",
  "key18": "3YJLm5HGpsffrSby3W9N2R1u4S78gQKrPvmeJrpf144cYXpR1XRaZPf7Z5FVeJNZX8MUAJffvrgWot7JVjyP7yp6",
  "key19": "3Lpsh2QYGdVE4atKWs36yA7p9Pu8JSiZ5wge53JqXRR14WWj1hDtAGobQWZ3azyhcfQLS1tNBbnEzG3jAkvWWBGZ",
  "key20": "4QdnEFb7eK47bQcKZcJViEz23ig3RL3cCQpWmVvzpLUZiNHdAtmXYk9ckW852PZDsLCZvBfTbwjXYn7SSm4ozakW",
  "key21": "5X46vawXP9HE9Qhvd4Xk1Umok5gLHrsWXtTQwSKioEUX18MmH3zYaTFrH36BtyCEzNm2zAyDAkdDKGk85Tq4f2cB",
  "key22": "58cuYY3Re1bHkrkhheN1MuBrUhz5tkCPvo6a9N4p7rrvU3kQ4oxEtXEopwtv5H1DCnzKkfr1fpqr4TAEMAp1hgWu",
  "key23": "2mZj9Bv6uJerB4UL5T1VBGx5s3TVw8kSuBeo2tYNPXUU2UANDknmHx3dAa4wtnR2YycX37ygG2mXUvqgPvhzvsVS",
  "key24": "2VjhU3a8aDK68CZ9T4TMidtUHQPeYKmSPiWn6WoEKp1v3trhNfsNqMFJHm6rPCdijwdu7gFLa3RYEXyDVCNgH25P",
  "key25": "49PqmVarjXQtWUa587c4LxLVTY7crCjgziKkLxgCqz7RRdjP9hFDANPoXe8pHXs4D43iN3zaaaDwEuCyZ1dBWTkr",
  "key26": "imEJStkTfgwPMHuWA96DyonudDCAsNEkHKbhKhWuvhLp5G3JiavpKZpk8UFkZmkhdm4NT5XaKizNBvfNQEiUfJm",
  "key27": "4JwAnG2B3BMi8g95yKzYg8L5ccDgTHuLy4Sikup9se4r2MGxUtExoVQxCTyA6yeFKHrqCdsEmWApkaoF3RsxaMqY",
  "key28": "5J9fQnEbWKuAz89DsbPoASNJjpXaJBNCRRZRt1pBpqZj3bTiVJsvptfT4uhWPFC6pzMAqzpgj6ECCxhMErLbFey8",
  "key29": "bKoDTXgFG1QoCYTaLx47N6gATCGBMqWosm1GjMFodrvfNr8FSAfQFbVzbC51AUEBdei1Cpwmf3tg4ytkVmc8rpp",
  "key30": "3JTZ8vPTarHzxkiSa66EsgY75oLDd8eZbfPcEgEn2NTPAF8muqPdM1ozfAjz64Vhr32RYVbbtnLNfH6rUpQ1H9Z7",
  "key31": "4r216K8rYN9P5yuPjPgqKfi7cPsVhYecCCBh7aXf2GWwFsdn32Fm2YkWtGnBJTfVWjVJt53cqa7KkYZmdTDi4Yo8",
  "key32": "2iwz8X5VDVouwfavQtWr8Hqjb7JEanZFU1W7dgmgAJtgLgm1FL9DqFPMkvRmvQdFQBfUzjAKg6S4VsD7o6oXtiPC",
  "key33": "5CJwHSZfbgQgbzDK53DbeANNxDF4rNMycUnDucYnhvjpeUasnD2Pkkvdi2LcmR56ewdUPuEiz9AvadtkqVBqFCAJ",
  "key34": "2ZxT3H7soNK7TUCn48iHisW736dxfxruJSztDS52SmdsKTRwv92PMKaCBYDKnM2J2H1fbTgxzfdvUkhcA49HJK4b",
  "key35": "4URpzeSi4m3KWkAvn6dDrFHbhNM627A6HhAG8VkQVU6ikVxfCjextxVBHCbwPkNBCK3j9snCsiEToTyRRgy43epo",
  "key36": "9rzzURZk3yAnN9vMqwCzf9X2dK8XiKwmCMjHtgiktmxjAcpMQzHiEpF5TZgvAFn6F9ckypu4RfEoje1zwEivjbR",
  "key37": "5da1RvYZGy6V32HnpgA7329R6fnNdibfqjaKFfx3SDq2R7DSjQJPbpkhGifrFBwgXf6BZi8XbuvHoUrKpjayEb8m",
  "key38": "3dwBQKPKtq3Ri3ceRGS7H1uLvgZgpjkZb7mmL4Uug1cCT2Tt3WHhrGZWGDYAFtfmdSS94XKESGtaVZzqhGjTMR1V"
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
