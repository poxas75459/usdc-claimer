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
    "3ozWhYsRZCobS471QfUh4iQpDWhZMu3ynybDCRt6HWxEdpPT9Baxwbi7YizZDAhJE3hwNhcJSWtTbcB8oh3Z5Ddg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CodC4sqLBnpv3Z6Qx9ZDRvY7j4F2KHVxQw17usw8J5n9eKiLcpVXj4fKXrDZ1JeVjbePPrCFU7Lgf3dhWetwBz",
  "key1": "5uveZMW9BKkpRjLhAnPSbHkv5RwQdkjww3ptsFd2M7CfeMnBno8aXLmoTN15hnKCcCXVg6eodP7ruTDuJKTFzEhj",
  "key2": "34viSji2KMvjauqLkoQ3GswxEE64f71g7mdRPa458RncPNawZ6s7hbFdNFcpsNFKmJzSRZtcaeTqXmgJmP3nNcYs",
  "key3": "2wLpQ5gQKnPj9GCAni6toUmhFF78LiFQzMeMxTgd1mqT1johJEx87xbCcjfc19no5P3Nv5a7yW7FvYgPA9Ct7DpS",
  "key4": "5PVBMhx56yiYy4YErry3XujWr7m32oDKwcUUz39mCeLzxXhhuDpo6qJfSGU9U4NnRJSLozH7rbeqAVUFn7sZY6Cn",
  "key5": "2LfjuN62bYvXDCZZBkMLNLTTkMcGHzS6gtmkTzEAPXe481iQWWVw7NFpFE3c1QqUAM6dnYXMsvMJw8qc1iUzCxzp",
  "key6": "5Tm5nRU8SAv2QwrX69n24CmXQt6yhnRviXpUWQfoWAxwejdcbnAtXmCyko5T3c27PXRHVAGVNLrJfBJWZJDkUZeJ",
  "key7": "dffprokysCiKHuSqt7fGfkhrNFwvwkEH9c68acLTXsJKXzVrAh2TbuRzvs3wGRZqbmnNghw5sDvMFQ6urkq9Xwn",
  "key8": "5VnZPQgVEfsBmveQmN56pEBnjW78R9XKfouru6j1XQhH95Q2vRQBdzmZugZgeGxbdvbzjd8PxRHTuST5WzFGz8di",
  "key9": "3GxNSbonuX7ew9EhyzkZ6wgEsr7q9T6bajgv4k6G4ZEVgue1yeNdJ8H1SZcaU9MGMGhAzogKnrpAb42BwziCGaYT",
  "key10": "4aRr6uhoP7JzfR7GRCLsD9a9XJ3Htw7BkWDkpitVJp1H78z5Qo1BGnGvZ3bfPPjAWRa6t5bN6VuEd3BBjXaVjNB4",
  "key11": "2KXsTiu3VQvc4cMt8dsTaK6MLenKudGKc2B19K1xLyQyXVsGfRh4RBkUx7dyL157KJjABypACu6kyrtXe3Qk7tEV",
  "key12": "5Z7aTS1pPM5XrQjXv59xj187jzNx1q2thSjJTogw2ECn9tHiBzsWZAr3ymLWtEbbS5mAEXXYRZtTgiXduu8KDJ5C",
  "key13": "34gXL8TAKYMB16Uybc84Rkb7EXreuGBTRzCjg6JQZ212prAoXPJ4Rq7THBg8kuiDEMndhh6eDWHAvvVUhkiKJvxF",
  "key14": "5FAp9YzsuU6Sg2SStXs24W4RnJJ3gwrX2dRL6UsSLtZ5CNEbc7oxbpmBXmKnYfTGdtadEtpgggBdCQXdRW1mEUoG",
  "key15": "2UrwvNm5xgzC152wNRMgA8KdejKunqPJuvp8SsEjL4mBgxkCBvRWyqUUEbwTyNmpccZDiZ4cNFsjCkqybZykzyJ",
  "key16": "2cG53QNamRtBw2P7A3jLa5tfvtSWjN94QvAAQuUVSsD72QhRe2PneZNK4wQn2PkA1kYRFq3uPK5bSRKaVX64bosB",
  "key17": "36qvo5o5Ebd1Pm1LUwJYfaF856pdUDLvgYt7AV4rnGfNP3scfwcQPmbC1FiAcpK3mi9aKyznc1BdeWRHefW1X7xi",
  "key18": "5gzwSikhainfXnWvJsfDobwVr9nKT59HbxDHGqpPRKuqXzzbKmoFDLDrPL6gHuSoGfhG3tpSEqcq9Vuj2JcjBstn",
  "key19": "1jk6ad5hdqTEstdfQx614YYakZgyeYPCLZStH2w2PJfZcZFK54hG9JtYquDApX7SPmzfxvUJVbnbV8dn43K7JLA",
  "key20": "4GPXhJwoKQLNKwMDRDUrh7mEmopm4vJ6u93MuQ1S4rdMEp9HJX3ggKLnNZqM5ayhmiXsxzv5CZQuPDkdmMYvh8P9",
  "key21": "59na4gR5NRAxaDVSdimJKfcz3D4kTRQPxPXxdDfuy5GFnP9rAwCPkJerGqPujeNTenYyb12qspyC6guZdB5G78Ey",
  "key22": "51chqN1mecKft3dYAdRmwusykTnU92HPb4nmN7HVNjpNTyZM1GDNjXy2bgFtC5i5dtdD6QCkRioafWo5vRCKJ3UJ",
  "key23": "56QDDHAArm3YsSgjtWdWBTUzgTAt2UjFFqmq5qwmRwE8SfPKNPxNiAEBEXKPdqZqjqKFwsD8vA9QQsXy51LZw1Z1",
  "key24": "ESEGP5zK73j37wNRBb25EoCAT3rQTLXKAJnX7ZWiXkN4oowxRs6Q3bf1AcMJodFgALw7nfUDKTa7HmCchJmvfhu",
  "key25": "DTmwHFVt2CgJuHE8aYdzdDZi33A4uwppMMaoq2VizrDcPg3F1bLiUUkDVtd2NG7kBk1pv4S5P1AN419rGvPsRUv",
  "key26": "2SQLiY4V79xhgTnuehrrNTvgPJDUoTz6a47HAkhi7fstMdRvTt3naT9Vf9DHiPgmfA8X9WBJY9ntvFbyACVRWSU4",
  "key27": "5S4o6GsszwSbQJenfAom1hMw9LkXiyHErWuF3Lo77WN2jUKe1SKtUcgCYecSu34Yx1oTwvXYTPNZssReXxL4KLBX",
  "key28": "2ar7PDVidMWVJN6reB7jk3E3gJmpgAkPPRKA2a3DdgbnKPiQkVMcmiFmPS8VN4Fjnn8NHMmNQcbtqasjWiRGH47c",
  "key29": "5t1W46Q85jBN11V1To2YG3UjyPAqAkkobJwbwMgSLWRwievNzLw3jwKtTgSFLTRJS48wBzshKJzEi8ZdALw1NGS4",
  "key30": "mqddDBsiXPQjz2ZEcSmSWUz4TsPSw1xdBaJhNJyt4nAsDkojua241fSsbHtopuGBctEDwmNb7sZZDLUm6Rnw3oR",
  "key31": "RVWHWze4AnXy5hDzXirxTrtnSG17x4ADngdJx2BUDCjLEm3AeMJR5DNCGzmBK2BktiWD5uXJgai2T8JPqxK2PCZ",
  "key32": "zHieBiN4S2mqRBAy9ujSj9gTJ6FyQh9zCVAC158XNSyMycaynpVLXVwZ8amawvjWJqzbvjEV9MHsmWD2hAZWgze",
  "key33": "55w6EfyNvBYKQhLe6fHFdfMVphRpLW7jxvBFpxJgTMAtw4iz2Y1NMGXnznM1BdAUUUSefNaVaathdvAUNXRtTEQw",
  "key34": "PNSdm2xf2CcAgregGSn5fDyRZdoT8KsiQFdqQCrpdE7DxhzPkugpEYEn1Sp4SA89u1GHCPaRDsuU7ccCPJsqn99",
  "key35": "5GTqXuzRyRKYdsmWSwyPbL77eernSaEVwEtyG86CULmW52PrQgvkmqwL2fT7Jtx5PzU3jYouGJTY6M94t8rwyrXC"
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
