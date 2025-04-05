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
    "2k37cgNy21Yateqbayxwj3qk2Z9Jh1Mj7JpMEjjxYH1M9GacXaQuMfBjH993ToAzBTrJGc951M7gLt87rKGQgv6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jy5WaW4MaE5qn7Xax7VLQ9cASKu5ptz7AP1zgD2XwyohoDmzjWTkySDiHQyjKX5DozwMg4CqvUCCcZRSNXB7DYM",
  "key1": "52WP843vkK9Gy14fNa15KVrkA1XVb91Sz4tpriRrCkB2BnMmVYmKwCzX3vXA1Jjmrv4txapF6nkbfE97kdMyHAbP",
  "key2": "5oTE696YK6EzMyKsgc7aqDdvuZPMHc1mtSvmwYWiexx5LA3Ysq5UqyCPFi4cs6Aqnew6xY7SajCmA3cj7yJA7frU",
  "key3": "3LBnjPnUiHmizX15AGqeL3rUmgck1Qa7PURJfVWzwupPPaSkhWat76nQMQEouCEvRdX5fMdsBDKRDQsUS3c856dz",
  "key4": "3HbVYQvhsmEUjZ7d3dLnqLidbW3PPXBkU4b2vda97xZQjGg8MKyzCz1rJyKq3BVa4EtKBMyJexUdSmCnVFYDSQM4",
  "key5": "A2VU8tCx6rHEEgDzew6agNDe6XWAsVAdbVbduUBhnbNh9YB2PugrHhNbHigLMReYK2WxvorgEzgaZgFx6Zt82jW",
  "key6": "5GEgQoK2kphSb5PhWHha7KfiePHGCJDtVt9ZTBtdaRHbgqbpBuWfwvVSBULvAiKWgMREjLRmW5U4zVNJChvGH8kV",
  "key7": "633LCmdJDVnpsfac7vfVaJoRd783yeUwVtCfa3dWbdjL1p35SH2bLd8iq2ZMynqNjRfsn3QMrYBf7rBFt7wKdCPv",
  "key8": "4xVLuehSD7egPgcok9pE3FM1p7SPkM18PM51pjhE3evaLHxFuLVc79xgkMFae1PCpgpdzGvNVNAZCywQSs12Urvp",
  "key9": "4q4dTE3Z6nihqQQszZDh5o7dvxzBWi4sTfFo5jWJWP5885GhaQ9oAat6UTqpGNvrEpGxzoWpZGtkXrdr2VTfvtX9",
  "key10": "j3DXHuRd6XAqL3ewW2PinP2dzrzRWrdjKSn62ZBShwRBQ2XshkstgCa74uWd9PNXoPB3dtKorDTo7EcuckMCEhd",
  "key11": "3VjB3Pe1RxNcFmNJKoAnCcVLW4wcoLddq5yFhnnbZXEcKyt9KYqD5JPpKjzE1eGj8ye6E4oUfxVNGfGxcX3bzrHW",
  "key12": "UPiuMt9mZ2LdMkdw4SS5huEUZ8534sEo1rb3iULcAzXQwsqRXvHX395gzKxYyqt3JJBP98WYCrLw6vuXqYDCas7",
  "key13": "3R6WXYSKC1WrC3gr398jaYACqrypogZeoVt9eewEhE9AYk7cswpERnqbeS55duS5ud1kw79CVdjkQhvLfAPfmSfG",
  "key14": "sg69ZXjnZCbfBtCDJ9ZWezc8nKTRJKzkiaJebdZJziPLXqvASEPv9JoTEmTJia2kSx3cFiiJrPwY6YknWT6GGX6",
  "key15": "5wMADWySkx9QhASVDXs2QVHTLH4mq8CWTL8kw88gkk92LY1FiHkP8jciAz82T4CR5WkCjiV18ZL4w2JrkDVRdsS1",
  "key16": "2yZeXNTumPWK6kW58S9TW28ms1Yi4m4kT7wQB5Trvp6QVaq94gVUiZMLC42fen35gFsWFJVDc76ND5X9F4R3PTz7",
  "key17": "4y7qKG87kFfJUSX9tqr7kdmRg6A4BAL1bUJWKw1CCuVPYFmZYDr3uxh4mEBbBQ4E2vwaQX8qbhViS84J4AffSa17",
  "key18": "3p77ZjyaqhxFFtChb8ZDB8WoD8HC6YmyUy8wnbkDsg6bMBnEynkh5aUJKnsKnCKtYqmRPvDVTKXzMXYw3vxM3aKv",
  "key19": "4vZqA7caQbwRnNDTvMtvSPN4LD1EMbHbyg6i8s87pgNiQhbC9tfUo47SSG6WhBPhD5ytSkcWjr2sk18YDqqFtS1u",
  "key20": "4XvP3pvzveMuD41A9Pp8G3MLsevNy8ue1ydpwszaeU5zcNeqevbT8BXEvdaqKZgw8t2FXksKRmbdb1UycPVJE4u",
  "key21": "AKMLxxfhcUhNCQn3Pyk6VAogMScNtNkNcqfeWZYgzbkJNDLipEZzbs7YmXLhBtfNKrc7UuwtxqX7YujJ1E6QTqH",
  "key22": "3Wf9N5vEQn4Xc8V9xywi2q6xNJgXt4RNjWiDNQ4PTkMqwzMams7tqrVznDWwLEAXgGw9ehQQudj1h1NdmBaJGKA5",
  "key23": "27q31TXsJ7KaqPbY2StKdGthCQNfq6vfs7aT9YfDJruMYtJSfkeXjdVSTV4TqZSfiG8wujCzkSAuCHMfWggsRHh2",
  "key24": "3xZwr9YGStoyZX498zCdakTqRZFm8aqQZC6F2P2HCN86MqRfqKgtnw7hFDq1p3ooo9BBS1FErcVuMFSau6oeL6N8",
  "key25": "4iigHdsrpCk2a2cNpmE3jsHfHYKtZuLBHouzpzAeZnwSaFE5SPeUb2zNoYsjgw6YmQAripYVLwn5s8pxY9RFJrDP",
  "key26": "4ZdLTCCEej2kyWrChbLougF8HkGeYgsz2TF19pHiXBagRzfS9toqPcTvVDYvkN3bLyvM7MVsHq3hrik4Wt8gtMqb",
  "key27": "4hd9aLBaF1e7nyhwj9Car6m8SEkSJTssJ9PSSBi3aZWGphQCXMzwPsrcmURv3KJ7ZZzxtwT1vp6BaT7vah6NBXj4",
  "key28": "3wbuU6Ae7yBdFuwvmZij37xP9VMvEtSXydSSLfwW7zz4K5xc6BiNWx8Zev5C5oWnwjaazpsGhXpqb8m5JsM933FW",
  "key29": "2gtkQSXpyXaM4sRQkBZNAihpj56pNhCzTTrA2JZprzzGzq2uHy5E3E86kqLzUtE9fck2jBCusquCpkptfCwerv54",
  "key30": "5ZFyow95qw9rMovw2Z4Jzjai7Pj6KUwCDQDmxbQ43zRvTNuzfTyYqXLbAbWTiDsC7Ek2tc3THyWMkY4c4B46kt2w",
  "key31": "21x5Jd3wGzx2A5xw1wqLYAo8nGT2kUj2YKReKPFFpdc94hycwHmUeomUaP5Kp4yn7HMD7bpGJAK9QcqmvjtnhjfH",
  "key32": "2rnNkkv1GwQ5jzkLHDesc7LqXZJMywrHLFPLJFbrpizquxtSdUXsieL5W5XfCGcjjpr4K7zBaWuiSzBSo6yfXAqi"
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
