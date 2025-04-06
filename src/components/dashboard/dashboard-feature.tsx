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
    "4LFmYXpaCWz2QiHhz1M7h41SHDtZSeJqyNkxd7GWB13xWsfJCEGwjy88BUAWmQ3CGVdseSsr4XUQupKEZJTJctyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492Cg43dLWEK6mBkYfofjz5i5HvFw4n3rtWXDjKMYVxgnjsMNXfNBWPH3HS1GRiZ5bDrZ4ngb78etmJaAu3kAmzT",
  "key1": "3o5RUqJ5ErzfHEgjq1xd3sYtkMBJiDxqb37hx5s42Rjo4fY7JzownhH2Qys47KgmAZkaqxRXTzUPGMKQg8LzUzAD",
  "key2": "4W9m6pk8CconmhJpnbK9CUrtmR5UAB4HojvgscBHcBknRWSm4YAKvHDHANJmdRXGCUAp9GQj2LYUuBLfJqcTMyfQ",
  "key3": "QpXjcj5KcYSCbJ64c2EX77xMEYEeHJaXfiEG9Gu2FmCdqK3oYHdH2muzsaHzZBh13vXHHx8kzc7952PJCjxDSVm",
  "key4": "5XgaPpXSm41AVDMVNty5jNGbESJDp4LcaqMzrYk8Us2BcmjSrRUhBT2rh8CH1wACRtExa6xj7oPysvkbKqfhhyxU",
  "key5": "4ZPzQfFqMAfVtiRGZseL3gvGEX5rwR6rB3iB4KzcaFPDYTmxiYR3yhfACYyFxet58cq5onGg2QCeznRUAp4SKBFK",
  "key6": "UFzmwwFqxeR3PZMYKZDVHouCxFSTDCAGzu9tiicFL5CewbveZLgnyybnCQFUXDu89Y8ZJ4JCye1K59X9EtnVM4E",
  "key7": "4hRmRwoLqcQ4YUQNxtKpwZYSauVsD25o9NqezCRmUj6CpRXpUfjdr4hCAorLWjT72SiqYH7NHffdnAkRW6UhXGgT",
  "key8": "5sJftRCGJxhEX5Hso3VagUjZScLzUfzSX7jJaxkwHuAtFWZQUGhThW9r7hXzxPxMVuJTBoozn5xLLaZfnzWvpyDy",
  "key9": "8Ld2RvXP5WJ98PFn2p2Us2Yt65LwuTiRgRCB9bFTZys7cT8CYoNGLv9idpAjPu5LcU1BHQ9LizchuUGYwfVufpL",
  "key10": "2h9hJM2SyZuemZCn9Cdz9jWp7RJRpRqhE1Ag4mErMMmWoPyQGdnLAZJJnCvS8V5FfLHguhekJMESAxGB6fpA3t2c",
  "key11": "5NHSRnDUJWsvYqhTGtRQywXU8yHLegb24uki94PS4WXwXEc1qFte7o6ZWjNWHHMpLsPbCosP9qyAPYUrwMMXCik2",
  "key12": "4NYSTyhjfBAZmjwqFHnkpVwr5kBbBJJtbP6G68csRYsaojmtBKYj8AJBcLUxMuCinJ37vPpAmULm5wtfCuSmWJc",
  "key13": "45Vt7UEfT4A9j6puxfXtDufQVCXbwsdV2jmQUcvGJiGvkFKNDpQUHHPgQHh1XX4QnATv4m9u7mzpUnHaT3s6PaJU",
  "key14": "BzGhzKPKuaPZXYsdT5sWKJJvzd7r4ubSNRbR2qnMzGrbNpaogBDnFDJc3GSymx2PbmpvLtJ4dxJ6od8QCh47tYW",
  "key15": "2wC73fYB1HSawYzpHM5yAi2KKzrsuJ6wVXa88fn659yMaDp21sXLdFP4VhbQ9o2px6AK2ru1xyLkXJRom11BoZpY",
  "key16": "4evHGZyGBK6v8phuFmycXevVZTDwsVbrWzbRhSrXLyskLdxr7KS3MW91Nyd722VV4RJXUFj2wNHdXsdphiPJxGJb",
  "key17": "4hvMpGWpJoyDLT3oz6CVTVdLJFki187LbKqdXxbCyXUzcnLpwyD1KbS96hpwDrZu4XJK1t4TbbqjsFvtv12gbbei",
  "key18": "3h8SM4jtc6BypQQv8SDTJhyUMct7atp2vsNXR3VzJRDPi1GtQwk3xpvkDMpe1bmuSkyZL5B4wVuXibNT39xLaNuK",
  "key19": "5ccge9MTpJphJMaD4gxQm4MVBCGA4T9BFybhaxCB2kKUBYGnPzm5buwBYaHaucRv1tvmXbes1rhKfvtEHv5vqxT9",
  "key20": "3eqoaqfVAEHvv5186G3rgXhY3cH5SHnPwVPCQwjizMei6tkoSdEQfzynVZZsbi2cKX1pdtxz8LRDtZgLaW2uo7BE",
  "key21": "38ZJzeXyJrEBV8RwbgKkYCyrLqrqAJrxiN1VQGmX1vqwqx7zkmyRuQceg2rwJCfx64fv5wynr8PyJYhSToQyruVd",
  "key22": "4kB57258ZcZ63axPeUk2MRgzHtmhvu9mNPypM1U9xr9SzByrK1N3rHfQExJ85moJjjZ5iX512Mzr8kduKXVZzywi",
  "key23": "418JApreRXWRaJBguQAdhqgpdQk9T4WrP4RBNRMrpakUBRagM9DXK15vTaeBkRXMGnsxhPQE2vbEiKNQgZZpuNiZ",
  "key24": "52NcKXnyN3msn2snj2iVxE66YZZ8TetMXfW5j1uBRToySX5h67AQDJChnTaGzjnhiKBwG7jVKTBsXh6RHNLV3jDm",
  "key25": "4vFy1im5oBwKaPz2Wp2YZnvnXQmsLCZATXLBioq3v3YXU16K9jFjrGE8rLrvAP1BJEr6zuQpRmpAiqUC3mR2zsuP",
  "key26": "644gAQKvYaBremkvPXtvneqQPCzZZLjqSeSVU3NyRQ2YLZ2iaooJ2d7DwquRbJWmsKjJTZymd5db4TMpDMVg2DK5",
  "key27": "3SJnXpVKMC1ptFxuCkFSNpZGQbcPqGecC9RcaGe584STeuww9SNth3pGKbWqAmJQGsduynQNQmejp3mWMPrk3mFP",
  "key28": "2B5P6aEnZRxCDG8UDYEGTB6su4poko6LaJsPJF84rE6oAS9HCkfLK1NJtpDsWdLL8wYivFLCrgtxcP44RPAsbbJp",
  "key29": "383iUjwd8egKNGA6qX74jNN11PTp78p4a8R59vWV76ngsESXtDZh83fBPDCZskZUrNM9ZoqnWP6DtZMWhkQ7PPmd",
  "key30": "4uA9riprD3Goq7XVqwtoeDdBb8sPvdhaZCcsLAR8r32QdSeWRBEWZXtGcJfyE9Kf2TBYfc6et2qL1UxKS9K1JnU3",
  "key31": "45SFEhApwaDWpHJBJGU2uMioA5fcUfnUEnhssbu78zgMDuiWBd5Xbwtw7GyBr1o7KX6m93G8bNt8DGPKrvZLY8v1",
  "key32": "31Sgr1PvuFzeBQuZrNccVmsUqtypByHpFR9UwobqbWhypvp2eK35tRs1HpFzWWuN9dseYpZy5bSfqQeXRrYt5eiq",
  "key33": "24AQ6Cf3C36gNnUjQjWkaUhnjhCy5Ra5NrtBc1mxsdCQPjJJh1go8iwFDWCM2CApRAyJWJ13zTQSXqiirQJqHL6w",
  "key34": "2aehsGEZX1DJvDcrxGReb9z5vroqoutuaU5zLvNkw7Jb2eaK7mB6D3gpwriWzPcwFQ77yasYuboWUH8CiJDP1v5R",
  "key35": "4YBM1smjpxqDpLfdhgB6gQWWvbkCbqehd4z7Az3wFh3QrCJ7DxBqUycHArBqTXBKxqZPcZxhWexQvZ417rwnft1N",
  "key36": "5EDdY2P9AvN85YAJGoFn1JQ1w4rRkJ7fB4nF3YwtcV2cKZ6sfk4z3kjBRyGoBSQedrozX8DwLwdGUZtP5WJgHohW",
  "key37": "5jQEKY4cNfD2XQXDvYYMpgw9BrA7vwGENVrJdoTsA5Ge3RQZm6EGSPuZb5vehoLvx4b7k2joqA9VjQcpGgDSSbD4",
  "key38": "54Yi9aUCDQkARGjFj6zw82zdu2hcXJaCLyjqFmnSsnEJVvmocFdxyLpk2f5uzkRqxi6rFqaGbAWdtVSouDqYgRrG"
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
