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
    "4V1yEue2nRLhDobkib5YmMd9RQbd7M8NXSy4cyiX8uY2Rt8ME26XpHLDxsPVgRyiYcuqXsnmyqWgrXsArUN7TaUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N3hWN9AfA1AJ3nf91x3Uc5yT6QzpsYdYMguvJLwfNzPcABnRG1adsSAXa2QakiQ9VsKWrKCBvJQaM31tgUE1M1y",
  "key1": "4G2wjfAs1zLq67bsPZ7PwH7hWKg3wPg8dJYPYRHZQwP4wmY5Ar9Uji3k4UKeMKzBx6Vtapjkz4r7p6jBxGv7h72q",
  "key2": "4ryvJZihf42qfQit2fBPULvo8jqv4vrzgdpjCQJrs1PXFN5YcGAgLdMKMx1JDJZ8wgp8rnZE7k8pcfd1DuYokAGw",
  "key3": "5reiFk97ExkP44yXH6tPY9BVKpAKui3ekQFQotXmXXezkkenn5hP5Lqt2M37Y3QaDWinaHP66TgzfMsdW1Yqaejz",
  "key4": "2Dd7L3ACEKYrozN9CJGjVa1Yi9cWidPTi96iFXUYX1VhE8s36miNcXsPsCZLVF1GUcXWsDM6j3Db5onx4717BE2u",
  "key5": "5vXQN4pUhhoRTDMQaeprbPGHTn5KHuNMESpsibUXYbKQGQXJDprhQjHaoujCDqwtb7naHMLdTdtd2YLG3Wx4aY92",
  "key6": "3V14ne7BzBRAGwzq1UVQktV8nwJVxGeXpjc7viUEtPc4hoRtDy8envZFgAseTn8QYSEeqfqvF9jwscAbFqMBRnzn",
  "key7": "L8JZYdbZh7CwPHZNMpJ3LeryL8tTUZ2xRBHYwGFMKZCMtrt5MMXzes74CUVgUv5wskXG3Fu7s2kV3m42VQXETPD",
  "key8": "AHb7KXNL7cWyNpyznf5yegpFUKoAW37FUsKz8mrRzPF6xdbv9zvBUndmumpkMV3Lx9EHokqgYZrLqoeiQMCULVn",
  "key9": "5hwEcSuTR9LhUnzP1WT6fkS1m1ADb5n2uZCNku7hx3rYXP5CkawzrNj1s2C5zN1yRrdghkZdmcbLfXNM5zKCQbMJ",
  "key10": "2Y92kRn1u7pe9Lbc2repnQG22cjYXBk5a8P66nGDHSD7RgC1qeQpFh5t3qFs3mKEtBwdw9FfSKCdpjjCVNfuNBbt",
  "key11": "5GKy7hAYYFjEo4ZUgWvY2kn5RhTjCD265BfEsDYUGUhBCaf3Kc9aysV14F9MYoMBGg7L8jhnBrhzgspjDmjVKBCh",
  "key12": "4Fk5KgMyFYuZK4mZWkkeDH2q8uU72Wf5fHH4nwBcFvySPhzRsjDee2gFtjrN1rMMvERREmjNfLeNxk1nNaQRiL6k",
  "key13": "vAyctxoCDtV7FG2EdZW3u8hPNU2J4U1NwyrZCuPyLUUiYJph8N9Ufw2g9xbgDjuS48h5HHPnof6m6jkbrvghZgn",
  "key14": "5zKMJCdk4QL6YRDm9WCjg1ApYsYwxtHMKt4tTrR1a3bpq4E9T1BmkYoktuRSPNt7F6W4yKheanrkmHhahzbhdEw1",
  "key15": "RWcLdGfuk6ejzjtToCyDiRhjJYcTDrGw23kk4zUDGeaz6RtFg5EVYqnWzamQBQTFezzs2MSfbTeQ7D6hE4o3mXT",
  "key16": "hf81t9VuPSuweUqna5nxh5AcBDwewvA7ornRnrXWdFKt48W76TgBRpzDSrNHmEQRTrH4yn9DXupBGMVd8f8hagM",
  "key17": "61wPvtFHn5VGeXrfQrzgi6r3mZhHFVBDaqpGtMuKZfiiqfRDtYqDiBzkbC6c4nUChgyzzq6SDtoxnw7bmZeKQtjA",
  "key18": "3THbWpnc1sfGkMNdfdoK6xU67SRihMytPwboKpwh3xeW8Z44H2ayD4uXBLW3K4TFzP3a1G2JcRAxAbMKixvdifej",
  "key19": "2iv4Ggqa5nNfqkUYWXk7KVtVD7WFL83i7ZxiCSJV9vvfVooP4HtewfCacTDKEE73NXB4AvG4zT3K3im8UD2aNtzM",
  "key20": "JaD6rydpryErvgJQzEU9KXxfiveybNE2Sj8Nq5BTAf6VUAWqassSuHWY9w2AqNa3R1PRSP8oj1uwbEeJLNN1tTN",
  "key21": "5EDf5VJZD37iza13MEUu83r7HhwNQmYt1V5f3z9KTRNa3fXAmxagFQWPDQUPC1hrCJd8c79FeiyYh8LrFP1gLiDD",
  "key22": "5HnhQbNw2R1LuMX3RYV9kSXQMzn7JsnpYe93HJVTyxaGm1k8gkNdhvW8VbmNre8MeaZMZqaNeGFBLxq4tqnsFRNN",
  "key23": "4XMpMGJjAKaaGkhoiSiWrA7Dw2FEVT6oxcWBetvcJhbGGQLASPaHozNXF2h5TTXHtPLNwQHsNMvBNrPUJxwWAP55",
  "key24": "Ba9Hy7eQhBTYHJb173xV9uoDtuTxMRvsHH5LkbznTT9ZU1zJShAatsj9ygHKocyWtT2UFFqAsWAUgwX2UXeUS92",
  "key25": "2LAowBaKogaE94eGTpEPRkKiNqjPaiY3NYZ1gVt7HxeVbcWbemXtxgg2vmbfGRFLcvBJShmvuxgLujvgBphzJVRE",
  "key26": "2FdQrUW4DYm2YTcN6ymjcjmgaRiQxPSmNoQXR8YGCSbo1xfGHd2pXR5UJmz1fn1fYbxKFhWRn7xP6YiYXf3vgjXM",
  "key27": "3UiYN2dbkHGzsE8hKs2d3m8hm1Ke4H2p9UgEyRYVsd41tAU21zCHRzhkLcXnTh7rxMhnEJsDVpXSmgMmcsPNEKtW"
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
