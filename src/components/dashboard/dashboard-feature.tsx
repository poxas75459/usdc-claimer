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
    "2EpwvaMH5tR8e2hYMeftYHTuSEzYp3eVwEWRx8kQmLJByLperVbdiZrp8DhdF6ZCwLx2sSTWkF18o5W32z5u9V5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67JTMK8qxcec1iTsx7cL2d3P7UfgLLUwhKUF3Sw9WqGfXVcfSFteB1bV21wzGZ1vy3SSkLYLfT2j4GifKRYAN3gh",
  "key1": "46DKTzzYTyPCdKdMpotrMLhzUb5iQk2VBXH8wD9osn8XFJhv3w7Veo3TgPWBB1D7xTeR1jFEQ1VBojXZczribp8H",
  "key2": "3B57CQ44AhoRwuFVU7QFC7E3vVdCqR5n6Q1VYV4QDCKn4wTUWh81CxqBo4xwMcTUSpFdUbMpeFi5ApHonU4QPmMa",
  "key3": "5d7FDBpRnCfFGysMEDFJAT1Pqrb2AT7dZBbzFHgmwZWLQDsj67cqUVwuAnn5Wktv3LizRkEBHMixysuLZBo9gygX",
  "key4": "3ctdZKUb5P5yKJo6BzNtg139qWoPhKA9ANhYgkh6ccB9sX1sb8ytqeC2HjRwAkcNgXB6ST39pZpkhhQYTo2eFVrH",
  "key5": "3qpMiWJLTQtDNkBDsL3CCNsA5YMLsipbe5xxdKqBo7t2ezpGs4zeYNpJfyfDfP8QyZNQUXmXwAeNoFFL1JD8BNka",
  "key6": "4FXKQAcUdi7TLq8BH76wEqoccTPnij9UcnnyWrhXyaRLFtHWN6Rw3f5kz46iqiQbWMrMfKh6VNjpSaUaz88vUKTX",
  "key7": "3D25gf9ocrfAELeex5CgELyf9LmuiRy3G47xqQf4z7n65pBc77LuFjnDTwDuonJYYhUUBmWbp4p15NboWYDhxezR",
  "key8": "2dWD6RibWtarXdYSjVUz7fDgZRe6dSjAtH3NPhZqE8B42pXH8ecaxsLoPcSfmMAu8iwXYioR6aG1EkehcL72W4Qt",
  "key9": "5PEyUSBN5DecFzGvzsBtWa2gHQJFbszMq4YZxHdeL2ZPJJLbchAQ5FMTv5pgpT8DTPuY7ddCptE6Ca4b7UH71Jsv",
  "key10": "4UmwXFCoDm4qWMigoxA5BMgdBEU3tDUsYaCSkUagTernoneeXEcPdfUSg3e9kLMWmWvJyFGZt5BoK1aaBkb5nNy3",
  "key11": "5SCdjzk2CSMVE5usW1XzLFdZxh1nJXrjhJWoSZ4LbDevETkpDtjLSo2gihjMs2gRP8istLKGAueKEQAHig2mw2Nb",
  "key12": "2Pv3jPkchHewtvxNR1tsTYvxLXaWdLMnn69DHH3rWmFx8ohvMjuvzxGbtQA3gbYudVW1J915jknH6kMYy6YipEXm",
  "key13": "VUW3i2sACexjf3avQscj3V2ognkgB3ZVJDAKXPNbTFsephCL3x68Hnbqd5WufUjD3TB9QpFTyoUUZ53GeTBhM5i",
  "key14": "tLhQqNKv6W2dCj6pYNZ2VGiJUMU7Q8iDBoGeVEYNp1fWvDQ4VSXs89ejnHWXsknM9DmfGMQo9BBGuWziL5QY3tJ",
  "key15": "ous4wLVbg58Rh6KWBGHeehPSb85mY4U7qpWY4tJD5me3Koiwfn8nBZbZM1DJuTgYqxE3B9D2CK2wnq8Tvi6iS9k",
  "key16": "UMWkkDmNN3PYe6HMtxZiwjCKsxmYHjPoNhMGGM8JFao7CuumAdK221RZf867RnePqVrE2XoQXY9qfrSgqMzVGav",
  "key17": "5a3CoVoJiKhLdu3xQxxPVhXx4HLLNMLmKV7eY9Y1bRZKN6yPPDvNGsbg2JAbqbvfTtTsVDSQRCgcd2feKfCU1LeX",
  "key18": "FMQW7UvdUd6dLZJgFyQkGeUqGpiZ5HCAtAekN8DvnBqAApWzWsYTsVarP55MSUHWACDfWamJK8ByHjURBLfiQkf",
  "key19": "5urNumcbVRXpN9hDFtHV3PstP22e3KkvBaodp8jGwVztBDZemtRXJcStriQA3tvcvumNGhryxeaqC4t4N5zKrEta",
  "key20": "44u6dg3gnwvArV4Rbqr9Rfgf1autYxDftUbQBMHCa1wZZip76JWDMcHhp4zodrRq3JQvGaJxzYAnhCiP5RxMmoN6",
  "key21": "3TvtMsEAvt6zDAN22xAgMojgnoJzN5BLCHCSgpuz7RXTbUXek4mf1kbVfEKt2WnMTsnfVkBFyadHYw9neHYcNHq2",
  "key22": "2Vs4PyENMPKMtupgTgc8hSgH2gmNZhhaNif7c5rZQoSZe1CytJw2UKSoRpsBFbp8BFXYeaC2ct1WNE9SLseuJN2f",
  "key23": "2LYCanGYLJ4uZLtepT5ont8FDsfeTA12v2cofab3bhJh7HAA9xueFAFGURkkH4NGyhoHVYyPmg1eNn8xh3w1ACXp",
  "key24": "4YvNvMoLFoqi4i6Lge1RQfZvWwi6Av3PgNnfu45GMNjqqBUn5XbpWc3wC5Ng9q4AP4gjTjSkJgCCLCaLnK85p2J4",
  "key25": "42YjZbRUFzULVPfTF5ZRzY6YXksc5VkordY4gjpiVTSmCnh8wm6d6ULSqqwR8zk28voG8VkxJ99QqRLYMBdxpdZo",
  "key26": "3oZ1sDpSTh1wXfqq2QdtbYS4UYncsxaT7yYsSsUuaVok9FGAaVLx7QEdZ3GYp5Vn6M9ou9T9kKrSYwdbQF2DiQgp",
  "key27": "4vwMDxDwd6CDeKjULMu67NX2ipYuFLpYcMdT6M5qPqQbXZCWcwK1dPrhXha1fBVMervtdSuKyVcVPhhLrMVsLnkQ",
  "key28": "Av5bR4MbHM8XgxgztiPWcZhApW1iAWyXZjsNUs3R6qg3cqkexyYdmRQAv8DPgMuoTD4XxZMpqpBCUioocA47mbL",
  "key29": "2d3Hss7okXzQjojKsicUvRRm5r8NQvwd4S4PkrWbaN78ktCoLYvKzUVFcfYo5Uyp4g8sawLkcesJcA6mFEpDmEtQ",
  "key30": "4wdjRsHqyY4w95MFTmQ6zNX5C6xdNddvCg2veBZGbWpxe8C2oXmWLYGnnnD9qa8HFoR89iJxtA57HP2uug59gNJd",
  "key31": "53WuBZhi4dkLPBiBH2PWphcF9YPbmJUK6sWJFQRCVf7v4HVQuYqbMtcw4zPhKMQXD4DWzvkua1TbbCiK1JmmWex4",
  "key32": "bGXqyKUi9eCjTbMaTW1dag4FpK9uWFEpsqGJBX65dwGgvFjqzYEPJTA4B7ep9sFZ7rcQazSY6spFN2p4xbzm832",
  "key33": "QeVi3BSMXCN9bHTpHvfDYhPYoYAffrL43w43pTQRQWrohSMm47S28c8pHv5fQdWjGVboeX336Ehr7GkVGcbQceK",
  "key34": "ijdURN8XHRgtwVUj5o6UYEvxsnaMTRjRGAtvSCS7Z3xCgNLVv8eAYX9SmKPkwM8NL91kBjK1CREvSqPLmvozgNw",
  "key35": "AR6ZhT3Xyi4DjTvjbfpoLYF4yRF9ysUTg4ckynVcgLr3R4rccrdGYx9WfSSpW6Fw2gyaAe1TorVRvhmZiVQe4Nj",
  "key36": "ENEmHMLxjjADgbX6wFeyhLBhMCt8JwagW7wHnnKuKEP4zL5Jtmooq9p6ejNPwMJgx3w3837EUBFo992XQzMbfeB",
  "key37": "4HpSrpa1RqBV69p1NjGr83aAGWPGJEsEuvAbKT8UoNC5DjRqaPdeBdyh8jwZdG2P84TKhjkvDyztGKWBrWmkraME",
  "key38": "4Vh7kZkAdFdEbVFRrqJeWLjPwxD7GevAB6rdvqFEXnaRNTRQNa66U5iH222boUMCJNxxeszrMrYaZtviQKYuB3T5"
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
