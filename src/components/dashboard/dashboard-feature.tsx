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
    "4qtya4pjYtDXQbLtM5MsYku859TpNiCc8QHn7JHaAKeMVB9tpqGoSHgU2gpWhLwwekS2Zydbx8yxwwnqNvDM8zeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bjsjGAYm9PZTURJveWgpYbSTa7mWmkXxaR81oU1RLW4sB8hvSycCR6cZRooC7r4u6r9L8fQxDNcfcdNx2QkgkR7",
  "key1": "vzMey6zprFm6NQE2gH1JHreYPUjFbSezfdaUXfUqePhD7JzNhcPP1GAVNax8m73h35QLPynGZcLWwG9VLcUyDWP",
  "key2": "22X2mAFzXygLtwn8Nx6wpwgU2DpsrgB9FWRpVK3Yjno4RfLyUfW6FLj4cqWDrNaMB9CbXiW4kX6osNPhvj3EMCy1",
  "key3": "2wTrBfzXpj8gSxCXik9Xun3QUkKQaMvyELFdS3MGWmmhndJiRZxDX8DSDD2e3MM7ZB4e6Nd8gCvTuNjQapGzP4Ch",
  "key4": "sq6GcieFoWUfYwzXHzjrJ9G7mQXHi5npZAgpYaJ7RhHp9stsZ7ZasL4dpx9dT5mYcq4FxB6MCUx9sAshfjUQksE",
  "key5": "4VYC9VbJh9DVyrfwcsTesu6xLDrzR9qqSnWEJzmA6XrhnrVia1TjxM73LoAH2VgetngQuRPHvkcXEF9pRWcJakFi",
  "key6": "NbbxUY9YKVEAjuGbDfcQDprm4GB29vYJe2tEcqtqutwKwrECDxcJUCEpqSFx3ujYFisFZmYoDYBGygBCu8R4wZh",
  "key7": "58o2Y8EuPQJzm8eMH6nKuCzqVWDR4kXnuW2B34imkCi97Pwaq5ChGCY2VnmAm1sXvvpnhHq3iJmNkwaAVUTVczGt",
  "key8": "2ucqsWammw5fqZYZgXc9jS6u34Fpxq4r5mEXxtcSaR9qcBnUrAfHVyWFaUVeqRoYLFCEfUZVVDWFLvaW8jTSh6gm",
  "key9": "2RKUGkJtc8ffffUzqZHrQupZdVRsFpDsgmEKtzqVujiRr5ZbbyifqiHdrxhNFTNXghBbveH7fjgkTF1DisZxHPX8",
  "key10": "3EtGJVAu6ESi8NuWRqCN5k5yFmn7juUDeE4SzfJsf82tgw7bkq9YKkB3dhZiv55Njuittmexpf8XmBzbAViNfCit",
  "key11": "55H1DQBjg27qmFWmjbzmTpkZLfMhea2qbhaCVkaZNucLNYfUG4QYGc4W12KN9yjeJnKFnjH5xbSM4vXD1FBHoJFn",
  "key12": "5eWaPAcEHopoMsc6m7CVWVfuY4hpDeoDEeLjqS97d1xn6rY4oHZPvjmh6jnzBQAgBVHAyHz2EQqw7moFSsJUAPnF",
  "key13": "4oz6fnGrsU54ki98f7WnxxEi3S1nXhrokEfujmibgM7z6UtrgKHNn2zAf7fMPqYNpXU6UuGZWthmfwVDdbVACB17",
  "key14": "2YKYt1zSjFNHniKhMx7KrGwTmWWuuZUNm2ejaDycUBzQzVfMWip6i6gc9rcAgkQY2p12h6JkzjEAACc8eDHAkY1z",
  "key15": "2Suiuj2k35WUaWCN6nS923Viamu8qMs6S2SaVoaHCaNZdbusxTCF6sdhdSu1KTEDcoHViMHeHrT3ri9nuzUBbw7t",
  "key16": "4GyqsefP2fCaRga3qA2ArKHMUhbHwmaXCRdwYnDqFmN1QbXT5hQxtj6DtEMYgde3VUxM1RbNnQV3y1q2b9RYgmZy",
  "key17": "2ihs6tX2hYCHWqCxmKQ5McVhyUZ6Vi4xEa313CpYNeAGKJL3V3jPhTjBGjp4RoZ6GfVkbeHJqbCV4QoA68B2BrM2",
  "key18": "5xcDbkpCVkz92xokF2xyRZcFVDcDJiCD4YrSaF4s4Qom23wWkvttkjhUNwKawepAwgz3nqZRrJkn6yc5bQ62Q3zu",
  "key19": "2WXYwk6u7HXZV4qUG1x9ZPPcZLfWYSoKdxtSZGBAvdU5Eb8k3CcQCr67hmY4NtN74cK7rZxSTF1rwvaKmBy5DM3M",
  "key20": "3PP3cbkZJvUjFb92prB4BGhZnbxQEjVyHb1VC18izL4LNK5YtqSUYgEGRL2ZYfcX6Fyg1AwLY2FWTC2FN2fPBYZc",
  "key21": "3vuTrk4u46zNHL8LbBCjtia4dSvASvxf1bb1jg5swCNjvxpSScSZR1wk29xNn6roctVSyrc6WcaiMg3rmqtvk2r3",
  "key22": "3uGXBnfGPLZHVXBJSNsUn4e1jVFcxZ36NWieDmCD8qB43gpQgBC9UepVFRqJfYyrMDEmZcTxn5n44eCNCsWBotar",
  "key23": "M4U59wskQZussb3nbMr3SiG4xhdE7kTGk628jRQRt5zHbgwt1mrpxig38aedQBMCwe6jrBqbj82WBprQ2Q3k6t7",
  "key24": "2YgDTActHYP6M7cCPF1mxTcYhZGrkSKYqdgd8pDHapJ8QGk1tpmEfshhBAy1daZx4YU3puGKzDQ9j8K922M6Hhuj",
  "key25": "X7oUeXxVvqAXh2eFcyvwbPqixCBZvPAp4VnQ5feq7fZ1GVnejm63d1UviRUXmNxbgJRu8fPaxD8ojWuYhuTW4G4",
  "key26": "5ijUM8E9pB1Lrf7nX8CvtLhHv5nAEgE3bmvGrpPqHD9gWMZR5S4XHEhfqkZA6zkECZyUNGuvCQ7Nvn4burQn97v3",
  "key27": "4J3BZHYT6cnuYPXSKLJuq7aNjVBm5ugbzNU5A3SsYFdK6mZJqeY56sKmFzTchbfCZ6WRqFQXmPtgF5nTuTHX5w2G",
  "key28": "62UcqjvWcMnJko7K1WMwpVYeJyhayefS8xvt88FcBgU1nzWEuTsgTyYLEwbRxYziKeUmmWZLKpXSqtvoyvVaKcUB",
  "key29": "5xkB6ngYfyPyKj8z4MR62RTjcRgumyy24N9d799VhYe3unkvT1q275Um44o71RoK7UoRPwsCNgW9bhYZUqprbgDD",
  "key30": "4dg9zbS4mC1zA8tY6FDUUUWPFkCbyZSHMezqyNRUs2rjdxie1EAiS9vGna7jVJ8vvHp5vn64UVj4h7iduA3xzxJy",
  "key31": "35wgEwfqQahEautjJrkQpnUtm1nzvAZATrnPpEivLr4PJ8wBt9JLHyjEDrEyxmNdcHXTgUKdVd98mmH3iXzVGK8F",
  "key32": "jXwcM4Kx2r7tjtMAzFdBefe1NF8BNVSYym1DDYVMBdCtGo3s8gYCi9dP4LbuyWEqyJtDdyFVxoC3RD9PydPwjrm",
  "key33": "ujTpkqXZwuzGhcyHMgTyf9P4ZDh9cdynsDaMSa1qApMxidQXR4mcBeirZL6rERaU5ek6Gk6EuLQuoWs8PTWYKrb",
  "key34": "38ceXbaZnSyABecxz5Tw8L5pM1XpTCEi1CBUBZ559v2uAcBRUGjFwDjhYSxRDTpDo9uvQmKdG3C86NPcAxnHLfF8",
  "key35": "5m4Sx5m4dnAMhnRZtcAixieByLMopgamMK4V7w1Uwy1JZch3Yo732NScuoHH5qYZfECYZUnF8skoSVErhWDe4fRn",
  "key36": "hospKAeUSrj1G6ZUeYQNXVznfgojwJEYnADb6kbwUKgNT2dEC9oh2k3RTVhjDUnKH5dquMxGQ4SavzZ1GFcxZxx",
  "key37": "27EeR2NFLwdLV1gauy2nhfw7hs8GDLSvTJ5k9DRRfwxu1Va21Q248XBxwfp16WnRChXTxucDe2w7ucjhZVyu7svD"
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
