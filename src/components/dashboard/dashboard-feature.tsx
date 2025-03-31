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
    "4Q3VziWy1DpgrzUW2JXRsqzceu2atweTSMpApiZ1JyhUuLifsxwxhYYSP2qWJk5B8FswbqN3jgFbjMSzqNceWAzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dwFGXQAxaxPEFaYtTYFoKeiG83UQAgs6CZvfe7EQqCnSz3ero7FvNvcHAyz2HqfxC8hQQ46V4a53MYpiJu2YPbc",
  "key1": "5uBvj73vok9zuMzZLkGxHSRJnz8P7po1umvaqDmkCksqszcAmnQYpac2pMYEayH8LULh6tRqV7WDQ5VgpJyUwmZX",
  "key2": "j4y1n346YrX4Xm5TniaSzzLcf5Tt13HG59J11JfUV8DkB1jcfULzpLcAih9HBngsYGqCPojAK2DHqvnhPyN1rJF",
  "key3": "3gpjiXKfUDhgPfZ12QnkR3cgsX2aa5w7HQdcNdzik7ogG3BYdLtmC6SJdxnwqsZCEVr1kkZLcKud2spa4r3DNiSc",
  "key4": "4VUVCppRqcgUNH4M5uz4xUgsHtsAmt4TvhH21bXeHL5F89UsVjnwdQ8vWAWTgbuMLfFgarnCEaCZCoi23cgNiyH1",
  "key5": "5z4YtmaMizZuN6mziucnCYLKtQd2tWWso4kgPHPr31hd68qRHiN7SnaM8hHJu2UEZ5RMq9s2Tmqm7E7KaM4s5ke8",
  "key6": "2v3wi8GBrGWrAAPzJm17ocxLveFtcNoJWu1hmox1QcicoEzc3S8fCzSJ62Gnv257UnJgogrefN3cmfNHCGqEDsa",
  "key7": "2LWe3uKchoza4z7mWjLguUBmQknVHWwvTqtFk1JtS7BQD5dH9pmh6cDHt4mTpNTMsCiaocgXoW7g3vQuRDsmKEar",
  "key8": "4Y3Q7dF2b7JeFHT9AmUgx5MyUTBNAevUFMZ1kVHhHr2JQBqfhSiQtsueGKqoWc3JWRLM8U3vZWuCaa1wPk6ihqb8",
  "key9": "xeNFFyDXZ2F1HvWPhwD4F7UmddurpWndcgqxpeqjE7tTNKrusXVV88wtEx1ZFfbTYmBH4fe5EzdJhtUsvVjkoBA",
  "key10": "eyffNyA7XPQLhi28NZvV1dubwsxk8nurwPH8xFcvJ2qjNNwGq74X3438unxtiYYQBua5ddr1ADMhhELvReASx83",
  "key11": "3QjQQFJpLH65LisDgEjic88QsHgWANDyd9XLWWZMiiGAnzSiBehV6hFXQVMjbWAzXX3bpuzgnCVHzoSiqnRgZqBF",
  "key12": "41WHt8FmfBbRo9zyjSdeXn9WnGNYS1f38RhoujPjvBFPU3gpN4VbznpifSKvMBY2fFTMKmLx98PRCFGNpHAaVgzi",
  "key13": "5TUBRAVWtf3dn9atJga8HQhvdVyoBXDicZ7CVmmfAPXs3NPkYN76ejukvetuacyvTthjnxjquC3zFTD9neNBJEpg",
  "key14": "5ik4CuEEBE41pZJNh8WUk7H9Ng7Mt2CyGLNae2RsVYqpitH7rTNg32N4yLNMuQjQ21feMHht2avdKZnvckY5w7k4",
  "key15": "4H9oWDEH2uKEdrpTF7HdZaxjXD6JKNFRc6GQn7Yi6MdBKkdPWyauZAfvqVqaa6qVTLGn4YXQZYx4hFFYNvyjgaN9",
  "key16": "36nXLLHWYSB3ARJYSJS9z4GRjsUN5XrYPNhw7QZro1gRV8UNADnHEJKgSQ3efKjHcTngBaXCPy3JCMZERBT2dLBT",
  "key17": "55KVctJmbyi8WBBwJxbZP6g2o6hxQr3TftxwtxqSotwWT1A5Uvw5JySVPjoSikhq4vD5C31umEWBkpmTyZNHMPid",
  "key18": "2yYAy6GYiPpLYd2NkY6285w6pabcidYeVtF8pLmcYMzvp5hhASsQbZi1HvsxCT2rW3YrE4Bay8Jm6h6dJuuDbkqi",
  "key19": "2eTy6Ni9sf1wEizjMKXrx7aDtbfA2iVKSJhEhQh8S8hmjRZD9WXC7t21tpj1ru5oreEcrsHC2bYcVX7geMfYyup1",
  "key20": "4Rfru4wCs5Zs1Cx4nR6cpstB3qELMt5yP74gVa2vLjKwBWjzJMPyywqSfvYA5sahm3K3JFYmDi6tePe8nWtW3RNq",
  "key21": "NCvaVQbKWqoiYzqRdqodyHpoEcxdcXT8Stbd9633v43UxdN7tXye25ye3zYt9WuqjjKTD2nxzikWjf1HmPiMpXk",
  "key22": "3UKiTP3ibvs92GdqTbNBfHfcKsHcYqZuMguuernqKp7wFrtmFwx2A6iYTQdLSUgtKhSnNf1szuLmB463xSWzmDgN",
  "key23": "iZtQN4sjiiFWfLEzRwWxNzkkSzxdc9Zso6SqzE9Ro6aK1Sz485VM1SmTgBi9Jtwmt8VzC6o8zcwKihTcBY1Rw6b",
  "key24": "5XHmxq3kTUn5c2LKf3M3CetfZaK7BDAg9osspPjU5PbzSN78oSXSn2Zo8HU3Ycacp9XyzJX4SX8Dd6WqsLLMz94g",
  "key25": "xSiXywGx95GK8GhV3rKjxitoTHUucFwt41s8QghNpkTuFFFhMYmJvCEnrrzDneQXVqrsaCBi3Q7YqWhmpVrSinu",
  "key26": "bcUUpNWH7hJ4FV3Lom5QsQKopa4hZSAUrPGii2dZFDVmJj2ruggNdCm1DyTRdGiRn9urhCWfEivQgdjpi44V2gU",
  "key27": "492XnYRDCPdTq9imvG2QzgKRSQycEJa2a86z6e8faYe6K4PfBqZ2UbmiFjqZa9DpEXDCyNYfrhSqTSSAxnYTaMro",
  "key28": "4nuDUM7arARdZcCd2X82ndCygsmPGFrAXw1UGE46JrGGfT1YrZtd9CthcgUaLSYiSnWhsFRVsRbTufvoYnKmgXE3",
  "key29": "3Yiz8bu6G5KLqzd1EWhAX7eiXL2dm9nwcPpNN9a82sdLp4525a17kdZS56yB3Tu1qxWZ3ta69WfNSSwUn5xTHLAw",
  "key30": "bZYqoJKqCwWB8Jss8LJGJVDhk794ZdeQms8ozfUCpQQ6Yo4D5xTfozFBGU2WzVYLpvb2pbVoePAWS6n8TnK2cEz",
  "key31": "4GdsxPPxtLzgu4fg7szzQtcGJJuZ7FV4a29DPxTgDmZmbdQkP12q54m1GTT1pmwJ9zKpmHEZQQR5Rh2TuEtfKd3y",
  "key32": "525fY8rRgLZzGTa7tcUZZSRfkr7PJ7i7VnBrGKYmNpLC7m1XvS68wmiGshn7xwaTwcpMzwKjQazqHUxz1aHex6c2",
  "key33": "SSCtkzhbkstHuQRq6kEYzdxKgWSJ5cq8Qi9ZzKYWzUEPb9gPrW8V77UmuMSWz3L1qxJi8M3PisvWbnt9Ln9T7z5",
  "key34": "RcUHYLzvmJVCui8H5bCfLbgAFP9N9qWiiRsFSXbJmJ7yGaYSkoY4fvYggcAAQCRkiZ6ghzVVc1ENs9jhryYyKCU",
  "key35": "3KcCwbJgQC2snqdAJMMcuktPpCjYEpxSotWUqWcULK89eTKfXZD3RLmNNM39nCK5oXLG17kehQSpMRnmQ5fCxMPv",
  "key36": "5knfXayuXopugC4k9qnmXLsAbYGdVkB9WSmb1jQXiQVaJnc1Fr65rx5jcMrALEHLMHyXSL4GgXhiUBvAizQWMNf1",
  "key37": "3BzCbEvDvhJiguqWSLJ1hiWqSTXmervGaGxnhb7CtLLjFeRaGDmw2oatNepLTN6Tcn1C9ETJ9RQZabqyLE2WF6KU",
  "key38": "2g8rm3cAPbrhyzXbiwLSYMrYNScpPTPsYnEHbudg4qd7rPWGU6BBCGAHYhmrSK2FnCj8AHZVDBWPD8qDMs7F9YST",
  "key39": "59wB8Khr88GR9tLQPxJGNpRNSsewtRVgGMP18xawNbGkQ7wAcVSGWyzqbyaXezqcmFr86pSZKFGMgYWGfdfsizsB",
  "key40": "2FAtx8siQUZitPxUfPEkdgUcD5f5R5do9B8uVcaF9v1RdeXL289fnuAyU5cnGHkmQdLN43aHbNyRGsEDpGWZx9iP",
  "key41": "3nLdz4JLidSmgJcB65sdcyNBLmEtpZmK9WsaexDPbw3UJBACUfEEtSy8kHZzyZyrZv2JJzdfzHbtcDSf1NEbPYKa"
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
