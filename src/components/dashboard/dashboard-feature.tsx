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
    "i72vBRTRhYKqNxdBomrE743fvTYR8zq5cuWQsfzqzcvAD2dot1bPJ1zjz9R3jvN5Vb3Ry4z6a5r8obXU4v5D81R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUa8gXXcMsKkCV7pWnMy4yMHcy2U9BdSaS2m4UamPnXP9yrMUKJ8G7Bh3SVqTaEcc2fSXXemQBQAhffRBt1NZRp",
  "key1": "4WvGxnUUhMuP7Ynra17Mmpghkctdw8AdNu3rSmAGHnV8JoBKLcJFZY8PcdVJLriBWSAoYCP7j6RtJabkq92nxnsV",
  "key2": "nrFoeKBq1ogt88juXpVft9KXdhRGHLcU3JNbCRwoQjvN99kVZbDZBGSyvFXnynPqq8B7m1s8EWLSh8GofgLRoBs",
  "key3": "C6gTcbcJgbMumddP43MaW9iLmK4KpM1avohcPwDa4kFHxHabzp1xRWpEJbF831CUgzNkd8fED9Vs3nG1EWPSNHn",
  "key4": "3yCz3WJa1Wg6HrM2pscdKHyuvAkDYSHN9n3MuvRwHkAFE41Vjn7qV93nxJfUW29Psd5Pm2Rfiax8KZiAUydLbdyY",
  "key5": "3RvT6Q7SSd86xcb2tNgRumqKpUD5BcVoreNdRL88Ud3MM7yh69CLL6zVDAus7UoWSZMU4hskXVaYaEmn55Lb5Pcb",
  "key6": "3Nu7DqTPVLUZnaTExh3wA6vNi3cH6s5bwWFC9aD28ruuynTRGn1f4qeZRqKaE6wcozug8whDhmBzeBGQySTihMf3",
  "key7": "4vac87zpM1shiUTM8iNi4gpUDF3fQfpci4ibcV7oDMCqkbBxpgnXwmqBKWrdqaNom7XqGFmkPaRQjgYYYWPmtTzw",
  "key8": "5rHHzb1Rww4c77DS7685c7wDpLCfK6RMN5tebr4Z8Ma9ehxF2Kqq9MJia3maaGFs2qC7NG8UhZsmxNvXwrmhg7uq",
  "key9": "D9xBJ4t8NmkPPpoyc9gGVv6XXaFNRBafFFiGGzpv5emEoudJ6NXHQZ9DiT9J5xvSgVxTgHp2wGEqydw6AzEfZCk",
  "key10": "DRtekecToDynLQ6sypHT9GkaVeMUQjZMXG7KC1FjYt1sZnTxdnzC4RNspKcAsnAMz1R3dHXRxbCeh7KKxuBvPpt",
  "key11": "5ZpnDkRVrShkXLzjoWN1CwWGeNAPWFP7eQb3K8P7WijYeZTymFsbYC3V3RAHEL2GuHT71qQRTW4QUDhKwbYZyxks",
  "key12": "2SLnkyb5A9JSC25tygXR3to1mdGZD6aNnQBsvDCGaZNvnYF6i7WbthFBG2ZDSJ5uT3LbsGSVkw2jDXK7ePKq4gAD",
  "key13": "efR6mDg16HxzN58aD7LuE1GE1G8jwCxMcUXTxEYLL5wPYuQb9m4bKXM97nD99kxgDAT5oZSb9LSaPG3dyx6ijEV",
  "key14": "3kzo4FihgBAf3oaabUKLNbjuVuNXycE6PH67mWYSDaLLqY7YLXh5oCsfYzqUjoF4tshtfGjQcmcJFEFQGCC6NRK",
  "key15": "j4M3pXw3rQSaTzhbFLF3AobRPFkxCgtpm3X9WqodEkfxozyx8FU8u6dFmpMdF6KYBiaKYSc76D46HVA8hAdeYxG",
  "key16": "wPSSNtRYk11FheifzqkpQdyfNPWazU3NnfxKMUqRg7iVw4Rh8uihsYRqCpNEjgJTGvbaNhvmQLuvuGpPyvkQnzK",
  "key17": "2vJBGcAz3wxAgipmpTQ6o5Gmu2GD9CmiR3MMFMhcV5W2jQa26M2jw2CvCydmHRLQXQ42tM6x9PA9iQv1Dndbr4aM",
  "key18": "2XChjkxX749baphokyJr56Zw2VpGbVAr3sr7EhNXTNiWFiE7g9ZRgpLiTBxBVnaWmh6umfnDCgrNBSkgM3MYqaHE",
  "key19": "3mWhQEPznEo8AZK8RdMXSU8xYD7kPPyKAAo99fkEpZD5hwptDbNCttMpg4TQQHectdfvUNgBKrNgeFBfwztjTq5t",
  "key20": "3Ld1qw2hjShEnfpWYf73LHPTRpUW8hgTD4SYgvjZB617Ew7fRAm7pX99NR4pKoAHaMnosY1jzdAHg3Fo4wYe4bYq",
  "key21": "4fJ5RUs5QhTbxQCiR1cXV4ZUnxayxVAJQtfwWTjp8CNQMgHTS7zEvSrBNFQ23x6aJn2ohREjeWkCsUHj9ga3mMbH",
  "key22": "2PnUXFJnZfMwJhKBeinyrwpWeUSctb16CCWHyWGYn4HTruDUDnALJwfnuhdQL6KGFKtR1khD8thrigQnPt9t8Nvs",
  "key23": "g6Wb4oF5DHzRjAB8SWwXDdf3nY8m3PVtM7DxDLUKj3PFhGospHLuBWfinoRnnWtboyxqY1dVSHG55oG9ZTeN9BJ",
  "key24": "1t6uQWyTURGvF4y4ktQw6s4mjoVJBibefLCEFg42EofkogVa2SoMte7m23RN4491g3HvTSBhi4q1eXoxA93aBwi",
  "key25": "3tGVSWWZL8jbZFM7NpBrRdfYHSQsokred9UjuGnSD4nxREz8XAMgec5QgdzCHtPejUzM5y8SLKLT7ZuvcSgTNCsp",
  "key26": "39NDLrJ5A8yb8UCXb2Um1dNUE4et2uW1JvncUDcbtXeLnUFkuisxT3piaSbsU3u73J1is9bZPPsS3i1ub9b3Vkzx",
  "key27": "2smoGBYrgHs3rDz1z6w2YG8CXLdWTZw9CASVjWn5scU3XjcWATdPHkvbbwQYFEdxRe8K1vFYS5qyXG18FS4TZCzh",
  "key28": "3ije499KFswzPNaoZBxVrJrHpdui5irKiYmQ383Re52FKULhns4WvxxAnGnmqvXRDuNB28BjdgySoNmTzjHgiQsV",
  "key29": "ySz6QGQfimg3b6CTAiFNMMeiaZfBcWudgREYVLEppf5doLRi1tdStMtdbqgE3yptPCVFCTUQ8J1Q2fdt4z6MBb9",
  "key30": "WDCEuAQaiTgek6ZAYkfhS5Sma8gVQxXnFvvZqYj3CTaFSbnNZFk4nZensemCfg9CxmgWFzrJbePGq9i8RUEdGzg",
  "key31": "66drW2cLqMBppHLxbwNErY4aW7sKCqwVptnKDQdGXB96HxuKQYX9SfHMZGfdGQSjVvLexEy8rvY17Gqw86nrzhQA",
  "key32": "SaCiDuM1xsZi5vdLye1KQ4h91M7xnkeRokawdbVvQCsRMz2uAHn53PtVUPSwEXJKsnFneQCxtTPUByhKnkHcsLs",
  "key33": "2rsZ4RBykYpM4vp9zhBoBhfihkyV5PLUyMMSTCEvnRZC1F85EXG9LJtocsQtYJTkBNCBXceGxqrGJdrvjbYCK6VN",
  "key34": "3uEzMbgFU2VMG4V2ui8LYxWZYWx57aDjuHQTmL2M4AwHRqSZYUgmFdDKiHem9atsM4Tw2YHWxco8zcFo1LTpV97e",
  "key35": "oLQhVsVfziu2jrqH2xg7ahvj5z5c7z9bwhGtvPhKqRghx3C7wfjsWCbnvVPEPYQQVdjKjMrrkwXWMkLV8urBVed"
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
