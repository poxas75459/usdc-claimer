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
    "z3TMrR7tBj1RL5zWGJSqpozC5DwQoUtB4Uec3nxMsrqdbm75iqLoKSdwXB1wXrrTNkzESFcsNNjtEj3P81pXoJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMizREpUoPnSV7PFn4Qu1Psx3v4dvuQ38jya35C2846jjSXNdKduZRqyYd11qLVC72hnP6amwpTTTpgfWoszHd6",
  "key1": "2aMQMtrKqS65ciH1J6mmEsAi1fN4gWhL5rarFjnaHSJVeTx7UScaTKqB9Y1K1K8SG2ipKWQ9h7xVVGYDs8DSwL8Q",
  "key2": "32Uun99X5NMkzhEWHyVMMtDNQNu3kJHXbpMXB8Wp3bGGJjEpxE5FEUfBCy7sNMwAaPdjjtoayjpmmnx4jMVKCemy",
  "key3": "2brUh4RP7TeadZi3MWkKqcVKubZD96QFxYrKt1hdzecZBFenWpQwfpouVx8wzdbBbcDXao8XkSiWBCahs2CaVLMy",
  "key4": "4kG3CHCsnFe85AFPwFzeCxZP5osmEiypYqAosPnQYvjSCrj8LBUoRR65kPhqQVHnoTANP8cnnuUQvB2ov5ktjrXb",
  "key5": "5pGttJ1CjoTfzmsPJshWu1Z8G92WVuQuwyCe98qWLYg2Qu8Zp4nta85nvgEAUxmVeYEFn6zJ8GYwF1E6CyzceFnH",
  "key6": "4qdgbCFcwv6dq3vhvEsVQ3Vjm2W4UsfDk4gbBbP1nMspEa4oTRZrpyw6HeUT9MRP4xTgBsHG5T9Jkkn2BcuocGh3",
  "key7": "3pH1ghWj5CjSxazVzzVDvti53QLfy2p2x9mS3yL5Uv17JT5TcwWMDSmBTtgKEn8tkkccVZ7CSQx3V7whCcxrwqWc",
  "key8": "3oMiTc2T4M9vNUVuKzNEynrHreqrzwQtibhp8LJ21KHhrdG4C2WjR3BFKurJteQxVdRh7zXfGm7Mqu6msNXjZUm9",
  "key9": "3iUNQi3r3oMF52e7GhqJkNgPSZ6MaXTpExsHnimGDw6BJzv7jiWCiXgH3JSkCk3LkG2dCsSwiYeFXxqvXmLwX2Jn",
  "key10": "2epVdW2FsCqYpwvexwQwungox2JKzSppVMtZspq9oKmTke944odXNGezGxXBLEHTi1nTveU7gt6QgiG3rLnqWkfJ",
  "key11": "3Tjt5ZXGXshTEx2cZTRtB6QSumvNqSt8fuQxJUXwknhWF5jPY72fazJTCHnFHd86qGE1YkEcJer4hBtFBDSAk944",
  "key12": "62KpKcxAGHBAGk43sKr37VdNfLgksXhoAN7CdVeAeTG9bhw1p2YNJTAZNupGxxMRjt53bnyokv3o8JEq4piCKqK8",
  "key13": "25HDRZx3PrNoPnHhoiGvzf6DN9QtLFgWCbQyXMuCkB6LKhGKvnvnW8TMgUscS4ASHp8gRN1tgmLJwvJoVtcuLhJu",
  "key14": "4yv1iYDhexF1aMWdhtkFXL9Q1oduvK7U6mGpzhcPyHxqC53mofcR9ZxowyCxCYPkSR3FpYqBxSX51pWgMHr5fPxK",
  "key15": "2gDA48n3G1BD8fNBQaFzqFmQar6353663q6bX4vt7xqrzeFdyx1XAb6DQdjvFapM2hkXdcS2kVQchFREw82uTyQr",
  "key16": "4r9q8DFG5BL9ieXLwS2814MrHioUAweqhKDEvk9ttTRC4ZnchoB1krLT4Y47nxzSPQoEJ7d6AyU2s3mVaYFszTU5",
  "key17": "X8VTu641v1qjrEtnNXNWsxU9qEHdbGALLfHRMVopKF2ph5TKSxjd89jGq9mthRjUP6NoX8Je4gyXE8dyEFXD2wp",
  "key18": "63uM34G66ArG8ddfCbkUzoYvzRjfarJD58GesqMEW9Fkd6GQN3asnM6QAnnmrECmR6jMsv9WRwezzo6f5qYjca8L",
  "key19": "56dR5bo1ozEthZrh25D2JMhMZoNempuPopv1Tmrw9BRkK3anNBWHM71ePQAzzjL5NuQDPEGpESxw8931PJurMuU7",
  "key20": "62rrp4BHbBgdaBWmCnA14vnuBnAjXUYu1bMTpjcvc2vpmMRm2gnKPpF7KS7DzQ635Qv7j2JBiupuR3NuZ5NVY1FF",
  "key21": "2WGVzgeqMKobcxZvKVGHL4eazMCLxn2GPMnswCM5Khv2qFSGhSAUX9qE7HNT7sFiHEoM8G4DGJJPRBXRCSDS3Kmt",
  "key22": "2vPZhGGCF9gm58FSNou13ZM9eT7wfVpxHWwBdvDmubaWZcERBcVsjLwGMkcrmLkedv12iZLPF47fGW2mk8puojMN",
  "key23": "325ZrmxGgJptSmns34Ca2ubMgXCJ7qo4oPbWfMTAmxAvJ8aRRh5cWhp4buTdHRPCBU3Qy9zyxsfqDv2oEKJVyLr3",
  "key24": "2NAzE1q8MndAdjet8J35Abf97emQUYhgkwjpiKib2Ya4WT7axigzesJUabp6EJk2ZNHP7rZp77PucuDiJ8Ahz8MX",
  "key25": "2FfGosYCHZymyXcMkCuF3Tn1MSacgaJ1DpEsuqti3z1ZeZVvvm6o2WBF4aK8ExZ1Vi2ctN5zugPuFwpZfk86a2Um",
  "key26": "3jW8fDn9bzQsawTx9vP9G5Viqv1QcPP92MjpPFFbVdm7A4k2H2Q15PDRVsdYMGURyZxmKuo8mPKSSPQPd6nhwEpe",
  "key27": "2cgb8zikk6BGeq8aSfNsvfDZK8pcYkUfvqqAG6cDKjnV7NiJKcN5dFRdvsnb3vCPy5eJSQCWpAaeEKDoRnTC1Vfs",
  "key28": "3kHNz4wXmj5tFxnwUbX17BKsF2mYq1K4rkYDuLm2bYu3GvAv6vGE3zgUTSFGCXarp1h62nXoqodAZYNR1sTMzWg8",
  "key29": "5trfhPgzLLVNE19FYsH3Xy4j3oRFKPhrECn5haCePy6Tb7JDMS8WqSUXsJVT1sQNQzFZMUa9LAHq8JMYkzb7wYaR",
  "key30": "3BLvcgnnKEnoHrWfnSPsQsg8c5NFkzEK8K5fYCG2rmh3L7sXda2QXyenqmMiHzrXbJ7nHyq7c3uwmciAP4HbdDdk",
  "key31": "3HnyrMijj7PkF1KrZUj9hKdgPTPThnMuMfD3feBSW4PXhutprV8p2ZBHbS5CvUNuSADtQmia3x7qYHEF4EME36Cs",
  "key32": "2PrysdfzRyhUz21fn1USVruQmNYpiJuZBp27zaLEnTFsNyqqmToCTCqGHbxMjrSYezohTjzAdwNkNXtehGoD1dZW"
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
