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
    "sYaXsFCRY7m49G4SyJuktVg6aiA3frAfbGn27rZcLYRhNM59yUomK4RaM85mJVtoUXZJhUyKVen7mgHVpokrcmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HezTmRsGNNGARFQniZCyffAD1btnCaJT8UUobTk7J1Jgpxg6G3qXvZY4PR4UdUwgjjTEoN55oxqZeQTqEABqzZv",
  "key1": "2Gn8LPWBmCG62c7oYv5deJDy5Pq8mVm731JjkJ6z8EMUfMiLtx7U8EvCnyGUFiXmtYGjN1dV8n5b9tdrWMh1WnBU",
  "key2": "2L6ZdvbnmDR5HX1kzvHe92SpJvB1SEf9B9DBYdX7hm42qDcpMZ1Keg25ftBCx95QTyQhsCDjviiKsec4RxLXNYv7",
  "key3": "4C2eVDfFx9WVafeB5eHPkUjYBhkMJ7ufj4SgLu2au28VKeHDmduF7LDqkLfP2XUz3PSCcfEQhgrKuKnAqhgZSsw5",
  "key4": "4R9EgadUEwtWVvhQPBFiyrXyYXw4CsKU5jR8BrA57bJHfmvjeYUBW9jUT1SiQmC5gdf8BtJiFXjpGSFf9HQrSPMR",
  "key5": "5DkLpMzYrSNPMAYQmT5z2nAsSZqgpcESnsFudkHxfBY8zpHtWycr2ik26Tbca9vtwCbXPhsj85AkgGW326B6uVvJ",
  "key6": "2papPTXA6Cmy8fCdECF5cnoqnwDu5ostS3hjdMiHxCijWYP549DcCgz6HdgMajVRqRDSQrWz9WyKeS1cfZGZmSKX",
  "key7": "3hBvWj6WZe9GmwneXPDFGWTHQsjVjYcspMSTe4aD1jCxmPUz5zQe6TS8zUcZjuBki89dRsxAfdx9BzNWPJk8KGRe",
  "key8": "5gFqf2UaoaXADh6X7Jp7DWpfi38MJo5m2rveLWRSXjkDBheZnmvB3UWWTYnx8U8o4d9aBM8Ed148A8rqmRiSLubd",
  "key9": "VhBP2RDQQ9KYPaJ4eETNFUEg7sTwuejMKZXkGHyo86xrHgF7MzKsYnK9PfxzUeSDDkLa9ckcHwvd6wTDtWTwKDb",
  "key10": "r2xGvpHZMhCuRUYEVb7dEx52r69rVpV7U6GHVyc7YGffTJ2JjZ7q91Gpz7R5zQQi1jj3pLVrzNwbbn8bLTKqtyK",
  "key11": "3VYSJWoQkXGXKvmYsYDDCFm7HassUy1oaV5mjNeqcsnp3gCGWLM2E8ZpCurU1XtL6n2f1qzfGuVJXmEEhZBTNYWq",
  "key12": "63KB6cp3vb575AiJ9qznBdnUsgNrJm8bUsSN7zZbCHaQdQyQAhy1UCATnGdaD3uk1qKfE6D9QPE3tANUhTwUq4FR",
  "key13": "3xax9jnZswfoB339A4zEXSgLGnxEihtpRH533w3ga9NFf5itN9vWpFrFuAogCPmcb5Femr2uT5h4r1spB3XPLbR1",
  "key14": "54tXAdmz7TCVjoXYDgMdWr4qYkmAeX5ziBS358Mh8Ka7PyFPtNyhWSojyjC6xhskNGJLk6nWd2GUhTce8LohGNrg",
  "key15": "4T53Zvkv5kTwfLZ6btWPFY1nMZ67WsnyTVwn96GoGM8f3FpgwvECWLC1mosMmpMycQfU7szik51n13xfo5ExZ1VY",
  "key16": "Wta7QQiLPY2nBfqCajPZ8UhYdvjjTJ5XZuhKbaiQv2FtMuXRV1f22WuxrWmx4MBmxttDS2d7ERpZjyYoJFYafYS",
  "key17": "LUfF82osCxDteFKycdiFmvQ8nSGchqyFViSUXAYeaFuJ9iGMYFFuEdojUjfWWx3hCjg8D1idbU3BY2rFeipaLsA",
  "key18": "58SqF8CZ8Zin7Pz7JeyEDHpuXRtRouX5XWb2uYXk5keDb9r5mghKYEeFv4JUKgNrqN7LDaSAyL7ojBctbDM3PvMX",
  "key19": "4yDQeiSLSCjcZKTtmM8CSn7Li6P6jKPDrQaPxUfz4PiJxA5SxjRTFARNowL7MZUgFxdQhrF4Pc2XRze3z1w923km",
  "key20": "5gKwNpjToJyY1iYW1Au8vHS62xEvS7Xpwp3LxUbnWs1UHJ7cE9Lydg6jRRjroL5WTu3mqecnRA1dt7VVdsdpANaB",
  "key21": "2S3mf6h2JmniFk6ncoixh1g2QzQkh1GbSTECL7Avaxsi6ikpEj6tgf5DzYMiMHyjxuKmekbSJmGjboTNkFC7u6TK",
  "key22": "5x4S52SHFSsGooDHxdYxanzPAbYb8EhmpkSTzJpvJ4gwrhfVM9PkFgPMQoiXfwCNSecFQDyMRau4bc3RhvaL3jSy",
  "key23": "2KLkRjbsKX8TGWaaSarrY7HKXkoyNjPUfK4nAiZjX7ggmoAyBgmPZcjYdJGXr4wPFhwRVJPK19uxvg2PcWzdPc7E",
  "key24": "47PL3toVzgr6GzMVDtrdTHQZpFXWHqXD71ZuuR1nYMHekxtbiZju2Z6tMwmw3D7P4vX9MY5te5xvamqHXKb3FCpW",
  "key25": "eeLA3dkrbxKVW71n2PKAaiHp7XefuWQFaC3wgWDWdePKcAYqWjeNPH2hK3y9TKpfuFiAvmmz2qExuyifta6fMSs",
  "key26": "4X4qsfGVPqrYqps7dmcLNBE6SR22m9Ee74N6YPJxdcq8keGbgC4XfyxreXcHh1RhTdWqheDVjKmpfXebtKdqJgJg",
  "key27": "2nvp7hPsACmNGBsQndEcM2UHiF3iY7WuzRyL2tpacqESbpSGacfCjoKrMX3HBxfqsgB7Uj9XsSVTtjkqeZriG6kW",
  "key28": "3aWshS8ougLqokXtDJRf8cEJdNYJjFJ8iZzR5jpLAfJuQu21BfCrGZ3cLFk8C1ke2THiVjchTeNWDUDNrr5A3vQ8",
  "key29": "xUR8xKinvy2iEfFLjJeivSAFNGqnN5Yv3pucoFkgDvHQNxs4Cw3rJzYnmLeAvupf2ZCjCeV8rk4iL1nAJTQFiRt",
  "key30": "2dJEoFnPtypf87eiYaGcEyhyLNwQ22f22HrW5Zepm3BXtgzDtBvcptYrghr2gmqiR8prSzAg4nEUfEgZeBXh32BD",
  "key31": "jJTnEuFGRwaH6Pkjcnn4dRvU1VmMpzkGnZDrwxmPoGkDRMN2aGeRfrVZdx2MEMKDF1SqaLaCh7hCYkVEduQot58"
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
