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
    "2sSxZp8Q9mz8KoRKbLZdwu7D3a4vs77LNgKqfUtUW9Fj71pfVUomLFbxHdzfu7L74rP4bYSzkicEqoW2mtAjH97a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhgQcyoKYU87PfsvmWZe7MetkQQ8s73YAB8TqcQniDR74mNbJ4hnJLpW2yFdibwsy3M22ZmRrMZX61me6k4ofj6",
  "key1": "4n8czR1pFchL831EKACnmtqXDG9Zm8BT1vBbjw4qwG7G76XHTbjBoEekCdvrTWdhBMtaXSoQEZk6SK6R8w1spkzm",
  "key2": "3M7v1FYnLkLDQ9B3Fu6MVHrTLFe9E6paWbsU115nQp1oMZuMsg1X6Vh9PtK9WdSTK3Y6DZjYJWYwjrNuzMPuTXWw",
  "key3": "2EfBzRxUUFi79VfCMHA7VqLgxpnysnKaq2VekNdW6tM6g5x96cGRovCR8s2rTvg6pWeGuVChYxZad86oskCHu433",
  "key4": "4qcTwTCyFQdnXL8ZwGLasoLNF6Kx6Q7h9eaiaZ4dVAvF5BD3oh92uUtz6hykGfWA3SYdHvZB6JSNkfZGajDHbv1a",
  "key5": "41JyC7emCLNTgmVkA965DkRvTRfZ92tNcGKkqpnWQFsSjDNBjCkATituXtN7HWcR6JWEWDHdHdwtArwJ8gBSoF7z",
  "key6": "5aXzxrv2NbRcApPoc44ztQR2SZhkToHPpNcxHnfKoARyggRZALvrkany49KwAXnaxqh7rvS3orL8DBvF48BZhaPo",
  "key7": "4nofaiSa6PeW2rAaNN9CuVoHv8ggGVFyuNhAXftAuzJsmFWAzNhJ5BjV9vpnofUdYYEADaDfmzGewYbE7AyrW4Ez",
  "key8": "4mPmwD8vwtn3XYgjEwCap4qxk9QduwF638JiMyGrg6NX6ZWTxvJA1hKK73wQhTBX8MDtyFsH5W9bnDy6BR718JsH",
  "key9": "2jbKHentVoY1JvgM7NcVW7XXuXdBDUKwnLJfBj3FT5n2QvweyJhFxYsrwY9NiWZuG2MUqZdFGnjFRHCVca6TPuxg",
  "key10": "t7ZjSJsurPevLggXkuVDVvTZg52uc9m6h6Mko8WGoARLXVQjiWChRoUCVuofTjgrtRjW3vsG4Ng7Fz67g2gJh56",
  "key11": "riv7H4yD7UR8BSy8kDZwDKgv4Wc412CcYaSiujxbrKiGpWpH1D8Zacy8DA9wCXrA2hVnfy2n5Y8ijSfcWdGzVr5",
  "key12": "GrnmCEbQ9f2cFfBbTp84gnwcyANKyVniAMDoZHTn8gmKzSNaA4T2UspqvUMhvRzcL1C25WNmodsUqDmeGCPB1Co",
  "key13": "23QDEM6YG7oJ79rgy186pFfpwj9FH6XyDaDA9BVwyZMJJJ287SFLPP9wZuSpznYzshjFCurPdjo3354GNpRLrw4J",
  "key14": "229wCSFtbJ62wkUPprorR7iJ7QtCm1aFp8XjQYh48rZH7PBi6Kv2s5PWH6L8EJRTDuJwyJ86eDhZBmJfT9Y8KJoC",
  "key15": "4VrNcjs1Thqeuaw8RKtfrqxatQo5WbpAwhYWFxy6EnHLwSxfEzkcbiHdqncS62YhTisvyJEChu32Gmp11bAYLWP3",
  "key16": "124gytuxfBEixKgwieuadFxJeXL7GzCnLYytzkRs9E2FKea9bms5SgYCsc3nGN8199jHtZ9Ygow4QD31AmoapN1D",
  "key17": "27F5Ag3D91H2mG1PSDPG1KAqS7RKi4mWphgfA2UQqi5ckzupkeJBjqtEh1LpKip2jpkmr7J1JLnWpguH2i5XoMt6",
  "key18": "5PgSUbbV5M8dcsJeSxkgmKbeQbiSuigLxdvLcgAAfYuy5gCf8QFeqBdh9HN7TwSUCJdRK75CLeAbdwjgAMqesatE",
  "key19": "3iz6Kfn5hvaPU1awM44ru9Ccz99zusD4YFbjnMqAEaKcBymAviH1rJ5EiFq8ACScvSPfNkhuywNDT2JVK86bjGTD",
  "key20": "2ehQZL3SY5Y9ZEb2kdqpRxHnDTtZkzs71RiQT6goxp3ENPJf1KWFybHtXsNkHNzKXxshXtZFoAxb3K26srMmQW1j",
  "key21": "22TVydh4B7gwUvcvLKXNpZnyF7RsZ6aRTbJbaSahefYDyWDpqWF7BMFUL3W5hN48hYC91cpLcdM9FeFScfL8Sm6F",
  "key22": "2k84BCnhwE2fx6c1RjJeeMaouSPvfgL76rAb9hTcYWmts8tttewDDrVzRbEpF5MZPYif3T5NnbnRwsiUV9U1thif",
  "key23": "3ydE3fkvN9BNx3hFytLDrhdnbkkSiJWWn8sHyr6qZ7JGEz6xDAPjURFTXxd6KLy5tQ8VmYmJzs2hJdEBgwzqXYkH",
  "key24": "65527Ms7zwGroamDTVkvu86Y5Esis5teQaeskzJzBEdLbbvRpr3cBdU1w9FvjqGMRsfVn7vNqoGTPHA3jaYt3kLu",
  "key25": "2UZdyKGcRAYvoLc6TyWutGKJ15XAqq57AVhJts9sEg2mPuAuQ3gvGrG9HyFnLwb192dch1dwZDQHHTsLAMpETqyR",
  "key26": "2SYRfqTusbryEMkonsx8D7GiTYpyDbHxpP6zg4RRfbVmytWHgCCPZEzbEJzcRPiV3YJVnzs48AFgBdm1WxA4bSsC",
  "key27": "SFMqurmXH46gLdcsbYwmKqmo7RmFdi84FmMhsohc7QNNBj5HtB2CDcbK8NoBtQM5ESkEehxAEP9tu4Bv7DB76dU",
  "key28": "31X5Jc3B5g8aZjLRA3GyZyQTAYhYnufp4FaSDGY5jbe7bjtYYnr4EfLCTXMsyR9KGv35p2MnW5Z2cDT4JQy1f41k"
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
