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
    "2LEGmNKrHaUs2ADCpaYkZJq8uPYRbTaTo7LNQiY6BxubZa3cgxfSkmF4DpQfw4wZMifwS7oJi4DTu6NsWyfKdnW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TPf6dNJwhj6Heh9upVBjzBUEfYbALNtqgAJrTmDbeXgw2y3XefkSDa6p5QVCC3BP2RN5RAkmeVr47P1TFfzRuPR",
  "key1": "5D3UYvmRvVhUnuHc2sHGLguP8qu4ZAutL81VMBicZ1mCMKjD2yXopjKDD5YavxWpCNGQkKoEXcqKw25CJbYmAnBp",
  "key2": "3HgrQJQvvCcgk97AXYZuVeVtHzidpxGfo849EW1EUxZXFLfm5s1sA1xYhG3ZvPDfXXZv5BXu9hi3VPYcDKsFzyQF",
  "key3": "2ioTgMsKR79AjBZTzb5S5SkcsQZZ9VP21sAzyEUjpjfiKAH29A56kBY1iyn4y997nHsmUpCEtEbk5b8raopABL9n",
  "key4": "2waJ8PAb5zgjVpXgvkDK1eJ3jEde4ZopfLYbBmjSMgnH9LewUNkmceNUvsVKMBcgiXvRXvfKydMx5xGhL5vZ5uX1",
  "key5": "4G3paLBYXjBEgaDzES27tGzU2Fzh3ucvCovNAr2AdDgCSx34AEG4Q9XWQRS5nLuzdA1QXd9jxe9ALsmBf5HZZqHJ",
  "key6": "2G9AbeZtV73BNEwE9s51UfuNTmahWEaxDGhLPXxVYSjWcT2ABPedkqgK8gpHNHLviNFUDkWcs7qrYhPfjAq43jFf",
  "key7": "3aLc2GwAQrUFDduKdueZfavLm6VgQ4AciSBSgg1u2HygwpgsYqQg44kKf614tUNzVE4ny1GBkACG47gEcZwW3BaP",
  "key8": "p1t1mrRHxtTyMYrQvZBs5Q4u5STZMFgfH1TJaTogSUjcUKE9g2JMbVqcLUn9jcMtWCWnoGc8sgkzxKHKhWDzWCY",
  "key9": "3Bvmzt5aKSf9sRvyt1p9rsBdzox2mcpXWvj3wyJ783oEWtyLoSiqZ74bsniAViNo6tYfoghHEFabXYuCxoPX5Uj5",
  "key10": "3x12Z4KrVrEXyvZ8ALpn79bRwP8aLTX35gz974PwZ1XuL1Qmnx3XCyCyZC23zPWZ1xtfNiukmyMYeMP89eoLaqyr",
  "key11": "3KAx2qAZ1zVm5SZatWUgPwfGGs4HFy4F4kSyuJwRZktwTcfeFdhpcngyw1JLoj4FcCsEu2myfRKhFVQbcqDfYvYM",
  "key12": "3GvuwQUwKBneDguqe4rf7Jm5MVp5ySJF7UG4eFse3Z5ZdBsHurv7BZRLeLuAkeZ2GAGy3T6PxY6tFSgRKD2mu9Fq",
  "key13": "4n9tCxD4X3rki2ML9STnR4mjd8fFDdLMqo1LQ2mf9pp7uBNyuqGKvLUBdjaQC3V2fK8SaMEPA1RPDioXHNy96ELt",
  "key14": "4tginMBGc978sAuvr23McdURrwFq335Y4s9wksakEsLWkEXy9eKHvZ4V4NB36CnzWzZuhvDPi2ku9irvEstrcw3o",
  "key15": "qGPJ447m6vCHKGHBowQ2HsVpYaK1jUX8XgeJfsqxmrVnTvHYHTXMBwyGofMFFjpvWq7mKEDNfmVKoVniid5KvBZ",
  "key16": "2vtuez7fnvr7c4vPatBKH1i9AbtRG8aDfnzwFUCwUMgZY5mdM7csPiW8si9vCiQZ282u8f5yK4E5Rn5X3Dte96UK",
  "key17": "24BArw8NQsQ6Z3x5agtmYDVaGgMx1ZgnknNYLaDpCCaoP8pWmk5iNq2UyG8tEp1Qv9nLww5v4oewJZriYpMSjF6W",
  "key18": "65xsbMd3zsHjxQ9s73LFKELhHT2WXemUqYGkhSETX7cy3UMuegAh3a97wzRCyRX6fp2ozq9WbHzRjrRyh9eRHGRy",
  "key19": "4iKVzA3P8DRi35E4gi4eg71EjcBoEGkj5Hp58tnL2SKViRxVFc15vpuvPDG6HChu5mhi38C6ks3y8nG5eyGXRZn4",
  "key20": "XaWtLEqUTyu4vxfpJZshZqULXTSfAfwJe2tTSLsGGNMw4QsVza9SisGr2T3px9JoSmYFdLY9JrcUjbPnMwbcvd1",
  "key21": "3Xu4Ujz6scM4LXtygjUviZJYNEuPVGog1NVWiiG4HP4jvAUEmx6vq2tudFy5kTAhZsmGHwfrF14usMRZtCzPSiiF",
  "key22": "2TEmLKP8d25PpNSEMB23XU5cZPVYa1PF1CJbtwqqdnDDWXQEFxRJUJP4T6uzJLSubUzCtGZfCs5RjC5iqGHnxfvD",
  "key23": "4oE95p5x78URV9uNi1LpavB7wv4MxdHKLxJaHBq7sJzYZdTXJWNqBTKiXGLvoLWuRj2UuDtRpWAPonjFzAmzgd8H",
  "key24": "m6adAoTowYUwSzZZ8vaeKuHBZTE8Nz2bUGSieAMunN7oARSRZvW7zUEvV5BrYVaNa4dyo6MR1Vby6kdFRj7XQK2",
  "key25": "3H81yVJ8HiMUcWvGpody1NJ22SQ4g9XZ1q2ihq8jDBcUCt7qrB5QSoVAwdz3Zpwx9wgRUkaFbFUjTerYHsxjpmyw",
  "key26": "i7Mqj7GXgvjtBM16YAxfpa6SFpjnDg3uLFrb2uoV6BpQRwDM7J5A4DKa7a5pFxAYQCe2KykQXFmYcZHtiD7aXUu",
  "key27": "5PTZZiyeET53ft7tTBjwje1eEwH2BiyETY3MEXUXhEFriovJ6CSgTeMwFKc2hRWFKdwMZznkJdVS6KpBiPCgHzyp",
  "key28": "2C4eiodukUdhGDnrWP4YpooSuDetVe8etTFDwma7M3NmLP8evH3fqLkYeMTpBLmYP8YVT24SRdsEt3uXz9UraXJ1",
  "key29": "3CyvZiedbp4JpKBGvtyhFt4HLpcdn9xPVdiZ1qDYGmoSdFpu3oEEJgXapxc7v1SSfw6BfeMMBTUNoY4YvD5fwhSD"
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
