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
    "64WBdKyvuBitFGnMqrQNmqdgCbCEZiH8bsBV5n4hVvy1vNkViEBUMztmCnmHEcNvFfK6SNcBP5S9i8BkQyXJzxLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LzyQeRdp8HwxeUPpcTpDxQELRLsH4pyvXzATaJyvEnLhkfFK4doXjW7FNSTAZBshDgsBQ71qQVCxHnGe8QBE5V8",
  "key1": "2Ypd8sgC9dh8ioMEqPXAwT6KYJ58xQpNvb3zdnj9pu3Hurij8M5V3dA8vX6kuhppuuT9XUYJUH4qrUTbyBxkjn4X",
  "key2": "67YkkBZX9ZRkztrM6ovrQwewb5Z6SggJL2WTwRu3Bp4XbbEvKde1BNpMZnL3Eymqr3KG4MmCHCwqJwn83uNKRZtz",
  "key3": "2MrSXy3QMsT4EjELBB9ANMaxSyjiypqUEwd8yGckvZtY9QzacGFp7D5tmRV7XRCkbfT3vrZZKvWEJPCYrHHfBx4c",
  "key4": "5WrUDkmCnyuAcxtcMKFDCUBGyAXEXuoLqdspSBivHv8WvedBJArtNz2axUsMFogEvwxizbeACWRs47uYSx4e2UrA",
  "key5": "Vaww5RA9h5MLWiFRzxRRVLJ6uhTx2uaXymqtKxn2S1iHFU3jUVkjNEwHXHZAUuAPu2X3ynwobep7zij2tw5sg1c",
  "key6": "FtwHNiVTxc7yH4C6wvdrw47VrtrnyL7zhPGcKAs5SiwzK9mCWy77NUjbWRvYeVTsPP3w3cX5B3TJ9GsFoP2KyiD",
  "key7": "QGGeaezgz9J4eUBW9Arw5Wdd6jgq8DzV5yF3gceHNy8i9nkL6CvMskizhTYTAJoB2SgX3nAvooYFMWhw78rfgSb",
  "key8": "3HoHWbDHc3UwiBFumvWWVCzQwS7yZvBCF6CykHoJEtJTvUbn6h9QV3eVDsL26dqMzaZorh4qrTQBwLcomdJLhzbY",
  "key9": "5wijCSf8YzNsPGq8ehkCt9AUAFRPJNeWgVwDhAMZEnj5s7RbApbevHAx8W45uQXhRi9SxQzPKStxCCh84anpSJzM",
  "key10": "L6aWBp8xfcijrVRwLYGe4BinBcDUkNH6YuJriLDTypi3jj7TruvzxdsLpVhrntLNaUUaMttdVZrxSQXD5GbTxGg",
  "key11": "DLzeV2s2ZGiTTFvnNsL8CHxXThdPcehWvgFgjv3G2No9wbV2SUw8fqpfLsXsPQZ28WoiVE3witf8T9eU3ukHMmy",
  "key12": "NL8fYhuq2Bgz4o1hJHCwTCFggyCNV3R6d2ckj8CfQuhEzs81XAXYyHtiz98mCrgzD81pHpk2jtpv65x44iXYU7e",
  "key13": "2EY32mfX4d9bvCymk2AxBe6DGFmspBQQWdvGBKpGBDCewjxaTKSbB7pYhScyxejgKsZpmontTF9A2pSwyPYYPtNe",
  "key14": "2QBLWF3pFpWV4e5FYCP7KEhSyteSYkGcUTethu1FxStpEtou8UizH636HSTtxbVk3DpuSErokY2z7TuDfHdYn7cw",
  "key15": "5e5LqykhNysGfv6bnvXk96iGJa42TD32q48dRNHFrtx8U2a7JFy71AbDDtmGq24sTgriSRG3evRX5rtbVLGuJWp5",
  "key16": "9BKa3ut1Mjh2wC6bWZ4jPALUE5D2G9zHcAQSF3jbDDwYZureUMaASnZfS9TJydvgffyukcLntumdHn4WVWFsN7o",
  "key17": "sCqdwA6VD9RqLn7PgCXknS3sjhZGHuzRr3hCFJfXyvtzvrGBYqKBekNZ9oVkySVrP1Wki2N1JReVYwbwRfbbHsB",
  "key18": "pnrHs1y4neYxdWRgJpPf9zjsH7gnY1Db6yvj1Xxwfe44hkbmNzZEqX77W7953maYvYtLQoWx9KTg6ETfF6N79Sw",
  "key19": "3sKpDGLjxh6AkugyL4dp2rU8XRnX3arEP3vPWjTdwedxC4VPKzqtshYChHzQaLSuCpJQ3qAvDsXDhKCuS3XpTAbc",
  "key20": "5RSAedorwvTZeg1DiCs2avyJsRPpNnEene4eAR1XKrLzeaXcDmriNjE1PaRB3XfeApbttz8zG4iMHuRtnc2Hp19U",
  "key21": "38wkCGyHHrW1ZFWFmU5FkfQB8JfQBHCD93p3Vxcm2mMiMd3KfP8fFhcz4gjLqdbThrTYhH73w81QcXMgXhxJu6kb",
  "key22": "4mCgGrMiPrkJ8a9f6bmJSkugr9qdk7dwLfMfHUVotAa977oH9RM7SGCF8iSH3Wqp4b48RBJD1AHd24oVJdyW5C7m",
  "key23": "2ipzNhycGuDjgAwc7vDVPcnDky6vKLKsn5JGU4Cv8RRFDZBGcDi2yzkXXtPJLZeyZPuKJWZ7XJ9Lxc7Ls6D3PAGg",
  "key24": "57eeuemozj6HvxcGUDs4nnbhNwbwrgsmyCjPVqjVwDVb22b47Y4vDVgqqFJG9sC53uowaE1MSmm8LXa3p4JmJUA5",
  "key25": "apuux5FZ4jY2fwJGATPwxM8tVyx16sFSTmJPfTPfVcBZNuC9f1Myu72pDbayKyjhnmdBQrAjZKmwxYfmXMXJitC"
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
