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
    "XJJzYVC2T9WR6n27kPhyeNvYsE53uJNtfk6fzXvp6hCH3nzLF3PqQn466EUn1ToSNFPo5nSDTY6nmivB1nnv6pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G952wVgDggByRb2Azn4Sa9pMeHu1cW6kMhiRcCfMVaeFyC31WPpKduoLD77FEaNowDRcNvSnxaJesHSpptL3SW",
  "key1": "5yDCHpcMfqjLUpcyhuFWAg9zhTps1bReNj4Ms3gQGZAECpVHVd5bVM8V3oqgyFWxyBqMHCBFdyZYZRoRftG9pRni",
  "key2": "4zsMzFEkGp4y5StRpRskUbypVhGJKiTa3RU7iEoohkTCNJvr7nSeLJqCdAXP2Xg89styFBk2cxxJFKGpJZyvEw9b",
  "key3": "edGVds16KZfBd59FxbhDY5iwc25B2P2c94bMxcTM7GnTfzYULxbEn4UuAofuarT7oKXfs8mH2Kia1oyA3dfDttb",
  "key4": "28GFyCUqNNa9RV57pKRy1jLF2h8wUn8ZWyTsXmKoaGtrd2WMfZjPfCjBtGFe88fSjHJbtucF5nJzA8L8ei8RBWHt",
  "key5": "4dDpSCDjRwvCyXsAdJhHgwkNBoTTdzEQJZo3e44G51hepzbVMYT9uoEDWCV4FQCdaVNEhKgFz9RAJwfsY9ZCLzPC",
  "key6": "4souJR58ZUAySJc2LtzPXg8cdG79tMcPt4W2WFrCMkKCW8p7HA6PGUZWttexAKHZAAHhawm1HZoKnyABd6a2GVFZ",
  "key7": "45qdA3pBLpEbyTbxaV8G4s91ABfrED6B1LVnTaLwu6s7mcEWsBAJ3ZvB1u7KysrB5R27hDJudoHUMDNHUuvav6G9",
  "key8": "56Y3LbMeLMcRCo2jxyD9FsEUqTkEtGr66knGSvxyNsJN1AUsZi5Kdwtjhf7BpmuCc6GdbsWBC9k4Nm4gDCQTY3aW",
  "key9": "Uxwv24qYrQX3SXTTjmqycGMYGXYC9Pw3Fxks8SzgLrCfMjMS9yMuufarjxcVDyT3Tmd9VQQSBoAE7JBuZpW56it",
  "key10": "Y8t3mMAd2uVQGCAVQwd4234dU6ncWWgndXrMkzRf8x6UVLTrSMwKvo3oGGXKKxPkoVhmLVZm3kH1yKxJJhZDC6s",
  "key11": "26Dx3K541rpDsXpuSEFnLutziffo5WiJeJ6JEZ9yy5o7uwaQWWZg8MiqXQo2eji1ku2EGGKu5tcb3cXXmBvhytQr",
  "key12": "2HvhoL5RWC4xGvJmuL6bngTE6sumRX1sohYgWKkss5iFfkSrdJzW2U6d7CNLZ7MqokLrd2eSC4ks5BkN7BfgnidE",
  "key13": "55h5PE87MkYNpnQFntHHR2WHugg8EbD9pWVCRNuBMrEUBdjjRHiESYQByzKBRxBDc5KrL77Ay97YfX3K46j8j48w",
  "key14": "5ByExipwequ8PD12wyZHKV6y8h9EzGmXXGJJb8RuSHbeNGkYrk1WyEMNDZ1r513u2jVNEm3CxCGGeko6wyaNRdNS",
  "key15": "25PWRVjUZiqfaFQvpxk8M7kUmqEuNAfaWAnimuKhXhYt8RQ5bwAcSx35jc6SbayPwbdg5pzZFCRfCCJcER33ZcB3",
  "key16": "4rvBcGas8rwKXKxbNuD7ZUdKyar9w5QF7cdw4yt3j69Fsi82eQRFQxDsBtVvVbZp27R9Kx8FTRZLnX49tH9owrsE",
  "key17": "36hfsft2qfJdA1oia9sGodFqmGADJp37PvDpmXNqMKkvoTgBxjiUbTidXbYvS5hjZVic9zKLP3M9ogLTq14xiaJP",
  "key18": "2Ath1TFzE7pDCfdTPgtsgsxbHiokiFBpDDvcMLtrhVZMYSZdrJaWuXfDkCACiTED3h3Ems7tsFfm91cebh9hxMSU",
  "key19": "fRRJvterzPJCuwxFAf6xsibqpZLhGvLVXeAzdf2rahxFyMStvtHGhdJHvVFr2Kj473vmVd7z2RxVBxwxDRarqxw",
  "key20": "2FDrqLFJe1pmaRFx9Mnp4Xr2TMnyGouBdjqNeJ9sDQSrrSBEjGXiRYuQSS4gfbdw6t7YYSXxHnDZTwJd57fMsVmJ",
  "key21": "2nMoK4CAghyrkDe5XzwPHbmyLUQAPzGAXdAs2YEytFS9M8JbJfPBxrZid7kMJyxwc58SNB3gE7DkLqhD9pukxniK",
  "key22": "ThxD6G1RZggZnmEJ6zBMpuzC8n6XHsFxUqnt4vqNY4jWtJNRBmeQkE9s5Xvmg4EJfyHE5uWGisvtiL8ZzKuBSsi",
  "key23": "4aqUuhG18ghsHk5dUw7NWthQLapBiHmx5pLxoMdUHdqe9WcpUwtRdaAfyM2Umu6AQdFsqTVJVtEa2WuaTPubkKic",
  "key24": "46ziG8niqFirm7D4KqBJjPp6zRKmH4mxgTu48vqw6a9J7wUJ1pAekzuao9NzbMiCczDUAMJhYk2tgdk75qmCcRze",
  "key25": "4rK1WYFXaohQNBvXu8UEwXNHJBudtsCmGazJDWsb6qgKk8aFgTfKbFdzmUeE31tLbwazDhmfXLKdV2KQ3ghoTxUm",
  "key26": "Mtf6iK5JFdLDEiExpLHmdNMSNJBfhvaqMLRgfKScmhgTnquR69NWd2W4C7tc1mfj8Hhi7L9DPoCpWzaQopHAnwb",
  "key27": "3uYkxQfDg65eAvFR6gmdMtJkvoaJ9ojc6Zue4US5Y8gWBZfq7RoTRKJfmBk3GJfwHSpjmVzsfmS4x2WBRqDWzDFk",
  "key28": "4rxttNPMhNwQUNkvKdGsg21mDSGpPcTFsAxV7iMSC56rP1TaFYj822wXenrhuLjzzBr5WhQmH316DGF9yrwDkkJB",
  "key29": "2NPF3Bvi6HznmYh9KYR4HoYUAhZt8QRKKfygvBCme7Q4cVETNZsznw4UyJ1zLvWci1LYdwVdRcGgzmZ8QfDCZhob",
  "key30": "2YiwwYSgsgHZjE9Ze3wVzmMPt3hwFxHZ1SL4UtPzQ3zmQkqw7Bm3eeZaaWvpSzqTjiB4uscNGB66hPA7rU77axDg",
  "key31": "5YmJFoaA2ejU2QxkYDbBN81aJQpUS1m3qNaPaTr9d2zzJPFicXPkj61dK4pPt5K4fdxSCJcMEeee1mjQaKjtSKir",
  "key32": "3EqAzT4hWpCwLBHddLSfuNo47eEjAks42W74tCSkEEBBhmboTVS1DEoYzVPyLW8LwctiwVXxxdaK2pV6kgdvBwXe",
  "key33": "2RKh9CTHY2gLqLdC7zPE2FvEiQuMiXfa8BsCy4uso3HpNqs8sFVgvySxAteah8uA9nxbzpiY9dbsQnySGsE5N2kv"
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
