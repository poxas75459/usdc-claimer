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
    "45vMWqLdmu35w4Qv7zEa2jGdJ2avHhwoS5BgNWLk9zyhZM7KwbpJQzrPCxWiXTXaWLrKWoXXvuuwmiPGuws87ZRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Hy32RtV1jizAdvf96zrCpc1MjZ6atyCd5qWiiHBsoE3nxrNmVy7NYs83P1Ksww2gMsjvffNuTtrRaUvrr9uE1L",
  "key1": "5S4goXpgFZGTUHUiKjh59uALw5gWc4oCP8nUjVermktJi8pkMRdnrUvQVHycpDfrXC7MDbuAHGwLd4V51AhULYfs",
  "key2": "24fiEYtWnKUe4boDEbXrVR76rfta4RGEh7LRRkLLadEnTbDsHZAWECbfEH1Ejw58p78ZaHzo36e85bTAeM392kEi",
  "key3": "5yHax3mM6Gs8kN3cCgpDMc47C7ykbXJ6ARHHsUEGWvKqgggz2Gn7nFQtYe25djqmTrxq4Wyhd7ndwnWvxrANf8pZ",
  "key4": "em76uC8f8Zd1em1zYCSsNgbDXE3y54WiWQxgTggSXLhQnDhszqswuScntquQHEJ33V3ta1fzwAy1twTe7raG8LV",
  "key5": "3RxUuKexjagCoHJ6YpoWJxfM3vbTmUiJYyrW7H4aPVXhZqMHtQNSC5d5USDFW7Jb7Y3RMX9McvqqeE2amthFWB6q",
  "key6": "4fqsGT63ZtEv3gAgPcUit3LBW6xfiKyXse4WnyK2a2xu7ftD5JwxZA86feeJjxuqvz1cRzx6ExxpQUvjPC35y3KU",
  "key7": "5ZuFxcMHWAnp3ertMziBxTQEnKseNAqaU6DB1LVZymqfi9UwnNRFfLXLfNV1NXysfumrwmNNTFpcGprTeP18YH2W",
  "key8": "4YyQZ1qzhmxrD41CC2R2BJPMz6V13eX8RjPVNEN1sf18PfKCEq5vTpUUDsZb1Dz3TJX9HFcYboHC8vcMiqAaV8wZ",
  "key9": "4aprnfqLZWJCTtUSo3HXhoK9Be557AQuXAowW6KZmRrqVvE1JiPtJHb2mvUznzt8ZacS3RM39KdiWA822LmFkQpc",
  "key10": "2ovgeUXHdsJWsNZgiiYnmuoUX7DrMm9m5UuxSu2H7WKF44EEYiYv8c5PBdow1vfJoARUoFFME86wjtEjnVbLgWkk",
  "key11": "2k7wbk3owBrqdYJn8EhBQQnPevc6ieA48GdrgAabJ4VpXSWr3MneTUX2d8RFoNRMCwhhUppWVUoFGWhZy9bgR6cD",
  "key12": "4dTU2uyxZwdCP5upm5G33WZemkB8B6uve9SfsxcG5xxczsRY3zdCE9N1PJ51zK7aytEi2DjkpG8UFAUAixG3S9Ua",
  "key13": "2AvrHBk7PJafU6FV6BZKwytRq4VPnhr1ZcR8hPTWwpLAKptYhNhz2jBa4x713eDNfu18KksibFDkx2dbe8UKNZGZ",
  "key14": "2vQBZpVvBcUJxPAy7NDXGtdsswVE1ZuLjjVF82cjmMzLubpUrgSrY79uMqVbbHoCyzWiFUycwDonet6FRuTeAgSo",
  "key15": "Rcsdbjask6tQnP43NBSpmoaBbJZotkvhghJntBQswzF8odepRzDpndxqLSjxMdLLGfnHofdAtud2xyZsqbsoCkb",
  "key16": "KwHBQaKC5XtJXUTmdByLt9jVfiCPXc9tHi5HWvrAW5XdZPT9sdV4w8wuEK8KJo1S8MaxQxGs86Jqc59pJop66ij",
  "key17": "5YXTJs8f96z431y6EHtUdeTGo6BrC95yofbmNAo1zRykCcFudmeQyPPX6bfFT1BHnRzpYFZB1dBkDqmbeuQi64hW",
  "key18": "35F7NPi7MjQrRPmWzbvgSMnE6ZBYVHzzQMrZpbGjs3LQzGABfH7BKDFfN5JGczLtcb9ZMnNbHsjEGKsHtHf37zam",
  "key19": "4ko3LKpokBSNC6VLGfyLP5um7bbJSd9q5YcfLsWLrv1dKhMBGmAvTyBTjvQWN5GSRD5aAUjQB4tyXcJZAjYSoRVA",
  "key20": "5GMDph637He6L8Qbod58mvoQv4fULCjSBamidbwKq7kEJ7cYshnSsKzdS5CiNCaWcCQ2iNKKiYp2CmhMaWENreUu",
  "key21": "4Tfta3SMrppx9UaZ8nW3JVCdRdLtDV6Ma8p3namu8cE4UKgBbDbUC9tCBPoNQ2c7hkXttKJWHvKt4xRpXTnNsAuY",
  "key22": "63K5r6Wyz7kSp3ydkhJt52U7mrGjatoPZEjdWQbNbMspPwD8QXC3fkWvHbDQ3yMiUaWTW3ByB34CVV1ozZKSducL",
  "key23": "3ZppC6FkZUh5CvCzuRu68pS2YjenxaP7jd458jgedQwftWAz9dtSPSASGje99uBR6azoiMfWNH7bJrzkkkCD783H",
  "key24": "XP2iKH54NRUGnDyPUdjRcYjFY9a1YbE8GGPJkDK4MS5dnZmLfFFH6nTEy2ss1zooCiYaBqKNTRedkU7ijb7Qf5T",
  "key25": "4o54PHoEiSqteSykRCAWB1E3Hkwczkb9TqctfirFqBoG49VcM8uHYdp7xcXbSCEuNDyo6NkRnNre9EacoEN86o5a",
  "key26": "25gZkWxheWUCE5gV9q9hCebLCpWqMi1RinvZHR7VzVW7TS3foX78psHQ7EDidBVghmg2Vwt1YgUNQdfhQqyr4fWP",
  "key27": "3vyhafReegJqfPhPXmyGkUwk95rcB25jnVKARoLoVnisGqd66qavns3aPxNTLvsJf6U2tmZtsTqWZPgXxwZxFUzU",
  "key28": "39vqwYTiYrdyS9JRkSZjeNXqkAqMJEkj28msS9m4EtXJkA8bxAN9bAgS55PVvhvwxCnpv9hQiNGu61gR2fj3kY7b",
  "key29": "4n7fkUBnMjXmB1h4orEbSZW3BPosrmXML1ZNnkxeqBhujv1v99DSqftpjkWSgdx5sQCcZbqdrg9mEFKxubH6XhNG",
  "key30": "4MA2mupbfTR9guUU4S7uPEZUznvaMegtXveQsofWAcfALGJ4Dr6UKmiMdKeR7E44pLCNHt6GYuwqEL8CbKsduxKW",
  "key31": "4DPHzHYdJsiPBHsgiRFeKfwwGd9bUryaeE1GcgAYzEE2NoPW8gLamucvnsH3wF8TstGBvWvHjsDenWwQbYYdxhrs",
  "key32": "2Ef8FeBj1cSPvNiTNFqmWxQ1wNpC7QqLxr7PXn5ic3kdXc4CEWrnDS78xWskPKfYmWaDDZQ3XVaZ7UYx2D8xjwaX",
  "key33": "3Noc8WZ3dNritStKzx688UUUXsnt2WZJAX3JDdCzbxW8uuCkR87PUBkZGvPcHCvBn1CLgF9rejj3K3XiEziAMCT4",
  "key34": "4eT53P89N1TPfBxUHCtzyugx581okgXPWNvMbKoYyTguM1u4tHvdwQFvktQDRsLNNyEcZTVDMJKKsEfAAT51A8He",
  "key35": "cZDchaRDSnYmeG5dnNCqsRFmf7qK72DoGUyXbLQryURp8FjkoibJEZ4wGyiszvhDXgKa3yPckFkd39dbrfKX7WU"
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
