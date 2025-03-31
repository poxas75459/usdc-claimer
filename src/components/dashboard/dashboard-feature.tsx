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
    "fauQcWafPLKAS5qthvQM2jjysSUcueTjDPrbAU36FgLheRmVtCUTmrM3TGtYu6Jd9cDFumsED8gnLCjP6ZKRbzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmSM1EDuEYzLPxanCYYWrt1gAKZCBoQFh2itfRmbgKBEoNrd45QVyo2MdF2zdc7SVjPw7X961PtFmbjxrig4YRX",
  "key1": "5x8hvAG1E8ahhnzY2MQ1QcryfS9Zmdzo8bJnKUvtYUqajdntJn3CCzTQ4aGeEizg188vcshxVfyiN57EK1DCPHw6",
  "key2": "2N7qkTSbMfF5EacNDW7gxfjCbWECUy8qoNWwQsKLgyJuVvEoLgZaHhNDKjDgGEekowoWWauixhLPSX5GwEyTmK2q",
  "key3": "2SyUx8KAMmoyRCVMX4tafLmQJoNZmERPgjTRepNQiJLpXyvjLg4QTBwA9x4USNwrqfXcS3fornpbJQwcHTSLrkZc",
  "key4": "4bXcBmXEdsfJdMfQfrQZSZxGo2AXDB9fmuaQ5zYbiCiQk8bjinxWb73MpHeqGBjdCPdgd7sDEwP6Rk3xqf1Nmw4M",
  "key5": "4jhJ6mdghM7tGm9345nSFWeJDiY47u2A9frtg95sdcpZNqBiNWGgnPPnRHWpQvkKeFGBAY2mVKUgj5UkpK67V9d",
  "key6": "5dDGAwfNGjNcJ4LkHiUk4hyqgWDV8BwmwfRdMm6Gmm9sUSGbF8Vg9JDYUAUaKzLr4XAe9WRmCaHmE2qEN26Eph82",
  "key7": "5kPoEJ9vrmgo3rmUnoRkm6GrE3pvWUNSXQ42wFPsfZQnEjW1xbHe4Rvj8qt12SA1UCdbhUKEBjgBHNJtwuB4gCcn",
  "key8": "4prADr4HrEfYVWrgAT9KX2gTpJG4eBxXvFRCxTjKhjLWyT8SNDsmj35ms6a1yxPuAfbSZXC628JMjcG6VVXScn4P",
  "key9": "2kv7RCJ3NLWgcpE1bAZWaYS4AudtdZQYhTMhGDRAicAAyiVUBTVHf6DzxuYYCg6tLqEf8gX3jkiske1fq9K7Qwhv",
  "key10": "27ffTUGYg5hsGs3uxvHuEs4oK6vjkdZHjorzTqH7FKifmqvKURiP79M1XhRvsDRq44KVDKokc9ovpCehCCFdoyfH",
  "key11": "35SrVtC4mkKW71f4qAgG6SorU9Ko9MLcVoJ7KvtP22HQLnSccAHzSr5DbujWvwB82oJ6Ad7bkkQ2jAb1khfgqFEQ",
  "key12": "3mxwQvfhVhD6g9gH5smRQ6rmfUBeXoPjzYdcXxrY1rLxPm1DmR9otYbMDdFDrqCAhkwbUCCZkg9guXNqGZ9M8fDz",
  "key13": "xMgBUHVfAKHPJU2BB1ySxC1nGxvfKdBimTRNPnYE7P3AK75U3xeJUDf1Rf6YMTc7JyNbnnDZomB6vGm1teX4LdU",
  "key14": "2KVLYWDqA3min5HhtKKmcpEXsuHF43GSQ1UvzktKMag9uYUDf2xZ8mrfWgbcgvKx2WSfuDQ9wrzE2ztCSb3nsRym",
  "key15": "FN5viL78SRA6BWnug4j3iaGtKXXJL3R5BiiSqSekWcePZPdmeZKH2Zwjbj6zGxZ2e1Wueaim4qrf5muLJP8riVm",
  "key16": "3zy9RWvacstCRMJwWTQKXm1uCyzds7JshUJk1ZTeXt41ZTVLYe7SdSgncjZffSc927ZLGLEJNxvzy6ezQMtKu8By",
  "key17": "5YsDNsyDtRJHmBwFJG1oyPsWA8VUU5pGzM8qiiJMJcnBcVmqvWn7UBigQV4Asb7sJEihiTZrN7KZEER2m6dLKoU9",
  "key18": "3mvvqLZzaxRRwJgWvJsQQ2zkuBmmamMGnqgbP8191k3TFNxF48sN5X5jBd7oMXhtCcHWDp4pfZ38FJNJNts3wwy4",
  "key19": "ptz1n3uTR6aRcwJbZvTc9gYKeXfuVGiWrCjUvSp6zcd5wff7JbAYy1yRz7rLKGo611Gno7sLjz124YWpPZNXVs6",
  "key20": "dk9gSjs2J2HJP8nrVAcQxr24xt6jfvfbL3MKYBsVXwMTSgr6WFuErLWCx9QJAKVkFXYEuuQLqsMgPodKyKMPj51",
  "key21": "48tDBqJnxyYbDjaKoBgjopopBSNbsTe55nTCjG4ob1fVZxxh8y42Kz5frYAG1VJDYdEBRuJPR2CunvLGJ6sZDW49",
  "key22": "6PcR6ZSFf5AAKDBGBMNJPKgTHzTgiN9sfxLUepjWMPMiVKSFDvPuPy78Vu8hivt3x61hTJkS1K9mSRLe8EJfkKM",
  "key23": "5Hz8BLxtCtQ48kAh6HydEQNjpTpFKSN8vLxnU7tCoK4Wz14UnaUz4MWN7HchTDc22SgGQz7MzmdVdECS5HxstFAM",
  "key24": "5R5V5F8ShJQm8TaYmBndV4cRZv2uVCWX5AVTyFrfbomeFtWTaWK72rFTUPJ4hFgNee8cZ2GcjXWAvSGF4EwP8ugR",
  "key25": "2v3Cg4JZEGSF3Q3pagmLx1ivpim4aaSKbukZwFWzZL66FwTw8zsDh3SHYX8gjwbKqC9anAPnEYePNXsBmozHbpUH",
  "key26": "2frC8iUpinLJxdPBHPvkURFuF8dALiweUHWt4CbNhYg7WNJiUs4VbvLa1zFzgdEeR6ApUfDJQhbMaqTkGtLp6RPu",
  "key27": "21FRqrHVWU2zgsVhrJvszhcnAqh4Au1gQfCjhvuSLTXgCk1buZ9zZjdT6RuGDwh87QrNU4uNsHNmpMs86kaQhWRj",
  "key28": "4FE5CxgGCTM1i8U2UJKTQAvZfzTVZg7Q1uA4CFk8AoaKhLpZ9MmoYc2v7L53FuH9TQsFj4QV8b88yaqWeG1F38Yc",
  "key29": "2gupJ9UR6gUorgnLmzVToRi29KwwRFWcWyezDGMGXCZBCJtxHcHg3Zx2pv87aCivAodmCDaShjZrd9FdnPsHecjD",
  "key30": "y9hKhHrqELiqjYVY14Een51qAn5kMKCwvtgpNdJTj8e2Fnt6dGzovGmTiak9dJMAm5bzziXAoAUN7REU1qRXr6d",
  "key31": "CZbVKsSYTkSxDugvBHKexMDRsDA4HdSEMc3oM5FFJzZLshg8LS6S1zHKHhd69pqZchq7aQq8cieK5gpypYk1KBi",
  "key32": "GqBrw9DaoYggZ2ut2YwxxJyxaV3EmPe1pjDftXnSjgwUsR2xV6Nk1GQAiiocfk6oxXmuMUd93LvFwH9W6hSDYGZ",
  "key33": "37YJNWbSE2FXTtj2GJegxzLR5LBXQzMUjKrPur8ztBJ5H4hcDZHtcCAzFN746k7CoJMaSdfTef8wfRy4pKjErWWT",
  "key34": "556LqSqHwDKrRq1Xngw4MeqvkmyFXrfbvhmN8updLTwPwE2zW5RoC4zsBAbr1pm18o2k1wVvnhh4iKX7ATkBqS6z",
  "key35": "4HVTg8ajDsXaod94AihT3J8VSpXPT93VcvWUhrH4Z45zJnbGhKN7fQZqKH6qXvTYYMwhFUGnaC6JhmzLsub3ZuFC",
  "key36": "4tD93RGrVyeeUf3HQUiVTkX3XEcT7pcPweUyNJAxxKH9nge839cUiF3qRyxgrz4rCHCcCezngFED27x3YK7mCvXW",
  "key37": "YPHJWb2RLE84HT36anMBZUvqkA8gkUzDnbF1RuE7fAatE8PxVcG2kaRe2tzFPcacq4aviB4zwb2B45BAm5oq2JE",
  "key38": "5wvgj9GWuvcfyahH2atxEiwDz4g8seS8Ntzf6jgBPaBBLYtWDVaYJMGqfhASAwFeYQ8wAYFccxoTqtyVt5uuKomZ",
  "key39": "3q1vyi1741mtgz178EJvjxm5MF41SxoPRC3Mx8SZyFFQTstCXjLSjSHSZA2s53ztBumCFWBJYk9E6Jyi11GZKJSr",
  "key40": "n81GV2RXnF6QkiMrGn7yvDWdD6J8S12S5x5voJMgJqNjHyQieUAEijJfLUbybrUXVb8LxrnpVpXGcuEH197neo5",
  "key41": "Jg7SeSETgv2RxddLCSypRFL3PS6k8KyFr1C6hQQbbemEbg9ZF47SnTtNoShF5whpzPdQJdjWHTndTfPfYgoS8kJ",
  "key42": "2y4tGW82YKeXg5FM7sFPsMir1KJQeiUhrHowxfVhVVhUW3fHTTHBNR2T4KXAt77Rx2mSMsJyBEXAEFLmSSdDiYWm",
  "key43": "64vgdgPKnyCYUJc2BHhP2p3mBjaF5si5z6zM5XFpwFiRXWgT14Wp1NsXDFiji74AZ65VChHCRiacBNNXbyHSpiPR",
  "key44": "3k38DYFwV3wXWXQpTDRWyoTnfpHnF6Nf2cKDRYL16qvWudfBc2SzV9wNhaRseMxcKpJcDCUcLH4CLBacadvuTRMC",
  "key45": "DpAJhh5kAjJCq97KSyJmX5NG2EBG1hRu7o3EobFnkkVc7b2drr81M7ujAgRwq3cJPiS2mBkSUsXwjGk5mnsskCH"
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
