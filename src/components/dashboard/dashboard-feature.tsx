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
    "5zx7REcmEKEzFyoC7Wf78aLutTkH94MWRNq6PoUhPQ4FZX2asXpoP5AkBckguVrX7voZma3nkYciW34SfM6gi9BL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41HKSaiHnS7zPf1o6ZbAhHrzsZhgqBxpdCUtV48w3g6VPna7Hh3fbLWLKbDwomd5BB6rprkeXJqUiXHjFgdtXSff",
  "key1": "5aYq5dHLhjgvoHbDXJfAEPRxhNWc7A2Vq6Yd7nB4sJNfGpPTx1arrELKhSQJxAzvmRrq1apD5HEy7v2K4ng99C1D",
  "key2": "3cCEkvHMnKNyjKPUE4ksQVVeJmW5YyUuGiPXw1vdPSahM5AWwg9WyvhyshhuVowzsMptei58yytkA7wJcP4ePux9",
  "key3": "25bVzSWoGhqtpmY9iCpwBH2MxY8DjDXpDYyZvJe7My3yuGeRAQcN5ih3owYCaiHjuamPEMeE6YaZ4E7j6JZBPeWK",
  "key4": "BAcv8oq9pm6bxUoCULrPUhutEv8CLJ9iaUHREEA6Uw43T3U8obRuDBPeHZCxcQKbbkrb7HCxSPh9fSpGSSS28Js",
  "key5": "B7Dn4Y3jr4CqAWANEsBDj4kYBh5Mm5HXHuXjE87kNJoKCq7S7vdvyBzWnj6jaBhGng1LF3bwURyoaus7eZt1gVM",
  "key6": "5cayhan8obCdrBHgy6LxCGZALxH1pNPqxcoh8G9Nfaju2CWqk8zM9xHvbP5nxq58xoXf7vma1BfUEz1XrxJRqG8K",
  "key7": "5qRrg22giBViDeYRrm2bmToT1wTL2bz1rXzekerkUzHymwhfZQ7jH9oatZPCpkucBDbwZ5SbDa98a2qZ3vjtaFnp",
  "key8": "8C2Z2aypwGhnyXevVFcYmzL6BWkwzFTCmSXDXjEeyzgvZ6q5nxQ4hQ37RKQoeAWb7JZDYMpbnMLnDNRiBo8pCUB",
  "key9": "5mRwp89oDaREhqV2bzi4MGsgGKCgf1jNfCRUV5DYn113kH9VxHzN5pcsYssi1k11EAHFH8z8RbKA9o47yLLXnwhr",
  "key10": "2TQwUx8Z7tsSAmiZrhhx33CNHe85tLQBFUuQzDuR9QUrjqG2GhNCJQsqgjXdbM5FiQuMjzcsbK1U3dAM5Ex6X99W",
  "key11": "4YXcA724xJqvyJtGMfH3rU9SmAS8jVsbzKevFmdhNBZVXiqSUMKH5hEsLoDXXDCY2hqxZCxjdCLwg5VgpTQRyeLA",
  "key12": "jvwf29rB9Me26R6bAn3htL2a9SfgAh3CazPEMHu5FDb1gmfAFAqB8Ln6ukQYWJWfdpPEVppH671Rrqitu5Q2vV2",
  "key13": "4nCjFaHXnutxJvmaGnMpF7xEW2MFMa9qoNz6n9Z6PZShYdCtEFbivNWVcMoRUU2u1kLCKwZ1nPVZCUTtnUQPjzWY",
  "key14": "2pQ3ejT2LrLx3GZVBdrtAjjzm9euXKBctsKzKyRBZQARYmDwDoRvboC9qsyqdSNMAr9xcA9gafjtKswz9gQ5C3Y3",
  "key15": "Jj4ro6TEgPdTQnL9T3GA9UGWKmEG2eZwDnDnKpAun4yy9ZUkH8cmqp4JKyFAKAn8hKq9FcNNc8w1s1nfoAVDBd7",
  "key16": "J41JsMLvpuyCNUpcuugyabpR4z1WYsJq6y8cabzySw8dHQEqZMx6fVGTx4YJzUr5MkWCzASqZtpXSgtdE5FKus4",
  "key17": "21iBx1gM1LYp5cDT7FjpUzY4khKmsunJaDkyj86yyMYDBcExz1MoJy2rwEAVVxMns7VKN4epf23dPsrSYz7TC4hk",
  "key18": "SG1pEUh8iDDHmnsbwEQsdpQpfK5cU6b8UgQpK75QCdnTB3bFAxa87aUwqHLS6LfwSoReaP6tryeTb6J7kDkdanZ",
  "key19": "3Y3HeSAW5ap4qKjXf1sq1dtXUF5BKCEMCJguxMbRw1o2nEDmZR3wA6Ud3Bt1g1b4A1HFsZPDfcVUd3jkQqM5AQbJ",
  "key20": "5FJWHD5AiEqDtZjLRX4pLhcec2ks8iywdYAaPdY3EfcmcQY8EUN1ksGKDANjuqt356CpvZY9wieXkJcDsDq7shLb",
  "key21": "4m5j57C8EXKj6AFcsGdTzunhfSqPWUoasfBWECxiYwjvRHZcMondeLdNVJQ5vyheAhnhpipA8iip4vCX1MabByiW",
  "key22": "2o8hEiEF8kq8kNuqnwJYMK6QjNpEkVLMhYcYbh3Jmxha3MDWmzPpCy3ykQfdFMDLtWWxC6LaVjhasUfGmq5SiTuq",
  "key23": "3WyWi73v1QJF1irPahE9wXbY22ozuXHPKfG4428DQUtx3RfU6FanMxCpiDFzme1bRvc8KVRT3Tfv9Q5PGCb8MgTe",
  "key24": "4rA41MAwg1CipxuH8tHtQX1ZypbbZqr1ZtMxefxAG39ivoBGPMRNr65o8a3HoHDNkW99HhShanu2kdSBfKPBDq21",
  "key25": "mCEZWvTwM1A1GRisJWbquBfAq7wH66u9QAyjKmz7UfuFRmum8MSAwJt1VgH55cCAGyNZWjtLttvkejERXgNNPcj",
  "key26": "66VufCfdq3HLALkfcB7G9SmcLGtqq1dAq9issdWNYtxzLdTf4YbVFWpNndLm7SFt4VvsnxAx5TBPfgW3ajR6GFCt",
  "key27": "3GZXU7wtob6hW7hS9bUGRxU42moLNU9QqzCtAu5ezP9QwpThiRfvJoug2aCageCgyL6woh7CqWoJuGDUkgirsJoF",
  "key28": "4rVoeFqN9jsyVrQFtgvJzGePL96VoQJsfRho13zBGw3Twydmze9rV4QoVW8qXGUhvewA8QWbHG3QXh7eaLQYYfXH",
  "key29": "YYFYCjYSVyNWKvPeqCBGiBk3HCKh2K3TM9oXNX6nn2mrrx97AYhh96NXy3S3KbxB1HkzNah8HBxLSaWjEUKeLwr",
  "key30": "2gUX12Vgrax2jKpzSV9SKHYS2VvgYdRoTjyw8877KnJEaJuPKWfZzVh9QPQ7rFaoJ4K3sKgmG9KHL8buZFakRbiu",
  "key31": "2ousFSvALh3KUoCno1aifeLe1yZn7NXcfaeC9GFKzbhnb2vVxLLPBJFMsseea6nTWPGqhz3QTA4uViFHEaoTiUHS",
  "key32": "4mJQWNuH8bXdApRjLsZh9bM34PMJuvi67t4nmCCcGiTbTy2b8sBNfVKSzEonKqE4RW9g679ntXSsPaBPG8szCbCF",
  "key33": "5K3eL3eeMkwW4VBz55rZxPHzPURCcGR8qKMmqY64ZCSDJBHkQmT9TH7F3jPWyWvXCh2Pcu6BzhuMiwqvFV1oCf2U",
  "key34": "2gH7z8p7zR9LWnk1eNrGig5WHmEFPtn9GdeRpr3LDGUw3g2TiCungEcifjKkPwChEbUK9qGqVnhGTqTHQZ6nYHpa",
  "key35": "4czHE6rDruS2kTttB68XRG3RGZjDVeXMeTHvAxsxaq3s3ngKmc8dccNnmf1VbCLqeQbaeBL7mCXWJRKKmbnR1Aip",
  "key36": "2eYLDWZjouVrYZn2KjHzmcnXc4JLzhE4A8fwrcEBuP5RQAR5Ni3t62sJ17a99M8zKoKTHUK5nPV9zmxzq7wzqqDL",
  "key37": "3bRcVjNRVpcc4hEezKffCQXxvMAyi4HSLTwHUTSYd85TGG2Pv99ryVvpvnrukqzgcsrMeFHqzH9DU6gG9oMcZwVG",
  "key38": "5YWCCsuhyeb8W9BvhzVJ1sd1wqsDoNeHArqPwa9F8oACRr6Gcomo8tSuBKZg5UiaiomtQ4BHjnk7CRV4mnZmscAW",
  "key39": "UDTLteMdnsnCwGvtuCecz1VJifFEbPz4BMETQyYpcG2Rguu49LU95DcRxBYVJFJ6v19wqUeD46X7fa1QZHsirkQ",
  "key40": "2B4HAZaqvnbucYjsHZPW95MftRjwBcxWq3G11dgeVaEmgeTtLaMkqHvcZYmyhc8yd5Qe7KLrZefDAMj8Y5vd9ugC",
  "key41": "31mCTs5GADN4NmBQJaHLet9ToNs1Pi9SUurrThp6XpxRy2Z2L7wLVbJmgf5iuBLh6p9LSp8G49HF5r1MSrkpjFXQ",
  "key42": "4aKPoQXNA8ER7rUvfjYLQpVbwoJdaB5tQNn4oXbuu6wsxiMZ684g3DXQcSqm4oR7UQdnd7NgDqPh1VS3nYc6Vvet",
  "key43": "2pTSnarLxS9xZP2xnMJbL7sL7bRAbvF33Aa8TNxajoKyuBJoyirEcxzxcJQW7cBP8uC6cjJ1n7g4K4izSWkNyGw2",
  "key44": "4BkTQYkzPymA9WMkVb31oFkGaE9FH1PGqMu1R5FADk19qRsuSL9bam1CUFSLGKtuEHtNHsFB82Tshufr5ECWzuY",
  "key45": "dfw9ZLX5EX9jPJ4iuMpkttngDNCAetgJEGnxLJN2KCSXxj3ABmKDovy89UGnGGSKtzihJAKi4BBXrqZdg5hX6RS",
  "key46": "5iS28qcLhHFtaZS6Skq7bRFVtnQHZH2VZbcBnQvghAoFqVPhzLCS5qmWiAVurJ4xKg4ALao1n15D9k1PU67QqKN7",
  "key47": "GWGdxVamwPPsRuUdxznpad9DLvpUZ8Y7T8XSAgge6vpJbRwTHywzpVqxampDmiA4fHBT82Z6mB9PyfgrkEncXyr",
  "key48": "95LGJaukFu5Gi4Xqkfuom4JBHfFGaYTXBaChC5pizLi56xseu4VyGKun3q5g1t8tXnTYhK1LXDZVcgHST5uD4Go",
  "key49": "3jFs1xXnNRcphNR1dQCUD7rGK1urxtvntPVS7kFQyFrvqpGxvfkB2omSJNosGEpMhyqmKmx93VLyBuvBXjzto33u"
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
