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
    "4wYpZ2sKvqNrNPWDDxhnQYAXnnvPRSPtvWWprL17HxFYzaSjoLcztrxKAvrTyCDJXUcCS9C8icNL1dDdq1i5FvYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNfvRKqMqdSEDWgMZV9yHNUujpNLzY9wRJGErY7DHNfjzBuXqHMwtJ2jLUiLUWoF9L91Tr6Xk119oihmZA1ZGA2",
  "key1": "2deAYWExCjbLWyF6pao4avjbtjvRbV9XxWzUGXAKCenXUwnV6nEv8RaqQmW3c51bLs6rWpbjhCJstrXdsVU3LXwi",
  "key2": "5TAjpGzrp8ugEEPPVQqBhLC1ywwKYFkmkxfnEjcznAAT7Hke3Ey5BtyV6sP3BjRr48UEuS4h9ufkNFGQ5YoL4W8W",
  "key3": "3rqwdESkpMc738L8bdZedfkD5Uoi6iwbJrcg1T2DjycrNRhLcrNL2PFo4aG8JGtB4ypuHFqVN4meWmSLa6Guza7W",
  "key4": "2ixw5gLbQ86RSGcGN5Hx3rjkgc7KPK6JbfMYhAvwz6QcQuD94kAc8EeXE88xphL4heUDvBQooNzLbpRt7arxAEX3",
  "key5": "38K7CdSF8McnwhSvbMtz1Gg1DcNQuddhGFj2AHn3bnDqswfZgDPqHRbk6FgV72B1gQmMsjkHkcHk94qpQmZj4xjb",
  "key6": "5knSWzea3fxnf6RJqCurJTTdzvKRkEtCtGiLkWQ3gCCBksE7cwrMeio7DZZoJrVRLoD5tzrUtnvMH11otF5h7Ghf",
  "key7": "59dtymhUzDZ3nthVUWz4JfB2MvggzPVXwfjLcpbppJvXCy7MDYz6RheW7fJE9NafVwjFyuLPbs3kixLHaL84JW8D",
  "key8": "5RKdnw5SfMNiSpHJEy8vHMMUHH2pP9c4HW4fawriHAU1YTTHRZWJjWSVGQN1RFwfLenSNt9ZgQwY8oc2U8UBRd9h",
  "key9": "1sEZzMepAyf8LFzVKZV3J2A5NwHaRyqLAieAuJLJTfRecSAsgwRGpZzbFatHBeoMZv48q2UJ1cAgiWyrjvXVdvh",
  "key10": "3BEjJdGHuTspVcuwEiVPshYFTnuU4R8iJsAfSgatzhMXgjGqsyURpMKYanrtbPnJvMC9tLQiY1Cyf9R1Rc64jim4",
  "key11": "2V7asJ1Fok4S3bSqjSs5VTtMdBicznfhLfWG1Q3KUt2jR2iWqiX1NVV6RriCTxRzquh8Vik4pTymxegUBU7aT4Lo",
  "key12": "4yHZ6Qa29K7Pct92ZB9FL82gBKJCcPsJUUmqqewxhWs9EaiZgeB6hhnEJ8RnYvi2EnLGfwpAV3RhjYWATs7B7DGv",
  "key13": "5yi3aPfSYjvBk3W3JWHS8YQHGzEcQTC3Ga9Zkyg7uVMYESMkLAiYw33Fqpvis8AZsCUpnPHCd4wcjBrgMLJeRuLZ",
  "key14": "16gUt24sG41AWBhBvcAsdD7eKPNRky1mMkUEH3wfyaqoFbT5PH9Z7BqWjMniP7ec7toQCXb6Mqe7q6Jaw8Hj57S",
  "key15": "beHEfocGvJczhdkkiNCvR5sm1fGDHN6AZS1xZMiU1h8pCB8JDmQNPgWMbGfYb4xsKmGKAf9KH8hNPwjhjTR1BYv",
  "key16": "5o8PhZmii1GS1eUPybnHtMrCFgmxswgsVSW3iYJxwm84SRfdeCx7Jj59jNEgC4Kjy3vN45D7Bs3t8jW6yqv2B5vm",
  "key17": "2D925y5r4VLNPVP4kQb82TeofYLMe6tytGnrkUzd4hqbx9P32iqAjzvSz6XDke4PZCtnNA9rPJyA9NsAncB5hCbn",
  "key18": "3q7hnmxuN1tbb4WibQmKTjfG9uTVLXReZuKyP6oHFf4h9EnPdzTHn8baMioh8HwjBCVofFvcM1E8Jz9iDV3og4pV",
  "key19": "4yAyg9zQ5PkVvdyvgiwEjCSdqWicGyaka1a1p6xE2XdnnCdfMHntSVViPukP2rPaZP97riaM99oQwU3ncrk2NVjh",
  "key20": "5G3qX24rxu8rJYRkjekvJFot3GUKeao5ZHpojLywfa1reiknihzX8FRG9T3FTuo91F4YgCm4dCGd6rEsXHAL6oUC",
  "key21": "23N2YdUCARcJYeAMa1dXjzCdiJMp14bVP4PJjn2DAYnZ3UpcJZ1RGCqG5LxRKDPsErEBs47WzgnQQqxH37vEZF8C",
  "key22": "3eSzUVrU7GSbBGQ3r2c1jGyLJ1AF5R3QoU1eiiXB5rK5mrEfHtJJmFgguWtdDW87qBFS5Ww3hBo1doEeTZvy6VFb",
  "key23": "33vxFeRioQRRbGuB7mbhoXkS27fTfdW9K31gvRUknhDukNCaywRKnXrwVrKmP49CKnzqWh1QgDM2wGSKeuVWoyUq",
  "key24": "3WhfDB42jWrxNWn6C4khjCwtATV1Nu7T3mGrDzLMfs3s9p95DRyskx6pq4eKmKPk9xcfBKTrBCVN7agks6RhbYAc",
  "key25": "279tX2SCHSJqyqKiwktZHhWN5LMnKLqhw3cJjmCmryntbQN4sjg411teu4eq9iNpmT6m9qfYqfzD79tC5HcgDEtw",
  "key26": "4CZ56UooQ3yURhDArCpiqv8k9KpVTw5FBbHqEtK8Pe2vTsNW74xaAe5Y3uKUcAM6A9rFdVUBjP1H5eLn8EpPULJj",
  "key27": "64NRsh6qYpMbiBgcPxgjXQHTx5taHpXb9b7GZnfxoXCV18Mjrz61rwD3HS2QXrPQoWpUgyzS55865CrGEhN4WnvQ",
  "key28": "3c9mgUtRffcHmCWDC1tGP7kabK6gSZXaeTzSWDeVpGnSdHJbgh8qAkccYRT2hn3A9xZ54m6Z1TAPLe3aWuNBeFkm",
  "key29": "5s5CfkLyHLyW4w9HWwqYJzYSXBKBZ6W3xfMZH7ieJUV4K1wqpQh5TwbkqNm98PDY6TYeX2GVVpPgMk9o7XP8HyuC",
  "key30": "2yFA8CCzS2vNm8iPJ9MCBbc12xYLdHWdGpcTVZdvzuxAvcVFmcJSav8gc6ECTtdZdDproJNpATQxLBq7mWPCqeGe",
  "key31": "axkEtwbp4HFTSQBdFZQsKzTuPFfPxH1QHRjFQqZrE9FpG5bcMhx7XYErtr3Vj3uikH3P3zsVR1qvBEaB9f79F2N",
  "key32": "21HNw6R3eUBLp5dxqvyDKo2E69GqZEnntjWqxJ3TssCwowfEGEqeuAi4nhzAErzA6ELH4RKgGWhGBMJ4cLY5zWyN",
  "key33": "5gB2C62dWXFKzZf2uVU7vtZaeUtXtRoBrA346TxBsnakNtGgeUK72Dqixbcu8dKEy36TJturtheAZctfnzxdiCMh",
  "key34": "3NPv8nc5n47gxgMvWcuiZCx1moo5qnb87kFiLoAnVpfP8nehfxr4YMsezJFK4k6FDyeBwYRqYoNcfEubTHWbTWNk"
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
