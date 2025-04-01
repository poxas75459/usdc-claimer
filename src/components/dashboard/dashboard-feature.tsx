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
    "4tczUUgXxM7PnV4oB1HUPgU3nF6Sxw36YxuSR7k9YofFoa8xJY1cDwKYTpDKQv8sHBhMMqJ7E1medKLAYqUAiMXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCPibqYEDq88748tibeQgKRmZE1Vn26cb4byL3bGwPjGSsLubsLmWhixUdbbcGnxgPzY6P99N1eRcQLzVu3Sq5V",
  "key1": "XkTR4MktTqM7EzGpqNoXHH4go3wfcop2myYVEgP4iQoN1hAQruszvzh1y2ib2gVRDFpLC6TFFmxzG1mw6YJKvxS",
  "key2": "5Yf8M773LmZVdrPcvCJGLbxvz4eL8BSvNhKp6fjeUxpNzQMoXVmjgb9gtVpkhAUE1wHN4gPCxrDWaxoea7DMQwNu",
  "key3": "2zkeG54DeBdqoyvTUgoXiwLNu1PinshdMPDjaqoa1bfoPrmsHr3P1wPkMNKPzEPkJXrYkYdas3hBUNkstiyadCr5",
  "key4": "38rBDPDRsNHY7qd6SvMVvxhhvUdcMpCAcYyd2kdkvw5V7i6zqfyuwQgyvpTp73DkogDSaHsE9Mao9U1YuS94RoCm",
  "key5": "3VzHD7FDkWBQBaFNvjSCQZnZUQVpxyWxy7Z2ekMtuqhh3hLbPEhJCPHYBtkQDHjG5UWWe3gJDs9wzQw5D9RfKUKm",
  "key6": "KtUSRRLvtFau5fh9aAtvrSpd4VsGbT8YjEpYoWVP8wVjoyBHbk7xEGqrdCDH8epGaYhwr58VPhhuwZ8YPYiUjQc",
  "key7": "2ifdt62vL1Fq3dyqF8vj2NbTzEmeCW3NKf2MRJwJXMSFuU73Q2mTDUgtXvFKDnFZGTyhiWtvPuuMEcK2guP1fmqm",
  "key8": "3xsh151NcDz6HmUumgWZxTJ44sgustaKPa38J4y9qQkZLMHebCeCZPPJtmv2B3R5xbsEDAV2ygRNgBYDhRT412Un",
  "key9": "6AUyvsqCpG17EUzYisoM8X9GaCtAbQgYNTU1ERMMDsiuo6nkhbFFY7NsqadoFBHTxcu5BuFFuHqzYPJAtsFta9n",
  "key10": "5ouBmYDQoaHUMxYmx7MeyoWAzSjLgcQr5R9Ch6PQPEwXsxzTXFcEjJLJwJ8uCPEhJpUmiHWJtmxed53Bpai3fSqi",
  "key11": "HJH5MwK67oPA91UxwvcNScGjENrCZ6YKpT9YAZX9YF9XG5W4pYDrY9TRzwHa1y4rBQJVQUngqUFqs1ABHxqfBvv",
  "key12": "2ihsqVNcPw8dpGsKv4pknA9C2B5pUv6gTh8845WVfQswDRdkf7SqQGypidVMeBLHwQpzrkmTt1CxatrqWVFQH7ov",
  "key13": "33zipoEGtyyrDjpcmhAqT4FX7gf9bKFLojM6xkCTg14gN6dp82tsyvofHmn8yvP5PejX3ShGXRheuqWARfR1mcX7",
  "key14": "tUG6i44SrgLTbrBL2kxwkuax1dTuxqif6v31o6X4PHnJGC8uhZ9xUQYYHCvKb75JvEg84FQPXnRmXDHsNWdtkgm",
  "key15": "xKyku7zNozbwY6PQUWn9VzWGGdBUYExsNhr6dhbDf7Db5kDuXCZS5PuoRxrNvmkbhuGfyv9LZCpfAmnvK8yyfiQ",
  "key16": "674CPh7GHaAokDsSrwph7Hi4xUDMWgfqy7J9YGBgQZRJdSAG2iaHwtiB5LSTCt6DukNf5wujxoD9Dxfcm8LGFcYu",
  "key17": "R1DPM6GDhRL6JfWjqgicvKXh7Hcdi3u6MhknTG98Kn7KmJ2rdMeLqdnWnsnUV5WFzCQDTyQFhtFyqtXTQmemShz",
  "key18": "2eYs6A49ewtWK4cmcDFjFXo9xQ36veMoUDTFpD5Kxc9FfU3xWHmpGcLCnyma1UQxCjrGk1sc5v8p3mjzGEhgPr3B",
  "key19": "Gw7LzC8Fsm5uCKepteqGdJQbgaiGmDJAxAzvyGUFMsYvwKrJxxAHEXxPRdciEhUFx7aTEN4R8oP1zNsoJ2ZGNUA",
  "key20": "3ybLs6fcFktW1SusCjuZsLe6495pB9p1M59ZXpXZ1dSG8EroQeUKdUs4KjubNcNKVwLLLAR1NraC6RgLoUqgXdPq",
  "key21": "5cvEHidv6iuTf7Fy2T3Ww4CAzYzgwzGWsxMRp3oPzqa7GKVmvbCCFa1Q9zANhhujkqdYV6VzdTKXfgN8pcTy9VGh",
  "key22": "4TZzjnZxsQcm7R8Umftkq5nkG2LVoTAyaEdNmjxzaZDjvB1ZFoTny1WyVHjxQRcHdLrADqNUi95zGGL9CbLQkGRq",
  "key23": "512T1QyFkTEnE7Vfvo6TsKCSSHvwp1VfdVrLHmugPVzebHCwB4Vda6stZ86hodgFXV3veAd3UtNtS2hxBTprfuXi",
  "key24": "4NaVNdmmVKk34XEfKFLLszAoPFSbrHq43xdMHc2VfhtLZGanC5GvqmVQjjfDjtpVs4nKRy2qAbNgtiaqQttEKwR1",
  "key25": "4Ci59oMAhByEcFdpf47Tf8w72noy14tVysogTQeUQRFspRzNU5bFPM4i1eZiQLuCaASv65Xp77CJoT7EmG2mG8nF",
  "key26": "5TjQqXDFR3qSXARutdxAxXssSiqpoFvEgGAS9exAZZrctZ9mT6n2U5SfrCAEayxnX55Y9BrgzrxRCpGeHtSXBi1y",
  "key27": "XaBsNHkh57WBtjB9gGjpze8UZSKMyhXhPekHzjA8LGhZbS41VVv7tUYk3jjohaX4wKfQaVCHVhTgyEEQLWwHLXQ"
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
