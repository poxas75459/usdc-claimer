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
    "5dnTT36ZKyp84MXZvds6g7Yn8gZuj4uqEygSDXqAkBGdK3SD8jiKM1GPMNpbdjGPMK3TeQ5YWNoPw17JSq16WwLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B8TNHr67wZKncPcxYoTA33xj9pzGTRaGvgt2SBFMJRmsZsX21Jvka95X2QeQRj7HU7kRvGKaF5cGbERXDERzkt5",
  "key1": "5s4r4pj5oggJbLxJGaFHhJSQnMq4XjqCdaJ7J277755Wtc9y2iETTQff3RcBEDPkmYLVQYMPUfAnLgf7USW74Yf3",
  "key2": "21aA7b2VBkBS5BXqiSCuj4wUTz7mdFFeuQJmu4tx18tc29D5VP9kL7HZ8Qc8kGjmzCthF1ya84VEwNtYo7ubaiGB",
  "key3": "4rqHDMrvF4skkgTbFrtwKoWmn8FfaA2FdnmuwuhGXrCxJwyGThjteioPjGMRntdq4tHVgsv8KRVJZqQ2JCfpcmQj",
  "key4": "5Z8sBKSRgAzBj6PHPYFQMemzwJZghdX1Vn868Dx83Euj7yK27qGgLTqZB1LiqdEkfDvpNXFuivdAEgrUxzsbaDtB",
  "key5": "42eZBMrQZecCig1bkNyv3uUSw6r4NKFSpcoGdo89guS86QuQjoLXhRqDX6JQByAPhxh9CFThgzb3VQVM6T1HHuPr",
  "key6": "2cfMQKEhBNpP7sk7HiJEdoVdnBwNn4tG4c6wCWGNAgQdAyQQbihC6hE4xPzWHJMEFTCLE4gq14TxHHmfZo9NNM9t",
  "key7": "21xzp83Dq45AUNwMyBqep4q4H94b5A2qhnDYJyMXrN4BFKSHJDSbj2bXRUU7mV9WqFkCt4rQAyVRtTcYskKMmUc5",
  "key8": "5gAxjNBf2yVTGTQjNZ5hd1rEBQi9RcbXFAtJVofAEqw5VuzmiKmqNxs8DnkC5rFmte6T5ByNTHX5emJk5doWYt9D",
  "key9": "2HWoEEToQyVR89UHWM8W5zzLaZhJ9HPCfPM5LPwHWm39vbssAVAS6VYndW6xVc6Hw3y426hT1fm4YaQ65g5XSx84",
  "key10": "x6oDXg7nxQhNRVXedJLue8NvYqyWEXP6PpXf6MrfTQCtjuN1y2E9PW2oNYopw5NAVshjL6Xhczy2gNkweRnZE6D",
  "key11": "4iCF5W9cnZwHYzXu47tCE1vNbzhR8cqHLX5X2jkWVmsYxuwkL1UepCvqGKRGimU91QjKjeaF44n1QvB2QqV37AnF",
  "key12": "5pDGV4w1EnZYKknKciqsAZf2Y91tHPiZNFu76BuufZJHC8yuGx3GkWaPR6rmfVpU7m6XLD8TE89a1zvUcSYUy5u6",
  "key13": "64XGcR88zonLEx3VjtVy9gV53XV3rBTYPbbSu5jDWe3qufiHWn2z73UHmpnZkQogYQRXfcXTnDq15pXRqm97LBcw",
  "key14": "dgHT6Y8HZEHKKj859PpJBFC4nxSy31Q8SLaU8vHK56W1XyvRw2PF4MDgCS2XBiADVnVfATNi4Q686Z53kvUKdnj",
  "key15": "sPwaBaAoEPmvANjcMR4uut5MexEcoj6rAc35ak63hLG6Rk3i1WemmzxrjqsVFTgwj4SWXA7GNjZ85o5G2qJjAbh",
  "key16": "5HW14Z6G68cmwL436zRPM2wPevip8NjN2YmgjgAAVESah8GBKb5fgLXjYyddp8JtTB8YWj1zeat1WP2rjkqfnAe6",
  "key17": "2PuXrBvZM3vbVckDUSuUq2fi3AxmAWTLNKTtg6eo5NHoWHw9xHZWWoUJAYjg5RwEZvyfh4TbnriD9EWiNrgqVkoB",
  "key18": "46kARmC3UwSQgrQyW8fPEo67FVbJbYGMYE9zm6CZuFj4mLxK2u8p4MFNhxNcd5dbwn9dxn3HG3cssFAS9c6kkxR4",
  "key19": "21d6ZmhLuR3rHqXS4sro7bWqRZCytjD9d2ojWb3jFV7GPxD6NnHSqrfSBqo4tNaucNyWAErFSqupAvZPw92d44EG",
  "key20": "32XgwWxx6yqw5pfPatndaV9Jm1ybykumw1emCCcNUVH2yu9kNgrf8pawPk49ZUC72ytrsUcGi8PCv721h2EvaK1N",
  "key21": "41ut3eQXh7rnaZdzgeyGFMeEHMPSoHhx4tYSdrBxtrXTVxAtfGry4xiLcoQmgDRkD1xUVNPUtWr2n3svi6mrgs9c",
  "key22": "3vCJEBsWWnaGnknPy2zmWCjLSNsYpnvqPeRgPNQYsGZsymwNcqWPhwDH3UKoDh5AoqhaiqA9HoxwRAMAFUunhw3X",
  "key23": "66LFPyNe3qXBY9furi23M4QtTmLZi1J2fXyLpNDKuNn84WL5m71gPWuiMoo4At5Hew88p2Mdmbpo7BWWjNJVDfGt",
  "key24": "2Jw8k4LhWRpzvEpaQkMZHp2QCWfr4CMk3GWeQj468cg4zT8z1ZeycAGTAmXCbDZUcQEMN7TWi2ZxvhotzUJPihbN",
  "key25": "5iKBN3ysa1jg3mdDyzdhAy3h9dhPekYwC346xMNxkWReuCNT9P7xxXoihQmgGRBm1uDMrKtBhLj4XAqkbQyvRQqp",
  "key26": "5YAE9nF4UoPbu7p8m3Qsyob83ZpKD1WgYoeMVBzqiwD1MVZtXvGn7nJ3hyUgPCqud2HxUsxKww9JUEZnirQ9s7Ne",
  "key27": "41sjrCtMi4V99v7yTeW2REnyhn9adBTtpFrppN6BHy2BF3GGqxJPPS8PSWnFFvxgCPZ4VBeJQDTBoM2vCJsU4NAT",
  "key28": "2LKL2CDt1TiYFiYUNVu6AmGQQhkioUbcuS5NYUkZ2r2Q87Q2QmcBaNNeJkj53XBMAQt78AbFTWcgDKx1qUdcaMyF",
  "key29": "4syrMWqcnT6avhBi2GEgS3DRJ3sirpoCyyqCBmzKenLf15hjpdRiC8Sv27qwgq5HCzCCvgNRaqpbKgC23Hq7vgKP",
  "key30": "3eRTiTkNWzHXsAnFxHZC5YpS6zLGaEWsawc7ox8w9iBQVYXf71ZJ72FxQSCcgq4xkVbhjRq4yPwKBTghk3LXTzqs",
  "key31": "56qwv6VJwuR6AwuDHygoexuQjN6KqXWfQ4mydqfuzpAmyojhFk68mMVC1RG8pdtgWLJgCYL9anzaowb9svmU8qQ7",
  "key32": "63h25P59fk82ugo943BScB7yL2Gv99LVNvtWJq273TYub1J4LnWuBNZbqDrNfdRWQ77YcB7RiAbAYzypsSC5we6H",
  "key33": "BXjuGRGCVCqdVVAMjpc2UWQBLaFGHE3e1xYDN96N7MVhxJRArFbvJzUUWKvD6N3eULsg9Kz7ARz7WTxfULnXCeG",
  "key34": "4qdQBDM2q9CLFE7hWH8yt7nQJ9y7YQzSmVsgXsLkZnLfvaphqphK8NzQMBw1gGLYWx8PhannZq4YYYaHrq93Vr86",
  "key35": "4uf7nrmUMALCbVrf96xHBNwY6sD75aNZ2kWTnaEfkkg56DwaB4FJZDEhvFKWhF5tR5v6d6t6umGTmdvzVQEUefHg",
  "key36": "4g4UiUEeNyCsNqVdce9nnH1195N2V6WgzLRVhp1KrbYK4oaVUwAGf16vbYF3Zf4FKaBCVFMm8HySB18ch8wxCXNr",
  "key37": "5iXaWN266vBuky2cxktMvgJW7tmyFtLKzcCCqx3Cxxtia1uMmddw1oRdN3aPoWZXqqAwPUJnzF8t4wBQ7LYJzYCi"
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
