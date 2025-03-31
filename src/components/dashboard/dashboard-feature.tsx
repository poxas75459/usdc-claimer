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
    "2zZmsXLqPE2LFnp98tCAfE5wsiFh3k9o94UarR23HyyoEFQswQxYLknvjr97MGY428bUkrqcnN8iMb86ipmMU9Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GB2Bwaggw5br4iQaJdTx8mzfkATBozF731sbUhgfWkcR41UEnZwebwGberBKgaxpkxotMFGh3RwvgtdQ8TJ1RPu",
  "key1": "4ZmmwouC7zMXcA2wqsxwGArwHeGqb28xtgjsVYpe9nArRo47VknFgm3kaEVfytJAEFVMs428nRCtcWrw15AMLvaq",
  "key2": "2rnfc38N24JywaZaJ9KgidDgmKsubpDBkZDYyL5GXPvvZD2BDUcs88TcgJRJ6fgqRWRZheKC4cC3nagXcnh5T1z4",
  "key3": "2ADjE4QzBySsEai9TcHkivRYW7w7U9FZCJi8WGJUDmmuZLysG5bDyCnyE2UNfReTW9bw15EquShuw7tTe4z3qHAJ",
  "key4": "4N9B6sr2Uo87cev8GkF9Az7JJ4qPa4U4Q54qBvQmGQUg1oosa65oE1i4ZXSZvnz8H84bryccYdTuvB4qVTQipVSR",
  "key5": "3dXj4yf7xjNrtU7sLjChFSZtM89E8NMd8P9rgXpoteZyECMfzVhoYrv9TaTJPssF2dSK5cFdS7MF7CuqhesbP1Df",
  "key6": "2z7fvvmpz4k3Ph7XB9PWes5gHiMJrznbJxjHHC78Ny9qan8S1dJoAbmeZt4wEroYMwUtwTuy2dUR2ntG1gkgivo4",
  "key7": "28NzyuJdexpL64tZ3ePmuavXZ4RT663PpSCJr3DgNi4UdusAknDcd14mrkhByZkPA7LGM6CUMTajkdqW2iBsxG9y",
  "key8": "2NpyzqyB8Mr2H1E4wEcBvSk1mgvqChuYsqXE9jKG74i3FtGsD4SJoxcyQn2gNUSN8fFgHjTamHPxNu8tVUzTn8tA",
  "key9": "JQcgUyDFWxEvvVBvH7kyqtiABcbKknNT2BG417ntbB3CwCF6uUPvEpQG9Z1QNrJZSuKNpVkzigAka5hjzCsKydj",
  "key10": "4DiENGPWf7NUFG7DkV2LhfZjegeFyVd5N6iMx4U3iDmq26H5DvJfSNZMyww1Qb2PF9QBn2Na6CBTF6oCMNcNdCkf",
  "key11": "3MwuNG9EDoRiMB5xUuCU2GrpL9NKdDxiXSMqnjAQkK39S6bhcjRi2M1Ajd9uKsrK3krhy2eiDzEDVG4XM89M699D",
  "key12": "4D2uhdhRP7Vp2nibdj2wuGAXRt4DTH4ycMMhkcAudoX7eVshNrDuJLhvVVZMDnRJvq7LtgHCBVbMSxpuGwikF86L",
  "key13": "fyQVop2wN9sayrjpWEc4Q7sM2fYpSknyTV4rwDFpAMSSMq1GkyBVyuTmggvbkRwovk8uB5QBkt3kZJ8xBo5kuDC",
  "key14": "3DYCuFKFcQUGGU7hn8Peh8MKD3Q5TdZnJcEajwvT7eF9TVvaYKCasbbLX7H82Jf9XcKm4V7kvUs8Lqq3ahNZvkEw",
  "key15": "Csmf9f4hHFq2Lymxge9PZvucgh1ZGph4o9EUjeupvZVTJWS1Dkh4FoHYFHvu1NWxt2utx2PyKrCiZT8fXqibBDa",
  "key16": "3xAi6Pp5BygcgcWgwtJnh4zgEkJ8a49mVPQgR3yQEqXoFW4nTUH82cJCh7v42VQrkk5zFFef7zxry5cEnWjwhecJ",
  "key17": "sUkJ2pe5P6mTRhW1LFAyBXvpEKneaG2s5rLzwFzKQQbozXRLHW2pHXBPhuCLTNV5s2zHSWezS7EvN7hDTN8e6gh",
  "key18": "67AArwHmzL99yBeZF3KSe7nEJ8dSoVND7nkatUyTfZarTJsVg4ejS9YvNk57nxnuhP5H4nuysPwkkvqWRPBh5Rvj",
  "key19": "2MXYDFRchfzLaMuR76spa5c7D1tBFqupL3MQx85U9tDQb6Pq4yEu9SP2xRxeFo3qFurApmJhpZ4GPxgQnWRMXeBA",
  "key20": "4UKJXdouZyztCCzykdaiy9ued1DWuxbp1vwzTLPuHdwUNTuGytfe1yf2qBNRGDtiUctpXJs4Y2C74qzVQFMhHwuV",
  "key21": "4GTBBXfbc9KUtr2STjys8B6FS2XewLwizgwgnbUJigQ71rLM1Jt7SVbdWjtMbMQHN4HS8aQiNekt6QesNmnmf8BG",
  "key22": "4Fch3TGbWX6goAyQ3vmbr4SWDbaTCurWgSQKryr6MitrLCPLJwNhcXncRYykBW9cJAWWCLBR7c4nyiC8sAkR6hgy",
  "key23": "3Ejf6m82tsECUGxwAiMB9xTZjELDX2JSpmE5oU1rQgsEPHLfmxaL8eD9fw37dFEGmz3P5o2vL2TkNEyW6N9riB7f",
  "key24": "4BWfcbrnmhPoyZV25cCsPg763tkQps8o2fG8FFc6EcLNUnEPSMfuBRUNAaxUPBahtPXStb5gGgU3fDadey2VpDdU",
  "key25": "3XLtqE3fiz4U5tcFXDc7ad7ioWp6v1fDmnjPCzkpiNYevqFCX7dQ1JzMeD58zDmgVVw6rHSEKv6koUT9eZivnBo6",
  "key26": "5LSsir7Eah9R97BkGsPpNDq6j4hvZ4RjosgF6FGTodF5VAdNbxy3x4gYrgbVXh7GC4aRH2NqEY6VEoqFr646eXJX",
  "key27": "2V3x615c4QhYg6BtJqkBXwaQdNqCG6empev76UUtYiAwfmGHY74XmmavQ8pPWmdcR59vCDZhTmdeTMY5DhwP9bn1",
  "key28": "mY5ELqNcXiaYWVkNrfAKveEA9AfDsnv5mCJ9Ln4wDumoksuRGGwSk4gFYMYcy23LjNtAohaLm72CRf7m1Vgx25U",
  "key29": "ZUW5wKndzXAgqZL66LUGDtvJB5Gpeda73z51yMbnAnGC2DaUQQaPd295yaAjaimSS65KAaCmc4dXBPheRrRcGse",
  "key30": "3hwQAzsi2pyjdKW9XR2hvXjqBEF7YjMCH3ecfm5HQFfx9KxT1sZM5SF6DH8xCvEdYErjLEWZEFUGv7BB4joRctZA",
  "key31": "26L1YvGRxDABqo1okjxcmuoC7puWrvsu7kU3frvnhsrNhLcKMXX6DhjihyZC3FBqDBa3yUhCGTykCZaK2PLJ3KV9",
  "key32": "DhZ2R2yCPbp3Kc14KksxC8igbML8DmcEyrPZMwCEqX6vGLCajyi7cV69w1jYQxfNWx1E7FJ5cM4hLc7D52nKztD",
  "key33": "435Wbe54mjAJwAxkXb2TCHaYuGFtZUsfvepwXuafudkD1jWDpceNRaoGqVcSQBrab2vt9vBRFmUm7Mo9m14qJVqs",
  "key34": "4GeLU2XH5FDhDxzWKLbKzYi1STCen7yMAGvradTwF9hMsTdFLRZW5nX4L5G9zz9NwfFyc1CRcm67JbKCAA7LkeUP",
  "key35": "3hk2t19VPrDoVfZGq9pCwjhAHqvQRUt84kwuP7wVKJcuKDLWGU2MgWSUxST3vmaECYtstRrD9jAn5PbBQy3Ptx3E",
  "key36": "3Mc45udkvyWxyskPFN5xV55ZFeyvPDHsmfpuQs5JoVsdria3uwX5whijHhq4EELj62TKpdk4jXDCPFkM2YKfZ9NL",
  "key37": "oiemgoJ43HwwJ5zNM4yZ5ZyyLXpxrbZJPrkehXCGv5EtWTZERAsSk1V8KL92zgAoaAvZcRovVsQwV1PvP7tJQhM",
  "key38": "5bHUxSv58G63U9jbe2h6aoV6v23EfmqtJgPAvaYPAoPispBQaCQwtEshrQm22DyhdRYq3TjVU3MPnPWouFTue6KG",
  "key39": "3H8EuvtJWUCYcc7eGcup7uRDqMnz7m1uDA9m7wa5k9GRCm3qg8XuSTStUHErJ5yNGBHXKgDCjkaoSo975DBuWsui",
  "key40": "3AoVNuregAA7rhf9hPQcTeGheoLnjXF29qLTck3Ej6vXsCB6PLA8rvbP7UixyJ8LZWbthZ39af8pUiDqENBTGJSV",
  "key41": "UiwQNRiF1vfsgWq9PZ6qqyxAP8AN8XFVarxjAkvKPB3n7d5uhtUS4Hsotp5qp5cU3oGpudHdHGuZ2kZWh81W4eg",
  "key42": "69PoYk2SEwCpaNuFbCwVGyV1HDemuVmjHuMSA8SL1G7vVdEuiVPrMN9xXuH7Qdo4VU6q9antzsD28zyaLoLQZ8x",
  "key43": "5E6MCXFquPz8qdbAJicb2Xmvum1MBddWUeUtmALPxeHQGWSjv8g18xYpYHYSD29EeSamHR6so9gRUxc2oLghukai",
  "key44": "5xHHyMtzevqiPZWUPog4MNAc3wix5HwrZzvpXGsmZ1D2akqpn2yFkfTCr4FqAVuB2hvxRSYpa4JYzHpC3xtY1sus",
  "key45": "2XeeoH6SX8UbwSZK4dyS1REXsiro1C1uNCviFdwSCWtLVczQAYQ5PoVnjW86N7Vgc9Tu5MqMF1fuufyiuJgCHnQs",
  "key46": "3X6fraWxEFVP2H3k7nGs6Q54tGFMBh7ndGnkxqaJUCEWUrabJwCM99foiC6QVk1F4GU9GfiZpbxTY3pmAjNkWM4t",
  "key47": "zrrLHQ8EHSagNBaiUa2qHd6mVS3kynLRHuFsD9VoHryzUJho1gLmfUGXuWTSRAJw5yem3WBexSb9s7v7Vo8Psuy",
  "key48": "pTnDLzMB6wfood6nF3oZQRoTPKWgSeByX7xM5vbRYtqRSoJZvY34ZUGNJfWunrcdVgcgpKBwy54LZbD5cgVK5Fu",
  "key49": "44LFSaeDKRzqhzGYHkJ8Zsh1n7dvSrfEE1xj9QNFCKcJbLtvQHBnKkt5zD6Q5yz549rRLk2qwDdbQ2VWyKhyE2ua"
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
