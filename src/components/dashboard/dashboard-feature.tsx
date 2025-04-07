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
    "66vtjS9x92PgsgUUrnR82JqYSVqMj8wj6FfpxuG2riM9yfzN58nT3J6m9oCvNsLEArLWaTzqsESXZMmnNAcFPfKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "239Ty58GspKjKoJLM9ndbASaYB69qjrpbeLr28GrU8Meh9d89TQKmzTbQZQUMK7Y6kKUtJGmXBMR1QBFYxnFYkRp",
  "key1": "3eRBZSt9xv53zQCi4UiXp4DVXipHhd2e3yPYqj3E3NzXDMohEG5gsskdXqGeATcfLfCwrFXJuwznTSkAz6nWGLRX",
  "key2": "3nFVS7bX76t7Fiqck3ZNDdWDVLE8RUhpLGxBWSe5eG93Cd1Gk13QT6NHgugzSJYEGLmxTtjwtqrggcP1wN6KaY4L",
  "key3": "3RcAbfspBVfJ6mAjMAZyGC3SiLYQvtGpo1cEWCcNiKuwtfxiVeMi3AzX7mYrDyJ72GsoW95Fv2uFsLf8M845rLpA",
  "key4": "2fjBpPxCNNoJRhUygHP2fFxUQADUnCVomsks6B1dc8LNqur7SnVCgQpjbthE1ZDmtMhb2ZY3NCr7mSADAY1cgKRx",
  "key5": "4Qo1A8PsQaBPMXLanQ3twf3ib5s9harnMnmHSyRCWF8Hvbyh6BHFmiwfgvtQZNgGS4HWZv6LnPFL9iFuK3zHWxGz",
  "key6": "3AvFQTEikucetFiLKRGwiPPdmQgATCAZ7HtYRjyzWvNatDEF31gV1VqDByLss3QynhmhHM7Pyh2Ww3L5CM1MoFw1",
  "key7": "etPDVYj5xLH1tqxJNs2xuLF9wcyLgcWGTn7i9P79tf9M9pXFVaN2EbSCyMyabfeR2fCPFSWmgcZs8YmUXedWCgQ",
  "key8": "3WjqdkvcUzmVRn5VHDJ6PuKYFxFVd9mWF3cP9YyE36DaRwcBLYKTU68aD1TA9arw1UzDatFuBVF3chCafvMyprwP",
  "key9": "7QYTEeBb68sPAPEJGgkQbZMuZDmR2knw2XvpDHbzjgUP2fa2PWkLW75qbwYdgzj85ghGeSnuKFf91Tx9MybPixM",
  "key10": "4CFd85iVZbUgxMwRt7jqUzeKLBicZHcpJxpED2qP1FF4uKYmCBHQjnUGw2G8s2f6Vxv6bCiXLXPHdu7q9FotkZAu",
  "key11": "2BE5ryCBBXufiBM2Mkho3jTTA3KNMgXypChvu8RKdJhJRK6wgs8552FXTqLTtAUGskjdre7zYdXYNjJFoucjWicx",
  "key12": "2HhCTduCnNXmCzcFo91GCHc3BHRYZkfffyK7LF1vD8SRcv5VDSnDzkwuHDPZhMZC9UfJF7yT4SJXCNkVAVVXJWDT",
  "key13": "58Si4MnPrcq8PfYMjZHksS7CVq17ZSs97UwNVdDHXYxjzj5CWpwjQiK6YGbkSMEtpgf15nQaEm2GR1yHtojDJtka",
  "key14": "5zkJ4cNnyYquVdM1J2iSe2YB1ofZoZsxxDd3SERm1NcFBbhZZAu2Xx3Rvnm3qwPW42Sp9LJoxt9N6dZBn2qHLrWD",
  "key15": "Z36HY278ARduEpZjPGS11yetji2x42Ky9JP9tjY3SefKCSd37KhxVK3ExuyJdBuougvLVMPZqH2UusHgshKRnHT",
  "key16": "2vjSFUUgMoktGN77vvAzx58UnvSPrkooukY4h15Di6XU6EDmp4zMC5ZrzPUJ65BwrijuRhZgGLr4hTH7om89Az8K",
  "key17": "2KV5ATASBgy3qELFkBMJohjsYDLcBTh2MnT6TfXMeFExQPYMfdzs9HfiJFo2GR1TEUmLXndCkMEixFUckr13tZTF",
  "key18": "4jQPXB4kaiuGUZaKTEPYL76udzPiAKzkLy6gmsuZzbi1wQ3LEktbtLkX27rQ3yGYX5eyoYvkvZLvfBejrwZYu7cx",
  "key19": "46jJAyAiJgiPGyYioTUCitkj9JJFzo1AxFz3QXt2TdDFv2q2CybANwBhwgVYXPxZeNbXWeACmmT1dHuKMnrtCfTX",
  "key20": "4S4q6s5XcXeESgMk9fNChqaFKQN3xnivmL9aSULs7vbwuxiJZk5j7zjzuj83pxMoDE2XEUfwzeEuHd4xjZ7H3TVi",
  "key21": "QusBZxQ2ipk53MpA4r2tGqniwv8NxFadmUyGJ7iSFWMookj9iazj4Dxdd9CB61BkGgKVtePtUFtXJqRuhzo4vkh",
  "key22": "5A6W4JkiCRQDZTZqBEWKxutRxHJwD7R8SVTA6sxVZazSmyqe8qcyNzLDCF7A5Xu6qNvp7dg67bE1hEhTcVHmWCA8",
  "key23": "3YikEPXtNxBJ9gqLEBg9ENfHjSL4q4rBYwgcLtzYx8yvDzppEGZ8SMSGkdGMz1P24tfM24uf6s42K3K12jDiGm2",
  "key24": "CucPxdHi14cPvXzEMjre7cvWr8CFKu3P6JSQcbuJVaJjMdrDXmRNirQqwRrNSKV1cgtuFYtHPDzDJbMGGUWseNv",
  "key25": "Zq8LCj1UXWNpoHu5iocDxVgCkDbjxujnk9Dk9bqvzPUrEk5n4KMRx6my3GqYPpnMiAkSs2DnHcVcCLC9xpKhq6t",
  "key26": "5Qjypv48CAjb1CTSRtxdzMkg7PWKxpSsMx9CHKXL1zKN63kZdDnzox4mwzVeDRMGJuED3ET2g4bHEbQbnn6wNhyZ",
  "key27": "5qf6d3NAJkP49TRCxdYUQeqq5XZMQZfShbpGm1L1CFQGzAEJtdQ9FQuMXa4xrTTZDz8oxgshdrVFtRvazHyNdGF7",
  "key28": "5M7Un8gCadwSC3kZ6kp7QNGqprjTaTHUaJBrX1i3qqrt6j2tEJggG73By44JqZrUDSGSFR2VD4eXbfpgxbQSKLno",
  "key29": "4TEvPrXYnpWryZSuosnmGB5iCsx5rW92j4mdRbpJpE3Yqy9DZKL4jie9GMf55Vdv9MVWc6EE5hiNPFXNXFKzRTv2",
  "key30": "TzBCrp598Uqoao6DDGmEzAdPJLSVxqCAS9Ji96UwnXZojjbvUYexaaLcUuQtfuFE34GiCf5KP4emDxtTh9YdmgH",
  "key31": "33VDuj9Hz2ibTsoHwY2AD4ibu1D9DfUnBQ6PH7TGun2Ar6E3tHPoqF9rmZg2o76pg2UnmaeRDdnhGzEemGPz8P3g"
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
