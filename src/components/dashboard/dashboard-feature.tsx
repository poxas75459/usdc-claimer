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
    "2v3g4ZKSWUmEbfhk1LS3yraqWquYwybpn7WGsStRcRzw9QznGjVAZ2eBPMQMw6nCSYxNRBeY4AxFbtFED8meiB2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vp3AMhAPhzx34FF7rs9SAHtoUiyHx2Lc5MicmRE4VHPw5pHK5B4jEZ8qjjmjyMpNDgJi3XjSM7ce1Q6pSotDoRf",
  "key1": "2cczt5NzK2AE7pNtvnMKupBgeFkaULx7YNbDnYY14GxB9gYfcJjMgEfhZT8WZMzjxPMk4AcxucX3BapMVoDqHrmj",
  "key2": "9HQC6zPV744ycBaqtmtnLLXRFfwXyJMEGuhigN5vfM37a2BpoeT7WsfpTHL4t1MGi8PATLkd46UJFGJA1U8GYJg",
  "key3": "4uGu2JDUijz12BCPtfKibHPY4GtD75gEoyFm6LcXV5c7ay9eF8tccNxQGaWEat9ewRgNZ7YwXohaqu7QmvhVNZJi",
  "key4": "3h8DunaoxwcKJySDEr3pvwejDrVZm7UM9yvifAwCyBXJNvgvCBa86J6AJqJzKgDvFbPdJDw9T7z4HzL2boq7Eswb",
  "key5": "85rHZdYmZQjETCW2YCkFEi46frF5EuMoaTAW6umYr9rrXHLFyxf8UabJ2Uk8m4AcNXKsEZfJbnZWmsqits8Jtji",
  "key6": "3HRrB6CmHh51FTYWFYQtAMdQKB8huvLDKR8JhTFtfZG7A1fHK9MrT6ZaEcvJ7QCDR2SLNPmiyQJTiJbWjB2k7Pgb",
  "key7": "2ZYgof5c4CXMPf7F5pHUaAYBptYLyqZR1R2VdfhqE6udJmfg6Yn78bGc5Q8ZZHREm6YQ4Gxjq425hAEFWPwqXGcB",
  "key8": "4pSYC4jqeiSpUoYLDFLHKQB7eUX4FjB32bJ5RqLD1XvUeZZdHnS7ZLS8gnP7vpTYq58CiMRMwoLyBgyq9KiCHD2p",
  "key9": "NQKwvYcQMVSzCXXqxcV2q6LaZgik9gWW5SZ5ZGKzqnEBvs4V7FcG6oPRWWCRtb8bXQDV7qMp2w38roT96cNehto",
  "key10": "3JmELQP1ofSSsRQFQaPSegzgQJ94gDYXX4fSgksPr2TqicqfQM3Cm7yjFKQTgGqwq67td6p44BW2mtxPy9Cnxrug",
  "key11": "2MyhGA1DSyXMJS71Q9RFY76pCERTeeVhG8wpgF3Xo3B4MgaRoMZuAmvfccCeqWE7BTPocfcHocBx1vTmEqNaxaBB",
  "key12": "5kyD3pbzDB7TUkoHWjLcwTrPohanZmxhoQSr8QsFKzbkHuvBQmqnv2TKsaT1b9XAY4udwMzGV1Jn6ZrcRtDuJdJe",
  "key13": "2bMcibUsFcZ7uUB1iw2cM3fKNsCWAyPhNe2HstSX6EABBgheS1oEJxVeBptcarZogCPeetGAQALNKDy2C22PdzCk",
  "key14": "5ADrnvT5paA128GQWZ4xqs2vyu8B6tn8rsXzBQUWD4asWQppE8deCxBkHy52UFw8q9hka7dgK2xEFoR2ii5saN63",
  "key15": "3jyYxkrKzJNo9r2MJLjpcLxqbmA5jYd1Q9EWJxDR5r46gXJNHjbFtanE31qKuG9JmuwEvSfrggmGNYEt75Pfgqqc",
  "key16": "nCAuz8PHDDz1SFEhX2hkAGxqChoSogLRD66TbYJdUbwZo2zwV6J7EvDmt6s6Bw9hqu23Tf2G474EUWPP3Qk43kp",
  "key17": "3uYKhz7imm1WWHFVWFVj2jk88MZRr4xaztsAh5D2ZNXPjgQydXnTvb5Fww7QkTgK3nxk3wWhL9cFP6YSqi5F2JAL",
  "key18": "4wLBLNEypZrkDVF74s9pH2Wof632x3nybHV111b7Nrd3cLVmKxH1AYdTkUeCaeYoJo47i5sai143vS4tBaqmFvjU",
  "key19": "3wfAGYcpSqBmEnUV6Ge2nNQuTR7U9muxnR84jNgz5WScC5mFdSHC1BcsJxqsZBYwt29z2VA4627SRp3CZQoVWbEH",
  "key20": "5HeKxmwhx67bovczbMqncWKbp87qrjYmLgGRXNghp7L8Fe1Wfi132SbE4z2SYEnzMbevZApxdgc6eVbxi9cLw8qg",
  "key21": "4mMC61GgfC7Qkda8DcesCzkDRt3hkeSYguDK1AERnBzxDYozdvFZSa92fVyC2rhjowa1vUmowGT5BVKUWqJy65jq",
  "key22": "3eWaYgMX7bcTSukbGe8ZzLw1maKNQX5tSafkkgYxi1LReEFysosjPUkq5yUQ69bR8vgdMs72gt6LrF1tWGDCTzFN",
  "key23": "5rW83As6bkGTB8oXNxP6QPmVVFxWCAf2Gri4NttYH9ziDG5mGRiwpDQaPQjy4mg8rFvKfSgJZC6YKppN5Zz1vDM7",
  "key24": "v5iwNuuXYyo9fnapxTezWzPLWLcCHEXDDif8P8vS3eqxGuRrJzbv8ZMbJcqVUjg154dRC1ntkTNwAPexQgX1ztx",
  "key25": "4cjh2i55qvzRWQtVFqLYnwV5nszmsS9LYCqsLiuSvcANysr9wahKJPfhTAuZWF5zWG3VirisYgbCkKug56eCcQik",
  "key26": "WuE33bAtWa4zrm9be49LPyDjfQo4hW8WZKwUZ471Wrcuu7qUa9LzQZCcfDgpGD5sjTy2C3kWnBNTYteYSDVdbyd",
  "key27": "5apBFUdD6v71psWfWMBn7eyhR5xgAUNdQwkmk1MUHVFgceXtbeWtjzyzQWUwoy9jyufc6pCm5Wfuwz99UW9Qp2RM",
  "key28": "5gMTNS5o28WqZBARnCNR1FpT5dXnxHwdzZs3SrAutuJRa3dXrFMgWoHTSbbuNt3rZjcuyS7QqpBj9rYEP2RoaS5b"
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
