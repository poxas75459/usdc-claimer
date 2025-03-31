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
    "2Yy16CrCqSjibzXnugrZGRjhDiCZGJv6WycQdsKhLYtkpZjY531gYCfgDL9MEEGb7ELvetFyzGCVqhVYaAdAp1AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ec13PiuEdXWb2btghjD7S5n3K1MY9fq7Bsth5ck3uXHDaLFghMSSHrMPMkND9oC4vhXkHvGgiNpoHeoNwHVSnGC",
  "key1": "z5VGhkUyJN6oHjwQN2ue6jLW5gA9PKCK5fG1V4n7YghBUZfNLoEssMscX5vXS4FoAQtDiFmFozawFyuhX9qFvPs",
  "key2": "WaPxXeixGCHAitav6UzxfstPALacm4YSSp8roN5BXSb5Qj8pkkjiMFjTeyTtdDvq5tx7BzpiwyRx6ia1LgeZjQY",
  "key3": "3e7BkVYWkgiqHwUhFfWvB5oQA4pK6HBVTqxYnn8U4ZQ6NifVpMgUCXvpRVtfELVZDiRGFy8iE3NvKtcn3LS9aSxi",
  "key4": "5hK9fHoM2j6EfaEtdoE2dRp8QCEoDf8Vcw9aKTDwSHZntZ3v7CUmYz3bts44hERZi6sKWUdctvv5rUyqaXVcyYB2",
  "key5": "2qTPdjag6DrHeG832skDd11qrUoEFbpeGUZGuYcVn1dirm5EqKT46bmmPvpapWz2QJJjxNz6B2L9tj1xJ8cM2Qez",
  "key6": "3PU4qEfTed9Kt2vv9v554v6qGbT94ATjTLi8uih5zihdz4joyzekBgrTJq3Ct1Dr9zRz9MgAnVyqizYPuRSDu99u",
  "key7": "56MvXP8oXYbCEAx3d2fbSXqyEFswQgXQXU6Y28UgC27WA8hG3VBptTcpE163hK4AaPtHX4qgSt7sAJAGKrzg4CAb",
  "key8": "3gYskaY9A7K6qtsuDM4FYh8BdQLgZ3xpqoq9pnJRFGV4C9ehFDSA8iwrvTDp5SpEGMiaJo2wfCPcserwL1dHX2Qj",
  "key9": "4mCcr4QU9HBhViCqh164YMvdTFXbCJKCsp4Gs6jz6cAG9jegXQuZwruk2ZkSYC2cBcQG81FnfJqE5C8ViPoFdS2Y",
  "key10": "5yPAcYtnkqMcWSqyrnXpskASjtKobe8MCZ1PTtfRHketBEnrjpSD5Qb7UroznF6jjEZrizLruQ7vkUjsQYE78NqN",
  "key11": "5gEAmG9mDdKRLn6oEFAD8Ne9eSdXn1j7bkSo4JsMcF72XHVX5TwQ75RDTD2u45KGZTxNwLFvCSawhXVKuLNwztfc",
  "key12": "aJ7fBmMtwQTjKdgTq9V7ffknHxvTPTrZeYaPyRKmTetXf6Ds7iUvXkPGXFB6VMHd9pcw6s2PVhsjgGidyvco7Gk",
  "key13": "3zpQ9wZZz48FQeuRykc9DQvsuHtEB4iTRsC7aRUHqZxGjPtJTbE6vHrAZVVQzozJ5SeUQ1GH2wQBgigewmHoTvuf",
  "key14": "2EfSHRj7BEPF7xoFG1UWmRHgmxt34J41W1matdXwuLDodTok4hYb1Mrgi3mG7FGfvyQRWxPVB3cHMNoNj9JrBhzQ",
  "key15": "52KsRSfnMyJsAW3t4EfGgRbLZr4q7hurj9pPzVJZeH3xCNjGSznSTcKVa85uAvNCFnsA2Mw8e3AA9BUUeNaiFstH",
  "key16": "5UXvQ1DnmRzs4EQ628VCb1M4kVxZSPV5e6Sqwpf7aNrmjB7EGjqCRwyA5UqchRbbMKi3yieeBJAcWXWr9vUBB9g3",
  "key17": "3JLYtj9Jv9eyLDMWKUb1JEQrgNUeDDbp5LMst3QYFJ79qvUpuEwmBXrcRWctu5KARGjhsVsxMG4a6dvyNCs6r8G3",
  "key18": "34k7i5e1dFujT2iZiudZsVSerSm4D9u5PjagMfZu62QR9bRTUWdSXmxpiUs75WCgxPmed9EySu7BfzPTXzp2aw2P",
  "key19": "2fJHbZhLtNKbrDiRMRcvcCASGp5d9Yj7SGnbT4dvxiwsqSY8MDwCRYyfvg1tzqC2UTmH7GYLiyiUVSCD8bqqvpaU",
  "key20": "zKECR8525iYHRTLDJrZ8KcyUjs2zZSbCGLxSFxJ3d4KiWH76uamLEbcM7JpMnbEcoVPJgYfJ8QPKzCyZ8RYGCYn",
  "key21": "3567m1mtutksknW4UcpBTYyQxtF62Qh7JiJRUETbHpgh2Jrue8Ax5vwsmp862kdMb79ZEW2QJDqh1WuCnXxu6mL2",
  "key22": "5bfo9jtLEdfEGm2kUkQUgUKYWdvD1xrhx8Fq2u2mhjPo1RYNtTXWbDKAAB9scdwgpSD8XnxRkntqppDxEouAxGE2",
  "key23": "5R1B3bRbdoHGZM14FRSTAWLQ1BWhAmRrG7LMj3Aw52puWLPbYnXHbabiuQ3CzRyBhurJEsEpN9dwqACA4LiBpNxf",
  "key24": "2oLcp3GCfKfoSRFQ7bnAJxBKSntNTzXPs7VPbbttcrAsZejfPjeSwvLk7SLjJVS2C5R1Yd9b25bc6hwH5UxxAdhu",
  "key25": "9ttLbmcSySxFSpbdKXzpaBNBVt8iEKw1UwDu2Uk2caDzx5NjVsfzJnrFJ8ypbFJ7UVRbDxR8PTZtKW9FnMi2kJB",
  "key26": "4h71LKUUdWmwNEkgjBityKnc7BzhUg7cRGCVE7pZ6vP3j3ximXtbaR7m5KwBcyNuFrakBdkumt7FKgGJog4QFmvJ",
  "key27": "3T25SEgJkjDibWMZ9WmUqdvxGqBGfvfeL6P78mYRJCHSM5bMbyBZZVc6VVGmsSHWPnujShZmPZQh8JPcHSQeTEU5",
  "key28": "yJ9JpHy7MEy9GEir6uBjk1jVxChP8SAdPe5UUFDjkLdg8NujHKnjVXoKkdPutF7Uzh2mZ14VrWMXzKR4wKWVYgC",
  "key29": "e7noMcnHEhatDgPnAP6t3R8x4m67BtwT6cMms386wuJpVNknYR1V8CoCZsLtg9otTUU2xovAMWNkV8uNJAEwVty",
  "key30": "2uyT3f3rkU2r21ReGTFKs3GqnMdHSZm9ueRiEnKcrAJe96ZDReCRf1aGUrcGV372PXCH2UPfwqPczkVW3FUrA8YR",
  "key31": "2jKpFedYyEgEEa8U4Y1sSyq1Tx61g5QQWeNhhKfvujYAx5LkAgeUQsvqvNdz74p31TT7WnHmxX3ottknSmfhaqyY",
  "key32": "xF8tprAMsyEh5ScgK1cMBbx4wyaDurMUDXX3eVG4d1qwNwDEz6N2W4qjkQgpxQyTMVrE6a54y98rmpmi6g1sWjf",
  "key33": "2DujkJYcKYPcZB7btRexeYoreBep8HtCyU4ZTEj18N61tPLasFqfJuRNnkenWPDsFVvM5vSquDutJPP7KnxFB2vX",
  "key34": "2cTG9RzM4h4oDYXPTwWe8JhSD6e48ARUSbkWJykKP7xruf6YoLvA6Qm7STZR3WWe3V4DtSDmCYdP5apy18X3TmSo"
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
