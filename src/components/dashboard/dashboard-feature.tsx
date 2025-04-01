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
    "5JgJTt83f42MXtxRLdp2XLjsYHosmfUj2Kh7PanyDUPpKRUu1HVi8UpxGE41nKC2Xt2VFXzL3pGdWYE2pRkuHJfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rk86mGjeqvnRPkgPhhutT6oW5FHx1qkLZ6dzdrUYKvDQnyB4VzJWVtnCkwSS9MFhA9Djoy1FbgruGcgJhWSjCoK",
  "key1": "5stpojjVJT8SfPXFvkxY7UiaS7JjmYmm64JJiRDPBc5MnDGfUX8brDF1i6qVCYLq1nEBBNbTJ2GarFt2D2BNryeo",
  "key2": "3C98Kg9VymA3QKiRHvk1aLMEi4FnFyYzesfh5Deb223AZKWE65mwxRqtBJiHnXjUKkduRjAWqENaFhtF7d6GeoC3",
  "key3": "4kcpu1ZH8EAZ8dKzdYJCq1Ryek5Na3MCRirNeQE1XKQTRN95UGaAAKrq91U1BbFz85cfPgBX48wD6N9BmdZcqqLX",
  "key4": "XCZudhRSf5rFDBNJFCHa9LjXirkuiGZ3PL21fFanDHFfBsqgYq91AzQFVnmKGjJqTYukWDZSYxMTDff1Mm2xfg2",
  "key5": "5zxABBRgMphmG3ex6wrp8Cmev2x61koZsKh9TW2KKmjRC9b2UMkzeDtGd79bGbDf3LAYaXYvmuRBHt9nL5vuZZBN",
  "key6": "2SkrVHUtDBjTb7Xce42SGLpAYq7wbC7MgU1Jta78DxiVZbYvnotetEh554oqUTPx7TUASQUbYLthEwkywuJjezWA",
  "key7": "3y3vWwWqGpxc4dJWf7QPGeuFJttB4E2LNTHCE7Q9arXbZbXDPM2GmRNZCxgtqaWjhFZf2STcjEdBWkWbXV4zXqqi",
  "key8": "2H4db2siuQRNVH3eqQr47C4M447vwAQNMeR1h48VZh6tdarqLwv97yh5oqhJ6tNHHR5PtT2PGBfuFJgvMGGEDBue",
  "key9": "3oxmR8xowWkb2ancTU1fPFANsbYvcaa9hjmyKASUyZYPcoXHrMZXQ2BtweJFvG1HkdZ2pQ79Dy4zjXA8TUhYtUAg",
  "key10": "2WDS3gQ3cUjrCKvzvMvDrVAAN5NzQUBFHJ1sCkcPo5sop2HfVd5y45wcm8uyaZA3oJHXwY8jnXFLzGjc5yaNUt6V",
  "key11": "537Qnp9e1UQoVyotduciJgP5toKArZAmgZ2yJkzaNoaraVEZsyF83P1GgrHCiq9se2RnsDwg2jsoJ1JvCCRB8413",
  "key12": "rE3ErETxVEJaRhm4LtiLnjWvRA9HrMvxupd1W3R5TfAmL1pg4RW9kAW5feKt18zxBRXWbQeU8YWnFjeugc52g1Z",
  "key13": "3NSY9DppUcZVHHvcwrMNpBYcoRZEdn3qLTEkU8BQRkKjEVWgRX61ciqmt1aXd3N7E5vs9mjaHgGJpxmQ7HvKVUA1",
  "key14": "LGYgYKWUXy4B9Bqdzi5hKGpC3d5Gfbhh8iKjkHEnnHBuy4r4dsyWPfcfzmkG2BJtUWkDT26PVaH1iwnwjfEzsPW",
  "key15": "5m7rmyLzyqemQMRZH3HKkYnBrwYVRX68SojSr7N62iNHg9TuQSzHxDz3iRc2p5pmf5bagAcR4owXZPuf8Xaaf8aB",
  "key16": "27T5Y4wQRssLTcgwYEYEHfPcvHoQPkq2Mj2oJ1s6nCChbcFLxHoaqfAQ9t8QrEYwV6TgFJn8vCaMXPDRCyzEeZGs",
  "key17": "3GTmysYYRPjWr8v6JYMMCKkM6TdpE84HpstYbaPzr7MomebWJLG3A4ZwqBHKCu5TZTp9QgLWx59dpseupFegw2AL",
  "key18": "5yXpmw8rvQRST1NHKtLNqwD8stC5nLj4i6xMNMjmrfiFRP3wdtmR7WiWFcuNhiCBJ6z7GrNri4gA3N4Yd4BhDypz",
  "key19": "3ZWyiPQLJTYfHw8Vr9hKgzJFJTrJiu1D1YEMtdJwCejwUhbXAQvnQRfWJ9DJXzgSNy4TMSyz2DLyaxzns9MRvFDx",
  "key20": "2HmULu6sjhuvdcV4Qp3icwTJz9Wqch4feeJpvwHgKE1FxThrvbqVRvCY2VtsyvEvUNx3SurZJDCfZnTf2RuphLyk",
  "key21": "3pGc3sRrgB2mZZvNFFE9ryZRVSz2pGaJwgcUBgZytycx683i9PsKrFfxjfcuVm6WKMhMeejnUT9DVXHJSfMPSkaA",
  "key22": "3vZwsiECUDRCfzFrAecrAkEaHqrvYtfWFbYnLgoRKwMNvrsLvFG2cMmmKjdrzNDQ2MyB8DHTeTZqfruDLmgLCQMQ",
  "key23": "43KLR6VsJTbmLpfZJ6GqTUWc5f4k4ZaboZ1uUVULnP6Fik6SLZzeN2iTrq9LAfHSK4m6M9saQPNk3bUiUTt5fN9H",
  "key24": "2GUMVt6v6hS9t2HtBaG9nHfDbJDAzRfWvjxGa4FxbqbhnqLhFVFLNFAbkmrLtUjEFDkBbaxxGZKeXE4i8VdocDHf",
  "key25": "2PyQa1UZgjxVLeUMrHYpzFa1YaaGhz4kBV6cFyEiJLEa3qheznA11h8rnNRnhvsAhekHpqU3gBkr15ZG4FbaTyUV",
  "key26": "tNLMDnrRZn7m7bjDZcPwjhjb1X9AVX26PaKrFXwxEiWRzzESFe2kFhoeGHFCUEb196N9wQLd54DLvzrijuhW5tZ",
  "key27": "3E4o42uWmhEFJwb9cKQ6E5sQQPutkbgb45HzVDYoacr59nVVzMyMaLVTmhZBaCt9TmJzpEhSvBJ1UqKiSE4eqqtC",
  "key28": "4Jo78CtLYknzmdStzShiULpuytvk4RAcGt1DQ3K2qnDoTAYDbJW24kBgcB8EbYHZ3HD9NM4KhGYQE6bQkMdPGQqp",
  "key29": "67ZHHEemZiUjNCdMJzvMKvspth9xF1i5TxC3FYVTb99MKivLvTeGcbvyBRLPMSr2g1dsWPAV8eDpXsQVmcGMQAcF",
  "key30": "3FLE9cuXTPK5rFxr7N2nunrHLynvNKnQR7dU2wWNaWY4poyYERCSrjDpoeAJkMhaZn6fMnhnf3YwQkw7uWpnhfEW",
  "key31": "NVpgknbTuWFdvrbszuG6EqRDFGYeEizynp5UNRxr2eyhMaNa8T4d9krH77G37U4iJNmCqLFVoVoCHgr63HqpT3A",
  "key32": "7QBQvLH3WFxngxrwkMm7NPU95Hn2TT4ZqKXsLREckZnwcjftnsqcKJrocq3juRGqese6CsSk9yXcMu8f7ipNJoc",
  "key33": "5SEDC1ctAc4PswseG82fMZRPECQHvYakgaEvU5tR86NfmNx47HSdgV7VyyzP5QvY8qdirGReNtNPJYRjoeRH3u9Y",
  "key34": "3rpEzakSgv68Bj2vVMJ3VntCTT44j9QuA7HEVWpvumvAbPF2i1Wb4n2CtLwz6VoYPX8LRvWtXJbwDqYmetQF8fxj"
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
