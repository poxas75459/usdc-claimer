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
    "3HfbYw4mv7MfsiuLPqsKVVModdXVKGg5SoGAC6zM3NpMbkNSSc3T8x2b1NFuFjFThKsXkg7T4wwibwgFqKUMZzDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chop58S2aQRahviWmzvBZULGhyYC8q4jzFF7Gz3RGmvEuYSuBEEFKhpyNswtEj8ZbfcLGoLRsprZ57gS3Tyed3p",
  "key1": "5eRSteXk31sFZVq3TJNTM5FGnj7sNJuShzjurmpDCg1s6SDoi68hTAAGRP7551bYQ14RR3T351hXZgPE4pJezuhW",
  "key2": "5tkMhKWqt82jYh1CzBYd7sX1LKZtw5AiN3DgCvFABRPUNR8zJmopAJ1QxE6YRdGRBsQcHTegfzFN4Y6MKBiQXEVs",
  "key3": "2NW4aDVCPnwAW8NCcYiMJNSJeexq24tEJv7Smr1SUsXfqiVsBCvfKKjo3DmPEfnou6EyzJC1UwJJ5Cf5iQdEVdhi",
  "key4": "5aUUPretvRWMrMvamYrfxy8iXkB45EUbtHJJGzutsTKaMeNyMcJKAtCgi2AN5Q27j28rTDh4v8a5H3FKv8L3FhoY",
  "key5": "2Ez2Xw6gfmfbmCccPX1Rokpif75z7o7TcJanDwaWPgosoDirj981PsR7h6AvMdJUY4kWgTzweBt5Dbbnm7tAhVcm",
  "key6": "5v5VbS9YaiewpM3sW5TkMB2o7zPjRWn2FiSUiwd8zPrGgnoNVgoQpicL7TNBBFCJKxBCY3dJDo6WhEqGAgg6Ppxf",
  "key7": "4QwXKBvQ7rpWHJXEH82346XtLt2qUtfLbXLRezzfc4Tk33n8Booiz2rXirBDzpKRXPFVijM7C6q9N4eeyQDAbjmW",
  "key8": "2mu6iB8ddDUSCEYYdii8FyCFcfZ2c59AZTMEAfoeH2pPMzjfC7YvQBhKmXNWGJnEWQN62qkUgvK4dGeCZE96ZikJ",
  "key9": "5aiKCKgub5abkAhj9Vh13QumCQN1rbJHSboYohXL9zriL3NHZcXYppK18Qfn7KKgC9rGAuv5xdUyDJXb274Vscqf",
  "key10": "2s1FNZJFa7Va1zNSngPgjkvVqzzs7s5woLFwTSZErB6J9MVnmxLZVcKfhyghq3m2zc7ykknvoarrpKD1fMVDCFY7",
  "key11": "4vSnNC85hSwjfkXR9vjmFhtbHJxFQAjMKXFPLj63MMXD5D1vNMkTak26dsgNLwCxnXsrZkLW97EcxaCnhLVPUf2U",
  "key12": "3opHtveH4RzGcPj32Wy8wLgPyw8Ega3hu89R9G7oJhpK3Tpi4LQF7Fyrmt295JDT1dTZ8sWNNqKigQsZiLcGQfwv",
  "key13": "2HKbJgBWDS4YmLePmVMW88Sm8wTMXbVvbgy6SJguxqzYgAMGjqcaWsY9qeMbfDKaV6SgPwEuSdLYKR9y1wgVKxjF",
  "key14": "3Qfu55xQj8d5J48wSPCNR2izp4PcUw2MHAienbwDcKV6pfUHcx721ohdRe3nUMf63WpNioWs4z1Wzn1c5y2gJogM",
  "key15": "54YNouxF8XAd46d1dDxuk19KANh8Rh8tNDm1QhL1Xr2oQ5YJBhjkdGtGMChrnTbQ6f9dRsNbN7Zj6zm9rvAMcA6X",
  "key16": "333djf2b2t7QUhYJnX9KSFFvtwCKm98FyMpMrAD9aR3zJw3RYKgk6L2uPxJVmYPXxF2VCa7kX8XgrG9RRSctdxhm",
  "key17": "mtYGYJzct6TA95SEKawq6bGAnusKSEZVKThSjMSDF5QEqBFaKzPNxmRNKe4zP46352Txtpr2LaPDzZcfhTnaW74",
  "key18": "5aU4B3jJyRXqA4mMk4sYCWDFCMojYtMTeF7fj9wWCNUScb3FqRf8EC1b1Pp1ZrwZcYvzkoNCiHG4Rm5xEDVDxeX6",
  "key19": "3ijyjNMsXyT9VAfWaJgEoJoqwgep8JVHEzfushvXBSGChWk2c1MyJ6uZU6zWMJNSqmCGYCyDuYm9Td41aML4AcCy",
  "key20": "Cr6AjgyAnCZVzoJ42ahTE3Y9JA4HNrkLWbvYBtox7z9VHftwp62yyx2ieyVkM6CLXi9ywNDuRUMqGPQC3Rya4h1",
  "key21": "5UWmT7RcCQMmnXW5x3cZ6gN8mJ4hGtWdfbtXo7p5e5pJmxecd4hqQeASwj7xosJUc46EtSPz1GBeQymefB6stLBw",
  "key22": "2jPs4cx2jpzeFThRDMwoWAdRZDzveNYDCmutXVcWBsqRwzaYxtf26MRZuuXGHfPQsQbwTyfYJvdpgLVQZSq6R4LG",
  "key23": "48kKN5EKKYBfyyG1fEbbfvxqguMLwgpBtZLhsF7Z9agfRpDTZ6dZnGtrfKYpBLoP6T572FwQq2EZDcHd86mB6MEy",
  "key24": "kv9aUehP2Qq6P2ghSiPYT4jrc37eerzmg3k1nrTsfE1Ys5d1xsZ8zeAFB1Rt8h6YusVEhUnRRcMCG4P66XRxjkJ",
  "key25": "2znDcS2innmrzBfUepwdsA2Pd5EQjFuCfFPioap4XGLBerBa3p4UbNvvUL7mzPwrhAhTFnF1XSx45nMa2dKnaUqJ",
  "key26": "rLdT5VGbNxNgufrZLk9ykz52K36f46LR5Qn1891YNDjCazVcDwmtrRw283Tbrq9Vup9wipDtTNBMwCCHMxG5K7y",
  "key27": "3XDjhsWHdW5V9wugGCwBNMKgzhiChufkAmLpqbfN8bLm2tx8TPfHpwvwJ4JUXx8ww3w5z8qBCdG9y6odybqBUmvg",
  "key28": "3TXDcbLknYPnvAXiv9po7MZ9882ew6kvNexeoghz7S5hCW2pxomPWyCsi1TQrHk95hg1XdSeyDShVbiJAEEDEuE7",
  "key29": "skXKHy449au4kXPuwNK9Ezc4iHZYsDeEbv2dita7VnxfhDSDa95eRxMJGMvPshrxB8x9KVmY88gGnwf8udaS2L9",
  "key30": "3rdgrN4V4MYdEmgUAKwof5qAYNR6pyD9rvJnJdDx5XPAbXzRTpEzLeGpKgG2ELs9JNyYsWUwEhEUAwhoiev9DFAd",
  "key31": "5JT1Be1Cw69GTgpYh9mWRgx7wpenZabgbJHmSzCT1Q9ZKMQE63bth8SUH7uob2iTTEMhUnC1i7xA1wb4nu42THNz",
  "key32": "5xNt2QKRrsLKMBtvMNUu9tLiz7PqE2Tay3DQRsWGbqXcpddXzaUZxeMieoU29Qg71zXsiKpaK26CkTEmgFN3uhkg"
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
