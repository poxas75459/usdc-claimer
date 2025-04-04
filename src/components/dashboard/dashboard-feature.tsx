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
    "2wXRX3at8ps1sq2dHvNGmcycwFGckuZ45FDset7bzL3JMYCzSroKQG6L5cuo8xzaLCwFi2EjyBSGwk1cg5txVxPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k44NQ5AZvA5mFfmML5mQC4KWpRkVQj1yY9vhkYX4JPZ6u2nPHx51DeCLcsNJu1ooSZjnizj5xKu8FrUaieP25QQ",
  "key1": "LcYM9yYyP6fV96uRipx1R6KhcXAwYAeMpTUBpYieToxo5Qb52grFwLEGPGj96zUs9eGwwLi43qWsuAgNrmYWG7T",
  "key2": "4pMKRnebVXNN3AzUkZS1UNiF5QY3R6hkRBPRM7dT3Z2zQ4JRXiSuircGZPKcXAhRRin6v6ePKewfiV31FTK4r6LS",
  "key3": "37Hv12TEs6Sxz61xD6hMzkpHUD28MTBw5Sv6ht3sy7j8ysLRxZZqhLvSMZwr7Bg42vPXrFhRpoNLnEpv3kFDrMuz",
  "key4": "4J7YQcSiXTxcxe1SB8CtRw7FCrrWxGN1YXbbWeJyZcYXHLj19qDoCBgE8HJmZ2imxdEN5vhDxkkAefKXYEWTPqW1",
  "key5": "4ArjfqkMdafwV6AWx9L9YZ1oGmmRwhz2GKUJ6kHFMf1GLTZd5cn74vBusVqgfs9VqvGXTPiQivNacNdUt6gu7Mqo",
  "key6": "4VR9tbuEFZ9ESHczEnmesTCh8QS3Aq2eRZQ8paVWzcd1mfBqdCd5Ygd9fQp7FsuaoWoD4UYCJKyTSXdnQDb4GJ7t",
  "key7": "LszWvp1Us4SYzwCqd2odnRE5u7zsgWRnpwBanXFVfLFPbGu4QTZ657T9WWkqmnmNnmdMB89oJcxL2a5hfrTQVWk",
  "key8": "KAvxv6frCE1n8Va2EhTdgdjyykbLm97isfBbC3sQW1NBaqWQCzJ7KtcM2RDGPsphfPGJ2tPGbAkwJyAzPr3kx58",
  "key9": "nqgjmAQzAj8V7x3vUwu7Cm5iBgGYhDRQ9Dvm2CVgKJaSuabH5aynMRcEuPDd1UQrgqas6TjEgWcQDRqmPGZo3eV",
  "key10": "24Nm2uHg4Zx4D6fXoAGxz7m55XfkE8Vtfw1fWTFspf8GhjqFeAYQhgFgbqQVARLQDu3jjWwXkds3kG2ppj6zjGcQ",
  "key11": "5bgnhLzkhT5ftjYiRKNQfkyFU4R6DBRaU2Ew7rRyeSpYLCr4djg2gBByMhdMAFL1RWRY3iWMbo245XUcMjPLEPRS",
  "key12": "2pK81SS1iXMo1WvArPmT4w1KgoKso68yVyJgHJezh6yWe9Bxe1UvvUZeit3ckFKhcvy59z3cqk2st8LQNCTfuohg",
  "key13": "4GwMDCbRQRnXzuoJerAkXVu1U9Stap5rUSu1ApcfxWTquqjLFeMc97fcG3NiHjihqBdGLTGC51Z3fvanDZcSmBRP",
  "key14": "3c2MWKq1KdxvLfe8XKLgLpLnYQdLG315M4aM3wpVFhzayKuJRojDRHFP3va5r9TB4jwGPF9uqK1Hy1MQjuxVheju",
  "key15": "2NUXCxkudkeYuCPkvHvPA9U75K2eb7UdTSAtxKAQbL6E4ENKwQhP2Vm5jVRNjXmdRzT1HmtwQxuQi2xDf7LQmWDh",
  "key16": "3QV95N1Ljxrcup8U5S4jwRnXwbfJiK8LVcqQ5h5g8pbwHn2fPCvE9FYkYynbK7btafFGi366yxQuzauVynUTM3aR",
  "key17": "5jnY6nD7seBDGeU21eYfjkRAKAvoD5ji8FfSUfSai5XztqMWCpWcT5hgAjSGtsx6kSkNt9NPZUACLiAyNEqs8NnM",
  "key18": "2HyYtJSm2ZBmh9q7dozpdEqS6gYEbsYzrgHq2HDmKVUjDfdoxZJzpDiCqs8mcXrp3oqFfX2DCfrAC8QhJ1UXnyqV",
  "key19": "56h8RVzvDakX5K5rNHDsrpx3YD4cnWEBced434eRgabwGN8wdRPghd5HUEcxJu4Npymmwhzas1wP4cV1sXa8oYbY",
  "key20": "5zgd5ZdE8fntjF3e19dmTQ3pxj7qYabP8mjiFfffyG7Z6i3c2zijKzmLxmZdYYtg16Fmmsm5wAkUftm74WTnA5Nb",
  "key21": "2uAirqzmNAZva2cD9hfPxoDPJHs6t9crod3YeoTM5VdbzC6VV4nbKPNbAvuytZRye5Yw4wAhqUBxS66VZi3U1h9A",
  "key22": "5KBzqTrr4T9m5BgWC282Mr665KQDAbg3PdrbEivF9mZ1Ym9yh47X9ZsVnAgHfpuJVBTygbFzTqaex17ChmNF9kU8",
  "key23": "3Cf9Jm8BxZQPga3hLucMSpX2cnkHoZLit1HtJsiXEWtYnigzD2BbnZfUUT4szfVKTLFqeSSq9pa18vGPyJBFMDV7",
  "key24": "5wd5grSTMBhrUmKVdERpC5HrzWwUn77Q92SGpTrRJ1Q9872fbjvM8TWa9buJiWsisPBE8PuqQ7QPAFe4ZUs8vFYo",
  "key25": "4P6XEraLFhrN198KEMfmYM9UDESMDLt3J54FybWcYesx6EAv7zf1xeLbei8JuyegZdrE2d2pyHFZTzBhNscg2EtU",
  "key26": "5XvUKSFYw7aEPcgCiS2Fq4iQYJH3r1EPFGvGKjo2sWbznCCaozXxzDwsDWdGJRimv4VVqRN5p3WMkqYDqF4ffrpZ",
  "key27": "bmcjKPDJEfZqcPDtsD9TTeasvSPJAZG3oyqxms7E95MXT33KPmWSYnTP4TWgAZJ3dSPPkc8nhNCuaHjdjbqYdpR",
  "key28": "4ZZxqPntFExtY6ozQpU9kfLpunK6nN65ey2nyLJssboc32Bd6eqZDqoZPoPF2pVNTofyuG13f7AuHytaKXT1nwZa"
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
