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
    "4LDobzgLFExre7nKcsQPNjunmm1By4aVXmpj2yTHn6FnbaUuxbBHuGVZjzxnvdNCpHUp5VVh4HJvLYmnkXtiVLuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PsygDEHsiQe98kNy8mygzkykjTjQDSCfNaJfpE2sURhQ2oZftrWf9SgsPhXxQ15zqTQujLcemitGLk4kczKPABr",
  "key1": "3v25C62SqLGpxwJ4Dsq5gQHNMRnfubxRGGePaXqA1RW7qCcrLhCrNuQ7hxdQXdQ3EJYWnNuBj3ccMHTpcjioG3GU",
  "key2": "5gPNxgFhq2jxUxiCr1dndcioPPou6XrMcx6LRczPgKgYACYFTYGSwgXennsi1Zbc72pLCNQs1eHFkJpCNYq211Xh",
  "key3": "3m2trKNYwmRe19r8L29MNN4EaQJmaJoNE5GX7S6786mk8aVxHdCreBkRejTDZdAnmPWtdUBj23QgUcR3wR2vSfKS",
  "key4": "4rFKLDHycPxhCZZgjTN3G34ZLJPCyYg88XpR5SdfVB7xPQMYG9YSYDQPF5TWArcxmCHjYgZWpsLiAEwAkTewZXgZ",
  "key5": "MBDprXrR1rXYfyi7BH3FHwcLrqdzwzT2HLRrsMgrhxGriNR1c3iWmStataQsbEXQUEoZfgPsnXkTUxS6LkjVNF7",
  "key6": "57cxMTTVSZQTvjqvDCDrDWimH6vsSnh9rcWwLjnTvHGr43QukX1cFwB2WiMN4TvdGZi1MtaxoqRDSVFpDNXUTLCq",
  "key7": "59Qq8bkR41AswPWPBqcfe2vYTjQoT2zoYXafvypezxjAj1Cm2xrS7vssvWBqFr7yeiwES2dxdrvJtsqQpugmUp3W",
  "key8": "2oUKTUGfedfGYy5HrpwsDddmaa9ZgmqzY5ny2gSVgVVrbVZrrtnTUf3MWFB8NhxkzKD9rKaAufJ91zmY9LhWUP6i",
  "key9": "rqVJ2mtPJ9WiLYhwrmfNKyHoUZh62RXvyxhXFmL8cMWoceP1YCHrYVV4ME6qurqpZiina3MuLNWqVUaR6m7Mi96",
  "key10": "3yNdRuvXBbiEdUXKyW4KbuSaKay9CJJpH99RVhqaoNr4jvRjyzBe5DjXpfAbkAWSmho4AfeNc8yEA45ACmR4oxZr",
  "key11": "2BQqQZrEj3Au3x4z1ZvyhJd79n7wT14rvarD4sqP5tmbJbaJPwRetjjgic8Qjidg9RgVVXo4NoPEqdvKnn5Yqr8K",
  "key12": "5juDDjXGqNmvT48SH93aqRSARPkGhHNW7Ea6odf2v8h2A9UTW7tF2hYKQuUWjjsN99nHjUdaPA3QSdQiYNkgusUc",
  "key13": "iJe963nUp3CtN9Yn26WcrCrta3XRXnLPSpaPUktmbrKJhvGmg8fbXpMr8DAsmzyqKxAwMmsArg1j75qBPm8mEY6",
  "key14": "62DVjUZ26exusHeUB5CFhi9EkNG7G2GwSjygtZBS9TrpTXr41Wh8VM6uczFBFWL2GFRKBMZCp2NjnLUupJR2T2qR",
  "key15": "539nTiJ8Jo5WjMsXyZwkMgcgHWuQCDDbDu9UsmtLg2FYyiAyPSH7vA9hECuwFjhPSZuErRxG7JfZh1gTpB3ZbjRL",
  "key16": "2PvvGDw7Zurmu5dAAX2e4k9JgupTfbYkxLwk33JMNDjkyK9hWZERtMJGJPdLdvx4hN9sr8e3S9JrXX4cBoBoRjnz",
  "key17": "w1mnTBFev8Ux6QqdDjE53dWNk8tZ398VVcm9HgMfYfWL2Rc2FEZWv573NXaP7onCdN4E5oz6XEX5hocwi8WWpFw",
  "key18": "5fvX1a3Qiqf3mkNJnHcCyWoPvBtdEG1PDsXcJY5Ww5A3S5a2CRUHJtATU4LRGaC1LcW1T5sWis1WPU9XQ9GyNn48",
  "key19": "4ZvuaX6x7dRgo6akbo8CvEjgZ12ZYHyaGhZqEuncLChQRMZn7RZnGWd6SNe43cwJQq7DXJXP52T4QM6yyQtCYVLj",
  "key20": "5SWvpVTqsBru4GisWVdVftJPjqg2KFBTu7rHjK5rijCMoiByKRLZ1ZbpzQad2JfWoBUeE1DTASRhDH6LVHbT91Mh",
  "key21": "35fnuFdvqXmGNjM8YRXnyzwBNxBp3r8D9p8NENiexgW9uEHaMRuQKsBCSnpyJcsBnTnTFhWMm3iePzLiAyMcQHp2",
  "key22": "SJzP5eoG33Jo49MEQzqwdor38CLPA2EkfBj53bQBWuSvU8y5Wvvix2LuBfZeqpWnL55entNYPTnaLHHR66rjyGN",
  "key23": "56WmuNDnufKmmDBjMFpm7jwYuxe7X3LB6SHNDEKX5bGsyFzvDCefCMibrJUtYdceNVxhLVagvZUWAWKFbUT8oasY",
  "key24": "2kwYBJqkurm9VQLiNKjcXB68geZ5seMLF6Kpzv3fASdPcunHRhEuouQhkAu5R6BUfAnngGJY256He66vvCnddftQ",
  "key25": "5ga7HF9spRDkDnpXSqW3zqUPDBhFmtadPEx7ijG1bVogH873KmRWfEo5mToEfoefFMaiw6vKWXPk9xFujE1Xw4xP"
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
