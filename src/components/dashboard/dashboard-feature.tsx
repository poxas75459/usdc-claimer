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
    "38ixbRYfALWtrkHfk6qiUK5SfAC8TSqWRpw4VZBEA3egicmR3JjP4DCZS25amHYLjNS1yPc2b4T23xUn4K2cLkxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RL9dS9NE6E7AMZzPEUTQbVGc5fM6xmg8sBwNxYxa3bMtGMEAsbuGKLu4iWgWyxKRzGSahUZAAo5Saqzf4WwvPa5",
  "key1": "2TddWJocE3L7BVuqUR1NYLRmiS6oLpFbEsnFjDdYRtJaJU5SbqkXvvQjFh86GXP8arbJsEvaSy12XAnzu1qckDwc",
  "key2": "3pi91CvioAbNNwc5gLDnzE6iyVtmrAJ5Y9FCX6UFYF5gzsRFRWac7YuNFLzCzLR8sZo1fi8NupyBTXveRFj1wNtq",
  "key3": "CdkQeGpC34n7S6R2nKRZCkxLDKsAEVvZWR9MwnoihrcRnL3mPZ7MxHg9jT6rgjSVwC6SNjrGVYZJ92JMnFEWaX6",
  "key4": "2zin2S9F1f3wzjM4E34VQeWqaoWmhUGH66svcPenqNcWP4ny89iayZaRjByDqSFjW1iiChWm5XRxjsfWkzWU3Ujs",
  "key5": "2FgiTY8j6ytVEAp3DD2JVfN53gJjgnbXvopG47tJCCY7Tgyd3xMbcQATTpJDrFWxM3udbemojpQRXtCQ29jKr6r2",
  "key6": "2UrvZanRBdLJ6pM7XUdN9V95KRF57AHi44CU2kHf7yCdJezkh9fXoWPAS6nEg3g398NpF2VHnPNwcU4gw83RVhP4",
  "key7": "3cVgWF3Y6w5HpXQJWr7hyrJsk5CzwK8gtcGQp1gJiJrBFNp4atWMQe4X27dDGcF6aEWsxxqtymgiVLTKC8C9yRpF",
  "key8": "5fQy8Mg9GXshCgC2omdcaZyQr1AyPrzUdQ6pB3kM1rTqE9VSJEnVGmMibRnHYcwomGmp4r2AMtZDNAb554XknR8o",
  "key9": "538Gt4EFsi4tCAkQ5kkCweBRSQZWwmvHhRbZiYfhB89uNzBWcm1jg56f2XsehVJXW42FtGHNqRJ4Lo4BHE3WBRSu",
  "key10": "RRVTB9vp5QAcFNEbkwXm3SiuGx5ZTdzoxfMGdNLitHGCQhatc3HrYDq2dGdEsEdroq2QrHmu1Zp6MtBCZZeFGK8",
  "key11": "4qUS9JAnTorfBFQz8RmCadob3JJH1VjY7sAA9puRWam1BfzgG5W8vsraybQwaFoBuuZmhfaKaCje6y6RzPUZzTaa",
  "key12": "H4pNdt2EFpTcGmD8LbWkR7waLgxJBYrDCnpir3zHnTzqeB4oGLsXeiysceqzQc9DmLLgZYhLfSnDqsARraHa6P4",
  "key13": "BNoGQX4rHrfbxhv6CwSMU4kkioi7vfMxBrdGa8acuTBeZh9Bfxpw25ehzU6PZ9TemdgJFFK3QdA2rccYz74PPrS",
  "key14": "pvr9StFcqiJHFUjy9JdEynBvjXEswLPDteJ9xC9aDn2xbjnHK1ffbyp7CfZvzwQNCs4Spcmki6dHnSct1yB5ee4",
  "key15": "khfEwYTSoYn1TDLW5N3pfaRCeVi348fbKMM5V2yQNcbH7zuaL4gPnYKNT6f33Yx2r8fqSXaYenUoMdDJs5nnZwf",
  "key16": "3ixJ9WXj3DNyrq6h7SK5fNtUwYPCz4mPVX1sZ9estcM2XVPofbdwE3vEiS9TGM4NfvCt2XwdFeptYthXQZCXu53H",
  "key17": "3q8RJpLtDxDDwk1nqSvNuqoYyLrRc7TgUwKaqe3AxaDgF8d72hrSC8knNfBYZ13GgKdXMBubUEEfXyQ1ArLbYzYT",
  "key18": "2BuSikFvsKz2ikjw7LmTR7jueSvMrnRYE2iBnQ6TQ5fJKc4GKeqbKfHHX87gy1fmtsec6MRXGkKQ5TdKAFBP7YzM",
  "key19": "4Jvna82vGN1AUqSVogcDtKeNG3kvNo2qNLtpeSJkYWgNtefTE4ebtGxMfAeePm1isjJkpoqnbVzNn2BWTEkJJ9EU",
  "key20": "2zG6WFrcyrsadA9GFGpQM38FDPMgm362YDH5TNtRgY5wuRVvJykM7pvcHpbdQbeo1xxcDoYeeeBvSpMv1mURX2AW",
  "key21": "2sdkT5hERP5Qwfjv1Eri3g6ZpSF38mAe6i638MvN2GKajTYDY6vvLF1USFSJnYV6WjEAGRBvRi9h8CqNi1CBkJAu",
  "key22": "2MSquHJVGSCTKED5JK8xi5w6AfsX3aQuHXPiHQ84nBoVoWQbErhKw8qZCbeqKyqLHfXWDGQSGdq36CZVXhrEZwm",
  "key23": "2awgjaXnShW6kCWaM2G2qU3zZKDrMYF1mEoev4GVJ4PK3tgxAG7WLk2tEBeAUWn3UGFhmep15C7z8RUgXcAtY3hz",
  "key24": "4oVua7VcktY3P2yfAB5qwZYxYscRHNcHsqx4XLwVumxBnmjDjBHgoKyUUuVQYkXGqY1Y4iaydQmAjB3RRE4H1JMp",
  "key25": "3XShn95xeYPcYSJ4bq4xXEQU14wd1WnHomgb5GEiMu3GnAMGL5VVbqTeR88VSDnQfCvq5JB7w5xrt9NsXRwBQs7q",
  "key26": "21KcwMxdGMzZRXPA2Zi2ffzsTLA6s71gybH6DTS5dtkq5FWdN5HJdTau47k5nNvHtqTjmkJ2ksuW3zPZtvCrCGqp",
  "key27": "39whtNnL5oeSM6cqENBsgq3gxyQisUGx39ynCyaxYd9HR1QUniCBn5wUG5cgMurqWg3nbYc3i9aetvSgvrSJLHZG",
  "key28": "4fA6xm9nXBXLQLJLDNT61v2ttXB5Uy43CXVcrudHWzAPGmmCMFeLPhT9NtK5NWiWTxAPoVBaJuUaRTgV7mpn52sh",
  "key29": "5JDacGTDy2dsGWT1HV2qJ7JEiHjbiFC4E777eizBAmvHuFwWkxhGgy8rqs5nJN7hLKjzeDatGUJ8CmEqGQL4CmNk",
  "key30": "3zrfvNKw35fPNqiUsWrN1BdiDxyB5GA9pGEUiYA4hWtdZ1YTHHW9HeNJWtjJTKJy6dVSTmYWxpYA3qgzASfPuhkG",
  "key31": "3QW1ZVh9dE1neogKs3YXJqPuwKT7v1kK2fjheoV4aPpvUMCzY64ZkHtoGGUxaQiJFdzda9M9jcBmvFH6tvyHkres",
  "key32": "5dEs58KjJ8T8UqBy3cwQa2C4oYZ9qPHXJbRHW5QkrLHDBhkYz1xX38Wo5iYEWH2gm97uui4afW62cY4d3uNPw94u",
  "key33": "61Cf7tfaHSEYgMxtTPGCLeRz1ZWma61eLLC5VqWuWBsJhT4F7JGdxvphnTVmcDYQZoR5KPxxCnHEviaAsh4iCJ7v",
  "key34": "4PVV2M9TMLtWhwEqDacAiAFx6w71nrncqQWD1rSpbZLFQETMyRimxK4QPxPbJDE9DPjcQgFoUD1Y7P43RZc2t7Uj",
  "key35": "5VQEa3xxRGbtvd6NFC3wNGSADbsTj3D8qDoEEoxASKbUuJgSEaLRoUqtcjoGJqJV35ZC1y65qtpkVDJLCEPXpAn6",
  "key36": "2DUXPCzDGyJ7E4TLi1aqaUPnJJWxvb6CVMcsiarW5sbK6igq8KACpiyN1ATEW2bumQushwYNxyZ7MAFzLNX17Amk",
  "key37": "2FCxfWeazF7KutcUcQet8P1movo1oMepFK55aygXa8sykJa5uM8XWna87RZ53TdgFuQqFWzxCTDnukJpUnQuGhEK",
  "key38": "2rakPtiXP28WAe7LiymbA4h15DMFEjEvshSXhoaBpxnViyBLfSCBvVpxeekZ7BERPy4zCxdPEnCys2tGN5FEatKE",
  "key39": "5tiLW7WNjdCXFRrU64BruDG8KLSVMNK5wEzB5GAGSkNpF2kwdvhYGFQo1WovekFuToJAT5F7iocWqWa5Xqo83hUQ",
  "key40": "fUPR4DCTxcS6zYwya6y3ZT3XgPAqWr87DSBJQrB9zE1zh1X4x2RE2ZDMSbtZQuQGPEf7uP7CpQfvVdHCnE61YJ6",
  "key41": "5isg9CjsCmeSmaLwQrPg1MnERYCXaK8Ddijfc63tdNEqtTuL9gyxa1hCJNoEQMeypa62YsaSUJjaSjEDT5RxBVWZ",
  "key42": "RHMKimRnwqRLLDsFjWoYjV1A1B6hnUf269GTdRVkcu1cjxSw5gQtUUjMRUDi5H3DXxm4XcawJPh2HhwgZpzspXQ",
  "key43": "3VFB5isn4xytRa8vcVBpUdBcWfbmcdy1zDf9JMUd8jNjwdMqBfvwwowzAbb2Jsai2ELfmooJ3hbBeJA5GdDd9qx4",
  "key44": "4ftpWBvxcah1MDf1xf9BX8VUt9Zd8zDZzrrGQGGZWJK77CSi2gH3HWkDpg6Tqa1uLaPecTXTmXY6LshX79eS4b3V"
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
