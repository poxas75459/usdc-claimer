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
    "5QY99c9e9vdxcYk7LEZDVuW2YHbtFLL4bM79RzdCMFoajyR4duoGhqkdswgH7goi4eNFNwHu65MBMn3h8M2NmPxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7PBFMcc4HafCxGufc7vBAZ9ytmDBRH6mqubDSS2AD6bFPD3rhnQLiTPXGSQ9p2PfoXq6HfqvkzErCkzyKmuKAs",
  "key1": "5rbbAAHEkDJsrnk3TCPkRcPKeP6wGocQQQnf9hGeM6UehXdsVkXaUvdFvHS14zk2aSgnBazGBVcEceB2LHiMTxTe",
  "key2": "KhL6ne4vcnzdLdXJM5CNjgZno3CbmEDqzw6PsCzSYuUo5Hq3aDj85CFkhV7fxLioejrwP58jXjHrExiWgXUgnwJ",
  "key3": "4Ds2tephb6DUbPL3Dq4vL7GEwgABGYXe72SugE9J7CFCGBt3LrSrtnkYptykPjKShZPM6h5ko9X8U7SoqNPme4b1",
  "key4": "vByfpdP1WswTTJWSTf24ieNusm3afj7ErRuNqxU8mLYeiZuwjrMTtJ548FFkrpoBwu7TUmcJfuXniQ9b6AJDcsZ",
  "key5": "5UpofipHhrugArBpeemNAnofDwckuwposn6wiPy6sLr1UAsc3j1u21SyTrkeAWmRoVEhyBLGbnT36LrpG9mpND31",
  "key6": "725KDC2s1QMMcmyxX4jBYeWD5d4C6ubKKk4vjkGAakpVapL6555AdTbMEsXYXibn3jHFJp3ECXJ9PshWknZjBYg",
  "key7": "469HTjDftCn6GkjDqikB6fz8DLvjW5PK6HjzDxEvPu9ZxkQ5wSZAfMRqmt3Z18BCoq6cDSv51Mdzq3mC7TxQdCz",
  "key8": "4BRG6jtVdsuhYjHG8jmoCiMm8V7NQWZDz7baPb6k6ozqSybiaiRcTgnj3Ld4VSpBjpohrYuvMcn7kEVftQPoXaLT",
  "key9": "2FxBWFmfSAXgLz1BeycZLUWUHMzRpfsySbFQxLsLf6V12h2JWQheqVNPdQ6Y2G3oHjfofHcJrkR2RM9opuwEDMnp",
  "key10": "QRaFcTmgZNvvaypozS6mPTx8Z7pbQJ3DJGHurMbs2tAQ5cc8qdvHhbVSxQfvBRAjSvHoufW6SXPpwAtnQfYHSp7",
  "key11": "2dT5HNVPbjoShYf5xpY8ptzHihXBGUPV4qjh4psjGFbDQyuy3qcBvuxVEjpKkAXS8DkYJ8biReREewQKPqKrSUfk",
  "key12": "5CeiGLQghvTQdyS5W9o6yQezW6YTkRmdgckkdDGanNUFq7fqM2Rkf2WUN9vqsxbifuquFqyxM7eBQs9kHixGU9Dx",
  "key13": "4pAbSaSSQp7z8nfRosJStK1TqNKYaqw1ruqJqobFrv3YwtwK9RbwSFWAcCSg7qmHfbxSiTcgSWQvzJBqWqVtBBqN",
  "key14": "5dJsBNRqERAVB7FtPooPvGx55VG2iwENCupXqoEc7a8svuFir8i4uy8kNaxbQmwfJggvmNw9tgtwXPRuzbT58bjn",
  "key15": "4xPuPptDMcMwXy3gSjyvnMJJzWtnMFgtt9APZQEWVTEUjGw9uGMYrasZ5eSxjbWw6JnvqAkwip9xsscf1HLDPx8B",
  "key16": "2Mr8QLbVEGV8ttyJ6gPLZdM7vvce9toxYxdZcJGRUyfhJQYUfF3yMdTfuidJa2NY15jtCW5HZMy6Yi3u3hYw2tv5",
  "key17": "5r2y7NT1BHdzbujjzcFXfoM7DK3PXmxqpGP3wNNQAjC85U4NJAGo4673YfmHhD3kZXPBg4Ba7EhbKzNLf3vxMRFW",
  "key18": "4nbygnGEn1Wgi9twDtf8spwcbxVLoYBa7Br2gz6DPzB1wEtkZ5D1YNPEQbiqzaY4KcvKLUd4ryJX79CkgcviYZfP",
  "key19": "4z16gGU2WpFRqEzd2GaBsGmRfjLaTfFJVe1om2HSzsDD2izfEjMB8szZbhzwGiv3anWxkkJrowaeZhUN7zufat8y",
  "key20": "24wtKvDE8575AQpYirjEtW29dhUBmbbKzHx3R7VZkLv99GXvbCPzhUXe76w7pjoeU1yDpe6DNszU9LLJpJbeuWxN",
  "key21": "5LztKfM2JKeaHZ8REvDa1tmJbaXn85XrGvGQwQJgrwf5PZuj86XWSKP4TJLJw79egVAg6yqBmDH23dSSvbooQVfW",
  "key22": "3UEMUs1gnK4vaq2s3h5fwSgWXemdp2JTDu9UFCVKtD2U8EXfv8zmFGsRipbBDMzAGTqXvqaCAegHYSJ94avoBeRR",
  "key23": "1f5SDdAwLZto5fXR5GsZnAvmPNPTEdnSN7UN3otkCHtxnCcDM9y78Wxt17ViyntCgajeouQdTzFW7eZ22asrFpQ",
  "key24": "3bekFrFj4aYr4kMYrKCZhF4bMX7eyoX8486tkFFTPNgCTy95KCo54MjL1L7YwHTVjmCA7brPS3Mr1Te15tEDNEsJ"
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
