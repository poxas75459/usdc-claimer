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
    "4g1dvRm1s79TKwGBnfWcSizQRMFmbz1mHRfJqE9Gr6N526MeztpVwAqrxLZqY91x8oiYuKYUoC4nT2c9ccAwdtDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UU8FFCXHFYyf5usdCedDLteTGShwDyET7Jjx3jLW6Qsmi1Ss3PSqHQbfZqXSXNso3jAx9XGyLkV9giizm2pZSGD",
  "key1": "4KD8GbeSng96dE8BQ8NvJkosDf4vXeU8imSj5aHjtPkqys1BNNrYVf6j1BuC41De7ePTL9qYLu9kcLT6KuMi75nH",
  "key2": "gYaSV2W5oeL4T9QMXSuDYkA7znoFYEQX1eNTUDi983v1hMFpfnzViDDTDZYJ9bHFEAMbjDdvNa2jsFdrx4k5PE7",
  "key3": "cH2jtte4KeNZb5vg5FMS3PksrufLJzGEvC1hEtY69nNKwLUNMy2QviWykSaBbfQcTwiVFTCSeEhBDTsb355eEWc",
  "key4": "2RzYhoY5HxRSXJi2PEj8Xd9ozb4mnCXUrhJChtHSWxraTbXV245amkCxfF4SMUPxYD4Sy4UYUQdXyYWYHu3GU96J",
  "key5": "5rnvakcdHjcnKtcVdwQvDRczjJy3ZxwctNcPzytEvbqHX8XVLp7e663CayaUiPG3SjHQt1qm7e8ZnuHpMdNcTkYT",
  "key6": "47jPdnM3rEqmHExWvdUKvrqP1D3XycrwNv8BFBPQ8eynewekMHPRJVQYsVZTcRUALit365NMELDkgJu52hb4HqgK",
  "key7": "29qpEirrnVp9r6EH5EZw4n7aZvVge3T8QonFGma8ZKrUzCLPxwnEGxrt1GdTht7F3NBgGj5Bjq4wmCXXCPJ6KMez",
  "key8": "3taBvgRJHAHo54AMbG5P87DrCitJireoiL2ifHj6gt1kFnujRSd4rZmdTZTtw2JXaEiJjaJm7yC6pbp5usgWuf3p",
  "key9": "4cJVQiMVwWUpjcv8FgZF18wEeMiNrDwJ2QJPsNGgRmcYim1qKz9H89jqbCQAk5kjCBfWPUHBn2JGC48o8oSCT5VK",
  "key10": "33MpPtheGq2jWaneTdzqETtcbMP5jkFkL3Xdjstsq7zsyKv9KBNPdxk1XpQosHz3HGw9uy5Hz1EeN3nLS8EjHDTE",
  "key11": "29NKyVrK9WvyR1s8Z21vvMYJ6TzpCAgRQaUpQ7AZeeGRyAqEY1aQDgGnzySUeigEb3vCta6TqsnhWaSmeHswpzJd",
  "key12": "2YxQunb9XJxibBEDNsv7GH9jBsFj1LqeCsvX8ibQp136BCZf9RCRfWg1x786Z2PFnse3KYu4kd2E1w2Tjwyu364F",
  "key13": "AKQ2yVGcxh8nV5d3GT2fpAiAYkB8YfX3YL1qmQd8phx2zhM3ExNL3Qy4ftS3QkkL7ustLQfLBomjh4XqX2iyo3Y",
  "key14": "4kgxGuay9XcnCGVfBnxHNQMceUAJ8nf2J4HZnLFffdCHBhvTNSjm4SSn1Gv1xvCz9d3oMiqLZYwQGh7ePZrMKzJD",
  "key15": "wmQyVm3xRLmq3o4gg87PPa2SgdN9f6QFsosjDuYf3GgrNcKZ91ryx8r8zpd8ty6iy1LryoWjqfFBuPN4eyow6A4",
  "key16": "2XsGUACAvhj6ic6LNPW5f1J2DygPLkBGWXbDAdQsu1tVk6jKsasU722vBUEUf3GMrQeSe4PwnoewRZv9qqkoiwem",
  "key17": "4p7G8nkxTSVrWFfQVxEMCCHBmbgW19XC2QVNYrzNgNK8JZbqqgyCbm8WEVF2uzo5AZomSMs936ZTodpwb1Hk68FL",
  "key18": "5eutRkpfcqYR6JzxrddY5duy8VX3LzX25bpQPYoS25s4N67eDZyYXu5DXRi2AohtxL6nPgV4xeXyVeqx3N93wcq9",
  "key19": "4m8DAiYvgWoVH6di8ZubJvCLK5kov9nwXJ2sVYfybsB4c3CEB417S4GXeC9LCSZSZYYY67ZyiaQccQP7jdeDRDLX",
  "key20": "rNqxWXyrGLvMbBtMEW2C7eYiQJTpxyTXULXASQKHGyvrRjjkK14pVQgucuBzuWkq7vdesp8NHfcdtU77FUKirJF",
  "key21": "28r4uKV1F5CD22eS4rVCUVVTfH3WaMtX8BvccnD5JEK7JQxAPkFzjy5LSe7dMZp3jSnryEWEdU25miMcyajjADCz",
  "key22": "4ntGYZfKeT7m6hxXBgQmY6fjJg1TxHfQDcH2TBQosCxminRkhGCfD9GmyyWMNqoWyWEsr2ecX4svAKxPQcHMQatm",
  "key23": "5YpmaxxhECErFoLqdAikf3e7Y2mfcC3XRFssp74RsyJuG8seD4Sk69Ss2HuF5FcAqNgfDLUqWZeiiWyPdLRfHDE3",
  "key24": "YStYdnXw53X6gYmmdxorrxZcaw2ftsgKvr2tsfdiyfUd1qWYhZAv65hzjx3FPMABUcv8TyjjpMjJEFVzaSJnzP8"
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
