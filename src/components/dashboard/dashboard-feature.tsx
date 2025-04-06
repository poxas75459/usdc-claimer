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
    "5TNd4LTYtxYLAE4iAb56jTxxvfbeWZqJt8WeVdJ1MfrweNVDG2YJdJoTZ85X4WRqKCNwHrmJjZ4szX7G6Pgc86wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oW2jxr1vm16qQE8jKtjozyFsGriY5BysZp1Bc4y2wQnaPivZYJEpYWer4caMeZH8cA6JfFLtpErpkYfgCD6APZG",
  "key1": "3B6JuciXJQFhjdX2B94gLF4v2ZxYNwLLwHmf7so36bDYGFCU43ezP6VPmEvxcLqcQPNtDRqvWj284fzCZZxGmk9Z",
  "key2": "5gRq7ieAzYpTT9V5kLEhrRFLK8rpLSTgFuK6cZVTRhJDBZvJq74evqCrXcq3YZHPsvuZNk8v6BhU7mWNi5WUeTar",
  "key3": "NRGbKDSaWPavjq7FEAncbducUsZqCRTGza8Wt7znWt4nPGi8LP32SFNL99zHvTXA8w22DFyTKWJoraKnEnMXNFE",
  "key4": "2NRxhH1wfwtsexo7ozBEUCsieZKx3WwXGLyEbJU4dhVfTPZMcvGPZgBH7S8rV7iXU1iUMyQoPJGvsKKs5hVtfR2q",
  "key5": "5FiaA9HxvHrkSujLKNg1Tow4uRyFvfy9uUGkvS11Bs8mGECfgzmdKwDT6CcHBsPrXjMRWvAgej3hNjZfWdkFBAz9",
  "key6": "636qYfpiTqTyvj8uvPyrbZSJrmrccgE4UqH8FRRdZQR6nuBAb6pHduafi38hVsqgjMmJRiAVeBT7R1sGA3JdngWU",
  "key7": "jodVvVCJrPsLKygQDqRPs6pobiKgawQCPzN5GqoVXj1U4CksuG2sKBz1HyQmacCaR55895KaD4NcPhaKrQcPS67",
  "key8": "5MHxuMpcdwzDbGu3mpwVmUh1Ug5Gea4wdiSgpVcxHdrdXCooasp2hQD2pV1ACW8mxXe75GCsb4VMoLHYEJ2B8565",
  "key9": "KKGYsAKWGoy1He2C4cdN62jAEbfEvWaPf38rvjXKgNvAULCCBZspCBQXjaZH18o1W1vAZb7KBYuKkYuVACNhNXt",
  "key10": "QfpNtLbPr1Mg4v5yKgsMVHbpkSgpEoxJwCRLijNHKbzhsfxorrJQ1JcgyLHsfBMPrF85vArxEihM9qMBAFM42p8",
  "key11": "4NnQG9j3ikpJwYMds7FCWFNPqiEEn4MyEQzePt5H7fLGofrQuiJUxNSjz3kAH3cDoi1PKCxynZQkTQntHwfEfWJp",
  "key12": "8mwtXYkz1t8D71RVhYaWq8HjB6fNqTT1n1SzfMCbiQFVx5Zz2X7vU9Kb5zdBr4PwiViuitPU8bfZC9dRUFmpXMA",
  "key13": "Nkm7uFXrHatqd7j11nTeg4SpbTPPByqEHUek6pCy9ChCG6hYje3wKEu9uozfpLqR1nxBSwxExdWodjCuPeqLiVD",
  "key14": "4qFQZdzPrsviiuJEbnPoqVhQ59bfStgftrNmxs3KziSYiXTAdfoqRiB3aWgDYyUjtkrtEr9mPyX4bV1YvPpFFRQp",
  "key15": "3bRUo5LRLcV8TLZDPvdSTzZ6o4N7nHfzRYCrNSGAMawfFAt9cDD2Zd73uAEi7xpM1HstJDPbsE3WKWqS65zF2jZM",
  "key16": "2opwGRw7cpYyukvvHrkPSd4QzwwioygFiTAffMTu19xqL7Kko8nMzvpfP2CxvsNqvmW53GSNXCLApqhiubLLbdR9",
  "key17": "4rumzwj7fBmKEumxmsnFGDB8x9tyhk1Nb1rmY975Yc7GGQSCs8CYEkfHvdtd4D5E8Gr1uZNqg1Q87PYRTMc2qi4P",
  "key18": "5SptVAQk3bU5RttRsA7bamsT5oLMDSmEzqtDqbhZXYKwo8ondYQSNqUbKbg3PWVbHPg1xDDoNJny8i4knmU5Ybd2",
  "key19": "37s15cc58aDJecPB4azKpiRJDtXqXUTSVBTj94CkDfxvVh2TcyggBU8kfdhfpjZHcUzp2DCvNC2EYWZjsodkXkht",
  "key20": "4EDJKmqijfXMeBebtWP29mMV6sLVRSzs1kyR2sokF5f9EueJXwwkPZwa1eLuPHLYaJDRXQend5CPW9WtHCNLEA8B",
  "key21": "4EzvMe7no16z1f4mpVCbAVsG9nSuhtzej5mq6yXeUNvrHt5PPp8eZ32YJUuS8iSJ242qz5EvXABaesuGr8K8Hc8D",
  "key22": "3L79dC717Hg6RFXWidB4bNtLtFAsQA8XcSGeAH9E1EFT8c4bbdRyyZLEU6dQcR1qtpehPWqCaFBPozqf6C4KAeg",
  "key23": "2Au9W77WQHN71AXrAn2xrj5pbgzmoQnfU7UPfo98VPuGvB4dLr68ABU4L4wqFQLGGioppQAUfPKkGKpAHvU6F6cc",
  "key24": "oYkMiEouX1Toai7LUYaEpD3pxMptrwsSmCew4DVyoFL8R7wuH5PzMQQKj7Jrciq9g83qPAWcirobVEP1JQkuiZx",
  "key25": "u4DPXmSSbd4FyRT6qDHF4KbMbCW1HcPDui4P78UjezAiRg9dV6qca9LmVVXkB1917oymD6t62E65PcsbRUF3zdZ",
  "key26": "tsMtTDYsiErM1mXyUBEaLo3v64iPfz3PziW2fKCMj1Wo286nWB6MNka1N2DWCGMGjWgojn7ZSDnU2sA8sFV5QDP"
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
