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
    "4hYdsTao2cyte7DrpiNq9JChwfKtYpSSgGJD1HnKF9ZxU5ELhkwWGPiHbKNYsj5VpcMKwVuH6hMQbSehd4WfME3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39UECNyTZzk7ucfrdUGGasgh73J8rnXnpzRZTSAEahEN3VW3ybSovbsvxxbPwRVVujNzdkYmhpaoGHMA6VWb8BUJ",
  "key1": "rb5YBjnLak53onFuVMfTKwoFYGvG1b2npfW3LTpFAKH3FJ1pS2DaaFDbVktX5ayyAFpSBpN2D1uTsGq7GDKtNmi",
  "key2": "2zYuZz5Jcpv5fgcCdKqbKuUbZBUxz8fuzj3jLQ7Xyz4pAYVUbNfVyTQuRwWyaKW5YgB5hiooANX19gw5b9ZPtCrX",
  "key3": "2CUXGF4xTWYFd5AYZk818v7J21U245PJRsXAp9RdBYomTuRfhokJcP43G8S2FZXssYdjvtoL1DSzZEe2ExbCCbGt",
  "key4": "5LupUXdRFi28PgaDw6dVNA5cZQktcz4Vee4SdSHyQD7x9SpaRdLfshiuCF2gHbPxxiRYHRFFkRm5gYqDVVimN7x7",
  "key5": "2dG58htBmgsj5a693G2tp1okXD3h1FfD2xewJ1hT2mdm4Nvj2fYkx4YoP3i8t8wcxz4etanTFQM16SMJLr5M3BsQ",
  "key6": "3mEh7sZnHt8ZrueoHsFMcFCev8cUvNfpzkYGs8K6fGiTYqS85Xia3DXTELAVLPyyEtxy44VxNv8qgBKB5hi1DEEQ",
  "key7": "21T2AH4ujm9xvbHHBbr1A9hzQatRj1K5Jz19zKHAvsjdJ23GsSV8D8ApsH14S6choNFdaY6TJwJtREVQrQEh6SZY",
  "key8": "54anpfDYpw7qDKun86ZpzLoExGmHnqjqFyVgbUuQb76KDSQmMHt23t561zJSJ98wxvmG1ryeHRV6pdHHMtspH6Bg",
  "key9": "38j6uBN5WCCCLHzsBfX74sek8eaMRNT2VBA67CVWMywTJxV2nxiqRe1XxxEKme1jRMju7aBrSmoFzH2nFEKAhoeg",
  "key10": "4nuACA1ncGBUT1LTZTNwFJy5cM6VZMNuAPuSNyWmVqbTJsH5HG2VNxwQMSQsAhcxceiiRoZzJgKZgrkgpthMbvHB",
  "key11": "49uwydBaFMSgLuQht8gEZcKUFbS1X2KGtqe9CBqekzdCS1dLaavgsdBgCjKwMpZra9VFb65T7AiooZbpRmcCNk8t",
  "key12": "56EEcGNr9qhax6Kf34ytkuYsfJZgXkQkuFhniqX1rXSY1wnMKoY7umdY33KUNwJhuHmmko8UHKnaEimdV11EsSQ6",
  "key13": "W9CgHzaDeMWfJmhCCybwSCUfKTK2pkmexk3JxrmqmBZkH2nENm12YUJ72nUczRRXMMzJj1w8fZ4KeWDKfSU5rTD",
  "key14": "2pAmzUjKjuxPooPFSu24eU6KGkkfArxePtEbbicnsmMJmn9MXHvGEZnejcjQD1xhwEpH7JwKwe7rAABpgjPcSof3",
  "key15": "2C24cuJRzLhuQwmC4J4Ey5TxKTX7FN8NA5qeYT4TkncSJQam3LqBKURRYswBKTykqpdmbpQnjmD2wic3c6RFiJYs",
  "key16": "dp8gEGeD7WYc7SC2WF73C3HRBRerLXd7PWVV4jHXFgyowikuaX5bPVyLNEdeEdj8HKaUE5ZrttAoCvz3sVXGpLE",
  "key17": "53LAvGJpFVrYsK84qp3vLzZiPhTkHrxQ552G3Ts9KNvMEJeYL1tUwe7CCHtgVfCn1wYxvXBDATwdgrapjUUSaB3G",
  "key18": "3K2TadZ2qDqBZ2qgk2sWePunH5tcMobkewpAJTMihKNtw5mEHq1uoGWfi77rL1nQmsB8SuGNST3xFcqzcJ9L1bRa",
  "key19": "2LW8cn4yjcDKBBktkMcmWcAybaKicqCzgfr5PCbYnEyt3jUvBKdM2BVWFzE4Mb8QsXmiTD1U9eardniy4ZnNbo58",
  "key20": "3V87e3Sg32buu5eMoFXk6gw9uYJcAzdBH76REC14A1hZewxcvTnyYw87GZHnACiH7gxXqKTBnGydcR2K6raEvb6V",
  "key21": "5yvP3R7kWm996hoQGgaqceDkdXVSf9ZSZH9Y2szqTSPE1fPFNmDKAeDWfGPhfoFPzbJqjosunFMCFYXXpURzaJ8y",
  "key22": "5YspjpfyDknFX7g7FS1WPjWDVFWuPwP1AkeNRwuUVuXJUmKtdsdwRYwtdf7ToiNCYjiU64kGW5dETQBbiEK6mwdV",
  "key23": "3J2Hjyu6baULibSdF6W42KLD6ooCu8yp54z85mgkzDtEspobzVsPNHwVBtPDmcXPLZJ48unuDtabpofjNsGBiTuM",
  "key24": "4A7eLPv3G7Ykg2rN19UwtYUaSZvbF7WH8pekBx2hZD3E6EDi2E85yjqJn7uHPg6uyyGrunWPx1rK3ktT8doNjbrw",
  "key25": "5Yyx1uWs8jtn2xihTTP9KVy7CH661PnUKxxaQxrX5gYGAEMJKCKg2jDvUkLDJD2UNQqjvXdPCdaTYoVZ3KwB8BHu",
  "key26": "3bZfvN9xaY8jGBTzAUSu7UNtmztAaRokVFMEs24sQwp9dLFVUw1Bpog2g9NPGaBRnUcpqsqMhSxFHF2FhhupQpAy",
  "key27": "3JBBCgrBg63TVfxtFFFwwemvKHr5rHG6XjMTbMANRQqpAtCiVqgNpqLimvf7BMvZMLAe6x6hxVArDSdS9UPpiVc9",
  "key28": "5VfE2JfqVMWXxnDuVbsgmSNobSh54jXbYjuamQXT8EuKq9zoH9vxfpBbrjiTPJQ3wjc5H5p6h5xJm7yQQMka7kVQ",
  "key29": "32WFQJUqU6R1N1KF7ph1ZzStkWMC5idFzMonycAaxBSP66EPMQrQjqBzGSULQC6LmTAHFFVXZaC4MnzfyfLT96uU",
  "key30": "55uTvtQsr6H5qtA6FHpZiwnWmtLNg9x8WynwaJpED1aTobyDhDnGPn9DT3tcJG1JHnBmaJuQELfKw1ZGe2JePeYJ",
  "key31": "4exnkha4Ssz7TRFMb6K4fom4pUuAq2TMRtosf5LWWdkSwuEUaR3TL3UH9jN4AFh4UCX229fFqLWtoh6bDef9y5rs",
  "key32": "3CAL5gMQUMczmGCpYJnWspnJu7aL3Vtfra2Y49LLP1rhdUPAaHpxfmkcUVcsjZGZEeu4N6dHQnctZoV75C3Vevgw",
  "key33": "bUQWtKpNFyQUVDV52mZifyDT87KMfp6XNKyNQD3GiQLFJk2UTrcCgyMcbF3CcW343pHHB2hiZ9NcgHSFfkXfqcZ",
  "key34": "if7g5YKCWHz9sqXDoXHCgmK4hGooNUBrSibcY3d3Xi5SYeGDn4Csu1LoMGWz53wwJ444FGsZ15YRw63hsyRQEnt",
  "key35": "24TVFcCa6wKzumQjAymeXDusU8mtC8dVWgXNyvtSLRm8UdFmo1n8AgPyWwpTQkZFofNzpTfHp34tmsvA7VphGQs3",
  "key36": "4VRNng4FNPfPgj8AJXND5wEmtrdjgviait8yt4vYVivt6cRLrFicT7jhDrMojk7JZTcahti5PYus5JAo2fUVZyib",
  "key37": "51tKARuF8S4ajgc1kdSjbHKzGcQyx9MR31KnQPRUm2MoDkEB7dKPoFjzdJmnmTpWCv4TuvMZAg88942tR5tnwnUp",
  "key38": "2xPhEtN4YKUKd9toQLEDg3qKGXrtU3DVkDxsKB1BmYMbs9uHmA1ipWPNy8r6VZRJeo6UpQEQB9pHscAxuHtw4qsQ",
  "key39": "2H4f6AVmbgxMqnhJmDRKD2XBgQpEqHxvmhzZmW3TDLJKwmed3zgsTAeDZpHqM6Rmqtk6uzfwsLCxqSBfZ6gub2JR",
  "key40": "F7kJ8ed6rA8WGYWPJrhocekQcfMau4SsM86YGq925V7TiwHLu2kwwtqXVyS5RTPRaoSfb4AMigCCQG6tDfXRK7t",
  "key41": "MNxpAir72kkCyrNv6vMRa1QewRDn98Xn3r12uJSQASC2hdjFGHfKgsF52ML7TbGSQNeMB64Hdn7wc7fkVTGZPcH",
  "key42": "3aauB2j1JSZqVJnzuW4VjcA4fp1yNtEzBEwLLWte2HxoiyEJRFrs7NoAxkFTS2NRqnnUvjafqnVrmj7A1TrwarF2"
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
