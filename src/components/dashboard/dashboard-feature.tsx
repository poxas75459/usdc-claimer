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
    "3jve7x3LTcgjgKZiDkfD98EoZqCoG38Ju5H7MdBpzBghM4s9EuCrc9KDncbpZgBnRT2qBDYQUkVSwnM8AZoPHgkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42fhc8pFLFhZvqkUQ9HVVTfaAJBQM1B3vtUbqmT9HxWcgR56Jeac6Kf8MGSqMp9aDis2zAitLjb32ktEJ1mgJDs6",
  "key1": "27qNgxgAgpiubfP5vUjXS7RjEiccsNYbkCfMTzZiR1G2UCVvteaygeobPmSYDyHDJbUwSYtYzieX12cnBRUCSjeD",
  "key2": "2nUqodUkgJ3H7ZyLpzFbkoGnm5ntFUXaDmsTHdmiiiRiZkgBMChAqSdf8KLGGskDqHmyzbDPC8abJjyfDvXTyAUs",
  "key3": "4DnJWfxfUzd8kjX57mtqASrvN8KR6UT3SZrhihMkVT1dRnvA35xBQvr5Q78WFJqgc7CZ7f5GSJY5fEnjXxLQY99P",
  "key4": "5pfJMKe71C9hu51oe1uYzZk9YRBdJtxzwYTB6zuQmzCtS84VVCZi33sCQqLSzLHz4ouGWDnVjyvyVA7TAEAATQPq",
  "key5": "pBJVo3RGZytkK53gV34HE4Nh7xXPoaTHVA6jLE9XGRc7Gk5Xf3fbbffc5B43baDWqH5G8qpgxhGaZTf6vzJ8fiA",
  "key6": "2a9EEwT4F59CqznVvvNe8KBxtbydX9zDTaMk9WxNKS2KkbhAj1GdtADkJzZCfKsBC6sJTNgGcGyxFG99tXMCNKG8",
  "key7": "UzExFZeEE8WJhrQEYJ6S8acYmvGAXpqqDY2nCPhRVuNd7Egakpmw2ur1nRgiZtWAtUdebWma7c2zVbJXcXXRUS3",
  "key8": "54iy1keEFkJkPc986NvJ4eNCwuj3MK4P72f9nGiVBoDeQ47e7McDWyyZQDCDU6SQT4JEwZQ2W1g5j61yJFjgRBS2",
  "key9": "4m8RaR2g5E8hig31f1cPSZNcmkv2rsqE1o31hUSZWmpptZvenr7pXShRxS4QGJSnVpmVZrr2oaShyhXcVCKfFV9k",
  "key10": "45Aid3pyhR4BXYgCVcu8Gs5t9p3mt1BSSjLDoEvsmQ1CKdjFJUuNSbvUqn9CSGwqv18h1zq9ysFapaUihbguGpfR",
  "key11": "4Frcr7FbLJnyXbNpKaQAcjvCrJcem8cA7jAfsoJANAzCkWEddBZRDBxipviGZGGfj4tyYJUqMzdaPvvKtXdoFtx9",
  "key12": "4VntdjDt37NPPTjj9h8eYw6yDvsJwXerv9AWF9BtkDUJ86Xvs9vqxXbVeyURRe3W5EvRN7RynY5sDguPAxifRd4y",
  "key13": "63eMJZxw1E4nwZqu88h6CkxQZE6dqAyvMtFsAMZE97SfhuT1yyDqs8pHxqXZGy1XCUQubY7Tra5dDMhx1MLrM561",
  "key14": "2YNN9EraXDn8dGT8FbuDeANLfhw9tChwRqQzCS7wXrZZJYTwNyNWXzwFxzmtaD5Q1uQNm23YjUVaaPLqyA38uJw7",
  "key15": "4eqo7LEnAA9EVQVMk4zryy6faVQhAd6W6BfZNJNAjkW6rqDFL7x7uwJrU2cbbesTpyh6KgvMYHNFg83nJPWA7cfq",
  "key16": "4pkVWWSKufcVHHZKnJQcA6CaeJ3w8Yp4WTnUSDHsJaSTiS6gVaWr2k7DTF6iVRWNkHUAnR23xUYGd2pLVPnytUqs",
  "key17": "4H45gRxozs1nf1v2J22R193q2dWexwnvWSc48rnBByFi5A8vSBtZHxdVMTXnqZs4gcA71HfxkbuZ4TuUCWbBGDVR",
  "key18": "4WDyy3EnPnR5x3NfScm6ZxUiCcKW8TFXzq8YqCyPmd5pJgcXoatsvratKWXfKSrxswFzbr8SA29toyxi4pWXGoqq",
  "key19": "4uZN6YSKcg7gsMkgHiRYEZjcpeiBvVbAktdo7ikfX7iqsWdwxMBtt4j9Jr1V7J6AreZjqrHbV1h1yv1g4JRjiGnv",
  "key20": "3QRjMTXR3tbzUko7wbpoNhC4dA6AuPCzPdv1o4DyKYDHh94AWyMadDaDZsJsnbnnxGmt3m1w87KXNewUfaYdfCpz",
  "key21": "21U7LwSKf2enb7i9HW3vNYMbU488KisqmWoKZ1y1ZdP6h1wgQeGPc61igLA6Qt8zb2MZrSmnz77W1jbTbExtb5wp",
  "key22": "65gHn6aGjw7csZQ1L5b87U2CCZhHg5wFuhwzRPUUG3WotvxuCUVe6PirRsojNAAMUGKumByB49Sbg4kEV9NKq7be",
  "key23": "3neGbfVrWqmaeQKCYkMmWC8AWFEfTWXdrR9fnuraXFo15JKs7adhUNskoZRKe7RnYZ8CvEEQ58oCw3FCayFdm3xB",
  "key24": "3vFfERy16ChhWmeRrJaTGVNR83n4ztfSVZ7dDhoqRzs9wFCrT1qgmjNxmHiXWro2TTqeUwudM6NNQ9K2nyTpBTCV",
  "key25": "2FHVzgFCrfZvwCySEz9BnW1QovmHG85Emg3kzPMwgiyvZQvuLqHA911eKGne3TqpfavEgeTVjcv4FvtfvqYxD1nu",
  "key26": "RzDHE3whTMYQn2C7gSfyYykAcK6acNuyRFe8LWQyiTjResW2Z5fs4KjfqzA1znm9AUgJNZxFp4DiudgnUYczqY3"
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
