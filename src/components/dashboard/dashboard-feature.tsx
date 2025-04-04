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
    "5u3wHm4PnMecpv7JrS8rt7t22zxst4pATqhysj3VJWvN8vuNqWvbKAymoNTwh2LVRu24ePAh9UQv1YGy2sgiMejK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULA167EXCxtSWWJHDkfj5wvAgP4sPpapZza9A2mNDBt13456N93k4PvJ8NRdWvhRwcs4ap3Lk9tnoLrkTrsCEvw",
  "key1": "2UXxRqoBTimJaMvRwE6MimwxEEyejQVbHe9pGUwcVn2NdY3XQmu1Fz4mAvSHHrWunevVTubgkvDRKUPCFgQSCLEU",
  "key2": "48vQwSotEm4K4rTDNV7WLL9kL1JdGZzi8pwzj63t8vmfXfzhCYFMS5AfmSAF7PuXiqzpCH9rzDyJT182uf4xExJo",
  "key3": "2wVVMkVRuDXcj7rXaXMtKucLj1CYi4z6WZn3Eiye2VTGMnwLrZvzGkPSh2s7ggPgtYSzpvjKQBmnmvK2H78orcWr",
  "key4": "5nyoNdq6qgxxdWFd5ctreoVvh42oJET6S9dCxwLgusQxhueZYjY41YPUR3YGLu8jedxAkuuRpSfydstE8iBQGsDt",
  "key5": "RUExWrr6nQjNK6ayKywQsGM7LDRm5xvst12yzV1PCjUdPYL9mGQYKsGkj7tiy2MgFgaRJzdShfNfBT1gFXYytfV",
  "key6": "57TtKRf9unurQiPuiay8cvuUMpRjwNq75751PPUHpEm1Cgkcn6nSwKtmQtdfMi1xeLVJxh7jNUua662ishTy8V9h",
  "key7": "5NXKaZdss8Zt1Wp8hZgX5PpBCWtdEcwtMqRYMKbzSMM1LCXhissMNkrChJCCVDNPiWpHJPHr2FkPDFT22VwNTzca",
  "key8": "4XQdZwvifJwz5LM6nE6WWR9YSS39NDP1VLZ6wq6YR1i1eFQjFmjWN85XoeJ5gBQGsRzkZCYXUgZkC3SNPtudPvwU",
  "key9": "44FktJp4cCZWpmQfj82wTeZFVKhMQdo5jYNMmqoDqw1Ct7XYroaFUPtgqiJy3KBvzvjiSHLJYkqhp5VKnxRHgfeu",
  "key10": "4R9mCNgE6mb6zyTk6QAqehA5tb7gDrUpuk2HjmZAN3R8F7qjTqRHGcehxJAjSZkJXCeLQ5KjqCjw7ip6FezHtC6s",
  "key11": "47wsqeab8dVShmRQVaKbHrDJNQF9uUNTZ1rxRXBMdmccvFe6vQwKz66RNX9ohYTfDkmPsL6Z3P8ArBVi1d132LY2",
  "key12": "5rWz2X64DqxvmrdLF3E9bEc7Y389Mmwz1tVZNZYjV4epApVeVcEeQRyULo2cZ52mvXcxy74dm7evb6v6CnREVNwJ",
  "key13": "rQhcDnUaZvtSAwkMqWeqmDXsK7hpVNa1pjvnJShaLzmP8iYAXzPrv3XyL9ZGCg65WqB3ur65SUzQQbxLUHwgMBN",
  "key14": "5e1Ji5oXB5sdnp4wB481kVodFMXxr9YiZ6jKrhYtA1LbiWsgkE5xnpobNmCjiLPJwWvZmFNAs1wr1ahBHei71M4D",
  "key15": "4SmzNXH8KwooCNikULBg34HMUvXPTLVRmVMjYLp3mSQLbCkiT6um7VPYciogPW9kSGKXL3jporc7SQHmCGJkTR83",
  "key16": "2pvz3jRaydR52DEKPFa8hJXBp1Erbd2JR4WJk2Zsz6ZnNK1MqsSfE6n38po1nKyEfMYfttR6WhbK7BPbndAvpEdH",
  "key17": "4WhfJLi43CAvMapb2uf6napiFSjYvYzsVjs6JgZj9oudvdmhPkyp53DD5VwNQr2BpN6UXctfAGwAqtxH6SaxTdSz",
  "key18": "4BEsWzN5dDKosnUSCWmAkCNednJE4rJgd68zsctD26AwqtX7JAqihpjLE5pSfDgYGUXYJo6AVS1Eb4oioYVxkG94",
  "key19": "3ffwVTjdaZpbMeJMEfkMEmc9YKtFzBCpBKgwNSiTfyimVsALu3oybxMHZgQhbuNshHuNyQfbSDQSH1kDYe8GgKQp",
  "key20": "Gi9XYk3xB6hZRyRcxqYY3Ae1k2dmDYftMVmN7GPjQZeVkRMdu79fBF5ttaPqML9CLG7t9HKbpKn24EknxnN1SWW",
  "key21": "fspM2c2jHregXgs1pu2HDBce1VCB71UFjkk6gnJLh4uEs4zCBwZMLsCCbphM8Q8CH53HBCRWuR9kuk4PF6bojtU",
  "key22": "4Fytn2sVB6kGCf2iLemHxSNZTgYXD2A2mC6rHoHJNXXS9Fns4Yk3RwgTBtaQsozywjLMQdF6vgteKhguhiopTUCo",
  "key23": "5CkfqurQBhR2TD5voz1qNPfBBsjHLpZZUC412LLPGaDDeL7Fzz5GGbxdtzmf4Dc8hLAmgEkZFZuMsvxZdXUtUSWh",
  "key24": "5ba7XxbDCAKRw4XPkt6CrCyKBDmdNavTc7y8XsQgJBwFqesrcKg4d1WSamPuUoVA6YNZBc1WAJPMhZt4XDBh7MW5",
  "key25": "3YBMu4pnhtAriLuAkSy8XgyyY37D56v9MY9r8dkYg8HPKhgfTpV5pSBvq9AkqVeppLQU5MhkMi86CSzy4NHkR3KG",
  "key26": "iwP9Z8hLrnTUSLzgwN75xrhEf4JHBiRTsFmEL9uA69RZMxkTFyWeXfU1Xe9sJeWQmxUD18vrHmBcRy79zH9y74d",
  "key27": "enwJEAURK1RnnByfn2s8M6LiqkkfLSL1hZF99zxXZaKBaEhBXsDz1LY34pW7PmjJyanQRfYtKsQ61FBy4dNKUGn",
  "key28": "4g8LTtWacPdTvDKHh9mGB2GzqMdvrVUeUtagrjdFE5uyqHH2kNViBaQF12zS6ndE5YmRCcH8ioFyAMht9hTEKNRY",
  "key29": "3tfjsKeq1TxFXagdR4YsMqk7qZefVE7NQ2D5vTNsfL3yJtkkZybQqMk9cvqyEWZFMZSakPkDd68Y7w9qv6Sjc8Qy",
  "key30": "4vbv5Y2ovqaLt3rXz3QnCy7xavun5u6EcDEFwAi2DjuJhMdq23iDtfQEJ8EDCfdrNadEnncP1qYog31tTPo3qsbJ",
  "key31": "H1Rqi92zZQSou1jPDJoG9N8rRku1toRS3CEbLgYn3hPSSQqQUGHCCv5tcwT7wKEvrrGBvtEqpscLXKdiTcvsU93",
  "key32": "3hmyzcvFmco8BpTMziQa5kgazNWuKHhFbuDN8d3W9VuKgLCpMP8949vA2MsLA76zD8Ny2DwnjgPd5mSaA9yESSeG",
  "key33": "38XMk7FR5DrdFz5HxLDzUYL5XXm2BG77iE2fzUYAdPw9V3r6eJxNByue1Y3pnbT7E85jfox7D2rXbYCXQKrmBnY9",
  "key34": "2xrZvcPVYMjamgMdE771UXoGKYJo8Gvk4GYnXezDaV25wDC8Buf7DYh1cmfgJfCArYxE5Cq9y5JrVErQQR151y3G",
  "key35": "aPR94iQPTyZVJHmZDCFvBV8wLfcttHSya3Grnw98gdQF7qXkQxCFmQsQs9sA36Tcv8bpjtWRq2iY6jsg2C5TGNb",
  "key36": "3dBUBKgjq1taN3figTVmnsBivRRDk7FhLb5xtYfGN8bYouJnUG7FzHHDFStD8JdgLM2CvdosVgmrA2UiNXfXGNgy",
  "key37": "5QL4v9LsLyc41LMurW4rDEmJTdwigp9CnwFKxHwS744q2zQ6A2MouM1fyfxTpS1o6Jw3YVMhrNJETgKksjQBF9NY",
  "key38": "3nFP9zD4ACDJTQzKXjEtc6xBZV3aomXE98AkyYgTNxxTENt9ye9RsXqNemvaizgLCNtQvXn8Z8d7HvFF8ybcboH3",
  "key39": "5YnqV1aVCFZvbkFowuSahXcyRJDNLhEKwMqMYURkT1aKNdYvUsbrXX2yd7HKCQMg7AVcJDkE9iL91hZnqbbvfBCW",
  "key40": "5Rh8t4Srn34QipZs8XYJGAqmkTukwqSKQfyUHhoGArrZhEcstAebEFX4xL9V4H4Y7MGMDpnLpBFaTZNE1YKnyvDV",
  "key41": "2vY8KcGNecKN5aSHPL8mWLTXWti1xLqUxkgA4PYN21dqx9kKXhWbJJMDyxgy4bRdbgNRsGQc34rgRRHHJ9p2Jz2S"
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
