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
    "2PfiLrea1Ept9rzL4AxebAxi5hcJWUsJtmooEWws98wzfq1C581sFhydyR6kxacdFm9CHBmVDcRWKChuKyUXBdVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U93ZrxKnigegcj45vF9CDocrrSX3WEjfrJhCNvbHm9NRpbojEFyA1qvWhFRzyd3iUsZBkmRS99frVhYLFwh7tVY",
  "key1": "47xKyGxUBxcWkC7q6bgEomTWY8ma5nA3HGHajUmCcj2QVN4QKcsSyRft4GaS25sByatj7Xk79VQMLRBB7ucXbAEe",
  "key2": "3dVqiByn1JPwJAAd9rK37S88YxiEqNYhAyGVCgZxU6GV1ytvQ5SkDRrcAdgktzBPjotvctdKNHhLFG91egcdgJqR",
  "key3": "4xG8dhWCebkWkTZo9MtAn29Q17fuAM8nKkJV2BDNRQ5NFYUah4echhanweQ6u9HZ1KBpDAYJi7vVUPjiBtYB68Gf",
  "key4": "5Ay7ou6ozSMMg97x1phoyjvZrVDC47XBvjdFAgz8puCRDihF41BiFm7qi7HAMotyhub8LMnVVtq5wq5M6iLnGxPX",
  "key5": "4HhTYCYVPArXB1KTgU1uCdFoT5W3gvaXgYn5M61Scs5Qw8yvP5Tqyno9XdroVVynHfRyr3e4G4FakTHVc8D4KMKJ",
  "key6": "3d6y4rRb6AC8pCDbTb1Vj6M9HADBtvjDDWViSMfoFzEgw7JybT3MZa29M4dpfvjMCQCKfjnD7yDMEwkHeHDK2dLB",
  "key7": "2FFcLMJ52brawMPxSNGgNQfLi4qYpK6Jz1AAezNJtUgWgJw1gw5hvJVNgybsAPzyCbJNLntX7fCD1ovwsSDdPpYe",
  "key8": "ZXEdb63zLuAgkgPuhwwjsuuCMvdeKjkpeUCxYRCx1GPgzc4Q9eVpaVfiXeWqu4dtcTtdWsWmTb9EEdyUNLQ8uMG",
  "key9": "3tcVqbiXJ8ev1vi63jFXofCWCpKGCR4fYVfghcvH5ohuAZ89U32GPKBek12KrhyLtbLJYxjwA4iF8gNqnmqhdSW8",
  "key10": "2CEpRQMPpNVXWUz4LE3u2xeN3GNxQec9irsTG7e46GyQxGLXz3zbZzHLbx5RvT2g25P2ofsTKFJdSsW5SgK1ckS9",
  "key11": "454zxkLTREPCPbmRNQFadSe1ZSBQQLdcpiCXgZgpLso95BTaWREhg3vs9sERY8BTz2iJ3hetzWSGwCBm44zUzxb9",
  "key12": "5xDZbn53DCa9jzTEKwt5eewYXrBDZbqrK1gTSSXQTWy95gcCtWabgusGi78W3ewgFF5ohHWU8TvmLQDXMUfSkHst",
  "key13": "2m1UWdb3EXgomYKVPrfETsxijE8iDMemAUAxsH8Asy2zpSDdYE6wAWhj7pNocDQSgM9yWKH8CWM6KX3k9axeQXfd",
  "key14": "472vRSF2WmWex6ns1kPX2X5azFTGNyeKmZDehe5XV3iQzW3LDKDqfVgc53B6NFtrcCvZeSvF3j9pSzL9ajpFuh1N",
  "key15": "4DNiwYJhv2yqjHMHWVhbT22mGhQLbzqhJRVfuZAR9CN71NYkEiYYw6jsfpsMmrrdYF6qfryrkdLZo5Ta9gQ3WDeF",
  "key16": "wFjNsNtMUMYtno1Lh5umvXc7RZQ8SmaDLk4dDHxnGpPaFT7HBNkiTHrv9iWDq1ffUZqdjeUeE3cpVS8aQH9FPxp",
  "key17": "5NkmfKUjtEEuftw9p313iSSwhV8ihhv1yiQBBNsfYgov6DTQVQ2CSX4tFrjKjLznVhwh4yk6hF5LrTDxaegheEHA",
  "key18": "661eGF2UbNozQ41gmbSAVMbB34LJDQgrmMhfDsferHUtvvD4AJ9ELC5s2ohQcp9WBWtmifYeb9c1Qb4UUZMwJ5Kx",
  "key19": "9JD9gB5s3uoLS7JoVFrZktL2ijv94xVqBD6HNp8njhSQSokRqSj69MXH1hxSThXW8M5ZHz5rfKsijs8x9HUQAeA",
  "key20": "4o9JL3rkCpmbFPML6WAMyH3CmyzE1DZRw31RfGkPs6JboMu4eeKnZfgFSniEBtQmBiR7im7GwYPJXGCbyLfdi4Ed",
  "key21": "2rq9pysHRchk9b9o2oUTxbonk6CuGrEtzjoAF69JtMS53jSwdPTKHqJe2c1icWnUvzWDsvQqhPaZsKatxy7cPrAs",
  "key22": "3gMLVquqzN7pd7hhqNgnkguJ6zN1d8bF4TD536j45rxWKdxNinPMyVwWqJqF5CLEZyRyq2TSeJPbwrH7XRLWq6gs",
  "key23": "5c2jLTD2erREFjceqZUCPWvSedYTVLKXYzmaL5e5cqszuqQB75fgR3ngXCN9RFbNshE4t2ckopGMYHt1UMXeZNB4",
  "key24": "9KKZbv5xQkPeLCKzkndaaT88DVvXvpNPnThMycBhkTXR2gugpDWidXp3PYLBJvfP1spfyb3tcw67e8yjC2X53Yy",
  "key25": "46eV29eo1t7w6THa3Nhh9bR4Vak7S8BTiUuPHyKj6VHkGkdvw769eJvXW4qnhotiAUvvN5MgNhLSUfs3bQD2S7Tv",
  "key26": "yo77zavBixzapaVthD9LBVpKFmcDZ813QftYZDVe9RmgzHPw4gBtG4p9TYnD7iQxJ1kHA8Vm8UjmMFkxAXELQjD",
  "key27": "5vVG9EUdZ2xpmyeDVbCqLN6Q1z7X2tRKx9pfJz4P5vaKr1GHqWTD5R4PTjKGkwopyoyagxvw73X3dtpZvcKyP9ti",
  "key28": "F5XbGorL9SLxkpxZWA1bq8Tp6JkFUpigyaiYEwP5PbsyYAz1ncwaMnXk8CtnqgjLkNeruUrwxrVpCBrMZ3znUkf",
  "key29": "2oqQCmenL6rGj7NMRQDKRD3gPkb2Hxxb9Yjzwrf14DWDhTkCM3oa1RnVWv8SMqXRxYMfgkKbXVJ5Gd5Qk5U1YYsA",
  "key30": "3MYj6B6p3pyCYNwuyDc5r19ZFWFdXiKnQVxWD1t2FV2Yn7suJuFwxrjndQ1novJN99BSTBUa8QEzWcowpkmMjNgW",
  "key31": "3AHVr38JkoFF7e6j8nciPYxogtvaZqFGnxcSe74N1hSgVkJ4n9vB37o2sas9kMjackrW32KR43KzgFpDFhLnQwGw",
  "key32": "4csFhjdAhUeUJByfU2ANV5w8pYp1D7myiHkSyMHj4bVxDA6DpFSjyuJTyna8wc2rPMZfjvwGYVPkR9amN7Lnvp2g",
  "key33": "3irXwQ7E9A1DM59L3uof7FA9FMFA5VEN2GrJCdckHhYdqyo6grPq2M5NiaEajqf76EPXwdJRJMoh4EZbXXykT9c",
  "key34": "4CjCrUinRnc8ENHehd1T6j2DjL6S8JqmrLerZC8EZWnU4L9qWGkeKsh8k5WVBS79mF2tdXQG5FFmaThZJB2p8RkZ",
  "key35": "4vRVLotqXFGbiTPa3NDQKocZK36ApzZyi3SNTUhUUZW7xuUoxpLXQj8pfwa5XLE6YCWsegdE4h7ud2PdukRCdESG",
  "key36": "25vzzmPRVnAxi5rSoULboXG3zygd3zGUq59An3D8wtwdQSzeSBiTbM5oveiwLSCcJ3ThR1tx7y8aKxce7sxa7HSs",
  "key37": "4heHoo8a3KjpZWrUTi196ZXXUDYKK72mECGLetiPq1ZxAegDpna8t53gvFykLFxLW5Zp26jFKe4FTC9jH5xXJALL",
  "key38": "3hAVAi9au8XcE2VzHNN5uZU9fiXCia3sYkGLyLMEcgQnz4DmriBF4FCuXx7vnkzeRXA2PaxsMR8uPxXRKz23N6yx",
  "key39": "4HoKTbpxpmghfnNzSFBEQK5qnuku7auP58i32PDJuJPY2xmQZazPhoRWLoCzYmZMWhaRAr1dQurMUexCYbdCfMXG",
  "key40": "c2XutcokMQ9K623NW1TLqE7Yzn2W28iXoXXgAtPk6xqALrByHDqZLstWVkZZL28RJ5xq371yBxibdTRVxkm4FGR",
  "key41": "3tyvbNcZVyxj4VBSr3oHtbh4c2S4eSJetwd9xrnWKeDqJwkienXd3UeuWuNcJYwZymSCzWUEj2xEayJq5kRrRVi5",
  "key42": "2YAehXa7N9xCxMDpUZTXgnnxBVVH4F9v8Bo9GUwR8cnHUUXHMPmEKYm1P8zU1QUuKpRteX9cF71BPurXFEDQ7ns4",
  "key43": "3fpMxRNkrGCqXVQ6niMsX7C1oUaM7jYmmH9KfXKFf3KXHKXVRCCPiA9f5xCbdVzf2SaJQSrowL2LXgQ8LVFmk6eK",
  "key44": "ktnWwLa6d42n4jSu2sJnaQ1ju4odoabaEwEEzhn4WAsG8thsrNGH2eqdBPyCKWxbjZkVCiCTVoqZ2qXVTNDSda4"
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
