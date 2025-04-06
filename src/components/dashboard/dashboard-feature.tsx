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
    "3pEJ5Kbc6q1sDM6HCqV57VDtG2qLqusVxoXt5j7aTwPtcnsS4pBn6sUwUzBa8d8azNk1WeSzAKffNkL1Qq3kJd9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3exgBkcaoHnfBoLB9tcKRo884ZMxrZ6hm635F3Sk2bz1StNRgLcpqQ7fzGwcygRFwxHwMYj7RQiDkEVitAzzr3fU",
  "key1": "3GU8Y8x3NaikxSSqxw8Ac5n2NA4oU1kEEWR5kS3LiNfhzovBuxGaQRiCDGgE1Vzy7egT93TZKJWLLS5rRg1NEe9Z",
  "key2": "4DyFiskSg4qeAGuXp95tveN5mNNKEroZCnURg72y7ybBt5sJdrDKZLECGqsGWNMwT5Q57yeGhUwNgz6w78ZVzN4U",
  "key3": "5avBzuL52mUVCR9i1x8jt3hXS946TooPt7iwdKwSjET6zY9XfTvULpz4wjebJbVmhEy3SSonBs7YAyzzynUNgHrH",
  "key4": "55zPHopPjazH4BPmDCyjRVCgBJM7941dwXharBLEUWxkjop9EmfoLdXzeYwugGJeqsvC3EaLnoeJ6iPRUngEy5PU",
  "key5": "5ppiHGxy7fSmw6NP8pwarESAdxw5ScD8iPvXfXns3hcA2VjSSbGoBL8aeCcf1rL4KcXNa5ptqKHXtPZtnhdsobg",
  "key6": "3QwpNT1wyEdH7djE5s7RERPCMdaMqTZmsVzHBaJLxgN6xWP72FtgB4L4pyzdExBNCd2zQq2fUVCkboM96RJXkyay",
  "key7": "2wQ8wJqaDewbiPscEHspy4gFQjGbpnVX4jHSn4JHHVZLCeatrfcUsEUQtX3qRZfMvYopcGCApduyQnc5vf7ix4YE",
  "key8": "5barYB1x8XGVXfqT5CV6RUAGJnBmpwwXuw1ch5i1gxvYP9PnfNVpbzzz2tw6FiikJW6CF5PQjwqkymHSMpoHKFEC",
  "key9": "XbXaqh7wUo8B8D56Jh45MVMjm4Buq7HVBAabP5zttmQqqVNXPHVH5oPcnRJzdtQTifFXXjBAvBKrk23YctzScSz",
  "key10": "WNioBTxrD3awq5FCT1YsqsyTtYj2bZCNTkLHbDr7Y2eEua4xd7sfBvKkckNSJZqjbngKXmouUvTKb4EZKaFFgwp",
  "key11": "638ZgMm3bSJehws2GtF9HwoQ9e4j5JwiR4WYBwavURZZStxFbrpw3NLSRj8km73PAyYpw85TJdigSjsBwnQaQdSg",
  "key12": "2MFGT8KPwvFvX3PKDANr8WZbftXuhZawFUiAxgVLDWpwsufS42hXWa9YcvjqwFBykuREWdP5miNd5C9fg87ZZgDs",
  "key13": "3susyN1qgv256NNTJZvaip26GbHamoNTFW82osWtjAQ76PRrtAmN2Pb9Zmb6kYSRyGTZ219WH3twLE5tfb5r9rpG",
  "key14": "kGEwZFsGnjK391AaSk4vcdfTaLzTxK5bAWvej5qAhNhnWUuM7sUguN2SnJCDBdY94haPEYoPgpkzbd1Y4c4vRmh",
  "key15": "2kXT86ntmtvHpnUpDySHyMXbqVEuCF57aUfwBBHGA1ZEBad9uQyMkdJZBRvUC5SvGxrzyDL4iVgpkgtYjLBWaTxJ",
  "key16": "juXg6iqe7AKGTbEPrtaMF3zqoQ5TnMQizXr6yCBj5D2VD8ci5yhRC7tLGx8HpG3HQeKKwNGMAE4tzAGn1E73VNw",
  "key17": "3WWUn3vDh2amzPh8JUfC7DYLEKTJqpXoDvo5kDb7a6RnzyvFFtRmXdeu2Z7Pmk9LrJwVQ2yeufPerD8gAeqBdbBV",
  "key18": "25RAQhqvNCA3PhDoPjLANGTFD8G6nyEtbVCqgCPFQBzCPiCJSqNXLv5GQVQPEKKk75hK7aKEe1jMZExwhmzig3Gg",
  "key19": "2GcMeNHy6AucyQTo6xZgfaXkDaeWNqGk7agtVfRvA6HLyhStJ1sZXLHCDBCkhSs1HJ7MVTeUpbDR6fpohquULBu9",
  "key20": "5oPrQwA1YdWJczEV1EJon3JMi6cP6ZwKixUnoviPt8tNnxmei3Ue4AGFwDzoiYbnCXkM1uqH3DggDGa5wbSLQ24R",
  "key21": "4gjKg5E379ryzYqtUP2HccgYd51Jjb7rU7NYBhwWr9a78qfsfY1jrp6PMwcoD7Gr3sdNZHVTMxWCYBkjVKUdujVQ",
  "key22": "4r5LZYTgBGABNNccCrbM3fHD1LtSWVVkBCn1YMqehyprTLERZp6xKuEpSPiCVaCUQXsXtsEoGgmhEPbC6CSrckPR",
  "key23": "3TvLQfVpzuwzNeVNURK2U3UquAhpP2YmDEjMGn1niek4LhrWYfQ3DCBtafmdQoU3jzQAhm2HrTjpEARJuHLLQaQ2",
  "key24": "2GvJk7p2jWJ1rary1eEoH395E55fP74F1vDzZfbyXxjhwXEEougGzbrXNQ4UgMdasS7UaEC4Qk7biPMgSH7krUMy",
  "key25": "5zjzEDwFzJHK3qmZixQBiCExFhbgVbQN3EobLzv6285Pwm7hX4p53ZFFLqug2rk8pvgSvRQtV53cv6ByZWQYjNza",
  "key26": "5B8KUP162sdNdyTfVzuvHmBJT216UmhwJEQz4B8E6YfUADf9uj4bmAU7bADzB8jy762j1UEtK5RSwQMX8AHZRZwk",
  "key27": "jzbfVDr2qjLF5DqN9ayrj8AA5b7FeRkJmeGCdBsCMJ7RXJLMXZ7wsGWDisn58tZtzazNMbsRKAvqJZghmHcdjPj",
  "key28": "fEXw2tdYU9fGQMUAiSE61xunaVMkPqGzaTygSh8n7NYCyZXHtqXkVAPitf6bWUz4Pq4KEiW1DgKLCbXHbsSF8Ld",
  "key29": "5AFxegWDudgtxb44XrVZWGea5ojLwXGiAsgJrfhQuAiiozL2HdhJhm3d5s4nHURbkT8WVPb1jnJHEVrQJD6F7Spt",
  "key30": "2yD3VYomL6GYZba7yPDge6GEgPveVCEnQzKYcLGiDafAUfsppyZz4fj1XGXptsMAghBE3Uy9T8Svcu2adQTESzHE",
  "key31": "nfRHKuiJZ2XfDWcjVAipLQE9g2jiixRjkBQmD92ZJvwziWRZVdHLWpiTeDviDREB2tpSWdERPG1QwmTEY7dDsAu",
  "key32": "pnPY9nKERUpeE6vMFTZbghFtiVhPn672PYLatvt1Hp7CcG9kuFANg3aJ6yRB71V2oXhZ4EDDAbQQQPWTdc33ASk"
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
