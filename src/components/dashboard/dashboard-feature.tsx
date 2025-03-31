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
    "2MsVpFvzoTyhnWXYUTeMbkJxSQVmiNWvEm7CEwwgtGw26cMnitTWm8e7kRSRJmsrmdfGs1CHNDs2aDKeY336odWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fZogQ9ZJkHD8vqcqN6hKb4UcZdHdm5nbzE532cmTZ7Dh2gHKnBQ33ZVN1jLNRgQPrBaAe4C2h4jmmtYpefmaFq",
  "key1": "4xA2fQYkUTomYNF5dBYzQVLU412pzfNxk3W9rm9fECPWkFtEWEKwBZGQ9DLn5XVjBmFMR4vfLsgMUMQJGP1mEjb9",
  "key2": "4to1jCsTiS8PffHjDGcaLRRt9pZm2TotJAkXXdAtjf8ka5GcnG6KjChVkmk54vtZrh22W93TTtn59qAKvNYc3T49",
  "key3": "5JoMxirFGcfDqXeEhhGuF7Qj7Van2AjAyrkGV1d9DZUGsvrWMpNQZVwJRCeKdSSdVrSCjUxFzNffV7QzHjTBXp3A",
  "key4": "as1TADSyPwFurCT5n9D8mo2uiU8k5tQuY6dHFQdWVfhgv1gxGSxSuPuaVGdTmWvShjKCFunoDfkGv1ZH2eGYSXB",
  "key5": "27PVDTnYAWY13JL4VxjrrEggDsH8m6cTuTvFX5sXoXwXjZGSAiYpf7ps2zvaoTTRfHqmm6CxzHsBcpHcAt8mANQp",
  "key6": "WcTKP2X9NCM1vjqGLKXV4KVo3ZdJLL4dMcrsFUVoj9kAj2Pswc1Qyy1X6sMihyMZEdWjFBLF2hLkPvimBS7QjFj",
  "key7": "2DatwnSYfSbajXRRmKXNAPxXbBbE98u4A6VvwuKcYgaZP7C2vatkHyeB1AEDbCPijZLUzCfji7qpqyBD9UsLCHf2",
  "key8": "4P8yy3EfpFoQrmGiqGo6aLnaNMgeHU42N6Udi87wopdPGpkgL36cUqoHWLzPgnGkXdprn5qRmjNJdLWBLb25THUh",
  "key9": "2F21WqeCtf7LapE5r47jSodCEC4Ls9fqSmawTSoXN2MzMbQ6P1KA6PEPiSyi57exyczHsRGP5bxWK9SaUtfCYnuP",
  "key10": "2YmcqTF5tDx8ykWfjqXnYBUfNm5QG9zRaf5DLYZ6g3gcVdtuUMud8EQsnzrN68xQjFL1cMrwbv5Fhrr6Vy2Cq3r9",
  "key11": "2P9MaJZUiT1ge5gbR7YALm6SxzTexa4UsvZb1VqRUifh8mTkwmLtcG8zuwr2FgeQjK6UhMekuLj5rnVDuwJfkZr9",
  "key12": "5hHzNDZFHgotq3ScYRCHrTKRzWuLqZ7r5qe5kpRGNXWjbnjCoN6kBDDF9bH31cEecnsDEfBVuUQpyj9HVfrbdQSY",
  "key13": "4kgFSsZzWxWjrsWgR7T9UiEKetTDrCpSt5SxTCxNtvAx79NPT8ZuehrkZEzqxQmmBohBmPBSnypMTF4gAXa6fMCV",
  "key14": "2rsQh6GsjA5svfXZYPYtxu6vnofRc28NF1vG87hi7RNpPpAh4SVof4JB4ik8fpGeoitZYs6cgmdxEVGMn2T4pF2m",
  "key15": "3tQsYX7LxcCazXbTmxNdUrKd9mRgRsi57itbpGxTaEgLhWMHTjsnfpfBYhSSk7YvSeWQgw4MpCuDNjTFm3yuqt1a",
  "key16": "23q9Ujr6FT2FoSy8eR4gueCHLvM1wyXAthC2aTBqi3pF3n6yeDW79RSnUdWmt4CT6SbkAkEEtdx7SxDP28wcai8m",
  "key17": "23qUZ9wjJQnf1Wh7UkNixZqDHsz4EiNTpyMb8PpKu6yGWgGk74rmozCv5E3HnNkSZMRgDNPyv6FUoFeHqKQMvfmZ",
  "key18": "SDHGq9cLMMkjsG4LUnTmkJHKXCEULdb6c64UHnrvzcoawKHm7sCt4TuuTZSM3Nor4wfTMK3hEw8QvFHjR5qVCAP",
  "key19": "4azB64BLzLHkdijk9anyZcGYPXvVKm4uLB22dz23N8vsHk79zrZRjr3jme1qxpzc53npBBTVmavRxqkJMPF2yvoL",
  "key20": "5HJoYZLBdHkD7J9r8eeFbLwe8i9Mb7vztGVHNsiJK189bBRtFhrBimkj1wWLvG9tQYZP4JGQ4D5RFig5QVDXo45Z",
  "key21": "3w5kzK8b8jWVe4eDiCisYrvNXWSWTSKQMDMucZDhJbSTDWvZz2sNHzFcmtb9mcRsqDEhEXsfD51ifEkD1VovvSnf",
  "key22": "3Bp5wD4htDDHyFGb2REfPdSbKafGjKBy16nKR63BoicDseoZefL8E4bN5r2GTixxunnecDE9mXWuakiroETPsvr8",
  "key23": "2Ek3Y13jwBAyqFCjwzEiq7kCAYKjj88Z3UNVcT41ZLbFXFhuCN1XNhcAP6UHo6zT2ysY5mgfwNqpEzgeBimBSGRe",
  "key24": "sxXNEcL2ZX9yYMZWcn2VMVPHxXuVseUynMqpPH58ntStMM77pz2oZVUvL2rZszwnXHqB75uJzVGqMpm8jRoaAQf",
  "key25": "26bKaCCpSvoadDB2udXxy66cPEJcQK37RHKCFS7Fm9Q3U1x9jUokZ76KMjH3THCNfyLF3DnwT19Xdm7u9UAC3bcK",
  "key26": "4sBQjhvT3AY1o5Tqazg5q1YASJtXLqGSUiw6iRoxgrpDJHXfbqe2yFGLLywxQqZhHE761bvV8W3489tNU28ssv4n",
  "key27": "YKRe27Gu2pBnr7AGBtN7Y6Q6VxZXUPzV5v8tb8UdwocRxdaAv2bjomqPJAKRA5g3JNUyLa8s9PkZoHHoerjKat2",
  "key28": "2yH7E9sSgGKFMJviJRY13zLHK2vKowFXMKnETUTbD8EK1Sqj8vxkWBf2mihGjBU1BUafL2Cdgk8Uq78UZuwYLfuZ",
  "key29": "5jxMCSj1CVdqDZbiWZvmyqgeXUQAv1Jz4wDjgJmxBiAyFMEV5e8j6nayT7E91JL6yo5QN37uftDxh79HeoHNKL41"
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
