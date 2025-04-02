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
    "62RMyBnYGKZHKxELtjGy44eVFfVzgGaRmGfcGa31mb1MAodAVthYC3uxESZoNYFj7CGzbhNHkZ35Thd1JE9aML2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nG64jJ9K84vDPJPVDHMhQCJmx4GutmuDnMdUurhK9yUXGxQWpE3E9duyqB1KNPo8wwCCFyKahAWbvbg4qFDvxyo",
  "key1": "2NLqDf7VdjK8zqxZqwwVUPtSUnwuakss7u9p9Ype7Ef5u53Ax2z4JtZv8C3qw8eUyDhDftbq8iNURHFEYxZG14wY",
  "key2": "Sz1sTWxZkXJbcD9FFn9ZWdGck1s8Xs3eMVVwDgnucf7akVWgZkRkb7sGCoGqmwPmcH2cLgeo4SPJ59iNfoQKnqp",
  "key3": "2EHMD7tmL6qVAhgbNNd9JgqMg3QpXeAZ1DsPvUcxovfHXiKYxHCRCtaRYmQW9qaUbUaoc5ocWgroTaM8Yfw4aBzN",
  "key4": "3HQJ5PkgwWG6xJqTwegRHLzFe9RDmKvs3VfTeQv6V4NkBK4Ayp9E3gziPVqTBRT7yh5zNVUU4rgmi59d8tEkQJvz",
  "key5": "sj95i4KNvy3F5i2vxaMhApSUNAjdTQopwQVZk8i7TSbFUTQpLNFbYhTBPBVDBFGf82KVscJAgUn6A12auDfd5WS",
  "key6": "3gUutWdv1PBg1f13qArmQAhvpU5nzEF6JCWW6Tu6it2sd2BR13qgFiiKwgQmFFa2uMWdsbxkdR1mpZGPqsZSpCGH",
  "key7": "2CG5ijGD4SmHx3S21xrHH7bqi7yweWVGPQb8DAubqhsRUfLLfmoLLjHhNVdMdvnNErEZtmS2682r2ZZDKhzcMmQ4",
  "key8": "66s7iGPMC3oNWaSLeQebZrMsjG7YrRkUCYcsF3EyrMNUKA6zTFESvAcxEsyFJuKckvS41fqUJKUiHrucbvDw6cte",
  "key9": "42DKTZkc9sqhTgMcRAhiBvPHMLh41Gya7EEP1wZuLrJ22ZiMSDAD4YtEYs8SSD3QAEAVfs4hXc4qRcdrq2y36hpk",
  "key10": "3tHffAw2jyRdETVpo3Fk9xjTHUYRVohbncPVB7b5e46vJUnjfAtaAg2qEVAGYJdDatrBWSniJmtQa5mTkZoAbrpa",
  "key11": "FWUDDkBRGSBm1NT2h9SeJ74emq7PVDuJ8mnLosCEcrdRQCiQpzc8eUGKUhrw17M7YbTGsc46kGzTw2a9xvbXWAJ",
  "key12": "sspsWwbnj9XxeeNM9Bu9L9a6ZkY1dYZhn146d2bxEWJtP7GkTer2mkzvGFJGyUTLbzFgvsKU5t3TvNKjyLJpAJW",
  "key13": "2BHd6nXrQVMjeaazSr3q3bX6rcRJjWSyPyPWVxQhgoPrBdpg11t7ffQvrQWmnbomtokUrNBdgQjEUB13ESPa4hGz",
  "key14": "3xrdfxDpFWPmjer2rKauwszz3SgZvcYPj3VqFJGsbB3yPexeiQigtj7NZ2QsAAA52JySikTHW9nYaVxKe52HP56g",
  "key15": "WTr6p3x4U41B39G3hzLhYYj6ikkC1tcJU5Vo3TTAm8KB8CpvBsrtzbu6MHrq1DPjL7cGxLNqA35csXg2wiNev5b",
  "key16": "DVoUvgWZ2zJjAALnMvkQT2Xn2ftTaXKMbjQurGsGEekdv3EWve4Rb5d7AU4CYkBGZBfioW8Tw61ntYTAgtaTizy",
  "key17": "43GB33zuZXdg5GuRN58Ymp3mbT4QTbyniETgvezuW2QkyS343iRyxUf3wxqpusGNYdSESN9BHwtgazVHXEUKUjkt",
  "key18": "SvycA1dtjDxaqz94L145wwa1DCRWftqBisxrfR2cRG8CzfbJdbybeSUMCnzDMQVUR7jSmKpcay3C6vr2UMJ69Hk",
  "key19": "4asL4KF2MJHfTnpwi1YZYumfmSHFzCZTG9SyFBbhiTXWUXjC46FzxF6xRp4LFPYPKqhb71quZJKpTKtj7bYyBhKD",
  "key20": "5SA4ar2gyoQTEwuYWggvhJpGAx5HmxjUPE9mLCPKo5HELn4c4DbarKyEowHRM1wDf7hHUqNT2zke7WEruYfYHx1z",
  "key21": "3gTG2PETukdg9wyapesCbbWzuLmwdc2SFZvYA6PykN4ZPL1FdWE5F84yToX8nCGwce1Tk8w9RhRiuP2G4LY1dYUB",
  "key22": "3t3GPBLqtymCstMzJuq8BJrCJzDm8gWrhXygELHm1DXeG1wSj9dhxfAQJ9Myzaz7jSWjpRxquQr1jRX6Mqj1ur56",
  "key23": "2f2D93iiFSUPVPPcC5TBCABKBW2Hzp4SmKnuUTrXKpQK8h5BvvKXFwVWjG1i9DxiBGAMPU1Q8r2uQLonjD8V8oyv",
  "key24": "2QwTm3YoSnoEHhw2dGTYdidvPbjjukTVxoP2iTpm5tYWMbgD9Kcj1wvXK5ThurArrmDcL4nAhLcKYxNwLpSeu65D",
  "key25": "31m2ZZnJAyfoLC2ZzX6sWjfrjLkQBddf2ojm5kT4pXZ6FGVfaEVvKa4v4ZMYEMqy7NrBnofMNs1L16uQUxcmxHzo",
  "key26": "5uSU7JpgYra8TNRKjL3oJjdS3TeUm4eeh7dqWaLLvXpG6vrsbd5RTFw3juQGMLQNEv3UvCHP3DnmAhKkYejLSLKk",
  "key27": "2c6ysRFqQkom22bHez1bFA1YLVqEo5B2KksPF3BGsWqnG4h6LocgtdVjoVnT69UM4TS3w4R37DDrLieAMAWaQzcU"
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
