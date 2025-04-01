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
    "2q2STVfMQ3w7KGgv6d1Ko5tUup3ZDJMhwXofocvtC99yoL5f7xJgsJZYseyExDU67cneTEskJqxcUch4M7yDkuwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ckXNTyg8QHfm239XRwBTgvWxpjybSRNN2QsjaLCnTZ56Hy2F7hdEa11DjMnT7mYsCHUaFEAj5bnW6L2Uv8bkD6",
  "key1": "2QaKJW2G4AxwUA9oKr2treKQeAd1D1Rm5HBcDUJCb9co3fgJZjFiXRCrX43YYtrGeDMEKrZV8aYxFnhLhJiqeQvn",
  "key2": "3AkNGGWGG4La7ZnJn1kNRYQiruFyTU3WFkagwJukQjyAKfgTdkkAfnTTEJhWiTBkqyabgiE6QkcXGkaAQ8zVd9cK",
  "key3": "5MuRGMFEYBafs15NaLoSnokJBv2uNRWcFbz95DsSYjUtbHc7bo6UdT71qan5AUr7CEEPfnFNgLbDoY2U9XK9WBy8",
  "key4": "4zEv8EYdsP93h2CNN2qdnTn6Te6NQgCHXCeXNds4HDvwy7JoPoM1RQTFAJNz4KJcwARyKBd8NJTE6WedZHLXBbPs",
  "key5": "ZmAbuexwMxCCPgX1wqyTZvKVSCvRdaBTEwAWRTVkZyQsBLeuJ86h2rPybhaJ39CdoDZC38ausAAw98UMDDdGA5j",
  "key6": "2S5MuAtv2NTrhjpuPi8VX1Pha8xink3UuQ8dZnZ3EVDNbDYxLJUihgHogCorXo1hzJEFoSmEUoDTW2SaB9shWpSi",
  "key7": "421cvgMyh7KwqAHSqGMTHotKfjqFG83f8qvzF1o3KaE1FsS7vVBYqgV6WSzvXxMc3mjyCmV2Qjm4nc73UHpvDf1y",
  "key8": "5q66B6WuE93jSETRs5nbnvo3TRf9nnc54Nx2dhKaJG3Tg2bVBb3ag4xx4n5vUuEbZtrFd8NJehHry3YAW3W7Hc3J",
  "key9": "v1HaT3yvupzW5PShfyV83RonAdadhgHsPMAevbSbyBzxQs8HUrfkKagyNRa7FVbrncP9FHqeab9TXkjyeXwEj8s",
  "key10": "5m8KXZuKKYwwL2CGrcaDoUcbbg9jhLR9qNQDA4GDwVxn7Cs8dnxnzj9tVwmh7L5vesHx1knRf3JbNQmVwEAJRJ7J",
  "key11": "23LQ5pVadm3YJtne4L8UuyLSnjsefiuJL88QB5HYvRNTCRjaeojXjng9YYB9ieS1kxySxSpz5HCVaCrswoPvPHPg",
  "key12": "TbTWk29sPqrq9vDCK2TN9f7CNiFVawo3bAzoRWc1JVtzBBau4BjWbcmfY5eCb5u3UHWRQTAuqm41JtkPz7nADGK",
  "key13": "5FF5j766Lo5kPbjhZvuRhxHwCPNSXjX772iKXFokFTj2rKWHMnkndLduHp7h7cwyxpcP1uLoSm4MwatuRLyhdcRY",
  "key14": "5vLfhi9aAj4gwh3repFbX1boWWKbkpbwv6G68ny2kg9THQ58AQbZLRuKbgxnsspzduWeK3RW9U5vmGhEedkFEV86",
  "key15": "GkRgW46CAkwzKkjnRzs5iG2UGtzy3p2Ddccz2ynRFh9JZmUzcbUSRKiE4LFqLDKGpG5rigRff8WLZ5PRvr3zGzo",
  "key16": "4NrcwaWCWGg5p93yEcvEtxbxNweiUSA42jM7HaWkdPpBTe5rhX4JRjSfGPeEFsjtMVw3kCNBCVcw9NdWoaSqfyne",
  "key17": "3Rb6cJ7w3D1tnvkjqFbPXbLE3cfYoEDqGdqEWVhAU16pUSp7DUh2W2voyVGabyioX8V9KMmUW1phbELQL6jboirN",
  "key18": "2QDLDGrY2GEogBtYmxdG3iEQntf9MSqwjcipdCVM2YxXinGNhX8MP5ebdZhuuevUBztqoqXofLCzUjChRCd6uAec",
  "key19": "J7fTNWKhXWoQSA6BBUHryuXc74hHp4uZytjzN4uke4FcEABvF2KVxDwCgkmZPfYYw5LuG7Ct9pYgiKrfCtCZaDx",
  "key20": "2KMnBCmJxE8kPa69bniFmDqbVcAbL8nHQVWLt1EbJQeEpnCyo3beQwum6MRKQAEBtM6vSSCYaj8yWBM12JcVipYc",
  "key21": "61PaaSenna2jiwz6GrgyKqSiWjBBBdK91MdHVqZh7Bi3xr1T342QgZeSQ7vr2KTBbUj1Y2PMQbusTUXAyrziSHa4",
  "key22": "5D7faEhUhxuCUdxsEtJiZUcLomJWD6Jt3QjNTqoajhqoFAzptyvYkhThE48TxcgkDTPyaHJnLjomjA5gqCUPx4WW",
  "key23": "48LX3R4RLt7hN451csw35iBaZfeNWABonFqaWs1cJRYBcsTPS2XopiCjGTCcpGSE6Sw4jJXgy2bfsVSi8Q8j7EK1",
  "key24": "4EpnmEZ1baSs9gT9yLWLqfdJ3KtjCtwNkhE5QGnrxT4noAYewGMzH5KYRVkoiS8YU829732WD3m9NFT3Nnyh7dup",
  "key25": "58bUuE7Xzxsbr8498tCuYEriRTJnzQxLSjQ1CcmdFCbdLhesVdkU87rBQ7dT74e3mBqei35HFAs9oonNxn8BD3Qp",
  "key26": "4npFSwDG223CHuQL1vGnTvkMbXcupKdKPdTTUuJKU28kT2Z2Zqc71YK1rwoGPmhLKBaDGSkkBYhXJukuCRRRZgpx",
  "key27": "4hT178YrXwb4Fb4ca1sv4j2Fxw1XLmmW8eeqweWDoUHjbYZdJUFZ4veW485gqEGRwSnUDpEXNzCFSkUfZ5f3w3nk",
  "key28": "RxBkbjs24mkVRmEKU489HQv1mLeXfR2seqU8dPz9tAH3rFwKLBsbpqsHKMqQjjb1We84Bd6S3od8b7MmXDiQyWP",
  "key29": "3RnTpAfus6tQW1855RisYSA4pq2ZDzwTpDuHou1udHLpRf5cdAW37GSrmZHhEr2nkjeo98swZ3mhcxwbYCKeA7MH",
  "key30": "3GRs7YL41M5g9fgxFbh2RwyU658e7FcaMfzC99icuprcVa957YtRbsqCiYoFTscskaGNFmruZmix73qtBzrs93hz",
  "key31": "e2tvCsd7Z7m9qdErLCByFb8TJfgwwC348vHZruByfs1HuZyAfP1LtUXhqM2YMeXBEasS47myehzK84wnbT8TzQ4",
  "key32": "4ZT5UyBJE5bg7xwX9VnEz9BMDSEn14g7ggTDoV2dzusJ83KNj5EZN2xXdRWHZ4TC6wpsHziarXZeWeNuDKPxb9XS"
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
