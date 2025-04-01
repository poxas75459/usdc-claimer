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
    "49iVpVGgXaziRD8q64hTMVcVqabKkysR7RRwAnRQcHxA6hDY8tjsgk6zB7Kn6XKsqTLEZwwBBvW73B9hxFUembpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i6hUK1TcQMKRQskua5jTxe2WH1x1pLPuuQCbnqxAppfuwSUiJyrWQupBRdghYxvZEJZWKsZFGLZQiotkByVyNqf",
  "key1": "3VJHH9zWV5Y6xDiscFG61yyuZLXWUHzsTq3rPZzsyGw8QinZLyZka4FfEwnnNbhVvmyZrpTqntqrAdmyc4ZhLFkR",
  "key2": "4NM1yvsDZDareaXp3ym7hbE44Z8Yjk49onkMURNfFoGWvHAX9tgy63DzQukw7diZSy3ZF8MP7TpQ57wmnH67ngY8",
  "key3": "5pGWZBBJco7tmFpwXDR999xCMknhvHatgrBZ8wZQ3hYzRNXHJpjy24auRFajSWAmWvQafXn4tVe4WUhzciY1eTrA",
  "key4": "39E9H52TE9jC3bVTZoFRTmuxPaYXvKtb1K3N9g84LW28amW6QkVM3DU9XwLuusFucbxkYgbDkCocVbfoecbm12cf",
  "key5": "59ABEeAgn8D18bXYpHTybLjWAWGWNQTKixKMnfCjmDfh4kLUGZVTq9k2rGbQpAS9mrwuCiNWo4V9X5d4jh6mNfQy",
  "key6": "4tkhgoQ8BAa9ymBgFyCExRkRY3hqBuPtYPp8Amb78pd7cPViFhyL4aqEY1WAyMNU7U2UsNBqN9EYpcx3n6XRkoiP",
  "key7": "48GqEijxzm3rZZCQPZEBhGxhNq19Y3CDCofANBiqA84QEwnhfg9cvTgMNnwgftfHKQS7obJd7gSV3zpb1H53LmGu",
  "key8": "5rDYnsiXT4MomnYsnNH4NXYeNeXtCdVwfPEgayWfiqLKQgKTFfUinTUd5CNfpKZbFjBtpNM4iecsQHt4NZ8HExg",
  "key9": "4matzvLA57p5NBpi4duQNzU6Ngi2Yppe5wPS1ZYHtfkmzFrp72op6h43SjgeNmch3Bk44W951BEHzS1enezCjwSw",
  "key10": "4nds3bqPAPPoeU5tg6nssBQ8G5nmqRwK9EhBJCVgsDwWsrynFzkqkVJHN4ghhsHBd542kNg6B2g8W21UR1ZWHtuX",
  "key11": "agEVqCG1TWYUcfNrtKeupsBhDNg55bP2FME7MmUKpZYdCnu8hgADhNHiYG7M9KYxVS3PNUZbHPaNZyFDuiE8ELL",
  "key12": "iyAuA6B79N8rhn8n1m3LHbtqyPEezmF9X3gGLk8YQhpbbHafeCQZZckywPb28HJHvpDaGMaSJvknQTWKmkffdXw",
  "key13": "3Ryqnt1EhopX7kA5eqr6ZcQA5QarL9ABmkoRmFadF5xknRx1uPevf15i1eG4GXDR3DparhmCW6iNicBQa2okioUx",
  "key14": "54PUG7BCEjCFcJEiUZpoo6oiyUme1RuxoHiN3W6RdcstLZfDDUMEWHiDSxsdHgR2jtmgY5XVnczQpwhS7KAB2VJk",
  "key15": "47Kn9JNvPCLYL81doSohyNADaY6UYDHKj5z6hAVsYJjnqxG4np69mPWK9qcfxy1PP5ySqxt3yZmpibtmVJgdGn9K",
  "key16": "2R7HokZ5wgL7u1DBZAC3kzqanbcWDEyrVRYBZ8LBatCfyLGBrT41Hwa2zocXA8EGFAGqrKZRZVbArP8rUC1xBG6r",
  "key17": "5FqoFhnZcbtRR1rLEnigr6UDu3LHRBVvrCEGLF47RDMAHFManLAM7bR6Rht7PKpue6kF6tPa4vTZPz8z5UYCaays",
  "key18": "2o1PiYNKCSXAciEej5vfsEJcmvK4GEisLdXnK2WW9nfxbYeBWmFmac24m4DZpRuWeFaPMBpMHiyW5oS9UGZTT6K3",
  "key19": "5hFEbTNZth3dB1QCn14ThP9VMfW8DAS447CAEQojid6Et5aL4ay29478TvbsdK9EUSxxC8WmvQ9XGDskqa1vaJ6t",
  "key20": "7snxc34Gkbq3Y4gYChGXuFA3JTWYozVe9kshJsZUHSqyDraRec5VotNELVb9EPn5HPLyvi6PbmNc86ufpb8hsjE",
  "key21": "5JJ3gCwxXCM6vWnVfuJJqAk54jbZy3USoS4vJ94zhAdmnbRXDAhZAfN6XGP3BsD3nseSAUw3jtwT2Z7dHQvZ5E67",
  "key22": "DbzXtsWdU67nXhYHSPNY6jwmrQ3AiTEWzBe4A88Dz4ZMzq4fAu9EwZnVLciU6ABTVaa3TMt9HLfij8mkykDbfbe",
  "key23": "36u7Z5ZPQEouz5tChGJtjUT7bUbQxF2SrpcgmCrJy7ban4uyF1iNSorG7RoDcsAQq8ZLdN81dUF4cVEKSQ64FvwT",
  "key24": "vb2HaxUDCpgHzBMXz3nnRMCLNP5WUiUdxLKwzS51pvwoVyaZLgLrEMSq6iCXvfuGogE9PDhXejwWWUdTSfx4Fq3",
  "key25": "9UBvuCs2iz8zqhguvBUSdnSv8G2HCXaHEb9KJysV8vhChHZzkBPACA6S8AN6UamsQkjusriNyUQ86x7caJPiwip",
  "key26": "3AQKqJ4RvwtKd4jzZB2quEsYszuHc1UmXPuBUGCTRXcZU1juSyeanogk2U57XXmyPNLcZ7aLDKp5xgSRJm1KY5iB",
  "key27": "5p5gz5PVLEY9cMEsw3PgoAaGFzmLPwQ8Ji2ZA2KHBT1ya7dVWMNRNqJEea8Lw5Np6mWtpdyHZLqxxtoDZTepprRA",
  "key28": "ws3vpnKp6LrKNDnBoyemiyAMkjPkgFe2wc7cAorLF7merk6nzuKgqm32VQtgBGHMQqxCphrQwGGC47d4hVHesbL",
  "key29": "2n9XyW65xkosPwJ7YHJEkyz8WETnh68iMZJZebGTisNj3qURFX1vFTxAMM8fZigq75uoBH1Dk1yBaa8bVsmG7DMS",
  "key30": "2s5FNniXT7VbXsmTEaQ2VS2kbN9pNEAb75UBUmfndZTPJ8HMRptV1AFEUVtSEt4vhDZb6U8i985T12KNEs6ffEWo",
  "key31": "29JacjWFt6jCqwuv4rZKexd5KcfzF6uZQ4DkRB7eeg5vN63qp8of2qa3XrthpLi97iECx8aNPzzFifZVZGmV9JSJ"
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
