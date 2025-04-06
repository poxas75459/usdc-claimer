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
    "58juiE5k9gcyCdJR7gBhFAdPahoDqZvx2eXBeeRbEhLPHRQkyUxjmGADBP6og5cJBAspmJScPycpF1DjDkmNKWas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5an2Haf6QDpJK55r1oHFbUVPRdyvwcgBiWTjgDGntSGDymHxdgyAma55Gt3PnyQkMvSuWxKNEvyapLZwyYLLbAqK",
  "key1": "KL17eMVBNyEMBrB2NwU2LLf9vKd1EnKQxSHoJkwJzfT8ceiA2woNtpwar8EBbc1GceWiV4Wrf1yVfHXzfkDjraf",
  "key2": "3Ys4EZheoMtpuE7ujwh5ja9Pw3HzAupKyq1eNU6czn5gn9DdYzEhNeGPh1fR4mY8fVsczhcxLgD7ZXVdgWoMn5s1",
  "key3": "4XK4sNMG2FU4eovCRo1zf1aeBSzUrFik7zhPu6QzngMyoWu7eraDLSYrVwkyMdN7NHkCQkZ4z57Ns5iAHMGCzYMK",
  "key4": "64NmBeE7vWNoF5Lrz59T9S1j49cnmRZ4hHyB631zKgSvKhGtFXqcUSD1tn6kYdozQSfzaWtNqKyfRBK2Xyn8tHYw",
  "key5": "438HiLM2PRD43CrfT4oFNdAxn2up4H8aHzP7ggpyptdgha4Zc8SAv6YcSCLfU6haZ9MGLBWGTtE8N5r5Qyy6hiAn",
  "key6": "D3W3j2ba4aoeSeubJQRonhSx9XwQX1XGPr3uG3NC6duzGzgQ2Xk2grc5aZ8mJco7eNdQ8wRMTyqoQQUzMjLT9W8",
  "key7": "4XSThmaVPVrqB3VY8WRS7CK15ePZEgHx9QZHwLZpz5P6U5KWz9xrPi58yN4A84CW4KSs37m8Hit93N47Ee4VCFYu",
  "key8": "4SBwNugjgGZQrEsBMbeAt8tny35Uqmg8s7KYEB7KDgiquZ4SUAuRPbXhHa7GqYj1JXm4oxZAiQDcUDK2rB9kfUJ4",
  "key9": "2VhsNUTkkGTeY8U75xg6zxwVhWHppkuKkdYQbsnyDeWaA9NfpAWWZjXxmDGHzeXnbS54PAjLTwbKzyks3NpDHt4m",
  "key10": "FY4EpJYWNXLPjaikk13pes6vSH9rLnXWFcteBVYo4u49xngbVmFjRhNwMRq9wPsWRmypaXhFZcKKbxcYSYzxtjy",
  "key11": "AiF8gKWRMcCM5VUKxuGD96KJbDeex2LfqABnQjatVxXPD8arabEyKjodNoSLW28RCAFgf8SBg32PiVC7sMHddwF",
  "key12": "5ujWcHLYfz68UKuxU9mK2xUhyzuUyK2RY2TW78b9bSJssyc5d5jhCogFqV2zu98gQ8KJMRTvk9JkaFxKouWvfPir",
  "key13": "3YVJWhCNphrkSUKS6KMBmQp72y9h9AYVb9U6q3AJ3FDNJHR6KZN1bykZ48xnYDE5vhrmHrxvAxB1hmthDDqS4UJf",
  "key14": "3V9izpffkZPGkUWwLxMnDd3GRQVKwGZaX5JJ8BXNNBAve79YQ1tziNaX2bFWiMyVCgt1xrN2FMom6Qrawe8Boz5g",
  "key15": "U2fiu5PH1hGN1ALNAxDiAxXHy8giGYDKd4HyKbrPKtmvcxr493MbG8wjWb5PhKwKyNcowNpYMSJqJ7JPk81h4RP",
  "key16": "4W7bvJmpkYXeMnjWXWNMMnMYr32XiJcT6JAPUemUptGhR3gswH4hrmKHACs6crSMbkPjhGDCWEgMzG9AWhFgLH9M",
  "key17": "2SuWuuaGZb4TWuc67YgvvGBnArtEdZaLgozHAzimDZjeVESugnMetNwFSitTb2AUSiKr2NELAcFcbzeDm6NFNXmJ",
  "key18": "XfDfdpg25SjyA8AjCGu6eedz5P7wEMx6bUYPVSbVRUDnno2RhmQuhMWNHS16Gd3t8gb1wG6E3eeY7RsNzPwReH5",
  "key19": "5GvFvYRGCaPnusKDZoYAmELhW5FMmtF7ZADWHLx94bqxgDkbWaqJbD6CqAAqboyoW6Q4PddMggCqj8PayNY87jRE",
  "key20": "5NMN82M9MtTEPZ88u5Sw9TQ27VX8z6yTTYu9eXLbkBVMvgjzRw3gx3oggCFT6jm1Ajew15fFbFVyJSeGMt417zBz",
  "key21": "t7BUUnK1QXFg8stL56DMkEyuX4cuzQua7rLYsBPo4gAiJihsGDQHqEZiDnuH6i4QsJAHNn5YS7LuyZq8YBSgHSp",
  "key22": "27xWSJ26LDkiSUq3yWsNvb3cud1R9ebM2XujrNuBsoQ59SYMsXpU9MrD1zmt7rHv5PQzoxqaAnfuFAmaHQ3QiWVr",
  "key23": "hEoeUEbye1SQLnCXALSCLruizAgbUut3Y827TnfAu9AjbdkNx3VMxmwsCGnmiXcdxzG7ReTRhwq8iTjAbyuKTCe",
  "key24": "3F5hbEYdPMZWGSEskohYze3Kc1HtJr4gSNRWMnC5onQzJe9tusUmX4R9iJZ4Jy77YFW7Rhzwnku8FjED4Y7ke1kZ",
  "key25": "66nxpn1XnLEsG8ZhbKfXrbqELYS6RQx2GiLGM5gPJfkbeK5qudfoin2izrQj5nXLpDgNGbdiK39qDqVvYX6qokNJ",
  "key26": "4NjzMsYtFtnVKBx8BjcUQrLJ6yMCT4AHRdd61PCoa8T8YJDguwbtJGPwy22aPd7bLJsyMdf1KMuz7V7s7kMcyvAP",
  "key27": "2D8T64CFezgHqnDr9URVAfh8Hup6kkXWSnh2waNtoBMvXZKdX9r2R6HBM1XEWEiTY5BkMELmT6nhApvmRJSaL2rx",
  "key28": "5igyJpESsbB6LE963RdG7cQFtSGXnj5GUhoWYRzWdx4yUJp8fx8veaQRWwqJqQjNRRJn2bZZawDCGDEssQMPhgFb",
  "key29": "29qPnAbdsNPwjxMpovy2FPKLhHtmFohmBPZbttHDcfmtGnbDJSjnML4DdookRVjYvnzxu7ncYFmFwYqXjEpArwKb",
  "key30": "5BQkqS2qWAyBTxktjsrervVbuDSmCY8mbx9pADP4A6Vk1QidQWbyqTzQmxzUEH2sb7MK826dPtzoDUzN3TDQtg1D",
  "key31": "4XTieRn4nTvV2BgAn4iLWeciNmXNJN96ua852GbPKfPgsvNsCYEHdiGD5QxpX2uYPBt8nekQ6EoexWKbtcCtk3Kp",
  "key32": "3HB2oRH4zo2JeXeiTTSDqAeDmCFhUGj5419Atx5K2Rc5DdhqVMZr4w76GUi2Tb4MkiZGJ5j6rSN1xmV2zJpP4cmM"
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
