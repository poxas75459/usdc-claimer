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
    "4fLs6FfiQBfmqxf2gvayNGsvJ81WbYUSmLzjJTEkY5rLfFtFy5qgw7CAnSEhsPjFbxiyQdBxbYHtVmpGT37oGEDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTyKnVV9DZr6zJvriPBsp4LZ3JCeiy4W5AadDLUi1rpPYY9WFfzeoFcpJ53khAdw8w7m6wq7hdRRxmsVqd7i7fM",
  "key1": "2NgjCQnbv4MbqFF2996vMfjwNPfsfutnoAffatxbzPfKoFpdT1XdsFFBJ2MhvH58Djku1R96oArGotKhiKbdqnsZ",
  "key2": "4aaUL6PwDVoLSV3iqbv65CsVCNP4fpXGgj6dqMX66ukTXozpB6UyUGEnDNSg2UVL3azf1LHb9fLRaNm3ZiLspQba",
  "key3": "623Tm1FBHyDCfkCBn6Q2dTHjPwhkjmnoAkkzmS2Kgu4kJZm4K3QJdG3BwbyNwtqPqzjxLQLyeBQ3QhyPe6TCwqKM",
  "key4": "2fv2Hcv1ohuYs61cfYcuzaHei6HCV4AgrqoeQnxRixzMjRuaZWpZf78xf2C8ghFLkraZwryiZrgV9HiQ2DuYuJCq",
  "key5": "5ASVjfcSrKZvBoUftMazjbyZjiC6JHc2JK8gMkP65BmLBQeoL3D9ekF94B1yfe71dQZWafTT2m5PQVfZjhndDRwJ",
  "key6": "2vMNWQ8BfsegyQvVs3AZADayCbcWvZzV7FhcEJBqMXB31SHqKGEx2LJhiNQorwCNZb1e7G1uRe6m9eR86CutYVuu",
  "key7": "21KLjeN2VTDxVTa9FDFkygu72UqwYviWQD5RMiTpa176BjMKQtqLtGjj6Ls7HbZ5JCB8dCBvoWhVY6qr5QTHSZhe",
  "key8": "5TNZWGdajqbViCuiHm6svUGa9N2w6hernsrSDUYwdRoeWpv7bHnbb7G48buo9rhG2WLZHQr9BPqhAxZXP9kYATff",
  "key9": "5d92e4bzQhB5BifgptYPjGjHm11pvKoEzJiAdFUzxqqeoSKurAAAgkG9NwGZLSJTntktfbb8h4am93NPdq6zr5xB",
  "key10": "2FFmW7GwFZLsHZGTykSH9bPurYw5qXujizrD3tji8SiTEcqJn8u4BXKnPkVm2icDHJm42CTWJRKgMk8dgh4gNfCz",
  "key11": "2upkovNj9fvmubKYYVJUsZni83Qx3AbQK9ai2yRmiCytadqjWhDqNM2dGdVesghrtJg1pxBBYyU4SfNBjkcZkdTo",
  "key12": "3x2yciNz9mK7BnMZS6unVEptPbGinJYL8kVoTPQV9xmu81RaaAhbarUuuyyYRZAcLxjRanFE285eCofGci1TeCGF",
  "key13": "4y6SqrTvGFSVaM9CF6q38S7zKdfBsJ3HLhvEM3rjHYkRthm9SHrzTT8BXTo7Vwi4RfZTJ86U75NpsB4FcRPhyDqo",
  "key14": "oFqfNKkNLBvb6c57z9RuQ3pDDQjndcDbRZjUCmCxL4h1VSQ13mbqrgdYGBHgz9qNoVHEHi16vCmQp1uk1E4cwq7",
  "key15": "3KecFjX9gASehmgKoZxMwiJJbyer6ZftnsYC2gnLYYiEaogaB3R552PoNKsHSkZrZA2ADmPsWhDYexsdHJmMdi9j",
  "key16": "5DBVrrNAJzDuN7HiWSxJjExBxpw58DoSFwXub3cue3PGLXfSCBGJ8CjFVH1r8h1aawgNimamkNTCejRpZAwfqGp9",
  "key17": "2VhEszV5jY1XD5vbdN17fzzXYCQFWpP4Hfv2r2rC6qj2FLVK8DpJW1iwjVPzZgF1ph6DjQcJHKtoQjkqDHBk4uXR",
  "key18": "4aCB9JbmUNef8rnm1SsiBgdxvywLTuTWzrNBt6DDbSDSqsBYQbpwHoBpxmL3AeemkU7wQCMKvHXTBU1U5ybZwrDk",
  "key19": "53EQbLZCiYnKizPKtDa2Jv4gm6whzU1XHa2ZsWSXtFVjhxi5uq63BwLYqQs6BK2b4FDAZ6cEqj2mqsWYj1isSmHj",
  "key20": "53D8jkwhJgGvEiam1XyWcMxdie6GRznXqLxYGEDZEs2pBmMttdbnoiBHRLNbRv1P9xh2VkTpRth2Ppy7M2CwFyd9",
  "key21": "3VxsrMaiPziaskHX93sjjGWwZcyLMziuuzw8eLNgewsovMos91YV6pg46CCGvPVjV5ZdMYivHTnURAMsinkw9qWa",
  "key22": "fZn8tm3MTkkbiQYNjZBe63p5v5zSFJCzXwPMKhLbEwAz4iHNnNQifjRbRkjSV1qN9U7rkHLGjHGoEsT7TcfZgs8",
  "key23": "3Kq1gxT2SYj6oKkmJDqj3qZzCxsypcTR5iWZSdALHmUpdhSFbdg1ex7xaV46CHsWuEzuERyRAeTHmTTNx9FSnfiS",
  "key24": "vSzVKkUFPPqAHaFkhRNLEHvmyjZd4ikvzk5ws1LwhxB3KeLbbe1SGcetDrHDnyNFXbh2ReQFgfWfhKVBee4fPfh",
  "key25": "5bB3X4nn4f1UqZMRE19S24TvSvmwRsyXwRPkW4EB1U3c1SXPdtfiL46ca27gFMWzWb5EW6ejdBWLzvGGtr265L5P",
  "key26": "hat3WMCDucVdfS1m9JsYVFWyCP7HuoM3636ZN7dysp5sPL4MfixTqGD7gDfNCGqAcvPj1XDfjrmC6CHDYhmRueY",
  "key27": "4Pvsb3utWVhY2sdQTWiUZLLQ9qrgjzZB6CaWosKujDfcufSg2WC3YvQ7ZTviVJF5cCRmV42GMU5g7dG3qHf98Nfe",
  "key28": "2FPuvzmhrcpw5H8AeGBz5JrWSo8x1XLM4P6LJyoue4mMz7XJutqmmx5GRiYCGBq1SNYwoqqAYErCvMTi86twd43e",
  "key29": "2ypwg6CvFjJTeRLBrB1xdWM75Wk3t6z4JjGmia8Cej9TXWzCoKEyVg7zZBDsiNaRyjBgtMYbfH39sJCSmDU3PG6D",
  "key30": "3BfcDc2zD26MYAeiYcNgofagJigFXu1VuoKGeUpTGwmjcaCgbx6sfQvxb8awsDrQZZDEfp522NsgZs84Dd6rgzL3",
  "key31": "32fBofNXRDrHYQmRUYhcLm2rtwmCj2uKZXhQFbXCWDkqyRMGj6Pu58b1Dq5wqgxPW7oDJwVEVx9EU8eyimdr9uVL",
  "key32": "FNKDxkAGPn1pEFWyirAfEuBPeDinDr7DgQWeyM7WnzwqMryRJxmmqoyVUkmF4NThoSZeZq51naNALibrBgYpcf3",
  "key33": "5Q8dWwdiWB349LgKzNo1j8iKAkfetcgRXDUdJ6jW4o83dtuuq7H1XyTat4oL2zaVKwKwWH17H1SRsk1j1Hv5MiMv",
  "key34": "3x15ACzgNwemvRyZ4B2SS1YdRFpj1JeaTTLQXeSRXBmApmstnwz48h8aRqb6A8USGeawG4FhJNMAcZRLfGtXCfdw",
  "key35": "2ZY6VnUpCn9vaG3f3bqt95v9Z9eB8RA86egHM8F8LQXoquToiF5e6EnamE2Yp2rjKGpVecuh8zRmxMxUq6MmPfRg",
  "key36": "5PugSke7MafXQdLVzkrwHWTKcfSyuN8NhwdqUpfR7f7FveSGA8zu9NM5fNdtgXxaFtUJCbbFGkgrtYPp5vpwtzvg",
  "key37": "3y4i5rURCTGX9GZNNJtPR3n5untPKguQr5vQwk8YfJVx2FBviXuNEimabaqag2bfg1GT6APhKJcHW9m4HLAgqZFh",
  "key38": "aKUoEpvAbXVZfxuqcPNaV3szQEQvYvnky6aD6EpjvBConDeGsDN1k73HzPvGL3GCsUfkeHfwLwstAgJgtzU16wK",
  "key39": "3mH8HDCJcFAfAkS3szm676u8m71E8ZGAspcPm5PoEQufXZjy3x9mrDe8xzcrqxBjgxsz9eavZoUaeiN42aTjurHs",
  "key40": "7mmBQS51ndELbxzibjCgU9hmT5BLb3yv6rEDPWQNFjtgy31KPenGm1pd8u2KJVjYfEvZ54xERNVPmXSHajz4BBe",
  "key41": "39YM1bEjh7fRUwmcH7EyLkz9cxEN4gCMcmp7GqoM8jv24B2hWnj4S2eEP73q9CvvYEdmYrLnT7Krtjw8EzW5C4nH",
  "key42": "2DuxdSuZcTym2sAvGHeR5wraJgGW5DCMhKT89kZyuYY4VXLsbRQzKiw18dSQaJvXGuoqZ9buZfkC1Vde5sRYoxaK",
  "key43": "w9e8pQCMPQ4svMV3RwC7QjnGiTrsWhiyXFJVL5RvGfuDgWhfhvHQk7A8rUDMHCpDZX5xSS6FpTUwxTGDEiUFTnW",
  "key44": "hciBBwHb3dsCsk4V3DmkqLurXNRpUpJCDan8HeCS8gCi6ZjqZgHqm2ySpkvDL4FRp2qQoKhwXBGvQj7CfVRjAkb",
  "key45": "5MHFkCVG4JdnTDeFt7uNnUc689JgTWhatAJn66GRSif2qphJTzn3CnQq5VYc6KRC1udfdPqTWSHC681R8Sb75Dvn",
  "key46": "512sB3ZdNuvctQDhi9D2dRUKAUJFZuT3se9Pe3vTtAG3jrFZ3xZqvDV46pit5YXQRZFzL1TwuH2vsrHeFxVzxBLx",
  "key47": "y6DYPBQnXqqc97KrbzjmzPriq4PN4cvPDXHxqd6CnPRVZi8WXhFhb5oWYMVZ3fB7CqCWQcuFA81gRk991A3hVtR",
  "key48": "3Jcdqbxt6GGmUzAysE8WMfRsR4PM57esETupHCottmetEhQTQ5KgJ1PgwS8wFFchbXaLKfTisJmKvCVzXedV7YMK",
  "key49": "2KYHsi78Mc6eDnUpdxCoP3Ms59LLZ2JSttSX7Nv7vkCZ94fsaZLKFcbFniCTitgsz3ZFxGjMHneKahxLss3HZPVj"
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
