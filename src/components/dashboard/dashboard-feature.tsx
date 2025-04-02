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
    "4FRBbTPjp8ftwK4pqQWRYwogacjDcKLi83vWqo4CwanNwwbgDnZ8byx2ADSb1Hq85T9wqdm3sJjPWYvnkAaNGncy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yq9FK6w43jh2vwemMzYtVkHdad6fydRJPSBbueC48vk2uY1qRdVWCzcZg1b63pnJYvg6PWQD9WrUm67gEKvTKP3",
  "key1": "5DZRhkSx2mHSoGUEy2a8cdaUAxb1uTG44T31ooK7GB4FZBJHh7HH5FZbpTzEcpA711iVbJrvJKBSYEoEAYLikLqG",
  "key2": "2PyYyYPY7cvJbFaWMY2wGhM33p4i3y6scbxngxAX4PrgtFqkFvvzsB5Hfk4K8JBqJCi2YXhfgfkaYQezm9Yo4T1M",
  "key3": "2qFoDaMRv1Gy3y1rsjwSj5qYUDR2xGAr8Qe316rKomUcpuPt1n1yjMM183xgzz8Lxq8GUKJUGDxPmQYVigaAv19h",
  "key4": "HGFHEXj3mWf8CkzaR9ypxDt6f98aowhNQMF4bSTTjRetUxNzXbxgnW9DDcVK1sjjqHBAYHjZXgc4eFh4VbKKcq9",
  "key5": "3JJjSZ8ZqGhdWEd5Tbt4qcvS5T3h9EpDgMmaUkBuLs5hbNf2LL3XD7MobCwHufN8AkY2psy5JLgWx22qveVy8FMV",
  "key6": "4fsf89vQjwuiXF2UUbcDB5xaxSe4fdCBZiq2i9ttL153jf12gzwdNjQqPF3YUv3kydZta8izCGpyAH7BYVMxrqTj",
  "key7": "2qLYiShRsJ1NxXw4UE7bJJe47iuaUDibFNdv4QLFYpiXsAY6yDLcJtmkJx5Pk1iGYVUs9miXKfvauV53Hhe9vCh4",
  "key8": "5Jbc4mw6FSo26yNkuJeyMhFGFqDsd3Qa23M8wgE6W1qnaFeruazFbknQJ1DeHxsdAABfiAfNidZ8dsmyFUxQWzH5",
  "key9": "3M4TYma6dfw5QLJLKx6jN36zTPhcD2Fcv3G7hPToGwtWkPHn5TRWxAop2g6epso2DnZWicdhbttsjhfdsySKdj5i",
  "key10": "5yshe7f2Szye9sjWip3331NKqUTt1ugN224RFZjBv7jJLRd1vUrQueSMomGw5CwTSv3PJ1Rn4pmEVohg17MaQ5Dq",
  "key11": "43xqSot1BoHkZ6nWrkDueFCdjyYb2XkWUG88QiqhxhcYFJTPE4gFtSK5iihshFsYawZeZJehcreRgb6kBKBGN4VA",
  "key12": "2ufYtCUdxcKMKtsPsDKH3bjM4rxL7ZJaWHPzF7p8txNM8HPpiiKEejbCoYvZB394effdiNm2wy4hZ1kKie8ng47N",
  "key13": "2nMdGk736oM9KrKsVEfLQUKyPRgG9Go7hSV235Bpb3PMp44GDNjJEBC5F1B5cAqSobub67ivF3e4FZjqJRQcmStR",
  "key14": "2LWfKTdVMzHMx7Etpbe9bF3WSS3Ghdmftx4hwNoKfEuxmL1Eozj6g4qbD3cQeftJVynwgMyqHhwfW9Yw1xC4gKfw",
  "key15": "4VjgVKBaM7iMATZYhYKtregwnJtZncNEP9pW13YCoYPf1S24LPf4CwZQXTGFA45uKNuppCkBSaPjitkTaX2mHYPk",
  "key16": "2CMPCvWwhJrE6qDXLEa3vhuDCgU8kdJwot8T5AxTvY9XKx1rAXqUDo8mR5hc2J8KYtjdLNKKmVNAPTDWaPRj1Beq",
  "key17": "3273yJoREjeooc6ZRTsA2FajtZke6tmgkBFuV18tZSGGypz2eAGCEBT95sePeiXhN5av3eqYiHcesUwmhhm7eVqF",
  "key18": "2NhLhAftEmSFpnsTAMxAbN5T8w1nkEuZnbgByucqBzZdzHoMFSs2yYhxXYv1XvdwbK3qQwKmH2gaodVXod1iLtT8",
  "key19": "4peP5HQ8cvUzB8Ypot4B2wjpeYcGubkbCq5V84tjUXMiMTSb8HUHY7mXxhAj7xdR1gchnHse19vW9J8RRmu3XoXB",
  "key20": "4o5yUK2tn7KCT2bwnUJpN4f65BW5bheiHr4GyG8vGrTU3orhSCrYVqkTyjMgeWxwrw2GgULVZanJCxsyP9fKbNNV",
  "key21": "2F8P3VDDFnmvm2wkNQ9H5N5HKt4WhcW89V54LgFyLQJrtxu9kvLkU6XK65VwkwruBHheuvFBvbD3h29XqD7KiCrH",
  "key22": "3QPXyeZ1UBdwgG5DkhMMbPiFKUD5RtGBWnRzD5PHkYku78GeyEqrbENX2EvH1DGcD1qwJYrYeiPcHnas46eAP37z",
  "key23": "6TjUC1x5P3hMsu92TdC2ywhS9hmMiGMeegWG2vwtXGkhh9XJKSFSveqnQRByGM46tgHRjGxuXTtA7hCTGoLFHmp",
  "key24": "2WBN6yGhJmMGa5U2MXSn1sCqPCetXmQ1MQNw2PYGAPZSCgV6EAqvuqA7qjQ9dpUgf9fQws4UhKsLKaHruS1Y9r7T",
  "key25": "4MNQgrzT8NHxBqUGySwGWd6UKV7UzKNQ6zjmurGCy2PpbFtXWs2Q2JJfQtPbj4xyQ3FsYNoPvc3PkaaQg54vijgX",
  "key26": "4EmquPjQi9xFaHBMkoG26RyDSgU8NQaz4un21fXX7n1LV23yeUWNWmJivutyLhruXQS5MM8dypay1eYLNQSM8aNV",
  "key27": "44SZ5agm2CKytob3rt8PyfQ43V18nu5M6JZa2UwuVRTK33Btsb6pJxE3i2fTWc6oPPtUYN56aTytQmkhpGL36rAD",
  "key28": "5i8VavfYobPMxok529LfEJUdZeyLdi4jYd3xj9sW4FaQxkADJnx1istJb32rcWX28BaJxdd9jc4k9JTRW5rwYX2h",
  "key29": "mJNwHF1mhecUE71vCB9pk28kzNZn2h9sc4jKKMjJarpyYGhhhk4M4VheHuxN2LyT5ofr4XCtJhX4XpfXJGusCHK",
  "key30": "62m6UAFdQC9Ba9zZQPEoPUFNNXmZVHa7b5Bn5vxTeEqhbHwRTnNf4SZnwPnU3iTrFoAxiCE4e5JdPkmcLSj7p1bR",
  "key31": "3gLxgNAJrqDdxfyhBDVHBqAsWqB2dY2hUmKCFCANTL6mYGNbPhtvK8AouQaYr7AKV4LFDq2itDJ1U4AvDVJ6VwiD",
  "key32": "jaSRpUYk71mPNBAT9q4wmw33e8zmXGaRZ5qsM5Rvbhwq3juJ75mrp3rQVVo91KsMxTSo5CCPX4wgbDRox79Qvdr",
  "key33": "2VdevTj7aqKbuu8yapPZKX5TDSkWjV1XjxK7ru56riUw8mXaVWiteNSMiLe8BxofdKB6epo8c7VfT7UtUfz9byr5",
  "key34": "477wxc2stPQ3XS2zCxWHVkmZuW4H2Ui9aR2VARakdTtc9xC7ycFsRTpBbMqzsz6PtUKiLSEY1BcPNftE8W9rwowP",
  "key35": "fuXfdDUVUJf6Zqw9wj6jggXRE2NiZ1wMqL92HPx2qXruRFvAxfX6zK2B8ua3jw3xdKxGE55dz89QaRKUT5vHBjB",
  "key36": "4bgoaedFTpM7PerPfJCDkUUK5CZfFEYFnr2q8a5RXgRvG3Aaj4g7eBZi4CPFTdCrgJYLwDBseWtYZ2YLcZA1oP1X",
  "key37": "4TpfCLA6HrNSY8L7GT9PsbRR6AuDNbY8nSsRvxNABbhCs2n9Zz3w494V9785Mv53MmENaXEZJ34QDKAT8ePHdnqq",
  "key38": "2XSALqEDTcHPBvCEXCZ692BqoDxNbp6FWjMRjzPvB2umxx7sY7mw25WizaBVuKosHcFqk4d1PbXmgjfKJ1QwQDRR",
  "key39": "2B776pA2Q8AnxuHeWkphkiAQ7i7djTNd6VsNAZiaDQ7jZKq6rdg8MSjXAnscuZ2aaoWg3H5TFkVxqYRcT6Zov4KJ",
  "key40": "2CScF2FE5bsd6ctu4NtMn4ZSx3Wv3itxSAvtTwQAaGAPu9uUsCQnyjDq3XQH5WyU2aXdeveSebM4NUseqyx4yzAV",
  "key41": "4sawnj7bp1J9VMjGv37cgN8iphaM7XLrvgCPHnE6Doximy3w5QfBthwgrU8FFgZwZCb3bAY1q7PJ1kiYFvoB6N53",
  "key42": "vAFQ5JYNd9HiWaX48eTAbf3fnSPgkLsa8votPsFZX23bkxTncv5QtdpyJCY1YUxNfmHaa7qXe1gJ4uJTXqHnonj"
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
