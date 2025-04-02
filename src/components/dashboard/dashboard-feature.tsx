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
    "62vDYPV8Ajw3wwZ1zfi3H3k1QQTRPbmneAp5rStHNuJ7q3vinkHujMKnbaeQjbJ3kDZLnJ5UN2RXD5y6E8nASrGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CQ2QRWc57CutZgkhd45Zhi2xxJA8mAnRq1N1aDSCU155mTLDXrqWCtG49X1PnaonPJJnNsdji3LkkH94ddRwB2e",
  "key1": "3zUJuyqVu1j4JJiSrfjydsMua4MR68DF7C3o77myhwtwsCt4U9qKMP8gE7WD1DFeTfwRz2pavwDZMTxyYvn68ws6",
  "key2": "Lbd7exPFhZ9RwgbdSVDTcuanPD52R9tSWSEcH2hsM5m4pSG3xRTqPcDi9vphEiQbU2aE6GnDhj73v8Bg2hp7g41",
  "key3": "4zHyeJBVaUR1f2ytNJkk9vyeRdr8G3i9g1HQx43o5gR2VXyzPGaqyckZPV4BcZSQ5pCwNnRgq9bi5WDPcBVe6tpg",
  "key4": "m7odBrnnMBkRTyTWZKWhLuPSQ1Kmavay8Z2SXHXtNF7dZfGnMWbsnmhDPkF9PUfanudioDMLrHZChMmMkg5LWch",
  "key5": "4ni4aouCFqkhp1tdiC6Je7gnDsvrv8jcPQVe99TuqN6G6dcxQEUhbDW2D9wXvZNZW7ghtNRtYeJaXGyfD27sT7UE",
  "key6": "4EmyXaHKGjRRYNxahiTKVLJ6PDU5QDVvc7jYqbrxTafY2RD4rMJD2NbF7N7aMNWS3iu3wddG5RKtU5uN1Fj2s9JQ",
  "key7": "44fUY1AC8xwJnqiq9Y8iY31QoCNogkvrxGXbW911tYmRoWCo2uii2iy34EBag4gMP9QstKaVzb5agBvFG3tCqdVe",
  "key8": "4QEJQfQLhR4TJv4dDxdJQKfRKcx2nmoRCf9Y21qXpK9hdpRW4L6RzY1QvmTZtnz8s2p6FftyKEXP3AbzuCpb2ajs",
  "key9": "37x545uQUiktAu5P6BwLJyRQR5ST9t1SCSTMWtze7tDgdzeW78iUzJKuuDnHGsbvEuR3cmfzqdqvdZL457DqkCoS",
  "key10": "d4RFj7wHHLT9aQDeHKeVN91oZMj2zy8CdRCNbtFhZ9F3eqrytbRerXxvHtNQh28wpSpAzTy5K67aatv8GLJ9eSj",
  "key11": "2J5YGqSoMDf2DwEGV9qnGVi8S8HVnc9ojsxS9qAMBhABfaAvCab1wfLrsBPW8vxCqyVfpo8BoNPcf7pM513vzfFA",
  "key12": "4L79mS2ceNTZUkW2PyQf1Ssp1UDMWwVuoCEkXfmWcdasTmLKhZXdueAHSe2xpu7tQm17BLkqBWvFpmiMgafghrfk",
  "key13": "2FEEaVUavRzQufh9UtF6YK7xb5EyW98yZkFCBDV416ay523gDqPCF7yT79VWnrdbgJHjky32GYoyPweqFgMSihtP",
  "key14": "5pyrrtZr2mW5C3GeKnf5iGwKj72DYgUQKdGM7j5179ekh84LmTxfdEmE42QPX7wrLueHzVAzNLqELiWkFayx2AAg",
  "key15": "4FZP8THdddV7aYh7MiD6iWTfW9U56RcPNmWDcQEKvFwAUkvtNJLdNHa6yCdWwM3zdZuQ2zL6Ydn54PjNuqP6NGoh",
  "key16": "3iRWVq8p1Fnww7cJBTWakxnyjFA4nG3HhMnSkCRfwWpQDbR1pQ9RSQmEedhX3jSv2VjagoMJtgRpUL9u36xTf2cG",
  "key17": "cjLjALEcpKJy5yiGo3XnWXR1XZHEwvwmYP94h7yKBh5RAPSP5qxoSiiGmiwe1SfubDQDkHqAmjNjJvfqSKggn9r",
  "key18": "5cqtfrjwdrfABRXUS6zGvnpeXodKs443L5yQKZq5zZeWnC1huydq1v4cNEwh3vCjGUwitqQPyDbMqyAwrV8EHUb1",
  "key19": "5aoMbcd1FXPFB9Ca8sva59TuzihoyV7hALWbHtfUdkNj7JYhYLuGr3CP3WKGhAUoforta5WcosEaReTT5nhLq1Bf",
  "key20": "593cVRVvfXw9svvNZvy9Ua8CXndByrgZbJETHFUn6vDJikw79GnzA3cdbX1prGB2rPAjaMVrQpKwW2mUBf6jvUob",
  "key21": "2oZyAukvCkr2sM3ikEtAkgNr2TpBUNecrfyMD3px9ZDwSKWcA9CoRZtEZKSmxw5636L6cyzHCCkDtuVrGGmVbMAK",
  "key22": "D8UM2C6LtNnJBCUERjBGrtkPTUXGafZgDfFdHXCSirK91zEcvUqE8UzPtKSzZJwThz4BfTUdUdW7GooiPXDEA1s",
  "key23": "4BmHwXzLTeCvPTfYxA2K9kJF12FxHKD1qo4rJG3EFt2XH9Ds7oTT6RkbNSsaydX9yzYYNTv1F8B4pVUsuxgMNXt3",
  "key24": "DLfCCKVzMhy2YazH8EK9ub6yKA5s5fRXRYdc9VeGr5NkBVNSLvVRJcTdQNTBxfzPKz2Nj7FrFm6KtSTPrRqV3SG",
  "key25": "3MykDw3ahRkejkk2ZgPRWgJSSYfCiXxJYwn8nMBWi7T6fBEfd9VargJVYXT6SFFw8xnDtPJ8BT2SevLZShf113K8",
  "key26": "AdETJoF11saSMsQZBd5qtatK12Z1EzdDJKgjLhsTnUbSmS1DANqAQ5qXRMF2jK9g4GnQ5bj1WmnVD8cbvJ9GJL6",
  "key27": "5mCKUz1XC6RuEwj4KifPsvN3v4qFcjbBfR7joJXT5E9ufyWCwfNJr2ZNz8DdJNz6VxU8B6WmoS3QEHWErxxREx1F",
  "key28": "4SHY8iHsqYKpXenY7h55TeqNJUCZvzTesv6Cx87BG4uxp9qo6ANBKyo4J3masoHUvpaW5VcGh3uGyCZPrELsW2kW",
  "key29": "4mdBZhMR6x2pPpGaBCMNwML7fsbu48ow9V1rap73ei1LvyEkmZaHy4KmqnWdRHBWHGZUwoH3heqeAM8vQDTe398D",
  "key30": "2E1wDN66cQzxtntGuVUjVnuC3XCiLzUgNAHJbCdo71bL2wmKRUMnCN7LnqkdXVpw77vzTuxtEk815sdDkuFahW6C",
  "key31": "3r9Z1orGbeEUB1pP4vJAUeCK5nVg1VQQRYQLjJvwxazCJrMU8CZYgdyJcMdhr7ETRepuSpmbBQJxptLHxjZA5dtE"
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
