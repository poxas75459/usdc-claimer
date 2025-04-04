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
    "3BW2WAaeQrZWx7AcPYuCfTrGEGuXoxCPQb6KdsGdJU3Wyuz2E7rAa88kcXdQfLwzpUV7PA6MQPrteDk9y5Aj8Zob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S65YQBuJJp5XYoTpLQSEyxCJT9xBeHNKTGz7DjPvphWqQbPsTJ7GuFNLqwWqWCKQ3UxF65dwDweuDEMh1ch2VKR",
  "key1": "2PbnpLAfQzDacBBEbHcCrxgvk9Lw76sD4TUojKZ2rFEZkLiBhQDvCgp1KmeMcjTBKoQuKW49dgdDu3raHgsxjfZK",
  "key2": "5RhAMsTm7CMuT4aDdk2UU89TJNrW45VdCJhhtRZfX3EYCyQkrUEhnkpiGTqwmSv1cEJGvy5vmWgLf4L11NMgppcf",
  "key3": "2M9agorHth8WeJYKkNRR3fhMfTu1rwaNcN9mEJV5rohZFjJiAwBizubT6wnrHnv5LNT3LeFVaUzFAMS9cUNbxhFY",
  "key4": "2qtd1NYbbWXcisH8G6KbHjcJ2DrX49GDk9Fo6DekXNELyjBDBm48BF7KXNrAhVYxu98yHNf6AYBEoircfrAC5TD4",
  "key5": "4D3iJHSVFnMMKAMdoFHNrqvQhZDkGJrXXW2KYPdF9NDigUYkix1F3pY2zvDp9PCc2sW9oThT8Qpux1QDCPz1Cg6q",
  "key6": "3oDmEmoTGj4wf7i51LFZzqYpUi5yVGRut21LxU7eb54XgfAWmvvvHL8CetMPJfTpMJBRSiJhsZtBzJwJvgskg1Dv",
  "key7": "5YgYL2deVxc6xzeyniwUoWeSidBrwMmzQpjqTHUeWWYRk89jR2LfTwfFiiGeaequT7Y8iCAZUWJ9RPV2SfGzKFUz",
  "key8": "3RSedFoVwddLFBchALRwsUJZE7CHV817uRauKDizCgpXj79Wyt4fDyD6Wzs65UtPokYNWFJwbHdn3ArRrL3JNB1H",
  "key9": "3TMvUsWD7V74KPG9ePcUHgp8JzxhXSPjwA1uCs3gEGJjgvU5uE8mHpxmTFzNjAauHHpJvXEFFt1WugBa9gjorhoN",
  "key10": "JpSzVrGEdvFVsizEq4qGzVsTtP6Q9BmbhhcrC4BX26ajHHQSSrHmUntWS7W3rYeHdQdg4Ni2JaEG2krQ3HaPfeN",
  "key11": "3b4DFayGvPeYVLtVi9SYFXEuEteGkXZbiZ2VhN3sQMWpamHi2LTyvYxe8DyPTQVJThFBHFZEu2zs16SxmeDjAGjq",
  "key12": "3a5HWT5MJhcotS3adhCoF1SsC4FtGsEMFiqHBARoZfGFkzM2RSAePeFAS84Scyxtv6UKTAPnyaHJJ8xKZ2e6hWbK",
  "key13": "65etHKDZ9y1gNuAGhMQxLrXo4kVrXdyyxuaoJUd8Tvqk5jVFPuYHTx9AHigWafbbzQ6ibTs2QeVaX81VeL7VZgVx",
  "key14": "4LwfpxY9kRaotSqnZLZTQM7qhnDad4Zw7XsWwzAJtCcvZbJkkpcbTchYD84o43fra8JvwzBVSpM6NRGH346fKkUv",
  "key15": "ge9zKvRXUYwCCGMuuLtfjej1bANm1RuvchpAHbVhD4WkS8fH3dezg4ertABkrvSAQtxKCXc1cY8NrXo6yvFNzSt",
  "key16": "5wZkrKXLABKYGj5sYyiqRDTngxJw4ukkKy3BvkDzTaT6BLrk2W6kELUCg39SdvLkjqZ9Kp8oMYJE2s3dJ45F5Rfm",
  "key17": "PX3cB3NoHRCmNEnUMEdtofoqqxGFqm12My4oTFbfVPcYCzNN4XEUzB6pSkEoAYBm8rjGB47P2sWTcdaabS2QP5m",
  "key18": "3NZZA8ys1MFimCycWiPAqHjuNaWpzc6EhD6pfTZV4criTgZxcNbLCWRxcjKKSGpXmzN7DiUHkomXRy2qQiGDN8fL",
  "key19": "4PdZV6XbsPXgVCzzsykpTYnpp3TRTyof25KiZnXiKgX8F1XKqK31JSgsbgLxYcerNiC43WEiq6bXwWt4RtaqvhaQ",
  "key20": "3CgDotMNCnc5k58zSZmnsjmNXJqph1nVALbHFxSutqbGQskRRMmGdbfKzowZfZsoweVQWfoRhcXot1vHMPGNKowW",
  "key21": "msSe4eAKP3j6JXw2JTLjessG6YwM9saPVcBEHG1aNB2ZGLjSBxiDkW1GD2rnBQR3Bzbx9WfD3Yp5xwJS3NnqVez",
  "key22": "9Nwmx1RJR7LnbbiJGRqHCNbxHWaGVXdpSeTdw4N4YXpKfU7gALPq2i4M2ZLGVzYT59z9k2bLYwCCmPdQeNP3GRZ",
  "key23": "4u9uFYK3RFw6YqDeNPHc4h36XUKKikDE5htm2Ywiv6QkRwr341xgrMcWFTsdh2bxsTSxvMvn1HjZ857iMSthNzSQ",
  "key24": "5Djt3MDfPBN84UG2J3SuknSFdXd2EyqyiBzFE5xuh8CcWf6Nd22QD9FYNXYhEN9bAnSkwu28kLjfSQ6AT5pu6Z9Z",
  "key25": "5MmEjKco2hH7cfbRmDJoBS634ghQ8hzhR9caDqrvYK5iMdC2xshqMQV68cbTQay286HafZraZD5fjZrBKKbvoo2v",
  "key26": "BrRfRfmvQkrmg3frYMyo6TpUYaFRBMwWMtUsacVvjqoeYGQsXzFvWWfZ5VnNHiEmU8AyccDg9KmcUPvcSe99JT3",
  "key27": "5NmHCA8867xTLKGNDTNQLCyvsFnEobw2ADdWGq3iQmjMrGxysHLkzK7q1fnoFghq6uy2dzUYWVppQgFM62Q8n9By",
  "key28": "xR1gZUHgCb2XZbMwkSHteagF1b7P1FLmYXfCwhoxE33yB8Bsq49FDveAuVPL2feYdj4ZF3Linurg9oGWBHF6ytP",
  "key29": "4gGQyiGYgME6AteVTDn5NiRwjPakVbYXNnZ2GAqbqYuZBaVcK6K2FY37MFT17dwBXd3fBM9cCmhAeKfgHghUJZEF",
  "key30": "5y3qiirJKMq3cA2MZJVsEgHfsjJMkgaPK2nkQvBtMUGge16UKARhsuy8hW8VUYgoazNCd2Q4o1w5sSuBhAq5QJAP",
  "key31": "64VfRRXqKAiWBc1ELzvh1zXA5VDNzRsfYrpfb83h21jbW46stgSi4KkaEPgn6cPoEohK1icRaeXYBb4PjHtadNer",
  "key32": "2UXNkpD6EzvK4Aruwvr6CPx6btACECPENvmHcopZkVrZeAZvRUYDF2rWo7c3zTNfDWq7ZP4WnUzgqoPyf6WErFcq",
  "key33": "SCAN8EhmrrHYndJKMUXPaNAiMwUtTgR4ybRnLL6jTxsgPQNY3XeVRXL8AUNxyjHcSmT7h9155jV3Pw8rZPzAXU1",
  "key34": "4pxgPbshSnCw3trWSZta33niGKoSdQWFRN9izQ8nAZFSkSPunw84wfqimweyJhCJVRdxTA5tyrUuEQK79ytFDyXB",
  "key35": "23xdx4vAZWB6KTJtVSb4bTQJHDUTKXyVpYwGGS8wA4sUJUmmRR1oU1TbdgqV3R6g1xNqxA6YHZR9qwFJTdVfdWqT",
  "key36": "5pNmxh1GEkuMpceRcMGmws4FV7vANvsqcXbXYFqEHcfhF9hvv56BeRw6Q7U2HFxv4mbSwweLkszwWQPde7KBJBFs",
  "key37": "62BvVRhjTp8c9hRjWUiNXBVnJbbFGDYkXfZULdVjQXk7sPF2dokWWVWocLNVsg5ENhnLjuKDaHoLeLu1rmjuG32P",
  "key38": "5G7g2Ly8PNPTzLXhvQmEGEpxyUrmKDZEzQHmArFw3QXDwDHyxcU12GK4iFBZS2KU7ToENhfuZSSHPvvvfkujwbHU",
  "key39": "3rSwgjuDYwQT2FxvgN4VRmTH7jv5zYsMeFNYq6CzFCqBU5p18iHDKiufVi6Bt65aR2v2ByEsM9YkTCCxgNyZw3EZ",
  "key40": "4xvASHqVKcEPMACDmYuBCNnSFQbAJZLPjArtFfPLJRRYwcNVaZ1tAaxev3pfVhbjtZmFgULZbAEow2yGXZaVEXf6",
  "key41": "2i3AiHwNThxDquBzp9yEaMHEtfHpu8xnDGJWMk8pnk34wfm1QztwaHPnoETCXkkdEwuznXv4eU5GgcsAW2LF47Cx",
  "key42": "2tZLDYWeYTXHgW2L4F63kDbgqWhsYyj98DiVhj9rVuwPHxa5w2GDtka4rYFyxL9oMjF7dMfsgfVfYzFRPjxLPTKW",
  "key43": "5Ud82N6PCQSfzwLBs86DcZpwLK8d9Xo2YT9L7oBUkB6n2RJ23r9ZExeikDGFHPsL2fKgpZ2UiTJdJq1pz41Do7be",
  "key44": "3w7BmC7J3XkZZ1WGfU4YFHSvU5F39bH5meCnCd7ufUxkrnVXNQgb9xuVdmzieUxxu327MCrA7bPGe3cKYoioU1dn",
  "key45": "4GYRtf2prsJqknKcuMTH5Ramyker1bDUkCzhzGRWvqn8QxsP8SaycL1ww8Wxwr3PUVatB4MH6GZ4tocYA49Zwm4Q",
  "key46": "4D9GKeSZmY595TAStxu6U6zuGLckgLY1KhGvf9DvqBALtnmK5rmQQECU638ya96GBnoCixT3uH2qhB9X6P9u9vx9",
  "key47": "4z2YybgQDxZReDVApkHfJNx1GhfCLiY9wJZfC4W2HYjX72Z8Z6QzbWfwij9SyJSeenLrkvipmCUc4nSZ8fmfVuqx",
  "key48": "5iXYg9tEa9Z3FrwZv5YsqUXzmdU8VKPbeTX44MRUxB2K6ggNzyqF2o4mQz42BAdwPj8RDsQbZvxsi8xQYXyA4hT4",
  "key49": "2HCK1GtHETFmGEAY266X2iQWASArM2fHhZmyhrNrcgLXEUF62RL99bHihcMThsxo2UF7cvWgFCxA5TBfo8bK3jHT"
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
