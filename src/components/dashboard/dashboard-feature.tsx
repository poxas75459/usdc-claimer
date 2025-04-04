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
    "2ggpL3mVUwzQecwjpGFCoDNvLWmKGTJ95qbmc5tcPHY2d4LJK2GPzw487Mx8xv7EJxdNkvrL7vVH77YGryaK1vX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Wg8svHaS3WzHT11xT2bWFeGW56zfcAMKeq2VuydsZZRPVxv4hZGQBewBqeBVsvc6cADvAQ8C5wjCLQLfqhup1A",
  "key1": "btYWJSFm2YPm1NqGtN9gaBwC5nMb4xw91uqmwMZJhGosSaQtTsdPXmUGujq4TJSnCPTnm93Q3xoYUMExMfFcJBR",
  "key2": "HJfKbX8vxni6BAAW6CKzv1BW8c8DRY8mMNdD8uEibQnhCVB8majbHwTFECuyDAgWph5QrKNCyzi1dqhv5x2KfAD",
  "key3": "5aoj8AJ9q4MpEXXE4ZUh8rNu24qLe64TgmMgufwWwVySJbrvhRmGbzh5is5DXonXiSLW5p27usLxJiKmoxgUnBrw",
  "key4": "4FPuAsQjvNdeVNaE9f43XgCngBvgNiB94ub9VjtdX4WbBt13VtGe43DDdCVHstTXfe4Z9q6EfxPTsQnow2JFBrZE",
  "key5": "5L6GEBshL6dteAzJ69XnWhEi4FKhKN3vgzTf9wf5aNJQEZEKLNaYGfwDrTZopKQkaw2U5Jnuikm196VGo193xefE",
  "key6": "3PvwmnngRYjYX7akeGB9SZK5UUbrUHDQLDvcK3PAtFB1we6hsqzseNkzTAUeetxnMuUWH1JCAYztBn4syPNFsdAH",
  "key7": "5L4K6smXwa1cNA3SqWm8p6AfQySPvDQu4DiPPYrPyMeY82basvc6TjmFUYfVKSMyjZJ7YCkMSLMpmUeSFF9ZemEJ",
  "key8": "66U4mp7JCKdwvYVHLtRNfNkB3LEeFgfq9a1VHuPsabBA1fr5nH2LT8UCkfRSBCoCKR4MdcuweQnqrbZYJ792ALK7",
  "key9": "52UacsxPSx1FtU9AAbn6RRsdPvYzEtDwASrrizLkr2LaUgm75td7DDRZuWi4a4VVthQuVv5fRADG5EvbiX3RsunE",
  "key10": "41Vkop8Sq5YonSvk4bwc8ttVrzEkLgeghRtJfWtrEdpQJiS6RCqufnhwzKi9QsGb2XBfFuYXJ2LiiSHiz7UeKM6Q",
  "key11": "3dTuFNTNF4odcohRiDJNizY6e475eppyMv1iKcmkhsCBqh3hC8GyQNNEenepJSTtosLp5mR6Sp9kvTkt8nFavbkT",
  "key12": "nnhANVjEmgQQa3dPQr9SeVk8YGpqEMqPECg2gXFZKxx9UYU7MboneXmkKJqLP3LbPAYvAJtvvQkK1psXSPtK959",
  "key13": "p5xgr14Yv2awHhEu6ugBnm4qyzpEPUaTAMiiqA8aXsTgMZbJKU9PLd51XSiZ5mXdeEhnr9TK9b9ZB5daGpExnyL",
  "key14": "4pW1hzmsukNh3oMVLBKCWNSCaY2rPwNNhS4iXMmyaNnJ3Sg9Uboh66Tyx51NDsRACCQVB8YKbJHLEUpUT6i1b3jF",
  "key15": "48UbkNDyxXaeSrZ29P6fqLgHXUSjYT5RCVhLnGDDs4nFvDsPgEqgykku7FL5c6HGRxsRMe9j9hkygFGfSNdnLLGm",
  "key16": "QZUnkYDPsrZH2qb4BbAajtRDuzThoE1PR8jCVp3CWcyA1zeeWZHoJ8R9R9Z8zp1jLYhYMqT9B24E9MjkFdvD19i",
  "key17": "Zss4EhMDzJdHjSQ2mahMkYmQSBXyJGNq6UXzizLWhYBt6DSZRDKoZcJTrofX3ZBi1JJFXnk63vREwFF8HBg3j2F",
  "key18": "3mJQp6BSbcyisUs6oMN3qe6khdoYe2mgi26z6LCFTutpDxezxrGWsDL4yc8GswBZya8fGec6hq62bzddMetQtmWw",
  "key19": "1AWWtJAVCbVNCVJ5b1QyAG8qTTq2vXpNg8B3VHuwZzfHK9tGc56zwn4m28yBdT47WGSyFpmZd13L7dza1asdPz2",
  "key20": "3zNtHAS9ux29DsEtQbu8wb6xEVDtQuZvX3u8rFjJAcJUeTpZa2jH6BBj3HJNpDzTENgcj4gqkT4ULzayK9n5SRTu",
  "key21": "2XZACt5ZG89ox56bm4TTLFfgBnxJLv3EB4LMZgxq2kjCA6rNgu8oa2xtSHtGHDcWw9imyanqShsamgjvQcVNAqsr",
  "key22": "2qbDQxpnyEqGMehtzMX7epRv4jo1TtLAvUK59gWbFGv6HxcsBnFBTWWdpN5eAf6ZESvGAity7Mhugw6tPGSRqaWz",
  "key23": "4RfVkhYVXsbks6ajtqogzu46p3Jfu5ioo66mVFH2BRyfFiUi3qUvY86K33ckFRNjvfrSrjPtD5aLSjkw81XbVmGD",
  "key24": "3CLaVMdYLAVhfPHqujXB5brvYjP22S7FJ4zBUKnbn5eykbUoRcjAtz3V1GCs3fLAVEicnsAeYsfeB8DyWevdBrra",
  "key25": "42G52gc8JpiW6tWfoKXbeTuzXTvJTBXiqdZnZBYMKrZNxLR6fMegZFWX342XZ5Yp7fwDAjDZmwtBMH6p9HAMwDw6",
  "key26": "ZUeZqCQgnNifMyTiaDZ2bEfHo3N1orkCqssbk84HiinPbkmLNVYLLnAEALsAagqCkD7rcmVsjzpea69V4r94r57",
  "key27": "435SwJVjvUB9MfHEyWzsmAsR24QeNTaGRfrUXtULSeNyTk4wA619zURNZN6vqmHQE664eAmnBbkCwipfiRiYoWaH",
  "key28": "GKBeApHpZTxBaoP9YXJdmEUKiVNiRF4E4Kt9qm9i1UNmXdMnsKHK9UHhqy7izBWjEv9aktN65cYo3imv9TJUQRU",
  "key29": "5ggGi1U6EXfntYXRZQU7EqaGJhZmaAPGcPEKsNszpPFSkzonxH5ks3pBGANyFCukbncLFbYg8KtTE5uRn1boRDSx",
  "key30": "61kceWt5EVwafkdCxEorcCDQQvYGDax11UxtnWSruvjoVkwaSi2snCiRz4u4C5vSmRDLjHpkCgBX59QcnXPFybBt"
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
