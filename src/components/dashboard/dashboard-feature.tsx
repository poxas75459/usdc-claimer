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
    "3dQdfNLE7U37eFBQsA8MFmzq2YxMcfTh2KTsLJTRbyC7fTWWXW3juXbfxxzf6bzjaxbGY4m2keKKx4LYFR5P3you"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7K3ienXbucBAQYtFYPpmKUqHGGvwZTYqyY8pHD9qLiCUU1FxBD7Q4wHdRZmanPEDbac1Ry3kJ3CWhDBp1rGk3s",
  "key1": "4MptXJkyjy9a4mxoD6cNbpXketsYE6UzkY7eLDmbbS2vTdLEqAcHcfQGMWekANK6z2MatkwcHYK3gxKrxikLfQVZ",
  "key2": "5cJ77bwLCHaAmnE6pfiaNvpSaCnj5N44GxiTsLd6FUT5CjGEvkWEB8SgpGe8Gyy3KwjRZ8Cut3m7Uu9hwYUuTsWH",
  "key3": "4bXbCbJrvYqdGPDU7Qz2G1gBqadiy1mMdHuYzfoirY5Qq4sHYdhJTUfj29C254yaRqGuernTJ6EnKMSPiQPTGDJq",
  "key4": "2HKA7JqZTfmR1tmj1Eon4wB5ejbKp622SaUGvZrLyMRUYC32QvZy8RVXquaqJmMucL6isoRBWGpu5mJtLkpVn6ow",
  "key5": "3C1rjHSAMpifchc418Pjo2mLXb3BJa6XbwqM7tHE67mpaYx7Sijg61CPajtEyjK22QPVhJhGcyxPiBFGAPvGDxUx",
  "key6": "5nXEcA4TR2zGFLBxF74h9r1FzmY4zx8LPEFbMs1HaxnSWzietfmhRABmErPGaBhV82MqQ8R9UA9FTiyo92Kis7Qy",
  "key7": "31hNEEw3G2cU1BRV9vPYitrQc67RBY4SMVwutXBAghTypfpWLbESsu15Tb4KoGFVdvJwtQAKgT3U16kWu5h7BJvr",
  "key8": "3A69pskz9ArdEH1risN67r9CNnAQk5fztarkHGRRNkNyYM3AW2d88pD4n8eSFLB8Lj7EboPVzeXAsYJKcY78wcMb",
  "key9": "5R6U2gx1tK21BvsDYyqrtxLsFnJifMDSqKv5TJJqyTfvjuXpQrjt1hTdEYLkNYCXLV4QhTUXTDdzbnR1nuxXTQ81",
  "key10": "3pv3uuxjRXLqoMmEty8V6mJHSUhumTA4F3crpq5eYdNXsy4sjL1yGBt9w1A1KkS2TfjH7hHgKhRB6oCweDyWj8Dk",
  "key11": "65mWSWzGCn2cNM4qJzXpsE4N1mBoeq2GiCiVUXsFYnHzrTPPzqRPcTgKK4jZSFzxQ8aaeKdGQRYMqT36U12GXgAE",
  "key12": "24sP3anytWtoxqAkTZuXM2tfv2gt3dpxz6nZEAs72qJkXT9exCt5znT8tnrgxjVRWp48PEdkEXpNdExCtmWGwyPp",
  "key13": "4GunE2xF1a4kBGWHv91k2KS5exrXryvRm8gY6quCm6L1up3t6iifVNqHRnoyMGQrFj28RAoAHJ3KinuVm4ZPinbX",
  "key14": "2XRDV5xFm3Fz4UUf1QgYQT2zCj5ymJYyib1qWpRVmajBAD46X6ESJC4b9us2PV62VmtYPoMwuGo1xw24r4vtM5EZ",
  "key15": "3rJE6zaUEtbczGSwEA2pdRxuLqRZPTSFhSZF6XWqNjwzQwWKd3koFkC5Xqcf7D2DpMtvX76dZop96kRGoxPxAoK",
  "key16": "q3FdZwQc2CfUDVy54DJM8qQbUm2Kw8pk2QVW7AuzioSh6Ji8dE8d2c1LiUDKeYMWZPhN13v8LPx4s26VrG3RC3s",
  "key17": "4CCstwrZz5fmaCgepr9NaSKSnCfQy7nAk1NUjD3zmyw53F2FUVxqCh1EfHxXKhf94x397cM44mtif3s9joHpT8K8",
  "key18": "2cLmu53sfiFzTB1BV6U7568bntXAtZNsodNGi2ci5fSz7GjvCns3V6NU4RPZdT36UMRxw3Wqsum6LgWJs6w8KjiH",
  "key19": "xiqooJkttdYhCtKCWNNnXHkm6qXbBE7BRgxkiHBVZXtJVeAwFAoczqEmpMHa2vZjSQ1XanDJgUXjQznvz5DkTJd",
  "key20": "3wyNZDVGvAHomuHPFVExQo9NoEvtcq38gPnkVYQRKAB661wkLdVB8zH3Lenq2h2gK9eZzAS8eEcdv9WrLvS9jXjE",
  "key21": "2KoGcaAmfe7KCauDMVxRr5NSN3vuuhJRpyScFZecgTXLJ5RDkK6c4Ks2MaCREXCBacm54YjbthqA2yvDC5MxaMCA",
  "key22": "2Gi8aXX7oQcvCSGZg5nhKXp4HPP6cwiNobhAYkbhC8qyxL4EnXDr2gBENrFHC1CTtp8pw4jjtTN3SgMZ6jwTF5eF",
  "key23": "346UBdtpnmeBH917XuPm6gRauYn6goChwzpTb4M6ckrjD12dk7Rf5Ww12uFjyCxoDkZbMhft8q5EP3ZGMKQoVwh4",
  "key24": "JqqdexoKwhBeMgSbiKqGbg5RSCkDYJ3cDUJ6LxuQ1odgtT3Hz77wSPXezzrznGmJYpt3BtPiteUPjK1TJgfMZEm",
  "key25": "4k89xGL1FCyfoHzRgXPUoUKZpME5Qtb6noJ8NnkZCZpD34aZwTG2W3zAjeNiqnx5n36P6aeU1qEP5WsZVqQLHR9t",
  "key26": "3LsSeHJuDCC5gxfSineharD7gALoZErq1Kr3dtojPU3RMbmkEjRNLsXeTpH3cj9BsRKUFQTWtJrw2EJyzmhNibDJ",
  "key27": "55UErBUJYsPF64quP599gQk3iS4YMZ8L2yUMJuo1F6YJpgGa7jQY8TNegFhFKJpjCKkLo71cNgbYHh6RmHNjUeYX",
  "key28": "2LTfgSrCqNqBgfmWCSoEDnwWfxo9tAd5PheqoPMtysdXqqo594LL4XwWTh4iRUtiMPpCAytyfAz5YU2vGkVnsCiH",
  "key29": "3jdJre7UZW8nKZNiKmTH49nMvzzWUV5rHtFev8vRQq5tGc7v9tW8wQHLADqTkfENMJJ3iLA15WKk4hhDbsVTpLAa",
  "key30": "tLb3kmJwrd1eT1dtYVpBZpVrMXFGQ9jFWVKYX5csbK2XD1J1tGZVJQyqEojzMidsGUNjuqqBkc8PTKF3QEVKpfR"
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
