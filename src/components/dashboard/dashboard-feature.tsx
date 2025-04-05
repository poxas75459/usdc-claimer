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
    "4sfR6Bf1kz2f59nRaLAHBnwLLswgP2HGmxakBM7gUMuuQMePtPtm7k9ayfvPpQ1cwzaN3xrEuB3ruvmYE8nMj19n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EW4ee68mfRhc7CddjSnZvnvSvgGCHmG2JoU5X1meBpnT9G4m4dxpqUUS4EaqF6u5iHUZrr3Vwud4Te4Yz5u6zmW",
  "key1": "BBeMwzD3HLZwYjU3fNF967PPKiRomVLzBt53DNPZX4UhYz7hG9QnsbT7Vtp25DG6sEoY7zJmzrEicPpxRoY95w6",
  "key2": "3XiqnmajA7ukEaiLoTPkcPb1DPMactfxRyeUu1wDUb8zvyqyWnseHroacTsTBrXpAkEmLTnBokU4RHkAijEUXyYn",
  "key3": "AewvjAhKyWPyXRvGCEfZC7Wn1ZojYa24BmL95a7Gt4uDhjDd5HGKNr2VxdkkT9YgULructaSc8aWjVETu48WEYh",
  "key4": "3dxXvT9YT7B6ZWVL6Tu5Zk9nY2nY3cDnHbaTGLZqegepW8UmCrbktD1PH3QYutg4VwtUistjrzzxzTZQHx6FG8no",
  "key5": "HUh2ZzjvdyoM4Q9woD4153G85k9NesrMCy6FRFk4qGRZWW1iMiEdP7ctujAEaNcKoi2LxA5KVsB4hMvjHyT2eZN",
  "key6": "VBSdAsR8cbwAwGnZdxVmWr1W7s1WujLpj1VYHrd9CJcbRGQ5ovcfFe3mrVd8X3XoTSHgaVG4MVDLEmSTDyUUMYR",
  "key7": "2VSgLN665rCDaUPB1uryv98QjCNhRgQfACiCZEn45VisxJJrB5iM6JSFjWUCUag4FPiYKkH2oyvghPPdXAY2j3oN",
  "key8": "CDfs2HfAVEoCiWSENT6YqtEahQ5UrnCbAiK1jRebiRTjkWqNtkAJctBUbxjy5Mx1hHhkt4oaTubsNYq5izMzYcB",
  "key9": "3YvXVepFNUG97G7GHhieSSvALYUGbZxPdgdpb6paYzg9ZeLssZZhLVmDao2VcSTCLYCDQCk9K6JLzHU39pdPT8RA",
  "key10": "4vom9wDNiZBRigd2mmNsvDrKm5fGLffvnX1CeejDmgxpyWE97MxxHi2DzLantpoP3bWwqPE9hFBCyGPaY878a7Ye",
  "key11": "3d37mHMkLa5wZcHDBwQ6NhyMc1AjhUi5VD6PdkW3CHw6o8dkwy3fYcxR9WcJw42Pzi35opgEVy7GEMUnD2G8Q1qA",
  "key12": "3WaWPsL2pBjNSchesoivteWqgYVLzsFFP1XJdZAuBoXWggmpjJfxQThFgU3peMZ4YqziUMgiZQQ4kcaiZjHULueF",
  "key13": "5i75VerkNjSMXDa7Q8ug476DFkJS5p6HE7KVUJvgNmJgVN6oyanExNSea19gN78YudXRao4FXkrmFEQBeEfdvopy",
  "key14": "2eDGxmFBm6FzdNsmEri4nbLNxab7oBGLste2QHFbVacH88Hpj5xTLEtwFRiuB8EiXK3HKrwqevRe3qqZ2sAjz6tC",
  "key15": "3EJc8jTBZQQKcREaSYFoFPKZ2bLcaKSSt3pP1Pqrj7ku1kN6y93hfrZzTnCZrRHmWknRPHeRDtNmVBWqRoiDHUi8",
  "key16": "FSsnpm5ncFYbrgV27RSUFmVhCyue3JiMiasuJR7hkZxQBmP2Eq7HCz79RTGd3JDAUWSQKfNXHiCAQtRJ7fjFdq7",
  "key17": "5tQJvS6vCF8jZhhNcorZBaeDGg7YL9HJoiVFcsHr2fbX7Hn59BRbmyYvWNWWUhYxF3qt13D6ZFZDauw7aHYgVzcs",
  "key18": "5tpLuKGoCohQkt86ExqSpnwufts8L3ZxVnQDcnBetEp2sYmYZz3PC6H7HnUMPFWRuKDjbpCRRQgM6ktHtPaD79gA",
  "key19": "36WNs8eVZDRHWKSad1QvxoLvmAMheGQsKTKWaRbZNUVDGAmJA5LWyqNa4hG5tchYJSLstdxPwKWkLNm37RWXCPc8",
  "key20": "2ZQ7E8aF7nSwtS2jjf5ThEyQjpo9EGmsn1cnxWBKHFXTA3yiNUScSw8oHqmtrGHmaH8ouVYbNKrYrLnVo6arSYGQ",
  "key21": "2UTkdBdNw6Hjz3Kfk6kK6hNXNXBvLPx4coHHAivfYMYsQAnziCXonuGgVW4NQvpuYuvrdhEr1UVNrtHYDauj3uQS",
  "key22": "3JBNYb1FajaKFKqtkdpTy69FTr999ZnPBEr5ciaA2CcPJVBmGnuz6hX4K6MjbKEYUy7p5SbFu9dsbvAeukWLpies",
  "key23": "2vvVTQVAcAZbRBqrjWTDYEtQC5B8eSjrMG5gqr6y1p4FFD1dA5xeWpTgLzPccNNNs6tDy5tsd7wX2hYyojfkw7Mk",
  "key24": "5PUJdW8GsUEhbEKfQsfHXwoCL519g6WfhejEvxgLgPhz8BntCEWpvJVn7KjPhW4PbTNtWt2m2cJDrfe6KKukWjEZ",
  "key25": "6bs4ASrFgFrPPmfGyAChPinU58nRvSffqhJUKqFjpXgpDQY33xYzFSBsomFVZRNu81jaMLuqEgUv82cTkcuZx1s",
  "key26": "5iPs2BdrmQEmuDt4NxtEpUeMjzu65oWj9Q8XcmHSqTczphSbxwvxfYCFqoJtrybyRxqYAUaeJrGsQLYS76xCiDw7",
  "key27": "56PT5sPR7wjvEf68ZkzGzdT3r4FdWc76EKKV7CKidG7u2DF2CRj2KHcsXkxvoShbe4kCxzpjuXwNqPSjwhkZ4m4U",
  "key28": "4LLPfL1YmaGjHuZos9S7bUSxxnGUSozy6nTEgJ2abWecFey3jEsPguytqNRJ3eRVwsa2QxpdUD8gnwK9kRV45Jvr"
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
