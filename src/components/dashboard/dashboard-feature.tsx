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
    "2twGhTJc5vgFgeUtFwv1GkEC7UxjNtztSGTFp5Q1Q3rs9yJucm73kzCnT2PV8LFMJZhN52ZApHMY1i3c7WQ3K7pE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dF585Vkt54LC1N2jZWpo7etGL3N1c675EvnN4j2PadsoA5ZMvHWADPernfmRBU5JJm7Bs6qaoPT9SoLfNoYDm4c",
  "key1": "34Qhoj8Y7iNj8CjU68P3x4STJKCuqEoNh1zaeGt9sSeMq9eSKj6nRyc465mV9PgCcNkSDVDjLWtwuzfHHvwu5its",
  "key2": "5MErhRKUVYRji7vKXKoJgth3xaG8vhWSaFXiUHAH8sBRoGf8PAJG4psGdURGGk2taZ1sEDKSvSMcXX25gLihqAQn",
  "key3": "4FpuVZMrHKiignzNh6NX7HNG8jK136fF2CvMehGTVcGCpnzvAf2WZDKXBRviJHkrQCzddjhVdbKAn5k1T25vn3dD",
  "key4": "5Q61gL64pFFTKkeMPLCgJdfciTpe26LbhQcRVAgs7JrYDKWVrpBUarZbdBzCyHjVMqfgeZzgsNUFLmAcRi3HT2ZP",
  "key5": "27MT3MR4Hu8vw1s8eDPFqTHYxAtKsWC9b9prvpCs42q5yCJxoZpm6nuh1vcqB5y6tt5WAuHHqDb79aNT5kXy3gQp",
  "key6": "5KVjn8g6pBPRgYtNh4kAbmNiU95Jcdxuw5dDLEyoaidbv8wuD8aQ15aEz17nraJohUo7Cozn9KY8Nhvo9qYS3Szg",
  "key7": "5NxSmro7XFVrthETiBRCuJqjAKq7tKE9StPiLW5ZeBRCWdUe8WWCmVrzuqzavAvDmfX8icyxT5fnNETUVoy6SCS2",
  "key8": "24z81zUryjwijHQwjonoqDdSzvVtEn3dtpnptoCG28ZYJVidfYZ8owKw5xZWQwS4BHCsQad5WGzMXZm1pqxcJiVN",
  "key9": "42JBWb4MfwYu16u2ums5TQ29H93QjhKKyqfKg9xLcSmKy1nr1QvuzFNaEdadmAttkgGR5X9f6eAzTgQpVUJ6GHRe",
  "key10": "fyLBKPsrCmsQSi6Bt6FrUhdPp4kvNr4RW5GeXeNjeGC3qRkdyV5fMWegnBhnpYhG9FPMA8Tav5dNUX8v5V8Cy1y",
  "key11": "3nDGeuJ3s9i4hj9nJ8J4NZVwcNhmLugVogxsuGRe4nN2w1VsYFGbw5qVFK6VZfNpEDCNxbLZXiH8Yosgcm5JS99h",
  "key12": "451MgbhnUm4Tqg1FihXYcUQCuSEnrParrxU1HXSY9LEEgH3xTzCSaiYvYmLKFWdG5QpzRLqoGP7gxJNciXDvGm1y",
  "key13": "2NC7vh6mpig8NmW2aSjPupNKNxMAKhNUjxNSjTPgcGT9RiyqeW49GP1gx3rkKUEN7NvdYsfZA3m6b6JFBiogPpQd",
  "key14": "2AjaF6bU558GK1u6sVmPCcBet6p7hGoJ6HXcM2cobQWZW1c3U5KPMW2KpgPxZt99GbC49pYT7vJvxq1RQHiSJRXR",
  "key15": "5EmNbe6KSjs47vDizzYseqyS9Tw5199vftoGBLTPWWh61M13DkEb44CxGJ8W4kuj9qDsjSv3Hon69saiK1TKg3es",
  "key16": "vSNfP3NRrqcwmQo3DpXKxq3DL9Ks33faqQDzE1jzg349C5DWDB6uBdUEwHKCABdiMR53wtLUTHj5Sxf43f87Phv",
  "key17": "3yde8rMKDWZdSDFwH6sAJUeuBjX4K6nLMa6X1CAEu7pz9b3NATrHWuknXHb1RvkmD4DrfxbcHaC3BxLEedpMigbv",
  "key18": "wHhVgu1PwpWr1MS5twubBZpBktXLVz8ey7fEwDWt4YNeg4neaZFxb5XUpFQNFpXpCYN6t9RDi4R8DwiNFYNkPNc",
  "key19": "5DbPbCJoVh5zbeUy9tNU3kEZ4P3auHkSzcq88ttgPYDiuCGy13ST29hCkpd13EnMa8u4AuMEy2vuGtqxVsJmjJJe",
  "key20": "5mwm9P1QLtZoNJzdNuRx7DD1xkL7SMC4mgTZm8DfEHUiCPRQTGgxVj15U4J3BMqGNa5XLNNrHwCpw9SBP41comPd",
  "key21": "2UFY9khu8ySnSnKfJjE1srbUkdCS6auwWE3tYjAxMNzL3oYx2pnSJNWGNDL7uhov8sy4KZ7CN9MwL4xQynRoatJG",
  "key22": "63NYysv3nd1NLoHthZ2F7f7ndNmuaBeEruAU6iFrVMqn5HhmvLkUBtfgqGhzGK78SibGT9R6TJHJsLJc9htaHKcs",
  "key23": "23NLVnVoy2FWbW16FioqVp45igTbNXGaxYqRRfEPpuo2QvxgbvPJrsQv6Chy9kS9SGMGLjHQfa53BvGm3DRJWP23",
  "key24": "5a6Utq2gv2A2uTVEuyRthPzWhB1K6Gc6dtxNa1SKpNdEQKcCZb85zkNEZFdccKa8JhRvJU6oiFkWTyj5wQeHrNvx",
  "key25": "38LiUk5Bx7dDubeFtK8HV5BLKykCbc9Lw3Sevqqwhwm7xJThKTcVqTQ8AA2fR6VxSKqKjDGCQG7UGUvi4qZFArfb",
  "key26": "3Qjx2JM9RBuafAoaxLxpCvUKdjPELAQfZsD4HL9nxtx7a4dmhcLNRinNkoXAxfkzg6vDKw7sxzi46kqjnmM8MnYA",
  "key27": "3e694CNujVZkbupeuu2ZPZVSXTWZR7a11FQLn5337SiBAcZs3QjQYnEg146buoAAqm24VTKCqroRZy6Vbq1ZXuiL",
  "key28": "2h5qwZVPSLX4uaQeLMYf9R2bhwJsR1TyFpRDwg24eb7mk6UjJ7TftQQvCTx49RBJDBtXpDg6G5gHxXL6d9DaLX8y",
  "key29": "5ghKkxpzGq7ckLJe1GdyEJJbvvEDjYph25xLvPY5aTQujk5bjU9N9khS3jd1A113jKNCyP5kgkNiXcFuaaxqYQ7w",
  "key30": "4gVCJd1TyAcGSHG9ySCundiUHPLg3zf43TUC2Rasyfg6uEL4kyAb7C9VBqYRLtexkxQKDhodT8qmLne27eGcVZR1",
  "key31": "3WgfWFVVdsYSq2TovVNLbhcDpCcBpLsJcDMiRWAFJCJtek36cgKBUTrTBsn22eoWQehDy1ymBKMVWFzLYt9fvHQ6",
  "key32": "3m9LzhvvLhXWFY9tK4QApNaiCGzcmaxmhuXBTjebgK6QYJJYASijTXQ6NDUpJ4aBsJt72PbeK2s6daFcEeCm3Ak9",
  "key33": "h5U2MdjbsfNzcq4XUF5jP3vHzTFjc28jTUCV4rzFZHHfZumC39SinP82yChUZ1XTawQ1yiW7o3ck46KN9M8cWzY",
  "key34": "szCmRSUAonLQiYTV8ohBpWJFCY8AdtFp2VT4p28CDnUeiEhrzzVQguDbqe4cuvhSbL28BcfLkLKMAioHyKgD9QT",
  "key35": "5Lm5TGoJooBs6s72hNqBJSnrZuAJ4pF3s9fVB6AcEJS379Mb6kbfy7v8xmqWwYcR1qvjpad2ZHkjGcz6cZzDmFjx",
  "key36": "4wto4JQKK6bx2K37hSH6LjY9xEyafXFArRDrX6XFnRueFR2QFxAB3tZVc12k3EZhaRRUxQ5opyJeEHmiAQqN5bCw",
  "key37": "pWuhYjoajWWqoJiYtQq4NHFx5iybv2UPoSwf9tZtgseE7o8zLBUrBknRUuw3UWev2sbDzvyvUBRpSeVMYbkGdgE",
  "key38": "3Zj942wsjCdyd9c5tbAEPGxBoSzDw35zXYxcrFdpoXJf2TUsyxVKBStfxVq2G7EBAykgSx8sJu8SFGmmKngBrzH"
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
