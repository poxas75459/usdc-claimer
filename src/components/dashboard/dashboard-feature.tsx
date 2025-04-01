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
    "oQQSKRzw2etYNWkfqNuoAqT2BqdWrXG6uzjvLZNmjveeLvpdK7crPuJ4pvhLKRQnXCacxvTsCx7SxbG1owpgGLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W4Mk47H4xxJypagX9srJ6Bf5GJAiThfmmNpdXhFsQUHUtuFcjUEkUEgcDT4ZGBu4ZBZUMy1tCkLn9pReLwvx4Qx",
  "key1": "49AJpAvYuTvuMbtE3DxBK5Hosefx1CaQpQkJnmgBvBztEn2FPNbhYDjUJ6LiMf7812io1hsRBAswxZLadKgcxLsW",
  "key2": "2pP3ZLX2W99xvxEbnMWooJPoM6Zs7x1UjdZ2T7Y9mWn5b9i2cvyDaRWzu6Pr9bQiXhKQtDBXZoq2swnPuj26KSXG",
  "key3": "3WYorW1VKJjc6GJYXv75aNuARaq4C6D8MevjHvxiM4Hz3oJeTc5JUnaWR8JUdyGzb9Q5Maa93hqCyE4eSHAJTm1V",
  "key4": "5yAhnDFd6gE6GVH2B9Wa7UR5LdgBWZyEV9Q5LWhPTGR23ynuGSoF87wCQCicXkue6UfFQ93w5cbMMvh6azuCf9CH",
  "key5": "4y2VqaDNw1Ap2FhtLN92TZj7sCPniifEkRDVAnbANN9GJc21G2spmaVbNnFfNdMKbfg3xXmNVeFgZ43D738dcCNV",
  "key6": "4q74f9HppGSrJd8wKjck5b54nYnAAMvhefsnoizMc9h2CWRQ8DWxTu3FeqYZ2r4qpt57vNvCnpD3Fw3BuEeBzw1h",
  "key7": "5wbZGxdYRzdkyT2Jc6QDHyScZXwZeiJRBjBbyYFXQF7pga73oYVhQ1cfPBBQY1PcHscXSM5KgNb1zBPfyJL4DmAG",
  "key8": "4f5TfpimxrVSh6Y7rC2k6sZKP4xTmYQZTyLRBdZN9FBzGhxy6Gt2znu9bzXdECHHMvT5AP9fAPMgi9oqyWMUDYF8",
  "key9": "3zGeDPWnQFh4KM6oqUnjYS8dbVvTgE783aaUxTsEGygudhy17s6VaEQemk36Ttik1KXpdapx9MicbBtRAVbUqRxf",
  "key10": "rA32fTf7zDCaK9PgHWpNaMiULYtEiAd9G7Sg4fH4i2L8LGpG4nDjRxFLxQnDE3ocraWTmMjma9iEcYL3TUjiq6q",
  "key11": "3VmiB3SbbUXSsxHtafPa3WYeByXJ62d8LhUFz6qks9CiYWPH32d53ZGm4CWvk2JvNMdhub8DfVUkhj6BMRJw5vW8",
  "key12": "W7nno5vAGDx7ExxPCxWfh75NzfQkCpKpuD8VSkSKGg4aGGjMzASuxGaZcqdAYArj3c44jHgaczkSX7dcnjdjgns",
  "key13": "2AYxp7sGJCQ81Zv6DhUxqaYgRUj59tTDsfVqnQDXMiTbN7ZQjRbNVsj1XNSbe33fXm3H7YU85JSzBsRXGsU1kiyt",
  "key14": "2vhbGD8LuoUush4ZXaJyDdF83NfEfdUsBuyKr36xWawm6PngsYHVUqU25jaMVCUGPeJZDSWFEBRn7PT5AjHVoPtK",
  "key15": "4Mz4gQfj2hn21mLBzK6b3jfrspPSSu1JzSKBksQpuKDmyFUBYMxnunLbBveBxH9bjc83f6PSb1bo5WRNgckfmMUf",
  "key16": "2FhK1B3W3GQ7LVj4cdgdpYPZZtUdRjPQuS8cE67G98tprfFftjzRztPTcefoXjRJz9V2cfp8zGizTdD1wcSUWb1N",
  "key17": "34ypCe4x2mvRQSCsWZFTWMAXcUPaKceZRUeMxHEjURgJomcu6TYuepL3vNeDzdFXxVyg8G5jbhLZAGtT9PbvqZ5a",
  "key18": "3qkssEvtvAxgiLv1gKhd7ZVrkSST2maJ53CeW3223zDvghx9bUFA2aVni9JtvLSMwVerwJoAGjqMRXGfDccepcKE",
  "key19": "4ecgeX4FZe65GU1wWQsw4No3fUAGuEB3NaefXWY86v4GTzjPMVqgyEruHw6QDSqz9o2xp5qC2Qbi6Cns4v6Gs1vW",
  "key20": "3xbQZxvgUBxE7ZnGFUSUMB5is95HqQNPJ5yss6mYztUDEgxtK1Zc6Hthi1GsqKzjpH7HrnNFoPZkxfXQvx2CCZbZ",
  "key21": "2DbrXwNJrQwfrLbycvs8T56NT2PdZbLp9NYzrpLSvT4Kzhe2DZY1tM5dmJdN1ZTkHz17fh9ozxiUY1fkKixTguQj",
  "key22": "2hFiSyxExrhGBHZk4k6HvDJu9DB1HVBVDQRFHxM3ohkuXPVoDxCUz1WNhQ7HJukZX5mhp8zRyFqZVGsyrZs26jZo",
  "key23": "2H5aV1Lg8FLEWQz3QxAUdvcthKp9jZaKv9ayawowEaK9u46Un42c58JQXBrZZdVWdSqr1zNfE5GqXXCTNBFKYqXB",
  "key24": "2iJMCLGCrbNP2QV1wByzrk99evs15Xv9fcCCVt9GVCfzVfosYpgouZajjrxbk7hLukto2VXT4P7iUMXzuqTCfgbK",
  "key25": "462WnW6MBBujF9gT8qWDj6854gE6UVq1jNkrBGoyjWC2YpAy5YfxmEy8GgHmZeHd29gwwN4nM1KXrKFvDPCtGhoS",
  "key26": "5kwAqQpbhDCKbnEQ8cbcrkhAe36reqHgA9nip7AqUYZAN1XXS3DsXxQJekQiBvG4jEKrPJ3qnaUvHdCcHjnM9fnt",
  "key27": "snGvcmHUZyeuBTXc6vecEsXijMYugaM6QMMhPC2JAeQQnqcZGNaLS6FWZkLbiVTEhMiGRFUdyMUZ98RULp1YtNs",
  "key28": "4SaU67frwjbwvTdvs1fVHG679n7Gt3UaphM7n2YqdBFTcFDtf58yczcMqKVB357n2QVRAKpLsnW9hQk7A9EkVxM3",
  "key29": "41454p2SK6xv4XmxbVhEMBDFMqR4UwtMJ1ax951M3Xf35Bo6mqpMEoJjhhpayjMpbmkF2PGrvqF8b12zuVD6gWZk",
  "key30": "4eJwrKZw4QYj9FEC9X222tvXr3V7a5WEVSnpgjWv7D7cudqavfMa159cEckDX6TLyCRJwZ28r11SvNt3aJ5rUBBU",
  "key31": "3LGNyVa5GDgiPBpy3s2Dzqroz7xBiwEspwreXzjdXQsR2wRcDxdEiGuCPycTvBtYiVH5GHj3bi4ULXnjeULbx9gS",
  "key32": "2XSTntCDMmUZxsQ2HESDR1QPJFjh56rys5PXjuvRvjEh1S3hsYS1R8bRvNgoXEjckHz2rYNqTc6cMmMFm3zX2MC9",
  "key33": "4mAxAorBvXfXD7cWDuGbA5jaz8Faf9rNy7b1Y711hk11kEHA4SF1wXFwes8gTSHDDFi96dniLsdyHbRViEmDgRrE",
  "key34": "2qnqMCFNFNDnJS1zDECgqe1aF6mfXyaabHjYf9wYyvWKQ5YZe4MAeNVP3nQxrBsncJV5emr5pCm2R9KkBUvbhcPu",
  "key35": "82mLLssZS1DrK776DKpzPu7AVJPHiqDtmRN1jYFEe2L9BdnFopRuHZqy8gYxBhut6E6DDXFURUuonUdk75R2fsC",
  "key36": "3VQJ2iTbWhffbJtSUj1wGxrqWPSTEG6HHrnpcZf1TSpzFbfyV6pu3y8doGgdibWsSMCGooWDJp3M4jGhYG2euKU4",
  "key37": "5mzC8C2G8YevTtW4Bfh9U5dZJuRkuJDrUWFQBV6PQ3GLoJXpALPS34UVYUqrZ6PYuwyENEYa7ibuKihCfUeaozKf",
  "key38": "zemfZQGGnBj9nMEtGBb46tRNM8UBanhHs1jhDKjSt3o9UZBrXtFMFXi2jCMHidhzGF8unQUWYpAxt7WsWhXRXDB",
  "key39": "2JcxwrkBWQuTZahjQp1JXbo4fufovap4KQUrS4JZ6WzkkvMHX8CAutXj7uBPNmt1qyksgKJDSAJbXRGTAJkm5Db4",
  "key40": "4URAFyFB6ieo9nD85dHnFFCPJbjAywduzeRi7ck7jnZS5QjYRoGZWpMgGYrLwJabZGFNcp1K4pwn3dDTHhYYJ1DA",
  "key41": "3QP7c3sBnTSpF6RT4NTx5scB2XZsHLijRhbeDed11Nv7B7h7u5QogLWreT4c7a8qG7LFraWG2QxAjDEVqHaZ6T94",
  "key42": "uEM1qz5MYYaPtmvAEGyfELJ4npLmmtpoWyFpEmPbCWqeNNHWqXomouzSqzs7YVaiR5WWN7r3mAd5k4xtv264Ntv",
  "key43": "66oEtshuBYtJg3CBF4iFrTXVBHNextXv8oEr2n9RWwdR794o4ERcWm9XKATL6RmKBonzmfGeWQgSaHBeFDHj7bzF",
  "key44": "2kkDTXd1LVXiPn54EdvUwGwkiPLGfjyqzX3wBMVoFixdDfCbzBLp6xZKA3qkh9gjKS97sEKCnEwjXcAch28uAUK",
  "key45": "5jYPf4zmwwj9bVkgc2xnoZmS4rumAy5LEjCDWch6LFnoV1dsNW5D7W3cDSwD44895VAESt3sf743V4YX9WfTbDxp",
  "key46": "4hgBE8avqg8JiunrTgKMgvKdvUKxnkV2ePcCr44GXM9iuVzotjZSfcvbETPxWwiNFzatnokjTeaK93gYaGBbWNoF"
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
