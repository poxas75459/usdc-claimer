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
    "ByykxbdCB5ni6rZBYNjQ8CC6cADn5fBJB1wNrjA9EPmWVanmhLRAXrUJrcSoKZaXNxZcZRhRoM129Wk1VXFja6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orVkxRqeg1hEiRA6PdV6ULwHqvjzeMHMe13XgJ7pjBQ4vSR4zvvJLdC1CeiP4cSbEGwgDk6P1GEc3Z3SbXxy4Xc",
  "key1": "q2f7rHpVNDfrJVM1549y4F1A57AMZn5e4YuVJJA8PginHGS95BRA7gmaVHD1ZFU8gSN1agxAiKrwG5sgebhXq63",
  "key2": "NpJTQoygcbM2DpdVrRrCv4TwvFhK4LqN9ZYvvaHVZC1Dbbb8o7zLA6pKCEgYBuoMDx1D51neD3BwTjBKqtYUVz4",
  "key3": "35ErXpfXQ9dusjNm2ckL6XSz4AVYP4yP1aQMQnjPfLx5miW99wQ6qhAnCUDJKeaxdNBbda7JD8gwR16xzx4zrcKd",
  "key4": "3jcRnpj67cEB6ERU2NZrCSn3B2PB4spLirxJV4caXQ4X1mBL7wcGcVWNM6v1zJYUjZAaUwM9QdFKXbLgra8px5FY",
  "key5": "4KFMzTG2guzBKTFdvfnkzw3VgHbgZGDxGGaPGbwWP2bSmGUYmaQ62EdsqLnPyhLAgNLb27MonZhyt39g1FTS1PSt",
  "key6": "3iiAkXrEpYsRWNb8QTQTe5Beu6V9GWFqkD9pdxgsEiu6B9tnkPFFcMSKQmygcZLyE9GpJc34F2kVd9zee4TVedwb",
  "key7": "3RCLpBAcEeGkcjxF1iAJjXDC6MRC2dfmwZ5UjhR84GNm8viwuGkMLgDbd4sA4qFv8sRok3RMSRWQf6mNHwZGmwNH",
  "key8": "4GwS4v7jLCTk2yM5sokhvTtHmAa9XthLJ1Kj4CpCerqgNbibbz4vkPchncd8VWdbNfrAMtY56WtKrhPttJfdFVbw",
  "key9": "3W2M14DYKnX9Vtw4Zg86f9JPVUErNvspRFDmNerwieMEXsjBij6shCMgUrZTdNxMAjYNc34Cr58Pn3E6RmfGuEtF",
  "key10": "26nw8ioa5xa4kEmu4dLgzR7huLNB3pi7CVtvhXhaiCa8dfvZZRurGx9u8Ez2sioSMBLudNHZXUh5yKLWUgrmUojK",
  "key11": "576KDjb61qbnsqpVZ35sgAfYstVaEZDsQiKW5uCd7hn4DwpdfdFRqLKtXXLRKfRHERhTP6yrQsf9NE5G1qDj9gEn",
  "key12": "2MxFtNyYoxouyH3pHfK8aSNxZa2cpbwErXHAsMvJzoDwZWtzy96Qegu77NNkz7GBM9Cg55N812cKTTGKWxC2Uwih",
  "key13": "61LEmvUosk5heyiuHsapLYEDvcHWGTHqe625bUED5LidXdw1EGegQ42URkbBnVccJWB81YdKjdNULLpYXEWnDG4c",
  "key14": "iLwUsrtAs5GAqUrDVftrhJe9pq5Gh7MLymZAWTjZnTRUmXSCJahbsk7oykZkvbpk3G1d66coW2kpPXDWUraNndj",
  "key15": "LCyHFmynJQ1Sr2JSvEYpzdfWFmXMDSm1nGqqtK4tKNWd4jqciD3MV97ZVRBS8Q4ByjXptFVncDqirLgj2rqpSsz",
  "key16": "3usrV1aN8PtDhKSnFfd6wr3e1jkJud93SBZv816TbdRzte7NUUkckywvGpbPG9rsoje8WrXQaBbCTC76fwYx5Q6W",
  "key17": "3ZVSg9frKU2iLopPheNkFDLcg65d9cBUGn6BqDy7Qn9oJt24HB6YXpgEmCAP8WpbaTjHHe8sLHgf6Rxyhmib7Y6P",
  "key18": "sXr5tEbgqobgoTSuCGEEYQ9s9JeWJe8waH5FyJN49enQUR8PKXTvSjRZbySXKdY7WTyPP8YY1LUWFLnYjcZjEQi",
  "key19": "4i8nWoX6t2fQUoREaKpBzgA2Yd3pVncxgAtaMpLCaQqDAiQ7NXFszRWHTQs1C3tDwwn4i7gLshyMF5E8MvhqSxBu",
  "key20": "4GV1MPQdAkXxnmzWJ566tWscSbZ9R3keN4m6pBjbpTjtNmsoE35rkzZ4hPGipMXfPuJZ8CcippowYLbxha96BmCe",
  "key21": "64QxPE26W3UqYvGgkmb9512xynZ1n1qCQiwJuZjYXm1ajZAFyLfk3uygBG8wDXVhojvDX7TFTmUREvemv4aYzQZq",
  "key22": "5Ax7vp6rdpWnGTCQBrdJ2GPFwj76FXDZu72Rr4BHtbzEzfhqLuBJafqeumLy4vXnbvdpsPn4QQgn2UwMG7nahSUo",
  "key23": "23oLNUWiEgGdG9hBVximANCQhiUZZyU3brtFCY7pcRUURM4XDrXf5So5NXYig5xsr9vN5G85ikyetSyc2tj6utX3",
  "key24": "2YbGaUKkkSKtFZVYkj9Wk5JrSc1JZrhgGqxpyEzvMDxsxYqYLqMGsU75XXz3hKDCfvwc46v7C3Ks4hAYK1VonGym",
  "key25": "3bmsG6wXNudtgHFezu8ELaHHGjBEurvJqbFp6p1zLLESwxU8t2DanzTHpFR9hQgbgD9D2VMyjK1REPcwmdCjRQyr"
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
