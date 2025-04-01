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
    "3mMxJqnoTHW2MEGKunqjdGG9VMDg4A7qcZSHkuZhnDiJCjwH1wTymg4CSUbrnH8DcHy3uU9NCpf1D4t2xd6Re1fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qW4vE7JqzpnJXgawHTU6CUJWJaYYjnddzKyQtG9C7JGG4S3kbQAxpGpayD7bBd34wZUqx5nhECEdNrjDBuXU9tp",
  "key1": "dFUHnEYEn4t4xQxVe9z7FsaKsbGLSwVzRNaqpAyp7fpHhtjjrgygfdDNhGbanD1btgwLCZLCVPPDEkRiRmmKVm4",
  "key2": "524k1iZUBgzeJVg6TsANS2nnS7Bi1c9xbHny8giCa8ECYhSWVRd5Ket4qRQriAETU4pmj5R8KGPCZNEYR9Tj1cZ",
  "key3": "ActNKGrj7WvHdkWoVRrXtEdsnvRfbieqbn37QxPmFRSoDvEcWqzjPY33k5CWWJ35jNVZ9akuW3vd6BB8cKRdmet",
  "key4": "58v9bH3Y9AyJ45rKMCbETL18QKKS5sRNSdonMWH2BqM5Qp5eHxCCTNQ5nLV1sDd1hJodPkmwKxyHxzuArdRikSR9",
  "key5": "2TY5XKpFiHSBFJ88gt6uaUAenYFxSMHDzAj77LThDviLDpz6oRWZAdkWNuh98jbttc18jyK3iQEmuYUsQJQhWNhw",
  "key6": "4WR7hnoiuiAkgR2r9aYKCce6zBCn87DYP7XqvgSTMgsWasPYQyeVn4Qso65isUR1Zpad9GmdDJk3NcnzM6zNPoEM",
  "key7": "3ZGiAmdv8vi9nCrVX3FKk3C7diMUtiERUnfVwRL4RckTNCnHM9H8K3YyaEPw1k3rfxbBwr51t1STFvQESX2DkMgm",
  "key8": "2ZKfpmzR1wPXtQLzXKhprP5iL6jnPJiGHq9MuPqvnvG7LsMYveCWBb2mpgo7zkZ5MhfA2bBpDWES4dyQBZpeeP6a",
  "key9": "3Nq3qcwjLf7vbHWSiowAwdvCEFWLLoqRE1nNpwh5c5YH6zvsHB2qpMRnBdaH32zk1wnBhhSVcU8pw8CTMCX6W8Su",
  "key10": "5bFtiwGnFVxJFpJHJx5A62KDseGHTGW9dAf67WpABCZrLD6VuL2P8HHHpQTbnRZnWPyySCNnLQNN9RnTo1wEiMiK",
  "key11": "53eALc2vJ2TyHca4EFmjBsD6Z4cQ7RqWRfHUb3cXtYV7HXqEdkbhvsFjKwDMyDFuzupBnvaBe6iPzCrhpwotHXDx",
  "key12": "4aQDAVonu8zfsETKmTjuKHHxxb1XsHbeDHaxzpU3fa7F3AbRZTceLf9Fqpsz9rHWevtRdkqNbUuRacPDd1yhDG5o",
  "key13": "55N4KzRjT2Ze9QhAAMWT1MnRX4FxwGkNPip1rrmGvNu3Q5HcrYUZfVypexsNb3NnxaZbnSCierTeWC1tx6KQrPS2",
  "key14": "4Tuv2z1gGx8StfTYCCyRBqDqkFw3Kvjn4n3GGfLdW4HaDpsa7z7gBdFHexVft23ZK3xBHXCzfXVNSAxKYoumG8nJ",
  "key15": "2QPCrRxd81WeoK8gPTUFJsm613RnPcHbcBo7ddVUynPaUt2hpU3ahqrUwcACbkPUi3tx9BtV8Xz5uPiEmFKDQk5G",
  "key16": "25KV4xiYZwcwqwLaPaEFuKR86w9FhM4c8Dm1QKYYkE44BppGM68cJL6pJ4Bour642u36Yw9imPxiyLvTQ5JqHch7",
  "key17": "ytQVvBb5cUb4n6vEyCvYSywvVuxyFLjuXz52H3LGLEZQkL1JnQFUFj57hXYZw6t5jC5RpVkCGmb2omR3WZ67cDi",
  "key18": "5v2nQc8MvZ3EKfXimFnZhrb23f4nyRseirhvE55ETLrZVzTWgUYn3BiYAUik1X4555ZUXC6ifR18ANU8q9arkwAj",
  "key19": "3mof2fnSihTB1wizKwBgmKJ1Pvmk4B8CPsbibT9FLeH7TpfkM5gZo1kKbpqLzGmk9S66tBGb9xAiucBYhmvwMBCj",
  "key20": "Z3VraYMPeqZwZggt6ETVtRiQQkwzmemDCaTwFfVajmkFQRHFuKLZgKYUXaBxiQDwzCaHoubinQmJeFeL3WERhAH",
  "key21": "3PxWKjLzoAQiVsGpRF8UCXZcSSczmQ84Gxqk5JKifgznrg3RwGVMSoHDx83kcw76nGJ8VBUtTPwP2bYCdyHnZjTZ",
  "key22": "5M45Fq8sugbUBM2cWCN8V7KDGAdk8MZNdLpSn8PgWZdZfLCGMviUXTi3vnWcLF4fmWDph2F8djDxz88zh5DKf69x",
  "key23": "cue5RSG6vTLAbdQHwCCA6Ecj9GvMrRAaP4bjyXYmNWNMM5597f2cnmCnBG8w3NGFMybgqqc9TAdqmmJYwHoczsn",
  "key24": "2epocXhk9GmibNZ7Qt2jN7pyH2uKdDxdd8o3MXVEVw1oSUrDNj6rUssUQk88JQuH6HH2KS6DWWRu8ovKHF7qHGhN",
  "key25": "4YRKECtupRT76hPyBVcF9R6WLKXcAyZ6KNYZBgVRjaSyepGJzmqXiGpEKQQz8TrkBfGegQ4uELMeVJ4nFKrCaFbm",
  "key26": "4rKxy4aziauJWLCdKWKzVHX4kS9n7XXJ21XTtff5S14S65sLQmoWP9M4FkzrnEhFhn16p8wM7iv2m48CBHwofDjo",
  "key27": "14xfGabxwVFp1CkTYKVzoaRaSkqvvgp8GJ6ahcREZU6jkWPmKBFoCQrC7a5au19RqNPR51v4uMtcAh6DbeNDHxG",
  "key28": "E3G1THERnQEs5Dk85P6pNtpiLDWiWwzqHcDDabFaGz33sKtgi5oY66wyJA65Yes57DZNfYk1xuYWXXS3fUDWtk1",
  "key29": "3zn9zLrEZrANrB1T68woapBBtDqkvHGgCHsvDgdTuPgDsbtRP3dHWwRpWsogd29fWaAJ8iMuM5drvUvNCtuTDTxK",
  "key30": "vtmb2kuv13V1PyUsnNTrvXjLdzYbBWZbg2S1qLCSE7hYvNzPKd8JUKXSm3t12xQMikok3aftMXx9deRfZNKJXu5",
  "key31": "2skeHizbT5msvdNWLdyd4hwBzxLxZ7og4bjo1DcRCsYaPwer9dxRocKtZDykcHmRPDDT4pGYMvmFk2iMqR9TM7bH",
  "key32": "LqGhY57ut8ECNYqd896FvHs4zwxuKLAhgPr3o26jd9XkWkKrHV58Z2NReJBpQrG47AL6Y5oPegqy3SePBGbBuY4",
  "key33": "3h4mpjC8qpETeUqEPrj8vZgfkLmhLfy4Jh98f8C3TrWMbjxsrQXLHBPESXyVQxyz6KNNq32GcAqYhxxgtugmsCqe"
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
