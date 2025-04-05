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
    "3WxGtmq2Gz2bfPKfRJ4VfCthUdpmfuWA25wCccEe3Gi1UYBgcucqJUyDD28CQ8AkCQLEVVyBaCtnBkQreHsXz7SA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FY2uCmv2PDbs8exsx7hXwZe33gF1bV2HSXypZ1EcQNqTiioAtBJfABCNB6j1PsH7rABvshGiAWmveVr39FcGxjJ",
  "key1": "5LkyeGKvWioJhS4V5zPgtujV8uSDtKiB6guzKfx6FgY9BfK3BDJ5hfG5y4kahDzJhAPY18WQMhuiuB2kXSUysckN",
  "key2": "st4421XqH7CvHiCDtUFiS45Vc6a2ss5CWt9C22LwfdchBj1PzCAxa3r8vdCTrpGtjh9GT31HxvECLnJsWzDZ5RA",
  "key3": "3oYitGrd6h4V6rwhB2V7taR8ZhYy5FM5qxGybpqcts2WEuL76gQZMGcUv4D45yM2hJ13TrngufFtMWdAm4GVk4SB",
  "key4": "tagXfpppzSdDv8t5amhLU4hcPCFRiJg3r8jvzibFRyPmMZv5bH7dp3fiuPJazxVjwCCud2fuaspWvyKW9Gm4qyv",
  "key5": "5LSVaygf3iuxSd2LHsLEnkWJTCsADmfy9VDVgMLjAwSK1V6Z2hFCAcUNxGXzfKsWrAtrNwUCXar5EiSu1pMqMdHj",
  "key6": "4UwBoFS2CNkiJzVugidCWFeTLM5gg5pSKaXpVmUZyKbLaXFTWurfo7bKhxPgM85H9kK14TPYVTtgZipqVacyytNa",
  "key7": "MvaoN5nP67f3Zg5UXu42KUXSfQT1du2md5MEuVvJcJB2nhW3Mp3f5CzaUW7PVsaEps1CHCxfLKXcy5VWLqTpsgo",
  "key8": "3HiKSok82fj5YiuG263bH8vBaMfYEcX9XCGRyVpjcrhFToMdgedgGwDhK5yiMxRREFyaXXBakEswzYEvur6QpNeC",
  "key9": "aZBytknzPpVEy9ab6tGj5J53RoGTCBK5MD9ABZGnjHcf2q9EBxpUhfc7sjCMCEQEMABaautUrUJpSADg2KGdDvZ",
  "key10": "2EytUQE5kj5CDHejKh88iAPLhmt3C4vYc3xkAv3neV7LkUseAP4oVUSHRmSBjNiDVtY5S9vtbaXLGLueTN36pC4t",
  "key11": "wnMnjpMjvX5gwyXdQAmffKMBHEb1P5VfjqEFKtfkEGXhnWF7gou6yPbkVu2DFr5ptPKGwapJGdNcDJP2xYG78Zv",
  "key12": "NAmfNJETkYhgZrNTgGgKQZEgarxiUJ9PrG4eJcophBWjeQWmePXwZA5LQqHsEtTqwK5fCy9j4GFmobmjpQWfe7P",
  "key13": "XyuzWopjNQkaP4mWtYaseqEht8fXsdAMkwXJ2uQS81fHnhQdSpidLg4i7dnoGyLnwjR2CR99sdJ32psptXfi4Vt",
  "key14": "25Qr8NRvqRqX2zQmYrXcHFQS1GZWCoPNmaXKUUkC8jayLgJRnYG2HouGM1RbwaxPKsSUqr4389KgnaZwnS8ce5nT",
  "key15": "63DYur4nPp4X2u4SqJfvw2jwjmtzzrcxNdi6SmhVDwR2dMY3vGuW65SzTQ1cMpEHTJNPBtJn6jB4gqAGQ2NAesNo",
  "key16": "MY1D7ecoXiVUckWiYVDvfQ3ZyNsUbfXxQR4K3ukm8dqMLjTjXQdero8C1RSDhq91B1jicxcVGn7JLqDk3ptiW7T",
  "key17": "hzx5QXwAK4Sswj2qmKrydUXuGX5AFPNW2PMZvNmrXU7K1Y7R2DkBbEWkfVPcaB3RjzXVeo7gEMKkMs3x1fDq2Pe",
  "key18": "2yXF4LM9HHxk3c9MQuGMgumrCbAv9p8j2F7QqRDe4fwcnw1YcaMD5EX7XFWS6F7sWHdNJDY39fjES8pGXHBWmHXH",
  "key19": "3Hwv9ezq9ogio65DAYG1yZAqHUhmuWhxkqAoMKd3qrFCYLogjjMvmmMuqf6aSn565MxsxmtBXSP7UszV3A3LSeWX",
  "key20": "58FtRAGjTLytUdhRWKKJJkJnENewwV9oxKhYNpWcrLTy9oVyTpXznTbeknqUKw9z61bgCys8n2ZFg3YjbAEAWM5S",
  "key21": "5oVfvTyDM7YLQHXiy1kEmHkMRAg9kPPnJ1kmmJACHAC9h9per77zJG4Fijj95JfvFYYrYTWDHLJGBQFUbAxCD3NH",
  "key22": "3QBS8rpt8j2CN4jJdtWqfrGh5ou1ouATZNEeUasYPXAntSkFTpSfH3NfeEqGAMHm1UifkjHgkPN2YYLGkdunYVee",
  "key23": "22Jp7AvYuxpi3R3qD9qHen33ax5HisDC4qsRpnw3XChmMY7kfthJauEFYfpfik1bzm9NogdfrZL4i8sqNchTVNvM",
  "key24": "H9z6p8KiuPsWUVtGtMrSwPjyPD1Y8dvAWr7dYkEygvqDbgpnsaiFqyF5bZc16ktsHkN1cHnVCzW14WfBHpMZwZn",
  "key25": "4MZQhvqwY6jvKXfyxX1gJeY3SBAvLpzyjtW6XwnL4hQvJni5CTsWurhWckvHKXpQLR3absFJgVNr2r7LmHmCnCQE",
  "key26": "66vye7GnAppFw9zTyrjXJijikg9rgWhrdQEeJbPy1qr5h99hew39CFp5R5wVH432oxRpib5TeLCsvqKLXokc6iDB",
  "key27": "61AJiPpTDsS647GPQa8JKzphKNcHRMcZXj1WUyMnQTR1RRqM6ZgRKKbbmNLpNwmMGyepb6r1mjwqVuVPRDsYKLDg",
  "key28": "4Tv8LMHya8YvFAus2j7doqZtkkx23ghZz3DqWwaVUw6JSxtupe4ck7f2wScT7vxDT59ogJtC1ieZW1Z3iYZRKkt1",
  "key29": "5CFykxpSt48DPiaSktqd4DUJD7ojdpqV95shWc3iP9gsf3VQuiP2BYdoWtNdu1JnBDe3jSdpz8bfVXLg11TXC4CL",
  "key30": "3Jh98WM8cSawVTtwbzK6DMqtG3TUSzCFm9pVBQ8jYRB62sgMczpzRtFGgw3BfJ6dRJzji2FfA9mHGESc45X8oWSs",
  "key31": "5G1cxwGSMuNonr6fQ21tYKALtm7i4RZgqNVYSBmWNgbFPhQunLJwks5JCqpYkFqtxAmsC4B3KLEpspXvDdCUG2yg",
  "key32": "4F21hzrtSarnyBwA8HPWhhzh5poCc11BBreiGUesuDEVMBnPD7Y66NsH5Qn2EANBoUNWy1ZP3Pox5WUZfNviheQh",
  "key33": "2K4DAH1FR8G3wGjRcX3Y4XjFfYM8YRuzqjVzJSnrdxBVHRMhiHAfEnpUigAP9XcFHv1Xkvm2W9GKcs5S5cdvHCYC"
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
