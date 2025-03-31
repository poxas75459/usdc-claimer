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
    "5Pnkj1CCB8vS4STouHyhdrSYTekB2BbzUvLJpfBpA3o1jBNBuFBQSzhtUm6jiUEkBYfAhF5jWEJFje1aTDKnXtXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kj39Pz5B1U3Jg3ThKXjnMLveCLeNY4XgXoFeGYoK5un2EfwuKskQzAQn94KydzUbg2SfQ6dqCTmJaRe6AQXaRk4",
  "key1": "53FCmszKzcej9HSm814KnZzWstskjpDAd6QTLCLDScc1HYMuJN58qXxeC3V2LAXGHHTHrxrKw8fv5CXyGFNbDg1K",
  "key2": "Cg2cyzAe5JRHxPeZGmDqLrY7AnWUowPT54ewynSHyUfCSUwtwxmJhjwEuggLdNmQ9Pd63hqavcyGA9ELnz4UeeM",
  "key3": "45r7LYHdo4UZK6am3jcVeBGwxBDFSe8hopqrYg6E5E3kyDVSx3TgDawf78ofrccTf5pAKSTeZZ89dnWyCRjjd8xR",
  "key4": "54v25N6YKXo6RxDDyppggSPASbfEcgm7CE6kkyUQF74CTaXy4bQhoJU4F9fjS6NitTwKK4G9caFAaNkS6yerr9rq",
  "key5": "3Fesa5jTqnGYKJ75EZbN4kwMYnQpb7SNLrBsoeKvpKYEfZcnGFWZFV8MjASRtzLXsiM39parA6MPLCfMUmojuYaC",
  "key6": "4sRCFm1t1NSQVVA1YCtNNwVsvaLk2vP6mQZNPPhpjAu2e7qEhzC94hbbD1JxqHamfDpLdJYDdj3yCvNWE2XmjKw3",
  "key7": "2srT6RrEaxsBv83MFYjG8xkZm7nwyLqJRBskQiJA5csszA9aubEVtJrmhGtnKUMXbc9qZ8eah4UYyJ6oxPiWAVJs",
  "key8": "35TyVaj7gmeVzyN97J9EuTiPGHWzDjmAMWwM3F6ZiLoAPnDK3qjb6bz3yQtzzdyrN6qaFgHN9fgMbD1hnthUJ6T8",
  "key9": "5SwguG4CP4BboTYaje5CCgot15fAM2jEBV2tMixnJAGuT4LKC61Xku5uP5unPHL4L4NohyLUWUZgwfcskvurHxN9",
  "key10": "5CSPQh4NMZ7vUBtBMuYAsUjNv4aEe8q5cZ4JKXstKXatwor586XMde8199Jcif3VHuW2bSXJn8TuFsD3zHzRNRaM",
  "key11": "37oRPj3xAr12frFrBfrqJf8UBSFwRLeiZgmQTM8sVY9xJJSpEUCk7sHvaKBEmXwnuKjnR1eKKLrxh9Qw3aQsr5sK",
  "key12": "5J7x7g2fY6o6SW5uf8T1m1FtjFZsKr3Rpcjb2F2urN8kSmuKR5PTWkg6dVhQn827uFGtjgPzaRaY79JHb7BoN3Zi",
  "key13": "4ZvKSfQ8Rvf1wwiWzztuFwr3T3uYPx2aTMGtZGzyg2ggZiHZ6D4EpSipaRuFTGqbrKhqLwbRyDhNtcxJA3oasrwy",
  "key14": "4rWiNJXuiToXBCLV3AaSMeX7BUPm7ppscoi3XsFQ2reKsZDyu1caLEZAjSos4TMUPmGcwaPLFMyny8DxcApksYhu",
  "key15": "5EARPYkWQkgKCxWDfW3tQCWBNu86AxZB9NUBz5tw2hxhiBC7bcvSFHBaKzQzgP1tpXaENkKkvFWzNuQ34N9PLFar",
  "key16": "51WBwRujL4qZavBJsJUrUy6e5tuAoT5fSXdtzornPnTx4BB7B8k8L5wFsZqw6NgaySCNcjsahs7pNyPi5SdCh2Cc",
  "key17": "5pBFynVFnC3tuqr34Tz4xrijgZ9fK9FZnQakX82jQJJLE1Fpr4mS41iRi1Hpqrfy7wCBzBm6vhH3d4R56JhHhKTN",
  "key18": "3ymkggGxoxj1kBsMSVD6GfNcQZGoGTcMymn9MSmoAaVbs8e8Ww695rox4e5A4NgE12XhXbiveFNDpUDGdM7rvXso",
  "key19": "Vab8Hge1TqGF6N3E89yJfjom1HU5Vf7AJtRQDZrpur8EuzvQFoDDdB6YFCrJqajNud89n87wzKaXGHJYcDe9mi2",
  "key20": "2SHdsnyxwR7cWZfjd8LEnU4KDAkGzumjJSyWZqQ4Q4TYyBwYrtR98mSqYxPgAfHqL7oBhAQKjbbkrSyWQGdCzzeq",
  "key21": "FJ4o9n79VnQscP4xDYpQep39Z9tJG4gfwAhDNB2MCyyyK8WipCSF2ZDAySRwtGcvvUDR4QCxgq78ZRpafvLmDZR",
  "key22": "52aVy8STCR6kCEa8W1zvgMhLBy9nBG5iSfg6nsXrEgY1BNLvhkvytu4ri9AD4XCFJNZ6PaCySqoW8Xa7M41F6Jxm",
  "key23": "48vodWWTjYWZpNGCyFt42TfnYUhvCnYEak3JbKAAka3poSFCzn9bvuzZstUAGMQyEQr7ht6bTVa2ALdG7mDyK2H9",
  "key24": "2RcbBeBt9yWMKnocsz5xQ1Qf2dmzi9k7o7PBo4KGQxKwQ5KUWEtJnq2AgJbCS3MxmN2kUHH72divTPS6jGx5y5su",
  "key25": "48dnbs9ezbxT5HaS72z7QCfHjdS6XRc4zDttn2PUcuJwV6yiLDHE3DRNFEBNYMy4tbymwCzwbhCmHRX1sjPLRvKV",
  "key26": "2oxfXWTtc2DtXN761E7q9uaxrpC63iXzVvsgDXRZTkQjMxBiyTyJTJ6tNAux6Qb9HcDcHtn9DzD6XePAFRGexKaD"
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
