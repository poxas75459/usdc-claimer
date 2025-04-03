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
    "4WGSmh1StrBrCVqj78J7ScevzDLaemst5oovfw3oxsVC3C7wiFsbHE7dZcfdwhuCdgLmtiEjJZCq31A3BniFjFqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49C5RkZfWJhR4KFzEk1eCMGs77RTqpRhV5ffLuQnExwef7cHJwmDJpe8QwYMjouDeGn19cRW4ABHebpLDhxx8z8t",
  "key1": "3CTa2hfmqHWmXpxeXxAeBNKsSrwTcWabK5FsubJAGeai9jLDfcoavpXxqFPisseiqqmTQfqXjWn4cDA2jYTgMoWk",
  "key2": "41Rf6JE4buzjWkNEDEhRyWP1QNqW8cGpjP1sSsmbpMa21M9ay8FqS8YtJPDPAN56z5NWKJdshfux2NrQ4HeJxQgR",
  "key3": "4w9xHHBdvYA3XmyLPuEj7uLpVYCqXkRxZXRkTt8Dfb9jGNgz6oDYPoyo6kbiWp5PKAjciVrs9Ah76jZSLoqe7FN7",
  "key4": "5L4a7Qy8o5cPvLVdoT2p5Nc41wr7kcY13wvs4tRr2t2hLKbJgfPJM1coeqfqhmjpM3JaGW4CxNiP8QQasmHEUs5k",
  "key5": "3tJbeBR2Xc5cJbMzZoW6tsPS9bntyr9KJpHw2FznKA4hcd9TBVQkfzKRZWbT2vthL3ZpRFtDebeqLZvZb4sCcUWf",
  "key6": "5o2XVdpva49oCtLZjwtk4U5fhoQoVczHtqFMbKuuuDygdwaHfFMyhbTuhZfZiqB41S5gpvMA2d3LV9gmr3hUZCAd",
  "key7": "KkrimBAjf2wbkYJz9z6Lvnbep1EyE553uRqFXTSXZygmskgbUmc7XtZ4Mkx69KRgjBtZbo6zKjvkYuveiAcGHEm",
  "key8": "51UcHfGhSR83Si4rmN3jjGzR6y4vZGPr7xSWNk62C4kSSgZn5WM7usk3o9Y4HSpgvyFvLUgXKxAdXJgdmw5J819k",
  "key9": "54gkSucjbE1om4WweGvLR13oXUbxPK7khfe2iAWC8Vpmh9D12fcwgpxJJHdTKsZYPNhXiW6vCT7N6VPByTDj1sDt",
  "key10": "64V5rZ3JqdyRb5Vq5h3z8rPfP9PMFQtrc4UuSbsiCyRMzgFsRsG2DSuNFn4H78RDSxB65pmz5YSNyKRdD7dpbNN8",
  "key11": "62SNqvCjyjrpEtAfoQ3TqfBsYdyhXi3fegSKCqFb8zzYFnxUwaoQrjF7sRhmvdgBPf1QaCQBYxHb9c3Q14pxBvom",
  "key12": "4A31Y8JhETmzhtDZUGxmL7v5re7VtabN9ha1co47SDTasw6sTvFusZj9bi2SmKZ7145NShYxQf7RFLNy8ArBH5W8",
  "key13": "3SfzVWKiTVcc95gE9BvJhdFqFVJQak14ERns7tDXG6dsrcUuxvFkHouqwfMQj3oUyCTeyFaJ63STNWwHqB5GQpsc",
  "key14": "25R7zPFCs4VEda6wvohkFbAinv176MBF2V8d69Nz9CHWNr9oYxa6cZtqXHmaK8AmjFSjqympXujdbVRpCpgonEYU",
  "key15": "5mk6MiZX1mZZuNGs37Vb7ZuKgLMLgLu45BwNvBh1NcPrtG5mRaRRNjXDkSjtLRiYP7SCkhJABPWp6E4U5HvWNQc4",
  "key16": "3DQsWQUy9cjCv8ZTWxz2EggMUmYD23rJoYCSzVExSmuCU8ehAFGWuJQMfxxR9MafhigKmqumyWSfYi3iu95f3sys",
  "key17": "4SM9QHigd2BDpPJrSNwZnHCgTMt4dnmKec48TpAHjHbjG82KyiuL1Bxq4ekAiUYgLreaL65pSKwzDjgoBK794g1n",
  "key18": "4zJL8CDd1ZzZ3EcxuoMGv7Y9mPeWukQMCPsPBbXvWHND9xQPYskegRuaZLa2Qwif2sD4QVt1F3zBKUEGisGTV35P",
  "key19": "2kqECszeMYDR9B764zj7MytECbf7mH8kVgVstsnH4E21pcuuxSyUXiUW4tUTL1qqDV14mrTjxKVsi6fxw5tzxFGj",
  "key20": "2z69DPz532fb8i4Edw243yifi82z2hgSKc3hqpFfyXGfZ8KFWaiVwrun6FoCB6q8rG89KNkw8hgeQ6ZYurR63SmG",
  "key21": "46nsNYYSDCQgbJrdHqFiEaqJHSqiTJCGMVX5kwqw2Edxzk43xBGkL3r911r7niuuLxdVrrd5mcKfkd6ajtQX5668",
  "key22": "38pYKY1CNwERrGmwvFNZ8ANxrwiNFvNhNUvwd6noGNEgcheWzNDKxWTJa9qkpL1BndUMqobQ7C8d594QorYAWPX3",
  "key23": "2muGT7ir25WMqi6fyHLzvHqpZzyMdUksHuygAXLM9XPBL6TqxrNu3Co2SVrt9m3VxC9FmoK8c3kjYxYZFYKoqHDZ",
  "key24": "67SvjtYqRWKA9QoRctarQr7P3QFN1P3AjXmQUT2EpLLhPQLWiq5Rv4DQkQNbeY2Vm915JG5hQ1k66JYGDfkq3fcz",
  "key25": "3moiZz6eqV5UU8ei5Nt6yTVxzFTUnaXggfh4KEezZw62AbhLv3JNyCDnfwEw3MBr5d5MnNKa5vV3beQ5JRuc9wDg",
  "key26": "4xA33KeJaTTuzRWZagPC2JAYo834XmW2dmB3RCBee8gPZEDZzU1fyazWaWfTS5xdrQyh7BARpnGicxSH2RW4ewpa",
  "key27": "4bWvCkpFCe5FskMVeE7eFrSk1FuyVbpAAXwceRVUi6KRkyfmzhVJaY7CdWcRMdcPRRCbA5j9DN6Yd1hcJbDhinP2",
  "key28": "6qqryzcACPpMDp7xP9xtn4LgUfRJdNfpGu4SgAPVUyYC4AypAgJraRPcrPdDTPkNBkRkZp1h9WG8AYdpH2rE9cw",
  "key29": "352KC55nMfK43H8ZU4rRyghCiSTV37xsYH2bzSA3wLi4Ce7Fjh1r2GV3QamUCZwA1NtyZAPhytQj2yFAH3pshXic",
  "key30": "3hEdMXFDwVPa4YytZz72kqK64Zc29iZW6k8AyEu87Tey42VRhMuf7N7V1qNusftpZB3SmdCMvqJq4TJHXpXyFWkP",
  "key31": "557K4un2HMVfUfxdiZdkxcXjH6cVVooBramN5sf4q8VKJyGB7M9F82yJVdbEXFjzZDxtKB6dUHX6HCBzMq6mkVDY",
  "key32": "4MDzFaqsZep9cndhXD93H6jbjTyt2pXchfzyrRGZjycZshaDJg9VcsspAitcpejRYvN3MhgknhJV92j2jMRGDtfS"
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
