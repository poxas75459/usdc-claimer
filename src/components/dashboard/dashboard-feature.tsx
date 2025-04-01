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
    "5MJkF36YyCvhk7Csz4QmYapaNDi1T9MhgodpWdrbkTBPNPWJVxQyAjr3Z3rWXMH34R4BT9bzSXwUJ8AgWVpnBbJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkxyVC6qQXns1cdsL2c1zRihQnJ7JdVrEKaCEewNgtwSEZMxuKKTcZQKBaupEDdTrtfjg5zW4ZohN2yy26VDVDE",
  "key1": "2RZL7GKwgFovP59uP7jfYdE4hgYNx48v4DxYTcHFC61Z1KnB81P4FYa4NAAxZFp1ynmYhgEZejXPJtNxea8kvgM6",
  "key2": "5MkzxfwrHgjsKWh4y8RKkLKzr3DRnpWj3oqRbWmzZgq6KVAhqveUEYBVpxMvcK1y26oXCBL23Vy5wdxWyh7H52Kr",
  "key3": "2AKP2PhqC9WDGiXVJALoGRw4Q9XxCLGSaw9AhwsizQ5Dpu1eZLFi1pCVgck3gZJFSUEtZumrabKZkqrtWq28ZSF3",
  "key4": "4Epr2i9CGM7cfeEgWQGahsDkvFCLctpEKZ92T5oywsTBtF5k1yNWrjrNSyHrye3m6cYAfWAB3vmX4X5bNxSEFMJv",
  "key5": "rPJw5S7vx1QaVcWv8Qp9dp9HgeWYVGagrQrCjrK8E9MCstxTfikAdcGU9uhWSXzupByrPaUAFNmA3b9kuPWt1r4",
  "key6": "63S7fq4afxhbP9NG3jwarqGFACUro6rAH7jZaxyMPePMCUTWVKt5Go7vtgchnNVPXgDyazHk4oqWjBHmM9ixyRXw",
  "key7": "FyUFrpwuS2Y5Do18x3Sr1DsEkbZJmMCEZjiFzA9Du4KMNdyriDGJZNwptv5qB1ZX4QCmtMm69frX7oWoBeRwTCa",
  "key8": "uYSMLKk7Am1nWehW5wjc5Y95jRQmyGV2pKphgmQMUYgYjby2y1xc7pA2zuMPLtMsUGJJwMnv6sDw7motxSvYaxL",
  "key9": "5hPG68gzoxfw4FSL8k8Km4i13co4ppmxKRocHENncdMcjWarHUFhCECFqoKdgELiCaSZyYZ3X8yNuozM6ugJKaax",
  "key10": "4eiKXBnMZXU9ow69N6CWoMCjyXQmaRLyxJGJZFDd9XXpCzvbBwh688Ge4sXR7LXvqzg6biDypgcD6dn7YrPKphKk",
  "key11": "253irdhA5cgzqLYyisheq1CtsLEn9RRi3fHHLAUwgtDx1tbk5Y14SrE3D3n2HSA88xvPQVUCXCHFjZa4gHcUoufq",
  "key12": "3fWVTAHNoZEqSEPoNNiBgkLPoX3Ncd7mez8HJ6xehLAza7SYzRkLbM2FjSjtbvpDqfDmeMuz8ewT8YgTiAAsqsTF",
  "key13": "5b7gJsp7ifZt4WXPZbZctVm871Wgsk9USyzQrcGH8yGRBm8FqqiEYyzDx7FbmUAK3fuzngVeEfVRqFgKHgTVtGVs",
  "key14": "5SqVFzmffggLME4tjHUKFF3Ttd6TtxDZHNL39MDWeNb3KFTM5ar69bw3MQMJuuTN196TafDUaJjNeCa8fmUEebQJ",
  "key15": "3oHexNb6G16TYVjFRxTCuRd2ArmtLjTap8VLn9JQLtMLBGaFxF9hUTej12jMD7XfK3tFK6YfyjjhpHZ5H2w9niMu",
  "key16": "2pPAYHhCfJ4b9eA7UAw8PPnNHtmy3STpTfQSCLXimt5msaQVBqGqNuEFKv28SS8q9vEsHR2D9V3izoujXzng1XbG",
  "key17": "3XMJ5igKGvnBzifNkhez1NWLvJButwmLLBKXH7VsmTj7MroiRausReugFsydBbrh6WYRjYdUiM3ij2mfnfZv9yz4",
  "key18": "62VurMp5qtWRSiVWDS4cRNGmaAdCLjRC5a4zGs8yoFbxAtAQGQqG3xPVc2nFBWCW16VZaBfsJSmgDeNYhBrUaB3X",
  "key19": "3otftG1UQt47y9CgsJExNK3i7dhuNP66bevoMHq4QzS5M7Npu1XKuWA8NemwZs8QxeEFP3vprNmXD6w1QR9hk6vf",
  "key20": "39GiGVi8S78u2Y49ct7zmDgVPde8zK3g6VGrq3FET9sKkcNJwqSZUEtNh7oFQqqKuMwU1U34zkYbAnLwSBuTgCRS",
  "key21": "613whjrZXWX3ck9RTD7PP3G7RXXqW1oSBo7ATtJUtZ7bZLx4AgSzqfUTfn9CGrYvGQQ7B3HhE9THqQRkZJjiSn6x",
  "key22": "2q3epHBWYYhHsUXZdmtu4bcR91hiG3GZCaF3QDENQy5m27yjVoUS1K5upevFxVHJuNDavJawgxAXfKBE7upmVGd6",
  "key23": "P7ffycqwmGi8bfEUNX4odHNdDi6en5rh7E5XenPgHPJqSnjnyyVkLBCn4niFRtCedQxoo6uu7VK6LzwNhFMbg9D",
  "key24": "5eFWPj5mD6cmXgwnXPxsBfNEfVo7j9fwYQzA1JwtG5UWub9R2sBojKqafySg4FZJ6XxxTr8SkPdCwi2oFC1tKcSC",
  "key25": "331eBmcstyNYFwDjUzZbNdAZ7mHiHkpCxKLA86pgmVJBfU887WxcuUdezrFy6oua6ULML8tzRGe2WdzZ8n1UtAxk",
  "key26": "5vCTNV6CseydQmyMKaDK3kMWpoLVHGMwYnUWt8uWMH3tqbP4mA3Ypo4ChQ8npGWgNuNthYGG8qm8xvGp11sqNnKK",
  "key27": "3Tkzjjr2V5Kj4psaZ5jCh8FL9nopuvVvmb7rdVtuM6eqz3zSuxFr8frtc16vS13319Hq5i6kbwsxCGu8uNy1iEDG",
  "key28": "2Ug1x9rppUAix9vNuGL8cwVK8DAok8RsmTkkrxgAyuAWTmd8yrcrpCHH5ZqMFnEG1bjhHCmEG6MNxxJqVDjJJPq1"
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
