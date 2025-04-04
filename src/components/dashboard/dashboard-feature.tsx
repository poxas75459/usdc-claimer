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
    "4xiigLmMEthvcsysQW5L3Vv4qd8C3VC1jPdW4K2U9zEU2S5MPSVaZshJnKu9xTJvUsMdN1mKWy5fJuPeQPiycodY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kZcAStUT3Uq6cLWtrRKPTm5gCzxKF8GVSHpUVQD4RTFf4qaipiyCykjDxwExiGnnsuQFVDJq2PNrhLETVBWk9BZ",
  "key1": "UyzDHR1vWCZJf2WpbmvWZv8gGRZGAsxNiTVvmeJDWXYpyvNmzbLWm9jegEDgKbapABiY7ZqhUxicsV6YcTUTxQu",
  "key2": "2R72SsvcJf4SWnFgvZUPALc7Qt6dh723snRmfgguDkRK76RvC8FC1snXF68mCy1MMocu7pPhK6e4QoMFryVJZESE",
  "key3": "2KCciLkwcP7WY42MEd3nwFZBnmm5zNW8qFTdBNL3xNf8Fpnc7JXZeSdEMsXvL4HJT2YqfZibqCeYWDnJGAzuNkMm",
  "key4": "5ijKfpfKpbKHaZJhvBt2g2YWVBEAD9oZzkbFm2wkDWVBJe2WxxRMhikkvpvnL81CJ3k7KTGn1zrsKRAugVb8Sp6u",
  "key5": "38vLW5wKv1iixxHxABPX1LuUqGi2Y3mUJbHwUsNRjksUMws11MC5RPbnqQ4yPZqSGSm4skechWt1rLiFt5EH9Rag",
  "key6": "5S7pWK1wqBADSAeDBYAwnGyBiagQn6NKYcnGw7B2XeHNFUgLRqgyJQisw93vHknULQRQLE1jYSYy3iBB9UwJDkw8",
  "key7": "avQdxPbQaXgYEAn1eixxqjG3dFhAydrQ1ffURxCneb5d3yFgjAUR2EWD5cFH2VbwrK8LyUyiKLyLvNXh6BvzpFp",
  "key8": "3kFhHHm1A77t4bw93tAqSob3bS7SCzgaopSEHtDBXc4SmNvAau2br6tFzsWur2UWmQbe3owWJbCWmvRLBAGYjSqs",
  "key9": "DkDqMGZPNcKdQLMYJVLeGKShUbeLHf5tn5aaCiV3a9c82q9nR13r8AjrnFhBBNLpVnT4DFjoNgbD9sGhQG37dFb",
  "key10": "3jjbW4kjjdf5opS3RCGdoi4Y6Tt7LT9Y7isGBvdDEeTYNNYTYLvG7G4hEN4bqr46mWSQZvuVsLc1vKvJ6MLBDhJb",
  "key11": "33W9YMKKz7two7WBnusAdeR4AAY4yuuW1hR1Jryjqtv36D4RYbnVMWhyEWPmxk1s8dpvUBAtvSSNMfvYoCiuXWMY",
  "key12": "5AFtaogFi5QJLavpV7xCQKFPTwDRDVsz6owAdQx6UvrieV5uCLXs8mtjysPTZ5ATDmu3BpdBugn459vHSo7BxmpF",
  "key13": "3vxSJJU9WCHxAdV1arcUuzTapM1zqTgioFigSBoY2kBmdq8qZB4HuajUs5VYpFVALwv7xrDZAdD8V1W4RyohsSfB",
  "key14": "5vAXUbqmuhLzinACTt2Ngkz12nyNVEVPJUefaoFS6keP3SB5jBPauzM2L4b5GX9xr77AQRC4N7cf69wrmN3GCGnx",
  "key15": "kV56xZPn6WD7JQkUkRz97KpreSo6DdvTLA8JygYZMhHssHbQjoDHHJsdwFwvronnkVL3h1JWgW5KpP3ceWDrtJU",
  "key16": "2SD95MLiD7kKwa73thBDkRfEseDdbqTVfcT53MWkJyzxgK7rnWDiNcPasuSTxKAt78VabxfGX92B6bXNspjrU9sA",
  "key17": "2i4qo9phL8C9HnJzvArc2WG8dj29j5vyypbDBQGAza3n8G8N9RjZmUF6G3zDysKmsHa3sCNn6Yq3F7mMbg8f9cch",
  "key18": "HVkbAwCkSarmm7LrGNcVdPgAPdXMSyiLnuwAeAoic4GPL8qookE9wNaiEiWehiDJhCmaXbprE5WnH6uYpYuaMzE",
  "key19": "2cLvGNLbf57igtmdrZ1aDTfidDxGQXy5dpSgW6Wh9wMxP7TU8KU9p8WD6uxAXNPDVruzy7dQKjkrcSvMRwwBeCbJ",
  "key20": "4mrhCzYkHTv1WKTJJH8AEzbktTUZpLTV5N7kXAqRAHyKmczQ3PmBMpmbN2CEzEqkWmJghuAyMbguipnWSNLjP3pg",
  "key21": "rb1HriRix7yTCTeKqxsistR3uzD67foN2JKjmtCd13bcuY9dS7KnXJi72dkLNwQGfFhoXetXd2LZoS8X9UHZfcQ",
  "key22": "257MFW7z3uMYQ21xHy5TtM2E8dsGKG9wDsnFQrkNe6VJAiYGw4MiERQuVCRL88FyVDDWFXZrK3EWtLiXA7MY9iUd",
  "key23": "4cRVpAPxZrretsBFQANm9Yv7CAzMpcag3fN3ZgZYxLaBAHYwTDuDtvYHtKwEThtkMJEeo7CR99GopWogpc81hLuN",
  "key24": "gg5tJhDbhxZJoFuW6Q9QKvmUYAipD2bzsj9isttKQNE6QeMCuZAof9YAn5fyzvc6wuq28Zi1f6WDkYb7Ju1hYQ3",
  "key25": "3AwcZTSUceSa3pj5oYu1Tc62jUf19Q7zJrR4uv3w8CV8K5ky4TWjbAHV9Qzoxrs7DqzRcfk7oziYbSkQWvRZA6Aw",
  "key26": "2FeQVjmVrk8ygFz35RdULbXzbAu8m4zRjWuYUGavfYFymav5r8nVgLFpe4U5tsDDPtRWLA6C6sAUe87eF8SXyPVV",
  "key27": "3Qwxg3uXB6EN3WN3K4ZGSZP2Z5vMuRsJRjLi6uFsYyzhnfF4tuGhfF1wWCa1V2NgidNCjjBmaCd4imqyRK3bKk9Y",
  "key28": "2FQAht9e2PvrbVu5qYa9NdpVVmt9Fca8GqmYcYztGXm4MV65L1Lhf8HeGyeX3yhe8vvDZAB19cvwo5EL74fTkrxB",
  "key29": "c6TrnwvPvPpKMxAzRD6vejFdsu9riFYLvvtUkGtkDBtTEyH6VWzDMSYHuxeHRXDT7HnGvprwoahq7gXLJvuSden",
  "key30": "5HJYWdQSa25CjxMTLfieTiMrKMfB2LcS1enzseEKSWdzYKU3TMWzouQe9trNrx41GeARQm6xNKQXb9EvruKVVCmH",
  "key31": "2kjakNiamZAYQYZyzFaTfirsa8gbDhS3ra73L4v2tm62DbQd1JHV5NH2BBzZGCbnADjJvvoxEj1zTCSCZEMwR7NV",
  "key32": "5cuwzrn7aXRfJBnQewGhLFAos7DbDiwRMFXeP4MzmD1vsg1vkiE77E1a1u17tdYAeXrtisKsEP99VsBtfhFR72Vh"
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
