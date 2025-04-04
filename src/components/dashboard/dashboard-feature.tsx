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
    "5bGX383rkx2ZQBNwANyAoF5rJ41dQDdr8MMoDKZkBHuoqgkpVKoYXt7LEBdKXiDRqjU193xKmKCfz2xvBbcbftyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33w3B3ENFrx2tr3goGWHXFFTVcnJuCGY4fNJP3fFM9GWymtTEVkaKbqbNVtZa8kVWsmr8LtjLrwGuavuQ1izYAYX",
  "key1": "2qgAHNgZTyxbPhpJ1jEGP1FVrR13zJUfEvP2gP5hRSAdMR4SNjzBMwYFzuqRhaLqiagoY8DecczU4Gck1YQovdby",
  "key2": "5u8j3xPT4BqL973haq9nSeBwAdfNCH6yXZRvTVeEBo4ViGegDJFqUfEw5oaA3vxwhmxwnLTDYW2k9KhL4beRskwM",
  "key3": "5xhtKc9NvWoUmSnHpgp6xxu6jeBcVzopjQqjZsP1NuJUjGDM2PcTVzzwhzHpWMC9Dv642ueCQhMNDfSnHkUfrhax",
  "key4": "22fCnXLCKoAhjro9arsqVvVvZ3GAMHw1e4P37evDCEmygva3Gyf2dqg5tB9BoAc2HY76aRVCGW1CZbS4tXb644eb",
  "key5": "5H1AgJAX9PUu479LhjpgGf3ZJQgaLQC7BnDzxwFTbkBz7VKdvRJKAVs2YPLL7hDvUArGubRwBVPp1LDiEiP2j9b2",
  "key6": "TSPaKctHP96cj6NPVazwQQ5k3ftetFDCA4zrDDo6Yq56xe1TwpcEw5NrWufehouX3PaGgEXD2Zsc99szYqY65ZJ",
  "key7": "3EHATr68RByz1rJkvcxABc6xFD9PARqFgKFtErD7zqzEfFAz9bE4ZjuFgayz4ji6GuzAJPYEETL38M3doRBzXymb",
  "key8": "5GrqBSjC3NBtDCUEshbUWp9ZFh59WiHfU4nFSkL5TBJbeQEcALxBDA5J9YyAqEStp6hdbhbYVZFdF414UjjsZRUm",
  "key9": "4bT8wDpniBf7Xk8csGfU5voqSQTEHYodbwQ5ZU1rFHPkRnV9joniZ7E8Y9xNcJvMWFpHWcXAmqCCPSpy4aNrcdwA",
  "key10": "3oyaG1EmZ58suUiHjiK1VT7SYUrzwF2DkwgtMTnMdBNzDA9GQexwmPTSWVB4rkVAhDpcPnLkkt8wcGKuVVSJfJkw",
  "key11": "VkiajuYPhM7nSbNbXkoszb4oBwAWorpV3JiG8cqjVy84xCURDHBAyxLKFUr9GzdV99o4ozSAFwhwGrm7t3e5otJ",
  "key12": "3yVYe8rS669iYfUx16YXbd7M3LuPRSsyu292woNtL1FsNVtPwmY1iUJ5kyUbpQwnEZZNYRrWikV2Y2FGvz8Xbf7L",
  "key13": "3uyt3jkWfY7wMBUPEtNZSaHc4VqCKNHsLCLezpHLLFNXM8wg9qeJZUy4umbTkK2SMqqzN5sye82NuKK4xcibohhE",
  "key14": "39yoyXscTawP35T3m98K9uGXaMpurP1K3MMV7KbbyvqK3tMvGE6mJzkJKfPek15Uh5mSNo8RGPKsNrHhW8fskDVn",
  "key15": "zfvYU6coayrtXprjMGhMrajYN1ayYyc9mWjzMDYqGxscUwnwxpmwHnG9iVNjtQceDPQMYACzDKrw1uV1cDpwaPQ",
  "key16": "9wDhL4ixFuQrkYnTBacnM2MSN6wnyoKgJWEDzvaS8W6GqUKjcoA7X8MXQX4rHSJ4u8EZT1nDR8t2dKu98MSzjeh",
  "key17": "2GfJy8c1WYprjFy2wU5StjzQ5ZeVkZcmYBb86YTQrVbyvNdzwds9LEKw56dmGkLiFeyhj5QwVKauC1VnxxS15gbh",
  "key18": "tBm9bzAkaD5i4GzzQCPgriRHuGu9PGckJAvP9SZAXt8YL56DVQPjZdXDaUw2SWy6ags49h85VEsZvW41R19FMAj",
  "key19": "3zvfFG5R3Laqmy4o26iTAM1PLbMCYikuQxdmC3nU8dwumUkTd5MB7xM7M9EyME8UwtgoRNcTpxDgEatfWmstVfrM",
  "key20": "G1pyBd5hRZppNzfEb5swFKN1mGUcfd9d7oADUZX5L9xwdEPCN3gkdXk4fqksZHXKGAUH77EtK1ayffLRF4PPPvX",
  "key21": "5ExZigJTSqjn8no4G29XVHTzHrkY6FLevXfmbWwxjPg3QhsWyFL7y5K1UC8xJwJ1tt5nFPvVwZfewUKeh5J52Sj6",
  "key22": "cCyK7HFZD6GvYtSfVtazTG2ZXcdfYfrBpmYTgRfKwqgEkJEB8xh2nmyCwRDdSwCzR2ZA3PYhdYjffM7XjMgofFY",
  "key23": "3fsFvw1pbSUUdUkgRkXKWNcvFoeiNtyedSocxBezQemPxTpxRoSjEDfhXBHZvUCD1FK66bFQ4TCzk55mUNmmoMGo",
  "key24": "5KciGUiGkFvedZFQTPTD3kDrctQQDEX42i2GbAh9FeYUMpqS2PXuRDDpgiWQX1dNYK21z8asXmyxSuHqNdYEk1VG"
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
