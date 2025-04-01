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
    "35p2yPya3epPqJjqStoQk8F6WQvTCd6nQBZT3k7PuUoiqH963auXRBUT8SMxdVG365VmtJAe1XgvCVUaRsTycaLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRi7uY79G2ucZM7htSxQxvTqM3vTjeWg6pBFCWB7ZLNfuBbVXm9psr4hbKP5DRTapShe65YnCsyEXhooGXbQHy1",
  "key1": "3fd7z5tw6JUPBfd8XhJ9ya89nC7wxtw7Xbx7W9yKQmnaFkekVZESdgBztUU2FDYB3oKhpx1i6q1Fb11WVhWjrK1p",
  "key2": "3Z2txyJxdHwjhVdY83rR4zS9WcaLhHbHMwDfHFFZ7XJCB7tVG5U1bGLBjB55ELqhjHssa4q4HC2oMbtosp9jviFz",
  "key3": "snByPHU9Yv1FRQRYXZWn6xcapZRys4Y9YBjBbmM59UEcquoGB2K7VeNczsxsaN87RZNDKgHxfDpypBPfKd2aABi",
  "key4": "gcDpcweyHETGv8E2Mzd1qERuK5kPo32gK3CdgfrTqtRx5AotmY4KWQu55vYSBAaShNzzAWtpKwfUFeMTJvQ2ZDv",
  "key5": "4mBd495DAqMdfXUbRkxXbgADCJhB7T5q2vyWjkckcwA54DsXgjCxUTpYDjVvHGf7pv13T9UNfZJWXjrpqRWQRZBP",
  "key6": "FMjmnQa3cAvErxRdJZ5mAJPq12qLW3v6QnG7FHYmhCLLK3CEUz3aAPkkHxz9yucNokNAjsDbzgYqD1AHznRrCZZ",
  "key7": "3nworyaPjq3CHfAJ4ZPnKg4K8CCASjuLvZeQeEGwDbmNGmrtbhWgX7ES3Bjr3g2sWtS5jLwcXHZWPEukZUkQtnjV",
  "key8": "9C1419zsmCuXPAnDcZwkGT8VPPMiYmYpD7dSTJJdnJeKEABDym2pVTX8iy9HZgwuhHUvzCArUmtNmtNWXjiKftP",
  "key9": "1y68vUyjWKQByC7o6hcepmPHmwoKwrL7qF5jACqeUTTDaMseEAGaiQ2J5vHiykyNUyktVHNQHPkSh96YBTfhtfN",
  "key10": "3TiXDP3ZK98FcBZ143oedTyu4zGVeeDnq4MVufGAgf3rGint8qtk3L7LJh7Ubyq4TdGsZN1Zhz5F9qMaWoD1vG9T",
  "key11": "4R2YYc8pemWntrue1FMbiyJugVmXuAPAoHiXWuBBzMupRhL6WKpqsV1zx3mWq3vVyWJiA88MyTf2MVMh8apjjNPG",
  "key12": "2mGuUpdXWFJH4XH87jdpke45Xa6ysv9xDYhKBfJtgRv9ZHT6VP8YiZZih6Ktw7SxHkefLi2MkJem32yVcxvk26qa",
  "key13": "2w6X3rtEZUmBrtE4WCErbjtSGN32BE2rBbuT3vs5p4uvwVgagjPXNgE7pCCgdybxwKCwEkiYGDgQFx4WpRjEWP5W",
  "key14": "4eNG9fAsUnpmkGL4ttBvW5TVReJNpm4aa3Jh9t3REFb26RuWX7b7pLsCWVkyBqF2cWGNCMaWjy48HCwa2HZXturj",
  "key15": "5LnnNjLQMftXbCqKieTqfpvyPP87tsdQtKtyDENqPmLoCFJe6FouTAvGLQkfthSmEB9Avd4gsWZFLf43n95a9VMp",
  "key16": "79nMWGv5tMEiArM1zUtRpJtEFAaSFKXkuJu3Zg6ADSwm3NkeCbqBfSc2MH7ppHMsfYo4CVKssSBzF32QFzZoLSU",
  "key17": "5ddK8cZ5qLx5HTbqwRatt4m1Bg5FNxuNfLo7UtkAHreUqokbqoCAqaLobRbeEM3rRoATzZn9C74HySRDJ15Htv16",
  "key18": "2n6vckNtGqn9cmQcV2VFWxFvpZuG8MWdYCQFTw1a2hKUUjSviLueWKbJH5PeGsFZPeBF4degF1g42x1NmoaAa3TV",
  "key19": "4BVqtXEwNLwNMXqDXyv6pa9yzWGW3ZMUjttUkrLNkddQ4f3BKUS7zsWtnxc1dhQ7QK6hpZNr84LWjyNRaBVojfWX",
  "key20": "5bzUE8D4HbvFYukw4tHXFDp2QrrCWUSN9LhnHLRLAT3dS8D4BoM4CnLNVKkLPb8RdMFN59uUHYTtoc3hMdjuWrd1",
  "key21": "66GkF1EVqL4HxFKSPKnnXP4xtnAU7qrb2a6j9jMGKsYBDqLJNEUTTku3Jor5EmcLBYbWkRRZD4bdsP22HspNecww",
  "key22": "2zDiDFh29av77un5hHHckV95JuXKALeJPdwTyp11yDyGWm1uZksZhWbhKcoedzd2PrZpoAdsu8Hj1B16GMLEaTc6",
  "key23": "6wbWq44W7Rm4Hx4h3hmpKZcSGgNZwLuNwUJ3pGrWg5TeNRSNwYmwxjPVp8Vr8XpPet5HuBEfaP9PgYYmdGvrbXR",
  "key24": "YaRxPUf1VeNGX7xZhH8iqHiMJ44EqT3JyEznJRXa4zN5PANdUYheUh53Pidi8AJrbqvQqmccJ56KTpxJ3A1pLoz",
  "key25": "48i82rb4rt4MMaAT4gj1qerR2ae5JpQorPjHM8hb83DAa7Z1AR5eBkKnoX3RhENESgFquKRMTYqvZLFRLxXum5gC",
  "key26": "5Lf915o6TfaoRctzQP2DG8CuXeMK97T3Hcghg4oRb391GqiqWCgWPDExMdPnb2DBYgwqN42hcsGSmpZqUvSf3U4g",
  "key27": "77FbKTzniCGqUBh2f6y1Psim9ju32vHr9ne2VGPp2Y6K9euVSdXM67WiEtccXCZzBddRnD97UnKuHFU4EZy1kbK",
  "key28": "5gL2XmbReW1Ss25s2bRrLutpQj7Lym9S6UkumzijNc9DtAY1NHZVZsWPTxqbcTo2ji6Rnn6xokgvxMzyFGNbgaAN",
  "key29": "5PE71r2iiQLFeRQC7njP7VSs2VSCXmR7S7UL2cYdvimHJBiMCF5kjDCEyWwkE1G3ZBydcVDdBrRFexan2vEW7k8q"
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
