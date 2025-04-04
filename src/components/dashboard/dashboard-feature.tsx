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
    "335KFXU6sBT1H6XpFwWqXeNQiVdHR31Wgf649HRB1zWrKQnUd3NXLrbKJRt2sCwvGqyL5g3uNDpKX1XK9hF1PwuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LutFY9ujSquT4XwLQgmwuWn14NiWofjMVgje4pKMW2fqYRGZcK9magTkFKuV7rxvKL2tBGh9e2r4SkdrFqZCARR",
  "key1": "S3KMzVNkacRKNvuxH2xJ3BohiM9StE8i1pTWMEWWUZTLZTEt9LW3qFXFHWfXm4VGNb12Eq75ex9rrw87tmSoS97",
  "key2": "5QE4QsPtLyavhAaYCpwRtkRh2ckenYfWgHW4acgLGTVvMnarZJVxLp4wKPytLLwMinWs1m2YBG1pwa8n8FpAoVVn",
  "key3": "3kyuRXefAFBQ4iA2oYMmm7wuBRb1BctkivaF8qCQofRKQTZRQYfUvqg6m5vH4kVY4rPRotkKm5RZt7sZ6qAhW8P7",
  "key4": "4ae65xM47LRb4uV7pCyKGMgmeu2kxQrCZSQsEssonRg8ryVDuCDFSCqvS3ZycMT3FiGq35Gm3C4nXimMUfg9TDPN",
  "key5": "5hyRFSLakKBEJEjmg5GinijiWV1BxjXssSSrA7u3qLLEbnZkvr7rty34FXeTCa8XsRE3ybML6YHR58hZekyvE1S9",
  "key6": "3tYzSqQ2uG2ahUMZoVT2wMXAttTF9LUP43QX9D3by6ftqb35jPWC7EgSNzMPo5cUPekvwVH8k1bLPwjVrfx1H5K5",
  "key7": "633CTKRURpM8DP8BPUCMfZjNcFGiEfd54tjZwxWhSp5mHL4bUjctHHJcCtUooQKYN7hwcivy23u3JMRhNzntsmCD",
  "key8": "55s27pMkfUck8ifndn1WfTKCKSWub3V7BWtLycy1fN9v8H8JH6wjWd4Kg9YPMz6Ppk1YtqfxrnQxUaHqrAeo1iRL",
  "key9": "4T5bLtfAYnrDK4x5tMkcXHrFWRRFSfdqV9jFsWW7kYn3m9qsLbXbtGrMZ7xLEm9Sfr7saEtuGSCBEBN9QnaGHsoQ",
  "key10": "4Xd5cstfkg3obAPp3TRsbHsyWcF5qt225vCoJ9pbCmWArcVqZNpUYQpMpMVt1T6TBxaRBhzaJHnJoiQFQd4SjXGZ",
  "key11": "3Cdq6NcMuxrSqLXutE72UPpf76sUPz3W9FBaNrUEwfZMwLMrPxFudYu21wZ7bnN5ut5PDKVtTTYU3BvmFNkmo76Y",
  "key12": "2JLr1QZh2CUZcLjGmEQLGju1ad4pjfN1gJ9HybxJAPgc2X5y5y7nZtyqpwttADpm1zXA1LXiZoG6Zn6Tb6uAgF7t",
  "key13": "5A8XhrrhPRVyKRPPovFrv7AaomsrbHpM4oUFhuyiGMienyyGHnrf3MaHNZbiCwJRtNJw5P7gPdQKReBp32mzRjja",
  "key14": "2ankhP6JxP2tJgra1DxHWuseFtgbLTHiZQPt1kpxHeDSbJgsRsusBKM3Pj3EFyjyXsAKZBxWBcL3dM4QzjUjwQZz",
  "key15": "4sq7AKBF1zE16yfiXTRkbeHSFfp9ZcHnemAzuhouE3hPQbMqLsB1ckWLr5dBpzUn2BFFzT3tENQLSe8xyhfXxJWU",
  "key16": "4o4VvD1S5Hm4wKqe2ePQoLWGx2VnTtqMAVARCXqEPwS3P7176hdBGudRhYsBirZwpPGYyRZ1KSdMytZosCS1JKPC",
  "key17": "5tmz7J84XDRQQW1CMWoef5nqatHc3Tv6CxuK1nP17Mq25adSLyTjXfQXmMCW5ZPBMcHatMnHp2Jj2UHZ9f595dtH",
  "key18": "5RhShrtX6KSWoG7htDY569qsyaXVHifagpoXLzvKJhqienCyDV3L69gf3ZkgeKi5JEkC9D8pxaMBAyMGkRtm9GMw",
  "key19": "3gewt5YsrkbwUxHdp1wbAVAw256x9EV52ME9V1MbwuRqZHS1a7juCRD2Qeq1vAeDViFSxGxmnYDtjScDJWHtHGcg",
  "key20": "5AHpqmvQGzLBUTrsvyxtqJZDq6cKUoimzx2hhRYbYwVkhVSkg6iaDFPwE1qMwbbff9AGe6ayuM68B5D54NcnCikz",
  "key21": "ib7W9ra95L99JQvyGfq8gTwmcvGGdkW26erne6nAei8PjpYyPjHAE2k9QVRENcuKJzSLUrGGg7HPYv4ygmirTgs",
  "key22": "3AgX1t88nTExcTr8Lf4ieCSzD7czjYjrvne7ZprWpEkCiexvsEvLpFqkemni6CAF2jies6NGm7fjwFKNSEf7FoNN",
  "key23": "4q3Vcusn9kcuDhotRA2jt7ExMEq8H4cYugaEXxNTWhcwEMFEk7Xx65fdxWZPKfcXNeUeCRvc823SdnxCbgbAj8W3",
  "key24": "3sjJ6xEzo5R9xMud9tGYrhgfS8Xr5zTymc2JfR6Q7wxAiTE586FQXPSGuUQRT4nbupEu1DTRtMWHxqmgFpy1xSdp",
  "key25": "3vjmZu2u7be1JJc4QPzmyiaoaDqosqbk93KVzvPihR3PVSCTeSHyWqqw421sntXK7cYXiaza3iJJehX86iGwbDLc",
  "key26": "5aNVRKq4pgNfMXz4GnfrLKJtwuz8JkYgTUSsfEXHVRqYUBBj5Rhk2AM4e1gJXPkn6gZGViNY9pnxVDmPSko8GLQH",
  "key27": "4YGUegEyFaK39xEgL4nsF4QSrBKU9xWeeXKZY5KvztB2p61stEMWgmGb1rLR6WGxCLpKVfYgGQUkwGRohA9GQfih",
  "key28": "8URZReaghbzp17ZPvAmTRbvLaG3TShi82zGrPQxp4jsYtc5Ey1h4U4DfbnYf6RQWKBiTiuUHKR1c5rdKugDXU1Y",
  "key29": "2cPNaZ5R7bJXNZdHsdRDSjpZ7Ncro1ZRcZ3Yy8gt98MqrswY7a5L7CaLRkV8MjSfNMnCrwuxXy3VscVYVRfyKxaU",
  "key30": "2rQSoXUcE3m6Vp5X9QVA7EbWNrwHPuEeNtJbxz5ivng9AX7zUyoCBj5NPopXS89ZUtJWN5G9VwzXEkSGhmFs1K1m",
  "key31": "5K5yVARBarUHy6yEPTFGG39NUwBQJrooueaYpi2ER4f7PeDtyoAVYx93mETSjkzfmmnkw3zdKMbaH6hi3BwcWFTd"
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
