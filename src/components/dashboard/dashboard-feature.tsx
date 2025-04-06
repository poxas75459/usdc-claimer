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
    "5cqZrAbyzsi5bhy7s6hu6FCcoZ3NG4eccBDNf1xDxL3FexLczzANjNRH6nXJuY19cPoiiissaTc62GMGnSrUkXnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUiewYm9BTnaxtMugytUegGyFpFMNrhaXtqpK3wAUKmKNcimRnUEcDrpGXDDMwQrtezn1BCqebqCzXacPEm1jkZ",
  "key1": "5hsXtQebUCrCK4fCo4u3jgTz2qbDUpuNroiaL36Tt3uLDSvcxBmQW8LejtYsXHbYTbtaX2pakmRnDd4NVaQtRbDQ",
  "key2": "3CK6KreFMk3xwWCCGwrSQUmACzvDSZ7brfd75uYwxhW96Y62MRryCaRFFv1dJVtEojqH6jqLtqcTSipkk38ivc5w",
  "key3": "2qXCuacj2tcHyWQaoAbsnvaxWpsBdApoG6UF6M2RXHqVquttWbtEsUAqhyWbEF2yb2csux6ipc165Zm5im5tKdwd",
  "key4": "3A953F4S9YYkzjbcgQL8qan2ofMjd2x9yXVaQn1Xq9tsvMye3z8PqcjwdRHLPQKQKjzm2gJRarCwXjCSq9NGxcSk",
  "key5": "34Mo4g6aMvonpK7Xo7pabsbEZX2cjcRF94BZjjtfXLtLSdEY2WMe4MxQgtqMHho9rPy8KLhn35mCjJGVmvCU4aQU",
  "key6": "2JzhyRzCrF5ektPuNmZ7cmzfUAcAS95np2wGdAc9si38TgaqukmKGSRWYsc3AgBVxCm7FkePuL6hthktgs658ued",
  "key7": "3aFYdzHPyEvUxMKVumr1NdCKStXkzCzdJgCXb7W3HpusRNKMxGQQAhZuNifqPfCGDc4TMAVxk24J3Ew71GcmvufD",
  "key8": "2uN6t2zHieQXPfm8UVvBCk6ac3LqLVCFckK7oQ5jodRpYX54zbQgVWC6RFUyTAQhMLdUECDf3CSVvHtZsDCuH1F7",
  "key9": "5TxJnYDeX9k8UGjqe7zGcJTLq5ZfBFaaG5XeYrxLxYbzrjs63xuxLtnd3dUBjYskbRecwgTR8iFGnpDtNhQv3HyS",
  "key10": "39he4aiS88NK5Sox53sPxKDaFP431RBQQQZpMkLzxmYrrQuvcv1MQEQbZmuW9Ao9tnBGG1o62Bd58pjKC2gY78RW",
  "key11": "YiNk91TET9vZjj414cBH3Pa2aUhSuXD8g11x2b29XZD6fPhXEpBpzV5ah6ihtAtwPhEs2XxC7p2itfQNSTh4ESA",
  "key12": "5Vfm2tAMWVVkUV5wT6KbntbfPiXkXAvGAwxtecAHruPUzDQYjDchUg63BCPKwAAUkgZ1ZgupFqbZCcF6UE5rHAAu",
  "key13": "2Uf7VKMw6PKtGRtqN6AM3ryeTBmMAhjDmvjXpA72pVhAWrddUrYtLsBWE8ooWBLKK91tnQRyAouDSBYxAH1XLpxC",
  "key14": "3EENamC1MdnQHdyL9jBfNUbykAQ13sEbPBCW477Zq4Z7L1VwpFnD45QifiXdPrkvudvsyW7kygWbaJqfkpd5KSJH",
  "key15": "2zN8YvSRjYAskUVqUnhhCMF1oHPiVncBLfVaaV2xzoEpyU5HTeY3FNS4YpifnmEXjYuc7qhfzPxeNVXCU5xngTmp",
  "key16": "U6NZiMwhv4SKxNTyFrqVVbbi3ZERmEBxSFNHdWzUyBV2ep6923qdg25K2RsHRaRNE89yA48LBRmUw9qmu4gmfgn",
  "key17": "u5SizVoKpFUCDghP66Sj4QGysMgLvrLtnzpqqJPU5qUnsvPXB4aKjMWeRmaSoSJMdeSd8xqr7WVWNSMapoEtz4N",
  "key18": "4qPi4kso3zD3cvVaTPZEjSBjnVqNBGehxs5uWy4SSBHYgLkpFV5jEJMjtVLYoxrK4uNM4FUa3XTMfv2mSJj37E29",
  "key19": "4Fa3hxRJCfFtFZYeZDgihZNH5s95o2KiLjVZfYKcgDgAnfcFhXUFHEGVPv92NLdmCA3RijFRVnahK5WMDh5uSXqQ",
  "key20": "4ZLGS19XRgwdkB62x65hURZsfstkKnGPTzz3iHJ6goMUchvMUf5g5xV3P8VuxQ12ADApGg3KrrfwQDg28g6gxUfC",
  "key21": "v8YXzWLiV863aHKn3Vho9BfnSRtGGgrF9pWvaLGm7G4XNkZCYXFbNYCJZViD5JK7R69R66S4Akh3EGT2AxxZJt7",
  "key22": "3Bc5P7FRniv55wbejkmt3WkaKW31WmFC9GR73d6iNB9xtAJHre6JhR6b9ntXGU2PMKqTTSNfwgMVfYUeBZNjZTuN",
  "key23": "4gjSE1NQpZLUNhRZXEWxH6aDnY3RtT4ZJpRXzWSmaAjZieZwHyMWenH9a968RxsnoUaoBiazjVYocCzDUFyaYjQX",
  "key24": "3w4ZtfgLgTfzUrxT7A6AgAL1s8pG7xRmiXM1fRYFgACLQfi42NDekDnkweVVKEaNBSW3HXkhk16JzcFRn9yZ8eN8",
  "key25": "2gLbMkUf4hu9yhK9cVuorrJb8WRbVzJAqwLTPQrAwgzHLGvddNvtAiFusW1Q1yK6VQ5nTGs568S4Lf9rdLvq6qUS"
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
