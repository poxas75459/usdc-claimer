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
    "5atoFLqNJ72LfZxZCtDeqh6Tok5MuQ5ESH9XurVLxjF18rsjap2cAP4p6Q1aa4hTwecaU9C6KvGHQjWVVF7JxH1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fs7Y1Cih7w3mEjar7WP4p2e7CbHeyM2e7sfMDdAUywJ8i3VUsKwKdcV4tFuK9GuLtUqKmQzPVdBeS1t37M18ES",
  "key1": "4xpy3sECkobmQFYbQsmPLc5oXqfFynB825nRoEeDfA636Q2AK15JqPtVztSqZ4GmXAaLZPjbsDgseDFSpEPoRwdC",
  "key2": "44poFAgjTN2xpvp6qmRMDhMXLYXPgcg32RRC83PMbhTrnLe1ugfRrqYX1iq7p8pE9XftfibpVZBJYq2zxSm5Q5YY",
  "key3": "zsn4HVt3JRcYAdY7FYT1CuUEoSfzwXgPP3oVrFpSNtGMrC5ZiJA3EUJnop7XxqAFXw8jqDiaEk6NUVD1tJMekLq",
  "key4": "Wchn5nVgVEn7reif9aQcfyJhwaUachqSQtLUJsy8zgxVAa9ptDrbPPDx1WyJS1WexRBMb6Tptcrv13kr1mi1i11",
  "key5": "4kkiKf5z1q3msxAGHi1PsNaPUMt6WQCiu3i2H6qkc9HrTg9gtkrdtBmpNgDmfrcPxGdCwG7JaroUrwisgyTztaxU",
  "key6": "tFBRuiBpNuFoQov4ppogsh2tzuSCxyzRbhhDVGZZeYLQDAkcfFcGc6PjXUMTHMz1LRG6PpXGGEjhEgHhrtEWBNB",
  "key7": "3RKYeB7y3pUouRGMRciVEg13Lbdj2RhAMgrjsBG3Pe4GyxndRJagQQ3Z7i66aGokuCMGmkiD4nnpa3VgvXoyj8oL",
  "key8": "2vNBXJ19u3L7AW2dzZKhuLL8Mm56S5NKQKUGEb2Frcbmrh4fkhM57etFYAjMW84rFNtwi2xJRwCVVZz8KhTQMySM",
  "key9": "45HVGqdG1bYFMhmYhTieKpjCxQhhz5Yrz6VVBhTic32NgENho2LpsmvRpL56cUGiQ9xiSZah8K4sD4VGfxEdMvuM",
  "key10": "3E7VXhG1KnE6E93Y9a9mn227rw4Ek9uvMEQveXq1YNm2pJqVT2L6wAAJvC7PFMbMFGBL87XWMoqegQva7KumPrZk",
  "key11": "4KteEZvNTrHridRXyAsQ8ugAnAEA2Lj5BAqxeWKogYyhGk1kdV2frgPfCuTr8GfmzjbL9iwz2PV7LE84sucSQjmy",
  "key12": "3n9n1yYHEpbHNbhzgGPzb1VVLKaLqD4DK1rADsYMN7nvU7C5KTgbyHV9sVXCiqACmJXREfbjxy787KcfTAVdfQsy",
  "key13": "5BB2WBXDbbCLAoBTvRgbbzymrbZBMYtLD5XzwWKEdnFBBCX3Rk5o7zsGQuMjcbLq3tQtLwQXJAk4S2yiLXu2UPH1",
  "key14": "UArJHU3LCmb6pXhFCwmHQJPQER6LabD7cp5ZztBx2H8VRX6YohAvK5o4KW6mihn4cMWgfZrqZjpBrSWifYL5kuT",
  "key15": "5Kik5YrBZPZFavPR94htWNWc2fqhNXT4zaqZuffCNSk288bpaP5NLNcf7PRUTFXTdpWCLtFdsyPP2zddWupePMYu",
  "key16": "2pPr9WNarJp2vNZp5c7bAsZeNj1QGYVhCZpYyvEqAf9ZKCgnhJP8XdojMvQkhtoZKFyTW3CjaTu7NCR4paZwo9zf",
  "key17": "24Hk4843owiGVjYMn7iH9bcz2QsT9iPA1bRuxTpV9au2sZAAFZJaoJ2e67jfRPqqx8kYm5b6EQWhWkq5MLLJGipX",
  "key18": "25SwepfHzonehzdKvSxyPabrEcALUmUm2VrY6dgu1ud6vGtesE5b1PYk2kKWCKXwKbXEsN3H5pWPMgEWXeCf4Erx",
  "key19": "38BTrRfGYDbuxt98uKBcgEnTpMGPJrNa9P8KjHBdLW1aKFr3ARgqCK5LcQoqoYL2b6E2w5odrajttGmAoVMFci8z",
  "key20": "u2txXFVuNQc5drdajX5fwNDyEiDaFR4kNiwXVZeUJu2onnbeEu3167uFnSD6fCB3388DsjPripxaBpVsnFPtDDq",
  "key21": "2RTiD2DdbGikGmbbscSG9bbc414r69cxVEN1Cvrqc4u9BpwFbSukFzZ67c8qFJMJN9WBYgu7XmNyHJeYMg5mc6ww",
  "key22": "3aGrutbEgWbAe2ru1HxzLjG2e6bQJWASVkwgqguf947XkDyWL4XHun5AVjhzLLusECCUGPrtsRQ6daqi21xXz8i9",
  "key23": "4GJV3e6hbX9mSamXJ9pHGRiTGzyq6oCzbZXP5P1zSuukcj4uit3Ee3NnQjo1G4XRYZnqcQfwCbeU5GUdnJP8MKmJ",
  "key24": "44GWXD4Kdvr4KJPQeZP4AcG74RaPP7St4DQKvRTGxSzw9VbBMeTi5nL3baZXwDbocE5VZfcyYg8ePNhjTGmrwEUi",
  "key25": "24SiiCecrhHuZ4ocm6WfUDJesCyzQmUQh1kuwYdwAfFZ1ELcdakdHME4wGUwxFSWEjQ3QtC4FNB4UvXE1YWZTTZF"
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
