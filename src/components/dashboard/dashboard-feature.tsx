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
    "4Rf6BLuKL1FvUKyrPMX6G5EwtBfSe6i2mT7PdB7FmC4KTqaepnAA3mUaijEtB2DBCzPbqWuCeZ9zHVBHHG9Y6KV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NryxEt2zsSMC8uLXnEoFsMsXSEicFz2kPbhvpdZ1LAjka9ESBVprLiRwDJQ5Uvo8optP5JNejA5PcU1qzQvvxEv",
  "key1": "21eDnxqQnqf96nX6AZZo2e9A8shXDcQKL6ik5Nf6jRzn4WLdqEuCCxtrUahb9beJ1DX9R5qLvBZ8gsuog3BD1g8M",
  "key2": "5z5eXyUUVLeZc6PBWrLksuhaDPZLjTtBPRYqgc28hc3TdtUPtbULmZmYR4fWkyBkL1Hq4LFU8qJwPB7z7QzqZUMK",
  "key3": "5ADazfmk5KMAKF5Rh6aAgohg7MriqbfvdLd7yQ7z4DQcLYwLbq8zVGgH8tkrekKPWdNhfPiZwqr9FeA9ducgtC3f",
  "key4": "4nwHh1sGnW7fqV8xRagPHiQnPycHahieBobURsAcJtTDd62Y9o1R9Eg3XtwT5jmumfP84D4x2jVHCXztCeq1PARX",
  "key5": "5JhB77z5Moh94NVvGibDySnUgN4dbutgxM3AeXdnTunsdCEha9w2h7e5DzyihXhZUtiEquEZcSgP5wHZ79rrAibP",
  "key6": "pQXbG4wUD6htkrdrdWbkEFsk9JG6PkMW1WzMse7zQgu7cNqRDi2G7AgqrfychE7ny5hsPMmHb5L793kdvMd7Gah",
  "key7": "4y2i7p3CfRHn8TfxMzy8jbhEuoHTD75LCdBuBJPB4fHVmQWoFGWssnnrjLnabWu23jzdhL356WtD7bFPWFTf6TUH",
  "key8": "3do6PKmytQ6oSeaL2JemdjtjLRTr9zQtAwz24xewgmfTLi9CgioyxMbzM9bFPWwPXBwyGTZ2e6haHF2SJxiBbGPL",
  "key9": "65A51YMKuqfgarbCdP8MPxHt7F14rDEBJqfCSjRxs561TpsVjMijFcfkKa8WeAq3kS3A95LSqew793bKAiNRMyN5",
  "key10": "5SzJuDYkY3X3quqgv4cAyW37WCm8a6L8dSfyfuiUiJey81pSRJHRAZ3S57nrwU8N5AQuLdXL9nqzRWtwaqKgkkFK",
  "key11": "5hc851CKuwSacpSjeYDN4tZNFZonipmtskR8bUDhsjFqygnJ6JM8E6ZSTD6V9KAEHAp6qgKewuJdD9QQp5CtP9sc",
  "key12": "629aZUxbnjeRne5JmKuQM6vx5j97umauUsMA1ptsLwuH2biuChucGouG3cohahxNJmsBkak8xvjqjtA8Rq7fsgwv",
  "key13": "5aUd6Vm56MRepmdDVZwebSx79pUgAMw658wr7Na4BZTiJQhbovnVQ78rnCRWRcpagvnqaHpLDNkWfSvvFYJSnCkh",
  "key14": "3Bvey8eeDHxp1dbeZvDmnyAS9h1KtDRLCFMSveVzYN6z5CcwVcmJsd84gUR1LUdpaD7HfkBoQeH1UStQJTKb1uXg",
  "key15": "5rCorD5vdkR95wDDzhXyv7fEtRdL8CfGd1dYtKZg4vxLkK2dGUMd1mk1KLeQ77VACUXZDyT78RVWg1LwaRRkpQHA",
  "key16": "5oLFsVWbd7doekvz96tdS9yERsztvJj6j9TAZNHqyDToSkrkYdAA7jKC5ST1KWCHm38qvPV2AnMW1bvQ32Q84Yqq",
  "key17": "3ZLjKAujr1WJ3LaoQzW1dEJDwmd4b15hB1yd8xDFH1FEQaSszT6pZx9KwebZwCV9LojMi2YHJXneieXQvwZWDcsQ",
  "key18": "282Gd3WLnQp1y2BuDchH4xY2vE1BKqhdmctGPNg89fvRTyoBWY7q4cJKGAzKqHnRsBdvZGc9LdB2hVnMoWSJvFrq",
  "key19": "3m6RRGLxW9bgvpfBCMDwW8N9Li2zZ6CVteopXgjb6kfy8wRx871rgoTynpvoyvC4F4TZzpXDgrut7BNYLMMjiW3V",
  "key20": "628rath9oWHAGujTnHwTad3DSHwbvpkoMxV7GVgt46DemMNyDuLyd41QpNpnY3wpEZN2x3SjkLcy7U2GprNinx1e",
  "key21": "4STYyS85XdvLAEcKeCSoAwSZrho8FpspF8oG6ALNMkS86HxFWQWM3xBFSXc22i88qi1aKSLaqHcTBLnvoPiyDKXB",
  "key22": "35vYv7r4UKkhc6nJ3BXGmXpwZZnEJ8FV5uwPw1ecAkoz2wF7iY97sNvdzRqrPwqs5b15bTJjBpbsNS6y3Sy2nrAj",
  "key23": "z3wZhbXtPi4TKRFAFfV8JUFQEGUGvp1eaJzd7UVJkEHAis6FPUdPXZhZjV3xp1gk3Lvfh5FkBzK7MeZbPigSjB8",
  "key24": "h4MKPPpMYX8BDkPUtU3CLrFinAmMk88NYV46dXg8YDPxtk9qAXE4zntvNd3rCx5HhyxxSpXJN87jcAok7Eu2CVw",
  "key25": "2aHFeT8FP955LufdKbXhey2wSB8d88QKGvSKZc4PgNHYVYNeFatyrvQ5wgB8JByziptebyCLaoeN5omVczGo9cwf",
  "key26": "2CSjBeP819WWoXMPUtoeui2R3ccwHMSbuqXebey4LntmzVo2UJATt3CWuZnt3aebSdgjxhdZVcKwt1WYFfgD3sFr",
  "key27": "5zFThSy1cfNXMzvVFTFdSwRpzHd1HNNkkM5oW6877xMXskrELMFXXNLiJpV7iaoFqfnEe31u2q1dGnjuHDUnS18V",
  "key28": "ENaHeZ1J4PYUJQ1Mj4Vziknb1ZBzVRLAVfJtfJx7MHi72MUe8aR3DwNba18sMdeQuy5ZPxBM4A8GU5qyVjAEucK"
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
