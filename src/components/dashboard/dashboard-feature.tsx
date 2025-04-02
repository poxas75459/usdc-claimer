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
    "5LDxvGuRkzC3LxBrifKtpv5fBkGsbCKJrwz2wFkPSAsQuYnge5YQ4XdoscazsTjh6Sr6STzdEAnYBKo786uoJ6ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sFxKbrgkNavbraJytoym8atpkctDCDNYLCDq96h8ESsRjjRe6JzeW1Wp1tgoziDNeGjWoNGyB5xHXVwoYphHTPd",
  "key1": "3gpgczPxY2bUsyYcoH4h9WRwcvyC7owghJRsuXe2LPcW6VfCH7e5Ggv6tGMBnMUfmrwe5SJxxDjkD3iMtjrkCB3k",
  "key2": "3zyphaxTcCudi1h4LbE8i9EzS6RMmszpbdQPHDn7vb26neyduswwgcfxko8TaVZNKPWJiRfwqbntVRJ6mPG3H7LU",
  "key3": "tBefSAxs8VdtBQy65pXo3iz1sXmX7ozKZKKRLTPaKNPwJShrJE4niG54xZjpzxHzKogPrVb4LHKJzSFAhaKS395",
  "key4": "4qesvmSVfpJ4zcHnt5yuSmTho5NXu35i1fHfpgJujZ2aGnZoSGYjsbE9QxE58yMDwdkkeeXiCwVxBJ7vJS9aFFSb",
  "key5": "ugrADMXb8w3Saz2oFyfyzFLMZU2ay9LXMekACVgayh7Uvwgz6t1q9amwo9u727swv2SPi9mpNYBVncq7NuMvisj",
  "key6": "2dXNabyGyJJmFmFJAHBTtUkErhhGnP7PazaZj5brznYfNKGFXTvh6ARAKkHwPgmUTUBenGXpCXQBup8dKa4WFp8",
  "key7": "3zutwrMCvcUJzKMPmSU2iLmUTJVnJCJXaE8wGo5zgzdwG3UYKpKzViYQiMkfcyoprrzZyYGtGvsokG4vwwSgpYYH",
  "key8": "4AQ6K5YYkWiiFEeZx64BCo5oqXphAYVruDVy9quees9zuWXTvYmQZkse6y4cYsySmspXRyDiok4RYE9WaArfq62H",
  "key9": "4k7bzUexRsq6iwp9pHgpqTrY6yuB926XgXgicyBVXG67GhPDnyvCkoMvXiBRcRjQVAhoET62KxJn8idTTunDw47Z",
  "key10": "5gSgfcV8dHrKsKHPafDC3EhvRzJxe87khvoRrMKqkXtPZQRx1X11GtXG3XpCKtmSdmbr4iYwDUoGAogqADC7Mdpd",
  "key11": "4GZHEywAarKgh2Wp3Ta5AMRoeV2mCpDxrR7dw83izoosofn4nyE8C7ouc83EtHukdYMnpuPiDfLeVV5ZpeDaK8u5",
  "key12": "4eyKuaDEjswkDHPRSNJoskG1GbaDqARhDgCtgpLEskUFCv6psQoxkMT5JaECRn4BiLzT6Q2xTB8StRPUBJG2Joaw",
  "key13": "57MtDN88xcammUc1Lxj27SRVg2Akb1HmnDyRfKjGEdrugG9ER6kMVYt6Ytq4DK4t2SxtJte39Xbn3zC2f8cUqysw",
  "key14": "1maXiMXEfiuWm3A9rKfUi41LjGUDKyor9iYQB9kbW4abKm1r9885aDPRgHZbTZtKRw4M1CNk7uPbS9S1B4fDay1",
  "key15": "5f7vLzhcs4Du7MMz6FUQyzXfceCDf4xDWkj8L4MwSgLfzs96TgpFDacYswMJRBQ8ts6iVn3AbYkz4t72KeHvGuFE",
  "key16": "5kvVssH4Ge29rJDskW3oh8rc6JGo7eJLq4RpE7sxLhVapqtm1ezoCeyHPqAGX9qXaZNeUFXv5rhGDo77ww1n6cC5",
  "key17": "4NVwwfg1HxF7bgwwTJ1jTvxuwPg1o5hLY1xdUdLUe5vFXPgSB9Xu1qp2xQges6xf22ns3cCDek4QkdWpPMM6JUKN",
  "key18": "3RZB4HkDBbSZ8VEoUhpR9ZXwseU8AmuHRX41VKJoW57wPLtLRjiKV4cNzVTjnKZpYhbMDVoE6ovY7A1KFrTniN3b",
  "key19": "3Wbs29XvHtpHqQGLDPMnepAoFWqKAVRkicUZPhxamzjvkyE6tcoKJgJD2VVxqbEScRcWPs6CeJdHTMG8Y14qL3W5",
  "key20": "2bWCiKuJrq5J1D6fuNFmpXijiWedkT1C2hUsU4UK8ztRNvx21to6R6DCXivDs1vsjhr67nPx8W3WAsD6G29i5RD",
  "key21": "42eLUkPZdGaBBRdiDhddBrqbusNaf74KaXTC3piHTDcd9E7VXJ7VbAnxLwF6Cf68z3ZF8vTYbSV7gY3dq2vezVW2",
  "key22": "4u9s3Q4kM9UokxxwswVt81RjkQCPEBAo3YBxwe3MRYTEEnuQtKLT5d42Vgk5VZ1nL1vVvKWxZudPhkfqewF6BxmM",
  "key23": "3NJqaXDY4fKkdFUU3gkVNvzQ9B7WN1hfTjW2MyKxDUseCrBrV23q8k3c64q6Uz5FeUyiVcxFVAVweFN3obbfZJCz",
  "key24": "5qNyamkhS5T4TRUoSEj8r1b11mbxrEm4uKo6CnYxvDXf5BV483m6bkHtv3MANx24tZ4SCq7VQ21WEYrVxgDSEU4b",
  "key25": "3CW7s7KrUwtQF9Z2jKhBG2dZAdvdwzffofYRgaqHQFBMNbQVaEdtFSsPTrLvmSTwNyb1nq3SDuJwZnjGf54DTK7C",
  "key26": "3dFJWLgM8LxkVZYxAGSQH6ikemwd5G2MfMKb8WSyEVSoWJaCRvLJRvasQYKVfDK6yvuQ8C7qQ9MersdcMkzVUAp",
  "key27": "V4GD9ZakWppvTQs777ae8XygAMDQ1WcGWFSicVFeJyLTS8yG3D8kwb5ZD5Y8VG6KL6UNhhA5WAyQ5f9U9BxqbNi",
  "key28": "5vqRFrBpbn8PZ5QdYDWBCD2aWtAL6s9NMS9egaTJGVunfBhsLM97zKq55CcggwwJWZC4o4R5sspq3uKpua6uVR5N",
  "key29": "4jZjP3FNZj52oFRUkpBhuKWbubiM7qS9QjPPfAefvmAHjqFhdQqRJ5sJoUG9HiEu6Bn6sF6j2CKdiJViC7Lnm28x",
  "key30": "4c6qAgTD4HX4czGPFjyexUhaJuU3iyMTkacKr6E8wU3DdEgTE2YgQZ7fAVqpnSkKoeQkgBf1sp57ugJLES8EDYaE",
  "key31": "4FGmZZjXuFEUK1CG2siKiAQnJ84R452YKuJsopX7C67qs1NhMkHBc4hWiix7fEwoR3J9YWdDNdYi9mw8BeGdmSuF",
  "key32": "4gDnYgJSyMUTmg79bGuzsAh9o5MvYnHhAC9FLfTUNdNiPmCtAGuTUBBwQpEt9eWrGU4qgycWZ2q3fPiM1n2C37eu",
  "key33": "5XDaWpc7vqsQzFPR8N4cfMTqtiwqQmFmaoX1WH9h6wwcJXeqg7EyGHPESHwWqnrvHK14yd7W8bvpHegqLDJm31Pw",
  "key34": "evA3r34Hp8iWMaa763NXnfGtaXwLf6bCSQx2u2bFXNxTjDCNwNeoRWYGfQp141Hd5eERrABnvgBjg4PHeaQjbmu",
  "key35": "2hszwezERQUCYVGNmGEkU57VXW5XPNKXFMMfuQjiY84UWRh3RrNiZkasKfPkCPs239Po8z8fAHWDmyaEfyky9kUJ",
  "key36": "4tsA7AcRc4qSnZBtvwvqGBXMDUHbLgY5iSUxafC7PkFhGEnEjQSSumLx6Twt5eMprw61ZFE1c2t5KAAy3sXELKFn",
  "key37": "4RCqqEyV54Kq6wbDa6nL89XEqTML8SBqsJzTDEVHQ2AShHFThYJP3T5DWaFsn9jPz2fE8vULKc32VCCcbh4uJr7y",
  "key38": "3maXyNAAn7H37Whqn29jsPgg2nP3xpd7sGojc1SYfPE2oR1DfCNDdDXLgqWXC3SLUMUnVHKSoJKkBpE7hKpuFBJq",
  "key39": "eVoU69cZsShrf4213DXr3g98fEj7G5nCaFmV9b1VHh9Wskq1YZs8tpQiJ3LsK5byFPeU3vJMs5gUBHynGgxCE2y",
  "key40": "9sKod81psPDbCXUr99EyZveMXjZMQk1TWKi6sPUs52fa3CLmPEfmqHw9tGHYoB4DdhqmYvKHqHfHDSmh1z85MqJ",
  "key41": "2kosrYZcz1UagGf4cJnf5zTokk14KN1QbvaFXKZM5BeTge7ffYDUqYGMqbwiP5cvPSLFsNhzigbKmAdgE5ji65Mg",
  "key42": "5j1edrvMZ8SCQFwfuDUhi3FQJeSFtGmff4vcGCVwrgQ2cLCe1TrsG3LUa2TiomG1HgFFVCusmmSnhWZXVSSYbCU8",
  "key43": "3dGz7qVA3Eb7iydQ9nFa5uxvBdmGwgi3zFD3qP2kHLoqCkAWK5FwiKJ7oxoGFVdLyNhmhQqsjWh4tDnT2kBYzoyd",
  "key44": "3q5HxBoVpYyj6nBeb5TZef8uHvqPpzx6hMqKhhwQUr1nqkTVXTpGqMnzncZvFRBdnp1tSxHcALg5J3eTXEaDn3jj",
  "key45": "33AcdXHfisZ3qjTeLZ3sZPxYo3SNsiZbRQvkr2NwwcYWWRSsfmME4NB9GyikqeR7fDCVq6dLUAdJuXHNEJzVoUzg",
  "key46": "3JeTP5oNwDggKo3vkaPry3vv2gA5D2xNkyvfcivuRNGYfixKJqqcpiy6RGs1WGQjmcUsG6GtGd4779LizfF24Gcv"
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
