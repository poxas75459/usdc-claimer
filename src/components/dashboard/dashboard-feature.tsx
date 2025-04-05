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
    "2NTkLk5YyuR8ttVs71WFyU76XE476mCthdKktZxKXeU2AA97are3QPy15PrWgg1RVQjAoApALYWvieGKnPzwksEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AtRwknSSe7C8zTnyjAC6rWfqpTgGrH3wN3PoExtSei4LGnGXn33MpgkeLKnv1Z3aLbmekwXsqkcMcCd7P2pzZ6e",
  "key1": "3kadE4qZ49UmxEE6C5tuRcBcqZANKqgC2eb7Hs7ZTJTS51qCBJUkQJRWgsHZfDkRRXyecjJsWH9iGauirwVTm6uL",
  "key2": "5QAw52vLXmkTUTa4bGLbaEdbp4NuX19V4gNkRkCXuCFwVkFP1SV56E134RipCA6eatZSPkZRsEavUGmqydcKinP7",
  "key3": "bm5XoYDqwteEKyFadzKHkZdxx31MAGY29k1S7t9aFfMbfpjgE42p8f3D4G8cyeS99rR7hzp35kKoTdYLdWFTmvh",
  "key4": "ewhjVQvrBBBG2poBuE4gwwY6JwXWYcghqaz2toprWWALfbogoTDB4ZrYqw1uwyW4CgUQFPrkWcSrCxs6AU7WJeS",
  "key5": "5RwwkqsXCH5BqHCZhT62gcnbZutChbjjBXe3eyS3bkFznFpr9KV11QsxLVN7QnArY9fzU5hxJD2n9ti46Hjsm5fV",
  "key6": "3XqWZf9ffdvL9v4esubDdeK1ZCtJUazHHL9HbxSbpvdbCGwDvvUQW7nygJ1zLXRMK9XCd2ZKfCsPytHo7y43wnoc",
  "key7": "4JxTzXVLk2TUzcYb6bG1DsKCEGQwNTeYuLjzkmCcfrd4GNS6zwFktjg9veoJfm9EGzxeq1sztY6hinGTFi7gevdT",
  "key8": "5MHrQ7vaP4gU7Ui3u4oE32SP1jgEaTyVcs78hVSCB9hZUjBwnivXRdBLUb7yBwbz3V6LCwvJX9noz8EXKeURJJ7g",
  "key9": "2St6SMxQkQ3p19niuBiagZ5NSwb4KXxWFqBer8ucr1VSvyhdbG2qnZJQT7Ds8cBUme5szyEDjteNcWWbm65q5aHa",
  "key10": "5gifvdfR8EMRBPcW8kkhevt6zT8AMhVBv8D5SV3UjeA5MUaucYXQzWXr6stpj9LYS87uj5hGAoTgg3mdhFfXqc8L",
  "key11": "5FrHSTYF9LTCcUPwbTu1kkWXKnNFEwQa76sKb68UtDjMuG1o5Lg2F1WJ4UveDqQao9Ch79aTkXsMsbkLnM6HQ5Xs",
  "key12": "5yrqm4UaeTTYDqsFfrc5ByySMk7UKqED9L4pCujVZsRpXSeA8XxFt1dbU92Xt4iDaJsFg1kQKLGKmYb1xzHAD5Aa",
  "key13": "4swYHTeno8SABh8najzLJKRbq2rR5b8mHeR4Tzu6SgKfHVmff9FhBpaAjJhR619ZyumoEqtzPGJx6EQMboB2r2tC",
  "key14": "ePZTvBJ6VyYFxKZs8vsdmzkPcSY9p8GuavXhU52ez7iDfQUBcaqZQTqhnpUbR24dcC5u6op3KTMgzrqxRjSNgAV",
  "key15": "2GDiQMKYE1B9nsfaN266sR2bKvSxfBF8UUj2r7tosDfFmnZE67jNzyEZ59yoPHZH97Bu8X3gM5rs9oYeHMAhAGLT",
  "key16": "22qY5EVMZprsnhS56hRnQasp8BEbgew7jmdJ8b2ok7XiVyezi4fQwGzH2K5imBK2NHpSTMzDFEQrJBVYVrUfEq9j",
  "key17": "4kGFQbP8ELFGCc2k3VtNogY2q7rtaCqCrJUpCa4rkibiBMgajx29s5Cb8oWyq3ySMLXoEaJqgTNinYZdi27hspJt",
  "key18": "3obxohwPB6nQ2o8bWFVQ23BnsQtvNpodaVB6gFwvmecPkihTkNmqPaL7QuNxzxF2Vy6b8PGnEGDWRYhX1bbK6pE7",
  "key19": "2RZPizqF4tSpoP1q2yv2AeGsLUEEwz9PtUWxaJYUbz8AH7bognsKR9XJAE4FiAJsT41UzCzKXXhpxxhp5drbuBjV",
  "key20": "2JQ7anXcwXsLSdVuSWDwRSynfyyaHTQPyaPiLa2pjS1wAWrSi4Z3vuYqnWAVbuBXXaoc6rwNukw4TPhsdPT7fBcB",
  "key21": "5D3Kog14R38p7GwVZrHhbPuYpw4eYSagnsjJZEziFaJUv9MZfCzbXUpMPhpc5BrKgw8sdJjRqiCVztPGADPtZXZe",
  "key22": "3PLTNVxVfn3v9uqKhPLAtG4txTDufkEjnLTPndXF5wYBTKKad9KZWfGkS7Yu7NqYC7RJStXzv7TyctCdixwro283",
  "key23": "5vzQLVwZRbTmTw8kjoNuypNrSUuifuJCErNXv1qijHfk5JDjHD9uBddFakEBzv4DS2hC7nQhuN1mV6mfTm3fxtcC",
  "key24": "3tZ7tBVVz1vve6uJ31hBTYC1tkC1kemraT9KxbemG9CN1xMswS6CmGXcTmwHKHWqTVjve4k56VMpkkAdx4v8Bsfm",
  "key25": "5EJUXch8SwuTNKBGhfyPQJdoHF9tSYkdUMCSk2SeyuYLbjUKFyjiKqzfXVoetHAKeHptE4TQUuRoMkms5Hbru6nq",
  "key26": "3Fq2fUvcGYxDZAkfnBfNFp3TbBkMEkfPhSf3SAhxuMefe1vveAo1QtTjHY6ejk1NECAFonBPX1HzHZQcz8kh5JJD",
  "key27": "24d8zYqukcF6Y8ELLBJ17d1TSrw8vqnCDERGL9Q4nsUd8GaetfRrzKMknvuRyvmdprF8n8jn1A7KxgKv1dEDgKyi",
  "key28": "677z37wp9f2ZBhWgmu3URkgmQEDQg4F88z2amTZzU9qYo28QcqXh2jVz7rP6SSEsVfhB4K2nCcBFXnoNCcgWNx3f",
  "key29": "2eMAsBjeSAG4cE1Mz7RzyHjdFrw9Trmxp3jP2R6CaVmEDPhqUoRjkZdpmuvpBzxPUE7Ed3BH6L2YGf1DvicE8vSB"
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
