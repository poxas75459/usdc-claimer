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
    "5ETYiWe9WpLvQ1wMpVLuTfr5h1PdNmv46MRAMAiL9fhzH2FER15wbNiMLZAWAsXAM5Z7aaKVRLdzDfgcKBMFEfAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3283LhhtY2Mx9o2RfosJzpenuTFPiaF8wiykLvst5dRuAUmXwFMAEC5BfEyCrfFcsVCnj6qkEu9GYhvB8B21PuMY",
  "key1": "37Gh18Vr4M2RfkuN9sUv3jjVcn9yKUuBLQDrLS5bRthfAvzc5PMWL4oABT4jhCQZxEddrQguw6yEvPFFG6bMcGfm",
  "key2": "2qhLqRQAme8pB6jRx3jSKa7bZkZRpVkjEguLWbXBv6TtiPYUYNcZ1gh8Mv19ZcHCrXXoX2RG5xoijNAz7nTmLrra",
  "key3": "5tKgHu5e9FMsYrfHLBPGuodrofjxzXib91Ya7RPSYa437pv6X4BaTPFwCMrXGpPhnjVPTWrgWbkv6rTkHedU9nmX",
  "key4": "aBoPMeTK16xzoSqeBUaCe92bqDuHGVQnFwwX5omZazNfp335QoQ8vsqQBBAidjoZCpLskhUNu5mXjvUNvebX7wP",
  "key5": "ZMCTx5gbtVDhv4m86Jmc93NLV3EuoszTLoL3kYG4LHrMRD5eEiwgCgZewNqMM95qfgPhU65y8cWaVNKZGWQ1zRb",
  "key6": "BT4uTF6fQtCNbEjcUraeM2Hus2bs7hcyP8Ddi7Rc4jHqTF5w5zxejJeJcx4WfJgZfBnHCneJZBc5VawytW5VXNA",
  "key7": "3LB8VNa4tinEZybS15KPeNRB3tvGemb5mBZ6oKUUZZBiHb1be7WwnGMu2yKquw1YaSCqyMws5Mg1YYfV6tW2Ehp6",
  "key8": "5sLNsv7ufMSZVnEBxrHo7GBt6yRiFBrkjGuPzuDpvqTnTLCgdGnnyrvtNX7f61xswwBRaLfQHVdoXxC9tfPfnBZh",
  "key9": "2KirFpuUenFidLGa5UAai6RVQD4Q52wcGnqw6A6Ev9TPdwQ3e7cspCM6HNR924s4wYKi1XxtnTXKZdHUKtsJNzmz",
  "key10": "M2aBBHpQnbRssY2473kkBsTnBLQcZYm2ioCcYR9f37ML4LqykXPQmCTqnpJAXoE9tXxEYeBUvhwpDvagiecHiYV",
  "key11": "3XBCqsYjXDnN9zQYcErrjx7mHjq6LfYoz8HDfBketBqrgnezF1dJq4tF3kiBUHxr3jrqCD9ycrQzWdSB8FArUzG9",
  "key12": "VPjexEWamGjywuoa3DQFZMPumXmeF6C9F8kAmWmc6aMnvnVNsAnXAbWFSJcHGfaaDUjdaWNQiXc2JiLsJgNTh1h",
  "key13": "3fRDd2vEGKXiD94Qp1X1taXjGexvafki8LoR6jwcs1c6nHvKvBTFxqczqcqwzdBdsPbEC3gxTpaF48va83ZwBF8U",
  "key14": "3e8cPWJVbb6wAJvcqwysTGdb6x9NYWvkJkNdgezLwHjJM6XaGg6oSdHzQiHD1uZnD7YQEMhStA8XD4hgt8BKVevA",
  "key15": "49gWTSvC38c2dmHvSrjjt3tCQ73dkY2Nj8uJoeUrsDsVoZ2kXTT34cyrWpHdR584qACkTq6QeXcYTN9nuimrXT3N",
  "key16": "5KwhGWcpQjvfb3s2wvvJdMP29ozxMgqwYHKuhNgJ7SgsTLHiqmQCEZfdNriyrXLekxj7xS8zbJNoDoCy2ucxRwsd",
  "key17": "2skDWyNAcyEV8Nk6FSR4D8ujUCVSDoRhVmHRf1yGgRf3CexFdkYMMMuHLGPjfvnZqCxuUu9B81pJJ6MuQfNtWKVs",
  "key18": "4dp5bDwBWHU5etaVTfY4KEGP2otcideUeyCbsq59FHmVFpYeJoexxcxsyHnWvabZ9JRjYeDFQ2LWctvG4BRfxoRB",
  "key19": "zZZaLUbcAxBEzVU6GCQBeP2XKP1AdGNHvuG4MNhHrJs2MfMa4YxFGyQjzENuwvwJw6ne47rYghDJFkTNjwqKMNY",
  "key20": "58yoopaYQcdSQuoTFmhQMKNGVGCY4YYBvsCrT2z7jnDrNBqTz4PdZs2jD7risyxFXS4WrEaeaANiv87r7Bm8Egec",
  "key21": "2XbkxvcAThUuQoMhXqZnk6Ugky4vQCqkZUcZtVLbBwACW2gNUqVpc7wrMxxJSEFoRnhGste4qBUmLiG5SooU1bDY",
  "key22": "2WgqPc5V4JR1RDg2JUVD67wdmnfrR8iQzsXNSH2AmXoZ9ivKDHQ8XUebbKWjhJgcnR4HbTtJK8h4kCdoehQywxmu",
  "key23": "61gaxbJQMJPzfTDFe6SrYzdi3sSZFCe312CpbbY8VcHMK3LGeXWN3qfNVwdkVwxnELyE1n5SdFmy1FHfa3nL4RJC",
  "key24": "2FrWhzxmsJcuMMsxUP1DLnHj8kqonv2KpAGQXczBtc4gQHfmAjdjc3SPHR3KyqTKSBAujGZU13FWhDtbqaiYVRMj",
  "key25": "3SqqtEziFrnsdksyeqZz1r1pPom9b95bwgfwhcG3ERuGv8pRkgMPRMSryVeofzk98gKLZrCgY1HxxLUq2fLKyM49",
  "key26": "36gYxVRsAcbyA8mWpHcaeYfCnvMYHwwnuJJQSDEnxqz4hPKE5VaGyGYLgSEFqZYpKTtbqNey22uwafnuBjXNzteq",
  "key27": "4LfXFFjMqg7Q5LNtR8gRkXTq6Zd2PErQR4AwLjMZUYvwX3ameERxi7Y3axgrmhTRZP5XbgimBrAEkjs5cxeWdWAf",
  "key28": "5Pq7MKd2rzzcw47hpLcodEc1TAJM8Gaiz2Y9cqx4ixP7BCUhXmAfZrfQdJgRXCbNNBvfXUke9WZibda8mS7WyBKg",
  "key29": "3C9qpi4bgLbQu9c9D9wcj4up7V4NJgFJF1SVAJM3VeKcAc8i3CweRqB814u88tc4Nb6DtHnhwjfmnk2dMnvKogeP",
  "key30": "2nBuAVzoH2Z4epjcEst3uKmz21mKN5fDvxVW8F1i5Jk5gCeNETmSNryWfobXJcY2mau68tTn1qqwZH55RsDWdeY",
  "key31": "5UTdvsTiZN1TjkKiSXaybW5rL4d8bgYgErA22HMcNF7vBsB2oPY8gFQhn1eAC5Av6Am7zzPwnr9aEavWaRkdg21E",
  "key32": "5atcJYpdh66gMhhVBHnNRir4k9pqy2XrgZSFxuiB5EncqvKfswNTUL8nCMf5qmYPcyyC34WtJKom7WYsvRyxf7ka",
  "key33": "aM9M79dC5ovHCHdFSsorEAQuRKgHqqEPh4aao8s549T8yyz1YbAhDTfsp75jZLpksiV6rQfFSPAgwoTnDJ9154U",
  "key34": "3L3X4PW9NEXJeMqmMRfwZ6nPm6kWicwbgSTngfydJVtCr3E4qjVJbXBRX4eBvibNGsjF3xRxcRxPTDej738W9F93",
  "key35": "56NLqiKTVamtjS5cDsKQWn4FDxgtDbDaiBnGW89hTY5ogKjYFGHHsGnabZ7yhBCgn88XJcAdhwHBQ59QXBBNgwPB",
  "key36": "5hHr6RvUDgyFb1Dga8qJNqZzGnPXrwpA2Wn9fUUsW3GEuM7Pga86ztXckPW2Ryzdpq42xivM2iXUDqm8fGUknpjq"
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
