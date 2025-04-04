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
    "3PBngbx9GiCZ1YKMy4YGjH4y8gVhXZEDXTekYzEZ36Pjda3eCibNfwxofxUmvQ6vmbETsoSWB8JHeFdrBKTcNACZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tMEDBkjkELRQ8HozNQmYVdEVZKyNV6EHPy3RbmSuRw7qe9mHedbqAW9EVhqVF5KTFSJxiuRCtyKz3V2V3Pp8R97",
  "key1": "65XGjwkC2rxAaXxLj25ZZQEtNYHehw5GZ2DrAofpekWqxszG8ANLthdPF8dF4CoawMZ5STNbtccuA3tA2UQEKc3w",
  "key2": "4X9RYtuKj4xYJ2wQNdsw2k5oQzRN31P2hxQQeGe8SiMhYVAUNtxZBJH3N1Kc3NzWhAhdQASKasnaMEmfEKhV14Pg",
  "key3": "HRohabgE4UQEFs2iZM1E5jrT4aGvGvQrxRLK3nHYKa9E88c5688K1exiMZC4jQv5kVRrzxnP2zV9VF6Mou4QMib",
  "key4": "5We1pG6oAXGE8zHwPF66xfF8PBMXRvAnhvXBgZNR41CjsCUptH9E4sjzuVBEYEVhs4bd5qMjMJ84XGiVMjHaENVX",
  "key5": "2wBfsVc8ZPDMsUpadNa8py9becK9MKN1TNdELCJ1gmAj1JcmcJGkx5dVaWBy8rhrRD4rCUbJtRAWpw3znZWxRZnY",
  "key6": "4jHPuSyQBz7ip1zQp786943WMHfHzaNdMBoj9GLAd1CLpmxuuK5Tt2eDUEZJsarMBZvworRFzw8MbQMDXZk7nDTH",
  "key7": "29Nt8PMjhhHqsDLSmZS6BVhEc8YsTrVCv1Pvby26rtD1MwXdbc5An9n91bW5eo5hrFSFpjYAgWkqio3aXB9ZejAj",
  "key8": "D6SJCz2i9f7qyUsPLQJ4giqDM1TDwLtHH41HAXAh5mRxYyQc7wy3BYLN6tqtfhbDeKDk5Dh1fJdUC2BnbVPuxKe",
  "key9": "5NxKAiMTAgMVJffPF69c32iKcBQaJqZSa2DRLhfdWqdErXMBRVDMjhCHBuVXQ3Sda3WE1DZBVvJ977vVqFuNNEiX",
  "key10": "5PWpaw9bFThdRwWgCKSbV2SvH5QtPCWRb2fiva684TztfqvwGpGWnkU2XpoTSBFKL6e8qHfN5u2c5tQ3NYntT1pH",
  "key11": "5GcuUygjaa4DevEC1AZQ7TM8sV6fP2bFEfP1fGDXc5V9axMbJWYdsV6FPkxQwRdNMRz6WXywJEhQK8PbnNA3k4pg",
  "key12": "5MHcqxiJ78gjJtbnpWKKhAsLj5SdjiWQgzh5uYbpJLNsfCqxXYenCpMnqX2pQTGoxpTUiHUNDQTCrNcoCc1x2STe",
  "key13": "CiTE3mKAKbiFLHEsV3F9Dsntca19BGHdjCPAUvgztXG3xMtiFwvsbBeEM6FiGrAqEf31uvq4PZ68zNgwtqDhKqC",
  "key14": "56hgbFgZ4qTWhHNxXqPYTtV41vnibfDYosDZ2aHaNTSa7wx9CETcp51tVxYf1aLJKLJkUJ1ZwsdikxiUqVF3CqqF",
  "key15": "64b9Jt1ndMtDUaGuAcLkwq8SrW5mResFKViq8Apbx1NgYN5o9AZPte8YVuGNXDpV7aA1UokhqVgAaifX5krqoqPN",
  "key16": "4ij6iPYdTK4jo6fwMV2yvKFeU8Ma5BhJADf8RNpyi8gpYRCTncE3gdx81t5gNcjP1xjQuCYyU5ZEVV1eSvRQ7uZA",
  "key17": "MVd5wh1e77TrPwJZtuPaTRCviaJ4KbAFsFudfEPXCCf2SmsZrWqT9TYfwwqPvbnWbpfN6qnReHKMvFfVhBD9DQw",
  "key18": "3Brm4UqbtdnXexQAsTYNa9eZJePTmoTMDWN2cYtKxBBGMwFzcpfcihkzTABp1NGCosQZZJ8Cs4djHw2rHDTKse3S",
  "key19": "3cpBVqxz5U2n7SgT7yHvCJ7UmR2R4mJ5wED9ezn3gXrVFVsLmXdckvh2khEiZNdK9KzPVtBkWisQGrQeSPwXgEuz",
  "key20": "39SgPfXqPFktbCDhuiEUBf3UbJme7x5cRw1U9ap8tp5GEjAUd7ZzfnGckLr7JqUukmVsHe3PH9aMFS4LWrTsCxaQ",
  "key21": "f18KNNv7z4cXJSYV1KNc9AjKSun4krvj1JX49oYay1yRsecjhazpe4311D3z4sNABpYaVR68mmzkEsFV7k34jBc",
  "key22": "ssoHb4m33Zd63J1NjdKBkSB6VDZMMHF1Uko9L8ZnAFV5LhHDRnaa7pJwSaHUHCtkYCufpRbUVHQkHarhvTCFD6F",
  "key23": "VPJV9B4saXj7W6bcBnYkkDHiAqCWp5WuhHibW5Mq548Rjubct8MLi2sYubKAdoeN26LHJZPM2nnErg6eWqBAkxS",
  "key24": "58cViRV6DMNRrMiWWKurnQhGgQEfPce4spUpxZpERt2ParH2XLsACJCudKWrxdWGB1N23b2HeHyBkufsoiuscept",
  "key25": "4Wa6NgpKAwayHcuX3TNAFK2B6qMuCRnuaDkJHLCkpox8T4CnqwQXuUwpe62YQTqmB3TLLzk8GRMZojyTKzGAaTtq",
  "key26": "5duM28CQB4cpNXrHbDhEEr4Y3zdiBfunvwH5cgLYQWWu1XxqHSzXsDVDJhBEfUQtGmue5m6GmLNn2ruwEBS3vPsp",
  "key27": "3BnLLCGkQ32zN73WS73icpzmoqBhchh7Ctp5LScdUQbXpvu9Tf1YWBQTwzi3qDe6T9XCHanmuZmd6GQkPPCNmiap",
  "key28": "21ouHFSM8KiiWHtVZyc8smnjR7Bx8yX7X5gEBz8EbERSPDR3DA4txPiWu96hThBWNTvzLHSZRMbxDKnYErKmETnz",
  "key29": "4TJv1BsKzq9SEFaxrvEoyyNRU9dT7LFAB81FfXZkQMYdbdDBFLcT3EqAMyBzYanZPWjkgFKGX7jkGvZ3YjiigCn5",
  "key30": "wUCikoDFnGfdvxyqxP94ovGivKbwNyNPVKDqV62ZkSrLy5gdgD6vT7bCQnS1ctMyd3C6m8dbogVVhR9k5Cn53aU",
  "key31": "4phKkyEjPUt1Ab7HAxAFZjsd3BH572ASP14y2o1DZfmuia8j19PbN5qkZdSdwKBy8iuzV5AtUJSPmxCmRQkp7BNg",
  "key32": "2daVhj7uXdhfQoAhHexWGf1SD7dTfBFYUbR8L5vhCmKpc7jpUkREfFNfhqb6uvuXXKKF1LJbdB7Kv2pZg9Jii4gW",
  "key33": "6cYCfHmUQNxAxJfV46TrViwyHCh4bQ6RHFyouYbRvjzt9WSKtTSinpYjmcu2x3qSR6Gt5xsisxrFxpjg6X9ybdc",
  "key34": "4t77JbqRqhkuLKieqwJ5KPDGH7sMg7Pnxy4xGYZ7TXWLvgQ6v4sw5nvQm61rF7x9akTpharfC4ZMTCyNhXh7QQ8T",
  "key35": "5WPRMURhriguEiyVqiL3JZUjmRe2v2P6FGvmeCxTb8utFnRhFvrdFBu3VQr4SrNab2wHJnzgvvjL2o6vvXspfNQJ"
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
