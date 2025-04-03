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
    "34h2B8EpDLVtyFwNWAydkMPvYXiCdbayJwGiBdjBZtpZCYvuzsBbE9RXXyTd2tUb6eNheL9sDZkdXf5m43pxncx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKgw85pt3mStYvdDxygQzTbGqycfJqU8KS5ZmVyitS4N7HjnS7QWTFMACTH74B5KqYDqx4LbheoLSHtA78a6NV5",
  "key1": "4Tq1nDpEicVegyt9Cxt1Xf2XwoZd1H4oGgGady2ipzvy3QXEpbAfWrrTWSQV2Nu1cqjVPsjHbiScnNbG1idJ1d7R",
  "key2": "H1oM4TGNUB1GkGq3dGALUEfEg8UEYJwUdsnoDc5WRSdAcEzwjtgtoYuyrWfoYZcuC2erk8vueaou1HGFm5S8QUK",
  "key3": "2QaUT1NA58nwtwJcFoZPJQwcSdsGoBQif3i1pZKbbvLJqKKeoJFfdv6kdpZ8vG3aCAHoYoPg5F3CcSfFZst5aw1P",
  "key4": "3R76kCosPfRQm39cMaNWDuPHpJmqPcX4aWtqNJPPaEK71fCxW4rFUHDyLZSjGLEzbwDPqqYnGiYpMFM1xXwoKJQL",
  "key5": "26o4S2da6abc4uBCsJEK3TbsW2SW21d6aS1bEPZTHzJ7xRsQ6ZSchfmVDxQBzje8QWYJgNMXVHCKeSc3Xog4gz2c",
  "key6": "3zSeFoEB132H1A4PyKT7jMDA8Be6eRHnMHNfwe31RYLxE5YmMRirzi21Tk9Ngs1LMfmyEnXBH21f1mhTttZ9kTXR",
  "key7": "5zPDau36ggUd7aoiXVkJvRMwKXMXqgk4RgUPv8jbjR5oHBHD3YeRB8HD9w5ozL8Fx9xEsqbV48VLL9uXmvspMTCi",
  "key8": "3SWw3GUz6y5ngh1fHuAL8ztx8NoYhP4tmfhzfSFwNUmEZUQ12xPBtXhftQEtYFpgAzGfrcviFgQDdK8WwKWcA2yV",
  "key9": "5gJuqwix6D58xyYh2TjGqfUuphLuAdnTQcKMZGjLD5EmgGhD73YKcXTBbVpvQK8CPiSpoADQwKcb2nJSf2czpEoJ",
  "key10": "4SCc3kCKYg75gvytU41xnPJsyzVfHvf3zvvGbmD9pGD2RQChXcwBQNFb8pw7Hkpb1aJRWpZ8MNgyyNg5L1uMDi5q",
  "key11": "2C7W7hv9UPNBcvXaivQ1CPP1CVEeMAD1Nr7C2R4rAp5CTPMkzENghZtzVx4AmVnZoHQe259LCXNHQzLQ5EjHNHGz",
  "key12": "2E1FWzC3u8dRopDyoCwzDQUagSZACFacCZC1cEWNbTdQM2uSZZCTLZLNPWYfcD3kMpuhd3MZZomgrRwv3CcHACBt",
  "key13": "5ZavUoW5aTgimVmUVhXVyJLFkfRjdTzwqXLJXwyfMdkvv5usL3nXPr62ECvjkVpQwc9vV3SXHE5CYEDcnzYvmzd4",
  "key14": "3oeQWL2xS1mYJD8KPsLSV6GDpL1K9jGVc8YdWDzYcimipd2zXznx9D2xhfipzv9FM4kqP8P8Fkpd7AJQMFCZse4G",
  "key15": "3J1oZwiRfeH1oZpNQL6fY8bH3M5AavSUwbvoS7eD3F4Me5CPjZyo5pYTZLr6AdMZXqMCLuT1jSnBJVq6tsyJeiqP",
  "key16": "49i7G7aHJTz9saetuwz95Z1dtUuNt7bTvgkmdxcGaArwnaQa2EZGWpLcQdj8wzVK1xDuoAVWLD92qhnEPkJMhCSP",
  "key17": "222Q425u9b8922FnuSTeVZ9hC5wu4UBNFp3q9k5sVMYf3aamEFZHXZwoDd7DkgjHzz1cfKdS2uLWzkrrzPSz3iGK",
  "key18": "4fhb7r68dxD2hr6a9oTjWdwUaRfVXoy8pJq2zpx2Cy6ED8Q8iQwP2XELZumFDfEp7taDTg6En8ru57NEKq7g1K7G",
  "key19": "4Azhb88gkxrd4oQfxrpoTY5uiwDYuJPfmFRo48jfMDA1pVxQ5a11PffTv395oo35i7CJYvEnCdDzV95qQvcHRYDn",
  "key20": "32MWTukzEFBbCUTMn4cnzYUZhSvBJrQ4Q5npfASZYgtKMXT7VWQiEsSZu6vv4QeeHn8SMaT99YvaHWk4SZqbWnkm",
  "key21": "5LavKr6HQwg2hG89W6564pSpgDhhNCxgu4XT3M3tCKTVa2Jzh34jBRi8gk7if3DrjULVdPVT65W2UcNyQAuXfsct",
  "key22": "6XXmky6TaSDi2aVsQjHUGWoZrDo8K4XkH3Bs7sqkXaTLkeGNyoCtixrMhm5RCARxAKLDDgB177oVNdb5cyDr2JU",
  "key23": "3neVWQRTi11eb75PEZuYSLe2bKursnjmhYT574jckobbgtKuYeqPf2jnVUs2j9AqFRQB2MebNjmKxQJvjKo6patR",
  "key24": "3qRYzsEFt6TaD7jzLMGV3rXARx8pmVKYpiRfVYsPXaNhZcVrsyanGVkHzkG5rQMmruJQGuGzG1KEUvh6LRmmxK1n",
  "key25": "4cCt8ttXkuKU5wJLqUSfohTM74Rw2oKkjrMebNowpjfHicwrYbUS2akFi3ECvqvGNnejtt2YSeVdbgwuGiaPXa9M",
  "key26": "65YFqSVfB2xsawDq8fvEw7e7ePGKzQGsj3hUvbJ4f1UZvb2xLp3EhnYnUPWMQgjEkMcVH5SQmzocuKBzHRijZ28v",
  "key27": "z2Um3bVu2gjBD3g9zys8mr2tkxzjXmUCnrgJTtES4BvHw85MsKZNS38NTFLDwHqBq2fDo6LjJt3J1UEg6vfosZZ",
  "key28": "4vBbXUGSxx8sVACcsuAmCznxodwFtJoCBFTCE4uYWhcDzG1sFUJfu9ZER5FjhuaLr6TcYaBPGC7oDvP78PiRxdDK",
  "key29": "34Cvsk6SRpuq6hHjn934yZUDob8swyq9TvCPe9QXExzpG3PzaVdPHHJHRqdrLSoXAzaLHRXNYzwpMNAoRwLZN58X",
  "key30": "3BrcJHjbyi5b4LbKZVztZVqv5DNpP1a6t8V1ackK7UPf3qv7xUicanrEyM2svQg4QSHRtvczTLqYt6xAzdtAcnL6",
  "key31": "4pZKJXiqRqGbD1g8c4FyzjDP54ZtpTSzzL8c8rrF1YJK6geLjpG6EpRdtMdjKWGJ1e6XBAq3Fm1mCfGTPKyncAVV",
  "key32": "v9sjG1pL3vr9Avpr6pYViGNgr6gEu2AhXMJqYWTmVygzx7bTRKPyFo4VYD4kVAF5Z6k9JmzU5UQbMHa7UEHdVFZ",
  "key33": "4zqSzxveSfm1tPLuSBCKFMH7xeoUeR1s2gV1qmUZBjgCNoiyJy7Jo4MrSYbdUimzzLtc8thtDh1VoUVmFKXu77nA",
  "key34": "Vp5M87N7GwMUFFgNWgoPqvQByPLQfYpab3qZKu9YeF4JwV35F3kKeinA6J93RWb9j9JSR2DRYRi37oLeUGWQYy3",
  "key35": "iHWoYLMz7Ftgk5ttBZG1Ava5rPFGsZ4MNC2fDFjmdpqQtG7ruiYiBYRoPtdbDq6nfyNtzbPGgRqXwhn3FEMcUAw",
  "key36": "4FEkBXF1ghqV77HjLMs3ud2PMLeouR1M4AJKqnUdxAfxr2E4ZbrJfWMnarmWbK1zBgFMZTfFbJoXzec2sATWkGG2",
  "key37": "5RiYUbXmpY9ovdXGGwDUEi582f8FfWXCGhm6A7yka7HXMjdUsRmvYsxz2NQpRLQ2ZWXtL6jfAhJcuNo7TQpzNA28",
  "key38": "4PnCLj8w8xiaqbWNdYxk7451TLzN16guzrygh3GPFnx7GcHrKbedBLC6yprXrXs9hPuFwGxmDjstcfp9x6E3ZvqK",
  "key39": "4iu2Vv8rt6rhcdCbqSo9VBeNt2r5zeDY6B1B4wuVGHpnLrCmcyA3WZ9TBnBB98Y4XGqGsmZqxGQkyU9qwx1ig1H8",
  "key40": "3oe3nZB2nQrvZVn4J2tFKQHV2g8JGhsJAGhiuk7yBRQMcDmpNFTwwiQrzUo5r311D71dEk6TExbY1Pm75EvswHHw",
  "key41": "2ApbJRE7ArjWyVXTzHETmVrAKKFqiKBs4X92HGFVbypF1oEm4p7CWxjFZd7TmvZCSjGyqJeQsPgGwNkWCf1oDeyB"
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
