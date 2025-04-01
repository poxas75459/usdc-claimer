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
    "ySVukdRq1eBHyQmfJWfaN48mCnHj5mCMNCq8WCaqhcVQWV3qUEZiNKgGViRWVxU3bSMHbBXzMXiben59H3FAeYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVTHK48Ux6qHz4UecHLogibVQ2igHSkfjCVnYHVhf4VXjJeiKii2s5erBrDDnNuxUU8aactMFzNwR65YbiB8KRT",
  "key1": "4wTKhvVwPokW7enq3PcLuxr9wa1VuP2jbiYQxPHdjHajHdcMm9g4U7zH6zVWKuqiDXrhBx7ER4G2agJNPG8B8tkh",
  "key2": "2QDMaVDNfbJUm36SXD3YBEvbYjQc84mJ9Y6eGBWnsSYjfMF4KWaFQ3FVCBfbRn55eyBfVLgQmJUPGhAkQz2Lfiqg",
  "key3": "4iKgN4fdaGx51crzfd3dEfg2AyB6px6rNHQz2CC7xmV5rw84jqorKcT9FERX4VrqdcoHBAqy9kFVXqxZaDqnhm5u",
  "key4": "mv9JM3KGJSBKGcj7hZr54NzN41R4jWHraGbCgXDFfnJxE6GtsaWJmrL4n8nnahzeZa31yhCz7tPj7ctYWCxVzcK",
  "key5": "5vRgu5EF1C2QfVKFzPAm1B91Hd7Rm9M76tTvFkLn5N2KegXpre4CVkVgpCT18Ev7DDe7zTigTWWvEJq6DK3etNHg",
  "key6": "3MgHE3e4kdfQ3zPAGihLP7RcUBSBW6TvoatwL6fdfKz8jyjfKFaE5atnEk8JFyUaW69fhxi1KGzpuK6v4SAveq6p",
  "key7": "TzKNeiyx7Ns9SiPcHjnMptmUkAQvWECwxiMRMri2SeDSu6bP2sp9HeiKAD2dGqYepgd888vEvB5Ts27i9V8vWdT",
  "key8": "29Na8F7KfpuW5fEFMu52yKgoeBCUQceJPficasQzCy2WkiKgY6Zq6PLeqicdu52ThbPuguxQEBEDjg2LyGcKPx48",
  "key9": "2v71Hopmxxiy7bv6iap2DzKPvxvD8BYYo1YtgGj6CHSvx9N84DVvSKWT4pB7PmP6qZvDCAG9vvr4ryuxGLubNBdM",
  "key10": "rhxeu8UoGYNbtNsna5qekPFWjViQLeMo6z61di1Sy9nDjzP7JdC3kXpyG9rkFq3eb4bS9iVWZFn5jKn72MyM21L",
  "key11": "5d7fo5KScJ76GfXp5NWHzAp7KdpD7dvrY2p95QfzfrNeetaST4421bBWzJ5eSkqti94cZHoEULbZ152qxvwXR3w7",
  "key12": "NUpuNAXFZ4yigUd4kzeYzT3hp1J69yT2GvKCt7RvWRUbAkwRhTF6zzYzAMn9XDKrSy7AFyfjmjBjuWgbW5XVJjz",
  "key13": "X9VTSgniSXhNDAKhiXDqKYqGioovHpU5MoDfZ5EsGEQHwYy1sr2sqf1Ztmot1Y8cM7fcY2S7sLrBYtzYHhmiT4c",
  "key14": "2jvdN1La7MQC13SS6Hs1WuA1jkcMEeyfTeA4rwDS8hx1DHL3rmseHZSCHt2cpsmk1bKH9JDpJW6sjTLFTbXjvert",
  "key15": "4yBSUuwtLX85tGy6abSoLtVYAWory9KxX8bUS69xUBE3wRGaXq7Ut8pvQRxGZRsE22agB1GfWdZAkk9oNcb5YpH9",
  "key16": "48VRBJVCdKFBTV68gLgyTQZeytqyy2GBNQPa9EyHJtHmhn6DufsHdzC7AoPyW5W68cbCNb4fYZ2DRpx2sZHNWsyY",
  "key17": "2Wd7wQrvyigsAvj55YhcN1CXQFDzNjepkrUTncZTUjbjkWp81DiVsvsnnG5znv8VhDLi7ByLeLmL8GSg98pm2JwZ",
  "key18": "2dCMe6xCDQqVcPKnaVqJsAuPPLt9u5PuiMS42pHXii7p3CVTP5cKtmKEzAVQFnyudXytEVnzq3NZ1R1QiMRFFPfY",
  "key19": "sucp6xrqr4GcjsSAeLiU1EtS5pdpJvWdmEaENGjKWDVvTAFxrR4wskRcezajPEXnqJfG9D5GWtmH77SSNCZ3DH1",
  "key20": "2ZkFauqW7VrL2FJeKwss4ZZQ3MvwF1pm5h59ftRMfNELmKApd9YFwKhbkqv6SCraQWkqjuSotuX5dsXhDGBjVM83",
  "key21": "4AKJgnWojELLXBZc9ESrPAas7474xocc2G4EVq6nZb6EhdDfD9JHhCF8NrZ5goPhcDaG4WGTvf92eFknsGAv4CgY",
  "key22": "4xN9C1X8uFHgR4kwwpiTAvHKfcJnoYxUiq6rFa6wBsC2Wd7T7J6uLk6Y9kLVoue5zbYFGntToSstHYyiqHmyEWA",
  "key23": "2SdW67nAmme2dPJHdTvtazJZYiH9V7JTUvDJpM5LQzjhwJaUoXRCh6rMYtBohSGrvQFR4n69T5bFrL9YujRbwJtv",
  "key24": "hEBTktGfZbTqcHavph6N5N8DJsiNnJDwHuDFQwFxWtzFFjv7586xo6LdWVNjPL3iuuoe3rYG1wASDGtDsL9sUZQ",
  "key25": "5ZgR5tL3Gs9vegPcb5mUcZcoVjGf4tADpdQpzwzdFGNQ1is3yX6BJbXZq31GEvvLgEeUyqYiPQypagitCqGBN9go",
  "key26": "5b5cqgbuwV4KgAeezvEfTH1Npw3bqkCMiqu1GuD66foB99JrJVc8zZRCzUA9kcpDYUoJiY8zzJTVLRRRUDT1hWEC",
  "key27": "4j9FN671g2MJu1nCT78fahb7kdxUZnpb2b9bAcnKGmn4ZR9i6x1VpMYSWQYvAndJRRqJfByjAim2iCNYtH5hcebh",
  "key28": "2pzC5D6j4W7gniHNRwf39ufCW61aZQZhd4FYxJCTCzkg3BaSfdxYudMnr8HwbuxE8HLYKEQ1WivdgBqPQ6wRHkWg",
  "key29": "5AbzstwtcyHJ7YXPsMScD8HE5oPjizQDXiTwjx5dhUC4evaURMwgWCey8kPzeFX9tN3T1Bm8Vn9JuV7qc6Et4fPy",
  "key30": "2sFej8FvjcVywdXY3rx4hJZqsQuCe4x9eqoT5Cq8xucemDBX7NGdRCa56fnK5jFntEHFz1MthmDnTNDEJD4FFyTd",
  "key31": "uX3nAjRKJ6W3hmm7sY5fuayApC8vVgy9iN7w5PEppUoDa7zWCTs2zKJAhBaRoXcpsCSWB1kZbVivbFgdSE4NtrE",
  "key32": "4Wszmd5fxmdpy1MyU5LEh9t6iqJek3uDn7r9NXfaxQZSZrzLXSkkz9t7wLvtZV24ZtMemicEbmHEb6euapPYEvE1",
  "key33": "3YYaYStTh54CHLESxz82fAqrNTKtrzJbrGDfcPxS5s6beEWiy94UhKwCdqYjWZLqpYqi9gZtZAMJvaXikA2HWjEc",
  "key34": "5LnkzoaLqjZDBgNX1jrmddgPUk3nFBv7ePoE1PAV72YBaUfzPqsHfez8QvfW32CjATTLNoFnosDg52u5Tdza2zbT",
  "key35": "26w5jyenEgm1JbEHocmf2est2k9BRuYfg9NmMbuwswKyhHJGxSZqVs4Mhn9RA7rpKuGGrtvvaxAfmxVBzmMrfjiN",
  "key36": "uucxfoP7iMxPpfxMa8z6jieQmkntaXvuWbWhStnbzqUtphu3gWJTbAYqKTWcxAAwZQA9Xc2Ljp8xQaDinTuXC6k",
  "key37": "BTcTtgnKRueWnpaLkNtxQHKgVRwAgy6dwxP473RFZUkQHc59en7VNB11HhgPh3VNY1ver3X3t8U1aQPLQyxEj3z",
  "key38": "4SpmeVaVqV74yrkvDEW4yz7DB1EyCbCHg1VnesN9Yn8vcWKNa5XBVbKXSQk7TeN8dAwTQUD6cy4Zze5LcZ1ZDMGr",
  "key39": "pg3qV4UjnixLFaevEAv2UMSTRn17cJC6xkRV1HzDvkVvwrW74tYv1v3nkVToRk6qyNJuRwJh9NxUebaBTkAQhfj",
  "key40": "2YSXdSqCQtKpcUidXYc9b1CoL4sDT16FDZQGe81hqKktdV2N3rZft9zWVRS6a8Zh9tpBX86Aaf2fW13Kor4dRi19",
  "key41": "29zABGL9X4zeANRs8spQQrC5pSTdmg7FHRzqVbhjRt6wsauJpwRvMw6tD6D31bNBFAFP4SFEzbdoJ23axQidaLbJ",
  "key42": "QbP3ebRrHypYhXAMjWS7YJAkSfiK2AEw1RaEYJrYzENBi1uSsJ9vpEXSwwViWDfqUTWQUTMKwoYGJS4pV3zzrKM",
  "key43": "hMkDU4sNqZNvXYjmAtoqrD5J3upRkZMuEgKKfDJDXnMjqsDfecFUZuUjmgeuzCCVowZiCaboRa95eH9PZRJJdMb",
  "key44": "4ArVJhetsxZxLXNH54WCvnNFGeR9SRBU2pEskzia6y9rU4GQBwKPNguzso2AxuHVUv66tvqvACsSEjbcJ58ePAyo",
  "key45": "4Mi1XHFkoahJZf1sVyrctDg7BFE2sm5fih19Rqfy6jh3rrM1QsDGoQN1YG8UTj6Cs27PqBisYS27wnyJWP8VEK9z",
  "key46": "3JpsJoTjxTH7cTVxAUsXt7nP8enNSZ9HUtKKGheknBCD4UXq1NzihQuYKcAUh6fHJ3VyMnxraWtp3gpwoBP57Rdz",
  "key47": "5puxPSZxX665JhPQiWyhGUAQbMTP3sNgh899AW94mATjtcqycgTgVPCqVu8kGi8Pt8gsGLfeSni95QZDxMPLuyXr",
  "key48": "41jSUU4muxEUGrecjfQd6WfUXGxj53uji4wpzueF1XHtt3jwJf2xyfnQr5peqfxGLAg5nTykjiXMoBm9XpNWhn8W",
  "key49": "5SeGkrWDgKV1SCpkkdFh1ZvSMLMm8NxrmJJyVAgedYwNC6uiv3wMuYtTXNnUQ7t4tZ2gQCEGHuLMyD2JUbgEoUZ1"
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
