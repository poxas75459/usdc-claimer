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
    "uadTzyJvjXgBNgvaUAjsuc6RnunAbag3fU5S6ctEfVghhnqrXXqcdJB17vPJbJTnHRoN5GhD8VGNAThcsrtpqVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51UqwXMbVnTkRt1k33vHHckQ9NmCmai4UTxT9gNVz1WzHCpTwnuEFbgB7m4t1Ed4zwF2zsHw76hJdTJDgMBKcKzh",
  "key1": "3qas3369JcYhCT2Dy26F25BarCMCvxTFtVUG7ESVkw5bShPeP7so97MgXWNtrpim1LA2bJ83oxenDRVCgbz7r3Hp",
  "key2": "4GTzWBzKVZPCyVSE8iwEGqEcvCnNNNgNjjFr9TDg931AfoAhSaPLi8oqsYH8WhDQGmaERHMDm9eZvQYDYKRaRogj",
  "key3": "9UgG7XvwSarCaYJjF5SpXEcjuW5tVHXSa8GaLB998fdTwtcCfwzdV2Eg1BtkBj8wXQPAot9EoRAj5c5MXky8rJz",
  "key4": "4oGhUaroyyypVLZy6KbvT8FyHV91dvLq4XfuCfC9QkXHhGXPBxAdgPtV6b6gePNabAojSwmoYQ9imHUFAMnPSJYb",
  "key5": "GbzaVFPzh5v93hkEdpUqxbnyYK8L4rPCarEiyrGFivjz9N9R5giV5aGWmvce2Ay1FieNsBDfkZw11CsJYYoF8QU",
  "key6": "65Zb5WJRGn251hejQhtLZcP8YMqQ8hELJni2Mgbh4ESfCx1AVhpdRMMpdKDKejEJThhcwUxjUWrHQ4kdCcZSEcrz",
  "key7": "2HLHXQKbxEepDWn3nZjoLkUndCgw2SDMyV564dFRupHJZcSaDzXzMreQ8wSzdFXtnaRqDpBNwrMymrrJPdVSPuZr",
  "key8": "5D6d2HFSnbb3DzqTjK71vfLAquMPpWKUTL5YT4KpJ2WxQFbMRm76m9e2viidDAw9veNWDzXCa5uEcNm5HAqEc8k",
  "key9": "5HMYNA4Cf3K65agtEyu8rQpYf2vV2khd1wXRGoLrc74xppnjjEdUjziscqgEsPRaXDUrB62at7kGcf6pbmKimSUr",
  "key10": "32GEnRhcuEovSntk2qpr4BhSwVRujxF968QQ816wXu2msfH7hzpFRdhx6fTvEhfqZtes98CBStx4DKG28kJVw3Gr",
  "key11": "2yi3idNZTwyWfcf7ZU4QJKzSGSh5MMsYyGehy4ShHCE6uM9Kcziess5SyPN7zLNkVLExGaUsLEERcQHDLVDN3CKm",
  "key12": "2iKhpnKrRv6K59aZmwAoeoMKoAtZSZmEKyFNdeKmQa7JMNfrhxLaMXXPSbw2sv3HwkopQBNLinR9844rsJSPEiNm",
  "key13": "4jmHxhbESGFgsGsEGeBTr4Bp4qZRFoHLbwyJBBfzRDNpq9CCSAXo9iujzTkyWdQASMHpeSqdQt4ppnqcq3Tv9v8h",
  "key14": "4GpScjgA6QzUNjMoTzVXmafHkWJByqRaQb8Ltw6icZePkqNRQ3eVMYKm18yxPGAjxHo6C6xXuV9X2CJ2H9ThEK4B",
  "key15": "iaEkhCwHHhtufFgVuPruTtLje2jyV5jUJ2wwis3Lfgpsu7hBekC6D2CddRnmFQgK13xeahpga8krS6Yjz8diqFZ",
  "key16": "5ruCWRMrJaebDkvjxb7KBLJQifp6TGZZg1HKRZKcLqFUhB5ZfagSbS9SEE2Rf7KxJ8oLwhBEMjQYRgdmdFnPtmJV",
  "key17": "UBo5cL9yjgXQ2fHMcimZwwrBDkKZkjMfziHkLDjoQUEyGwQBt9HSthSv9G97DrrtEzjuqYyXVNrDhL2Va9mxPRb",
  "key18": "oczP1ModQoozjbmxAHQuY1AjnP5ftz87Qs9WtSVS4BphcBLAA5G1wANxckbGwg4MNS6ZasarZ3ufjmSX3iCeYqn",
  "key19": "4CGGzgVhxRfqSFDdUYy43ybwA8Pd4Ebng18yKwcyEqrN8XBWWeVX3ACmbJxbthvhXnyykua9r2htf7jej3MiwgZt",
  "key20": "3wgNDikWYjLg7DYGXH14vvXGTzVm3JErjcZdiDqBt6zjRGdFVcCVYbSW4KmkVUMpsFrcPtJYSP5Y55pSL3txXBTQ",
  "key21": "vvycnGNe7xfby4e6ZnbuUswRoZj2TcUnu4Ycer8TrcqfmAUUWotY4HYmkMfgCQYPV6qXZksJbsu9bVt4GjLTEQ2",
  "key22": "5P4RcpyJxk29fm8XZXsfUoi5qM1Cad2bcpMHms64xETTKg9Yd14CYyZyXveJhgmqDStRf1dC8sk8XWs6ZqhpFK83",
  "key23": "4o7BBGthMcME8UFKNwdpdjijXwPbAiW1KNrfBfW2vEuufGBhxYGTdzP8vJa652feKa443xyVAAuVtgf4Viwrpyfb",
  "key24": "2bsVaRnYvWReMrLNjhwaDCmvys2jyisv3pzY1KgLfVJLZGscGKokRgthAisc2FT7Ltaj9rz3f3YZ6GpRQ1Yuu9tw",
  "key25": "wcaSB4wUqYhCr5HBpC36dZPkrLha3DkYEuR8uqFpAGjPBfZi4jwy4MY5uhKQH9whd734n9HQmmLS9pwFdHZtDjP",
  "key26": "j4Ft5k15Ub6W45xqjFNVxW6mZMSLTtB6ZL1cSkawQFcHsU1aX9pJkoT8FB75x8MhYBhmxisAU4fMTdAiWSw83hP",
  "key27": "s7QNaCrkoMGKRPJjBBH1bQXzeXtxixshKGRMJ93VCM5Sm5TkRPB11kw4A3dzf9NRVYnea69rdG8aquLzM9ab2Rd"
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
