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
    "4qT27buP6XZBiVDUNEFbg6PSAALcTEdLE6HHU97LTQLJdDDYjWepX8VpVEYuPJqC4EwDR3HMNNWXbovRpqEW7qEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38YZmNd9UCiBKkrw1AnGVsxLRW6N2KRBbqPNzCiW2pRYYPX3i6jT2HvojRkfbrvb7JdeAjmrb8bszwf4nzHyyPug",
  "key1": "5fqMTtrxogGdb3e7KSDWCduVDMya4erEedy1AiCS82SwnkN3EmQdujKcPu9EFrdMJLivpJTj1Fk8xeUzF9gMYSM4",
  "key2": "P4NW28fL35qCFhySnmE9oV1o6WyGKpaCzkA9RwyGbvqs98dHoi7FCwxyENFJShn5ufSQuXXkNHz8MNnd27Xk7YH",
  "key3": "2CuEm698QMFtMFHvjGZyEd3nJiDi4nRJqysZzq3f7anubbYV6BP44oVvcJ9XokLFi3drhhEwWTG2WuwM9cg8rfWQ",
  "key4": "7JxNhNWVZpVbmsFBwznRX8vKa9feb1wAriz9jV8UfCKrzqYoEGsoKLhbzFB3wAJgXhTv2y8HtLvQHHFSkpNNe1e",
  "key5": "66ve4k1T5BGGqk815AzrhNhJDAeRdm2qWCWZiETqpE5wJdHdv1XZdrEFgpGPCtbXg27JbLh5pT4BSubd7Dcn8ji5",
  "key6": "Up7nLh3mWVMB2oBhW2s4hZa9TxCtF5LPSDjM89kRMpXmGaXmuAaDfSzrdNuAHWPGhDHYYrxm5HvvAAUQFHiakYk",
  "key7": "2W1SuxirXicnLE72ww3GjyGybk8kVUp94iUZ1jFdXiGRtvjdmk7MmK6WQgmqrLWNHznAp2op2Rx2y6DehNxciHzB",
  "key8": "xCWHgVXvRxhzycvdvNzTMTghsQ5uYMnavYKut7WxX772gCEZZ5mq3a5AJjCT4Nta5Xp3wQmHbRtoNdyEgaFkXV4",
  "key9": "2xvTWZFxqbUcXLqEfQKvahXURDR3QyE9oWAyJUaoyd5rKByyfd5F9JTSC6X2gUHqropHAmiKSk91vQM5UNWKUKcE",
  "key10": "4FiQ3Ycry1rbVedrLKEJhX1h1uMCARtoax3Rwr5Kc1zGTw4dPADx8xp5oXWs9LCT7w3YZdzHi3nsMNQEHTBpG81a",
  "key11": "3q2vem8ZmnsrpnbjSSpJzAVLXP2qeC9RtJKKsUNvTwE9E8mNYSWZp4NWqGgH8pshJquxJeD9ScRvGD2jfnya99aQ",
  "key12": "PzmFCgm7n5oY9iGSYuQydsHDsNTZ92HGBi4bUuD516mpCw59azoLypjjwUo82WTsL6YiSJG3byVkRCThjwcYcc9",
  "key13": "5fTexegfMaqJdCu7sHA4z1QfNrceqYvBx42GUaUiAa9vyoTRP88aT1xzqVYYYMSmYeA7KTW1SDNFDxXa3Xj6WbaK",
  "key14": "4H3GwiwFTkqgtC4AkajWP9X9jjtEeXMaYNq5XR1KKtnpaHr5PBH49P6hps6uLxCRjNc7fajXvV2SQjDBJQLwSE9S",
  "key15": "4wmwXgBDgzhVWC2PpJqrbpy6HdP72dB2yXpQJhzySo93X3EmBcwxGKx72QyW2EizaDnGPb6kEDauFgGoo2X1y8Bg",
  "key16": "hDSc6pya5xPuNGhN6LLKrg4SagY7gsF5CeMB7XnCJuMwbRVkcLerLnomJDVVmm5nasUyfRjsKqZEQssVV4ajvEQ",
  "key17": "3fCGcDsiPdPY5iFxJt21xwyzzNkb2TSKzmKFd7LbGRJaTyEyNGFPgLZWNXtMCxN2mpoQoxxHbJuN4i1ytnQ1NuhQ",
  "key18": "4hvS5pNShmaM8hFaxU7go1za7cEj4gtPgtyBCgzETKDHVw7maudeaKnumZ7FU6S3b874iPhxkzKUeceuHHeRUhJF",
  "key19": "5XRP9FKFeQPRAQAgmi86gPmowfgJVWso2RTZAdVJuArnMirgxwcVMdUyZawh7TLBdqiUCj2uybioAirqsfVnCPBB",
  "key20": "2o5szy1K2ht6EEEuSEUN1351zd4xGGBMi7HGAJcBUmDJHAbqwmsDSNKZjsF9bJsiH8LpCayYH8xVm4vDL9SeBoUW",
  "key21": "5Km3uFw4A8eqK1yUVXiuGFFwuQD6wo86DURweEj4YQydw9ZUmux93rjFhiAoeCKiDMwhxeh37QKYpPuC1Upw65oz",
  "key22": "2BJxyAWsmxhwRJj5QoKkJTzAUMuYHaMdT5bDCdyNaW6o9oMvsV9tcwjCn43E1NpbDTQkqLCqYMxDhGdUWTNjL9LQ",
  "key23": "3tiyD1JaA1aByEMwrNPQGuQYLzHAt95vynyNzFv6vwG6NGo2phV5oTN7zJZBujwWpaPpN3zeVf4Nss3iGKqkZTf4",
  "key24": "fRcmiYjjNuTtUduLoKNjtRyZt1sCDhYTkbG1hA9CdJCycFD8i9RxDFtBUq4uCaSJUshCm21ivNmAzV3g4DHYHqe",
  "key25": "5NP8FnjNtmGG1nAqEo2UGStx8SKrpo4BETykSWTQZXRMSheb9aUEeQktuhkudEsEK1ThVu9wbEFVjdmD8EEeDVAN",
  "key26": "4aNJRhw8ncr3WFz7oBw4i79nqAARti4tYxUJ8inCuEP9Kx8MnMhRSKPFvBbuAtrWcXcXoB8zPMsm3mX1MficDVXE",
  "key27": "4f9TRR1W9FWp6zazBUCNafk2dqG3ZJmVEVG2nxbLbpZKQ1buTv6GooJbP1eomK8SKwBhdEmdTq9yVjpRwS1DdZUL",
  "key28": "544MR1pwDbnWdjNVgxrbE9fkUZ62RLJQ3Ca2tc7EemPaamF55JQD5z6x23KxVD2QpEnc3Vs8YK9DmXH6CQ5BhBSF",
  "key29": "gshYaDGyVK7HBJcHMAcUtNYeWNQvB8MUBvaHQzn9yjLcS3JtVAfLKetD8yAYz2DXAUJYYzychsqUqzFd6sD62aM",
  "key30": "24fRNEsSavHoAm79W7gUJJLFkW7XD69CTpY9XBPQMURHmEh1bkdTLtxWQKvyL5RdmBTFkWfq1kPBbezFE65BMuxz",
  "key31": "H5ih1EuLGriq2ShGrPEnh6sqDygLWPss7FXnoMSwDKnAKHLK4bL26ZnkqvZ6MwcHefJA1hbJ25cMBmnwMggz5XU",
  "key32": "4Jw9umD3yeHB4YZLvptkvVoBAcEZ9A2RMMk7EqyddLj21GdQfdqJVb9wF5XuAx7a6EDqYAq9fcvFPKJoxUueoVc8",
  "key33": "5jca4q7xamBLuccoV4oLYRxdymXvqt9vVhLGBKNncHhWzDja5RydAkqonnzGSLRcAkkDggffUfuzfaDayTjZ94EJ",
  "key34": "5yuR8T4g5VShUtFDYZzu1SJr9iep8WmK6JCR7a2SdmoJdtbc428CYzJwEXMompCRC82pq8Qr6C7ZZ9HTVMYGYNgy",
  "key35": "23RU4jyU5qN4pYrGcsMsLCJty6zK6t4CGwpNEcfAENezQ4JFFfUf9HJ5ukAVJGMgzFZFpppeCwzEQbHNp7DET98c",
  "key36": "2Xksdhtfr6LNdkerfpHZcUBbPoCjyYAuogbgP3yb1P1dEpNP6cLNGvyK7cQ5phrKhgrkaLnpWa2qMw6ctW8WE1E2",
  "key37": "2eadnKX6hUVYvoPDd5VUNN8gwANzQHUXPQLim3tjMNan2mNCiehHCM8uAJBo1pqNCva3vc3K8ykv9zaoGq49A1sD",
  "key38": "zSL7kqUHsBBNnZzRwgnNHB3UC2ETZaYkt2Jde2M1EADXBHS3ozSZC8wFd1rNYbtr1NWgjVpjoRXZgbU4efe6dwk",
  "key39": "5JgZU54HHvZdpaZdD7vpJXbi2mWiCD6mPmiVa157wSsRJMKHZZP4s2rNT989M1ZR21S1HDwpvTDEFhVcX2Su5WVy",
  "key40": "3k8ziFF16R3StPe8d8o7sAEUAe2JCMeZFCgZdVN7THDGwpX5v9RLMP5M4Uq2cuHaGKbd4RfgYQrE4BnMwmDGWqzz",
  "key41": "M7Y4Z6hURapewUXtC7WJ2AJ5F1uzTwh4VXEcY9qjUR4QEp5epXGo5agqyVQt1BNNhHgqsy6H6cotAdTp2Mz1s1t",
  "key42": "5EetGRTzry8EmvzaKJp5XMjtiRG4hSyUJEdHgxDSHaiz9w3GBKLqV3Um8A5MAHStTXDoHcegtpuRv7M7N5ZAVhss",
  "key43": "5X4NWtSBrSbLp1XnZaiTVX27K3m3W8PDjcwXhmxm88pUdLPcNRyPXBoTTY16HZqi3kDdwziZJ9z75VkLTRidtB6",
  "key44": "2dhxtXMUbPCCtY2R1jcsPVqJJnFEmG3jVqcAfh9SqNf1Ey32Q8MvBruCSWt8qvwchXVsjGVXeopezXoSb4b2cgpB",
  "key45": "3ncaeQ1c3fAesEmdUKLzrcGgjUBBBLRqDdqEXyovFxFav65MPZPiLr2UDpYmNdrinhBAK7qFESsnuSqt1xTvmAtM",
  "key46": "3eGVh4aUUCX6n3XAJgBBUMayV5vyAG8uG664fZ35eRmnfLyTNF1FzuMVBkTJiQ5quq2jd4dPqqoMLHahZbHaDZ1j",
  "key47": "5A6tCQRpNwQ1haMAYgMoxStD9LGesg7kY9cReiZLWs8RrSXv6y7D671qCPDiVftgJBnRJBEg2NvPouUXeEKh7goR"
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
