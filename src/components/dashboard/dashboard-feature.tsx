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
    "43NGRd5FxRTWYy2yo2iAbbP7LsTSKbmLQ3YxGfHqaRKhmKk2A4UNsnBB9p1a7X7DxEuJsN6NRTaWw5MUgy2rewcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Skhcgh5E4XckPLGkZp5K8URqrPNkYLiru4Qptu3Z8hdGoeNRUpdf9KgjFkkBQdYMvXz68vFv21nqPbutKnQTF9J",
  "key1": "5vm5p8EWqLH5BLRiPD8hnLFxoRSyTuN3oSociNoE4bd9xvN2zSU2N6EvwhRUEhoc8M6sva44LJSYVcC9giPcZopU",
  "key2": "yX2qfzRZmWNRBbDKrcqGuHdhttBvqFifRdczuaughoGsh6E8BRAukAVcqriMG3o51FMnEd6aCLS1j5f3VLbEuZo",
  "key3": "5QDZd6rHHddcmo1axmVUKWHGw9LTVc9GjSiXnBR7aYyZTJT33yePYxmVUfcRpLF7brGqvK7vxNSWrTPBR9ZkSXit",
  "key4": "XbSdcmS7qCxiyF71vQ9hDpQdyfjTmwwjEYJw4cWnQ2ZD77ZENgy6ZVqStC5L2rzyChsybtQJqxmCWaPSVdKTU9W",
  "key5": "58B1iC8aYAgyC4nWTNYvduiLWXK1EfiWMGkmczEWd7KD5E1PKuSfQrYGmvbNQ3VoAdes5NMRYNuXzEkTKkEg3swh",
  "key6": "D86iiD4NfTfn7DeEpWjeGZkb9MXPfchhUxBdbChTCZ96idzv9Cm3AghKYvomniqyrGQkCdLJRADojJsDymRfK4r",
  "key7": "5pmoTpoWWcgxCqdAEezkYvyqTJkicyNZn5GouA7Q5CG4kmCArWJx7P9wqwwavXefWcCvEpS7Y7dJnSrzHgxEVSsA",
  "key8": "65yKpMwF3S1JK7GhgoZzHziBGcH6hsukpkYC2oH9n9xuLYwRqNFjf5uVDvUQPpes72G12fXouTkTrba8U9bLQcf",
  "key9": "3pH4gNMMNWGvXQbUXfXYALARgr85B1w9qHbzxAp2rXHyxfPzPC3bxZifJhKnHfZees47Fu2z9wExDqFQELhe2szh",
  "key10": "2zEe3sFJA1eqNJgNDMgECTjNXfPtdh3hWm7ui61c3D9ucPmx4pHEaHMMEx2ZpqCGLkxLM3sAeDLqTtrmDksMr3fF",
  "key11": "4it2xP1Q7JjUESXu3fLdW8WwJeeJmSFtu4eBK6ni1inQJ76oyJsopWonbgZAfeo6GcmgvsATKpdAVjeJkAJeUB4F",
  "key12": "qwnc5PfrAtsUeMr5wXqU4H9heKcjbshhTxE55JWJDS473bnGmMobAvwaxTpoULWpY6dh42NqqHsDPMbhrHfpJcs",
  "key13": "3Pw6ggGTjUnUvx6niWqW3crzmpEiZRp5a7epDASASPkJYLYoPSa91DC3D2uFHBMayHaaYgfEkDh7UtYDznn6p6Mm",
  "key14": "43Q8e3MaLe5uDviybDRcbrVYHbps72TwUw1wdrL1D2bVT29xyprNrMQok8XidVxaAweYUECpSjAGCopfhE1tRhnV",
  "key15": "3qDLnr8aksoEgCvsch5KeCRdaL4MTA6wnfWhMi1HCZKrL7DJPfs8YhAtQupht5DV5q7kbE5m6r6z1vYCBGCccr7v",
  "key16": "2uDYxDtJcrtkw9R9d7F4LS3aRXuh1VMfLYuXg34iHDynxs1JeoSpMV7muawgvypAQLg8syxF8QdUiEBBiifibnR7",
  "key17": "EibPkMUJ4NAGphCbtP5fbo43s1KktPN2AZPk3ZbMW1xiNaJV5Cp8vxhR2fb4MFjA28JM29u5oZh6AP9LUePxgq1",
  "key18": "2SnhFBp7oN5W49z1qLEEkZFiZJJ3jxpUyGUgPPNbq6iiVwBKL76EUNQsKSKCyzPKoQuTZwMro349EcKaSFGFQUtP",
  "key19": "4VWANgE9idLAM8o66uLeP73aTCpP7Qzh5NdYWioc8ugaoDHCM3XqoSJaF4WkUwjcT8Nq1L6h7DAUWPFV4HuxeRrs",
  "key20": "3ivcmP5ePLsZTEHJjLH8JpPmvxw7UZy5m3dbueVM9UCfqoFLNhaDNYdL5SN44Y5niT6HgPSjLMs747ag594kboD6",
  "key21": "2LGGFKh17Mm2gywqKRe8sJq2LhBhTDCA9omWCWkaLYBHChF56C3X6ZmTQ42pCPPEV2ewQ9DoQFN5noEdc9XQSPP1",
  "key22": "3L87X8xe1t492Ny3Pw1hVJ9Bxrc8hb93HidUASrcY47425jvWRpqJ5nJuweZAGC3Sn8rvQjucapH81qXyzD2xsAQ",
  "key23": "61mfvK7ZpFABTH7XWZTWVkPraoM6JTNxNdTYuDDg5daG5fqcfSXKeN6UUVhJaYRDaxyzUcREjHdn4qRauZXHKwgx",
  "key24": "VLaoUhwqvEX75oNki5kKN1STjF4XUBYrstaS1rNm8Bmv3SE6f9edFpUPGpzyDuoBQPTCG1ghisNcahd1wNEHLVu"
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
