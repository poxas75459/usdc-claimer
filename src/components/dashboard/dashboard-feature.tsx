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
    "W67HjMpwEP7Q7gCQQW1MxyLZ7CDMJY438rbxBfS8WvcRCBBRbWJDH5tq2aCg5gJ5deB3pyXet9tDUCFdyF5VMvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDy92ZaYyNtby2GpUfyC3kGp9srP9aPkqKNZEzCAE3dj4WSPpXqMQUxNJKoLWAc4eWnq97zDeKwp3uR3YCQ4XKo",
  "key1": "4E6SKybtJ4XooK7vHYUXsBgSxPSM16RMxhFLwbvdWfqusQaGNKKVSnKSUZdwmJRhsVLFVb3TV9SzrpmSGQ14Gu7C",
  "key2": "2CfdrNyP68X5H57uvBcufGx6DuMRenaSj2RJBVjPMRM5eU7PoVBCPrYR88kzfgJbi7ETYXhpsu8FcPi7Er3um1NB",
  "key3": "vnKNGYvAv7SF2hbARfw6ebprASQytpTaBbeAdMaxTZme8EmnfBtTo5LgJp2CNnKDNwfhWh5iXmt5o1u3EFUYEKe",
  "key4": "2kbs9e3LtWr4HMXosFBUrLc3DMiy1a8fj1kuQ3E63HQm8GT1DFsKPrVy2dHSTJp13tMNGD3gG9qsqUtnoSpiYWCq",
  "key5": "p1AUPaJKeFBaRNLLnRifCe3xeBw1uoxCGg2CWzf4dfX91omCygGvg9Guc5B9Fv3iDt5MfK4ougKDuahvguYfqu6",
  "key6": "ndnN31s3vxoKSmEJ28kE5sUeyJda4qoVxatLCMwu7bWCUzhRvPdPPUSMWhWsQKv6RAfZt8KNnT8Qx77bR924Yq1",
  "key7": "4aRmRyp1t8ZZHgqwaUMHiMQ2PCgsN2XsPEg5M3GhWbdPekkMadt8smpb7wtV86bjyRtZ4x6hjy7VmVmsnfFcHS2J",
  "key8": "2u4jtrJpzAe8BhvGKhXkp4B2U4xZLN7eMcYPXbZK7kAtDpdD8Rzf23bch8eCNcL6AGfMJVCVUvmxAFQ1MH2Gs4mE",
  "key9": "5RVb1hyKFdQ4bjKu32xJTCjcrd7FDr3Y7xvodzNugddScRAvF2CtZZM8LTcgFafCTNqHKMX4dta465pk91oooJ97",
  "key10": "4hvnPSTLr4XrAVGudqGP4MAMnX1dDRgSrysvUxykyhDMWedHkDXtHbhUtvmiXQRuP711jZhgZvrdWCSUeWwAFPoW",
  "key11": "yF4AbNbbdTvQjtJbBDCu9VEqmG4aPhTm2oqi5HJ4NHnenvr6VS1FTgnJeQKFZVqPY3nMpDx4a4pyhM5XAuNVjkT",
  "key12": "4cAKwnZMJHk2kvjTEittLTVDcuxPE9664TQJ56iGLmnvdCPvULKb1CMmuAE8QQ4mpD8SoUQz7vHB4QWhV7Bq6bGR",
  "key13": "ZsBqaobExiTgQo1SGhdpuHEyphQN8RvoM21zM53y9dnPaddt14n29N2o1Kx42RurPpYrnannhYv6b9FM7GH7Hbv",
  "key14": "25K5Ee5E8ndPuhni3eQoT3wFJN2XWsUuHKGmXiphA31akHdiPzFnSQcNr5dyY4qQEb3SKSyuofptvt8ZHMSXCsAk",
  "key15": "5Ly8XBNAnDDP6ahyq9FkKzFmtohDwQK5CVHRtzg3RbTUMYz3xq4QWrpVonJ6Gr1Quk2udFdgbhR8npFHSeg6utPw",
  "key16": "43yYoP1Tpj93Aa17jvqWz5FiAH3zv2RZ5tPG2EnskTXs7FC43qfwo3wxQDyabXhU3PrmGw46dyE9YXhVYjLhcbB7",
  "key17": "2CGVQ834Q4et6FR7n5NJbo8CfDhnuWE4g5GB33mgABt8kC1ME6q1qqYXyUSp7GTpjnsWMzcWqBhfuDctorxmDJj2",
  "key18": "5RgHin1VH8KRx4oxzEGACiPWJGbB9kBapW6u6W8YyTNXYnVJnrgP3ttKaSC4DGtFMyUeBMKNs1SkFLxTFXakFdf9",
  "key19": "4y7sCerbeFYTEDSbqD5QaB29MsejSWmcJZKBJdSNJsQ9DjgvH8y2iYpua6GAGG9dzRqMBBdAUiN6nbducpGZCNDP",
  "key20": "5oJ5DVBRZws1ovLecJoH83AHfBX4xTEnBqZ5Go31yHNZA7Q5LrG8GHx2XZJRkc8Rc1XnQFxMDCByU97pkd1sdect",
  "key21": "5jTh6TntjG1gHLK3AR6BS1HoKKpV3NmyGWWaMNbeaMvhkjdzYwg3tQ3jY7C525T2DoHVsJJRVmn2L6miF7z98pRA",
  "key22": "3uxvtryjhFiy2usThaF9cA46B5ErJD7F1GjKPsrD7H8x4G9n4gEXpYBL5qw7S2uCaviacuKHQP1Wfgtn994R51dG",
  "key23": "i2skFoWtZmTqhdbGLBCajgr5atNLzCXnJrPWqjCLwhw5MFTA2RXfr5vN1vjkKwYHsL6zyPd8vNA4Dnym7Sz5CMn",
  "key24": "5Zi9MQV3Twr3pFGf1F2pncxPDCFjyhN35Y1L31EoibJhovAFfEVp1b5Azs49Jn6T21wZVX6vfbaZCH5xByALW3nA",
  "key25": "3gDytRjErwkYArGCPoGzfCwSTm3trwVYmoLB7dQYByMBW2Ly83w8MctGKRDUJ1uJxSaaj2E8hZAX3GmVMEEcTQv8",
  "key26": "33iBXW57eQuTwCY8sBZLxsc1HXgKjYDjzNXoePbWbPPBUmAB1thejjRVXC6uuYgc78hzoDQDuAYWq74Rsav3V9DC",
  "key27": "3YQU4xXkvW32WuwUEqdoD3DLEDtntHoizFDG3AKUEFeWBxCGugc6Buq3R75fh5ywDudyPxjuf33TtXuoDzqjaCfW",
  "key28": "62erjw7Vaxi6qY1wo1ZPrh8sEmL4dX1L4cShSHssievMTTNbDu9Q9wnTwgL7KRVfphUCot4hGbzV55SSto3MtqLk",
  "key29": "5ngHN9jvMTywvheJb6xs8Q4cWKdJDSNNLgWFEAni7JrCj1NVn8oMfNpyKdgcXBF418U8A1N9JYPTbQi1TJHtKkcm",
  "key30": "5DxKkwAXaeJsc3KuNZPJWQHgBkPSLz9BvxQdVnoJNDw8eAtkDqcyrswNkXwRLt1sK7Jz6BpDPeek7HJ8ouFuxZPQ",
  "key31": "4dt9kEAvjWwidUxjt3LmAHaGsGYgyFSwat8KYxvKx6Ry4KUVPa2ht9faqWwQmtGDVC7VFbDPj3J2np2CPpfh8Sup",
  "key32": "ahEFGkjxjNh29C22VQ4khhoX9GAya334K2VraAeV2h58MsCsTBKapeYt4BNKzpJJV3Fp49JeJn6vFogLNBHUSiM",
  "key33": "5nRbr1aNPq5VPbmqFZRAFWyZGvq4wK5hi34LixocWzAjovTSJcKZvzxeg6tNEsRQ4udzcfcHbfH5EzXobLYq8YiW",
  "key34": "46fbFeTQeqxK1bwVidg3PN564uvpKam8Dox7wDGtgF9cQnXz9rAYZ56S4nTN6uT8CpeYHTXnMhaJHy4K2UU7ZDmT",
  "key35": "3NqwwQXaQMgt1RSfwnhBq3wTZwuop3cpLaqA1P53Z6HtbAbZe8AoEmTFtKkayfoL9rctWaPquJVa6AnTcYCs7vnS",
  "key36": "4AbucdbYjgUVj7xwieWJZwTF7f2vCNe6Hy2UcAyx6jnBFq29ndhuChyAx3dcwTdVy7vuoYXtSgEUoLoqQ3Nxw5DB",
  "key37": "4h6P5Jhks6vFdRkwvfN6MwuULtAVFR1wPNXkzNWmcqFxaCtvAEP2wbYrSXQr32ieeUeuYTAKTKfEXf7iokdt3FuJ",
  "key38": "5bBaDRjxyTYLuo2feDK6a4B1aeCNvu3xq5NSuQ98jMBaMTPhbqKZ3TssnSK2of4MZfgqWkZ3hinRgZ2qNLXnJrJD",
  "key39": "29isVwAbNtVoUnqci2boWPJKMrEDgu5GBgfYAbQpAR24WhGSakthqB1SFWHQ7WsLQV9YHbrMyEgrL2nMpZY75znF"
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
