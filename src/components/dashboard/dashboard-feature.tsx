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
    "4kcJv5swbsFMPzbvg1FE3wX1cTBEXokgPTU9Ds85rUEPMZ3q9vzNenXWMozJcNa23itfqfvcAyScHqdHxbSjCjfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fx6FGQD9t6bwtZzSkmHSBgSjq8jvd7WduJhkvPRdVEEsxaYHf2ytnNekTHPxBUCx2UFUyLkCD9ub854RG57znr",
  "key1": "32fDN9pNeKn7GnbYnhbfaE1Ae83LSUc3od1LJiWCPbEzwa2SiXLXR8ZEePhRgsEyLyv3ttqis654vX6XZpQ2diB4",
  "key2": "2qJPFEhDqsr931EHAKHChCErfDZrhvmxcqF5XEnTv6bjwAhuBWLejWk2PXWSEBpGaorw3UYMZFzbE9Mo5yi8kJey",
  "key3": "4Yjx8p2rqXBYuTdgHfPfEg1iGXUYU8xsp3ZHXRa2MUBjUkJ3WDVeoQGLSzNGZqETYYbCLJEgED9bTHeLjWFATzqy",
  "key4": "NB83NA4B4RuPkrrs8e6b95xmJmwHLtccwykNsqVbmcyJvijn8YW1BzFgQd7rWyKgq2mFoRyKjgEvF97eaySCU1P",
  "key5": "3NVXeaBoHr7LbDZVf5KLy8TQE9vrp2fVzGTcZw3YJwPTApy7aHfjYkPzUMjqdQE1X8Xargr3vygGkg3squJ9dBHr",
  "key6": "2ZrFRfpxyEcPWxoMRmHJgHHNedHUNDtJuPPap8nxk23RSKhH5D6MHQJFS2fGofM6zKwDCgdJHXLJWDnDhrHiLa2g",
  "key7": "yj5B3ej5RBtwUDmy3vHyCaVECk8D1ZJ3uwKbfqcj1b4bqMQE3iFAAz7e7nabqYRPZAK5r1xLBGSfLQFf9R98Vkm",
  "key8": "3arpAodkaAfuvXxqvzouhbMGfe44isnTt4vxRYFApJWqWWzBhvYiA8LZptCqv9zzhTWGSMahWzArdSd8kYcnY7yq",
  "key9": "31wtxpPKGYLUVqXEurs3QyrZkXyTZWZRp8fuq3bckzoat3QpDXTxseq7NJvqMZ8hrTqzCnxB3aRwC39HZRNSUrKr",
  "key10": "3QjBKiZCXcdmExy5cVfkKFnZ7V8hxujYq8ny3vfMaXqkYBdbRV99nNbJdBdYS5UYnPKiKQdWxCFAJaE2yZRjedxF",
  "key11": "JbFZq9j6yAKuddJUjdcuArQxqbh6idMReqWQ9Stucvc6eTLzQo7P2VsbsZ9pPQ1uxucvsKu8C3iMfQzgs9frPbT",
  "key12": "2ZEUjW3tdaWi54GDhFaRgTa8gMTrTkRns43PKaGQT3mYR9wZDBtUUyx9veMBBMW5G3qrdPtbtPTCqpR7DKkSLSQ8",
  "key13": "4uj1xccs3jHpWHyySc57HzTTfYCiY2jXiQDxC1WPuEFttRJFMz22QDVHrKxrBZUjybHsZz2kEX7uYdEgy7c3us8f",
  "key14": "3RykBhLXtdAZuxT8JW2BYRBeiW6iehGbTJdqqPSwCZirSa5iBgjAkxnCiEZ8h2uUkRFzWixTjsZd3nH6J9NekMK2",
  "key15": "5HJbj1XHaT7g1ywmoYL9qNLNzShUC76DB39AKKywoMEYpikMuuRveASuBJNrhADfxyFumnvSWhDGyMGQcf3EnkD3",
  "key16": "29oiUTftiX4eoch8UxGbN3S3cUmcgVXj8vTDu5HSMXGgngUM1yscLMsgSZQvDE9rqZQMHjqq9TjtEMQZ2NAgAxyF",
  "key17": "4DKdwPgKujtZm7kH8j78YHrvrKEyPEEzBvShirKoZz8zaRhBEsNbfJyuZtVVDDwkk5GKacCNr7ASHRw5T92PFVek",
  "key18": "2n7brLjMjKLzckMBxLSWLa5MngxcbGbTt5EdkyefaVDhaqvB5NBc4gHPsKN5a6hFLBVnvaL4x7oY9RssxXNXjTT1",
  "key19": "47CjMV348fVYekV7sjNyUKqWHLdwjyWmGJPXBUneerncKLcM9Ld24ZgS5q6hi7MuC2MfWYvWx5iGbGxiF5a7KHYN",
  "key20": "2BgskY6nQVRswJWYn3LtwKLt5nitCcxp59rjyrxYvh4r1wjcsuUk5wR3oaZn6Roft1UsypAjFKyLiEccdwGCQnUm",
  "key21": "FAdFDmJPKRbn1gPZNf89nnjJeopK312h6x8FgSS7jJ2vTN8yj71TVRfqTEmyrVWXr79rirrMakP54LfEfJFtgHd",
  "key22": "53v6kzvQ2TLATamWuZfNgmwdsmCen1e4XL5bZsoGbS8LQk4hFfxYsh5imHTmq7QvafEsXbNfW8sEwoxmToFFRRyJ",
  "key23": "2kdSwW6mhmYKFBjfBnWsC4djUsgGyccPRDiFeAa7aiqVTHs54FkJyZY9U2ppm9zvbXqBd852T61n4wKLQeNdbsRk",
  "key24": "2nozRw6hi5e5GQExj6Fr8m44D3hnjhS2XPfveKkxsgCsbpiQXuoBauRE7sBn66a6eUYSXMzD1ZTTydEbVPgUSKch",
  "key25": "4FPcnZGyi9Vx924KgSXAEs6PepVyqQEGqTf6BUSnoYb1GEDMk7yvVwRFy7wN6wXcBbc3T7yEDHEwueQepLEhrrZd",
  "key26": "61AVXDXt8H4D1vcHjk29FpeYsJrUojXz4Rx2LvT17FgCf9rxs8aWd6eHvNHGQLtQfKtVVR4HwjDiHnsCQirEjuQR",
  "key27": "2ZmSF54fUqohciHWxSSHgDTWiNwDxFVkTWpWkaRLfC6hPbZ8HYGejsVPdGZ9dwS8dyqSxeTjnhJRmSL2jMHoDz27",
  "key28": "2f43RdsrSwKYnrAZAjoJQcoKjrnL1h8XkwDThadF2d8xnTGQ7k8MfhdDAE2ydeNCjdS4n1NJLeLiSsHYAdLmw8xG",
  "key29": "5HSDcGRLQwX5wTiUWRDcPCahK9cALtQqBmQ5nMncWdkakjzWLk7HuQHvnHh6MKNBEXSAJqud1BYEEXF77iAb3oSm",
  "key30": "5t56LwVnKroC1UBsY8nLfrwnZCpLRbXTJUBRFSFhEWZwAKjUtdsJiWXtoTepXd4jtar9Timc2b3bUefGVKtpcpPc",
  "key31": "7uDnicFvCZjEcLbZtrAPtzB22ZeiszNbNs6DvLyZ4fBDnPdobnTc9Ri6HSFxEZfqhhgW4bGjKojkbz1JrCBDWWu",
  "key32": "9Tbmy2ti6oi8LdMsP6nzZmK2jhveQhQbVm2wGhJ3kzL2452PG87KvLSGQ3s1waR5YMui9hPH6vWKtys19tufmYn",
  "key33": "AEZxdCs3S8iLLWm24BP9cFMxnaESaQ4HUU7rLeMYJyRUrEo1jZdEyHbkYaZkUoGtdx5zCN1Lof62BPho3iuFxrb",
  "key34": "4bHnkXHq7qLF8ew71TeLrAiQJkHNE4eoR1bsZWR9zJqEWi3taNihj9A9AgdGmxfENxJt6KqRJDFkV4sFoJFQ8kEH",
  "key35": "4gZEa3DrFdisBTZ6V9qyRCfuE3V6vCmbFmUvfT76LJc3CmCnFcCfDZc8majYJRBLJRPeZNRqBMxjgLjWnJqGWkgp",
  "key36": "d3fuHzR8QmbEzhocq689U8MuErq1sr95WhKG2ARbdSdHoNFxPVSKDq69ANSLgmw5SPRYaRJWBNfvYRghrHqoMLQ",
  "key37": "2tQLr9168VXxjvGPM7MgXta6eVdfZpXrsH6zs1s8zz4a4XmJfumPR4LbG13HKxBHG6pQ9dtTcWTHfZoE3g6cYtse",
  "key38": "TSUPJu8wmM4f5tGzLoqpFUKC2Vy1RugVPoar7NNSB88uTRB67iVE1jDkqpEpaFce1JsD1KgRsjScE6oYiya6yfY",
  "key39": "3afH94QL1hRxrhpmbYWAoKM1sX7feeN7rMdL54vKKxLjXWav2pQTSA253RmN6Vff4AS6mLQGdEEdFQHVD2kHwYQM",
  "key40": "kwRcjSK7GowqjT2cnUKrsPUzAytzqPtcdQWigkLotZifu94vGHnxSnQefUvev3zQ3PAfVm4xVppkvmWQCfmhCdS",
  "key41": "sCTd1k6xMiLd6kmu5HYLwMgKQzxAL8VqYpUAHLxaUjXTod7p5mRkY8Ju5CuLo5G3F6xxnGvPqi2iGNuZ43vuZJG"
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
