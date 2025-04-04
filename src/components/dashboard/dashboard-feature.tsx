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
    "5Z7rrPqh43Wqr9zemkGcVaYaLdGFfCMHScJtGJjT2NTYnTxMac1qZFtuP8MaEN28L3soKJH3BhPnCpknoxw7QRxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nkWAzqzqQDXNBtStdXSHvSJuTGZtsmDyQC4cSoZXeozJezZKdwX9NysreUyUjyFEhEA3dCUdVuD1ZRFmBv8PNpW",
  "key1": "59N2D3FUX9RX4CvWo3Sbw84nU2jCjCn6XFAJNrAxUFoyK9AKTx7pkQF45gmooDiymeGCyJbCBz8ZdUGhAk2A2K3E",
  "key2": "4s9GsEEMsTyKgSwNcQJvHFV2T9H3wzR9gZAcjPFVL2A4y2ZedDfF4gGBswSAhS5jmKnJT93vKaGWLYyfVaaxoTSV",
  "key3": "5ZL1Jy84UmzNQ1nRrkP7152hHzwz3dHE856q5EyJht8n34sfZF3kUg2yiiyVZuTB721nRBQi5pWvZkjD8SuGze6G",
  "key4": "4Xav2iKiQv4Txw4c4YRh8nucC4aCNLUXKrCMHavBwdq5WxSTHJHsoffGtECpH82J7zD22bx5CNWBsnmhkHfLQWXX",
  "key5": "4FaeugvhkgeenFSUuGk7F2jZBoLZF3aZTG8SRgEKXXstsvTL6eULv2j6gugtdiSHJEB2V2j31euUmdpRMM7dBmX1",
  "key6": "2aPhw6CacK3GEMsTAJcisA5G1SAkBdjqwy4XcpaWBaVqh1oZ5hGrEL4xJ72X2cAV6JoFy8HTBHvFtwyxYHz7jfzJ",
  "key7": "24TqTbA8tuCTazqgJGaS3zH2tHDcZqjK5V2hvqyHdisfE1nzFN1drSJdJXsygrRy6SCxZ2ppayhFmU7QdpwMhRaR",
  "key8": "2aykkpP1jttrTAkGs2a7yy28yuNZ8Nmkq7AWwp6a56hG6ockXGjMpfBH8RAV15wqJkSCGpdukFspZm1aNPRLiiux",
  "key9": "SWCEytKfobM3cpY5c1S1vgVoVWfnh297Z9JSX6emMw8fqKPn2bvVFvF3N3bxFgeoTF7aCh6Pb8oy3QsxAjQWpmr",
  "key10": "3dqJHX7QDmeBpxUaKPrKYp8EwBW7bAA2cRf2P7Se4se2jUU849rq6G9GqUCDGZYMWNX2xVc12ysjJmBH6d9SLCG9",
  "key11": "2hz3335zfqVUxujxjUWs2nJDwmcdDTbwV2Dw3jsdCKbHgHkS4Kif15c38ELp4F3oay6bWSdRHrSAU21YFXKkH9GE",
  "key12": "2hPFPu2JhyP964tHbQbXXuhZc5vYzr9a3E1zs7J2zJjucfKviucuCQdUAXzvFEoKVFKmwp7DysdgZW9iHKaSEKYu",
  "key13": "5hcQisoVCCfE9cTHKS44MRwmPKNyNZPPCk1cdqARErjHyjzH3ugqRcmsGDfXYfYuBJ1fWE4LvuvQWMqfcoMFnYfK",
  "key14": "2zxT76kurN26mm5qL3XBjkbvRg3jVZKxvVNSe51NEZShzYC38Q2acJoiqZzMaUK8uNDNRAY2tNo8F1o9EVSJc44p",
  "key15": "3dj4ucwJBoqkGZEXtWtuPdJdaM3YknWimcJy7SYWm3fGpS86uvsw4GJSx3obEta28NUduUVaKksx8ycXTvNF1gS",
  "key16": "2onrqeDLALqjBcCSVX1EP77b9zHnWu9WAc95TD99HTRKGzsTVkVv3dBpfZrg2caudSrvvd3zBggfeaHXBmJZn9Go",
  "key17": "3oBLJrcCf2kCAY6UAHnYS22LtyYSBJgekkJv5N1XRQ6KzZAzQxQXoi2RFuiErtCbbpsX4f6B4Yjv55BzMEwZN6Nn",
  "key18": "2EQZsuJSvJszzxSEwVgDiE9PQZgyLgTJn6C6E7H34qYbPbd2NqArkQiXzCJG85TbdVFUkuf442NsPVBeCPcfL9No",
  "key19": "3V41XPErdsZZSGTht7qhTUeuXA2wwBgBvaeX2yiKrVzBQ7fm6rdTEMYxvWAi41X21H4eXAyj9WtnW2MqTuLrEh7E",
  "key20": "61pvpjvwuLdMABCMPX8B86NabrHp1ze9mQqfLGwu32mtGKHkejDiQn2hMpH8GNQ31b2aKyjpy4KRqF6NrSTGATx7",
  "key21": "3RhFBWzE6WkzTEu44y9rUunCKnHSjRRB61GywMARGSxQWprPQJxs3PiLZjQ8A7EWc7S26WKMnNh5JEiSZWXzxLqW",
  "key22": "4QJ268XybPen3PWQgGHuXQoGgUphV6Dm5czyWPmx8HoiPHmdmGja1qiRg9gqP4CjdvgAKqg8QJhNYojsoStzmiko",
  "key23": "2eTtSmWCdjXmTm8ygykrXb2ja2f5rQzbx3zfZKvKPkeE5YZum2hzZdeJ4Xcuk4gXkZez5yzWXVwYnu41DQqew5yT",
  "key24": "72YNnNU21nVtpPB8TdnWzE9yuGzkPUPXqW6FRnXLHPPVyQngb1zaEs8u5DMNrSNhM2YmjN6M9fVTXeqKxDGBzmU",
  "key25": "5EeUHonPZgRiSq4o4usXkkkaSDDdMrBihFL49GGfQWK2FixpoVc1Cmuh2WAqXgDesvbui8Rh7mkhLXoDwPu6BH6Y",
  "key26": "492gBTuPKCSkLNa4p7GaLybPBetHTJVjzd7nq33DXr3HgjmtvWnYDrngjBgr7ZotLangopK9gmEVHPjUUWStzgCJ",
  "key27": "23hfCdRL8GgRgFox9ZvBUgP6msv7axorc9MW3F9HShJgW6atYuXnkCPBgfyZYtLMMfU6FGN68s9vnYrMEhvLPssi",
  "key28": "2sF7tvu435XRPjY6Xxonz1Sx3Wufv9moy3PZkDPa8qUGuZ1UysGaRyfrsUNMLVMVUQHJ8nZdYoQA99bEpCGWoBBC",
  "key29": "27mZKfSaodPtWoPhBVjHqbYJTsgAsxDGmhUU8EfVPZ3qxFUJTgDNFXtcj4oDiCNoQkrUEMmb4y4TEBJWJa5T44EV",
  "key30": "273wk8ne3pQdnxwCVo4QiSFYqubjdjnZNdaJtC6TTwJ9hPAP1aXHHw68N1yKQHiuEVAWmib9ekHVicpM16FsYTF4",
  "key31": "3MU9UrFS1nAxSy8i9Tr9923h2tmTYXwmVuk9WaeHmZvi2S6C8jZR3YZ6hEkK8ZeEjooyUPgk5MXTij4aWa1wR5AJ",
  "key32": "3tE1LXhPwteusCrL79JhYQDWiKtqtF1K7BNPovmS6mkyiLPK8nqQ1RKEBwcoELpc4tNBpKxiyZFSxyiucGUFEiYT",
  "key33": "66V4CzAKotaBW9Z9G66vekYzM2rjtMdguc3w1DyQh7Rx1yLEnncbvz3bJmppM1FiJhaWPSbS8o2bLRCWuqRMtu35",
  "key34": "MKBw8GEayVNwX83TSJYC2rpmBkbQ2SC8xik4e14taE8RsJ8i1kPPXcDVdTTbDEVV4yDiKYnuaojqX5CDwP5SDhP",
  "key35": "44kZd7XZoZrGzDzCTk4Q3tz7vnLVfCNmUawdjge2QrHCYmcYZgGQEMhEwEuu6zsPUUhQgNUDgRWV4bm6gFYctdDq"
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
