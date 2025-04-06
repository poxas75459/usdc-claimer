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
    "3SgGrKewrLUHBMjVhza3PZX6g94ApMpfx3UUD5N73zhY3jJbqGLXmbBcEwqUVmRHPkfxTRuZKzmmsKjmdBPyNYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2woziUDjnABJFtnqeysAQmzTxZ9tZ5Chymf3yXQWeo71So3esSp68L8eLjvX8o6xEPgfEQWadnHs3hX5HJeXX8A6",
  "key1": "5rqNiexHKAPeu3km5pxjsAeWsdRuaeZPgarGkT1aDr8Dt2NTrE7y262fes3SJo4hgfmR3shqGPWURpvv4PkkzizA",
  "key2": "2gTHZGx7cpQJybPYu1of8KtqNY5PryZxg6rZu8VbW9yULm39DDZHdDwmXH8tNuqRDYbuZo63kNjU7HoN25PeZcSb",
  "key3": "5xuBz4SiWeo6mrMvMt6iyDkV1zvSrFyWnYQ3coEJtP7LBmmaEQRLay3dNJTyMAu7VJEzkQuJsjZxVHWGs6aFphvP",
  "key4": "7eCZV6hMX8tvqxHVbfD8nxg4Qb1W8wh52VVPaxdf78Saw2f1LTxzJJy8LpAnjTBZkvxRRazq7wV2wdC3UX2ioyD",
  "key5": "2bjanxMhJx2PKr1wcPNWdtZWaxbTmSVkqxD51JbSzMPpLS2MaR3Q2BsqjGd2oNEFP42dRyH5HJh31QYNwVPgkwxa",
  "key6": "x7TDL7RRqoCjAhw4FGaDwCbTP2ftxuHAQS2CfvNoULxwdAwtbuuGVdPY9xRDcK8qR6qfdgfHiVJaEM9sfZvzVFA",
  "key7": "MNHg6ZWQo7VQLy4GvwWmp6ayo53Ey2Fbg4dpYBr3GhF8obMYsqdZ3C2GqMBA2VncUnvivWgQ8BhEDvGYx8xuNnR",
  "key8": "3tk4RmXoghRkLhiAxuJYKSoDBCALMgEjHwxuP3a4V2mtyrjCJQ8wwk5SprhLNNuTQAaYmgveScSwnfjFDR88AHWr",
  "key9": "7wjN8PWfDwRC6FTmw99UFJeWKb1nL2ZbinrhXzua8eY8RwD4Tb6CDPJnxKeQNaA7vCi4T9SG3Xz78SBernWY6jW",
  "key10": "61JfvRPEBKC6YrjkaMDrEzQyddFa85YPs9mEr1Wo58rFghpwN3LAD8BqhusfkHr8TN5PEw4EHfGo8PvpJvBABRor",
  "key11": "58h1rfpDVRU97rVM6utyDNx12juSVxgE75Qz12C8rk3KKzrnqaGfXBVNuZe2QrVT9Qn7mWdrLKLPKRfQ1EZiYewg",
  "key12": "2hsKPNnP6ZR74GGcaBnJBjSWA6BwfSfVqj7s9wfg8tQhrtRT5Nw4xWPwZtWzDTvDw7C7obMmDgLVZraPd14LXezP",
  "key13": "2SjkNEMEBKgDB6hiu2sattqdGexWZMtLdhK6d6zFjfH2QbTNawRt5UgNqjgLd4yZDzefnfyZCKEGf73eoCyeZXDV",
  "key14": "J7w1j55oyoP4j1EbmgxfA3wLy6M4X1TG4HZzHE4zSrYmnpfKmTEaHQqTxh2kPT99sewgvPyu4tJWgc7gResSVB4",
  "key15": "5SibB4SrM2pABobppnwB1TwxvwYHDMLdobp5w9rpU4m8FYKvZATW4ueVHo6tSTrD8asVYfVCUtWU62LvWG1Cr5b6",
  "key16": "5TZL2bRuwbTf9397JTgSvg754oK19DFaohM58tTUgut8LzxWw6KRfkJUf7E9B3rj2hPBvjstUniuhaFWmJnYn9Fj",
  "key17": "3nJn1tCfZd5m3j24JoLfCzpu51G6HUei71pKuPSMWQSKeJiamVxkHoavh2Pa8rJdw68SuEjHYs3YFPeQG4NQurB7",
  "key18": "5Pb1kdNpq1bm9mN4jy2nk2HfJdZPACkDBiJSCneZoJeQLG3kMoLkddw77YtKdkJfKWxyifRghiuMVUcdgHnjZVYr",
  "key19": "2S8zWUQRYEuVXAGUEDN55j2qYBqnzJ2B4TUH9SkqW3CkuH2cRQnrkPeBaXEmNCaE1ttzR7sMPKh3U7rD6tXbtfg",
  "key20": "5xZ5ce5tmr3Eb2oiLXqZ4QWShn8fiELD3h8gAuhJcUVA5om4qmTXMpgPU8SokpHpeLjgcKzCYmobbFQUVVqFsony",
  "key21": "2KjHFcwaEr95QUoKArwzgJ7DVFzdXofJgte1iK7Xq9snvQKDhWsiKFJGtCcRHfPcrruMBC7uq4NKtWvWZR3KFShG",
  "key22": "5yqGRv4kp1bLB6Hy9yuNRW3Z96VfYXTXp6zKGYfcoCJfWx9Mku1TStTpLaJdhtCWwBgGFEw3tTCWVoPq8Q7zJrQ8",
  "key23": "5KQNfuQAtJMKdE8gZDiqHWpxz9wxhkqkxx5ggzyaa6PFhVHWjC9ufbb811bXuP7r8DxJZxo59xP6jSkECxHyQXTZ",
  "key24": "47upWTPnvUBFrRVAMXP12VZKDexmTs2DTdp5Lga1NMaXNTggjMgVCWsuM2RfnvSwpcm2XbMiTAv5ipg2kFWCVgMd",
  "key25": "2UYcWS5Rxx9ZSmbsJEmmoQLm6svqRX1FHG2YLJiM2JoSGDf9qY5BbjufFw9Mmo5Nt5x57923V799PNbfuoH8EZJx",
  "key26": "ePvmqriTPaytcCgcPHKD2ZU3qczqk8mQLXwqwe1PRFcozn8EFDpsR5cZR1ig9hajqa3gJW8QhuFMNAQrjvAv3Wq",
  "key27": "3MmeiqHKzi6EK36ncXViyWvtw2AaeXf4PjtatMHwYnuda42swQV5hLWXuPudRnkAeAsdTR6twY7zcMSVXijdrWe1",
  "key28": "5ebyKqvgu66jEnup56n2JPrB4bVRHEZ6bvk8S1KH1GHj7PfqnJMwDBbkqUZDoLSdhywvTrVTkBYAAgy2aLc9bBGs",
  "key29": "3QxmZefi7mKt4MzWAmKoVjBGH2zaAhtc5A2HZdQPEr6jsoasf5kDfpUbRjyTRDgRMmffS28WsMAA4e2641DUkAP2",
  "key30": "5hVQThAvs7RJvzcBEjmkoWWZua4JjbTrBHN56K5Pg2D6utA13mzsMmXnqJJXLPmqp3Xsj3jqegoFyfnKDvU7LSTf",
  "key31": "5kSHZs4tXjEiMsStBbhS8ycyZ57ynQ3fEm8WGRiDsAzeYTNCQ1k8LE6bhHjYS33WiK6btBu4cCc14aCdmgqm4931"
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
