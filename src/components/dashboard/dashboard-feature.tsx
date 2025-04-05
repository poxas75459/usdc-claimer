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
    "5tBXZL77JL2cGUbmujwrwNYNHG6j74m3t7GozCJxKr8vskRJaPcxuvPXv9WAoxMTyugkhzhrYUT3CijRaBVMinF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fcFdNJRpsaSr1N1FvrmuVCaaXKLR22P4DRC9gjCBPMidNHXbikznJb8MdvzepZyEVwfTtfk68yhnL7ujEDgAU7F",
  "key1": "4wPYJyMsRnSGV3voLkQPSo1FHdDsyqFFAEx7ivCkaX7srkX8JKcQRH6NSZZY99bB1Wmoaw8EHbHAi13pmxEizxwp",
  "key2": "2uw45qNNgEhratuRt7fWqZiGbCojkXQAQGAeNyDxeLyiD3SYHhM3KFW8WAkdz6SRsin1W9ZwVNWanE4v6JuCXY1r",
  "key3": "5R9ktRbZtbbijdePei2P2grBN5U5dG3PXss6j1t86n4eghGvQuv6bGJ8WzCzxPdLxtgjXEdhw7v48sEeFpGAVYpH",
  "key4": "5CbdX31j8jHFkcX2tZoKByGvtxCTBCF1zJa8zmiojYwt9efjeHbSTdjvChv92nu2TJBBycwNv73SXEPuJ4pPqZ8i",
  "key5": "464v1gNPYmkRzR2tnM9SoRfzMfzP8GASqUmrxhxuS1fUfoYi3T24CDKaBtwquKLPHZpQUHqJJopeGv5CdEgQPYX5",
  "key6": "3dTtNsLq6MmoWMqbGbcLfu2QPN8QKvS7J54MjiuM6rz7C415muA82bx3cz9zMCVkrA5vTgTtMNGX27ucCLTp44GY",
  "key7": "4qdvH6hLVrcBn4oHpCG5sJnKruGTjU92EXofxVna43UVbojASY1BKWTNWHy3mHbGCfWF8X4A3DC6nAUSnsyf3W5J",
  "key8": "3K5eAEtUDC4kvrBpmS3qrQHTgK5XeKAj1T9FbV8kSpm1spfwSpfuyUmUQQvxzMkL7dVFSRr6ExByXgnQnxzAGcYr",
  "key9": "3P98AQQ8LS65FZUBKp3Uq7Ux351xdQoVQV1MUKdTRBnyb2AouPLXra1TmFfb1fgwXPj2mVfHWjyajP5oLRN2YNDc",
  "key10": "23cQqxiKWAt9FPpffTRGA2woY5nrJqrVjLCNYRr1wy7zTypNXRSEtTRuj7z7SytoF2ptk86E6ruJbph9czVWNsUP",
  "key11": "4SAw69yXL96Bh9fX6jKJsBMw6bUPja9HEVdJXYjfzvzMsQ3wFqgGJ79ugppqAfRjSyDwMwMg79rYHALakeFcdSJd",
  "key12": "5Wuu3d7VmJb3JMji4T1icHJj2sYvQszieCVaLD8TxAmSjJv152JwtxtooU2L8TecD5ZUaczQVBPKt7WpicZeGpga",
  "key13": "659kh47YHMEhgbnCujrxM2a4FXJgSvwJgcTYha3Xm7KULVvysS8DDHAyyzEtjzmd4LDVUdjYr7nxwMVffjUu4rq7",
  "key14": "XTxAqCkJRM1RWYooRPrk9ZbKV2Gcj6bhixu1GKaf4XcoMNfuNtGWN9QzNDFdrycxzqd4PHvWFWaDosmUpbkR4JK",
  "key15": "4mUxMNx1eMEjpj89kGaQ5R3TxiXdNTWmPmou9U6KzxKD4pF71A8nVsLqBTxFQP5jcimkbNnGxXitvvjtYMyPZh1L",
  "key16": "zeoaYMjQ8vptmWMa3inPB3KNgh6PgmCf1WqcMpNnei3KaRDwwiHCJYKezDWVpqX8xfvyXmDXLYEMSNrEzBygLXG",
  "key17": "4UEnVYu7SxSnk1EvEndNS37c43XUbuaFQoXz6KyZvJaJYkp6goAHTdYsR9ikjww7TdY38xzrZjgdmA9zsjUnzpW9",
  "key18": "5wdYJrienynqdMAAsE5gS52TYhKG1TCoDZkiUcKCF1ZERSzThGPpdPWvdupKqHawDBqHg9fBWUDYzk67WftnVg9z",
  "key19": "NFH8Qt7JyU6uG1Feh6bVqzviHqZe5fZdVPxpkCV5fFWwZUFHghCa1eUmkiX7BoKbV61fTXLMKmXsVDBjnzW14H5",
  "key20": "tEKnGPYhEjSZ514EaEsDEsRzqWhAmVEAbUCwLDvapYuAocSs1x1BJomYrWMvjcXvUTTrMPVuME5zkBU1oGXJA99",
  "key21": "3yfAwTd5s2CJdVkorGCm5Ck8mioWzG2kC9yKYAiE8QbPN6txc2Yp67jCGHaqFkUgTuye6gFB5MC9tB7b2Qw7styL",
  "key22": "23PCwaFWB4cbCkbMge25YNFVvPCuGUdSP9g1ySuoSeGhr3qQqeNTKs8EFWhmBcNk5npSTczpZuYMgtujQ4hnwySn",
  "key23": "24ZKU1qLDuk3mUXs4bncHDecDw3bna2hw8aLsfJuecRgm76M8K5bDwDvxpvRBNudBfvjLWCECynRPP3oMmigX5sz",
  "key24": "353ibMzjmeuJWzuffHK2n7NQ5QPVL7EuFGM5rqYLZ6NtCPNdgepXoSyhvB8dMsfbjvLZE2RHDFBvAkF6AYSpGQBR",
  "key25": "2ofM3YViZPHdtFYHAoxQEDrN7ui1T3s2ZZKgPzL9Yw1p4p9sgto3VThFE6nWrT29UEkDP2VjgJt7D4ZMqiUrsmyB",
  "key26": "4ZgLwVj2asQqTUatpUrsrqRRxPDx6QRmsvpUdyNJwEq14nx31wizr2dQ8VS9PLuRGb29yyzj5GPneX7FJ3pecXXS",
  "key27": "EdmizVcYbwLzP2udcGMQ9n1vwNtvGtqiMMputgwGRHVnCVY8Qvbrsxts7zv9sE35hjiUja8vw393CVT37nP3Ynk",
  "key28": "3rvabatRormuvPBwXUEsccGJjYhA5Heqg3aYmUyHBHeU7iVM5gDciCtb7KU93YjtnAqBUxAvWWyuojRDqzGnzwks",
  "key29": "242WVyqbrLLGehtov7W3D9BaCFNzPeQXbvqmRzhLS7FKGLNGHn1i8z13Bn321UPeTEQCG3gfC6T45PCk9hwr1NTX",
  "key30": "5kQnaPx3GT7pGzatexUWF3j6ZAcMXmv9w1ppR3HvsnCGmq2MbVMUCsVsWqtssmX7T4dMemDv9DgqMPSi6TgTqaW6",
  "key31": "2ABHoPP5bvy3vXaacCDD6FwCAnhr6Qd2WFoXaRNvVaXDKEJ85Heukom6Ci8NpJusBfRk1g7g91f2hPm1K9vMZmkW",
  "key32": "4KoMsb6n3hHgtvAG8L9ry7E9RJNejvQwpr2neX2eFpYjEL2xn1ixSP4n8dkd67RvyVevQR4cwVHYYhHsisQtBHpx",
  "key33": "5nRemX3JLP1MipFV8V2ofottGTpXcVFHxTan83VWvgfcgb6ZSfC7riDDDnJmkK9j5zuykw631MB3QSS2J17djsSd",
  "key34": "5XP9fS9Z3SowjAVVTr5K4Fau8w4xQijXNtmfA44g2z2nwF31CD8Z8WnzPHGXjZbHHX45W5obJYfHReeSTSRGeSzA"
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
