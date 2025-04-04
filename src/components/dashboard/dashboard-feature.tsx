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
    "3ovgrYhsyZAnDFyjcHNZS4y6PKCX64w2fvvp3p6E8d9cj9wNvZdZptSd1oAvUtgBCEQfS2uHiGTuKHrxA9TXVtUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2peqbe4c1GjCbyGxtrKZTyUaXULR55icPMEexNG8GitNhF3izGRaNfMZbhPDdB86EHuNcCTzBN1BHYhhqGB4woQ9",
  "key1": "4Z3mT75N7Bby5CGAAg41NFttijjFqgsgyr8QZ2RMMBRNAERehty2TUDE5zAuoGqUpDiUwjoHd4jaD9FC2QSvrE4C",
  "key2": "2e3mwVxjcZQT3tSt2rVkmyPyArtJnmzoccM9UsCYfRcwWTk8D7upaPc8uJB3WJZy4794drC3waDYTrDQ7KKMmsvB",
  "key3": "3P52KoEKLkbtcA7iPQ2LAwUx1WjE4RzArP2rv8HqfLxWweGQfxV3iemHy7kn66LYkr17YYZxYwShRfW3MckjL5AL",
  "key4": "3vbqmjYuxSjbPSTJ712NXtHX2QsGgP6BH5whMia8KQBYXFjnMG6LoXhCfEdvjgcL94nmHBtewbiqwZzx6vT375zH",
  "key5": "3WjbYCrmM8eiT5Wvkb8JBiGpVb5owiCxpSLDrGArksCfx5c9BLunZvn1Vu9QNES9kqowMS7negU2xqe2jKwNHAZx",
  "key6": "4Zr57uXCBdp6Q5u4nXGjvb6pXr4MayVqJocjKfjb52ecoJuaWsaZDBjN4SJqCJ52HS3faMsabL1zzuXdQw1CQvx3",
  "key7": "GWvgsxU2mpE7kK1ezpN8jaRjo2iWtCcrTJXWP3nFEMjHDED7L3SF6ibSk7Ysp9qpPrFJrujB6Y9bPsfziJpZbjK",
  "key8": "24sovNAhMfVCcq1QEcB4Kp5Y3gZ56LpFGqKyh5oXcWSbRMENeSJLHDSNH19iSLQLVpe7B2cXNYPzZMrjrJPFuJ4A",
  "key9": "3hYbKeftNNEHksNo98VxAtmMq6iBbJkveRFREYAAGWfCPWZ5LFhSu7iuUXxczDJ7f2j92xnCX6XftH67CRPQ3e8K",
  "key10": "63ECKVKhJVDrDujAxhh6qWifjEQuZdscwifo3Ur99zpMye1guW7GnYR2m6EU1PryYPP4GdepRjzhi7CE12apbAVk",
  "key11": "2UMEpMyg7WMkpqf73XoNM9ueCac3sYyWKMqk16yH1db5GmVqbRJEizeJv5NVscJuYGVcrzRECT5g157p2skH57yA",
  "key12": "35fpPz3Q1QPJkaMunotq2hY9eMF9xPvwjv3CP9txUb4p7toKsfhWXNj7oyF2DXnctXQ4Sukexn15ZUNSGURuRGvX",
  "key13": "2mjvbQZU1DvfYyMPRU6vk9h5mMQTv1bpw67JkzpzwtDQ4rMcSFEjYvqE5dQptC3KQ3otYWC8Mk4ivFeZC2UucVPg",
  "key14": "5TEb2Yywe1jezcSyRMPG1tkyRcBba6hRZGiinKYXuJAU5WKudFRFQe3c8bfz9AYcqSeXJetKuBitQbTMQX3TQRXw",
  "key15": "2xkjECrWdfEzd4u8nyhvUijFec71Xhja9z6jbNdURMND2kF62gQ5ayEFdZpzqMBKcKmfnWCTtLKztg38uxQYobAr",
  "key16": "hZ1KZ6u4bKvMazKEHghaAZq3Eob6JUficvdhifxQys4YB4uUbhYDj4J4vL5PwYSirZ9VRiN89Rqbu81hNKNTGxa",
  "key17": "5AY6mnBRuFsVKX4e9utvj73QpKqCNsUZBqVJu3ke3EkSmtLJe2tQu7nB7wyPN2TXhysJ1HPDmn1noqTCwM9qo16f",
  "key18": "GMzB3ip1tSCWTLHu8UvyukQt2GA17ixvKi7kbQ8XnnqCJvgqH1NfP6fM9XFyUamQkg2wceZjV74jD4mxRj4YFHM",
  "key19": "3nzjDHxhHnzKTjWzo9WQBDogsarMnzEo7zBwV8sowUdjbSQYqzvZWUV9pEAHmhebwkrJS4YPiChsZYxKLdnX5MKC",
  "key20": "7GZZ9vpXVP8PzJnUvDtnk2fHFdguBjsrRLzv4rEZRAJCiN2Ft45Ff1Bc82nUGvqs3XbABSHnw4v4mVP2gkbK6kt",
  "key21": "4bcia4LxkzLC6WqxxsnGfiX5uGx8CA8QJusRr95XQWKjfmWRiWC9Z7NcPGFHGaPWaSq7yyAfJpXmxxedTEXNACut",
  "key22": "3bTg3roCDhpPH7QsZ5ME9zNgm2L7xGjMNcLogjHLv7cKuYyCoRLR1baqHToehDRrg9TzKfuibCCf5kE3Rv1x2iJ8",
  "key23": "41x76MXcbP6ntk4FUxgMGxeEdDXgHQKcy2N3nqw1uPK95zXrjzabddtpnBFnnCb4Mf4jfPt8sYUdJA685rXsqW3E",
  "key24": "4hVBKEfbNVQTat9EAB5hDKeVykXVfUSsEFostGkWf5w8FZhv5UobtEUetdaf5DVZqrUNktDS2VejPnD63zAeRUkP",
  "key25": "j9qdnudKBRdv4CSc7kpvA1yP4R3FXcv1Xi5H5BFeBAwpu2MVQWNPTHnAZm6NhVNphi68jxk4SdvgYw7AKV8Mh8i",
  "key26": "45bNWeKUj1K4Fa3U9XpVapgttYXonDvqmNbs7769CTqD3DZintXYef5NuEBHnARwf1HjmwZNVG5Pg4a3Pi86HFLn",
  "key27": "2DHkm1PqMAESfehXemz1r837WpQb1oUKWhtDG72u7bwDhGzbJWMDaWMSSHe7F9E2cd2nScfrzqK2z3S3NRjosrjA",
  "key28": "23Ed1BG5VEZD3X5Z6QkS9LA6Uene3ZpK7pLZWSMBjZ1Dse4mSrFuYdk8ZYANZWyZozHvBxEyLjePuxGG7no44CRz",
  "key29": "3EqKAQSFhWSKTzLSNmBsAYoEPmAxBRjkPoVpA9MczXo3H4sR1rCcrbATwGzzet5pXu5iXWwA3nvLdA1mrNmRpdHK",
  "key30": "eLTKKVBgGWkT4xJY4qNMSnTmXdoPSdp81KHWrid1xBBVeV5KiHwFeZdwfqSGxGvfy5zK4RMECNhEpm5irssA4cV",
  "key31": "C2H9enpP7qUj2pxryfn8QUzsocSdKDSjz7qMQFumgNHkJoU1iyadXhYyPgjhzUoBU37vrV1SCDLvXBcuCJLW6gx",
  "key32": "tXBfPCtaASDXbXpFVMZ3874nbZeiXW41Rz8aneVFPNJNVPm4niM3NxLDZECwMkohevvUdURakfoFUs4Sd63rwLa",
  "key33": "5CHptfHMbJAda9rAds7ELSWhQEHr9cvr9reqTTdsJMQykCHFxPH1iCx9JkjLXTkvxSPYN3qMpgK2wrbvy7hSj9hP",
  "key34": "AWvnsGRZmV7KNqxDNv2JQU8zQBxLEwF96Dd9t4Kk3gqSPtepVZ3aa5WdRiqSNDe7UmKsvrEUqeEL77B8dydnwng",
  "key35": "4axUWim4jCzJvRavrJbtzTUsoeoxSg474Xzm11q659H5sXZncx1LbKGKRpc4TGCZ9ZFhwbVpRWjxRwiPpYXbk9ve",
  "key36": "3W3aVW5sT82V8rmGRzNjuriNsYbsn5kb8D1PKBwFGoqFy9Cr3qnEfdr5vcNGViy82yuTUbTx121gtu5uKHDtqwA9",
  "key37": "3Ab3Z2zgqAmkxmwYGsS4ZMzLrfupBFTaghZe9nd6qM2er4Rbj7nBV4WGHBAzqderGqXaarZKyqwzjbbjRroewyNV",
  "key38": "3ku1NF1kKY8ToghmuDdD2mKMp5DSp78zb63yVmYJywsEVVbPSaVc9VGx2rHsZqyznmbLkK4GYy8eH8cKAQmFiLLf",
  "key39": "2YpSecaiLaqsunsH2XXvgS4XSeLeP1Fu4eHTkz7FDPTCeXvzx4KJKAfrVVPFvBdgAxpMFtEx1uFJsGJ3KKL8bpA8"
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
