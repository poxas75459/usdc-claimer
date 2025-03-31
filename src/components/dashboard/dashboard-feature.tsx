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
    "3pH5pmMFrshSay41gzCV1DBSHhrD9UBvGqUR5WmKrpXn2Z2WLyfYCf3Ck2fz4zNAXfdHzHLDNjPAnJWmVsLPbzMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q5t3GWD6tHfCBFzDVqw9KKQXde6CF2CBYGqQQiDpcbrkSwHeL74sEbmDGhzrHVYAYpXw2pa7t77AZcXmjKz9Zpk",
  "key1": "22g3ZWJfjQFanP8KRGzhZPU9UaZ7Dqm9yUeREAzAmW9j57Wa7D3LGUHY2LGf7wCLiToYgKxWa6sJYTzWMuUuAR2d",
  "key2": "ercgYnNQu1aHnwwmBKZeEV8iPzG554u41Lvz5so6rCfJRjGg6nvbERAesoU3u4R6jcezorqTvajhoYX36SAhpEm",
  "key3": "4rrfARsMMwmvsUS9Q86w97MVE3dh7w3tgYrEw2QkkHtBvVHxc5yssyAnHveqxG9WciinJMNEAbi6V5BvwN2CxbJz",
  "key4": "57H5GzxNMX6vUguAhsYzBZciyTJeBVgUAn4EJPE32TuTmsNL2VQ2aZ4ZEVLwCR6acd9XWukkMVbTVkjcMCJqWt2P",
  "key5": "3YskuKD1VnMJTeiqVAwh8auzco1ztNUVZSBrEmNk2Mhj7j2qor4WD5wr5FYoMvtK6dx7xDpCr1oqEQaFCPvxSf4t",
  "key6": "3m4SAvdmD4oMg9zV44EJFgFfZjXt2E1LtHqSNUxhU4xSeHhqGj14UCzd9JoU14dVFr2FvwsuoCDN3cD5DptChkc4",
  "key7": "rZLJwznkupMEx6aLJNADgR6NgUDP1KFEBhKqcgGQ4bvUjkwMwA8uZMG8fY9r1rxipJcADaMnUpZybWR6HxEoPBZ",
  "key8": "4MNAtZe7dqm73CNo1US971p5uFnhLPHPb7cbYvtR8C6Vg1GwbVZK11GE11RDMyeXS9rcKiNpjYrehpSksMZJhTFN",
  "key9": "4ord3rBJkAxqg6QmfsXicCuqMQzsDmzu95GgcNw653yVWhp3eTdZM9Ft6LqNQSC2MrWog85yqLkeyFDq7Qkz5u9K",
  "key10": "6J14cSCD6nafvJ3q4GygSVnPmGbMnqq8oTj7F7ewJy97PHT9Df9QN7V7zLwjCG6MXo2QL41bceeA5tXcwjCqLwb",
  "key11": "2D7EFG6wHqk1BpvReTfs33SsqyNfRwXYGTpj56cxPaSdL2thjVWn364PjLAf6np8rNBLEd5XXRSD6nko8gC2UJ6J",
  "key12": "4NhXPLwf77ztaRtwimDYrmz5L4gyGoxM9h3xm9j9D7jdGwLbkn1hBbe9yRkLcvU93q5dVfnviQuxjwJ46mYnkPy7",
  "key13": "5pNDewr621Axj1rS31ibW1Hc65v4J2zfQEfc39H9v6TRL2xxrQjQrNQvkRQV1LzCAvP9zPnbeZ1jLB1Xp6Um2YiK",
  "key14": "4tGYqkFpVa1GzE73p6EAJPASLzZAuF1E2mH2ynGE5BR6NndzEJN2nYw6CgaLcpTt3rCFVjhFBkKTtCuJvPvp4dju",
  "key15": "4U4qkYMatsAiUVnsUDpFAFUDo3QoAGq6S4iTDEmBhytQVYSF8XXwSw4ARdvZuwiZn9hGMiFVsFrW5iazFrK3dQiC",
  "key16": "5ENJZmQtTZ9t5YmfxB9pok26CnbiKmRNmRcBPrP4WrYT7cjT1xAiWPA292CZCfotEwSmEQVPyj5RMxMCVQ1zbse5",
  "key17": "3ErrvJ1Nbcb2NBThsVQEg6TUUb9dJ6TajfsPv6Z3nYYzmGJAohjN8FRsjdWrckdg6aGAMJTZsYpWvaa97Mm61CTc",
  "key18": "dQpoXsj9XtyRc3FXhK9SkXUMd6wsjmBCtzyZgyEixopJ1fQu5jrVoSXjwvfb4GErxJbaGqEwiDk1ezVNNaCbEPq",
  "key19": "2R2GhPyCf7eebAkMa7t6sBoxXvyUGF3FrWFY9s6UGZUUYyL7Zgs82FtxpxY99U9Qa3coVsSY4Ee6GXYa5ro5SHRX",
  "key20": "4oMjtuj5cZevWTpCZ7ZM7BfdqKTBUbvePCcGcrJw8GTMuaWJto1niNxTLo8PyqEux6vjKRMpxPnj5ueDnZF7ZYAo",
  "key21": "62cAmoDhhmwapiKvHGwihoYTqFXf8cQMxwzCccbCg19Vf3jjVRKdk76GAwTzoMhYWYwnqHfXzuRkmqJBW6qGhNzd",
  "key22": "i9ZEVWaBaPwpw9u66R5z6hUygjBqYgtMPQMiBvjZAJDugNkzkmMsgWJKaX7uUT9RTmJBWUKtomVRid1KacE5p5b",
  "key23": "5nbhFdsUo5Tjd5ATyWNQ94rUkgCJfpeVKpfuXMB5WdNYUKDKvK6ZqMHxL9WaETFwXRogFzenB3p5BkweVLrMzMAi",
  "key24": "5z4ux8DzDTy46SpJp4E4cWysTeyy6hp8XeTpyDeTb8AZqSd5YHvAvXATQjnKAeazQkDu2QD9TLv4J9pqqRgDeEL1",
  "key25": "3Gsw8ogrVmdi3B26vMdNsjYwCpYpYgS7MYMgJdT2yL8tPsv5mreawJwUhDnLdNdjM56hMJx3e7xragXwgKQpmEhs",
  "key26": "3WPYUQWAG2s9sEV31SjQkkLbPyKhL8Ri4vZCbN5UJ31pw1QDAtBB1PmoqgGsEEgKmQ6xgB24ePUAf1qPx8XGbQKA",
  "key27": "36nxKgxodHchYayoLXjPnNuky9oBiAQ2Mc96V2Q2DB4YH9PnYEr1nTy7FGxC3EzqsNSL3SJy9btjNCCsNDQLmvhm",
  "key28": "LUhha8UrFDSAv9b9bt7dRQkzf82uhUBZPBH7ikeuPAC1vihiQQNsyA1vWtVR11Re6oyfujuLyegKyC8KCfZpaQE",
  "key29": "4oawBJvaGpjBStVL3xWMyfUi3jUzUaWCW5dEaSgRYZicXWGqqLvGL11fEymmvoe4CCHLEVs1PhMRo2HiZvMkyTSQ",
  "key30": "3aygnEmxmyEAeMCc4P38PMR8oXd7xUKH2PhYYq866gxTmtqtDgLoiUMwsnjEER5aw3mWwZ7Y1L2dzqY5em94u6yD",
  "key31": "MqJR5Aqr3Ca5oHZdYobKhW9WhtUanwUJLLtiFGzs1pK7DbboJyWKwAkr8SYj6pjr1JKGmmWYCRr7utLU8dCeNes",
  "key32": "evGoCu8fTXpnaoaNFg1vBYAtXWXScXLMHyCHHEtGrErX5wa6BDKMrQ6Uu2Wa39cPWoLFN5hsH5n3SEdjodZaH64",
  "key33": "3pTyJ9yErKHtREVPqxWYNjk8DssrwAbgVLEgAdVCCGJRt8MSHCLFoJGYvMXeLBjaJ1HqiY62omxL5BaZT87fuSNw",
  "key34": "5cGB9qKA2gTuaGa639QQxoyqQuLHqkYJ6nfX6Vb14sw4hoZSah8KFi7gHTVfg9SSBzkHCewyjbXgrh8A1CwXALtR",
  "key35": "37YMXEEusKQmr1t9PwtaLVudVBJ99PfttNK6MgfH8rBSyowFBU5azg6qjV88C9Xo48BKWZhRRh4f1KYczK23PsAE",
  "key36": "4TYWoVHyLJqUPeFBRFq6PxjjG8yU3fXi2G3DXpNb228dpJjTm73hmUMXFXA1CRjDmEVHq4VdoeocFWm85tnJMPZ5",
  "key37": "4WosnaCoBJizTeD4n8THxnzJDQCzBiTm4UStLQzRp6K8EWdYcCTCyBGHNev8kwyt4UKLBwjwrwvEJ9uWdRRoiADq"
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
