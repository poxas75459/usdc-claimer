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
    "2CyGj56Em5M32dpf11SjEEYhdbeV4sziPqsfRkszTccxypF3ViCDRxweqKmzpgT3FtsVKX7keX6LSCST15J9BJJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDig9PMNuw5XXPxcqcaHEtQvq8FPypu2B1pEv9cAFJ3Qu5iCpGH6HmMi9GCg2BSCJcnQ4QV4nAHayh3SnTxdPhR",
  "key1": "4ED6nVmUJyxEQ8VJvNPusmtxiqmV65Q7FYs6Lv9FwLMLZFP3gXqiZti7e95NV5dHXjM1rYXqVMZMxhcSfq1hmsq3",
  "key2": "5eL72VpyG7nBK5YUbtND6bFX7V19nqNvMRkWNiS6sbnPXdTC2j4DWT36XBLjVFRBurggkHP7S8yb77vULNZHYoKn",
  "key3": "h4PgshYed7FgCvm9JoRcxQGoWfjyDHtR2VMNd8QoPDzJf5Zc8A5AWA9kQc1nrqUmihSB3fS82uBba14ijXeiYmT",
  "key4": "4t12UzcqzBJ7uURLP1krSiQCcNML4akh3N5ghDBNd5Ts8eeddYjLVqZK4MVCfjwpCUyTaE5pz6bUgZfsLoVR9qS4",
  "key5": "4nrothsb8YqwDX7HuK5g1a9VFGhpJ2duCgTdJ9xdoucwfhR4G1kKQp52vge4Ru5mhRRqKP86XxFohtpKpUU26CKH",
  "key6": "2hWCnG4L4iQPNS5MQbhaQSfFZapp1Wyc4GjLo1rVfFNpv7X7fJPn1zXZqak6VBdDp1NdqRtmSCZcMfwxfse8a2T9",
  "key7": "5P9MHkL9twpSp9LKtfvazV2gFTbxFqH4kius4U57dotdD58BtpMCeN8dBjoF3ynBXkHWK3hRWjgWKQ7yE2CAua3q",
  "key8": "3uL8yffkRsCy5n6Vnr3FPtop6NQaBjrVxSkMGDrCa6454GW9dYuBuTG6yKZp2CrWKNVeQU4U7ue9P88w5eFkwHwd",
  "key9": "41n1bXZovc8xaWqPYgxXuMdAqCsqdWXSo7Y3XXUzrFK62mqjDmogtCHgzeDrL4Drvup7w1ArWYgtkhgs8QsPa2Sy",
  "key10": "5P5A4VDbRnG6uBgbF5PFJsKnCDrGgPJnfSun7ePSL1dVpAQhe7H526c3ar3b1rm3zc7Rv5eMgEs2osRdwzpWMMBz",
  "key11": "1nCUxgC8d76zTKYwobzK3DHjrWn7bZKiUBNSnHgyEU9p1irGU4tPJp6Dnyp9SWGrMfP3Gz2RdrXDSHWTLWAhQsB",
  "key12": "3n7ANEMfteHpMLnRqhMQR2hWtGGodAbonW1JoJZCgpGenFPfi7mkTpztSXCKhzqZq4k7DoDbV1jB3ejzpB4deqHo",
  "key13": "3QCsKRzrThiG5CwVJ8VfJX3VGRyui9XpL1TCgQp81N99DsRLpu39W1WeLohhX2ntqgkHSjG51ts4UMSxK41ziiXA",
  "key14": "2ygNXbCETDAdTwRR3vj6aSTvYUb2qPEBfkLMvYqnBAbhU4dLWEwfpVC57HtarvU272GQu7RRLWNHwrat1U7jk9x4",
  "key15": "5pYEHzr6pgrGdpjANpLa3tTzdYdkNg6WDYBoomPiafYDHQccXK1k7bXhDoxNGv4VyrPSPuqcf5tzci59MkD5BSAE",
  "key16": "5J5FUa5wWM5Zn1pz6H8GRDXCvApRVjqyrzgbQv6Eez9MMHdrG4J14Sjrhqkro4HkYQxdVUr1jXWXwrAhBrrJn9nD",
  "key17": "5XzW8LggS3M8jjafX9zVUNYYns5ZYq5hRT92DcekEXsYJ3qyDBiKrf4C4ALLf3KJy6VH7MZgxV6SoNsiHihqQsxv",
  "key18": "5xn2Wtus7qk8PXkbcguKrdNv8jQwrLr9mBeWUrfYsTqFCPB6uqzSBX7ncLBCJUaqsTMGemgEzXzBjVVXu1LRWqs2",
  "key19": "2N2WQJhng1jhjJJh3b9aG2R5pmK5GYagDU3Gka87394xynLkcuLBECu451sfE4CbtQ8UWXAZUYqdbCqdGampT49s",
  "key20": "5eiWWRGwdtoomJsUQoa8e3pBVJM58Mj3T8bDTmuZTzDDVxSg9oMxi2VYWGYqRVF7ksdTa7fXYVPyLctqLmMCc1k3",
  "key21": "52cM7n9nqdZsCYBwU4XxU6p3YxDMwNk6RBgwBe23c9JVcgLKGrTerMSZNA146cARbx6tw45YiyGY8KTh3ctSrprt",
  "key22": "3dq9QrLjEViqGrqXaB5Y5868vNJi4rGKUphRh7hPUPkqLbnYhBhKbbB8WqBP57pot1KYVtTAprqbuv3yLbjps12W",
  "key23": "aGB5kBc3hXMkcvTCscHSqNsHCMgzxivCnL4mWWKu55ujevbyEJPj7qR4XoHSwL3qoGXwistrfXD7TRQt7eUobbj",
  "key24": "dVAH3uK5giYKeg8GtVqYLV7KAn6RsHCTmo5ETYq8FFuNN6cbSSHdDDYJzrFVaY3SvZT3AswVRHZEziKoYMf7J8Z",
  "key25": "3HNL7TsbaV2fGV4x9XKhaqcR3SajVfft4jDkKWpdDWk7qRg2bnqFqzqfdvWKkgR5kM5JyDSP36TPrFu9aw8Kj4ce",
  "key26": "4tJienDXjMnmeYRL4nFXutrUvir9zSF1v9F5GvT1nMXKQzfoeH7wPoBr5CPPHihqw6zN6sen91LHhBHputF9qGAf",
  "key27": "47pmyNn3kXRrpASYiiuXWZbS9Lyr3HdYKd2QdXqqwTg6wzdAuTfMFb1WW2SihzQV4vaXipgbzogiUoszxS495UfH",
  "key28": "5TfKTxXjENRmHecYFRAK8cH4K6e57B5Ww9FfCGMBtT7vJ3NPDv3jZbqUNzM5cizCgryo9nq4yDQ2fMZ84vX13Evk"
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
