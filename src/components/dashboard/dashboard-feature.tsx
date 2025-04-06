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
    "Z5TiobY7seGGM9SWp311ypWmMJRGKf7NvoQLemYJFCW4gqcSDNTBmJARpfvtD13dyJoUntRdSyEkJH3VuPg8Fsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c4YopJN2V67QY7NaagPedWR7UXkvtW8hmCEvVdjBtU76gnmQnLsehvsQmNdNzqBzwXGNovtcyym6rNjHbdmGQfm",
  "key1": "65oypnPCnNUsiD5rae3y2itWjU4HfiKiTsF4VSS4eVtTRH5eMJgpt1T5S3BGoNm5RHgRBEPaoii1j6E23S8jm8UA",
  "key2": "2kKLMesWo1A3tcQDBNEJgeLsK6AqXe3jpi865TUSLzmqnLwn7taTcVidjh5vz3pnYj6KY4iuP8T63oqzaZuRuehE",
  "key3": "oNYPwTULqbSPNKqWEmvaRwTt7JVh6aaqt1dtiLmFRF6Ftn2KMvgHXxDH9sAKvrBc3rzDDSKHYco7JswExoiXP69",
  "key4": "2ZH738GYvKTAUpnYwkb5pHuCsFe8wsrYioHppMPApbLBad1qcg63rTevugsQD2JCqWLTiXDixQmvc3hrGKGgaepq",
  "key5": "65NL41UYPuTWVacpzCUvZqWV2kLSTa3CuQuvV63NJ7zHAfPV8AHvmcm1XASsmFusYAA3RtNZSoJYQh5o1cvqSAtT",
  "key6": "2KjnHrg9GsMXbi9jy9H6kWqsAb2s3Pqq1vBVEAcMf1wrEqH3hEQ3h3m2ebDqYuitDTK7BtYe9Lw5BzeUCAy7rJr2",
  "key7": "amoJsA7B5FJLGfKW3vB9vFz8JMp3yTtoNk6pmKtBvZj4abc8E7NRUr8v1HzacF7FghzpYMB16bYZoTh2Ve7Bgie",
  "key8": "5ioxZTdntGDjjjgJbYM2c9QHBBBJDNPBSiF6rT8sJojVGd8zu6CGLSdPtYHUBC1JarSKqw843rVi7QU11G1Vq2ZU",
  "key9": "4sNk4cfWQhSc5g2rHzKpZ9kXXhhpmqCWbRnXJFwg1WtiuCCaaxxhXyo9TnpDNCp9MGhwEGZyXmQ2dxmNfG8y6aGz",
  "key10": "5AaUNiBf3wd7DYBTkyXZL9ngiasCYQ3ZADj8KSnuYRVqMJBhZi75sRqSGdTwmBkJYb6zWySH1F3A4dMAVNUrqmWA",
  "key11": "58MAESJHqy2rA5Q2Tbe29iATQE7L2C7JFK6XbSFsvWZV6cfNgVgdCCc2qoehN4x5BAvPHPUEde8ZjSFqCFKy1uon",
  "key12": "4iLyNN1WFFbSrhEzzbQEPWZ5qM2CjdsAJmysrc3A182X64iaWTK1TwDxGQhGxzt1Y6c967kaULrnx522wXTu2AJB",
  "key13": "41ahxVZ5U2eMi34Yr3LrCQu3YUqRD9R9AdogZ4hSTULmycDUHFprJ7Lh1Q883ukag9zLAz1BG49SvAoNSMNGw7Gw",
  "key14": "3vNKbKgURCpJxYuz13mpYkcFPYrrmvyLjbSAD56CKEBbUVKwbK7C17V3TBgfpM1A98dwq8XzsXNAmu7VLnayU9up",
  "key15": "2qtGuothcxdtmQh2Higiw1GjgszqWHGx75aimadVGPR8BNTDKFs84tVVedaCKC5FEh9zvQbzfx4cbbuj9Y19sxPg",
  "key16": "5jSAysc29CT8MSqE8vpQbuPVRVMF4ZiEcHqAdDeDGgL35RD8LgR1rGnVZtzZitix4hz7B9fQpYk9hhjLVdBHNhQ",
  "key17": "5KiWBhuLYmvNTXASi22KJmfAQu3dVd2xL1mhhY8qPH3Nt7WLq5SB4E7xQTPH5S2J2FiYG8vtU7yLKVD9dcXrsLgv",
  "key18": "287fXw9Vy1fGbpdKqi6EtfxvJeFUk4nRuVTaNjn2XThSScEw3dLvYnYEGsA1Q45RK8fXET7YKGdrKuPs5kMYZfgh",
  "key19": "2JMuBnQh22tmCuXNHBU4BxUHUe66Adq6Gz7FRz95oE6QAKDCVvU2ZXLzqrH6qfD9GUtYQ6uZLS9Vp6LQbC6cghg1",
  "key20": "2HXbzdwbWs9xaqEj7gerSkci7cUg5AWeenm2juY3B3pic2dhfeLz8xiezHGLAvNqXX7UbMntWuteLCNp6sy6E88x",
  "key21": "43fBaFntE3xhTCmdb92yFqRDKyp944MuTqMTvENc4o5U3CUsoAsF9c3eZmmk6RM53D45ZKxzs3adBw1jLRBySAhf",
  "key22": "5pxEzsqQXB6bFu9FrGcsqCqwgE3o5o9y5BHxwFPeawENiHNJKiLTu4S1hGsujkdMSZ6fTWSAd97Wtp4Ktwv8Ei4X",
  "key23": "2FxeAbvtSrNspkrkvwZdYQ2jjK4faUtAMYmW2vEJi2EhpDUfJovaDbqVDuRhAEqjgswhMhodxVm5qGCjyLHNQhY2",
  "key24": "2YBbbAWiWaZXqkGZE7CV978vBuuJsM7jqK86CLpGyHx4UYPdd8GJwzwwmcfLKmgsoKLwHAXyPCB3RqtbDTV9tMwR",
  "key25": "5B5Ye77QEVeLAuTfqPSHrwjQR5pduBFxJo473Aey9XATeZfwtMmvDJZhSaiiWRRj82VHpTvWKdkw2XxWVju6ihpe",
  "key26": "3SnvNzqjqjhx9TMHfnW9PLwTNnk5iRcLh2TwusCSHmBpstMNcoy8h4mAmZgYMCtdCQoGsyynpupBVtYVbAasYiDz",
  "key27": "4DRmjjVLFRTWBf35NVNbPZ5Qz1YmyTsZKb6tCR6Sh8P68vKzG3fJXVdoJyWWfsYaLaFofkrgmBQhAmW7PDKAwxRC",
  "key28": "2AYbwnTnTCDhxaBYCFDoGPnXU2BL6G8YnkPmKmHrPsCjmca8ESsjRqt8M8AsGitp2RBwfytVzYh2hLGttsCy3bhw",
  "key29": "2jEaQRJ5SC61Y3ENK72QJbkjaoJMoV22hEY5EsRGmufs8RKCGQESFNi2zUdUaXzn1RXRgXR7vBqWWTUiMHmVEUMB",
  "key30": "wbDXrKz9C2NF6HREnPkhbm5sR4E9J7Aw1JmGBG1BTdZB8gL6zxXbnQzehTFqXkTvFo8ZWKi31dwTTk1Q6y9YbiN"
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
