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
    "2sM1zLv7do6SAx242T7V3d6DG8cQaj2vWk1xaqgcWenWd2xrbU6hnNhc7iRSrpySrJ7EMek4YPXCTbCT8Gp4knw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DxiRZCrXcyUCjDKZrwT1vdWqAa43G4SwEPpLFZ631X3XDaxjcQtanjPuFmZe2XaY6gXTJunosk5co15E93yziJx",
  "key1": "tTadQBmBYMdp7xYFtQXpSRFXi2yQetVwFdhRkZXBz7XvnHYGYfbZfELnmaHCjDJodPfFjeSqWNTHPwef8QgegB9",
  "key2": "UoJipndNW6RbtFHiuQW4Wp1ZZCjx8W3JSBf54Aeo1Jwrbw7wcGDfMn7pzeqLd8A3F69Uc9sWpZWHwLevX5iGjEA",
  "key3": "22oEjvxLxEPouQFDdt8YGqPSjbthdjbWXHK59UP3WugaV3cU7vxTGDzbmdcFJjeptdHbKG6WuQeGZj3HEQiAPd6D",
  "key4": "AbavJvvMrFX2oFNEYoJNyqkuddJpkC5wggwJc79XaTgXxW1S8rYe6rrPoJArGeWzJm9B3ibegHYLiBPW1Wh5Unu",
  "key5": "2WEzfuEdYgFbPVJSBM9GJW2ucjruYxqJGdo4HP6PXrbkEBb7ihdvtG3Ve414ABo39hACNaVzGbeqDStsHBE5mPGs",
  "key6": "3ucq5EsSWtTpYLYHL5TmtEDU7tnH97vtriMtkZMzStrdQfiCGkK3ZY5ixNMnEFBaupr2cvCez3X2PEDSJ2vP6FNY",
  "key7": "5BEVq2mu8ifLnApMJVF1hh484iaPQ8fs3zVpPnTa65R8CLqR2RD2WK74h9RLGWPiRntppxdro6WUgD7Nqvt65kJ8",
  "key8": "4yUU8VLioNCuFCNovjzvCPYpzoHiNs6Zj8iWxzaU692zdS8GcF4duPnuh5DxRwJ54Pex2UPhxaVm6szxDSb96toL",
  "key9": "gmxPJwTrLFsEKaS9izSXaiWHjXKUnsuTnuz8RvPGCwAuV1G6e5toLeCSkg8U61Dr8YtyzYnq2yoGfK7m2wQVcKq",
  "key10": "2GCtCbpvN7f3XtGedrPRBMTXAURZ2Jvw7ku4MgA6Bxbkzsu1Au1kvAqLVCYXkgWUbPve6RDrkhre9tr6tb23HYwD",
  "key11": "hJd7VhfSSj4Vp2KHarnQ3JXUwCGDYmGZvgA9B6U6ZQY4dy2aY8ZmKxWdsALV2FHjnuPuqZvGK5wEGUvKBDJDVZy",
  "key12": "3qDBfdWGS6rfNf7KPbavDDzDLVa3WutLaVYbkyTiarMGhNLy1XAUFKehPSqrtCzWx493NcPiLSnEeFgFMDD68dwY",
  "key13": "2ZfRYKMsWwKJUEjvnCVH2B24X1qg5d98Yc7tDavpDsnQ4kvSnatzRgEhKBTWmyrMbDqsMaGRBuuCJiWFeNYmdBFn",
  "key14": "2o8enTWPrRxGsEk1EzPSgKkHpc77Mi37XJTWYRjBEPEys5ejVD2zqF4XenPF4YH5XL7Qe8gZwuFh1kFdxeFaonhb",
  "key15": "aNJ8s6aL81PbmBq5qKahJA1ewwWzaYBF949D8ha2XLci9gokDQo1bBMZqziKD4kf3qnTQPQWwiuStBGaxdB8JL9",
  "key16": "359J2wBiWih6PrcDc3LizxAbcJuGQcSXPreJvgKsCH6SMiQ9MM8ZwfNo8MYLyPzeMTSMDJoEkrNgohX2U3FQ8XJ3",
  "key17": "2o8t8zBH74K7e4F9kZA7ZYYRTeWkkdV1x5YMiG94wgDX7NGraJzrgJ4u311UBpDcjxm3NhZiqxkhFZGMCXWA2qed",
  "key18": "4xyv6Jav9Kz8V8aYjGnj7dBYSqq762oyNb1XGnN3naq3SHTeyfmJnQmvPToNvBjUN81QRBKdAA3jeSBndKrux8Vf",
  "key19": "2x2hrpA1BnCk7qrufu6VEPhdSZAu8WPktj4sSTiFc6mhzetuyVsfiAybuHW7NUTUFmkfGYQkR9Fk6n97dhDNMzkX",
  "key20": "sXphkQ9FqB11odabP9hrQ2Go1QN76c7FDuoTLv4YwruMDKT2ogfWCoS4Qr1zkVptZPsrNRZ8BBJAv8dXAPfsLRR",
  "key21": "4tRQTFRKkfR4oK1NSEQZhrGqYHif3yrYsvfkvyoNmQzD8KAhZpw5A66RRE8UCZz5UTeHyUknaAjgiuahyZVxMiez",
  "key22": "5U1t7raMNMYbicbaj1t5M1mni9en4wDGDEL7YxQtPZk7P5YZV2MxvfQEMjk8KnMvVtsdCF2hhkyKFWSnYeBqmMZX",
  "key23": "2j23eAFD69GwCTSL29Tv8nQY4LjLfs36wykRmHrfFD7RLeFAkt5UetQoCCKyaDxuPQjmTBgCXWKJJRsGGU7wGvtb",
  "key24": "v7YueVwMDU3LCz2VB5ffDCTQ2Rzx1mea9Uscgio4nV7me62YTYbw9B7u3qShyjg3kfH4uBp4vqZJKSSBPXJ2rMb",
  "key25": "YkAY8bTzW1zzT4AiBLc9mpyRE8knb6FBsAbc7KAKc5EsetnfBMUZjM1UhY2HLcChywXS9PSTpkEovZW3gQAVZWH",
  "key26": "3vDbqf31R5eeLEiJA732z4wrfSGqfaqNAsLB229B2GNYUcf3fAEG8pzwo2v3ue2oV5PvydsvAdN2wY3NUJkyMGaa",
  "key27": "a4a781LzobTZtRkoqzQBtuvhyBkuzbSYtLF6JFuVVfFcUDzYLnad9CCpfNzDRbSLEYQGADRkqyKKx9Un85mTgTo",
  "key28": "4PbteVPS8bEfngPewyPt4N2X98mrtMbs4cidxQ55YLBUsYVVx7CJmX5rMeqmkkztmBE5sQhxuB2fNfsMr7wTjbcw",
  "key29": "2KXRbDymthmCsXnuv2VPEqZFVZ9wP7GsPEnf7rsJveDnqfozZ95URy6xgi3rA9zWbYRE9M9zzriDGTmXwdrcag3",
  "key30": "qEZo3CwjWY1MGJR3MeLTnDC8w9CHH5SpNWUER3ocpNWzYmtaBWvt1rtAtfyibRJHV9x2SAZRdujs3nQGWTazRED"
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
