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
    "4MmqjoxpWY3SDxcKzs4C9TN5eFfNGnTuZ7hznyk9DckpAKZfU1RFD5Gx4vsQKV61uS7LSS2zgocCBTRN87Z5iKGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493esT4MirdWaSx3n8Mx1tsJVacJ4D9b6nQ4v1sMuC6kVAB6hn5kGKXkVFnYwGXXzfLPkQrHNsSE6YgYz1hmTwP9",
  "key1": "2QhCHYNFkJ8RLoUcU54yJdifdZ2YYFA22oTVNUkDVa48iUJ2bvmfoxceUNTHbGrDzwUqGmBVFwRSFtZot41qBw7T",
  "key2": "3jvHw2w91fn1vfT4ZC2h2T4GMXDLvfV1ctq4DQwfrdizXTHXSyJQ1Lm6yybUKDsnPetiuWVSDTaCvy9MdBH8YXKs",
  "key3": "3edv6dkoMwmoAt5mP4Ez5WMe3s9jJt1rFBVRnXuL5L2Spxmrk5LG3hLeoJKzprghJARCp7tm3Jt6YqXJ25oHX2jc",
  "key4": "4bKZLWMbziaxzWnWHAk5n8yVaL2uWwAjFEkA6PPZA5zCyou7tvQmH1hvPYqgPGHwBcu6rmw8Nqb35nbf7aZ3XgTp",
  "key5": "4zmvqxeNPoi4gdXEH78f24pUQDCDZddsrhQKb7iRSezRBitLXGYWhHmqfEUsu8rnmZmSKZYa6yCqcWtyzdHN5GQw",
  "key6": "52pqxnN7SZMdKUzeBiKjgxSWN38L9kTmuJJewu5M38SYoovt2Fc9KvN2Pzac55AtyVFRvL6Fssk2CrYHF3GPRr7H",
  "key7": "4SXJhZcJ4dJbPJxeCdFEYkDJmbTWz14bTpQUsojw2j3siZfZLEkvsQBApqyV3pcew2npgWeJQMzKCDR4SngBKTVj",
  "key8": "vMGn8RjPL1zWbAZsqG5Uxs9rfRNP6KP5BKj5tbJhxBPXwUe6wQsvQsUwPoiytSkQMhfC9beqRX3BFZdA5KXP21W",
  "key9": "YVfUcXZDXfAp19QoXy6EPJhpmHp8S7vRmb4xw79YLyTR7ZQZDGQnCpZykPhxuEfnmtarAAkrUVh8vmenjPhW4pY",
  "key10": "snLH1w7V8V29PJowLdkYdXMXuwu9bWq8sdzyFAcG2TiRy1sKFBh6BcVhNfe6Kn4oZSAecvnDqcpFmyBQmWLUajP",
  "key11": "2HKw8htnsGGMwUUyHHzkvjfV7jzgLK4369MtXdrkmbq944RNyd2WwLtTNwTGunpcrUxphDQQgbRUX48fseXpzyd6",
  "key12": "21jp9PNdz2vRNZvRKbkAmYu6eqJqQE86iAyvwU8vC1i372iVW7FetLMSymqDc75s1EpVGnLcdA7QN56NoD6ThtPk",
  "key13": "4W9VJHVHdWbWmvsK2Z75Wkd576N8FfjWbho6VRXG1eKWqFBAEyFzh4udU1BhbTRUid8YMoX3aGivedCmEHRNdoY3",
  "key14": "4pnpLc4Kw2cFN9LuSC3GztbTiH6SRmWdMvUsf5FFAhirB9KaE3e87pJst1EYW8xwpkZwAv2zpFwAwL6SiZovK1Hh",
  "key15": "5GW4U2vaZdXPG5oWkJiF5qHa7knTXx2v6mijgPYUcCGLYYxLNm8Ab1wFZcnZ6j776zVzpXvaNKQSy62xeojUoaXQ",
  "key16": "2e1g68X4ivuqqgef3MPtFLozo3ZzYnpWsptsv4BgCM4hZZQJ5eMp6P71DRY1Y8nWgNPpz4M9T7aefDJJbY5zGNGD",
  "key17": "3abgEfhXkH3FkMinA9m6htGPgWwiyVnLGA9u7nuCedjp4N4T3uLy9Wqg33rUmrsepvsgu2ZAi75nNDgUKcfnQPeR",
  "key18": "5G6xXFdBTLULR8DxGrUh4G3DtZfc5Q3dZ1fMdypQBf5TWWFyfyFwXELtrENwQwvmEz72M2CNxnQB6jpCbnTgFs2r",
  "key19": "3mqNuMo3j3WyN8NrxPemvTKcbKn3Kj7nzNZrCMeETKGBR4oyxRNDGepV7fPxWihg8aJR79heEoWrM55i7vPEMoEr",
  "key20": "2XhYmt5qkgD4FNoTKa3N27teksvniuDWRyhEzKtPh5XJXabD6EBaAJMJEFL7a4qLwsRmCNzdjL2WrHVBYTcUzttx",
  "key21": "5Vgj8RdEaRahCptykj2YKS76P4SQnV6p3p9VY5TykrbKtDfn3x6q4v1gYiQBvP1UoCgXr82KczPUm4xmJDoV2Lum",
  "key22": "3AWbyhtXk7YMujRU75WYw5SYX5ZdtaomhnAYDX5PQeg2KJDpjhm3Wxv9snyLabAbEaPp5dk52J3Xke2dbEoApyar",
  "key23": "2XK9W2MZK2tg3y4RpzXvTqYJUvk9bHTEekQTcnXQej2SG2qPaG3xNoFKAUkfSDMdHXSySa4H7BUxtcCQ4irzi24b",
  "key24": "44x4HHcxbq9Knwth6QFKoB12os6YnsxKdGLGSvkYFCisBDCv8QGh4mE8C93fMj3dZRZ9qqUN7kWvfDe9tsjDSJTQ",
  "key25": "5wvGXhdQ9iNKZ2HEdb7vMtRRpWECxXpYpwENVcY3APeT8s2m3rqdz1XErhKihgBBgf7TFinfzwDCxdCZ7VVKQbP3",
  "key26": "4x7ywfaaudNt5JvrEDXF2JDStneRzeJRdANQgHpRqSEVLdsNCMysL6i7BpSqHK6h795XzNZi737Rawi6EtiZjZ9q"
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
