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
    "2nnBd77Xgi9wXf3kovpjEhVT5d5p6oftCtj37ki7jos6ZqpU3uNM5twH5oGdRWHsyKGVBEN2RejYjaUMCPJVsPPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juTjF2c9kwntwSzLMdb1i87YQ4FAiXZvMcXhsJhHjb5KiLfKgqioZMaibVPxsNKtDXYbzXRaRt6US2KNBhhUa6R",
  "key1": "63gtHpJJKFjghuY8i4Up3hPR9szS9DZcPsetqFHqCkVKgmoz3RsKqtdQXgN9goVvuN7hPBSG1a7gQojPvZfEd2tq",
  "key2": "eRN24nT1ujChwP8tSWnr4dvQGrRwZCeet7seNry24vavqUVpXAzTLJzFE8n5Noh4HJZhH8uXbdSrmzGbkoRn5JS",
  "key3": "5ur2YNSkqYgLKWo3vgTh3mbGA1JPnfN1pzhThHs5RsE8wsPfA9WbFGzydHXAMMCsUAoxnFZSXeGYE7PuQt2p45Tf",
  "key4": "pvQ8aSUY42txqFBMXfug5ci8xzDZgaARH4P4jWDRYu2DafzR8azxK6bNqshFuvyGZ7c8Qr1uNiaVevxHdXcMkVq",
  "key5": "3i2xBxzKdFjWAGzugVRN2auc6WjvsEhNHMRWAtxqf5okTuiCk5jdCZ8bDjwHxrEXnfgyuqJdcDn4LqNerHWPWGNj",
  "key6": "gnsBocVnrm3pfvocQxVYWD6CRWSwYbRBc3WxDHuQ4adcAfWTSeECYkv2ipN9BLQs8dVXP3mBGA2y3Yb2U75EHR4",
  "key7": "5PLma7ePy7wxSEbAdzhWHxSFmeDU8snLCp9Mp3peN1LpH4ftLN8JZ3wz9Ds29MngjeV3KBKpL8ghwUvDskBpuyp3",
  "key8": "5QmKH39XKitNpRWH7ivLxRbQiwycUHJYgNdJnrX5RVxtQRE9j3EUZgh9ztF7xegjRukpkrgpxCsro9bDrnnWykUC",
  "key9": "5qREZnSTXkZhkCnmZMF18GUDzqGqHZYFa7Y9f1E9HQ9az43NUEpRjoNzbKmiHzghr3wu1DFEX4ynShCWZfyYZA2u",
  "key10": "DCDwfCrLKnHTD3XCgCuDv3TEnpNCocrBJ1P9svcTwEdWRz2wVgMvy8HigFjMC5pcBZvwPgiFTxYUT6WzN6vop2y",
  "key11": "2PpgMjPp6SEup3odBXqf3R8MA9Q9MbarX65LZrXM8WQqEzWYJh7BFc61CA5aAJzUvQ2G6uESmSFph8otZss5h9Lx",
  "key12": "62udbSagApGS4drz6GZjeGZtrxdZXbKWEXarSfbK2hokeVGwt2ProDrZw6PkgbTsGWd2fbgez6z51KGm9p8muy6v",
  "key13": "5u5kNSCRHKzogkksWBzLNkBx9swfaunUv3pKFKFacnYe4WkLP58LNdXmc742TRNrpSknmK5WVy8S3RUCSdmvYxw3",
  "key14": "23o5nJxbLVioU4J8fYfGsFTWG97YNhPbUZgPp2TA6Ny6rzpvj3k4wmCG3TxiGsDXH2Edms1Ka8N7LqHXfA3YRLn1",
  "key15": "5Satt1uu8f8hrxhDhKRpj23G1ciR2nKKjHvTLHPmj1VdGLz6ws2KvadBNARMdwvKHGxfGQqZJK1VyqtPMvxHwaQu",
  "key16": "vZJRHqn16LhuPwuA6nTmoMtchALtGzosD1UP9dhPDskJrvXgvPyqCyqRZoTsx6QfAhJcqc1dNrgiLLhvjpvjPGt",
  "key17": "5znSWFFs7pNQTmbs1FjhtbqM3nf2jzTCMm7iRabAm9mcaK7C9ve3BiyukoY8bYaj7XEDHx2jLUQLqQ3BNrxpvH2r",
  "key18": "4tJVHh6eQpkAsHfyK6bkGWTSdp4obKcrwPycBST7Dg5FziQptcJidSLNHZ8EbPQv7h8jaq7cNMYc9Sef5tSB7aSF",
  "key19": "2kizwkNfJYsbpvMVPUf36Ewwkt9FweZkp6cMAyxrhAy63i4XRoQMET7nrPdXWudeSpJSYC6weDBFiWevbDMVUxEV",
  "key20": "4cJD3EKzQcJHT6JeaDQZHrJVHYBY6i4QNe4VYPL7Ke8kPnwqYohKxtF4hvw5GgJktDDU4YHqdeohCy7RZtSPxBkZ",
  "key21": "5fLuE8LiEkd2srDSfJ5suUqqyDRMBzwQkaLaZWpV4PRhbWfoWpeHeJS8kVqRnVLqTWV8bcfbCVC1ojbj8eZheSHU",
  "key22": "E5UgYcYTiNsVkDUQBw9G6XS3yU1zgC1Z2dqi9vMCCb8RtbJ5o6xidu3YtVYjoJAk2cofW7NenGyztkjEN1KoZLm",
  "key23": "3PnssH9ZFQii6U9ehJhZqd87gkWZ3Yyx6Ny2BPiJy8b5DXapznXRZr7prcUHWEzJtAVwPr6bnEi4Qfdw5Pom37hs",
  "key24": "63UXkWNvRX84GVuMACP714LMoKP2Lc3BkUJzy9EnPQHfMiuoXDxZzj1TxGMfa4U6N4dYbHJ2pydF46nJewyfoE12",
  "key25": "54ZcsQdCJhvXC2cxwiksarfYJzKz6dGZbVr1FpVNi2nPQBdjtgDA9s2SMfBseFDYoGZi5BYUjNeUaDBPMsFeKL4S",
  "key26": "54QG1nhA17JPAP2UgNqXoT51C2iWCz9wrqArKFgMteG5HWwigt8aP4y949pc6Ar5pTycUKL3FGtpnxkBKKxnB6vC",
  "key27": "4aokp28xQPVD2f3D7Z2FE2xk2yocwafrciz2xvV5iuxGWQqjmWPi6SyP75KtDLteWTPTsBi9Sa2qaNNk7Aqu89tK"
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
