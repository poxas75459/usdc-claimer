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
    "5q3QFWmN7NRmanWkK3RzSmm9gQNpYws6Ese7Nr4P7cQzyjB2adTcTugf2TL5xaynzFKZSZ61QaP95Ug9SkY9z8rE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZXD8VYRBt8ujD9siAksL8SBL1BPovEj6EkZQSwsAfnJw2PnthgzQ2svv5cZr5yi1X8XCeyu4EF3khJf5ho9iNd",
  "key1": "432XXgRwGvPmGesSR4HcHAkRZJCUxacd8fTE2uQPWDupDnFzk8jkTCyqJvtBrK1oDw9j8jXVL9NFgoNFtv7jtRYo",
  "key2": "T4a3gudfjdMAopkbRAEe2JChNfQCchHufzkxofymwN5euB8Kq9un41q63vZKmU9xPoU6EkiLQHqhPJSB9nZmPAd",
  "key3": "3P6eB7nYAxtonma9UNRZKQGrtMkuebWaUBZHdSM6yQ2qufQCaNYVFrz7LdZjrpYWE24jfD9v9GJUgtUuH7xibG5T",
  "key4": "3yaA524EjUdY2ZMKZtLbYCnsXxHJRdmJBrbyyB5QFZfFBgqEVzxsugtgCiuFAvQ6o93WoUHF9qKRYpzw4R8yTx4C",
  "key5": "4Ph2Y11UysNMLTQE4rcjE57RTdZ6Gr4S9vfTxNjRszeJdvhy4omwimQcxfzpjHbsf7FrQzyK8MvnAj5fFpyYgrNq",
  "key6": "2eCgwrfJ5ydj41XJvjHF1n9LfLHjH8SkZWBFH5ED9kzu71zFxjhXtrhfTya18SPJpoUgaJhCLwG8kf6qb91qniA",
  "key7": "4LjBWs2iKCfeZyFKyeDytFxoVAu6Qhjzmw7aWrmGdn6AjAVwoPTTBbY6Pcbvtrpc46Rqy8mnnyKTZ86qJ99Cekge",
  "key8": "Zwx9RRpdqR4JZrNoDN9EVvXxMqCPfRr5Rjdb6KEiBDhKDpAaFeEuv35jvrzWhY8ia6JAEMomrKjY2YjrFTjY7oz",
  "key9": "2whPoGUVdwEDeL3vCA9gep6d4128Z1NtmtSQfUHGZSQnLttP1yv2qY4Mbofu9M4Aw4qur39QZqnmntNTeDmziYwH",
  "key10": "46qnvfqXtm3CJTwU1WpJoEg1uX1yFzrJWzCv8fPNwPj8fR4vK2KwQNjREFAz6rRfn3mRzHznH4HBZ5wvKUyuDk7Y",
  "key11": "55wKqN3L6R3x7FjD29RsLax4TW1uQo5b1M172kgCmTgAKJyzsiypEcP2EPt98L5dWWQTALjYBofLFH7sViW4eEPq",
  "key12": "2vuatswWpcpDPw26yfHAVWbBPVeV5SbxyumLPKbFtSaU1MYVEwj5h6tSSTWceCPnF3PWgQ8gxmgyPbZ954s56Aqu",
  "key13": "4sTt4ts9HE4q8sKwi2ks1aJENMpLudCN34Z5PEYazKkwUb8AgYhDxeuPv8uexMRKE398NUeA9zXWnZNCjvEL4vz7",
  "key14": "66PKSdcURidmA4WJE53XscZqjjuPT3jVv5yHHjsB2FH8DTLeitBWFo3TH68NsVeDkSmNJbx4NfHPAcq4dnbraRd1",
  "key15": "5yTygENvqPMV6SyJncRoeEpgVdEMh8a6TZXLswZ1LpE2yxcV1sHXvCTEBttC1BsZkQkJnmfEYPjg9g4tJ96WJrLU",
  "key16": "5EDrXaU7vX15Si8qdDP3DG9jNYD2ktyKFDmoX6NzpzcrdEdPd3Fgbt9yU58dxqGQ9CnViEYLUspmt27YgN7gQKo",
  "key17": "66a2YT4qB78Zm8HcLxVgzbNSGEq7mjyXQoynCRGz24mDDkZphrLB3DnAn2UZPghZPjjakzj9dnhvEXWdxtq79xNt",
  "key18": "45JnaDDEFT8Q7MfgKGFQeWRK6kNrmPfA23AejDHnbLwK8MsfXhwEarxdjpvBZuZ5njxUkt8sFYdXqTmPvWM7SxN5",
  "key19": "46KSWkvpriRiKqrpVf3RxuoVWX71xqfAG2Aw3jSCDiYzL5UAXRdKFiPBM3viqizknTLq4uMu6mxmsr5qHPjUZc1o",
  "key20": "5oVHZxcueJgYxXusYa5LPCLXVRsHrT2557Yke2aXp1eR5BFMrFzymLUEEuLL7kwaQcMTTnmxdtmu2A6F5cWrryTb",
  "key21": "aqWWENGTacvbgvUVCrhH5fH1JuExMgXZJZpiNdEqZoFE1Wzr7oQ8qhpQvnREmwE26yCHbFtefN1CD72ubj5ScFL",
  "key22": "yEGMUyUD6jmzZymzvX9bXf1P79f1KKAZsiwrp7Ubt12Uwi9YxZdHWnP9BifE66LKeudtciT7XoH22AtANFv1tPg",
  "key23": "5TnCPTrm7MjHEqBtKk7fLLuMFu5BnUmbaf74NqJwxFVgiotAdRgx1ais5SCi2TwPJqXirAUQLy2nBJvekaQqFPx",
  "key24": "SfKXnEHPGU2X5JrzMC9u1sgTchA8cH2aKvkuozd46uEMCnmtu1Njyjy93B3AvwzySUndTguP1og271Mhj2dSzZa",
  "key25": "3agwbKU1TYRzutKFZXJNUDy5AByZTtgVMJFMdJ5dgzGeoRRUgpvGMynPrT9oMRr9JF5nZp4wbofSkc3L3jmADi3k",
  "key26": "4EifModvDdqPt48oEZMHsBg6PQesg86M7LDzCr6zgjjNgegk4r1tDK4rTu19FAaVspWz21xJQL7BA2tGq1s13Lio",
  "key27": "jJTrFbnzi2WegD5HxZUrquyrMW3mhgPUsbuThobZjEytP4YVeQZJXuePRhN6PvURTK16c7SLV7fCJVWrg8B4np6",
  "key28": "3fxLdNTEaCQWbpQvuFJpjtKJCfBDafe2vDBcCCFRcNh7j74S6MaNxuJ67zYn8np2BQYpuih32kUvYcVquuQa2uu5",
  "key29": "3AqssAXUNKoiu44deNWniRsHbHNGZhdPg9LboZ7y3cBGEcMe6KTztt2aka6Mymgeg76QMbbwKUn8QxsNgbCEBKWr",
  "key30": "33c1Xi8FDERKMMPwXN9Xp7ev1pJ5bncQSscuJAbZJRgi6PFFKKaiyW1CWo1G7UvA1YEZXc2wYiVb1KnY7hm3eKv4",
  "key31": "36Z71wruMnucpTEAHaApwUVEAGgtY1YaMb1EdB6sKxoNk6DfHcjF52pForZsgN76LuKt3DAyYJXm2xS3mbZTdb3d",
  "key32": "4fpwWyAhVoUjeAPNY3FJv5viqtFyr6zHtqvrMsg5B3denneuwLtmBQyGjrWycX9Rgne8WZ7b21QXxHYXicTnDUp6",
  "key33": "r38BggZ91S48VCuTWRxSFg847jWrULd6RKMx4ndpgv9AD9yu7zinWQRpbqZ97EySs3c7bGP38XhZ7BsvRmEMvUq",
  "key34": "4K3bQ1wu71mPjZjWaQM6sby9nrZS1Etce9QVC1zsCzQYSaYcaiGSp3GUefcj3zQ5wCddb78v8CDbKgwLhK6woUqc",
  "key35": "4BvCGWAgUU4kp7RvZbZDUM8JydNsRsq9Tki462QpTM1NFs6wyK3eTvd8GaQ5gZdpKVftkgeb3gziys6ZeS9SqMW2",
  "key36": "FiPFTs8mz2cyZKNQK7KCz5Abxv3wxW7bzcFtih9PNzPE3JAev69Jn9XWzBnEE1chZASPP4pQb4u8FMjZQorAcX8",
  "key37": "3jihiT3C5eESbqkrPLYCSzBbWvLWU3BuVKqvWcGmXpUifpNQjEtk27f4uzDKNwTBc8BjMQiRXL4Wq62NBpKP7ZeY",
  "key38": "5Qpts43EJNsRD878vAyrEEPKYrLHeSzwnZuuZbUxzCpzTYKRb8QiFxdfg2A1wKVCqtjTjuEQFNxQMjyZHtjPK8qq",
  "key39": "4piZKm2em3aT2shxxjJoN9vo7kVRBFCNBJQPGxvFvoZujXC3bR4ec5EwXqcVzXvVQT9VmvJLU9kCWmELUNmmb27v",
  "key40": "5NhjSjBcQY3kxNv3cYUZig6cT8AA5MsBiuX1zEuHLzBpDKqbTjBhQUWfsXrmYZeXPnvNAu54nRXCdxwJsVPYu7tw",
  "key41": "3tnXGzYBQgZTYFvN7iMqodt1HKtxGimDyH2B6vW4RcwjqHFwS2bq2fA3gdxxtegMttocSg2FFYEgEgUtDgkgqwuR",
  "key42": "4DqFdwohsqqRYu7wMzqQthDeXvpuw4siJz4wEQmmMX5B5U9Ush5XPVjYEbYuJbg6RRCq5aiSgD8xGfAc9DrkqjaM",
  "key43": "ZVopuFXzZNGfYCvYDpGY3LhNTsPp5TacDJGt371ic2CfJQYrYizuQNn8eJQGywWb7eq6coRbHugoGVadbbnnQeB",
  "key44": "21ssjjcsZBAtUFtiP25UArDvBn1wee12hGFbZKGQDXtaFSyjurTU6Sf9JckEthwnPDaVJJuEjd51tSPYJXNsywwX",
  "key45": "Y75fTuzpkJZ8QDAvKcy7gRXEdzZ47LgxdtWGW9Y4Q81ZN5x7UxGZxqgEvwBiQNyf23cFoQHPUJDSje5iNLoBJhz",
  "key46": "2vY3UKFU8k6cVrN8wRnk5cDhrJzzyuHxqgqJc7z3Y86vyDSrfxNL76XcgbHdEMYQcBEJVoteXxGzZfLwdSM3bR9t",
  "key47": "3LRBSUWUsVgz2rfW6gQKBsrfn6LK4P9d6Mux81ARR3YVgyBJDqEv4dhXbuueuymzDJYdQFM3ABYLxYtSLrfGnR8F",
  "key48": "3KiNwXpG9zAwbxVsSzdf7DFP4FX6oJkZU2JYFMaibyzgoaQDYRJhZKknFvVGx3Q87xbTwrrY3FQ9iaq9YAmUi5Es",
  "key49": "53pHqDkM8EFhaN1WqkYB4aPC3kntmQWG9vZFEjzaSJ7mYvjxy44SttLfGhw5bPYcE6CfHFSti2peiGoyMm38mK5k"
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
