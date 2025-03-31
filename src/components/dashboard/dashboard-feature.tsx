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
    "3RfBeFiHZictiqSCQrTrQYvk5WU1NkmH8n1F1nMfmaL7P1RFivsPmWPFd2AbfXgbhQfXJCmoL2E9ko9N1wmepAEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hj2SigmovCWxRQfXYXANL2ErDjpbSLp2fAFe6hK8pkCGdAG2xzVnKNL38cfU35tMSDgf5yyq9YK3BEe4nRSW2F2",
  "key1": "3BMnG7qF1ark3JPyZHQigjiZqDZopYqtHXDKMQa92YvExgWug15HvtT7c3Xej93JadsKDsco3iPG2FWSn1sVeJuw",
  "key2": "2QoDbsYxKVhASy1X1DqW66kFobghrDcSudUa95LV9T7auKbwPXUU8e7YBCkjWGgRr2f38YgYFcycub6J28LZGy8T",
  "key3": "qjqzRzdtbARbLxFXESqsuvRHBBFscTUCvKWStjfpP3Cm9yL5BuNpvgh91tCHAbYvnTEd5kbsjMPRjg6jgmM7rax",
  "key4": "4jjQmvtnkae7kBGVh8B3yQLMYxfvdPkHaHhx6JMCTyUH63tGz3k43bTT3G8BoBhDKk9yrS6LpXPMMVEQnVavonME",
  "key5": "4Q7Cu8UHuXccrwZjTDMqXHhDQ8kYu8UHSkKEnH7kfVXDUk7ob1oX4XMK2sHNDjLetYVhrgaEJtjT5Jq23VK2GmFi",
  "key6": "5RVgMXPY8rtE31KwQBvgELgXBnJotx4qfvHPB6zzgZM1LgStRArFEgRkByEaJdwaCgg8mX2mDRAgSLsZJy4kZzSv",
  "key7": "5QsmW18iCZnP5mSqs8nWKU9P98WuDDnU1Xhz7hroRiFbiJtbfRWpYqRhT5GLZ4HK7hegyi5zttxDV32PRUCShYvU",
  "key8": "3yxRpPP7VsTsopq4eZZQrMaQsCX7akFPzBsK9gw1rhgeEHvsLKbdc4a4cKcFY3sujcoii3w8o1kUECHxKx3EsxoV",
  "key9": "4HJC897aouss6UmwqNAoYgvGwiQHgbLvnhxnNMiD6x3aVTrgAteLbvFpDLAAZFHSLEomN3JwhwhLka5GuPGk1TZH",
  "key10": "65mgrzW8JfVypxeY6aMtRTcFqyq48sDH9qEMyi2xKrasRYA4NPtVGKtMTLcampmSf36UdRdAve62vWhhBPFCf4dB",
  "key11": "5BJ974xhJG4o3n9ZM2zgKgnrxKZARgnfLmSCyVu3qfUUZx41iXTttWprEYFKVhVxHoaxfx7ZBT5TtAc5rhE2cB6R",
  "key12": "FdXkrQ1SXwWKLyC5VyA4G4dFB2op9BgHzHLHgnCtmXSh93UWtce2CxWRiPanGx7ARTygEn7FZAAfq9gV5DvRQjF",
  "key13": "739NsHQUJaMMMUM7ZCT6oxqmGLRYrbLRD6wzyb8MSPxUwWMK3HzVaUrF8j6kZadeoRGvNyb4d2gJs1dXK71USff",
  "key14": "4hmUuMMVJYaR7PynUJeULdrdkos9f62Fc6KhjN8cuf3Ebh8fzuDwPpXv51MwALSyeZrTp97ffQAowXLnsvPNUFr4",
  "key15": "4UqyB4nKkHQ4NFDi3XCrRh4mPWiWDsRdMJ25fLsUjm6e2eL5XDVZ8WzUUM8ASN2G81SaHxxDU1t3ndCjPRcY37hc",
  "key16": "3TzShEekTBMewuysMw9cuQV2D4ECqdh4JRVm9MShv9MrXtLEZx8Dz2M6NmrLXttpiVHcejY8khS8BkCEUU37J1Jk",
  "key17": "27FDUx9dA9nqwCWpJFJJpAnz4uE7CrKNJWz2uHR2QksGkCWBL3e7TkBqcg1NQcHoYJRRhKcVPzRZnCFUqi9tCPHK",
  "key18": "PZdeFiNvCFUYu74CJSVkQBC2mSJht9JHYxjZU3kgNSk44mDD5whsfXJp8bRdpKruVmm9La6DfXb5HrJYTeF4PTd",
  "key19": "66fjSFx9n7cftDbJ77Nz6UBSX6b2Ko6FTvTpc5tWGKk3r1Rfi2bvU6A4rMSsHDGDmMXV88jxAtsXce7CtNhSK3fW",
  "key20": "4SaeVxFzuhMfrUikWnX12jasnJu46jF74fhHB4XswLJc47XcQZqLwW8B5s3ubcHhq8JY6U2AMi6G1A1pAfCrRPja",
  "key21": "3ZStUsyHDtRzbG8x9MBL8MXzv6SExyywtFXN8DspFWLZRaZLSRPLssvsXPeeKinfXya8GxLBTx3smv8QyKY25Mpu",
  "key22": "4wLvdj7WSeuXsRsh1zVXwF5rrhrZ95unraAhnsP8CLqjMp93B89emkaTRi4cjA8fUwca1MvEGe9H7QWWktP3yXtQ",
  "key23": "VDR9VegvqNKvUUDbvkQc6okX2gZozFJFxQNZz1FMhs7DazJCP5gG9irgBybUHYJdBqJmQ6n5f4tNtrZCjsa5K94",
  "key24": "3GHGZFn3aMx13u2Xitm3qBUbhokK9Pzreu231UiY5onS38SDnorYSVhkCiZXoSKQ3eosj8a9pFbNPnPE1D1HPt7d",
  "key25": "2FQvX1UdckdrEfPeZdU22wPNkXBGWpiNumjXVswcFFQCvRSXMB6byzpvqB2MmdWT4gP2TfUGyZYyYWh8nKxx4G1g",
  "key26": "2t34F1un8jViDXgf9464Zk991JUh6UtKawcbdxCLtiEms8v6se4q1bkX8FoDXgCCGvmsEtLEUD7NSctCjkvTuCUh",
  "key27": "2oChtfjT6zRgAHmVCgaSf9YpFWzuRAW6vZyBtZAN3fjYW788giWiecBLE14997qwf5psb8EBNPPvnUS9TXhiKrBc",
  "key28": "KxNY439m4vV7cHNRDPCZby1B4JrxcNx1ETicTRx6zVWNdfFUE84FeNtnbBoEnpFyGGKx4hdrktpuykiVpqJNqmD"
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
