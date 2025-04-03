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
    "2g4mFWUvzzgjW41PdGoRzs5sp7wQe7wTNUmo9xMNfSTGRDgsZ4yftQvRxwuuonP6AFeBz7GUyj8FXbCo3FZjLv49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUq7GchzvWesJMcub1pqAv397tGhupFA7w92k3FVkX1pqLZ8XJrqT3YxNRACv4JQN5zXXvzoWUYLi5fvHXDVEnJ",
  "key1": "3sg7hPQif6JVwq8Y8ntp4tT8t6vzUxhUmLH7n5frbnoq6Vjyshyt3tKGt4Zf16DaUw5HMawvjRYoGhATBrpY62KM",
  "key2": "548Qr6ELqHmgyiQtXc3xasfTagfUWs7DCovFYLkAxPEo1vqkBB7FYzk2kB7W5aoZjCJeSh6dGYQHLQxijhvm2LWT",
  "key3": "m9DpausLXhgLc4pRreiepbsuLFBdYPJj179G4ogqgihgniEzEdZEbmhscwauUJWq75Xe19gaw66ZA4gngdfE6ws",
  "key4": "2ne2FsFsFGv4oEqWwxXq83oEeqsUdvKs58KLgMkriQDbD9JWARyi6DBS3GZe99njoZZYHVShYBHz7geELJkizFCf",
  "key5": "5yhErhTpVRA8JfDfeRzLX43MC78oMbLYMZtFdatr893PwGaEbybeL58P49GZHyADCx71w3XJKsS78FKVGP4ZFGab",
  "key6": "2K2UkSdqxjXmTWtVHWmFmJAM7XoB2vWCR5Q9M37M6QmbM4ibEujATs1NScG56XRkLgA6XwPtS96jBWpmFsucrPGY",
  "key7": "dB55TJn7YV1YumkBDazLqkUaUc2VQK6UbfwpCDyK3NGxtHQRunjijigY2pVbFL44WPVCTS9wWdkkmidXm13iwAA",
  "key8": "4kXnmjWufPfe3AJFXSHLRECLZeftEFfivNEW3oyqYXQ1XMkHRecfL3C77BmXBsvopKmYMrsUg8NXo5HxsR4SqLB9",
  "key9": "toTViEReE9q3u4Mujf5ZG3YB7x2ZZuDyt7uWojSu3fRJSKhatvAeBKPzjqGYSBn9Mh1rtEUapRzWnMRhonT1s6R",
  "key10": "4fBe4k4Ypm7PbLkxT7YhVuZ6rfuqoTQgKQXn2Bouv9vAJwfm4WWH3Mqi8gefXzkG4Cwm89zUJ66kbjrKLt79Stz6",
  "key11": "a8LRxhqvkiuG94TS95sdzuy8j18bg9sKRSFpLai3pVjcZCkdKJYydqro1mvDw9GDycQfNgSPLVznTe6vZL9o2hF",
  "key12": "WBWLGdSWd6Nxwt8X7qUTN5T7CTJbXR1jHc4UduU599ch8qwFui4YipveyTcWHzW2wHLERF3V5yaznPzy2GVnuyd",
  "key13": "5eLa3jHZbA6FRHSk4rrDeeGub1paMy7qHED78dFXU3Ts69UQ9AAb7ar5Mes2mvkWHFRxuKAH4PQcNdaNs2fYgQ8c",
  "key14": "fy1WDaghdHpatCbvU2egdpKMeZEZE8nifbRm8g9yoi574wFsNq4XMXJeK6VzD4T5M7GqxbkW1dkXg38zbqRD9px",
  "key15": "2thEwXGKefDjsQ5xygDjanpnxCUiaUWLtFqXG6D4PciMFxa4aZMJToGdkBtda5LWPDooFjAniWLEpQ94u4tS8Sbj",
  "key16": "3msTdqQtMD3jT94E7szY3ZGqTPsgoBFhqyHkek9yzAhzmiKVBui5SBFVnQhFZqua61YW32zJfzg79xWaG4dMvfm8",
  "key17": "4JQZhyaT2S1AcsmRVbZTJRE2es6iWsGN5qBuNAF1gUSfoETe7gWoghzSs3qSDmASVpNf5SySrTNsM9bwWx373t3N",
  "key18": "2rhLFZNGqNQcSSPgf46r1GVhgwWKUcX37LMnQhYZagaUgffj3u44L6zFkeNumGhhbv2UQsnSa2NDKAM4636NPkHg",
  "key19": "4Pc37goKQFPY7E4qv7TnnSaG4unmQqVKcsS6ZE49dXpbABQpAT8gqMgWBkBjp5RWy7mjHbq3z3hrCnob4dGmHifx",
  "key20": "45ow77TH5kLMSZP3LDeJ2DAyYDkLv5R72YVQRTmaJaSU2McCqgUgw1SaFd15rw1aNbh2cyTmVgiNQURiDTenqdKt",
  "key21": "2bupphK47siaCCEifPcWUsjHUz2cKYneXXRqAK2DwxAZXQVYsZV42UyqP88yZEKvr2dc2dVhDTLTrsgGCU85JdHT",
  "key22": "2LPwS1Cw76scSTd4WuaM75VfJqcVCs4qCdZFKFjTL1vnGujK1QejZp11hZAortXz87BU8Xh12D7W1JfovHgqYCJL",
  "key23": "4RDRGCFzfahvEsrhri1E6pacVrfaTSAtnjGgNsfFiciqUGbDhYVpSVMRTsDz4x1nT4yNXW8Dw1m3bFvxtVHxvWPn",
  "key24": "5ear3FXVfL2BU8YHPSoTvqmEFGc4R3t9hJUkmqSxuGLCUeFtVL6ZTMC5h1pF2iiVKbjXeDom7TKe4vofJJ8ZAGkR",
  "key25": "4Y5xVxEhFXHPeuLbWfcNwcsLZVLEG29Jitx6gb3pRvrZhdhtoMnFveGdey4UXC9urUMjnocVJEvVhfbTzA4HGM59",
  "key26": "5CRWJEj6NdkYFyCy3aBQ8FmUx9sdLHcc8vvHeVyWeLuq63bXPFK8AmuNDHynQbrwz2z3afusL4mjzF1yzBMpQX4k",
  "key27": "EoxDpFMLu3mjHCLaoej7EpkT5GgMHxtB4DyQnLZz4seauoSEgs7faBvKhHSDUu8ZJzd8Nm5CF55PKPagGXxuUby",
  "key28": "3B9Q71M8yotDRmkxA4ZGspWLocwspHTN279DZf1LumJLFQRRCEr9wXtSrDkJCUEhKX8MqJFN5AzHUzoxpYjB1o5T",
  "key29": "WwiEJFCWFALiRGaHKdiM851cwGPj5K2BucZnqJpsHtkEJ11aQG1rCBAEptid4xRmRKWT1MZdEUBwEHBvnKrQuJo",
  "key30": "LW9PFt38hNT6LBVAbNrfqRAEcBDWzvqhzd3AiJHAxgyfPFWQ7tcw6P2uo4QC5VuURWX59C1igHYugkaq1f9AJaw",
  "key31": "5ztEpM2QLuRPWAwzbYAH9Ymrriqz4pVGBQjwjJ4yGtzD3TFng3i4Tk3GYHh3hTbwKnTSUd9SVyQzUkjaaL9a2kjN",
  "key32": "2WK6F1ctrFY3oMPGNwnUFX5rkofnpB64uuXDG1HGbASS5mBbPFMhknWv6UVY5E1MsM2qjNdHiQfXZSGv65WEQmBD",
  "key33": "YiU6cnqnSbMoNuA82rJes8227eJz1FNCjFs6EF3kp5qzTr9H4qts6YXnTuhQARQNqHwskbepgyy9mg41MFqCrpX",
  "key34": "5s2imDuBw97z3jvFeNdDxskUm7d31JFCtxP8Y4WPUikabazfN2pHa7NtQkHrYJFRGLWovytW7gCkJr9MftmVWnGg",
  "key35": "67M8qKzNSf2YyQh3FDF15HFLY7dyaWVK2UBR4cHLyEomFduRmrBVewYH77omJS593bV7gE8Sd8WtkqefkpS1EuX4",
  "key36": "52ZhcGffRzfxw4PxC6YrEdasZC4AWJH9vCDgPdGwoad7jCQBVg7pHgCU1seXKMbPZ1ju24tcvnfpELQCEXr87Gph",
  "key37": "4sP6UCuSgL26KiovBPKuomCB8ixDXSeotcczpsnsaZQki26mJf9wMJQZP5qWZRRa1NTYgdp9cniCB6YXzwZAMEFt",
  "key38": "hwcMFDxib3R2y1BM4LH1ap8Zf5pRPAy26kcJhP8huXRG6A447BNq3ywMTDv1kfXUyEfu13GTAuJ291u57STs7ZR",
  "key39": "5N8jwPbEkwuSKc193rjzuFew5VqNhWB4arBitwXaNWFh6W47CFhva6ZfrSzhaHgefzTr41kga6kNAAN3BTTpN5yL",
  "key40": "5Z8JF1NAyt1P7p96o7253H3YiR1du5ZYDudoA2AxS1D6nLuNLAwANJu2SBiBwyADiTsJ9SYbET8U8ViWwbTC9KyS",
  "key41": "57PqMQdXP2VKVbCUiD1pD73SEFKDqqk8jegJoofzpgeJy5zsRbCcUjh1VmTmNSKyMZtv7Pw5xtaEMahCX9L3tS8V",
  "key42": "2aoQCnBZN4kYLv5cVZYRvEqmkmL6EnXAZCbShWvKVkZ2sNHCSPajeBKksY6Sc8z1FdWJFQGEmKNxNyQurnvFz96c",
  "key43": "4qjijsPShtu4oxe6QtJnWdi2SU839BZh2geTi3GvAsSgUxYsWBNgrLXUSqRTcyGz5aUmKfJewA7kqFFpqpawGq6A",
  "key44": "4mTWSWSYTDyYXQwP5Y8w6M4WTT6pEZRxzfZzyhbtHp4Y7HUcbrAYZA5tpviaenxKTHk2ydTVX3W7cKTezk5oYPeK"
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
