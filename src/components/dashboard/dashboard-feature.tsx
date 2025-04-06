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
    "493pH14F9o2r14kuBZyVRL6So3k7JnenqxLwpk9VZXM9e615S6wbRDZYV6e1fu4skWdPcmaAQozcQEYU8FAfuZFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EXr3tQNzWBrSwBnL4rSAn7cycHQXMUbMRh5AFAzhsMmRhiJPqcRdZjw7pE4EFSYpTxoXp4NiDsYU24EupLQBkYu",
  "key1": "Np7mwm8ppVgWuyRhSZcn2atXLH8kZD36zNLCc9RgXrP7CT1awWvYb7gedZer1SYdmPTPzX8qPTEFMpKdjXm956U",
  "key2": "BS3hWPPTXW1xanQin7cCNp7VS2Ns6xCNWyKydTZRg1gGn45sTZJySRSBZnA5xB3ErcTME7dbxFTtN2LHgp5M6Fw",
  "key3": "4noo6oaV3Aiwb969GhbWpDGFz9A4moZh8VbqRUDkZsRdgaASfgeRbu4HTjEkKwRc94HCak7btx7YDKBAZA4mN3S6",
  "key4": "2gCr3aCCBzES2LrSFe7m6CgFgr28to6xxP3XEfHrVLTA9SdYVQkizbfEcogzEPKteF6nVYq1E8BNRmtn2YjG56Un",
  "key5": "5MV13QCwHPPm6NRTfGLciYM25n8xBSbyUrN2ruESNgTnU3Fucqz69NDt9PrQBQYYAijdvrgecyYXsDTpSWZTmZsu",
  "key6": "4Jv5ga3nx7UT1Cd9tcJfR6cNvjpvXM9j4k3P6WraGoN6oUtRMNZc4fYoQDA9k8VruhbkFLJ3jgW69SWAxHjYkFuJ",
  "key7": "55WvSS7Njkg4tjD5QykKMBvqtaTgMHJUCH34xYaxr4enEJfGwyDMaPvDZg6y6ijji8FVQTvPQvg19LDxrp5uQUNk",
  "key8": "4xTJT6wthDJ55TAM1S76x27V27ErjxT2gYKPsXHffng6ztdMuKzaePCwhU1G9iuuUjXpvDJnqRbVMtvPJQudtDPy",
  "key9": "4ap7RkxYnXPwg8aY3PYfcaSD1bphEBe5bcfRGtH2KKo4uvXXjLnj2adqrARrL91JU9xnQxkHTksRxqndmeNk7XsG",
  "key10": "5AkWfg5xVmwppjHWU6YkhFGupqBVTED71LwHQTqXhNNJQptukYkF1weDTFk5htAyeUe1x5cGsR1tpTUmC2pMzdh2",
  "key11": "4wMxEMfZcM26AVJh9PQPFroq9yYwJW5fXEr7i3BsA7z62RwQxzm5YeNG87DA8DcZKo2xdRauuZcZHa6FMMx1m9gG",
  "key12": "3oUKZEqwJftrpHLucQ1P9iKmWxqKgEwsfVsgexhRbsc6mYc1AcdbnhT3ExBUSTgbFr4CRVVKFXxitwGBZqeCAAon",
  "key13": "5BmF4RmPk6Jf1AUFGqihCVEoLdH8P8TsKWC9LTqwF4SiysZamCEeBqcDNs5iJK6TUY7DYDRJ5R1HwurPRYq1davS",
  "key14": "Aiegf5gqt1EL3UfSuLrwKofiHnQYxjcjBqNYpzo36vBqsQ8MAATmCyLYE5AEJmtLt2SHUE4K8gRsJxdt7Q2vLbn",
  "key15": "4HeXyEi3JQvFRwnoVxxqd1rn9LdfPRaDYcMqHpNc3gfn4p2L9BpnU6hefyGs6fgJ6tqA7Aq7VhLvQanwzfuNx2g5",
  "key16": "4sLgUV7kgnAFeLiaGFjo1yeEx9FUhk2j2A2kjiy7MSFAKSFhWU7wqfmLfBpzXyukrJ82HxwCCdCmxD4TosBmDbGt",
  "key17": "5FwHxHKYEFLpXGKMExVqfZEongQ6ySFHtLWRiWiTVd6bEGwnQiyvcFGnQAGdUTubBQPDCuYF6xzLqHTw9F75spfF",
  "key18": "5RBgRmbGkCh3d9o17KgBCDTy27GCmuaNRPtvp5PBmLQfGnog1RdEP9LXN5nF1UBywKmxfM8L8BsXw9Rg8PziUn98",
  "key19": "23vyixpDvxUdEonnmbPgXZK8nctoHnXtH7gnkUFGZph2gtmRsgrUjBsYauwo2QQJFwT4dZxXrztqLfqhHiZ8VsFp",
  "key20": "5ruJGs42K98zU33ECzoJAbA2wUWHbTrNab9WbuM5snihKWzVidvkbQX6WZJxDuUw7hVaDA3JzrBnEq63edMa2sA4",
  "key21": "2yDkKJupZik3xU1zmZV4WQ8cRm8ZyHaDEbSVZmMVSQfTZYtT6KLvoNewgrx46m915YViy8oKKhsa8L38h7R1WfVz",
  "key22": "59JwoD96TkPvsr8h7au6iZ1SxfJC4p24k1hr8QBu5Qwfzi1Pqt9mmr4NftKWWEC3smWKnXksUKoJixKg2VJbGPyc",
  "key23": "4C14EnokzJkcxRnQ5rjoxbJTxxiAyNH8Kj7GXxjf5mwPJWUUbQSpFX3joxTGzKnZSZXE3W5fjHtMb8BUdXt7bQX3",
  "key24": "62ZbMSPUnNBGnX6GdTmsfZ4kP7j5PhMBjtKmDPu1F1RLoVzthJ3GeiRYQmqwagF2cFCAUKVinGecBKKW3kHRWjFM",
  "key25": "5oS9rvhRLxqmW6ZdQHFoyrD7TiCs2UXsffZdgBMGF1wnjYHRZysv3JfxhJU7eNVVUZQvYWUesMaLVQyLgpNm1rdQ",
  "key26": "edRwrToJzxE8BU8dfdD4TDhXHFkGXRZd4YcRHeTSkoFqLrvB6EyAWtMJdTmcSynNqGofzcfxBeu12H12s3Sxv7c",
  "key27": "4zVv7e2XuBzdND7tbfpgCTDHietxMQuQmThXBwrw4ShUiBHvN7cEVzyVuRvZFm3S5nwZRJAvr3st5nNQC7W5x8QW",
  "key28": "3xuHQya5Tyd9STnnooePGeTqErY1621HMCBKa7ik5ZeQLcVvri16QHsAmDnQozDDdHwhsttprAL5oZnteoBpBvBq",
  "key29": "58Z8LBJBQQ9YWFbb5qnjwm8wsXx6tS5atuwiPyE3u3puoj36Jf7HCRnoATXoEUHy5Qoe8iWhL9rwgvQM2L2YBDe9",
  "key30": "4xtBEcBfVPqvn6B28ipCoaMwyXvuxkmPsgvarRo7CszD3e7BQcPara8WhWJfbaop7K3KVbu7yQkaiAYHPnhFYX9E",
  "key31": "tZ4rRpiBcWxtPQUupLPbonb17m2vqmcexEAHB6zmDQw5eA19s3TpoEBNkPVWPE42PkH9ZEM8jj6NLXL2E8kDKKL",
  "key32": "2MSz8jN1XebB8tjLXdY2ow4W8qusSPaj3tFF3r9bYbDsjJYQZskD82aFoomXkrKfF4XZGFE39FriJeQuSW2H7kt1",
  "key33": "4RQGWWKf8x8tck5Vc88T2R6RRf6yS8zM78cQgMmceWLVo3nPM16TE6g2A2r1bMjhYoHmK67KrSjApcGNKkq7fNBJ",
  "key34": "5fmx1kxqHtCkZBrce7D4AGYfwS1LJ4U5ffEDcY3wYAKazCFM3hgkozmXbotiF8JyixsfAPw8PwzAUegGSueRxo1t",
  "key35": "222ARKMwDq5gTynNUeDUr7QUNvxhWQeqR71E6wSnuzDCaW1A1xiPF46zsoqnq2MgVTrTuxb8pcfozXyMmEAaP1Kk",
  "key36": "3iASjk6jjzckgVqgjHKqeTXevnDRK62YU76RTeHxTTpja1QF4G1rqW2WUxG76QEuZALKqojpNa7vqNbywgcUvQop",
  "key37": "4rbirg1RVJX41dQoPQ2EqXD3vn1RP3fQs9ZJCWHEcZoCHitNbBhQ6TxKE6dmq5Neqs33tnmzippsJrpBb8aMHzsM",
  "key38": "3QkHvGwg3ZXP2V9TcYVWGAGrFChPDe5DrbADo6QyXLY1WFtKR5h6ik8wPBZ2VKCpGK7VRivVeKZtZoB9E5fofHq4",
  "key39": "21MeUmwMEjS2tcZ76ALgrMcxktTtPKZaidYMwYFoa5aTakVLzZwJVv62mM8ScHy43yCR4wfM8zaSQkFGdTXrVnMK",
  "key40": "4gHfhBbkTdXL9xcQ4tzfAfEQGfjcyoUqG7QyNPuwDTdpZi4QpMrGQkYGUVVBwHfrocsgZ6Xz8THAXPt4eV53CRAD",
  "key41": "3kzgLWYiAdN9wroCs5JbQifRh2TECpcEAVJvQBDX5hoePG2bD6gxNEWnuCCgjJnEK7pF7yDuziYX1UCHBr3SHtwa",
  "key42": "2cYWKwy4VE6JzgaMqUrFUvUUvhDnRse8TCXRKzZYVVrif29dcc9tYp8SnaX6TRN7tANVJqDwZd7dwqaqpVKY92C7",
  "key43": "22MUCpstSzpuMsFchjz29SrQ6KzomY6x5x6mqEQ4y6DEVUh5hzB8cf8zhBS8xAdVjGi9ZmV974B7fWp6HDfjtLDi",
  "key44": "5trPbTBc7HSbrt4yGkodEfXMN8afMcTrnv5FC5wYecSghbKaSK8SpMkCVTapw3zsouBTgimbhGrsNWnEYY94qg1a"
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
