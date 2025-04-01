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
    "4FSzhCUcf3MTr24NmNi4HzXT852cKKczS6SgFBVsXHUeQqX7HpwYTTT8wzRY7cy7J1SjHbsaLLA6DK8DnnM2ckKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Lio3VVjrFoqh2yS5oBtq9mSZ2MExgzNUdrceuPzzYu9zC3eEAusb2z3r9cSjhvd8JGktCMbSWXTszgU3PqQ9g2",
  "key1": "5N2MWkQDxd2pCuGj9qGevbMExYvzsdMPz9CVjGcE9sXSrqD4ZgRoLsoUqZq1NJ9GfCogAT7zSMyny42PLmh389eS",
  "key2": "8LdKnxqf8vm5ZBv7M42BgKfrLCBaME2YZ8ZZB8K69NtGjNBeZqPxUNeDo3VGZnzt7Q3tKEUL763Vz4LyXfqomW1",
  "key3": "2BVeK1bghuD7vNE2zn2WphbcahGjYnJiiBQnpUjazibAhPVyEvUrmuC4MUyihaHePsRCabCfYqcrT3hV1agoXLPu",
  "key4": "5UfiN3Nu33V3hepy9WMhLPsG7jZqBVd3iGXn6uBsSmNZm6sTDxoo7J3yXJH61CekQHULVtWQHcBsNGzpc9bbpb2x",
  "key5": "2L9QUoQdwZLXLSVuS42ivQuW4b2LLqKjAjVq5nSxHmi4cSfsXYtU1dy6zMfLsPxUM3zfA3CBqegJG3uxnC4uNU19",
  "key6": "2e9Nep97KGCLrvwKFZdXT7nxZfhKfxs53NroZ478MjH2z8s4FfVMG4Bg3e6KY1Z3w5XZAaPmKgUbnKifqvo39LvU",
  "key7": "4bMKk8D3r59rFEZmoVahjn4fJEnhX8Cc3yn6kwuDwyQNLq3fSicpyNzd8gLfyX4RXSAP4iA2UuWXeJ4sq8Tg9nE1",
  "key8": "65zgcnHLrKgBtx2JNBiFAWkGwbs1a9fd5MMfwMYYGxHhLUbUEqtG4tMobfwTnMESBJYLsiwugoiJZ9zToPxJbTm3",
  "key9": "5dnRmGK8VXN6vjWj4ZzWTezgcpwW4LEHNFnZD8Tnp2sNdMV5W6tem1KUUtsWQqzcU6ZnjULGH3h3vQMQWuy3L23b",
  "key10": "2oMfCxmDNCdkTktZaEPp78LYLx1r6QdazNtfPfEqxLMefA8R8NDDV929M4VKFwgfuvGHqE3zHmFXbzWPRkoMtALR",
  "key11": "57gN6pk5K7jLonTCK7cnQJPy3gGqgNwUFnGwRjBYhrFtKz6xSDBLEGCYAjd4cQxsA2fS9TFcQ1H5qkQoSNRm6JFD",
  "key12": "4npzQ22qgYRdqYPmCtkFZmAX8fbpCNARuDeRG9xa6e98hoRDFZugeBf7uXzNoVHadsznFTV3hbmXvXe4CmAdkjWJ",
  "key13": "535mZ4qwN9nErJaHYWVqvg2iLxGW2XtnCftBtWxX86jmS1MDe5DTGnb511VeKWM89TwibDvx1YZqG2GGNjA3jQDm",
  "key14": "3b527jo1sw5qz6EjaURTZS8kTBCQ2LFcBB8YEYsMXigFLHaC9JtMpV42owhE6wcn6gxyTbc4VYWaDy8gyW9PQTpa",
  "key15": "2q1exuxoXyhAAVBnCFySv2PKUgWE2k54Fm6y4vSm344UE2Hx2bwE4fXE3ctUB4LxS4EeiAbarRr2dfoNqms15qK7",
  "key16": "4x6NRotNtmcL2vbp1RJD65WVsvrttdfCeJJ5BNziXqB8npkZET1qwxsuYtTMzARBXK6B9ZtRRFHYKg9tGY736DmR",
  "key17": "3pQ9b2Q2UXEKitajny4x2BJ459AM1pgweXN6vrBoYz46Jipayw93QVheHjQQmixPpvsfBYbiP2WWK9RVEL43dpLq",
  "key18": "31Vf6GPi4X2GUvgy7qFJFTeLoG2CQR9aB9z9pKc1Xv56AK8cCW4mYNteyxsc7zQZB8vc3gJXz3wv3xE6fWD1bWXz",
  "key19": "47fF1fCijwtxtFi4WwbJeL6Vcj2paioxDyQ6jqwLmqT8ct5h2FJoLtquT5onLjEzg5NgNMxzTBdJtsNchvqUCS1N",
  "key20": "5JpQLyByQhjbnX26hi6Go7HQJV4ARfGtoMHu1bvfWjxsu8YwPHGrH3s1diPvVmZJ5DqGDst4gp2C7wif3fM4VcH7",
  "key21": "39hUkNPao1eRjR1U47zwGQSsD5fbxFDRjRd7deKKJYVy1sk2BCpWxTzm65bjTASkmHP9hqdjuEGHTfEnjB2sfb26",
  "key22": "3YCKRvtwpwMdVvXbwPejzQozVrZtHSpXjGX7p2LJsRtCSCgFr1vG8AnNQJnphbk2iAyeAtnV1215GXtvfGnQicCk",
  "key23": "2TNvTYfZw2FqbeZHR6Bn35qpXQ594NkENnmJU3UaQ5WinyFLfNfbKydd5xNWGfymeYUoTGkkWbYp4EbrCpMJjEZx",
  "key24": "5HXcYwcyDwiHDxYYRLuqxXyxWhp6Qd1MSKv1feutZttVEZimWJW4EBfzZtYWHks4Ep2ryssgRULmB4jr43PHg8xz",
  "key25": "4ug1TUu8UeHn4VRBLUihadNyarkfibw2UKcYGBYn8AU7sKFCGTTKKem9RUf11GQuyyr2MV9utmB2ari9KpUZi1FH",
  "key26": "2oJwkCcFZspFSUPtuZ29ycucPjGev7WRxATmzC7Hock537mS3FtdZG2Khnduwq28UTXqaE1DEF6z7ihEZYnj7rh7",
  "key27": "3qRcEfycwNy6ZDRXfE6iVawv2QSbMveFQxg6uPrq157EqW5CXxRXAwkUyjytftJUs2AfcAqrP21NnYoTQee2HcEB",
  "key28": "45PJtboENkBYQLH8nfKGQmitDoq65KCQ2U2P7benBAxNShZBitmant48NnxQrLGGbwh1xFMZvPxgauWfuCdfLgvG",
  "key29": "4Grxnq5zJesBP8bShY7VCgwwYiE67wdhgoSxzARXctvidbjgp88yoeiNfkYqAvMRtJEjZ4SRDmM1h3gftvsKH9XG",
  "key30": "4QdX5khGAw4mAumzd9PXdMGBf76uPPAME52qgU9jawNeipW5JtmAkJaVraR7R8ZQNotRNTv5qUfcDYoBmwjAaRcq",
  "key31": "3avM6fQgK36gGLAuZi65RFWuciz1DYpCW2HQBkiXbwAwqBhJm4qCu9AwpUvhjMf3MyPDVfrKSDQJmvXvWgs5RZdo",
  "key32": "5AfirddeP2w3wYRNv6RvxQkEczvbfazFPgA5z8FDUDVX6oKtfpyJviHBbykwQXa222ADYGRF3YyfgXT3VwicJMDH",
  "key33": "5UWg2zWHnb54We9cGFQ5S21eJHUVMB3EAUzs4XJDUdL4gDVHvMtSJcN64EcWos1X1p5rFeHoWkHbyffjw8UeqM4p",
  "key34": "52xRF2PdKdHe78tsf9pPP9C2nUppucCwxrw42j38XZW3xkoLPAcKxNizvuhBCNdQnoz6yDQ3zNMEJawGBmXbvvP6",
  "key35": "vkaprpVjrWd4n9K1Yuw9ho5F2LSaieDJVCPYXJEApbzsF5kfXf2cQgPs2oeGL5zaZMa1cUtcH74NjEuFxaqAV91",
  "key36": "2PUCbCtatZ7EvbSh8NTXRyPvYkBcidgGG7PLzwbhdzqVLsm2TXxhWhtKUA7VPf9CbtwiGSEFy9VGempu7vgZVNNo",
  "key37": "FYFq61YDGYqnyY6CjD9AYPkTzVMJmiF9pBr1sxVvepwopc6JLBNJDsqLXtrXMhjime4vFe71ZBeNnJk6aBreBPm",
  "key38": "3BXtkPMHijDvrvJ3PzBT7um2TZDc2MwCBkZFwkeenQvw7k5NFjezziAgrUJ2PydmvWZvao3v76k7DpinRjXEGGZE",
  "key39": "4dkg5nej8qAYXJJfh9Um2os8MqcLp3wqo8WrjeKzxYyZsja5C88tiXG77vzgSg2WznBDKW95x7DxDqVygB1Q3z7n",
  "key40": "eRDTqYiSdrv4znk85utFAZ2fz999Tf8Find6M6jhXZ5tqpE1U75V41CYa8bgh7H1F1dvo4EkcV2KiVEPwF8nNWE",
  "key41": "3hnKW6uzTm1gSLSi6GcYQr6hKKotFeXSXEeApwrveGWPJT8HiaoyfT7mjggPKVu4NJXKvpg4xcuzz3UCsYtzizc1",
  "key42": "5EjgFXeMrcNfjYNTbScTz15N5G8eZ99dpjejjWKSNvkhQDsMfm37udgZL3fLfbYczv1aB9vhRQWuUDrkee2wkTiq",
  "key43": "3c2SjCDBUBda6bcHAqwzarRwNFGqp5LmvUXUZzvRX6R7T9yNGCQ9cHbC63Ysg7buFKb3MHvfV9NRMewbrzDfJ19m",
  "key44": "iYeq6EhL5iy9iyXxxMu3oonNWq7tjzUhZJKkwpPy4uCKsnm4APpCKrvJmMwZGqqcXqF6j3RzhuXtAeVCKfMaRZw",
  "key45": "62UUHCcveSeoszc6u24Rb8RmDsLNeSrhysxRqY6pGgqBVQWobZ3QuPZk6tAFrQS87LEDd65AeLNXXYx1oSWLVwvK",
  "key46": "LCBTXFRm1vmJKzh3Xkhz7FkqaE655Qjb32LTZepFYLMcKiakbeKMUCwaBETK3yMjHuXhgKrT4Gd65kycq4akUeY"
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
