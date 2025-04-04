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
    "6qGD8NVoEKcuVAW6WB4JQcdQSQ6LAxGLyoAAppeeCgXGyTtGbqxyma4F7ykDSVKNSywGNagb225YwyHBpKvZzeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nzuD2JaTqEFtppkjL272RGPU2TdL8TwcmfyQtcLADTVrWVeL8mQEfyhg1mpgbzshuhnJcbkNU595vZ78Dc6eiGg",
  "key1": "5CgtthDjMrkoyMXsDGj2sYLDPCqXG9v13vHX6eGT37rYSYeH1UXMQoz4LSUtQ7a8v1C4VRnzw6LACEbvPn5w4JHd",
  "key2": "5c8i3SwndYLu3MoPiXMp68BAKa3hq4AAqnpjR6UFbozmVvpLQHxBzVZ2qRq4nSaGTV4Cm6xWoo29U4THiMUX7N6b",
  "key3": "5t2dPfJBprd9sXj2fdRfeCo8naSMKJUxWZnFmzrkmRqtVQsn5SuFGHGBTs8T7eMJugN9wMKaLMZULbpK9i2JHFYr",
  "key4": "5LZTNF82LqVGGB68HU3LRDAQ6F8wVoqPrBaFQvcKY3pFgPypPeWPRDPTQmPQYQqSMKMQKF3dNQGR6tagNgtdn5KY",
  "key5": "3wjTYgVoFexAmb3JTvkbKsSBVuDnw11KpLxNdFg1yEGpR1wEqWdejMZt7THwex6117ZJ5mNcN6fRSWYtK8w8qXPn",
  "key6": "5SQUErVr4JzqLpwiegRxnJnSTWmES9QdqVZXDVruqfPovr1mB1GtZZmshWPmP3r7ZhueYqjUuYsnCzTH4eFPZVHG",
  "key7": "4x3dAFckzX2TEzXHNAedKArXwUurgu7G9LnrKc6CB9kfjrh3hAHMVhrhFpf2BLQ17376R8FfuRWnPK1uVgZUtSVF",
  "key8": "5g7vfh9LjawH1RHXXoist1PYcKkYfPxaKHJ15pcnRRXReSXi1DPrcEReHjt2ps7QUHGwM1S6rtdid4AhrBhe3eUa",
  "key9": "2E8AP1XsasTeSYwgQfeNTttN16fCojY5edjQR1wLGc54EEgp1dRuNYsNbgXfRDA9Q1JjF6VgR2FJhXf8BrDYeFhA",
  "key10": "2VSHHd5bL94nCmEHMYiUxik57xVBqUNiikAMjiHvMbATm4Tv3iXtSkEt5G3JzT5tfHy5hCPPQ2BMCffUWxWanUZm",
  "key11": "2PVxWpp4jshZf2trxrFATBT9FSz4fEhHKu6mwxMvr7BhBwy9VreiDt7MzYEcS9rwiLqJYDGuAzjicqSpiHRJnzXx",
  "key12": "2rL39fc4RbJEEYbRhXhACTN2PEBvzgokfPwu2XYTMWPzyzEBxTNbinNBd6NWA4Lw7y3rXJFtiPPq9ijLzC8upYTP",
  "key13": "2nzYPrYgpr4bf7Lh1piL7eBp2YKWVRu7CYfJWwR3EGNsJfwgaqEotnL5XsNJVp4jjVVgT1YB1SgWGhz2vfSmACxt",
  "key14": "32AYHNDCaEJ3i9euYJWPTHCG7ZWhUYBunG7CJN4V2ZZE3oiVYi7Ui9RZT5KAC5XFhQtc3SFSoHJgmtLL2yZDHdD2",
  "key15": "3z2kcfqvgnSf8imHXygpzTP8idoSnbWQQfkxAvMGiM4wn5BdnRGAaEVD6YnZFhLYGAsHfR3uk97gEKcMedCV7HER",
  "key16": "58wcYaLSbxUKLUPND3K1tegbaPaRpXnLqkrK4wWhwFv6Guv1FvQs1QULRwHJMY1yjDgKVzUo3M9hXxLAtKHxkK5C",
  "key17": "5xRtVcr2SkMb66JxSwLAzPGXqxLwXLXCEGfEGfV9bdTkgV2HXGwN4Ey2oGZs77SBhg3oCDkECBwqbtAPv6H7GoYT",
  "key18": "2JgScgtEtthK2pikMBP9FxiWrXYRa6VXbwjrHYcdduSfHrgGCEYL49rdVtvpkrvRFk4GJPRAkWKhWsMeqRmFhVR4",
  "key19": "3DxsQ5wmVAg5i6jcK2w4MCA4vTiFaFEvKnVwFLKcGYjF9ErrvzmxVAcLcNm2NcxL29isZYkQJW2tFh84Re6CGjKT",
  "key20": "5YhrgFGS4gizPmrugzefhFS2SxA2KfBCVMn3diunaRgbEfPPamkeSEWcfEbWssaLCyLCyY6ziYtJ3AbM8LARScDd",
  "key21": "5uKXFHJdZe2iwCjsEApgKwz991KtRLC39czFk7YeaainLTWzhUawozDt1fmJusjodGN47xiR28Boh9gy8o6JeZUv",
  "key22": "3rkv8wPMdm6sArahoKZDDN7yXbcdnz4bj7pnNQwrcxQ5bXP9dsK15iEo7ux9jrzKFNLQ4wTkeW8CoqGqd3Q3vgSF",
  "key23": "5CUC6m37KifMjHhGYM6HB8dszzvGpUgLYNc9ZgEpc3uAoYSqLZ1DEdoEeABcN4XdTccZzfAAN3mRT5d5fuB1ocyN",
  "key24": "4JL5yGyp9aNkJhPxVxM7guqC1pZmZgN9WKuZJCDv8rawZkLz6sDhd6n9231jvWFJUgwB335hqgzF1dEsiWX41PKk",
  "key25": "4o7bkNbZsCpo7hGmeqPRJzF5DuwpoEhopgoFqPwAhceZPja9QV5eoKmxGDLcAWx9jneTuHGpJe1No8PN5R2LwJi3",
  "key26": "4NmJJDNbWxSn5xcCfUDVtb3XHcY8ogkAUzKYsMoGESbMtBuxR8HH4RTbiWXopNMGiy6SARFHyyjdP8mbdpfy1TnC",
  "key27": "2VEYBPvLybiH15rzTMioY9ZChVPEnXR1HA46FpBP1E3LpJGXXdmy3QRpLFjvFNqGtnNXW2HgNZqJrmKBw4sMWvK4",
  "key28": "5nf8yMuBLLDMHU1Yi4oQTrQmy6sTXjpWy4a1RuCipKiYPRxZsmtP6FbtT1GPeq9SNnAP2j47YebS4Yph392bHyt4",
  "key29": "52S9xfDrNnGDCCwYE2XfGvxxmhigb83QT7uh54grXs4LKEVGMHit7jTVBerkss1fTGutxhBiaFxUfVXCGZUKViQA",
  "key30": "3UEbmzCKToYJRmuxHHsE8JMJAiv2N72zwhPpZaBGux9BmpJWyN5ehHGzoS4Hrb8EE6RLKUyD3cbXuJuwAt3QRu6A",
  "key31": "4vqYa67kfPmHsZVEyvDjXQJvZP8PFGdLVdhCTY7HNvqAz8Sq1PuxXNfa8q1BnsTUHZdPjotBs1RRHeZskHghUW1V",
  "key32": "2N4KfU5AUvBSY7YVKtony4D9XB2vy2mVgEapExg2P2aFbZzPwLdwZnxvSE8tyPvB5Z39HwWzVg9MczPY8GGqHLqG",
  "key33": "3MynED7XZ2sLSXA33dhQPU23bsNZiK75GsVpUtR5cCsznyGsku9iVojXyQdWXBJ2g9PAUfhUiYNAxJUYs8EkF1Q2",
  "key34": "4b6K3zc97c3KDBWFbZHaSQSaCix88PnWxRy4Svu93ftW3Wj2seTP7RxNe3gAU8tqqwKbkLutNvysSLh6WgE8V45E",
  "key35": "5TBdMikc2p5j6wakrXyGrEm1Ei7BGPbTs6xoim1ThHHdFbNkGfsBxCqYxjQQB6Ce4di7i1GWsFqSj6MisuohuWJs",
  "key36": "59sgTngso5ny1gpj8rpgVWDyMVgXZDgngJgdHGhxWb5LFq5ByduYgxmKbhi1Q1a7Ho1arUvENX3wXej6hy7w1QCw",
  "key37": "4V4xpN4L2B6DfE4KySpoq3mMXcu4m3i9b1yuYsemn4urzn1e69ksSYN7ZTrVnmaNT1LhuS6Sn5X4BTZ3VJ1qyXkg",
  "key38": "3SfhhJjinj5raAo9DVHpjAb8yefrKD5ghfhmLEKQtzT8u4c9D8iSwW8KCb6oVfoRqyQjkEkQZiMyKjSSTjscfotC",
  "key39": "56JqVggeVDcWDGeDVh4a9xD94N6LUj8v39vjrvkgxLk87yFYcVB6Y5qGmGRcC5cci7YYxJc9uVcmDWmTG4KaJ63N",
  "key40": "4q8Uam5E1frD5hWwXuURWMDyvtCAvZH9MzHpuWZRtrXabZYY2X1RydE2txnyRX5xt74j6hwAYsPJbdiwCvnRwWxX",
  "key41": "3ATNARo7CAnnZwVjfmaSB63zMbycBQsuoUpqjbYK6d6SW245pdCJMYkbwdkgR648R6mSSMphyy4iNem7krTzXveL",
  "key42": "4suuNusDkgfBfoafJCeumcyXGX9bwSLLfs9aWcq2BbMp221Tur5y1TXwQhjnad3bbQ2GnTeQCHqYmsbmGzaZxmEt",
  "key43": "4XwQJXEZU2Q5x1iwTFDSMPPuFftTGi4mjdqCnZzLbuUKMg3CbqK1BT6W7N6iHojyoiTq6zZGrBaxpoKg8GtHbkyc",
  "key44": "5hNctw1Mc6hw17zhd5AoVMyFz3aQPNHxv9WGXz3mo4nxpqePX8XHrZqPxkzCRPpQfs4LDGTfgp6GvTDhLMWknYrE",
  "key45": "4NxXi8fXv5E2wppHDHvzq6tfnNodeY6HvPnGJE3Ct6kUB3GsZza4PX8BkfVQBt5D3Z7yqNKE4MB5jUx2hWnbCmBa"
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
