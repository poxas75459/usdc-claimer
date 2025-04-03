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
    "59xVQCroZXHtpK3xd8bbm3e7hShrFcosZ7Krfsugaxs389ef6Ub42XnsXoEXxSPrgRA8qXEEizD1W56ZuCTBDb68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVgkNBaDmEybf6K9oT9DDpCGRX6rkuLb1iJSuxufrogC7Y7SuspHPUhEa1F876pK6mm3BdiMDth5cM9sLpEbZD5",
  "key1": "2MHBMgmFmM1LeKsrPRJzE42QJpb28mPa5VpDpe8mSwm1MP7asCkhbRE9tP1yFHUxsnUrCZ2cbKeMCvKAUGNRvvf7",
  "key2": "3gWgtRmvcHgK2WJZQuzVe1EheXrTARjTnrSucMiKrJ5hyLjmyua6aWHw6iVpy864HxMGbBkfyd9QabKLxX5RZKis",
  "key3": "2AyTCcWdRKmU8d9Y9VySd3v4s7QJkZd9DU97QPbHqk3jWQY7UDPHSLpbvbh1fC9qdBoUkaHBCfBvnh1RRXxANwov",
  "key4": "2qep6Ata1wYWM7p1UPoaTFavskPeXaVSoF2wU8mimFYrJND14xFW3C1zLzei192Hjd3frxQNfkUAA13Ctr1fsHeD",
  "key5": "4h5KprceUEB6zPKX5NNWnLvLtM7jYZzbgNcDzqQG1C595QAHh1dX72qGPispp8KAN7qY752MGt7tLjqpunyGdkQU",
  "key6": "dnNAUEs5AHHMxgANXqCMNyTjnVsxg6RX5joQxQRApKQwdtkZhNot9XmsAcAeAggfcPrw2bgxt7d9KS6rdDaAQqq",
  "key7": "5x4z7hLAz29NqNCrq6pVn6S7o25TrgLgs45tempuYiCjVUvLwRF7PKZyqfmCNt7QsVQdpwgfTSiEqtngXndEarLw",
  "key8": "1aYd88YvB5P5YVLYdVacuXMjKgUwB6H1XpmtT2mb6bHrp4qxQhTj54yE5Qa88yEHmAuXC19H6a6bKrz2Jd9NNp8",
  "key9": "4KhNuqSaL21s6L6xJcqZZErQTiMi2oiUnNm2vSbi6VWwRbBHYHeJszzBeWm8AoguT8o37nMbWVLBLozGDVUAxGWx",
  "key10": "42cK95jeL9GgMDifmKxU2fdYGsEvuhjzsaHj74j54suSynA8tcoQZaJEkAqBYnFZarFAXWp3HcD2ATzs796kibhR",
  "key11": "2Ej6x4HPyeZvoVuyXLiJhtnb6kcVb21uVwDZafyN2EaReCvrHuyyPMQVZk44snNwR9A3UVoeGtVcYMBYa5k1jTK3",
  "key12": "5BnbmbrPvcqLLGAeQVSFQ9LyYhpei7bafMpET5HnAo1pZzgqe8tA1tv2VXF8KB9dGkSELkWpSSTGDT8D7s1QeZXv",
  "key13": "LRie5CsZLpLEE8LNgdQpxKCBstkKJ7sY2Aeu1rvjCpV41pPp4sfAEsBTJspFV7xRFwxkEK9eUcpwVecEymPutmo",
  "key14": "3UR7kjzE6barU7MwCbwxL5mHcUGVh1A7waA1DARtVFfVzjiKTpSt7RB9xNzNb7StBbZc1RfVtVipEXvxcHi3sPQo",
  "key15": "5Gx8EzNDZdKMLftQLQj6STraGWUCL3DP2PEXLvH6sHFDEzjrBoA3nysj3yRqkPWQXoYXrRzsdETKsbtDN3M8Ni9B",
  "key16": "UKZVUkyWCK6Nw1MamcCaNZbx4QfQd2ygn7b4Kx2f6g1heFhu8dDmhEzRjh6tXbLqwZTZfeBKpTqkL362sQXm3Sa",
  "key17": "3dtR217WdToxuJSZFZaE8epGKTA4wWe4tkG83tkeWGw9Dp48gnwsYSZmVgggmA1nsPfCnaad22D3K8ey1BFup3QF",
  "key18": "4DqUXWmbUuxA1yGJ2nKrZcfF6R9Z5ZC7aNqXJytkojWqiKbZX9mbWbSSViHSV1XQmaDqjFwsZp8JWKtdWqHmR7JU",
  "key19": "4NraosHY2mk8tcHwJuBh1zXeQrmDJDd6yBvEwdTYzxFkMqYDg78CH7qB8zhxiJFG5ho8ZS5DjmuR2T9EyDHP7hGq",
  "key20": "4bK96Eok1dsVukibTiczfQyKszWgruvTJBYqwiafbA3XCYH63xsYqrVgMYQjNGunvjbjff5U4nHVuvUCWgUMJJ2k",
  "key21": "3ZZunjQn8gwNHjxcYbomemBxw6vLN6xcP5PPGopYF1F2FLVi8pCDFPmHv9WRnmA5fWDcZxFU6VAgyScWPpmBss8o",
  "key22": "4Cqe8TVHdRSaSxM1dxrF9yFJRRvGJsX8roz66Zpc5NRuSzhtHpFLsXnNUpqnhXRGyrchDiGPMkQ1D9ncizvHbvGw",
  "key23": "2z1veHqA7bJLX9Srs6RYnz3E9gtPfSFfxxZZWAm7nTN8iwd6scgHXeDZhj2S5i98mcpGsFmapzD6XcaJZPnDit7P",
  "key24": "32jMAi4MeY3vJFAa7X63mKR2b4T6ji1Uh73pUM3tHHasoAqNLFDr7h6k6MRLcCrRkTCrdEifGo5Ki9YyAYrgzqyN",
  "key25": "5e8xSgVZsCYso8L45FH9DuVmKsLNMpzsGJZCJ2DPnGhQoJTtwVYcnsJH6LqGst3xWs7WEiNFmi1JWLTNkSBEN7KQ",
  "key26": "2hpN6MjKKWnqJfYvAVLsJgkAqUpvqWS1eXt1KCRDcuVgGpxsLpUb52JgNFnpntdWgC66m672tpQmQCu3KCwNd3xJ",
  "key27": "65AivvrxcDDTyDpyHHak5PKL81esZT3znrL8aYA4zgd9agkXPNZ215aHeHjc7nUYb1j5n5mnpaYU4TiW3Un34xvq",
  "key28": "4nWbhLkZ7vVNctyzA1wwAxn3ojuUEiRgm71Zcnxzk61j3xJQfV8YtWd8E6sDbCe9rGH3ABvm4hqa2z7vjFFZ4wee",
  "key29": "515Fy77Xo513MHPJ7JaiH33QieeCAH6oEDD6wDEgPGBq5rVrJ9imGrBgGRmjUzHZ9pNM5Xuo2kcwjdtBSKFKnL1f",
  "key30": "4KiP2mJBoXtyjBMWAXpv4kuekV9SQANPBRD5kRQi8egA2vLcmuQ9AAgu8pYNHCQrAjrP9XFHY7tTPWaYjFXKimim",
  "key31": "4usHry1wFetRMfs8LXLgFeXUJENyPYa7rHWKXbXRkvcmH3wJTBkQRRVXoK8vfYFdaUk3AwMb6MLZeSSUUpLNqtpw",
  "key32": "5e8YK9njCQxqGjE6Xi39qU9eAhU3qq1Qja8zwSLBbxHue4GGsyg18AFxLzYSAhyxpWabVapszsPGnugp7uZvijKX",
  "key33": "rQFFajYkkanesxzpv4BfGpzpqwRzDJfmv495N7NMchLgKoJ3fKmKTJNNQ9SPxKezXE2mxtSfdKxWxmgcYkQJAZ3",
  "key34": "4YD2ExEYVeu5J3EsTXgNYXniB2VXZYkb348aLq7Nmoipq22E8yaEsQmsiie9zbpicnxmNzqRj37E8ht2Hrq2YCif",
  "key35": "5n3QBNpRRh7PC4EsFwhc2YpLqxbgSsnrhLWMZy3XSSMSX1hf52d8jWYUa74CumY2mmPwTdWd5z3MU8bVJXmjix3K",
  "key36": "2Dt624kG7AKdShHT3EzSYRQSX4m2thV1gGPDfi7qBip154nbSPL9f9eCHNVTTQpsbZJa5p1kosjDGXu3SDsq5e35",
  "key37": "2vxvnKGBrJYnHfgnzsBc4XTQQARz5xYnRpDC9MiEBp8rXSfmPSzDqsaozHppXXUVeAvXFasnHWDxMwWCuJRmP9pe",
  "key38": "2fSXT6ZJUNciiZdrJig94aA5tohvD8be4fMUCkb7scZGZNUY1vyEKw9Xo1KPTX8cR3nYgvukH2hHjc88SwY3smf",
  "key39": "HewSaRoRzB4n9BdmtKnSVLgbFqfbuyCM7ivYsBKxWfrDs9LmN1mb23xruSnpoUrgzubmGEQZZpFRCh9j9X8efB3",
  "key40": "295WL6d6FWpvnSdYpr5dQ9kqvJQMKKRcJD29SN2ih688CrPssdP4XZMU4QvjrD6dVsww6DaW3m389Qn65cdu4hvY"
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
