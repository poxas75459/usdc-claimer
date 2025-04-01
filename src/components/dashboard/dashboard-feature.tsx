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
    "5EzCwFBKdVuBvLTVasRyZxTD6x97UVPcFTZuCCj9fHbPzcZkZWvfuvYXv9SiPyvvUVJR2Xouq4oWUP9wdiSUTQTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mi7JXFVd2FVMAx4BJAEfMngMb5cr3CFw4qcU7QKZ5XmsC7Vgrf4CHVypkZaDtdGZ8SmGsNCrPzR5GLTHJfmRubg",
  "key1": "3uXfgKeVDTMDjeE7TCYtSFHSWc2eUArfLX8uGG8qjPK1hTVpJDrXUJ1sDND9y348e6Y8atqg8vai3XsCLPWQSxD7",
  "key2": "67KpV24UaiSK5QdNHF8LpmrCaxHuompv3GhaXQ94DFT64AMMUt5Mztgo5vJs5wySNKVqLtJ1RjX4DsqXCdyVetwz",
  "key3": "5wLYb3WgfHqUEH4iJmnJZYPJbebWU8StT3C9t4jenZs4eBEjD3ix47Pj4k12dDVphTodkDRAEx5TDTuyGd35BDAf",
  "key4": "4zJnJhq8qEHTLnMkfSqURw981PG64GAFPLLThq6RxpwP2YSHRUsuZa5qzwH5PcZXUSNeTY677TfcMxT4iyvyc5FF",
  "key5": "yvfu3aRMmSHbMXAXFdZxK66wd5HimezGTAwsNKCYaa6oB5HwxnkeUewoRBMso6jVqMGjQa6DvzfA3gsP9iXHv11",
  "key6": "3oe2wMb2rbeiVVm7vQigiitk642uKZyzbREMDVxSzACPzUvU7vforCJiWDs6BQoSidKfVKdzYJje4VcXbqFHD9D1",
  "key7": "4Nczc4UnRAV2zwY1EmRYMTw4vR3CG5pT3AaKwUg6QuXuiZ5QQJCbpaNtyjTfQCMzfh8RqrKF8mTBtoqoT2hGhuHE",
  "key8": "5de1uNnFtPXKzMgmFDi7t1xaUE5YgJjQfws4NvRoURH69GzePsqqFvVU8AW4yHyo7kAAdog2CwL6e6bEzxPkHEeU",
  "key9": "GwgrHg3vr3ayEwCjZGfvHWgnqBFuf69tfAf1Ed9LsXpmhR5WAWgHh5oTEysL4mnqJnSqMCNHjBRi85a52kKECdh",
  "key10": "tvCQzoFEWAzVXjMeFvprC3p8sMfL8LvyDREddFKPw3B671fSQ3Np6qrbLZxmjMWo9MnV6ZvL8HPowpZRtZDwUod",
  "key11": "3eVxJpiSyep7PB3kJypccv2UEEXWKNgvkt52JB2uYriAaATyMD9gqSCNsJsvcdx4BrYKnGXR9g6cxCbfLQbCkt9Z",
  "key12": "2bxE95N2GSb2RpbMSiregQKSdP1Vm2Ro2rXNPoqjBbZPdSJ7SYQsT4dyjscZyZkwiUNcrdx3mL9Ru3Kvotvqixff",
  "key13": "4heVVMGzJie8RAwL3LRh7jNMENDLw4QezX7z6NcwqD82UFzUXmJh7d8NwKZHXj7CsQPT8b89XKCqMRW5V5bx79Kn",
  "key14": "FAKHWVQ7XLQBS3wPjTF7UmKRW29NouYoR3WrkGiCE2FopyZGbX8iGb2zcHh3g7TgBJ4LJFDux975557FJ1j7R2K",
  "key15": "5KEuKa8eM4vhzsFbZFQuZgJq2tgHzb5Gvi66bNCPjo88G79UF6VmpUk8MVVSZg5XbHwdNSb5bJ1McVXmimqNT38V",
  "key16": "3bHnwqPJArg7pcechyxkATsTCRfwcofCYhMCsbAYaevV5s9oK6d41ubnEbCcAD4yVLbTEkskjZym8w6dC7g1Lb9z",
  "key17": "3N9rPL6xJZhmcqqD4nC8x9N9txh9gsnTC4CNhmD8qcPrQ57eZByX4CaXM7pekM6XyR9CdkbeHRfDXTYSZoW1BCor",
  "key18": "2PLijVeMs49w2arMEKRtTZaYP9ANseyj7VsQcP4N5pXbhvzPF8pL341wyBqTSyLEcUYhviCFR57kf9KuyVDm7Vc",
  "key19": "2s8pHmbHwJegBAv9t4svPFEEccVLUWE8d1SseH4MYiepRX8ufSZcNYwNSq6ZTqgZ4LgPHezxfQE5UM7iP7H5QVNQ",
  "key20": "3jzx5xcFx2exTizSLCQYQXnjTd2GJSp9ec8uuAKeRgfstGHSbB8Hbq53gHRPJStoRH76v8CoeyRBX7i29wpjXurC",
  "key21": "3kHJCT5GWAW5fHmzPLpgQiZDK3QEHk3rWR3omWoUv3b9QJ3TDtz8BUyAQV69RLFCxr6ELaUqwzjoyMo65JtFi39A",
  "key22": "352E1pmzGeZs4mthbwj2vs4JnM9Mx1iPBMKSDVgKaCAj7yb1L1dmgQNzRTznkbTdb131g6yaju6FPSw5FAcExc5c",
  "key23": "49n5dg2PEEnojKRWsTAhdSLCK5wHAzv4uJoeNG7SKACWaqxVxtbrSViK5UXvZmkHPkW2BPqp7J4oinGPRUHJQ8ad",
  "key24": "5evp2DqryVFVCvCpL76u4tWFSN5AAG4zv1fZ4zjfG7FqZUGo43ibkj6jD6crosr1RNtcmuM4GqNyCQe1Lt3EDXfT",
  "key25": "4s62P4VaMyh1DNJ6g9AfnwaNAF1S17UkZTHznjN675LCv8YsqzwGgrraFAhpFaWPzunaFVUmm7q4upC6htwg4EYb",
  "key26": "n84kxWuy1LoLmsp4WoGdkwGS3DZqqaiMmo4gSquDbEZZJE4tAv9vxXTvTQeQyxC6exaAZJWv1tzuak15PNDH1qh",
  "key27": "mKsqmXYkS6P1gfSkDbysNNJ3hXKUUq1wecwEWjDrQnTP9AKw7xzBTP4vkKCcT7v2P4S2BPSNEBnL348ti8Bpr8v",
  "key28": "3XfoqpkEBD8ffi2AAqXULQMMJC189Qk46YT9SMMw9yggrnHk2WfPCwaiMWVnBapRJqRGVre184Gxu2sY3FJ7aNh",
  "key29": "2GhSW4yfM5iVZL9dmLhVPevm44ymrebCTmnxjEYwy7jpVZv4Tkzj9f1CSeQ6LFrjSoDtw5kMxmb82jf3dPAUxNmz",
  "key30": "36mXsYPp9z3KAhfFGHPXNJvzFnZfCxDEWmbCDp9ihJNHERRYAy319d4NHUproq9ZqASDPm2r2ahB8U4QopSNYivb",
  "key31": "4kgaqFJ9JjWSFtQwsvcZ3SQe67YH2d6Mbio2r8xi5ZWjnWLsfhGdDQJ3GLteg7d9q8BncchgWtbaa2R7dPN8bpa9",
  "key32": "4mgUEXfBZDRnGeBaaTXeBns6tHSj4fFX5Hx8p3wajXkNebCMbq88dqRjGLe3gncDHYFXnm6et2dmvBwwHUNnJhWQ",
  "key33": "TtKrAZERx6bBuQC4RGdpZhjnvNNNLC6stpaZjL2WkWdwiUw9XKPs24W6Vmj1wU5c6NvYEtKy3c4CHcJp5WfF18B",
  "key34": "81UHCV5PFBfgdWr819WTGytidzHtRCMWwxd2Gs6V8hwEHwc6878oZwNU4nu5H1CwRM2dxJNaRXzT4PvQjDHkYVU",
  "key35": "Va6iTkeK46g3SXjmW4grdEGoyAePx3T1UwUTYEBcwjtgqfwbJ45juLRKVbseDTsgUbQM9vv8Lg5poCNwbJQ9KEw",
  "key36": "6eASrnfkM2hfDiUn4FbiE88QGi11iPuPLhyi1zKzrSUbemv8ZXcHjWiDkvcKDnyVyVsEff63NuNCxSpnURpexe7",
  "key37": "3zbyPqnjpHKtSqqat9Xy5Rn6Xv4yfz2cJZGTYZrC9ybGJm1fiUpFCYvSqTYkjGxfeh3zXqj9BMtyiAo1wQP1Jkd9",
  "key38": "45ViuFDSnsSziKQsWggm42Gqs3MDK4gzv1FqrgCrCeGTuU95xemSjPrVWsWjNk2tahXEL9YaKcDGPLrNxEsdmEdZ",
  "key39": "4evuUrWWcdKiTu93tfhcz6gHZGVMPZA6T7B3fTfWZQW2kULHntkyYGutjmKczVytfmu3qL9woVNFbPohHs3ZS69M",
  "key40": "63X3tbQjbqN1Q9S97aq8GMTjb7nF8LVJAZiFJ6q7gTwtsbQxDCDMzUgaDDaJA3SZ4BnvS4TChAT6fF57EagD3226",
  "key41": "31qGBYiEzqrdUTBfNXAkXCBXz6kBeKfjknp8k1tHek9DJwXRmyLNJ6Y4dSJxcrWCK2zxjbxVvk3vZnKN1mGqo3HB",
  "key42": "5Dq8mQuawmdvmgk3azVPEwVE7L7jkuS6maCj3R959RomvD8cPaKNNWsCWqqS3ihW5BSuSPAnSTgthvWUJ1cutngk",
  "key43": "5vdckr7LY8YdqNENGqfx5DyGNqiaWqPch8yS9EDmLkSHC2ET2gWTrD5Xu3iQ9sNje5u77xnc3nkF2ScZiecUzKGq",
  "key44": "3ueikoukj1vYF8sFvho9n3CrgJA8hdbNwf6Q5QZk2nQ92DwaNkD6TVpV5K9oVKDnJsdZsfV9vFK6F7RQnmDheSLX"
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
