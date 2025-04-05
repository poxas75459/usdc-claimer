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
    "24eKRcC1J59eD7obZZ3PyPemKgNs4XUQ4TacxJnpxw5yviR2cCivPkusWYx4vPZStLDiUJF2d8zyXdvWPndoRoRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LchhWZ865MumCBXfi53o29wLtTJuF235uZGCr62BUKnL2qZiFbhDqmg3K3PimK5QAT6fEoZpyryGgvhwp8UuNVQ",
  "key1": "5snoBtWQz8i9PF7Fax7LVuLQbKvGcQa1f9PkwenEwKdjYTMFWTFcDiBXXtKCGjTsGdaPZy97TuzGUH7JALenxQu",
  "key2": "pPc2GSdVfpB45Qv4XYu7KbYjs8MsHvd5BUomw9hFX3qo3APUzFgu1ZPzNpcwshztaDgjP5VDHJacrd6kgXphxFT",
  "key3": "2VvGh42rWApYxUa2vXMgMaP8tUciL7ix69SG8fivC3X49H7Wa7hyMrB4yJjw7DonnM59LHavmY5yGTWWFXnXrJnW",
  "key4": "5mUCgzxT4mnqV4J25NQoZtFjSYnhSgV9PT9Xtsnk5jHLHTi2CqaRpRJTbiWkPLCJHpoxtxxdfafWdpuNfTHubcP",
  "key5": "61jLNFEnXTx6LRisYqpwZAQJB3XR1wtwRa9UU6afrQkofk6eDFu87URPokXMBnPPWjDVkSk91QwkHfFjYyzCn89h",
  "key6": "k94R1NwSLWrWNQzaikJmZP75mQCkWZuwLH23Lk4SeVXsc4nfJxkaRgsMePC5MAm6BLNSXGrhXVEF5HftPjfuPtj",
  "key7": "HAHiMwjNNdn1PBejY77fMnvabK3u5UpEcgJUkpf3mHrtZ7qG6GmYNeKud667cGaMmh77t82b2uv2mEo3sSVg95r",
  "key8": "3e5KsLeNbt7hwFNvvi5KiN7BHtyPsotAgF6DXoKJxuKtuEevm8DP5m44d6xp9EymCGpYp1by3dJngHHGaYH5XbVS",
  "key9": "2ZqQPKX1juAPQNtMyrksN742Ji9AKT6URhvDDips6PMjiWoVkwhifkymnXn6ELsmmyo9eUkPUhTw94TyUXeqg5Zw",
  "key10": "4hKv9E5Lyw3qTxFzMpNmu3xdaYsjPpLTrgqv4SSFBefUpQTYScERQna3WfRyaiqrct3nzDb3uerC8ZD1dfrTnhWo",
  "key11": "3rb5TqJsHQ1mYZ8jnGZqvG2Sv4BMLp9i9ukfmwo4Hj2UvGoJQB1jRnzQL2j8uNN9jVBduz4fZiPgd1dKA3WxZXDG",
  "key12": "49XkyL97yXe2MqK5p36zx9SZGJ4UpT2KnnzuXVDA1fXgGei1hteSsm21qTfwAgGo7KkDVg6vJX6hBPiESVfRefw",
  "key13": "58gC4JZWe3UXU5Zg3eey67beS3SMGvvZJiqTCV34STvcsJjDU8cRzbkhY18xqScr3vzp7n2NigfmaAxHYn1s2V1j",
  "key14": "5x39G31jFwGbs9FEMgaRCVS7SwtdXdji9L5pYXrYy9v6sVmWAv3sQqsZt1Nks9oP4XKXb3MfHc5bxoWR4ec4Cmbm",
  "key15": "4g6SimbxLBBiS1p9GdectDq1Hq7Z8dv1JLXghgCqina5fe4tqyMhnwxT6vo75VZEBBDFhcKuJzK6KMgeZr69um5U",
  "key16": "2nmM9q6zFG6WStuV83Ta3kyqSvrK79WVG446PsHyfCHihyPWrS2YV7Fm1tmHnoMRa8YN5P6by3SC8j2UJsGEPQ24",
  "key17": "5Z9f946U1iyR8Zz1ZMG8uSxeZZ4Dy1D4vQfMvGHVYvaJvpvq6A1KuRta1RLS6KL1Y41n4Wau8pTmUFbR7SLAhsnu",
  "key18": "3yMCoyf3wPa5XgWQjJHtLWS75YaKKKd2vk7rs13LtsRNKhiZN28ZB2kLhdQ7JytwoMw4ghQSXnUhUYWo1Crzypph",
  "key19": "TBNUGmPub5yLzfYmjpVzvepBDpwuoZ3UxmPZtHcJBvqzJWGz2anVN8MtWKJBPPECFtpaAGjhGC8X5sZzvxYQN7W",
  "key20": "4faYMdT1k2LbsdXdAqbU1rhcaQopmKT1oWyQFWaMqfbLjokXRaQfeFG57zMFWtqGnfHBVrj2VLXdXrN9pVQd5ixG",
  "key21": "3SGc22ayN9vLaadNhGaFfxEwYftyWXUcHbwSRNyFgDMd1mtHFKQ5Sq535eRuitofkT4qyGjo22AK71wjftQvfy7m",
  "key22": "bKHMo89bYzAKptxjNez5oE4kitUJ3hq4PwsAoG2imz5JRJM6RboKZYgxA1eQ5rZsNka6X9Co8C63Cwc3hKa4NFC",
  "key23": "4KWGXcRBYoc1u84mCXD5uGGL4SH3fnt8muhpwAMdocWfjD1c35sGcVKWaseWcthGHhge4X6rYhHYuhTZjSLF9g1B",
  "key24": "665dEfVWT3MNrDMKvaMk63LMjMux2knuL9WrRbBX5nh5U2wtTxaTL3RAF9TqTxwED3i9hWeiiGhMYSGRqbncyJ11",
  "key25": "5E7935JA3yvkL7ov4CKnFKypMipA83EWGZCK5FD8mqkL4zWFmpvsygvzsfA8X5utkQfjy86F5g7aCf9YxK5d61TN",
  "key26": "2mvuC9R6eLx2MypG64fFdh6kcBkyiFTKesPZhEunXyb7eJBVVgTmHQVdAZhVc8e5VCoaY9mctWYtpWqFC5hdNscz"
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
