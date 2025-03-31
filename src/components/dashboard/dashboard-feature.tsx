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
    "3pU2uCGRmrLjfUveMQ9dH8myvMzLMCHP1aSqLSSQsZBTmNFkqvZbikTP71g7kbykPF5zv4HZd7GuwWkKgukSXvyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dmotKEPL1Ws4pYa2gjqn6fDG2o18J2pQJzhk4udAywm4aYB1cb5ArYQwNE1MzttWsdRSaiaiHNs1ajhbGafNAbL",
  "key1": "2tzCbcKxhgPKyMk8CivEtD2j27sHA2vJ8fHtmMWDNwvVJXFVHj3Y7Fv967kK8Wbf6HaKxACjFVmhTYQKVKGA68wN",
  "key2": "5ZDBnGFbpSmRkJxr1LzCPuswjUkAd1kqtjgg7CJmEEhdY356aiUuWmy4HiZGQBUZQhaJjXvgmFKEuZFsU4kJjfic",
  "key3": "41ZoxKnb9ttDz6bFDhVKfMm5VPFxekHaoYfBLtrL1PGNB7hP3TtY99Etdsx5vGQ17sZJVUCWwVUppNQd5nX9qqkM",
  "key4": "5jJKubXx4HugzmeuozouzSFByDFcDxd3AS5tvoVTS13s6WenHGe89dKR8qAuiLAajpm7jpGMwyFkk7HiMtHZvMdt",
  "key5": "3LhT5Bc3AXeCCnPGJ2jPM7PX3ZwAjVe9RaAZyG5s2kVTZv9wKukyDDhPuKceUFAFBm7aPaHvBQFa5k5pgQ9tC5ag",
  "key6": "wrdSatUymGFiBBtp7VBi2AqnrcovTqe7P8wcmduEbkcAX3UhCJwBtdY64poz8qdLjVRLV4M1cEtsVHG855MPi4X",
  "key7": "33xBqcGtbLfo3T7M9VNMqnQ99tbLssw7A4WQeXkgXxFDbsWVJoVVe1NuKRbnr5EAiaE7PzNA349N7ig7UK2f87sb",
  "key8": "2FreSevfqHzmQGiPtTAUYuZZvbdp3iCU6zdrLtRsR8v9BV5EDkBu2EgwazGQWRb7LdCBRv2o3pCyABGB5LR7tt9M",
  "key9": "5MCaj5fbey1KhfyKZ57YrS16ZobTuHDxQyFJwptM26GRGgTSaYZLX86N6CZRkfykqcY39Kx35PjdBGGDi4mHYLVT",
  "key10": "3BJa5Pva5QKcrKivKrwgxEVdUkBRaJZwHK94zSoX97a31kNUnxZLRyKuhRfryNY8YNqVNc8DeBDVj3xdVw6Frv9U",
  "key11": "4r6XjDNfPjuL35z1cydzCNoS4YdQQbqHFTCYTXbcjyeX6y1NVCJUBxkp11TfyjWiUMK7Grpofkv7MZUi99ZCd5wD",
  "key12": "2UZLzKBb6ZmdBtTPR1nWvX8G7baZ5KncSi6jk5kepTxZSixG8wmpzKdJnkeftgjiPxVjXwTQUHkKWDxVdkwYDfDF",
  "key13": "55i4z1XLLQmhRJ33pD77co85bE5qr7r7Nrz4z39h4nv64RdLqQBcvBCuX5QW2tyn8sYYRgNuPDYb8vZMdAm6B7ms",
  "key14": "Du3nCACfAAm4srrhkoHuAFPahW5tLez3adCc4Am2GnvHue9tUz39PhCoSaXfZDbVA6nkeCXkJDGsb9njVc5FKHe",
  "key15": "5cCDcsEi4YZtULNHQx26AkVvi1DS9PTeRFDxQXSsNThnC1UF3mkTDyhgsTymrw9eiz8huYtTk2Ni1BTB1BMZLf3E",
  "key16": "8RfLYaANyjzvs8yRS5QEBfBWUDbRQxcoau2FH3bsfKyKdYyC2xMYcdTM75WC2VQ3qWVytQf1TNFhupJkpJovBiA",
  "key17": "2ywqzbjXia4p4b6XgaKmhY4BNRhUoycTqQ7Z7bPxt5qAdQgpdpajdcdAokYqB9vnjpkFEXRZeBWMcp97RT2o2eRd",
  "key18": "4kVDeVbEhr2ZWcqu49SFSGcHAsoK2Ma4S8WrQBXyrBLyw4JzLre2Ct54fsnoa8h8iHSEV3s3D3NK1GH1xUxdmeYk",
  "key19": "KncxDQjY6t9sXzm66yEsMyaCwZLxv3zEiGLdsgYDEBnvi2Phicag7EE3uSF8JbjJ7gbnHS8HCPP9QW4PGoFF9sb",
  "key20": "nmWMN8MhAYzH7YnEziZQadu7Np4KhBwgLPup2CQbQux2taQwcd6BEVndmvPkYq7sK3n1ztcEvRmAJWG4q3ocwPb",
  "key21": "3pPMKHBRgtHnjNs1fp2apQKmi93By7kbkmJr2P3rp2ckk68NPn3bc5Beay8NsUNGLHDn7wWsGQZqd9AF6t3EU2DR",
  "key22": "4Aye19gmJ2dJAAp8ryJLFmqMryy1WdcYWZUpstozqHip6vhdPk6m5Q6h4Q2NKZZ2eeneftDwELqQMU5T8tcriYu4",
  "key23": "3tC1hXKwcHoktQPs2qgH7j4wH1y9fbvqZTjTYJRSHz7fJhZSbxDPf3CMMo7RTMCGeGuApZGXgf8v4rCuxCGmffJb",
  "key24": "3tgqJJz6iYutzd2VBYFwdKp4jRfTqmdDnSk31WmhKofteShouNvxsz7z86yv5VKmMjD11udJAhTiYrzomAYigznk",
  "key25": "5K7d3vY78DTmK37FHRAV2dFyhvJbKhTjaNtov9DSrky6Whn8q6qWFcCLCwHYqYSSeDbEeK4oTmxFLQhaV1DGCfHi",
  "key26": "3DZ1EMdUmzovVi6qqCThB1kbTk4ZqRhEZiizxXjWntoNsPcLe7LB6A61v6XYQJei467cDB9Xc6tgTHy1KoTsprg9",
  "key27": "56NNfiuUBjdYwyRKJhRHmdL7Kqgq3QFAo2qAaQaHCypX1p1vFGAJjxfrf9JTQwYfYbDKePqi5XnBVs6w6Fb3zWrq",
  "key28": "2NFYA8g4FdameQZethmwwSHHKBdBFCWacttCnB7R1MsSgLbenbfteoWUWnDDWpzgGwuXMWPMXxdMX1qkyyruTrKj",
  "key29": "4YkHsEeaP4kH7BpoHc5pfKewoZMfitibsr1yduthD11aXiQNAQs1oNR6A4gEoawhNRhRHUbi5oNyEqYz3VxV5CjM",
  "key30": "2o9Kq8EcMyjN3K3ByNCxiFQnxDZNGdMgmRDRT2JRHvwgmA8EGU4UYgjwhzyFBRih6t1SZbQYdpBchKv1GbFhcW7W",
  "key31": "3ngpbMTAhAJJEt1oFJJ828EhY1JWVsUKpC8ybNTkfiE9G29qPQ21e1BjW5pS6x1QwhsQHpzH7E8oGmUsLbE7zrWe",
  "key32": "2vLco6ZqcadKhzPstLNxSp97898TnMNb9k76AvYer6a7JM3TCXrF4me74XH1DGCn5qNzNexMwghJggDnHSmhBDSn",
  "key33": "4rMi66j9N3UWncdoddkHKHwjaF1KjohVfxgHcQhi9RrWp4j4YCmLKGrooFHXhkqaBack1t6sxwZwk2R1VVx4RWeZ",
  "key34": "oERTfPrPePCNQjskwhCCa9EX2XrRwXVQTr5N3Xe2FxSY5YxAsa9NJtMSr8wH9mBTJ3gEyhEMYJgykZfm7HnYWE9",
  "key35": "EWnTbqdM6xfvj3hyvtqcuFPCqGWhU2iduzegQcWfG9sSEmVEpDNQW1Nea2Qfcc9NygmXNLYiG23Y7UNK6RUFceb",
  "key36": "5rtqBmKygUQcsaBwBnYmZHG6BSxabe7thNnn3KZyduAifY6XKAbgFawMVhb3i9MzZqgWQ4BawWmoFWJZh8Sk8WkY",
  "key37": "41vFTwW1MryL4ag61XtyqmLXsdpPZdZ7hUn4RWitBDRMzCH6HcFdpwUvagNE7QzSiNAxp7WJ8gzrc8423jjNnMeQ",
  "key38": "5QjsvyB1HYULUxcHUrs7NNC1Xd3iJTHrUCEydqwM3wThyiYrdYtpK52QoShujXiwKzFyKZVhpS2oMT5ZEPxTaYuE",
  "key39": "CF7Q5KZMAdrshsCnMf8kEfkn3snfVsSPMQJzZKCrgbLG9HH3Y7DgunhVDJ8J8hUEiiown5sJy34FNcb91dtmfGk",
  "key40": "4tr8DF4akCiM9mmYZvh1r6S8XQbVr7ZYvH4dKmG3Ce14VY1HwNLw4R6bVU8spTzQWx8D3q1hGMSPvkH9ZsUWUCUx",
  "key41": "AqWaeRpU5qyg11TyoKt18uq19FC3eCWTLobD9KT29cUKYYXcSNAJWyXWtkKHrNJewCrW6MeevBNmoNC2kQczSKu",
  "key42": "61GmLjNQrGc5ShvbbEC8pTojCCjSLBLX5mT41mWKZLh5adYvr9fgCu32i8TcKSvjAcBCrjiVSjHnV3P2t3bcGgaa",
  "key43": "akBxgtpoPf22CpBZvbg4i4qBkHo25bFd6u2XaaBCsJxyoB2Agf4wHE2VcJajbwJ1myPZfsRreZQ7Vrodbrn6xuC",
  "key44": "32rd8CdABp4LHGFATZG1hfKfA54WKbysiwj9ZX9am8eutATTPkkQqucMQwdTs9rsmwMY76GK6itDuqSjJKahBat7",
  "key45": "ty2aPHbbxkCt5m8U4JVws7K2HjUSfj6VwE4ZW8U9Lux2zsac5YT7eSjBtU876yW6jMX5Lxgpqn5UctPCVibg2Nb",
  "key46": "5jhq3QyMUtJKn9TJ9CLFpJPCsZX4Wj8kEXJyrBLY3p7YmuRxdxkcoSMcNL2VWsh85HmzN4675uJf3P9BQhdWTToC",
  "key47": "4uXSevetjkaZVBa2qiBWehWLTRqoRQhPE2Wv7VA2HBJsfABBSvzi2QSB1EFfgPF2CM2wGqQxW5paEkrrsVGGswVY",
  "key48": "2QCMRNBhF5QiHQMsXrvrQC45X1yFJmV9Ja7eVPyEXHBLFq9Mcam7W1kBswQd4o7LXRBAAh435iwwzuqUEYMs6jwU"
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
