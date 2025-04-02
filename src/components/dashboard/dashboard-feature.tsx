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
    "4ERJdZ15NiwVXE8BkDCttaCG4nVMWGH4eQVAKG883Wgn2jNL8eRWL38yYuSg1vj8JhTrWAnxN3Vn591cutFbmHEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q83EofakJYuLcoKqadnnn7zCn1QWgiua3nW1VAaZk9TU4Zuu8D3SsgykGc1sETcmtFQhHYLu4SYRToNhZBNpxT2",
  "key1": "4J5xAKLiCzyqXpyznCQPSWfS6gU98U5m92aRUCfCcRYxYgVQBPYWEQGjckwEWZyVGmkn6iPD8zWLTd1ZbsiL4paE",
  "key2": "jemGD8zW4oypYtNpygCq1KfqAZZerxr4ykJVgdEbezAXogiHuVPUVkVdpfaQpDtamaGe9tzQnCMDhN6M129dT5o",
  "key3": "iJGHiDaWxCbDrkknjeDr2t63FTZ1YiLhseUrhRUTHyyShDioDhtezcQdbFsWzhHsurmPfxwcQoUofdopEvMMzUA",
  "key4": "5QTUdLj5yJpvcJk323kAR4A47Ksxg38As3adxgfKfpiMAyLELSCqM6xKCLtCrQExUSL3HWq6KV3Akc33ghtK9Vw1",
  "key5": "3j4he7fFvzmodSGYEktM626T224n6793KT37br2Y6tSUkF6QahSX1HPUHYhXSmMQjjycPbaQKFgqkdKnFhcCJCfD",
  "key6": "4tMjAcpyZk3GtTBCib3y63K68cCm7XeFpDiWqRXpEK2hrX1cPiTnSyZZDVj6GRZcJRyPZKbTXynuY6SVF3mgi2cm",
  "key7": "3eeA3wVkB8prtpPbptZCGVi138yTKH7uPHHJ97GtyvsscRzxUsV5yytjp6wpYYtX3JoCuwVheU3RMB7NatTvRUBq",
  "key8": "63adbwdbaW9wAvbJvrXhGmE3LY5fxaaGy9BrZNgdinobTWcarDk7XXeWyreAdrAT6cwR5WghBmZMfpuKNaYb2Tvw",
  "key9": "2L1T2w7jjQ4ZujF3wunnK24w9Z2UYaWJXLnEu4CRj6z9bidw3rE4ou9UyvaykCVNUJSNQw87ypNPYbW84Szk2R5w",
  "key10": "37g7oB8fSB2VmqcRno7DkAtwUuZxb7fDM2uaYBMrPASJme8SjSk1wvhXdjh9SUjM1PpDLuJMKSc39kHxtGzbFj6b",
  "key11": "5exyVQjewCAwGTrCdDvJpAuU26Zii3hz4h1kwemCj7FuQ1yM5XxX5Db26cFVsWA5gxr64TwXbexVpYKupgcB5uT1",
  "key12": "3TefZ98BpXEgZo8hsHpHhCVMdBRK37mekZayeQYAPr8DhzbD7enpb2a9ibNf7xa5Srn8VeCxnSvgngYuYamobrHP",
  "key13": "5gSQqr9cF8MnpvHyzjF7rM6ejDxEGPaJ3Q5VTwxRikLUCKm5ZHsAf9ZHhMjiUvjDBpYgAWz5dmvvCYErGmSeabWF",
  "key14": "5LPMRwnTyuFfbS3T6NWtfSD3dLJoeqh9AZs89nkmkzYaoJkVon2eE6GjGv5yAEk4Senq6XVvyn4mKTk23quJkutP",
  "key15": "2YWRCtaj35449MxVLzdv1Adtcu5aKtQd3CjJM2Mw8E6LrhF745uAjprst5cc6yB3RSEpfMobX6snH5C9cdcQzXXu",
  "key16": "38Unt2ZGuVCuB8zuxj4Q2yTuqYwWtLRiPppAMfm13wGTeqgE7D577zqq1K6u6FoFSwvM5SfSB5s54F42ExVoHjLM",
  "key17": "AaR68VVFPCzdvNWVBSic8PfGPJvyVA2GWU9MhbnYXigfUzvMQhBJQiq1s64W8p9WLGBt58884KALuH8WgNw5UXu",
  "key18": "5BDsd7tMjmQovYUBoYyzeztc6QT4F18SkF77g1anyzUrp2WCdyjiSugwkCHc36nBZGGH9A66TNk37KaytSYSRNe4",
  "key19": "3fh9wSbZKJccBpQ1d3XXh4AndxKYEL5QyfoyBVvhAZ2NArZJG6v1Sscjq2D7iFhrd3JpBgJsnRyE9ebsXB8xLNwG",
  "key20": "2FVTN4yDvzw7Y2uRNBsCTZgtd2U1YSv4komDvdaBoMGpirYXfM1rjo7fPLxj9xy34LoXK3H41iciRaNd9nzAp6jh",
  "key21": "2oCfVGHXDGEaPX2pWY49TCmBbD3W7EoFyg5gDe4GX412xbsHrZ2qJ9P51pne1RnUMDccCCefmdA24f36zg4E7gv6",
  "key22": "4PJyHMfNeGDzGX24Q8R1zhsdjf3TANTW457Rc3Uk2WVRxpEHNp2Pp8u8thzS1ER5YAitnYBu9Sg3kVB54gUzUZkk",
  "key23": "u76QR2cq99oH9i1rSTBSG7oNa8tUyvYCbCwZZEdD8Ti1JqSqwgESeuxGD2U8DS6tH4nddMYF3thdWRRn2aq99XR",
  "key24": "33BMC8Dgq6WVukmzunQUeKWYp7z5iLaJju5S5JVzwK1wpS5LqU4myknLP3h1yuvu8ufeSLkQta6yH2tLX9CEyZt7",
  "key25": "4UJ92n8pWyyXTNUAX6nRqHpVXrNmZ9N7CBVeHKbJRubomGUfUuj4LzWzXBjQ8yhYqD95L1tLApKTv3D4gtMhGupg",
  "key26": "3MGNZxtVgt9y5SPhZWx69FA71jGUBapdnH2VQAVECskksXXGARSXSosESjNR2c23D4J168WDqg8aCdPmhMHKqSYE",
  "key27": "2Kgauf2EqCcvbERo7BMA2Ha5KpFLvDa5NEgL9HmUa1B7dSK9rtyayPX5qXBmTA7NA16VLhrGoYbe5n2upbD3vuNE",
  "key28": "45nEh9u8kzDMzW3DsKppGXiy1KLKUP6s54ULSzV86wtp9wnNVTJid6dxZjSwPkcDaDUT6aYcuMFZz6M7PFK6EirB",
  "key29": "4gm1QtLvEtUbvd6F5iXAznc2ujrRVvmSiUXRasAjBQXdaaQM8W4cAyy5qAHhW1nW8XZGQHfTBtdECJbapK2xes2H",
  "key30": "fSqsEdeqYqy9ju3kagXpcbYDznRDcjjaue4ak1RRjmK67qUP7x89teN2SDniieN7LU8c4RGVuVWg74SGQUmQRop",
  "key31": "548pwsoV74DRRrmiZzi7WRnco2tYLjsxagMSrNR4vzma517MLQuVD7dvZDL2PKeReztdeWZ98yN6WzC82DGQfLrT",
  "key32": "2usj2cyaL8mqTpsk3B8uwTEgjXT7n5qBeb23zGw7rZYCYmfAc2QSyEtTvaD9SLF1aVBu7DkaSuayKA2RWpA8N4t8",
  "key33": "fC1TSB6c2y8SnXXvNfsctFBvuuxQj4vr9ypRMoM9B8BgZxXPxcs86KNMqePoMWZXrFZJhC7yN75QFYTkovGvVF3",
  "key34": "2NQ8gpoNLnP3PtUan5LTX5gAcsqa1byFGt2auo1uGmaoUfwZZgU2SGatCPtkzbdCRYw1Er5uioC7KMaS1sD7EiMp",
  "key35": "3mjJKVXuNpLfzoN5pEH7NWEXRo95uDkBzx2gzBNhqtBbQqtxXE4P817yCazaJcyKkfDY4MF8Z41suqmmZYMh5Rfi",
  "key36": "4NdLBna377v8MFNJrT1ykhKFzArrr1BKSQ45kofpy9xNHQ6RSNQZbfQvYMwarYwwDMHcucsodBhqhBubuugJrNgu",
  "key37": "4ppTGVC9pA2YKAKgDkmnj2thkBTgEvzSV4ZNkmZXdaWutBYmN5RAPLAzR4EQfZCnUWvQGdZC2YkyhxYqmXwhRDtb",
  "key38": "3xR1fZsaPDA1zvQqFageW4b5WE9YHCLL9NASKGSMsK5MptmgoPXf8zaKfJ5x3JVjdEYJwv2nGw7iHePix5kdQLc9",
  "key39": "2PZ2yqQVL6RAxoHL142HmTDVSBjUuCPpLbZ3rd6PmgkN84escRcFyoQU5LvUDtKfQZuAQ6tNAaGCGYDR3LfNxYPm",
  "key40": "37FD13cJyJwiucsUufMAYMXF5uAmAmoBkdG2u2F86iAJxzcb81PFgc5eQJ5iV6cqtzLJwdPHJ7v4BV3HRRGR3PLt",
  "key41": "thwNb49aW6Z1monGCWmeDuiruFKTomXm9ysYcUbPgQL2L6xmWHsihyJ3Ybi1uJLeRmuCMz4sAC8YmMBTd93ag7Z",
  "key42": "KEMV6gqvcwhwGXBxs6kGd5rHhmyQjBAdvhu7wypT9Yv3JouM4R27agPuqULe6Y5hgiByUBynSipUfrx82Ajcc2z",
  "key43": "36Ww8k6R5p3fYjJd9fPrwPshU63X7X8Mv4G3Ft4vPjGXiXHbiqCRPEGC5jUj5USkqabdmpt953xFWvKF72pkVKC9"
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
