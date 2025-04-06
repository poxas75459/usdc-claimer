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
    "w3jGWBDLMTwXx1q67e3nxJrqv88VkdXMfxT575ErKwwL2AvKH8NGfihiRFUbtGrAJCLBShbngfom9w2pm5Ee8Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w878u369nBaM6Yj3FLgXjXUeaeNNk7Nq59wSaXoAbX7fi1vBhvjP8t3koxZpi9oesHFz8BH6UFKWfJGHA5xLPuR",
  "key1": "2g2KCcRgG5qNovLacAYKEcY8C6uZkoQuUxU2sMjiKGDQxngnHa3UWyFW4DK1MeSDy3yKjvyU1PpRaH392Q6GwpwQ",
  "key2": "zQfbxqHnM2TVX5h5HzSGSFkC1FBs7r3QMFK4ksgN2T1pWKWLziK79EJTzghRXZSwJ58Xh8oV3vjt8oNu8ZZBpHi",
  "key3": "2N5ia2eYkk6mUFPb42wpEAwa43UzhbYvNgFzqECqtAiWveBpN1J9bvqSMSzkxLfUhkiXGsygZ9355ZyeH8NY8nkh",
  "key4": "ieEG13QYwMGSMtDfwyK2Gy92Wia46iTuftTKQKtkzzsyQA4qmeKbK9yRn117qXpLEmb5vx2rnSDzjh9zVYMEGsu",
  "key5": "5C9Y5SEk39rYkhJPUe6kgYBk79Z6ABvqFuyLyxHb5tV7UbFbEFD2fFFmi2KtmweH3TA4Nqqc1eJDLRLqt9KxSmdH",
  "key6": "363UBxUKgVciidQf7twowThgiTEoKezjtyqEqZY3o12ZC4GCy872f5Z2URrCM57Src8fFDFqGb9aWu1vumna21nq",
  "key7": "5JUojvQSfA9qjBY5kAd3t4W2G9UiAx58R87qaioLVAj88BwrgGdpQ1tQBvgqRz2C6GRZYnp76EF4wbKJeihnCi4g",
  "key8": "ouDHpRx6tYq6zWSTbxeN1RqfQpMQrhyuxaBJyDc3pESz18SZrQHGQTQUTM2Xy928ZMzJeK8R4CMnYLBoWdRuE9S",
  "key9": "2M4s7pbSDwmEWFqAM6zY7rUf241ncPdQK4k9KMM2GQm7AXMVq6qs4ggpbaGEMgd2KwmnLX5349ibPrnSCCPMooM9",
  "key10": "7tfekRgy541TgACiyWHBxC2zqtLRFWTcdHYfbn2kcsZsrvSJAc6CFmyKuYnBGu9TumX7zjuo98dnVe5BkqvNQNi",
  "key11": "2Vd8Yq1pcZc4XsMpK3yUGFJi7nH9fYV2rjRQdHpp7BQ5m6RuCb15yhX49JEsSTvxDXigBBKHZvaqsRTbUGxGLgPE",
  "key12": "2aPrtzZ3ssCJuEeVzTiTC4PcwfzavERT3nuPNt7zqbCnRuEZGzM5Ad1SfmeGVjLVvDUUBzMhut6sTkvV1dUvtii1",
  "key13": "mpACCRXgFrZQiT5aV4NkNFvJcX88Ddoy2PLZCNkHkbxT9ezDMqWhCmbZqmKA5iWn1WWcybg887KrtLWpkgLiUUd",
  "key14": "3B5LfSEHs5m9Ve8UHnhpRiQFGwTuZpAfyu38DgedJ6pFSA5SUjfmMnA5MrfMfaNwqc5kRLVPn1pbXqtAtzhJJZfJ",
  "key15": "3L1sTWdZfjhxeHq7Jf7RTfYbNAb9N6pwEE8c2uCiHkt2sdYBbPHgMRmeF33HccMdMWxV2W6GyTzGwVT1VPbDn1m7",
  "key16": "5mqE5ZZABjzbuB551ckZRmADPC6XQZc6yeYd8nNznWWioWDWJmJF61PZiEgqZmPDedstAYJC582TubPyWnrqTEdZ",
  "key17": "e8i7h5nbSLWpxb7cNC9L8WqxM5sLAQhYuiCUumPHdR6aiGynPvfKVtC11PbRqB6obuTJXy2sjuzcHnBwUXpFFN5",
  "key18": "2Cz5KjJpvTead8ELoY5UySdEaeVNqHhXEznHgJ7YwyZBMJ9NPeppZYJth7THQEbRjzyc8arHvHEbAANydQWxoWem",
  "key19": "5y5yCbmHabZdXdqP1ZmFiEt6xHXAFQVxuidVnfdfqBuBNaGDDfYstJzB9fEfCcgpmeuY9XSGzn4pc8agJYARWWyD",
  "key20": "zRCKCRNAEn1NjrPWdmxLb4tdiawYJu79L5u4x5dRoX9N5gf2Gjo5tbe1je6Pihx6zzwyTDhCD26ogWrZYdcNgjh",
  "key21": "3hDcK1yAE9Dez4NjruvVKyutFobAkf7DhwcrM9ioFhnyNLntEYHKFgZGM21HMQWY7i1rwKNWJBs59jcK2cU4tLrM",
  "key22": "5cUVuVbkhcGGWN7Hzh92xnj6TyrjeTZuLfsz6api7wg95XjqxX7BgPG8xXZ68SixHMuMFvPJPSAjGq64mYHLWT1b",
  "key23": "26gi1UEbstUP5Yu84TnhZGo7LKmK5YmKgrTt77VoJdaMihYX2AZYKjN1ZSygaQxDsFCtrKBAa8ydFCX9K8dfJnE8",
  "key24": "g91aznqz2PpJbPXR3o6FBUz7bx91rjcAbLEg6ANsgrtgXnqeAtk48iUP6iyirLomLzdDuMm3mhusQqEqYpZXJrZ",
  "key25": "6S4xcNpK8866gawqDetN3ouGSnyKhkUV2xNCxea4kiUWESyCFrC4BCBqfBdVZvwkZo5EpeGF1oRRfX1X2ZWWoHP",
  "key26": "4ZPxrJRrZ2Ng9pFf2DEE7dL4EFWTaqWiwttUSyTmZFhhD8MRNGubrY1i5vTGez1pKoWbShV5LXZyNXeG5xVED23b",
  "key27": "ajp7aGHZewCGjesUP9AS8ndZiwz9fy3GRCHGwBmET8FQ3zYpNGDmMsCubey3C1txS925dQDQ2aNeekpfpXm6gG4",
  "key28": "347CuhXCZ1fsfLi8fBxfJFKG4Y92e18xnvYjPw4dPphwSoMNPnrMgSyT2X5eCYYVTKYbkAveq6FpqZAkXz9KRkNy",
  "key29": "3iUe6fCfqYXPpfW2fTEFHxuMD7mKa9ZMbgbxx9Fj2Nuy68xpQsA8ghPeLVFeHG6dyYbUwoctUfjCFRCuH1G7EKZz",
  "key30": "3VtMuPHgv9BiWdXJY2g1evuGFtE4XoYtubDgbG6dLi489LssCBf6DhCnaR7txDHWZdtLLzM274YZc162hNdLCp3G",
  "key31": "5NmpeEEJG6wiTpqgHuLAK15Jp5zfwJuVMT15zk6ADhZZWRqgMvMeN4gefbMxzQ7RTcrKdr25HCf3QD6UdzCnX7gG",
  "key32": "nKc7Nz48jE7wpP13cWoTeDseowkCWKEC9faRM9FwnQSXYHRVy88XMX6Mh8NKNGNe6xaxGAD56KhHM47S5AWpFBe",
  "key33": "3BWqS3cVTvwSUJjZjKdBRxPcWCggAig45s5fLxzXmoxnAvZsmqcsYyg8w971FpRrELYZTH1rxEQBeRtjPdFm3wS",
  "key34": "3dXhmcpcu5DJq7aPtpeknwzaejTMRZwWA3rg6vErLkGDB5yM2aAbdTTQcNXeauAivTt7LFyUonNpe2Y1UzbMqfDJ",
  "key35": "36avXx6CpCHBt5x7VUSEmZUHuTgzfkyW7Hh3DF2AcU5TK6bcVmrbuwjRKx5dZ8JDU2e7WfQdAJaUvUanpjbKjwLo",
  "key36": "674JeazYZ1DMWGVSKYBGCrvCAxWo1wnuLh7bebRSPkQCvPEMk2bo1hk1PGA3C3jCn1HJmPHCufAMXBkE1xRib3bn",
  "key37": "3Z5WM3Zv2auZ6W7jNuUAaUrgohqFqfrGmec74J7AVNXEsRAjci1BNf1cvJJnVypy1eGiuVyrW5x1jdqDSSfCfWX3",
  "key38": "gsBsZ4zeZa7VkSZqvhLX4jEK1zWMsqmVhBFwrqxSLPa3xisHggxPos3jBX1V1aivU3nbaJQga1aymPwMow2Pqvy",
  "key39": "5vU3uA8HAVCBUqM2cG6QuMgnN7y7kf9UmyEKoqnVFE264tW4RXnvzMB837kjrtLiiwy7uLvpfk1qEYjsKQuaKq12",
  "key40": "2AzU4btgtEBXNw2u4RCnRDoiHz9P5xHMPGR8uJBNzsQ8gHssCRh1Ug4R74AZgkbnRuK7LR3vuspHz8LNRos9z86n",
  "key41": "vGgXAauuRyh5xJxwZiQNvTcqWMGjmHXepZiBYAh6GKMNcZXUZzhCahHcR4cH7dEhFAW3YtjHfuVgpanPQRX7GRH"
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
