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
    "3UyTFos9XwSgCmPbJg3fGG4VRhRqmDdo2wyQtYsiTPSWhu3spkVtwbzFrz7N2SgCdGddnzNeRXRXjrjLGi5VxjkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MmJ73kkGE83yQHDxHGM7DaijJxSL5i68o48eSeQ7HkogrbK4x51E4FePt3joNeXTiRAhzjK9YiexZaysjz2mt3j",
  "key1": "44rVrmPUdPKVQG9a2jsft6XAA3mAiZMJgbUnKGMEQzTiVQtyWuBG3HqMPuwqQEkjbGwMKm7xCABTkTnMGNJVeMJ9",
  "key2": "5TFQPrkp4zeALsnJTji1pPVweGvUdfMmwkAerhNCiLJEN864KjhkCmoTZ9P6jwncnc9PS7UxET33csY2T4z7Sv3A",
  "key3": "cAu8dZvcPLHjmZTEZ4XhABWfYNAQ74EFzPn9hKBYaxGa197UU8v76he8bFs1ts9nm8TvR66Qj8MbPptE8REgymY",
  "key4": "4nKhkWvLXSShyCz6WZdW1bYrK6g8Eq1swfWMUx2wecD8yBktsFJKRDfDAnno6Q6GNyq1mUjhBruTfCLodyKApvTq",
  "key5": "3D24PZvokQ3qx9kCywv5APNRRbBEvuMVDYi1oKw6f3AGRdHftsuVNyHhh8jBeoYjGNjfCMogtaV4RPtbtJpDzXqX",
  "key6": "3m7ia7GzkQWqxZepNjCbgDHkFEEe4YwRWNtVjmoHEXDmk2Gc2zkmeNCAP2PnXDrdH5rQssMX9N3tPgftB2QYHmwU",
  "key7": "MyBSq8ToDo3rGJL5HoSAxhHR3d9H3fcKN6mh86e3VUdwk4unkaW6ZCX1siWPrqLTErBtUdjbNHRi7xbP72ssgdk",
  "key8": "fvG91pYjC9gAxNdBBkiS24z4DWDmYPA55F1vsB9Fp23o4iE97yRGgBWSAYSp4H8GP3ejYruRwHYM74XGUcV5cKC",
  "key9": "2RXi9cNjAvEsKDsvpUEdcbBx8KQ7E5mXqvffLxvYUPHZQdTTrvbfUW3pmGn3nLygxqgp9HLWjbLo5mJdGhPg61nE",
  "key10": "5Kg7ZKWMVzVxhicbUAabZec8cN8TJRteEkJfGTnEDBAmioYFnderBnrW7PqxmpcPrbHprfHTyLDSV42cskkfFiGN",
  "key11": "5wYUF8r4GJ9CAZXUEoZESKBLrBTibuZUomxYSRVdyzRL9bQMt4g3ane2U7oWb1iZNGzJxJhNbBKqEE9JLPttpiU1",
  "key12": "5RK6F5oLf4mQaMLdJaJoADzZzJyPaquaVjYvwsiYnfZBxRxNDd7h3wFsrMLfJhZcBv5CcegCLCtrrWgohtv3YZRP",
  "key13": "U5up4kQKZZ2WdULtM9AZByh9wr1vcrz9MTtDdXGDz6yvC9uoNcUkMDCgbCUQreEJLLkvPdcZJ1YDkKCAqnE8FNH",
  "key14": "R6oKWbSqxxt2BJBveUCdNEsu7Kda5tBnKMx9xGkvGGeRNcHsQnabMMfAjb4ioayrMCEX4xMtaDwLhqMKENJe7E7",
  "key15": "jp7G3LDTnKyAKhJniYZcKchYSHh4njWHPraSCa1PfNj6UWDuCPJRJVN8X2rSubj9SMZZMMrMxhqmCUfTEhFgj81",
  "key16": "Cja8EatsfV148UeXpCeid4JkBt6TjbZSL3XPwLEpr6uDtVRmSHNc2yDuuDXwGg5YkNwQfsLZcdTDtTvF13igRzx",
  "key17": "ncavMkK1AfXFZUFHdhyDEFLaQnVi8SoMDtRCBRztQV7pijSxyMMVa3U6be7eZzsW6PWqq1bpaNrSUQxcUoSbha9",
  "key18": "YwhZtrUqPcB4ETxpocpvV7ZzNDET8wqpFE3z5tpNeCPfXscpSFHAZytVuWNwvtCNT7MKn8hEGDpSVgMmmkDPrqi",
  "key19": "5HsoQFes7DrawAjjzBFMD2j6iYJ5h5WmxWuw68NtRTqq73VZoq3c6RTYV74wzC8bZjysdA6xtnCkzzGRFijWqFF8",
  "key20": "4xcuf5WPhFPjRRy7xMDRKV3oJBRjP178LUXoVgjp7yg1TsFULs6Zm5BVPeUXAsxS25UzFr5zPWcrSPoCsE6xSbMD",
  "key21": "51SQjRFPsU7kPw3cmuXNysfYXBhAScsb1YQpewbw1d6XPuUMn2QAaSHC8XMiGLtGzzs9eKzszKoqYYYK4v79FGST",
  "key22": "5QAB734kHT631iz9UC78NQbp8SvvMriRCdLJSHNR9y8qKcE2PedAPGxtaetcuu46Z6Eb7s2rARNR6AytcfxjcJWT",
  "key23": "2LxEo2iQBP6uKKTapB1Xsz9G4Cv3cPJvitnTxKts9cfpCzpMEHvWMU42o97zTftQFtxteaFRvP1ttnrn2PUtFKms",
  "key24": "4q36HxTRqhXxbbLYLv9MaqKxbF3gPappD2NiQbPdb5nR37qdxifiqxgvPVL5d27e9Q7vjBqoXVH6KWMgDZLG93fq",
  "key25": "TSiizfedRWcBm5riQSjv1SHg13AagvPya2TnhVcCbt1oEQiJfi2S4XkERiBfTRZrefwLidtzXccAKBGDk31X2qf",
  "key26": "n2t4XP4kZXCbvkTxxtrGpe8d7oZKyDWQkHUpRYTXp1JmzcNCqcc3m4HaAhwb9nJyRpwwm2P34KU5w7oL9XjVv9a",
  "key27": "2Qg6Es9UAmJ7ZAwdbJGMfdBfN7qPQDY11dPt26LgSCMgMKrk2PxD3rTEGGVFndP4W2cjNvENCip1SAs76YCaUtYQ",
  "key28": "3KyJoctjMjECSq3f5v2Jk8ZMsKx8sy5W6a7XKf9BB6sGbsDxHdpFezidn4k5EfXQ39bZr7ZbhxHEby6mDRZYqwCv",
  "key29": "wJNrknJCUYo2e2GUXCQGqkKLQD9DzQD7b1Uzx455gSDN7mu66JM5N12Wpt3bJx4XNmdDRjC1YuuAr3NJCGgU4SH",
  "key30": "gGHiSAkKYQXH8hPCUZztMpoXavXyKoxZCYsEVV4qfBS1RuP28spbBP3GwcHZQ8LZQwtPBHNbHYcVouZFKm5uZLs",
  "key31": "5yeEcG2JXVNdW2Q766h8cubQyg4mXP5Yd4EnzWYAnn5avLhkp4eyEmeTj5CaB831pXZkeqD3h38aPtwL3ScrynCg",
  "key32": "2KhYmw6U5xCmXckfq7N2MWs19sCFthAokdAEe5kd5PjoeANFNr5mxjr2GmFTzjPFh6GNkkp867dcFsxHF235dcWe",
  "key33": "2hSns5arEVpRCsTt3hfgT7gGc2gyFUjcgfyWd2QV9LamtxLFw27G2dkfqhKotHrnTMEuodVp4DrufTEjxtNpRF2y",
  "key34": "47hyziePqxv5cheVNkbpi1WyYHK1owKDwDUoSKM5xFMh9MxeEUjSeEYpVMqHWs4cjzqgCDC7VoFxuWMo4DW8yoqN",
  "key35": "4ti9inTmqhUu7j8rPchTpZiWbWNQwE61Pv8Mdhmh4hn156Ey1hCZBpe9NEznao4RcTEdrSnNcgpVvGq3AxZPft1o",
  "key36": "4oMweGuXVzhwM63ARgpugLNjxUeVx9FffvsNWBTG8JpJ5QHPgkxdncmW45vWoEG6UaadHexegWj1opn4tktKtwYu",
  "key37": "2N6raTEEbGce2bBt6Ej1smSxpdDj7MYrzZu9sKVfaWbquZKxAe6d728fXFnPAFJMgLzLS5uD16jrCgYbArc2nRa7",
  "key38": "4Ceofin1Yx5mF6sf6PoEn8i4GkdmrYho8A3MNEQBmeViJC72RjzAXpyufTc49WTnMRqpPPaXDooYt19DGT8fnsHj",
  "key39": "2SZGPpKeYMQteuPEYgNidPeG7zxBD9CzoboshRW53vKvkuMD8t9cqBGnqtit8ELqbMsCeVAHHv8oaLXBshtAAHYd"
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
