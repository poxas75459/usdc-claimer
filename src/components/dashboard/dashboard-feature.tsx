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
    "5fEh4c18SG7eeYbSZmALCcwxLQc68xzjwrGJBHjPK4y7rTpNPvkkm8UxG177q7wmpeWr3auwmty9A1m17u1mTtTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmhRX9p45VHjKhTkaKYAGtmphdjRr6Nf8pAPpk1h7NEjenH7osyfVBYVwd1cQDps6sQaQygnQ9EgXyYA5NWzqT3",
  "key1": "4Y9d5PVHHiGjouxootmk7iwfNTJ1ScgAtCmr5tGePJSikVCQ1NjSJyj82EShwTcU6YGRYGmYCsTrzqFJWQz8UaRA",
  "key2": "621bDW2QxwPpaQUX2mucN5t6CZWQSDLpLyJ6ovFqtqfZfoRCUQee3jiFzpu8kb2iNArs1V1vwbq6Nth161VJBKwN",
  "key3": "2N9voDAzJkzb1U9FKnrAQqLGeua39hzeNBzLfqSwwKTSus8mTZtgLaTsRj3ws4mYD4EhabLYd6PAMk6UBsGzmwfx",
  "key4": "3Jd8aSE9Gqvtk1h7wiWSFMCUJPynbmiFkyhaBenYWnZXjRqVKBVybQ5qfsMtMfDh7xyTk7fRsNQaeq1pbiP2bBs9",
  "key5": "ZcxaKqf97swoX4XYuqusQbUNpj88qVKiEfhRQdwGyYBjTAgc77g5gJmDzxRoYbSrqkHeM9rcMMr5KoJmZv8bES5",
  "key6": "3YjTxge3TzcD73jDXA4axVosTvCUm5nSywZqqhbwmJ3LUC2AYyEryTDVUgKkYSBtuhezauV7MbT9BqiMiQScbfsc",
  "key7": "3YwiYLuhh9iVXnetYLM2brem6hthpgLAHCPPBZXopRC6EBSErziafcR4NNHdUcff6NREab3MfhE3cVWjoZZBdMe4",
  "key8": "36gre4v2iMvJnXRjDXg994kZ9jhFLsSDDegDMKkZaYRgvbQgPmuir2mCu3DxXRhe53F9Js49MqyZmLwTxDH2rczD",
  "key9": "YsXgvLv6Gtj227UWYUbzZ3gDUcSxrYZbPiyxyQsKrHFD4vCviZ6mKB1QPLDBvf4PqfFpgooN6AUZCkvPU6Nugv3",
  "key10": "4EWwedmYhdTu3SjXV1DFsHUvY5MCKzBshJLVd84wfN8YiFYecGAUi96qFCR9hwz1GpJEVzbrtoSorPkDHoHQcCcz",
  "key11": "yunUEv5BmNiAfx2Hoff1v4CntPDZHPdcGjRi3feaPA3YuNyzLjiZL6TfBXaknyM6hmynB38GMWAe8awuDT8yiKz",
  "key12": "Zb5vpUYHT2SBRzB2GCLA9NvCHoLWGDML4W5ojvuaDHnpDNSUzdcJDZ5cJMB7JdTLBaKbiWNdYbBEzbm2dM5DfSZ",
  "key13": "4wSdiZsd3PUYUEugN74cJjgAx93wbBccLYaut5bUm9PwGkjEiGLBrJFvh42WwNTiNMUegpxW9uniiHpQfenhVERr",
  "key14": "2mCtsGf7dRJJbjLZrYVVvnorU4weVMNH49NitaTJvi5xK7gJpj2fr7xBNNcuvjWMuTRpaav3H45ANncBeCMvmMqo",
  "key15": "nQDjjGdp3owPUnRwZz3EZsE4WiKBP1TfxvzhyX3dAYyyHo5NSiVhfYxenRZ7sEoS9L6CnHuEjtQUWi5maRi4GJo",
  "key16": "46NPQhbWwBX5BJPu3yPu5h6rZJLdAgBVZ8ovn2c8dWnPdF5duKJNzYuFovATYeSn5F1vYgVP7VquCMjGbAksEydm",
  "key17": "4GuqbGUGYnwtsEMjZRgjC7FDGhJkdSoX7g9H7gTy8uWUyumKEsWQb8tioHXSCsmzaM68GGesVgCvQPdDu7wHsJon",
  "key18": "4odY8XLniXe64ehrH8HnZc2dn8YoPwVzMNLWUMFPYQQbkqKHz6jokXfCAE6yw8XSzn3TCQ6SkgLTHFPkiknqxRjR",
  "key19": "49kh5W8eYrqjWQQS6mebWUcKFjYdz2mYFokqeybHT9sp5kHA4ruKXgwzDnY6cTeKSG1ACjguLLC48qccfWedEsJr",
  "key20": "2ac4wTXEa2XiWbPBHNnMXXZoDBE5L1mAgruGimimPwAPzhnUwKsYwupfcuoDGnNvM682wWoxZKmPcQepMjcS1HF3",
  "key21": "JvbRcqttgzT5AKnFvMhJYMwnovm21qMB3UmRmojDASiNWFstJpSzpz13zFBf1ce1CqtHQ3sWvau6u8ezeMJ1X4s",
  "key22": "3ScwKK2V3k52knRuw4ukDuMeTDxYjMURpUM5ttmVXXSJDr9BBUMSuELPdyZAfZqcpMemigotjwYTySBpShodCwX3",
  "key23": "35Cfhtw7n1RS5qB1dqBfPsVg6gfum2Ujj6nHjNi4BDjA31yDGNf25x37BxmzTVvo68gVoqnbnszm8yJUbsQGPLYb",
  "key24": "3szn1eWhXVt4cqHG4w3D6Vs8nmEWg76jRdv2MtXLmkxVgpTvg85k2xDRRQYAhf8UyUPnCiVyJq4BNe6mGUAMn5i8",
  "key25": "5ya97WAFKckepmPaf4eTWcaqx72dferf5DGyKgC74Vxa7jwg9KvJ15GvNGNuLpndKhYdV9eUCCRT58RLXpztSetC",
  "key26": "5umtMoXqX3h7Q7SGmJvNLDuhwPeTstCoGYgmaEVpxJ7T8kvVKE3wHh1mHaMs1YUE3kiQCGJDj636tDtDSZcpgBgP",
  "key27": "3TdYxk5jp2qu6bwsNHp1aKJSoyGdWyefEmqQCzkP69cCqFreeoaAjpyyFrnZ6C8hnqAQkBT2ViCfDzRCgLbGq6Lf"
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
