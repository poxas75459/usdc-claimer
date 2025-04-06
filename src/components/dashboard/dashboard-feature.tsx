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
    "386os6Fet7yStH47JUQh71BfSxbqmtkaB3iJZD9VgbTheZ5Pp82NBikefQw78UCadKQ9sx2gHXebvKAJos4FjFy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34VE1vnAg1mX4zfAiVE4Qev5rH8j59T35owMATmxz51KyXntsVjEPuDhycEuwdUNaa6jgMEqTrxVL8FQU54chbJ8",
  "key1": "5oCWqztQ1cZzxs4dhaJxHUtkppg84doLHN8Ru1PhdPe7WBJybDkczcnX47LQdJnwSaSa2Bc68G7AwDnZjL6dvm4v",
  "key2": "5RgRpmrDvCsAoiPff7F3TjztvTAXm6Wawdb5yWkEns5uHy9WFdD4TqUSV92vEvjQRZJRFo6fCu3JRH5ArLGSyazT",
  "key3": "2AVvBCNWAwPYPt7dUXXSWEMRpHhJv9LZEfnamurNmW8sRTEyuVSzx5qqzzijZYn25rEEJRKtqMNhsbgFrmCrfHjt",
  "key4": "4cR6T6eQ6bvaYSNgztqaEJRUXz1pm5bW2EqLwEXxibd6mqnUnhodwAHN9uhvch8dRWikxRiPawsQPCpynd473Sfv",
  "key5": "3SxX1ogBYHhuD7YBtP5tCpP3gNKYvE7V6NHbyTbJpdQyULDJKNnDDoiYaMuEfMyswBUQ9FdscSCukDNrdvkbjW7S",
  "key6": "3qyp5TnRpCtE7Fw7YicVgE4zkeW8uDyZDRPAQaPFFMaYtsEUJw4KHsPuFAUvnb913Rj8tBsfCfKRaJaMfWsKcF1L",
  "key7": "2t25XvBvj371xEyq3aa7G4JQV9FZZWEpJoVXePWgkBHjMahMHGzP3ZGV7wb7QgrZhcuday9XEAamEinL3SJp1vzt",
  "key8": "4E3pXuRGfsZNrDQdob2XdS87avULYSwLixKAvY4JUYGapZVxw741CHvprJm2N11R8XEPVJaP2QChg4tQ1RSqGAGN",
  "key9": "4WXWRAXWioWtaviwp4CDzzGwaMWkxQxo32GVTwmYfRavksSurmtWxF5BQqu2oWaB39axVZPfyqUkysGMDt9nk1HD",
  "key10": "tdXRzD9afmmriLbNFzFd9AB88YbX55EbDQKmx4yZihcaHrbyj9B6mcf6vEGSXzegaDNE5zEAydWqJZtsztj84af",
  "key11": "5JM8v4r6YEHeDRMF5QTJW2eWxE7CtCeMof4b3FkyuvhtdR2GPpjtM7KS5BJWjx4H9VrwqY1UiPvCHXRWquSXds1e",
  "key12": "27ApNF3QcvFb6iicstVJQ9vrjct1JoG6tucYWkXfizA2Unf1GXpeWLxSFveLKXpHw78g453AgBm4jy1b23skatiT",
  "key13": "4dYDA13pP1Umocsk4zsRUYRdHstwpT5prZXjR9VHCbQm3Qn5o6P98b71LsWHPQxAx9HsWF1CEyMGE8Pr8z7VHsjF",
  "key14": "pojJ6ULL96XPPsoCU4jZiLKp6i5AujfJwue8yQxJc23to6F2pwmkRn9QV4szVZcmnuSW2f5uWiYvUPu3kWrfR3N",
  "key15": "5Nark37JpqA4JH3TYnAiGBBQcouyz9CHYinN4WaHssu1aBmMu5A5wtitYHdFHUb1xLoRnGFtMbuAQAa8DLoz27UQ",
  "key16": "2povd2uspnYpascrKvhcgoDhnAXLSKKaAyctN4kaMzJby4Juj5NkXFWczJY1ZMureNrb7YZaA5h2bysn8e9xeAmQ",
  "key17": "3wXYRuU81iWXAaRBdkmYD9nx28cfcyAhP6RkwQzX5LQyhRH65mr2qkTkorSotcUDHfGyaZsdraYemRSF6XjZgTQg",
  "key18": "2sTPpQxJezuJmoL5tTcqtwG4vFDtfTDD4ka6SoeojCP7MBoPMWihpPfNwDX1x6WAvrF5uBeKMEia4NZzhw2TH6X",
  "key19": "2ZW5kJ7AqaJvq8hKSU54VSjMc86kdeHNXdLDniLGiLHb2pRZL9wDFXXPYWYWaFh6KNHDrRDJ3DRi84abQw4vSK6C",
  "key20": "2QftKBdMwmMKEzK1kDuRzjqXZdnsNE3bwCwEnhT1AJ1CttpSGD7tqbxnxsYRTPXFpjx5QeRUnsp9GuZJRYhLNRRk",
  "key21": "pN9djGssdXJGstvhJUD1hUjWZPvqMd8AJBTj1p3hZT8A1qQfThEucdzrgwfxxR9hphY8UPfPxFQF9T8RYyF3XtE",
  "key22": "jCmXftzdP6UpVyFn6Ni1u9jTP3LkXhRA9NnJ9Huug7f3sEXqDieXjrF7x68CSR3QackDTcra1cCRXkSJsaANV9C",
  "key23": "4omxErtTa9K82AuHD8V3uTPALBHtc6fKyhBWiqSVgLaTMJhK2AZU7R7E49kUfEiJRPuDfjFtZmAdv7ESP27F2vSG",
  "key24": "2uMVtd3j9EBrqunzeaHeheLRSsqgFeZfrteEDDJbdvcQ6DgG9HgRhhWkj2dm8qnWrU9b4ScP1XcWpb8uFEySFiyK",
  "key25": "5TMint7auxWdX9Q7wQx26FfcVfXh4MsDMK5yLe8ri7RYWxffAEaXNv5gDWhoTHJ3LXQeyUfsMi2Lz7r1z23HAvtz",
  "key26": "3Ev9F1kpxX8BvMh2THYKNBGu5GoxxojbDRLUwDNGnJTbLqZwWQqG3EnkuJ5n52tGBqTuZyi2w8jiYZpvRgQjSz9o",
  "key27": "36B3jr5ncR1RQhD4J8RyyDcyJ2PADdAWdpA4xnCRbXEeHvNduteY5aP7Tk4ZWxQNTAY71mTmixBUNhXmjuKcWvcH"
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
