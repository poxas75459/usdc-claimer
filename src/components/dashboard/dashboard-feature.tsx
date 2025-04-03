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
    "5PwWm6Tuxx14yYpyTnfkCNU5NAYHnUS9bcRA3CGmdtQQeYW6MFxv6J6qGk6gDyq6fcn6YzK4ZGg46tzbHVyPYQcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kkMRoyXXsiVCtQqqqsizKRgZv6wNZx9RhBux3dkSiHrofNg7FW5twcZRwe5JRLDzmcTkpMbtaF5Fcm5JseF8ZYD",
  "key1": "2nPeqNbgHP1r2aNqCCfWmUT2aYo6CtbasLKmBGJAZ14eiuCDA75riePR3hfmvC1s8SY6vjZxoXSzb8nAC94jNZZz",
  "key2": "67ekPggX4xDDqXAdAuUq9rtdw5yk8ftCB4Eq5bRCgtNNnsEL6Jwz331iz7jiAo2nyS6k89Diic9uenKRvVn6h5No",
  "key3": "5xo46oAadyptpgwHfoTjHMnqat4YeyHuNejSngAUMgqHqLtFxncZN6mRfLUSmHkvEc69kEGjH5wZncRrhBvu9hN6",
  "key4": "hqANL4fLrRv17EQDLNySZ3L5vQihfqFzNxXVCJjHJXYkK6bUtWtrvSVMJU8CeNb5JsSX8gLAUE1VmEkyFhoLz1u",
  "key5": "3Va1aW5FgvvozxrYXPs1KhKeRg4JTDKCYf2p61d2bV6DCNu8hpFY5yKWd31apaEe1c6X8hUtwhTGo1zw7DU9a9yQ",
  "key6": "4LrHi8GQR874r8mdNaw5kjHL8iACh9EHZXY1qQTzkmMy9JnX1urzDa6PfZpKCBah7XhNiZzM8GoPUcLe8KNdXGGs",
  "key7": "2nrnqEhy6iNns4dNntLHxVjQaaPbfiY4TfkAdtgNzkidAjbK77kAtp2QBxMA2bQWumKdSAoto9ZS9RgVHe3M5Pcp",
  "key8": "5AdUZytiAz2gScwvchtLv8Y9efjv3CcLEr2zH45vPXh5aFYFoKgNapY1nCiGdBwLDNy2ZzRqXGRLnWnrD5TmXt3P",
  "key9": "2yiyfZYApAd34YDza9DDxWEh54gtFBPFeCDftHmZszLCtnewcaYSCPnfiMGQAE34DxyNt364QgJ7jcnf5xCek3Bz",
  "key10": "2abVLW5ExfBhJ53yKgjyJ6hK9u3X9YvcyFraWvmD7FekStoGmLRUatbWGC5qf36CpbZKj7Mjjz13hjwzmsr8HMng",
  "key11": "4zLuMfJmBwDiCnvMfENepai8kPzRADJ4K7cN9e2Bd68gAR83WPHm6EAmXkSVeoaJ2jAgPtK8VooeAcvPM5BxsrKy",
  "key12": "4kQh1nAPdLTfMKsJotpZTcgf7C6eCs7D68ZHPSVSdt8BAayzsZe2k6Z6ztLxiJyeD8djmVQq81GDizHjkHeYPKUs",
  "key13": "45HM1Jh1yeKMMKdgMwTzQWhy7Bdte99khpHGjTkm6TWWMj4SU1pZUH4hQe4tnnkPywZCd6as6VSicim9pD5znuv9",
  "key14": "22B6TV1xPEnbDypcvW5FUL7N9BzkSuNCFytpVGN1YJmcuC3XbHy57sM7QazuL4mHTzkyFxWFCBh5Kqdm4hxzMzuC",
  "key15": "5UvjJsqnbQNM5cymMMnUQvBeZhEcz3eShXW8dVfAHuh479qgPq9UcJtmMX7iwkyszwjMm1oVkp2j5bE9Q7BULRL",
  "key16": "3jUrHUxgfSp1AStJGcZtbRr88bYANxPvv523QqifyKxLv3iJWNCAA5Eoyn7EHNuTAfQ12bkYQqHWJknoBpT5XALj",
  "key17": "3KrL42nU9hgGhUsxkmDhDmxBVfKCDeBmQssq2t7fdKrE2vhEPS8YCRUe6SHSmqeuVeby1Pnja8kddsAG2sPRn2gD",
  "key18": "34X8j6NVrkK6fsgtoy9vDKRVVr5bfBy9bfDVqrQYzXFFMd9c7MYUDwWgSxe5Rx1aCDnnPXvzZe8H6vT5jdMJbeXS",
  "key19": "3jY6iipB8ysdLVegw5Yjt2XPzide8xwhaujQ5HnpFeoCdE892PWAvQHPBnkiSnFJYCwydjAgEwdxnutGeJZiSL7s",
  "key20": "5Cswy525CiXCMQNGdC85Tt7DK8b3WcX1d6FEJ6sZ4ACvxLxH9Echhqhughc5WLycB6CfbuhgJ7aFLyugGous7rvC",
  "key21": "HPCN53krqk3d2ZioVyU598B7KawKrHRHzb9JtCrYU4Wi6bfECasDDNZrQZcyrrtPsWtC59rnBajSDmAkP1hnze8",
  "key22": "2ADeZaEUSm2fVrFiLvzcqiiWQWcw6iy1EHcd9DgWcoHEjsYFmatFhrjSi3X5opnhcYePoPmVWpEBrSyR2t8sm7xs",
  "key23": "5vRAdFnJGMWBGqarU689HZHxtykzMcYaqxvDAt2vxcntPxspg5Khzm5PKznUSKUoqchPFv3ZM2aLEDxYyynkm8T8",
  "key24": "4Vxf671XQd9tASbu3r4aXjf7nviBWiNasAVGK9dp95JVG5geBRYkHgN6C9hj7FAeTu73PUrVwvFrmuvfDcTtGzRm",
  "key25": "4MhjZ2ffgqiguiDdfufEGvKtAvW2sbMtmqkM5nHzUruvyupxxZPomwafaWRSQewpJbKyJCMwZFCxUw1k9WdTYJyg",
  "key26": "3S8opgyQRV286FCVKbQEgqUwVhGZkftFUifh3TbY345w3qeUE5GEfshcfko7xfSD3KUrivu4gpzB58GHGKzRvzy2",
  "key27": "253zYhtXBmF1gMX84bwumKjsnM5PD88gabhQ6baNJi858jFZYDVyTLLneeGGd6S5wM5KQfennLmwVb8zZRm86J6A",
  "key28": "48ZgVYpCLvfyoprfrk8Kny27wrtyjYVtkUyvrrWE2hpTMZ4dExk1ypBi1H2q5igsBEDdJApnD3FqsPtZUZKyABV6",
  "key29": "2pFKch9ayGYZB5g9p2QDFuFLTZS3rM4aZNjvYdNmdh3BXp323VgTzCopog1gfujUSnBqB5yanyadK8hUrbxFnPGi",
  "key30": "2kQxsLMbDqcgbyoEPueRFzkgBi14yUHYoG1MRfhzRJbZSKPBwYmQrS1FCfHGzJGbVEmLQyxGyEY6T2wBaTy22WH7",
  "key31": "3LdHaGYdN32TwJtBuBbo9JDsrEdu7GNvqb5C5hc3ZdskGShxwZn3wCLxGG7YPbJd6tm5bSUsbrcR25aTTUTwrqDP",
  "key32": "2yRddDcnQMnE2jbaGzncHBeSLWZNDh1KoJxpu437wJ2nkovXp8xAQJkp9CU6f3oWobggydeRGr9kBd8h4uDNdvxY",
  "key33": "3TNqQzk5pByNHGJrzxWab1FTHmthDfhSPPgMygtU6hzzCYZSywoikynRWbPZGrZFAuu9zDQM7gES4PRgxFF1rZYs",
  "key34": "37yGtrDQrYKeZi7Li9WVpD1qW3ERVtXfdsG2zruDpMCm2vXuoQnurAjWxw5TWNFtpHtsghuGbAKeh6ZNEuguKqV1",
  "key35": "4wbLAPLPkwVANDwgqSG5dUJZGomr1eKcJyJVgsQ684YCCZYCege5prmPQDQaDYReVyxRWz17eA272gGLmwcX9sk5",
  "key36": "4mfKMBSKEeTnzcCczEq2cpoPAfoPi15LfdW7Qj1dZBVuzcM5ghris6PiTkzcUmd9daqTvbreiBKvxqJnpemhLusZ",
  "key37": "j1ehmbdHYeCJzQSGv6S2CSQ5d7bkmXfE6txJKi69TsRLhf3dkBSRy3QuJcWUHp8asYrmffP4i8vPT4mZ7oqUjgG",
  "key38": "5gXRD1JDBM8tqwZyG8TkHU5AYcXqi6rR8xdn8hbRHvjqpcphoAzc2owN8W2W5jGJGJD8Sa2DfAi2gjGFpocv7T66",
  "key39": "3SuN4wP7n2WVJnguiXGGDte572is7c9vPwfve86cSWrh1TK6kDiyKreSjo1QVdYZmjjg5YJKYVReNznaRDwP9uu6",
  "key40": "2LEi612tsuDB1U6ns9HHJxXCewhALjsCT5LUKpD8PThoDpZmMYUXFxMVSjK9CEiFbp8NQzESX8nX98vzCZ2MWyr8"
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
