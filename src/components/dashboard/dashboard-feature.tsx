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
    "4EtaKyx4ZDCnNRZW7VhdFPGi6bVY8ogQSn5Zvxh78v6ri7KiDq5KbBbbNtFrMUXYF1VjDCcSEYcJMQaL1vZU9ayJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3MTt7hEDNrs3mM9VwBrKhK4uTVsxe59TQES1JSBxFpyFEfDnNxx5uUGmfe7DsZ5Z6A1Y2QexnFAXyfnvEih8Fr",
  "key1": "3MTFFBB4PMz3de6XLwuRhHaxFayzvZaF9YFChpE6LNDjwjRTphyZ39v8zAbrjGvLDa6JzRwDQNrDfAYw5cRrKkQP",
  "key2": "2Erm6HSCu2jzfTGxhFKaP7Es2vXKNrT7bwhCVaY3kAR2E3nboSQpEopHHTeqxp2uUXriLEPbsHRTvZZiJGM1dYjW",
  "key3": "4k4fA3fqHgkuXmxDm2TYbT6LdvTxD6yGrqduxzBmSGKJBMMddmr4h4WVJP3pucPwf6qYj6N8jntcSgeiRM11ARPN",
  "key4": "G7Z9uLjCo9oKSHLpXGdmmJickS745N7YP823GPfQg31k9nfQsd9F68s4vKgZdUoJUxJAWbzBXqqztNcsJGdf8Xz",
  "key5": "4N29KSUNasfjanKtHxuMSps3UttGzUkUhQdp617M77ZgXomq1tvDHwteesD1s5vvQYCFnzrfAnPnS2RoM8GDG4fq",
  "key6": "2PEL3nPsN2F2mreybuzdyueyA2VayfgTE19tavnXEyUrmWztKDV9PWvejFudVu885mP2bHj5o259ibK7qSZ8M6ZT",
  "key7": "ZaZbF933dcswv9bLVGmryzbG6UaPmj4pSGwXu26eNidcEn3RXEDLCeYyHjQRgQSSLL67XJ8BBjztiYL4uVvBwnk",
  "key8": "2s1fPCAWds29cdtFAoWHYLhgvSa7JxbiTvWkUyp7tVfeSZtFwFcgtFQaS5p23RYNMjnfGRQ8EcCbbFTzaMoAfJcm",
  "key9": "35oKTSaNCSJXbW7hicPQZoFgGwoHZba2Hc2p8QTcLMwRiT37MLE6UnePK1ctLHNQJ9Ku63YgqjgJFm5Ut21XCq9Q",
  "key10": "5ecTk83xvywMLrUvubSA59aSdVRDm8GbiM64ZsM43VuBysV9xCNpok4U1XVDChzWy8peyEtkH1HSEiCjjbbRkUKD",
  "key11": "2anovXTveSVyanbuR1Tn1GKDAwP3nUbatkYi62w5c2SXVLKFczu1Wvj9mfU7QDajmBFuidx5GQYpmf4fEY3pT3jj",
  "key12": "43WHMviBCWFbBEw4AGdwpfDKs3bERC8jDwwsjnPdXNBHXQLJMedKRfG7tiQkQ1KvfxdJVStcgYZtM7h8wBqHvSbr",
  "key13": "5ZMBDhB8bre2a8bn65AgcFx4rtPTHkStzGAiJVS4wcwYyc893F7RrMUUkRnQrJyANgAGnqVquh9ToPuy28UDXSEh",
  "key14": "2mgDiKpHqt8TMU5vjgzHWfVzgsnDVf9znhYdW4B4z7amPyFeMvpTnxZnHmmryZABo39JkchJerJ3k38G7ABBJZAN",
  "key15": "383HyK9KYzp6CoqmNAbxynysEwwgKA5x7uGYgmGBkGVqxRcsnnCDTnK8dunW9rETxJ8eAhzC81iu5QhqfDMZ3eQP",
  "key16": "4wkm5VuFbkvRGT83ppt5RV6uUoBUWZNh3qxgpMSNad9vuRzsR2Qd4KxTXFKgEcUfKh2GEoMHRyiBFqGwjDuhftH2",
  "key17": "2XcWkAmgeXJgK2EHdr5ssgPW1tkmXHc6VGcSiLdixmccrzFMLMtN1xrcrKLBkfXkM38sa6a6dxBzWoqn9S1Ngdi8",
  "key18": "2Vth9JEJCbzqNjX33xJzZwMAm3SQ43AKt382XTCZYSfPR9x4Az9HwUip8kzEAikCV47TybwQzq8Xo5BsSJrA7uyF",
  "key19": "58hzCsNEoXkAb4S339U7ggGoreBTzFpLV1xZ7pnvRSq5eWAdWf8NEpNDTr3aTqeTYTE8L7wg2pcc5Q2vVysj6HRL",
  "key20": "5ekQJHhrgAcGsVCNuzsS2b51477DjJ4xHk3Eqf1UckhEF4ATqN2axNetUWZoxUcnbawzXksueqTruiRzuPJwuJXs",
  "key21": "8T2W8H5uHdGWNCk9KmH1s3AGXiqx7pPqFsA2ndpVpiJ2XMrwxXZeqw5M833tyRDhZ3UfCYnNvi7T6qLTvQai6Hk",
  "key22": "5YsQZasJymrnvACNEoBmbdCZ2uVfP7vGoGkPZtZWxf3ZSN31NqdMuHvw1qA1ucr3jLKTShJs7BRMcU3Kw6F42p1j",
  "key23": "56v84wPnDVgHzKb5ikq8bipMtSqyHYmMGPxuETnDfQqVvCypdceV8Du2esMmYk3S9BncxSWG81GopZW4SNxU51wL",
  "key24": "PkdoW4P4KxutunskoZFfE98bpeYNcNx1wcf7q4R7W1oVtHZqt2MivRBmFXnw6pakmcJYzkBzm5KTUWPBz3CKPBY",
  "key25": "22cUSixwTR37Y3N8f2TKrV2a13kDQEWhVC5bxRWc48cLUZfttZHdDDfqn2L6iXdPBWseCftTVzzzXF1b992HnTw4",
  "key26": "3RWMPFmmGXPcnYBxQHebnjtj61K7H7bK5cJCZYqk1ikXWs54pcPiyAL5nuyp29qDg15aBxw4FvNny1bxMp3a4W7L"
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
