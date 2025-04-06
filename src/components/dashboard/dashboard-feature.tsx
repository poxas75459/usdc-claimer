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
    "KpdefDHqSGBsAjV423bXw55M8ghbaMyeTMyANez968wmFXijXfsN6eoV2dsnKgvg93TCDgy4Pm6kHxpFHfaLoew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cBPkmeFuaQRQdKCsniurU3EU2dw3pxfENXMbraLjuSAYBYRTyYwZS7PRb5BPc7TGK6geGt3QzPzJvmWZjwYGhYA",
  "key1": "2rV4BiCU9SdkbCtCtZyQTmZCpyT6CH4W3mnAzREmKkucG8uFGjzqbSmB2KP46uDsh12ErGtV6ia4he6JcMXkVAVj",
  "key2": "KKB8R6scnedfHLrQyUzFPaCpCJhK1J7noSv5v2ZhQxJpnrXpvm1CETN7jcuN6P9vNcVez8dNEEMVRPBmbfMG2FG",
  "key3": "2H74djV7U2iFKr7JjGiUUVfiLVfnFDGzuY5g57g77UCgM88nDNxvSHV7FJpohasxy3E1JggxNKmwRQdfSJZVjtQL",
  "key4": "5z8GqoNiFKLap6RwW1CjrFT9y9i32R8aqsvgVi5H2xRZFKwy1DchMrBR1KWEsPqwP2DFejUWb9ZaRqBiqUHedpaG",
  "key5": "27CaZDLMykn9Vd3tfv48noLwiXRNeNbKh9cJPKuHyM9wzDyyJfoGgt67qBZHDiLyVb8FoDThEYL89pPy31cXskdp",
  "key6": "4cF9WJbqcYRnqnBuVZirXnsHJAoD6AEkSSACk5RWodszaR7XCAWx5xZyYTkN4Z6rioP4hEwnnXWtPav7PG17BWzr",
  "key7": "5AXbHnZtTpEq6KNuU1MXyrdTK81RsXKdh3SgpknMpMRiQhjQJhDk26by71PJrbcpFj7v9mgXs4YcU4TsVXRib35R",
  "key8": "5jRLTyYujazhtnUkLDUZC4ZfNMZisK1K8VTYbfbQoYEodg3AsmXyH3ejWwmX5wwUUhwiDJLDU8dkB5xYk3gTKqwF",
  "key9": "3jZv1Ytc17EvzhHrtSqZWXddwwJBxPGWTAbF6qNDwG9Es2JYLYJPS29dWMU5em4ZEM1Y3FadBtJk5u4aMXK6MLab",
  "key10": "5rqpxmJmvQNVvzbLpqkJGe72wX9UbvdV9cF7mmyDeQK42RMU2M72SoagyeL4UhJjdphLsYwhHcx3PXjkb97xDNNN",
  "key11": "5oqzeswxc6jpPqhh8eSxN4JGV6ZtwgrkYc8D3ka4wJQbVAzvHhAgiEoaB97pfGVTmyXf78xouGzgaUpXXPYNACmu",
  "key12": "4KRatJm9Ut1pEtZpCGKApy4jZ48k1ZKLMYneT7xcR8Z3pFvHfeTZ5rwXHRxjzQA3V4cSrJXcaAHwKuSd3ZDCuDw",
  "key13": "5EYLdQ7f7EBDCjDNrH9dLsMPyV8yqBW7rR8eguWXgqGDqLrNqsCUbe37voivd4eU1dBE42YXbCv5rutvYzaVq9tN",
  "key14": "CTJMw6sNoChoUpvkd18gVEx9ikThn99q29MGFwhzhdRzXgWZP1tjnaMMaLXZHYbqWYpekUAtuCiKru6mASFRP9M",
  "key15": "3o1tLJbH755oURfFp5MuCSXycQW8tviJR1zhNZYEBpjunBUZ893Y8zjjYQHHFqnrUgJpdiPDFiQDJw2WzwCbSmy",
  "key16": "3yAJKMYH9ti7u25AHBnBYiu5dr8y3FwEjnfv8Yw44vj8bGSYfWJFhB9CpL1sJe4NBdu2rNZ2VtMu44QVzjarRTze",
  "key17": "4Tg4aAhw2ZzacX7zii3EfA11tEmkjFep4QNuQKzcgCL63XdToTpE3Ue9uQfdkt5c67eYCTC75Z45hryuHGPuTnee",
  "key18": "5Nq9vRge9PrktQ6nTmBnzYjTgna8vbq9WtH22NcLuNRW2dgJA1va3mcRPKNHGP1Y8fVuS1NRLxGdykWHaCvmeW59",
  "key19": "sFj6CH9uqyMndNzMXJGY3Dn6aoF9a65h8UURwpvkSdkdAmvKNW91CxwAsEbeTRiGMWJaUsmphYpstYYPfgB4YVQ",
  "key20": "4isFAdPX2yp6JHaU8auT5Kkr8h7wKekchw7XNLW56gmj8rqLRfAnHea5i2VydDZzCSA5goMrD4XX88f8WWuCxSdA",
  "key21": "4dQg7eEBDWmvcxXio7YiHyB5UrEGxurghK4t89xr4d6doJpDvwr1L6XryKVHL8JcKrcZZ65WaAp4WmCb4W4Y8wqJ",
  "key22": "3mjXPkg9pgsE4o8zZgCi87j32HzGwCHkznggc5GyCZemMLdbF9kKfyGVvHizVo53pPVJjhjYby2DZWW8arRpjDCX",
  "key23": "5yTauMBvvX7WrM5ua3xpwsHC97SPPg1D9rv3axcFv5KdxyMzwdeGa1bMaFgmJYuf3rDURpqhkzhwn4DonKCRa2vQ",
  "key24": "316QHB4UNttTzHL3LmUZzpv5YdA1qsgoW4xLD5qfbKbcTVci4DTf372HqjUpQcdk3nqypcjujbKSwMuAouqpkUAH",
  "key25": "2P4evttdt6euZBzjZYGJX3HukbZEnnVsJHCpkqZZLfEdFxVvswUZjJkLTVr6aXkTDojGjodmPj827a5djPfSc65k",
  "key26": "4qQk3X1889CYpwXfwkiJGwfznpZwGcWv6j7KQJjRQQRT8K32yPTtxATt2wHfyfDopRr1Bsj8QfcHCNpwtChQ4V4z",
  "key27": "4GFJrZBMQJVPbCy9kmevQD9cwBApgTgbSX36usSFPeAy6hd1v5yeSCB9ZsKs8G7Rpp8FX9cWG84UqJF6EfMhMCbZ",
  "key28": "47r4yoVW6hCuCjrYP9QP1RzfMDuG5NztN1cqkii9KSBUQQrn7j9VzLUgWUP8AwJ6CvKGwYJsEL6ZaibBxDSMUAaj",
  "key29": "SSE2KkhVjsEcGgWyREBsdt1i3grhWJoExGn4z2nZZGjbTEwVR4yQtgzf9H3srsHg5V6wzTfyJNwy2UV9PhuEhkg",
  "key30": "2YSXXoZQWogVAWyKPzfkVUhVU7XvHDgEMoVeWdSiA8MTDW7q3iiPbcdc3jH72dpTu5Z8431doUL32qQS4fGUjxh8",
  "key31": "5L4Pfg2vJrCpZfUbfAAwA3V67U2GFchqKPi9d5eHxeLeFWM2gZQwMTcGG54CHzVuEsfZbLfq5TWNnwn4CmhZsgUq",
  "key32": "5NmFEE7Rgnj9DNDp32hWqGEpqyKWyyPbPiLwTLSZjFZnDwtWgUfsv1CfxMWkN9Uw4YTzLY3aAAYaeEkupC2nhJ59",
  "key33": "4FHE1FsNenwzSLhB6YGcVGye47oghi53APdVejKiWenJXsHJP84y9jXAYEt4f5xY33Gecgbko5wgGkY56HWZoXK4"
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
