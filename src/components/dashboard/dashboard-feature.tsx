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
    "3xcKejqEXheR3kYrSsPRFDs7gR7SgjeN6NEnKtQP1U4XWt64eCTxMNENeJodU8faswpYBXBn63zEYKGzpjMjt1Lp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63xfEhGzxrDFRaM3uCZWkbcV4xk8wBCJCmwANBDjgQaqvgyk4RD9UZeDKUVZsq9R3dENAHUuyb6AzwRT1YzSU7PK",
  "key1": "3XmRBQCwxEWR4heUgeLr7BRNSu7ss9AmPoFXpqJidQySvGwWh4dfCvDDacwBrqK3ja2vcyyKLqEvgnENenrnUcdJ",
  "key2": "2viJA5babrmHArqoY9Vww4ss55g94KtE62LZkBDyaGdPQD1EZy658SgYgfrJ2cEJsb2S4GaiAfgmGwjzsjid4w6J",
  "key3": "3yk3AuN5pQ4khnLbSa2ZQ1hwXiCaGueBEuoHTRbtCJDwQ7M7AwPgjxXh3Y6tH1LxXhGAXBPYLf1NcgYN9VpJhibh",
  "key4": "2M2XGqZdE45mgxAMNpi8zQehzx9JidGqFyu4mNHymohWtCTLtqVr7upq6meCe3bMFLCfcRvZgcJ489JXwb58MWLz",
  "key5": "4KGaZCpFx8awScT2kvwtSC2xjoz5EfS7XhreyTgo16B6K6UTaHqCiriELfYj3CSbmXtPvbEqy7xfgQRuPdrcQ6Zi",
  "key6": "4iwP1oghmvxjStZuQP1MwwRx6941RdMbs6LEMfdHicdoALYWbqUBiG2YAkELRt5KaQhUxUG1VAPZimxRfWUzdrXD",
  "key7": "4xjfX9ADAr7K7C5GCAtSLqDP766PBTX5tp1U1eWcuYZYxzXroErxRT3s1CdwxBnFn6DFPU7wW5Lu1FTZ6VShePJT",
  "key8": "6g3krZvkb7bJmwuEaqpbuBG2fm9nLX39XgyeqttuXjYWWZNv8s9vH7ZTUy6j67CiGzGDJtZRiGBhEiP4LZTy4nQ",
  "key9": "62TcFNBUZbKSZGsfhsF1wdqrmx9Q5NgAxifaYNChVHa5WTQf8xrneAGSXJyDsduwK7cNWoueevXNpqHBtfU2gU4V",
  "key10": "An6JTJKmBErZg3JyB8VKA15C3NdsaWcgQqHBvD6W2swA7ZRY5YwVE47tFzmXbU599Jy8GK9Zf36TnuhnXK58EE2",
  "key11": "MfTENKN5hD8w7vXV9ZGBmHivnDdTuhno3pE1kuA4NiNQHwsGp2R9JKzYitoFDQEsYXjQXKDYNNSnXr6EUevcf8X",
  "key12": "4wLSe2k2bBkvR6X5FqDz3S2v9a1F7cgkXyKiMtsAiEo2BPDW5VhnuY8g57BUC7NaTioL2AoaDYhowErsQ2HRF9z8",
  "key13": "3fYnz41jxGtYkZp53d72Ko3qMqKU9MNDCzvPRCRT1Dquxd92xf14Z87ptrURFwgJ2B36Egcr91Rr4o2b7nWtwuCk",
  "key14": "2EN9ouGmKs66R47j8n9DnL4dW4GPBLhfjLbfoN3JhbV82s6hAKKMYGy8w9kgLUTgVNwXipM21hXXQT8T4dWjvvHo",
  "key15": "23AEEGdBEtaqq5Qn42vyCNiGyMgokoQ2LDyuzeSpRUCgDbk4DGTyLoGQqALrwUaqaK7YQbJVvSPaBDfY2d6HBDE7",
  "key16": "2a4LYB3J99BrGbAJ9DFQKWh8MUV3LKpPJbAtr2bKLdpHBYp2NZogfj7ac52iPwUuZbjeF1r3RXGNus9T6Cwu1Lmk",
  "key17": "U4GYrhRc4MJq4UZELe3hHmLcihkW6aoyumowb5nmG9L2owKMnZJRZgoG7n1d4SpTc8txjfkixs4D7ouwhvdW3jZ",
  "key18": "2hehyQzPb1uLvGEdJde35SBEZHJWU8d7etJyhTAVNykrEdsiNRrfGStmBjvpNtdAzBB3WBXDULP1cXt2CC1DXbpi",
  "key19": "4WhjWEEKpqG5AEZ9TDntyX7GtMyQEBYNiWgm6Y6QfXNtrT7cbSqi3FkKJb1dPrX7rizDtovzi1WbyTNDPxrU1w43",
  "key20": "4PSdFmWWyYzxkk6wkgaTVhLWFBBa4zXC1baiEeifLytKdRxnxEiFytkdPUAAR6vTb6oD5BXkMt2EXReYw8LremBA",
  "key21": "2WZqi8CoZ48XZwjVa3tknRNqpsYVSzVVaUPhNeemxDwtv7icUWESmsMxaRQ5GvKyAtBYopH2Aac3qb9f9m1W5GKc",
  "key22": "2TEgC37jYAMxYeeP5rfMHeYwYufcsdivpoushmHAAbnEcQZanCs5s9NVLWAYD5cfzTwnaTgYGuYPw5E7tEfXrL3J",
  "key23": "3Baox4PetLrYE3QtRApfGnL5Hw9Hqogwd9t9dUDzLXoTPDmfLh4JimYfuky5DUzbA3naDSQRF43ExbDF8yrC2sm6",
  "key24": "2bWpCueF1U4QSsBBkFt5AC9Wn7AKoohrm5HXbAY3nrzjG5eLLLoVR6ngB2BhvCpG2RL1WEpydZK3Cy9CygKketGt",
  "key25": "5hdqAqrB9Uyvx2mB9h51na6V1pe7KVT2k97ZQcQRPMyhwYfpGcGUNJzueoserCcPUMqZ2Btuicwwhqm7bxph8oMc",
  "key26": "2FFxe1BtSccLmSMz8ZN8SGCsZbcghBqiGToTdRSpK78tjnJQ9V1obpLSE4Eksrvizeoi7JaXWkNqpv2Ja2T2w2Mq",
  "key27": "3MUGJJGqNNETmQLKKDq9tKXcAMiY8WHXDeDexXtvZqsVJVNoAPkCLCvZmwAnBqBEZMntEyxmbgjhxvtW9j6iiCv",
  "key28": "oiBAzpDejtbWb3aMeM4NyCiZVFv3Nw6QTTGUv4sPFuhKWH2Qm4UkWxwMhE9WauuFZYVXaqtEPpRF1wAWuDoBv9h",
  "key29": "2AFLtKndQxfBqpEHg7qUng4Mu8R7JfkEfMqaTD43DZ9ujMiR9cMjHPtLPnvypvEC2URKyUQCsMtaKYSTkbTvBvXp",
  "key30": "3DkRhpjJ4S59riqCpMHXg5UGTRWTHTo85ZAh8ef5XfQV74XdVdXs7mGdVnavn6iSeXBzJy3HXrxFsxB9zDFoeUQ9",
  "key31": "23zM6rQpGPuryb1F6xjRoCYqSLn5GZ2EuCdeCBdqR9HsE8MEvm7ufDkpqBDZPKbmcQkVCJQg2XDKJWUetrEFVybm"
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
