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
    "54tpe2Nuv727y5CA3ABxX85WUEQmKzeZCq6JPCDs5etTMXbjBV8cMTH5e9KSVvjTqd7sMSfCcHyrontESArAR5ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JRJo4VVas47dy9yhPZa6E4qCKstyyEW4ghPSMm7BUozGBiNAJtoPz44QBRyGDmj9KbjgyB8Zzcr4fCdDjBVLhmX",
  "key1": "58dkZfi68nVkaNp6UFJWUSMGiERaMTunCsH7KMaZdEqy7YwEQqq2SXrQ8s4zuxV3PEv4ELy77gKPS4sJmm5AJASd",
  "key2": "4qpMwcDuK16CQduAGKG7rYcoQScPwEWxDA9oEKBPYoEznnrEoR17KGwfEVSq78Q2ZmNsPaY7jGA9ZDg5XdEhmoT7",
  "key3": "66c6qFi6x2ELCan4RRKVvAiUz5b5CjKhgHBhqtZFjcgthpFcm9gzXDceRhken6DtbXjYVm6DysFc2CW7fWts731B",
  "key4": "2Mx6iZ5B1LUs37N9kwY3uuoGaJ6hfSKdRG9PCKREkE2PBevupXZ7ijETdN1vgUY2xHZnqYfTRWtjTAKaiAK8yHYr",
  "key5": "4guA2ntib8uW7aGRnMSgZAcV6X8UDPHKmXWkcBpuFTLLKfKSXX4ETjZdKfwUEv7cwZeFP6xYA5MmUmvgmCK5h3Wr",
  "key6": "KrwxjZzK3f8UdWx5HZsAtNC95ovfM21dbRvTpgz2NFr1KASogyDnJpqq8QUMVLSp6DoTF7ivR4ug5qVoXuZ16c5",
  "key7": "RXwEvzkFJLJixGqPKvCc4TgHq39FLQc9PbuHJ4j7FWURo9xSUcHtk8Kv7mxNEUMWdwdjKZ4YJqtfKfVbCJWh7Mz",
  "key8": "3AwPiQ4AjHu4SBYVxE8W4A2coDpgaKKiaZqDzvonbms4nEyApitLpTSbcnNrTe58tiuqqQ7aSdT7j1cHSvZL6Ubn",
  "key9": "455YCfcVBgQFTMkPkprCz8n2D231wCJXnukyNHGncHNsH4HKv4GKFiBfuJnNL9JDVy3RV62V1Y8vxiZxTrtuXmy2",
  "key10": "3JyhVQk4K6YACCbDcFzuMj1HrrWcQ3SoHNKqcz4Zyj3V3g66BASz2vQcnyDC2FAgsHkBYGzUjnZxJXFV48yn2B9h",
  "key11": "W4tkJEM1vJESnd2MktUeQzMU9sjQ2EgHgU2wxduqXYttk74ZZnduB7HzCucbm4GYriJq75XqVm5B6tE1cXkZjPX",
  "key12": "2TFUP2FpGCjh5c1h4P8xB67gebPL6FjMtMGrF4NFBNk1C4ua8DrPFjhN4aCyQAgtHjaCh6mu4FyxzybtjC6ue3Pt",
  "key13": "2KJDwv7mHfqGNdBKH4kgVex2NnLR8UGqXgVHEAgxCXkw95c9TRyLeCJ64535dfL1ah4wWvYDHzTB1LuWEpQpnNJE",
  "key14": "3vF8nx1XGG6gwFU9bbnCv2TGQhrqVKr8oGnf6UFNiboNY1W8KQtmLcKrPc7WNU6cfDrESyQvKC6PGHtU3LB4U23",
  "key15": "3AmuL9xUSBbARqaZCo8Ms4cfcDpwAeu61gEGTbvjsLJgpP63vJwGM5h5n5yqJodcqPbkV3fftE3JjuoYJw42jasx",
  "key16": "5M47G43VK7JZAngMzJ9qvropwn13yNYcBx7uR7Z1dATewNgSUkUazwVKUFQdBSWevzKgJ3aQJhK3oqHLckAvSFb2",
  "key17": "5MLgaLiimxnWCrWpMN7aqMopZGQujfbEahZYtt19V2Ts67sptRcPLjtQtthrCaiS5Hb1yaPhMaA2JVLLHGAFtEhv",
  "key18": "4YfuUsiyfXnGsCUihUEp3hoXazQtXhLPBMkxCb3BEyGNhKUuJonRA7qhuEonUgkPhjq2jj1o9t6RMbpzkA3sNpgy",
  "key19": "2ftAKoQ48PLKXjyHtpWAtzxXyAnKkCGBB7dBPz5L6NPxwQDTo5VW8y1DkdTaDinfZMWMR9P7euNvWWNxHWMkLC28",
  "key20": "54PUDjhp56Ngea7dzE9tkc4Y2Fii55vhU92UvYc5aWbpRS3jyM6P54GaYC5NWs8fHkHvCandxUNsFWCBkbtJFmwB",
  "key21": "4x2m2XRcvj2u41E53QPHjHUVzMNLU84A5ut4jqdzQ9yaqBPP2JTCz5cRwbKQGDSFQywaZfeGxPL8eZvmWyxQ8s5M",
  "key22": "67BNxe1fhuNupj1GZ6oR1zM94hXB9Ma7UL6YvPfJqkVHdqVYU6mUJGnGgzfuD9Bdc8YRruzvsNGUYCSbdHnSQimM",
  "key23": "4TXaJshy7P4PFuPugdomQjJoaCntFFYDV6AZNX815cpsQmHQwcNFwH6xGyfq3FZUdUoNdYxp8vRenJiLN51xCB2g",
  "key24": "3Yfm64wYv9owP5uD9ecoFP13A3uA4w4jEDQQBufpZfiWEmLB5hcQU4SQa4jkQojaX5AukwKBWSZuR1WnE5RxAjDF",
  "key25": "5e8ftw7N9ezHxygoeRohimMvbqh2eo8sZK4xjGifJMpoQ4qFGw696mJLPnSHCWJ1tu8BsSKP6edy2Ve67Vm1rZrj",
  "key26": "4ELPt78Zh32izy5GyeSuBAeBQLUFY5q16xMf2dy9TgKrASfCkNbDa1xJp4EmC2mN6LKtH3zMKYwiANBum8mVNouU",
  "key27": "36ZYTqztGHJmpYQ5wzgkzkF3z9ehpiLxSGLnB8GnaXaWgNGpoDKWCHJZs32H3hbed58e3nVLyXD85x5TgdiG6rCD",
  "key28": "2ChaExELt8bBYLmGjGhQtJ29qSidVFZJ2gu5rxUmDa6sSJnmaLyeXsMvGY1We8A7EQTU3wjVztieaALD41QY9x3d",
  "key29": "3iJoGfWvQr3PdEzDXBiUDG1rxUDovh1mjXogV1uytST3EGDyDDepPu5ZhTq5MrQ4TsteqWJSnc8zr3L2UghYaXvX",
  "key30": "3EDr8Ng33PjgPH3Qmm4ht28r21qqEMPccsDQ9WES3xUnFC1cRmugrQLCkWWun8Q82y74ULroDo6RXiojfSnqU3Lv",
  "key31": "22bmzCbx1ciSkbcCGuJ8BqBLQ6wHvgdeskGVrEUHR75WWKJ8ZJxnoY2heFwcGtLESHVo98i4z9iXW3ywaVLBa9u5",
  "key32": "28QYnXPFLuZRqiagxgCxMXaum35QbtgLXUrb7T4KywLPb9F8ZyHWnHVJeH5y8CZMKPZAsk8cLyUCRZYbTzYmSmys",
  "key33": "Bndb4HnCsLGAfcfZ1LRYfwnpRQpYDtcfJhEyEJ5HBc3qPB3Zvb8J2FmByoJ8qxtbwgR3u98TWy2BNBw8P7PHjym",
  "key34": "3Rx7BC9HVrauWudfDRPtZSqLHHd2z2ptX3AV4iDzyQg49E2g361dNLhko8jD7zCm1mqfQRQv4HVrNjm7qiDkpq2",
  "key35": "4hhGyyt8VSMBHG49QKWsXPufGXBDK6cGptxgKUpzQts2AC4tyV8yN6zkdTZ7RkTXu9PgfQpV79oFiX6gBVHb4zz9",
  "key36": "3NWgTtcQ7An8Pwf1fYFN6NkeB9VTsHpPJdgcbo9yxiqsFMMbzPG8d3XCn8VbgXGDQkSeSotGE6VyLfHWFHWzC2b8",
  "key37": "3sQwgNML2WVu1KbMFJX4yDvCcXDyFvpvkgqquvWmBTBNgVjKJGtmdxSGBbnxhfqfb3qnreF5oNPCZJ24zo4Erhr9",
  "key38": "2mgVGjqCrqKzTHKk7CzGJQKVz4A4NGGWHrb3RjWqCb2L2DnuBHGNvtowJvKnetHmVwkZPnx6GwrxR9Kup6LnQv3q"
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
