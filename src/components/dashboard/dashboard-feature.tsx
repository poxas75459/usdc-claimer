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
    "3iUUTRo5uB3odGYQpon2HVmgHqp1UB4Q6w78H8YWyh9E1ctMjenNNncsoGy9g9D1NWCY7eDda3V8L5GcTpzx6eUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nPJeDr9vnyeYsmviX11rfDa36Fp64pjM6gHuHrMktQ1efFVwkU2qUnh9UT3NDZ8Q48ZFmBdPRxM2Zj9NKkcLUo",
  "key1": "3xWHinvGMuG5YzMM5FKgDR3BbCdDjVdoyqmhiGekL793hjsUindELDwwEKvUPEkUAw9up9bSRS6bPy1gpfav6kM1",
  "key2": "Ah4iMHUBgJu286RkgXPT4GHNuVCp6UHwS8ouo9AVWGP1jejxvNsA6bnE46s7oCHkxFoxq9JB785DbGsEWxkoENE",
  "key3": "62WFYPRdSfA36iedpKZfoXLrc4dXfdjnCuuKaPBLjfwfxA7HspyhTE9n3QA1WR5GEPBaHxhYASNbjzp25PYhRdL",
  "key4": "5pKJSAvBxcukHmNpNpkZZ5VBgapR6usAxbWSn9hNR4TvYav3o6nB6rvdBNaG4wkpPMLFeZeN8nVURPX3NsBTZQ4k",
  "key5": "wR8va8DWJBffqRxauwKQjyXV22vanghf1EHfTizSTw7HPrbMBCBK2TPkxHvkbLQ8TYNA5qyE5EXBSyhmsbLxLD1",
  "key6": "c7pvMkjsG4MxY6kGJcMqVc893PXHVLFeNx1QijPJcYziVYdgjy33Exp4eAk4HHD4AZaXCAkRKKR3Wm9jHUQZpFp",
  "key7": "4ihxXA25ArxMQJdF79wuLbu96T4PE4BhUMZWV9DoUJp442U6gAajDHkTMibRPBRhnsgdQe6xWu1TvAJCSrt6MFUS",
  "key8": "5ix3Y1bVjMHdrYS3tbVngC1VbvzFGkETb4EZhhXkeb7DDqbn57bhpEZMb4iYT6mZGAibyL71Sg1r8v2GNbQenFad",
  "key9": "5FYgBjDtF1rR47WwtvBTjWmkSXxVVaSW6kL5hDrpj4qKMhGYUJqtzw9UuQkaXKmABjBh6UtNEj1Af83uZQdofNZt",
  "key10": "nHoepe8PTJ7BLnoZapQSWstyVtyCBU2m63t7mufdQutcHtjnuEd1yuLGdxPgedbpfvv8ThmrCQ3KwaSJCee3kfo",
  "key11": "5zYhqZC2S6ooEzQS9de9DK9kQ3J1f22S9mu2eVam6PvohBxcdCo2JQDDExkFc74T9gjzdf2wXH1PkT6qgkrJEQYW",
  "key12": "Axm1okYAwpB9dJ8zt3L5ec4VvYvnAFFkNbPH6egWZHtkebwTD5BC5W9eoPqEcgGurPDDFHM45YAXBZrTLHRmmT9",
  "key13": "5gU6ZcUUMJVjs2KRebFXrx5gJ8BJN2zDaRCLFRR6BKHhn59kH1zCwD8Z7j2R1JKECcgH17w8ETSWY51bwRCbXmpS",
  "key14": "5b4MTSQSBuv1dE7p5Ae7tfVDRmQSMWV2CADBow23DHefPbd3ViAkFqf4Ao8YBegieKFQLVs6XwTvQxsypvi8gLqi",
  "key15": "3x9mf4geyNQUxARpxAXqvZdA8YztmrWEE43d8SeVj3qsNwdZb445v5U2pGT5GVXpwV1c2VAPneMsC1bnWk7UGM8W",
  "key16": "4cRu92KGGhbHhZiTTzAiRNjFCk1zfVzDgXkm3FrNCfqT9xAZzk9dwASMvXfaTfZ178ZtzHH9T53tJJcYw2s5qt3r",
  "key17": "3mJS9gNUNP5gfU9sE4tBumcj3ur5mQ7hbp481zVk4JZQSadCEB3pnnTEno5C5DDbJ4pSEUHKDfK9TNUwGt88CgsH",
  "key18": "3mEdzkvXEZXWjE4jFsMeNu6oy991XAsGELfzrgBn6JoYfjU1AGvwVMPmzfpMeiAhQEkLGcJ7fkPE65mAWXDjmnTZ",
  "key19": "4o2zHAKBX921HCXU82YPJEFYgyjxPacws77KJoA4cJ8dvdwri9yanTSQxBEqhG18HEVKTrTVBfSuitQ18KFvzfdm",
  "key20": "56nrP3hM45XYmNDWkiLisNFzN4wLdQMB8tPikZNnMbR3wD8Qy2KY8MkBNBLciXC8rj4zGQGXqVTKMmbCEb2jV8jp",
  "key21": "2iATSuA5uDpkLu9dPcHQW5n5ZAbwmpo9MsVsf16as2cEyBcyriHSS8Fr9wzFQVrTTi4otUPWNwY5Mj6qGtLFZBAP",
  "key22": "2HiwJBPkgSRQqAXLPQ4hw3VSSyCvPimD8dgKgPF6JS6S5ZQtzQE691EN6nuGzb6dfv7Fc2W9pqu8TeSLGcYKQap9",
  "key23": "3MK78hgWp7YJWGdgVUJg23XfYFev3uEMBXrnUoUgRQ7NvaabTq6KBniL5ijjieoTzvwUQUhBCspxBPUW7DyKFcje",
  "key24": "9vdkn1UsJ3ZTPHhD5SpwsJp4TLZpkTSZ1JL5nfStT1EbK4tzNdJwp4HYApFQSSCiyTSByHmCbbitjVMWMygbTpk",
  "key25": "5iFY6bUDuZxiBpka225nJVxQpYSmkYdpWWJEgBuzqEeLb99CMvfB6ZfimgyDr9TsvV3iBNu53yx45LBBDwkK65W",
  "key26": "5VzrzU2QAVVrNQ5VM2PWGzuwWiBV42h1sas79AU1kCi6DkML7dezpRnhECGVf2XwHoHvKtGAFmJojwwJZg4qoKDu",
  "key27": "2ipTXECj8BNnUZZYcucXxQ9hbGaEnF4Ae8M4MqL3uriEnjnJKfPMwygfqpPuk4CpTACgGsoHmsFUrWv2jfzDmqjs",
  "key28": "3H4FkkfT5pVF7f1oHQVsWNwWR3RAEbk4cL4VErysUKxw7TSALz2add2SH6TkogwfnWXVrCBaNVCdgJERgNden6dx",
  "key29": "4R7jWf7MpUdUkH66nTWF27BWVqNbacJU2JoE4hppnFyDr5YyrYNj5XXts9GA9aAjRYAAW3JPh3Vn5wCx8Z97tcVP",
  "key30": "4dumDtoaBZivTPZh9f5cRm2VssdrYCJJvwsjDXdKvZL2oLG3f6pvkwkqDb6WnECXcodmxeyMbysCHMHLnKPRM1wb",
  "key31": "meuWAQGiAHm9BgoN2wEA5kQPSVDGE6FSZDGrZYuhyyGDfVmxiFoAaY2iHJKCP4tcZM5giR4QqZDfJdjc5gY1cMV",
  "key32": "2qC2613tWDVHAzCWP4YiyzyuCBrtAnDhzzpFqp3bomnk6WuHBJGSTfRXxmRByhmsQUeQnuWd4thHCCsEdWRsuq3m",
  "key33": "2zaGDbGndWoHKTU3e1pGJ5RRFghT9Ty85KLDXxs8uhwd2smdSiXjjQ7amuqk6RrXd74BnL6LErvNQMD1cMi6Vuj5",
  "key34": "5rNvqb9KAAver1TAfsvx1Erg9i7byqNkeTafiW2XCv6Sbf3JLfJpERnPcNwCrEsvKkQUNB3vhdfaR2Zago4LoQMz",
  "key35": "63ui1ZhcWZzaSsm6X5z4MD3hvWx58o6Pm9e7AANMKaHetHroLSAjkPENxKNVwo7iHyQFvRrRDcqBYxdjFVHPFaZY",
  "key36": "5nEtgmtgVDkmtqUNg3MUkJ5BomrtDCRGHSwvqNqUy9HkUWy8rhZ99nKeeaV5yoCTkCngMiyaAsijjNxBDL2kcmop",
  "key37": "466MwDCAKsiNdsSv8XwjovF3BY3FZPtcib6YPPrbRQJXLJHhxZDXZB4U7oaLiENNPNjKq2hpEk26sjm4Aff5ZBXa",
  "key38": "2d8z9pY7m3adMTDi2kN38EkNPhV5cjpVkjTaEw2gTEY5SZP7NiuFtNkj7nepRfLc1BWqYmgeaWHMMwgA8eJF3oqw",
  "key39": "3bqS7khAyASiKw7V3DWthVZhLnJUjZagZjE42m1VEE7bo3hmdZoLj6zN1VBpQDKuSXdxPMetF1YNi7RzHhUcPGcb",
  "key40": "4rtkMdLLEC4CF389AeX8RyWwTB5pxVGwuoc9VPD6UJqUHRo74f61bQLJMy9AvvuMP7ZcYgSS7coPx76h59yoYKR6",
  "key41": "3J7eibwQpGpVzXBMstvE1pQG35m152faiXhLXjaZvEQodbFiQ91KAkdV3z7hTG8CUYDCxbhQedbhewhjSq4xwKH8",
  "key42": "2f4q6Kt2ixgTS2o7vKngTLEw7MLfiznX6uHCrLuf74ncaf1EbLhUYd82j7MF9oxDG7qxFciVae2ex48QKsbG8Mce",
  "key43": "2k5hJ3nCJUGneLT2P5FAt4qbjY5GSaChqp67GCjpCt7BtZKL63eumRU3EcV5LLfHVaWDNnRtnxoMNew5djrZjvtf"
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
