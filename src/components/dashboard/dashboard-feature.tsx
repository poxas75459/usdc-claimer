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
    "2iFQzzfAdVx37L2wUpwAPUY3CDjhGEz2GrLV5DmLy2enk4yUMZD94aTEHqvT1eHeayHwTUNvweUPfw8H4Paj7uzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wrbKyA9bJuRCPDj1B9vsrsBc7mKSipnK8oKBrfvWwaY2jFj7di8qHzFoPrHLXBELBQvfCFXJGkM77Rj8ttgKNep",
  "key1": "5U38Y8inahF9rGKd1sWzqisctWWjsH3nPYGmpTeq9pqyhn81Mys3JknU8KQhzS9s7Asc2G4a6crtQdS2FNfsKP43",
  "key2": "vH2poeXgedT8zY1B7KErRMEf9uDQ8Hec611LfNHWiAymjD8zVFC1vUTFFwiCpvB2AFgG3NbtLTazzV5jN3rQZfB",
  "key3": "3qY962SmoPYAK1garSgUKBmyRAPcynPSgfYuR3TBNY2tM5VALMGeYfxyddn2CZvedLdSZwRu6vCUSZ99EgnFnBFi",
  "key4": "3wZRQ3r9VhzUm1bCqPP6ZhsJxkhwban74pBjAbYo4YyTG4ccpyv1QCLsfjJpZQNPfjfr6sTgMCTXU7YtG9FpjXh3",
  "key5": "469c9ZpBTaN4P3rnn3oJaXcnxgQX5ko3ZGkAvjkr95xWqJ37cvnmNG5BcDArYncFjswySjLGfUGju6zmAe2KKQt5",
  "key6": "29gn4RwM9Lj3gQ4hXtuFTVhR9awumcxBx74eow9ugvEd51oktyWuzNGGiAjorasB6pRxkijX3oh1wpp6zSmsLUv5",
  "key7": "2J6JSkSUyni3VZ78P1DcSgUvtdGzbE9QxGnbtXCx3ppKKbHmjR64vhADzJNwSwadmGuhAo6MjepXWiA9gaxDLFHQ",
  "key8": "5n1Vsx5Gu3rNo25KDneerJUbJNjrpuRKmGCq9FG35iMjKgjHZWq49qkFPbXagwTA95oNzzwHrYxVU4j8J2tiRYXn",
  "key9": "AYChYfoKv89zum9B3ctPvsCrWh5tLng5PtoMdviAj9jLBnEczMZfpu4UUvgV3qaCiPcs8y12BuCBAzLsUCQYntS",
  "key10": "Mepi1VNcM1HmKwG14BwMxudZHTAa3664H7BAxeeccrVQH5BfdcKeFQ9cUcWadK9LU4SEfiAARzVKQRH5Jk5ZUgV",
  "key11": "5Q95r5AXxukhaRmc88KaDaV1g1dsxiS64B3iV1XHoTGQSmrVBGjXfoLKhdKKBXJHcfNeDmyBPWRriZWF5KYTSoSD",
  "key12": "3u8ek5uyh1qNy78N7annBt9ZEWgLZ4ohmd89VynHutW6KaUNErZgJTjf69KCp1YsfJEmGaJBU2WNirA6buREthsy",
  "key13": "nPJsAUC1CkKBevbNZ1d6AriKQhphpnoT5DpFCiFoDpbxEyJwbMgCTdbXwU2HV1Zt1MzXCAwA1sX3WRDzugqjsQ5",
  "key14": "5KWb3D4FuuemxULWZrBMp1k6A175x79ScBrJmeQ4LqmAZw7e7jTesBB5akGRY7MxVPgGyccr4kwagJJmE6HxPuTC",
  "key15": "jEgVp9c7cw3kFw9G7R7oB9yGQ82RcUKj4PZk4iaNdsRJg771t3fiprueCnc1UemQhGNejHzfA3bQidc2fBPeLSz",
  "key16": "51SqMZG18VaRvFmJ81iaskuQ587FDtdRQ9CScPeiPtkhjkqTwnmbEKLZP1smrxYupiMcGzvr1ugG1xeXK6pwyYKv",
  "key17": "2GTmE35E9LkLKeREqR5VzNLaousbKPMJ88xfrh9JZza1HbyM5DwgBS3KoH3eByzYAdsczYzZebj4dsM1Ae2xQkym",
  "key18": "4U5gGh1FH6tkTNbVzpMEueME6UemoSkwM7nNZTF5me6riZPoVeEsnQJDfE9jAQANGJVg97yaFeD8fhQWZg91wk23",
  "key19": "3aw3qwZcK2TenarxWRNB5Ee4NfTRG1dwTDend84iAnkE3aurYLCfYBB2w46kE1vzLVqWGv9v3SxWCtY8X2LLEmGG",
  "key20": "3FEMS5oQCxmR63V3FsppKsqXa1V8vX5MC5Sm9qjpdgdHXGX2U8xv3YoYfyQZpmvVGwRgVSSEeFHw4tBssbEPaFgQ",
  "key21": "x9UGnaJTqnYxnnDkt8VAonzuz8eF5pPqbYSBSDj4FTpJNpzngAa5xDwgcF3cES3DPB8eGL26Scwjw6FAgSkthq9",
  "key22": "3LHS9hfB3s34ECQfhnqb7fBAM2A52XeedYwyugV6UB4hKNtRsXrvBD5NWDkotDbPBbio3UjWsHK2SGWQHPWbtUra",
  "key23": "4RBPrJxLnutL5BGm1WxS6QpVpKfsaAMAvVkvRvfcRjrV4aAXpZg9ALKhFewQS179JcZGnDXA1DDPb1Ae3yUJjLex",
  "key24": "HgjadY4CYtavfh2E42XtSxjtM4Mgd5EavFVPSC9myed1jCQYu3awi87hQvGfRCUWFAZv5c4p5GnhExE3AjfiJEm",
  "key25": "5ebTdg1mNRej6Gu2dD4bPLzLRwgMM57HVHus2QK8ZNU8sZz72n17nu9gYYMPhqHhqS7khXNVWbfpUZMCnsUQ5SBn"
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
