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
    "2ay3Y2BijWXtbJXBK1a1Hntb5QpHPaDNQW1g4xPVyqikGmSpKnsRsb6V1Pnsdtfq4Ld1R3fsPqQgaCQynMHs33zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NPMFCRhPsnR47nWi1T3pGnXbmz8FfQTZVLhdzLcaNvZH1MJ7kwTRbrWbD9KdAG4VBijXA9sF4WDVikhwqnoeJQX",
  "key1": "4sMY7korzxkYMmN7VE4jPd1C8EC8m46jBXytjCEhhwpy3LodXzFNPrQyWKSgdcFEfFhyJR24yu37HBkWxE3FLWBu",
  "key2": "2CEJMm2urvNuHQWzJNkr86PRe98NFZWomZd3Ky7cVy93ErXjtUfKMUib8nTWs44pSP5jGnDvoMwSh2ec1Xaw3b5v",
  "key3": "4vhYLqFe5WW7HXvduY3N2xwuXZUpABR81yDEhKsWsvmCea2aASqLSH7rPFgaH4AZ2cQXXAEJ87HhZUJNPnE14GKj",
  "key4": "5CVZhPJnQ5uivCDEXdFGY4vM98dMG7xTdaqPhX6YLLT6mQjrTK8GE8qwzStPzx36RpJFaNn5iesG9SW7odDe5Vbr",
  "key5": "3QCvqHgaxRGnFkKFFrMs8ceWiBy9AeLx824GNRdnG9dKyszNepQHMsT69MFNx8LHRcr3AL9fn86SiU3zGW43C9p6",
  "key6": "3cXKyMP5a2Gp8d5PZK6xJc9VSdPQVgritXfwnasZcFu361QDYi2sLyN4Ud8qwACJoLNRKWfhowHuzE7bJMuRmAR4",
  "key7": "25UmxjhcAQxfdcyfjVyFYHwGAKQyCekAUz4L3xoBvMqpxGTSLLX5FpsNMiwbYK5CBxSuYWHU3XW3Kp1xC1x4Pzdb",
  "key8": "32SqqxMzWu5gx2UWP6W6g4M3tMGsuFxrA6HF7AKM8Hs2z2tVAmjLv8zUpHxhebKt5GAVt646aLfpAzfSRLCMXcrQ",
  "key9": "5NxazhVrM2cJJzZFcTAvkYYzsmLGJRNUiMCEAo9K23FSATQs1CrU8zxmxDAAfMSGuY9vmUb8tpwXSv4VcUFKFEk3",
  "key10": "4Lszm7rmsWM9x168vs8scNpcWtYBnXxfM5wv8jKrmumrjYwZNDe1LgCw7REKS4TgPsNqqeHZSxDSZW4PHyYrJnKi",
  "key11": "4YNrKy4ywVwCEXnjcK7bpF2e1YFUQrTDBt9Kp3XaAcawMHLTX6nA93gmRbRCp4iuRrd8ieGHq4N1tUackrns7xz6",
  "key12": "34Psux28PAWEsLnUSNMuxx1rJBSR6YYB6iSaHm48KcfYNvKu5e7Vhwx91NaGcRUjbSNGcom4pyY433qXsRB37j8S",
  "key13": "4FkTTFucLweceEgpEx2pXjSH5TpqLgTMaJBCPchJK9s2f66EYT96Vgxbmu5v8gz34vJR1uKfEuZN8Rfxa9JhurEo",
  "key14": "CqN4YrEUpnRxsppnrscrVQJmY2aBbnCu1WadJNvMK9EGPCo5RfYHoeaymTZCLw5KHhiWmAkBXoFHuqzcW9JKzvL",
  "key15": "4EdgutyU16SbuaxDAd5VGUKaPBcistUTo33xmRLVEVyZfmh8mWyfuvrBmA5AzmMTkkVwKjGedtW7LN2K6UgiyYt4",
  "key16": "2JRGBo7th8Lnxe6yr9qrYZUnHfWibT1sT2ddznmNabuHqv6C67WPjw9DWoaTC31EFT7tfamQoAw4ADC1JvE8TgNA",
  "key17": "3EB6dLdjLgtgA5epWaD5QZcmV814ZRgLxXs6Efa98ovi2B8PNrKX6b3GdMSUuPDViJ4Et4M28odvskGbhfKx3MAQ",
  "key18": "2KaBb8n1xhi3koqMrF2oPWrgiifERiK12E4jKr7mat3GBLTUxo9iC6zL7ckBeFK3RCuShRaaJJH7RtauuZQKA8Wk",
  "key19": "5SXJo4N1DiZdQn96kNj6FsUfzDdpM7F8N9DfAGDVyNdHJjzJNuwprQnrU42ZEj94aMA2xUDGDAPJpPqwQaPePNnm",
  "key20": "5ap3f46ZHb5ZXeQt1cWF3mvw3w9wK4Gp2wqDrn8nfVMMwKQuknE1xcU4F6YYbsbfxwyoeN74TZMSddNZLNhus9Bn",
  "key21": "2qCeyvdqvP4nJxnPi8rh6ZufPs5qsPr3SrvDJvLwGekpFGDFZAGatoLbmsKMvkHywbg7gCGhAdKoWrKpVQkHTwRL",
  "key22": "8nzGfhRD8Fs3BnPRWhk4xN4NFnpra7ADsZPVMLh6xutLR75UjWd5YCt46E9MD9QmDe1SsoAjVJ4G5mACgS9g8GJ",
  "key23": "V4GjgZqt6BSsMkaaW15drg1zZixCvHZyqKqwxJEyEgZ6vKAWiHUEzYSd4VsnnBkCwDe8hRaavczhkZM6w32FvtE",
  "key24": "J7uaSjVXuygNkMZjE3xUNSGKe4hgHCxJtt6it7qQqHmQ9dMLiBpRJzhQTmx2eDD35KmWRDgbhQRvXDPJ6QkfhTY",
  "key25": "3PVeijQFxsuXzLjR8LPVecmSp5QWJW1vHr8mHyJ57FyMqfMoCvxp93hNjWsdgs6esXZ9rioRF5gfS3wjvarpfGtR",
  "key26": "4rRKRJqJ484qbWL51fLmX4qsBCg4sNPCQpk1WKua72U1UAMG9csEp4Nmyivv8zbDst2K81WVsxc4M27oN5DzwYP1",
  "key27": "cDPZnwwNH4A78BzgpxA15cXSoYafSJVgwA6QQsDUQiWw9WGuzf48Eud7eDLE6crmbowDSsar9QZ5o3aoUtZfj2h",
  "key28": "5Do6FzP9nu2fUF6Sfry2MdpGZSDGki8frcpU3RSdrEfHy1GMmoj1MKHZa6trjko9M3J6JM7tEhC4GQ2m2EekCAPu"
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
