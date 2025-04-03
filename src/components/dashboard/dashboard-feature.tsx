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
    "4VuAwiPg3mXLT9XZMvxSqz4z4vqWCeJMiXPu8BqdSmWQTnpVXMFprMV5595UesxFdh3nQcQkUbkFod1xGdsFGGce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517WPcMvKsxbwAX1eASkGnaUS13DqpnPzuWkX3TWCQr3BQ8oRviSuXF8KUR2MLmfbxjbAwBXx6fZGEGWhwGWP5xc",
  "key1": "33Z7g9FHiirEAPsxgfndRqa5Yi8P4yB4UenNaa6tTZeq8id6sbr5FQxr4HwzsKS75eWRgoxKR1zTNCuGZ71YweV",
  "key2": "7SS2jGngyD6F7KwP9ViJYR79xQ8MSFqbfFQRN2QjSHYbVyR3WBJbbs3Mb2nEhfUUnBAi7RnfpQmYBTS4D6JyLa2",
  "key3": "361h4uGb9py9J8jkd1eFaiWMuaMNaFS7qbS7zjzH56XkLmVF3tUZZwbjkFAap4nQtEJsPZPfXhM36VgDSjttdGvM",
  "key4": "5x64HzzkaM66ssr7dsbFNiXods62bKd5F4JXbSzqrpegJkTBu4DY3V26XHhxjJyypg6NDFdzpZzaFXKQJnTp4mkr",
  "key5": "4gkihnWCKhfvUWX4SVFfoyEWfVyvAzMWj6Tesx2ArAnyLAZnynkMSVFZE5uRmhR7SbM1GTe63iVT2qepZLAPXpET",
  "key6": "2HrbP7R99VH8TAnMnCojbHphvg3bgHUwi7QhFtx8dqnEgTGUyYdBTfTQiK8MCDfnzMKivZxGNdBeD3VA12zGunJR",
  "key7": "4UiiyLDvDtbiPNYFYmoUk8y4mg1nRoU6aPsun1fzHMAbrF1VsiPP2pm2KRa6K7WdbYTtyVuDNCFDTro4x8ko2fTp",
  "key8": "4Koqb66eEnmwoxHGPUxqxqSAYybTi1KkASbAskZPadnWzvKjQ36Fm3MCM7j7E6ho7xdpwKx3bXpiLBrmvMoUBqTo",
  "key9": "5PNkpTVyWfcQqEzwtC5pqxJFcihw4dGyNp7SuTQQTjXjSpv1zZdpVLdcjbRUmcrXKX1fnhbvanUmrqRPyobZUfrJ",
  "key10": "3bdU8L6McjqD78MAcSPrcPHnrVth3bD9EroQXRVwaCFSVZT2Ftkqh3aByL2CAo1kcoSRauWwW2WbW8tLarh9dBzb",
  "key11": "UYs73AsbhC79qj8c6SWV88sUVewCPzWDags4bZDCCBGBsmczdGBncAyKL5fC3KyDZQxcDLpWRPCmnGXwdAf2XyT",
  "key12": "3RMLpCDAfqfuuLkqqYVTLmkiqk5LBR9faD8GFZJ6shBAemCPEvWehPXrq9eC6Uxi673yGdHbtwBv3M9Awmd7fGcc",
  "key13": "2tGdvrXLyA4XUAHfYUJoEWJ6YKAh2WFdR65zLC3q7kvkWoCeUTZNdYVtt93txEkg5yDKBvY4VHjCVLdj84rTmviF",
  "key14": "22zgFce6jmKBLwJfCbuEehgiGhN8y4BvPCV7VE1xFJShNXLqGrJ5tEsGd13ghfqinK9tFf5jSFctzahAjgdRniVE",
  "key15": "MLjbCU2ouF4TEdu9ewMDbkwcSb9JbYkbv7rDQKqXDEmYzywxFsHZaATmaaStfjt9rwHB6XxvdkiV2AYkuBoNU89",
  "key16": "zT2bsGCTJfkQuV6rGtrwR6wQASLUQb2AAY7Cbgv3QPKJkfQhsHNadbqH4rrvwsDZZbMdgpgzAWRbGksKuirxPq1",
  "key17": "FZJMcdvnLNH5QczBbyh6U4cUnfw8Whds6PeZnYG9zgbXKMx2qN7ioVBSyEGSNkT6nDmNxDbSmUP8ypf84xXgteB",
  "key18": "2Dt3oiKycUCx4yTM9Y4rXqgm97Qh86B27R1j1zcgmVLBhru6odAn51QEGoczLv2HurdwoxdsLsCPjWTKDAE2Lpoz",
  "key19": "5X8B3iDnNvag591wxUwHN53dNyJs7bzSgRx7jX1y6wKd2diCv3eRLGL4xxNRzRiDqvK9C9fycwER5uE5kPkFJgHC",
  "key20": "4rkePh3dvo1t4oZFjRsnmJcJtxAYFZvuGvrUvjdoAURU5tN4Q5Jx5qFvSECpAkkRnFZaeXkrrQx6kX1vgNSqxuu6",
  "key21": "24ax4zvASCL7epJjQjXXzBx1NeiSmue6sm5tZsfLxnet8CQTqPYNZ6wo2kbmCU1E5LuRQxXrUn1KdUrwB24NtQq9",
  "key22": "3hD1Y33dJRhoHiDowDZofRfwWi5HeEV5c9AEQy9wQFpK16jNtsN6NZawHvjPn6ESzUT9thBpN2c7cbpkpedWrhSe",
  "key23": "2qjNKpztyiHDcPMRuxryLnU27khkZHRjLCA7D22gnrSXy9jXcZjFFsucUQNpCBzaxiZw8CR6PdZYH75PAZpafKhj",
  "key24": "5gLm6vGJe5TXWBnkhxt96ngxQESP1g7sSLUE3HjjAa84WLaiLMyzB2ro8ib5BrmjHkv4tUY7DGchNfYK8TuJC3Wv",
  "key25": "2ESsQU9FpDSQMdaNGKVuvU4xsbms6GNrhbqsN5Mf9Gp2F4FAZkidsTxHysBjzd4KwKG1RXntJaA5UpFApJfGXskv",
  "key26": "3h6d2eRVfCYucJ5fMtpq7gFkqXVktyYm5EoKyTUsAgudYU99FHPx2B8fDhM9mBvHAKk9DYgjKpfch6EoiXfGY7fY",
  "key27": "3ktaD3hgF5Rimrq4smrThPYK6QCtMk1tue9vm1Rc5nkqLXXDBbsxCqsQhoQwnbGarJobiFMPqJzweQMQKamYe6uv",
  "key28": "3j8LqjQfMV13J6WDvLbU53x2cK8Js15EvKRCyjZBvKwdENqrukfeNZKzbgCMLApMqFxzSvsfoAnXi4NoRUvfkDZp",
  "key29": "4CHXPCV9MaBHCnA2CtcRNGauiCPRQcERKva6T68YtiCopaNpKKZp66EhzpCGwgi12cm8GTNw6DFtVc679zc8qQBJ",
  "key30": "67Lg28HU2UHohQjdc9c8RwQ7RHbbq4Q2UZL92bqLctW1mpiyaB1wpyPbYEqqa3P4v45RrZdznq1nkx9yhMDJ3Mmi",
  "key31": "v8ABNirzfUmq6bnYKpb9JeFKGm9BVbibpUjPCJrLkA1TFk9TfBZWDwQXzG6tiZebW3aXRRT3qQGR5YqLKn7fe6f",
  "key32": "487AnoGvzXVfBdcSQbFyzpcCYnz3Z28CnA7NkUYZDKx2TQqaaCXno7KedKXgLGokpPnMgKyDy4pRKcEAG5VcRHhE",
  "key33": "3mov1P48xUf78G7WpfSDiMBXmGi4r2XSmnaYi61M3UdHzHEK4peQZqXoFYNqntyoNdX12rK8YSnKWQaqbUH6pwHb",
  "key34": "NgDv2b2WyP2ZQjvSgRft8ExcUST2y5RyN7DJXAx3erT7oiZpg9GJU5iTWStEHreJfU9EbQPKe9EEUhC765BoSd7",
  "key35": "33Jax1gZvezZTVTabseXyoN4W1yQsFHgNDmFR7X6CQ5KWoT3mawWYRXCmFBCksqTnScEFKnPi75YMhfjXq5BWACe",
  "key36": "3JMaZinooeb5CMWU91PG5NnLTf9EMuSygAZbidZk6xJs1Pn2AuY5GiHes8z1imLH3ky572p5PC59nr6Vtz2sPV6Y",
  "key37": "439z1BRSpyVZ4MdHbGDKSccS2aXMkXtpHE24RSRukqZs4SuZ514ATtTp8t4C1ronDn7SJDkepT3CnaRhrkEHQKmf",
  "key38": "2FzLXkqNd4vYxRE6rCxVBXrF68tosjYvixiNK7RrWgFdUSXB49GeDL6oW2pPfwUsvq5gCAyL6a2yQbJQ5DFqo5EE",
  "key39": "29XvWiaXpVksbAd172YSD9jmY5U1a1P6V6U71kV8X9KVeA4vHg9v5oFN2SP7gWFN1GVbKwmfPoq9HPQgoKzjMGyJ",
  "key40": "3GNcuwyKSdhmz3DidGnrkRAfodXVQYtN53KCSKymqXFT9VFLFnkbHTF36BB1LoxBfL5J3fcJjgyp2UHrcddoxG76",
  "key41": "eSfZJTHnpv1JAHCChiCdzXouEz9q5NpHDtRbgcQyvf9opbmubjDEuuJQLHsoz4qkeSNG6kQwGRHvqb93cG5gaHA",
  "key42": "423imLN5crAWsmoqLJtU28LM3nHuxNEAFxW5VYfgSFV4qpQF7b1DHCJkkigxgp8sv38K7A8gg95Ecvwt2s1UGM5e",
  "key43": "5JbHMuu5w57geFXC58mLfJvEGGPrbvpcnUsoktqgxxzosHJFyc6DC9gmLEyw2rWTF1FMub1irVdgG8HVFa3w2jFt",
  "key44": "4bCFtBgd2Y6o3admqawGbdKuD1QZbtjSRmjjSd1MFgSPFcTmQXVv4sABd2TmQq3PTyGbpBjSQktB1YnJdaVeU2ok",
  "key45": "W4E3VCyatWiZfFKRAVrNWRxX5ALDEPfAhQDqV5hTSedbuKYmFoaRhGbdRr1qqQrPJ4tXhG6F1UqFwFFcW4a6nRj",
  "key46": "5HeV6rgnbPgXi7AaaSiRuR9DKGhDzdkiGAtaK15LpmWUngWcHpDZa53iupSWZ8KrAQaAFD3adNZJ3JSNn6EvhSSC",
  "key47": "5rc9voN2uo29cCsAmeALFKkpcSnDofJEvyhJpgAbrjXcpXvxDkUQPYKmgFxpkfcAbBVDAujtHL8uMpddUbDvVCPw",
  "key48": "66yYSrrsdWs7Lg5NKkssgyLK1hUrd5TJNKeWZX6TTgdoThh8DmgNNLFAHXtiJp8NCixckSZ4Q1mAFEuKb8V3oQgB",
  "key49": "2WiNrtzhR6PhsTCJ4h7YSfFH1AKkPYjudnk2HA4zVRLZJeV57EgzL8rbWZNhPCbXW1iXhR5Es2NxkGoChT3obMYn"
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
