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
    "4Rn6UPNdYnfwcEHLaCaq2GDq6AhcfLDxR6m6NnqZ2iYN5kd2yYKiGViHxRY2Ja8GZjF2EjxwWvyPJvGdGhxmANQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UjVuhKG52SLqn5PyBco7HFChEmWWTmEub5bvVA6eJjgJfuFQNgKsAcViE4eChRCnyP92EF4fSZnVWF29BzujLLx",
  "key1": "2cENfptN7mE3V2C8CMyfMx5DctNkBRMdxeBLcnt7Cn7zNzDRYa671yg6syJR1jmD617BUuAf5YVLXRe5HcxmfjWZ",
  "key2": "5N7SKVDToeMFhfnTQbdDtJD3Zi8TFAdWQE4LymErKwdDz7b97apdECpb8Z3Yq41UjpsiSNZLPCG6hPvVtKxHD3LM",
  "key3": "87b1xGxHQcuSpLjGmkMCTrQ434uTuk2M2VTvg5Asw34syPu2vseNdy28pCes8TfMJcr4GMw5QvLEPWZxZPG4o3W",
  "key4": "uLLXAL1kxr3kNpUXYnQbPSURcjbyhhWvjP2XzqiHFrCYaih1sT6bCH4jDJmWFqmi8zy6xHDoVsfDpZp9K4nhdzt",
  "key5": "4XMbaBJrUPRmuAmQ7vmSSYgGwqybhsGLY7BfriVjvEfyoVUX8Z4E5YhE8chC8VFBf6aqfiCckW9iKPPSzkySm3tF",
  "key6": "3WwDdgK1BuazrtW2HiAfQjDrrypCuHU7ENN1nXb3iMH2WHpNTm3KW8ypvhT66J82YdXXsDxLmx8aF5cyNzwV2P14",
  "key7": "3viM4QeTWcxYSXHjjUh75zREF5GLWdamHtxfsodGXPesdThZbAUgyx2m78AVuukLuwoy7mkYZijVfMZ6fSjZqvtJ",
  "key8": "3RjpJzfzDTdU38H7k8kDXSVbzztpMJqPnNJQCx8GXbyfH7QdDE5DCGSSFR5fZfTdx2DV2Kasm8MLFMGe5XbVB63u",
  "key9": "4qUSnp2pZk43dQqWwkUM36nkYyZvPR6fzG1PrqKjtj7dgniegNRRhJy4sjwxxwKW9AnDBpscSJHSVHvSvdR9yJNG",
  "key10": "zRChvCj2KwvDJav2dFmqu11f29EGyxpzejGzPTrsTWgC7zs8WWoCT5Pr7umo92xHDZWxTNA5RtGLYyK74Qq2vxu",
  "key11": "ZeTGzRGKW1PFm2mp9MCbwmXAy9pSrikmr4dJZHc5nerWgzWaXZBatiPeNrRR66krmzbUvDQajGfFZzjHrt4NxL8",
  "key12": "3t9hxhjzSZwWPREhGmVd7Qj2E9XJuf8bEsxLuGe5bgJg8Gskpbsdg448fN8cb4xNRMdCkBpAfo1BJpphiSkYhjwN",
  "key13": "3ZFrqqGZCEC4URRdMejgN117PmeAbodHu9Etnkfa5ywy3dvqs22bVRgZNwwBCdsj88aTNd8NxvUhMgjt2Z5N5iEa",
  "key14": "5ynxS12Txi8WEwzwjVcH1Cf8eSzfjhqKnWzCNoGvC4YjEQYQ6Bx7P9hJHxHorzqhZVTLMmcHd93moNiodKCDR6x2",
  "key15": "3wejfEu3U1CfjmBHB5cESCqPnwRCFmXRgwSXyGAhMHt2Kh5CGA1SJkckV9HnxApSqJwtMtPDE6Fde8tPXN7CBnJi",
  "key16": "5xtxukL6g8daaYLjTJP2ZYMvKxdvpNaCTzUkTK2trX6wYuoJJ218vLXmzQUkyrKfs9F3djkRMVo2Zn2JL7HxdRDN",
  "key17": "23bu7wGm5gEJ77X5KSuH3mNgKxh6BHYEUTFhPtbsfmrVW5z1DnTyY4HiCU4gSQ3uk3fZxNT5GRJyRyhqPpCDgzkQ",
  "key18": "4TA3BwuaUZ5fB76K3SUEJUnnUd349g7p1nayMf6crdpJ27jAxuV2KU8xuvJFQX7p2qX5iYqpEtbuSYpgyUmRMzaR",
  "key19": "3vphcNKziqAM1WajY5vvr4RBadA9v7sX9ci3cRhqcbcY9MFaqfQ6oeghBMfo8obn9DHF4vC5ovGPV4VSq4oHR95i",
  "key20": "3bq1FAv5Hda97D749VV1AJmntpAxuiuVfGxrW64syk51wQfthLUEjTGkh3TX6A1EukERKHofgHmLLZa7QjBg5bDb",
  "key21": "4TZT4oJu5UifWWbPsGhPMfVCHCeMBCEn4xki2nd2LTNeHgUnDwhVY4TANJQ7UUemEKaG1cUh8c1WmGXfVnUsX3id",
  "key22": "PDmUfvARMd7i2naY6gWRAFHrguuYCaQSKhcqXxkhy1WBX9e3zcCeqwvQwXKesic8222YwrzDRaz2LeWMbFPzVEM",
  "key23": "5HadjQb7KzM314zY3uacsW5r4wgaEXoq1cckK8XkSTAHZtSHJFVabr6Edw7LQoMWdqiSss3F5FMiL6533ycWf4AS",
  "key24": "5A6nNPSDRYRApS3VzT1CGNvhGg1o49NA1XDdSLvTWgcFPpJ1NNzNGN58DygGzGnUN22WKpcUAKJSrgZGooFEycZP",
  "key25": "622VZJctxsgYBBFNrEiRoLVjeMJNpUnuLdN9rG6h3uBaBYgKuNQQbFePgrn4AivDLbCTu51RkJjf6AoQPBABPCEC",
  "key26": "9EYuox5dNMEY2soSricMbetDsreHEaq2PiYb2hctTuEaJptHbW78K6CFE8euuPBqw3Kb1yPyUQSBXzshdtKfWZg",
  "key27": "5Y93qVkw68r6p5YUbuAe2k65WRvRj5Vi8sZ4pFcGbitJXo73vNh7PF8eKETWtHWyCmFqPSYDsHU4BG4jx3q2yYvB",
  "key28": "5LNVHkyaULNddESScjGGT87vLxDa6T1Nn9vewz5v1ySNwNuZcaojqFGReiE69Xm7bLaxsyTiPgujNyGWP6PB5DHS",
  "key29": "3u7uzWj7xfN7znXmyoAtF9wwTTWCJiNFvSSEB91umDxiGeNtsfC68qoh8dYU71cH7nP74iCAHk5psq45KhXfJ21j",
  "key30": "4XbFxLC1u1ES6S6F3SD2E6HuFwuVUpNMS7mqHMLEd2CujU6USHfGFtgVKF398UzC2qHj1dsMEq6vvgZe9k9iVznN",
  "key31": "4JR5hyQQhJTm3fKaHVg3SNDdSBbbpwLgazpjLgLzzpQ9q2YMQwHr5UgKSNhQvArikNqK3kiFtPFYB2twnYBvwyEy",
  "key32": "n4hNYzFyhJpK7ypAhh8r2Nm6j41LhEjgQEh7MYi4Jo91gD9WxnPqF9puZjNRwvy1LkHuxTsSGLwLgo6fnsoRfLt",
  "key33": "kF7shDxyi1FJnvSTZxLNrhxByNDks1FzxLBdPqcqmDYHJtUhbLnu5kqDPjfT2BdYyXUQ7fcfkA5Jj4pBv6uF83h",
  "key34": "4vrocWSjgwTA4zgwb4RFsvLbctknzr5CzFUYS13CbirmQXm5i3tigdGXeNgK6j9v5uwHAca3QmAr2DX7hDdocQsf",
  "key35": "5tuKyGTmMEBmT3FFrKZF2CzUZ1j7tW1QAuFRnDdmKAtBqMjnpBBgvUveE2PpA8W67qRNCUZHkt92wvfUMQUsbfL2",
  "key36": "9bjeN4L2epVTaKXrqES49PUsbP5WNLXoyTcHZ1C8vSsrFBCZJmAPwXxwvez6sxggTKDTPjuExwpxF7GWwXzgHBW"
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
