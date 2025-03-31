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
    "4ss8zqYGPbsDrvWAg131UhLWYx1Q1jtNKcfXMDcUDsDQbG7EforfnKpDtk9fZTZzPLCwn6FBLJmcGdJBm6AiqEb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v4YnpFXXZsvEJNfc1AEHhFLV3kUfF2ekwxvgu9LkuL3Xj6eRPaaAVxFiC3TUUWAhW6Dhy359GNCfbEzpTaenyzz",
  "key1": "5wkZY4qG4PeR7UubEAnxdHTdvaY6MJuuf4KW7QZPQg4KQmLJad94hyCvdMFsTi8cdzmHHsA2BEjMKMLnq6TYVo5v",
  "key2": "5AiA7DzXhxRB2tXeDXKSXCMpaqNR1vitk5A7nLc1mro8XmnHqZgwrcKxnykEaKagBUbrX1jDyiSY6vKbnzP9URFy",
  "key3": "uJEheiqgfQFxT6TVwZYWFRCoLQUj3L92v6nf5o1K2MwfU2TjkDdd4xRXgmp57VJgL9Hjt3sZqnW2tDp5pLcFpM1",
  "key4": "5nkjn1zxvfSk62F88x7rV4DFEQTe59gy6ciKxyG4EwdoShLevhVQ8N145urePmgAH8vCikeTwUWrxXSWyJGvPZqN",
  "key5": "38GedoKoW7d94ui6q3sXPbryAQtYerLV3gig3gQVdkKdVr73emRrFAbVdCE6fTYxJ9R5mAMQjyPEFFjbpsRAfQW7",
  "key6": "4qzxuj4udMWbyZZZwNCEvAZ718XQfftii8weJG1QJM6XcjqwJ5EuGtrdU9uMK1dWoX2FBrGAYaBEw7YBuogXtFH1",
  "key7": "5171zK6MFjdpnsKCwRKJFsf1N3JQQH3VUsLxiv2FKTWTsznmtME7e3eFyYE5aMK2aVajG4tXmm9Wndt8SwLBTvfZ",
  "key8": "344YUHfy6XZaXp9PTfj5ehqYxroGUWXSSYcskG5yPNxiJXJs47MotSABt9Lj1tBrxBYdEG8WjjkUqcSMqLZLJHZi",
  "key9": "s576SFJxqMzdrWhmFMgKRbDSC5WrqfwRSkzFpXVXLfs96TjDnTAgPw5G1Q7c2iQZyJ8f1wnj4rQhFYx5MUu9JFs",
  "key10": "5bpDsssPT3WprCKs8zS9VvRSk1MJgchQAcKkRcxLNmSaJBeASWeCJNt1X5pZYB6j9Y2fMJS6TpBD3EdtJFgn3BkY",
  "key11": "5vcZfcj8hWmYZzH2GJNzUXgzYKcV7amvy9Jd9gf7gctQF6dsMa7szKJEpFXDBQvAQh392HtZu9UZ89hFZ5Zxxe9w",
  "key12": "2ct8TAhxAe22uJRnC27wzFh2S3wEjDrucdbreCe24Yki4s9vokQbdsQUyqRQviCjuJVQK7rTaQRXaaCfHrZKimS6",
  "key13": "qnQuD4N81g92KL3pJtgS3pRv9Cqt37aHNG4xwLbqj9YxegdvQEP8LF1WReoKYV6fT7uiUm9Q2W6KjvQp4Kc4ndC",
  "key14": "4trjErXoJ2fJ77zUMLaKmhbw4GLLK7k6GorkkGwfwXuYf2tsYBh81syHLEA5vG3ufwFEzd2bchpq67ZcszGrpHbU",
  "key15": "31Aebjei55bFf7aUT8uhMeqXzSa1q2uv8QhLMwUiuWZhRRfExNGhSCJscBNVYowGGWTEHShSHAUXo2r35JiFKHjV",
  "key16": "4tsTuNCTLH7sYA3QVjdFHrzdrx3y5mzbp5r96Ud2BQjYDksTtYCWiJHJnHMTYFQMwG89DaCzTBZC6xseDEoVBTow",
  "key17": "4wvao43tRvBzusZMA713uXfsGQx21hCU1wDyAXSGsCP6yE99YrtkttBeHq7iexrc4iiDUgYZ6tNogyrgnpTsM8mc",
  "key18": "4k3ZZLe2E47okmTivqRWNaCyP5sF5RT7RVfdBKFePMBheQqwvdj3aJzo6ZaznH1hS8Cgdy1A39qKXWEeFDndAC79",
  "key19": "4svDJ779LufnqQatFYp9ks8Bp9Fd8ZEARoYmUYQB7t4uf7oszLxJ7kcdSzkv5XHtGfSfj1oPNmGgCuVxdJH4xWc9",
  "key20": "3dWj3FozQRX2ouJX3obu9H1D3dFDj4VdGzsYecDSmd3oGaMvvS9ovyvycBMYDmWp7n2V5wkxutqjK16qMsTgt9qT",
  "key21": "21XSoAQpbQCd6gvuWC2YpiJq1DchpT5mW1GKxJ2SivQoX5rAvDFx9LX7JdP2tmWiTVfSH6J7P2D7Dw238PvFnaBW",
  "key22": "5MNUYpB9bGomYRvSkKu4rE4GkyhrZasA116RpUdHNJzZzj8fzhrZbMe9T7UXuGGS8N6vWLkkJX9adg2oanTRh2Ss",
  "key23": "ky8fVvM5tcfTXhq9Y2AJU18L72DSqtZhuo9PiANjRwTBfoJ6Sc3koz9nC8Q5GNwDoaaFVeVLzExXKA76VN4cHpS",
  "key24": "Wt2UTcqkrXFLME41tcUNsofZH9rUbmTsGhFxjR1e2PbQbaKHxwu1DvAAhsvoAknGWymuXAvkjaSfSmfZQ2q2A2p",
  "key25": "42sPcDvvh2vFXA4yg3QMheCRBVZGkKutwBHVj9s7dqNrfneRq8tSC191m3oMWbT2NqWL8gxRqpcCRPdKNDiqw4WZ"
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
