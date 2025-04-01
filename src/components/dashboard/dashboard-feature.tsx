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
    "5TyGpFqwVb92xSnHGAPsfywXn8dAEfagtABR1axvYz1UGNopieVr9r9sDeJpEntiwbC4Pcy8PFmDxT91PGW6Gt3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41A1qBmxjJ8eVCgUe7jGQy2mEFhNmAkDdY2VRkr2rdcKkVVvBMNfZPYYzknfb7ZUHsg3nKm6fE7xgkVorahf9ZXd",
  "key1": "795KtPewX5RcceQ5JPvfzokzY99BvexAxcJLpEcyA9Ui7hMTv1zcQrACkX9PnWGjYCJuJCtRDKoEqvtxN4YhNru",
  "key2": "3sF5eHrNwKevFGSUQ7G24odKwkb9Ck2R6pvrJ5EpqQ3g7fcMkg3q2Mpx42VM8SCRszVQgsMA5fybup6o1VpR5WE2",
  "key3": "3H9vTCasEr99475czG7Npr9HdN8NssCKv1aKj15Eky61r4t9pmGAQjZdWsdt6QhBPehgCDu3eAZSJoYaxtTsV6H",
  "key4": "5NL2bVLpRSbGPaFkJfRuc4x31vmyiiQFRLNgbTJmyu7dYLpTmXj4tvUKitqvBU4zaNWhJmYdGtKhWz7qp8JHCXAX",
  "key5": "VY223ofuZywwJmc7ZtFytiMxsqNkYednyv9VLGmhVnhzGeZx6hq6QXP6rChSdGU1BNnafD2YPVCYG4f5FNMnyCc",
  "key6": "5Wbt5dvAsCfmt212Vao5NSPmLDmzuiJGJa7zSWyLQoMBTp53EJXoqTEwxvarMJUuneXzp8ZQ3i7fA1PVu8z5ugTC",
  "key7": "4sntpSb9UBWPoUuKNyUzzrixKu3WNDNqtoQMs6xzSPJgHMKo6PfwAgiddwgmFB3qYsHpp7boc65mwXDpX8GvgCv3",
  "key8": "4MRpsyoNsnGLJ8HeaVvaabWqU6TthR89VuoQXdaxr2RipM4wcBbDj6QvirW8SNiRh6JMg8mjzSV1DPJXjPyVTnYB",
  "key9": "2VRhCCyBrm4oHYYPS8vpAY3kMVW5mTAZG73NguWZRr5dAK6wV27rLTAeV9PnxgXA2pA4ZcWKk2RG8ERcDL7KL6Eb",
  "key10": "47Cxi1RL8tWuiUDsBLJuW44dVVwp52GcyaKhUMJKDQV3sHKzvaLUPtFq5CAJ2SMZjnRqwSLXANqGEGgoo1q4ceQS",
  "key11": "23mMk9qhkHFNGtN3EJgvAvhzLH4DNpWn74xtFFJ118MRvZ5jxy2Dptt4TUrNVnBBvR3oUyehbszeknWkWCRoSi44",
  "key12": "39Em1sPNJ67F9gSxBQTBbvPVWaxkMJZ4Sp3i1iDFQto4rZGuaeSRPrXtZ47qzBBxfYtQfD7Mjjn3QfCL35UfH47A",
  "key13": "5qbVGcvyuSjVLf9pdXnTiPChQK4VMHPzSLnz1ZE5TtkC8PvZabqDr6oEUsk8opeyA1VAYGKbn3T3y6Wg1xPpCBqx",
  "key14": "2HweK4RGeLyj2Lc66Rqtyc96Pv7NpG3cDz4PEXTeh1r4rQAxBVTos8NQMmw5nNQNPoXCzN4ry5eDET5hwy6ZP8Th",
  "key15": "5XPC1H5BawpTvHNsvMRu5W5cmCEMFay1iJmrHTTciQeRH951osQ2hR6fy9KFbvgtkjiWhWBQozTXhsy8SvAaZPFe",
  "key16": "2pZWA74Bt2jwPbVJd8yfz8sWjZQwAJese8M6TSVTkCfbHctMMeWwfmBymX8mSts8yDxW1gogNeD6stZL8xS9W2Dn",
  "key17": "3Ce8VF7odHMqEatgFkDDEeo83b6Cf45Px7CHDL1V5SKxAxrYMFWexxNS5ytN1Z8274Db3R8nF3cdw8HPKojyMCbD",
  "key18": "3SqVgYGc4LS6g5jugxSBTaBaKMYs8MFgsab5dAxRdSuLG5SVj2YQy18Kbbkmo5HHXyWR68z1tuyQE99jLXxA4fc6",
  "key19": "2QBWXpmaE23Gbg1FAZVssgoHnT27kQjPJ7o2qjZj2qmTPZrAxuL1aC6Ei8Ro1vmKWisWBKEQGDUi4uPMZxPfRi1",
  "key20": "fbwWiHHrhem9ZYhjy2otEESaRtjupoizEqRrx1N14wJEoDebddvWx7SjMcpdX8RZEdkasRDHV1hZQLgQUgWy86i",
  "key21": "3CMBgKLdV7KTRq2vCK88fvoZAZRQC2bbXRSiZvZmjMpmdff8LE4qaisMcnCjX6bAruw9b7n43HVNs35iEAT4zDdV",
  "key22": "jfzRHTzXCUwSfPEDgUoqDq55nzhP8pzLaGiegpyCZeERPEaeSQbBbrYdNaz6gBBw3Y8cetueeKcmX4WDaX8Wv6Z",
  "key23": "3ZWib2v9GfMkjGFhq7i32ksUFXqx4kmiPTDp6J8kci5naRnv24nA4aSCUjf3ECZ5BUG31MMKRoSYf9rV3bA1vKSS",
  "key24": "5HUSccioVWUMefyuL12WJTRJ7HifQJyPrW2hcfzsjiab8DVSaKKMnBHqPBxaQ7DyZzErJ24vPBuxjRWg3u1AhvgD",
  "key25": "FtqgE9XVwrzhwv8kwrbisbddNGh4QkNBbAs83UTWWFi8TfS1MLJ8sgpwy2qRfUmm7qUm6nY8JsjDMM8SbKUAGmP",
  "key26": "5LjiaZhktWQDJ9HtfkEgkh2sDZjs1MCVbnB27tphzY7qJcrxjHHcQ73sSh3b4T8EZphtTGdDAyYnYGBh965bJZJG",
  "key27": "24nSVHP1Wjo4cXp5KecWdYx2HH2ZqdZUCKqCHJB9WDGjogPpZ6pFxDWMcuTv8miQh28ggyKVpt3AnZYCMdYvxnar",
  "key28": "4iskJ6MrcvziB4DaizjeCEWvqEozneVJ5AdzkUHccHNxqCJweyW22DETLhBjgTzJzCMdi9K4PTj4KsdeLRS5eYre",
  "key29": "5XU3qCYDwasYPJDVp1eMDsEQZD1NTX3azx4a3uktvXxuTcZVtspEPzR86yL9S4xKqk25gEdY8XYUmFWDFg2Uw8c4",
  "key30": "5Y9xAuqQEAeWD9PCcV3HcrpKuXzEY1PH4raPDC4UdA1koK9pJnovjbALprmpdi6qDEmmL2LdskScppWC4wELBeKe"
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
