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
    "39cVsXX1hHnefqiKiJVM93wkBbk27Qyu1nFvFNdZhFqoUbGXsNQA2fvD5F3tXEvQQaGLdp8hem9h7i63Y6bccvuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CbMfUoUppvNu6sEYCcjdPgyKs7eeDy8KzQExU8q3imp9qWLn8fvrizLq4L5fEQ7MA3quHBkkYknCdPraAbmbFk9",
  "key1": "61EQTk72hsBVa1PtULRWi938mpHxdX8hWgVPdVsYXxSnJxM4sW6XXpBVALEN5UKrvLAqZw4v1jxt26RJNMf7aqwM",
  "key2": "3P3owta4ACsbtX2GD1SxVNhFszvaZaTpEKT7KLt2r4zJzt2HfaaT6sbyadKQYHN3urYgD8TF8yzsSV98hnswPfrS",
  "key3": "4TbUUj8xDVoThkzL9dRzffNztLhrjK9ZN3gm4nUswTbkSFT7R4f2sWNGNo6gwPCucx15KbUPbph3Cnh4MRdAdpXi",
  "key4": "3SDwYQ8oB69yK3G1qKUNBA3VuvCjfZM8VvGeRXZuUtvjm4JCZn41hWqbmf7CTBosLDrSuL6rZHysy97UWPnmTCUt",
  "key5": "4kvdrC38NSZHseCYWrQhLsh151vh2YkmBvYBKYkSs1Nd3G4uh4WGfwZcuivNvauGdMyGp6MGn5p6m99g2GLZrLjw",
  "key6": "4EfvBaBoegjnh5zz7o8u9xC1Qjn4fhXoRvA77psmCFtwkRUJT72diro13Y4i5rqDjx6CrAMgSzwa3GR11gcwzHb3",
  "key7": "3JYh5GFPuvmyk5dVskkkRSnqKtR3ktJJssjfpuYLnZJQgDpqk7fL9usY8AmqzDkUHWpGJtgwcsCPx5sj4HowDtLb",
  "key8": "gvrApJPSSFWRQzGyF2iQh5LTJhgQxTgStwwGHfCNobtz84En8gSWPyW8wrCmkBhtdSyJhoLWWj3zNhMyHZEFdu9",
  "key9": "Cxgrn88M2zhWmaaeLXjXS1oeq4Eu1a5o2TubS9sgJHTHc3g2u1UykpL4NYzc8LQe5NXtxiSPiP2zeqZ5Sz3VMTc",
  "key10": "5u4pBhJRnwu1f1SqRt5QRinPYwjLEPBfSFiqM1eCcBkw8MtwUoKCh1SzWbCBhga74vMDYp7xp2XAfwZyqnD2TCqL",
  "key11": "67GK9CYCqgJtq7ueVnWPSp7N4SQYTwfeVAJRHw4555CodGiX5CpvdMjDY5j8g2UPxVhKQgE6LBdBirr4BfiBW9tf",
  "key12": "4uKMgj4M4wRKR2Ff4QxcDrN4QQBwAyzHm4fyFxHSGhE7cnu23gRv32G8UijiMnybRz5WrGJdTA6Cx9cAhAu64iVU",
  "key13": "5vGhAe4UD43uxMVkj4CpbSFa6cm8x4SRx5ormT5DctBd6TnaFS1M7wLwbEoQ15MyToEEL4UMRoHfbffnzxooSchU",
  "key14": "65HbA5pjH82ogc4ivyyxB3rPVLaW7SJ8nouLR8rsrbrWBzvLEAG777pRhWzW735kA979FNKFk2USFy2VbzeWU6sM",
  "key15": "5XeJaopkWULSDS7LUsaJ6WS7auJ26Dc7zRmDg69yB8xHQZHPqn8BDTS1fVeYs5P1stZZDiBdLutqXsWoccj95Va4",
  "key16": "4HKjuAuzGiVV1KHtSXXFLdrfoneQ7Ck3T7TPWjaTmnavuQ5ZRrrbmRW3efy9yscm55eJP2bXL8iffe5bnKD7CY44",
  "key17": "kYRqP3iQgwihpdVemZDf4amiF5gS6wEc3yuQrDWKVPTq3ERx4kFBY5m1NrfTTL3NG8hfHLsAm7psUBfrReZAT9p",
  "key18": "2E3dYtBSV7zksRS4hLYrnifmAEzx2pMrqkxXv51FAYmw11P5iHx9vE5mhESURgWFvZtMzq3ow4u3sJNFQrHKYzSG",
  "key19": "NoweHNR4PDXskPYvsEPmEvxM6rfoTnAnHeRkiEfTGd4pqEa9hHT5366tPqYW8i93SKdF4zXALWabuSPpjA2HpkS",
  "key20": "aiLtCAyyPHECYkJ7iRTYQdGCMjrucxLGzEgRKtBVrY8V4zWJrc5UQaryTNRTiGV8BWmptd9pcb7WwDTao5qV2iC",
  "key21": "4pV1pvh2SEPD3tSps48rxDHvrWrWH8durYAWfnXTLNWbyhnRibn63rWRqZErUrzmkf3cXKCtQ5msma27bQr4P6iU",
  "key22": "3PRY3jCjyicLhgYREoXwGedEsx633BquukrfAAMaj7Li8youbkyuTJe4mkiH2EGKhnwn82pHdcmi5bCVzaE9ebgb",
  "key23": "2tijKizQusPyN5ScJyLV49sroacV5tWCdw6fWR1E3RCgj5AemjN4re4SVDseEdc3NLKuMHAhgvmbJi1hLDd8M2Z2",
  "key24": "E1vBosrSuN7MscGZW1MrSDA9apaJWvmtVo9vnZj9XD4GQeBGUxRq1oexf5CvjvoocK8bkWwcAnPteszZHeVkMEQ"
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
