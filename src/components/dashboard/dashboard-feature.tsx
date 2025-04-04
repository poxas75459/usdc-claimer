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
    "5pXp4CFSyiFYpePYMntDAAcWLCPNtdRVjf2cfBLJBq29LLFwbdi9cxfTdHXkXkoXU2zhMm2H9GXKsV5Sk8SAfwvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37W4TYVSc8BGWTEnBwmsFwUetdFLMAKj7Q6iwyYFec2xKbJL2S5XwJFPj4Z4n5orCHhykpgYuCE9T5A11sMxFZnH",
  "key1": "2oWtEuMkAxVKWRKfZRtPq4vgyZZ7Caa3NwhwXsrqQhLofuuyQiBRrJHaHc6CHxcd188Yy4dcpKWBtzHHMoVLjZpj",
  "key2": "4JUgYPy2qHoZCnUbMiJx4Gy13vL2WACAGfMbv2WaZqgFhgdTMN3UM6wUmj8F15bS6fdCXUQNAwkDV7jxqtCRxFQa",
  "key3": "GeENgPMQovjYsV7pF2WP7smCkugfrLcpJLBwe8dnqcuWwnVyM2mXt7HYz8LRBv1VjcARo96Cwv2nBEGP64EN3kV",
  "key4": "ScZbLaRv9bXDe4DZz7JvKCE3948nyJLY6W3kysWe8TuqMnSfEstAPFqPmgsN6L5AYSKEyaSVhdUF5Cd2o9ynxXB",
  "key5": "3YmhhmXB7YMwZzfPHQY46FyuWssAE8E89VEx6umd4kSDyVbxtEWGgdpVpjL2Y1QDRYQzvMukQBtkCowJoALkWpPV",
  "key6": "4yL3VR2dzHTo4PUrA4nNFPxyvqg6m1Tfq3TntpPP7yDr5u9Gmzj8ZNqfZkfwbjYT87BWoFujNtk7bCEVwqACtcJL",
  "key7": "Y7r5n2PZERSdX1xHTPnR13rSYEyXXWWjkVww4AKoFGwTV2ycowYKrr6krB37cP51ycuDEqMsnfkpKwhenThCtC8",
  "key8": "36g9s94RWZaN1pMuxfdLhke1h3Ra4ekkoBV31nKAttNA4iioDLFRooDrByfotofPuKmDBmc2x1W13hn6KSYRgp2C",
  "key9": "B2QhqzGLt2STnQgHkb38nMXnzGcnTSZsgqz6AsTwXTzXpt2TPsVHnkXxekHNFT8Fx1yvM5NriEh6aCoDF6n73t1",
  "key10": "4VTR8deRn3Qa6VU3QC71LiowbAGJQmbpimZwSbJ7xKx64HBU7k8hywB7Q7GSrg5AivvHW61XSuLgjCyKBF2aRW6c",
  "key11": "yhYgqQCTUMx2t64111B9xRutdnx6BMdfBA2PzgzsoHfkCnjfLwMexo4jTXTjqpjedDqZqhKeiwQXYdwqMUJUxJV",
  "key12": "4SQhwJHqRZQf8GHkGcj8VaGFCBnciArmv4uZhhsdAZXiQctSyLPAkfGZocFQjrtnP3QXkm3vQPm3p9hYZfFvuSCp",
  "key13": "4tthSydMGrhwgUrG8qJhJ7mAVTNqxoLWQKHsE1r8tSUoUeBWVZojjo7d3oMy9a4MnsNzqebS35G4boNtHMVf6Zfs",
  "key14": "3Nytg4fbZnVo1EHeniRUsuLRhHdSS2WakhrNipxFLGRRXtfUfoiQJ4hCNEwsLyaD3zoNNF4LXfqEHFb6KtngdvRJ",
  "key15": "4bjP7hhJq5BENHaHHWeJebqqR2qNuLnknXhSaeH27ykYdroTpEX46FzENw9yUqVRWoGeEMFtWLKVKaix312vkCrn",
  "key16": "fAAix2YJCGk7a7mYiF6XkvfPUJbbZiMJmi6XaeXmZ2J2Y8VAWhLoATqedCbQNJVzSXwauaYDkJBWKMaobeNM6Uf",
  "key17": "5rjhoGCkkYcfUPhAS1ysG3bT2XpCuYphCNkgg9uZtRU3ToFovkZBuKN4ETLGKtwCTRdCnARxLRHj3NvFyrvgy48C",
  "key18": "Ted5j6jg4Kkk8kmWUo9rS88qNgz5QWJ9Ag1uxamcc6sq9ZUJHtRsDXkA6xMbZ8becDNj6NRscVw8fvoanhiWABR",
  "key19": "46BzGVy4bdbmfAJVA59mRH9UtgC22tZrZS22gK6hC9c8pumhLX2qBQtAD9VBibXLUkFkhuJ5d8gvr9jveuCD8Sk3",
  "key20": "2xGxsYtqtGzxdmuUE1aiH9xGaEmKmgQYGT9p3FgPDqZ5FwX5379MAEccHxbXCbWbRCZUDi8BbKPBbHLPQ4Q9jxL3",
  "key21": "3F6uBezFPCxiFpkf8iwQMsJAzezX2z6Kj29nCTj4XG6es2c8ACuhXWVP28gD6aLAszyPmHF53rpYtFjku4JcUDc8",
  "key22": "2i66fU6R3MPnbfqxhct6HzxhCUpZNyiAe7bmtGwuTdXe2wpJduwxgJwMymPVwAp46i1zRG5fqcQbiiYkgavZg6nB",
  "key23": "5X8GRJ37EqHaBXU1fTDVyyTvmhm8WAirxeDm8mynXi6cLPvHHAtuLrPHqg4cuSPvEf1CnjoDrX4w7khob668uKV3",
  "key24": "5jomuuQ8GKBEVDT5KkgeZ1XucoT8rkRscDBpZoiNMWh32zCqstxvHARotLsAcdq69qZ7ZJymeP9mzv1FgwoUDCt3",
  "key25": "2N7Hn2u5Ap35dQ9rELBz4KBsevw2FwkGVGHZhaCk8YQ3koeJEo1Xz8hkVsbYLp8HUkaTZDYsmzfNZJtiWFrrMj2e",
  "key26": "56rB7dsFNvjpSsd648tVZfFQsgknrZ44MEjQHx2qpavm7p4Tm5JHmwsouTwNMgSwAHLGGh4KwQaAF248Y9nXJSHb",
  "key27": "2dT2JwfwE8dbYJfwY879Dxvs7fukxoiemuNiLXyuEqLWDjn3tRLJuCEzTTBqfduLFRnM6FmTPBQWTcDVLhFeSjNF",
  "key28": "4dm474mp11ajP2ty8kBGEmEfxiBE22MDT2XvuNap1JQTtAdHxEYS3DqZ6pUcYPChV5XatgLhKjsvZbZdTftDc4vk",
  "key29": "55gjkBS77rXoX3V4EtAyfRDwXEf4HBJ7nUEMnNmqofzxmoZ7cb7GSM2vCzWbVztESMzzwr3wKFF6bHpqnkrtEnHc",
  "key30": "YpJeZ8Jg6tokmRq4PXq426bNb3tR3mK4aVDM8Rs1pxHsStDRdTikYjEskQt3KxoyDLP6eCV8FAfECSzGQYeVwLf",
  "key31": "532Cv2ctRybvKVPRFDzy9mhA49PXbRgTwbSSmSLV13y4ZkD5rDpzGexA2azWX1rfJacJm6GjdMuL92bZVKkPbhQX",
  "key32": "3ur3WPuLaMxnuWUHMA4GXy5uFnWe8gUcQJaSVz3HrVwBoMmGsJWenLykeBoj8qUVBYjubEVdAdHuRZTVQ4qHqPk7",
  "key33": "32qxRCqrQEvF1FAXTweMBEUVRetCrpg5pP3Qm3md8ZToG67yKTm1fdW7UDrx6pUni8HsE1NBdNhWetpLFBTw7D6w",
  "key34": "3eCCsKmTHYREsg544hSREfJj9rL2YB3k5LBaiPCwNVACG9HQyFp74c7sQXpgSLApKnLqsANS8W9Tpt3L2o47udTG",
  "key35": "3Xb2V3zniEcbxmF6HZMwsj33p95RDjtEMHWohLf58bm3isQZLhbq9T5pNMxaB6FmXuvtVuHc1r4yjMdY4sF74vtv",
  "key36": "2e4JuZNL98hSvyKWt8VGToquPEXRxrfstP1BzFYKLPHJaEjZAbUXcACrPrXPHHo3VmJp4ixncMiqKo6U2rcYk34R",
  "key37": "3gW1zXCHmnRetNjDL7Liv6GRYEJBVwXta9cDEekxq4QDFDsKsxYLNN9ThCvTse4Fj8kTVFX6AJ1SaCoUPYNqsYhF"
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
