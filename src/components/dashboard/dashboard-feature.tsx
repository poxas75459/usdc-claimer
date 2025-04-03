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
    "3pRh6HCDcxDNWwmW8hj5pqkX1YUbi8ywdVfCZF3Vv3pyTpq9rzoWxsaZfdzfub3aGPkJGXc27EkbytWwVSVDqhpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8vyQA2suNAQsmHgYy44rHpoq41xB6iKX4mdyYWMCb9HHnNW5DDvdKhDpcow96SjZSNyMLD49RogbMHmuydABFv",
  "key1": "5rWac4zjM1GyNyF2Xoabk1FteowtMa8nA25fu5nSEPCQt9PtqCaYTxQLDMMbeYM3WmXZWGhHno88go2Tc6Q6YdsZ",
  "key2": "4xrchhcita23iVWLoVYUxa9i6bgTtJi6bAXj87DjJaqJCd12nfgLVAQeMgwjhzBbZBPR4zpN5JY9LNcF3syExv1q",
  "key3": "4jh7ELQ4f6CzE4BFMxngCyXQeQJokuk9u3MnXtvyu1SAFAHSUKJeqayeKaMQks6GWmVzjwnkMyw6rtiUP1nqTUFH",
  "key4": "gLjzxNsHNorix4xrA4oTPXvdADCrWriokMVDMCzxTgScGFb87QRp4NKFPoLxMxC8tPkQadxSziRrjYhvwrAKXKG",
  "key5": "5zHJhZtcqep1eq3eYWUvtGjneDKWjr5VmtZcek4ahzD2s4VE5TdEH9EiMWBJ7sx9Ff95BrWxF2kYMiuHULtFWwbe",
  "key6": "p12M1PuBgEZtFV7NHLyfTboGB2mDhizFRT8C4r2xAZi58yQxT7Wu9C5azyX3SUfzoYn47MPGmSdMKhTNx8gDqmm",
  "key7": "MQB3Wu2fxgZenfa8DxRifSRjqQSFJc1VY3VcB332ZGKUo8BsK8Cg8iA9ExYbUCJMG1BetJhc3uGvgBSbdmobdZZ",
  "key8": "5ynAgeDmfXZJr7veWwRUHaiSQSMWT1sqbYi8yu37fkjAiMigRNY7JD34Lqz58ay2gfUZDCwW68siSGjTAWKWpqNP",
  "key9": "49EbBFV8b9kgauDYCPm12ZnNV88dwF5X7oprAgQ9CNVS4b2MyVhCwaSLkms4avQH24V448KhuwUHVbjrBYpaPpyx",
  "key10": "33u6vw2fJANo7rTxpoUubpKJD6uZiVNn6nfrKNzyKvVnchSvDSuXpGaAwheAGqPDmFtaJqtgjLHedM52kn2P6tPh",
  "key11": "DwRGTQMant4L8kJ6xaf5fnXQanXkoztkMnsTvgNoDQNBDiHGrQ2h4VGohostt6usaUG6QVj1JDwbrjX39uNtwdM",
  "key12": "Aqs46ZG9ZfBfuj1LtLQm6jvodkGKQS2rV1Q8XBq2BLTMiFGUhHqEBShkv5Kx64T1xafRWyTJXVZwxQra4ShnAeF",
  "key13": "TBxkfNYTFhQ5TS5cYwm4Cv5TuKYDGYkEtniu95CHRmz5PT7p7vwudcFojSYyQkhhhK21t6y6AMtb1hDM8Y2eeU7",
  "key14": "2jYjZojD7KAsyhRvHnnkcJzgcEWRuRWHMnjvEG7mTCHrmomvw8Hc1FhWVaducDLqs75QVuptZbQuJ6TdJRRoEWek",
  "key15": "43HBDEFZVMGxCRgrGBAjYJWazUGNjvrMSrE4UYkWcTYRxTgemo94WPmy7Hq4i6dBmx8unrpmkKk43oACfiTMfX3V",
  "key16": "3fbSnALPj2dTEPm2rzuFeV21DnDJwxf1vLPcmbEctrcanduj4wounVF3nJztX5Kjf8gn44sYrhx1PAf7ayBH9Po7",
  "key17": "eB628SYqBfgT1wogL2B17U4VddaomRcmHgGBSzwbCLPFPn73dmdrPW6yG9V2PaPsxhJ6x96g5rfFWmX7WroHgBA",
  "key18": "2KEQGcmK5qsbuqeKmgZjfwoT97wNv4z53MekiTzSCrHZzGMat3Fk2wp3ztLK2U5PzzQy4cra6FPBerU9K7jkoZKi",
  "key19": "3ci4jM33NrKGHF2SsH4FtUZno6ecz1AuTjJ8wPS4cs3HhraMvxrqDYUUYwQ8nNNxvZ4JWU34FFaGGzRneREckEUb",
  "key20": "FeEpjoSxSWDiwxxNsTFnt92Ji7FYuf37ybnM6M1VAMJf76PWziywsX75mBHht8eaUgLMKBqi3uTRT57Bh1CFBhP",
  "key21": "56TV9fvKrv5Dbwzv4T4ir4o7q9rzh3Me8SXSgqzUXHteoy3uvbXmixARfHoVqv8Y4GEAE6yp8PenYK7mYtEesgRd",
  "key22": "2hz56pcHQbAf6WJjAaA56ZtCkg3wbb9mXHi7reWM1NhZp2aFgvkVy8e14PaE8LCdxaA8HArSuCezN3WbfWWSRyzL",
  "key23": "34MuR6Ge2bPBsis6MCY4BdEcia61ZhUnWJqtuk3Ed9rEVv9AZk8ui7C2DYVXP9ehCd7suK2AiqhknJeiqxP4n8Md",
  "key24": "4Lu6dCfXzGX5MiuYqHa1B9S1pNE2vzfR7D2cwj4WnyXhaFjmH54zNHUoyCDsvtNJ3ViwHwJwyF6Jeco3tEPfKEJf",
  "key25": "57X2eG4gxtFQDtvzuz6vmcQWiwB4JWj5R3MEdB9HvwcpzapqPA6puiqXmK94RTgQDhhouX5NvUWe4DKRcBE6McbX",
  "key26": "4vkrAxDnJD1h85UTBsRS3TLhXd7w4VM6d4FaqhkZgrdmZoZER1Q67rGSQFL8FpPWUat2kB96PHQ35ALq58ddFePh",
  "key27": "Kyzg9jmEu38RH7Vv3rcsoXM61hDwhZoVTBWz5S43hbRxtMmJs1264temUHBtJrKUgiR5knJT7z5ux3Tp1SLgTDn",
  "key28": "3cP36FXR5kAKxQxbQ4xvWPCCbsykwFu2YHop2QGN5DC4obsEbv6cfDvAf8P7sxkEaBwWYBFcZ2iGyuNGACMgvxmL",
  "key29": "39F28RvCc76V1g73ou3H15maVPpAR6whqMN6834yqe5T8hNSVxB3L3UtWcBBEPu9WCYgQ79VMwzbyGMvhCpVHPpV",
  "key30": "2AjCNohVPDUZezRxYBAQ6x2f1RePYi2Y6aXUiVFZtHSJ1G95d2gBFy4iBnGuHxsvzo6cDKNYvkpf2B22xi9kAfmf",
  "key31": "BP3HDSJrTmrkbhMhQftx9kJbnTw7TvR4zS2WgDP3rHM7C4J9cHENWARB5ERYFJ9UYiGEqKZSHfyuk8zbJKHkD56",
  "key32": "2mvZ46pp5uXDQbNZQWzexcaCJRK8xnDjcLbGM9jM3voT8BTaypJ5VSC9gaU2M3oJVw5Sy6YawTrD3sNcbNfWD7NK",
  "key33": "3xdHaPoUZjmLZEHMxZoMHPbbnni3Any4Au9e5jg6BQPF8dCFJqXx519iDqQh4zuWWEYvpNmdXooPSG6p34dkMLQK",
  "key34": "4UHHvz73AnJzqT47swNwsNcdk68KXkq2y88jjKV5jzd59ARRcHLwJToNSdo6QLa8HADnQ6umcAUGi4sMepP6sZX6",
  "key35": "2pc3qEcuckFZKSh3LPTtHFuDNX82anQBGMjKzD4ZhgMgSU6VwG5eyoXCVoJHqP8g4hsXypGxpdiwDofgsG3QYYpf"
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
