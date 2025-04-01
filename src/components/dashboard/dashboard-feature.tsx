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
    "2ECfnb2QxVF7Ba8yKt2TWDAWC8mmnAm7C3saBUffBSq6fm28XM9mL5qE75iVPn4cwBc46YcHbv41gGiCBWKEhpRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31oycDN5EcCa8agMVqx7nTek48jXekU5oxbsmsw3BFPAwwQt6xYy6Lbpkcir5d65bynxnDUihmzJ9uSj7GsaRqVC",
  "key1": "HzVUdHLGA1yPYadakjxxVoVoetqUyC18UTaKwoF3AvrFVTEJsamm99ZQfBM4XCpFT3mhwhuNbUQd4hXnK8zoBJ4",
  "key2": "3W7yztAnFg8TinBatYs4m8KvitiR7keAAEPp1cRLEAiSiNbCgxLBrKfwi3GPELhFmPQ6PgMfUdJGKg6ES75yE298",
  "key3": "41KHYtn1L36P1u3DKw7TZtAwCK76FnbVVnTKg79T5ijWxxzvxHdENkRbtkU9fwE6uGCaCvwWetGCrs3c3CBsuKou",
  "key4": "3UdYYgX27DA6iw3x2EjucCqUgwuezKRcdthFBBu6ADYJBdWnihedJUEda44jbGZJTytZfHKTeAAQcXVqX13WdpQy",
  "key5": "29Jsb2768NxotJyr6qo45c5rYkULugFGF6bgCEp3Mv1tZvSrXK69ydyrNEodKDZ6nc5xhCRrdU4rbzBsFQ1drc9q",
  "key6": "UqWgAcoayGDrcXsGwG6VQhxry7fbbCufERXAzvoFhzGaRkfXJ11CAREuj12qgFBs4ifzuJ452QGkMbcQcKi1CRt",
  "key7": "3yR3Y4BqxtkxaNjd2zaYC33eRyKXvkBFDY7HAc5DGX5WAHheki9rfZ3YXcUk7iGxgG28FQ9vqzNrMp6vrUC2W3fs",
  "key8": "9cyHUrznMHyinpMK8UsLgcPA5BSgbAhvt55h1isibkbEiqUMvYV31pc7hahWCus9mqrZK6J8gwnodh1zYQ9Fc4z",
  "key9": "5m2JGwVe2RYK68U6gNZqys7RKqW3wo4RBmNiu6pj1DW64mkDci3dbzogbr28XcGuqg7xwHVyCj97w657ZV76T4HF",
  "key10": "67EtAfVJZFP6cpdtBL674S4F2j3ZypN9EGG1hkS3WHGtmvJjZthv3V85WShC3diuRqvaNoxXd6tBz7KitdAm15oM",
  "key11": "5Dar5zcorhdW9VaeNhdS6M1wWyQS7kTtpsDMBan89snHiipVJn92osXaqzNKq7FMvqERUV6B6wBCi6J42vM8bWHq",
  "key12": "5yCEx9p8nTozdJaLqdfdPRJKE1W5TVmQ8pboK5MeCRExHSWEmRUx3fPwnHc9Wg348MiB5ZukYNy94LqyHcd4BsdK",
  "key13": "4uAX9YFz5adadCve997sJf4qKPiyBhtQoBoENNAr7uPcj7U1FFQ9rB9NbiHmZinNvE7mCsSpy43CesAahMSFcxY9",
  "key14": "LgT92hfmNoT5JdPMhGCxXoPFHc1ic62G6Q6dv6kTnb7crmBgSeknvmmTnnHHD7UumHZZfo8LiCDfDzHdwkbycR9",
  "key15": "2CQKDofzkaCMrsTokNFJyzphnFfejTAQn2Fey5LsGsFDoc8SzCYqGDKvBw8WEoidmDCQ5HiWhSedMESBDHdDBY3W",
  "key16": "4ssLJEQ1u5u9gBXKjVPUEPJJVhjPBszw5j5TN3a64fVwbNbmPfovMf9oQT9tpYkBUTj9TtV9WgFHUymMAoUd8rCF",
  "key17": "xNiEnfKkB6G1LXta7caed2tAG6KDaQ3HHEUmw4r1B9Hrr4R9VdjXzknk4HnaVRyxLa3FDuZW964wFZR67bBCW4j",
  "key18": "36FQnSNExh7kQ8s5nFYm6JNZRDFN78o9PWM2ghXgvfzohhQd5xht4p29mvHmbzNRUKVtn9dn2wjVnzinpN5AYCEc",
  "key19": "5EgsoL9SBhpYYFHTWRzrg1rynLyy5jk38k72hVtU7Jfinwwk4eq5igkHgVDjGDugeoiHAqXZ51fSCRs77gFxMV2T",
  "key20": "hYpbkR1rz7kicVaQHX9KcqbGGr5n3HovbDoWqfRp2eXHYoQ3XDcVuhtr6LwQUG7CoQnZNRH2YPKiP2xnZfgrDjR",
  "key21": "35zu3w8REggL7n48mGyTstZ3MiPtSVhoMboFp4Ac8wypQ8TBpXYjY9c59j3GMDS6Ak91mb6ERxHhZSXSw6wKGffi",
  "key22": "43HAhzUBve5NJ9icBGqC9kb1KDEyuDDxvgFexhnSjMwjrqT7w5EYpqErQ5UcmoY54UpHz4ywc4ToXwd7sKj2CnDy",
  "key23": "DtBzPSwUyezKscf8y4t7eM7pSuL5HGmWvxcjwHK2s6ey47Vu5sj42kFdgW1DdL5Fje2vQuzvDNWSkjycbduBcNL",
  "key24": "4PBgHQcQiNaJqvdn8a7K8y1GViETwUrZpvShaYNXxJc2tpYd7kd9Ca9yJTqbRTpjLJ7ghxk7tKRyoDvCqWmSK4vF",
  "key25": "WtuK5qDJjUvZmtuUpQMQJPBqut5EoSvFZRNwqBVcFi3cskk64zLSQJeGFVps9T1WZ5idU5eCGnfwM44dByssu1W",
  "key26": "5X751H3K3SX94QMu4KB1iK8k9HMCQqi1eGedMw8EkbEDyjLtZBf9iA2V6EEUKviqkneTwNS2NXzmQgC3M6mQMeVo",
  "key27": "52pG3dZBR7iMn1e5a6F7uPocV9iZHgQ4JZViTHsCMxXGdmpwTpjYgms1wCbYP7q5B3jRYZMfFjZuiQLY4hoc3ZWP",
  "key28": "2UrFh9WLVYq2ce4eRuWXj3tbbvuM6zPZ123XU852M2iUFysaAgGWcs7rdFEDWtgYk7LSwZKbS8uYVUhXTZZ3pfXt",
  "key29": "4iaZ45bRjRWEH4ghPKG7kgomLh9T6iMLfhw4LDM4zC4eHBUxggK2LKsam287Bm86hCWGKC5XjtW8gVxjDKScqmMa",
  "key30": "kP41TrBxRuppAgwAYWfvN9PXpZm1rTHetyKQiPcYGGXJ9pjn3zCVs71QNGF8TLWxcoUDvnHEyfMvoQNFPKxD5pM",
  "key31": "4PVtxKBDpddrUBj88SanJEyqHcvSyqu9USdPjxdbZcdReugw8ctKM5ALofJoZbhb6BiSpN76SrAvwSzqBefigSx5",
  "key32": "84zMHjj9MTf5LbmpKtDHucfgqhHG9pcaetkVHAtJ63P9ye9g11HZmikcuyWuBt4CYNr2y4i1bC5GmK8bZRL8FbR",
  "key33": "5srhFkVo5nxENVzT9xwqkuS6QZiRfFZ3T197NBfpbmc4Anr8jsxwfrtNAfHPscsM8JRXR5xNxNLqRYeALp8BJ1Jv",
  "key34": "5UmG4mSHBkCh9QnMWBVzrJ7WPymLuH3sCxJnp2DMEkw6waCXrgMJSHMF32BJfNJYQHvLyqqFneqPRZSbLFeox75M"
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
