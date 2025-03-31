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
    "4aP1oTLBd1vYE2EWXo5UccE9pznqhVxJqJW85YQ8FpQvWmpqGrKuHkECStGUN3cbMoNPxJ7n4wWuxZNkqTfqUUYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q11D9dGfChBXSHYrCESueUuNsASZAkZVo6g1ooYtMXrmaMK5t71UpJPFNktcXgfcePw1Uh1kbtucGUrfSFPwkYH",
  "key1": "ktC42pPhfSUN6SQs3b1WGWUret4zAH4duK2nGGzRgUQ5nAqZ14E84TsKDh6TRjNZqJJb7pzCured1FD975pUEkX",
  "key2": "5wFHzXmBRLcUvqsmNpVVZ5JMKyLPokB1udLwFPQZ9hYmPdUGBdYtpSYMUQWUhvSV7xbUCYzca4sQ9wsCrP4zTdFM",
  "key3": "3ixjNgM6Y8LFx57wxnS5YRnGm5CqRpddmEUMj5ziVySc33qVZ2F7Lu8K3dc31USnEaxWwFBgSJnyt4htYyua1ifC",
  "key4": "2dUWq3DL4BMPc5DebhCJpsvrLRiQkAUQfKCrnZxV5HxSsmAxgNTcsA1tDwvQhBXQj3Eo8C63RPsDFhQLsjJ7TDGn",
  "key5": "2zcJ21qZ6qQBP4wvEKi6sC3LUR2hARGZjQLxvmCZtG8XWope3BbM4cDNSTswwLHVD9bZ6YrP3Di6eGjULSAcmeYv",
  "key6": "3CrbrvUR4D5BE68uKFfRqqXXbjdFUQABT1RLcXbQC4MhpioLTNzzr5UTz6iDwBe1XQ6bn5bXkfULNPGBtzHPnAjS",
  "key7": "3Q3zmHUCwZPRMQx3pQqTt4hAe7QVYquRFUFuSpRn26NK4wBqUpxuc5eGMQfuV1pTA7fyvERW4EZNYxu8n4kiJkbK",
  "key8": "2FfeMBs4us4jyaet7PzqXgrshAKZZ5GXEZiW6kfe6UZR8u1MPYUmEk7MpNkSbvNJpD9ckJgJbUBa8n1DmJiEctQZ",
  "key9": "4pFJhM5ZNd5XJjrqpGRjpdDG3FZbb7yM3Dpb82bAzTWKyUGAH8fYpuJByRb9s1B5efKqpvoUZ6cek5DtuexApuwp",
  "key10": "2JYrDkWyuPdea46UPLgqZPsmhWR57uRa6RKnHZMAXeBWtMwdNBjYuh981f3snbLbeRMokep4a2i75Vsfrenomguu",
  "key11": "5AxLXCQWhMLESMvyLwf1iBZZsuREe7LzxF3WML1NFvQq1jKP1W5EVs79kibXUsBHfLUTZdFkFkSckiBicrJM3EWx",
  "key12": "52TCwZgJnpJ2cs2iTaKMkNkYfER6VVucnetRtUPFDddoJbq9Mnv55MPs1sHsftkg7TUj28x7JKCEHjcHRKamVU96",
  "key13": "3rewRZsue2cmwJPv1AigzVVwp9FPj1WE8VhSgnncSGLo5PNQgLCLfU7RpvzMWYbCqDBMCCZDtM8ymen3KQTYbyZD",
  "key14": "unuHUwKQCGC72aUWjJBHD3MdK9eVTtMqgCVwSoyfTDkdtmJnsG6JNnetc1THdWFy36HZtCTBY6CKwhaPh5YK1xt",
  "key15": "5eszhvbqK9kFYRadTezQnMQUmwNbvyqzrAeCii21caYdCjJk3agMywuKhebiLNd59VYNDcA1ka4Cr9DYpAFLBtyS",
  "key16": "46Bg6sgGYvnsZrfHqiEoLfiZCiXTVMNmJQicAe82c1iQLS6WduVicUNhfQqd2bECY9ZMMWpoR2TEQvM8tKjppMWR",
  "key17": "3mk1wz9UD4zMDCQYuuyh2H3dNdQhgBb1rMcjSVLvj9H7i2EwA2VZSGsktDH6PMpBhm26nfF2mz3WfSgBA9f5Q5LJ",
  "key18": "RKDD9WPwVPMnfcuFaRX6RaFwk3nEbsFgq6vWTNJCrAUhJBxGRFpypX88GZnjTtSHVExSxt3ekna73yZHiSeqJpQ",
  "key19": "3UHL3CDkGpQ7YmWN87scYkDtcSfUExkwhJtVLmsh4WpnChSU1KHTt8ncNgKDxGkRLk5fjeSJuqgi3ttwZ6c9BKiZ",
  "key20": "4pV5GyBLMYTwFc3TQ219xm7mgeBGp2yn4Wf9YdWhGbGfQ5V8cWadzKhZF9tDGy4mGHYF9NgNiSfNbnKNsioS3RY2",
  "key21": "2miCBp4zSL6jd8YRoY2bLEG99QiqmtpfB6QPBtk4ZfKFZztC4vruSFx6cNYpcFR9mzWTkvsLdf6WR7Zm3ZQHfUx8",
  "key22": "2MaFysiUyFyBBYEtHc6Lp6a1N39HRkoZqNQnTKaujAKYoHajxYCeke2tAXYXm4U2PKkiR3ccGUnhM2XhGeUyaerw",
  "key23": "3fzPxT2wTvspq5VVstLbV8mZxg2Ab3yrcra68cSrR9apVzRvFGrufCVBZ2dzrC4yBq79FhVciu6ooQpCkvA94zXB",
  "key24": "675ra1QtFSSkUsEX2qb23m6axEj1vrrpGJT4ef8kZHukKKE3858RaUK9dKrTbAfZcH8eWunW2oyfw2WfsKFf1FMa",
  "key25": "6e4AuV22862t1jhexUQX3J787BVq4UFbFtvWndHXnni7jkktkHWWzvpDLQxDzoGb5VTgG5u7579nxWyHBenL4dY",
  "key26": "iW1V9Ud2kDhFmVEpvBbghGengUUbw9rR5kkCPZBdH8Qm1j1CYeiUG9qk3yfojhDyJRRJEouGNiHFAS4wAxQZQDm",
  "key27": "4omkNP4eTyocrWmbEJpMXMiEexbfvEEPeqe3wknL8uV2DCnMfsho3TWfpd6dpKe5XDymvcfXbGTecEb3K1HLQ8gW"
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
