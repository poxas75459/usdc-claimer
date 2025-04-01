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
    "46oVysFhb5GAX4UphjU1FHzdxLovUjbfkPhA1gqcWzkeJKSnxBe4FGafoFH3i9RuLPAfg8ZYPz7Kwpa4dLGWq6Tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ryip81CAvAanxWvZiYg4e3AvKrSFE33BwmdL4Nk3HZ7FsbadwxpLxhXLPCyfwS49SjhTwSK7kbSg5bx1Mfo4uL6",
  "key1": "4ZUtfP42Z9xAKHWxNavNSsGJSGNvkZ37yADhwFhN298bZ1t1LEEDK5ri5szgvzhz4xVhUeN6kKeFVXmtNx1yC5fp",
  "key2": "4boLuHcKJtrmUH74z7v4yBHaMJ5BBtj5JMma7G7rsDuppSoWxboEYpZnLbVwBCNMciqLXGhbxXSoEMQY9VpiVHSm",
  "key3": "63Dv48ac34thicfbEJkM5MgTeiaGRCe9osgoSj2CMpZ6GwETMyHKazfzzG3dAo2yRLdieeiQcckpe1MzbUD6m6Qb",
  "key4": "3VMdAhoiqs8grVW14tNnZDNjGbBUT6biaAbb6ZaCrkvzTxYw5J539B5ptQvSsfbcwg9DgRJdVGWxqSWuavRLm46f",
  "key5": "3jVbT7YhkiBEkfjaEea7kqxGCk519jGP7ST4GKXYxJVua8faX4Rs1d6fodEqc4Xc1ZkqBUxURV1Es1us9MkMPwcR",
  "key6": "4G4nD5uMhhBNUDHk7kr9ptnM2sseJ12sG8sKNH6JeNLWX43siMmhtJgzTQcoXUF3e5n2DKsdECEFxHkYmm7s3BGs",
  "key7": "4FCwDaA5yBPgrrXigmH5LteyVaraefdVbrXviTup8Rh16yVXySP68VHZzXX3SkCpZPx9ZnGUo1fBzr6K54HL89Yn",
  "key8": "29Po9r6DgCt5tWFUc4Zs3QV7oSVmzohgZBrHkuCZmDxaY6KLdZsocGMWPuiXb71u7cn2ekqs7CfoxxnvTkaW1fe8",
  "key9": "43qrsJAfSXHBYLckN5mwmqvZ9hf4M5iJwbUXwmg3sHqVo7WcZ3DEVpJi5QZA6a77AQBPAJgfbvXLqNPLKhjxCDcM",
  "key10": "3ppAgSsBQkF7Y4KTL8vuHXE46fJK9mtEiuRQSrsfZHrG6URNauWaDnaPbLawcN16jYE5ADRtK1oVvfesSHSQGU3j",
  "key11": "281agJi7cZt251vG3ZC4mRVzMPtNcHFQkAaMM4VScwZsRQctTE1KKcoPpU9g4pKXJULiGfMxFDcmdE9TikAHM5Lb",
  "key12": "z56f8dW8NcnmVuAHiGysjSHS9WzmCy3eY7Mj5fv4efx7kbSvdJTYWG1CEnw135ZzryywHVvqsa1JnYrGzkHPiTC",
  "key13": "2CQdRq8DSzedCERrBvnnansCZPNCL2en4AEAvRChknKv1CsthaWpt15Bk3GU2AjRtsncoKhHvKfVf8yGjX3bdns8",
  "key14": "55RH5UMn76T4MJmEZkWc894y5JZycXiF6z9HJD7WCFXPEuvdjJacUhbaMkcRWr4FMZUEtm4TASaKQDDuLaeDWh5n",
  "key15": "22qua6RssaADwp3Agf2MuJFfKP4TXMEUHUVMCQ8GgjRbR7aJXMf2UUBmvYsNDTxp3YTRBYhenp1gt8kwKfVrupVt",
  "key16": "59Awoa6y7quX4GvsoRghyioCthd9v7Z7KoRFYzhNDKUKS7aKsvgwasAeYzoRhMuA6TaoDcK8oVLBewctVcKR5eBm",
  "key17": "2Zvb3mMecfHSmAQvhFe96WtpB1Hy7SNj6QYDn3r3jXbWjgXCJDdhsP7Qd3SGFkKXAKAZZTJiMNUwg1LPWJzmxYSb",
  "key18": "3xe8eTDTv9vV5UQ9gPG8imMtrAVq4QAoneAJ3U9qX3sn934QXxrP9qhYE5iqeqeuPVfN66G5WXWznFHutV7WqYDu",
  "key19": "36mZWPCZFzJmgzwrccvCGoNYNpNqL8DHvihcDNk4nUMEodsc1Ju8ScvVd345cj9KVEjL42fTavC8xQxBByYQ4y5a",
  "key20": "28C1Hh7kM9GWnchfoXNMdAmnkbcnoDJJBxQxb89Qk1Maqokvq7QTtiLakcQLgvz54KqRxKRxH5pn5AX8QhS9mMsy",
  "key21": "3jzLmWziDpWrx4YykjQ2UMq5wwNFsAHph4wrnP6zNRZqmiTWLxLuy7nDPe541J1VDG4mc5yXRv6BDfQis5yT53DL",
  "key22": "DbCUhNt3ukVho1FeQf8od9MaiVRTAP6QUax7y5tSDcBXGNYfFSJcZKLFVLgJxVTz4LeHvCpbLGASST8SHfC7Zo1",
  "key23": "3azKSbLxPJ6irqdu9NEAWrrxNMqnk7E3WDAAKT3y3TigDfEjWBKiGQzfMTWcEQhnRyk1f9YuSNPvVg4KUDrMYYKR",
  "key24": "5ud6nz6hLA6zhBiPW9gMSVA5fQC2WooHutyn9c4qhynNwAimQGENSdoDJ3HKqQHYrZmJCMpzR2deqZYqtqZCFm9A",
  "key25": "2k3DiPGpYv1HdL2GFMURnpzSQvDZr5eNNMJYrLBahBm8VJSCmvQnTSgcJqyUYg3tD7kV9PEzFyhBMUCFL6QVkeDk",
  "key26": "4wwAHSjgZuc3C6a2wxboeUVde44zYnRwLv41Wvp57hsCjrSEW6RZRYuphZN2QNvjUcZfTjJTeVW7PoX4EhCXLnVe",
  "key27": "AqdBQKGjiW8P5DCpJMtRrF18EHfURYDxNpR9gKpMntbEYQrxXyaS5mjS3fqdWkaFVYFjAhSgxyfY1iCWMRwhnoJ",
  "key28": "bLyoUSfZg7iSabCgeLMgRnTuGKhzGkeJe5wsAV4TrTHWsBiKTv9ESwtmiSRRgBDPnoz33UqYwqCpqNenEgaATPu",
  "key29": "3S4NQh53GQn7eMScZ12ryhxVb1nJ9p8dxU73CeeEwCT7mnepMqgPt9UnFVNFuFFw275qSWDjESQzGEQ7EFL2xm45",
  "key30": "5H6E986iJWQ9zydM6YbhfnicZSZVtmyPvYuQLTJCHnQKRc6fuR7xxxdAH816j8JvK5dwaRCZYj8LAaWMQj5yigt1",
  "key31": "2CfSsPzdcqLXXkmns7Bqe64tp9UTtGie7o6q6ofjwXy7v8fG8vwaWjNsjiNWUwJQaPDfQnjspv9AQnNnoVr2KVJs",
  "key32": "3kS4yQK67KCstJ74SyYXNFCxY1rycL9G7943ob83iu45qq9u2jwjY5RCUgrcnM2v9SBLLJLGHkG8kNM5999osGn5",
  "key33": "2dAKTAPzjiKD1t6MzHAH76Q9124fpgKECGAh5e3QSuYNLcJyo2BfFm6ktzAe9mzLTFXJwM1KV9eUvnpSPPtSt9ub",
  "key34": "3zTZVPvNbd822p2omNVifnCQxdg2A64RKW4z7pkJongiiXLM3qLkEV9ozUrXjqSeUcogz6vF7ap9T7Qv9T2Hz3Bu",
  "key35": "wg3Hn92H2kVCKtoYSXrSqXe2XH1bc3M4ZKHRSrQcFGHTom1m3aRGcmFbJLCoYEjG4FeMadzmwGfNa1d8bJpjJjE",
  "key36": "3qarXUsEuDZoJh9rGBFAjGwEpm7a52YyBL2ENRbNgEBDb5jpG1dhamFhEYmaVeeJCDYKHnBCXcnJbq5f4DvrEj7K",
  "key37": "soHQnDAc3V9ekQjVtCTSumNrPb3hdJ6S6iwt9CpUPLKhTtMfmHekxzHXm3twzzjGSBce364oxT6RkavUhboLCcS",
  "key38": "3byfXTZR9DfbR77nBcUnD3YLj79j8vBcdCzLPyHiWjhv8zWtaCZ7VxMR3dZugfq2CdJNPZAjZhPLxjhsr1kdCSxv",
  "key39": "4hPJYL9vf96BiLXyLJesTyYc6cVcC3VXNMpQ4CmP2Bzak1rk56PQuciDtgyafWVZ6CaVfeNr1GesU1Z8hyevCG1W",
  "key40": "3FZ6DVskhJpECQMzNyQjyoFwDMhPJzQohrGfiA5cioknzUc1BqyUAo2tixpQsXhs5hLvnb5XxVRm11q26vo4hx7U",
  "key41": "4qL2LFv2d2G5xjjsUntFedNAmy786SskkYrYx8Lxi5JBSGFfMPZiVL2iQmNiYUuDBpqQ2ki4i578WDMD24zUmzZA",
  "key42": "85qys2opgE2Yp6o9hFGm9dHsrnzG8Wb5zdgujyC1TMi9gmMTtxVRsD8VcXB1ZzcPT41KwRTxuBjTEhpwEMstLnw",
  "key43": "NGeNQR4doRYXmMicPtHmFJtMSo3jEseavAE1j4LoCXchbZbJahmNNLJ7c2i3tkx8FmmGbwDiioEtZvMtKTnb99G",
  "key44": "5bYRTWDunF4MyceuD4orjeSTHJvhV7PN61hgbRgxo1cysPwSgbfxxsfcfdAiEvW2Dx3syo4KWtnwi6K7MqAzNQ1w",
  "key45": "5jNM4Gbv2SDRLfdqfHbEMGtCTn8ewTYSnjh4fXawMMDRk6wq7Av2mrePkxDqGAcf1zJE6kwCc4fhwbE8cvUpTJnb",
  "key46": "33Jj22ZpbqqiPWrXqkg9zQ9d6YbnAt16K7KZMqhPZsQmBZCbsK1Lv8bq4A3zyjjBSQrAfsC38CAnwmXharDCk877",
  "key47": "2Mia4oaMfhH7ryVYhcTmS9i2KYJzwayMGCDeGRTxsSYuUQ7N2VWWEGZmFPdzYYMjACxcXzwmYHLSJ1XKvfYE4Zmv",
  "key48": "2nXy5KrAjLx3vX8oTJpnLkxfANtnJaKjZSR3XTGZQqqF2Mok5ijtFSR2N4s8tC8kDqpyhe48M7GCDsXLFJvrjRCR",
  "key49": "5RoVe376sNAw5UMZYt2XAqsYVrgVVcskMHoQNvuWefQxAkQHbKWMDBwANN3N8vtpGscBZ3ueMsTQJn9YHu54GFWM"
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
