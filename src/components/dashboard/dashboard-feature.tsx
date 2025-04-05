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
    "5usg4UXcW1VvbwE4qbo278jtGvSf3p2Mj2Nam2nTaaCJnui4fLJFfDxUYC18EkCUK2D58MBEKvjEN6GXZbzLXZ5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WR3BnQwuwNb2tTrPQ3xQ53BR82GWQ3FaTP8fXrAQ8brn7kgGZsNuqodAsR2NjtPzufHX33isBUCqhKZgat5oWPj",
  "key1": "2RpM8eAE1eURM38Qqy2kN8AxuVLtxYwa6kW8ArzWwVpwiKwtSY9xb6t4c4nunqiWAENn4NW5RyANG6ApxSq6DRnh",
  "key2": "NctM4v2mewVCPVBTB7BwXtDChX4m6x1ZuNDR3PkFzh4XNzZpHLFrrovPgo9eSBSzTdmbBMogmE71KFFQhocsJgv",
  "key3": "2vndXKP3FzuAJeND9d9ipLyL4euNuXhPtfX3BxkdLRgn8sEoa6sd8A5kifvAn5v7vXXiBtQdaUPyhTwa9Hvy24G4",
  "key4": "3VT4FJysdxF3GKpX8VEUwdXcJxcVnwjdZ3rJbD2D1sGQc58DdmYyjgWWaDZRj6RUEFQSpUHzbWXMcjH17rWBJkne",
  "key5": "4gX4S5GQSGCbeudhNjp9nhpPTJRbgvxZqcFvH4Jze2FDJjEgVSA2fvn9u4fuemvwq9uweLz5DLkhRPCmG7JopoNP",
  "key6": "FkhFEy5QPwrVKjV3rgTVhLejHstb2y3TdMwRtQ4iZa6h6aseHmM7hL2q9aHWeimufef6dTic2arW8sFRcxe5Hdh",
  "key7": "5TbV6eYTGBMpEZzv8tx7gjsAAKtZ66x8vKGVWzrZQguHbZygu55eS8tvUdRU9Bg4ARi8488LwJpdoP4KVMNpVrvA",
  "key8": "2VCE1Uz4tKz9qQEUa68FZqPmNxNyEegmiA5fDTYJnAnntfjKXcEJRn6gQHbiVspHgcvdXqbjyk1VqAWMPFrJAW8K",
  "key9": "3GRuD9bQb5UWsA2mEaG3fEtUppQBxYXe7zsckBwh7hH1rDWudAYnKJsYBhqf6utsEbRM2PwWk2PygU7dhiMriWAK",
  "key10": "3fqpNqbDTJ4xpTgo8erfnnQezoVmEWpBhyefJPEfPM1UuxsqhhWNWALuCy3zybZY79nY8hPYzps1SqgdbDczatkH",
  "key11": "2W8TPAryi31xq9B8aCESjUtT37Vjp9xdYc8GzgvcfjwWkgD9fVakjR3YuRjYsUqnbHYP4cgpbP9QH3ELSjtCJqSk",
  "key12": "2yotxRuQmov9GKS6pTGzDDPuwHQ2TPGsogn8gLg8zwyCwvm7eAgTVZRnZNSsZwAsM9KQKPY2Phm82cYAtCm2WBDJ",
  "key13": "3X6sZpMAeQgjcHXrswRqG5U8YkAUheQVwhHfM7CwBeqU3UR6keEmgPANYGmrKT6Cs388SDSVgJemh8Eqwf6gVx5U",
  "key14": "5S5GrVpGRdDV4upLDnRFQowzWd4ypfymFFB9wjyKQo8vAT1rC6b1PBk1QRwtG43kUjZtpNnvTLsW7Bd6wVixDNRt",
  "key15": "5ULakrcN5HAicZF7wmByvujQ3rvaSVuBxQvE6LixFAFFe4ojXqmrm9Mwy6MVBujxd49cRbZ4MZUZLscadkR8XMrn",
  "key16": "FLo1n4fvH2v2gbJnBDJ49zkdSie9FzJ8WKW6PsrCNVfcKCav8ud75pcQxAdaePar4KNkGVvGWtqVv2iVTyHLatq",
  "key17": "2i3w7PGPgKDijKdUZ7dZrYG8V4U1V6oWkgLG49TY5fdPHDqyf7ZnTsPWzuHopp8K5pc4TB7PqCZaoDSgSaS6FdCh",
  "key18": "3esCc3j5Fp3vdQkECincbs9ysABAf7KSBvQZUZM15tM5aiJJoB73JE2z49N4Ywiu8Qh9v4CNiG4j6KrwebmwFsJD",
  "key19": "8uYJoZwK5QwHwvsMKsM9H9H4Ga3DbpzGovnKi13cHVPLGzBFAy3SZL1htJBiZ7JTheGPvDqxUU21Yd9Ta6pVQn3",
  "key20": "5E66jHwAJgYatf4Kpg8Pf6wmboVU9mdUZH8eQarqzkmof2mASxKXiakjYLUrzTSHzye2QBvdtDYDsLbFz9hAXgN6",
  "key21": "3x3XA9XfB1fFWRaAKB3FNHnD5V7d2CUK2yGxFt1Ca3R7DmwFMd4M4xxhVRaMcApStmRuHJQiYaBSFngukGCbPEPc",
  "key22": "4d78KynnwfUvt6SZ24SmkMSwvwzcNtRphJJotkExXf8XLuFBwvfeRRweriimFXTFRXbTZhk3MpDjbiqTC717FS19",
  "key23": "4guiLgNuKSS4F4DC8M18Di7GPfhPmx7Ph2cS1JSGsBD9D2WUbqcvgTSMRFiqaoViaUKPPvcMJrdf2YFES2FWXDRQ",
  "key24": "iL9p8QytTofAEQh1FPyfpeHSBDUKYhSiTvJcGxjSsYYfSivnnjaZq5X4tdxravJb3SwamBwiYibg7rcuHDEboSZ",
  "key25": "5HdXRe1bB8u9KNLVGYq66vHmPoTJKQrNGHEdcVx8cgMYqKXFqSfCDckRdXrKckK6FgWVeB8HCRafwMgj7MXrzhSX",
  "key26": "3LHmiR5jncgxiokY9wY1Z45px5ctXXs2txaeAcUfxt9gzj97Cx8CyNY97o1osE8bi9a9GQrR7E8jKGxFRcRZAU6m",
  "key27": "4nf7n8RNKSZhMbdo2CcPZ57Zbg3A7BozExHAmPNCWYFrdHeQLbT9kz7Sk7BpsDe2QY2tmVsSe7jV9jCoYxM2n8gs",
  "key28": "xyVpMC7ykf1VzPA1QxFCvQ1c1n6GyidPwpRvPHEZzFwLLPikWzZiQgamXr5iovYfQGUC7KmTRUBPvUXPsLLuPFT",
  "key29": "Kok8KRHh9MTxMZTJ1m6wLt5H6rDdyPnZupMUh8rmifQyajUza8Dicu4Qa4qRCe2b7tBgyFNWMjDayezuMrKsHAc",
  "key30": "5SzbMFCqgffkptLAwMvQNAyLvUXgTotpX27UDqBLMwbtkx9g3zj2jYPdhKhHUQjRdjxWjvS8nw8LYmyv98xmJd1T",
  "key31": "RuE7h3dXCR4HB6hegERhdUxmHoRX2xs4uMGfGmgSs5ERcuviY7Uaw9iDi8AQ9jABW9rUPYMPme9m7gje8DQ9X5P",
  "key32": "5ujVSCckRyP5K6ZTKBn31KawX4hynf46nU67VCzBrUuvPJQCCZAFnv7xbbbcGefbReXQ3FvVgnYUX8k9QRPMP4Yg",
  "key33": "r7yZXKeuDhAZKeatZBJ9C8VFPNiWEapRygwBnvE9FVUCftF4z7iWizUpuvdZrXjUW5NsLkqa75gRy9YWD7herwY",
  "key34": "288idoekLg1vyVpReQpGG4RaTkoBPXoFA4X7viL8CDvpFcBLc3BKLByyZzM5x8Yy3qMZBoS6iTBL5X7Ai96kyesW",
  "key35": "WgQzUUY31W5HrnDcnkfDVocHq4vfXe5nHHiJ7fDvEyxUX5c942EegY6i9uFDDCajLSBJUd8YxbpuGdb7yBRboYX",
  "key36": "TTiV6YRHTXFzkbnEGGhp8xm7AkztfCWVx3CeHmbShzz96HMwLJz67NEr7Rga27xLEPyhZUeVLVHzDu8FC5ySwzv",
  "key37": "3bD34yTfNqdWyWB6f2it6cyGo6hXRcBJumFjXMxwBX5L2Pve2uZffktKsxHofsW65bP2JFg91rSdy3b7KiFUR8Zb"
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
