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
    "3gesQZmZhNrgoTpHJ329X3Bb8nRTsxQVauRoHN4ZWqPWjtZmt4T9GmDSQ8W4iZX4ehwhMYRQz1m2WPaoWmQcg4dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtA5vsTs9GR8ZYdhQKbMo2DyCjnXhRc51DvcJt4VkwbkxamfU7PsoAa54DU9uPRS8zYuX6pFgPvS4Ed7FYpowDg",
  "key1": "2TXwoHr74QNeQscDutYqqRZu6Qwku75udzY3zvPJUVk5wTi3gLpoq19uAzgAWDT5rZEJe5XwDABdYUK1Y4h4pGqm",
  "key2": "51eb2RTJzcqiDrrhvXniwPCZdXaFnfDQPapZXGcnNWsUtptCC96TEZE2hkm43fBZUa7A3AY7i6Tekfv7dt1mA5Mk",
  "key3": "3fLh7Ya7r8B52WCgsTTKG2SoK1U8Yr6cNTAsdLphaYu9B8jP4sz5Dj9ZEDphpCrnUQcQa74B9uPYeHqS2VL9bDg6",
  "key4": "2KEDnMs5w3J54F9SwRHKzPrPUywPZF3wf5ju2JJV8FQyrBSfq5zcPAtuBxHxJ7WstTAmFVEsmnQEf4VFMCvWXWWt",
  "key5": "26MW1cHrdfoXfeb3hrAvFqpzrweLcRDEdddVuYnkX947ZRYth7YsAN2L5GAuP4d9QGyJ1KCLDvjCH5wVhtYqH4Wg",
  "key6": "3JyjcLhfjLz4Bk3VwjyNg2J6shqnnVE3NsuBfYnEsysP9j6ExRU6LYqiyjkkFJAEBoXNF8P1B7VrR3ZYa7fddRGb",
  "key7": "5ZummwGj5MYTNUcUGBQZsy2kaSyjCZ9fsueVrNH8NXUPpmf4mwVbPV9f6fyHa84UXyen1QaraZfKnGTZLDka9RT8",
  "key8": "5qDwnC3H69X2vv3RjYFu7ohxEez7FZtc2ky6D15KRS7Lwz7UFdTfnQmgA5NT8ACzaHGz9gH2RqPYve5e3TU19CxG",
  "key9": "43555zYZLib65sJKjKy8H98wVJnGZTsgrkEx9rVjMSDbJ3XveBz9u1JPdx4tp15uJ1zf4fXmo52D8NaPYe1M4RzY",
  "key10": "5sSS3WTcCUx6RrtPSoqmEDXZEDHVRzjqHUo7HGBXTPYiJ79kBQp6nTjqHieuoTtzWn54wviwhobNgdv1vjUq4GMq",
  "key11": "2UMwzWfUWC4agPrabXcRWPcxFWV46vVqZU8zr2h8kLFmitz4p4gBb6ViK8eHhBrpX7wjyfhnSTzu3eypVnrWPKCN",
  "key12": "3KMw6mwZr8GvwCddBD3t4xJtXLopXyazZUGi2kchbgW4a1yTNSzBDbdy1BY6CuGh1fuqF1Xp34B97jF1rJfSzakt",
  "key13": "5VJWUEA34hgtPu6hcmASERgdXTXWuc1ZxD9uC4Gr1VBBtpkH4RzbKv2KSfK9Wpe4rHwTAm58HAwLeKPDQfy8GU6J",
  "key14": "28s4nxoQxSiAmsmucEDDCAAZmBxemQyYA3QGqbRq6viGSytdDZswqFE1DcJvpTc9c7aoTTN4wD912k7rP5pDdSeg",
  "key15": "FNCb3b8tLbzNRrexZZPrUEk9qHRi2xcQzg2SZHTJr3riGPPpqc7Bk35Z156HeSxn8a8P5tMCT61pJKstu6zStUa",
  "key16": "2U5fP46gFkZkG6Gbzrgd3J9TJexmJUAqZeDHmLrPhfuY3dXyXPT3Ep1YHnTqaB1tEwVX4txcDWCLL8q4DqrbjD1N",
  "key17": "5NNf1uuNWgee91Ei3zLoj1HRSgjpc8AbA1rygKXf3wxqCicbBvEzjB2j6s9Ch6t3sdL9RZAaZZSzmAdt1A8HXKgz",
  "key18": "4a1KR7fANgrPGvCdtxKKrKaw3FF5Paok7JwYZom3oqxebC1H9j6p3KgNBJwS3PJAePLMjaEuZvxbTvbvvFCfZece",
  "key19": "4WF6WULyECUEsYFkiHaVPs7UP1u8SGHtjTyHAVFB2DDhCVRAMnixVpLjbUJ4UozXB3tTBbQrodMvexheRzDi4e9M",
  "key20": "5uE2cBzcQxtUJDwf9iD4C9W46e4RBY7mFUEjvP58yKZRi65AJjTdbZESqbS9BKw61M4MpvrKvVDGFnFWXtu2VVYA",
  "key21": "24JFTmyTpmSzss7Mu5ALWYw3YzSij1pc1DDtyA68e3K1K5hrdf1qmMC7yhEM8t6DmgN2XmAyQXvsEGLkcswzPAyb",
  "key22": "36kfEwRnKLDhn36JvcQQsywiTyxBJEciVDuJs9TEBDgXdU1VqvfEZL21r8nczisbVsZa7cFG3sZ7dHbrg2xtgAxP",
  "key23": "4HtkpTDpm2b3U1tie9fHKjkwzLi6vMnjwyaj9dAY3zWzcTRhxZXVjFJeg3mgnKA6DDRSLPgtuAQFK4RgfVYi8u4K",
  "key24": "54z4xb7gSqYByxjaF19yhWpoUjxbFneZmhvnqRzLRrMJc2KtA1mFb182jRDroJyskQz54HMDztkSPLuAQXdiqVrP",
  "key25": "qDFobHDMZkHWPBBxLRMwqXMRKGuRWonX8iZQzXhiddEgH1MbJoPFydCPcEQiYavdjS6rP89gw8UdeL7GDEcfKdR",
  "key26": "5JLvvN2exkctv3ueNi3Y2S7y6wBuHUeftmRjs5NGGBQp2HEUJJNXtNbdfLWoVxUM7RXJ3cJ564LCDxULVAASd1Fc",
  "key27": "2ajcqdwdBcEgQdDX4LXTj5vdSPdw8vDHA1SMLiPxCBPwMQAjo5paoGRuxBLaCm4LGYx9r4EPove4LeQnUd6jnu4f",
  "key28": "2yN1AGTPkAQXoK8E7jBr86YRi1vAzsmGdya2KeNPgvQvu8pQhaW9686ChhQ5gAahQ62c7BuFHZxvXnYcH7v42bHn",
  "key29": "5XwfVxTxvmrsreMMki9Xmnq4xc7t3fxThBoaYi6Qnuhgo5cPjWYuiZPti6JH5chNV1irqcd57G43o4BAdShEFWCA",
  "key30": "x2ZL3uLyQSM56f4d6iQnXuzu2MAGMWaVUt4WG2gvvtTVw5JH1joiBS9LLeuBfBd3asmG8MMvkvz1v5ZTQGoiDMd",
  "key31": "2Lj4mNLv7yb84YbdskGp9ehHMjKCr94yzyyUUT4mutSU1L1FdnKnQjjkjjkYw5nwz928TaS98ef5ToACY7Kkvmrg",
  "key32": "3u8rsJTDaTXk3xvzy6Qg2YKXqz4njWAhYUhs7BoXTjXHXoe2HCTGkPcNVLTgkcvmGA3ghqNzJXWmrBAQwoeHMVoJ",
  "key33": "3y4wUomguNA4hi2AGqFzweDhGos9mTUrts2Aq4aE3ChPtZ2yMABZormwQGAejy3JL5HwFotu8qv8qdaAEhzCuYZg",
  "key34": "W3AnRRTVoQunGFT9gNFTg5AFREq4CBUHhiuvKgjEbjQMAaUG26WMqyokTtjK1mQQVHSCq9LnbYtLvQGsJt5eiZV",
  "key35": "2J9vzNMQRTbGudW7g17sfjCrmZxpcBCHD6trXJ3gD7nBfNupgj7e83MoTSufX6xmBtRk31t2eYSLmhFVhBKgtszQ",
  "key36": "3dJiH24dvSN2TUKmKX6qrw3EZmVpd9NYQzNQTHfnRAHAFvwCjwhvCjDigZmjHoasfjFt1XgZJES2pg6cQv1iY5v3",
  "key37": "23Xw3fSg3XF13sWvqKYp28T8XjkpUb6hc1BawALrMm9WBj86fNt357A3VHq7KQkrFaLCPcAasYL6YmxKypqQKRc9",
  "key38": "4soN5zkfS2n1btRv2G7tw5gPDJuQwZje1aPTDLYHCxmxgrTkaixThARTcf5LuKvm21qwo7hpsb3P148UkdRiNnoA",
  "key39": "J2vUSfQiSmddEzx3T6tpFPftzfqmcvhxQ5qAiDHszjmXAJ1GbKE1LngKT2GJxvaEgbrWktDCaRJiDeqcraApGvP",
  "key40": "4Twa7w2mFUA2vSvwfBCg6jhR6BB2PvYLMjPTbGnh67qZYLAvEbQ363bVhTPoT2TpfMV1sHQm2gnuUAiHqjwEt4f1",
  "key41": "5o1maivZWJHFVrKFZjR6dmJeHRSAUa18k9s7BR8rTvWpMT7tbzJMrWD5Ruq4eUt6cbp2K4YK6CZn6tUg9CKafPPC",
  "key42": "2vQf1Gbj4UhbHzCPgnxTbxpLpqpcDy6KaBFJzPbeyNXyx3TbRbrew244eqTwSfNLCpMMkuDPaQywhaYbQMRECgw7",
  "key43": "3qBs8at2o5mptTXsAdfjEe6ZgDVnnKTBsaZZUwefxXYitVcft5QyqTPfXRxmvCaEaPFJL45G6iCzd3dXngk2oJxa"
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
