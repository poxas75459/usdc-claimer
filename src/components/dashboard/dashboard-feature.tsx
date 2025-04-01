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
    "3XN11LzydxDSAsmRZ88anqtTozzD7P4UJB6wFHNEqKxBirukonxgVLo4HNypfzNF8fnq246axe7bAqpnzvdPb6wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whwaB22Ly1w9dx8xfTsHbcuN6Rx2WSTMxPRc4XoWV3sz3G4xfxtrrWznPVZSD8fn8JBE2L2UkKX3XFGeV8KFvVH",
  "key1": "4Gn6FfdzVcFPzuhGvcZYb1xQmx4FW67euN8hjCFp7vcLzULgKwx9WCzVVaZja6XoFDhgE97MKRYLcsP83Kfv4qfh",
  "key2": "5EwXYCXEcZ9LPFZeFXUvEtCZmYMhW6xpgKhtvPzVd6DXfnL2ukCnZFsFGGuZDais1BSojdtZ7VpNTtZ8vMSYRqsU",
  "key3": "5Jxc9KivmvJpVWBqvg68U61JJafqfciVWkDPX4eYgRsDrjCQiarv5wMt7HPwA2GncP6ydg1CzqCyANGG7VWgGydN",
  "key4": "4sa5iz1X26vDz9jjj4x9DCe4oTLQtQkoA7KcWRpzWEZLNdqzuZBQYmFzgnLeGHwrqGjrMhNEamjeSPHNnLx38RG1",
  "key5": "gJAiDg5C5FHtPXwDiHF4KRoUHRkhhSybACeg6Y4vG7wmkCHN6hZp9rekNjK6UigwF7qn5J8JxRTGV7uxeahp8WS",
  "key6": "sasguYvpJuht597HbQwEd8eN5zK6fEdR6B1C9uVajgV8YrZFwnrg3oWgbJxzKszGj978dYZeaaQVU9ALCtUXRA1",
  "key7": "2JyetxTpq5BSypSBKrVYiM9fWGQVznjTNrxSDZs9Paf77fdZW7jkSriADNg8gSAj4DwqAQz9jc4T6L6Qy5jd2meS",
  "key8": "zhNWwt8vRoEhuzPVwmv38SHr3ZFqMBCx1mRa5G5J4mHhsbQocWsTNDRPynTFzUGgCy1iCUDU68ckFKUXdA8eHUU",
  "key9": "3jyHVRU3axh8r472APNtEcvZzuHAf5knYU2AAo9NhCYaaApSmmACjQfptqieX26hA2BhBsusGRhNE7QP1CufRp3t",
  "key10": "5iNUefYjAGpv6ji9Rd1xWSpH2otKG4eScSnTBQL1YuUo5tEdN9HSZQEbh33JpeHdsv1Jd9SfmicA8CZCo5UnbVs3",
  "key11": "5rBUWBNLeEzR1LEsHSFTbHFHLRfsncKNFRJUxd3H5apUG9LzenaWCvURgEtKWqchY2zkjKwFS1YVbzg3QJX9kUcK",
  "key12": "2nneDsMeG8jE9Nhey7xdDsKZmM7Ndy8x7xEqGtDCGeUJet3c5xg9FafdGmmj6UAHmQSPyGtZLAgazuMPQCA66AH",
  "key13": "3yWiaKXcDYE2WYwaJ888D1tfJn4PR2tbFjQFT4JpeevJuKLktDinETN5mfuZzXaM3dKMLa2nkJjGw3Ts5KAAT2uJ",
  "key14": "hoGZknF74nzLWCLzPmVS7y1hbvycRiUARV5HUX8Atq3djuEPCWXdzdeKpQAqkcFjDBVpZyxBErdRheLKdu7yu53",
  "key15": "2TEiK4Aufjwt72JuTE6kSEDpnoui22y7bBcH6zQk4Rity7mVyNM2d8HwVY7BRnVPMwZetrP5K4ciZHqHzsSn6r8n",
  "key16": "2oG2MMjwzfW45R2bpeSoxEEWWr8S7TnRBqtQrZcJNoBmMXN9qUWKFNFiXZj4gy2JX5BdzqqyGyq2GT8aH7aKDu2A",
  "key17": "2ZqiRjMKZLzdYt9pzYPntUbrRxt5N6BoxRdLAniH5NBXSyda9EqWB1nLu8F7T5LQvQKXHmKxKtZUBNnSzFrnEqGf",
  "key18": "4grNXanHhTrzVzLxwuujAsBRy9jpJ9Mmqn2z6uy6jqUDbvqTp1sSD5tdGaCVcmTMJYoJCEPEh5KtiTRGSRTJuXac",
  "key19": "214WraTj1MXhhpfiDZbYXLvpf48KXqjbXXqJ8fd2fkRe3rRF7SxU24dxmWrw2Zh93tHmE7z47DymkHLEhWFpmruS",
  "key20": "5Q8Uz6FFJTfHFj7c7r7EnSpnDnkEnwW7GGiFUKsrEsuELtMLZd1KNsu2Ctym83PUMmWo3WADfoi5E84bCYsrwvF",
  "key21": "2cKjgmAgs5iw3v21fCKVBDYV7QDFZu41KXEGEVTvqd3c5Rb2nr85PPaysn71MxgDiVXkt2LuovYAGq4xWmeDbCUB",
  "key22": "4Uqqp5quRF16V5v6pxgaBRd6TRcozTcXoCJromVdihSrG6dNcXS1Y7HRpwPr3o1aS4QeBGhuNAi1LrLwjPAG8Hth",
  "key23": "cQkvgUQZuFSR4jfZdJZQsLXEDw2QxWPyE3nw3EC8cfhqhP5KYkFagiFPDAsAM5qs8uBhAWbUZNbgbbVXS9S7M6a",
  "key24": "6kWwQUCY6SksREcF8MbKaTj5yWwqY8SeVJ58nKJ9eiCyxXfU5TuuSBQj2mdSi1WP6k8cdEF72q9txBChLuCRycH",
  "key25": "ctxhtQcWrrfdsg1FjaUJiCJUruWp6vxjd6RS5tZJYnKjEjgc9WHHG9voELkKDSoXP1kxCCuZt3fXM81kUnJr3U9",
  "key26": "FX8Zr6t7CtfJ6ujM45mHYuV7uYze4zM6aZgfAA5wjubCB1gtVvr17v51GnpNRjCWsDiYTn4mUf5GRaVwTpT9siF"
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
