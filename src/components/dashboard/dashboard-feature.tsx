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
    "3iiCJCMdkeyqxpgu8WN5j2BcKxM4zt6H43yeXjFUfgZcHq31wN2vzsJ7BpyT9bKrsNhqKpLo5ohbMQ1mZuutf95p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7yWukrAn4yBTxyET6rPL5WzpTx6HLERguVcv58QnFLPtTWrci3TGR7jtw6VZ6qQjz2CoEBkqYL1KaKUEKPZ1d1",
  "key1": "46tnaLQY3YVH1WMV5UWcH8RSdKhx15g9kpicYgSquUrzo39MELSAhsY6x4oiqG99nPdhgead6VDLgC63mmVLNDEi",
  "key2": "3FSwrvHDf218e2xPCcx8tFNn2CuYd6WCy8A8j8VCNuR3RiR8yidR8zrqV9ZNUfwJE5X59YnsyRZZvF21j2xSzgGs",
  "key3": "24rhv68bpE2tRUm5H8S1XeCo21rsJn2oQu8xc1ep3DohJ6dDTf3oMGgjCqdmEXsFYE9Q6ruYn7eE9NRXpiDR4ES9",
  "key4": "4bc4ChVtZyKfZ14661wuqRDSYSPzpUVbL3PHxMXwZ9w8uw83zy9NgCYmwcNuzY5x6xaaWoSTnwvZ2wqS4R4cVfTQ",
  "key5": "51NPaSQKhuMCn2bPdJtSM8XpZopoFH51dNmYnpQEVTjhRcpisEnHdwZLmNjQUJ3J2z5refsB8Z5Umi5z9qJUvGoN",
  "key6": "398c2tPbN7gZbLubdhp7jM3rpfxnBAfSDLx131nukxUU1XKwG7WXG1BA91EwAnFUTZm6hrJVhj3pkAyJtwEtsy66",
  "key7": "3A7qFwX2hXc8uG3JHxB9fkEex15v6JWNL4MBsC2YLJMRnFYRsiNz7NRZEgZr2xzS7pSdzjXr6zCAU254Fm5HhMkC",
  "key8": "4YB1XfgqADxmjp93MoCQsWjikmViga3RJCmjnyh1Hhg64who1bFhycqDDf4wACQNfYYe4ustFZFYCciXdxPBduX9",
  "key9": "3Pyxy8uFamr1byyLjuV2MFzHqw5pgjwRMhszCABrSERpdWg2ykznJG8BazXR47ytat7KrFBcejZFGXkrqCqKPMyn",
  "key10": "2NEHML3pF5Nw8e4hTQ81kZ6GVZKM4UychreBrpHcGH8cq4PX8P9QyApgfHwKN1ijhbySbjFmKBiJSqPMjYh8noRr",
  "key11": "BAjkGUM9uTMcoA1k3fFrLhraugTYJmcUz6ZvZV11dMkuqiJU5rcvGFiZwdZf4BRE822Tx52zHeMMPcmcDTrTFS8",
  "key12": "66bRFCSQwPvhbxxxZoxQyFPK25G4qfPCro9RWwwER7wCgRkbDujVd9pmJr3e6rMWhTox7ZKaUt1HhjyX1DuS4Pqj",
  "key13": "5DPnE6SVgUou61kVzexKpwKFjwSj9Q8kzjsQaFD6zD2beT3L5AsteRkiv5C7UtEwzjnhVi67g3GQ9SdUgXuZEvhA",
  "key14": "4n2k7fEL7S6R1kbQ9Lh8K18wyT2pmuFYv67mYT4xagVxSdgWUitid9p55mFUNHWasigw8eXwscPHteGXRxt3HauK",
  "key15": "45VFacPLZP43AJHKuVfFggBdZJJoBabM3xi22ysU3BfKPByYmpcxRDVJZsmktqUDTRpVm1WsLkiYaqZwDHmoSM7W",
  "key16": "5TRHVG3KaAJtCmMSUfAMAhrfH7ShXrJz8NukUuGhRVnQ53SoeyU1UNgBSjZhc48bdgMqk5PbvVtgLGmPkcDfR7xM",
  "key17": "49W3YxESjwPrj6gfATV1Hp3HUf1ER2vgLdXUkiay9Eq2JuGFXpy48i1bquJUL1XjU1VAeJfdmqd4SaTygzgimPou",
  "key18": "57oG2eadxH6z5SFtAK2RvFqD59bV1SsfnhhKPkDQUFSV2xDFMvWNoarp2NRFeXJdrfL8sXVQZxRa7Soa1x1ZiH1i",
  "key19": "4JiMdt3qMCiy5n2UHZuTm7ZB1NJbvLjg9ArPahLFnnyWX58A6tzARKqcZ8nn4ceuyyAabwN69v2qPfncqBNrNra7",
  "key20": "5X7azGCyoTTrFekozGoUb4vYEn33w2pSPYcKLj87GgjRKqFYdQst1fM5DYmk8NkLCTPCZzqxk8kfJ4vUUAeYMohY",
  "key21": "48dTiGorQdz5Qs1AEvCtWLe1t7m8YUEM2Zo9kdKGDGHoodNNJVx4XtwDy6cmujuLrSYR7gc2hPQd4mqVGXTsDjvo",
  "key22": "2jE4aofbqByKNZoWrmhgHcRK86Nsxtb3YVakJSSKMDYvYtSb8KtSkeSYCniccs5wX8TgJfdZaz55uiveoetXR4SE",
  "key23": "67oAZMPokKZG9xQQeYZtLdCdnHY89CGztU8ZBMszeBcrUXrwzVNNpQNV7TAmLjGFPr2ows1RWnVKWjHNGMQnJrAd",
  "key24": "5qJ3sNwZGUnhGetCpcChuRaW76qmvgW8PaY1aiQ5h28oJ3XmkcfJ84HynPVed6scby17MbZNGxzEuz92t7WM6gRw",
  "key25": "2PWsGezyxeRHJCPyoHcBM9QWc8doiBkmMnimLZtK3b5PbvRFL9faQys1yoVegD6q5tWh44xQnaLNBxsKsFiQFXdM",
  "key26": "2DUWcRpjmaH9WN2mMuhHFGVPCTdBEA2ov3ChX8qnkKUrk5p3gELDJHpyzBCUTJxq16MYqTczc2yzNyFR73Fy4yNM"
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
