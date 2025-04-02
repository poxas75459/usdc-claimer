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
    "5ggPxNwehjo3wTGjdkiRRK67abtpgc7yc4LDpCUv8tBh487ZDorRu7UEDKQ2uPRgLhqsUhPjYqeifqEnCHTRxKxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62mFZuKbHe3LeTKCt7wNBuvCazrNM4yGM3DsGrfndbjibdyk2hVv656h2YTG5phwywYgFrkyCcHq7g3w1PXnpJ7W",
  "key1": "3MEfxmHJ3CzuvfQbASDgYmmEqahZjxc8jo4JNogKDFaCaXUkjsrU6qtfL4dhS7sEcXVQfsbJpKbCXZGBM7G2GVkm",
  "key2": "41qVSVfaJq6G6qLkfd9EbxTc3V1MJyK7QhBxTr7K8o82ALQM8amvraKdeuTkDRFtSwbCVj9xzj1GoXuTFwxjsWjT",
  "key3": "5nTe2vmVid4NiTkCux7Kg5bPSDS6bDDBmga62QTf7Ky7vMZRzUfShmV4TGjrnwGPjJVhfeG1P4G5u5xwNYCcQv5f",
  "key4": "4aXpzXDPxofQMv9KD32M5wnPfWaKRPCkXtZNYeVqw4qE9Un9u5YVtGux4SZZHdAKng9PhVmCDdxjnwaua6HNSfQ7",
  "key5": "LetDvPTqacKM5AU7vYBxUMEHrFo5yDHiTuGJTg3AHfxnXiJwjCuMehXKVfRGsn2snx6wb6rbQjNYAqpSspmsp6r",
  "key6": "33ucv5oPt4DW4VTpyzYXRiLmLKcpUcTK8oZNrmn64K55FBWPuyNhHps5zbUdfAckGd669oUHFQ9p2FzVUdBSdVN4",
  "key7": "624Q33SNETppQBSSN6WJQPaJDf3shGFMXX63ACEGt8RBCaCm78fgCG6P96igsw1gU15zCGFxnXeuDkC9wShArAkK",
  "key8": "2SPWNJiteVuzBnh2FXUBpxGVZxjqGjJKaiHrp3hvzeZTQD9G6yNMuCjuXA1LxN8zGfkqF7npVoC2cKcGhnRprzJ1",
  "key9": "4ZGBUNQ8rfn6i22iyxNX8D8jWvFJmoTJmLbhxEuuAi8CEJiUpaRqw6d8iJk8CKxQSg8nEAjLK1uxaHAhs6wBbr2e",
  "key10": "3TYaiHDKZEjLeYb1bNs9qRgWX3q98B2DdFWfA22UXSDsj6QtxYDK4kLCaU7ArGpWRAWZ5PVcjAE5TZD6jjYr5szg",
  "key11": "3Wen7fCvFr35yVZWSjYxmsg6b4bC1jgwcDSZHCYT8B7XwCNDdcE64V7YWEtu6E7JnrPTHcjJZvfDvGe3Nw5dqYNk",
  "key12": "PEvGXpDmUQKpCYhVbpWxtinzmmcXn7RJSeMUAPkXa5g2S7oxMQno75j8aFiDbp6oFiCoG3Yoiqobn4XPubUA58r",
  "key13": "3saBsrHqmFXuZgj5mzt8heupv6H27bCUy449cpg6m6xyVGwaeUubXcADDLHhy8asmneLocqmoc2VR7wNyvBHdJUG",
  "key14": "GKvLTMbBK5JtGgat2vqEXT2bwt1cTrrCyapMaUbDg9QcoCs7qwFci4PRxmLwL7sYvhrdFyCuYZUXZbjcfV1S9ha",
  "key15": "2EP7yw7XiwgiJutLVtbd4gtvVCXcb22UuuV5kQkX9nq491a4WBzKxa5auVtERcjZzLEhbSX5geeVUKa9WDGZyJsx",
  "key16": "7DaZUx71qGQPpt4SfAHwUPw47bdUfbHXwV22FnRLTJ15KzjvDWzyrU5bvU7b7b44eKbYEPyUnyYpg5j6doc3JUd",
  "key17": "5hjktnnGggBkDE2Xxq5L1qXcARwNqmj1SwDCEvdWPDY6JwAJLVhBYqkj8wa2HBiG7ePM7v9RD4vzT88VAdZmRGDQ",
  "key18": "4RmCgJpdjDju6n3d2UF8Fwt77gSJp5qPiSBLbgcVzHHZUuyzJ9bcYwSkG1b2qhiGZMu5j46A3DDYigxH3C8bT1GV",
  "key19": "2zvewg8FfdoiobRFu6uZ7ZVXu7Cnmt6AeQNJSrxJajfrx1vmj1i6iVWEN9wqhoRZmnkAH273rKJwQo749oCSoAKg",
  "key20": "5UPAsL8YpujL16S1DraME2LVqKds5DmHhpfM9NreDgg8NuXYaRX5K5Bf9HVqJYWXyAu11FcdAKTXXu7KTeBPmURN",
  "key21": "5eLcAVv8gEGNAjgu5eWfTnwP8dG4ZGGeCrSMcR8y6AdN4dk33MWLuL9cZzFSA6HVK2aqXqCDosAqcYvxbs4QBSZD",
  "key22": "3iCy54LLerzLARtKwhHs6zBVdrhi421fAZCPp66WKhqymH9fCyUU7aW58tykASgXRAyik9iSLDmhsTASkR7aRW8c",
  "key23": "2jUbKddyPmQ4ztcky9z9UTc3w5VhkhwEcguDMc5BcgMLrFBX5WRWe47gifSEQDMiLgEs4yCFVh6qFVHEP5gN3fYz",
  "key24": "63EKnj7C9cTuchRaKVushDwwZAdaFaR1Ft295fdowMNbSa2ECMCvKryo21Fcig1d1V3roeURqUybAmnTT2zpJWLp",
  "key25": "YkBJ4Ns4xsTA4GTFp18s76P6uj1ParYgojdCiPxaUnUZpmDVmNZYqSburjdg5n1gBVUGMRiHpGMiSRubfSvBxDX",
  "key26": "4dN6swawQZWU1dsehWAHaY85uP7wGtb1BiDtxvb5St9geRBcTqsPZDi2m6MboZaK6UPhSKJDAakSHYLKAKdGE9Aa"
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
