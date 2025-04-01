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
    "5xb96duf3QXbX2mws5RQW2vQHqxW6pJ4GXNYs5AAfKQfX24Q3AjX1zHEgqg6rrhNePuRdd4wRKwUEXb5LgfXtQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udvs49Yk1cbsBTSs85YWLz2VRnVb3on7ow73sGykShejMA5AcPQYeg4GpxLektJBKFoknQ2433jJ8P2mmxaShr3",
  "key1": "397KPSQGtNXxXHF4xQUaHr96Frc3nPhehFsskCWxERQeqoTp26QWMRztAQjYHsApJo71WdLQCSesJKJTEzZFJGrg",
  "key2": "2hWTBs9c4DJZZaH1dgRiASfHXRwf4ZDxU6Fq1ewTihVEd3QrVrkH85juRD9vZaWXk4UeFcbGqUtDevX5M93dxdkP",
  "key3": "XbZE3oW6m5jyWPFet8v1ZDDXuDvFKB1WcQ2TrR7kQXNUcaYJL2kaDVCtt5j2vwK3HpaXhbPfLuAN9HWN3vkvJXJ",
  "key4": "3qJmXJkQDcyLxZ2wCA8cEg8R711xvHzcgCYCp4YxmERdj8qC2vzdpCdE1y1FMHazS2GQRphF563reKURpVN6gvMg",
  "key5": "2uqKXhAZ438gPTvqGjStCfDk97x8ptKEnrSAUwefSvKJNmSVQUUcYkR1mnteuf2RqQrEYzZQ6UarzjHDYqieAsq6",
  "key6": "5auk3oQP5eVSPTGbbYGQHu7jfngezCxXAjmcJoboHnpCnCsiGy47xs1b7V87ZmiLpfZDb8decPVsdTg6poLAKhDV",
  "key7": "4qEJn44Jo4rFBunW7GAYLMv6SzZmrP4YmwexacNTtM2qsAC6ZfvdH5L8u5ZNGsz7MtEtysL9ekqFaUCJzdCQ8Pvn",
  "key8": "3KKsZjfYYkmfKjHQ8KAqNzuNqfv6qQvP3BRMTom5fXXqu3iw7x4z9t3JuGwYKU3KNgzyrdWpfQUwVTXyBiGjZBs3",
  "key9": "3L4tj9HQJvcGC7vvcvUsUuttbvEb4TnZ41BTR8eucBuB8ifnsZoUJBBnaLB6mgtGmdvaLYN9FyHMhtTa3uZtfxzU",
  "key10": "44R5zy4qeTPnGBzBM3x9ZdXU4VuCGipajEtCCmN2MzsYhoABh25D6nToBSC7b1qRzPoZqitxtDfd96fVwq99BAuV",
  "key11": "5wnGAURu5ezuDGMz3ma7ADkkPWY32K9EBftvJRRxg84fzXZYxxzgDdvuyfCXgCPMuu7CCGF2H3hPhEF4gkuicKNc",
  "key12": "3xktJhco56G7fQvGHaS2bcjcd2emAf96Q36bquvfN38uzqv5QdWn2ebgLcMwkRSGrFRp5jV9m3zWekQdZDyQnwwa",
  "key13": "4wHj2gw9CgcQdUX7A9ERUbYXuFTMPRBPZ8dpqAbVTmh7RrmV2GitkssUHMKbw37qxosFGrRYLnq6QgxiVktz6KDD",
  "key14": "omYaG1ojEbo8w4jkiKfZN5RFagc4DiRgKJ2TdWF1yJnjLkZgJqskR1FA5PYLRXLBYXq6NQynJ3Fi35jGoJPGhuA",
  "key15": "2gt1FpW9RPo9AM24JZT8m1nF7iKCjfPWVzBVnV4LdbUSiVAbFJhZeM4tc2N2CJz4w7raA2bbcEdAqk4RjSK6SvNh",
  "key16": "5VEeo7CcWCkFrQHyngabSGjYBiSN7kesmju5fQKnjhEiWs33QzFrHaCJwAQVdZrDTJnh2JwJERcWVLtnopVnNBg8",
  "key17": "42FeGAay5ytsgLJeX7NkeQK5LBHmMV2gd4xkGnc8sPsfP497BeGHxo39XGFtY3Mt7riUEqBdCQiUtKQo9Z3GSbi",
  "key18": "5kVZetqw1XzftxAbPjZTsCJwPuUqq6d2iBcZdLyt1KURnrpctkmtbXeZMDSeUii7hdD9LUJiGHbLj8paNSACfbXx",
  "key19": "4C5DP2dXaAvWVeNrtjyA5w1h17zZBKQCRqYFZKehka8zxWFZTLa6x7bgDJHwjAj3unyUz63LoWK5C7wnbtjuSrt1",
  "key20": "3awaTtgodgGwDZqn1V24QqxBqTRb7RRsoxrYCPg5QBfBWbNDCgaTFbynb7jSPHBR69D3iJApdu3ds6u32hvWM8Kt",
  "key21": "4aKa994DH7gQjTsqaY1Fj3V1j2VXb2Soz1FvddJYLLMryQJJJHvgMZ2uHRks5gHiPGjP9U9yJA3HrBBBjUMmvieV",
  "key22": "yZyZgQ9n9Xg1GjFomneSdNBGMzTYqa35jvR3gnS34aiEZJ3PYBSi16NaJ8GVJGhSxpH8oWZAFpiMgi1jeULuJnF",
  "key23": "3oLaVHWRseG6kDpMdFWcLZHQJ1zVphsbDcXT4eqv4iPeADqVU5LrNUiM31egpp5wGGKtkgBRp1S8hxpLH6aMMhRg",
  "key24": "5qJpwPCJMUTZo1sq1ZH7Vpxv7mzMQYH7rxa7ftBF7UZ8n222JqJ5SUBqJf9mv6MSXAWmgvT3j1vtWKXVxkRKmGe5",
  "key25": "2QgqjZ7VWPwpPWd3DP8u5h1dcuaPonMtDVqmE3oTPnDczofcnK1BKswyHSc5D8Qmty1L1iCRfmhwrAdxXwGwaG3p",
  "key26": "5yEZgSybnQjXBzEUaDA3CDSVCLWx1qFScBc8JBh8awwJDFR2UWtBuuqX77kbWMwhDscfdYRmyR6v99BzAnparuhS",
  "key27": "4vphFUreKim4nsL16vrkGU5mQscnvPSPKT83bSv7acDFEwkq5rGRJamg98xPD84Yzajt1Fs4M5xzahK2BCPXa8Pu",
  "key28": "5SAwVubCv2FopfhH1u3m7jovpyNwaMHrpJZLeL1dmJbmcRpUD724fPFVjPPxMdLpm5GZfTkQSpSgKn28AJGNsVw"
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
