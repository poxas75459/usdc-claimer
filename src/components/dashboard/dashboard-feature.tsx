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
    "2NkoX2i2HKPv3bk98K3iyFWgbMsm6gvXtnM1QbUzjg5hbrTMFf6U6AySWZz3swCdZchEx9YVMGxKu69iqnrCRpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s65g1XqtWpfkXuC92U7gNVQtJhP4i35yM8YF6RsJ8drAbD9Yn8KQP92iuUBVbB6B28rJn4QuWC3bvu1BcKiNeWQ",
  "key1": "5RdGMTtvZWHTDYnZfm2GYNKJC7im8FfNNRX1BZmjn3oPA3KZnRoDDwazhNVSZtUvZCqjh9soBEh4ZUafnFRFM23w",
  "key2": "3Gjwe3cc6cZMNuDmoHBBUftuiBFXhtF57498RkfEgTV24vMcYaddgBnGUeLkisdUukiyHb4SCF4tuigwSNfsRify",
  "key3": "BhWkp3C5bQBHPHVVCs7uQdXAWT6VHXso5iRcumNj218KdAueVtVG2B7B67wvxLTff3DASWTAvuAVqcv4BadqJYr",
  "key4": "5qr9tgReTmTzD6AT5oWJeKB3HkV5RDMFrcZeut3Mvr3TArXdG5xkpBunkMvewt3dChqQbhFv3dQjQwoTkSjWkhfn",
  "key5": "59joWZsVBDCCDwMDftnRr4DzH5wDVyJsGvQfvUH8FcDzaB6GXmWu7cNY1ncXZ14RUwuVZv9TJZLV1qXzAgiEd7NX",
  "key6": "2oNqzR8cH2sdgu5tXnJQo8cHHSFAeyHXsLbJXPMNfpWDQmUaueDzfNgNFkwkE6BuU55j3Fy3qTQ7U6D7pUATpwER",
  "key7": "3VcCBmZHGfMppdecnCRxKH1ZpZ5EbhzqGrm4CJgGSGiTZX9tuP2rGmBvCpzijbfYD9BWwG4sq4GsKfqXCcNnsZC",
  "key8": "5X4Vcw9aG4rAk1pVEgNahE7UNVw9E4hRhzTDrgaUb1HBFjEkkFFwhtwd5mFH5mWGjpaj4P8VMPvqyS4J3fH9QNkB",
  "key9": "5vTarash69fK6mwjhWf19LwnGhYjeE78aE3VnJZUNg4jFk8dSx4SvhkHNmsuWoWP35Ph6TpDjNkbLm9HFxUQ3kTq",
  "key10": "3dKvfhAoysrWwvKu28GWfnCRm4vdWZYcz5WwLwmkPod5ykVdTtsELcmY8Q4ZL5dkwseMAcNxcAzBRQASGMEknrFm",
  "key11": "61hCeWXzD6PC2KUbxJZwBp5f4QCWD9cNodKtN1x3Z2rhivQRkqxw8Lh9xLkBZn5CsQKhMWNxDSDkCkQBqTgoPd8H",
  "key12": "2tC2J9pnUSpdp2GPo3kcBkw15LYg2rmTuCdXqUbD4bSWbMSgnNmBXzahs4fcWf4dP72X7i2pZLGbsuzGA9ZNL5dM",
  "key13": "5aEc1MA4Pe5NFPKm5MB36Txd5mETABTFS6XRM126TkbDAuuXKjDp9oTBW6E2VcAByuCfs3s8HCSekQtJb72Frakm",
  "key14": "5KJzDESVhU3Nfkxdn1KNWbDBSze9QDCFRKrEnPhqmAhXMMBFMVtqPqwdScgriTfXwK63J7DTes1F7i5om2ZvcQ3c",
  "key15": "2ThLf8GdFgfjwzmkZhtM9VX8neEqD8oDpuXe46j7SpzGX2mYL6a356NkBAaN7w7ko5QMJu5jge4vpLoAkexaDkS5",
  "key16": "5EaiuMS44vf9RRfo2Yk9KVqcJ7mdzcDZaG2fu4suzZ4W5RspejwV6zoybvmCZomBuNAJTagKHPYYLz8zdk7jH9qF",
  "key17": "M5YxtYeHSMoqx5Sdb5k29HMXqfV4BBBWj9eLwLJDUzL6j6WMNHB9Rdq5yu6sZ7FCRtiSyM8uBMWhmcCBzj3S5L8",
  "key18": "5ZezAAe2pZAvnY9MdWB473XTT4FTkuajMedFPfY1sN7c3Sa4mtoDyoP5HA2pjVmaHLHpBboMKRVkTtjikF2CWmZj",
  "key19": "2ZV3jGwAPVgh3G7PEGH7XJGrMHS1N15dNYMRpAw9EYSnGhhtWoVzd8oS9r7tgdxhvHk7Qm77qNXvu2PnYaxfMhe5",
  "key20": "sNPf8WfqpbWp6hP3wCFgUBLXmeFRsEQqes6prKy8tyDokCSSkD4YrmfCqe81ynGDEMwTSi8bn1poR2iF7PVLzQ7",
  "key21": "3Zm9wzvzLHE5shqaHeiLUBsKjP5XaWiCbyeoiBRLnH5mHw2v2MKGn3jJVYhiDZVkJVFxaiBdHt2myC3Dg9CKtGU8",
  "key22": "4SqVbGxGfyzjn3d2GL6MPAaAo47V2mKykW6Bkxt2mxbe9xZXUzpt3eB1cQbt73u5TBfNmx4thEPoqDQk6Ryneu2S",
  "key23": "46ZctDrwXwHMFxgB3Q7FPDFeL3rHMhEGErKsC1e7g84UmBJ1kEKZseL4nqBD49gdcv1vL41bnsaxBbruitU1ZLSb",
  "key24": "2AadD8xDjQM1YMtxAR5wB95CvnKmicipQsf1TJTSsGbUEEURg7LRtJUd5pkebRLRvLCM5Jw6YQZ88k2WA55gNA6f",
  "key25": "4AZ9HsSJhLjWPnoL1SDW94WhvnK7EQ974UfUicXchqWx6WHp6sX5yF2MUMvBc47MvSqNRxt3riW2yMfZHipaPxp3",
  "key26": "3YQpotB2w1ng3WSSHoxMMvENcrECtHmwZy1izPYaNnmN7DzhbySqrPKPmYHFR66SL2K6hT7mzqo7H6UPBQgRW2Rn",
  "key27": "3k6X3gvUtU6qwWBtvd2mHCtrggPoq8x5zhZbFCDb5Q2e4qwFCEfsQkMvooT7Lnm5qebkKKUoUPMVQu9oUEvKpL6n",
  "key28": "5WrNMxiwBjqSTBxWBYWKkHp72FgMvWRyWUDZphDvFhPenXXvUEG4j6HwEmNGSJRCV4nskeWYeZa8dd2pK2ST2tVb",
  "key29": "3PpLZdUL8YShNHc3BsuyW5kLagAGTF8smuBm52Tm1t87fsbimGNhouvTv5sKnqjgSPNX2ygQzoMK9pwg2mtC9ZTs",
  "key30": "7YAsoozj5auEZraKKur5JBEFgWfnb93ovEkeGpjBCw8A758Cy16tMipn5LMDuR8bApysygpBvqDUwkyiXfaRLhv",
  "key31": "5c1DFoqkxaZA5yxJQkd1HUQ5c3NUTvSpuCfRHSe8yKaV5xnoNRZB4HpKV6JicRAZ8878JHWJSv4XUw97prBRLMWf",
  "key32": "3M71yRB5yxRuTNRxv178nx4D3WpRR3kLeAh4crivacQPAPW5D1dd2B2tPhBp3EPytgxND6SB1uvDn132pQNvEr79",
  "key33": "41nzrst7iZwQ4ZSZSRYS1zbmcCDzLGeotDEqpdA2kc16rdMFtKa2Muasu2UAu3C97t4QHdt2DwjC9L9SvrD9dDtr",
  "key34": "5zzB81WFJkH2vMSmbtbmrsrZc5qPD8946TQsmup6NnwJsantaEEkR2RFM5n2yaF3GZVQf4hBqnXR3Ux4wVCshNTA",
  "key35": "3M4JcGeSGaB7w8QcMXrjNFNc7PdHs6KcTPomo2xYMxUf3g3v9dcGLs9384cmTSSAsAZpnJ3jnb6ze1HV2D99ynEm",
  "key36": "4NLwf6JqN3uPxxzuxoxiep5ezyn161nKswwn43xBXQut28s29KUgBoPHTN96Px7DMXr3r3vPXhnB3g4Bso1DHFow"
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
