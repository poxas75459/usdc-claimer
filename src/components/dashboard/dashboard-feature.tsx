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
    "7dL7jbeDakSh2LupQCAuuVCbYvapYpxogEgsrqGZNtxFV9EL17MWuQXHVV5gLbgcSaWhyXJxr6wzJH7fNmZCjCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wa3qpjCcb1gBzQ9U5m6bNA3ANoSoJuxbhTGe4qETeooh1jjrS2PCVDqPx1RBbv4CMLe1wVQ6s9NCSTeoJWGYiLB",
  "key1": "52hyzqS9VGZN59iFpVVAUgGEUWuCd791icHsQieK2wfaC7UvdzEWmdnH5pLxG8FsyZuEM15iXwyDZm4GbMaZtjQU",
  "key2": "5mAeVqyPz9JSBudNsgkTrzJ2Prqh8S2p1bimniJ8kLfm9betkJ5qb5T3kSZ35V4R5fryNPtgMgyfjzAD8purauP6",
  "key3": "29DQSZcGr67CqjhDfjfMcunkzanxpnXTRvBhrARMQMWvfRiPYc9RF9aWhyvG9ewRKTJWcfWbeeD15pF7sx846uX4",
  "key4": "4q5BBuAZpPXhBvMcxzvZskr3qrdTBJuYzCem8E38ycFGcdy9vJe6EZJtzs4jFQPVW4shLx3FgzwnbHEcHUybip5L",
  "key5": "3sxW6SQn5Xsh3BWCCMbtFja9WLSpXJuqBsesxSBmhrGwNfBcmxcsHnyhuPjRkGS9yy2VELxN9YAdNsvrBtohdE9a",
  "key6": "4jzafwfcG5GhJDP7Az9TxVUqn9hJgjDFo6dSgXrnVzsYivjs5kthSjSp24K4Xts8umamwVsZhtD8pzppdujaysdX",
  "key7": "2e9wxcQk9wba5UqmT78U4VhFSVQYeeWEj7uHB1L4TVmRvG52LEjYpCURddcmNpFsSn8z3Trj4DZJ32xo522Ha86P",
  "key8": "4EUE3NMGTgWWq5nt1Pst4SEipABGeq7PShTj9RaeES84P8BbEi69GdYoctozXZKWzHdRRbMfLocCEsVZWCE8zecw",
  "key9": "2gcCftMjWKzc1PiLoJTsAU9ViNunFgpFpgvXCTBteovaZWTk2PQLZwKBv9D32R55jBh2unSN8uXfrEMYsi2nS4wg",
  "key10": "2cCEyQdU41SqEKmJxQBRWKDpojRY8HS8cJ3TpidKpPYbP1tTrYUGaq3qLYfvFeE8QFyLNez2s2MJf1wAZMmzFtME",
  "key11": "28eiSbfDWibkrS2EV6aMr7C9VzFcfBJmSKgRnGJXT1heuxudPxHJCftWgShfzCLauVDcJcQCQYsmCc7aYNid8En4",
  "key12": "2p3AyEWRcqV1uNpkVSmsd4dyNfzAYemYordDbw7ZKWxdLGMDmNuh7rYG2cEmyJ2ypxyW2w3jHeunQr7ubp7nLuiH",
  "key13": "446K6hWGtGStyhwQLbTzHG6uan36xspKf3YGBG3rCob2Uet9CqCnMzggkG3PLKx3gGY59eFfJfL1ngsMbAV1fXGB",
  "key14": "4Yy841vmCGGQwDL8x97v4TK2vHDK2fKDtRmZRgEhnFcZ1jPjYCccy2sv4gPFEM85LVpPjQM4WR5sPude8k1x8CsN",
  "key15": "3tjBX6R3XDP1amdaPCAuL5qc3Lo2rBDKAet2MFixWosw9yuzrmP7EuxCgavZekffdjKFC8o1Fq1LTuuHtNkuERMa",
  "key16": "37Ngi5fQzSahnQZUmYUs3KQtM61ToShXX9otLCbEGThgHMC89k3Y8kwmVebYCXhz3LBPis2ZpaRfhhRn1CLneuzY",
  "key17": "4hmFWj76CkdexVK2WoQAcKgq6b5Xc8L5J9V7Qm3n4PmpzZA3Jp4NiKgGYwh6suYR6fwKynYw87WjbeH69ZYVCLZ",
  "key18": "3LDy7Ur6TU9TerFfCEMyy3C8TmDKRUfKKoCSy6xS5efDwCcyso1XfuCXihr9zbyH4QGfzAW2Zjd6VCPcsUtFSeJH",
  "key19": "5Mi5iJFDEVVTeb9Hv3681Gt4AcstxuyDcG7fubnBLQqNErAwn1ERCGLDGTCMVxkZfbiCV6D8L5vDmeKKusRtrML8",
  "key20": "39wyEm9BF6yrFYAJ4kWJhduPXhHH2zbwim5HmCz6pVUE13GpcLrQDoBQDJnEVgV88bA1Ehs43Da5H8v7GQKhjvL",
  "key21": "4Lwpj8M21nqkqs5gB8zDs4DEfSkJPMjcXz2t2ZeAEiArGZKeVsoBUvZ9mvmfBrqjoARem1hFo1pnHTiFK8RuK3Pi",
  "key22": "5sadinC3GBtcyPBW1KnkNR8YhXCr5ZYg6d2pG3ffDTnxjeMpxpE4gbMawtCafBd5p2FTTMPkE69nv5UiEhwHaPuh",
  "key23": "336FQunDV8YAoiPKEiqaJT39oSeFcJ8i2YJggDKapbska6Rw14YmwqNv2mYGyfTF7rNPLUzEPUams2FB6HGCGCQC",
  "key24": "52i3kJKdw9kEXjx6pta76WCFUdzkEUrpPzHPurVhmhCPLLhMhfTmpTh5S9QSwa1FswNWBeZFNsxTHq5KFfbyPwHv",
  "key25": "4p7TsQN4qM75N7ywvEmv7uk1ohaKxXyrdC9qSrrqM2eR6bEMjBHkN5jTrzjMnkSRDgFFQfWPr1e1cEx6bWsNVvC2",
  "key26": "52sx6JTMAAMEyeDVDak1nmZZr65QDpVHmRDKuCX1CMfgVuFyfJ57FWfENcAd4GufyQccnCBy1jaFj5DC6XSYLvh8",
  "key27": "4PgyXagjAstPpgJuuhv3JnmXGgqsgRK9CEog87o5TWpnfuQ299sHs7LjfEbtX8CCtfwA5zQj7JwX2SZT9tD2VgZE",
  "key28": "9NZZbK8R6bejzbVxxuPxZSfXTUkZW1UZ35qE5QABofcZpcb4hYbciPbdsby4ZFHHwy7kVAqq3wNSVgUU9CB7VdE",
  "key29": "4K7zNk4HFJ5YqVmYJvakLBnYnKbAuc4Z4ZfbGaAjjNpPmVK6ib4FHjvNumhyyLwsRem4dDzpmN1gBTpAen7gEfWt",
  "key30": "3hsiBX2xVU4V8KLkwxucfzJsKkudyqetqGMqXPkzp7QG3xS7YeCKnEDyjCNzr1wV9UtL6rkULhvy3pXRsYM3DC51",
  "key31": "38eZvti9SEAkoxQL3wheKT2AACZdN3QnCHKhEAnpRGCdfGCaBBbBH5GzVwGgGpqh8FygaTVToVvdEQDPSPmsaby",
  "key32": "LUaNoC5yWUXAuY9pwtgVnwiHxf6b2zrhN5VequEw4rBfwfKYtJzAcHC3asuVcbENpNTMo6K4cGXVZtbtMGnochx",
  "key33": "4uH66MckRF3n434X5ii38iQiFRj6mDBHmxC5NiprGnwWPek7mh8SuLup7UiUucVevDdc4pK4WYZ76CMgnsw9iM2X",
  "key34": "UdmvN6F5UGcai2oTRM37yUMhejSdopK1UMU9JCUJrFRy1zVQ87vgPWU1XpXy6Bv3k25gJNRjXC2wAkA1tvS2yF5",
  "key35": "cWFoPCGV4gHSg4g3BSZJUXPTT1FDGPGmrX3BGknrcuz9pjEEWHHYD2GFGKaVp3fQkHCDpdgWwwTUWHd4j6f4rtq",
  "key36": "4fsapnoVvwSiBxXK6FkdiJsjePpWQRXB5xA3K5wmFce8au3R8vCyePnCg3YGZdSufMANNoDyGardYjwC6KQiL8cC",
  "key37": "iNLhcgqCYRwVUQWMn3pSi54eThi2QnfD2yWvszk7pie65sAtLz8k1DKLr7Eh8Yx6pRQfLA5YWBKKfZ1keCtj8iA",
  "key38": "3d7zHT7cj6c5NKzKyxzEmEqC8bWqjUWoFgLcx5HbH14PRt19VMSLAKfBAzJmUctoLmMTd3vLzUFCWCnSjzvFvoLi",
  "key39": "3FJ6xrB8yWMEVPzVnD5ZNTfPQGJoocAHme6zboBMyh32srahdDEqSan9fG9CbfonHgaHEzCT6snDkPaZze6ovsNS"
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
