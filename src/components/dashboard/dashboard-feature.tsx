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
    "cu216o1t3EX5owcYbKinyekx6fxnVzeE9NY6H3Ghsame53PKYJ4fNr2sDMkj2kxNC9zj5R63Ruxpv95h7yQ995g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t3dgcNW9W961FeMGhqJed7FEGkGLmgJQuDCPbTpJLYq4xZT9PyF7RM6J7C4b5f6zFJsCMiHjMnYtQmnpbd9For9",
  "key1": "tQsse5fSvGaR5q53G45QRkLQnwxBcJU1sjGmY2Dx2mWcR9dEdfN8KJnPSobFTUHSrtZeisUYHWPPCbwAi5jzgdV",
  "key2": "2HZpHUnUToN2zGYtdpfiZ9LPGynpvVq9spjJCAoEJLxbigy3ac1NjeHHRk6BZZ9LWwF7PsQmKDwEMrfozBy5iTJF",
  "key3": "5jSiWZn4wdYvduChmtPtMsqxvNmLLku4bskj611zpKYuHwNWfUjhHixiMB4xFFFoC76366uavxEHAUrWattYQ8J7",
  "key4": "pFXbUbueASc2yJWLWpoineBsSL5Rs6k6TVhhPYft18hn9r7nr2uatw1D6Wzb7BsXEXAzyqHiB981W9p7dJvZBjn",
  "key5": "26ULRrmvSRwpN7rLrhoMGQzmKWKGH2P4ScJdCLTWQbeYRZ7e7zBz1QNCuffmBgQVn5jucVMj9AciCFHZnYWtwjnj",
  "key6": "2pkdYurV54tnnXCzELjwiPjVeVTfWtw8fTXnkdU5MAE1XKHfkMttTLUM5on1LeWCGhykXCmYKmWTMAK7zCyhfpXM",
  "key7": "2mtNJ5rmhEzHLPz4tE5LHQqfbzyjUB3F5zPqT4xsb4HpL1aCKmMb8qmSpQHzhk2N95D3KHSz5Att55d9dg8KEBHT",
  "key8": "3VsBHJVm4mdeFecoDwqP4PMD2MKteYVs9MxjEDRJTzoC4BKTKrnS46ne7AixaxZjqbbSArUjLVkCjj6caUWHxWg7",
  "key9": "57DyYoXcKXnq2ejGFhfEfnUHV1vmGGLzH5uATFQotkNd3cSEUrLRKRfDpQ9xxThUaEi9GP7EqLw2jGyiRb4J4vo6",
  "key10": "4vh8YfNrmcMFpQjcydNZneyrMTRBsvzaR3HTskoegGEUbGtbchFvvVqXwVSqdPQ869o9r9ni8NpuRk7XhgKjMEF",
  "key11": "2NxqVpki77iwcM8YKDPBfxw5746Erk8qw5PahPmFEPBNPBo8JKHpxzHZSnVgtdSpqsSftcnKCdNRsbmNoU4QBgQ7",
  "key12": "3RaCdW95sMLkwTaNJWECr9KxX8Zg2Fq2eS3Kr742McYEo8Fatgy3EHGRQ7BYVCnR6GVU8r16ni2GxTd1YQUSZ4X5",
  "key13": "3sN2kxDCt776WuiiRMgeGkN4FspkPKi8pBjXuywM2srpuTaWBuyRrRhCcGTMGt9hnTvCxZbiGc2mc8WQW9BxNjfK",
  "key14": "2TxoVWgyWhiE6XMAuPNHjQNhcTaTK5tYHNFcGEU3VUKppxHSVgpeDs4K8CNZqC7K56CJTxA5UbYWZKfUvc7D56q5",
  "key15": "2fprjSstfSMf5Wxpx1FEk1GNS4X34tEjMPKY71HoyqbzsZ9V5wAtDeQ76yiSmZzgoHpbuvEAyLVZFxTipeKdL7X8",
  "key16": "3GiEXpeWcyA6WH5i5jX3csnedkc8iFkx97sKpzNU53XpzAGunWfALEPqherDdSZupTj8qrLuaWTr66KEvVjeJWcq",
  "key17": "592LRjWNj2BfLegzc75mbDw784dV7gzFv5f7oB2FrhipEHdybTGk6BecGtVMnk8iwmxkzXEzs7VZ46h38TgREn6t",
  "key18": "3MkuyLL3FVmsRgJKvf21WcGsVHGbACdhDG2Gvzgw9Ea8N2seQcy7QcJH5NDh7mFqUEetfqytsfwRaK3t1j8fsbRi",
  "key19": "4aF8y9UD4SMzBLTywHt82ojKLtDjCrQjCjdSL6yWkqACbDjVLg42hd9zdamhRYAbiWoesfqPHw1Y7hMu4HdFFZp2",
  "key20": "5eVLfc9eaR7Nq38NTvbjN3TQo3zppxfiyRDbe14pGYcB1dLXEZvb2egMTyQfQzXPZyzhkGhQpZVdApLdP9bt1ZTC",
  "key21": "3XcjZSzVpKJqsqoBXg1ejUnmAj87BvAGwmzX3hmu5vvKDdqVsevDMfYKQV4FnDKgghbvypfz68Xi8XPqbEgq63zp",
  "key22": "2chtfw9SFSTCJCCkuWSQyHhY43caW4foHNW9adeesL6vXsCy574ytmwvuEShJcsLyffxwwM9dNNiRCfsg57CL1HA",
  "key23": "2nSCUsgeHVndaCvSqreHPSz3bAbD6ifsa8qPKp4HWRVyUxXnzq6V1xAt3YxmBQHJ5XYVe95CVm7sSmHh8XFWxv6E",
  "key24": "3QR8h4t7My8uPnJdvFqq87NUTiNZkXmYswUJEvEiHyNR1WbqaTifgLgWV9hta311H8TnPHoWb3uCoNUwhwsmRsm1",
  "key25": "8o4yf6498eHRtavwRwAUYgp5j3LX7cv2bB4UGe6YgRcrL8zxkumezSfokfP8uX4sZhAjoADag9cpC5FQ9F3VTEi",
  "key26": "3T2HVpFCKy4kgW5yjSzcEadKYXxRijcDpVtNWVC2fBVJyn8Ss79ctzQQQkY4Z41fJEGyK9evCRdi88WdkAP2b7vy",
  "key27": "3KtANGF1UUSXgNeozb5ivTkmhFune4C6GppUsuUgv3Qmnb6AyCwoP2PHE1nTk62ycmmimDtkLBjh88pF5kytEWNb",
  "key28": "4N9vfi42gLRHrkZ6jyQWYjCfpLR6BVLG7CNM9j3Ey131R6RL8JqkCiDi4R6y8M1UcetYc5XMveqZdWNp4yREvCiA",
  "key29": "61sBsSakpZpBoK4F2DqEKsqchfu6r3E7KYgrcvwHeCqN8baoJ6ZYEV6za6DTwELB7CpfxxQ9udUwjeh79kyhwjFK"
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
