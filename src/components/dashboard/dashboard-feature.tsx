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
    "4q5azdyjyQaJ6Y74wwEPEMpogprni7ENiixb9T6ZLoRvJKtNHW8tfjEMstJG2Nx9VK2XgGp8RPunqXPvqdsvJFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kADGZDkxKMo3BUEX2bC4ymydBGAw95UtpjwL5p8sBn1DGroWm18qtBMocdf4XNYHfgE4zCCH5LHniLHCEh4qvY",
  "key1": "2CkzyXZx3o75Mhua8X8Wnn3SNaKh4A5Vo8phC8Y6ghmGkt5KEf3KPoNSfTpx1QWdCSctzLwPpPQSMMvaXB8nz6YM",
  "key2": "3qJ5fjUH1de48u6gkGy1PRodPbkTAv8BhBokGb4mbAXoUGycQRMySZxLdNtLCscJ9G6MhSk9oN9jMJDm6BTE5bgt",
  "key3": "37L44hQ3PoUpzezc6Kpfe3oLazVvmxMeVaEP3TGntt9BDzzdJbdcMhZTd66KNqnDK4HNiur2PVLw8HiVyiPzSJ1k",
  "key4": "3iKymPcWuMUws7hYtWQ5nN77vakvqH97UxH7rnvxVFTBf9hvr4QKsFWBcouRs4c126jERkMHJLeMeP2w56JNZt94",
  "key5": "2zA4LyyqSiCW3zKADVbLWiQxCt4tjgqmMsYA4wZZbkqhF5m9FgVEBwBiGEzojiQMv5gqhJbUtWF7rsTHoV1fKq6f",
  "key6": "59d96KToMU38weitGExmMCU2eta57iH6qKKLR5nFhD5sobzKT4Vs3jaXfrNEomVLYQdfxy4JnehPs8Fb5jFviUoL",
  "key7": "5mi2K5TSjBybJW9jD8MJMQ1baLaqNf6KcvEVgrMWNZPSJoD9jqbHtpqF21jXMcr9uAFF7Q2yhVEKkPBmxbsQ11Va",
  "key8": "3qQMkWAnEU3hwZeNtfJpBh3hKFWJ5jgrJy4eGhEVqBvoAdKhyfYaBKJbSwbrzG8rHcQoZtjFvULHPGPy6ziZHgkW",
  "key9": "3DVsLqLdByjW1PGkHrnuXdsZKtAfoVNeyz44aBdoxPSGsXTgEbSg89Y4nY9kN7gsxits4YuLk27pQLp9WPHrCf6H",
  "key10": "3H5szLBA4cfEdaYpETTECzaVqnBYgnWXbm3r8QMuqw2XoDWotG9vifjPZ5k88TMYmwLNwQobUJ1yznxHeYkV6BbG",
  "key11": "5x23xNE4wLTxvN8jRXxQMJ6GKjSqHqbK29H85S4gqrP5sQPjnSY84zDpczBGaYcfEUds29AcrpTBNgP2rC7vLnCq",
  "key12": "4a78fMefe9Zid9zNfhch1kWUJwKzHauf6axCzsSmRMobZHdMLgrncG5TMSvzoxgYCPJUaqdgBFh7zPYubdQqJp5Q",
  "key13": "47ZryTmpYz94a5tFRa269bzQjVYafsdGazx5GjkyekXRCvGcRHLTw8Vwt3D1LQuqDJRF6yMS4d47uCdMkX4Po2kM",
  "key14": "3u2enonQHryANDyKSyBFZNkJkiCSs9EebnASS6u96yZkvsyALbaFstqDFT38zsxVdWeTPuZUdPXQbY2F8JjCtctW",
  "key15": "2sRLSvBZhAASM4xEpKknsZdGvN7BWnSDVChsskuedJUv9Ks4TV8x8NdVf1VDSfa25osSkGbqZ4QuKbouA7PMuZwp",
  "key16": "2fsmJbfaGDBj54AdCMtMax9u7cAp8o9qYv3cXyzn5KxnLrYRnqKaMwB7qFqMRSnn139JyKaJFeq7W24ffAYDt1pm",
  "key17": "4h4PSE2qg8647k13woZp28EqTnDT1uhbjdje6oqNfSXKdm68ZgFj3N4pZu2vx2oG2pYyCwEw4ENAvRfr81ggVADo",
  "key18": "2SggufbtF3dXYGTz2ekpwysaRdr4Tx44ZfZj4W4CCYCMAm6oYKjerEtCmuBztih5ccaen4GJfzfGd5PFzVbFunHE",
  "key19": "27hnFW3JUgFiGzyF4MuCdBUv4gydq2gnmimbHiXZ6Y1bRuLgzXttj5mC1rLXj579b8dgEzfQUjNktPxgRjr71pmd",
  "key20": "5sBgJh8BejLRjj9WgRgerRCRa3yKiaTd57jepoRctM5CgBtftbvapJejRidCWn1GRbLK9yMqX23T8S8KmvDrA5PS",
  "key21": "Yq73uoJRbZjLcRhizvWfN44gfdNdh597B7smjpYsmrycpmVzMk7ZKpKQLchfDJhb6cypehxbieAnAsGwEwncJYz",
  "key22": "59S3grK4RDRbJD21K2X72SDb4EKpBUYRZqnw3EjFeyWrvQ5n1EWcEBWcbLv5SdgZXxXZpNTuVaJbT5rHDXwSCPzA",
  "key23": "4pPTPPbWzRLGT66MHBxfJP7f8NtfyZ3HFEC3btagd6WW19Syw9hehdBHEQ9hoYFgNUpAmYuY5B5Ds6hhBLMpoGZ",
  "key24": "3jpxr7yKouSjWKZLQwaE6eFYb2ntTf3WJAcHpgihMPmJHyge8WU8tMdVdSnabdgaNsNWVpiW61xdZWsuayqZHd6W",
  "key25": "2hMmc6otpzLf5hck93GKYpsarCiSGYhXXfuEQGhHM9hzvFwUj2F7b8dxws8rhDPu2DrY35ABwFtYDuCbt7kubP5u",
  "key26": "3EfqvS5HZm2Sngf8Povz1MvpdG3Hf81j5UWGsaxseHvH7YvHmWftcVizrY92UEmAXxWSXSdeRMfLq82ueHRfccx1",
  "key27": "2jDM5serermrZ3gdQiYXQLvVhypJ5UsSGzHsF7usRk8HTEVfFHyrNmFEPqfsAVBusnxjUJH5b1vuB1z6LEkjVQbj",
  "key28": "5Ni7bzPeZNZNxV6eECCiXfSLASeX9QpWVJpfQbsVCMxuKoZ9aqVR2DQnBTHti7d1epJ2p5zKYthdJHsrLaViYmyc",
  "key29": "3CHUQQbmB5yz9MfcqfNtZDp1dzxvPqHcCvbz7NagMMjwCiQQqwbiW5z6boUoRsekf4moCtg4nY6SDa1MxiYdtyeP",
  "key30": "H5nxnmArfBc1YpVCPXKHpSmYPiF3DP3HSE2xkFpRrJSfM2CQhditQu9PDhz22ztuLZ3LpfEHTit8qPDXgvHdVCH",
  "key31": "4MEHt5rvA1ZhKc3ry8zLJRBS1vWKedTRgbUJMEgdkwRu3zwY9dbjL5eP956SjjrQ592sVizkSTibeunhH3EnuoSK",
  "key32": "2GsFwnZWF1vDkTsA3QwjsB5Jfb6cFWzDWta8RJV4r7tGJfRaGJ9YtVAXbPtXM8MJ75Eqv7QEtVAQfAfsp6XJDfcd",
  "key33": "2CTvGprZLwczGrHg1LVyhg5FqgA8ihZEpRiBMZTYTrknXjTrJmdpXCU23F9kPV1MwTakHvhjen4GswtWoJ5GJKSS",
  "key34": "5zU4548yWRb9Vw9nKnsUDYWYtehcKm5i3rtXiSq6jUHUh8VLzQiUH9bayKmjDz6HVzctYqMhPdGtAQ69YmpDhToo",
  "key35": "4fZ4stDnbxPy7PhxZco9WDbZ32dqLFZjeMfzsk4DMhQQ2XcVrLfGmhRsfDzYHnTf6v8cAVLMW2NRhWbphgfVWGgL",
  "key36": "4YmB5E5AcHaLkoAsWANUREwetE8311Rj6oYFve5SvLQEcYiwDSbW61xa5JsGCVWGc7pfDc28taaLsxZmNs3ezF7y",
  "key37": "t3kcCpSxc3tJq8121yfqbh8Cmv6UikxaJbi5DM283hxwinYWbqSiuHtQoHpcbjBSyxpdSo33ey7JeELUTCggy4K",
  "key38": "3MqnVa6Sx51psf6EDsMXLuxNPtj79MqptGUVccBpTVLCAZebvsr4qyqXouaubLueKAeHrYcJc6qAWo6DVryfAKX4",
  "key39": "4z3dMywGWkQzn3WtF2FfNQBV3LeLnNoERxnP3Sd6fBsbkV3cuR1qfUe2xXnh1ZtURgVxrcjXptVvcgXjJwqnFSmk",
  "key40": "4mpSJxkSF5PqvDBP27wiRDxavDcXGMa4bwVcjoUEdSCMqGgurgC44zy5gV2xFj3o3yyQuCKq2iYz6yXdTF6phAsR",
  "key41": "3epckQyvWTjBZypDUbuvqrtbUdYvCNKvNv7KePTfNBsJXMYqdx6FakyrKBinmaG4GveTq4bkgKddkRu9eDNxrPsy",
  "key42": "t4PymcUzrr7rV4rpedG9fMPEFEa9mat1eWvU2DBtnCAvxJMuyYUtED4r4Z5ZwDc2MFUwmLxEewpX3bS8KtroiDb"
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
