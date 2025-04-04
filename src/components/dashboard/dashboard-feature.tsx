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
    "5D2sK8dbFSNAnnHEJpxTiAL6DcYCCsYeRoqNtVyAR5bPjLVGSgwMU9efKDMZKTEC78teuSaWB6DJwYNsBbJHy4Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WftQVcsuggaf7NKSgz3JX6MvivPn4PBF1zDpZXy8tdpcMjTELGjzBw2RFGNMzLqikBvTZxM3mL1KHCMGv2RJ7AR",
  "key1": "37QQThRemkGHeUtN3pEMbaAiXq4VpnUamnCTPkGNzPbQPLkAQ7fdgD5YpoUeDRp512sozZrrKfGVLMqaRPwA82t9",
  "key2": "BqR8gXZjGeic6X5wYz9RNzm4g1rPcN4tuY3ZADKhRBfuwif6KTRTLdmLEyaTV8VZakVvt1ZQjcBuDSngwiHg3HT",
  "key3": "2mAvxPKPkPN8P9FaxDqtu8REzCPB5JkfSy86ZZ3i5WrR2CEPUf38wzvHY4EWupmi7jJdZXNsLkggzLE4HUb7m8uE",
  "key4": "4LJU9njuZqh3CUNrZd99PvRw3eGFkpEjbqR5x1o73GzdQv6rzotvUa7u8oEutJooAmZEUh9nveVjkPdh65i7kyzZ",
  "key5": "4y7DhsDPh8Eni9A1oxPFGCzqDWBnEqgLuKCZoQjiXZEb9Kn6teShTvQFC8EhSvEfnkNeg1bVMQr5FKj82XRrgAVA",
  "key6": "4iY26m5PmUk9xjazSv46f6qZQK7vG7D7ezmAk1YSdL9JfRz1avtfYaLT6VvpH7cbMW7EEJ6napBbPQcCZy8ywaQA",
  "key7": "2ydUHCXQwCSWvHGfjCBC7XG7t2ZK7ym7QPypWCndrbeusmXfL3nBBkhXhdz8ku8Tjy6ruc8t1BbWLP2WQrSVjT12",
  "key8": "2ABP6vXGTqHnZUJp8UcnQhKuAj1Qmu9x5pYLHdsfd93LX7DW6xbeLj4rWarUBnBJSCv7hwncDVFyAXBrbJcTFaPU",
  "key9": "5jrACg5jQjCQTXnkhoRAkqSt29g3BPxootq5nv9GgdMxfwnwzet3ahHSVKBmkuwqBih56RXYPRc9tXzqVQzAgi9F",
  "key10": "3v19VUnx2sZa5P34Bp6XjMCgLQJSQWLeP21Yots6WR3hFNDTtfRvjxGye4REPZNjmjErHWHcR7426seJ4ZSQ2GHn",
  "key11": "2f94t7wZpJoVM3fifFHeAV8XWCx6pYu8tYUjeEtmmR7wTb1du1bfknXB8yK9MLG6JUK3LU9WpQ4s2EJsb5T7A9Bv",
  "key12": "hp6eDi9ewyZhsn5mK5R7muYDnvMdPpBtytUEUgeN8jhkCDfyWCZSMiSD5bsdDWfoBZdpouWV5MK3EeH1SJB7M6c",
  "key13": "2JKCRDqHgZZRCt19fYmrqDpox4tGHXP4Q4EXThqNphhJrs8dixfLLMSGHNa3NXk65paADTpLEa538uQM3jyPVXKh",
  "key14": "3fqKLxRGwY6ByvS4pZbo5b86sJrUhscB1uzictSfqYoS6jFpi4b3MsKFeWusKhtgnZtDWbWZHJ9M3y7ec2kPdaqf",
  "key15": "2jsgQHEEFiWnzeteedNxPwBef79YiNpMoPwFUNT5fd56CBZ7Wbc5Zo5JH1Jj7K5LLxPwNEBpe8SSbaAi4CWCt39H",
  "key16": "3vuKtgomtt9v9xar4LuD14oZBDvqKD9XxDfsJFhnN11Pxe6Nju5T83y6xFc4t4Z52x14STgXRQSqXwvUGziesvqT",
  "key17": "fHspUNTTKymjA8xP9BHN44cdEX72peBTgrF2GSCRUTMoYHLf1PEd3qyBz3ZupQT83x6WQtmU9bxvWigovHjvyPU",
  "key18": "2vW3ryukfaizGAheytrcLMGjfzwjKRj9kD6FgY47a6RijnjuZLpCnDQn8tBYrd14JbHgTqxKW2a13nAVaBQ25VLW",
  "key19": "5Ki9dPpFJq2mygBMberJhYYrerNPDACnK2ZUrUNfKhGX1jc72hap7y82sLYgPDQV1aHXpm27zPA3yFNWirqN8cty",
  "key20": "2gE7UrHztYUyyW249dafJnqxGYE9ka8nQ7AWdRs4dNQLkoLjq1PphBBwmrfAcKXkqordPE2pBANiUn9cbebv1ta6",
  "key21": "t5khzz7dxpNdHFHUivJpaYgwgHRamNvyDK8csE795XDHPzWxRv8t4oQigS8naGic2gCxutkjPQYtuJ6g6hfDM98",
  "key22": "58nYhcPzi2dNC7EuK2Qj1z5wNK7WAiwu7NB1u2ZYcHUXbmN2ZT2DG2Kg9Nh8HQwo1rxfcRRepwDWBRQt91taAcbk",
  "key23": "4F5toRcGxZAxArp9f7AFNXEKKb1K8TTcwVWPP7ceMHUv1BNqcNBCkFwc6KBTxgQbfApdtvH5HGPvUbsyCrHJHgY2",
  "key24": "3DtVsKcGzvn13wW1bP6EYkovHEiNNxuCZLbVjPqpstbiFn6mRKYtH2MLXgJF9SVTj4zy6PLTR38gVHELFoXJHrTA",
  "key25": "fcEuMJTHGRAqgto3dX8SxCdKQbSfaeyrDwi6Lr9Lj1oAz5wz1frjxS8Bdk63sbhM47DXgYmCb1cyK5CvfWojxRf",
  "key26": "2WMRerNoedSrExgZNywHQtceJobw8jgGxkGYbzN4M3haeM7g1V598PukPfvfgcWavd14jqTrWqfxQYczxMfEmuAM"
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
