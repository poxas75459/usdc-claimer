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
    "qAAsxAYfW12jpzajnPrHo3s6qHnib7DJVT3Uk9hKAN4LG6NjnZ5gYkiCHmGdRfo4MgE1h5996T2XwFzYTAk7LD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S1GboczASFpnghyyaChiBWVzgcUnvTEKETTAHML4tU5M1RPFnBU9HWhVPMAFu6ZsbxYL7nDv3G4eeQbYV1hfvKV",
  "key1": "628zUJC1RGPPBpGKtSS8HHpix4XsVWDd2z1WJ4Mdcdg9CM9CL1Ap3LpSSu3yrypvT9LiavZWDSPwXRoYwjo4dDjG",
  "key2": "kfX3DpoiwtYsMRC4b6RER78DBuFDy1MnVvPi6rPgv26YvKzMVjLyV4C3vAR7SRrKc5RrRbdDJuh9uQ8rZwc9grj",
  "key3": "4exrr66vWhNcwZHVVfNgj21iZgfajTJ8F7zcPgJAjztkPDwUujuSMpjwPT6NWPiaSoHBX1hxTUrpN6FuRcGtZfUZ",
  "key4": "EAXUQP3jwBp3BiYQvSkha4T1F3jgJkiqZFdniMD8C2nMny961LSkQWXVCBrNXnyLQt9foiedo7nWY4R8nUqnsoN",
  "key5": "2nsXRiKGs9vYSX5HZRqEZaJuS87Yf5DcCuYKyiHh4PHRVjfLcLAekGotF8k93aqQYXs1VPD5usEPDJ1tvNq6LiPG",
  "key6": "5uZGNHmtcZ6cW9eZfvJBNEevxMcuDxxp8nBfG4VDX1qrfnTdLYpCDsab1D7v4tikh68xuJv5aPQir7xaNTVZ25X2",
  "key7": "329J51Gwa4PDoGycnDEwxAVQGXCzsBtQrBzAwAK8VvLUuy8nTJaNBmg4KA6iVQoamjUHZvjVr1N2X11FJA1jxzUF",
  "key8": "3HMqJgXHCSi5yKuSrH7ZAdNLHeM83Xt6mPGn4hfp6HqJ5nGDUSnqcSWh3gVZhajYM7NXPfJqunTcAmtW3jkD26Fp",
  "key9": "2mQiFFJCemDvn9DefeFjEHPD53AtYYa1RUkA7TpeRwpk89fih6HCmsZG8bK6cdyT8TXzaw3uJoL2onh8a95Zz8dB",
  "key10": "628Fnb43oYUyh6G3UBxFCdhv3BevWtndypoSm8iSBePS8p97CXaDmEozyLB6p3H6yNgrtBFPuvZ3bPvsWiXvdUB7",
  "key11": "4pRimpB1EprTym7SguwAK64MGMTZFd9Aopndo5HsqsWJ9g1groPuMXew1VoUHqieRXpGkKeVFF6EyhpaNM1ungFi",
  "key12": "5GNyYTz1w2UyiSDJeb9eb4aV7jdNBfk31tapDnQFB1kUj95eeFqNKJeDdRBoU1eCEWmGDkw1RpCeS1okusd15qCB",
  "key13": "2bnMy8a99TnquP1TY3Mp4d2Vos3JYA4J1rfuPRFEYMfv5U1ANbf1u39pBDjqk97J3QVsEnUYquT6tTzwrqh425Nq",
  "key14": "2EzjQJjGXDjxfgBy2JaEaqN6AnTvLrhKr7L4oj8F53ntaFi76Xn87idaVaqd1JJStd8RHyShaPk2RzvG2P7Kou3",
  "key15": "2E1QkwBXGwNzJcEYNLFDJnjZvEc12S4Z8VQjwNiczVjJnL8NAoUWDtrLY3sdHzH7tVMbmCARGFJSfyyY5ENEkUK5",
  "key16": "3CKgLEaK3dLR5v1qeGNFUddGbJjmpVJKV77XXZtiFCy91Q7k8JVevhCXtiCyFfH1E78oj4SPgqk8NLGzf14weBob",
  "key17": "wT3DteegedKxg26c5WTQYUT3yzQjwuriueNHxWNBaiPjxh4S82XqC1ZKAxWUdasF6S5K9L4u7bwzKXawfY4rHCm",
  "key18": "2bPCGMzgXDj7jse9MhF485dsFBuiSV7dFCqJ9jL9TtVwKG4ws2kVuYwY4wfoauXGcafVsEW6Mbnxsfqyore2aoww",
  "key19": "3Yn5uc8ejTsssjSzbV4kMVA1ki4PpBLQD6zEQVKreTDxfXxvvxkeSusfeSrM95ZMXroj43diyTfjSMjprNYE8P8M",
  "key20": "2v6qhnKKhbDWkpMaqhFEs9ZzpNVNFjs4j6Ha4qWMK7Ub1fJ2yPvHk9SnvNCpTpsQ7r6n6ouH6mR2Njmr3jzLeWx4",
  "key21": "231gnWdRL2axd3C4bZcqJnpdKXYXQAYJi5eYArqRiZ5qUkqcwE2iWTnEEmLGPdooXiqsfMhhMVfJPi4yxoRfJL5X",
  "key22": "5zNKA8PGB5wKvDn6eEWT9XoVCLFgeqzZpMhcnc1NusJMCstY2DYAqqJpTs24kq1k7ZzAfP8R57vWnY51w5Wn4sGe",
  "key23": "4BdYmwAwjo4fadLLeYrxAgsThVtW41efKPyRrnARMCEUqoVd1Bm9QoxxHSBR6hupatiUdqRG5KMe6A4grMdRTgbc",
  "key24": "3tK7TWSg5p7EBY53JFXZTiKU45Xf5sQkCZ2UhGFykSMvKgBQDBtviSo62QxjbPWmuk2CLyc14K2Z7sCYBgTaU2CY",
  "key25": "4yz6mszvr5tb6YXZZmMHttDxwjbdJEt8Syg4sy58TGbzw22zPBtRLBn5myYWfb6JG4Hnc6Mw17kQikJD6C5y1HFt",
  "key26": "4T54nkN3RLLdF5otjEftXicpmeS2Lyd9F4QsvmjMxq5XeGJN5R8oG1FE2fSQKvqfVxKLRgd33vXZ52GJv1vxwyV6",
  "key27": "deRrQxe64pehXFhoXfDKDNoBWTj4WxfmUd5dNep5CqiPnDA1rdJB3KhaYWaYhYHi6W3rT7c2eLxNXv7StdmcPjL",
  "key28": "2MJnRG4EHEhnx9UtnyBniPMBWnzsqEBBstR4tEB5Ge5k4dwLVZwTwkezTF5bmhGqzTLeaspH2qMifsGH1qPkaZUt",
  "key29": "3DgsfNMoyvk3sUG9e96rHUvWGrxP9mFvJAzsXHG8oQWyRfSGWb19FEPrfydk7hc4dJkTe6eL1m7yAsfUYniwzFZ8",
  "key30": "5fBzarWMZxHM3VHxqzkuveK5i9JyFwSNC48pFacknDHEcCykjyVDtgLJe35EQMmYKjF3g5rNNvW8uZTFoYTYGAs7",
  "key31": "5M6XHKonRdD99L52DBaHAVp8LpTT2zPVGKdzbm2wTZA6QYPB8NXReyxnhRVUoBQzdvPDN3toqaPa1GTBpeh193oc",
  "key32": "23GNFByP7et5kMLWhdQHu71fwxt6L5G214qgf4BY5D5PanURX5HodzMN9PwountNWhPD95vqFhdK1e3tQh9pPXTu",
  "key33": "5JGd7Y9hi39JTwRGXdbBpWAkHKjZhEzQGgnYves4f1w2Q9paDfetxc9XuKCgYVvLMRCFKRmcRaG8Uxb7Lubyj4VJ",
  "key34": "2EApeT1anFrTHDnNijXtobjyqXfd4kHx6h2RETSHQxDQUCxi6YxDGVdGrt8x4KmJJpeih4dWXAAS5rH1NKSQK9vJ",
  "key35": "2KqBk8JiqjNBPSKaKzUoJYfEEBbK2cqQn4GTvdoeh6ZEbBuhGDyzGUH7naaUKVGMjU6AK5VyPoGJ5ndpk1BHi9YB",
  "key36": "5gVG5EsNnGQH47GxVSHWmzDdumkUertKatbAzKsnBKy7N1QNabGCQtVkaKJBGQqQJAz1rr8xVD3BymRHrKTXeN9x",
  "key37": "2Lo65ZEKdXkVJYXXYeQzSqhNNB8GJRM4hXJRDCAKn8d6LdcRRWUqQhKe7VWiiFz88bfAkvMFNfMbCkKKi7QvayPx"
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
