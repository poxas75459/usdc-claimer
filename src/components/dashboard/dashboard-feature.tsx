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
    "3Ft962d5yS7NLG2CFGi7acNhJw45rFLYxHY8z2W3xtqit86XG2pUVXNJjxi1NdzU9ACqB44gf9WC1BrctBfwjYtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rezHCuF4zYx9Ln1tLWHeDjumbuRSTXqVdzA5oZNfisnVJ7MCCLFKNp7oc2yztNasrASkBvGFBBmjXT2DH6N81sU",
  "key1": "47aDRVMoSFwK9tHmy44eJroyD1ScJpcYGFDbWREbfKC8wMkrW9uPXhU4uiVFvT98HtkrY3sBU7sDCwtRHkMS2uEJ",
  "key2": "51r6Qsu8DktXhrrNqypWkTNtXuefHVNLdTDehUhGegNm4pHxb2KNRmiqDKz5iTHu2eBiDRNng3dtZKceJRmc22MY",
  "key3": "2EH2cSfz9Rf63eQSADGaoNYG9xxxbeJFqwTrEdRJj3LmbgegS4jz99thSx6A9QJgEsP3VudE5e67ExZg4dkPLpA5",
  "key4": "2gDPTBeZw8M1RyxWqq467EtqbtKiKT2fTLbEMtWgW2v6N7AtVv28RMau4Nrw56STFY4vkBsbZk9TXYU4jwfKifTh",
  "key5": "3QdcsCfTcLmK7FS4LKSQUxa6U9hfvCboXPAV4GRLqmd3hcbDaoFQGamSrjfsxqKvdtYkwbhr6AHm3zAD2akFRqMG",
  "key6": "5xLLnooReuPbuAUeP8G14wXEGzoCMB8xwdkSok4G6h8BnknMkH6CDo2rGp6MvzpU4tPCdM79Q9GQuGzm1U7FNfda",
  "key7": "52CDzBWi9kYbLfDf2KmZqzHb1wt6RA4bS4K4mDtuoR8ZagZ4RSCwxWqSswrqNbHBM3qAgu7qQtsjkPPXcDe9MFva",
  "key8": "4H6qaSAWhHKzkQVFyzarLN5SdqVnhC7YkmL7vB58ShGkjmAFKj8vSGhANi38fsiuBSzPmUFCekBYJZS7hBWdbhFR",
  "key9": "2bxYdsaMkDRcAMFi79bt1AWtriEqPBDS5BwzJC7sM7VcuCfg3sCTfMgmWR1Ji6V5boTGoxnYnb7nSjyibZXsTV5M",
  "key10": "5XP8nCYSCdYif4SygxkJQ3Fr4GLnNXYSWmMb6X5k9XS7Lf36EjCyikffydKH7RE1tmbLFBRkP7RUMaJdJ5GKZmL5",
  "key11": "Wfq59o2fVAKWGmDwTrkkZjXkHhoyzebVS8SRYZuCskYQM8ZYHYJcctPyeSsYTocEQjCga95Y8392aoZj5EuFiGD",
  "key12": "32mDRi1tk9zmrVQr8ss4uvHbeaWcjS5VprzeJJcZEMZBtDg1mPMgrmV1dL4GRbFM8zxAJM7XzLwg7WsbHk8eZcig",
  "key13": "6LRsxDEVoJhzzJxepJAXdjdctrkAj8iYq2R74FtG1NcZUBRjGhubYomXbCewtujDSTErkARpMhFbvjpQbyKNmjH",
  "key14": "2o3AFYGN5bWs6cQc4GaLd5u2MFMvXPsw2bMigQKrc8sBPcfPHpt8wNYUrwuCupLaNhK3SGV8fnQZSjFJCnkdCD8X",
  "key15": "C5eqRrvEtoWse5pva6js2NPa5XyaTHS7ifCJAALTQ58EyX8Hq7a8xMULdE9PNvfLZU6KCQn3pSCREf4M5rLmDbt",
  "key16": "4HhkmjhWzTfGdEMbjiBuLvyvtgymcQugjKv8e4ENyp38DKU39wmjVkNnk2ixZoTP3YJya6AKueDsRCzrXJ1wYhw5",
  "key17": "27kwiwum8nd7jqSU7pgaRBQMCSXa17n1w6iPs69tLCiwz24885une16i3WuXBsKZVTrmn8u69LzS7obiKhfbjBYQ",
  "key18": "7B4TLRMFX7cBfc88D5bDdLnfMzJJAv9aebN5fe15FG4YCxSMH24PJ2ZUSBZcZbXqXAJEu8VjDcQ4Dg7tHhmgsKc",
  "key19": "2eV1N4joT5AR7J9fyzd5ebm8J1assqRxAaSMJbQDiGuNSLriG3isTZvXMUXX11Vbs9NciZTP6Zxdph4wjVoYFCSE",
  "key20": "eD8osuu2UUfdTYheXX23o3WcKrhqf27v8N4zZ7AqzwjheCTEQ2GmxFgL9AheK4GL1jtH1DWW4Ygx6B9BqR2wy5v",
  "key21": "5xMXhToKYkAE3EL8KvtZUWhWLdPYyBRiLm3xEiQThE5Pj25N5CC86vUeyZuuQdjjNjyri6bd4BRZmzvQEv52dtaL",
  "key22": "2apFaXB1SPsZqzf93wQ6MQRSd35HdtKDAvNsmn4t8JjinQCA2Y8qtbmNjZZc8TkdNSqyDHPwMvhkk5LDXVHDMBfk",
  "key23": "4JjDroPVw9wQUkADNZtq7jXAj3TBFNGxB9vvCHj1u6XQBYDM2yPLZuna2vJ2PGTgAvd6zdnuNKqhfisjhmd86zww",
  "key24": "2k2Dr69K997uk7FpLK2Sz5uhNqBmpPXTSHhnXwYfwzNj9EWvfeyzWmTNYbVpLq89TrNC2vuBydDvp5JHUbZhjJ2W",
  "key25": "T1qTnBbtK9YVSmUqWzmYdLU7Tyyw6KDapPM5fQULegMwtoQarJ1NeGBoxr5RGxek3f3bpiLeLo43d3SYPmatjxS",
  "key26": "2XD5HHwodcnAnLf1EF4nvdhV2S6v9mhSvtmJXN7EdAmge5hPABPCBJrqBnF8Z8FU7QCsHZ7ZnUdbJMoieHCMUrnH"
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
