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
    "1yfoxQfcAdMns7E3ied94rwtg4mebL913V71JemJTSCRyanx2vipdjj5r9QdTrDywy49nBzQxfx7tK1yX3Hjmqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5WL5t4Jwf5nnNkdSbCPUEhSg2iGpkuwbCJ4n1jVpm64PAVcKNLqjtCms6MFX7kiGXzuPWVtw1EyLEwHjTu7Mef",
  "key1": "5vNnjcuBU9vsXoUK7jYZZGE4bDDUCvYchEb5cehU9kN2enjwCtz1EDgNrWFXCJsXcPBcWXoXpYw5JG5ZxvrMnSog",
  "key2": "5ZuLVWsaQtLp2ehFaSgoDrhHa7Z2qhWszvuFs8FtkMERNAWNUZRNp5dD55CTCo4xRGkyJnuj7PBWSmpt2JiJnvCB",
  "key3": "3wvjEnXktyMhM8cCdvr3ztXiGDJxW7tN2oSrSo1GxPd8BRViQ9rz7LNBFvpFC5NqFWyCtXajWoMpfGpunSEL6dqc",
  "key4": "5kQgwrNNaWaktD6WiB73T3cKjHenccPkc8ZdNtaCjYQkSquucpq4GsBx2ZGzybrUAyVpy8yXZ299492XHYhVCztZ",
  "key5": "5C9RXzpSfn19wzxomqZJBsP477irM1zKDmQUAhDNqVejKFgShbTzwxVugr1Q3EVJTYi4dkSLhXEpYyoPSnKk63Fx",
  "key6": "4wk1PWdWmyRdzUBxonyzgehTgzfzBicB2dnbPkaEzAdZxp4ifv1La5bcPULUvXgNMggJ4dAbH8tuJ5UwfHK8r6WJ",
  "key7": "4ZSBnQN7E7AWhNeKFYhmWUeqhvuMwG1tMerESqbpRKwxhNmZAg36fUNccUmkimZCgcoyLCizp9RB5W8hVZu52qdY",
  "key8": "2nT5M4iAuBKTfpVzVtVBkZv39czbXdAEctqrDHY6VLKKnYNiF3rzfAj516NhJKG5gkn4vwNgCh1TgYEhaoTmRbLr",
  "key9": "58pbcAvY5f2vtR3xv8WLVvBa7gV5CxivxZGL4F7oYLiSWmWik24Nm7uCs83jDwFrkt7bRUT675GTMQAurfJ1wMus",
  "key10": "Za4rUtUcpaTrFfAk1xWQrfLbyJ8NqpU1eXoSwbvjxYbHLK3qgBFU6Fb2qCL9utm8fEBKM979SomUAUEGwzFFuyb",
  "key11": "61X4UTYmpfBggzczZinkUu2WAu1g181GfxeCGHRDGTU7K72M7hb6m8g4eb9Fe8eVLkX2bKf7Uz4fDerrYFeJJ2zP",
  "key12": "4CJEcWQV1PQabapYrPYXZjv8fJDCGguV3XgEFPceB1s1GqkGouQzN1AzR2P39q5LqTnP7C1dzWempGM1LhrqTfnU",
  "key13": "4zengE7y8djgNUxx1rpsJDHpXPdwbWwyf7ATE2VvQoaVoQFgpCjLUWHqyep3mNBfTsvaqquCw4FzeRW9F5jgP4ka",
  "key14": "5bwV8VokRSf86KYegwDWVRhMMuLphQTyfWcvbAsTWp5RUGH8mSYhRTMbqyPFW2J7edHkyemrrygkp4VFKu4xi6H",
  "key15": "4au3kEC1qB3Zt5pC1ByDzkgLEqRdTy8j9AYd9tRDqJWTm5ViEsvexdYFGPsbKkDD972uArobZn2pxXoKNZ4kQLbV",
  "key16": "nY4Fr6ZMsH3TwPo7ZkvAi6BYCymcvUPu9HwZvCpRLGVNS7Tq8tPZZcatmkcrjdBParS5r4i5YXXxHMYLGqqP7Ks",
  "key17": "2QB5d17h4UH6NC3NHqLNxD96KX8KQCSuFYyAVnNRAXZq3obSY7UaWkrRZte4yx9mEiJi8cuXpdzxhHmyxeunT63B",
  "key18": "3GnUkv9rqrpAmRUgscVvEXAKdDTbpcEXUr93RD9bSTBaE61Hn1xd9RZoUFvCZPf4QoWptEEz9YsUjnh6WgyVNk1Q",
  "key19": "2bRp6H96Z5faEpiJmhX21tGuQc6W1sdgzrKzfdNC6kDjrCFQqST39FdSfhPxiFZDrPUNiLtCCBPTKee2Fsy3MrXc",
  "key20": "2e8JFiPhVrncSd9H4wXCq3VpWB3idVBz4sFAM86RAsd1vtuDcRV5Dq93YhNtGsnRkQ5FCKVPKSzSEqyeETEB82nJ",
  "key21": "4S4huTBoAqvSEvtom8f8b1gt1z2v511aLRutNVk3xmDc5akGw9nHmjqhtUGzhmMTaup894Q86ME5AACLE4UEPnBt",
  "key22": "JruJgHK3wmKaSBUXUSkCqV8XT54VBcmf3DJxbNstt6rR9HVQ3vSGrS6GTkoLT7Zd4BYyz2CaeG72vSoGTYFWueY",
  "key23": "3qdUzZ9DBssGBzDS9yrpvqTUW5zfcJK5BJzgC4wzecet2xkTUcgPb3SZTjgUjNfdoypH1hL8JuCULbjFqUf3KXp7",
  "key24": "4ER8jVoSDPCtazzjufJtEkdqU2sQAGjeJr76J9RsPnZzcWssviHFXvq9Uk9azp1gTShM2srHPu7dXkjiMu4HJQSM",
  "key25": "3GPiH7XT1Bat1vjqDDyDnkH8hekQZnxeatx2tTsaw8y9eHYGGjDqNP4oM1SdrPgt1HXacFLj8vdjahaDodw1dV1J",
  "key26": "5oN35UBv7gpNtCb4q7CD9GMEF6AGwZf4t26umQ85dU1ys11L1rJ2hp356823agYm2iSzs8jdRjYSe1yJ6J5Gb1Hi",
  "key27": "3W3DDZN63QnLjsVqjY8vr1Zmn4z77xd5srLx1peN81ashobHph4f591WTbYzpGyHM5GhCqn4uvf4AAKrMBVW86oC",
  "key28": "PHLqgLvh2ZmRWSHG3cwTVjbJdeTJPsTnBcsf6ub6FhSX9fBEDjDAeNWz4CFCJkzbRtTGqXzPHkaokmjkNJJkxza",
  "key29": "3LVDecSfEEwPqmn7uoFH1QntHLpDykYZJ7deDciWjh79t1DMQYXiXLh5MnLQ56TzFiwuNQYy8Gjk36h3y2gJR6N9",
  "key30": "5F4vEk1Nx3XXjgvpFYURjCyVCpiu4A8WAMbZx87MSaRVUitDbjrkZsmSUWJCduep1tm4eMhUZPr2LhqKGSUSDvLJ",
  "key31": "4CgobiYNGxn33inojcTj54cgysehsNn72186dHbMMvNcJQm4MrU4wHGdmdChZRPrNJcHCkQng3uNqveSgS7yb5io",
  "key32": "46FBCrJ2Cb2C1T5fLRQaZLEiD8DiGeKc2j54RhTyG6ng5q98Kxyu9tfTXEh3rMTThPtgyGVBKzs3Y2KxesKrBrVF",
  "key33": "4dCJQa8MS1SjMBFMSPz7wKJ6q3JPvNYjiq12bMxLJ35JKo5ZVsNc5Xmo1oL9r8enB1GDE5Xkv7fPxmQrWF6pssrH",
  "key34": "2Z5s1PT7UpFCn7uWhrRRsdqdwAPgq1ZTb83eHALd8z56mhJbyVEDtUvpgCDh4KbyRHt2Di4aCePvDD33A3icVyXx",
  "key35": "5M3CfsK31EoqPoe2jM4SZ6FGsohqKu25Hns4iwbwEpq2G2gVNJK1vFbeVWVYvCUv6vMCntsWNnFGLVUTzwBDJPfK",
  "key36": "2MAdFhj48kJV4FmRoosB64kui49btwZrUg7EcaAFQYuHLt79PgW8QAksxXfPXC9Sz9fPafzqu9rqKnynVK337jBF",
  "key37": "5pEUV2WXDaPT3aM2XgoouYoPh8Pz6wrPzLmKokxQJYcYpkAnUn4Fqnyb77iwD1VYuC5hUYVLQcogFcs98F9HaBQo",
  "key38": "2tJVG5r653kXMzbE7TMRQbMDbJwsx3F6x2eftwK6QdGaDdTBc87ADqKJw6iuZr9YNLKfMjEqQMoJw3KcgwEgSdR2",
  "key39": "dWDHbZgvhYSArrrMVbpwUaFxsNX356ifb2PmHVFNt6E7BBtDq2FkdwPSJXX4kkPAvhaJqhrLo8EsiLTtUSJ3Qj9",
  "key40": "3YpgjYL4csJviRJCU55x53dV6ih4d4B17184mGbvE9UbgoSdvGBvZ4u53r9kMuy27ZkGTzKWEDaZWL2iAv9QJ8LM",
  "key41": "4P648C7WKYqo1oxEgZNXUwd4XAfhr8mJLcTViFhiQcog62xzRuToJqpmC83tcAd7arbQ4nGpZexMH1yMxHxY4fyu",
  "key42": "3JG6FmhPvyAicXCv7YjdtVEmJLXaWFRZbsx99mAAskNZeYci6rpLAaRLr4H7sFerKSgZLBa4JP9xUo5DqTdBZkoW",
  "key43": "2G5ergXXUzBRqAz1TRdEFzZdDCY9shpJxRDLyWwM9JaTwFs3iVaoErXLmtyE4HiHSLTqLDzKqsjmjSNtxciWddec"
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
