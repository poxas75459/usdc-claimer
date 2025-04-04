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
    "2ryCRrY6wz1tm5Uom5AcZFDH48gGCTiN6o3Y3R9GurG6vYyZGR4unrM8GZgXyubWJwtXoixV8xxXrC1EewrKbQn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L6fX2zWTBdG8uji7QLxkP1VQRR6q6tLQ4DDHyLY2chhFZ1QYsWuxaK1RAxDfJfAszy9QzHLfSYtgvH7qwdgv6Hd",
  "key1": "12AE1gR7tjsbUFbxSTZrrrwfCCCWz4PqprZrzeGpKoCRsQncFeg9vKgGkf1LMNrigA1mjC1CayuZTAXtNu83PmmD",
  "key2": "5vyhuih7LwCUwCaDU3KHTd6JcsGkMeQaxU939aYNhpt1m4BKPTXkM47DM1zBtmuNwRKwy3DPqfa4vjvcJDisdvmE",
  "key3": "5ASri2EC36vYJPyGeTjEvUKmCAbrYyE2Hd8LVoo7vjPSXmR9azaZvARoayDQYPfRiH382XMrtUeRJTX5uiygYnNo",
  "key4": "5FXpbzJ2ARdnP1mj3dk4DuzSWoFAmoDMfmMyt3XEyNp7KjigyhX18BSzf3Kq7sQ5igWD5SCeKzpj6b6J7jAfGL2A",
  "key5": "5DUUt6Nf93UbfSX5AjkpdYQb5q87Ck8vZpYiLc7G2XCn2PQX5pQ6fBToJ4pxTdv7fhEqn7Uucy7n4dqPCdCHLB63",
  "key6": "3nLeDj4J2jVhUDjZMs3euVhbWJogQordwCuJ9q1VTrEQLiNeuhKVLNoKNg73wVFqHdYbKz9enURAiYWz2qgNrz9R",
  "key7": "3r3xBtSAiztdoo7Cty6UqXbXrsDySbnzDAjJmnbe55c7EjKFhFgy6PFRBSuECwerjXFVs7LDuRw9Y8vmF4cCQhhg",
  "key8": "5VGL6YijtmBC79rwuFbZy5pnJ2R1wHyWKAiJMhmiNPNAsuxN1MoeEZRCt3qd8E5WJXw95LYEeCigsoa9cLz8EEwC",
  "key9": "5bzS81FH2snfeTwKpeeMe9NdMz52JvCLKE49P2w7934izZNoVmjsgFknwJen3BJaD365bzf2PqYMeH9etBrASq1j",
  "key10": "5P4ZA4Uapdyotksx5JqTJYFfMRPyR6NxbPJVpBZ12s4QLGVpg97JDXKHFCjxriovkiZfB4ud7fiBzW2EYQMavtH9",
  "key11": "55SdfcG2oA26ia1WMdQoRXWzxTY78KHmDJE4dMF7KQ3TFibbDS8hdkkUB1ojDCcScYMkmU2wSHVyDfqAkwVzCebQ",
  "key12": "4sWzn8DNqZxQszKAKonHu3f9WDrSRq9FaARg8g5wW4BGYPVFo7bpcCgXSe2xcsWLaVK1drpPtTU7Kp3pv1fyPLRN",
  "key13": "5o7Smiju2Vqq7ir5AxSjvZfmgq9sxbfB8BMzzf7VgAN795nTtaHZRALb594Vf1zADAPsPaxo1SPbYTQ1kBAUT9hp",
  "key14": "7TFdrJeQAXFFX9eYNon6tw483bsHKDeNeqNhwmjWhXEoJkqif1s9jJVsA4MWVmszhhrzkzcFSwVm5AUYKsxeLaE",
  "key15": "3br6vovVtFuBsiR8K9mt45LSqAgwiZLshSkyL3v7ZCo6d3biSjEygcM5GkRVRZZUqTL7WxpnKCdytDoWo9qFt4Q1",
  "key16": "2Umpp3WP84FVpxuZ7tu5n3Z1z9Nf2CexBfdCGMbrGGGvrWKwCxStXNPffUJKpLwp4eE57cPT5EEbPpx8uwYgMW1t",
  "key17": "5AcbCaNyb9wGWro5bNe7AF56AbjgR8cvXcrxfyjJNxcUm9xjfE4exWSz2m1LBEq86t1SDnHSyadgLN2UBMxPf2Td",
  "key18": "aNrYC7NW4vc8PkeYwFG18S8VxTk6ogigKHcsbKgeg5YtbwqbRcCZ49qKWLqVJjTJoXKEvdXULHo8EABKYmkRu8p",
  "key19": "3EHi24MgRcQexJRoEGvv17d8A3xa35PRkutUk2oKUAhdehmtP7p3dRpPVxozQRjPEPLweaJkBtthLMGaDg16JvxH",
  "key20": "yrsSMwKkwiB9PxBVzWr3CcmPjV7Z1XaFBcRcGpwiJscP3NLk9dp2JwMSZjNTCXqcvNdscKu3cTtYRVRLGerNDCJ",
  "key21": "4bQ5D8UCiaXkYCq87BFWCL4A8gp7ZVRt97PpTn6pTrbhq9uFkEwvehUrJbyJghq18qgvCvUCDAGoe6mvUX1JuP6c",
  "key22": "m56FkJtoy5t8ppmKygnfgF5Ytu4aKbcdYtiXTAGH7GYguUkuDiGebF9uYZDQkndMBrd9Sgu1Db9KUW6YgxDPma2",
  "key23": "c7QwJfveZsPNZJpVRKipAAcRJKSTgERoHYYS4Ep26y2KqFBUngahLkB53FaaNBLxzqxQiivcWvdWqnN9vFJ1Pue",
  "key24": "gCZbe8rvWK8d76QELVq1fWBXtr8xb9G2zZdyJTLRFrNwFQhN4gZNNx2QqMRzGdUi98isKmYTMGK1ecxubcjxQnN",
  "key25": "2cKiB1Ar66kUHmFX1YK3w3YDrP4DwkWbeQy1jxzoz2gi49J3M4fcn1M3GW9uDu1JwN7KvWQ44eJcW572yUuZAtub",
  "key26": "4FWYBeCnfq3asCdUaa89YC27ddZFEUN7ehJEUrxHXKQBPChCs9955fsWU9f8vphMjq7fMMRixudv2wVcxcSH7WfW",
  "key27": "59gfoD8hqt4LwXjiDv9qATLr6Cd9d7KHQ4e7XYRtaoqncEP75oxExPC19z2zJPDFoSQX7EafkfFuCWtMj8Ez8eZd",
  "key28": "3WquWNenLjiAWPoqunAYUUrxRcSRV9RuHD3qQV8AvDRBXaRZipyCQtWi9xbCa7hitFP5297bvmh2RV2WAsSseh41",
  "key29": "wQobKGrkGpX63ZBoDNd83KFZiY9pDrxqDzugVV4oD12pfAdHF1wPmkJGn2fxKbK4rM4a5XtJcEAV6KBzzuzeuEU",
  "key30": "3rMXmau1HGANkgVjU9nZwUNhPPNuMg8h8jr75pwxFYTEp7r3n1NDRN7gcn2CGdeGhdD1AoroMkxAczSFYqXxsKSb",
  "key31": "2ywB3dosJqnbX5tshTP5svTzBhq1RhCXscxq2ragPgFGb7ieDouY4KZqAFYrCLUm9NbKDHC8QQXawL9ttjr3pbTA",
  "key32": "4WfDXoYvFK165FLpURkcSFAM3cz9wjwr8r84jBh1FpACqqvk2DVD6sZT3BAo3NRxdUDrkunudc5L8FMxYMJyiou9",
  "key33": "42xBWGUMeLXTrHu4PM1aWMayr6PAyqSV7EZBH58ET6v9ZYDduhsViPGUJZp5Tm5WD8BZVLn5RyqoJCsq6zTUWLMM"
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
