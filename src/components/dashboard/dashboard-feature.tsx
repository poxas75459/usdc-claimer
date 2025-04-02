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
    "5tChJXkjDU2hpJKxe99FurNqyJx7cT35vm8183PzQHdJBKeXxaYUBU4LRrGpqJE3mSuM6rGqUS5qsjzcP5MkjBsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cccDMBS4nWUhkCumweqyMvYMXc2AbB2bfWmjSvGToex8a1S1ejT2J4Axdy3qWdqdSSeC28ZV46ngyZPmq4WopNZ",
  "key1": "Uq7DS4MzeMDsRxqNJwvhoUsXiCQV9Dw7G4fZEXwL6zmda3CpuG1vMfPwdWUtnmFDbtqc65SngxWY56ynuAJhFKV",
  "key2": "5cviEXSWDzLGqq7RNXB7JXJKDL96Y2qEAYoHenmoaKqLVobFxMS9ox4dMc2Zj4CrFQJENHcDoKN1AJx6vhbrnneM",
  "key3": "4h8UAYdXGqdXHSuuQzL6ztpKcLH7jAHCuxWXUzcbPGDxh3LKsmbynnKDrH7XsSNtrAxiXjMSBiqy2o8zBg7YxUbB",
  "key4": "4GWC67P27xnFnNcv3GEouAEBfsPXJjaazwmfEbGzkQbMJsjoCNmb9aJmcsHPJG3qiRR5VWuYrUUPLKNpqD3s6FjW",
  "key5": "2iw86FQFJxbqk7xFHgX83qfctrNpPkWfZiBEXc5pF3KENQZ4ZrNEHGtUsBWk35U8isi4UpzMsayy8gPpV4HMctzn",
  "key6": "4wEkP9PEcsZGREhZwsc4kKBXKaJMUePTRrR12NsuFcgbT44dgRMLCRzRpbfBjxDnhqAxpmbBSYy2ctDJcsVu9E6Y",
  "key7": "cTxB2t15NwoX5u2bZyVeQFPQUruY63dRdiucnsywLNK8ysXC9naBiPm5NvZcr3eq38mcMAaNer6y1ufJ8JowwMd",
  "key8": "f8NZzsPxVRDpEVLk2RwSwv2hQ9x38a1vMvFjhG3Bh9u8ePCYzF696abErgU7T6eBMKsGE4JPinm6YEHdrBvjP75",
  "key9": "2YzwmU2WD1xUoSb297hExX135pWpjoVmmRSxKaQfSfYFz8KCyw1hMkpxus9HdPRJhMLridBvW6NH6dCpKm2t2KNk",
  "key10": "4auhATyrj9iygyVNrHXhJ7uJX3vziYAefTmXEBW6qWD7ubXkSx2DKNFw91aTgPPdW1wxFmiUJXduM4JKSdaJk2eR",
  "key11": "YT16zz9PJ3dndHQjyYbpNhr2kgGjVqwnL9PUoT1go96WdtYLgCLiVsL4Mrec5fEQH14PT2ErvVhocCZ7DyXX2G4",
  "key12": "3BCUApk5F7JQwCZ7aTL8qCWGCE2WVoryRtxfFWwSSEgAjf1R1HU6TKpWTm9qV9JsTHwKesWVj3B919Hv1hGNk5v6",
  "key13": "2HhbzPFpxp1rqBUP9L1qxGzEFaNXM9ikXZ5as7JgnLYs5jvWZaaDYKdsArqB6rwuvr7DLy2DkUEG5QMpRYTaJA6S",
  "key14": "5C34Zhy7ESaJN4BgEzS9wcVCAzwSQ5aFdzWtbuVWWymAV56ARGuQ17A66j1EkmsTbfuvRxxwE1krFqnCmh5KpR2w",
  "key15": "2NCzq9LfEW7VSmL9TAEVmCdEVsctjn5E6nYhb3hriMtaZ9iJ6fxgZdSihJ6EdxXKUbMWHFTvYZBAENJMUHdiip2a",
  "key16": "5jiSmpJppE54yB4MU32AWZQD9NugpSn4YHSzRTBRRTat3vMUGbcCT5huJgU6qRaKXjdaLfBjH9gPTaDTzjd77k5P",
  "key17": "3YXqAZ2b6aafuZMBuKnxzyssvN1YencLgPaeQy4QdbVHNQmsZM6dMnoZebdPYG8JmsCHmBpnehxGbrsUPBvLEhPg",
  "key18": "366YajNigQh69PLA5iT8KrbdpZV9XwCL4hY2ZAy7m5CmBTdmTGX1msxTEHDEPJQPYSSe6qRvc8YGqXTmzb15S63F",
  "key19": "5pGQTBKWGdbspiybYobwE8iyqYVAEiGWiNXZN9HExMeaX7b6rtbTmb8pNLqnFyaR4fYD341vybftWVBrD5iYgDRw",
  "key20": "3X9d9jw659XLd3BCLfcrBf9P4JBwH8vjeu6HvKTCAnAmTv46EHhQTvSGa4mdMBL3ZBRVDN8mhiE3Uj8qoMm5Uo2K",
  "key21": "4w2j9f8DTrigwnNWGynNpCLhhp7DsSwj5cgL6jhiPaLsTh2YF3qP2ewK5ZiXwiit5jNa2EKCApo29iCzgjZ3TLaL",
  "key22": "7bkgVhkHZUCGWf6LtCeAnMhawyksJ9X1bBoamHzBUW4Qy6UTXXdfBHAwiiJioDxfiiFFnUNXjP1XRPgXdZTHr6S",
  "key23": "cwWJU67DDTkihtagbRUDYvBBpiPXcifk7wxkihxV7B9Y7yUVKNxHGmUnfjR8KeXxk4n4J9yfre5TriK16NkuG77",
  "key24": "R6NjnKzCmuwMCyAJChMqSiYPKspG6LC5Cd5UYQd2ojE72oaKvarKzgDwiSnMGXr1cKq3zaiEtPb6ooMAP5UaxYp"
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
