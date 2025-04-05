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
    "2858CrMk4XSoZ1Xs8YRP72J8bpyhM6sZMX44WqDrGiNkRjJQ3ZtSuUKYy9rFdbxHYYwmwCFvEUPFUFtUW7HjW7oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JL1fFy3FtSSER6gt5kCjPADTdEbMvrAULVoqLVaGkG2jPFNZ6eyt27RTcun32UVi66veYcNHoxkVUSKQDmfLbSF",
  "key1": "2gv62rVeQPhMf7FoRXB1dXt2AnrsXRUApY4g9RzvxM7DyhwzGyWaMbkgqP5iHvT7CoWJLKKYYQqXrmNC7sWunmdQ",
  "key2": "2FAEyCxRvsgKpJPBcfxNr9G24KiNEFDbUsoAqWRrhKFTk5wHXF7uCvvLGZD5YuNqjoQR3WmBEMAHC6rwYDWU4dEQ",
  "key3": "rjxFsw2KtK22ry2tLQL8znpm7pYvcVca7o44uYVazhCn6SnCcpcRRvXEJJTKm1wHxEFYaRnqXSpG54wteFgn3yM",
  "key4": "3k7gu5vUUbRM2Cz2S5WrVzQaarYdUCAAxgVqBJZ56vtqccNo1aFv8Bp5Nh1L6L9H8q85qcXDe8ZD5KcqAgBaJRR",
  "key5": "3NTNYWftMCm3FFRDiATdQgeT45K56YfcGpiYbxyLb4dcw6qNvWek9g9WQnpXoiQV7dqApVHANgqGUk6mTPxZjYTX",
  "key6": "4UgzpNrSNsSWjX9cXdF1eX9Y9CPtXVqSpxfiW2NHUJ5sptq2rXTJgxwJMTY4NhafmxnRrSDVXkAqi6Me63S3PZj3",
  "key7": "2tpCVMdoUeC4ahUx2ExYxEbj4riZcHNgCmcB9NLcHxwF3GqTFBKXzZJbrWrWZvTGmCpsm1NVS4yxuXWPo345kjh7",
  "key8": "4QWbobRxAjYFmaw2SxKxRBvSgNaDWETLvwTmZ2KgzQHLzkoJhbuuQnrkLeYU2UUmyUS1GEZaAvSdWv3EWJVzPMhW",
  "key9": "26UyMQW9UihV8J7NVusTwTYBso8Ssg5VDw5knN73RTzp8ZuMjhWEEzbYZ4rwRfUaNwR7RNgYvjKyqV2KzcmwjzBM",
  "key10": "4uwJ36Vde1xLvuE99KakJFuZXoe6QkKVgZ2uSkKFYfxQqvPYynjncQ5orThyyTdUeQEtYqHje7C9MnPxipmCjhn3",
  "key11": "4QgubKSJXDRNCKx41rWAFEaSinYkuYxTPYPPymXh1CBraRcqjgC9V5rLS7TbVLcQagxednvBtpUknihMDvAFCyU2",
  "key12": "WVbkxp9pNQWTE1Sb4CwPczXAqSRcPBvYiYk7LMPEfVssm71EVSNbFzxHFKwiJPMrMfZa9uZK5TpWzjbe1r4q3Mh",
  "key13": "dGZUgBtjPdDD57t8rSkhHW8h3uwp2xB5QrLPnvzd6qgA6CSPmce3nqNXwbzQc5d3wVCLoVNV1TfsUX7TJZSnZqV",
  "key14": "3HZAgfRPDsPH5SmVR11Ym94G82NjVNq1Bur1Mn6jmvwWkk82axiVPn5oU5N2RX9JRCwdETws6b5eC9cn5QxS6NBV",
  "key15": "5rXYiHj4vPcDx7oRNzFPrSPeT1dQmFYPzwvHJkQLptQdTTtrSU124ogF4qDrLvteHQ8koED5TAvVqqPiFPEfqCyd",
  "key16": "245PPEAyFpz4FuYJnpeVVKRDwf92TnauXPk4BAwMNzfxddqugCXsvPmUALhjxtFMLXdTc2Sm7aQLZWZB5ZWB78Ed",
  "key17": "2xj7CgEF3izjDB1kdQH7HCpESEMqS48aP5nwzMCbSLCnV8sR9sK6HJ2VEvELbWkrgL6or5KmrBGisdcSsNFSi7hM",
  "key18": "3PaACey2eeBMHjJ46V5Akwidg93i9pPAqGmfisvgkXpPxLby73RZgtBGWZeTK1TxZKrGUkB8A6yo6U8nGkteGagb",
  "key19": "YahjFcPMYm29GWNDWkiVeH1phthVo2RPHwxHwDKsqTm6TsVM8iB2ESvJx3yYoKs65h2ptghyUagCMiFGoTbESBF",
  "key20": "2NmHWk5xjHd99fUG2NQc7BcWfiMwKYccRrURK1wuAWaE7ERMjybqA2t3GFwf6WADMdX7Wsvw7UdXtL9369kxSjxS",
  "key21": "36YtXjmra9YMen9cNFdZ2i1pvFJwLrDEyVa7WbuqTykzNqgqUNEBsZjbJd6qZbkpTijzbGv5mQp9JCZQWRfE7Gb5",
  "key22": "2YRnGCafdNsPyaAPWYpPrVpLd6q42geMnWjsoLxkrrQjtyyGjRKewrrfbQ5rMEccFyxyPt2Suqm5BFLEQA7t9Hu9",
  "key23": "3bkQRGq7FZGsRLCWkudViPAaL3DnCeucotfFwQYb6VG2Xi1Au3kLft44qt9Fjj8btFqtedtk4Kvu2M2Dm9rhd2zH",
  "key24": "3gx8sdEnhKvNbwQudNUEGJTJXnxyYdT7uCcwJyBggQVuQhwGf9h1hT2NDmo9M88nkn7oehvv5Yff5Uq1VcjuKAow"
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
