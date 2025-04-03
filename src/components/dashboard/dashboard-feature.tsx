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
    "2g8JSLy9vXfVmhYCYhbSeVkdj4j7MFiA1HUjARH3exAqPJ9mKHpdJaD9HV65oSRAzF4ViSDBgjD31T4wyxEn6PUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4RcN8ESmfxkHWP9kqqGKx6zLnaFo24pA3Ne16NyK716RQNxe3Kr7NrACTz9XRZKhDAYtV7cMP3qUFUKLbpdsy",
  "key1": "41T2goct2vC53gsbATcYhrvzHQij36ie7njcamtZCus83ihSVJ21tDaEuaqU9tTgwGF6NQusXiCs26CLYwAaJTAN",
  "key2": "4xz91Lk5TahiWgHGBV8qivt6NuFBfyDwrzAtsmogBnqoSQwo4UeYmwD98ahXng9voYnHoh2dccnCR9omgqy3UqwA",
  "key3": "H9VeH2zXF4sdkExtcsKfSxneTkvLomWa19xErynXuFEhghZttyAzqEenAR881imKQgVMsz3Ps6N7fa5QJQtjWJP",
  "key4": "22dML5ANSAVhYWJ46W6hh1ap6tdWemkUnKTRoKr6KbEMaN8Litx3RNecbEqkFMs5bvxRk2PMhsasfRoosVT22BU5",
  "key5": "51AeP5zQjEa7UF2pk9CziGCoSDeehBTaMxAJV6iUXB3FsUXtRjV3ot3n7AXhggYJqDVnfrp8g9Hq92EQvwrkn7NZ",
  "key6": "4PBJJhcJdXwHAhEdPR65T9WTp8TyMnTrsBBERg1BigeptkARsix5WwEbgfChb7bEBPZh7RLKMnnTBLde8zLa61R9",
  "key7": "25VgKEN5o3juA5Pk6QPUZkgDWycdc2JUQh9TQpiHy8PD59raATt8yaWZzN3L6vmV23FaYFFYFy5DUeAxioqWHXBX",
  "key8": "58kUmdGP66kHYhKCZhbcCT7mNdT8iJUrAJawmHzf679Y4VWB7LhuLkkVqB9AqaDy8jo4fDfou5T1CJ1xV8v93E6J",
  "key9": "33M8bNdPdGKXGfNLZv65SY8xK4MfxtmNPLmGPEkiSbP788PT8JpCxJmPTdBzUK4uAppfLoyRqW1cz1PWoiiK7ks",
  "key10": "2kceFwCbyW8gndgHEPZMoxM6r8ku8kTtDsfE2abXjBsysZ18BSNiaFhdGHeNcduRvkcv3bPW1fsNz1p5XaNU14CL",
  "key11": "4yF7qmWqA9TXEAA9YUyPxkgViUpyhW4yGemPPGJ2DKdUK94CGXa6ewmjQ55c94ma25mDQ7E8NXthvfqFpFSWuZqp",
  "key12": "xzg3w52WVdaDvRkBwd5GznGDQiQvH4M9gkcRtsyN9sdDQMbxM963oDtYe1bNAo41nJ9ffkucyzHF4PdYqc8Ztay",
  "key13": "51LpSyaKpcJUqj7CTxsL2dmCzVsxExpCEVodG4Zixq28pR3JkTPaxyQJsG27RXNGsWsYD4g4xDmvS5UNR6woyS35",
  "key14": "3JXNYxzbSDont3nm9WW9Mb87cFiNdcvQrU8HB919jeFArWu9t9gQVYZWepqmYxqXhdtwNArVTCDetojwgWcruM6U",
  "key15": "WesdrsVjeDRugMAfDBDCBgdhrLKhWy4gFae1vwgXYoJu1oD4iFnBazNt934K8oiL2BwJYJxjrZYXYRkpoy59o7v",
  "key16": "3yuLg7kzGCmSHSsNeTVA6CXawMDe1jZvv3F4rFeue7e1WF3GZbHVpF83fx9a4zEt38XDbu5D5P6xPCuZNstiw6iT",
  "key17": "52a84bQjkfNdef8tYgbJp7A9dNw4Q7V9kxaTfJgqNT5WrUrdYTXmXpDVnfCnzD2Lw4M3iPgfAy7fmmtj6zmjhfan",
  "key18": "4vD9DhuuRgw8ChVhf1A9aoZ3aVa4VahESaspCve4qQ9BMQWCTmM9F9JAGCGZWs1uARqL2GFR4zGp5qcqB9GcW6q5",
  "key19": "26gS49uqApoLXaGia4huKePyyvEVhE1XPEZ4qGRkMSJorWoXvnB5uEtD6ayXngKymAbEA68WVA28fgdnMxUvkaKY",
  "key20": "ZjZYp5dt5H4AnMsb8wwMhXVCGH6LcquC4xR7jXhfAPGdXzmU9vMdVEKmNanUvnoQhePKab85kCNgo8dXHjVk8fy",
  "key21": "48Qah6yKTQwWenU5DF41eWGYFVVb3SX8m9iqMHQVyvZLMVb3faPhCw8kNQvuPp21tVUSN8S5YG9uyNnGV79WszrN",
  "key22": "3fevD3nifvmMS6WksN1Q2xgAqNE5nSccRVoTz7buM8WQpK762odWgVzCWB3ekJnXb9N7BPCDaQzxErVbfnQSQbBd",
  "key23": "3rpNCCLyygQNGcTrf368z8gKyzCdc5LZiGFPqSBDXnVXU3DUf8LpxPMpZgBvfCAQri1DuQuS93q5BGavWxHpfLg5",
  "key24": "5eaUK7cY2iskit59DuTnUWFWkPCd5bb49b4TWzVJJWNdYPah4dTE5cP7DrEJRHfHUDtsh7MPvFviBcXfzK2yZHN5",
  "key25": "2Dgvz35Z2kvmpo1d6UgeMUhoS3VkAjpY3hs9NHTihZ39y7G6sdvcyoXyGUwHjebusFjuokK1DBaZLjoAHHJdgwT8",
  "key26": "y67sh8epP5oeuatoeT5231wgBS8Ng3WvbJABbS1BLCHHvHdYgyNiR11pSZa9RP39q8LBSmvLGew4anorbWYtmF4",
  "key27": "Ezjmi9EG5MZeD314UiJ5HPfRLVjtgs3JVEVzHyEphmKBMTCVtzaXFo4vaCiz8uhuyKM8dpXkuEYfZ5dR9J68Cwx",
  "key28": "4FaSEm9HhiCLSEjxbV7zMYVXy3zK2QNiz2L7RDwmFomV5FeYgGJ5oh2tzV1DDmHKjSXqpvRBaZ8R6RGFsCUw8A65",
  "key29": "5ih7SavcEQYB9PFKq8EzJZqXd8JkAoBcMiGZTRt8NzA2odscNuXmQBkwtXHChHCxWuXcSRUsvatcdRdEsMXGx51U",
  "key30": "2yCDa52L9zFtmeV2kMvo1ps5NCHatFYkfU1rkcQWQWc3JkNf4SMyaGMJNsLYkdaR39UQnNbDWyUNp8Ea8BrfHSjt",
  "key31": "9HcpXZVE7FJowuLMVsJiSJRUcLGhGZ6zudkRT6cNMAiMoAQzBNFuNoNboqTixtnhVPea2g5Es4YQiQ4HUZGpEmt",
  "key32": "129ct5TYA1kpY5gcVPT52YgkJB4ZkVQGVBJin3cFu4FAMiJGe1DPPddo5Eb47xcFET3sv5e95R7yXTvsTeaBvH2r",
  "key33": "2L8tagB9UBZMfRg2RK7zs9fT7o4ScrBNKLrvvL6X1upep4i8YjMwnQdm6b139SA42LoxyFPF12bCkpmsz9ouQz1d",
  "key34": "2hSCLtUkP6iHnXig1fpSAX2DJp8haw5SASmSGG72qE2f4yBJgvDJ7kmRHZgYVaWbQD1mcLdBbPcHwbx9XBafriG8",
  "key35": "2TmHsmy8nt9xQBDE2ST4LbFxM2m9knnj23H7bVfHGBPRMjDRRt4LcpSsV2mku2sdLeXchACv9HfKFDUsGbR4G3XF",
  "key36": "25qrhRwxdzwQXr4nNxjrBXMhq5nyK3ds4EMEH9PFaaXPq22D8X8jdgZhubkpGYzaVnvmJVD4T17dF9F66B2EHGq8",
  "key37": "2zPdzkyQHuMYp2cxV8By7AubhWSFDxLSC25FxFqhqUYKADSxd1iZ2j4eop7aiA24tVd4aCffum3BqUMDZcZXBSV7",
  "key38": "2mSth2WgFh1rEi2udu9ZWEUo6hFWFT4WFCaxdwvqbjfQ1UuA4eH4kLLKzfkLpbh8SDE6DXsfu2qQW6oDLadNGbza",
  "key39": "5P81upoHcty2FcMYczn23kpMom6i7nwzEjg8wHNGmGgjwFavJnA7EJ1AZL2WaUt2ARJEKFVdCWkd8xHmZpyfzNAH"
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
