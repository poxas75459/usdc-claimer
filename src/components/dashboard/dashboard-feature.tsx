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
    "3qEashXKp7womWQoaUU3BMKGqoMYxvQo3mt29YnUeZ9q6DTgjRkKkBB53J3CVhhbughkaAdX4ydi3vgePkDsBsgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9QV5UFR1sA5Gcq8scWosVXmgqa8YU49bJyxqQpXFas65f3XoctDpt5xy5RMoT4Kz42QDgNrY2XLJbcPhjzDMuYa",
  "key1": "2GMB26WVTXd79fg27hJXucEcYRvZ4HQL7fR7j4FrFzijpJNyfXC5DXvWLdM1VvUAFYrBermCxMYzhif2wgN5QCiP",
  "key2": "4QxcXNoPPT96riCPCxat6w8xXbhAr8VLReURWL1S4y1FENYk5K8zr3DVPBzXmBcK9xfLMPNZWbtq9pq9DGbmGFXc",
  "key3": "63N511TDtijMARSyuMhVMv98QrTT6Mh3KRY8McGWibBLaQXUdbZgNLByP8rnfSBrf9EHnAnPcdVQeF1mQ9HMxHzT",
  "key4": "2ruZmV4NLbwiHr8XXULiQ3UfpLjt7VqG7JtedeKmbj2LpYsEXHjpyQsYp78tjsXmuK9DoPamMLpEnK1qPdxyW2GR",
  "key5": "3kiD3Qj5nhdtjS3P7Ph9Mf56Xe1kXiYFuACTDUApNpGSKV4eRnY3WPJ3Q32U9L66Jpx3Pr3sn81vDMrwzQjEXpfn",
  "key6": "5ky3vdd61yjvUnHqumCk62PsbyZFETSyCqE6jvokSRL5pf1QkV97bzD39WD8zjh3retehZe7hXJxwEB5rrPijZJ7",
  "key7": "c3837JhjJB6U6GjHD1sB28SquH75eX7qEew9YT9LkXWhHYbZQCPWbpg3kvj9gzz8FraC2bZRGPJVeskEKBuMJJs",
  "key8": "WKHDWR31ARLfQz7MHwCe18WEBXa1MzhAwjXqsLq9U5GY4qCCjUTGerQD4nmyw7uT4Kg2RmPtR7NU9W7v9CgXw5x",
  "key9": "5B2GtSVaSCzHetBUWD1xFJLMT986DwqoWYF3yHivgt9qmziCewVLMwSEZ8UbLcDtKid8v3xp36zUobxee43MMxSX",
  "key10": "36jLH6Uqd6TxRoH4x8cYfhP16CLrk9ebmXUmeHdcMu56k5PeZ783Lx1eAssR73HydbvHeLAweVgso86HPcRziwvC",
  "key11": "5bTk9bsXphJ4s57K2rDqy8VgzoRJvJVSKFZiVuNuChoRiaRfLnTTvELRi9QSizKPUtUaFK3udm6zExpxcNufdDar",
  "key12": "5p7kXv61SGo5mTVqmoovtBp1RP6daHBoVgXQFqHrsKxwei3QJutjnRcP5yDTEWRwEjcQKPXZGq9nfTLpGhUE2krp",
  "key13": "5MMDWHK16Po9FFKy3KnRT1qZaPNiB2CeAJv5xUAbXmtYrcz6JVnLBzLcEUhb7yfHyeMquBwaUp99BUhdZyFTr6hL",
  "key14": "SEXzWMDyESLh9tyFAJpPzbt4oKKD9fK5s14k6ac6Jm64C8uc8qGmCHF7CxxRLZgRAu9PekVn9zUrrNVE2Vc3QHp",
  "key15": "4mHVWrqXG7jKMcYxyU63v5B6K4AchKeb4NpD4DxGxA1eZB8WWpZ2P1HXpdpjZ6ShUK99Zap6DtJ7wTDrvEWFC6MC",
  "key16": "5buk9mt1x6MCEZNpgK1JzYgsVnBd2m9dpWf7bgmSqmmFV4C8t639UVCVzfc1hHumDWkLGEvWdThgkQvSRUdCAYZ8",
  "key17": "5BBf532yif8pKsk7esdbEcQ58asXXcXNPsKsj14r9J3DbJshJW67WLKgUxQRTDVabRYyikTxa2frjDydREjCvLsi",
  "key18": "51Z2UcFvyNNyCbPLNMxA5hYhtkiBjK2WvvBycC7iqZu84FvdM154pTtEeRVSHJszEVxavBnV388yxn4sYeDiwEcN",
  "key19": "3k9wUiTinraMw7LPmMs916uBTdYqLEPt8fNHQ7AHPZyAoAVY86p7txKm6YjymzfLUCiFfeqZLMsRhdGSfoVBdATh",
  "key20": "63u7uPPepcoSDFTWXKfBxqSBJZJJvLKsSCDAuTpnDz844nzbjuYpVKdBao17HNzuZqS7nhdczojLsbUegPKDitGk",
  "key21": "G6bggLHZ5YYzwXDA84xbf58kFbcYzG4y3fd9yzyodJQ6278vVWSW8jHCpZ5Z1XD7YYhU9bdF57ZT34TiHPNw3BV",
  "key22": "31MDsuaRF1baSSwpf3wxCDnkdokamfY34Lvf1HRNF32xNivezX8FQ3676UzBacW4mmQpzrHDpd8rPTWAFZztXSab",
  "key23": "61nrj1xN82gcMMvrJ4GhNouf7EZSpF7Es2LFYX93cJGYkp5vXA6ZzLFh3TsF5G1uVmoZdQgvdhS8AXkFQ8Rekpbq",
  "key24": "59nvArGdAoanJcrxD8uKmxaFeid1fSRTQLGZSe1yGvevMC1Rkf16ATo6prEAyqqCFqp64WXg2xU1qemeGqtg5rb9",
  "key25": "D1xRC1eayiAW3Wb4BvngpUnq9jW9Yy9a3kwV59h8SsNthXnZt5oM36Tid9gagfQCw46QbdZ73Kny1zpnmE1nLp4",
  "key26": "kX2o1g7H1cD3YA5SG9bY7sZAwdqKP1CvJY4tQnjt9Lc1skF6CBrchTBW21R4LAe35G3PkrUR336X5ijjkmwhU8b",
  "key27": "4AmUgtxYn3LbSMwrGHFvL2zeW3REam7BXmWbHyWMQyTczupcLeT9KepHwnNuDrrmS5qJgTvnrvVGwdyRn9MH8p2D"
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
