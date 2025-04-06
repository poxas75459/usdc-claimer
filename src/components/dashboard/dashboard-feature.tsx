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
    "51gRhMx9JDBi1FrQSpjVHN6juyptM4sa3NyhnsSJ4sD9Ecqw37Ufe354A4yqosYeh5KyQEHzZZ785NDZ2HYXV7ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTcHRpm7HftHvTNmHEXFi74rQHYeyZAmGvcESBNfQaovBqo7ujfrHoxjBMCuAzaUYKNEJhVXTqeQ2WM5ubqyPfD",
  "key1": "5fBnpMxMmZQcURbGizvAAs598TY2A1pbn9BgdXBJoauCLwzKjbt8NFHC6oPs6VzbNnRs3pRbULEaypWSKtLiQ1y9",
  "key2": "4ophPbdkeXHDm4ckmEhu3WmuvuruXwrEYEpgz8QVM5m2C1SRquJtv2ekUHgzNakb5vAyEWkbroHGHANyBDYaqGMW",
  "key3": "4GDTha9yKAiHjW6VDSY8VxEUqJz6VdXGRibCwKa4YfWBLjZ1YSXYGeJS5z9GJMrTYNuAhyUav9EPM5cvvJVqqkZX",
  "key4": "2u5nSYdZQuBigA7XcUt2aXaEC5vwXi9fzb2uC27XtKGtUpFE2dxuWvxDSTUUxkCRYpV1Ju9bq9AwjouFtBHwn3Lr",
  "key5": "5hxv68ni7AWXQrVfPqCy6utr8PMfEqcpShA7YVkSy6eJxYAHhpd6R8V926Mpso7UETsFyhndMdBAiYqMyypBwfax",
  "key6": "3gC7yey1t8oCr5UN7hCdomXrkiUer2qRXQrQPWweAFnNLg67FaiAqyPxuZ3uWZHKS9bMZmGNquuT9Pz6yvvXmC5o",
  "key7": "4Mc5fjSyeswEGLueVLS1LMQ4eEkbYxuXZV8amwFf651CwM6omkrWaNEV6VbDcsTJPwYH17h8nKmHPLqwecTGYDTK",
  "key8": "irYWX7jfjUv5hgR1EMY1jtb77Zbmpg2QoZspzf8yTny3k1atLJJVsDd2B3LBpac8fE3jTRxzrRBxz9aMeYWiwKh",
  "key9": "33cHpvARx1R548zyN49MGEGq9EgnH5WSQCQWPAm1vDyQ9B4B6FZmm8cSk1Bh8FVzhqBS4dEoMvo5GpbdXqx2C65P",
  "key10": "4zdyvX7ostf63reFh5FSkQKtTtp723PjMpVd4uFZYVc4oyGdP9wH9LH7CzmC2mBd1KBbkmS3cBQvN1kT11h1KJ1h",
  "key11": "2ZpF48fn9fMYL67PkwAXMJDEskrTJ4PVGiJbcTZu5KLBcznk4kRbkajmcjT1vqaNXPjfxLVxnw3msd8Ce1ATW6Zw",
  "key12": "2A5osae5z1sQjtjJ1E4X4oEyhZCramf9jUfNqvd8urzByHg89ynnEjybksQRikvmHFLFVcWP4Z5sXwjuxg5xX6YZ",
  "key13": "3hBjmSoqG5vzPjg2heJ8npmwgPjwY9DPxeAQEFni18k3GFLAyo5bfPBZWNm354yCMY9RtKBUL2VdpGuiLJm7vHhk",
  "key14": "4TA59xWLy76NbDdYhhVkCJMEBUTmiP4wJcGakp5PE6SEVjx3AbAWezqJD8cuHEKc2FvQHw2xWjqXVZy1r3nAQCR2",
  "key15": "2YLytjb2qveYEFmDWpKvVhiKVW8VvszMsB6vHFeZKPByMDZ67Hk2hkMx7bwm7pvHeoqFuFYMdMfZUitz3T91mJPU",
  "key16": "ZwVN2se9vyF198dpLKipfv7C9b2DfEA3Q3ZbDcuuhLSbUZa6k3XqCRJEVoYztfauFC9cYc2sdRDNuWfaHQpbWoy",
  "key17": "3WTpVn5aGTJ93LQNqzxcwVnV3bnMy2BHErTxaikoJP7Fr9jrTR3aiP2EFGKRCmcPTMNbVBqUSiJK2RAkwPJmPisu",
  "key18": "2wsafTdJMmY6EtrFWvE1W35hU226LdXvw1oSvTGcq8WKfRZhYCBHTGdQjFs1Wfm4HN95UMPicBvP1zGvXsUbsmY",
  "key19": "2sp91mK4EUaPsd1FQYQBLPz8KYMAP8rbnUWjpAmwH1Amne8iHbBTMq6z2GV4edPoahtCp2STGJkHerVfrgQvMyK9",
  "key20": "3qDATf4wx4GiF4vpoSHkapmR9UERAePQ8u2ts3NEedToS8TEEL6iSb5dBZYHLiZFJMAoswckvfFC12kV9Zj9L84L",
  "key21": "2JbF16gHzmmHWhnvKDAA1cUzjaNkckDH76ZdWQckYuX88gP11fiNY9xanqcMuwWjVq5vntQpZrnNvC6vMwLnCH8C",
  "key22": "2RSFo2n4ApgD2VZwGXXKAmjNF4FB4ZPwBBKXGkPL3Kzx7BPPiBqsQJNbCCzDGHbv5hqi9wz9QJUM8riTtptSQ2bx",
  "key23": "4jk3jyFsRwtHVvSvDpGefeN9xd1rb19BhmdC2F8bNnjgt1G5fWis6tbjDynFa7YrHLmi53AVLyMUzuy6S7gnYbsB",
  "key24": "yzMKXF5v1SxxmxhoGBuNk7ZtjJ1ZRCeUEtYtqXxsxhtSuF9LAvEShe96tYfSaf2zFNAtBHy32a3mAtQxK7QBSMQ",
  "key25": "2VinnUXQGCdENTbNQvE9mn4q73qtamWzBs7SYhrsd4Swf66WMPuqqUDbsd5ZVccuDcUk7dgaCvyKZ9RBBkZWLR6J",
  "key26": "3dg2Z8tMUFLemNVRkPGUUyJAQawqiFZUUr181MW2gEad9MQpPrwb3TjHPufUFrCQmdLVN9xMwRiCoEbckB1Gf881",
  "key27": "44zov8orLnSjVJB9HvjBeEuC6oqasZaBuQjgBBZyPzJEkN1kk36NmrSQA7sHXSYn3QDFZ9Rp4q2N2okRzNFwh6w5",
  "key28": "2tefTNXtWCmMTU1biRZarqRKXFaJ4KiFLHtn8cajj3cgREMs1K2mxEEpDH4MCLonfvp4LAYMtTZ96J84JzFRstKv",
  "key29": "59DqdVkTMrt1Wh9HzKSHUq6b1j3n9wFZamMFFkQ6KiaHThdhfrx4cBtNHok1eXs1ZAWKqKJEhVoYECM54xM49GM4",
  "key30": "4Fwm71gqtThRuLY4gRRchTx8zcMeFKa5v1nyHrJ5CBsTJThAhYoJeb4JGHCTJDTZa9ZbLFghf3cLhZGGtnrCpsjJ",
  "key31": "4Qwos41faKB4mcvJqB4WfZCxnxRcf6KDcD28p7Hd5oMXfgtMCCgaXAzS1JnaDzioAyBZP9AgnBHgDfdAdF7JAAHG",
  "key32": "3mWF61LT4LkYToMKPYcVfgv6reT7Vf9SJZk52k21Lad5rg4nnACA5utRtEd1jmoYc9SQKDeQKMxHNnATgZNkLRCZ",
  "key33": "yxnNwvNEFEhJUAhtK3sf4SeXgVCzHRo6Rr7zcc3yFjummQKSAcQafJPo2iE2HCAfsrS3ebS5LiTJmeYWkoejU1i",
  "key34": "4s7uFxqEUfzwDsvVYppdEz76zHPQ2rEqkg3tewNuQnSRLwwthdZ22uLpQnRVsytq1KMqj61h6MEirtt8rFXJkL5M",
  "key35": "4P9gs2VFLLoVq4ruoUnpbKgRoyrx8HsTukRGY2tDvSj7suwx4BL5NSqSkheH1A1FW6hyo4B1sseMpBv4aRz3pwYh",
  "key36": "4RBnFn5ymhmL3cvkW9e87ppUN7Kdks88LaaQgTPKbB5qEC3AUfxipXPMJRL4GHvUCkCFBnFtHX3isTwvLow4GdL1",
  "key37": "wqtBPobZM8JhKeMTxuEoSw1GBJMWmJwBDeXTWMZgcTaHZFnG7yPqPWkJqhmZQbWmQAmQGfC9ZP4GBZawXsPg6Uk",
  "key38": "3QZnHAFT3cMun4XkbemxagGhRm6cewueL2chTeu5FTiDvyRxFB5pQX67p1Vyz5dm3xhcdBcYGxye4iwkzq9ThWBJ",
  "key39": "2bMoR5EYqxMdhRgExuT8mWBd5EYifqszRoCEGKzHRYuZyLWR9JbmunHWkV2ygAS665xyBPiKr5mYw96LpbrB1amT",
  "key40": "3pqmNGRWk9dXqEJL6uikHAuHjk4EaAk6VZ2p52GJYENFyucwgpv7Tx9btZGqGLEd8D5BTV1xcDF6zR2fRuWVVE3d",
  "key41": "5Q4CYbqXYawkouhkB7qjkG8Ba8MumhaQ13vveQ993PCZs9mmWt3JFZyNrG7eQXupTTE1ex9KrKQ1AagTqFqKT6sK",
  "key42": "2UFAeTwQkdYq5Ur3HxYho7A3bPLNJK3iWGWdeado1AZyFUMbP9mQp1zPuKNC9tqwXtaGtNi4Mut5T4TNEqK44Gd1",
  "key43": "2NwScnfdPeU45JZ47H4DdCpnJD3UuBeuevUjU98ghQ6w6brAj8AL68szdAFnYfSSfd7R1MSRmM4yiifSjUb6HKpZ",
  "key44": "54bop3mDpK3HKf5JdwsdPER6znYhGZ2dRPBavp71HuSzwpXEf6peEazPgFeFHbq5Dad6kvpLUD5FPHQzTmbabPWx"
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
