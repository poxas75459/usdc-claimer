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
    "3CdPPuBj3h5aGrMY2vfuY29zPeUUf2nP97dpRhQF8rtbPVWzNa8aH3MyaN57PQQkLBTHUsUBmtb6YUKFFxmoBVzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dk5dKtu4g9HHMvh5wsYUh1MxYHTftZhXCVKHZBAFRwvnNsR9jnqyB6Ar5zyn5f6gak44X7fCEYW9QTh9MoC5mZY",
  "key1": "3iz4U9ZmajRZQhkD23sammWKvSxwTybGAWAqRt7145D24gLon6mxy8goV8AbAhEJhAuGBucfm5oyE7YZYiadNgQh",
  "key2": "nV7LDqdTXsu5bjHVQbfviSmd7tA23VhcTHcifH6qEYQXgU2YofH1hfynPFKgWZbYe8pU5zAHqX3Gwq4bJJDM2CB",
  "key3": "i19asZL7LMtCb1SRVb4zrBCV2YaVCmXEVB4rSm8B2L8vKm57KDV1YEYjFvDuQeUtRyauXMN2JogystDFh9tzJNi",
  "key4": "2q1ApNgyUWimW3NZUW1dCweK8P56kdLN6m1Wa1joZfsGLUDfX64PbPVvpyPPQgESWYr3NJrabX9crY3Z5CtWQJdT",
  "key5": "sDk5JbTbHg1Ttg2jSC14Vc58cu7juctVDPBhxFmMKfhpd4Kwxb8pyqQECa9q3hWEudSmKUYQgpcAKhHJJyhFWjX",
  "key6": "d2TmWbEehebcpaxKKvjRtJ8szGVSrFJ2PqU66fEMEksisGTsnpNMW6fK4f6RULN4AXJxxs2kivy7o7iiwU4ZRoC",
  "key7": "2fzrpR29B66sV78YSmkmTNAe4CdabUePREXA6eZALkwuhPA8SNwJATdSpyXfxd4B7CPTqhRYEwyC7Rmj4Uia5k7s",
  "key8": "3J8zJNMG6YNXHZP9ndUPau8K64PW5BXFeSEVHYZHrDvHU7aPYwinSnTY8iiYvXZvuu1ZuabgNDqAkrg7uVKtaPAV",
  "key9": "Rf9aK2keHWYCNJTRm7kL28NPg8zfaeiKRXnfFLd8aSgsJCPRhqE3z3nMwYcuArv9GsdQSuZoApdejhKgvaKPgHL",
  "key10": "41owA1XMmESqn2KPdznQKPZ8Xmw1To24B6r8ErwoXLafa1kCqw2rzGHnpiskzaNvsTocC1eZdp8d4pixMH45jx4D",
  "key11": "369js6Zyhwbm5kqdBpe9WYdMh1C3un1CdwcY3F2eqsvy2z9JXRdmkfd6Yz5XpSm7VrEEC9KpHnc4CW6TR189mSMR",
  "key12": "5bK1TmMEwJeJ9Bw6Eu48cANmqqBJMRrHzzUDcx6zx1M6DmbMETmLs4hZcSfSTqA1LLsJFzRtaCd4GyzSuT7Janen",
  "key13": "3cGQozFSxt6DVAwRXSpF6VJVfRUvJDBX3B9xCu8x8Zjx2fx6cpb27Uam1waKUKUVnBmxXkNTfaMe39wy5mSzvHGf",
  "key14": "65pmy5Stf9VZhWDQaPzHsT5f2QLDEL6zLBqj8hvHKPJ84xoaeVC3CxXU6znFKMEGsZnSKJgMoRsgF2faRL3YzaaF",
  "key15": "5EbWqgUaQWqYT8N3kKEDsdNGW6JZD2dgadnMBbmZ6d8EZ5B4MdfGn4hhdzDkoBtpnPruSKei7kmv9EcfCXfmuFfU",
  "key16": "EHgg2S6SX2768BmximKxAWKkKYNknZ3Fuw6bSvrMRMYX6ETASvYpTbCwkbnA6VCv1681rFA4mx29R7zjnd7tUX5",
  "key17": "2hxm2qig1K3h5t9TfHFb79fGqsFzW83GHRhXKtzvXHUT3NLr2VWFLjfiSvyypXFu8tif4p6pfA8ze2Pzqq8FQWHJ",
  "key18": "49QPyqPzBfEXj5jCpPwr6szwdQpVTKuPuWJDP3bZoP6s3VfnqtKA1gitKPmtLBo1mjJYcGrFA4htbuHbh5QcMRSn",
  "key19": "fVHqB1jjqrgduHhtcrc2VLBfwBHmSyuZdL1LNKgqBMYcw5vLSMs7tJ6nQdgzpNwNa7RWUcsCcgZtCkmBV796cJw",
  "key20": "2N6pCreTTYSFusQ14WL2fh2n7QWMVfALw3j3HtTbumjKKHRXdFpyAhGQJHXJTNYL1mYdcdgbUcvxzFF4dmF1PdFq",
  "key21": "2A7WnYDm9hChRnF9wKPhhLE48jmQPt2d4QqsK5NKSAyKxaADmAokvsJi2ifkxP1MdyqhWfMy4RCrTcPA8aM92dm4",
  "key22": "4kggTwFj14hWKkHjuGjVnBCzcmz4vqYcncjGcprwFQZjHY63WweJSpGYsgbqgSadzQLcBEinM8LvYMm4ny3JE52G",
  "key23": "2LrWi3RX62yar8mXTfeE4kS1ybrVXNbKMnuVL8D7332oDVZQAhphbDgqvzQCn4Ahnvjtgr6s3zBGMEYWx4xNzHne",
  "key24": "58dqsZzmZoh7dpVwSizm9zFKMHqB944LadK5hqNRvLCE8pnm5wg7xA733GK6T6uFXHpGkRRfoM6FNRfaS9S2nPy1",
  "key25": "24VAfowTDvdjxL5SZw59XXWh9ETPxW9EtRSBt21qcEQ24QZtf471YNxSPDwdHnY5D2YpmamBRxZEVxE873PK7Ffr",
  "key26": "5yTxDgu5kHD4dJutykXCKDsCfP24YfF9umMp3D8e8z3roAwfRtLhcw7SG2HZyui2hYuk8BAzVx2SRZMWQMw8Tria",
  "key27": "5oz23By6J4wHNFiFuhNLv3c7PauePy7vFf1DV9FWsoAnZ2FcBGbGGpQpTLWjBw2EumfU9VxULXe2YFWbRn5rmqFV",
  "key28": "5PjRH8iEWYUfjfCuhychxzPsh4EJqbZpfJwV15KmN2T1PSEAZWcr75bYw3bjarFey5zv3rHb6g62jT1YU9F75EaK",
  "key29": "3Xzkq44v7haUxkV8DdM3PdXGNozwChqVmai3VG4WSign1yix2TwyWJiSLQX7yP2wQh3b34M6YVzNNcF5eX6LEAvo",
  "key30": "5bH7pKw4PGCnAH5PvNbjdmp8cKboUr9ZLZMufUxFf1cs9tEVSJCgWtzPQ11CGQMmgZTPKS6imjPvS5qPfsBwJwAG",
  "key31": "36oKXEUfh4tTKGJffMutFJgezyoyffiGgDw6ZstM2bgZFvbEvV9Fr5LvyKPSGdZkhfxGwVDnfgjNKVCmvfgR7Fm"
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
