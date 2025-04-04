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
    "sye3JUixaQ68R3FLxVRnThDBvGVz9HK1mowwyFox2tTcKtDGZtoHMxHJqgBEsHC19eMAxKANoDhbhw5sgHtHrLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5e2Cv7QtbTBjqPPk5H7yMtuhVzWheBgd4waqcW7QxEFxD313x3NZDvXncYdESr4fhr8wGZxVMWtuNSGKpb9Viq",
  "key1": "kwB92Vudm5S2nsKXuMa5iiDEtZHXderZbKn5YSZN6ZZCNeV7wkCWkoCYJocwNt81oTLtUdcWXKDVGNRTMhdSWiK",
  "key2": "49QKcXK7UNXNwKjuMAVcBu1cqBRLwJgzLvjvb22kmqWdNtJv5fMm9yMvdAKkmVSWfb1x6Ee4AkVSkrvR1FATiXrH",
  "key3": "3bL6CBx3kfQRWLhuXtpnS92Kdr71BwdUVGTcAQmcQZeoyae7ndnAgQb2fTKsoex1CWboCXXvBHFGhdioFD45YjAH",
  "key4": "58T8WTUxhA11GSYqi8s3FD3dKMQGj5731ATUASMQ4LZgTqNZrKhvsvHEzJ8LMpVQjc2fa8DQbTTyr2PxQYbyzdW9",
  "key5": "2bUQ3HS8zG4Pma9YwYugSmPmBeEGaVAsTgxnQQiQQdpbmJfx5LEAWXDEM6TNAH2L3w2sor6pevSit1rcQ8NA72zz",
  "key6": "RmBfASfPNgr1W4fSqmauHbbvjFrv5SUS6JCpp7BE4mBMP6s3WoVTart4tqfJqYihBPLaf7f2LgXotwFL3NtWqDA",
  "key7": "2skTT47rNqqpprX9BD3U2dC4RaRzxYHphpSTEhpPsHjnBF1ZBqhcjGTuLvFaYLUXoabcgVw6YFKvTWsxgYz8D1KC",
  "key8": "5euXctGjWyY38HpniwJQ2U44sQACeLNaykRNBH1JXwXhzru3aFQP6w5S8LMZuh74dAXwR2xiZmEzvQusJ2cbNYnD",
  "key9": "57okKbXDtZZmG5A3p95Z8hqHw9bjSpwJ1erK7U4Ko7rGbAFWYNvu8KXhxU86UCtQR13NoUgDD8W7V5e4ptnR56Xw",
  "key10": "4VyCXpNXEhUrbsa65hbdRZ6w7EjGd3hFY7wdJqBzKkmVBBkRUyTPs5HMMermP2zip1BojTeA3HWQK8oKkAifi4iu",
  "key11": "45BH9U9gqUzAyHMC9S166e8bbZ3pzYc9roQ5cGyQ8jRwNy6TBVm4ZBzdvN8mMQc1H8sg58tg17Ni1vnRXJLYNpKa",
  "key12": "4Df5u3gG77dgj1hYDNmAcwDKs2yFaYCzRTdeL7EVqzHRifTYW5vemEyvba9u4d2CiDHfwefqeW9fLFEiNSMCMdfy",
  "key13": "5iycK6RqRJDozLhTzS6rkW2bFYCnsz5jBYH5muLwMwXQpXY2FYt7yLmdvKttvtYE4z5QExiEzCWdTPBJwuy2ojaG",
  "key14": "LV8o5zujkQXmZQcH67YQ5zXQWq2bbHEt9XnbBvr7nwetarik4pVJPNH6E1wuEV4h2UPjayEvo8brQnb1RMfb4bD",
  "key15": "3dgtd8SghwuVynNdpEZkf8giy3TTb2MTPQNNJrZpc7nf9YPu4LRnPCXrWH1Ebg215SwJJchg5APRR9Nyp7c1RbXk",
  "key16": "3N6KtTijMViXzWgJPF6iyobhURfe4F1A5LJARYKq4GL4BoJeySRGSGJra2oNQVryuJXvimUPBVwskPS64uqnThLq",
  "key17": "4jSC3iYMWXfH6p4z7FPsm6VkdD8tDQ5tz24ZEe5s8anpzdpvxeCWgsgnto2jGW2hTp7qMqGw56dXg2SKjrVziYNv",
  "key18": "5H5AjGhLDh41Ve5G9cfZjdVsPZwzjkD3YHz42FBS4YEHsC5Ketz7k7bnt7peGm3EL7fFmdLrcAmCvZqeh5jNtUSw",
  "key19": "TRZbubHYuEfWW97KJJoCAV6BenNemawkmRwcmjMHByfvoB7HM4cSq2RzQcXo7k5uF2goEXSnoHxTHmhF6qXFvbR",
  "key20": "2vfXLiD6LWxojmma9n6b57GrvWHwynHN19EHwVCqxjXthbjtrUTRBv7RvwT8Gz5k159TVD3x5CSvqgB3zxxE1sbZ",
  "key21": "3S1hPwMbUHV4UdzUAFTZHf1CFs9HRnBdSkxbJHEVgbEx3giQdWN7ZcrjGeWWoCD1pA3PxAjZiUsLiT2uTRuDEnNF",
  "key22": "4xALR4yThx3FuAwFNQxs66GwXVRUgLuoMs64NjxizueAxxpA7kv3Bb3pXNLTfiaSrnWNrMud3igKXqkHwGaHuYeR",
  "key23": "2PCdHevEsfGWCnKj2D8vTjLY1SaiQKLoetUDWDaLhZE8AMwGyoi3USLVBda9jxc2y7HjnFiRhCtBCXuPntLAxuXp",
  "key24": "3jUukoyy6oEuYhCSyKqp8KWQPYF7HuUXYMf1i25EPuXRNPeoD5Y2TcVB8Ezsd7EP6TBDD6rtHbMKrp9wrgAy5sQ5",
  "key25": "66E1LGu81XmQgAi4adMzbBgjjBRkcFnELHYdDoZo7iuMnEc9hajcbfmUS6387eEbLYYTUnxQ7h77gD8F8yczL62B",
  "key26": "5sFiA2Ljtdr9b8JCBbHD8Vci9jFWNqPqRMnurh76MqcrSbG8LWJzHE9brGT6QHADpBQL28wa3umhVyba6E7P8xye",
  "key27": "65wXJxo71xHPJ9tkC65qWggPq79dLtjsYBNVTfrK4xCYgiCq8XBjPd7aoqTU1GLcZ2e3pchBdx4qYD7Pz2kyb4we",
  "key28": "2cxDovJ6cpXvHZrjBYsYFSpuFPj8u3tp6iCTHAKEV5C8zyc9RWAXLW6CDkRh3PhACDaqQxT2wW3hiBKLdNGLTjmF",
  "key29": "2GmRSnjG1Ap6akQ7yQd2J5id4QZjMBQpX8HdmmWmq7AWhinUeHoBUAbKq2DAuMw9CfgMP3DJViKEmp331mUk96XS",
  "key30": "QbrqQSUEQ33CmHYXyPbVwiPdHx41pjteEXSjrCp55hXDR8WDT4iPCApjYwBe5ME1esGeC4bPL1k6jDJWSq9bzPe",
  "key31": "5LzBGkn5dwXyp1ygUiDyqSQdMxoXJYReUVgRXEpBKvJ8HwBhVdVBGSJyXKwhZsLSk2MTujJPmj7AHSTmBP3X9xiW",
  "key32": "2hiXNJECXByXdF7NLaugUHWYErEKHV9YJSDxgDjt6aMZXdkwEmtN4Vpg79Dcah1hw9k49HbvBJY7kowxNyY6ggPF",
  "key33": "3PrSmMADhLejCCpFpU9n1G4FkLXmkTReL7fbCVy23JHRnFTvSQdN6zPiUBuU3KvXyZXLn459T1eBMF5piAJBxmTK",
  "key34": "2GB9BcnSHcByW64cBPXThDT1kWyCXteBcrFBLd82AMPtoRAFHBDYWmzPcHzatanELeuLhGEhZz18kJomn1VWnALm",
  "key35": "3dEM6sxnjosUJN1wbs2wtmKGjQurn4rKeeaeXid7aJpnPJBTbaexhmi12nzDnNodDZALv959yuXw1TiPFcmN3haW",
  "key36": "4xsz39PnDjnjr5zsLyBiYnZU6RNuzuUbbefwSPbMMtqUNyes1V6c3Gymi2FzrPGPkHP2VKHD5V42Ug1rsfrMVKBa",
  "key37": "41Z7s9P2WDzNM3tdjNXL4eCCGBgPSV66SGkDLhmLFSSNZgXBiBmnkHAeRGWv5F3evfHVnnkW5EoT2aRJnoFyHPqn",
  "key38": "5AyaLTBTJXEenQi4tgRo1UPKwLwvVKTRQJvHoaHkWjKkfFLwHFL5RUkcZ3Ak4TUdB2KJuy5ZXBPJCbzxMrxTNiFT",
  "key39": "3reB7SHLzqUjJpwCAzmBJh5Ne9VerfMYunvn5Ch5Z2FGSUTzKwzyejHrkEqM1Cr7Nz7j5W6x6uYiTwx1swHTHVnT",
  "key40": "4ZyabVDn1dx26MwKYHzM8R9Wv7oLUK5n266kwffuKdj4wtE3a5FaC4mgsp1f7uV8UTNGNWccQASCGjrF2cNgs6EF",
  "key41": "5AwotFnbFzfPBY9SYjFQkwwbihJfVLo3NVspkyWQdHdnSR5upJ8nDAu5QZoashMY5WiMzS7cHsMPEnXEoLfd5njd",
  "key42": "3XKjjCyaKW3AWy2LP8GayiDV8ZqvCqhVDucttGo9MGoso6a6CrzACLWQvT1L3UaYEqqTJFNZgCjTX79Y9vKbKKuy",
  "key43": "4F2j8fkLnX4ig5djweiGhuNrNHiuRyCtxbnZzR2UroidEqVfiYuyuJcFDkjN2noC2dWoB6y5drkDrCzd7jPSk75n",
  "key44": "3CMwkxB4dXGPhf7zKC15XtnSfmQT5Fadw4kvNkUKaczz6PBcdNSuWvaiFH5PnoCMJLyMQpg3be2QnYVzfPiKyTee",
  "key45": "9XfH9NoskMwNEPXTBrJQgoa3DKXkcieknpfpRkMRVdNovMRj2SFFDhaxe6K3staqwHauxV76JW2EBw3pdtAYcqA",
  "key46": "5UdHRKmjk5VdA1wgBPXjBsqdKtniTJ53J1qzbUdMAKY7iJW2QDqMgfYc6qvqr8bM67RBYdibAouABXRasoyGpPJL",
  "key47": "3qY4EmxpiUGvgz1HwSRTDkYjBvYrPmdZio7Z2ThbzqPiEUiz82h3TavGsDarPSanTcETPiYHh4MsKheXh2bPD6Z4",
  "key48": "57117RvMwupZx5eUYLU7zuE38atqbHpaoQbQwKzpaLgsZutGXyYYrUJfydbxs7ag59YcetBnuGy2Fn3JMnRuioEn",
  "key49": "3LaWtcQe33rTLKs9v7otpxWAXESLz8DVDKqL1Tc3Wh6kYM2Fv7N3kH8jVqgRaxQuUnp1Q8cfgVrY7GcXLfRgehiR"
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
