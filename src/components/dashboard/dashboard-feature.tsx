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
    "5UzzXJWcVdG21uS96xVNBBULSmTKg1DfQpbpK1fk1uwqPHj1QwZngw1ATsQUnTEsNs1M1KiDS2z4JJ4GUaXviPdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ghmQeRnLnC2kFAJq23g1coC4ifQD46iMEu59F2FwsD7AcgjxqQcQe9StJvBadovbW9P7p7iyZzz6Qn5EE5hd6B",
  "key1": "3zg1PGvuvcGZsQj6NLhknUNqmnZmFhGzroi4XM6Q838JMyY1fxoDCQNL2SGXobP6wcbdpFCy2nqBqQ8HQeTPbKYT",
  "key2": "4FEFJ7EcThiziZP15f5yYhrZKDsR4GUBsrtfMSL8tAghTHo9GkXXBy3cee2P1kNemdee98poGbE5H4WL7empQgoa",
  "key3": "5BGTSoGaEsvBviAbL9WntXjXYeanAsg84d7aMS6aNTzzxtuU2GmLNWRy2CdUTbTff6gEXM4f2pbVdYoN3Un4onG9",
  "key4": "3YWgudugmBu9N2ndYyXT6Yzk3QhX3DBE4AZezQWAvuVSXixq7dCmk37gNy9CiZitxpw87Z7CjrSC8UZ8C4hcgAca",
  "key5": "5Md7YPJzUXpXNDKkcJb73ktp8H4W5Bwpfg2SNogvsyx559LP6Qk6AsCSpVsbXiyddFmaeTHgMxh71artpTZ6Xbfh",
  "key6": "59MoCEau9YPfMmqAdrwfWLSf5g2SBKLVcUqS367B2aRoqistAx4LspnVyLMjeyq3w3X3UmPzGte1JWkyLnwP2gwk",
  "key7": "VmTQfRSLbbhHoBdvnt2SZKkkifLfLgjAEN49nyXXpQkpPCFfkiVC2bZ1haEkShrxyYZNRVyp2APVFfA3ebvEGeJ",
  "key8": "4wCd8BKhZP6uVDSGK8mHFTYQc7raQxZjEoubXAaakv5NmMofcC5xUeFhKaQw71Wu1VBVs98LnHE6wb79BJP3FGJK",
  "key9": "QqCkzqV7AX5a3ANABE116xhohhuQJy1LBG9ziExeRyVWMCQn9q823Mt96viTL8tmuoE1YG1kHQDnZGPJEVcyTbM",
  "key10": "33tVaMiqQE3x1JanpKxzsNdJLPHMev1CHRgNFvyVvXiSdKfsB1iEqEhEyxaz22MyjsRyqn9SQfjoodfxDjkbFt1k",
  "key11": "3xz1nhrbRWDtBr9s3TmB8vodpRDgkRPUZfjVcTfarjKg6QdiXwcHbmxiNRthssF8P85qbU91J9WVQXfyW8uhReUp",
  "key12": "4F8qUgRy9hKxicmd83rPqWrFTDuzP7kREeMhw2UxDuxcqwmESqg1ArNnqoEgXyFhBe8tL3cAaRFhYcVRgEdkAoja",
  "key13": "3BJW9wgVRb6Uf5RtcVdW3kmi1TY8BAqUrRzbSAek45KwxPZq5D4VSejQCUZKxudr7SZWVbRxM3r36zTYoaAFynYj",
  "key14": "QTPDAaeTDqx8ngTHTvodbkYKNBUUu5eDXeZidkUWX6k4kcpZDLRcT9QMnnSCzoaT2uu8F5VT8GzZ1WtU7ycTeSc",
  "key15": "5ztXS1FmsE6EFpcyEEoZoxJ4YZitsgarp7LsPcF41EV6w5pfWb7UTES8ZYx8x776a7z13uEJUkUYDQsFxrwixPsL",
  "key16": "64SBREQ71xwa7eN5nC2dopHgffVjejBjcW26NSHBm4ASQhVSZmcUFmSXunzN7dv7X3e5ACyNZdB7ZmMzPZ81rh7o",
  "key17": "4ev1ivSpqCzktpCCtKrb9CmpAPma8CCYrpJES5Cjb4svTDggiXHNiZQ47cd15H3DUXDKHi6FjdM1RndAVcRhP54H",
  "key18": "5aiJYyUZGh4sZpimxvudYWmkKqSabUDp6Wmsyi6sags3T9xgEhJdd3SDbK2Ly4EtMr5tcg8GtWheUeVTKfXLK151",
  "key19": "2os7fUUpHSwr9VGbrvA4WBzoQaeRXYFkAgNRJm6gZY56ywwT7PeieY4Dui78bceC7qiJQP9JReBDF25HMDNrMHvC",
  "key20": "39HVo1hG9n1yRqebq7tJjywL9PB86kMA6nHH6qVU3qU4fczm7U19eCWzWC84SPM2zXLAcji2VrRiEB4ZvfQYkHha",
  "key21": "5e52MPPDXMLgstBFZTXzb2XBDvYp6zX4X6EUCkmHDSgRZvak4jCVqpxowYMAmiios3neDhobUAJmJ4y3v5uvGGL5",
  "key22": "3viNwshzRmATiGHWyV2o2z3Jri5tKSsQJTSr1nvxfKhh4WtDmeneNGNM93yEHwTaagkjnv7b1fejRRdx6HBuxyu8",
  "key23": "2ThyktA2oZXwbmaFZvimCH6XwTco6yR1mXUWE1wPoNRqKk5mb7DqQhU8SKakzVbG1qp7ue5osUsYooTZCdW2Y9w5",
  "key24": "WW4wX5XimJuRY1eoDLu3YaBYrGhNDRWHuTp5H4cQUGnj12veAeQ3VazzrB8KH4iFGVxug53J4SFC1aJVEybFxe3",
  "key25": "2aSAp3zPTgYTj3cCJyQxMoof9wUPN5B7JoGUPGNiFqE8Gsh1U5pBN6HXi9WZACCEVwBKNfxH5nKnk8r8VExACC8C",
  "key26": "4aFKLSSQLB5q3nmesQxL25Z9arHckQH9nhLHrnEAApqAxGYFREMWnWjqZvzpHjcTJxrtxhrAdLbPE9d6DJrkN5Xg",
  "key27": "fjTNh2NfTPnrAsdjkWuoX3fbTpxu3HPsqfoGRLeuZ99apk2vHTqpJ1qrZsLyHfGgywWkHTofn4zJDUBy12Askf2",
  "key28": "5ZCqWdqdM6BqqBiHwMZAxsxgrxHHMdNWiJ4YK9TCNqo9xGQWAkTuszZE2wCSc5Gh51RJnLcNTBbSgjmHx9UUAVSJ",
  "key29": "3wPxac3z4dr1e7Pces1MQpqw3LqWWUpW6kuSCLx5atuge3jQEka7A3q7h39VTd6KRk9UuPtCt8iNXr6mAjSp7EU1"
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
