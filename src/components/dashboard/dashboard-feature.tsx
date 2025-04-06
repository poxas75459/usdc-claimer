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
    "48BrkAhHsVmaEVoZ8EKmrMKAoDy5uwJcM9MFW5DhWsPkNGLujcYqEcgqhFex5XFES6Fbw3oh2qzrfFjYHMWvHvxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyhsx3B774Zits4hnQb5E4Et8tyk6LqddqbGLFp641qrTYBM6v65FfikytaYDoHUNiH4fdQS3fby3sQaYyYTLgm",
  "key1": "o3Y8iBN7eUB3vQN5sZxYhMG1TtfEeWRNaBmYyhezb9x6wEDUNYFdQpd7io1u6j8N2AkpsywEtznYxVHDFfVjHqM",
  "key2": "3VCgNWTZrFpZy8DqTrjucsBhEfCSHDSpwh64BBUd1CCBLTNwodw95hNH2ggGXP4d2MMeUxuKQk9WVDixbyosvDkP",
  "key3": "2R15W2e9AxoRwzCfLELnE14koQKkYUD5KpEZsYj4ht8PE8EM5HMVZkf92XExxzVFK8mUxVjyEkkiQFoBPV51Tg73",
  "key4": "61pSarofHqPx9ZfZJTJsKkgBkbm27poKAHUVDyVoAkskKyhYaf7em2DVai2P5GPUxF24FG9Hg68TauoDwqWzKJap",
  "key5": "3ASg1xMK23twKiVPixpQmfC1GNjgZ3yBzk3YeuBP4yenXBrESuLxLSbvDzigbQzsX3vgD6FeVQGBKN4epuizHk5",
  "key6": "y9NeSEe5MnS25wZmcWvLXyKa23TxDoBs8DHskoYj8JT4NhBNT3nSTckC8LdJRZGqhjD1ENCPgAQkcrJT85x8DAt",
  "key7": "4zaVBGhHRTvcDfhYUbx4iiMxCvzfQ2avtexmtBKkjEvhMfR9Cd86a6cJ9McSKnkh6L4rcdNyjbAZ7g6HHWrnKjBc",
  "key8": "21s3kNoBoGsNKDrBRamj6ZAyEgbCQm7ACtufVX8GHv1KXbk6vLpdCLrK51APjxP5y7HjBrhWTMYid7SHswQKfbFR",
  "key9": "5J4KW7B2c2GQi7ZvFFF2DBJMnkNyEtqhzdLqzgJJGX1cHSFrpSKUPjqZPknWsRJac78ZH34Kdc5NDpbQBD2C35HQ",
  "key10": "eyJrQxr8vHZBb2gSH8Gk3jyAs7h3ZyjvMv4mT8R2MHC2MGmQAjseohdvoUUiWnZJQ3i9kXvdawztBu9hTmgqEpU",
  "key11": "3GYX985FNcunvrWBPDHaE87nfsKteMgqPoKpL8mceVAAhJJXMLs8uSfNjsTyc2zjkvnz75q2WXtxUD1TFuQ9Knhg",
  "key12": "2xN1NgLnPrUX7BUe1aFxGRNKVAeLn3Zgj8JZM3KggtwCtqaR41b22Fnur3HFJSGfN5AS5iBhVyoq4RMgpm6jUD3X",
  "key13": "9eyw53uRvoh7cPmd2dLu9MQkiMmYE8cHUCtyBLzGhwmfidsxMRWJKBm2nDusEhghojxoewQArUT2cSoQg4EQdfT",
  "key14": "25UobD3Avj6vX1sstCFJMTjqp8kpciqHFmSqccQsCi5heZYfKoZuXkxTmXN1KTEvzEmQr9dpfSbS8bezpUbqUQzp",
  "key15": "5EmSK5ycj6N58VikCXS8LD3ohBRTbxbYTCW8ReCsuVfe3eXDsJ8B9d9TpNqn9srz5LaaJ1sXWAGzijK7URo6xjGA",
  "key16": "2sgDAd6k2Pqo6e1xmu7AXFtLgaZ94Bh8J3iNaUAyXRkfEHoV514ePNSDnBJMoyDpazESqTyb2EN9SdLh6mQHc7QB",
  "key17": "56gsEBxVg1DDinLRD3gEHAHAWYWqrsSUHR5EjXwA1kewXHQnQ1xdiHSGJoutNngmgfFfHspaipM9uNWQ9YnJnnr2",
  "key18": "2QA5DTeik83rUQJiLs4s8fwKs58V9Ucc3gQiRGCAhHo467QB1hhiWRti29Y6ws6w133N3JKkK65ESnedXsegq1p4",
  "key19": "5VGK54wRkXr69b8G9tGoBvnfNHq9QkCdtnXuXgizZPqj6YdddDyhSBXAaT1FJZbyScnRNKYk7vXCoj7HYrsKv2vZ",
  "key20": "3EPTCdGbJh9ygdbM8X3yuDzwFFkquEWePjFVRBWWsGK52fU94LGZywqsZc75i3gz71Y3EJ1RB7FvddLvAs4Emjuc",
  "key21": "i6dsg2nS6ayFjoVSDUwM8QxHhLrcP27DarqDYUGgkisfo3rS5vP2yck242b2ybHMzmpaoqJTTQ5qwHHHxnqaaSb",
  "key22": "3UrZUdALmambXMjMLkU1G7qAXUjC8iXYSSfxpqSaF9jNviGpLBY1KzTb9VQEbake9d4rtmBxHcRVeXpPzthFbAP7",
  "key23": "9iNMphf5k5f13jYw7E9ec93rUc67CcZgmkUQrKDBDAQScVcsMoa8CCT4QSdhhJnt4UTdGDLrz6BaxkzPzd1KQn8",
  "key24": "5npJE1uLxWGnT9h411CYHDz4Wq9sGLmKtCtv2nuJhEUWPyseqF8XFjZDjWrJDWCQDtJNMWbMYk1UZXwArisdsdAQ",
  "key25": "V3cvFpdqpnj28B4m4aPzPzPHCjdiGBmL9Y4YXCXxjMbHMzcmJe1t9jUmQtMK1drzLPDUEn2os6zV7NGRcbTKkCm",
  "key26": "4WczhwJYqPyxn8UVpmNRuwuBdfW9UBTRumQyi8H1LD8ahUUJDW9ojoiLsF23BetgNGAoyAopsptkqRQotU91frwW"
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
