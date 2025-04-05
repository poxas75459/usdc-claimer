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
    "4Z1VfBmHDiuCsk44BjZ3woG8xGhC8xi2Hw8eVyDR8i3yv7ew4rbqRX3jAkgPgVtgiAfiFsnShraiAX9BnSwVUx8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jkhTJcNQpcWQLqmuT41M5DYDFMTKexyMbeGNDT9Km1M5P46u5tkrAmtSHtZbkgwBJoasUqgjVRxrgPTjXqbwjQc",
  "key1": "3bEpRL5EBihdo4L6PyUsR6SpbRJzdGdnv63p611Gft7HjMoqRhQFApxrozVE3raM4KWoiuEDZL5hwq3LrWJQmWyg",
  "key2": "2yoan6mshh4crR1LuS8WJCJvGfJwhtKGgo5Y18NQuQMVvMaXkbQG76guQZgEL6vVCMt6McBPMBrsH3eybQAKFYqC",
  "key3": "3gQ6HuBiZEHZNLwb22zHS4CyxKJ1DHqDBvdQUB7JFMHDKNo67Z2kxWAaST5JnW48ZdJoXLtyPWaJNUL5aKrTaYFt",
  "key4": "34XSVETRiFjKJ6rGvKcGHeKRpyu5QQcFNwPkR7VeTHTZHH47j6pFnK43mXm8swijzwwVoJjMZ7U5o5vUD1kbD75",
  "key5": "47Exgrue1ay1Avtiwga62px9uhsNGTc7Uza8SzrovWAReXLdHdRinUWB48M1bwFwDYBUFPeXkDjZG4J3w6p4E8hM",
  "key6": "bauUvpUXD164NdwymEgJ5GmMUNT52fvHmxVEccerth7p6LhQA8efLx7Y5Vu1N3wrPyGgVVK98vxRXM3pxdR2LRX",
  "key7": "2qygWat2pwH8hVrD1yHd3a5utUC9odVVPGvQpAFzpKxuCaFowBLeiwNg3NdksQr6BA8sfTUvA5CMDMQ3uAVTQJcJ",
  "key8": "4KjCjUheNqywaDSbpKggx3eizHLaHpCFo5UryBHtqNNYfdTzpqUhvSNHN6NZLQnacKS7TAXuLdkPs1ZQXnbJeSM9",
  "key9": "4Jgq6iYA2uqntBfSJKuj958PuNBY7cEksBcM97qSR6iXF3y2qBCbCt5rhFHibz2SFwej7v5HwByJcpEH6sRKRo1E",
  "key10": "3vmz6iHYqThyTYmdpPoxyfiZ6Y75Y9Z249j9kwiMaqjgZvHds9AQnE4uhbeQv2i56SeXB7ugEQ6PTkkjPRhNXA18",
  "key11": "5xBudBUjrVufBvHbPu1NbniVB4C9VpKyDgARdYxEhFZjkV31LPnu7BtEd7CTEMRLq5i6FmNkGDQH78Ekr1SzFALG",
  "key12": "5jq2Ejyp6412rsrr7vUUVSWkNyRAeToSW8eSWq6UiNhfHb8BCUtQEGuzXFdkL7P5R1ngcugnyXZp2QfSE1nfFf9f",
  "key13": "3Kui83hiEJG4C6u2yC8bk4AWsNGaTth9Uem1nhVNQh49JCCs1KeYWE8GMfvRZzhCL9GiWQCnhLYVmu4FC2FQ5shW",
  "key14": "3XWSVVq5DzmkndrvZJmW3Nb8teFW4TDkhhT8zAw9o13vfynftxjm16wLYB2RLwQMcp77usb3s1HGREZCW5CaQBpM",
  "key15": "4dbzna9hDUR7eko5ZqtQpqb4D1aUvjxDp9SpzfQVQn65LQJorXBaPGU1DwTuw7bbNFVxMGzXPuB8Wdi8A95VAvJa",
  "key16": "2gKDBvovS3Fw9qNtCqb6deyceo9xoWn2oVJqbw6u6DgjVrSvmFEPc1mBjcQV7yXvTB56oSb5BWd114rzCfPkpHcf",
  "key17": "PLD5eKofcNVSjD3G4d9BJToFNxHwSmsTMxkwBFq34M4gbiqsUoqC9Dqm4QPEutRtjRFGnS2WxED7aBwuCiYoXsQ",
  "key18": "4etMxELB3NTBpFSnfRUDPB9YunzXSHprKB9ycGPzSKiPghYtMgq58S5zzhiYCts2t8YZR8MGZW9Lu4EsnfxQnPSR",
  "key19": "4X4ve1xcgjhYJ8TiQ5z1MDAZZbKWdCwQRFm2T1tZQ6Ttbm2JNp2upkG7V8MwSZPGS9hd4xfFJTM72mDWUaqS1jjW",
  "key20": "HdnEyFppzkn6phzGMHD1KYrMYqWxwutzWWczP1rr88tVptAxnNEBqc73DQb81Ygkx8N2FJTzbiw44B3HHykb1qJ",
  "key21": "ak2imd29z7UemLmkEU4U14XKHxfAxyEvzjeGL6PzGW8KWr1XfnQWPPRpRJrVEVh95oFrkbtRex3ZrAGNRAu2ntu",
  "key22": "SGszc8w4Mv8pvGGZcARBkAnaHNqaGNeyCzb9GkVYzHgyzHMh8y2cGqZvSeFUgiF47RYMZcASWMt4o3fDc5Gm3hj",
  "key23": "3nj8GVd3mis4rZQuQYYsUAHQJKqmEda8xcTrFsLoizVcGFNhHRvNcZC2d7HRi64wYLvQjzUx6JapWmpocrm23MGf",
  "key24": "3Fjcdbi9UVPcZFUb5HsP4UYRUSW8qkX3W1CZB63KytTaZoh5izKnVrWEVyqg8DsD91eGXNHfa4dtp9wGTCxn8PA1",
  "key25": "xPC8uJ82fNRbQJu2EWCz3k6GhXikzVHggu7VcermStZup5yVDhfTxzRZwvAxaQwSVeGHLM2gCJY6oazkdU6oQKd",
  "key26": "2BJfP8S1nmejAmmHKpCken28skAf7zZk1e9yNeLyMzbh9GzA5omRDoM6u66zTieM1GbW2wTaweED3bj8For5sM5D",
  "key27": "2Q7kpFHXR9mfoPBx3mhg7ePBQWsrWWCq18pX8mrJDnEXqu1uTNixSg42K5K18BtcAsCWWq1GYAC1jUYoNGxYBBGJ",
  "key28": "5NTLJsqJSE3nDw85S7JDwaLg2SdCSra8E88oW43D6Ytuk3bfkKgbFKLrXbeApykwbgeha8RyfEJE5qnLGwshfFo",
  "key29": "4o4HipogorvEtVxSE6qtWfMXKgnfc4MBbXre3yMHvZf4Uv2tfyav9SpWewVGWQ8eMSpt8HtW42CXaBBdfZmNyYgF",
  "key30": "yAENQgGt7Pfk7HE1ZazAVBVYtq8aziC6LTYhDsU1HunT6bywGVvXb25A9xjLXrAk5aD5Z7pNa8aBYyeribHSqPg",
  "key31": "4iEr2pFDWK8u9cdmbANrSMZG3xG7be72XGLZq8XACTUViYxAKNPxavqJkPx7sxqf57y4hmuxkKJSbnqA8HJxLWXu",
  "key32": "4Rw3PTcRvbK845v2PVkZcB45Z2FMwwwU2rYSkaDrWPsHpei9r3NEwT7PEbsY2taJU2A9Cg3RwL3HPwnw4erYUNGe",
  "key33": "cLtK9wfjMrBWKndkicugAeWY8NFFXiSdeYR6bQe4ZD8kMbSxyMRDEL93hj5xPDZV1FuVsEJHsJVXXxEa12okqQe",
  "key34": "49pvxrTGGeYsLZJFHa4L85AjpaAv6disdoo6Gd5GNoVifDSDPyu3ajPmx21EJ7jp3MPXch3w4Jaiwi3xHnbAkdUi",
  "key35": "57L2HxuujKHcf2p9PKeNpE2U8svDqYhY9yuv5my5CdWm8cMUYMZS5K6F9tQZddh1VAT1FPHebS3x1k9tnaHzsuBB",
  "key36": "XWan1uddjP99i6rW4Smx2ueNWo8va4BGESp8M15NHGF8FqqrJnMg6KgGFidRhrBmTeR2R3pivnLGL7DrRQnm7vr",
  "key37": "56Jtajr6LGzLhPVDQHEDCHsK6oNdjYE9wwH86YDNThuhVjhJD4EqtnRUq9fueFoDKiJ7GpF9sQehHP4sJGwXFWYC",
  "key38": "5nr62MuNwxvXX5jBuFDma2ajptL4hNscb5Z36EeadBuk2d8BcRtGS3bF91diLZfcfU32fouUJvdnipAju2m5DcVt",
  "key39": "5mQWV1z3wcXqnu1VqYDwKnQPRspM7o3PSDtXLa5zbpD1B9yghQij8JJeMfwRYwi1jo2XSNRi45SvX2CRnsMUVmK3",
  "key40": "3aTuFYqqz2BA4Pbq6CKopH6XJMtAxYJ3Qp6LHWPRxG6JQVxpogbw7dDHxcWJLd9Q5buGkhStDi3ZWi2ArXuYtT8r"
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
