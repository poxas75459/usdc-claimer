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
    "2f6uhDzminWEHMAHypx2T21EyrL6ydfWpcWDi865VtAKFnRzJuk6fjQ8nCYGRd7Nxugt7B4Gu6YFPj9iKuZkkDwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vUMGE59nD91LX9moBc3KQzUokB5uQ1mFSiTZ9ioSHvYwtqdqp8Qb6f5BxMpsqPy4RjzDvU7TrYXQ92DanUezwJC",
  "key1": "2m8L9f2fjQLNsw5p9QZMvZzC37Ympuf5DRU42HiFRJFRFuZTC9Y53JpwyzFN8gA26Pep3BgpXGunQngdJLT2ZwN2",
  "key2": "UUim39PygaFwkY3ZkAD75N8QqKhJGCPxtaqzcTLMH9N9RLvfUnRqgyL86z4sH25j8jTKzzkiGdCTec7XBN4cMgb",
  "key3": "3UqdhUR9gfAE6xsW59kKsCi6oYjmZM2Bpt2EPH8pCiKVH88Yz7sCyaCeh8eLoVs3NoWJCET5jV7g3VQTxPadRBgK",
  "key4": "3cb94XC2wP9rGH5hWk8wPWdFA4YdnU25bvvxsBw28GdFSNzi1pfT35vgMWE7nV2CVfoW63QEunMyiA4S33J6VwiD",
  "key5": "4SGYp5WefRHAtK8fV5G9qSbYNfCngpaCdiTqoBffbJGUPjS1siLSWjanDq99TqGHGpnGMaiXeD5crER1fmSepX3f",
  "key6": "2xd8yuBr2sEMHp1RNVRrTFctEXvgDAr4bEsGnLQRZB77y3i8Z1Bjy5GjKfcDpAz1epjxaMEcmqGeu4KFgq5ujX9a",
  "key7": "38LmTh3CTRsCykF4mEvBgqjBEZ7DpNcWMeBD3LuKAqH6Lp4LNXgLt1HcUBgpSVZzQuj8GwyycX8jg4cMyzbBnMFX",
  "key8": "5VPeGsEw6Zvs85jStQqwWbu6M9ArnCkBrY7RGgWZNwd4in45cVCzvHSuUz2ZESSVcXo5ncnTavbF86QHkaNkX3bg",
  "key9": "5trK4PXGzCipRb5mGYaLsrnDUiGx4YiNP5N6pCTpw7CToXueffstcxpyTFAD7t8cCvquf979PzfMk2iTPVHxrnCb",
  "key10": "2PjDE9NQNs7sCgRmVU9auCSXqmfcrgehYF9diBByKai6vTZUjkiRCJKL4HXxhF421Ac8vLUxZHXbWLy5mKF2mD3x",
  "key11": "3DxibPKkHt2j7swZXqqfhiep892qFmaRXwPEEX1CYSdFWaPfLFtoZsRcyT79gVQ1Mgkw7Atyctqz5QWTisDVPn4W",
  "key12": "33eStuxcKjJNBZLS9PiSuvWEm4jW9PFuHdTQSkDE1ChmR465ygQhxbTU4gRYNme2BzibPDbeNfg8JEVAeFczMifj",
  "key13": "4Ay3mginquKzMqjhibF5ApcfswBS46B8NGQpBg6rbU15g3tqpKe73dZUSmvMy55B2B78ybJ84RSxqAUSKsSpbLaz",
  "key14": "SuwoWBPBTSroxRQqPrFeQ6QxavZ4Y945ajngBidanFyRGrxBqpxabJdqCN2ZsApaA7Xacn3E9FvnkJJyDq83MMz",
  "key15": "32rCJGnRJtW1bebq6HAXhNaYwsKfCKCZSkHBZm9wiQvg8xqhdbk96sbqpJmM7s8gxD5ypvsRBUDkdRgFBoxmKGZH",
  "key16": "5HatircqznR5uzc5onHBKkVsCKVvQUMDjXP8iKaDegLypS7S5jwyumMyead5dNb5ZvhryXW5jNAHtD1XcMtHsMJn",
  "key17": "4ViqwG4555x3tdwQ57hoXB1b7DAScQYhRi2frJ5NnTBMxepvUcTN7LVrvj2oics11GJEExAwjh4yPNnYh2VMkSGF",
  "key18": "4ZV9USJKbpPv5nJMAqdYS8veHv4Qjs8vVMqfwLaUFwyomRYhxUUptFtvLHHrp9QLRYif6S25rMSvUst36SL1ZhVi",
  "key19": "Q6rB9Bvn9re1ibPnf1CVqnHG5TYsLv4ZA3bR99LXhHRC9uZUCUnSgLYtPLYD7iDmojQFzgLWH8ppwhpPCjP17az",
  "key20": "3iexZawhhuXgoLjbzQfLXkiAuudFcdqxQFd3tsoMF3nVYgjWtU3uxBfUkyPorswJeaiwRKWBp9MP3YCxp6RAf6w",
  "key21": "AEEL3vW2AGfWuPi9Gmx6M8HxiCuUiYeCX8ntzTHQhiQgZfoSmV15HFugcjjs6SJpgDubvy2uHM4L884D9tNj6Zm",
  "key22": "3YySSggVZ2iJXoCg9XmpvLUEpvMSafEk8MM4wpiQWeM2CaQGjEQmziYtwLE6wFMcKgG5ws1szeyEZ5LQfuCZQKhr",
  "key23": "dXbRuTeyBzMKPvkySMJ4ZSchLSJMV3GtLKjU8mEYPQ3tvsrPsyEMf5ERmak63f9zyGUSCEQAiZHqLafcQHg1LP9",
  "key24": "4etriGihipBcRWvKey84ouEJSdb5SV6U3zLcQnxKkqc5Bp3g5bQsV262zhHbqHyoYb4QSJbrucwefG8ctpw9oo48",
  "key25": "4yt2fi3nvUfRKfx7f5bJWvGFUxSzch7hnutQrHXngPW42n7LE7BEevDgTJVNERgWumGoBo1zhAHZgtHWf2nwsSMc",
  "key26": "ZAjhuZpY6WTRzfbfM27Xm59pGLaTp2VXzC5viDqfQP4ipZcsRfZXBJJJM35awLihi6uLVXZ5cM6PEJFLjddW8gL",
  "key27": "5JbMBgAPfGoks4gpGoLUqajMbJbYCiHsJArzkrK47PUwAkmzKLWpXG3q5EwHjf7NCNSaQQ5K8PpxLKiqEYtCEVnj",
  "key28": "vcxbLKEM5BTPXCCf6zo465Mp29zJptwirj96q8K5X9DcYtFfSyH3cEdKtd7J2UjCBGWT8fL8fRyqyS5RLX1ohyd",
  "key29": "4QNyNGKevykXCPFZJCHGAqkBchKXRZMVbKNS9b5rme4ZirodAiuRK3fTaECDPhfRDcFuq2GZ8K1sUPac19sXt4pz",
  "key30": "3GnAMs4a3szpHce5MfHQ315jCqqHhYE2cbiYtVtR2zsBdXAodfnVFTAm4aHQcrqZhFMBnfpiw9PJmx9gggya351R"
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
