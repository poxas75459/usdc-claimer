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
    "5RAbzpD5Vpy9gpMNC7DXps6hVe7Ku1LLfbpZtXx3ocosFhAuvaDwsosgQLZa274kkK9U6g4nES8sQ46CV6Tdn1hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XWt4XMP7didRdjbdzhnQiNPGfgZJ5F8SgBJ2FzgC6X7N9VrDYEyV4jb3SJtpBECz7wXTHxkL58EmTj1aPLAJoxu",
  "key1": "39kk95SQfuL8zg8SisvNEduztgTn5gT2id3DfgQcZKRLrXY2k6wrhvFmD5mQRDqKi449uyAhquPT1HKbNsFFYExq",
  "key2": "YkeW4XCcLSfuAvp82z6ogXsERa7rqhGhpjk3nqbpCKBijXf9aGu725Lgpqn5C74mL6guZmTimHCwJREW6ok6JFp",
  "key3": "9EoLbbQJ9Xn9jBAqQdfhyDKZfMSHADkaJqQ6WfMdJh7yqB6Eqmv4sBTctyhXJcrKrtMZuZ5Erjo2yoS14kjzNfK",
  "key4": "3yXRDMzFJtCZaWDGKvoQjq9J2SVCyVPJ3bp3bb6FFCMh35s3EyEXtbd9HncAejDuttcMVztHxRn49QgGSKqsKfMR",
  "key5": "WhXjvkBBkmsw6woU99qd6bwnfNpyHLsM1sSSVvCwqnuKUXRuo8EFqbcSDMF2MTo677jaNdXz7rLTSRhKY7kmPbu",
  "key6": "2MGZC9nmHYyXRco5axi49JYYX2CdwQ4wTA2PGznwfKEEYEUD2rrwZzqiB3amyPYpc4LiyJYN1uKwytwELNysXcrV",
  "key7": "4hJBx6y47o7geNweQFLTwrH82hqjE9o6RheWLDCNFk5umu3F3RP1XBHtLMycGpwSCd7b1SwkFvyXgVfqS6gCNwai",
  "key8": "4gSka4e25xFDUfTYGkUhgAxk53xwjkWXhqnyW9jWUqe9MX5wx8SwbQeE6s9yu6JM8pQpmPcj5oPkvUF2Bc1Fadqd",
  "key9": "5bWbDddSoXUAk2MSghysqicPHRnAtm8dUXKT1yr7hviBT9GZUb1CbGwL3SDzMXkB7g6RB8hGVW1j76scbHib9jAD",
  "key10": "2DteWPfjTeVcJQ23wMfwTbf43UR4dnUMcG2QMQwQz7S59pmtoHDTv6oE5T6h47qioQBW2kASJAufojboLddn78ge",
  "key11": "3R444pT4RJcVpupgdFZ6PoEHVkVraHgqGE4Hzas6FFPL6qrgG8vDVdebcDv76eyudkBWDwsVhzyt5SoM8L6384UR",
  "key12": "5icfMqpaQ3mEkKKoQSJTvmzMhnRLTX5paqaDvTXTnXbyNnKvxieTRQB3uBepn16ZoQGrvbUdex4rerWYTEC2k6uF",
  "key13": "5cxpv52EnFRuRcyausPDPkGr6uzotxqRhn4SHq1TiJBTWX8g9ua41umxBt8ozmQpFkGvz9WRfoSJGrqKfw3KFcvd",
  "key14": "2bC9XiuatHXYAyQWVgiRRphVbWxLTHVbgmDuW1wc7Yd3iPRsc3bwcZ6PFLBahVmeoEswsRfFQnfinSU5nXKtef8Q",
  "key15": "zmCrJhLTnwGGNYinfkjWWRSCxZr7v9ttGVc6FpQEsykpmPsWuywQhyZfmDHE9C7JsLYX3Doi1EXVSccAHB9249G",
  "key16": "67K7mG2HEB3vULLL5XBq8sm9TU4ABdQJURzmM2FyBW9So7R8hpCgVkTSxzusZmPL46VkxCZ6uHQnGghNrmHAcVzc",
  "key17": "3aLK78FayZ7pZXEWoitLWz86MjsvETZRCwo7TQcjNA65u2GyQXJMpXNfx4Dwz1tM9t7gYDrkDRuJeALBBxSkYYHp",
  "key18": "44j6vjcgDkCsPgXf2iuuMgqPVtKHPP11tjJvdu8eYYtpvRQhoTEz3Sf7CKAkgQZG6DDaYrYninwWx4f8FEQZFqrC",
  "key19": "3SJEA5mbV3TJ49Y67BZo6WebjHf1MPjFtUxhUQwwgRYQAnXnH5dVVXiCPU45vcWAvKUvVCGEsrpBUtCvZEYmTv97",
  "key20": "4TJwPZLKxkqwoYeNvVf5tCnKKBHjuwHxrKLTTvN9ySYCqzCov5wsA8QYPCg6LZSYKZZuwwRBdW4WsZFqEv91CQWv",
  "key21": "36u6rKfMqbey9FVK6GsomMwpc2khMLqwXLNeiNVSgLFG1NoytmgYaf6Tc7crr9PDyvKBzKEMGMjJTr9xdSxR91eT",
  "key22": "2sFE55RNFXzCDNXHwbc4FZK8mhPybAEjoQ24GryQaqwZYxjb8wQBR6ioFmXmoxuKgiXqtTR3Tdq4KqUwyiGYM1uE",
  "key23": "2xo7mmU8tduhNErXK2HSeyMbXPwjBwdFvfE7WXxifW5F2H7oDTuAC2j3Ddd32Q4ZVR8SCuGcRNEyQsydQ3rz4inP",
  "key24": "3EgPgguXBw3se4uBZkpQvA3vrTRmKNrpdDpCT5gDFXDvwnyeE9dDWTJ9FGR22nKqTaVtjhawX11Vm8oBLkR3paZq",
  "key25": "4bMYc9XPfyrrzUABMKMnEszQkstf37ZAjKCANNVFTs3FTTfnBsMpY5FmVHJQuq3WbbmEkcdGYA9U1VNKbeouzFRR",
  "key26": "4vxPxaVWPbN6KSZUS4Ppn8PcBN7ArRYqWUnVzzeANWc21MCa4CXRdt8eCcxbKy8x2ZH5ycoW98tnoAH2GUxdYEAm",
  "key27": "5Xq9VMnn74bwLc9SkGKJsFjJs8MWNWDuDHs3VsjxnpdF9QNt2mNDsuP2roxBGPbggSKe7Psn14aHXuFd6gN464X8",
  "key28": "3DsReMngQqh7MXQ3vDgbecUKpxuxNV36tZP7nTJ1uL2FFnnP67u7rViyAX7yxZrmukXbwXinJSqca7uKhb1Ema6P",
  "key29": "sdzM8Lu1tC94vevKManrF6gWDrmEayBWQk3p6pq4kHwE99UnQ7zpRqMzhfR3PLhjDmwCpYzFuDZris6cDJyGNnk",
  "key30": "3LXtfoVWdoqBMgZ3zQJ1mRzbnN3ERETQvGLhsCKzBr921n4RsCjYfmxC89i94CQ8eMvXArFoXAFFaovvrVjk8zo4",
  "key31": "gsvXmiRbJfKxunAz4F4Q7219BUYXmtxMGZQRESKDhZMzovEDLGWcpbnYMjmgTS4jMs9HbD5VrKgs7ft74c5EQ3T",
  "key32": "2rLaokjqRpKTPCmWeKkWTuQFRbzyEWNiTcMLywea4MpgoajFiy1q5VJhDoohiBYTqGDEXkcukag1XB62r3h9Zmch",
  "key33": "67awfwoT3R126mb5bj3uwf6rzGP8s2q4Z82K4Jqho6H2YrXjnFekdmKbCzywFBnVym5XqMQLrGbczsbPn7T6MiCp",
  "key34": "29dXKEQNgjVuu6PGr3bv4Z4G4U8GHJwwVyjaQyAEX9BVgs9yjT9RtZvgTBM9zsFfNJoFLNjmW1BrBCzGzij7o6Xx",
  "key35": "4djGCjXwFt2hPARmb4tpq7BdRrrEMKYHWysVzt61WMLJShuSyyJEWxSTLGdScRNbDJZtXmuwNK6U26fo7N9q5cgk",
  "key36": "5ZLWMRbFpfVfQwnaRjKEVmwkio2UkCBiwzY7EWU47Mr7iYfc4kYdFru74sAw8JGWWZQf5V4DgTgNazLFaNyy3kyP",
  "key37": "55pAyarPpsG1uNH3jhggAk3BFzXTYKhjoofXAggrNXxji6fB8pPjQqGYZYZhb2H3rcTyFhhcBVL5sVjAYi8R9J71",
  "key38": "3WZQdaY7KzMfRputF9373Gkm5rFt5c2UEWTssbKUxNHQq9Rga34KY7AF1KudCnsz6yXQ14E1SCYSugMV7N75ZgsB",
  "key39": "2XTGghhbgJs3WYfLp1yARieNhoHkX3Dt4mC5kucDZHhcAsCjJyhqDdL9UX3gSnYcoiLjF6U2f9BqsqXzSMS4wmYC",
  "key40": "3KYNUsNrJu9MwjLQGWMhQwF6ESGiPzFy2Qy7GnSme1qTeYvHD6WTW4JNia83p7tc4C7baU7t5EhemsYsb3np7ifA",
  "key41": "33nGCyzP8gs4FcKwmrroXomUd7pmWZzDZ8jH5CH4T6kqjQd8vCcGkMfSjzKaHJR48fBHi6x2gJgwkF6zkvzboczK",
  "key42": "3BbH9w3HEPsRKjwKJFPbdTdeTnGpU724aDF1MnCdXqcZxfhwwZi5qHdC3TXsnZVR5wEeYQ2aXoHFdSPiDzYRCnEH",
  "key43": "57yMasYNxRSUKuwR8vC7oRYktvr6AhBgwsEW2DeN8kkXhfErK4esbDuo73unaHDPC3ouY9EaWi4uHFFS9xLihWpp"
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
