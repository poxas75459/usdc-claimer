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
    "46E9CKzp9Nzv4yPBzgc3qEYYgGrirKrkohp2kC26jppS5eR4nUwpsmh6bzKPGoaaedmLiywvRGqBUJBHB6BsQCNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44sTmpjK8je8LVENNEAQCkYjwA4ks6wdu6GJ4A4WNNWdihi5BkgmQYdAkzd6ncXDW2f9NazcRDMU1DW3x9uBvL35",
  "key1": "3vQVh5JkJbDXBRAiBmZRL9Kd4RHj7uDkH3hR6KyxJMvWBmpMaDRiDp3vA8M3heZayvt1JdPhfpAAh5R7U6WwfvRJ",
  "key2": "5AqLM7pD7iQCuyoQe1tFx2J7kfPjWBQC9DKRL2T2seBRT65uBL8B7UGmmuCK3t156zTZmmtGW95em2Bm15KQx9Z3",
  "key3": "3s6L2RectqLnubXk8YtBUFPFCsnb8jhoaiEvz4o7HkAMvjNW7SAVPpcz7FRrCco4ukJg7CqN1QVBvibZTktAMpix",
  "key4": "5U79AK5dL4SfPakqMDcjnM9Ra9jn7b2vAvmSgns8bEQDmJ9ByoWtXaSrGeH7CFWNyAsYRJBkyy2uDYGpcgVWuGH1",
  "key5": "36g7XtQ53jJ74KuR82yCxuXS2p1cGBNwszyueHyQNfnkTbRFZ4t73ZyyhS4obCJZBDWodmHYVZvsoBstagG9GzEv",
  "key6": "2Aw2ja7YD1UqubukfYGnCt9ioEMUENZqidqbrNm6hDqPaME5MjbANWffGW85kCr7sAowGoz5C7Ww8VHfaSnQt8hs",
  "key7": "5K6GpoWbSQzFnSZuJW5RM5z8Qq5V9tCMwLU6HSzjyeZBVYisqoHoNfZcyLqpaXNy81ExJGFpsE8Rvobaqnmdj4E7",
  "key8": "4Bxe5oE7hYAmuow8y52xr3CRgwmMzcyCwseP1C5Nehrecb4T3cKAnzFo7MHVnHdiXDCuezRNsFkUTomtcMW8eQff",
  "key9": "3ThsA8UuJZ2cxK4vzZfvRzdVkHHkjz28SVcgGtjNvZxkLQ28hyBjgwcieoSCAMdx7HWR66Ksopwmy8smgRw6bwSb",
  "key10": "4nENA5Zc7s6j5SDjt5MeS7E4UPca6SrhgYJMb3Q885c8pnWHYeuQ9gDXvHYpKYhTciAZ1fdn5gXNo3P92zpz7TZW",
  "key11": "547STtfsaxYrktvYseGC8M2Hakc17G9dZp7F3D31xKd2UYuHxg3Qxb2dhKpVDUkq7xaGP1LCvU8wZRGckRyQX82d",
  "key12": "5N5rexoUe34sim2SyqB1w8U1Atmepzy5vCvqcUATjqFBi3Y6ArM2QbkG14zNBPhguPshuGrwXS48AD8do9vyzRzd",
  "key13": "2jFszHQ2xyNQeMJTc1NaEuoKYCsckKcZKHpTcon4s3xbHMt44cJb2cEazxKYiVr4QZJ5bPkSTaVEafmV3pc3Czug",
  "key14": "3EgyKoGgBmBkMFLyeQq8u6Mwwd7UME29ZhBnH3x9UxMKSgkLVzDP9GzMfwtpX2pPSPfUWSSCV9RGf31dQLkifTXK",
  "key15": "5ZemdRY9KG54WYJh3TAScyZbiYsXbkYGndUnrtKbuSqFC6DWn6ag9B1NpdaBo5RQRXo1Fk8fy8MDbvPEDRmzZsKE",
  "key16": "k3KvGU1p5GSbAsXXQ3fCvLeUd377NQGV1MRAWARp5v9wMA5oqUDcoJbKoGYqo6St25zQwXohqj8DLsZJWjqgkzh",
  "key17": "iVndmQvwKoH8SZqZn2rktc97UVJuy7863fVLbtxbs7tEh8fduQFXkBwpCCrXE7TBvmTVSzeWhN3zq5N2cmXPsdP",
  "key18": "4B4e8SpcY7NkyTsfVDFH3AuymVZaskTRbJ4JH3E5JrEoPEsd9Eeujfk8xLR1GCUpDfjNL1BuPUYPu1Eb6Nzmw7zn",
  "key19": "36jcnSRq9u9iTCwFhUoSWreWCbCNkTCcxHLTwRRSXjzoTcpY38EcF5iJmE4VjVo5yHdhcZ7wzC5bEU7gqL8sKbKV",
  "key20": "3FDaDM3MkXe44fhofbnwqnGiuPWagZujnWXC4PvyHQn4EygXtWNqF2UUB6yRBrsnxsJ2kQSuDcTgxSxax3RKVP1g",
  "key21": "64mvvwLjvhkRa8QzzS11aKb1QgXoZT1R7E6PzVFWs8Mhx2CjrDkqUAfwv1EkbLypH1PW4SKk8xBG14ty9HDFo85L",
  "key22": "5fvP5X9Vde9KF4MeW9GSvGMDa93SteT9GJJyKLRJFKtREuqL2cqsjQC99tMPc7qnAxdkEQS7L9DLjfj3Hs8HG1hD",
  "key23": "ExXGKeBibmB6Frir5iQjYSdMs55VxMjfDeQNaBWYeLEnJmWBkk6EUVmccyzb2a5yUeMVS93CiF6hf9cc6YvVWWe",
  "key24": "crCnLAqFkomq9JRnwrYBvF7Vhqg1xBdhCjDLpJa87pogPz3LBVDUDtcASDrrs89NrbvbEAw329kXcnWhiF4b4Qo",
  "key25": "4uaVAgkjSP5ie9XfGw8hWXdHAD5CN3egLLFBWyimVxY62MD7ysXjh5tnrEvt7PyjYCEfkmAwb3e9n26sYPSEYw65",
  "key26": "V4Pwhs9rTn2DmfwRAGMnXckkRUWTTxPJ3ggAJY4C5TjAB7P1AJfvoReTMXvu5sjkZvsNUiZV9fkruwbKrjqmLfX",
  "key27": "CePjP7AP4CCR2AAU33fP119yEBEGHGZaFchxCFYkau5jgAtA239cCf5BjUriB4zLpM5EjhFCCuGRVMUfEmyFayq",
  "key28": "22L7vwJA8QDRWsq69J15u84rp9eb74tG2qYu3CqkKjSGnsZyTcbVfX2GEv1bZ1V2kQbZYLZNdYpKEaFpgPKNDNDk",
  "key29": "4Kw32QdYamgvTEhHCBY7AsMF5RC41UZZSHDSSfVP5DbtzouzpiTqtfvty1UzobnfBfwuyjtHazLMNQ3egmv2eJWy",
  "key30": "3AZiqUAEjkX5XJdnXR186oLvSPG1eH4GHDgJrcuvE6eZd6d3YKTiMwaKggtHrvrzhdCDxePinjv3xacSk7EP57vt",
  "key31": "5EbBGGbVqqy4L8YMfA5gcbGEfwwaTj36LXZSGG3a8pRSJ8Z28kP8fYeJKBqcYeH4Ad4xPUfniX4NFairkaHKFiHB",
  "key32": "u4ypvoRPcjYqGrn4tURefDWrpk87NCWgaz52wzGUwTTAyZzU8QtAmwRBqQutbwkrFfVWH7r8NKBhwWsPh8L3RyQ",
  "key33": "3zwGaki2QLJ1484aB4wt98rD6CHAChr7RKAe4ia2BU2YhmxqxJG5XRTNP4PUS9yqtMMJnb4Rw5pVYR19RGjTvx1i",
  "key34": "3oqgR9eU4MqKBYWZ9yp1CQRLJJbXqN86bjpn8NEcw8JQpnopMDw4kG5s2MsVQxGAWG6hukHmcVT3hE3Y1czQudFd",
  "key35": "v2XM63fN3FAVdUfAf4dsjiwYK9rF7y5a2hx8i9dETV4sKnJepGyBKF6DB7yCZxMXgC1e5GLS5RPHsUSHtvWBRsQ",
  "key36": "4C4VrZp2sAmszzZRMmfN2uRvYSfnMg7kdBRyKuwgVvencEY1ZqzU1aVqpSDthG9sN5SNc8PJTLdtzREMYg1nXpKU",
  "key37": "3TUEAs3DqrrwVj6tbwmcQRXPCq6kSdHFV5tvKzJQBttZTyBMXVobbDAgEZqnbgNaf7G3a2EadomcQ8FTDYkmmZaF",
  "key38": "35HeSNwWcfP6jf5eC1rS5iB33pDVP24JgatGYp99dPcfkX4XPirMhCHuLaXHSy3tuDiHwbvqieMG8Vw3inL4HdSu",
  "key39": "2ULbWsN8xhTDqkZE5abVdzdrLkLL33ymDxzx6ZvXkR6f3omKvebKoUYikGgE2rQiRPmZviTbJNw1HjA4wKX4gUXV",
  "key40": "63vqcPhxxYkcLE1AAJVgnWJczwXcGvigHgSPaZb1DZH9muyNNMdqX9irDnuPiuRftUh5nKsA5KuxgT5Z2JMRYqGY",
  "key41": "3umKDymGd1UHBTpJkdAxnbHyLpz3jjwf6Wvusd9a4yD8ELTGn67wQpXRVPuMD3vJ6TndTYupp6K1nqXdPzWZSmob",
  "key42": "2keYsaXv9Cx1v2QHbPrZ2jq2zQTxXvqdaFCKdkgcY7woy4VxNa5mLVoC8MhfKMFDBtA2GKVVmQZ2mnoRDV6kxdXT",
  "key43": "2wStJRrxWESTa87J54EpdvtAAP7ssH33bhSzsSAPWgZ3zDniYNAC1xk3jkKpUQ3CBVQacpjvLARxYn5ofLgroXcg",
  "key44": "5uGGBDWLGYCppPEbVnmzv16ELdTBgjgnowRhm8Qm5dNeU2Ha8Mimrc1Ef4pJuJSmL1DMYDPDZcSQZvTjDDVQqpp4",
  "key45": "25QHnEaLHq1qmRBhVzDQM6REn7i6R1AY2rx7QWjwX2mcQKECrH3PCsx8MLKuqXXodJs1RDy6hFkbiymoZYdLCRxj",
  "key46": "4UhzR3EnGRwNFBvV1B7etxJnwLqLuM5XewEwJti1mZnERQMZhryTomb8oaCEqBaUrukkGm11yihhv4cGcxB5VpiU"
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
