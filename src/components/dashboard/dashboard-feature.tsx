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
    "4au5ubUcpTNQhubS48abkcScRmMuXj8FrfHGwBivQC6bJsGShbTLX86BxfY9HQGsWh3Pk7sVjsyRomnRJNtvJbU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uNfEBSVD3bxET8kJoMyphne8EZVp8hwfH96z8wTPk5eMKNn5dRoFarEX7HWCoGXQWh2YuZGNYjPivMkB5LFhyk",
  "key1": "2EAV53VQxSZK5LaHmgAdTcQNcTXLErqnDVTTMfR6AuVStWZP8FuNR47rhZj1BNad3RbUnZDTbEXgiuwTrT1qfGWs",
  "key2": "5fEuh71VdjA9yNhFzTzgM27CDPmwDkcYEqEyoXRUyU2sHGTg4A43h69NCcbzeUfmdYLEJ12TEEL6AcUF1qxUvJCV",
  "key3": "4M2PvZJtnWvXxoLfWmukTyfPVV1C8MA1oUhUynCcQGRWXYBATaXc9KwNqCjsa6THWSG5tXWiFtzokduMKboSDDmn",
  "key4": "4Wcpffm2gcP4JVJC7qJJYq9FiVeykDWcj5vTyog2vsHY3toU85RA2jwipGx3AMnrsE1rJKD4vGizHMEZ9QpqDUnv",
  "key5": "3T99ADsvCVfwiS5zEN4ACzqDLtT4t3yXPj3cgB2Pty6VGB3ZgwKh6sWTAmbSqsq1B4tkn5jCy9wq5HrgkxvmSPg8",
  "key6": "22SsovarEJRHuytWthXDL25sRh9iKo1zsKRfpMZQWwgrYkAXNWtz8NTS4HY7iYV1TDN7BKD1N4d3adc1rRcNWtrS",
  "key7": "5MrxMDHhkDQypPo1KHjLkV7mWQ4gF1cHFB4DReSb7rucGh31KPc3LVm74L2wSSWCXn8z8Lg5AtHPUgjp4XHcU17W",
  "key8": "3sq4TL4dtrGQLuMPo5Dne6cmGqvLF85zphLS9D5wSphjEiQfUvkwwwjxS6mCSyagtGx1oLQoCSbdJyq6yY2evnb3",
  "key9": "ixSLj3w1ge4pccfDkbnoRu6XSweNnM2MmnTPGovLKp2pvuTmwAr9DeLzGuBHPr8zHKp2ANnSPZYoo4qmRn5s2MR",
  "key10": "56FSybeAkGEnTojgrqNicBG571REVNttpRW1RJwuz5C4QsbuGmReABMWms7KfYrEBmMDNQXoi4AdsdmeHpEkW1Ne",
  "key11": "3HAXH8o3nHVcUicYXcN33DXpaiyp9ViCZJ1zxVgoGneYmGcJ8Q8SD4NhN9HWSfhChv55Ta6nbhhpptcG4mqUsRNP",
  "key12": "26q99RvBXdgo7JZgk2hQoc28zSEpaDRraZVzq7ta7Q8rxM2XcBVnhQWZxpVSvroEey6hteTpr28rka7NqVi89e9f",
  "key13": "36fGeMLmVBBmrjK2mKJ3ivDaYdYcapJT9HEUyLo6WjgNtogrtAjstR1HBedDXrfc4h1guj6tVTwYTbNeuyQ1rJrF",
  "key14": "2CnJCZz51FpGQh6mqZBb4iGvH1y1GMbfjsXj3HhbXBo9WpHGK3scRSmn22jFgfPD9bSprzXGaigDW6h8S1nTk9N4",
  "key15": "4tShfnTqk7u3HV5XMhLEZtKHqFSM4mvpcE5yyM6d6mUPMudGtqZfoZy7qk4rDDK9Dmc3hswrDUfyJCHcBZ5gMNVX",
  "key16": "5pWKiSEfPQ4886yEDEFpjWyJ6dHukgjQTso7ToPW8SQKcV1scwWgprt3jcvCNj4SqdJHrgZ3Bp29SsSWWPto1Ffa",
  "key17": "2br1iRebRX1PY1qvtVzV1qJaUnR2w1vwkqMpsKbSGSYALiA6b7e7855oCppZXkyg62hbzhH341JFB41QryzVcKiJ",
  "key18": "4XvZ2GSsZ3yoNzbsT6XTymV6wJRt7PzUM46oUH1rS8BExRsiwMgqCBf5QZXpZ6B2rg5ZLGhZvZ3GLYEgqTGzkdyY",
  "key19": "4aydFTKCNrjg6zuXBHMwVHexRgtxPBAt1YAzRfWxLtEQAoYZb5zNcMz4qRLNbxp3UwTTeTRuDsJEQzZHMGBxzTDB",
  "key20": "3TzN8QEphLnq7DrH93rQ869GdTjhRUNgE3BtGMJLTj8hjEdeEmx6dePcVcM8KV3WATqV9MUroATpH57NtqTszghD",
  "key21": "4BYkCRKRdamE9vJaj3aSRBpLrEqY1GzK2ByW56ydYB4MLqLoWFTvd2KwuDZgWXMykeJhnGk2GNW4quyP8ffiTjsz",
  "key22": "2V5uRytdCn9euEwfGu6Rx5RGejw7VBe82USxLRoxxeQ1xMbHPnu35nUm8R4pinQ5mMpHi3BPiFpZD1Rneesj6LMz",
  "key23": "35d8YcPvoixhmvYXEkc4qapHLNQg9HzbyD55RKPapDrVsRwsicnnxiQSYVS21bi74CEdSDWp8qnXNjWdpPLwCLSw",
  "key24": "Mwf2z18beTWRQSRwvZJEVVAMMqAcpjd4fPz882YVEAWHsLX8TXar2Q9TWWcHGZVN2BwF8ozGCG4yM9vy5gGRtMm",
  "key25": "4AnALV9qhuMBdtvrAad3hHShYeQAQ464iofzKtNF8mvFYLfUpjmGjL1gxPjvLoqqKs57PH39G6t5jkcGMPp3xeMq",
  "key26": "vk7AxaAMeGmXuPnmeHnfJDhgbM1b53QJtfqzodBjyemTbxZAfhWYe7GZ8hCqDoY2kpF9uFSoVw1Rp1ekACaJHXt",
  "key27": "5a17QYPj8NCRFU1FmQZyWTT5Udjr4WWJif3YJTi9n2YJqPXhjocdHwvRDHEk48A7QvAza8WaDLJwEA53ZtNWHaBp",
  "key28": "5j2VLPFDsy2cRZfm4MjheKvBwY9oxwc4F78LcdEHo4FW62wvKPqtkxyKbLQxPZusgZHm9bBDu6ePekiFirpHVTb4"
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
