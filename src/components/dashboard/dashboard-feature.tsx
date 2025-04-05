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
    "4MgpHcaXCS8AojPQYBs64Gt3dmXU6K38bwYhkAsirHBifgj2kGCEKypfuYZ5Qxp7z9BuaJyX3Vm7d6ho2hDvhZBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XzKXzAQMJR5svBezip7hgxN4KUiEgFH15YeTdcVT49iezn7Urtvvic2AGRWHWs8fF9YiKbiVWNLpFyAj5MYxNBa",
  "key1": "5L3uAuKEtk9mKBpvDUpo4F8KsXeyzheHKvnVnk7yxXGZaXj6fWkzRcRQf1u4jR2ELPpDWDXFC3RggUtQR3CGaQir",
  "key2": "2QPULgwgeidWttAELcnyRyTFTzWbtW13ByPKmxeAZfR89eWyeGaRZTrgpwSLJmMz1tipBTsamLJ7sQa37iLEKLsd",
  "key3": "3GCA4RQHMtUYdqGWdAzKKb3asMgvHuCXShziLUyZgNbkNikodc8yUHTVZewQ66NS6kY7C9DzzGFLcjAZuSTPFLMn",
  "key4": "5kxJAYNXTRhmZDoD2Nn6pN1ewTpdJGuyw8nP7qurdsbDn4dajeCg8WCDBqzCpqHrKUYfdqZfTZEWMwBADQgNepvb",
  "key5": "284Khy1zveeJ4iEEHDdQuajbrPU1Js3k53Nrm6qFmkCZDg2yJMDs51HszW8kTigX1ZbUxso9dogx1Ktm8JpmKgcA",
  "key6": "5YuvQgDa9kvKUVFmmCJAvenKTHKz1TYAS2hHWbEW6SEhiES1tFhGgJvrmmPfC4gfb1exVsWBj9hunZGd2GTQvWvD",
  "key7": "4LuqZbJwAiEoca68Mk8PfPJJycwBHUkUnciz6Gcuwdi5kZaAivYWdndZVw893NMWKCxaiDTdDstuKgAK8K9eWNWG",
  "key8": "TJc1orf6RKMQW2jkFViFryJ6jy4EaiRzMCtrPREo4nH6ngs6zpHjXNkueNur8Hxeue7UqbuX5wMGxmtDQbxG8ha",
  "key9": "5bHoMCg6SFS7oZHoZ7yQyC8HXvXbHE25jmZ1jd7GfLfonEzaibgsFdweFWCHnGfxCXSyf86jz42vjzZoG23rkiS5",
  "key10": "264g85P1t4vYiavTCPjHXkxwfoGuoW14HHVSNv3zUq8EscmpcqNFRkAfpRmn3cTiajFzWNit61M1WohaH18ur5oT",
  "key11": "4upHvXNXgoB4Vb4fke6mJpTwqwUVuDwSLS2Xn5Q3BCf9f9GErE1xLvMjAoi2WzUDn78Zgif2EQbkFbYBtKqporx",
  "key12": "2xdXervaTPj98WJcZf3jiHkDD9DsGxBhjDgESrpRe784x7ARquF5VepUz6YNJM8iQfWoMr2e2FukcTbfQViGZojY",
  "key13": "3UXppuQpAczMNgB37zhVr5rgNVVie1v2qUzzYS8hPKm6BwRr8V1GCXk7rGTrB8XrPLEodsuxCbiGAWDfei1qwwuq",
  "key14": "26m4PCGza14RMbftr2USNHNnG7hVGAFLYcDS2mzz5iFtobRRAUsEmPT1jFYU2KhkefW3fdhdcrc67v8CkBRonz7L",
  "key15": "ywr2Cy8fhoZYgyGzdqjzE6n35fj2UJDs5xmGp6rutLLLkDvR4tt7jWkHsXDM56TQA5LgiTU61GVj31rpxdc8TU8",
  "key16": "3foK5LC5njpYGpnXEeDgYeuBmFPEaD9uyRtcjaruMAjSCsSCKxkpLTgVJ5UTBQCtQXUyrK3b7B4J9Dgz9XRvc48a",
  "key17": "5niJeBBLLyFKm4gnH6zc7FmaBXGKerRM7Gjj8weZPUuYGHHvxnu15ZpWCdm5VTzswzD6C6g2HMEYCsii8mC2LKQm",
  "key18": "8PEVzCw8vFzGibzr9acZTADkYz6dJUqJr5wN2DSQbQCW9naB83YaM2n17uxSodkKPhAuUptznLk5Ly4yqc8521J",
  "key19": "5xMwZyPU6nyUMSyXcr1RamzdnN5QZ7eVTAhHKpi3NawmREgemYh6e74NcfsJdZ9vJmJsdFfukBbcvEAiu734xT4E",
  "key20": "5xvWgysmBaaduo3nAJQdssvTqdV9FgA8xFUPwPukJQDcahypCcydz1CHYk1BMVuevM3rmWsnee9FmNbacH47mNGY",
  "key21": "b7fjSt3tmdPYSnTw2FeiLhN87s9CYVffE7TVnubiZ4QzRQ8cyqjtCvym1s2ruuGAGN4sSrMvsuLU2oawmR3x6hz",
  "key22": "2e4qYn882t1UdpfH29uvWCRmkbZvw9kpkNhSEkUS5fTE5J4BAxo8BsYPY541XCDb5151ombBgnBY7LxthVQ4mVgw",
  "key23": "3f8s94wNjBcKctCDD13cg5JRRQVkNiAHBBd9oNBgv4iDL5FzCuuaR92ZqufDNYvpd8yW6qur2Jsd4PJeYM6pEqqf",
  "key24": "5UcN5cM9YNNrYZSxMytacfkgiEqwdk6LRdN5yJ7yGdvwm2RdpmQqttjW2sVxEhfEXDYxPYPcccAhinysabcXZjCQ",
  "key25": "3fbi3PBEY7RVR6Rfm9Drsq3FS7LeVVP8FKDZvKjVPSCgBpfrGCC9rTU3yVc9nViS5Z2bMN9z88ABeAtSVwVfw2R4",
  "key26": "5CiG4NRUfapB1JwvpT3dM6mVcxVWgHQkhWZsXdLGRJkTFxqoHzGzXYovhPjJFmwVweBbxBe4tESthpu2E77vDbJz",
  "key27": "3gVw3yj3Y5n9nLVoVTtVAJwVxyXGXzWgsAEK1hpgiA7mYprVpsThmpaZUPiR1hbgbgHmPgP6RYsjW3Dr11XsavCq",
  "key28": "4XwjTgesZjtUd96rzZtrQE4GTcFEJGERH17gtaAnUk6SfJqvnu791nwigF4Bv9HsH3NsACuBthEZN8quSsw7gdU8",
  "key29": "6YxexE22snCyhdUG461jWQgf3AXcJwwPLnXj2h5tuLJZHrdGCygGAN5s3W6A34cc9xCa9u9P7egVFK5iTCjhN8G",
  "key30": "uoSpi39sE6brnyWaLJXRqkLDX9GAREtd3HoqzPzgVQuVYxonP8abpg95fT3Be54pdeqQ8UwEDLxHe9WAss4mPhe",
  "key31": "2sG4TwtADMyXGbdQ1SwMPktB6K6bjB6V487nAt5EiKEJWUvDEeEYQCbvdGkScfAfkktzf7dWwJFH1VgDpk7rZNw2",
  "key32": "36M9zg5i2L9zzQSpt4vRW6ZyAqJhMS1FHLUusk81Nqk49B4mgnjYiiSwhnK8o7pgMLb1XTSZsLaMB574t914SkDd",
  "key33": "Q4nU3h8eTcQuBCUzQca6TK5ti7HKdQDsfiCfHxwNc8DYUihAZWN7zr8iMZS4KJmDXQg1ztnuMcsDhxSuUpKhB1f",
  "key34": "5QpkiVie6hNWxt9vkH5V2wcb67zLTtjpw48mGf2WmkhAzMQQNLL6nbbGxWvwDkpYb34aE7v4xcuGAabHXafF5U75",
  "key35": "56SwFrAXMCwbnNNCktzBwDpvUpYDXPQWh1ESMcMz22vTDJD38vH6LbPZ5GmYNXx4SGJjGfqMWxcivbJUeUnLYePE",
  "key36": "2Xd9X7YPbtJsqdcUkY68tL7ivRsYDnCTbrpFGLA4hCpqGJrFezbGKg9BxYjp2WQW5GGUn9w4go4YJQ64Sbt3ZnBX",
  "key37": "2vEwUxtUpzN7pTfEFxYZzcqGAgPxXV4KruRUXEw8G1znpDVgEJQjrPR9R8pL8XzAx7gNNVe4qp4x8R4GAPxvJ1Jr"
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
