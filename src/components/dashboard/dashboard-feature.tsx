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
    "hoZ4VBFoahb9QH3CiR2xpgJnPdNxbcKBKyQUnvigMDgVYLHb1gLW2m8ZFXYEnXowHREZyb8TBJ24Hnh3QKNEMBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLVtSyWjsWCAwcMt3QA7mEv9Wz3rNhcxrJZNXkch77UtKaLYqFhabHyW7WEMqdzripdrw7iVq6xwKqXZqy2jGgP",
  "key1": "3ycw6qL8vhRKh1UxgT9KMAiRRuGiHFo8CGwJnGabF57vHhGzg6WFhiBb6DusrK4eS7BaU7gNKEgAz8BQrnrnTABH",
  "key2": "5ZidDexJPExzaFtYQgp25LAjeMipMDk44a49gMQ7os4Re9mraUDtdQPFJe4FybYYPxRxtNNKCV527Kt5gDePvytz",
  "key3": "3S5WaobFeCF9JwHThraU4c3wvzsvcK3Eyf5qUevnidbquDjha2XsrJ4F5jdYTU39bQ2t9hCGXGTjwfrh3D1JENsd",
  "key4": "5DJKz3P7976MJSH3iJgw1hCUEFim9QHsen3iVa2HLmSCZPxYqSe6aVNXCvsK2VuZgUJqSc4wfcuowq1ZxbadovX8",
  "key5": "4NuUZLzeCysgrWv3VzjyG1sfqEgT5seZiJnKtLfmHqkiB18AVxEc6LaCm11mpSYwU7sZiwgLHULQJ3WboHS9A9aA",
  "key6": "ksQ8e6NphtYVMuYZ9nWv2txtcQW6F2574g6HXwkZTvgspmEBvADZwiztyAjiw39Z83YT2zcMEbuE71zj6ATu5xG",
  "key7": "4Si5rt4k36uCzThmf525XSzJ7j4h48d179hdGZQWqQvnRcDKfznMjo93z5DKC7YphkFiVMpabK5xkTjCGpr8BK3J",
  "key8": "2jFGm3q166CMHDHkC2mBgz9JhhSAZtP38ZAVqX528FfucGGKHVxNXq2jHxgh3G3bukbVHWbiE9w8h4jWBVfdPk1e",
  "key9": "W6P6PZqjMTrDMRvAmNTKUN5X2PzTam9eLgndWcqawbaKq1Dr9TpNZGs8czmcopgNzCGHAZCPGPzXPYEdeJBYw9X",
  "key10": "LebvfSN1d3AUQXDFnGnoEwGWvkdAMbZJdeMCuuhjp5MKzNDWr2cPVju5CLcd65upnhHfqwg5H3nY6BnimDxtjsS",
  "key11": "64dK5831HkbKgwxwYq7Y7MN3PKxEao9CuDqpSJMXAFqTU7zrzXYwsuBASnm7gymG4itZ2n1tsWUEQZVKDyg1jsFZ",
  "key12": "4HsJADs1Qfb4QQTDEJSFjm5gp4geNk9Ypv2SbSKNdTNEjkDwX8p2u5eC6fABt4Va8CAkqu7LmQQmL49fBBB2y7mX",
  "key13": "t1AfRTqggG9VGB414TigbxXkTNhhkUeEX6FgtmnmaE2vmuhLrkxfXD243uaV1n1qS1oZXJi2Rk2233NCtfNUAY2",
  "key14": "iY9BVm2U6NQ8UHWFoDyEf1VNLkmrzKjkRYo9gfK1LQgqYcMfzbDPNh3z54e1M4P2ggLxAbkE9y1Qxh4Xf5GmMY4",
  "key15": "3XLD91iNUhsxFQWzyPFKP81PaicYGoXnBKa1faW8tdBxAc2F1CNu35Ld4V7phseZBFTFuNyZYXX1uaANva56tAkU",
  "key16": "5TwEStsWNL7stu3vhUt8rBBX5GAoT3ApJ4nwCeL8uRNiwaZ637pb7jdgrsHfQmbWRV55sm4R1uP2VhSXh29BEdxZ",
  "key17": "5ntxSNfHw8Gvd1wjM7Q641Uk4TreN8t6nTnLGmZ5SU5PgCx5JrKyX9Znv8y6fyfjpkAPTE6s5iTs8pEaWLnAZdUK",
  "key18": "smbwBevJ7zkSu2FqebwBh1Kww6a1e9YktkR5TK6fXRLdRQBbCGTv3siXRX2GPdoEcuQwVacrsFtywU5o5rN74Tm",
  "key19": "3Z4Psr7wNVLxP83MZ4tTc65tUMZqrMEp759DLZbFK55N49D8pPMKACv3wm3WFMcraVfbLumQCfbx5LZHw9LvtRTx",
  "key20": "NPZKW9fS5uEXtfAqc59KvbN8U4fuoVBaAsRY1pr23yRFWaoAib9ksj7Dmf5cztGbqsxQbxHAJdTC84mTgdMUjsh",
  "key21": "26KG5uiS2k1NHjLwGrkr5qiUnWVM1CRY22wi3qi2pjynQeRjC7JhQPdMEHEkjEAW3PCsgpDxw67uYW6cUZYKNjuU",
  "key22": "2VVSFehjcKfnz5VoVJX1nu8Aaev9yUjVpaAtEvM6VWyJTJBmnF5D3nWshyHdKXDq7b6wYXe84XRJA87kkBchw1T1",
  "key23": "5ZTe5X2FrEvenhXDyoGLk2vgaQkoWK68538f59FtQGp1qCqPnuLuYF4xo9Hh9FaAwjfgh8eS2n6V1TiKJPP4SEgF",
  "key24": "5G77CHuRCwdq4AkjqahJJtJZAbWV3xV28chUv65iuqQYmMLAAZfjouXXFffMFnho1Khufb8DwywktdmMJxx1Vdpi",
  "key25": "4th1ZFwPZBTX4V7Pqq39P9KPsBYwdhRLoxoRiQQwDKH3jBqGxinVzYVwdCgLuYn8gVs5RkxyLHvMTv6qvmBJd7CW",
  "key26": "3uaxUUhEvTDaW8RE8Q6groJbbeCeFB3fSGifR6dSHs9ARixf1btfEw4ZPwCN9DQWbppRcg4DizRVtZYNW1xfpaLp",
  "key27": "2Q51FAJzzB2A3noqJxAEtcS8C2utziYbaGQFsourYyrGvpuAnm85j1WcQ4ew5KjgbwyhtEjqhoStDLHCzeoB4w35",
  "key28": "5LV2cDv8EYJBtXRccB1ypJuC2x27UPvG2QQuSZUgsTjJGmNRcWzMyDrmeHDDNboP5TpAFMz8mqt21SAAMk1995bH",
  "key29": "GUXFY2niqqVzuUcjjeh7tCSXqiGqFK6KAm78zsnCtdffQSv7ejV41RwqD5XjaYnxycRX2eoD8AGdePsLSJp6fV4"
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
