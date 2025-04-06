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
    "ZHBbYYHy58mhCAe6sUWWkV3NRTCJ9iA2GZWc5yfvJFH5jrKbVULAmBLz1Tuz9WuRTHmTh1Z6aWxruS7YQANXEzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JK36g8RQVjw6RnqJouK3on966tocHK725GcTcxin2qGPXfGKrwrvmpqPRxuTGkfeWreYRgke1sXVWZmRLQBSmWx",
  "key1": "3mqRhSpKXqjiXAnnFGi2kkP6MqTzoRoR1ALYBREb41CXn9BpHmc6v3NW3fLKE4KL24RJEv9cmfkSRkhA6RQLXFPT",
  "key2": "5xco6gGLkXipMUcr1dNVAeZrm3ECTkQM7g2DNLFZpdS8jkkbfRTLjvJ4cEgvfD6K1F64QE3R7Y8zTZvNuQXaeWUn",
  "key3": "swBdoa48oWR55HVUSfH2cyxdwFxY9dat4CVsv3ntQ29ydKM3rPNZ2dR85NKGvwxJApz3mqGmhDQUaE7YT22LtDR",
  "key4": "2VvLnM8AfvvKDvsedQrCGaRmsjcqpUbMiqRWx2gDrkdYSv6nmwEB7XypoaNsBrNcWPZVVKArbNrfkDEhzP5gUbSu",
  "key5": "5HRRtzEWFDMQjFVRFhtoiZf1CNef98AoEwAmj94R3gYCFZ6zJiEgupiZAmfrmQj2UywvK3HgztYNUt5TxSWS2TT2",
  "key6": "5v1K2ZQQt4hSTZjdWAKkbsEztU1edWfroCEduyiRnmL6E1TzuHhihphxXDQWNfbJ43Cznb6tamqPrxMWZ2GVV3sr",
  "key7": "2Mtw3wV9DpG2c11dQGGUJ7L3GXYhTpaPAztxPMP7FACEVADXgqusVtehQAkdd2pNSpXafEm6p2T9Fp4QEdmCDydA",
  "key8": "3SRp8mh3Xm1RYc7w4Ck6eobMDhkTXTiVAr5xpk8GfSvGc9tNZQSn1DZhJU97EDapaA3RoNu1MMhExrJPzdBD8p1m",
  "key9": "2TffZWVo5Pabw5DSFoQYgK3PvpKjF41dSoyfE2hHvRzdPDie8CnE8ZESe7HcvP1QriWWWRfVFvYK7nuJY98ZGXYU",
  "key10": "5KaENM2YXvLqkA47fgXYFbraSmbFYKmeR9vpMB1qp5cm5TykZ3k3Td7GwNnw2vwM3sVCZ2YvxxWDthvKDsPhcKfB",
  "key11": "44MtvXYD5oc2mjQGrw4ULRTgeZyCrXUbefWweimkrzEuVscMavfJxnR5Q2sZ6rFsM1ZDAg1CA5SLHbyrpihnShDR",
  "key12": "2HDpNQswCcV1hf4EukyZtcexVhC2DzkFwA4JbwbnLVJvHBsqQcEMoHdaxHzHGghZq1Q1u2x4zYyKGJcQnTeYoLu2",
  "key13": "56BkUfcxcbdp8vJqT7A8UbbF7Te6Fer7dgTaLoTdCFaYBkhScDXpJ4Cf6Avywgpi3MGq7Bxd7ZBZvHVLbV6DD2PK",
  "key14": "2B5FA3AvoA9tZcQYGLFt3SkatkbPJPUso5jM1tCB5ocncNwW9CYpiwjZB1gF9nn5TJrzfSDczPT396aDkorj7wUk",
  "key15": "5e72igFAPMeJb6aF3vGUUgpJKxL4wADfE8X3dZVPq6UJPYPDfwsx3BWXaJJyFUkGCP6Wh1u25Mz7AgksMcWhDLUB",
  "key16": "4nhYvgKBM9cuq5WSRihgGxUP792uDjzwY96KEJdetZLQkQE6yJPQ7qbvSUXK6TAQNMGcrQYQrv6CzWm84csTCdK8",
  "key17": "2i2uGQULf3TZrve17fm5w2oNpQoQTgexiWCS8rb9XSR1eLbjBnXSL9KLjU6G16u6ZLLSC1UH2gHW19hjpMND5ix",
  "key18": "47zvAXYvhsDUe8CHdgdeoLfGAoqP5v5FkcA4viciVokQwFH9TzdVSncgv8hwTWQ5yJbaQvKAgdBoaMXKLkrH5hxF",
  "key19": "4QQ5upkRHBGDnp9V9jrbFXfaaVtae22jBXgCtCSa8CBZpn3izVmkxEf5D7VGRstY1pMmbYME5BFHuifKsZrmVM3p",
  "key20": "59jNCZnLoLhSrj1vQLjsRKJMueptQ17jfkCG4apGY8hyWA9xffZCEtVVHqgefMSmVAf59a2FMQqD39JZHPbi1e3i",
  "key21": "28jjxhok6kPhayQttbGgnG6eDn3ocG2CNGBKNdfEsbd7452Wzyc2W8R9TaLZJ8Gp3YKthQC3YGq2h6AmPhKUBCAa",
  "key22": "3ug67BgrZmqaGf2cGsLuUWv63G4jwhUQizPhUcfT5tmmEPC7RPiH5DAjY4fHXM55aj2DNyGUXzqqsLYt8zaHWHDZ",
  "key23": "ueXEmqy6ShFz4cFVF5YvDpgdmYJo2ouapfEqytz53eoM8sp3fQbd3Kk6iRLWu7DYVxz7FTXHFuwas1qpbP5pD7x",
  "key24": "cn712W6wiQLKi9V8eDfvBeZ4kgBMPck9nyBUq7i3UMLjXXSoigg7CH14UNHXooZRnushAZ8FhY4jkZzHSJibjcA",
  "key25": "3HzjvAh1hB91wboANu6tYkH3m2q4VxrvFBFhvM7U99jWTsVVgg1kormYZQDoyNvRQiE3ZhcykVLiXm7Eaad8HCED",
  "key26": "35GPvb6TfY2JdrDb1McBJbUNNXdLvP3stnvYM5KF7UiVzth2twz5gBhbJAngfVsrpRdyHpFdDE26RPhKweGdbBSH",
  "key27": "BFgcTrwN4GuxyVWENUyzZFeGmWCgb2TVAcRMVkbgMDdjFgJHnh7NXyka25tktPeriNGqEDd6bamisbSBtpDrjzy",
  "key28": "5wMXPHWbgpua5DQ3qvPUmCzxWknmfvRHPqVWNAhWtJYgqNarxLWQAoFAQddn7hQC5ToaYYHpvXyDZAUC4ENRSczh",
  "key29": "37UA6b2xDX8MdiUZ5eGFftWxiFsJusMBcfo28G9GyVrFSN4HCv85civSPWdpYdsEHZ2iwryJJtHVbnAkhaCpLDud",
  "key30": "4D3R25nG9kV6evDDPkm1SF7dMzfd42K6NQkqt8g8PngXeMCP2a4yFJATQypF7Wp4Nbr4Vw4gzE546SFh4BskrYCb"
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
