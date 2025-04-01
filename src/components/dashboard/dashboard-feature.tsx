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
    "kw25FqmvTCh1Jo5mJZWcxTtw1cRQkqduiQJu4WjkN7NkEhnLNC9z7vKukWq8o5w64H4QM4LQrKjAju8DHtBduRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32jHHbTEMFKG6dvznUvhKoYhXpvhRYnWyx8dn7VEsQgREzKpCELzFXjcaGnfGPKW5DhDZzqrv2RBHnBpwpPSgx6S",
  "key1": "4yyqFvcWsqV5ci7YFbxr2wGJYKDFhzrEkNBT2Q3x1pqJp5hmRb3v65FwW1hNMtTVxuK2jYpL9YERCdb8JR451Z6z",
  "key2": "4AtAUKJ2NWkRDrpkfejp1uoUnUwyJz7bLKXTbRPxdwjPBCBDdfVpgvtjUSFoJAafMEn1VxDdi1hAuCXrJ9mKVeF4",
  "key3": "3bei8MkaLut29dj1bRADNzQT846dePxUZNPmfeE2ZVzxfcpxc7NC2P7uBY5M5SC6L63ReEc1iFK7ppYf75zPEj2H",
  "key4": "4thCGd8fvN6oWJeTbnr1QWJHUGhASmzyFaYaH1BycHVwYMnE2QQtn65inbaVSRLVsVvtEZusRyi21psu2Ci3GNZ7",
  "key5": "3FKLmZHNWTyjtpBdhasnw3MJ4hZTReArD1J4rf9aaDZJVMiK6c6Jr1kxViY3yQvrU9eGmihAVcyKnZmkbsp3TNDQ",
  "key6": "31a3cdBfry89fX4TM2QeyZbdW1VL9kNPbGM2r8aw4tknjQ1hnLeJN6re4a9LENSupQ1QbfFRmf3CjbFvMFBMfDaY",
  "key7": "2Bm7KU5gBSFi1sYmVYAn5TqFakCU21ZtKN6AyUSCb1tXF2XRsrfqHpmonTaRY77esxUz4DBzxAyuK2rys42wP9Ef",
  "key8": "5fBAh5M8knDs5HPCxTAAyMLnd5B9QpH1Wur7uLxEtkX5qHAy3zooekp9BBS1M9yAfqPvAtBVGdZC7zqfi5ZR4bzz",
  "key9": "4o35PjraUScvpGTm8W1tTEMFoKuMpA2ba2x3deujHSnUJbvfafTQ5F2fNZNNmfFn8ffbkw2ixm8Q9Jp7Xswkmpvv",
  "key10": "xqDQ8MaTkomWx3pmh6FnWXytuuLBFB9VZ4wPnnxVLBddZEhrftWY9StUYsXwCv6XdhqJmtCc3vDY8goGVJ7HqXm",
  "key11": "4GDkwReozNpLSCU4DS1B7ke6Y4RuJpPfCsRYV1tkrHa8uLpX8vwifPo2QunYF9gcWqyaqpmLktHUYwFTGrFbN7v4",
  "key12": "4Tt5RDbNVrQ8zjByteM161i1qpXZkLaYok9Wdk5DUsjTdBjHvdpoHL1dhg6m2eeE5yi6HwALeLVXysYMt5YH7VyV",
  "key13": "4irZPFsHwR8ywesKHMs1WXEjGgoLqecWXPGpv1DbM7NviAhDfJHQkVetQpgSqXT7DH71U8VYaTE15TgSN7TauXDh",
  "key14": "2S3bANqrN9wT2jSiGe4DX1nrKeg7kadcyxStwBu6Tq69YiyfrsKkcBRD8zVuph5iEXyazPuAhChCuZath1sN9FaH",
  "key15": "2kRnF9YJ99kwRmmcnxKnxgahDPgr6WoqJjFmsUHbVKK1ut9naThzuwk3aWQ7dkViGUhmngjEDssGy6UMDwpULbGT",
  "key16": "pXexVDXJ8Zm28KMKcHiQ3mLueyTQpDp659nccSzQ8abbrW4mXugqGcCJXLukZnTMKB7LvEB5Fh9QNJDL2LBWQ4A",
  "key17": "24hNKZDkcBfFXfSmzfaphGpWM5HDBjgQpzcyDTZL7WTgqybuzMSPFvhfrjaA149oavptN3xm5uTCgBmdNHrbnDd9",
  "key18": "32CvyyBFAnjHJ1Ls43qWYgNNgzz1UYMB7Wq4TL2WWDz7cHXsk3bB6k94BSUgdNMAAs3SgippGBoXRt4o4CXeHB5X",
  "key19": "iXowLTVLvAff6E63KrCZoGjuL8Lqzx22xdtV1anRbqC11G5cAV2jk6JmJGx96j7hVYDaHf5M2MZudeUrpRLkiFm",
  "key20": "28u3j2huKd51C9AbrAT6FrEfDJFQKWtofJAURLjpUwMrBcY5qefwvtWmDvopr5ciM2h3PEYEsYpXLVQeLrdocbfz",
  "key21": "4NNJDw4GbDWsKoBqhv1c5BvqeWrcQYK8doHBwRxCw69XDaQyANbaeYS9utVz6r1fJUssncZQvbxBP2h7SbQYc58n",
  "key22": "2yZUZKdCQCEeV2a4iBZSquYBRtucpjHvX3gsB9ZePde1Uyf5wTAus4uZt6mXxBXErMoZtfqrXkBfWT3s74kuGt4m",
  "key23": "MnZoUKADYi8dGDssudHgWkrCGkRAM5ELu7xP3ZamHBeqc8uTVveMUVu1rTG8H9MrsSRFQ6N9TezFPC5xxLjgJz4",
  "key24": "5FdZXGXc4W68Q6jcAGBWFvd4JUsfqA36rSrX6bBUR5Ndz3hETVxUrVkWR3XTsmVijEtTJGZcnHAGBv4oQHoAx63C",
  "key25": "5Bavp1XjB1FnD8EGP5SneaejmdEV6gqFEvsEdW9RgckH9bmSVwEtPx92L8e5tQmAwqFadKWUiNLDw2bsGSgZMQU5",
  "key26": "3YfShnw4q6ZsUbJXyiqDgad1gxLEEqXwLCU8c9Zd5UCCaX88BM7MdRNHps4ccXMjLGkDAThENAoxVGdbe2RZzqCq",
  "key27": "5FZZcoYyqPcQVgtMgPwxgTfrBWKAcLQzyozyzhRq7wK5GiFM9BLH4CoAC1L2sdWzbuEspbmLQdNB7dkWqumbaPn5",
  "key28": "523cbgRqGZgZ8ztrUaMLW7zx2UMPjE1Bs8oayTbXKJWXp9MZ3HE3STfn9A5QrSbPS4J2c7vttyA4aY9eeaR98ERj",
  "key29": "2uNMEN4cHxmXg1k9qhajbXDqy1wWVVt1gnhxttt7Q3boDBWns1g6jxjiPTAoGZuaqjU9Aapy4azNuphhphi2VAP2",
  "key30": "ZbxpsWxizeqN7WmAx9TqQ7XyA1BsYkAwRc1FRG12ASuUJLoHpBPDtjHza7yRy2VB2PpqbMaajxyq9eKwTVJ2ZKC",
  "key31": "67u1eyiUty48SpYsRCRLeb2dsXVHUbEXo8EWoGftjVSRvgPodTLWkVGFYxgSNYE7bbehgtGKppZ3pMJLKLrirkK",
  "key32": "2VPFCaZCC3GKR3pvzk1S24nVr954eYKrN1e4HdJDQMnW7JTo41gqVo7F168FgeTXQqrhhMFJteiVygE3svhCnCiU",
  "key33": "3Pqtcs1zygtf9UMpUPqgbY6aYumV8yS2NTEqfYu4UeC7iMSA22u1pGGmLkE1LRaZhqk2Ts2fd8nVZ7tTTMqhTabb",
  "key34": "kKF784xkMyxH2mrXPe9RqycpuTyzTGgyNsAgPPPefx4sxaWWCdY5S8PaSfdWwDqsHvL3NyyWmVfKTzRUkcQLJxW",
  "key35": "67DQCdAyTn1apPSqjmu3BzmCxtBgbgafB47pMTvExw8P6QyHFVveHzzryM1tpDJ7S3vxrnA5m29JtizVTrduum6g"
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
