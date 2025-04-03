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
    "2xoVEbdvY5mDzXSwkb4Uv1Dj8HRn9B99JHRbNbFfttXYCysoD99auhWKPjcLomb5RWL2euxTGL9fX8yHGZ5fNTXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRJQbdWCkQvdcuMeVGBAxxUCzMBCU2oHkf6HxV7qbQp3eE6WCNdpm2XNAECZPbiv1iReboLp3QypH6BCddeKmq8",
  "key1": "2tY7C6RBABPfRBeZmN7ocAYoctjoMrjB6kehJxEMbb3a2566jdhhrU2Lu4GdcqTnKcpAESTLiLi8f6hoNHC9PnBn",
  "key2": "3vi5xgDmJn82pGrMf65BbMxuokjVcdPxD342CWbaH6g5hShdhN2gXEdtjUb1qBfN82jscAdvYMV4LoFSTvgHdvN9",
  "key3": "2TyGpETVrsmoacwNzVtfXMmLmexp4JxR8w649QxzfH8RUS4xkyAFQiL4iDy1jJoBAjk9Cb9kDzkaUfJtgEwodfWe",
  "key4": "3NekA1f7sfH569FhdxpDEjiRmsEG5e9nJTMYLNYMGJGE4iKm2nMwtAhUePxDkjDPvN8gVhV44i2QEGMuBweQPwsf",
  "key5": "2cg1iLkjLVpCpMgewaWnWVth6gUWLnLzQwP4wxADZi5akJum4CnEF1MScJM4y9jApWVc6JjN1J3WAuAYiqU7SYYf",
  "key6": "2d59KbtvdHC64TAdrvTC7e7p3pHWieKRPVLhr3EULUWpsqPhsChFLmKMFXdF5CYKcL9LdzyQBX7tipbJ6vD2iqY4",
  "key7": "2QTT39G1moHXbynzkqCzfYVdNriSLg4QqX8JSsbTaF9aKd585CcYAhwGcDzgXdEoZYEqo4PaML2cF229dmr1j7Bq",
  "key8": "286sFysixcJuYDNz94JWAsNqpxRfBrgJAm6TNS8e6wKNgqo9bHfrgXRatHFTNNV8ikbEQVzkp24wPCpNcX9D7HNN",
  "key9": "3Bn3oZHn94cx44aFWCv6PzEoE9Qh43jtMkQ1TBSk46EM5ABwzQonXbXxEe8XC9jrgUza26srJLzwPP5Smuac8JN7",
  "key10": "5JxN1AhvuRDoGrpKqXs8z99z6dtpidPGQ3R8h182UTm83bpDa4cey4AykcKpAe1PxpmfPnS385mwJQSUUZPkxG3Z",
  "key11": "7TAb1m5k8b126BxhdN7Bp3iNtSjakG39xuBAPzuuLi7aGriywY4ZKi7vPRyWkZNii6gTYEcMKHKrU58pkxMsfyN",
  "key12": "3rLcuo74NrsUNn6qXGWPuzVcaCSkFUU1z67QfGF186CmKMvicxqx2PdFGNrtBgSJwAFWz8B7B6mrV8jGQAkxigV3",
  "key13": "LUkFBuCyf33zQ9FWcMQmy1e8sCoKXRcKQesdcU1TTkYvSqqEcNuLLJn2wjiCgWbfJtpDKwhFzan2jU7DAQfp9Rf",
  "key14": "64h2ujbPhQQRo3sxypeYg2rHjvN5eUGzeEnSVMyP5sMTifgqBppnSj1nKjAGRjpSUQnDMBKAerWdqEXyJosezPzy",
  "key15": "4aodF3KwPniUAE9MKUYB8jrfQVZd7gU2LYH9DQjKNJFDeKv1DmeJhQEyjy2zVAngYfSshDWxqbmoLFgHan6mc2nu",
  "key16": "BBpDMcGPViG5hfV4oBqpUw3VgmMzhGsVU71eR8twbbN9o326Ui2indEraywd3YWzAy1swbUF84sTY3qfuPHrX4j",
  "key17": "3B719MXkoScjc5tgi8Jpx9BHLiQpD3Ze2TMopgq27DcF49yfz1VbWTQ3LHwbDKRLdx89oK4d8Q33Zmg564UQnBDC",
  "key18": "65fNEJDxNrwtNWqAtXVpmPhzLop8KYNmKqPGVSu2pCSmvp1GUKuFmsDg8BNDbFQFTswCFf8m8rtKZLKRarvf8p3x",
  "key19": "u3jWECveQgL1xsQSuCQBN3UnwkSQ3K7fgZu1pbEfaNbYDgAMPkrvMUoM4SwKmnZfqAPuCiHLMKyyvMqC1WNB4y6",
  "key20": "wTceK2S4ukFgJtgsquYa9P2YJnMfssQGHKwKCCaHD59QrLJN5HYJczHsvjdHz77whCXEbzajrrdvJBsnj5WV1JE",
  "key21": "5FvuEG3hs9Z3rTiqe6TqJoKpPFzDDudYucxbFCqqCYbexkTQipvtr91sFWqZLRf1DE8fuJkUV9RbMYsvYWpNguea",
  "key22": "4Mn6nRwAfM6u9p3nh23j1QEYEsdpKvkwV1TQt1b8Zu84RKBh5sYJMsAcvTV9u6etzZYN8QM4adQogEnZVN7fe4HL",
  "key23": "7pTwm3QNzBU35bKwejv9awXmy64Dob3y2psUMe1Rhb5WQqfPrhfcmozydVd6BFZ362bxuXGwoaosBmrLDHyD9aG",
  "key24": "5Fi8jFLVu6jds32r3AimFrjDs7FB1TCfMFcHqLGd4YrbQCkTwbmxDZrZDbGKXwDVWkdPyVGcP1KdRFPw9caGbUC8",
  "key25": "63YmnXgBtNyfw55fiopUCW2zJfwc28GrPpsJgohxRkSEaeLc8YRWhdsYVppBAYV7mWfdrcD1AcKsfo9NwZYn9SEv",
  "key26": "3rmhAXbQMyRukXdrMqgPJJHD2cLXuSuYuZzR6mLPuhoUKJ5KcKXZjjzhTBsQTiw7uxjCC2bz2ex67zrJMzzEdsfq",
  "key27": "xsXdya1xBDd2ES8ws7TA5GTwjvxLkWHSoNzs7aGngvVacaNdB4kdMKQmp5kQgXyfXiZ26EcyAzCVDw7jrAKJWCS",
  "key28": "3hrdZvcQhBZEvpis1m9TXyMDp7iXhrvsATKe16dhMPND8P6A9e3diYRqQ5PkpcNsAwYUWHGaWGAKsHRkehVfFyPM"
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
