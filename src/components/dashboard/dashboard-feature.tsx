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
    "whjEzmBP3zv9tcCFcjDkdmWt28ESrbU8FBwZNpfVXeqj3feJrqMkzBBqRo4W3rKgPTvD9VgqTe3tYeFq9eApayr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49VyiZiumZtR2i8KJEhtaMzDRGsWAExHKxT5bS7TzX8MwKsseSeaoskDHZhjv4QN1rRa8go9RcvcQupJ8XPv5Nqo",
  "key1": "3wA1uwAYtd1vSibT84m1Ef2enfYiJjEfUBWSZhkjwhWKD9FbFBiDFDkggDbkzWtQeruWQqYfb9M2Aw5aKt4hduk1",
  "key2": "zKSZtATKU7RtHadceFWqDDXFc8j2QB7D5WmECopga3gvH3t3J1YRoyHGWBfUY6SR8bLzadK3zfCrSiZAT2uYcm3",
  "key3": "3CJhQETsJE6YquqJQWb918eNzgvDCN5NNyfbVWH457gWSqWr239CZL8Jwaf1EcntoezND5YphDNtBn25eD3xfL3W",
  "key4": "356EL6in6Kijn8hEvTugkvUsZG3FJfnUNWJuJWkYasezvyKaeSPnhxSpCqgrwWUXSS8VrCSnM51FXgKQGXEUtt3m",
  "key5": "5umyVLNRmQYqu1GRduZxL43gW4UVyCKExAhMGbbsRbP1YQa1n37ZmTvZaGrHvgANYM8rp9NigKq7MZGKDLtFZmc1",
  "key6": "23do5fwq4M4DSeDZFimJtPvBRof517xQECne6bBzd553Lzp2wgHdCCJpmByAQamfw4GENsW2AHRqMvrT8CCxYks9",
  "key7": "42siZVFnFVu1jXykPNQr5GUAwWTr15RmYxfi21qAoCStEPZ8GZNhAJdiRXr9gZUubYYzQBVaaM81mVQLxXmSeTAa",
  "key8": "2hL5WV9jU32EKK2FU9NyT17qHQFkpMfYJ1N9LjyduspMwWSiexLsePLLJ3UbXGRRt7rPSJCk9hPhc6ycFqZB4bsH",
  "key9": "MAs8tN1py8U6Vx3Jr9ZFQ9Ay67VwzdaCZWjSLF1fK6iVk7z8JUUUitpkANycE3nCFhhgPG6CG4LbAefov3we5hV",
  "key10": "3GAaiVh9xHLKfh1bzvPkx3VrWEM9Xy7cgaaJCcR1beE4jzFJuUjsdhcb9uTgZJMQuMG5oQtUFTVbwxuajydvjLyf",
  "key11": "5e2EkvKby3VErtZq9gXCScAhC5pGYWaordNYhm1RzXx7BMmgKEiwAAzWYS8kJuTyzrLMnFFwGcobfHp7nxmpx6V1",
  "key12": "3mwvAfhZZQPff5qHge18ZtHn6whmMPGvtGgjsM8MK8hDFrHXTh87Xuw8JmGFCJGdpKradtcKrZUE2VmNgF6rb632",
  "key13": "2fdZC7uJVWyGQZ7BE23rNbHXQ2AzzxmQyPebFXSuZGVN8wWioFQpAg2Dz6BwZtixGoFHXvMaPUtTHDDeadsMkdzS",
  "key14": "4GbogtdaWKTh22MgtshW7fMbwAeh4JPhVj1Jn4ybWEHcyKGJCvprr3K7abeuCAL1H2jCTCx9PBgqoJBBmE5Mm51W",
  "key15": "VJKrHU3HCJZLWC6GoDjNEFy6s6Z24wTX1ihg5G4x5XSqPh46n4r2kCDBcftxN9y8rzRScjJXSjHVPDgtn7CVDZe",
  "key16": "34ZRuxiQL9b8zysNV47ftTWRfA1xf3NU9TG8YJxE9oCf2AUx8kDpxjWfzUo7ZEeSPCbPtxsoWx1qU4YAPM2gaVq",
  "key17": "3r5ZSZvR9dFVUem5YLhuqvwTiqrJ8PxSQ9WVAPohVMcUgob7RTkWJPGmXX5iUitX4RTi5W4jZrFDL7otzhnmNwaL",
  "key18": "64gUu9AT9HBhFHDHgeHUZVKqhJbCqPuYNWvP5jAgfXHQFqZ6iuyzUYjFw4c7oa45dXg1bkV34yfdYP65Bt1SFyZN",
  "key19": "2TKRbp4e3H4AsUroDuHoDQJS2tbJ5q722EUjXfZAnbxwP8KUN6F2H8rC9Sz4TjMkiv43NSPu3eEQCUV6sow5boDs",
  "key20": "3EK59Wute7L7y1N8nB937w9ap2fmFAZYZmsYqmyCsB4NbXvvLaXwPDkj6DhWiCDMPP81TjTQEes9QrTH2HcXdcno",
  "key21": "62J1YqQTtw7UykaN5ogYHrVAF16EfrrfcmQmkdHU3PW9pFrxdG6bmk4hzFzKVnhhPcmj2uHMguBq1SsfPHvar2gY",
  "key22": "29Zs8T5PAa6X9iebgqnk2aev7sjHc1oBr4UyQPiu9urpEe9zCKBi2KnG8KYBepDyNw1X7gb2XLSABMtcLFuJPQqD",
  "key23": "DucYKbhsUTypCHL1vZEPyobtPQQ1vafCh4hak96NQMv9X7zA2DsrNjmyFdQDjFXTZYdBtrAJM5DcBXjPqP7Uf2B",
  "key24": "2i9xZU1eoiWYwDoFxFcb7A9Rirr1oyDw1ABw1wr8gAGvsffCUX3pwTueUzxbmr6bbjMoQnAF3gAc8BMfbTRQKZyZ",
  "key25": "3wtHQQnayYNBsGknvJkdEAF64gr4fsKQjHNYbuDYwh7YoAyFkxQXoKB6kE7bNjUniXV71qj6YgfGtLp9oN9CVTy5",
  "key26": "54yX1nu4tSeB7uPEwBAhL57FhZFU92f3dncbubWM2vcGrC7AY1XjQ3BYXBexaCkc9mGZAt7ZaQgc1vAFLETobQmh",
  "key27": "5fE6yqAWiC1iEAhecx3FTGgFhECtRLitEa7gPtTJucGAvq7AnumcQaE1fnHCxmexfk1JR8WPgL7MbmmjEotjFxF7",
  "key28": "43EYK6fUEJKsnCbhu5ww7DsptPh1A8VCPVKTcVN6XrrSk8CHWLCdf2scZXutdAnX1jXjPWaSmMSDp1i4pFxkjxJ1",
  "key29": "3SHPmZWAgPvvhnSU45fNBb4xbMgtESau1dUrU9LKVBTGo6z81rGyTArHz1KTYXaXSYd8NRCocuFhSRE753BvkYTG",
  "key30": "3SMTj8F6yuajCrwxp6udnAfKJtf2BkwJro5MKdKwPggCh45BdjeBLR6dcrKsQzHc5345McVrPaPU3RvBq9z2RFZL",
  "key31": "5nmDaavn4AMMJt4HFky1Z9PSUz4ZxMzeu1PyDfUFBzbx2Jo2LJMoaizhtS2Ut2rq1bGoWvVDioMwED7T8FMsjJVL",
  "key32": "2oPPoG5AU7pdDfjHL74tW7eQ1yTCTU7zfRknqpsbWwWeR9GGELFhXC2ZoS5EN4SUnHYDn8f8xXCbpvbfL3QgNcXx",
  "key33": "5o2CgJtdoR8kUQNizUJbQpWqmueGeFFjFsN94o22fGeXbV23EsfT3VjmGwDsoRWdzkSdNsSpNHTUEhp3cBXnxTkz",
  "key34": "31ZZG8PpkBZevoT8jaSwrFmLQverwRniHcxv5LwcWQ4Sih5TEn9223Rfr5FZB6aKNSGbLGfu9yJw38Tg6QkJRGtH",
  "key35": "5zczF3otgKpB2wbVqmiXnigeBNL7Rz5P3Sn13QFinfc3P1oWtayamzuptv9MEb3eqhPGYmDz37g2en6ckXRUwKJL",
  "key36": "5uTp78EtSjuCyzJ3ugFt15ux8SxtDnniADhJgVPBPYevzYQPDgoSrdjChPeDumnVgJcgGuqSWPXbaPJew2FqdPPs",
  "key37": "4cVEtXZgpvXnFFMpSzGwheK4ZdV7UUix4qhDRNkG3Yzrsd1LKbq17ircvVoRMFSbFyHfKccQt6K7GN7xqo9tAnLQ",
  "key38": "2YHwSLpV1VyGF12Bv88BDD5vC5LesBW61VXSr8MdZhBBeJgBM7C2vJs7NXuW1fNXq6p8zYePuNx3MKJ7b1H1gtTr",
  "key39": "3nWmVPP1wgTS1temeTvrNMeepuosqnbZReczVwjgbBarWGTzUfzaRoDGyhrobiEUd1VQxY3uRqLrNRAKSinQ8xjk",
  "key40": "35RA5Fiwv3a4Px4umsCi4Sci92R6S7zKPLMFFgu4bYkqzAExpifL6rfyVxh7fpusF7s2hfxgmDcwaJh1DFrqQKVN",
  "key41": "3GNbDy5PZRhQbV8BbuC8zUvVqPYBvsGLKGHuVFuuhWMsaem1Ck3hJA4Hu4eM4c1tGnxLCgBcbW5HcgLXZ1HdUBGg"
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
