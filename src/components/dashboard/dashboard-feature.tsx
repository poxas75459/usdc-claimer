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
    "3d9WtBkCbUksYy5dybn5pyNZkRsdK8dPw1q9VwuUejzdxykCmvr2rcsEpT3wa9APzXfyD5YFiEH3DnvTDuNSSjR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YbFvbG1i2kmk1FKwrW7on8vaHAkuds98RLsC8G5myb3kymnggbPjykchXBCmG6a23La3dScYKzeVbCy3QTcxGQ",
  "key1": "4b2ghcboWHY93FAynjQbXS39xkpCyqkxG3Vg7mSTsr49NgKq8UfMC8mb34trtjHNjMyNkCpq92aanxVGM35XBE9o",
  "key2": "3D9oYyrF7RbpCV3H1QYwEqsCgxSRdzjKNPioG9Dqy4tcp7ZdQzEtpftU2uaEM2H73TL4xHeTS9PJ4xVwmpaQmWpU",
  "key3": "2pjie5XF1aFGoSuvd28MvHfz5PwBs6yZ7Jr35aSTrZiBiU1jKXzMuuxF563143DPrUXhXpsGcte1jWrSmk3Lz8gS",
  "key4": "3PA6mGw61gP25kapLQrXiJxmrmJasoFmGyGq2RxxafsHQdrWhYfdZahGaKEfNiZM23vgKCBeeH5nHorrkMCKgZce",
  "key5": "4jB7Fgm5C74VnKagf5pLRCJpGncaVjxRY8GD8YGb11hXwUMKb7u2hV1MZ4MF6UHZ473iDqFKQqKHTH1GZXfpZyjf",
  "key6": "4ZB6NfaAVTBrVJNtjmoHFphz4arNhDxMXyUQJDY5MDqftr56ktDYPVDrqPz4fizX5aHY93B9pb2M5pXXe6qPT7Rp",
  "key7": "62JMEJ7AnbofCVDCtxVfuwosMwCtfZw2HLxf5EpdegNzchtw77JY1vtDGbwsWPooBXDSJ8eCzGvJS4TrRQNyV334",
  "key8": "5Z6tz3cd1wqZqUfXwLbHUJ5KLmhqepdgrzfC4DzszJQ5JzTfZTGBHtkcmYSJD5CJveQkGRcBjfwJ37vEMZB6UTdB",
  "key9": "hUvwpWcwyTeH5EVn7w1vwmb5hP1mwE2LornP8MLYgCJ3zmPt6KuYB4aNe4PHMcAesbsasT5AgHWr6hyzKGZUMce",
  "key10": "2rXp2UE1j1uFR5Z4Co3QpLzgonaNxMdCwvX9imESGyww8GftjSUjpCiiWbwQVx8G8pU9e9bL3T6zb81T6ksmdUgd",
  "key11": "SApFmsiWNj4iJDipXWxVUSnPrdmg9TLiar2QRzMJA3qnwAx8fgvWNz1cDAU93V8K4odWgU7cqq2URodmwpkNTRc",
  "key12": "4krw5ADzpnvwUtTLqip3qZzNViuBnoUwXcJDgLnRUCX9Va21rosiEd9rd2SmzB9gCuEb16twKe7qKG7nRkwwKKyi",
  "key13": "2Y92GJsRwBqnGXiqVf9gMgj1WyKBbxwR8EoRsZ68cckNTzCBJqzjtqnJWrgHUUoDBhmoGoAsKcd3pzRipjUy2dkZ",
  "key14": "5mxRmsaieoszWEJkGrRmCSXhvQYe8kbPZqQKmaDnRT8oxGfuQCsmDLW2PLotjBrhpFgzsEqgjgLV7aWxKa7ag9kX",
  "key15": "UHzCGZ8EBnHNTFeGmkKLxkVBAzKte35ZBVGG4LHVpgZk7dG2MENz6Ku7DvvkK9UWYQUm3BBwzQ9vKPRQWeLNLiD",
  "key16": "5BaSHHyoRyR2cb4LzqWi663qriPF92fLJ7eAEor9GKegAC1X42DNbtwxpi9pZ3UX5d9XsGCo2B1tTX1wMv4ySeD",
  "key17": "3puzwSPdwe5QTsMoCh9DREHHvsK4D5NouESqRAyemdUknfxujJsa7okTsgxawzrixsJ36JFrmD2vSYVr4y3hoRe3",
  "key18": "3FxRXeubE1bqdBkQvMy1BXhe5mzo8rzahYRNz4uBKNLSc5M33xKmj8miokypGRyyGnFgtgSCcfkohJrW9c5KY64G",
  "key19": "5RMAxQ6vUB86VnaMtznPpVofWdZGuC5BYRaPku4JDNXswGqVAC4VPAg4i2U3pComxxUDDSZcxWjbYFYm9gnCn7vz",
  "key20": "5g8pCYLe2mx4uM8hizoFnxgv53K52CAFkcFiCBjTBdTbuWdfRPGUS6fG5eJtA3YYb4XPkhpqXuMdrhxc5AgfC7m4",
  "key21": "9iA1rTtKZ2cf6Msggi8p5n8N5Yn4zrBx21mm11qzYdpJ2KmReefx2Ah95DQfVk6GqJyX1L5w2ZLFyYtpZVNMXsH",
  "key22": "5uPULDPjiwjTu2eoCRUrwNu87mYNi1LjPfnqeqLYybKYRyit7wynU5d3ZMyEfb5aQSd9voQsiFnN4rM7tg3i9H22",
  "key23": "3Wzrfvp7ifnGv7CtAMVwHhoJhN7BFKDPwnd1ouqb7XvMh99rAEuMihWsDmH1tpuqD6a5vB1nJL4j18CwPvZdkHPs",
  "key24": "2Vw4aypKtV6QghEoog1k6SoDwUPCYZZZVgDXtchuAQJ2WfB7KLdw7kvZzHKzacMtXM7vxHsngYqb8VRZUvThjhp",
  "key25": "QHtw4Cmuy1NzCH29zeGvrLwtRr8Xrsd3ezPZqHmGvstqoW32XhsnPy1g5Sp3nV9TK8YhMtcS3wepZLwo1sFbsbo",
  "key26": "2awCtYb3FPN61Ju7WCDxiiujczPou4zYcTj7Fb7MmPucdXG2EDtK4jRiR3iaf3nKVvMvQAEb2W8eyrXxo1dY4ott",
  "key27": "3XDBF1jd2LecE5HicboSGKPiQL3XuBNLZK9LgqYEESZoHskL7DaiySpJ61VP3eC7S5vKqPV7oQBWjwoz76qnamd9",
  "key28": "4JtRynuRasxw5MBwLhgM5X5K1PgpkL5otBMucHiZ9AyJHHbkyWuaWsybXRGyPu9vy5FYLchzvKYYm1wCnnikQ23X",
  "key29": "3AzGXuZkWcRWqMWfKi9tTf1DkGA8F8ySxJN35M4wzxiMgWC2Pyna2atB7a38TDYHFuW7r4SWN4f8XhRXHK3NowFT",
  "key30": "2Vf56JkHUgDCCyABsg3PimNRxcrxTPPyBphgwaoTGj6gBM7LXisBb4EpdPn2Gu1iL3Z4huzBdGQoepp4aLuedFvo",
  "key31": "24ZHwptirzncncJadRZMby8jLMTK9qaCictmZQ2KKnUgGKmQnYn36iSLThbyMewsFisv6Y6QswWoJYvdPyCY7m53",
  "key32": "5EP2VjUKBcKbnspLjAwFgmahFt8xe3AREzRxm9WVeENodpNzvcoo4XiA87bFVeFmnKGaGNS3pDF3BkauxZ3mf4Fj",
  "key33": "2yW5gHHvFw75BmUNm65ZnCodRLVC82ZvMqh71GwbcN2m9g3fB6BJv5GeRde1jVfWT5qLbYW5zWgirucENitHYTMQ",
  "key34": "22VuXV9o3V79hWwzVrEdNuSPxa3E595r1MwJ1XarUKbknHAaxWBVgbUcZa8nm4efGwXEoYhgGgrvta5WMm13VUxk",
  "key35": "nXjnr7gsQJ4mKn8aAU2in7SBzBePXAfqGE9Jm73Gsn9zcoGjGnThhUWMQ9SwsYz8Feq9rW2oxADZWArn89XH6xT",
  "key36": "4Jh6FwLsSKGKfLGLjBDv1ybYQjzWsc8vMVCoVQeyWGkybW7izv4DML8Es7qC5DjoH7j1vPM2a8yoKrNLkdeVx4L4",
  "key37": "2ryE3Rs3jcidgDA429poZabeZ9hMfC5gw522DVyk58g6tGBsdRXD6WUjTRBNFmLskxfjVPM5ud3vJx1kYpxJWMh8"
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
