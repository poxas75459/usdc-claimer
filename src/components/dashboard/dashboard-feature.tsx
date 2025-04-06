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
    "LmZyRy9dZi9bRtrs2uq3N8aMZgNzSNoiJRw9CSfLs1uZj1FT1A7y4X28x5NYvDg6r4dGRbiEFRmGWMMgs41sT39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLYoo8JcKtmvMaPtgFKnJ5c4nkFB3vpwMXy6MbaJ72NLaLFc8zZkrU2mRT1ozoqVvhhJyneRJwnZsqnGCxGfN8i",
  "key1": "3oa2edzPRdBduCjAQrXvDGcVcbvwMCEYxd2M1ceLcCq1JaXDaEgmb3vXV29mpiCF32PmKzi4XBUMc4Uhh8X3GfRJ",
  "key2": "5tCLx3YttZ1TSubzRCD9NDwXtCW8mPnqdkz87eoY5wfu9g58XHywNu9g3oQZWhRNLuZMgnEozKo8smJbrtXfrSth",
  "key3": "3cpEfcPfRN3o7egBUjEZvKEpWMFWyDDTh38x4M7v92mZHFMDAAz8WXfpXjYg3qkY2xxU622qXw5rfDTWCVULzy8x",
  "key4": "57SQ2VNZkrysXhvYmQjFUENGXwK4bwYaAjVQ2ta5bHThKpUYRaJT5PDaEu5JvDHPZrEpWmSamVXoz1rVhPDCX41E",
  "key5": "hpwfbzdgYyJMAYDJ9igajggtiVqQb9EbpP9UeJHs6ay9K5r3sWka4wVu5JrwUwW1AAN21HWTCaMuhwvNTWCKRjg",
  "key6": "52Utd9rvu76PhxqjH1DNPQFppehwRVu5eH2GqCQi4equSEa4CoiiUMA3SsqZoceYPhtgsYyieTSZozc35vnfmJRn",
  "key7": "3H58FngdNuvquHGSEH8ZfEaKcxD2VYciy9Xcp4g64YZg6E6deqkdpHFo6xzMKwiRRnfcSdmAxzsTF6TbRRCLtoBB",
  "key8": "kJTyTJAYJos7gWXtZbzWju7Ycpn6uRaXD4PhHXMT6JGoUfh5cCXfMTkGsMiqmcqNsoHqmU5SzcvGBUqdBJqyLhQ",
  "key9": "3kpK56ZNBtGf4HL4zrA4ZcBsftzQpAKqhsM18m21556B1tvVR6nU7MGwL9wyJQTfAuMaGfBbA6MDUGbYMBdETiwe",
  "key10": "4WyzfhonXifP6RjjmpAC7RLYrejREQ21LxYTeGiUmVzhQ5JCECqQnJb6KWCrRX4BbSKzGGKeqtC6Twm78gZWecf4",
  "key11": "2kyKfs6T8ikcn4WCjcJJoTWsnxjekLW2HneGEgipuE3bZtqN5Sf9ZLL5AJEh7Y5TajrkAhhbzg2oRUt8dDc1YePi",
  "key12": "3SR8Tqu7Nje76UgTkrKjWt3XXhptRhXm6GMDSkq4G8Z6a5VxbMfyd8SPGUBjZnhpe9wXys6GdJKu7BahM6vD632v",
  "key13": "37fnjz5fmvoUBLSbfVmRxYxqC4M4XH3ZrF21sdiracGtJkuNaqrWrQXtKsefwPyCWz97cHzNAjvsTxUayc8eSsYm",
  "key14": "64JjzZQrXhRRNR7CqmT9G6yhLxYwZDRxugAH39DqoUJG2VBgLfinznaXoY9cQXXDPRQksmDDpMTrEM5MUCGrHFfb",
  "key15": "3VimTwSXGF2SS8LcWY2afmDdJ3vGaTKWabfFfp31LNjz25xZzg5VVCwqaafouvoEjkjrrAYfA8ANTWyAGjNYjm1V",
  "key16": "e6xpRXUawoAYaEiX7h8yP18t58Ri67b1QwSakg6Dgwq3SNNh3rAwWdYwWFP6J7uuR1aj7Dx2XhPZYqiZ7HsU5gk",
  "key17": "32ku7FHaYFkj8T1SankAcEtKscpsLbgbhcB5kKA9JYW8h9N2g4AeV4zjxmUsnPXxJoMDgN54gKw5hWr3JJ4vgRRC",
  "key18": "2CvVLbaMxMerekepECJiQGXbAYM7FSu2SBxNvRNt1294Sfe1TnF8W9fmCAVfHEFSyTUDmfEArJZ4M3DUDh3VkfyQ",
  "key19": "2gFcoWwTZpcQo54oN1Hq3aiAASXFksS2RtcRcCk5kqembbD6oQijmQ3cpNoikMAhtgeTVL2aTzjgAdCTL1zVNjX",
  "key20": "1fBYNKJ61wk5xNPnhNua4YdHCZwUcJ3hEp1AKnwjgpyA1jodzTy9YKYvgLeb2pmHDpKYf1CjGW6ixUGVcLTPSxX",
  "key21": "4qhc9YsfurmMcZoKMrRa3cy46prg7cjEoFZNjypr63gxdSSE19wJnwdgPq2wmAE1iiWhgQHpJ8uSobuFGvXUVuiE",
  "key22": "3y7JTdu5pV6mLrMR8uhGnepFMoaWp3sD3zF7oZcicHVTymaycA49CyDSNeD7LQYamLT2pDaQALit1KKM5KcNJhni",
  "key23": "4YYCYUkfVf4PZoUoJEsJ8Qdi8VBziXZSQoeEPyZbey3J4dtXzKx8eeBaiufuMUiEFEx8R1PyTJxanRhzUzvC29oV",
  "key24": "5zDBPsGeiEaFXvdEfckqNvGAqk49qdasU8GSQGutrPqa1hiqnqVMrKQxN21pLsAhBWHgDvwmMX7QEmYXvXfo994D",
  "key25": "4dhjdHChKiZDvQdJCRXCgyMk4afWGYHVGQ88HfbyLBJifWSzL28brpaas1ZxvpFhxtT7E9BvTWRZC9coYy3K3BSg",
  "key26": "naHjxhPmfhX1SgWouAHQLpYm2RQ27Urj48auCSbQRRj321qsX6x8rCfSRFtPA6dVmR9wQKf7tgZALTnptTQT5Ay",
  "key27": "2QxXyXXwjzQMTF9PBWvgbsAi7MobkpXG5YBQQSyccJJbA9qvYNquwMtikFNEvoMLCLHXGq8mt5hzr9KhV6cAmWnD",
  "key28": "xzS8MJC88tMTx6eACGs3NLQBxuc4d1w8H4GxH2qD6S31RFt5BorrMRGq9qavC13Swh8KQvueJRnGxgeND4tQCWc",
  "key29": "2NagCctGreA6xwpPLkM3eSEh5gxnZDJMao73s1jXY6YHnPJq1vwksVSnnq1XZUzPUDFsurMBVBeTfZgXUcwwMSy3",
  "key30": "wzAwfwiKHAAtQQggzFckXCeiKXpRuxwRPMvTrGr2QtcFVwimPG8AZ4wJu3ShxjSZG31cLWDPfczidwwQ6nrbCu5",
  "key31": "4s9WtmfAtHtwNsJDrGjbrnPjQM5gpUNRmiSvAe7czbkCcDo1hiRK5qZbNK3fRfjWyn4nrPqQG45cji5HvyuLVRvM",
  "key32": "3qJCF8ofDEhTmmcgCZo192zjzMTie9kue4xtq8xhQMN4eobDVY3SP75gwXdEFzi6UeRaLYqucXpEUJgLFEwWgSfi"
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
