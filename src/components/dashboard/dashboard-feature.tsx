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
    "3b4rKwnKHoXv7aMp5CN11UQtjssv4s56gzDS7fFRuaZUSvWA81G5kaPbVt8fwARKEtwNQe8ukRhpANL962dY8F5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ek2Yqwow8BUKT4KdMZPi7amep4znwDGNqmKFxgPvhbKpd3fnSjB7rbcqFZN2VXMBKMXaHp5k68DmS3ps1u5hBQQ",
  "key1": "3zqqe1GjvoVp3WxadhfWw2BJapAybeNxpdKht3bgho7vY7HKkxzbRMQrv4Q4b4KEDQ1jjpjfdQKyWgnYYdfY1MyE",
  "key2": "2mNF3Us3xR1AnLrd3W3EHiZsL9eJfTeBMdj9nab8CGDTGnBW8SB8fSmv6P1KM2RFAFj7TEHWfWUUHQomXd8e8g5f",
  "key3": "3Yg8ccqC6ZM9ap3aQKtsD4QCu6n244bpxDoacnF7jQKJcG3LyA4iMNWKhzEgXLYnVSYL1xST2eJqF4cWreCGYtzW",
  "key4": "4u58XJphvxAGgfnzqm1jb9472y4dM1fJy3Q8M9K8S4KPATvisihA72Xj3LRNZo492fSwSHoGMvM2yVevEiL6jt65",
  "key5": "TXwmwbwb3G6B3pUc3m3RqsPp15jAs8Vwe5cyvgavrRayXnGpj65sfkJaJvT9a28fKB41XDe2oCK2GRjixUPt5RS",
  "key6": "7HNpBFJF5EjBVP3YkPXwYAazwpBv5FpjHU3TUythzgEWg9Y5RHXDeQMm2w3ZPacjB1tgWG36epqoN5fT9qESDLo",
  "key7": "5myGtSXTgfZ49rAurQ4671yoExPdNSkjLFKJNMcw6SWRR4gRWUU7RvcKZEPuChvkLJrQTKmDRRfHVaXY1rxMFvv9",
  "key8": "2kNVjPoPnFwVTnPbkXkRhQHTRoJZWSXypHnCXksxCs3mbmZdhL56yXQQpAFc91jYoe9cf54V2EeVhVcczf5zqfhP",
  "key9": "1DjsbEgxRmXkQqLUy8MzziDvMKpFMmsKS9j2bxnwJxpt9GycbmW6Hp1b1YYMZNbmz81vzV138VPMuJn5HjiBCyf",
  "key10": "48Pe7S4gzihVb2NZbjqfLb2cmWiLxfckpUGV5PXbgBs28jYqpXb7vkuwvpyboTbkc9eotUd6M1YXQrjbpHbAPbTM",
  "key11": "3hVREo6zqEnPHrihvqtGfFXBJBgP2CkzezoWnoxCDmjs23uuhd9AMskWZHUuLQhyWErJjTpknDKVm7WNvbMa9m2Y",
  "key12": "ZwEjUb8jYnu8jr6MpBfBtt1HrGTUm2kehRtMDQMEeFp39Fv2FAajduGyfbL7n93e4CSUD5MVVH41JxrC2NgNK1K",
  "key13": "42xiRTX1Nnd6hE2esvRR4rvuJvRnM4VNnPVrxEoYBXb1EqXVnRheJJMe1zsYBJc51vtWFofB5xw1idAYSAeV57Zs",
  "key14": "3zn53oUvwf2PmzYpgwAVpwNJDr9rUC8cztHAjdWNXo8FFwPgksT4NbNba6xKjycnZNgt5QZkrRJQ15vRPnVuEujx",
  "key15": "3ibUmMxPGxnY3jnVUora9FS6cxXCV5Ngxj8jEaUAGFPrKCdN7jMSJavoqom78myUXXhqhvcc8A3LG5qubX7STVJS",
  "key16": "5xMaH1JTKGLFsGmX2o73CV7denjrgEUB4pjCfeX9x8dD3paG13PypAbcKaD8GtBZVxw6UEJ5i38QJ5JnVVZqM64m",
  "key17": "AD5bLNPhAgd5MVN4CSYw4aCimmHXxamqdTzbZD5p3EYboeCePZfP3Ca4dcQqRhtTUkog3429fxKEbb4jEAf3qW3",
  "key18": "3gghmA3Lj2rnnHTsDttkyZxAB62XsqNRHBjc9TaC4U2eEJYemiNDqQeyJxunh5ogKr2YLW2aH9yXCjhUJipYtZD1",
  "key19": "4qNjnPpM2R1zFRfUxB5WFBc3Sjhsn7ekoubuUforAE85FHf9W3YXroi42tKKZgDL2vEsmkfSP1ZuqvtpFRHs561V",
  "key20": "etsYZ75vvaTvtgmMnp7azGv4BDTeyUuDKszJxFbuurknq5rEC8PEZxpVmKK6PkZXV5XZdKZjZkmKxGce3Us4JfE",
  "key21": "CFjZ1uGQvyx283hyH5TJFSXGvQP43K711SQPKBdAk6NtgU3EyTwFMjfWwo7burBXfAcPEVX5c7ViLYbiU8KoPBy",
  "key22": "4Bn1FASdscxHTpJpqV2yXgMgA451Ah54fJauTeF7wqvfz2UipA5KwmfxLDjwQqBt2V7eXtZGrWm8pXte1DCnCFpf",
  "key23": "27V1P8keTtDuKYBojcr4mJf2oFUaSFLnZqPh27ueoHCB6sEk9huS7PF5nkUXLSAWiVDUQBUYHKfQREVoViEYLEKF",
  "key24": "4fZwSsjWpUNUCdGUo1d23kWzrPMiWErW2XcRtccuocLqy1fXT4KJ8qkXsvWs8a3D9h2ykUaFHZ9EdwE9vkUFf1cJ",
  "key25": "3h833yYekXqapX7KGqzboyMsVRnfPeV5dsMLLmuQgtfWUd5c6ArtMPAmeJuAM5PwgKvDNLrHs6BKxb8GacXDHXh",
  "key26": "3TcHNCYWaTbWV59he6DDNCoC1XqCdxhWL1Q38KnErdwaBbS9Ht1wHT1duETMmySfxeBcx595Zwq8vdzcUdPS8Pj1",
  "key27": "2g47H56ozkBSUJCgrWHP4LUKn7T6ikFVA9QAAJG99eu7zaxceJShZZumCNkw9t9eQYRJFRvVRKP1kk1f7Qvkap2q",
  "key28": "5scqyYWjaBVWdXh33ntiisWSAwnVjf7e2vnJLsCodL5EU5HdaqBb3xmbLPGW2TTXfUv5k4jTn4Umwdewd3Sn9h7P",
  "key29": "5JLbMNXtby873d6hvWHogGLgHLcSLjvPLm5neSF4nK3iPEQ5KBpJCiMxYmwUdAAKNnFwxXZ49ZkLMx4Ewis5aTZW",
  "key30": "62M44M5N7QKHxVGAiJKkCxRSLQDSEjFhS3jxdCY2dX1W7EyWWTk6bPF1SuUfwwJCf83RLLPb5bpTuaEPcnc9Z31S",
  "key31": "GjbsMGbQziQufR6j4Fe2KDELT7TXiGAgXecpbx2E6S9nS3J5wVKp8HbPeqVEXjsAtiWG7ne6s8fMSNZfQN8Y3o8",
  "key32": "326aW5aMZJM8S1W156hpZPbDpBciJFV5fPVdjXH9wmLNgJgGS2RGNirJbJzLQ4a8PCcUwDTwkP1Qqh8qHiLS5rwH",
  "key33": "2JQtqYuN39nh5ZL3ForP52BaKDXL3jTBKiPvKs3mBkThKdSAfpmDmdK9uHiNaq2ZRDUZGJqngknissoRKKky1Hxv",
  "key34": "VP6uU8kvBHvxRkVu8mBMrWJCDGPHigboGm2XY6KRswHk1nAq1zCvNhALzNTAyzNUULcR9YovMfw8DC4TKbWaKfW",
  "key35": "3fqhAcCDZU2QftgYc6k4M9PiDRuHDH8UNUNpYZDtoJ7qAqxABT4e6VAW23qnn9JL1tzJUwVnsAYbZrzVDBeE8oBS",
  "key36": "5CZdkYvVXxhVBSDzjPn9qv3PSJRKw1qiV3M7x6PfppMRkoJkMRVWLKcaw1uxJWw9Cpb8hDViw6MRi4qisGBNiQT1",
  "key37": "3PxW3A4Q9w17ihzUoeABDw9NgJFqyqLEbjCuZjy97d4MeME44SnALS5E51eKqHETEzkHUr4BtZJApHH9HAwMe5FE"
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
