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
    "38chAVaK1RT8qijVrBM14z7vhX7QVoQWcdD27Cnn43KpzJfPL5Kz6Nrytm2jo7kB2KpvxuNYd241gkb6vSA64iYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKLPKcP4vi6dL9ELDxsCuEpipPezKLHQhf9Hojr1QHH5YVtHjEheQCG9FWR6ZjnxkunLu29XjSXRXDPZ9BsYB8j",
  "key1": "5LGbq3n55bbH4Lwx9jyy26qtZnhG3NjYriovDuVm8TdCtU4zrDXhy2fuMTntPnDw5dPfzbsnZYeMBJRNDSJ8QZ3F",
  "key2": "5WUAMcvErTPuBGNjNoeb8xsNCdbPoE9yzzQyA18R3XdXUmeby81XYjwm1DYpzD3uawbbhnAW2xQxaRuWXWcFqFkb",
  "key3": "23niHhEkYBUJR7khYBj5v9p1QmWXx4F9BbTURUFzNs1BkM1SX6Q98DFKes6YoHnd2zbvQyFXbAdmTf718DLMzyAe",
  "key4": "2XZHf8RVrRSVndYEAmeBE44TscgUrv6Rimuv8yhuN6dFR1wdTW1knJTxqG23VvaKRF5sUTeThLmfjLFQpE3QYTNy",
  "key5": "2FAGZTaCtTxHYn75LifWM9j2do1Uv56eJHqjwcQEWi5BFcr7WsTmz2eq3AdP8v2HfNRUmu1k1csfmLttL9jYUkz9",
  "key6": "3tNJdi194gh45ktJZrCJN1dWR5y9FZwvYAf9ahgAbgkUKZuymw3mc8rqLowYr9uEp3mQmXfUM5XDk7qZXfkhPQ23",
  "key7": "2SEEczkt5QNGuNAWioEuxS2B7Dm2zpNstF2CqnTEJfHp18txNVSpfNg1ipnFA9ZMX1qHDRTUxgYn5jdPekFUUQ8k",
  "key8": "QGt5wxsb3knnDdt1URQHGonQh2msvo9S742MM4cDq37XBqFyzRhWdyzFsRvuPVoUdaZMEd5txDbJ6jEtDUjnyQq",
  "key9": "24sYtb3aLLAyv4FsTeyVyBs6rqqhLFr1RwEM3MtT1YZZ8NhW77txziji2rhGaAehMtZ73jf3Z2zRgSEYdUPdGZkP",
  "key10": "5Yoxt3hT1FnqRRaZMe6zQwHZ2fBeT1NadMbT645esGVjvyFJ8Pf3xV9vZgWSafrLD6cXtQcrACx9PUeqrDTNwaZF",
  "key11": "je7ogvuB1FrM7iXXBW2RmAoaHGo1RU5uJ8si36StEbyK5hiiMw5XEFi3Za1pcBU1cuSCXRuCxEfLSmmft9AHu3h",
  "key12": "33tGpvpp1Sz3J2bQdWarQ8aMj3Bn1NW6eg9XjzKNNEpUA4k8SgRkuMx6MVTVmJj7ZoENgHwY9ubpwFsDe7uqmLjj",
  "key13": "34WedFWEzf7cFJhJNeBrsrLENkB3dXU16zengB8iXhsnT9ZJGAZJ3inPUqXtr8GMwmiNJKCj7FA835C1t2J6jUr1",
  "key14": "5XGAkF9csRsZMfBe4V66WbMVfTfYTh2eTHe2dmd1VYo3uxEW7DmZZr2jPB2jRynVsJeAsegouRbz5iTPKsw4ihMc",
  "key15": "2Jxt1AiyZ1exrvBMJwLgVn7Hnwhe4c2KMegpYiGX3L9duLKUUvgCmEC1wH95ekce3te6RbM59pDccnUUxCgxuv67",
  "key16": "4EDScFaGDL1hk5K4D8dDM89NLao5uRe3jE8pyZtDADE4kMPydCfW3L9oo1mtckeiYanmNNQc6ciyC6D29pU7uxrt",
  "key17": "kgqhxjNVnXp5Etpu4PXZLK3vkBXqHHq7UqCE5H3CRLzHH7NRFRvayYPByz6kY9kxdPPzaq1KSGRJ31ZXL2LiceG",
  "key18": "MezFJNm8EweF1Jts2etdkmVmGToYGDjC5mgvH6ooC8kkvjuK6AnbVSAnH7vAR4h5rktHy1PNkmBe8YRfQzghj3S",
  "key19": "3MZyQEvdCzBZE7i4Q3kSvLoCDBfQJTbnUv5AK6rjuPbnvCnv4U9Yk8otgaF1MJ6cca8unNtSLLjbFtrwKShKLCh1",
  "key20": "3qMghu33ARU239ys4bRVmwBa6YWZ9FGPt7VM661SXhWsz6Mtw3UW53dPDz61fvrN2Hjt9sfDanZ528zYJfqxPJzH",
  "key21": "2ewAUqqp7NvMiQ5yeu4fxi1TUeY2VJwzvTLpviJd8FHf2fPXtshKC2k9DE1cEqJY18xsiRjd62bpBgJN215eB3aE",
  "key22": "4462M6qC4xzpVmcBovN5Gr7aBzgq85ZcybPNnJjLKARzDD5KfXkKDiPwrDxnsT6WFfehLZmm8iSuU98bvHN3yBjA",
  "key23": "2LjVzjFrKNeiv7KJfxqzzbXR2oockqikGrjgJY87ryGaGjEeFZeUzXeE4L3Ck8xZ7VxF6HsQQEvzHXfBGKgMnvWW",
  "key24": "64FzNgVyzgG1wMDAtPTkUETm2FW1K7oc2VDJTQLYXiMrcs6oXQ3z2d8UxrEmk7kMWU8r3UKowUmYgd8d18TqhVAk",
  "key25": "LTLS4XB3ufs6x8WQFFWApWfWzCNS3o2XEh7vWyM9zyVEY87wvDRzKDXmupcgZCBAoVoK29MfogWinjTCgNmCTqH",
  "key26": "FZmM7AenoT1CKmanHSDHJYNdeEN3fqJiZwCdj5i7aHbJJ6VyySMFwGkVVenmyFXwZQK6iGmNo9ZVrzP4mXDP5ak",
  "key27": "5Bb56s7rJU4emdZ7sHVkdqLfFf4u36uftmLb18DC687Tq1smJAk5a4XqDT2pZiNcd4emE6CLJ1ge8VQqvfQkgmQb",
  "key28": "2v7Pz1GNA7rg2EYJ8BdKdL3fdkxLtd7q31LYfa2dzuavmYwF6RbbaT6Gpg5r8e5jQ9ydyH45RCgBfsEk2m56qhMM",
  "key29": "wxr14Uz2NYqTssuK2VbtJhh5ZS9fqhyozAfU5snyU5oMPJ9UqbtNRA9g2ucHDb3EPcEqdswp7LnxwQhWts9hr85",
  "key30": "3WvS6YSfLPPjF5hzQrrJCkSRBfmWRDf9Y8JrS887q6mx1xvLVDdn8i439MYx9WKTuTidB5qH4crEze8tYgtRh71r",
  "key31": "GxEcXjNvL5eNGiUi5XmNfsuYqRFv8kvmRTzjcBSCog8bmk8zqtAZdwSA6DzyiJfFBHtvtydfoX3Uoff2PacHY94",
  "key32": "2Di8NbiZqH1TmfPDjLJd73mEG8cGT2GNFmcfvPKVUmdaAc1qE5ZCR2VqdvLAeCtfAFNxAM8QcTiB9LzFqvYroFyu",
  "key33": "28hM8XJLykgp5PCvpr3c82YaAUWLAX3P8Dy8qD1eAWHBq13aeivKqN6Es8QEgCy7eyUoPh5HuYJYouGLpCZDb864"
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
