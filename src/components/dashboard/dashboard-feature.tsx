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
    "3NgrevPa85RJRzqLC42WK4A5Usk1dMd8nV3Kia4zfxBK1wNx1nWL4G3nqwfHWJFEgMc2iWczm6apxqUPX7VsWNT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zYYYNKZ6BPayLKCgTfw6eESxwdpyy7bGdjAzSNe6Wbtrob1P3HhEGsekDaw9HoqcQYkGSkFdBbhWdErKHETdUaV",
  "key1": "2ZKMvUo2qDcQ9T1scdhLGJVaqZYVcPV4fDrB7KfMUPfeTmhyg23FPd9RnUE21riTsWRp7cDJWNFG2hwWWrU3SC45",
  "key2": "2JY3HtYoar9byvciKcDVTeRiBdhsrxnKZmTmDpyXkZQXFQKNgFgXZTX1S5X1YXHVqbYtBePTWCcmeYU3jyrHvSDU",
  "key3": "aJ9GtpB2XrD4Q5Y7Pa2GDg1tsvS3H9M7dP4Z6hGeVhjSovgbqyUxhd1TBhcK8bWFTYyh47MKsL6N1qw21SF2mhn",
  "key4": "3T6kWgbhnzwM85ZxPMkJnpSMyr1fPXtNWsgCaYJEykKqFEaU1Q9HPB4i3SwzwbeyJTzHR1phbygMHMwUHKzbZF5t",
  "key5": "3MYqXwVjAJvScDEYez7y8zz5szWMKfz5bYoVNXtsy7Yms9U6BSN7GP38Unw3nbbDb1X6vBkTMjiMgw58Ur1Vwpsd",
  "key6": "4w2EpN6oFLbfo3qWS4UBKLQR2LEirxyMfkEUncthuTNovs1SNzj7wgNs63BTVbTtCCpyUx6CnDeh64aYmKf1JUSo",
  "key7": "59EUFZQVQ1Hwxy4ZDtyJ3NoDnbvWjFdLKQFXKkSpD5vAvTAqGrdkyP9nLVP5wX8JeCeU3L2ppmq58AYbMJ6vicWi",
  "key8": "YGCM6B7ZLE7dHkpt3TZtqRjGcAKydHPWdUwrB995Upvc2Erqn9AoZYbSoeiEaKoKNMF1nAn4hEF6ua7hWBSdvSa",
  "key9": "5Cvj9LA5uofXsHaV2ASVLp7gQYsQJCx2YVogkG2NyXMZhVkJzTMtJ23qygCVeKTR49C3FbuqZWeBPY7qHnxCnAQi",
  "key10": "5eDsy91PacrMeNMcakrbsjJjcw9eJEmDGRjtNuG2RzFJWiXmpHTsxQqcedvZveY4rGNTc5ARCQgG3pKecsGjPa4g",
  "key11": "4pgEqnFdb2eKeM4Z9Ajyc69j3AKDokyPjS3z3fGBLwX1CVdaNHVH8CSe9mNfeJi6hy1dSVoc6L8JHC26Bn8tFeeH",
  "key12": "3R1SNpW8AYsERTznE2gyA4RMmwbfMAiYi3HLTNvRpaq7zbtnqyGY6eN7N95jie6gsscyurjYSd1xY8BBV4AznrjA",
  "key13": "28THvgNvGJYKTp9c5yTkFEkESMjkgWLwVbEGuQdUQncmFjwMuEH4PMXDHwVSfARKCX6DSxCTqTG7nCY2H8E3kPFF",
  "key14": "3LYvaM6whhitF2oY81QvuVQqPBdpjtabc6jfJEEDPWDvK8JNrqZx2J2B2tf71jQAtegYnJcXdXJ5Tu9ZvPedrE7s",
  "key15": "4SwKcagtuk6fPj2kFcNtZ92WjGA6mgCyxx8odk9JHYVjsiUyi3QeL7Dy7LZRhRtmFkMmtnohLF8ppuECvzPK3693",
  "key16": "znL2nYWNnrxanAtUpNg8RJUbcFJwm9PoQvCj2j9K3GQe1kY88AiE6d76z2Fftkeo2aHo4SYTSyU5KZ5NFy4bHAp",
  "key17": "WWQZjf96bm2SWqb2uaVac9zJy655zktDdzH2SZq9kTu94HDieU21FSrRgFuz7jFujBAHGmNsb1kXLAHToKfCbZ6",
  "key18": "3VVFKKfamUVzkJpxjYzBih1SQnD16zvxK1hqQaQgHDw2fYLFwzf9b9Go38FgrYeUz8Eac6dJpoeNWMbwK6xMzV7F",
  "key19": "576PWYZxJy3MMiiS1baNiwmhoYLu6xLLSgiJqBX2FGmjwKcCfndrvanXg1t6e439xARFhHvKo5rGZBSD6HPoi6JV",
  "key20": "3NUD6nGx3X9wy6GkuNkMkgANdn18nVfgiBud5EpBW7UNWHfH5JDA8CE54GySnhGvreyfVz1GRZJbyjc3oZqtdaY6",
  "key21": "3pPJ9BTBNMNC6inQv1qHLBnnR5KFb9shRCej53gPvtpwUPyvwjZuF7H9Kq6ZscvTuDge5EGpJk18P82xV4Cfbo8h",
  "key22": "ikCSCHGZ4bKiYnVQVvbtHMuzDctMdyzBsgSUoJPPqUyA4a39h7PFRAQuCVnF6Kh9xtnExL2JbGKLVBjLgDjgrhK",
  "key23": "37u7a9TdCMmR59aU8vfhX4qhdzSdBG8RxECRctyrb864ts8zgSYQH1LbLcAz6UYZUvCSjAJdtJiXfxsvoqL6ER5Z",
  "key24": "5g7Cb9TDjx5U54H7RriSTBnMUhNBFuDN9iHPCcPjYsZoYVLmUx5wZFCAvtBpgQXfiyYvhagN1ACKFHTdmXtSaVLv",
  "key25": "ds3d7Kxvp3tBXhoHWEs7ak48jPHbHPL6uXwiyvS6iAJ4UYn2dm8uQ5dV33HJ6dZ7t5Bzth2hQUtwXre5MKDGgwo",
  "key26": "542V83JeqA6Bk9EgzHvk5G7CCKaRqe5VpteYg14Ppib7nqzxv1aoe5huUR8JnKeQBJngLy8Tc8V2Xye6Ch68x4ue",
  "key27": "3nTHmwx1qFYYqxdZUYxiUpD32TB8jw5iH3j5jzQRNk7PkQ6H3e7aNKHrsPSPjC792Sn7QHntRNkcYspz9wDurPFE",
  "key28": "2bJpT7rxdfcPRMTmZrF79y4aNbmxcCWLUbqES2mp7ppmxgSbUzcLHF66kDys4edyRMzcYprXGGQiC9WoRP34rXzH",
  "key29": "4ueF4yFez7srVPvVGN6niVX6diKHEirtc2cm8HCo3mEaqxUrPMPm4tt5TMC9jaTQrFVfiNxvzDWQRHdh8Hbyoaji",
  "key30": "4odyakwxCbmEPA3sTsaJSpoyZ4jyzF18z5EKyR1V36tkQA67i9jnj8omUVwrprTjdtZB1AZMLfB5rRMqB5qYpipr",
  "key31": "4bqj1oWD73HUea65zMGdQaGccQJxtcZxuh6S7qixJjDRxteJz3zhAASGbjCBhLT3LUuJ9fnYFVeNz8CctH4N6m1S",
  "key32": "5s5xVMEVwvm7CaaZ68M12L1zYiK7c98BAF3XeSPNQZBaWSBj4SKkPSWRKV6XMW8MXWtxT65Gq7J21hDHRBoo3LQa",
  "key33": "5wLXDvjEvZqWkKzN7VtZAtAAw37iQJSajB9LnXDgc6rf25rJ1mv9KTGRu3mcrj5NxCFh5irneKtaTi5UcKsp7o2r",
  "key34": "Edru98FLS2ejHZGFuyjBWLvkCDUWg3SuBDQkxATq2ksKMnt1qBdofbK3Z18fgtD71ZywcnT63QTSRP7n29kogE2",
  "key35": "23QFZV8v6dHRwzrGHcy38tHURRXYa7RgKLQ7NpqpJMjqKQrYNzoBcBWoikAMdtKAqZSdoKKSvDJ4hoPA9k31Xg4i",
  "key36": "uFYXNV9QT7sb66MVWHvNvo91SyDh8NUnXAPhyVQUTxX6RVr2wtoF9YnAPWTmZ97nvpSPQRU8H6JbirsWSse81YJ",
  "key37": "2BVtKhp3yLwWpudMFMwT2HM3mxwRC9nkDmXxvahhniwV4qnTYAXQTaqXgurLi4jSFiUvKEhj7qpsn6wawjYtUck1",
  "key38": "4f7CeBQuS1ZMt1C4ZQPYXW543nqK8K9UppWauUF7eh9YWNHQUuuKHh2aPpvnwsRT1U5eP8TAXxhxSkyfLk6SDnT3",
  "key39": "5HkwmgLr46v6yLCCm2XTyjgUHYH1kLRQ1HFwDpGvC9WYhTqJT5qS8QFyvRjLJ4Hsb4DD8QQuoRkd2geGqrzdkAjj",
  "key40": "2HNnpGWRdsvdJJ3BFhEhkQtYxtorKrLnrsAK3BAMWc5Z5A1Ro43swYm7kjR8JfPNotscinihhrnohB3d2aiQtwXy",
  "key41": "2YyTB1RFTeT1eaPBukhGDFAqGNokrwXdvgFN4sk4XUb71AhK7zszroq3PoPzCfh2GLhB9MmmxjeNbT9gxrJc7M8r",
  "key42": "2DGE7uY4BUyZCZbPyc3iu2xuUfFTEnxPKLuE4N1XiKFBkdmwx1VXHrih32yEBLtbujoA2HZ9QebYiCc4eyeVshh5",
  "key43": "Xnc9BM3kYGmjYYeJAE6RBwxaB3RMD4cyRY1ZPgCzBxXyWuLQSS4p63X2EjkZyHVKfj2ME95QBLjucJArQsAeQu1",
  "key44": "GBdjnVEg5zLeEpkcAyT5Juw9NeiGtwXw2uWb43wtkbeEQqgag9UPLKKsdb5z98bqotSBeAzLA4qhwvE1LVRWUhq",
  "key45": "3j6yMRSNoFGddegEtjSdbtCFkUTNmuAVC8hokW2EERoCX3ZMi4d3KvKsCMj7aKc6hPjmxbTrMjPWWCXHpEGupCU8",
  "key46": "4wJEHogoWCG7MZwcva4LcRL3ovUdVrUpsgqom1DrNGnXmPVN1yw7brerqhQcAWhCxcSsL3b6FCp5RkUuonZ6MDWV",
  "key47": "47s83cgsKtWoUx6WuuG5qc8Uyrp4fMMT59a4De9dMgdM5n2WQeJy595zz8YWRf6gPNR6BxC5r7i29aEUCnaa3uUG",
  "key48": "XgMhENHL16FHSXAehc1LFmy8ojJ7bE7R7Gi2g2RVeDwLieozekLbBdWBiqTbuPSuUe14TnE8yagF9KbKLZWJLr1",
  "key49": "HkgYfnLsCUpRoP1zqv1Le9FxR27qNwmzqZsCHafcqcb9JbJV6q3DZx6CYXf3xUtmfKFHu9GKtzcW9uYUkGgK423"
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
