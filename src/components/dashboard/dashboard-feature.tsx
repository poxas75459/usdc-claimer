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
    "4m9wUuBB6nqf6b4rDnxXsYtPThxTbViAYQbvnwysNJ3XRxa9KB3yCKx7Au1MxNWTsPdBfGiRehS2oqqd2BKx4CAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rutt3ShUFki4F3q8yUNP65267Hdh89vb6gvsE1iNceyC4mga9am2BmYPx6F8Cmf3KfVSrnWbuqqB1EkuHsk26jG",
  "key1": "2R1cQMN9KRYEA2QCc5bJFDXw3KXzNRvTKWcicFcH5bY2hh25XgGPB14JE6sDPx1axjN2abHPwq3XpUraKSxsUjmm",
  "key2": "3tmKbW7zCbpkxu6fyyVfC5p3Xbu5cVbEC2DtTjJsQhHNZCeRxw5E8Ke5ixLCheH6HJMriUksP7XqtuioovSV28w4",
  "key3": "5jzACQ6paJNcnzE8rxJvSs8D66JprBgpw6wNWHmZtfa9nNquyEmHg5AXqhQ4Zbh38kcFuvUYFKTKH3CXErmhVr1H",
  "key4": "5ohw2Th8w4yHsrTYdXg1X5Q28PQfeGCzF2NwAD5ftnR2y14B1x9kZEfPPdA3EGCL5ZZcfpi1ry3Jwh7vsESPpKy3",
  "key5": "2vqf4rj2bFohpEuS1mmXXHRUtAFBwwoSa6KTeuZ9MCnU554uRBnA5LA6CkCTxqYnd1Qtdwg6Ppzb3RL9TEu5hzaG",
  "key6": "4moPWwT9qqPFgvf3QRuG54qe4aZUYBJnXsh4jkyke3csZRnhJCBtiVEvW5EdSdVMfihNZmYsN6ES6mJBa44jL9Cf",
  "key7": "mHnpqgf5EdEmmXzSZYyA4pYco8awHinzET6G2DWHVLCUvKXXJHzBHBnZwtjDL1URy7Gfj4vroRD8MubtytzZ4DS",
  "key8": "2jtRFG34Th5PgZb9VmKvtT5LoNM3putVtd7YWfVsvpjCAqD97W85qBsZdN39N8c3fwdie24k8ACMXU9ZTSkmv3ZQ",
  "key9": "3TBovX1W6vCydxhpREspzatZwXqcRUq3hLBqYEgvhcR3Ef6gaFzCk6jLE9it7TA7uUFSXZqZbc4EQMEDPwDQ6CtL",
  "key10": "665CUx3FbvD2WpNdyATobMWDkYAhWBqE6csvxR9ZoT7PeYrJcsCgWTcCer4uZFbFcMeEWJq6wSNqUCZmfC8wUfC9",
  "key11": "4YGnyjjWVL6DvEUVB49SnoXHsN7hAsxeZwotyw4wnH94FGwya9w7nwtZ8PnT63X7srjr8Jx5i3otdecFspsED71U",
  "key12": "qWopKC3AAB42j8kcxU14bNffQxhfWfaZsLKh8gEPoXCZW4DUz6jbAgv9xnUHZGW5V3uL3bfHPL3PwQS1fdKtVym",
  "key13": "yYoJCwEZGFnqsKCqqUV8MF6KDnyPpLLHeQWKvCXhuWEhnnTmwmZAxayDuNPTxQ6mGwKBuw3EhRhxVCfPY44CJJM",
  "key14": "3uTYBcPWnt72mwBvQkoHL1rgSgJzD8ELkJouAp4fySxrgfqQ7pigGBMaZeeAtdaiBv95muL7ad2hMgktvbuRCHfH",
  "key15": "PwjkH5JiHeMybBgifo88tLCRvGh8LAqbK8KFhyAMKc5czicxHjP2kf5JRY1jXWuCn4be9YNU3dT6ddgtFNW1ptR",
  "key16": "32BUYBq4jJ32Ch4bKtt3rjDLNLiASTy1XSop9KWG1A4xpuw6wLy571btiSpT8Ttp3jpbHPkGfpqw7XUQetEb6SDJ",
  "key17": "4JV96S5RNz2P8BpoKJ2qLcLZADXazEcztzZsmHmAPey1aEQ8vU4VVLgMNsZ1cNgpnRAAvxeQkmcMpfX9EJjcJeF7",
  "key18": "2jwT98GASw72T5fTMPXwSXb5DJ93Qf3AaWcmmAFuFbiqgxWwdebVZjegbtHyjSFARDWpvwQKYQbq5yX9BKxb3EjR",
  "key19": "5j2vTL2z6wKqHYhfMqBN2Aw3BWLQV9NdSihX8sjFKS8BycsWzLM66G1seKTGpaAPpSA2Kqx2ZUu3L2hMENhMZXL3",
  "key20": "56XF6TNLyaurZazAJ8VhHxLRscRhPgYEMFgs4DUHAtbhGAy51QeAnufNekesY8mjFsuZkWvE9DLyTcZ49AVCAPdh",
  "key21": "3tz7syU75AcCxCX4GvLGhhqbz7SiV1tsk4iqDEK5hZscxoVpa7fMAETkfWUEpYFWUjqaBpvzXTDpVAKMyQkd7n7k",
  "key22": "2ZtBCQYKsbTsy7fgF1q1SLT18vBanpC6CHwo8WkxqjjHfFhHFNBBnpRf3aKMDiHQb8bhok2DBEW2GaZno8zy7a1z",
  "key23": "3jXYcncvL1BX6FRZRWmMPnCYEJLc1HdC9tPa9ncwsuRRY2EYjG11LLXkB2LZNQUSyyEReM6vz7DTQuomKHED27LM",
  "key24": "5LWrKz1SQvPSskoKm5AocskzSZiAHbpbqFZvThJf4n2zWMgUExbVKQjXdZQgZRPfwDgGHJJeod2m2f81QFEuZPGm",
  "key25": "4ypYkFrUFN8GT3Vk8QYBfseeigtsriGjibn84EaQLz67cjfQp3skhsfiKvm4Nyyih21tqEwU7HKdPzsacpJMP86E",
  "key26": "5PCqhDULm4oPWfqLYm8VphoGRnK75bWKXp5zQRL4LY8WuDbfTwHWVH3Nw32oLPwCJ43gK4xA6eZRc9ZKydraD7CG",
  "key27": "3LfuheHSpEP3h7zYfFTSuwuaKDCg14ekn9GxHcyGK7RUferh27Mf5vCvPXujqxRjukXjp6rWCiTyFgXNdZYu2eRb",
  "key28": "4WUWrTU7qH5KewUZr4PmyDeRdaDjpYFP983NsZfciBCHWR6SxzLUZCg3641YKRNG4CA9gSvnXG9SrA3FVhQwRvW",
  "key29": "vKtWMt2sLn1WDgvpkDN2nATsuzz2epMUq5s7w7zpJ1uSShGkxYV8H7riB5X3ZRdcWwWyuYEZjhJEA9pVsb4zukJ",
  "key30": "24HJFZcPqCLKqn1DbkRxzZUugQH3eygehNv4bPs4W1umssDHNmw1GLK47ivnkvrhMZgNVfwx576yaBGwMYxVTrMy",
  "key31": "3EPD2u24QEk68NoKUvfsUgJNBfFbfSnY4BEzQKgUEojuG6SMgaSHLy2HgnTxaa5bjKHDf5CVNNVqQnsmRvPPCdkA",
  "key32": "3WTVKk8QpSXeRcdPkTAHPB4ZWyrR48TNAi3omur1haMGivmj2yHAoeGXPFQDeBzTjN9t59XS7JuFRQfYB8p4xM17",
  "key33": "3kujTA64knKzafC8oGJnM4GY2GPHxHEjyksVMMuNwJdBVxgnp3rsY1KRC6UAyXNfHRWXbAncw7oKFYgHHARr4Pys",
  "key34": "4NrxKGEoWMWfoSaLpJ8J6QNGKFfAgvyuwvA5oCxKWTiSubbBVahCkgETzEyYS1HS3LD2Hc8XggdM7f49DoF6cM7h",
  "key35": "5oVQ1SfTm5NxJPK7yVmWgPdZUt9rcBVvp6vQVPP7vfCcBf8h67muRSoUjixN7mNJmCP6SkcsvjjhtWPbf4j9gEfv",
  "key36": "3ZrQFTidokyEcdsxyPseYnuvvoRb6GW5EpCcoYAxHWbM9R8AHJ4gXNGywz9pfdfpqs3b9xAZaE3aXYUm8kjnxR5t",
  "key37": "2AfzFEdeevKwr1kLVumi4F7GiwF3Mn8qeuA2LXAUhTx8GWCimA6Am9Gj12eFt7o45sMHDxHxd9BJYJZkgzUNp6Jq",
  "key38": "2pUgyQV2KKEAxMWsdHmMpXnCnfyrBm824j32aWdFJEXtXpck2e5gJXiEfVJrKwapTvSak4GmBYb8XnmDNdXTjkNn",
  "key39": "2oDkQMPmfRwoAr4sy4WtYz1tEQidYSN9ihYAed69b1fc4z2zPFi3gG5WtmfKNQXMXK8NWENbf1AbYMsXUEANr4nn"
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
