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
    "4ZSQjqEGXeyva86yTdKDPvg5wVxmV32pVwGzgrqSTzSDrmFdEucEhxZUaUhDvim9n3FudL3e8MLzFPCcMe7N6Tov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGwNTyYLuc5CZdcuDs2i36HXJaD2Rox5vE2L2vQzyHAxWiUBfdGNgJmGkkQYbcTpxH1EiYsZvbmPAhg4TPxfQR6",
  "key1": "4kcbJxV9brVPHxij5bn1eEpYQuNWTiUkBqFaCXtbmvC2bV4jGoAoNtHrenWw7tVwYsyySDpGQcE5nBFcakE48rxt",
  "key2": "53hZiL74dsUyfWfEMNFmPhSJmwZbduBVGUaTeRtXo3XapDskKfo8v428P8Atvta2k2C2CK6TPZPzDT9a2G5uyBYV",
  "key3": "22bMjLGyxDyPFskZ6cU9MGQFjh4tw47LhyNKBxzmR1stNVrMrR6AHr9LiKGLRbVDZs9YnLR74hQxxX5hXgRZ8C4k",
  "key4": "3sarJUgaWG24hTYeKLH2QvQRG97JAogubU1LmhwDU2g8yBnsKRavQjxeAue8kEUdoyFxkJVCYibKBdsvZ9cNp371",
  "key5": "41kVkbFLNKTu9YJyNXxyQzLtnSeygLAzZQzzBSHtFHawuWAqE6fZruQUA9n3LoKXFazTM5ix2NjRPzNLNMTZZkzx",
  "key6": "2Ph4soKzAagUNGdMqUWoYfhKRMPefVQzH6vQQZuncWPN55xgRMSeJVy8YzpnCKzqVszqTDh3VcSiVL1Hb1Xhzbn6",
  "key7": "2Api86NyNsVmGjWprK9Vo9Qg8qyJthage429KYUuDZWt7nfQigQL2fdqh55CgJAriPEcC522TuymM1DEYALn4DkY",
  "key8": "5FnkXeS7ya2DnubmZrynKaLJiqQcDh1G6bMM791FAb2RVBYtXJHGoEfPCqrDr1PBzdo7ZGUseB2YRdRohseKuva8",
  "key9": "3sEPt2bLb8iN6zLXFEDtp975KB5gZenYM9nDvGk2LeKCn9u3MdxYfiMZmr3BL1e8G42y9rc1hfEePnYSahbiErGj",
  "key10": "4Uzhy7FoN48g5k37YJ8HTK7pKBFattArhNb2aFxq4ipSYWqnh2BbWn62i9wM4XGYX14SZLVAmy6wsDyhBiNifMdM",
  "key11": "5qA38eq5FAiJYQmEYeqyJkD8wkv4PKhU9Cw9njHTxhSAdqRzc74yfBVz2cyC4yYEk7hsxX2nqiUPjewEDpXjp1mG",
  "key12": "24eQ5gUvU5gA12z24gbGkcXp21ZitQdvPU9AJEmjtWTVjkgah6xDiRQauLz4EDVTiqm5MhQgLqzY2esiHE8WRW2X",
  "key13": "5Cqo8u7WynguqcfaCYC3ti35VPoM7toeGXZ3E8fcA8Wpbea2KdzEkGX4NckZK8QLDNawygdFtNCPuokbZmMU3Umy",
  "key14": "4oBrpPFfsuEbM87uT9mGvhNmNT2rh9MYVJeaB9pp5oUzeXVCEx478ZEjBN154JPyB7cbUyuP7jApjiP6r5RkJ6A8",
  "key15": "2vyY5ZyKyEVnZfPt3T7VWriiV7EQPsSQRE4cHCzmvzWbwjZabT8YioefzoXcwAJU4C81CCpRXm5qjuRBMx5U8t46",
  "key16": "YK6psFTpqEacaQ5dSbKjWDCfQQe8PkUaJjgntoYiWvps7eLUpdHW6AVjgAHhhR1g2JEerukXg1b1GKXWngjeGYX",
  "key17": "4hEt6R4aaUwyQu3RE5ZBq7GfQoZHPGyHXswM3BTBRVSXFUixNKPY1QopzWpLqSbBe618FiVGsGPpfR9URDiZDhAV",
  "key18": "4iuwMvrCuYhBLaDX849NRdBLoAj8Ku8DLNYRLT7idMxAuaMq3hKsxdrk3XomP3Q7u8NRbXM25ME41XCmouFJdivt",
  "key19": "5BfCpMFphqnYr3aeCStiuKZMnZ5oSuyxQ4Xo18KFDvH8y4gKUZ51cA8iPVzyGZ29mQ6pKwiWoaRLXkuirvhJXVmM",
  "key20": "4EWGAbLosHc6GwiVX1F5bzD9bqwzLmk5msynwGjDCDxUnVABUCRhduMhRgNd39ugKDCKcxpdhH1DSco46BAghoxQ",
  "key21": "4NKnjRJE6FHiieSH8RgtWZuvHZypqeG1moR2Fd4Jb5aGHxpKVRiP3JsCmPDRhbqbH5Y9oZM4dTgBMAchXnQA6vib",
  "key22": "5C6diK39WhAUpmuthSqwqWpnxfZbs1krDoiuZiRdYzjn78GEt83EQ2bgC2GMQ7rHa5yqi4XKCqSFT2fzz7mAF8t3",
  "key23": "YNzDrcvY33sUzTjnYtjjWqfXNYDZwvkRn8ud6vBYCFnBQd8JPcv7rdqBVFJR4nqdkuDTJxURWvXpA8qPoJ53gxW",
  "key24": "rAnE2RTcv7WgSkoDuimrirRFv4WB275JSwFg6VNsuJUKjJ5LJaLk5aMSjUddDop77oQuMKrYdMzckzrBeT2BSTj",
  "key25": "63qaNDTAUqw45HjV17gPRkhXSSfv1FNY8XbdviG7JHyeYrFEeGmxcwhSFpxxr7ufuWuB1RF3okajE115yw6SYhAB",
  "key26": "3k2E24QxUeEc1vonge7xzuGZtTRw5wvzN36M54SxcNDogrBdJCtdQJTxkZg1bQhUUhgDboCDQMSkHDaBrSoaE9Z2",
  "key27": "2sufASZAuoUVyTW4p51hp2XW2KxLcFQ6GXQZKt2nJCfnz3sC3eJQ6hBXJyzd7Qr1a3ZTcgKeXSg5mAkfF9JvtE9",
  "key28": "rLemKwgFRsme8FTSZcjiWGwUbNuAemyZfTxS5XyWMwaZDsRUCrv27h6MhVN7VFa9gXGX78JyPgQkd8SgK8wLQGR",
  "key29": "4R7f6nxquRqtHLMYr6LB7FJyWFy3nzXbR2wjRdytM1j82pf3Z2kpeLh4QgT5UWuh5p4GWngjvwdtY5Jk19PEmZKS",
  "key30": "3vk6HnnNUpfmaEJkuMtfbsQgv6oxqLKTmxJ1wkXA5XcmtdpmpTQaaxvueaSMa22pCFJjAK9hJHGAu3Pgv9ENj7ou",
  "key31": "2YYdKSexMU2HuQGvC8PXMb8xr8ciJ3ogxkigbxTZy3YBKfrAurcb4r4VrrUzhufqDaCHDQ9JCPsLCpofepsxqSNq",
  "key32": "48RSQ6HH6SKqK87vTZcEfAXj1mDqeqqCtHmwdwPgBPNxo2hUgjb7iB9gZJY4EEi14sRGG7Xv7347iEDSa2vegiWb",
  "key33": "2zVD9ogLwmhQr2vk4dc1jTz34qnFX8UV6BQzsj7L6Et5sABvYEZyMzidqi8bugXCsYcEBUKC9NyXhDH8UWpSQvAw",
  "key34": "5F7jDggdmPPgbXNJfLNd3HZ7Sg9Ws3mpcYhapVXGWjbBj6VU9o2V8YEL7Zjkt1raxEtkvTqQHBcNjqyFtYBKUH5M"
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
