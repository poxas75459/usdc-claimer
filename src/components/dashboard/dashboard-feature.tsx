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
    "2jYWHbfc8mumLfsT8aECS3pHs23EhtT1Ek45L5zArFQPDMJLR3EXnEquTKtMHwi81d9xF545yoQYVkzkX4nqsMYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFHtU1NJuTLe9GjZ7Uu4gYKnTD9L7hhCdaJVwaF5EHxarC44VpsRCt5JC7MUWXFEAk3nm4NSGK74YHXv8hTwziT",
  "key1": "2o7FcVM2kLHXkesQR7PUqJtZYaSJgWuz16asgABL32or89HbKioZ5txZ4DwzYLuu6h8WtvCTDxnVfqYjYMd22sfy",
  "key2": "2dL53autkThZ1HNt4xChXCDh1MfkpSpB4zKwtpxWKo8Ykg6BtsJ5mSGkGRThJoDP1kWN2M66N8iQJyKbKYrvhD9m",
  "key3": "3YiPvQeB8CFh4wwHx2ffoa4Kc4WX3ZEahg1R4zBtQYaWHNVsGeDvzzjx573XKMkcLkRW88XHi7SVoU6mdf2HAwg3",
  "key4": "3tLBjEzE2cNKXZojMkGNhw1N49gLkvXoF16oKDHEZAYop4MEUzym9mReLmjWjsUwALmea9aHE39uMY8vVab3qdrY",
  "key5": "D2mRZPW6daq1971aZTZGWVXNyDy5WU3fQyxGowp9mDDmAWumvQKUc4twMXxxKotQ5GL2aEYLYywhskvnTGb9rwh",
  "key6": "3LhLv443G16HoHG7RYbLXxeCwfg896D1xvKVeoK87iRzc93A4kXLYP6e9FGG1NVWp53C6HuXB4AudfQJTxneYXZA",
  "key7": "2VBZG5cU1Wd8G9asAn8SBkTUCYbz53qF99nL7RSgfbGfSsJ785KjQ4PBUcR4h7ANp3w9PAYmzUy8TekmHBqoZyUk",
  "key8": "4SPzeSy4bp1NJjefrmQg1cGadijtR1GFDuJGAvbaQLeux2MRxfYx7o8aVwYGJt3eccisnf3QrFnYj46R8YW6VHYu",
  "key9": "5edFS1tYNvZSnWEHVGWTagC9sZf8HnDgbjPvHzDQia7LQm8Nn2F9Xsad6uM3gLViFdMpuJW6Zn5F6mqJMtbQJSVE",
  "key10": "3gASXTsU5977KjFJ5tNPAaZSQ3YvH7rsgGnt4Ca2pKKvS8RyWJw6yEbw9gYDQsZJcM5HXr4AouniMWfjC3UsvpJe",
  "key11": "45ARrcfDMf8kDLS19sg2CQZVmnz6vEoay79wNkqZ5E7aQh9oDQYrSCLKrNwjLaHabQgXeKJoGfZSi7wxKaM49PXa",
  "key12": "2myuGfqSWShR8ZTwiuGzLmW2BvwUxhpg1QoZV1SdmLJqtVxwGZGhegd5Q9BynhJe9ggaU9Wk6v2NPrRjtMvcsrca",
  "key13": "2R4inT4zJwgggUjFDEP3Zbx9tktiB1gk3p7cgPDduE7SD6oyz7DJAYd99UxCUinDXLFEKcZU5LNAEgeoNrtZhuR8",
  "key14": "42nBYkP5g5mdZKBLC72hMLNewuB71TR4qQB59y9XhViJfyHS3xNyHXJ6yQcjzz7LM4bUqwX1GhnWpMuVUX7d6w8k",
  "key15": "4XHFWpAWnRezjMoxK1BumwBWx9xPbD6BBezPQLxzG7TL2yoNqRVQS2wZGLSE9iMvsXZMooUSuNDRetnd2tfS6Rxq",
  "key16": "5Dvq2PEnYeEitGEkF9ZirFztQgskv3NgSUZUigma8VuJcVKTKBh61QtD2GNTdLJfUcPchjS9WJLdHRNqBwmfwYTS",
  "key17": "4Qxcezch5ANcq5RHXDgYint7aSu3pA4LPTNHUcZTkBgrNrsqnziS8aZmJsFfMCsGf4dAcRA5zZK7yqqM2w47ybL7",
  "key18": "3MPP8cT16TfAqkf51vDF5HHzmgBSDp7UFsat5ymcnDQdb8aX8ompWppLsyHbi56386hV3h7UQqbYZmrVSoE6vfZF",
  "key19": "3kooP8b6eucZiGyYQxoxsHbBG5w5hvb3mdTEL9jg9Ja6bMPhfexC5J1ssCw7NRvehxkVBtgNSEpLgwS7viSHgQrk",
  "key20": "51e3Qi8BvDM1QnEPqD9zeYKjrrQWtkWW82UU4XiqMx8BxtZ8s91n7FJFBuNbH9ZNUv37NNCxZGJBbo3X74JdTwUb",
  "key21": "3LAWas5HJQy63bWqY5tK9zswTZdZRB5DJ1Zt1Xq1789XF1Dj6FZ8TBZrRpzbVgqk2HEMfuJ3UBinWTTwsc52Ua4s",
  "key22": "3SEQtVmnVMwBR4FeybWpFYwB8BRs1gwuw4HCALo1w5tYZFYZHUFDWWBmXLdGZES2yftt65Bfp5kWZp4GFM1zg9KV",
  "key23": "syv485E5sWg6DFw3WFPVTxW6PXwb4wqw8gmjei1GBLaq9hu6mr1oNnPgnMjcSPCENcf58YEmQ7tv41vrRYE9RqE",
  "key24": "3ch7GSSozUr2Dpb6vEh2X3eDty9wKBSTsZqo9bhz9qAE67CDYWr5bycqdUwdL9pLticeaNjsDkrUnQXMy9ar5LZM",
  "key25": "2T2wUHASXbeMabMr9DTp578FkJNuqX1prf4SDjxutu1WjXRmP8nNfXfr7HJ3EjUJ3EJ1zEZC9ekSBkiQYDLS1HF9",
  "key26": "RAUGvi3nYC5t8DPdTszJ6w7FQ9pSGNApNvasiL9JWUDE5MSvsa1nGfhLwRpxmfM33CLiFxB4R78AszQvZgoZ61s",
  "key27": "5vDDaQ2wgeJdd2g16yA1FgDXa4Vq7QFaDVqM51kZGwzV79ny5QVoQSdc3wjDLWk4NBapUY8fRcy48wNGikDmmvFJ",
  "key28": "5L4HQp7d7G1KVKy7YqaxWTMEbrzp1N5sYnfuiBjtNvoAePdTkXDr1BfkeEFsvVYt79g38qLQtmBAeZeSacca7JMf",
  "key29": "64ZZ7r1y1ejqaiZvGNpasmdQjX1TrNYguFw8RLz5X5RMEXgVb6oZo1ifhg2mWLmRjAMRoK6eCf8SEdLEJ2CRMYwt"
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
