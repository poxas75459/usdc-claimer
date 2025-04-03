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
    "27QqJFK3A6QS6yY1Zhx6wT7bJwXB6yvAUXyYp2FA3iTiZcbT3vPLDPQV7n6SoK7V8eWGnudpSuYd6dNEXnKemBVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFMT5LqpNyEzYPH78WVJjLDzMx293Wog3NFoDQ4ASYLwFdTb7PZk1yUYPpEWkqf3YRZEsiDfscpd15R8ZASP9XV",
  "key1": "dQbyaLQAfuNowE8S22LRG9WRuwrujD2mNkstGmucLqqzmERWMvHa3pggTNRTjncLbSyvhasEvuFLzhscARk6FEy",
  "key2": "2zBz5EVYa3R49AEeBiQXJ4vn9PAU7DmM4U7V1N1mffUCtPbD8PassCn3RSFToNUeFwABTEZoSwiEMstK25jPZYiu",
  "key3": "5ef6cW8NxwsFbGHu5iCcUAwfiMK39YrUszFDov6DnQ7oRCvPqT6YkcaKoD6LB51dFfGSpgAfRrR7YMzQJTuNt5J3",
  "key4": "2GRvLffJPtHJwTKazG5onUQtzQf3KCoQpxcyXu3a1wx4uvPYu7pdk2JaLb7YJrHzUqQqxsudFU7J7AFHvR672XAp",
  "key5": "5Vq1ckzfWEjTQMTU57N2veDPGNJWCeNtWbnZV5bLvZZiv3jjuEwwdtj9QYjJC52qQL8CjKXbJhP2xcyCQ1M3p9GY",
  "key6": "3kEMnCdoLREtsuNQxQ2m1pKFmJKryw6uqw8dp1JCy5yy9Hys2h92fdNdUXaRevifzHNiui5LSdRUaCrEjAMWSNfa",
  "key7": "4ZozXTiUZf3GemwNcRcMn1hpwuFvcT2VjadVAfXjBqCksmJhdJnYJRUbRZGbV2EKJj4sgHKj9j1DMYoaAAsHQBfC",
  "key8": "4YSu79yPu8ktJqVCJjUs1WNvJGxu7J2SEWYucjh14FQaaPke5TrVSSCRVV96ee4ugssX5ZN7SWu9HwgoSbELzUMf",
  "key9": "21sQfN1YEhEbyDbHkoooPLzpwmBL9o8GBesRqN1C19iWHtHxLLebiJiUS4ib7T9rczhc2weScjr8MkJoRy3nd99A",
  "key10": "4Wwu63JMZUq31rRPYX97Eoh48cQnAH7QDwCNDb4e7NbmbDiAwyeL2y7mXctXtVAYrEq9GTKWHwGzWt8Cywuc7n2h",
  "key11": "5ZfxLzecxM9J9z2KLsSQ4Wik14W6tvtnS56oRPB89qCw8M71iDWCFdusdTDsnkEddzYTMfyYiJebZkwjTEkukxUa",
  "key12": "2SJ5iF4udXXXqubEqcnG17fLTpjNukifJp3tdniUHAcoBHSQNyis41P7tAV2aAuWWg56i673p2n2gxQWUotvGWdo",
  "key13": "3THAgjiFuUfJPBKHxrdk8kh9KcWZu6wVtQ1v6ARDkdkSQK5XUN9kzSb6KenUJ7gJNPiAg2p1oDLraBMCRK3nCQsg",
  "key14": "4SofZA1HAzr68PoGeLvjP5nrEAEoSFkCVSkf7tLLSFbU6V2rsVzvGU4vTAs4BJM5swVXyFfK5maPT54EPVPZxHQw",
  "key15": "4BgrwGHXyaA97bsnJzM98hq3EQNS2HnSffsNPg9Nw28KCka172G4N7Cg9uyp54uCG8REMYg4xR1qbAdqzYZD11Af",
  "key16": "5FeQDi7xyTPfsknduaPt4UGKkhCEkuAXKCJiXMftyYcuKYqwk5gqmG6xweexnEwtugq3n3m2LSKiAgpM2cEk1WE3",
  "key17": "22yszmvtsJVsKyk9rexyB5TpuHQkWUtCFx4A2SpAK9v9R8rdHsCVtEmLudJgrirp3JvRYYYkZqEmHuKRK3xRtcqg",
  "key18": "5QwmJS9a3HZHiCSqX6JBj7fyJZAgC7fxru1EZBQfgRXDUCArjUxquMTck1LqqUMM2tU9jfgS5ioLbLvBZMw9DBAL",
  "key19": "5aetPAp76DRbtChCHcasq33uPDmzkTYBq2zfVchHqRJ2iu6R3DZWKzj6btK6XSFsqHwktWEqgThVHhtRfEH5eJSf",
  "key20": "CkFKowh6BVSetxq6333gSwvrXtNnNf7dM1PDYK4LWqebJt9Y3DpQ5GccBg29467SNf7j8ytB9wExi6znJPkktNL",
  "key21": "5bvNAxPwXyq5SeX8pKRnjGjywDtLmLBt5mm6kXVQtuLyXjCLK4d69xca2xHxyysPayX5mjA41qv1zH365Km3nPyA",
  "key22": "4VUjwXbRRaf7WUT4o9rQxuqVUAWB75grWBAhp6CLA3ug9ZRgQD8ipeC3vseKDB43D4X5fs2HAwduS6532ey7uDkK",
  "key23": "3WqqFJ61T79tGjzAEKuHdVScoWgJ6hqWyjU4ukTCYZUTgq5Uhnp1rqRtHxpSfyPFy5RiQVj6ixn9PGBd81no1AEt",
  "key24": "8uM4kGjVD5Engx53Qcxn3Y6bZoo64viRpJZMvRoHHnrdixHDb6xhSJ4BkRoYbpZMu8PLxebNLZ9JkZ71FZSddXs",
  "key25": "dgKrQoLktzyHR1LpNJ1s9gUsgWhwPzPggLuYUB39mFvSxa8VnDNSUfSUx5ku2DTmg1c4GurSQUiLFTuBqNSnpsU",
  "key26": "2zQ6vewonA47nvB7qdvvnehtWEiz8tEREY9e1e5anCmU2FVTnzcDaKPu5xgEQa2J4gDvWv8WNeSKivL5fnXRHyc3",
  "key27": "4ixtooUpistH3nFRTJgWpWzSWUKpP22rRiyefhHWwEFKbDFhTuraULypDV7R3iuwE2Ln5sDKirE4xyn5BLYxmwuz",
  "key28": "47BTWKfCfTkLUC4v5V6wwaEsRmHBnscpk4brziGEYVMskGH6PLNfbscrUgWLc9L2AhhGkRi2nWDHahVu9ThWmjAB",
  "key29": "EYSpp4jeKPAFmvwQRdDRF6ELHFbRHc9aRHft2aBPHmQygwb39XftqBZfe2bCmg2skCcDfDfAXZKMepJpnR4mPra",
  "key30": "2Mty4cfVSj1AmJ8NGzwbzGevA9FfgdM3B7uJteYs3PK8fyySTg2eRrsPTCBbAzR8g32U4i9DKxkGvbw9wnjFp2oq",
  "key31": "4Yr785fU3EhPrzyYhSnb8o8crkxyim2tAg55ncd9GFpboP3whNNYsBwxDmB4HeaCbAuK1xYRvuiP8LHifm35ocBW",
  "key32": "27rSZvVv4hd2FLTCENGBVWjMa5jnHSqJnbPcvh24xEUYpCfv13DrWvxq2fB1XaWoCpWurVmGoTHiR7fVatARYjtk",
  "key33": "4AX9VC7TbJPgTQZHMJdXKb1q3Yt6xi4kMgE8dx6VHmU8PR7yPNVCoLZHEf1Ho5Zqk3kvg8MTpbmFDQdNCo9beAQH",
  "key34": "5yRWwrm9EKzsmg9raQaLAZneDPX1DUbGRbGkbpKTa64HhS7ojgeF2LnpPxs6VLxnmTVWvP5PwA2Es31HppCdjzus",
  "key35": "3VcWLb8YfdKPYasdGCjsvTsAHYoD11tnB5iFWcooYwfKYqnGepj1YjcUfs1fxjP8QFDNDNUKmYB7TPAnM3mL8fJ9",
  "key36": "263Wd3YXqvrULHPx71GHitsPZ8QYc5nD9kj75fTR3gVwecGipK7b5SXHJzBbbMofBnYHcQY2Ua8w5ceb7XNXWVyG",
  "key37": "hYGVCAY7NxpENGQ1iahsdpsbKwBVzzKZBm4JKtMbaWidsTFdACYy2pHaEPtsUGArR8r7Wz3B5gjtLJt3YbFQ1m1",
  "key38": "4zaNhKX7xybfejnm4aa2n3yfN7bETC54ihKiQNEnitbZXVGwcJrTFoMywsHfFDFixuA6DYmXqxc7TaxkX7BxpSVK",
  "key39": "3jpQzhoskYCJwSu8L3Y41yr6djJwfuAKLFSkPueJqYiEUdBuBRVyNDqLg2zzGrP5QadRLPfdiJmHAqiaNsYuXge9",
  "key40": "NT83ArcQ3ARagD1VNfnLG2pztfoNCpRU1KZ19zhZ6Nd7cPdC15aAaWZafVAMCwLpqbMgAMgdj4E1fUxfZtR1KHR",
  "key41": "4owctWEWZSxKXH94tqkSMoAxKLkxAcpG7qRa6J7v7c4WTCGm23ijnCnHLZ8nvc12Fscd5nYhjHfUBHTV1NPNbqoe",
  "key42": "32dwNynUVPhrsu9yoKj9ZKR7ptwHsBNqcJJRXTCjnyFasioTQD9Krjpa4V63yrPEvzb5fK7ZLJ5kYxBBUnx26Udv",
  "key43": "5iMoywh72Pd7VWthDKj3qFVrvNLZkaoxy8cvqhFw8KPiwZTmgQPm88RWUvgD44E3cf3U6G6mrLpFsp6BK3hx3occ",
  "key44": "4FkJZLMC8woVMMHPRiRYa2nAzvaevx4ppidY5fqnb5CCJeH9cMv2jjrBLS5acZwjbpECpJVZEPchjtW7LbNjx8cR",
  "key45": "16nwbD1638FZqpEh7cbYMaJiYazfaCHap2bFVW3wemJRXCcfiu97SN7SYLVSkAKKNi9DEbAcPt6kYft3R61n3Fo",
  "key46": "5QDR9mqsWrPjSdXgQTBVRAXED5NMGrJ58ntnniH8Tm4dp7GDc2GsWMQDgT5sBvLL8uMBBEB7EBL5ZgWZ5WjkoWyX"
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
