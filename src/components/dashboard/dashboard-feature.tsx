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
    "5PvPSBSQGsybiTm3TBK91x15Ai9fKspLVGtjBswPZ88q1NrJgURHUB3fmuv5NtyFQkC5eskqgKmrEsLfBXUHDQ36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BwKvpSVpiMfqxK4fL2K6o1jsYD9UzkQr9j7Gab1BQMp7dQmyPMZPEd7am845xUDooKUMTNQvs7ne9JnjuUggwAY",
  "key1": "5ca9NNKPh5P19QAa6pT4yzRuFCnFrryXWYrT4ZtUhUkFY8na3vC477EYCjYCrT8RKeqQiLiQuBHtQPFAxGG8jBtk",
  "key2": "2fuvmSTRRy5QarWqwGy9mmuEjix7byxRUEmcVsy9Pze7Paum52JroTetsYCpozapw41HqWgXuA6p2vVwPtMfVr4r",
  "key3": "5rC6qAQ9DL5MtxZ1uUWoL4bMayVB6tBEfyouSVAyPvvTZ3rxwjFRQQmvkrn416rqT7GgN9KjE6bJK5cTKXQPp6H",
  "key4": "bPx8sEHVEGFimwN9uYgkYxMHqMZY2pi3QLzj1EotsLnMYNCkKtYh92E1TvkBA3ziuEjr3pPxWJntBZPEnQHDN99",
  "key5": "4Aq9yMmWMp1T1kfdDPSCgzTLMcs3Ur2xWdmFBd8oNR2Ph1kr1XatWXJ462iMKdSGx7XjMSsaSSaE15vv7qVuzA16",
  "key6": "3ivB1SqRm88giD6pigCU35R8KUmuNkuR46g7r6oWVV1Cb9si8s244EVtYrD95585aaWahCUbeX1yQJy3LNKpBwW7",
  "key7": "4xBYhcpxQAkLpbLwTo1cAoGjzFkjPK5C39fhW7teuxrcXWa72zx58STKx9F91ZhYJ7q7d8jDcnALz4BEde8NnNed",
  "key8": "2Abe399pNyV19gDqvhKZU3f7n2C92fsXJMiCuTkh7VWK5c5hNU1UkLdnAkae4uaKZsVTD5mbkStiJRsruApgNBZX",
  "key9": "nfdC3KwGmo4sg9PJpAuwpoEozMzQ5gSrMEvcAtNfEsCdK4B29zKL22NfxteVTz6H8JwHmU9LEgAAcJu9MyfJBNP",
  "key10": "28QvrAuPjjhwbp9DDhUeuXSGkN3aXCnzohqq3Wm9NAPXuziZLNGWDyGgVywquDzeULZKTsFvT4NWf1bhUfKHGfN9",
  "key11": "4x9PWeLdDFMXbi5ctTqkHn1SUsa33Ey7v7TmEaaogRUo7tJQWeFcSZZonaEzfaGubDSBaYQi6pVaxG5eYmwM8oLV",
  "key12": "45M1QaZJJ7A3QF62cw3JnmSaETawLtFCzTLqt7jgHuPM4we3cMXFCWugTCTmfSh7M3PKes6hu33gkFcPwF5pBGPw",
  "key13": "5uszuth5eZRtLWWsEMJ92ffkJWnLtpeDyTHrHeiLsfrRC7a4PbBqmmUNtbHXziqCmoAEu9yMxWpoKzpiavZzEatx",
  "key14": "2a7oMVz4cr2REMKv3KNdfh2SGhXkaS5kCXsjLu5CoEiEb3aBwZ2xGbyCJMXQr7S5J66BhUiNPTL55hoXNzQ5FFHX",
  "key15": "4fXYUswPT3CyJ7AT2xXHmv1eMxwp7eTyL469Aus6Tz22KkdzuiMPpMaqMvfT67rjHcM4xPPF3dm4HFbgSRMjYn2n",
  "key16": "4KRNLH2bq1DHiBRZjPTcdVoPPSRUhrWN6FVWPaYPFHb5zNUejVeXLqmFSwGkgHjGUZ1XFE8LpATNDC2K2Nnnd83Y",
  "key17": "5c2B52oH9QEMKKLCSFak6zDK8hhhn911hNi2jxfuMEcVKb1itv5XuimVzABKzYfxL3Fbpk28wiagBbVPkxVkajve",
  "key18": "53N4gHVbZR4EHd3FvoDcHjwbCqfWfaWaAJ2km9XjCDVVha4qSZixDY9oiCX18CNvgSMqKFEsV9d4GrzW4VvmEToB",
  "key19": "4q4TsqXVYuAoD6gJ5fYbEsT7Upak6bHgkJkWyarpKEHz9KZGPbxNiSFiA9svUcr5LLGV6oKLxcEa38nya8wkNxn3",
  "key20": "3TYXTHQZiSUSYM2aHNfsBf5ieLg8c18bbkT7enNtSy91oqcBZmt3nHoitdYNLS16uFatbMGmjfjdZ9gWKNnrmPk5",
  "key21": "wGaXoVSgbL4oxhpr6wR4TNUHfQFsajXpZyUi6zdWyn9UtpYPTxCNG9GyLNCHbu4576cEUTUhcmXyF8CzYyaB8cB",
  "key22": "5dkKVVow29zRQfnfbwS4yMZsv5kjPW1keJmDdNd1MW2LZW3htrb5eo5dwFQD2X5D1Pb2iJgmQidwwULGYzEajHUq",
  "key23": "5r5FeQ73gbZVa4BVgmPzJEjQ8YJ3rGUmmFMyZXE4wkJtbAChDXxkrTM246ThXbUFRwH2gRTPSgiYLttQc9dRXT5k",
  "key24": "5PfzbsvFLEsWuXPyViFuirTJLw3Kjis2Htf586zmgHYNPk1T9deS1BXHCKAa5UA57n4m5jo3dJ8RBcxfEgWZE4wi",
  "key25": "3eqYoQQNNr2zTL3hKDdk3NcL8wJq9LniVGrx5ASksNfAsx4bm3yprfbbXgNgSVU6sFrdmhu7KJ5KS55dZqE6hf7f",
  "key26": "2MpBEvFMxK1DkyP9HRS1UsbXK1Vi7sX21GFYCXAkjRA9tC2Upx529j8ETUUoCtwiUSUXn2pQzU9RLDk2Hncq7AU1",
  "key27": "tsUwVspvsVPkBYHEwk1VcqjDjaBsbSYjkXJd8LhE49jwJgkzmuQCYwvfmW4n67WFbBknkQguFfP9UFHGr8KB9w8",
  "key28": "TghhxTwSzKTLPaaR2aP4W1YGwgdx8iLAHapwgzQySraqHMaopuFuUqQd5RoEaNPmBE7iDzkjdyiT1xbvjbajGRg",
  "key29": "KiF8v6a4WmeSDRd7zhEvmB8kMDexuZn6tDrhgjaLoB8mLQxVnZkeWrrKkuVvHY9dG8aGXKTCeeDgnhJDBmSiKec"
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
