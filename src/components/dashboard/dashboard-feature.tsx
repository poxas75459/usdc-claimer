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
    "2V74SFnEj6RCVtjtyYJ8kZ4h4Mzv8DiQWKsxVB4mUXWB2cQF5FwxXdjMXFMMNTWTT11rjqXGQEwatRqW9yvExRPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k7KTnVwnky69gguHMPf2nxteurNjSozxYoG3fWohbLL5Zubm7MuL8g7qKzw11jTxi3sVneXYGrvksQCoW1GE6ee",
  "key1": "63iXAEtKBfBH15a49cCaz5DUh36ePYhEfrZ8vu6CUDcVADYMWpgp9yyY76hWhXFqy4jZSbkvvxVUYzYVeq6QqBBA",
  "key2": "5mJwjxoFAygT8hnXbSL1t2TnTfP1793aY1RVJJGu2fQqnVjDgyKgg84DHB2EaQhLV4PEnRyefaA32nqL22mLW8J3",
  "key3": "ivwpdqLVpZR5mdMS58h96cJ6XyjDDDV7FKt76jQuv32BHrCgHzVQBkyxVMPLE1Tm49hMen1gMcup5D6ogeMe61D",
  "key4": "2c5BiyH9BziM7KHfe8dXDqRarW6DdvvXdTjjMq1jqJ8PPj6vwCWKhx43RtbU123gDTCKokuL2p3Hv8ENiay8mur3",
  "key5": "GAVFaxUSsCH1VPJGQ4iF39F2moJLBpMKrmeQozJqT2CmApx6PGqc1rk7xWy9Cou5d3dCoUcBur6kcpPi1saUjnL",
  "key6": "4sU3p1xLVHVNgYnCbKBKZtqnyDjxD72XeLWSDgqEP3kfs217YgLUu3VhgiAy7rHyYoBLujkxC7UqmANbcwQngtni",
  "key7": "53TLEs9rPnQuzrRxusAmSF1DTZvu61BS3PuGzmAzWoQFWLqe1YWREKtxDQN6drt8RUWhGoSRFnzB4GZzFhxkA7w4",
  "key8": "2WvzcvfBPJNECRuzYmC1GwVcbGDe8vfK6njyaFqWPg4jdmxuAenfmgfVEZBBTBA2e11iMhbRPQSZoe6B9JadW5Ht",
  "key9": "5zNq2rF7AkT2c8nRa5edBTvy5hfZxiznzN8HQae5LBs1rKL789ruGDX2MBTUarY8Ud4BVSi7A8jtVWwgcgesbe71",
  "key10": "4caTRWj5ZBJ6SiPfSw3BQWKTBuofGLmmXQRowJZKbsHTGKCNtUNDeQwDBpydsh3zJWQemWvAczdB6eShnXwbq7b7",
  "key11": "3DM5vkF6XrV9Vyqk24KRQ7Hap7STmU6BriU7zubKecyabWctc41qM78BKkDTjs7mupUcBWSzHYeJgCbjcWmFwi2d",
  "key12": "3u5k8fmvkZfmYBa54wi7gweF6ZNYuu4atNthZD7EPxHQTq4DYhidP83xQPsmruvG9EvQr21E9Ls7HYAxrhRcvwZ4",
  "key13": "4w2TsWAWXT5RiNvDvbLxEXAXaWqmWaJoNvPvPL8mZah9Eguk5eG28bEKcQ5hjbi2Ei58M5kyTNz7NJNLvwSdmTvV",
  "key14": "4jjygUHcjJ9AgKKYHbYpBddAzgTyE3maezkLsWhGiBDoT26evbREGi4vLBHQB7kdvqGY7EcBCxp6LxnFVmgDchH9",
  "key15": "2jpWjNx7emkavCcY2Yz3fiJhTNmCCuqba7o19idPUKZHqZfzpcvsgh6JdevfMeYz8vjH5wNfqmxqmsx7JUSJngwX",
  "key16": "5hMjuW3FqXAfqb953t2kG1xunGqjPTyQmG37H6TjPeDQ5y5d65r6TkQRBPcUA5XSFPENZWZZkhVop4LgMwUdP45N",
  "key17": "SEZ7VKScuku2RkvEBu4MxovCrqxVwThbj3bo4HYHNgYAewzjohznZWSq95X1MSpm2Fua4N77YvszYVpdMHxDx6C",
  "key18": "3qVnGym9ZbnvACynVuNNjL9WAfUzhWbUjKQq1itszxyTVoB9rLhiZN815AUXnn9wmP1zhrFNj1yK2nMpQUrMTkby",
  "key19": "4vun8YZmCCb4avs4ai4Jk4WRMFSyW9rVcQB2LZRot45LsA6z1N6uaQpSh8nwV551TTaQKQdq29GyVptuTAHJ7Fwt",
  "key20": "2uj41935YCApug9MUQPq7p8tttwsG3Jn6hTEwH2w34DqArgeJvG8mv9s51gjiXxg6PsxNtmZ1bKRd7sLDh4zgbLi",
  "key21": "56XwPvxa7FH7hUBCcoCNTv2mEYFPykeo9HNBVtjgw7SRVXxV3awQbqPqQs3eZZVuncqvPVampmStRJR3kEfyi2sA",
  "key22": "3BenGtHP7ijJRTP1TgdGUxfuozxc4YoVLV9bmzxLRXzsdy6LUWLZjiUcydJ4cNi9R2C67roFTPLacaiEeF36c7ng",
  "key23": "48Y9ybeoXNSw3AouRA5y8yMSDZqa5iUWV4Ff4jQLNUH3FNLS5rUkfU8eNjeLniBtmDgi2conknMQk1Fs2DyQ5mgk",
  "key24": "4wpRmQTNu67bqw7egvW9aNun14wAsn6eW2RA6AUiCoW1H1Me9ykB5611xmwPc9P4QU1KkZcuSqpVv9pyFsNW99pC",
  "key25": "ncQSjtYjQQwkr9umeV2xnihfDJjJXPHFcM32HQNSVy2KPemy4uizWanxxjkU1ytG8owYBfS3H2vwNwZj3DzAVY3",
  "key26": "qZVYH81MgJgXUWoj9Be1nWWaUeX3P9crMkqriLSUyysEt9rz7Yb2WrnW8aLarrscSGrcKa7UNJ1GdWyj9N9tWWv"
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
