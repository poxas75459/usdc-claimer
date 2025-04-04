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
    "2NrU5ZJ2eTAjbZYE5sufDm4rHTvrJoZmZcuLmqL6jY3uM4LwkF4LTJExPwdzJCWjk95a8T4TJvaLjz4iww4Ws2vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56YPUfY7Hnz6twG6eAD2nBLHLvZUMfAsDNnk2GMiiJ4u5c1NhNrv9fE4wQvCm95wbTcPYRcDYGZWiqwR5TPQgcWp",
  "key1": "3Tgu66rixkJjwpjfsp9afQHBWPur1xvKXqTz8dwZbFJXLeMPw5Jmk8vJUUf4TVc5fm6y4AjC2HVEoNVfrJJZTsTH",
  "key2": "5Cycpc89U5r5EWtS6sK6EiXENzsn3pGxqyxHt6zTpoHeY9rYdy7B5844dkDuv8585dWZSbJoKMDqaHQfJ8Y6iJAM",
  "key3": "2CzhVUowQaU4oEA5xpk7qfXNkQA4ST9NTDrFoVy3E9fDgVMrhfaVgD7x4RT1EwteqtV8AbVv17bWuBJpbcX4ws52",
  "key4": "64H48MVTFkmRyhEZLjg9BjJGdErmYqzC2QrewnJ8dXKgdH47vC7JyvaN8FRLWxcx1s7zQpWsghKw8b4tiTWw2RBw",
  "key5": "129FFxktkRxZmVdSw2TNkVyLsACm1youZHuEoNTa4dCiKWAKh4cjY9ZFdgS6QfGKviiSCUC34RoF5yGLiQBd1DWR",
  "key6": "5ugCuVbpY5civhgL2uW5JKvpAJW2S8iwvcDCcGau4WmbkfqrvDhG5uFK5X1hwGXknkfATAdv6mRaTk98xe3NyTNt",
  "key7": "5eWLPLTn1kiGhkdUxN1iJmzMM8uq4jYEj99qLeohtPjuAgchjeq8nS7G4yWN8PYLeH4xMy2KJ8k3uLKEQiLwxMLx",
  "key8": "3Nm5oTwNVc69oHQy68VYSnqcyZ2ZmAGvqGjPeuPQtmvhKdgfcFhYbDfgkFxosHGND3PohYbRuwh2PEPXpDpuqbyF",
  "key9": "2b8g8178yqvE2a5fvKjX5qrWMNoKmpYKXBnQehyS3Pb34WnUo4uqR2K6L62AwtAAoc8FUtnucCr3p2zjMfWcpWoV",
  "key10": "ULaqnBaNTCrkZAYiaSooVHNaf7KUV1yvjeWTTUPjpLjX25ktHLbRA4Ea3cB4dB2Zpxzereqc11krMCsuSMXbfnJ",
  "key11": "2QNenrARVCDYfsZxe9NmAVdKtcKjWVEWP21W5wtZTKdga8ih36hMALQsxoUPxTUfhJ5qwnDpnsjx28uHTSS7UQHf",
  "key12": "41mY4h1TkUurWaoRUnoSeuobQAk3uD3YfbPY1VLn1uonYMhEd7S6WVdFzG2r8miytbrYYdQzY2DL8FvbaKCubb9q",
  "key13": "ZtwGgynJTHpbLZdMJEMXFMxoAdLGejp7FgWPa42PrFSMN9iZ9tpbCZSdn3PHqeAKFdCtVJMWNh2nUtmijaBxU9E",
  "key14": "32Gvm3Kabb2HLek1HQPDNHpgBJkFqukAH3hraJmWmtbNbapcuxyiB1aVdRtrsHfUKfDBYZ8uK5rFTQ1Yo7tpLpGx",
  "key15": "4xK8znLQBG6rKNM8zVMd9gme9srk7Fj4T3BsAFDu3beuUES3ndiuTo7Zod65nycqcU1bhJJSGWxfgk32nd8GHdUZ",
  "key16": "37omGWcYCKx1b15ZiiKARk8rgyVHSCJCRM4sP6v54XWzDeK4nUf9w7kgFsNXAmxp6arFN2m2NHWSwF15bz7o6zGg",
  "key17": "ahgxBTQAMJFjfc8EAUhjCrDEvKHfyCjuv8CPrHm43a4tmYysJJFCRccNse19Co3akwdUrWFTkSZKMN6861MLBdq",
  "key18": "559LU7wzEuLPHLChKDTgSeu79xEvLm6oR6Vtkqz7CQNDoAENZKqZBjvznobVED52y5S8L4Kc4TvMfJtJDtkWyY5e",
  "key19": "4VUnEKcTucvDvEjC8rFxSXNZeANwyDXWis7Dgh9tv3Jstg1t5DEEaE28N2XDysWdLDJyFPHfZDH6dvnNGd6CnFyn",
  "key20": "2rfL125o2TSm8Q1X59vFeUaqVUf2FELxMXxVYNtuxSqPvoMCp5tz9gGgkBGdC4uUkYGsnmpK49yeqpcvUVJPJghX",
  "key21": "5ziWjG6KPcQFR9NWbVwZkSQQd6d8w7S9XU6ATT38p9ZHzbMPev2oArWRGsEfLUMn86A62ZQCx5Y8jZ9QeDTP4UHZ",
  "key22": "5d3qSPRGxQzRfTBaEBEfNo8t14Siin8HUM7Fi155haEgX6GeiqhLAZf2euP3qPieFR7U8Aank7aZT2aEM651pSPY",
  "key23": "3zdJXHs8tXGAF1sRkd7cz6eAFwwSKy7YPYjyo8rMEJQVvBP69Ux4cWdvHCud4EeFtdbtHbV8BXLoo7mCe7uwjzUo",
  "key24": "5xMbR1LErTaHQj9dSmMgFYF8Q3miovPHALM9voGSy5yyxrVPa7mnDn55NPpwoZ8StdNgiFRgBiZPyZMypjDunCuu",
  "key25": "3iqbW6Di16kANknBc9oMEJhHw4CHwYRD1VFtkarzMjosdQjZuZeRrRnije3jjKzPjMc4zT4MqKAbiReQVQra7WX3",
  "key26": "21U8PuZn8DKo7cvGTDGcoekcdKyz3SYeCBULZCe5pDfCU2Fjuw6eoT7WoxHXQKHrrVCdVufaKTecWTLz54SgViHn",
  "key27": "5MBKSqkqAEnjXX674YP5PMjkQuL6x5SqTL5rfWmprziL1MSp9c9iitNoRwjBttNCv2cfs2ShLb1orvSRkt6rMiT3",
  "key28": "4Hj5irU4jnxWEPgRugBD92wb6R9Xr2u3hwmkHAsevbpdGLBEFKAYSiZoryrP2vMjgm228pvh3ioMm2DBBkNDYYqr",
  "key29": "54pz4P2SC1uLK26YN13dsT939XsDZHCUPDXWH5rB24gVojuYiCMpP7vpVBuzKo3eeMQ8MJuADAjVh4MPu2r7XC3T",
  "key30": "F3Yo5kDaDPcrwgkGQuULHK3FyrZnAj1SfWstZbF1NgaNxi3DvKPDN8waZMfS577yfwGJR9xVpJeEAfkTBPjmhcd",
  "key31": "259QitjnH6qdj9pXArz3EzsYqJ5bmQ96GTTDRkxbF33qi3GYfjfoPNnc1Ns6gQ1QMGmBfg9x2e3dsBSnV2Ed6uJ1",
  "key32": "3VPkyot3v1bKTC3RdYDrZWvouAVXfzce1CZcRy78jwLusrhxg3Ss5rmCGbSaJ67RMG6FfNvLEAjvBCWb5W6jpqoo",
  "key33": "4YrUA9b19ZMRdWTgdvLGdRr2xLwGc7pQfe142NcCqauXKQjzdFFS3VX1oxAejhDQqoKRcTtVVhaNERE4jf4uvaRd",
  "key34": "3EzEt4oWy1psQXA2ZtDi5SS5USaXPr8GZdg4nTAHVvBwcQ9X89URZ1RGYPjEMQTTLD1CR3YbAF8xwEQGZdRiGNxh",
  "key35": "2te8XrwhuSkdWoDw5eCp2Cp6KMkiZMgsgzzdNhdhyxYfPNemRVWfMqSYqtSeccxx4dR7UFMeGHW2db4t8uo4aRLM",
  "key36": "4EneLy4BLxXbnevoVEPboCQMS2TrHJsTiVx4m7MvsTMgHwCPerVnSFdV5hezf6wXwnyWTynorigcXGXx5y37gNsR",
  "key37": "3g2HRreFFBgWFScL8YMskbgiNT7oDRg3tfJApHUwg9DpmTwX53uaeuwg1qPHDVY5QpYJWiHZci2TnvsvBJfLApum"
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
