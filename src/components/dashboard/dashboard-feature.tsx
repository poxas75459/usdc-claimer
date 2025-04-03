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
    "3ff7aEfxwaNtj3Whohwa2eRYdJcZRhfNi42U2KDLwwJd9iXRZFPK5wHSmMtp81Ccrfcx4TxpxxfhRmeg6EsFJ53t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PS2tggcuXLfPCmWrCkB76We6PZKAPcV6rWRHcd7xfztY4jcw44JuNKTWYsFcWG8pinNAaaGQ2s9SvkzuhKADDFs",
  "key1": "4ccqCivNis6pgc3wyv7ioZBZZRwV599NPA8X19iQLEfmNa7fRYBZKqu8CSK6c6gxU3mH6156JEydnwrRTACHs87r",
  "key2": "5nriEc5VBHSh2aMj2DwpteHRg9Rhbx25dqiixYrFfB3A9nrx8cxNGagEjUaUBWzpiiYAjRd2orLZXyiHnRCYiD6H",
  "key3": "2kqcH8GovPdvoe2T7TUuY2iRHXF2y6V9FruY5tupkc4Ane3ML4Q6rDauQqGnLcV8Vf3aK5nGCS2R4LLfZe3reQ1X",
  "key4": "4ve1i8nBmCufT7kjDHRBV6PDQ9FLCbWVs3a91ySLRUMnT6M9nPPUKiqV6BCyhrikfmnG6At9Tg78kq7mnRvZmXoz",
  "key5": "27cxJUoTj82gYhJyiSFwMJVXywEM7FPZe3Ndzper75qhczRvY5MVQMYZQYtVPoz2aroYqkzC5ZmucdERQSDBSpav",
  "key6": "3KKcV6jBL2RtazuLHBNmoUwJ3GuG9tqkJsdREAHVjKUU6suFNM2XEBBJFip4qT6U2ZN3wUcxkmRumy6pybJe6Yc",
  "key7": "b2zXRLWvEtcHfAgFfhRPCwQKxLZe4UwPcjxa5wRBYhzC9ahQbcqQe3CnWj19dVWpjZE2uNNczY9JwxufQMBZtt5",
  "key8": "4UFHHFzEqF1AW89wfZiAXFRLGRB2vyeTEQdJVxcYcg5LP2PLvWmiXpjBeVpVEjq47Ty7Uhj5Xw88Mbbq3ZSMueJ4",
  "key9": "2PX2eAGYZNEd9Afu5ohQQJs2BjsYMps8etLHiVorV1iMRJFGbo7v1jeQjiMVSbTsyGaz5mWUHbWFLE4jCXtjE3aX",
  "key10": "2anciwuBQgW1ws2T2WJFoxwrQ8gEBnfE4a6jUTGrYZSjE57mzAuhgn6ps7jUoaJVFj5adjD8SorFJToF96fJYLWy",
  "key11": "3f87N8fbtyjMzsLnz7FTcF2GZmnRmC7pAY3ddbmDhPMG631RYGaMRkb54gc535Jct1aQrKN4FgmGu1C788SF2dxz",
  "key12": "5i9L89gyc4onPAAogxMq9KxsU4s5PM3SDXf26bpkKv48f6LdBwfhPLVf6Gc3zkRfpYAQvx81kDdQronvvpXwKYK9",
  "key13": "4ky4HTy6L1bDgdnC6R2YARuvvH7266pzd7cAtTk3nPHHiA4VcZZGfBisDzta5NXZPHjEWh6YnaJtQeXJgKCWiU3n",
  "key14": "MdCe9LFt7edqAfh9ZBae4j53rRbdendE53UyjretE5Asd8XHJGeLtjjNRQZBYGvR7cDjhCv5q16mCv5EzL7hWzU",
  "key15": "3Ty4ZaiKZ8J2BmNZexGrVWKsykLtYac7yPyRjkzSZgeUCfDRtBJdCLjPWcKm1TVjK6FxComCg2QreVcLYzYukaNS",
  "key16": "iB9YeUch82NFuHBqppJPaCNx36BDhh7xtu9B26prgixLvJHjS8LwFU6N69MGPBPkGFTMgLqXjCJpcSPCBxLWbfx",
  "key17": "56U65C1nHcVEHCtRw9qManpLUWxgRPXSSF1f32CxptbYs714KDWihGx1mhPPRVS8AzwKeCmW4nGuVNax6REHoNuZ",
  "key18": "26BULskbRP9BLRwacGaJcS88nhARSnfLs8Avv1tvz93ZcsLGBYK99eCtsZuorRt5G9vdGt4PFX3aMWCQX21zxUbf",
  "key19": "4CF4MWwV45ZsqPjBfkekkyThwBuAJvyh4YuHdKczDnfYyJwhGNptn4v4TN5ipfkdmVfyH1E4d5dihmgPrP6WRnT6",
  "key20": "5QxzSER7M2sXE265jB5jR4ewUMGFrRaWQkGitm6U5JhyDLqv8ZXwf7xK2AH8UaazVwaY11a23z1Z9FfdXHWbJoLz",
  "key21": "5U4aSrKV124Tp9qkeSyW8QVjrKWSm2A9nZ7WiHLyWoYDaoMQJNB1xPsNLve3YEzPAE3KrQjSeGgmiVehD4c7t68z",
  "key22": "3ZLY3tEiQdPLsivwc7feiXo6N6oYh5G1KBf9qMeRCMSmFdwots69UV5qi1Ct75LCQBE6WVuQGHh4dLPfzpAg1PV7",
  "key23": "kwFqMXDoyCCKRhTLHc86EVz6kfQUZDcmCGRmdfCko8Ly9kM3NFAE7KLZxJ8jG4ercgbnLhnCU94aFVWbYe3jJMU",
  "key24": "4PsZNRuXZF77tXXFfqpmq9ups8zd4gNn6St8oWkgf6j427a6dB6sycpRDN3xJFsAfRv9C3UpJvP7StQteMDvsBzQ",
  "key25": "CNVkC1UTdT7x3JxDTwbWPy2kGSow32Gdu8SMEchWAaK4zpqCtFA7Av4YyuJMHMpRibash4vGWSUp75xmBbBWWDu",
  "key26": "3w9cM5RL61DC12YcGaN2KemHAtupudzu2TZ5XJ3p3nbbQjqfNMguJrT4eWpCf5ttJdkV3k84PzK2nm7t1iLGPLyg",
  "key27": "Sq3XR4EYgR3XqmBndHxUeQbj4ia4YHjMuuNwZuKASZWGY8vHgQP1PBkVTi4xGukRTHmx99U41TkWF4zADVxfQbP",
  "key28": "Qp8wNvcvr6rtYLi7YdxbRGoVA1byE7QULRHw1HNt1kqW5BZCYazXztsEXF4piqL43jFPoSHc4XB4UkpcT1Y3TK6",
  "key29": "3jx2Lm57m4sZva1P2Edkv89aBfHDmynkV4kCTrjHbmYHKyr82Hg9gWhnjvqv1NFtoesXysJBySKRuxv25exnnzhk",
  "key30": "4QE4U1byneHGGJbwx79nTy6gM4wGEpqZjbcckVgQz2AsQXKMC9LnCRoFmohJ7EYHxE8zA2Jd6JvfiTWhpskxMfDY",
  "key31": "3yj6X66GBkVG2tfguU7GM1A4JrjpVk9uRYPjs9wuZgyJwG8C5VjLoFJLR9cMbRNPwYRM4eRnPdoARTEwYon6Y2ow",
  "key32": "3RWezqLFTSSEBwABMQMdcWhNA9oz1ueEbsm7MjQ95F2RHxUnKwxjaDTtibQ3kK3ZbeU4ymEVKkwVMv9VCKaoURBX",
  "key33": "J7ZGoeWtu7C4117m7tut1d98JLKrhN3uSWBaEUYShJekRPJXq1jNrbY4XSvEFwN33z8RVyCkrSR1ncMwz8NRxNn",
  "key34": "3B5bpQdm2rZQ7vPJF9HUnVcPSJKGQWGUo78QA8G2tkJMSU2qAhSu4HNgzh8h5Z8FrLkw1siJUCKSSuyCM3BTq8VS"
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
