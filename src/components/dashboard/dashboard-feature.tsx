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
    "5QBEQgDjDXELBRUTBqxMYTH5TNp2vK51EAua3EQ5wtuhT8xD7U9mGguzCcnEpHBKBTeHxagToSwpg9nZej4EUFDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rK1A1f9q8P9fjVp4B2VUdqHB5yaiuUnq7P4Suhm7zEzrABLB4n85KcteCDBApFZzM4TcjkLzmAMvWYpHpoPm3vY",
  "key1": "413oko5NTkdqTFvsVFxnqXrL8Vb2AgYtPMaPcJVCoEDkkZ6CP3tnkS4gMQT8nNWqRPcEPYDpNT4m3xMwWBUQQJni",
  "key2": "4ZDf1YVKS5Rn9jenfdN3eYKbfPnRR8SmhgkvbVGhXGCRgerFyrdZhUazUyJMsfXWEjEjPeKPWfKQiC7ZTp7KbX42",
  "key3": "5wZh649cacyrLNzwxB3gEzsDAxQjUgn5fCqn1cYhGhoH4Nf8AMEvEB37sYtoZURaFWSSnEJFSnx8gJFnoDFjSFSv",
  "key4": "BVBUKGN9SDG5tSiaJ2J93zhPn6bE3P4dvH315scpH3dx3nhNvT6Z15WzanAL2CbwZXP7wvfMmgXU1dUDLtDpjdP",
  "key5": "66hHWXidZuiB6172Q1wmjZZxG5vmxjYmnWV12DfWjeYtUhKSYzUc26RbJahUDAeReGoxQEcxPWypBw2o1vMbBKkv",
  "key6": "5huJczDhyHJkftjujpPgmkY83yQKR1JZ9SUFbSjU1NE5g71jEGfqFa8JXsVczwBYDpwY2wH1LZo7iVmmzEifHd7u",
  "key7": "EKp5xzD1ZMXcw3E8dJnKQGFqtY83eWEsS9cGq1KrBxAFgY9Qyuor7DttzCt6KaS37U7mGdVNM9A26XBh6JQ8Q9j",
  "key8": "4da467qmZGHYcNNyUAvjytQvUreZL212X2dYsoytQWTA2FH7nVBHP73gYzghgssEkzhDLgTzU6z5RhoN4kaTkwE6",
  "key9": "8DcaWSto8aXabnDghMcK9H42A3uk1ec8x1hUdw5vaD3XiNDX7TgG6LYNECQDbWd1UBpyoZGSBbMtDNU97GqnfvD",
  "key10": "4L7Psvmqg9EHrCavaiLnsTynqsfbbVkNxAWtnnGuhJXwjpUX6TEbKG2y5KkZCSbrQKkT4GbMetTB4q5iguUstK85",
  "key11": "5vwoahnCoR69obodhqr63AgQSZmNWE3fmxBPKEeuaSCMqrT3u7UqiDHBH1pMYWGNDauFz18kAFJRDeYeyuuYAD4E",
  "key12": "i4wzkmhYxZmAbAtwgeDzN61P5p5J4jGWY1QBEiuWD3xtksVGpCY9obXyWmG4beYiWqcjUvjG4HGuujrE2Hyw9jY",
  "key13": "9W7jYwAdSjuMeCKyrTrwdfrZ6jMUeHBr5aswjzo2s1J1DXWsKKyKkQ5gbaC3YWu7dgUUmwpEFT2tdiHujfQHNmS",
  "key14": "5XvxiE2bWBbyvENXpv6sutmNhEBjz6dJixMztNeh3Xx9oHd68cTBYRJa8LZnRZnT35QiQGoc2Tn2riLSnWkuTnfa",
  "key15": "3X4iTeMFoD817frr1Ay2foS2NXWxgnpwU7LY9TiJKg3HURstvUn4Z2t4bQNMreDffARHZyxaiU9B2pwmxG44HQfV",
  "key16": "3Z5Y1qUAdiW4zcEt8zx4gF6BHLAqGwP3qraCzFYezmNwK1ereTxArqpUJpgApdRFBsDN3rrETXwt4KGGXy9GWEm4",
  "key17": "3oAJhH8V5tkAvN5vMjhGLxqvjbRytj5Bj4K8CQTCYZG5tu17ewWHDe99td7bwBvpzKvSPDQqB8WmxMwqFRi4wowN",
  "key18": "35j4eUtJCp15QBBHZhbw2kdYUqFxnp2Jbp5oztX7WFXGDrquNHpNopeabxfTFwmdf8bo57FGkJczxf1iLi2icfgJ",
  "key19": "5VFCaZAkWAfhYxacSPJ9uH1RUwmweiQQqiRfyAmJhQhafkZ4ZJkvw3vKuPM9zNqArkGMrQ6kw91h4ExmeFD9vvQK",
  "key20": "9buKb9ud3hcEniQkGvErTZyb5NXdWaKjewLksxHjaxFjfGoTkRSLkRZXFYtugmpMcKZDKkgFkZN3yKpnwVXnHs9",
  "key21": "5fJcgJFVPPyCGkDRN3UDxGT29HzqV6BigJXwGhTknnacijaMUV88FBp4zRLUFhxMSisjmgDrNhhmZVYHS3dHHfhU",
  "key22": "41ZTwpKL7LJdevfZiqqRq9MJPcqVpBY3gLsTipLNP5NdW3qtpY1VEw84wXn25y6eu98kB5GK635jvpT9s5r7Nwdz",
  "key23": "3F3NPLwtowZSpdFK5JRFNtNG6yGKM7MnzSQDfga6vgHYKwmd3QTbde2kQS1CgC1vQRw8eQ12FKvXyYzPWM53Wvpb",
  "key24": "uER3Y9trE44x3MQZDrNN6fHTLnWRdvkNqmncxLyou2uhkNhddahxwFD9hHgpDYphDBuevsjoyPf4oJK8iq3jFYv",
  "key25": "5hcoj9Ee37Hhx5fNcaF8BajktVQNxAQeuZ8Rkv28yECzzVpbxCtz1Y3Q79871q5qwMvP14MxNp9Mztebfa5sZbW2",
  "key26": "3N3WRgBy24p737tDK5Y4wkzDk3HE768uouYZsfou6HD8hcXHZ93AZYYqt3gVpji3PbL1VfBKc1BiNXsNo5sxfs7q",
  "key27": "3LGkY9MPmkd34Uqk7X88xh8npisBPXKySmVfSxH2dRH1Gj1DasUwmNoyCQqRuVMNf5EFf29T6JfDJxfXFthtELJm",
  "key28": "NY5A2xpxbCMiLkvuAj74K5NVHW7VJ2M5QTx3UPCrvstqcVdzdUEaBMBmiKj5ws4epgF2A6pGhtnQm9sfZFqVVKZ",
  "key29": "3fCJxtUPyJdqsKv3vnY1Hkr6yhZHNrAYYN1qThqYTY6PHZAhcnjindfRp8M791F2bZ3GPd8wtpLc4PVdwWBzGGZ5",
  "key30": "3zmMyi5LLitHHzTK5isq2jbYVbrLjt237tvosH5TqVP347YKZbaWhrmJE8pLL9PSxL5w69cuKRvhJbuTZnQq9dM6",
  "key31": "i1sued3SVndt8hfFgPeUzP9fFeFr1avXLhR63St3HHEEFYUqj4Dirp2DLzSa8UsdpiPhjK9EK3S5BeSEsxDQRCM",
  "key32": "AaRYwtbDMW4TyrMkAMZ6BqWdgJZa3z1XZCWoax7AmV4ddXwJxA2yQB19ppbvKocQLbaMXpUKDsbY5bJcVjWFJiv",
  "key33": "2qSMKeXt5gwquCeWyVCJ5wNA9ETGHTX6wfUbysRuv1HQ4HCsMrahgGckRMEFCjavJ161vkhfGWFruuhQAfgTnNoF",
  "key34": "2S216HSGWkWfpjwT6Wb9dP1VoEfLUmmKiuZ871V4oms3DKGzMjhjmYcdmdeW5RnADSEKXMr1E78FvtDqNgEVzwhh",
  "key35": "65tGyKwv9qMNj2uscbkDrTkeLZk2T47UcCXknhdumGBekNsGst6QuTHX14qeeS2gLwvtFTXdabDBmRBQXTfKuZsj",
  "key36": "6Tz3jgv2AQLV3XuwHkVtE3kCTkW6kyUUDSB1t9XdAHjVU99nCzbepaL1d9EfaWGJR5eAYEkDGfgpyf4pPeHzvKX",
  "key37": "4ue7iV8TD8b4e1mWzKLWG3LdANvYoZi6NCosVHCYk8VWwFUdW22NBUamqCSV2XJMLFZvir5LAGyAg7cxxiYCwD9A",
  "key38": "2jJMvZFwVvVoQGNwwj4CKTWYnjr94tnJgLeBtnCN1jU6gdDVvmsFLztgfGJCv3jExKMTYjyYnYfk2M3CWvPMKq9s",
  "key39": "2cnufPrcFFC1BNkkv7PzETRZH93SALQrZA3WGURf6hHFhdMMHToCQzGVNYJ8Y2b2SSpqZFnMSceT6fmfFL5PxPv7"
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
