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
    "3MaA8ppk4EdcPYookvTcUBA8JGTXYwzWr6oFyY3tsefAX2hi6EduosddvJH5UDax9CayLjWG8ZSyrL9rr9EKKDGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKA7MxFZrsmwML99XFFF8CwCVxrWTZVmYJjSWcSudS9GAgiTZW16P5xtvd71AKkYd2k5qAobQyAS4AS2XpwTmCd",
  "key1": "38cTu6jPYGDNEsGbdMav8uKQguwSAoyG8BDa6hP2prvJucESzfafX3HZZsW2fsQsbVSrMbBUomxbiDzsPpDQJoSc",
  "key2": "6FMMkwg3HbUHNtwY2R5JRdPJ5iUMjmpT4oPQH9Vczqp3j1vBvEvgHkG8ShDezjhtrm9hCirmsEmziiwyk3msG6y",
  "key3": "4S4CTeH517NQ7BX7BT3zLneH14JSaKQ3a5giVomBJzZhfG5ExVo5EygqehMu31iMr2KKKzvKyi38GhcMoCH9Djqu",
  "key4": "5FeNxN2K1AuQgc3HbEE7Y1bct1CrppmDLYNeoPrzPYbvoTYYCSDCDzxFwcPZub5k3fEtz4cePSj61LG3ssYoymWp",
  "key5": "LTtaoBi36DJzTqbJHYfi9nQXMqreGMbQJLz5hk8X1ETA5KDfQTBHyHF86SbVXS4twWb7SCUoTTojCUi8QCsyhH6",
  "key6": "42mSN3nQ7j1TDb7VSSjtGfj9A8JktKHjrM2cCYnHiuM9QmPd9FpAagya1hy2B5NBznu9C5ByPHmyKqiY8ZVCCNAk",
  "key7": "3LoC9UMnopeToeEg2cTFw1KuJxBS513TvRSCrakrR5C84aUi2FiMjn5BydKQE2MBkshnJpDRShrffGnWC6NUWeev",
  "key8": "4K5i8BP4tmP82tmxKTHTPWgaxuQyKwVxvrAQPz6rMtJ8J7NjAg4bsQAR4cHwT9RC8DmVhvYJBkq9nRYj9NtBsZ6g",
  "key9": "2wivjhQzyPFbzEngBUSxuZgWritryLC9DvXawQXVqAKgCGghiaQ34rTPnNfBnSFMnr3Z24Kisj9gyHArodtoz7mT",
  "key10": "Kj3F8q2ZCpCVABqwjW6WvdrXN83TwbcAeeHeh5iwZpHdiiJqj1vgAf775YDHQx9cbWYAnojQ4aa15YzW83EqxbC",
  "key11": "23CwsFsq7TNKygybJJuCh7d3YvM2H274eQubY2KsmKsKB8PduK4hToDpviix6BTrboUXBX1MG1xEgnUkGqnsMEcP",
  "key12": "5quhCLmyChrMr2VpSQtX5HVmZm4yvtbMY1nDtRkytXbZVHuVMHCnJQ43ViZjyPySxCXzv6wBL1PhxVtLcGbkxWg3",
  "key13": "22otHMPkAAEke5AuuHQTdV7MhG9yQpLXthM2K1rw87qBaLHSGja2AAk1r9QjEppeA2a6k1RTmVvED9188ji4FZwT",
  "key14": "27Di2b4cegDe5N4Z8YmtUppoSvUzsyRhCEZfzRmwuzCocg75NibmEXQvgtyY9f2k3i6uncrw9Rp7QgHsnDT1d2q4",
  "key15": "5D767DxPv4s4wzvnz52CN7M77q6qPh5LowoASUGmsep1TqLZuyisnLvi53MdtGQrCFTMprx9pLLY8wHiTkf63keJ",
  "key16": "3dNKhEtbosw5cWszqQPmGvkGc7P7zgnwTwB5iPp4B4SBUpViUD7zPhADiNzW4wBgFnsPWXyAAEeYSY91NPrvq86p",
  "key17": "2r82r2X5n9mq2RiRfi5r5MoQGuYjKFb9TNwmMHMaMTyrwFuxt1FLRJKNqWqbV1HcKMPJqukUxWedTWJRV8z5oxNQ",
  "key18": "47iCo6GFASWBHVoED15XhorJGk27uhcVMLYKbKntXH8CZGGRuCAWWWmM7JDdvbPPNa9D2P5TdC7bwzJTqnQhdsnj",
  "key19": "2kXP4PzfPrSvo9p3kxzX8i3kM4W6xBTMNynQEAzzVzAWSgFoR5UZkFLowsTkgL2CB8QF6sFFrsf8wivEZLNYFmm6",
  "key20": "3Tjbbsr9x7htCMsbRVqt9BCPdzutKidHgML6XJgdFcXzE6VHW9iPQHotHJ592HstwAaUNth8y9cm7mdRRvQKZHzG",
  "key21": "z1XoCx5iKn74A9essuJF3yj3DRUDqxgDfAoGemrZNwzRxQ3mxJrdsnifd1pvBHdB7fusUcCWMnYRimoGr7pYyjN",
  "key22": "4sZqX8GuT85M6wB1LoGAb2QP14vF9eZ8sbpAP7gaTpgZGuKDgFjVv2TQkH2CrfNikEWuqCqTNQ7mwDf981YDN2i5",
  "key23": "Webu6SB6egmZPENCaZ9XT3hnyg8Pid48Ms9HXD9GpvH1cNKWvDs5c1cnVduLaAGATH1xZEnn4gzp3dSntGEedS8",
  "key24": "3i67fDU9pkDzUuGpzac7fcPWFtHQKk2TMy9SPZSoqjFHnp46vvRcXzAWKkRxm8avnZJrQt31edJrCN7aGeZezcvy",
  "key25": "PoBMWUJZAmRv7Zgy18NswLh1xf44aJdHi8a3zFK7YYDaeBQiCSsRYGbSZBYroz8g8w6n8MXMGKQoig1w8z5o27d"
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
