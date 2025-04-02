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
    "4YrSwv4hccSwwzUrF35Rr7jXxV1dM5rAiqfhA8ucPUoujrkWDj9zafVr1WSiZ9uDGWt6gzfp2deQrwN3iC6sgdiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZQj3srAfJNsGxU3yUwrVpZybm6jMvVv5c5nnBW3kJEfYjFLx22hRUj57ibP74soHXWRteTVZBXktqwxnJHxF53",
  "key1": "465s51BCfERQBKvuuat7t4hogr1NcdyMHgHYLQubz5LjjPiiVCkEjauwvd1t2zSBgyyypAFwYez1GoUVCpG3musw",
  "key2": "21wLXeccDghv9L3U9DAgUnZBuegmhzBGRZL7VjLV4YwX4zzBABfhnp3fygC8u2L6NHm6eVpDiJf61qbeLdq3Eakq",
  "key3": "M9EyxQh3k6S2yMrJZNa1YNEcD5TAJx1xioXTXi36vZvJdhPGoZMkofX1PRYFYcRuEXgjuGousPnfWELTVBWNU1J",
  "key4": "zYdv7yVFLZV3XjNDdwAEMyC6RK9GEBrujPmRBLuXciBV2LDeVSFXPbtqG91eAt88nuaS2Gbygqe3TJ8EBAiYEWc",
  "key5": "3TZ2A2TJShh4bt7CnmRhaHVSrWDKcMuCmVN2vBbpNG49bGEnP7UvFhVPXi2xSd1mwND1prTwKJdst8kfpCAH2hvT",
  "key6": "4yBZHikLXp2FHTBC5XRYuTncWQHNnwv956m7YKyYjmgaTX3KQG7ZSaQKyqzqMv3qcx7MsLJ7TRvjdY67RMEKzaMb",
  "key7": "2kXjN43fbE2DJi8JZ17Pfs2GgBgtP1MUTztmyY2EvBerLqjtPSESgwJhEmicNHEh84U5ycFUEYb86QqW6mCkELez",
  "key8": "2LJRpwkPw2ihScTrFnmQQAqAU1M2Vm6vXh3wp8QVThVuioiZo4SkxqER4gq9Z3mTRCDEooy3ymVx4s9y4jiRKNan",
  "key9": "3SZZoPzU2HGtxDvbAUt3QKjiHJzi3crbmgLdy4vmWuCcWwaPJAZmL87Qc47nPA59CNpA2djZ34ZTrB7KQsg4b3pX",
  "key10": "3vf49133fY4X7d77oxAt3uRTuGoHzYsVSXcGvaavECsKbzNkChgWB3pinLprK9q4HLqoSUyeQ55Kr6XPJ1VpxRnF",
  "key11": "5ngaMn4dDbskgs7ZKbpHq2RKiojzu7aq15Vq6KocR9eQLJof5uN3apLK9s5G6SEF55Ycgf771RSg3YoWoxmTdomf",
  "key12": "41F1qUgVcdYX83Xa9dAa1dHiXLBYN1uaqkxS7514pfpYBAFNYR9gErZCQXEnun8QcybujULGB8p7vMs8dYpdMMAP",
  "key13": "2jAN9gzAH2E9BS9488gh6qJS5Mj8xrbirSMs5o6fFE9945abEfQMiRRHgUsZxqSnYqJxdtjpwWMDkKxr8cffYdvK",
  "key14": "C7NEWk9Xk4DN1AXGDFzuHPf7JcDmEn1GVnDJDxKa6rdXi6v38hYj34u4b2SJWbvA5ZK1u1YbTrayZN6tEcZ9CQx",
  "key15": "67NrRax1f6XFUREu2p2VUXfc3A2C2qpgfbHWZmC2baxUSLmbTbWFC79oweJvmDp42QXWRtuHrPduAWUja8koRTqN",
  "key16": "y7XMCnxGAaYAa66zDgwXgKEnKg5BioBbbdJ4LQtTsr2FujRTs9urRuCMoTVEdcrZGAPWv4VcFoeVEMP3ZaPX8eC",
  "key17": "zhQBXEAs72qjUAj66GLLNjXnu3A58B9xS4Ai6yx8pU9WZsaeuwEKLtEHpcZLLNM3SpBix9vasDvH53ifL7gp9pA",
  "key18": "3EpANV8CtS2X94N3wC1md8ULpbGNhFgAnN55UHomqUwhqyc4yaBMtxEsHioUbBbGAKH99hh1SJ3yZMrgJHdE8WPF",
  "key19": "3jE41yhyPYFQQRarikJRhbT4dAM29YQ7SkW2YCuzdxVsXrXgzKPpYDa96pPMsoscuVNGE2FoxPrXqVJXHnnLErVb",
  "key20": "4bNVPaaZkvk4PhbqMf9ov3TugusD6SkumH9B7waxu6eJXN4SUD5KQJF4vFHtWyk4jMsSY9TLAwLc3XkzfaCKFmUZ",
  "key21": "2t9Nsu7xeW4sM88GjvCnydhHQgLquXzDF18tM1G6RaBW8b7kbQYGsXBWaRcVwnzhdUHtvBnSvjnEznhWR22gZ1ST",
  "key22": "W6YPFXh46YMuSoPy3HKhjCs1wDewN1fGqwSBZC6DahZYgRe4vAPM6wpSxBzvtQKFtUJKYLD658BWp98gCYCXM5R",
  "key23": "4JXukptrrnHce6gMaH5kUdct4noaYqmGshwEVa5Hg2e6qQFK6kFaRocvrqWyyWygsm2t86wx14M1jo7AMnKwAtiJ",
  "key24": "2H29v5wM1myVkTMYFCkrL9RGJ7cY5RjDPBHriJkPbPVKitChhaL9AbyiixHiLaSE96Kw8PyHEzEqzjemNfHroccs",
  "key25": "4SDwPfX3VzyZhg19NbpjJJGxsxNC9niWpmxx6Jz8gnoTy23rPLUb7Hjk6Xssy9RjnoLinXhb2cLS5eLxH4ZnsGCW",
  "key26": "esx9eNQA4E2BPNzP9RaB4BiXL99oq1nPucFsvUFmtJ3GXgdgSnu9MFD3kQTogow1zHVbrAzg2KqSDh6Zz9C3859",
  "key27": "3yWLHqDnuh91VdkEV5jimrDFrcKVapinuiRcG5pc6Z31wTPQP7zNeNRFV7CzwAEfGrbC1cogw6XMvhouN1Cd3DSy",
  "key28": "3xWKNZ2HhskfbQXQqXzN54ujg2ebsTDFcCHbNKpvv7roPXbnTSTpSEZ1J79Z51KfdZumEAoYryGLah8bfvDArYVR",
  "key29": "2rsTKzU4e1PRHV7VRqrNS2SFWe3U1aAbwUa8g553j4gSUjTpZPsd6RGMLqAv8Azb4b7N2aXVfME1DfpARqq1CzoY",
  "key30": "3CgiFEZDjPRx25KEbegWR8MviEBWhBej31pa9p15gfyG1MnysChcPCdsqkTJtzEe1zhmncnKruHVgb2zDjiXpfCR",
  "key31": "2NTrJXDNRda9o6CPwQFW4iLhh2vGkcLdPcuf2mzG9op4JG2Lheun8JN5KVjdx7RP8uV9cvjtXXJzYxzcVqfEuo5n",
  "key32": "2XYVDeVH8uRQ6AFZZNWZdapRXBZtHm9h9squtB5GcxPQPSnNVWeTo5ttbocSyx3npoXkcY22DRvfLy8SvoJc7Ur3",
  "key33": "4yHQrWy5umREcLBrZ8NpTXXDr2SXmYn3MSh1QYMNZ93xN2ZokozkC8R7eDfgSXVsrH5F7HpBPNUr4BCcLmLV2y9K",
  "key34": "XcxiLqrEaFJq6uefsHDRoSiSMAKfpy8zpiLHBnLHd2DmwB2GyVq4ZCEzzd6zjg2j178YWGSdp1wGJ3YbnzQtRET",
  "key35": "3Zs6A9fpre2xyouUYMMeWnFyHkS6rzUcjkUATGkrM2iSNrhkFDiHBvh2MMKQrtFCLHmVSzeaSKXbeE8GHXXdTz8o",
  "key36": "4QRwoyCjUYnfD2qPeHb8fxPjS5gfScPaNvMsedCNWQGhYhV9uwkueu62mmGdsrJg2pa1FmknjDCsaACNTDeRtZhW",
  "key37": "49GXeaSrZ5zdJ14ztKajNepqV25W5hCAEEs8uwPzxxYJtsx67ZrR5WZWbRZAoLad3KYkWMFDhnN5ie4TaVGWx5tY",
  "key38": "4xnP2RFiqteHMhQwTGqrXLWhV1wt9bLYaAwWGkoQgXk4MWNk32PLaRbaE7QpR9hLEA1rNmF9iT7GCvBMXXEmq5Li",
  "key39": "4SQ62LmtdmXHe49TbfXi7JiW5UE9LjgDYkfpNTYwQM3D8oCC3UF8GJUShiZbaBS4k9rfVdqyPk3v53v8vtwJwLt4",
  "key40": "3uHLWLFiFZKKoygVXJ1TM5r8dSKWB6GnRCCE3N9pAtLPYbEPJgHRWgg7umYH3ArA981Fnpx6VdT5zNyaXBPSiSU6",
  "key41": "XnoRzP3ferqGfb89MNcVbYDfjbWF5msCHahKs3NhGuCEGx9te5jM5bwPaGbeC51auENbed9KnLfDnid1DHntRcv",
  "key42": "VsxvCzH5mFu4iPS4hhLbjdZZyJQWEeBvobWcqJ2G9Ho6axs9KCWngJP55WbvN16bxpjis9wsVzuSuqBW23LXkM9",
  "key43": "pqr3MWHr7Upf6bJr6dvh3NGu2DmC8peBUJTmyzVETW4h4mB7jUmYASBjMkPxWi2saPZKihU4HAt6ZFEMHH7Q6PM",
  "key44": "hqyJtfVV6SaKnGfdCrPnW559RNo149keH7EFsJTaqx65RRYjKzVFqm4MzpmuXPWCDSKzv5N7R1xjoYKm9oGaxLr",
  "key45": "2Ruig9N2sQPnkM654hnk8WyWybauREkP3z1cAoKyDzEyyv9pRonmyyYub9PhAoSct4i4f2KpspCKiY6eoDPHdk4B",
  "key46": "4Rwyk8ZJQJbgLewde1CYcEsREQ6GKemNiHA6Uh7R5YQ6cETpAdTrGUCb2PxdSPU79sLvsSAg3wS8otQpTpHU7NdL",
  "key47": "33Pa7Fy4NGV15k9ULrcLbmZPnXzBPbNXnBmaXsUMDtRUUVYhonSw6EjRKvqgy8Bj3oH6qSLJK3eKCEySSoVq7yae",
  "key48": "5tmG6sgctUdXSpcSYNvGK4uww7hZiAfBw6D8mPCHRFy5NfzSbCeTmThG7f6wHEAeHAiyzjqu5epBfbc6JTKHESoe",
  "key49": "UrEW4eEyf97nCpjoK5wzK9n9MsX8CmENm8seLqCmcvCRfrr4Rq4J4HFnDHXN1qL68xoNMFEx9pEQZM5m5BvDKQw"
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
