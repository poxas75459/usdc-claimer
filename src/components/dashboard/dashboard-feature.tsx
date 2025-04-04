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
    "385ivVTigUYLxk99BDuzJ6gTSMMAVUkSCNtiJ8ixuvGEpL1EX5WcJvdw9CmBRTarvwJf9EHQZ2n1a2whJgHLZSGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CS75T44aozRatqVNFyu7QBfcUQk8EkpZ4KCzrhDBVzc59haiNUVt6KXtQ4ZFBrkmsTit9zzRxAFHz8rGzwk297q",
  "key1": "5DNqzYKXCy6EEqy2jUw4EDcosTU29fEJNcoS5FBM3KhLTCp7XFpzaZM887QrSH6U8bYBQyNhXgcpT9J9m1M83S2D",
  "key2": "5JwRdLrNWH3tD4QYMrfdez21qLYj4uNfvRLWrqGAKzvEC6PooBuXseAizgKfR12ePpZnGUpiCjQyU2ZAqGW3g4yq",
  "key3": "5iXfoAQKeGvCcpfrxKV1tQr88jKdKbFqCaUagCNp9b3knqafHCwzrJeQncw3Ef9BRC9aQFukAnHomQjgmze15Eru",
  "key4": "LpHvesGRrafjp1Ahvy2w9tHdRu1skhri1Ce1p7nAvaCfUfXa5RqfdHAgLqEpMnUNzbh8hDk7USgX3k46FNCPtby",
  "key5": "44U4LQ6AVouyWrSj3cQ17K8gLMs55yH2YLwEezbdCQjcxYpJCBPcRaW1A9ENgtNr1fEXm2vS9nMtPxxFqTGFTowj",
  "key6": "3seABt672tM2yQiVmVdZJ7zgoSnb6XStJrD9iW1zjwmogqs4YfQhfJjNkr84Tjvzx9wk8Wv3JcchN9aVcxCW5TTH",
  "key7": "2RLVpF1obLve93neAastgSWH4yjqkZFT41hebnGnerLW96mqRytHqPhRFF84KYvwtiAYBt9ciTCQeXJ6XyiGhxfC",
  "key8": "5TZ1hHhMXcMEt8e2Rh4dtkJwjBAEcbJ4nHg2fUFShxsDNUE8pzDfAyQzbeGFGN6aXCQpMErBVjR6jBvy3n7MpH1F",
  "key9": "4qXMnzSinvSF5vNYcbeL4QgxqkDKpqHyVB3JcQkzhRecyS39utEUTt1Gc3cSXbDjzCmTTmBrzDYgK54ygHgXWFPv",
  "key10": "238ECwy4mXP1hZ6dATucNbQdnXYzoND8GodHuqNrH8DbzjYLq6UgXF32Bjcck3RzNYh8ruWHbEVBoAHTmZ4f3Nsx",
  "key11": "32cSSUXz68zJMmnMRWpcEd3mwYHRKDXDYvDjr5sCoGq9LyPcsbXFzMwHkwStM9qe7adpqDkdYa8SFwZRV9uoB4FU",
  "key12": "XNUb6fUydcwrSTwU3ASqoZPb3HGasUkqL4KyLnmDcsmVpPkMXgNhmi4ahULzEovKknGcrHoiP8qAKJAkJumeSrM",
  "key13": "5HYmf83JFTrnHqdQiaUWBDFHQw3NLdnpePwkGPdjCJFmiYHmVkPH6CHXDWYh1fihR7HK2DzYQ2bfEupqcA3EQAZ",
  "key14": "oSuxCtqzdTsWbpReXbV8Fs9gXLzukXLyXFBvmg3cwDzkxMY7QVmavjKd5tK8ctB2R1XmH2CKLb4fmBboXGDNvww",
  "key15": "2t5EcVX64L51s13a4nAqm11LrLYsydRvLtFdLx4488hF4SVcP8v7tDRXmNuFBEtW9W1hWQyqsPZkfmJdW2YtWJBE",
  "key16": "4wZcitpcvXCekvnD9ym73Y9FrDv49sLWZz8oCA1u1dCrsAinLRuHfMC9zggw7FN5KGQT93R7SBSY4dR2fSX3Jtuh",
  "key17": "5uj12VpQjxue2hVk1A7JkA5U3UmbH22fLik1g8HoBtSYRNSqpWm3k9eKPEN1XzM5fwkfUfSqBTY9iKuo7xheFoi",
  "key18": "FhECmR1oBxXbkApo64dM8yM39cP4rDxof9SNEBNXdiYNUxGRmjSLXPJmcFGYRJ5ChSjttbdPokUMmxabsLHZhsf",
  "key19": "3qegBtScNjAgPK2bZxsEntEZH314QZjU8ikq233FHhnfg2Sj3xs5yMouX17y8RFDEUhkWAUFchJA5BbRxXQhRnXF",
  "key20": "vRREAdd2CovbT1RJdXYpUegGwpjQRKtQHGiVMshxqpKZDxsJSjhpvVxTQ21Hq8JkePZCMXX7zf4aM6yHNXzZF16",
  "key21": "5tC6BBKn2v9g3wSDWbJdtLqb1oL5aS23N7kjA8UthdJMy5nZZcsy7S9qQT6taWQcu8fiF2KdBUSQ5kHRXyVjp4VE",
  "key22": "5AFASgfNfrkpFkqmrpCVDD5JUia7T2XZzwU974ho5Z7D1EpZSNDyCBd9dpM594twL9Edz3DEfUkjQuxELZhcLfpd",
  "key23": "2kqchZ5vBcgzyQs8BHUratXZWhpgEoDx8xArPMkMMZeLHje5T8tkZRy82v1Y8JBTY8FUiTCTqQHN3kiSw3G3jnaq",
  "key24": "3Qzc1F3VKMBb3dooacQnC8R24A6F9XXj6x1FNs7bhnGVFdp7K4L2h1pcinS5N4WMadohJuAfuRac6quCxgjkTkqc",
  "key25": "4V1k5sLu9uGYF17PuYcFV8jNB8hUXWYvPdNpSFBjNEzwbuNoCV6q7MiNdknThhDL8RQ8PJ8zsiNmzYMFkty6N44d",
  "key26": "3wPoc3XuEms6WAYjpwDZodvn7VW9SXwHKvkEsL8HuFgdmjBxj15XoVG1oAA7soA6Ckf71MhdinpxgFDWHqxYRiQK",
  "key27": "4vfNKrfRepoBeTviE74M9iNYKgRj5Y4PxayBBpcAw56GKjfCADxgLA8nGpVUgirbxiLANWMUQHLpEwJdcUFnW1LE"
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
