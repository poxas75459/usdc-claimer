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
    "5Umdmtm3SbpKNUurwkbMh5nUMTv83as1yj3Pg4RRsTo5yDrGtkX1mXeMXQ9NwvtnkUnbGe34RaM5xFL4iyLRFAJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zREmtravPR3dofm1JiJKa6vxJ73MYHrGwQhEwDgZiBozhE5qPayA8y66Yj6S2RZWvdhWFbDLCG7LuVL4MDVdcAF",
  "key1": "3KWqj5iYMqGREEoJRLSMwvVN8hPqKBNEK3hGWj2iJ3pMy2khnUVehttS2a2RN77HetUqSqUN3qLry6qREhZ5GQwJ",
  "key2": "3X4DD94JjZ8frv3yWnWVQmiLNbiegMXp3kjKwjHR9unC3QSV5ur1QbwaAjRQAQu3ibZV1ht6xXUQryjo79RhQcWX",
  "key3": "47erDSL2pmE8gzuKf7qgXKXx221WTtqbDLj14DPrULwzRePxsfqNJBFMmpjRmHBaDxwfgU7mq8NZ2GgpjLKwcJv3",
  "key4": "nYfDbAmgMfxhaWHkpeHxekKn1EtZyaHCBgXs5zsiDK4Aykxggf8FDMZpau29AdMaQvkffKdQvuuz1zU5QwuMtqy",
  "key5": "t23Bwz6fxP2TapikxwRU2R6RxyNyVLW7yubY7zhb3M6s8CFYfi5B7MsytaqHCWUnr6P2hbsuprXZUzY1sfz94wo",
  "key6": "359Brz1tHbWnhSz3MwFnZQFNHMDtaD5qvYxoLYhmvxYLCrvfSb4CQxDVhSaJg1irEi72HCwoxDoNG7pY2uoRpE15",
  "key7": "4byonCo4GtggNtsZsixmr5Qp12kddQsVcWR9K14Bvj1g1MuLNLynqW4HKDHAUagvUwmK8oxssSmP46os6DhJ5BW6",
  "key8": "3sWYJ9TkbSoCYFKfTPxYQZhVYHwF9knsoqsHneQ5mNvDo2mLrZCjnqmxcLtYNSMAmNLjNGUgoHKwRvUvTPf27Gd5",
  "key9": "38qBr76FK4iXsrYmdwXM4kvhWLR4tQg6mmf6SRp4gTEEz9tEJ4X9rzoKDbfttJwkucd4w737YkxXrUtYemCMdBWA",
  "key10": "3cToK3UA4AxszB8nNLH77114a8Nybv9zLyrhtXnzMmtipv7ygFM7FCq4VC6Mma3NMvavsvktoAZTvS27apuPgqMr",
  "key11": "5tfe4ty8C5UFQonGwcrJkfjKrv42xGcCBuDzqbmw7b5gEihf6fZ768vFsDA8zW1KVemfUvzFKWLZFioT9qeG8Lhg",
  "key12": "XYm85SkvPPy8ruV4RF46uDeArJa9UbZA1x9LN2tAu8vq56X8swFokx7VePzoPTzHxUVr5Rdq37zR1A13Ztxn23S",
  "key13": "4oetA5y3e5PecTtMPjw56EUr9wQAoTiL3svXH4B832hjYxfGxvWFd3QK9NZxysZtG4DyxHze88qeFjWa5EZDXsY9",
  "key14": "JxnxafP7MtyJbWTnSLXuTppfYvDHRCVYpebo2pu1G4S3psnToZ78jVZMvQUVY5EGeLfK5RBMNAmVAoivULB5Wn2",
  "key15": "4rY6uG3hfXntqafehHXDpp3Sv8MJCtrzWXzYHkVUgr1dx557LnXMK8XLkZPpWJZXAvGJAyXufkunwGnWd519bxhK",
  "key16": "42R546vwWKfwx8uuy3zgD3d2WsdCZRyPzXkm6euxfZfs4ivPZ1KD8yzzz5u6oLituJVdUDSqSoDvMd7yaxXuQ6KT",
  "key17": "sZ1EeM4nUN9aCni9RbWkJdCmpnJ8izxdCWLks2RcVrxB715dBbpSbq32vS2P7jGsGWcMx8hRe1E7ciGnaAVHJLN",
  "key18": "54PUv2D9ow9DhefqjSjF9a2DDXhUtgoRTcWxJyRNnpuHKaFHRDH3W1wSX68oyuLQTWb5nigW9p2ujoEHV421BxdW",
  "key19": "4GGpGhd7kzDfdBpS14maGqXCrpZjJEUV2xNMTnZwbYRQuWSJJtDdfm3xxfo6s5PMjLtcPevNPdRtz9bPpqk2bBQf",
  "key20": "3oEbYAQ1yRcLBQraBQTpbmZT37KHNHxnrR7KePdFfwPyZ7Mod7G6YEKxUSXsxGTs9uvKQ6rMvubFEqAKuActLXBX",
  "key21": "3hyFTtg3kFyjEqzVjvAYqmCxpdQ14M9CtQQtWoPP3E64egFQ5V2BDAAWBaJmVFkU5ec8K5z5ZJme8tsUn5LU9AxU",
  "key22": "47vD7kXELbZKK9ix7Foo1xrWYwpWHvwr2AqCGP7F5YUKDMD1dAy66VBRjPwveNoSxq8ikf8HKhQ91yFPLaPfhnxu",
  "key23": "4dsorAVChuTv9yqvZoueAuWi8tP4cqQhXUby2mTB1TVJyNp9vnurqtDbNUgyBpFujVa24YDV6ThmzY3i33aWbjYW",
  "key24": "4zKSioq5SXxiQhmVFb7HoHNmvBBf4MzwaGW28ci3nrh7XChzYLqxoiuKYkaSioAJUwTyC73LA1RgcTAhpZEj9kVh",
  "key25": "2yhNz3tSePsd9RD3qdNPEpwgUU4qx4XtEkH6ePNFFJjLKdyLyEdizidxhCccicFazfvenHDXr8jRBd3Bz7CQx6M2",
  "key26": "22iStxV18yJLG8XNDwHS8HtBfdmGwRSPTtxpHjwasBB2bJ9hoFeokUgDXAR3mfzpYTSfXyrGt1GaEfzVrPvmTPtx",
  "key27": "29h8DR6SXrok2S41RLvqQRX3y7hxGFRvZuP4nxoT5mfYYaypsMqwGs2m6zU4VTLK4GL7GjTV2t3RdyfcddD8hdry",
  "key28": "9ShbADnEcmrb8jYK6QmeqieQp7GuLoJrpXgVU29vsPXepA7kmDzDV3MGgmCyy6mCUQipFoEaXTveTpHryRngdBp",
  "key29": "38xfh13cpAtWwGhk7XTNVSZDk2yfEYizivSm9eDYg8AZoVqpYsy5AsiDareRcQk42dBikpKJ8q4CKHtG9nAztEc6",
  "key30": "5GYVtMuDUfPvRNjeNnGGXuBXFhE2bn1DXQHr7cAE3MbdXYyMKVBRJK2PiJckjmfQ8FiXRfLMZi2GcCtb9AttBnVo",
  "key31": "XPbsH8rQsLLeE3NmWrFD9w4f2MrhzuuGbKmDnXbbmiYUT7gx6vyA838RSTtsAg8chHiPFBhcjoxUsZLTNeEKWL1",
  "key32": "axXGLYFyy4bKuXgWv6Wfn9PUoskL1M9nKdi6VmNCvok6Z4dfrQ9aCSimyoiozPB1sKm33FPkiqjhy9SeyMorPF4"
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
