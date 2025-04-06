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
    "2ZAESKLQicouM6X6Ba8pBQBNeVCtDGEmGVVkYKBmPbXLsjP2RXa6vD72ZyHYSVGzgJ5yxUbeKtjuQpDjSvkPr4ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ieXwSgKp4x71fcvuHUva2m1FgCmzPW6HhrBsKA3gCjp5h5dtMsUh2aRUCgobdjYnzL6bq5rYuc9eQUa1HRjGBUG",
  "key1": "384WsEg7kk8z6xtAofnj6iKjfgTjoMAoYHJpoSWsyLoRNzyjKKuD36BBcgrXcH7NfA6qvPE1b2fEqvvFEmmMKDde",
  "key2": "4m4nhPSimyUYtdbfrskGym3kTJPhK6d6UwkmbCZYgc4xCJqWdzWjA1gQAgfpTCXCcv4AVScqyf3uncFwKxJAthns",
  "key3": "54aTKnYfyskSm71Gc9We3ftGBd7BToigGGQeurSCfkhA1BMJT6M3sBDGk5T6NAQfkvZ2quDfRGVgHsdSQwBEnTXX",
  "key4": "49gMuFjbd1aPVf595Pbe5yoDAQLHPTy15H8tk1FLsxVAR57idyAU8DbT3URSQznxQsaU4TXRq1HeX49WosJffyrX",
  "key5": "2abqQMY9yxPD18FoptXyvovBQyQyfN63viYgfoo4L56fh5rrgamyhF99TDhnfQpo7w7soj1xzYxbiyahiWEPsDrD",
  "key6": "61xMrfJiAEHCpSCVWsNHYhW8n2Jzkof7J3hRgMyTifzgLTF9zqn7EpRJdSkb8pGRaDHLaYCHWxxA6ThBF4XJeLTk",
  "key7": "2PuDafNk3eSDsNMHXiopYtN8dPdbmHUrCGBdjw8L1J31N5di56aKeXkd7ZbgwwyNAH9hkSuWHN1kcN179UNzrfDT",
  "key8": "3AnSBRvZDg1hqUan7FAcDM8f1Dz3dCDJdjCcXBfcDLHEBVqypTU4t4Z5pnrJmGLKffH9z77iwtBTA2QwBjEpSrog",
  "key9": "44wFWFsJKxUNUjKq8kkeAjaUUdzfmVwRSCGdBtqZWG2RKcTuMMdZgRv791QdEWTLcYeHQE1TKicr51sFqL7ZmsmM",
  "key10": "3kc6TkmDfFw3RHRKJZca1akBkEY46yCEHyfxfpESUcHBHr3Xv7t13mfTR7yZfJk4HRxGjDAbnSEnJY2t8SqfrDzA",
  "key11": "3JyrDS8zqkDKWbJXaBJBByhGBNwZSMy8vfK5s5cJFCx7Ghtae7uXizKLEfY8a1jJW9NiGpZgtr96siKeGJNeKbmM",
  "key12": "ak8gSLwGN38FXijXyJvFcrbe4MNGKj8HjoDXmrNZSfNWswQRtU3UaBYUVSNhVvoxkpdKVnkgzyoz3tApe1MMvUv",
  "key13": "286iFyCLkh8RiCcsWEZb23AArVm1uAZZrZJjsGBmNZfpZnV9a85ziRMjPtQoPkdkGSiZrVSARgSbKCLmxSZJGXZs",
  "key14": "3wpEcU9xziFcNT2DoCU2M4n9srQvUAAHP7rWKaQjXxSJoBNM1UQbCTmpqyW1kQDF2hHb8tNkTnbzx6bPTQmZDinD",
  "key15": "3pQ18Q7ssnDPNAqBsbRnfnfjNaCrXoxnCjvL8CTFMFpnGWEPJ32NEuMYw8PsDsk5smieEqZXFa7mLkXnWk351Fwx",
  "key16": "2uvaDGvbejDtGpfajv4AdoWtdPEbjdW13ACHvq3kmJCU4EJqHsXWFcFMnKHLsMx4jQRKnq1oNWp9pozWjdTMBr91",
  "key17": "2BPFXkVNhiPaJtwD4PSL1ofSJWuMfxXNopBYMwB5qoPweMFrqGF1giSoydvkUJwmEdXfZNCBY3AavJ6SCAkdSV4J",
  "key18": "3T1jLgxWFiHbU2Brt1ZNQyR2mqF5cozcfrou74EAhHDZZMwDY1CyVdcfPRdGRCJeFhXgJpzs3osEHo9bD2bUJnqE",
  "key19": "4rGzRdB8TUpczSJvTocLnwNesVNX2LkrqAa9QJpUiwPRcrHzTXBNPGxRFzsMy9RZRRPiE56voDQjuDSwjbDwGLkz",
  "key20": "4tzzKJPzZwTJ7XBSAifwAF83Au3kSgqte6MJW4HTZn9m6ebR336m4UhMkyXz5Wf9TWUvYNa7Twv8rhUYaE3rCSph",
  "key21": "4rGMbpyrrZQFHJ7jNFcvVXuXPXGEGN6xA9EJhWto1iVon2MnAtqaUpYBK9axb7qS4kW8cJk646zozp53DGnYdDT6",
  "key22": "R5GBxaNUufP6tugoYaH63knqep846s3SsjHFci6K7nkDBkYfweScsZB7K7TQBb1MTBpQzhG5eS3STsBN7qrEBSD",
  "key23": "3SWtLG1UbNBPsaRyfXifXHToJr6nyw4zYygAXY1BKAACbwqq6DzXXRc8vCBYsnoc5VeshRiUi3K5Ly6qEjpQEGro",
  "key24": "NB3uurrgS8Af8D3GH3J8ziV3KhiDDs1dpzMg4evfhnfdsqhuHK2LoKe2MyxV8nK6CsGeYoMufekt9jH9JYgPGNZ",
  "key25": "7NQeTpuYyUGgxJsSDB3sE17871TSMsVZ3SpfjDiheLikkDwTsXGrrpv3DVdcdEhw29BNwKjrq984toZN7yfXCQm"
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
