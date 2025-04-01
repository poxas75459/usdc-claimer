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
    "4bjaT7ScMgZTEh9nzZNzbrAwTWXtmzmjvLCxcRq96QUfm8xkK87K1xJeUqmkabgfnxFsekrofBDdjprdNXLp3X2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1TAqxH1bQsMY3cN1F1dTvtoMHMd5TFWXjjEQjTydqN7MecS2BsLHNjMHTF3XWyikErwXjbF4qaX2gY9QfMbzAhK",
  "key1": "3vWK44F1i3MCnJtD9c67MTh6JTbur5GPYdaGD2gqoiPbLEUSKum48wtjaXZHFHJe4F14wicnoXitzgZPtMCp1u5v",
  "key2": "2Q3PNZ1zyVUPBpJHtGewRJq2KFH5pXxiYwgsMnCWUq4BNGJhTyhh4WW3aSG4um8XM1DQdPpESVWRuFMz18EGbV5q",
  "key3": "2c6m3oLxm9UX9sunNKffxqFXwSFPJnsPxhp4sokq9ydX7ADQHMm52dBbBa9mX3HjEgESPmpMp2GdPaehZ8PEYLZu",
  "key4": "2RsDRL3ZYynN6WMjvLJHKkDdvjtXGEkPModCkPKUkuUpSoJJvD6XtrGFvqfW4rudDXUJZJ6FhjYSrJzNte69oXgR",
  "key5": "ZryZ2H7oeJz5uxooXDJAfjbQnHQXaPRnvBHCH7pT4NvVqbfh5Chz6aF5KLQQyCEB6nEHr1yCWFE5yvezxJZmcmk",
  "key6": "5bw9rmFJzmSBSJTDkcRCNjaH2PbwrgP4QXLzQPmUMQCNdeL9XoNBLX7VsMa3xm3XpAa8LZsPDCrnsFe2dz2fyPnY",
  "key7": "3yW8Dfe7MLxokVrFYu8EEKhdx4XkR5L5Y7Sctv5LdaVuUi4Ce6M3h7RDQic2spouw4H5SCSmLnDktyjNsrCaHRnV",
  "key8": "2XiNtsJ3v6n4nZMBeXfeCF8N7NrNzVv8r5f1Nr5jHpLoes9GuVxhE9NesDF2zZVqQS5kvLwTeGdZ1z3eXNk7gUmQ",
  "key9": "3sT9NsmAj7KeUHoyq9HWmcA6f69GD8yBS2Kueogw4VFpd4LM2wn7Bh6go12zSnY5BGHCvyH5HdUGso8h2EV67gty",
  "key10": "2uJ5AjrK4aDWiGEbx9JYLQnwpNLFEyCJQB3X8EBf3Z1SmWW6G2vsci2oYBVFMzwyAiUeZGWebS4uniYb5gnzkcw3",
  "key11": "4RAFw5qVYnwJLmCKyRMkRamSqspMuHXwU32cxkp3V9tjBaoAHGK9x82njEH7VrCqGHGJrzqmVd13MzgAy8AcraAU",
  "key12": "2sTSEAN6hKwmbGEM4QiTkstsVj7gMUgCXXRAWh2Eqpk3ZWzNFDkkqdchyaQxBzDDKAGLu5WXADdezaBvmMfZ5zim",
  "key13": "J5E5i9Eugeq95s9qc1qshwzdSwCoMbScFXDJePkLYUidJCQUQfb916sPg8wycQrxHtpTfWUm7SuRvWgiJN6ekLi",
  "key14": "3r8fEmLywjXgfBoBTx8YBoppHUPtfg7CXJrMbWke6XzW2GTwxw8ocUVScQ7iuUEf4YuUVi65QwqBqDVQA29rMKCq",
  "key15": "4AMD7zk2L26o29KXLEBfySfohpFJ5oVv7dpoQaHthcoTVmto7AdBQmur74puZxefFLz8N2jazRfTKKZjFUD4Qmhz",
  "key16": "2ArrJpjjHpCSGLPuKzoJDRNiWybC6mJRXafLcypTL95gXWCt177qqMdFFuDMdLYhm1V18Po6uPqJatiGMuFfG8SD",
  "key17": "CU4FRbwDpo3WXWGb1zHh4CNYgGV89AWh9EtWFrjvdZBKpK5ZFjM8uH8Qp3NwK1s9Nv9cKxRh4weDCjp7X481nxs",
  "key18": "u42EDBUSA4QxZU3r3SCMDcNAqvcjDLGsM2nJjAUiEPy1mSMJHryZsxcRMzdUwE7DPgo2jDaYLydi7KumDGEwj9P",
  "key19": "4HNAcnZ4zesDoCn5zJGGizfpCd9PyNwx18xTZMTfPd1cUGFPgo4r9439NTC97FYg5EEyqZkYn2RY1gmcWvqoH3vi",
  "key20": "i9n6jBVJp3jFU2od4FHgTC15pNuZwbhrtXscjG9MCp5cRxeQcxHtYHrXV5L1o18CT3ZQiVs84CmzsRiH99chLJ1",
  "key21": "5NEiKY9Fm8EWTxxDkHkP34ruCSwMbiJ65mJbeCeG92ViFXz1bgNx1uSBDekFZyGEGs11SMSsXryQ2Uo6b2zokWbU",
  "key22": "3NjgetJB8HkNKRJWgubLF6iBiSSSMVBRHsL2XugHTaLdKdaNzuDwq6bWm4KHZuEZUEf52ZTyLoHF1kmTe8MHfXnh",
  "key23": "wNu5mQ2tWhr4eLWj9Q3WjgABpzpRfJtKuazeQ6K73gjmKuUkGfTSWvNNxcTpe5SfhGRcrB7iJ52P1Hoqdns6Adh",
  "key24": "2whYi9XEzF9VSw9sEsrAaN4R7WHPegiQxQahUXQzf1MHDewkAXgcpHM7pivZEug4JfGPV8kDBtSp3EzNLkMJfvmz",
  "key25": "3oBSffRScg8Yn54Cyj5JyK5SRYq2wgUuBhYq5BgS52EgNPKj1DKoKzBtwxoDMLzonff2jBqX26Lt8H5J7KAKsA8c",
  "key26": "2UyeTwa82fdKQ7tN1r76t5vg1x7abLFeA6Dhi1TocXWXpBuVQaN4w2tedvp8JF7aVMuF8piXo3iQ6fSbCuNesWEk",
  "key27": "oYL4fzBjKGZMP6qf1VervwFpgYdd7xebqmk1SYERP3YcMxa4gsqYVbTnBxie59DvDBwcdTfYxdELVNrsdkzSP3F",
  "key28": "4dpZvdAxYkuEA6RpAjRjcGSiDWZpUDvKGj92mjNtrbDiZsWHEdVvYyrkFM3cttiwJu5Lw2hVfGHJjfhWiGEme1Lh",
  "key29": "sJ4a9qbwiDN4x4VXMko5fuC2Wa7KH6fcxPDtmHQzYuzG1LbNMVquSi5cdR1zgSEKv3JnRt2z43qFaimkaJMeper",
  "key30": "7kckiDMzSUunSVxZvNNcy9Txg1ZhJ3WBVfGK1GwvFzvnVu7EZeyHdbKUjFasW6HUebxqHiJ4qaXV6zQuv5o5QQq",
  "key31": "4FZooLvWJ4dftc8D2ViSB6XcFF9Uh2AKK6xHu4fiWTedJp6Lo9Y7rcoiojsErbRZnZwSJm6A5ZxhrgmA3sRxjwj2",
  "key32": "4DiFpe1zypD67LvH64TtKcHYEkqAAWH5mk4aJBLnrfZVqCHECLpDnfqZu9ovnt5YQTG2av5tF9QWddQEK5cUsSdG",
  "key33": "LVuEbX2SLNwYf3ViBXdCXSaiSdaGqXXP2ENp3iNELr1JVUEQKM8pEPfsYoKAuJ9wD7zDEHUNdMQ7LG3iUmVNf2L",
  "key34": "3VXfGFgMHZEETnhMUodqEgqyAjXX4j2R2VgsGGicCo5KXhr4kSWwPV9ejtiN2MgW9YpQgw1srmFkLuHvWWevXAhc"
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
