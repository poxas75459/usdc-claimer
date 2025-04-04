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
    "46aKoncxRMmywLvGZtnJbzXR7eEHv6k7YwF8jUhnQM9VAmPi48DMfmEJuGdqSa3LCMsmTVBrju6wBQaGmu2vSFJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yv887EiMTXZXqGsEd59nrLtm6rhptoRnLywscAKEU3uwdqGHPEMDyGEH1CdSYu9rVPe1oi2yinPcX2iYok5LPZK",
  "key1": "4GdGc9KSfx77KZZkANZhUAw6m4XCeQFUb3qeFVEH9su6cMeof95874yPwjF5ULjsT5gTpWdFSv5x7EzxydKiiT6F",
  "key2": "5vpNNv5FKt7HxEMryPQ191DdHA4zMJHfcaG4KjMd1GHqfbEo2ugJHWf4Ab2whNmoQeZ53UR4dox1w4sTEv9t9fr4",
  "key3": "4uJXPJpxjecLFHdmAXRrMJoLFHoRErVsXre4w1Byky9viePqFVdyTGXSDvpJ5pJp3f61QCZNyWEpUk6fuKXAE6P3",
  "key4": "4bxgLeftFPMNhKgepG3ZEZWah1TMQBEbE567YUf4FSiaDbkqkN2VDAzB784FmrQq4a1NRXKUTmfh4wBSZedC7cZr",
  "key5": "582A16KBWgVRKTQ5iFHaWfhzLb1qf1JJ8t2thzsJBfXE9MtVt9qQCvQ7wH3V3rGQ8D7umchj6srNjaUJE9Ezbq3r",
  "key6": "4LXhm4nz5USwtt752NJWSX5Sa7NnDbRnrs8UQC7y5BKntDvMy1JZkS1k7BQZqkfAH381JN4CApeJrAqzfDGR5x6u",
  "key7": "Yzfg3zD2TWsCXSQSsmcZa712nqJir1skcSBVjw86S4J5ugDGzCEzcw9Htw5cyC97FJcwXL8v3HbkGwGEfXKwWyb",
  "key8": "23zZ9MnNaRTu4NmxNMRdyXRY31YkmCbnnA1L24AH1ZC6tUV32Tw46PKKWy451kCaQZbpCajSWJvxJPWTXY9LDXDH",
  "key9": "5oB2h11yjqXDou6PdsvzL7Vi6NF3XK9dW479RxJeDzWwZp8HFipKV7vKiTbShkdRRCvKbztwJib1GV3DXujEZNyM",
  "key10": "2DAr3faAP9g4zL1Ruupp8bnS2Wsxfi7LbCtyfEZhBeydzGANhg2ynJi78EsuKfj2emMiTzZiE3TyahRtRGQ4kmhB",
  "key11": "3yvJMWp2SHNeRtcowqEXspW3qFRwThdeRcLmNLaReitrDFH3RKVFEnrzJ7pUhKJKhktQMrna1hz4b4fbyFLVe7P2",
  "key12": "5XuxU7JhjoV3wt4trmi5cCFDVBnH7W5KEQySfnZnfkt9kGpx8K9nYTyzer3vdSa2zmFgKtSBZpixEBjVmF27BhC",
  "key13": "5jjJuhn7TU5WKNCahNd4QUssgCXm2a72yhG4dFfhF5hTmWVHRaHQkqEZQeZARHoZJPEzm2PEWcrgcc1HadP9rGpX",
  "key14": "Jk5joRW92FXGp6WZ6u1WnVMZSJRiw9dfEDXKFC6GFkohv5Win4njbry2qUcAyVxFgaTTUeWkKrAWDV2S1Acap85",
  "key15": "585iENgqB1Movdj5rb2xmJNwiU7tTb3sDkU12cN9Bnf1pDYYs8pw88iweJFqR95Wbc58Tp7sGs4SwKrVqsYvEC6e",
  "key16": "4hNB8xzECiisjWB7nQMjCtUpsqWDHiy9hnypiwEFdUBfEsQmYbT7P9gwNVJNucnidR4UqVb35YzbZ8KAX9EwerEB",
  "key17": "3Pq4gyffLAqovefoGR2FzxnwTFbefHVZ4qa7G1rju2UYLnUgFEZJfpo2G94SfazeSRdV9iL9NRciiAnmYLi68E3N",
  "key18": "4ePpfwNh8ga93Sf5zn5oCk9t3iC8CXtQS5Wse1PCUDSgqnqvBRw9xqRvrwbW6efmuyHssAUHJhsrkV2KHKzDzP8z",
  "key19": "3FmD8niqQEFAj4UMP8LuPz93Fpu3aNDVce3A1HkcrBm7uyxMkASj2eJRdq9YWXdfS2VrCBfvGinKhnRWNLNvT64z",
  "key20": "44XhyoXy7bPXPBoeQcKrxpXwRt68qTDyPokRryNFrnhk722axgajTYFExpAhK93QQfuE7b1SXXtPiJbVc7CStSBV",
  "key21": "4tT15Bi2UhJqWBe8GvoUxcNMbUL6kcjAVcnvfnFrae8iwzgCsNKWJe5aCG1WDP4sKRax1wbUrSshfuvWS6b25uWD",
  "key22": "4q7pgCrTGN9Hj2QVrrpmXZLC97hfghbrfhoUDATZr5e69fNdn5rghSKhQEgX431Kae5X1Vx3hFhdTNsbtwU9QQEv",
  "key23": "jGqX6JdAESKAU9r9tL2eaySjrVKLpAJcion9cABjWpioHuXWnFV8KH2YwUHZ2hw2HstFKbDWwox9t6onecxqc5e",
  "key24": "3Mm3wdRLeaFt76ootWJYhgPLJoCFwhuDbupbXxDSJwL4eJ8BYyLeLF2rm4SSHru44KTkqm8THp3Nm8hCP2hxdTSc",
  "key25": "562DzZRuCkBc6k3JunWz6H5n7WyJ2LTXCCPVAryCZX1bL6A8Nxnw9iVpnEb58TX9hhnei6TM4ZD9U1bZ7bzpoA5W",
  "key26": "2x4qV6CZhV8Z7HJWxNrjHGVowqCMLjYTmN1HZgEpNGr9f1Koh397ydfcHxhNM8LSTNFVhHZWjqdp5FVAniFxn4Pr",
  "key27": "3kkvQ6a5ZK2KGrtfSjs21Qd2n71AVphnyeDYEwCbqTKQ12uLBqMfU8m2o6g39Evd6mjGb4XMv9fKQqyZyTVHemmN",
  "key28": "2mDFcSCGjUYJiN4vAzvAwFqy32bGmRLT4tN5L4th91CxptWrQ71Ki4dvQcnoGt5X58n351PmasM3BqkbFhHavWHe",
  "key29": "rUcWtRBsGWxT9nMZyWnsK8pRMdZxCP8xY8HHx11bFLbmZ6badw8UCypfmQ5W7Ep4b8jfBR8pwaBQ1abEFSuUVfc",
  "key30": "64qoh7MbdjZsBL1FqmDMHXR9XNjnA4PjDzkesaZUfGYF9MtAvfjAVUf5x9rhSTR1cf4zmQYVgXiBpLkGCcrzybhP",
  "key31": "2p9ocZCoSx2esGwqmvuCRW2UhLu81zMPjrt42ZjGLUWE7iof4AwSH9QjBLjiLncdLFk6mUP2QajkRYMgGDiZuEZz",
  "key32": "3nuCoHt1sp9bpwsuhj8jyuDj2LXLGYPQCJV8WcGub32inmwkM8mB6ShAt7ngyQXevYcLuc3kAAXLviGuXfpBWQTi"
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
