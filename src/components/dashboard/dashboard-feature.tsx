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
    "2DaSJPVE8td2rqTGjaCPVkHtvfb7XLrq4sRDFpskLUkK74L1UVZkEM8iFiYziPvmECaVqJDfymXnke4Xp7oMRKud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdM7pjL6oTL1P2kFFKCNaFBfxEnGtyJGMuTtrj8zAwPxJ7jHhFU5kWte9vUK9rtkQX5Gd2Uxt8gZtjvsCr6GWuB",
  "key1": "5Ybvgxzz7hVV7Rmt3xfojrWEWAqmNkS2XtjeLD4FQQsfjZUjDaVBqeBTxVL5VjfGePxVAVW69UpRa3Kec5hnbxtU",
  "key2": "2Yy5ZP3X3DkywgpnUuEK267BuHuxyrwGdbgCBcvo3F55a29gCEYpEPsfFNXGxQuapRiG82SaiRDr5LHkYJAgmNvm",
  "key3": "5ySzNKseodzdzDxvax1SnA2qfub4omcybg6U7z7tf4bzND9brSBnLyYcibFW8KW4jyjDZqhjyiWjhRLagAJDkrYa",
  "key4": "2cKLw2tNevqJwbCTGFGE7PNewcLpeY5N3BSNvsEUrGfCSMaRrtdcCsztqivo1fP6T8UHnFo6ea32svz9ayxjWHR7",
  "key5": "2uCMrfQRTr3WitLg3czH19rWV3bGxJ996FQ9jMsUX88ZG834FXg9TsEHuk6bDKBRXCJwnHJb8RnfaPTjXPStqJk5",
  "key6": "CokmSMsnA5epxjtqKs9FmoXqeaUX5ucLXwRp4iYhQ1reFMfW8Hxbuyx7asUju3vRxVuoLPinLachLLWdXgrUZL5",
  "key7": "2mcSboFMJaWjuXo26AGp3zb9mbVABZspXiYAPfwkLjG1vodZMpASCSuhwQiSMrTZwke8AHQPSP6k6L5zTAceajxg",
  "key8": "3qgExB6nEBpkhnA2aTYjLPXSCh8Nz2aCEdgmkJqve3U7EwGVbkABv47BFKXXHT4EfLRZTLU9uPvKeesYEbjo2yKM",
  "key9": "2EUWPnFphobW6DgESZuU39p58poGPbiQ1SYzqRfso3R2HUt6PtQS2Td9Up4wD6UE7wjq7gEDrRXP6UZYiPchd32t",
  "key10": "2q8fFrbuEhnW8y4hpAjG1uJQC86d8HPJx7WVwG1TwZmJHyjmSrENemsGC3heQN7CrEax2PHRSeqpQ5YSKpJV5eHZ",
  "key11": "2CP2kV64aUiXF3MiH1BAKb1nhfnCBV2PiziNUCmSM354vZV98cPcZ8e54axXwx2nZ9Ridfmme3nma7HfR1UPE1sf",
  "key12": "2FFAKHDzXxVH7EWLAyBxx55hx9ECXfff7ow7ozShyBehU8UvDmqkEC5ewvW9heXWKtZpDJWTHmCjznxu9oJ7KBsK",
  "key13": "2UZmnQyBUgBACRxXwpTEeyswFYjjKPPwVXjkZ8WRjkSjEhrh1d6uCHP7NF1rkA9jVTWAng6Bwoa2ixCXQAVzYUh",
  "key14": "4Dy1e2AAtaCbZEtrbDMfTDC3MNHRPvyiSbaX2WQgEcgjm5JX915YijxX6J9Mp4UCNiPoC9Q18ZSohNVZWV6RyQ1j",
  "key15": "4RaV2zFXpNpKHECdPZnYNzMgMFAWjQ9brWXgN5SoNZXpZbipj7wGnn2Rp7QApFF7VzuK2zDXapQEdXKGKyqujjYf",
  "key16": "3fDwJUBTx3WFpwHnG1ZHoiC1vV1FUGJqjcBW63V4JqCJkk2HwJcEAM73BB3AEwCi4AnP6NJpcgoMKWyR1ndy3r2d",
  "key17": "phw1dXgbH1ZFT8Pwv3oFUq2xiYCUR5mqTt3Vx6pR5Q8mWBbq4xaFL38bLzFgATU7pxPSDgNEw5w4eiAUsvNqbhB",
  "key18": "mWMAgMJW2FYqZWgrgnQeHkLvCQkX84iEPq9BCeccLbtY5hFv9m6NbhSUzQu5pWCXDjrPXTfTKv9B8vQcCjnTSvb",
  "key19": "2qLvSi8bSJbbpLL7iuUKASdRDJSdK6mtNrGxFTGdfJwmaPudWG6mJ5R5VALQv1hn3mtWxEHFNgiyGcDVVJicwYhX",
  "key20": "4JMSAnXsC4tfK4Vg5sKTh9f4euX1dhqP5Wszb71bc8TDB6i3xcFACgaZSpuhV3Nf8AymJF6mT671vpSog7ZqFdwr",
  "key21": "22x6QuFx9RD9GX2gVgS6gTNBhbA8QmFKNxtRYfuSu2SYawdYox993TBcyM2Kw6C79qbRKCBHxZeJs9RimujcF6tb",
  "key22": "4fvqkixzYdocfghyGv3Bx4Td9PqCwASyw5z79nSPYCfQoTv8f5m2gynJDd7gYSMHtt46A54QABeLUFQ1WxducJwK",
  "key23": "3oYK7VtaYLeaypD2AfXmt14Hc1hRDsAUHYGZuZe2KkvDnQvAKR1jZYRKr6dVtCE9w1Vz9MBRxHiftx9auYeyFQa8",
  "key24": "5Ug4XtdWfZkBeh4B7QxUk62f8rJfsxBodh5PHXwAeY5dbtvsZKLnCZdGWNtG3eN47VWJwdN9QMDYAQ86eNw1P4m",
  "key25": "2smyHitduS6ZvXQVZSYN6dtLTvH22Qm2U2dZzb2Le6jiJGB8KYqgqsJBqPg3E3uccerYQAUJGEENiENibVP9SY8u",
  "key26": "2UQmu2hJBky4JkkuFycHr8u8qP2QH7JBkWt8JU6i5kj3bW1BPx2Lo3gEJzcRUU5Pt3aQQX3JGbhR2WGABb2eJeHe",
  "key27": "3Zo2vNV23YAwTZJfzWFPjnh2AzfXh4S1ahg42jfb5YzMHSMqGSeuhosS28tz7aEybH2fDsuY4uy2B6Qmvbr9ndt1",
  "key28": "3CjGsw3gejRxi1L8t2p8pfSBi41Wqa2YENNMMraEZzyz1GGhLp4t5DAXL3m39CNfqJjzfdihdc337ViVLB7T1fiB",
  "key29": "4XxCgd87vDjWHvuX8tiLp7krdcbgyPEDiCKututH2RwWD22NB31dJ8uZJcYFFT5Mk4iFEsrQwkmdwtetJYvUdKs4",
  "key30": "4mMmCdU32EFAUqmDWroh8wUBwpgsSJvVDg4ZumSWGHH4WvoekM87CDESxywYHjp4wyTYouvAL2Yh58YH3p2Jfqqb",
  "key31": "5TsJXU7dps4BDqbNohDqHcx1TmZATKMTCsC9kkidL2718LCZPKGCZQSPhRRHoKgwVRxELTsjxpHdxpqhDarpcCpr"
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
