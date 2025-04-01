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
    "pZXjXcz1MM1rfi2UV28qw3URJT46Ziz3bA2wZDLqYELGpRFcAHqzpVAW2eyJXuouFK8w9sBrGs1KFxh5dZ88RYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64wHD3oRgx3bj2zSHFwtttDuDWpYzxT1rgXuaLkPi7DcZgPnTt6oJsCzWTtvrNEkHkqpcX3Nx5rz2MCvCRSdDrNP",
  "key1": "yXyCjrUXV2v4W3gpKstJdHRK28eCKV8TJhfTE4GM8YuJtGyrxH5yLA3iNYc3uEoJvBiLx9dUqu8DR2KWV98qbjo",
  "key2": "4Ua3JJrV2HsLhHGCAisnxQkVd7j3dhN3a6Du9vgGqbScpqcgXC6EoW1A1uFfsGrF5kwsuqwmhYZRx4Eioeshhm4G",
  "key3": "EtvwF9jhkhCsmbwit2HPJD3zxB4UMnmsSyvYxUeMTW99xn2Y1zpPa1oKG92LcEixhxVUCwj6AapmUkYzAzvRBLw",
  "key4": "5HtNGjPpSzBiduDzyay7AJpu4fuPeqxgdp8449FwzXnJ2UezJFzyUJMdnxJRSBD9rZCtQmrLBeqW8LVpRQDUxdMm",
  "key5": "gKufUgpwRv7FQcLNAJXzEU1NyBuv1wpmRu4EBDCxrJt5hQn2PNH2eiz57LRSwmvsdisnDTtn86EPVicc5UG3SLY",
  "key6": "4XqMcJfi8L5rvVVPnPUmx5jFkSxN4LK1xabut1BammwvBCTqwQwXWcv1ATrBEUrL9JPsJV4wuxBNsy41XiqjWX22",
  "key7": "61yi8pUH3QVgMY9kNCeKko2GooSB7zs1kVqtzPH46RyLuGjMincaVkWFNmGBK9h76esv8kBi7D5NLxr3Uv4h2PHG",
  "key8": "mo57JSz5tTZaii7HtXnY2t78YNtDiUfVVGq9FhbuU7n5xEVxn4UvV73oemGUoXYewqgShJ4gA64zyKNJgiPR7Kv",
  "key9": "46rnvbZmH5JzsPxy3MFdQ2uCsR9xNMu53XjmsQA48ryzZ6jPAj7PD7JUncsHqkd8iQvkNfAdh65oyRjxJitRRMiY",
  "key10": "51gQcBx3ePu41kCEkbakEUxZ3QXNTojnXr6dHi47rW2vxoirVgweJmX9TxjPPS5PQgTJZAL3EJktbMQL6boByj2R",
  "key11": "3mzhqJTPAy4hLMtLeE5CmW1LkRwHDeDHmLxNNk6CF9ujcFpmUr3uP63piQ77wZZWPep5wJSsi3yNJmub2mqjzmLb",
  "key12": "3BYx14An5LSZVCNDDKPhBXbfkUs5bGZGdcbDAQJPtzQJApVoVLihMY84HjDv4yNPSM3cX1JXQQo2FmNWofnrz289",
  "key13": "3mrcA9iXCKnPY2FycToqGBNzeeFKTMeRoS9aoNLSkUqXtDR5X18fQPCjNLrG2PZF8Y39LtRJZapqXLLbyibYuGve",
  "key14": "aJxUn6bdw1TrNP1qH8oogyDwDbe9if61GtUY9pnqRxKDnmbwqpnEavVXnrBVb5Vg5Ukmmzp7otb47MGECdoDaN3",
  "key15": "29T7y36PPi9wTUBRrXXyFtzrv438MZb2aHrUWxaVLUF3svQUHkD1xkwBYkU1a76GTZzt2BSy1myz3teHBmtJjWQp",
  "key16": "21rW3nH7MWpx85meJxdoe1WiTqnPJtYpsSwLtapL28PoiNh15nRnmRg7CjHWk7Pqk3rPhVpEaD7U4mo6LUatKDCA",
  "key17": "5UBraZXmK4dEueRFMQwF3GQvmQ6JwxS2ZDeENbgqDKP9ooPhSnLv92pe2WnwXCKKtARQvQ4K6t7dY7gZa4NYwBmw",
  "key18": "4ksQsHSJU9KD8aAHd7NCxZdgJB6JeL1dT4masLdKNuKk2z7gQEs2wxyymUmVrtxeRKivoEYyqb2anGnJDKJPcAx8",
  "key19": "32RZ3TqoR7dHM12LtZhMshDFC2gRtso9a3S5vyPKMnhVh85UXWmLaMfb8U93ZGtghpzNFKTEHfuNDgZdVfhZCzRw",
  "key20": "4LbHTSqFzXS9nxZUVSL5MXoKsjCuqiv9CbJu129NF84Bm7pWc3ASXRkbL6yETEY6ipnsPqp6PakvCGGF45D9VDq6",
  "key21": "4rvkJntscjyYD9KjpDEtLAZGERSfokuY9Tfa9oviX6KNpBYAzreRgvM1uyYdufxtU24m5oNkiuurDgh22xz5PcxW",
  "key22": "32FRAWSyqavtS84CEpqow2qPx5WiortBXhtYTtRyAbyrDktkcTMnjJcJuyHYnycW411RknEovqAsC6T6kfPBNkm9",
  "key23": "4Y5EZMAB1aS7Wvz37LhiMvrSVYkKad1h4gUgLASiAqHzkW1qZCho4VxRKfVhw1qN1tdyqWtHGYFe8r4PhhKsxoA9",
  "key24": "32KgLa3EFimzPK4kQPgsJLncgu4ndQK6JxpoA4gy4uCLKPojF8CgGMnwAQBLVGHxYMLeZLRTwJ2qPKhUZsbXDsU9",
  "key25": "3zfasi1a9rGk2W2pfE9RsxzH1y7nws4ke8hMpMP7Y2paKJnLkRbcohjjdoJv3qwKSgq3XQTrPvsY5hhSu5HLGcdo",
  "key26": "VJz2mxJn7nUWJ5GMDiPAKY1JQHrp3sTnUJtWhZ5zASATWY7UJ4PPKNYez6XCBivdmLEis9yhbtMGr9pHXBWkCmB",
  "key27": "3ug3bbriNNk7kABoFVdZBqwa96mfQTQJVw1hdFouPqSBL12TareQgRenXCQ4LXbnAGDTnt7U5v8bAnFAVkvzJ3Ht",
  "key28": "45ZVSDFqGncuhkBanZ5yJsZnNmZ1G1qFt4BgzK9U5oWQtazkoCQAx6kfYYpBEcMFNfN1z3edEbKrtmAaag7jrznD",
  "key29": "2sbQdBk6t1UdGk45pKv5nvD92JX7cKJXERGh1zmG8H43hjWxVWttc6W8KdcS1ymZ7tbkwCzJ5gt9YJ8pSTcXqDjK",
  "key30": "3H1kM2F8rksWTUQVFZzioXimDdedUE2StJvRdbddYY2wXytckPeUnwbTrkU961Aftc1MWQZrzqUbAAtggNomWy2P",
  "key31": "57wHr3pv7c4b3rA219JVYa2GFc64ZMGQKdnspghBqaouGL6QaUypBC635Kbo8AD1cFAhXRn3kpoQBXG44jd5GCsw",
  "key32": "2c3KApBX711TVa7hf3vTNbwY4SNFgLXVQPnGreL4gKEoJom28vNMkXPNuXath4ykoE2ktD2Hu5KuuFWVV2C8y27U",
  "key33": "5Vc1mLZc2ADpvQma9vy3412rAgsk9CZJFzVbgMEo7B6T2sBKg4ceGkYjoL4cmDrwWcBSuEBAgE6bbsMqaNMmvkNQ"
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
