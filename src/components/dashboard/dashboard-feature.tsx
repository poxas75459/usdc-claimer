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
    "5Syce8CW3ah1VsWSbsLxM8ppFLYKnBTpPAbQRgbTeg7LHUXGWU52uQPQH6fTVykVbPsP8cnoVbex4f6LZyf7x5X3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqjTr3NJResx5j2sZsMNEx1y46isnY9xjAfcPsCqxaoh5Bi5qhNzoJTG3aBeWHqU6Dc2jgiH8tJD9hVLhKNbDCT",
  "key1": "eesyKLYedmvw6RVWJYbXoPxzi7CWMN4xUmuC48TWPd3dMeb2Z2cHCFwE8zgFsbjFVbAGBZcyHWUAdjzgZd175xE",
  "key2": "4sUQATcW7CZvayap1BeAf1wRgGHquvo7y1PH1ATBN8Dky3G9awgV3WP9SuL4dUdw9cDYXoDVccb2FKi1KASN1hC9",
  "key3": "3iWdwzadH3SQwdddHM8kibdTPZoWmNFvzQKEC9Gio8NRJzewLSH2rZAjjp46vLfnRBpjh5EbkE2SGrknpMuxAaoT",
  "key4": "5UbW63wHUDfr5hou6vgmoquEyarGZDRHgiL5s54wD2fVEHz4M2fAinaZG2VzejfxaqXzco65EuepfNvzPcmPh2ob",
  "key5": "kJgP55FDGgkkr81DNMUyZQWGhZVWavQSeaNnhApr4cS9pb4zu4pC9ce4swVCbkw2wS2J2Ee1nDSSQZ3Tb5SmPm5",
  "key6": "5LYoDyvv4XNiAUh1aSnrp7HjpmzkK6SuiKJr2zuBp7S6vAxXZxw874RQfTrT5h5q3xwGFJD8USaheZsgs7FGaDp1",
  "key7": "4rwH1HVmmuk2FGG9VDEbwfRGX8Yyqo3vbVp2126AKbPAwYKDthCVJpT9PDKM1xaQCNLrfw6JoaWduNXbdyzNysbv",
  "key8": "262b9HnsJ5kQYBDo2gfzLnv3CbXiu3gFJmXtYkeP8TfF2NNrXQz3mVvBkxP9Vm9BfcQ5TWUDc8qLNJ6aPg3U4urE",
  "key9": "2KoVJF74KR3aNoK7xxHXsSZUptJpmvmpE1XiRV3K37hViqaFe41cvjChf3RyUGv2YzjYVLyb8q1FQi6kzWSDUnoJ",
  "key10": "BPdooPnsZhAYvXb5hrLGQt2j2Nhnfee7Fu21SvdokTaSk7VjHSziFeg5BB3ErZ5dCc3TG3ZhUCHLqP7PxcgYVA9",
  "key11": "2DtjRvnDWnwMHhY2v9Xz6eCDKJ4ygbnvb1bBhngV6HCrzFL1XbdutSYtfqUKbAsY3Tfb6nSn6NuHnxPBZeuqvDkL",
  "key12": "CyDH8h3dEdZJmPiNSBAbPTT9VJvNhxwdvNz6N1oUfDn2hkUzMkrSBzuZnLBMqye2aR2tReseAfK6PwFLjzQK2tD",
  "key13": "37edtJvx8YdUYibgkYQwdTYQNSRHMFfWKL6bB8THNHCsknWvUqPFchvwNqgEGohCrDDLYsXEH5XB9pS4CSvszoHs",
  "key14": "4s3bPj6FJYd3H3hJ3mm2QmfNFLS8TLLZ7yoqzhZWF1j5gLmXobVJyMwaYAUHfb2WaxMKtEwZrLst2vQqG2hv1aKG",
  "key15": "3gmEfsq7ab1UdoTSU6qx842kpWfp3QmxNtQyAe7oBhzvgLcPuz4SctJpecf8dBLxnrKxBDHaykwEq5NAdxXjdi3s",
  "key16": "2w2dfsPBoEmpz3m3ZuBEPcsfxdFoM2B1zh9hiarjjURqpT87GSQkhG1b4qgnk7YA6udHeUCG1FCCkUWVu9u4LoZ8",
  "key17": "2sgTVwsqcf6UF2GJJu2YAt7mBSUA63LDGt8qUw2QWxJmntdnV6geBzxsmQsHB1EXwc8vGwia97Fo2MCKodoMo4RA",
  "key18": "3aBHXP5MCePYGwFtjKKp94PJrXupoc2ZDAAnMuoumq7XSS92AiFEniEqteoa9BEkuhrfsymy86HCpTTvMQLJsct1",
  "key19": "5tiRULGVszqv1nPxpY5zbkjhsZKN8NABhqiuW63RLtBUz724bdDk4EDPPR2USK8dx7EGLTGLexcPyVv3X9gKTv6s",
  "key20": "2mo8dR3ZdQqbidYiWCdpVdnJhQjrFQQy8P1HFci3WaRDMVEb9HLrg3zhyar4buDjfB4owtiVsn6BxNcb92ogtke4",
  "key21": "66wWaZB6MLVUb33LEz7hrXuHyq135cj61NCLGdFMBaX7Uf5YhPjJtRNUjuGcJNDAg3pgLiYuBya9v7dpNNEjijKS",
  "key22": "5rHAmVffRkWPQrAwtXUyCHriq2Fth576cvJA2uiuYr5VG5RQjeAnXyTFPvMUoS8CpuTHTAu4iNUhqxjdFsCF32AS",
  "key23": "ekfQKeurskb2UxcN4ubJuV1Thq22KpjhPX4reUvk5yfembA2U7RYkkixh5aXe3YUdQsQy8Syxro2a9ziwLY4Qaw",
  "key24": "59oqVmKo9UNUp5wHaYkpDc37v6BdFLtH5iNUKDMqKsv71hY58Mmg1jSFQyEN3urfqJD8QdjKC7kX6CPeqBLh3fRx",
  "key25": "4z2QcBCfUkqXbX77kB669AeeAhcALGE1rbpoxaqw2hdRWVH1fcH2ETh1P1GK8o7Gd5qh5ubeWZtXrAamvTWr82VS",
  "key26": "5QattZStA6rvtqVonrFy5WdwxWjDv2SSFfAuz51UXmZyVnQuiTfk7oowtxuALWUwZobUVQ7c9gMx4x14w1SuxKnp",
  "key27": "4QczTcH5JxNrdGakyrXUTSLF4THMKejaQySC6VN3FcdNzFsJLPXoUUQys4atwKS8iUUyg1uCWNkzMcSuUK4BBSTV",
  "key28": "2jMTFyfKCKQYSvRZ4e5Hy2Kbur8xtuuTLpPYL4JAQRVkHC4YV1nThTjvsJFAaA8nvvPepcJ7iFS6r3f5gpnhprSC",
  "key29": "4sCmW5Yo1jcVZtyqgAovgfKsNJZP4ikxnAzheFn4NaQ2D4Ui9vB8ZtaGruke3NumT3ZPLKbp1NpWhH7W2bp77aG3",
  "key30": "29oeYqXZKauQE6ncVpnzyEsWyyqJG77xmptFF2D5trz6UJrg6rvCvXZain2cSPCPZrQbZY9k7Q7uRgadMfmvBeMo",
  "key31": "3xXc8U5qqvgimHUxCP5oezJqo2PqzeMaduCHG7LYbNrsFxH4V4fAL3MCnvfGnRdU4sTeS69YdATuijB2LWkky5eV",
  "key32": "3KeUcr9JDWSfBkrkbcV94vP3fk4Lg6NeMtAYrqGWKtqsatxTNbYhqAYH5c1ykTwRRM24vKZtdriGo2Q6YniWT5sM",
  "key33": "3y7cywuX8E4a4oQNHFW4rgmU37sqLztV1DwkCPqj5j4u2mKNgu3biEngs6ycFuTWQL1x5hb8T8fcPLtHrpCvAfyN",
  "key34": "5oiv71K4xh3XYWTsKhoVZggEok9s2sZj4XmetMs4nz7ehxE7PUdiHNL1JVPhqUF1W7q3NHZWHP41zwr9bqAa2EdX",
  "key35": "2WrubPhyhmULRnvcgf7jqFmm9SpkPDvsDE3YSMzms772FTBneiPrGggVtKwr6sujLypTPdTYnGWspGfd5Zdvt8VJ",
  "key36": "2pqEbcbE6zD7oSR2uFU9skQTS1932yLM9RW3yLmB8yo8srYbgxphx24FyjCCxjTVsv4kWTzNdsHsgK5eo7kxTgBQ",
  "key37": "3GafQJSrzYz3ep5wmYrgo1vdj2py1PwjvNZLoo3CpUR8SKct2GgJbttCuHpZYczBjDsxPSey9ajR5NHmTaEEBVkS",
  "key38": "572UUZDn2hhBWfyYuTjVeMvqSAKET3b59C8vpWDVtk7dDALGNeETeSse58WtMaDki1KzYcPDcKh34RMFQnRLQKzv",
  "key39": "21v6zmd1KvgEyqGL9FYsatiNhLHr19FTCHqyDpW8kZGPxPkz8LmBXaqWsFwcuLrWAmtjbe6VLHF7KPzdJa1814sD",
  "key40": "3749shyiWfyB6vZyqxhvqxctN2CbpsKWpXKRSLVsaNakg3SNjck8XPeEMDBpkPThUPZRSuNnw4R9HQw3GQ2KyJyA"
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
