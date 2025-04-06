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
    "2nXHnm6HUj7RFeXohnzzLo2uYA3uVbrgKkqAUhKuBYP6FicpXQhcqgfhEEiC3GzRRf4FnT6NKVY8PbPvY699fon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Uz3zi77obAzyqwnbbTgyKj7g7HKgW6VTwSNLsYDfnWVtekMYSxXQvnWmKQXWYHS1Z2gsWZu3BGPaLuYY7hK2gi",
  "key1": "DUaxVVXBWMB3pk7UDtHYeW2fUeBxe7GhyWa8revdR8TYLX6ep8UZiTnt5DPnhkxaHgyL656M28a7Q1sit8THiLo",
  "key2": "3E5pjYRgWc6ELZGoRBGbpk2W7A8tNHWx2zFfYAyTYQeGDWTytuU4x2dXixmwbjMNJWiftKfgHymiVVmgQBY9ZU8y",
  "key3": "S8euLLXdU8yEQxYEfzpRQTBzBrFFBUEgPDvZYabSa1EZf5PFeb8P1U2wa8wUh47XTZG2jgzFm3mWSEJb5NkGwwQ",
  "key4": "4PVuiiH1JYmw5K9XMX1NJZbos6Yi1vwCt6uvSjs7Duj85iLq2MgXZ8wMo1ppGjfK4FwTU3uWp3iBrEBHmMvqPSUq",
  "key5": "23NJ7K6BWbW55zVi3A6nhBjQQWSvtYJAW8Sxzejxmbo7kpAbnmhtqG6aVSFJku4Mx1Q3A4yxUD62LgSA8DXYitbX",
  "key6": "PfUURjkXf46vrT3Y76nnHAcA5m5nZAWuZn9MUitwWGNyWGNdMRHgJGUqafiKfW9WAs886LnL8U8tL7EumAkBPic",
  "key7": "4DBkw8XLCu2fSryq3uS6sBgyDQv1r5r6XwvgEXT9B43YrKmfwVerYSpxDv8YNakdpnqwgR5w5aKSqbfqYxiBytFg",
  "key8": "2uQXFMe1yH1diExZKxJgLoAKf9S3LPFbQb2D9cDWmepyS9snH6Xug9KKU7yQe3d37YViwVmpRisek4cFm2rnryUu",
  "key9": "3AdroWg5ztWYtVfmwAiwDe8gwRBtAg7Kj2Muexz2mP3pfZEWz8bwtGpVEC3WYMeSwQkamC9dGPgcaEwymTn8M49T",
  "key10": "vdV5KAVWNtvHsk3LQ3Su24sNxswcHEXM4YqutHUsgdrSUAqQ7mHhrJFRZfLT3ZPqtBpnVzcrpaX4HdwvDfEqaT5",
  "key11": "pQS8PaqKjR4EJapsfGGcFd3xCbMauyzX2FNDujPSf4tBg85kHcirFeoqwrTgPZzK9tLSxpYEop7FmJcrdwCjzeN",
  "key12": "4D6EjEkbjULdSqUquRiaYxbzCujG5BzxGf51CgqQMAWWGxJs8sdjeryS4tNreHbNuZSbm5ufjcaKDeZybYbU5Ky3",
  "key13": "4ubMXnMoC6F4PFbVFySumhiWGfwX9GitQxgVfN96UcLFznwnZHX6y2VhSHGBmHgWk6wzZVEFA3yHisNLf3ip5Tnt",
  "key14": "XvZftPXEBAvxuakfzfFnCoAsToMKZ7cfnvCCRjHnL68ZwmtRAqDg68juJ3GdaoxPrzx9tXRYb25SVaLkk1P8eZ4",
  "key15": "ivd3e5PHV9FaDv1wL97ibnV9t7fd6dcw9LQK4NjwzLRhC3rAr7FLwi11n2iWtZvXR3TQNwiYbePiv5v3qxjZWiA",
  "key16": "aLr6jTmiAanKTyW5kJqQ1abFGqktuR1xJHwM1NFC65frYGkak5iB2JVYT5kR99j1aRUeX2LgHmAT8aFy36RLFe4",
  "key17": "o1EeAZenjQuvStrjDZy3mv2cZV8dCAWq8sNyK3CoawF7Xn8xqzCPz7f63jAxSNXMUtFziMfEjLqkwx4nVqyWdSW",
  "key18": "3zC6YFcNb1sojLZKzrKrgvQztyZLYkxx6NJEnoFG2WMam5L8UwKEgYt4NKqosb4aupwWh65JUbXj7hQTf3Hf14F9",
  "key19": "2vX5BTn3jjCEDrRYBT64Ae9UEZCnh9FwMYYpNme5wS4QwhRKAzgb9Hc5Hy3tFeDthgSte9GRfxxgbyFtQ168pRUi",
  "key20": "4QiV9F8AKwBvd93wKumt45T3SikRAmTd43MY7PVZHpVYcKEC6UvfxGtQqRkoeAQMyLEe69QTTwTrHziu89t7782t",
  "key21": "2PkXAymAeZW676Gym9Bh6dLMiXhkiSxgMQR2ExJn9oGxChBYepHFLEvZTfUe1NKVharwvVBC1NzzvNvwYB7tCfxb",
  "key22": "47Fjfozt8VrGcVjcyJN5jqRjEjzARPhFLxyyexzNwH7zAChMoxesSiFtb1fGUuuLBPH3tEsGt8bEiUpwUiC27V8a",
  "key23": "3Mv3Ci684kzyL4Xo8PJo11Me8JEJKfDJRi9tt6A8stdHczGPvPDyiT7jcgHWaUWMZ43K4vNGxrCShbGrRMgftyJf",
  "key24": "fDqxAiuxzaSrVccavgrwiRLZGbx1pQyTMuEpj6tddCmrv4qigiLEH9phgzEUZE4RNfUDgrq4BL1aBCD4iFBynRE",
  "key25": "5m48CMmVW9vJYQPieUT1MRyoUX2hgrDZvgUaoHoVqmDJyZtR84S2KxVbfHdB2WGdinA39RcQ77bMJwF7QbpPbi5r",
  "key26": "3KgKJx8K5y7M5ZRdivGRsxQhp6owUGv61vmHdYwSdTevBLEmDG3SQFc9ewxS6mKsadLFRhaB85MzbBwMs4CNiTqC",
  "key27": "CQwHfnoEYY9hup7TiXauSLd4CWJ2QxJr4S3X6d6DyyA3ndNfKEE3Hkj4VHspUhhspDGrs4Rb9eAGQB833xqq8h3",
  "key28": "5f9zexUq6az7Nmr9E4cegJifmBNyavMSeCd6qiVeaPA826cSfMrezzsZTCYWqJrVRhuZWTpUk9Lmo5VtLwAmFARA"
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
