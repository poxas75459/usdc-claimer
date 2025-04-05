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
    "23usQmVoi7Cx78Dg1FbYad9Trw1Mrtk4RPjiWYVw16nv3Tnc1VBCKCn9ioYrYnNTaeeEuxNK5fkbUrZdc74PRQg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rV2RtvJgt3FkPotcAMbTioPzq6dCG8eWXh7qCJa2K4j2BX8mvsXkfDy8YspcQkcwGjdT5ke7nPqF5zp44tTiQUw",
  "key1": "58RFartyCeL6uRtnPT7snSMNb6v21GL1WkeBVrXDawmSqZNjMgmmayXeSJ8SeZk5KBZzudSqg3mqwVbwFBnJmXFy",
  "key2": "3xnQgsQ4spGMrKd6W4Ychsb1UVGXi8T5QJVGwmMJVy1pPWCRGfpf4dDfqZUHQxxUqgNxht7E8h62wZ812xAvAAzj",
  "key3": "3HzL9rUxqECt7Dt8kEEDzMpkxgcMoRgCYC5F3FkR6vYoDH32xcftFUX5HoJL9UFQaL3j4j6feJpMkJSUFajBD7Za",
  "key4": "2swQgbrV7Vff5shCJjNvtDF66PJoRcwXAktfw1fChZEnoWjMWBeBsMFzcG66YmzRms3NtFUYDpQGKHV1zmFAQgKR",
  "key5": "4S7oSgNS3angzKwha3f4a3wbPcoJbhFcdEeD9YCHQ4aSTuHFhi5a3C2BY5QmLyAMdFTtxjRj1CketQgWx2tvJ5yr",
  "key6": "3XLmJNgzDry9sfpD2nFGtCCq3HhUSyugVK5eX323F8sHV2w1E3PRhJ9ghV4uU4CkPnmmfS9ZkSsRBus2Dyz9jcXm",
  "key7": "44ikqgKneBmkzwA8pjeJKMenDBme2FseVKB85Zf5WR1cPaCuuBsb7zk26gjkRGinDUdUB5tmGHJJUM4fVRasbMzh",
  "key8": "5CCJf8EQ1MaRjnvuAKiDBoYbkrttfhfnxHrpSZ9SD47bZqJvnuGouTCbsAncoGRPq4MrTKe9TsfqMWmxNr6VvsRL",
  "key9": "36PsSw5vkjr49JpYxm1c1HD1M67Q1qMxPg8UkPPmwxwLJssWL5nkmZhxhGtmpUgGaAE6hYy5PF7ZVV9DJD5qtvzt",
  "key10": "3hARiZNXBviqs25uqJEoGBGxB4ajkdXqeF2y126BaKnwy9opkk5k5MH8Y68D8VyvWCEQdmXSud9nVYQA1qwz6PX6",
  "key11": "5ahVnNi1QWSZ5SZVwT7hvJNJtZjhHegm5ptY2n3tW4iGHtdKN4W5paX1sXcaQWWC5Saq2siDCiV2HAhWYZrirjm5",
  "key12": "4mdpqefp3YHo9FnFv6SBqsrD1U4VRjuboA1AnwkCSmErXdZE5iDBiwjXu7pkWMV3F1w1PeRztDqetADzkyuu1Q2F",
  "key13": "2T6v6zsATCvCzkyJe7iexJWsYc6BiVixWcs6no7Xem3V3E3ZFbge7Aet4HLyfRickhxwCinKSMaRtTygHHPJaNwt",
  "key14": "5y7C6AGJDbEzrANKeZdzcyvJQRXM4Zp4hkToxyw7e4YGXNXrXCWnaopQZPtfaL9dx2tCsvNHdEypLAvRWdGDqqMB",
  "key15": "3tS7f7PPzWf7HUecq6ugWzM8YMG3RQHhPWK3Pv3SQudSuFq5hE6oQj9WMzbCtPWayKK5iYVHsu8xWnHopMBANnaJ",
  "key16": "4NaRNMMGQtMA66Np8oXhbPtJxZ36u7QWNk6y8jCGyrcDsLPYuGLQD2biwjZ7DVFGXrireeHuC2goaSQmzeEQUNGr",
  "key17": "5QEczFPvczWYagUZeY9LkZwss2RrVUJ4PidbZiwWsnovkJ2BEDuq9qp1tGbgLkJJ2G8JFBEczjXLed4ir8eKURDG",
  "key18": "45b7XQaF1K2Ny8aRTsVEgSTgQvopkcLhH8pB8steNZWANPW67nw7eeQJ5WLdwwyx1PbWC1n6C6UUsNNFpzMygBTR",
  "key19": "3AQ4DKJdrAcbqSk1GiZPhZbQir9QicUpWqCMbUjeVgeQjmhBy3qW76W8AcRQnYsghXidSw5BZAmCYkSYMoWxtxGS",
  "key20": "2XYd2qShhkfnQqgsDiM89VLfPBTWxPaGZ2HWsGoLJSNWkNKtN6SB8nT72ALJhSJUp3rUFCXzZdKQGdPdeXeYaV6c",
  "key21": "4GB4gFZ9MhFJeksEtn8F6h63gbi2muwhNgQZXGnkN4A2pMjzjGqqVurrydm16zUbBc4Su6yAtur3z5HgeynbcmYp",
  "key22": "3tZYxg4Fw7tVSx7mcVzdAvPV8vZJ3P8nBDchmt5figdWCtShHwRM7GXHpLW2Mz3AiAM6W17K19SkaUpkZBghZpjW",
  "key23": "5kP4Rh4U5u9wbRUxfXtKN4wYc3zyANG7zSv8jZoxqQJFf3decPXdeXJywUUFZdxPh9UkzGY16xJUsi4hmhN1SDNx",
  "key24": "4cPB3geuVWJeUBy7NYXoFfB7EiNho9224AmiMAnpTUCJ4vroyrHyQMxVWWTsHsyDF4jijMFQ6BkxkW1ncPbLP2u1",
  "key25": "uP3LHRETVew6u9W6gW9fycqS9kGUYm3rWkUSo5ypvNwSk39V87wCtoxxZ1q1dRhoF9pWppviLUkJsZK12Cj5tqo"
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
