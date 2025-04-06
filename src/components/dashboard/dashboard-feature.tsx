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
    "4VzwvsPKb16nqKyrBP7kkgDK7DoKYR43FrQHaeb193jt5cSR33WK24cQ3RAk1mBGouj64MH6KC3B6cVXhrFDE1zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27iZEFPLBJUK7Dy1Eco4TLHNgiVRMDEbqxaBT44xv2h9Z11HrLACmXUb3KUjQFwahGbd3DSJxm1K3aJWBJsDnRCz",
  "key1": "4QusoGeW4KoDESYFPm2ggCEUpjpXxdLdWA4hbrJu9WXiaZj5f68t6GMVMbRkShSPW3Ydex7BiHuwwVXxsbSFY6sz",
  "key2": "oxAgcqYDif6tnoZWKLLc5f4SRyoc7FTC388md39pYTNV8DEcwzNs6QPNjV7FEBisWqRtSuw3zLVAY9XnX1pEq2G",
  "key3": "3PL9pNEegDPmNVQxjo2i8zF6YXqsqjRHAF4w8NU3n6XceK77cZZPQuZdT6pH99kCDhZrMsLqbVDwihJibHpZZ3dT",
  "key4": "5Ku6fwPQvgWsrKZ2GCmfp586eH2ycev1x6Qxi1bXLTG7EpGp6aULU4yPujnCBzoaH2TH8LMBMfjWkoAzoawm2CfD",
  "key5": "38ZgvEKxohyS3mVRWWkP9mi6DrxhvHqDPbDDqppuLkFHrsmu2z45WjrMu7y55hZ2XKjoL3AP9DgoMMNcdDPvZVrm",
  "key6": "4UQkrQmFjkPzW3FXKH3XmhYffrq44B7Bix3wK17rPLRHQoStnrovpEpi87o7ABrqDbjdz8x6Vqdq3DZFpqX432BF",
  "key7": "UdssA28Fi82ayCF4Gs9jP2EbjGFvhuYUHcmVyMyofkNAou3895tCma8gqzGHwqpkjBSvELgJdx1Yn3CqHTSbcaV",
  "key8": "5pSpv2UwGkLx78iHcku6A3tob6JymxonyhWWkNHhghMjapuUaE35tV7W2NbZRJRBMjrGKcsAj6ALSWRZpeEi32wx",
  "key9": "NKRhVShxLx7qoNtd5JbEmiZ6PLHQSqPFgzbyWGS8SUnQ1m47sygu8aoN4ZQTuaMKXgYDb5fkBFevYcBGfy66K6j",
  "key10": "3cfVsr1yuaLgMya6JodeeQH2zN8kRSaKYgpA4mvAznYufpQepy9BtpiG35h4xJRawgV7czdibtTnFxnkzuh2pq7E",
  "key11": "5spr4Rw4Xq9cjtmkaTcEVH1MNhSgqEqrx6UbDYgiERho3TR3BvWD7NeJJCnWmNkk6vVnjB8K8NcMPxX4wdwonw5U",
  "key12": "2bLqhRVninLCKUCNXphMSdtrs28DHimEiV6gzynFSzJ2zVF787GjVeEhtjnBft5MAPnqRZMSQQMndbRZJ1NAtHmg",
  "key13": "UN32EpoR9zH8Ypfj144La1VkgPKkwdXsXZ9YG6fviKNM5XSnNKZyQuC12H3yWQKAum8B31q9bRdszuG7TtnE9Fg",
  "key14": "2V2tp48bvd32dxYJ3YLgKHVWUtnBxwq3v7ShQ5JrJu1hVzhYZDFartRuutcW5VQ5QPbRex5Twx9NvMBzQX3TUCPU",
  "key15": "xgNcMFh1mpnUrxxXp7Stqz2E89KZ52BCAri1YtoRJWa21cJWFHrdKsDbf1a8fy9SZ8zEJiManPEJwHY94LJ4sZQ",
  "key16": "K52ovkcFmrpYzhY3kkpouUaxt4ackpQN859aKLYhYsNaZqFoT8WJs2KoLxb5BiWnSFP7zBB7DHxUbwAH4bWChXP",
  "key17": "gn6m3NZp93xnKgUwuZmT1itLs1MRLdws9AkBA23ZbZCc3riLbgC9XnWtJAhxCjAFiKAem3eNTnpeodtEuiX8NLL",
  "key18": "2qrbh6mEtc9FCwTA7fF3GrHoqncaJaE9NkLYProLUM3Jc4bgc3MV6CkWdc9RwAcgEo7E6MR8zV8v87fbfc25t3JG",
  "key19": "2mHoiBwo3qEkcW7YRax3nnTMoQ9HPJKRVH2GZLDUb74VA6d6Jtghq8heDsw3LhmsuWSufobnTWXYBfWKBnYy8UhH",
  "key20": "4ME7NoYkaji1o9rtr6L9uqfH7QdYsT3Fnvi6noqFwfdiiRtKfbf75X887DUGSStBWB4LaAMkrumSjnJT3e9HJ1W4",
  "key21": "iAoRiMdsX7bUYfjZ19zcwudjcB4bDrXbj6v1KDKLwYJ5CLoT3kUjHz8MCSmM8yyn27EU6P4SGHMbTLNxS1m6hRy",
  "key22": "3GQgydtjashW26q1gjxc3cJwra8THjdYJZnVkvAnXHRyXToEmpaTPLCQuLwpFQB4ssdWgzcH7dMtuTYzACMFk2ba",
  "key23": "iGgaKw7hd2s12D1nwgHfxArnXBmjPujmD4T2bPXDFVDSFGg5deZ5oibDxXceZvHFeG7L3fDPeCpACXXnZLxX8jd",
  "key24": "5hohFZNhuPbmC6xyG4L7SAfLtaPstnkk7hS5CTiZxUTUVJhdbMqD6XFKmVcy1LsizBR7Gz6U2UQoe4fHY2qxsxxN"
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
