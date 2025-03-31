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
    "2XXafyg72ZkfyqbRQW1CkTp1gbgPGUHbRkw4TZipcVs1g116YWoaHzNWiiUXvr7TJFeQqRqLWBCkeYApFdFL2Xdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMeMc4M6qsB8FGbGCwvLjr2Zk29bgCWxqwdxYUpUWtWpu2bLu5yoKXj8639HC9MY33zYbRxmqFTkEZnH5wC6tZQ",
  "key1": "3btxuyY8ehE7h98X4VojgHLgjTtmqSHMkX3jPAKj6Kk7nRu5nEFkVsLxHSqeSaGm9nSdo4S27Se5c1Mrc4KwE9BN",
  "key2": "2t2mH59F2fDJpC34A2BV5Zt9jkkTZYxEndHiPmedCo32eALQwCEwxkQ63uNfJcVpM96WZoiq7FoSA2R3zMmEnYZv",
  "key3": "5u3RvZLrHZwgynCvcDP3V14w4zdanTFEBjmR9NECQd2iM2Z6E8C6prjmDnasGqCyAHwzQJsWZ7KM222rdYFp4QLw",
  "key4": "2oJHRyv8AzfA6u9fn3NGe8TtHVZ2BeYUSWHv5ZS3xNKgi6TvK5wDz7cboXqLJQcmgjH7zwWBgbisN5ne8nEWvCgi",
  "key5": "2amUz5PLavBasjMxxsryiVgJ9URtcipgrsW9WmgsuK6b4VUrXHLKPhY37YL6KfnXMhHJCJ7at6iegTL5tMjFrAnr",
  "key6": "2JnZ5vTBoYbuttKU1dR3HhF9SXnxgC3Qiic6fLRi6j88vgKJzFPE9BkciLHUnESSE9YvzcXYdz4zmJFGb1tE8EEC",
  "key7": "3x45YrsbQk5vvdP7LMrv8U9KBYoWqhg9pV1BdoeihejNFWaQakEqJYwTyQsa1PpnGhJ5nQqBuyRdxCTtob3JvZfv",
  "key8": "4FGAkhHTvSuvnUTn7QXZR7CYBDCBgzt22e9LLpEn8Poruqx3fphDRoDbXGrWpi1ThHehD64iqG8fr5ZSGbHWQEr1",
  "key9": "4uUtvu1Q8WJLTHiAUspWgq2TE2gGaCWs6awHCwoHEy5xmZbmpriDNt7WnKdtESMKiTTPQah3zqG16DdtA45j8KvK",
  "key10": "Ra5JGzFfb1DbyZHVB3DvwTwc1Gz4oPSYABoiYBsM5bZ7sKhBxWaEmM1V5sNEHbTkBvczdH29HkqUKtFRZumeqa9",
  "key11": "2ExdNKcQTE7wciTfg19a3AkKXJbEuMUm9dCq3Hq8DeV1CB4GYNUDprSi31NX3XKaML7TXZ7CP8oGUDJogNUfEUrL",
  "key12": "bbTgZ9CMcKgZWg1TCaQ12fAUPcLp9c6rTAvhKcT6r57qEffkJykRhrXmnyyxXheuwvpGKQeaMYdMa6YUwLdotXX",
  "key13": "2TvEvFtBhQ6py6HdaD6vzEbrFadajpdBLge5VoDgDPqsoz6Lp5pQyWDPTA1DUhCPojjx1t2WixiRy2a8Kgu5hiEa",
  "key14": "3972aAPSozJKJEFAJChN4Q4NNKru35EVEA6JRbtj7BJrJte3zKLfCNktwEdxgrGVNU2HrPApHz4bAXNXzvuSfuR3",
  "key15": "622maT8cE9eUnePbnuWrTCEpbbQFipUiPy85govDrwqSpTafk5BNdiTZV5q9nbv5Kw2QhHsCsYTuURYtRmjERGVk",
  "key16": "TVZU541a842kAyHZGbPGxrbReSQNDQdceXaxmohzv4mrriKnzNCLeygyZGp2CgWQs15yCaqyrdxyEJPzJwN5Zjd",
  "key17": "2iHDJKC4CSe5qEB839fj7Lek7CsfzMxZARafKxSd1Jm4JiZrteVXf668dqh7iScNbszonavsnxfCnCNnLLGXGbxW",
  "key18": "5LcsbcTrRKQPqSWy3AaypDmxQJPD5ikVs1W8znnssZp53Ekqs6m2Z4oLZw42SBjEeGihQxEER4k3AYESH2b1GQBp",
  "key19": "66i9F3uRfCxPHvwW9BkLRX7P7krakmovPvx3PeRg78jGBfm5UPzPxKC5Ze7oHJHqsnnMvJnEoJVjKaGvwDG1B2UB",
  "key20": "5HbsXgSh5CBW8DW3wDAUTpN14caconvNGaM3LBRJe1QtfCBYR3sstQM1esW92S9dA15SFSfwdtnjXDnAiBMKEQuP",
  "key21": "45QzkJXUJsEEuEsi5XNk1rQmXk9sFvks9axth8zADzSqzm8vRqDfP7SSD2fnojCiuLBkpmncCoNiYLY6etbs47Z7",
  "key22": "51LCdPEhRw5GCKhgvakQVxtGhJSmUNZiPGhqyZDzSt4hdTJsYBbiyUZG9ATP3Gps9SQDFCYxqmNSpqvifcosADdh",
  "key23": "3ubyd85eCw3cTD78xWXtE7oSzhuKJ7hJCYM2To2dWDS7zGgE17hYn9e1WgvnJp27G6jBqCRnLiWtTngFjpZMR1g1",
  "key24": "4nJ4i8tAqmWmoCuccZpsYiAyDb64QhdDxWPfcgszhF3euSECDcgF1f7mDTY7mLVSKXBcj9d53cHpqWYZoyQUVaRg",
  "key25": "67CqLTzgqCVJPdqigUidnhMgdtnZqbrRAK5P5NAKvXKRzuEfz6xtwEBknt3KVmWMrr3uRLaXkJdhzU5HA4FmX376",
  "key26": "3Auym1FBod4eDjpBPYU4P6sEDimeod91sRjv4FeD7jDG9YG7KcDcr6dGVYMi5oZQwNNuHmo31rLrzNdWd53wMbn5",
  "key27": "3kfFhKbF5MzQqpurhm8aE4UYLzCZ9DQGxiLdRULrcVUwQJyrBbMdVfJhe7zraX5wbFgVBguXi12Pk4Fhb72h5T7o",
  "key28": "4kVUpUEN98i7j8j7nonfczfM5XcRiSEMKamMT9zG42QXsFWh3TSVkaoKxbbxbHvk4PKzvnGevSXaXfs1XyHh5Rht",
  "key29": "3ZBEchnFExSAmEfpAfWJcrecRpHDPEz65qPd8pejwvYNXcEbh7i2vgMSsXQdMidbhWH3vvJT4sFEBQh5Q6ftcSvk",
  "key30": "2KHYyQEu4mjuRefHCdU62H8dS9DzH1D1hE8GL6g5gim9kjNbiikoKtjpD6SYh2Yv2VRbjrPps7yaGioNdgVGdGnW",
  "key31": "51SjeRMwWo9bWJ7Vuiv7ev9F9yNhGUF1tjuP7MTNpeNzZwrspnqyec91Zc6gohG3tywdB5DyiqhsFzta7Kuia6sB",
  "key32": "5dpA3tPhmaiyYHa7pwQSu3BRDBqTDNsTc6f9SDqG7Yqef8SsfpgReu3wTZjTHA5svSbvXb7rzpgvUhgXbVtiE9RQ"
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
