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
    "566wM742JjkbaEdXLNp8BMgndQ4bvGtcckyg2HyfJTVuWzMYWnMcenvKu3U9UtotufaiueQkhViAq3gy46zUF4kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JErVLuSryaAjTJNUNmCqAztnH4JAPHizGkcqEzdcBqWUwjPMGs1LvqzyZi9XWLJ3u2GWw425dwS2WgbC9LpMwXr",
  "key1": "2omh7NLnCZSK1x1uFkrSJQKt2yYKcosvZiv5egirnJQD3JAjwoBiPTSL5J944LZKSm7JoqZiDDwhfCEidAHuaibJ",
  "key2": "4mSjJ1fSTDFqqdZEkehxom1aMCX3ipRfB54Dsp771RXskaJ9LtUYSt4WHCZNmPvtq9rPyGMtfqZFyCe7Zen3VQzX",
  "key3": "4Q14yk7gTvsDNbyAPX3AcL3huiTveqdhEgvbberUn8KgTBESQu24kucQtREDbdU57c6yG4vuBFsRaaHtNa8hHeDb",
  "key4": "3iA86dn4Ldm8JNKktzfybyY3o4gDkPHW1ypuT9fEHrNRNNvnYPKJWhB9woxg3xLzwuQEXvcysGmCuWhmJ2T9UBXU",
  "key5": "s6gmuPrVEBTMRM2JK8veTHyeJnUNdJu1FpkMtLP3c1xmr2ZbfacDK6CBj8457R9wfhj5p3RwC8YmVi5fuuNpyTC",
  "key6": "2VNpLSkVEfLCi6fsh82Kci5fCB3PZyxjy1U8iUyuNZSfA9WDGTfeisWhZQTFafDN33tWFqh8XCvWFjVNr9AdCXix",
  "key7": "2fsuoQrmdmc3jx53MLZeXra4txCZdzunyEZBsn33bDhpFbpMZWCgTkyUUX3bbnZctNni7DJPMHAkBj9h5wrxzr1i",
  "key8": "WQdrHEGHpeV7vWv9cpXMoqDdqHueS9wvA1DiFiPNM8sHFf7m9rdFpbRAkMV2whYnGdxHDT1fPdQBEyZUvqsxJxN",
  "key9": "2bmtudGwRF5nM1sjFyrnHh2qQnKbQJoExV3PiGWJU5TdrvN6B8X7QY6s8ocnFNsrwzgK3ggfuTPCjM568Z7ARoRi",
  "key10": "4BQZbQdphG5QUDTFVYrpqmp8YkpbY9iAumbaUfovdrVJ2J9Bq6TBHHz25d8z6E6Bsgf4KveLbU4X1j4XY1uMPFPD",
  "key11": "8TsgR57fo55jqPPJjBqHv9e6EJM5Qrgy99XknU6FEv6i9nxwpsLgioWepK4xG2AqXMuj5c1iDRnQ34rJJZENRDq",
  "key12": "JVqUgXJcjieQYcciaotyjext2BGC6kwhh7yastUjVe7ckTmHaBVEeuo6HAfQPw8UdjF2kUXLmiEyWKmjvyC7jct",
  "key13": "2q3FsmkrYHa6eMC4txL9RvMKnjDHxPU5GZH6NxH37aqY6ifN3GpHbzsziXkNrZbqCki4CF6nwcshuhopdism9bDg",
  "key14": "3ttANa6kUfrXHfpPxdtTPyPawBZg7UgrEJAYnE9vZTNEAZpN8wKA42eAQTdPgcy4WRx9YMTX1LhQLkWXbzWVhPWP",
  "key15": "ioBEmWzEXHwpxmgNS2dWL6g8scAfqknBUGgYDxW8sqpDY2quGq9LebFd6hGVbYZrtGbTGunCAfYC6Q5aLiFvzya",
  "key16": "DhixyEPWUQGTqJaaNje7mAgSfjpXRcWU35RdZ7uMi2J6yD8hEpoRHd6G4qdxnrZq79iMV6GUJzqSDBjbr5g67V5",
  "key17": "3e4Zrin7NKrxEj7GVzNhBw827KXsPpNYeAdztTkMdM3kkpqiAuVnrEJTjdRPaZcTYow9JmpA12NbVHwKkFSWeodB",
  "key18": "3L4Nfg93LqyaMWeiKjK1mNbMMooBLTho6DeFkqj3afprfd2C5zSEqk8GEC7T84RVVCNZpmhZMzi4KRiXoSNQNr6c",
  "key19": "3ZH2TsMoeaEDrGFQ2cBSuZL4sJcFbbGwsvVgYY2LwkewhZhQ1MJ2zcXQta7nD7bKiZmLWXgAxfuFgAp2jX95kidb",
  "key20": "3aAEbhcFVqVLS6JtmXW19KWYhSSon4MjmuiYu8uUCRydH6TiyzHAR1Hi1363YdWbFFneQQjLU7m9CD9HKwmAXA3v",
  "key21": "37YDiYxqyC4p13dxkEhf1xhtWqWeMzzeH9G4yPQTt4L2nhCEX2hQuRs92pejwk6uY8yEU9wZs5vgLhdmFFuWoXpq",
  "key22": "3rqcsFX4nSGCMvbxvEGLS7QdrfhYtjo443VrBMeMEN2LdtaaaC5gEfEabZ2FEdqp6mBFex96xYvRezAWnSZwuozZ",
  "key23": "2XhQey8HL2bJXNc31iBSmsSu4t71W3ZpnsTgDW2z3MBLEtgfgAaWHtqLQVn4TqN4J3d26mXCFbfzj3C4LL8YDCiB",
  "key24": "j7fVLmxV4cRUZ5juN3puRZd7YnDZCixdKk9UwLax5XokKmiobzHZHyYLwHygjYXX2UisX1mDaYKPcEFwxkAfTGc",
  "key25": "2akjQUEacyCxTYiREfq3kHgqtfvNNyeMCXdRjbbaXKTCdTYb7XnbzQJawLxHCrYYjDEVGrUxbK6moZaW5ZtE9zEp",
  "key26": "5UbJuMLkEr4WWGd8i7wGMjeteFTvCZFtTJtuKiea9hN2JeqriyS6J66VSuf7jjTFTTX38rH6SngVrZHbejN1iq5f",
  "key27": "5rUL4982jYbZdduo9DJUSzFJxkuc6JkJF2noK9tk13szWfQJ3vZDhMKbUTGzWw6CNDEqwB2N61EFw5ogWUUNA6Xc",
  "key28": "4dJoe92ukZeesAnDGtSqBX27N1KwTmqZZZcLRd97RRKoAAJt5gem1FaYZJAaUHW1jirNDQ1it7T1Q5ZLzqdULq2L",
  "key29": "2oUFWph3ueuBTgbz4cHJJDaCzNVcUZPtJqrsq7B82ALeGYMwo32ekE2dkeK3EN9FL2Q8EWrXVHPkruVk9pnt4Tmv",
  "key30": "5Jyu2Bm7mqZzmaCNW82fGn7zzor73jPUVEgzupxCfENpgk6GYTdhvYz9tYf4rwQoPzvgc6H4GQor4oi3orckt2Xc"
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
