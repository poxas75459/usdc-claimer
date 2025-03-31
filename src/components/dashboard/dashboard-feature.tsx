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
    "27Ery3BnyJ3riUmuz7UdXeRj46Mo8pbiJaogGqXixCbC27jbiw3kjE3WWFChgpD9o7qXZaoqbN7qArN5nFHgyYjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SfehABJbFhsSHTRwUZaRUZZNfxnvYztZbnU8nHL8PuitdDwBA5Jjn5bVR6ww95bJW7PSHZQqT85Ym36wScqgcU",
  "key1": "55cf4vFyQmKb1G3SjW6gDpZBC5Hc5SrGqvvMoZEAfqE2s4aYNzjgYESrL7wUMieiG3ZPtRDkU6Mmm5pUp6vtS187",
  "key2": "1mR35Ash9Vj4ygSFzS5xo3AMcj9c1zNMnwd5Sr3daL3Rcr3oDAvJ9LF37Ka5QQrKPYEo8XEL4qj4YGiZa6xpMuA",
  "key3": "486ujrfM3wvv4Y9KVCdNQcqZXJy5EcR4xEjXQktmqLNR9Q8atN6Z17GbfBPHGLLTZjSqhmeV3mkSGzBKhgxJQoGh",
  "key4": "3VSwKhaRSCSdiZ59XziwZGBhS79ZotXeQUmR6m9H5ux2tFZEpyJ64NrL5u4WerTa7iGShXWR3HgbDdoT6dbKM43p",
  "key5": "39BDAbtAAmxNEenHweLuhopPh6z2HTLqTjxZzBq2FRzbbK5bVM5YqHnY8wk1sr6gRaZCDCCw2GfBTXNKzmT5C74b",
  "key6": "dXccC63cxfQ225XKbRfWNfm55d2FqCyieKiVPr6hzxauecBCgwmLzHmFY4LSbuW9jaATvakPm5TV13fRAoe1vwK",
  "key7": "3mQREToNiRCBfxycJvSVZ6knf5WeLVFU6xbx6UjAdjWVRxJWWaj2g7hGy5MDgGytx94mrYpcnw5DZ2qkpiW9e2xJ",
  "key8": "41ZctZwVGB5ZR44w4MzQWPgr8pyasSLRLiho81NyrCzey6pTNWndWrVe7BP199NAw7aUHmZtPWM1GUi6eWmHyabc",
  "key9": "4basLfEoik4SgAp7xLTi62mK49nzZRqCZ73AcsbNHdyPAX8z4jmQX34p1SgrGr94eWQTQE65cAEUwziM7kjWgMUW",
  "key10": "2TAS74MTHasnZzXYnrnPCYvt1fkikfnCPpJqTWxzyUDJ27ZzJteczxpYBEz9FLTbQr4QjbWrM988E4KqP3u8idP1",
  "key11": "4jPmF5TQYAevzkhoQjVuqJNz3Mq7oWH65z2Ax7iY3FLfzNEevdnXz3HJrDPCoTzymreugVhSLgAKjxrpBQdjW29G",
  "key12": "3tTRE4kYjmMAvydQ9y2PBpaY6wwDaMamwEzzz9NAeEzXxRjz5Cz3MUxgJKKs8mHU5gpr4tCZo2ob7KUYUB991Sru",
  "key13": "5h3Aoz5qGX7DZsbAS37YK2kvtaoLReBTa9qyDQ6GVQeQv7Hde26THmTaVnDMzWu8nanAb8DEh5p5YF9PNgavxK69",
  "key14": "5L38z7UNh7VSMU7ZjPEv76psfcf1AdLHiDFhVTLGL8YvH1KFFfMhyc4iNUAAL12q6kwbE1qKQ81NQPRTfgTFKuhR",
  "key15": "4juVarpefofTQYN4EtNavMrDwsvmHRLSr5CtQyARgpHDh6Bh65t3tbjNBLp6qPAukQjytDH2giSrqLNTc5Yd7gXb",
  "key16": "4o3uo3RqKV6QwEy5EXHLLPSzBQeQpSXsUkpbTw1VrPFHv7z2Mmi9ogYJzrZwV6e5ZJMsdyKV695ZcVapPsGvbkFR",
  "key17": "3Zpfy1m8BXE3XcX4Lwow1q5xUEPugahYfKy4RoKFxgsfcf3hkFQZtC2asoYa4EViaWdh5SzJAxyzMBfoFLHMGyUg",
  "key18": "2zDXMs42cL3gB5bTVC55g7bfHNBsLJvyrs3yKfG2tX6mnjgoh5wq1noB2NRg6C4xpszkZmGDcSbUEPhpjpdSK36t",
  "key19": "37QvMSkBJUuWzuXQmfjkCdgUKRwHDM3bPFF7wGiR5d4GYWKgMZEkrLtcJCivbHi4W3S6tP2qd9SoSdrWjfTjwrWq",
  "key20": "4Mh8TNgaUvSUEsSDDamwuHzNE7jjw46hKw7PkzengSibJ2KPrnhQmEHrdZin25fo1T4KKfjCH7TXZ9jhCrjZFnS3",
  "key21": "4FtWUFCTAJkPL7VwjFqmedc4iKUDKcTP1TtqGABc1Exc2rXMAhZ5bDVkk23RxpVDYM1TZW97qQKtdq2P3eUooKLh",
  "key22": "4PrS66yYCx2kHVM68kFAyiqty4UMwD8s4bq3Bmc7gfHXT6omqaCbvegJde93SLVAnuVvZ7cDDnzSzEvbMiGNRAu9",
  "key23": "PAH42s4fzH1ABzaeguuVCgMNVqMKfaeJ96RPGNPpx3Cv1XWMwEPvbCignbeYxgJs8f23BvJ32gbXrbnvnXZVP1u",
  "key24": "33pwVzamAK1unyVeo6KNFL7Viea2haZsr6A5aDmMtpYgmuQtMAgAvLK1WZrAgLXNiHQYbmVHKHQpPFZi7ohDZjzJ",
  "key25": "5NyC9QyjrjsEHFZ695qxr7gyc1ih8HQApFLH3dwrH26WWmkpVWWkvsNdC8ZaA5YPYPuZwHVQEjvSEpXGqx9UoGwE"
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
