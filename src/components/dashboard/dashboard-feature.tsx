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
    "24x39gXTggd2Y1Vm5EzkBKGdE62aZcf5PihefRCARKXifjfrbRGfVoLUJzGfh8AjYrXBmGnv7KyaqqUA8HDTpoLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57NWNqhh9XjQTknLVVTZWtQuvRy7qP8BCyiwSPsbMrvfV8dzEq8vzJBWk4Z39MC3xVheJE6BCCZECkkqXJ3ugTmi",
  "key1": "rub6mQhhTYYgKpCJX3QEsRHPqurYEWfejRGdYF76pfCHnsArUEtuVdih7fE2AecDDtXhHPv6FxvCHCZeL2QDyiT",
  "key2": "2GqdJiVAZkDAqHLPXyQ8c6Jjgy65gJnvioaNxJtnUxvy2Sqg52H2jsfYhi1e3YMMCEjobwmrP1HHXSqumCQcEwuT",
  "key3": "53rrWCP1VoadeE1inmm4prG38w7wCMkwishQN4jPnU3M5k69SokNRTzpB3pPkJeeU4MVZih2RRipS7rEmsVXqhbL",
  "key4": "4355ggUUP8Zn2dCMJ7HXE9hjuPgxfb64AV3oSL9XDbPzLBhdmMYPt1h7G2Yb3oNkSZ4VxETyoXcz1o1kLGNpNtHS",
  "key5": "1LoxD9BTJmAGKhzeSHcnPHReWZknfsiP2myAcnwihBWjJZxcPTy9qpX241c1wqGU4zUAp2HKGChMcyYJvWD7WDA",
  "key6": "3z54u3a6xba6kEFYnKRduyiFSiE2MHDjXjyvR9AEdshkNZynAwqCEYkarWbMQ6ubUWkYjpqyPVv2cwFQCSh81bSv",
  "key7": "2dR48piHYbvFTV6rai3bYyorks5kdvG2Krr4NZQTCkXq6eE9b9r8yn3toHbKgDddvzabfEWAUE9v51r7Vedh7HjW",
  "key8": "3RW32iiLNPxmhrn1o1w3sfxSd6uLkHzt7n7eS1y1dLyRDQBFw4i8DWJ4RrL3LNic9Ks8rYkHoi4G2dbJSJftMqpc",
  "key9": "4zWN4XtinEhA9jm8XBknXRoJvv2n3Bpk9LYNrsxVX5Eqf3Ei3tbkUTkcgsM5UTQTTJSTryeJo7Qo2e9tdwdV9aSq",
  "key10": "5d9APG5jEEaxVoAq1sNSXjdbmUE3P9iGSSNPoJScWT8Ptfu4VMGLBQrn1pS9ynu9fTEFkUQMcNBsv1kBUs75qNTv",
  "key11": "4mp4v2Gg1ia3tE2EzZ8WPxJkHFv4A7AjuFyYKSo5MHpGVKfWjyXaaKdz8ngRZYkSzUW5xS3EMLJW5VDRE8wAdysw",
  "key12": "46snFTw6Y3KRv2mvCLq5giCRihvmzEmQmpBWi7f1X88PPxQRjMot111AkCnj8hXokhFXaBZhMZPmWPjKtxp8y9U2",
  "key13": "3hH1nEeSRPvF97pLDEzEMDX7BgkCRt76GwgXWZzoksA5BCVxRq2yq8B7U6xf3RUXZ62QAsGN6PNn39kiF8TsCrPg",
  "key14": "4JdGmNQBkQY84Eqj9ym8ARDWR6AteAJfxUtSs7Gtk4Tb1iTJYt7BRND5gTxjZYiLnevuyGG9PK5KA3Nf97dvYJJJ",
  "key15": "4E3xnorzsz5JdfwdRNfgmHTebEmtUWYSwsA9VreD53FCmSxVzYaAkjJ7tff781JyLbtVWFZBZGgmnM4xiwuFMU87",
  "key16": "RJbHHYF9yvSzbyvvzAiSYhF3H5sfT9bXwwEMFRoJvMgeSbVayiTjaoyBf1DXQh9boqPQRC3bKUTWRVzk3kMvdqV",
  "key17": "TuauaEFJdsrfUrNxDhqYtjndMkMV2eyrRLzUaUVW795nHDLawqtthgsNS1SL4BeocvBGfBa9PzJHJVG3AQBPTiP",
  "key18": "5JAq6GwJkniLJFt9PobwWYMUiJ6H2JxmDnD4e97Wf5LwzYUKkGoUWZMZvUt6nYMXTqs83ZPbZ2Ewycs4pZGeZM5u",
  "key19": "U5YTDDTMZ1K7sjtFMGA3TPhGRvekEqa2q5EA4oTn6LzkL2VEd2F2Rp2SCxgMtL8sVVE4QCksQxAR9hLNiZ7d8kT",
  "key20": "3t3Zm6UczAiAufUVr6DopAyTbSiNbQUNvJZrMNq6hBPWspggnx2fyppRYKqDtw8z4Myyj7QTUFTMTuxVCTGccidm",
  "key21": "P3AXWov3k6aRHqc7Z5H7CPtWNZZipuMqkq6EzjJSxFTUs4DMzXz1Q2GMZboQtbMq1qP1ZByBnUqJLb39b3shDMn",
  "key22": "5g3awM9Jfaf1T9hR7cSHvoqsMxfUpRnKvfM3Ndc75Zdr6jD4FE2DnFLryrGt8V4FG5xizgJxq3H6oiepasRmLSmT",
  "key23": "H6LnBt4K7Z71aMGbR7wCcZCDC15HxAjjnZSpZpmE6wqLwDa1UPG2RUK3EwFqm35XprWfzv9Aod1FrfXNxcuswiR",
  "key24": "UDiSdUE2WMckjVxhnNHyRN6feZMHMW5Wms5GJeTMGwwf6vLrxSaazEGBnzsdARsnRXNDJUnUYULj6wKpYxEixqM",
  "key25": "jJN49Mgm8Xd6nF1SBwFMYmXHM7qGhPu6QJ5GFs8M78FUbp5Nek5dhZwvQeCKQ6ZXtuejvmQCZHnpqydRUQmvsLi",
  "key26": "uQ35KXD8ArhnjH9Xw9BeWBc3gMRfTCaNXTXPgc7tJJvGwCufAhxvqtFnKxWyD2C6DYdgNHjfhuRZy52VRAs8qEt",
  "key27": "FCaxLj3x9NDAvuHqaG519PVdViEPq1dcJ3447z6F1TVu9yX99RF2BFbHtrRGQoQGjywZ7v2uidaR3UjWc8FMoFQ",
  "key28": "ujJ5RLaPjBByDXCJhdb6X1HiKghuhuMqqUH3M6LZzWDKP3Z55ryYm2ZCYTruz4qsgfbzvYzc77oPSiPdUAQMJZm"
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
