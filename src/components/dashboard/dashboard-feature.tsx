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
    "2Hz21ajvHkYmfTs7AaDeouGaazP9WifeduthUY5pDub8goehFsSQdNxZ8GN2jP2tPvwcPVq5f2jQAn5X6Zec8Zi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y2ssa5hNFoRmXmUKHkVxPRdQ2nfqawPCtQVrjji4wpayjfSDFtqrr4efWTjHdyrchFB8GNhJHDw4XtgZLvNoXi6",
  "key1": "5a3roCwtqB7WeohpHy6NVWcfp6RsTAB23jDhCvJMdpzr3rZoapc6FZhg6tB76rbejH3ab4tvYMzyPpuacj5VmRKj",
  "key2": "3skpxKp6yF2Gt2ECWN5aF9RtQnTod1NtPKbWLy6jAU1QPyQzwGDucKqiWtZCibynaHiQrMMC5of6JfkTM5XvM6za",
  "key3": "4xeoteVbtfoBvUfhFyDUuzeoYk8ZYXJLJheYBYsKF76QEnfhiFrfDB8e2z9erkD1fkvKYe2Qzkab95pgyvEaX9NN",
  "key4": "3d9hJgKLCKmDHBhPuY9SrAz8w99b3Qr3DqyHkRW6BFxFtLjYxTPA9gcYGQxJFbfzA7q97a3AXtXU1z6qPBzpK8HS",
  "key5": "5ApiAdtACFnbLDH589AS5xebwaPVdus8ZLmYcSUmVLNvPrvA1TcYJsNoxn9e13X9Vukqda93wyofQ13DkkUCi2dq",
  "key6": "3C2FtEg46YGoeT6iyRMeJaejpurDt44ugU92V8TZLi1ap9uhbWaNy1UJ59Yf6gFfzTFeNtZ2Uno668Y2JQj39pQP",
  "key7": "23WnkoN9fNGbWQgcHhFiJGjXh9giCn2JCB9FyFDffgaiMYkW64gfMqbAkdHyPCaTcPJxfmW8KSjR8LtkERDzzFdM",
  "key8": "2aYgi73UScV9WoTknRAwrZTqBa5whrK74X1FepTsN1GvFztKuk1J41e146yemv1dNjyPWsH53E943yvFyHMCPBUU",
  "key9": "4c8y61nmDNEikyoXxdQAnTHLXK6gzMNfTErV3e95fUuLUsipa4tgEqWokB7tPj4o9z3pJDochgX5RrQS3mfKRNXG",
  "key10": "f1LfkpoxjXfSHWwKpcfrLYMtapHLzzf3XrcDRe5T5phQHeMEntqdbiQST1cWMDj5ARgKq4FMEusi9wFSNPmtYjX",
  "key11": "42ThvJypoAGibnWbtNA6dh8vBpiWZbCtUjfMQSw7kJXEqhujoVndo5oqXEhnXLbNC4vZ4ejRxhXuyQg1xvMe6HLQ",
  "key12": "2hBYjm6g7CB3X9cmZWRCRhe9t5Sqq4a13PwQNUJdm4RwLFqKSAJpshVJ5uaQbV5mKVjMWcyfRPuFb3T7im2L8xV1",
  "key13": "5Fsh8FSV9B35btX4nharYZUhZEtUzsAbrXZHADD2sHJ4EDEnMuDnyd6exGhGkFLCmmyVumMfM77LuBwYmxMPdywK",
  "key14": "5sq3hLga2UViWDuz76REV1NkYbH51AS4fin3C7RsD9MgHmVCUVCCjAXyiX9kNJ9uTsmoj1rCy3fKZd8f2mVeDFnw",
  "key15": "5gPj3gVH8VYrxWDTAgueaj5VpAiPkHUJvU3ePqGTk6tREzRR71ERNkKHqWhefAWvSxKH6NBNQHhhTaqF8FXi3Y45",
  "key16": "3P7jBdk1vV282AJG9XLRRXN4ETBfXSnmU6DABhnk8fggdA8GbSPXMCY1YpL7EzTLkUo8b4XSjbMCSkkALQg6o8K",
  "key17": "3cNGLW7uQMKyQJUn9UU4io2gJ8rZuS92emXTtng22Y2CyGwYa42c79Qzq7KciyUukCeBfpcx9Y42YQu2qgAWiNbF",
  "key18": "3ZD5PuzEqsEheA6eAQtNaT2bVpLinBRuDr4CX2YsHV9t8zN68KJM7Jf9wqGteWUstQNUCF2JAA8mu6cSGDWccFgo",
  "key19": "5nfsbvW4RcB9Bfx1VB7omZXMZp69J1qy9hQpiLvC52ZDE1X73VX1SJMXDs9T52w3xg2iHrBpRbSUtZDRwaejN25Y",
  "key20": "5YXV4Q8cSVKtYN5V34fVSJMtgp2R8oNzwSrt7sAo3tkwKQ4PtTgbw6Ued3SPxpkRbXbSh8NXoHDzvsSFzQyeaw64",
  "key21": "3kQWzxhd8cDU33P3S3TtBNvJubwR9zXkBpqtudKfuMktLXE3aWBjEPZcULT197vFondrB2PfEkoqctNRuXmV1iVU",
  "key22": "5fycoMJQrRHvdGj7gAQzjEQtEwPwb7m5ai1vDwXULLk7Ub2J1ytLqbkGxqdVg3Yy9PspiqPJVF9wRp1R6AJfLiyp",
  "key23": "3KUP31cySd1W3KGtwXGXX1TANZESW3kvpF3pREf8chwu2zfpdhocGU383PCNUwVX9N1KkySgzGkg3MuSphppocgp",
  "key24": "2za4D63YKAJL7eTmfaxdgJJjic1J9ScuoExZigbtU9zMRaAbGk7sggLyJRbDNb5yH7JBfsKoG7K16Afn9Wtdvqr4",
  "key25": "f3EofMeBGcgPVDwKAWM37dRWvrUYydxT8Hqh7f22ZuudgvUXv4atZgVTBFfDfyoDqj1E1NARAyhqE6iVfpPoAFt",
  "key26": "54RzEf7XDWoe5AM1MZNe6nKhLVJeEnE16H3T1JxPCU6s8RkK3GNUQjuWJj9Q9c4DG5eu9GXvZhZ4s998pWDhzcE7",
  "key27": "3EXhKdyCygYZqp14QgGPjGDq1gP9izgzdUj8zQV3Ht32VHmhRKuKcCDAhK6doycMX6BE2MyuThcMeVHGxZLnccQg",
  "key28": "2Sfh4MSJVRMWNDpHoWyG8smMMwKnpRicekDLT67qyKSNjXFwENKmY18gBGn5Se6g1Rg8RqWv1Lg5zSSNe1vKNhGk",
  "key29": "4LAwgvq86dcrtRH4ZekGRyTEsTVtqQebuemxi6EEz4wSMCn7wzEMB6BNAdo7LEJCZqyYvGYiQEKQtRpCzS28SQzN",
  "key30": "4iyTD3GTFszFqPx1ciunQCuSqTpzo1rs5TbD8ue9qbJUeiyc32KEYUcB7UfYZd79G4GEU5m4sDVVmbhYhN1PhHyX",
  "key31": "3cPb4Zv83FaEEVaXdtCzHaGHWKPEPGo8Wwrc26jgkaqLhDFr7gq7piqxNdv68GPskXBF5A7aah5FtvcqWKe9MmU9",
  "key32": "3J47XeRC4BfaTwpp65QHGsPoQLEY7aqW7nYcbQRqNkQXm1FQm5pqnv6dLWZsuRHouE9eTFMGZypTK8FNRQiquick",
  "key33": "4H1TE3F3jWsfWPB2WKESLunTJCq4xXrJSKmvYzcKPgrMv2DExjVTxWSWoFTLbi2NMt9m8P6zcxbwsoRb8WFASCze",
  "key34": "4RTBz2Y1PpgjLoG9bKAAYhWMgxVirymoRGzqPLHQ71JUysVjZyUgcn2B2tV3ZQVmQj45A2wV3j3uBbpW9EV77635",
  "key35": "2t47Zyr5yTNruB7nqEycMjGshJXFcNPTfDqHPzcs6KPRMcyzeK121DrpqMqP1yTj9jEytMmJVXdNyDrTBKuSpgr9",
  "key36": "124jP3KXxQ4X85oreyN5Me1TqWznVwqAxXPyr6Q724aiTCdThfdQv7HijuGXqGHMiSj46Z2X9buMGoYwPogjkR6K",
  "key37": "FWAwwMy7CoWedY6NfLzT7D2gtHy7a7aQkP5NNe7D49EWirrwDifu4f1r2UcQ85m4XkZqYKTGdSuVHCaK1hDXYFy",
  "key38": "hQS9yqBeZCPtCDqwcPyNeemhC41cNXY1GoNwtCLmDVPLeY6uD7432VrRJ64XzjUuMxEBUyU6GYwR51eZ3zcHSAo",
  "key39": "5ZtokM6Kt529r2ssakc1b8T3hJ6eKsxdXhmn2xLa6ixHaU32zrwLBPfAATonmAdLp6bUNjpC6EE2dsH3N6KvSdRQ",
  "key40": "VNQo8R35tbFd1CWs6YsWWMEXVN5CfJT2j1Cd6JRjy1Lyq1qEPkDbzqbsz7bUvnwVSbJvqMoyCSu2jfHNWa7w4xe"
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
