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
    "7gbLvta3frtgNqfnqtmZgABBgofHhDFjCsXBbtAuek4nh63y11rx4tF5nJErm7TAURcsaWTxLxiEwraZRg692ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dvKGiVFhqUJvZwaBUsn5H19EZNnLLVsNXcY5W1XZpbPJbdYZFrzjpzvvxNRowuwXhrHX7KZ2R9xQAywH4b9DUX",
  "key1": "3bjt4dANdAjW67agND8Gc9oiAJj8VYBmpkwCZc6ihrGUfMj18HNeEzbM7v2ZVrtWecVaBH4ucLwCrufq1WNhkWng",
  "key2": "2t838gDTPjP5JysbRB3AutfgdvcLeHJtjbhrKLHKcVmyLRe4du48ZzPoyqA5Uk7SqfnRQe5rBWJSsWGGp46kDLgx",
  "key3": "3adqgNtEr6nem4gorqBBCYtZyQPSjongRvNqUyXgetKwTDskgm36T8R8WKu2crooA7p5fg3te194EdXoR6jp1yVh",
  "key4": "3kanFYSmJQiHEovPAWaKBA5ErtTKka2Yve8YigmRfmRpPbTiw2Y7JYZXa8tioT8Xuu4ihhoxJcBt62N7ERfx37XK",
  "key5": "3vUPK23FnydwVKWdXcLFaQnQnXSn6ngkW3oUrTp4dr7nKfyjHKga8r8jpw4Kr4FkeLHBQdN9pyJUhnX6CBDKDbkb",
  "key6": "42Cu64MtNzxZuZ1dPZ7CWCabUr6FubZeE3Yt5Qd7xPtuXXXKD7ayfo7vKC4cB5LdGCHYt2RmnG76g8RdWtoD7jxV",
  "key7": "3AzEvPTamwcjRobx2Gbcox9SjUVMWDrVirwUmZwox3KZkUwKe4k2TSyFuTuQno2H62nxSaaGbgwcpmYC2bCuWdun",
  "key8": "5TPmXAVMNvaDiNe86TBtPXtMgiX9tz4ZdTFVkZPgQNtv9Qj4XwrVTCnaZYud34yuYdjMAZgxPcxy1FJzwSRtxtKQ",
  "key9": "xxEPsMRgjExkzeDq6GBEoWG2QYZ9p4JhvJPhSpTJvrRsakHzNdxK4iNw7UpKY4rvgfYDAGSGNkYZpnBsP5vP9ET",
  "key10": "2PF7Xz4rQ6N3ADftFKaWQRHt3akZczWerrVox6wuRkmRpbXTGquDRM1tfaNuESKh5BMgGxhn47qRebGTpX7sL9Lj",
  "key11": "3s8X2VYcY4Yjqi7RfMENFkVncJPjnXR6CxM2KVu3URqjBkfQnBru1K7UwhN1xDBqBwnJhNzbZTdKeueqngQjUDh7",
  "key12": "36DQbtUrvb3yu4TGBPu9pEorLaLJgtvujG3XwMKsFfGneituAjrg8fjxM8gKmR2BQvByByZPs74NTd91K4k8GjVL",
  "key13": "XCpHgm5bRhmBT7QGGk83NRsbXxJgszoS7JQi9F3CgrAksev53bH4nYUEn4Mo1dWfsrsdxYGYfpptY4dHgBZfbkS",
  "key14": "4U45B6kisXWmNR2EmFCvYnDAP8YuPbREgDqGQWuSo5EXT6zo1UVNyqrZAjCoyddL6TSHSjD83vcX3t4C6E2P9ChN",
  "key15": "2ZCfWi8mq7FLxwYgwswZQPStgtARse6YvYMCjU91fWNvXSgbx9B4N4zc4KFc3xozDWKWdw9dpUSXYZehJxo1UC9E",
  "key16": "3Rg4kMnH3GVmwxwaBFVpyZrBjxoZxreE2E2NyyEewQ9GoYRinBZa1Fks4U3uW2DPdgcPJj4xcbg4GrCAkDjdYLAr",
  "key17": "3uyKoMtScnbSHma8u6LToCoJykvRKZC5a4wZ58JgjZHGYgsKZhCD7hTK2S5vGLoSRpVMz1ELS72wDL654GFq9Bbd",
  "key18": "4QZiEnDTQdsC7HPJfspzy6UULcYyCbKYkVeyXXtemsJrps9Ea6762VmtHzkyR6YShdCXoe29PDAPvn73ZY52bL4z",
  "key19": "5iNKcKXmm425Atihrk9FsQdKFgkBuT2zxQFBpYq2vVmmUAu3Q5FtjJU471dLLnKmFR1iPCq2WvvXLxhPwtmSobmG",
  "key20": "Gd5dpfRG22ZEwDRjcYFDvkMSodMGF2uhdevMcqybouvpQTu6SFXxzCLVAhyNtcfraJNHu47iGu39yLRkigePDJq",
  "key21": "4CN7k1PpBmHBxovmxacqMdpSVKEeK3U7VGwmWoJ9XF1ouidWDfU5fQuzZWbHr4qrd2KMEfomDHvXV5EntLa4kocd",
  "key22": "5iLd1QmsGwbSw5A7Uexihy41fxwQcSaKHeSLAL76LhLHDarWPxVwyLcaK2RcByME5hoTMn9zGvahEnHQd86qG6J7",
  "key23": "Su6shXkfc3DLJ1ZJhr8zRBkwjeBYpja8nMsjtNxsfrsvvybpKRVFFRsYHFF1tohmH87BuAMCh6RK6Q9tbJe9WQv",
  "key24": "NwE9bYPBdU7kYT2piGPSEZoyP3NArj1GQaN5mgmxyMZAbWJ6iWPqjUTxZp5GjHG7eiN42iyz6n5W3BovJg7FfNu",
  "key25": "5VzHDeztDguHhCvS5kGJF5Ju121c2VAoYAzNFXssE3mouaUJZJYz8Vc818PrSTtsrRpw9t99dpqwrVXxCbFDrdxT",
  "key26": "5VVzpwsidWKM6Hg8zHrby1C2gqUddTduLxNamhFH2gR7GT3k6KVZk2EkLUiuPEVi84XVr8CGtzud9cu9kyLuRb9Z",
  "key27": "2GnyngsGePiNB5hqtxG1zZHvahZq4zwh17eG8H41VDnyxd2QYW8B1YvnvpFMqU9veNYhb9HhN8AUYhTkLX4Jyicu",
  "key28": "4QDDTR1hp9QexX3nHR88kWXgUdVqmh9Ac1tB7MTKyRuPKQQRtJzXGn1bruikYG2o6imb582h4BoE45GEw5b4YCTF",
  "key29": "2r3mByupT8TeETwmCkX5bKQeNutv7v58PoYh2g2EWSmevh9UysRQDiyuiTFftBt9Rsqush1XveQn25iNA418freX"
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
