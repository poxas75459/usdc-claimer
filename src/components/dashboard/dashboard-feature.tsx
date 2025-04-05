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
    "3YKFe7AAp82U6F1Mk4tPDr4uwVJjPnRmedciss3o2fUkGPiAN9SLPouoWbJTzN3fCkXedNRSbfF8LhBbKBbVxqrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxS896vDy3CY6hEJb6cG5tHPg2HTxMdUkH6bYMpHaGHJYG8RTD8Tr6aXFXGQkXiokwTY6dG3yWrGoyHdNrm3DAj",
  "key1": "2yb7ga6qmemh6mBZeUhr7YWycA2M5bLDivLhddkeWMyKPTJFjMbBzQm3CDgzynKxVtNsV1GcvGkRwJBZuS1xaJqQ",
  "key2": "BUjnF3wtFeHeDSw8bQWpkGxVdJCLamqACLgBqfEubDZbAUvE2cFNCowuiqSC4V7VT2rKzWWb7VgvC1WEJ2AodGD",
  "key3": "5ruPaWC2qLD1JW3631ERCyrGkvHLtWzKqubLeU43C4Z1EkLh3HhJBAmv1P2yCiDG9xos4j8PtRQpgtKdCResescT",
  "key4": "42ucKz37eXV6Tk1sBQFYZ6AJFzyW98MiN9PPswveX2wL8XiRKfg9vsthhmKiFaikPF5ZoFNtJM4NKRVPAnULCUit",
  "key5": "2wWJxkaLJCpQxmXhkDBwu7TRBxzhPz7HvEoB5tJwhGN1GFAn3PnqL2dkVAkhdrLeuEquW6UmDb19HMfd5SLB3J3L",
  "key6": "2K7ypvBi2iDtGACbqo3YbgLNVY7Hb8tNcr173SnoerNia5Cck2QKs3DBgVwj9CyUMtCWgbZMuJtNwo3Gx2USd2eC",
  "key7": "45wXp4NU6G7irbtiMMKfeWFbKxFegw524MLSGpnZrR4Q2mNBFJLuydDoh96bnCGzR1zUaJQEhEFQMafxVfFFmj2F",
  "key8": "1MCLeYkPnYWjnMxPyrgaJKh5UKiYmN8KUpEnbNSYBoSaxFwnBjcm3HRECAejxHAADvzRtyotKQZtVm54rj4GcHB",
  "key9": "3tYAUW6zhRAniXprmZSuaV8kdTTDvf93hSZ6gqzie7TXQUx3TCx5h3ddNEJdFLevS7J23asoowpvtMW6HMqRBstr",
  "key10": "3x9MvheBfrxAhYD26ZUdwinemLqFEBPuUtgu1iE9RveS7ZxB2RBdni8yZPjErdortkcAXXArivpkDWbU3jpYH8Sf",
  "key11": "qW5m3MpGHmtNY1EXWsR3ReTziafoKzZFeRAEFYkqPH6HDuS8f2EDbu4xQVGSDbCs3jBypVMfTGATh5U3MLcL6yJ",
  "key12": "5tCpUD68RaZWq3QribDCrHMgM4uzTMA7SoWJPt92aBaf8pwn8hBvtgXEcDqZ8SPkfGuVRTwXvHr1bWjTwrsJyx5Y",
  "key13": "4HNcx4sSBaJxNhhjan8XbTfNnV8mx7oYeLnkaJTWTqGEyzV9Xvr394YZHowRZesrEytxWteRJ8fUBSoh5Rf7caG2",
  "key14": "4n4TNUCZQRh9U1ESHATVCFH1ZYWi3zsSLFh9FTXTBkzUztcRtshELWe6PYMc7cXf1SyXK3kCkRH3Ee9YQTnC14fU",
  "key15": "3ndY1CLcGLJtNeA4UvBTnwQGUhG1JPRnQLYcgSP64Q5FxxjcVGdmMsF2oHbbu3zeu6ZiDU9WL76rzZ1BHLVYy7n6",
  "key16": "314Zeg95kf7jUZ5G57LMzZ4Pu5b9gtU5TNeyvykrKeJdba1nQcSi1Kc21eifaUcL5Y62FwSBiPgFL4ARyzqiQ8kr",
  "key17": "3BseG8eQt3gdRoyBwaeXpb4xTvTn8ypTSTVsrxYeiNRwcxkdGMck2FeXFSYok43iZdoQsGAUc2vBeYHnZMQYzy4f",
  "key18": "2rYdaCnr7vHMGvHB6KJoZs1H6LWg8vUtYYM94Mji9Fk5A3p5fkiCSF9f9NPM76LuiKmiA64XKBYdEQgS32eB8Yug",
  "key19": "5j6hCK9zv5cvKnb4RDR2sSrfniYjyR5LZ1yHrU5CM38pbajv1jTo3WFnyiDkYxmbHxenvMCvP6rb85yWKEFiTATX",
  "key20": "sDz6h9NwMdAUbNxrcMgNicGHxKXxJowwCiw4werhhePeFgg5PUiUWyBbxojuXMJYmprXCvCS1qg4iGy6z4nTXbX",
  "key21": "prMtiz6ygu4VZcdgG2TjpPk8CGT7UZppgKkL66S2PRPiGwRDTWQYMTzrc2XbPSygbodRQkMDjsST52KBeXJ5ucw",
  "key22": "4ycYhx8R7aTkz6Y5scCNjattMspQZiZchbcQPZANJMCBDmjrYwKd7uNGsjMj7R19Ag8y5DVus2kRRyD7AS6xKj33",
  "key23": "4oRhV5qtdHANMm2cSppQPPbDRB9BLH3Dade6Mh6Gbydzau6QPB5Dq8dwvXR4Xyc694gEE1fppFw9XzTbuCWFrZhx",
  "key24": "BTgig8xDHAhrbcpWB526phTSbDZ5TJDFMqzHC52BnYXVTGMATEvVwNafoiLFCoesY5TDuMfUmVS3j4Dj7kxKtNN",
  "key25": "AAvgyof6TKtCGigTsEL7pGLoanwti4QCbHnPuLLmr2KsoYPkvAxYiAHA6HftZLh9xvWRDR1z1Rj41VPbZkHEh6A",
  "key26": "Vo7We8Q8FiW4GvnTeWKjdnQZM1S9zuF9p66t4XSN6GrVkB52a2npUtH6S6jA7AP8woRaHdvzu3TyF2SmTFYNTN6",
  "key27": "2cghJsN6B7Zi3aKFcRXu7DYULbtoek3HQPtEvNSPxyvKYEXZznpBfLtHiPrWz7CJQquK7PUQLoUeDoY4sLqGxkpT",
  "key28": "5xdpW9BZTJPQVEuNsXpVSj79w9ZwMgWyTQUexBL2Zt4YGPMnAixMDuGdHw8MArENASNCS1FQ1pKcYsBfdu41gRa",
  "key29": "UQqX3ctakcmBHs4ipqi8rVjAgq75Rspm5mBJfHWTnSyRZ1qHRpax6D71bGRkFAPtyrAhNX3cUyVVR36yj5N6Kkh",
  "key30": "4BszZpaRMDQmTNWoFY72YnPXTG7C53kuYfFiRxcSwC8xaNR85a5vxSfXqEt5XsaMQszgpJPVhQftaQmtsgYFyT6e",
  "key31": "Yp2dJN1wyyud2k3LjhvKxg3nxv3wS3erCMjZ4gTeEw5aEqq1Z6aLxBtERCPbCkQ4cg97ukhMZ9FMgWN3yvt2MS8",
  "key32": "2HPaUAw26fuuVpxUMnRzQf9TPWDsskh4fMAnHjTixceQKB3Cb27B5L4L1DD1i3NNJHhqQ9JMFa2URuCXXZtjn9n6",
  "key33": "3Yjd3Uq9sJBXnxNk54NSgKs51X2U6aacs4gyxj6ou1KZePkfVReiR7NAxANNS3km9sk3FWDrddy6fPVXE99YMxq8",
  "key34": "33ByK9oVSH6aDTDaozGcXQb3kzSDmoLKUftuBS5XAge4wymvWZqmABQHZGgvZc17QLLJMdc6qLPMpVbynuwbjbZn",
  "key35": "3QiDq1sFP67AvkPenk6M2s4racKmMxZBSYWUsLMrrCNsQzLnBRHPMEcXSA12nihSs6SVhsC4mbJDdn7Z3NYMTyAu",
  "key36": "3AMxzWyr2T6M7c9cABrTuVEazry14emvsJUczFNYZDRRxg5p7tSBMXz2Fz2KNcM9juS3T86DaQk5bRSHpcTEgwNf"
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
