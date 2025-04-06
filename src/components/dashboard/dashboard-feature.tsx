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
    "3rwB7Z1iDq9HzyRHedSScZSPayEbrwRGnzn8VzjFwF1355vw7dp9defwEpnSrsF3dVFAqZv1AyzJey25jpWywXCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nf1cz9EXxHydPDp3j7nbm7FXHQa26ywXP3XMuyJ4RMDjwHhEacYkFZgCGYHNjX7rKSkNDZ6qwTT7cr5gaaNBzHi",
  "key1": "jUXzjDhtce9V8GjC6KNVQVwyaaba3zqXaPyv5ca3QuzbDXY6rtGM3nMbh9FNhzezBifJBRBKT69JD8xtwDVUdZN",
  "key2": "47tH99HB2SHLZSqxwRVCgfsL2taXcTuRb1qtWwf3qgRC8amStUeaKMJK6UpvqV7wHvr4gCvePkpmtq5Hu3aLrmH6",
  "key3": "31fTDTvG7845AnBV24gjADLVwSD23B2e6JsehWoQYdWjAwT2CjijzTWTctSGyjUh88hMtuop7jcUrjDTKrAhU2u2",
  "key4": "2k7Pdz7QjCpyuArE4idgjZgodHPmf3YF9z1UU6927BgftVzFU6dUk3SF3HEFxRP51DGd4DH47aBmq1nWv4rgcdzb",
  "key5": "5h4vNXb74LrzbVLXonJKF7cSzRj5jwK2i3iKjBh4p3DJA7mQzMkQyv1e9rDmVMUkvdx4D2obPvXzx9sHP8FnbEDG",
  "key6": "bSwYxSLVMkPAy8WGdSV6pYEWHy5JrFJim2X5BzqXMaHoSqHB3v5yBVw5mjVEUpmELzQVp3LxYiNj7EbxE42PhHV",
  "key7": "2eJ9UHdkQ7Lx7eXMMUpQ59diRmCEdzfsHUneLwxP1FWqKGaKA4rxzbwDz5i6gpDCAFSm23yo1FsyM8KddcNg4CYa",
  "key8": "QoyXc4ibxurHQro6DebFhigparmEdC63hz6eBPkQKdHwFo8qypjAs9nMXcmXd6x39Epa3argFapJuSLKwoYA7jr",
  "key9": "4vwVWzxaADx6xCXoNxjAg73d78XE4PdYLeR9q9g3mSecAJGPxjHN765dovnysQaku4cd2vMBusDxmrPNAhjJBvGY",
  "key10": "49x3F43rh64bT8uRETiDUhQY9FYec7HqR6LQb5veJV4sAoWEA6e7HhLXySuRDBkYsrb8M1WRnqkZi5HehFMZc2KF",
  "key11": "JUtHgFLND7fYFVJso5nEGdUm4US3nzBQnksuzhFr4vcw4139fWbosWQTMu4Ri5abxEsQJCisC6QnAZud6gZMjdE",
  "key12": "5nTLGZJgK9diGGHcBiynsN1dGrD3sGGf43oeUCWk4UBXfvwPQ5xccoXm9V5txtBHegZwejCzazEX3fP1d4dQrYdG",
  "key13": "YHNc7YzKsCMUb3sxU7wGbnxC8L9w3wwipLGkHG6sZPHvqJj9skFumQEQj6S9RxBwqk3eGwkxp1XAN3bSitDpH6K",
  "key14": "4ULE8YtvvC1iSnrdvgxhmRaVLgYu9qLLTFtwwscKCP7pqeHNrvgdyxcqZDqiyRAN3Eua7awhrqrcx4uTfPPFss3A",
  "key15": "2iTNfBjNCaWssZVaxm2u4KXpwy5pdtgr9tE64QmPLxihUWgGhwAzoQTSrAJE6ecb6RM3fXra4z1wcBtfej65wypM",
  "key16": "L3WqvGavbGLyzxC3ivK6HGxnpRmys4WKHVJkGZRtgui5ncyt9pkR5QuTs1YJsfubgvxkyhUp2mCj9kPiQn3niBz",
  "key17": "4r17x97JSARQLhTzEeSB4pQeoAzEerAq9ndEY75xJmEiCUqJkHoFJU1rVExHjrZKkUdfv3i6reTKUmdc8S2zB4je",
  "key18": "2kcU55QKDkR1BVmubRH2ckA8u5DGCUHpU7yva8MAsWoZAbLpua2CrXRvq1ovkKNYaFfoY1CCBn6ge1zYUoNQLcoT",
  "key19": "2NTRgVQGtir2iJ9rvsCiXy3HRJCC8oicVBEmyA2FgU53M6e7XrgG92hTL8NNL5ktgbnq1eGxU2Sr8vGvgnen1YdA",
  "key20": "5c7yYwnrjzvdwr9jfNubuncDrdwotbvEznqBV2bjrKnJFde2FGxPmJdb2ZJWpnhF1y3j2pmRJT4dcdmJ5h85sUyN",
  "key21": "5ZBfanGVB6JAXmiqCyfWs1h1bVt8FFXSs2SZnrW7tpqbFs4rCVtifH6QMnZCJ4GDMWSDTx9yZzg1BJnmxHrFkbQz",
  "key22": "BciopKyedcqpEefAMoaU26Tdi8z3XwYMVspAnJspPFjXkRKUTMcF9FoWD9VX7w9wQKWNvFwhRwkjMCxvmPPZTfV",
  "key23": "66eetsXKx6Vx5CZ3yFpC7CyWvGqMcuQtu4smZow9MaNxqYBvqDRmRcGBDGzsfb1ejC6z4YRoxj8vx9fjjCRv1mvA",
  "key24": "a2vEuzTXmiAUjCZUhBA6xSoN8tachYmWrXigzf45oGdreR3FjqdhUh62ukCLM7irszQcaXEjRfn4Bn8jujrS3AG",
  "key25": "oCw9dQTZNAk63VQvd5cUYDCY8Hj2frwrxHpSaGjKZanuE8PHgfSXZRqgia7U6AcSLreXPhMNqa59bcWJmVsBT5X",
  "key26": "61DjnmcjzY6uqGYcEazhaa32m3P4cfj6qgqRiJj988UVCXor5XFJtzazNta6v3xpv1qaNVRgajJJ8ADuhSt7buAJ",
  "key27": "2jNEvcUjZEaPdD1pMFvf6ZmbdUM79fZY2MbEpPKmUMCfehW871LJ7Qu9JoMUC6BKvd6CJn3qApx9P9xtwHVSSXh6",
  "key28": "3mLaPhELzqgcWzoYW2hXXruu1BRN3WRgC3FvZRybSaW3N2vtH7FCMkNFQh3QPXK5xoVqnL9ja28HM67iizq6hY9J",
  "key29": "2huRcC4LiJkwbkWpwDMdRMtcVpkN7d7w8ps9RhTa5mmFmcaHhFjpZVYGev5gu5RCnFtBz4Pb2VY6xGGRqUhRZvgS",
  "key30": "4vTSc3uanWDpqKwybt2BPBn5ALz9vm1nWWBtWx8zy8sjRXx5hMrLpbXjU2nGLkb8FBgszNiBR25VEg8wQtxvcfr7",
  "key31": "2CXEy5a8evSNde6bcL2Lk2ZFbZfketWtdcGpUBh3MWSW856U6pVAeCVGPLyoQ5TVnTkY2qNFd9cXrcCQyycCrMGG",
  "key32": "3unt1dYarx5xeZj9bRjcFRG7xfxTfb69xDUowU4aLkAqF6aEsCmNgsoMUFGWEiNEmmziHZ8dHtqrwMpWoJzZxZMt",
  "key33": "5F8GFx47ofFpbuZjzqf8h6W6tiVVTZFLdpeeBCztPcCM9AUytzQr4djHPYQDUsBcbDxPTNRTPEXwiS2eYtAAPXVz",
  "key34": "5F2PxJjQBmHGsLX6PosXDFo7NaNHRNXBUct17W7ADfKVunAkVrG3tRAoXRBdG7SKPaRMSTo5w4HeocrgAdKRNByd",
  "key35": "65rW6udwYZhoya3BmoSLEYkiGmVx4hq2Auwu391P6HARRQZVr2BCfqHvRW9KidnLEF1sNzsBYMktfNTYgQkxbGj9",
  "key36": "ruC6nb3gqdqA936E2FENB5cL3VUcoUuQXtyJRLSJ5wHtmyFUsbuGipoiF7dCH3YCUZSuzAaKKsR29nAkz8dcd5D",
  "key37": "izhTXNdtdnGkWpbGmghhQcT1ZMEfdGSZgJTAKq6i7pAocwZDJZiRHtYxv78uJt3Nfne4XMY1kf8DuW7SXcrMAPU",
  "key38": "2Uq72Rzciz4mjgkLP1rAB9dmNFCvdaeQ3cJBPikCXpTcdQX9jm4SW23YgESivzqyQL5wf2CWcxQ6BRi7fjWHJKTR",
  "key39": "4Ry7L1sAEb2gwtoyMHVggEvfx3oyWaq6yeyWKyugjTu29vWwsvToWrhB18zHJiJWh1zE5W2EtJ3GZhUAU2gghuGi",
  "key40": "4JdheXSPu7DRa3QnxNVTLyLV62bHg5QAGNGQzkwrP7gMy7e2NVTkyhLxKGjMq6FrszRHZGYADcf6iMQbs8v2joeP",
  "key41": "5k74YydrFiKiwaMnZPCiQXuXLfEmE2BhTz2wWjQqrGN3KmMswYSm9wJiLHT9HtsKEsHcD4avZroYuGzbRv7eQUXb",
  "key42": "5yc6LCWtMNMkkS9zeDzpW8KEiUkk9LZguqzUkHN7kTsWekGjPTszb1swu79eVhNrPMbdJqexDjP3PtARLtv1iMWL"
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
