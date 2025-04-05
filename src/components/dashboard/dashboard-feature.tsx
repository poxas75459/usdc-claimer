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
    "3dcZ1sjnfC6ym9Dbo8vfm2DLTxZj37rhSTigcnDsYrq4knFMkZzBytZbG4jGgjVKtRQo7M6NAVcqJadsMZUcwUDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1LjbkBVyNYCYmB9TvkiQXiFcHGsn8EBVaDGrVmbKmoDZLxAzFk2qsSoytJYMG84fmARzw7Js7YdrE6vqYNvFYM",
  "key1": "Gr9fLT98yCz5LRLx3JPtGDX5uZrFJ43pLpRog9F7L9UH7ikgbQdEXWNnDnRNVgFGA7KjudBfK86gjXbjSMcF5NE",
  "key2": "bZAjFF9xdYFtgazjC6nz82pt2szbCToJFAiHskVXKvU2ncMvTWSZFmibYomKLkfPGq5jtEoM8q7Z2KeuLAmyXrN",
  "key3": "63EJ2b3y3kSR1AEFMqdP3FfWKR8sL2xTbWd61EQT342kjvwbXaTUAXK6ryudUriAg76YwKbsH3CD4Bdd8e3N9Ry8",
  "key4": "5wtdAcUgsPwja3NeYasbPhj85RDksD2v6f2ekCnPLfB9mpXtLv2JiRTJXmEXTvgYYtKQHbTFsyW1uKfdMhToP9BY",
  "key5": "7pkHfTacTes4x7hKxg4fxMDaYzNxbFHTQE2gKcGvB6xdQFdYX4YM7rZdwrcHwU612taPHq9dBmMqsp8XE33nmqC",
  "key6": "2n7dNxbMHTEfjJrzmUgfvoHdkCbvbUh6CDBzx1QNw8jBMLGw28CMLbUqAwSD4hwwL1CALpPPTTsrHFb8sVJLJt17",
  "key7": "56HCrV6j4P9i1D1XappUbVchCrJMMpWkTssM8HkAKQAuCuKKX9LeQksvSARfajzyDGF3LS3ezRdqN9RJHHwXBaep",
  "key8": "5LPS5yESX5zzUiLXwvk8RZixbSeqAzSKed1xyK1zrf4m68nzmEkMDBoV78HjSds6aZ1NreRU8TVqY2VzZULmyQrZ",
  "key9": "665afLEdRNtJU1zJFrdK6nPZUdtpKv7GYPvws4bfY1nTqeVT73xC4Q5YyqNAfdpQttxBV21jEAXoJ6aBT81FaWne",
  "key10": "3UKF2Myowyq2Cz6p43JekcPcPnWbhQsiSfbyorSGxnt3dcQP3dG1Qbf9BiPdWWxCXxBv6ttwXFMoWY3i9pvKPpoJ",
  "key11": "5SBYg5NEFK6D6kyejGnr6PA5TdYvH5cDkCc8WpW8NsLbKiRh4SrGuDc8caiE4BuJa6DXQJ2hyZe2iEECofSwYa4L",
  "key12": "q6E1DJZx1LRhXyNeuLrLVECVuMYX3tbY9ququMZ7riakTwejnWJFs7uJGCaWqzKVy1bwC47hXhCpd92WQRH6Tdg",
  "key13": "1TEyztvLfe1mz8TJCCR1MgrzsTBusrRj6Vw2td8Tho6S2oiU849S7fXohs1uyUQVaFLSFqvY9cytLpCanjXerDH",
  "key14": "4Z1K6cNCvmgVK2WzUbzFx2fBgnLcL4Qw5AEe72emRsgqz6xi4guLZUMHnyi663tLsWHHvwJGy8yM4r1iGAmq8tMv",
  "key15": "4SUifQ75c5NKYcturpYEftV4JzJcbdMhFDezAJjgS8nrL169tprrhEsAZrFoEYmCm2k543tW3QzrS78oeFaBW4Tc",
  "key16": "47VQTi6YPJCDpMBHbzSZheL5XjUgip1KozsxE6pvX1E5TwbEWR61t5C6RathvRgrESTneSiEznSpwN2gZ7KLC44V",
  "key17": "3aUDP86VeKiQ639r1khHgdRZeUb7iVJjF2SvAXxomcnLWgbKBZsoTyLCg1zFbFMhKpBhuSMhcUV3kr8odayZdTWY",
  "key18": "5BSDusV33ME196PTxYvtZqhSaECdu9YdgVFu7K35a4WN5TGbDA3q2XDu7RtooKLDKAacsHjh33cCoyXsVx7CBxA4",
  "key19": "996NJGrxPRRvvmkhskKKBcSTvn6GK3vR7zKF6rFeHVMMvxqaD5w8r3V15dmZVBkBRaSQdffLU1tdAAyeHfgMQiK",
  "key20": "2Fut31YCNXzqMqUhoRB3jzABYY5cZe2Aw9YZwKs59PQKW8NDXvTWj294sDu9zEPVEBqFYw2MYsqHYSArFArsCGvM",
  "key21": "3FKBmfxaoJYzQVZYHAxKnb1x5eU43ZSuKTR5bfkszjWoYuU6apyTBNwn9mediMEh2E8GiavPaFbXPsM3KdTUvo5X",
  "key22": "37w3ksQHFn5dEhK4S6per9ATEQZFAqCpTYKmegxrz9F4WWZd7gW1wyF8o6AwgdLF8UrWCNkvkgYRe3acXypzhwHf",
  "key23": "MJ9ggr63X6vacgCNDQu5MRrNdwM7LSU3M5AdeyE7F61NtovTQ3SeHbEpX3TaVc9eVviD67EiSwuKXcrX9bmZGYA",
  "key24": "M4e8FLUJXVd3UJb3XrpbVF3B61nELg68BsWwguTfmvmYAwxtcPXLrCK3aA4xK6LSkuKz1eh4yaBuy63Bpobkz86",
  "key25": "5Q5u7i2AHcJqkRR75EvboRMY721pRECmNrrJuzDW1FeLVNV2rtrQm5YtfnyQ7gpCnXfQLtfYunypbHgar4QP5X3b",
  "key26": "23KEF3cY6jruATsuGvp7N9efodAgfsan39Lh7LmyqVfFQ9fBn4UeY9YBoTJNF5JL6jcgJQ6YZ4MjT5pnd5NhWne7",
  "key27": "5oUusAuTNhYkwtxW8xGXYP8C6Pu5ztHxoa4EWmHx4ZnuA9ZVjdhCM6xdri2ML2qS9P1r1nuNBK1vzwysTDZXfLkr",
  "key28": "2cSU4RHA8J7vjhF7Cr64UqAWjKwrSoY55CBR6T3RJBKEmicNLX8T6Dtnhm3khdWyUgSZrXU2Vy8NYC5SmaUcftuR",
  "key29": "51PmAZBNfqW1HPLXDT2AwoPPhwtaFqokY7KxNpp44whuAwBvzXHYthvYveRWbhjxCKahkyEmSUbdegiHnQHAWDTt",
  "key30": "2zcWKwcPRH25CzrBxdjh7QVyCrGxPKmRHVo6unuad4tkM7xyGcQmc5cUgrPQhJUWiFWUwvS7WJzdpVqr7jjdWEq2",
  "key31": "2oUnEzCNwnAzRrH5cwBVCPdcMuksx3Zic25Bb4FMoFxoK1M5cCs1M5TRQ4wxuFRaZpPoKq3ZZuAhCL5FKEu7gEmf",
  "key32": "4bR1imXosCEdFRHJYk7dpPaPz36PmvJ8gBSHkyvdw46McnizeF4nkn2cDpKLCiqHytPuU6BbxH6Hfo36gsB6VT6T",
  "key33": "5FrhP8VATe8ijtykPFy5KbS13Eo9srtrNQja9VCk6DSsYzDbhU6TLBkATi4RWuJScC2S8W3auAmy197MUArF9yrF",
  "key34": "567z4zxypExMbiFnBA3WpSqXKBRsMLygo5SYKmHqphuSCsUQpucayCW77BqfF1M4vaXr5cEEowew8XpVb7ScSmas"
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
