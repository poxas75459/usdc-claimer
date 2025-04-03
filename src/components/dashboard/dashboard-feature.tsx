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
    "35D2mRcGHKEi5iiHy5ZAE3MJf29VQZCALGWY2fjnhMcS39s5j8xqqK8KcxDp6QjmKgEAAtZFkWZqLtyEvZi9WuHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jysYzYTxiL1NzqmPhwS3GM2a8kJbRtJBoSec9vvA5Xoe64CiTUQNVgXkN8jMDqBjCQARFg72PzpA59sSs7XNduk",
  "key1": "5oZQRL8jEKrFAVwCHF8g7nTbYE3K2SSqHQ8qN6E3DsG16BZKctkmUtYtSXLqxzejB2yx2QWChUcmscRVcYveGmyE",
  "key2": "Agd3MKbvUFuDTbrxCHgicYHp7bF3t91rpwUgnbcAbKFp97UanwVFAzeTEm46GWWeHWamiZNFBaZgE8B3GDHd7Ci",
  "key3": "3U9uTxvYTn81DKkUKo4xXHHGH7pG9rZU8z5nsuP9abmJy5J4up1rD7fiKBvP4LzFFkGidQu3huf9ty6mjdxzUKwi",
  "key4": "5WyyTNWz9YFtDry4z36cuJQTyFiMRyEXSUzwzusebLDEnYJViYR8w55QUwRiDL4QmMKQkb1nMSmQxBp7a6pFt8gk",
  "key5": "4byA9SZsdfn4V4R2zdRbzFvEhyYLo5MEpR2yZZdSG9wP5r82JCYuqVH7bsPJrKm1xBwiBQouK1GeoUmprUBAyzFh",
  "key6": "Di8XuLUCYjscPv8A8BhPjV7KkrTbfK1oMnY6s5j8NUp5En54rtmFgrnjpoqZFX9CzywzcCMySNZM9xQt22iZVrr",
  "key7": "2JZ7ceBRTuy2k3PoFccyyj1TnqrQmKP6iqXiNvyw9iFSrfKkjBGVzRZzRVmzKfboyg1EYr9HexSynXFCuG8xtGoa",
  "key8": "2WfscejzjaCmC2v6g2DGFgXXoicUoWgaA1GqM6k7yZQcrJLhymiEXkWbC9htCAW62ProYNwhK4iTXKJSigaT1Aho",
  "key9": "2RzdQy8mCVdFiMXaC6owU9FDnT6RRrWbo4jQuMV1yEEEvn31mzvRa9eo71ULWrT6n9o73AJzzNn58RCKfqhaDffU",
  "key10": "31TMNMQJthJAtFcSJ2Y5NnWAavha55jcNCXbdvfDVNqPxsYCtFga78gGGv41Rsy1vHvRj8woaFaGLCPAYUwY6TFg",
  "key11": "2kehzBcjJUAeyughWH2vcKCbZTTiNxm5excB4g3fN6tKH5i1ejjU8Tke7uBbMtnDUYfkT8i8QHdNPsSDZ8MpEWsv",
  "key12": "2zPPq9TWmHbKdbo76RF7hGP5JvhCSZyNmyARcRkMqsYFEcVWZG1injYKbnYZ21PiTZzndMpuTM9Y4kr3DY3Se3vK",
  "key13": "3cCxHwGM36Kshg3YKsHNiTv7GRV4v84sZxuuaVU2odGmnFyxDt49RhRJYAf4hrAjCThTrm7TXFwtD9fYTPn6tLN6",
  "key14": "4XDH1RFE6wHhL88TddCJzr1eMaXyFqeAMJ44gg5ogHWxo6UGea67eeWmy3nyePPVfMvEZM3jPhY48tLfSGRAzyeY",
  "key15": "4fofPAZNYaDHghMELTxPPhVApjQfMJ951W4inHSf1NbWiHCURzUrpA5PbTq5SD63XfVjoSfn2g1u6TnZcSsmthdM",
  "key16": "5QTqPSvRYL5vocPwnT6PyTvoLrXcYVu5TZdRxCHVZvG9uWParMXjGs74ad9VJEa74u1smaDjXWUxMmMZk2mQvXmp",
  "key17": "525pKwnzrFrbNyHyVkjTkDnLYnonG97jPPNgjfpGpXVkJMpBNUHCGUKGyhWdTLt7agkgLDbwWQdUp3rvTG1YJFy7",
  "key18": "62FBVrmcYYMBjiCkLaFcbjyGEXAbxtY32jDLtb8r9Dsak4B8V2ZxdQmcVNkaLpd5An4BnQJUpBrDPfsFTpz9rEH4",
  "key19": "7GSBdh2mZt6jZPHWecuQ2nJCGGjQWCKFQb99WG9udSf3vcScSUfqRoemmZbxcCAW4LG6SYGuAcASZNSzJyNF9o8",
  "key20": "2BiX4i1ViNerebUP32MFQedhsgAxhYJvmxJtZhexnn3o49DU511fPExxW6dvkd7So5W9rAdd7WnK2YAY9eB29Feq",
  "key21": "3ck86NQEXuzoc31mS66ybGuH15vKVJ7WPMuRoAgWdur3CcZQ6U7LwCQdJBTahEEWXXbq5Zpfb7xePR7EcUZV2Jy4",
  "key22": "3JETW5CBYXekwfrm2ZhbYpoYyDEwYRUpH8o9CE9NDSq3gu6FrEMAb8yVe4VcBWQTR83LUW7YAe5EoxTyd62sq2vX",
  "key23": "Z1BVqiKWC5nAAUQmgypcYhKkc2iayfY3qTprVUz3QGpoEQjUqebJffSXx4AxQnBMvZ13hiex9XBiPo4GDoRPKXi",
  "key24": "2QZgHszYXiiygwLZ8ixiex2sw2hu4375pXnQx7eqiRAdCaUrabM1RMYR2hcHWPV2GRHDHebitdAHSokzUK9j8rjy",
  "key25": "3U1phbrRLNrZ8LsvLEqjLaHMhUMBgLY4cge5G1EYo461kAGkJKV9FXFvh79zV4ZStnz3MREZE7Z82tHcct6gVCHf",
  "key26": "2YkdEFsQ9fUQNNdaqyzQ9s72DTQZ3CYfLYqmn2YfBgKgZgecmD9kLi2uw1auaxp1koTs83MLvTFCZuiXW43TzXrA",
  "key27": "4Zht2GnjqBeUtXocDgoSUZWpVw3vq9zxe6HJbpushWdpMnS4yFpQmEEC1NyrKsmvhPgKN1sZ2ZospsT3TFa38i6b",
  "key28": "LfSHjdmS3BiLBEDxQVtWiRQmSUJntLvvYaGmaSWBUvEiSJySdaC6mvthkWxfrZmRLjpKY5NKBJtERpwCJ17MjXs"
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
