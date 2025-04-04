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
    "37gbajmpCwcFe2rkTqV2AQ1wKcrDqHeARDftsD22AVL2hJyGN29asfmZmyCgbAQDyJNJcshdWb7zGF4i23EpkWbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35DoYthJQhFRCAu8av8LGCup5JqiUPhLuxNzzKJkzehDZBPAJmoR9kBZUx2sZw8FuMPKQH4V9QQcMnV6iWGyGV18",
  "key1": "3HzuyobXfxkQXsS3ao51ysvAUPLaYu8jonpFRvXjUDyA4VkoorLst4M4ddo5o6cQdVmvbR6aBZVf2dV1sjKmcAcj",
  "key2": "5U59UpnCzf9SZvVv5AvFaXyrhLTg9N3Ds4FydXL3s9AdZtV36czYdc7HN7motFNsLHBrxEE97FQVcbWmPSe2Txf5",
  "key3": "5HgjqvfExyqfMZ6bQkbW7oDzCgFeAj5EFFaBtLoxz6PnJpiyNzBYYbWTUt4aN2QCZcazd7PWQN13aep5QsnseT8w",
  "key4": "5UrQY7o6EdjqRGzocwHGKrKoRA6RaoVaeXtvUMgzfyfc7eE9hGNpAUwdPB1AMcm5rhkJ21LnaF3U2Mj349cJWdYa",
  "key5": "2bEQkkXXVmQTVCHnT7F5BfvQwdbyTCiR6uqsQy9nS5Bpn5gPbDX9BDZXjuVXzCga2pLjqQmHHXb4WMCmDaYevXz7",
  "key6": "3iq8Xmf4UwrajL9J1KmNHoJd8AQAR6iYiTSE6iQmHDfTHYAxweHfkw6Bs1MmHZD83ibjuzMaPKW234Z7tufyrinw",
  "key7": "3rJ55GxBfws9DygGMvx4GLaPW2rVx5NoffPV3MkwEkRegx4sr2wUxayzW3oWZNdqrwAAeFNkG4n7DEFXL3ZASzrB",
  "key8": "KsFJ57iKCzKoatcX6j3s1NYR28JoRbkks5YPHdvLTeBvvtgx1yjjRYExNXXTuiY2nDf7ynUypYeDpjoaiTTmyox",
  "key9": "3nkqEw7wNkiJ3gMdHS23PyMtbXPWbe7Ux2FaydsVFpLH2bZCQTzHe73i6TSvak4rSLRjwe7u299YSRhSd277AhgG",
  "key10": "61ZcUKvYLEoz9D1NXPUnjWqqtnBoqtLTJcDUB9kiMT6Q9iksTV1d9agFPA2PbbhaX6Mfc5B6aKa2pYdo2rX9sxSv",
  "key11": "3Td4Gvhd92ob6eAXovkzg1D9skEvNKnPgfVq5QocHq89yHq27P6MGafLbB7v8p97rfBmCJRz5uMrdJ9L1QkHvdKS",
  "key12": "4GHvgbykMBfdeX5sFbPiTeBhyeR4iyP6ur3vgXwGaoTDDGuVd3EmimJfZrciuQ7xEr6Ab6pw81jHbBXrENFZGkAj",
  "key13": "CmbiyG4NCY3zSKbFEPy2BybqNy9ssfk5Wof2d58CWqJVuCmfdNxxpG67FkXsJm7F3aKnANU7ewsX2wruKDLtcAc",
  "key14": "4x4EQooLymQq4kR74hWHW5w36gy4gbiygBGvsRwouieUisdNy4UqtmMmtyy31WaGAfscffFdGy4HB8V1JZSddzW",
  "key15": "2LkPKKWfXwMxSFKhQFEdLyUwfw87hX4qkK44H2bdgd3B9EpJM2x3utzrqSaGYNJ15g1qgfvK7KfBHsMnFUeA8L5H",
  "key16": "2rQq7Ri3x2wAzhga4XAE8PBTLcee92FzJ8T3dNbRo19AnjSwvjcaB8LtqXMiaQzb1ayq7t8ABv6YrtSEMVYahjQW",
  "key17": "3ZyV3ttEvZMd1bWetVsTKAXNMFXpVNPnVPYwye3z7MnvpDAL3u9j3uJPueUkHfcAQ3peDHFNcUuqE7R4YojgNj2q",
  "key18": "4bmAPAZK7KnXMD79zNFaCuqZjWGc4Bid7sY9hPQbSFYv6tq3R8uCwn5P5krRkGH7UoVDoCJJG12XbMK1T7L4cc5K",
  "key19": "5YWDoPFGTAE8VJTLWZuQQVF8S9pB7WY5gumUW7DRiLUYxfa3Z7gQd6zMGiM8AhX3GP4aFxALqZ72ktawy5P1RccZ",
  "key20": "KZcwv4vYbsRFJYvY5oSgSmeyZuogyRHTUZW6goAfde69sDqxFUpyFazNE4j6YNMpDHQhUHYsrcXvNYvBEKWCY3t",
  "key21": "3XzXHAgubR3rASLb8n3cn6Vymm4UsSW1aBsr6YrbGjj9RXygAWja1bSjUwgu83j8GXB5oaPYXKF2Cjd4LF2SJWEW",
  "key22": "4EAXdHaVf2GhkWp8JW6kXEvpMukw5MabJ5ei1Cp2zhmJtgvrzyayFCJRzftmZ7fdMqY9KyAZLzjhfa3tEgKWQyKK",
  "key23": "2tcFTdQ7WVA6NkfM6ny8T6JF2FKbQ4KW6CqDGg35C9TGNaszLEMbkpAv1cMMKRRg9qFyoyKrNkw858jigug3Yhw5",
  "key24": "3wwrFq2HJbniTUowhjqxx2AopTquD3sxBEYMwhCJyeTyAKJLccGdk7REn1oFTksW3hJ68hB5jk22vx2evTnQ88f3"
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
