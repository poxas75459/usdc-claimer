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
    "2NKG2Y2dpCzQsHsxL1WzYSLXSZFoXKYptgXyExS69dwPAKKQSgyDnK7cTTkMufPb7pScYWsKkJqxpGFu2MqqjGnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JuraMxKXV1UFCRT8XnaiEPKjoUK9fMSpC5qJfWyHpRimyHJeCobFCBwyJ1QbuBAnxjZgQ4HbjFmEd7XdVUC8rQJ",
  "key1": "4r56Y1LWSyvbgL9XqgBiGKpBDrqaXJM2fgDUKewPDXJWbADHwFsQbXR1L86XFAK4Xd2aAqfoEcD4qNwUEFFN7c6A",
  "key2": "44qcn5SG8yAJQU4meKCgVHTP4fytVJfS1hKp761Vj2a5VBQhmTUJytXa6jpnvrDssv3gorSCaRrStATeTjBCyWw2",
  "key3": "2ibea6zW6pwmMqtbrUPEJ7Aa4UULs1qaH86372TFsnhZt9TuoEy6bGgffHmozCjvkA9KVCpoFFKLc3JPMCTBFno",
  "key4": "126vNQM6ZmBaMDCVWMFBsWgxTwJourDaShaoKDmfrwKGUCGucNq4jeFusBmbcEtnpkvLQa2r1ZDeoHLCaGVVa9ZT",
  "key5": "2WWAifAcaMRMNxmKpaNEH9df24QkYp2MTvU6Yp1q2nnsfanKr4tMG2HEuVXJNbHqiR5iT2sQG1rvKSd8HTLGBhQ3",
  "key6": "3GH7Fa6jXF6kEgmxWno3EFYuZBkN58QJeXm437AGTRRhkgi74cdPmiGLiGs1Zynpn4rocTiHZGrmte1y1M4ZD2o",
  "key7": "4dKmGbbvCJcPuSXTA2Gj8ZTZkxFhd9h1PcCtQreJXpr3Huss6dmhhFcfpT3XZsMR4NyyfqbB6fjQgNrTSLoH5TcR",
  "key8": "2xUkSchnJMh2hRM8yZB7jGYeejGxZngzYrEBYnNWgNLtWhwaCPNVyRW8iSHtf9WaKEC3oN4b99XGyiesu23Nhpp6",
  "key9": "27HUGrQde5iWRsa551qUrpkPunq6v81crYyX1YyHXdXQpDBcSpJWn43nfEcDb5EN9TNP8p9wP86psKsXNXYKurh6",
  "key10": "2F3ewN3KamyuVqbFfVZPKVjfZ1eESNCHjFMcDugfhuWubPKMXo94mRo4quokTtAWk4U1gJDe4Y8qmpXMJMrv3NVQ",
  "key11": "5eTpCPsNMvtTjwrVdU2cbY5A7ks5yoLzcpHJa5N6VZVAWrHCz1zZQshDqefzYY1PnGwpCWZ8LGDKsvZJHw3SQvxj",
  "key12": "4JBbTepr628B7sum9XVNB1yFmHtpTu7UFwzvLrwJ8hMGDfJBP8pTRRDrVz5x6rXyhpjRqA6toNHPWkY9xJnwzN4Y",
  "key13": "5WtamtZoriLtmugdon57Qdyi3JHAWma74QRpra3mGwLz6vQ7Ks8wJEBzx77WuJRtTfoBY7DhXCe97uGJqUxQn8hi",
  "key14": "frhiZmrpsouU3NRcyFJ4HHr1LpXyyuxcafQ8ZMHjd4S4yhrZrjMqcqohAwVskggGz3RYyD47i8FszypdR1voKFa",
  "key15": "38EoELh2ACV9utFsUCueVbDF8rHpYKYQdAxhc9CfuYoo2Au7KGMRoCYqAhfRpwUEnm8HAr1kroWvinFJi546wXDa",
  "key16": "46ZempCms2m124gBV8fwpzKoByP2WacZbnU8s7vpcTbYHrcnu615PC8HZEJGVLaD4CjyVCr3QueX4C3c6zi1fB3G",
  "key17": "52o4qM15KswvinGbhfg2NWh8fbAxtifAHCcwh8A1f8tv3Dk6PWcqHTbzHQFC29VK7fXDiPh9r7z8kmaDTjnTtxEk",
  "key18": "4JrWaqdzGVQkUdN21EDTkWP6tQnsqrBRUVJigiFcpTRgT8iJBdZHiMReDXF5yHjoWGAUcxygmsrcTyg8A2WWA8Mg",
  "key19": "4TKSuWX243bjpBjVpX5iH4nYXQJDDTx8PsCYicW58HnXAJCh5Gn571Qaysvfoc8Z1DcMAo4SPeQN3kiUzLD5ihaB",
  "key20": "3F3V8cXyfeEGF3nbGbgNgazJ547erEE5qeh9XRzToKYP3euXS4AP9NeMTKw3FWcZMhasAHQVWdAqjscyAmmqh8Dw",
  "key21": "2eu7qDncPYomkAc6WYMBH4zVsYRYcwHCpSP2EbLBQUqxx7Z4dBTYihGVRtbZbbjE6xXFu25S5jNYPiy3wf8Z6Y9K",
  "key22": "2N7fLSPfHzWkQEKWDAMMqhssKXS82vHTZ7KyTMe7D1k6y7uuBLG8f9S66JyQJHPcPd7AtXf55bB8w4p2crhXNojx",
  "key23": "2vJL2RKnVNriU9emwaYqyhh9hFwsUHtiD73rbLh7dTPpBRoHH66g8kMLSopmwTdt4P5WseFGWFWAEhjexkSr86jd",
  "key24": "2kA9j3VBvgbJfeMyd8W1MQGJArJPTTqQnN9LxmhmZYnrpXtBqJarcgsSAqdpPU51dMPpFtMuWjHV5ybJMBYexU9P",
  "key25": "rLsiyGPsdrzYrUQu9FpLcULAPFMsXjNmbXCd6WVCqq15zg6P16m9dsPZFuNSmsX8guRhk47bXRKhMm8czc9otjN",
  "key26": "3uxK5qViQrczPpkT5iYWYJdCkEvcg3MMaUJfJB3GJHx8n4j4Jjmj1c8DCVn6QTm9VRyUPCyKi2XjR51dTtMUDUaF",
  "key27": "4r8H6WAaXUn9LqKtGjKF4PGPCChkvfRTbYaJEEe8SfhrDgVxXonArBrozzxUZ5BvLsp7xoUBCsEhKoySpjRVbwsu",
  "key28": "5CU4AnQGBHk3EEoz1iB63ZuUSZAgax4xgXb8eGyk5Hha7swqsDwL92WJLTWb3uMP8HK74NbzejKtpqNoZ6Sx8xQZ",
  "key29": "4F6b1R9WT4Ls2nzeo8rDDxpc7vLqM93nhPsBtHEhWCTxKrv3TSwBJPrFg7nK1K4xHg2kzEVH5afBupgC4v4F9NzY",
  "key30": "4tdwFn4CUrXjM8X4EFXGh3h6oL83qFrnTeMNzp5h7Z93gFoPotdGD91XKRT63TqKMJWQ2nisbwmU9GnAWZ6v7yvV",
  "key31": "5thyh7Dege18SGALcM18Rsr5tG4zes58YRkRjfKTqyfBEoWESXyt1hG3BEKJNr899YBgtkXXsYvGQwFbN4K1fjdm"
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
