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
    "3GJczqqHAbNTVPQf7UeugPKtPbME5ddQtR1z3uCE7AguDpQrimWdXrm7NFFCd1h7W3qEa3LCJrC4QMnQqWzyXFah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTdMzEarjcGZabrDythaPNrtbrZs2fFZuxZS8FbKXAohyXgmb37sV7xkBhXwDvuPU62jxXNbXbLabiFTvnciwC5",
  "key1": "4494FZrwwQLGK6UvoMkrPUfGd7f5aoc2bwrisQM6TeeQN9BwxPem8kLHFTDgk5EELihY5pKRbgn5QqKTHJ35v98z",
  "key2": "4YKfoCEnNGkjWzYqgigDrckPzG7cwadtS97WgDvZquEek4cQvrXnB18TyL7yQyDP252UnTmx5g9gjzjW2yoLyeWh",
  "key3": "4kdaWU4bvpU68rYH5FQREAdKRDEpy5CK2ewNVtT5oj3JwDzLqH8TQrNF7edGfQAE6LuaRQ3NAJXg2cuhmHnJ6DQd",
  "key4": "24xAoxPWxd7HV1tg37AzNk337i2oAmt43TFHAnXBsH5sSE3phx7fekGKPq6rQemvbUvo6RXv9mpryTzDGSp7DWCY",
  "key5": "4mTiSfZy2JTDBLd1wNTSrHJXTMYT9dkt9FXeVGBpzoekuM1hnQZVtVQh6u1jizzHdMwxixKxc3kAZNvbzt9A8Q2z",
  "key6": "2b2DRUGNbBcLt6LfK3rTKKhfu6Z3RmvT31wL1jCGLz58RpDUXcinWnMk77VHsnw1veu64tp3b7qrQvKvm8vSGExL",
  "key7": "2Tx3qVPvhUHdtZtrM1cCcuhFExs3TzFUmxt8yetqwnBAmPRYbNacPSBYS2wbNfqYV8ERmtWU7vgTMmqiPr2YHHgC",
  "key8": "4QcCutyauXaNyLHEAja7kari4KT1tiWqvRiNnCWeQYVEaDkLSdUVdUar8tZKthnir721s4YdFQZNhZLsd1T8nMdU",
  "key9": "2SncgyVVGgMUfZf7SpB1tXDhYeYqPkzWVbNvyNJkwyUMyHFoGiVo2wxjyV8VwQqvuLaEfckAMj3gFuZ9xYcyLWA8",
  "key10": "3zux5JYwkyvPksBhVnuAJkiv8keR1WDSAc5BLnxzuYPHmTQr5LE2TGPi5W8mwczLZKtPUA6a1oSottGmXKytJZt4",
  "key11": "38g8UZNTXbM2DvBSWHd2qazYn7ttLFqGexu9nvLtaJzrZP2U5fnjgSYDNndGA6GLmzweTEHbDuvsoHtFFrBhP61o",
  "key12": "2aDFU1Mh6xksExgjVSCatujsry8GZFDbxKVUSb9HuSBhSjjLyjbSFmjKDAsECmvjfy7DBZuQgG64rg2zXdiDaESE",
  "key13": "bEm2LJwZ1siYBJochAngwLrgpGvH7iy4xrRwnGiBAa75AZa6CbEYoRaDyjbdzu816rAc2scTzRs9bbB9FDJeDLQ",
  "key14": "3J5oHueo9fjgpXHLv3CJdonPaQomnaeKg9JNMWxtAj8TKKsipezEbMJBp9rb6pjhPtFGdm35HFLs2YfrNcLQvN8T",
  "key15": "pyWHWCX95Pd4MhpTYmNPq8ShtRBBiNDUxgjWqVGRAvs1z5P9rEidtEXVg8UpZp3nzkXxVJTVs76qb16MiA6oZm2",
  "key16": "2sfiEAj5ZdUc6Rj1DTDGQLsynGbRuzqNzUXQ3YivUVLwxzzvE6d5gUeKmXe375Cp4TBPgrL6PLveh5X2hkYSSezU",
  "key17": "2zMHF2Ug16ja9Tf8ogPRtaAMSR3X1f7iUbx6RRk1Pbdfkz4QWmdnRTV2cPG6v7G14953gzcfan8dduZ8yQ2rXByW",
  "key18": "2UymQy244XDkEVv8C5fnqQ4HNrdKxT4cQqDkumxeqUQD3H4JkXhSB2LBjSwPDfPmSFUTttUsB7fWqeGWXmbELJWW",
  "key19": "yWuXjXxouPx4gWfDafgShv7LZuEVehApVdEyyZ1mRQiTXx34RWCzTigK8h4NgSr5uPtSjjHGK31ntY6t4jqHu7p",
  "key20": "5Yr8bsYDNCJWQ1bi1rtrQEwpzUGVezBjRWoeUYRM8yPt4aHv4Jn5rFfFitouwPFhnosUL7NtDP4zAW5NfnCjcti6",
  "key21": "66a2xRxYx2tsFAM5KuieQNUUSsxKYikTkKMUtPkX3Xir8NtJ5KkSV12fTHpYj15kJdEwncxHwS85RcSGMG71YYZj",
  "key22": "DyFrSm9zrNdaEJCbUyipkuuEYreGZ3SjXowvuKygAsdbyapTKQD8MNXBzcQG2VEc3iHMrbXDka9Gt7CB61WLrCy",
  "key23": "41j3fmBUY3kHmXQCixAS2xBpo2pk5nhUZhSSnpaBQ2T2N3SZw1fM5GxqCejyfTj6wjyFJkpvPtzxbSoE9N51p5mU",
  "key24": "3eePueJMF3PVyUQ4MBbdSUrgkLERATQFSUQ6HRWMGA8tHqtkMuRmsDjJ6BnQhNZwucS9NtpQ8gijAAPtwtrNfftw",
  "key25": "2kCEtqFtVsaUuCgEuhBTGksgBapdi2NJAZvCgwMA3DUJKTRDCbavEb4dSy1ypEc88MbBmuKoWrwFit8DtUgzq1TM",
  "key26": "4VUEA25L8p9TTQ8mPGEbE2qAC95sHVCQba24fCAisbiWLswcVHfcc9ZevVnuBELWBmv1S8BEeUKJ55wCtyUBbaen",
  "key27": "5BreqsKZt8ja4tm2w42gi4jUFikLWGehxMzZ6GE2ZVddpUHRgVLVLUaAxMnGrJZdB3pXdVJ7pHk4ZzcAmTrLPEYz",
  "key28": "2isuXDQMUwQp9NYsb1T75XqNLeoh3o4LEghaEsTJpmpVnPEDZi17Vc2dZH1XwPRayKwqZ9qZmZSMSxVfXjtPvExF",
  "key29": "5pU8wdo97fS7nrQ6x94Khg7sy9dMUgBTwJStmuU8fXSp53v1zqQWE3m1dsctX9AaNQx9woPEVnYWaPxfrJuBpoQJ",
  "key30": "2r62PNSsAYaU3GW22CvKNprJgexkmeqsZNT6z7tN4SAp8X2suqMUDiQqwJXxcL8owfWRHGDz9wt5o2KxUwHrgtzt",
  "key31": "2c5XHF5CFnbRbxBwNCff7U3omZZqNjUywMkVYSympd1mr4hFR8VGUN6EKvZjowdcLAy28XNWZoX3urvsDAdVFZ9v",
  "key32": "23pcDwWYLeYWSJemrwNeufFHe4AsxGKZ6bsouPgfJysoU33ZPy9jQcQxBKYsSFLntm1YjoYbEd9UCLbSaN1gPQnf",
  "key33": "dUcshQEuGG5GGWjVJhHKVxK3kfhbX5z99C9BDJEfEmbTbR4Mz98gnwCDJG9CB6Mnkr24YmM9jJ1Mi9AbbFa7QKQ",
  "key34": "udkbHZHYmwJixXkWZyD4RwKYio564wCNsfjU95ZPJ1QUFWWRr3FddCxRpyUvMM4KEy43DaqS9V6fUwXyv96vTDd",
  "key35": "3GbksGPKveeyB54AHXjyBscixvu4DiakJn1VeXdBUXFmAzGTobZxN15ZdhmbqQ8rXRmzLUn7KnnWqUgGjp1Z2HnL",
  "key36": "5yYcut4GxtYTPHPVGnoGZY1VzofndCN8GQxJGAmxsZW7evbYKF3wPDR1faJQJYcEQxaj1e61rxgMmLJkjLNDC4rN",
  "key37": "E2Y866cPS95M68sWro7fkfxzjNL7RbrmCwCjACyxZGf2G83en19L4DoCCpS8jcnMjsVsP1NFCdBXDSDs3ZL9RKw",
  "key38": "5SR9iRmpfvDbo2s5oPT5ZhEcVWb1zzRU6rzfRE5yjTFQ2Kmxbbg2aSTvSSVMevxULNy4HjhcPMoHZTx2H46w8hPf",
  "key39": "4S1yTQnbkQuXh1ZStaeSdPwjTmKHHUMSiRgd6DnVHJYxDriF7o2XvbddVPro5zxQevMUTrmnAEMk1e7YA5i9qaQj",
  "key40": "pcb9TLuBgjdxfXJXEw4AsquizaQHNGHiihHUGM2Wa3x2sLAiEQndXRSbN5i1pjoa9LmBdVPMwe7Uo67Zro3Cdex",
  "key41": "55b6jTJAFUo3GWAt1kUdS7uP48B4ct5zKEDvcVNPrbqKk7BSXJZzvZZwQV6vps7aVqXNfMRa6JBesQ7KkpdndNwG"
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
