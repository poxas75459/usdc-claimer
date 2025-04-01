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
    "4fgGW24pVmUid994drCSJKWtA9MoWH1ZBKqQYtaiV1aExZFjEpBtb7ZUq4hcjYqNkAuGNSSbRd4qm2nMeee62GGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F2H5ndyVHFkuJhs36sV1JQqgB2oCBcgGT5dy4Fm4s1s35xbdgUJNvfUREgsjZRRprW9SYPyk5MQvdoL8ZMiDKv7",
  "key1": "4JpvcrP8N47JXSkfj4G2Qnm1Sp9pxTKj6mRR8C3QiZWEVekTZjiTdaAvcHxrg8cuHue6n3S9WZBRLhxVX2mfmraK",
  "key2": "KgeEdWsbNPHwQSeJGn1oDYn5F2431xMmKWPWyABJRYjboMXqZfigVEQEZvV5WGExZmCfh2zsjQAzHLaS46YFEof",
  "key3": "32t8uv5r4PnZEYqnMHPMof5EmwFPhyidGFM1R5JNPzotzCLAzgjgYjciCqDz5whuKc4wHvjnBKJZsdgjrrXwYC5F",
  "key4": "2u9TezLh6Ke1RWXaahXLSmcPtikjDaduA7EwuDQtGmCU7BGzSUj9au3fi1WeD12jXu745F6tNCtnsF1docJu7u8z",
  "key5": "2hY8zLSnJiMKEHx9poEu7TJ91HK2WfjejALHxfCddCkn3ReSUmNYuMPeiZLSPppbveWUqMk2rNRmx4X7am7t8BAR",
  "key6": "ptfHsMsUe87fdpAwFHWfHH6sQ7Eg75Fq7uskBnheUiFnz8HDK8qom5FCL2oMGcwJasFQmwzs2gLsfj39cN9F8JM",
  "key7": "26KV5c3ebyhf6eUvdmUWCUJjn1cHcYTNoWx3mJXGA7xcMsDL9VAs2t4Hyipc3TZzxoEVMVU6JZFwWnvQbdGh8HQt",
  "key8": "5fANgBdgHFzHX5okZ2aLX7tgvEzEjq4deYEVYZx4D3DpG1PdYTaxJdDfMcEhNSga1SDybBPQD5pneoGvdHsL9LpA",
  "key9": "3eTeDr1zpgj4TFFz4xLyyWqSXvscEcqeaPDSwzJU9Ysf1FfRYYVqZmGMiB5eCCVK361inFSvqYRau1qydCLQrrDv",
  "key10": "63Pb6K1AKJbLKNPvoF23wVXrMCjBn9GXnFqQvxrGN9yXK2LDFyPoQ8C85vC39Ew2yFDEyUZqBDN592cLQ8JCZCt6",
  "key11": "iruLQp3bNS4EErkSGS3CZutCSpiXcK1R5xajyTcbvveJtNRMiGVxqRWkhR9Kssueo1WqNDWonXXP43WjHyXofPR",
  "key12": "5gD5H1ajKDXALac6dZmsUptnSw8zd5btNLp3k9GyErF3HnfCcE2t2CBeTBkxiYzhgZicLRz5KYmvgSneiAxSPAin",
  "key13": "4oEGjvoCmjVrhtmW66VBmCEDQLbPF23EMLSmfaeUnKeW7rvRzP1ejqHmSHjf8ehHcT1DpUeMGTksMQ89SJo2bif6",
  "key14": "RuJozWQTouDjwJC3X4GhcmD6kdxm5sdCyqwwb9d8394XhMTptFJoTPprwT4EDBKf6HHcYxThgd59w7LyksfJo7T",
  "key15": "4KQDHKSLQpDpYaTsfWNqUQcZY59sAYhKXrrVtpMQFQTM2ELnYyZJXiiJvaKQe3ofW4AfA7UBGCY4d3htAJbUk4Y",
  "key16": "5Y3fgB4mcwSqBhvuxprvdXR9BexdZcFDuCbqFWZvP29UcJoDsdvW7Lr4qWYJceF1YyKTiWuEQRotNMeRjs1UUtuH",
  "key17": "8BkhtAYJ6Dpkpxkd2so2gyJLCJ5f4kCdcGVzfczRG8kQhMuqnavFGc5NyRefrHL5viTjs27qoSKSks7BztfRDGs",
  "key18": "2PB4gJvLcUxQ6E7agXs2GW9Th5dKbdATMG7o5XT4u4PM6WDRVNRJaiCxbsMxFas5k2meejzj617GtNXbtzR3wCrZ",
  "key19": "iKV9dra24GbPLgrm6YtDLnicS24QPTZPW59QiGB4GYU8av2tdm51HF81C4GsuKDmDtXzHUvsJKcuirBbRqMsPcU",
  "key20": "21zGEeqC6oWd8ShpW3Ad9VYTyRd4syMkLrCmdXPVZsA84aH8bnGykbmXg6hDr8hxF7Ym2mHbpvpgsA38haPDdnLw",
  "key21": "57Gq4YRnevQoJ5jnwYh1wzvTTM98YPdix3DYL2tamth76nan9Wf4CnHBVcwPBcUQp7pkGRtxYiCzduFGdNHFtQ3U",
  "key22": "655N43YZUnNkosW6Ltbfrj68MEuwd3fo9MbT2fdhBawKvZi6ouLSGHhUPFzLbSigkrfqZtyPYaRQJgph1w56Vrh4",
  "key23": "4Gf3JEyZyrA4R91H7qxCQHTGF9rdQeCk5m17tfVSBvpRhNfsZVj4nTpjkhCrDGZg2LMTbWiwQeXvJnBYoEoUyHVW",
  "key24": "foBmsV1cYf9fqfzNkBiWBZkUuX29YJPKNCjzCePF1ZU4zvDATfShtLr1moXoAoEeMf9NU5x3gNMN3aeadYu78xP",
  "key25": "4GMqMpwbKUHriw868ZiuPmBYPeLDC3LMjZHLCJQJtDc73NmxM76rrHWxmZiUxnHaqKTXzNK66q9rZS3dtZmZhz7c",
  "key26": "4ujNsk46BpPvSQBLBa6ENFcfUWqCyUdBvdJ5yttRmAHVzVvtaxYtw4XWsEPJ9tRAbf1PNAHJjR9c1am1XkkRLUYt",
  "key27": "5RnSbvx3FzaF4APnBTsGf4nNfDxmQJnjERF3UcdbeHYpKmHLJbPwXfwfmnb9gw8jr9BGkR8qiz3wR6wWXHWVZ71w",
  "key28": "5FxjViZGYg5BRWoW7skcPURkWaoyfgDv9aDqefo98RdL8TdmZcZv1rzMGALc6FFos2K3bgukdGFz9vvuqJGk98GQ",
  "key29": "5poTWwF2f2pCk4JmzP8D7VLX6StR1vBSjUBtLNk6M5EhG1R1uFMe22KTssGFumRpmrdfvdLTsaNvKAub7LUjdivk",
  "key30": "5CVv5mYAQtTtPZDFDvnv5jMUV1AMuLA6YrN3gX4gRM3vQBF34LD3kKrxhzJKshgA2e1keqa8XxKvgNL2Udm25M6m",
  "key31": "3stS88gs7SLsJAfRLCGRK2F5dUYnbVm1izWfSctco2nuCLUzsJdDDnTBLWF54Ayazsc7AeunNUWX2Epw6724Qpvu"
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
