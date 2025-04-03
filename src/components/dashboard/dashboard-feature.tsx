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
    "tJtBGSzN5L8QTc6fjPYfny3VBx4t9MijGWrXWAPHAjzd1okzowNPdoRweQJbi7nFhpjE2j9kaTS3x2vV7SbS9DQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sh63o7kSgaFeHV9ouPnwk6CGtdJQZURbCJbNipP8LkK9w2RHX957WfdqaMEfgbXMgbmCLDHgUUGtD1TAz3YWUz",
  "key1": "5bt7UHd544qfha1fzA56q7kKb9b8ctTUrxLHhHAUfAtUpJkwdVBVmLVWtgk7bbTvpjMDurmcevz9gB7RWZnukN3b",
  "key2": "XjKAoPUNkuZdaK7LKcStMDraN3qUYwbY3sEYf1oSvV5xEA2Gn9ydzQwNk6dki2TMb4ad9FnVbo2RM7yhCKjmCzF",
  "key3": "3FMSjwuWRgCCMQquwvJoWebPJUJ6jf2NFwjxUtZ9z8C8sX7JmFXAhAU2Xku65eYhgpLhn47L7t5NZSPneHvzwenh",
  "key4": "5YABKZsjvQy1debRTD7SakxnVDNJ5kfqaX57eiaUZQkqMiaaBfGx5USZBHimbP1g77WvQyqcRwjYEywAgSdjX1k6",
  "key5": "3ZScyhcg1ZbWSdWkv4og6c1X6YTN6Y3s7TdGdzb2aG2n5vUgv6LUn5pDzhJmXX9txMHfWUpNgUatWpgwmShGr5kG",
  "key6": "cDtbbC2rx7VfjSubEYzULX5TQcK3FyiT14vs7xTFA36YnXW1pRdvaZX8ZwrzkwCgyAiafq6fTYuW1ZnEnJV9KuH",
  "key7": "f1ugGfsDue3JqhwgpFVk5UVCMG8CxDX8orpLvxSf57Gq2sdUv227Upwx3RfgF3ZQ1k9cKYvJirq3rTpkEDBrQ5V",
  "key8": "rtZZJn6pMMMaVB1gGZcEPkBASwuxCiVmTdGKdauKCQgwE1Bgk7Zgj6j6ayEWDbjQrMU7Y4yKcPkbypB9cZmwHyy",
  "key9": "2AkKPUi29RqJZfRc1UvTg4tzbYkqr4u36mZvdETD9GeSE4joCHAvPUnq6t34QGyAV7xnZFazJmZ9ijv7kY4Cv5op",
  "key10": "5uPQg7ZYyBtZ4vELv31MHRygJxFKHrxEVDW9pX4r5Y3w4WgDKwM8CF15kLdBYjP62kdHsqMXEWVfXQLXX1tv4eW",
  "key11": "5HmaqhALyLPd86fhkqzXUzmyMy114yo5cqcJ14hVAmSeCdgqRdbkJBtJGLyhrt8kR2ckTQ1zZGLyHaXYXtDjFnKm",
  "key12": "53xn4LRHFebx5uxkGfuq1hHxVj1ZkZmJtCTUmpdp6HNEfrJGtBspdD5WK6F2MjQYUt5Fyvzepp9W5h2A5MZp4k73",
  "key13": "FChQRCM2HuziW2JHKYs66d5CvgfqU6vjAKmifCC1o3WmYLvPMC6jjKAZCvdgKfNz1U9MUDLU39xgYAL5JmsKrWG",
  "key14": "64CjYNtgja1p8hMX9aHcYjJKm5nB7NYVsVAdGSTkmr1jpAtdyPmCxCNJVU8FcJj8u4yCr38NQhDF4omMSNSvC7zg",
  "key15": "3NBChmgzRNx5SCeoj5zQf4LeJ1W4RaPgyTTzxSvDCL3TTo7BzfYPupzy4jb3FG8fXEtqWacjSepsTr6M87LrWAaF",
  "key16": "662dycvxKWxrbq2V1y8WFP5gBzXQamPt1CJM9X9Ni5QRRHcH9mFJ4MbNJfKwSUghdgTAxgWRADTXTkhxditTGNsJ",
  "key17": "4ufMNjyiFTLVtHHmsf5gs36VRsbZKko6XKhLSVmD678bbJHCFt3ugVcSUAfkRqMgLj52xCZTNfksjBfn5PiTikxm",
  "key18": "55fL6rH6urbfuhWpcbGfwFpPbuDFY2kzugYtzVsAvwPWRreetZeDUyU8E4XgNuLHj8kQ76FQm3u6w7JiKp28D3sj",
  "key19": "4L9dN35APTJCrSrLocKGjrcZkdh7ujawG1YpK37jVorW7GvGP3wcxpC9rkYrDr4kwjySKoo7Jcq2dnBKNfVhi8bX",
  "key20": "ZQ8QEvFrQty7GGeJ3QPWn8km4knv5VhnPnXyEHAgHHDhiTGhBBEEJFsRh1F9t3SEDD6YepvirndgFxxgxeeSocU",
  "key21": "2fmbDCCGpEWwfiyE2p3o8w2UNPjEKavPr8sihwRSoh91zBYoMrFPdu8dBFAbvEFeMz2jzAoLWBGAndKo4sqzFnVX",
  "key22": "2gXxvWDTnhjje9FHvFp9CrL8k2zyKjuU7DbgEku5mNWJ5y7MixgRZTFETVG88NV6yBxnpfwF1AFsFXMKxQzyPJvb",
  "key23": "51RvZis8U4RhaHCfJi2a3MraLgirmAN2pfaKFPc5SmQHMgdbjsromCMN2K2oV5Z9A6Zkyh6yCzPYbFVz2k5Qcm5w",
  "key24": "52onMkxoz4rtinrBPmtVXJsjwKKzCesaipGcFJTdhWKk1g3GjnogVjQFRb5hLbQqdvP3P6qd5vNTGjEVJjzc6idX",
  "key25": "yLTx8PdKPCuZ8Q9wumz5CDMuaUzGDJ6JKKhxfzEc92Y1k1h8UT4AGjRGxtMARsG6YjxCGY7nAMMUw2FS1JzqKDv",
  "key26": "2w3KYh4H9ChvhLyhy9q1E3WYyMXjrwB1aMwJZ9a68QKkArSvei7vxWgQEuBVjSFK3Z3imzfgz762c9eKz4KLv88h",
  "key27": "vHZH163HKrCyhDZG2tsww6KmpByWNv22nGFXQQLqaeuJP3jbRBCRw7kPnZ2oQReQ1q53LjPKrVA49tYvAxRUM3Z",
  "key28": "izT3hxm118FNEyY7gfg2cLX9jjxaWVv9UjdMUYGC7qbj1aWYVbYa8vcJxXCN2R4V3aEUUi8Dhh6sYrbsSwGSWrk",
  "key29": "4m4SDi2C8UNk1otu3U1TVEXHxqoYJesocnjiidWu1obeEQPqQEJofK8b5B7PLzSeLan47enp7F3kP6XvtxBtwGpY",
  "key30": "DMEDhPnTBMqUhgX6g7vHjeZpRG4WTQ6tT42cjwBVGvRdJGAp8VUZGAsT2DyRQQUXY6c2dmiUJgFLRCK3axatnXF",
  "key31": "29hLUGQDvkcBQRriNMtSX8L61ZPL9oFw2nddA755mqMt4u1u88QAqHjpUe8hVaRMUzSwEvMtAneuvveTd9w6n8b7",
  "key32": "4PpTZ19SUSNbr5m8ou5BvBxUqP87cpJdM1RYmEVzzjGqXKzGTN3ui9nxRipu3Dvby3Mt5QaXpoMM6tGkRN2Jx2Sz",
  "key33": "3qttnxvxpaChbTFaE3pZuTqRvci4ER2Yj1raiDrYBJCofE8WQThcRJJ3B4LFb3m9vxZfyM5N63TTez74aebh5Xnu",
  "key34": "2By81X6YcaXUfE2CighLytphU4XAWEgyEWEVqEh6pF5VsLjxzRGfqcNDRGxUgwJJZdVntC15i54XPBc9W6eD7pEc",
  "key35": "3xvF1tKnAauJGDMJWNSCwaHd6vYFXCDpJqaWanrvyzRcGJgXEQo9CGbWqjDhsApvsSR8hT18sb2xKGPGfJN97yGZ",
  "key36": "2QHEmgzac5KcZK8wad2UWzTrFrRRiG7ka7pYWWF2zqtnasBiTDTAmryicf2Zy8RE9PbYDkLCu4Ajp44Pu1FKsKaf",
  "key37": "4pu7SrHC5Y7T1zHxQz77m2TxURL4LsgNrTsvmgn7QL1xJf2N2vhy4DH3UTdZdc2sNLdtQKFbQc6mt816aKovJBXN",
  "key38": "pndwi5Az34yPvg87VS4AeQpE479E5tGeV6cA1PH8mMRS9GYoRcUy5v1apT28wnTrZWjtRnNwficQpjtwS7PWvwa",
  "key39": "3e4UTyKsVKP4mcwChB6mzbTDYrh9aRaYC95LuEFVyXg61qAFcdT2mcNa65kbNSwLLafbMCUFaoCMjBtrrAUthQix",
  "key40": "5hUqZWAvumYGY31ZpRMU8uxv9HHXc4aWysfdEJThg2yUaNQuXh7GsBHAhhThiCV62UzVUfEKhPeLZRBqgJzg16TN",
  "key41": "61sc8aKg6EPncUWT3c1eEnTtyx4zxaJogwTwp2jzR2Z5RWuVZuig9fyb6trNhGtQBBPbgKNsTAsuSWva2KdDweeq",
  "key42": "5kRxAtfDyKxc7C9maTnFVhBLtLcBa39VrCpHEq4T8RHLkvV4E568u71PzWbEnhQfPzRHqrMcCwBmtANT4E1b3ciy",
  "key43": "5wchTLdQUEddhyBi2PGi8gyxoWCy143k6gH1af7cxzkk5ob6G8g5XmEBgy4wTWjfFEwxYKzLsR4j58Mfkf3UVjou"
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
