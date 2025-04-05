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
    "2ummew5XepdJX4NXJhEyPdFuJHbFfQcuAmrgHGLWp9MaEQyn7YyooSxTH5PHwAtXNjWQ8sZgwo4noaF8e2BmuPcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38RCHb6j9AAygvcqN5tHgQbNywyJNWWLrWxCoNde8MmAH6chcAiLxR8KFwdCZ5ni2wsUTJHXaaYVGeqeHeLthhnQ",
  "key1": "rFE23y5ojMf4J76pv3dvD5zcLaUfCRjdmyVmrEGsSoKsSFWzDuB5sUAvBh7rvHR9c4EZL33iTdWe9jQt46zq4bA",
  "key2": "51sqsNYfdNEwTYMcrggqna3WbrNHovShukp1QqqduqcwK5sVE2zrdqKtMxZP6bJxY8z9v7AkAgVWWfQG7cEwKuNL",
  "key3": "2ixyCmCMQ5xcQFf22nZCqmefaLyHTykRW6L1j1t6KRpZuU94kUF8qxPZe5G2VsF1jfSzmiVKAgHoqrnFYMJMGTeC",
  "key4": "1k3BiqxB7QFNYqHeZWtdB3yPDG5ccneVpUV6RKvx7gZiwCuw3PqmTN2ZMUoiyqvp64n4c5VFFKdmkDFytoPL2i9",
  "key5": "4PJiCfpyTGweJim5H2SKC6PSSb93xYgMinY988C6o1ix4BcHhzBuikzwxGak3YisvKxkYQoNmNwjF7SAPmKviXCC",
  "key6": "5McuZmqW5VBd2strDF6xAMsfXXoSNUidVQqu3yqTZLvW72V4kMfWqegprfuChKu9Y6Z3x7VCiZueiainxi9mkH3D",
  "key7": "4pXGtvyNvDZEamoL5gHNk1qADuqfqp5rzvNZTYnR8Cn4A4VNQhAJTwwPzJTFofTMoSftSScceWKjJRrEaVFEgP25",
  "key8": "3Vb2U6DNWsT6eLxHiFXFPWAuPQTRu8SyFksKprmEiHJmbDYPYNoAbdTe7gKvAKQ1w79h51xqjhGbQ1zSoCBKPKNa",
  "key9": "oNpLekssd7VCXQ6Hsh8Dkccuedbfj1ziWpw72oE2zxo67eoMxTWjSvFL7U1o6Pzs8nY3BBcr7DqLALwmda2nmn6",
  "key10": "4ozCEfuZQ7xvYEndNCZNY3LYHbWsEbfVSTbnYWigFx6yLbt8Xo5EqGDpC1HHMGLpYSBA7TdpkxDyQtphieq11sW1",
  "key11": "562A8AaKCdVNuSwKPU68t2Y1hSTs8nxccefNznh1Rd51MYNnZGon91QAfMvq29X9ZsJQj8w4ZQmnMxU4Hw4M6jRJ",
  "key12": "3ZrsGkZqtoDxPkY9jTLBDzB6APq2QRmdsT27MFV3dNhJJsjwFZ2ewoqk1c6nZYPBUnnMa4nuCZM1kQUNqpr14ZHx",
  "key13": "4zF54QKm6skTM1dsRtmHS9ajBVdZeBLFwN3fXXsjJnJEkiNRHsQg6aqLHd487Ge9TKp3aj38GpsAvNkBPEQLBgKP",
  "key14": "5WZskSuCpy7Lzt8fmhAhurSJu3Kiwj7HJ79Q3zgoKofHWzxmar7bZBuYCD4jUyUwuS5AoEh4s8FSZQKHaLK7QFhz",
  "key15": "3SeRDrtVvdCuhP3yziKSZwuJNMXAJ5r9cgJTFTRgcbhte8cBbEVHu7nASFVy5FV4jBNn9LcFtVo9FcEGVQuqHh2Q",
  "key16": "4WaFQ93Px7LxomZq5FEFDVU2c7tuXupVDgsEP7jRMEZXcaK3ccbx36TFwdE884iQWFX1CMPDGMh81r1EMbagBQJx",
  "key17": "3pNNDAJ522AtiVM1jdihNqirqMZSsNowM1iy1XkWhbQS8HQafj39DzLCYD9yHLokHpmfJ8oryMs28zKSfCgkfmx5",
  "key18": "5UuZM6J6ze4pmLjVnRwRwJPQaBhndEmceSJL78ihKgHBNwcERAZXFGiQjnDeFMai2K3psrmydu1x6cEGMQaT4oWi",
  "key19": "5s7VnnKx4WSgJGcXyE8YgaoHny2g8RrWGVXy8sEaKZXmSeNkM2j4j3NG54fQc23yNJGiHc8ZJPBECb6fwpd1DZaT",
  "key20": "tx8eq6bbs54fEWHtmWp4kJFUQPPbLWewtjZoxpoCZ4M6KT4kvPhof8UqHRWb41vgcGq9E6EjCkfyAU47qfjLAzP",
  "key21": "4J8NnM5148MXhVtdxcgvAjvKiSoM7sB1yRa6CBEThGKkX89jkErqaF5DBn8JTV1tr8s47kw6UD3DUL1JvrvcZLke",
  "key22": "3SbogjNCQyrEpiJV4TKn3avPJ4tdQ6QcL87A1dJJc91H8gFZExy1M51D7aSDkRBvs2Ai8p3B4uDw9EGXYDwx2xQH",
  "key23": "665s9rBpKL44EdQZmqSVQfAD26Ey8a6UhRUNuiz1raPBid7hDkzMQqDGSVuco3yU6dTr4BeFUG8b92pgzyaMYy6J",
  "key24": "3MZX62ujRkRx5jq9ZoJuhspTrnBs5KweZStMmpwEVBcLHhQEJfHoNZsnhgzThCNucJD1Y1554CZbRvHtjUnbx4Tq",
  "key25": "439CzmAmqp8B2UrvrC1EWCGpGgSZPQauyJiM1BWRgtk8Rv3JVzRE2MWuwcB9THENh65AeWdWhBYAkfDQSux8ij9u",
  "key26": "3H1BFSWwrHcSUZBAacSSEcJzFJ1Mb3eYw3xKVunvycxPiqEeXxJehD5z7mYy4L9Vk974S6q2yzKPjAi63Efwabs4",
  "key27": "4qjf2KwqUZVApktj6V2zvSDqAE9iMVEzrG2MpPHJRF1mziHpBrrGxTRdkpZeGbWH3MCEY2s67h9CszCgDkv53ZWm",
  "key28": "4VYD1dBZgQ3atF3Vgoizxb3fZv33n5EGgPFjZKcttiLTt5TJRCHgiQWbtNEpffxk1QffMtVhQn5cxVfdUX9w9rqK",
  "key29": "EQDWsgz3h8K2ZMQZW4gxTKroLSCbe4eTB7WkPBp44WzS3devY6m4ZaYhHHjeR2eMGUmVMPH2DVZYoazYdrLxbYj",
  "key30": "2XGqxL1QnEaEVPKYiJmp35zACFxuj4Ri1kNdbr38duu5ZgwN3dqQiiDgUKoubaL9ufrJ9n3b9VNeUw6gnXNtrnc1",
  "key31": "3hwkEh5s2RGGBjGap1uS3j3ZJMpDWGD1qUd4P4MPk3erR19p1dJcyo4TgJakziyhYKPfq4LpXHZWLZM1FumZamRS"
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
