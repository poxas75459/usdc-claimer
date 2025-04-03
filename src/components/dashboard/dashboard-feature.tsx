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
    "5f6bnCP4RevCZ393XLCSUmFfUB7LGgAmszc1yg81oF6znowmh3nno2jZuXQdp7dwCqhxNSPPCVaQtwNGph7RestS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8udaHjYK2itMZJCkgBNdpM4zC7meNqkhTmx48GALFU68xWWrP2UYoYp6dfZjRR3yHaCNoh238LHrrtLsZm7iuR",
  "key1": "3sV7qGM5LMyRuvhAsiiA2VE4dk9xMZaid3EigjbBfwCPZ7PyQVvavdAvA2NkoJw6DxheViph3PYUXpPMXbSkpzxr",
  "key2": "gks48t4Xg7rCerHvnYZp2wWrbXAjNpR96pArZWQrpftJRXtJReKM24bCmaBKyYuVLMuPpLcEfhqnN8Wx1B1Xqca",
  "key3": "h5gL7ihtTHbYDhBZ4t4Vqr3zZfomoApocxtqZbCttaCzimRZAW6BP3r4zEgVV844dLeZwVexXe39HbqEQJZSHja",
  "key4": "67WUeuWsMYqCFdXCLJH2ck9pFJmEpHjxVbs9xPbN57Li4toxbEUxS1jC5YV7HJKFf6mXQWhxWXjcLHexcha7cqWT",
  "key5": "35eJbwejwUFLkDpXYQ69Pq7koukVQReuAGYrF8Ltug5iTjcfwog5coHvKvCrkShATtgDuNAHoWEVZP3Ah85rwcnV",
  "key6": "5PpP4nQHp5CrSdbkcNR3Y3UfVyRvqTARfzFxkzvLW7PJAcNWgH8Hr1LbUTHhdqxn2REH3fcu1qaqC9X3t5bVBRuK",
  "key7": "GnxdBwsszfNxv22z3hdcmbk1wr675Ri3hciwdZfmkTNJguF3StHsEQuchb3XXWQW8w1gH6zFCnfpUmfJMc266av",
  "key8": "5knSXCMDheF2oqJC8FKhQzYZkLTwZEhRnJuCoQryPFijXg3ajd3qwTeqKPvfS96wnpvnfG3dTfXMwx9rqJL6iBoL",
  "key9": "437vwuXBANT862essZsEu8YQ7sEqUpBrt8ELeQTxCwRMbRw1n5qnTwR8GwJQaM7unxvfgUh69Pc6xfmeCJ2BqcWo",
  "key10": "3Rb6QXp3AkFuMapUsdAHzXinHytMkhFoBV3bNQ6bnEjpSAX5u6fUKD9uQZ9crckXExPLFoukswAsovZMidBBrCWa",
  "key11": "5FkbQvMtzd3yk6qvuhbRBWxYe4rnqw4yf71k2b6E4mHnUbCh2n9kLqfePea9dH9zY8q5QpN35izQHVjZX6rRTpd5",
  "key12": "5rFX7Nbq4BYzzmrg2mHV2w7WMJZvf6sXqmgkeAPuiTaADXvxLv6uj2pyP38by62tBaSEKdyF4xqZyaVdhiXn4HF8",
  "key13": "5j1b142KgesNHLFcgANTwhw7Zt8BVptkWJVRffMyYR9c53qaSENHGdmuxNvnK53ZFE8nZG7bcz2rs9zFov5BF3bh",
  "key14": "2L8a7mjVRVMWm2vfLFgYSMDybk9TLthcHFaXww3vXGgtPYJBdZKtZEa49yGo4mTXJNmWKPzpTgx4jZmKoU7jb5de",
  "key15": "EGp43xTRbrhjQTVNZNwkBSjHgjsXcMCZysuz1CDoakPi2a5QgrGWrgRTWcMfcfj3ea82KCeH81pVej6UWsBfDYK",
  "key16": "5ADhDB98eU8pNPSamxCiEAHFykpL71yjqDWDwdDdpF7dkNEJRXUEpfEDAFJE4uirXkp85sqWQbT786thKE88MFz4",
  "key17": "Honx4oqJiqo4CYyoGniPKhZKaHisDHxLX9fyKGsCprqpeDv4oK2egZo4LmYejpBiawVJAEYuvGCnpyfL6vjuDbo",
  "key18": "334sFz4kymmu8QMfDfLG3ue299DVMZuDTCYuoxMV3ZCcLqu9AAsyoeMaLNae9V7477twufqYW6cGMvcwePftANdq",
  "key19": "L3e7BQRaXwhaaFJf6jGoq1dnZpxWbShKgEvz3P2S74uKipSbZCttzC4B6KouvLRjTT9J7mz9HnS5ZPnUiZTo9DC",
  "key20": "5HrGqAf35VqbxMzHLuaEfc2e4vHkR6W5Y1vWJjuvQUx5D2Nzwitwh9LVRpzJqcyvLjp158kVhhGKgAHgPHqexKJG",
  "key21": "2DYjxtpx8Hs9Av1LTpeoawZ6Vm3WywCMTydGR973de5Bwqa5XJ7HChmPzEDq9J24hTzhMSeM1EvC4TunM9a9k4D4",
  "key22": "5L9MeKriqFR2jarztYZUr4UkbdKqKEDKA16Z15MDhBKbjetFXbj3BLcMr7SQbF1jFznQGXneU64NerMLJgpDswJ1",
  "key23": "5n9zH7Rj1jwr6ckC7mA1NWtSQVfBNuCUDd8bv7hYDVFrr8ZJGnncC89zY3a7tVuShEUbS1vhnHJHvEmowpGkti4n",
  "key24": "4v35SBy7fhoMryVjborVfCkzz25WRjq2ddVmcZLauEZiA33M8k1vFPFT1iWYDtWVqrU9hF4A7Df6UwFea42KomuJ",
  "key25": "2UrhfCerF3xNJEHF4X3jKrGje9B3itRohmbLZC999FYnZFdc1F7Nbxs4u7QWMeFoLq1EjbRcrJXoqYqeFvG9ukTo",
  "key26": "3hW6HMWWjzniw7NFFVH5hv6tzQqTcCTywruQErz6DMSXaKmLZLzN7721dvKsHj9xHPtPbdTwMkwRD7XqH7rMLFfU",
  "key27": "wYY175WoCveeZfLzg3m6UyUJsscfKd9c2UM1HytrCFRXcLs7F6VvpDupQUzGrD7YEL8GcoEnxktPFxyFrZbCUBD",
  "key28": "4WubMWRJfjqaV2Wstoxa4QqKRbm4PxAf7avHDBmNWJuuMp6BAFchKe9ahQCL48oZJx53pFLA4TBZqDRhTDbHrtw6",
  "key29": "YGoWPgodAGCop8vbqwFW4ZjeNkFPyaah2uaioyEQVLDiXZSQHn3a3d9sd1RkYsJFMMrG2iHj8tLNUewNoQFT7Sk",
  "key30": "31mdAbbQcFAz9Epp5okhG5eNdAR5RCjZ4m9gwikgjBCjcYnM7kB8nTZ69QyJv6ZNgYpUWHHCkGq5QFVj5EbEnTdx",
  "key31": "3TZypmq1EH5k8iS6iZ1gGxDdr1EkLuatF3LJS9Hi61ecMHQ28d3hEcHy4uQGVVJb9FDGu4ix4SdecxJwCghFKWti",
  "key32": "4V4fBE3gWt25Uo36LqUp5K7gPJbRUerxGUJN1SXqncpLszNgH2CqtbK2pDWEkbhs9fBKp4XRh78tLicKZfErJ2Dz",
  "key33": "U4VDuGqoMJt3xAh3Q328HcoEnsnExdoojSSRR9NJrorJmTpNKpQeAbfaf8DhkqJvN3Ab9WsS6w6wfAbxGrbV64n"
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
