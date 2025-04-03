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
    "5nVqBSXfsto4MEDskJM7BCivyiMLSjf9Kuktira1kXDi3UEHq25U9dCqRXACUCjQK8Rz5tDQjdPoLEGz8LhDd9JR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPX4Ya19LiGfz5fYjJu9QiCmBNUXQEXeS6NsCoeWaWUzoZ2ff8Yv9RhUzneWqFCHPnW5Zg5T9a2U5nobhFeg4ka",
  "key1": "5VTGxrSbKg17tRhACpe6eQbA2VaieaKSN2WxCe4TtnVdLa4iWEFBfzFnpb97si7jgToZxYM5Qrxubj6ky5gcpJ7k",
  "key2": "4woaYnsie9fejy9ftUybgzZkcEkcRhQUSwLZH8yrpXkwPFEG1L6AYVEae8vHTEcs2J6QSrRvKoCQnmDWndU614b",
  "key3": "33yVTwo9VLQLSQwa5KRoU14r39uwC3AM7rMwRthya1U6TxXdfXi8Ux3qHGWDFxChGykLcPAiZQCDsSqJyib3M7yS",
  "key4": "4omgLJQn3FMwR86KAFKtcnQTqpJjvX74unX9uKJEFzKm3AgYDDEzTzYgxrYnopsMyzfDvee1C8jL2LCE4VsFkGPZ",
  "key5": "H4FfseB98iUyMaoSauCgDBk6MXZuYEow9sthLsgcgKLVvTbbbJt3Y2LNjNqyZjqH7s164RQwkHmuv2GpjvRrwMH",
  "key6": "4McuwEoggdxypnm4YUaNtAoYitrnfhuQwtk9n1m2Edn7VXBQU7CgbBt8ohnxvxHCp1mJQDgQGSgsN93qZz68bdua",
  "key7": "5tenFECusmDAdTqGrTnaFAnWjicPVQJfyiJNMhiJxgAHquN3GBkNNQ3NaYEkvimjKdmeoXpK2FSNKQmLrJSFopDK",
  "key8": "2FqrMPrUGewBaE7CaAoBg4NgmpfXzQRbDKfAJgw66Wr19dSExoKg5aCbE8eHmBpTagc2rsmWkX7Bzux2aLJJ6gGN",
  "key9": "5U5r2T5UtkPA57BLSWjymEPRp25WDuYgq7WAeEtFzhK4hjstocgnozm2zVaCDE3wXjmupJqsY8kDCpehHr4W3wpk",
  "key10": "3GYa613jDrzE7ZpYx1XWPGGUGRAkh4hQxJh5ARnq6vncNP6NboDXx5yw1ALDTjqBnA1x3EUdKcUdL6vDoMkAcPRf",
  "key11": "37FXC3cDSW6oQTSoVcyeUnjY6uw5uzmymX6yMEnodDHfG2Sy7cQCVGjgwreTeoGGYDjeW4DKmiUyszWG2drNzX2p",
  "key12": "58UVhvRthKLrqA8bt7SSs76pPp6WCzLRuCfk6UGU9CTvr8hzfeRB18gkBkEH3GEbxDyPtjJowagcKAAuBCQ5mKzt",
  "key13": "2z4gPFx8Dd7XZsSDdLP7nosZYtyg3rMyJnzDqRL7873tA3pqWFJUUBj7CL6HDKUkrGTgtSc2KoMbYPspRzPKX5GU",
  "key14": "5X5HcgSd2tzBKz2Scey8dE4pdxyexC4MYy6Es6bDinetyEdWgByuWLABjKXKsAzYdKf5e1tu5o4JZXavXc7z54EU",
  "key15": "2rhi4ZvRTwp6fkGy52TzM6W89Rb8ZKaRgA8jpUqB9D1R8AYwnyQKnJXYyYdG27m8iHjR65f7xtnEqUyq4iydRNAR",
  "key16": "xm7FnDETyEXYKpYbBz71hqibRTBSSLPZ7BecVGjMEfUPwVhnQufvVxjG1GHREpkAxLFYuzQtzJ58wWX6sVwih9f",
  "key17": "2x6xJRaaLvQWbzBurXJHvPCjY1cTJfdHxPqbQrpZwjy24UjDjAXYQjCkRZBUrpqic7EDxaJZp2H9amvq9gvZBEk1",
  "key18": "2J1iCgCiu3tAJ7gUkfDqdnM3YoymMLMMjvsv84euLHaGsZnkjqsi7WGXHU2w6VdiUBDqdUp1uM2FDm8AiCqBuQT3",
  "key19": "jDzRKNzhgMxR5qZvWohswCdQTbRzxK14eeg2bCdLEQUkvnHqtT1gdTESuZRqupX7iZSbVuhdi4nn5vQp8jar7Ve",
  "key20": "5cYpfBLgeQjgfCX8WaGTeCtA5rKurp24Xj5ywpi3S48Q4zB8PNtAf2ZmDj8L7XXMRB2cUBCm9W3yP77dT2D3tbfn",
  "key21": "2rU2wk72emanQCL19CCUMsQ1CVa8L4LMneJx6qbKqTLyHw1btwZLh5RA5mEcshtx36htuMK24a8tiT5gLrGyHUw6",
  "key22": "3dtZJrfGuimwoRSQw78QR8ch6mUeZK1AhPUcCLVs3EQZk8KjVkZo29UVJBzAhcqtwJ8TVS1rjGbDSW7GjofiSHvB",
  "key23": "GJCRMM8kCwbrMNknhydc9juRWuPfhGz1aLBo4M7VQJBoRsWcvtBZER9r1NjMxghPUTR85TnNyvnqBzJddXgDqJB",
  "key24": "2VuywRoyjw222qmCzLGz1k3vddx6WFRcT2hgFTjBSaizhiQSPBH71cRFATVFiDxhSwVBxiWaQAGHquNham8ksELN",
  "key25": "5ztd9sREFvsCDqXrqRHAo2rSzbyyXMhFpoFGUP6q7wiNSaPqcaHmg6awXKExxcLzKuH4VprmR7rWRgqKbGbyJrBo",
  "key26": "5h1uenrySX1XTTbQAVZZD1h1ZF4TUq7SYAX4NbeaoDhDrNEFYjLgbrrDJK3YddfjUvr6pj1VfZ53YB9NvErBqAb8",
  "key27": "2AjV2cU3K7c1Z4QLTYo2rpfuWpoZJLLmc5rHE8DhZoYCfhEswKoHrgT6unfNc3YvEGU6QnJ4aK42wH8HSvJEQxnq",
  "key28": "3nScg5VJPUzSQ3Q2ZT5ZhuEBKVn53paWEGvQ95hRq228nze2KTBoqJfYGaf2up8QX42bYGfsqjueFSc3MWgjsjd",
  "key29": "2kD61S6Bu1aMmgzZkjHBLUvEqx1sUCsoeQLoXeMd3ERqCsTjrpDJgxRBCPAVNBdxJNvgp19t17uz1RTooQhWwSDq"
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
