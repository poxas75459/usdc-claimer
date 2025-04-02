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
    "2AfxbPVYqZKTzwtCjYJaRjUDwpNEY6dnFbtxhphNThdqvryLaAsx2tbGbKPaFvUGYrjmDRWsYQFPJesnBnntJ9X8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56KMYaW9bziDowuoGGfjMHyBhVs4eRgoQ26Jbcm4Kaa6hyVsYbUfNf9hBPG9SHHh59Yi4gqwKSPuEkGtVj8oDBAR",
  "key1": "3ekJRBydDKWoditPcE6LGJ74LXVyFX8QryNLWjH2NfNeRbMYHrZFZ2XqWGs2epZfQ3nY2g4y8ArLtR2Q8G6wm7w3",
  "key2": "5nDMy3cZK7H2oxTS3X6yRcH4ep4tYaM8izN6kYgD6zU8Qv4mKgg2Yw8ChffU99h19Wvn1MYjT9bPi82bYqCZwpow",
  "key3": "5QqEmoENTRcQmtfLkzj6jdiZWsjdKF5dmgaa9mL7wBZFrqp6utx2YTNPVtkGMdXoWbpv1Y9bcftHo7x8A4VZgRte",
  "key4": "2ryCzReF5PQY4M6EgSb8vj3vVBor8P1TQCMZ7xn1KdzuqzgdWt8MtQKJRmRZY4GtUaxgYJgs4gBJBzT6AnAgj7Zs",
  "key5": "4pRMZwfUnyAmujJMoAM2r9eSNrDDoGoESWHwE1tCCWyPmiy43mJheX1NUD4PSi5DuQ6EP5hsbmCGPMAMVwGaav3J",
  "key6": "5AjwbfLTLJDEqqwMtzRGx7kXoh82gPpCeRggRdz2vZyNCwBLrnzCqMQk5HZ4WqCHQvjAs8SDhk5CVBLud1sEbFrJ",
  "key7": "5TinuvC7YsWd29vBBGav8hRr1QA5jbcruAiy3N8pFpKUrbTfR7cmSfotaqYYBb68XAf7TY6zg1NXcwLNYvqjCD4k",
  "key8": "52RyLCrAreQgoM3JcfekZtDSQ6HJbevZ3166YijpNRDEsnB4VmSQSy2mKcrAgmGS7euTLjT3Az1B8d6zUv1LsTz8",
  "key9": "2UtrAkF8YJYWxhmtQVo8nsJRpJSmrYhFzTx9kNguHpf9qeoBBfnbiwzkSXX3DCwzooywC1SCmkAaoCZPcMCnbuuJ",
  "key10": "571kWxyAxxe6YfjuyWaGGUvxLJa44nG5H1sELrdGibKhJkBeig6UQn8e9UdFEAnUTo6NWgz26chyfyh4N4Dvqtp9",
  "key11": "2RfQL5ppKJ6E75TtzS18Aj2QvTJEBaG7gLRMKX7ZPf2UcrMF4uHRZZYHccQw9wqAJg1t7Th5G6Yv9MLPpg1QtXQh",
  "key12": "5dzUcHSKthSSLtcSfsHinT5z86sQEHgZu1NbMcc2iQWT6dTTBwpKP1vqq66QJV9QowQqNYJrtHV1zw37qJgNDvc4",
  "key13": "5C5dgKy12tpT9ktRCUXUm2UFXx7jK6NNFw8ega4LomZdkd7tNMsto8MHXxCiT7xMVkZ6ZH2R8ViSeyGBu3x6hpN",
  "key14": "vcecoss5DcHcLvGmxJ1jh64jhMb72btdoee9J37aL17WnjYeeEtNF8knrcprVpVAeBQRtQtyKtuvrdCJ3AX2QGa",
  "key15": "51oeTg4NxyzEa2Mv7BmyqQopPmay4rHbVEt4aVM11z9MigwSdbbN6hAQJwqBu94Qb5atxZCM4NSZ3FUPRpXLiD1G",
  "key16": "4RqKjnv6efeqENqJKnMHbn42dLLcDGUh9D9j8B2n8vaG1XgbjzyfaCoWwGXgSvDd3TyM4VmjauzDpvp5MjnY99Ah",
  "key17": "3LivVqmjRyWKbufBCbQTFvT1XHeLDjypFdyzaRNU9x6BFc4H1Xhmb6kddm3RceBLmNnJK8CqLaX7VY3R7C3cW1Xi",
  "key18": "FdESypvUiZBuLcgRVfMcNxfVyqB4E1SMZCkZ2HiZ8NPj6EXBQdZgVswC4Pc98BGZLehcrQ4d91kTSi48xb9w5eJ",
  "key19": "2Yi9BQDemuBxVLYQ6wrPdgrmd1WVYLR1z5VKhNgjAsqUTKY22Rnsk9ThsLTG79xLYX3xfb57PA2X2SzAyjA9MsYx",
  "key20": "515fv7RmqktvsMa5LHLudQZoDaPid7LXk5SPMY6f6LQC9DztoFG2XaBTinXV6bo9nxD4RBA2E5bXpGGxqHyLYWyH",
  "key21": "3Wg88Y6YyWosaDB5YZr8sw3XxmAXnxL5jNC4Fr2ij1fca7tnrm7pZUp9HCxjsqMxKuw5TiS9MeSKdEeNJwCLhwda",
  "key22": "4mNPcJUE3ZZi5MMrwChi2A418gveAF2nSqFdt1zRx3QEEDbbqNdoDsEx8aFA7QpMu296rV2cXjsmeK4r2HfuMdHN",
  "key23": "2Xv6r1zkzLDa8XFpsLWw5VNV3pZ7chz9ijfp3PumpmE7Q9MiX5mzYivf7FkJP9PctWgJw8ZBMtFLdSTztj3DiFHD",
  "key24": "Ao1T1kMUJW3tQkm9Lj9ynME4nG537jcmzGWM2JxMLCS59N5t58QvJRQzFbsVq9HpwtT1V4r1GxzG6fFUtjYNEaX",
  "key25": "36DnqNgUvt52YojLZhFZDgiwjT8ruCrW9PdWayugd1yw2FrPp6fBxqGJKJzYcqM14ryJPjb3wo4rgGXAeoTmbLBy",
  "key26": "GKrWbUQGUqYy4LQ1dWmX5MSykK1vyyxJAXcrGzvdGk3n3TY5Yw7a5DAAHZMKB2uM3ZLEQRqdphMREukn2fSxaZf",
  "key27": "2wqcpVBbYgkehmBViwHTRHM95qbKc794XX3ymLXXMfJfBh7QeXJZJn1m36hp8T84t8nBUpaSP8gDQskB6VkngX9r",
  "key28": "3HaGyCgftu5jPc6oTDU2KDXGeff52Pr79JNfQ4hyV2FdNFtediVR6N9urvBegvJi5wmn6q4nHPiMyXncqPFM5EFc",
  "key29": "4u2nrkiVJjX27yaGdqP5RyDoKFYYfP44HQqJDVxHdWXK9ASPhBsAYuXvBb82eg5cSGVyPw4EH5tb7CzNmjEa4T9z",
  "key30": "5AjakWc2ns4htpSB1cY99W1cqunpbXsHmyv19CfrYFg3EFDg1sPnHWcy5meTqRLAwA5UMvUUr87YVJmzY8RP3aBr",
  "key31": "5v2WWW5WAcHJ4KCDZGNNzvBswy8nn7VLr1PVecectS6cpshsLWb92pfdK7qiW6x2dVXLWLZQreGpDbir9VnFbivi",
  "key32": "Bdt91dv6gp3Lym6cxUJWM2wMFtBP5TMDrLWGfUPtiC1xmwGL18iqRsE67yyCdyzG3rW53dXq1kUjqqtCeeB9Emz",
  "key33": "bw85VqW97vLAMrSw732pzQGFxjJ8LqfYwnAyUvhVmsWMGfSrLH7rsqDbrBisXv41V2gs38XH3aP3dWwsCZaZvif",
  "key34": "5FATbiATzQWKk8G7WrxgXz6n6A4KcaMMbr6hpGKjYNpuKn5PfpEuVorLsq4bBhoWNoNDEMkkrzyxDJgL6c5mKg78",
  "key35": "5jK3id5wYhPLyQqdPyiU8EsPXZBqaB3z6bqx8rUdXo2c14VC8Jp7KbuBrc2dXe6Rxd3bPxcXuoHQMvyjG3VV9ySc"
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
