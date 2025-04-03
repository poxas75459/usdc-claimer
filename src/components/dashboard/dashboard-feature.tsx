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
    "FAMd8f2aYvHqqRAYsVMj5BVtBeAaiu2nGWQ46rSvEWasBGKjmMWGJCSBuBWTTTtbWMA88Be6WM3934te4hPEvDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2apU7aiG7gS6gCyuMzXPNUkgh7SrYKrFaABuwqt9do7vt8dE3YpWLZ6RhJm3kLeAxV4oAc2fz6MfYAvxzXziWyfJ",
  "key1": "2MUiiRRHinfzjcserCKGFmYozaG2wyuDpQLWmWNyMhD2zYDhjQZF59XbAgK4JnJGVvSHYfbg5Y24xQsjmFjzsCGL",
  "key2": "5nWhwr6ir2a4Cwiia1gDek91nuanAjPjM1nNYWL5h7fU2Qj62m3b2XdhGvyKe8gYLMpTRW88iPx1YD6Decjc2SBs",
  "key3": "3CUwFjcLQzbzqqY2Ticp6DkwdRn6y4snvqVeBBaLvaG9VzVeEqWEnk2c4yggXTZQSciAsvVsLYaXAdqBGPgSCKbJ",
  "key4": "5kb38aQFKWaMpX57bGLmCPNS6zLvznAvy8CxCmVGzjdLAPMQtpDcgv94aauHyRFXRxnYhYvvHzSwgPAAHRFVc6MU",
  "key5": "pt2m7Gj7JxEe3xP47CN52evZEv5QTknTKkZv5p6W3V6d7kDD5KKaAoTrHWNMjuezrfE3fS2Ep9ddwhk2CZG5Lop",
  "key6": "3CRKjHjEfQNpnFCymqsLcX5pUs9xxhQ5Q4q5YfsYohzH9Ad1taFehP92U2xQx8FxA3tK6F4fsfQzCSco2frpTRXS",
  "key7": "5nV9vBQ2Z38WXxEDTQ62Whq9tu4E8Z6gTtmDSgGBL3iy4vfh3bcVHVp9C33cdoasmcg7PQeKnwjZ5j71Bb1qEyAx",
  "key8": "2umZ2nYuZ6byAQHptAR1GdPAJNdDr6suwXqcUAbtTFuPiAazMtnDgQ9HMx1qtJzmDvFasvnY2hCVssRGmZZRyKMj",
  "key9": "3ELQPs5jrFDwTA9TFLmMVZeU9DpEVQ7Br54QZFHYvbTB9iWnbJAejXzmpSYeJMJr2CuJbksJKfV7okygkykz44EL",
  "key10": "3E78twP3fCfKV4WSqUHpoXkUrbDZ2NhSyru5vzAJbYXfny1pYnLVuUqvSVEj2eBiorSk3FJZ2zSQsDnUNUuqXKFr",
  "key11": "3gbQakJMuypriyu7SGUZsBfRijzteVqQAxpLasBiy7oJkYST7oFMrQSaMG4bp3dmNTvF4yircsyhDBpmfpUjL7LC",
  "key12": "5sMH2ts44RaBJaRELJFXANUGZNuQdCg1sDRADQ9P4SYkHD6CNNqdBtTE5Y2dm2Tw4LhUM7ePt6w2u8mvMvnQczbE",
  "key13": "2wPeQyZ995i7Zed9EwWWyRNQdNBanWMV3nZYXt4ojndfqB2E8djt61jEG3djtZPt5HcW88Yn2b8pfDjS9pgeFCVA",
  "key14": "keM9jCbHQFF4Ja6R1n3KG6hahsHBEmv2of1nxMxxMTLN3addWRnTXt9Z29BdSnzMVNt1CgYdZFZQxYEfhSqd44o",
  "key15": "5cieqUdoeJsF8zHcMWvJdRdymUmhZZpXeM8q5TfQnEk2Jut8AU1StU3RwyshrmCsyhrGZGWhQR8b3UXXNF7vZTXD",
  "key16": "4WRG7P5HqgF1eeRorifT2WzN2VX1tTMNDAEkEJdAQeHYCtJ2YP7gCcbnm5pB6skmDdEPhkk5BTsuGsdqEBSBXguE",
  "key17": "4r5gBue1UTNXwhwKt3f4LgyZBSa537s17Ndv5JrYrqitzsxQLLZ2ELopARXmuovkN8sZsqVjPfZ9y3SHtQh6MHvq",
  "key18": "272rs1p2NnFbN9uv2LKzorvGbmNDdsqJaRMntwPbvMgVxidiLpuAkSYYXFNvCQWpwrZ41JWJt7ZikQujzdjcXito",
  "key19": "5sTG2dFY9DoYw78gRpjSPfyZkNSSpyFkXXWzHwSrMk7kXeGUzmWLgb254dYDRMWRn1EyiopTajhXggaTX2Yp3FpW",
  "key20": "58kmQ3Jp96ig5GoddJXonFkzUmKBrz1QbEGBzxPToompg1FKcqeCgCo4qH4QNpC94Zy2c6rdmE4jpnytRTovku6Z",
  "key21": "5qYftr7sMseq6nviJMj6DGJp8zvW7zHj97AEpzP2Hne36LG6wuwQ74rUF46263WBNWAvqxuFbLTNvH9nArQ3LUhn",
  "key22": "2PxDDbSTcGQUg2RZLLwndj5biSnPTPmeK97mRk2pGqSeW9C6rrYm9BdyHZzERmm1118DRj3LWYNKERq52PGcaD8P",
  "key23": "5ePgd6bTx4B4wJ8rG4fymv9YQd6YS1qSAGAWc3xNFWfaQAh2JAtUAhB14ddSUHTGa7j16nRgt4SBBH5qMqdN5pry",
  "key24": "2hs8Bru66YUGMeB1RuEmeSnMPimxzUhMyyZNM3MAaQzFZhjZboQgzqYbTcBRk7SqExraXdGR6txe2u6K4zVxXGYJ",
  "key25": "ps4KRhYYUgKkQAZrTexc2FbCjhuXkZXYPb7w9FHVsTuEC1QdBxjvqWGRDRW43kDvG1qTiKC5b8AbnUqob2TbCuu",
  "key26": "3KqqmivmTmhrdVQJ3XV3QF9bC226rokdiz2uwUEwbnM6FYt9MWxtaaiYQKX7w7MwQKZJNFNjNoVmW7PE23UnqbQt",
  "key27": "34SP1kHrzwqcMZLoRzcVBLqUVk5N6uQTcrbeFTuocxcEDvteXCzo6FvWKtHz23UMudLRAcy9LBVaoBQnMRabvaFp",
  "key28": "Copr2iaFk5CKShinSwGzPrDcGVmmt3rrtk6TyJ8s9d67pyff7Z1Ltyp34PwQzLDvHAd7bXwD4EwoXQGxqkDCJHZ"
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
