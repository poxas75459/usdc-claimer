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
    "5qHbF5WEkNMgpTsY6RqJKcSm2NJvtozsy4jt939nQS9qoayLsAM42Zxcuho62LhfERChk44GpyChUapRryzLZeMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tvSucagdmCbmW7zbbZ54rmFhg63Sw7BX7TXoLpR3jAdYTgPJ1CezZS3JgPtDfX58ejTZpnDiBiDf7N5gJqBjx5o",
  "key1": "3qeUzsAjb38fTmgKvJhbPrDM9WN3bbVKkatAUXNK1U5R7A22rGrnRmk9fnUTmG1zyzDoYfscXn1Dj9WfeVXEyZkx",
  "key2": "3eg3VZCyv8RE9RPdzQZVFX1BcispsPtYNQHdBzaHc3iKGtN68vY3TtJKJ9UqWZnSTPm3xWu3qc5ALd5fBxHjgoKn",
  "key3": "2qBjBUtqfZrCceHEjPwxz3y9GVVY17hZyesDhuNz8vsG8DjWZ8m8X13ELWFQb7cGUKWzpdfa89WjQApSF9wT7YPq",
  "key4": "4shg5wNCe4fNp58a7o3XVb8CGKSjMySQ3ECEc2LjjMeL6HHu56rER7ppXHFLbTjJPG3AwYpRd3K6dWJt5DfQbN54",
  "key5": "5LeJUuyXM2fWiGA52kmVcy2vxMSpBCdJAB5FQ3iwBAAD9hDLpZps8WLG4CT2UNWx1qXJfkWQD68VmAKhyxnQX9m6",
  "key6": "62URZsJZ5bsYbntFfktagDrrGKMqWibkF2xNCm6gUQbupikCGbosy95pag3SCTZd1htVf4qcdkQqeoh278xeqrQ9",
  "key7": "1ExevFyk1ad72tK7qCjyKdMJkBJW3NqacRRbRZdSY4G5twN9Vx7RAwBYZbk95YmCwibtpSb6xX3TrWwoa7f4m7x",
  "key8": "436QAB3btW7pSGvF8j9Frjs4FonKUT5Z1L6v5SQ3DLDPYEdHfWuwotTQJuRyaUToqtiDKZJ3iYMXabUWnQ4AYxGx",
  "key9": "5KwRQ3DTUYzNvQavHTnASum5qN93uB35qMgSyULtKpCsWbVJmAdK78wZwXV2bCA9ijmFv75iK7uwewsAFtDk5V7w",
  "key10": "4q3A2qXGXA4qB564k4jMLCjHsJywYY5zvcFETePa4Goq1XWZHws63sPXfo3E1zwi2EUZd5WjS9d5ewi5yFytbChz",
  "key11": "6F5cCeoaEFJV3uG2TDEGGHLC4kr9PXym2iiCzY5kzEBdMvKCDkKB9CdSKfyX5J3deCxDA8d6qrQKx1eHCMkGxaZ",
  "key12": "3Ucdzuhh4n5XeZkd5MuRfk9Ek61P59xZFwPm3nn7BN9m8LGBLKZFp7Zh8zr4G5dDRMN7q84cYo6drNWdspmrdKBg",
  "key13": "63kq9DYJoAaXyzqMJCtHe2xpofNmpreg2ethGM9KrF2m7WF7PLzgWNK3q8aNgfwZnTPvEtxihqfescNhAzaaZGmE",
  "key14": "3VSG4u5RkV8Da6AdLy3DjjRMZcaHz9RMrdxPsg1WSwKUXtvqc26JC6oKZzQNQBQ4Q86oeNU9q267YBSaD9cSLHHF",
  "key15": "4A1DAYHhRp4T5rwMmCUaBgvtA6TUzZ1D8NnGMYcfnvpZTRfJYxzFAnwRMEHrYB4ciaXSaVurZFWpkAML8ce6RkNm",
  "key16": "YuP34dGqyZefTrPnrK75Kgjccs8urLhfUbrx14cCwY36qurJZSs34DXXgpgd4nD6X3VyAi5nh4SGQDaV8x21XUY",
  "key17": "5sEByBoRujRAtQX2DxNPKta9LK9Fetb48TzZq9dzf4ftvFjwixVXj1nDacFUcarxyeqittbzmKi7VpugHCvHaqv6",
  "key18": "4Lm5xPK5XLQ3NDwkHLqRGRPgnVzrAKuqbXw9N7Tz9SH9uYV8JcWGU6uthEaV8gXgVSw1Na8ph5J8SxxnnyS7x3EW",
  "key19": "4zieRsBhq4oY59NFq2rG69tcUXmqcMKGqVBeWA2yJQyFRSwPQKyrGFLQZmgcGxcx7xedZst9yU4VUvuBAjnAMwKg",
  "key20": "3VTfjLDKx4r5Dam3G81QC2thFWBP4sFsPcYigMLuSXwP17bdaksqeQ12FdTGVvemwjGAKxVu6EbQsftvDmm82zcg",
  "key21": "4Kh5CHE96i6k8K3wXVt53akbA4YLz3YuRLjy6gKAnRBbwk3JUEo8cshDRSkFhUy1FBQ1iEtnsPkXegNusN5rf2yn",
  "key22": "SETLUMPgzZG6zxyHDVQXYTnmr7vfvZKMKMwyBY71qky9N1uhKetayivtV32aoX83fbsrH84WiBU5khTHN6jMXnr",
  "key23": "2eV1LaiwcpaBFQ2tXPrM9nrvL2413DWhF6oEZQtdeEcQP8SkGzg3znHspvvStwBGJPwm1wTaCervV7KZ5g8pfXAX",
  "key24": "3ePULF1RoiPWUud9gn8VpeZ3YGZSeNvNQ2dCCuTWmDfhNF8QckcxGYKgFLzhpbQiQjTtqCa4mxCSSMpoTpyfLh4A"
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
