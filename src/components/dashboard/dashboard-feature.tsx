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
    "5ngY4zaCiuP7gtU4WwtfHofNpEwDWVJcoAF18vt6B5c7MoJ6UQ1FxTCXiqMqGDiHg1R5jSLdW3cjGcf69g1gSYof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YRUiAwmXxrzet4m32T6C1Tf5CjTVSB3XdeUrziqG7v7jimDv7E5EtznTxxM2hgbhGPcrg6XmNpbKeyPtp5bHcXx",
  "key1": "2rck63zrmrgBSFkwnzrXz5D5xa2nvJKcbPR1Wp5HLn9AbzDPStMqbTkWNWdfCJNDaSVgF6FarcADLGtKFatAxx57",
  "key2": "7MK4V6oMwMNsmP1ZTVyzShTTDiouENGEpYyD3o7r89zPYzS558Ci3dPbpXvfNLBScihKRBZRUjGNb24rQMKcMhp",
  "key3": "tPdj6SUAGFEpooHXct75V5LzxdWZT6z4d2hqM1SEu2dgAD78114Tjoxo7QkNXngFUekNnL3UztPoftYTbKTJjGt",
  "key4": "65R7TVJA7b7dVxS99C7yEsmuUKaarwT3VMzBD1KQM5Z2VDqoeKFkgyxUo9JJ5nXvSp7tpqPb2UfKQQhuj53XWBya",
  "key5": "2cZmcDS8LKhVEz3MNsG12RLwPpJChb9cRxYRR4KE5j1Nr1wZoHJU1roMfZCCVK9UoGjyTh8aTZCBu8g1pe1LtAzk",
  "key6": "2JMbePsnChfD1h3USyQno5K7kPKnnfLFV55j8tp4osRJU2csq4WZTMDwsvr6u4zVHwvGcS5wLT3YuGjyDLQRMecR",
  "key7": "xMMo8ocXgUY2Z3soHvSkEVtLLamtM2aTxoepX9zhffn2hufDQLdZUw29B7Z4aA5RUhDd9Q9fSC66DosaP1zJrYM",
  "key8": "3GgqJvsHeH98PyiZnxu72i8nXdtnR5hh3CnszSHNgHoJvRyUYT5BYVNsH3KAbwXmY6U1TtYtseyeQYUNGBXo9Lzo",
  "key9": "2cBJ2vBpxkfUMCxUuRifuxtNWeFV19htxQrmRpTUrJxAWacAguj981VWZvhU329x7nYt5U6iaVeQivjgfdY4BjGg",
  "key10": "3aPibpPeUYdbhtQM3AdZBAd2WNoy1p9JDVhTLoNZHoEZfn6bLkzVXvSPvmRByMR4RmLKM78MnrVW84dcpR7EwtEB",
  "key11": "4c5tapqc9XaaX55DtG8JY5wtJEzfBw9TREUpNvttJTmzRMBizFK7mGnCHkyE5DHtcZZGASLAmUHtfQ6pPuWjuaPs",
  "key12": "2UzfBgL7eWmtJiPx9HfRSTW2bXv2FkwJHXq9LMioNFCdLm87x9NsYPq6dqVUqbWd9oVjo633tT5eR23uVRdr19TT",
  "key13": "62ANMCnbA653xhMcgY494rLd4VJAKXfEn1rRmh6yuQADtVrDu1d2MifAtPwLGrQLuq96gPRUevuuQ5pox6p2ZzbW",
  "key14": "24jq8ZVTDV8xsASaKH56FHmUG4cjJ4okoTqM6VMC9kiUvncWs4Wty5HBKA159xxHZuUohnwnH9edzDLQxfWbWMAH",
  "key15": "559nkabehUCDKEvKFMhmCRQuURQA4piYBG1TS2iZ3dKVbE5Nyk9yrvECuoxcSEvWjDosGgEMxboSfeDodwXakuXd",
  "key16": "YTchoEyNXWNSfRHNavamwDsP5ew9RQV4WeYBCWcbRs65DaCj1Rss1y4t55xhcp5rUA4herKcRj3jBLQfczq7BTf",
  "key17": "G68AjKYDyFWqbXKkKdCLnbcfRakbHdJbC1gftUXHCnd6dSf5AH4DeTg44YDFyNXdPge6FERQFP1BijcCAS93s5S",
  "key18": "3y8wFtTKBMvrAGp9gnuNkM3oRLyJgDdxThCrozdZKpb9P6NJBQ7zTWyBx9xG1MpjxVdPJ6ULxCS1MT85xB8Ea4UB",
  "key19": "4A36iLkbKu5rCH37cJY2SLvgUHgWqwMbGSbnu7g1ywNhAmj9DbTJjXUBsbXA5LwNdMhPwaT7wdTkQZkMg5GENEs9",
  "key20": "4UG9JKhAmaz3Hy4aiQB19MJ5W51tBDbnkM2cgeskxnBCcotzzcVkfY93MbugkxZP5q62vCetTZe8aBbRH5QE3gRe",
  "key21": "66fWHz6ESU7qRgqgSZjB39wrr1bk4TcjfhpQNQmYWV9C6Zwk8CQ97cM6eLAZXyKzqEMgXpMiAbZ76JsdPTgDcNMT",
  "key22": "39DLA9KgnLsANeobeYbESki8VmBZ1rCVktKp16uaaCFb3J6cqQ24bAathe8Hxcrz2DyEoZZLVpSAnX54jxa4YLKP",
  "key23": "5WQHVFsSnGSbCkYSehJrnUexGN4m1PEQjTfEfGrKSwLkiperQUX8sEqLUj79eA7MpaYz5KosWy4m2AUoaDfFYaT1",
  "key24": "36xEKr4WTHBUYTruPq7UyisDJ2BREnbZm7fKY37kimkerat3vMCnqMChUtcrwiBpdox4NENipk1uuWF6iHb1UP2r",
  "key25": "KsFrCQhDXS4uenmKRbznD6jSJNxnoivxsRvwGsBLMtVsMzSunZQtjjthYkiTpbMKaEoDnEHMhgnLDuNmtdcjbgf",
  "key26": "2o2qdix8Y5pejSrZpWiRrPuZt7p8NUT7AtvR3bXuiiCzQrqZfszpKm6YcA8jFkyZbMeb2wDg7YwBgX1VfpWgNA97",
  "key27": "3RHB46NmEEH5WPbo8BDR6c2zCbr3nvZPJSRpPeqb56HuzjPb9kMygQATja7voWB2VD69hmnMfRineRnJBhRBEh3V"
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
