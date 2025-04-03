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
    "4XYP1F6ioEvafv2DNwS9s6bpfGFNKVpQJXXEnyb4ea2RaSJpqujBEs45RnLh4oJrwWapyg3BcV26rUekvkKsMkh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DwVqbkCu4BdXgVDrp2qnrWpp5Pt59K7pT3qwRcM8BtKmiugsrPbhGP9kZxo7ZcvukQnSi6TjbrGnxBBBj4pt7m",
  "key1": "2GciA2avNh8h7zN9unmsgRQF4f1guZWHyGjecCWzcr8VfBDuH1iViKPGY9pqseDpgAqGuD6ApRZ4oxku2Bz4wjsR",
  "key2": "2NjArCFaYxSgHkutM19GeQL9r4F81n38tPE7ACNna7LAshq8Fjj33miST9SiPQyNJHhQbTnuiKw8VA3gTRrzaXoa",
  "key3": "StgKATeMqkDTxaxVeGYstpMMbqf6iVUtatJ1kKhiGpycsHDcyxHPXR6rUgGUW3FfniBj7Z3889cZiXLXLHQaHPT",
  "key4": "51yCHja6hoCZpuT19sw6B8o5aevu733EfNQzuXjLhQnGQMMZdGFT17LPpxaBWgxizBxoV5EbPNjmzViaYjmifrbr",
  "key5": "2qgAebHgkDVjwgpVyS77kVuKWqSd53MiuvpGZ9bjC542ecRp3vhS7GFPFgEe4RBqnSYVth6HsbSgHkiKHLuYxJhZ",
  "key6": "4oct59fm6aySdxnucFgxztQGgK9ANxFwJrCVVSb2M4kzrTPzwbNkVgCuW9kesyngvRaiXHGnwuBMU6PtCtrwdKtG",
  "key7": "4fkQkFXoDW8osEaYGwmiY7qy8LQvYmz3xVWxoEmDDnRJFdNhCwfuziGbcGRbv9SxjvF9i1tXsuAi7mXFLjhVae9J",
  "key8": "57fBPe7g3hoDmgtdECgdZs3ktcu6mJbQyGTShTiXWVrnVN92RrHSzTghgH9b1Y37QbNXVw4n3RbSoxdwuNyCNjVM",
  "key9": "4Vineu7W8ShheHKHb1m2pKYhVaicsoecfhoM1yb29QUFwPpYo5gezLkByNqBd7pkdsnYjskkRojMSVKb1yWBKVNJ",
  "key10": "thAeNeGzCBroKB6ANN43ttBzVT5iU36NfruJTioCkR71qsYZ8hFy9vaXwyV1piLwdcatr9YYEdJWkBuUz9kR8tf",
  "key11": "23nRkZ6xWHPkMWshosZRhxfGEffv91BYbtbSys2KKVzcBXPDcQUiBpBd9JKw5qN4yz6RHs22ENH8rxFjJL3rvXFH",
  "key12": "3Jipyh8awP2BHuM6mYFA249S8BzhB5jQeAwWyGmDRysh5UojgkLvvPFbyuenZvU7dzzV9Ede4kFKd37Ye9A1mUTC",
  "key13": "4CobpMRXk33jR1Z6Gfk4QevJHoqaFF2mqrYwHpfYUuKiVgMojoFyE5vwxnMBM3pcAVFuXsj6xXpsWSnzfQk6wdyr",
  "key14": "5ms5sLNZBu8bxu7mXy3HBKN67A4KNiLQz1T6riyL3mAibhjKPXk7ESLt26sBrE6RPqfRciuSaYm337cHkS2Vd8i4",
  "key15": "7AiNuTs2ED96TrdQS9vdNGpYEYAw2V2kpQxjdtNsLTuMj6AfaWnZ13pCKkRrZssK29ynrccx5HwhdRXQHmJQSH7",
  "key16": "5GW2qLxUTMf6Z4LfSozTFJht6TRcWnw73wDB8rokHfvuZqVXsfPEJAUm4tHCqHgazjEAgjooRNFQ64Sxi28KADcg",
  "key17": "3jaJSqLrNb4hraqpca39pWRqRTpekbnzUMghEDyyQ2fUnEFWevZoNmJMhUBNjNiTLujW4whTYRakT2SLtzpki7DY",
  "key18": "51msZzkc6J2rEFcFqUUBj7F6bHVQwFNiL6dexpaAK9mkS6a1Kr7EENNuYt3t4qpAG6yDksKE24eWbro1XLBwKoB2",
  "key19": "WL9WqzW6MtfqEgRwvSZWtpFgtJQ9UNvuJhrfVndVgpgei7sXdMnJd3Ym7VCvvSxf8Uv6Z1ZKyNGLbd5hi3hgKkq",
  "key20": "5fEgf6i1tDm7AsRKHFT6dRPzAAwH8oLQfBCQSYGqr5n9mPkRNMp7sTA869yKkTGcf5v3A4ByLeBfbHUdwCRu2NrF",
  "key21": "922VNPiEibKiRyXkTUK9TuzAcWESTNGftofoeZwoBfZtsMtqm4VWbbbufnneqEHkAvYdDi2ZguFxae2LE8gm15L",
  "key22": "3jrupomhtNw121ktEsY3SZU4w16NwQDk8AJRqsGQc1eTvFcNmset7JT4tgzeVTbHCRygZGNwdGUoHRZvqvFDjSDq",
  "key23": "4mBYJhva8Lm9Pnwb5tgbZWcnwr6XJgu8Cnu4KdZx8FcWYKRtxBxvAhTeRWUsc94QpGbjsPU55SxGnucwAbYp9PSK",
  "key24": "4X5HDQjcZfTUzdvwcj3JwfoSXrosBxHvdrzDJKhbcToW7JfNoyAKNHTCgxHw3pxW6ToBxR5NyWAXv3bg4RdSwzjR",
  "key25": "4zKY3aKAWkqFZyowADvPK222GJmTMMw67dhSxXzueZsNXL9tYTbqWcKLnftMdi3tqLFSVALx84ecrfm4qiE95ocw"
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
