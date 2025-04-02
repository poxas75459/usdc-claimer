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
    "4xhq5mqFSMj7i6ftKQyzwjwf71wkRAnbLZ2BpthkFv2brZdkNmxktmdEa2tBicrzf69QCUsJ2FEvDNwUwpE737Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iSbEJRxrhUtaNoz4xYty1XLVZxZi7sBQQjtLiEf4qudFnqCyjo24Jfi7SX7r1iS7eNM91Vg5J14R57aanWQ15Ks",
  "key1": "u5vusaAGqPAeyJUJvNJvdPbzuDqwhsTqKYjVPgwHiaGeyxZ7q2SBNJHhe95CDhzSMsxRePd26gfWsTLzEkzLkCG",
  "key2": "3294nFYPeAApCxxnHd6DCw5cf7w7iE6zMS51kMFCjVztgJNiFyjH8gMCTggjK3gYmbAoWqzkTG3PAR3BL28cV7ys",
  "key3": "38oMysBRoj31dDGvPbw9KeXuDg2HTstJVNL6yBTihv2BT7EcmbQPX1ko7Md6BiTytwkicBm55ehfoMeDvUtVtpRC",
  "key4": "2tv5fJHAx66qwqLqbokqdv5p7Aa1ELq2jXAmowxqV3wRpAYdWsqXB37yJ3KaHRkZvnsNwNusQVGXpAoDStXxBcuC",
  "key5": "57drPBhC9TH9mwSVvD1hj7ZNLyDNzNjtEjZmHzWXgWwRnwKTnZW18PtA2kJ1hu4LT8ysKUb5BXdacaHvm21qYdVy",
  "key6": "3pMxZHw3kyiVTTW1CkzAmWRLebefBKwSSREfsCcsUU5UvyjvtLNgjzvtTmNSfU9CZJQKSzT5SZz9wWKgdrxojA6X",
  "key7": "5SyErD6zDCX132oLkahX1C5P22cWmQH5AWfxhdJ7oSugaQfQz7tAxpm1eieKLSUwFSiFy93MKTnLYYarMUZaRxce",
  "key8": "65Vzi3PjiaGQU1vG5qpEDsopEYoHX9zCaB14FarTF82LkYktN3YZvUBzUTs4yPDscQDREGEdw8yPTTLrfDaJWYL9",
  "key9": "h1pY9i45sdso4mPAXdLKs44ohX7taKs8TkTcEHgENXUfwBDcLzSFoijsFfjbgCrZaQZ3WWdm2BTpmzRYN5DvoVJ",
  "key10": "5ZygooVc1fqXCBvZ1DVfwVv6Yy3yhR2D9JfDUHTR2wEBgkmgiYG3u2GKGQNBg6NB9hjx4Uu4wjSV8RJew1CatE7p",
  "key11": "3tDAQsTjvd48j3oGLNnz8H9DjESXXvFUtYmUY7P1jgyzHksR2Tj5Yvdku6aAEST9K2KFzvGMxWXQDxqiePTQJwWk",
  "key12": "319cRRNDiVf8EXWRB6Qgtdu1UT9zFkL7VGmjtoaMne5JoWJEjHqx94qPatkW6QQE8nQw55qfSCVDoNwSV3v5YapL",
  "key13": "3jX7R1wLt14Rvfn12fcS5tbrhXWNF6g96MNuKJKrdayEoHuF8B8AkrfRxhFmBETHHyvTJMdM5P1LSsZa55EfrbsS",
  "key14": "5hy4MBVvipzY7vWdQh3LKCSCaG4XyqbDncvVNKaLekHKYm2aLXS1LdQPS5gqwDHMAmi6k85on7XG6qegWfaW5Cqq",
  "key15": "5cjuX2uMvA57PXgDqZDaachZvDE1YV7voKnTgShUdpu6wDySBzA1omPaWaCCBHeExx4pB9iegyNG5NqBrvr3XKus",
  "key16": "2X2mPHSsGrib7PGnwV2VjwYsi5Qysjz2Aa12dW7FKBCWzUeQrwkh2Mouuqa7uFrvcPuAzmn41fmCU3pAMeA58yPj",
  "key17": "3drap69Q1Di7u3gDjo7vJ8MmpCQH8iK6VrUEUqxpDyqV5267vfAsgpGGr7C8Vb5ag7fF4TXoM9JAWVwmyZWtFnAh",
  "key18": "T7MDtd5VwZMF6RnH4vu426GPKQoFVfPBWJ4PG7QXAqqctgfF5WN9WoJ6pBuRrNPDyM2vHfSMijSU8eZDx1u3kok",
  "key19": "5dyuhNoymSTYM9nCkER1whGuia7oTRtx2xBLv4katuMXXCNfX2UR8t2NQFpJ2UNey7oisaYSK8iWsJqQkWJeQ4GN",
  "key20": "3aktY2g4LMA8EPYERRdf4ie9ZhWpqLJEQmLZBrJfhbw9CRszrnVEUCh6yeezJezB3aMBoY5F53NYtG7Qrz5qjT1H",
  "key21": "3BGts1Ugq5P2xNvDxCNdjEk1zYxRMg15zHhxPGyVzLtgK6GTfqzKvwqiPnwMXy5dUqquB57RmwnbswpBUL5n5sVC",
  "key22": "5DkSJc8Jgvwdcjy9ZVMZ6WFrVgn1oGDBdze8uGB1aZtCT4YYULGQs5c1RR1KAxTLM9tK6onaE8P7mumx2xgoVT7",
  "key23": "56oGLR3f9L3undAMgEf4zDYPkmjPoiPpiA9yAyGiqULVM1j5KiTwfLpKRvoukjaUGcrSWrBao8G4s6oLj74HGSqR",
  "key24": "4ia3cAwpaw2RnD9gY5JpBU4H3NqiA2QtKQwdo8jETiMKN67XnKpVdFhkaBY6Tggwgi9VQTpjdg9CemuE8eyskBa6"
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
