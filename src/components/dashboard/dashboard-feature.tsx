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
    "4A5rK71yfqiVtTzgAdCsZmP8FABBqELokrUthffeHCD9CwWkLpXiTRfdp69xeeXWHAdLsB1JoTcggBT6KQUdrBYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KPZRCbvj15Baw7iTsGjYK5nDD8bEHSx4VMqnG32TNmwbNZMXLrEN3MivuA3DJ53DfRSQmzT7fHGrzMgXAKxMSkj",
  "key1": "4mXWX1xbfzcafN1az6pG9dofVhtHqf1SHyHccFPceL6DR4pUgC5DhrA5cfdynYh1Z1NguaMRya9YT7gLJP9LseFr",
  "key2": "2J4GxUzLXVD7kfRGuAv2ba8mVmrkowhRsDPaPdLfhKbVsuQcRg17KDRnNQJhVpF3NTKacvZ7QjnQ5igWxsVjSa5E",
  "key3": "4DXaMWdgCMr55mBpSBvnMpQvS3erHbFk6YsgXwyuuqNBiJ4g9zWtWPo8Zfm4CwSB5uzkKYyJzxuwRE8ZVHpsHyUn",
  "key4": "4qgK2Cjm92Ssgn38UQ73FnbFXqR7XeawYj9swbcpbBrPusQDimtVmrtPZiBQKeXDvmH6J9QuEKB8GCXwNkNTP9jj",
  "key5": "oKiKqDETwZQYaYMiHazQiwvp9iY43zse6jSYq6jKBZLdTLy8byrnA2xpNzSe2gxodai8XfMruERNdgcWzVEecz1",
  "key6": "3Luo1pm5N3K6ayHJHKmFtdN7rHYZpgcCMHdQNKBfbezJWv5BDtSoj3t1X5YRQCe64eYHHKC2u56FMPdHFZspcPTa",
  "key7": "m1BBye9Fhi9XiohwW1N6D4L8MpJdcGK1sv9vpMUWEQofxW7Szg2eat6c7XXG2vbXSV7bBWwcoC9n4EGvLQPXEJi",
  "key8": "m4nzX9j1eCdoTMN6hkbTmUrTdi3KeX3ZJieuhu7fxCDK1Mkm9wUfZFm2uw1YnbLe6FzLHnCTsmDJMAVHdRakvhc",
  "key9": "2XQic3NS3LWJCw4GmTwnhQYn3nbCYwC5LB6bat8CFwYqmDBVbvwpXiRPuqHCPwQowdT54hzFBbyAg7nAs6UvMjDK",
  "key10": "5imPUPgnJFS1oUjhPFm6CyjkEaJcgc1tGKagbxEXBo8d4iNZxqsNDc9eB9pACgXmq3TFmawZncS6YowVbNyA4vcg",
  "key11": "5S26gi42JpXz4suJjz9e7nbabPxUzYQvPJT2kTwCGy8TdS1zrm8nKfXNNS3k8Kjuruzif259qeXvUJ2cJy2WbGma",
  "key12": "3Ej2MYv8zDmPU6ZzQFvbxtWNkwTFiUvcXKSAJbPbHn64RsVAyAz1e1YpXRyqnxVL4ruxdimSBzSzY3gSwKM33H7D",
  "key13": "5DJqYYAMXV2VuEVji8bTMDD6aDFsWJWGr1Kx86N7HXx5Jm8tQWgwbqBTtLvSuFA7FT3Z2W6vnYY89CHG5NgCenqx",
  "key14": "5ACoXnfDVGqAuo4me5XEtQYBFo3SxqyJ5ttB54ZDbUvbvmwuf6p8ViELxeyN2Wvzdz5YgbjjfqGS9sbCb2s2nYoS",
  "key15": "4cCKKbvaoRC9qCw5naEikVaxYJAr3i3ReD9jTLguEYEWmx6LtEV91FwW5Gm47FwiHwaVawfd7zzb31t1Ca7T84Dv",
  "key16": "2cMpZa6EAYdt9joaSriAFmBJYF95fyRrW1utpSVNK4UgcEFMTsHADwqNTWcQ4Ws1RYre6YUVmGLXtuqiEVgTQERe",
  "key17": "5ExcpmpoWWpUDwEoznSYEXn8hhZnH2NY1F9i3nnUJj4Huoyq3KYfBhzc4xTpHtqr5NYFN44w3b98ryW2Lbxfm1Qv",
  "key18": "2HDvNJEkhadvGz7MKHfRytSmSn5crazE1fMqqvPzhGkE5UZC6MrWd7C6ehRH7GfryASuT3aipzkobiYKHkS8JZj4",
  "key19": "31p89sFTAqdpjJ7spxgZeek8rFF9PAw9EurNQ8Nsw9RpoyKrevAfGKLurwv757kb7Bcb7gEQ41MWeSHyA6tWTK6M",
  "key20": "3zzDi3EvwLpYRj3SVrU5gDbGYZ857QfV3huWuxkKbatvfUDUttWie6Zf8XxYQmRAU5rbnMTziDgMQUTmM5GBjYzh",
  "key21": "yQwfBNCN3aZW4hWCdGzP3mkbkjtrHznzjW1c2yd52iDvuG6dt8yf7XYawYrLYi44xNwFEcWBcJbh3Vc9hUrXQqb",
  "key22": "3M2eFXW96fQaKzyP3vzXpj3cBM8xDs22qdgbYRPT12ixY5hbBW5xWFQ2uU4SmsN3mo9UHqbXpu9gNBPmbp8y32rN",
  "key23": "5L3RrDR7qcdNQvt4fYCSbD23JgD7MvY1A3BNywLkvp4E3W2rWY7rE3rMTFKcBYFbriFcsRrQKNMxjY2Bio1HEvq3",
  "key24": "3v3NcjZ4kZj2C5EwA7nXJdvYbXvbigbAupmjPPW1XULDBDik7QDNYhqfHQR5Zd7PPAdsw8Kp7k1TFJRjHKV5T1M1",
  "key25": "3yqRTzwZ7GouosT2HtTPnj5k6fTzWyycd6VpkMfQSeqppkJ3yieMPNA62spLKbiWdYVvY9JjXrGrpzFDtwGn9Y4D",
  "key26": "4LVsdxxMGcuPbRDRyHBkCpEoLqQNww3Dc38utyEmrH6PXZhhSpFjfWhcYpyZiTQde8JmhyNmXB34FocvA97mFfxb",
  "key27": "44Av36Ge5K1TarhQAyyGCTLtAuFQ68LUJRbuUtLWtHESf98vFopm9KENS78tEVbVigBoz7poRAw9Qoyydo6D7Ypt",
  "key28": "73dXkSHXHuX8L463QYfopMGAE3QSnnf8sTr2DLJGMLRGbh7EGce4A6zZw7oWoiqbJp18AcP3eHbcrwJb4KCYv8N",
  "key29": "3Fy2jZptsHuvKjTEReGTak1wvWYfivWnozAL6UZW8d5daKxuu4raFPNrbRGScwqf3jKi8XfphwbNdAsnMdE6qnZy"
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
