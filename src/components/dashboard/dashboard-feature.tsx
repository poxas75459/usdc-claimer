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
    "5yQUAc3jvsiPARZwLT5gvvVsxoaYaPCvAJFnZ8EHparuaSBEGXBUcdp3SCTEcwbAZqD3eeMoFNMosBrS4ZVTYLby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nZ1rdaexL8uhuYrdhSWGhdH6yJkzoPiG2LhWYVTpJu4519AU4wQQK6gV8WYhdPw7UVBMSKZjKmGjmuGohrWEKRj",
  "key1": "49rcTaCgX57ruehL2AGFdyEatKTpwH94oUnUuscbXAw757h6QLfCNGFK2yKV3CN3osc1jaPjNbJVwPAHoK7vjkms",
  "key2": "4mczmqLW7LgcHkfu5Mepj9qfVFNsbQ6B9e7Az7KShsBpSKD1pcoV4vxyQVeyijcjVd72yBvyNJs8NMKmaQS4kBVS",
  "key3": "23ZgaUFULtjzBsiFhCNu7PXGPvWqsPZUTW7g5KXav7FyPHzY28fqHwionspCp1DRrjzsLnwnNb1HHJu92mKH9xn9",
  "key4": "5wJjQn27i8zpu5Xx7yartatjsa2ApB4WnwsjUuCHQHmmJ9V24ZNBAURCFsH1jKaEGaNhbroTtuJrKD9QWoDAmnCE",
  "key5": "4TUHUUYr3WWcNTAsFUkyXwh6zPM9BDg8BsJRsiCJ2DYv8eoiZKkQAqQbvYdSYh1BRNRALoJPwJuk9BcDnnBviAXp",
  "key6": "39Gyt6AdEUDqCawz8u9y8EjnMfLmQ7B7FghMWefBDnzHhgytRfUvYkTwdqKKg96asfXPRHKtgprDccq3hToWUmYC",
  "key7": "45WW9VByKwQPSgSLWz7PcM2mJPvq8Ugdg6sW6tzLFzyRhG95vHYZ2HvWkrX4jxWY96PmfhXSDSE3Us5kUh6on9Dr",
  "key8": "2WYrkqr8poJwTQ5kW82kEZMQgjjRpu4Dhhf4giNdbBw9YM7XFCNQSToWjUxxeraYyhRx1AWQmUFtYH2nUeLnyumu",
  "key9": "51p86pURfNfjugQyomtiYmdZPCxiJHodK1oBa8icrMnMMNN6BdHs6uGas89xp6nPvefwhfbQAtvKLBQDm5vrmSnk",
  "key10": "nmcPPAN9jKtEGQY479DE4FuqcUT1pTru9guCbZrF3fS9mqWq4Dkx4DYvUBvC5bSXvzffsZMotvXrKQw55kmjqac",
  "key11": "48p5DNamLHqBGUGvkkUnmxZRhqAaNV935WkWXtnKryGyTm9JMURJcmxkRnJPidFosFFHrVEv5j3dEJs4DBLpZXhD",
  "key12": "5ThhjBVy81Y3aNBHUrShS5DUp8Svyrt5ueY79Af7ER1jF7Yda9kTmqWaguzzveAcMshDKyZf85qAWTLzW6Q9Tedf",
  "key13": "2vXMm71wVgekGsbMPMZtPD7ib3yF1ggX2tjiKUdLe7twAWwVARPspmyH7cfH9EJGGZGHw1Tj9zZtZqT73LGhNGyj",
  "key14": "5r55b4sLT98FvuMRj9T1je9WktYQEUVD7Jd6VScH2vJX1wjU8ugh1uD49HZRzVhRJkzJ5gdVE6xSPtvcRdTPBoGd",
  "key15": "4JKAzkKR2hndq9ZQAeVYLrWaEJgA6tX37rkspam5iWsCdtbwNxrw3CGFayS6fEmHMnaYam5fAfPs9SxZB2tSEgXX",
  "key16": "4NxqzzuYQPd49E9VW5hq4ixNwf1LCDD6jyZSWStHvULrnzdFF3yVYsymn3Nq1ae5g2SCdKMHinxqMwoQw9monFEr",
  "key17": "3cq5STcpgr6ws9bp1sdmUusruzdryvaCn1rgfh5zXCbom7oZfax5yyxKHdCBQr7S5WXxMiRKbFeAbg7LSZfU6W4e",
  "key18": "4uWF3AcrCXHSBotPtKqC67XPaFQzQ9EhgoLaYg4fyUZnY46kfsenpj3DovWhL1oc2hFe2XvGvATMAwoquhasT7X4",
  "key19": "5Nvwdr3MM1FLXEVGSDQbG6qbxXCNEsg79RomGhsUpbdUNKnzJAN39EhPK4oBuPfY2CtzZY2qCGFraKiWviD85PzP",
  "key20": "4sYU78XFZky9Q2XSk56HBhFCfG8kY4S9Y5DWkkKHTSoGKH8KHCCeqZ5R7R8Jq578uKYE6WATxuvywndih89bDbD5",
  "key21": "oxYj5X8LASKEftohPQCQkceJrQHD6mC8uSjQR6NzxcrqwxwJd63yFxuNchdCqBfBrCdtQX9VqBsdvThVigMY4ft",
  "key22": "wBaRacV3d5G1phkWyioZobkw5zroBwF8bKsTdXxkmbgzgAwHALkrJ7VPM5sYnRtPt8xVZmmGgdwGDpFXX7NkETr",
  "key23": "2LJizQvvxHdid2CCUKC64HWtxd846QeRLZ1uAT5gAxLFueZJphV8EifjcbDEHtHskCm1kca1qkShgeUgfBE8Udwt",
  "key24": "5CmqHQeAhkXKoCNkJrq8fH4u29TuDmhHc4ca1upNmNQmk6WsBqWwU2vEXaB1qsMa9BTUd8mUvhTAWaS4WfZPQkL2",
  "key25": "3G5fUHGM7NSza5BXw3An2AqSHSZRnsMzsEDUWVkJywyMfWSHF3UEFsNRNso3385sTyJwd7FK5CDai9tfMWDxqFai",
  "key26": "5aLPqEM9pgmEuqgvQedDfq22qCJBKtiCuvo2gE2oEtM2LNdfW191nEsZWXeC7bCrXR2c8xFbgsL1PR7Fcs3cpEsB",
  "key27": "5EQ5nL7Q74cjzZLu2CeLYfEWu1YtosLjbxh648wXyWTAkEQZUMwzK5B4M4v3DuwbcF9nxoxNNA2uC1RLpVHkSVbn",
  "key28": "2jfAQdFAkjCEoPKCk1NwijAva91ZErvVSaGTjuz9G6aoDipai1zjnTPEMTYcpzJgegZJDhuSpkdUxKszwXu5T9KX",
  "key29": "w8qPWFLf5k8dYP7D7GHHuXdYLkhjeUZvZadSwUs5voKG8QKUxS4xNr56rT5equ1UbFeyNzRQyK6buuX2gdjKQEQ",
  "key30": "aNWGra19qjcvGPsuc7YXgVESapaH6wxrFo54Q4A8F16rQB7yVE2e5FMfzK5vJL9vdP7cS36cdnWG8CWH8LECtnG",
  "key31": "2Dx6ntgKodx4XTnbaMQ5X3NLDYsSA34o6gKvXXN9njEBSstNvuZKb8d3poBNUF6tSH8cForEpf7JFAf3E8yEsBiq",
  "key32": "2qQLn8PzRp9BX9fdS7txvS9ntUsfLeVKAeomtb8HV7Y9jRhFXpNLVSVhxwKtm3ekbBes2t8z1ZhyptBav2cnRJRM",
  "key33": "4aZCVWJWcf17kCxhrSpr4DaSBqgVY69LWaL7D136AVgjk7jW56boih1z73uJuS3JGHmLGqQnK6zUAYpRPCGSw6v3",
  "key34": "2YAMLnG7TKWAxZH7A652vWBvyvSMvR59ML7um4kRxtaw7mCYAj4kDvZTgkDEGy3AckDKmgbhhSJadaz8sCf1wkEP",
  "key35": "3DEQoQyJwZUPRUYYvEnHvsChW8jxH1Qz3dbMorq34kCdoBCZDC3VDKVA6qGSofWFD8DtkVWX5iTVapyHd1cLsXn6",
  "key36": "5Pynegsx2MAJ8xxJobfBBV4ayZUn8hQaqsNJkFcw8mY2K8sRoCuiicSFCDw6hdRrccwr5kVSKwftujdvijk5dPM8",
  "key37": "4s8P4qaWAsRLv7WuaKsdGPjMzhg1i3azebBVBhBmCnJDAZRvXnnXpYKC2L4r27EQuddPb8rvwCJhmpba2rKosJ6m"
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
