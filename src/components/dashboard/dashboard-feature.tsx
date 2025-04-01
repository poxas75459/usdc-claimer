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
    "4LyS8PBmKr4DmVDdH4jwwchy1ozNHmgFiY5LTTaLoofXvVJoxXwa4qvJpyhXxmGUkMfwBozYBgeooBuQsWZ9nZKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rr5yvuJwZHraafLWomD57HqvWmKvuDfcnXrmTTvGnw1e2mGRCUAeJtcHrJnTC9p7sNZCQyJQdvySecUsAGvt477",
  "key1": "4atKfrgDwPZzQDwfH1Xr8hVjuQRFLS81mHYTw2cSTNiQEHGVXGqvPhuhshnR7D9kqqXBZtqBZm2J7gdH5S9qbuio",
  "key2": "5mugc58xHRNB8UtF43vwEfRuWUAzUkNj8RGJxyCbki41sySYCRvUGfBPHa9d4DUX5xC1Am9tM1usAtL8xiGGPdU6",
  "key3": "39ksaG5UfHo4Kq7uQWQDd7zFvvvc3XM7HWMd2jd6a7H34tSMugA2dC4VT3FDe5Q4km9w6fiTKzbprM13JJLbbJvx",
  "key4": "2ARsyt5QyUGzmnT2YfgkjHFmDHfsUmnjPyaiCEXNLv6zPLSL8B9oFRqkjbWFLvVhcfx3VyfXkB2dBwQk6pAa5gdG",
  "key5": "3Z8XJzKaFZCwpkoE68SAFraZdKbwCmQxTvkxHeG8PyA3pgVw29L6fUbZFjbYfy97JMRK8tLE5USQTnwjrzpHscna",
  "key6": "5G89byEC6LhzfFBhJ1qcdyHeF9GW4JtWKQmBEJ11XcLkDhoyYoAEwEMB6CLTvedccqPih8zNtXHxzvKnRLPMXWrG",
  "key7": "3HrAAZi8aGnbY84NMKHQhig5VqVw3bhewQGEUCpf5YBB3co1stJCze9uGwFtcAdqmPyDh7a4aY4rt5ZmSeqmScjd",
  "key8": "3KivtfwRxAXoLjSHjWdXLUSBYYyc55NKCZ5WPvJf7byz7DPTmfSXhVxCKt3hLtxpFJnUFyta2w6kYZMjrRuXXjBz",
  "key9": "4N6Cy1spRLvCAc41RDQVkTUxE7TTscazm1KUPGoFDnrc38dchSh2bTv4T8Wcu4TYoQ9t1hFZLeaQhRbH8qSAxJnV",
  "key10": "4rAJ32Qjxu6rrqpfmaVVfyuAZVVm3GnsXbCzij8cKJHqh3UTLJAiDXPXtNPhpwJjupoNXDRon3j2gpZi3GxAhuP2",
  "key11": "3FJ7TeQ9QSnQjUjKR69xGtJ1Vbcci2WkNgWUmAFetWSDGo84K5JcvGpGJbKHrrKJ7ZVPXmZuvGYX4nCjP2eVVY7a",
  "key12": "3i8US384mFdfMj6wTFR32nNt4kmR7676dabVzDnDtWX69W7fvdurN9CcsEgW44byBet9AujyzzCrFPYFptvwAAT4",
  "key13": "2mce9Ls18BnwNTYzpCP69LwfQLxEPPnyjubbXfDrNw3LLGtt3UZUqTrYqhnUzNAvMoqvsGNPxoDqWtibiKDpan7B",
  "key14": "2yeh7FtsWzDKkeLAMFEgTze5FNQ1RAZkw8K4o9HfumPnhTYsDKNnTfoedmsg6yB3yuvdjZhhFjVj3YCw3o617bfX",
  "key15": "KN3toZtfSAnkK62tQv3HQzuWcSTB5XFACF7UutJxwoN3ZySCDLgZpAtJdrdixqGJcP8gkyamEAXxpqxW4yXGQFp",
  "key16": "3e5XndL2NDRYEHMq1HNcrjeQSAey6DeoAU6w4TJUufxdJaFXWKnRp8t4vdV7UwpB4VGBfEopbV52RspHVb2M7GcZ",
  "key17": "2giRxzigrLLqPjjkTX5CqcahT18aGZ6nXh1sG7BSRFLwad5sZiek4K6buMWAbYuoqNL7BKTJG3r4BZabxBpMee4g",
  "key18": "4ikJ13ivazRrUT7g4AC1hARuvh8MQsBEyB8ht4ZLS7RXNDzTC1SV9WCkLryE3ed2Wgk3k7jvaj3Msd7ocKAAFQjE",
  "key19": "4vbwt4gxnTJNs87nrt1FfAV5vgABHWQf43ZBLm6DGJxG22S8kAksgxSf4XUzoeAHMudU6NZJvckiByLaVDJdrwwH",
  "key20": "4VL8PqQsPh5Y5FxfcTja43Fg6ajB2abj6bHfZzTQ6N1PifdoWgfTqjgPT8j82DMBAa3vwkiA34bHLQHNVaDyWDBb",
  "key21": "4Eq4bfpHZhx7uL3GjKFW3xq88WF8o4dyRETYXqjA5tjAWJtNFXX7BNFgCsSbdNoc9X6AL3CWZgVwQzxWR9Dzif39",
  "key22": "ugwHLKmr8gTs4N1utj1SvqNHnE87TipuE5a4f4csk11e52FeGTPENtY3A4UhMoBNCkE4FnUMZZRFvQtbx2U4zkd",
  "key23": "4RWesjbMYb9A92NTq2ziVvNikdYQE29wugwji6fGh6oDPbttvmxpVxp3n9vJbdUVSJYoRdAsu8pkaZwxKdykL8gi",
  "key24": "2DS15UPzv4WNQ8NTU73QN3XJp85ANLmT8g2pEtv1kAyEazoDYEDvsDHqeryYip9NbtTmN6MaxLZrjPzNAxHcYCvF",
  "key25": "2brH4NBF5KvFkEBgF3LrcVxZpwJsxwZJzSWQ6zMUHhAmDh3bV45n8Q19YJHfRHxwsjkDVbjmifBVeoTLcGPRoTZb",
  "key26": "PbcGRPnEkicGu3aSKSj8gLFycGd7TFzKAPmpMSyGLxFCR2TihoenHgVsKHCf4ttdAxE6cWfv7aaqvy9hBJhs184",
  "key27": "4ydLRCGNVKSVMBy4p4Dojo2m5H7CaCbM9VGJbBeaNghPyxD3oPLZNHTvwZG4J2TEuh7RrU7NQUUFHXaSPjZiAJNV",
  "key28": "5yRLnGTAohckzgtLJ3hNgG8ZDQXZgt65Eck5xZsZ41mpQvP4kQwvRmWajjdH1P79BNK7zGR6eaXS9qbTirPgV3V",
  "key29": "3oD6nn2E1RkVSQfg3DRoR621VPGZfTbEVYEbEs4EGRqpf8FezfpDUynruBpPTpLkKGiQj5jdevgZN5fF7k6yvyB4",
  "key30": "Pd9JxbCBmXzR9YFv7LeKQaszL8i3nUCd8LNWYte22531bz2dduYEJG4mG9S4cuRezq8WyG9sTLtrqPbPJZdgxsu",
  "key31": "4mr3nNmHAyb2YWuNiLbUA7WhviwEGa5okr469nWbSJZFAyY3kVSCF7qxDNbnkBrisZmRb7mf7wDsBQqP99mVrKAk"
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
