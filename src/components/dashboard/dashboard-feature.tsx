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
    "2v36sWCh8x8Zoyh7FQjgyVbAAJY5myj31HPiXXiZCHcWmLQf1RJWW9grFnzTMfvWAKCcFwaG1DMDTxCErttRJX3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3nAHTwPrkrYDg3gVXXSoRNJvfnRG5ASA6huD2qzBhx2A7a4JdeNQZUuZ6joCQKKfTQ7FHM9W7yombdvc8RwSNS",
  "key1": "5ASqCxSEJi4wBkjfSb7Di9mhcR5NAQhiW9C1KqAMJmYsu2yoXKu2DPFK2y7GoASrtb2ZtRxS1DYYhJY3NxwmQgBw",
  "key2": "4uDoYwFsrCC5YqHCU3FzMQUVqSmifsX6JrfqcLb7o8cJ95wMwLpdWCA6YjGrSfyoEe48wehMFYnDreYTEjHXvo2n",
  "key3": "33e9SBXvo2dkvAiwNwpY356ZTS36LBgvs56jh8ZPbV17YCNmQ21MrjyL6HhRGR1exdbHZABJFNUN1aZ8UxemvxYk",
  "key4": "2AZ6UwEQz2fythvzmmit5Hg1LEniFEAqR6tvgvDxkBKYoWunXtW8RaLJaA7GnjTwPv8FKHHUcMAFYoT7PwV8xHs9",
  "key5": "62yvLtZypQLY4HALrZQcseHQG51BsiMVaovsbkcbLDJbsnF7RR2bWJ9Cw4Wc6dUbqzLpTcisYMQfKxwTF3nWFWAR",
  "key6": "GBnrgL9itw3nN8kAGLBm6Y1kXWJ248KCXKffjAZq1ENYeDiDE8LQoueF78Wj4sEoo38VyHJwEPxKCGWjE4HQVjX",
  "key7": "5eDZ2oDYmW9akWFrS7c1tMrsga6Ta5oQPetvKBajiKfqzGKjDZ7GBxPqB8GsuKRKTCGJWKMD97AHYWyNMecHs9r3",
  "key8": "5Qv5Mn2zMQbsEd9czM6mmK8McrnXNRyKZs4vPH4dDBEkmpDDhZnZeLNgRSsNp99cNBYntuwKw99Zcdb1Qnw19kRf",
  "key9": "2mZggXgTZt2UFaAqnRiQeZ6rBZfovCxckYJD8reD8aUFY6rDP5ArLHJWKSDKhUEqT6vW1A2n5aWcQVU2ezuToQeu",
  "key10": "2T83xXWCLxBN5HAKELA9wsjumsKHKKfyBbzVv2tvLxVTjcB3eBxX8CBxWVxWSGj9thAsgDte2Zz9EW6aRstPxkV3",
  "key11": "2TxuoxZFHyd59AmKS121sabbNiLQtm5GDZCPm2chbeYeFirY5fsC6tEYA5H5xLxp7LGRuMWYjBwzLshUZ3ULxJ44",
  "key12": "2EdKwTEa1x7Vpn3865ykrCRQyVFqAhWhY3xWbXEdHWaAhayxjftcGSxcp6pXKGQM8Q7c9FKMYrwYJmSP1SatZvJd",
  "key13": "3Rh3CGCbfVJugMMqFtp3qNUqZhc2Z8rChFHLobwXPYvqsWUR4HwwuoejfBw93Wjag9YS4wxpJH29uZWsMX32rNNZ",
  "key14": "4xVHgS43HUUwPnkAbsNnJMvPcgfYKD7RDJpDbqTMPKaCqo5ohk8DAM1EX3ThrXasC6tNSKLb4VcEe4VyVjV4MQEm",
  "key15": "2cJie7otU1S9Z27yqMhViTN1Gadg2kMt99by5GKBoRnzua88rT92VhGkhgmFXZED97cEuALsbSnXZbX8JMqDqwL2",
  "key16": "wCBthZx73G5PqsUMPKheBSLY9oBnCbSe8pNjtwKFvvNUsC2tEP1bAfEXxTA4samEeAhs63D2ozQxBXUZjgCf4Ee",
  "key17": "4dd1cnPgX3Dm9pAnyA5AR2gJxMdKMEnv22Amq4kmARpkmQ7ogfroewXALcQDqjkZc2gPnkuGDLcmpYzv3iNp2roG",
  "key18": "4tUYrukyV7w84KNyhyHyBCTFM6nqKB6cAJUWspz4ZEFs5p68iv3G2WpRxsWYjAPLGC2PD61Bdx1qSZGaWg1GUzFP",
  "key19": "2izHMDmZTZc6FEWawLuUYVGxix7xsrc2vgwwHZuyfSHGJwkKj97rSPbRqF6Rq1jnXE12BQwiNWYAM9VfbQ1W3YTH",
  "key20": "4xMJK3tWaP7NWvnrWNgfXAT9BWaJm1sU1ZPfzxyJSNhAPUeDTkRmwCShpMf9oY19xGmGSVQrEcoJyoaLV8udNvXk",
  "key21": "5vuG2opLyzi5MKNL8Q7oxahSQ8AN2zUfDbUHALi4zuuPz9qQi2zb4oAbBPaseUr3oX7mWtiz6Y5zeiZrRsPkVEpU",
  "key22": "3z6AhG7CvEjqydvUjNJ9ZTrJDLPjXbUQmgxyi5naZP7JjEuQBDpp6MUT3C6s7tV1eow9snPHHNFKfvFDWBNtaDH4",
  "key23": "bU9Gx7vheBGSEKAtjzxBz1tmBtYMGLJNsunkKaJ5QxXeJSdDMEtJi37opCb9AMRXk6fvFHDYLvPRihvFZycZduW",
  "key24": "5UX4V6eZ8Ugp2zmXcYjYY8Xi5BKM7bzPxbBq1Aunxis1CyRrJ7Xg7uBdezwqdvMqwPR7JfwViE7rerff6QP8QW2h",
  "key25": "2EfpMpwYp5af892617bDvdMWrhXqCHBFcWG3paztGSSbn73B9S3eWHaqbt1kwJBQF4X5tg3juUVhPA5emzLaUeLw",
  "key26": "2pCYwcdY2JZ5dCc9buoF224SACbbjjnuCUo3udcdaJSLKdPzqAfossf3iZb3f2PNGAs8RQKr9ZQgVgUH8nPFmVDh",
  "key27": "4xQCzjDNwQbadzCaBUPYTBPksRFRWSrr71vuy6dmCYm6tuzxWU5FiVpPQGCbKkLnUTru9t1vnGiRvYTENEqDESRt",
  "key28": "5q5P4W2ETJrRb831bB3XBJ2q7w4XUhivKy9JiLqy3JATA8XGRuJTuP8dMBJfZ8Tyedj44ocpKp95eJaRB17kPeaF",
  "key29": "4ofXX38AFHWaR3b8kFgVwXNifW7gauZCXFLkc3nk1MQ87JXKrLRta3pLNDKHf7z3CaMUwQiShurMnUyppSQjBjAJ",
  "key30": "4VG7SfjRhjmFpASuP1nr9ZAprFMgeKdPyRUY4nDj226FXTfyr8EUMsvGfsRqSnaj4JvikJ6Xcrk2a95zzcN6Bk9B",
  "key31": "3ZoejMCbddfPZBdhNofSe4jZQoHKcMi4HeywWGjUY5uVZo4DnBYY55BN2xZki6Hwc5KMfreNCp8c648CNcy1m6fa",
  "key32": "woFbabDJcb71sLShXoLp6BPkaUnDAcFrgo6qWvnT9bQLm8v2SBVLgrPysKgi1n8JenRe44M7reAscPGEHABaxGF",
  "key33": "32ieqEdcg4Wp3xmUrR4LmbwV8TXpsGG5H5p7yghCUntjnhBLFeUGiUqGeCc1JffkAfh21bRYqz9CeBmNf6GtpovC",
  "key34": "3zREar7pFmAeTZ6mkLmLCRPvxCYHxQTNPNrExgPpVvZx3Ux2w1jozY2tBz4sCFgfbxxiK5JnhgnLttoiEEK9GykM",
  "key35": "67hbQ3fYjKdV53iZD4Fo8ARDDQfAzQ9z79pUfEmt5urHabep1FKAqDPH11Rey4tLZ1BEj2R1ZKQMJRApcJXSaFjD",
  "key36": "2E5kJJxStAtm5U3NM3gCGJp2KxAoVxoKC61Cw4W4hrmgunGYPuQWDaxcfPcoR65UycPVuQ1ohnvA9Ub2kkNQpDeH",
  "key37": "2UrTiors5PWYWz7gJtSVBxDVCUpuDeXhPhMVkczfsvq9gfTuW4UpQP9K6c3LwT3WupZhr5c8UMJ7dkPX1Be4kGDS",
  "key38": "3LJmgZ9r5zofxKrCqYwSik1zPWNzNj2ppgJ4K2XQbwsr3rJpe7kVWAYRWFShYRmP5QcH5YQsdbbCnAdQXKJhhD4b",
  "key39": "tHZ5NoWTDgR9eKv2L67MsZDsqveDgmABxPCretx2GjnioTxVprw4u3MMympiaxhLgm4vvWLpv549q6jV4JsRT1k",
  "key40": "fvpjXfmnrEyixjAmXqaBMrRpK4XDZSGsGgauxtoP1DvMa153iQiQchdDyWnXUyj49ezqW34TbAapDuXDE3ZcfYp",
  "key41": "4bfoQC7j2W3nE2GrNNEBzdys3K9sYq7ZqkUapjJJArZKnQkV1eyZUmrK8N7dBBFXwTiGV8RtJZFRcNXyWqttxJ7R",
  "key42": "3Ws8SW7oms7KQe6ecb8QCb1rgpHtxQ4HzNGjFoxTbDgf5ewxkEDMoiWkcqM2SPFknxuwkfjQpMM8mVDiQcsNEepY",
  "key43": "2KvNYzmiKDrfSUmqCWN52k4dgh6U2Zs6FyLqnHF6dwXzMws9E5KaHdnaJbp8wczFj9SJ7P7pQUbDPdu8tj1Y1tYN",
  "key44": "4EBvDhEtgmLAbn6E7i7pt4DeQmuxxnNqjWmthr67Ugd9qpXs3y4px59hssfZ1DLEdZaUvEAHWdGfCGgHRkVrNtwG",
  "key45": "7SVKwqufQ2cPtnLYqtjNYkX9NGTJiVFZ4K5qs1V5ZGDxkTLXKPxHnC6S5AjgzfyRLykTwSnoVDxHPtNNqxBHoDf",
  "key46": "4wepqAiCrf1fHsR9rGLDeSrEkqEHRH3BG1VH38EsM8TZBsgHWFxoLuLfrC2ALaB7SVu1dGiSTRgK9XoTPeEMAc1N",
  "key47": "2ZpjewgaJeQKVEMuCUCANszvZXT5mwpPahVb4qYCpEhjHFtN6Zwq6a9iY1mXhn3JkxMxsEu9ohjcMjEJZH3zH2EC"
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
