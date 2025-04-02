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
    "3gesD1sTB96igzXMJS9vQQf9Qw8jKDVaxusQKY379MAdW8JgFZPV8X7jHFzMnDSo9yeLipLVQbozN8j7iu7JVZph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzKVnY4JbuH2JeEnmmL1u8PMmeZLhhFnoQurehNr6ttMTroM9igrYHmcPJHpQwi4zRwfTdwLSZSdLYqkjCpLHB6",
  "key1": "28HLs1r1upEW6CmtJBa7sg7QSMdqv9bxjbJnXBPxY927bPgriM53feYifbYsNnRnXnaMx4TA4xJS5DChaw5ovJX7",
  "key2": "aAQdJS1KwYpCzoxbESmWdR5apmWY28D7ZQJEA5VBTDS5e1x2JfDCqMQVytEEXH6Qwpn9iMRixSQTbjkt7RAARuf",
  "key3": "3YPVVTXVrvjiGY3UgiNsV3PbE7ZBHJSiEYwzjKKaP9DBwKBQm3UqH53Zt22ZquB8Gz8vd7Vfh31hq6nMAPYq5gqj",
  "key4": "EqYbLFKTcRBjUNwAbexowh3ZbUMCfeFMC2iP557EHB3PjM3qxV5hKWQguF4aeUKe6VDJj6GH2TostfPRG2D83Ff",
  "key5": "29cLvr2eyrMuLZUMURh2TdHY1ZrT8XoyqyUSUvAqLQst4GW92KwToqPSM8EMFUrHdQ3tBuNWBmvyRzmhAuhDz5uK",
  "key6": "3qRMnWQYfJ7b1xFBK4QtbamWfTDuWcj4oKcfCWTaxMFThTYUtum8z13t9kZESePwbNWD5U5N3nB8rFiMcAxvws9g",
  "key7": "3AxCjT69eSZfBkWA8c7cGWCCaNhSfmu5PYptcGRGaewWRasTXpt36jP3qcSE862uJchbik5KiXFNhvE5ZyMJCB4c",
  "key8": "4r5ZTTz9VxbS6pMdVZmaAJtUiZLfuZ1awny1hwQchwJumBj2MMNE67FQvnEn24pzxJ7PoEGuf7h4b6JBtcGeEKrV",
  "key9": "2kpYuE2HW4H3BpzKGUC2WetudpZxfxZ2uyTNPfJqojMD4JrRAXA1CZyxxXyutWysJgjKEmXCgPDRZxNCJDokFqHj",
  "key10": "am5fX3chay7fX57g9Q6hKVyS3b1kU2eZo65GGcN3c5n9f3TQRKxPR9igWQfN4qRVN3dzEZRRYF6FRyBqqAQGPmY",
  "key11": "4y48ZpkqDTcfVqzU3UfhtXugqKEGh3rsJcRQJnVbNM5C5ffGawaH4m7v75qfakXp71UGwg7yxX27pgbcSQQSXKNQ",
  "key12": "2osNRvbYmijV15ntNRkEcTZQsfnRbv17xbUHNHSNYwQ5tFMdJXtdQ8Ma4SdVcf5YpcNZjaha5HpAJtCB6Tus1zHp",
  "key13": "3R3aGKQyko5erkxsrXgQ8nVWosS16XJLc5a9RLVUZ7bAE8KUZYcQ2wNgrccHBYqCufsSHSJazzKeruSWWx8thcQP",
  "key14": "5XQUMLeBzSqwc7CribsBc1dskPJeQkgw4k4eJ7kQCYwwQsiDbu4ABhd44C6Vn9eseX4C4Ku3zf2n1ZnU6SSmFwwb",
  "key15": "2CfF79CZtFaWnqZAGogtwTysVReXVassHQdwRNH5kmMQ8ThUJEbRtVthtQU3kLuHqztD9zw7ZHSuEiP9wKur9Pry",
  "key16": "59FJzKDtQ9RQrvpP6rzuZbgzPitoG5txXdsS2QpFiuJuVBNsBBCV9FFJUdq3aHCPtMW8sJqma8uUpoUEXGsMMXkU",
  "key17": "4YioC9JGnWjhWQqG47cupWnzNrBLhu61psTsJTftXcAv53cpd1GmbX8PZXnsZEnWKQS6XGNZGS9UtF7mBL1ahbnh",
  "key18": "5w6LuRtujJJGBZbrEq8EwKtnBWWfqCt4f7PBcoEf1PXxCZcjRZfLQynSSRtPtVhoPFYyiKc8LbY5ccemjXWVQWp9",
  "key19": "3yUR2WZkkZd5bKJ88WHafd1Fv9pmRafrVSRxuXxd39QKQ2bupK9oN8TRycXUCDm7odrb87tbTJaTYKAdRcBG1t4g",
  "key20": "2RkJcEJG2PYihRvw4odQdgTYBdpSxBWWXWEeSGAZYCqCGf51zeBvBw2uixmoeMARyoWgPCfuwi5TDnsrWs2ocTwm",
  "key21": "3i5Q6jGBo5tBwcpoMTRn9SsDsaM8beXR8je3JE8x1p84F7M17r2RofYGoStK78pS8wTwjpoqMJcPDnk4R3MeEyhw",
  "key22": "436wfMsBw4V2CFPCcUumGSDjWMhThccc3dA3sZMomhijZXyrxa1SYdtv3AdKujEpe96VfJGroEG6sAEv2tXJH62q",
  "key23": "5aexUutahAEG5FedxAigWBkaDzSpee6LgFcZtPbk4iDnbnoG8yxVQKGJ2Ad4doWTNX9P2u2U8W5unzBpWgQEhkAn",
  "key24": "4AkcS9FEF76EvgeUpFYF8VxnjSjrByB6ur7UAuDR8wagCxFzEuFQHFzhED6uAuSMGJAjZMZdZZ6BcWMhHct3zjMX",
  "key25": "6NbFkR64pYZhNPzz5N5phgJQR6ix3HvdS1uYTyTdYsrRW68L8haXJhEmWGcqowcXG7JWMBLhFNkbGqKbaP2Tszn",
  "key26": "3gb5N8QocnEc1e1LZCsdLBrJ7w6SymkaFFgfZyWy7dxkdRJH1sJvJSJowpmeBvzdsk2AjdkrYeDumJ2xQ5mNs2tw",
  "key27": "cCAGRtsoQcVaobuXZsUwCNtEpAmhcab3f48iEdVPjK2YFF1fRVXdvhpKgboHvXvyjMKTbbjjcyjNo3XHJiPCVLT",
  "key28": "4vUsxBfeNnynGw7R1drq7GLpUCShvCouMTokK811vnjftmP57YaaW3BM2n8gLz96vXzZSmHz2G7Vjy9fw1ReHsDg",
  "key29": "t5VJhGJP6eQ467GMC1vP6N7oBqSoQM1KmgRzeg4ah2VoxhrykdNBABXbnnxMqY9iV9abwfumkuUP1Wj3MEuj428",
  "key30": "gjjUaKaezbaCLeiZFBHpgtxD6F2DxUpmT6VrLo9BHRCXVrm1YNddMyfE3MN6j9mCc2LRUHSUQtiHokCjuPJcN8P",
  "key31": "2AV2cLWKvg6URAfta52mXc5vcLPqbUNU3L13kQDYYVg5sLH4nTXpmodCPwJ6Gb9tfgG6bccRwkXVoTG9iasTNNid",
  "key32": "eZbEKG6PWiPAcAcUPiKH8HRLeUfHdEWuPZh3KDP9D44qoh3hWpHayc38sT6fSsnSMCpE4vUf39YKAzzPSkqMcRR",
  "key33": "5aCqZh663HZKjyxD98VBkm3vbAS6eg6f1beFPDjL8Ksq1SdRp1NVuSU8hj9yLUXnwQcSzFhw6X7tTKYkGLKE2jF1",
  "key34": "5ZkEph37rkffnGJKQWsn3c1ySVQEZY2bbdj4yibyg9AB9XVD6hYdJCRBoN8nymhRud9iH8x9YLCj6b2BuG7N3oQR",
  "key35": "58HNvpWkyjvkcSeHPLtzPkQQa4yB1sm6eQmiFKjMVdSmeGKfM2UNua5ZrniqXJ7YZq3cWx7kYh7zs7pMouZMnFH",
  "key36": "2umStZ9WsBWmYptLQJ37tpuvDyzxhH4KEUcbV9xcaxFZU61q3dWVZaMMwvG3avPCAvmi2CbsMvBcbpYrRqi6WGuV",
  "key37": "2PR2k3u6pJJLQLCTaFSJv3o1srow6U46vZy87Kn3GccFtADqZ6Q1ibjULYi3tF45CuK156qzpzvs7EFhaMBnEo7i",
  "key38": "2dhtJ5taencxg7pDC17UiWnZVNzLWuWvofkJafmBuJQnCRuV6NbSGfapmvtVkuoiV82PM3wdTGxikDuch5eXY4T7",
  "key39": "54jvXsAohtup8eSiMq8tQXs8KVWzHu22cyivCXBFU9PDzQJ6sjyxxdAZj1D6tzGwYjp5qRDrxtSnPXGuCdQPAHzE",
  "key40": "427iUdaUYfmj6CS9XaW9KHchuNF37wVN6u73EvmQYqYMv6Hjet6xbGwaMThAZBHE2km8MhZJjVpAkzYhbXweBuTP",
  "key41": "xLWNbQHxuitPHdy2J3KmrSeFw36Nsbojt7z9zb5S7CPivAkHaMNu9GhYvrKfNwLqz8XeQPPdDkPBJiWRtAjJn4h",
  "key42": "K3Tt9kH95FuLnVVQia9iq146ZBtgEzEA3QGkQcVxd3MtVKC7TZF6xJqnGYbVHoKq8mQPHsQmukd3EAaqsV96Vqk",
  "key43": "5iAaq2ysYe3qBNhM2fPa347qA9SSkt87swfHujcgBQmiVGVvRCnsCusXfmmgfvabkGuMAtbutsbR8v3gEQbNTqtR",
  "key44": "4wonCdpuEs2YYBvkzsRLxyWQAp7XinpjzmLsubgG79w6JSKDGHvUgUzgit4YLAfonetzqBuWsMyvFmGkW3DUgS5e",
  "key45": "3m19RFWVuDHj7K7CfHurmtF9XQUytJ1Wd3gKG2f6n4WEAdYPXkHJu7Sbp8RDJqA1RFuCTf6aQZYa1pm9TEmnLttX"
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
