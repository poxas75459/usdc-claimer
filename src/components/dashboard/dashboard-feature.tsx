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
    "5yg9uK4uTiGNj98fzYxuii6rEnhh34PnwmcPUP4JxTk22p23jGMeojFAkEpjPEEQYMsz4PvEutqgc29Mhyep17XV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51YmwCexdXxrqfhfMcLHDUXzca8Z6duSfLbtcSQpsNA7jhJPfdAGVSg4WdRYjPMdGscZnMignPwLZqL8mccnkeQ9",
  "key1": "2D7EMnpKJbrAVNj1ArphmGoSkEdfywtAA68FRgXN2JraSj3aV8VEzf1HFwKyvFoJknUybMoEDZbgFoVvW2Rz2gtj",
  "key2": "476fJrBuaEZnF8g78N8m6JsUo7w9jvypJwgZVDPJz2t7wHrdgVHgxmWGZyVZQ1AnrRTWGdoM1uKXBrNdPbz7krqP",
  "key3": "29fhoEGf9gJRxqwru8tk7XBLAgyoi4btxbti2iHcaeKJgFMEfuR6qE4mFZ7JAZfcixL646bsUiqJH6GggQcVr4Qf",
  "key4": "2b1iqx6vY7KqLDRpvZn8SWUtMWo5gWMGMXW9aNoEgFEGp15YpQe6m9nGGTHnfAQmiTPq6mvoHMFxDokhsKdqWnmw",
  "key5": "3dvQ7BrZcKfRv1SrvuZ9N4i8YW9cCmNJn4uPp9SHE74c6nPRDMhnBK8njdVCmPquGYMkXwkEyksatGLzjCxmVzdd",
  "key6": "ssiGhEw99jApL1XHtZsiW45xHYLCYMQLCNBnUtRw2Ximn27XjSn2r6KpGdyk3xXTqavyqFvJCBj49SVrTrfDLVj",
  "key7": "4W3iuZude82JthaKb5dmB6JUnya77n2262Hz8NSkpMaECGtMPSQWoBjMXHcY3R8hyM8KajA28YLoDw3HZ7fmry5s",
  "key8": "46NYFeGK9JViZwCpbXtYGnL5QSFxRtGHEnJbkFPFUmn31u87CkowgMCPjfv4wD7wWyG9TYB7hR3BQVkbNYdHnijf",
  "key9": "3vrpwGuwzLWac4KPBitMCbuNrzeYrMKti2aoWJH1wRZBiq5YKmRFGvyoJmXhUUa76VHLajGicFNH14NsVky6yd1J",
  "key10": "5SB3UQgBExaBzwcznUYmQ8gzk9xTkVTX7NNBhwu1GfaE3MpLvpVTKdUQGDnef1aiY3RadH1acGzzDv8573wESM7g",
  "key11": "537niQdjYtbXEdM55CA75ptFB91HrbhiTEVQRijWoc5CfwnvVBsaeK84z6g8qf2y26BWhESBrcXMZnzQ2NPzw3s3",
  "key12": "LDw7ZzmfsAip96SWzgkgLP53J1h3GZcyoecZmyBXZy3zs154YenNiHMEN7Qsct33JvrXntpaodbJvqGeLJ7PoxS",
  "key13": "8wb6UWTARvV9EGKaMmy9EZirVrVXoK7ZmQXwdspHah4XLf6fomjNXbL3UML7AcpzggKFy2kiqmo5m2n98WWBSNx",
  "key14": "ipN4i8eFRBqfCNUvCDxKVAdfAPXKrAMsTyVVVVs9nk3qbXTy7upiLhtCnergBUsCz1s1xFuZDW1jowf8j52YTSP",
  "key15": "5chbqcjMfkTSiK2etHRvhmgcGXPuGsvC7Zdz53E6hijeF3A67LCakoZbtc94P97MCWyJCpBRNUpDVT5yg2CgR1S9",
  "key16": "5A8m9Gb4KB4Ykgv8qKF32VwHDGg2bcchoLMystbXubEJoo8HFyRoEV4ugTBdmMvoic8safHNFXfj8qijWRKSJ8yK",
  "key17": "4Ab6TKCkNqwBVia1Tn7hwqEXXCshSL1kADn5C1xM5a4oQrvhoShPQWyyeg6kfLGCXu5SPiiheD2XJvMqXhBgsbU3",
  "key18": "41sCCsAShdBhzPqrNSAFtP1cVUwPcaLoZy7g3dZG1HKQwr34TtKty17X5dfMBSvxT71rETvsS9RyngWcVR5bFE9P",
  "key19": "5Rj1hGDZCanerYBt6XPgMhmDoZTutaTTCXNuREan7y7u1Hgi3ierxe9qxbJ7mMRtFEhp56HUEu38hzefqpYofA8n",
  "key20": "3Mtx1oHnkB1PUE4g8kzmuZpTUz9QhCEdhkDogMnbvQ7G4SgXpzr28D2aRSKyGDm1x5HFSQddd4kEo3pWPSVZ2pkq",
  "key21": "52WZecqoYhhDsT9gZCqC9FTsuYWcNeDggD7jbCZjCPug3At2E8KKhhCt8FaiAnHaMv1UD1DwvNYEWJm3wuTacdPa",
  "key22": "Mu6zL16qQZhvAyRi7H6fq6pEfGdU5NCE9PCqqgwhfbHYbQ9uuZiAYBpuuLT1zEsbnRuEU7kupSNGjQgMNyCtvH6",
  "key23": "534evAnTmaum54vZ8pAdQV15KQuB653aiTAdxRETydZNgrmk3ETm33p8fe532g3AsfepqvkSb3WCzrubk83FfZpx",
  "key24": "4iqwXrhm8zYTt7owpmn2Zo4qG22z6kqNFxHQ2AhtjwfNnEp7Hpuy4nRYk9nPAbXM8uAJgiRkbVKALPKmnKcHi8iP",
  "key25": "ttBRmELBcPegreZZQ6sDUmYhQxatYeczZA5y1YbFfCrP6YsiyGpYUqEmStw7UXBDWPqbiiYvVBYh2EYjosY4t1S",
  "key26": "5bCmyA9GuPcZNzwLcYLdfUMxAe1JLc4LAkaJqBVGa5FFTmutyB3FmxGRxLxgpkZzJC5zunrnbf2SQe32KnajeDwM",
  "key27": "51jBGukVDi6Y6qeKNzdXFN7ygsD5qTBUmEwtW1YhNMi7hiDfeNmoG57mKEkb5kHddx1nxmoBo8aop9VykTYrFoaJ",
  "key28": "3zPTFkhKUfTspNiz8TXyWC94fdNvcoR9daVCUycjHH2rNk42juNVC4X26iefw38uyVpnsySgr4zCs6y2bJS1Wdhc",
  "key29": "3q8AbE6Zzkj42MRkYzHaWMo5DZXRk7DbwCVyT5PgHfEn3jjqKXbrthZBCWDXbXuz9ht9fAzcneEydHbWAdYbgmt1",
  "key30": "4C5bZQP3NPTrFFRM2Wp5ptUaUTaB9QYjgvb2wx3FxrP8wV3tnFMqMy7bTkPkaW7XJGcxEVViwdHXQUyz2c1kW7DL",
  "key31": "2R4BdVj2iepGU9dfkTJzsVPhQx2pZHAi3kdePTRsjKpJX18mnQfmZJyU1gqcREwWa2DNt5rgincHUbTVZ2iG8ew4",
  "key32": "NNdNDQwNFp78cEb3ugiPBkpAx54c7768j7hTszUkUrxfJ5fMDkxCk4eQs2nw9sWEo5JF6HeEqtGJay7Gz7KwJLa",
  "key33": "5bEE1FWa5AnwcrxF228VFkuqB57QzN4enr2E2dq1zq4bsetvgDGdKbUJEsgw1AazzLrVf8kPBuCjzKTEQ1YuQtrJ",
  "key34": "3DJ5zN3FmDJ8n6BVNaNjjT22VLbALgp9RtxUuRH6GMBF6j7sBMFmzh4Gr4uXitM7YwQDw3PZpnqYrUxvN4jVfkVf"
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
