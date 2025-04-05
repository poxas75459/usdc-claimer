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
    "dib9jEacoWQGXiG4Lu7uP84X7YyTgueMfsQYvX4E81p7FJZubLy9cZDZq4U1hoiVFgdPqC24xM5bEkZP2C3gRb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65SJ5LwJBr8JsyVsAgcHZoX3wkx3pk1wNoiDtEYW2orkDx7Q9Np6WPpWdUaMMMvPXxVQ4KyNtmQoHmTpXuxcrtTY",
  "key1": "4WbrwwqsMRLu7ayK3vHSKed4ZmN6dPDVmqsQyTfmRWPc4FRurmLaHHrhHi9GfXRoeAbqU7KH9rAXojNuqJqnbP9n",
  "key2": "mPogoG48AWBJMM26c6ukscT6oCNFURd4wHyYhDGa6SrcJeWCABF4w3WPwb4pyKs6Hmnv8HQiSitKHSfyEBJuH6d",
  "key3": "3RvD6JyW5sWbGJw2C56LduqC6cCQsStG1FUMCohwhjYQ8fuoR5vjNfPCyTd1sF6wtbwieagP6tz7G6Hq4ULimDC1",
  "key4": "5t7crpyesY1e9kg7w4TXGUY7yKuXTShwXQEtxPoWcNyZcVu99N5HufBoa3jybetGSzrk3dfEtBufJFwR6DCURjXm",
  "key5": "5cbgekK2j8nvpTWTm6zoXs2iXVKoDwqr71msQfNa3B2YqXypJePvJkMoxWXAMBGCQiwMdHS8FLF4K7XkJcCz3kWs",
  "key6": "3o9fmfdPEmciYzCjEJZYxPd3rJfA4hanJnR4STMZMYCduVZgg6b2NGucAXkbR3dxMDTSLGSK5a64nSw7V86Sk1No",
  "key7": "2i1VhRAC8wzzUGA955wi8vxoDKdSw1T3uybB4J5xnd99PNQY1JoHFt44w1vPssojLN2kucZ2sgoz9gQ4SGgJPagB",
  "key8": "2qRofNgpcS338HZNvjxZGdvCwmKrfKnuBB8HK3WHhDWiX3eAA17iPGuat5ogGE88bASUF9AqJtkaM4gXhD5S7yWP",
  "key9": "3b6eu1CsePrAKh1aia1Vb6iYxNQuN3FMvMQJ5e7k9UYu77Lu82qfHqKWiKUYqkpkvFdKrwXhaFxWHX2dqQymdkx3",
  "key10": "3QLTK4zapxufmfAaP4poqBLA3BQRcM3i6jZMCmBzdgXvfyw75RAE2LhTcgVHwvCCP9JoUEGWRrWE4WfiJyJ1NmSq",
  "key11": "3isgn2H9h5Z2pNccNWQg6xyzP2fFcvnYFc64G7UDt8USdDsJk2tkghSiLPkbRBbnHXrbbYmgAsdnUJWjKvhRVFHh",
  "key12": "3TErjJE36UroiuuSjdTMBogynTzWsBEofriPogjrEPKyfCHGC5np8vYTTcQZWGRNpWtYrxCstPbtz4Myv5pNyVKK",
  "key13": "2cdUFn9G29BtgNWHHUumS8kGAeDY3aEtv4Fdm9cauBr72Q7HPAaBPFk6CjKhJKiVG8KWjBv1CeTRfQCgpQAWZsvp",
  "key14": "31DjTxHrCb9ovDShSe5obC1xzLevdNnvP3JCaScAoUakUWkQu3Bctv14WLRzmKPgxHWMBRqtJKxN9vSGKKYtorkn",
  "key15": "3u5yV2mt8ZHQC74ehsLz6nSNtr6cjpcGGYLe1w8CeZM5xUHz3GsciiSHTe1vRgn4YbDQSnpvEvYostBapVzbdzmB",
  "key16": "28XHoqpszLvSWfk3LYGehUw1i62LVSkLBsvXJACLLETu2zGbGQAXcdB2SNJrBeyUDrUZisqYcrz9YTjs2om8QkGw",
  "key17": "2ZMbmNSEMv9ezX5xNsnThNAB156bbucXfErtWoNrUkvyhr3RmKgJUw8cebiazkYgVHz1FaL1TK7Kaa7eiYdCphmc",
  "key18": "5bv7mdLRthqE1V3yBzgVifYyHCfJgHdXvKYmh4pMKXdmwdR2VMSFyFhpyEENkeqZ7iBwSTkJbWdKVzWPv6uKaG5U",
  "key19": "2B1PHVR25MyGMB4ebk6fed8qDadqbLrKZaFvvWn5MLm8AWaowvFKuPk2Rn9cMeUSLGkE8m9FLtEXeznKVGXns3Vz",
  "key20": "FLW4mLMkzSq4sLTc8v1GJvqGzyL749VzCF9PVv9jFZ6ihVYbtNfP7S8ioGGE91HakNwnborXbs7KgQ4GMvrQ9V8",
  "key21": "4Ltygy3oRoLUvEDPR2KZDSXeuqwZETZQKteFpbxbFRuoYwZMPb3kvCJCyZ718CHxMzz4voxjMgSVJARhTKVMKyje",
  "key22": "3J1s8e4NGB84XitDhLG2D98CqZDiuWgrzg4MzT87L4Vf3ovnonb7gkNJc5wrVwpcnk35VNRKtmBg6LjWfkuMZ1Nz",
  "key23": "3Vio8XgRHMV36UDmE2UUCFGq7e7AZffAyYoESgGY2tCv2XcyQ2jkbCnx2CxbJFGnpePMGvMkf9BWfkdyzGwoeAsn",
  "key24": "4mFQAHqiQ4nZeBGt1UJUMoTzAnJNsjK3qL4S1jDPi7LMjTBXjmRkQR4v5Qybh9qTWzLWkUwSBBFkpfFvSBTZg6MP",
  "key25": "3Pdj7W7RV5b3yuaf9SR4kgEsjoP3yhG8dbj1rQ7PSu1rrZVpNfZ27Cw9mvKvWVpPS6JTaGmY6me1XTW3rhCpU1tB",
  "key26": "2JvsR1Hw3mtWpVJpVsnydhpRT7GUe9kZpYVJ5xo7jjv8MdxvNfgewuCeG353KJdU9MJEojyJQdzVWFPzteBvWsGJ",
  "key27": "49KAiNhdr5z77sNL4KapJV3c2NAwjXhf5wtZUAETWb1SuGcf9yfMeYi8cMt5uEPo2DDKPBx5XSfyibDYGEQUooNh",
  "key28": "4aTHcT9NCjCkuSGcBMzeKockt3TuHUBGU2CDphgtJWA8uQMo3Uf3inQr21bVA3AzJN6jmfWpgb7h2c7mszUcBKNr"
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
