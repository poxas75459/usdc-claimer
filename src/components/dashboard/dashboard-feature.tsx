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
    "5pHcWdNVjVqHWpjyL7TC1vv8nTrokKVKTKqNnMR8fUiRjFdGVnz666J5qX1oEWhvEkVZZHSCk7XSUructw23feZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLHZZKMjLQy1ra8HRBBVQipy4B5cXMMoVuZzEaZCpzJg6dPntQKSpTVvyWF7KQd85PvEUFFrRDBtfygXtQR1rt7",
  "key1": "2zjkm6KDrGTjiNP2ZHWaH8mHTaRaTxXnoJoJYemFPAQmqUP7J7J3YZX5hTFxfV4cSBj7aF3gkjkLxyM7pTrKRoqV",
  "key2": "4DaLLgKz2m7L7eGenDeXvMhjXVrjXCV2c3oJFBYRLeRUU73enj8TsfhoQ1hwThyoAQ6v5zU3yaevXiQjxc5cotvp",
  "key3": "5Rn61HxvGCrivebtxuqNpPhVoz1SapPArrjAk6k4WUZ6rExoszi8pZJgKNX1XvuipMChey7wiP8VzkN3Lmkb7VnD",
  "key4": "4qqRbfjmVVK2R7NXhFJBPSdE4sAgt9yLHAkcjCqm1Piz9cFxf5uzPzPsQqMjy49q8CSPXmtmjArzjv94aiKmG5tz",
  "key5": "5eia7xGLbSfcxBmFSifWpARvRyMrXS7hGx4Binguuk5MDHa5JdtfJjrTti6LjDRpcZBPR8AmpmyqdDAQkgg1ivMf",
  "key6": "26dHKfDWLkU9eW8qMipiq5qHyiioYThz1fdawLXcEzkpBKN5cae9Jyn2V3qz7s15Bfe7w5jU3Z1RwLhrhpWtcw7T",
  "key7": "QpxsykrQzJaT9zNM4MxYZ7nSDWoXiNhgFbL8jGUvX3fK7Dy8zoVKmcZ7g6bm7Fd4uKCENerBRcjghK79FUnntx4",
  "key8": "4q1yigFjaZMprcRcUen5GTvBj3bDjxSsQbajjHxTRLTVYKVk5QeJvRTh95QK2PmRoHUhUdsGe8SvSVPYKWLd1uab",
  "key9": "3Dp1Nx2SQTzPs8YjEdeF6VDrQUGiMwLp8pQnhbVqcYun5CsZCBVPUARPwxQUus3powihcYJHoL7UxmZkymgveZvV",
  "key10": "54RcSqsM78isGdURCxa8bT5nm2uTBT9Zz7xdvZjLMRCWofR2RnS7USoJp36U9DaYBH5XkYqDV1dp9h8f7UhjChZ9",
  "key11": "5snsfzEJsUYw44Ur7Ck9GGQ6cguLahVZTBGq7Gs8Jmj3gQ9eCCV5aTjRAwestbE3PUEr2sgMchgX3Lg4n3TkSw9w",
  "key12": "3cD7C9HdBq2Rj8QdCXWpco7BHQTkLkKVWqMhNDRZXahPHpNZ9fi8f7R1pWWPQ2aZ7KkH8j76Xw2xZRXyHLtjpziM",
  "key13": "5JLN8zaQvPE1Ragi4cyYWyKjABnszcmWwAycEZuBdYRnH4MPxBsm7j4YF1L8rdZYq5mJNN29gaLM6bg26331aM58",
  "key14": "4YqAJ4kXbknBUzPW1FWnQqRHVLmhoCu8LQLGjVQdZ1rRpRKbYp9wBu4Lf4LJxR1EJwCJijc8pp9r6xu35gEeoYaQ",
  "key15": "5ZEdhz8PRymn8HQkSmfxcwBfKcgYjSLrRkKUFvBwM6R5QsajXY7TgB5Kd7uijhRLmGeuukAJxwDgiifsjTiXpKZH",
  "key16": "2mBeD1cbXkJRdzH9UnqXVDTZpjZDqrh1qfnLH28PybSgGSShSimASFxpQMSbXoqdmZNoLQUDtiFdgkfdyzMBowRB",
  "key17": "4rtVkMdUm5432TYC2NaracPttMpctGb1DM1PhgPrjb1NwrsuEsDn3NCzXCqxa4u66j59RtM7bq7P5Z3ywmaZPRrU",
  "key18": "4fknUWSGFvAkbLQNb8CWrzarZj134j9jLyCAHjwHTZnzBkgAeJyP9zxDUmRGxBRNyLaYwn6U7dY7KtEQ3adtWjJR",
  "key19": "qji351fw9yebT98hUPKzcZdPj6hXV1uABcBNiHbiyUQpGT7UzYdjRssmv5TPkpziEQ99Z3TpTQiEu57ALsntCHg",
  "key20": "56fuDL53vYKib7dC2tXPFp6xaYLDQfHEcW85ctYSnYAjJjyTD19CeTR15y8GHFwiP9MgNtNjEsPjzMZePcUtBQYV",
  "key21": "mwewng7uUyCQN1jz8V3pHpt7YfVB7eXmLm2o6p3v4ZcSLoCP3DN3gCR46kY4v4ZPgA7ALjuNoxWecPM5kFsYEoA",
  "key22": "34aYFCCjPzAXoQ5tv2qN9a4LLoutVvpuZaMDYgKBmnTBPK77jmCmMu7t8fMfZmJ5sY1B3VfBFGJteKT5U92qFsHW",
  "key23": "3QP8LWBBtxzA2Rp1HE5HHQTtt92KKbxU8k4cjKFaZ5bRKm7KaQdCCSHScjpGDf949sF2Swb3W4GJuz9veR9dbetK",
  "key24": "YT8JZ9a8eA7EKXitcakjjLqPwg2z2jn7Z5KYwErCzhwf3HbmaPUsVKrCKB1kTAqwgYLnhF7Lw97QAKRstXe5xaq",
  "key25": "2HhPPraVhkBWRRRYwUoQe7B1T69D9jNPNw2N2t3aBkt15FW6N5pH6pZQDB2ePq49yv1BWsyEuhQY8DiZdviN9kRY",
  "key26": "3rC3TPJDSSs9dKq7KHZJhzEziAveVsUpzD7JL3DdzuXudFdtth1hzWFfWjVpvA7BzJUMiseL8TceXYWTq7ZpYJZb",
  "key27": "5dzehtu9eGNm8128NduuzDKs9cFnbFgTsfawffHHBVLAAKigRAhGW4YFpcyGqfPJn4mRFgc7u5h8U5a43WV7y1N8",
  "key28": "Ywf1GbUkZfcGQhzzexcV5p1fdTntSVaLiXJCBP1FtLijQE92inyM1fcvvD7RSeyu3cBwfb4WfrHjAiRMZzud9LG",
  "key29": "3FwPy9MmWromH1BtGqRJD4dkF4NKrYvMdmE9ibz91NZ3Wxn4RtixoxFhRHSXs7HCDeCim7g2CnVzCUDHVfTSsw8N",
  "key30": "rczv9jsiLs99njj9eocqPfVqjjfR3xj3WNjqC7zZp7cWzMj4B3jbVMXvrt3UBPjasv94SHPdT9YVDCbMfwh14bz",
  "key31": "2bknNMd83uRJPcaewmzye3Hu9figsdFE25w2eLb8BkQdn2QzjnF2Yp6nDcQrwXvtcqK7QqsiBxRdRiKi67MPhR4z",
  "key32": "2cxC4SvbWa61b1zGXbVpKkNCT3PwGateqV8nnQj4HJ3NF5ad1Yg964io8UbQjFdLqxmtVMWNgAEpsphj24xkLThc",
  "key33": "3AtJv54Zmh9aAvePhdr2uviPLbCDbKQnX8KMtK9n7RfyoU2b8dDcXvhPmSbtw9WFXHEHZHkG9FsFdhnDYcpjED4S",
  "key34": "5a2KySbbYXLmChGX9LPrappbKRDizuxFkDX7FNZU9FPdNJtxCNzjs6R94uRjeeuthQ65c6H42o9ZFAZYVZo8vpaQ",
  "key35": "3VFYcqphrFS7ZaziYqXMpLYvrrg7NTUUsDMdJk83qCc9q5YRc8wduj8mRjnvXmUidshUnZajjSjiEU8XVKrabAWY",
  "key36": "5pPMWVRvVQbSgF7Mk21ZqQDyNUzx3suf8K3HGPFxujnJNDdiDM8wxqzJXiXSqPGfdNWJRyKHZJReNBZaaRJ5Q5WX",
  "key37": "38kAr4wB62xJqx8bZdjrwPJEqDSUfWZz1g6jQLQdrSyoz4DkKNi5wENvkCx2gT9J6eiY8AqgjWF1xQVJKonMVnPc",
  "key38": "2PCJHaS7bGuPCmdLxTuZBgBWdhidiTKaP9QQvzKe556n3k3qQzD3FkbdbFbKdCJpW5r7V62orVrY4j769KjtkSEA",
  "key39": "397gsiiX4ZzyLjGAFJMCXA6mCcNSPAiVBD6abRuh4Qjoe9F8VjVw63GsuF6gPqkgxKnPWDTkJG1PqSie6hc4hyxw",
  "key40": "5x6MwtCpFkEtRYATjWJSXgHMTfUVwHFKq8zPrg8HBHLZB2BBCxr9H7jQMXicUGMuDgT96LQiStLGZW31tc9e8WAd",
  "key41": "57hJBy4n96JjXoninFsjY89Png19WjLLkokexp4rNfRzXyMJccyKCcuJXz3mb8tS3d9JxpFP8wCkGkuViWK3tSMT",
  "key42": "2Bez6pQZgf65TsDA5zQN9PEyf9zPMxwmRqmYfmDtLMgz7MhqjzSeaYEa8EuP4nt9sn3c6qodJP3Ufv795nUq9BTQ",
  "key43": "3LYHAB64ssHFsk7Pv4uWh65BQZ1KdE8P6unumvw1qmBETV6coc6ZXA5Fsok5hZdv8ssb3wUFiz4VpZBv8nchpUm8"
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
