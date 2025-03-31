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
    "3NV98DFtmWwC1hR3wk2XwX2h97HNKwF4kzxXsWfv1g48HSPWFMibYjaYqYFQ4BQnHYNHkdzAQ1mjSkGSKYMwVUcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5djUe8nMx8ZcuUN3MqgKrrJZ5UgiKMARqVMRN2CTE6uhGJmQ2StjXrjNiiwcfKZ1adcFjX4D3wLGKuhLqwjY73pz",
  "key1": "4xqQryrknarCVBGxtBLVhaSSaMGfcYANwV37erSJRh4Fn1eiSbGdU4DguNTY3jaqWi1kxjkKpx61e6bKdEvBqVZk",
  "key2": "5FT87kbQvXXZ9CUKowaJz1gh25Hathy8LnwEMc95YbsQTydMTqUHcmU8qLngYsMZv1xhfocxRMnDq1n8AjUYi2zx",
  "key3": "3tjTT4FwzZpHS8XVzZiyc6WPEC3NsLjYc3cir4XfkiCwJC3DJj1ZHVyGyY9yNzRgb5Sdwp4PkXRKJE1f1qRVmmgZ",
  "key4": "3DWsNhrZpEqHxqyFTrkcmoJyZEcnF6yhiHozerFrM8RU5vAurtgYQgm9yymhqUL4jcHX3fWULRc8UP1u8CMPpQSy",
  "key5": "H6LiM9RUCs9qoEnfoNgehGyETvyE2sR3MYtQdoS5hPWVvwVgVjhTmSsxSgFJs54CBePER1K9PyfEuZSpgGJJw7N",
  "key6": "551ETGP4QHhnrHc7SYuj62Qe1xEXNcao1rVCMzNcRsyMMbwm4Q9w4MJbMkUtAZbtUUzCqLQWp2eQRH9UmXVLpevU",
  "key7": "3RTdTygrhj41Zr6SVaZ6vebkV1mcGpsi76etaoHU5PHa5shtLKSov32RNRqTvs9rLVUEAGbuwG7wtq3denUXFoy",
  "key8": "2cBjeCEB76Fi6PMwAZaNJcKrmZQajePR8BNAsaHHMwh27ebWGKwLQ8YQGhe1cquH66f2rwTYysU4kYWJtKEKEVkc",
  "key9": "47xkNE1gLWwUGTaefPUtFGZwJy6ar9nYPkB8gxGLfcbH6B1gVeah8VxJdynMPVhZf6hUdf3i9ofXGvnC7MTkmrQY",
  "key10": "4KxrtLUhntBXrV48CeH3jQCiiH2MSkrdq3d3idhwjLo2ViXTcHYEcQXb8EovE3TJXCbJ9deXE3DHNxm6B2bKGtBH",
  "key11": "2kdVBgSTcwJtAd3q8rFEFNPiV9ffUu1nNv5q973gui2HwgySnCQyT7sq9tj1XnxC3wtzVRREu75CWNXUhCh9cCKj",
  "key12": "2HSU2GCPQRZ8caDaH2oTGGUdfJtYh7h7WK9Coi5dBnsnDRtxQZawSMWM2s2XNxHRmA5WwHJpyAQQ24R9g2K1QSU3",
  "key13": "3H1oiYRdM34yFDAWDP8w3dR4x1onoCvHXFApeFKcuNyLtpjRuYe3od6Z1VNzKuhbGhYYpT4i7bRtHkZHAbRwkLxs",
  "key14": "4MfruF5tcqVNEp1GeAi8J9B2AJ6U7z5pNvHdPZwN7nmMpEQzPQdFb2v9sW63TxLLM7ugzP6e4QJYt3MgvMMzDfUc",
  "key15": "54jgK2c4e3dgYmQcK4HAaR2y9U2BkAUfhh2wKeKX9Xm5819mxfj9go3YGMeAXdegPqD1BCvWCEHnSTm4R319CipB",
  "key16": "2UtLzzHNSFnWdWLTW8fSfXNgJfBHTu9asVaMtuvEsWJmKQ2sWiH5hkkEkk1CtEXPFK6Y4BRuPFTn3uFQYzaeLLc8",
  "key17": "5grcHzX7QUcRwgHH8oL8UCuY8hEvQokif9T6LzQ9DwwtsJtmrE64J71ByU1VSn89SkNcgFkYuvpxG5CW1TchAQRU",
  "key18": "4MnWVHy9YCQLsP3d4Dqhd6mY6FZp16KvWiVeSiWQASTDBheKohpzrrv533rNHyUPKpVophAyQa2BjxRc2S6UU4g3",
  "key19": "qZYi4y2hGqiWh2Uxk1SATkAuBp5xXFFEoTfhLX9uHutsFbfs8AsvigohybUEV7tceqrTFGtCBfzmCy62hkeeKet",
  "key20": "5CdgunJqyJMsJjRZpmwNrk39bVfsMC8hy9NEBTxrzTrbtGUcvvQe1WUjziTejSDjFm6HNu8pSm5LtZ1ncChj1Kky",
  "key21": "5c9v2aks7sBL5ncejvqCcBBQchrE5TNNoAoz4FjntRwZidpVAvbjp4yk7qjo549dcDtMXf7L9kZnYzPimqALPdjv",
  "key22": "4odcLfNuzSRNN1gLNwqiSKk5VzmN3Z5iNSsiaUq4BDB257QmqdbWkhpfmvhy5evCcepTGicF22bTAt2mRH4Uw2yR",
  "key23": "2vDERq4soYWS6nB4bwJEVmXKiRNsQb1WzyZiEayWqBmeEC6nmwpcDQrpjFRnHbEmbSUynzxhWjdeiDkHjyt3gGnA",
  "key24": "5RgcSitjWPxZi44Bi3R64rjHnvGVp3SguQv65MJ5yNaUuvVrBUSLChszdMBM2cNSsEXngmPaHH97UcJYnBdLemee",
  "key25": "3r3GeLPL5v31fGS3Avem12tKzrZSXPwLDtgsViJcK6Bv77AgrSXLMvy4Qbtrsnha3w8xECav6xXXqjTjyGiFU9FK",
  "key26": "2EA75tCqz7LPananRYqrhY6rW5hKDwvfNd7cCdGHLLEsdkCLaJ547qMfTzo91kSLcNUbhgcRSSV5RfownyMnVynJ",
  "key27": "5VrnSePmMjuMk323QizADQyybRziLhyW4ejoskPJLJpBVGe6ritYoJCvXs9AVPcmAdWvfB1BN5Xym61unYUS5zfZ",
  "key28": "5qYKYGRe54F7EGN6Z8eUBvtr7dhm97CPNTH9GTxesKVJa1TcwZkSGYRekDhbjk7NDiot5yN9Co5oZ3NPMmNvDXDF",
  "key29": "3v6iUVRfVZo8HHnU5KxLmeFVToiLQwsPdsQ8ZAoUH1SerxTj3nRpVcLj7tYpBA6ZHKGpgyNffPZUccEsAVgcf5mZ",
  "key30": "5Kd1s3wDXDs6ZrzyvYSPnaUidq7qL3VZ3ohyNwDzRk6jeaaYrydoqMQFws7wUNvditMQUv1VQEtviU9qD9tjvrPt",
  "key31": "Dq6yhBgWp9MHX6TTei4jEjxRYKRgZLqJqVt4Ag3jhimSNoEGMagFVPKs7oMvYvejHCYjAso5UDmTvsE8kHuAXtx",
  "key32": "495GuWBfpsED7VahJ2iwSiNTUkAHoQbjTKTno3FURxrG7hWPAiDNYbGQn4RJMP8vH6DskZaiv86V3K74dKP962mS",
  "key33": "22ZPAWG1XGB7EgP5rauzd6kbP8yBHDWhMZkjUEeXNJiqBuMDXpvry3crCK7rKpnrwPjSGmZsBgAx5MhSMUhyJZKb",
  "key34": "5gTszGHTz4NKBWZjMbiW2xfhkMFxMcsZ8k53WcjgfBxtchohyEMpVMG2zrkvFBEX87zhUmVdukoSdqFc55EM2HaU",
  "key35": "3p58cfSjjL5TSD2ayLpordHfSZqAETq1jAP8g8hfVwNCh4Ekonp8E8LzJorVvz5DE4kYHn3Y3XRgUh5Z79sw3ke8",
  "key36": "zATZjoiVGodnqDBrqMDP4hLw1U3X27Eg3Ze9G5mgsYHQqLJ42uMwdRngCqPQi2cR7kb52822U5hCt4u6cXSRbA6",
  "key37": "5PzzZbQNhYxfvJ3fNc6yCqrDGzTTQa2HGpDj5tGd2cHAgSLxU8wDEURsXD4o9YC4uUkopH4qHhmwZbyp9MwkX33P"
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
