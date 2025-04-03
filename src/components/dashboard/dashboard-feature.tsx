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
    "34ReDuaA3PBL7MsDycXjPZsn7e9PqKUyEFwJNhs7EZGrqVdKRh55T55VjZczFM6XgWQPbEBPjq88Hyhjm2wUoXrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jbp5J7m5HD9oUn6axURwTetF1LWbauLjzkqgMMfzW8HDto1oe3G4iMxg5HCTng5afadzfDa6ix5wAiY5Nf9AB4R",
  "key1": "3py5md3okyC1FqT6hhyWuG8Co71Pr62LAAQp2wz6A8G5WSm14xSkd7SF4oTfDPwMaPnDdyjGBMLNMbE5cG1pspP2",
  "key2": "4YNp5wRyaoHGP1K7ZX1iCcrQf55qxRgPJhGemgsqf5D7UXtbX7EkUWnsjRQkoXi6kQZaafWP7QZV8w6KupmH9jR1",
  "key3": "4ZTkuqX5GFGB6HzCaPvn6euPHgn3QoDscKzSFndvFyVUqEj727gA1Db7uZdYUuuiH1tGx69EENWA8rwfeMvYqb6V",
  "key4": "2Z1EagdV6FS9Dnby148wFeXiFRSud7L2TBXeYJhCXNQEd1RygPXRMKJQt9xn2PduKBCKyBd9M144ZfxAzvqEJKLD",
  "key5": "5XE4ux3jtS7MZoLVQpzE1E46tauDR2kSeyhDBGhaVzqhcXfn6g7XJ6ETud98Q3FDumU5LFjViSVZT15Dn85h7in",
  "key6": "49Jm2D8LEPCPWnkThv5gWBwSCCk4VCr2CnnDFniMt95RvaYivsNdVVx3E9tceWtnBWvpXBqehWJ39aF7NxtzcxdK",
  "key7": "2YW7gtChhmhaQjxBRfkxsSdjkEkZytzWJnBF45hDqUKdib1qTPWQTZXU85rX5SkbA8iRCTabZeQssNiKf8gM7RHZ",
  "key8": "2Y839VNK5GfMgSnxMLa52RKkAKTJpCCncFth9U9H3tFznBNFELyK99CJ5XouNEQpPHZBonXNP2dVMLhcZT9KxLEj",
  "key9": "sDULroMrT7oB2DEj9uPSTs8V8rkVnUDiwRLYQTSAg2dtAJ8fnvYBCBupwKuj8EnxyF72cdeRd9n1oiwY5Mj1iH3",
  "key10": "cMrbeMRjnGh5ywctsANVLj6ZmX4AtCurrapekFcfXFcPp26ZbSAeKMBEpHYpG8Z34ja2dRFYiEtpz31ZeLvmRhs",
  "key11": "2UmvpSH265M7FSoBxsND1VbqqsLhBnWjLUyYSVhzYfm3hi3SzJnevFJ1tXNqCwg3FtYGiaeAYVNARjqdtXGs5nke",
  "key12": "5xbyXNEMfEJBM77qreGt9KwCiHzE1oetCJPSPJiMGbcYRiAX9v2bc9qviiUkNJjiVojeAKurXs29ApwfCkxSiF2o",
  "key13": "3u2D4WWPtaHrCvJmWZxfo8VMFpVUBGTtKyqKbFtiK81DEJdbY862jKyzR1D1Zqk7SUVWj6UB5TvdAEa6TfZVG3pF",
  "key14": "2QqTeeUH8omQci6DhDEXzyS7kjzQmCG9zddc31uAi2Z9rwnDmSHJ2jUe5w9dJSPrmYqBNdLCXh8PT8db4NSH73y9",
  "key15": "2zh5QgQx8XErqWc5eJ8PGFwqXN3MkBicpaDGbuKFf22qiraQ7ETn7iBBu3fEdkgouPka85aVSGmqAW2vtCBF6YjS",
  "key16": "bApaJUU3ajDD9o4eV9oe8eEh2FfuAEowBLYbvsUGkxGivZTguQrP51K1a2rf57rGh4hayLTiLzbEk2iSj6SJtCy",
  "key17": "2p1xbKVs7LXeuM46Rat5wxVd3PdSJkSAnkgZdCetykYbbYsxPXAg5CS14uPb2nTH51UcdyPLR51kFyE7ZkRocqFP",
  "key18": "Mx1YH2md7h61PDooxV6AcadX2Ecnc2Vtzw9Uib3twrMTqpbuC6oujGqaMJhV8tSxt97WyAgLFVT6w1bxhyn6FCe",
  "key19": "2CSE2Wa8CWRzuwAfTXmS8uDfbVmLLjH6qGW8BnWtGUZUopda8Sna8JZb8PWadw5sYHpKTjQc9qr9R8qSymCNF5vB",
  "key20": "4sFwKFKpCv5NWBTwr2adjbNce1mZqXwQhfLJphB5U88aCUvapB1AGuTh7k3N4vpxE2SC2kzAqv1jxgn23yhSeEkG",
  "key21": "5v5L7YPGBviVTJRdDHrZkFuayxDrYYJG3LDUQCSPakMSFtF8nnYBeNV28HkMKHqquCdTNLKB7kdgPq8RamiXoYbU",
  "key22": "4bpx98BqJSkaBMdXJ7jei13wTgdirxQrBoQbgtb4W8KLePsr4DPBfXJ34NCJ6X1X6PcNBJyzqC6WuHtP7HuRhJR1",
  "key23": "2Qvmpiy7fbu3Bns2u8doiZxsJvftFcyU11ccuF53etwFskVHfZVH7BJo8C2ZNZpoEgsoPee2GmiRKgfaRiKsgfKP",
  "key24": "4u8UMifUyoisvQ7JpdspNLij5NtbCtTb7cRwoaGEe4bPntVzgqHGjpoSQvX5rDaTR1Mdn3w6oXpHrBqiGEL34cp9",
  "key25": "2RtqXqcoUugWS6FSrwnnTqsTVs6K41YFeyL6CGVPFJnVfciGDiYs4WMfJ5D8BFQ2JbN86G5NxoduU47CZmzLkUbY",
  "key26": "7WQZWhKDDU3erqQcUud453mwTqh9TBxyQCdoe9M7wyc2cHWWkV5ivAWg5ATJ62UJpBrKqgB2U64pG6La57yx2sw",
  "key27": "5JCzP4qktohPw1vTv5yH43s8CCwrtFZXkFzb9dkPtyUJsy668WZ9dshtXEC6myuEHK2LfWXLXTW5nrARDTLuCqHk",
  "key28": "46KZ3eiV3GeR68hVRB5WGBvgM4HQkqXti2M2xMTgLqLkaZtnumbnocNetBZdHRZ8CHQT9tQw9iGgqpSyYEuZVRX4",
  "key29": "2DZBP8bDgfgJsxfFh3Css2UmhqDH4MhFjjPCsJ2FviE4XeYuj715A8KvyLzSb6ptbfvVWyYawczC67nkbxjTZHpo",
  "key30": "3LuDwRQ8aLZ8QLe9oZAX6hUPyeLEoekt36X4HiBShkPtGjRpRkHoFPuXpZosQbwrmWzVp5EyvS9o6sMnKkpqiCMa",
  "key31": "2QGwcGWwPj6aRAvHQMPqe63ucZLojVJ2KG9AT8icjycy7CReYubZbCQ2zSidCFU83thk5ktTcPMA8ZvUNhPNNSfW",
  "key32": "eqJ23UAvD3QQK48Z2FZ7WKrdue92VNuNSnqef69Jxbpc833jTzg59RbHh8aSszjEae5jY2o9KfH46RqJaUnN5UU",
  "key33": "4q7zQia75G63JDy4EPmddCQpvwgdSZcmHeC5LuKggYvo7iqpAEDwbk7sREJbGbaNTsZWvrc5yQ59CXFJiYJwwYBT",
  "key34": "2fT5kJsthwHqChnhVW8rQpDfdLLSuH9R5g5qHJSCXfGgvwagzt62aTzqsdadX9EViR9XKJbjFbi2eDgQ9SchtNq5",
  "key35": "4AGmp7wd8QNzwkBvHtk7a7apAirNN9diDGLhmTrcRL8CAynoT38JRMXPLtgYMACmWxVJ4dSGyo3arZUZzeMxUtoX",
  "key36": "dYBCvcCKCwuvfb6UArKxhtfAq31ZNxMYw81Lg2t4Bq2EAK8wrJ2nUQNSrG6hC3u1GAzNRAoHGH6jNG3ugwMBfRR",
  "key37": "3Y1hsmTKfAteyqGvzi4vJnBYG8GSTwMAA7SR2yXkquE7kMLHKaQuV6VBhrKUWSk7H3eNhensnVdr525kDE3DNVd5",
  "key38": "3FT8L6Jq6Dv8cWMoDxd2NH6Yf2yg8Af5YdaBzrKiQTWQsHYQxSRgPM955TcnUFLUg3LRQbkAS8Dm2y2T5rhv9iSq",
  "key39": "3xebMWs9Jsftk4pkiG4Msr2vDoDYku7hz2gQpnQCHkHhZFha8AZ4nfxzYBJEJrMo6RegeJT4VLY3EWVBg63SNSup"
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
