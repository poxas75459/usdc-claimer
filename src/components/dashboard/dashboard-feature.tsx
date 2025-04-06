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
    "5E7NA1CyfmmtFFMPHdTmj58dFk3RVWWH4ArV6iBmY68an3QQoLbNCCDQrxXEEn5Pmbt3KU6qPD35SCkwUqTVQQQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b9Uoxj9e6UvhboRBSd6uL91Bdxkk7ZsWf9oMRe7TMmR5hddEV2qdkoze5Y3SrrayZKbQuRzAqcEA7V68gypxKtL",
  "key1": "4wzhQVX3ewZcazgzQo5NgAWnEAXPKxwHQdZnmzTg2riutX58YB7BuHWqKHfGjTZT2Peoq6pbCn86V1eE6ww5VwK8",
  "key2": "3L8EqQRjgsjWhMnM3vp3cBKEADAJwaFxU8wdopftFgRSVMFrb3E8gPVC2YyyVsMucuk8kPP8w8jj9RescYtCN5Sw",
  "key3": "4u7ozyiduP8uMqxb8dfKApJCnAWthSRz1WFbxBoYPxaagBvWNGMX3oKQsVMf7hnZ4rYeaM9BNe6AKNTyxcKWeWrK",
  "key4": "62wgBR5a62jEHsFg7d26kkFiytN8VUG3QuKWsQvCRnMijWj9xKLB6JEvYoYX9eAZy3Mpn2aQwkBby2k4f9gDB3bn",
  "key5": "kADar62EVCvccT2QL7jnun52V3tLRLayoSWyKnyoCVApZAdWwBbJN58miJJTf5EWrKfcL3xa51APf3m8zkTjWUL",
  "key6": "4YB641TUMcUHzpt3iNX88jD7ukkhhnFBN1iizJU9A8GEG4pqPMZPJuHuYsx6AqczRUrNHkRp2tk6JpBmJAYVCHcB",
  "key7": "5YKMEwzRF1jxy5ViRrSzXr2XUTBa2BGPH638VAe3TuEYRwQWTszuGncJkUdji36kQeE2dc1cEZMfjifvgPnLtyXG",
  "key8": "SxrAnRtDr5H9NCkPRnFat2AbrD2rRqMZSgKgRcCgB2iksP77W4WC3aW4gsxy1j7QszmV2z5ptixcis49JVQhXgh",
  "key9": "2nkTEeu55N8xpCnqdZcqtWCCF9H3uZbdGF23qS1ZFHqkF575oqe2GToKMGvXgBwv7HWmVw5dvwLLuXggXmLjjCAD",
  "key10": "5BnR87GwUoRNMZJa1mjpmccwGeP13GDaEp2PA4BS7Ef76MqAE7jUmCCCV5Vnz1KxijqyT2b6uRFmS4c3Rp38wnV3",
  "key11": "bCmVxukAaXccgWyQRfc9UdQnN3VG1JYAuDt6USjxXDrYJ3EZiboC1NM2Fj4A7zjpw8rqMDPrD5Bnnbvk1GnU383",
  "key12": "5HzbP1PaXq9DV87sMPN7kDc7AyFcMXnnsvPB5AGxzVdLTNhAYbDyEXb137Zkzvpr9duU7oVTa3svicLN3Ns8XMoc",
  "key13": "5FFxb7pGTGqcLvyJDXAcBMXxwuoTCsV56u62FwJ8bntnioxpzGViEjWgvpqkfARs9ig8s2tASWqrYihwbzRE8xzt",
  "key14": "47b89dMC2XaPuAhuBHMZ2Kp9DnCPqKLvnhvgCvLatBSu2zSiYSzuuugbuqwCDAbhE5M59Mb9JQipphxyLny9YF7y",
  "key15": "41EtgCDuqjmr6VWBX8GBB1WyJvvTr9evDtpqvNBsThRbdJKy9odv3Nf5LnEBVEfEkmcLJngTggCVJULD7i3oDy5g",
  "key16": "5gpFaSJPbaWBGWasdmPJBm2sf65HgGJWmUpwEYzg33eZjB4cf9TQJ5jpKnMytDac1ftemA2WZrZjjPBpaFRQuNiw",
  "key17": "2kNYerPT9W55Zght27tkUqdtehQtcZj6Jbdo1DjfenTfQbKQrMp4jk2DiCZqckugB6iGW4iSr9k7E2ax9W7gr9hN",
  "key18": "2rKgkVjrnLwPt7rFN5KcovGeznzMT62f6Qr6XtVrFD5cSS1XUhE7jqMx1FZ1QZR49bm9mkYD6QQLy9wKYsdarfnc",
  "key19": "49HQr6TDd2tbHrHYCxmA7jdgE5QKRaxtYVArv6QAS6BW4BkNcSS2NvRYrPqqCMLEroymtrMJ6PRgwjahp4rndWYq",
  "key20": "4155xJo6iLg6hM4TmGuVAR2DSZ47TQeRwG8UnBJVMUq6uXhVTDVEW3TqWYSJzw6ykWPfqe8MuS6J9fbARBgQLYk4",
  "key21": "2ioQPEr2NotRP1CzW6HLwFrk974GybdRF1aevQTg5px8CmEhghbAzAHp2Tv8UGfKexwQTkbEgp8Xi8F8U3d97quE",
  "key22": "NsaeUWcPji56EgS6ebjg4GjzBMFVSyX1CkGsRUe6uKCsXkd8gBGvuLhp7XGk5gUNYH7CaMSTCMQmAix88dhvMqq",
  "key23": "3YndsZq5FECo5vMu1fsmHsE9NUiBMyj9ZaXwK2y3VWMRJZrdAjAiQG4h5td7QSuT11yJrbHV1HJGwYQHknCqDbNV",
  "key24": "5guNCdRvfSzuYTVfs8Atk8Ju8JsxXdDYXeYg2opjXbHeXWQTtgvrXq3CtNARxBMCKb697raebaCKhYcoa12fsPYn"
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
