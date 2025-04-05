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
    "2x4VEbDnCCpA9qPWhsrbTZVwqvVs5AkE5b3AuxchUsPFZHisspT4E7oJNzpvarXpqEypmzxA1kayNcnJx2Kwp9xA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMekrRPuVJmXUGB4FWjLVSQzhQwpTcM8Hgh3LS1mtYDYY9S3tKyw9GuXoELrmCY6DR3q6hn8848ttWp8cuj2hqa",
  "key1": "5VwetbziCfFunVSTUmeCUqrAEqrRis6j6XWXC5sZ8V9jZFokL126bFxPUvEMtSjSPEKuA9kZBQ9b7f9xg1WghMqD",
  "key2": "uTqJGFmAiXvKeHD9XFBqsZwNUYbXnDn1ZHRK6b29Ci6REaCbKHsEa4vfgExXupULP1z54m91w4kTftkm4wnCK4r",
  "key3": "5X3HCzT1uECaV1Zq2CdxwZ7fPLDRGLdV3DMz4VUWgwX39Y7ZBVWP1GUs7zR6A4KWQg2RztRjj9WuVaeVJgBGUuzd",
  "key4": "4rThp1DGi4zeKi4bmmtLm8C1FLgtzunjYTyMwyP6hbfX9fG5rA5RL4ea8LLJ8fxNc4bCwt9oBvUBvtwCFytABVmP",
  "key5": "2Wok61mTxmTsk9hHWDKv44SPhr7VDYXPgBjNQWsFAx2WDxWifRi333fCkvKT1bEbzidCF2BE9cvuJJxKnFm1uouQ",
  "key6": "4pQm4vcy9nbC43burErgCFcu8C5tAprWoZDS8HhuGv1Evbf4bPNRvrL2LjXHbfAQWPGSFcWcwnf1TJnD99BUBKJG",
  "key7": "218HYDGDMbBh6xVG1jxHAJjewfhgG45vB6utAoU5aNkFm4jkff8abXGpAXaUH93njzNLFCUrQ1GYXNkQMS2v1h71",
  "key8": "5nUfkb8dy9h3kE8TNRX3YwJ6isuzJf2g2AULiQz3ySaDBMZcdcEujSmU8G9RrwqeKdmrbeMRPW3yucJ8VfEhvYhG",
  "key9": "4eYmTxQxv2KNKjqbvAaZfVeWM436AqJ751pxje8ppEbLH6GNtyHeEiAGakA9t7CAeiN3iBkbN8Mgo8ijzh43yxHV",
  "key10": "4uqTwFEQsqPonpvbT3MzXWvADGvaXNrimGLrdA2cUigrHnSifqFgKX544B9nVGFCJsXoDrsStuiGpE3qfkYNxFLj",
  "key11": "5k1pXaZuwYFEkdfNZVKUbirW5v6Ya8rs7Z4d4DUvPjkvWKNhXhvQgrdU6LcAuka54WeiekzKkgisHi5qEBsNEjC2",
  "key12": "2KGudwMBBANtRYTqHHstnbox5n7eLyMmFnBQaohZGh84hDiXS4WTL6T7vabbDNodtJs6cEd753gGxuwc3KAkkUgX",
  "key13": "5mLdXpwdob6dek6PxHUVVin3UdAwYQ8mBVTRmCmwtQ8vWXvUnj1kC236Rcv42UoD6BFgaR1WGiHXPNaJ9csjqaLN",
  "key14": "28RFBrVCzW3PkudEC9MdMQ5zpdQ4yq9QDSkEhjYhn9HXz3vyLX65WYwtGV6tZEPcfnxNcJaFxMGwVHUXiYzuXaKF",
  "key15": "41dUth81sSi8E4G7ma41yH8uJAWvP4jGxo6WmxYw6mVmCAm3R3GR1cSxyG6ayKekLuvSJ4RmncpjojWao5DRuX5e",
  "key16": "5VQaVsWVtqRxZjXAVaR1MmhuWam6R17DRHWcFH5jyU4vbzA2FKmTkzsWs9AnqSaaJKvdeFTC295M792WxJ3y95Cf",
  "key17": "7eVqDStQmZ18HWfWkaGj6Ty4pxKuRjxkkkUo6KzR5pYHCLh28BR9zDh6x6tVUMTrY8oZ9hvZXXGxrHgfuU3a5ju",
  "key18": "BKTDgouYKGpoGCZEW7bNrMJcCqN7R1cs93Ssr21KUFDQyJ7os2k2Ky3ZAGAiXB3CD1axABiwcWqUUAH6DnW7Tia",
  "key19": "67AkYFQVsnddjaGT5cXu7GzfqCNQpZce8KDNwKMJzx4NNivzwHgQ9XKmsRZ54dQiu5kCRpXDEMuivrJMSN8QZYyc",
  "key20": "2LujLExDSTMgGkwVjCaQGon75F2MnXqU9gnhNwc3z2JxoFKmV8awv4N1ctM8gU3y9UN86LwkkEA4h2cYG51v5Ty8",
  "key21": "66JKLzUF9kq5KPL2wKUmNxrMqFeUWNo78sGuG5FaohHLk9TBAHs7AjNMiZ5kQVRaWzvXoKipBtaTtWuzapi4uWXJ",
  "key22": "3gB73EeP43dHEkkZwKJ4NyjoHLrMpd9WrrqLqFUYhBQucqm3ArLppTrc96Ek1Q11RWVywdDu7yuCTrVw6RBvN9Pn",
  "key23": "4Bu19Nhyf4wR5NghcaiDRmkTBXtsXfR98wbYD2V1SJ9mjTTLmFtWA9zmhUkuLCxS1LqZtjAzciMGY83ie5t7vBns",
  "key24": "48KsTGSwUKr97nouAsFZUvPdqV3S4RMVvobtTAmecwyAuAsYWXoamw6Bp6T5VeRYJ2kMM4gtRSvbotzQAVtBTGzA",
  "key25": "3hTCTpSdQWWycZ4Vak1ApA1urbRoFXVYc4mggbWxd1CuVPDj25BiiVP37aR2DrcXLwuCvzyeNZTturNM6DuoSAWQ",
  "key26": "3wNw1t1yU14vtLin5kM1fwmuDQTzpv1UBYfmqDin1bTPitpecYr2qXauWffkqALT5vz8Sd6yxmt3xqief7CyK8iU",
  "key27": "4tecquaM1Davwi24E7tRB1yTDCqFeLYynvkGAUkbNcKtrMdiB9UTmo1EKDyzzDnrEUgjvB9RxxZpVG2UEyNp1Fzk",
  "key28": "65u2cbXM8khVDpr9pKBHy2sWw5mvuZm75aTVRepZCiYHpZyw68LuVRayw15vqLaNjQzkP1cf5n5Ya6Vxb88k3Nqs",
  "key29": "39bjwAmpLh18NwsZfaHaWU3JQPQjRJubZVdDYQDmSryZMJ9qic64AubB6LyT492thWSbpuDzZ769ko9vSLyPD9kM",
  "key30": "39g9BPMTzv5QjnPkUx5zQnRMFvufqWMNkuXcdSbMaCsm4W9jNerZLAkQp7V34s27gT8XTTftubN992ZdnomxgAKN",
  "key31": "478wzsj3oqscP1HcYrvuzfvwvzjmtJPcBvEViGWK5BS1F2regYKtWhdszrF1bjRmrjzog1vFMww61j8eymBzNMaP",
  "key32": "2k5rD7KcJgSoHiSmciii5jaXbGNe7me1XV18P7WAUPyDhC8khhjYKumM17pdDraoTjCUQemQF5Hw8BX5Yvfstur4"
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
