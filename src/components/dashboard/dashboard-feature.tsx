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
    "5AyrT5hNVujTCkwP35NmsgjiU95VqyD1FKqKmCzecqVLAjjzc2rEu3E7W3RX7ii6panzhAMpnXt5Strm9srtg4Ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDapGytPB2ZJwAFzXFTne9FzNAWNANTaimpgEZukTvDs3mL6MF8o5ZPe1M5s2pjxCX1GUiexTZ13ANWsZGb9CoL",
  "key1": "47mxpPDoSinFwjGd79QPpsg7dX1gHPcA29WjHWEHbY7jy7YNXQG3UJnRCv1TQzet8T7bkv8LkXCeUxQbuDaFPdkM",
  "key2": "58TEpKSyGQ4fzPWGoMqoydAc3Acg8mCZUonhbrtY2q4Y9aQDxGZdwe71Rp8owwUkrJ6ua863sbNA5HcadsLRfKJL",
  "key3": "2zBFZsCNuxsoNFwvEfgBr1wQtn9hHZh4DhonL4ZMjy8sWxcizF4CZV65ZETETSnmd7vfpz11AiExeG45a1iM4mLc",
  "key4": "2gyGgytP2hSmXWkKtaWh7PjnBurRWGLNDvkF7N8xR594MaGQw7QiWcW7qWdU3NGMrBTyYbRVfpfRomSkpfKd1gyE",
  "key5": "5ngCGSaCsV4YHkTQbM6bq3ZY6zYtY4KfAA7WPREJ86Y5u1pLMx8ThVkQpkh5erv9v9dkxwQaatfiZCYtLutZ4ppe",
  "key6": "2VdHovWRm75pV458KtLq5ybrg5XbPoHn8z4MDhatkwZEJ63HpsLMRmodSYkxgJtoUTeziGdREmaXTB1T7WV1Nvu5",
  "key7": "3te65DnnjsH7rsnrhKkij679njiFL18GHEYFAUGdovieqTvF4t6KTEz5N6Fa7WzqQSNoKBMU5mgeLr3M27d4frN4",
  "key8": "5oTn7RAmN1dsi7hNCtA8cYcMoNhZuqbjBHt4Y9LijaGVcqxZU8i2N9DttXyz2x3D6ftojRn3G94UpJdPEzq3Lq1n",
  "key9": "oQSM1Lkx1BCg82UwSJn1xVCVqxvmg9rw7Ro7KYGgiandJH2iZ5CX77qXuY9Vzbh7tsi1SDVugp6PATkdsesNdU5",
  "key10": "4b9sTRjwGq3i5z8X7c1GfiLU3UA3FeiotQtyLz1Xs1RUTiDn6cEWrqC1PrnZ7YHoNnE6yk8PtuEoEjdkdYw9n7gn",
  "key11": "4RcsjfRHKB98zgTdyaiDEC4zDKNGPKydt9UULZeJecUdy1iGVzYnaHcPcPgvcWymPhUbQpG3bo6wdWoqMsu6ycUe",
  "key12": "4TZ2uCs9GNXHGKdYbYptErbFU3BcurLDVcfNp6JY4i7vfejnSsazqGouEDdp3q7JtBZgwHqCC4H7DYTbmXKJbto6",
  "key13": "2hzPzpYhprDGVyBqJjDhHKj1W3g3JVj2t8TwcDVswL4vv8dpHkGHKr1ihVZAWzrGYETCYkiTuuNCMFfev9AXAUwT",
  "key14": "3umMpY47CvZ3hEJFGXD1VV4Apbu9JKahTd3iCnicaxoTnyeLJQjXRMFyoVg7JSMQ9in72F1hsYVguF6TyDXWpM5P",
  "key15": "44ztiDmjSTiC7YpGs42D3u5C6xcbw3T91yMus6xfuUugYbQVAQmJmqVUW5D6vLvNK5ppcqER8yczX76GU5KNka2w",
  "key16": "3sKSK3UriwzACzc53haThFbWGfNeKebaUuWR5t3UkdDmEusBAgKkEZwz6qet3NSogxc84nTZ1LbrHvuyFEy2G1HB",
  "key17": "2p9ps58BCgKWfKRARUyKYW1ghDsdNFwHnUG1efYqVKUAj32nstrT3JWt1jAxGcqjnfLoMRxTG3rUVHe2N52wjUqe",
  "key18": "32eA8KyH7JcfxhcQXLFQTasTfGj7JxuGzmMHmUsVbwu3GJ6PMhBH4AEecpDGRAXyWegCkZNkrNguMcvMbv7KAs4K",
  "key19": "oopzH1MdXPHLZqon9AFAMB5gTqibD5zUnBvJ71941RPhxL2FdgdQ47W4nhm7jKxfE5XqihhJKQQcBqU8AMsodyJ",
  "key20": "26D1VtrJ9MTuMa5ZiDcxF9z8yG1KAphULsUxFyxFf99o92rrQTJfnAmDE2Un4m4CuLe1oaz2uM3AWq8c1vSs5mm2",
  "key21": "4XpQv5Rd2qMJ5g4Fvi21vTvwjzLeRsNA5UUKy2rUqDC7abvM2BjajmvCvb9LnLGnZKra6W46VrzL9SXTunSs5FVX",
  "key22": "29u96K8KyY1gqEKkgfQGyQ26VkhHDjCV9K4hT8y91s98Svd2ptZwTTxb1b4k8XyjCnNdmnctmhtbKbx5NGBBAXDk",
  "key23": "mBPqm7RpfbNW6d1oTCNTRvg6oSeS64sQtgCU8tKrpi6mQfMEWomUfNxhhQ3ymmKAz8yqiwNFq8AUtP1XjKyXCBE",
  "key24": "5UvakyeUhPp5tUBZtrsEWapx9yHHy1E72nMHhKeCeLvLiaf1Ge2P4Xfc95rHTKB59eMJsn5WL3gZ4XfSuPEVuHmT",
  "key25": "21oPFDeU9GMcTkU5QaRpm1n8UraT1g6qxakXgMWgtUnqh2MDb2mHS9jr7dXq63nogj2D9MyCkox9ANDYPu4GsHmg",
  "key26": "4YBhCpdLxnWvxFYJgpxgnVgJCcS4EkR3QP5SVprfyZtwdtkgfksjMXnZDUzJA1rUuJyzXqrw2qtdmARg38fxoM6M"
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
