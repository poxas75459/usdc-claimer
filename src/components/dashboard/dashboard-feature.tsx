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
    "2RLoK76fVVyhPEwjVAwM51hwmfinRW7i2jpx6Z59NAkQKKGbCpBUF1Xb17Ztm7YwzPLjUssfvrErJmFjChgv9guP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64aKrS93rc8pWo9xEdLse6a4p7MCxCKPbBCFCeEoWUW3rS5jhMWLTGNNtwt32BHFEAshbpVNkRoydAH3RBdnEqyi",
  "key1": "2d8p2rgCTHJhgvFnWDP7LNAUFiw9PLbAxb4kyeYHfhWbUL8Zq244soeCFLsr3pp1VQrX8LUvNq1xS2oa4pFHvRZo",
  "key2": "5HM7rR5sAiVfjtLLAEC14go2A1NmSEgL7rxYBAKgyQtGnuutHp3aCc8NnyUH2u84nx6oF6qyMBqFP4QR4hjuYqT4",
  "key3": "2EM9hSJdeTPqU16KCBH2rZp1sHAgQa41rDuVNpGmRWRJUynhVYNUeXxEcoGsnttoyT3mFcoMW6nXNrjYbce3hW9T",
  "key4": "2cT1QncTBePM5ewuZa1m75ApT2kcYgQ2QW57p8uupJ6XcCX4mQM3qvzur4NFPh46fgdUBRRWUAXFbx5GwCg9AAqi",
  "key5": "5bMFpNJwTFzbpPA1sjepLDhHDe3aGMa1qqqRUAYu7TV7pbEtws6CHEDAtw39zCq9dwQoNTDsULEqLvuiHEJP8Rfq",
  "key6": "2sxbJvyyptBH2pyHuBzMZTLQNHXz4bQheq3Km7mvaoxCMsKeFwSHwy9ZvrESBorCzrFZezBR3n9S2uapo1bRnDdz",
  "key7": "47echPVaLNKA6S8YXBUHNHM3kDkeyTEZjPrzwDUvpgDrBXViC2pnL2rmePvJcY85A8bFR6rUaxvY6JEZhxUJSGad",
  "key8": "3NDggSe6EksNXi85nkzX5mndnp3zEPqY97A4hAPzRfHLeR7rohVDVzYctxLDnNPrYUR9X3S5Y7d8dTUUDmaJi7HW",
  "key9": "5sipaLGg71veVjNWWqVfmUrCaUo5cDzaDXTsb6CjdZRxmc74dKVQqwuCFrjRCMKxRgKSTcH6CQLtHbfYjXfkggdk",
  "key10": "5sZL6oiEtzLJXXUDvTCQ128C1ubpPcVa3wt7xQoyi4vzLUqRwXVJXEayDPRr5ay8wskXBN1tKswgKdgesFSc9juR",
  "key11": "REamSis7ugp8ffuPZXER1foPu3msQwXv2ATNGa1N6tdcGhGwhtVrRtz1iZi6nqAHcyxQdTrSabEobdTD85EWtCD",
  "key12": "5fy4KSgu4R9ML6sCUH4C337YBXt6fNu9v1jy6H3VnNzHFS8GvLMbmMD67dv32Nd3aYbcWxPCQuLxLRcEhuPT6WR",
  "key13": "321RRaqGHjJCJ1nNkuwJgaQ13ZoVns14aM4tG11mSxDw7gJYoVvN8iETAxjnKdNMPififF7EemQopJw46ftdUgA5",
  "key14": "2C2MCBfxfubnANSsPvz7F6gmMmWugmR7S7oWQJpdyktsrRucVGf1yRanT6ViTggTK8Gz8gPw19pdVjexHGQsmrp1",
  "key15": "56Xs2HUea6JY1uRpNoCsw2cdTm7MqmE1vZsbiKzL7zuXn5Xempnmoj6uCMBL9E2geFfSQoTJckJabezmcLFUMz1C",
  "key16": "9u3K2HhdX6PmnR8eaTzBUgcC4RpyufxY9zm4bkXsUkw3WKYgJZm8dicsY3cEeYQmutwSViEfg9VLDSussJ8Brw8",
  "key17": "48hPtVX4G7x9LRtzcVVaPtmTShMjQrtpfoyVC7NBkddWFeFmwwkXpdaMrbP4Z4HyJdejSgNs8GdRFHyUyv4FEnJS",
  "key18": "2KYgaJwUkqeXFd9jjtGi3u9HWcQECpUDJYybrDWrGortVaCHUGVajRqJHBcYCNTfjcLH5hEnSoAg43h3QpstVNhK",
  "key19": "2KpFP6cfB5FqLEKwKgeyninmTCeXG8WsgjYDb9tC3sKazzdVnaoZCnaqSGaNanbP1Jh8VTRkVRMJ5JDZaqi8BaCi",
  "key20": "3m14KFrpMhCjMBnoYAbRq26H3T4NPy6YBKtbrH1ML1P2YS3L3D7WnMn7aQmuPWj5ce62qKrX7SMr8RP4Kjjw3Yv5",
  "key21": "5jqApaFRZUJU1DvyXZqsx5K31q7e4jC7uDcntCTKymuZNBywD7K5gJh5H5MSccvMvQsX72zffFiMDhEaPM9rWedK",
  "key22": "y5YzPWJYLAjhZUopgVy3GhAiopqGMxjuYcjt7uTFYuJfEw6hZD5KBuYhajPYPUwPKtaffGu4SYhsVgsuzx1iHvN",
  "key23": "4FDRYgSRd1FWEN4Xu32GS4xQ2NdFppBEXGf1wvf2nV3exYBKahNudq2i4SBbLsWmYjUwheGjgwzfk9Zq6kBT1vx3",
  "key24": "3MKN34F3kLQPf4otdAkjw7WavR8EuhZupCDPU4r2S4vZYim4a1ECZacKb58CrHgUuC2mpa4q48fEoAhaxEBzZgGp",
  "key25": "53GXzmVtmyTR4cfireVRrqeCKTg1d9EFsv4Lxz2GW7o4KaY8XwUfG8xYXogSdjZBUKLDq12M4VJWDdeZhxTgz4Sk",
  "key26": "57Vx4iCj7NTpE2tb3yNoJ3egiioWeYC1BRJk1DGk2ynRPqDjYL9PFnN5NmQwtBeD9PJbwtXhGc9jivXKqfhBYtfC",
  "key27": "5B432drTYqKDDuSkFFnornj6CtiMF5fqj8ShmN62tTZ5by5tvqoEFjGxS2ioyYJjG9csnwvwY6fj1BkRC6691HtP",
  "key28": "3SX5kh2krLjJpPPLSgMgoipPWAn3KXzNz6eU5LcWQwgMewUjEophZn77qu13cBUExuZWgJha81xfqy2NJDp3VipF",
  "key29": "48w6Sha6KKq8VrhebWFpgrar6KvXQY8yrsfwDhRkcD7wDqdiWtiq1TR5aXTw9zzT7Gm6D2ipFPmmi8yMj4kbmcnS",
  "key30": "42wS6sLZp8dvJmnm9TbYi71ReTdJYNyTM3UdVbiaVSJiGovhr8dWxgMvbmqSa6ezJZquNEgiyWta5Rfi8zAPhxGQ",
  "key31": "3hnL8R1JbpkCEyyJ3ycgGuFpW96GsAFwxzoFiUPHeWY8S2xHfR7CQXGq3MdJp66HwaBJQDPFEh4gwafxu1fkQmwu",
  "key32": "5VCMFCtqyzz4kjtkPpeQ5whP5nQfTnLHMtJSVpKh9zJnWKuynfpH9pwJ1CHEqtAtno9PoEw9BuEjTJ78H4hCawzZ"
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
