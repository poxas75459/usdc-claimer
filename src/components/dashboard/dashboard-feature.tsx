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
    "NWGdxD7PCea1UuJrRFjwkitjE4o4XXKb2EHad1bfh3XxcNbE2JKWprsbBfhWJyhVHsLn1TJwniPhTtkWu8HWYAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XxZKiHPXHm1proTanmN3qFs1X7yCLrcf7XTKi8DY7jB9QxxBNccpx4jf39aGDALZuBgWECaeUTUfwffr2oWHAkE",
  "key1": "4SdLDxvacRNJY4HMBL4Uaz9vwjQYUkNpqoub44xSP37ojjUbNkrdNxE5C6EymuzRRJho1U59bG9jtQPhkGFcL5f1",
  "key2": "2bA4dJz2ESb6qqVXJNuFgCqhbiSoDsu2s5HmpxtyptQPXz5qmsWvXsed4WFYUtC9ko8bbo1bbYWN7y797wgPoLLf",
  "key3": "5uqa6ScwujNmWGYEkFbTqC7vagkbvrtpPFNjC16Yswy2EzHdVJRuvdMVaTgeeDwoGUiX2i32MAJrQRTMMot5dQNi",
  "key4": "3MtpwZZ4D8PjPjoMiA35HkAqE5imbzJAVcpqifHF1sJUsQAxpPKHUwRAGyezrAMtsYU28Uz9BjiWJZRjgmU1FLVd",
  "key5": "26kLfnDW4kh6HdXC1WiZgK6nhuxYW7BhpdUbhygsCTVmwHd74uQyYC5PQfCbsJeFRTEN4ohaUZUhkhffMrWnS4Ws",
  "key6": "4fzuztdkRmZskfKG24uWhJWRqwSXWEx7avLkBVgEmeqNzW45H9i27tZymDymLKLJPbck8fjrg8AiBoPjAZWPrxnk",
  "key7": "HN86tci7o6VKNMh3ZACdRvQfpJu1vvXABYQ3SbSoW3sLRTUrezNvY5CUTLyB4EbKxrCVhSUdWBuWxiuByn65HMa",
  "key8": "Fr92pVH5ZZyznKa2g7oAnoJWs36HYKbzC9VhqDnmHacmEJEjTAqwXdMWvPxnpZr3sg33brnZvvECuxFZs2uajWc",
  "key9": "5R4M4vVWshQTwR79P3FpGfSXW9Q6djGM7zzxjoQhwnCNBc8tydnRZ4dMHbhcofKr6s6kaWSyN5Zg3jFktfDiVx3W",
  "key10": "5VkJRRKL35BntgYCFu9zwaS6WFAXZNcUUTNcsSKzppJQ3dwSWLB8jznJA6orVkNiU3nckaWnYQaqeabut9iVpX7L",
  "key11": "56VnegkLtPjeJX7WRdK2KfUfyFTWNnKQpB9rnHCKLZdrHa2BeSu8EQykWzGVB8pQAdpQHMgqTKvVy3eBQ39KN8kE",
  "key12": "4DiQ4qX4PwnzhHaQbhA8KrFTyBNxypX86vgzesiFSygwYznR1c6CwSrcx1KK7LxeUqZ76kXCenwducyrrPPXqgeQ",
  "key13": "3NtdPZUkjQJhQ17y8WhQn2XY8VcdRJegovoZ5NKgMXGq8LbuLAQkPwxbe1jNYS626nzBDySTW3RF9APSoa3JLo9K",
  "key14": "678QnbCYZrwf2LmHRUJ1C6zRy9VLMB4W74iB9HafCDVTENBb4K6pa1f61MAjGpKt2YLu3dtKzqijzYKtrB7St7iG",
  "key15": "Vmeis7xau9kCMPGhM17VEqPN9GJUM6Zv9g5jS6NAHKMGdW4sEgigQPvh6jEHTYWcdpn8YxUH7PoqpXysDwab6Ra",
  "key16": "4B8rm94zkWFfEDyNn4Pe2KqPXwzShjfNSdDirau4cR4N3zjfZ4xXKqmJMG4sTJUEvTFW5SY5BFuUYjUhgbXpNp4q",
  "key17": "4LUg4Tjqz84xdLJkzDeGVfMbSHHnjKXeDZEhoggeHTm7rDhVfyWagTfEqQAfBsvaQYL59W5DRcPCkzL7smTz4ubV",
  "key18": "4CY3nN6PsWa1weJqVETeL7Me3dL4xNjZxg94hxTdtQz6XY68uYYKiUou7sfrhV1X16kM1yU8Bzw3gEUSfxNHDV3W",
  "key19": "3zwfCNC5GygmvZDp6Ap9iWSjoy6DzKcsEGSFGogGVxAPzYKhtPVbZjon8uadormSrt7pZJNDkoyVAadoEu9mZUet",
  "key20": "5i67NGxojYorAEiSVkzoy2J45F9k4DsbPnAejDyxYqBmanUYTqQxZo7nQggpvzki5oVvFQQaHhTbPrxdRK9sdsXR",
  "key21": "4SxiaLkveyYdMPAbF7a7YftpSzZPeuW8nkQJiqgjozcWYhmzLZ2VNA9ZaH6yow1fNmZTtADfm2NPUPabRXy3SXj4",
  "key22": "248JU6zMxxMuEXn3SFgdBey9BwbaFR6agYYuqu53A8Mu1115UsF61vXAxxujLikzmG8k1iigPNivKWSF6ZdBqtWC",
  "key23": "36gsVvZQ8ubQb5WoWBsHEm4TxrEfKexZyaBXTA9JXVDPAYzDXwUDHpq7DVhNkUezgDLrrLrLhLNAapbC2aLY12Wc",
  "key24": "4UYeGbyQpkccz2cNSEn5ib3y25TTd921BRgxeJ3Te73VYF5cGkmj8XZqPzrtZEqbAJKQwNHFhAiySurHhrLnDaai"
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
