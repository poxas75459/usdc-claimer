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
    "4WooxZFrcdKSb3MyumBfubnKsznAUYj1RF1cHtEBPvD7S2tiE9roUZRomVys3YKZ3FBF54kXoCqwEff77ZnX6Xsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nz11DXj2q3ApksAfcjqkDbTg1JgP5jfZdco6TiMyyYm53NZPE7z6H773rGWux7f2rvKCBY8wwDhWJdYRmTx9C4n",
  "key1": "4u1H6ce7vRuH39cUyrkcSfgeUjebKjtimdcp8nFLAnHnPMf7KSGK2wGynA7uZuaLDjx9y7wUa6z4w1cySoWvK9Lf",
  "key2": "2xBzBpcEPmWV7wdZGG2F3qhnQQhZwp4JfhESBFB5kch5iUH4BmLcK6Coxm2gNEBK1Hi6pZThzCHUgpL11jsXcPFh",
  "key3": "3FJN4dLuaMDwtmgc59QakToPJ9uFEt3jL5RrpRaCwcJTJxfjnfLztkxA9CGkTScPxxcN3NxTibEfNQqYu1xmVt8y",
  "key4": "o81XNVtHFjXztACsfBfpvS8RktCjSUn3DGEHtggFYg3wX9ARiW5auXwyqyKpFWWSmfA17tfL5WLZ3vyE2QYxjeR",
  "key5": "tPWF9dYajzZYiK2ALKC7zhV2omYsZhtHg9DqJDMD7TsaHqToqvvjWa1SsWTFRWrDv48eWQ9VytoTzTBu9sNQXcP",
  "key6": "28o3ZbujFvobFGNgdfd2GvH4mrmFmvtbQ24ydibs6e9c5BszX2BWhnJbQrcT6NtRA9GueUimFRG9GbYbxyXoGEPZ",
  "key7": "5NVwGCH5m8vRXn3DRDiVpoq19HwBiHT6yDjde8CpwZ41YDFhxFnZg2dD9zUBGwfR57cekaLuit9G5vD3WPA3biNB",
  "key8": "4bJDdKKvwSHCSqwLZof75noC5NJNbrzLXXu6an2ivbGZWnyvVVkpCHQJKbCf9zFcJi2AbckUAiZMpVSBnDXwUbsQ",
  "key9": "3aDn7RFvUS5fs5Peo4xQEjfYCpiuBptyExbJwg4Umc4fw6oCtzQaNcbS999gLpfFkEbRfw46JbihfSAd4BioFkXe",
  "key10": "4GDCTsRwLba9MM5HMwciYMdgSAFff3NfGiMrM2esEmezsHT3BGEeJ5g6tfZHXkZDoGy2bhtjkZz6FgdNcfVPBQYL",
  "key11": "XuC6xe1Yp4KJPFcXfBUdpNWMgVUDZkQE3Xp6ttfnJjhf9mKxTE6KkWadvQkMQtNaiX8wSqyNgxpg6yQHeRUNLBP",
  "key12": "3Vd5UkRGqupdi483gpHeJ1caMwSbSBqAAsaPAirA1xStxruo4skwd4C2s6NeF6nE4on42He6xAjemLpD7xm1PN9q",
  "key13": "3q4mopgawzmPYDjQfRvk9DayVhjfWk62tvYuYrJ4RoGgJZp2dGXrmo4mGUPE2c29wgX75rA8ATztDWfyxjf2B3ZY",
  "key14": "5tFh9sbNA5KWUKsWBJAdQLXRfE3brXA7aeacaLD7MD8DJRPn1H7xb9KnVz21pNsdQGUdZVq2VsNuDdQMQjnhdTsi",
  "key15": "66BpRiFov4vhfAqJrCrNiafpoAfF476LFGuupjJwXMJ15FUQgc5cgPPPZTZ2SPzFE2MFumuSGP9bZ77T2CzSkhzk",
  "key16": "2spPMkqeXdMPEMoUB8rSNkckQRU6Zmv9bTfbjaiLZ85wohUxEfcwahJtz6apwqGy6UFsdkH3PgUQqjHnhFt4hWmJ",
  "key17": "4HCeN7X3zW1zgKfaBWbCj7uXJandhE3LgMMXAVS7j7w5cYCXnq2QruEM2YmxocXauYiwaAsFMEVdackFkV5vUmVJ",
  "key18": "zBC3HhFvr8ggdCRfs4mUw7DTDABzB7foBZAHroPtEAbqgBQQ4y12NTTWtii5sMrmJhirRCoJPabTwYagi4mL23u",
  "key19": "5E1g6yyDNmcJzK9i7omASUg7hE77FXYhkp9PrXmuWRjL1zYLspM9Q8yvwJaWawh9xK2oeVG6Fb3PvKE1dVXfq2gy",
  "key20": "cEtGxfD3bzxyoQaz3DkCXQR9ANfRPoTP57EKcB4KM3DXxnGYQWydT6JrFoKVNp4vWqzsUesiCxweTwnaTDX8L3P",
  "key21": "4vXfJfjXtATSyPxLt8WSr9q46y5PHfCnxUHBzuiQWyWUriF8arUim213LCCrgyn32RuJj1ckJHhHpzJUAo7Gro4S",
  "key22": "TywDtqVey8XTazKL53N5afen9R3vkdmGmtN12yRe3Jo4w6Q4Nn3xMotPSunq5wEK56YV5Tqo7UCeoezFEKRtvEw",
  "key23": "3CWypM4WSjvA56kcw8DmFk11tkkYK9zEG81QxdDiiGypDMFb3afcNwK79hfUjxKTh4BnDziy1MSSoq5SET5zAFRz",
  "key24": "4jKwFAjtAGtZBD7gSDVBxMUa2yFKisdafL1fzQ6KS9Pgk7kqSGjDioSniWdq2NSoEDVUhCmXCUERgpjJU9JhX8Py",
  "key25": "5dvDQ9sapHMtXU8ZYV4yzppWSTyd9CwDHxTv11WX1aeKyKYG8PmQZMji1ZqBVbjQyiUWWkCyE5Prnxk82mWxUoRW",
  "key26": "49wgXpVoe4YXCVvgCTJL4jajdT2MqUdvrj3SXTMdWkxofXMbCVWpji2f6kejZib7JE1B5iKhtfA9MmKRbgdUsEGa",
  "key27": "2X83eXR5q2WgQwa4FfxMafZQAT62QJdVjTXWeiCgpX1eUKtcoD42CtkWeyY961Ymw7BKHX8EeG35pP1vdVfU7aSX",
  "key28": "3MYRtJFE8kodMfbnrrZwr8Mg9hnnn751cKbHDXhWwzXFwKk2EPYYx4abcRF7MerVnryAvyvUehTCaceJUWu6rvG",
  "key29": "21kCWecJCeiUFr7TgUUP5VbrVNCkJuhwmHksEr6KSuT2gphWbNSQUSvfkaUz6nD95s9vSShEwpKno86ZFJ9p7uxK",
  "key30": "5nZbjH9z253uHe7r9eftj2GYWcdtwpud8UCkCyAFWVcUnbDTESLDw2wLnaYW8HNJHY1B47128oA8N38PL9jGZnJV"
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
