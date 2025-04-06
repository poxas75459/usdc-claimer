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
    "4HjYFkac74Ffeaw2g26GVvg8K5RuewLfphg6KC5c5Lv7yNjnp7buSQHtvtw3v1W9ta59bmk4F3bwTcsKxjNKvEwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8hCti6u2sbkeKHLSnNr3356aGYD2WuSY6Z3NQ8kmXaHUR3AHQXPjisw9Sb6CWY9tqFMGhjmJd9DeJg8KJUZiJc",
  "key1": "3WDzCcF2rJSW5hJMXdM2Yn6QgZW1cdqs2qyFf1SeYXeMN2Uks7EUT2BX9m3VQBK3PcVFv8zyoT7xFehrAsMfzW76",
  "key2": "2HYFDqH6ccoPi9xB6tY1GNzWGUPW6GZEYZh4ZgY4mKq8FHweKWiWG7R9scXwKfpcgGmrQABQTUkmPBxJ9hfL1uYG",
  "key3": "3BNysvYe9jvbw1tfRAjWWLNjh7xFNrefJeStqFr7EWzrn15T2UkV5UvR6wn52qUo9k51szSDp8uJsX96jUFxoQk2",
  "key4": "Vvd18j5RPm3DQB839bJ4obg8k18eWMfnnYxKBzgzLeM4f6mpkeks4J8T2HyY4yfEnBHBEjWkpWU8st48sKAyve4",
  "key5": "43YwfHRYYMa7hJv8A8SqF5spqAuEQyhydBfwafkvCvxEVw2kCNrQv3vNTxHeMwjWSyboQfEwWc2uGw4k6YPVAzoE",
  "key6": "5nMFq6PdBdEvCBEvUJN4VNp2GgxVVD3Z4fWTVRBVuptzvnWbpJpJ45TYPGKt7kVRyXMfUtwxpiry6GKwWTthLXKv",
  "key7": "3p91jhWKsxNhd31ijstA35ftivwKB2ZH4rMjz6V9qTFu4kejTnXsj1uoA52F6ZsiLfJUSZ8a9wouSk5fMUL2bsff",
  "key8": "y2CEFs7pTUVrNswGFZUZiEBaEzQYzWqSYu3rdqvPUu1WhHJ92ZToPjsdkUpu4UwBDzjAdPtq2cxRMHS8iaoMdCh",
  "key9": "2pdyVMGi8zMBcS5Z3dXCRXN33P6KWpFY1oxLHL7gFh8X6Atf1QhS3HT7KCo4SSbhz8jgp5TfVXPo4ZcehrS3ugt",
  "key10": "2Xti7ZqVs1goFqwNUaRd74qgnW59pjqxTddnfs6WuZA9vjPuwqarmF7FLq2BQGzsWZ1P7z3q4CeVreoJnNyJawMT",
  "key11": "2mtvP5KKydN5WjiG9yXSNpyCuRzUCWi6eRbPsC7JPWqUUWhiRqojW1F2DSZiE265NZp2E8dcJSaJyddArMtQwYxb",
  "key12": "YS1uk319PMqkiFNz7g6R2bhqADCxV78Y3g9DdhmSarFPTMY82pA9aX4ygrH5cZFzoaVHAVncT6LnUxYAyJZb8vZ",
  "key13": "3jPddJ4hxBxy2mwQpUqMwf8jFHyNRShLG9cpaekFtodQV8w6yWpsjZKGBgeQFa9bWbDvkTrR2v6tDbDroSJGH62z",
  "key14": "3nuPC64hKbuUhvNph11QeNJsSWm67864ZioLUspUS2dnbEhXxPCRVcfG9EiwURBQsmgcaByUsw573tCHj9ALbg9R",
  "key15": "32LqTMNrbfX9FXDvn4HhjBcVwaMVGK2ZGTUtEvsVhjY6Lt3NVxktmJXf1xbNpL1YT4ppiY3sRuXxfy2YQLbAmvR2",
  "key16": "2QX1vLPMVep5BeRayoqzjY1NVJ174aYQ2oY9JQxV9NgBh1SLGk8fEnz4v3WQhDX9uUTeNwxPv4hxRg2yhM3PWmCh",
  "key17": "3Eq7xLj4BY3j2qwqDma5trUhtAkKaZvrv4k9uTFVsNRNZd4LGzQMFuBogc2PDAm2GPyT3ruiTjCuyUqJCJoiUDVW",
  "key18": "4dcQQnymBmsw6zp69cLfdFsPyodUFPyrgaykYL4iJDc13ZdYvX3iP98owP1E3mKwg7SDTLooo5WP94ZM1SG7aUUF",
  "key19": "XCVEDDmRZ3d1gPHSeh9iifrgis1egu86QRHhSNhuZdXR6qsqqBbaHvFBAr8Lf5wRdPuJ63WHepU9H7QT3e52c6S",
  "key20": "2MnswUVVAYgk2mS4UBFKKBmRnobsGf1nG6moba5ed18Bey3kQMsKpnRhLqV2ZuUEt1SjvuqjCBZB5eFtSgLcdCUD",
  "key21": "2Z6y85dxDzwCk85KXNXUtJ18uNS5yFhGQdqzdwi5xKsBe2MC7vhfvRa2qVUjv17do3shS9my5nwLgYnXeErDEXRA",
  "key22": "5WpEAYyY1BxX792nuNNqApisF7ZpJfoKgf3xsA4YJA4bDieiwneS6Xa1EDinkhK6fJ1TxpGzVoxX2eBGPKehS8w4",
  "key23": "5WvgRg3Vv5nVPUGJjqXWQwwiYY71VCqpkagM7hZNqimpEb38MXnqHsRSuu6CDk7kW9xfnN6EqTqWtG8vJbQ8HFAM",
  "key24": "3AJF57hdHbXGb7QHeuHjWrumuypUfEj7EgjTHho4sxUq79sUAtU9WQX3j6Q4at4iPHsozjzrLVC8Gpmy9T3qmqcQ",
  "key25": "3fLPrrr8JmpwmohoXFfcoojHZE4nhwsKAxYNFeHUwCkK4H6pcVph1tN4eVZQSWBq1brTRu83J45iEyvLmgp9StEa",
  "key26": "3bW1UDRc4rFZcWDtyfGEECdW9CrgA27Y1VJ1SYozvKHKCdLmJ8n4RdJ3ME6ZgZUGd9fx5r9NbVfbr5zZqwDa8DPZ",
  "key27": "4ZH3ZiV8bRSfusVSUxedepD4QKYdZgoj1DTYoQtwinwNzJAgZHwGUxbEyHVcHyj8SCDMCPAWCM1czgcLrLTGBJVU",
  "key28": "49gJm2by68q1WcxcxjtJGUZjbJVLuS2yCqt6DiCEdAicce6n8M6zrYxozKz9atsfCN2SLGUDvFQF7uygvwB3TQgu",
  "key29": "5eyTMYTSpTALthGpHVpGBq9ZjNZJq7AnJLB6TQzN9CiJS9Y3HiDJSZcR7bvMdXPrRriSGELaZ4EAVf3YuDo1KNA6",
  "key30": "3ADBfKCc4MENSWVNw2F4YBGokcjs14rnVBYAGkqcdUcLi4Jxipep2dSWEQskgjiHcCZXnVyKndoJwoEkWxopNUoH",
  "key31": "3axeBKmdD9yujL25ALFxF6CHV7Sv43unZFK9mJ263gQs6EYjEtH857HohsfqS2a6h8v8V5fr7dquUe72MkA5EkoK",
  "key32": "5XjW3SZuSWfYfLMR8EpkYQG7Chmc1UdXWDak5nW5R9CTM1mtNZ5d5dqmcjktqJoCuz3tvJLVWKDrFJc8aNo9Gd3h",
  "key33": "s55iC4kZWvz8qXcMfPVHsmehU7JSmCYj84dVAgvxykbcrNNwCkB3BpDB8JipBHNJLfQyrCWytTdYj3SdUqKLGhV",
  "key34": "2LTBo9bkeYVJtB2Y765GJxtkCBnQuu2BxgVkR1pGuYPKdG5JZ69npc9ojuzgroXXC987pTLtFu2RtQ4LFXfrEPAw"
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
