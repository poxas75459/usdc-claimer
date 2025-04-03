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
    "r7tyC42ouFcLdZM1HTaVKLUhbQRcxT9KWVm7pTMqseex1J1SCEzvdTugd6dnnhDT8Yc1zEvbJBDQoCDgYiY4wh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pMsaTD5pKEpHqJ1hPfqGypweiQSy8ZNrNuJUkpsqtnMhbws8oQvieUWLaMtJGgYRMgbrMpJwdjXrHwvg3iW7QG",
  "key1": "4HQQuvAM2Tzy4mtxJJSuDj7dk7hmU6LkZWTxy8bHxdx2bKkcKXf9sMJ9eZRnFyyQYurY3PaTK2D8VBfXfDfNVU9c",
  "key2": "G1uJMkfMBx79Uy11v3gAh1PkVwS9gpiaUoWWsqi6ycUh7N373kCjuLXPMkN35gBnpnBQAz936x7GM6fcHRj5Fxm",
  "key3": "2dCeukKP8SCiehtoUAdPSYyBvZWf2VsPQ7kLaZSYHMf7mo3shzxqKXBTP5i9A7vDsrXukv7uXJQEc3aiYRuZKk5H",
  "key4": "38w4keAeLPdyfJg38QhMZPM5nGTyHpzdACdeddYaXZDkZ7s7km5Q4UYAa5WjFDZJaLbszwrve5keWEWhEfEXG8vM",
  "key5": "uKmGcXV2YuuJQjnoHKvBFxJQowgfHWXAvVouVTnhC3qMu1AAkmYfFoe5aswye1wsjZxGVJ3n7y1wGNKYe8P2Gks",
  "key6": "4f4caT23tSb6eFiVuak7J35vkCJj6mUAD8T3HM4FRk7bzhzN1acvyTTzihChZUt9iQfcXgiR7am2CzLSkGLkyyi5",
  "key7": "3qYxTiJpyhsqWQokje6wunvfHKQCarhsjewvvGuFRt5GDEF9emPGxHuNennJMKhMErS7UDn4QobMyL7eMY1cauJg",
  "key8": "58v97R7pikv2txnWBxzrchhG3wtaDet7qTj2NirSFCc1Dy2LESqQQgXT7VHhTMuk5afR8DocawZhZ3sn3cq1CKLJ",
  "key9": "dRJRAqyNFduWudxr4NSfRAXuxg5AzZ17xqmLYy2sZ2aU9GqBam5nGGYjzqipPzLgRuPTmYEB4XhNynzkc2YP2Mu",
  "key10": "4PxsFg56aTcfnL876cRqz3r4VP7bRdiApX9VkrJSZEyi8LZ3fAX4aN1nuMt4tEqbzBV8YmgcaDRAnDFF6RzugoJE",
  "key11": "3SRSLFHXVVs6xSVfVN5MexnKuetm6HvQXfPkju4PWx7yHxtUEnvk7wB5Egwf67uQaRtEPSL3MfMtvhmBMWGbFTpv",
  "key12": "43sdxTPoi87gL5mtj9teqXy9jRgRToXSEdddqfRP3Zt17HK7ze4HTqmoqz7ThMz17DzFokRA4Ud3kbnPMExJDS89",
  "key13": "UTze75P1mXDJjVrb5C6wbdJ9T8aYBdWefuxHnB6q2CamfV2mf8uCcLuWCX5cp3zYKRn1cmc3kFFubGChTfomfcF",
  "key14": "ktKswwtMotdkcgFa2YW1LfAxykft6BQ3vkBWDhKLrihaxJydU1pDo8equmrobrc9XoM12g7gXpPyqqqRjrK1HPr",
  "key15": "5c9hmAPrjGNakP5TqWVUWh4D9jnfoxNMaVDZvooJA7PGZHak76TcWrxr3AmkDZTSfvzWWAQjNnVP91Jdxf6dWYXi",
  "key16": "48BCiP1r1w1RyvZRpC7JdLRpMZsHcoqitUUPvGy4NVvscPr6t1krt8xWWPTdLedHW3vajLiVBrSGAUdSaDfN3mCn",
  "key17": "2rkDrAK4zCPEM3QakJJ2LuCSqjR8366BoSGVbFUXSWZidKtsfJQFhqgNDcC24vLyAukbnkvA86dbVmJxDBkTafKd",
  "key18": "4rt2YhE1BJvtoWXd2RB4rv4iNX4z33nso6GU6Ens6QdA7nQ6MkgGhHsceHeeVrXpjXroaxWwGWMhn6awscfAJPEm",
  "key19": "5rjrZiviv2iP3rHE3HhPbtMA8twT1NNyW7aHcagVWbNZoxrrzmgRzaMAw9QCSPi2zbzJDXEQSKyWoKbfzu3AkEo5",
  "key20": "36jJ8R25x3hoHj5iEMfT9KzeCK5kVWM8gSe2yAKZzeTmPdkN8ZvHFzqwAXGyyLr9G9sHoqLe2iT5Hbp7jsocXJZg",
  "key21": "65V4ZJCQZAcoqwjJzbi4yDbu3npMbtMXsVj9baxLotN3mFPsvRXsHeUA73SpLHRy9ASEECLMZFwfL3kkZT5vqiU8",
  "key22": "oGdqJDdqK1E7NApMjWbKAhLeJ4gGUC8ydb6LdVnfCYNWrkZf8ZwFdnmf9761nZFdwNJR2AhMj62hgwzehQpALgs",
  "key23": "2tVTtEDxiCSLU4LAnKJEgmJc22d4pcJeuEcBqa8QwRjBRqMGgWHdDb2qizozjZsSzgiU7jdiaeA48oMZYQttFLpC",
  "key24": "MLTtcnyWLZY9fecyTBBVhZFqTbtTA8jAA624PLKTuKE3mB2T5XGit9meptzR3q8v1RinWgMmufiLWCVoM19Weda",
  "key25": "514x9K3Dai531mZfrHxqUxhEwxX4Tdt2AS3NsUxFEtMFWKjMxf9ASK2n9D8rZJXEYCqTz1zEpy3R1kuNqY1BD7js",
  "key26": "3wTp1WtVPNHXAp6r72wsiwyFXWWsMuKmrc8GvnY2tvgZMV3qGanabDZMz7vxSNkSpuE362phQSugSLgTKiiQjMD3",
  "key27": "eufkSLC7irFziYscDP4EzjrHGncDTaj2cHSsfzL9oCH1P6mNNhZfWaVVXPT67D1f28RXrKb8D3G3wn2hWSTNGcu",
  "key28": "4acpKVkFGXkCGDqikSuSpZykE5b35LCP9b22w9D9CBbeYaHsfw282vSSoTjtpJKVuzAhmCskuA2sqY4pcNRh3W7o",
  "key29": "27sV5QTxf4hVBFeCTwwyq7kS5APU7LZQ2BKw9BqsBn2u9Em7fMJJtupxJu8qzrSB9X7kqDpuhBc958TqsAeV3bwK"
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
