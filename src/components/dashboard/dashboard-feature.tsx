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
    "5mM54STWGJceyyqNYujxDWeeEgq5jBYSENhQ3aSzyuBt5oAGrUsoeKuZvmoPKR7wp4r1i1bZTxVGoMgf27M1ccg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVqdSo9rZEo6LDgrMRQWtGcW1Cve3CVd5wcN8P1Gf5vD78zthpTnHURd8nHfpao6EG8soXFtZoCJfS9TZqL3rQj",
  "key1": "2M7W8wb1oBR1X1TZ4gW4bzyd1poFdgATCqCGigRn3vvqsz8Bp9y1PrKuhCSCSr4JgWgEem8p1YjfwvefkyuV3JoN",
  "key2": "4LuX6DrMtNGVtxNnj5dkr6EtQfv9jcuDSZbtf9xwbp2JrsNnc6Sxrr47DwBicv1c6r1WsWU9VQSJpz2hXrsxrqFw",
  "key3": "4L1QTDqA63jMStn9vLvFhg2vo41k6jQF7cfVLmZCafadaaaoeFcBVPjotpyu25hLBaF7bxLUD8cGExyMvNSFyLBC",
  "key4": "5KMSHjapvCxfz3noZhWHDR54ZFFyw5cNctWZp3QtcL1hrpVGWftVoFfjSmDT1RogyCZ3uhfC5G8cPZhLdu7AbZAg",
  "key5": "2c5RjBdVF318Apo6qFRwQ91wvVJEfjsmEdiPq74KMUPstxeEXuEeMYnsMsTdGzS2gR3xHtjxGkZCfzsWvc1rZFbR",
  "key6": "4LXfwwfHVQZ28wwSnJvSzJdgM57h5VxgGyuojaoncotnqMB3pTDPTHS31b47duemmxRyScifJdiLp2aMyXazSTJe",
  "key7": "3biXC7a133eobSB2t3sZm6gFX57WFgjQgzTZ2d3dRjUbctAvGsBsg4EiDdsbnpgJvcAmEQdMTnmCD4BLYHzAdqzH",
  "key8": "62vmeWQvnr52FvCctMEwz52ccRw8aRdKXoUzXGNjn2RPmmfBBVApu7SpYgUeeczjCEFGPM7hkvtStCRBnSCnWASv",
  "key9": "5xVNmHr1VSKzVMFAzvuoDfefsimJqnU6TQ27vet55BbYzQ2sFn3MkW48ew8YzfgV9hhAw1Nt4h9kk677jBzNZb3f",
  "key10": "3HCRrmJoyKBJSkpsctuuHvc7e5cHvZfoYxTVqS6bkETeQN7LnrAFGuvWR6Kcu22PNT9Rx3LkK781ogozZBsMho1L",
  "key11": "Zv4mrfEpc89exe1ApmDVrFRAWwUuPa8ChZsTRpy1j13YWBEcD7C9663iLNHGzH1GpVbZjNWhPCPSDQBjXukofec",
  "key12": "3YewCqaqBnvvtjb5gAFLfbJW63SWN2RykGJmbTKG5ThJyrZx8F7TEgJWbeXHwstX7Hb55eDLSm141XERN9AnPB4s",
  "key13": "2x6qJcHvcUHFm9pHfggmDMPxqb7F1yyMJEqNi4vU8ohbkVj6G4rCA9NawvAws8HhXySPcoLAs7H2yDRWcHJA6nzn",
  "key14": "4myHyXHuebhMK6p6jPCrwzBUSiqxzw9QT8Y6PDxPzN4vM8APd1pnMZK6qEh4bwCFFUEEVkzy2KUrGVPPCiJDNNva",
  "key15": "DC2w4aRJefPr1QkjAWonTg6nJyGZsx4cdKnEsX8LaV8mHSKpq6Xd57RPvuG71RSpvSWorQwLoHpfKCM18RUJ54f",
  "key16": "ZHA7BEMVkscxFkUzCJycizSkwpQjpgefG3uQMU8ZF7a8WmgEer9Ku5CdhVzH2vDdv7doFnqtNYvsAHinGxcC1Q5",
  "key17": "35PSDa33BcyAsWV83JGQXd5nRueosCCdDU1cThGh2Lv8TsCfVmqhLVYdZPrt1Ls2AXKKuuYW5uKRcpEk8wV3HvFP",
  "key18": "5tC5KwAoRg2ixfBGRaae4TavSJMYf4UBoVhaLvmB8xmAG7UdMEfrM2qKzbm6qfJdWA4cFBoDb7A4qkVW4HJV8mAP",
  "key19": "4QXftSXkn6wupHkGjk2oNAB7QxsevbJWmeAWyuW8JKGkCC6k5nJDK4Nb8W1vrTH19nsVw8ghac3fssr9BBL4362z",
  "key20": "cazEHjhj7fp8Y2bLW6qebWgXAk824aBwmMp8h6DQ7NPBx2K2rpo83pbqLidnKECwSGkwbaF5ZXvffZR33y41am2",
  "key21": "2cEvjQfqdVzUGC9Td6tQU5DtBp9YqBEWRoFzcoRoBQkPixXKXCyTX4JV1u3LQNK7rkWBfZyrt9n6ypEwMGjXTbFc",
  "key22": "4No4Tn2mnSCMEu8YDG55JwQzDmYupVyrWU3XzCTMZCWHpKzmSL8t567Rh26ejthwhrGdhJgkBbCe9TKqCa5ypaWw",
  "key23": "9qQaLPyvjXw4GnbHwbQmmAKsyKtGWnb2P3cGE3KUcTheAg6MK3yHmzXAYzbx8eQeWbrfH6DbvdnJqYtFj9sji4v",
  "key24": "242iq38RnACj84rcLGLpAcv78saWwNVqZp2Mq8SYg6m28rknsizMPT36aBxH6WdshmVsWkVq9R8Vv973p2prucRP",
  "key25": "4DCwmMVzrhFfH37ksVBVL39a5eP9cwN7w9pU7xGT3WURCKQjiAUkRt9DpEwPbeRjwgYACH3AqPizy9MAhFCoeWEU",
  "key26": "xn5B2weZHJUVq66VjkM4ZdygEZfEY9PUJSxhNe9UuqA3DEXV5bzNLsfvE7fNKLHTHiPZDAYTfho5SbaQ8AeEPto",
  "key27": "5TxzV7ctzwsBsqyXiq1tAhB3GHAmbtws9CqZArzXZMXtadKdwf5JEmzKQoJXkPuo5avCEpXfoxpNb7bFstm1JV1m",
  "key28": "5dnbqe23Jrh42YtpuTKY2isKDXoGELE7n6Y4AZLjXs9b3WLM3oYAFxHHNpqejJH2vzEQF1X8iYhSexXnkpkHPM5j",
  "key29": "TfXimehYwF9pbACf77eTMy9cNdcVRkPZjf2FnS5sX3bWgoHZ7LB7hzTDA9wAg7KcNQsBQoVtEQDZDB1yMUXXc7J",
  "key30": "cBCCev1JxSVSUxoHSoVMwqNGCDeRJQcChfJUM4WkUreLt4EHFfA9gg2mXWZPL8y3S9qGTgFfsC5TZmJs5fDmCyM",
  "key31": "2fC9m5LEJ1bDK8ckeNTpWyrCVJXW55qhhokJZMFKmmv3HKrHZLCPKshPWJrgrzitnAdm9tvQfAx1zEGiNntNrRD8"
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
