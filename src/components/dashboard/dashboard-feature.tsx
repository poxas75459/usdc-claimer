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
    "4F7ryg911N6Rbgmbdnercjf8MxWqe95Xta5jE57u627fhMUqc1bz7EpsYMcK7ECn3eE3NwHJTSALxs9BcYFfxKWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iYqfQoKWKvHekfDjGpnxhidgxZRnhRMXWffeUiRDrZ9GjsmYZft2xCUoHc5oGCjwEVaRU5bmCeT6Ww5SV1pMzWX",
  "key1": "4ShR6r33aFur72DakjH8weBiNssQ4QiX5yaanAPci6z989F1pkApDpYtEGYyo5x55z2G2qiYNgjXmoktiLJiCDXE",
  "key2": "5A8enPp1ggTF5KxG5AfDyR6NJ2SWLsq5DPUFZfGDT7wqcw9iNbLc4rgZH5uVgAbywfoqBzDkKNx6heiaVZZVtpwx",
  "key3": "2xoucEmeww3HKc9D4v3d6VpMp3LS77ZpS3LZ3B8wHQVgCvUeiUtqDvX5yJZbvDZq65miqQx3GBZsCpVy38sR3KdQ",
  "key4": "2yBFaXhfSGvHVh1uEpTF9BDQvcePxvQDi3JLXy9PZAsxLUmk1PPs7Dn3QUW9rkkrsy7vw9b9yK5wCJTnbNWY6Bk2",
  "key5": "MycLmtDqSVjaRFdgz8PTREkBPpEW5d7xzCNcK4iMgE2CLTTjZfipwpGzA2MEaeutEnqonxJC21NaqGo3ppT4TZ6",
  "key6": "4jkTwAinpd52T6bVKn8FoZdScQ97vyF6yq2ki3gNERTzdiTf8dMxwGVBsFrfTiRPkUKCUbvE5dHpp5TroxNz2A1U",
  "key7": "3fsHGkvc8skDkE3C1EL3JhBGNumzybMyAhdMwH41vpWp15uwYb4iBTHqAwiJ6tfaHcgS9iqFxfqBQkJX6ze18DdE",
  "key8": "qjgynn5QMcyZf95EdgkcRtHeJzRxRyd6fVHAzHpMbGWuKiNrRC9CgTFNiZmpDXC8sPRRpvSRgD9EeGkf7BYcPmi",
  "key9": "4Yjz8eEdapYDQXsCbh4w9eTPz1VVh7Y2A4o2qtgV5vLat8HQYAMvu3RsP51NX8ev5nyAzBDYi5BTxS74qifTz6Gi",
  "key10": "3p6AbDp16WHSUnfamGYrMRXLaeAMRjEbp8hLSq3bWgLpJ8BBd8a5ZvUQgZJcsZwdUehNNayCPRgUVHiH4LZVmocT",
  "key11": "4KoiBygfYnAEP9pGqV118th5sU4pkYcWuvQFDFEUvB5CeBow8BrW8ktE9eNCLqpRjiEYuscMtWPRjoJQnKWsemVC",
  "key12": "25Gcqkd2P2cQFRxhKYGCLzjahsqRfWyKdd9c7BtucpTNwDrtuBrDiktGjS7v6jJMkAzzY1xoQdmHXxsxiH88GmMp",
  "key13": "2oQSkitRqNtejFxdXwyrjUXc7ZVk7btQFoMCDVSL66W9zwZWQPrED1AVDiQpB3ovFPvN17qNeewEWBwh3YBfyn9z",
  "key14": "5cMpaXa9VCm4jx5UWh3kk9fETEG6b5rZgxQ4z66GCEU1NpuqYn8qLQPL2Agdq3Xiue3aGejB7As24udWJChBDYkC",
  "key15": "3GTbR7MYLqpt563DaMax1CLmxqcCYeYvyUyWLr9vKVj5nakAo78f14Y2eYRD2JDA9PRo1GfJxBxoUbuaegqhDD92",
  "key16": "4ybzkpwHYQ2MspD6YdgmeT8b58KDveBFjQrzWTqZA5E12bvmUgqp2HZDqnWT1u8679ootbDdKfcvg1mypnVoxfyT",
  "key17": "VziJ176duHQ2SV4xxPrqLf1yT2TsX25SAaD8kh6mqucjNFoX13kGr5ueoPKNQxx9zk2FZBUPMfPDnpYa3nSe7Bp",
  "key18": "2iFi3B8WWrcpkVQqU8PZNAZ8snc6HQYr6QX7tmm3HJXGTT5KRPC5iR6vjDMe65dQC6jzmiEjcqzgFaXfb95NeXK9",
  "key19": "3Y5DeJEKEUt5uVBZ5ZQGJtiV64oRfSYAGSnQWApqwmQZU15WN5TSL9bRd3sXPwtnReEFbBaS49n1dQBtHeynNwo7",
  "key20": "3nqwrTLDAe3yhRBCRvBYfctbFBMZjoeTLrKX31CT5U4R9RdheKBxTixSuSTgRNhLNRaDrE3PRCzLAH3rJ8LUVrSo",
  "key21": "3STHmmdD4wki9TPoNQVRGCd7nWWW3pNAzAncKSBXcZtgrMWGkJqyiPDQBpjDymPAZMEYcTSVHcNHxi6vTBHcrHgQ",
  "key22": "2X1ptDZjAv2hTcd37K2U3ZAPPQwJpVGovHHVA1WHs6iEhUDVNMYFZkKhCnsHhTskpT4YzGToz9TdzqPxMaR4Pvte",
  "key23": "2e3JWK1giKjy2j5tBq5NJz76ifoHxDExA9ZW5hNMLjZAGpMjVPP4SY1ZKszo7Wf4P2Dgsd3hURvWNfNJvZGko9LD",
  "key24": "3oRjM5RAEeia4JdUUzV9C6DHccyACwSZsfoFx9NidYnirct1hgiFdT9WyDsZqhKwy8JUDpYkh5UUVawyWFiq2oFA",
  "key25": "4kaFDJDjpaCJ42SutxZ86ALWQPotTfnTnUJvEKD7iFfKkf89MpNLU2p88N6JdZLUyMpNhipz7FLA4iQDqjBJs4Xo",
  "key26": "3ToR2RMX3ibjyZoXan7SF9M988dnxuawgMRj326iG4mSF1GdKPbUQj8mBX9R8jFXq7iBrjPZPKShSTz6vTuqqDtE",
  "key27": "fVqa3SNakNTkABzKegrywEHqxZJdCme5SG1gbViVX5uymxUwirVeCaiSQd9maZaJsLZ6x8y2LB352nnvUwvYTRV",
  "key28": "3ftmh5agbtzkyxozvz6bGu9NgqpXkaCxnoMTqWfzok6Qck6XB422jTHbgPttP9nop8dYHSTBfoUN5kb7F9eZkHoG",
  "key29": "N2Qs3j25KhiSDQZo7891kq3m95HZcgNgriH26tUFu2Y6kJ3yHwrKGJe9EvUHFtQyQLrSdFzSkk29LtzpZaGVubS",
  "key30": "46NNLeCtqKbQXY7wGRNx2UNAdCZBWvByUsJEHA83SdR78gBytJtU7KycCmMoumTQBJn9BnX6QVjWFGF7C92sLLQU",
  "key31": "66JP8rZEnF7QvgzfGVx8S3aZtgeJ4svpGNDmB8kKKXi1ZQtNbzisyQrBHYFSV4WkUVeZ1WNxPLBoq6kLbAKPkwpW",
  "key32": "4eS6jJuJpp6BakVYT4hghdxMbUq2J5NYDSSGEqXreg81RsPXsBqSQSpQ6ZWP8rrGcpiENjsbjEKHx5jkiSuhbzZN",
  "key33": "5fMSnBMvshfc2Rfw9Vp1dQpev9e77D1vRfcKJs5ni2e8zDod5w596p8hkkm6L3X9mRvhFJ2Y59NcHs2eVHBwgxnf",
  "key34": "BpToW8AbN8TKrL8EnjsXnmSwkPhHQDMmdwCApx79uViLPCgk9GsKQWBS9BPhGym4wPpKaCUnojQC5yaFB2SZUSK",
  "key35": "4wzv7G7zt5kgPpK6qWgBQXmLb9crXrLTHVD5zhTzuqqvMK8kLpJ8dtwzjYaeN9mqdpXhXhfACPYJUsMbJiZiBTEN",
  "key36": "3uMRGn7Sos6jaF7FLh8dE9EDk9Ar8fdGGvBZcqQcvc5Cv3Yhqs49XgTrisD8BDtgjnAJxXajQEx1ftrqxqYVL2K3",
  "key37": "29Q56bcpZSdXxuCZXRbUNcGomzu8DuR7FpXNqWsFvnj5jYkdzc5ebioLyLnDEjqmXxkikMTfw5puu2YqWvtwPtui",
  "key38": "2BkSDUxNoejsp2miGBQjaJT19cFJ6t4UtbPRBNFvwAF14vdpMPD27STENkpeAcrRXDusrkb2WVMZQqYkJK5zNWB9",
  "key39": "3fBGSisEWgjdS1AVhppNGE5RaUqBm4W15KR4bxNMb2KXDz17RfuSwCcABpdGoVLBgbRE6rJ57jZV9ZjEeGVbqDjJ",
  "key40": "4QrbvwwofteBH8r88FCspRdJAzBWGh9vsrAZPamTSAmV162uEXvcU7xPDpnPyHuS7oL4cKtENCZLzsLQvrvtE2QW",
  "key41": "yhcP9xBMapQVMGR7S99AZTG2fomhVbbVH1EYdYRa8PDh1h1TH9N6fmXuySTb4zco5UwKb8rxwAoDXP65oPu5J8k"
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
