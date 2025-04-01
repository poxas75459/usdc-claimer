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
    "66ZZhiEhTCjGmUbWkA2xdh5dm1Rt1yq65n8bhkH5QKCGSknmaV2JiJAwomYaNP4GJ1i5UKgYoYQA2poRKfTRFKfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EGVTkBEygibmmS2Y3NoogwWXL7u3F4vPsjeQhSYe5Wnq5QVJibL2htLBt8XYKb3pJza5VoXQAn8FkBQhyyrRmby",
  "key1": "4jFNHDPgTdKcdSavwP9wfLCnRRGynNymZwcYR8RAKkQWhA8R3L6VjPuy5W3UGfk5U6WDCsG66p456QdYvSTihtWv",
  "key2": "2LPCjnTuNxozpz3sDKz2CvLnwk8YqqRwCHh7EwSSAwdgazKUQwMcL9AyDozKoC9MPygdnmxZKiJRympg63172tzC",
  "key3": "2WtsWDUB6YdEizgYYPzaxGjh9V16KPsL3QyGd71qnsDNHYY54mFHALsnmjGCp46cxMhm9A4qHuxPi44iaXbMreYW",
  "key4": "42YAqBSCyTKa5bX4sccTWbdELUa7dKZSBXHD44BhoDkWhiMub81FA9tb5HKyLV9iApbU37JtQUKw1PZuV2jiPKtf",
  "key5": "5vqS8bSHMWXK3sj7432ACpeYTYnYF3kXiT8oJ44bZEJWRUfhDwY94vrvm6mXHmgyeaTc3bHavkWXMfoKK7ZowN8P",
  "key6": "5U5KkfhfQBtZXWYWTS8KDgrK9GPBnMAErvdADzAjLzk3BJUMKTCXCR1CyRo2sTA9JhGFVbLY7yz3P6SsGPDvWwy9",
  "key7": "2ZKvtSXMDSravZ4ggTB68g8UzSdYzEm99vXFzncBKSHcY7ULe7o33xSwSwES75au7mKCnEAHP3E45vpU1j2tz8Yi",
  "key8": "J3Eh8EnttoMGPB71yH8zHEeQrURtahtnEpu88XUZTdm7RZkn5KaberGMNeyPfTJ69aS7YSkwhoJ9bZVw65J36qb",
  "key9": "27FxgnH2K4GEiaWwNwoir1ZHB9C8tMwVjPjjCdBPV8hfwRZRR5yi3mYG1Ehdyh3RL5eebAdccgXCU4aoYArCnbxQ",
  "key10": "3QMiAKNAtM2Cx4JkdcgUcFtDk2yNNxCxcihnAuebibkRr13yyG1keWELw8XJPysSsN2TghstYFffUNRU8T7zu3FX",
  "key11": "9yb9qyADVWy5y199daU2eiCDF9vaPPFRCZmx5AjMEQsYrq2ZZp8B57BEaxfJsq8aJqBHJkcGf1pqPFNvJtxx2BH",
  "key12": "279aLTZ2LXaPBNnZ4EHCSJDxy8XBQaMHWDQpvKVGkee8nC6mjXeeUngPXqdk5uQHoMuVub5JJX1DLtGTnmCSNK2y",
  "key13": "3A16uQey5tjxxKydh9inZgiV6otcKnA8N3w3qfnavb7F4B36LB7zqJe1XRNdQoahUEUuxsuq2HDWRoR5RaKSwyvd",
  "key14": "FjyAPuSrrqm1bGPM33mLb1RQCtegK8BdqMnb31V7RjPrsy51zPXKPAqcLoQRGrRNA7B1YYKc6Mde5rSHLPCKNwK",
  "key15": "3V7zRho31ocPAHuYqxgMPwvX3QUfmB5d5kMf4ESCV6tCY6wQo7KXuW3sHHZN7EJVKvxYQsJMNgta9MLevjS1qSM5",
  "key16": "2MnXWhLKLkHZUHvbCgS3uLAPdxQFsKd5PAfs1NCeQd1QtkrabdCfyQ1Bfjj5QmgAqNVKy25zXfbycUkDbio9zn8R",
  "key17": "54tU2eMSN16idTHGK8K5my3YPP33f21DVaY6ntuhNZM6UXihSuZgsDpPQr6DFSP7bQYMECTQoQJctBkLhBVG8GzU",
  "key18": "3AXHKcj7CXLiycd2rZ2UuJKJxaVHoFR63EwbXbbvZXQCW4JevK9pbQEcyAoDLGeUWnAaz2TSkiSwJku79zjMvGYS",
  "key19": "3eXLEF7TuxC88hsBAkjfNnkGpbmVxYxVfBDLbPHVfjNQG5MowTmf7SNJfMRqkBQCG5bZoFFcuCMtJmzXYKmcMEqF",
  "key20": "2KZWJqZ6rrkQpTyqwrfjDkxjfrkeBMJi7ENyt7n62sVDEfuNJrfhQFsvsUYc5bt1nKWjsyHiRvdgnYmecsGEgjBT",
  "key21": "3gCekyG2F3YBJQP5R2s4RW8VRFbqqV3dcrNs4ZEBziiUwZxcWeQCdPPNMDApCrUbv3izBK3occ6wRjy5caUCVNWq",
  "key22": "27VHr21z2WXH37nMMEMSQPFCuqiZCkMVmSEAH8AuAMACfa94YWPbRyDrcxPAb2p1kj9k24mh62CkJ1gURp7EVwG1",
  "key23": "5ESEsJfn4ooEyt3YjqjanrwYFfWAVXB2NH7P8pSW2r7rAwVQJD6TWThNS26HEqtw3eorMznrniJGHT3kQTizYarm",
  "key24": "hUw5QtQGfFio6QAz4wLT6wtQBbRiPT5CJPuntZnxg8MtrxQi1r33PvBnp84BocAgJxyBQey3F47wQeV6vLeFABu",
  "key25": "39FPNqwmYVL3JJ2SzRYis7F6ExWEnQyAdQGKH1rn6vmQxCfBNBHYbo3RtPjedbN7cf5yBkwbGrfpPFwWMgc6DsqQ",
  "key26": "4bZ7StiCEUWsDxqxnD4jhLACxNxiBSJKpGM1VHidt3bTHFPZoNqDyzazFEwTEZMQzwRS3NUtJwQMj43aUnfZFutP",
  "key27": "5zJwt3D45UUJwarmH75LRZX5ib2Y65KBbWxmcGBHUN9PjDN54EWn2TWhtdzdg5TY8GVFM3Z5cTHUqpB6M9w813Yi",
  "key28": "32ugvrHmQecxks1Gz4t4yf537RbYKWjCzgH6RbbfwBsowK6h9H2ppq4EXhiUAqMuRcUVvhS43FwED3aodVu8Q8dd",
  "key29": "3vWSmLsjsnpdHfeQ4NicST6fPkCsJSDseJ8HaJqbpfQX1Kk1FTVdq7EGh13dezPiuos74iADFjQJWEheZKRHZB9c",
  "key30": "5fGMFGHxKFqKCDZhB48sADEqoffufWeLJsxrXRcZAAzUBGwyUoZwVmTR2HNXL8q5efG2YFjZgBwq8xtsnFu9CR6L",
  "key31": "4tSfxmjMFANWUqmkoCVogup2zyZf3P8xFHLdWvMMXfQ8FLcVMW3ResK7WySv6ZJcwpF9UNqK8Cmvtog1C11W3Tvn"
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
