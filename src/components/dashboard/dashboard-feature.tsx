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
    "39YaowmQrXMEFTuNhFPijSB6m9LSWtCNCaRzk2azSZwFthF2qvob3WdP7CMwwxMYGcGVPuwBFG66zRAPdJEqZaJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9ujwfi2a5apvaWm9gWams53wMJ3r2YBYqjpttYwqFmmVsNm2mCiSFW7ZZTLJG3J46nNM5sePE4uhWzhNGz3qS1",
  "key1": "46vFTmxN4GGS2swzcsYa1fwFupJijYAieQgGtR2zpfsaQiQg5rFmdSHeowhiVZoR1ecu4o1bC7Y4DmAfUTyKwNdg",
  "key2": "RHgXDFhWqtmhpBiz3sUCwGGuSx1SCT9TZTBu9YD7AavhgiSwsTrNcVvkJgv6iEMkxNdbW5jjb318qggmSZiuc5E",
  "key3": "5eMcxjS1FVSS6rAjubBNoMLjLLfpyXjEPLH5DxtoSDhw7ja862yXuPpMa4KycgAXv35DnWReWvTqBbPCF282juML",
  "key4": "KYzbPs4rvHhPhXvHc6iGTkS1RSsV2nWZ11rfGkWrEjhZnVH6rYBjXmo8BX4esmHR3AQ1odzvAdmzfMi2zyMoWsA",
  "key5": "5UmEX9eLZ5zLtZTStpcLBgq2mYpuoZXS9GavMV1NYnXH6m9zgbvh4Q1fAZTs394eUwsa4nmZbdENUzVrSb53iKc5",
  "key6": "2MUapRURsQfw8gRYWN7FSWTYNarWSqKxnc3DXG8smMWUEUNV2RQ1tbyMR5JzhGrtivTgu7fV6SRBavMuwbxVY4KU",
  "key7": "5dg19EhEBH1kzmaP7XGib9ETZY3eVJu4qB53GQGTfw81aEqYKHbdRVUWadEKC5qQa2TrgHtiHP2Gd4P3mx2oJbHS",
  "key8": "3THaerxAsPGvm9VbUCAykoWDaaunUbNRnQoVtwhqfAAmtYdvuD7TfJQqpoLQ1P2p9r9HZiXe7eYyEHpfH88ycMSv",
  "key9": "htU9aVm2emjgREYGtcjmAzGeaGekQEAHuScSdG6Lo5vCGnAyuUuJVpxC8tsrPofMMYcGZDxyPrfh2AF9bteTYpu",
  "key10": "ZRz93Wb4irTmwSkSraC3hTvPomjQ15J3zAwM2C6MuZBfM9MJCBSJPJj7oTrgDSxKAVdmA9dih7VexNjjjdbhHpV",
  "key11": "4SKed4qr38nR8D4RQAuKqAYVHg5rSDfs9RscjeqPKxoid2t6svY6gBjSTfbzzJZFpSGhGkujRp9zCVbT4RZUVumQ",
  "key12": "3F6Shh85FQqyPVpe6VGVfA1WHEKLWTokaHAHJcpP3wm1bUDLCnkYCs2NnSf4Mj1C82TQrU5LyPy4P9WqqBuFr4uc",
  "key13": "4tFodfZzjtypwoCtrPd2sb9znSwPAvngGVEYw2WSJKNrjwNq6BC6roN5saAZ1nFqvXunkDeguq9uCnHDXRqazKLp",
  "key14": "2eDBgfk2tahiW3i1ufg2P5Jkxi1beyVNYhmFCH5uruuekqCujsF7rPmkmECV9Krvj4nnVWQgs1iJK8qojS68285V",
  "key15": "49jMx8WuPkVuQXnc4So2M4zcB9B8ZgzctGH8JW6tee3SiNBLxLLhtXmxMN6kzwvQSEuWyX4VLUGC53tFXPoAUNJX",
  "key16": "5nomJAK726GTJVxhbkkStgfPceL4zhCigURePweM7uGY6Fdvx9j8QK8ndssD7yUGmaAtPhq44JRqiVAvahADEg5V",
  "key17": "2sz7Z5U58UQxDy9xafvt4DmEvS482mfo2TibCQAcGjUzdFy2RCoAeLpdxtHhPMmuERjmUfGey7ud93xByL5zyups",
  "key18": "5fVG6TaimT7zsgVdwnj8Sa95yQ7YttnFeYuja3hqUM1UxtLXcFV9UgsXC7ijQXzMhwNVwzZNtu8zuPe5JrEEVJrS",
  "key19": "5TcNhFSyoQRMWjc3wFCE8E7zxNWPx6toG9pVtuCfDoe7iME9uRbv6br7ZMyJKvo4fUDGayNBQY1fJyy6nGp5pBb",
  "key20": "2y6HeMTgYTSLPkf4gDtkf1udka85muhWZQiStbzKcKyNpEkexKBuYRGSPkSjgJXLqPHjv2dxwz1mUfAG18cUnPew",
  "key21": "3h9qPMn2BcWCym6cgWkk5bV3smznf9DoJ616HYfqrT1c3Tp3o74d53YzGwVJRgAsHJLpQZ2nQc9qbSTqTcvaBoTF",
  "key22": "2yHSLesKdinbSqmXohoMhxYv38HfxfXn8bpTZediGQR8rdvWuG2cUGr6FA2YSnbRjS4mYL7g8VVq5VQydVSmV4v1",
  "key23": "21yWbPjHy75p7fRcV91dZpccDrivcFVmsAqn6koddeN6AXbf6ZofBr9jDrVtBfRsjZ36MFnHxVHAd6ooiAN9ghm4",
  "key24": "8B4XCWpt6yAMuDUDWXxYdG66AiutCAqNdd7WpvmiZJHXgqhLQzAHhKwwPJZtwyVAqWo8QdUb4TvaHPEP4bs43WB",
  "key25": "3m6Gpkm8anop9qoSPZxeWaWixjLWXF5yc34ACbLHSURt5LKyDzhdyzJjjdZeyhtMorLfPyYpsMug8odZKv7pNqUy",
  "key26": "Zuehc6hsg2yeJDpQWPHYEmjG5pFBqRFgaBvDu3PC7wEjGhBystkwUrMkx2M4XXTE5RnumnoszfCDw871BLJAJMT",
  "key27": "5TQgmibAzWTmdfBKVZZN8DsWrHAmEA61SWbTP8jryEp9LVzhGTXtw2pX4NEG9iUCibVezY3eBR2eVmCZJ7xGZsh1",
  "key28": "32u27vfJaHuSH9SMjuncn79RA9yFAHEJ9yi7SKSoY2hBxiRH9e3hkqxNKZ9tUfo5waWQKqcZFzCrEpshxYK3gA6V",
  "key29": "5p4Ljgt2Npg62cZCoR4a5mEi6FmGY2k95Zud7bLBy6Tn4XCd3GbAHUAuqMyJKkwTHf9TjiKnfDCTdc9rZsq8xdAr"
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
