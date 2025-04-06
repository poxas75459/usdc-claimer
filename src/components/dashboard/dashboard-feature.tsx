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
    "HKPfgZ8Ennq9rmkcFHTgoiVFhEiafTFZ9bYeDq5UootsC9kQWCZsNPBbA1iC6ZbjnUF19TTGvJv87N5StXJNqno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eHK7CpYvK2HeJhE9mpybuRHgB4DCcgv4hP3MavZHqS5wfJK3F8u5QDEimS4KoSaCxaTTMw3SLXfBxtVuTdz6AMf",
  "key1": "73uc5g2hFEQASccaNDnAGZFkzUMRYnqcFduVVsCWBgWbGzrbhqPka6FyPRRDusuY9LbX6hAaQR9UdtomnGBJepw",
  "key2": "2orwvXkkA2aSiH63ryjFsaoC3u1d2uoQzQSDthh561ZY45vYig5W1JKK5Q7mDJSFL5dT2JHMkSAd7SwUuGaKXy3t",
  "key3": "3HN89ozQBkDmPThXNvioGQDfQadFnjVj7Y3XkoS6TwDDbQqpReNk3EHhF79hYmMigpU8KrzMxBQEcpwVPVKghPCe",
  "key4": "2Sg7Btbg3gU4VQUV3CCU5d5LPqsU2wpkf4JCgX6NfyspYKbY9f6Ffzqd9a2pxxD51edNT5hFn9bobLBkEhhpYcSb",
  "key5": "g6jp3HMQ7dW8U8pwGynjQUGzGncteRvmuzZxteL3TYrj1Hy8XyJnJZ7VZZ1S6QUHLDJCGmfR3nfD6LuGhG6n7wj",
  "key6": "5xRNYkpjKiooA17pirs6sn8eHjpxzT6B6pPMkchd1JRwcdJHUmUMnQFMJjn7nGins28ZVjJS6Wr4wJQugh8aUE1F",
  "key7": "5uLDEQ4mof9jLiSNhey4zNse4kSMJMCWJKAdFP6SAs5KL5XA6T6ZDt2Q15GzNRF7MvMoUroRgq7jmTbmDwjsyxoa",
  "key8": "2g3Vk7pYeXWWfXDnpJnvEGCSTdgWr1Xgr2sd9nuWNWCLxceX6brhNFvdcwsTvU9bqk7ngHwMCKMYo1EecTB5THcm",
  "key9": "5hC2rFptxAX5qiFnR6cYDEGnERVSEC3hcGRUy1vV7rLdCsBS1v7d7YBzS4fLKqo73z4NmSueoqHDuiJMzUuApwUs",
  "key10": "5Rit4PWyEVn7RQhXZpnx1bayMuMmUmRYrZPS3qHdiPJongRgpKAWEXcsi52HmA8kBbdWhNe2k4FCdsP3rxN8S617",
  "key11": "2vWLJ23wGj4pzzQmjeLDXCeViFfhZzPyrcxTBCkT4cpNVncS7ZtnftSkRDTVvYgYMBk9nPsVCWg14aT6DTmKqj4i",
  "key12": "MpRTGCoBSFhmsU2hhNwCbo6sZJcUHyyQJP9egvMRMmzRuWahMvaJBgjPJCQz4nw3VBY8NTJJJRYv5xou8RrB7oq",
  "key13": "3kkhuL6RaYbLXES7CBU5ma1MbSoFXYMaWX4N6SWJ8FkwgmF89KAvmAPVwy8qxLEW3dVBoBCirsyU7qTxSw1arYQm",
  "key14": "2BSrrinZFR6VrbDjPpHskoFdi5nr1wb3D9tkjepdusVBX2BQCBfpMSEGmJFUhFzGpsGnnmFhmfSaBeM1gFSDyBVk",
  "key15": "5mgCf7dR2WW4zeHdxGXpoopd7kgf4n9gbK2C3FXtZzMs4ZR1bdV61Rzxw7KZSpfcA3PvSYHeuQfHBQ3vXMyYJinP",
  "key16": "4Vc9PD9tEoUTCnBoNbfzyKjCcWz2TmgBHfEn8b7JkVXk2pCFqoz6ZX6eDjGY6g4PpHrVbyRzCoBvixJ4tsFCr4in",
  "key17": "udSC7sCgjg2LznhzZCaqYsw5HSXsrGrkZPf64Kc1ri9XXH4hdaFbWFgF5thEb1MK7L29qjevhpSZF9EUXccfMD4",
  "key18": "TnYRNb749TTb7kyfQuyXnoqvvCzRtCPWmF7S6hi4Ko3LwzXXxZqbfvRpDZC2MN3F3mEFnmzcpZCT1vRULjL8shU",
  "key19": "5JyQxjzqBJRPJwZstoLyw9FMdugMsLgJhLVR3v9Gpez2AYUYSXJSB3aVAGPnsh3uvvpGxAupiBKY9rLZzhZ2boqm",
  "key20": "5StvQUY3997cZpa69rmpmyTCpnAFvMS4W942z4UdDLNtubvRzEhUeg8Exnuz619wUygF5LBtBR3iwiM1SEjbzHY6",
  "key21": "2Koy1PkAJnWkVG6b7HeP8nAwvpPPo9h1Ag1oAH5GYcHaum6KZvzXyKrZpX84TyA9ibCUVqVe5xz3qHe1i2jq1xiU",
  "key22": "5ZqfuXyDVb564miETYdJMG6t9xw9FuL9KPyaR6VVnpdp1XuxmWvhjEEpqTCxBJAVBsZcSVLCktU74N29tz9ot4TJ",
  "key23": "49F515ZP1aFFtp2aMwriSfJKsQStTo8FD1aetANzpVvtBV5FkoSK8WVqCnndnNXGziKk3UC6gVypqSVK6ysv2jwq",
  "key24": "3bV1oZVcFqxeywBoyCyuKJCyqtw8K9qvYLUwnuCwGGhAkoBenDYBH3iMXDGe9VNhepv5WqZczL4mBAt4wjUpK1sR",
  "key25": "8sDxKUrHCmnG66m3P41xpYDYoTv7A3vpKWAXkThs3KvgcX7DBwZsLXhvz7XJzRoRdoq6JyZMteFjG7HiibCfmqV",
  "key26": "4nN6j2rJbDeFrSpWz5NMSLAzFuVMVddxYYNTR9H7yM4QQRvYfDAqsFumyAtAssuobK5F1qQ2MK8mvVPY4Wns8LkF",
  "key27": "UW5SnrLFN7tTs1aT27Y3JtpLhYwbsJH2Aesj7B9fHkgL6akBKXcJ1Phim2vodbG9NNjAqeDRaCAoffgsjRB8iZD",
  "key28": "24eT7uKDJvkJwC7XEQYgZEFienangvGoydcJMbYGezr8i9PfB65TWbZJ8yjwhJDwHVxfZYDkcpop6HiP8swTinfu",
  "key29": "eUBhBC7BkK5nUUvf4Bo5qhXaTmCUaKNQbCHX4LahzpzkMHYMjHreorUCATp61JWzzGVKYEpkccxFxXN5LdMjE8r",
  "key30": "2aJ5RQnApoZJv7xEHwmu9AM441RH1CjJcbLBWWiHmpnE7p4U2ff75LfhhXigJRgagMhZ8kavt83toL4CbKG3UPmx",
  "key31": "3kr6To2Fb7QVwHUmMrKSSJd9RnNYx622HrZ4dSvXr63AguGZ3T6HgLnPEnk2SZ8knxQeA6ky73RozFngbhoMHqi9",
  "key32": "4e3M7pViV919RcVmFMEJUmDrfNgd8GFkv4pYvnApSwGgBhJ9iJayntyNSymnxCJw6XaR5eNGtEFqPdVc53mHRR69",
  "key33": "2z6nvtTdncektv5vXjyAZNvPibaH3zpswJPD749rffvp8HdhDBPt8yCN56gMDecuzAd227qqvejzTHX7LuGF1upv",
  "key34": "3j36yTwfemowwr2ARLHEXnPJFM9ieFD7Tv2HbgXawds95DP6soy9zBW7kfmbP4gn7q4bovuhpUSL9a5QNbqcHmvN",
  "key35": "3VsMA8zLzevSM7JX1L5UbtBgaEgdPVxvk3R8A1qiLgKxamb3yH2uWUUCMHxnrx2vex1CMXj2CjUEh2Hgj33WXVjB",
  "key36": "Juec1C2ss2qAEnx4hBDhg15attkbHfw7vUM8EGVSJ7BJs1MrTqhTdcVT8MKfBgF4XgEeKxxsX9gg7JFzBxZDUju",
  "key37": "5Jizjhf7rpoig7ukwftHQTAZ7GHLcawHgK1hCfyxTbXcBq7TzodA14BAkawtc3qKW5tQ6eQRspASM9KpA6GsDaND",
  "key38": "55p2doEVNe9qsSguJzu7iENHybhcDZtpMKVrFr4HVpXgfw3HUyuisAAwLRP8U2jBF92C4CnXmCJy95fgfpDu9tri",
  "key39": "2AjVLpBNvpJZeFEV1E3MRbAgKq9yv7PNHZ6CJyaod36ttjTitdLeGseJKSnBsmNHxFLyDvzZjbxXXtgbNKMwUjgL",
  "key40": "4jzFrmtuy97rVukEPXgW7oW7pVYq95WbgLUh4AiJipNCREkFgk7o2rmxrsfabVbpqM3DHmnGmu9HiFVe3FCJFgFz",
  "key41": "249ahEsRvtKemFuuW4XgSU95A5n15dU9JwmpFHkyuYpzrXoXnviLs7EPSiN7L6PkED7mTN6YB6bxnvGT6PN99VGg",
  "key42": "2BbZz4NR38NkxAuPzDve3bYyo94GMmc7PydSZNDZCLhaT3mFyctEtLzG92TEtm9T3zxEJNwYo5knxSLzTWjDY2Jw",
  "key43": "3iR99HWE6SC8BGuvDSnyDRwgx8iXfbEaBp1pQiws1R7a5n9kNucYr65TD5C4Yrp5AxtmXMz5VpnKKEzdys3Y1dMP",
  "key44": "58Ponm3bEFm65a8iFdHvr5v7Nxb8XLxSUKztnDWv9Wkz7xkDiYF3i7CdGY6vZ2J7WjPfFAHPCr9a8tzTiX1ciLHp",
  "key45": "4McvuH1LbVKJZmgw4gs2KZJNgJn2Yp6sfPFf15Vnm9CeEeJexBtXZZb33VFYgcTQJsWPN6b99P1isc7Pe3yDecu8",
  "key46": "5bPzgDChjKgfsLn11g5vkQ1v3768TiwEEjBc7PeNEVyjqaErxNC44u2HYUG4tCuoo4NtmkLkkp988t5agF1HhgYW"
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
