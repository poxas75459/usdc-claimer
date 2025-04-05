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
    "121PFKP4saXqiL6P43xmz6mhS9vJwF9FsbWbYFZh3wPStVuJFPMVnrU3b1n3deBD1iTVZd19AUAny1uebVqThbCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27zgr7TNEoiBcrzXZZdomKYhxu6nCAABKy9Wkd9v6E9b9j8aM1MTy3rcvUVCY7BYj1fFYANA5Q7boTPH81imoct9",
  "key1": "5TuuZcQs2HeFdSY8uKSkDua5paqWHQvpeHnz47zrVqLeFVjUwtCjiNyVEoTPf249a1YPovBAyPQsQfjocp1F4gjs",
  "key2": "M7dHrvdvU3jjuCDppYamu6vzy3bkjYJQFAAJV8qABAcjvfEYvgfKwTmMRKqFkzogpKiaFJfr5km4jxvDCRJnsUW",
  "key3": "2agCUHpXjjKznx4hGu3mEUd55TeaKQXyv65N11Qw8JzrcnJDZyFidKsZbAhLcQBnFwFnQyT2gcyLUCH2GDc9s9kC",
  "key4": "5KYBcAZF5iXJDi5g1ZDTRHgqjoQxWkw2zk98w95THDUMiSpgBBJnRrqgG9oPcTrJtneiSdDoDQnpmpBtL5Gvwo6G",
  "key5": "3bwWNKXpN65CcD93SS3jsb2PkXuZYm2CBERK6LDeRyGzY7qWyaNmCdjFemSKFNKJsGLsQPgjTfidERqnkZxw9KU4",
  "key6": "3wtfuaV9mNYbYGu5HKHME798wFDcWBmuBDd1UCmUtG8KNSSVEPQkZyj7Dfy4TCL6kh1NSarGogVTb2ZtGxRfNEmo",
  "key7": "4LgTSVjJg2fMqW3QERjEppFm7DGgSsupuhYfPKQxouiuuwNBPPnH2jhKh8EKHZ4SJAsQ3VPDNzaFKD3CvvgnSvxK",
  "key8": "srSh7xEf2C9TLhgRYXmwUkdLjNWyVFAnPVuraPwFFxumMaG8rM79N63cgFyBhDmsPYLv9FvC3mr3s6pgF8AtbVb",
  "key9": "og1mAEo9J6deYNKgXGWEGFnfsHPGduZcSVCPr6irfgkTrB66aFnebhsxULJgq9WtFzzdyvoLRqL8k4a5iKGRKqR",
  "key10": "2bPNoCizbg1z84zSR81YM5ThbS6skJBL8c7uqNXq2ozEzVY11otz5yec1rxB9YFMJ6pS5RzCUuihwQeUQPiLc8Yz",
  "key11": "3Ru5m5s2WpFRNWcR4ZrA4dJaXvZiK3DcTrP7Eg7qVnVU8rbY1y5GZcZ2dvJL8vjuXRvQcpihbWYGtc2YmZDjWg4M",
  "key12": "4JNK5CKbXTfh3Rhm3txrDBYGFcY4omVk3BtiL9EUoZL7xDCbWThWCwb3L1DrGFtHUSDZH4hYG7efnud64tskwGid",
  "key13": "c55MzymeT3wQLqSMgFqzA2BAqU2WK5MRvcbKnw1VG14xi2fUdnw8Z5bSdgi4WGxdTHngFAoBkzEjLCzanHuPcqn",
  "key14": "2U75SFci9LYZcFjrX4DyAffVXqwhw3sCjJTk8bDQpSJVYsoaqDeKYK4zANuNdsdPKBvnWrJMGUWuQAajiNn4P5rm",
  "key15": "2AfJPiLAnGkK92Kys3kYmv3F6YfBvuYovkTSxsZ2YEPSsTFEieCxrob26Ljc4PJSHR4wmDCQH8mhdFgJ4YhPh2wq",
  "key16": "3m71Wx6VzaAnnpCGfMaLLxfthVSb3z2ZMzqjUVDsRoNK4sBQaAnWrGRBUZ2XfD4292S3kjagw53C81bjutzxy4AY",
  "key17": "2V7B23tqubvA2AcbygNxbEXaBCEqxL422bo9ZFfiXN4fncPYbzYMiTeJH7cL6t6mWSqBcXJcT1QaHdvR7Cjz9DoS",
  "key18": "21s8HDeYhtymdeh8qeWzuKuDQdSkvv7SHaVuzQfVQ93qneRW99QZQpgPFTQyQKEPR3s9sDcwpgy6m3KM5Fr3XDzq",
  "key19": "43HPDvFDxgBBTGYf2eeCNFJxa7e8W4VVKnHJhcaTWP1f12TAEbBUSnd2HfBb7AJfDL6T49pcnYmKj7wna8cAZNxi",
  "key20": "4A2ssZmKG2HVtNkYPGVB9oTrfnXiYbwumsaQkoUSZ34mo1Xb31Z2wwAAB3YfnqtintVx3g1z68BSS1P5k1trVDMv",
  "key21": "2QfPxe9nzi4XypxBLXdYMMRaRKiXv1Q9251Ze4QFn6CQqFQhx683z95ngxu1PK4tTkbYk37d9n9VbbuS5ihnJBAd",
  "key22": "2QA2YUU4pWNTkPnZorCuSJwiMevWV33JU8tmRKKe7wYbp3sRfkimGDzWeEzkqaQMTjJhdv3BwN5HnF7QoozWpX9T",
  "key23": "3e8Wg3HVhxP1k7FaJtpTaXBnKKXicXe8UpuMS2ykpjULi87god91fpBewR2LUtbnrcWaPh6xqhXnnvDh7HUAow9g",
  "key24": "dfGCempJGw28dRC9KjiAi4QuJ96LhJ6WcFCb3twF44UZy6APay2avwU9ExpsqdPXgQezFZgnKxBS8g3AmzvVmA3",
  "key25": "51MM7wQRt78gey8d1HJ5Sqj9nyftSkMJNzuKDffvz9PXJbdYZeYFvVouHSKXe8jCvFzaxRBZpGbJksoTvKQQJWCt",
  "key26": "42eThapYWiFKgYc1K7CbaR32LBHYZhC2ZGAaqVCoX9HrEdeY5txqf1EYFy71ZrT2oMaNkvZiwAaBAkYf4YiKBRrt",
  "key27": "5djvwPxCFimN3BuY2GvckbeuPAfsVMp3eMtSFAjAuN6cbRUeWTBUXxNuD8EE42S1TkdA1JmKGZK9wzY5VYpYNSuh",
  "key28": "2saNgMQpiY5Gz5x6BFqzZqb2dEoiW3Xfu8cnBSfAXxgLFAyfK3XKbRuNkyKmLW7sbtzo7LbopJrFsXxChCF8ycYq",
  "key29": "32zuK6ysrtgfwknAwxd8Nkhejgt9ss1bwxXj7MPeR2cdoyPm6RGTJtYFUMUGCSiXSn6HzcVY4WVG7CDa9n6Pq9RT",
  "key30": "53LSp5Gk6sHcGoVKTQS5ESt3zsXszExoVVeLhExrUF6QkKhAFMeWpzX1KFfqKW1j2y4V4rxLUjE1yToqruk63Y7G",
  "key31": "4LXgPkf39X7s7AWmdMSkCBqvLPSWk2LqPAexpDKWpZF9QpKUMLrq3EKiUPe2ftJy3LmcgAnh94R6bcULuesdudbv",
  "key32": "2GmVrsMotMfFisHXSiuRPT8exUhNPwUJuQFSfH3nvpvaNNUjhMVd65gPkBukwpexQf4zKhM84TBJjF9SAxsfHoSm",
  "key33": "4GNbzAuH6QBgeQUwqZbA6jPea2osPftjXkpY5Wo7sEdkWcaZhHK4mETyk3pBbm9vSUKjhy18SN7LFjuKQkuXbbg7",
  "key34": "4bAZRDfcwg1XcX7TNYQ9maPp6RmSnAspVVpLTV9zMgJxthYzCv2D8ids4qy7kkKWRTUCwk8hXdghFWx6TkLxa1mK",
  "key35": "31tRMgjLpqdnfZaBRBtgpwHBTKoV2puaV4aY8LGgQcmFf5o3bfQpE4w3Kcx3pLn2kWA3sYcCZbybg4KCzBEoLjC4",
  "key36": "3vEkB5vFEXzATrPTQEQKkNrG3VznMsqjCBbEtg5pFzZdbHeeLR8eMUNU3XFcXTqMMQDzYD3jAiUFErHBcznoKP83",
  "key37": "41XS5ihGeZQaPguy5Uf7RurG3QP21XF4BNdVHhENfwDs4wvAr2mcLg6rMZbUmvJQxdr6fbHbEKrafJ8VZ74ZuWBN",
  "key38": "3weTQqGx1Q9PNPnFqYU85R7TLKRdXnCjzBTcXjoDFkn2ihUkE26CngAvNGs9nG8GqTjunmCfrB27MyFwLanVoq7p",
  "key39": "5WxAHJ6A4S1ZLn3LX3xq1d5WRYt4RE7kascFcyg3w9Mh8z7DDfTxR5zCSixZL1eN5wdqYgRMgyav4KdjnRpJSuUM",
  "key40": "4zk958jMepiRCyT38iFHUXube3reBFF1tFet83NSZMxsCc35JoYHaWCMo3fKGZ3KtGo4fPTkPhZTasGof2nhpx5i"
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
