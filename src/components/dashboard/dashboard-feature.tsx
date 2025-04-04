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
    "4EnGcava9Mm6ymr7G48rGC6TbkX1h2VEhTLenGy49bX1agmGNVbGFGqYH1awm7G8f836bY5q7tvztEnVhtjWcixw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bbetMFegPpTGeqrUqGhsaFcKnqZsSL3yLmA8p4jxZNrxCo34pJ5dEW5a1Ekhkhd2mMsvRFaMzJhoF5qFjHyNWnu",
  "key1": "3hZqaC4jdaNPK9kqSmawh3pmR28KHmuTPi1fPLMSsniM19rwThauDDpdKEEeuDLaBLf3FxKpqbNZ6PXGQLQegzqi",
  "key2": "W2AKXQ3VvtNPivhffdos9o67axqUZ6DkNNooSntJyeyfBumao8Yhd2P3VaCENvKJUeMYHgSN5n6cLShnAcsbcDM",
  "key3": "5mHSfQ1pQpfEowPpaGdezsxo3E2gEyABbdFaa4ssbmMRWTfzo7ETtGJYxdzJiaw6dcJurP7m6GzACwkwpcaUVRKU",
  "key4": "253kmpBDPTicGproPKrLDb2MDq1etKCTbZstDxaY2g2DEvgKdKWC3EAznG6jExrLsK6egYT7XGfRS4g4bafeLLjL",
  "key5": "3h8iyYoGKuNwUXhy6rVSYMhCux2dyqcRpNS7juSDNJx8PTLg3TjD9ScQNcivGZ5JnrAZsz3vvafAdChm4RVydmU7",
  "key6": "52NvULT8QMfMSQ7tB36D1gFfyp4qoVuwXnpvpZYYn7oVpFr1AoMw61KQLWHT7aSTERkz5NqA3hcwu9TwnfkSm1s5",
  "key7": "2wDbFcrgcabyPdxBawRDCc3xFwcAFMZEqQEUJyhSemNpxmLRPDwccUEbFnmGT8k86P2Jb7DoSZ8qy9Gv1TCWZGKu",
  "key8": "3b3TUyseBtaSeWhCp39QMRjgBarcVvBcZ458Vr8DszJUjeE3NjLLALzuZm8dtdGQb1K1Y89rV9Yqjt3qyL4y1YV",
  "key9": "4PQhkXYFYip6vfVz15epcrAFY7qZbTLSFxatWAHURczHY9GU2w7aXdqSSNn42DTs7gxEnjhPnMdcBSmZz98HBJkr",
  "key10": "4cPqiETdsen4gntj8PFNDxpNTXuWP22UGkJARYJuRhrWLGcFYo4yWF5WrJc97f4u8PeUmAEGhyeK3CMfMJoy8k6B",
  "key11": "VAjRw2gu1mY4Cv1DdLWdrraAbb4LsM3SC3bvWUkhrphwGbYJ7b1EkRS3KZPFsa3gHPwsL8Q28gG9pQ6hqN6xAFA",
  "key12": "3aQCw3Mo7hNDouhwhsa6GwgEgR1YAQhc3q1AKcYJjogd5JFYxv86NNTnq8WZTiAfsWDYVi34CcdmYFFC4JLWmNFr",
  "key13": "54nerFJRX1uwAE6CVdj8opt2B3MkG1WaqUWAqWH5nJ8YuqrHafbCEGwitdaLpUapLC3cy8G6tHkToFoTufWWteLR",
  "key14": "3eTKB9AHEZw2KYckcuScPdLHPfsmkZJ7nyk4V65eJgrjKrwwavVajBLi6H8uRZBDMvjTueKQnaXnfgwxgZpT38eR",
  "key15": "5Mx8Jiyvp4TqVQ2EGea2XA2soWVyKgPvAanCBW53J3evZ6ZP4yNXqBkmU8Grt9ecPT29bkbRAuYGLPnWhaPvXVR6",
  "key16": "4cJkx3MwN6ExnAqYrDpuhaBTaV6ANwnQ9C55tF9gTvUkMWG6pjEsVZbheNCxQHUK2aUhkrizBDeoq2G6bXzURU34",
  "key17": "35ZpyxjDRng9m7Zrm7v1XxYxtNTvzAZ6bGfKrV1WBdinFPEsoER7rEvfqVdQtJTKLTY16673VFCF9Nc7AsSJ6w5g",
  "key18": "2mGbwXW7H3iWG3Y1oZSQmAC3i1KD1Ys6Ys5ZRrAwx3H4MjhVtgBnZnLioKLjmHpTH5URDVCfbAKRt9qigUsYxM3y",
  "key19": "41SpVnVQqmneHQ5fZHcDkNJNYWVRZfLUi7EH2i8DBN7EprY5d9HLydWmx2cdmHmUoQWZsKcFh4HSRnXCPNcQeC82",
  "key20": "UiRjhToNE8wWspGgThQyYiPDaUV3rpuG5uk4H1LC8NpLfAANdv2wGeCwgpAZAihK9xmAgk75C82uuyXgF92griq",
  "key21": "3quvu1cgsHAubsc7eLviv8Gd5kPU9qs5H7xjaGM2TWTQFbwGFewsfjwaE9aQ9vuqmXPnytXPxv25BbaUNBXkpNiT",
  "key22": "3FgCKpvwYsTEJjcSEFmWziX47RgWvDkzrZP4QBRehD45N9pWniczT5VP6AS2rndbAe2WTvjt99Ndge8vaGr2iuCN",
  "key23": "2sc2QpAjSe5MVnSYXNa4d3Mbi4bUEQ39Kf5BEG6KBnSdpeeNSmAX739UbBmfK8BZZbAQzJtNSQbM52PT8B5wc5eM",
  "key24": "594hPbLKdi6k6KjNDfktaFGmZSLp6wbJ8A1VQbLNpsUZoNwk8hyQpPBj3PFXW69eNbK187N3Rh9megYekoSihhYB",
  "key25": "SYisvwweVrqHtup5AV7X2qJis9rLtb5cDapooxTBKg4ps5KHTb2wi36AMNRW4a4pFkWQAQWtMUwEn9MYgivHm1F",
  "key26": "21NozWiEg9QsajULnocs58Lw3rmbhscKL84g4DKBjgx1cEPaFnqtvGfouapFwZ5TArt3EYxeirBPD4qbuf8xHF6b",
  "key27": "2mqAyjH4QfnNAS3myKZgYBqhsadt34CbzoakSX51Rdt2meDnqvfap6SBdp2nTAA9uaPdkJ5fuWb6R8fLDadLutqj",
  "key28": "24nWwhpQw6zQzAd9CFw34FLthXv8DyZtquaiLQPeEU4kCneTNQke8Yf656bb9dgsbKSbE65uv6KHdhcXs1ABca5q",
  "key29": "BMBd9Hb6m2bMkXfbTgP8TEpJ29eaMLGQaw3b7ZBSq8VXRzDvyUUQHArYtTxA3Mzj6rWNPPAYrMKSZvM8JQrwaxp",
  "key30": "4JcWNhKbzdA4ntEBTkg56hw725dqpZ7T3D1YySbbVukpnDXrjPjr1jt6xspAHJMtJMqEZwJwqYMgkBPixFZauvhb"
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
