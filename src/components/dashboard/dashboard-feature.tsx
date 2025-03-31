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
    "2Hg4juoZjd9d16z2EERsQHQ8PTDzYGgzKEwsLKAPWRMB1GAsh7QAwDpgAGSNnLhDxYGELTEkENshSD51WoT8HPpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKHysts1yc6DumssfNYFjdMynZWFrJhJdiRTaEygvdTM5cbTeaZsZSU56HNSzmoD3z8pom1j8CNWqtfzK5Sqoo6",
  "key1": "2x9yJ6eKxTqEoSriaw8jucm7eS9rLYkpyZe1w3J6PVBkvgZSCQWtcDKo9uefa1kVCUFsByrgnYegUr5oy4heZMD1",
  "key2": "5mM4QE6Eoa6YLyoNu6Uw59RafudbBfTLkTpxNmYBwi5dKSiD45SrZdz1iTHY5WLt6sBf6za4KyQaA9xFNk9hWiZu",
  "key3": "4fuQQ8Wz3pkr8giJbmGUByDfDJaH2F56AUyEBzSdiCeJB9kJ8r7rmiFysEnKbL2z5RujtRGXscDm6R3MiLoycb82",
  "key4": "Foh4dwaF3aTFoTgc3FZT8km9NYFSztELiWjACPAM71J8bggFMZxw9iV7DUkEcE83G2MYWEXNxSZ2qY3HgHqEct2",
  "key5": "3GHJ9WN3v5FTnik1hMiegyw8id5Kfx3pJX4b2rEaWAioEF6hwPtC1fHZMgQ8U571KW4HvX8bpDGKEdmPX4sfShUP",
  "key6": "Bp5NhcM8w8ejeX45n8RsaqY1dJWy3B8orVUCP8SBw9fBAJ1mZq7bHodqW7bf4UC5NeYFbhKRNAa5PnVXcjmsvj8",
  "key7": "4RxpqawRWPY5sStBCRepZbXGXC8TSQTjdgdBjv3UQSUiDJGXPGUung1QdZqw5nP68ZsWeKx3Km7GDbgcsLCvnVih",
  "key8": "4WtcUsuCdHUhdnq37mEcy1ANN7wjQFfS2r1XnoNGxFuMYSb6ngnUgZ4gnB8MKYeNnDJaVaMhW7Bkb8GnNVTgRK4z",
  "key9": "3Ru2jr7rcqZDspA6gZ3PpQxj4Kd84wDXk18Ek4Bmh8nRaXDWRA9agnnuxxhzzxTTarGei16rywg3LyhPvkSt2kwi",
  "key10": "VCf3sR4s7UR3zpQRERFQjVmgRF7rrcf2XWwrNpzXtecYeyEqGUEFcbX76VstyH61KbnxckyC8ui3dckXbnLUhb5",
  "key11": "cWrh5odgxVBDGVixR9K6J2AhRmhRy5zhr6d6JESdXaGWmc7E4UTjYviTspn7pHtbqEdCVsagQ7wT85n4Kq4kYkJ",
  "key12": "5hfY6otf6LtHxnsucsauAGXMk7wdLkdm2J9jzBhVwcGW6eR8ZAbeknLkNCJYYsCkNvdi2nT5xkqE6jPCHktg6Z8v",
  "key13": "4RU2uM5ubZmc6vtWXqXV6tcXAx2BLkZSjW5MxN2qMSPwm4EU24GxwzYBLetkCRCekWZDgHKSp2bykwY13tmHbcmH",
  "key14": "2zKWdeS7W2ih9DzgSme4UsXLUcuesbf1wgWFzRfnetYJVx7Sz3c47RaWSBdP6fUyBXanTLb9Hy3uq3o2gmQ6hQc",
  "key15": "hxeyE319s5EznZCmWS5BpDVbdpaUz71CWBUU3YjDnTtFm2PTBsBxpWoSqFDcXXz36kCvZtm2XX5p8gu22qPkGKk",
  "key16": "4nA12omJvGofr9vAXtgGx3wqGhsxTH5aQk1SUtoZLbcFWzjbP7uNxDaD2i6kzAJKbERP6HNipBaxUUqeyk6biF7D",
  "key17": "3kTWrZQFHEa49vguEA4W3SKMu2EeUj1nzbdnwe86HjG9Mp1bzLbdpszfTvAFDekDTVUYVb9fXNwXUhqbsPtGZhe6",
  "key18": "27XQ7zPa9HXavBicJK9Np69gu38SpQ6KpyXn5VGn3PJhV1ZtUN8CZFZPBzJQTxahfYTASkJv8bu71BAD5g2jGxVB",
  "key19": "651vUZPaqLTmScTnYufEgUbKNxZQu26Easa5pJU3fb64Kmw7j6jftMBpCDfKZpnSRsrEc3cvFv3fvQVBHiKiXpKh",
  "key20": "2yfZb9A7DiQvfCbE9HUUUfMfSXSvJEMpny2Cpca7fYTcyjkp758tbuF9NSJTag2Ao7KnWUbx6uifd5qeFjYRnG9y",
  "key21": "5vA3JX7VgQeipGKbG3fBEXhJMtJRCQqngjydH79Nf6F1Ri2nDepoqg4NGdZiPDqS52HjNBVD7aqYM353NtPenevT",
  "key22": "qv3HoYHogpnuX1SmRqcbCBp5S44gBnfjTt2cALYNEeQwt2kmavbAxW6VWUJsxr1w4krw8FKXoqgWn5FhEjuHpf7",
  "key23": "4Dptuh4LkyPsfNS5kE4nbpbvPLAnvT6tSgqrUmNg8BpxPw2qYA4XhdgxLuvQW1xqE7mVmvq9YtZJRsgJWEUCUcig",
  "key24": "PfuWssjcJArXAVDgBACxz8VQ8LCRWJmqshBG6gLFuSNAeXmv6dqwnZUSjZmvhELgQRAndCe6P1Y8KadFmPe3cYi",
  "key25": "2rTyqCg8EGk5uScoKh3yoZLHfTMu6Bzgy2SxDuHhqYNk9VbUxWecGXYHTfVyKNUvXSx3P5nwZVaxxdsR7g3KZigu",
  "key26": "5Kaw9c8eGG4GnrTFXZros2A6g5if39ZMKM5GgDKuv84USh5ud5N87u9YmzzeFG739Edg8s8EWxaU9vKDiNfaZN8t",
  "key27": "5iH5vqqisW5WkWc3jSrZ4wfsHQiNJzxWcmu6txa4d95G7yqsqmAnqHxr7YziAK694dpBo54UwC6kknjbNQbakb7J"
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
