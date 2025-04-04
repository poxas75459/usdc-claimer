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
    "54ym1n89ujx7mkfJY9WgtLW5kiEG4adzutSFotsBSCeiszB7JFRQ6kihhpL4k5AzsXvsERbLNNUXnaxLzeGeV987"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3ZtxrEKM9knm4WB5FBNH4GCxXS9htyHWCGjGAYQ4ykdAUDSW2j4efgroAMimpcDuGU3qZ19viDZadfi58Fk7Tt",
  "key1": "4EhkqYZUPTTVe8EwiZ2yGDfkBEmRputnqcXqDezDi2g5Z1dFiQaYeQtAX6D1DvwL9LMLhUktErXd387UsZWf3hg2",
  "key2": "3SWHoYTSGb8SfBJrQr1pntXSJAwW6Pk8zH2Ud8LQL2enC8gR3M3JGHZ7mqXZ7sp5ohwSMd8kGdmVxyQjvCiEbsLW",
  "key3": "3XiK9x8e9Ewh5U2ZVgbWfCMenJW3QLm4vUNJHpgHrfuHCcQmujQiPYnufN3Hdz1grbsGQPwUUThcGqjfZ2fWvdNZ",
  "key4": "4ditiiqYpC7cu6XChAkVvTvneKosKf88FRa9NCjcxxCsqjuWN1KaQd9sMLbsDAQs98UkYUDCfZaqsFaPjwcjwW7",
  "key5": "JnuQC6FagnpPstv1Mf7Z7V4NNrqWdMwnLdgypwJgQRVvCRxbUEpRQrk1aVzb6QZyJ3j6WPMqKGqL6hNxXLN2frG",
  "key6": "2yN4W2jzkMcXAHwgjaDm7mDGii8v3zdsom6Svy2hHmj4puf6r6BoYyJSwveaT5U1oE8ctLVHdnC2ofrFJfzJdUp4",
  "key7": "3gWwTozsGe1jFdKLH6aGnuNNNVT7BQ4Yz9PKuznrb5WfK6Ns6dsmDdwnf8uCkHwFhR2rgRyEnQR6SJzZKTnZFcAE",
  "key8": "WBKTmmWQdXEcTmG4tSPnZ4LGE9w956q9MUY6gdGYHWxhbK6QLYeaLqtZ3xPukgQBetsVkULvdRQ5WB32UbcDA2V",
  "key9": "5g42c1Ar1TA9e6F4khXPF1Bn5Bmb9tjyGXT1i8ugzZfFci2nRYrvoFZgHJjPQHkTfYZsKN8Ger4CZvFFGbLYxFAk",
  "key10": "5AwfePKy59CGZuyjuLUbcHbxvMEXquzLikCn3GqArt9oA9xpNgyzA4Me6Rc7uxhzo3Vt5QEJ4HmK1NJemHcR4FNQ",
  "key11": "2Kkwd451qKqVaM6ycbpDFtBmdywK7fuAmEfJmm2Gfx7PfJJLKtjymuuy8wg3biemxNhMP9K9fJKQcFKvYLRSbkJz",
  "key12": "NawRv4dhfu1mFEU2thvtusVfeZQnJ1aaTUYHphxceYasyZdVHXoyZoHFuUoC2fAkqQ6WM1RmSH2xsgT8TUAvu7B",
  "key13": "42edZYZZMgdtJ9BhjFCAm9u1udWYEebKUSJQXHjw9kj5oauYzrZ5L1jXBCnmGPyvsVzaUquEXpFrk84VZdQiKusG",
  "key14": "4BbinJ7QCUj4MmNJbCj6tyDGkD2WWFZX5yuGt3CytGKZtMhEqq42M5EBR8aZrmFF48bxALroTJzaW8C8VxHuEVQ3",
  "key15": "54ngwUVFkLwVEGoNxDNpZbzUrv6htmY7Bo51yL3c9bw7dcGS7Fk3EKfB5mMeStjCasFXem1n5yoN42JjivPbaLzM",
  "key16": "3Km5oy75mWpCBE4HuHDGuxtPMmSh2oBdZxnAz57KDAewsxkNDigrwcTjsbjLV4o4qpprv6UMvMbWKpueLUKKizU8",
  "key17": "4nypweZX68yqN5w9Ci1JjgG9SUDxVRf8m1swPebGB8D7bDoZFyQSwrSSJbAiMQrGwH1W71XVahyM6RVxDxkTSCQm",
  "key18": "3dwVkCh9fSApJhpHq4BhsHYANvf7HeKJLvfxRiAXpHQeSZ5SCamvKkFZhAx5GX3CDSi19WaMDuov58tQoFPEHpjZ",
  "key19": "5SMZY8pvAYEWeoLj25wKjyMvPjwztEAnP7FHfUNnA2Uo6vMgHo3uuxnPpUoiqf2tD63Cm9bAun7kDNLsHUJ5ugfu",
  "key20": "2TbxEkFb2vJ3sfgNEnvxPMppVeVouFNWSb4KH7WWN99GUtSDk1mfqT2W8khrNv3bQemVoRRyiCputVupfWQRwWUc",
  "key21": "4aMrrXwmLuJWNN8ABqe8MWhMtz46f2V9TMCcvYJzLbDGVLupniGqeEy3dcSvga5ZirKNXjA9AAB9F8w5N2aSnqe6",
  "key22": "353z87BKrXVvaWBcsY7HCodYD2CwtwgmVFwDN4u82tWz2tU6Gt5E45EcQ8chYwz5mxSB1ExCBzECef7uNBnPjH74",
  "key23": "43qct7twCMF6RZ6dAjuqD4ecUX1KJJ8zUBqcZcxh6WGfzrFDR3QRBY5c18DrHbBEaUgoWyxhoT4qx2HjKBciCwfJ",
  "key24": "gXifYFfxKy2LBpTinFj4t8SRQxjTsHmxfWMumcY2vmdPFq5wkaCFyvWXci2tyVrsMg9w4XsJjEHu9MhxJC5NVGo",
  "key25": "2vrdHtyQMRk2L4xP9ur9MhTFp5B5Vaz3kC8stpqDUWBR4nBusXY9mfs9H2PhnzmogySF58ydyVjurJvd3VKjPmgw"
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
