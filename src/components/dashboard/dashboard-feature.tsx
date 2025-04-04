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
    "TdZzZaqVRzcFNRfVKn2pZ2rs3ote87ZQpeQhJar1WbefhrXAtM83Gd9BnJ6mt9uh4HyxbmU2P5XSSM6wSEqsZiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jJc3c65yj41aAwNh6uTLX5u822ro7jSxDoKwmaWzd8AeGjoXxNpC1MAzXRMuwJSwRxDRZYKbM6fhnAJ1J2i7oXT",
  "key1": "2KX57tbFpw2F52TAKgLPsDs4kuGRvuuheYBQcz4zWR14hZiXDkii8ZzYMPiqbJwtZ9BfYzwJzvRzbeXhLZVMP32t",
  "key2": "3tcbmny5gkxF4Px58ei3nE1KUbbTzxtc1SmyUJDQneSGRHeX7i9DQmx2ivn3vqpS6YyWxQWS635GgXTQNPP3QrjN",
  "key3": "a5SsctvXSHwjAF3QsCLbK63px1KXVc2jDpc7vWbdmjGvv97gUJ4Fv6nRzAvh4xC65Mui1WHZPvZGzgom6ydWgYP",
  "key4": "tC5N64GhwFJKwZ6Lif4qftdq2NQ6TZMYGbXWMUjkLVTkdUBq5ku7zwMFWrLxw4zKqC5fbU44moaWMH27BJZNFvX",
  "key5": "3614Lq4ckjLA9WUgMwCorybBo6JLN9jVJ9xy72BSUUsUkR2jRmKsvNUoJk1ezCQwiK6jjJrmJPpMBoG55ftdS6zU",
  "key6": "5HUebsQaRcUctMgwXnM7QaNYTuAVyUQy6w38H2LhjyfVTYYpJPesFqSmwSxmFaqjj1YEB84Cc2JpKBpHzEbKU44H",
  "key7": "i4KgqeZQSjBQXWxaMLQW1B7KYLkd2v1TP2ngNHunTkh7Bzqr7XwQxReQq5xdYKvZRCjPJCdZhDgyCZyyMH5iAQV",
  "key8": "5xjpFu6q7vzwmpySUWYL16LGA8CQQzsq3oSWYm7VhnaGz69scj3z2sNr2EfiVjsW7GhWutw4W8m2WXS5XYtk2uqK",
  "key9": "4qcmRJoCdtBiAi2guUkwSz51fCH23pwc778a3rWAGBuAS9pTVMLYcWd84pzKzW8NkzG624mP9MDRhRzVm84BtG8H",
  "key10": "5e69K4HocyLYoPBcY5yCGycV6MzFufBNWCAWCGdKq6JhPRfSwvVr3XFNodNMGb9fzBZ3cEeB3u1xjerefwMqM42S",
  "key11": "3gocSzJZam7Rk315nBLVnGmXtPAWyZ8srvWxjKbD8oeENeoiwLi3y7Pt5FVbPsJgHWNpcnbg5Yz6iTJcjwtx8p35",
  "key12": "5PJbE4i8MnaPKeGdCdLuFNv6Zpvcct1hCMRE4tc4vFq3qubDAuwZgfzC9sdeE3g3mvDcefdRmaMzyEyMvyQ9sXNL",
  "key13": "3mt1udhQSmGrmKNPit8K7AUajvfqnYouiWM4CjmaJiZei8yfRuFKJghzyDYpx5YGCNEta2AFNdP9iRCKo1vcivmE",
  "key14": "5hzZBnMkN8Cry1By45fiVe6Bpe56bn7iUP7Wbv2E87vNeHNKtzAHepu6hdEfBjymru8HTNsBcMLvonn7hfYTQVzn",
  "key15": "2vwadfzD1Yqss7tyBRR3NpDxhtYTUcZrRn4yAEvoH5pq8NY32WDczphw2ebW3YhdxHeCoqTXbWu9kZuKEf3SrqZu",
  "key16": "p8au3LzcYHsZoYmGFGoaZnVuFiBkk9eHNhEtqXYc7RcXLvYk3LvAxAkTsGesrKiHrw68riVe9tWnjyMAWjRSPJs",
  "key17": "2UBcD9WaS8zuHfevGSWiVaijKQNAUXZRdJys8yczewqgZD1aBPyPgqmWqwWoieqH3EBdhLrGjru2YEMGo5hDyY4R",
  "key18": "2XYAz3Cnt7PDrCJksRPPTpeNt9s323pwhvHFoE4APzpfEndzxjQzzzxZ7HmVbWbq3LB38Jb1R4mEzQcoxXp7DDq1",
  "key19": "3epw8vxF1unwKXZcoRWHt31tLDPxzpeUgdQL2EdXFoD2RLEfoBooQmidu8j4pb1gdRVgEsKUhmUdmL7paV5b89Cz",
  "key20": "4uPsbwUKe71dd9dgEna7Bqj5435SL77n4Fgp1oSmLmzHBt6fc6NT7HKo7B6BxXsadPXhfWkVYBgV9u51bEu93KEn",
  "key21": "4hYsSfBAF17qCS9m8L4uGrWC6asM9K5ubvWxbp4G7rQu8YerB44Ws7DMzgPZmYdmUXjjs7aBqxTUvKSgDXoTpQCF",
  "key22": "62YuyWN8chRJwjGb2xNQ16PUur1AvgjQFePBvCSkhJJgG3bY3X6GvBh5XFb3SZF4n9sdjRCyUp8p5ypw791VPsys",
  "key23": "4NQ2JRu4h6BHN3HKkeWNbviLufr5ir2xF4YtHidfJ8LgcMHYc1WuGZzwEQBpQZ77phs1HPp133jGeLvcULhWbxJe",
  "key24": "2SerNe2E4stjzcG6Gf5UGyGqUmWRHJSqkf9hPhSfWGevZVZJWZYBwF64owKjZPGvXQm2c1rqXJc3LyBXMfLGMsGY",
  "key25": "2ppUbfai9g2C98beCSmBjrYSsbzcqrecw9rPdxs49ZZB6eiNMfC1oPGocpGfv7q4iLXa83rpGigNwdn3XT9d9j9T",
  "key26": "gphmRBKoTYuL7YwZGqz6uKrxBEMy5kcpLiaRBvL5J2CfXnRMSJcAFipDNibK3FfxvZLAeFYsxpYYBzhyrR34jJG",
  "key27": "3CpcB641ZCHcgiYis86Eu6ZbAeGFpEs4RGWPCPKL6Kt2PxsmeUfzgngs45Bqym6YTNhdbiu1dJyWcYg3tndXGdVL",
  "key28": "4L5ez1jXNq1zDLZLUL4LJb9qFcSdeRKCyM9vAcDXQGmVS29DMpfB84usLBYKx2XpR7EHPAithVcKx18ZaXv9at6Q",
  "key29": "54VmB3cUwycqVrrbmRzNcWJhryskynh14XL4KGKCPfVigYiRFL3CKpqMKDEYZf3eUAVc4wBueg6QiasDijihrJ6E",
  "key30": "5iMaNzNzok2zSZDUQ1EZxwodhN7iKuNuYEu7gZjCEhYbzY5Z2An8mBg822vbhJfvMdLcuQ3wbhzKBWmRg3kAox8p",
  "key31": "4ndhkjz8H7xjQZqYowDDxBt7eJPhUZ7HUCY97UPFWDnKtuKJMvVBoY3oa4xXEeFLpGfhShbhYP1r3wLvPk6dF2mE",
  "key32": "3wesiJwDKLC3fQ1NsxtcUwx5ChKFCf5JTv4SsPt4HuPPqQ23gMGSfAeHopiT7ERsDg6DXdD6rgbozMd5BGsRdJZK",
  "key33": "4eCCwFMDWnBtvsxNy6s1JdEC7vZpzdmLCgRhK4Mg1D3LWGGc7DMrv3Ea1dgzk6E5HeMK2gP2WHf9uRUxLo59famo",
  "key34": "UrTcQSC3MEQ7JEx86sXud9yXDAQ7CuLLdk6ti1Uz3jFGS1Suy66KKaM5j6YD6wYHAsiYqDFrcb2ecoU18bYjEe4",
  "key35": "3ASyrX48cAL3vFnwZVCyc1wGsZJaFTEqhgWwjFktaQkpgYqEvxV8LmbyKqkSksDPkzvNtPbEPH1ut4fm7NNbFQHR",
  "key36": "2XCwLbAikeeV6DoZs87m6APuRXB9k9FTKUEXzD8h6A6M8TmTgKzwj6BMWrCuLg81jnxtFYKfxgtZZtaksdBLa6yv",
  "key37": "2uvK6q9EDtCcA1fXCSuahNp33YPJGGfWJGEsMZ6B59kFNHpT7skoVgLcNpy5DEmyA2pWrBZEjfNRKeY1s2oT42Ha",
  "key38": "zuRbqnFPDjk515YZuBFDEQLuKYQ9DduCVhsYrY8AQWBU3f5KkGA6wBvRDmUQxM7pLs7mG1FCdMHWxHfT8HuybdY",
  "key39": "3c5w6wZbNxHi4KZEFnvrDa87BxxSM5iEPN9B6b6HShFx91MhLkb7xciLNghJbFBTryENNmuDdFpe4suEUUkCsF15",
  "key40": "3HYFzaymk6JpSuV1GVWqkzK7ax7K9sJxpyDmxxdh1e21Qef23SPrsNLNQGYSoLvDohGd6QP7dkcgv4UHsWEcX9HF",
  "key41": "5efZvAWBiuGpbRNza6LStC4g8Yfs6ts9EW66gweoxP5rPDx356PtcSg7LN2bj9QfAavXEbT1BADFWJ5BipKg4tih",
  "key42": "38ZFWReiD4aRTYU429DPAbAbgzYgTcjV7SKrW4JvokF2MNrvPj6yZyBtmRfD9NYUZ2DqziV6QgkbAsR4ozpRjupm",
  "key43": "44RkgUEnB19koT2ytHGJeyGA8TtMJxjHbhUwQnHHJ4Z4vbaYuBmMdArxNCdkj67kqULWrzAo6z1hqJ6MEWfKKyer",
  "key44": "3zHYMmAdba9Q4u1YgPHUa7UrHQ8dhRqyRRJpjUQPko5hLeXkWVrpKoknSMCRNWJp5VR7DMFrdky646rujvitnLKL",
  "key45": "xTYrmQtxMfrrJ8GRzsd3VhcqgaEBktrvFDFXujLvRVePQFWuzpXzorADHvVMuEmoNUt31rgKSzL7udBXhpfManX",
  "key46": "3DqPKbMR5YLDzHmFbtkDnWLZS8749B35zL9qP9hA9TSjMD8MN3xrutG8zCYLT5qkBrCFamHCtQbZ8XLmzDRgEpUm",
  "key47": "5JyV6dYfdAKpXExDntxcXcpJ86wtSJdSTHj98aabuwHcxPwCzgXLEjFFMh823GzhUk5qH4otTuLbT53BLrZip4iP"
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
