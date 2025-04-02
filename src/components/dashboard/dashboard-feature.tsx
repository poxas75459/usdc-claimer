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
    "4ijSYPmhar1TFcvRRoYvJ6d5EReK35QfAizhBtiyAYuXRAvHE8Nz7N41cPsJPF5XJgYdH5i8NMimV7cFvtfDt1tP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DEtYsMok34TuNiR7HoJdMgv5JQjk19ekUp7PUiXRzcqaJxnFB5Gd8pq9MQuHJ35deMgsVmuZdANCp9qxSScK357",
  "key1": "3ULTN4dTQmKBzDUTppJbjr7Mk5JrBqvXVmaK5STuf7ao3LyT36Ud27Vi9Hy7xZkuvsXysQHxGXS4H5DHeoMHXi9",
  "key2": "4NwPQhczXD7reCuSbtTzmVKvHCFHmQubgGHtXyCGKeo3MH7PUHbrM7sLtNKYgp7PPzKA6SNULt4nTpa7H91hXZcr",
  "key3": "e97MztcLq2v2SV2mGKDk23U2YMh8Cweya1LXN8dgp71tsQTY8PBPiEzYBFssuz27zUQYAcdTJYt6aKmSdPfSg67",
  "key4": "PH3PmPgeeM1PE4PErPuKauFGaVN4QtdsBnCAympcTRq9tuV1VsE8w5bCataVd7frMsFoFweHZYPXqgr62dSBznf",
  "key5": "45xcFB7PTUG1Cnt4Tsjn89H3NiJnxNxHcikX5GxLBk7dK5bT89F9EDZRN93ZgE7YFJvwWqaNGAgak47Gbm3oRm1y",
  "key6": "5PhvjGGs9BgxQoTyBa3Rmcd19oBs4DF9yhqXm1FdNGAUNrZSkZeXHziMFMT82AnZMR6GbPebZnDCeTAHXz6RS2MF",
  "key7": "5FpK3WAB9myhCzGHL1TTXvqR4DyvfLDd11GXcpVEz9WvVmweTba5vzzus4h2EG6TTJwXYMeiMGU7EcRm52E6aGyJ",
  "key8": "2rkvkdUVUdxspeq9jRZGV7DMRX4zvBAcYunKXPcsP24Lx911yx2PAYpKLN7jWmnJVAiXN2mRCYCWKzwmJbNpHAwb",
  "key9": "49fAQymVwcvQrTszudgv4L1P8r7P2vi1DqKk6bikVTvWcE8ft6xQKnoeQMyqTPSf84NhWjSWyYtZrJ9Cu98n1HGM",
  "key10": "3M6piQrFpWs5c7a6PSyedMwzL7wsJ6M7XY5satuSkA73pWP9guyLLffpXB4FyzUEGW6ktrntT2XDj6TzV1RyjSJr",
  "key11": "66GKiNDSsZsJA9cxVerWxarcBsj3ktZjLrfWwwySoCgzJyhwRJN6prgNLVQ7Sf7rLX5YfiXsZQxJv3KQiiynjtVR",
  "key12": "3c6sQ3f5gQzfV3PDL6GQ8BuoDpRY1Tsqp845fDWwfrvbbGwHq1enipBPv3aTjXqorEp4tJdSk9SVR5vn564D4KWk",
  "key13": "3zF1rieEHW5BC9B2osb4EPoocnQcfmEHcRtpw8sLFuqUF6QUHig4DmLsw5pfAGeDdd1dEwRsFfscrPkMqpULJQYa",
  "key14": "3fSmt6aE5gxAbDMj4BTDCzyDSWzjLZ64BTahArespLP2jM3v5myokEWyqB4GzwvDufZAuSg141LFKGAQMsJuVnPv",
  "key15": "iCxoCoLm9Y1j2rDeMWh5gzUG4aqN4jdR9vWDMbzyMunSJRd2scXgDhiGhRd11Eu7LPaoupcnPSUBKRrr3eqi2Q3",
  "key16": "2NH7f6eudogCza7F2p8oemDr6RUcq4d2TY4TVBDkDsUTM73kznbooDJUzbAqKn5QtgXXyBwuCRB7BXrQoWGg3a8X",
  "key17": "5HCNThqxeTpqo6BcqhEYBicTyCjUEQRGucpCQabYco49VxPzxafSA88bu1V9sh5HSXkUjyy43WiSSn5w5HoamwVy",
  "key18": "9tnUu89mhy6FuhW3mNp3L8ZtXEiHdKWMHbYGiQ1zWTgKi7HnjjmWh14FfgSW14fj8J3mbBZd9iGEPBMCssBn35v",
  "key19": "weYh9MT5JMe8Ht5f8KXqLJXh3Qe4E7xsy9uRxoZ6AmQwPXfR8zSF2Fwd2Td7YFvZVbsJ8ApxtmX36FVEHbPxAou",
  "key20": "cugcKRZbwZhoNEGrddgphxLDAtdPmGwMf3LpSsqFds1T1YWULGfCZxZrhNfauUdAfU1WyBbfvxppcNGahD2CDo7",
  "key21": "4GsiPA99exTV8msSbvGMFQ5nvV4eSim5wHEvuhzoigbnYndsC4CXseWfmZP4YNTHa3jv6Q5UpxeKBj81fwrdx8gt",
  "key22": "3jwmNTZgiJ8thkA92wXKCvtVnb9mbd5gjNoAcDvgyo6p3r22Joddkq4xHqwf5MNBK6C9w8Yt23fFsJWpNAVrPurV",
  "key23": "2GmiujSLSVwM6D8qj1tiNRsNH78RG6VMVEyR739TNR1Pd7mEhPeCBj31C1Set8pY75Pb7cZV6A8CA9pDLADunT8B",
  "key24": "67h7RUumiLigvMnja3gn3tcbrgsVKfR6D1R5NBTqLPVtr1dFBVtLJggvZ9926D2N8ak72AbfYpZyjfwZYvaTgHCf",
  "key25": "2HfsEtCBKQqGhaiJw73BJdE8kAugj8Tr5kRAhHugT3MCzEPnY2fRoGJ4V2m9pgNmJVzGNrryFrCssuFWrcBETPv5",
  "key26": "42y34GM4J9taS6doe75jKvTd3zzE6gBiUaALmBpFg7wMCuMBHGxXT6NVrDkoBXWf84xBPeD14WV2zHWayUsoqeov",
  "key27": "2EjYopvLiYCJyNAeDfsoVqvLYZTpCGRdEJMRFYzKVFJ16q9DTvzXJKNVmwi6ioqCeL7LerHWweyomVjYp7mQzhm9",
  "key28": "5pTUmw3p6VWvDDGEV4Qdo8Yj3Q5VoRyGTp2HGqAKgY41W8ED2ZVRV91QMbhCMjrY7zMqod64DSpJnpYPb44YwKfC"
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
