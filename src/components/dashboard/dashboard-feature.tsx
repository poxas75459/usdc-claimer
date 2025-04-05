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
    "ffdzUGpthiL5cD7BkokLL2dVCXJGsoDPJJ2P6omXovCCgRLFzK4WoWxS2QjbZjtbUiZDQ34GEzKZaQsEzXcVpLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dr7vVbB9DeY1cGUUUx9cNnQJSLytG36KfrYCbknzCRrYd5RTzHBDMH5iB4fniPzfd6czv7FXoX6gHfr1xBsxQBi",
  "key1": "5uvTHPvL1Bp5AzjcUrxhVUYUBmsPAQYPW1UaCr2jwU8SMC7Xep9mnjvyJp1xzWRio33bjMo51foJktN829E3VUEW",
  "key2": "RzNCQiizHoSLBNZcdLbfhwLGEeP329LdiYTNNveFgtsmWuDd5xV8JPdQSZ641aTBej67EPuDepXdd6c54VBdmxj",
  "key3": "5dmaySMRiVk5PdwmuonAWCzTVCdEvCdLJSwBRtNNDxS7AexeYPW8PWkHJCDTGuLLVzfowmJPG1PXB9geYUNKqBLA",
  "key4": "32JfrTr8hmUto42P84zSbtJSmLXrpKwD9vcdT8iiZAV2MLocuKsZqxitEQEu9WXAGTQf3gQT1BZfnhj8Udgk5zbF",
  "key5": "29czEzN13eKospK7PanoACk2aN6V67kqHiRaEXKXYyMdYkDA1qDLufNqctiyRszfmWB1DAhzoenBmuPsei6cCizk",
  "key6": "2BDw4DTDej4Z5qyLVWemNiQ9h99hYQebanZKGnexYJRHjsyTjjuRcShQZpL3wLdC8hqFHXoMwnNeDU43dnQ6b9Hg",
  "key7": "2CekqRMdowGvQLqJCFMxe6mC6BwDc72gkiYNdcDxUVpRUUdWh6w7USHjjmbZouVLGza3r6QcpoLugRvuC2ptGkAr",
  "key8": "3Mxwpa7z7YvQLgXsoFA9bPb9os88PYRbzQHJZ1WVGEBcPUqKLcPoSBw9fJ2bGNvpvocKDwYE9B3LC4EwJxcFvWUd",
  "key9": "2uE3NJ7jJKhnBbFWpi8sMdBKQ1mC8MabLGsU1osCdDaBrctVP7LhjTqheWtoi8D1QWkChMRBKknHm3ZVgHNmxyoV",
  "key10": "5xpydShp9oLHbM1hLubvaP1j9BjCD2jaThu7gGkoEE7HjPznPJg18N8i8C7bApYdwadc53gTVH5Q1xcFwmdppqGp",
  "key11": "3HrWxN3FMhhNSxXAUYxJvsP1pBXWc7TJ6XtDKivMou2chwnPXpzpwEbd8UwaZhV3wV6xMgqQU8fPEg4MUa73u6nQ",
  "key12": "2M11Ja8HBkAP3REFnMPDs2dPRguNKn2rxZuHwRHGHa4UZPz2EfsSJVSXy5YjeQX8VfuG7qeoN9hLWtLqruo9zj44",
  "key13": "2yuiE9qUwMhrfxDHCoezh4SWwoEdcRMUZxYDJSqQQWWf3m3mXUjraFS76fBKF5tiHB898K1YaLY3H9MRbeX4B8EF",
  "key14": "2Cp6QsA5eVytjk3KMKJrHJJvXi6XtWeCjBwf8MuM3Vmfju5FG7vTRRrBgUqLomcocQ39rA48M25Rg9sggxqwRPE",
  "key15": "tXXN8FygLb7EeGkZBXUoKZgJZ8rQAx9VKazDKbAgzTcW87wr85BvmHCkYegXWobvCTgN4dEDV76L6javXhAhqJB",
  "key16": "32nRu96UnmzyPKcxYVUDc8XnMuSqDMiQL81R5rSVhBMtkNrJCZZiLzDG4hURXgXNz7RWfdYZvovkn91j6YMfct45",
  "key17": "eFw7TS7QxLhRuzfpiqeVFfddk8aVZgrFAsKZf9RJaZakV8SMsNpY51Rx5EKwxrBXKVwejjon3fz52uSvqhnCzXu",
  "key18": "35MoZSSZwRYqKLfuQowovnNSu2qJ4MqRDBmnoi2d9b81tfoBLywyFHv3QZ7bxazswegaNt6yvxXcnfDZFgfpzbgK",
  "key19": "3wiQrAFCdwQ1JZ4XPFD6331ChdaSZp3DaBFHXRNAtyLJDejAfQjyiA4FQE8PYN3qg92piAapSNjTLomMab6YifRz",
  "key20": "3einAcxRJTWkaBJ2YFkLiKroprwbjjD9HwDtPufJb7WLUmMJbQq7BxPK3RrCofe7sAXM2yEN4s3m98qtwLgWL71W",
  "key21": "2t7PunyKiR2WKy3LV3JJkP5bZp7RAtWefcYY39ViruxfiAFjBEbdD3swAMwZLhZdsDHREsMCKoML19aYfr7YGyVq",
  "key22": "pVTmQdwq6XfmsTT2AbKGdrUZ76ycPZP81KLE1bfjmKkipJptZBbbHeGZxmSGWXKu47rVdpq4EZQGevgT6pD43BY",
  "key23": "5qMNFZpnmm6eH1engTeA3K2akk5FECijfDaM9gTkoH4zCNTsJPdGJUGaNtuFmDhpmwsaj3EJyaDAcwGJTCZcUfyc",
  "key24": "5pdTtxdvULWKDnrPW2z1b9HH7dVD9NcCzYqK4wExb8TQm7FniFYfiRFJp3Xo7SweXkir7R41V4WeoxYNUWD5Njod",
  "key25": "3GNo4apEPpFTrhKgZ9S1Pc2bJeVPxqbPB7tcvWHkGTxcXpJP7tcYC3TRW1Ezvozm5TXYTQ6AEnvRCqsKGjWTqwZg",
  "key26": "5MZG5qD1pjA91FzRSAyyPdcp3WCek2JeLjHs5gSzuf2NHhCW2NYLJbG9M1w27UUn5sM74AsCzJtMV9YDKwjhPPfg",
  "key27": "348kq5KwDz5myyHjABxS8rop17oUPwo21tfRuJ2StdFGm3oGz5GtD1CdeaYmJpcNZAq9kJvdefwZgj8G272s2Q1q",
  "key28": "5kz3PW6vkC2r5Mg4BkjdbnTABb5gfnAEQXjLx8a6XyokZBaqVJPaxZYx57W4miqQxgtzZ8kA1HVwu9DvSoRgC3C5",
  "key29": "4584Ks2zQ21S7H4KS4RU2fTV4hGtJyop8g79vMniMMSJF9p3DUd2GqNT7ffZgSaro6BeNTvNcMPAQ1GA7mEn1eeW",
  "key30": "5g9LKRmQeJimyK7VHQJUG2e2nEkHPmUyYBgpKsvKCDTriVi4XKd7aUFVGQkC8xsh72CkpjxWHCVNtjV6KhpErUNj",
  "key31": "4SBCgGnHqdG2TWED9ZYZnt7cp1wCBdBgtWUppEtMP2tpMEwaTXt6hoPK6631qGCKvrdsThvxBW2ZdBX8GS9UVCVv",
  "key32": "yPWDVB3zJTRdWhtzgwsdkqCezYX71eMAqWErWfTUuaqaqeDTfPCPZvwLLAGeZ9qgSRMvr3FFVgLc6RCfgK94FT3",
  "key33": "4mKXMeuoZi7VugntW5LP1aiVAxWog3rZ5Xsy7eCVLGZYcBiMC5bP6fVMMupuCTPsEY4gssvNq8nwtwtJzWMs9XWh"
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
