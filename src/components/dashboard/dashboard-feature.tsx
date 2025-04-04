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
    "3R5P4Gc8vc3cYomorPWAasiNeummPSH1LDuDxoDJ4USCCpa6c5ptQar9ZDe9XFYPJioD9U8MD4n4L79LeoLM4ywP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BeM4YG65pC5o4PZB3jCeNkAEGttMtTD8JdG9MVeuw5z6aeqzoXW7rdV9W1EoBU1mhQ8Y3oFraa4SGZe7WrgZztR",
  "key1": "4eCuaJ7sLy8tLqu2McgFeHhDZZTCEbZRMZjM6AGA2QCarBvHghVVYtRsjea8RqkxgvM5TRjD7qg7nMv7wCe7bBem",
  "key2": "3kgKHqVmx7x3YNux4d7u9FzRPdZyMLmb5jxZWAeRmB36oWBTFmWa5VdqfYngZJo9Fgnfbom2KbnuHEeqeaU1hJpr",
  "key3": "5dFqSgiTWk4A5KazSPqVeMVgkSAkHkuTZVByu87XumdReKLZ5gbTQNSX1UNgvRn5RMcJss8EJJ5shqNzuM2tP8JC",
  "key4": "24NbVY692EqTAPiWPbHuEaCzP2uwaZoS1wFskMLaTfDVdzRwkHE958L8Fc7AjzDf83ao7vhyFjRuv2sStf93mUoo",
  "key5": "hsHFaQF7TWZeggndBraYmoftRNqo74kBW62yYNcv3dBd6q8RzEpysMvqauckG1f9gtfaZgyLffnisMVomwVjYWH",
  "key6": "5dv7aGhwRj9TDJxqiZhnVjkwEWUJjDX11cdAwiZyWtAztCVHuv51hz32FjyFspZQ3vDpnUkdgbwxWuLEFqY9g2hR",
  "key7": "5UzFmV7svA7UdDMf3N1aAQiavtDeRscV1taxVeuQDQRUWtFB1PxhwKjRkb6AUBBsQp61rTkpZv8dwwdsG1VovNSY",
  "key8": "5JwvwXoRBUcxg7M84DUraNUmPCuQja76mTcvjQ7wAMK3toNYRuCT1hybVTmHN6VFEeyngvtWRNLEsGVacBygKCGK",
  "key9": "acmrSVyK3cwRhBZywqe3AXE9UXENtt8JbvxEWDymZb2v6872uBJdArnVaYp3uoxcu15FfkyKbHMT58xTE4PMXQp",
  "key10": "4oDykYxzG4QbsfRS35f7VEct4TFv9R2vxydBQiBB3t46PpPh4pafpRX74Cq5E8SkD3RegmzN9GiZiRzj9rPmQY4A",
  "key11": "5zDitTkNdRokC4EsmtyddUALPairCyWWeVG8UYNGsemS5mCGrp6ShfVick9CyKnCU5RLpVa6g9GtZrip6z2Zp9nZ",
  "key12": "2J2zJvXHHyXe4h2fBT3bvfqKA9BsoZZMUR4DQncEhAPfBDE4VjSd7HyQWT6Uygo9oLSTVfWxVsg8fm4vsikVWC5i",
  "key13": "2kDFLiKU2gbEbQgi4xJyRy8ujSHCHvr7xkJrHTyrMf24RSjcY5uDcvrqdXjd2FRn4T7SsK5tupCwwKWNAtarDU5M",
  "key14": "3c3CZXSWjiqVVACMDTKA8okinWggbd8DydJP8H8BNjY7ytXYVJySbG8t6f5VXGygkhtEJcNJ3kxqMBKZmNqqpobd",
  "key15": "5Ps1fxWcmTbGJ2GizmwaKubtPhrQ9CYUsd6aqMwm5RRyw4WGi9JSYQyD1UKVH2VXisbtNTwbjQ7YqrNHcT75gXdm",
  "key16": "zyxvygKYtKmjd5QUmhZx95miW4cQRncftKnEd53jvi7iFLiFaGE1sn1WybY5Vg8DB88a4Gb4BKH7wvgU2ktqZgr",
  "key17": "5We3xGJFyVBUfADzVGnYR7eAT2jCnw3HP2ECuj8kqoupYxihRJLXaxJjLkE6fwX1nLQrAuoDbRN38Z7TpFM5n7F4",
  "key18": "3rzEwpjTTRzARw9tAnLEY1SvevhrpnmTRRKZtqjdeKX3dmMkd8EDfHfayFXTwhNDf3vEQn4Zbx3xCLGD1qj4sAdU",
  "key19": "2ztE9Ju42eeHUKbpLskrgHN2155ZmjmcTGRfef5FuoUme8BYgrZTVuwDSQDMEAzHjfV1wvDoxmELVFFLu8cgYB5C",
  "key20": "3sHuc4T1DNLTqoMwz1wRuhr9szJMxeubDTb6SMBn2DNdKuhJxbgaF6JEQmordRiqTZjmVcj9bxiVWNdpNq1HhN7j",
  "key21": "44Nfzknmhmq8Kk7ywuaxN7a3DTNSXUVst8kunrkTf3hZNQJJxMoiphdCUXjd6Mke9KnPZkVo8yom9GXjxqhmdWu6",
  "key22": "5UzEpyNXL4WhbE98GGzfQxxpkhw9AkGpfqt8DhsTRMX5w2DXqPNaLuGdpC8ciwPXGnw3bvYcdEBtpDQdgb14GFzH",
  "key23": "5WM5mLrDc8qaet9aSRQxc43QGTyxEpUN979Axv2d63mdfnH4nHXZhateaP31a44dg7S55jKk3aC2Gm7WJHsMMzwE",
  "key24": "2AdV1KeASgMSvDXVz4uJBx2NzLhwH8rVCDtePZDGo5dCvUj23LEUcyV6soxwC69DWsazkAu49jSMyPUSFY8ssbN6",
  "key25": "3NVv8q8p1mDGdiwce4R6XLUDiPtzPgt5M8Z4HeShPYH6DwgncQZrxtfaW21FR3S8N4rKkWNSnkcyrhbLc79TkQ6D",
  "key26": "34GhPMJXzEqagQkrjcyHbFRQed7TKdpHn3wqHMAtw8SL8WRts72vX5My8TU4dwrixVh1EcuHrjpnxs1sqGo9mERH",
  "key27": "87GLYCFFiqyeF9msfQVfLwTAHYHzSbaADZ7bWTMYThDkZC9nMCHdYAbvSZWF8zzcV7ac2gmrr5TxFvX8uYTCRzD",
  "key28": "4m2f1pfJLF4W5k7T5ib6ZMuFnVhgApJZwRFahykTR2nEKNQt6dwtjHQPDuMxuztd7RA7xwiuWDg9juXzpsfxCDoe",
  "key29": "ySRZxdDgkfKfVECkgWdMPLusFxSyS8gxuFveKCQtUewgBuoBmv1MBWYpfASxeoBrbXvaAjbZR4Gu69PDrkaVWcz",
  "key30": "5ZggWzRok4kHJLC5SCx6SS7byN5C2wjH7oEqS6suDZkmPU5na9ikNJLhBGWfNexWvhwDJniogPrfUnkV6xFPPDGN",
  "key31": "4fiq6FQdssNu1LTXnqzzbiaT94pCt7AroYwjLnbJun9RAqVZpwUxcSupMQ5u5e1ZrFdr2hiptL75ZooikdAzdJTg",
  "key32": "3VMdH9UfDid7XSbRqFigEbdMGT6zdj3eqhteznnY9DfQqLHqsUoinoUr5H2QRGoZRw5K33TXuVh5z5xJ8fGACevp",
  "key33": "sq47srrsvSqzbAjAJPgPgDB5Y5URjx4CXZkFtMsF1YKaVK6EDZdYrAdVDDFi1dBAJ6puiAQRJLrE1qd85o84TwT",
  "key34": "4QvEUjhVBVgFHE9h4zr6FrmVAaq71WwHtyXmzHCZMkNWxsPjLfbtS1YAzMseo4kroTuyBeybz3d7V1HcyxG4fNqx"
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
