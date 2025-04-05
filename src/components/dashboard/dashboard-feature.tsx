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
    "vEQ8KgHxBsr4C7z1RRzWRfgqD32D2A1UNJ1VsJ21Hkcd4PgSo5HXoczRsnNrrx2u8TuTLihapUsZXEUKQoUSWUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLR7iuzmeTWuR1c67fGAgYT7E6HqQ7tM1Kshm8mSDb68Tb4X77s1knZChoXTaRyS3e2dD8ErUet5UBVmkxSM7eD",
  "key1": "4H4RF7P2mgmrW9ec4LCN2DtCTJZc3N1rTPdUJfLKqk1nFtjusgr5ogxGPDzoh51C9xc67grdoCQjCsiHB4aGyKGh",
  "key2": "4vjr4GYZuqtsmRP9MCYE1hJUQMHztk4Z1iEV4bJFeoHYEUnLBQSSWWKFRv1E7UR2SBmZiRMbME79P91R7nCfKh2D",
  "key3": "2sXZQFBzo5kJHrsL1ak7F5cHHRrBYZ6piBoRjeLQo7tJSo6o5QiMNNogAHcHspx3Vxg8oowDhf6GGz2UizG8pcMJ",
  "key4": "2TTtqoy2x6URgZfJwJuGf8hWa2qy1CwSuXRciEGGKPj7HNHtkjagpAj2xPMHEyMMjiT66X49UXPbRNBkjmSNTD4U",
  "key5": "5qP57EcwjCPavFXS4y1xXCyd9QBHgULGJv9fvDg6fVNo5RC7Xrfo1JyRF2P4k7DwkNMuwfJyjTNNbuhzqgsye4PD",
  "key6": "3XCKx52oYyocq58dCAexuiJNcXj5JWTyGk8VZhWQhs62WnVYf2qPfVNsPYAQnn3hVDidYk9Qy2cjSMDQuSPFdcWk",
  "key7": "MrZfyuWdBnEBAjRaG9M414QHBbBiP9zRX4F8bBxmsv7TnZyfzW8LGxmEvFqZ5iZgZyksHHNXy2zxrLFrcjScwDM",
  "key8": "5VWQW5463Y3N6v9sECmfWgpQ4keZwLjxq6updnGFLFPu8D3z3gUSYRKBq9DxFvxSoUjCRTQZh9tU55ALui9CuuVU",
  "key9": "G1Ge1cDe8mo7Y83dCCftSCHh493Q6TqVL7vKSwx58WcuGDXfvd3e9SnoJcJUjskBjiB4rmAWZ26h9S63sofZkUt",
  "key10": "3Z5E3mpzuEuWgVEqzqaL2T4ii2PuAefccJ5ntgEoK2eskUop9zBtc3yCxqKMXX5bVjwSvEeRw1NQiecrecoRjLX1",
  "key11": "3kP8VRgbUS2YBjDAmtxWzSpMTxkCtE1y1JUeYX2k6iv35c3Rkz65ZFcFK9sAmJRoQBEHvdqPKdz3bdutk46vL9ug",
  "key12": "5o6xgnRJi666cygc3ZbYEGvzxswjbjpaMY8VPCs4rV79XKvLgZKBh4UhKRBQtyQysyczY2qzREfJXQCS9kdCvQhv",
  "key13": "5ADhqZvjFXCpeSuLUoRNG3JaVBGiko9ykt7QEqEFNj2vLHEmDiK63umqxPLMFd5j3MrrfRKk8wuju9gWsxBMAsXq",
  "key14": "5gsouMdGWXEwmiLts5A2fh3MkgJBkkfceBw34dz7pCRvoS2YFjXtoczVHW8q9BJxYHuyxGWM454bYLWWQCkh2fTh",
  "key15": "2g5H9HVpdpMMbq3Uswg2xNM6ii8gESFBvAhLpPbXMRCdoVa5pfghjasirsHXTuyRmLWDQoRqde2L7nvM4deTkNzh",
  "key16": "5nqMBKavUGR9boaNddEhnu7mHaSdbzJLwEow3WNXfivMK6Pq4Uh9JPvY6sVZCAvzkL7GEPXrSQDsrZpHDS6Mk3fy",
  "key17": "2fQoHesHwip2utHE16NVKVRRF4Uqak7EH1CJPHYqV5hUGGcY7A1rbmHc2tPM6fATFitavQr5zoMFGLDRqa4nTS9p",
  "key18": "5xq3ZwmB3K61N1tVYDJ1ZwTynLq1LnRHB3xir9pYUz3DqLZvCJxQ5mNKfn15TbrhkadoavspbaHytTv2C74b9s2P",
  "key19": "4wLseDk4MpounTSvfqVw6JrLNApz4pf2dxtQeghjaQGAy1tUjHAVX6f4JgHQbcbyGFciwQENHEKZxpT5RrdBACJZ",
  "key20": "3mhRbcyH8oyGxMsSNMxWgECcRVGhvh4C5hhCecuaz6aBS41rECiuS8kTUyNph2cfrJbHt8576JvZa5LENpxoHUsZ",
  "key21": "4g93R5vLNuUouNtKpBV8BKxBU4DqQKZGt5pNforniB2auS7hHWHuWTU38LpjFkjDYDE5hNZzZKD1M67NRHXiF19M",
  "key22": "5e583SbSa52gr3THZN4ycFWY4hYrE3wgFUtx5W7Kr8hc9EGTEhQLWMuqzrZnNSHDZ76bBa3pwkkwb3gDFvM96rRg",
  "key23": "5JWp7qGpiZUrNeYNwCEbDtfnUej3grFhb8Acwcd3URx5Z3eg2QnBELPNJLSvyA2ANXgaKnrQpHSxevk59o1ycG8A",
  "key24": "4CjriWVFDDTtRD6suubGJFaV9KvP77xqWMLLHkVURGMmtXiiQ2xJuK7LTGhey64r6cCwp62rwYrx4bkgWu3SW6ew",
  "key25": "26XMcEVvxfHZx1GFoKtq8ZHswG5L3v7citANny8h98jFUZi9Kn25dj6BXwm4HJEvo33qdxx8aB3LbNVK12983jtU",
  "key26": "3HPLE68L84WDR63EvQQ51UHeNbFakePfta2QfkMGprwayVk2UjGdAwZaGJv8p8XXSEi6sTbEPKoADpcee7z7Qx73",
  "key27": "Lm1pP2omFtD1KUFNh8XQ6MaBLYrzfetHZAEY19rNG8rHKd7mYijoDJ4e5VoVrKHceh8ru2a4UYg88me2sbrW3VE",
  "key28": "5PENodbcaowY7fr4FnewXuwgRhtwpHxBpTK4EdHRhWjgD4PkYxCdAFpdQajrkmsyuBVGvwXXb5MhMnuybcdQ4y1h",
  "key29": "5yFMmBHK4EDcfu9Un2udgVATFgjCQ3Lrgr3zXT5YgqonycC35Tc5dVA3XGdTMJFAe3exi1wnANLNXzegsN2Pccn3",
  "key30": "uKnfXFjhbHXMVmr2sZwjFsBfZfxQx5FC8TY2eVdvi7xyM6PeXMjvqshDZrJmBNMhpwjB5duGRtKJj9MHzLybyq9",
  "key31": "E4rR9nXY1k6tMvU28hctbGrLhM7i3Cbu5AkrnmkXXVjjv7oDD5k3u9VZniLdq4nhxJWCJtyQGTooKvyrk858vrd",
  "key32": "5d7TexqnFcPCY7YRpnFKsEfX5hGa4SGoGbsdJAvMyqsBJtfEKR8ysC5r4Xukx2AD52jYfKhEyB71tPasaTZ4DvJe",
  "key33": "4aNochy2WfoTzSHmrqGjgqQ7TqW29LF5E33W5eoEaYXcK2v5FbQTWWZfoR4YM4pDcXmvAZFxwjqJoFUNQeB1sVDM",
  "key34": "2EwzVtchLJ4kJT8BYZpwv3TBQmJjyAiJ2g3VBFkbTiZtqMbyjVBhGzKMrjsKLD47P5ABGTYrQbxPbawq8sZqn1zN"
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
