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
    "2QZBj1qwyjQcYxETEmhJ9DvvU21bvdUnVY7wqLvcRfU7qFE6GLLhWSPnRYqSLuKzbePkVgEgBDYz9fXosV3Z9YxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbySyPTMPYgvgnTccc7qd9hXmxzpRuhc3ZSwpBDDJA1A8jwFPRU3oas7M6k3i3bU9WEQuDBDHab4MqJzA8BJBga",
  "key1": "27fzMrs7wvKoviwDbvFw6tqMUW3K1cMaWm2XFvmBPsszr7LvPnHvXP6GByHDP72bg2uJeQCDTxuShYjkSTarsGPJ",
  "key2": "5uwRssnAJa3YxLSYtD3H7tQrsuLryWZ2KxX21r2LgNT5UCK6C6uUEgLfKZZCu1x5gHJiXeduFX1AqDbsNVBggPcm",
  "key3": "37nymXAxDnVwtqud3J5a8unGw52RD8YmFhKrxEhGLH1PQphbBNrZWTKH1jqWXqTD6Yxi9jTg261ZXCgGFns48VTg",
  "key4": "fFZSe1XWTEWuhjbdJ2MJjH3NXvQXtKY79hG1PBHoq5z49cxBRSzKwHoZD24qiT3DJfUf9srePjZn7orahdbarVe",
  "key5": "3cuoXF6cjwgPVg8HY229FQA1Qq5k1bS3FZ5qSucRh86bby3GNmATaMNvBNGHZCPhhDDyamqpNyiSpByuixdExHCE",
  "key6": "2iHnYMvQqZCh8e3ZGDN2YFaUi1PQ1hWfiFMUwn8XLJJ4tP4dHS3mv4TioTzeM57UFhkMeWMHc7vJ18HeDdy1Egyy",
  "key7": "rzgNGkr2cAmDdYBgkwfe65W8WfyD7aUKUu5WFykVusLCYGhkMowsRV5FS1niJ1J47Pd8TXqV3LPHxN9cy7bAGUQ",
  "key8": "5nLiDEiSRjxpfXGEMtcAFKYKMLfMgENKbsjdRUcBTQAgzkdb4HVrizvhueMnuk3JKJS3Pz1E7WQvpTbMfFinMUEP",
  "key9": "2TBeQpBbuc7csNuNP2SfgCRQkKUrnEAcPYCFkN8P6Gp3iZ6ZtfXJjgdH2TLNAadcCaWZQPhUD7Crku8XMf4GdsnH",
  "key10": "2qJkRBxJ3gxSxvR8c849t9skJpuW1trE9yvjNHYkw2E4dehJ2g8Dx1sY8PwertA9HEyzMJAgrsH2PQsdmaidwMq2",
  "key11": "5RQDKEXNrjwXRPxgWwRd1SoeJJ9vFGGVfwi1oQTRXzMMEWwfZQDy4oVK2MpFh2mJtVG2N3m9Ed7C2GRMVWk7XYNy",
  "key12": "Ge8D3PovNN2YJwLfZoFEUD4GJ6kDVJpuVjsXS38uQ86CLnViV9HRQg8ucnAftiew7vYJDWC2w5uughe1B7UomzA",
  "key13": "655DKHzmps6myJuv62ypU4uNSipDtrohB82bzqF38FVFBZ8hMLa4zcUBGuWhoGirgQRkatmcwrn2NxZ1n3iCeAaZ",
  "key14": "5TLSRMBdUYCAfPmjkactMz5VJWW7xXrp93PSPierbcMkxTmrpA2GSoeqwVK8bfBw15MwvmdynB8Uj2ExKM2FjBmr",
  "key15": "Y678haphiEo8jez5HyWk9UbP97tTEKUFJMLr8CAPuJfAHNz3Meapy65rKbQ1o9BD6578WrqVEmMeRE6mpFSm6Hp",
  "key16": "57LYtSWx57HNbQzatj4bHaSPuNbWYyQjkGZvxBs3ktprdZvMhA39iwtfyngfFeD4jrvGkPb1fWVQ2TtWjZ9zjgT3",
  "key17": "tbFmYqHA5A33ZrXFavTXy1m3uQHM9JUEJTuynP7iBTAnLg8SbjA4PRUwHLxWRpTNK6MNZhGAtwJaFTP249gEAaX",
  "key18": "ZyDxzN1G9AD5gPtiQqvbg3tSNLAWsCqqmFSk8dc2XgfSGLn1DRNvNaXPhETNt84ACvs6UnewH15RN4UojMU6vou",
  "key19": "FcXw6j6GLjxs3iNoo259urDKtJTA2e7XtFW78yYKQXwTzpCfMdZ8GwKqr82RCLYgrn9Rm96Pdp8SeKYeTMUdKPG",
  "key20": "4GHx3Yn21WwbfFf3cmZXruyxSLYkFwDAcSHG7V28T5z44L3NiurUHw8Vi8Sfi1Un5cdmTDbvoE7DNcQAYyev4ctC",
  "key21": "5D4ZXorarV4eoLkhpuS1AbaQ7DDpaxBbfsn6bRe2iWBp8CEsia9MQLAaSDCVMr57U5DavAPTUyX5VHQAQxc4ZCpb",
  "key22": "2hDApcPAg47FKFuP9MMLNFv6rkFEdHRVNYiHE8CTeGnA9j2Ux3p69TtYCAq2L3Gz67HZxLLsfymsBeCUmF5nWszF",
  "key23": "4ke61W3EwxBZNWH7aEjBpDsRp1K3T2iSy2UJmVWKNNAjPMLkCMDJMiuEUyovGqcdSaqciUfNa7KMyMjWbyRnhfBQ",
  "key24": "5acvmR3MN93vk7frqfTGxvkj5KL2ua2xz8QA9MdL2ULK8ijAVBfqQQgnrRxfKfuKp1orpwCthaq8FCZ8hUNewiDv",
  "key25": "41sWm6PNUb8YtRbFF2QpqFZCBkWhKeuEGeFzZeSsx1mTcWQbSQ5G42PgUCFsEGvbu97AC7WiGkzYzWXKs5iMMUkx",
  "key26": "zNCiw5AZt7rP9gLqjm8vBD1aQ14XnyAAnH6MpwfZjuiWAGAbe9c47pX4wkGGerM8RTTq52X4M86B8opDvNQLaef",
  "key27": "2W1Pdg2rwc3y46rDwUnCxcAt7Eg1LJpHK8tKmhQvovU2NorpB9GSYmvfa21T5qUX9JbwWtpRpffGcgdwrjVZegqL",
  "key28": "4vGxrinN8YCokwTfC6DgCv77G2FjEPfJLosDEMR4xnETNJARwwpZUejUBmq9h8CsoZd6WTPmPPrAn6Ja79D37SBT",
  "key29": "4Euf8fZKs8gW2gG6LcNGbg4QSNLAbx2D8USuxP6Z8gKcaNqj6kwGmFskQAGPWyEQEZcRCtZVdBBR3EcKzQJcDjX2",
  "key30": "3E3cCY1xGn4bf6pcQoeZiqnt8o3Up4hYHDSJ83xaJEPQQgN9hc9CuEgZrnCDAR9g87MKtxxb9jHCLQwSWBbKDV6A",
  "key31": "3hGqShaq4WYF5TJ7N2PvRFDAYRupze4uDEuc8Yif4nGZtiTRVXKED6J8PK7Pia4KaGX3xkYr3BZQJWgFvmXgpXXi",
  "key32": "2W2sHNTLeguSaRXVUtVNHhn6DxBk1Mn3b1szTbhq8DMJ6TrCoJ36zU1QQV7uiTi6ivT3CcNMQf4LJZcdFpD8u9dx",
  "key33": "N4TEbv1txf4PqbJ5w8KjpfwgSDjGihSy9bseZQmu3ppTMcy2SLfVy1zPcTN4agRLKLd2a26MF7XJLMGFKRYpdE6",
  "key34": "3DDvM2f8EZFUPwioZg7RHZMRACuNDMM5ZsCnN9mdZaSpEEUpSoS6RhvaAsdajKAgavddkGgf8VxY1qArPTQJ1cUU"
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
