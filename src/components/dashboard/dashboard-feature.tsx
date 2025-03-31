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
    "ot3rMHNzyeKf4K2b3rtse3NrY4SvSrPo29F8hgaFDPaZBPBPLtkvALuadyqsBX3eUGKZCPaWJxpfeSv5cT3BAhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNPdWL4uPJc2ppKLD7LDLB56tH4YKsVvPKkKG7kAgEK2pc7QzfyajaViUCNpGdfvxhtiEHHAMGUXpMxBMY9oq9n",
  "key1": "5xSFL5wbDTsiDpKf5vYphS583th1HGxWJ2D6R3H7bpHYGdLmyKSzFFSDtFwUWfGvteS1BQD1AkFGGYMDmERSgW8r",
  "key2": "2ZSb9zW5saSJ93R3p3adbkiVTMecJtzCFTZAvofpGjmUmYRVo7jgdPFNcFDmk9WnwuVZtMP6Sa5pMcVmp6aitBGZ",
  "key3": "25RkvKS3dUbGDYckPLyxezmWSDTdm3RsrpsMEf2FPHTFJD9ZcFqj4dDL3qYX2GArMGkG6U1DvCnGQJjqpde9JANr",
  "key4": "2SRU952fxRdCAdh5n3axkwUti1AAAHzsKSUbLMgHdpB7z9ndf2QHYn4SCJiyemKuSD2A7qM25cDgPEyvZUPzjGS7",
  "key5": "2aWxwVnW2dTDnMw3m5MWiZf1U64MteKY296yTN8oijnEmiTBmQNdfCJC9PXZr9UA6hbKUEU6d9B4JNbNPs6vJMZq",
  "key6": "asLpKgD34vJevG1VU9tfoMryqCVfNUTKkc3BjwCDaNYvWTbmg6bHFN2pygETWiMwHe4CkB3NVcxr8fjXfZxzTMB",
  "key7": "3U5JFq4YQoBq2Hx5AH3HPJsPEqNwk37rTKRhjozEHDURLTQAo3YL6AtHkXV2kHdMhxyai99AfdFyb3DuuYhBu6QN",
  "key8": "4uwuQiJKhfbD14DVamYho4CnTMeEdyMwrV8qwpzk5Hc2iESGbdGLDjoJHCtq2kEaXHGjee4bDYgq7f4EtG2jbEMj",
  "key9": "FhHayH8V8RgrPrYTw1gLmEcadSiYEjmRDyVPaevVRhSa8b5ABLGRy4CcmQHktMkt4kb5rD5u6gJ7Q2662PmhTXQ",
  "key10": "4Pfve3fdySsqM58eZrYmPDxYk3rjExtcXsBFHEe8H3hqUwboH5XvFM2BtWudaYnpX9oHZNdNwPQ4vGWNw7NCKcqE",
  "key11": "5ki4BE7FBnjsARxiUj8b5Kw7ALeYZWfKpqskpz51DpUgkjfD6sEtvrHGqHQZFAAzxJzHPcc9bqXvJrdAeye84WZP",
  "key12": "hJbWKuCpngX2d3xQQGRXD12v9YhAUSNfHkYtg6xmvceRVZzqmnn2mKdd1TUEGmXGkjbjoLEdfftxHQvcqKEz37W",
  "key13": "4ufjJ51GM3WZrBH8MZbWnjZ2YUnmEGAzTH5oZoGXcQrA3WSrHYveWb2JA9JNh62jb2xKwfaiukA8QGqvma2T7xxG",
  "key14": "2Am4CDeWSBsCsfrnZqB2nJk6oEsBe7gML2J9NPmmPYHUsw9kPZ7XnhTnQ29SeXcUjsG44D6QtyYXS1ZVNWYYmGK7",
  "key15": "3dj6TrmH1m6dw1K85ocZnGhtHkcCom6pyqQw1fo8iiQQ68rZ8zEhrG7hZbrLUTgsvvNTdUACiqtCimUDUutC2sTD",
  "key16": "419n32CY9Atkke7JHjzjFkpNiwzejUSDsNbwBvYL82kdfiyWv57NQ2H7yKgVJGLarSxPRLJHexqEe6XctqfNEpwH",
  "key17": "5RBwcyjrKGDkCAMwdRvbSbpc28TuYCxyZx8X5wiBSxVNMbXjN7zS8KGgSw6DGd1gn6m6ekaKmPwMd7NNnhxifPd5",
  "key18": "2BUzs6CCQLqHN2qQdDMfqH3EmjkPuNpqcozTajXy6pFZuL5WWmaSJfHQqjWbbLZRYAdSCyxSwKyWSEoMU6z3YwK6",
  "key19": "3CwpA6LtA1tgQrihiQDVsnCQCsw4pCp1KqaaR9cBX47htdazACmZrimWKpSFz2EagmqMk5DBgFzuXyVvX291U3EW",
  "key20": "2fEJgEdBqTaqW8mgnRDU7hHwJYAhcWxtSQ3VdszqB3WGwfE4khb7YDDMFXra6omUxzfmPWiSDEVH42a2sjNgSx7u",
  "key21": "4D9EFLf2U1e5y2QGBmTK3e8Z8EA6Ygj2g81WZWiUtYqWhLurowxDp1a3ojLNBJuJBaxThw7muYwUb1FT6bwS1tp9",
  "key22": "LpNCD1UCMCzhj8NAjpNrBRWuY6z3juoYfWWqmsnjntVahv4D4kV8MDuHvjDCh47QKj2Y8vfVghcX9QU3Ggmyxwe",
  "key23": "5ikQrnoQKM5X4AopTP1s2xcvUi75AVUsW2mjTudiQAiS3n1bWLbH7ASMU75Kf9b2eqx4CB5Ny3kbKVpzLxG6YcGB",
  "key24": "3JkyeFf2p9U3VyNNQdizRfZeq85KxyRY2Z2B48VBPNYuHbCiAHu6JSzCjgPfipqJANpGyViabkynWajsLQz9QGRX",
  "key25": "aGnt49g7s8CFZZmww7kajjmkik3BJFf91dVNFBAKNxKAGTTtRB6yEvGGeDof9rKreNT1hYLDHMXSpGQqAqDxLYr",
  "key26": "2aYxmgyoMx4vdYCNn9J6Xdmy3C1qnRPpydU9PBHriAgjm8B8GnJ2vdyTPhRcYt4Rb8uhuJ57SeV3xEew9o7EM9b",
  "key27": "2ZnYFtYRtvnWxG2c8ojHjg7PhDNSRLKpiqaCiL5x9ffuTSCtQqGnuCjBQgp4VGM1s9yQ8rCtZ5moFT7vXsG5ggVv",
  "key28": "3j7LmYmLdoRBQyvyeVdn15sDxK7HaZ7BKvNkbfmXXZA6Kx59kC2tBFbH6dbqeo1fu3bSxBskdt12XhDUDw47k1d",
  "key29": "4EsR7XiafPRRgVDLaeYmwwpFhqkznNa1GDep5ChTwHSnpkj1sY2ZnroU2MGHAmyyHBGJg9DRPMVe2zcp3L1aS2Ln",
  "key30": "4fEZ51nnAjfaGe5AhRCyohaZuv3S9U7qgJX2PgvkGtL358eT9iqHewueVpxK4qL944vWiiJEE1ijaD6RqyjVrHgR",
  "key31": "5H8me5wwuaAsBEFgsCFTfPHddhLcQcMd3rBGWnYqjmCWT8RiiwGei2JxowUbyN6YGJ42Ts5J4hspctGrf7do4rxe",
  "key32": "4n2anRwRFzEBERbsH6LrR9rXQKMfnAh2Nut6B92MYNdv3ZJYLqyZwUpkhMLhTEKaQC9qNHfpojk1ErMA2TbSSLj8",
  "key33": "yQ3J5Fu4TdVbyDMesZy88Q672Azy8cFE7eTb4KhejHANXmoHvZexMYhCeA2cSQQ5y1aKT8fuSe81iZLTBeMKFpV",
  "key34": "zhG1TC4vNxpB5wchCGpteLC4yjXWtT8QykJLauba7dcVdPyNnuR3qpoAT4TE3C7md9dBwkhNxDj5VDmGQXDrEg5"
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
