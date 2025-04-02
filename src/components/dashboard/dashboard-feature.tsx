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
    "2bqEGQdtB2R17whzCb5Utqo8H8rJuTRNupJrCcX32TzTXKgevM9BNLtTxKHHtErgMU6punBKFCDKCqAQuU7VV7JN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fsGjcXWfGjGVwyYvHMwB2BkLWX4vVoJaYMKJ3sqaSTcKgZhZZjYtLw4Roeof5CPMC54raS2uDDZecR5bJ71BuxV",
  "key1": "FuMu9DMewpeqhdWRBQRJyD2FzyZdM69HRAo3CxgwKD4Rtq7LWW6iBDVPXepNLqgnq4J2JpZ3J5MABpBTD8K5s2i",
  "key2": "4E5XswhSQuEKkAt1D5QsFkfW5JxgniVX9VDdiKeaC4FfoNKtv2aEp9zPpYSmXvSHe8K6VP2ignm4tw27A1ZwMC5V",
  "key3": "3pgwRkfuNS7QXxwKLpL7t2NtP7GKdCkzuDysTsqgNvkD5e2HdviqEmycUvfASqRsV964yKrm1F2RKr7rQvFeAJRc",
  "key4": "2vmXfxaGTk3sJQGvWH4vhFdnUoQ2gjLYLT1qYJyzyXTkPNLGNgCigsbYrk9oW4iWgnVcbyPv423DcMTMzBko8G26",
  "key5": "5xX1bNbW7AA97VXi2uy79v8h9uGiJScomW4CRpDaNCwEn4By9F2WN8zSUdXpcZsSxZTDQG6D8VM3zLhBnf5aFNdt",
  "key6": "16Kgpk3nxTmT2nUGwYYidKSTvDD6rMCTEhiwKBgDJ9Q6fkLbnrKWTPuurBdVKi9d3gZeeALR9LgNDxwQwi2Sv4a",
  "key7": "2uMbpfcVrze2ghVFZZNthtLrCmvNZFTHPS5tNrByf7ZezH4QmcS6m8gKVidqAjMUN6s3wCnxERy9nVZDJfouN9Nx",
  "key8": "4f26szWnoYcQMdwLjt8Unb1JXY36YA9vzVn1oQo8rn73Qu6EDrcKCJ2LrfkPrsWCX9vsPEqrF93C18vLLLurHSVt",
  "key9": "3XMGWHT87msugt73tMjL2XJ9AyTCyC85y3pKkYux7V2ZvNHyj1Z5Zzo5q4zUcc2N6pfmtMMQbgbEV7GHp9PzhV6u",
  "key10": "3oBsyZK26oC8vC2fMW8NsVqEjk1joWxF2fBH8UbHW9jrRQzS1JmmuhbbKxXdaPfaKLyyPqqxrE2YRQktufGkXBcs",
  "key11": "5ZpH7J72jWQ4ucZ5SD6Jnwj2soKZXfcW8saQKEXNn6poAmy4RBY5oJBBku8gQhrsBLGowZqjBq5UY1oGSEV7GsXk",
  "key12": "4z7893hbe1gqxqZvzhAKeNXR6ojX1CuY7qZsi9dpJSre6niR3DNVZaujQTEDHFR5mun2PZZMdcSK8wLMVTN9BVvD",
  "key13": "3Z37YjWYKCFyP34ymnBbwbodTz19z9rPi9m375vnfD4XewQZLrPGxGWJc77hgyYYZXrDGj5PPKbvDxe191ddjBUx",
  "key14": "43S1SnADdPMxb7Lo8T4H663o8Wyz4TeNQtkwNb59AEnL2jMcDXSATAvKPumh7kp8kvcadqsKvLmmX42tjP7LsJd1",
  "key15": "2wVFAqMWE1mno4f95RvGfWsq7gPsgK5LPs7YmcVDTw76Ns2ZzSDkduUa96hsQnwnoLE6PS9uCoAtc7TbghNpaYzA",
  "key16": "2sdP4bCZrGnHCe5FZAd6KXPapnc9dJhApffdNKKDH8pH4yvT7PGMdKAzvqqx8RJTVEuYgcpY5VSPiPnjnyEysp5q",
  "key17": "4kPGn561isVqrWUJaHwFBJ21kqkgJD5GeT4H72AJBNiff7eHjUn2qqoRynjnTWEuAkrj1nYEi3dwFwCuKTLaiBsU",
  "key18": "5s5X5uQxfingMoR37qpvmV7r1U9fdt4XEFELxMAzsmQTejFpb4rcyCzWM1cxmAYzZ6Jmb8aCYrkCBmVwzQEKZzuN",
  "key19": "2ourhwo3Z3vyswLCBVySUDNrmWQrJjPUgcStJdzCQw78oRohddCjTvxEWe328TFT1sHem1Q2cJZAaDGzvs3okZQd",
  "key20": "2CipjhkiVakwDmcJTSfxtoWnkbF4AnE9Yb1PH77uS8i6VKWGwPXS92gZXS8N4dX8EZhhKkUxrs5vGPysX8PEK2zQ",
  "key21": "45dzN9XsGwH3bCQYeSGRbEiixEp6p12TRXZ6tMbUYmsZk26d3MBHG7i2geVwJjJQVDAyDXxbzMC7GGnKaiR7Fy44",
  "key22": "67JGG6MHrboQqFQjxmip8d2FyzTcsPdu8pzPWD4DUMNzzqvnhCb5z9QoF8bGzKBGRiyNtARJUyk9YDgCPiEpJDUy",
  "key23": "2WWSTahJUSFWh2qytsYtcQMv6FfovDwyrquN8RkRiakD7YoeHeHDFZpJpiJ4BcAQifcsa4J3C5T7tN7oGLkeoSiL",
  "key24": "4z6jqgUvi3Zmmymhyz6rYu9e7uNfQTtro1gSFe8vavDhgowH144uKkViTf4XYV6FHx6AbTwH7ox4AJQXzUrojK5m",
  "key25": "5FtV3wqhcRf6WVnDP9pih8uAJTFK44YTsgVyYodSNjCtCrsxLHt4p7z4aMon2fDaBNeYL16V6UDaXtTzeq4tXHQ1",
  "key26": "63oyiry4KU8qHpmb1CpALUVWizBSLB8MhtFkQcYifEjfsC94fqNFCTko6PWyC6smREv6rM6PDLM29u8ZDCakRHM3",
  "key27": "5LXWH9X6eptE5QnGrLR4K9BrfRx7WVimXQTfQiVfg1CuMrxzvra8ZxzKF6bMAtcFkib1tNiyRU4mA2yS84HQQRbU",
  "key28": "5QGJqnwrFYX7FRTs2pXx8CSfFz9gYYHKFRnv5ZwPYWpr7UiFrZ3jqJUL27hsLHwjR7svP4edUDBraQVnKSeV5xcS",
  "key29": "2vByHhME83jehJQKEtocjqFPsbAtkho6PEt7pzosNwty1xbPbdteU1FpBhD5jHfJVFnDnqBMosYHradQtVeXNv2T",
  "key30": "2v7SGQvAYsdnsSDz76TK8wC5JEFx7j1mzFoKE62mZhqdNGArahYv235519iJ2bqWB667LviqAKDYcQUpUZWTof1W",
  "key31": "fFUh9bBWdLz5DPNn4KYRrWn1dkRrH5caRJUNNNju8Gua8xmiPzKPBsn5jeSCfgwZgUpP553RNk17deTbzKPRQnP",
  "key32": "42X8zHjnSG6YQCfLEjNofVSVbXdwwUMXM3hQNAG1Mmoq4MsfDj9LXCvchoMABmoXtxfqKzgKSsmpRF2fPkt7r1B8",
  "key33": "3xcXahZnb8EcQCu34ojjNDNysLpA6LcEMZgDmRBQ2SsrGy8ZVVwHrpVt6JPehVNzfivF2PxSbTHwb6kUBdNV3GiF",
  "key34": "2yb8c6zKYUMK26v96Voem83ApWvSR8ZiEtbMdG5xTXyHwwQ8y61t5o3nVdN1LtXzUpxScuwPZPBibck76rRjF4XB",
  "key35": "5ZbAZyvy8YoExNHwwXp9Fh86NJ5FcMLwZSzgpwr4uZod9P2ypvXdBxoZgyYdGE1qY3FVaQd8zt8CkUsqeqpVGEc6",
  "key36": "2uJZExHvEyzbtE7jta2pEpjbpXGQcG6CU6YPWzJgXeHHmJ9eXtX3ZknitCmk5qqZJdcCmzz5MDVkZL6nH8gLbUqp",
  "key37": "2SfdqujrBUgF5UiZHz6ykDy7DCmpQCAPaJ8sNEdaMb5BBx9NfsuZPNZdU25ZahtqqDdMFGC5HsesrBaTLLYftu6E",
  "key38": "4paCXhzfYmbiiXcKvaawXexrppEwZNNr1tWujHqSPDeVnCcyKSEnZWgJvR44n2Cy1JxHw8vuyJERPhU327GsrNC8",
  "key39": "5ryoBq7feUvuMT1hn3NCncunyqRTN91Aw9dZ8oaF19FEQqbFC4dN6P3hM7LijT423c4hw3r3Fn6enTrbps1iVDFZ",
  "key40": "5DwcEoKuXUbeRxygBsNmqZQDSCGYLMW9KoAHMbAFjivg4uHWfA3uiV2LJ8iqPbNqN5pCJbMbTJ49hLdNvkuKjWb5",
  "key41": "5pbYxXJMPmcFU6oVKr6EDGn7aN1hd5DHYtwbAhNmdp7dqUokkeZQmHiBycoCZEixHMxzmxWtkyJDrCfpeF9rkmHy"
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
