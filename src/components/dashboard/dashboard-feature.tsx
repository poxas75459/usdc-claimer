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
    "5bnyFZ4zajjZirdpmCrsazZNuYQFiywTFmRVcVG9H7pikzbg6QWYhwKmyq6CSugVV4aHXyLXVBzjd5CBZuAZZxyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "srQCg8GED48zGo8c2aPeGxuXm55DvghqMbwYpzSJ9aevs6zx6qj4MgrXL6R7RYTxc9gPzEiwDZy1grntGmb7GEQ",
  "key1": "2hKQ1nf58WQLP8ZaLv5kAEprKy4bUtnXYro52fVfo8qDAmYHrmwCSnoEAgRKkMRtLZL5bZ5dPF1mzpNa9vhjwdPy",
  "key2": "ivgV4FSXT2xkXaC9FwqcF51RQVkSuHt5cQoZW4XV6ZCJgDs6VpSYpFm1pyWvdTJcouiGykZ2i52GiXxCqYuREWH",
  "key3": "4oS6JJdJJhPvwp8tsMRtmX8WxPaBbhFCmo3z7XAnZg6yanCnke1EBExBxwMfjcMUnDXvARucGyutKguKopXRgtvX",
  "key4": "52DSdVD5HzefR95n5YgEMeABqZ5RMC3eze4akzNXgdVhLx4YKg5EH6PXbkWFoAkaB7cuGBzC6Um47mqd5kEVkZid",
  "key5": "weCGLqQ98tFo6XY44KPLUY3w7NdPxdr3F2Gi8wakKpe4k5KYXJHRttwwJ6jHxJKtVFoSPm3wd3mN5FLodjV611F",
  "key6": "Zvs85SY5GF9QsbNoK1SagAsrX1Varw9LtKZGDxGCfDFD8JBNQEMpC9kU2Q8tgMrbDkA7nYkRn2WpqpWQ9bcv4y2",
  "key7": "3d5NXL562Rhqx9XjDHaAF4FPYSgUEhwedLbAEZMYwShp9k893o9gHHsnWipfNKpqtyn8VzFipmo63tRfzR64BSHT",
  "key8": "DU3kSH4vpjLkrisGjTsuf6LmVknQu76ZenCAD8hxQXTLbgeXdcShQrkvQxabwTtnpvvX1mf8hFTasjvVXpvnfgd",
  "key9": "3wnEb1kUuYADR8ZjLuJF4UdLKG52b4ah9moBzsX6VyFZMgWupWTKBiZAbaWuzvjK5K7iZqmwdNMLgmq8A4q6F36Q",
  "key10": "oLzmXC5LaA9U87HK3ZBPrnpQmdrjG2JmsG6YL4ERREgbwu5f3dxqy6Y4xtL4KKLkMfmdateThyK6bsquWMAm1wR",
  "key11": "5SBTZVwJLwgcKLSHGJc8LLQcyKfrE2UAaPKTzUJ7462Cygd1HNY3p7cnypDhBirfJkvNTKnxTdjE11q6z5PbeiEE",
  "key12": "4pmDY4YE5eRTTKtaQr9vWH4QVxKqLoE13JKWpC3A3mgahCs7LFCBB9Qh1TJxY6DfM4sEdd2fgRqd6RkBF4ezzP7y",
  "key13": "V6653RKbNqNdNy9ChqYoAQuS56oV3tSrcWEQbS6LT72YMSeWdGwErZe7K7pxYVqjHJ4npYWZC7wa4y37JrHKD3s",
  "key14": "3rs4VThfwSsLUpzoQW8dijbtBcauj84KyDDEt4NkPavgFZZdMciH4paGbBppXYtGxRmgcPi8BoVYwgN32BbewMKG",
  "key15": "YbzdnqffV2fG9MKVPWXwqN9KnSEoWCw3z71eHuyWTV9AyMmWQQP7ut2pWQT8UBc55fE4T7ZiT9RxrYELHv3uFXC",
  "key16": "3rHsKEo3vQBZ57ew7rKihvp5jLt9PvV26WirL9FEtB4gFonWH76UFWB8ZN5Hu8cwAFxxmB6HYnNkDT3RpY5d9BUA",
  "key17": "oKigpy7jawbDXNDiZ5dRZyvA6LrHBNGFE5r5PhEahV8mRFRbJkCGGVaYaddULWYxWU9Xcnb2KAXyvbz3nUpqQwE",
  "key18": "2n2iJrLc6vKaHkTyE4NFjvzBeLiL5o9u1eJTtFsfJWcmWGPS8YbZ9UrugEnd61j6Yx5xduBu5CymFsurSbr5gdnu",
  "key19": "3VAjQ3yhoQCqBXjq1VqeZXgzKMzATPD99sRYRa7kkBPprFrLA1zonppDX7My8zbPGNhsHqg7csZNtn2BoYXdSG7c",
  "key20": "29owXJ8sMsz9SQmXAbjd1vazq5q269hpuat36YcfJx19NAScqPvqdrcna6Lhh1QM4VSqP8KENBqEQq4FAHXuiZDR",
  "key21": "41uEmqQ5pzQKru7Ku77prTF7qxNDKBQomaWG5UpcFR91FgnMNhzeu7LrNsTPMrwxCFGQWveZejgacEJxa6NkcLys",
  "key22": "5Wo7m1fcgDdXkBspRRdMtYa7hiJZ51zbamFZHJzRkGzmhikMZAYeyTCM65wLGJyN5Bj4ARWX5MhYPWCM5hC5Tm8s",
  "key23": "3m7PwgzpbcvsGFvkYazpzJyY8sKzFCdgvr3LpfNQHLsc3YHGN83Uaj71rj5A7xNDqMe3EcFFynyt6LVCbLhh1vDC",
  "key24": "4QWraNFuhizsPr8JfxyzSgF42rcjmxYQXX9ghKuT6yUJiYKdTmdKuqUXnW75i5McEsnGMCNGUS2ju5tQ3iEivYRY",
  "key25": "54D1hsPzyYLvHe5y7grECWzcEYugz7TRrvVsvGjs5u24LCh4GU7FdUMLfggHtM7gmjTpgEeebywP6ynLawjd3RF5",
  "key26": "5gpXJmovLrVunbmPaoe7QGdKDXkTXk7vjdNDzGNN7tuvG6bQ4GVX2KUEqR9RFfLXgpTfixBsLwnwBUsRorBj9pDx",
  "key27": "5DXAXK1j3RFmxi3iFqC4KHAGezcMAj1R9xFMKt11J6QfPs6uNbuAwfTGnoT17ziENsHomW3eHtagxiuBK9wSK97C",
  "key28": "AwGFWq95MNeExyyV8tCFmua1yrVgmZtn3HjaaZXEv11xZcZgvm38jiQuEpjFfEtCts63aHYr3zuSkwbSRh63vXT",
  "key29": "4mJfkzWBWRoVy3XqdKpdqfsdBs4RZyPHtrX7cW14E7P8HN96KNj1gXPXUWXhYzTJejAJzCNUadgSHNy9W3Ef9oai",
  "key30": "2JWEdqLahxUoYe5EWQYcAGgpGBejyCgVyYn1wEAr3ZN9xRVSqCSGRmaDPBgFzkZeRRM75Lr1CmVVF5GL7yYHEebo",
  "key31": "3K2ZdW4zbaChV4ZJme8g9BU16BnGpaE8TWyaRvFaiEYmPRyHTABJqdiDiqUkU7f7LijZwQTYwkPadgycnCYtY14w",
  "key32": "4yvy2aTPCmm4usDSfAniQYrpyrh3hU1DVSPcv6iCoQdsWV5NPHfhTKxoUzfzasbPr8VZMV6z1WE3zmvNheg57dwo",
  "key33": "5cAK4mzNPRwr8512FSBkjijEXicuziRJz5PwokCTz5H1hPner4JcFCnPrz3PGi8mLKm9iqPdefeMmuk7yLDcfj6z",
  "key34": "2wpFz9CfqJNzhnXB7wCbYKHj3QmKWD5zoWs8AXRE8mwkFfBaLrWhgF8GykXE5FUYZp7a7jiYs1XWvBLXHZZ5qJuh",
  "key35": "3UbbDYsoXChYuVWq1j8zVc4PF1meDPA4bjcdiLTFv8NN3UgAN7k7ajr3oUHPzxJYnBCCvYT8pyG6VNeksp2CKmA2",
  "key36": "5dzs4t9JbAioKHMsy5qioD5B3vJyycwA6vjXsFYz5wEYNXJqCwbL2heFUpWuSKfghZmLXe8wnof5ewGLxWA6XdY5",
  "key37": "z1qFRgQohte5nzJ7VGFHXrrq6ritPVE8i3D6riLER4sseusmg3sfiqhGSBSxqedpSStLWf5mUNhckcgXtyTL8Ra",
  "key38": "F4LoerprJpQcZ3nrA4SkVuHTvdRCFfU2AwvRp3GNH1kNwqEZDJjjNvypB3Ar36X2xDSSiV6X6NQKciNCuzWhnVT",
  "key39": "3emfKLjpcpQsXdLUxkf1wTNW6wy5HtPcuCK3ykTXprJ83Tis3FP4ChX1ruY1zNJFpwyRAiWNeHPZzjzvnHDTkb7",
  "key40": "42wqtn4pU88ykEG3eKZop28N9gW5p1GDV3g98EezsemmfAE2R8im3eex97mKVpsiD6JDwrFueC5x9okm7i2Hs9nC",
  "key41": "5WZD1oNbAjcn4zrJVauvn5bZKHMsyS7GtRyFXFSzdqP7xnJGTMY56fLC57ZptuDWJD35X3sUxfgVuVte7wV6R6Hn",
  "key42": "47zRguMttsQgW2idQMP5YAbNk8tKjNba4VzD3UaZMz3adn1Jh8U1VEpPQjw7592SfyFVz2mQQZZfmtVU1WEPJdGL",
  "key43": "5VHytCqwWdbQo8EoT2ViRDSH89ffkoK6bsxcSk6pWxdcDsKaN91s8iNpvK2Xju9cpumyZNkn7Q5jjzQpuaikq43L",
  "key44": "29Zgxac2ebq78L7c9GuppLSTfmWQDDkvrmaGAmUcdetQdcUJeFA2uUATLZyNxxDXkb1wLL8hVRrvtycvvfSDFrTD",
  "key45": "49Ja8D7bQQJbeuEhL9XQp7xc2R3k4rp4wdF4gS4vX9T9AxcPKUjamWCRsf3Tw1ZizTMiwkYeGxB1tVjAXeij3GHU",
  "key46": "5JPSG9hw9nyNoaMFYhvP9fMVa7n5zyV7ne1nTM2AqVvKngp163khTjK8BCx8Y2jTupWWQLyqhTjisAncxc1JYDPa",
  "key47": "5GF5vNHKyP4S2vbDy4gZpqWUQpyikfdaFvgNo6GX8pariLoNPBLCEXh8fCaeisKZwCRaaDSYsyQJaQyLqsF37KYX"
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
