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
    "2Nz5difLGPrbhC9pXDodsV34dw1CCJpAzTPHMXmxhMg1pswwY7nvD4LftjDEGrUj9tCJSDSPZeY6Upn54PbmPepa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hv6TesM8ukBWxKUZiqXS8DLfGFvRsBiLoiqqBVMQkPMKZn4Puf5uZ7f2faZDiBXn6EeS5jPPpqJuCSm34atdjP",
  "key1": "4Ltr9qFDenpnF69SX16jbjhxMA3FudbGLm8cieQX5VZ7Ew26uQYyjb3Nt1SBLNvzVvnHZi8mCLD8pr6WtSAkkgFW",
  "key2": "2rtSNZe4BPTrrJPDx2AcAWWANKjP3m6ExGna2Lx7ntFoUe2RY3P8hvPj5j8mpN7NrfBW2EgAVpsQr1HTNLaRFcTz",
  "key3": "5xdTFoVjLjH5nG5qPccjVZhj8MdXA1TW48YYcDcBfEPJLpd6YVA7GhtL2i65ubRBgpD7NTMT3RYGMpKXhLe6Uhdv",
  "key4": "2yf6pac3ES11fPBA7Y5rFmw8YsMwb8V1Tw9ycGWhivyG4qybFxST9LXDF3d5KJPGjuXpxH3PCKKMMRKgCwrVDpW",
  "key5": "4DPjDerJXggsdDscrt2bqLogpktEyqiSH5dFWX17vbrJEWcK6zMmS4E8DHfBa8G1KJ8KAZJMj2tmUhCwiMyqH1dB",
  "key6": "2WWPYF7PGaeGdXXs6Jt11bW47Ruw6Ncd7n1kRpCWv5rtMyd6S7yqeXRKoMUKuWzMadBxR1y28S7U27LmrMVBo5Jm",
  "key7": "we4vm214xhzZiLLbVS7EZQPjZS6ZqFMkdFfNVgo8jsLDH5HVMHLVQxDUGfZ3A5vWLa2fhLsyqA349vy6q1xWtDY",
  "key8": "iqdpvKEWFfCboAC3SdAzYqQWZhAJdTcmb88DSKeRWkqoraf4qErXeoUqKnLVneShoTqPWgqhpmBVfD41FvSJCYW",
  "key9": "4FxoQUhtcEwgQZHFCqSuNvRKQ5M2CdLy9NXgmr5UUNm57E2uoT1LDMKyydAJSmQdo5b9qTQLeaLMqkzdrV2XbpG1",
  "key10": "5HhTAgXqiUnho7y748mndfcEeb2rVhdVdADHPXgpgwFuMA8agcXRMvPkmTeMyF1nZdan93nfoo5Ah2ZarPWbr2q9",
  "key11": "4cHCNQ1aNz9BY2eQSHuCN3rZPrPxCSwL42vsABddYPoa6F7akpBcZX1hp4ghrFD7gqGozdngr4dnj24njRj8WEjH",
  "key12": "4Lp3nMxjmhsBK831DTkBCF4wVQcQAE9kXegmTVR2vyXSZjsUS2CSp3K7tSNBGUDHWeiih16CLyjAYjWrN1RYCrbB",
  "key13": "5YZY6gqtVpWMxP4MGbeHJjQJM22ovvZkL3voNNdAUp8xTTRTi8Mv63DHzDybZsUwYVXBHwdwzYHBy6YWm4fgYADn",
  "key14": "2naCFDVnWfcMEVTThBxWNhfEu1e5WMVqZsump1TyE1tVwho6ef8cH98DKMyMUNM5BBvbT8EUhURzsAxj4nHkoqoq",
  "key15": "4aVoEfyHXTqfM3a1r5PzNuRc4xtfqMA35h6o6X1URY2wE7GQrY5Jf5psBwWUjH3KDrcEzqExfL4opnfpkWpGnZGw",
  "key16": "2EmujdfqKvGscJZvirKTGJctqj8K9oEZ3kP5bWcEW28Rw4CH9tUuurpDge5f8JHGtHQgVPrDTquk7b47NzFBaa7g",
  "key17": "FrWWdUALS36PYdXmZiDF2SXL3bqB2514eaMouYxHfVjahkkWjFhvUsoTcMhmy1QhPnpMzK9Vrj7Ve2KStyoXHA6",
  "key18": "5uTkrh8REGX3iobevyU8Vz5WTK1wjJtZrjbqwsRQDcxmv1GR3tPyU18uUsw55YHgXhmfnu3Lg3LYvzHQGdM4LXiz",
  "key19": "3rCCPt8aoDN5Qk2vL3kk4QtngsthzoXPhgdMQVJt1kfk2FgS9H1qTRsk21tWVKSszRiCTTwHctS7mck5BbaKSdbS",
  "key20": "3KePHFZjZTvcN8SN7cccFJLMmt2ussYFfVj9dZodGMZY9XW6u7VWNAB95wLNi7v2fcwUSc9UTK9h6jPdH3XBXwvD",
  "key21": "4Ygah9zmBveaQK7ceMP5GWJaQXfziV4sCCe7dmTEH2zgx6w5vwBu7UdBvSbNTHjFhHpcgSjpzeqGeBHkBackHqQT",
  "key22": "59WS5kvgLohLGVjMHVF7yayDQuo8RGGDm7V8Htccno6T4i4vh3eXPgeyKidqRS62VRmNGFMXaFMFdLJF7LDTRXjH",
  "key23": "t5F7g1QiieSZrHYepnk39XGKaULC8qCY9NvwjcaUNxBu8qk7fdF79v4qjnQ1tJ73CFsypLHbmdGG69aSERuYpB6",
  "key24": "4YpdNBuDbE4xFmWjJ1NBU3vZaArtUkhu9LXnKAh38eRJrGbqvd5wGhghwNHmWkUhXdjbgaBwX3thuVQ96Ja6obmF",
  "key25": "3V1ndPho217FzSdhUwrjJv5YjkCz8fN8HrT9wWBs4H1M5vR8DAdAu7VRdVk6KNC1F1CxK5dSz9vsqNPco6c3YLRX",
  "key26": "4ARzde3CPLU33f6WZChDhXkW6vuUJJ2oGYUsoS3DpgyhX9NGBSHkhvwYRrGEDxe7x8NF76myLFvHe5UGb46Pb7Ay",
  "key27": "3vV2eCNMgZg3hGG41ZsjTng7udg2ypKVkdAWZwWGPp3ELeBByEACBAN4HDCjJcEA6nFJbDSftVuzUQnoCeFUhAhT",
  "key28": "3MZW3qEkpDZVC7qMZmMcLFaWY95HbCormL6UhAa6pifUwo6cooVCPKBMzbrJnsDTmVGqLNL1A7Bc1Z2MYuikUejT"
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
