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
    "xytbzBhYxmhBerv8cJ94rrRuKP6mjongJPZnswTe4HivfnsFQbtcWae3qmkgEicK9B4YypDiQoyj12ksx3uXd3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4ou3EW3Zp38ACiF3iRVve7e5M4VW9e6DLdcthfcYMmKtdNUeCoTCzhmJKdUQnPXt6b4aCSDWakkTrHEmHQ18By",
  "key1": "ZyBDcnCQefowsd9sAMBnTQxguT44FcRWA8Yhs53b91jmvxxEhTa9DqHJ3Tv3A5D2tsTtLmuQBYy4GnTqukXCgrp",
  "key2": "5MHb6evQEmtyYtiLiLCENY2TBwXtqC7QW7ZBnLwvy2AY7u8vMfWVsqY4i8ACn1buUXssMS2SnDWEo9HgrJ7e8ep8",
  "key3": "5CbsvcjL8UCFqp2NUqpoTxTBFNojeQBzAmS4Re5f3VviJZaGQPYhCXozWEpTeMzkxeL4rubhzx6S9dK6HRFbMpAf",
  "key4": "ZYg8mpsgyQz6dmUkXoWrkhEBdZhaGBEt4kUN75zrCp7aUGWjetJsgc8WWnUWmZdirM9gDpL8XEpLBpG1W6CmX6K",
  "key5": "46VMknd2R3XcsYsSDru2PD1seUU9aWJUXvE4uVm8T2DuC4y1edGKukRGuKDpSNrJ8LcpUjCbEn33n5JvfJia67Ut",
  "key6": "5LvUuciW6YfrGk71BEnhWif7kHoWDFc9FEhpi3swEyfr29HGT1Us2zY1gjs45maXTFMg7oSSqGBm7q1bJptNJnTo",
  "key7": "5KhorEH5gs2BgCX7WLioctWaKFmuDEfe9f3jzo1KHZBmyGkUWmowmYEeS2V8hoNLjr22zywCXKynb9FzTDs1VJA5",
  "key8": "4qG4V5R4Vdx1xe6HdmWumxB58p7A8n3kCjW6QQM8Wi78djydXTSs9rtwho9KQ4UCrmL1Crb9tGLND4eWQdDFwarj",
  "key9": "5qfVyR8DbVjNjVuyvyifiF9hSpdxnqfMg3iNSQnT4vMXrK9YZoEF9aCEToJJbBKWk6sLNPQRPYVWzrhR23ByLcfu",
  "key10": "2AUcWF9NTSfN4mmGWF9JpK2V1xhEjvmFZXStUxfDeerKfBx3VWGCivDwKCyYMpF5v1dk3fpkQE2qmLwWfn2pi9E5",
  "key11": "471fcFg2EnqkMTMz8ohZMYYkQzG8B4wYMVKbB3e3aajQH53JwVSuqRS5TMCcewotC7gsnbr6ugaEAXo6hSX8dCHt",
  "key12": "5St3VhjyznSpSFodFcWdBj5gtBeEuhdtN8XKoyKgESVfHdSsYYE51SPP689dAs37JZynJ27hRL5zZXDDfNFtCxU2",
  "key13": "2QwsgKghDj7FDf8mXYtVXijaLKadH4SMnDvBo8ffEbNBYabLp3AtPczBiMtDbuMnM2HHBrBmzj1phdwZ5k1RXfQE",
  "key14": "2xrFnqQYES6PNPPh3pC3Mom4RN7Wib4Tkui8gRJMM1osTqPBPEhBMNmY2hLFwC147J6XJAtUZSohNomzySQ1tGEz",
  "key15": "3zSYd9TNz9CLPJ3yt1wiM8f5usjJxv88QXEZ6Xysp59jQvdskz6H3BtoTRFWMDxuKFY52PFPT2kMBJTcPPB6RBC3",
  "key16": "5ztRKXc5h8KW9EftMUp7zHBBNcN468yUt6D7diiNVLcbgUBZpAiWWUwsH9uUWWArsB3ME4XNzBiQ4kidrw6ZV8VV",
  "key17": "4FHiXwJs341qW4BcDCtqoF3rwamztCfcq33wA6J39RGhEEd84BTaomaDCs9ZhF78Ko1bSYbDzNN1L6NVrFevT7Ry",
  "key18": "5kM8SAHFxdGC5meXL4T7DB8DxSZu76Fu3ueVVHivobwYir9UK1gT1jcK1yv5bYAcwcgs9Pad4Q92abWbeL9i16tK",
  "key19": "2zWHtWMYAjDEmXfuDskrsjcPF3Dw5SRCr2rUHxb3rFNb6mhkB9K933NweHdGsSqfYEwx2WBCmPQ9fhMnudrWBN1S",
  "key20": "3sXg37hCmKxD8x7XWqfc8HxaLXQXcAhyKm8VkFB7QacBKQEZxHYPPhoHrCtyybfno4AHxMMqVoFSsimxktyKk27U",
  "key21": "2VQz2adr3onuB7vfrgy6a5ftCoz396HMoKECHghDn8wEVddi8vwwg79Spbqyybk38cZcBWXDpbDTW6rfzKo7X3MB",
  "key22": "2oa893xTeFp9xNbnX8QdLYeHb8BvRrhuWbf2TL3L4riFzWPDQ2eymvDSNc85bdiZeVqRUBYs1qYtZD73F7i13BWF",
  "key23": "4yRiahJNohNZVyAXpiWxjSHAErFMv7S7Z7Cux8ifCa3CBF7p2UWXASS7XohwbhUyn5YDRPgVAikA3dGcgzKskKtZ",
  "key24": "31Jxm8JzsHV2dm2U7fGZhqNkb9r4XkaLY38TdoLhuafCn7Vg6pkyai6XAKCscpYLTPRAPxTwA6cykzzogrTJyATb",
  "key25": "2nbLbNC8p5ypKTHxakUzxZcASaK5zKD6K2qenobqhBSkQAgPRHamyybmsPLuppyaTQbfjDfB1NXLsJrks1XhAMXx",
  "key26": "5FunPXCZusgTk8dRTaTZpYAnSam1D38rCp1iSGdQcBqbziwx99PubfAGhTzjE83fr1HXScFAtcBUPH896kfT4hqo",
  "key27": "c3orAqqxS91VFuaCrt7TLZwBRXDrMXcJQLJTMskGMwrgd4T8sarjGe13YDXiKohL2xzNpMLm6SQcfs8j4srDxct",
  "key28": "2fnqvr96S9TRcJzKHUTBpfcKCTVGwqHhBFTLsDeSPaeTn24Nc2kJRN9HmanZvej3URxWQ2pM8eNk7JSrwCwexgEV",
  "key29": "4yVf4BVmc4JxviGAUrkW3VMGDamGuvTzBhPYjQEqfNjWBEgok4WPXsE8GvY6EDUVy64GJ4MYe8J1XbbLhh2Xbew9"
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
