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
    "5Y5aAZ5iKz8g6dFJQ5oz99NAgqovEPrAhuxJa23gXSfzAPw81pLjXBRWtgR5LvdNnYJnRCKPQdLFEn2HUQDWx2Qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XtZoUvuNYjxzdRFgbNaSi8uxUjf2YHUVSuWAkoqfgNp3YTcZBV7XKvmBoLDAQPhqoq3mJTMJz3qACZW7noCziJe",
  "key1": "3jwuL9FeHMuCEcg5TygJPSiJinX8sY8YcpjhufFyEWKoSYNdDsvPV21ytqrG1SALarEQ31HiSshWbtoX9iKUx1W6",
  "key2": "2R6fSxuKHLYcJciN5W31QjDymqD1VSMeBiAMF2mSmvpBQo4fbSw7PWTtLJ3hKyra7U8E2znzdS2aD1CU6EZ6g2VX",
  "key3": "2w4WqArYbyqKRirXSCA3KyrkZY2dY7YADaCnfpxGrwUtmq7xojEUFRDPKt93jFHZY18kbVYTJcSRqeS3Ha8m15LJ",
  "key4": "2fY2uBadwwvp1SzUNfbecrEeWZGaTCFVeayvA7YyPWt9UEDJYtouDodCgaMF3yBi3gVaTx2FTLiMGuBd83gRLjBz",
  "key5": "NGRw2E6Lt3Q6uXsWDvY24cVKvFTTmva4j3VLFX7Zf1MoxSJTkGXhJqMxKSKy9zryuxZN2yPAWBy7YefT2oRh8ne",
  "key6": "3bH9cEcs8eKaCyvpm48Dyt4n32ypRP5eBZMdTUmW5j89HUbCzBXd9u2p6RDdGqm1vSZuh5na9X8gVe6FYQn8741E",
  "key7": "4GC6imnsBTLNPJ9NFzgi8ni2Yai5oBRarw6RduhSR9NxyCqq3aci3aNJbkStu4cYXvk7CtsPCojtmgD3dEFBhqMq",
  "key8": "3XknNSSZtNJVLjntYTgnQbXxsrwNagbrmXT29JPrj3HX6CQeiSsHmth2bhboNvggKqCEEFPw2SUCHPzaS41p4Et3",
  "key9": "4M13t7o7xYPj3RZQBF2Su3K4xPi1sCo85fviCVgrPwGqVoDvj5GLBrRzVQCTcHkXwzwX1GrxLiwfSnL8kGyBZNqM",
  "key10": "4KDtcaNhkYdP2mwrV2x4RWzCLKiMuSdzgyhGQDfjNqPorm15vudEyfDSNVJKNfcDLij7yCkhb9u8ryswf8zR9tNz",
  "key11": "2emyFtgyixe8nx8g8MLBmYWgC2N7uHvTGR47sAeSuAEzBnnbNQzEjQDojJXYsjyRzCadD74t5bxKj95CkQHUT7sQ",
  "key12": "2ADtBwwvvguUQ1q9jJmNF5SKGPacgAjm6VNxHahEh3aNrZb6nfWcdiUCGBD28n8J6R6fmpftxb9cWbqjiYLpnZWr",
  "key13": "3oSiZ8nV7QVuJYWUcDKCSVdJdtbusGA8Xu1n2UuZ3HDxCcDUsntn77ob5BEorttQfoPKMMz5oPnhkfZoZ5bY5gEw",
  "key14": "39JTJMPcojzR3nrgKG4BupKGPjXdZps8tHofpDnVo3TSdPnCkM5fr7FtCjQ3Y5CBcxgGMAAxJUG5wpYKdxkVhLBt",
  "key15": "26Z5ySNoexeejrEGfya5zAouk87Kv6A4UeUPrrHYZh46nqQ7V9g9Gkm8jMoenfAukyCt3X5ZcejJxvXNE2NcMJYv",
  "key16": "64DD4VXX8aaG5DiWp9iA2px2wK3GiQniWK2FkkGH3KG7z4AGEc9piZbcvFVzXLX3oynqxKVzvNsbosjFpUPyrLvL",
  "key17": "5axrEpZKeWBuUygxEXmWU5CkbDx5TV385iarEo6wsmbTSfCLjBKX3Z37LEwX9Hj9pwfFj9y4mYfDDUGTaqKJDhu3",
  "key18": "63yVMEP37NxjTJnhEwDZwmyXJq3tndmqaXj2YR6mLftKA7q4wMVV3b4pDAQUNnYfUhBCLRJKh1t19hBzmzNy1cYB",
  "key19": "1Yn5L2GuJYiLkSREmgKVuUDrBbn3vPHJH7frZe17R7Ks1z9mHm43cTiZxstbJ8YqCnfjywWkMAWAyBphW5W3ZEF",
  "key20": "4zY5tbuor1RN4EpWZaXd4YEM3TetSkiLFNepMjmoFSZXtEUXUUeZynm3CkHXhkULH52Z7vkZfgWKQ1Jjnu9A7q9H",
  "key21": "3fixiebeSEjxPdXoPj6G9L1mtXmm4a2faREgke4jCHxsPbJRKSUTmR6vcZHtJBHtgZUDi8SBUdB7AWLz1VLH4ohE",
  "key22": "5NCHz9wcPmF3DZsUHYTMhrfnQA57ZmGtZLwiVZ2C6GxDJJiKQJvwvENLEtQYHsLMHRfhzT4yhYVd7gzmJQctXYvm",
  "key23": "25w9ZCK3V4rmUhK5tgjXVJBJbSj9HoDWPKFE6qYcYbEpC3EGmZWr6sMtpCXcHLJdGsWXT5RkV7WjRBCEQrQarg4z",
  "key24": "4irnGAS36BcsAU863pdNPxpeEBTZ8NK1ZR2K8uZYerqAk9mSmTFq4cUUFZy83wtSY1qSZW2DNxDLstbTHhTi6Xyf",
  "key25": "oi3PxXA6xyDPoKWbsxWqCxA5Ez6wWncqGyTQRH3P751WrjYcDX3juG5DWR7oiNTQHpHvrLztVVyvhf1meHrbtuY",
  "key26": "3w77dbTQWMpH18Lwj87MncArt7BEMm21iCQBruZFTpxWjhdwgfj8qFGKLbHMzWMyGkjmfZyvLF71MCMSAFCJdRjf",
  "key27": "CM31MtDnWUqu53iZFJizhZNoyv63tNw3zEyCdq8GLpkGw9JNqz8buWRsk2FauNWGrqRBFxoCv1LGb7QNjfsShpn",
  "key28": "3n3vom5aDRTTqPcNpzEbrB4Ph5NkvBYdFF2f2sHrNcLf86Y6FcGNCChzq6ZaGgMSARWte51EMScyMihhcvGbA8JP",
  "key29": "ZZ1Gu2eeuRx44CdZQAoQdf3TeUHo2bnkZKzXmwFqqCuc1vo2eWn1YPomMhB6JiNgEwawDrP2S2yCSxXKYqxNY5V"
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
