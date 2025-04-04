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
    "2bz5WNp7Uy1zuCQnBVBorUVtY3ioD5YKvUQwiYRpG2NyaZUUnsReA1mjWFXWvh5v92r4w5tYdXqMFwgRr8yMkjLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XHFCN32Wcgro62UHDjCKfLVNEQmkZCPE8xAKLKqt5ieaEDHVf6MZeqqMcDqYUMeFvqDFHMT81gWo3A3CsY1vDMx",
  "key1": "668ubWmR7t8izfW36drV3PBrSZ6EbT1z6V1JQqpze46HU4hEn6CV6MAFKs6bygBQ3nz1Q7HcW6wsKtLjymo4rxE8",
  "key2": "4FWfqWWC6z7c7osdAyx8es81oeruVbyiXNRG8RnJ8sCnGRzYckhDtJnC5K7TzLboF6vDT2zcDBdWcfmq1mFk99S4",
  "key3": "5ACf7dnFRxdC7qAeZye2JCgwsn2cGDmbovytQK2N1DUhQd1coxajYDP2iCfC52VbXr7j4mhfngqhx7ku7Auips9T",
  "key4": "5TckqzYEjfEMU6MwkfFRtbMou2BKokxXwUc1FJGmnR3zvATApbenVTreQYHeZbJMLfesKapmCpD7XL18C43A2Tyh",
  "key5": "4vZkdWAAWNYeT1eUftHciBPLUCf3z7nJb6gYLazotB1p48kSBXsSsbU3wymwJXpPc3YNJ9qiMhemBe86oE4JhbhR",
  "key6": "4K3vUhKUuvs5fhXSj4M9PvRegi1FiJBmc3oFP8FXAm5vZquci39LZoyqcfeSrSnMaoaF6C3qCqZGV4K2W4LrC7xb",
  "key7": "4SDmGQrt5UTWaD9X6y44uaNPGKRpv54ni2cQrb37KN9NbdmAvxou6CDTbDGQkwsrNG33hZKiSKb1bkerV5pVF48q",
  "key8": "2j5PcWahqS6tABQvzvfhamTDSo4Rk2P4Wkdas7Gm6TpDEN3kzNFBYoiNcfjZYtgaPRvPujLB4K6TtxBFq4zLMuiD",
  "key9": "tCNt9NwCTpGyaAeD2gH1okm6MQM1gGstWCHdugZLJ1XV4FeSspQs5gmqBaHXqt2PbpoehD9kGbcxeCdqpUM5o9q",
  "key10": "3yyM5ft6eHZqmSduBJ6pHRbxkTqrAaQijY9xjVETzuQcL3A9PzWFJpT42z6zC3bWFMxZ4trqKXi4ouraxaA1Hqur",
  "key11": "tNEEg6E851Cv7dE8vfqq3vkEYm9tqAgWmba1kw3s6kqfuiH4WHKC8MD8qQVNw1gSQSWPRwVWuNWrxdi2jwXPHwC",
  "key12": "3ozJydWwEKg8acyHdvRHc9uwqoAgTL4MJAumpWjoxtmDCQm6KjxtBVTuZp7HBfPD5KC3sHfYajTGeHc5hXDR8hkL",
  "key13": "2TcW6eG7fUXDzLyUKGqeMZ5CY6deBjsZgQX9NnxW2TpnQmV9gS5gP1eCuQdm61YiupqTvkJATd924Dfj2GABzXqH",
  "key14": "3sLNXhJpEsfJkyPaqqqTFdViPiWZEbeArRRh5fAtXLikq45ZDfEVsiNyWpCWr3jCUTissKoXG56QVq76ipgJt2jR",
  "key15": "2uzJKXNUJFB3ygCxuEMXobSCvLgueFeR8JhYM9BE7uiY6vpNw8hAtJCHCcJGtpnUbYwg3wRgnaZ3r22RbZBtqNHj",
  "key16": "3qupojHihZWugCcRxcqakDvghvkPXcVNNS7vqhE8LXcaVo3STCFM4VT646ZABemekhUvnJdtC89HZFFQMbTRe1fg",
  "key17": "5pgfWFPxENTcdXvAx8bPPXXH2dFbVthTRdfFceAWqnppTf5vS3KEQfa3nApeC3uLGrqtVpy77oahcdHg5nawurkT",
  "key18": "4b2CLERUSexEQtBbsYm5SguZhN4cWYhzUPW7DHS9aBuNjUA8aUmtSx2EXRfPEc79XnCsN8i22TP8xxLYzTpjB8Wp",
  "key19": "fr985VUEvbEwcV4RaenEa1meJbgDQN168XxtDqBqmhtrmEhSQ5pV1ZB5f4VbpgTdk9VhffrkaQLAYUXeejrzBc5",
  "key20": "3UrL3NpTrGp9bmET8yd3MKPo5QXnt1dyhubSTU5Rxy2ZDbRCs9fGncxXdQTR3oV5z8e8Ff13nDUFAETFQbnSTWhY",
  "key21": "38KXpCisrV7eY3eFCHPAwVi9zcAfwTsCqBfDoB7mxfVV5UL8CbGuPe1rXR8uFbTLvLaXxdT5irvgKUMy3kgDPpSR",
  "key22": "4WLTHB8Ua9ZMXA4RKRofkRdupi5E1FMX4FFNz6A8TPp1sB9jEDvH8TupGZG1WFKdSfzuBZPCoCDt3rXmCGAGkZKz",
  "key23": "1EMx34GSQDeUqxi8iSq3Y8JocwfJ7CKU4E7xhEEMXo9sU9JBRnCiiRuw5mRFbprDxAbgfFWzpwcizv7HfnhjKvM",
  "key24": "4YXUmFnrqXpMsfhP16ws6XzXfv6yR1zgMyLAVyvK8bbwijGRgd34acbtLxvGWjSqPN3LtbLj56JuWwRGvjGZFmZJ",
  "key25": "5sACTXVvQt4uq6JxfaqaGbbEyCjc1pmU9AxC7sYhiAboBUe2if8rttCz5bc1yBxsdMDJPntwAbWq5JaYBiVHRzaV",
  "key26": "4WameA5aDZc6r1dHyTxHDGreo9JcY1yn6bGnQBPTQR5EoH4uJHLcHksLE8kQ8R5MzzLFiTx37XCcR2kemrZf4Zrv",
  "key27": "5MDKrdYktRmVAxMuHSzK3dxPf1xD3YqVW7JbJaiZNZSMzvq8VDSMQpDdi7PYKGLbXrTso3aLSPTmz3C6sAd6JVfn",
  "key28": "27vCV6MBJZwJbTPBiZzQkZsg65LCChnoLMCA5Y3RpUHNNz7fuFCJzhDvJyHCXSD8cCTAnEcv3zKfGKea1sEcPuLX"
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
