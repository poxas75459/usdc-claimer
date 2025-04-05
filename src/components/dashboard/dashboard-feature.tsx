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
    "4bRyvJBuJYTmBSVZvXa2ZWMs9V4Bi93dzGqjKUmAZHvZaRaQ7tGjpATsK6cEfaFiuF4vZN8AAnsKMXAKBZbLdpty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ls7CmLEXCzy24KoyFsS9RMtaHGwC939uUZ5HLfovZd6sgZ4aK4BdPuXK1ncMmWt2GdVFp5jqrbYYjQ9QeXFCPGF",
  "key1": "KT7JPbYRNMNMCZZaNVj1KcC7qHNykGS1UxjqX3zY2DAdJbfUbdAAuGefrYqghgp91BoSgC9JH9x1Aqck7poNeTk",
  "key2": "5ZpNqyDWxSo2ZCRdKPBW39LV6qGEJxKe7kAXa4b7mXEW8D1ostprzknre8YrhRT1PCSQ2CKaJsUsFCgX95U9jpvc",
  "key3": "3gys6CtFQsUGQRinYmHAhSX5ZbrZVTqjM78wAgC8YLfhd4BUvfkgzZBknXjZNS6jC33kVT1FMJEdtk4s9opEVhbT",
  "key4": "2z5Cj7GF9g35TWSNWTnfD34PBGpupa48xymeWTPrVHYyv4Wam9r3tJPBkVmr23ygPrP48PmgFyWEdvEdSPHEebGK",
  "key5": "27Lw7zSjpFkVj25fZnYC8oaovVLT3LJHYXyC76HQCU54XeBhckWVLfYX43BJgEiDBFefSdNs7GPqMyTcdZAd66yY",
  "key6": "4ckAffsiBaCHyZ3V4Rb2EDmhhc3Dz2CDWKZZncSikAphBasvxkEQeYACDq8UTQeuD9NDt6KA4YpNpj3pGrtAGNSr",
  "key7": "4gJ1qkFiHTa1HjWT72aU8q1wFdg7oR6z3PuDCiwn9J6VTcxGdHBNpAumwMbDMUcjqAmBu8YgyX7Xz5H2QDJhUTcT",
  "key8": "62XS3GmHNzdWtVzaWZ4nGnPzQyBRDdYvLnG948xr1Zp9sH2JqiNK6zGyk5VrQyZtMsaZsMvn6WyoMnRvKbazhq8v",
  "key9": "57iFJrQLy3KE2VYSS5HzwP8h7f6MkxA359StYcshkdtosjAqTKdPy5R11Ut6PgHqfF5BqAnQHXfFHaUSofNEmAZi",
  "key10": "59duUbHNqXDtSBMGudWVJqpj7EbR58vqN4M9DDVVRfhndoZSHCeZXveZxjDt42xsJ2b2Fx6gaxdZETegYuNuAJ8w",
  "key11": "2zKrCmhgk5uT3yjnMTXwNB7sttzsyzxeRFA2BrHsjyCxN9hhrWh7knUDaAUwPjFKodK1xdakekDNEoq4Yqc6ZAWm",
  "key12": "4y1MX5e6RUHHuqp5aE7tFbN3TCKuKtcQzix421NtGMaKji2SADxwb1CUL8MNxxNLgcfNMpPNpugHRpob8U8wSY2i",
  "key13": "ovJN6VeeER9tURMK9FH1amcLrAaMPNaJ7tVp8wiAabd3cbMPzxyb1r6F7R15h9rsfm1Rq5ra4CegfwhSmWqQyUS",
  "key14": "4iymyUvd2MCaBDFKPLSyqVdmQc9xyhZrNieSrmxJgq6Qi3GRvh4x2muPUFKFgcgYwckvqdM1xJn8yxstZfdt2t3p",
  "key15": "3btCK5XcZweH3pfRosxps9vFfKyjfMHZnHy4j9CqMnUGYkajgmzPFA3zvNf64t6EoRM95bXAWkEUpkzU2VX4DUm9",
  "key16": "j5v9bzpXBh4ZPjtAqNn4ZESYP27xHgXmqxe8w2QiYXxHdRryUWJp1NvRZ7gXB2vQ1bCR1ZzEMvy8ScGXa3M2pzJ",
  "key17": "3SM8AsCxj68m2LY6eVLaGRGWuPGMeet39uoT4GigDjWkVLYgWXtTbmWNuU1AFDhFSYYwM1Bv4VAteXyLP5188mMY",
  "key18": "2C4o5gXEkSM6LcxKetdSz39aaF1odtmDN3reAwrywsNVPb2u4ZuhtvEe1UPB5Nfc7LrwbR7tiQ2A2pT7cTPKRuS8",
  "key19": "2by2p67c9gNFB4szFLs6YUQ3FEjUTtGR1AmAwSFUqUhhF5wnaKkasLfJh8EG4uDgKxXD3qDJzYdBAehPnSHHP6UQ",
  "key20": "5AFLEFQ1HpxSq33RUcKbaPe8zYz1X5s1r9M55XsN9QjYgc16L2MLDPf8EzaCTaoJ6wFH62AJCE1oG3Q27GBUk6EB",
  "key21": "5YU3Ve2eYb7xosEEBX9nHzgBhhFCMWCTnNDQewzUj33C3Ym4KrMKsGdYYa28Yk5G7jCZa7zVk8yuxTveJcGZdNTX",
  "key22": "2HrcFw7knE5sPKQa1b2SuLF8gecvgqwqBmyC3DuEJTivb79v4iPsjmser9VrHLDoywPbTaLpYLgYi5ww1CnGDbd7",
  "key23": "2Xkd9j8sfNgD79Pd9fB9aR2zaRhxKrJsUrxcWsyPQFQSThsa77gMcLnsa7DV4cuRfSmb4v6W1R1tkYZ39DCZjHJX",
  "key24": "61Shh4L5UsJKnDQeRPFLf4VoJ8og2idT83k9jDZ26DhZ3d3UEncgaw91B1c6ag1MMiQkswPrv82eg9DXhGdnoce5",
  "key25": "4LrhvNd981xLy74E84xFt7DYoWy7EMoCyhYAtYhXFADFVYQbbyBjPXWHF3qHLsMbkH1LBpERjti6FhML2W5My2FS",
  "key26": "49D8atzkbcwTJK23hGbJCXWxig1ozm3xkG6SDEBkC1u5CQp97EvGREudmkzgsVppCqsUahMW6UDdUWBEMbqXoXgP"
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
