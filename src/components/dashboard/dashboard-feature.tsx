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
    "2wpv4Qba8ecx8xeD4AZ54rZ5mY9CCenParXGT7wSs8oAgF7AX2xi6apB9EsE8NzTN6pog4L6AEekZSXhddmnosEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DMnzeghb992G79ZmddzQfDFQ5iwSYebVfPquQWinQTNALvcKYL2cc1HXybWkkWv8vCKVmvLpU6jj5395ZLmCLX",
  "key1": "3ZfmEerTS39MG6d31EZz1RpMub5KmZogC5qKu2F23spQm1htxDUDw3H9zfGR9b8wPwb9Y2ULaa1RL3uC3Ghcvrsj",
  "key2": "6Fx4a6erBRWxCra4rosR6uJzdNNphuQVZCgK1Kwk1z1zWFnTrzNRZE4XN24Xa51aCERaFC1JQv7kEhi95tha9qg",
  "key3": "b2XhBSWpW2YPVg8DP5VGWmsJ9gZnkTkXcbJxogP7zmJBkHxQsr6GhuvBnqDaCGivpPay8F1o5Bp84dk3ek5dSiU",
  "key4": "5CvyKRtnq8MMeTyB8UyM48F6ZcQ64e5wfjKr9xnsBtzVi9RbmGnVeVyxLJTa8q5pcTf51Z1snNCLMcma5RkPNnv3",
  "key5": "2T8Axn3B5LD8ZTf3T6TDmZtVVVptDrGvRkynS1z9KJmQkK7q99SCaYNJ2BBXMtmfTX7pcMn4DUCR27ipqjikzuXZ",
  "key6": "2veSW4ZLM8vqHXmvU3ix6veDBa9dhuStF8CuAwsDSW5CNQbkuMugwUs7pHaJedyCkfEenEHjLZMd34ifbLA8oztF",
  "key7": "5C8yxmjXD575R5McitjrqD5cgDX5nmXt1FMkWUxMkNKk4dW3qRSkxhBqhCabYnGGt5ku1NhLhosDgEVxTd8yY2r4",
  "key8": "4gmBdxVKekkPrirLpow2BXbxo4mCj9bsZ1YFPi7yCeBNnjEnqPCXDBLepCTTuejmxTp7MT2j21y5vyt7WB1kRcxc",
  "key9": "31McKZoafYB6PmtsK5n79M28uJFMGE8E2LeukvXo1tuULFqJwUSGsENdMsjWr78C3o2A7A8pcbEwxrCiy1Dr4drn",
  "key10": "2qaNC3fUNqR82Zn2jTTUCZTFhXxQUqQwCn9H4GjKTkGgx4ysjQFko2YMaorJvujA8fEJahHn8yxMynLeGaxPzEit",
  "key11": "3uypDhVDjTedrLcpwzr9B67ZfPaDoRczSrXQ3D2PNymLzsGwTfWkrrujpX5KJPPfRjvCapuYvZdZkTNapKYRseTH",
  "key12": "4o6BWikmXesqYdebF7pjVavMAiHasCmR8iyYoUYyRzxTYf5oy6CWvzUVd44nNVNekiWiatqvBoC6XM9yyuVAEhee",
  "key13": "3sZwuvBLobKBrYbf5cHSJ4xWnwwvvgk8ax5RMiWbAKyfCxk3i4kKecdEQH4Ur5gE5CrwV4BkA3aXcYYfxcue5WV8",
  "key14": "4cBJo9S2hvomNnPNNUtDq7Q8pUhAtMsfmNTnAo2YQbKrnzNGm9aSdH9yhTGiLrSQDqX8AfNQpYuYEPtEYiRCByh9",
  "key15": "XDeJ3ticA76BBwCvnPUFLTgJWRXCkWSQkbcbunKP8wGTd81kSzwp6Y6VuhN5Bf7gchVFLsiUAmxNvmetQPFkror",
  "key16": "4QHX33tzwZAaAQkVPve3wPURZF6Tpvwo6NJmgQUXqLYLaFb5ttAsU2RLyRpab3CE44NDdKTAAs7htayEYX7MrN5n",
  "key17": "5pWjBfJmwTw8DLb4kZY3xedgMxJgkQ2M79VuDujPHa8UA29P6RPAvUARcuu4VSge2jw7YbBccc7XjQJukaQpzLzk",
  "key18": "3zM6v77B9cWrnqBccCGv1P6ef8spzk4wJ1J3b65Q6orXc2d6CFPtsjCzN7SnRer1suxrAgkz4jJXRos9GnKmCNAU",
  "key19": "tHgpMQRgrVfE9jg9ReRgjQGmZHgyQqSaSjKnga2HcajBy3ir2pU5xByj7teVyC5xn78CoXHJxCMoLS8g4gNNrUs",
  "key20": "2LsrXwbbA81EfL1WJtbKFueUfpaDWKJwfE6Cpci4QBhAneCEWi7VJh2Vt7PoJa15PJavaKY9zZhLktouApH9axkz",
  "key21": "7MBrXS9mptxD3eqN7zc2bQKKwYBRDbQowh83T3FWc3kdyUERrrJ466cz7qqea5NUu4RogHKRGLhrQR4j9fK4Wio",
  "key22": "4P5hPmP7Q4y6R4jJMxS2etZSrTwb6iAWEC4Qs2mfh1JBniDRKHMfhhUvuE5CCbNC4dWdfwxBtT3z9wEG8JKLVcmY",
  "key23": "LsgaubTfdYyZvPuNdSavxua335iXvsPFHradQwvQMS2EQsHQ6gTdoxaBBD6qrADkHd4YmVsL8HvwWxfBjGjpPp1",
  "key24": "3h3SBnf7KcuFifS5XucNonBKEtP1YzydbMw7867MmDD2WLNh8GNNAKJrgjgHdjvYgvpb9WbhWAoAkKFv4Fw5Hsc9",
  "key25": "2jRE9jhaoKTcwaDbhPJJV3v47z6b5qk1i7uTBdVzEMkCjK1sGeifYuGWoGNu7wH8AkXXfA7K84SGXkKRx2bB3gjJ"
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
