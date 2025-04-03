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
    "4u5Z1pfWk29jFnZG2Nf9nmR3mPfWNAQjTR8V5oSbeVyjEBEDixhxFEQuSud3gpsrZte5GX3uPDowKcETU8wAzGh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmfjHF2w88ovnN2Vvb3CkpFAU2cMnpPzLcJKbh62AEowmZUqc2XcVBP9YLCVX51BvF6E2K9uDtoYSSb1EjM6AaZ",
  "key1": "45JP8KPFypckbKC2fxjXgLbcsaBJhsge6GX1sudgkUUMTnJzuCJwqPatBymdyD1D3GkSmtgJuq3TDHfekyo5MukR",
  "key2": "ZeJ9UCpHtfPxALcGw72YcDfFLKYoJsQ74fpLXPefyFb8rvcsgLZKtaxKZMgSiobnVP7F6m6DS3vn5GvsJE8ASDQ",
  "key3": "2ZUzoiA9YV9zV7it9UmtWJMdY5GRxqM6LLvgDccmzSaQ4tGtX5BKumKfKpdby4qiv6SArHKuDBHunMdAKKxqyMWH",
  "key4": "2ZSvUJGYJgdngTboJn82Ycy615hKMGznYcqY4PbRsbekJfNPXB1xD9a63pVC31mt3mPLowBFMxxooa93KqhtxMEA",
  "key5": "4mRZcizvNQNH2Rg2o4ATV6rNWu8kVt5SvKrde6Zsj7uh97amwuRre7m5h9PkPBrMNWLe8L2QikmVNH62o6v7Kx1h",
  "key6": "4vY2KR9J6uwtyW2PpM1ZrSLKPguVtit5DYPyDNJ4WCATZawoYbSYNyHDuhVxaJQz3RW7rxeiN91kk8YzYw4CcNcp",
  "key7": "3nHXmKn96XeWdSMmKmhY4HHZjrWu3NzUkoJeQ6iABGqJo9kzS2yMPmz2Myrfhz5Rpb672Cbu1ufdcSawYqvYsyxQ",
  "key8": "24QAL6XGPAcoDqjBGad3SjWkCNgXGK1PLSbqkvZYfNNo145TNaBepY32mD8oZPNWTDSaahJb6qA9632YTmHqbQAM",
  "key9": "3cthh9Tg9AFVySURvK356fWYX1uswGKrfNU9ow5F68sE97YGiKcdMn1hQ4Kk7Kq8pxJofgDVo74tPgA6WiSozGFd",
  "key10": "5ZouwU4TKvncHJfm7f8duQueQD9vWPTwN7mq5jwafJtrNcNYDgXz8M2WQohHAjV3nBgh8h2AH4HAg6iVhUbG1eAC",
  "key11": "2z4JbgkTbcQKgwfzny7F1TVsP9VHxivMECkM6mP3gdW2D3VEUogbtomxLQkMQRm9KSGrKQmPwj7uojpWCQ4v8Sx3",
  "key12": "sFxRqsgmsWQLWCvXj2nUA2pLQvFjx5dG7oZSSREEFBw2whhiTFNgJuA5aoKvKLLAR17QwUNP9cEV73cMyufuxoR",
  "key13": "3pyrBEfrbFXWzsN1WbAifkiMn5tEHNxUtAR46yeyyEiTztwu4iVr1wMXA7LNpBD5zsVdA5vRtAxHs7wxTzbsVGgU",
  "key14": "4NLcYv2pvcZZNSS4UoebKK2ZiT2EXFRs5FP834mA4Ku5pqauxKZ9eRdHnikErQQp7qcAcQUUjECsTsWbm8vnTX96",
  "key15": "5v5HDCY8whbdbkZbgA1DYfWLR3ChgXWtJe22KaZ7ZvCUssrFd8gZtovr25QYbDiRzzjxnazC6uJMF9ENkVWNJV86",
  "key16": "4SWMJcd113xzt9VPs8dK1Dj1xZWUAyxsibiHtM71mrGffizfDm1FvpyH95awaSTmpDTEdQFphGwWLs1k8YCSGks8",
  "key17": "WDxVzYnScpfVAe2cYuXXUahvEAbZdzEmVuMadjaEHDEHFrNn2RMo6U8a7uSvF9gsLdDkJcxqvYpsVDYCq2gsS56",
  "key18": "SD35jwA3NDWYhaFVTmhJyXrgBxRumTPzHKxXVskPQrrJtibFMTNz5xrWuCsV6HPGvKKrfHxe7xmAHuAUHoeM19j",
  "key19": "3b5f4HKVkborxVC973YWDS3WFGW3Be3p2rVCdgwZHC7H6TQCZzANgnYucvo5RJiV7BUVE4Xus2SFZ4DKfeQ8HZvB",
  "key20": "57dDJhLaMTg237Xiev2m8Y5ruxTzbZ91E4wsSKX2VGovh2jv8dCwZs9WGEBtPqriANyxB9pADTH7SUamY1Pg6Svx",
  "key21": "2GnutVKveKRsTBoF3XGXex89L1Zzt4WGk8oPh7T9dAwKewxR8DLjRA7iWseYQnK31Ykby1Z1UyxUjVEBJ7skmhSD",
  "key22": "3sLkv8oNCnGBrMHD4w7jhtpSkcGURdw1xU5GYb2oWDtry4GCCUkbrC6VkEv2uEL9wvwufmttWbwZWX18AwKdarGx",
  "key23": "4CTbw5bZem1QXDryTmuXPo9RjFMip13Gp2nd7qFnmY1UoyJ6AoWVnrC6vCNT7ZbU18zYQCHKHxyKY76rX4agxsvu",
  "key24": "4nAq5C2DZ6R9b2pGKQpFYVi1ZCQdBraRXT4F1bJwh5sfCRCsUqy7puLJMDoa29qwgtoy5haP1J67ZEof8scL71Xe",
  "key25": "3VoEG8zPrQ8abuK5GbfbmCp8yJz7SM3rvRiVFmJbwkPs4TvgxcvpimPXYz7YZoEh575iBomTN9SME5cnqK6HfAmJ",
  "key26": "4YXvQNCqi5XSUzFcYfq9dXqMZnSGNiF5pFUcoRXk5g2kYs9AM3hvWkiEdSyCJ5KNxa1sJyUD1bHjzvn3GrjDzrDm",
  "key27": "4qHCJjSf4k1WXMMhv4mXq8b6N4dLEankRoLSDNTWsUqPzx9Ubhq3jKFPtSF3F1R7NrBHmbVMCNTjvaboEqM4a7rS",
  "key28": "5qHbJjM9a6bYKvKpAKpXxEd795q5yK23t68gR9yuWzjV5N93tA8c6TXT4QYfE1pTqsgzEMaW5LTrap8qJ41zjTd7",
  "key29": "5ehAw1hFTpvYoyi8V8vs1gDffdBTZHrn29m3Pu4dv67jBkTN17Bc2EH6Px3dNXiFkDmQMsj4DH2dS6nmCK4pRZhr",
  "key30": "3qBpb1bR5vW3iRJi5Xt9Src8oxspYR59tSXdDLCCYV7MzR5sHohRhWB1yx4j7KWBBaFNDEZnXD6WTqcQK7uxFQvu",
  "key31": "4RRvMM123ekbd9JQzLNciF9L7UU13a281tr41aLrMdGNS7wEdmiEDS4fm9XaCMGriBmCZUz9HvPGa8zmncSnAQvF",
  "key32": "4J2BetUMfRar2hUynD1sVvwZYY3vgtZy9Azj7BKus9PUsvCLnnRDmHsAWrUzYyZhTTKZZSwjagNvtQwBhGYY8hXt",
  "key33": "2ME4Ladv7naZu5zjagtd9uhXS9WDrpnRfjn84Z4CU4np3xshxLMyEHMiwmrj32CJqDW2svbEvfK2zbEhV5h4yVLw",
  "key34": "266HmofwRhZKDjdTKT3J3FkvsykKppCzGQH9emNESSJ7ETzwFAHM9b7zp5SuZpNrLLRy7BPwqoAfsGFGn7K5wk5f",
  "key35": "3JpHkw2SYNGLUsccsSW3FwRN4P5swR5FdGvvWv3TVbCA8YYyvBuxWn2A7KGDmid9igESYV9q9bg2oKnLiVNru2sg",
  "key36": "jmekcpYQn5gn9Afm1NeUopm4KDvqVwuee467u36VoWZfpXNzmkcsUVtTznKEAyawmUVCRwWkSg9hMFYSSgaz4yT",
  "key37": "2uVDuwDEuWfdVHK91m5zLuLvhNVHEfbhxYvQ4tJsux36MoshL4n1DpDL9vcTWxe61UB3sBLpdAQWhLa5iy7NBGWH",
  "key38": "ZdiaV18NF11rHhthDygQxzmisToPsgWLqEqmb17s2qdYvHT5kDEY4r1Ug9FXdKgkTzaWamiaXZkCVcw2Veu6G2t",
  "key39": "4aUH2LetVruAt25SrW87rwhpD4hLcKbRc6cBLHLQ2nZbTwwdu5aZQgktRpCx1hrPyDxQpE2uS2muPoVjDypFg5XD",
  "key40": "51bMBctBxpUv7Rx2GgqTivwW24TbceZ2QBmaUwYEtwFh4ubGWimX54a8ovcBbxeV8ezHVdgKNBjzARisGGrLcYvV",
  "key41": "5gZU3nWa9mMVXNQPitghpQFSg7Y12LDppxwEnU8h1eErCcqMVRC3cGLZhDkeV4ZyMUzk6e5pEKwmvSSwBFsPQJrT",
  "key42": "3NpTX6KJUdLBL7paD7XRrK6qmjV5E5ZLrLzKYfkcvaZ6Ars2hznyLMZMDNwLtoa73vgjTCbHKnXp1W28jJ6QDq8C",
  "key43": "4kLWQWQpAT1jFe2Pr8kQhFC8YmKT287aBtJMnRmdpZwW2hTszFFPfTB7DsFGC7y37WFfucJYTNh1HEmVqiNMnc54",
  "key44": "4d89GPuX8b7W6cdHuURswTDyAz8swvcBhLv8J52jQCNWqdoRZPc4FFC3WYeCsDBGHjin5ceQwTi5EjKumP37jEFm"
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
