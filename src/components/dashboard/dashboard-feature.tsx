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
    "2npGErJSbXJzTfimCkm6JGS1tsbEnPXRdY8icyxLVMPFE5jXcVZZsobPomFxhxriwweYhHeWSGJAQWiGGVKS1Wcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6eoJZFYHYSTNkvkKNhFNwkSZCDtFm61HXYjCMnofJBgAyFDsdva4zLej84KxTuKNRC89K82fkFJSJDmXi9gK36",
  "key1": "4QJuT4S6quVn4UPH2Z7Bms9V48eGocMujDPJEf4djfp5b3Gpt58CnP69MM4g85ntHa78N2j3VXHWNG3kMjS6Zjrc",
  "key2": "ZZWz3Fr9JBkwgH86s4HKwtJ5PvAXXo71cGev7aaFoZkASDaXRoSktPtDAYyZrPJFscp2P2ZHN3ALPJVXeVfrRQq",
  "key3": "5BtE1SXPWEnMK2tCKn4FgZYrzMCSu7g83xTDiwqGXZJMnSYywNSHDsQq2XwgesxtDvhJLrbrZAinj7QwziEQkYZf",
  "key4": "56527YyRy3dKnz55UKa567hKmb7kJfNpMxi7T22EmJaQf9SSMwvaXqBkMKBZxfrW5QWpxoGYk8mckYysNJ1M3vGB",
  "key5": "iYZ9UmXqj4qTJhomLU6f642T9LcfRB9opxz2SGwza67if24R3omtzdz5f29KhcEqEm4ucabWqZtDUhjsZmvs1q9",
  "key6": "42kXbDiu4WJtnwqYyoquGbi8jKezsWibP1ToHJgvwhHjTf4WeoWV2pRY2fkgQ9pdTgW6fBfdwC8wqBtFQjyVEbjw",
  "key7": "HFardAYZyHm7XBQRVXaRAXvy2pUagddanSqfYe2x96HsMCgt1xNS9w4UUf4VqktnGRGE1qpJTJ18gU7KUprEzFB",
  "key8": "672g6egg6QCZnQRzBDJF7YdBPsqCGPdgwgAM8cn6NxbDxBcfe5X8q7NszBBovDznrqnJLR2SmquPxwNBDGqAcrhu",
  "key9": "4e26Zz6Ym1W3zfLZScFnTTSDbdd8kDchCidycZYhM2vNBNfnRUFjtn4Cs1ZUcb1wB75N5bW7BeBM3ZZPZ663b5He",
  "key10": "5HixhExyS3rxTZz2PyW9NotoFwpxACzaRCPjxUjjpt17u8yejENnbXhUjpeyFj8ddW8bDYMGrkNMY6o5JHbmFsJ3",
  "key11": "2XUnueLroVK5UtUtQFDwxKAq1p79cxeZR3TQWtzB7qmdoP5BBuhYEFT9oKGWEJF4Sy6Dr4hb5ak4TsSKvjKXaDCb",
  "key12": "3jhpCCCiTYmmEf8Hmxiizc1avHPfaD1npvPf1z7SA9ARGLWUhPnAYxkMS9ZfpEmiTeY2nKMK5rSr4i67NUgsJJo3",
  "key13": "5qFkLip7DAv9varbS2dafmCcSCtv9MQwgLViMznZ5oz78ot9waYvm3Nk8vUw6fz68ARpvoAiGeFRnZn5vdzJsuyH",
  "key14": "5WLUqPPxZMBQfbNtaGWk9ukpXxneg2CB9sKAKfFFsURzw6ojsoWKud1dcaeA4QzxCXhLE7rfq9feYFFhmDnXPnqo",
  "key15": "4MGHpkEoR3akAgNC9gLV3Mvab153mepqYV6zRLYhQbGrXvef9Mc71CLjgcz2X7qZ9yLpAPssiR1exSiqDoFwX2b",
  "key16": "3KSyA1YPrcE35Z3wSoBBUf7YC7Wg2hyTmMugbX6kbRMiykDS97xuDhKmQejPvN4AeVB9kesYY1Wj1FbUZWJd9vWz",
  "key17": "2ciB38jKn9b3GsyHMBWSBetSSeXF1cXRRKZrpnVpQCa6FoLtsDQGFn5aNJHseugY25T9L8VkAQHuwC3FY26DZRjW",
  "key18": "4MvauvDn8mH6TCE36Mm66cwLbJezozYBtvAT8cxK6Zy8kfExcAgtGUMpd4NheqdH3mQ4K5RC1knRwec6s8Epf9fh",
  "key19": "vhgBXuYCWYuAWQA589oYBzwe1G1sfHwqB1pnEUueQPbQQmhyqUB5uLUeuB65AGx8KAL33rK5QoTE5igFXRr95W5",
  "key20": "reMbvPwgJeH1g5WKCVXyv5k7eLgsrmhxeR4WbugDHtN4eLXfJ9mmNKCm7Nm3uEARAXTxjxbXsaQh7VNAmep5N3A",
  "key21": "3rET9bUA9vvrRM5C95pbx11qYyap86FFHLe2QZjAgkkYWAdeY7opjtBdvcTjQVktBtyeABUSv1Bt42Z1fapaFeZc",
  "key22": "4dUb8KncYWgvXFVLrwBagssC3YBWUJ8mSZA9nKpNYyEYMhenfCAz7CkFN2vcjExFmSrsggjs5KQxeM2gwRJP8ddJ",
  "key23": "2rkSoa9fXwid54zozGEEp3JGzcroQWEgp6QVKxr5WZmpQAmpfbj51xGxGzJvxxofDSSAtHFn6Yz67smiWvto2TdS",
  "key24": "5YqwPkVPHNskLvgJpfkHuBfLYwgARniihifdLBmPQ1SnZg29Sb9K1RazEfohLo1hnkAXpnFiwAVmumYDWLfepRry",
  "key25": "21AFQnBW4GqhFyv5Z7Ta6V7YcnvBJP39DtpU1VdduLG1Qx3nrihD7tpnEQ9ppiuoNm7j5T3g29uaETDWxBxEffRL"
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
