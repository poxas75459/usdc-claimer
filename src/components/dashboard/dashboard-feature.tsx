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
    "39ie7PdRhgdWKPxWiE1nsTv3UD3mfxrwPrvmY9879D9tSJTEJ9q4RqssLFr15CV81gfbwGKc1iMoC1pNuNzNdxDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2832GRQCSDFifqLyibcjVa2LYo94M5BB2zpEr1czQ7RW3FjutfSFehGR3Br4d16fAM5rbXS2ZBfZ7WNMoN9j4kK9",
  "key1": "5jNxk8ppfBCwnRLxXpFvCqGUaxRYjd5phgCPAeukvJeMXqXmMmPyCWtZB4ZBygGPNBeLZibgjE9UegPQ5Z4To8Zj",
  "key2": "2R6M9WAM2aWzgaPBGmMedbgvewbbPDeTNGbYKYuqkgvdmosXPk5UKBQr1Z3epoanY3JhiAHPH8zvcChat4ZD9W1P",
  "key3": "NYUiacm9vL6g7y9H3u5gosNxxjubvGWy9Ky13Y3T9skHP4zrdnb2deUm81jPiSW9b6jXHmLMqgnQGYVWjpHhcmE",
  "key4": "42UKaXEaQU4LGsoCHqMsSQWsWs43e3Mbivh8C3CkDrrMUtfyFspPNMhGQBHWYNV5U1BPxLFc5hDDRbBnvVPEFhMC",
  "key5": "4xqrR7vM64K3ptGAz5w763aXhNSiHFgRQ1orvSUUH4qs38apHm5339mnZmYutdyZg7gwnLCdRVaAv5zoRVcusHS1",
  "key6": "fvj5zF7b34vMWH1vmWAWqp5471LaW3qp3N2S7H5VnabgbzXw3KPGVbQrV6ss1eGErkoSrHijmLpydscW2rpebPV",
  "key7": "2und1xL8BWaPf1tmhpSHRxFjBodaLGt9WeCCZLg3uQdvcju8QRMAhmU318mVtQbNazom3fUgeVjuJBykFzoJyekh",
  "key8": "4J1ggqH1vRjYzCcDFgFGpuRReH2HWoRoxbMPoeGuvJwRB5TPszHtboeuZZtxeqcjU1BWaK1PPzrra348EnPHCg5d",
  "key9": "3oBrH3onKQGTq46xu7zFpGdUrh52fSsdSHLr9nBEboXXd2rYzHbKdjcobjgUZyATHrawPQKwu2anLXradACo8HwL",
  "key10": "5a9UeCwDCHVy66uapspaPdF3vP1gWWRfDvrkjw49gG6sdX4JQeJJtyYGyKy7oEmCTsFCvyZFCSAx469JiXQPziUF",
  "key11": "5Z2UvgQQd8P36RV222CXKWB7hdHVZ7jRWbach29g2Z3fK9bMkdR9pnVTY6DG9AcByaryvHimAvTQnKqJPokXsRdM",
  "key12": "5mQPSMfxuNZMRT4wLsddi5cCL3Aojyye1VLv61hXA8BdCvgU4E1whNteZdLYHqnH1ZVJankWmLbJxcHidMfKqAJL",
  "key13": "33KZ3agnLctdvmYRh9VoZatcHCjbxwdCMvzJDnAPC34wLR5FUvJMUocKp8qDWEREBB2eMPC7h7geidoocwNLRgkq",
  "key14": "WE9cDSrs6Gc8zDLezQ29N432DuTGGMNpLhwwUGxSJupmzanD6FskqXMpX1AE4RtAAvqfMnJJvUTtQziGA1uciDe",
  "key15": "5xQz8RrsM18V3QUY76kMSHfaPhJvJQ9to6FZUfYNj256by1hA12k7Ed6PN21Kj3QRwwduhoP4LfDZXctKQc3b28F",
  "key16": "5JkE9VygD1MMNGnmPSmLALMg33qYmDoGmL67UnitEEnjhuFHfYNaTsCXRBYnQii4pxgAtN9huZrNdRx3mzj6uXbB",
  "key17": "2yzo35bfDRBFquRH9rjkCc3RxVr8XY2zynsqQ55DubnTCJ6edkxkPmpAm8gKneWLnGEpSke8oQDaU4mc6dfsByWk",
  "key18": "2yELiYGPQ7AhamWpjKEpRWbzUm7jrX51EekDH77o9uZ8aaTQtjcFwxJyM3QehoFBomA4nuaeD8QF3c5jaKY3hdn4",
  "key19": "2X5K51phbYW6DGk4jfBVMwadXzj6seipfevSfF2QDCWrAsvxXXdgLFYTzTMyUGAR8SBTxnCpJ8aRnyAtWuVREa6m",
  "key20": "5Tama1BU4z5gweNSTG6XVFt8Z86Ef1HYu4d34fR1uq6QrnNh6ZcXEqoeSz9RgxYGh9rsyBTzThymqqFyzm1pMjMs",
  "key21": "43GFmR2jZYeC7FmcS5phbhNzu5uRXygWqBEcbwuxkGK7BcqQy5Lcrf5q7ruaCQ1tLqj4RpBfUJQCZfhkcWvPbZ6A",
  "key22": "4QqAZjtZeH6sGMrD9p2CBqDsFuPJajRFDxtVXi3BB8xatGwCooX1qjWpFbqbFyhDiGeJGbXpxCPztDxwhnGzZwKm",
  "key23": "5a6gdERFRmfSPsKhQeMN9jWPSHWuHT9KSTRH8B8dPCbzBLMvULhG2BbKFoKhYDFsoQDtrP4Ceg3RHoBQ4MeLQpm6",
  "key24": "2ecDMBTGMRPU5i24WtsPXcueaopKYs5RbhLxHPPHrE1PhXRHyBSRAzwXxgq7sFKU6d6F5rLJztF7SiviN5LiAkfo",
  "key25": "3mkcZV96nGUQFt1cA1TpCnDL84jUn1hnCYR5YUd5vFwr9t5rMdk1bFBx44e7stx9cPuNE2p4EwwHJfQr9Miy4yAS",
  "key26": "41HdFQnbbcfQgnQc5kkjh38HTb7gKhGCDwGHYkhnbEVQZ3gavBWHySM7MqqYn84hrPCyCQfS6AggTkrguVxK8wPj",
  "key27": "3SMWdnDQNJvExSi8vMwaPNT8HnnVeu7xgEy989GN7kQ6yCyjgu8K8ZncgiNkmWcjirkrQWCdER32q1HErK6MUuzo",
  "key28": "2BipGGTx2FiabbAXJ6F83DSrX81Xd7RziqY7PuTYmXYZkaRdEUApYbJKwQtRnaFUsjLFc8Rn4riE5heS21krzszs",
  "key29": "4VQgRngdNqUkGEGQZhVcuHShShDLdHyKdGj2xrPEp2ysRwUZxqdEzKp8J7A3RM93iKkgetoRSzKydAj2vD1fZX3b"
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
