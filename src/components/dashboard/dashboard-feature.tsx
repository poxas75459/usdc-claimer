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
    "24upFeA16LaxeD1V11YmLFj7wb1PSxo8gD8bS62sFiifj3WamcfR5HMnFfZBijtoKACdKN7gYnAtxVf9YPRXnKcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64rHnppegPfxpbdWhdodSunu9eW5YYXR1HEVmtpsKNvAU6Ta7ds9TpKQFZUCJF1ZNkd913vhxetQ58oRk5ouw2wF",
  "key1": "5C1dMds8GaWxEWWcvuSRnWnuiwCvaaGcowSvzUuKS9JTvphBUfSM3o4dM2deGDrH6X2GbBYL8FYYu87qJD6D7KiY",
  "key2": "5Ds1dXfpwFDS9QwLzKHoqFmPVVZoAUyCGXw7Qpa8Fj1u8rpxSP77fB52DzGhPGaLrgTen2T1iDj4wSiuJERcJjeq",
  "key3": "3saU4kcUY2Z2o3FbqMU1TmryVcSEpTrsP1LJuGqmJGxCxopXnUXDT2RsmCLoRSdpWcAGJkUJ8VPu7QzDpLLh3BEQ",
  "key4": "4tAPfsxZd6R7TiY3poAy3jToHRaaVR4aFe13Jug3FwCwk43aTG6u6e1zxZmvpqPLNwdTHV2J7ajA3FGVv2q2aoZ9",
  "key5": "5zHxGoVx4RyhKHkXAcAWYwSmae3icYhu1rpYhN4EXWMPCT8SiiTztiwJ5ebeeNgcGKXhTFVXf9QgXBUN9mnecq4m",
  "key6": "3h6msWRWtFAvWFV75NRXnt6KXhZccab9tjhY71ELGoew6hMsi4XcEy6m236BSpSB4FzySr5qcEUdyuWBBRA9xeLJ",
  "key7": "4adfAgj88by9XT53jdsH2j7SYwE8CaHDDda2SvRwjuWqYqaqHqxTSzxFafDh7DUBaPmuKcxG8aV2sBB1TeQUYecd",
  "key8": "2U1aK93Mqsz9TcD93oG8Su7SxQJ3pVHTuvvMJb8Vp74yr8xsrkyejb1uVCq41VNMHTxCwPHGhBHRK66GwqqVPxey",
  "key9": "4Xk2PGAJeFkCGvnpaurmDEwWDxbfYYRrne1VTLd6VjyajMCbw6WtXzhjFCGnTiu4n2kBUN7168wD3S4zsP9nvb2m",
  "key10": "vS79i26bbWv8rpSSEDf27uU2PZqCfWtPeuPQsg3w1ZcYQ3Reb6SeFmbkY4VpnkTBnKXAtmMcvPBaNwBfhE6FWTt",
  "key11": "2gyc2TbLC25PKWEhyZtw18ren8qu1A22i4KJJo3xH5XnpYguWfayVmjTzyLKgUwkSSmYc7n7LWHaHyAovFSHKoZm",
  "key12": "4JQj2EFjJ6jVTfosLY2SStxo7H7CQvpwg6zTA2P9mNzdUGKMVB9D8bGYvGn8mqusFBiWWYoe1SHgpKdoT1dPDvQu",
  "key13": "3VXStacSx74RdjkSS4pHeBF16zaSoSCLSLCiDgV9spwnwTGMwVeZdY9F6VAUxqBbqNZDTzTBg8iHQ4E4YeD2fszB",
  "key14": "4GbuE136m9qc9ZUScEsQ6rh5B2FYjRw5mRpMNHyKxw1FsPmEt8ponPfHcTdeea3BmFzFt6epBnDZhmMnp5Vsvqt3",
  "key15": "3NzvoxnXYw7hJBFUphsk92FddyM55BEskmnQwbMrW1tfri8uAnNGsFAwstHPEvYZ8fQXv5FGidB7jJwWzQFKH2ga",
  "key16": "3bvoTmiPpGDpuG6KiWyESwHK4CGQRrhyCh8ie7FtJoeXxj9GiRjb2PeAqeD8xbWtrFikyMeyhmoWy3qPQGNPr7dC",
  "key17": "23yMYLMjM21nVTZjBD9XT89Lzsn986Rozuf2VK2Q7zwuwKs6xYH8AVJYmhYERoP7YugcLpLVebkS4JZCCPTTBHbU",
  "key18": "3hQ2vNQvQ4Rkrhecgo6vAodFVSAeGBGsKvnFY8aAbxSFwX6sxK4dNhhBeegUequk9HoYyo7YPQMJxo6d8V9Ldf2X",
  "key19": "3ebsf2cLkJZxBVQDs5u8vmEZpzteGtHtsy6E4h63VquFjvCTDbPEkAyY8S5pF696G8f1dRrhsE7r1wDLFGB6u74X",
  "key20": "2MeCPJZkKXNLxNnA2S18xWydpcYd4bJ9VUsK81JYYw7Ndwt8YPxS88Gs7B6BZUiHLSb5mSnRZvqoyBfrjvLZFmWe",
  "key21": "4XHDMVnX6hn9WRXFFmD3UizXxUbPwtx8YWjmiXSxGKgbokCpHgzTGrLra2er8EKqwMbZNcecPzoYdqeRuvfRyBs",
  "key22": "dDTaDiWrBCfUK2Sum73atP4EbQEnCg3wDtfmBPTsm3X2PyXpN6kSq52kyZBMzzjF2Ut416DqwmCfxaJw1nACsts",
  "key23": "6KitXMRvqrGqz9wuz36WbysxVHF2WC4oUBPM6PKAvJzqSbuFynXWGXNCoKHNX6TZQWxQhdbajE8Xu1rh3FF671E",
  "key24": "3jZpGtVBdb3ZZYAPbpcdHwz7JqGtmY3nYVvWJc7nDb9jfqYHaUh2ZKHmAu8PJivB8nQE3jJ9DA6nQ8BdmtuxMv3T",
  "key25": "52m9x84c8kYpLUzFdmomm6CYiu3JHjTJhiuoXjxUvudCTsduMgzD1Xo4eVNv5HoaaCquEA5Vjo8w5ZpAspRW6qpv",
  "key26": "4ASBDbqs5LE4jB1MHX5Xj64KiqxrhBBNfV8GgT6KuQXGbFg5ka3aqrhjKaQZGV5nep9R6jRk4fGwW1e87oHax4JM",
  "key27": "23NVBYsPkJo6tmXTY7zwz6E6AE54FnYRfPQMvLnv3rZJ1AAma2rmRdkfGRjTxP4U4wcPJUbQhB66ZoxcsyZwrqSL",
  "key28": "5423Q4UNUMYncCrQh7wmRdbxUPdAq3eALjgNPTzAdh16Mf4ZZ6sJ2JFJzwS5NVVY8F6bDv72Bgy7GSLHMX4rfqJm",
  "key29": "4XVzaCxhzBMRdkaTk8XGuUTxvNjZns4R2ehnkhY6ZsyXm55uZ4ePnrZ5ga9srmK7fPPovn9FXa78dAUuvKHLv4u6",
  "key30": "3oNndyREFQgCgR52ENhj7g8phubeGKhnDTnUxknoMFiUC9k3GhY761A4TWGucQmds1D4sj8hc6stdVkqPWyAkNDn",
  "key31": "2k5eMT42NpPVmkC4Cabcsf6YKZSaDHd66YWJskd2P9Ly3C9NL198Jq1hFEPtZe4bQnFnXWBVwCuAZvD4K6swuWtn",
  "key32": "3g5hoomJESRuum4vt4WmgzfHHFNvnPhjyPw5XkVcuBB4WQ58jNpPm6VyctgrghGSAM9h4Ksvka6VEZ8zUC8c39du",
  "key33": "51tsU317MYHxkfamN4uAfizxpGNrMPDhZKKTminLa8UaLgMUhksUHboM5949iTFaxxoDv2xR6nH6jbHM2747RJAe"
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
