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
    "5qx3ChPXMsaCygZsKdxHWjxVzFRcvrwMsac99kUjDTEupdc1MsfnCXj7FN76iLBfMB7BHbE2MuwgNJHwo8MsM6Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dXkcF9ecyCZk5wKtmYkbWWbiES8TQGEw2FBuV9gBuCDBBQPv32xNRequUht99cJB6pUHDsFotPUwuvwyMFRSArP",
  "key1": "4mvRbb7JjGfuxjbyLQWuKkdmUHj4N3z5uyTdJauCtqMaXrFUoiUsYPzfJ5p6tzj6623rYMcpeiWWUHAAHetYx2ZH",
  "key2": "2t5rUEp3Vrwfr28bFetNoZPLdNDtxF69phxoeiDCcpmwsQ8cGcKX6rcjg5poRhuKewAGdYUEHBgxE5vQVy5Rukzb",
  "key3": "5scwyQahuTuY4gZrtVYPNwofi3j98DcYVwFWD4p62WM4octj7PDL8iEcwp55UFjw9xSZfxs7va8iK1a9tkEuaAS7",
  "key4": "4QRRBqy19xc8nNen1ckuUd2ZwEt8Q3LcZz6yGtGWUYKBeLpkW5ABu7RJ5otFYWwUzCqnXwZEgW5emJWb3iDkXKJ",
  "key5": "5uyi3AHLvCbmBWu6Xy11eCFBU3yErVRf9SfpxgBMvERqh3BouGRKy9nCSqyizj8aKKBvH58Bze6LN8rMhV97tdx",
  "key6": "3s7x9X2LNpC8PpZTuCDQKXvtVXZ6nhg6f1ApmGPhkJURrqFMH8NqBzpq7cix8rSrxNQouYBbe5ptFfENUZTpqBRV",
  "key7": "4kmYfjXqKKHk2ts7rhPvGGsAtZPBzd1mcUZYY73VDW2ycBkeBLtaCjuDR6W5kGJvEf8NvK4UTvGWuvxj7UcECwmd",
  "key8": "4Y1rkQfC4xafGPo69hYarvQmDSb4AgtEXv6RRMx26qc4XhrTYBK7w1T1jdynmxFpVnLZYLUNzrdhamQ7QnwJpVC6",
  "key9": "1pzfxKTp6whbMv91437DUGJfEToPbZ5peg8qoy5TRwLhwc1kx2k1fPkd6j7bGpgC26egPK79r4pNMBXckJSat25",
  "key10": "2YcJdec9vV8Qj9W171szsa4RoG7iKUFuHXSxHVL4xr9crwAjFXr4FLBXydj62EM12fdFs5zetmgSxHD4aLaUZq2X",
  "key11": "2BLf53oiaHc9r2vuRr4hxazTSxjLeWuGG83bjVm3auKJu5WpvGp6EBPpJ9zeSPZxYzv85jiXRuR1LPPXEDV76d2v",
  "key12": "FNSCct1ZAG1r6CVfMwbASpacwmpmGrBQuJVAWfgqiQTLmfiLZdKr3Yp5pYYLo1pVMmtjiVeDTgKppNJC5RfxdAJ",
  "key13": "5k7HeDNDUmaLETHkwEn4wnVGv4Df47CZ8h2kuY9XRxQdacNpG4NbRWfAiFy4uzZmfk6KVLvmx1sYvqFNkv2BUmyf",
  "key14": "2V8tQ3iBEhTojijYWLZkdsWJw8MsyXmuqbhkQLVhx7d7PWFg4WYDjKYGu3b9dAQeEox5q5WPkLQww49LK5KyHPMD",
  "key15": "4TGyxMiQmLzbpp5jwyy7kSbA8iwJ2syEU7xSTjSzMrDtvsDpmv8gXEQg882GhE4T4WyqLzRyvCYJrnJ8QQ3j7Pw3",
  "key16": "jKFjxvMzHUviJeNLpXx4VhXHaVJs2xTwca67NoVChdGXQHf1fDKXwufiWFgi7UupSFK5m9Uj36WUmkvpwrYPbj4",
  "key17": "5ps4uUiqgMgQ71vuHXDr92Kgr6v32pd4ZCTFkDVHCbtdugiwuAXjDpLer9L8tHSn3hMYRRz9xp6XzZjZgmpPwevg",
  "key18": "5hexdpphpH6YEtJ7HEiwvzfVxVqUnSvCz9NsyxfMHgcCBhhPajdoafKsyEtyTsyAuaBYPPmGmZf1iAzvNAgXUUTm",
  "key19": "ykQwnni5V3k1TG9bJ43UmEQLdxhDKnqV6JK8xTo6cCc27iNAzBwgoMZvHHNmN6uunvA145vLLuFwxwXpsE1Zsy1",
  "key20": "2wg4EikmdnguQ5CpA5RZU17AuNxxw12GyBjYSaqexgBkfrMQzb1tPATJWbzgrGyweT4o77Zn8Xs3DBAQWnMSX5so",
  "key21": "Ln1yGhomJZ7v186pKDBw65MHNdJocRYR54aqydUnSWHAwrdP2gziKDihPN3jgwiv9fPCpEBbAwPBma7p7nEqaTk",
  "key22": "4haNygU6jDnnMm3fmsrusSDNCXWqj6F1WxoRgpaBqG689bnvm3mNHcVPwPfxsYyBFvSNHn9knP31rd3xvtRELMxS",
  "key23": "pfJPHBGJZyeDPT3ZzTAvdCCn9MiSU6914oouCGVAsq9ndDk9mLmcxXjZmPiVGoxkbjhSnNz4qSqhWqqq344U7tV",
  "key24": "sTHViiYh3X59F6r2Bwo2L9TCjDfXSX1goBTSCuoX4euh9SZPEwfbuu3VoHb2FhJQav4PXzprmQE9UM9oCauMV2r",
  "key25": "5r2eyDoj7JtNqWeLtq4huqHBrmg53u8nzsz79wQGiq9tCQ76TaCgzW5W7J4Pu9sz3SHwHiz14R3teqPeefr5JMHr",
  "key26": "58RUstn4gddRg1B1VLKFsWkbXZE7r2Syhru3AJA6Wx6LJigLbKaS5u3ZaPQJjsgNWZLsCTMEE6T75C8CyAUbDoHm"
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
