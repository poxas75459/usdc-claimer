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
    "5HsiYWnpjAhk4VGJoQJXWGr8w6UqPPJH2LLCqtygZfj4rgWQcix7YKcZxh4XStBNP8RirED9Hts8tJU12xDBC8Rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBPkCZ1GXs9hpMtXoxcmKUJsNH3ukc7LYq6S7EQdUfdjkd8rZd34sV3JaXB8aEEHevTpZS1z4RV9PwTv5WvugSA",
  "key1": "5o87MQ4NRWYBaL5uRySaPtffaNuthWQuXyFtsfcXGk2phVh6ewBnHRG2rMiW43Nm5rHwyxdcF7TchpQ5QzHcYuS7",
  "key2": "4nTdYY4r9KYbmrLwEcLuyqMEZufpfqjUrn8K9tiy6geYRGYsfVgPqS8XNDwMUbzT4YYNVa26zVYAER5PbBTcnWTe",
  "key3": "Wq3J84AC5BtKUgtzsFGFGzLVusLE1271bSnU5J8Q4fDMUiyTb9nD7ryHnTv1SvtNQJqNbbYzkwPEfEpapsNaq4J",
  "key4": "2u8dHAexgFGGvZ4GhkX5acPeVocg6HDUKEXdRWTe8M9mQbv2mUxSmZ8AukvyXUDpbEt9eAgPwspnTyzwThZqQgjM",
  "key5": "5Ei6haDBCmJcBdEPkY8WVURSDsKDQzpFr4xRnGXc5QaoHSpCCoVz5D2NLm7rjzCdf8JoWQXH3cQvtopbdwfSXVUo",
  "key6": "XSydVPkkcb43tY96egnDwQ6v4kvZk34JQSWk8hdqtNtSQzRMD7BTfAJASeZ2xziaJVTrKH7n8KfN66weq5wRrjo",
  "key7": "M6hRi1LEQd3Wpeu4TQvS4VtjDijBzUQwdNKBAMkCSww8NMKBoXVpL8Kf7NceE8meFR4bpTtLv2jpVt9wqx3RhdX",
  "key8": "5qoF8Yd2eAW7rAtjYyWmwrE9z1oRoFBF8WwXE8ADiC134UpY8pdPJ5LVmJ11vJWxKbUbVDbPzEQg4gdEAbuJq1nx",
  "key9": "4QaUfPfYrHfhgFvkz1hPcQsaJVQnmctqJ1GZsRK7hXdG9AXnCqh2hPz3jHSWnt3RBx4vhrWHyWnxVdmwY56xj1yU",
  "key10": "3K5JroJ91Huxt5kHeQE8m9zja1RqBrvxYmikNnssR7VPCrCVW2XbcWASFFuGybTcijksiP4tMGWAAUs7RGXEanc3",
  "key11": "22S2in5dgwk4djPCbQALciZ28jzk4rXnzKaKcsYs2r7VsdjmLRqGE1ugeZffqrwMBbrsFrk4rtDYci9BHCgSDg9y",
  "key12": "5Ns5BpQ9paYpxiExK7yh4kp6jEuaWQ81GTAUzBixHDdoNaZ7ZjrvmB16pHPoixjQcZVXRdGXMxNt4WYhsNrTt5BT",
  "key13": "4Qw1BMK4c3n7zKcpbZJ5LTrnUdUp22WFieXJqoap5vhgcCX1Fv3oaPoMCo59CtVM2KyRozXEQeV5UrCx7dxk9hud",
  "key14": "5ns4VFxMnt4AK85kFHDWhhABwf7bsGLLw9h1UU7pZY91dmA1rDtNx4kbTNogubGBRnWfw84Bb67uZ1jffDDGxbjS",
  "key15": "4hnr5HvDb5nA36fL5yRSPXiutaxGEkuKteC6uucXBk8BQkQYHrSXjkXvdn82dP74U5z7bpHeWa6XqSbaVgbqKAWk",
  "key16": "3Yq9JnwutyLe2yqydWkhbxoUhFm843pjgkh5rHNJufEFUxJxwahyijyvyE221ftLuG2ECExi3JPNiyfhtEWxWge3",
  "key17": "G9ArCqfuRABpZqhmwcTsBWLR9AbAXAXWZKLjd5wLMjmtcWGRdfuTiaT6tJQ8pLa4PRZmW88zrfn2M9AF7GwoFQf",
  "key18": "4nyfEpmNv54z3F8WV38bN9oGY8HpfKj5mKpt3LfbizNKfodTFjHshp7rarmP5i7BxsBFEai73n9bcfYXmgxJqv2u",
  "key19": "tphZmSFGzNTNfzS4W196rEp9SdZd9NGPCfkB6Mfw6kXCSHThs4oHMpcEWbLVvKinha9PS6eQSpJxHGxNUej6Wbs",
  "key20": "5mPMyohJJQ1jAPbvZHsq3jAoH7Jv586tTDKCBDfVd5KAX3bQWhPHy6XLE9MvqoZ3PxDDKoc4qixjJBBEWQ3TYcJf",
  "key21": "hETRRgccYMsQx2YoBM6tFfzjFWmN3ucg6KP6Ahue1FcsnMcoLr8zcez4gWvVmg1kmnPFWLc4ijwpHhNuFXK7XyW",
  "key22": "3jYPhNvLfM11zwD4mG4F1NWM1qM3fyxRHbjPGBvAs2ctTrr7oM1CKejDzT8EKKxu6mEAhHAoHEZVJi7xAZUz6Bsr",
  "key23": "3rA4L5AYnwtHt2euh94FGQ5Apa3FzB1enCKZTrJSxmHzJGGUmZqjgBU99Ahu9gsMw2UYWHwf769wKCdXBr7RBxbn",
  "key24": "3bKBGJapN4ZrUtFxXSkvsD7ABH8cdNF1agmKaNN6H4LbCCBa2hWLQ6THygyiVHWY5gNAojodHzfLy1GV921AGLjY",
  "key25": "3xmNNMxCWvD3dxkmS5kSAzFktHN2FAusDebv2KfcYsWfZ7wwN42RcZHAUtzR87ryqKxz8RbbFqs56u8EEoymQZQW",
  "key26": "eK4U4iFTxRUiUJ5LJHuJAmzzxYSYamoZ86r5gxC6j4yhcgpZLA3aYjSmMuEpU1J88T5dm45phtw5iNQxczQ2W26",
  "key27": "2TEU6d9mLpzZd2k5YhwMdymfEa3BCsjcr6UAH65GM9u53ZZdLDbYHQRSW31VQo7wGcbpXkvNGkmjXZGUYvVY5FGJ",
  "key28": "2G4zoB5FRKuM51455T2Nt8a5Xf7r1pvZ5A2QvE8uLE5mi4gAEEx7o9iWby3hVeqw33Cc8rybWkSwL744894C8reh",
  "key29": "48Cq127vme893wTV5N6CobPs37YUuVfeFewf8MBt99ZFxpYNgk3kguwf7d5HZZbJFPz5hrhXc4bfUaYi4rvvdado",
  "key30": "443QDdrbDFhrPRCL4WVgowfR1zv9KdzQKNVp64dF9fgvKidywMRQd3JmQtRZf9fSRo3hSuEsbaAL2GaPRwvHyecR",
  "key31": "3cFuyjb1FpLXY1nydr16uQVET8yv77Yg8MoUKTiaA2EuJ2m3sPR4hfCiLmRoEpyNGsZFW9rsNuLMW9NicgVmMSa2",
  "key32": "4dfAUpUrQrq1Q8tbyBmV4wKGrbUkvq1gZ3QiEqcECpnycoE7GZe72k4aJe3FbHnPDcA35HVBwd4UXaFoUyoUCxpS",
  "key33": "2YnZmN5ckp6rw4oPDFqDbfzY8kxBvKiDuSDCw2KgEvCYzVaV3uXbpJULSPW7iAcAmsTE4Gf1aVq3a2LR7TQYpbv3",
  "key34": "3U2c5oZVQxUmpLN4R6fdBu6RoMuRdUgfYjhybTkaqRnXBHHTtBnG9ur6RyJyWt2dPEPiz4msea7nZV4LG2iCe5p8",
  "key35": "3DYXxMGnFpUDhnkHHT4m42TfJH3U39BU4UK7cZXckb3sLJRXLCfWDXkSvW9z813Eanb1PUW2RtbjJzPBRgFTaHXj"
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
