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
    "5fvDcJ4osuqEzQvzEssYn6kkUHBBkdhKbv8B1gwcLYJ42zR38NZD5154tTtHqcH2UdxqxmfGksCNP5JcuMAB8hmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBeix67KNFEhxZPSD3JUTqheifGtezxACjGjjY1Z2NcEtBu44zkDFVvQCqiS1QJTCyzFJRrdFnAVdYEdzdUuiUi",
  "key1": "663QZKq27bhn6vrvv9b2nNnptgHsQm4z59X9aGMD5jyxgvjaUAkTEQiqU8iXSrHXLzvTn7JXS5mvSrkZmH9ewwPg",
  "key2": "5ob3hCwWzqi8mgDvpUdLkYy3W6TY4JRhwN6dxhhCBJKhmsBeBUWMqrQLaF8dLpvCcytqRM6238h5hMTi4VebFwLi",
  "key3": "5dPaxtBq9R7cd7AuMLiYtPtpZ2CoaGoj1rYm5gvNoWV2sy361nfnfoGYySGV8mbgXSTQK9YhxCfSHt3ifeAE6L6G",
  "key4": "4C1K571tbGGQUHmJMjVKPGTxy1EUcXrzvccCpc5Z1zPcbe7BmKwbJrdRXjsfBjDKKh6KiDmWTvR5iFEEQjd3rnpC",
  "key5": "Dk1zCKU1vbnfLNuB1AXbmoJRTNy5V8J17ubQMf5w81DwTXZg3SqQnaXp8qe3Wo53sG6zHTeRMDoYeFKkDxYyNkY",
  "key6": "487PiVnZXKBDxSpLJyg5VVEiyjiv4BQCsGmrYRqKYq2tAZo2xmbUbGcyckS4jKsZZDM2bxHtuLjdKRJoz7oinMu5",
  "key7": "CLkC6AwYzbwGHWq2Kabee7u45PregPGSivoSh1Hh2dsSdg3VkqiPsYqZaerXY8jBwTrsBvQkDB7jgRYXMsMaRVY",
  "key8": "66XzYAri2VNFgE5UzYeQkczNAqQByBfeajsd98i3MTkprPwmMEDsSEoDMQAGQ5M62WFKLZudZcjDZL5g8dT6WQRf",
  "key9": "4UCzqjxNn5rQChxterKGy47GRBXN99wGHXqTvqsa2pNBkGFjRU2cRBZoN26E17dnnrNJrGKog5Nt9WTRL8iumWRs",
  "key10": "31cbga39KTwRbtDGfHqLggWAtV9u4WQa4qDE759B2xd6n67R1hVQycfyxuZXTynXLZgjaZFwiTJ81MoZi5MHLmQM",
  "key11": "D2mEu3P8uMPJYT3dhuPdMk3BoBK67U8vPdB6jQj91YujB5ufuomgGx37sJq9XdfJsoGmrBRrH8W1JQ5cnYoPNHH",
  "key12": "3Kwp29zghpopNLnddYFYyYckDzfNzuw8VaXiMHA4DhjDiaW7TE6MhiKePaMiEqnwkCejFJGaasPf4H88gwa8JUUZ",
  "key13": "4Zvkwm455X7Lcbpj6ZkyT51oWFKMqzzsrZ6DnLzroBpjwefMDXrw4AZJ6m38QJYip3SuAKrYskMjcCKgVaK3eh9n",
  "key14": "5sBCrE3enCvaePE96j3Q4XbkFZCf1xpWCXxFJMG8GBQYEdN8n1FMCxtWV3vCjbRTC82Ku8kmAaMxi3LKCyuySqAE",
  "key15": "3SGnKR1awBqDRjo3S5EBfzpbg28jgWGGoSnGgGGfqtirQoW72xYSyptWkRBPx6Tomx7JceRwe2Qrg9JTzr71werJ",
  "key16": "41vvS9TNKdrfAmvMS3eYgHouYxXRzhKFuzBP7ACa3XHPwBsymrojRpmQzPFuZtMku54uPRNuAp4N7Be6H7byJX1g",
  "key17": "2DjCgouHMPzHgEShW6zNuW7RW52rDLBpvPnJuAvn5JGuKLi2NEGsocmxgfKZ1b8eFhsNZxpgDtiSFtfYRYy6YpXJ",
  "key18": "472FVVNGaZznwC3GeZNW8pWeUCa9GEaqfGtdWEgvCrTCBnDikrMokPrSdkrx8rBSzBFNRpa733cNLJqET5Nm1niD",
  "key19": "2NPAVoQxcoFErdv4UTq5dKRyaWvnTvpe8yXadP2Ed2veavj1fGaZKpUQVq6UJ9sAQm75v9U2sZ6DjKFgrwepqYPC",
  "key20": "4GNp5K2qFDNKxsJvWay3i4kQVN92otuECKRETyVSrMqsFWaN79kpEC9tEaZin3LZiW44hFKqA36b6woGDkDSvPfy",
  "key21": "5sWCAFy2ehxuQRA5ed8uFmCY7j8CZviDmSokAP5kLb8PSR4gGiiZZqbnN3ZY1Jv4eCyNkDfKMawo72HtWj9fhnzv",
  "key22": "2BxPo7TPWaaxAsT9ZagrdJ7QgER3K1caYxFXLP5hGtCZkHpqXAcn6MWYHQaMKd6aam76H6h2mjEkfTQ7kP2cBagt",
  "key23": "2jaq8QXW4u7M3TXLVNrhxD9XqzgmXWFYQ2B53oPd2W5ZZAz3Ve49xDwjsUoQo2znHRFwy548ca73TAft2VbvAmC5",
  "key24": "2SfxxdMTo1fQQhpcwyg3JaqHrEhrks9F9WvfVkLZX13GpLgqwLUzKrYFAnPKf2ps5E4AobRUjw2QKYnYc9XoGReT",
  "key25": "57o9FFeMjAQY7pCvRrZYTtFLuG4xyjBm3Z9Y5PpaYWb84jtQ38VTFverTHMTvnopA6PJBuUaiooPQyZKcC5F6Fhr",
  "key26": "51vknkenDVMKARpGQXqjR941o9c6agvSGgbyRDbCU7HRGPkGVKcSXd2eHCJgNN3PJfTSTzA3MukQs1ZuBTTVEpsC",
  "key27": "4D5Knpfhe3brvr7z3ZAoGhQnX1XE4ubLmRAwaj7S9iauXRX6qj9mkLF6GpaNPmwEVtYhLUAEMeJKJMHWuwty5TPx",
  "key28": "4Kwgqrp2WMYCu2gztGx71wycNhEyeYYmE79hKpunQzK2TpNYzViadfimGhhUejrW7hgLCFik3X5AgsKDm5gjKT9J",
  "key29": "3DWVKYX2YLfBteaSffqWJG9BxQEA3rGnMpQ29DboYXaTA8vAqqtjADSjX6rbKHxZFnB7XDTKzyVDENZN5Avdpftw",
  "key30": "2x8p7DsKuEqJck9gnu7oANfd3XDsVyvCbicPMVkzEyVDgMNFQoLD9zC68UQWVfxPNLNwiCpvMNmrKJoNQMMvbGA8",
  "key31": "fUEpgYLWwWuEAzP5SptgfMDgSSeKXr9qmqDpcopy4wtqmP24QQr4gxY41SofRoDMmehymAc5uuYNDNqG4cUMNZV",
  "key32": "2FKTBGZpLYh5y8L1JQ2tnqgmemxfDNLipD62rymRc8oPKuxxrNVeepravHM3FTmQE1W1ST2SnucjPsgXFcoEPaC",
  "key33": "4HKgonmzSUdQCftUMHZhgZDFV3H5hgvM3Eec5r93zoUoq75MftrauvmtRbwWkV2fqYktKbEsLvGNgu8XK2cUm7YC",
  "key34": "PkLWq5aLpcm4AazH8PzXws5L6neiiRb9fz4YgeukuYz1GfubgvkDQBrV5Ng7snSTodrgNYU54SMQdWS7LQsSE7v"
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
