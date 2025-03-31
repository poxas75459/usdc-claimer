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
    "2K9wf9Uu9yPmLXnogc7NT2Ncg5PSmeBPubxgWSRwn91LkBdv2NdmqHZQtSL48nQLtB2RiN6Nd5Bi9Sth8WS6Qr5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Npw8qnquEokdFpZEP1LX5ymwCgL48hYC6PBZnwzXyvFgGdfjV7EzryBk3HXbcsfTXba5mbrsUFYwiuQC8z3Ykr9",
  "key1": "2HcrXSmWz1E68ppJDGAyZEyjrdsYbdp641G8WDN2KYiL7ahfo1pb7q55NcBXqdNhQS3MG74JsbNVh859ejSF3Hok",
  "key2": "2k5nBvJHAVKA7rVc41jhyZzkixAgVqesi4eaeBDewnYFDAYZp2cU3aR22P726sjYa7NzT69pJ9JGyiby9KeeUwMS",
  "key3": "2pjtx3RKqeouns9fUqkecjfEhTZKTProR7QKUkojoqz7s2ZghyCJnBY2QB4GF5HncSCDUGyhyUtQUeVmKa8SY5J",
  "key4": "51P8pT4jrXzSxqYBNEauchY8hWSS52pn18K16nP7mFRyKCnY4AYxi68g1ebQ5xcoajWth8Q8tcpfzj9Xs3kRSn5s",
  "key5": "2LqrZmRATCZJwZEnVrChWvvjqExcQkTPsTCopAczBaiKoDxcwzk5Xy1jAdLHseSdfL1B3zuMPuJBqa2uD8N8bYZv",
  "key6": "5pyVVgUj3cRKcpp8SWLGKcr1b2msatJ4pwXWvFSmwvtVXndWJs2QMZQeUCCbJZJXsM9CbntoNAaZ1C3xzQ4ahZ2F",
  "key7": "4wWsBRaxcL1pZYpbwoVXurjUUNsy5s2bN8e4cUszxhrzBVANVdfSKPzL69mpntPi1rWbvTkUpoaNm8MbA1oyJ4bP",
  "key8": "5nsWovEA6y6bf1aJk5wZzgHf9LSVqEg3ySV1WFPBVkoRmGrW2UPerfMoj6JaXYFtJ5JtTaSWrycjm6DfmGjZ59Wo",
  "key9": "4Qnc7PMqPkAnrkYAcNWgMZbtdfJfpQyniYCADeLLrJ5iWtU81VK7E3R4fXeE9bi2M8XWYqaHVGwa2T8Gesd7wuc6",
  "key10": "4VW3pXenRKXoEX7KeTJ9AykCfrNRyhmfawZw5N7dwCy5BEC5U7LRwEnstV2RFxaP61bwxM24FUM7txuT6PF6GihR",
  "key11": "5N3iesoJsFNXdGVTwJPjMMVUf83F2KDZouajkmjvcRXVzqKT9gDN3LTJy2yfAVPZ1DQ5mb4imF7c3iqcnKSs8UxQ",
  "key12": "65RmGN3NqzGiKHcxVs2DtYQDoEEffrTbwborbz4LXwkGjw3wwUkfFPJ2oZKE3URcszZia7i1q3ToNa98GxLmxnRL",
  "key13": "622JK2wNChpYf6CXr8rRkbDcDwctF6ispqwLKmBDErD9nqaJejbqbqMUMR5K3zzG1nJDZ5MKcR5oKSzECXZzTNjs",
  "key14": "2pKqPMCY4mjHJYfdecA3sjK2wNQ9Vr9oUEJBCx5U2jD61BCLdZiQg59pL7DEcP6xVeH9zuigzeRFSt6jLsuK1sij",
  "key15": "5v1fGmVaW3ezZqs8acymTmK2eRQ3VZ3aJjabAunLeWLzvVzGMXD5c5b6xgk5QQ3x3ZuXT5riM15NvRD9PcrUv1M7",
  "key16": "65YPNXdsKQpez9djRFKKur8Rqh48QocWGso8KnZnhTnSAu3daPV1DJ1PYY77Xsnrtbt5bpFmNM2hdcUStzssfWX",
  "key17": "5FSnkrhkgscZmX7BVLpn28o7qhopEKtRWitkZKhx42DrxrrPWoMJajqmkQz3MDuZHfbWc7sZoxs4j7vNjzGypzyH",
  "key18": "wKcnVRB6nDgxKVCcoDWDmhzqqUaZhK8krbGcELmA6HcokSwQBWoDdT5sLZBJ71KDDUdMWNcAqNknRpYs4HPRvss",
  "key19": "gYctFPsxtpHAyxeQi4SXBUzkvRhNovU7h3hYprZ7iLndbH12Lcfn1tfp1wDkBp98ZpkrUJb5v52CTB2oJykF5M8",
  "key20": "2iTnzbVdAhag9Sk3h68eAkmfPhRtH5wrj4sw2ZgSybG3r3X8NnfsWht1sLe5S93gc42UoMt5cKFd6kZm8tdHYMV2",
  "key21": "4KyShzLdj1r8sYg2hNagTPt68pfhTEjvd8bn1JQTjHnXHffPdo2WyESESkijmgVVMyHn9eh8RptpMBvxWpqbfoLP",
  "key22": "2k36rZDu4uy6YhVPBD94Zog9JS2f7TaQwrsJFXBGdGGywxNKbAsENZZr16PqFkwTPxXLfJUoKY5Zf55wWye2ASd1",
  "key23": "4R7zQSTY8LiLsU55A9m4DrfBgnV4Bd8tY1UjgVzBYkytRnzUpvJ1inZa5eqcTAYKuUA5z24DzMJnERmRbfppCucY",
  "key24": "5GYs5UiUQ1Bji5pbHp6RU1y6YfBnes72h1K7QWVaou8wmgqMtP7iQNzHAscxTuc7skMXHk9yy1a4NTeXNNepzc2o",
  "key25": "4UeyCgtUYLAT16WQvjtMZJEwR8CDeszArwdKF9XDby31aLyf2QwW9fkCAsU799wwmJYRoYfK6GJr55qdmQV81Ncx",
  "key26": "37Gn9oWm1beRm71h3drEE72h86L7w4P8CE16oVv571mWGmn4gqB1By1Ugtc5ePxuTqTuM9VvQjQ3Zbdv7j7N7U7K",
  "key27": "2eckbfjAcxov5di4gt78pjWF3s8tFhuQMtan2K5gJB7f8Ke6vZMDHpJbc17yMpoQ4WM4opXdrE1gDmZrvK486rxb",
  "key28": "q7cSFP4Q7bJVGSrVJshXqjFiDBNkqH6ShgEcti4GZe8hjHfuoKxt69QQN6ANx8tqaMt8KuomWcbYEWGXondrrYT",
  "key29": "34GMPjmjFTTunkLC1YeZaRVSw2sW78UD8284t8nKjF6jmWkM7nmaoM4f6PsiUmBoE3o9axH4fAqsN1VjAcWk32ut",
  "key30": "3pMiEH82LWVnrr7k8LCzyUrMSqYYk85e13B3fMJeCeV7q4wV6y7Gx9CXbFLQakojXjkys8usLUEuo2v9A2j8m87p",
  "key31": "5Tv35DihqAJnthTu18wFL7gU1tkNytKtsiqBa7fVeEjU2JvKZ8BgY4QvbyBSvi2Lv56CxnYzRSEketJtdtkRMoXx",
  "key32": "CexiayTjgVdMTFZSjxpxm49PF1xbbgafv6nwbC247KPcJ3HTTMZBXoSiomgB4RjkbTu6s16Dnu2UUnjCSLGom31",
  "key33": "5RitzczxoPNnaQCGg3RyH5ibxQt8jeCNft4DgZSmTEU3ZYYDeYsYvZRtBjs5jqDrhtxqUQUE1wgmMRJ7nPBYSLNt",
  "key34": "4GstvgK3j2MckLRaeUwYEsqGdM7oDE2ByT6xts1TXkd5dsCR2NnZATqsDZe4XvHHjzVMbvgQ4MXD5FNiq2JgcVdc",
  "key35": "2s9RAct7k9JJgY8irPPNibQT7QNFj6AaqqiaRhRi2yGpCbRe4usbEXbJmMA7jCt6dFJriHE8cRsWjtPWngfMfWoD",
  "key36": "4R8iWtDCRUahBQGWtu3xkAAFqXhNnPeUvuZAPYdT5MhqPDZgiTT6s2HtNzLHbCNtx54iUQZhaWgv7zfEFRiMJSjs",
  "key37": "37uBrrPC7xePnq6K8P4TYkEYQQFTGwWnkJnTP3NT9XvXb8BdXWyJhVzpu5aJ5RXyyau7htfndcDUoMmfo6J2WSWL",
  "key38": "5mHBA1aZfJoXMQ8MrprtYSiCwqrUMoRs9Ubgu8SK6ZrG19qt2q8bPFaTTGdch5b6cLAF91GJhwXLn2nkio74cQsG"
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
