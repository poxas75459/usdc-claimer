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
    "5yf5UBYoRcfb2FdH8KfxBCAwk5qXcdhMEkWwkqwn2bjtv6K1J8BYUU3f7d5CqckyXqGVzyxdHw68axCXYgkGTdw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SuU7RUwY9Vb6MfqeRFjJyq6WkD7uaE3Wt9aULCPomrn4T55qSCn3GPSF5u3Niwz2cahmFvxgtsF8D9AGHSD1cRY",
  "key1": "5z9qzCz2jAMhAMFCGmrsSuxH4EP6gK8DKAE43BDemgtgjqqHHXT2c7Ce62NAUtQWuqeYyNz9DP7NJ1mMpaVrxdzY",
  "key2": "3BeKRWAmDnxMPk6dxoYPLQe7GPLWLGAK64AvkiLULYXyKmHtChVhTEaRt9R4G3dqewV3wczpx7g8vkK7jh7o1Yvk",
  "key3": "5zfKNXDrFGSE86R32dMXr8VT51iReD6Nfrk8S8Tnbv4hP2HpTijXwxavFunNuPCBbwVpGXC6qWsZouG4G1Z8MXdn",
  "key4": "3Txm81VXVTfoSmLsRj7Fn6tKTExbBLm3RqGJYQctFdYn5drvCpaMWCXLULGmdpoqhWD23VfTHiFFZ9Fb3HJraPtq",
  "key5": "5EQd4aoNkqJy5ZtZcKcymsZadAwPLAPWR1zCtawQn7FvJbebP9Hif5gmJki6p3aQhD9dnbEBKaVuQmRDf7r5WPNN",
  "key6": "3XMBqhxgtaF6po6BSBYS3hyiX5ihcmnKL6NPb9nam6VBdL1gaFotMjUqnLktTN1vkp93iYab5x8nX5YAJz8PewuB",
  "key7": "3wvw6bT1mGCCYQaxf14592vDNwti2nPPa5Q4vE5FSVhMaRWGoTiejihkgvYVMJHdkvy1D2jqykxKYDFiDtRAw3sh",
  "key8": "x67gLJLDeaufkhRtLY7DC6a6N9B6xxCMJGB3M582Td517r8K3XFnkdfgKnCTECVx8M6Xn88MzEG7vm9dShYhXkg",
  "key9": "3Vm6tA7a9aN7Aw6sYY2U7QRay7pGHgZTT8CHGLUQ5yJggb2CPSV3SApyiJo4z6Zuhd6JwMiNhtuipiE6NxShuo2r",
  "key10": "4krXYJ4zwuUqkC3oUTu6faTbxSX8GDa1sytKnpnKkbLfzJiZ6mskLhtsUYaeGZ6K3kKVfCPztb1WWD8EMxELARHB",
  "key11": "kQwTxU12AUTHYtPqmc6eA9rUGydDZ17QREawcRh3UrgaJCNjkww5dBCRAWKG6PKJhWrZt1vrAaTJ87z42b1ydQb",
  "key12": "5Mr2SXdpsZJa6Ub2EMD4w8H91w5eHGZguG8AL8fToDEufuNqfPyzXsLKqdQkyd7aBPSF5z33VWifzUa5pBkggwTd",
  "key13": "3dda9nTpRct5U3acCQpEdhNQxwQsG8VZtv4mdphphnAeEmLMUkw4QWzNpCDBTPkyr3prS3ktF7Yap7J32v4r8DKG",
  "key14": "61DaznH4osqi2KRKJmtvPH7FDbubQrbt9oWs4qNPPFhTVESYQgSvZQNa7Vto4JHa2wgY7Gp4n9ikNUSyPKS8j9a9",
  "key15": "49wYh4J3XnfkUgxokjcHkMc2skJ6oiCm73hKXRwEouTzZVGtdGzoKojZW6tsKWBDYs95mQfjPUrPkZMUwYzdc6g8",
  "key16": "4Kzva2pHTUExXmTFpYBvJtZJm8xAAjQPVYchGGjJx1s9kecgxrDrqrWugtegWawqEUkNhgdzR5Eper6fo5hT4Cbi",
  "key17": "AntTWnvfPv92jMpcsPT1o7VrYHgmKPTi5FimjheR9sV2GG9ivs3cbXFe6P9kC9NLbv2GAdcBGmNLzz6E9c957Xh",
  "key18": "J31bfn5wLEmw2m2ViU9FU21rsfnr5GrJQXvfWL3Gdd4gyYF4oGfGxuci8jHGW3CQAvfXdbxxj6WLL6eCEUEiNR7",
  "key19": "3cLHamHkmNcSCjBdqTV5XR9vrGj8dfKQadrx7uJvnwjmqoAsgr9mHsn5EHmL1xKDL6sySKupKpp1cUxzgae6SFHf",
  "key20": "2GJSwMM9PdXYn8AVdBngv5n6M9XiHyKrAmSgejGspioj61bkZkADKhiPEn4RH7HGdJhkgqe7VckhKXKdrS1NBNKa",
  "key21": "3hJ6Y1oNBAD76fS9uTEULqtcEJPBUTQDX4aWbkiRHrDfFGnGzYgzFFq6J7u7RLFmGE9oeN13jy6vy8WxAby6LGpr",
  "key22": "5yJgSd48eMmWZ9UQUPWi9wSzN9qthVQF7W5YdpNCQSpoMAC6WW9X7dy6gHcdXfcHK4544kYTpP2TgqQzkhpvXkLT",
  "key23": "5cqBXm2poshqQyzDZ3yJuCSKxjFnxonM7f8QFx4mPwahmph1RG1x3vdBSfetDNabkZKdJJJdHrzenK1E7Gaiit1W",
  "key24": "LMS8CMhWQ5B1NtaH1by2fKE5Sh7dBcA1bwqtB7Y6YndZvq9HdzqrVLFhKzwLaykTyAySfrR6XBN3TkgmnFTBZcX",
  "key25": "32D22uKrRnZsimFzruyFsDn23XBLRDeZrzW3qX8QHV2SFh434pRiYGTJcXSqzj8e8fmbVPAXvhPGb8pWutrbLaGc",
  "key26": "3kp27LuyqWhDqx7nrFdXf7Cpy752tWQXoSbM48Totdpz5JqdAKmnzKu3ynVcskVT2UajhGfQmtqECNn7HyJDewc1",
  "key27": "4FFLrmDmYmoTmnc4D7Vptk275GwMeaFEinxevsCcjyExKZD5UrtwLtsC3zHepD4DYGmuZeM9z3Drd8tiuKHpm3ex",
  "key28": "5t5dTBrqrv2hdQJbwFcnAGsXiDwzmG25R4oZEVNVkq5AaaSgmr2sAy4B1jKPXLqX8xoDaQrXWUjV2xzvRdgPZXQq",
  "key29": "2y68Nieo3b9cNiCNzqtH4EqCZxPokdKZ9ky14JUNkpMPKYVkjihchcyX5MUAyyvRRVDJtPXKZKGh8DMZnZd96RG4",
  "key30": "43kRkK5weUP9LuFvkXL7skUB5qGJGYqzA4WTgk4LUyqsmPF4JQMcVLtrjVErNgMcr2hmdjvthuJX9hrwqYajA1Cq",
  "key31": "3GkAjLWmATdeSG2FZe8x2QBcYyrdrb4WNjPVr64j7eYSAqzG5yBkN8L5qjspZ7M1rT4fe5nFiJKrizQf1FsrVgV2",
  "key32": "4hbPDUAzsbg3vJtkJ27TTGcsuU9TZEU88EMHN5MYEbkjy4hbs438mDU8HU1q5kRgfbZyv9z9iG9pCmfRv6eB9C9C",
  "key33": "4azRpr9ekoa4V9GCQ5Me2SDtQ5ssZ8KT3Z78YSLd2ZHdRCUreLkRB3paqC13XrFBT1AL6X14mfjV3TXBqsRFamMU",
  "key34": "4rkp5EbTCJ3p8qGNNdfUwCD2R2iXBVvKwrms4uNr6UXrmPJZmaL6wxzjRn8LanPqrsRAx3Kxjimco5gaTXu9Fb66",
  "key35": "2KrNXi4fwUi6adp5o6kwKDBigoLqygz7CHXL6NuM6o4r2TDVFEKCEoPBWD7t78bnMQCCzmeMKtpAuRvugGoosAXa",
  "key36": "65PJwZcexpZnUmz3JDHhQkom5UYSs53uP49hjK5DPriCuX6YhwYHbUcdHzMdfgjvemyeuXVEDtXFN1hUkWHhygfz",
  "key37": "2p1DrGAqE3vGi8g21pXgaQvgZQShgy3wQoan83QvLPyQQmN8AttRNkVyucPYXAf3MBB4A3eP57m4hDFZLdDUp8QT",
  "key38": "59ik3aEARavYFDRZWWkvhTPqabgPZfTcExzy9BpUiYfeD98YatA5Rue3mK2Wcsi1jdZfdt7h9M5WwEYuM5wJ87i1",
  "key39": "62guHH9cvcX3sq6R6bwyexpVyhPPg7s7TYR6NTDshhUHZuMUGmjUmztYp71JEj9HqDv1rCtiXSux4QAwtHPB9dev",
  "key40": "3aGWPpEX8FaqbghPKQ6cyiXeSJJsSzbAoywsnRepf1BFV2CwxTQP1AMmqnCkKMGGsSRYRtdpJ7Wak2WeQZDhC7DC",
  "key41": "5c7C9GCwaeuwjwMfGi2G8WDWhLHk8zTG8LaASUEnxgfxDFaQNYZ9ru2VnjujaY1dkQTioWbidgkJpuEqx15fQ1fv",
  "key42": "3LYNRJqxipDfReSDbdwWQDjUNVFDHmmmkj2LsgTs7uvddwJ9knR4xfsKZ8zRKbz8rf9GRcpzvQFdTcF7Dhz2Djhh",
  "key43": "2Xom7pxDPNWy1d7fYLb3GBvy5jNqg2jCVPRNF7XFQrru6BrYscVWQ7Cqn5qoa6fxpro8RfwXH8CPGbz9cecdkCkN",
  "key44": "5jqJj7nfdS7yJGp5UPRthyyRajQurema5oUJNTTQTLkWTVfZY9WQLF3yEnLwEHb8CoCJjDpS9NiEUh8FGEvZkrgC",
  "key45": "5hnPRLL6vqTVJfq5erwrH8Mv13hnzJn2FUeicucab9ufYFATNzS2RdzJthqibZmY9ZFNtDJeuESz6ZK69fyFtoKo",
  "key46": "5MtCAKeW5z1jGMx1W4qqVfKDuXJwBHY34pXxeoMAh51LxVqev1mBJuhQM7H62m8GRxLE6cHVwLS8DQ3PipNVLQQ8",
  "key47": "2Dms3oRU2o4ehcccqbQwe3kKkd3S5MxHmUdBFFc9rByu5XoDQ2bD92hWgt74SZtJRHDJxddK2wAY2sfM4NzTSwBi"
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
