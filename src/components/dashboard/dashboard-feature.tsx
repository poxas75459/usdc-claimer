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
    "ThSxSvxRA8xfRgps38XpxcD5Tcd5Ys2zhf5bynxD2nLmzfce1r4z2spDhKzPqQou797NAWfom2q4rnTucJPtnDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WsgDKp33WZu9iRdzxNuSjkA39FvhNcwxRbVRmVkeBt1Zvzq8gNrMnzuW5q83YA1R9q1X414ReYu6Uq3xchYwiBo",
  "key1": "4wGjcGncztBgfT17yZJHGBprMdMXMcseG4KbptEP3ZfqnwAq5y9wuTo6pr3bgTshaCNgqqGah6fi3LByLjjbdn92",
  "key2": "3F34JAGZiTwCZ5fbMw6eQoLQEsQAULkhiJAiZbHPaeWPckWSiUWXYHSmj86zhY4CsPtLkNPc33spUX2cyCHHTEf2",
  "key3": "5sfhekEsuMBEDTrtEdFiiD1rWm6a75SNB4NEkowdRyJjX2cR5ytu2oTWV5Z3kU8xbhy9jP5iVDG4TvUpmzmLYznJ",
  "key4": "64hpvTSeGWpiq2aTYDeUCreHgVfe8p7vpeqYtqpEgAEPJpu1Ep4r1AN4kBGRwqodgLrUhY429JjsNU3MRwEsUV9Q",
  "key5": "2FjNWPNtsPxjob4huV23uWzGofxrteSErVcKneBzNbFbZ7EG2FiZZ3vrYyznh5Ft4c4L7fpyGSeHooGUPecMxuVD",
  "key6": "2kLhnWhA2P4mnC9sLC9dy8WALxa5ZAhp8uGkY1Lyr511LYws2mZfRcu7gwwGDYpsyvHJWP5uie1rFzBwXMGJnYct",
  "key7": "2yAARqFavPurqyrbkeQAsjX22ArvMM92n2Hixs3x3qddxmsJCZY64Xap2tQKTb2VfKvsF4gtiubjiy95k9Q8L9tC",
  "key8": "4zd35QFzeBoAyiUuWySg4Z1fSSv3Khyov4gL4Ejhsa9yXgw2tTRFvu4fB2hhWr27JWAd4EH8BA89wE46BxXV3Gu8",
  "key9": "21WLyGUDA9yUKWe5esdNcbrPHa9vKPqUoHbhj1toSnyXdXnjJcT5nWb6QnA2HJgbgRdzdSBLee8omzmston1ZqyZ",
  "key10": "48SMzG825KmmUDMjSATnfEKyhGtJVLefe2MgR68atk2PQyMANjnxLEGbhNahasPkxkn9EwGyp211RmXFXyJj5onv",
  "key11": "tZegrQrjUGvGvp9UbUhMdrtkeAfDdUamZuHeEvqvt5YLsdvNXaDL32rVaBqYCjnFY9egB81HitaFTS7TRndLYHL",
  "key12": "2frbsQ4mnmpUiYAMQRvAFhb9oqwRZdHSSR2aksGKq9sUHE8GjCvwm7oKSdxvb98hqHJzRVNVYpXdU4Eue6X4dxEX",
  "key13": "5p2hCg8VePdSnGzsMon92BguDCBsq1jtXs5TUtGcFb2pSEk7Vzqk3vPnADdz5JLo8Lu3HVMhysFBd1YEpK6pMqcy",
  "key14": "sTctWzLYTNErr3tzyYy8fmZmrFj2GQQZ5odB3HyMbWDMrfRQp4huL9WS6qqJDEbdchZpsY4fQ2kvVNX9bhR8gdm",
  "key15": "3YDdqi2Hp6WfNxR8WLRKgy3P4HiYCsJo5jv7C2QS9xH7Zs8Ji3JhdcM4TGsR3TBvzhJLqQUL5TVZhwgefwDWPp7z",
  "key16": "5rtsM2yJ3aQSbd2poipsaji1pfc3h4sMBGzPpFJsvd7PCXutd3bGRE7jyn8CYgVrb6Na4YXaZncC9hJQT6zHQmE1",
  "key17": "4DCRn2fjXHET9xq4JNpNWfxhSinkHRsD41AyMqPDZU162ZnPni6BYwCDn9it6ZaNzqzex8LhzVFkJzUfgh3EP3yc",
  "key18": "62Umr52acD1vjGYNCqisXxfusZGi6MVQdfX9sXpW5j5TTUhcTqFt47dKT8ZrYqVYQ9xEyeBoMgHjWVrhnmXLQjzv",
  "key19": "2HPN7GYhJfsKQJtwE46Hck5Qt5UhnZDiG1bZ35Nkuj6prJXaDZyMfVnCjkcn2K2VGmdKa82GCnUUFNP1Su5iWCU8",
  "key20": "5k2TAnHfLXko2eMi88gu3LtLSTGbWFtjkgJCrwG6zpeww9dUd8P13EBmxd2MQ1dY7zXhbJqqhsCmaWoABuJ8mfaK",
  "key21": "5BPVU96mg9LY6b9xYCk28X6dPxy2E8NYhF1h7shRdW6yAc3DRkAerdYd9Kxa5DauTT2Leztage4dN34Xg3fdjiRc",
  "key22": "2XqaabBWcU8ezaxkbahUGD72TAWa5tVoY8AhbtgsocWqJwzCjYBxhtrfeiB6yU45ZuQ5YmxhBUmNxf6H9f2f3SMp",
  "key23": "2m5Mb4q9w7Shb8tutmsSRYiqAuyqDZaYnPRQayv6LdF4VcUN4z1nH39aBiEkpstvHRsMnBRYhiPBzKTNknHbntdv",
  "key24": "pXPArDvAoSnG8G3VCMUJGVn9d6Eg4zUW3drQ7zst3jGX2VTwHWoGqPbvy8TaxhpWmgxYJqKVfo3WGVoCgxuAKUM",
  "key25": "2hcBiPXZ9AXcKfwjgCjoiVhCx9GPcvNnmiZq4TF6Tb3ooK5WxGoZr7tsq9hgLuRmpUdjwmq5dK5rz5m3qpHG94tB",
  "key26": "3hnJkw8BEemGkZDENcgmz9kmajgdPCeBcgBBsapTpDgN9rt4fLYZPyEEHMALt6gTqpAPsCKT32FspvsEK6M2d7Cx",
  "key27": "2SbybARSKTgcwZ4iqNQGspv9VAao9v6ZKpsStogkZN7uFb9bvZBL7QN1Tncf6ewX6xmjG2cMWhkjC1KACfgomDiH",
  "key28": "42gjq95xdcqGJUJqwotZDxBTcCKEo9r3w9YXrdtAMNt4xSGXtj6cHSMwwLuKp8zM96QMnBaCxf8NuTcZdq9PNHz1",
  "key29": "3wEisRoLvxpQ7oEq8Re1KKAsw9ZKaKfRDk4yyeTDWykMmKF5gY7VSDyTpdfbMNviCrxAcHAMzempsEmBR8BuKKpK",
  "key30": "BDD6m9fPCcbnQjBhVfTVcng2rPuYxwCBnfL6EMm9PB5E8wtP5bhCoiXBtPsksofUk4MWCiEGRAyxhbHsqZaGpnR",
  "key31": "4X8hPDvK7nfw1SyJTwG8XK645yjBhcZgg6XUuKqXkciDxR5gKqWsiMh6fa7MZVSz9juH7vPECQButeV4AFtrH5H7",
  "key32": "3f7nYbQQCT5vTJMaXrxCrc2R63YW27pbkaPjPZTzzPDG4phMcWT4pg5TRAQeBxQ8tUmxCQcVJHJYXJAbFyyzao3c",
  "key33": "61cgL3RMLpNrZkcC1qC53hxeVfSwfCcp7yxDL1vgKqugXd9F4426ZENSWmxF34RMPB2m3t6tX7qqXkK5Zci3NNaY",
  "key34": "rRv182JXHTAvt9rxYGex5ZbHxhmfpG7SAub4mnJZZ1PJHByV4Cmap2i39g3eGnrwmvmQKzMBwtz3d5nPnLRHR9N",
  "key35": "3nmRS7ZYqNxvsc3vN1z1ng5HsmBEn79Ug7BSV2WUonZpN7hJgSuQJuhLSaQLVVvXLHMLU72awG9wrwfbZoFWV4YC",
  "key36": "4Dj4ahbJPMqrz6J2FEKyBrd4MuhQtPMKvFCE62q1VSRFKqLoUE2TJpsMqihnswsRuejCJNMatDjcrMPzq8mR2wyA",
  "key37": "yRmLHX9YTGcLQKx1Bu16ssDgas7DeTMdz3RVHLp7zeJ2KEhTSyj3PXeEdhAZa8Wqn3KU15zCh4kf2T5aeiLSLCq",
  "key38": "3dL8Kr6zfuD3LeA9ej5yRiKsUSacwZfwBRZfZ9CsHmxvFCPdp79eBL99pXi85r6H2rTXGJXX3CYUNNcEoNgcUhrX",
  "key39": "52RYDwDYkeyhv3AqLXM4junLcGEFJwcHi1zaJrSasMttFMTnuvMNsTMqZkGJrY7YNx3Q8mocreiJeGMorEB7tzTR",
  "key40": "4KwpoH3ZnZWSu6qnvHdRZcYNT72GLPKbQvNqFpp3DyFUaVzKgjSUyacmmsPtJqPHG5jE1kdUDq2kGEKE8uBtBNZ7",
  "key41": "2z2cV7vEJSwNitvt4Sk9Jr8wFy1DSiuEH2R2eKCHxXZo7KyatBScWnjCJuNn6YAeWwE4bnS9Vbk9uawuqiYfBsZE",
  "key42": "5QRv3mW5kvLLdfCnbd9UJZrWmmNDavxsv7BLJNBJnnnFhsG9G96p3E2KkeA3B4WDYeVhurAsaVyqcCLL7FkTGEV2",
  "key43": "2ysznULTdT5jEEh3Dyt6X2x9AFjZvJHNaGmBDab7rGVZBFoQJHSD1SDjAL5LAbbCJC8EF28pdA24x2BNHVK48qY7",
  "key44": "5YnBViNDk81DWLrRCbFgj5rhpqbLp9WAAKtybArpmVtYyC9pMnAtYF3Wpy1ntCWs7E2g8MC7k5HKdWdB4kSdQ5hr",
  "key45": "4RsPWtksLmtegnTHt4oBmM2yvivp2ActkdGhTLhbAVq3nEnVg4cNZyhUtfCs72R1WDBJCcx5jje51vxVPeYX4BGw"
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
