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
    "1ifAES6nHGVTCMQ2dxqzchPYYWMUyxiXrhjHSzfY3HMmTpy97RouiS3KD3AuDfgrSKLv2xxxLvrQRJcP65q6G9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FJuZ81ASTLu9FmzTxDRwBVDT1FhpgUu9J3FfNc7mN4NZDSqEV6r1LKVgt16GyqY3ewPxRgfSrGkPmWidTSs9t2z",
  "key1": "3WP1rLvUoMF7CaVsk7sfHDWCJFcpYxKZJT8u7NU2pszfJTfPkkPFAq8SNhyeqUEpcoehEjxxDraYkdxCeovnvbaa",
  "key2": "2FXX33Vtgni2jAejd9rM3rMWUzdzcraeJh62rUQdkBSGxUQTPNdo6gWdQsNBkMUzKHni5JXJqk2oCNTSMeH5ggT8",
  "key3": "31DzXyLQonwfC2LFszeVJQDnjUNcdhJjFZfkjhww2kDHcSsodD9Znfoixevp7AYwv2gtHopphEF4Urxg31urm1sk",
  "key4": "2DoYJ4JDAsgV3e6S9eyc7Zr7LEEww8RqizGkBhjkARRntvKfC6kaD79KmSZNQznnQZbcGJh3ADLyDBZRnR3cn6Z8",
  "key5": "4DYNrwSt6RwCLJjTKafs6Q2iMF13K3i8dcmtEukWiicmmi1XsstE6wMMYwgr1PN2dYZhaWpEqtAjET177LCG54iw",
  "key6": "oZoujekbjCyuRaTTCUQYNdEqPFxDAokbNTGizzbftJPDWpjfehSE4hAAchKCaHDoWnTMVzDwvmFESrUEdgtDA5L",
  "key7": "5C8dEyJKuigkAB2QSnxtB9sZ8dLDfpd7JtgtMJvkVMBnk5vJDjNLfGduyVhZxEFot8T7528pRcYG1x6WWZsQSizJ",
  "key8": "3AjQfKVf17m9p39cLPDv2y7QztsPTtqsp2e53rbgBrF21Y5dL3x9EAQGT1nVLF354dEBjXjGvq4k3tmeDF4eqDYz",
  "key9": "2mxH6hDsfjHxeff7cv26TndQ3ne3FwWMXHrmR42QBmo99qTKvoHWqbiCemH7fXiWc5GLvYxpgX4Tn9d4nCC2v3ox",
  "key10": "47ZxzK1CYXafNxXn72eSsqtcosPLWpTX16y1qbrG6HfVTJLeV9QhVD6eJLd5VJQeZXiiMcEs7yg7zXHS3d6FpHxD",
  "key11": "5xhweqhQPShH6sky2UWT4Z3k6rKKYoqbxCWx1mLSRgpMnTpJ6zGkzA2TNdStXHbrnCBDKPDky8LF2MsQK6XVoeWc",
  "key12": "3Q8ovtMbM4GJ7PRVb6zXKEBz5rrwn7tdTX3REAa2TSNfKV17swKsCJ8tr7ZGpqcJnVJHaQafZx3PTib7YodqBNe",
  "key13": "kECkK7a28tcW2ZPhriTjC1FvH692jtH6NBHRJqGTQJ9pMaiAAavDoDmaqCtTkiUZ9jLuzyJ31Q8xxm4fvqa49qQ",
  "key14": "25YzDxJScAA273h8zYGMjRLDCrEkySn3LoCcRnpPN6xJHhATpe3QJTeYdLqyrvJmZ7Mi9cbyN54KHHSABmb66LQk",
  "key15": "2JVkCiS3u8seuiBt26GoE8uPCdcPnBLWXrEy4hUWHf3c454jpDfHDC2Q49BA5uLLqfNtKKyT95VRuAh2XkBViesh",
  "key16": "stnFX5mraBD33miGkacPzZBxVknxcHssDzm1HzkpfTVSfcEXWp2kb6s665FrJyuV3VQ9cSjyFAAecjnr6qW4Prt",
  "key17": "4ibT9BYkQ8qraftcp4pMyQesDkn7BjddqaJx3rmHJGBkGCfnBQ4PPnbUqznSuxM2WL7M4Yfhxyu4dLa8qWLHy2HT",
  "key18": "pKh2HNxtSdeMRzPwVkUcLtcXbGL5rShSEXxjfuJ811QxNbqxhwyJeoQMdsADsmJfapgzJtDHen3MRm5GV5rZQr1",
  "key19": "4edMVH3UDBDs6FF5y2KX96QiGnBGWGEEEozjhGguhan8neqvxahFVNLwXrGm6u1pQcnV3KnbxnDJuX77qAvmCrKx",
  "key20": "dfxsBCE2S2Aw1P8CTLfqAd73XJ7DmQPjrzmNa5yD52iAWyfvdb81kQGvdpfVQdpqnEmXEafDDKj4XqoMtwTTGk1",
  "key21": "4idNKRnmcgZ29E87H8Pz5bQavbJMg2QFeKtdgaZ5GBkKAbVBu6y5mxo5VUkYDS2jJX9xmFccgotuEtASk4KJhvJW",
  "key22": "2ng3V2zuUJHPghPWy1hJPxMdkb4QvVPafEowrUCaWo5pFtqiZfkypRNA1tAmKfnRx2haV1PH5uweXMHgKWR8aUVP",
  "key23": "4Yf7qymQyiGiwQV6V9XZxuym5Dtp1JwfpeCuCM4SzmP1wA5Ns7sMmCdEPpUZzHGHYaQywkD49etTvvNURRcUf8DD",
  "key24": "4NRyV7wPTgzAShwvTfnrv7dctBjQSk45iCELEwPhkU2Bz7Pnf33bRXzg5odi4mw8Y4BM6XspiPkkaTreLtEvY4jr",
  "key25": "GdeceTeaHbGfFpExEXqbMzfLeHzWrsb63VzTzTfk1oQnvMsnRHP2Kn2gmj8ofVst4WoLYoav5SVSEjWaebnhtKW",
  "key26": "4dX1LJgXRFXhhZ6KkcGkkvppsHf3pgJUgqr6HLEohsmkFLgM8dLHX1TBWcbok24jh1CGeLNwV4wBEecVYdYZ4wpa",
  "key27": "3xhATCxiwUo2PaknuQvu9VD8ZuCDDRyvuudkbA937oKQhGtCZWQaXkjsYAb93FrBED9V5ZmB29isBbYHEHR1AveC",
  "key28": "2FzmNp2qNcMtoz1KYyF1yxy7Ac5qHVEM3rUGevaiXmgbBjrVv5t5wgB1TEvEuAbynofnbnynLcfRFstd3nZc9vxW",
  "key29": "3jGPJspEf72gz2EoVz1DvLHjo4VWvSWoM8oGHsCztEVnmtjV7hDhDKN5LV2Q3Rrw7MdMRwmzGozKtj3w72QqwcWY",
  "key30": "NkiNF2NrU4VZH8BGVrtoXF2UvFAFF64DRqZekmhbFiS4jzSzc92utn8ZeZowgdX8ZnrSiGrV6rvAcsn9ZKqvRg1",
  "key31": "32JZUKtXa4diyDYxELCd7ShBCcnG1aqD9Jc6GpiNDbbsQc7eYQKS8XTSt9mttJAQJNiSrxnGpUgWVue775APgYw2",
  "key32": "2sjr54EN33h7T5PSrH8eQB587GPSX6LCaC4ii9QZFRgG6NJBq8LTrseBvdWHXFJYB4tUx3JnrWS5fa1PwNBktjBG",
  "key33": "4cTsQE6mi5heUQh97LPCXNrwsQdMcQW3DpPnc5YYv5fkhc9FzfjsGhNgnfPvrjzfVQunvRgsdGEBe3r8n5o2Fjj4"
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
