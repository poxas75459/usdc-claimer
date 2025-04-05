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
    "H7ZSyVuBTo448KkY1RnRANmzDXxMuvqcBtW5fQhJAC8QUTE1YLW2vsWrCHd7pPwMyxqJDmYNiymAme5MmTMaEQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WE5SNFmQoNVrwmXNZ5nonTdKnCaaejcaprfi5z1AhJ5HWFAjBoihDSefUQcfJvdJ1ExAUC7nvbqex969ZzyMCQ7",
  "key1": "2rSginpAAjFxndGZxkYFKWFZoNbSjEJ1bf7NLiXswAt4ibyPV5faHpAq1nb4DXe9aH8mqCradVvJDUUxHwMFbbnm",
  "key2": "2xqemEGZ8rUY6RQhFee7EgrkEeaq4WhXtvp5VtyAbfujCXK3mYYXCjpzfpNsqjtogoFpuVAWoXkXFhGfBQR6sYv4",
  "key3": "vPCbCTaF8CqVeCrDuYa1PxJZkXapSrbgssbeA2sXnN7y251BQ7u8dJSGnEezGuhK7MHwd8aKwDRpQUbPjAYuQVN",
  "key4": "5skJAVTAP3CLxDz7qMemV51sYb1PtGN8cSLyXcXpWiA1dCbQBifLsvXkCL6M9yBHXpDXK6yxUHT9d6RnF6B8BDQm",
  "key5": "5JFjDrzzUNpep2Ea3TVs4fzfX9VTkkjfkQBFCoVhwRM8CxZ163crCETe4xrxoHCb6McCMuAeWN3Ssa1RZj5NmWG5",
  "key6": "54zR7iG7odAF4uJkm5pKyzQHDQBwz4ofvQ6BHoNnfEKSisZpXFRsbMynQERdZBFTb1YjxbRyCnx2TxXwDJ4vz1Pg",
  "key7": "66JoofmymNgQ8vZaBK9CTz25r5gmNYpoi4AYdYo9pGjGztVN8wSVnvavfuC9DKN32AHAEpb5xv5Ps9qfnC1msGHp",
  "key8": "4m9VuCt3gmNiFaxnE61avhASHnFp2SXbpMghwmcieatEkPNa9ed2GgpBXLETCrcgHaiz6MuWxgL16Lp4iPsBiNSN",
  "key9": "4bx2en8kptdvPxLBR6GaMrYL8w7JrzyVYbCkxTV3gsnwTMscXEXCKgyi58KZpWQYarHpk4gNf6R17pdLtXAY4DyZ",
  "key10": "3hjgWJbpA6aeXuV8hhcvHo5h2SEQ93zt1TbNVrRovi2UUYm9TUXQZsEyRb3qBzyURKc23xA93k35vdZpKHN3xbXR",
  "key11": "hGuqBLD99dXEJEuuLHF16Kk739WwkRYTJtY6WZ9sEzsVddyXSCkJEpoNYvDKDgAWb4v36KcU7EMxEBMoJNCDzQf",
  "key12": "3UhYtZH1fdvfYHLeBBqf9PEeVMsK6i86FB2EnAnNnRVJrYQMon4DfatsVJUgDDFvAWMt665dcnmdwvsW3xL6xuR1",
  "key13": "4bUyFvQCagKPKdJNrDg7SFTZgTtaSQBVdyJRArNoJXUDgPrhdDfSa5cPXPHmkhfujzpPn4fN2yCaBh7ZioxD7ffs",
  "key14": "2BA2pnV5rTGfqaFuWtWUwgBWGZtj3Jj2axMnGWqmKYZfmeUKHR1DQjL3it7JoWPfs1BZn4dhaiBZsrNPPtutP5Pt",
  "key15": "2Ph2ihhHTn6qm9QGD9e3g8qUneag1nXnKRw7gkQGjMCNgUNaUaMqn1Dsg6d8s17TATxmARprP3EopexKoLW4Jqxy",
  "key16": "5cTBT9JnZeDg51B3v8f3cdS2cbRF7uP7JFUdeps8DbVYqgDzapdBgTmi3ChCMbcSzsoLJAW26PBkYZNps9MQyJey",
  "key17": "4i3jHiDMApgZdwShdJMhbtmpeGuDemr2Z4WjQ2YpNQZW72qbJdB147HCwuy2kMRVqPFUkZ3hDWE6oEu8cmbFP6QX",
  "key18": "4Gtw9JcyqomPT4epwPjrJvFBUFvEbnLCqzbBx57ZeJZJwcEMbftEozjjEfjh5jM8djW8gEM5fQ4uHtsCh5bbYo2F",
  "key19": "2zFzbdKq4Hh9NS2QE6516NEv9NMsQyFuNZkaKn16W1BbyUUds4Gxxv7hkJ1uYaC7pvNjtENcscA3fsvHP76KJdTQ",
  "key20": "4PJQ19mauy1ebcz87sKVETKu54AQZBA2ka5QWMPNUdRuLHYacEkAUSzUhV8AVd2pZQVcLbwTaZSvxgqXxQLNSCpX",
  "key21": "5hRdhBk53aZUb7k7z2CuNssFdPfNAH2gmX6ARTa8NFMsa73ct6XZhAh8Wsqm313pLwmcq1hjUULuUHUqHV4jdKWT",
  "key22": "36rgLdGnprY3mKtYZMcvsKZ245iP7Bhg2TMnkPsEdeCb7uCRBG7LrtV7rcBhXPMLqfLefiMRftPbCUtYyKdhT6qT",
  "key23": "3zw6AxK7uKKh5LzVD5uK5myhxXH6SGDFtAtPoCtfZmCoSJ5gZXaUxHmaTxvt8ywCPcfb8PbL9w8CTKqwNWBbZNNN",
  "key24": "2d77F3Hffi5K3h1k3gVbFjjhmrcgEgQLN9gSDVMT9yGkanpHFFo61dBKWpTuATH6n7jQKdmPpTrqr4gLm5TddDEK",
  "key25": "4UJqgyMrunYDor1FgVTwRWase6CR3VaRPrf8u7gBsH2bLGBazfdQr8gRBBUEn2f4jwJ21gG2M5ADFxDyCgcma3Z4",
  "key26": "4dzpXGif2HL68LqyPozDrzFsmn33YSJFvMW2dARH4LJZgGEjxz8yXf6LXY6aM2H88qL71GsjvBEmcVW2aeWcGbZx",
  "key27": "uUjrG8uLPWhbQEBgmwMw2G2rF9GTaoXEjNe1XJFZqqMtFTfTySDrCuHrqxLML1R1bLaU8AeQtMaPgsgN3HyiYYx",
  "key28": "4YU6wz3YdZzo4FsCY8gp3ggUh2s5fhQKB2BYwqr4R9fFRZT5Cqep8xgqjgwYxxsi6o62rXchThS38bSGEU3JjJvg",
  "key29": "3bYsV388ppRbVTTvewcMJzorEnxt2wWW7J9YxqXE6TnXXSJmfrXH3BQ9GP3wK8guuuCAmUGnq1oP4JMPEA2tDqGR",
  "key30": "3wcReWd3ddAhahfPXnfpjNQ9Dtxu99F6FXpAYmtfTUvgBMHmuom3BYz631TXxVtXKCtw5wExxqoH79CV22qR9vPV",
  "key31": "2qpQfYSMbPu2s8n1Danhhf51jqauYdW1CSagAbHCLX6vgSQGuDftTWrF2KiBJ7hUPXuhTbGT2vtfzpB663WHDpJs",
  "key32": "2YihLnnShpzKLN32U5LaijwKDoduKt9VhdUrFTXq89w7D2q3DS75fjC5DFtUkFiJraaih4E8FtDMNN7DcUzE2VRn",
  "key33": "4ioBEbngvPjZdJZchfyPkCfWj3fbJoPSvrCVKgm16dvmuzqEmxUACjANKJqxkGRX9j7WBRYAwtw5SLHbxzuj63qH",
  "key34": "5ULysQ5WsqG3muiGHXbwNMLdo9sLMq3o4LVtxvUnCJs96Z9RTf3fbAEuoWv2GFjKmPhB9vukjS9PveMNhGEDg5hU",
  "key35": "e4PvSdna5Nq37sukpgUCZYWH8AFt2WQUo4Cc6tzEMjN9fB3g9q9pG4EHarzjwFXkdA18idzBBvtNUFogrh6isra",
  "key36": "59MsA9QaJwkuMERfCYzRYxp887vF7x6rE45fekvMEEcDRTdEomXmmD1sUPCESCq749AfRcxxGWmX8fzKeQS1kSNf",
  "key37": "5dcg3TEGx8Yjr9Lurr2A2XQXmxt4qxqFTNfzqFnzbPkvzNtZaJiHkRYmbZAkKcY1VWe4isCDx87LkZ6RXBc3iPZN",
  "key38": "uXdTc7kqSKDUM7CrvzNW9trmUTSKuM4yUQ657HKMHp1Xz5ESNgmT168PbDJ721qgpH4nTFN2KE2fszJqFbdxNDR",
  "key39": "35GEJLTtxD5VhchUgQsegS3GqpvbBnT4vfu8GXs3KcVq2NEMFLNcaoqVqT7LUQY2Fu5qSp5Hswh4utHg9LQosuZV"
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
