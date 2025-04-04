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
    "3fNsYBeMFtyi6xdGMo8mkc7hUbQtSaqchvyfPmj7DZN8LFsen2TySVzjBVMEFwcneNiEtA26TCFYQ5BjzZkRzHdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNe1HA4QF2FLqVyLzAw86ep1uybekD8yB3BDCJ4aimiacgaVVwCDHHB4tB3jJX8mLpVFfScgghvAbTPjxG6vNqg",
  "key1": "5ERC1de7ks5wWq41vFK3suTbWXB4XLcZMzDtqYSh1L9wpXx7iRdNw6MCCeT6xaNU4DRVWKQJFsNhtMjD4cpXGv6W",
  "key2": "2uQJzaN8qv2MnULxGTD5f4SWEFPx3jXUA5HtKPDiU6sRW8pKZPeUTesZT42UZeKS84aRaweQhwaPTo1U5vvCRK9m",
  "key3": "2oDKpVLFNSGeVkQ8qVRxoPEy5iifcPd8ZxGyF3uWwUmGVt6CzAGR35qUsfmUV6CqSWyvU4VxMtnMgqSDevF6thbD",
  "key4": "2URXL7drfV4UCh4N5syPofNaVShge2MrfuePz9piHpwJYtnWBx75M8ckhSQyJJS1nRMAtKKDYmcJ3GiC9d7LPXkc",
  "key5": "yuavgnv5nsLwDwJMo928igFE3vbGCnFqhTWVNEb1PnTU5fhNFdmgSEJjp9iWwHtnMpxWMgrLLv5CypV6GpGMZzP",
  "key6": "3DFefBTGioQ7V4YjVVP4pqXwzN6KB8HrhVTGTLnG4y146669knsq1ZTaUy5SxF5ag54rjYQJ1CFEMKADGjQjdKzG",
  "key7": "exCFssuA7UXu13tyGuvHozFKTrQjveA1RewHWQKfCdchxJM9n6Eix4QNm8CCcFjNXx6owxRsNH2yrnvmHCYC6Kt",
  "key8": "3dtHPwG9HjYhDQxkdwSVMAbifPGfzbc9kjZuABySLZabAx6jy3pjpn9xZYigwtSP27h4J8TYLvTxG5JLkiwQiH8E",
  "key9": "2SK1WqEqGvCStgbtdbQ6psqhfzwj57jbUvhUEs1iWyEAZtrym7cVo7tYucELWvdytJC1rmuoz4zKphQkjkQwkFSU",
  "key10": "51B6caZvKXUwNUZG8TrJCkibM7UooFqFgSXcqhadmJHWCSJd622x9ng4aNAEJvGjCfZaNp7cvhmuFf8VmHtANuVq",
  "key11": "3m7fkzsR4WBfXSxWmvyvFZyhGvP9ucPTy8x5wteokFpzdAfQuDxZZyoFmVdraKxeZQgEfWm1QMACQFBkasPUWVzo",
  "key12": "3z5JvHuUEGkcNsSRUJcL4AWyqMSfpMhYrq44rcdNdE2FNgQYeT8L2AZVVzgCe7vkakRkRtVe7m61c3my2QzWvMVo",
  "key13": "2iUV5fBVgw3J8HQXruRS5hNknbxUbD5vc8PkM1rG7b745mDiVqnBA8diVxbat9UvU9QGfCKhRZ84Rgb4fTtV75Yg",
  "key14": "46yCZwxMLvhTTJzPPPGYXQ6bX5D1CxVEZn9UCjrUq9iURtniVVMYKfoSK42FmTfcpiRLW5cuxYhQenzEwGGLD5rs",
  "key15": "5ZtHsUqdWMVgayNw3ANN9gvRpfZ4KVHUG7iXAsYUEcf7tA4EpDxb7QPwniXtLZTMqa7upnrD45qr9ESo91xvaU4a",
  "key16": "3yadT3qKw8PrytaVyUougmerxeEaL4ioW8PCruaFB6y2gXo3rHvonvDeEy18daY1XNyNsBXVNt3UwaTBmv1T7ckF",
  "key17": "4Y1imVY8wxuwV2VSCb6eURFa8pFcatTnD5F6QCaA9KJKZz322oVAPD2Df5SqKNzqTBNqj36Zet93ejENoWEVRJHj",
  "key18": "cmND36fW28SBMiAYBJaoc54wxxqYdeWeLdwz6SMeCAMqTcQzeSZDZdDLfGZNAwWqnUuUq3xc3NA1THmuauZFksC",
  "key19": "5c2VCfcoDrPFiwy1Qa5a2FFv82reqCpKQKGdAxnkwVYusGerwbUZvaXm222jKVNWyoJennUJSnyMUmUS7E3dZrJK",
  "key20": "3ihN5xnxdHtvYtYzR7DPT8xXpTr7Za2hGrNz8j3tPdj8vNQqDPr7V4EVYPuYk55ZdxrDdbbDTHrHp42pYVGwKorc",
  "key21": "3Hijafdgp2S1wPdXgA4CAKsBu7vh1fbS9MbGT2VMGbrqkkez72dY68EGDvmtcPKgV3197ARNyGiFMKAd1hnDQfdU",
  "key22": "5Pbgko27tZuPxUG5eCGTYcZXwDQyygxXa7BchVPThYgoVrHxR7fGEJxHFu16aZRFqmnd8iRm4jkvc4C9VR8ArBwb",
  "key23": "4FaW1kgpKy5cdNGWnbpe2rukqLeMs8hKGYgq3UWe4h1gjRMB8QTWQWTa8swBVLbCBCpFNHK7yvmxjehRU1KsggsQ",
  "key24": "5LpKuFUQtkBrHjKBjpd7ZCwWBzVfLQoVUvyzsQxjuuueebNxs8xwTsjbvnexHjppbD2CWAdJiDhq8E3Gtn6Nr1gk"
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
