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
    "Jh5KDfrxRx9JzKbFd4TTcVpGJjn1a4LAF9z4SNnF9edoJWDhc6gEvwfwGy93RQJ4aDpBod3YSPrVXy1J53tS8Bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QwbwiRqVz8uKQvNgbouz18s6aBKe1SXf3HMbPYxmbyeYxBsrjv2q5sWgqh7pVhQ4g7Q24vNS7Up7pAYBZKbzdER",
  "key1": "47V4owVAXZwEtNG9mbc6bTwd5xiS11EyMV52NJkfKddXxJ34nfN3ZNQ9Zs3z9UjJ71gafEtHXhgA76HXoSySNYDe",
  "key2": "62fy9uZVHsx7EBD588GVp8aqscyDM2P5JdbgSU88Quq3ikdpdutanLJhiERTncF7T9F7Um9wfgXVZQPuCDw5mgvi",
  "key3": "4chDG2nMPuSdEkCSLZy4UvkzKPkpnSHVoo8X5L6N38WFB5m7MXbSJjhhZA4xPjrD9r64RSH3Rj9WotubMvHR64Qc",
  "key4": "5GfhTp6EvGo1boZkV2sKMm3fDFR8oRokWbKk8MREZ1QV5z89q6JtkDCtcJ9qFM5gBjYeDQYmsgxSHLtVTJf6x3Pi",
  "key5": "3DYzjbXNiK6ojW3GVRU5Q6ui35cbERSGViLwSWWK6V5pESR1twv5QDgYEfBFWkC4zbu5giEqSjDHDBfWeTU6tNdn",
  "key6": "2EkA5ymwhikUFjApdEfmnuac4EFmNjCL1GzX6iezyEQfLxPQAXURtNfRW7SpTxaT3vwMLx6FBqpZD6qcaMhKYMVc",
  "key7": "3CyRvkMmGzgC6EqELbcaJWo8PQctDpLaQgjbzU3H4cHrTbXqnCxQiWJ7PL3V943Mzr7zmXEeYXkdMUinPEFSB773",
  "key8": "4ojPGV3ccFmDpii4MVhTaUsJ2PRGW6xDP2q3WKwpUDVqBqX4QtYGyW24bSBMzyvXfyiBee6b1MBTX2EmCF6oGVki",
  "key9": "kBqDntY2tuao1vMhwwgdHYsvYS4q3wLxZV2CcZSHrGxWuDzDJgpDLeNMbL1qz55QSNCXorkufKCumHqvaydJPWs",
  "key10": "BPuqD38tzrWXcKzSzuboSkaioLRTmrTjdcS64Q1fL4VDUcuU4tvTdfk8yhVBvrGeaJh97zQxorZsQo2knvsXHGj",
  "key11": "3K3wLsByieeaTrrm3KZZyEkACBko5urSXkKTCn29NsDb9f2VrFQG36NnMMHfLqaqYZVxVn9WNP9xrnVJPUSimiWY",
  "key12": "4JUy1ps6z8cyBzkAPf72k4j7rJsKmFWWhLUq6xenr6EyAsL3rbs4RgsRkm12ZJBrddx9962p7XFXGoFecCSdSSM7",
  "key13": "3Fa75Hm9gR696CRkUSnNzh9tSGyX4yJ7KHFfpgseigY5TpJJ6fRyCcMGvf4fyTsLqZE4dU4CHAmkXVEsY3EZbCuT",
  "key14": "3t793mFKgVsFUZy4q88t5YAumPh9RsitRMqH9PeyZiXjyPCjtWqfpmM7yJ1YGwvGqDyqQ7vSUKc6k7LsAjmaSfsN",
  "key15": "3h7sxUEn7XgaC7DsVMyj1nYWoeXY5c6tPciF7omePgbNkwTTivEnxJzsaedpiB9Gs2DeSZtkdW8r2pF3Qnpn4eEG",
  "key16": "5hAPA4v4r6Xgw9YR3AQ2Z3K1YJHK3KJ2qAt4TETGoFWBsgtTvw4JSUXffJW9RzFofcRuiVxi4tvUeUx8GK3LTqzk",
  "key17": "4qpEgNANjbCpB4kqYFLzC3Sm1ZH5ku2d8VyE1V2zaKFm3QvtqUmoWfBiuQKTG12MoFUAJsDnSFAwcZuD3bGxmssy",
  "key18": "2tT3Du1Gn3FkuaVTASoQUA3TiwxmmwUAqRhWYKkf3yJUJNVVMAAE99cYGKN9KFZFKzvBSZ7CWv1cRCWeKaPHM6uL",
  "key19": "41Ukn6AN5Xj47AMPMRUKmgN6LiKhq6eyRd2pDa1xbXFhVr9mw4dz3VdRSSXcyec58mzs5UfzzAgopGFcD1i6Fzrt",
  "key20": "3oNBLuUSN9tH9MBm3YaTSxGajG6jL8VQ4VvQzHm2PZnmuwGfoHD9xWrWbdbgwTgu2FPH4zuNzXrTtKWAzfyBsVdh",
  "key21": "2byKLocR9awLycBfXAZgR2XCYS1iLPm9EhF73yxNNbxj7Wy8gx7izT6bj3RSxwUv7b3CKuvxX7kB7cWFBVtsQGpU",
  "key22": "2cTY5D7XrTPa3HYDxuU6mf9bsbikFoSgV2VsLMoDWwRVb1pzg4HybQGmAUbc2eWpuP2qcaTnUJSNtyLrXEDHWQEF",
  "key23": "4WU5XaCW19xJwU9LdneVqCKK2B34cKmxLEN9rhmxAgwoazHxdMSy1PTzjXm6BpAh33HhAh4Pm72EcPVDY5yr9tnZ",
  "key24": "3GtRQp233buhUR5xMLNzGLUmrhTSnf3oyaPteESdjtQtESb5d1NJ5gYEGZhBiDT8kLg7mhKpS5ufkaw3UNB1MN5J",
  "key25": "3weUtA7JVSv45cymXm6ncstWKYx9QngAPTqyA8u3NbBfuZwBvRZbopT6DsncXjaVj5GJqu4zNf5Drrtcmzmzi1yG",
  "key26": "4F7JyDQ1tZha8mmq7ihCGw85YDkMtHzp22wijyTHXsvhMPxBb7c5yfQGpEJuqtcm45xZqF2gr7GAmL47KxZqmE9U",
  "key27": "2iHTnAaYGWWg5J1vfREB77zPkY5piMxhLKjywXF2FPZZWAfZAkXNH3fb2FonTp3cCbMr3CpKtckqDSyEPTNmLrwg",
  "key28": "NfQzkYcVe5gonZNBgqsMQzFZCrFyMoYG1MmiNS2StiVWuKUyW4KNun5nV2xeiziqCFnYmBSmpFqUb6pqvNouLoM",
  "key29": "44ExX5JU4vt69zzAG5k17qgKXNxNJcHkiZe5JU7EDmKocFriwuRERLeB9KYQMCWCqAYRS1duzytmFXYQUHFk98qL",
  "key30": "3oiiRnEPAX53HdpUkXvTp71iJKHSNSCwcZ9JZe6pTs3WXcrQoaUZ2WVAT6sQ5scskMqnRyDi3d5B5oUAn125m9uw",
  "key31": "4yDEoLTb3RQ1cZcWrcPHDtCZNcTYeiUZjddpWZgsadEr8FPUo6NyyjT58Nyf7yNAcoHcNjgjiX46gzZSvTvubi5Z",
  "key32": "5MPiqi7Y93g77yCVbJRNQce4tfByeMxV4CogcEBgQ9Aw5BuqHrvDkANiXuenDLJc2VrpZP2h7Qo2XtdNCCF97JbV",
  "key33": "4nTdYqMLexgHxnjYguqgCekEst345EqkSiLW5dPE5jts8cDxYtXz8Zi4MgoYmLMD6jeXt1pMkPid4MyEQFbNQS8N"
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
