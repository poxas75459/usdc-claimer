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
    "4jH844ayzLUkTsCdztxMoFZHVnouWqZNfmcL7hEesefXRKp2SdY3qwAvVwe14N5Lzt7G3NxYFBDaKGF4HXjhtD1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PeB1qdBdJNnBhFBP1pANG1sx6VvTyMNvWPktKr2NWUb5254c1GgpMLfqV9sntXSu9GAa1hxe7LZZWejry1Tx2vV",
  "key1": "5Fnn26kQ3V6FZVbWHaFAdGMRT6Zo5ZUHd9XEPyde98UgEbKQTojE1sqX5w2M14zTEqBRz8tcJoHNop8QjMusMUcd",
  "key2": "3pFaPVuXtJjy3nefguJDB28fCQJFwxb379in9aM1cSoUkyhjYsL9LiCSz9kV86QHDQte3mnEFnXFNWNiMhqExDvG",
  "key3": "LPp57ntRtRuE7jzkekBHW4MkkB8dV1u6Ge3SUzrqywLhXhUa8dyC1F2x81XmuvUDbLRsnAtuFPsRW8cM9hxP6yf",
  "key4": "4Du5QG98Honve2zo1FGrUh3S6wcrZhXT92JdfeePNekTS44kaYR9f2mkzpQxKAbv4XK2PR7mBX7VhagZZKBDw4Wk",
  "key5": "3VKhRRaLNAZq7SDyxxcdjBzBazqw8n8JT7CJZHR6uC9Pwh8xVkScbtco51HBqjKZdj4rWddWon1ifpLhgmyYNdUE",
  "key6": "bnPdSx1ikg4EuourN6BnHojhQ2Cve1quacBRw2STwnBNfSoZi3e1YwgKUSPwczW3Gy4bV8tTMtvLYWCtm3mZFy1",
  "key7": "2HQnPUPajLuJeu1epV9uJqj4WbGi4DNBCP5gSeUzGcYjWNyGzNxLuYwCtpFHyCtXrAX9PTRBPVSGCVZn6ncM8ma1",
  "key8": "2iowxLbmEF7QRqHmxJwxbc7Vc834XScLKzPMYrCnd7HAeWt7VVoDn2C7yZrScwYMCAoZ2hEkNP8vNizp1UTFqtLn",
  "key9": "4vdunk2tErxKnDUSUuf86MFdtaD1UYJBmnKPomBZjNCTG74DFqQgXRfBossj7qsSqaBQBQXp5xAx5X2nYJCB2ad5",
  "key10": "4UmAPoeHGLbkByVnM7RgQPSoJoAUqJnZz4dSwTnMtQWXG9eb3itZjdTmjNVTTP6mzMLpsYu5oyDVLpRxk11uQ7nT",
  "key11": "d5BNsqc7kq4ZaKTAP2TEJp5AHvdAx9NJohJudofzyeVaYJNZ3ditPKo8GNNLAtw83tPFFgHfRTixPjMKYyqaUuT",
  "key12": "4CfUp5tKRBUVzXWAaFn314MaYnAg3Y2rwLAuEg9hyq8Q4anVNPQgY8z4TdSuaybQerzoRrZz5odFXhbihz8W7fYN",
  "key13": "21GkM7T5DRXCZGhbqQEEWESYv6AxgKPMdASAvoBb2mKsFBzwxk2XD7rkVDpJAJQHKAadeF5EpuVFyQncvuHBHBRG",
  "key14": "5Papv96Vc9Yc3xxXYXRXzCDskuaP3Kxr2q8v9Hy32fKYpTMYRvxQfVe197hf7A7E2qurQxGyFTSL8Dexm1MgYYh7",
  "key15": "5cEkKCZL4CYk41y8efFiWwfRHC6kU7XgCqYRZQw1SjKCA9u1xFU1mxj3BLhqTKNPEhF4kjWsvZKGoGfKg4P8BbAm",
  "key16": "5geUp2uNaMbCXiSDiZPaR8MZtGoMAqu2xCZy7sgsHCCDRqVjexLAZhXzmmiDkCSWXS5McfXjdiyLuPmuKVXzYTNa",
  "key17": "Bsn8YtBfmMfYnQWiYvMtsFoK3DPFsrsSSXvrUrPiCRkRgdjR1wkQSAxxYyaYMREP7SBdH6uKnzK676M9qLaUAzo",
  "key18": "4PvHEzQhGsWq8FARdxu16SiKCeTixasu2VMX1vHiQytjAYRGEDaHj4doKmiC9kuVfcQ6G6fqRxa2Lr7CBbL4me2M",
  "key19": "4LnMmMDuXfagJvx9bp9DmDRFBD4bDFepCt1rc3PE2W7z4sW3hgzj4bvMd7ZGQTthGkBDdXPAVqgdJHa9v8iPvaBm",
  "key20": "5eJMBXHGXP77zzFwfXmqWtVr74KgaS2tA3YYw242wuNq1Z1RsPSfNXEkoQ4pXuLJacZWSvYTmxFU3KFTGSH2GKF9",
  "key21": "3TN4DDUJyyUsabA8zTkmPpkF63AL8xE8XBdjL6hTHjQwfdn53aZMgw6PtHLVUjnRfEWcoVtGJSYoND4ajpW1Uipb",
  "key22": "2ASEY7rqtwcwayDwWCo5LdAWcB6Ne6xcYh7nWeBjjxebytK1B4k4YYh38xdMaacEuF4N9ofjTWk7oRGjXBybep9e",
  "key23": "3E55A7AywvmQ3ezeQ4etMNXVBtSwQrQoRW49LifMXcMkfS5iUBq46fuVG3kkyJfSgbi481NfqMFh7kk1rjozqZfX",
  "key24": "TH4kPXZqPmk2JJGqAU2Q5XgXsJcTf7L3oYTkwd5YDXm4aDeUfamULkTWMARrBUQ5jVf98Ej3mQBWNJwpiAGwcsW",
  "key25": "5yQzr9FjGSLhSmi91q3xmVx2Jbmm3DoxdNAjt83RmEUgjuMxxooBubBYdXQi2xoMa1mQkcTiDG2SW9T2D3EZiChF",
  "key26": "517UJ7zuhWnroaUosAmrJSBQruYwwsMufJ5vhakcJAK9e7xfJMqqEqFGUGt8QmHxRsbN3G5oRsgKXxBcBp3dK9xs",
  "key27": "3YaMDB3UmMbN4rM7kAos7wajXg1psT1a5Jwws6WUTEkZgRTuTLVaH371pB7qrgXDFAR7Yvgb6eGUQ1LxyGqaEsTD",
  "key28": "2HHrJcH89Qw4u8uGUS3CT2DXAPdeJDJsJXfuyznpp31YLSvxtT1UHcewJa6n2jPC7raPLzvXirUvBte46AMPDsE2"
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
