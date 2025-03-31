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
    "565PjhTY9XL94tjYy7jMHuBoK44doiVbdsMDsaB4nC6DHKWM4uwfviTV4sX1DTFp3vPg4mQjQTQEP6QEprNzGdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ptNAEB6S1gQBte8KbwFqEQEnUoBYf6ocwZ7QVkjeya6f6mU4rCiNqMq5QymugegoeGHn3z1C9ZcEbdKehhpDcV",
  "key1": "3SDRR6QzV3seHEXxBNSmjXxEQwhP2WGZKbtokGNxrdE7hUT9HJoBpkzwU5RRnJctxK7PdDa86JPMHGv4NcuDyvKm",
  "key2": "5joih8R4dCYJvVLQv43bqKNCzy13dUa38cthBpJJ4dVFZcK4bz8tZrBnNj2wD7Bpp5c1V1oMe6f5fibwCWYtEuJs",
  "key3": "3ZixCqTuqAdv7iFjD5XFvV6xfr32YRCatjnsNyPNTy3q3NqPoSNtRtEAZHY5mayuaEj5GT78o6mW6BBcuVpkpHCC",
  "key4": "3owQ7hpfFbc7ciPCrJSYWz4Np1pNhqtk21gCZiJCJtWu9dBbNcDGYBtNsvaq11pWdmWFHcFmsuWU8anm9FwKuxnv",
  "key5": "xS9xUMNCYc61ceLNkf678PK88X37E4aTvJQmW3k6Nb5shoEqDzNjLUVZuuK3PaPEjKvCxcvthqnNXYAruBp47gx",
  "key6": "25PTG9Y6mtoNqH8jGRq5DEKiX35VDV3a4hnY8vNaY8ybVdxhr5hSJ7iK5n65Qb3f4quGC3oWqN29a42j2nFHzjnz",
  "key7": "3CabG2M2uUsQ6G4zPAGQBBu7U7vLo73MkBVt3KiEiRHZ9gVtLMSZnoyxPLCqZcA2hCfXiHiZZ6tfNuz4BoJzjEMw",
  "key8": "2m4HvnrzPJPjqa76vwfEgGm3UnSG9q1vNburm43m3UhByQgyA7XsAypK5nE2rGDeEZrqccSz5QF9eri4n6gM5nKi",
  "key9": "3iA9ywdyTUGtvkDVo2vcXmfSJ8Pgvzz92JMdTRcDzbzk2mgQoZWszSKdMdTJvh7ds7fxKqZzJkRgewnBzezYmKDg",
  "key10": "52aVQtmx4TVFXjUHDSggVraSntRXW77xoiCpURrKChLPJbPCJhv5rPohB71pz4zMy9rejxGopVBrGBr8Jwqx9hCE",
  "key11": "2oS4fimWKSRFWedL4gGDTd7oF6h76YcuemXReisHNcEAkG8stH5F8K6fmM4zPKz6XXCzqsQn1tva6u5brF4P8tJA",
  "key12": "3p23bFhxomTwsvAxw76frstrVi6XmStG9AHDS7TSxjYyh481awTj6CH4h98HNpGfRBNMnEnHSd6nyYmkJ3f9CKWH",
  "key13": "3gGximuACQE3Byq39shv5X4uEHAqaHULQguyGbSbMankYQzNXcFU3SLKUtr1V51cTe3GrWDCHrTpj91kGm1jKwHQ",
  "key14": "63MoMpqG7yt35sB5LKWyNWfZ9F51dJteemJNSSWK7RJpJ765W7mBJCReHjkqjtzd4pLmzQHukmrhL3wqfnaHsBub",
  "key15": "2jmUSGHb7fW6BpP83hWMot85LeAWKhRMtJBvtLF1UbSUywdyyMu7sv8kVAFqiRSDsPAq3tnApvgoRUjJ2LgseDMm",
  "key16": "3iCHYCEyFP6XGQVWZzGpDEru5HLdmP6YZZpZXzva6BCiC4T5mW4GbT25eU7SqkGJY9x3ik9bPwKvCJ8zvVYA8ii9",
  "key17": "5HPqfzXCoEf1LvUnYvu7SNuMoRyYt3febfqLHkGDM8vm8CWbE3sTetNr7j62V2cn2eZBzx6hB2WrG9kPdRdtkyUZ",
  "key18": "5rnvJHXYXmR3FfSk72MZbRFMgvx2SbKMCHQ4ep7vzaQipfmqKXimHnvMoKHdLKzscGSHdGNwJeEdZQiB8DMornBY",
  "key19": "4pzfzpwJpaKoyLqhomdVBje2CQpbLP8uTjcHf3br2ooCU7nsLHq8AnPEDQeaduKyvARi8cCWXFJwn4ukHGAarBXr",
  "key20": "2PnF2ETKkqptHS8JCe2nBBcQFeMwMktneUDxPxFNhkzCkbDTeMbPcgzkaheYELawF4iautKfBWXw8rzy8rR77dEu",
  "key21": "gnGyUp3VSGsnzm3ne4Zs6Tyw6SAQ88jQy4vvhgVEogBGx4R14hcKFxrWLNiQprkov9JN6x3CQRoa9SgfVaiqs3c",
  "key22": "42yHdASetst59mFfRFHHhibn2dQ8H8Zhk8ZMBUgegRD8CGY3sDJy2cgRAhhcGYpQMU8Lw8jDLtvVHRiXsaCzFKic",
  "key23": "311WM5JzVjLgULiax7vj2ChkPYQekFvBfXLb2oUYnEr8qkJ1uuoeNQ9vkBBas7axt8eek7BVk2pE5MQZ3ru47oRU",
  "key24": "5hyeuMiqKLtjkHrR3gKbnZKJ63ZgLZtP1zzdJ9XyejzzWW88Nc97xMkcJATqngHSpwS1pjcjQmpGLv5toaTesBq",
  "key25": "28ZDyjvHwdxL6tESiXdxsUPRiFS2FGr6efmc9RPryQRDgfbBcApaKQo8bBDoMdqSipKPyAVygMWsKJvorcPsSwLq",
  "key26": "4ANEr26Ly9M4MsYeXExSQqaEYjhArhmra8BAreVQJxqGZZQ6NTfNkzu2rKygbCFDLHYtgHWHX1ERCF87qnuL2VQa",
  "key27": "5RiRSKdBNSUgUXHpxYwNjSGHuQKievKu2vhne3gYekwd7Ayu3EqUTgDvvz2FsJHHKy4cuqTqmzc55NnJt5pgXsfx",
  "key28": "4Q9eyc8GraBKhydDKHhiNjU1HtQhKTBrcWmWGU6cdycJKoSerd1oaM7ao5Sd4dnfjzYGDE2TxezKF2pXQSMfjXH2",
  "key29": "5RiJ4u5KGyD6wP5eXuUPVUCq7BDWFFJp9Hxxf6536PS88vpWsCSKy9gU5VwoH9WHupS99CM9Gf1ZddhZe4Fydt5M",
  "key30": "3LJTnhm1t7tPPD2u9HT74jRgWzpdmd5PrmEfZmNozn5Da4792qzYKoyFPqqUuPeaPzeEskuPffXL2B1ybU736F4w",
  "key31": "m45ohM4nFNu2mbm1rmErDL8RvGRCDR9EoA2hiYnBVWfm9mqEDYfadrq5eyMn2dnRqfcF512yF4fpfyXt1QkUxxm",
  "key32": "3vDFXegdUVMUm2YVoRANXfKx648XWsLXyKT6rGWBNT73Ki6da38Xx3n2sHhW9sP7G1Q5T3c2WvmmwCzPqzCqRpPM",
  "key33": "45y3X4LNZFAUXTQwJbcqPCTt8V38onUugX9YviDLJimhA8APFqGSbynr3pDnLzoTrmAb77WreCyJPp3A2nVdMima",
  "key34": "4qd9iVF2NHWUq9Ymm29DmTjSrR5A3EMfjAfWGCt8MrsmVd81moia8Dps5vnZkRx1SvPEfQwGyvD9YitLVH2ezb1u",
  "key35": "38S9UajG18ANWodhbVZBHx7dh6EsdEkoXqDHH1t6wLGyArZG2544dRHw1T3ZBnw2tn5NH2LDq1Z2sKKBsz13NfFk"
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
