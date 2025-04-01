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
    "3VTL6N47PA4vn2JxwLonMgk1ooGsmMVo3Q4ghJNN9xBwhqfLewbVa4qh1RvkwkRK6nu3GeGK1MaEgPWxSHsg4Tn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26dmitenFXkMuZS9oXSgpFfEf4NZimxyiVE7yRE6eg4R2RtaVsaM2u4v1x5rS8eQq3YSfQkEgAt8WgMUUEH5z98V",
  "key1": "2LV8YtmEsJec9PTnW8yujjQWWaWyiPho6AM7e12MNpKDyw9PDRwNvV8LBrF1uqR2i8JNsEWBknJqs3LRWeK4JcKa",
  "key2": "3FXUF3zxN4PYB5nJVGpakLhZwkgKz5hBrVxVV4V2URgohBFPRKH2BaUTbVx2p576RNv6iQFJ1j4GudeZKaxTbZHh",
  "key3": "4i6pjFHPKhXsAjBgMQaiXFYN4i7eokjuAtPt97a8BfLjzgj7jeyECfzs23dFY79T3hVyTKhzb73G3soFzq829hbZ",
  "key4": "4gGiTnNt1HDi7LdwszdcN9yxx4ddnBZfRJnnL7DzysffR7geb5bv97B2ZshxGrnXkH3ZXgrEEL8PhKG3vCsSCLu9",
  "key5": "67KcUBbjgdNV81GAPf5VwaU6Rwgmcxr4LiPD2Qm9juHcF4sJapZdPC4ihG511fH3g892AkD6MjG97WepSGyf9sgY",
  "key6": "5hW2HcNzRFTQLKjaTxmZzxXjsT5VwWLE2uAEXAXwHcZWV7LiBsJswPbSQuK55iyjNJ3SunJpVk28n2XwDJsM5JDV",
  "key7": "58z1k7jbrW8fSPfi2qYjL8LcjU2KC3ENE1ozAVCTFFrrqEapWtKwjBJetpyuwMP3Ln1apXEMBcY8iSFv7ezmCP36",
  "key8": "2Uf4NGSfRw2V85sJXtG66LuCYmfcBx1MsAkQEv38LCSsTkSges4xnGScjEL5pjW4eUz9G6Sa5njPgrM7bQXCVGqr",
  "key9": "5VcwZ6ByVqL9nvW68AumwtbNBVLpwnWXyZamzZGh25EtAMPzogU8rL7p6YPVPu3ocx7VwhFKzwsqFRP9yGiAaiqN",
  "key10": "wETFsKBfTopZQXVfNVLkEDZ4oyhBZjY2wfnKWQEP5TTtLZa1v7xM5gBhzSLjwncLdAZSeXYKGjwTXVxLfditBNT",
  "key11": "3uCoKJHuJEyHJ83cHe1t3UKAUH4CmbDmTDKYyVDgQdfxHSuc28ogWCw6CuEgEX8eqrysZ3KxH7Y2HmAGeGG1UVUP",
  "key12": "3p2aHMxBTDJCfuKsGq6dAuaUgE7S8PTNt3kbV2yLaPGqczEdroKSMSSf5s5gHsvVvWumASXJ88B5hPnZq9S9aR2D",
  "key13": "28YH2NmSimwoTt6astsxV7fT35BmNqx2PsL2QcJu3rEKFx9bRPZ3STXBgPGrwd99YBDfBFjZpmNgJEbLdDHvkJQU",
  "key14": "3zhcpQ6awq6XWrp14b7tjL2H4wFPzmTK86aDdehbYHTnLQVgZCPGvHSzxCt38kHamAv24g9sSpD9wvky3Qt3VJe7",
  "key15": "2UNhEo9EMg6Hnu3BGFbMmfKctc6DNrSHeTvoEyAiXMei8yJkMC4tgoNfn3kmFMDofgJaiJ31JMrzqmhzxbMiBphX",
  "key16": "2VC52VCLCbGADx4ynaNaohf4Esyd1HK1ZvjfuCSscoSCrFqbxuoet2r9uSA5ATJJJC1NLxCaw9ybhd2u62Nxsxkb",
  "key17": "3vHsuT7EGj3NEmaha9rWWSVoU2bXSqAt5yRAqpQyqDCnJumCLKFAagwHBmQaE5qKFFCoBtrxbzVxVWSyyWjmXsz3",
  "key18": "5TEXrgzrd6mY5ufGaPEsHLXWjvjg57fnGNRStY26kdXRTcEH4Wu8HjXe6zkboEt8g1se5GZBkJU1kbYDaDj2UfCz",
  "key19": "5NqbJ44ccjLRuWFYLcEekL82QNgSsUJ5iP3n6wf5Y1zNf5oESvN73q37jRXnvurxLhUd7hCeiha5prSvwCNFN9pY",
  "key20": "44jvZ5uxQYW2Mod1eUJD35hMRJhAfrmmTifRcUbWtdUbZhCpT98CvnPpZQcDXUvCEDfFUChiKca8VFaYsosPAVVQ",
  "key21": "2C39tWyujCSKzTweXdPofBTuwjuZxgxGC4X5HKM9PwUS94YLA4oTiqJ1HZWP6PMLfTzXTf8J8HCjbFGU4BtpA2SC",
  "key22": "2dGnbfaHSweDdR5ewYVcadt3thaSUTitDJifnLxTg24zfkdjcnbs6LH1wL5ryp6FyWpHBKLnKRNZXFKcyMUqV3ze",
  "key23": "5EQvSLtna5Sj1xSdHVGda1fnXH1Md5jJxeJ2ubNLpYRCbCJpkYcDgLF34zH44xnTZpUp6Hqd9b5r19QXfmmZEw5X",
  "key24": "2MDR2AveQ1EiZQTSpe8RevUfmhBfxwmmQkTK9RfXM75VGbXyr6ysFeu3qhY76ujxuC5KoLYs9EM2MHmEGXTmpEJY",
  "key25": "3QbDqogKztyuLwA6iN3fwo1HXMfEbwrVhNQnXf6MmxAXkYnKCbtG8Dg8SuVSKReigb7tXpxhmaA8CHzonc9RoXXc"
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
