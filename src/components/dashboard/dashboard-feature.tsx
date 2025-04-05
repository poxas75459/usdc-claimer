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
    "2kczcFiwNSTpDsqUQdHF7KioaPY9LYx1hjDw9EGeV4cAquTgqPBAwWSbtR6Gv5GBVq3ZANuQZg4D4BYiqXxKxu1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AwkWhcmA5KM8CyRAdVD9Fks8dTZXnYe7E9UG3BhvqYaAW7wYZePxCgmqD1e2cABSqKTW696GGAPtR7hvUH1EPxP",
  "key1": "3U4zoS8zzPB3kn7Qv3EtbsYdMj3JrfMb5PTnPkydJLiKya8qCPbZg4H4Myi9wEynCV2LXNkt8fxsU68YLRGP8h5M",
  "key2": "4rEd5yRt6mAgMKVtjUwUJhNQTGwRHRH6gnbJWLrZn6GCffNh7DAPVfr4jLhQ4Uvc3zBeXcACvieJMUXyDUv6UPVd",
  "key3": "5kPMNP7GaC4tM3xPuts1v4bkiD34eHyyfWhRT1ztFNtuN2VqFw5EPVDHM5kDRd2mHhxL2KEmj6kWa1U4CJpcbjsS",
  "key4": "3RrwJWANCopyEE7iWxwrTgksCwSUffHLhCKjkbEjGh88L6raYFHFzTb6xx1Jqbao5Dzsi5vTPir2eG3xaJ9eLVBx",
  "key5": "2aoRDfXRiNEYr9bNAVqj53xn5JTVMADpuBduJD6Bm7Nv3fHsektvo5gY7ej9E4MUyRcej5WL4HGhUv8a8a7aSHrv",
  "key6": "H4ewdVYTrMZs1KSPZt9pTraGRZ3CZULsMyMeYzxJr1MC4V2UaXyBjt25zSVDFQ4GF3vSEWB4G5UWBpbd4rhNcAw",
  "key7": "oWA4rWj1UTE7E7nK2nrU2kMUirAYDvBU8WmrvrWLujVoUQXLSUDeMQ3rSULtJQTXyy35m6tiMdecSXr3QFUcqsP",
  "key8": "2Yy9o54bou4LsrvwzkkBFkgoQRN6vhrVm9N9g7EDHDCRdkqPbuT67yjnAAHvXnZgdNzLmBaWvgQqVLsc2uMun2Dm",
  "key9": "39SPwXzAvPumGGMVg2ZH9CufURrMrj3qcTDXNZVvp6Lz36GxbRcbSX4sU2agJWkcmb2EXRtccfiSY3fq6YYb9qqq",
  "key10": "3a2DWvhVe3LGseve2tprHniq8ixfoWpc36Px2rK6HJxMXBX1WgF3EK9DwrJvaXEZdmt75cMigVE2j5GwmBBZ7TpY",
  "key11": "42otwZK6wnhUtSYJetehnXySnqgKY9GqLKhs7qK2FU19Sv9ohvfn9vF5Q3sruenRFhKC26DVcCP4cyFFwHMDzUdZ",
  "key12": "Lkvr82rgpnaFJLyQ7JQmSwvFT29sjfsmr5GmPrxQ7Ex2H4G4bu4rqUoAo9PA3w5DnK5FoAHeQf5rfEdfGRJ5Ebd",
  "key13": "BAYsWiN9hvNjzDJDT3MTeA68frC4kYTGN7Vs5c3hBWUw955JJG1CVV9hd7jH38VFeVvnBwHvgWacEFMGtzeszC5",
  "key14": "2UQN9r5VjnCC81Z9C9MFRTMQySWejqkrpfu9DLxz3EWDKFcEj7GPTWzoASdzrK5utsDQSF8yryQauUaWo27oh3Wm",
  "key15": "MVcv7MnXAsb3iggqKA5DnAqkJF8sQjxUw47vtsGotWpUM2poBUC6aE4Jr9bjNu4Azgeyxnid66DodJAKoPpga5G",
  "key16": "66miK9eJW24RpvG5LcDZweCfc3fjRMkMbF8WEJDJrrvYzVo4udDiEJi71ryeonvfrfqFKxe8XGTCG1dvAqzEfmHn",
  "key17": "51iBxSXFVSDVcvn8pGstM26VpADda44dg1k4Zr8fWiVzTF88FnACcjfraJ7nzDnx9d7Hium35x6EjNCPCKf292RP",
  "key18": "5XoTYSWGkzr1Dv2z6tgtC54TpTWf2pBX2MMFL1G5wcV1JVrvGB2mp2Bxy9CsCkbg9H6HhK8zUdfiyqAP73pXCKyx",
  "key19": "jSN9XhnnPdLsCJVW1mtZMHxGZA4cyfDZ3n39TikinXwezpqN7ir4RehU1VH2x3J813hiw6TQsFam2Winrj5Zw97",
  "key20": "2jVGW3KDsooHPbMUykWrX3bGyjNzRQN2QJRNv7zFyHujGkLxmbTegBpRRhzUZ1SiF5ovve2KZNL53ym335uP9oin",
  "key21": "32qWagQBMZiQBVWyYDjQhQEr7TcS9HQ61kFB7YvMm2AU3GYKkkZw8HsHx6CwXKhQVpbt8P9wCEugRb5NerMztrob",
  "key22": "4J4AdNvWVhseYnBFYVoSwFpHKrt91ereMHZeRy7eJopQHBgMwmuPqzhvzxNXi1dWfotciwJXLW5WGHZcLEAdB6Hs",
  "key23": "5TxzmF5ui6FasAU1ehjfx7z1sNbVyeAJd99eY4E3Q5CA18MdRF7H4MxzFxBy7FtVcJT3iYWtR3sMETm3XkJAgM1G",
  "key24": "45ra4CRXHqTy9BBujyRu5nyUH5zsTh7PSL4UjmxKB1eJ6nEwhK9AbDsRDu3Xd818daqGC8uaDMY9mRfyJaCodvy3",
  "key25": "2h8AG9hjV3Y2Pr3fjpbku7Z4JiiNbXFus8fcNudmAmGQhKYHMZ2J1NcjqsRus4v1EXpVgpcuXRdumL9nz9SzpRhs",
  "key26": "UYoan6YGsBpPBeH9vcxpg2HbNY2ADV6M953MjSbnL6YvxkZuRw3VQsFy7MudR9Q1DqNw2GQscDkdU1WiX1seCQJ",
  "key27": "3fcoHnkJRwkzFzTmewZX3YdvpGy1exdCvhMVZiwQRjTiaFRLnoiJQ2uHKVrWvg6iH6ds2Wt3aBHPfrzJX4GEZC6J",
  "key28": "3dxUFpMyDY3EpwPUaJjejjRw5hAP3bk5DnqF7BJUPKR7bJBaBu5iCfXuzo9KiQzgjX1TFJM7RqEqF3d5HbfXDnmL",
  "key29": "28Q4Piw9saZNV6dHUFmRCHXs3ggEDw4PpP95KeB42AtrZrfpuwDtQC3ZinR6pK2R5zJnsJfZtH4Bnitn5tp5zHXT",
  "key30": "N6zAqrLXjptzS2EoVyA6Vaqu2ERr7BqXkg41KS4VfeRoH54iKVFQrVqQK5pcTUJnzYq4WqF9KDPRPrxeTnhSPWL",
  "key31": "4FVMqpvww8rDKkeBVu9YpERbZysbXQARgkN52K7xD3B8PUEMuT1LndfZz9q1DLzcUzPrNjzfPTqjsKiAj3nnL33v",
  "key32": "3fBXQEZYJqhByUDHYGsyzP8gn1SEcGqKFHeepevB2xrj4eR6NFtbD6QvomccWbSS1quKmRYcK4Qc2sJmxvhws4wS",
  "key33": "29f4VSbk98xGXH92eSXXbxdQdpSnhMfQAdVztUVaB6g6sCG1LJprVn3n9xCxRyPsGfVVLTHZjYVc3hwa3RRXwcmf",
  "key34": "3snH5q37qpFj1zmsTQ3KWvJeMVNfbSEk82RccV8X2kvkEisrYnpPPb7QrP1Tfb7hiXRwv6jpaZNGKLtijXB39NsS",
  "key35": "2keMwYyzsLRXJ59k8DhPg8mW4xhLstjyQjv1861Davk9Ju2rnZAtTYVcqrgwC3LuLPZm3nzcFXKU2eXhkMxhgQYP",
  "key36": "4nLgmyTBx3S7K2gNrnbVRWYVe4D15w72mVn627ZKm7EF86pyj7Z1NjeBqVwXH3i4oqiKQZzsz8Zs5DUtNa6WPSRB",
  "key37": "thf3Tp8mMmq77QgAdpGTsUS372DK3odDHnMWe5XgcsjJUuaNNuu9ak4AYPnNXa95jEh7JrD3XUV3g1rcaEC27hs",
  "key38": "2E48Y1o571MfdqnDWn7XPLcSTdPKXfNnDyMUYeTt2cqRLog99riSeUVYBXVorEH3UYmzHYWHwjuNi6UEoR573Fn"
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
