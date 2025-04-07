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
    "2hucdbAVcxjW731W5eXuGdMM3Z1M89BSY7w57RLPemXJ7p5MRAER6Y2YyoBsArPzShurn3suPX5HAej1rQoK8JFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D93bDuUJNPZoYtP9Ne9UmAcniX6Yti2VGChw7SWmAQunaeh7xfPLHB3pb12cG7bfXpcreAzhz5vVHjKuXN5WQF7",
  "key1": "2uzvkmBE7XMDkpk7YZDbzwRpjPZF6oscAckEZ3Pk1idifgaFKFRnpZeWXjYZgjYe4CrJazF5XW9HnvLR34KLJbwz",
  "key2": "doKET3Wb1K64QKh16LghB845Xv1kyAYXsBmcgcEuhC9e5vjhwzkHmuh9ZRtyL1BUVqc19jhPRYceoKPxKRLL6iT",
  "key3": "2kV1wttXaQFXSDnNg92obFYVVASrq8mdfCjCnGQNMD9PikxZePjKCVSrULBVw9u9WmXw8GFe9iq1cPKCYyknz1DR",
  "key4": "27sGtT5bXcdyJCFT7FrqeUMi8xYFzH7AZeLLttDH3CHmaFGBs53zDGVi9Dvacc3FPaFCnYcP7tgmfX65gUz5W8tA",
  "key5": "4AGpJJvnLFT8RGr9NVDNRPkU7rvAqdHvVG24c9V3depMdED9WJzGk7k2grD2V4XtbfCwCF8YTfpUkRC6qSuDsGZj",
  "key6": "2GKo8LSKEdwdomdMgy1dWGoxYbLy6fuiNmy6f8GGddEzaAK713ZrJNeB8k7aW2Ut9f4LRj1fZfptQFF1rsng4GyK",
  "key7": "2WB58mEbgJV7J3yCmrzty39Ec6EJ1A8PoAGguLNsPysb34oHSKNEPpp3DnrSURqXfHDn7QHy8qAoBmqXSiS5okpK",
  "key8": "4A4nmv6P5MVZzZ3qq9afwhHp3frDiKfaSWX6g8arX4Ez8XTXPPLYhpv9vgEsdiHDhepmVwTzn8xbCTEErEv2LgwD",
  "key9": "2aMR5FBuzHSvfd5dUuoCoGNJER91tuRBxGiiQqYz5bVKzQs2UpPAEQafok5BMh3hjPaSXs9K85Xx8vARuGHk7eY2",
  "key10": "3pghXN5crArcjFM2kDuVmtKsx71eebePgsqMaKgxp1CA1cMsqGm59zRuPNJW6Y9PWYta8WzbuqS12Y3MaZdJMpY4",
  "key11": "5zp6ybYTHuPjQGp2nRB4KZC72nuMJJq7T51B26GDK5ymYMUfy7GY7PPjEk7etZwMwfXrMQECLTtu1FZ5dCA79FPE",
  "key12": "2XE14zRuQGKLQijYWp2BYaFRsECqFzuZ57HUg67Y5pTqsxoyRd2n6UEUBLnezruY93MkZuLS8jCvrHjUUySREmrX",
  "key13": "5aDMKwJcpWy2cYHJ49gN97tfaHACMhJkpncC1xat9kbs7ihL5KYomsV8K7odhzhEB2UthPuHGo4TSEVV5C5ZeRaY",
  "key14": "2MGPKfqUqAyjssrEjeqNXASbR7q9w98Ykc4G1jMbEuXxMTkudMAYE948MCLYRfgbyqLe3Se63sjFcTviTPUwjGec",
  "key15": "5pEbBX9jBru5L3hSZyJq79tDUTX7JmUvhCnKds7zyDemhn58gBt9rw5Sydw4NJaijTjj7iHBWVcoixLXsLt1VCVp",
  "key16": "5ZTreBM6mQerLK2P4Mp9k2xKXxYV6dtuD1ybnQedRrnGPmgpmDaxe5CJ5akvAuKM4CgE4z9NgJ9ZHZBddp5Nf7qo",
  "key17": "5LzEkhStcaR5yVo52LrLQGZzkDHTA8T5W9DMLR5EjuKXc1M7wh7s5z9Psgr8zatXwouafKbSaWxZMHLHJzaMzve2",
  "key18": "3aSv49ewipE1Z9yAy7tMpmSUq3QgFnTJgxpYcy3zh1JwvFL2js1MYAZfFQBRsfsRtuQi7ppQ9PFWt8vrWpadNeC1",
  "key19": "2LkttGeASfN2fZ1K2u3XsLgrykBuDCmRWTYTqyy9ty2fFNQxworxBFnqTHH5CJHviWGxh16EknL4pTqCg9NNT1M1",
  "key20": "yucd1gLcTMiWospCxT8wBGiEg6qL2xTsPpA1EAZcAwRhqT1x1QEFfBy4gMWw47au243sk88ZtZ3FFJxXLJY73q5",
  "key21": "46sxAHQFdZFwYvLQGxPbxLfLJBVPBwAybu79qSS4tP62neHkfP8L19H6qiN3FF4XLZHXKbUXMuRQMAya6kVtvZMW",
  "key22": "4sKASg3nbhSk81bsTqKRMoNJY2edb8zQa6HWJMqnhRhof1koniX5T6cLAQWTSWCUkakY3sSjXkhLYWtGcBTBj1vf",
  "key23": "4c3m7mKQxUikEaXTeFs1ETwDw7Guf3fxs1Zhaku8FGwSx6EN8HrHcjFnxhWgaaHWcG2gArzS6wK4NcZDneJ9AhkG",
  "key24": "2hAsDcYfk2oYzuq5XKr15jST2KSBwj4BS7L5hCycvWtzPGwkVXRnKcCF2A3YtJHLrg8DLRh2HJGjf24VjvFVdaPF",
  "key25": "2tBbUjasPmNnPxe5hCvrPaqUSAwUKPV4gVAzcX6scGEb4XSF6sTzyi3zpcsDZ3SuqJvsvPHyQpGiu3v417yGbPcL",
  "key26": "2EELcWQUBL1s8ggBkYXscQNc5vznkJeb9eYC5uVjuRBn5AXbxZZSzAcwmi7wp8XMkkGnn2akswg5KaatZ7KjZNLX",
  "key27": "4CqtYN4FHb3CGHCythPPyKmqSwtKWx5V4T4a4vZaMCCpVFBP2qP8pTzRuD6gmVMUpXyvy2stoHRUVu4wkz8aE4sN",
  "key28": "4Gh5bivzqL2UPRUmjcCVd8om4eWopRmX6ngmo3iNGUybzpurfrGFHsH4Ui1fT4j4mRNS4sQQxH2dmqcxceHvpYux",
  "key29": "4cwKmmuzkjg9EgAf2DtindGjLUbaiV8rbdHXBDfyNAMcQw7KyjFQKkx9kV5W3iXuMBNUditWTiDQfs3ftjPQmiZh",
  "key30": "9afniePwa6oFAtzvKDgkbTn7yFqGM7Kr2Kdze9bkGwSdC7Cfcyc9fZkBLDJDyLhhJxtx98TPqUgw6oHV8Qa9M6y",
  "key31": "4iUTTsja2f9wWrZx9qyuaYXV8FumBfoGfrDnnyAjvNupUnhEWGjnmJiFk68TJ96fFeWzJ5rjPkzD5mies6m1HbM1",
  "key32": "51n5yuokeHQF621QHxckxnTQrXvymx7Gyijc8xRvv3dJkXXJXd3TUUpCbF4mofqR6Mf8vjEMCdF1ajUn1KSbAfdc",
  "key33": "4vGb9X8u8xfi6wBXsMHSTosNFH6r9rzj1qBZUgS6Kxj4AmEFycSKsTVAXGn9YCxp2zspmPAwjwzBGhNw35LMFGHP",
  "key34": "4c3R5rMtGixJbyfvuKCLDfJeV14rccPdcURGrHzrhf3dkRNHvevHRUGNKsRyw2p8YbuvyUDU8CnufV2LpGjEBA6m",
  "key35": "4fTuzebuCA7gN5PStChHdY71yUPVmju7TMiPYdDwpF1VtZG1JduU8jHw7ECvmDELXE8ZYk3DfqRGYNWigt8sNCz9",
  "key36": "5C9Mv71Bgj1KSHPC2RiTc8yUVbYt47y1docNsUm2TEAVhauHr77fiEY9TAcpPyarpg7cj426mgX8s3tSoThUhQkF",
  "key37": "2XBd3p8LP12XWKY96e7U9ZQyYuTgVNh3yuBq5fvof5VXH9QTFSAnaGRiz738sUpLdKdPsrbtsNnCurfiti2p7iLL",
  "key38": "VNRFdhdrnHkvbxzZXVFZLBWsSzVw54GHcbYjMRZV54UEyYfD3FRE86pGkxbfdyxewi47UFrpqruMdTczKDBNnrh"
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
