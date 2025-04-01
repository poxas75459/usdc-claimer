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
    "mqHAPJ3FfDJx9MQXHZm9y5ZEWMxEiwq2gKwqyqTrx4ZwDQQEjK4W1zSQYpzzwHf13WeVtkpVNMbbqsEum8whEve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBc1bnUBa1SgxHEaMFWYPv5W4Sy27QWG5kU5mdisVo1BQb9cgJWjGtKnwyNh38EU3CMDaqLj1Hd3cqkDGVWNf1T",
  "key1": "5A5GPb5eno2mFwubphmuE6JXT2BeZqH4vQK8SVBiWSgHPH5CwhyBUTkD2RyDGNJ9Sfw1VxeEqjLgsvnp7mXpwpvR",
  "key2": "5uXvBcrExsp1Y5Fv8pqmxmFRXYmUka8AwsZLPzXaEYbqpfmYcY9XT7SptkBHepJnt68t3RW2Y7MHDYgCD5zPC3sd",
  "key3": "2Ya4dJeGqEUygqjHL851AQbKCVcyPGLeWvx1pqZrJW9WE4L1hbsiQqnUsfpqBoz1G6bMZdejHSsWECjytVLmv5JT",
  "key4": "sQ9ZY5WXxG6crPsHZ2PNB299SvJHTaxqVFGkbS8A68rPPqCuaiiVCdThFiPxWvPs9aHeV9yNpd28XKz1rxasGKT",
  "key5": "2TVfdSVrj9NySeznZJAokkrz3yDogvLxygQHG7UYGTGPBVxxczTfTtp7BXVRCzWLjQzhwQA8h18UjpHHDKAST8h7",
  "key6": "2V5jTPqakeLpcwot8rUppd9w2821hGSWS3p3zY2jk6554wWTDndAsukhd428CpmD66cBdfHosv6e17k7syx44hxR",
  "key7": "4QzZADPWDM95zgAA1cNWocz2qKjbePZa8WAUEQtEdyQtZufBZcgDBcrGsdcnJb6wy485LWaL6wEHEPGgm3TWKu8x",
  "key8": "VNE9RB35mfNTubNrrkV23Mu5HotjA2moeVWkHAUvkFFBwRpnFRjoJ5oyBxFgQtVBf89d6JjHfWh8a4Qi3d5xKXZ",
  "key9": "5Fpz6huRXKtJts8JFLBvRFtp39eN87rbkCK6JUPx2vYEsQnAGMmyyeJDaB9d2gQez4vkbzU9K9r8E3ueukhAHP7R",
  "key10": "2uLac91CD7NPppDWpzdy11FmQS18T1gv8CZKbSbqUUXgvJHXVk9QaRwCMLGjM2STwFvSYS4nNYTiA4yH3PjaoWRG",
  "key11": "DxWKTdVjc23cZNxQA7mxDTXTiEqDt6ieTEM8GHfHGz2gPAfPmd1uQUM1qxRoUzDsDgkQkR8USH5F7jZ27A4ztAr",
  "key12": "2nb2W1ZotLoXdWtTh12sP3JoHiHdLB6orftAeRkgUymvGomYoALNb2t8jQAwLgaEKdz9witRJqSKMEWrZJx8vSUh",
  "key13": "4zKf2k8m63neeQN7UEzQeCun1weYHbJut65gdd64UxqgrDSmcAnUUckYRv12JxWHZ3R3BFNZCXzdRperQMFy7LgX",
  "key14": "4cU1BBh7GmmhJHRYy6mLjj3adkad1r6pzeW8bAMY8W46XroYr4d2XY94GbE3bcPHTkg5rkVSvAGnA5Ke3T8aZSEK",
  "key15": "4hTwajL9faZPUCxdxYg6hGdjhBAwYteuME2SEpEtGZADLQARiKfH8BNbqTDLJKUgzr3bjw7ySxMznXkrJjFysFPQ",
  "key16": "mChJHXsWhAMyjcPH8iQPHDqzsLbKiF3D8A9aKKd5t8unXTnnGZouiUx5LAkY6XdkFXAXQ6P9XVA4JUjkAznN9LS",
  "key17": "3TpGqiNYFGzAsEVbFaiPNqgPrqqfGYZE1TbK2SQC5mhYNj37wSmNBx9mvnbYkc4QJsARB4q5r1LfVZAuLcqUf3QP",
  "key18": "swJd4kHYBvDibPqU4x8mg7HDubrWnEwPFAgts6oqcKzzDi6S484E6cKUxjNXHWTe5Ge1fWZESs7JnUr7RRB2pMf",
  "key19": "RLzLrjbNRmDjcCx7bKETMcpKihK4CqenRakYP3msyALX12Rk8mUsxjC1KdmMNLmZABzX6fJiVbosu97jf1zrAP3",
  "key20": "3FkqomDrdtULifxziXoekwgVJ19hZuFLv7JToQQnLXVsxY6fn9hcepydBpjm3n2whBxfybZH8RHGE8E9DycrjN6H",
  "key21": "4xiW8Bez2fQF5oxNEQpALVuVF8HqRkdtPyfqkGUDYzB7hw4HQT9JhFwg6yKafEUcL9CzZFmpath3CgFHNEHLQib7",
  "key22": "3wQWKfT68v6geZJnH2fNDiNuzSSwUzAEVxFsLqLFsftwrgMNAR1aFjx9zKLdQ8wyFQgrh5ZHqgMYYpzsE5meBUw7",
  "key23": "5QU3bNL4ESkRJ4Cef3rWWTKJ8A3wW97n6m2WNh3eefW7CjiF261rnY2JStk9Un5mTBwSK6iSUHMqMQqfwoSgjV4X",
  "key24": "4n9uLWp9KTX2ThgBTTF53LwrW79XYYfJJ1dxYNSRpbwx1U3xeT5WVBpy7MfpYDXnZmKXRymz9vmshQkQMkM7yWZ7",
  "key25": "2KFuA8nWhTwm3Jv1noKF8YExo8x9smS4mLVB1AY88x5tohy6oN8cZUD8jdFiZby291ACqYgSaUnJbcZz1vzgWZ3F",
  "key26": "3SHoodvdBSYeas73N3gN4dnBNXQyTyQsHn5xQNpLtCv1ubL68EGhBdryFWhZBiCDhyrJhcRWqJXqu4mHsUWdYGa1",
  "key27": "4Tng14fWf2PTGP4JgvwcNubi1scLszee7KpRzhQjRKB9U4gmJSwQwUb2bKzYJsC7nRTYmnFee2orNyWhCWonWgce",
  "key28": "2L5vxY2cy3fy4LAgsj9qxWc8h2ug71X72p8cnqdWhKrXZcQuqKuQJUm961tbVoNF6dbrG9yyQWZ8qKj6as1st44z",
  "key29": "HreJ5z9h8XGau42pJ7CtogxuSqmJkTka2KJGzsMtHgoeEtYKoGR4m7zanBnF1iFVqRqAUX7CGwk9r9qFEoqcmPq",
  "key30": "67d3qvDYKYdUvU9TMxLYJjxMdEuWs1Njz39BjWP3nWw5JgFwZHwHV15nHaisVb7VvGoJWezXn8UgNw8r9zrS1Yw7",
  "key31": "2nbvGVJuYbmNvBmgU1SRSjbbEZKVF4WjqmYcqbRfjC7SD84YAAh9hUBFQBiS2ikqRr37sT4mmsvgs5VRNmdaA67P",
  "key32": "3z7JCi4Wu7nhcVYZ7uxP19euzYWG2GaoFDDgn3o4PPfNMhew7aW9xPFPYfcMRZxuGCqhLfEVAFs2njY4tG2smiZV",
  "key33": "4tLyPMW96zKmrXzeXMefHWd2McmeughszGX8N8yYmqKkVQKRVUq1ToTAAuxuSAAwxmuDrLm1Q72E7Qbm3cSvgXj1",
  "key34": "2ZK4yBh35m4jQdd8FxQiXL1DJdPFsbkZauHVYLKeMb18Ee8JctuQU3iPjbgvf5Bop1EDCFKHdbxKDA9tpwQ2yNxL",
  "key35": "5xfj3vrx49bHojykAeDC9CGG37wTXiX3McBraLEkTxAguZobYNEPTr5U7JMCY6CQmMsgWS2NsoRHGMvWV5MkiaRK",
  "key36": "5swmYvZyrGD9CaV2KowdLP4TW3NdzcEpnxPQbzdSpQD2MsBBb5JnwXFpEZffYBtuJp4vhaUGWBwuxXE3LrvCUiKi",
  "key37": "2WPJXcXuJvFmcixmTMtEvkW8TR4USnfCHzYBnF2DoG9W3GUKX5REnwTGLvBhJAPMi7c6RLChhkfD1kRfwUvhGJSy",
  "key38": "HfcNRP5BWofHYxWTtY6yDc2u8CzvHA2AUqDRHUn1Gu4Qv91AkBEb47CB19PDXf1j57aYHtSpLKbUQ9mB2ppSLHn",
  "key39": "2bmFpRxdx9cK6DWi446gVSUJZQyZhyggtgvJt1zG7ZHdHh9VDgFS3XcdYNQ8M3FJK7pSkLuTxKtJzzGHLLdvPkea",
  "key40": "AqEkq7dbGeVSeavp7Lpa38S1tsqohfzrMRRt8HDRep1rqk3SVZeq1Wj4K86N7RERAmN1MeLTe8znzhcHnFdWHCZ",
  "key41": "3UBuLU3fiVsXn6kmWPfMYncZFebUJBWrJ6Vd64HrNg9J5vi1ohmdGS9fAVrgZuGSjDmACbXKg4z82o1eEGrsH1Yn",
  "key42": "5xV6s7TbnBCboVwoThXi2CZ1pAGAtiQyZ6uxfR66VASiuCAzWekrDYQK4HZnWMEAkr7QezBWkShiDo9f3YECu4yj"
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
