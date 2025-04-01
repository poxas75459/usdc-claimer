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
    "19j23WTvjs9Wt3ppwwQP4ziBshLS41T951JaMT7X2a1hUawi7k95ytkHCVvkVXKSK2Mp5f3coqFcr9z9n2b3sFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLRVZXBy1BhP43tjiVNr4uVm1og3ffnDWc2VG1HJbV8JVhbkawdSTLohk5xtmAQqwJ7YbG7Ww2inWVMqUFxLb6R",
  "key1": "3vDEdczBzxgi3F4bLaPux895j4kXiGfTKkTcu1aVvmQAVQK4qdJNUdVDsfptkC7bhvwMQBqFcP35EpJMCa5p77fd",
  "key2": "2QR5819MheDrjAWbEiSgrL4kxEoHx95HJvEqTdyk64eMTbHE3JuwxComDVUJXd7DEmgZ5Re2P2WcWUhrBfEXJ4WZ",
  "key3": "nHn64gNi3tSFsTPZAe1CNZAEMUqXffZTA8gPYN3okwrVNoDxnPsTG17okHu8Qba2M3Gc4ewrsqrXUpcLR7cuw7t",
  "key4": "BnZLHaxs7iBRybAW5L6N3MRZtHrgxJryLutp56uTgJjFsQ2CVB1pRy9y7HEQmytwiHC5pwGDh3UouVBj5Lg3WUW",
  "key5": "5bW5SZZYWbW7QTvzST1q6XqYPXgEp16gTjojRJY1fEqX3wSV4bk93Die8UUykrBrPS4wwW8zBsRzXi4mA4GEaNXD",
  "key6": "4ZNvEiGGSSWbFEaL9WBzJUy8L3UiapTEi2Liu6qr49An622BJrAaae65y4EMkCWKMF6YvzGDabuisD1zFXABS9jq",
  "key7": "4K74Z7Eif5vzzXH7QTLPWWWAvp5jK7CGZpD4HFpWFUoXa9oAocX2scNYBqxPKnoumRRSjqhHy5KcHVFPLTos3yjZ",
  "key8": "5ohTDxRV3K3MSvqYYTPZ7fuqt2QQoJhMg2aAuiAcXPzHS58Ly8PsU1EoCWzvWsP77MLnkbwtR2MjKXF49g11mQLN",
  "key9": "2EtmTbF1QtSByL2c9tFQijFdMiBxWUAEtqbUkCrVjnttYKLSvDJWTDW1VnyVF5L2A52Cddttx3KcY3PKqoLupM9D",
  "key10": "5Tvb4zP96f9FYZxokJDT5zbwr7qdrSEfeisKPLeBWmSn7VNYy6Hsueb2zFgykn6MDPKpTCQ7CLsgazwppmpdzrNs",
  "key11": "4m4zXWBcHWqLmyh882GTn1zFaHdTcPk4WxMRby3UmQD3dgzJHcyG87HmSgu2rJFQopk837jfrYhzN7F2m5teeESp",
  "key12": "r2XED4zWc6cRcAx7jNpmbZEqeTSxNEQz5vHR1ZcfqZnW8iq9w9Pxv2bTsbEqprQaKXSswgMnWi9WyfG4V23qFQC",
  "key13": "25rLnZzUnPvxvPWqs7JXqS3qgPVRUU1JGvYnmtWafoF2DWK5smgMJf6dB8w6jWawYs2ri8NBnUJRrdZwhUywD7He",
  "key14": "3obeDqoBeTbeN7ktQKN46ionJJjPCcKRtdvCy5eY3VzwjSdM73c1Z5iUxCx4TqtYDJYYh6uStyJL9mzKBjcZ4dqF",
  "key15": "5TZS8qbTtDHkMnRNn4tqFFnVDuPThbCJP1AC2Yd1ZxPLRqqz5qdRBpUmXpG24GDPUQXdMtPgQqZgkJJH94Q4d6K",
  "key16": "2mSKuRbj7hf6wbog9jpnrrqu6V1Jvcihdb6TgeWUmFDVueMcZnFT81nukc1Kv7kTogadL9RZsTzSWbNUo8kMnmWh",
  "key17": "3whjvwt8FEtXNM8f42qBWBzuYmdj3RhFykBV7fR4Q28X2MgHsy4nAthWVdnaHfEmmZCvyZuHoNtjdpzy588R3H8H",
  "key18": "JwnXuNkKdPoQpujyfMG5DWLzg2cTiR4ikFE4Cyok6uipSvhpkqCpLwkxJ4hq9WhRw8omex9Wi7vewixaKzwCuzc",
  "key19": "4CSQeLqh33xcqX5vNgurWUsURJ8vP9NfTyKARcarVFZMSC8axd9qWq1pMs32n1myYDkivJ1UZbnxrA1KXpmR9RJJ",
  "key20": "3xkUcDmDnPuDqMQu2d72s2RrgGCozGmQU8htsLUZdBEYJnYuENuaMhCgW3fmshvoHFc7yjGghXjqRjvtDbagmu5A",
  "key21": "53VMsBS8dyFMwH9XpWYXv2Xeuvc3FxnRnNBofETmSwjVVo6peeyEKUYyrG4ht4djAboRcdW9UaEnaBk51R3XL6jx",
  "key22": "2hfQCMU53tUAeFEX3sZHMF2ZCqpD2yJPYXEv1FY5DVQUPsJeKDpm6inP4Jm7XugvBgiDNn137ftxMkfpR3eeS8Ku",
  "key23": "4Mdn7CDwX3ga5PQe9NDugtyegzKTenFJHytNQcnTHAuUet4DVsRqt2CZtztG78CBiSHUuoZiCh627BKptTztKeN6",
  "key24": "3t7PEm93peQ4ZdLgSsqgwhnkRWSPssxcD1SMM3VTKeNk8Y7Y7GrdCFD2DbZFLX35PMv1PaHoRmsDB9SjHXZxjrJF",
  "key25": "3qU1h68yMmu7DubJRQjm9npZtqEwkShucsiC6vm7zvMoGcEk52SSDBUdSVtTHvki2EaSkYo1ptfydRNPgGfPieZH",
  "key26": "3z3W3tJnRKvciQSPd8As1kArdFQLgF3C2BeKfv9yFHMbSBBzvh1QXunqDt8iKGxY3XXLeq6r6bg9Hjs6rCyJRhga",
  "key27": "26LY1di7d39AHMFSg5dXPPsEN3FPnXZ9w93wQwg17inTgDeCDJ5EQYubiq76DFPyHtSNVcnRBvKT3zMvSQDzeJMa",
  "key28": "5yiJEGx9WobnwsEQTGEsTkLuh6WLJrry2mVD9h6Go3usgDrtUp1vn2fsMuNu5HzHh7vSeP1dgoA6eqmujkwn3iwg",
  "key29": "2cddKCV8ConLWHS9xKmecxSnBrSB38UnMNAip523xwy5UGP8uhTDmTeR8pZZm6uhzMJyahLxvLhoLkCktQzwE3CU",
  "key30": "dU6ExiMjwmUffoK8cyF9W1bGjcGobC3eVKuhiJgJF2Ckj3vZx7EGnjxPztmi7RBjNENdWzZ5xM5JY5w11xRS6Dp",
  "key31": "2AzP14zSe4K8L6ujMYpdnmV5ZkwD69KAYx5oPg9RFKVuS7ZNDj4eKTf6JAjJbfMmnvLtcbF7iqfZbV1cUC65cgWC",
  "key32": "29ZebbqYHkZfspQSNFUUwBC26KSWE6JjNkm6yFADPbA41R4Pj5GWBNBdHMQ1WpfLbq7naYpXKcnEjh4aAfZxhYvm",
  "key33": "223Xx3X7QDGtXPGkhPkdx26SSrGjGJQpTmyosAXFNdoCGq8FC64kvqMDt4m6wtR5QvgjZe6gmwtGgNP9u5rdgomN",
  "key34": "4SRzVVoow9zudnCLozttVGNzqpLCawHSyzZ2RTPqns5BowRejZ3KeySr9jeFT1WvWPBmub1ZTMXTDttdRvYLChV7"
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
