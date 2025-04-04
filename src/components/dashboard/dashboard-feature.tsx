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
    "5XjjkmZR1BwpauLhodu4Uh5MWsrWrE1kSXU3a2uuWTYDrFmfcrvbTtwXaGtrv3wUC5oUkdCLQgvXULsyKSGM2FHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LFj8p9wqyEzGcvNvxWxX8kgX6dV4aNxHVGyR73cKQS1GMsrjpg7XVhLKcqtDVjt9zhA7CKHU4AgpHP2HA6A8ZQs",
  "key1": "UAj38cBFL79c7jnyEe2trY2Z7ozHE3qVqp4vwyBWLTKQr8bV7qAFg3iamZFSqgxcmKqizBc4ctmmQiwYCRmpgh5",
  "key2": "5GNHrGNjHvccSDvU5EDwkc89U5ntC84AQRcSg4mbFwYxHfvmGaGk2wGU7QKUbMrWdNrs8V7VxN67q1HtHURL2m5A",
  "key3": "52JtPwubPjbjUiRHqc22o5qDA6uSdUa6ZzUSHcWasEi5g5RMzcmH6TpfFLuJDJG3UaE34vnrwJ89ZfsA8QU37BL1",
  "key4": "4uHRoWQ2D1W3ouL1XsVVAMPR4iZG9UiFh4XiycDWQUCTqiuTuVJ3tU6gidzM77meaMZzKHcGCJ3kgWcidhwJEP2G",
  "key5": "2N8TonoXJ6UUqe1ZFrvVe1TzXt3s7FRBP1xDT7Rs1vmjWBmtYjSVm7hitzbPKJic6ET9HQw796YQMBRUiDSxgaX7",
  "key6": "2XHE4JWYUfAbYLSeN2UH9H9j1mzsg9FmpdLhPcYiosDxsG8dzRUDETwxmwub9Ugty9HyXzuw4541ofS1GPu3cXAs",
  "key7": "2JBGWVcCW4MpE7c2xnDpgydrcfX7EJ4zYAc89EGqyvDahJY4DPYhtTMANgz178Frkf4324g1nCEudDzQG3LNRtcn",
  "key8": "5qcj4MaBYKv7DV5TQM4RNa1LGycBxtMYhNxRhZrEoL2C4cvYPVJj2MJmQcYd6tKJ1X48SpE4nBQ9ZtAHptYSdouu",
  "key9": "5WwcAwoVD5iU83GoQLyz6WMjZHHYpBV4sfrVogWfDxgPCKQpudvAPLASP1HbYLbibzD7o6LmRbLiWHE2C8Ye1qiG",
  "key10": "4eWGcLf4eu83HfZW97azPmu9Vf8pyAntQvBajrBzVBTGFL8qXKJatins5oSLGBFPzFQwLP1cX2CmrMnjRAjfQ7ca",
  "key11": "5Pd8Rv5rVdK3V4Pc5FKLjkYeidoUAG1NfHXqCvsJoCvCW6aiHpP25qpSxNDLpnd2iqm8A5jVczkWqu2h6B3xLooU",
  "key12": "3v4voiCupXcsHcSbeL8ZcPMqbBrihMWdSvDZzR5ydS7iAYnxjWzcJnDicbmPsn3tKq9xgdb3dr4LwPvJs1iDy1F4",
  "key13": "TG44stPKd3wXhKjhSBaSF6n9oDN4taMfF2kgVvTQdE5HrE66WxpQRVMUC3MvJrcAtvscrg8XaA1EPdH6h62hccN",
  "key14": "4mkrhXgaZBwPtcDmrF9Ek7PVHYEi2B8WSYkdGZfMS7pcRkZizu1kXLafrZqdT8ejLDmPoJRZgacdLdZ3ZsVoyHGf",
  "key15": "NjD1DKW4GuFjLK9Y6sE2qvJskehZsTPH8JKDCdwNKhPJiNvDhsH951o7nx53DKZYNRvkGQcaAKYsxXYKTKUsEFF",
  "key16": "57RmbwxgmUPWS1ZDkUz6q5trbD3S2ybYbauyqM9tWk7CZ4qSr6QTRSAf7Z9A81N8gpU2HWtx8ZAzd6yET5Q2UJoC",
  "key17": "2DnEDnK92WuuLvoepiVost1Sm2NpKZWDNZRTRuaJtberuorvNEDXL4RQKWAirVYJpePMvNRTphLqoUrLYBeeG1hb",
  "key18": "i7E4nvk7MTiSa3caCa4ayRpcaYcJ8VDsmiD91iqPTf55UDLqg9BfPphU2tb43FyHc9kyaovhicNmrutVZmfpN27",
  "key19": "5bhp9WCFPctL4GkbQZaVZRvk1xuAP1bJnpnpkimwJNW1RGn3fZkeKexbDV6ek9JpC9Np5RDXXoPnq6EYMNPko8a1",
  "key20": "24RCBoUErmubcQkNjj1zum7hLqA8CSrKTf7NcAnDLoeasiKUHbdE5GRAyW8S5MNMJi2N3rzgM77jToDi9Lhxnn76",
  "key21": "2VLsqToBNhv6dQDLWefK5s7ho5kMZ2Kd4tAqEvLvnz1YBxWhsRXqQyJsou4TGFq3CPVvqL5fj3HpeoTPWsGjvhfB",
  "key22": "5CnZmGP6fbSpeYxLnFD6wDvmifRxhwfjmumotHup3fGs4mV5PHpuSAfPHp4aEfTQe6mqiAPds6aGM1FxESEoEy9H",
  "key23": "31LdRhxuBWqpi1AUuFVmMpZmeRnsxdgEELpFGMdwEG5GB54sZNZg4QAoyKwrcPYNrzBobNvD7k6amarjGTMv4FE6",
  "key24": "4QTaEhKMF5JnQQFqJPDnCfh4LuWGhUAqBm4yytaRw99dfqQmAmavA9WNGAmjNv1ZEMkHs6JVpUANivoVQWJmFn7P",
  "key25": "J8fR9uwir4qc4XQhjADeeMB2bsZ6MetbQqFnrGWXmSGML6pJT3F96BBEkCEoHj4iFGt1ikQjNrrZHejW1cqSPzY",
  "key26": "U5puZ1uB3yw9NCK6EVTRuT3EEVDJawakcKcwnzKeLapeyGTqWLMQqtfNj4rv4rqZ5apwePUY7YinZ6F7Ufgz5w4",
  "key27": "AcDCyck6urcE3cPtbAF6pWo3Si69LnCgRcxhJkxEpFUDNtNQWcuzdAJstf6cw6KFkybpAqTez6dvy2RtJFVxdSt",
  "key28": "2Ad3DLkRdW774sJ8nEfeKP9qcKvx1Zxw5zwnXRamtBYoJugvrSKSbgKmtPQcHrePNhhxJA1SBx6pPAzUrbZP67Uy",
  "key29": "3Goqbn1tMQSsFAbaTnrMQcNYtkheZYspvV55UYgMpPsTjivA9FuK8N9w4Pw9uNq5dkSMS7MYsGgQLdPQsWohtupF",
  "key30": "5nNkNGox2wDJbrqN4ERHAFoBLY96sW36v3zLZvYFQhmGi8HWbyY7WBDSozTLn1kTx1KDDsGgcq7JVmrXmSLZ8TRY",
  "key31": "2wTYPcKa3hnCVkwz2Z725KnfSToWaQ4oVe3hQbhCt1gtBz5z9kvexhFmnMgYuidojacCidHm6HP6gTsgDvSJbHgP",
  "key32": "47iUC8sai3wXk9Q84vRaxEjLFBtZP8P3zahngiFWiosapgSNAXSTSfbQbU45ntWFGjpAX6dHEQcEVHb47VhE3D6U",
  "key33": "4uhWGoNAfHS4fiSpLpmH6jzcJTztTdnVdQce5depUFkcZK6ZENS9ZtpjxGcLHSjeEvaP1jD89KxgdSg29PKx62ce"
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
