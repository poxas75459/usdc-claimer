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
    "4MBiJohFDnaJHo1v1UVaf1vSi4cEXxPmWMPXfWLwsdKW7ec6XABaahfcxhvL1mixx9p2m1kqFjD83YyfLkhgaZjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZGZAFS2RjJSkdtTzLCKzXUn29EE5wUFXP3bogsZD9x1E4TqgEbsJyrQGF5AbVsRHD5pxRM7ZGaGW83gFyrbA44",
  "key1": "3FPGe5PKTbsbaxwaSsQsZSPsqwGjgDxcoPftNBQMT7tZ3RhJgWpLQEMh5WTbbt7ZkoYFXBMcpUBfPw2FzhdA1JEP",
  "key2": "4sXoH6Yp3pk69DpcjFXiwL8DBXfyfpsCsUsNaK4CHhTHyhgy59cX8x7DSAmCt64XGFNBV5rKh329HxwhaUi14K2i",
  "key3": "5RKbaLejkWuACSSqtdUxRAaScnowBUULCQdyd8K6urGiGZKqxPdVcvQdmJozrk82JRBz7UPELEHzDxQbEfFirRgt",
  "key4": "h7mm2LbvxX4QczUrfP2X2b3akSEA5E2C5HtCnib9b6e1YEYUyKwd7784LkXPwAWs2E4oWRmtBZdWVkddb5ykUK1",
  "key5": "31hN1eGz2cotMKFhisyBzb6cmof6PiJ2gkdiq9bxhSkwEzVWTVH93fkCaJG3X2FwSDVUH8ryzLFztLErrRUCRZUq",
  "key6": "5ZAGBVngXQK8GanvPwJCZMUBzzNcvSqDXgHLDZgsRwhTAE3nppUdYsAKEMkS85sNjoDS3zjcSUcHBxeAmqYwRwm8",
  "key7": "2f6qdjQf7utj5dyawpbMQpJpb6thh3CVkmFhpVYmE1RR9cqwsEsRL1NruxbjGNFjcqML2hyyu9iQNmBH3kgqcYzK",
  "key8": "Vrsf49uqAWXguLUzsMfgrKiUoYkjGAPaYeR7W6SUKC2xXP4X1b4HDazuYNNnD7cjiDuaHJJa9kNUxQTRGYWkKpi",
  "key9": "3amfjozcqvi1JYc5pAvYYYdWMkc2KhwhMmj1LmzJyKWwCMV3o61ebohXPKRCPDNsYAVwDfA8GEoJrch4Jd5myumq",
  "key10": "2EUyhfeQQdCwJNbE1RVx6NNas3n9vcYM5f5pNUwfTnGWm6qewGP17BfBVEG6yScjntSB9BjUX8JuuDgRHww6MZSy",
  "key11": "3Ktf8GXDaxRCUowZKR9N9bN7cuxkP1Md86pe487gSuuQixZtkgvZ3158obupg3muPRonqQNZhzzKhRdSKj77aK25",
  "key12": "4t63mZQ4NYWJrtQ2kVzf2U2NuXnWGmETN4wCxx7BkNwxufQRMuvnyoQ4ULgVF8SSmydnrQGV2BXA4TSiUt7q4huc",
  "key13": "2fBiczCkJ7FwcR12hCoFueg2Qz73iNz5EXHWezU194FwK1oULRqPviVWv51esWDqJGgff4mjP8rsfs3dzc5Tt9w8",
  "key14": "4hs7PdeDx7B5SWB2V8dsDsJ3KJcbT77QoghRhb8D6icWrPSdQTMMcfhmUtSYTgN9dbYzTi9oUKvsGBSDx9s2jNFo",
  "key15": "5K8Bv3ZAMXNvZHL9zGfkyiQW6Wd61Lu9EwqLF4Mv1CDCUUJNqS3nXT4Def4hcrDLz7Yk52qGiabBZSaSpNEGFg5A",
  "key16": "3dr5pp64tZ1CPC5vRxqYzy6g9twqGM6ynjstPB5KzX4hdKvQd8veoBKycvtmEqYY4uYm6mWH3xrRA2NPRdBMMjLE",
  "key17": "3r6HeiLwaKoHNy8h7SJ8iMHUncwsiWM1s8DLrP8SbQq914QR2JtVCikWa9METqwUtCWjYyQptpiT2ZkKcyw64G75",
  "key18": "2iSph63ZECnvsPzCNtg4iHpAnEBSjAPAAPd6Zj3JKo6pf5z8gPtwzBQuLgujetXqVFWNRFZGQFzLL1ft6bSMawa4",
  "key19": "5EJerhALbKwmKbHskC9RNsDDTR74FeQr5n3AFd6RFVcJEYtVtE4Eth5rLPabkcYmQcfbJdTLwJW7qvu4bfmZbznf",
  "key20": "2RDjgBxkazkB8tqmKBxe3CMroAEtMGAgQFsVgQVCmFaRWSt6Z1YdL4pcAmTdV4dxJ9sM9SqCrhqJ6MqpPQacrzXU",
  "key21": "2D112KJu7becyFua97AxBXx6AjnTP9ZKVcfzEtpXCqBenQTFvJigU8CS4D96Gw4ts4mnoccvWgn586cwWKJ9Czb7",
  "key22": "4U65YPRrc5m2981H3NymcArZvyz2QiCARbdidxmC4HYjdTqYnZxYGdKvMf8RT5HCcTw3d9XFN65bN6TQXL53XdaL",
  "key23": "dykLFCGDn7RUc433oAGpMFVR85Dszjc5hx5neCoydJyW7r9Pd8RDMzEKuqt2bsnZ8cj2VXRj1GXWZ32S55ymTiH",
  "key24": "hZJGxuJnmVTB3DbtgaXmW262viCHbHZMryadi7qonKBqgf7XqozbUUMgD2bS53gbrcMkfBTza4WgY9AYLHwrNzR",
  "key25": "2FyGPGXemqT17iQAH8nHyhmttT4UKryRb1qBf6HUfBCPCixEeW9SiEQ7ejLUMJQwwXffDbvLkuqMhCYJ9tdv4jDz",
  "key26": "2TLjeN6YiWkCocDxxnCDY16Xb51DSQDK2Woh3qM3Hc5vZUXJytCmpF7jPJ1uoKXESuSUdbHsZB53A3mbb2mHj8ng",
  "key27": "4u4iiKA85KwSbV3L7z9K1NtQwMRWBcVbGGvMmDxoKQmomW4rF5gaprrmHwmMrb2XAndSi4LfPPyaiQhiAKGSCNZK",
  "key28": "ad5JanKUBiTYSQFDvCGjj9BrVLhTw7LpHLY9uivnRfoWCz1u2DdG9BJPa7r7RYcbBn1WvoFfmwCg3JwVRoDmrxE",
  "key29": "2WFTaW6JgWReR3eTHCx4wUmyFe3xxwGanK1A43rzVvt3j3Pit2YnZSsMM65SSue6t1kyAUkfiWhpA5fxsSvusvFy",
  "key30": "41tKKT3oAaAQdD8MsdhEtx7aAiytwixTHajg8DMY2TaUSg9ztAtk39ZdMhugdWcDKrb9Ggq8LKUREdggu48R2PYh",
  "key31": "27f5JM8zGeLaNMZhhDvYj7vJZZjEJJR6fJV3tCNUJvsfTn26YvDqsnfj7rBCLYaDxCWeb8SMYkWffRcb9WrKaE5D",
  "key32": "5MeiVawcvPG956Adgx69QPC2bN8N3119N5h5MdrqkYMVxswB2CfQuz9zCxnEYH4NEh14LYqTimMG6TVXWWEKMHkV",
  "key33": "2pW7GSa99WGgRFuVMDtLN3njhWCAX7jQ4ixmA4Nqfv8jk7882LKrJAtbu2wmrwT14KgvXKiSHmMoKHR8APYnBzVr",
  "key34": "4f91Z686aPp4nXEDen6SLwAfXVfdjpCxwQkHG6ytEfhGfc96VtJeUNBytfad1GWtkFmN9FSPskMkGA4C5754haAe",
  "key35": "toDqQAkA4ndV18sKLuwqAgib9iUvbpxWyvNAuEZKMZ32HetGPDavQH1ghYxoJV5Ew9dC1eaMTKXrqD5XazTkJq3",
  "key36": "3h5QZJtXrPyC4XXRQPyEdwR2pdooAcoFGKbB6jU91YMY3cymFq7F2g2L3nbD8FL6UEvk4NXqNUkJoBeJW5nKtDSY",
  "key37": "fh3VDg8PXqFDKdZxeKcuAwaGn2Zjrxs88NQXDMeRSVRsEYDiSgwKtkfPmS5ZqasCzpkpjFFyLQTKGBJfVGHCRs4",
  "key38": "672dQ3YLZjrBMM8Yk6EvvyqV7Sdzh5RQiFQGyBCeiTzVkpShndZyBZxJYH7ZDxeTxygTeuBFkdeSv63imcKzLb7t"
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
