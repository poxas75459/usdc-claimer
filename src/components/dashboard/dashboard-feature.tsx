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
    "2rLFuqEibXcz3RCLYyXT7S5Y89RJmUTz2aML43gPyqJDAcGTXZ3h8UJQZXDD8fkWQCg93qSBsDEuzJbMkNa7RKXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FDhHi6f29Jm56ZE6hqyCLHMmmJSxsK1WAGs36rcJMM8cEaweMKQeXJ54feqnAZ1LQq2PpLiqcpyBumpi2oPj9TN",
  "key1": "4jiaMtE8TdPu4D4SpV47SpLUEBCKTttfPxqYhafELdWnZW8jzHxKsR7jmwxyg5brWLgRqv4z2aZs2vNjrcMurkBM",
  "key2": "qF6QHmYReYvC3Fqei8SmqZDoFnDXVPLaGAMuvaFtfSTjAK5rohAvEmG3FTdM66xFBxPaDK68GU9vhMv14fRKQ4P",
  "key3": "54VqNf7j1onB4sQ88b8kvMmk4PeZo8z9xHnSw3qoS2FXbiFvtMLpvnTMrB9h7HtVUYkBiWiVtT8rsyEALDUhmkhD",
  "key4": "5PYgkpmRqcTgft8MJscCzwEeGg1T3AmW5YyQZ9FjAx1jM9yWzTsyZzzE9gkNC6AUuSqVvLA6xzznsthMPAK68mtk",
  "key5": "3W4RGfH7nKtprpy7Lhetgot3D791eQ5oxbHewdxFfJpE4cQHz5zTYHkeqBqkbGn2HW5CjQvoCWdfevL2YoBsPoyX",
  "key6": "4RTwHoViuoKerSMkydEZA9c7xAH37DL2DFgjAkVEFCgbM3vqK6ndHh6d1QQg3t53b5H53NfpxYJ2RNLbS4Dr4jtX",
  "key7": "4zVbee6riB3LS32MsyWuhmiMy2iCut8Q98E9xb3EfRruAPgVWkDruaxsYHJz8RhUtToJKE2xfCvecHrWdenps6Cn",
  "key8": "49trdeL59x78QPtLgxhg6sZW8uZfCzvicRJkZ96uxYEMAE6XN2VTEDzim9tNcPckEeNESgn9WX8NxRN3uK7dcmqE",
  "key9": "kogrWYNe3iiLDtvHj3eRjBUzNY2KGsguqazZ44qMXUVAYjoNXrJJjKyMMjJh77Zg8WHDdKiU9d5yG9Ujpt9wTV2",
  "key10": "4MJcNatJGFGfeqkT59B4VupE4719B6KLRHGef7yqEvKBfSQbiHG9hrwqYM9ADXjpD969vkdbobmJppKK4xZQTSqu",
  "key11": "4yfJPh5khf8h4FuaMumgySLEq9TtpxnWJ3ogAt8eyaL6Lm2YfnhD4urQgP7TuCJGxNcqWLa7c6VW8ejKFvSoxZqS",
  "key12": "4kug1Ujq7fTRtf8fqUiuALx8EcuH6VJiudkLZHkuAEFjdV3QHJp3gzPznJAvrNwSNMdwjAxqZZkdnfEPU2CMqDQB",
  "key13": "23PQ4CRNtNKNcCZb65kBWcBuxBYgZXveAnaaz8ZyR9AXfEy34iJmyNR6NHvTehoNqDU61yLeaoDjwJ16z1gaScyP",
  "key14": "23geGFLdpFGn2yMVokGNxRdwUBeLPcop6GC9G6Wzjvf8GKDFNHyv547ax9tAykHZYLwPakS3sKoLcYTu1oMfZayB",
  "key15": "485Ty4SKbEQNhDsta2SnNcn2JT7LKEApMVyb1QTjJmpFqpQubBsEWLGEFfVMgQXvJ3JQRF2BTS4HJU3ucBawyy6V",
  "key16": "3BtBHrpDBC2RDrPHNLrj5DZnww4M6BwwTNWHpcwpciERteB4MLuaEPtyQr38XzDLEXHv1yUek7Fo18dkP647Mdfb",
  "key17": "5tpn6DoKw7hDiY8A765B35TQu82TtByP7dNvYTQ64UgiUYzbCmrFFrxPTGDsYJCGUWHo9ZLBqSC835i3vKXSNhYv",
  "key18": "3bdMCAkx9aadNu4kPmCvjM7YdWxeZWJcTG6maNGHFxNb3ctmRA2Ynztyu3uzzrUunHfSZFz3NDzVBGoYbfwHw8LG",
  "key19": "3xnwNAjX7yJgwXj7keUtJ73EesQNRAS7TAFRuxX6cNtxLPpjchRvg7LPAuDhtWstAEw2XHMvp8uMCbuGgQX4677o",
  "key20": "2Zb4vkVfTyFP422qtq38QJQ5ecgs7i9TXRCi336Yhv5bZQ4dVRcubbyPPAm2pCY6rAhkgAEunBcsNeswzbavJUk7",
  "key21": "3ioRMzYesBJSQEvxunwRbP8HGAbBTXUhACGVEesBzcdS8EyyjWkRY7RiCLJpbeTHXCu6kwxkVCqef43UyTEidRBD",
  "key22": "VRqxonS6Swcc6ry2U24NReD7NrCufkU2CwDMMFhd7SVbtZJnuXb96AaDEsEoJmVbqa6UcyoMLFMAwPjhSXL8XKP",
  "key23": "3dYvfd2MWNQvJhHFcLoG82DqBSMYsSfbK4RWgr13S82rh9mMVWJLCyqVLJgTWi3sxPG3kqXxfnGRCL5rXksyqvSM",
  "key24": "4zA5SEtSYwcYzLLYhzqhcYRnfxBoB3Rtyt7uBKFFV6yXELHJStYsDFCuduaCDrmB7qiuxBMoKoKQdSnjLbdWtoe7",
  "key25": "2HhP4r6PEpThpvV9HiFdgkhhk6ghwno44AJ3cRuU2Tt8KvKCYY3zNSz6kw8tVnBj5j15JxXyvYaYw2at9hrpMDiE",
  "key26": "8uavS4rsxLhmQa5gBb4sHGS2Bk1rBcs1GDKToqAsJ1wLhABFkSf7fZ3Cf6VtvjDUgs7uXVDoj5AtJG8CNgKGZ8j",
  "key27": "4XZ6Gmjg1d7ismC2P15Bru9BDj5jxZSKxaMdRNiT1hTKB21M44aCdwHjpkApfDnntMzHeh9Qk4PZijSZLWUHenoZ",
  "key28": "5UmbwbgaggEJP1BGMLGrihQcWwQCqWY6CbZKA9V4BL747egmr9ErnyWBM8JG9mBxMT4BohpknnuexgjNtRypykxi",
  "key29": "4XTH9YkH1AmkksvFUNfb9rjfcCWohdxRqmQ5BmLruMKhBNBDBbqWfBNEdQtY1QShwpk9D2xfkH4JdHt5a6gVeL52",
  "key30": "5M8S415gBmopRkPYcMH3n5N2o2ux737EAXZgMJabxo2BTUdR4V5fydprpYpQFQLPoP6XGMt2y43uAUVZdQ42Tv7v",
  "key31": "5Dji3Ug326zuKZAf1fNo6m65TrHeLgcGxwYEKtoiHCt3yt932bmy9pQDdDSek6ixP1vABacxCogFjxE6EqHZGLiX"
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
