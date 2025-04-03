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
    "2nvZPH5Xgd8pKijWHN5JBzEbVjoPa8j5LU3v3mhFfAgC24ChnBWJLx9A8nwVt6nr8qjBPQYHEr22m7T8j3zhiNik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrwXEnXV2wPoEaZbFuqdPkx2fJmxc4YvsogHr4VC3et972mpKJQAx3ArK7UhSR4RmaHYpJ3WRh4Fobyp2pCx1ow",
  "key1": "57ESks7idKu1WmiwYtUHT9JxerQ3KBGpmEjHBYkFuVZSgGuz682c1h77b7v9qvPCvRMR86Vh8Yjf5CF68jAacWny",
  "key2": "49HNnFfX9JxLdt6mpzkFuHTYgMLfsoThKyJ2PLyht2y6AL4FggaYVHXKfe9M7sCE93MLitDiDUkxqKUCqfm4z5Do",
  "key3": "3vxLSmk7Wum2v1DjExw6Qj63j6TF3WPjjcTJVAhtz8ZeYsTr5JNNPs6JkiXVU4ZXYdVVtyf9oU3BjiYCghrX1EAH",
  "key4": "5KPMu5pXCoGayueF5RE3FUJFcbE13v5tfur4E4v9JB7drvFdXP64Ph6cH5zgLkCTaqe136rqkGN4o2Uyy73jQTpk",
  "key5": "5Y63aN8Mvrxp6J6hj6sGTDwQ6w3dgzgN35nxedw1DvnEpM23cj6vs1dG2DPaCtLZGn9PmxgbnHfn9xMsSc9j3xL6",
  "key6": "3JD2rCFtWRF9LTBsj1k58Uk1ovyCHTXFAFtqRpfPbUmi57it19MX5xTakKjt41ZpsgPqkp24ArVkz44EjHPAjVxP",
  "key7": "4Zvi4d7PomhTQxMGDmSKhFme49GweJev8Eah4NkCuDiyxf9rEupRc79RtaFLDsHEUFqh7gRTxyjKsLhMX8g3zCdz",
  "key8": "4m1cKcgiq9fBj5ppma9S14p43mMLgFKD5ViRbvGiR7uFR2hSgehKsF6uSB7fiAks9ysKYbYcNJd2kjysfK3ZU9ZA",
  "key9": "2MksPDxSvFaMprZxxLZE8N2nHPCSmXdGE3d7Zih4NzmSkArTpfZ8azXuxFJZRojD7ZbfFR3SPyG3dgWnQuYmmbM8",
  "key10": "ivWs4GLBaYiu8jQES6nftPPMcrW9WwKLY8K5TZXG8xxJ9B2yjQZzkMHfPPgPzKWLyXvDXc7X6q8CXMZcyeVfmMm",
  "key11": "3Y1N4vJDKCgSgpLHT7b3kExUVJg4kgy6frfjgiWLR5meHbVag5dczqaFDh59rrPE14ioH83mDptWwzjDLE4JxaaD",
  "key12": "66cZfJVooLtF41dyRsuFmZFuJXHTf2L1XdL9pEkhdEim7MwugUNrypZUEK1ZZyMN8vQW3Hs3JHLXjR7yKvp54Pnm",
  "key13": "4mttZohE6e4G1C57q19d9HxbTXpx1bS2TjjREUoDNq4FW5mPfTikZtJ4dZzwEGTkDVsGmLoRLWyxyHZyweR7kxKs",
  "key14": "2cScPxioMc7UPdFG96hePHR3W2rtdoEzULYW2Dx9SHbfK3bwXq5SY2YqkubsKxnfsc4fXZzGbhxLK8DFF5BjN1gG",
  "key15": "2H9j51N5jnY6siqsnEg7a3caboQxQMMXMezA6BPG5R2QSL3mWnaRrByserUptpxknss7pA1tstpH9PA3hiq7Rg2",
  "key16": "ABpCzqq9Qbaxmzwkktn4UGHKqAqcc9oY67ZJdZXZB2MUyU2R2K8Fmh2cd57BJ6zgJesDmGnCVKPM2cRfxDjjoPK",
  "key17": "21vxYc2cdZiE3p99kwMPGJsYijxQP4BzjwaL1uWE2ACpmDYtbccji7vpSRkrN2uGMHcvA8yF7uv5pPay6weqRB1n",
  "key18": "2bxWX7xnTfMyzfvaYQjUZCvuiFGadygiThGGCnbEEKLz6tRr46zB6eqhmeMAydxbcSKPQ9ekDYE497EGHhzJhbwL",
  "key19": "3ySZcoA5BMESSkf6phZzTjyyaV5Jq8hsZy8Sm7GoLcWQKEkwoenpanbaLzicCEtFBF5DE3jmumfgg5amVtQqTFUf",
  "key20": "2GuBBDCsRV1VLftxsGMKARiX2LP2akfLj1XjB1TADnEeSBScZTq97A1jvLeZjkvFL2Bo7mFhRJ6DzMsn1UZX8d23",
  "key21": "jzk5fX7KeF1JVNiMtzDWG9kb3atJQ9LeBtUCa3SJqoXcp7VdvRCiAqCX7HfFAYk43hd5A4KmhU1vMyaQMXDtQGe",
  "key22": "bRpqQGBTWk1JThBs6mEFWi6AEUtcLwezt5appMd5kUZFtzRVoiAoz3uc9LJKXQwmLYcTpnSUqMnweUXqj5vCS7u",
  "key23": "4PAtG3B9JFYhAiyUyjKADjV7bceq5wH8rahwbktXtnhpJe4B6FkPmjKaEJ8MuF5QBfi3PwVsqNx1G8tBiixzfpep",
  "key24": "bRS6ytdy35GV9CSnBZE4C8TUNwHEnB1ZYDuPhQQZyqWgGjVF6GFFkSupmYizfQevHTVbyWPUHTUiW6duyiWAq9D",
  "key25": "5kSgMoA88LvJNbA4Xg7yrh42xXW6A9pQM5zqAbTfpJyXapFebvHZKzGPySFaxSggQggpPof5jG1rUQ2utAqDZDEs",
  "key26": "2tid77Y1V6F1VGC1Q6xF3gW7z5sZoRd8rf12iaTC9E2gWQfh4gc15pQybvVfnhJmcQbyEAuZE2d2ih8ZUB4BvYX5",
  "key27": "2HtsacqgCdgSYcd7KKdarWpmemEpPpgnWTWyUKTpZsWpkzfWGwbVJAQu9eRKgKnptx32rKN25RyxUshdt58nsCcB",
  "key28": "5KdpB5yyBXgDdmnsZj7bTQ3x2oZaGmAWCESoF3y2nw3T9a34S5sqkrwbMVkvtREmT3Y6Kik4v642vATqKJN5zC9m",
  "key29": "3MKWDJe4Fh3GUz8jK6jyC8N5qeyYuo2wziKVFfoj9T5HnSinRiRgMz8iYa7pjxLVhG757YLLrzrUEtDtinUUcR7h",
  "key30": "3JzjMfXP6bXSt4kZayuNKixgtR2GUjyxaFeQ4FUziUYBGV1cLUQ8KzQZmvbYLoNaBpmVNm67tT2RUFzDUQUphL6U",
  "key31": "3BwYkQmgxkJGA1DJLnSvJuCRHY3hTaeqbynY2t4CQgfoLJdR9LS9vwE1U49wJg7afMYRvorE4cajVB3Jd9rtxqKm",
  "key32": "61AXC8wdQqe2nWRrYroRPELpUQFSy8ewGnsHfyg78x7AZdPy5NBhSQ96X5FipmXayaMAvDwaa7FxkZmu2jwPYDEG",
  "key33": "5YLgSDja5vWjVeoS1nguDVgB3cfiBjxoDSFCiLUd35NBj2HQR6shqEywenPSTr1eaUGUMLYmea6KUVTvmBVDkpim",
  "key34": "5PjH3S9BawS4pcEPRA7hHiwwcFKfZJzuctdaACMgeFYmkPwcMn34p6tuYm1REJ5WPunE6jNdPRswC7PG6rSnDGDA",
  "key35": "3sBEZ63f6ytqYfE37Y5X4RBgjxYszc9b5VRjrFm1XMdJrpm8CpDTZCQUVSCtk6X3ApTcvx1T83xYBvQzUxdUX4k",
  "key36": "3ad6a1wtyzmV2J6GeB4sKYrbR6hHNDrDCdUX7tm9pmQhpLB67Q9gqk2X8qHx3ib92UYZD52HdpBLrtzdW5xmFy8K",
  "key37": "5xUdBJ8Eyu3BiKTATbsaZ7YFyoMg3i93B7o8BuFcLpRT1XrroagMHvHYuN6mg4CpbSvzyx7NA725KobVumtEBQXC",
  "key38": "DBgJNJKiqKsfMY1amUeu8BBjNXvvYbDhxfsKRT9e322W6EfrNtg2W4JabEHkxKfovwHyBPSyARpn2wivUfTitwh",
  "key39": "5ffSMC8QxxpGFnaJn3jW8bNdy9t8KreN542vN73mQo75feVxGeQTEpHMYxZVXNwjdYexPKqcSwxBZK1HXEhrLFFF"
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
