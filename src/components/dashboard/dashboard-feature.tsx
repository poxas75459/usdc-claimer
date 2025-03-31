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
    "46LsBR5s94B7MgpU7JJjMLyHVMDxfDqWpA4tKGmqyyCSEMJhKCYqWwsgsNFns9r4mzBkLAMq2hvsKauK9425KLdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXEaehsMfBghBtqmNJRd8nkf9LZ2N4i7QPxjaqZtYBiXhjpEeGxjmmkifEUx5pHcicXxHWFYTadhC2y5eUWzHRC",
  "key1": "2NEjoUxbjCKRopF7hfx6yYRhhF8UzdyTH489wiB1vFLFHBigAXc8rqne2szzQiGMBwoth7BLPamWc8s6W1nWmSuV",
  "key2": "3hmie6PPh4Q1WbsrT5dKiVNMxbm3Jq2yTGAeVcA9fzLSrDQiMn9TApWcymYV2nyVbPd7cTz7MgEgFFSGu5mfYsM9",
  "key3": "2t6sDNDMRXFHv3HoL7hmkdrH4UdLwVeuqBq8fxAhGkM9cb6wGsijASK3evnLUHLcMpTa19ddYBVg5avJ9zCwqUW9",
  "key4": "4wXbZq7JSphk7XvyJufEgb3pKoT61uFCHF5Jun5wWySAfBcKrQXvFr7teanPn1rJR7gzHnoBA13kcPEQF33m6c1m",
  "key5": "3nKWPkv6vPZw6eNKf3fkNRtNgJ8UpvvqfYFMcPzW4covFxoxodvrQVqHz93ykiCZSc6z7niz7T7G8ZLkjV8sWTSQ",
  "key6": "571L1uVDrhoHcTvCG7FieU8VSNJE661QdAxBVvj81UkRfCMR2ymD8KChKFLFv1Dhx9bKn3oY8AWmfJUtRKaRw6rG",
  "key7": "2ARiDWay2NHbCf14BckGKxRowpge4RSGSXhi15kQRRbspieNdpAhaaqi5VkuURTZ2N4N9Wyd8NQx9USK6oUpoxDu",
  "key8": "63zGLoiGvPJkwQw2Y8C5GfP2CeQ6PDf1ApazAYMw8LcGNxg2DYyuY8QekQL7k4XqvJia7kH2LzQUF97UkwxEXDvt",
  "key9": "rqSvHDMfV8y7nz7z29MUyutuDcpjJe4LrKDT3Qx3qmvaWyPjcb2TaEAV2tuRcxWfmXLY7pV6Tbvzm6aCJseR3qq",
  "key10": "r7KBQarrh1FmwcQgsHu3as28XE24uZ7X6UMpeCeHh8HAmgDsWucpCvpiJgZM1VUH4ztYhPqLXUGxQHFnyK3LGUz",
  "key11": "3kiY9y7MwMSNpbwajBAzdsfwnZz4FhB3Fdtdunz4FNrq28MNDmCyVv77wkxjZvRHdmwJS6LmgaxkTRPcvFSJch77",
  "key12": "f44ZXdL4UhNq4NMZpywiazX5ghPFptVjx8nafBDKZfm32kJuGbQWCxH6Hu3KR1W7fPyMSzoQx7bJQ1E8cfhTiyL",
  "key13": "4NgPE1pcZAATfsungBSDBXy7E8xNn87H4vzTCYRxQMF2Wt6ywdYUUw2VKT9wWvZhVYSXpCV7XpNQNRJHEh1otWuC",
  "key14": "3BRzHxMAFS8iH6j9TKRt7uXKSLc5RHWrkKvkgTmfbnZZR8ze88HWrYnFfu8WYHZvPda86VhNPM5ZmUUJE5y7Q8Cx",
  "key15": "3dRbdB7gQ6rqrZQfBiqySnSAr8SAkVLoZXhraZHyrjKDfqY88JxRfzLLghkQ9FM1yvU6A3WUnwkdFob7yq2JezUn",
  "key16": "yRq1KUhRBcbEmNVCE58z8eYZBCRs9tKm2RYJGpzxUTYHJbdjGMXmc9QPVqo4VwLhr7WMKwbWUdXu12rSGfz4rBA",
  "key17": "47kZcJp6K1feSKZ3Bb2jSY9KUNZ2mdHY5x2j1Exc28djNjffxBWCggMcGqGKsjdKKN7ZXcnKmhnMD5Qsvw2w3t9v",
  "key18": "3JKiFsLKHRkkxmwCb6yEZHpnFQB1YvXExYS33cN1e7V85eV8eDHv69nUhvF3DggC1m2LmozfstrCfU3dgniWZ3v",
  "key19": "3vVZo63cmtagXmiLthK8ixx3jXrc7YgKscb4kDBZaVDKoN2SLAWB16CYY7rDMmVMhoAKmtUN2teTbe8XF9LQEtVH",
  "key20": "3peeJMHCZkYTzuoQLZVtqC69VhNX4aMXgo6UmEZ1TvxTP6Kciz5uZhkrggMXx8j8BpKGi9DEkr715kbq1rmJsipc",
  "key21": "3vrMWwNeQGH8sq5zNmdXd2yzzxfUHJXmbzLLMo9hQfBo9R9GX4To3z1GW7g2dFhqM1Jv1XMHrbsuaDk3aucnWcrS",
  "key22": "5hLMhaCbJtkWKcGkFWsxa7eCs88zf2tfT7KGuX31NeTFsBnSvBAjurr2b9dhqRUDHdBURzmMYXQzk5QLQX2H8Cdr",
  "key23": "63GaoDiRDLXeVX8WuJdRDGveYdY6R3XSFTDZEVsmQzYBE7CfAaqhtpLA2AqJK2vYDi9ioVqkgD36jpcXas8BtDEf",
  "key24": "5nJiEfm2PeGFHKWEzHQwEzdqqrTPhiEiomeVvQVAEuWTLs4JCpRUvWwcyq3cQ67sV3WCGsrYfrkhAdL4qsDY85WG",
  "key25": "3rnmj8g7iT9eG3cQbsAfgonZVsfAJovSuUMsHsSqiZE2fMVnKZEyvWeAqoXkoWY7MTUvFaYgk91Ppum64xYfGM24",
  "key26": "62XvmX9Y9xBAzb25R5cjfFqGXAN9UNdUvixHHKcU5FgVF6n93qhSgUoerJRWs7WKGxHJY2Qn6CeiSeTZp1emgCqB"
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
