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
    "4hMDHr3MxoEXP1wcgMpA2qjSAYCZvNc126pTfCyC5oscuDubiZsCy9mW2y6fFhydVjJMXtpMa8cJVZiESZfjYxTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25mo7ZhDVZXVY7aj2Hi1xHii3VnCR9tJ36DPpvGrL4SPBu1PEX7vSmaUZUhQP4tBzGXMFSazHDkr1GfTQueaAmXc",
  "key1": "5JBfhFFFThfgYmN18gxSQmJVG4tqtxzwaGMrMSTpjTKLmi8a1zs58YV39qsmMV79ik5zQF5PZ9ARBYopVediALsP",
  "key2": "5T4Ynz1eXd9Cg659481fozysxwzKxySQjGZX4F4y37QCubAi31HhyNMvYhZNUCEek91rRg1Ky8mDbRE3ub6wyNJU",
  "key3": "jqnG5jDvE4ojfpkkHajGRmPqQQPNH96hMMG5PBYMjPhNAbLNuxqDzdPzW8tHy9ry1pxRX15aXzbfkM9KZo4fWsC",
  "key4": "4vKQWLe4yaz56JnVbAe6qd7A6Vo8Pjk1Apw4pATDvVWPBRg13NfqZ5tEko7jWSxjtunGxdSdZmbZPZPT88Py7TPY",
  "key5": "2Xrkq13yk6DeieiJruM6HxR5GsUjEJTrBsujd3uDRJrkY846uh4gXwRhocycQrnD8TzzfomRwVywxPFHDWobFv31",
  "key6": "3CdMCoyBQQ3DCWmwiRxoX7VNcxfgPHAa18fMUxJXY2fEzubCpvfj6YRxh9UBxmBWjK7L2xE86bSbF2YPtqHzv8Kk",
  "key7": "5R4VhFcKyrG5YKcUeHqxi9HWM9ako5jaYVq5PbFapsZT26gyRms1EnabqRFxyKHSqxypaE4rQyCn2nSWp8Z1DCz8",
  "key8": "3XwLdisVU3a9XQdGWZx1PZjUFuGuM8pyKkTtUWRUYaLgnEvoBcKSby5hK8igkydCzFZPPV7Ag3XAjdCjxQxMHieb",
  "key9": "66zDYAbydBA7bbfxNnAZsWdCuGm3MREPDmvojYFFbcZHd7LAt5vYW63uLGm4HbeYntFyAYbQFNDwSyzrZEqUqbZK",
  "key10": "3LKzSuKzaar28GyYyCvh8vKWUBrQNK9f6aegxiLSjVza2KvwbN62eiku8zFZa5cVAiGaqsuvZRCLxzuRMoJ3LAsK",
  "key11": "PeindDQwrtzjEgyUzjCuMipZkdDShL2SSU3sNs6ySPajkFCSTbyUqu7v1Qvd3HYWkWa9hKsFFR3dGjgnpQxqBCA",
  "key12": "3LdNJe9wy7A8bk9mWynyJjHoZdxKgnPLtFUnerwki7RvRm2AjHocmL763ZgcEdrutPs6EMqRrQRV3jfnwGuBGPCc",
  "key13": "3Cq1hajMp239kLGd6BTDLeto4DEkWxX3kfaxUwS9Fv5fyz5mqsiPmtXU4H2TLKGLA3Jr83jMzKvohAorJMauQbJ1",
  "key14": "4AsXJVBNZznXe2xCkNKjDcUJDNe28JG7ytDmajH5F3PJHv2UUCAQv9FMD5XzyWrb4G7H1WuoFahhLqeky9CRxRzU",
  "key15": "S5y1Xz7UG9owadab4sYAo9tDKKTVuuA9ysxQzA1zJxXJNPp7qXzbaKaLCAgNkFJvzWHjdKATMS7QSpXgC8otP4u",
  "key16": "5wfRXep9kQzfKA97jrZQQtd8PahLm9YCmB85nHtfyRj8b8ssLp6t6SV8PmArMjvRR1g6B8mecGucqvfkWnde2RaP",
  "key17": "3MsLeQRHJMGwqZUfAiBrxapGD6dGgfMDLjtkcfY9c8M7BtR9uXWLgygRjxsfMxSEMyVcpihtnWG9cWTDaUDT8vgj",
  "key18": "2VqxCZi68NooEahkVYQQTRu5FfyPGSYKtxnkdR28BjPyMYwaXpzUW6oYhC9r4RLc2rh8B8LHaguCQCDGfbqhU6wu",
  "key19": "2YqM6qGaGiao83PNexST8futXdguZH55x2p7f9vt4dZaGhfn4LbXU2me3ZiuTZwFQyc44tssifyDjm3sNCXF6CcP",
  "key20": "2ha22rbFGikhyfy1hLvUjz2oXeyXGvDsgDK5rTYxzQmmrzCbhgRz2aiqQM1tEGp17jfVFwNzGbknpgRuvRjs7FkN",
  "key21": "2c4MefQDKfdN5dDnPx6AhUiK8gsVmtX2x4T3m3kj36MTCjnsYhMP2cH5sECUV56uBsormCAHBa7MhxyZiFZHPMbM",
  "key22": "4tnJA7EtwUUnpc2sjhrftMKHbev8CrfjiFg7NgyjgLT7DWVdK45aGmwQ3mYQ1k15de9qBHDaNYUEiLevhR3PLbdf",
  "key23": "NAWiewUgdsfESjC6Ze6c8eF63xuD3GdKbtTuH1vApyJ19DUG6XhcthgFQaMERiVuCN6cvVxNbtsLM2xYwmjX5ru",
  "key24": "5WgenvN3RDLtPqRimJUXmquH8XsaW5dvsbe9sYibA6M8y3rmcXy4sUUB5J6Uk3pkGUjyLUgqh8wtxirmfKhee7eS",
  "key25": "38SMfZhSs8qE6ZBXCUfGKKymx3cCf71QF4HpYiSV6xeyucnkvWfysvdB9XvDapUUF24irDmcTUKbXDKZVMqzFjfe",
  "key26": "4nWMLB9sHPVF3MpYb2WPL73zKDE3rt1cEH1oKeGZnCqPziijC9fPddViqm5pnkywbJA36v5DmAWETMKGGwfbSuwk",
  "key27": "5tpecNNVnBwWarVNj1x8URZxNXtXMoAbMmskKv7EJLNpwS6NPot5BkARUCNcQaLxd9RU62fbRXTxFGu2RU6ox8S",
  "key28": "2VnjnRPJPZaNDS4z1mok8Px6kDSPnJbTKLpFFtk63b7gxACS6gSMVpAxii7mNMRYQ3jrK3d5G9U9NuUyCHtSGvaF",
  "key29": "46jNcZYG1qp1y3Wj2xhkRzbW2dgbNEVFQtoefvtopnBR18QoqHALpbyfTLqvohQoun98WmXm8EKC6gvEtynhi3dj",
  "key30": "52ftRLJ7cdowNSman17gKyHHrcQ3GweiRBksNk7c7DZ4BvzbgKf6XXsL6JEzrC2i1dG2LZe6CaLe6rnUk66hxU4g",
  "key31": "5fsReqMN7QaGHTZu2u3LqGvVHEdyPXRcBzL2ZTnDZ47r7eCgq4GF4jsH32z5c5ie4RpMoAq9XrQsu2C2bn9x7Bsg",
  "key32": "2XiFyjFL3fGX294Wy1BJoqnJjiiCBf8B1qBCjpMXCt24o6fSUiSMsVmvY67tiDeWa7Ly4QZAVJNUTtqZmcK3Ug5i",
  "key33": "5PpTzfFmt8JLJStFhV75AhgEybrWydeqDPDvi6j1nd7cUfifqooaP5EURP4su22Li7kUwQVZyy8ZyTvt5K2uw4qk",
  "key34": "4HiHVKn8RbFXE157RBshJQBEc7EdCSMLu1za2HMq9HsUHAAeYPStaFCMNASEAvFPQwRFoW5xnTohQe4zyMWH8gXE",
  "key35": "3C7CeX2PhQgGeGm7cLZFm8qg3Pa9jAv2kRvF4tm5B6vV4WUerwPW13px8USWtLEzs2xHnaMLiCHxAy3PGv9K8iEm",
  "key36": "5RimFk9J6wtSj7Ux2FnqfgCFnuEg5GdTokYra8TPhooW5dU4KyriGZSKZCBJh5CnAqFxMwzKVMtuyLUkTb3pTet1",
  "key37": "2Gnxx958CPuG3AjqCv8necLaCiuvrWKDA8twZpPR66ubR59XHvGeU5hXo6kHPnkUe4Ww3rgKiEm1C9fgHukX7SiD",
  "key38": "5KxsHmznJ84L4655W3czCxDvjYDK2efAkGWzSkEkhSnb4XcGnfUhcA5mPiuoD4MV3SsmfqjFm9PGoePnbMsCPbTS",
  "key39": "3q5EkVJM9PiMJ89gxVhEDUzevj7pW4QXNpyMkdqgmhCa5ryeRCqiosgVvh5w1NcgAk41dRApvevvqhZdDP5apN2h",
  "key40": "3aGEL1kFkLskuYQaNaKF2Hf2k6xkCPfLELpkapbLy9jEgyWanrAwUXbhbN9qftf8i41mhkAMGSkqNMZ2kjV89eAF",
  "key41": "37zaMyy1qY5AAjF84oP3czcjbQkkReVPiuuQfefsJ2JKv2soMF9JWBtWNERCZkDxnnhDpu1WHFhJmJrYohqQf744",
  "key42": "5Z3cQdevrreUu8Haj1e837UTc3jXDz5wttH3TtiW9cyFDNqK8RMkJgJWXvRnHySdyXR2RiA4uhpUuGwuTZGoqq6g",
  "key43": "3KvBETcVc31A2j2QzpPuUbEh4DSEFa7m5v5PpdFMB45T8h6E5UzcQyEExnU8YyuKkoJdvsttE25m3Thwc5MF6tg6",
  "key44": "5zSwJjt4ofCnkDM86qeVqmpaCrtWm6CYQpDR5KRk3JGDrSRxowp5JSY2yWbQuh64k2SQrihaboCi2MKeab6zTSqp",
  "key45": "4XKNEN92TEJjsedm2DVwp7Z586eRPv8R6mb4UJp92TsRbw6GKrsV9VFErfFfHzid8BseViarth7vc3xLq1UzbP5x",
  "key46": "3tq9Z5QYeu65PsofzeJy15BqB9eejns2PXG66PsMENfAfM2pi68F8G2ihtWkYsWDRfvsBEH8mQAS6UopBfzJEczx",
  "key47": "3AfxqEXBxV6YS9VPUkyTHZjNS6soo8wuKnB57Eb2333XMw5fPNfJAhz3Cp467ZK6gPhHeQqyyxDttgeE1vNmKB9H"
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
