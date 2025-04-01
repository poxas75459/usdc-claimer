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
    "GWnrrrib5sZ2Pe6GtU9mKqVnBjqpjDsg3uiBRThXH9sqMRJoTNNEKKKGjHHBxCPtNmELVtTWH93X7NLdpZK14Z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UGKUQMfjyXUkaNA62kFr9zYugt6kqYXHec8i3JRDm44oauzDLC84mEQb6WbFyYyDTphcB2vkmv2svJ5g6S2qP52",
  "key1": "42DZnaD2YuNKBhDse2UGTPLfeKshKoyQ9octFjype6RXHWeyTMEgME7ikn4TahW3ymCEawdSkyRZLYxQRVh7pihQ",
  "key2": "4hE7Qi2vZj8q5KLVUmtQFFobxGZiCw8jPoZade8R41LjD6bf49EqwaBoNbWkrMFdEnAiBd8CkXGoh6e7e7J8ri4Y",
  "key3": "5RucoQFENyx9813iDcM4kXwvZ16b3RuGQTCfukB5qCaF3FMxLES9hJtj2tGufQTjBnx7dZ9pR7nibv4TauD854iA",
  "key4": "izjSbDJjQbCUk99t3fG5h32hHdyurarpTiqJQbcSru2keRYXmbzMwuTtdh7HU1aX9ftasYc8bfSv8dx17J79h61",
  "key5": "4dEtdzXhZ25312QQhCAmVef3J1fb7SnuKqa4uVCBDGSqDf6H1cshwTz7tG7EpzPXebBQxYPj4bPYANiAtWrXgYja",
  "key6": "baVAtyGwhWnyqA4jBMiBvGRjC2MxWxEYszASAc5jHtUPiF2gitSYETF52Q2T8RpeVzxDnX99V44xXoSE9zMzrTd",
  "key7": "527cdzv2fHodmDC5Liq8ZHqDG1qnywqLVacSiEeTUiy88iivdBRZaSRC6CSRy7Xb228N9c88Cg29GBu5cU7SpY54",
  "key8": "65AFD2vYhjeK1BHWVxmwmjpEQapG8xNUqm2c7zHoVeyjzDVowUC8y3gRULLak33KjpvSTG1ve2bhW5bHiAFxh3RX",
  "key9": "2cvLsxbnZn5ASnvq2qRSgSrVsPBAWTc91NDUPQRWXWesPVEM5GLjC5FhZjjf7HwM5M3bSWpANtq55YAfnk5pcZSL",
  "key10": "tnSmyybW8QWUtyBuXSa4A4LzX3NN7hHVgdTqAs98Zak8fQWbxMP9y1mxcdces9n6Z2dbUj2y2fxB5U96E2ub1PC",
  "key11": "5QgToNXam1d3JyGZgfcg1VjrQfqQZ5tMKAeVjiYU4cuuAoit8ajuEKDcTNY88oxx5Dov96sncuQL1safuRK3zFbc",
  "key12": "wV1CbSYb4nyHRr4me3W1F7MXk8hBsAbHJAwd9pe9eSmn5WR8M1QprfRLiPS7nUkSE7UgyW6jnohW6CjN7RBPuTd",
  "key13": "4poBBtBrCUiVyFHQoB9FEw6U6kCYhXmMA3YUaXXrFAx7oLNEQVBvCn5V67ZhmQEgxCTSBJcrbvJmomXjuGbDT5MP",
  "key14": "2UN8uUiZXpvCH8Cg4H8Q6U5sCUnMo6PW6scv3W15SPSf8LHVCYegTLHtzgwVm4jasHh3nwPgMzEHKMgmsohKWazE",
  "key15": "5nUUu3PLdZpu2c3ku3QWisZDmiZV5ip4Dv66pKVPRsya36utq3Qg94n6n73jf9NiLTPjMUZb4dgByVpUm1JiN4at",
  "key16": "3rhQbuusEu9TVjsUFx3pNdTuVUDmcMRt727ZuR6R5LZkqstmtXVpNGtt7sD6eKLLfPzpZPmFDfhQpgVeqwzbuwco",
  "key17": "2yHW35tAGEkNkjQr2uHtuhvyAqVn1ZkXPW6T3g4G5n6LFZjKHSED1qfqizY5nYn5N6b4aCoNFokV7TVoRirgCArE",
  "key18": "2Buu7WsMfcKrfbovt6HXDu6rvd6qCAhqXp4bMGZSpCoZFJufS9Wsxcbjhm4kwXibVapWgWkReiPyZSJ6U5y7BRYt",
  "key19": "62YQBqSjCPsgQkNqECsMhqCE9sFuf4UH8x6k1waGAgh6HsnPhLHT5JE1fHj6QGdR8SZHSXmnsXnJqRYNezubXGrH",
  "key20": "VJPKe3XmiJrKckgYrw34mH4tyUe221vCvzKhPABPeEoBzHFHECyh5fQ5EF3orxz2VANBGfwE3nuxBvKqZKWFMML",
  "key21": "53KpYFmyGt7AZp7UaqAAb5U2rKG8LBueC7EaemnKr5RWpwZQmLZZjhPsJxnaqzGZBsCtbrzkMxRbjuX7RAtVpUXV",
  "key22": "4vMzXr5Cgv4q1icrKz8vTnvzaB2evFtTdGXqLRrxxA8oUgLJ35Us2zhjZaEtJfrsC74GcL3TaQpGHRfvHov8th2b",
  "key23": "5DenwksjC4isC8qNy1cFt73N9Wxe54vWN8CTdi4bDmNQtShyRyDf64TBKrNu15gissDbUkPq9F9UsS15vDyhFajd",
  "key24": "3a5ZJBXk3aGUL5uJxHArkVWbhfEM6gFAQT5DtrnJLBL8rismvQNjbwn3Sfd8otkprPNgTf6f66m7bTiUYiNZugpU",
  "key25": "62sAzVSadJCJViHQynaPD6pkPdSvUNsmpDTSKMR4WQvcXowPqtVUZQWeHD4o7JPWFVFr7gHQC8WazHspvTewytEv",
  "key26": "5dph8oNkAw4LCtnV32vJtJhkj8MzXKGVH63X82RmdfyGNBWKoLsLtLP4QV32CafNKxTbPnFQ3t6HnqNgEa6mdFf5",
  "key27": "5SxtzUWWEom5LxPNEbZbEenjhiJ9thhovK5RGoMRiMjHLev5eUv8xsuqWikPqmTAYQuwZigMQA8acXwQEtGSZBz5",
  "key28": "pTbbiPsYiY6EiSCb9SaFKEB2gZ2FenP4XJ5iLJ7msBZu6QVFrV3mz6oj2QkAabUrtAmWqneYGtqZHYYt2VwrVM7",
  "key29": "2QULtjurmHpM8AgFnNCyJHp54njXCnbvWN32KjavMjr6UdNwSymkHpHaSNaBjnuXpasS7nxQMrniqmdk8tK2PMRt"
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
