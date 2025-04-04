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
    "2CchmtySivNo1V86hg6Zc9yCiUR7US6LRKqxckgF4MQwQGLpQWjpAwcaGZYEaHfBJhLpt6JuE9epGyPzyTVGaqTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jDwQndLFZ8dyUgkNSLtmupDgTKMYwaAwCaq6hVSdQiSWetaNSkjrCnNF5jk44ZubftzMcpZvkNpHGQKYzTib641",
  "key1": "5WBdw8bJGaQma52bQjgNTJeJUHt7hQAaDUYULykNhLCc2yJkb7XpKJLo5w8Y4ueKJoT37AiivyXA9bGgDuDjgZdQ",
  "key2": "4WUcZob3tEGGWN45jt2xnoUCgADvp9VpZijYx7dZijiFPtFnTSfotb478nFqLXVh9YUDw3tnfqqZPq15Lcp4XgZM",
  "key3": "5GTmWu8PeP1p6SFHoy1hUt4S4G4kPUxz371sGQTb94wh9Bz8Am2G1kSxUfxvtHK34nzgWbgKzv68kdziTrTD14eX",
  "key4": "CvgUX2VDpiD4VQX3wEhoZ6dR8sqhVksrYmAxCJ6LyTe4S6ufC1aTzUyqQxVDWoJwgHBjQgnjTdfaWirFwFphR9S",
  "key5": "2P6JE4EopaVJPfWfhyvJw8DFsnqM4AtaNiXvogeXD7Tj6FPnHLjL9W9fcFitEvdhXtvdACyk4t21KUvRyJwNQSMk",
  "key6": "5QQ9uf7PBSzHh7wYdLhmjRt1mameFzAXczgZMFe17h3TDsMekG4g72jgLYrmPf4VFHy9Tk4vgvqrzf6XpNemMudS",
  "key7": "3pLufXBPZgt9WM71EL3daWEPEA84p8rSy7HUod4ckKhGGLPGiARGbUaSUx5jHC3G3qKiMy4u8CGzAAyXKGM6otA4",
  "key8": "anPrWmAXpjwzCg2F6G7sMYHaA4EF2urNee8gGLuft64rXzFrttBAzJLhsdXJFyAJ9WE9CSdW6DDRrNDdaR9xmac",
  "key9": "4t4EDnm7o8pX54hfSYAEiCTLMuduaJ9MdJpmLapMKTx3nvAPXoe9NrPkVG5t2MAy796vVtiRkfFqMeQ9Y9R5AMfp",
  "key10": "5xHqFdQ9LGQcYreqKXCs3Em2EUv98TUgF7MLsFriYg1Kmt3zqU68k2J9bDZgNCWmzCa8bVB5cjYfzuQYpnvhHEZb",
  "key11": "BTVGwE9AQXGxxEnjgh3tfCgvz1RHDvroaH6yx1v4YHo9THmEXyCfL1BLVPrKH7Vc8h9Fg8hJ3mVpo2gD8T8vFUA",
  "key12": "59Ba5riHbvsA29GUGVwqQJekCg56Tuys13d6gLhGpbzvjx9csC5tmjxtKTBtSTfVqx1JxtP7BCEHFU8iptmqjnZf",
  "key13": "cs2LqNVs8zYSR2htRaEvRhKRwegoqouj5dzznMSLbM17oCfJq5xDdPkGRVgB3WLFBfXh2DrZzgeYzTjxrvXXuRW",
  "key14": "z7VpfZjHWdhoCFeYeaPmDssrvk42m5Yw1ZiYeDMtdN9sozGBh8X4wGgRG8SLufzN6E2m2HdrcHGiukQtc2KJVMP",
  "key15": "gGxS88X83HaYuQPXYugEBHnY7ZJhQu2FiuF9dmxmitpvhpFSDQWJqzAVTz9Wagb8yMMqnyc3BRkE1GAmt49YVRN",
  "key16": "zdKz7HSgPcpwookTeyQ6AewhygtKAFfg1DjeM4YF6KeJ6SjVUarZXoRVy5Vy2XAPYXSLxQPCcjqLAZq2h6iEpeF",
  "key17": "4vefq4Xf7WPD3DZv4Z1Cao5uYZkCpjKTSwneYatsop5PX2XRgiYNfmtoiS2NgyZMfjeyr4ZGJQhQp46Tvv4a3r5Q",
  "key18": "3JZBtQf3uQR9Fi8T88rmP9HJyeKuVeFd9iYfEyNE5bRUWtNdBFdaWagjGk1PxS8xMSJevUhnUkEAnPzJwnSNmZHz",
  "key19": "57AWaqrYnv5ogwX9uJ9KowTrRhjEoFKugSUd3BTRiw8vfxe4vfvnj7Hv43R8ahcvVXKDBCY1mavsPSppmXuyMJKR",
  "key20": "5UmV3dhyMGJGejLmBJgw7Dwc8QitBgfanE2MVb6bDHcUjCNjogV1g8egqVzo9dv2o4iVC7EjxKEUZkYeAGuj5QGh",
  "key21": "6v8aREWaq1S8N3Sk6dRHq45xQ8Pk39cn7KGrAvzRgLRvze1FMrCojwD6FZCu23zCAvHae6m2k5V2DTGKGpxaRLK",
  "key22": "2z3bNud2xg2DBCUp6C6JisMs4b1ab5jfoELYeraaVE6n3R1AyzHnEajTULf48sKgoUQXeDeZfuJEabsbvZ31iyHd",
  "key23": "46oS77YALdJpBvQqkssiLnCm2rvpp1p4qe7hrkFhdBD2zYqFMPABtMKGGcAsz2nEHVeKvN4AcwhVyoTRSKJc4rpn",
  "key24": "3r8WquSnFhQi5dLgHhmzWV4cmzharJFaHLGBSwCMmKhgQhPU9RWQF88qP3JVAoyKGHSDz4Pz9VUcv9h2fJp1Hw8i"
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
