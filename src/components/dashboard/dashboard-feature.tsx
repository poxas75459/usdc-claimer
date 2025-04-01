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
    "VH4YmpN8EveBUWm1VVCmbSzNf3to7nPYHYMS9CQcLmE2seM2X39LdqBwt4rfsqFWeVXJzpgvNTdWwXNDKVvx6Ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d76fAmRbvMGdhCo91uaQhBzwLAARYchDjGi3xCEXQVaf2Tz18VgyEUty8jX5AX2e9N7xo9RZHzn8SNYfo2fnuiu",
  "key1": "25pCzurCo9PajAhTiH345CGQvqbv8fSaBhtkvYTNM4F7XiqgdyhjNpUs9NquYhcMyHPHkfQ21vgcYVYD5ncicba8",
  "key2": "4qcDeArHUk4C1Rj1foq8qxVNjfWKFGnzdv4BuZpXZNTQJNhRF6YV6RKzYDofpMXPPLQnxQcxioxAg6jbqHMdjrpF",
  "key3": "5RFa2NUrT5FhRtPJNNQfiu3pzhqMNoMjCoSVnkNuiYbt1Utmz9Egt341Gdiaij95yFZX245PkaRzNMqZECLM8Uev",
  "key4": "24oDfuYrs2aDPQU2jYpaX4B7Q3SUFrR4583S5NDT1mq1rUfDTzP28BjnuaoRK9KgCqATLZKnb7oyPvgsKUZaDAzq",
  "key5": "5Sbwzc21eYZ57bVCZYrMtQSvwiQDFnHkc24sr2banGL1r2NattVL8ususQXN2SPPtHpxzhrRU1LXuLZNwJs8fW3x",
  "key6": "34MsAgmge3DGzw1LE8bSFX4R11Cim6dgDRN7ibGirm17BS3NtS7m9H95NSHrkHWVXWuHoRKVX8xfCRcW2Ng2ZVVS",
  "key7": "5goFPYLNi5fq1fK1MGCNY57w8twm2dLM8CcY828uTMoxfiN89gAAyzrWCAovFSvcgjTMVTy1naxSMeByjbAxZKf8",
  "key8": "K8jgQgE7B9NUWWoLhpKcWGXMdBnrRqSAZerpENFVXUq3kvttfBMPrsxUytCkQKbuJBQC6LswP7pLHxDtSBiN8GQ",
  "key9": "286HUAtxYeUkmzAWGzf8sDhBTnZKC2YM4YpRnNQpippiH7LVqfv2u3Cy6KKWiE99iocba3SihfegcVY4byzyKktT",
  "key10": "65P7M81xiU1au7KxdoHhGvntKhtrccsEfF3Y6Gsypb9LLRkMh4iWFPo3VVATd93SDSDpmtn385Pa2HgVtfWoTF4i",
  "key11": "3V8oQvUhyXuk4EvSixm8hzaEa35KkGxpZYcMLp4ZcDvKh88WRYQzAaS8stDpeyPWN2s7mdu3nK9qQVRMjPQoxMdb",
  "key12": "4XT3s3th36or99AJeCQjVDzMjvdcBDFvWBAkq123zTCrGimdK49HALxR4iBsfW7bTwD7rHVTdsjWr7fiKCCtMLsD",
  "key13": "27emZ1CCD33AzT8yhfP8gcYyadxjePrGmvvfNgHWKiyj5cbJXSGN12FywReNgEJ67JwVzfYBZdk84VYowSj9dzSq",
  "key14": "2d3bQCzJwkzZRXoj7BkWfxYu5LHJrEH42orQGJb53ePckusk6sx8XDSFAr62NifNxuN1SBSDn1NbfD9xzpXEXJcD",
  "key15": "395G4co5SFfPBtE9ZjHNmf3AqxxcNCWQSHZR7rhTtoubJUAau83RdmRogg9AiBZsHiRCqX3UnKDfQ6XF4V2BpaT9",
  "key16": "4kL659vAQ34iL1R3UiFTDoq8VRp9tvkw6CaqonQXuk1sggUJSuJYWvofEcszst79fYT46bSGAfy6coDATSHeoVbf",
  "key17": "4QAVtC9hQxLcPXT1afgemMp7N8SVxYGgqeQYVMUKGMVBJXiehxheadAsfoYSJCy36JQVqcLFNy9MewQrtJjp9BLg",
  "key18": "5zDCdSKYFEa8utgLK91La6uHpuwVeoTWCYh9RNpqQ5ShzaJuypDsNnmDf29kHuwJ68rzm8bYTXWc8PWnv3XPVztW",
  "key19": "3raWpy2A8d3H6w9TFSJPoRMa7EfTTC4YXTL8iYQDYg912t7QWm9e91MEEeN46jSEEzb4oEApmLFYLPsYHC4EdWCt",
  "key20": "UDATF5s1KuT4QfYDVEtcRq9mVT6YFHMeH6askmYAta658y6ZRcKrXh2JMfuX8sDSoEvYZUbi2CPHjfv8afRvs2Z",
  "key21": "2wb5eEozFvoqm4LUwkRuqURM5QgeJ8WwsNzPJtXUgVo4P6Yd4pBfcv6vmXpNDURErD1EZzHNeQo8py7czBiA4xSD",
  "key22": "rhjqomAuPEzuHZ5EmzrqKP1HQsQbQ1dJ6A7nmuT3DD45PAgukBCSqeJNY7fetSbkX8fc3ecw9x1ogQX4itTmrer",
  "key23": "4uHawqR6YuV2oMZsko7mPWXCdRHtjpqg9986wcRLiQB54t85gBRzGpjZpN5gxKBzFTDdej9pYyoNyNpFBfKojz85",
  "key24": "4zz7EvnK5gwacaGh6ekxWJbNbdrG7GzAVEsZ5MgkMa5wBgG7xyKmj8cCARD1xRoMJuGi3aEWRYhbmN5WNCgyrQZe",
  "key25": "2TJcpfiLQJTYEGDAcTqAcbUq4g4pFQB6rR3awUudBY7qhsQUpnvEzwuoUnFayqBTMw9zUnfnC8cmVkPNeFaWtqbF",
  "key26": "WJ4nKwJ9hZZv3GBMFwjubUqANoQweSSYMoniN8zvXjvARnUyj7xuh3mkfc32gVfC3C88YxcutLVYj4pvr7MZJbs",
  "key27": "2LVKMT5Hg3LuUGnnpYEguPxpoFP9XWWZuv9tvHBvefqnsKa71GG2BtbQxEjDETdMfUJ88d5gi7nK34YmGevfcMUW",
  "key28": "3uB3UDqVkpJ5FhCzxtuz6s7uuHCgwjtGHAQMF96Dn7HBHQovoPfViRLhLCsn9HUZgn3Zvn7UZXtvXiui2g2Js42",
  "key29": "2ZmUhYMoPaNpRyttmRXTATxZVojh1hEQXeqp8Mt9exm1ALwHPGA9MhpJfUudZfhmte8JL3RLfVx1iFu9VU5uXDXP",
  "key30": "4gzopch5GixL62LpoKAXhN9hVW46g6aKdr62xzf8eAvsYYfEEVhWGh8iDJNMNBYQagf4FeMJgnFgTztNAroQFh8v",
  "key31": "2mGEdPm5GNKV1ZT5xYGPzdEHba4cutY2gAjKxaBq6vQBCsPZmD47C4WArS2ZjveVJQ8YyqcWv1Ha1qrTe4ARgQmf",
  "key32": "4a637iwiCC2mBv42rEQrikTbyzbJ5QvuPyDDGsHubwiSxtTfgue97mh6hqM8jMCryJHvgh9TG4vRpEwCmQDr14Fp"
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
