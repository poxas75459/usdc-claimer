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
    "26dDpM21YCdBCvWpFoywvkQfhdDY1vakhFz1r6idhPdpXea5mpYRtEzzyP4Ew5dosT2Nqr5HhRD5TBq1Rjbr2FrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665kqnG6zWi73LzzsWFtkMAD5k6WqmVtsxxTmpy6ud4JY8VEURoqWct4geagdw3rTJmpno8ystrETjRw1mx5SBgM",
  "key1": "5gyTSTSXB2rr8CtebFbEqrJ1LSvufrca9CWisJ1khi4Ggq3Lp9NVi4cFpTF8j1cn96oQL9CYfG63ETxHfSnJ4RRM",
  "key2": "5peKEFu6ccJH54xZN4a3VzdefupxSeCEpdhG3DGWt5XM2tYnpvtCPtZBW62Wj94oJ18ttruMDwo9YJvLsnYLACEj",
  "key3": "j4ERLH1axSxXcMRP4KJW3dtYRETGDpQ2yibBR4qcjwJZa2H8dtMJUCoy6d7aEwVzcnr33wJGr5N7Fp1TLCLWvu2",
  "key4": "yhQgCWp5Yg32TAxMib19nzHX3DpiBotzhNTQa3shm4vgk2dXU2dbXCTwm6cgRXdkccYvEMX3E46DuJMMx1HAcba",
  "key5": "5YjuquA5AsYN5XM3RqoqRJZZKmi3RrvLuE6LLb78pTjvvVdPhSGRSJhmhZur5dSG9J1BucDr67qGun7KuhWBFAf",
  "key6": "3sMDwH51Z25NmqU94sJwMPX19AcyEeG6ot1opJ769c8qFLGyXArEXRLmn797XM9UYrAq7GiSgargmxA5wQ91WtMo",
  "key7": "5HhKtEKQr4deQBNAj9htSv8ZjdMRarzzNnBj86ohrfwovSu6yKZMnzEZLiFiN7aPGp8VUamayNwThrndRLKMPKAE",
  "key8": "8X9gLBVJ6BFcfsoNP9oPpYvg8LgEbzoDhXQ2j13J9eLi8vv53uyihv4vW6iwsFVWsqZaJFKfvewDGdwVoSvAje4",
  "key9": "fHWyERt6ytFZRYZTg4cpYyhfijJAh2HDMwGDPZnjxxFDhpCQSHcz2N5CqgrLgKMGmvTgQvzW55Ev64HogEptgzK",
  "key10": "4C8n9DpHs55JQxFbTBnMGh8mfvwMCzAGnH9bfpjDZdYQhHMnaFkyTjUbTnHNp5rF9k2b6j1AnYC3tkXsW5xLAUVi",
  "key11": "3WTuK2KoXEa8toAeXhwzUw8wGX8TzcXAiF42gu7KLXdB4QcU7bn42SMizYd5aT3eJN49dCdCaN5eKbcCWjf7wcPz",
  "key12": "U9ts23TQLgNE4fkjotqLZaQmuMbbocrCcXDxA8ZkZEg6zscWKkDxePD6KW7a9WGkLDK2aoZYPP2mniX9TWRS5pL",
  "key13": "4phiPcWEL1U6VRhQgxa78JhRV8M4UR7eGjczCpGmbLygBxT6YnZX5PjsWdJ5Vw2RfkLCfmW7igeZeJEEceJqJ9SG",
  "key14": "5HCKXyRERKMFdNBpDdDww96MspvZX4ZT8M7nbCR5wKujV1LcUiBLTeLfJ5ciHfkgwc9FZRctD7Hf4NtKHtZcnxLm",
  "key15": "5J4qQxzmKZxVsi7PvsdyucH2uz1Pao3Mtk53o1FYrrnNZp5kEMsxgWJHcsfXdDBq2bkgVMtwWVPVgrEtGMpGGn3u",
  "key16": "3XcVJhL93xCintVb9ULkondAH6RFohmD4mqWya8RDGmsvR6dacg4ZxE3naM2vz23Gmjv6g7X1Cg9W3xqgeDii3GP",
  "key17": "5NWFUPpUAmKrY9kHNzeE1zcAmiawMiQusTfUbp5ohHpjaKCZfrAMnRCSLPNQhFqEob5zRXLs8hXxGC6EQpa6y4dD",
  "key18": "32aJdXh2h1v3gknzi3NgC2fyYbBjjbP2dMJkX6VFxHpDh4M7TYXL55e4dkxhyapK2dc79ipngnjkBbgtdhnkQjPW",
  "key19": "352YmgKBFKTmngW7cXMs11SSDzRg3eVgTGsmV7NQgK2ubrvgc6F1vDbjH3AJc6goYaDkvLv4QiAuKYMdc86LYmke",
  "key20": "3unuZNqXsCTx6NWp8pmpgNp8wqQr14tVKrpA7bVcwVRDgEi2bM1fRj5h5jiSQyvzvvXw27kMTdu4RJ7zmLjTcUbP",
  "key21": "5Qu5NPS1uStb3UPz1JS7fwhcJFeTpX97XdbJVU9TR5gKuLh3H89nF2fGj7D53NLvAiYr244imp3vDERybvCRH8Zz",
  "key22": "4UEXYWWqEt4y6f9fWyACCSjA7YHrbaAdVYB1AtXAXjyKkRKqbEBkbMyh6mT4jj5d7dTxvmtDgS2UT6L4bvbpLhk",
  "key23": "3C6iBpnDVT5gqo94wSPhwBQedUMxE2UaMui19vJKXyTkruvXapSHM6ahvUs7p3UYByLNpSvtuBHpfDhreD43Qzux",
  "key24": "275cCcZe25mBrxEjhNoDWa4aDGhPLuEMS5d7QVRyHN8T9CjZBbcsikzgfXZDRADUWgpkn4TKJ59H7gwYGbXPYy67"
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
