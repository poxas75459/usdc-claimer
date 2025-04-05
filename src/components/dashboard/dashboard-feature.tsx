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
    "4MH1FwdnzgoSduaM7e2gYbizL3fbNQATdMExkaNnrBLQZ97sojmFkzJNWAmFyHiRZqiQyXvTWkXMUGsS6RPpRJJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhwuNiJUvgnu2e6BsvJj4RTmT6cdrZZ41Vik9JLVzs6Epzh6VRW8hQJVG6LB975H9Ae7ueRP3H1iuTJHxGu8yiW",
  "key1": "28VbnocRRgK27DZgT7fAz13n9bQHM9HUjkdn9xan3U9g6Fbc9A8w6zdEpcexhmnc76AkGoKaMpVkmTUkap8DmbTE",
  "key2": "2oYc4YzCiP8BEwKydr4TEayDuoL6HG5iTnXvPxosAQU4yTZMoBkSTHJgt6JMUK8whC4yLbxya7Q9ePLAH81z14nT",
  "key3": "5hEkjwx6BZzb6w1d5PDfynwEx5xEX8F19MNS1Wt8SFNHewmR1QocycGEiDYU2EowpjyhSnEWVNMNv6fLa9yuLHa8",
  "key4": "4QkwaUDGkhfptM7fdt13k3WzqUAbDNYpbnm4qPtd3A3BDk56b1tVqBkBBFcTkNeasmNjbVGu6zEqFRXvr66nXzgi",
  "key5": "56D9ptqZFmvSRtKZ1SQ9AQXLd74fajMPGsmuNtVnzPccSHWbVQHfB455AVznoKdxd9Es9W6FjXo7goHCKF5zdJdK",
  "key6": "iZcpTLFQcWZgwiVX8gVhdtEM5dmdv6qqYwB6HQWDgHQV8LeU4ENWyFEzDpSwkTgJwZ6BFdNppTwEFmHv71YeiSf",
  "key7": "2NBZseksgxQYDtTZ7Z9KrtrjtKToz38yzZnaCTkn3YSCF7yVji9Jm21rb8SRziowMCDQRt3ywXdZeAKw59gu6Btf",
  "key8": "5nCnX9a1Kvxhb5MMNQS5N6mggfYruNEJMM73CEAdSpRVvTQ8JJs4gWrMHx4n8Yhynj5ocogmZ5wNqgHZqMuGQmR3",
  "key9": "3YYCQerFjwuqREMGBVCxfjuWNJ6LeL8YJR1qSPcTZiX8JJyFsr3VQ9jwcGpdfLwQzfkuqm7T1cCwtbhqro1tyG45",
  "key10": "37NAXRaFRtch2ANhYR7GFJKVeSESiwCr45zq6cDEUQYabwxemkaKBzEPW2seE3qQFkgYqQ2zVXH9aGQnPqLhHYcT",
  "key11": "5GGMVhhcawZ6JhQuCkXj5AnzYugdGgfd33o2v3QZ3XchDCA3ZcZLS2AdnkRHYYbn3YqHGrMP13GCtoS7GQD7F9oS",
  "key12": "5vSHK4qeiB9ohMkFwbxEGornipik4ovWNrWorBB9p2yh62CWPVB9cBJkbBfqUC2J7kVHmMPXb3EFqxXfCCVLQ1cb",
  "key13": "29gFS4JsQHuojrobTr4oSiqHMW1WC2zraUvsxHb48xf7kF8P6ht3PyhGGXcoLyQ24o7UY1hkP8d4TBpHWtqPe6WX",
  "key14": "hJnV6LmAyQnVP8iXkSf3xmMx861YRaQv9qMLoHuX4yYty7g1Ef9u72TEuxia9ck8Ep973BobVca3AfPVeGBHMdD",
  "key15": "2JTmkLTAzxunweEPJrtdiVCMV8RmgoSKyMTH578PujwR1zfoFydENLhpjkZPJMQwoTozjcHpSAdYKp8td9D4UZR5",
  "key16": "4Rcg9uFCxPMdKYMBuERRLT2tmB5pgGDNTgDyTyHN9dS2Mg1JQQEw9fQDvuhAmygWzvaa6LPxT8MVd8daqnRmR6uG",
  "key17": "4g2jFcMtpJPHBzMZyQ87pv52pLEH6EvQbkpagMQvQmiS1ZkZyKqotAGexS1EtDB2UQ91cDjnB8FpwAjbEuWpEs7P",
  "key18": "vdqyKevzuZEt4Raq9utQRXuLKyLb16xfi6byi5KDNpfWq8ZbFsxGUfbWDjrNBkpsstyK2XQGaF8vjFN56z3UFt1",
  "key19": "56MitrWzUD1EuBTZQGfo774b8EbpywqjPVNLmfyiFjw8oB4Ny9CYgpEzsBZYNj51DVYFA8X73chfAMfLcTGwDvgR",
  "key20": "3HGNJVA5nTNjvcxf5FongKDXh4GTBRaZDkyMswxeP8vVqMMWZXSwaGehYY2HtRPYo3B1Z34n8wkRb9amNV1Qu7hv",
  "key21": "33HSKV5ZQNo2iv9wj7CjtvsG7iyNPFPoQ8cDuWoPRPNGisryes9QAZ52GgnzABK3YhKuyJmiNAYk7Jk3BQzhTveS",
  "key22": "5wTTpj5ARjQR7hRZ9VqgYvLLojh4JBjj42dxkLFoq52w7HgXybH4a5UkMkuwQ1BYyFP1EWwyTGvBYLUtGUXPWpsg",
  "key23": "2bHJb323NgvDrd8ztiMZKAK8LdM8z4V8pQaUkyjD7rCBXg6t5U1eLMmSF64zAKiGmD4s578FobEpyUhpkpwhWxXS",
  "key24": "3rCrKW3NFeaP3vjCfLahDMguSsrNjFSXP7GBjAm4esxR4eRA7B2JjbdsdbXrY47aiq2QE3Mf5TGd3bDBRV6FttXU",
  "key25": "2VCh3iAscigWNygd1LaHSt8CvvEQdF1GpDWGEAoxHnNZVys4RNGdcquBkWx2Ay9spuMasxDTgkD9umQMjvoA6VsR",
  "key26": "31kZekHDhTcJAqCALdXm5W4Cqd8v683d6w33B7FRntdGjYFzc9xmq2LshbsodSeeA6np9t3MPAsMABQViTTEP6oQ",
  "key27": "4n19ZVYkCFHfDQxwMrSyRiUmwgSXm56yuD2Khu86jfAsekCLsttUBHhfksu8XAU4XKYwnBRf6sbJqg6cajCjRcvu",
  "key28": "53ZK2U6rwfCq4fcZauWwJz8TQNHwCfXiMDuB8x7z6rveUFY12de9BQVpvWk7MUSBPwd8Yvh8kyMXFRVyiApC8dFj",
  "key29": "SNH4hRvqdrwTeXTp4BoyytDryUodhJWdJj2dATcurYx5eNznE97GrsnkmBD7Ytnm9Ge6HgBpDcbsosVoNBAcwnz",
  "key30": "4gvf6tbbvE7YVy6YPTRwjDcx64MRaWANSoNSoTjMC6pKJ8cx7rUeRKGiqHRvNXXs6UF69bpwkXtLycr3oNzhJGG9",
  "key31": "5uMY2S6y2xKAvJAzCarJqNhppgfYrtvmktVcXv8TaEp3v3CXYAhmPs74yYnLbqPg7DwgFXt1Lj4BaVjP7ht4XsM8",
  "key32": "5b3T99dBhGLACPjSmcSxVVAGAisQAsPHApYUhk8XZXRGuPzsLmJeaHM5u7wHTuzKYJaEUbYjnTBc1vfx1PdqNQst",
  "key33": "FJAxqwcguNH9npDavFCe9kED9b9ziVwsdsttNqmtjsNvVRnzRNw49kLmN4Ey6TgXmKv22vsXvLQGVAx3Q133aja",
  "key34": "3BuYGvDXvPWsHZjg7AxChdG8yjuBJSWfLkXzJK1U4LXECpoHQw1aYPjMW7jBhfagJUPoc64PjbbBurg8cKeBEEDD",
  "key35": "4zcPvEBnK5eoZjFmRDKCgCBppoBdF47eT9gTEjdXtGcU9haWAGLPZ66XPzNhmW9efAt4oWCwpbhFEPbtSvVPd5dn",
  "key36": "3UrPf3sDohh1UpMHuokyEUL9MyVQmCzMbDHbkvS5L1Sc59LKasu6SAAdac177g59NEbp1GwNGbfcHFLp2eisjGVe",
  "key37": "5ugVjpoPvM1CVwR1k9vwwXJESUtuWdcLgGkHNFxMqkbQ29sAdiFVZ76EZQPg9bjn4WmBpthvnnkEsRvhMsjhgZkV",
  "key38": "33ct1RH9FUnG4qBNhawhxbGoLz1ih7VPpQPuj9i7gYMNthMQnemMNwB4dcZfVvP2JgxfwL6MPZMq4KZkEK634XuH",
  "key39": "2jdciuuZjpsdupxeAunnsTu9CayX5ij2q55FLX2hseaH7Fr7fcXEQn2XiJMfAvthY2wpYRYVG5kbr7VLBBwDZ3QG",
  "key40": "5RvaipVFVh7PLJdnrrG2ByBZvtcNFBBYNeygAfeEsmSYFsiRpzjVPBfnUeSSMXLsi9y33bNC1sutYuUPUxVxBWD2",
  "key41": "3utxR65N9N4SeYSVy3PJEunbys48LkcxMetUKDmeeYgdu7jKjCMt1A2aaZUfbHXVxWMkqJcEM5Qtm9FscYshfwTA",
  "key42": "2f7nMCAe2Hwv6q4b5FJBPP8mSxmKFjoYRNqxwXPyXbXrirXwSdwaz7VpmsqBqiP5XTBig81sPNUPWHhtf9eVDneJ",
  "key43": "4fvc1rpHTgR1ZEKS5qEjgcSmFPgnfgTTqzg5Sa8szgHDMwoMG7yn5Ajo8Jk7ZPptrMTwDpykoKq3NoiJ924wwnRx"
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
