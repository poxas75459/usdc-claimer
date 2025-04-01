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
    "4ojwjcMbWEyGdNAK7zdwAZLRtqPyKfUairkRVfbUFY79aS7qDvX5CZHRXF3qm5x6kNek4KyETwXUS8Uumhx1tpaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUMa1VBLWxi7gWQUM9hwcypFA2ZtFFbzNM51kWVfqRyWy7AhuuHLVmDsowuiqv4kyqn8ZSR2CjbTnSCJhWRdTLr",
  "key1": "4tTM1RhB9m7ACvJx7H24zRQRzTkLvhxQqbhZGE7w8TQjEXdLUHj9xkjatmVqsVRhUrU9mCoUUWPom8m1JqYz3kY5",
  "key2": "3ShTpJRLvAEGw4B4x3fpWVEcXCXrjYEZ2jxbKHFUqZ25kGYpQqrS6Ha9xD6TTULiC92yhy54vYHejZqWTne5gxDE",
  "key3": "3Hvfjm5zneKZKsFkmHHn174iz7DTqjT5yQTrCPm6tXb1dMRpqCP1bjARvrL3YzzAtZbvpV36wKwk2yCJ7q4o5gad",
  "key4": "3dPs8x6ExydVDdtoAcEwtUwzCUk4tZQvtfF2oF7ajthJHKLCuFnrtsiL47aztpAaBLaL5S8qNE7eoAjVhu4Ygr8t",
  "key5": "2iSGFiJakAo3H6CdR6RLyNZVUcNuZc41gzxsQ7G6fA7C85AQADoZD85PLnoxD6HM174SwiedDMWKeQKn5b5fxEmb",
  "key6": "34pTVsvDPzC3SnPrextDaiAkKYnWibipGcZTVernDoSRrxYonpgAH6qcX8ZDr2E11h9q2HMB5z8VpP5fCBVbyyMX",
  "key7": "5WwouDSWTsq9douCwvJJA69vkhoJrsA64WcnKkftGdtWQk4a9mzc3vW8TZEGrErQ3aT69m7La2SBe4yALToXesuA",
  "key8": "4fvZn6ttxb26RYM6YSKiELy6zQvf4iP4Q3gyQni3KzEf6xjyJ9MF6wGPNmviQ3sLCFfHgG724QGu4jysgiS4DRqt",
  "key9": "5ZRmEZWNJ81czPk2Q2ya5RhLxAXzHJiGGJg9ZAM5nGk7dLmpfT6wd1TqFD8VizLSPhMrPbqnfmzvKk7Vd8w1yF12",
  "key10": "3REHmHkQW7Vc9fCXgKhNXfKxBjqo6RvMvzdj8WyBNvh9ZGhJRCaT64U824Sgsczdv6qN4EKKWbrP4SbNQhteJEs1",
  "key11": "3uBxpyma3J4rDLdfATBL8fjx2LxLzsaZmR6iXFF9xhQg7sGffuDhpc67t7uwMC9TDxQRVHw3qQZUdhm2BMGX7orz",
  "key12": "29sqWJheNposvtn6M6YsYkFH2MWGentHkMcmXwcDcf2esXfJRTE1DzCDHofCr8Mcuwnib4TSLYcJWrhqMDwwH24P",
  "key13": "2imfkWGQD8hjTh7y9yMfWpxMUYcG1SdFuAcakQsMUYvTfQ9TF7Kni56mXWsCoqLq5TiNuiASyJJjNgv4EwjfyJrV",
  "key14": "3tsR5X3pcTZ1rM4muis8FBiLTF4GZHyFvV4MM6CRzkePN9sZmu7cwDPb2Ckvv6fVNcBkYvGJx5WM4XUii8jUJ9CA",
  "key15": "mTffxkvUfGxmzXentkB9KVvb1NsAbWPND8rWADgexEEw5S4ebZ6HLLWk85nyJdjbRb1wwTfxrZEDLJBVaAvNvEh",
  "key16": "v9NBphgCBs9ErX4Xdr133zNAzMFAXVK6XkwHJ7uQ4gk2aHe4NFq1GLyyuB33crSgRBHWRFgHNumV5b34zDAdfV8",
  "key17": "63f9gVSBZdMxGbr4vqg57htMn5CJnSPbncB67jCjk49g57yALsfMdeDsVvGFDfPARf8B9nFpAnYi7LsaFYsoiijd",
  "key18": "4vSenXsXi9wQ7Tjks5CHExD9TTVttxFkPP77zqNKXafcuXgnoDVbT7M7oZdDLcWyRwbDdDYhCZtE7Y5p5G9SM4Gw",
  "key19": "4TFBrFBhq8BnAeZBoDiSaSN6dZ1YgJSQe4mJpRro85GJoqWcbYChN8cr7Xvoxv2CGPCzYq9RZKf8bdws5r2hrsn",
  "key20": "3SBFnaNxiPESVGZrNuQkBZdf31acy2tJ4NmGwMCCdwsJGKBfjjcgZuKUcbv9CkvfzNfSMkyTW7uszn6h7SkpVt73",
  "key21": "5SWJeLAKotqyjnt2ic3RGwfXbNz3ijogjvvEuXHWLZ9SXfVnMBPf8GDs1pv998y5R5RaupZwvuqe7e1j6mkbuQKL",
  "key22": "4i9662kmSJ5XLQzPrmrRhHdGPaLYXJb8zjET9GAumYTPQLfsGmwgXng5YoiWNg8Zwio1UV73huQmLn1uX17Shk6Z",
  "key23": "5w8hezbcARbE6DfAsguSrBRWoTpH6YhFourae8wMfSYKARLkovSd5VdbsGTGFjK2Uc26vcLQ8WswdwbCGySsx2oR",
  "key24": "up9NsSamkFoWwbTLKj8oSTJcwyhZEMT64xgmTZwc332KicktAQzxU2HGuhzKjJcbawrEGKdWuSWVCVqQJfeDD1d",
  "key25": "LgFo6xRGHTTHqCsD4FXhWhmPUuexzrhZDaU3aWL6tt2MvrqLMez5TtZfmsc1qL1yKyRt8askKuDaQChNowPoAdL",
  "key26": "3pAjzPtmFJPTXrpEYsbBCLxcFL3r27mzLa7m6Si5EFnm7j7JWQzJAFvFTD2ND87XXFov5r2xAS2iKuC7xeS8tmBd",
  "key27": "4dm3RWsi57G7ZUTLqP6miERu6QAoMFFs1tKnxAfipvr2SAT28DbAcgxVriya8em8rUBJJut1WTkoa24jcPDaCZ7v",
  "key28": "2FRsoHTrufehsEMofXDov6QVcbzkRHnHYKvsWKiGeQHC7dsjkXtqBcF6MQarNUjtuBTW77EUTHTMbnv3qARCrJR9",
  "key29": "3WMHGkd3hBd3tWDJXWYj7MyG679dayVv92n5BPicTfac7XFGZ7o5UA7bmiEvX9Wb4rUxFV5tfV3uDxZQLRM8RoAX",
  "key30": "uhcs3KjL756BLULMM8rELZwknTUik1KcdRomupopC7mwygKst1ssqCWmN17YkjBMBEmmXKg5ZCnW6NrMR5ZfgWU",
  "key31": "BCYCpgsi3xRVLgBhgkCjJp3CnZpDiLrjsNZbeZX6Uxg2ReLphvhy4YesaC2EUNFeCLpR7zxZxNJkTtzctsjDTby",
  "key32": "4nZ6ha3hXGmQ14JGdsRz9Stnf8K2qw4MFapmWshNtuDkG83goqPuEDrAwaaMU31V9Sbp7CtvQxMgFXbsrpL5UYy5",
  "key33": "3z316vFaS84bLFKWjHiw4P3vxfDaeVFYmWRg9xVFP19cy8rkqZ2CHkpgKiCbw1AKrAXpe9GdUmp6yShSTsb83Cyf"
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
