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
    "4ratGE1ND3jRG2S9CTiEAXRVvkV88Y8HqS2A32LqSUb5DqQBzLVirTfL5bhSGGSVHv4C7SswAszUAk8FZMXDGfjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "315Km4TTVetjE2KucLirHatnqHLMEbC7f9BGr5cewqYYS1hZupMdAYkvFMiNCZnk7RYSNEt6jJNXuPkqUXifTsyT",
  "key1": "jtzsuRgtHHUF4RoARYgnJLVpRLvCBfnKmFoxKDBD53LPd7NcoAf9keTaF4GTEauExxYqxckVgJqW86yZnmd7KsZ",
  "key2": "3p6BpTEoXqu8Z2ijPMuerR8bcgKAmXB74yjWzbebTNJjdLPrFW4VNqG7RzEwBe5ePX47SBmENjXJdvCmrN7SKYNJ",
  "key3": "3F4QtsRHMCLtFjr2wYQqcKXWaBXRjCpfxL1GaoX4cr8xerMavussA2HzE2VzrbdsKn5q8UhbhdtCR1BgxD4LAPt8",
  "key4": "659zGj1NQVnxZP4dCXdbwQquumhf8Y5UvAwXwP7gV9mHkNecW7Psdr4KxNVDZjaqFrbge3uGqPSBstBJom7od3n1",
  "key5": "S2m8u5HEUQ3GSTDi7FC9T19AJYjqdAkVY9697nmgAfk7LingwcuQLPjqrXMLKfxM7KhKB35mpxvuwWWcn12gVJS",
  "key6": "57jamYvxwF49JRanM8fUtqFMvxKVBzJGW7L5FAgZgohVDuKzyzLr8bVWR1iLcvL5ANcEarqQd3KPvftpTejwPVW3",
  "key7": "5q96z3jnV5MNgtPjTzEXrzjNhXrFSM8ER9ZEm8dAkDgkWoVvnmGBTXbda1umrc7ZJ7wqvZCxbx8feALjVSVzx3rQ",
  "key8": "5PATMRwBZ9VVVa2QfFzRbpVA3mFBDSs3tNXiH7ShVtqDGg5zLzNVctnfTw6h2bCWtwdoXrFFXJisLYXH7AwqmcZM",
  "key9": "PU97V5ENgdcYLgZ1H2LuxkmrXABaEUBa9cFNV2zDdEWeQPebYQoFPEBrzfJ39eWKCa978bn5sfTH25cd7P2WFat",
  "key10": "4oasKW9GrhmbtwBVyzNLSiFKfYnJGTUMcgVA86ubuA7XqEBWsucjqvgB8gNwhjvJaGd3wKfeuQV6kc7gd38LpKBv",
  "key11": "4KEuHARQsxqxwbFxbbHonGfTfHRuHdKAKzdWkpeYqapY9SsVyT7PvpQfZk8imob7r4eMbx66tcodC61RbfthQErc",
  "key12": "3q5u6vWPJeRx5Wk6J4Upw26tCfrLzdq9Zybm2Md6LRFcx8QBHFHB1qZJmP84P2KsBDCPTRbpH5UzgrKaxcXtLFnk",
  "key13": "3sMW5MiRt11uiovy98ekZnU9UyUjZTGyYk5fppzYoEF6WJoTU3xjrhzJtgLSV4bLiACGoQaMhLmbmRr4BKQvG6UW",
  "key14": "xmdE4nDqhGqxs5tLLWuXRvdoGzcUXaNpgEgzHvmdXcoJMni2u2QV483vQmNNnUEkz6kCF38tT3Har9exwkkjMdM",
  "key15": "2byZwQbUsVDBMg2Sq39D9kgksy8rueqwMvfnYEk9T7QzVwTv4quTZxH8pFUY8CVQTkhTqV9WbRKnsLwwwzXZUV5G",
  "key16": "2kJKba9vYggqxKrMoPmoW1bQdKxLN2QkXERwHefornZHRN6hjze5nkwqsPDyjW5HooYPmmcmt3hZBw1zk2p5MV6v",
  "key17": "2giS6iQfQdn9Rz9NmbgFgQffABv1xku6suw417gRQtXHjgdtJn6vvdMPAKXsWW12UvMPzhCxZu1dHL9REYfwNSK8",
  "key18": "3f2ixh95QSCJLAr54hA8T9kcjMA1dFLVyVRPw9ifmQvZ6DGVLAQkuEKkEj3uf5WnGEBtnqSCWvACrmP2PRfE34D5",
  "key19": "mptWRiwHfm75wQ7RY7dhYtiuXSw7U2qUtTAizS3pe1upRwJZiXteZPoEGqE6wKPhbGtV5kjP8hcubJ1HJfpFUTo",
  "key20": "44wQCpCgFta4AR1XxmoMcpyhAzsrHsm9jCYRNpZTrYMYiKU8JwdU2sgbXvyci6cwrzPSiwZXmNaazXqtR4jfbxxJ",
  "key21": "NngpnDjdCZsUz1Fanb4iRTGoYzjie3VSJJWQCWdAgL2AgDuKPsb7vujUnR6N9W3nXbpzWhAevMPL7nTr1otvf13",
  "key22": "3x2uy3LWiN1X7ZcEfmcUF69L8fLeX1zKiqvdQf6kYmi4dnjSwDs7yjPp6byry32xCBK5iJPdGqm8KZuKJGkqMYtk",
  "key23": "3iWGTwK2HbMkizX1yC8snZCvqumt6LVV6BZo4MqzRdHehGbDN6xrgZK1YHnkyh7c1dPrvjMU9g2HW5ffFDMDiAoF",
  "key24": "41mCFNo864wrobLkmzqnhZiXRaqeSuvkfPQe379tfS94oNTdWqSjdWrwERySLKDKdKJxbS9VjJ6fty8Yms7cwcyZ",
  "key25": "5iUFSLaMjrk44rve1ufVtMgux6go1DQYAduRS8cXBAY8TnRYWYHB3wKkYutB426UmZ7smshjd81pRwQPGrfrFeHw",
  "key26": "2DF2BsanGECKMPsQsFfhDMGnZW9GWodPfmzkPBuXLAyrPi1x1rRqvL61TB3rtD2FBWox68P3WbSktC86WWQ7Erwa",
  "key27": "3M1XB2iNJuTcM1EC5PRvzTEsM2JgG1C9q7dgtApK2jeobey33XPjNvmdAHzs55RFxbf1nzkdQ9aLYrCRYdcPdjjd",
  "key28": "5GVQHULEUyFPioJnBVgGP1fQepESY198Gfk7h2FtWhJA45qvFNYCpGxYaFfFFuvBrHgjZmQbuyRAitMbS9JqZAHs",
  "key29": "5MyrAsVYNCkyjxtiHLkkLSnyV2Laf5iN4KRtDGX5TG4dfTb8Y1kwFNE9GrJcpYaercsmgSVkfmR435MqaNF78fSt",
  "key30": "2sccfw7oEs6u6xLQ56pNcZScpsqirsTM4TBoNzrspTC7DArWQXSRsQwH8MdFd66wLVLmoqWtRdzdGJJpvWgwvsmH",
  "key31": "2P5ppUhxphPoDk1L4MGsP6G19basQpqr3oE5AwFzTBDGpqCmxARpzAxvCqeHUBW6SkL8ZbwnRYzfnmQWTXHvGUr8",
  "key32": "3PUPnXdDAySXY3yEZ8bUTa3PiwFjtdrWe9VG1giuWcdGboMcK3s56PasZqX1snkDVg9z6FBheYyNJ6F8XfvKnDFR",
  "key33": "4iTS5ayUiVSn1VckQoUehYn3Ci1Nmu1dQmpbve8ZzeoCYmon7UreNDes41yvYuc7zUyoGJNrnMMwwzVchAYVs5rW",
  "key34": "31GxXUxHBUwcYvrxUQYPEr88JEP7jqTshn1YHZoyEyqzWwrQ2EdFY4KFBqNCSwynrGkgPpAfywRMhoZEi6bRtuj",
  "key35": "5geYXrXgumA55Kq4eKxA9DiG2DbR3ukHCccaUccU3hPbiqWSw5DnxrKeA4ieXWHscMm3Uzao4pUbrHp4QBE3ZmUo",
  "key36": "n8ctiMo7Mo1zmkje9XcRjQ8CHCB41mAA94GSaiQaVYcLctw3QfesoyoMT6HAYSZGDFDMHZNkVzCPNfbfrm5vzTf",
  "key37": "4QWusY6LQyy1fgysZbPtjUy78mb65DrE2fQTukCY22Jzn5kWe6rpgMNWfAN2mLA9ahixBi3xqCfMjLtFB663MKqf",
  "key38": "2yJpFRA4YmvTrF26CeAB7QS7HKdZJcZaKxV997Cc54Dr35kqYH4aPdQdiJeXpFSBhgvqRLmogkbuc9Zs9cnCVoNq",
  "key39": "3v1n91pNZi1QUoNz6x9Heokcrnwy7ndv4qwk2ZXoaodG8UPv4KRwjKKhy8oQ4vrJceNWX6oNqbAh6KPKPhFABJL1",
  "key40": "4DaumkjT9kbv61wYeXeT7YhCp1V2sTRqv6sP9dMYAnNV2TdAc6WSugwvWwFK7P5kSMUnozBqgqNvHC4rKwCn29Yb",
  "key41": "37Ea3kdAYHrmbsNHH2Z7Rj9USEN7XWn4o8cBKPrr3GyLuFj8f2h1UuMPVbg3C6oPUBucAgsA2CzvqRge4B6JFnL1",
  "key42": "2AfNxGDMjeHnEj8EXLcowSLHmhr2eQGVNZ16caShxKFZBkBmob1JqVmKZqyNCTPFNszCcwBufDy3CgoqjwoSguon",
  "key43": "4iYFePd7cGGNwVdzPokcFpLsb3xCuTwd8MaH1Aet4q3HQ4iNBdFVU5QSsCe8YtaVVRYKoHup5hxtEkSyAkvCAYXw",
  "key44": "3BXVQC13yb4NZujW617CpYELxm9p2ruSStkU9NdsYYCDFaBLbu3nYb7NcEjfgHbNhzh2DCvRBX1cxiqQnfVJeAAC",
  "key45": "5nzgS61KJPwwg2fYp9uYaKeLGronCJGGMo7xErEmEGuaLPkerZqdH1JnVGSVPnR4nR4ecWNeqoF9cABFC8PLZPbT",
  "key46": "XEZMMp2RHLWKudFoc33kMUrp4r8EVDA8Xceo5HUvGAoREuXJEMa2ERY3AdPSzfDu9uuV2cLLFjY86xeMs4A8X32",
  "key47": "2rmUWEsWTy6tsndvknJmzPqJfoCHS4rmWsEDkJkJAg8s8nBwNZoa39bq87U2wiCg5yMTtSHJJFErkqoDRdBkEtkQ",
  "key48": "4c4Mdpw3MbGKs2XtPiDcT5fKFqjNGWSek3FAY6WfzBpWnutS1Dqfceybv9UsHnFTfbPdjAXSfM7Wnji4MuLL9UDA"
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
