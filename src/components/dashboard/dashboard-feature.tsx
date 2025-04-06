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
    "2mKtguXtXZ5xxnKA9pYKD67D1Z3nLo3TDWYruEGEYYkxv8pxmCv9smNqNwJ9R2RjETvpKobaDBvcci4mLNp7YCxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22RgstXVT9tJ3tukPEdV4T7voRKSEiPaKaN6es3gsuFiNcgJk1NQGNdUKcqcjA7o24qh4gbV6DQ99RJ1PfzefD1w",
  "key1": "2vqQ1z8vi9waLNiEhA5BkTpNzLcMpKj5ozUo69rXoiJwSa7ZdZFdraHw8nV2HZ7jfb816z9Vy5JrojnDJ9SqDJkU",
  "key2": "2BYTRgf63CbNh7HEArj11EoUdmyCyfnxouvgVCXuwF3gaesg7rQRJ9zi4ZudmoManeTAuyLFW7GWiMCGGwrPazFz",
  "key3": "2Uc1fi66pTokVCEM4U7NGWgLGbECsTud6BcfR8LBMErBLyzL1nBDwCod922ipErt3Rr6kCC3KWLTiYefbwag3nB6",
  "key4": "4y9GTh3LFWDSbVDwwQRGjXCsbnDfbrgBvXd7B68GqMRQxM7XFPuYk1KUPKCDBJr29NLie2y7cUkQKcsbRVqhCmB1",
  "key5": "5RYfZLuXczjPw3tJzDTwf2YGKtRNmBsZYdd54m822upgRUs9Z8vgwLppAtri769UjiE98pogBpuKedwcHM5RLCQf",
  "key6": "3pMNiNz5V3qgvnBsYgitYk9g2VWrv79D3STH6UZHNmiVKPBTYx8X9U6tpRguHhujKYVfEBhMtuVhGcJ1nQoJD79e",
  "key7": "4NYT5jfbmQ13jGugSSn112Qog7N6iYAk92todpfWfkFHLyPwF53snsf3W4LXjmqfyes7PsEzz5DYx2yLvW42KpYt",
  "key8": "2fzsF9g5KtTc9e88d1cPh3WnEEq5Dk4BhpAHr21VMtHGzskm5uNyCHebdG5pPi7uRxsLDhMXwVb1p56yTdhkcqhG",
  "key9": "48NvetbPdmhGqnGPcZcUe9AknF8L1A73q2CHMYVSPkb4RfPpF9waz9vetFLKAvEf5oDS7EPvHX5eNmNrM7BDvUgo",
  "key10": "3wrJPf2WKSPmQ4Kv7iYm8aJjNRwBDpyotdQUwUnsjJkZAi2BvvyjTW6k1zZQNGL4YjsJdThDRH5v9KS7aSJp3ocH",
  "key11": "3yYey81oZPV8KT6i9J7PurbmvGiqD1Tuz6bxwXvxaw5cACNb7Xhy7rcaxdyGynymZG6cS8zRuVoeHVsbc76sxXXT",
  "key12": "24gU5X4D2u6VPCkQoQrHDtD8zEo1u4XdnmFiTncj3WECin15LJbAjGLtWgtKYvmggHhYrZjueVzT4L51eK9ZzrQT",
  "key13": "6o6Z2ure9XVVCWBipLxbNP8EzN2WDULrfTrb7ZcQ3NGo2H81J3J4gH9F2fLJsAkmtX97FxtioXkLqBiQF4EjEar",
  "key14": "2ddBR9gEEVrf94tyyrStm6ixKqdcGA3RA5RSeDHZjn59hL7NPvBXo2FGBTa2njPqqWUA98w9niWbcpZjgsGanLE9",
  "key15": "gSBBn9WzgXZxyvLvCEKupbBdjUa7FqnT6gNvVVd3QHy4jcchbjHwE4Td5BUs4ptXt6SCFPAqkXSEfmrJpjQ8sac",
  "key16": "2BQryzeuYQ17HbD3zsScvEWtefYqdjw7fqPBZPAW61RJbebgGupYbXVnJh2GDVWvPNsCG9Df9k4avLiNe5JXudQ4",
  "key17": "5sgdi5jDu1b2WktzW2DM5xDRyUa6cr4MEFqHuvENfJ3EUwLWVVJZpNk3H9cC4q3aB8zpw8mCn2aNpDMFturUr6cy",
  "key18": "2N3vgRYK7NA3eTXKWXdg7MEEKeMiNKVnQBaU3rWjN1dmVVhYggE5DuERDSJFDGbES3cLjLgGY6A6LvwCze1kyDJH",
  "key19": "CqdK9APPZfadmhXaWWDaic8s9dMqhypkmiFsmbQRwDKreeaQL7mkmVf2JAG7M4FBQX4DEcv6aCPVfBVWUQf3KGk",
  "key20": "5hT1ibt1oZF3rn2b8zhRzR9LttHCMkf5VXE4yGqHj6EEkt68VuLdK1kL5P1n16odpsUK2A9agbPqeLDTN8JCz12B",
  "key21": "2Rdc5JEbF4heVLVVDhFhSRtpTyCyATzG34VGtCh8jKxzt3qzpt4tBVtdNfpbtwXzFuBLU1BTJSrCo3b3UAKxodVA",
  "key22": "5Tt3Ar4bLgFdQeM89BiSWq29xyhy8Hy5o3sZYx1N1M2QWsEkrxuREHMxTbxXP7ZJxnw2JozHgyBg4z5rmgiRcgPR",
  "key23": "3Ro5UJeFfLwyDejLZ9QETN3QbiCZLnFKTvURHNusVymo9GX4eGQdfKBDYYotM4pPbejL6y9Eb4Kf3SWrwjGb7yvf",
  "key24": "orAbfKCjfgq3SPfz3MDFhRvuUkqLD9zEDQcSBFnHTLqGRDtgwWcBvhv1bhvJt52q1uJKRx3bNCfu1RnrLDWXQn4",
  "key25": "LrwXAnjqUB4Ph7vggTcCVjHD2DahXK9FtdfigppZxUoHihg8VEg4fkmhsEBRuiAzF9Uc2gontUaaLCU7YHDESnn",
  "key26": "2FCv5gtHSvk2YFxcRoqcskSL3Z9acqscnz4ME8j5vh1ouvoX4D37BwfU2rdGnWHexeTFLvfPUYYNZGNrGAqXqcdU",
  "key27": "kxe4hjE3XKQ4dg1QSHenEvBfHUhGLpsX5ph35bNAEjk9amnBca6EQkuWNCkXmZLUyhPP3c9BkpXAMsEj3aU3FRN",
  "key28": "2wqYiXSD7eGy4TofUUpqWoxjvB7ftm1vcqitdt31eb7PbBQ8tL1nNh2yo8ydfFHUdWCWLPSZbxaxkqAz1HQrj8T2",
  "key29": "4JFNiYtPdDGZzn2hXUaMgQJK5t6rUk5r7nkQbPAUSdhVzCs1miZm2XW3Eqq8zGYdpbHi4dtNDfjCCeqoqeStr6He",
  "key30": "4MPsXWHVUB9b7DF3fgJ1fqdaLYjoqKZMJBp6HenVHhupZ6gabmrqfdJMiEsbDJrtbC5zrAqDJCuRwpen8F7XW6hi",
  "key31": "52ThUQzS5d8ipvFnhLW4p98Ltyn1Z1Ng3y8FFJyLKHymPSntXpRG8UwPo5xmgiWG5bCXRzwMDFiNoN6PbcUpA32P",
  "key32": "3ZrxJcMompEwhR9iyZqDegkcVbnbQ6oW2B6mznNhEThgMFPpcq6P3KVSodiiss9NUg83tKRmf1bhkv6c1qz4jJG5"
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
