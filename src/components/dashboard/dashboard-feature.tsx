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
    "3SCWEabMtKkydcRrc6A3dJUzaAiEXJMYZLXVbqHNLssLgZjKVs2RJHeEQJTL152FgYx4XNyWDe1YTvB43uUPTmqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEMPEwFmVsiKKPrEaMFR3Kzua1JjbEtYJYFRGURKKNdm7hGTmd9yCKri7cbFHwKKC48tPD9vmbfRWPSaihBZp24",
  "key1": "2XFiivJmyUihhS5xzup9zcR9E2fkEiMoso3vtRRUiRXAbijGDn9qoaHjWVTutP1VYkT2MVTce9vCBSpJDnKqft8H",
  "key2": "3yqUSJ1zKmULdjnRcS27BhRS2SYSDiL5wJsdoKqyHGYLTTnZ6rEJUZSx9Yw1R4Aytq7knC7wwiwGS3B3qoCgoBwb",
  "key3": "3wS54kf5UB6CPPBb8uDHZJYj1z5BctQpuqf1hWT1xFZ4PKtwY7MJaJ34WWDKwKByYU8iGX9orGA543W7X6PUJ8Zb",
  "key4": "2RD7m5Gho3TzdJiabaoSR7mJrEJT42wmFRZumW9i5N2qsXJ3z2t6zCEG82cTZeZXQUY49KFRU5PstQBv3qTRkQKw",
  "key5": "jEToznq4kSNvUx2fVRmgDRESckdANCbzzyjSFY4efF1YkjE8bQZGejFbHBpSX98uWoGx5q6bPN4WKm4HX6KJ4hn",
  "key6": "3Ks8Daxj1ucWCMHYUcDaEr11vH25BmKpT7G8SQPNf9g2vPQomYM4N3qLv8PgXYzwTpFZuvF5Udyws5gLftHBEaac",
  "key7": "3cygUzcRfkui5jLbBePKFA6ELJLS9FZzwCmix4y3aSWH9URs7snzcnGoaKspme11gE1jRmJ96tdYtfesQQ45dzAK",
  "key8": "4esPdQEGhWu9CqRN7zEGhbb9xeSHXLtPbra36NdLTVBvqGYQA7kedUZxGEMPwPYBWLs4xjp2YBwHmRNS6v2V9QUC",
  "key9": "no5mLzPqaf7m2NyCu9QsGP9QbtS1nKmfrGGzdmn7mpQpqwYeRR9sQgisPUSLJcRCRYJ8tAGJkRwnzjbtJeDqLEX",
  "key10": "37jyHW3E4c8bXvANDrDMUcujvbWC8FLwHzEQx4AX9GHs6AZtvUd8S5BbPJZiry9fDJ5dkkBqvoruDXCXatvjvsLk",
  "key11": "34SeSKnx59Kta4Xh6F2HYQjoiJJNuXfDZ1L3q96njHibMXKD7cSeASNHBgo8VZzwGChgQVM5nfm9LkzxSjcve3wD",
  "key12": "4Qmb9pP6ZnQ4m8FWYo6EEVPcdytvf3cmEEWQCoJCMBKnVbMrp7hiGYCx4T9VApvQJwuvtaMVC7UwjzDHbE3yembM",
  "key13": "3XdyewoSy2qrPzKCACcrVaBJ4wgzFRLWzY5WZX3cyfjbQaHtrRC6xiofd5ofPkU1jnwoAdJMUAk7VsnkVrsnSVwq",
  "key14": "4tkxE6SLY3XGUL9LLsHcgw4pSuCR6or4qSVFMDsNAZtuNrRLhNc1w199BFibq3ZvVrGf8P7wd8H4ZU8EYuzsrECV",
  "key15": "31XCLubdgJbN1wVBsYW58B87mwquNCn8c83jvfaLGADrgAnq7dPrcoDRBep2SEqsKnggYgVJgvang7E7Z2iy4598",
  "key16": "5pZb6p9dnVdG6qJEjxWDKtapKhqbDg1dHCXMFJCvbrDP6YQWF84NUqVWkEx4WQMBoJMD8mVNNpaR8nQH5z9Yc5uZ",
  "key17": "2yg5JgUpoMaCE5feVY6mtDTCrzokPboChVxS9sA3cHvCn3UQTeKvmM2NDvbGRyGcvNf5WccfG3W9A2xsixjMeJcc",
  "key18": "2e7xa6Mzj9NMVqDNBkUQs1s1MFsZ7SS8Yv3THDQDB7922wafnRHH8HFuRxLVkqycMzNS1uPmRPSfuvXLBVzPtuv7",
  "key19": "4MU7M7eRw1tUXQN1hJwMBRDZ5TArfJyCAXZeebVLncoxrVkcME4cWVMB6VaG9BapMPDWMeWrU5mP9bEvkDcsebH6",
  "key20": "42WPAzt7ZVGJw57zaHccyacRgqAnaiYdm9MUFpwpkEvBXRLknBDspXzNKgba8dcDijzTTgVrsdRVH7PbB4PyuP4S",
  "key21": "5eUEYRU7ZLMRd31QGMGYztvYVigDTfsZE5mAMvmyvmqh5dciY1Nrse8tvfEYNhDNAJs8DaNKfPuqhsySMGrsGc6J",
  "key22": "5CCUw246B6jM2g96zK15fpTUEGN17EPTDCGMqGbNrEEP6BjWPEYb32adcwvJWJhUjA5JneeCDHT81iXvGTUaJMTV",
  "key23": "2KES98f2ffVx2c3UP65T6eacsSZ653ry5DxMMKa1mrvVR2t3UvmSWGTDrxmJ2Pf3Dyjivk3p2jrtkeHex6URw7mA",
  "key24": "2tyyA42EbTL2kMSt8WJw5m22i6SEMe3JaYWwh5RwPovUizHtdQA4P4FsfAs8zTVCuLMfxyLHkdhKb2PPnNwCG8oY",
  "key25": "UkgYoEXGJgtRv7ceooHbQxz71UZJ8A9eCgQRpZAx6df25Z51ErPbpLF5Rf2mGrevv2ZQUxQjcnXgJ5BzBufNFFp",
  "key26": "3kWs6Z7n2cqSgZWZqnqkxcT3M2sQmf98yejrQQXor78eqiERZHEzq1L1BhySnnytxMTE5x4NkWGp896LnxRF3kob",
  "key27": "3eYfSRdXDBpJ9SKekLgrfrve2xVQ2PxxoyhomPdv9GMoHErhqGMYqXNFvsJrc3m41BN7C8aS1JfqxdfTGQRh9ZwL",
  "key28": "5tBBUJmDmHYDewTwxh8532nWvjeiCFbrCkDkx9junECA2mFx9qcem5nPuAszz9iSeYbe3cU9PNTeoLmnyxxGafX4",
  "key29": "2ZJVfZSzQpmrCm6uvTJVCqeJS2nQsDj5J6Dj8Rw7xrPAe3iPUkD4o9Rtrtp1jzpBuaJ2CVxE8grBs2nDjLMXBG58",
  "key30": "3qnfkRcXpUkA32kUHJTjFD6f3ELdZB7Wn5oPovNmEhfHZXaAxVeSvnzFRk1fYpiEhRrRpgDCjXmmxpbYjNKYFpaz",
  "key31": "5aZmGsRJ7F4c2T8ddLCajPEJ58Y7eUJrUDhvA5ZHfx5KcLTN1YxocoUhuXkaZpDZLSFDshT5pueWVNfz73QZ3ZA1",
  "key32": "4V8H35Xjusy2ndVxr9zBLHP3qaYTMEg6vZPbXmdqBCymERjJsJ129D5BiHfcg6rjntGDtSJubxQfgZRHRDpYBLxp",
  "key33": "27hWNpq26Jtqy7v22FhRBqkuPA4JZzVRC59T3cRzqB4PJWntw4n1knizGMmzoAuGw79Lh9NRGf5ykHgd81QNbKPS",
  "key34": "5vme2F4qi7avbkVW8uxUQYM5WdRPvD5PVKcSHnbnKLoV4XaSaVHU4r7sie1KFFWbqjyg8sS4NjHfGR7cFHyEzXh9",
  "key35": "3qd3DVHovQDSG1nR6i4nijkqXPC95neijoNuQutRYBtAjCH3oBtSt8rVHmeyPuw43MC6uKufJUBtL2WYSchSFwMG",
  "key36": "2ztkMrujPahv562We33jfPMaYhCt2fQ8R9x4SmqXey8yNi6hwHXVuRWCbyeFVXAbNUvCZneLowtxtrLeZqq9Lack",
  "key37": "3ytkX6ohoSqhmUdTRgnyhFsZ1GmAbHpeJ2Dqiy17rEpSRgQwNgSGW86QQKusciM8TFidyfaK6QqsRQZqutBJhWwU",
  "key38": "53JoKKAqePPPUGGphPuf978eA1mZTymecVb5CQ3EwDsbBmASCuZX3P3U1bTh66bpwy7z6YroaQ14ur6Rg3UMBdsE",
  "key39": "644zPga2Qwkeah2N4vSur6buyAjEhsXBMXt9CEx1eLJ52uRfy2JLPP157RbohBg8ZhnptXWoR5ga9H4yk6eHJewS",
  "key40": "3uhPYJHwJPoBRPWgYoMtiZ3x5tEsUp6Vhnz4xxSXvRaJWvaGAxdpKbyY735MUDd5jDzePUZZBzKdEJ9QHE5vdNN2",
  "key41": "31o6emZXPQNLNcgF6b8nduBNEhYzarPXrC6wWnb9atiNwFtPHUdXEgWLkuQuMzBdGJTCUhN83ebkmPNsQjVigqPj",
  "key42": "5QFzjzhbNJ2zWXb3gbwaeCE2cajEHTdURc7KPTwUT4nfNWsNU8S5Bg439sGUpKCpBD1LfFokcJQdeu9ToTfJKu4K",
  "key43": "2ughCqscGivnqxAAr6DE1ytuMwy8Addpu5duv6XhrX2LPziYXgoGLM5MiZSahRgXbrV4SuaMvu8M9y7gQMNLC7qZ",
  "key44": "2fkzfctKjPv2fCKiiLd3QUVHTThRiKq9daQRcGme8hduVkxJJJToCvF4SgwhDv4JrMGaNDWChRxGAyszFSResmKw"
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
