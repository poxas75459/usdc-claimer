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
    "663fajsm1ccxcbiBYn7fyh7V9FRJx5Msr9e1mzavVdSNDLYXhFxoFDNghS3RmTm2NSPYoLLTuz9GQKWjD5qtKXUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ApRX2oKtw9SnuM4XH4Ty24Gg7PfC8NaXq78V37wKWLwdbcbq2TCM1w9c4MBT1cQyM5bsWf9cAcWr93ACChyLTmZ",
  "key1": "55Su1BWivNea9JsBvY3C6qsizRSXrYvLJrWYGKqVGRbYGABwiKuLpd11vQQYqMS1juBCGBMaiPhEdH1UpFfvv23u",
  "key2": "3B4EQCLkq5tpmso2g3P6ePENrmqZFSgVW7EiDjyPwgoZgLNAHdcS11nPLqfh7rTtSwexfeSjZY7AWvGEPN77vov6",
  "key3": "JMCAue6QX8U6rsoKrsLXBz54LaGcoSnzxujPR7C3QHixAhpBLUfpZdyj7sFnBfbpcFsunDpx1kuC6L18bGH25jB",
  "key4": "5bjZWo1wkZevqMors3nE2qj79WCkh8VBerWysWiuGbZDTSoB6Eaha2srxnGYc8eRQ1ExHkFyariozXoR3TGzXj3z",
  "key5": "35X3CKyMafmNVoaBM6Pw6PhbzK2XQGCqng9mF1U4ZPVFH2ub7sqE45NFkcuyq9g5dn5LQk9ecCGws29mpJBJeeEg",
  "key6": "4pGmJgELCDRXt2N1agrJp8aE9G2MD6NeQ3Yq3FReqZm4boK77HAagCBP3mhARHPHQk9BAg6iPyT3VWhLQCsFt8H6",
  "key7": "2WNjHmpaUt2QnpkufMLEs15y7zUWDrAWNeWD1zb9a7jyFuUhSnUz9LYqK2j6bm9Rqq8fvARn9L7GPqumxAGH4viv",
  "key8": "4gxLEv8sejASMDF5MAZnH6eRumign2Sap2ykD3o4jE2yXn4PhK7g7nZmgui2hpV2W2wsisAfq3EKrK1Bawv6DBRq",
  "key9": "gidvtpCMr5wq3UG51g3kj7CxXpHLWMSZQXgNTcYheasEAoMkwMgKjwyFJC3rogD23XZya3TKGMVKXssrDrc3M7p",
  "key10": "95QbJef6XxN2dAayr6m5BSG4pPoRG6zFGkVXTBjC6NuEXmhcr4FQSKr8HJsLrMrxKQBzv63uBNf2TizMyfsMKBF",
  "key11": "4wCLQbzmM18Rg5uHrT7x7URxy1TH2e9yS8Q5w9Pjg31TDuodBmhvnKqTygkwmEZfwMbN6CdJ5n27UzQtaSY2a8XA",
  "key12": "3uPPfoByphsrq9ZdXETWgxPWwUeJrzkrakq4NimDVMy9MuQsVBz1772XfJ8atqjeCz4DqFzJCudu2NeyjzWRCMgv",
  "key13": "4ooNZgiWjWxXKGhhb7MPZjEs41GhifKTzFiKLfxG3cR92xPynYsexJxxMKhw6DFJp9gpNTHEAkvGrZDrjM3vdUa5",
  "key14": "2816aC8GWiuMRNAXrDg7zPkQ4TNMVHH9YWHrxrAsZoAEZW74pbzGYabe2akcpswfJ79pZAGjLt89vu7dtTqGQAkF",
  "key15": "2BDcenncwYpuiENjg9qLnxbWpVpPwV6ZA1hNDvZCKBMpq64x3QAb8EoBnjprK6Q2h5WiAU7iMwHADJgiUQr9aTNr",
  "key16": "5NJPMykYSz9zPLMt9uE28xp5iYdGNjbD1YyvcESc5u7QDehy7zSj6CSyQ8TKDM4xznBBD6R2bG3bnKY2msQvHxqM",
  "key17": "4Lv6HG12E2XCEL2AT5heLQWvX8J7uH2szNZpGWYY7o5rsrUvr3DK6LYj2GjN9XM1Qzi2UEciwP8FuE6GQj1N3h74",
  "key18": "3MT5cgQ9ZUtooNQGjVxawMdX886ipLPvQz4J8YeAhEEkxRX264FNQsgVNqw7zCqc2vV8E1mBLm2LzjvWrFAnHJ16",
  "key19": "4C1PF7UjL4hNFvHn5UVnvLo7aKQF1S9R7teTQaCLmYcQ2omG4HnYHDhnTrf2qDXaSJ4JzEtyLAdnij8qdBZZz5iM",
  "key20": "2FEzkWXmLJCJtqQH42rbqznXJkGKYz2yrU3VzcHkdvCfgg1naLxZ2ZtFGF54DvN3Xkyc9hMnaJdt6QXnqraAN29L",
  "key21": "38Jo7x4BtWW3ytkbc2v1fpnqVRQu2XJshV7rYg2xPU7bBmuchDP9cQ3RLBeAwmvymbFz27C3p5yNDdbfKLTREiZK",
  "key22": "2geq2UgYTvxrY2VSzGTNk7TZspU2JkNbYFuH9n1DeDdvWtjqZZ6xQuscWZiPNMpCTDvH5C6DWmMkJs2vJYiYxnrq",
  "key23": "2p8JngvcZF23fK7wohf4T2wdLayDquvWaU33NwrMDrh7imWGv2ZqWigD9Vx7EZSSr7PLU37UTgsoYYWTXU1rLPMk",
  "key24": "3q7whunYAuHUb7j2DcgXdS4GKPnH8YYQcfxH2aKYGGTqxVCwoR4eX7sGk2pguxukiQH7Dh6dC2XrXg7eQFho6Tbw",
  "key25": "2M9cJPBqEg9zqdgo5Rmmx2TebovBk3LmhU7DdWgKkDB6QZeHdoPSduDvHtp3a3By7NKDuiSyEmCNssmyu5MSNdSD",
  "key26": "3Q8D7BDiWcibnHkv8vjWXB2iB2nf6npMxX72ezNPo1z6cpCoNc9ZsAq25wwGN1ZJgwJqajDLDHokPDRk8XcUqJ5m",
  "key27": "oYryd4s4cse1FpzDm7wpzUgCRJjixKAEM66nGZrfGZw5DAHH5zs84qRP873dQpmcUNxPCcPXFT9DijbEP3xWLTY",
  "key28": "3tjK62VXTU64m7A4SEvuAyyZ6UeXrNS33kmgHepGAicjWGiZVRJABbsVjYpgxaAj8DWUMqyDk8TjTbp5Zr5wVNJT",
  "key29": "4PGSyRT8EVrQi6s8CF2QKAWZVYv4sWDMUgVo6gjhxvveEj52W9162YzQLGT2GqdzgR2QL8SG7C3Pyxzr8xfqtQgy"
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
