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
    "CBwn8Drw3AtVogwGigY1rZqfre6Z1FrPRqJWcECKJYdbi5FQNkWvrT8KsVSUqDk7iqGDTWFqDcS36MpytxZ87iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGWBMtgCaniSCL7HvXm4QbMasP1XBtVh3REoyMxaUNUgMc7K7c1vaRuk15twmGJ3aQ4KHSFFWj2qPari6QiX1MN",
  "key1": "YDitpmjD3facq6PCK2pbi23oSZCqkVfUsHVuPww3wahrmp32bg3JjrUGjYK5WEivUZXwY7ieopu52SMRmBnNTnG",
  "key2": "28LSRdx6MryYLYfEqSeTWpdF1q7KDpV5Rc8tteSAU9tFt3LWBjpcAtxsPRwZvPd9PR6d5GY6BHV65L6Lyev2ghKS",
  "key3": "3MbuZRMXVJQaSYXD3wvfvoe5gjwW2rbzVGZPcrNxoEepYP9UjGHE8DtRTiVGAWB21wMXxaPnduwL5UiJC7pBPgnH",
  "key4": "3WTnUgoWbF1EYr9L84CvYPv2ionC78AcZBqxXvhqCPrwuTAzivZ6fbykKC8oPsm41rtGY3u96szgv443xgomaXzj",
  "key5": "4BWxcZTX1T4xnrYcHFuAN55UN8h5sQdod3WPdEdheY7k9S1L6u2QgU56bnmqMw9NpgGTXjZxaS8tqwwxzJEd7E7Y",
  "key6": "5sxRPX5w2xekuaBQR2a4miL1AQSsMMVsLy7mVS27Jn5gfyFu7mxca2jryoCsSePatA2DqPayiinsT4dkgbEnCedf",
  "key7": "3cfxs1dr1XiPYU6NfBVdsJx6NmC5CR2T76FXgXstteLuKd8WSfmqiVENBr3iWTpVHFmoh24TXvPkXHHDikPgiG8R",
  "key8": "2H4LuUyaKqiGHs3cvnwiJUcrYTHpF2aMEgUMtSuNHnRFauEVvVsPPxys79jGye6oTCeQuvnFnS9N7rZ3ZhoCaSFe",
  "key9": "3Hq47BSvktaH5YZj8agypbzztfys1Vw6WUJhf3ZAxEmfBkFqHbBhuVm3DBcNe7geDGLMTGyFCSw8ag8tLFkkDG9K",
  "key10": "3UU1biYkgVRqTG3MuvwBMwQGmQTrxL4wSnEpVr3VSzpzzqKJRyjuwnUkh9FBZM73svxF9J59D7eoE54vPLjhfYD2",
  "key11": "5qmn5EJebahEbhBVu7oi4QeCgdjJCM8mFjWn65VkMzwgBtKCiXygVsJTJfSPCQNU3Nkqr56q82k6t46E1B4rHjBb",
  "key12": "472cEoSXGL6sqRPXk9T5hUM7umX58gTnPid6E5ih7gqpkQN98nqSKcuNDfSBjQVJAjq7Bp9xSDoMC8teHSBdRdSf",
  "key13": "4YWYyxEi7cn3YJSiNCc4gAqa1YmPo2pgFrj71Fkq82tFgweyTpCupvHgDQ5ubgoxQu5wbAWz1FRJrjpko2ZgoPj2",
  "key14": "5JKkR4bxvBBunbgaenPcNUfYdepdoPssMYYpuKAK1n3uFfc937GowBgVarK5Rv5LVo6nSuKfNWYuGMaQgZTP4C3S",
  "key15": "UuVxUgEtTZPYhTtHnVZrh2fdNp8DvNivLCPLe3MHnXRQvWXXsLEfzN2L81bFtZCNmDryTtqyCZDyvmoztxeDhf9",
  "key16": "3iJYyyHco42ZhwjsWq16Y5jLydnADXySZtC5Z8sThz2nGf6Y33hj4Po8icCncrkpoAEC2Lr4YQWVJzEvn9euu167",
  "key17": "3HUffNEduHjwMLJ8QBx4TtsAaL9M2S9frbmLtTpxDv93fHwW7afCYCN7xCfwQTTwzwPRQWNV8Z5FrxSMWgZVFMXB",
  "key18": "5ucGQHtvyPCGviPWVpZuzZFMijDFjGoVKffr6Z1so1Ms1UgjQDuFqnvyGMXdVZBAHN5tECaQWRVnKs7RZEmCYq9N",
  "key19": "5Un8VyzX5p98YaK24MTvz7tqXKtx5ZpNAgkksJVsjDUKZ8uSZmFbkWhYM4fUsSwAXXdfaBBRczRzm3CXektepsss",
  "key20": "4yDnnWQq6tyJx7bp5ssxtucNHjasREb7a4dLrSvp9VWDJZW7TS5rg5VRgCrAX3sNFPMEi34qmTAJ7rKzhtF7GAK9",
  "key21": "5TmnYQ71wiTKtKkGPjMceEYJN5Q7CTCBRxsePzw3QYaHNXLMTMVtkoCSCsgd8h4gFaGGMKQw6Y7Eb3GXhV3k3unj",
  "key22": "4nsZr6RmaBkMHsvK2uWG8oFtWG98ztHC67gtFksYTa1TVi8HtCH9esq8FR6djJYQkuihNSfYat2dEqVKu7hn2Gqo",
  "key23": "TdUisydR42TDp2RCSLKy9PbaaCG6NeGNN61FsD2ZSnmzxYet5o6tTUmmAxWQLHnpGa8KUmrdUkmQFRL3FnvZr8e",
  "key24": "3UNXFsBmdnwtjCkV9bhycE2mD3xTtg3DxFxa6DY8Hu8xXKh6uoJ45npjZ5X2CKi5uYpiek1svRDnHjaph6bKA2JU",
  "key25": "2vVCk7qPu8o4zy3Wrpf19djWrPZqYq1gWa1TLntJFbYuucaLnVc4V4zxxU9C6Fs3ceuXDxZLMirA31sWoT7MoJeg",
  "key26": "4F3UzEvH8Gfctp8koyniERGVQyitoXrrc9YzP5yqG8zNAKyNTEanDQpnQHcD4w2wSPDLxg7v9rzvgvcLZvW7e2Bn",
  "key27": "5xreWzJjLbxgZwjN88kkeqm2wVsdAT1z4nBP21q3saDc1i1kDBpSyp1FJbUQF8U6fowLLuJ4iUGabYRBrVrwvqDS",
  "key28": "3gdSkGn8DxkGHnbkYVCZJzCguemHsaCPRdeCfFcNVXhkRcg4wbT4o6q7ZctrKdQ9gPDmywAo79TQNNhdV5kiVpmJ",
  "key29": "3FTnJEuBRgJDioSR4n6SBKocLxPZUhxQ6v1Y78S5RmgWyTqwifqHbwkXebnx7vK9MVg2yHXuboUKNei2Ln7RntB7",
  "key30": "39xGJn2kQx4NEfDi4vhf8NjTVWvPS4VN6n4zLJ4HQ7EbrAYoUkicVXUrLWKkyQYDYsQP5rkC2XtHYPkrp92FyShW",
  "key31": "S3LhZiTfHLWyKdPp6jSA2MsxxmmwffGrm4mNFBnzNQ45HH9Zpn6SwiSkMto1GvPWkCyUdyzZC7XnsfChAqy3TM9",
  "key32": "58yq3kk9yeTFc5jGB4tXQAGFnwKeHviLbdygdsGNJkaRBzcDE8qHuLEQm8jwr2HJ6jASPGDhMpfwzGvpgbFF5rUP",
  "key33": "67Z2MTqbb1jVG4MPbgXoD7iEuVUYrgPFM8o5gcZYKnFUmmmAHLXkNNqPso4dAiWoHYxr2ZssircSoAP9RoSjfaJJ",
  "key34": "HjFsSQTUergUk2c6NeJJ7jYUzWFogMEt13rSrTRonYuGSie3PGmAUg4HLTe3TTT5gkdNzwR4d2MtEF73HrmrC34",
  "key35": "4emADYKHdQiGZU42GJP1yxGNSv9xQJiMUFoDYrs9vRFRcnnSQTch2pCBvq7DhErr6d5GcPD73RY6hG593Cou4uQx",
  "key36": "5z4L8M79YsmTfugJBiv8EP9bT8AbxGFjf4LXJQasSQjH4zQkhiLTLj5dQTbgkxbubkUXCPGVpryH5rL3eH41YgbU"
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
