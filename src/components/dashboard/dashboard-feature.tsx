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
    "4RFuffiQ4bFnJ5MArdvPieN6a7QFw86RgTLrtAHqQoRzjsG1hiy2R4MxQCLa5pP9GEvxGZvw9RQcpDLhtV739kDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4anUyffwPA4sM8rSA3n7uKo8Y2jxcWSNYg7znaTAmoQMPuKy5edXvEUgvVgRMyr1ZzCpxzFUCFzQJgnZBJ19YJRS",
  "key1": "FU37GPhx7jygmPinyqmPHayvFyq9hiSYk2nPJ9ntgy2ggkQjaWJiJSgBJ8nkkrWcU3LjkGeAqrZWsyB2pXmGtky",
  "key2": "4TQJhAik8Wj3xeSSAvShdzGLsEmGbSrERgs4bHCRcfuo6tfYSnFcJaErredqfFN1KZMnSPixs1uhNwspvMsFXVbV",
  "key3": "45X5M7sQDtZSmcU363K9CtA8mjML8aELfQYE2sSyx7JE9oYLPrbgXY8gEXL3ynULadCTNNi2g8HJP6umJtsjpsmu",
  "key4": "3DZmqKCGowu7LbsoA1sjCxta37DRKLLHFb238MqB7ZYW1FbdNdnjjZPoAhhNMHKR6N9U8LtDAMDhxLVY9SdehDSH",
  "key5": "5oeHXLiWFf8iSiGXbc17fkrEv6DGP9ANCD5Xz2Ro1PeoHS1yaZx3mrM9WUkkRyXp2YuwtE5nD7QuEn4tTA4oJETQ",
  "key6": "PMKmLG6ub4P2GfWb5zuGPAX5CxVtNpHQCZcYqbMjd8is1kXmUGBnezNHnYWZV4xTcMZamz4H1C2KQBZsJsqkMmP",
  "key7": "ahxUaTdN4q2ULu9iANoPAT5BxcyC2mSQN9mXyL2PXiprxSopuqVwwFPQKq28yLuwVx3iSap3oXUmxfduZoMpkBF",
  "key8": "3FCiyZZ7LuTxhKTAMkPgSW8CVpxi9CYbytgGfPXB3ZptAz5zoARNPeksp3CUBmg4G57i92XhDCqBYf5JwprghioN",
  "key9": "2pSthGLegTSTqQYTxr626AkiUMXZJ5DGEmabU3AdNHgV6EHQxn8VRfCmQ3WU7GhaB6fQmsNXEd3jcYSXnrskbs7B",
  "key10": "5FWptbm3GKRqREaqcYiuVu5gTpxuu1GdjZ5iPTxu1Coi6j58FRsXZgfmcxyyFw1ETnYitojrodjabxJXeaCFLg3j",
  "key11": "4Q7bQb7sqf8umk3gzhhsK3GMnf5D8BF1GjN2HZRkJjmh3VGZ2xYuYgYqhbv74Gua68xCJKJToyRMAWx9SX5rHLfz",
  "key12": "2PKXav4ipX3uCs96GehudD95tMGhrsAxTRVpVdj77TfUE1W71rsFgTbavBiEpkHLTCzVKUcoHBPbePo16aDHjFwM",
  "key13": "NgFuewGovvZVwHcBB2Vc1xe3Nd8cetyjJMGDq86etxamefhrL2jegFuhusFGa8NnS6S6A8LK1SFMEpbwxxrYMZn",
  "key14": "5G924BqPgPCgYCWqu1QegG4pLZeUsEKGTqDNWq8fBE88bCENa2Mg4cdNDzTgNUvgFwdQmxEhcCdPvCGAMFVZs5Cv",
  "key15": "i2vmsMKDcMN99Zjky9Q7AoaH2KosM2vizv2Q4ZckffCAbRWoBkg4xgpyMoPsNtMK8WjFp9NSK6j4wQqfbVK7xm5",
  "key16": "MSxmRkePXi5A7Nru7y1kPZnwqSnzCcy8VNqvVjEyZ2gRsxR48tGVWztVWPdQwoFPMevH8BguHyqFaCJSdLQ9wDE",
  "key17": "4jEunVokQ5M7JrAckTaTsBnikmv2AQZ149ZvRsQ91H8SALp18QwzqNnHSaf8h15jZ1T7HtNrdxgfFaRq4WS7WqVr",
  "key18": "5Nqv5GPYJovgZoFv26czXGHNMkt8NK8g4jeVQDQ3LQJuzWKfGGakPcVGTEjRJZjBBTwFo4GvAGkw7VmexQY3a9GT",
  "key19": "3e1vf61mNoeibecf9euLHgySoG7HyUosD2t5RnQA9WNsibDeHoP99TF5VLhqkSmmNV7XtFv7W1BQBYmXre4Hvduo",
  "key20": "2rBhX9EiixYmozwGvUAosntMg4UA2gx7ESJ9p24JM7YNjrfsr4La4Yx4sNxFjj9XXthGrfhyQeBqmPf5LRfQjX9s",
  "key21": "3wcwfEg2jE15XNADfJkdPtCP25BURmNJLDGrSnhGKhx4zRKaXnWe3kcvtY52nsHbeP3wY3VxzfFTBHZaLprekv1b",
  "key22": "2RHV5wMBejNfbM6nq1hpn4NXLndW5p7cxrhcKMpG2JddqNDckLXDrj3hyVLHT5G4JxyQ93WxxqwKhx7wkLBuqSB4",
  "key23": "25orUNFov9wdEp2Ye6GRrRnEEHjd8t9oXd5twvph2cvyccAp49wWFLDAUM3x43jVvtQAWrLtaJuvWzDBmTRdjKpn",
  "key24": "aKboaHVYq9sH3oLPgtwoYUUHta3P8fuFVkxZYWUS4WvLxeb6xSqFWqWG925pE8QjRkR9EVh4AdtZcYpRu6Hsm5B",
  "key25": "rsB25hUqySFvzarzKuqTv3d6vkWvNJczyxC7APaa8n8ajkE8oLPN7YMb2qKWex8D8twAzreFKCr7dEJtMmETr1F",
  "key26": "B9X6nQXqvg4hJBmQow4iUDWnpcrCtyUQqLH3NqjMxX9xTWDcYoZyoWPowFxvt2BRwAX7vzyWeagi2WKDiE66tzh",
  "key27": "4qxNeC2HrhJZChix2NUiPfcFvfw9W1kRdHibm4Xt6u7uPFExqNCBp3WgF7oYvD7kfFFpm9HxWJZBFryw7ni6oH7A"
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
