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
    "dJ3eBMQdALT2yjNV1z5kcCTq1CcyrLa2bcjQP27qtfHzp4h8gfqrx3psyiLfTkvEPv9vVusQ5LYdgoja5S7GKRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPewz1pDCEHX427TH2mckoQfzrDtn4DjJYtuEjTuHyLMzESZYjecpt81G1sEp6jyzvvKZmMqRww5mWNqjrgNuGb",
  "key1": "48zA9jA7dKLmgfcZTQRurzoFJZN8qvJdikhBrHpCDTpLr3kooxKX2ASat6QeNTNP9GNKtjg6NkZqjXyvGN2m3Cj5",
  "key2": "TrrHAimdxdbpY53UXRqrZLuNXTE84uHyFgVkkmA3rTjewUkL6RaWFNkEaKbnYLYyWNyaduy3V74DDh8J71DA1x4",
  "key3": "2C3giAgSXDqDirAAy1gsPk7oipoawCaiiN8xNWDs7xn4jedr2BZi6ezqZNeUwyh1ZRnujXjPfsPKhmjCYYfUaE23",
  "key4": "5XyA1owWxDypaZTrymumszp6vSGe6GXsbjPtbCuJHTfSbz7ynbTmpTpuopCr3Csukh9WTNb2VrrwJhJncrzGh3Pe",
  "key5": "38KgRnNDHRD3QQ2uwLah2x4R8nanev9DatCEpaGPQz4gf7SPoGUEcYgcJNV6DVKZNua6Csx6D5egFXLXiu5ZVG3n",
  "key6": "3QeeivSvLu2CJmvvqZNLcw6Bm2X8FTUY9uJfBTMimEDQ7iAmjrs5nX7Ci1brxEc9dRJejc4ZjVVzu1hpKBzRAMxt",
  "key7": "2nu5jzjtyCEsALMawz6FtU9VNDCYURrZBcFsKWLUG1kxwZcTkNvPf9CXdTkTeuQrMguPN7w1DL1emox9u5UPgJ42",
  "key8": "21ms7VtemqKvjcWobsDxgzHyFqd2vD5QiexqLqLXqorYBq3oTsrt3XcXeZXXokYXqP1xNB5mDuMaba7uZzUGzzrB",
  "key9": "2ovzj4hk5boMQqmjV4m3QPGKVRqX9CMWsZ9HCff8bUVoGsnzNwLq8a8byKiaVE4XdKokLzZx4oxbhXY43YaeKh96",
  "key10": "4T5waeqLm6tcjNnUSvURNxjUgshpE828Ny8u8sqpZcerdv3hJK4wRuz3P2K9JHgCVyLfb6gaog3wynYpNBoxBX83",
  "key11": "2cvAwtKz5B9MLFAZPYWk2FuEX5KF8gSb9oqKXVNckQNPbqUVGm9zPVsJDyacsTJ1neJRMzP28HgKFGWbqH25Y6j7",
  "key12": "5NTMRk5ZzE2HgjeubzGAFadPFTt4fQ7Taw71pfgvbb4vwrtieBASoxh21yuuSSYwePeebHd4fKF4DThKYF8NyCgJ",
  "key13": "4a2ZG2Tds1fTb76xNFcTM8bj5TZozfooUiiAzec4gHHLiKfwL67FswMssK1MEymnkjr5XysmXvG3tHLxTmxtrfeG",
  "key14": "2itZpoXCzKLUWjMcE4iyaxYGRSdczQPM1LaaamVLLTcG9t6JPrkbhMUUREjerCCD76z9ZmGtpbZEJiMf6RRTkokn",
  "key15": "2jrVKmNGiGVbokoWdsRRHwj8ZkLkUh7QgM45upC8FQwXLRH1Z8gT1FRLwdE5V3wYBLcxJbf76ZuPNrN6FwRVCD8Y",
  "key16": "3kWX9HmnbY8fsKDppoLSxQwBupRzcbnZWPULawcEHRFGzPkamj9kTnVagdQGu8ay96T9GUmt7sdUemeXNMFgVjga",
  "key17": "5atGiZvk8ni934N5vJKrwrHeHzspJ7uKMQSjDZtGBcUzCdpUDh6jtY9jUnqXsBjhJ3EfnZSNYBGtqvwDFTu8qbF6",
  "key18": "JPjLYLw6Lvcg5i72TDNDiJJxqE5yuHurnhAoeFmdq2e69zfv6XHoCr1WRfZHHNka5YuHCnY9jc8FeLBRB6aLWXm",
  "key19": "38iFnzUZqkh8ehgyiTnfcKU3CvMgXZ3SE7oq9fAuFCwCrFUKiMDkSbRFX2VoGJu3cS8HRH8f7qNXAFRWPY4gS1zm",
  "key20": "2swqxoxAt4Gv4jLrrNGF5RJHD9QeRXVYD65KQsfhuhQGosHmjAEtjCJ4NbZK4WWmCYn8fbCoTJD47sTzh548r9w7",
  "key21": "5tmSvJASPo1GbYZmZEUAhfrSAmJVY1Ys3WGRYgsdcs887uWmfpQSYEuCjicqsZt39eXzaTE5Zyc2YJ682WKm8jx3",
  "key22": "22vuRkockUSnptU9z28DnKAQAyTXRVVHmBqnsVZjcdJe2iWZVy2k8gMdL8ra4hMEaJQxcpU2oV1YHjq15imkkfRp",
  "key23": "3hoiABzGSm8QKDpq7oskgnxndKwcgVdu6rAfkjcw4KbwKUogFAYd6s9wezhVcEQg5fgXwNXUxUrvAYfRF9s8oVcJ",
  "key24": "3D1XzkxNybm4kW3W9HKj1ZH8UmK3Q7N92SmDf13EqsfzD3Tu8842xSaeqaAVdA8okzbwtUGJQ5xrifQopKHzk9K1",
  "key25": "2M6ZSZAA5TLPhJ8Q8HraktdcMHBF24rLgMA5QwGvMTA9SENzMjaPHZ8xrXdUs3wDkYPEm3VRbDUgNbHWx7qBbQTu",
  "key26": "2QLcDp4i7jCvyynWpXSVuAryBGkYX2DiZpKUJBv5YjNX4vSfnx9YfqrtZyMPQnMEXenwUF51TznkrAnz2sDjFHbw",
  "key27": "2kXbfbXAoSLX9kJ62SeXvwcMrPBEp6APx1AeJvLWe253T2v6A6LTyir3hjLrgQYBkcwVxzYc91YmFoJ25h51KtN6",
  "key28": "reC1J6F26LyWWiamrZoL4u9sudoCwGefniGRGF5PdKDrmLM4Y2mmHgzscLMssaktaCHiNAyKnCLMRz6NjSyDAXk",
  "key29": "4iuf2SA48CPK8jfTAy5kt7MWKgqStzmeY2g5vKhupN1nevX3haKUVqMXR6msoNNpj16oPrdaqxAYnveJNGUxeW96"
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
