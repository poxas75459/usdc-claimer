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
    "53Tv1W5vWg7pGJd84VrJabpHQynHKMjVNG8xBYZ2nDsDS2DFKD2HbweM6WpXWeC2T16bqsaduMDHy38BSLcHRhLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XCZacNykaE2ymxKaE4gPDNrW73Gji7KzA3wv7F8iUUUpANSPmapTEj6HDTAcgdevB4vU6oPijcv71JpmQFxNavK",
  "key1": "CQRhRrpZXEmULEtRJq9V9Y4VuwHTaWdtTFg7vKoyWew8VdXD4jbLGL7zy8og2TBkmYHWihLCidMxPcY6DcW1kCj",
  "key2": "4XcKNpW5GSNxLcdJeU7J7LeYdxEKgDQKK6QmxydYnRpNxPmdEUzdxitGDznsSucYZyJHexwfnvhrk9WcMXqin4An",
  "key3": "5KbJQEJfyWBJdMypLqwh82BY6KNTrg2DvgRctqyGVehtyU2ntnPTrCPrKUCrSeBzVN5D5MvGmxWuJGjq5f9FDSZM",
  "key4": "3kiDGtXNEJR5baRFmxWw5izwc2CvmoRbCMeEhogsfze4mJkpZwcFdoQhQjuZKCzocLy2oDAdJKXXVaMyaQKeAtb3",
  "key5": "3a8eerszM4hAE8QBPqJRrsyybsgoJHZFaA6H6YbH8QfZjvmPjMV1CALBcfUpVdigQTMDbaH2Z7ysnmaPpg8pCRN9",
  "key6": "4mhdTTw4nwtiCxQmH9QTMdLBxMJuTzWNYZRhXu5RHYuFZdMTVU4aDviEs3pJxXcC9HV4XEziSFCRQ4NbjifGGmfa",
  "key7": "3dGdVr7caB2YdSCU3AM8oDqVyPJURV8t9cpYjXSfcS9rNySQPDNVFjcWytEegGJiZTJV7nPaXX92ptTDPsf3Yrtq",
  "key8": "5B3EYdCgki6y7eT2Zq2CjYiuoeqZoQ5rL1bjDg7YuJ7YG7bxvpbCYt94QCbBGiRcKaaQLLregkgDfTFXe16pvzds",
  "key9": "2asnXXxPT3XSFQiW6ujw1n7axq3fYZEd7qmhXYJ6ximoxsCmvvdATLGgq515sK1YUdv46y54R37bENCp3KXyQNtC",
  "key10": "YAL7tqYo1FpSLosYi11NJndJd36fiTR5JHL8kg4ABeb2tiH9txv5isFK6rHYr7ZVr31VGXJ3i8XzknrBNSxUadX",
  "key11": "2BQQsGgai1hWB6N9Jj17YppmhsgEXeNbdLSZcWBpVnq2Q5vqwBLSQQrJuYraaJnjw2juqag1kgxjKGkunHpG6XsT",
  "key12": "2B1m485y1rwawqW5YkoYRQWu9xaEVNrcZ2mPNoaC6nMnYMzjP54q5Ueg7nKWoarU2CkxJCBR6hzq6CFNLMMCihZE",
  "key13": "xqa5S9a8usUmn9dhBs5FB2TL9QUitTwy5Pg7wjMYuWgrtHMUgsx58kBgK6B8jL4VJU5ZkFqTfK6mMoH6Sfhobjw",
  "key14": "4WRznhTZGa5B3Y2bi9JV2vmHchhoenyMFzp92nwThVc6FZvTLBRemdSRnK3PhPpb2Mh5FYHE1oyjCy3zhEmdd8jm",
  "key15": "2RShzzjaGdpVM2LHJB5kr4uR7FnLQfnvTHUeWVgmS7E7MwoKtJC8tbhcjsyPbcTTtHjmQwvTs1C991xyjmzQsa6h",
  "key16": "4g7HTNDiNCz5oMBRrx5McBc1P7RrSGSWyhL2B7ep8GonSm77NsCbFkGpwi4vpyqSBbmeDkVYzqM6N5BWAFGRiGFK",
  "key17": "57SYv8KCHBaGYKn7PdvTpXiWC6CfqJAooS2fRD1j9Gw8cRV9yVC3RyhpYBjXL12oHosJ2ZCsUBhQCANg9o6qVp7u",
  "key18": "2k5wqi7xgttnkMfgckvuyPrSMzb9T1pNKjBdHGp8iXUAetmbGzhkxiSynFrDDMGM4bHn9NgMA1ts6krAbtHB2Asz",
  "key19": "3hipx1U9FxyBfZn2nVVGX8Ybs2B2q7Qm4UEY1Ng2j5Qmt2V9NLSVanzdxYFDPvP9Mjpvm9v849n9JQuT37WLRzPx",
  "key20": "sqhVC3Dr2zgJR68QeRD1UpGLvfURewUKXkCZmSNUxjUX5NFigPhm5Qty6FoRdmFvm9PjeYyYqe7RyvvAEjbN6nT",
  "key21": "3VuUSPr8Zic9WKPSA5RzC1f8Y6vhLgriwR82232vgcuuiPvrqnVMjyD3G4YjcHtwaskhK4kaYTYDeLURRZckxDPm",
  "key22": "J3YfTexRXPg5uhsEVVc2u3q75PC12pR2cmSQNVhghE9oM8yMSjG4cbNm8fja3WUG542ifWoLFi9hsANMapJHp92",
  "key23": "2ZurTbatUXvBk6i4uhkjL8ZGnawxLrJz27NeLh4Wk1yTEsm26ouHAUbmDDe7iL3Dd4vjVJtGDrbXbQAyztyJEMhP",
  "key24": "4XiqhirododbZyMQmowyyLALGLzYLfoymLSW6pPeyR6D2Q6q2wP8LzSL3VbAroTb9S2TJSzvC4U6497hGte5dWUy",
  "key25": "5EEo7jm8R8fLxFMAYXZRrU52bm6AcTLQVYqwGzQCyHmqxxSudYa6cSsfgxP5Wir1MCrVQTiYfZaUu4F4Fxx2Ea1c",
  "key26": "48YZr5vwtpSheJMCDHv64kyrHmL1y27MvhjVKcNba5rQMQV2mvLjN9nWZT44WNYJqwLwSpgKtRVGyfrJhEA77dhB"
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
