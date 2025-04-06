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
    "44dLKveA8YxJSDWAtWQt5ksKHyYnUst2QeN6Fsgn1DK14MuwzEJXY7bF3z1VV1aboQXj6QnYbJttD3nhaa4uEBTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wNBeE1TYkPePd7YrKCTGrFuzyhySD7oHx9o2FdLLLdoMbjYYcunxJcZKxqmA2xYcWh4RyRifsVzun68CqbnSniK",
  "key1": "nk55BeVm1CQCTkNQQk129Xraf5DiDLLn4bVbPxgfyduy6SSV9QXnxTEy8rqLapMoCjS8QdEP5Njn5NTkW98cDPR",
  "key2": "SCzmbL7pisogphLHxpFtxR2qJAiqkVfEZsmBoozvf8FpB63pYoaAw6LwUuogqik6Whz5LHpm9L99Pzk9kPFDm8D",
  "key3": "5QVnQvS2eM7SP423HCF7gHhQ28gb6ELtRwndwrboQ2zUMULvnbWdFdhX4eL17JYWGzubppW2z2xQRv2tVtTCDbHM",
  "key4": "2VRR6vbfidfCFfh9KeULPZCX3HzeLL8nAgyCMPzEd15r7N4JLmsf5Wg2BZsxFMJGr8fLa7EML7KfE5U2iWRrKCi1",
  "key5": "1Q9tpVcUcZPn3rbLFnwoGW2rVbXgmXpX7msyc2w1NaZjVXXyNGnC24o9CsussU2fU5vwZDF2w8WRBeugABX8eLZ",
  "key6": "4MbcMHueqRSrbsYsEPwmTXY3BLX7Wf73zucyEwrh1vsxzRzd4ULW3CipUwwKqxy9Vv8CcHXG9B5uHeyfQpenC73Q",
  "key7": "3cTn4s6NyzP38h3og6nCDyY19axBUjK2miNZ9fKzoNttZuaf6AhPmgSHm93v6sehmSgSSVe9jPZpDjuDq41jMAeh",
  "key8": "Qyax3JAAzhVzVFymSoJPXdPnHMeAScdWVjb5KpdphZmdZ6dd2G7YeyYEfDhiUzCixNL442V1gNUVKro7EV6JiWr",
  "key9": "4VZK8wsv3NTQNKJimsAQpxXtwD5PCTnsNdsmrDSmr9WCNHRjZngknox6Su6WB3vThekakeTmZLpB8dTkvSfBvbS4",
  "key10": "3byXyXQQMuUGyLkHpjMbNAmThPQBBAAxGRmPMaeaXUtWKmcsvxfncwhTQqStM7nEwEf4VsoETueroaJxwKMYc9qa",
  "key11": "4gR3td6vHs2DjJdzkTYxZz13eU37o5GBRfem12YGSKsEQ9Etj3n5ZnQg7gn1qMj9K7vKRxxjBP9G2cDabYvqqEem",
  "key12": "3aihQcjFZHgLikyTHS1LjWEyfkCLvDqTkigpXEwJep36X9DBzHCf8Wh6AzjpEcRZnSeiZ929cfXMVfF5taRdoxEx",
  "key13": "3zE3sB4ygkd1c3w5SzPLQhTRLwXCYm1v29vwuVfYHd8gqXbkYffNjtMzAcWDqkSzhum4Uab81Q2AHVu1xs91q1LP",
  "key14": "4fCTrgeRgcdEFEcKBZdvrgPWKUtKbBmGpUm36bygScDDe9VmwN1Djrgug2gDmfdk8abi8te572B4frduHVhwgcxe",
  "key15": "5N9M7oN8vofUNPEnmHdQPPp4AC8JSRwkhHw2Qft8V25DHXfAJr55JNiDGa6nUQ4fT1ku8uy86JFSGDjC6oNBzKUs",
  "key16": "526Hm5nVurCf7xQSwwCGjMoii2uk8QoNaL2mMbqRaC5DWKYuJPAhQJsUw1XSPufDku6kLDBaLo9icWHHLWAmvoTq",
  "key17": "5vMDxcxg48oGFQHtsn3feLafNSvhcvQSacoQmCznSjfn5x2byfZQxRbkaab8Cnk6A4EVKhSiuo5vrHskXyk8jtFD",
  "key18": "2cSAqs8M3hD4Lcv1yo24thhypGw3XXTfqtW6YWeb459xwccHh41z7U85QXsGuAHLp8Xm46ueNmMxwS6nw2BJtCu2",
  "key19": "2Wjb3pedfciBtW3hK2fqzRqK11shVePGBMUJr3EVSMHH21Havk5J7ttJtaFHmV7mT9v2HDwpvDkDiodBSgL5SB4s",
  "key20": "A7CoZktdViUZMLZVVihAvCLYymWP1JCFHeuKt8WoNkwoRgCbTVTf61DRC9QYN5NRpuSBDACJRE9rqmungPrAdCB",
  "key21": "2vhv4YjLLCp2kJDKqBdPx1hRAeJFbmD1U5somnkisiVHZDMaqXfMu9kJpJqmNBAMcLgypUGTD1r9AgHHFPdcZ1L1",
  "key22": "V7HgCVjdxFsoDustfZuiHbr2ioehHHpVrwf27e21HgQUd3MaJ3ZyhwcjAAkf8N93Gd5hDozniTDaf26WdBQtYNg",
  "key23": "3Yj4DxGdtEXBWNvck4o5Zxngd5TSyABBVGLts7xUULzoNofYAEzz3WvyrW33hhGxZ2Di1BTrGbQuW3BVfL1z1baA",
  "key24": "5QS8JcZNUCognNMjaD9Jvy49vmbPj8qdzwr73ySmL7KHHxTzacHGSemnksS1JLDyxqV44gQevbFHtxcAZ1fKznJW",
  "key25": "2YZvMxozpVK5mxjr86QYuZ2CkueGRsR42sXF5G7WEhUQCzvToJ4U3gq4fPugxMvpQtzxy8dkPaHHsKyV3TSNmegs",
  "key26": "2ZtHgNn2G7ctR1oWw9xsQrvDUzt6tYuTjJ3VRZCJvwTKtegDPC77UNYxqgiBmQUDF2MnbVgNmrACEx285UUaRBh9"
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
