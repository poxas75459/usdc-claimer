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
    "41s1rTiMFynrrKMaqenF1iPkowChTGfAjh531o5H6qfFixsYFwEGmNCGyUXf2F8Bcm5HFnXWfzp4y2nZb8sSedvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UkzdDR6NjNVfvRxiB74TVhYF8VS24uGcSCh1rVVgrSytZTtKeoGpqnB5gBGJVhr9g83s7ruGGgqXkYCMVy6ehnA",
  "key1": "2rC3uNRM9nEfb3w3UKSZzY14x119CapPjsyuZaF8jot6ioNu5qgorb7tr9LAwSKmSoHGHw3BfTb5WakHHDgwCdAr",
  "key2": "49P459u6VfsDvGcf12UnnUKQKq9iwyqKHgiowLitYuVNusGSKK1kgmjXTjH66gV9dwosuhB8ZnFUruxFbPCF4oDy",
  "key3": "2wb6rP3W9abDs3Vp2AZ4YaPv9Fsw2hkcU3dYbp6E7Wv4c511vMgWbX1pH6kRjpdgbCUN9FCviYruqEBjcqhP5QUH",
  "key4": "4JarHNAGN8dZkEKmQZtguEqPpSzzShsGuoKrMHDhVTGjAD46yNsMQXHozGvn1s83GpQ3tbKFmS9gfh3ky9H2HJaL",
  "key5": "MWzHDBgEQXNULPmbjqq2X6x1MKGGo9LNCwxNCWQbj2Ntm1L2PBeaCmrVDMQfRZArSFqPj2ZvfBdFCAy1TWXHQTq",
  "key6": "5QCXZ76HsdrJrMXuxw9scexqg7SyrUkEiGTeBnpXUHhzsvL1Seoj4Sb2qRJaNpRGi4uYcpCS1LTKopqqW8ENmuKw",
  "key7": "4y535675x5snm9M84DtxCLpPLxfL5wHGFQipmxqLqceoxKQbsas291tTRkUWoUz4u3fELM1Kw5YYNRF3TAZP6wpM",
  "key8": "5qeqiU1q1K8NG7f1SXb7sfPvWerbU6WpusTXwuoVeCrEu9aCP1Y5KXgXzzHkHNqT2vqbKPPSnDLqjrgGPkB2ppWs",
  "key9": "4MVcKGaYPVnb8nU2ESpnzztqzuXaeq1nU8tLqkaDSmDE4s1m9eQNJ3Ez6rnLU37acGqav6wHG14ZSRsUqVmnV1hn",
  "key10": "279UfJhxDGtLNEaPwJKAXdzH8S9rs32W2ZzLbK8hbqBe59wCuzSiCNyGmJnNhptW9NXbKYrZm12WReMtDGFstbd6",
  "key11": "5mhzZX5bLNDKygim3EN7KvdXaYZLCuCerJCfMyJtTzXmHShcudpQotDRpWXGisZs1Rimb36wvv2bhwso1MvNV84m",
  "key12": "2vsHgAKh8VU92YLCkwmPWdQabcFcLo9dzMadV7XiHgrNCRvqQM7QuxTah1pBxhPonQxdBSPuvPnaCqHJcg1Qd3Xf",
  "key13": "5bPEwiNAimHckq6hsxcWpHHF4bfq6BxCBK6Fit5V1GydnPJm3AGEnLBvvotSzLnDbJmnDfAgRqgiQwba3wMwVMTD",
  "key14": "5MvJJWN8Boj9BPv3ys7REkz5FycqjdyNjMVUiuNFk5L1xCu8KEUzaFMswx341R1K3Rpuv5FEn6kXDAQKA4iKmfzC",
  "key15": "3aMFShePwaWkC28Nd5JSQ4xMLpMGshzekrR4B89997JF4DwgHe5teH2kXuEBWRTSV66e5JRTTFMBFwYevStPjHpg",
  "key16": "3Gedr5VD9SRK69r4ajJsAZjfPoobzLxezcVbCTQy4XBjnBTpWtAKKGYuS831yko6LruCGWDNdzLeK9KteSfnF9XP",
  "key17": "CKbj6UcatoYRGyPe2f8KisYPsuYcgZbWSyzaFmsMddAVnr6DB4zUY3dRAgyA1ATK4gNujStykGpghpzb2cVSdMa",
  "key18": "9WsaGRpiYh7NjvNySBv75PxtN2YurPYRRyCr3oqLAsLRMF5GP7nUv6cLi3En4zCdrmN2cPvgi7tA7T23jrfzZ9w",
  "key19": "nLTM7Pn6sDAGZvjQLQBSjwSHChmLv4fVeSKy8WHnrw5D3nadg3hZT468am9AG7cUeg6rdmPxWHwiFyPPZiWrDjt",
  "key20": "CpJYFqEccm6974E73RH7kQAwFV6HkDX9vc6st5NXgYKxUBMQmnaHyLMaq7RPoQ7MYc7SRwLwsv4uCXaLvHZKzT5",
  "key21": "3LHc7eKSe2AwQHTWtxL189ZxQ6a8cMK57JRnJ62cMw3AKaELEqfpvai3bMc71EFJDd5H2Fe1XJ4AQ21cxisx75Ef",
  "key22": "5HucqkpFSihhtnfFCY1CouHVkM9MTdWXNmtNq5uTRdWiQBwnBT54eTQZq8FB2P83PmBikk4TErSaKjXhR4KUgh6L",
  "key23": "398PkkArcDK1F5wSGWu8Lt9oKRSEu7gqQhz81vFxEWRPGCH9cSP2q5aPiPQT1MZNwZgei6iT5vgFduZBu1sUXdyL",
  "key24": "2tnaj3Yqe5nzVjbixqiN2tJXHkEMD7bC5sS5djNtnqCE18NGa1a6HBQ4voxGPW6HHSYHf43BWkGSWrPePfDigxnb",
  "key25": "4CJZXm4g3PF6dyUHawyHfwYbn2H41fkSe92wwAaBb6JBS1fQhpc53mNJnttfhjq6UjVpJU2A3hrthUyJfUpPCRj",
  "key26": "23uk9f86xkdDbmkUeutjSGwLk5fCMZd3ejwd21p2vWxLyaWGBDo1DJU11XqYoeRgAPpEKYqyK7qf5X5tmKvCweNQ",
  "key27": "GqYXDJ1kUuFJ6dcJsMY1rr6J25NVkRZ3avwSAcDNKwSXGE7ohqKtNXULB9QhzBsuPUH8VTL2z11hkz6ra9C73zR",
  "key28": "3whAkdzAdcysrcwrf3N1rtc8E4oqXxqLmkJ5faTp9Hpmpt27HEMMCeRNkaBQ1CDk4UiUqGYd17FugEH2x953yPPs",
  "key29": "5SySmtLgVKQeLRuka5fETaGpDWhD4vmghi3FjViZzAT4CAwHcSTFLFS4TyDzYGTmQRkzEy8h1RE2Er1LvdQH3eai",
  "key30": "4u5iqc53yKMBvTbovEYFk4BfpdSQqLWYz8e6MAeyYsbzJG494MVHdYtqfMsLgoS5XGbtYA35MVaXUXXZHhGgT22S",
  "key31": "tqGi3uUzaXM1DHAyNggppwf9bm8XZAM5uKBAPzoB3icq3Q68eVTj5uoezZTdznpAuM9Ta1iY6skjbc62mAEE76A",
  "key32": "4tc2WtUcdpRJb7qGEjVVm5Nc5cAQfxX84idf9c2pbRkJkcaHbseruwATfqS5aQJM6zieakcPZ5TijB8MchHUaU5p",
  "key33": "5s5x9KPsqVJgLm78TsHJhG1i7YtfNRFVCmp16isYjohPY5yY5b35oCQN7f9S57bN6x67YpnuEN96hg642p3Um1rk"
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
