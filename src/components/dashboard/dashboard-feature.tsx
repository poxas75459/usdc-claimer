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
    "5XXtuh22TDdhyQiMUQKUy574rcjVyi8cWKqusbpZMBuKnsgkgYbk6A63L7kXB3j2a85WV2biVu1i6GszvNURAGpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGis8H6Pncd9H2cZfaBMpWS6PBTdkEmLsD8EE5LQiXWTjXHMqzb6ueLkxfaDz4Pr8J6ys9JKXJCvQ8fcDCe8J2F",
  "key1": "2LMN1b2v8yvuipeBcxN25EHKV5jK7ePVaxSit5NvgvCEGP3cWijerbCfPAECi7YwtYqbdtBnge5wQngcQjQ9zZWW",
  "key2": "5dhNYhc6vJiiPmQZjji8zjhces6rJpSwaUMRAa9wYyKbDnZvcbchub7RQo3wBC9Q7KpSpPgdMyWDUnNrmfLbWfsf",
  "key3": "3vLNpPbG99zyFWkqwgVmqQ3EHyeywxwPx4o7GUkGTFwxnZzqq9ym2JrYG5TtWqFheNiZUyXNdf1dT8f356KtfywA",
  "key4": "5Po3r4qqPgau5dTPAtmJFWgyA7G79UvfnWpzuihjkSaSmYZKfEyazx7AtZpypngCsFKTbTKKHWpdcpdn8R6NpumH",
  "key5": "3fKi5eoaTfPXvbYsWJAQ4RsDrtRBCdpzYdBKdBNA255KUJoAwA6bu9BNBjcJRutmVVxYuqKrR82QVzo3C7eKP61j",
  "key6": "2CeZo23XfVDDK9PteAiDQhDB3to44rRmqb3mWFLTLcVRfPtp1fcFFcKM2QTN9JrHW8AYb6eRQKkJuSWG6GA8nyiY",
  "key7": "39Cy4RQ3uWe3NTtdqtzmgJMGktF5NjEEtwUdkCq8U8QETtDUbB16DarSiCCRLCeWqXWQ7NtnpGkLVtSJANS5dor7",
  "key8": "3DEBPznDmZcWx6WszUFiQWUMoCS1mqzikk9wdQHeH7KyHEN2N8KZ3oh8Dnu9jdPnCiufphWhumbD1sywHoQqUarW",
  "key9": "2i3rK6mjSweG8YguSvysPgbZrw22cYeQrvVZor8Gye325dEtKntLujsG6K6A4ATPRjVci1xAKodwFvuKvANXMpzm",
  "key10": "5gDZjwfLzdAeTcu59iPoPz714BQEmp9P8GgsgSJLqsSnzStBvFY7rPiWTh2H1x3CzTUevsJVzbNPajzxfjV3TrDX",
  "key11": "27MZTYPeTdboUd1jTr9zWFrUzmygN26yCD7yfktydg1QNHtTGxBMJBZgTfkHTLuZRed6KgusVXVTAUoDn3v6GZbY",
  "key12": "z8TMr1XarBU8eZajUqqbDxhDgSez9PhbHs6Fij9SnJnrPVNHpsAJ28KzgTxKjtuhTEgswmkzwrJJn3Sb68XYmBF",
  "key13": "GWAZ8Skej6McAURjwHGttJEitc13wfPzPzqQs1zekEiUiPo2RpJ7X1bwgDrjiyxE3amGzYUmrYeaPucZH7a6Sw5",
  "key14": "2YaZ6i8qWowEbgSffHQRveZyXFKMkqjXNomJCp1ZG61bvpuUnLwHHrauXR7e1ZVubYf2inL1arSXsYuN5LtYHtFf",
  "key15": "6bX3N2h1CWyWq7qUqZwbnJ6g6JfcMQs6RZXDa8aHvDbNGJzYB2LRqKQyWMXrhwQUASTwrYKj7MR32TMEaXoxWnA",
  "key16": "4Q6USUnqfahsjgdLZxC5AqaYsnxctj4niHeQCAScrA8omFtTNibP88pYPm2zYtMU84pF27dLBkjQr3ZYxtgZnJub",
  "key17": "3CahshTNZCGGAYnqS9tEMcSz7d8WGkjVqy4gRoTkvKDRqJM94RPYvaYAG4CWTv5nTa1u8sKVeQxWEsKYXcCjxcg4",
  "key18": "33cvvE7sZZV2zTcGvRKoLyHnrYEYpqjQviX2LnB4VZLoYyhZrS8iRki6dEeEFZkxBHk2RrRaRswHny61672tD4cm",
  "key19": "4zbbTtfvzgVXuAvnDupjHWYumx1iVkZXmweqpqocqjQTRckSzYwqdj8dXnehVVHqVAzFFqNv6vZzHEn2kABWXBmv",
  "key20": "1tbte58eJbGtaGPcJhgYup9HHEJHFKPjXPvd4JdqN5GSxV4vcg4h1pd5VQ9YBwxGqqnfGGpzB4GhgHe9gGBdQaZ",
  "key21": "3pxtkS1Cdkv5CbsnA8sfwz8TBfsusLcmY1prjgi44KYR2zkPJqUcHdqzW7KNpYAUB92bmJGjnmyYvWnT5kTA8XN",
  "key22": "5U9WpPjpVPPQPkctG9kHJbbRcRPWbddtPu8jJeyVSr1S4yyVY9sc14SHtnUveJfbf84kd2Di2ctowQcv8bzChbEs",
  "key23": "4gMtLRye1dVTauxZq7rfre4mkr7utW9KAYWCpCQQCpE7hngUp1EVBkqyTEpG2mK9F4Z31HUM6nc3UhxvAEjaJ25V",
  "key24": "5RxtrqoBB2FvSzt6xYgNATmq6Z8tZAAdG76SmznkAJks1NeL6pPgozHrzYGbgDnZVtXBwg4h8Ru94nSc2iVgPdVU",
  "key25": "4UxbPzj5Gr1G4kojDYWuDGTwSPinpAHyGc68zePc8QHSHCKPSceNoZFxcW4r4abapJEaNNagzuYMxzfVicoZFPD3",
  "key26": "2PEByLx6oSSDmjosCduSLiqrxTVSHxwEnAWUxTMKwtWYF4Uuv4PeqXn35tbaiyv8iQEzmBjDQYuwTLY8hXWQSVK2",
  "key27": "2szx7Y4wa3cZCTkKJcyUenpaWxfvAsGx3pdHKGv9FicaF6CePZGW77ff47G96t8nsTmEXToZSSu7YKSS5Vz81PkK",
  "key28": "VogQH1zSpPWZzaFWBWCvtaKM9tHUYVUQh5SsN3g3s6tFyeUswznFru1CZMc6keZqV3eBghCjsYeCyqFngSXj7dR",
  "key29": "553BDWoN2LP9WpwDx3S65San9ASk2G6iLMdJigZcpLYXjRefA5ptmqbHhTVpAfZTw4M2iXdUTNkoXAyFQnZLwq3a",
  "key30": "kkQemGtMkJzxo2CZwxwGhBuxpdCcPAKmfqaLXcjgXaPg3a6tGLGwwyQ8ANg6Ktva5Z3keMmmhwiwG8ChGbBi4aX",
  "key31": "MGUn9VrYYt3XGcFa9HnyUVhuJvHorZsgyfmdZZRznffgPe7GiZ6SjciAb8zbsMGq4cuYqviC2FJv83tdK9oiPRq",
  "key32": "4hZhFCJz8jmkR2GSZJa9zQ92jYxL85vD4HUctqCcpmaJdaAYziJ4735VGpQf4dbbwGjgskLhM8a1TzzYzhRrX9d4"
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
