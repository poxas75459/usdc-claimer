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
    "Y4naSXr6T5CDQdukeZrMtmCatEp78z9eJsKhUswX4usBQ9Bu4KN96PNWBEihciiLLC2TQFXaDPuVi1JxmYerWkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rK57sRXpXHuFBQPh4ydJwL1T9iF62cKCz9VW5oMLjNJXwiL48Pd1792nTZfr3sCUJEfKZDFjNFYdh4yqk8t76BC",
  "key1": "4JZyUUvHdfUGej8qhonw5nv8ogHbsD27UemfLEuY4iQsZPcDJnpFQMzvp5DUuHw35ucVumGGibB8anQoJccoDZV",
  "key2": "5R1f2fF1UpEFvCSrqAasWyr5MnMZS8jqtX9KCVzY6MkpJDJn3U5HiEGzTQ1bUV7bCkMW2XRc57bWURwS7f8DGqz3",
  "key3": "zhDoyFsRojbMQRJQA4ddaZUD5huHjKQLBg7iD4fDKEtsxQfC828Nzjh26aL7pZCoqM9cTpu2QWTm4fjRL5hYgn8",
  "key4": "3dW2TwaXzoboH4iLkA6Mhrp65cXNmK76n5n2dowc2ZbUo6JJnmYEvtfmG4ixJ2iA3RXeZBCDM1LVCaaF1pKPjEGi",
  "key5": "28ecPkpZfYYW4We4hYiz7Jf6YeccMHnpFitKxb2K17LoemZLBn7tyr8iSoHcuLHd72X8APG1uuyciACzLCcSVd23",
  "key6": "4Uw6AqpranWZnxCKtfdz5gcMwaZ7i9hBXYSf4hQsuCRGC6kWyAfcabnYmPA1H9EtuVMGrGCvaVUYJz2NFRh1v99H",
  "key7": "5W29rWiUAdRBCbhxrAt3UdG6kCJTyJhDwbSU3jsDkq1NFhJ7iRTMkhqZ8Gny8k78vY1rjab2ZFcroxdRX9zbC5eJ",
  "key8": "4ya59xGWa6u2br7tEWKjjG9WEbBkWkv1YHG7ShM5YGCW6oLUutrKgLTy79MwN699t6urzKPwx3GumYVz6Rywafdv",
  "key9": "2McSVUFM2C9mt5Kt2dVhCD9pKiBocUxnzNqksom4j9jiQnAV12csG1aEMQENHUkqwAbzoLTADUZ4QxfS75U1SS5b",
  "key10": "EVNJDKpVjDM6MdqFctL3zLPiqQcLmNVRdjGbWsyKyEKEadiELMP8e7HuaEfhhd6kvEMrvM1URUiY52itXq6aEXZ",
  "key11": "2AFW2XwFQBYC6eKL4KWXVYqNMZpoEGjUzRCuFDUje7dN3NwQAtxS2ZpHe9ZAsi6ejZnerkmqXo9aTfcGRqPVdnzt",
  "key12": "3HvBjKcnEFJFqn9quyqwsPKdxDufmZh1LsjoV1uPmQSof7GekMeh884S9AFDDhAM9CMCAjceAKXvFidR8ZaH1Qrj",
  "key13": "4kmgkkafBQz8wMseMQu2RPPwz2MVkTpQ3qZ7tBQaJ5SWK4TZ226SuAVHNyoR8bRDw9ndLhsscj62Avc31dtBoHE",
  "key14": "3uhKjHrKrZuEnMb4jzateUDpvZyNfeWWzWw9BEEmXTgU5h2aesJisZdRNLxYca4zZVmoM6XD6JUnrk5GBbYRXscS",
  "key15": "oaWGXbjCHGyzG78M5C1ZKfA34goznAdKkunF6Yq2ev84sffze7DDUZwJaG6pfP5tsCYuJAYgMkEtUH71StZtQ2U",
  "key16": "NHmX94nRbKkNcdH3zifcan348vpwApeDjxoHgD4zVp1JVMLQsertf5hLYwz5k4MvUL1ENzF84sedJAcrP7MKGwr",
  "key17": "3nzcWKwcBoWCceWmn2MQcsXyMHnfxnvb1EsAhJWtGrYYz5SKaTYcNKaFiv3jEGhpaSLUsN7UDNktvNNPqcpo4Z3D",
  "key18": "3qyrMQYnTMsS7SRbNmoVpWZdCCVhWLsRi88WgfT2ik1U8acgBVvGiNgvXqVkidQymo8cVgBYsf7ZEVzfhtig1zTA",
  "key19": "4ceNVDbkKLbZY217txFE244nbEDCRetiGYv8uoPDHbHwMww2XsyB5oECHnntJyNi5BHArBtaUtQJGACakBc8ZX3Y",
  "key20": "65huqT4F5mTVxj2PSHa6waStzsyUsdYr9364oHmtkKqpD6YWD4VqzvBsDzy5nXhwgVS3PNj6rjokdWSbAowBL5F7",
  "key21": "5ejwswyE1Baxg9gdZn3jQzhbxyZATFMZKmpaKdLXpDYMhVrmGcaTEcTRoDX8hBDe8vxzymDQBbRftUoN7bsBJ1XN",
  "key22": "2aMTweJZzH3ai6AfYm3bZH4L81x7dT67qLD1chGX7vyrxNoVG21Tzra131VPVvgKqrSKGBkzLLcAyYBGjQnegAeX",
  "key23": "4ks9QcF8LknMkLsB7VcVCjquxYGrRtoUGGKttApBxzG2SvA2tudgmJYDd5QTXsZQVQA9zTzymrrWQ6JeXifienVh",
  "key24": "3gSmuTEfVqiRY44uFgomgfesnHnLupQj95NaqNapuXaE9UfeJyf5M9AmQjje6Nk9i31QoSuZJEHuJhbJDzRzHLNf",
  "key25": "5i2MfwiF33MknWrNTRGatBpbEDF4nkLZu1Fkie4XBW9y5SofzoUiKDRiEunFuovy7TXXQsvcGRrZsMD8qqR3JPBo",
  "key26": "28ceN3NZp1yre4eZRsRPz5L12QmFgdNMfbGwRH7YFeUYdkZHPfucib4dMRaD71GHgsnXhVqhTkdiYeEeYujSWft5",
  "key27": "5mhh2r83jVktcdDnQDfc3kjPfWDEk5fEMRVJhryqpQtVHnx1NG9rY8SMpWKkok3qLG6qvcAym6YRJLRza8PXf1nj",
  "key28": "3MwfgLN1s5SrjHVNsbgThQSNurY7LD5jZrJqsza3fmCazZk47KUVdB5EqmREFRfZFky4PhwgszKvhudBXZFCy6oD"
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
