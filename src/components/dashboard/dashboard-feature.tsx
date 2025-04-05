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
    "3PCuqrb1r1RCAgSxTUDQVHGHFvCHrkpzA6YSF38uRjxnf49CrurghKfxSexaiyMsVaGVHf4c6ATE2mfAMkDj9ypa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PboKbW3wrZv4eT4itzs6WG4X9fYUzxUFzdT1mLfY8MfVays9eq3QEJvLSQNXrrSpeVMhazhfNxHU3sFd6nJa1Dv",
  "key1": "35c32jN2BdT48896SAfi69JDtCENKCPCZn63pk43HNVUEozLtSLaMtEYBmT8NbpJ1HouJ7Qi3E2gvHbK6QzCPV1H",
  "key2": "5E3FZR57oWzuyyZiMC1g7wNoyJXTqxsyBZme1YM1QKg3qSvw7xSpAo4rXUCRMJjZ9wFE8uwVCAx27E41LmwGcWKy",
  "key3": "3ZaCnMmJkn4qPCcASvWtePTySY4bZoWF2bn9WgHaeh98JtNfcJYj1Xc2WHFXkep13QH56m43rT6eHqTZJfPRPGpq",
  "key4": "5PRdMTvLdBt88BcXpt38oAt9CRaQ9L6HgndsUJ4TX4jctbCxAEacreb1AeG5jDF2Jk9a3zyyuC597r8kNEHcCALQ",
  "key5": "3PevYvCvRu5EN1QfrJF624PeWKbZ6Tx9cXTypJ3qimrsrLeKuqfBfTHNbRqtBCtdeZMWrff81CTXC11uAtV3Ghuf",
  "key6": "EoPy2t6UbPVRCrdzqVyTCBg1CZdPDcibyBC56ZWhJ5AvLuNYStWp5XptFATMiSBfhbiMkkh6EX7BkT56Wddf3ub",
  "key7": "4JabLNeJDhATB6XhRrQruix8NHJkpbKEHMhB7Txh8FVWRF7aMeAvcRDDhm61XP9Y5SXW3V4YttGkLM5ieyVdmd4g",
  "key8": "393AGRjiAk5LhcNE9a1spR5Y2dTwxo42FVPrYKKYgXpkLoMWohnnHmE9XNa3LtMjXfWHLT5QqWM9A6c5uS34WKmM",
  "key9": "Xdq4FkggSqmmXWYa5TNpwbUwhTJqosNyBi8pU8ino6FtQZvVfGCC1n9yhiE3yCTUEkJAvKNGveTNvKmwUBC4W2E",
  "key10": "3iuFjvbUnbHQ7uqQNaWfrCmDpkCXv35kPpkVxzG7QxxZBNENAfqVT2BaGDPwadLxWoWwe3N58x4CfatiBtxPKQxp",
  "key11": "5KG6gaVJRfE325sQLR7oiUk4BN7osT3JcRzuaFjRzo23P1Def7v6gC8ZpTxjgvd2tcKhXoJ7vM4EjNZT8bbqXgAW",
  "key12": "4QNWLrrSb5KRnN4iSMGpbVkgNenKVpLqppY7tFiL8TprYb87t6NHAJaLr7roMo6zAtEWtej8kfXKPz13ovnzn62g",
  "key13": "2xXFgFocVCCqvSWcBstBo8ESoZxHmGsFiW3vfbZLkdyRpa9EYysoJjYhxAdp1U3pfbo9reXU2qMTxJtit1SNK89J",
  "key14": "3vw3M5E6NjV37nndXC1jddWpWV2b9tZEnB8Dun28DAqkyeM9gxav7pipxG9nof4Kw7tw6uvwUmQ4DJGQ8iTxAPG9",
  "key15": "u2WSamHD7uQ94VkRud7omBoPkKE65qWdt9ChQZiYdmcZstZPaJke176uP9yAH8wZtDBTcCHdWpju9mbYWNp5x74",
  "key16": "43dikWq3mKLYaoa4dstqUhwbiR5uWjGgJjkUFLVu2Q1cRp4pEnmQffKcXHSf8K9ADo4X4H1DUZLynMjdkVEC9oXc",
  "key17": "YVL6Nz2jp4hh8ZRHnXcjnpra944vHkkyUP3qkufCbqNtFUPofKsyYg6fkaK7a3KhdTmBnWm4NyWzxK3Mkvyt1Xq",
  "key18": "2gA2uiFkoXwNtpmqQox454SLFUx5XV6L18q6K8AoWHYHXNSH2YcnARo7nwj6mxSc8JpEZbeZtonKYY4AwD4EctRR",
  "key19": "2gjo4T7v9cbSFu8cezqwU1rt4iKKPB9uvFMoyUWbPgiYnbjtQGJmoymh6ev38vFQdueMP1N8F6hjKT3FDJm6aVYo",
  "key20": "3yUoabQeP7wKVJKun7FPMnvf1Mi8PKQ2FKQR6sCcR3FN7Wm5zD6BuSRQzUXczBSMiV9QKKxDq22hArJNMc1VmKmv",
  "key21": "g4Wn65d9vUs1gDrWTd6xNbibtnqFNM1mPy6GMGZ2RonG9b8W6vgRVHhXeQvyX5FPSXGobDC3CXRoKQ1kNcWFpTP",
  "key22": "3huCVa2HZRSRqUAVAcC4rKFNW4rEpZ6BH36zCkPwk2FZQZ4uKhpJdeHumzfYqRA6QJyb2h8qJvLprCAFaeoFDvXo",
  "key23": "5d9gABFgLhhf2KqUjbhCKWePxyg6RrR4Tkfsn9YVvyk9hkqwHmnpYhus3JobhYc251ps2KeMBbJWWQzqQpHwp92S",
  "key24": "Aoxt9pisW9WsvDt1euAYW13xjNBwMWsiH7WHRY5t6FaAVCzQKUiPeMR9ApfKAx87bXKh1nxfJCp4zmzVxLCPxiJ",
  "key25": "5td1tA8ey7K3sNs6VacFmKs2C2JnDfky4S9XWbtdtsLimYMsWjPR32dYK21XAJWArmGzApFBsGyLGoVnGcfQtDKy",
  "key26": "4u8dEYPfgY6XEwKm8aQRgWTozDp5EJZuwAq5unihGA6seqUpDasGnvLHuTEC5sTuvb68T3f1qeaZzGY1go3Ujyic"
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
