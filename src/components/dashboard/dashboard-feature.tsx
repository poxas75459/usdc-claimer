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
    "42JSrwHjCwMQKtLp1tExSHrJrsfdGSfPdqTiGxrxjDo2m256h2qp1tVegCfPJZww2XTF8Jjmd3SF2yQPvkVvwAhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLfhpbwzRKfMm41CgCv9LgA4FKtDr6R7VVSDhoRFZXdeBmmqAkp3vKWsSZF45vhbXNGAwoAp19fJVj17QFYYHp",
  "key1": "3D3WEVsJmpvw6W5nxcPEqczDLGBxhaRH7einjgwtkWFGrwyHhBZie7iDWg5kfZfk1UmnKxCSaWrkzJBfeJoJopMU",
  "key2": "4DDb8rAHDP3JozAKCqUVt1tCdceRiSo6ssSdTWGcqnnmXBD5h3eQBUbff5ps1NuWFT7rCQynRmJNmFPv8ZqoUqKm",
  "key3": "5TVvitXmRk9HeyH3UmNefbNyFkqNeK44tEkRmecqCKJV73urqy4G1fmPmkYjBnAMAuZR8dYWbZFXqcvZPbW8qQtG",
  "key4": "BMNyKovcxymz9JTE1L8RLuVfhmDansTBv9Jtfdojc3Wz8iNvAUoWVnidR9eDe1vWMDFG6jHJT7QQYc2GMNKiH63",
  "key5": "52cuZedww1YYouau6gSfvx4kKtLkH1PhVsbbUWEGohZ3vUZfbHCWLPAA5hsS58rmW4d66iUwhEiyaysVsxeCyXtu",
  "key6": "a1Sk55di1kHwGypTSxcwwEiFMLYkwKzadE4qaqmh3153FVqPJKZMB2dgJLV9HANABSorLo3g1uZyMxqi2krFzjK",
  "key7": "vsobv4bpGpEhqHzKXdL744piG241Z4nUZRF8iB2vx73EwZ1XwM7Zaj8pUDguSM5UeLtzHnAWcpsJQU4eFSPDFPw",
  "key8": "5KYdPX114TRYmgNRJmAcTAtoKfJzMx2y1NaG1QkGoCLg1CaTajU8rS6UjZxN1mQduuzfuU9kRjPsbSvwuxJXXyVj",
  "key9": "2FXjdFzkERAhCZ63t5ecEvdFNznb4JuXEBgECun1pp3TqnMvGqzzub1Sp4PMkqKfVhkGchXVxqiFdGXLDaK6geDL",
  "key10": "mcZtCbJdc6kaP9H11iGE7T7UQeBCxcnRU8HJN9ua6xshj4UgHXxzRaYr19o7LsFsfswwDU3GohWRRqkpx3mgZH3",
  "key11": "bxfyRkFRxP6HfRSA9VdYrHFEp2YKx53Jc6GREuPN6no2GbnKq2UAPW5ZaVWJTGpxy9VWCV7XLppyzrUyY8pVFMr",
  "key12": "4N7dLHKX3oXorbrZ5ot8omBBnwCUEYnRNaAb9idcyAzwKjjr992YHSzVfUm1b3kYFAR9WgRpoept7u8wa45UyBLt",
  "key13": "4p4oYpmWdBqnrA5tMhzpRBT3bPpRF5tH9pFKgb3QVx9fswdV95u1oJra77vr1ucDffsGFe4wYs7N1tz8A5Tk7tBK",
  "key14": "2TNr8HRcmdhtn3WwpsEqXd64c3QE7fMThYjnMAtdAgwwTJWhhTzvw2gKxmu1D1hFVRsE4ANt7y711htzQYiqqTw",
  "key15": "2z1XZC3ci2tFdwAuMuLTzhZZdpFbxibC25Qj5rnxKx7FGE1D4GJeutrRxSx6cFiTezwM64EH1FStwKB5VJVTdKRv",
  "key16": "4LR7JGFwXG9vP7T8TkwjQFUVF9PWxuoDpptBPjpbLrNs4Woy5tXUZvUcXb4LGTCkbXbHncECa3o8RYxvBKDCqbEc",
  "key17": "3cN3xac1QwkpmQ3v6B9UW5Sg9HYmkSUXfuwJShjkWdR31N1jqPmBRpWuBp49oRaU44QTyWTJ4BaZqtqfrQQQ1N2G",
  "key18": "4EWRcNu5dQDAKN1bcH5gqV8HPZuBa9MFP599sjpzahHK9A6ZsDrtcUHP4s3Mz85XtbQs2cZgwcs4r1JFuznYGd6V",
  "key19": "RrkEimW9oCsU2mq2X7i5nSPNzmrPULq3n22jZcvtaF4xhthPN65hUUfFWbB6VJBrXuBAaoHS813ispXTWdi49S6",
  "key20": "25eYXiELM5gkvS7WHCZP8ESafWeyrQMnKC3mY5MpjCy5mY6FV4i1cWzJGP9QHJGF96WNJw8kYiQ5iesMk96vfJAU",
  "key21": "iWmvkMC4pCEQKhdrYBoQF5qa9KYeGmFVCBHhNJ52YtqZ7y249erfWuj76ccLTKhX5hmVF38TX9b6cbouFjjj38b",
  "key22": "bVHkUGqKYQ5cHJ6Rj3Kk8FtNxXtUfhXu6qz9VfsJ9afoqLqGB9gZLon2hV6arf8T8t3tBx9GUBNzqBcoWxi6a6d",
  "key23": "4vsMCSVXwQbqzG3piv2HkUXXgCGbGDYSsCrhSAh91SdVMVAKqhZzeUVfDWzJU5Q5ULcMDf9B2Te1Uba7acFEpaTo",
  "key24": "2ZKVxY745yxivMh6ALAmBH7pEQQ9QP9kYvNDu8hiiqapXJ7Yshc8s8A7E3zzRc88qSgRT6MCjBcPfxg6Hib4ANkF",
  "key25": "WW8AaDjEMzYG8XtUA9VfYoXLRmLs2pex9qiXFcA1VfxgqTDPrBhFCGQM4qz9dD6LDZgtaLVaqSjgRsJKUa5iNA7",
  "key26": "2HVNSQhJTytQwVm9FtfZZ21HvGYJq12QyNRgHBr5rXyXnYeSyMQSVmWZEedbaScoEMoPNCTaikFER3gdvG2nrbRe",
  "key27": "XZGEC9Vpn2NyT8if7s2qGnbYGwu2VRyfbEB3SgPKzsVgVM4m3U8H5wCw5wRESGbTpju7wH7C8a8dHhrRD4UxR7a",
  "key28": "29jaFPyCHCiJa7RrZMUnSnnFZAVhgwXnP9WMSv79Ft2y8LSRLy2FFiRJrw4FJJPZQo8gu94GdLxynJS2kNTr46ss",
  "key29": "3EdbviJGG2Kep2hWW4DW2fKbsg8BF6zLsBi1Mxtb3r8fYWg8fuXu21zp8CnfBMZcZiSoJjQXFyW76M5s3BJPrCFU",
  "key30": "249hGZAp7zdj9UCitQDsrdGrDNmZLbTBHHDe3ygwYTJhzzZwZzbANyMw3ZgNKu2nUR8D9orbnkVN7c8PABwDdFaL",
  "key31": "61ZAUL6HpnqJaVUQzmq2sw9Wy9ewWPVrFW5cajUqMeW8daDEcHuW6dVhvJx8pAJEUJkiDrKQX8efqyZEjVtjio4r",
  "key32": "124YgnaBRhjPxxPxaFeiJs7vBtjBA38fwR4yg7Nf597s5RFXJkb23HjziuPzN7GwQEHPd6qwedFvzQwDuvNj7KWi",
  "key33": "8fNtpvbTXBmoyhgVR8wps5xJqD1HoegVVgRsFx5aEhjRK9wt4ZAZPLpPdvf7sJUnej5Jx2r3XkF6NxFA8URxHog",
  "key34": "CGBZ9iTcSwAUBwMcK8srpVJ8gTSzyA4BXHYPAjxEkchPZ8coG97yEEN1CvpBqpBNBsLLckXfhfG7E88Xnd1a5AX",
  "key35": "Yzm744PxLmihn5FixpaXg3HTySrzBdDcWJfxwDE195b132TSsHM4hEWWtMZ3sb8hpUJoJpHWYRNrSeVCcStN7A9",
  "key36": "4Qcx1QATUHJBVprLrKM5tSZktRjiqEike4tBXPZYaxdu39KMKsdt9kEysaegpMqtW2tawtR6kmBYKh4vP99KXnny",
  "key37": "5NsGApUrsoPYi7XNJ5vbFCZhhLH6AE7XrHCtTfvABJQTghTpJFWH2Bswkk48LjeVG6Jr8yC7u6DWyQyeZ1B6mTY4",
  "key38": "43YsX53kUJgoFD867MWCbmYVuHhbRtFaR7ZV62bXhAttVjQ1bxHTsQpjN6qZ5raunvMc7yiwsj4AeKsfsYwprxs1",
  "key39": "5GztxpumemNuzwoZoDV5pqkF6DLr7vpyPqWxWYNbtq3tfMf3eMKVsnbUc3mJDBGPXmvRXZmJ7SmUNToAd68CnkuS",
  "key40": "4EcF4pABnT6ysiJPQQa4FFFhWxNeSiwrfCWzFm34wVf8JqK2ZPdey8NaoDQGvzcuxzLBb8BbFE8F1LQ49fC25BkX",
  "key41": "37mxfDzzK9HJYPhQK1TfcBbbwCJeiqg8HdnSHJ6GsKZi3p6tD6kJtNSFkDsxnNomA7AEXeCvgYU9UsbqnxhwhprM",
  "key42": "4K4cD11xMqStqhST5q8ABXe51qeZwFVt1fUjz3GJaFTqBZ7VmUEeCobFqxnvUKayPuUAYufL9vaRZ3mU3fLSQyxW",
  "key43": "4KRChT3ngpTg8kHnfyjZs8FSxYH9eLtbMCRGd4mSBUKEKdVxiE9SdBQ2b1nSCHKXT1ezdGdrCBKjCoi9U8WiPxfp"
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
