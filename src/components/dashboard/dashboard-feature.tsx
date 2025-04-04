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
    "5tkpLLR5YYwUmcvGsMBamG5QcFak4j91wV1eCGhqX8m6cDj4k5g2CqhVm8jSTTtoWohDRHaJqV2QT7acraVzaQzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgQPYsaMbUdkAzUzFaKWtAEtHYa1caHxMpyXgzJtanPLTqoA99FGgRHALeeFHZrat1v1CiP5v4qCoWwvPYc6vi1",
  "key1": "53KnQSvkJ7DQHx979RBTXkdknvVxnrPJdWrjNUssbkrUbqNPCJUV6Rb1LZ58TorF2EMVdUXgek12cxjvANmGDQc5",
  "key2": "3ycZomnPpsXTsJhLSCnSUXZkgVpRmZ19ibYV2ZCcDaDbypQMxzndnJPeJ9JX5Pn61AVHr6yh5q9V859RCw33makg",
  "key3": "4EZhUu3ZBiAgHbXvndyK4YzfVqjDrkqAff62C7muXFkU69h81toxQHJqUbnfAaELzS7N1TuRZRDvH4ibk3PZseKB",
  "key4": "42rSj6YXVKD9DxoKUTaDnKeSsFNTCQdzbPY2waMPdF7mEzMAUrAj91WDVgnazsVom2igwfzGuRSy3bsBjmw2PskY",
  "key5": "2XUDF8CwSWiQRqv4hhpxzwSptuz2CgKgwW5mGQoPXxv8hAVcAb5kXHfoJK8G1gCTkTWiDtVevJD4qRENu1Sc9BoT",
  "key6": "zZj7fHjnkx6gxGdhmbKaFDHU7JHkZH3MdLkKzvKBQwxsihVaqeQQiFNH8Vv61S1Y7uuDSNsA3uQQP8aMvCzyx2p",
  "key7": "EzZTs45xJtdg18MCwJq8Bji2nUKfH5Yd7ZY3BRqxgpZ8iRzso9ZtLinG1Yj7ezXPHw8EvkSPbcU9zrxL6iEcWiw",
  "key8": "5kd8Mk7cxK21B1SvufcD1U7PeefYBs5cSMzzrutqr1HghqsmDV811Nw1TJeieMe9TBXqFi2jTUAka5Mp8akSjU9h",
  "key9": "41yUqaTW9k8a2WBoRWSZMWi2St1Q2bRYVSgjt1yjjDBNJdYN31XEZqMXAZNJwzS4F8gLeEhA8aswAXjswsRJ7BZs",
  "key10": "26Tsfz7dhyvEL9VSDMngJ95Y9iqaUKamAXbVLLwgkrruepuBYKdknRNe8KnxH7SMAjgt1CrVCXKfrbJo9eNXdE7u",
  "key11": "4ZNzKtsM4A9HTBJCTshnRyRv7cqsTnrsmWoRANCu47JEr3GkstmmM5ALX4qKXqTFe7hwjZ2AiTgDrCR1gGMopiep",
  "key12": "nGy9q8uco6nbtPXUMcgev6LTXKEgJ8gmh1ZXaStqeYGkZJqFAMq2Z7HTZEmBqN7vbbdLjckYPtMrzCX79K6LHAq",
  "key13": "5cVMpDZR1v2hJ4t9bq1WhsBvXvCU8ttNUeQnDYydGNyfrzYVeU5Ma6hEoTUqA2eo37GpXB3qgrFDxkWwA9K8Pn26",
  "key14": "3ELEbqhnr2Fbi2hWcT32ww3cK1zv5XFH2kZuwLSeESePXDTTg2EB2jaTtb2UqAMnH371KhnV8Ti9dgiqge6pdQ7y",
  "key15": "5xcHDKUD6foMETRzUaCe9KskyZhhbcZf98Y8vUDc9JEjN6KPmVrPtSV3pFM2Up2ycfeF4cwXREcANqK8Xkh98B9R",
  "key16": "sf58EnPLeqW9kjdSd6cRsvdokNveAPcZYSKfi5km3D3pA6mf6C2a1xgPA6MC1Xbf64MTqnHwiSyBkxpDYLe4TXJ",
  "key17": "4brLQMmdpXU2hs48rMPGwfxLYPLi2k7Nx2kHNyDzuhidDcPV6HHyW2qMZYLqDRzjEt3cCRs4ATokE1tx4La9oREJ",
  "key18": "1JGBs6ecCr1w3pLj8SbMQuySonQ4cKkh2gTibe2ekEp3Cj6Zj9w3TVsSWeZJ3KyPDhePpBTdtMTwZj6x7MwMqQV",
  "key19": "63hT2bDJobXRkFcL7gRs1N9bnX9EK8BoBcLWhTqTa8AzMQSdvUAFHxs7KpXdpihAhYn3rQGQBAuwXaX9xLSsqmZQ",
  "key20": "3xcji6gU2JXGTZdAFuaCQzw3TrDZMJaRL16GtfLhXqYkEq7viVWBTfCStgST2JBarw7GdcP6WfhXpBSkscP61Fxx",
  "key21": "3cvF6bjYJUkuYbdj5Fd936cBz2Ge2bQWyrMxQnJB4NwtscR3YxjGBCK3coMxXF3P8N6MqqQe5aaiSQCAQh9Yz8V7",
  "key22": "47eZHH2YorFAnoUMHMa7W9Hw3DmyoomMScj3DLju91BPMVfTtg7BiNH3D21PdXFAVhFHtF52NbhhqTLYtVtyoySM",
  "key23": "3svpD5FNuRVMeUiJoWhAtxcMun9CSxUasqKyAK89mQEqYygCgE7GdTjX8fqqAEhpkmnVpdo5sMiwXpjXGPCoUzLN",
  "key24": "xbHiYxnNzapXfLirU5WyordfFE26tMrj7MdnLc6FdTvuW2AdtTKPoP1TYwZtPsqgmNHx3F7fihhSnMHMTiexCiA",
  "key25": "3doZXZvDJoTxBtVQgi1tP8vP61QcSNiwHoaUDXGi63VvjezH69Wo5GAXsZ71virCsFWNaupdE5k53ZGK4X8eVMYZ",
  "key26": "52uyUjWw1w6TbGoSmeEVCDEQYMrvE3T5etgcZ9oX7sVqeoPLAYbQCJtuMgt1vsra98qJmSTM85rB1bwGeFVYYRLq",
  "key27": "3AUVtUdy7U8fUmZTzXyDjjk4waEYYvgsKEvGcHtBYrcAQw54BYh4eVuQ5vjVo42iwfC2swY6bqNJTQFprJ476x1K",
  "key28": "4Z5XmJDnASsrJHc69YT5eRtt1uin1zbrWcxukomTePKf6nigroNfS9Y5QS8461D7TqXtFrkQAvF5y9UQVEmtYR4v",
  "key29": "4XtSzz3DYuSPC7W6ZUXEaNKN1YcqL1vJV1qTdqzq5GQeTxf4ik9E2pryLz3oALcpn3B8SbD9LNF5UveWobeKhD9q",
  "key30": "6TzQvyVp84wfFShhM739rVD4LgdMLRq6Q6tTPHz2hCJ41rXNoCwvGU2nnaNhEkE1uKitER87vvGR6bwqMbpr1G4",
  "key31": "926Rhu9HKE9ZeX7ttRjuwjqYGG3Ne46YhihuZCBF3V5cMdToJa9jhTGpgnhjCMK5vHYDEHPx8kBjxBisj2RchUT",
  "key32": "3R6L51NrzYieVZHMk7YbYKpbgFgHxFF88syz99Q5A6QtZV7BRm6aUMWRXMrr9NGPAjfJE6PDkU1pA4rsEC3eoHTp",
  "key33": "3bngRYb1Avy4chuNvbAgSCVtC43f4xk42eMZ4SrwXMn3bUUdzWqUygTo2gChWUtZuFmHaA1SnpJ9A6VypoSuZywP",
  "key34": "Xjr8xJDZHKRDxcGMgbRjb6h6aGnJHY839aykdAjeyjF3zCLXE4vG19rHPdFfs5addMJdYk6qqDMusHfJhBDkoQw",
  "key35": "5FAfHBc2eSEKFbqhKe8JXSS5oR7wtavPHs8cXahCdk7xRrQfBNGVVjLhrDL6jDq7w9VrZ6DyEiRnDCnRwvNkGc3f",
  "key36": "3eWgJQYBEc9VhTZvv9LypeP179pqNopPwXTQBzMUvMVH2gAx5yNW6s691ieR3R1VnLDxMDgcDP3bWGSD8Yi77vzd",
  "key37": "3j1nRykvW5uwVyCiKyxn5VPU5f8TvG4qVKmTtsDMA7kAZjrCZSpjPp3qHNSgijRVpwwmG5ygaUAUPKTsupCLQjiH",
  "key38": "nGpxM6xgn6YL5UXCY3feWv9NC7m4FmTh3tUDJjhJFUsQ5JShCzzsfuvNrYfe3kgfT9AVeDKGdjxFzUax2S34DKD",
  "key39": "5cLvuEXR6vLmn9yCew7V5HEpNMAv92euKjB474Dk32E31rfEMaDp8wMHznw55pctM1sd7saG25nS5cES1YytNNak",
  "key40": "5df3za2yayH5spA6TPoTtb97oMBTt7FWGD6yzTZY7NgMdeH4b6thAwSQkLQNumu85QhDnTTwuYDLuCs9MZikTZc2",
  "key41": "45qc86D6Vw3WaC6FbEJjdiCcZQgKuiE2qMfb1wMee8r8PtipRSC1gcDd7SsbZTUSazxo6yxczHp7BH5gfkJ7bQ1o",
  "key42": "2eCdPQQGmGKmfFM91m7kQEuR8sufiPo5Th3gNYy4uZSXf9gX6tVupF3KQ32fsRD3GGNJEfbBy8oNS7eC9K8jDL4E",
  "key43": "2TM9pVA9BU2JRXb4nGQqR5gGX7Ws4hBmn7nLWUxpjiLMKjP2P6aJz7ZsuqLrELT8uLzTu3s6pWh8RUtAhtkyeAMM",
  "key44": "4W3PWnj4mXzLTJeGSF8sPFubVxTf5X8iA7M2rM6jeEkZ1M8erTur73DG6ufxCwaoCc2xq4EV6y98JSx1BgQLhpvp"
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
