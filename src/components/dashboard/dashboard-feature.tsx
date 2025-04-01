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
    "wZfHWuWpqpB57EBansW1rkj5nS6Wf8M8Ef3Q6wJecYr5NKw5BCham8A6dC6U7z3xLV2hxbe4TPkyr83ms8Z3JT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hv1WzgszvH1EdR1FrWWtGTryL3dCCHLBygaXLyvTWx5cqmr2NdFKs6HUr5cwFvaFfPSz2EDhSEbEq3drthxt9jX",
  "key1": "2b78dygrH4rtJh5fEQWQCJ6MJMvBLnobSd6jy34XT6YCsvzxyfyBYP9UNLzrvxuPTwgiQx9rWAxsb3Pg78ocCEzM",
  "key2": "jqWFKsPJ7poHjaAs31GUbAixhBLPEdL3ehA1mLTrHinWtX6cgqL8WGcBUipUnPZa62S1hj4MJkRT13xRyVxWdPu",
  "key3": "jUnqWRnxn5pix2avk2erLdjjQgZyiJxLCospJgWrUJ9GLK1UmJewVrXFtdEMFRg3G5eNJzGsLnzUrvUFL8Jhsdf",
  "key4": "2TrG7nYVu2AFGxKe2dJ7EbSCsrPh2c3wBkckrTbSH8ykDzE111bFGQ3BCxTbrkn2DuPiXXokuoNtqssedMHzg5mc",
  "key5": "3HPTiYWQDPZLVf1bDs8h8nvRSV9JY4d9JKhNmy1w88x18G2GWjZnSntDrmwB5RVkSRCjqSBrjZMNdog7mxpahN6Z",
  "key6": "35ApYErahrJt22drvfBWcagBCtqXyJvxDRZehx1BNGp7oz7LNi7eD3K8PZXRRaxRWGKrRR74SK4oZfHQRpLhv28Z",
  "key7": "4KteGFtCEQAZpKxBeT1hfNaqhRSz7VNJi2FhfX7QZWmQLEV8XJyQTK7hW9quhpfzFgqUN2dzrTnnTmw81kEoqP5Q",
  "key8": "kzAV6Reqh5j4zjA8RKWUvnQawTz9NdCA4VVejrgg1LU2K5M7KLhRa93BRB1aCCDaFeHi5zPriPhco9JZ2c2S15K",
  "key9": "keNHNzFrNG29cfCrHABJsD2ak3diDSBYtd9gJNHsyG7jXwK8ZJYyNbpf1RXCy937vLGi6wSUfkVFgQNrf1tfw4C",
  "key10": "2sR6twA6eYgWe6ZDCSbj9GHfceJyJJ1FJT8U6MQf2jETH6UYc2BokgiiuvNQe6wLNxoZJEEuFp52UCBZhkgjafXY",
  "key11": "3au4LiwtQVh9HapYjvPvUMqeBpuQ7s2tUACap4znqgNHhtAopX8XDWMoKPiu6GyF81YEeTrBX9Pd23GBv11nWAbg",
  "key12": "4asn9D2DkBUbooHUrTYHigTdrqZaHXm4Qo12tmK881Ar6SBvJm2aXhbd94YW7okPBD5wxhZAva6ANRvEC84XwNkh",
  "key13": "5qdyzBT5b2QkKqRkTppJ2s7ooq516DakVUEAhqKugDGyhDia8cPoH2urNG1EyhXDThRz1h7tSpm4VqvALxAmwwgA",
  "key14": "eEwWHtCcrGoQ2n7RpUc94U5RYcALn5LpKLUtLtzWAZeKQskiCHw4dt2C3Wo9RDthXGsdSVTxkKtzzCrEo4aeW6M",
  "key15": "3DqoWGcdiToUQTYdcYutKdbkAFqGJVynzGf9sF9dqMdxoBEepFzkWXpRS6oFyp6ojWa5L7mE3PCXFL19gRi2N4qY",
  "key16": "4YcgNRKvMahcv4v6nSn1WG8dKwJBPt247WsA16x98zQcEnXrqXRnHZH3h4qYqgcYMdE666td5KRLVDarn2AYUUK3",
  "key17": "5UpRS7xXeC2schjv6xwu8Wwi2dW9VB2MZCJYphDyVBuSWrSz2mkZuupvmJmnfXd5iAFCPhHH5UN1AA3SWMJWyPrF",
  "key18": "5LzUKK3hpJqc3i3bY2zpV5aBm5HVE6ydyx1MRh7QvbqdJqayrnccoav4CYDyVVwbADhD6tC3CVDxopGGqFoapBJo",
  "key19": "aSCqKK8CFgAYMfNrUwsYyHLy2ebySQ5BjWmRb96Dts7ck6JhPswXEMFdXrvLknsnucKs5xET7z6XDj8i8Wuc6M6",
  "key20": "59BFiBDRSZ1f8NKsyZQx7R4qiWEr1QksnFZpSM6KofHAnmJonyt4k5BiQiYezxiJnNgVGHUSS1Pvnh6jTe6cyaws",
  "key21": "57KpTF8hJ16qsTL7huBmPi2mKzL1JLFEqMDxkeThhCiM7bn8hhHrHzTMpgWE9hfgdT7KGBBYpyG1rzSciyeLYs2i",
  "key22": "4ZmHhunrrTnGMr4oRUJ9vjCJ7t9fYVJwBgz3q34JMrquxVnsuiZjrqnKTQq7bisDjozfZjaRcuhyffBHhThGuUbR",
  "key23": "43ZmmCwoDR23YV2jNa41w8sv1pTXnLr69szKmaDabsoP7Quvjvyi6ypfLDuEUHYxQmH2rfXiA6ssaB1z42jmh1SK",
  "key24": "5nqs5kJC4oj5UGQUvucPLGX9TTxcC6tvoBeRTp9yXiBwdh9TwsKimSk2uLzrDLad1FAx9XkMcUyw8PcUatgYpgy",
  "key25": "2Z9eVeDLg99XePZNFQdwFzcXSSVfqwwLR4rE4GQavatATbxK4K8vUNQuUtS2R5xxnAA58a5Lh3YVVTvzE5UPAccX",
  "key26": "cLnhfLUqhGNX4MhXeeZhk7U7S7SGNmMquH6Zy76FhyW4tNE1yQQhK3NaghvpSru6YbWkcv2PDX6wBEu35s2Nerw",
  "key27": "2C7kVvwTDo1cVFqZc9QQ8EGbdYtFmHj5A64nVQWL2ioiq3w8ikSAAQrBJjpw9jq4tEggsCvncppWy4Yy3xqkLDFq",
  "key28": "2AbDxddzXiot9mctP6wohQVTuKMCjjbKpRDC77yU1jnQSLshUxQAN5APQFzY3kPPeMCym8hBssSJq2NRYTgvTMzB",
  "key29": "fuxCNAVoxBtf4JBXCyUmqBvCGgdmHYEwZ8bWMcmR6oDJPBeASqGA6AbwwP3sWYdJ3fD8BMNnvXMaphpJNw2p44w",
  "key30": "3rKBFPF5XSKQmidkevzi76Ku9FVY8Tk4pyjNeUd6Hdddn48jv3QA5znzWWKj8JoqrK4Z9DmsXKCySWeVJPx99Zpo",
  "key31": "4hqExpYvPqEqTjhSsQGzpo15dvwFEbLE3gvZVcuYcvBZ35R3JrSr9yxmyu4NCKpGhjQNM5ddDCixTC2HqiStPY56",
  "key32": "3pUpGhLzhPBVhQjSRyeAXXurjkEYB4QgFCMtTEXiwBGUozhrogvQ2LKJBKz3WpZq6EBz6c8LBYzHXkGiyQAxZMQn",
  "key33": "cWw5Ti1FeqxFV5s2LG9j1tdNxUf2Ct9gZsPh56acnAyuwbzicuNYKqF8zEFW7trh6Ecbb9H8AgQbAYW3CkSKMgD",
  "key34": "7bioj6A3xo5eqNP6v3TtW6JNbVUznyhUgtyqdFcQhYGE7gF8YQMCLBLBAKoZxFd7Kad3uokwz2v1Sq57gG2RLaP",
  "key35": "5gXhnvUsbiYQ7iuk3N4pzHciBLVLVnYgDZbcun7gNivJxCaTRUe5y7Ze15AdeWgS9mLsFE6phXo5oZN4XJAYrSGM",
  "key36": "3UghyHz8JLXwapFrfjNPbkDr3KFdosEkVpsnMiT3CZ1QBu3TZXiTb4Adw78Qb7W2KeeKqMaHhfiro357uNuhFjPc",
  "key37": "4sViesPA3YDvAJZKK1a4CyXiPfbjZUmtiGUVhg8x2oc5MYHZd2P5BCnT1WRPz3ncTsyVQqyGYxpdg6n5w5F1xB8d",
  "key38": "5C83UG4DkVRc31qwYuDC5cFvzHwv7ZvcDcEkgCimN8BtpbcBqm2YQwtAdm8xr4VPVnYDffBWARB1omRYfZ6wQtWb",
  "key39": "TQTsDS7YhjhhSpttFhGxCA7qZHtti2Lz4qi1xLEqfFVQx6F2QPdGqxQVCNihVFitdeSCkcFcB8KPxA5f2g8uk1L",
  "key40": "45LEYTFhWYmSRE6ZYUBHMLd1dHrSxmN3tecx1FEcQgSfV5N5Ezc9Bkq6WU4TeXrzek2Cv8MToPj245FxGoR5qJjS",
  "key41": "4JRPkbq4pW3Q5R5ofrzZdtRdFxox2HR6CjgDNUW1ucimZnthaCcZsBU8exoMZcqvTjxvQ4sS33usZv8qhzFbiQna",
  "key42": "4C3xnyCm7DX9hwqqUizRNfFWCW4qbRdYa7kg5DsgFjhcSL25hjws7AC2GokZQCR9DZxd6xiMUr2A1gC3Q3Sqyjab",
  "key43": "EwMojfo5BxFaCRpJS4njqmawD9BwqDC11HurBs4bzXmdVNVgUXzWc1wymxLs4fXm9Jor4T84Dy6jEiifmJWPDaQ",
  "key44": "5nsrZGMgHqW7dTTqYktLsK4p3Te97H622nyp8DXpUAPvCEXWQQpcWeAx1iuVLqjHN9N6rEyvet1E1F3aUo8as6Fd",
  "key45": "2KgumtaXkxQreLFWgd6eaTDWcvbEKcab7wXhUQLHVh3tojGaztouA2g4NvwcmjzsoQNKxVpLzEModPhFkfAss7cZ"
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
