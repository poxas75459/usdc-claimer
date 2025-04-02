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
    "63u56Y3Rwdka9eeWa2r49eShCbmT1fShhibAKMSdJPq3tEb59HxJ7CepMVwpC4dVK8b33o3qMZ2mm5sLWhzDpHHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MiYdSpta6vWeWz95KMeJwVzgMbzZ95ctLewXRk29Shcam5i5zxAsT8XVwQzP3Ko7VBubivHGKEUixk8juC2NejD",
  "key1": "3HPBad82v6Pf99EijjgxXPKaCKU63zMpqryDzSxo1oxpXyp6CYnQY6WcFd4eTA1w4h3DZ7QkjTYG9PWKeWc11Ppq",
  "key2": "5CsHpHBFLHfRc8mnTHGbxtR96RhdZyV5jrNA2DmEt9p53uaCaFjE86NCCY3B1SRf6CkGUUTSTck9fhhuTSeTsH82",
  "key3": "2SHs9zWXuoHZE5XhkQAz7GZA7moxroW5Ra1PGKUnvBkMJLxJpfF8LNQ5iAuc4Yp3jfvhKP4MZjEpVWMp4ZXL86Li",
  "key4": "rm6NzHF79RmzQ5DRVxviN3iVHd5EovN7PwLdY8ZXz3ZUxMLx9vqrqnmDzs474v78mxS51T1r7qRwAjAFLqGwBu9",
  "key5": "5gPTbBTepHGvJf5zqnQK2SKK9M4JyKhUTceMQyafvVhBhsgEpTLuEZ5GhedSuwn1zo8VYWdeEYkYCwJ4Bn5SEuEa",
  "key6": "34k2pkMQVVGnX2Uy4h2GeeEBuUjfUS9Y9kwzpkHLbx2kSPcs319NhQeRhQoKVJbpk3Jr4Pw7fF8oGPEsPcwVqFj2",
  "key7": "3TVh2c7AhQVXfyqASWtDeikeafbSxiWJDHxhUsNWHFartDw6T4NDoEBFJHXBVFnZoe3S92mcYcHBxJuyYU7cd4Ja",
  "key8": "4HKMqAxsMYL5eFtDDcbfn2pNZYP4or3ZibXDPv82nU7JcghKX3tVcXLyAN9ajGvH2fhbwaLtJkPdhsKrb5ubNntp",
  "key9": "kCXPgbiUJX8aEi3hkU2vmLcDgwK43WrpE16kFeYZFN6htYzf45usGTP67EgUrTwZs2fVrpY5zi4BCvUWNEYhJMn",
  "key10": "3NcMQygQbc6cKX16pFYTER97mvWPAecWCkHkU7Cy47J4HcAJAbBtGJgPnc8XPAqszUmSJ7Xztvk3RqD4iKF3PNsN",
  "key11": "2ukJK6cgxSGWc2qu7oj7SzTQtVNBLVeUPPVjMHDWZ5nA4u3TdYhipTdFxbPcV6aQHJtUBmT7iCAhaUy938ckPgrR",
  "key12": "5KLTEQ5KvFVXajws4sx6ddnuokvwESQjRy3jY9ozGNnbhkqbaVcMjkBhVTR2jUxFXxfUYwXqR3fP2RjcHpbm3KjE",
  "key13": "2uadnSaipt1yyf1hj8w3UBGNskeojyPPqpB6ozVzAmHVGbci62tyRymUyxUKWmk5NvTDh9fVr6BjW2wev57TFN6Y",
  "key14": "2V7PAW35H6YWUJDqyTrsMtidnrrhD6M85qgB6Ptu1hzpp27YHaivQdSaQnKaDY2e1nr2LZG5AtA8UrYLTZKfsPPh",
  "key15": "2KjGB32nxyTtXCPAfvJwZ3Bb1rTTyLECAYPzeHWrc8GPE2jM9ritGvkgfpyKfe8wmEbooMmS8t3Cw5QoXvdfTjZq",
  "key16": "4KgCc6GoNiLTV6k7uCHgFkvTVp2krAZzc68tekewysdhBR1GDwnSo2ebTgSagnZiREndFr3ugCWKuqBxEF4RYmzg",
  "key17": "5VetGXEbEcTsEvyD1h64ZW5EAYpZFmTZb8ZNtUK2JSSajoVphvZHfmWJ42arbcUgUbeb8hRj5nwA6fjUCnVcfn48",
  "key18": "N7UFsJJPft4FCFEtHXpV5WaWC3x7aK5fDdoeR71VvDBTAybu4nKyHMmdeEzCMFMTWiKSJYuEYrrSxb8vcGv9npJ",
  "key19": "41BfyzHz4rHj2WA25hZwEMS6aULwCDRkjNutZZAQWkyCxF6HyHoFRmibqqPFxZ77Vyw7ZarWe7Lisd8AGeKk6JiW",
  "key20": "66Ptng69oETDfrybhYUULoMySEnuhGjtZaZecs4hNZvZHhwJY6t6ZVwBvGTg2ibXqRqFdyqBTGZ3oS8dTi5wDkLH",
  "key21": "268zjHuHxf12cF7oUAQpS2rGrbGXXYzb29t7WfZ8YmaNmXLeaxsKhc9oS71qwMcrYa3xPYiLxkVsM2CnhomHAypD",
  "key22": "jcRSnPQfmY7rXV6jXSQKN48Wj3o8iyERgyFesSrWubKeHSW8oNTxfx3LioJQP1sQMz9zxAcJvCUUPV2A6U4rNQx",
  "key23": "RQKQTaqiUTLPSUCzDpY8Z7q2gpVAyDUJaZ3Ef9RX5tKq8EcwNPib1os2hbJemk2a1UsfhWwEj3jRXAY2ho6YwwY",
  "key24": "5Hsgk6kXFXJeMFLCsDsjes8jZ2h6L5nZBKBsHG5BU54pZwhkp8HmqKyR1jGJccBAEMZpMoxESWmyaWzP7U2q7J2P"
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
