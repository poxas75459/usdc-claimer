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
    "5aBq5ZvXwgaWUy9aiXPTBk89sKZVGy9CeWjgna8sV7f4uGdGxUkWgtFatQ2VY4TshjxtqwZphRQdmeTgoPLybm7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYzmrbRDh7YHudqreSfBKAJWz9Jg1K5z7TTvyoFVcapvW4ChzjbhvGxh1WuNzjCkivgfvdmpXpKscxjTk5rfHUQ",
  "key1": "2JkL6TM3r2gjZYwz24mZR2nnAWRHQ1QaMyKwmodFYur83jaXe2pRLrg2FiPc9zH4p2KdAf8nwxbsrujS7BkqsFBK",
  "key2": "4UajFWtkuENrNqQJu8iESVucAYRpvxk7KPL8nDMcyNiEnEGwVUm9tomHwptk33ozg3o6FFgrmFSpAa2x9KqikFpt",
  "key3": "4ftS1obZ9A9tm2DCmd8EY8iQMy1tMutGFn7Ku4wmpVnuRbuSoEgJhkhpiVoG2fzVgYKrfbDq2NhCojtCLS21P3y3",
  "key4": "5wavmMq1qj3aUpYUAdRcgsv96UgupZFo3c7rVUVhArVG6cC7cHoZj25BNRU63ovCB89Yi3ETbdagCE6EwcxEy17W",
  "key5": "4DA1gG5rgCbN7pywzjm59Cy3G8MPyZWFvABUSg7rQS8dJjNS8rB7QSz9gvF7hvFhGhLX6GNAZasymECDWzcZexFr",
  "key6": "y11sxjoZ8aso9BZwuxh46kFtQKcWXDvVLyTpw5KGPBTfGsamDq9HuGLSzfcjtsyzLkZm6szvrwVxWEvoiVKsT8B",
  "key7": "2yRkXytUpDRoYaggfWLfp3Rp6CSrFjSTYqnrhdo7MqpeEKnMLYbury6xzZsavrVFhnBWWnX7a1C8sxpLbpyAokuc",
  "key8": "2u2eqswYuHofhzxHx4M5CkfU2BAUB8jMHdwDyvEMwZHKm2PJNGSjePWX13bh5VE3tAuGxNXszhr5FARNHZAa4AHw",
  "key9": "3ywRcZVFuXxW5Yoy13kxEj88fDR5TzHDVt8WSkzosxbGRTyQ1Jo9hYvse7BbmbkgPmw5DPzvSzPWA37GAR4tKW7J",
  "key10": "4QbaUzA57t2MSNFsWcRJVTiJs1SYAYwryEJrf2eVwwMup6dnYGx1bHWmAuWWkikZ6S7amSMV1KTpTAof7qbL3gKC",
  "key11": "2thFJ5k5Dwrv5ytkwv5xLTYbxLcfXchJpVbW7PC51MnsFPfneoyEY2SFhhzF7QDVpd82HKixqVhmacKCUQ5aFpmB",
  "key12": "2U8iQSSDDwBdPUn9Gpnfsw1DLtQiyJJ1f46t1RVN7ZW79mEfUfU6jE4qfK3pGsCcPfxoT64gM9SUL1EVTbffUvqr",
  "key13": "52NuWqihQStMaXBaS7x5U1y6xNByHHTYg6PzNB7VvKevpJhV6KriBFu5KuZgc3XJutXhWkkzCcyGuoFLcQnKCeyG",
  "key14": "xfHeRiAnyHepZBEUqwKBtKhAK9mfb56Yi23Gd8wB9J2FB3yG2RcmQbCQQjea2TjENtPrkQhgyyKc2dD5Hd6wtkH",
  "key15": "3ZMNDx5cPRn4wDkHjkaQYJHgWFsoX6adxiLmUrug8xhvwBABDTC9ZENdrL5fz3Zg8t8mtgkE83eWe1UYE9NTyoNX",
  "key16": "n8Gre5E9bTHDNut9AVzCzskiiLQSzb12QJyLu8kZQ3a2B8RKS78MkbbGTMbMarYthihJcbnB9kWFiQTpPZh6vtJ",
  "key17": "661UUJRwNeQ3gYZ4K3CAHdnjAYbDkg6rcMekJmi9rQywPGJZGhZrM68x7dAM3esLcpV8oUDqsoveSWc7iZS8qgGA",
  "key18": "4STkiFnKLpt7qr2vjeH1rzsdKDp1obaE6rXfUwNeDPStL4nrUK3dDaNvMjxWVHcNEYp5cDdc6BMmBBKUhrUUaWt3",
  "key19": "51RPuqE8hYdjBFwjn5saoo1bPnJjVxrvxPLFSzYzH9dnfVXaPGH4XhF2Jnu4kX4KL9FywVEXcngUrny6KCTBfsGv",
  "key20": "3MUn13mDFHWEUByjKiFKHaYSv2mEPzCGuLR9rm6wtShJtgGAqNsyHGdkB9Z3uY4ZNXi2QRtPyqPf8no5b8uvwG9U",
  "key21": "5cyvdJHJDF86wBKCuK8KyLdC8qdZGbVJNB3cNhCW2g5NjGUFHPrXdKd2XZz8KtEwd5uK1qB3LCwAL713Vv9pHMGt",
  "key22": "2dKiomVKgrgSXeuaD59DUrdyVbiWw8kvP26X34zEh2KstAZfkBj9uAUJBGczc7592k9Hgh1TJ29vSFCjYmP8iosB",
  "key23": "36ABunDRkVK7XDzmQkKmcn879mvnyorvWDfBmL6XdBkn65oTNco3wo3kFdtVx9n8Gm5ivCsu9M9ve8MqvxnPwnAx",
  "key24": "5WGrnNmoeTe2Pz8a3t5UFF6qZFg3NVkzTrL5BbQBNkwk478HThQEgGeRfLA5unws9atqQczogc6XYJHBvAcAWYBp",
  "key25": "22PsaMygtzf5GSyvw4gvrFg8YiPBMcvbAGDoCHRz6cjPonGjDvCrg7LSMPLUpr33jKBX2Tc3p8ttfP991BasJxvg",
  "key26": "2jNUjm1CUhahDNXvsG1Aq8SML4gp49N6pnGZBdZ4EXkjUUe9wCZnNej99okMvoAziC2fnaLotySYgWqyaASYCkCL",
  "key27": "2E18VQjzGvodtUKSoJhermyjd78oyvsnHQc5eQ6fU9SrbjxinESKNfKMKfknQD5AUj6eYybUhDmGFyp2bkAShAcD",
  "key28": "5GcDTkWmAxjgwvX7Ji957F2whLYMrVWxBCwEeqwYuoGHjCUFg17zikspoSsJyyQBiR9eNh5GcQo2YQ1mnUvKjBUM",
  "key29": "3ULuBaPoe7njy7d376Wd8kzVwb3WKpq4HP9nAxJ87rYiYM1TQVqzYRDhyTx18WjqP3bFvWK6naWpZEN9dNnQ6uQg",
  "key30": "37x8wzmhhFETqxQGvsWHbHggjYCZRdQdw67nm8KiKVBHhXsGV2K9YfVWeXcrwmcZbx2L1kwuue2ktdbvee2j5U1b",
  "key31": "5zWUQUS2p5K9n15kcWqoswnYjqcGmUPCWSn19SmcrQgrWFGbyvAYosk7AKHRAvhp1cyyYxmaoLzwXAqHGhnoMQRd",
  "key32": "5aS3MX9rwchikP25AXQRxy974ytHRdiZ6nFrMfDo1fw5DdgyPzG7QEfA7H5S7gW589LhechBNL27diEamqUEfuPV",
  "key33": "3T7jiiHRSJU3HeSFJQhsGxAHuChsgQgi5bV9vsbpVRrSpcyuufXoZuGNcebHqzwSnLPpF9tnUgUao7p1zkRhnD4W",
  "key34": "2aKwyGrv39qL3FRu68GFu6Uw8JPqdz7J53DHw3KW7WqMVqwJgattfN9rF1YedBiviaR8KJSTo13mgBeg8JVQ88ew",
  "key35": "5DdLVhBzbG2h5HxbVtaWE1yVqjLYRp4DaULeimnaCfvfoVGjC5KafMrVnUPGseL5TXf2EorVWLxbt6vjisDeXQrg"
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
