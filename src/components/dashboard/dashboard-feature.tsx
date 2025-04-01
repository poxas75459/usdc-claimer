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
    "5w9RNgdQiRepwEwgWo4MHJbNb6hz5wV5DupLjuFxeL67DTCTj9WKsEeiDeHzgTCXE58WEXR16A5P9K2TsCuGA7fH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhqDkH4okssDmtd7sBZ7wNzwjW3QyLXAgjTA9Wpq78rtsksNXKQtzwMmmZpWoiWofUfveSByLHQ6asEg46ZnN1C",
  "key1": "YxKkcPDvyb2buRu58df4bgmGp83MYCEt2tvx5WMYZ6EHPAAUsAxXHnNn4DyS9AwpJu4RvWJdcpHLJ5GM8GSQJsa",
  "key2": "53EyKmSTwjPowQk1Lk2UqD81LcZWPtgi8D32nzUtaEgYGiMLNtN5pjZ4Gjo8rtGYtBgQy8edbCERkT6ce5T35Dk1",
  "key3": "41rEqimCCoFBjNeDqC6jg6j38MFNXYbaVWcFb1ZSt57t2fVvcSrh21zC3bEprBZd6wxxhxsvyQb6aqF7Vsm6aaN6",
  "key4": "38H6yXwo3v3d1RYgpEwPk1zJC4C72G5XKBuPUWy7oYUuBJTBEHRhaATH7s2J5opD3AhyudreceeB8P84bhhpunVt",
  "key5": "466S74akMcA6THkwRuF5rDzS6FaQWGtvCRHZ26oS7Emnn5eFFRHb8hsgqXSiDemX52d87G7ogPYLy25gRa2T8SEa",
  "key6": "4vBucMnFeKHtQZ5XtUW2QZtWFUhV7ENae2nk6mKfdN51Ak8jQJRK1dJqWnaKRoqZJUMZ2VdScSpmaSQdDpDhewon",
  "key7": "5CbtUwifLUX2kovfoKqD7NTW5YW6D7UXn5gvQdMWncETMg5WwqsX1NuZZo1goLx4FUUPJsxX4N4gBq7kjdguHBdb",
  "key8": "4YBJ4VnHzvsvQLP4gk1vm8fG1pW9qNdBcAcvT8LBg84W4RiuiXDe4dVRu7tC7fHTY7d2Nhpjug2W3E3UWijGQzLq",
  "key9": "4dgJDYKJo3DcGUZZSnihEHiqhsRQdQ2gJYgoDEToMYLVtzr1JzRwhgswxx9Zpy2RazZmQJM7rTy68t9LWKWuGEYG",
  "key10": "6561WgptgJwozJHNSqsWEt4x8s1oixTfS84TCDmzMrmCV2334kjrmdrSGSQYB48iQZAsz76HiygaJQEiH7P82DUK",
  "key11": "4HKLRvHVjBR2BGYfjWFWXAqK53VShtGpUcjvo8KUAnXwhuEFHkqb5za1uU7fN8rY65eXdC1BcJZK1c1QX2QAwhpY",
  "key12": "5dxevuhKqFcsQbMRMbfRzzLpFZKwfvEnfr1rpsH4FZg6JibATeQN8E959NN7mkkFb9Um2RWoGTf55aVAxJRspV7p",
  "key13": "5gkpZRrW7Hbm5migM4xVwgVahGKPwc7Ur4Y7r34fJ9MFA8P8EqniK79nzTkmfiktfmMpcv6qAvUouHXMomGMw4o4",
  "key14": "2JdgfVZvPfFi2TUaaen3k9ebDR1tbaMxmfcEKRjEnM9jSTUKwyABi99rqTxhJQdzJRKtt5jtsnz4cnZP6MGgbiz3",
  "key15": "55d1KMfD3J9NVctW6u5Jq8nJxi18MTqtrmDcRSo63rNer46EcdDrz4oFebVSFebrfWRpc6rXa8kQmfAQXWuciZKV",
  "key16": "2yBTVdyAd9sbguCKgqPnEagbwS7kwo79b6BiVwnNrBpmJRBMutMeyQNDWsoyvvre5h4kdA7u4J4hQwedhzAtC3Bb",
  "key17": "2PDMqkgfgkvzYDPSQySn3Jy9ifm5bCEB43o534jd8V8r3LdmTGmoaFfW6fwfK6gBqxCmYu73E9wzkiUVhfUFHcai",
  "key18": "jhwJk6PeHLuS4jkxaVmdrBQwzEQJyiNJMVjkcoHqZ8vNCGH8YHguV99QyYnfYxE2qtujp4pD3o4JmALrDa3tQkJ",
  "key19": "5NYPHZpUFr8vGCaswLmWwDi3EAZMc7hDH4r8r5GSFyUPQLkh4cvk1GNS7FVfswPBKGMWDK625R3tppfNVNRrF4Xm",
  "key20": "ASSx5jVcJMiecApNJKyvV5vWiuAD2mjrxiShWxRoj6t8txR1n48HKhX4LnJShKX4SNJwNaGcmMGiju8jntxTYXR",
  "key21": "41spxcDBQbeBRUCb1SQc1pD5mtzkNdbV1CSSKrHLdwpRkD2TxoYNjSDohTtbgL2CqrzYB392HMAKvVLHK56QdW3j",
  "key22": "5NSWKLYTN4ZfUMHHSLLK7Ujux6T89mQ8DNiY7qCeeJuB4peDRNtMrhRPsP7yyMvajrLaPEb26HrusVpfAKpGgHEZ",
  "key23": "2PN77Nn2YubERJw2ngPs7kSDCGhx6cGrhLaUMrVUvxwm3Ano8KDRtUWFz8Zb8y7wQE18LU2LTS53ELkK3UUQ7p4d",
  "key24": "5NxZje2nUCbNpHU6nHHacbDrYxWMFq9AJziJb1wPzqzrP6CsVxcFguuiEig79LPLyi2DjJXVdDu5s9DWqrF8ehZj"
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
