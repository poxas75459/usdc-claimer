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
    "4BncPjpREHNBcN6gd5UteqrVGU939yyXdDF4JJ4QePiqGFHmz3RED95PvbgUQ5ttD4sjeKqQwZAxJhY4R4wQaKVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ApgdfUBWd7NEWgJfQzrKUWVcvK4aEyyLxZk9KDkts6TwX5x5yRFaLjCGbFZwgfngbk7PmUJaq5jwyXbeNyjzmC",
  "key1": "YtMGXACguv9DdbQBCp9LkBwePHiujMQyW8StXEz5mYDJLWaPq1YXEZviAJNXqTpbDewsF9ibtLHZcxjzTBEWPax",
  "key2": "4yrET54JjdJz4M23sMUqNXQi379oT8AbFdPJFbayEjmXjJY5URQD54uE7tC59PLTfdVbtVczN3ingLuLamcrqBmG",
  "key3": "3eeqex2PUkt7pkwm24wwDHg6ctJDHDAfQpsPbdqC5g3kGioipG16LBZCbKjDxrAMoXRCMMy6osuLG9Cby5YA7nVq",
  "key4": "PQ5Vy3yvasqjzd2raKV9q4Y22r239LEPP6H7SmKpCKHpqauXiEsfXULPrwMBymnJGkynUsSGjqcbnPqjXkW4ksi",
  "key5": "4p4RRs9f54BNb7bhyq5CKw8aGAJN5jk3joJitbscGm5sjjhNFVmBMTRdxkKqQ4U2V8vXkmt7rwDwbaJAnfRQB4VK",
  "key6": "5izw14xZ4ygQi3RmhMpfv4uvSHuNQYq2nqGWDtjUeYBwCoNjFALZjHZj4yam4RU9SfyDVNvAb3J9oGLEwhWEnuHK",
  "key7": "3rZpeX5DwNsngXmp6kBAbZAWw4PreUWHYTJUdmcgHg7QHZxzg9cwZUCMkuosKyfxRp5gf4nJEX5siAspAUJCAysE",
  "key8": "4Rmo87YCTtm5zGodr2HJMyh4P4UTzszPNQVCBhmm68sm7bsbsMUjfKqX9KSY9Ewoac6kKJVn64B1VFdmHeseRf8o",
  "key9": "59mNdzWNYf4ega4SQVxsoYAgy9Yy2fsfK5YhbutTJWdZtXi1PF9vVmfncKCebqHwqkRUZ2boSm1krJ21TmymGxzT",
  "key10": "2fvM8seHg6k3xzdj87DUWrjfh51iDmPQJ5g7HyXT8voQm5D5mFzhqS6G5zYAA2Mg7y5aMfbkFiQBbBZ2X8eN31aQ",
  "key11": "5Pxg2ZYXREescMeAJgiUHoo4iTEoC8JNfaxSpP3C4NgmMAq53fKgFDnVvNsBcSBXhW6NkaWqTUmQZBLcRypt2Jnd",
  "key12": "4bUGxaxwHh4H2HM2CsAFuAAt3a5vY4RdAv9G37xVmwb99WpfNCFmr5kp3xC1HhTgcR1KgKXr69EentjdbuGustz2",
  "key13": "3n83P94JJhQEy1aLcDPF74VxXjt6aJwHn3eikduTXCPKyU7XQrMcUjpukNU4Rtq5CsaW7aSjTfEyMaG3vgHfXw7N",
  "key14": "5xKfxeaYvoVuJHw8q2acepXH24qfeEPoooEFqnRpo5WoSv1e4TVDB1H6dt2jH9PWgLUBiPmMni5kFyay29RsYRnA",
  "key15": "3FyCn9uKvuXsTJg94CRycMC6A1L4UjExwWy7ZsM19Qkt36XNZh3MoMKywygXxRBRJB7Sr1PK8nq2gCVTfUPML17s",
  "key16": "2huqsNdpf5dhkaGEhYkLSGn5tVzXhA8JBR1ZAqWEvAfgrPq74m2wyFCjjU1QiEvLKDVTqxbLQvb6po4zhVLkw4qv",
  "key17": "59FrXKMdggjbc88ZgQa5zrKD5K8ivkBe3eCx5S7Rzoay5uf9qv2qLVKeuLUJkYboj16ePCdg7DKGAUyswSyN6D5u",
  "key18": "SEtPw6r1K7ZfTzb3CWbhuncnHD7aWFy6xtgFXsQSC3ojjTVZp8tpjV4CN2hGxM8bREi6iMFAZHD8ep1Tb5VUGcp",
  "key19": "2E7FM6HiMx2e4WanobQL8B92iM5N57NijqTmKKGmmfBDeueD1ATmrj2LdNMBcv8TpKMLdCwCGBgAovdBwou4CMc9",
  "key20": "431REjio5oTNN6CRhiv2samq4qYFANF9JtpiAXfRwzjXu7L2u7FVT3wENgpyYTJNKZdp5rHALaryYMBMhxRrkJ7q",
  "key21": "5pkngfA6GbHLU7Xq54aTnLna3xenMZoN9pFwqvhXDQNLYrrRq7wrc3N186s6aPA3EHQCi3TPmP1zSbLCuynPNqac",
  "key22": "4dun1CkibZXHKLxN9Z7VHBeiud23bPXNT82XWXTzTfKMvsgh8YHGjSG2sEykWjx2cYTdefbMBgmy9e8sQq6iBQz1",
  "key23": "29FzX1bfck2e9GzKjXquUPMizaSLscRqHryMQxFnEUx5nKiybPepb6NrMRSpBvMp1efkgq27mLXQnQqxzEPfrdrw",
  "key24": "3phf3mkUcG65PHj35JheQ8YdXFf1kqJqLMDCEyLcfe5voJqgNCgbHJQMDcZdhhAGCSqzVAajUoax4S3qFzcr1pTU",
  "key25": "2eGV1ZE61o4Lrpqyq8741B5V94FnDQXbuv7R91AJa1noQyKSzw9YeLKso8b8F7tSbp89nUXgpchqLSdtqoDdH4YA",
  "key26": "4HBeunwSUN7zcfd2XuKjd7LPrZxjUkwivid2X6TH2K4qF7jK5xrwhQAvA6NzUksTEFGkWrvBriM8LhbFVxj74CaW"
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
