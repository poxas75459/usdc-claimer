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
    "2ZhJif1VLthrPnZBsvCisRzkwG2r93ZcLb8xMwUHsNi2r8kjDif6iqJ3bnT8fbirN7FEcySbbmSx3WgD2iTVTVxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nWgZDTA3tjNtK1gJwFpKYwVf2sJjSM6Cr8aF4QNQRsLyJERY5MQmvGnCNGA6UQnquqdb1J9RGVKY76NYKCAMigp",
  "key1": "2xo43E8M9bt5ieVts7sfZoUVM6wz8ZdiocZAPgry4FNRcYz1iMpbzEu3mUqt7UUDrGd8B9vViSArh7Qr7VADAuPW",
  "key2": "4TbRutAbj7SqcyFNamuFnnUVjDvxH8n15ZpNkShiRqp7PBSaRgm67zWCVXk4J7wJD4a3SQp4Yc9KpcMeAHXuKTrg",
  "key3": "4hCJCfsZKvuXDFjzcw8BQkXspiYWu9LKfJ28wqxfuj2ByQSDzXGiWPoFMviGcjvQA2x8nWyGk2kbJJ7XMQ8R6iC9",
  "key4": "5N2kuL77F132ew8oPoAi3piRgqY2hY1sAZFoXvqKzNXxkcU9DpxVhGqWKzx1UbJY7mHoWTu95cWYCeVK9qZ4rL1W",
  "key5": "5RFEaamjeJpjkx8RqBH2dDvqDpP2tFMwnCLUfuLAZEJknSGrY9UhL25fPKYYH81NjUZTqeWHcPUibXEk69BR7VYL",
  "key6": "2WTtsa8oGDUfjVHAPjdLnpe6AziE2kT1uuNPyQKm8XagxzbrHx28e2qf3a5ZiDjFV2ZnYjrneEGgKZS1rWDS58iE",
  "key7": "4JwP9UdfVxzizR2VkwSsX7EpsqonP9D4dk7FBg8RUR31NsAC3NWexbNrGDETQB54stnuywzh1TWF8Bdhqn5xUhbe",
  "key8": "3xktKde5NUsCeKnxwsyrjdS8vPXszitpvVqJaZxmJgM2JSw9AEGRSjZPUkzmxjVoAUgkYWZxemgN4Uhe38CxHArj",
  "key9": "3ChcmKhWeVgaVusS1RcbVC1VApuuZRoidYeMMU2Hr56TNsQZZtPFWMapVwdqavyipEJr6ortPXyhZzPP2rvkTFKe",
  "key10": "43JWf7XEax96HhSqjvMxvaSDh9GgZbK4qz5BFiNaGXCzZueND6shH7xQ4gtwVprcBZKywtYWYSet54vouCtQFwY8",
  "key11": "54wwbXZBLF9kmfjdGfnGVhJ9W7bF9WdmYwpfyhUsYqWBofShyxrCkuJLF7rHu4pWd3hoRFYUSJ1znQakZCZYZorg",
  "key12": "5Zv8unjBx16gTvKgbWpEeLjd1rpCd1tHbtAZzWbTzfknw3QbsW2yYRFG5CQwUwEenhiQNTsekSr8qoxNr1fULagu",
  "key13": "4V2aXGQZmAXqG4s7wRRm6Z55Arw2G5MPtJrkMgLbsTLmrEjFmaCYQjgfA4zo3WSKspXdC4FSLUVGrmmanQb2LGHs",
  "key14": "2ANKeQwD58n95ZkfZE23bD9jp4naDBLvGwexyfuXCNKQYY7pGM2VCwoEegZZvqGtNxcDw2RucT3iaD1CuKKE4ezm",
  "key15": "24pWGhAwbWQ49TeXApoSwdDyNiZ2iA8GmcwhHkaAjo4Gmy4HjCAYXVz5jM96om7zaesTxojBysCnSPdtvWsrBTnr",
  "key16": "5d3wmUNqV3VqG6mujnyE46FUumys47VHsAHhQpBHmyqAtDZ8hKc4R23Tp789tUEU6uU4SfBqQ47oRxxSkU3ZhMJb",
  "key17": "4YRksTef6AkuLy1q7ZgGu9uL4Sh6GmDUJwJMT73trEwwxb3igCJLQ6wtgNnGjGLnnm1v8gtkxZdV6T5fSrH4UAoq",
  "key18": "66H45gqQhCuLFaY91WsodvSsPmve7HPweK3i6LVEoumAb4JN3mrzEXjuGkN8yfjqgWn4YFmcy5qkvVkhGYzcfWzF",
  "key19": "rtABuj1K8wXHJcdoA8DBVWut4VCnnD3tyT7SVBqnbZq8469TifSVZN4axFkozbPH1pN6FNn2wLWCH4K1iFsMp5D",
  "key20": "3dGoBaH4pPiovYtRf2BB7cZtrhuFSJiuEhPHap3efDTGrYmACSQpxUP3JcmjrjcjQ3QTT216QJ76ap3jroK3fRFD",
  "key21": "R5BGxxrRQWBXD3mmojbeojm2fBU49JKYcehqkKZSoQNwtdb3qCxLrvPVFRybZx6g8iSuFJ4mysdDzFq8H3KFJHY",
  "key22": "5xd4TaK2c5t9UBCds8KZTJBCKnMaCC5kXd1Wu4NoEGKpSUmyUQJHMMBwV4VAs2dhMqcMwKRVDHNpgLKjwyHorP8h",
  "key23": "3Uqr5hnuDVnEZpodsyQxyuwdZmjPkhM2g887qSVbs9syWbXey4EcmpkgE7VZC3zFby4XTZTbppD7oWtbMBeJT9HB",
  "key24": "5HpibVfirs27Bg3ULhDFfsqP7tXkNAvE1RXeiNjWML82VdHsqGJqnPSMzdHFSGV1mv1ht4eCe84rRQKQ1B5nZpqz",
  "key25": "5Z1H7uftNNBs2iwyEHaw8N1WSQUHgN7XHAXdAUSGGC4ghzHJgXTo6TpZj8ogGscoWoYPUpewjwpoEj3rBLiedM43",
  "key26": "5fjAAB2yoSTLgZp7Kkzp6SEE6sjqq6JXVRibjaUTtMdr8w15q9e569wAvC5z3oJSUG4gywDahP1BtN533AYtEMFA",
  "key27": "4LSVRUCherK7ixnMTqQTeDvUDSQcm8YDNs1kHDYN2EYdF58KEhVDuymJnLXQNhYBr6rGryWwAu2e5iDbvjRQcqfK",
  "key28": "xJrsAi31ZzA7GkceuqaHY22dNcPZd3yFfKMRYHYAyvFjQaJcsfpeRQsiJKs2wccPQAmZQAzCza1r18uzUN8YuFY"
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
