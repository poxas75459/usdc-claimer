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
    "N2WxiQv7qeE5PRnfNuNZ5erSTXuwWsBvX1de7fP1r3Sec4gP6xmFxm3jduqHLyUK8kZmTyWmktg7V1E7Z54ayEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kaGXYUqnven1PbiHK9DDXo6MzY33L2k3oFh5TUsKLPgCiow9BDk8R4ztjHELaboiAs2aDiCeQCT5Tc5fRpqfiVh",
  "key1": "3MtPtEx3CFNGXEEFzBVZ1Qrjss9cWSBUNQ9BZqrmjLHZaSuLs65opY8jGES7PboWnwJ9JQH2z4UqZptDNj5PcyGU",
  "key2": "5gfc8awS4ucN9cf3nHrxVWrHbq2SpRHQPXjkEkpUkv4sbTygxZ97xaSrgLRMHmmiGo6ocgm78tTE8CiPnvQJTftF",
  "key3": "3247rKG4C6BuqJ557mdMmTkQ3zSrqWNi4JuAzcAWTL2APNPfJryA4S1WDdUx1863BkFwx4mPVLtZgyBxM2VqbQt1",
  "key4": "5NSvLMJvAFn5NxSLnd3WJSTiZbgnTLCGW1S1zj3dfNVMhAZL8UyG4yKsD9j2Ug9YZb9YV7ipjRx4PVV56WSuQmkj",
  "key5": "2epCwqkERJGb7GbPzfwQgPw1c5UKBK6UUXCPMyN6h5eE1xcmE3Sci4aNNYwexXZwVXkk3eE5U2MTiSZGWBu14hy1",
  "key6": "265SaQSqp1P7YSbPDUktJ28uhsT3uEhfRgguEa8DRFjxZ3BtNq9r9hZYrActY5fRUGYm9vobKnooM9ydLFHqSVEq",
  "key7": "23JNP43VZ8r1kSSUK5SkX41JySYTHEsm9y2mabArS7ue6tdrWSwhRhp5dJ7A1wG7ZpGgHvtGme5KJfsrm7N3stiJ",
  "key8": "2mqUwQasi6y9UAnUUyJB3GMwks1ymqWcfQKaCZM1xVgjt21Ns4G42QUxDsu9fRg1vk2kJJnZvVdFTqiFyUo7Cjnv",
  "key9": "57HjoKLYRsrPW2S3f3KFxDpGcfXuaVXXJtwWJETjzXnwgYmon4HGfeX9f1Uto6ySdu1qww2NxuYwitudHUTRFG5K",
  "key10": "4B2TRkHTtDmkt23MuQmPNvaA29UFF7nriYa4o8mTBfDAUDS8ZZgKM7RK43GyYHVYtsek1fziXAGQ15vy3hJQDXrU",
  "key11": "333JSR771RVHUg6K7Q5q6Y3JwkrB4udNwdx8GZJ6WkaMR6NSaKnwTCAFSrS4KkAEMDdB7GaTm1emZdTMnXrCdnqd",
  "key12": "42AzhXK7E3wLUsBZzC4sMk5ryAjbW5zXP2aXXxocUsBu21D5TXrTjttifYz5gy24SgrWqMtCgUa4HoN2Xhra6CjM",
  "key13": "3obeTXe1wutrkKaCo7UuBfitVCvG46NdFcxp8sCHiR8oNK4yZEbfLvKLNWH8KuWz4pZVw8fr3kAASuBdHMQZYw5G",
  "key14": "4PuVTR7fciZGnvUXAQRReWk43pHazpbZehYV6di3zVZPWca4BqY4ihsd2ETWsmXGcmvj7ViTxVdWSXHDDyCxPUEM",
  "key15": "4aF6jYEeejKqxHriq7ycNJbUFihkciUCv7HMe5GyEydXzHbQY4sXeUvFSzUyqnWagMVbuPEfqYDnq3RZKotxLvHk",
  "key16": "5QDPYxgtQba2hTrdDJHF94NSe6A5hs3rvu1MiFcgGsSQYA13A2Q3tsM3x67BcDgDM5W8zZNJfCH1NBm3L8ga6YNR",
  "key17": "4fvavtRAyXSmACXbVd2bGn1PJQQYcDXsKcTRYxaNgGrfSy2norar1ePFTPk9k9SL1Y3PiZAfa65LSKZWWKq1kzxf",
  "key18": "3pbfBbJoXWXqe1zcbBpPqyEu8L2QRu4UWfrtyjzRSCNgHLW8K8S1efPfGtcfgKTse6MUyTbpn7ebe4U97uidFQ7Z",
  "key19": "3iuDNLiRGm4WBkyoNBRzu8CdSJiCisKsPKG9NM1pJdGYXN7yrZnivM4f3nABBeZaSS9NoUMfeY5VonicaMKeM3mA",
  "key20": "5qH2jZf4JJRcZmXwFe8xcHaCSfdoFGSvHyCrsrTFCcxGXWzvPD1vJD3fPSeRArRjGNvt5Kd6wxJfNPP2Cv7ib5ek",
  "key21": "31S5adZkixXz7JjgcD71ett5Ym9S9K2E2UVbVj7SSmwxkh3RDgPSjCjdzHDhQQTThn79muneBc389sxMVAGh4K1i",
  "key22": "41QH4LPAd4WX9rMc69gdXmzqWq7rDydFcwAHSyysAWYBEsCMsz36qghz7BtjSUck9Kvwq22FmwVJg2CekGrzpj6Y",
  "key23": "63baAo6pQN6vtV24bCpqoLASbrSU7dJFSLSYH4W1f52SZ8DzZHAtizsSDYd2NPWz4H6C6Te2gnQcqagpNopnLB3J",
  "key24": "4ZR2CrCT2XWshQ8ctW5Rb2km9eeEP8kaaiLtorHdVz2Hrg8MTwMADtAEJjBBKb6s2trekK4fhEyZnJvuv2j3eLsZ",
  "key25": "5kegexuCLpEUCyzqWPS4NYgMqhytfWQKCxA2BwyN1fw32TeTc4jNBERYyUSt2HBhD33LbuhAMRghsnT5N74Xrbcg",
  "key26": "ufRYagQAXoSv38AsvfiCs89wJ4o5r1Z3uW6eUeyWBoxmtsMntqshFDGRHC9yvK6iajT5Tz9kAx9PGTB5trLDkFh"
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
