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
    "4yf4T7FneQ1JoS8fD5Dz3eUftN2zL9KiDnnjuGRdG1N5dp7Ww3rAWomWwh8LwtBcsgCfS2kqkVJyLfe2F929rAsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vLC3gud95SoFwre6f3BNkxGSvwnyFgddXmm5hmj2yyGYLVD5GJXdopKJdjUe7feFXUxxnCoyWwrETURDU1Cz7oL",
  "key1": "pSoLEPY9JAK9ZRiCQcidVsm2dZMA4KDibKvt8oD5AS9E8UkHQJLmcMhRhhxbdVtYWEdX8inBdR6arTtCF4E7Seq",
  "key2": "2uo8rAm6VPs8uT3r1YBUgz6kxn37XhfmJpXd7vQ9rGaWZbGZAruTzcZ1WrAJjTubPAZ7YtWF8A2bDurrzYkMHrC5",
  "key3": "22cRpJxB4c53ge235T6nuCRwPEUKvHMtcuce3YwYz3ojBJ7E9TSqGUFz6xLnrW1GYMPPDV4icwww9fJ9P4FfhF37",
  "key4": "5nzCGozZakPEBPmyj1EckomCtDfisPxQSgecn9RtyeEdLSXqMNFoW7L9iz4yqHfqG7C3djzMpoEAwyw6HiBHBe7D",
  "key5": "24NGURuPLqarndWk5p1WAvx7p7yHLSK5m3rvSi33mUCY7fNnCmfT1zfVTD1aVhCpnwiRw9ufPYuukmBtwaKzZV1r",
  "key6": "4EGKRsFpBRJGE2MwEefZGfbskA2ewVPtPYpUmgXCvKfx9Df3pX37jbAwUKZvr23FVohSMtYupWhjHr9DUZaWRqz6",
  "key7": "2itXQXEsFwNGHQoWirjSrosJWwHyYUnYQi8xD1SQHJ1agMpUpPQGpYLfY8p8zoTePcUsEvxkkxwzLSJrtisqvEZu",
  "key8": "2TwVxSy3jywQDVMDdKRpG36yHMvx1fYxcWfPBchytxUGUbDXzPrtjM6JuXpQkXn4R2poeW34MGDa9Fk4qUoB4L6t",
  "key9": "2cXCN1bfNRKNKgZW7uTv2aSjvBxy2JgaH1J9ZG3UrR81QTHEKavjFrMzPPd5DQqzrVDSN1NgUfSfFpmFeUX29bRe",
  "key10": "9JWaTncLZ215Pn5F3dCBJiYH1oXmheYncWcc2JfWVmNsjmXYDKxcWsaKv15cN9i5VJM3oXn2WSGikMVyMNptoTR",
  "key11": "A5Y8NT7k3VYPqrJNk567rTaVJaGv9Tps1K1V8s6yZ15ZeUfypXpFagTwwGNVQzhKtmWi6rkDPANbV6U6xA1NMfg",
  "key12": "3Gdryru5UMMPUP4cYgYWExwcUs2FwiDRo3PDa1ymkwVeKCLe7EAYr3dCPE9G6B1q1kuHvipgquuLfb6RXimiUpAk",
  "key13": "4j57MQMsfe2qehkyhWjTpqZUnfyLJpiw1r4ViRCMjuKgh1zPGMAiCPj7RvzjJDuPBxgdNZ3L8PE1XqqQHAS1MGBG",
  "key14": "5QKkVAqESoBuJvovnx1hiP8wzAdYbxLhYuSXXmt9UuWqRBtqf13eBpRQx3e9JyPPTh1Y6ZqBSTuNJcdJpDHpuotw",
  "key15": "3Vd75FxzU6LFnL1tTQfcDvLtN68jb9yz2es8EPwyQe8GvtvM4FQ4K39MghCoMuQKZjFP64QtmQoA8wMGjUs87XSK",
  "key16": "NSFWWSRVopWxwNq24VpaWJ35NL2TRKiio4EiMXCw9cb1qi6AwiQaEZEewbCkxE1p3TegQvZVNv3aEbfdEooutww",
  "key17": "46cvomGJRtmTBg2YVxgMib9xNfk8rKXuKBWEeTg6STQXKrrZsGfrL28WGgvNw5bFdoTUXW7qNesJjSU1BX5abzCk",
  "key18": "aszDrjvyxkotuzeWweCKGeJxCZcDHu13ZXVpMn49V9VWQsjkcdH6bdfus9cZevTyvUHuiPS3QoUG6XF8DFVpBRK",
  "key19": "2hjYqdaaxsihUus2uhEiTcm6jB38Kgp2951mgyCGi2tjP7wPZ4nu1swHEDRjauKKUEt6sJWk78NmSitJ3mUnwgFf",
  "key20": "2eENGs1y2QQB9d3pYTyDoBYpvM99mnghVGUTHxamfHqT1D9yknFxgEVF8wZJ1SbU3JGEsekWrSy8b1JRypMfXTA1",
  "key21": "3J2yA5oUg83sQzTGk14xyf9Yn78j9speQqXmHGapXDC3dSVwwQB9oir9BiGgad1dyb82qw7bk8hRpQfkkFSqoFJg",
  "key22": "2DTEm5s426m2Gt5zDRwRmEPYjYLrj171kNAn9mey8v6QFuQVzUXmtxpw2SKsQoaUYGkPS3pZqcoUz5nG9ZQnb3m4",
  "key23": "4VnovbUKJjbodAyXkWugeSg91WyzpmDFcj3CWcVezZMijh7sRATqdjLngXw8Fu6mpXZeSM7q5seRKNXQL4zjQW7N",
  "key24": "5jp8JehTu7kLux233uAyzZUQQXoqhLnH5eLBkdBQxThMPfv4KfpQEcUao2X9LPGLqUSJTJg1aoanWc9qdyCNBcTK",
  "key25": "2UxWBJP2cWte3nYLVLkzv3EVLw9yL4EUWn49oQA2b4Dp9qbmXrNNsE6bfhR7bkBkNQcuA6n7ETQ6cBgMfyw8wJD6"
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
