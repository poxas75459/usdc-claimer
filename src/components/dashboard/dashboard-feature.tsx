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
    "51cehWLr425gZ2LWnV5tkhDrDz8AYkBQMaCi2K1jHJ7zyxKJ7M3dB2JCC8mur2VmCR4zVrJmHeTywnMnsZTwc3BX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGQXDkCqXoAhuJxHmQUqju6gkPekJm1Xk58DrSqmUhW5py6jG6vj6gSb4yABG92AwYCVhwvqnZ3SB1FRp1UgVfL",
  "key1": "5VyUvujbbmq2H7n3Fp4V87d3LxCvVsjvt2ysaWdZr6XbbLBR8mXYeWQRz4y14VgeyH1Hb595PEqLg7yqchn3xkHp",
  "key2": "26tAfkxX1QDWhZhBgsJnnruJGAguTitRKxXgp61w7ypxs1XYjwGBxrdb56ZVHk8QeHDhqAmpf35zbHpxhhkeaeKQ",
  "key3": "42VtcCk6uwZxW7wozAkzC43kbn2zTjTrMsWoRpRDijubK1zeUjCF11FZM2Co6oQqCF5Kk8Ve4tve2wRqss9YdZGq",
  "key4": "4LiGhsEkgSNbXT5QgPLpitSmz6aci9JUCzukfxqiiQr2mQ4JJHFCbHRvoUGztjosd69AG5ybEiMR2pfSt4fpttqq",
  "key5": "ezPZRxpaAdti7bjbK3GomFKctTSpSJ9qqLPLRPiKDnhFBPDQN1b4vJnxQX3XkjAAEWdd8ntuy5R9ChtsAzUxvw4",
  "key6": "3D7VmTkAVujNyAswWQinqQ9tH6vFZR64NQCM6k5iSpf6rQ6v1AfD6oaa2CLe9BLz4r2znVik8tZyqFs6mAfuXgeW",
  "key7": "65BZXqS5FWUdYA9GprLC2cKG66FRgWiamEQkckZbxowFF2YKRx32UDnFLhcKDvBvfFTr47mWn4ptFA8J8r7wJTsd",
  "key8": "5uRdyu2SC1k4Kns5NzvWBokMcDhnvxuBzfvuG1bhMsbWrKXhAkWgJKjVSSjDkY3d5jkQvCfTiid2XnEAchwthu6e",
  "key9": "5BadWzWkHwENWw4yjWwH6HuMYFHgEhioMqBxywYkLYSxKtG6RAPdu29PyNeeWG9zr1B1zm9PatETdNjqceWvKRu1",
  "key10": "NUegVSmbueyQkCP3vApA58YAa3QdzQHvXxZVYEAnkzQtkM8AsWTkPFJFhMjpHzgd5uGSxMFw9CRt6mRhtGGsNUV",
  "key11": "2CEtGGF6M3eEaaQXfmTrbrKcANogFhDAYeG6SWy9fzxDTh33gqtKqcVqMcqJa5PkhGAUdeiF7yFKULbXxCexzjKv",
  "key12": "YbuJ4gnDotjdmFqsVuRXQUMUgcdwz6nXBcEw3i5tcbuMGbeBL9BKLqVg3zQQK6rgXAVhGgAk21zHihg1qKHr7hw",
  "key13": "pF9g11QxnVA8PjWadNFzZzbQPcwJzY9tW1y8G1NuMKeCYVpactZpBE18StPRxom3Y1eipWnJAaArgNs516zkRVp",
  "key14": "NuFv25azB8PdoHLTY5NcnZ2PqNUd5YujTaNjvufEphiGN2FSCeMTxpqmp2uj3auV17r7C9rmdUwF82Lw4jskjdx",
  "key15": "5FNesuxTnjARfYGKWLWrHFApHChcXy2vYrQAnYLE4B3T5uMfYfArGvDFSzWGDycbr4iiSgy7KoupysTi31m43xvh",
  "key16": "5rL9EBcmGYimGyL5R1RitLRJYYFft1kej5xsBAUAWU8G6Ptba4misAiBAZCtSLhGFeyNmnSyzhtDzDbTUhvfnqz8",
  "key17": "qNjJuwUwjaiNU3GjL3CMpykPwgcoEtzMZ5nqkWU7xwLgmV4HEgVcLF2USCgkkx9bYbeYa9QTE4cc5AAnYqit1Gh",
  "key18": "38phSyMhyFESi6fTvxd4z4K89FeRbNvZnhV2U4mMbG3F5ZDCNaoPKpnNpsZK3GQ8xnWQray25kjQ6tvm73Z7wjHx",
  "key19": "jM3vU9vKbBWYzxrwihB6FZDVosVKcbbCdoHpPTd1uPy4TGB6FDM6rZvSPap88jZMn7C4sKsjzCrLHzm2EME3K1N",
  "key20": "2Ufs3DcHdBwEJ2pbjVTLCNViEn9Lud3BZYtoXgNgjJbU7zv6dwyZDaK96dpbmK7TjScq4JK7Z5Rq6ivZKo8mUN2Q",
  "key21": "2jgYyszJu6kLHUDukv1xNGHswaho5ycGB4Rtg3VvQbWqkAtD5kHwJvhmunjL77kYmTSLZeCNqht6X2Bo7FWKqdGz",
  "key22": "5KEeuXty3Aj1MEz4AeSyTSDC1WNgGGKbN9dnq7CCPsLP8SapAt2mZXDyDbjpMvANDLbzszZ9cdXDA6XEHy2hTDBr",
  "key23": "3eAyTnx1x8dbZc9zwyJrGyh5dX4SvWqUKQuqsLPB44td7jJzWrx7PYUxVBeJjhy575uksuwhgE4Bvxc5XB1QGtw9",
  "key24": "2wRG76tRVFYiU85xUk2JLDZVXgVXrvAKjEutqnEcJNU3XcNbtoKfh86pwjUQ3F8fW8bQ3MqctPXfxykYPjZycE7J",
  "key25": "5F6H9j1YhaKNdeymms7MoocoReeMxRVAsP5Ffnwq9MY1zow6yTFw7n9nBB7Hb4ubJzf5Q14VNneqHajpqzBY9w8y",
  "key26": "5gL975AqMwYTMz2MzeLt88fK3M4hRBKbrMb22ViRJrsKAYwPq8vVtoCdAyQzwTHsxgjBmke2tuE7EuwFBJ3Dp7y",
  "key27": "4owxQR1Sif7Kc2qiXM9CZtW9E2uECndSAx29Bm6AHVbyPXWrGaeDFyqaTVmZsHVVSvp7MjSiNV5jAL8vtcg78ja4",
  "key28": "FruhqX3xMRt5YSZ1PmYDUS4MHz9ChSdNS7YSxNnuGBUuhFJvZCrqN4q3HSYUkX7RwYd3dFaUqU28TwYwREyYovw",
  "key29": "a2TkGazAah8eASsLFWXBYkqR61eEaCT4vEfS8A8N4Ww83HodrjZ4jaspfZqv1mnewEabeTEeL1KSmQEW1kGcTVr",
  "key30": "3apxg8TrKU15N1RZqmNCLFZVNkfQARhL7nZ17Q35LHNV8HQfBPp2UDFAfVdQ93YkS9ajHQufNv1524mi9KKDj8jV",
  "key31": "4yq5WTt4k3DRrhAAXKse6HUfaT7QqwyntoUJJqeoKimeoKEZWJ2cs6fhA7L15nJURepNm2U68KoEfrLTwdsAo9qj",
  "key32": "3pL7KJyh1VgPu1Vpep17mMhdB5x7oun1Y4DTYYpn8n7Yy4rWjgVXGGhn6vYyX4raaj9za2tXdue3JupFHKVivgL3",
  "key33": "3EFm4MUJH2nBnRxv76GkqXdeRMEcbtq9rHLQxkyKeGP5k5Uj61ig3kKr8MiUrrgnGLKSSseSih7pXQmqoEBVfNdY",
  "key34": "5973tJc35VSmF3YykZtYJXkh82vZA7UmW9yYQ2K8jHC2JFRVJTFdn9J6pcevCB9UcDnHF3kgKU7Yjgup1DnJe3B8",
  "key35": "56BMQmKHtpqZ1tQQgeP4vj6rA2VS1NqGMCH5btahj6hTnxoQVU4D8YYcbwYS3938koNQF4srdCCbv5vU98ka4Pyq",
  "key36": "pUhdxiEb4XdxWZcfco94CxdpH1mg15VwRZHuX3RsoadygUREFDdP3JvBpjpCaEgMUAc1VDUqHt23kjdP4frDCc8",
  "key37": "2sdFyYNiat7rNdPVMXAhEKMEpek9zfV2sTMb2UgoFMyERvrTkwF8SrRVPdtafqMdWFzQxQcsXRrJALF1uqajsmnM",
  "key38": "yZ1UBqZXnY8v3TBan3XuWBtFT65p1y6yAu4wPwHGyrXaXNp5RJN2geUVPTQEdufBaG1VVw8mQtJpTb9gaZfKhzv",
  "key39": "3J8srFw65mTRv1JbiUoyoh3YZZYj6VDuqWzg1XWapbKm6ULgzaDQjnrriSxqbhJH3Nma3mvXMCb1MhsNucHZP61X",
  "key40": "2ZQ4h5vCUXZuZsr2SVH3VP5z5oJ48nuUzgMegUPQVHFGQCqQf7qshVGtxatvgmUy4ZWrcABowCTeCxm1edWSC7To",
  "key41": "kCaPYbv9zpYLkwE2G2uWhjSFdWArHChRdFdtLCZJqJSZDcouPrsqtZ3Lk2UpuhvSVg6fwxUUfaTeE7VjLCyXC7R"
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
