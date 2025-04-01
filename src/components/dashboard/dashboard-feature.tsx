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
    "2H74iWEa91FwA5jWugfan5cRT6HKZ1VJBDGRXmquR5JnJMFbBNGrNwgZNoxxyfdc9CXtJMupd2ZdG7kKfFbmSWas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NYpAZhvPABheqaGQjHUcjhHbpY9qG895HLTv8XJgsdk3hQqSLkK5cCJ5hiA599WtRMXMiENTx35MF2E2gin7tjR",
  "key1": "532e4ChB8v6cK8AWXV2bEB5Wesx2ixesoB8927VzTetWgN9ua79CEFxQ2BgQGtheeWPGNV4d4dxpfmuNGkWUkrvF",
  "key2": "5Wfaf8nZzJSQHfD6QKwdcwLTuJdNbsaoYkEjp3hQYPvJxzC4LK2QaEkFd75wZdBR4Eo33UN1vwmirGgcHVyePicy",
  "key3": "619UJ5yj5uwrFx6wKvupCq2pudXV5Dj9exPMKGApbfoSWGxiXbUjmXYkt1t5Q6taw6LMAganedDeDcwVbpMRrqfB",
  "key4": "3SZ1fc1CEHb4rhHFyFYDfJCMbNV6sA1sFXhHuEKbNuY8BsLspRAQgdzhPmnmPWjcmxjwuGehDwebUpXcq7dYLSHf",
  "key5": "256PNJFyUcNHFL5EjMnc9Qv5ci3BZyvMiKuBJJcuihEAoaCx8sgvhVPEkwogjcyTD96ssJZHjegHzpaLEGWTVrbt",
  "key6": "nrYrShNzMyZ9XmhA5Yj4uhMk7G7QXKiibR2BbuPupueeV5eDfkwAioeLQLaV1GrXa9PrfwX6j6GTj8AoW2A2h7q",
  "key7": "3W1KT1XqBWYKThsUv8DW6EG2qUNHDQZiYeN1RMhv8hor6VeBVHYSJgnMLpbUfGftQAPK1JUUbwnk8hBQwXUgYQyB",
  "key8": "3BheS3nNZsLsDFHZFcnL6RxoxKPsJvuuyHdkdcxJQJKho159XkCrPaCPxBoNzJcNsvQ7v87bX1Rtn6C5u7t2P5Ts",
  "key9": "5tke9nUdBtmjzMHEF1wkw1s4MtcERygdqKJmBnLL9Ft6A4KyeSVyZXerK8dTbZpGsP6kiJmm4pvMD72eaQj2phLM",
  "key10": "2KMFBQ8JjiUyonB8ELj79rG1pwxj1rRcWRCqoqhk7RX7zm8zEn75t3NZUYy669SYKLawozsPSBJR8i31RTb4EXT4",
  "key11": "3bBbYke9UvuvBZZtSuGtTyB4NrWRGoLKQrspkwag43YoVRtDpSoLKMvZroYNPKncbQ2Vn9QCdpNmLuvfTaqvGPtz",
  "key12": "hdPcbwjLhp1KWYTZDTEeEMssmmygcXCu3jNg2NekkMvT6etJXCrgzyxz4ivH47pXw54GWRyz9honRFof9L5Rjfz",
  "key13": "5iejK9FHtmXM4mBQXSHjHazP8XmNqZudxVHE4xiBh2KS11VEwAtVi1494Apx3FPEjLASE42thh6vHeax2WnjKGXM",
  "key14": "4pBvbqYyFHqVrQd6AERDdM2X8xQV9BAkr9pNm6H5WiT1CXX8xrYHt78gdNfnk2qHdrPHLcaKaHGphgp3xkGxMzh8",
  "key15": "4P7VLDgSUzGKoEoocyHtRqp3goa8X6W3iZe8zyEgEHFqKgGc726Xr4eqxRyfEThZ4DPHGUN8hZsBWRmDhezdsNQX",
  "key16": "2WmTDyhaxLVdYTLn8HguFmTxVUoKQthTxuAdi7Crdkugs3qwFV1BfsyMu9ofbe9yraSsAFLnK4JyYgaqhfPzXvBx",
  "key17": "qSEVyUur4RTfScyii6qCW9hkbFyKd84viwnJfTanYx9XeSV6judg8X7DPzSVeC3kH5K3qQiBzBAnFGYxB62vxk1",
  "key18": "4C4NQes6DQM6yeaz8bgp7wz4nYr4Rhmx7VsL29WEez9s2pUr5TTxc8wt6evXqSHZmz2pe25JGnw7z9EVmfHSqjA",
  "key19": "8DuS8kj8xwAYHg37ZXhixs9hLnUEX1pC1reNtpSgJXREi16sP9DfoEcCTu9g2dtuP9mQo7QwkdEZERYbBHMoKDR",
  "key20": "55KPSShJG5xtRNbAEUfeekQQd1bsxTzYEV1BnvW4E2797cU9e2GgSh8h3TfzjaX4sTB6ZF3KW4z4mvNoAqsMjfSG",
  "key21": "5C85p2ZWHZN5e5uCngsRaV3nYKURCN4PvPASwRNhZXKDiXQ8rAfYpekkG37F1oNfP4N4MN4DSBEMrpzTe7AXfMxk",
  "key22": "3gzgZ4W2opH3MfzB8vgWj6GKKc7hNaUsSo7iTN6pM72h5AWQowU83bpawuq5mYKeaKtCgsnnhrB2ChWBaSXGD78y",
  "key23": "5o1ZzRf9eea2z6GFAc1keqCEdXV6yAyfyFD3BNrDiwu5TVLgVZZ78GaRGwZFkfVzCJDX1EFriqA4jgWGXY17e3JB",
  "key24": "ohFzGteg47YFSGZptRb2rCJmvV1EZdmKWfYW8nqqEfjGqygcGKgC2NkTQ8PdSFSPkKXytAeER2n8XFW7jrtDdCy",
  "key25": "4qRGACrD2qHNWUkNjW6RfzBpzBwJztCJT8LN8eHTguEqwPiHqrkUYKwHu9LfHHxXF5Gv8R9aKcWe711K8yj6HY71",
  "key26": "5BKqM6KJ1h31ZmKBmxZoMGrytnvVq1x6q4F5ABR86mVQUVf3xRD2ts4fbVhKeB5mf6TKpr5K8CgdKfcAKeXh1av3",
  "key27": "24c4vydEaJKRtL4s56Y1gAfGa9ynTh54fcjrwhZbB6V9A2U2WJq3CoNQtYF97eSQDnxhnWNZYcDCrPSTaTf4xmBu",
  "key28": "eD197aaQrTRZ8FcupG5UBgk6TJ9UevXZZfmqKZNiLc28rh3ayPpWPqVsYBgcgkaK9JUzuUpvNAmMAuqqj8nvmva",
  "key29": "9GHHASqXYZ6p1uN37t1s8aGV7xeGQK4VBBCgcsKdvpEYVYPia3auUPekLZRW7ZU7uF8om5SD3ivfQXyDHGcakKX",
  "key30": "4ZX7h1RybBLXPM5K5EfXAFnH3omiQVTZhRsRgePv7xWbV9tQj3oac2JSzbw7yKFfdwDe2FxbaD5rnP2aaqF6b8H1",
  "key31": "5pFbxTMwiHoj9MKECzFjtRe3HiwNiCer18K7TmJXM5tNbSADHifbxQ7g6o97pBYy1u9JvPcK17eMtCLkQBqX9ThA",
  "key32": "4QKp5n88csK9kZRxpb7as4zv8NUYX3Zf1QXBgPUt6mWF6PFgfyppnVcftnViuoUvyHExr41LyUftUdyiiubDa6C6",
  "key33": "3cf1X6ju3Tgam6ac1Eo68J34j3DFUpDBgjru7Pbbd4DDt63NcYXJKNaVPEa7BrsGN54GgghriBN6TStHu911vY2r",
  "key34": "v8vRJxbKDsXDujKnKHJNDdYEjJ5z5UdyfDu5zJXxop5BdtV2PEWJWBebHWew2nXnrK4cj4RgiVQ6eN76fVoYXDg",
  "key35": "5mqxokkV2i79pXfoKspvMDKqmfJjzfJFaJ52FKQ3GUzvoqq42pvckmh8Wu7VMpgfV73pNGnBM3kctrQXD2SaH7ii",
  "key36": "3eqPQPbUzGa78LRhFeu57g4VhT6baahZbFSkmHLYGnQXMde4fvUwSCxd93wrVarw42gxKn5G9xQ3ohzUrhkoPCg9",
  "key37": "2nwniYFwwfVzzzHUNT4MoU8yKuw2nHiqN1uhhfkreZqY9M7CVDatvXKyC9gEpjCX9eoPnCcnG9FpbTyKVcA74eR9",
  "key38": "4shu5pypU5ua9AzM3jnXACCwZfYxYL2cbNm9257oWFLSk9PumukBmaQtxYFGSnfhenURNi4XErv5G27MV4TG1eqZ",
  "key39": "2pKyvrV5W9PGqTfvC2hdBSirnLCoJ2vphdwLXZjCg8xdJXid9QZMYUb4PJyxKKUNKrvUXZCaq7MyN21Lwqr8VRky",
  "key40": "5hrpzbatu6Bwrm1BgaHsh1J2KY6jrDzE8QLvJv4SVKrUFAWAT6cZyekAS8QVjCkRqrs6PjZYzKLxRAK2Xpr99stp",
  "key41": "2JqSLTC5yz1xw53cTikhJWX43m1SEP8ddJmvZ4CiQxQ26KMGjWcf5cgv56a2gTgBdNXWRvw5ei8LGrrZSy53TFhj",
  "key42": "2RfNpfmV5xQS6UieHKu4SoNtkKjsLYDpAewm898NrJ2EH5L6T9c8AY6Xo5G35d8ABbbQjR5xzD3eqs94P9xapKEE"
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
