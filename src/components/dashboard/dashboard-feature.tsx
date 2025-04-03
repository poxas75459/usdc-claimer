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
    "qU87y7xnbZ6J5SW7RuJKJmzMY1wD1xBykm2n9Tr92vcYPuSMBafcSUXD82FQC9ECCDSdJnsHRspqGeNBJd2EGvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RXn3dwD4SPxiu47ePjuUYFzuKKbjgWSDU9Tq9pHfhLXdZe8B6a7dCwUtQEq2otkbh4gHv4iHqatpYjGZXpQ2o1W",
  "key1": "4udoFi8Xs6251wthrSh9bQuipJ6E1E2Negq5J9ss9AA4gxjkg4Ns67zHEyRHpVy2dR4vXoVnYnKtWtQT9WQpYHAJ",
  "key2": "b6CtwqGCk52G2EtB2TtZxj1GpE9SLvR6i1NNUwXpwhT6L5XXuEfrMe4kSnz55QJo51ztfQCbhtX1BETGcqwhW9w",
  "key3": "rgjWyftZK52BeLEtqapLVxViHJwzZzpoADoodav6rNBT7xR4oxUGSF2yKCJN3GvVmWZsMy7TggCEPsGoPzvPBFm",
  "key4": "56dQr29fCunna4mb16g3uoxXa6je34fj3v7z2zUb2DAnWnRBmd82C9SHpxsVm1qJEAVPFLWmzy6dRtQQoQ842TKm",
  "key5": "3GoBdV2ZuPQUUhKujjof5LcBoMPhzwm7DPFHoMT7ejHqWpBoksgVnvkF4VQRoPs2ymDXw7JqEMA8zPY2At9Gqw1R",
  "key6": "3XM6TfzY4CESnXY75mjBmTmCF19LBThsbaTmaoKAizGamGcP9dcvxJ1YBUVBcgfje47J4QRtmCyavoufPTsvrQKD",
  "key7": "2StJvqyQ95KBtw6GZAbWTtV2QPse9AtL8n2EaSc27psSCAHUMvawe8TCVVXpSf1CLmCGFe4Zmv55mr8vhVkJusre",
  "key8": "54WA3R75XTbWjkvwkY2kV33WnaGmhKgEGpF898P7ovZcDyFWPdsiuBi2u5hXqZ9p4ekJ6L9ccTHmsZqqhMX2EZn4",
  "key9": "41NvSBVRF3hzAUyjERFhCDer8HxjWg4MyGZJWqAbncEUQcrGjuASWjLNkYcXbwQm7mfhUBcuyiQcZStSuoWhWNzV",
  "key10": "23DaosLaN7D2P67gZnvsVMnAcmix9KCSBUS1YJ4k6GUaFi5vpfhpWpFG1RxYAsjyxyw35Je7rm3Z92SCDZhz1zqN",
  "key11": "2AhY34UL6o74u7osatju1EwcScmCyBcqdaFKkaXjddmFrRDkyopwSN1o2kMtgJmQzDrbG4G13EZXi1vh612etrVQ",
  "key12": "4VbYWmrDxCc3nE7u4bp88dRLibrXdtNQSAGzKQDmgGxcNxFi8amxtcPfVCPMvchkz4gfjqTyRWysiXBckZAScVsS",
  "key13": "31UMqw99fChjEmqT2h5unhYX1pQvtBtocNyM584tNpfHBEre7cE5Q13n1V6U7WQkoPG4EDVCXKUdRq97WagS6rzx",
  "key14": "TtNDtM4zCiR45j6TNcaimT7XU3B6uSwYyypjuUgxE78u3Znp4VnKD84GnHAdudZ3a9xY1GnbnViknz4Esav5S5a",
  "key15": "5B9UgaH5C8KWT1jgHk8ZwwSduuX6ftAMhdF7WiWCBxBrbWzhaxougp1zWbTBsFNvsFsoVZ7bVpGTEzyGZFRSk1KM",
  "key16": "5quCGN7BHqiseoL55nyKMUsRMRqg6K9foqFzC5iGpGbMVufTbnjXmUL65RamjX1ETawNk7UiSsdo2c9gmo3Wchz5",
  "key17": "4gU5WVcrFjc6wC4KJArLs3WsLN1ypAGMzWXrN7XSwXF4jgr4cCJ9yRoqzvkgrNzVSKndmtnfC3stm7JhtFoWqc3H",
  "key18": "4n1rtcsEcuFd3GSfpRicFn55Zr7arEqV9qmkGzyP8xazqmiQowmiKBBb9RQZfboEHYrVFw8rrMbAmyz74oPMkzUA",
  "key19": "2YWHFiEJaiq4N2eboRbzg9J7sPei8RVTP14Kk99hjNcoLnWEaozBPQpnUFKNRjSV8wieLJp5b9JNz6DXswcZ3Et3",
  "key20": "4QMAaCBTS9E9htkMCBBh46igGCpTrQXpWRiz3wvmhpMa1vzjV1XeQPbV5xLGsXQ2VmTMUL3ws1SVNcuN7bFRSfwu",
  "key21": "e4RaY2LZh9Bg4Ui8RFFL7Fx3vB8SAgfyQoXG1tafq52qib4Zo932PGFP5AH9R6AxtAVQ8MotHtBnBjuJKKW6yjN",
  "key22": "2RoAMDvF4eMXDLkTzPBc1CnhDTLdZgXjdES5pucYy5sioHPSiVyGb6wez1jaCgGZf7ngQJLfuzUh9xM6t7YqHzU5",
  "key23": "2szfhyJdC3ea8Z7GmZ1ns2gLLhBXD7gVUMZCh137QCpN8CbdeqaDmioqUtr9UARn6VyJAuU2oahP3STvgsFdFo14",
  "key24": "kVEYf3b44SP7RJ9zNeAfADuL4hvtFQ2eWH5wznknBGhdiCQ9Y9eDi7EZDWzR59XNgGhWSVbqYKdVMAH4E6c5UZp"
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
