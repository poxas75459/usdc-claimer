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
    "v13V8VV2Hg1q8YvfomSKAwQchyZSjobWsyXm9BhcU2jGPCQ1LManxbaBqAHQHRuupqsacfRQtxoGrLW95tAg6Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rf7XMmfPvGkMghhF68PKxEJ6ccrBQA3qJWUTDQHYXZndjkfofn2zPGANisL55WimD4J7MaqN3tCPtCRUurktAVm",
  "key1": "Vrv4vE2NbrvvRhFsb2YWnnkwKoQBeQGMHTdDVQCb6JFZqRdZXA7M75MBPAPUH6eY3kqEzrV5XCRxhFipuFhRBpX",
  "key2": "2rHVzGiWxxmn8j739QKc1cLAik7kofYQgKrt3UtpyeNShQn69U8ec1kRJX9VzaGByneoajjBzfJX6cuCfHkqyLkR",
  "key3": "3goY6NMXCuUxfBUcAqG6h4yeKG1me3sKc6vfJGbWUa4omPiShrFzy5bhDUHGEV3DxJdUQWPAkegPu8EKsL8CbzQJ",
  "key4": "3MVXKYPUfhMvKhT76nuifFGHmrRDREMpnfTWorGoGJkDwY54ja7ELF598TvFLy8wutSUfqf1oQSWecQZ7pvL9swQ",
  "key5": "5yrL1cnN9a5NA7Zv6cYgfSQxH6rDvLdRwWgJqPUz1sEvrUMuvoKDBosiuPA2qs36ipREzN4gGrX4dQwassvbodmG",
  "key6": "43JpK8Rd5EoaRR51X9rYucqeNjSyc7rfQNA767LD4CnrsLwyAVMCQCTuZofhzeqw9jK8Zp8amMwgXYsnjZEMR2ab",
  "key7": "4YCPYQN64rHsThjWQyxiuCZhzCRcCcetqv3PegNZe51hBHuhK59ibqjX869JANvhMs21K7xTonV7mCXNMCYWbmVC",
  "key8": "pKACggajJctjsk7maB3kSW9RuDuVQKD43i6XiM6GXPxKyXPGSe7pAsq5G9NFZpiUvL4LMcZLDf6zuuD2Z6B1krj",
  "key9": "5evL6Gksjo2CWdJxvCD6oBYFvK8r7FdtxPEtoouvY3GDKj95EdZbnF9yR2qMTs77UCEUxB8X1LrQajyDxXCKCt2k",
  "key10": "4uQcqDwFkiJqerRathLp97BJtB1JAwR1mFLp8RamZP25HA946S6Ga2MRpLnEHujCX2RQTYFSPpYrpjdRcsRtDLHf",
  "key11": "epJ9aaqfSyPYaK32cQg47jKchBe4BDLTBgtCCcWKvNGWzooESUTBbKCHWPZpc5qnFZcHABBtt2hKxte8aNTtgNe",
  "key12": "5jnSR5GeJRNiAm1gAqvqhWZUdvzh8aj9GBgYRv4VyLtauLN843kYXYXs7vbRC2E2Q9BSFvLVZN7drHXkdnUhgjrm",
  "key13": "2mQSBLakNqMy4wcXfA9jeXAQa1fc4kGUhmoSzUx7H8KhGsnxhC4nAtXU19PJrwcVH3aDAqBjtNQrfG3Hc6CP9jM8",
  "key14": "5Yg5nwFp9ENmxnXtdYuCvxBzfuy7hNwQcfr3otu6xXXQdYeJNYQDwD1g9e1vg2mqVEYhXsZZU8LJFM3xC7zZbgLb",
  "key15": "97YvHBPXe1GZUiQE1iBjHjkUqZWaP3TxBbFbwn35X13NbCPKx3mFu2mtTFMUBeYgkkkNVGtUTTpM5BqSEVUufn8",
  "key16": "57fHU1MLyxRkFQsm477jBY2ZNYThqJdM4H2D3mc8NggotQr4fvidaMSu9VLXzMQ5KATBSSh1B4k3wsG1NDZS1xA3",
  "key17": "3ENAznCAdDaWKvm1GF8x1e7u2bW7QkNXM3cmDZtkwV87pXkcDML84zLoRtD3qTNDRCedYyPWrZPitMq8g1MEVRzj",
  "key18": "2M7vpP5R7ARs2LYXwoHAdM4h9fgTJAMKijVMUW5zPWaVTHrPAQkenRtPQFexHdDTEaDcACb3QXvXdiki4Apa42jW",
  "key19": "ULNs4Z9iawt8JWhhSiAVKgdDxpEEe8NrtQR919AiMcxS2Srk386vhsm2kuRobWr7t89UYibmajVaBmfn2jsW7Em",
  "key20": "43F3YAkkPBQb6ZQkSzmjp81ztBKpqVSWoiHLqvYXNRR3qebyiwKKw7jbqPRsqG4CCdN3h6odth1pBGjVaC6Wr5QW",
  "key21": "3odkE41UAf8WSNDwoFB9ZxqTAADG7TM1YzKaYbqmGChK9MXEFTusbY8PV2xjJSfRHShwUN6NrHhbYY6hG6MeNvpW",
  "key22": "4E883Tk6quYBLSJyG4ysM7YUDxNp3GrVGoM4b2bv9RjEiTd6V8oKm38F57Hgf6oXRLfaFF9Tbdkp4BtokzWonVZz",
  "key23": "4ypfCE7eq6kMJFEm3jqHEohv4hD7x8a5tqdMCCXETiWvb3GTZ6RumxLvFD4ZFsAUoajxpCKmhEfLXtcCSNqrWaec",
  "key24": "4n334ykcsomid2YY9Ti9CJWJQVrNFEuYBvKiRaaMyzLJJeCoQyRXfXeqQsY7KpxmT8c4nLvXgCcyTK9QaZjKwe1x",
  "key25": "3JXEqZvMArU9mELDzU99ceEDeVzxuy6ehNF89xtLgwZataM4Pk7hWDm4juiwsXgxia67CgCtAXvoJ6YGnSbepYzm",
  "key26": "5d7nAAjPi98zJ9BcZEwMswkTnYH6fbsYxwZPN5BpWH9ZzCULBsu673evJv4HUmDz51fBhdb9gwXS6GwncVWR15nj",
  "key27": "pdjDL8Vin58ihBX8HtjruCmciAixjJYzUxDLS79hUDWMvzikmB4mkML2shKQNaVkG4hfFBctJkvUjLXY3nhUy5H",
  "key28": "2bzev5tq7G2eYcVSZwrBwQVQefh4bZuxrFyc4GumVA7mEbnfY1gPxeg2c2NGv9UZq2GinUZDB3cw74qsDF3BREGe",
  "key29": "5Rk9xxFDDv3tSddkYBziPZEftqAogXRW6mr3aPFxiVkyKuYr9cfoBPVGJHqh24sQADJ6LVvf6Qrn5Yn7EEG4fyJE",
  "key30": "58K82BwvD76fQ3w6ptZMXYjJsgrSpvy8CUNuourNAdgy1KTivK2YKQpkHov8q1m8a1H7R7VGL5r1YYqZoNYwWtpE",
  "key31": "Z1TgykQEUdJea5ZKvfPjJrk6jJ91U4ocebLaJ4gbSiNaYWmjjviYt4AFGVhc4yd3Jfaz4BXrYqoofhbizR7Pm8j",
  "key32": "4BktDanj4h5aLhRpvQW2VsKmctnDdfQfpQQG2JKCdThMBQa5TZUagSnY3Th8YeQRXmzBVbZfPDCjAdUQYs3Hc7yK",
  "key33": "5K2e74jAqDqAri1hk3kQbzp2XRuEyHfhX5aQ1aPwGMfAm5sQNQ2Zg2yNjGNfKMW4RTSW3GfXN13xPMXmtA4K9Hfd",
  "key34": "539VL93LR4Srm5cbzUB2NjWNJtiG1QvpSXEhuSyjPD4pHVeqifyDEUkiYQZjWrfBKtohiiRe2Awt6HwQGRriQR6S",
  "key35": "4gZseCggPkbzaZ2fVUAkMtxQ1QrYEkzxWmb8pjqwzAnCFKbzjWXqHPQtJCoKPNrXkeU4Qx56PTarGqX3qLfX6EHw",
  "key36": "N3StvPYqsZQDVx6UYpYs4mJVHrBc7CXnwwjqjD5j56qxsHrDyhR99zmnkeYi572U41R4X3bfyy8h9TotTk2dFNa"
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
