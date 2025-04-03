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
    "3kP2GTb3UvLn38u7xhsEVsHdEtUj1fDoB34Vqst3aL49wSbSk9ks1gGdwN4QY3R9CZx7Fsh5s13E99cRPoGvDccS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LjeH6xDFSYTYBJW4VifoDvVAVsfbAxsxjRBednUy1ZCc19aJVo2urH2maD3mjsBxyJGro8W8c1bw95iChmFvLZ6",
  "key1": "5f62UUeVouxd3j73E24sEf9t83J58cjKmaUtrp2KKUKegNbjrBBk2czAFRESSs2DLSMQd9fqxmhv4CERvr9zuuR",
  "key2": "2yKz7xrE2WV112iwYf3XmSsjmVbXApRdteWGUxD8vwbvqRbwFg7Pa7TmenAKE77JfyCLG74B3vU9njCWdjNgnujs",
  "key3": "63pvRzz5GPy9umaGDwDcNaEHDVzCHM5swgxTgTMcnru2FRqRVhKwqFzYsoMBmB1bGT838nmhQ5tdj6KpME1vaGcw",
  "key4": "2dvwf5YnW9Jp8eB6rPYPJa98jX28g5ek8UqpJewx3CSyHo8wf1MM28ckS38spyuaR8yffgtpVEibD3gfdBuSaUCZ",
  "key5": "Vr5mqaQYUNiRZRv6w4VvgXE4aQLGsCz3jrpf7C1kJq3YDojqEYn6UEhjpsM1QkGPWjXmtdKGNAwobjGcnjbPYhB",
  "key6": "64sP8EC3HVp45D3XqNRurA6zgQqu2eHrC7aRFgudFH3C1j7tmiotzhGTy975VWA5bjESkL1ESi1xAHVn8ZLTTKKE",
  "key7": "XD2zAi74KXRkqHKqEAaiRezdauRVzVuBLqCmAybzbgLrA5LRVkV4De1BeRyg5MsyzGzhyEyWeLebaTnxuniHC5S",
  "key8": "2RsJTYpsVGXgWpmCpT2sUgDLy44grsgufZa8eRgUiwu4vwMwf2nLqTj64nPvGik9X1urrwfYygNVzUE8Q22Zg6az",
  "key9": "4iAAjzbjTb1gvErTWNKQ3dPUUzFdm2CH5UrJ9uoNFvKHoWSnMsHnJ5zGYuBXVE1jmyxJZGw4JFaC3VyUFAoY3kdu",
  "key10": "4sSLE2hR8cffZ5NCN5Mp4nbpWek76CvvZrP1bV57SdL6U43HTofBi9cmMgT7rDiaa5Tsa7UZuJ46QQWdbGyUq2hQ",
  "key11": "22gDAsdhPmQxL12XvoYLdyFkCbrwjVjoUnJtFotdpDHQxzSx4guCfHDvwBjJqmkwiNHrTgBmSAVr8WEtjDqRqRVv",
  "key12": "4mp8FLXKENQAJKcKogmbwZ57cptRmH94MeMVitgZBWTezEAwNBzyfdMdRn4UqP8qfY2QJP5AP2UamyA1qYKVnA8C",
  "key13": "3zuCvykyiiiWpx1e4nXE2WxdZbnq94Muwwndni5SoYSoh3LHHRLKhvcH89vGPbxDKCkcL9wD8u5aUobikeffmMda",
  "key14": "3fLPi7UafqMHJ2TUNsmTazEeMLRuWpLRqecq8sGRxDskB3EkkSYCFAx7BBem9e81eouZqGYRXGyNmSJkPvq34MPm",
  "key15": "4qNndC2NV2MJNYAfREdcZeps6gewX4u7GicJ6Foctrg8EqLAsPhtPvdNCDP6FDUwq3ezd5tRWYbCTEaMTrEwKe6X",
  "key16": "2S6qjLqggW7VC4N4x2msDdhtysEXxFEmorCZ4CDXm1YCTsPd9xRqga2hQkLJavhsrcucohUNf3JVJUJDTkFkeBVt",
  "key17": "4Fsqcq9FkwjpchhWi2TWotfwqnnM31ebbYyrEWNvdK1G3uSHKjykVstG1corin9DX5n5tzydKm8Ws7SjcJVaohpj",
  "key18": "8tamJsNBtSY6eKzCQWiF7x5ejTJx7xwC2PhpE36Zv98hYtPq6kiakEqQTjasTScdwuK6F9DXD8XSVPzTCQHTt2T",
  "key19": "5GQ59dQrMKRB36y1qFMEXYEWKdN3ssnPXK3873SAahapLDFrNx3b37C4rX9f6S4gpfDo7eCC93nQwUm5giwx29zq",
  "key20": "5jR3nC6XRrMhKgLRcsSgAh9L9tj4FmTKnYtzucAfFeytQLLvczrbG1GHBDX8ZcvnH3VB9uqUSgK6qAcZkhCf2ptt",
  "key21": "55Bwm1FZKddoKLgovrvTqXd38uq2GvBmk6UjYPrAsDbVuTBjaBvLFFgzwTbc6LVLVnS83dczZjGTwCwN1Tem5LQj",
  "key22": "SAv6ESCvzXCwh4HZ69WU1caAr9EjyZ5P8aPte8zKEogCzuy4eNiLZyMLpLVnpeu7nXzi62b1QxGy95JDsB9wFFx",
  "key23": "5PKEgeNvK3fBQPPJHVQZfUU2JxkRDuCq4Kq6X7qQwndGXFZG9AFxTuEaaToCFLM4AjeXGDnUD5hQVWoqwUvdJPsH",
  "key24": "4ibsTheDdhnRNrCx8AyJ9RPFyS9njKaxVRawpnQwcpfUavBoW6oUA5G7vv1ves9vnHKkvRceMXcteRqXfwHzPuHF",
  "key25": "4ZhN4eJYbFW5J1tBRuTAXyUotcjH3Uomv7DatRtgnQ3qxLsqWeJwuCSQQTPSch5HtHs39eRdAMyry9WcVgV61xFG",
  "key26": "CaeXjUJrfMQ5JRRrYnmpBGVqPyA91ZGdS1PSnNqBgeEF5Vm9jTx956MJKbg4HFvUxmS1PPnTLiitLVpptt4hcqL",
  "key27": "2yEKGiPxnQkqJkaHibMEVcr6PmzFcQtgkkPRwozdsDDcGkRUkBPTJbbb8Ma2aVmruJ2rs4KwiEiJ1GHe9fSqx19W",
  "key28": "3mVh3iV787SmrkiTAEth4cMXKGWMD35tusYZuzrhQVPUrySPnLcuy1MMATCRF52NFv8V9iT66Yb2wZn7mVpkLDBp",
  "key29": "58cfn3WfBx1xBQQfWRoSTQtQwz8rrDEuYsfGweeUiVLwRyiVvFT2DWvfe7dobBa8GUt4XvrbmXWqfNVAbwXm3BNV"
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
