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
    "2gry65KvcvhKYbw3MoLMLFxWD3mQfJ2se83L35v6d6Sv7LJCDSKpzTDm19xY8L59EHDZV2eJPHzoiC6xZ9doX5Ji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jx93Ufd9HSFGSTLWqCBRwiFfdZmLC2YR4NNiVNHCujQ5pXgBSUqb5Znb3SK6rn5WUgu6mwWQ9mbmNkmtFrRR8EJ",
  "key1": "rdNNqapz9wzP1hVokH6tCHyBiKS6nqnXinsruqT4dADE3R1zDYeyorXzxF6XzF8DAumNzK5kkSBhoRVzb2RSed9",
  "key2": "4B7HN4rAFhwXWKvRvXJp9JpbwF6CfVnxgebUhzpZwGetm5rQsKDGUepH5t1NzfaWBEPXGUwHQxHSJ5hV9dsjdTsZ",
  "key3": "3XxJ5UTfd71RD3XAQZGdQpjq1UqnLJ19pdtPL6nBXzYYmuhizCED83BQtSNUiXjoyQHzeNrnE8nwheu9xKQRGqE6",
  "key4": "4GYpuAfovV7J12wVYFu1C3bc4vKdhDiG5xLx6NuXAHhhc7SAXncphgt169tPRpoF7sBGabPRkWF4PNGyGvWCazH9",
  "key5": "5eBuXGGznh6nAPKQmbL3avwiYjepfFEuAC4JS6vxcD8eNGfk7CwQCaSLEgQ5Ts7P5EVqxQ8YWi7dbA5Jc9zH9PGW",
  "key6": "2rutgvrdvgnTZjfSmFSEDjTogYksecoA4TCLEjRo7DTjsREvWVjf3hxnbfnjftrjuet7mvF24v6KKNijWi3MZoG1",
  "key7": "34AheTAWGWtUJpkSpYZLVYy1dzfYoPYidFvjbMWnKFXdsvuPqxSw4nU3iiDh6H8umdGZkpCDobK2VNKu96g9ma3D",
  "key8": "48JytRVpTw1vjB3sxKze32UpECLqqXaKrTPkjNBotdjsnabMhTdFH8MC96HmyoMF8PdBQGYZA8xRMGzBUa1qRj4L",
  "key9": "58KvtrRsT8wreZ7Ts4gi2vggALTL7cNiYKGgkPY64LR5DWEZuupoeTLeZcxbF7zLua1KYsfY3benEsvnbraiGDmk",
  "key10": "3aHq7eB4qFtWRymtQLBrQpfVia5zbYDgR9u8Gg5mZQB5m1N8rWSoi5F1gAeHbmYocLbnsRGdrJ1tZJt6TucTJQBv",
  "key11": "2118tpZr9WHUjAsGBvaKSpU1u2QGebvwpkwRUDcdfYWzosK9FvgBtQPaRfFG2uVdf3ExnZL7sEnH9d6QjKEVmwRW",
  "key12": "w4gaQHUm4h3jTB62QZXowKUgmzSWywppyKAMnYEWPQqf2Nz6RUVaWznR97hip4rHXA4pcx6URN4tnKEnydDwxMb",
  "key13": "jmNvxeqdsWFAm2BzrKtTVhWxXACMUNQQJv5vJizgwsKQB5ArjdZjSe3ETcYpoN5efFSD25tQS2zzYVNWjkyirXw",
  "key14": "2c9g1Ug2L8fSTpA2xKd2P4vfNtFp8oghrFxjZXkxiTeq1vgS7YmqVRJAyTHs6Ztw8Foe32TTYFkB5Rs4AKb4wwbv",
  "key15": "28idKWHf6PypUrNtDjgPQXTM9NkqdBQsYn24rHmwDcFDZekXF5KXPGKGA9JgMCWzi816JsCHUPThPjDHk8Y58aJP",
  "key16": "44NFtM7NZhEz9eoDm8an5nj76z3cqhvWcN7Ty4ViL9fJaP2whgv393dwrDPUKx1rfzy237YfERb9mF57nvya5UnW",
  "key17": "63Nu5jTM6Wwj5tgmkNY339ft51RApTXWeSKi3EuVeoRfgRQuFs2KSY8SQ2CbAteaXdtT8eAJuihCPb43392edjV5",
  "key18": "3pWKcHAhVxJPp8YvPPQmkTeAWkpyvWz8TinGyKCP8vV4Cz7GvTbWmtrXkKnjXjHTK3pPchH5N22ZHrS4fDYcufmF",
  "key19": "hu3guSQssYpJgwzTTbNSFdKZ6dhouUgmKuoqDBgomtkEXdjvNZALDyrJ2Uuon8GWLNED9L19xZzCkfT1ud9FRx3",
  "key20": "4VsBaNPnfmoYdz8eHDtWsL1xaLRQZqhAHm2oaJywPsBZAYxBncpSysKr23e1y2BaP1z2exXkou5j55AsjF9diTyS",
  "key21": "2WRB22PuzSha2QtyRB35gGU6subXHTZqGwWvmMPkYRPoYRjKCDw5KeomSdTmBwL79SPomMFE7xZqh4bjYBKtCxgd",
  "key22": "4ApH6Gd4KL9KxTeyZH5eenxoJkaUDKAu6fxyaYE2nQEBgpwt8WFTSo8LDNmBnAZbXh1PaTxSHYv6Gawifz8KBtsY",
  "key23": "2bWQQJRFKt4mjxcZ1sfCXFEePGAueBt2ye4GzdAjfrkMuUfg2CydXyNg8v217XeymHjk3RrErDpWUajQSfMSfS9y",
  "key24": "5hBhPdJ4yv65esbGVRTRszJ2uhauepwDQdgyhnCv32a3uLk1K2XusQCLZFeN5AkKvPfNwxTKnvXY97p6VZhryfPc",
  "key25": "4RRi29tHo1X8jfnW6PERgky71bdHtouQi946CCnvLiF8bHb2LU3V6qAHXjw8S6pgi7w6LAfvKV3S5SpUojv3A6po",
  "key26": "5TnVY1mXud75kM7wuM5X1gzW8vqh3tbeQRafuAcK6DjJAEnq3WGUWaja2A4FiACwwT5djDPNzX4kSfv8msjrdV66",
  "key27": "3geCfkKn5nC5aPi2UE4DuwKvH3QowCZkAa6g4WaKqCYQp4SZdzuXDN273wMwsaaMwaPiFyYN5JzWK3dqBdz7ZLX5",
  "key28": "2Dofy7me7roL2Az4XGrSNb31BHD8YXDmZDMFf85kJ8SvwS8X33FRFrpgH6ZuwYKQK8BmzUch6NqzoyfvbWWPqXvJ"
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
