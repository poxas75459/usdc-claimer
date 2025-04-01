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
    "2EfKgHEA1YJSQad47zDX7Tweww9HkPNYFc29ym8Rn54oEuaXjsxgQX3ePNW6VdwhzNmpZdckmQQjrtSUNi51kdtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FYFD5Kpg1VHGXftuYj4jurEZCQhF1FdXEBNA3eMd6AWVGtbeLn9ERYGif1GWZMDhK4Tk89bYES46Cvd93Wo6FJf",
  "key1": "2HZY5DYFT8Zmo3mnf3LM9YWjpqgjzZJMQ7G7tCTA4ev2bK6GW6nnk1ZW9345ahQww3ZSVXu13BrHtHyHyuHc5HVH",
  "key2": "5UQZadsXABzPEDFxqawJMUfNLHeEZqfi4qo2Ff3wbAFS4H47sKfnNpPn8XD5WkupX3Bjj6i4mb9SfSP8HMskHWAS",
  "key3": "3WdqqewGEBHeFvvUBCWgXtvd2emjbtzuX4QLbpHEwD3PnkeYpNpXk3YvCTQQpo6QN7bkgQzgMdxkAvWnsjLDki1K",
  "key4": "2kuqkHrmEMeSV9btTGAD2q9LJc9SMJGbYRKELboNXupHeqxkYw3afhsmgdNonc9pxaf5n9Jai9srWAqZqRo4aZkg",
  "key5": "2DV8cxXrakARPRKfnQxvYapmdBY79zRpE1qLGt7wCGjdsYEUx3PDMVfhtzEL4KcnDWeKqbyAigHu8U2qYhiBgKWB",
  "key6": "2X7MMMcQ1KcBsqMrwv7EcYvG7nvLUAe7L3VSf4Si4vhwW59rARMSCqMnfYf466sxmrPmNRb5ufzdv2pDf9kNU2cG",
  "key7": "3KPwGLoDcNv8FBBr91EuX28oH2mPUAbjs4dV2dbmuzemPdknLAbUGyHCFhuwjMcWuDUjbhNBNTnWW931sJqrxeRz",
  "key8": "5u7Xsp7XPjUNJF4gx3dx2LhqQgoM2WDZbWBCY1SRdjL9E75NQuPRn7ybE3MvWvy5K41hk5tSGLJUr9r9h4X8TVfP",
  "key9": "2gZTn2FEGSBqh4m5CawgFkvSKax3MppL35mTjBH4YVXLprGdg7bwGQZtKqnQugnyNTkihMs98fHSbvunoiGA41mZ",
  "key10": "5D2ra8VbugTFbqE4XwA8CWS1JyQym5NRCgYvjHWLHuiPnfNc8wcqBd8dCpTLpBEgFZ62itmviAZx1wGhSTBtUrzi",
  "key11": "djRnAsFnWf6jCWRGHv2zWRLoXhzwQgzRcwS5w9QyCoYzh22znQumfboJvDDjALZxPrwQfJuL12MCwHEut3xavbe",
  "key12": "3bhmMR2tMt6rcNpcQB4dPxfkJjyx2F6C5qh8GVdqA2Azgr364Tnhw6Wf2Jc4FVH4QVYFgdcH4qLz7xjWzxFYVZbn",
  "key13": "3NcW67B7F1UwpeMLca13yfC2ihjR53kRa51kHPvTnEbquS2ct7CA1D2tEERWVriPdXNiPF4D1UNis6de6anvDoXu",
  "key14": "LQomFAXBXdKztHJQ1iHkMdZmezPaafCVCEuitV9t13UMqyhpsr67tt3DCCEJziKum27wCCL3N7rgmw2zzYYKL58",
  "key15": "53ET6agJyeLT4QnTHHYLoWhfETpJnaxWLZrKxCA6uA1uFUhtt6KW4XmJhDveGAtnXhRqKCUJ6EQWhnUgKKKGyqW1",
  "key16": "2Xjt4qtXgPLxobdZc8UPmo22RBcwUnY4e3mCo1VnoaUZdzXXTLELJc6kztHtCsnvgtDbb8iJVRn17XcZYFEuhUZL",
  "key17": "3jMuCYWHSdZtyRCi3zEVfQuf8vxN83eAxkP5zCSG66UB5k9v3rBSqNfaUhxM7rx4dzfqjA7i6Bq2msxjDCCPvngg",
  "key18": "3tSu4TNCTJ5zWL74G3Bkzo18QZQzLheX6qvueXesUh6eUqaA7DkuEKZkUtWdpU8iQjNzF82GtnrzGkzt3VuWvayc",
  "key19": "2cNZoXLj87rSqzGJRwoj3rBeL1bRFzDfMwGSPtLANu7UABUafApJ2bSq1rFd9Psno5RjnQrz8VyAvKYV7VyYJ46m",
  "key20": "3ytLdArY2J2cja1JvffePQYLuUJgbmiWgrj8T7Z66ME9svPVFhsgzdNf5GR2w23HMBUis4Uj3dxNgu4QWt2mp1Wp",
  "key21": "624AG3CBycuBFphmmvC63piuqbWAfa6nKEjSu9noLWV4ByPxskjLE2VFMJzXwDFzK6KFyRDPtnLDyx3p3ctBaXGJ",
  "key22": "5R5QL8LrZzkfjTyWmcHMWF79CpRwJMxRhn3Zw5yiByZQQVXoq2CNynmyirkCaAVBmpf6auzpqSo17T7rEJCUpZ1A",
  "key23": "4XE1BHR4EB2FpSdVJULcegH3ChuAnZZdDBDNF2njA6yrjY2wbh4xBj4kmquLjs5A95j68qWmt2JTCsTF3P9CmGov",
  "key24": "2Y6NoLCH2DYxzpvdQZem9VdxpsGSS67qzei1rJEHcxpspvZXpWmJG3ZWAhaxhNBMmcxK5ct9jc75fgzkyvzzBbMC",
  "key25": "3Qv9cLxXKo7q8tzHXGe7UvqkNG2be9dJVhCmTMfDUg2d9M6ma2cUx31xeLyENYmaiebw147dGP9AY3KBsSN9XbxN"
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
