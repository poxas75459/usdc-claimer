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
    "5yt8FYoTnrQqzKpKX7giuqtuYAp7o1mkK3QeJHmPRuZxZ4yGnvZx1mC6CCmaDLQ6ffQmz1VehFxcLQLpe5AqwrLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NcAaXSTkbCFPs79btUUpzJaeHbCppaQo7c8QGq83XG7MsPZZFWUwG6do3jiync211L5Tsgs1rtUrdk6FCYxTDSN",
  "key1": "544jHwynwaGXvHV16sHHwegySo3LGT4KmCGoy87gAqGozk7MA8tsZ3tvn9JQWZ6tvBiiJinDxk2JSwye8Fa5zdmG",
  "key2": "3hohsM8v6H2jWLvLF6fBmCqBE3JXACbeik2mxgBacvuqChPSKzUhTAMwsHY62pbGRw84kmL2sk1jtXypNZmxJQuN",
  "key3": "2ZJshaahXgDwseEan5eTSWTmb1Y4erVGsY3pq9nJADMYqcwZAs72mAgnHg9cKedQGPDHLafQepM6rTcnG7HsbUAf",
  "key4": "5LbUNJDDBu3Joxt3SM2nXov6foHLqT9TfTkmuxZTqffQ3j7myYvgx5ooE4tg6rn5EiLuLmpcJNGVaok1hFq2Ef5j",
  "key5": "mhvqY4U3K89dnEVMkZjmcnfazhEySXiQ8xtXTi5avxwvRtC85VkBbrW4G21siD7Lf4n4rFE9mrWADfA1CYBJojU",
  "key6": "iyzRHjVHFDPnHWTUP41GVoryQC9FBDDCBNanAz2Ah8GGKX9EhWLU2LETA5TMYnQYqwBXntNceUqtc1due5T9uiz",
  "key7": "65scjzt56edRa2NLo7zBnCuMQxqduJyCWKYotpVsfFqHsy3BtpMDkbsF7gAVDuAwVXuxD3bJstQvS4UovJ5HFMR3",
  "key8": "3DWVe9RmMAJAXtkVUG6X7HFtyqE2DnFraQ6ZRW5vPPgNBAF5zp8fpNQB2FMBpJKXpfacsRSnVzJ2v85EmHRimcGt",
  "key9": "42k4t5KiqURGS6jQixosU8ahLtMZNiMwWXc6C6pEyMuW1xA3cVGtpvLH3CMRczgpZwuinz944PKZjbPevJAooP1b",
  "key10": "54jt3vrLHUR43jbh82g2raEzcfAXBNPiTaB9jyh3mibsQFv38hpC3AwuDGzWEvzbKYHXxsBddeqhaSb7THP6Azqm",
  "key11": "5kYmzHj6WENw4SaPKYZ3gtvCYvsKK4jVUp8xxzmkf8YgFuLSyZwGmVzsQfnbbP9J7zLuMut5sZc3u1xCsNY43unR",
  "key12": "3YhFkZnYf67AEdjuFUcUTuFNxK38aG2o2goFRGvVMBRCdUdfz7SwvaWWdrmFFnevYC3hB63WTxJchQH8kwZLLQxP",
  "key13": "mdoDTvSbS45JeUP8g44ao7CWe2xyNpQ1dBxWWZRVb5EQcgVwi8J9edQC3WVipx1ZmbTBzQPMxQURnGx9cTiu7aj",
  "key14": "3yRhkrcdJqv2eXob173SN7TA7YPMnVBNmcmNEsJUtCmLHr7SiXHcztL5MmEsaavqQwYrxaqYnfCHSZGifYivRxRA",
  "key15": "66YdTjomMvuoX8EECj2Ymmdia7Mapr73LUyVHnCMkGdAHvL45AmRJ6WnBezw8ZF5QE8baAtnbcqq3yn3AoeNTQNQ",
  "key16": "h3CDa2x735GruqrWsoi8LxBXLcskoct15RBQqPoAztVP3kodP7Za4GN9haEQsHzkcN3JNVQ5wjmrKxTet45HVzw",
  "key17": "43Ly7yroXiBieUNLYuFWYeyNXLR5f1TsCRMJBeRovGzTwxTHqLiAMHeiSDNhYGMQsQFHRy82ESuPabKQtccqbneZ",
  "key18": "4gbYJzyzUWRHfHmsp5jVpGb3YWWdGRTv2mUfsP9TYbGhxovymK38RtTmtagB6fbics1SMy3ok5Asdnyoe4nwTbgf",
  "key19": "HSp6yheLdcq4ishks75VdMdfNYinhSYXk33b3VYH45qAWNiVo1e4nPEBCQ9hncRUgpPZFJcq6fZiyF7x43vPaZ6",
  "key20": "9PJzYR3jCy24uYsZhKEfzDfw31tt8vKEHkfn2tYRM6TAubpiMDWec9LzzTHyqeLAj3M9o7aYbFa7mRiri8Rap8X",
  "key21": "5AZpV3s44iKyb8JrmxN5FzCBEZ4fVJGhmCtnB4wscrCTn4pEaq7BfyWRFcnFx5JK6JfgxhErYBnCrpaA3MKi8Pft",
  "key22": "4rPMNAx3QzbrhAMFBLvsr5VicJDiVJjKte8UQkvGwCdW6sYPYC1ZrmnK2gd9ryQqjc3BmGBqs5rNixgPPuVRjT3p",
  "key23": "5wSWYZr1yrV4UAugZts3umYBR2gmZGDtd5QwJxY5UoCCWaZaJzukUnjXbYxy1x7m5Wgpo5bbRN15nka39xAJLvTE",
  "key24": "4xd31a83LkMjZ9HNuN1FKfXCpXuBNfgW5Je4JAd4yNNyL2QdPsZtfsCFAbfyYcAWyJciFCdEpJdZazWvCiQwfp7Y",
  "key25": "2yMuVjyYG1kcCNTUFkVLAVXXYGuQvpUjcopXc6FmWDcet3nQsYRvk8yfdT1AFR1pvCJuSKBiWuUDyw9wKL915BcF",
  "key26": "o7o37a6z7iC5abraBUABUvEWGWRNMhL1shT9aUQH1nhep12DzqHVaXZzqNxAHznkLFJftFp6H1J1iJVv4GanYKC",
  "key27": "29o6h7q2T16o4k6z21pN4WZxgbximd3Mx9DxzdoTN8u4idshzChcAW2Zi1kqW3833dgwY4DDbQNQreBN1DtVeVRJ",
  "key28": "1zPwDKVTFMZQpUzD6sd215Cdsavs1oWWd6TLmoqytAsCRvxhWwG4mv9a7qmXKMvSTmqREUuU7hkrJW7BEZSii5Y",
  "key29": "3tXgQ3f8Upnoa8bnUwviZ3eGqZkjTmYwFyAUm7kBsLP6TQnnB6vrvC9Mn3b5jAiCkPfL83z7T519SYeJjfYXy9Va",
  "key30": "2D2xNRwpfgpbSyKqx4HZb2DkPhyxZ3Zh6U9jKXAR4gXgywCRGSxK9xY9Gv4SxGRa7mt6gs9KQZMrtuAKYTa4RiC4",
  "key31": "27GvXMYyvZ2fDnQAUawm1hasfhvuaoNKWsG2MH3EQez4MVtw31TjR5tEFpqayLccAcCDmauNrYFddQrUVTHW4aLT",
  "key32": "3pdN7Bw74Nk1Yc587Pm1YwojMVYmxarRKWcCzbhQHJoHyLaazm59GRApLAEgMYz7jrWvzN2JicFDMkAUQAHwkEMg",
  "key33": "3oa5qFRzt45HdPbKALXhUoa3ainuXXWHtzitv9bJjHm9QigMLVo77QUCEQ2cagUKMSxZc6sPr6NVdCn5ahhCJ7uE",
  "key34": "5i3b34QyVA2YbSqyTfMKvxDp49sFKwFgWxnbZL73pepQPgAogRoQ4g5bEnjm8awMY9HPcwHhKguZGi6REZ3eWM9n",
  "key35": "3SMz1dq3A5V8Tn8CLMLjdgLjJnGK1iHiVxsVE1FjtoxYg943vPGdgkYefMpPAUQVXsTgupVCrmiYypmUFvwkvV7f",
  "key36": "3YqcE6snmzHwwioEu61iqG4KaBnqAZuxHgnCh8k94keBZyRZVgXEz8iriUgyP7CwLz4LCNfW8UF1DN11pzh6oJ3q",
  "key37": "4AGD2yh6EoFG1kZDVaQJxikcq1BV69SwfiFNDM6krqr3SoHxR8qM75FvkKXSZ6zHLTLmxYDzhan25FhkdAbTkxx1"
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
