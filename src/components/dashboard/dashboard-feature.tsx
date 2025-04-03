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
    "5SWYVUJwvFZRiqwCd6xpbnSZKk8H2YVDD2qLmSAmwmxtfopBZsGxk4NVxodWkA52GwUSRa3e5iquKgbpGeTERkaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4frJJdT6QXKfMnHDWs9cYjLbaa8tkkQ3G5W5FXNCqXrZuj712iABEUeQgraSeaqgjFC43BpKTgQtLVXikoHQYmPp",
  "key1": "ARDEuqgGhat7JW1eosjyATC6KFEGRDLb8mkeLQ7ZKBEZjtQx84RYP5rZ4Ju3up1fMpPG5KAGjoPPfTvrCfJ1uXc",
  "key2": "3P5TMgeqxpBXikLeuJ4pVaA4wYQCnYtbzAbwfu8rek8Dia7tXKmLBFNovGecYWLzSP5mizapPhrRdoP9eJz7oGWJ",
  "key3": "5rqBMTy4NBuvRdp7smHSk7Qj3yYWnyKXXZMYzk1WkW9wwfZ8p8zWwwEYsqn8XZXwW46EL2STarvUeuDXq6bbpk3M",
  "key4": "2c316WCogbH4aMBtXVRqnJr47xwUqpMkGoJxUBvoCTpT9bjpLMjjhBTy1rMWptM12pBmQT7JmLZJwEM2DJAfMy2U",
  "key5": "4hF96pS54pqUHKivoWGgm3eaMZ7MNKP59soFB5f4aXZgCSTKdyMKvPWpnDuxTwnL8jbxt7c3CQ7Q2x8kyq169E2h",
  "key6": "5aYHXdtV9xcECp15KjkaWwj5WidKpj6SBA7NdNvbKFQG61RHoB3E8x9uU6sRtJeYTY7nLMVwZBRtkUub1fFF53Q8",
  "key7": "5Z1VgEHQ2z5BRaDzGd6tRBFofcFwaYMNCigfDzKCtZ7y814RcPhiDmoLNSVu1q4VRoNDYJBYEfLPkh9Sbuv4nwmD",
  "key8": "ch6a63pPBFs9GS6kN9KMR3TMdTnjY5L6kh7gkZVwVSnT9sJyLFwYk9wpAAoZpbHnrZ4hn4NaTb1DBnhZmB3aJrt",
  "key9": "47d1do3A27NBRax63q6VzpRWDbNHLxzXVkKSGJQdR58Qg4gL5EwQxCgwFVGxynqCFfdn8CxZGpjeZkUeSDysJdbo",
  "key10": "2jurG35LGXDusBpR5fS5AEQ3VaSbpeiku5PwmUyXgnV1vP4qaWL9RZoBPrrq5f7KMCYoA85e82hU8e491sbbAfJG",
  "key11": "55pyJAgVi8ivo6GjvBzKCny572U3XZifzyuvHzqJr1Zt5Eu7ps85vfJtG5HCZoo3yPbDZFCs4Hzv1rcAtwEVRn5P",
  "key12": "2f3oMWs4yNmEuFqBwkpTFkL1BHpDSvkKez6egxiZM5enJkkkZnN2mhjj3TPXqBQBB6dvmT8FD9kyQVnkuEXLwYkH",
  "key13": "5zUeuakYDwgTMnmgkPoXWV2fbwNvcSB6fNds8VenveFdLq8mry5rbKSq8ckBMi9euSvSZPmCqEfDMYv15B2Sj58x",
  "key14": "3LFYbkEKpuXuU1v6fNqPfc8rBDdADiExy62HPecYzp5TT1KvggeQwxhSdmLRpDi8g5RtMiRg5ce6QAHLxVKATUxa",
  "key15": "3iNBkTxmzZq7jSsT5uHx5ZjWS2Ee6WinkS4JSCazCwcHFvPLxzv9ZwvNHEHbg8PuAmjdPPF6WQFz2XAXjSN8wcqy",
  "key16": "QMtsmCGxjg6PcQaT4TbfGso1NJXYPp8YnAFomE3R2dPPoeRvc74GGfwAXcbs9P6hxX34XLSSp7mA1QFcVZk5QBF",
  "key17": "4XfsEpMmyAKmQHeU833yMdmJGrswXDMVaoKSywV8DsCcxCFPgEtcUkZ92H49caSMs63s2bmNa9PtWBXYuL3wBZLS",
  "key18": "5qJscHDjj3wCCuMrUTabkL9vyNUA3aRPxzqvtiR3i8SagRbR6Cg9CbomfXigENgvhsTXhkPuodLW8LYX18mr8qef",
  "key19": "4ycv4fbQ3P8YwG24qs1QajuNhFTG3vgRLsN1TMDKzp6SnjLbHzqADsDSKEhNRm5fuMTj8VhSkEHUHdacTJTV4rQG",
  "key20": "5p9htnQXfmYuBXZr64DYzvpnP9inPJSzjjoP2BejUXuJ3RKPBYkczW8cHCFPEgHRNWkBzcpyk3YCPnpSWpdAHSW",
  "key21": "3nEtnVbqWUVdWKqKUjpRvsr31LFFK2C2cAn8RGwARa89Sd3JA4cK1fz4Yczi7ejrZfbEsHuRykLUPwJhgJkiVK5w",
  "key22": "3AJixtD57itF5Z8vaDqrr4zTowkNaYSiGSDxKwnQvLe4QTEnhKACkpXQxV8tXwhyH7tscjVCixxuyTjGC3zznjyz",
  "key23": "49Wtwb4Dhm9zMgbCqA46CXkKhH7hv6pMWfWiDFLCYktnTSd1gMkn63Z2D7mbVeNWqAunGE1AjmLaoTezFbbbGMvK",
  "key24": "5YCqdfkF4FT63nd3vd7CaBBoJmue6cu1c3Vy4WJC8p57gkTrTQRL6XLoQd1FzcoZbDpTG6twdZ1Hc8YcpB9E3pR3",
  "key25": "3pe8wh5kWkQHXgQqi9RjwgTKX3X2u8d2bzVo7ZuuBqaR4NdR2vQAdwQEbS6gS5HQovc6f9sLxU8gWSRybXamy8yM",
  "key26": "4SN6wcMni9Q4sT9iQt6JVwzuoufjzssL3hYzGuyuEmBZnkmavxuLgoStVLhFVGewfqWqtDFTeFXvhu2nrYB1i5bC",
  "key27": "j5YdAS1ntnJWHmj1GPtcAPGD7KdPhgLgca1NsyFgSCTw6HM9XT2jE6bsT6PkiE47Dm99oJhWWkfZHh7Xqq9ijXy",
  "key28": "4t1wqrhadUBAakLiYqkAkkRknMDEzZXM6Y3T1cqZj5xv98qgkJ9JxxBMYohiHwS7JkdgfJwaY2MorTsXSmmh2vWo",
  "key29": "4F4jCaB56NHNv5uJf3p6mvE7GB8VgR1eueFKHdvGdg8WHVrEPgkpa8R383WTuA1MWRiTeKA29CLU1zWnCb7tYsw3",
  "key30": "3mviQSYEAQWGjmcQPsDJbNHFRE7nWAK5G3HogLLPVMxsaSD87KkeTH4jxdRq6ePN85xJe2GxKpgJNte1BLACUnzU",
  "key31": "6BzciDFF8rcU2RjeycbJ9akuesZgekTNk6pNAJCmmuKtjrEJjQr3Vq9ftRaXWhWy9zxGDR9fTuGg77ptFWFAdBb",
  "key32": "KKMoTWTrmbDyAhKt16LTcPeB3ABTEka8pF7BL1un8MmLCruA4HC4zfSMdk4CJpmWP52GfDjWZ3ikB25XLraLrL7",
  "key33": "2S1UL4AomEJrDrvDLj3VorFZnYsSfa9w3zCQZFXqp8a9ux4M8ogPNMsZRB8TdHgsW68sKQwKjyzb63omNrDAVnm8",
  "key34": "2s34bHyVixQeHwcH9BbvBf9tuskscpJVabLppWdT87J5tETm7ojFurLvx5upPW6LoRDe3mQXYQCq8VYf1YPvFMhn",
  "key35": "4QgMogZL3TN5zoWUMU7772CBrygJ9TZKHJiA4a1YLzzjWs9m59EEXKxByXRtEthnD3komxrayrooY6Eb4NUhjpAW",
  "key36": "4yM16nMeYhHVtgv2JPCRpQ83ssydJkHaLa93pxn8tk4Qc3bVAFQoJaLFEsfF7jzLcLrg92g4WEDRJHymRU9bqZJF",
  "key37": "sdMsmH88fUrzSjrPc6n29b1gQ8xWcuxFY8iRoEEmuDBc8Pkw4ABKhHLdt9a8BLuXEsdmk1GyQBoecFa4hPKENEB",
  "key38": "78ZjeTE1m4X5JW8emkbcyShsUCi3h3WZUjyCiEEKA1VxYKzRER8fHBawUU4x4nmm1yGvMnLUHJbpHjVzrZPyxnD",
  "key39": "5AyvqwgF6KYMfRHiprybU895ELqKz7DxaS3Z2wKSiTQeTsSXi4xEA8h81NJrAcp5aoEoxpPDsRFVXKP3gWaSvDAW",
  "key40": "55V7g8A1qx1kmyTMexhGGtwJr5CHxMZwZWxr4dmGKBK76VfqEXAWJ8RQc9AShE4ufdkPhN2DCnj87XW6SN3GFKod",
  "key41": "5NrLAXDyBANd9DMtxy6gRnQUVSA63Ftm2TGJkKBmaNTSgf1a14Rg1gdkiyRLkFN96oEtKGbGszrJetKXyUzRWAzQ",
  "key42": "2Ff5FgpJeqKA7BEWTdPKwywwxrmqDFQvLTLGmcQSQETk98bqwd5UeA9dX7fwqxfpvNJ2Yk5Uowj7rF19XeCfmVT6",
  "key43": "oXqg2d1EEBHaXH4PCaNNc8vHFuTFgxyrUMBKyYPnkbNY8ApN7vmyChkQdKEgAUsvDwD4Wk6CiDwTw2mtFa4HRnc"
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
