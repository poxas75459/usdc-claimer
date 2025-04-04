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
    "4PwAUSqTpm8s2FQzohf8R3gKkr538W6oqZoF5gmbp1RJn8beDFgRXEHbwcfFTBZvtnZV7x5DkPX18894qgTa7gfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x2fF47AGbNUmh7CAHLM97SAXteZA7Wo5HVSX5ViQHxZTocvvapWKZiUqaMDfB81ZxAeYDGaVxgKkExyDmyq3ANb",
  "key1": "345FCm883jyAE3uDNzdBVudwHRqyjvaLRsDHC9C6hqKSH3bzftS8cccBPDfHTooN3DgN2vYZ8XQ7QADLXUaVr1E3",
  "key2": "5nUJbNZV2Z9afMUxT6CnnPyW52F3kQtLn7MUBGk6oRxkvsoCurNtUqHPWoVZJHV5UjpLn3mrXuJb2Uv4ckgc8Y6h",
  "key3": "DLChzmNgTdJ9WLN4rHzacAiNZuSCfoQVzbb9jJeQbeMisp84879Mtbta9xuzkXbQCcLWGFQ12B2RvvJo6PR3wqD",
  "key4": "SZJsZFYQ8evhnzJh9f7nTVArAUX95Aks7w81a8rKBoh9vHWAi4meP9gmWd2TQtQjdFWK8iAzAV8UcXnNgaeKts8",
  "key5": "53MBdAqvisBfPHJZoucCEaPk6SCZ4dPjdxEXxoUWt1S1RMCfr7dEkChFjVwKMZ4xygeFe5Sa98RbkEt6DLU5jiC9",
  "key6": "DwsW5qMGJnxoy694ruRMHBLB9yo6SG6XicRjTDkXNoGNpGZierVZ91kX9JZJG35bCqWGuJLeBWoSqkpLmwqzsTW",
  "key7": "5SnKoc2WJryPaDNAubnEtoCmBo45vSPeL7zGHnbga48egUSNtMQMrKTobSWfabFNcSKaWz3GK7guNjfeLNFX8STo",
  "key8": "5ThDQQA46PhfqiM5g8UiUg9dyXJhrmYPEMRMcipqdu6HY3pvcEeBj1AwoMThmuZdGcXvp9zR9c4tQEQLeRfzwUjn",
  "key9": "54yvPUp9dkyJQNTwVgwwFKPwJMNXWnYjHMpVA95Dgc2MZ9jsabee2nKxBeAhB6cbwbVAjeK3oHKhWkzco2hngmr6",
  "key10": "2wXt2B7J5czimXVEvtYytTsFGnZQHxW6qpNrjEy1De5knF7qR2cfGxJajDArKqXDMwnuoDikxzeyXCZEU8bZFGPi",
  "key11": "28u2C8UaVeNzWXcD4u85t2k8ZMsGpCzJ3mkQqtcWv9j34iWBFAsVs3xJRyBTZGiR4gZUEodxV3WJp7Ken3oyDmg1",
  "key12": "2GpxUqyijfD6Y1V2gxkruzhK2wbUJVghASoz7zCFqgKPbJdN28k9ttg1E1WasZoLkUSN8YZU35bhaA5pawdr8fXQ",
  "key13": "3n49grw3PEotKjAytdJDh6S8Fq2kWuy2KvrYH3MJhvak2PUu1GRQcbeKLr7jRxwtajNPdL7jYsJMgS7JGWvkLs2z",
  "key14": "3znMz8RmsRZw52XBX8GmkRzpGu4YEzuoc9kdnnxZWhon95nqErHSKfeiSjmNCAdHKm7apKix356kZhuti5T8kG4v",
  "key15": "49aua21c32SKXXnjno6gHuQikqMGGKaDCi5hwLv4wqKW1XsJYLHgD27dtNc8w7b2DJgcomZoEDbrp2JcqfEr1mts",
  "key16": "4UkbFjaEZayb5mW4jrsKgXJ5UVrAXmauyQtcFZqa2DjRxfj8ZaVnUgg7E9GwwtWEhkT1XrPuzMBZTmR66XdMpDrV",
  "key17": "3L7aWZtdBVZStqxfpxbUd42UoFpz3sEGwN99dNBW7Qhk2hwfLtyqM7UeYi7NXsZ2JonpNeHrEi1R17BwQanCMiyM",
  "key18": "4jFU5LPDwW1hirXoTF4V3SPrDiT6cQnH6RZUKUBCNeySG1hQbApFsatgwtae9wto1DznNkhPfz3WCYcn5TQLJh6m",
  "key19": "5bbPo9eBB1SHMtS9dKCaqB26tUjYfpie2yHDHirX1DWZWP5GXGgjos5YUGAR397eZjdjm5cRztjnCMgdwGrHZj3A",
  "key20": "4FC4BGQ17icbrpLM9MshSy8hqq7L4YCuJXs6gueQzwz8YR8UepK1M7f5M4DBTkrbwYQ6hWWeQVFQAhLD4v3bb4w",
  "key21": "3PcFuYGJ73LBDBVwxbYv5kfeVyg8JckzJ58E5B4ByfkKRvd4z1jcvA3x1cAQ49pZNqgHYhDJXAMm4dybAnps139e",
  "key22": "5mWGqZy9z5NqtCTSKRMUPGds3PFdnhn7NQUVP2CPNZAu1JFqGHxt4fGTyV1nh7nHeR78Ao9RybnnszYdc1A74iSi",
  "key23": "5sFApkHgc6riWFc1jFW7CrVqa8UJXhbTdPWaQyqLfrqBEitK5wowCC8R7bosBxCDhYzRrFoe8CtZE9qXjJWH7aJs",
  "key24": "5yyXNUxUrMperz8poyHbRPa9cFJBmM8Qur7bdAwLuqDgeeG1PHGam3bagLHyh4en3yhYpGrGcrNaf2N85GYkfs52",
  "key25": "GrBByzAapp9Ya1Dx2tFnJrUz5pMhiHBnK8t6W9dyqHN2nRFupcbnhZMUYyJ9QHSDU6TfvJFr74su8ZdoBYRPKHt",
  "key26": "5t1gEmKoH3APc8oiUpw3pXhrX9TiH1qTkqXyjkWod3G9Gpicc1uxNuNxc9Gjhvmf9KwV6xqp7bcjdLc7CzTfuHjC",
  "key27": "5C1wPQmuWd5TxUUPYEvfZZVhnV2jo7rdaewXX9hq5RDH4La1j94o6mN6XVpGSHz5kGUfaTUdTHhbAvUM6tzFKdEC",
  "key28": "2f5tnXc1LoTPSyGKtMuSxZeyQLGjBbnBUKjqhbgrbHPFpAFEpPYJHfV1b38ep16LdAB6tfaQtveEFLbBBMorqeom",
  "key29": "2z4BWY21PjgFtg5BZj8MpGQnYpTREs1pTFzYj9SaTJVxs8yUexD7GgyZ4oMsMsis4tvjVAq9rJtxFE8ag5bNuVSX"
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
