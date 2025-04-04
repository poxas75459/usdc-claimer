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
    "5oRQk1vrMaRX5GbFjAiFmv16qn8SJ36MPTDShry1Wu2dMfmCJLNyHy3WNvMqyGRXuxUPHMbiPskZFxmAZWbGSMjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hjRMT6Jsza9ZNp7eYRnKkxPmRe2N6ZZM9PXFx7mn9CFNDaEgVishtfqEFB8B2tXFJfxWStpCdbxEKnSocYQAinZ",
  "key1": "3xiasxTRi7o5B1CRXFPPFTaT2B9TJMNs8c2tNws9QqZvgGtTRN54QuBx9aWpSAmd76w6zDJgKfQqGH8t1HaSWpC3",
  "key2": "5JRmKkg5bu3RkdT5kp1MqkLvtw9qxoqRrPTHuFJ7SzfLrcQiHBtLpVU3Nms6S7yF4XnrpQXdMhUcNWeU388p6Nqf",
  "key3": "59BfFuqHrpbbm2KZkeL9W45MM2rCCv4S2XEi7PnUpPhXz9kWQz5NHbyZGoB1QdBabht4kfX51HBjMqsvm1BSDz3g",
  "key4": "bwSUSARxwGavhgAqXkZ385TfdYUUyAaDioxotkXgG2eDpTQJ4JMoA3KpBtGQADnjTM29hGgKPKHqv3r45nYmXR1",
  "key5": "J8JawrWUn3SYpfxawAtm9gRCW96Zk9pGnugCfTQkEq2CSatgeG8fhZRjnoPrEFZFT8GnveJnqCXa5qtBG55GtiW",
  "key6": "4wLSeiQE2qLZokNevptxpmhzzLJxSzTqQQAZRugnT2Hh5M2csk8CWWBdYwsMh3i7xfqUiW9La2FdRiS8MXpenhpj",
  "key7": "3LbCvh7tMTWLw1qqzQEzMQ4dg4TqouRNWwsgXAtM4F82S1rBw3gEnMZMsNCKp1GDAc1r34WXn8gPuejoKegsXPAi",
  "key8": "3jAmUgaz6cxG2pVkSwACVHHhbdcrTtdXQgvNQUzXrZe2TmAtVGeLSYtuovsL6TDckJtGijNzbt3ZoGJHN7AHLVgz",
  "key9": "4K2DjhdXDCUjeaeFtTZfyTfu8dAFL9mQUom7ZaMEei99rdfibZ81RdwQnuQMCmrULCYPUfT1g4hTNABS9Jn6FetA",
  "key10": "WoA96eBmZxRerkVxWzgDa5pq22BVkndEkccYKcwMwx2zXCwqtHrV7JKNFBoUhvMSN9eogXYPppTYxD4KsVuAg3t",
  "key11": "5hvj8svZKHGAqU3WVGY3AF8zB1Y25ayWnnC2WU6amLMMc2MqxaAFHVeDYh7f7nbLT416dUEhsD583qN9aYXiRWnW",
  "key12": "37twbkb3wbEXk95BPfhvrCBZ36QFe9sksDZ8ci2S4K3UrLZPyccknMNjszsTp16xoPLVQCXHLX26qwet6bs7uKyV",
  "key13": "2x2EMxq9DjNS8H8RkTr8s7GX76BzEh1DDmhXUKsouxrd7cwpLf9QgaZJvcxd28VMb6WMoQdooHTSsAqiKijgptkX",
  "key14": "2QaRULr8ZkhmQYj58ECajg4AkHEaDfErHAqw2mX2MX3h9fGgvUpZ4P4FwQ8rLGAcfJhBP1JLJkapMqSBRdRHHNEL",
  "key15": "4U8hwfZviPyAkyoVijtUP5n8g4R2b5ZTTa76WSbZsDk1CBhUNshZbuPLM36wq5SUcTLP45CaFSH7LJKY3FEq5Pj1",
  "key16": "2n3RTt6pca3XrN62fHn7CkYEZ541k9TdVUUond7iY75nMoFtnpD3wZ45sZaDaopSXMfoEQPTLQZUFBH6NPokw6Q6",
  "key17": "3gqGYmwtvhiiJ3kfesPjL52xqbCbfZXU4238Xceyt1MFaK7vDW2itsweUEqRfLLRD82fVwSbibHd5zLabWYT3gD4",
  "key18": "5QpEMijfCWZBrYKpC6kGBjhfXoj8u2o2swcFfrmC1SeVXsz71xvWLJcKGcUe28oeDCLGbHhQ1jGySuhMVQMc8gpS",
  "key19": "QzVCuuwi9B57q23Q6uqKtyBxQEWdLGcSA9ncYiUkUyySrA6A1dwv5FyNDjbKXxdbMmn8u6gNn9GpDpax9k8zsAp",
  "key20": "2PCh3rbR6jy2TSAUFP6jEraUrS4WQimab2be3RcCcDW3M3xcbNGXKTnwgmzogJhWuzZUfhTjGwas2nCamM42ffVd",
  "key21": "52QhuTKdqkgpqQECWFCb1RHGgHYiNjQYQvHSFSmTCobLTN1f4S7BatQ8s9f6yLnQiLKMcbd4R2xzJKnsy7LHQAAG",
  "key22": "4hEYac3EmhWMq5uuarJ3HiM1R8STNkHCkyzvtFknf4Z29HpMv5B388XqabtbsTLSfiurQyZ1oqeSCJ4fs6iRg6Y1",
  "key23": "uuMSopU7mMZpoqSYoJBNT5VHg31nzwqX1CnpY4xAn5dGhTEyYpxeQK7Bm6B44rgLB5u8qDRmsYzR7zxbhP54hGe",
  "key24": "5ERxJR1rMhRwCPhWuwe5NsLjLF23oFuYGNxD7kvjsRpCSWLSoq2FVBMQMdogYBztzXotA7KJnwGK4DaeCNx9wqA1",
  "key25": "2n33Dbk14L1fsfyjAZVk5x78dSDbTVyA3S1EijU5V6PgyFiESEBaVm2P7mLzNoXTpHbCMa15Jr5ULbwJQKhwktms",
  "key26": "47vAnuQtVedDNbvsbaz4VGMSctz2U2y2xHW1mAvjKCP5dHvEsm8Bwa2ugFEuPdNKJ8ii27HCQ295Uop261tBHYqS",
  "key27": "3wamoGFfgzx6sV3edBDtzssjRCs7V3B4oPK7tYL67FPePBk6R6nrmvewvyMXj8h7joR9QEfFbxTzjN7ypd89miov",
  "key28": "4Yw1ykwbFaVZPWcTV1s5eNEgeY9JfsfaA7EvA57KRV1FT4xhtHWFx8b7yYjMsfFGBuUUyt6F1o3F9ki8vePXQvJj",
  "key29": "56Fdw6hHVJhMj2e9SeW9ufNnBjMZH1BGD1JLSVKv54pU7jjCbhWoXEfRJPiYGcVTbdq1WvNjtaWwmw93t8SmKAgM",
  "key30": "364jtiGx1YxuQDde3oecFePjayX4k8wmtH3TXTJr3KUseTcLzJaCsC61kGhmwDmBL4ar4khVdHSPy9Y1bZ2kkeXg",
  "key31": "4SVRKsR7ZPJWRbKj2aozDEj186DALoVKNEG3Gt9APiqbYBm9UdJsWBDJeGRBqnbFVHgBupaideLgCCR7aY5t114Q",
  "key32": "5NZzk3eGcMn3tk9eFaGMS2ttsRLw7c6tZ7ut1qmWhLXvqyBWimhLEURAcAcBY8wfLKn8xXRd9KcEYxZvu2Wg3fSt",
  "key33": "3PuDB3zuWuujghsGuiWQrzV3qq7frBujUEyJDV6Vgxeqm65LZ3QoKhkCcZvNdDwEzR1XAEA1ptT2HwnHVvLQvWj3",
  "key34": "2zBAindWEENEMJq7FbuuigePtkcXF4krRusuQdxWPf5n8Abjw3eDnF2xbQph85DVg84TxWCM4oJ6mcnbst7YuYse",
  "key35": "NztKbR7jSDk4W5TyMGUxTmhqL2seYiUrmc2Xeg3MdnPNHroUvYywnbgfKzvoSmy7eKjR2cwGYhE74H7pZw9eh7V",
  "key36": "2M2C8diUZWePgP3itTuBccxeH6AB7pzMPBZUHLHE1c7YREYFthtyT8Mq2MyM18LPrNUYWpT3CGDR173rMHwhrLKp",
  "key37": "4Z4Hqvv88swpuYuJhd2d1cR1nzkYp8qPgePiTbJzsFgWg4AvbJ8yZCXtrW3ZWNoyN157QnfV1BHZ2wdUiisTfVXi",
  "key38": "3QHXcSxS1oy2giWQeoSk6eGdnyd981w7pGGwUWsTzHgfoVf6DikURutPetaym2vNJ6eQZknPGacKn4zetxGRyvu5",
  "key39": "5y7tTeTKLtpB6ijAzMY85REfNcAtx5MyTCt2sncPiT6MQPKGTpmz3o5hMtn8JdmN4FRNUm6tWiAT15unYxifkKPS"
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
