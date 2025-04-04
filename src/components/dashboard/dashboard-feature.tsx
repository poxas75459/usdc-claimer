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
    "3JKSHd7T6DGNUhEmkJmi4FWMZTnNvZRThzKc17WfLcBvdAnsbeADrimGZSbWqm3Dggi1Ds7CQs5MUud1hPnP4pwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eu4iJ8XWG8XSo2DJCtcmT9NznjShu8wKLDnk5uFGFKYtuKhu61uchpymc8DUaZ7iVehnJ9NTJdT8ZPLTE157fp8",
  "key1": "38QNCh97sPQthBUjwNckShQpBb1FVcY5EjLrKft2zXprJFtBSiqpS1SCvHGX2vEtcfbUWCKxNZWDBoq3tT62fBhK",
  "key2": "2pESEbsb97K4oyRHWi3vtRuVgXaSVW6b4HT65SjhwXaW3Ax1gXhrdkzAn2Li8nVD9927hZPRcuan6UBpXcePfRNV",
  "key3": "3SuvvmXbVPaP2MkhstNAKd87eRhApko1SetnpM5nfThFpKvhxvLf957xQ78yFCHPXhPNE1E6gcUky58FWiCyxpJr",
  "key4": "51MSJLm36qgxCQck3cRjoMrTJWYKBurQY7kAArBEqJfKSeAFsNqFhKYgX179TXoLVzCMaVgZzhZaWhC1PXJNwn3K",
  "key5": "3gJjhMfr4V6ETdZWS3qgqhbsA3zJukJKDmxJPBxm2RoJJt82JRyeH5YpGGzyU8navWQ5bpv9hi3dYWda4GcGhDkV",
  "key6": "4Kd2aDfjE82rRTAka8cpFgMFeJJWeUnmcE6UR82ArmhfdskShVdWiH4DrMt3mv1TJBhjUtLhJsF4dg956TdguGx4",
  "key7": "4kkf282xvDZNRdoR9boLYtz9nQRJ2AWLqJJu17RCXgmZiqkAHJELjvfR5UaJiyX9oHS6ZBwmfA9UditKkTioeqQH",
  "key8": "2eDdwnVvD9CigGsY1kYPuzd1CDNSyF82oDKCNfX125vLSvFaUTF8aTDfVtaxs12mNTmtLxE4rjvQgNZ4bJUGKgdp",
  "key9": "5S4fTqXVeR1uXaSa3A3QGnN6UivkBTyAgEtNHQ93KX1Dft9UsYtnUgSNRKZQoZ4yyRu7BgYG9Qa8N8m6d3cDzTUF",
  "key10": "fCQ3snB6RuS2rya1kqufRrzBNgjMzW4D7WDE5DnpuNV7CoteWCrybNDDGDmComF8fX1i7JZhDLwLve7432Arxsb",
  "key11": "3X4h2PG6vRepYLtFsb8Fb45GFUg5dK2pV5iWBTdmJDyFFmHS4PrNqxm3huqtBS4oMzzhysfk5Q71Ke3WWfaQ32xZ",
  "key12": "botDFn558CGUJHaxVkZxfhEWKFfnEhVkWGC7jsTDFPUJd6q7Y2bpkkUmKicuZjitmRH3WacFkTvpFyHQspXqGzd",
  "key13": "5AZ5CM9c8qSqx6QnEkNC8nHemztAmZCVZ6DFAJbgpJkLBP41ZRv7i3HsiR25WZGsFSJS8FGkKshszzqN4LoGUfcj",
  "key14": "JoiX6mgNAiZUwB4FYtRGmsH6QQbu7nc9JaRWMWyY4CdcPJjCwHCo7e2nAihLThr6vaB3QJ3JLKaZNUZJaKZeVgZ",
  "key15": "5Cvo3FYVGRpg5ANa1NsQTFF9iMBDbV8C7L5jwsuzfFgMYeaqJd8ZddA3Xrmkth3kkE2mJ7d1tkkUYExRLpemU1pp",
  "key16": "39ZQdVAmi5dVcuDVmP5ffpu2ccy7i5RzGzNPrirqLVWU71tNcpK6trzK5ufTKy21MbprU3K6iYD5eiAUMYS2Ym8s",
  "key17": "5sHWgNQW6XUe8msfzKB8eaMchitZMciDfNPgmp3d5CjkNRAwMKJ75eJKXPNowYrb91ajPmS92ESv2aMKyCYS2mE3",
  "key18": "5eK1B2smvFGPcmGgThp9vK7Zz3CYyVSUPU8w61J62nAz47VcdKRSdWJcSHeHKyJiDSTqX5zjzdhBJCuW4foeVuKJ",
  "key19": "3f4jcCTJRnYUqKp6EyxakJ4U21W2tBvMjenoH5hYPGPLGNzRLs2VC48oV25S9ADxv9RijuS4A6J9CzEC2JXCkfuG",
  "key20": "8YPTjJYeyfLDgnR98pKd3hb9WEvw3tTKFWCyi429p9evbxJxyyRSmyicB7jBWd7EEuF8hVbb3FoUuFfAFdGGpeB",
  "key21": "3rbJfj6fh6HTDTG9Qs7193X2XXM5x7dV87iL4kQE6XDGS6gBFYhQ8JKnr11bAtPcpnT32b9YGQCWGbC6gS6X4NWy",
  "key22": "2Xu88RDnyYaVQB8uSm1ps4eBKzih4d5jcpZK5ALtDv2hEcdSJzNSrkZWtU4KsKDTz3R6pkZ4bDTnBK9Q8ykxgAZo",
  "key23": "bsXjnLU8BwfboBfMfQTb3G6YfpncU489446X7Wk3h2T6j1iu5vycCuM91rchDU1jqkzacsji3DqinitR2dacDAs",
  "key24": "4Bn13fTEciomh1daVCKDxAsELVswkSC5dbsrrZShrzZ6UjTJzGo8GZs4C2Hqxyd3k5h2q2Q8DJPMpGQsm4z1k8Ue",
  "key25": "5oA9tSpq2jedXNE9u1EreyXuwdPyXTCshMXzJYRrxShtTMP94hmVnJYxqb8nDEcsZT5mmsQSCJU3WbRET3egfUmP",
  "key26": "4Uc77cdmuziUv8ncC1xMmiPEcAZfeQtBPmA8wCWvYYpPgsw7PzRNqtrysBiqstE5kRug9GkVJZHLsUHHDqjm68Ex",
  "key27": "3ArPDdeZLDUt9XA7v1NuJRygXa6LTVdteTFXDXPnUJz6HarUNJFmQ2WTU3qvAMNexo5caDBiH5RiYpm5X4Q46Bb3",
  "key28": "453UwqzXfyi9ys2CGBDngAC3BSvsbUsY95JMkpNYbQfTzAfEQZjYVKTQHyTXN2qBLtdhPsBici5prUmVgwvyERmW",
  "key29": "4dYAAsbvemEXrjRVg7S3ksuTrYWTBy3crodvmJ5D6YpZXo2JijdeY9Gmkvfd2JG2DyKFmnNiXqEWUykGpZVKbkPa",
  "key30": "5fz7Bg2vMrghnWVkTRQASAgimmQXBxZ71Yv1VLtthwiRGfcHugjgw5WUhQ4W98iZxqtpkrAoVxDGNL9u8RABzjU5",
  "key31": "3Hq1kKiuhfzM8vf6yzKxQ2wkLqVyWRVrz5vyf3gM2iLykbJu6kpReZLd3cXWfJtzjQTLGTG7WiViG1tPVByg7kfp",
  "key32": "2b8KaAUa12KCsGFhkcUnZPUtpAXLxkoFueZEu67vzHCiVnR536UkUD3DbncvaVSsFfNbMmRFa1X6LM5ftJsphrpc",
  "key33": "5Axxdnond1jCpYSSb9ghBRzjSEtAorJTxGHtPPzoWyHBsXxDNse5uhc3RL6NnQT1HETpGXagT2djeaLAqzVAnyKh",
  "key34": "4LVzGqGKEFsAYExjCqQUxV9AH4PVRy4VdcTGyxo13PyUTPRLTdNextk1JW4uzgRo9vJGzJQg3pFvTvX4tuBepmNq",
  "key35": "2zrAgXDmCKG6w1ra7EW9rGPgj2A8j2Tw2D8Z5Tnd3vhF4qWbLBAgpGpWpngBVtNXmQG8SZWvEu3aRf6MLLhNKEsQ",
  "key36": "5avwnrAEj3H2LPf9BjQAgSjZPSHSpuPVp9FKKD2Y6tkxVG1uS4Mr9gxr5LYcVH3oio3R3ks3hHW3xuEgYD7tcrxQ",
  "key37": "DBUdgZtkMci5W4gGqakgCcEcV6ZXcFj7MqpkaVzVC98aJKcbaHutwFHKEWJYQf4vmmmNc5DweE2ZsZzEqrmKHtJ",
  "key38": "55hGmvfdhQMzPgfmNrnMCoUBAFyKxPYJZfpghSFr82kaa9EjosArxBCLggMhsxwkUAKrTDwj8XDBm2D6YBxXpAUv",
  "key39": "2xiGP6MnmtE6zZH8BLNSSdpCpQbtjyLQ72v1uZTFcakhX3mJAyBNXTRPcPFYsJqydsjZ3uumxvwRU7f6KLoPCtMj",
  "key40": "4nEUTXSSLUbY8wZUrZC9fFmiV8o4XUMPeZxL7qufuoFsRmngSMaW2kYqRLUaUTtLbNjYwrn2XbXePY7aCrXsNbB4",
  "key41": "5zKWtNMuLjacjC6AasJKvCL69nmmXJRiDufLvqBKSG9T2AzAQzqdurCggmgFFfL2GH8NmdpurutnLkkoyttaVX1Y",
  "key42": "2yEFGhLeX4g1eTmHEs4PhpMmHEyGeh2ggYAT3EnghxLNiZSekWHJtcE3KiWK1BcWqFad24hMoNmZzFK7nWQy6y5n",
  "key43": "2zeqpyYzrULFuqUbG1gswsidNYYv5CEdFT75UZQ36MCsfgFF32VBMAUmaBpNkjdEmSnczVA1EMPps3ELkx7TcRaG"
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
