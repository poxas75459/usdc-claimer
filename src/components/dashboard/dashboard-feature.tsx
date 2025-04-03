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
    "66EfCT4GsujZMm4HAXKn853aHX8QSzGPWRc1Bkdz7aw5qfBVVZyfpXxDvCQ53SFFn41tnRUnqNDmNF7b921TPMFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqKGMV6QLx3MnpKEGYYgizeEE9FWTDBqQkTSqCTtnN22NzudxC2KyPrV4A4RYpATUX82vBXJGPnUAA5KKUaR7fk",
  "key1": "47m2VpWMfupxn1P7jxgVgXxSoMWPuHjisBX9FdcbhsbTpt9EWQDEwcrkDaQdiixwrnoCFWUYqpQf3ZwB9zicCrPQ",
  "key2": "5pnW27sk9J383M9xRdEqMk165UzFKCnMDR7opHF7TTPiLA2oM1LJ5avx6pVEWoim3KN266KwUCBjLzAncvo5pKt1",
  "key3": "2bwPHP6gmfbhyXikcmGsf3keZZqKHVXFfHfwWfjcseLmge5JgBKNEpcd8xXtkqQh8J3FTzoRni2ZzoXLgPKgEuPK",
  "key4": "3paGyjRTzFfvLRP6cDasTd4cNoA5fhoKFmc8JpULkL3UfRBF9ub5mAWnjh6n2WKBzLWd8St22JWSvPosMKxKrGXF",
  "key5": "4AFAMNdoGi4UZccKjHrm1Fss1SErk7gPKvSra5FMW9oBNKnv9GsqKmnY2LytpEFL2YGVeBh3iTUHrdpEr89iQtb7",
  "key6": "5qCW9A4Vy7B2cARQS56HzPQMivVQg5aTZGTrUqTUVqiHAwG2UxuzbrN9Tmw3cbZD1U6aPCMTK6waTskUtnhc33sd",
  "key7": "3vPpCEMV4zET8KhPZPBg8i7Lx7pdWC3ThUtYkDdsxTtUqDjQe6ZvK8WqpUKGxTZuDJ7PuoxuRQK85kcjiWvJ87J9",
  "key8": "4LENEnMVbc5njbhRFGABUgobxB8xVXkuEZEgCxdWDKBiiSJJksk4fTTsZfCCjJzaB9DayscEqJiyWgvJucvkamsS",
  "key9": "2J51oppu7yB7qPZDXPM24oQzds9mUNUQkVFjsjCQwtpDKUq3ZJCx28xSbwu4vJfjnxdatKetcTE3osvUSUoEB4cy",
  "key10": "5RVA3MAdxW8UuPhyAX1AuMBSeDwqaEWNJrxDpfNqgaqDGCKU8RZBmu8nnBdSAbqeq3geyfvJXgtMD5Pw7bPYUQP8",
  "key11": "5z6GecLdxYDrLyKXauScLwWuXXmiYmkMdfQL3jJ7A6fN35PDftJhEGFqGfp3z49Z9ETWxQXeXiXkudtyJxrpRcrn",
  "key12": "35DtEsD21Ga8VscGdXxRhtfBfdQR5mw2GvhfDGasqNtD8xpzKZ3BnP76qK6yfEVhGQnXvfnRSWraAUuLGvMWugLD",
  "key13": "3jZUJeRtor1h1Midi6z45bxaoh7LeqmYEhNhP9g2PxRtAMgcZ3ZmGokCiDprUnRiTq1oVigTTSTngVPW2B7on5Bq",
  "key14": "2PspZiXYz38VeC2kuzyTptBXUQXwCLXUiqZmUgxJintbaYu3BaAoGxFut5hgFE1g4s7y5tLfWp3JcmdCaKSDA6qF",
  "key15": "9SjDkL6jqmmgDKPAMKdYrqrSqptZQp71VEQdyB2MgpgcuumwAHwiYBCfPQoCdZnhmZ1wxHAA3LyigD9uNJqNKtS",
  "key16": "35cYCy4vNo1SHv3dPAG5b7L9s4VMBpFwqpkpWDhU3qevfurxkm7bqY9Au3djLELko634CUTzMhyvgNgPnqvbyq3v",
  "key17": "5J9G544eQ8r9KdgKpCnaVkHW3ZLqNjNvGsaJuVgN1i9p8btCgYYy4c7UzykQ9TL5uEJ3Vpdww1fzjbxxByFFsJDh",
  "key18": "5Sr2x5GxgY7qrymWchUuYYuBd5ubQgPfZ8YSUiiJ4RWW6nYXnN4YyKHnP55Ayt4ofFpAPtjNtc3mmWxPxqLRjQxA",
  "key19": "5kMdxzz5iTumozBvBH2KCQQxzTZFnK6VkXJgaHm7GrvTsGv8tmnrKmDERWFwQh53LwJEz3czupWP6xcZayjW1L6D",
  "key20": "2FV25pj7hPWvNcphf6FVa1iukvUMYNfdh15BUYZ97LUVMtrvHUMJG8d4Wh1RKSMNKhPtwef5ToFS4iRuvLCe9HAE",
  "key21": "64Hfq65D9HtFrNHwkD4PeM3421oC4Gg9aCSqEWHXbdjqbPNVLFv2qqhNjnN5qQhM1dHBRathFjKzyakxAztaamfo",
  "key22": "2Ximt2G9R5VX2LC7mQw4C1T7Pf5ne4c1w2y9WqzYxTvYEqJVnbX58B7QMzpwmtcccsG58mucUv7oBYVHbYBxksCu",
  "key23": "5i3GdtAMmZphZGUG4rSb3uTC4VLGg3Uq5HLYr4i4UZ3iy8GjBDfQgLxS6wG9ybDz4hVNZCQsp6Xv47vJSESxDwTa",
  "key24": "3cWSKCqbZyNP73hXj54trivZzuicNLg5M76bsWGagW8u971PqbURrLd46gUrYfDmBqq8Wwy8XYTK4v5W4vUs8yGT",
  "key25": "5Fu5okSryMn4zso2tJmRUhUWfGgWfB5Un6JsJf4D8GBPUT2bBcf8QKxhygy25eQG1yuJNFbMTD8jQo1ZLUzRBgv8",
  "key26": "5FDDXh9afDRN8ZdZ6oo8nERtRArK3ZFinw2S8vkJvGxPi4yckACHZgpnyaP4m1QuNszNxfh5i1d1VnqYZF41qMzz"
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
