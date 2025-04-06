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
    "2pHyysXiWcrYXWMTtux9wHvHkDb1vZTDEGzbcEvP1VyfuaY1xtQa2GXANKpDvrwNq9HFB99d2LkG3X15jknyFhSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2neC2CFEUdcef1B1BM9iq4seKaQ9bJPqKsXdWHKZFxg6DdVeFCFM6XhZAR8XuJzmX2YfaPwcBUTmMVo81KhMYh2C",
  "key1": "DhkkmfMRNKZ1tCgGeBhbsSkrRzABchmkzxBr1mDHnU37R4x9TriFN6gsn4pJM2TqHeSDGePfeW67fLDRMUe7XR1",
  "key2": "5x33BRmu51uzxivBwmvFg21kTGnfj4DXnoegYUmyyu4xywR7VgkFBcCYpbfDqvBH28NHnC62No29LTn5ANdWhH7L",
  "key3": "2376QjrVMAUQLMXyVN8UP55hGeaZLVr8rSuLaz56LGZwPvu9QzahRar9MohuH4TpfJdbghggS2jRx3hwHN2nZ2vt",
  "key4": "28Txuteb79V46AYdP7gvkdwuR6rGzfNe9bxE2ZZdcKCyUTY2HmTdg2VYpbCYrREgSS8Nj4Empnkm3dB3c8cga7FD",
  "key5": "5KGhpM5KDwmDWyVbA1uJK9wL9BF3w3d1Ku7eeV7KeY9NM8mk6JPE7Q7cRgZaNHYFgL5Pkv6LXqYdkPHCPD4SVEbo",
  "key6": "4MhBVsEfkh5jgmmFt9qmYn2AQ9Fv6cH23N4HZQLA5LJZPNR3xoFfzFokhjo75QdBAYbr3anLFfLZnGm38yUUhcMz",
  "key7": "28nVwX1nsWQFPSjdE6z67RJxxf5zDEQFNijbPDdBGvuy87HQ2WSKrgAf8pG8R7ShKv5CdC9mVkqGG4umvHVyQou6",
  "key8": "gDZJEykmPdY27nyU88QisWGDwTAQ6M9mLUzN1YTHnPsnBY3ftVeZhfsjxWXDuHAvWq2DJZPSDCm7aro4YFiZ42y",
  "key9": "2MB7VZxdj9aYcMG5wcdtwUUTSAwWNuYACx2Km7AmdV2yYUXUwCgb2RDXETQ3m4XaxdRVNMMohJoGzYJMeAwPjPUL",
  "key10": "2CSubd4ZRszdn4Pnku5iXNN9qpuieEDdYKzHu4dyGXimvNipP12jJEvKKZHUiwskdpX5mA5Qxex398Hebvmv3484",
  "key11": "nrAvAXCLRJpNHUpKdStQDAXRq6qBXenwuKnaYWkqet4DW5qH59qkme8YJTVqNM9kufVgaBqhjJ1CcRC3qq6AeRk",
  "key12": "367NwNmcRHNxHuG8NZahzWEAQta3LSr95QbUCRFb49a7L53ZiFhAXgtCyHA4d4k8pQQNFugzGeazZYmeHRvrRuVc",
  "key13": "31hXmNhnJbX9MrawieeyMUhTx2TUmbrYSLRtvgxbirSLYsGs58NYb1aWYai8G6rmn4oCh8oaV52T5eWXAP8AmtnU",
  "key14": "5fCAmNmRd5FemRFMzBRj18QYhrRLk9RN8rf6U618K4DFpsGSh3SHVKftVRbtvPaGCtmxGh6iBp8vv2DQx2Kas5rP",
  "key15": "5Y2bMddJMSr7CXt7u3evjuy3Pe3LEMUNhpjiahpMqZJPbf6i74kZG1BXXPiaoecuNzmx9ge9WRmhfmcHHrTxNwf",
  "key16": "3bWdRSsZtn7SPHhMz4yu8AQybgHHXVohNaLCB1XFUHBCijn31fY3N4zGAUexgZY1QKhKhUjH9XiPfhoXTzXpKt8y",
  "key17": "baop2P5mSFYmBaGgn7V9QezXmtxSmZnuRtvKqiGT7djxEGAg8AjW8MqQj5r3BTcmLHtZi3trQBRH8ticNupAiKt",
  "key18": "3DBWBd96wcDsDtYhSQM6GUj6N997pHHcKrHgMagjxi2T4dWj43AMHeWF7WtKAWehBog3iujSFakwmduX92Ve1jvq",
  "key19": "2P9YQKShNtsPR2JeSsqfunXBjpqVcmiw6RXhwzb88omH29HXMYWtmd1UVJwjwgXBjeyeVa2VFnxFNxgqVQjzzXwg",
  "key20": "3UYDgAGcJhkEcJZuF7q9jcvm3So8QfdpywWkBonyzZxZ1UCx3DN9nK61zZ33pMrSdKJ4FEJuriMzM7vQ4rd8utTx",
  "key21": "2HmqSixe1RctwyJYw4GQjYyQxHXcSu5KbzR7eEvtzezJzi1xTcTuX3kaYcqidpvoByPX9116nggVzdpA2FtZdoKh",
  "key22": "2SRQENt9ApV6NERWhBimg7dKFs1rXBn9sMRgQ5pKtsUFsmZq41Di5WB3QtrCDL4eUwj88zFuZvc9uu5an79D26Ew",
  "key23": "2bbbj56g9WZF9Q7tXxLTmUcffmTMoWdQ7uJtpHRRB4LGDKdKDLJ8zbtX4K3Zr9d1CEpspaiqqB6C4UUk7i73TQSr",
  "key24": "3K67z8sbMePRYpuVXrr1tJXek599PAFTRKQCN1kzeZUCKepjUcb5X1Nn6Lpm6mV4iV8zaJKoUTj5osppN6BNDNKG",
  "key25": "5VUq8K5YpU9fYitC53ZWUFc6YF9W1ohP91xr8z2wxpKRHpmzU2mexdRxE49paXZr96Gsw6ciNgwGSbXq1Tioa5XF",
  "key26": "578jzJ3vsetxmjfQZvCCRoGDAsMF2HsvciLr42j6FPXECUAm6xiZ9DMrWJn7aQnCXrmiEdSJpZ4K1pTak7SNg65b",
  "key27": "5nXdEHpzJnL3VDbnnKPbY4gTXwB7gJyweMdxs3TkmTLwJ9yrUcK4JaoGZRUTZwB4yZYTx2SmG7QmUzAV64NqLMre",
  "key28": "3MUwfsc1MRc4HSHBpsEoAdiD82mtm6zQhj5vdfRojo3SR5P1VUAMyTu5KFMECGMWzfyjRMVXBmNf3VFKGNZyDQFa",
  "key29": "5BoLvy9SNLiVa4nrBBz6KcqjNPmyZbWwkhTG8WpKXwBMsM2sFxZdqL8zyHNxBLwMsDVosUxPdyqPsw6bZUrupZKA",
  "key30": "3zZ9DqqPMXNPL2ne72gG4AMPRKCR7sBjQXByiYM4wk5SPufukfPJf3cd5pyg94XqCp8zQc5qGA5nGYH7YAeQzn1S",
  "key31": "4rvGzZGujw67SUkso5Wa28frBWUZgpd1A6d4bQ7NsEvSW2dpmuMrVYKt5jPCrWrNpB9ZS2oK3mYa8dNrCqWwWuZi",
  "key32": "2xUeiDLCetoUyEhGZUPkRwwnHRpmTo7Nj1M8Joh1vQBbXLPECWeycQ1AMBge8MmdRQKhNhALrGX5BZaKZ4UhWKBg",
  "key33": "4sDR1fZs1YjcKZV2bdaaDRaPjDwC6ESBccD98WuKWLADz2RZ9gRcbTB8NNXro2oSR2uSoU6WrHn3xqMbGKp1MJTx",
  "key34": "q8DCEadFq7ncKGxqmN3YYs3sroQVvbwHDD5QQKfhuvQnfLZz4ZBFZuzZMo2iWGdCdF5fe7vyTJ5CF4341wsdTKZ",
  "key35": "3giBBVSBzkAE8sCtkucvz3RYSCuuYCXWr7x2sVwMhLa5TYib4FmrPW14c8gfJECxJSwcFDBN5N1NwEwm1jpyAfxM",
  "key36": "5cP6Zqp4qnZ5dUYXMwnEPU6tHwhowXJDVj2vgzkT8GeusEvsVyUuywBcAgsSqguVyR9DThvSHWjHW1Mt3CLmkpjn",
  "key37": "2ci2JipfY6uCz4ABNwWP9rwEMBqJnJHq2TwYSxweAfyo7k3j19vw4bLyKhKnWTRLBt8JxigcMkahHVFoVbMLeUia",
  "key38": "kJgRo7SZKFBqi9ii9BYdmyTECHSEkgDAFo4BcA8cca9sWTtEAm7TNijhjqxqNpuECMGHEFThJUDbBQsB6GZKMt2",
  "key39": "UuK8zjXstVKBKBvREYAd5yQVevTTNfZmPfxyC9TFe3dRiT8YEc8fsC2JAiettkUkg34Qjj67wRd1zZcbbtpLNmN"
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
