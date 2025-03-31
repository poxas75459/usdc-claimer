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
    "3tzgyPzsWqdwryJTR3vGrJGVGQw37hhbDUrTHiKG7QxoprdMdAA97sVHHVayCK4VL5hYbqerkD3hVYx82NPTDRie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pvwi6SJSSugaE4ZSZYmPzUwRtBmJdsv3PJXUEjB5Vx1DpyscXNkP1tNJRJQJN1BjKTdEQPRkuCypnKQe8V6wEMa",
  "key1": "5Mi4YGpRSVzw4MuPkj5YnwwdhJ3MjS6nRzuy6BMgcoZYkRsKh9y5kTj2Pw5EYJ9xf43VrRXA3vwoK4A8xENSiJxY",
  "key2": "5aBr73BNecpgQMkJALZUNdBsMyHS6Vb2ryzMiCRwfFZnbQ5XGi9j58XcsGKVvnXrdNww75ftEE3KeuRmGP4hrAeg",
  "key3": "33XbQZyXnkNuvT8YymhzEKViCRwWh1HMWZW5hKn7k6FoAU4qja78ajuxEroZBZdUNbns68htkWFH4RHQsGrwqBNG",
  "key4": "594xg6YfvRsxqivWFDEPgUaxVuyJC57meANVRY4fj31ZYaS1jHadbqFgzfmtBkE24FRmeve2etswkcB6bzThdGoH",
  "key5": "4e6gSvfckzKCJdE7uXieoXEfU4vfzdhhsRLVWE382ncov4KaY2GprcURUAoRstKQuDxtnsSc6QHm6pfebUaGArm",
  "key6": "zebeUQrZVnTeFPXPr4Dq2QT5YbQHPPWHsfdirk6Tya5uBQBhxLgdHp352CsnqzyAyr1ePw1nNntoPAoy3Wm7gch",
  "key7": "2DLrt2MEtKKFDjE4LSBoG7goSjrH5Pd3jULspAcZkbFEzmR8SDUWXGRw2nDTsSBUN27d5ZGsL2ECJBuD6UG9jk2k",
  "key8": "31DuajbegmzW3v6edJQpivMojzAi2ehguZadypPyRYgV3XRPurKFE75xMLpEi7ucPnscYZZxjC9J9A58CVxuC1h",
  "key9": "2sZaJsnyxLHZCmkywF2A557KgzM65vJm7kJt9JZMam5rzNXzwKupR9FqV3bAV2w3snNDVnpstCZSdvVuLdVxgQYL",
  "key10": "JXZDfiFy1Nvg36oJarAKrHHn3ZeEK5nK43ZsP7mbpjtHJGw9K3bk9Zgsg6FQ78eL9ZPjq76LoqGxVrFTQDdeyV5",
  "key11": "eetipbJeard88611UP9AKiyqjHNnLbUiNC4HVWEXgNaAJXrGo9BQZNYaAKaSP8o38Y4As85aY2mUKpNzqHEvvMD",
  "key12": "aJnEakoGKjghB5mjqJD41ZxDNppFeobsT4FYopGmjcX7KBrNz1hGXhzZpqA2NZXSAqw4MVwZXf82rdcN9F34euT",
  "key13": "49FYpZMGq7HJ7byx4JU2NxJ76VAVSaifQ9cNQWHbB1B7781jLisWiTjHsBCCLesxVRgvarGnuPHqiThHXp14tzjN",
  "key14": "3D7z5bVUNz3AMEhwHn7ASXWoyXF1WEgJaakW6AVoho1yEnQawpxbUNG8QixniTxgsiGaFpuxbkfwpgZqsJatYFfL",
  "key15": "QUBzqpJvGVVwFJHHj8spEFidSck9hFFGC7gACsGW78sDzMyLvLSgoM282B4EurQZamQtKGUj83AEK7AGr9Zc4Bm",
  "key16": "5EnkJzoe9BYn2CegoXUtmiw12tpqVZ54zvsJnY4gcfMRBZftWMBrunG7spnkpZVcdEcdNxSLErmVx8wyi7UA9kdP",
  "key17": "4x6J9sQcqQZScbyFKJwPhNJAWvVu579unMacurTtgjeKfoG5RLHDjzGyqvWoczzET5Pbv3HKswhPsoNMRqyKMQZZ",
  "key18": "5nrxCbzddkxrzXSzqzkz1fXjAgd1ZognHY5nhDzSZfW3wpEdaXcmbuK5UzEkuEspH6NnPmQZnLZhRQybYqmPFgmQ",
  "key19": "2YxvKCUv8qRd8hHoECuvRr2P686tZ9m3M3XHrm4CM5QG6VQLBYE5iCdxZpVvYUXs9fvnENpB5WSfcYLBe53fZMKV",
  "key20": "4nGV81v1vUQTFFvJ7Nt9jUifZgyoDzQ9ksnqgr3HZbsU9LZnbwJYmauNMerN1X5QS5GUCgzqTF8PBhfFNu15qiFN",
  "key21": "5Zi7Wg6TnxsN2kQD3fWs7oVSNFpL4DMZTkWY3JSc5g4wNrurGP1orUBzPhbazTDq4kBwiTKSpLMTPXfz9f8p7zao",
  "key22": "21Kg1QV1BiHVonwAFtwY28ZR8XCEtEt75j5TEzakHPSzzS55EnKTYAgonFZuMvz54siq648HccpBsRv7USxDm3Y6",
  "key23": "5epQpBke6H4sVZytPbz3JMu9NEhT75FvhLSeC1ix48owjzzZvv1ftUXtykGT8Cns8DBBRnsa1sKCYLdzfEMvJYiW",
  "key24": "5hFUbBiywA61yyq1prBnMMPioYKPorGJStbg9BaahmzVmaob7Qw2D8dJczTWRbBwVStbGeq6ngsuKiy2cihfdhVZ",
  "key25": "sJ6CC6S1Po61R1aejEk7nLcku87GY1r2xuVvwLyvEAWBAyT9zDqiKk89Zc34o8wzDFyptJoyNCFK3RZ7AL3kGSH"
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
