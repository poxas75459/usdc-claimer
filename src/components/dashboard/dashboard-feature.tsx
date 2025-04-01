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
    "oycLy3uc25tuFXHdZzpbQLJzzUnr1s56qseFkho13pvynPE1pAwJeXMSwiWpehqZut6G1UwLvz1ESKkd6NgjfQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "edi7vSXeBHXN5aXnS1MV7GKBs9s1AG8Dn7Djpnc8TWKfFJwMJwZGnQtpNCuvU2r8fhgTsKD2BiRsAc3GUo1SPY8",
  "key1": "3WWQKFjbAaweUTYsCtqVAVG5Kq5xiURt6M4JbX89S1siVAtEzV57LMLdSUbj6WRw4LfhQFxvTprgXqH45Jdwqwp",
  "key2": "XBaH2Npgvi4Fy2NtPgeAn6KzcUFVgmiJ4Ai2keuoNJew4DR7Xnafxhojxj3h7zzqkksZm5bHdUPDDeSZndDUoS1",
  "key3": "E4sDVkaSr6Ehi4aE6Ff53fMi4JxS3HHxK1SPkMTo9xKVJHoVxuymJYtBHe5QQUj1YrochaxpKYeE52ebWFqT4K1",
  "key4": "37DCuFFhivf5gmjpymhZiy9qy339H7D2ox9FH6wC4KXciQ8Cbjrm1ajqr3xm3Z2AZhV5V928DWRFXAdVTDmtnSNn",
  "key5": "2k33pKoGeaSsaxhP366X2jp5giygzHLGeTzQNDFbqgmVCCU44ZJ3QwzRDmZ5kBGNTDJYsovoD38tqokEERD5Bf3U",
  "key6": "35NfouEq8vhiHAGxZtQ485DbhKcz3WDrCDav2y4gFBKxdy528CQi4ViHSd2Pdxr9GNDVJyinqZPMX21RHfGqrbMs",
  "key7": "5xi22GukKosa1DsGXkaWSTzYxDVcAZMWD887J1vZ9nXz51gGGa8syZctEQThGWskufgsMVpwkYw37WVFL9zHUkYz",
  "key8": "fgXcF7ca8S2ZcJnjiRjjsuCUiUhrADK7jP3S1jvyCqdbHnq4FJ3YWSZ1WiP9qNbuWMZE6GpQFTBDuuUYN5ffU8d",
  "key9": "5wQ286EJDiQpx4EdHzANHM3bqPEr385V42inkgax6ZwDchuvh4cdjXwSkxNKgLGRepnNw5bn34qXLEGZKkstY3u7",
  "key10": "4xfcs9x3TCTsEuFvPnRU7cnF27GEWXrXDooCWX2P9x3wfvvmp6abennFgSWnprEXm5JfFm1P5HWRJKU8je4HfXXd",
  "key11": "3AH8ehAMD96mfBB5q2eR1LwLvJg7FWY8zK1gbfGbKRiryJw7Kn3hF1KJ6DmkwcaEdE62Q3jWjQRi9K2TU9XtuKKr",
  "key12": "3vx6mNtMg8P3XWant27oXqgM9bbumrx81p5dFNjvSgns1w3SKGzoMBJTth8BC7hbA8GVKPR62F3QKZWv7vC7Ztic",
  "key13": "4C282oaGRHcxM8A9dW4frfvBW7ARuQW5E4852KBeN96ueuBBcu2jq4PE9PYdxxLhWKVHcB92oPMa7bHYMqHK6pYS",
  "key14": "98CYJg77FQs5dYenLTWLPZP8yCcPrazhcku4KMVTN7dMTpb7RSvMjzcwPihekozppQ23CThetnebPN1f7Byg4FX",
  "key15": "4edoxujiJzZ8hAWT5cjAu11LYLK84vKi8BGzJEvFu5hdu1qLpbYuzC3GYQqJp2b74YB2foRxTUBbCfK9dsvFoTYp",
  "key16": "4C2RWUAKAx1QQAWhFAaoWb7W4jmYHk5uCJb54uaQyGhkSaweoAXvEHhrgHhoeeEoSP9t28FwJ7CDn1MG69zJMyV9",
  "key17": "isjweLNNGaEDpPPhuvsc4MbdcqnNgTiBREcq8WSNrttz3WHPqtnW8CSt5wFCwDmE4CWRjZvDmnHxsCac7VaToJh",
  "key18": "27jTFqghZN7HJHTFgTS9YP95kvFznaJW2HqkSD6uBAFTCrVHDQ4qJksBFLHtiUCUUt1GmCQYKuF6rZwfqL2VDA7Q",
  "key19": "Cm1GeVg2ccRZb45XNC2YwLFkJvuG58prrXHnEMcT3VPMt2484ghJsDL1ytk4Jm9SmfMSQbhzSmc2ucpS2P5RVJL",
  "key20": "5mYZb1Z53p9Q3uD6q95wJBhuuUSdZ35zXAWZYc25iq5wuSyMWg4ky1gx6FnoCEjqpMuWUrf5iv19Yd7r4qmaez7L",
  "key21": "4xkBJUGNyh9csaJPYL9ueC8ng745RXvxzNimkbqNF3E4nS8JRSVDZeao6cakLF3xKGGBBvXRwuFTVzi7tBSh9vBm",
  "key22": "5kuxrU8ns7uijEcLyZUmFWEtA6JgaU3NpZ5YgVvG7x2a3s7574vbNqdtLwM169thNrnPM1ayD8mKgp6mjCWNAWdx",
  "key23": "2To81n5iWTytvvzaybAsJqaD5Sqfgz6D5P1EqLzE6GAJCn84S8y9xeoSuMSY5J2jNCHWtXtKDdkhg7WvbBotRxAf",
  "key24": "5UVejd6ySjErnnheyBiGjSK8xfr8KmtQdwmYwzwV5TefuUooh1bDjrKjXoFxNmBrz1eLDj8N3QYsLHMbJ5NRjzCC",
  "key25": "2627Ag2ZfYaL5kvYuTFQRLgFASDPpiTE9xgKhFJpa8B7qkJ4ZUY2fLjRfqP14fwKMrrtxQYg62SngdnVf7bHhZCC",
  "key26": "5E2ZssvL57XmpTqgMovW6UV4ZCzLBGEcmmgxJccRhYVDS9ak3NmYzLq61yCnBdsXXavT2PPgpcd8VbTbesrNUvRx",
  "key27": "2vCj8rx2Tfoq6eLHXbHYUcB7fDWBRi9JHZHpsUnUPo9Q9F9aoJyySSXNMSUNGWAXSyAextXwctDaugpKxjim3npp",
  "key28": "Y57rnaYQMhS9nphUaWQ8Twe7QAkSFyXHaXP6pebAMFjBGHQdB2iPeuYY8Js7Eq3T17NXjBvoRG79hwnQVKqvnC1",
  "key29": "VLB2aFHgKDEHpGAxcJAvS6TYB5qAb3fkwrBqA4eB8MKS4U1kPsAeyXnyU8G8chctQUxdfkZNTu16K3M6yCReNiw",
  "key30": "39JU7fN16sBksqFMVGEYi8prVw3CT1zVgLBR1SiU7CA6qyUPs9BiV1KgPoiMCGvc7cp49LMwVFZLEKWg4fBLZ3LT",
  "key31": "27j3bFEVkbwo5QQbpGxNXdhUPitgdsCeXncEkCiNX6RX4dsXTdZtXzHFhsWT6huTrwz8nXgSinajyVm6anRyLgKa",
  "key32": "2tQuSUyUdVDEKL6PFGY34v1LuNTb5dmsoQuX1s8gp1UC1ZBbFRWHvQV19Smjw4zNAqP2wCZtNz7bg18eHzHJ1THE",
  "key33": "5FT9W6cPqhxNAyw2x3BuKUdFQjNYWhZpo9nUQhN8LBirs3JdYAwoJnCG5XnUHreyfvLqzi2oBiVJv9HoV7oTvRNU"
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
