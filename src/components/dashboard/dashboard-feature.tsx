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
    "2SAbFpeMALBSNmsPh3heNS1hCCaHW2Dwr5bcn1jcRHqkeCrBvKtPf9c3ks615bCuRsiG1Qw2E8zzwYVwfJJ5CPCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YGop8NsshJPgcMYEcHJYQnWWRYVC2TLEYePd5di2Ncb54uwsmnR89yEv4vjd7TTTkjoQfw1oCyDqQfwSEoUvrR7",
  "key1": "58LzGDg8ZuHCYdPypury3KJvmBfJETQeMNd4213SNkFAPuCuKyxEkyE6zrCGgUy84Q67JTAPa47Vt7DPKX7Yi8XP",
  "key2": "2ozt9h8SAGXQ4ZEArJ8CoYYRN29bGVapRGL5NaYwRAAKr7WJDPFySZqr3ZoQBQgLBZg6ieRe4LpcVgVyhW4fpQFH",
  "key3": "n7DExqwi6m3EYb1aVjUEhViQPuifW14s2SUY1Lxsw3yuAWsRGivr7USyuhzJrVXnkCkWFo6XC9iryCvdESTifA6",
  "key4": "3gjftJMZh4UvjiYxT6mYFyNbkJUvq6uq7PH7RuTFxR1hVn7efBjLnmNGAsafQBoaoSbG8NmT9eWTdiA4kPD2VWGP",
  "key5": "UZNxGNL8XFJ8JRFnUL3ygxbr2SnQm2ow75DFVHRr9rXecKQyTcKE3TpqL6A6MCJpseSgLKyagsFFLPVX9aJZeVK",
  "key6": "26nt7bfyPk1oQiRUnHHwYoWVCSA3xSCpQCQEgnsniwN7RgWDKRUq9838ZnDehHuGEztPZ3hnxKhYYWWKXBDK3Med",
  "key7": "5yYyQHqLrEFbLJYNJzy1QrbXpV8d181YtWvHX7HDijBxudeh5LFiDbHQvFFnAp8NXVVstoatcNSELPjG3gbVitmn",
  "key8": "4PW9HwU7ToPsKs3sMXZQWeHtks1JvwB7PShbXPvvqtrbapX4tLEjKxgSTu7poDhP27nrqhPodn4kvqC9UdMGBJvr",
  "key9": "5LJgB3aYiTaSmkigqo1xAnsHqeSsQpCL1KDgLkBqhkpAtS58SnR2SrD8HvDvgcrkxE5xtv8nV88aXJjgYAEVcCjd",
  "key10": "hp2Zj7fpFqUbxvCQawtF8YyHTeoHXdCwF82suknVZgzzzsD5UsNGdHfwiVFRAnGyjqNpCHRWmysFn994KuVYKGY",
  "key11": "5RN6iSzMSNWknKv55si6kc8ZXFS4CjpJtzLfg14MezBmnfP3158bx4fpJy1bhBRmEUF76kdupTStV5dVLeHEP3ZZ",
  "key12": "5E1gMqNGAAWispRNoo7PdUVnyKzYXmPTSKiaSahjQuCHGvu9WNdoL79ajet9vA3vUjhKqPwujAbpYNJS3jL312tY",
  "key13": "3p6q1jwnwVaGGrx2ozibr7b2yRSDFm7b5KEgwNi24WaJrrh2uyqudJbpVKJ1HBn4ik11JnvKecREc721FsFr4H4m",
  "key14": "23iwwTic9rLQFWfCtiRJf9NVrovkkyXqvZkpSgb5XkZQtwu5ffPMGnQph6UmwULWsCX4zUVtMgieaTgzw6gg4NQQ",
  "key15": "2tNZTHcE192V7Vfnpn2MZC1YavS9eMdpb27dJEAiziqFcxzPmnGNtutWsxUHr9Rrf36NQHrq2KHyUELkLoi8NjWq",
  "key16": "5TuYqWq23Kjj28Gwfbk2P6q3gDMgteD6BLZYfVTNuC5iR56BeU1k1WaUTDfXf9FYeSUJEZLoCxxyjJBinz5nzuiz",
  "key17": "4FVHVB7HHkXFeN1vAPPvRR2WE7F8DphFW8aS7eTTXDdEewU4sQckxRbCSJkLooB2J7vciwMX5bqQEESw7F7XAS1B",
  "key18": "4cmGkhjavneZWJPb5u17S2a5XiVZLtJDqSb1JA7Yj2cwdc2gGqYi4oa1QrnJL6ptTiyZrj1Ep8YJu1v1ZrPE9MW4",
  "key19": "VktRmK5G7KtkBFbkyN2EiiGgFBE9nvcD8PupVGpf8q8AtNTtxCKccqU2HTW3iJ7aYSgRtPX4TduBY64vybs9UAF",
  "key20": "4gSyhhrLfpkQVw5uRahDxEe3cZK9XjoCjt8oDNVkyUfymKA2HJWrnpyLrj1bsRc9tjoWXCjgE9D4qWLxRcmtphEK",
  "key21": "3JxxZH9wf3sdwhMgBQJPN9gX4QGr22Z7wTx7uCUVdVpaEcWoDVarCWV8uojXNDpBGBk7bPXwBwKDHsaam66h6L8V",
  "key22": "3cxbVYiDrvixo6PUFgpjYKa12v8Pmi3LZozkVWRkk4fY9qAa4ca6Uys3CHrZkBcyfTaQxoed95nji7itsZSLaux4",
  "key23": "2W83DhLmT6u8PCjWMPGBzaKGVAWkreuiALSZFivnsEQdbxNGT7ADTS8tf8RsHMXwwE1DPdjwJRPSA9A8cHoFTyJ1",
  "key24": "3WsqMhdkG6WYLseeNvaXxJ211UQNubfqTavJP42pk9vfe6wjPEi5bq9qkfKADb74Lr96gNjBkvJhKUUozKDuDbix",
  "key25": "5xCFjL1Xmg9qp4Py43zwZV2tvCbo6GtSgxqdRAZ4AsQmEosTL3DShaz1mgySrMJTPXnGy5MDVpeee7Z1fkuBYPLd",
  "key26": "4uQcbgPqKatLdK615CmhtHn8wfA4grCuFUyurBxpgS6pw5cV7d6kLQshTYpr49vcMtXfTfkAY7nn4TLbyxrwKnAE",
  "key27": "62rcsgyWz8spztE3FM9Vrt6YGwDypWZAa7HbVoVA5w97mUKg3xFZhpy3WtYWvkMB3C1icVgJDQnM91ybfaALPHQr"
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
