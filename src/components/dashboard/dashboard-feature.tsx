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
    "5ByCmVC47SMdoFk1K2T4RJofBwGy4JinUpcnkjoMbcPi95V5SAewGes2xuYQfXhLxqnL3RbpHeX2oGqKeP1G7MQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZxbGrqMrmMDRR8pk5U5J7bMRyj7QEqbjLrLvgrd65q5i2pSL3BZLDnsXwNfP7Z4ewyGAMvJxdirj59i4cHTP6p",
  "key1": "2Rhsy39zvnUYH59sknNWStg82pRBMmvWcXGWvWadGk8hYzHM5BZivX2v7GF7uKuoRonfjRkA3ZsveFtKC1VXatfn",
  "key2": "hzKQSDDYt471bdLjCuzgCFPNr17W97E9suRW52LHSSCpz5Jcg7kJP6vZCqswcnpzgqeVLVfJ7BV9HBFsWcTyfie",
  "key3": "8e2zu2pCR8eadn4QwtUhewbrgU7tB1iwHDUPmKE1UUBAh1AGbRqT13WpXXihWKH5G8U7cm8uCp9rFxrqhc2ibNa",
  "key4": "5ShSRRKCd8q479hBvX69A6FmrZ7Dcd5azxtGba3AapYRgpfiECifhjXXTpahdbt1PyHtHH9JMEEQYf8shPpayZiZ",
  "key5": "4PTzyF7dPsRR1L7Z1rt9AhTWABjo2i5RjqxfT9cCWGaH6cTqczh1e2G1fC5Z79K1iGXp9RZ4PAzdm5GWAwe2yW7r",
  "key6": "5CUjU2gM9GT6XbghjGCGt3Vy1wNwGE1PqWrRo5XcJgJpCcCcf3Jy67HbPP6jtDzHszqsiUrDrqZWooNWKM27H66M",
  "key7": "2eHyizghtMDq9CcbybPXduCzM3do257sdYCYQ7xwr5hfgK84iC33qnyU65sMiH6XHyfnndcUL8pgcbb2j9rsZwMa",
  "key8": "4qpuqtrupJVvandSwsh8P3z3Uc94H5dGhFcjaWnk9sb8wiG7fqXGiWGCAKG7gfBqqRmpjJfzgVy9xNgWrLGrojGb",
  "key9": "36vqGFNvz95d9jD2cLErCr12XxCSD3TBPMfXkNaz8fVLQ9K2KcFMvnLx7ybUwwQxcbLRokoVkrqFnKffx1C4sDnY",
  "key10": "fY8ZH7awVWmxoU9wrX9BHcv6TV2Q7atjUsPgZQfJjsxdLk4cVR1a9UMz1m6ZgoY7zFFA54mzsWz9d6ZzK4XCVgp",
  "key11": "4nhUSGQ2tZNSusDN4Xka2q21Ywrgjh1kzMaSCbGgtRun3ShuoY6zgBpkaCFcQy6nwqexqMMctsRUNNA3Yir6gAKP",
  "key12": "4VYvcxiEdg6rFVMfiWSXtC2LiL6a8ro7tAnxnrRKaGZS9MXKugMTidj194ChUEFTvHXFd4qgPscZ4LNNtgpM554L",
  "key13": "BRpbA6mZ17HbATT6ZwKx1wfqLkDasYemKs9ihYerAVfTbcNicJkM4hVLDzD4FyNATErLu6TEVutKesssinumnxC",
  "key14": "4LEkjRBqVvdzbqfH8vJ6QUyPoitbL2peZ8eh7Gp6ADz9zZ1kCgm74DT2dJ6pYoLAYbxTxTkQxF2bxPyLgWnZhvwo",
  "key15": "L873aTZUCdsgVyVj5qj34uN4Y52m24KgMwufCQPcEJjtg6rbJW2F4Mqe7RHFPhx7ny8Thfs3jB3YBiNNfmYmVYW",
  "key16": "3yqZVgtuBdhfjajtVmGu3KgRCBgXveG6wJycKq4JmhdnwfrRdmPfUsemCtfs3VWKrnfAki54XkpcqZhEDaL2nmAk",
  "key17": "2GswZ6BovwjTFDs2C3EhUtyEy1h5725VpSbcHMG1BuEDDmRckvS2wJPeeB769TpMnBFrgFBGgNA5bP9GWZvWyxwU",
  "key18": "2CsmtQVbibHwbxrfwRWfzQwRUnwuZTFb6mz852khhkYjKgC8bWK5WCtjU2pYbj2CMuCqUAzQjTXNUq6wqEsTrpis",
  "key19": "59uBFK1vYWqPvZr1c1M3iQSnixKgJa7pgmprzYJELUSLSFRtA85edo1VZ2N2SwgB5rmybhRGS5Dih8jtpKtkqr33",
  "key20": "2AyShqWpLfWfVCHCENiGes1uMo141j2PWQgpqzrjhLnSvkZi6d2JUTgMKYGYW1VXt84u6kw4o4G6RxseaK3VDdbc",
  "key21": "48BQVFnBiwLyfLD2hVC1Pdi4eCHQSF7mibCLxiG6uQWK7nv5dfbxuyWYLchB1fsxCei7bcMHSutBjeVQUsHwssER",
  "key22": "5z32ypwmKjFU2PHkzcjeAPLiZhCbxpsdQib2jAZ63NK4LWeCh9JXuYgRMAGDfEVHCjChghHxyGTfQTURcfBif9AR",
  "key23": "5WUFAdp9NgxCstXpjgWY1ptMatQRFuEqXvBXtPsVhbVw1xrY8BxkVMtUS5J1guXix17sfKHiCE7biLGgwgrpdE4n",
  "key24": "5K3j3B9HwgtKrbZXLmKqtX56SJTfJKLo78K4FQgwjDhEmeWuuMEWgu1RgNd9VhWcTaG9U9XmPK3Y51U9FboRGPXs"
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
