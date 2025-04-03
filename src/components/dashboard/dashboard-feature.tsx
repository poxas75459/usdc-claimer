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
    "3F2XH3hXwvXhkVggT9A6jH9njHRUuemuVhGX7k8UDYzHQeLonF7Kix2tCEbT8rwovxDPKJZvV6XzLMFxBGGPJGwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EK6j8qkLacAfsptgcYHQYJkWGG61zZgWELJ3NvJZDVWAch6Ek7cmdEvDubRz4CCEUg2zGhjXPG3v7gZozyjgQyR",
  "key1": "3BzKnT7GH1tkVByjUb1GF56UYXeRsKxX87DmjXstin8zXiFySLC7vdGKynT2TRMRMsh5epWzqPHkKCbRG9hXFzLo",
  "key2": "21gzeK7MKihKYac5xfTchDcjk2NwXVZUMm9hoEPK9icy41RmymNWEra3aDV2WYY9wu2bnaht6ENH3K5LbaS6yRKN",
  "key3": "zmYPmgFodBk1kzpobKE1k3cAAJpkRs5cVNALAzJdF4UEBsUhf7HYbMBEh5TKf3b6cFFHidEPeZy1weUQa1qjqGo",
  "key4": "2eEThBtUsCoe62JdZWXjahibEsR8ESE4fhygGsRAitiSCLBfsb5dXYTH5JjJcaaFYeRhqGAMDqRpk5htU6xDypEm",
  "key5": "52HuwhEng4HgUvDvo1AU7E6wuRsMamdJ2WBBiW1GVNrRXsk6nsorXXfvt6DK166877DU3bDHuVDNFLtxU3T5Stvc",
  "key6": "5EL5nPVgTkhefhCJJyZNNZmJTCQ1ezFr5VZXP7QMjyhA88eLfEuo8J33dKRHrsNfkj2HdrxspJ37CH46bQMeciZE",
  "key7": "4GukCAi3wpxtcX7NdZP3crPfyVXaSZK1SUCijLeSg8JSm4uEdf5VFchD6W4iei8ieGWGDTQwcotxXvDFDDk9cTeu",
  "key8": "kSvNKxBzxjVQo4FwxwNPDfDbKAonWtiV5SpUZ68J4YorCHLmzYDZPjgtdxS2U1sn1GsF7LVRNoBSjJng9xSWXYe",
  "key9": "4tofzT9LauMcBNnkUu8c2xsRU23L5z7uahmE4dXhtgwrRVLUry5TCphow39ftwdQwcjFNyRr3DWHg43WCYFFv4c6",
  "key10": "3GudEv7nRVpEqHysqs5MhLLTaGTfE7xyBGpaHKMV4rNVBjYwWkZmoiQAoDvYCK24MHA7RMp4AvoGEWBHzUba4JE2",
  "key11": "3Q2JCAS8uXhQD1UTEmfG1jZsakLVWXuT6smhZEhXBqx7cyns3sUmbHB2Gw2wiRdottL5Q1T8BumyCEXukeVUcF8p",
  "key12": "5MvsNgsQRjX4aGiwMjv88vP7UzN72YdGSMsbE4DALKQwXZwqgG49Lt5uMoeVhz5YZTvCrmzm5vzjXUSBVof58ahB",
  "key13": "3sgfek2V6Ef9GLSmywet1KjTFv7QDBr16fDgZtiGsPvtzgs1Z5Dy9uXnvpAhAKkwccTQRFd2GQchZ3kzNPDoN3pi",
  "key14": "2Bztc8ZzNiD2FnEF8Fn8ikNqeER5uavCyCwDF814QMDa5HBaQprC4VUvV6922WNmgWMgBQEqAKfRLGpS7nWsrwy",
  "key15": "2exbvh8nLrKtZ8kLxB3Gjfbb7L6xNWpwFarQT3MrbGXedvNx1tkymjnDQ2EXqtWVWm9QmHCC8dpmVZvo3Nj7siqd",
  "key16": "2JDA2WuixMLzxt5ePhqKxgqffXuGn59Uji3m3r4dwLH7pb7BYQzkTHB69pQ4ZTW1zTGKHTsnA8hm6n8mcUYhUzM1",
  "key17": "5mLdc5m7RnEuKwgeKGv18F97LbqQrTDyadYbhnenbUHCfEdQnA2ToifjbBW3bqtkgaoz9yfaDKmNSBEz3ypntUwJ",
  "key18": "HMTYk5F4Lh2TzYPk15pfxH2P9vuMtVTW6y99YTNrEEWrEV6PwpX4SvH5SANXWQB8vkwWEfqcrjsMevX7NQ6LALA",
  "key19": "u2rjgp61Rk3TkHWWmzEJfzjCSimRS5cTHD9B7REJVDnUFXKRVZwTpKG6L9yd5vbn25HNjwmfckBrKfJDv2tKNpv",
  "key20": "4eEB6QZcTdhvSFkDF7dXhRrjnXbxUF5WjTrRaA8VYHZErnebaFaba8mvf1WJrG51VJdHp2FuUqwNmBLFSEMi9Br9",
  "key21": "5zQwdJZthHyccbpPjkHjNnfxDQdShAo7dgFR4XhNuySSF2dbtBtddaq4uwVbKhijkAVjcpAyfHATxXyTe5LCmJXw",
  "key22": "5qx99gVwdFSiDGeva3dGXnz84zr3Gj7WY17uVJDhFcZXfYx4HjWyBdK9MJk2cDjYyuJSgYKKdkSisajxYUaDHXEp",
  "key23": "2jiptBia1EttmBXnt3Kr2gr88zbndnCrcTzQfXBx5TYaw7Cx8WhyrDCX4GZ5byfWH3fczqoJjQWKZu2fafwnVrt5",
  "key24": "kB6AYJekwPBcUPXSdwhPx8W7T3yFgWsfao7b3hDMRjUarFGJUWadpCxTsqQwKCRzE2Svni7kKZdCRAneaGz7gQv",
  "key25": "FBcEy8WpHjHpdAbXyWkMguYc22eoHHMdedSwP7Jk5dktvhm4nMFnTr3jNAkXRqeKJqdULC2TZVBcCbRgNHYk2pK",
  "key26": "2Uyhy9tJR3n8rUk8B1soMv2PMncJSSitrFbQf6C6ai4oPkhx6FVenmJsqF3YBYrLr8rTXsuNTEjDNrUYBnSkm4b2",
  "key27": "4NswRmLJubX4bsQoGKPgiJsgUuiU2nriV2RGiQjaCAgCAKn52oA6QLhN5gGdvrrSnme6VtSn8x7TMTRfdCxok4pP",
  "key28": "4P3fu7rrLKVqToZeBv2EgmeqhXLEtiYcSzZS2tyjP6doFzUVE642UkqeviySqq1btHu51EhNjirriBfk3qzPQ5oB",
  "key29": "5bucdqpQkF9fWTUHsVJAJ9EVZAvrU2sJCCYo9C3bcW7tS1f2ANvma8RRBw7syqb8y39hQtQYjTJcp52ijDPrDTpq",
  "key30": "5E5U8KNHm7Wgc7rE6yMbvzPNmYhXgCfjsqKdFGsCAmQpTddoLo7DuRtR4mDfxBHwf1aAAWbhJKAaBkvxkyjqkR1",
  "key31": "4N9PY4UK522Ne4kFrTWVa43eZHp4qYcyE1XHS2QTnU2BeN23xbafhnivYn7zky2oUwkVHYcs89Ykbj5eAJJQq8rT",
  "key32": "2r1ZT1pzkFGnS52NxRus7ATGHfYJwAdqXZsEmjvNzjVDcszzHDUtS5HJcmUuQXo2PH3QSqzTSvxAkDafdzzMEQZH",
  "key33": "62CsH1Zi6Fu3WyYuRQDwtWGGgGy4sFry4f6iAH6bnpyjuuNtpcKzHFszBwZ6YD1VVnLaoBeRPc8jtjmnQXEtZ8S6",
  "key34": "3npnRXsXGPFTc44VZgu7z1zvuDXd6eozWcTmdk3CtNQGbrJR4QvtR6mF7t8Mrusqo41XXmrnZuDvAH9SGrgJwzV9",
  "key35": "211ujw7kK5McaKoV2isC9dqYHvyCzWoT4ZcBGAeK5jUp1iqNTcdUmqioY13mcmKWE5u1c3LqrEP61SGFAeZhAkkU",
  "key36": "38nz72fvMQJuG86YpY2nS2KiStNgMwC3svod2X7j1Xe6ncM7JEYZyjEZ98c2kVCLfTZk9Zro6nYrG45iwBBarx4t",
  "key37": "dJ8EnLSeyyQJsr6oFzmXJrHLuXLYccKTEznxY36vep4RZtZaySnZgoUFaLY8RJF6vpDxGVtNyaWt89Go82L2G5B",
  "key38": "5CtH4cEczA9HNhz3DZAHPd7oFh4sSfBXDZB8x168RFnkiR592d3TZUmr2UQTqQfhw7e6fkayLxY5WsD62Dnhee6V",
  "key39": "5gGEruowLHKD5yTHhbCHmWDKatb8k8p1FW511WTkSdSQTrtxt46Uxh8ME2bib4r1gHe6qR44thXF7DSxDd5FS6m2",
  "key40": "vae4kPpHj5qCw6hpXT5UNkx6wmhcvBXMpPqZ2qHMHhCGqq1WaM7ymKVyAtN3Kb3iFwi3rDCopNfFN3DzbnPtAfz",
  "key41": "5KGkZDFbz9GWWMYVW1Ynsi6oYK8LrN77F48nqC6Ji6mm1eDJX37149upytJ3yx9brnqJjcgCa7yo8VSb8edZ5x5P",
  "key42": "3s1J4RLyrkv1ztwLyViHzNnQmJMAcjqWb3SWRoJYtkChQQQ78Ya8EP6s55oNDFBbK9Q21eAjonHCDuvRoWcgfiGA",
  "key43": "48VdMq8p2ohmZeSbwife58V7PChVzBaGFTNBJkxNvYgeG2a2QNtotcXuZjubDdxgf5cEQ1Y9YkGrasv2JjNqCiQg",
  "key44": "3XpgsuZyaivgz59RPWmXtpeKaoB4ihn5RyTHUnj1keeyNwKGFLDCefMYipx3fFxq1hKDLoYYrZCNXS7QaJza3Bgp",
  "key45": "4PUZjM9svePPhZgCcfzCVd7ipqR66D3NLo7wHVBAV3KvgNSLeaf1ibAtCAnyypQc92LzcmvEydAG6rdcmhapzrjE",
  "key46": "5hBrnGy2QenfemDrqdb6bbXrTy3zmEhDY9yAe56DGabgJGXRqWkctJKJdTNtfFKHD8DSVZU5Li3CFEh4n4K69Bvh",
  "key47": "5s9Lb9JoyjgVMNTSeNrM2bWbLE3fAdmRGBgfa9eK4J2EabP2K6H2To8j7F9EVepVgVJj74PEaVDUZGfhw1rnvpJg",
  "key48": "WMEi6gzqfa3os4wd9xKT8np2Mp1VxHxxLbWxdruTtmFx7mtZAvJ3pfqp5YC8qGATFEvgiw5hCfAzJeCEoQx57Z6",
  "key49": "3UAEJZwoxwTYvXEfV1D6FxGKMXD35dUCq8TVN7edPtB3mYVMWCcrVs1Q649zeftmmNyip33NGmtUMQxh8H3yZx9J"
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
