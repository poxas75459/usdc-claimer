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
    "5ygdtbSfdbtcrgURqjtC9WhbXEnPZeMbkhoaegvr3v9FBprS3KNjEPxsobES969EP9P9ks9jGKpM8rE77VizgWgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2CEF7xxvQSMWcUXTDWi1yB2u5bxUppPEM8ASTAkphhxnks329zo1UD3nyVCA73WyZsZVWCCLq32Sfo2UwTHKX6",
  "key1": "4j7chGaDgiXuNsekg1PnkfyNGRbc5x7iyZKaAR5LVbAxfwoc3LL2UiNqk4oXtMMxnysbdTj1xdC22P7ixhoCcH87",
  "key2": "ALAbPdrDGaZg6EHsrv3vx11vsktmXcTGQ6c4wGdX1PfhnNCBPGhP5mPHxMAj37sYybpdvapLwr1F81R5g1LqpbA",
  "key3": "3SiLqFyMxEwxkwgm1GCdysAhRDZdkcShTd97kNtTNcPUJJPMaS9uxGwecpx2JSmhscaEnjgZQqsBwwBW6KTP4RaA",
  "key4": "2uUSuaxu9G6Ea5ZVzGfeyg5g4k9qcjS4Kayf41LGMxgozv5asXcMvP1QgqheyBUxJXaKYMm5jpNfuFnMm7T4XohX",
  "key5": "4JCTwTS62QFLH93ExuRemxH75p5wHeDona7TYMPBXtNH1341rSpNmtYr5kSojLfFhNXrMiTE1dVXNgvmLebquqfE",
  "key6": "47wJik5rgMkBN2rg2jqHJ9FcLUBj8jpAAH1WS5P8CoKvgzNW9JfjPQvhaxrLX9xP76rBxDGkyWXT2uFDocxtVKZR",
  "key7": "46rn5hWKpYVkGSAH6GzEQqAA3KVY35QPehkRowYRRDsnzkYmX5JsK1ucdxL1SoWygmriRazyKUjDE9fojaTJ1LLu",
  "key8": "2KXZz4cjSvzFmQHHUwi3AixJYgBitKM358TqyA5WzLcZn4x8jC9GfoDuEBfP2QL76MbNba77rdQajC9GwWwTqRjP",
  "key9": "38cFjHRdnETLZmw8vmz5sToZ7yPXfhK9btrvmUnjqwv6ogvk2Lnw7MvCr2YFqwKBs6AFG3dYLMuWYGTgPGRa2qRV",
  "key10": "2KdMPDP98k2svYB7kca13r9hqVKRZ4QjaHN5hTQwYDnHtJc4owFdefmQ3UH7ftpr1456xU9UBVR29E6upAyGawrL",
  "key11": "GuesfrUCjR3qbwbs9RsfvJQXQjsTsWYantM41zgGjL886ZuqRiV4PBH8U5MpeCf4teuj9iujPNUoQGtCxXLBXkQ",
  "key12": "2Dc2xEThXxo2DwHsCS1FME9xk3HBf7NJy7cCzKmaCGZ18PAAeX8oGdugZfjoJBy7aigxetehqJsMyALF7K8CPSUQ",
  "key13": "MiV9ckqUqGCrKi5rCvbvQC6UDyDfMmkscSzu17Ye6FKsrxsBJ5QejbMK4ifL6XDfcjFFoMoEgYCEdrCfr57rsgX",
  "key14": "2ANt6FA1aWBBdSmkBEq5jroqPDLPwDRoiV9Tx6A4UvgLfh7aUJb6KgGXLUd2cr5vJMpy71SVTbUu2g7SGxBQ9Y1X",
  "key15": "2KGB6r4xPkWNLSSgVG55n6LY9CfyoJgghqxqZjrbHjG4aK6tt4BjkmStySm6V6kyago73yNGTxY9osikzN7wvMnU",
  "key16": "y3h4oe5M89XyRyryhuwo5tP7LNkPAi5YD5jbWGCEWdgGyveLJCXj1hGqpHCDgnaiKMmeeq4ieMduBNeogHpT9xj",
  "key17": "67hJNcTg17S6ebXC5sfGQFwbn8bw6Xr7jbg28V4pFvAyKmWC4TVnDejhpvGWaTWUKbGcBCcjtLex6xj3QqHaKyDN",
  "key18": "2GEzyZDctCdXZ7UmCxVSucbUid9sfqWVTHKJR2ZuQnupC2dVxo49G52zv2EsSJXxQ3nWW8hxoPSFUqbmCP1C35Qc",
  "key19": "2Pi7ct7dy9iwLfEzuxoyPc9md5idPGaSjmekrSs2UgG8scCPSXQohk7k2Y3DEpLjGRpTYwbDR9yzpP3HWbnZxtaV",
  "key20": "syxSMTvebSv6NLPKDoh8bRwAEkqDgJMwxoG6gYNXsyu6uREo5TDEoRaNmkuHGVmDHn6U4DgeX8tiQruoHQDgR4T",
  "key21": "5jBhQkFbhcMhCZVGbhfYZZJRHNRsCvYHELEH88Zb9JFQBvALSgMVsLPYBPz6GD7QMUHeZv5TuZzveZRrRJfGot2V",
  "key22": "3JS63SeCvLaWiPbg3A7NE86rKsUod73xqCcazLRQb8ngzJteakFXdzbPbj1UVwByPripWNveVwTa6j3gRupbBRhG",
  "key23": "N5LGCdfeSpZPQnyBCrCbXyVCZvFscosdLHdxJA2vHmeNLMJe3AVMnEdv44dt6MtjoAw1iD15Tx6oJCGnQe2u6Bm",
  "key24": "duotPjJu1QBALFutBkCyTLseRX3N5rmtmpUddArh39oCakN12Rw3KPGfxmPa3tNfyDiSb3g9CkFusr7QPwqAthM",
  "key25": "2exGpoVuffvE23E4gqdkx9LCTXvuzCAGnsk82B8HQVUeUW6RFdPYAvWECxaeQy288un6DCnvEiUZJ6NZVVmrDV9P",
  "key26": "3PZDR4LfNFZ9GAktGuEKhNUxjUh1VRzNnVfdPyNaMC3CETSghSeEZyrGnMCQHS1zG4NmzfrP1w5BgGeVvuAXt8Em",
  "key27": "3koeVpfY2t2R9cxWrdvuGwJKvVBUUqqUdaW4vGpjgbbdo9d9BdeoTiqnr2oi1iTJg8g4ueYwgq7uasZDgwkfuSSV",
  "key28": "3D4A6eSHc1oW2iYokHb219n8ApYTZ2AqckJtxwJcqXH1yAGiW5fv8ungXjhV3ebcvJji1LtWaptKvzx3FTptNKGk",
  "key29": "3i42zB6NRRP5w11GqbToEjj53CXSrdsziAjzAGFZtocWDNVuvc4h93tMXDhA6Z8Znyvsryuk3T7SFKbADGiG7uct",
  "key30": "3Loh65hyHXBY2eHVw2QWuDH3wkaSTgGjc7PGGysFLgboNAdZWi2XF5fabtiKKG7hN5Qm2AJ87LvHUULDfyfbbCKh",
  "key31": "59wxVdLWunpMh3XoRbFQyXqfJMEKMb4bT2LhEB9RHxQ8bipS1TKqUSdNn6VCHe7vrDiPKCUJvcdD8nEYZvnfv7GB",
  "key32": "3BuWbyeFMXqyaDSNfrstkkYK3GPeDwL7apweQ6c2soQX9Nodinmko52VFWJXMu7E1ePr6shCvkw4WEwS3HHpZ3zH",
  "key33": "4yjbgG9sqGb6LTY4FoKA1vW9ArVrY8mtBpYeJTd9U3yb5eHqHbgBrCYAHv2PXuQPSmbhm37aAX79wQsH7DonHf16"
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
