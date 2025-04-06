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
    "km4A9xD5VKKAFrPa7dzF1ntiyMTXJ8w6QeTCvckNv4H1CGYdPAVAMwdPLbfF7Lvn4gCnqipRJAFUvQDN9o1E7RS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXHsYqxEG6ZuYuVXJRuUvMXNJbAkA72wEgZT7UPtKKQw7TM8e8RDM36ccAnQVnVkowsHymiSJpr517z5mZyiR9m",
  "key1": "52hZi6tJHZVMEPRZg4VbPZSGH3VZDTEfd3ux1nnbd29sML12cqVzPeG4kTNrGjyyUajV5LkVdSDLPjaiEKPU3fVP",
  "key2": "3Xb2n5vbCcrzQMd31snQR6aH4mPzdve9vaVARsW5ethGeEBYdoAPBV8oSYNYJHCS3EjRV7nTSvYNx1oLdSqCNj91",
  "key3": "5sYjttqVzx9Qm1Bjup3Ks4YHxJt9NLSTJVjq4sGsUyAfckTiDRxTdgE7HqoV7CWhALCnd9UBTLvBCnSifC2AcwEx",
  "key4": "2d6PiknppXFCzpBMBq1zqAHqAaVqhxFZHr4dC4UY1hyfUwr2fDxayqZh2dh64rWtnyBkifqP7tyKXdwGLRAKX4R8",
  "key5": "25NLDvweyv9uxbKTLpKihCZMgaPXynPa3k7a8DncL2c1JWxuPNAp6prugPaWtUH3j4Wnv65km5DGfviEMbJZepZD",
  "key6": "5aRYPsLVBFieJqVRRkcS7pnc31YgXHV9byBKdASihE5pzUhqj4joYw35xsEwuFvXDFXpLLxGUmWS9rSMJfEYaGrd",
  "key7": "3MTskg2ZGH8LAS8WLBbRxagaewYVT1Mtqj25wWgZkVoUZevxcdDkFAkZSfMSLWUqUNxzF9q6HxMhJTHdHEryD2RL",
  "key8": "3fmyMy1r3KyyDuKBqy9ryPTxMqyuvpkiubUfSFxyXS2Bg6vEyR8EAcU9yhy4L1HRQbCBc3tMSnXDTUw7iYH8ByNK",
  "key9": "66ozrwvWs1wtb3qoVUHf4pVpbneeL9u15HSPAtU2rD9byN1an5KwJSiZhgbS1vEz8xb4EE7P1HihBMwzStk5bTgm",
  "key10": "2UbLTSRGDXmaDuLdGqMLaSvku6o8MHQFZgf7if1H7s1xqXLEkdQ8wL1PLTQDFvzL55Z8toRemtY7oLovaHQ4AzQD",
  "key11": "p7Gg2kWecLBpaR2rUCybSwKVUjpPAh1e17VWaHY5w5Lj6VeFhz6jyVAtqHrMXLQn7Uujxg4MSg8gXstB1FsWwSu",
  "key12": "5iqsiv4zW7ESkmfazH1A7w27HY22v4jpx8q374c7RkQzidAoXVRYBvbuc5kvahJtv17s4UQu9CHiqNB1Fz8pVW6i",
  "key13": "2TeSe6Tgp57pz3LTLUs9imRg27SCa2La9Ui3NnYtKak5WP5RDpdFqktoGzS3f62n61JskiyyNo5vRLABFcVBtfmN",
  "key14": "4ecHQWwBrR1E4C81RwNZLfbHuwC2kBb3VFHP5JhgN2DRNhipKNrnEtr24bV1nMnTrEyixTczys18xHawMgzzQyJY",
  "key15": "2CD56QvhyVMRJbtJtRTJsd78VMuzhTvATw8oaqLnRuBiMV4DeP6y15kS9fW7B85M8zXHrAgJac9rUVK7Cr6teyQ2",
  "key16": "2Jx8DHms2LvhpyAYeS5z4k7LomQ5WRdT2MNVNtWbQGa8Zj6n9xTxSgsk2iSDEgJsrbk2m5pQkjbXxJq1sbzE3whH",
  "key17": "4wFBPd5CCNSC7iZKmkBKE6aFrttgSoCVSu8s87g1Nfpi9Kbiu5j4MtFzLSeeNBcbXN8cfb9UX6Bf1qa8QhZjFhtB",
  "key18": "4GCN8qVss8NJ54WEZHuRT7EjCr53rZTvesQRR8cvdazof9c91SmeKMKhhPpgMCUKNsvSHQzjLRzwRtydhDqoQveC",
  "key19": "29awmQcF8FMFG1NxEXaAt5v8tv2DED4NLxi9yF9WSiAmLiqyth1UEJA7Ns8LbAH4De4VrjKc7JL1X9uBEoqDLh1Z",
  "key20": "3ETtUn3qrCcwjfJ4MVRTqXJt5i9kS2Ka61vvB4rp6sRmmQutA6oxT46vAg9fNXDhNK2fuGzMZ74iZpvgTLL9qpZ4",
  "key21": "57WUd9o5qTbi9CgByubeCamcbypQsBW2KARrDx6ivQqYmbyzdx7gCV2HDWxtZ9XxUpPHCEc4swE26cYcv37AWgE1",
  "key22": "waZPUouQFGHGZAgkjpW9hz4qhE2Ky77xPk2of9kg9LMyPvJgBcF8d8JWtTkY6MAqtsN9ESyrwiA6bcWWk9JzSZF",
  "key23": "2PrhuuZWrsBEunShDkLMHRpEBRRin21x8hWRUT5VixjLDU1uk4wgLJG14Hd412uW9sHF5sAHtfAKuGoRgw3vppQc",
  "key24": "5Ewx5EhwbGvjz23kqnHXzG3SMydqBUwu9wtS5JwP9nBBexDWBSbfqoLAvag8jD5bi2JxnJrCU8jXEQC6oRvX7uLC",
  "key25": "5jwVxb3zJFtMkhxtHXAQgv41Q9rwG7cXqcs4ZQhVP7QVRMzv6DMLUNXXg7FAYwZFFq2gmHXhT4ASSfyxao5ggfii",
  "key26": "5rJ3udtm7WqUghNKJ1GAh5po8JYPnrpg1meJbHMAmhqQS4joMSonQ17ywamTUePyuMtRfpFy17CHKVhRp7P9uVM",
  "key27": "3d8tK83q6455kHAJiSkBzdVhL8X8fUrd8g3WcqbiTbJygmd4uWfSWwQuCAPUaKctEb6xKDYzpUHsDoJQKP1LuqcK",
  "key28": "2qnAgMJmTNXxkH1KGRpL9xETjvSmPiBQYdwVfbEiKy2uiviuvhWT1Q7vBbWEbF2xiicS1QM5c5A1MdLSq9AEEGq7",
  "key29": "2mVD4JEBZRt5QqCCYWapwNGyts2PYUngoE2p1wZuHmpBxUNbGJSbLbzk46oThkuYcaNswfyo8cDRj3nd7aeoC9x3",
  "key30": "2p1oA56uhScSdFSZph6a8yd6bAhcJhpJN1FAmAApDLxf4kYgCXeWeVx23bxQzL32827iJpk4axMQGjoYXgTVw44u",
  "key31": "4uuuG2tfjSw7gBtHPvzjpnJRBrEwLtUELWbKwGaZtS5XfmNYmYRZXVtrvUF6RexJLDhW5My7UwL6ZpDLikAqzwJv",
  "key32": "2B9PxWKG96ZvHCUUJqW3xWtDFVyL1Ct4K2D89oGi5BQAtNDrRL714vnX9xZ6iWwd6ow9jdZHRyYVX15FbGtrCtLg",
  "key33": "5YcjCgFBCHyCSh7GafbSMBdtaNAURe7KRimv4RPHjP52MhxL4jBpbxjxhXC3ttwiBubVKMAqvPxFBkJf7r8Gcsat",
  "key34": "4r7bqeBtaGe3fwEWySbrU4TAy8YFJ8WDMs5Zqkt6cug8zuCrBouYowJMAxzRNtasqZrUBLC2EDYRqvmeHDiHmAao",
  "key35": "57dAK9scNfFR4VeRaHXsgUHVFBnxddK4S4rBeu8VsXc2YY7oVkkh7Uk1neq62vZhty1FHWPhK4jsEUbhxirKbiBU",
  "key36": "3W8XGranMMEeQhThKM9pSL7dTzXJ7PxTJeNqL3nkzAo1V6Y2nrwRMXB59rmXrUbqGsfV6HvcP5jpSNYa4TcaZoSq",
  "key37": "sJCv92uFreop9Wx3mA9FCrwg87AzihrHJNjGvfV3Zxzgnv9XQMGNSTXpjiUg9S4VytKRVuRiM21wNcMFRa1raDT"
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
