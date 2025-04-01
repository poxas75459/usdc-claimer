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
    "3YXHkFnume4irq7nkjej8wZyeRVFkaXV2xp178wKbHB3cLSrGdcSt54j2K5EzPb2bAjobtaikiqZ2BEu21zcQpHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RfK4ijGxbbg6h4TLwidjKgdtkKV7Q8LQV8g66gB6fTadwhLJQiFvFN5cMGg7iERC5jErVigom9cSH8QkhPBdQXw",
  "key1": "2Faws1SMFF1pWQZMvWBRUYbFZDSYzKL7HonasdS3xxNdiWGqX8PTELbFDGiB1Jvwf2Dnw9QG9uKgPhxAHD1N9tB1",
  "key2": "2pgvD4M14Wdk6GbTyscxoD37HuacqWrWX9H44pvD5tbbj14K7bgF38ozqtdr3ToJjtFPK9oZLCUpoPrxnDZXG7W9",
  "key3": "52WavSRjHCMMvUi6913pQ39ABgnG8wK3EGV42uA2jGPqKyz82hC6YoTMMU34zbk4sKgUjycm7NFtqMvnZNEAGw5L",
  "key4": "4FRt79be3EP1bkzw97US9xp18SRHhy74aJiioXjsZQt5tyeXx4uUhvRD7DK7vvXbcnTr8ftcBLNib21misop1iC3",
  "key5": "39QmhzFVwfTM8bFrxcgkHSoSH6vnMz99bGNSojrvM6VCcUrs3oh4mhrrSpotsU5uUncKmuENKkZVWhGMzRec5eXe",
  "key6": "tyiYs1a5j5b1UsKDzC3Gm7NE7vd3tiqaRn3Vyr9NYnCZm95wTpWXf9TSgj1TZkRfhyEPR9BQ4NaW3ez8xtcsZKy",
  "key7": "dPFwDC7CjW5bgQmMdyDxSvhKR68mtVSnmrNSLQTa2CfNXwuaBMuq9T57zn5casF6oD2jnR6WnMZebZtGsnfvmU6",
  "key8": "d1vMuBbQxYuy2qUv6B2X6c7Jo8EQY5J26TfnPE1tRuLwsYJyzShcCqkf79z1oti1anHUEq8MhNKqGxz8dDYNeqH",
  "key9": "4RgXhg3z7T2Ed139dqPazCJdqtpwfePx59xxaUsQ9iNmZZy92UxB7VBe3xMsaWhDh3mZifjsLu4fzbUjRmR1hZrp",
  "key10": "356qJ2yXCuBxWLtndhEy1FeBoyvW7FTnYPBCrKXHoGKvqeeTpd92kAMPbHDzvVzu31MesWjaXTVrxBWufadPzcMW",
  "key11": "4JNvY31o56poPfgYSUSngEVDmEDFuBJ1e1tcwpzQ2ZQgKaXLWthHn43sFbhRmPcMojCvphCctmEhrcy7FGpjQNT8",
  "key12": "5BVW3cPAj4orhSVFdWptZnsUucWS9ae8t43FJnTtVTLXE2rserZzv3FHCbuw1QczpKJoLc9FBHFSKZz6iJz78yng",
  "key13": "5hynj5XA5pvbp4sgw7UzrxdS3oEqQvrBbNrSX8Wy1gRu9TRDMf77HYjx7k83etem3kNNPTMTYP68NMPbiAJ6Mj8B",
  "key14": "4oCwDXxqFTGvGDUE7o539rVUhwsxmGs95DSigidUuFrxHb8fSeJiaqzDehvtGM26NzgdRmM2fiZgfSGPY8t4EPk5",
  "key15": "1kshLDtQpSRESiBu2GDhMEs3RYiojs33AuFQCYgWJtYSruY6tYUkeXn95waM65shE2sVob8WuhrHM1iVxakoNR8",
  "key16": "34ddoFP6H4FTxJ5efZs8rhWzEZGyv2bJHqgU4pJJrddb2EcRbEeVnMJNQCTsDd6QzoagzYa24rwVYM4C9W97TZcq",
  "key17": "KCrn74vUc6jjPM8paThtwFXmZoiXnJL4Wco3YPqPrV9us6PTEHgQ18FE1HhuMPe4AnseT1c3BFgTG8fo9ZZnRR3",
  "key18": "CtfKexo8zvy9fBgDYtg8Lcktiwy3LYGKc74EBTLmpudcDPRrVAkRGEdGk6BFKtHD19CD3GryM9Tku66AMdSSK6H",
  "key19": "2Mb6ZGifSV2F2vo69vF1SnthoZ7UFxY49Ta7V6vo7MyocTM9PAVM4sW1qYXdCf7rSR7a4uWvkDut8TazC1DkrYJf",
  "key20": "4MLGYJ9UiUXKuFVbK1BvCBcNNvqDA4DrR126Z3n82fNU5BwuCjytr3ewCC6eS8hb9U1Nm3Tw6tDLtTJ6dQhRrPqa",
  "key21": "5dxx58c14398An1vgVs5VMY1tj9NjBC24azn9SmiNgdT2eunsFnDhBngJufsmcbrVLERGSjMM1y6zv3A6EuroGaT",
  "key22": "5vag6BFUNU6quyEbbTnMEZ23A8i2zfUGTGELX8cf82TCWLL5ZeB7u6NHDE1SFBgyNowv7htH7Y6PMyxg4yMx4BB",
  "key23": "35eBUx4di8LzxJ4TqtNtfMFTToe5J7ADbJwwdgJmh3LMfZjXm1bKF51G5biDghmLLrrXUbPnRHPs1MHs7PeHpTdR",
  "key24": "3NtNUf4aGKPtkYC8GKpwMfyoAfAMaNB1xhpTvt6MXDzj4iCGiwP8AL918ewat3oQk3rdXgYsiwxt4uoqSQmnBV52",
  "key25": "5vETUAJU8qKgci1dge1BLXLcqqUUkxXYjsdRYN2zHE4sSepXNAenwaoDZH1udGuNhsV7eSg3AYBjsoxF5qtF2RVa",
  "key26": "fZCrD8BQuW6QN41fjpDcQAdza1MPC7Cjof7XLFL9ymX35sbdnGGxuwhMaijgN8EPMQB1toRjLz5sbCuiAEv5W9q",
  "key27": "3Pcit39tWcmWwp8rhyJozsfkpZqqppyo1Nc7Py5ezx8VDX9SEs7xxnwDGYVDdbHYaqRMzqrGtnMkkLMjnZaZHooi",
  "key28": "4ynktondxA4zdz3ZzF6ox826TL2NPShqZ5MupP893mZM7W5uthdmhcZPQ1U5iDF2D5KVoTKmhP6sAH8aS3YxskJC",
  "key29": "2BhfTzuptUJ5fhiC2GfooaaidWQKZw1gpNBm3dzDmuS5t2Ph1HCVv4tGaEr7fJszWXxBk26ikCuCP672nSbuwxyQ",
  "key30": "5JkZSzpR7JMkJL2k949K8ckV4PumsCUSBHWacZubjzHYuN2VxHdgoQ3YKehnSvYmPzGVcKeJdcuARWBhCGEXpNBx",
  "key31": "7S6gfkbbXMACFbr315xrugKs2sXHf3ogCfjjJBZaKhmieTPQjJRqCqLTMVrezuUTPRoS2xT2MMqwm6SJkMUNYkq",
  "key32": "5oYnprfSFcjsyQzsnE93k9SfeSckC5UgkJk6Gdma1qstNtU7oUjku7mq5GJ8vkWeJTSLiJpxAGSToiZY2JB6CbQX",
  "key33": "2H2hsyVhHCXR724uT24Xb17wrV3sPayd2WQNDPnzm1neVSUmbENp2spSWNSyT886D9UcN9YWBtrHFQRsv4icN7Kc",
  "key34": "5sbW63WMr414YgPQBCU3pqdnfW6kohGftM8qVcs89RaaPNovDDaJrMGN996oHWuvQELz3cDm7gjdKihs82jNSVYV",
  "key35": "5cggKHp1bTTps2K54bDR2aYFpiK9HkqJBqFf2Z7xU64dg3HUi8G8TgtBQTrSA2NGo8gFv4pRL7aJKPk57qzjVacw",
  "key36": "Ty8rgpFemBvR9PJCHYzoKd9rzQvWmuNvtPDUhQWh9Dx1PHmH4FJGtRoNhuQYk3cHxsQVMvgVcshvGzHAiH3TA5e",
  "key37": "36x73ZVAvuBr7Rrmq2yreMJmhzZ5C6bxJLYwZcmaDFviJz6bvnquiNrCBmFc2hnTXoGYxj9bEfL6sXKLND6MR5MS",
  "key38": "27NjKEosRLhexJRHAW83tC33nf55P61rex6sMgWcX1xWWqkdSAgfLWFicePNpH6BD9xyqDAYrEDBHACuMe3aYeo6",
  "key39": "47LkJfqRiJsiKzjYgW3Xit9sp8YAniCDAiMkbwers2JdQZiQ7wwRAZHSAQYETcoWHMSKAEXpZiSozianMLZQyWWj"
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
