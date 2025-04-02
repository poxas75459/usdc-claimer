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
    "55HPuemxnv9vUQ9WqT19RE6fmj8gymBNzhKAW5LrWHWMQKk3jae4x4QaKAedRr7WmhJmG4pc4ei6ydrhnZXbbeya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xTaEPf7RNeYDVJBEQXygqyzRYZXF8uFGPEc4NsPc4ZUpkP4NLoTFyHbU8JjyH12MFVJJ3Mt7B6AwAk52pUrsNjX",
  "key1": "3MkxZBXjpNjAPHsaa7aEtKjk7QwopV4QASKrQzRKGEBYMnUbvPGtuSNhSiC3MsmVAdWonuL8SC3K3Bh74oRS57Gi",
  "key2": "B5qmTSVJszVXcJbrRUvcSd6VpMXKbQ3VSUKDC6v4WXHDw9D9z9WhTjZyxfWAuX9SBZYa6AjWhZPspwFPqkPPicM",
  "key3": "2xmnLn7zZGW1CUy8YnjegCa6WNdjotEuEmVvrJP5LkdoUFYCdTiKKxpkMmBahjRTqjksoXCkHNiiK8iBXtQuCreS",
  "key4": "XHGMfiUNaqjsFMAEPEkokRJMKHwj6ZtoFqtfyJqJAeFaqDbHdo8QZGtjZ5i9WX7A2wzrA9hdaukvY4svLgDXbaB",
  "key5": "fCqhMBREGJYDJa5iiZ6peD41pvvRUuFWyYeUL8odzc6CMoEDTELgaStxMVeAfWvMFiRqFYtz49sggQeq2GcAArm",
  "key6": "3LAodwgUkGnZCH8g7DXtDLFK6ryrpFiMNnn4o847w6pQ26UmXr3ER1xw5ARYhjNPusauv729UNrJx3nfSSmCG79U",
  "key7": "3pGdUk8tKC2PAMoJ5fkBJhcuxkoeLqWyU5cL9BEAVEUaE5DekStiT56YAtMk9cUKRBPwgq7qX11ac85R69RZBM8o",
  "key8": "4SafGbCf4Qgit7W6p4zZtbQ4uacgMtt7zpyqCWuqVZiQWqEtazon97aiCKLeRAix1czjdv84YbuJ8nGLTiUntqhj",
  "key9": "Z3Q1E26CTjbuvFKtb6rdC36NrDMDXdgUjaPpX5zpMZj3Lk5XULAk7H1Gd24APBnkLwD7DydZw9H6yghzznwMJRY",
  "key10": "BdS8nApgPWj6JdGG8ZRhXUQ2YAnAyiPDnHR5FuiDpzxpBruxBzf3xzHeh8geZfEkoeYECVLMZ7b1D4K16PrRjam",
  "key11": "21QnKjGEkfe3wbg7Zxi9cxfqTTdu1z5TykGgSp56vNYTTrG8nFAN8ViogvRD6h1ZnbAmLMSBWeCquikKM2iVgA3d",
  "key12": "8EtwKCjMCvsRc9dx9DynpruU88NgdHuJchbbW7pep8qoGVcntDFXryWBBcwrkm9hHZtNvFRUuBqfGEhmazrFR8E",
  "key13": "4xv2NMcPutMG6T1yumtcevx5W3bqrEQteq2UfJxZWGMt7jZZHEhcWcuBBMNMVRxMfyun4wk6mmsVjXDmoZgxdfLJ",
  "key14": "43mckbQiqUQRLoEXzAgt2GGADc3MMUebUkmqijWPxwRTjK9qw3EqAHja1W5rSBwYyiJwiDCKrLGZGKFsoGrHw7Ju",
  "key15": "4CHzhoaYNDMiJeXGwNL6WM2Fs2kJ82sDieWbBgFEjirFNfWVHsfcJRQwQyyYALB5GyWU1xhEDq97MVvj9FL3ZweC",
  "key16": "3ZRG5tGCgCDb6XqqZf1Yoire2RHCXsPizksQLk2cRFvfhyNeAgZuPoSYLzYpy5yxyWxmvghYBeVHoZ8PgxyfuTCy",
  "key17": "4mc6iFURaq72XJtHMwSjMeetef2GDnayKsfUrPzEPYJEumjVCdTUa33FJ7Z6bA3Zdpf5mVWJD25cL9MWkQVLTZbB",
  "key18": "4byB1Tst69CaXZnsPg83uc7bMWXcJi5CVcff1JUxRmQb7DXJHX6LVp4BQCfETGzt4zYcGKreiTJf6YGUV1TeBiiY",
  "key19": "fHEbQmwzFZr8DZ7XBAxGHq18UqJSe5H89kUrDwpNNKefPfa3D2LZ4jWvEcyR57CmE47dVtrU4PrStDTM2j8GEMH",
  "key20": "7bjHNEQfv9xqANyMDAHD7NqpvdXQANpbF3hdSYUN7iv6soMeNt1p4rxSxWx2NKbMXKZ2DRFLnCzNDkYhyxCeXwo",
  "key21": "3GZWB3Y2tjURHrsDj4ZCXaT79Eu1zCXY718Eevaer2boniJz1HoZGqzZEGzToeAVppJukpxYbHDhRzF7YuN3cTBX",
  "key22": "4WqoVD59eyZjLmW8SJSseNjuU52cz3fmLuDaRkCNe3KcXMuZgk46Bce9cMhEwyxQRJS3e7UaAZGruXykDWLBzuJf",
  "key23": "2tyct4MoUTiMKPKBbhx5pvc1QQ8LnYd2Bws52h2x5qveKF7xtdqBR74X7jeKj9UEba2rz55sKsF6yvQMdFTJnEEy",
  "key24": "FMD3VGShUn4snkCtpYac3LEqzk3hUkjV6R8sEriFpsG8BGSgZoccbkdsokEneCeynNZFp9Xsfm8MiAzSaFEJ6dQ",
  "key25": "B7QzEpukZiR9BFAV9cmggXZwwCmS4tTJVjE262uXJoPXKsWUtNfJmEnaF1414ZJDZiPtpKDskwizHs9Y4L5JcbY",
  "key26": "4yVw9MsHxfrm4uK8qgQKpYTe8dY3x9WtJs1kDsCHKjwBHWVDXFf1tWoxXgJiCRRBcne5irZFya2SNzyBif17m6id",
  "key27": "2tiZq2ALW24w4mxVHFjNk4tXnsu7RtDB4urg9ztGPe96cDKvRiCePaYsKc1KCtyxJGDPWzWxPFMijRBo1TZP4wFB",
  "key28": "4vMSSjcWXcjFfXCSRJ4qXsHnruA7rqmaKapXcoHF6SaWhuoJVm4wZzUEQCMt44tMtbFxq4KrcHTMhxDUZjohRxcb",
  "key29": "3MspoBeQez3tYrRr6muhh9Zn5gdqWLwxRg3KScpRzvYiQBF1WLk7fTGSFpGWe6t12ocU36QxcBEaBDuFBG59reuk",
  "key30": "2sWExfxHJHyEJ4VKGhtziXzitDgtr5AaHT9zcbqgnNogA4ipHEC1ABdeS1HNbzrXkrRoCDhL1YpMPZDZhM8kKTLz"
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
