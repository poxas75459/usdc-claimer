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
    "2X5iJEHL917huxYdFxffUXPCjNhkTXKbzy6mWPq3NqSQ4N7oP1CpH3rK8yispmNkhPvqMp37CFLXV3L4kXfGuY7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23mbQEV1a5ad3U6e6hcruWJdnkAmZaLUsGz3M7tRfczrmdiAxMsCXDRBP4U6aQtTh4gyTErADcJzRthea8oZNoEk",
  "key1": "56ycmtgGqbYr9XUWm78vqUp6BoFv8Q6EBPMyjcVTmR6VW86WdmQ3aoLsdpkCGW75yvAZYwRUmkuXkMbEzaWRxWs4",
  "key2": "5FfuS5qaWJsTzxc3AwfrR3Cw4aZjHrTMVLAhhDfnLTMbAzQrfFqDxP3mBLU6MtzaEpW7kPfjsmEJigaJA5NeGc2x",
  "key3": "4rvtU1GwUe7KrEjjZecg6Hs4bJrQYidh2zxUukAKohcBjMoAY3VTWQhbRj3orRVYNgCnoNCX3iUaS3iSZMXCMY69",
  "key4": "23e6AmTEiKwdT7ViXux1QFKqUaakPMVyMCL1QLS22eDJFGZWeNDQj2kVfUJd7K5N3am2NqXm3R8gKjinJJj8XHbn",
  "key5": "3hAott4Gng2ft2zq8F5Sei5wXPk8fMt936aJ6gSBGoXjsYeewhGbznLrSCPDoWGfqsE5ZGzJd8AUwhVYeKyFhuP8",
  "key6": "2GRSkRpkqxc8VX7zfHBa1e9PGBDw8hCpz54P9MuqJvsbuXV3g3ipynPxQoJ3CVHK3mfNawUg6VoFuq7vJtGkJV9S",
  "key7": "59e5BQFJsAAimStHbU5xuffPqvUGdqpiqZRf5UnUTGuZZUwEPeY34DKJLGcuihAxqnasuoKwY7Wu1BXWtjLc6mNm",
  "key8": "5s2VHHUEqCcK9Gsuhv828QNh22c9VMbr2EppEcfdEh7t4WnuxyT7ruRon6Vw8wkj74cCZNPtrXrnLkDE849tpdXp",
  "key9": "5EMFYQwRLtHBtho5S6p8jtJT4PCCjmfYvGEEoKYvBjbMTjSvySccmMTc1gQmUD4Bhhx9kik4a8B1DCXmd7euhcac",
  "key10": "34GSh7JQrBG1vnipBhS84Lr8DbDUJGpeWCyuqGe6y38UMizqMKY79GYSzBFgGVpi9Rb5FNCquWuueZh65ZWvvt3z",
  "key11": "2LoMeJgvSykmSfAo725DRLSEVAtL4GKYmPWF6DDV4iiyyURGFt91HazxkvemsRKzqi4sqHCQA4wsBMsYTBKRkCsb",
  "key12": "3wrJwgJPYFJA2RuRBvGZfyLp3J1hQ1zW7iu7VnmLUCabtWNtrYiiC3eb7MHDXgJQVrG1QHSC9de69t7rAjudCpMp",
  "key13": "2VFFtaeNqvAEEfTQwGBTCe9zsnqT1qoSFZoDQdn4UAXDJpcuMbLpUpScXy6tErKspeRzohwnWGQ4utbmgCne3tAo",
  "key14": "5xkS2vaSVzNJ7bJ2nmFBWjNvCUdQ24jU6AY3B2uRgo5fJdZHSevXhYXujgjvhUTsTaNu66YspjTQc3Bb793g4u2C",
  "key15": "46GNtr8xwJa9JkbbX3zp1mCtQNccqE99cBaJQtJJ6Jc3RL5JzS68R3ydUo289MAePDfymGViKHtxP7qT5TGfz1wC",
  "key16": "3tNWehi1Bc5BFqvdQf1qyY6MUxP4wXm13QtmCB2eJF9VfL4258YdVzp2MwdKknF8rMgi4faQFoyQdsPTGnLUctYg",
  "key17": "56TZ4XSe6szeFSruvykiKbx7YAamnBWMQ5SKzJEFm5uEhsskffhUpt7PUyTLqvGw8esXTYPBfa4dfyb89PBMRHw9",
  "key18": "5FiQT9AQPU1S99AWdpwx5g93zMr3S6WePzdpUrmLermFxf83VtNn59zuZerZtXqq9BDWrBwJnvXALB9wuzsbvyix",
  "key19": "S5CgmbgB7QKdv1EG9e62Dw828zvvChucNXLtXABEXKeRtTspdEG67TA1XMUKb3kndakNQwhQmgx4fFGB9PQBTSK",
  "key20": "5yAjg4g8oAy84kG1N6CdN5MnnmGVdErp1tkmNWAmGNmZogzzgJf6s5DqjELU4CP5aoK2MPK6abAYjGVdrKPyK3cA",
  "key21": "4bJ3VvVsFeKrFscTpo9m3AcMLNsSmJuDraM9FDxbjsAWPjqpSV6RoTCFScM1RVuPcfF8kYaZRh1kyJ3o56GiK7XH",
  "key22": "2LAZMy89t9VyvUcn5Fh8XXHQW3K2ffuhr4SHXmG928Y7ZdgMxEzB9KFynUCAQFkbMpqpMvWxz3BYjSRuvcnCYdY9",
  "key23": "4BQaqpvuTpNiqBPpusGRq9DA22vcXSZtgXnsgArncrRA6N78gn5py7N5svVonK4fJKTmfSaibVjGCLcKLFU3sykD",
  "key24": "5MACVkiEjGwrgx4D33M5zZ3M9Wm2QwLsAmnGhMGWnPsmPMN7pguCxqazEZQ3a2BWFV1VtWHeLJgjqbDPRQBReZqJ",
  "key25": "35mgtTyFTyNmAjqZjX9zRcn1rWv8Z2whwyMVXsSpAAsUHgkHi1s3Y2WNH4JinX5WLNopYTobLLzzv3zy9f17NxDj",
  "key26": "4zRcaKAo1V4cnGaruY7zj8sX1HnTEGXqBTZKZHZhVNk2Pk6AwCDWX8BvdQMmCZAn5j6ySVB32UW2hmvHjrGZ3w9Z",
  "key27": "24puvhiCCKj6ttEi3RPeRxmYhqohxb2afkSqEymwf12FoLaoCXVX9Xso2ciUkzBUQ4FFMwTx6TBBfodDrhFGmncW"
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
