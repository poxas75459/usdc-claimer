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
    "EjfHYD8TDREPQZK3iapD4YP5UTxeqmLmk1V5Cob1PGKusxPYEXhbjcjvXbXjgpjik4Zn56dHJ9UdAAmh6Mmp5Nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hk3RjcjhRGkVPy5V4j2baa3oYL54dwVF7N63MPvvqp7s4HXd8Yf8ofhbo5r1ZoRKHpjf4qHicTAtKMgL6VSaghC",
  "key1": "3BRQYRNqW3H8Uo8S4dU4TUXyHY2aNWjgBjVh8wiZ7TTMm4m8spuovtR3N7ZkdWZ7C3FiCsQZziroWn9DPvAqjGie",
  "key2": "mGGYSq21S8X631PbyfnhRSwbh72pCkhgj1HRmrDbjZmYqG69RXQfwxAZnK33y8DqF2k7Fr2ujzekecrbo1Gpm8E",
  "key3": "4VTqw1emGhCq2hWFdNkpEyMx4PYGZUKm8zVwbNRToC1iadpmSaMyLRNhjMjoKaEBrRDMfKrH9T7g3APTLp3eefXQ",
  "key4": "2rxcGGid5sJqjr51wj8fJrLZJeUYusy4nGc3UAAPFH4JhSGcQ4XuECcsngtQHYCgJPuASHpG4Wzo7XbottkE9u2P",
  "key5": "41uyCetMp6Xp2Z7W3Gybz1hakK58s55xxLKYFg6xvrsGA2aKHdJPf7PDWQ3GMW3SKfibHXnnn14UEB9UzkjVJSbv",
  "key6": "z9Az5PrR19jS7RwSWGC7hs8MepoqpAkUsbXbCw1Ymxe6J7XQCuwscuV2Z5fmpXr4iKDgVEMAajB2Yz2RmmkZmMb",
  "key7": "3wpdnhfcHvp9EfJ9LLYcuQFevYLnWHA5SuJysEYULhrehJYEjq44iJnWXMj4Akv4Yzypi4vpCY5iVv6n7KVkviCK",
  "key8": "2q9W4mfr6DqsSXvhRHsQAUz35rBhaxCFdbfFbn8TKBkG7ShSX2pAszSXV9PcYfEjsAwUr6xeYwY4UFsz2PQhGb1",
  "key9": "4WD4hzWayN5tk2QmRjQutkuGQpx5a28XyrU9SjQf4om8TBt75eAxBobSK8GPcCMZWDUC7Ti98NkTxPnAsrqwqNJX",
  "key10": "3SzMwMiom7K7BSYFsFiP582GW56L8pDi9vEHZneaRBxLPRxn3hWWyNBtvxNgXsjHXdHRjTeSh9iZycWjTeCbKRBF",
  "key11": "4oYcgDtzGJAS3zgvg4rQ3GJsjdpSq6wpffha45raQEBE2M6RL8Va7AR2cqMqHSsiQYT16F3w7E1J6WDLJbzRryzj",
  "key12": "2zTu5iAE2EZSoAXbSUHtsfpbmBppt78CWRCw1pLDfwCL4UJqM21FV7dZcsqVaqBBsPBBX7TNnLcy3mEC35fboFZr",
  "key13": "2uvNHYWNgaoo7bSDG3w7gbx5DDCjwn7Kh778akHQhjUpgyggwx4BozQ1jCot7iMKjQMJ6crSKrYhWwm1eUrR2R2B",
  "key14": "62VZeD4dqAMpNbvAtgUm9dJ8rDD9g1G3nMJqTAEAWHTLhN6J4fPzKLndrY98Yz5wdPx76Cat2qRyRkYMq7SwQ3bt",
  "key15": "4wS7qJEcPECD99gSK3qgnzaR5BxhbfWbULirJF7p9597zoaYNpQbxjd1TYfCu4HjfM5HZ6yY9nkXL64X1Y1GxfzW",
  "key16": "2ZigveEUfWL4misb1vkbTkW13eezqRF2Bgs4ZGB61Qg3JZjteUsUvFQ62MpXkKS3wvxAeJF3PkHN1jcG8ApbY6gf",
  "key17": "7PxEuRRCtAMAQpxhB1MjP41tnMB59ZcALpHpuRhHHdifMgeCYWJPJonEqgqzHfPdgwo2suLUAQmFbmyGavYLtwG",
  "key18": "2WPRnZ8Yrw2eMVEFrUQYBAad2B6u9sp1syKn8zackRxDY1N5ACcAoqbpizNPcdLszbdCYX4BSmUXRMkiXPcqJqdg",
  "key19": "4Z4KhRf4LSkX5rUeQqeLEsQQnuRtXDNkuRApyFuJGJK1kbmzeezQ6zbVUr5MVRPoH727Q7QFURFJzTGsSnjwXzNh",
  "key20": "4emm7unUzKn6nSJb9LTPubBEWwoLymvrySehCp8sfbT5Ymk2FkeJ41fEZWAUgBQqL4yS8UDJuv64AuA7dr2noqTz",
  "key21": "392A2EEXKk3cBwyf2pPCKu9Ln1ikhox1E6ZfhtE4gf3yeavtnQH8bL7nAi2wsdK3AaEdJnzkUVhaqsDXcvB9aLqj",
  "key22": "4NRSbv9iBUrYA4ekoUQjjPY23o6EdghCfEq3oafGPor7XBLa6ixDyocNVW1UXsJ4pSDBY8s7yKvtTXSoFcvDoawW",
  "key23": "25nRdonnxTcGoR55vk9giRQy96CXzMsTGizN7aXNiwCEss5zxcHMEr1gX2M6bZ6CRJEmQnxRaBvnN7M5iaPRaLfN",
  "key24": "3DqWddMDGpK1S2VR1xuJq36fLJYh3ydgsUWvjd5WXEkEKVcp4M3zWnFGGBQAaDkEu9nf4cvigCTbj9SqmRDLwHrx",
  "key25": "5qpDnbf6jzgMTL1GBKEny8iNEhpKNjY4zKyATKy9yoqGLPH1dWUNcoSWSYiArneHgbbtiNGef8cqL2jFDL2C7fXy",
  "key26": "3Rcd9jSZDqNLesE1819anbWwfVpr7wqiJT1h4DjVZbGffL9C1hR4jbtWFFFvSR3ut1MVhMgFqp8RbxMT5J7t6HF2",
  "key27": "2iKhdfErmeduu67zPJ5DngKzebq7teeLw7T1ewb83m8N81qYhcJVhrkrjNhqoEckcF7sJ4Z1it5USwotAmdayjG3",
  "key28": "3Qeznggty18M71ZifSsqLnhqqZ1Ss1gsjwc9P5vhKzAS5mdKccfgojfXtS2EvkLSXHhM6EBYpiEsJrsZo7hiedLi",
  "key29": "5Hz73JPPfnfzs3YYcwsAUWjHK2BpAzmrvJ8UZDCgz6EwxUuSTZV9qKYaju2Sw7o7kKbQz8qwnQ5bHim2FfdkSaR6",
  "key30": "4z2QJb5e94GdJYQsUNgGsBYK963CpShLtQYaU1egpqpmQKdKM25uZwqHesJmTy1APgpLCSfFHnNXWhNCsgQtEPxS"
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
