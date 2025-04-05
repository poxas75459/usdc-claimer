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
    "4Q4eoJj5JHiEjvcVgBnYpb5D2P65cmuzpNz53MYRCWk794gDt2MxE5STKBowUvw2s6juFSCsUz2uvJPgfDU3nCLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55uSfoAct2xAgkTg1mqnuxHqwa1UbctRX7YWoCPeXfheCft7RDy6USMJ3DKGoQp1sVNrbWZRYv7GLdX2nVwUtwft",
  "key1": "y1oYXbZyKfxdefwpzFWCnLaBCFUAayktvgLrVqrCbSx4MqrNqD6YsVrN8j7ZaZoA8uKoMmFmMdwT1nk8nZ6jF9N",
  "key2": "5fu8Yfy6PgoZ2gUXTKEim5KL21fcSohue296uJRLsi5K6AZCPJsm5RvEoWbvf3cvrDNUsE7g3bmkRR36dFCtAeMQ",
  "key3": "3tu7Y74VM8WmgtpuXkaAeXs5hkcyoRNDJuJCCBirB5XoiiHHcmL6dBBiX22wvQScVvBaQ1TRct8RqtAfyCrymPwD",
  "key4": "V2VWPtKaUaprKJvuN5hLdQdqshSCEKckjZ2Zc2njHbPLb7AsQErvt2HG1S1z91Ci9rEMpWjJ3RNQDnR3J7bMVbF",
  "key5": "5TzqtPxxN8J9WMpLpKdcYi8Ve96aKGBKScEaUjtXBCe5KiRL1CcWgJCdqqnNWtqY9xvNDiNH5Ze9Li1ioRkrRpQe",
  "key6": "3Pk1Fbwsmr3mL9dcgBfh7rnjL49iEh22WqQ2LMZgCbPQwQUgrbTfRZn8XzwkhPH1zPL3vrxskEtTdk4SseyVB3ho",
  "key7": "3WpBWtWCTaTNSdX8mv1MZ2E2d6dvNUubESWi9uwKRySjESEzfQ5qEhkJRDu4pHT8A9U1eHiSX6FZAcJtwByfBuLk",
  "key8": "5D3sxcn9DsXQrojRxDhHnU7Lbc2QEqfirPEvBWBTw6MKnoPCNEWoLp3PBM16FmDEixZb3pWPRZq8w8SPPhahceXB",
  "key9": "5EZxZgbAzbFwFWJdQzHwdMjs8ogAtaBoe5HPWzB9HD1i9qg5v9mtgHMLDYLdR4hNkLyWADbWxQaECRrqBTnGkgFa",
  "key10": "G5owpaUA6PYZvq1av8aYMbhwLTrPvtao1KVrAYHwbNCzzTMvkDjoR5q4sGbi52JacnNfjPRk5LSRffQGCpecxvs",
  "key11": "299kuz2MtWLPPLG4UFfKtKLWrArNnwZZneaasR93qnHCavXurYWGw3Uj9LkViAfMSRY2MGN7ET4hSgHqaYZFU4Qu",
  "key12": "5dvF1FpgtFBYdbZLbvtCUqCZuNnwohhfbJ4T1EaNW82qDc5iknqkr8gmdFEgncqEoYzs7mY2dsazGRGE4JZReCCC",
  "key13": "372FKJYrHshdpeayyhJTf9boRx6V9EX9kAjdEcSWmJ3WnAimhnAzg4aC5htCoWc2URsXaT8AqThaVVvdbmp7bZ5M",
  "key14": "3DXQeSRFmDPFr5RPwABsAQa4Tnfkwd9z3AASTNto2jiUw9hEtbo5e98F9R18QrBJy4uch1uZWRty1od8tEcHVEWH",
  "key15": "5vCdxAKyWrxChAub6rAThqT6WqUcMZdDt4jYDWnzMnKr2GoB3TVbtYPi5EtAg5zfQi6Hds9JX8jbQfCnDiCKeu6N",
  "key16": "2UDtLFqB1kmPa4t4GydJCV6JkJsejWwiR7exM2cSsfeqc3nQfkjLE6nsZw9E14urp4jZy6e27qPhWPMj4Tw1nf5p",
  "key17": "4MvtcW2ptr3AtH8YX19dT1xPXDNu2U3XxNBKhzJmALUygT4ajEJL8mLR92YPn2QU5j9f3YCPJTjj2F6Vs2hsEYT6",
  "key18": "3wtgz535MfHV9NMtQAJrZmaFpx8pRrBw7YarpiKLCpCCGGrNGZeMV1ZDHiPh4QsMaN65ZL12n2WavYzjCF7AirVE",
  "key19": "4VBAwKNsu6khndWbp1AXvAMzEyxE1QPknaKLEsbzWRoT7UAzxJUUKbJUbjTWw3eCn8ruLE7P2rsW6fU51gAVpmPB",
  "key20": "2f9fxdUP3ZPHvTLAGa6iK9cVdMSSW38dHtU1gwu6zxyaN39yK3mFZoo6sr3Pqt6g7V5tSeunpkPxVAYFMSyZzHBt",
  "key21": "gYET4QYEJzsdidY9RKr2mgRvjbmxKAcxHxrpLGgyWghiV9cFKUZhHCk7bnHjngAAhqHFuVoDqRnJj7jmGMBfhbW",
  "key22": "2ebXB3KJbkuHfiD58ryQXYo5Ee1VTuC64QNV42umvjU2cQAtoWob3oZup339UWzBaWtdAQSRVos6qct8ovy674a9",
  "key23": "32pei12vw2BaqNJZ2x1A6bEhGRD3bBQMJM5RMT3pwLjspYEt5VzbnysPLYka5Uq9RydwiJmWC4maWWC3mrGHLkQP",
  "key24": "42rFwLbe7pN1mxLPknr4mKvNizTfeyoNjVwrNTVwqfC2LeuiizWaxuZVQCttnVeFvWhSKGgbAz9JH6UEAp4NgX4j",
  "key25": "279iB5r21fYP6j169Px28Pu4Yo927Wf5vgL7gZLgbTpdnbbgWySsBhSvy9RM4xhqkDvweasCXkai17yVpZgmyzSk",
  "key26": "2ZGrvdSEorHwyWhUmnpnR9VJukj7X8W6A3eR2mzXNUJsMxXZrePNkBza5M5X5g5Pk5zLbE8P4EDCZWg7oMEBgeWe",
  "key27": "339RKxmM1x2aARs3WFCVXf9PWsi1MRTKtf3BUYCi1UjtewymcZ7sghhHTFJEnxeh1HpYLR4MQmtoCpkBPqxcKgNg",
  "key28": "5nkoUTHvr45zVkCXphGnHrbuQzdA92rzUVYkf7yUhSBoeHY5MtwUL3pBFpWhSwqshxQY9UCRrSsnrqFtvYfJJeCd",
  "key29": "AGoZhtLWc72cEZ3bKo3hmG1x9W5ENDvEQgXyxsc76nTEmvJCwv3wwxfS3m7Q6PUE4MKzTgqDdfVUsG8yGUSSpFa",
  "key30": "4zxzHHTgSmqsbHAWnc2DcKCFfqb5nQ4ivuPysPEMgRQkeXqySoCNKf3pZEoMo1Rj23LpALnSjpHGHvUiEkbzm3WQ",
  "key31": "5CiPKUnx6jrteseBU6EgqB2yoqN7ppsrhJQkiYLsSPuJdtdxKG2DVAS2siDCvCZRo24auBiMLDyPQwMPzUBp8SY6",
  "key32": "3PXAHhfpUmcx4V5tAX38oj8U72VqBsCepE5TrZuj1NjDztkseNK3ajGooVDbtn36HQsyn39PZzF4fABvk4Ka6DAd",
  "key33": "3LgcwA1aTdLxFK3m91GNPKeixFAVKFgib3CYJD1iARVPD7GjozmWTg1qewEs2cUqoTLQ6m5SgK69rNY5dqGDxnFQ",
  "key34": "5gm4ThrmXQurCGUsqphqd8HwoVi1cBNSvTK6zDVCvB8dRUnDR3rDGjY5ePJ86rwAG2adiNqcMkMgtv59gnwwMuuF",
  "key35": "4buWafwE9tz34YYvfnpAXFTRK6oUXfo72mqFx8TSwT46MCWgm4vuPGGkYiRHdG8XLMLTYiBNJuWFy6PKaT3k7Smk",
  "key36": "5A3Hsp6ug2Wot3a3esi54QeqK4Tst9xYxJGsatMHQVG78YbVUq42WVX2zmLJrBnwEocQZ6XxsAMtcA3xkYuC4ubX",
  "key37": "3FpXynPFUQ5uFJD6Degjic6gszfnkPcoA9ZdcbZmjmHggNX3xK9h6eBHMjiXzm86gt1YeGsFYctqEWiR5kURcmjj",
  "key38": "4aYsAWE1yKR3d3aSBTFpf6h8Mfk7b3R5vSe66ev9ien26zLmzkXHTL8g8wwtkCWenAfPWaF1X2n9m2yWDtrec68Z",
  "key39": "3Q3ZchzjrqeeDrYzx6gKS8L8BkPnbuvc8aXshGGjcMjDa4nuUoKWK48VNamYnJoyuyRFt3ohtVMmr81Z39RdnDpg"
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
