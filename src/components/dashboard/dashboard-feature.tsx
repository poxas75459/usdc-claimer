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
    "C72V2w3MwkcPfYmqqaa5Xu7fM9sCYiuJDQwX1vQoE2cu4UsEd54ptWUsGztdrZLYhFxkSX8DuQG2T5M6dQ46FNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JQ6idtg22zd9P8DPRTDNnWJ4mH46b392StuKstiiFL7uHV9gyjiHWP5i8r2sTuq8D2qnNusM9ZmqNYzyrW4wmrc",
  "key1": "2AtndhFofS7aFgNND2hA4bS6Qd8wE1rW6CXpa5qEWXaXTP2iZApX2mhJLH4XpnSvNwVtQ9gyW2UW94cLo153yktp",
  "key2": "3miyHWTQPa6YJ43a7Jp33LrrzhoNt7pb1QRisefcwNESfTAK9j1i5hZYJP3c4ZmTKF2yS15r5AzCkRuD7FsRPqf3",
  "key3": "5Vbew34oewYQ42DfF1rtRmrDd192A2uYGuedP6FtNS6QrUVDUZjRSPzdPVajUhLimBhDDPNpcoGEiCQDxJtVyVab",
  "key4": "33ZeFNPU9aY6RpPPkUHtDcutL4izdyN5enQ5jXhBYRv3jEk38RoGpEs4ReqLDoSbiS1TYhUg3qBQbrj3DpE8Gnho",
  "key5": "36wPvezY1KvRxybSAqm9PSgJerLytxhZYQu7r5yXCo1t5jubF4AhwAXbukPgjqkdFe3DG7MCCqvo8Etd4YgrySwZ",
  "key6": "7BJF8wdf1hrYmx4RX8u848aG66T3v6Pt7rFPxCi2Qrq86VR7YNHbJ9KC4hRMpFPXKnwy8uAGFN4v839GHPWYZyC",
  "key7": "5ECkwhf3rTbY4veSWn7qRVyjNPiWsxn2X3BBxNeRUumX8AopW8FgmhrXc2AdLdLxTtdV74T2Pfq9djZudTtqyYN3",
  "key8": "5FnvPMYwT8M8bsCFbMnDyrikaMvX8jHutPoaaSjyNM1v9VCL8RnUydAP5DoCAUWS725xr4avFDzsYdQPiiYWGgoG",
  "key9": "4KrL9PdCPk8iv5qPts3EzzFPPqitF2r7fEywgCKuF2tdsd2ZfwZsU8e9xRyKe7rhiKP4sXxY1NKUe7BW6ozGqShm",
  "key10": "5sHCgHR3DM9GTadT6LYoiiW542YG2zvNFqQUtNJYz6czJkQW9TjKC2et612Pn4roDKiVUkbe23xu8HrrvcmkRvya",
  "key11": "uDCzota3GoJpoAsJ7pbY9LqmUCN4UpUsTVy7KTHRaJP2JzS48cgP4viBvxcurPdRJurqRpvj6USWqYhJ4FHK4y2",
  "key12": "9bxAodMeGtE7mner137LoSFrb7MdS2USHNEuYpceD8hBXPEG2Q4YjcZCepPHSafZpjSj9EAMBYrCjBnQ9RU5djR",
  "key13": "2ZcASKr5DwdDwGWzwzxudbbN9gPhL8f3U4jCFMo3kGukGbvGnGF5dNgLWpPaimF6RxtcvUEfwHmA72RxQ34ENPY9",
  "key14": "3CX8VF6qtuW7iTKqw2TdFJTJtGPjq1sWwze5KFu299ApHmq6nWpPyikfTCV6fqtGsVMzP2Ak3vFxgSLXjMtQxZkw",
  "key15": "4c8hEz7pEewcT1EfTHHPu5w8jKUaVvRb9oFqPUvQPh3w23R1z5vRY7AJTSGnfhNnsNgcpt1srirCZycRA7Khsj3n",
  "key16": "4B7FchyN44C9ad629jEKirb3D5S1o4nWaGt5mt7T7LEAS82U7gJfzxwh6MCdcMakDnf1XG4LCtBuKkVRRjZVuNHZ",
  "key17": "3GSN7ScL1KCwjfRdako97wXmFTjakeeAuvsxz4qtyWue1dcZuWhvmwdqo9vA9pxo5pAoNbWuTUJj2WVSSyVNzr6i",
  "key18": "4YbTyfCG5R6hrXY1DZg5wQkkuSVRtta7HjK8AFxbWL2e4EnpCGGcDRf5oYo3sRsMSKcrhxYs8k2yuVXWNp8ktnxC",
  "key19": "39PcQ7UsQH7bVqH1EPqzDvq2iLvhxwSjmsfNNUxn6dtbQXuuHdgTXrdmGkk4uRhoEF3oXfbgbskDqbhybCG3wUcN",
  "key20": "415WXbtdCPXGNfiqGYgLYhB8FQrFn5VaNyYNBUamrTZEx89JXPkrXeiAHNuryYrw9m4jphEVGarTPWf576py2Sp2",
  "key21": "2rrhmbXnJsHpRbGvcn3wv6fUqgt29SUGE9x4L7DRyNecpwZYFRWoTPYceGrGyAaVkaAYxSi9ZpV4vaHQLRNCctKD",
  "key22": "jqzxcvS3bBAvWXi8r8F6QbWrj3Sh3fV1idVBeuoXx4bCBTuS7e8a73Fvvp57MQkJ2iYWsmFnmND4qHaLy8L329R",
  "key23": "aNfTnxeGGDXqrbEYP4dh26cm2epvT5TB1yYuLe1UvgEryBCLCy3cxgJ7exRKqH6dbzodBPfFEKJDN9zYJTtuVp2",
  "key24": "3jRquGWaoS3fozawfEBqkkNH8HFSdymmQjLntNeMoccSSKUsCr1zoQLtUvgq3UTVuk6G7tjxvKdN5cZnon3Dvxdw",
  "key25": "4C2VipErhn8PQ5wfeMGhHvk9RSKH5mawVEj18zSYZTWYaoUCmkiZsRtShmCRCR1KF4tiz8fFUvzcRNTinX2x2xBh",
  "key26": "2gW1jBDLM631pi2Rrk1kvjsQr9agvFLoyHoXFyYHyjj8vDffR9tfBufrMKxaNz6m6wRLEygKKgpWNvKRBtDHrqi7",
  "key27": "58cC8rsannfPct1SGdiMvaoS6opaufmSVBHYoU1kkCd4vvg3j7YbbvMw1SSJfHFdJxQj3jGMqDH83P5mtjxb78Mm"
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
