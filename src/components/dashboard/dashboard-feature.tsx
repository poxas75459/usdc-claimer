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
    "2NwReVqpP8d56dvn3dTKxHrUjXfK3neRmfqZDt59CoZyviMT9cmLLnnSnjqqxRCAP9dEdJGuZJE2AV9tyMcycuXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593W8b9m1wzV7wig6862oxwy9c6AYMD9y3FCQDrhALHMe3fkFRmoMP7WspeqZPFg1vGjZhDMTb5WBNgYPJu3NQdQ",
  "key1": "2GSApRHNNeP8FQm9FNjUa8sC8VkC6DfzHfRMPPErzjpKHy1hdk6sDgogegFayukMSgaSt5T93cjuY5oPndpjKhfY",
  "key2": "Ayt9YMAvNBSqoWxgWuksTPYxXxVBrVRmSMYUWt9Ea4deyiw8MKgcVieuqANWVvdkKW7FJtgzy4aDrwp67WZBoW8",
  "key3": "4ZKHckfcUp1D913VjNeeYmHhFrFu26myoRyTvmxf6hT9c54YbqtNH67ckSURxDpCDMxmE1oTVMSerWjsrKaPvcMY",
  "key4": "gDEHxAdgCyxoG8g5BGEx7Q8TDyTALMLgjULXpEa9dp25PqzbFcjDhnwFfuqZwnYkQZBWWHdXpjuSa74rSitkx24",
  "key5": "MRYotTwydVbdwd3MSs5e2KreaYEc6XUezqebrzHfQhXhyNBErukcu9gQgzozzg7x9XzaXVU7kHo1h5CJe8GtWKs",
  "key6": "oBNb7o2WPSEf7zSUMte28pquAJwCBZf48dq66fgLmWtwZxdUTMvzGLhbcAcbuqNcEg9Hv68wi5TwfytEP1rgu4U",
  "key7": "5Xc8Wjpah3B7QoLm5MrnEeqqCZazvfXcwksGQtvfetnQ9c3cx8ZqH7nJpHLzaTPxvxcHJiqK8SBW9mMq7M2feoqy",
  "key8": "2W2BEfkCBNxUTmRxWhwSHxBGKiSSmAcNFwDSJbpFTC6L6wCR3SgKfT9RW7PeiXL47EeMg1wCw6YawbpNExoeSenL",
  "key9": "5w8fb69RveajZVwYFikeDmu4898PQHKSdCgG5JiZXGT1tYRXN8uDMNrfKBW9PXTWRQgHQRvrGGVSM6n4oQ2sVEpE",
  "key10": "5zNRBvuEcUyRZVSsVaWC33zikWCubecgYsS9fqEp9Z4qhag4af4Xkf9iSLoaymwTN4Nr7cTjEvDyRrhe93zCQHuj",
  "key11": "39K4gdZqrrHenCXAXpMXAsm2CCEGnTzMrjpT63z9YW8eYxE3LnURuVfX19A7SNQ88X1oHjgNNha5ZtqdABcW8RcJ",
  "key12": "5kyfxHQrKvHqrbFUdWiYUCEh8X8FabRsh6nG2gDsoB6S6MgYnr5eXNcAqStNJgoPhsFoT6tVnpLLEDwaUCfmg9T5",
  "key13": "5pTbukziyHQ4rvhKJuxH9R3u22FDTLqBzAinynU2zXXge5YhfYqHo9pHhDCSKUcq5fTxyrHVtKqShAWxDn2cATVQ",
  "key14": "29SRhWvrgkeeNv13kw69CpVeTFg1nL22Xww5vjGB9kN8xMuad97ydMie3PvWgf1rwXULSvVZeNgcjM5sWJi3vDtG",
  "key15": "4Sp17g8N5W4QJXd4sAxi7MkjRu28mt9zoS1ERztbFSz2eVhfkuwi6ERPKy64QRFH3tjMTsit4qgEMeswVyTtns1V",
  "key16": "267yuTroLgU2Fk3syGNBt4MEc13s8nvjUtMXSYkQxqugPcWVD2nCN8dkNCKdtHNuwtHv8XEgjh9f2KzCVxe3Quk1",
  "key17": "5rvJJmH8jDb5f2nLdeRnuVTamzKAMzfSe2GWuKWRnVVQMfDfnbjAQmT3GyfswdgmapKKJwm4Kn4yZ12w7se8yVgr",
  "key18": "4N6JuuivTK7VH6TkF4fkW9cMaYvdPSVsKZd6TVA9dBDKHt1bF13YgoYV6CDeqaP8Z2Ddu3suvwxRU4ZY2M2arEg",
  "key19": "2zpSsmis7RwYURpn5TJ5ZNgspJUVsbKVczY7fqkgoMSWFLAacpC6wDuLpi5neuZFMNPNcJFrhuxQ4SaSzPBF9Tuo",
  "key20": "65H53hco8yzWc8Sj6EuemVgVer6RtPP7keinqL5oqpaBxXBZvLK4yNW28on3shqbpu6jy6FgqDMfHwi2LFK9u9LY",
  "key21": "F4CQA5AfKuJ4RiSmyy8gF4BD1fWkqQpA4yWrQwAWC7H4onxxtPFDk6u78TUJq31DBGr4YhyL8tYMJsEZFix61nU",
  "key22": "3KwbUcQXrZSQyVFe1U5uDzhhWUGmpf942CMGefoyf4pQo4nSn4MCyRW1er7B6s1pzfcjYA9HRzkbMAfy4DfPx44L",
  "key23": "27kYYgK1jrZYfAF7cq6JCn4QgCqSRYDU2tfNSAdLh935rVvq3Rv8MfdPA9tWUhjdJqGtx3uj6e9adQBtnU33xFUp",
  "key24": "5Xovnbgip6gFgbvPwrCBR9ZMk5ZLEzKQJNp3J733j9SNiP94s2JehP83TR3PbG5YVvhgvTEyM9vXVYZeKizLu1pU",
  "key25": "23j1XNnZYueUtBBtYMHbJYPo7mT2CQVu2NJZF3o8UKTRyRY4mNu31tAwH3fkunSbBoWkYjprSXwaygubfA7dQxZh",
  "key26": "2Dgb3yUSTkEvj4SKjjGu8JVXKPmz47jRyp5fd4Ze1gwZXcYxXu95ZypZRYt1NJvRMGozv7NPVhYoKEGRU1rK4NAA"
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
