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
    "4iBoZDmMJYrW9GZYDAVhVJipGXf98ARaczdYmvRnhwFjEZEXFsfbSh1qhdtzsA2MdfsKnwG3SJeHE5FSPRTRsJto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66tKbVtSZvCMcdrSmyTxtYy3mLJzsDuKTFqoLurWNzq4XbLiaCtc861X8AH5BFAFeNZZcteBoY9riVbRE455kNvf",
  "key1": "4mWeEqbeJL2wSVhjrgGsGZYSxVR3bQLJnwgd8LU6w8s4ZwKXUPQRcGGq1qmpn91KjYh67k6fe7hi8XWC8Q9regHu",
  "key2": "KTjjLv1SCHKTvg21VV86emxUQN25TeSPLfCxrwQaszU3RX7ea1znarFLbYs5x9F5T9QfhixPcZe1MfYjeBhLaSq",
  "key3": "2iZP2fMBna6PGaEMUgDDutp7wNCPnqmxXRZUdHdrTSYs92xhptJ1xTXTy2Y4a4So5YGFnGBbymnXpMmgkzKBRK7Z",
  "key4": "4hvJYfTmQmbRRRKuExdYszkGiNtVNgdE92k1YEBMcQufDFg4QZNXruX9MhvQqSJNjKg6gTV1bxTHoeBvK8p75mea",
  "key5": "3NEEUY51J6uupfFV9rx3sK1nXMv2iBcpT4x9MPzChKF72K9CV3PBHd86EKbSbo6fjp6QW87io3AuZTsokKyVS4z2",
  "key6": "2Rk2wTtRahoUtsHNpQDtwJ653eh5CcRxeeCg7QKDkCXGFDd45PPSr6DcVqe598bJbm8UmQciMdoDxoibjhLW9Kvb",
  "key7": "41YfdDPDnx6YEZzKgUKyAhq2mTcLkxjxhVf4fB496KShtSP8P1f6EbbU7HbFMo1ZnTP8iZgkBN9PrhtA2sfYWMzG",
  "key8": "5YfXGCxVHcLoF4SgyyVnan9awy8VSLJQkbBRvYbSu8tZespZC6vUtGJY3iN5B4u3u6VapyDHZTQnWrjaBNShFxRd",
  "key9": "62yMDacnZmoXRCuzQZac8NiaaKoEEaBbmP3iuToc2CAtG7YhpmDYQcXycVqBbKSrdNc1A6h1W4963LuGqbxfbAut",
  "key10": "3aToMvighjJh27iXh2bXGmUsPpy2Rh3b6QwBziLyhJEiGwkJLjEyWC3XjBoWfxUCWiGewGd95dGT628ucGeMqtco",
  "key11": "4kEpg2pAA1CRSRpVBC7yNmvRi3xsaRpVhkJBCEmdonVGtehoQA4PFUYnNzUxgKNptAjT1mX9Q75HACyNuhaB1foN",
  "key12": "2QxrLEMArzc3aFZqZZP8ojoccsnf3bnpMp4wRPrWoEJukzWe7aie8PC4FFyBTr8XAyi7wQoUgqV1zTmbCMbhnoXV",
  "key13": "4z9Uy4wNi2z7JtfpZpow7Y3dqYrZR7aQsxRfkUbdnkHrGnAX4amAjBF1umKDEeETh7NX6H4h84yHKL59XkWthDSy",
  "key14": "3PzVEvDh6AZbVcy3UrU8Loz1ToXgoRTgr1mYHc3kpmzPWoT3gRzLiLm7qo6ocmoYggSsPm1hJrwbi6u2ypU4LZaX",
  "key15": "5xLVxbYhqAn8yWW29t8NWBXgwoqHLNP3zkRv6H1UGY3dXPzE7kBGPkoQGaTs6xCkKzZYsHZzXNHuf2wb7Z8MJRUp",
  "key16": "PNoRAAQ2vhnNSJCiWHaYuMKkUMdJ692D5Hzn9ZrAmwwrYpKpFW2ZKntQUWe2zeijzwjW2SxUBsDwhwuTppfXtvH",
  "key17": "5GSNYFcieQ2HQWGFSB3qYn83z8vRD4hrsm129Voh4t6EiA9KMDonLjwgkquaxVz8vZKhfjCEvwWNyWzimfFa9MFb",
  "key18": "4NSAVZ3hA5k2bmCDVQ9ea7k3UFNMWUpGCfhh2d6ta4Lc3piLSq8o5GekQFj3FK4CzY2XDdf8y7nFRyQjzWLaf4Q4",
  "key19": "4rRqg1FFw5LzFCmfa7pFE76qFHJg3H5R61DQ2wZNpVTvnUdBkRTjuzgctKKsBSo3qpJW5sZutx65QsdL7BcnQXna",
  "key20": "WZLbwDocGKf1MVn1gaPepPsNmQsTHYsEwTqwPdWavhi9f2ASYBu2iE6vgYEpDd6L2dL4XubmEZMLhBaPjCg7U66",
  "key21": "5sWFUJCD28KVC5DFXV2Mqpq98vjQpF6twv3DRqba8rEjum6xYfBk5HGse5gDD5boT8xawJ7fYtzkoAmrK3G28nyT",
  "key22": "4d6VEkhNeareFYT6wxCoojmiCTTciz5WdJDmBFahsWV17sUuXaJG49cakZn6hwgaPtR8R91Rw5D4EapxeG4Yx4XQ",
  "key23": "8xPYR1SqhCHmuM7xbLnjF1GbPeUwPbaxnR57e6dh2R3tqH9Pdhe5NHVCvFjGdAKPQqKPmL8fDDBEJov5iUQmry7",
  "key24": "sZqcETPNSunVKsnMmyCGV2E2KXdCwooK16KG4wEg4csMpyMyX1jW3QU8uP5KKgEp5XX5cEfwtJUEfnG5dPYgTAo",
  "key25": "46y6zeUjDPAWvebJxmdEf1bJVNuSh9M1vYC1uVtuXQgHaP6pDyfnnJpCpJMf2X4xDzc6ybY6n3YCLr2bVPTukhDH",
  "key26": "3inctVCJoh4NHdFQFMbAi8JcfZgCpsriBcWyUkh7868x6ngbrkWLjMn6vNG9afdrXLo9qfV2FcF1j94eBmFSLzUm",
  "key27": "21iJc4qZFt2LTycXPT54C7zANyr4KV2SK2HRgizWQXS1dcF8iKMsFxYWA1npSCodVG1CqdjpTrQFQ6T1n7qoB44w",
  "key28": "4BkgKozMi9zFDWdAxV3kCgrwMgovS3eA81cuHggpvAyxLrtJThDqjhqQUfuNwhB8ZKJRFUHpqKdVegqXSoJmx9oi",
  "key29": "PKMFKgaTdsnKEaVeNjEbPfJAZSSjt8m2SZreL43YGenG3fe5xkioYjFjVfQGo6vg2uNxJvmuphBoKnMGqar7pZq"
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
