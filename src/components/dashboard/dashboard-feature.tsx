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
    "3QgPg91VMhrx2tU8AeQ29N2sWkbTTqv3yEPGrmkqDrLff2G26QS4dxE4HDyM6kmUU5fUinRqsLyZ4rLGYy7rGeDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28aLTHG8MCDjPVPHKpE6HMv6Mf5LQFKhGDUcun5Sct1AoKvUHepPaCFuW1551eBSLZUzBV2p87G6ijb3nMUyuNAd",
  "key1": "4wnD2XXiHSAAqQ4EBYTz2GRMa3gmNT8gtKTMbZxVk4Y9inw3etcEXQkBkAd22LthBHYfD4hRQNkjuGEEFLDfTcEJ",
  "key2": "2nWrh8XXH2qJPW5NUw4dNBn7jK4PHzeHzN218LLZrQyy9q4LMGwMbnWx3aEcwD3hesZs5suzfr77nBWoQZtFJjVv",
  "key3": "muHm1YkguvUvaR4jTfWPHKDFycYDuAtjFaTroZi9TUNSnV1bvZXzCrQWUPZuUxT2MaXBNk8sBtvgCFtNoVDkh5T",
  "key4": "51Rpikhc3QduacSjBQ2iTDrniWPTSAWCXTApDFreV7Lv92pmSiL7yeUwk54iD4Dc3YvW8dmYRKt1DfGRyP59WR1r",
  "key5": "4mDrWaLzBjchhy6SB7HBQa4ovZj5Muobn5hWS5ZuLpvDLsDj9o7AZ9cKfPbEoWHwXvLRLCiF2aMvdPauHYdbHYsx",
  "key6": "5tCcfTk5NCUc3fBzxGYCecD8YFu1bzXxSwTGuEtRpwRy364XKG7KQusigE4BuVB8zzx6AN961DUM7Wgg2KBeRba4",
  "key7": "2iDaqJZhiXS187VGw6CiYN1cuzxmbRDtGknkcqFH5T2KA4DeM9ghucQ9qK2CwsgrbDpV3ycdMxjxKTbpS6S995Ru",
  "key8": "5JXLZeiLqpyhKyMQEsgKAmRVWJaHSdoZaQSjcuj2iA6bRgo5eMQnJYZskKKxzw6i7CF4HKkAJmE3pkGLfdYRMLU3",
  "key9": "vbMuWGkBRJWeeewziQBRUYnx4Xq59KwpKjkzsg53CgoB1VbMKYVQYsvzNyD9ZHZEwEf9GkeM2UrUkR9sm5ow94W",
  "key10": "2V8SZatw2JtSe1SPQJ3B6y6Wn12Rk5DLkbKnx8qmviNeamqvRBph2gn8z23KYvnjA5ZGVdYJRmKPrBHtEFjtnXrX",
  "key11": "43aEZ1HL99zWSXf7joRGv16ykZJmBe3ELMKSfqKHDsLP8VcSpKy7PYPvebuDTxu5MbFtw6oDGavHo1dmSzR5V57T",
  "key12": "2sgui16eRURqDsf8ST3dEMbZTtW6oYEM81rKvdgm768pTZXLzMZEsLCjyFqXZmupDymEw7YFSxLT81qbGmLsXGib",
  "key13": "3z27ffAYaWnfN28XSM3sMpstLZvZRUm4vc4udWWkLvWiNX7fQERF7rmYNgMBn1k6yTqdMmGTeDR7GneMbPfgQwGf",
  "key14": "63bMomFf5VWSukF5HUqumgecmweys1HPf8mUwG1hCn5NErktzUa6CxQoLGHDj6as2wkGdvvpP5vDYVLCbxiW4Nzz",
  "key15": "3ixs1wkAYJ8YwxkPEsowNhsYdRv8SaYaZuYLYnkXnazdmiWNX5YqdQyaPnFtTccwWUEPscFjLYNNxFjxC5z26YV",
  "key16": "4ZZEGxSA2Ktfap5Uc3aqsW5JFi59Empxrx2cPH8qEqXECHkUzvoCk1eGqyHjmtiDpd6cvyHf7CRUtpjWK6URkinp",
  "key17": "63F2effRetZsAWP1gb2fwctehisqVJnd32uV5Uj2sXEm65XN6eD5W5MWKQBe6xbrVxNTV5xA3L2AfcURRygKLovT",
  "key18": "56RhtxZTcTmm5hg1v1nrPUMrwpnRA5VWEhJKwakkvrmKajah7HKLsiQzRDMjibbkQCvfRTh6WxtzXJSKaTxCHWYA",
  "key19": "5BVqWymPwo6piGjzSmLdBbjmDg231f9wCDmxPJ218LNmQZtqdNxRWXcy92s75JM8ozh2dUdre3tcgmTqU64XXkmR",
  "key20": "2N9KSpvyxarCg7cFfuznbirG6UsQz8SMXLZDv9BPEx1ntKegNUvA9u6HzCoGT1e44ZsuVk2G7fgYsyypSsHHVoof",
  "key21": "3jGrPiUpg2KuhuDcTMTVhiZHEtdim7ExkZXkS2tdm8CNDGDoLY8d2JrAH1XjFm4QUApW7eQxX6FLojbE22hgunKq",
  "key22": "3aLfW4Wryy1suH5baobAU5NrkX3Pd5LA1DARh1a8RvzA7hVE5rbZAPvtcpFyDA7dwKjrrDkGBTMqdVdQdzncKTFS",
  "key23": "2Zq7DhANJPEsgNMcXyd4M6Cx8nt9mfzxJFfKcSpP41HArq4y98M1phpkxQmmv13KFwzgkMD6i54WS1XD6PdETg1N",
  "key24": "HwvZBhFJskB2FimyEpnhGFKhrbyj1e56XfGn9SL8kguqmvmvqhCq1tRHtPEVwFKCREpJSArabFwVeK8nYHyJ8Bd",
  "key25": "3LRhDXsqKFXsoHZ3PuvzfTtZ1qL8JEi4cb4KAancCmqkWpkr1N7EBsP4CAX3xLUAfseHDKGaEyVEqENz961B1sXo",
  "key26": "2dFSBbhAsKjuMu959fVzQgG9MZTYjTauK7UvyZN7X3DzJq3AodyQ4WZHXGdqVZTRg1uJdgBFVfLqP3ycXYTycDtN",
  "key27": "2EyTx7L1JTEx6ZrrBxZQc8SzNF7THbZwBVnhdUf6jHTWKuDPK6aFDjPFF1Vm2zp85oBrMYPojirY3gPgaLiqHkYp",
  "key28": "33pzWCJAL2PkcdPcKbEdPDieKnr2Nru9kMCNpqDNbZa1utWZ25j3ZPWfLCqBdMtBaW3jNf55Rt1AAZ1ezpNCLdCg",
  "key29": "4kMiCDLwcaAHeeUScjGuWARo946sXTa9iY2sPPMwAsh6PeJ1bK72zAacu86G4ccNqtrDYVmtfu2HPvHeSFqFwKYC",
  "key30": "BqzJMk5P4fzLW4Y85jzySn8SFifaKY7xce62wY6VtELosH4on8ZNHiubo6nAan4tidYwPAbBhwBKJHKJo3MMvNS",
  "key31": "4CjvyJupJNMNt8QxqYFfpqYLDi7oZ5DUc69FCmdtZhM7ixivjhbkXQjgLs8qveMSorkrzS4RxsiuuiyL6tJcPwuX",
  "key32": "3Tn3tbHbXKd558Qq5ii7o93x7k9u9SWwPoxeKLG4iJonwefVedohhGqX3exJQ9bGz3hjsAXvmodrqZJFUzw4zona",
  "key33": "4on7TAyBFNx9wN35nWqCiqM4KgP55YQZGf1obKEaqmUqgqv9rE6MWS8z43eKgcNaZ4NX8N3BMJeQHL7udJGzYCWG"
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
