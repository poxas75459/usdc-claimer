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
    "NuPNv4u3cKD5duCXdnQcjD4bQB7vJtwuUEpp2gJZZwSgLLx5Ke1fg6fwdRHhMnawmxF1oV61nkqeC6j5UhjLUrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Hivkxq6CGGSYDoQnnQSwRqivz6SrS96c52mVi6wci2QNon8QEJ7NdHmbka1XJm5GVW7ZX4smDFtKErfQT6e3NR",
  "key1": "5Phxb9YdvTjskzvSwc29fvE7QQN1HjBc7UU1MrsZHKPuWfwvz9HyMPqePLGtqLwqzzmwac1waThthaQEhdXGYYgN",
  "key2": "3TwYrj6YusBGdt1LZq9nTEBTdwG71rL1zm4UVKmzhxVeLCg2r5miWHjxNz6diStwuQk9yWV6fGpGi2Xyzw1TvKA9",
  "key3": "5xZu5SUEoDcnGaBK6R1bEUN37tfKivgNArVp1347ko8rCrbyzq3mZgZHCDQJYTPyFiwFctEvH2vyJjLghu2wzCBe",
  "key4": "5CxrbaD2d6vkR82bX9Zck5CQZNZzCyaAecNDyCEkY3o9GtSy9jSkpmrqng5ChFcTbB5bVugP81Zb5GEZ4cU4nRCZ",
  "key5": "3n41J3RJtY7YntZ3jN73DPUji5YHUBVxuzSvrG3bmv5faBJkrCCqJnEDpBNEdEtB7RHauzkE4ZiJf7qxVm5Bh8G3",
  "key6": "2RUsvxPexmm86cqaNpXzzV9cz5TCNdDws5D3zaiVu931WgAyXn8gLXrAe1TjitFFqs8uScMjSBSoEwvSNsHmTGUy",
  "key7": "3aQ9aSvgGedX9HDKDGHxHgKyCZJRHtLt6PPirmgpohQjSE6H8zZBxPepYCqW2yZEDtE8D65nkti7Chq3HqzDTc4a",
  "key8": "rAy6AzQQCuXqm76MLEAQEovst8isLfLxQJYFjTV57wuYohZGE1joqDfA47MhRkAv9U7FShJXCc9YMhaZSQK7knQ",
  "key9": "5QC4Q2E6wC8F96RwBESHBA9PFzfLbyUmihfno3QEVN1QSjid4iRc5L5GdEMD5Ver9mtcCxgqkFFcyNyWirD4gV8H",
  "key10": "4dJqTkZ6GgPZ9dCn7ZGs32L1Tvt7v2n9zB1SCmButATvkz9tfJDojVxqXdD2tPBdJBDc3wpDDafhmiYypWc53uqN",
  "key11": "ijfvgz1WEAYKkoJKmunpHbgPkhZRoQ9nxwrnqieZnBZQqEr1ki9RDKboRJ3dyHZhQ1E8nKtq5uVmSYwnmB6jafc",
  "key12": "2S5qnxADHaDcErozdEsQUzhcXGZSuMsydF4wBiM6Md46k8hWH9mXK9qAK3f8YGst6Sq8odUASTRb8B9ZoSiNEXJU",
  "key13": "4DjEWnaiDN9mYPaWAvADGAJ6UpMv6hFyzN34sZwmvxCL36YmB2LMH5WFKo3wrTeLng7DmqSSBCfR6fXa47xsLmWJ",
  "key14": "5yPUMaWnmzfSGcuRvEsgSjrWotjhe2hgFxEScaD1ZiCKB5qYBZeNYQnAxyUUVDqz1hUpnzpvuye4EPew92t71cmJ",
  "key15": "w9B48g5XSjYNinxvHkS6GJF2zMzPX4xac8giFPdvTMKHorgjhSmsWEefEAyFwzBbokbZGVYYSpPBgsWAJzpjdSF",
  "key16": "3rfuMiMSx8CsQjE6QZRNd1jQVQos6YfTVbAjZ17wdp9nW1UwxSgzVvazeBFkppxVv17Qq8QzJ2iXMNYzqA1VASe3",
  "key17": "35YcpHd4KfunoxQuKLnZNSYdfESrLVk2eAvoNvCPLuBuDLXUcuqo9s2wou5iYe2MjZAkmQzW4TXHWTLzhaYVuTyq",
  "key18": "jxeEKqc8NpdqV5txAZkYMar5tXZA34T6mso23Qs8ewroqir89QdoXfMFPGudiiVjkivkS84kYJrxnihr7DkbhcH",
  "key19": "4MNSdSXBZhV7sYsoGWLqd4kd2dYpLQZ51g4xLu72gAZywTMsDAxQLENQR4uDsq3heqxR9gvz38MCZomdPV4ZmhHo",
  "key20": "5RDZyFQXD4XMzFecHFgcz7h81V84Mo81wo2e47zYHmeGB2azqLBGw2jrC629PHoCtqX5RZDrD9NY2Z8j3SCZ2ptq",
  "key21": "3ecq1NzUjbgAApprC1JjxMhu86hxgMqysafzpXSgpNsLkbX8DivUeAQcfgzSsCJ1h452Wqbo3aLb2gERMzjx4Q3G",
  "key22": "5E3YU6DahbcyGp1ep34CMwixfVneaFJuQJHTBvWBNeToUoNHqntwrGQAivCDBiNjrHb1tcPHDTxjUf9W5uWEcd97",
  "key23": "4PhkiWBtpdefEF7EE27DNsx8t5oDXdh4kMzGASDRtw6yGz6nvJtwZnPLbPTpaimvc7Ck1mzmDKATVgePgwLQfkkK",
  "key24": "292CKXJ9pD9wiFfoSW8RUFV45Vkc1rbjary6fFzPDdQeseWUcLw7PdXnV4zthmUc4aSwL1CFtVtc1wETW8VCMowe",
  "key25": "BpTkugzMvRChuzc9zD12n9rh6frZWpjwEPajevKWWhxTCnYWJRYgJ54i7JPGSS1xW9YaaXVq3tEb6SdGV7eTqwK",
  "key26": "4DJSSBhY4BPuvmNpPXABrRRwuBicNFkRz5h8zXVDCk3udMobDVUK1e2nE5ZGG7ztLqFHMjEoBriRzx7qqzoSocib",
  "key27": "3Y53kEHHdzAGtU4BDWkqm7TT9Z58xWHcUK9oipPy19canbPJLTf2Pp89vycZEqHx92GiQeb9ZNYJdcY7yWo3nhDP",
  "key28": "3qwkQt4ihUMacxQLUhiGXLXsSnGNeoKyY3WRC1tzR7uNxemFPrZwJqg2ctHgiguhr57zsqreJ7pi16tPM7S5C2bB",
  "key29": "2rR5dFVSh7qJaRRXv2htmTbFV3N82AmhYtsgm8G9rtkrfzsyCsk3N3ToQebDDyFRUonD3AzaMsr2zFriSgegnMBc",
  "key30": "qMkog6rg55GXbMJGTQT8EMktEvQS1GpyX22FbSjmnEQcpVzhHS8ztBqSvbJEWSxHt2Sx11rrefqQTa6LQR7xFyk",
  "key31": "3qzd3u9Yxfi1giaNHf3QjNQ6fUE5tCrJfhrtgmZvGhdYSbR2m9s4rpzFXaawBnPpYNjJpSpHCyLgTJF89qNTrCHQ",
  "key32": "fqucDUU91GKJxiubhfDkAar1hqXdirk9p8ozk4L4Et99aue6wAzAQN7tknN4mk3PJ1hLyXLEUx9YySrz1kpkLZe",
  "key33": "31kuykeoyieKr3YVyaQGPNaAUz2A8zXgteWw9LUibp6h8J2L3Sf4bpqwRvix2eTqcHueUURiNWbJrc3zEToEJTSH",
  "key34": "4iBQpaS8igV3dLhjqDJcVbmHnpxFRasYCG3ASKsqdheWKkwcHPwp4oPnUALTwZu6JB8C1RcH3PQQ6To2WDK8cvwC",
  "key35": "36r8dqvcGgy3nhcXGiyPGeAj6ackNqDhA7gVEx1uktDTDZUZKT5p6LcikzNTX9QNpSkup3JLrXP45rbrQyc75GJZ"
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
