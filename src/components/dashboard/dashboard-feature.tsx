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
    "4irRzUkyJF8EtkQz6Nt8c1yfGqfxnHypbvPGoayYadeKaaiEaNBf64fbRsTRrY7gE2WrHc9ja2CCsqPVKbvzqFQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35fEh3MTcPi9Ryb6Kxek4LcaFknhpQVDi64h9cDtY8PGCsf3JSo1Q3Ua1gMv8hZkz9TSzM9xudVSoxMi7WKYbV9H",
  "key1": "2ip9GPCcVtPwKF4oppAvgzN4L5a5imVC5G9KbkwsKazHKCBNwCzHaexApcCSCGeRjFpMtEVnN2ZcjVsUx2WZJ5ne",
  "key2": "5bwxcA86iSYyzviGXZi2bUxfC2vH1tkTBiGbJnGjpAavdAdMkq8RRt5thJVWrq8q3RsdmwGf8nj93btpMAvCauHQ",
  "key3": "432RZjpaWW1Cb7HwjXmeUpYscH55RM9vP2tY3e6K1dSWcdxUXcdmCdzHwc9yWd5Evwq3xE2rmD3fsDoa1N6pjfep",
  "key4": "5iAKKymoEqmRaF2Y18xeegkBaVG3e1Nmtma8PnND7kPcQSK5X93DP4PYe9ThcV9jhVfcJPVRNWGgfjiwJFNp8BcW",
  "key5": "3janebhoHHz3S47zJWAjQainTbJcdTPKa4aVQZEm9esCzGfMcqr2Kh9nq5SFmCYWEfMJbFtLkzBJkfcxpmRsrcm",
  "key6": "AFzyPyygcUqgnoRGqZkPop73bmiLd5M3KoFf34cV4q67FfKDMHJL16moTjS7KYHiyTBZRdg6MhnBUmsMyZygrba",
  "key7": "4hs5GBi3zeuUZu8h9HtHQwoTvAuBk4NPDU5vwJfCjXe2ZZZMF552jknr9KVARbBBUs95jDra4xnVvazgwsfGHkT8",
  "key8": "2dJMLszCVE247iZVTo7oQLjXdtFrXK66dohoVbuzTCSGDZV8J8JJ6BxUXcdQj2cdXrY91MiuDoZbJbMv2ycUFFcV",
  "key9": "C9Aqd3HzePL8jGpYPR5mJGymE4AzgdQiBGkpETq1ieettE67R3ftUs5DFXVKbxXAFyaFHCDdXSMjDPYn9CPX5hL",
  "key10": "3eFEk3z7sZqfkUMzfex2bEhN3hWJ5D5rLjLMzKsCrJtjozaejWQZgHc8Lk6MqKrHHokguBG9TozJSYfi7NCUsZe9",
  "key11": "DcraCzLt8zmn35ctpbegwGmPgmyepPQoXq57inif4HZyWpqYWE9ZFT5cU29Wih54FCSKEwhaB28Wn1aRXNsTNBT",
  "key12": "6fPANp7aDStaFp1YTgeoiRFzt1kZoNqnNszSU5zs4w3yeut4HPZXgQBMPoHP1uEfswFVCDXC6oRGknZX55v2JBi",
  "key13": "4MzLg1hvjzUxX8PhX1R8BdpRTJtXuMoRT75adzehcjeQxmJb4AaPjDH8dQ3kbwcYtXHWKvmjQRLMvXMtxBYgqveq",
  "key14": "VdETuCRVrism99WAijMCHzJYEKzXMnFnyKNRNLU9mNDKLQtbF7rxq9kBBmPBjLWHCC7NTMNpuAZMJQxwHX1v4yY",
  "key15": "Fs37KTCiu3ANdAVqYKbmxhsQL8hiAyRmiKpF8CkrxT3FDeTkQvkpX8k9PLVeazDmoKaT2FJ3XM39wxhVrF17uGZ",
  "key16": "41hvVvb8MkQidcKkWo6pK3rrykmJ9mLJXFweYRe1SxphXbujBPaw7jcBwMacf6cNcDwx1EoZzXM7GcPybJVAaHBu",
  "key17": "2KcqbQuy3turwDPXJmNfGrz9bhEtmhsuvgxq4bHs9Gj6urWbxhaTHftxMcoGNzntbG9wc8T3hERnq1d8K7693Ynq",
  "key18": "HozL8bzA7eXrAEwLtonS2qzRg2uwwLdJFnvduMRAS51knLAc5DVbFDESFh3wPDZu8x7DCBCCdNGRthGc6M91p6D",
  "key19": "5UToFC5bQXwVJTLFWWZeExgnu1WSD7zW45ZMzkQkxseNtCrhusxwD36MfMPGwbL6ePRS7qwp87gH8Cuf2CqP5UrJ",
  "key20": "3757QWy41nTPPkGVgus6LxYccBf6Q37EJQw9YxVL4d1FS9wRGuidFmCnJw7tibzGcLoyE5638UCL7JzRkgfcyGJ7",
  "key21": "4meyv67rM95njr9acx8G5vjweRB5zRMg4wpDUe68QqtM5DjoWB6HR6wwoBaDGYgoVCXh53sbWwLnemz2p2XoSEQg",
  "key22": "4cTLYWLbeiHiVxgNbB1kQG5AhqfZ2tJsAkcyUf6BGDYxKup6cfm5RMp9m4tFrKMSqjUQtnnszQ1RsAZ7UsKniSCc",
  "key23": "3Z81JPuq4ENbfhjDmRS5EAc3QVWkBdT6UNF44zCkeZKDJ9WBfs2vxsoLuBPmVXm5cr3h9zYZ6yT3fE42sTENc8ot",
  "key24": "5XJRanah6u36WXvNXk8fXJRuh8w8xAGnmzWJbghHFoG9nAumDvtpbijA3HxgPvf1W4a5gQEFP66CG2yGYG9MF4Qr",
  "key25": "aBrw4wrkBzSEV5ZAq1uqZXehJSpRYqTpQsvgQqJ6qBvJD7E3BViNAwvUmvBNtnmoPt133duU9vbEAkcMX3Eqhtq",
  "key26": "4GcJacbL5Xz9EuUhKhJjvVXYe6ZFSXNqUmWhEfNKpmD8L99jLH9tVu2sf14TMJdqKZNjQBfeeHPmvKHVrJPpCjpM",
  "key27": "3JYEJGMcyk3Ru2FokR7qudrzyCBSQZ9Hn7QK89QrCwhoVoRxeXBT1ssk6rXvpzUPJwAFvadoZbvvH3R5HXQn1fyX",
  "key28": "3JzWeRiRbKdYAvwD5tzBXeE7BWHahh1j3DseMdzHEuvvweXPckqCfWMSvTRnBssSaF3J28DujEy62AGt7bEpUZNx",
  "key29": "4HLcZHcZ632tLqgPgkjGKuqLT8P1zkFi5qGciU6Tkn5uE8dPPHogWwg9pghFP9r8b1ddq3Dyp8SjxjGpQVzxr6mX",
  "key30": "3Nqm22xjr82yjwJfYsmh14zaja2Nhpom6Car74i2UWKH5D58vziQLXR5dFm1PYr9udtWEbdMUxY9BsnKf5fmJpJK",
  "key31": "2XYG8JS6Waqhk3K6b6ueTP3GANjxD84kKHzQKPZSrDCJbghV9UBPZyfrUdDiYMmFhdhqxSBzTcSgxsHDuYT6uiRX",
  "key32": "4pATtbyxc9yt6X81YMuEJDzkJRXsUpabyEDP1q9ECejJnsUaW9Z9rX3fWdKprkoJCysEcAyqsdkUQyTu897MQdBY",
  "key33": "2qvso4DzqZ5KmmLAzgN6eGuaYBWafCqFWNHhVdZHQARCuk9ovB1XchtaZfVms5dbrq1gPrSUrxsE9odjg7r9Htb1",
  "key34": "3Wq7uGppHir1G5BAJiTzhQVYACtAatyg9oPeR1srKY9fesM3LYyz6g4osgCu4LnXUs7PK3WNuLxF89K9hCZr3ias",
  "key35": "FSKrzwvNDemVzQ1TYA3Yd6jMNnP9Tx7EJ2VnJYBamGj9xgz9dcbj2EfzU5eAToySyoPLA9NymK5pygfgQT4e8jK",
  "key36": "5KnMtCh5VQ2tGVSMiLr7EmvbwmpzYVWZu8adf3t3FhriTrv736ZW7Gpiy4VKb7Hza7BwGghekXQhd5foKk9qf298",
  "key37": "4vjcuFLAqfXJeaHSBMPTkXGbtTKHPK5H16RXfCvhnLNMfAWvybvxMbZgmpFdiwWT4cmMAukQuxVcALmnqtMECSi3",
  "key38": "5RFTZ1VhreQQpCTudUxJL89kW5MqRg7UpceN8h99poayZzeLePPQFuWXb8FnfCdnhUgN28NTkFPb6jq2VT5biYj3",
  "key39": "32wvkWnpCtMXvT4YRP3r6dMdyD4pinCDiEe9euFj6SQY1jyBc2h4xrAS4rLweRb2Bsvfkd3CpqgGAEEKtDJtwhAS",
  "key40": "RsU55T2X3kBi6dAxeB4722WNCVkwYZns9csiUmXPnSAMJnjPMh4R1N9H9GWsEFLbdBRTCFR1CCJ5tuXshupvQ2c",
  "key41": "2sfA1zSFLwzGBAapf51Mg5XzimUEn7M1EGYWecH2VY2aRq9DrjRD1zqwdgGkyCp1wbDBzcB641HohjgDbW9azpZq",
  "key42": "5QZ1NpyZcQNNx2K82XLKLse77umQefvNTGSmiYhKeVETnAVG6qXjXjvGDcaCAhuVXifzN9RMLADxzCFhXwhC6bB6",
  "key43": "5GkDXUtmRuPhVP1JR5iJ2RUfTBRueHPitaJ2v3zsupwFbKC9PqXrpbEUwMyy6sQgN5BXsk8HxcH7Xs9k9NzWDVnd",
  "key44": "2pnEWwDXLvYynvRaYQSNNuydgt9f9eDEomNnvC1vE3PX13ciBn116LLBAtNxF5YBPu4tG9cDd2BHBFT8UCeSmk7s",
  "key45": "29vd6dqkQJXAc6DJhP4t5nhovyVX3s3TtdH2LhFqocMnTmSQQaeSsVkr3rGCHfTvHWGWn73Cztdwx7xs4UowDzPR",
  "key46": "KLQj7njBUh9eL5mzcN1XAB468TBP2cBpnazAFWBASznKocqyTLpteFpEd9miwAp1mdcF6NysvcBBg6Lne21ifL1",
  "key47": "4UidFshRuQ63Wof2H5GahNnzoAryw9wv5Mgnv4Eo9iqt1iebEqW9jpiPHtrzZVZBPjdvL1pjpCQ27yiJ6FkqXZHe"
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
