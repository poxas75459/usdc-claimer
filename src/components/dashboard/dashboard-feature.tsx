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
    "3NnLz48nuo8hSYSZJdMB2gPbyeaRYmGK5v9MHjPBztoFAXkN2Va1uvFCvurczJsvtRNau6HurW522FMwC9m1sN91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iw955C5hJqapgpKNhVMSMdkACDAioKwRJW3R1AnmNPkt1VH9Z9JzDR3Hy3qkGkSEyaWn1bdmk15U3szX2snmqwi",
  "key1": "5sbBr2NkAUmABu2P3csgSXRjq1vVyN4EGmUS9By5L33NeMR6WWXBG7DGLAijYzN9hAAdbxvPCvc8EeiZevnbwJdH",
  "key2": "2fmkHHH6iJhXoryua27hcaq6op7QStSwUPTgHgpiwEKecmgTheNy9YojpURXWNYmHoYtrweoijfpNrcACzqMKQ28",
  "key3": "eabkvkTF2rT1inYNTd2jDhGDfovcCdSLm23XESmpajd2uT7AXnff38QD3WChZQ9fmwni92UZKzMvnony6YtTPwc",
  "key4": "4qb48WbX18DwqLUzReiAu4iiee6KyDcPTewGXmGBzcu4Km3XQdF9b3TuYfoVV6ZeyEoRuDpCVaDNbEXFAsSNJ9zR",
  "key5": "5JFGVqtGxf5ikRAmprVWAwftur85y3V2PXfXJq8Te9S1Wzm9WtsTcTik1GshkWZms1bZMLsxZQnZ52ceKgHMsoN2",
  "key6": "3ZPJGbeP7aGFhQYFAfMVjz19nPyKs4rqD4rWEDc5nDXghspaH3JsrWB3AhruUYjXihsNS6rrzdnQuztmk6HUi3RR",
  "key7": "21dFyCoH9Sofzp3U75XZ8VgZL4qzpoMv4keVATAa4yw8YGrX3tN6aEqVW1NJVxAoQ1c5w1czaeUPAGPeSh7aX5sW",
  "key8": "2vDWkEkZ8pSQjD221LiswsTiEjLo5uK16JvNuqmvVanVLK1NnGZKHrVsvgkbtSy4eXoistM1CuKY4s7FXwwLRcLQ",
  "key9": "5KVgQszifBJBwEyYdHL78VntzCqasZY3C9Rc8VJgtFFPLCR5FuHKgncMZck2z9uo9EJS6JFs8jBPNiYH1BzvuGaQ",
  "key10": "3r3chbc1jpRbh83ZnU4CVbT3ECbzaPqwC4giD2Wb2g5z7gv4weCyz24QAAksNd7T9h3k2ZLJ6rsHstaMX1s5Z4Ai",
  "key11": "3Xj5qXgzKWWM1WhdsvmGSPwF28SMPchFj37cFFZkvDTR5Qd8rLcvcGpkdHkCexXDaPFQFYMHfsmgXW77M6MFtdq9",
  "key12": "vEfhSkq7E2ksXDZgU87NvPHFo74VmB5han1cuBmSVi2jCg8ebXf6tNVA4AeJfiJumFGbcJqmY8i4u3TtLhrVsYB",
  "key13": "TPkMudefrDLsCZbEw7N8SgteciTZTGMrsg4mqbDNc1xXf7UJ1F7PNURKXhxZPE7rwEZjq65kCQeZtgMrHuuCpg5",
  "key14": "4Wm7UY16S61Vv8aAMRrEdXm6ESqYgjMgYYRG4G7QNK2DmaqA4Q1D8WT3Kw13tPwWRiER94PiMH8yXG6BZSz673nB",
  "key15": "4viRzwWfoRhNDdDXatJqTS6QMZQFPewv9ubMN9wLeaKA4bZGH3gJzYPvnoTChSRLXHsbBwhRK1a1G1HuvCgUzKMf",
  "key16": "2Vygf64kKmEEhSJoM4nyPuuTcbo2RxYNYAJ6GCU12PAktzdPAdR7Wn4f1x7JnPKrBnwhPAek1wZXBFbojp6whaUC",
  "key17": "b7FRnwVqHxgvtSAGFc8tdtBMQFxLC7TUz7zApspTPdgszR3yQMWENkBfGyr4Pjt7ysptCLXsfSwD8pcVcRM1n4h",
  "key18": "3XhcRudumg6e7eydWqzh2e1p9bGezchidWMBiEMeSNzaX7rXWoCstqMLAmqaJBrDgJxqTs1rCfmUH5Eia3GSRdC4",
  "key19": "3DGoAE6r3eABueNBNvU3ysq177Ci7daM59Gmztbe2ZtPefZc2Rp2TRWLNyA5CcBqoeTnTMZoBZAtMbF3Nmdo31GM",
  "key20": "bS5TuRVs5jaFzHDDk9xXFyL3GCEnkh9LTyKrH3zQqqxFYbvoZsqEaqsKQJitxm7RAaSQsJa7e392ip5Hnzsrzbk",
  "key21": "5pSf53iCg9CwJ9T23Y6pugtRxMpCvKG1UMci9RC2iNSKyMTYmaFZ58BQNTctZSzRQR4tdMdEgLnsR5zee6EWdXFJ",
  "key22": "3NGyk5vvuSwzKDzyoRwXiYSkWLAABbMUfUvbtgecnEJ3e9xADdp7Ea5wPQkpSVZBM9kXi9GCVqS8FrxhsYcD7xSA",
  "key23": "nf8gQkr67U6G5nwB1c4rp95wTf3N461L3YhvmDqL5LzyHsDk39brigNMymvegkSXARbbUysCpqJRJtNz9iHxwNZ",
  "key24": "3g9AAyTkh5w2YJKuv8KWgA6irfzy3xJFv6DQAGFEjTGaakZUUpdngHN1q46BhsYdotmKJHzNd96YyAydcRJDtuFt",
  "key25": "2H1bNn4ug2kMBPbZeRigmF6t9GSWS8cdzGDw5k5UKwkSjUoJejteKJKo9MwRNzjr4yK74JqEZ57xP59G4gxEYf36",
  "key26": "4rirmR7KD6b8XccSkkUP1LmsouQf7EbNV4ADQ9J7ofbje6PV57RcASCy6eKhTJDmKJcukVEBDJjKxFMJWqTvbGdr",
  "key27": "4yNv6z3srAQfLCTGd91oMopcKq17kfY4gHamgkwym4G7pHAicFQsbkA5MtjGbiEgtKVu3BfCGbRFXG7rFmCq2k34",
  "key28": "2gB2J8vVrArJ2AXMZsrqw2Uc7gNPxw8MgPzDXB9uKXR8eiAz3US7wikhrBsgcNeJAXt2kF87eWjSaAWBuxHKVHFK",
  "key29": "4YW3ceEzKCKCUNG2dmM77jNTLyPAaaUSUuugJwVJoi2rhZFXM8u8KiRBUpNdmF5UCnMSNMZWCLsmVy7ZC6oCxRMN",
  "key30": "2u4JPv6ZVNLF82amFqEfQTJ5PonTvvhXibNG3PRpq533wuquybd7VoNkk6wuetWYjCLMKzSvbvra42r5Zv3tihfh",
  "key31": "5eXN8bQeNf6d1iCKKtwGAY1qjCYDgu4165pzkzRruaRjfWHvtyoDZVgaQsYKm6uS4kWbAw3bs5WeA14p4LmnPuTi",
  "key32": "3z81vU6kMyz7QxpNHVFd8c3pGkPgRhT7iWRJTTv2iPSo1kbRrKUNgnC6A1jdXjw3rSNJwGRurwZDFRa19LsAsap2"
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
