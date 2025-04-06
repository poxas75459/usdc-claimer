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
    "2jTDepG8ZJteine4Siw1CTHSQFHVHbsetXqGJ7SjmkngSGS2tLPA9Sn6wCaHM4PHiMUfchEJxMm8AnGsaoXpEKfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nh3wJb4fH2rnmDgXbbkQJkPgg74wDxyxeRhc1DKpadEzDky3zynRV9dHBEY69d5D9vL5xoTJLSD5cFqU7c5wcDE",
  "key1": "63XwP4iphW6JzGApBdGsXmcUMHpQ85EzQ5qceEWbj8iR9QFQ9RgJG1665N6BmyQA7ZRzzRuY3mnGRgNQdcMK6J51",
  "key2": "2MoKyEbbPErLxaRej4BCCrYmSdkQ4JwkuUa7V6nXhdUm2NJbS6kMhWzAnLnt6PvekTbebjtHdz8ZFXUv4cUh9o7Z",
  "key3": "9dUTMa1hUBLdiogikWnK58xgS4UeBfxwJz4uFL3a8puqQtHWmCCPPxaa2Tx1Rhk44RTxm3kH1b8uPuE3F5vwBSb",
  "key4": "QvfGbb3y5SUvQ34gP2iVxdEUgoXKJNoJR32GRceqDQ9wevrHQbo4oPXhvh1vRaZS4DM5Nhdey5M3skGfPYZLC4E",
  "key5": "2zMRuaAw8vx4wV3embfzEb5AYZKZEJJAmZ1Q7AfG1qzBi66muEwCRFfuZhtrYyN336TPjWGroA8hEkRCxxEd1r4G",
  "key6": "2XicznBW5vnV8aSe9k9PbQwaXtaGMpefLZn2v5K337iyS29bfLGcXDTZyiAMo8D8An78Ze73XbCsrFe2sKbJVm3s",
  "key7": "3ASNeZgHFAYvjAeSfArKN6WzRLFBWW5ai3sSawNGYT7N1YHk7QfdvBQFadXyHfrdeadM4SyuVS8XxUsJnYoGNu2M",
  "key8": "bEBgdKe5LyDvN2Epmb2jq6VNZ9Cm3DiFuWM2UN6ckDNGwUPAAYNEqqnw4WGF1e3zGGzJqBPjzGwyeworkfUmzze",
  "key9": "mhyFHT8uE6Gd18FNqRAK3RdKV28qaqoDNEDRpb8H6HJM3dYq1PHGT6ZBHDc3EhKrx1wscoNyySMsdWGm5YTb5w4",
  "key10": "5pQEJoDoUG5cmzWPwq4LmBHYHMPzgv8YMaz8RSCJ5A2SKWVcbUTccCsVwXMtVP7HE3uxqcDubcPudEL5L8Q5xcGG",
  "key11": "4HVTN2fDrwqTqgdYxyF1D3HBq471fwye7KDN7mEqKGtKbcpFYmjeZaGqUqj4A8eCLc1WmPsE4C4ZNYmkVkjkDfss",
  "key12": "54iWQGQ1kVyBwPYW5YPo78oEqz5er61JbL7xQ1k4a1kDQ2qMRu1UBCWscT5Yuyb5xn4CTJgre2dLXjskhSRbFVtz",
  "key13": "RdvaVVHs4FogaLm24amq8V12rc1cn3FSH2DakrYjfSni26ToQFrBqLRQxnDm3D3rF9HsJvNhPVJV9saSJiAvMYT",
  "key14": "5V2NxqDguPQa5RQYaqBUGFVfnx3uWQdtQP4YesADWLw1yJrJp6bD2buTkjqoG5C22g2pnGjKKq9JqZdjaTwUCtcw",
  "key15": "5SPrY6JLbTx6ktHAGzSbfvapzdnmkKadZfH9cWPfeTpFpSLgwCCodAt868FvQ6Qeiu2Ef9YH1rYS6gB7hYWp5aNW",
  "key16": "2YVtXRiwbju2HToL1sZ2dNGVmSjoCbvyCfmW4SW2fDE2L3iDxooVDBBs7UuC6PFD5B5rMBEDvWsYdGDtFY7i8fRJ",
  "key17": "4VNVJNpk38VVDtUT4gWrhMqa3JQ5Rdri9oMZGEa81Bc3or11VwEwA3mDXRMGAqN4Yn454y2456yjqjoK4AYmsHNu",
  "key18": "4RT4QERAniRXaCeA4W3exzk1nRQBAMzSijZy59DEstkhZMFtrMvbhsGbSUGmKKaFyYx8Yf5Fg4tgrCStxSphyxn1",
  "key19": "4Rnhe5yHcNodwy5pZkPVeENZdafWaSz4N4jwNJUbnpydjEPnRFX2CgmNQV59kkMrE3doe26wwX3j8zvefj26FGwQ",
  "key20": "2oiJaQKgrCA95E2mio4s1FERV9Ph99NhB1xFDa1CoQntLJxMyWu3Tbm1ChzzhtNPYv6miJuZA4LddKx8kJrun1Jm",
  "key21": "Vxw5sS49PkVqJkViQEwNY5dJuvUdHjQGt8RanhMdf7JzHzHWLMAcysa2UBmGPkdFBQBhfRycY1XEva3byMzEFed",
  "key22": "4gErgrG1cGFDPuTJSBFun9xZ5wWgXH3qxMdFeyzEAvBwdeDt5QzeohY2am2cKVMXeRqQg7WfiwE1nL2sKkpHqHvk",
  "key23": "3XbpPHpgKQWhJAvCD5D7wMRBDURgjqQxnXg98DtGBQnFf9DZtwitNJSexdpfiHmainPFehReoePxa6LSWRZA7ExL",
  "key24": "5XcpKo98njQokHmwuW3kdVagJay3DazNhPGRkfvyJFhtLzdudXp5P4y8bU3GLYABLyoGW1y6crPbXy1fxxPDF5oh",
  "key25": "3Nrs8AzEoxGkag9YXTfE4eA4p755a7ZpPMTKaGzWNWQzwydWcLkG11KgyzeVDFis4TH835aGwMHWpKQMVFcpGgj5",
  "key26": "4VhHkFWcFXC7WMwinnPv7cKNor9WHMoNGxxNYpe9eok7reumaeCTPtrq4o7T4xCBTrchnvmMw5SSwrDnLUpgiFub",
  "key27": "43QaAdwRzWTqBumFCTmEeoFA2pMKj8eRei9duUv3ueQoKuoPfPkuywaMkaV425ZWKeoRZpQYNg955F4Sufzvz8Rs",
  "key28": "379n1qAKHtNoJVBeVDV1jifijuYZMhc6XzYNKVShk84PymRBuTLajP4wCwck23Tp8t4kq4TNvvgtg99GVkoGwBvp",
  "key29": "2Uqs2qoy7h43uRw84qmKULR7UR48eA6byKHnXnnfieDT4tQ4pYUwm5BCGC2wwxhyJAhryJL3WYpFtbmxucoWEkpE",
  "key30": "3CB4GV3quSfd3sDnNqugmNG7fX8tNLvGarVrGyDuckdmTtvHCStY7mdsYF3GZiP83QUUV44zGYdYLT1iBmkUyXJX",
  "key31": "2udcUBUpttRAE5dDbFTYHsGQ2R1PQ6f9h9VEG5JQgrtihuhgxkiTpQiBToGYPpwCrDTHtuLEWSmBUbb1WfDh2ucu",
  "key32": "2fth7V4WZ3GmY4hvMi1QAt6yJLjBxUL7WfpxLvGUmPnKGfGfBxWy7TKpC7AxiR1vXbxf8FgHJdToLpHzF8H3Lry3",
  "key33": "5JmodNvhbn7GQvxRGAtpeR7MM1pKbjVGdow7m2RKSd9hakz5BL98SnKGtxH1LF6uPPCqSq6ao9t7C9v27J9nYH1e",
  "key34": "5wb9QMr78Vq57ZSmLZNoCJzAeNqnGQxtEobwhEFprVwr8jRG4te4dFWzbZY5iRPpZcrdwqceQ1GPFU4wSo1jMwS1",
  "key35": "44Scyo3UCvBC7juF9vYXCzd2oFoam5TH11FTVuAuzpqD5cyoQGPanzxHAQ24ga8nrL2QXEfM6SgzxeqZpGGaLPWS",
  "key36": "bNvnieaoC8UMjowGDZrD7AnJZ3rnwuXG7RCa9GzBt9Uim7gwBVhFVb39zL2d9wFKRL8e4Q1CPKFEga2kHnKCXNZ",
  "key37": "5CWUX4Z8mrVSRaXwNGCWakpHJ9LfkMwvrK2zT9H232JimyMzGsTJYuZML2FDx9VtwcnGxkKmPw14QAMC5DP4WDw1"
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
