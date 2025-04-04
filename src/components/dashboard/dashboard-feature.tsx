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
    "syeotq8xfYQGG5diXmQgJEVUo9PLcCe4fA1tgRBdv9QWvdjaq3v6D9bf8cFtztfgi9MoRTu6DX9eDrnqKUzFHCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5da4gLzi8nkTwDkTNEqo5Hhe2QQBErpd4iwEjmV3UU8rAQ36VNr3N2HhpAJTNk5XVGqMG2YctU17iYFQuViQRbk7",
  "key1": "4B5pgdUibzzRFeBytf5wiU4eweaNYwtijDDGrNwKJwq6nufEfnqWdS8JmLtLzVfVV91jfV8ycbW4f2TyCYBHTVbq",
  "key2": "4WwpQL1LFcYP9ef6q6Ym42etnhsfBN51B4rSo1dwsFW6wo5MVUP3XbtpYohWGfkNvMpLHFzVnPbsC3PUoJJUWud3",
  "key3": "232QAWD9vkRzg7E83so2syaZgL7E5ioSB2wDhykbRuoPv5kDL87XajtRDrgDdLBypjMGSDuxCLrbBQjgT5jAaMPq",
  "key4": "2oNycMLB5oe3SdA6xCQMAyq67xYY9XUBLYyX4ixZpCUi9SWNRkrjU2iRy83zTDpzLBaqebNMoFta9DSKwQtTikoC",
  "key5": "w6iiS9DS1JU4RFfewX9wUtKnsZAKu726XxEjEGqJuFS1Gtx4WgMazLYz1GP5ezMEBePY4i4SFDAQFtj7XjsfrSe",
  "key6": "rod627P6ABdY4HUnnLM7F4vpZJ9sKEtNDX7aeu8wDAQaeBm5GkpPGirT48hhTN6jLFgBPrq14khr3H7e4tXRy6g",
  "key7": "2DkHhMYY53i5SvbyDZ1rRLiq4CD45PfF695m16CDnydJt45uTsiPcqg4qKuEK6FQ9jYrBRQ2EoDmsjcuJCpYdJD5",
  "key8": "42J6zqXkRmbJNJaHEcQWoRKYBuNKnK4tv371SbsMeswwbMVSTWhsZnQS8e6q5VxbxDkRx5XM2zibXLYffu62f74E",
  "key9": "3JryhmVyBVZwcErCpJ2Bd9jCrn2FGL8kLEc9HLHtdEGcsTa3H4yyWBWvziC8iC3RTwfABrvFdUi5hxkRGFA7mH1p",
  "key10": "2zWnkvpCXdfsgHkSXJiXL8ytF1F4VzhUWFoC8PKHgq7KZUCrkm7NnsuLuBNCxm2povNb22kdtEzkJ8MmzUMgsMRK",
  "key11": "32n7GKy3Y8q5J1xFFa82b4qaZcH4nHZVxxbudwPjWW6zARygHzGYBzd1445Mh5n2Mk8WSBGxy6TTXeLxFsZTNRnU",
  "key12": "59WoW4b6pQnZtykm9jWdayWeyWLsnEko1dKortR5cRcTcd5rqED1cLMQhrMB42jWVpWDKtqXQn3JFEdTT15e8Sov",
  "key13": "z4NgQurgiYuAjUR1Ppu1z6f3c4m45JnpQP5dbgamjQz8yzjmQvqwFdsyUTPgRiFJRswZktNCo6sGgRYWyUZPaW4",
  "key14": "51BF6m7oFU5TBAA87EnZVAVevnpzxNvcgZYo7WHWR2AW1KRyAKkoX4CJJ5SAQcEj1smgFm1B1tg7Xwv6veYwRE9G",
  "key15": "5KirC49wWcHTRKi2wpvmVrLV2GN7tVFsXMhvYbsN6jPaUmcri6dgVc9TNHDxLjsn2kMDzugAiPWRV6Vjzkw8iZFW",
  "key16": "5cFzmHUYvoVig5YqHmwFzhMJa9k95CueyrPacu5NjJjPnEQZKUBcc6ZMoUaKMjnCS8ukZ4ibX3i7epp6bCC2ww6Y",
  "key17": "5AQ2NgxfX3GwFp2FNosHK1CeSdPCx19jJHCm5sU6vB1Eiduovp6rwWZWQP21wxY44auNHrZkXBGKVkVXMPYj2N6R",
  "key18": "3qosDS2S5pfAcKcpycpK22aQaWYpA5TPVATdD2BPeKVG4d8opH1wv1xwtBBazAD3y6cerfr719NHAxK8AbRmSP43",
  "key19": "4JoQLD5M9CnKWECSnyw9ynMP147X2fDkMUhtFMYNMWW7PRLMPoxn8a64LowG9C1TFStrSrM1hMhJi7vvhQc2ra28",
  "key20": "3Y2nWxaArPjbmxbXapfwmkEQCQyTL8CShVKgH1XCc2hs1YXvhx1YKhC5E2Uz63bdbZ9oudXz1wtDooBVZxU1Q6F8",
  "key21": "o5EkB4A2EdwiMrMpKsovkG3PmnqhCJSF3G5hD1nuFfqYWN3Td3FGLBBMLz6vBw7bBytijWCrLJQEmHfdEMvW9oQ",
  "key22": "3X1w5wzNEpvFJZQLtgiGEPXxd2W8WCnpvLj9w3DTncetFJY3aapxncXKvQfw6XQ5G756kkuRSwSggNW4wjMQeFJp",
  "key23": "qRd624TQ5449RmRJV1bNmSngkvFbFQ68aNdKE5Jv5pRSFFRWHxWaYn9f3TwtoqCQc2a9QXa8NXDj4a52AWr4GqZ",
  "key24": "2twAMKvc9ReLrgA2BpXZkfcM7V7YM6s5nw9dorncRFVyJovv59MuNhXDLzDnUmvA1g7RrVLcQXCt4uG8k5rZEusK",
  "key25": "3iYWdce3VaJxZ7nfVc9kYBouQKtnNvmToaD3t1NeMMyiFWiM3ZRZUt1DAUZSEXmGS6ZzYZS2jD5otfVs2NhU8KaL",
  "key26": "ZkyqAgPmm4oCmyYqMKcJEDFg96HR268Q1pq91ApnHE1LMZDHHNWB5NhmJLW7RmuGnrdLVyZLSj3aqanUePGFTEv",
  "key27": "2oM7cMyHCc8E7AdXJn9RC4mdLgPanFG8ozjDagcZFm2Wo1zpazzHHCs4ZqThJhHVAQ2VN9L35Du6vPsdL4MkE2N8",
  "key28": "2i8KUmf9MfTi53BM8p94xN8216u3W8zWtqssZDcdyhCh4HuQqW43Qut1avQuLoG4LkqQZU1aXfhQX4z4Si1TV9WQ",
  "key29": "51qaKAD6GMqAVi26hdoV94mqKEpH9f1oddqNvpVHRf2TfnxAMKABDVH9N8PzQLi7V4eHwS61iNHX7xr7sUrFj95M",
  "key30": "3JdWHAATrTj7aNPAxNdF53MhFxPPd8A4Bn8cNR9anK9ZFqspicxx9nmrTawZzrpHiBy3CEWETT3ZUfdjmJioowZ5",
  "key31": "5Y9n6RWpCVVDqyyCQdXEFvUQutiq2ERkhT9kbvzb96rhFw5LqU8XcTroSapAkFKj6RjTKtn5Fpbd8qSu3PspMKhK",
  "key32": "1sp4SXRmtyk8NnMcVpUK7wnQF8KGpbhgEkiPMmSoaxYdRqv652opcPiE31rRMMr4B5MNgVGNchrt9Syt3MmMmmF",
  "key33": "5YJFgtTr9kCxTzxbRyLsupKvCVbe8ZRsLnBCph6Cc7qaAXpLY8t4iXDUovbZwP6QfqN71884MWiRPdEvDqKfqurP",
  "key34": "5u68Ys5zhQch4E1kkq1BF3SPTm4gG4afYtMsA23xT45mk5JjBJogBF51fafLueJRyamgVzEjdkFfKKEyreHZd3eM",
  "key35": "4ee3rTofRQiZqNLGSPmqVvbWE3u4G2bNK4NQg9GkR11A3247kejquVreT2ULeiZ4gEFp5jhrqNZnnD98gkndZAG5",
  "key36": "2CmgeyaQcnZuPQi3FrgNvYz6NEkDATwD9mgtchQKK3KHwkuHrpd7AX93wBabGkBJGNy73fKyxznqb6iceRCCTL35"
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
