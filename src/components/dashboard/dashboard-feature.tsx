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
    "5PwmKzymktVqYMZiZQvRp2EjMLpmSAsx1b6z6cdPZSfWxj7a2yx99xRBi3D2d1aPuGpY3mGGHyZLvknxUVbBJD8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bZFek5rogPHwoMVPwstmM4mjBLf4TVcg7e1HivLGxNLHRTR9S3Z9EfH2XVmU8MGUtypv4pvoX9dYJjhRZRUT5yk",
  "key1": "3MWicDC9FcvetCxC6nQQfqTzp4r1XZuADUkhv8cXtEoTw3LWxpUYxvZjYph7yvA9B36ZGMYVYdfWhXg3iNBhcHNo",
  "key2": "GgUbhL12skbQR6XS5huWaFJPk83Tugudpp3VweQhWb7Ht48iDRfQSryCDh4b7s96XAsXDLktXTf8B8s3AkGeRr2",
  "key3": "5UAJKXsjTvQFSURXV7sB7YzUtRMbsTtnD9syD7tHoEHwRQ4Hf6mwADVHWCpyDM9dHqomG2EM3gPEjQpU8roifC1Q",
  "key4": "3kBh1XQdfdTU28UFxepkm3yM4bjkgJ3tLt8ibPQn31ZCa2qhPRw2C8NrPT5vq6GBi2ToF2RLjveAZh9deL94Ckcr",
  "key5": "59PFSh4TMRFacq9XNBz3e9BMJgrwF4ttGnxMJjfogeL5XmbWxFCvTreBX3d8mdxgSuViEdUt5MDfL3zGMLFNUY9P",
  "key6": "57CFfHf8hpdfjxnaKKzPf4zbJJDRUQuKLvZZxAj9AzY1P3RrqngUMjRmCheafjkR2uViqtmw4HJE6NinQCJXj2Hp",
  "key7": "5CcHDAZYJ1uPh3SrqXnMD3sxVZG8XP5opYdb1AeE4xQ4q2E7VgxE9AbbPsdiE77xWJp5tAn5nkqaz2VaZuapAzSZ",
  "key8": "2i3LUY7M1mWoY5DRY98pUHGQuPKRdDH6ZUxUsmvL94g3GGHdsoYPQawMR5fHqZuMbeUCgBwjcPUpYs2m5gBk2ECW",
  "key9": "2izrkJp2sEnvaM7r7Uksnj9LcsoqmdV3jgPuEgBvvntTszrpTEM39a2QwdrZBCihvhf2kYagoDsLTPQQftugWiJ1",
  "key10": "MCT7UUg9BwbdenExhw1DypAM3jjMHJ73v8gxmnRRfohnrkFWASdpuchVsRtf9yTGQDAVpynoTgYgnkomHjXyz9M",
  "key11": "8yP5A9k2qxBS6Lee5FAevg59YvibyiVCTpSQH5a5N2hzeG3ZPbjZFceh4y2AxytgDDWhraocJCVexVW337j6YXw",
  "key12": "JdJotbwMbH92dC1H8Vjr8CEtYpap8Mx7FCsKkQASGLsQgheP1eovHbnijMyXwjUSUHXYTKKvHGwSgLodwh2EuBt",
  "key13": "63Cazgg6fHCbKfSVpfSDq3kKsmXe5CQPv4hAEY3zyyV2JKzdFH7baGoN8LWZTe5FSou5gTyrZtyTQYJWJdU3KdsQ",
  "key14": "pAqXXvFh1TJRadxL2BYLs2TaYvgSwTrFAgEgjt6icMZWTAJwaqhgpHjfSWePR6EjnPr6qcpJnp6PRsymnbC89sy",
  "key15": "XVFae1TSCBRqzFkfLfZvPfmUu1onTJYHcQCZHBKug9xmaQerBvnif2gbw5C9JCGdWGWQFXnj1UyV9boMqfb6dJv",
  "key16": "2g9H6us9gjockNYmK6MmkLakJSUzS5vbSwSLhediWYajsVQkygS6LcmHgkiLciuUaWnpavVQiBzCxuo9XsKyuJRU",
  "key17": "5rU7zushw4yecvNSzJjrh82BnzVfhpudm3pPV233Fy4UnmCFnkV9rMdQipuUteY76XssmcukGcRENa7P42PYzHfV",
  "key18": "4ZQsvtaV5BPtvnEPsCRHovPVszbPAgvFmxv6GXCanvcRvWDPd8UZ2Z3Q1V55tGbcZgiJfeKwQ8UNA56fRNC9cTxU",
  "key19": "2fqnjm7qUFjQtuU9rmngsJvyHdjoGtqiqpdoaatF7rKXT44TtyEyGDyd1Hgk8oqTmHGJrrnW7F8kwCYBJ4bFyKUJ",
  "key20": "3m5kF6d5CJeZ83jXRTeQAFDwE62vSZNF91jFxUg38yevQeAXttFwZy2rjx6XYZAMjePkz1XuWkXmLqNmBDrdvMfi",
  "key21": "G5jTRJVcKFHuTgjoJzezsdTaCDJfRpLoaeo3QXMX3Enh8g4eihF7buUkrBccVP86MoTDvxvJmnWYB1KvMTJ8Hxb",
  "key22": "ghZ8QeXsbVTnWQB8qaLXympatEsza1tmSjz4nvEg6hZe7iWSUiaAKxpi2tAxHBhLNUcju68fb7vvZiCWzL5Fpq3",
  "key23": "3RDvFLFHXo2PVGUdWLt9Vx3S85RhXm3MVdGJ3prmu81Mrj8yqvFxfxc2Pnao7mS1ExWYbE7VhjQqU7xzqHURvrVG",
  "key24": "jU7CihxguELtrN7PG2pU4f5wkXEXX6QfsgdHuLC7SjW8zjtBMdG1onUhVHKK2K5WwvZJ1h7871tMvjxGM3nz3u4",
  "key25": "4Uimw2BgdMb7TFEmfNarBLWVFmNgWKHcfRyhw2g1yXjp3WL9BXifcPxr4GudU3RWbeM6FU3Z9rogyG5J5Zb6A2Qi",
  "key26": "4pmdv2gBw62YyFVV7NZwpjJfdkytvD2uvWD4HRJJm9iGQQ8xs9gBw1jPYPsxdUUgqUXZwoGLWXAqq9mgVRSEbpVw",
  "key27": "5RYqeuSiaB443ViwUAfc2pcPdXQ6B92toMiq3taZ9MxGcVxghomQRo5a2vVycYR7EdkqStLgXa1QMFHgox4mgmnx",
  "key28": "3nzSEyWYciU2jd4n7URnQYbPD43gTWqBtQrEDfHYbXnYo4dfT3iMeptQuZciQzN17pYp4CBSKN1MtkBfRmsBsHkc",
  "key29": "3yPqgiK7QyRzCrCVvad546kGH4owLcJtrWmXCyq4XcZuQu4VSQhUQcZEFyBYvSyJozfRNUmMFrrJYYSCejdwuG6r",
  "key30": "2HJTLt19L66vNDWMM9ye9dvkLVMai5wCv67nL7xsEzrjFkZWxysY9Qx9vE3ib48SDbYKLnH8vkaxcbSHZPKqwEZv",
  "key31": "53KFmi8zzsvYigVPbW8SJwvcaUjFtRqm3R4mb7cx9A8ZCTuf56fbj4WRKFPNJQ1ngf4Nu3ijCdtntCq5acwS8Edr"
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
