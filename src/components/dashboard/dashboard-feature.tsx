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
    "3nHR5FmPuecetcdFuaDy6n6eJaoRG4o8EyHG33xWkfGdqP3Gxk51pMXrQpgHCTmnAdxoFGfnX2zKVEot196ZkbsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F2NF2hA5WzMmYojNesGSHL7ntz79xMJERg1TSYdeKRyZya8ZxnMgyMuWgBmp65mcc582fUBLALNfAEzeJkmF3Q6",
  "key1": "3yfxUKAZknpvSRR9Q5rJD9LDb8bTCRbAX1avs9JDSFygxBV5JcMKpC8woBw25gBMnrWT4ZnbAX5vZBBTfSQonRPE",
  "key2": "3U2WzagvqiVuby5rm54scp9KysARFkE1p6qUuNPyGxGLsUPqaoSpxP6bYPxvDQgyHNqNqZztu1JbQjpMgP6zjcPA",
  "key3": "3HoAt9SmGpJuo6mzLKc23fsdxNVQN247wQkihX6ykB3WEU7bsQRBcBLf7cNXNgRFwzUK7tcNxgkJVXc4W5y3K6f7",
  "key4": "sWPX61gG7RsSMNDYzfkq16KBZwhfUQbaXQB38gjLHtTpFrqwHLQwGEVDmnFphcTyK9NsYHK6K5TczscQZs1zza7",
  "key5": "2RVXAMBi71qHR8GcPvMwFCTyzgFEsPMxwvdHJ8a5gL2aEjmPrvrYY8amH6vWVDtkiTaGNmCg5uaVAiVLoTcHemqx",
  "key6": "4cqTqjR7dP4XHfLVMpqZBXevTRYW98WPxeb1aQND2K41oaahyVE41pWyaSEtKrrGNxrJGGCsXbvm1KHUrNFEcmg",
  "key7": "34VDABZcvuyQfJdSJf2ZTxfNy3uXwkLVzTkVyKfTuhQ8Byf4n9oC69HM61WR7z8yUEBpp7jfPMB5ysQM42ZB7EKe",
  "key8": "3yYHMCqpTFaCr7oppqen6C27AfwhWhDJJaoBWoj32ZRbuUHk852HxM3R7roDqH3gWCSB7WmnM27VDKUdmvT2XqxQ",
  "key9": "4VdQVgaHA2z2wfH7ZSUkDz7TPQUisLUJ8eum8fvyLJwpphZPEzw2dZg9J8QoDsBGCoHBfuGrdsvjLN68ektaBeje",
  "key10": "2omy1CR9MwwmNsczLGaPYfDyW8BbYfAnJpWsTLgGrtSG4z7E9keA9TEyjTHwYLfTeEDaSuBYs378HqLa9SRkqBwD",
  "key11": "24mLMXAsMPV2PqtQNkkT6Wt2BXc4nKSm7DvWThARJgTv8HAGcTaAbWrQ5xcD6EgxcDzfzMc2DyMiR6Su2FeRVxoB",
  "key12": "2PrpX7mXKbgmsJpdo17NbZZW7RWnfMFrBHB6uTDEmbLmEtA3QvbQjSYrq2Yq9ptfsp64MB2s94oeMVNHzRsRNepK",
  "key13": "TATyXkEC9ohyudutQgxHvN4NLte9bdUWspXDzNJhTBMCTN7vzHfRvMqKi4TCotxSzSg2iFXACVhVyDeQxzvhKZt",
  "key14": "2vSVdm61uePtAvhszQkYJFt9orm1WmdyXiKuSyH1mRG65S6nJHV9sFGrbUh9jAUEuQUr8GmrX72FseSMSXMQSJbQ",
  "key15": "66i1BYucJAvkW7z6w6L1zGQdYbaTgRtpAYgGR5v8P3TSG91SzWTMjdtCuAHhZrMe6FB3LGSDSqZuFDKDb3CgHR7s",
  "key16": "3kTTZqGCDTGvUFpuHD4hJQEH2gGawkNmQGuAegnxBQDv7XvXqDoEvrGgWPbUMZ1c3HU2bTGS2tzdUwkrHT1XWLQs",
  "key17": "2rQMnmuGwRyLWMDFYSmSdjB337Yo3yFdZ6pTqRCnPUhMn7b5NRbYJtdQymBX7mS7FiRdLxv989G86HhGE92P23Sa",
  "key18": "kKAVVPSg64TZ3cn78QLvU19bzAWQNrXjsf5BMqiLKgC2XSm1aT4a8rfSMCtZfrsiWh5QretvVV7t4gN5QYPpAQv",
  "key19": "47EaVuRUdhMMH8zzHxBYuz6z6gAWfxtvV8VW9R3rcvtk9dVDZHn1TNZmpWJK8njgFiYNdKAdrRgu895EqzA8CsPJ",
  "key20": "5WHHKbigukMhBaRbaqWQY2r5endxAT2T1kBAoTeSsVKjKo74nsSHWepz39nUSTJrK3jywymatjeEFX4LZmZbU2yN",
  "key21": "5FUevs1VYbNhR6QvG1sz9hroZqeiQ2sdiVYz3KWKLnrNcW54hzWNKU6wBjWWk6S1EQFP1T8wCq7YmzhLB4bfALuT",
  "key22": "5S2VLS6nEiXNWBgi9UtEfXVpnAv4hD81GdrYe92TR1u3qFfcBtUUFhBsBwRYUwNX6DDuHgV5rL2nDVcUi5ATYbBf",
  "key23": "41r8djbbMnVKDzJsSAbrEiYxskCP7Xnepv8Cvb3yjCAjbzF7okCU9EMHRizgTj5fcGh8sR3JMmDmZXJ2tYYokYhr",
  "key24": "45SHujAewBFL2dfaghkwewEKE7KZ4bHNPTTmCRjxq4R9fwtGdGp3JYxmQDBVLJ3ovHf27xmEZUEZjAKQ5RZm6VL4"
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
