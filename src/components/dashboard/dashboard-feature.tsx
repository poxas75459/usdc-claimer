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
    "3qBabwqiuUPbPL36gDDzNd1nTZMEyUgv6KryP5jGTwVmLNQ7Cg8SiKSE4HtxvJjV4aKPPx1dR1b393FM434PUd5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sV8zmSWwc2sxbGEXkhGfZGPTbg3rrk6PDg8ER8n6FQBpSp4e7mdqze7BKVVwV4SxTHNDvUeSDVgvKm9rkuwNWHj",
  "key1": "4ktfcPc7xsY8fkFYY8jJ4D2UiaCUQuhRK2mPMZaYQhXph27jXkonAT4UDZLuUQX3qwEUfmtWsKebNgAEFFGm8Ehp",
  "key2": "5SGXtY7GKxm36rSP55Y7LPSkpdgH7jaWG8AsHnTrmGYgsw1ZKa62fay3sczCPLE2DS28Ru92avK7dubXGxkcDrVb",
  "key3": "6648p5NAoRVLhg8YLwTUGvqAh4AqTxDTdFT9U5a4nVZ22Bfcsm6Q88xwpdzFfrNLwNUTQW3uhqdfaiJhhfJDh69i",
  "key4": "5KLdsJNGLk6kqLx5BGed8A1sN4f2xkmRGo1FUgyfQhLryHcHkSHDi6gqJuiRwctgymotgbyvenPQgjdasH3mQ9xN",
  "key5": "24Vt4ehnVA8FkdgYXL3ShSMyn12uqitCbzo8zdWVudAsywqVZ3eu1aPn9SDuHeMAG8PdxB66cELYpvTgcVGEiSi2",
  "key6": "5geZQVwW8cNN74P2mDLJuizsrXzscticG4jbCEboNhyQiB1BRdoqJjVmAeMXfffnZ4KNvQo1PsiXkYxc9264BaPP",
  "key7": "dU6FRPYVgDoN6JEkPh7HtHyUTNh76zBELm6g6yLcBDVfEuC1GUzNjvscKWU5VzWE2wc7qCgusCwzp7ZPmqpukzw",
  "key8": "tgatAvb7SZAQfwLe3kvGb4zBaBG8akDmFBtaWQpFhX9phimXZduHdLHhQ7UAFtPvpkYy7szKr9Y49Ettk6rgWQM",
  "key9": "Ss5hQKvQnXwsdVGWoZatGRwNsgxwXzveYzEvgufSntKoJyPDPfMd78Qn7ZqVgULRQ9aqcp4xBR5BR5RvyAHiJPW",
  "key10": "FWjqior5ZN9vTvSfzMPRmsNd1HRtCr5iUqQqi6YonFUCc4YWUHRZZgbwwTkfv9qbzGa5iWZt37kvKvphJYC3HNr",
  "key11": "2rHQ5uYEzXb9oAXKtnT6Jy9oJ7FzrmDaarLX9JpvFjFonBw41Sb6GfDBCa1ZazphLtqJDKAt1q1MdfmRhhLwRGxA",
  "key12": "5h6ik5szKmYpxHi8CbgRh9saB9CNfQt3GBAZwTysZW923FPyRX6ZNfaRxcyZkrfk1eDiQDHzXuX6qxuTYiw19HC6",
  "key13": "2W21HG8cbSpcx6BVsGjaWrsrHu1mq4iuAQig9YF9whdgpUUJ3Zvb5xDkcGbKpLHc7b99yf1j6PPi1ZNxmYY1Yg3a",
  "key14": "2FFa6pyD2WXAdFNWyJFWGPre98ZGckFRxv3FfXpcjXqTf1Wbvhg1Q8ryutqRYFcAUP21Y9RAxYRzuVhHZxQo3WDC",
  "key15": "Rowj1pQW7p6DyKEAG7PMqqDiYYh8zR8J8wS79g2gfQfG6Mwv9DUinXChJ3urR5AHpCchGk658AA6epVbgmTR9zq",
  "key16": "51kmGsCugHT7pCdkkepXBcKUAEPbKYKq4BzxWvQiV83noNWJgZqRR8PhAWP1mrYBQmYSB7K56ejoRyoLedfXnYm2",
  "key17": "3AM8btNAZU7uh9UumJzbRqHqv5EvLBULJi9euQJ1DnbWzoymPWd2nXLzNcHt4LeyEbyyF8tEbz6jB5W9nf2kWfnt",
  "key18": "579CcJrXVSW1saoUZtvrHzU3avbJkAf1mrB6X2HHG8F9A9qQG9qpXSw2SFLJA1u691c7rAu4taR5gL4cndpupLPA",
  "key19": "3kPXsVpe8zmv11CAYbEAQThcH6zuzjngCds69k6ahdiNvGpEVoGHcGY36bubpc28ud6ZivpyK7wzeuzRVimmT1b5",
  "key20": "5meCPofUUQE8u36hPVE7zjbdiXr3Zg4z3tuCKHSAbzrRbwpfccGEecnvR8Kn66eoVbG5322y8sueiPxsFpio2UaQ",
  "key21": "4wpYuUzpwMxAZvyiNExojVaWFHisHCNZR9szyRjE6qy3gG6G22DLmypsu2KrY4su2YugxEk4aDjuK5mmRvHnYxJo",
  "key22": "5c24KJee5jg3RPvrnYWuvM1hFGD9zPBGyc95VZ54eaaJKFiZmVqL2R9nRESzVhuo5zUsyht4UtA2HkjAc8KFzFZV",
  "key23": "2bM7dgWUWwLUhBxaYeJZpz7NcKC1DKkR2N1Qaosxy9tTaDtSCxi4zzVbCMf11FHVGDnNkEcrLd86WMxapCGq4p74",
  "key24": "TueDpCibpVrxxH7rMkAUx6UVD1DPtwq6Ecp5mTnJbMFcVhaLMpzje1VBgVSpLKbcUR7EByMa82njx5abLpcD6H3",
  "key25": "57qBc2bfHzgbQqaffRPuheajc1NDheqhpqy6wk3uvaiM72GNU76XNKtk91FCHGQGePF7qf1vPtbd7BZhUNUbo9Hv",
  "key26": "3WjsrccWVo194MupgUfYZu4RVLPr25DMVPkFJR1kfvbyeo8UqvnTs57jQCv11VcABzC93bkGSL5U8jybL6J982ix",
  "key27": "5XpG4RpGM7a2v1wuVj3zP2Tj84zPw6zsWt4fBxgZpcscfNTm315BdFghgyMiFR2DCypsVpEGJwGbhgaKaXTAHdjL",
  "key28": "eE1kJ6u7155E7txL7FA1Xq5u7qhjbJYBtE8fBdbvF1xQTNPcDELz7Yii5nVzau138N4UFpyFB7LGYtzgvGDqybY",
  "key29": "51kiDiSftFdiUBce6gRPCmX9zYJ5GkRCLgSGeBJBqc4obpCvUjbo9BgJs1b26hVvhFYHnqpdJTp3YdCrBgP8LZaD",
  "key30": "5oGcgEDeTnfoVaHsWDVUZTpESPjixMgPDEfneuJoBp4eboU3K4N7213S7waAA3f2T7Rf14vPUJaZ8mAPHteRdcma",
  "key31": "34T5PajfCtnABHiJ8Xcy5rgZpG5YM1qVUkPum2nSiNG7z7yd4UuLUmHJ8wi42eQzwas13Tnsy6TgfPBRaefCb7m4",
  "key32": "5nzWDurnTRFyn3Z1X2dmUt95w9aoi9YE2dk1LQcBgD2ZiXCq3fC6Tb7scj1Pf49662Cjo3snTbkJo1Pab4Ajf33q",
  "key33": "4w2aSnS1k7HM5rr2xL5qX4YWDU3xdePiW4zMZe2fgiR2EBpKNeKo38A3zuVSYgEydHSbHvEQvVNNScq2r3vNwriM",
  "key34": "QEFJ7a3gqeaZ9UAyQMktvZ9u1XxSGUHTAzBDLgTaq84NvwK4hiNmFvQpaZ7VkEU9wFJuDNVqJkdRSa2unwzPjus"
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
