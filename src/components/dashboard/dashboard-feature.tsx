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
    "2M6hHxDvbJmK6Bq9LCKUgcvsP9Kcezg8tRBMRkBFbKbozLybe99ByLEmRrZUbvbTY7qaRFRTcP6r9ZS4Za7jMYLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t5PCoD2fad4vxDcXwqK58W6SNWSZTYEh4nAwDWXVTsmfxDP6W9G82KeGfKwqTJMgZDSfAuErTp9MbSeqKR43zGH",
  "key1": "5NVbUgjcAZCmaSeMvoDCiMQ7SBGWDLVsMMULM2QfpkyNkJCxMAcjaCPxYvezur9tf9DmPS2r5ESxyEmUaoCeFfhs",
  "key2": "46eiGkFKGyD5R6SXCj4g8B5M3Zm8cmJdphZXzNUXSogCdX7KRUnRGiByfvSV7Tft9q23kNcc8UdLuzbuREJctcRL",
  "key3": "4Rqqo1e7SJ4qoQn7sRdURqWuDYCmzC5tfB8w4EQxpPovkGxd4VotnfLNo1XsEYYYeaJ4XFhzSFN4VeLLDqFg8ddi",
  "key4": "rAXvX9RrjCkuHJ3bgPXS3uN2PqqGDts29tGjx44Q7j47zUsSfg2DrwzNUxQnmNY1cpAkuaCvwsdFemjrVzRqXqa",
  "key5": "5ecQ5MGgrAp8yrsX8eSvEBkta7KEZkZ7hbepn2noXApDZ4R9LxK9VrQ9bqeT1RxtBJ9zwnbgS9vsR365djXYqBzR",
  "key6": "3sscecCJbEuUot17ajxf57nb4KqiUPL8nLR32Aobp5MmXooECCExzxnhCFADmkdjnKKHc6KwQMWH1zwggQbkgj1f",
  "key7": "46Ymrq96S67azGYZ8711ooWbkF5VLVTy8QFsLAWVxnjFRxvbHqtg2B1yXGZLv1TRqwAmgy3hD3EHqCaYkRFwy4oZ",
  "key8": "3DXSfihVoEVrA1vF147R3ZTYDptoR5SnXkQNFM6h79zkmarFjPQJP66rw5f5HVuD1nZJmqecqAvnhLYdZh3vLki3",
  "key9": "5MEif59omxhjiW922jQUrJHadS43KqrMXRhaqbMwVcUcVtPQyFbn913LMwJ4rTXSYXKUQMtQAiMAiowPPMvLY4F8",
  "key10": "22z53MKxPhCcma37xhLkybNWa2hYQ4BDYSfJhp7Fdox3QYdV8omZV3FEe6JUaqT3DggEqcvqeLgKTMbngrXfApU8",
  "key11": "8kojwpgYnzmytQHBJhiiGgcb92Uonmu5LqVUcQr1YCtWXmojRKS46AfCoaEznyGVjEYtdnzvXbZvmJqbXasdY4G",
  "key12": "2qWmpPcywML4BoCW1sTaW6EJ8E4ccfouXZw46dS8E8vQUsJ7hoLT8E3Wn9paR9VwMKzxivE7xh4PpVw6H9iA49aQ",
  "key13": "5f983mSr3KgNv4BknoZKQnKNmqAs3TdfJtkyDUazZBdT4Cf7prde1wCjwKic1RxFzKtMy6a1nbd5dQ745YoKnkRU",
  "key14": "2K87sMLXNqm3FxF3dkW69CJCPuqTnvmUKo3af1WfA5kGf1rwTLRGrqGBGXMt4QgYnNBigrCW5zkbEnvXtsFvWEUg",
  "key15": "2PPdfPG8mEtGsqt141YPaXFZtDxAkMqvr3DjcYSJKSPiXfSNG8BJUfd9fY8Tk3vLasfa1ix5Uaet1kNqsM4UJx7f",
  "key16": "2Cs6DKkgRgwwwkTkxrYyKMSpFwrcSuTmdWCdiURYMihFMSSEi3qK1eEnZFL1WXGkQyRq5GxKjCXCGUmBQstn9W3L",
  "key17": "2g1TEHq1Ctfq6rkhTiTQFok7mEE2z8fry5J7EE4iR6iu1nvb3DrbHKC4xANTdGxqAXS7hJmoxehAErL3KPR1PQqN",
  "key18": "5KcgUmkn2YMoMEKkHMVC4T3gdgbSp6fP9duRMrMttoxRYBvK7qzRaUUotgLD4u2sYygGhGhuiE4EyTg8p4vQ7AiL",
  "key19": "4qZELT6GfPVem47qk38CagThLjpbSwyGkA4VLe89dpdyPeDW6vHNogcd8vfZMYxMdwQYe9SxkJscVzYfFSYTGHRQ",
  "key20": "JfwtVREWJmvgu7UiKUKoJpqN26stcGHA9UVKskZdkXQNpuKrZkd4gQuQVY77sa4BWBgMdskfEzJNDngnVmzj6x7",
  "key21": "3sj2okVKN8ckBcYpKjkFWFHkMQ9uiNnkGxGBesXHYSr124mQr4wmhcjXCPVToiQRsBNacxvV4LLQqb7P3F1Wbj8N",
  "key22": "NAoR8dtG73eM91CzSUB9z2sxmANKKs3UhJp6jkKMbuvFeBnEAYiQbyGsdbbBdbSxfcaxP3BAi33FMa2Bd26ExJJ",
  "key23": "2zR7mEpNkthbdignDo8tbYzmFaTdyAaooRgAGntfELCvwsv7emUgEkASZhUngGziiReAfuszd3qgvf89GthgdXqq",
  "key24": "4Dxpx1FTVcGa8ZhGwVoMS4NUUGE39RrPkzRVyUNT6hNppWiZwZzEz5SNrpoXT3TyBeBqyCjjoyuDMXDa9uzsLKwb",
  "key25": "55aZXaZYjUe8QCvBHuoaBFtEytiHJooajrN3JrytXFzTtFfCje7qGh5PLoH5MZwtub7QKLPKDirZ7y2SsVDQSbgN",
  "key26": "2wudEFRnjk59h2L2r1nGaYwwmFporY9rKpTbqvVvXf1BqAi85ZfgGLEAm5E1E54iAxFD3wR7jqM2R1KRUDEaHLQH",
  "key27": "41JfFnk4utzVDA2DSYMesktdWtSWpD9ijubdBfvFGqQwjcHehv34xWubaF83V1VTPeRGBq27BKhtRnxFiYGCeSou",
  "key28": "2qhFU4bjJVDJDA7QPZEwW4nm9HXa18kuUHw2t9W5ky6tBT6994ftkAfviuJ6paspuK3t5Kf9g16sa16HdrVm19Wk",
  "key29": "KU6VuAzYaiTEnHUPTFVn8oNxFvWiUSsxP5HDgXsnt6YkdUYtSnoVzyZdRzjNrxPCAgdyMdCk9tPykp1rfAmRd7h",
  "key30": "4PfuWh8ZbPwBxMeL3ChfCD4XDhjjKb7pQrMCGPsbLAXmJ4BBRUp4oXD154h5Gbw7cegce5nEcYJhKMnGo75odHAd"
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
