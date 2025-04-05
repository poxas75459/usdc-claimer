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
    "4w6o6P7CcC7wGuoA8Zq2hkAC7zeLaLbYjbJQTnjzaSJS12qDHE4EeNoaWcDb7fsUKS3DLatV3i39D3nVvgXnS5k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VUQoHhTvNmj5thEkQCZesYrFQQa1cJWaVzD8QSweynkFZVucQHL2sRAuvHJPmCpVsejUjWpueHz4dvMjidkY7NW",
  "key1": "4KUuvSmHK4DV5tdFQFiewKh5ypdGDMxjL22RcDGECcq4Z2tHVsFALB5pdsiuhjVrYuEEfnifuXaT1PzhXDqXR4gf",
  "key2": "4Xd3VzP1C1QZprW5RDhirBoBbxxq9cfWM8QyFTufMD3a1fXtT93XphfAsZ2iPaj4GnHS8DgVpytqi6tvzyY2Sgp",
  "key3": "5mFCTzXh1Kb2LHuudM6fQTauCzZXwyCCuvJcYAgaiJAT3Ni4mxEW7vQdrcxuP4TtqnNK2jJFu32i94TiPK9v5SaA",
  "key4": "57DQE6fXCVrEDbFvAPaTdG4HmmzyFT69jxEKeFxsoQCWLnjSZFEYoJbSKWKNvnHGZ5WLmMKL3uUow2kzTKLYSadC",
  "key5": "oqjPyJwSu9NXhCKTiU5Q4DtNLgvLrKANbAQoFbHrVJ5yFG13ehAQpaNm24r8wpfpZpRKjktmGCSQv216F6uKLG3",
  "key6": "4r7bNdYBLPbkQeYM4dkj6PDB9Peg4E232V8AopwmRMbHYFrefGnJfzERHcRyBR4hfVbLRxeAQNkzEUq8kepsGHvQ",
  "key7": "2VEzMsCR5GQTUfTMMGuZHPcXQ6wRQTirTeU6nAV6TxjsxJ3tJiY9PoGVty4QnMZNhLsH5DgG1d1NJTiXjJnQUfbP",
  "key8": "6uNbwavgcibA11vtiQXKe1TKyjbKBsDHAL8Pim9va7MTTFYzsFA452DDHQR5kbYAxyWp1wRZvtvhhTqXpKcCW5p",
  "key9": "5UxER8HF5ZUHqhQo86RsJFBqzDUmM14x6nmGcLjyZNVpWu9Hx1qchsCquZxA4QXsJpFUN7yz4pWezVN3ZyrMXnTL",
  "key10": "4zG1PWVNMNJHFeSVYLLi2FHyVoFpSDRuHMz2zNAT1y6EvbNEnzf3C2UUnqs99TgJHSmQxrcfTTbkKqY81KXkF9Uh",
  "key11": "3udAvikRDaeKpC2pNwyCJzzoMFtbQmoqyhKf2wMxmvrQS5ZSXNtq2e47YVevGfVB8UNCGrVZS1Lt7C8yyn8UNq2w",
  "key12": "5BKtaFMkzvRKkWyLJtq7gRffgQ8hrrV2vkaCDEHTXbXeiyZNK1ieYGcT6vjdryjTtQ43gKTKqrzKnqyihBoiHgcV",
  "key13": "3GiDX6rN5nnBQ7kyJ98ZKFyEfm3uSRqs7sGxbs2PZ9ffLxBMinjLbwBjd7qKmyy6RpdYsRX6zbiWEvrnPabKqHeT",
  "key14": "4rcLP4VqgLErWsFV5aTWbvGUqv6C4ry1ShXfDVnsJfSGRR2tDLnMKM17CAnSgnY9it7Wu6qcNyY7J2SWaV5m8DaG",
  "key15": "gW3Dvo4VDgMbKsdm77Gyfuu51cScAQx8n6Y6uBnF57BexzPncLMgSNEQzhRZAPvH7G1SBg2UMBrCbaMavqN3UBg",
  "key16": "4k5cv3F1mG5sDQYwomyXR2LWQaqAtD2c28np58PB2zsW7ymf5XTmy8MCHpE4ybPzVVBiXXFwQMmprZ4iBC1ELqq3",
  "key17": "PK4MxZMiPSjHse9QkGD9P4BhumcrefcmwzRvqDMAtH85xJxAFXGSX2f7uCe16Tg6gTu7j5PkDYGVP7FmRh6JY6Z",
  "key18": "3vi9ESP3kUDHQjxwBrm9B5gghYNYjUEs81Sgm92uchg7xZWZvkgcpiFFL5GUsS6BFvCMfb1pfwoK6sDfFS1Sv39U",
  "key19": "3c3JrHtEikMbkE6EE1caG8bu8oB1fwsChEZMXuVTdK3ZuFCxRkF4BhxR2hLqNCiwHrsTaLo2vVXLdWt78UzqA5qv",
  "key20": "4FfaQB83P5ode9Eiht5BLaZzxE5r845eoTmvVnAkqss42rtUoFrKVNgaJN175ojJt78TqRuFLkJHeuDfruFoMoFf",
  "key21": "2wVWzGaUgyjeedtLPFm9a2E9cigXANeLtd5sk9fAB8LcdiYNLfCd4GpF2ndwQSM7ZrWpzT7K7prpLWWxCaNdxdCW",
  "key22": "iqCRAR1GP6pDXBTPYMuux1dZgo5inLS219j8fyfdgvksZNZygDfLAF5gv1VXXNzYokX1gFwoLUBSfNbS7CgFmZo",
  "key23": "KeFYgvUGER49uaQrW7USyKdFExfgbCnL7AAnk1cUi5jqUkJgeb98Mjz68CQppxCxiVewF12Wksud1WKUA7skPdB",
  "key24": "3tpicfRc6krjSFArXEMirgfHhZbetW2EwoVBipjQca1we9g2qHgrVWfqrFME5JEXtmSZAoq2eascNvM9Bj14P1Dh",
  "key25": "2yoboJVGZ6zg51PCNjBydvTqFisVovDz7mU9ptaLShrM6sw6qGRRkQ4rwjkq3iWKuUFeDtrgajfCzwGYEPSmgzXu",
  "key26": "53xEPPc6MbbXN9sL9fqpdb6BPPSLMiuWx36A7aJD1fFKhqUs6cSGi9VwqHAFNmmhafbNFFDs1vfg2tkYyd4SAeT8"
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
