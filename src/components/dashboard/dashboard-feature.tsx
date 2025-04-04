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
    "4hZgQ3Ui63nEShAfBXr7Lgm2uNVX4rMM1pR8EUwJw3ayNM2nCi1ZUkcEvshkHsfkcfaKbcjWRkSHAPWZR28xvZzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5dgvyP7S3EY8kg9F3MUAv99itpawQAzSYQv8Ypj69gdC24ahKC8yWadvK8yDKsBqVLwhqTUweTPgrYqjvtxm4n",
  "key1": "2h1P18u3ypEZj3g8aTfA1e5vRBHG1Psx1vWJ3AbUvndgsSUTpJZFiuGkbGUBe2WyTFP1boTyAcQbGTNgfwyhsTev",
  "key2": "44nvcm7wAn9PvLbXUjWkfW17XfrgBenSrEaaY62oyggNhRqNdjhGRL8CriF7afP6JSWPk7EnPHMvwyQHj1KTrACp",
  "key3": "61TRTnbX1GnqvrrUoFGA2MwY2MbeeejoMwtLVZGfjujxg6wwH5YwhU3eBC7mhRuqjxFtEo3i78MJR12T4PiL9xCV",
  "key4": "44C9dLHD4wpA9tEmC7s5eqhJN831tGzUiaFEGjguL2vcfyEZCwHXqcjjcDwMzwWeTSdVCD4Y54P1Cma7F7QDwSzh",
  "key5": "rSq9hMCoXyZgVcwAFNSDsyzhBrj2vKA1pG3Ceijex2cYzCM96FSjWga7TQMAudSb7y7cKMxr9MNDRXKAvSSym3p",
  "key6": "5qzmPUB4XTVCMmovxBBmReVRDooaqDyp4pW3akFieF5s6mR8gUf4WkqCoPHRQG6zhKopRTLLRXvGUWGLXnyU8UZS",
  "key7": "3k3MXtbTkRV6wwFoCJ7D157zdHgJDciXNqgXT3UB5MFz3KHKyGp5KhvtJbdszHjXyKXMF5DK6mqEWT8Tt8xdAu5e",
  "key8": "5vdbrsmPzqTeNsdhnXLS1CHPDzBSyYt7jREf93pGDD99qjxCifWiLfxeKWuK4ZAeHTbiHex7Szp3jzLTAhUjAs18",
  "key9": "2oFjE7WnsAC3Gme4SvHXuAEfc8v3jEWgUJVpsPrUFjRyEQt4aj9n9UFDiV7kjAZ2NEpCeq5kutGMdsMdZYj2Vtm1",
  "key10": "3Gfcnyf6ftaaV3z59cWUX5UVzBkSLa6Hdw3PptXbwPcXZ7nubQDrm4Nk88vs1kL75MqFQzvPjcX4vEs8pgsuHfo",
  "key11": "j9eWMvrRhQh2soPHpMJ4WCRCGfNHUGTS8skCf84BU3AawqeZSBuECtojCirGRaLWdyHWhtfDzZbVa8K1VcNJYmL",
  "key12": "5PcFtHiWU6D8tKJvWseGotinyEd6yjmXaug4m8Sfb4aqBcMXpDaM27LfEjTqHFPWk2k46kLFjZha4jKubP2wzzw5",
  "key13": "4K5kLBQP1yC77qrJtr2BM2L2p6wqHWXeUAbYpdZCT4PsiLz1w234zYWE6YpB4SCahNwspk8Tq9wkB6HpYrnZZNFe",
  "key14": "2JqTFw7bpchjYgKtMV32q6FrPeKHcseRu1yCLAFd7T65eVod48ftrC5kzhKvQcR2gibwDhYXkXKLBxbrQmeyhwZt",
  "key15": "4xtDyoSZo4AYHeWdcPrXhjGezinhDqUWLcm3kGKZ5NiYM9stPXSg49GtoQzrGaJFLE2ChrJwD4rA2gZtDjzAi9Mj",
  "key16": "4KqFupVVPdVoaXBQ6wLYGVNSXXfPycMWSYdJjDyfttkiCtu1nbDmh7bs3KJA1FrDpw2Ebe1A5qpJ9Bu3a4dycvKc",
  "key17": "4FTwo7e6TW7m3rhU9GJwKFSvHYfNXo2AwX7e9FmNt91q4qvjy9G3CqCQ7sG2JCJfZq1Dx8hqsRkwBRmmp81P2z7R",
  "key18": "CRpeBCPM2aWgweNMzU7ekDbkVySu7wSovY3rjUmS4n4XY8YNiVX41xej4EZ4dQPHEZLdD6EU2mZwzzf9UsJDbXe",
  "key19": "26htaqoSPFSHg8DSsmkhy4mr29gwoV8R4kdf33eLXBmZ9v5vn3pmjGoY2QtySBy36WytiEKN9cKjz4oX7zCiQiAs",
  "key20": "3oSA9xPLRpoVsThEEcPFmSaGk63ccUCKtYotqP1EB97Ajio9ENbfAkJCtF1aiEzW21DYHUQQnAA6b6xyunpaPdKo",
  "key21": "2i8ezfFAFsJBL3DTQaiymrm5QtoxDdk6y91tZPhNFBG3Vf53HgP8RPUrZy5QDTWSAep158P4YBDu54LYTE4DxVPL",
  "key22": "5w9Qag9MaxoVWjZN9rSCVGLhAyaJxYAuzvUgJicETE573p6HMBsYEhjdSMP9MPz8oL2zs7fGFY7oyPaj5gNi8S2h",
  "key23": "3r4rKPRmDHZJ1k96HpvnQ38YXeojABQf2jQ1vyBAZ69xEDS9Gi3MyTfLsqaXGnCNRH3KRTJngvs2T9J7X4ZnCei2",
  "key24": "2ysVf5zonZF3Q7XRVtiqdSpJuDMnxuwLL99sj6w3hgc5kkjBpTZoAj4aiWBfnZBXR7tiBRT2znWyxVUwurHZQLSS",
  "key25": "HUiXVSepA7Jo6F62cVAR9e3W9JGH9par9aEFQGvAyGF45LaVKbSbGW9fj6tzYYyNtSM45JjEqpcq6p92qe1c962",
  "key26": "2Wg5uUgrM7D5vbUVDxPC8836YYxKSYFYpfjMtFphtBxBjMShgQrGvrfdCP5RNSVixSQAhV3W9hM6TLwvXXK6DsvD",
  "key27": "5vaALPxPs7Mry1bNoucCsHGqXgENyiBa1jHjJaHMHtxWBvuqhb8T3XAPuCwb3jeD4CQiHyH1cJfnTLzLeosePF5A",
  "key28": "pVRtdumJJkusaCTedRFsef3ANVJFbuKMHEBxHzBdaqgQ2V7bkzCEjEUwrMXnKvgcCLwgtqobSs1fZMfUYzwpWa9",
  "key29": "388LfhUdrwZwDy9xjpHmEAgCETsthvqyCBANgo2ZBf2xSsJDp3WXBDA2Pi2FRssWtCzDwLDp2pzWDPLvid334RyU",
  "key30": "4LBJjNfrbkf6X22yaUeK5XNSEY2hZW1JXEzJsChAy2RuzVvVJ6YqX9JkKQsYg9rxXsnu46Atf5TnBjU7CS3ec81i",
  "key31": "2MNH4shPo2EmS5bsjWPdDP7Q9EeQCccb3M3EAyyRC5vgsWJPKTvP2D3Yp3DZN9ohjpinxB32BdTcxFKG6Xj1fQ2U",
  "key32": "2ZkyNn7Mg2y1CyH39RavsJziaQie7oGxZ7zyj8NGKC84g8jj71mXBjWJ2VDTVzBVN8GY7Lrc6YNyXR85Ah4DCdAr",
  "key33": "4BPyP31y2gZtVh4VC86VizdDBpidbGbxWSXc1eVDBHY8FWKRZ92JcgojPdXZ6MoJJQLArFBkdguDLRgXnAq97d7q"
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
